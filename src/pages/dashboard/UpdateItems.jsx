import React from 'react';
import SectionTile from '../../components/sectionTile';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const Image_hosting_key = import.meta.env.VITE_image_hosting_key;
const Image_hosting_api = `https://api.imgbb.com/1/upload?key=${Image_hosting_key}`

const UpdateItems = () => {
    const itemData = useLoaderData();
    const { name, recipe, price, category, image, _id } = itemData;
    console.log(itemData);

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // img upload to imagBB and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(Image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);

        // now send the menu item data to the server with image url
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                category: data.category,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount) {
                reset();
                // add a success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} updated successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }


    };
    return (
        <div>
            <SectionTile title={'Update An Item'} subtitle={'Refresh Item'}></SectionTile>

            <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl mx-auto mb-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input
                            defaultValue={name}
                            {...register("name", { required: true })} type="text" className="input input-bordered" required />
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full ">
                                <option disabled value='default'>select category</option>
                                <option value={'offered'}>offered</option>
                                <option value={'salad'}>salad</option>
                                <option value={'soup'}>soup</option>
                                <option value={'pizza'}>pizza</option>
                                <option value={'dessert'}>dessert</option>
                                <option value={'drinks'}>drinks</option>
                                <option value={'popular'}>popular</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true })}
                                defaultValue={price}
                                type="number" placeholder="price" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipeDetails", { required: true })}
                            defaultValue={recipe}
                            className="textarea textarea-bordered h-32" required placeholder="Bio"></textarea>
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className="label-text">Upload New Image*</span>
                        </label>
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className='file-input'
                        />
                    </div>
                    <div className="form-control my-3">
                        <button className="text-white bg-orange-400 py-2 rounded-lg hover:bg-orange-500">Update Item </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItems;
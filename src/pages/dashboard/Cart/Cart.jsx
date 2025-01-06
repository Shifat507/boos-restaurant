import React from 'react';
import useCart from '../../../hooks/useCart';
import SectionTile from '../../../components/sectionTile';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();
    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTile subtitle={'My Cart'} title={'WANNA ADD MORE?'}></SectionTile>

            <div className='flex justify-between items-center w-10/12 mx-auto'>
                <h2 className='text-2xl font-semibold'>Items : {cart.length}</h2>
                <h2 className='text-2xl font-semibold'>Total Price : ${totalPrice}</h2>
                <button className="btn btn-warning">Pay</button>
            </div>
            <div className='10/12 mx-auto'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className='font-bold'>Item Image</th>
                                <th className='font-bold'>Name</th>
                                <th className='font-bold'>Price</th>
                                <th className='font-bold'>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}
                            {
                                cart.map((item, idx) => <tr key={item._id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12 md:h-16 md:w-16">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold text-lg">{item.name}</div>
                                    </td>
                                    <td className='text-lg font-bold'>${item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-md text-red-500"><RiDeleteBin6Fill size={30} /></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;

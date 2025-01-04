import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from '../hooks/useCart';
// import axios from 'axios';

const FoodCard = ({ food }) => {
    const { user } = useContext(AuthContext);
    const [ , refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const { image, name, recipe, price, _id } = food;
    
    const handleAddToCart = async (item) => {
        if (user && user.email) {
            console.log(item);
            const cartItem = {
                menuId : _id,
                email : user.email,
                name,
                image,
                price
            }
            const {data} = await axiosSecure.post('/carts', cartItem);
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} is added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            }
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login before add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            });
        }
    }
    return (
        <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <img
                src={image}
                alt="Caesar Salad"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                    <span className="bg-gray-900 text-white text-sm px-2 py-1 rounded-full">
                        ${price}
                    </span>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                    {recipe}
                </p>
                <button onClick={() => handleAddToCart(food)} className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-yellow-600 transition duration-300">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
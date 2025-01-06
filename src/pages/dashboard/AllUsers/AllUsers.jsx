import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTile from '../../../components/sectionTile';
import { FaUsers } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllUsers = () => {
    // const [users, setUsers] = useState([]);
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    const handleDeleteUser = (user) => {
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

                axiosSecure.delete(`/users/${user._id}`)
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
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is Admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

return (
        <div>
            <SectionTile subtitle={'How many??'} title={'MANAGE ALL USERS'}></SectionTile>

            <div className='w-11/12 mx-auto'>
                <h1 className='text-3xl font-semibold'>All Users: {users.length}</h1>
                <div>
                    {
                        users && <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead className='bg-orange-400 py-3 text-white font-semibold text-lg'>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        users.map((user, idx) => <tr key={user._id}>
                                            <th>{idx + 1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                {
                                                    user.role === 'admin' ? <div className="badge badge-secondary badge-outline">Admin</div> :
                                                        <button
                                                            onClick={() => handleMakeAdmin(user)}
                                                            className="btn btn-ghost btn-md text-red-500">

                                                            <FaUsers size={30} />
                                                        </button>
                                                }
                                            </td>
                                            <td><button
                                                onClick={() => handleDeleteUser(user)}
                                                className="btn btn-ghost btn-md text-red-500"><RiDeleteBin6Fill size={30} /></button></td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
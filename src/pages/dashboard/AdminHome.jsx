import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { IoWalletSharp } from 'react-icons/io5';
import { FaShuttleVan, FaUsers } from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';


const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })


    return (
        <div className='w-11/12 mx-auto my-16'>
            <div>
                <h1 className='text-3xl font-semibold'><span>Hi, Welcome </span>
                    {
                        user?.displayName ? user.displayName : 'Back'
                    }
                </h1>
            </div>

            {
                stats && <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-green-500">
                        <IoWalletSharp size={30} />
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">${stats.revenue}</div>

                    </div>

                    <div className="stat">
                        <div className="stat-figure text-lime-300">
                        <FaUsers  size={30}/>
                        </div>
                        <div className="stat-title">Customers</div>
                        <div className="stat-value">{stats.users}</div>

                    </div>

                    <div className="stat">
                        <div className="stat-figure text-emerald-600">
                        <AiFillProduct  size={30}/>
                        </div>
                        <div className="stat-title">Products</div>
                        <div className="stat-value">{stats.menuItems}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-indigo-900">
                        <FaShuttleVan size={30} />
                        </div>
                        <div className="stat-title">Orders</div>
                        <div className="stat-value">{stats.menuItems}</div>
                    </div>
                </div>
            }
        </div>
    );
};

export default AdminHome;
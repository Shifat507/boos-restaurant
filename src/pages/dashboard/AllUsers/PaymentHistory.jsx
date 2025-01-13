import React, { useContext } from 'react';
import SectionTile from '../../../components/sectionTile';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <SectionTile subtitle={'History'} title={'Payment History'}></SectionTile>
            <div className='w-10/12 mx-auto'>
                <h2 className='text-3xl font-semibold'>Total Payment : {payments.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                            <th>Total Price</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((payment, idx) => <tr>
                                <th>{idx+1}</th>
                                <td>{user.email}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.price}</td>
                                <td>{payment.date}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;
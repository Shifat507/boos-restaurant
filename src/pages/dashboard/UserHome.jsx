import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='w-11/12 mx-auto my-16'>
            <h1 className='text-3xl font-semibold'><span>Hi, Welcome </span> 
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>
        </div>
    );
};

export default UserHome;<h1>User Home</h1>
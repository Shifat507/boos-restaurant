import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements()
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const { user } = useContext(AuthContext)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const navigate = useNavigate();
 
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [totalPrice, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('Payment Error: ', error);
            setError(error.message);
        }
        else {
            console.log('Payment method: ', paymentMethod);
            setError('');
        }

        // payment intent
        const { paymentIntent, error: conformError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (conformError) {
            console.log('conform error');
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
            }
        }

        // now save payment in the database
        const payment = {
            email: user.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
            date: new Date(),
            cartIds: cart.map(item => item._id),
            menuItemIds: cart.map(item => item.menuId),
            status: 'pending'
        }

        const res = await axiosSecure.post('/payments', payment);
        console.log(res.data);
        refetch()
        if(res.data?.paymentResult?.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Payment Success",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/paymentHistory')
        }
    }
    return (
        <div className='max-w-lg mx-auto'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='bg-purple-500 hover:bg-purple-600 text-white mt-3 px-6 py-1 rounded-md' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className='text-red-500'>{error}</p>
                {
                    transactionId && <p className='text-green-500'>Transaction Id: {transactionId}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;       
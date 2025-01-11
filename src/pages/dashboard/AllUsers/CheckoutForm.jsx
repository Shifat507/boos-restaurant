import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements()
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total , item)=> total+item.price , 0)

    useEffect( ()=>{
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
        .catch(err=>{
            console.log(err);
        })
    }, [totalPrice, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('Payment Error: ',error);
            setError(error.message);
        }
        else{
            console.log('Payment method: ',paymentMethod);
            setError('');
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
            </form>
        </div>
    );
};

export default CheckoutForm;       
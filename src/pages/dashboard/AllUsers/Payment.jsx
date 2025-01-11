import React from 'react';
import SectionTile from '../../../components/sectionTile';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key)
const Payment = () => {
    
    return (
        <div>
            <SectionTile subtitle={'Payment'} title={'Please pay to eat'} ></SectionTile>

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
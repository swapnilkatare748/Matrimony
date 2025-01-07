
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');  // Replace with your Stripe Publishable Key

const CheckoutButton = () => {
  const handleClick = async () => {
    const stripe = await stripePromise;
    
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: 'your_price_id', quantity: 1 },  // Replace with your price ID
      ],
      mode: 'payment',
      successUrl: 'http://localhost:3000/success',  // Replace with your success URL
      cancelUrl: 'http://localhost:3000/cancel',   // Replace with your cancel URL
    });

    if (error) {
      console.error('Stripe Checkout Error:', error);
    }
  };

  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
};

export default CheckoutButton;

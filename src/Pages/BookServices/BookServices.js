import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import StripePaymentForm from '../Dashboard/StripeForm/StripePaymentForm';
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const BookServices = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
      <StripePaymentForm />
    </Elements>
    </div>
  );
};

export default BookServices;

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import MyCheckoutForm from './success'

export default function Payment() {

  const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')
  console.log(stripePromise);


  return (
    <div className="sizeContainer" >
      <Elements stripe={stripePromise}>
        <MyCheckoutForm />
      </Elements>
    </div>
  )


}

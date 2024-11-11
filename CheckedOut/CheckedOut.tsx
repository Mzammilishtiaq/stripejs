import LoadStripeCheck from '@src/Shared/LoadStripe/LoadStripeCheck'
import { backendCall_stripe } from '@src/Shared/utils/BackendService/backendcall_stripe';
import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51PpRavP6lHPaRyaTRXrSGEoqM4mmSk5jFFVtYkcNqK2TtiLOmFOsfP1SXlJX45LPXcdDlUbwRtEij7dX6gL1nIV400fgE7RU9a');

function CheckedOut() {
  const [amountValue, setAmountValue] = useState() as any;

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    backendCall_stripe({
      url: '/v1/payment_intents',
      method: 'POST',
      data: {
        amount: amountValue,
        currency: 'usd'
      }
    }).then((res: any) => {
      if (!res.error) {
        console.log('res data', res.id)
        sessionStorage.setItem('createpaymnet', JSON.stringify(res))
      }
    })
  };

  return (
    <>
      <div className='m-2 shadow-2xl p-3'>
        <h1 className="text-xl font-semibold">Add Amount</h1>
        <form onSubmit={handleSubmit} className='m-2 flex gap-2'>
          <input type="text" name='amountValue' onChange={(e) => setAmountValue(e.target.value)} placeholder='Enter the amount' className='text-black-900 border-2 rounded-md p-2' />
          <button type='submit' className='text-lg bg-black-900 text-white p-2 rounded-md'>Submit Amount</button>
        </form>



      </div>

        <Elements stripe={stripePromise}>
          <LoadStripeCheck />
        </Elements>
    </>
  )
}

export default CheckedOut

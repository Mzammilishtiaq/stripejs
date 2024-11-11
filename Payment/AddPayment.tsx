import React from 'react'
import ContentContainer from '@src/Containers/ContentContainer'
import LoadStripe from '@src/Shared/LoadStripe/LoadStripe'
import { backendCall } from '@src/Shared/utils/BackendService/backendCall'
import { Link, useNavigate } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

function AddPayment() {
    const navigate = useNavigate();

    const handleSubmit = (card: any) => {
        backendCall({
            url: '/api/user/add_card',
            method: 'POST',
            data: { card_token: card }
        }).then((res: any) => {
            if (!res.error) {
                console.log('res add payment', res)
                navigate('/paymentmethod')
            }
        })
    }

    const stripePromise = loadStripe(
        'pk_test_51KtTL1AbxQmDg3A9NJj6VDKbDRczqRrjBXupO96oGKnbyGPpLphMTWtkGt91gledEXYyUPjC91ev6h6duo4HloCK00Zlg8jL9y'
    );
    return (
        <div className='bg-gradient min-h-screen p-6 shadow'>
            <div className='w-50 flex flex-col gap-5 bg-white rounded-md p-5'>
                <div className="flex items-center gap-1">
                    <Link className='text-2xl font-semibold text-black-900 hover:text-blue-200' to={'/paymentmethod'}>Payment Method</Link>
                    <span> / </span>
                    <h1 className='text-2xl font-semibold text-black-900'>Add New Card</h1>
                </div>
                <Elements stripe={stripePromise}>
                    <LoadStripe handlesubmitcard={handleSubmit} />
                </Elements>
            </div>



        </div>
    )
}

export default AddPayment

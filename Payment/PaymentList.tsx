import { backendCall } from '@src/Shared/utils/BackendService/backendCall'
import React, { useEffect, useState } from 'react'
import Visacard from '@src/assets/visacard.svg';
import Mastercard from '@src/assets/masterCard.svg';
import { CircularProgress, RadioGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Radio from '@src/Shared/Radio/Radio';

function PaymentList() {
    const [cardinfo, setCardInfo] = useState([]) as any;
    const [isloading, setLoading] = useState(false)
    const [selectedCardId,setSelectedCardId] = useState('');
const navigate = useNavigate();

    console.log('cardinfo', cardinfo)
    useEffect(() => {
        cardInfos();
    }, [])
    const cardInfos = () => {
        setLoading(true)
        backendCall({
            url: '/api/user/cards',
            method: 'GET'
        }).then((res) => {
            if (!res.error) {
                setLoading(false)
                setCardInfo(res?.data)
            }
        })
    }

    const handleSelectCard = (e:any)=>{
        setSelectedCardId(e.target.name === 'STRIPE' ? e.target.id : '');

    }

    return (
        <div className='bg-gradient min-h-screen p-6 shadow'>
            <div className='w-50 flex flex-col gap-5 bg-white rounded-md p-5'>
                <div className="flex items-center justify-between">
                <h1 className='text-2xl font-semibold text-black-900'>Payment Method</h1>
                <button className='border-2 border-x-blue-500 p-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white' onClick={()=>navigate('/addpayment')}>Add New Card</button>
                </div>
                <div className="w-full flex justify-center">
                    {isloading && <CircularProgress />}
                </div>

                {cardinfo.map((carditem: any, index: any) => (
                    <div className="w-50 flex items-center gap-2 bg-blue-100 rounded-md p-5">
                       <Radio
                                        name={'STRIPE'}
                                        id={carditem?.id}
                                        labelClassName="block -top-3"
                                        checked={selectedCardId === carditem?.id}
                                        onClick={(e: any) => handleSelectCard(e)}
                        />
                        {carditem.brand === "mastercard" ?
                            <img src={Mastercard} alt="" className='w-14 h-14' /> :
                            <img src={Visacard} alt="" className='w-14 h-14' />}
                        <div className="space-y-2">
                            <p className="text-sm text-black-900">{carditem?.brand}</p>
                            <h6 className="text-gray-900">**** {carditem?.last_four}</h6>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default PaymentList

import { Breadcrumbs } from "@mui/material"
import { Link, useParams, useNavigate } from "react-router-dom"
// import imag3 from '../../assets/image/detail/image3.svg'
import Star from "../../Shared/Star/Star"
import { CustomHookDetail } from "../../Hooks/CustomHooks"
import { Skeleton } from '@mui/material'

function ProductDetail() {
    const { id }: any = useParams();
    const NEW_ARRIVALS_URL = `products/${id}`;
    const { data, isLoading } = CustomHookDetail(['POST_DETAIL', id], NEW_ARRIVALS_URL);
const navigate = useNavigate()

    console.log('detail', data)





    const skeletonCard = (
        <div className="flex items-start gap-5 justify-around ">
        <div className="flex flex-col items-start gap-3 p-5">
            <Skeleton variant="rounded" animation="wave" width={1000} height={550} />
        </div>
        <div className="p-5">
            <div className="flex flex-col gap-5">
                <Skeleton variant="rounded" animation="wave" width={300} />
                <div className="flex items-center gap-4">
                    <Skeleton variant="rounded" animation="wave" width={300} />
                    <Skeleton variant="rounded" animation="wave" width={300} />
                </div>
                <div className="flex items-center gap-4">
                    <Skeleton variant="rounded" animation="wave" width={300} />
                    <Skeleton variant="rounded" animation="wave" width={300} />
                    <Skeleton variant="rounded" animation="wave" width={300} />
                </div>
                <Skeleton variant="rounded" animation="wave" width={300} />
                <div className="border-b-2 w-9/12"></div>
                <div className="flex flex-col gap-2">
                    <Skeleton variant="rounded" animation="wave" width={300} />
                    <div className="color flex gap-2">
                        <Skeleton variant="rounded" animation="wave" width={50} height={50} />
                        <Skeleton variant="rounded" animation="wave" width={50} height={50} />
                        <Skeleton variant="rounded" animation="wave" width={50} height={50} />
                    </div>
                </div>
                <div className="border-b-2 w-9/12"></div>
                <div className="flex flex-col gap-3">
                    <Skeleton variant="rounded" animation="wave" width={300} />
                    <div className="flex items-center gap-3">
                        <Skeleton variant="rounded" animation="wave" width={100} />
                        <Skeleton variant="rounded" animation="wave" width={100} />
                        <Skeleton variant="rounded" animation="wave" width={100} />
                        <Skeleton variant="rounded" animation="wave" width={100} />
                    </div>
                </div>
                <div className="border-b-2 w-9/12"></div>
                <div className="flex items-center gap-3">
                    <Skeleton variant="rounded" animation="wave" width={50} height={50} />
                    <Skeleton variant="rounded" animation="wave" width={100} height={50} />
                    <Skeleton variant="rounded" animation="wave" width={200} />
                </div>
            </div>
        </div>
    </div>
    );



    return (
        <div className="p-5 flex flex-col items-start gap-5">
            <Breadcrumbs separator="›" aria-label="breadcrumb" className='opacity-[0.6]'>
                <Link to='/' className='text-sm xs:text-xs hover:!text-blue-902 cursor-pointer'>
                    Home
                </Link>
                <p className='text-sm xs:text-xs hover:!text-blue-902 cursor-pointer' onClick={()=>navigate(-1)}>Shop</p>
                <p className='text-sm xs:text-xs hover:!text-blue-902 cursor-pointer' onClick={()=>navigate(-1)}>Men</p>
                <p className='text-sm xs:text-xs hover:!text-blue-902 cursor-pointer' onClick={()=>navigate(-1)}>T-Shirt</p>
            </Breadcrumbs>

            {
                isLoading ? (
                    <>{skeletonCard}</>
                ) : (
                    <div className="w-full flex items-center gap-5 justify-around">
                        <div className="w-full flex flex-col items-center">
                            <img src={data?.image} style={{ width: 500, height: 550, borderRadius:"20px" }} alt="" />
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col items-start gap-5">
                                <h4 className="text-5xl">{data?.title}</h4>
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1"><Star value={3.5} /></div>
                                    <div>{3.5}/{100}</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <h1 className="text-xl font-semibold">${data?.price}</h1>
                                    <h1 className="text-xl font-semibold line-through">$450</h1>
                                    <h1 className="bg-[#FF3333] bg-opacity-45 text-white rounded-2xl p-1">-40%</h1>
                                </div>
                                <div className="">
                                    <p>{data?.des}</p>
                                </div>
                                <div className="border-b-2 w-9/12"></div>
                                <div className="flex flex-col gap-2">
                                    <h1>Select Colors</h1>
                                    <div className="color flex gap-2">
                                        <div className="bg-[#4F4631] p-5 w-4 h-4 rounded-full"></div>
                                        <div className="bg-[#314F4A] p-5 w-4 h-4 rounded-full"></div>
                                        <div className="bg-[#31344F] p-5 w-4 h-4 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="border-b-2 w-9/12"></div>
                                <div className="flex flex-col gap-3">
                                    <h1>Choose Size</h1>
                                    <div className="flex items-center gap-3">
                                        <h1 className="text-black text-opacity-45 rounded-full bg-gray-300 px-4 py-2 ">Small</h1>
                                        <h1 className="text-black text-opacity-45 rounded-full bg-gray-300 px-4 py-2 ">Medium</h1>
                                        <h1 className="text-black text-opacity-45 rounded-full bg-gray-300 px-4 py-2 ">Large</h1>
                                        <h1 className="text-black text-opacity-45 rounded-full bg-gray-300 px-4 py-2 ">Xlarge</h1>
                                    </div>
                                </div>
                                <div className="border-b-2 w-9/12"></div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <button className="bg-gray-200 px-5 py-2 text-center rounded-full">-</button>
                                        <h1>1</h1>
                                        <button className="bg-gray-200 px-5 py-2 text-center rounded-full">+</button>

                                    </div>
                                    <button className="bg-black px-5 py-2 text-white text-center rounded-full w-36">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ProductDetail

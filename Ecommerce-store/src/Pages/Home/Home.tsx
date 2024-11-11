import ContainerComponent from "../../Container/ContainerComponent";
import CustomCard from "../../Shared/CustomCard/CustomCard";
import Star from "../../Shared/Star/Star";
import bannerbarand from '../../assets/image/banner-bottom.svg';
import banner from '../../assets/image/banner-image.svg';
// import party from '../../assets/image/party.svg';
// import gym from '../../assets/image/gym.svg';
// import formal from '../../assets/image/formal.svg';
// import casual from '../../assets/image/casual.svg';
import { } from "@mui/material";
// import arrowgreen from '../../assets/icon/arrow-green.svg'
// import nextarrow from '../../assets/icon/next-arrow.svg'
// import prevarrow from '../../assets/icon/prev-arrow.svg'
// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css"; // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';
// import { useQuery } from "react-query";
import CustomHook from '../../Hooks/CustomHooks'
// import axios from "axios";
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from "react-router-dom";
import NoImage from '../../assets/image/noimage.png'
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const NEWARRIVALSapi = () => {
//   return axios.get(import.meta.env.VITE_REACT_API_URL + '/products?offset=0&limit=4')
// }

// const TOPSELLINGapi = () => {
//   return axios.get(import.meta.env.VITE_REACT_API_URL + '/products?offset=5&limit=4')
// }


function Home() {
  const navigate = useNavigate()
  const NEW_ARRIVALS_URL = 'products?offset=0&limit=4';
  // const TOP_SELLING_URL = 'products?offset=0&limit=4';
  const [productData, setProductData] = useState<dataInterface>();

  interface dataInterface {
    [x: string]: any;
    id: number;
    title: string;
    price: string;
    image: string
  }

  const { data: getarrival, isLoading: getarrivalLoading, isError: isArrivalError, error: arrivalError } = CustomHook(['getarrivalpost'], NEW_ARRIVALS_URL);
  // const { data: getsell, isLoading: getsellLoading, isError: isSellingError, error: sellingError } = CustomHook(['getsellingpost'], TOP_SELLING_URL);

  useEffect(() => {
    let _productsData = getarrival?.data?.map((item: any) => ({
      id: item?.id,
      title: item?.title,
      image: item?.category.image,
      price: item?.price,
      // rate: item?.rating.rate,
      // totalrating: item?.rating.count,
    }))
    setProductData(_productsData);
  }, [getarrival])
  // const [topdata, setTopData] = useState([]) as any;
  // const [topLoading, setTopLoading] = useState(false)
  // useEffect(() => {
  //   setTopLoading(true)
  //   axios.get('https://fakestoreapi.com/products?limit=4').then((Response: any) => {
  //     console.log('res data ==', Response.data)
  //     setTopData(Response.data)
  //     setTopLoading(false)
  //   }).catch((err: any) => {
  //     setTopLoading(false)
  //     console.log(err)
  //   })
  // }, [])

  const skeletonCard = (
    <div className="flex flex-col gap-1 p-3">
      <Skeleton variant="rectangular" width={300} height={300} />
      <Skeleton variant="text" width={300} />
      <Skeleton variant="text" width={150} />
      <Skeleton variant="text" width={100} />
    </div>
  );

  return (
    <ContainerComponent styleclass={""} >
      <div className="w-full">
        <div className="bg-[#F2F0F1] flex items-center justify-between overflow-hidden">
          <div className="w-4/12 flex flex-col items-start justify-start gap-7 ml-14">
            <h1 className="text-6xl font-bold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-sm text-black text-opacity-65">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="bg-black px-5 py-2 text-white text-center rounded-full w-36">Shop Now</button>
            <div className="w-full flex items-center gap-5">
              <div className="flex flex-col w-40">
                <h5 className="text-3xl font-semibold">200+</h5>
                <p className="text-sm">International Brands</p>
              </div>
              <div className="flex flex-col w-40">
                <h5 className="text-3xl font-semibold">2000+</h5>
                <p className="text-sm">Hight Quailty Product</p>
              </div>
              <div className="flex flex-col w-40">
                <h5 className="text-3xl font-semibold">30,000+</h5>
                <p className="text-sm">Happy Produts</p>
              </div>
            </div>
          </div>
          <div className="px-5 overflow-hidden">
            <img src={banner} alt="" className="-mb-72" width={700} />
          </div>
        </div>
        <img src={bannerbarand} className="w-full" alt="" />
      </div>


      <div className="w-full flex flex-col gap-5 px-32 py-5">
        <h1 className="text-center text-3xl font-semibold">NEW ARRIVALS</h1>
        {isArrivalError && <h1>{(arrivalError as Error)?.message}</h1>}
        <CustomCard styleClass="!shadow-none">
          <div className="grid grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 space-2">
            {
              getarrivalLoading ? (
                // Render skeletons when loading
                Array.from({ length: 4 }).map((_, index) => <div key={index}>{skeletonCard}</div>)
              ) :
                (
                  productData && productData?.map((item: any, index: number) => (
                    <div className="flex flex-col gap-1 p-3 cursor-pointer" key={index} onClick={() => navigate(`/detail/${item.id}`)}>
                      {(<img style={{ width: 300, height: 300 }} srcSet={`${item?.image || NoImage}?w=248&fit=crop&auto=format&dpr=2 2x`} src={`${item?.image}?w=248&fit=crop&auto=format`} alt={item?.title} loading="lazy" />)}
                      {(<h5 className="text-[15px] font-semibold capitalize">{item?.title || 'No Data'}</h5>)}
                      {(<div className=" flex items-center gap-3"><Star value={3.5} /><span className="text-sm">{`${3.5}/${100}`}</span></div>)}
                      {(<p className="text-lg">${item?.price}</p>)}
                    </div>))
                )}
          </div>
          <div className="flex items-center justify-center">
            <button className="border-2 px-5 py-2 text-black text-center rounded-full w-36" onClick={() => navigate('/viewmore')}>View All</button>
          </div>
        </CustomCard>
      </div>


      <div className="w-full flex flex-col gap-5 px-32 py-5">
        <h1 className="text-center text-3xl font-semibold">TOP SELLING</h1>
        <CustomCard styleClass="!shadow-none">
          {isArrivalError && <h1>{(arrivalError as Error)?.message}</h1>}
          <div className="grid grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 space-2">
            {
              getarrivalLoading ? (
                // Render skeletons when loading
                Array.from({ length: 4 }).map((_, index) => <div key={index}>{skeletonCard}</div>)
              ) :
                (
                  productData && productData?.map((item: any, index: number) => (
                    <div className="flex flex-col gap-1 p-3 cursor-pointer" key={index} onClick={() => navigate(`/detail/${item.id}`)}>
                      {(<img style={{ width: 300, height: 300 }} srcSet={`${item?.image || NoImage}?w=248&fit=crop&auto=format&dpr=2 2x`} src={`${item?.image}?w=248&fit=crop&auto=format`} alt={item?.title} loading="lazy" />)}
                      {(<h5 className="text-[15px] font-semibold capitalize">{item?.title || 'No Data'}</h5>)}
                      {(<div className=" flex items-center gap-3"><Star value={3.5} /><span className="text-sm">{`${3.5}/${100}`}</span></div>)}
                      {(<p className="text-lg">${item?.price}</p>)}
                    </div>))
                )}
          </div>
          <div className="flex items-center justify-center">
            <button className="border-2 px-5 py-2 text-black text-center rounded-full w-36" onClick={() => navigate('/viewmore')}>View All</button>
          </div>
        </CustomCard>
      </div>

      {/* <div className="w-full flex flex-col  gap-5 px-32 py-5">
        <CustomCard styleClass={"!bg-gray-300 !rounded-2xl !p-10"}>
          <h1 className="text-center my-6 text-4xl font-semibold">BROWSE BY dress STYLE</h1>
          <div className="w-full flex flex-col gap-4 p-6">
            <div className="flex items-center justify-center gap-4">
              <img src={casual} className="col-start-6" alt="" />
              <img src={formal} className="col-end-6" alt="" />
            </div>
            <div className="flex items-center justify-center gap-4">
              <img src={party} className="" alt="col-start-6" />
              <img src={gym} className="col-end-6" alt="" />
            </div>
          </div>
        </CustomCard>
      </div> */}



      {/* <div className="w-full flex flex-col  gap-5 px-2 py-5 my-10">
          <div className=" flex items-center justify-between px-9">
            <h1 className="text-4xl font-bold text-black">OUR HAPPY CUSTOMER</h1>
            <div className="flex gap-2">
              <button className="custom-prev"><img src={prevarrow} alt="" /></button>
              <button className="custom-next"><img src={nextarrow} alt="" /></button>
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full pl-9"
          >
            {[1, 1, 1, 1, 1].map((item: any) => (
              <SwiperSlide>
                <div className="p-5 border-2 border-black border-opacity-10 rounded-md w-80">
                  <div className="flex flex-col gap-1" >
                    <div className="flex"><Star value={3} /></div>
                    <div className="flex items-center gap-2"><h5 className="text-lg font-semibold text-black">Sarah M.</h5><img src={arrowgreen} alt="" /></div>
                    <p className="text-sm text-black opacity-6">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}


    </ContainerComponent>
  )
}

export default Home
// function setTopLoading(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }


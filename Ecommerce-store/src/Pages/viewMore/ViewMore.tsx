import { useEffect, useState } from 'react'
import ContainerComponent from '../../Container/ContainerComponent'
import CustomCard from '../../Shared/CustomCard/CustomCard'
import Star from '../../Shared/Star/Star'
import NoImage from '../../assets/image/noimage.png'
import { Link, useNavigate } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton';
import CustomHook from '../../Hooks/CustomHooks'
import { Breadcrumbs } from '@mui/material'



function ViewMore() {

  const NEW_ARRIVALS_URL = 'products';
  const { data: getarrival, isLoading, isError, error } = CustomHook(['getviewmorepost'], NEW_ARRIVALS_URL);
  const [productData, setProductData] = useState<dataInterface>();

  interface dataInterface {
    [x: string]: any;
    id: number;
    title: string;
    price: string;
    image: string
  }

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
  const navigate = useNavigate()
  const skeletonCard = (
    <div className="flex flex-col gap-1 p-3">
      <Skeleton variant="rectangular" width={300} height={300} />
      <Skeleton variant="text" width={300} />
      <Skeleton variant="text" width={150} />
      <Skeleton variant="text" width={100} />
    </div>
  );

  return (
    <ContainerComponent styleclass={''}>
      <div className="ml-32">
      <Breadcrumbs separator="›" aria-label="breadcrumb" className='opacity-[0.6]'>
                <Link to='/' className='text-sm xs:text-xs hover:!text-blue-902 cursor-pointer'>
                    Home
                </Link>
                <p className='text-sm xs:text-xs hover:!text-blue-902 cursor-pointer' onClick={()=>navigate(-1)}>Shop</p>
                <p className='text-sm xs:text-xs hover:!text-blue-902 cursor-pointer' onClick={()=>navigate(-1)}>Men</p>
                <p className='text-sm xs:text-xs hover:!text-blue-902 cursor-pointer' onClick={()=>navigate(-1)}>T-Shirt</p>
            </Breadcrumbs>
      </div>
      <div className="w-full flex flex-col gap-5 px-32 py-5">
        <CustomCard styleClass="!shadow-none">
          {isError && <h1>{(error as Error)?.message}</h1>}
          <div className="grid grid-cols-4 space-2">
            {
              isLoading ? (
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
        </CustomCard>
      </div>
    </ContainerComponent>
  )
}

export default ViewMore

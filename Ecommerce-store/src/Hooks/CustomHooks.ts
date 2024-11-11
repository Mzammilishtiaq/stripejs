import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProducts = (url: string) => {
    return axios.get(import.meta.env.VITE_REACT_API_URL + url);
};

const CustomHook = (queryKey: string[], endpoint: string) => {
    return useQuery(queryKey, () => fetchProducts(endpoint), {
        select: (data: any) => {
            return data
            // return data?.data?.map((item: any) => ({
            //     id: item?.id,
            //     title: item?.title,
            //     image: item?.category.image,
            //     price: item?.price,
            //     // rate: item?.rating.rate,
            //     // totalrating: item?.rating.count,
            // }));
        },
        staleTime: 30000,
        cacheTime: 60000,
        retryDelay:30000,
        refetchIntervalInBackground: true, // Set to `false` to disable polling
        refetchOnWindowFocus: true, // Refetch when window regains focus
    });
};

export const CustomHookDetail = (queryKey: string[], endpoint: string) => {
    return useQuery(queryKey, () => fetchProducts(endpoint), {
        select: (data) => {
            const product = data?.data;
            return {
                id: product?.id,
                title: product?.title,
                image: product?.category.image,
                price: product?.price,
                // rate: product?.rating.rate,
                // totalrating: product?.rating.count,
                des:product?.description
        }},
        // staleTime: 5000,
        // cacheTime: 6000,
        // retryDelay:5000,
        refetchOnMount:true,
        refetchIntervalInBackground: true, // Set to `false` to disable polling
        refetchOnWindowFocus: true, // Refetch when window regains focus
    });
};

export default CustomHook;

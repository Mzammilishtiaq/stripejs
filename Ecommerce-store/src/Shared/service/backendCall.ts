import axios from "axios";


export const backendCall = async ({
    url,
    method = 'GET',
    data,
    dataModel,
    isShowErrorMessage = true,
}: backendCallType) => {
    let _response: any = '';
    const _headers = {
        'x-rapidapi-key': '3b4ff5efe6msh7fca6fee208d68ep1b836djsn5022c78a4239',
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    };
    await axios(import.meta.env.VITE_REACT_API_URL + url, {
        method: method,
        data: data,
        headers: _headers,
    }).then((response: { data: string }) => {
        _response = response.data;
        if (dataModel) {
            let dataSet = dataModel.adapt(_response?.data);
            console.log('data pass', dataSet)
            _response.data = dataSet;
        } 
    }).catch((error: { response: { data: any; status: number } })=>{
        let _responseData = error.response?.data;
        if (isShowErrorMessage) {
            // handleToastMessage("error", _responseData.message);
            console.log('error ==', _responseData?.message);
        }
        _response = _responseData;
    })
}

interface backendCallType {
    url: string;
    method: string;
    data: any;
    dataModel:any;
    isShowErrorMessage:boolean
}
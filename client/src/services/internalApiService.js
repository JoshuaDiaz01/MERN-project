import axios from 'axios';

const http = axios.create({
    baseURL: "https://api.bls.gov/publicAPI/v2/timeseries/data",
});

export const getAllItemsbyGroup = async () => {
    const res = await http.get()
    return res.data
} 

export const getItemById = async (seriesId) => {
    const res = await http.get(`/${seriesId}`);
    return res.data
}






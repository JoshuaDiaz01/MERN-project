import axios from 'axios';

const http = axios.create({
    baseURL: "https://api.bls.gov/publicAPI/v2/timeseries/data",
});

export const getGroupByCode = async (seriesId) => {
    const res = await http.get(`/${seriesId}`);
    return res.data
}





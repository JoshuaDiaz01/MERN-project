import axios from 'axios';

const http = axios.create({
    baseURL: 'https://localhost:8000/api'
})



export const getAllCategories = async () => {
    const res = await http.get('/categories');
    return res.data;
}

export const getCategoryByGroupCode  = async (groupCode) => {
    // const res = await http.get("categories", groupCode);
    const res = await axios.get(`http://localhost:8000/api/categories/${groupCode}`)
    return res.data;
}



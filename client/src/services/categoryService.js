import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
})

const DB_NAME = "category_db"


export const getAllCategories = async () => {
    const res = await http.get(`/${DB_NAME}s`);
    return res.data;
}

export const getCategoryByCode  = async (id) => {
    const res = await http.get(`/${DB_NAME}s/${id}`);
    return res.data;
}



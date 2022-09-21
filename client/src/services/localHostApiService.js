import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:8000/api",
});

export const getAllItems = async() => {
    const res = await http.get('/items');
    return res.data
}

export const getItemById = async(id) => {
    console.log("getItemById:");
    const res = await http.get(`/items/${id}`);
    return res.data
}

export const createItem = async(data) => {
    const res = await http.post('/items', data);
    console.log(res.data)
    return res.data;
}

export const updateItem = async(id, data) => {
    const res = await http.put(`/items/${id}`, data);
    return res.data
}

export const deleteItem = async(id) => {
    const res = await http.delete(`/items/${id}`);
    return res.data
}

export const createCategory = async(data) => {
    const res = await http.post('/categories', data);
    return res.data;
}

export const getAllCategories = async() => {
    const res = await http.get('/categories')
    return res.data
}

export const getCategoryById = async(id) => {
    const res = await http.get(`/categories/${id}`);
    return res.data;
}

export const deleteCategory = async(id) => {
    const res = await http.delete(`/categories/${id}`);
    return res.data
}

export const updateCategory = async(id, data) => {
const res = await http.put(`/categories/${id}`, data);
        return res.data
    }
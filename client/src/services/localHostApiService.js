import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:8000/api",
});

export const getAllItems = async() => {
    const res = await http.get('/items');
    return res.data
}

export const getItemById = async(id) => {
    const res = await http.get(`/items/${id}`);
    return res.data
}

export const createItem = async(data) => {
    const res = await http.get('/items', data);
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
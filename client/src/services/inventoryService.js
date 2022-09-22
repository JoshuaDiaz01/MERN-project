import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
})

const DB_NAME = "inventory_db"

export const createItem= async (data) => {
    const res = await http.post(`/${DB_NAME}s`, data);
    return res.data;
}

export const getAllItems = async () => {
    const res = await http.get(`/${DB_NAME}s`);
    return res.data;
}

export const getItemById  = async (id) => {
    const res = await http.get(`/${DB_NAME}s/${id}`);
    return res.data;
}

export const updateItemById  = async (id, data) => {
    const res = await http.put(`/${DB_NAME}s/${id}`, data);
    return res.data;
}

export const deleteItemById  = async (id) => {
    const res = await http.delete(`/${DB_NAME}s/${id}`);
    return res.data;
}

export const updateOrderHistoryById = async (id, data) => {
    console.log(data);
    const res = await http.put(`/items/orderHistory/${id}`, data);
    console.log(res.data);
    return res.data;
}


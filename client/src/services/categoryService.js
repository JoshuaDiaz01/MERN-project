import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
})



// export const getAllCategories = async () => {
//     const res = await http.get(`/${DB_NAME}s`);
//     return res.data;
// }

export const getCategoryByCode  = async (id) => {
    console.log("i am here");
    const res = await http.get("categories", id);
    console.log(res.data);
    return res.data;
}

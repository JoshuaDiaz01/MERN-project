import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
})



// export const getAllCategories = async () => {
//     const res = await http.get(`/${DB_NAME}s`);
//     return res.data;
// }

export const getCategoryByGroupCode  = async (groupCode) => {
    console.log("groupCode", groupCode);
    // const res = await http.get("categories", groupCode);
    const res = await axios.get(`http://localhost:8000/api/categories/${groupCode}`)
    console.log("res,data", res.data);
    return res.data;
}

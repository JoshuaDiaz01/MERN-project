import InteractiveList from "../components/InteractiveList";
import WatchList from "../components/WatchList";
import Grid from '@mui/material/Grid'; // Grid version 1
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import AddNew from "../components/AddNew";
import QuickUpdate from "../components/QuickUpdate";
import { useNavigate } from 'react-router-dom';




export const Main = (props) => {
    const [inventory, setInventory] = useState([])
    const [categories, setCategories] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)

    // const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
        .then(res => {setInventory(res.data)})
        setIsUpdated(false)
    }, [])

    useEffect(()=> {
        axios.get('http://localhost:8000/api/categories')
        .then(res => {setCategories(res.data)})
    }, [])

    // update the dom while setting the state

    // const updateFavorite = id => {
    //     const originalItem = 
    // }
    const updateInventoryItem = (updatedItem) => {
        const updatedInventory = inventory.map((item) => {
            if(item._id === updatedItem._id){
                return updatedItem
            }else{
                return item
            }
        })
        setInventory(updatedInventory);
    }

    const viewOne = (id) => {

    }
    
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    {inventory.length > 0 && categories.length > 0 && <InteractiveList inventory={inventory} categories={categories} updateInventoryItem={updateInventoryItem}
                    />}
                    
                    

                </Grid>
                <Grid item xs={0} md={4}>
                {inventory.length > 0 && categories.length > 0 && <WatchList inventory={inventory} categories={categories} updateInventoryItem={updateInventoryItem}/>}
                <AddNew categories = {categories} />
                <QuickUpdate categories = {categories} />
                </Grid>

            </Grid>
        </>
    )
}

export default Main;
import InteractiveList from "../components/InteractiveList";
import WatchList from "../components/WatchList";
import Grid from '@mui/material/Grid'; // Grid version 1
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import AddNew from "../components/AddNew";




export const Main = (props) => {
    const [inventory, setInventory] = useState([])
    const [categories, setCategories] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
        .then(res => {setInventory(res.data)})
        setIsUpdated(false)
    }, [inventory, isUpdated])

    useEffect(()=> {
        axios.get('http://localhost:8000/api/categories')
        .then(res => {setCategories(res.data)})
    }, [categories])

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
                </Grid>

            </Grid>
        </>
    )
}

export default Main;
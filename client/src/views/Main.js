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
    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
        .then(res => {setInventory(res.data)})
    }, [inventory])

    useEffect(()=> {
        axios.get('http://localhost:8000/api/categories')
        .then(res => {setCategories(res.data)})
    }, [categories])

    return (
        <>
            <Grid container spacing={2}>
                <Grid xs={12} md={8}>
                    {inventory.length > 0 && categories.length > 0 && <InteractiveList inventory={inventory} categories={categories}/>}
                    
                    

                </Grid>
                <Grid xs={0} md={4}>
                {inventory.length > 0 && categories.length > 0 && <WatchList inventory={inventory} categories={categories}/>}
                <AddNew categories = {categories} />
                </Grid>

            </Grid>
        </>
    )
}

export default Main;
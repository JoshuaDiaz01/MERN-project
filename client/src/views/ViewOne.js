import "../ViewOneCss.css"


import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { BarChart } from "../components/graphs/BarChart";
import { LineGraph } from "../components/graphs/LineGraph"
import { DoughnutChart } from "../components/graphs/DoughnutChart"
import QuickUpdate from "../components/QuickUpdate";

import { getCategoryByGroupCode } from "../services/categoryService"
import { getItemById, deleteItem } from "../services/localHostApiService"
import axios from 'axios';
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid'; // Grid version 1
import WatchList from "../components/WatchList";

export const ViewOne = (props) => {
    const { id } = useParams();

    const [lineGraphData, setLineGraphData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [itemCategory, setItemCategory] = useState("");
    const [itemData, setItemData] = useState([])
    const [allItems, setAllItems] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
            .then(res => { setAllItems(res.data) })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/api/categories')
            .then(res => { setAllCategories(res.data) })
    }, [])

    const updateInventoryItem = (updatedItem) => {
        const updatedInventory = allItems.map((item) => {
            if (item._id === updatedItem._id) {
                return updatedItem
            } else {
                return item
            }
        })
        setAllItems(updatedInventory);
    }

    useEffect(() => {
        getItemById(id)
            .then((data) => {
                setItemData(data);

                getCategoryByGroupCode(data.category)
                    .then((data) => {
                        setLineGraphData(data)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                setIsLoading(true)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const handleDeleteOnClick = (e) => {

                navigate('/')
            }

    if (isLoading) {
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>

                        <LineGraph data={lineGraphData} />

                    </Grid>
                    <Grid item xs={12} md={4}>

                        <Box sx={{ marginBottom: 2 }}>
                            <BarChart data={itemData} />
                        </Box>

                        <Box sx={{ marginBottom: 2 }}>
                        <QuickUpdate inventory={allItems} updateInventoryItem={updateInventoryItem} removeFromDom= {handleDeleteOnClick}/>
                        </Box>
                        <WatchList inventory={allItems} categories={allCategories} updateInventoryItem={updateInventoryItem} />
                    </Grid>

                </Grid>
            </>
        )
    }

}

export default ViewOne;
import "../ViewOneCss.css"

import { React, useState, useEffect } from "react";

import { BarChart } from "../components/graphs/BarChart";
import { LineGraph } from "../components/graphs/LineGraph"
import { getCategoryByGroupCode } from "../services/categoryService"
import { getItemById } from "../services/localHostApiService"

import Grid from '@mui/material/Grid'; // Grid version 1

export const ViewOne = (props) => {
    const [barChartData, setBarChartData] = useState([]);
    const [lineGraphData, setLineGraphData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [itemCategory, setItemCategory] = useState("");

    useEffect(() => {
        const { itemData } = props.itemData
        setItemCategory(props.itemData.category)
        setBarChartData(props.itemData);


        getCategoryByGroupCode(itemCategory) // "5" should be the category from the item
            .then((data) => {
                setLineGraphData(data[0])
                console.log(barChartData);
                setIsLoading(true)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [props])

    if (isLoading) {
        console.log("props", props);
        return (
            <>
                <Grid container spacing={2}>
                    <Grid xs={12} md={8}>
    
                    <LineGraph data={lineGraphData}/>
    
                    </Grid>
                    <Grid xs={0} md={4}>
    
                        <BarChart data={barChartData}/>
    
                    </Grid>
    
                </Grid>
            </>
        )
    }

}

export default ViewOne;
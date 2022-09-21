import "../ViewOneCss.css"

import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { BarChart } from "../components/graphs/BarChart";
import { LineGraph } from "../components/graphs/LineGraph"
import { DoughnutChart } from "../components/graphs/DoughnutChart"

import { getCategoryByGroupCode } from "../services/categoryService"
import { getItemById } from "../services/localHostApiService"

import Grid from '@mui/material/Grid'; // Grid version 1

export const ViewOne = (props) => {
    const { id } = useParams();

    const [lineGraphData, setLineGraphData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [itemCategory, setItemCategory] = useState("");
    const [itemData, setItemData] = useState([])



    useEffect(() => {
        // setItemCategory(props.itemData.category)
        
        getItemById(id)
        .then((data) => {
          setItemData(data);
        //   setBarChartData(data);
          setItemCategory(data.category)
          console.log("1");
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(error);
        })
    }, [id])
    
    useEffect(() => {
        getCategoryByGroupCode(itemCategory) // "5" should be the category from the item
            .then((data) => {
                setLineGraphData(data[0])
                setIsLoading(true)
                console.log("3");
            })
            .catch((error) => {
                console.log(error);
            })
    }, [itemCategory])

    if (isLoading) {
        return (
            <>
                <Grid container spacing={2}>
                    <Grid xs={12} md={8}>
    
                    <LineGraph data={lineGraphData}/>
    
                    </Grid>
                    <Grid xs={0} md={4}>
    
                        <BarChart data={itemData}/>
                        {/* box couold be used for watchlist or quick update */}
                        <DoughnutChart /> 
                    </Grid>
    
                </Grid>
            </>
        )
    }

}

export default ViewOne;
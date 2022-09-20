import "../ViewOneCss.css"

import { React, useState, useEffect } from "react";

import { BarChart } from "../components/graphs/BarChart";
import { LineGraph } from "../components/graphs/LineGraph"
import { getCategoryByCode } from "../services/categoryService"
import { getItemById } from "../services/localHostApiService"

import Grid from '@mui/material/Grid'; // Grid version 1

export const ViewOne = (props) => {
    const [barChartData, setBarChartData] = useState([]);
    const [lineGraphData, setLineGraphData] = useState([]);

    useEffect(() => {
        getCategoryByCode(5) // "5" should be the category from the item
            .then((data) => {
                setLineGraphData(data[0])
            })
            .catch((error) => {
                console.log(error);
            })

        getItemById("632a2895d339d0f7d841dc0e")
            .then((data) => {
                setBarChartData(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

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

export default ViewOne;
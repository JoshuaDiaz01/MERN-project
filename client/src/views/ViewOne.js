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
    // const [itemCategory, setItemCategory] = useState("");
    const [itemData, setItemData] = useState([])



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

    if (isLoading) {
        return (
            <>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={8}>

                        <LineGraph data={lineGraphData}/>
                        
                    </Grid>
                    <Grid item xs={12} md={4} sx={{pl: 5}}>

                        <BarChart data={itemData}/>

                    </Grid>
                    {/* <Grid item xs={0}>

                        <DoughnutChart /> 

                    </Grid> */}
                </Grid>
            </>
        )
    }

}

export default ViewOne;
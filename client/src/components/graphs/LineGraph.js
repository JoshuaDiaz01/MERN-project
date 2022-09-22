
import { React, useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Paper } from '@mui/material';


export const LineGraph = (props) => {
  const [lineGraphName, setLineGraphName] = useState("");
  const [axesLabels, setAxesLabels] = useState([]);
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    console.log(props.data.name);
    setLineGraphName(props.data.name)
    if (props.data.inflationIndexes !== null) {
      setAxesLabels(getIndexes(props.data.inflationIndexes, "timeStamps"));
      setDataPoints(getIndexes(props.data.inflationIndexes, "indexValues"));
    }
  }, [props])


  const getIndexes = (dataHistory, accessor) => {
    let solution = [];
      for (let entry in dataHistory) {
        if (accessor === "timeStamps") {
          solution.push(dataHistory[entry].year + " " + dataHistory[entry].periodName)
        } else {
          solution.push(dataHistory[entry].value)
        }
      }
      console.log(solution);
      return solution.reverse();


  }

  
  const options = {
    scales: {
      x: {
        ticks: {
          color: "primary.main"
        },

        grid: {
          color: "rgb(15, 71, 54)"
        }, 

        title: {
          display: true,
          text: 'Your Title',
        },
        color: "black"
      }, 

      y: {
        ticks: {
          color: "black"
        },
        
        grid: {
          color: "rgb(15, 71, 54)"
        }, 

        title: {
          display: true,
          text: 'Index'
        }
      }
    } ,
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: "black"
          }
        },
        title: {
          display: true,
          text: `Inflation indexes of ${lineGraphName}`,
          color: "black"
        },
        maintainAspectRation: true
      },
    };
    

    const labels = axesLabels
    
    const data = {
      labels,
      datasets: [
        {
          label: lineGraphName,
          data: dataPoints,
          borderColor: '#F24F5B',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        // {
        //   label: 'Dataset 2',
        //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        //   borderColor: 'rgb(53, 162, 235)',
        //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
      ],
    };
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );

  return (
      // <Line width={1000} height={1000} options={options} data={data} />
      <Paper elevation={8}>

        <Line options={options} data={data} />
      </Paper>
  )
}





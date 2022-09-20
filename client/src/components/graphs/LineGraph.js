
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
import { faker } from '@faker-js/faker';


export const LineGraph = (props) => {
  const [lineGraphName, setLineGraphName] = useState("");
  const [lineGraphData, setLineGraphData] = useState([]);

  

  useEffect(() => {
    setLineGraphName(props.data.name)
    setLineGraphData(props.data.inflationIndexes)
  })

  const options = {
    scales: {
      x: {
        ticks: {
          color: "white"
        },

        grid: {
          color: "rgb(15, 71, 54)"
        }, 

        title: {
          display: true,
          text: 'Your Title',
        },
        color: "white"
      }, 

      y: {
        ticks: {
          color: "white"
        },
        
        grid: {
          color: "rgb(15, 71, 54)"
        }, 

        title: {
          display: true,
          text: 'Index'
        }
      }
    }  ,
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: "white"
          }
        },
        title: {
          display: true,
          text: `Inflation indexes of ${lineGraphName}`,
          color: "white"
        },
        maintainAspectRation: false
      },
    };
    
    const labels = ['January20', 'February20', 'March20', 'April20', 'May20', 'June20', 'July20',
    'August20', 'September20', 'October20', 'November20', 'December20', 
    'January21', 'February21', 'March21', 'April21', 'May21', 'June21', 'July21',
    'August21', 'September21', 'October21', 'November21', 'December21',
    'January22', 'February22', 'March22', 'April22', 'May22', 'June22', 'July22',
    'August22', 'September22', 'October22', 'November22', 'December22'];
    
    const data = {
      labels,
      datasets: [
        {
          label: lineGraphName,
          // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          data: lineGraphData,
          borderColor: 'rgb(255, 99, 132)',
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
      <Line width={1000} height={1000} options={options} data={data} />
  )
}





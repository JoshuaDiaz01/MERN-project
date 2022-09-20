
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


export const BarChart = (props) => {
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
            text: 'Data for WPU01',
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
            label: 'Dataset 1',
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            data: [169.5, 160.8, 157.5, 140.4, 148.8, 151.4, 151.4, 149.0, 157.0, 169.9, 173.0, 166.3, 178.8, 182.5, 184.3, 192.8, 211.7, 207.0, 201.463, 202.896, 197.868, 197.416, 206.125, 213.525, 220.224, 230.899, 250.299, 261.884, 263.817, 261.343, 255.503, 248.105], 
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
      ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

    return (
        <Bar width={1000} height={1000} options={options} data={data} />
    )
}





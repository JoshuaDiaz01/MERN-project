
import { React, useState, useEffect } from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
  } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


export const DoughnutChart = (props) => {
    
    const labels = ['January20', 'February20', 'March20', 'April20', 'May20', 'June20', 'July20',
    'August20', 'September20', 'October20', 'November20', 'December20', 
    'January21', 'February21', 'March21', 'April21', 'May21', 'June21', 'July21',
    'August21', 'September21', 'October21', 'November21', 'December21',
    'January22', 'February22', 'March22', 'April22', 'May22', 'June22', 'July22',
    'August22', 'September22', 'October22', 'November22', 'December22'];
    
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    ChartJS.register(
      ArcElement, Tooltip, Legend
    );

  return (
      <Doughnut width={1000} height={1000} data={data} />
  )
}

export default DoughnutChart;

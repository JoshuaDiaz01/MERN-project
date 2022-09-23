
import { React, useState, useEffect } from 'react';
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
import { Paper } from '@mui/material';


export const BarChart = (props) => {

  const [barGraphName, setBarGraphName] = useState("");
  const [barGraphData, setBarGraphData] = useState(props.data.orderHistory);
  const [dateLabels, setDateLabels] = useState([]);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    setBarGraphName(props.data.name)
    setBarGraphData(props.data.orderHistory)
    if (barGraphData !== null) {
      setDateLabels(extractOrderInfo(barGraphData, "key")) // gets timestamps
      setQuantity(extractOrderInfo(barGraphData, "value")) // gets quantity
    }

    extractOrderInfo(barGraphData, 0) // gets timestamps
  }, [barGraphData, props]);

  const extractOrderInfo = (orderData, accessor) => {
    let solution = [];
    try {
      for (let object in orderData) {
        if (accessor === "key") {
          console.log(Object.keys(orderData[object])[0].split(" ").slice(0, 4));
          solution.push(Object.keys(orderData[object])[0].split(" ").slice(0, 4));
        }

        if (accessor === "value") {
          solution.push(Object.values(orderData[object]).toString())
        }
      }
    } catch {
      return
    }
    return solution;
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
          text: 'Date',
        },
        color: "primary.main"
      },

      y: {
        ticks: {
          color: "primary.main"
        },

        grid: {
          color: "rgb(15, 71, 54)"
        },

        title: {
          display: true,
          text: 'Quantity added (units)',
          color: "rgb(15, 71, 54)"
        }
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: "primary.main"
        }
      },
      title: {
        display: true,
        text: `Order history for ${barGraphName}`,
        color: "primary.main"
      },
      maintainAspectRation: false
    },
  };

  const labels = dateLabels

  const data = {
    labels,
    datasets: [
      {
        label: barGraphName,
        data: quantity,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
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

    <Paper elevation={8} sx={{ padding: 1, paddingLeft: 3, paddingRight: 3 }}>
      <Bar options={options} data={data} />
    </Paper>

  )
}

export default BarChart;


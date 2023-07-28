import logo from "./logo.svg"
import { useState } from "react";
import {Grid, Box, Card, Paper, Typography} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../app/hooks';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js"

import { Radar } from "react-chartjs-2"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)


function Sider() {

  const data = {
    responsive: false,
    labels: [
      "腳踏車",
      "機車",
      "捷運",
      "輕軌",
      "汽車",
      "公車",
      "電動摩托車",
      "走路",
      "火車",
      "電動汽車",
    ],
    // pointHitRadius: 10,
    datasets: [
      {
        label: "You daily carbon footprint",
        // data: [...state.sum.sumArray[0]],
        data: [24,3,0,0,0,0,0,22,0,13],
        backgroundColor: "#cae2408f",
        pointBackgroundColor: "#125896",
        borderColor: "#584832",
        pointHoverBorderColor: "rgb(255, 99, 132)",
        // lineTension: 0.5,
      },
      {
        label: "Avg Carbon footprint",
        // data: [...state.sum.sumArray[0]],
        data: [17,10,25,33,8,18,10,22,15,45],
        backgroundColor: "#1bb38d8f",
        pointBackgroundColor: "#125896",
        borderColor: "#584832",
        // lineTension: 0.5,
      },
    ],
  }

  const option = {
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        display: true,
        color: "white",
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        gridLines: {
          display: true,
          color: "white",
        },
        angleLines: {
          color: "#000000",
        },
        pointLabels: {
          font: {
            size: 15,
          },
        },
        grid: {
          color: "#000000",
          circular: true,
        },
        ticks: {
          display: true,
        },
        suggestedMin: -10,
        suggestedMax: 60,
        stepSize: 1,
      },
    },
    elements: {
      point: {
        radius: 2, // 結果的角度圓點大小
      },
      line: {
        borderWidth: 2, //結果線的寬度
      },
    },
  }
  return (
    <>
      <Box sx={{
        // backgroundColor: "#15c924",
        display: "flex",
        // height: "100%",
        padding: 7,
        flexDirection: "column",
      }}>
        <Paper
          elevation={4}  
          sx={{
            width: 540,
            height: 520,
            display: "flex",
            flexDirection: "column",
        }}>
           <Typography variant="h6" fontWeight="bold" m={3}>Your Carbon Footprint</Typography>
           <Box 
            sx={{
              width: "80%",
              alignSelf: "center",
            }}>
            {/* <Radar data={data} options={option}/> */}
            48
           </Box>
        </Paper>
      </Box>
    </>
  )
}

export default Sider


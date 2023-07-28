import logo from "./logo.svg"
import { useState } from "react";
import {Grid, CardActionArea, Typography, Paper, Radio, Button, TextField, Box, Card} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getData } from "../api"

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function Page4() {
  const state = useAppSelector(state => state.wayOfMoving);


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
        // type: 'line' as const,
        label: "You daily carbon footprint",
        data: [5,5,3,0,0,0,0,0,0],
        // data: [...state.sum.sumArray[0]],
        backgroundColor: "#474747",
      },
      {
        label: "Avg Carbon footprint",
        data: [24,3,5,19,15,18,10,22,15,13],
        backgroundColor: "#4C72D2",
      }
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
          // lineWidth: 3
        },
        angleLines: {
          color: "#000000",
        },
        pointLabels: {
          // display: true,
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
          // color: "#555555",
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

  // const { query } = useRequestProcessor()

  // const {
  //   data: chartData,
  //   isLoading,
  //   isError,
  // } = query("getData", () => getData(), {
  //   enabled: true,
  // })

  // console.log({chartData})

  return (
    <>
    <Box sx={{
        // backgroundColor: "#d9e09a",
        padding: 7, 
      }}>
        <Paper
          elevation={4}  
          sx={{
            width: 1100,
            height: 520,
            backgroundColor: "#F5F5F5",
        }}>
          <Grid container direction="column">
            <Grid item container xs={12} sx={{
              // backgroundColor: "#895134",
              flexDirection: "column"
            }}>
              <Box sx={{
                // backgroundColor: "#865497",
                paddingTop: 6,
                width: 800,
                alignSelf: "center"
              }}>
                <Chart type='bar' data={data} />
              </Box>
            </Grid>


          </Grid>
        </Paper>
      </Box>



    </>
  )
}
// <Chart type='bar' data={data} />
export default Page4

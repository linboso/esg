import logo from "./logo.svg"
import { useEffect, useState } from "react";
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
import { TotalCarbomArray } from "../slice/womSlice";
import { useRequestProcessor } from "../hooks/useRequestProcessor";

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



function Page4() {
  const state = useAppSelector(state => state.wayOfMoving);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(TotalCarbomArray());  
  }, [state.sum.CarbonVolume]);

  const { query } = useRequestProcessor()

  const {
    data: chartData,
    isLoading,
    isError,
  } = query("getData", () => getData(), {
    enabled: true,
  })

  const data = {
    responsive: false,
    labels: [
      "腳踏車",
      "摩托車",
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
        data: [...state.sum.CarbonArray],
        backgroundColor: "#474747",
      },
      {
        label: "Avg Carbon footprint",
        data: chartData?.res ?? [],
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
        display: false,
        color: "black",
      },
    },
    scales: {
      y: {
        ticks:{
          callback: function(value:string, index:number, ticks:any) {
            return value + " g/min";
          }

        }
      }
    }
  } 

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
                <Chart type='bar' data={data} options={option}/>
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

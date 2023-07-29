import logo from "./logo.svg"
import { useCallback, useEffect, useState } from "react";
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
import { SumCarbonVolume } from "../slice/womSlice";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)


function Sider() {
  const [fontSize, setFontSize] = useState(300);
  const [text, setText] = useState("20");
  const state = useAppSelector(state => state.wayOfMoving);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(SumCarbonVolume());
    // updateFontSize(String());
    updateFontSize(String(Math.floor(state.sum.CarbonVolume)));

  },[state])

  const updateFontSize = useCallback(
    (value:string) => {
      let _text = String(text);
      if (_text.length > value.length) {
        const textSize = Math.ceil(fontSize * 1.5);
        fontSize < 300 && setFontSize(textSize);

      } else if (_text.length < value.length) {
        const textSize = Math.ceil(fontSize / 1.5);
        fontSize > 50 && setFontSize(textSize);
      }
      setText(value);
      // console.log(fontSize);
    },
    [fontSize, text]
  );

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
            // backgroundColor: "#254874",
            width: 540,
            height: 520,
            display: "flex",
            flexDirection: "column",
        }}>
           <Typography variant="h6" fontWeight="bold" mt={3} ml={3}>Your Carbon Footprint</Typography>
           <Box 
            sx={{
              width: "80%",
              height: "80%",
              // backgroundColor: "#25743d",
              alignSelf: "center",
              justifySelf: "center",
              // display: "flex",
              margin: 5
            }}>
            
              <Typography fontSize={fontSize} fontWeight="bold" sx={{textJustify:"center", textAlign:"center"}}>
                {text}
              </Typography>
           </Box>
        </Paper>
      </Box>
    </>
  )
}

export default Sider


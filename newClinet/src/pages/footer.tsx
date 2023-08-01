import logo from "./logo.svg"
import { useState } from "react";
import {Grid, collapseClasses, FormControl, FormLabel,RadioGroup, FormControlLabel, Radio, Button, TextField, Box, Card} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { Radar } from "react-chartjs-2"
import { useRequestProcessor } from "../hooks/useRequestProcessor"
import { getData } from "../api"


function Footer() {

  return (
    <>
      <Box sx={{
        // backgroundColor: "#2b557c",
        display: "flex",
        width: "100%",
        height: 106,
        flexDirection: "column",
        marginTop: -2.5
      }}>
        <img src="/footer.png" style={{
          alignSelf: "flex-end",
          height: 100,
          paddingRight: 20,
        }}/>
      </Box>
    </>
  )
}

export default Footer

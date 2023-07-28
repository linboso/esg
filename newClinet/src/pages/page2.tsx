import { useNavigate, Link} from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Grid, Paper, FormControl, Select, Button, Box, MenuItem, TextField, Typography, IconButton} from '@mui/material';
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";

import SelectList from "../features/SelectList/SelectList";



function Page2() {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();


  return (
    <>
      <Box sx={{
        backgroundColor: "#d9e09a",
        padding: 7, 
      }}>
        <Paper
          elevation={4}  
          sx={{
            width: 1100,
            height: 520,
            backgroundColor: "#F5F5F5",
        }}>
          <Grid container sx={{
            display: "flex",
          }}>
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight="bold" mt={2} ml={2}> How do you usually commute? </Typography>
            </Grid>
            
            <Grid item container xs={6} direction="column">
              <Grid item xs={12} sx={{
                alignSelf: "center", 
                // backgroundColor:"#8dd48f"
              }}>
                <SelectList Title={"平時上學的通勤狀況"}/>
              </Grid>
            </Grid>
            <Grid item container xs={6} direction="column">
              <Grid item xs={6} sx={{
                alignSelf: "center",
                // backgroundColor:"#dbd82a"
              }}>
                <SelectList Title={"平時放學的通勤狀況"}/>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}

export default Page2

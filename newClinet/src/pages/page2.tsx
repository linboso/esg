import { useNavigate, Link} from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Grid, Paper, FormControl, Select, Button, Box, MenuItem, TextField, Typography, IconButton} from '@mui/material';
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";

import SelectList from "../features/SelectList/SelectList";



function Page2() {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const next = () => {
    navigate('/page3');
  }

  const back = () => {
    navigate('/');
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
          <Grid container sx={{
            display: "flex",
          }}>
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight="bold" mt={2} ml={2}> How do you usually commute? </Typography>
            </Grid>
            
            <Grid item container xs={6} direction="column" mt={3}>
              <Grid item xs={12} sx={{
                alignSelf: "center",
                // width: "100%", 
                // backgroundColor:"#8dd48f"
              }}>
                <SelectList Title={"平時上學的通勤狀況"}/>
              </Grid>
            </Grid>
            <Grid item container xs={6} direction="column" mt={3}>
              <Grid item xs={6} sx={{
                alignSelf: "center",
                // backgroundColor:"#dbd82a"
              }}>
                <SelectList Title={"平時放學的通勤狀況"}/>
              </Grid>
            </Grid>

            {/* <Grid item xs={12} m={2}>s</Grid> */}
            <Grid item sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              // backgroundColor: "#513497"
            }}>

              <div style={{borderWidth: 1, borderStyle: "solid", borderColor: "#505050", borderRadius: 5, width: 50, height: 30, marginTop: 85, marginRight: 20, alignSelf: "flex-end"}}>            
                <IconButton size="large" sx={{width: 50, height: 30,}} onClick={next}> 
                  <ArrowForwardIosIcon/>
                </IconButton>
              </div>
              <div style={{borderWidth: 1, borderStyle: "solid", borderColor: "#505050", borderRadius: 5, width: 50, height: 30, marginTop: -32, marginRight: 85, alignSelf: "flex-end", transform: "rotate(180deg)"}}>            
                <IconButton size="large" sx={{width: 50, height: 30,}} onClick={back}> 
                  <ArrowForwardIosIcon/>
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}

export default Page2

import { useNavigate, Link} from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Grid, Paper, Card, CardActionArea, Button, Box, CardMedia, CardContent, Typography, IconButton} from '@mui/material';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import SelectList from "../features/SelectList/SelectList";
import { updateGoHome, updateGoSchool } from "../slice/womSlice";
import { postData } from "../api/index";
import { useMutation } from "react-query"

function Page3() {
  const state = useAppSelector(state => state.wayOfMoving.record);  
  const { Userinfo } = useAppSelector(state => state.InfoSlice)
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const mutation = useMutation(async(payload: unknown) => {
    await postData(payload);
  });

  const next = () => {
    dispatch(updateGoHome(["rain", state.sunny.goHome]))
    dispatch(updateGoSchool(["rain", state.sunny.goSchool]))    
    // console.log(state);
    
    const payloadHome = state.sunny.goHome
    const payloadSchool = state.sunny.goSchool

    // pre two are sunny case, and past two are rain case
    // @TODO - should have a erorr handling for axios call error
    mutation.mutate({'info': Userinfo, 'data': {'sunnyHome': payloadHome, 'sunnySchool': payloadSchool, 'rainHome': payloadHome, 'rainSchool': payloadSchool}})

    navigate('/page4');    
  }

  const goback = () => {
    navigate('/page5');
  }

  const back = () => {
    navigate('/page2');

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
            <Grid item container sx={{
              // backgroundColor: "#895134",
              flexDirection: "column"
            }}>
              <Box sx={{
                // backgroundColor: "#865497",
                paddingTop: 15,
                alignSelf: "center"
              }}>
                <Typography fontSize={18} fontWeight="bold"> If it rains, will you change commuting method? </Typography>
              </Box>
            </Grid>
            <Grid item container xs={12} columns={21} mt={8}>
              <Grid item xs={3}></Grid>
              {/* <Grid item xs={3}></Grid> */}
              <Grid item xs={6}>
                <Card>
                  <CardActionArea onClick={goback}>
                    <Typography variant="h5" sx={{ 
                      height: 65,
                      paddingTop: 4,
                      textAlign: "center" }}>
                      Yes
                    </Typography>
                  </CardActionArea>
                </Card>
              
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <Card>
                  <CardActionArea onClick={next}>
                    <Typography variant="h5" sx={{ 
                      height: 65,
                      paddingTop: 4,
                      textAlign: "center" }}>
                      No
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* <Grid item xs={3}></Grid> */}
              <Grid item xs={3}></Grid>
            </Grid>
            <Grid item sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              // backgroundColor: "#513497"
            }}>

              <div style={{borderWidth: 1, borderStyle: "solid", borderColor: "#505050", borderRadius: 5, width: 50, height: 30, marginTop: 164, marginRight: 16, alignSelf: "flex-end", transform: "rotate(180deg)"}}>            
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

export default Page3

import { useNavigate, Link} from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Grid, Paper, Card, CardActionArea, Button, Box, CardMedia, CardContent, Typography, IconButton} from '@mui/material';
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";

import SelectList from "../features/SelectList/SelectList";



function Page3() {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const next = () => {
    navigate('/page4');
  }

  const goback = () => {
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

          </Grid>
        </Paper>
      </Box>
    </>
  )
}

export default Page3

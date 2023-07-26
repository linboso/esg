import * as React from 'react';
import type { FC } from "react"

import Box from '@mui/material/Box';
import {Paper, Grid, Slider, Card, CardMedia, Typography} from '@mui/material';


const Dplace: FC<{picpath:string, typename:string}> = ({picpath, typename}) => {
  const tt = "";

  return(
      <Box sx={{
        width: 300,
        height: 300,
      }}>
        <Grid container direction="column">
          <Grid item xs={11}>
            <Typography variant='h5'>
              {typename}
            </Typography>
            <Card variant='outlined' sx={{
              maxHeight: "60%",
              minHeight: 150,
              maxWidth: "60%",
              minWidth: 150,
              // marginTop: "0",
              marginLeft: "20%",
              marginRight: "20%"
            }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={picpath}
              />

            </Card>
          </Grid>
          <Grid item xs={1} sx={{
           margin: "18%"
          }}>
            
            <Slider
              aria-label="Time"
              defaultValue={0}
              // getAriaValueText="23213"
              valueLabelDisplay="on"
              step={1}
              marks
              min={0}
              max={60}
            />
          </Grid>
        </Grid>
      </Box>
  );
}


export default Dplace;
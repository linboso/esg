import * as React from 'react';
import { useState, type FC, useRef, useEffect } from "react"
 
import Box from '@mui/material/Box';
import {Paper, Grid, Slider, Card, CardMedia, Typography} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { updateTmpArray } from '../../slice/tmpSlice';



const Dplace: FC<{picpath:string, typename:string, index:number}> = ({picpath, typename, index}) => {
  const [val, setVal] = useState<number>(0);
  const state = useAppSelector(state => state.TmpArray.clear);
  const dispatch = useAppDispatch();


  const updata = (event:Event | React.SyntheticEvent<Element, Event>, value:number | number[]) => {
    dispatch(updateTmpArray([index, val]));
  } 
  
  useEffect(() => {
    if(state.check) {
      setVal(0);
    }
  },[state]);

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
              value={val}
              // value={ref.current}
              valueLabelDisplay="on"
              step={1}
              marks
              min={0}
              max={60}
              onChange={(event, value) => {setVal(value)}}
              onChangeCommitted={updata}
            />
          </Grid>
        </Grid>
      </Box>
  );
}


export default Dplace;
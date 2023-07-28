import * as React from 'react';
import { useState, type FC, useRef, useEffect } from "react"
 
import Box from '@mui/material/Box';
import {Paper, Grid, Button, Card, Stack, Typography} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';




const SelectList: FC<{Title:string}> = ({Title}) => {
  

  return(
      <Box sx={{
        width: 340,
        height: 315,
      }}>
        <Typography fontSize={18} fontWeight="bold"> {Title} </Typography>
        <Paper sx={{
          marginTop: 2,
          width: "100%",
          // width: "100%",
          height: "100%",
          backgroundColor: "#D9D9D9",
        }}>
          <Box ml={3} pt={3}>
           <Typography>Home</Typography>
            <Stack direction="row">
              {/* <Button onClick={handleSave}> */}
                {/* Save */}
              {/* </Button> */}

            </Stack>
           <Typography>walk</Typography>
           <Typography>School</Typography>
          </Box>
        </Paper>
      </Box>
  );
}


export default SelectList;
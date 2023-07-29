import * as React from 'react';
import { useState, ChangeEvent, type FC, useRef, useEffect } from "react"
 
import Box from '@mui/material/Box';
import {Paper, Grid, Slider, Card, CardMedia, Typography, Stack,Icon,IconButton} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


const SelectList: FC<{Title:string}> = ({Title}) => {

  type SelectItem = {
    text: string;
    id: number;
  };

  const [selectItems, setSelectItems] = useState<SelectItem[]>([]);
  const [textItems, setTextItems] = useState<SelectItem[]>([]);

  const onClick = () => {
    setSelectItems(prevSelectItems => [
      ...prevSelectItems,
      { text: "new row", id: prevSelectItems.length + 1 }
    ]);
    setTextItems(prevTextItems => [
      ...prevTextItems,
      { text: "new row", id: prevTextItems.length + 1 }
    ]);
  };

  return(
    <>
      <Box sx={{
        width: 340,
        height: 315,
      }}>
        <Typography fontSize={18} fontWeight="bold"> {Title} </Typography>
        <Paper sx={{
          marginTop: 2,
          width: "100%",
          height: "100%",
          backgroundColor: "#D9D9D9",
        }}>
          <Stack>
            {/* 3. 使用selectItems來渲染select */}
            {selectItems.map(item => (
              <Stack direction='row'>
                <Box sx={{ minWidth: 170 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{color:'#282c34'}}>Destination</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="species"
                      sx={{ color: '#282c34',backgroundColor:'#f0f0f0' }}
                    >
                      <MenuItem value={'Home'}>Home</MenuItem>
                      <MenuItem value={'School'}>School</MenuItem>
                      <MenuItem value={'Cram School'}>Cram School</MenuItem>
                      <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                {/* 4. 使用textItems來渲染TextField */}
                <TextField
                  label="Spend on it"
                  id="outlined-start-adornment"
                  sx={{ width: 170 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">min</InputAdornment>,
                  }}
                />
              </Stack>
            ))}
            <IconButton onClick={onClick}>
              <AddIcon/>
            </IconButton>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}



export default SelectList;
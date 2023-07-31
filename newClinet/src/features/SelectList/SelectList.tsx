import * as React from 'react';
import { useState, ChangeEvent, type FC, useRef, useEffect } from "react"
 
import Box from '@mui/material/Box';
import {Paper, Grid, List, Typography, Stack,Icon,IconButton} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { SumCarbonVolume, updateGoHome, updateGoSchool } from '../../slice/womSlice';

interface SelectItem {
  id: number;
  text: string;
};

let TmpselectItems:any = [];
const SelectList: FC<{Title:string, Weather:string, Go:string}> = ({Title, Weather, Go}) => {

  const [selectItems, setSelectItems] = useState<SelectItem[]>([]);
  const [rowVaule, setRowValue] = useState<number[]>([...Array(10).fill(0)]);
  const [rowTime, setRowTime] = useState<number[]>([...Array(10).fill(0)]);  

  const dispatch = useAppDispatch();  

  const RowData = [
    "腳踏車",
    "摩托車",
    "捷運",
    "輕軌",
    "汽車",
    "公車",
    "電動摩托車",
    "走路",
    "火車",
    "電動汽車",
  ]

  

  const handleClick = () => {
    if(selectItems.length >= 10) {
      alert("selected too many cummiting way!");
      return;
    }
      
    TmpselectItems.push({ text: "new row", id: selectItems.length + 1});
    // console.log(TmpselectItems);

    setSelectItems(prevSelectItems => [
      ...prevSelectItems,
      { text: "new row1", id: prevSelectItems.length + 1}
    ]);

  };

  const remove = () => {
    if(selectItems.length <= 0) {
      alert("remove too manty cummiting way!");
      return;
    }

    TmpselectItems.pop();
    setSelectItems(preSelect => [...TmpselectItems]);
     
    const t = rowVaule[TmpselectItems.length];
    // get finish row => val
    rowTime[t] = 0;
    // reset


    if(Go == "school") {
      dispatch(updateGoSchool([Weather, rowTime]))
    } else {
      dispatch(updateGoHome([Weather, rowTime]))
    }
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
            <List sx={{ width: '100%', maxHeight: 315, bgcolor: 'background.paper', overflowY: "auto" }}>
              {/* 3. 使用selectItems來渲染select */}
              {selectItems.map((SelectItem, RowIndex) => (
                <Grid container key={RowIndex} mt={1}>
                  <Grid item xs={8}>
                    <FormControl fullWidth>
                      <InputLabel sx={{color:'#282c34'}}>commuting</InputLabel>
                      <Select
                        label="species"
                        defaultValue={0}
                        value={rowVaule[RowIndex]}
                        sx={{ color: '#282c34',backgroundColor:'#f0f0f0', width: 200, marginLeft: 1}}
                        onChange={(item) => {
                          // console.log(RowIndex + " <> " + item.target.value);
                          // console.log(RowData[rowVaule[RowIndex]]);
                          // console.log(RowData[Number(item.target.value)]);
                          // old: rowVaule[RowIndex]
                          // new: item.target.value
                          
                          let tmp = [...rowVaule];
                          let tmpTime = [...rowTime];
                          tmp[RowIndex] = Number(item.target.value); 
                          setRowValue([...tmp]);

                          tmpTime[Number(item.target.value)] = tmpTime[rowVaule[RowIndex]];
                          tmpTime[rowVaule[RowIndex]] = 0;
                          setRowTime(tmpTime)

                          if(Go == "school") {
                            dispatch(updateGoSchool([Weather, tmpTime]))
                          } else {
                            dispatch(updateGoHome([Weather, tmpTime]))
                          }
                        }}
                        >
                        {RowData.map((row, index) => (<MenuItem value={index} key={index}>{row}</MenuItem>))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                      {/* 4. 使用textItems來渲染TextField */}
                    <TextField
                      label="time"
                      sx={{ maxWidth: 100 }}
                      defaultValue={0}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">min</InputAdornment>,
                      }}
                      onChange={(item) => {
                        let tmp = rowTime;
                        tmp[rowVaule[RowIndex]] = Number(item.target.value);
                        setRowTime(tmp);
                        if(Go == "school") {
                          dispatch(updateGoSchool([Weather, tmp]))
                        } else {
                          dispatch(updateGoHome([Weather, tmp]))
                        }
                      }}
                      />
                  </Grid>
                
                </Grid>

              ))}

              <IconButton onClick={handleClick}>
                <AddIcon/>
              </IconButton>
              <IconButton onClick={remove}>
                <RemoveCircleOutlineIcon/>
              </IconButton>
          </List>
        </Paper>
      </Box>
    </>
  );
}



export default SelectList;
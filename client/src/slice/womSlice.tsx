import { createSlice } from "@reduxjs/toolkit";

// interface wayOfMoving {
  
// }

const initialState = {
  record: {
    weather: "sunny",
    goSchool: [Array(10).fill(0)],
    goHome: [Array(10).fill(0)], 
  }, 
  sum: {
    sumArray: [Array(10).fill(0)]
  }
}

const wayOfMovingSlice = createSlice({
  name: "wayOfMovingSlice",
  initialState: initialState,
  reducers: {
    updateGoSchool(state, action) {
      state.record.goSchool[0] = [...action.payload[0]];
    },
    updateGoHome(state, action) {
      state.record.goHome[0] = [...action.payload[0]];
    },
    udateWeather(state, action) {
      state.record.weather = action.payload;
    },
    updataSumArray(state, action) {
      // state.sum.sumArray = action.payload;
      for(let i=0; i<10; i++){
        state.sum.sumArray[0][i] += action.payload[0][i];
      }
      console.log(action.payload);
    }
  }
})



export const { updateGoSchool, updateGoHome, udateWeather, updataSumArray} = wayOfMovingSlice.actions;
export default wayOfMovingSlice.reducer;


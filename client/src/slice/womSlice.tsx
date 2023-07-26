import { createSlice } from "@reduxjs/toolkit";

// interface wayOfMoving {
  
// }

const initialState = {
  record: {
    weather: "sunny",
    goSchool: [Array(10).fill(0)],
    goHome: [Array(10).fill(0)], 
  }, 
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
    }
  }
})



export const { updateGoSchool, updateGoHome, udateWeather } = wayOfMovingSlice.actions;
export default wayOfMovingSlice.reducer;


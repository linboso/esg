import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Userinfo: {
    gender: "",
    age: "",
    location: "", 
  }, 
}

const wayOfMovingSlice = createSlice({
  name: "wayOfMovingSlice",
  initialState: initialState,
  reducers: {
    updateGoSchool(state, action) {
      state.Userinfo.gender = action.payload;
    },
    // updateGoHome(state, action) {
    //   state.record.goHome[0] = [...action.payload[0]];
    // },
    // udateWeather(state, action) {
    //   state.record.weather = action.payload;
    // }
  }
})



// export const { updateGoSchool, updateGoHome, udateWeather } = wayOfMovingSlice.actions;
// export default wayOfMovingSlice.reducer;


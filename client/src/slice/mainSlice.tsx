import { createSlice } from "@reduxjs/toolkit";

// interface wayOfMoving {
  
// }

const initialState = {
  wayOfMoving: {
    list: [Array(10).fill(0)] 
  }, 
}

const wayOfMovingSlice = createSlice({
  name: "wayOfMovingSlice",
  initialState: initialState,
  reducers: {
    updateTime(state, action) {
      state.wayOfMoving.list = [...action.payload];
    },
  }
})



export const { updateTime } = wayOfMovingSlice.actions;
export default wayOfMovingSlice.reducer;


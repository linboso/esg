import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tmp: {
    list: [Array(10).fill(0)]
  }, 
}

const TmpArraySlice = createSlice({
  name: "TmpArraySlice",
  initialState: initialState,
  reducers: {
    updateTmpArray(state, action) {
      // console.log(state.tmp.list);
      const index = action.payload[0];
      state.tmp.list[0][index] = parseInt(action.payload[1]);
    },
    clearTmpArray(state) {
      state.tmp.list[0] = [...Array(10).fill(0)];
      // console.log(state.tmp.list);
    }
  }
})



export const { updateTmpArray, clearTmpArray } = TmpArraySlice.actions;
export default TmpArraySlice.reducer;


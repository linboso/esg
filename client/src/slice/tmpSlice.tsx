import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tmp: {
    list: [Array(10).fill(0)]
  }, 
  check: {
    check: false,
  },
  clear: {
    check: false,
  }
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
    },
    updateCheck(state) {
      state.check.check = true;
    },
    updateClear(state) {
      if(state.clear.check) {
        state.clear.check = false;
      } else {
        state.clear.check = true;
      }
    }

  }
})



export const { updateTmpArray, clearTmpArray, updateCheck, updateClear} = TmpArraySlice.actions;
export default TmpArraySlice.reducer;


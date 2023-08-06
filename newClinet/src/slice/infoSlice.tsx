import { createSlice } from "@reduxjs/toolkit"
import uuid from "react-uuid"

const initialState = {
  Userinfo: {
    gender: "",
    age: "",
    school: "",
    uuid: uuid(),
  },
}

console.log(initialState.Userinfo.uuid)

const InfoSlice = createSlice({
  name: "InfoSlice",
  initialState: initialState,
  reducers: {
    updateInfo(state, action) {
      state.Userinfo.school = action.payload[0]
      state.Userinfo.gender = action.payload[1]
      state.Userinfo.age = action.payload[2]
    },
  },
})

export const { updateInfo } = InfoSlice.actions
export default InfoSlice.reducer

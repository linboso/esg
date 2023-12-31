import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  record: {
    sunny: {
      // goSchool: [50,0,0,0,0,14,0,13,0,0],
      goSchool: [...Array(10).fill(0)],
      goHome: [...Array(10).fill(0)],
    },
    rain: {
      goSchool: [...Array(10).fill(0)],
      goHome: [...Array(10).fill(0)],
    },
  },
  sum: {
    CarbonVolume: 0,
    CarbonArray: [...Array(10).fill(0)],
  },
}

const wayOfMovingSlice = createSlice({
  name: "wayOfMovingSlice",
  initialState: initialState,
  reducers: {
    updateGoSchool(state, action) {
      if (action.payload[0] == "sunny") {
        state.record.sunny.goSchool = [...action.payload[1]]
      } else {
        state.record.rain.goSchool = [...action.payload[1]]
      }
    },
    updateGoHome(state, action) {
      if (action.payload[0] == "sunny") {
        state.record.sunny.goHome = [...action.payload[1]]
      } else {
        state.record.rain.goHome = [...action.payload[1]]
      }
    },
    SumCarbonVolume(state) {
      const weight: number[] = [
        5.25, 85.82, 18.08, 40.83, 173.53, 70, 16.8, 0, 54.67, 38.86,
      ]
      let tmp = 0

      weight.map((w, index) => {
        tmp += state.record.rain.goHome[index] * w
        tmp += state.record.rain.goSchool[index] * w
        tmp += state.record.sunny.goHome[index] * w
        tmp += state.record.sunny.goSchool[index] * w
      })

      state.sum.CarbonVolume = tmp
      // console.log(">>>>" + state.sum.CarbonVolume);
    },
    TotalCarbomArray(state) {
      const weight: number[] = [
        5.25, 85.82, 18.08, 40.83, 173.53, 70, 16.8, 0, 54.67, 38.86,
      ]
      let CarbonArray: number[] = [...Array(10).fill(0)]
      weight.map((w, index) => {
        CarbonArray[index] += state.record.rain.goHome[index] * w
        CarbonArray[index] += state.record.rain.goSchool[index] * w
        CarbonArray[index] += state.record.sunny.goHome[index] * w
        CarbonArray[index] += state.record.sunny.goSchool[index] * w
      })
      state.sum.CarbonArray = CarbonArray
    },
  },
})

export const {
  updateGoSchool,
  updateGoHome,
  SumCarbonVolume,
  TotalCarbomArray,
} = wayOfMovingSlice.actions
export default wayOfMovingSlice.reducer

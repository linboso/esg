import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"

import wayOfMovingSlice from "../slice/womSlice"
import tmpSlice from "../slice/tmpSlice"


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    wayOfMoving: wayOfMovingSlice,
    TmpArray: tmpSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

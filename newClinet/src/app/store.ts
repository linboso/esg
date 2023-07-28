import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import logger from "redux-logger"

import wayOfMovingSlice from "../slice/womSlice"
import tmpSlice from "../slice/tmpSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    wayOfMoving: wayOfMovingSlice,
    TmpArray: tmpSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false })
      // .concat(sagaMiddleware, socketMiddleware)
      // .concat(routerMiddleware)
      .concat(logger),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

import { configureStore } from '@reduxjs/toolkit'
import appSliceReducer from "../features/app/appSlice"
export const store = configureStore({
    reducer: {
        appRedux: appSliceReducer
    },
})
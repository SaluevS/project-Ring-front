import { configureStore } from '@reduxjs/toolkit'
import applicationSlice from '../features/applicationSlice'

export const store = configureStore({
    reducer: {
        applicationSlice
    }
})
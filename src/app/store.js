import { configureStore } from '@reduxjs/toolkit'
import applicationSlice from '../features/applicationSlice'
import themeSlice from '../features/themeSlice'

export const store = configureStore({
    reducer: {
        applicationSlice,
        themeSlice
    }
})
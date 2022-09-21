import { configureStore } from '@reduxjs/toolkit'
import applicationSlice from '../features/applicationSlice'
import themeSlice from '../features/themeSlice'
import commentSlice from '../features/commentSlice'

export const store = configureStore({
    reducer: {
        applicationSlice,
        themeSlice,
        commentSlice
    }
})
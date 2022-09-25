import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    themes: [],
    loading: false
}

export const fetchThemes = createAsyncThunk(
    'themes/fetch',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:3400/themes');

            const data = await res.json();

            return data;
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

export const addTheme = createAsyncThunk(
    'add/theme',
    async ({ name, text, userId, avatar }, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:3400/theme', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ name: name, text: text, user: userId, image: avatar })
            })

            const theme = await res.json();

            return theme;
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchThemes.fulfilled, (state, action) => {
                state.themes = action.payload
                state.loading = false
            })
            .addCase(fetchThemes.pending, (state, action) => {
                state.loading = true
            })
            .addCase(addTheme.fulfilled, (state, action) => {
                state.themes.push(action.payload)
            })
    }
})

export default themeSlice.reducer
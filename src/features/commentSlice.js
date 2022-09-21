import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: []
}

export const fetchComments = createAsyncThunk(
    'fetch/comments',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:3400/comments')

            const comment = await res.json();

            return comment;
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

export const addComment = createAsyncThunk(
    'add/comment',
    async ({ comm, id, userId }, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:3400/comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: comm, theme: id, user: userId })
            })

            const comment = await res.json();

            return comment;
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.comments = action.payload
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.comments.push(action.payload)
            })
    }
})

export default commentSlice.reducer
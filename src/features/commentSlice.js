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

export const addLike = createAsyncThunk(
    'add/like',
    async ({ userId, commId }, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:3400/likeAdd/${commId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ like: userId })
            })

            const data = await res.json()

            return { userId, commId }

        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

export const delLike = createAsyncThunk(
    'delete/like',
    async ({ userId, commId }, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:3400/likeDel/${commId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ like: userId })
            })

            const data = await res.json()

            return { userId, commId }

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
            .addCase(addLike.fulfilled, (state, action) => {
                state.comments = state.comments.map((item) => {
                    if (item._id === action.payload.commId) {
                        item.like.push(action.payload.userId)
                    }
                    return item;
                })
            })
            .addCase(delLike.fulfilled, (state, action) => {
                state.comments = state.comments.map((elem) => {
                    if (elem._id === action.payload.commId) {
                        elem.like.pop(action.payload.userId)
                    }
                    return elem
                })
            })
    }
})

export default commentSlice.reducer
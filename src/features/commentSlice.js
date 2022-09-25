import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    loadComment: false
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
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`
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
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`
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
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`
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

export const delComment = createAsyncThunk(
    'delete/comment',
    async (item, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:3400/delComment/${item._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`
                }
            })

            return item;
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
                state.loadComment = false
            })
            .addCase(addComment.pending, (state, action) => {
                state.loadComment = true
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
            .addCase(delComment.fulfilled, (state, action) => {
                state.comments = state.comments.filter((elem) => elem._id !== action.payload._id)
            })
    }
})

export default commentSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  cards: [],
};

export const fetchCard = createAsyncThunk(
  "fetch/movies",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3400/card");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.cards = action.payload;
      })

  },
});

export default cardSlice.reducer;
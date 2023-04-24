import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isLoading: false,
  hasError: false,
};

export const loadComments = createAsyncThunk(
  "comments/loadComments",
  async (permalink) => {
    try {
      const comments = await fetch(`https://www.reddit.com${permalink}.json`);
      const response = await comments.json();
      return response[1].data.children;
    } catch (error) {
      console.log("loadComments error", error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    resetComments: (state) => {
      state.comments = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadComments.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(loadComments.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
    builder.addCase(loadComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.comments = action.payload;
    });
  },
});

export const selectComments = (state) => state.comments;

export const { resetComments } = commentsSlice.actions;

export default commentsSlice.reducer;

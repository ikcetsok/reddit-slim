import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
  "posts/loadPosts",
  async (subreddit) => {
    const posts = await fetch("./subkindafunny.json");
    const response = await posts.json();
    return response.children;
  }
);

const initialState = {
  posts: [],
  isLoading: false,
  hasError: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPosts.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(loadPosts.hasError, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    });
    builder.addCase(loadPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.posts = action.payload;
    });
  },
});

export const selectPosts = (state) => state.posts.posts;

export default postSlice.reducer;

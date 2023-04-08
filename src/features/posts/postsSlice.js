import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
  "posts/loadPosts",
  async (subreddit) => {
    try {
      const posts = await fetch("https://www.reddit.com/r/kindafunny/.json");
      const response = await posts.json();
      console.log(response.data.children);
      return response.data.children;
    } catch (error) {
      console.log("byl error", error);
    }
  }
);

const initialState = {
  posts: [],
  isLoading: false,
  hasError: false,
};

export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPosts.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(loadPosts.rejected, (state) => {
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

// export const postSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(loadPosts.pending, (state, action) => {
//       state.isLoading = true;
//       state.hasError = false;
//     });
//     builder.addCase(loadPosts.hasError, (state, action) => {
//       state.isLoading = false;
//       state.hasError = true;
//     });
//     builder.addCase(loadPosts.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.hasError = false;
//       state.posts = action.payload;
//     });
//   },
// });

export const selectPosts = (state) => state.posts;


export default postSlice.reducer;

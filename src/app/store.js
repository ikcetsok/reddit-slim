import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import searchTermReducer  from "../features/searchbar/searchTermSlice"

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    searchTerm: searchTermReducer
  },
});

import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import searchTermReducer  from "../features/searchbar/searchTermSlice";
import feedsReducer from "../features/feeds/feedsSlice"

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    searchTerm: searchTermReducer,
    feeds: feedsReducer
  },
});

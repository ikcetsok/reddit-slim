import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    feeds: ['kindafunny','DigitalArt', 'AskReddit', 'MarvelSnap']
}

export const feedsSlice = createSlice({
    name:'feeds',
    initialState:initialState,
})

export const selectFeeds = (state) => state.feeds.feeds;

export default feedsSlice.reducer;


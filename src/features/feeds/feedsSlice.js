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

// import React from 'react';

// function Parent() {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '300px', height: '50px', border: '1px solid black' }}>
//       <div style={{ textAlign: 'center' }}>Centered child</div>
//       <div style={{ marginLeft: 'auto' }}>Child on far right</div>
//     </div>
//   );
// }

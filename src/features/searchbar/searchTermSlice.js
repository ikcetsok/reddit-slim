import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const selectSearchTerm = (state) => state.searchTerm;

export const { setSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;

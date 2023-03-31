import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:[],
    isLoading: false,
    hasError: false
};

const postSlice = createSlice({
    name:'posts',
    initialState: initialState,
    
})
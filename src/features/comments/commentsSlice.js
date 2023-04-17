import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    comments:[],
    isLoading: false,
    hasError: false,
}

export const loadComments =  createAsyncThunk(
    'comments/loadComments',
    async (permalink) => {

    }
)
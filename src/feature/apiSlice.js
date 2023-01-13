import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://touchinspiration-0ada.restdb.io/rest/sample';

const initialState = {
  isLoading: false,
  items: [],
};

export const getApiItems = createAsyncThunk('api/getApiItems', async () => {
  try {
    const response = await axios(url, {
      headers: {
        Accept: 'Application/json',
        'x-api-key': process.env.REACT_APP_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const apiSlice = createSlice({
  name: 'api',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getApiItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getApiItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getApiItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default apiSlice.reducer;

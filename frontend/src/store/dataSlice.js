import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk to fetch data from the backend server
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const response = await axios.get('http://localhost:5000/');
    return response.data;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: 'false', 
    error: null,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;

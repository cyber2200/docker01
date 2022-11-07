import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  isLoggedIn: false,
  apiStatus: ''
};

export const verifyActionApi = createAsyncThunk('/api/verify', async (arg, { getState }) => {
  const postData = { sessionId: localStorage.getItem('sessionId') }
  const res = await axios.post('http://localhost:3000/api/verify', postData);
  return res;
});

export const counterSlice = createSlice({
  name: 'verify',
  initialState,
  extraReducers: builder => {
    // Login action API
    builder
      .addCase(verifyActionApi.call, (state, action) => {
        state.apiStatus = '';
      })
      .addCase(verifyActionApi.pending, (state, action) => {
        state.apiStatus = 'Loading...';
      })
      .addCase(verifyActionApi.fulfilled, (state, action) => {
        if (action.payload.data.res === 'OK') {
          state.isLoggedIn = true;
        }
        state.apiStatus = 'Done';
      })
      .addCase(verifyActionApi.rejected, (state, action) => {
        state.apiStatus = 'Failed...';
      });
  }
});

export const { updateEmail, updatePassword, updateRedirect } = counterSlice.actions;
export default counterSlice.reducer;
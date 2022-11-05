import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  email: '',
  password: '',
  apiStatus: ''
};

export const loginActionApi = createAsyncThunk('/test', async () => {
  const res = await axios.post('http://localhost:3000/mysqlTest');
  return res;
});

export const counterSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload
    },
    updatePassword: (state, action) => {
      state.password = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginActionApi.call, (state, action) => {
        state.apiStatus = '';
      })
      .addCase(loginActionApi.pending, (state, action) => {
        state.apiStatus = 'Loading...';
        console.log('Loading...');
      })
      .addCase(loginActionApi.fulfilled, (state, action) => {
        state.apiStatus = 'Done';
        console.log('Done');
      })
      .addCase(loginActionApi.rejected, (state, action) => {
        state.apiStatus = 'Failed...';
        console.log('Rejected');
      });
  }
});

export const { updateEmail, updatePassword } = counterSlice.actions;
export default counterSlice.reducer;
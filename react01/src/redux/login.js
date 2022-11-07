import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  email: '',
  password: '',
  apiStatus: '',
  redirect: false
};

export const loginActionApi = createAsyncThunk('/api/login', async (arg, { getState }) => {
  const { login } = getState();
  const postData = { ...login };
  delete postData.apiStatus;
  const res = await axios.post('http://localhost:3000/api/login', postData);
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
    updateRedirect: (state, action) => {
      state.redirect = action.payload;
    }
  },
  extraReducers: builder => {
    // Login action API
    builder
      .addCase(loginActionApi.call, (state, action) => {
        state.apiStatus = '';
      })
      .addCase(loginActionApi.pending, (state, action) => {
        state.apiStatus = 'Loading...';
      })
      .addCase(loginActionApi.fulfilled, (state, action) => {
        if (action.payload.data.res === 'OK') {
          state.redirect = true;
          localStorage.setItem('sessionId', action.payload.data.sessionId);
        }
        state.apiStatus = 'Done';
      })
      .addCase(loginActionApi.rejected, (state, action) => {
        state.apiStatus = 'Failed...';
      });
  }
});

export const { updateEmail, updatePassword, updateRedirect } = counterSlice.actions;
export default counterSlice.reducer;
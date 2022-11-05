import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  password: ''
};

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
});

export const { updateEmail, updatePassword } = counterSlice.actions;

export default counterSlice.reducer;
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { loginApiCall } from './loginAPI';

export interface LoginState {
  formData: {
    email: string;
    password: string;
  },
  loadingState: string;
}

const initialState: LoginState = {
  formData: {
    email: '',
    password: '',
  },
  loadingState: ''
};

export const login = createAsyncThunk(
  'login/login',
  async (formData: any) => {
    const res = await loginApiCall(formData);
    console.log(res);
    return res;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setFormData: (state, action:PayloadAction<{email: string; password: string;}>) => {
      state.formData = action.payload;
    },
    setLoadingState(state, action:PayloadAction<string>) {
      state.loadingState = action.payload;
    }
  }
});

export const { setFormData, setLoadingState } = loginSlice.actions;
export const formData = (state: RootState) => state.login.formData;
export const loadingState = (state: RootState) => state.login.loadingState;

export default loginSlice.reducer;

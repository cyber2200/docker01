import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { loginApiCall, getUsersApiCall } from './loginAPI';
import { act } from 'react-dom/test-utils';

export interface LoginState {
  formData: {
    email: string;
    password: string;
  },
  loadingState: string;
  users: [];
}

const initialState: LoginState = {
  formData: {
    email: '',
    password: '',
  },
  loadingState: '',
  users: []
};

export const login = createAsyncThunk(
  'login/login',
  async (formData: any) => {
    const res = await loginApiCall(formData);
    return res;
  }
);

export const getUsers = createAsyncThunk(
  'login/getUsers',
  async () => {
    const res = await getUsersApiCall();
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
  },
  extraReducers(builder) {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log(action.payload);    
      const t = action as {payload: { data: {users_data: []} }};
      state.users = t.payload.data.users_data;
    }); 
  }
});

export const { setFormData, setLoadingState } = loginSlice.actions;
export const formData = (state: RootState) => state.login.formData;
export const loadingState = (state: RootState) => state.login.loadingState;
export const usersState = (state: RootState) => state.login.users;

export default loginSlice.reducer;

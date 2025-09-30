import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export type TUSer = {
  exp: number;
  iat: number;
  id: string;
  role: string;
};

type InitialState = {
  user: null | TUSer;
  token: null | string;
};

const initialState: InitialState = {
  user: null,
  token: null,
};

const auth_slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    set_user: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { set_user, logout } = auth_slice.actions;

export const current_user = (state: RootState) => state.auth.user;
export const current_token = (state: RootState) => state.auth.token;
export default auth_slice.reducer;

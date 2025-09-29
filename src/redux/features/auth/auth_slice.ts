import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user: null | object;
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
  },
});

export const { set_user } = auth_slice.actions;

export default auth_slice.reducer;

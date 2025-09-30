import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

const base_query = fetchBaseQuery({
  baseUrl: "http://localhost:1000/api/v1",
  credentials: "include",
  prepareHeaders: (Headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      Headers.set("Authorization", `${token}`);
    }
  },
});

export const base_api = createApi({
  reducerPath: "base_api",
  baseQuery: base_query,
  endpoints: () => ({}),
});

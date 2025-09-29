import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const base_api = createApi({
  reducerPath: "base_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1000/api/v1",
    credentials: "include",
  }),

  endpoints: () => ({}),
});

import {
  createApi,
  type DefinitionType,
  fetchBaseQuery,
  type BaseQueryApi,
  type BaseQueryFn,
  type FetchArgs,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { logout, set_user } from "../features/auth/auth_slice";
import { toast } from "sonner";
import type { TError } from "@/types";


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

const base_query_with_refresh_token: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await base_query(args, api, extraOptions);

  const error = result?.error as TError;
  console.log("result from base query", result);
  if ((error?.data?.success as boolean) == false) {
    const error_message: string = error?.data?.errorSource[0]?.message || error?.data?.message
    toast.error(`${error_message}`, { duration: 4000 });
  }
  if (result?.error?.status == 401 && error?.data?.message == "jwt expired") {
    console.log("sending refresh token");
    const res = await fetch("http://localhost:1000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(
        set_user({
          user,
          token: data.data.accessToken,
        })
      );

      result = await base_query(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const base_api = createApi({
  reducerPath: "base_api",
  baseQuery: base_query_with_refresh_token,
  endpoints: () => ({}),
});

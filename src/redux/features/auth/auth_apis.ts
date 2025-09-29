import { base_api } from "../../api/base_api";

const auth_apis = base_api.injectEndpoints({
  endpoints: (builders) => ({
    login: builders.mutation({
      query: (user_info) => ({
        url: "/auth/login",
        method: "POST",
        body: user_info,
      }),
    }),
  }),
});

export const { useLoginMutation } = auth_apis;

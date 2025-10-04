import { base_api } from "@/redux/api/base_api";
import type { TParamItems } from "@/types";

const user_management_api = base_api.injectEndpoints({
  endpoints: (builder) => ({
    add_student: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
    }),
    get_all_student: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TParamItems) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/students",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useAdd_studentMutation, useGet_all_studentQuery } = user_management_api;

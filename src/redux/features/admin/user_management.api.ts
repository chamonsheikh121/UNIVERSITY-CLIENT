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
    get_single_student: builder.query({
      query: (args) => {
        return {
          url: `/students/${args}`,
          method: "GET",
        };
      },
    }),
    update_student: builder.mutation({
      query: ({  id, student_data }) => {
        return {
          url: `/students/${id}`,
          method: "PATCH",
          body: student_data,
        };
      },
    }),
    block_student: builder.mutation({
      query: ({  user_id, status }) => {
        return {
          url: `/users/change-status/${user_id}`,
          method: "PATCH",
          body: status,
        };
      },
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

export const {
  useAdd_studentMutation,
  useGet_all_studentQuery,
  useGet_single_studentQuery,
  useUpdate_studentMutation,
  useBlock_studentMutation
} = user_management_api;

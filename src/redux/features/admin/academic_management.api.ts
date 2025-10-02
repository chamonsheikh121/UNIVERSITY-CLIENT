import { base_api } from "@/redux/api/base_api";
import type { TParamItems, TResponse_Redux, TSemester } from "@/types";

const academic_management_api = base_api.injectEndpoints({
  endpoints: (builder) => ({
    get_all_academic_semester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TParamItems) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/academic-semesters",
          method: "GET",
          params,
          // params: { name: "Summer" },
        };
      },
      transformResponse: (response: TResponse_Redux<TSemester[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    add_academic_semester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGet_all_academic_semesterQuery,
  useAdd_academic_semesterMutation,
} = academic_management_api;

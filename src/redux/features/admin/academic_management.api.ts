import { base_api } from "@/redux/api/base_api";

const academic_management_api = base_api.injectEndpoints({
  endpoints: (builder) => ({
    get_all_academic_semester: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
      transformResponse: (response) => {
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

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
    add_academic_faculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
    get_all_academic_faculties: builder.query({
      query: (args) => {
        console.log("args", args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TParamItems) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/academic-faculties",
          method: "GET",
          params,
        };
      },
    }),
    create_academic_department: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
    get_all_academic_department: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element:TParamItems) => {
            params.append(element.name, element.value as string)
          });
        }
        return {
          url: "/academic-departments",
          method: "GET",
          params
        };
      },
    }),
  }),
});

export const {
  useGet_all_academic_semesterQuery,
  useAdd_academic_semesterMutation,
  useAdd_academic_facultyMutation,
  useGet_all_academic_facultiesQuery,
  useCreate_academic_departmentMutation,
  useGet_all_academic_departmentQuery,
} = academic_management_api;

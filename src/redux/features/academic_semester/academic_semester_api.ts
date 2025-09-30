import { base_api } from "@/redux/api/base_api";



const academic_semester_api = base_api.injectEndpoints({
    endpoints:(builder)=>({
        get_all_academic_semesters: builder.query({
            query:()=>({
                url: "/academic-semesters",
                method: 'GET',
            })
        })
    })
})

export const {useGet_all_academic_semestersQuery}= academic_semester_api
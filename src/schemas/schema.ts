import z from "zod/v3";

export const academic_semester_schema =z.object({
    semester_name: z.string({required_error: 'Please select a semester name'}),
    semester_year: z.string({required_error: 'Please select year'}),
    semester_start_month: z.string({required_error: 'Please select start month'}),
    semester_end_month: z.string({required_error: 'Please select end month'})
})
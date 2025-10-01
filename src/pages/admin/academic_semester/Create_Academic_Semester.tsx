import Ph_form from "@/components/form/Ph_form";
import Ph_Select, { type TOptions } from "@/components/form/Ph_Select";
import {
  months_constance,
  semester_options_constance,
} from "@/constance/constances";
import { Button, Col, Flex } from "antd";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "./../../../../node_modules/@hookform/resolvers/zod/src/zod";
import { academic_semester_schema } from "@/schemas/schema";
import { useAdd_academic_semesterMutation } from "@/redux/features/admin/academic_management.api";
import { toast } from "sonner";

const Create_Academic_Semester = () => {
  const [add_academic_semester] = useAdd_academic_semesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toast_id = toast.loading(".... creating semester");

    const code = data?.semester_name?.split(",")[0];
    const name = data?.semester_name?.split(",")[1];

    const academic_semester_data = {
      name: name,
      code: code,
      year: data?.semester_year,
      start_month: data?.semester_start_month,
      end_month: data?.semester_end_month,
    };

    try {
      const res = await add_academic_semester(academic_semester_data);
      if(res?.error){
       toast.error("failed to create ", { id: toast_id });
      }
      if (res?.data?.success == true) {
        toast.success("Semester created successfully", { id: toast_id });
      }
    } catch (error) {
      toast.error("failed to create ", { id: toast_id });
    }
  };

  const semester_options: TOptions[] = semester_options_constance;
  const months_options: TOptions[] = months_constance?.map((month) => ({
    value: month,
    label: month,
  }));
  const current_year = new Date().getFullYear();
  const year_options: TOptions[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
    (number) => ({
      value: String(current_year + number),
      label: String(current_year + number),
    })
  );

  return (
    <Flex justify="center" align="end">
      <Col span={8}>
        <Ph_form
          onSubmit={onSubmit}
          resolver={zodResolver(academic_semester_schema)}
        >
          <Ph_Select
            name="semester_name"
            label="Academic Semester Name"
            options={semester_options}
            place_holder="Semester"
          ></Ph_Select>
          <Ph_Select
            name="semester_year"
            label="Academic Semester Year"
            options={year_options}
            place_holder="Year"
          ></Ph_Select>
          <Ph_Select
            name="semester_start_month"
            label="Start Month"
            options={months_options}
            place_holder="Month"
          ></Ph_Select>
          <Ph_Select
            name="semester_end_month"
            label="End Month"
            options={months_options}
            place_holder="Month"
          ></Ph_Select>

          <Button htmlType="submit">Submit</Button>
        </Ph_form>
      </Col>
    </Flex>
  );
};

export default Create_Academic_Semester;

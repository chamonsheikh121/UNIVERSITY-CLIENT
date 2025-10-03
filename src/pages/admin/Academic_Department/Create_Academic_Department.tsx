import Ph_form from "@/components/form/Ph_form";
import Ph_Input from "@/components/form/Ph_Input";
import Ph_Select from "@/components/form/Ph_Select";
import {
  useCreate_academic_departmentMutation,
  useGet_all_academic_facultiesQuery,
} from "@/redux/features/admin/academic_management.api";
import { academic_department_validation_schema } from "@/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { Button, Col, Flex } from "antd";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import Ph_select_options_generator from "./../../../utils/Ph_select_options_generator";
import { toast } from "sonner";
import creation_successful_sender from "@/utils/creation_successful_sender";

const Create_Academic_Department = () => {
  const { data } = useGet_all_academic_facultiesQuery(undefined);
  const [create_academic_department] = useCreate_academic_departmentMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toast_id = toast.loading("Creating Academic Department");
    const academic_department_data = {
      name: data?.department_name,
      academic_faculty_id: data?.academic_faculty_id,
    };

    console.log(academic_department_data);

    try {
      const res = await create_academic_department(academic_department_data);
      console.log(res);
      creation_successful_sender(
        res,
        "Academic Department Creation Successful",
        "Academic Department Creation Failed",
        toast_id
      );
    } catch (error) {
      console.log('cahmon alkdckaj calskcjd ');
      toast.error("Academic Department Creation failed", {
        id:toast_id,
        duration: 5000,
      });
    }
  };

  const options = Ph_select_options_generator({
    data: data,
    expected_value: "_id",
    expected_label: "name",
  });
  return (
    <Flex justify="center">
      <Col span={8}>
        <Ph_form
          onSubmit={onSubmit}
          resolver={zodResolver(academic_department_validation_schema)}
        >
          <Ph_Input
            type="text"
            id="department_id"
            name="department_name"
            label="Academic Department Name"
            place_holder="Department name"
          ></Ph_Input>
          <Ph_Select
            label="Select an academic faculty"
            name="academic_faculty_id"
            place_holder="Academic faculty"
            options={options}
          ></Ph_Select>
          <Button htmlType="submit">Submit</Button>
        </Ph_form>
      </Col>
    </Flex>
  );
};

export default Create_Academic_Department;

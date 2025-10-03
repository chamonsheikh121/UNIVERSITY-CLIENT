import Ph_form from "@/components/form/Ph_form";
import Ph_Input from "@/components/form/Ph_Input";
import { useAdd_academic_facultyMutation } from "@/redux/features/admin/academic_management.api";
import { academic_faculty_schema } from "@/schemas/schema";
import type { TFaculty } from "@/types";
import creation_successful_sender from "@/utils/creation_successful_sender";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { Button, Col, Flex } from "antd";
import { type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const Create_Academic_Faculty = () => {
  const [add_academic_faculty] = useAdd_academic_facultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toast_id = toast.loading("creating academic faculty");
    const academic_faculty_data = {
      name: data?.faculty_name,
    };

    try {
      const res = await add_academic_faculty(academic_faculty_data);
      creation_successful_sender<TFaculty>(
        res,
        "Academic faculty created successfully",
        "Academic faculty creation Failed",
        toast_id
      );
    } catch (error) {
      console.log(error);
      toast.error("academic faculty creation failed", { id: toast_id });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <Ph_form
          onSubmit={onSubmit}
          resolver={zodResolver(academic_faculty_schema)}
        >
          <Ph_Input
            id="faculty_id"
            label="Academic Faculty Name :"
            name="faculty_name"
            place_holder="eg: Faculty of engineering"
            type="text"
          ></Ph_Input>
          <Button htmlType="submit">submit</Button>
        </Ph_form>
      </Col>
    </Flex>
  );
};

export default Create_Academic_Faculty;

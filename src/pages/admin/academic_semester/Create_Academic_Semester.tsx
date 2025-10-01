import Ph_form from "@/components/form/Ph_form";
import Ph_Input from "@/components/form/Ph_Input";
import Ph_Select, { type TOptions } from "@/components/form/Ph_Select";
import { Button, Col, Flex } from "antd";
import type { FieldValues, SubmitHandler } from "react-hook-form";

const Create_Academic_Semester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    
    const code = data?.semester_name?.split(',')[0]
    const name = data?.semester_name?.split(',')[1]

    const academic_semester_data={
        name: name,
        code: code
    }
    console.log(academic_semester_data);

  };

  const options: TOptions[] = [
    { value: "01,Autumn", label: "Autumn" },
    { value: "02,Summer", label: "Summer" },
    { value: "03,Fall", label: "Fall" },
  ];

  return (
    <Flex justify="center" align="end">
      <Col span={8}>
        <Ph_form onSubmit={onSubmit}>
          <Ph_Select
            name="semester_name"
            label="Academic Semester Name"
            options={options}
            place_holder="Semester"
          ></Ph_Select>
          <Button htmlType="submit">Submit</Button>
        </Ph_form>
      </Col>
    </Flex>
  );
};

export default Create_Academic_Semester;

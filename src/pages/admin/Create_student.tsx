import { Button, Col, Divider, Input, Row } from "antd";
import Ph_form from "@/components/form/Ph_form";
import Ph_Input from "@/components/form/Ph_Input";
import Ph_Select, { type TOptions } from "@/components/form/Ph_Select";
import { useAdd_studentMutation } from "@/redux/features/admin/user_management.api";
import {
  Controller,
  type FieldValues,
  type SubmitHandler,
} from "react-hook-form";
import { studentDummyData } from "@/DummyData";
import {
  useGet_all_academic_departmentQuery,
  useGet_all_academic_semesterQuery,
} from "@/redux/features/admin/academic_management.api";
import Ph_select_options_generator from "@/utils/Ph_select_options_generator";

const Create_student = () => {
  const [add_student] = useAdd_studentMutation();

  const { data: departments, isLoading: IsDepartmentLoading } =
    useGet_all_academic_departmentQuery(undefined, {});
  const { data: semesters, isLoading } = useGet_all_academic_semesterQuery(
    undefined,
    {
      skip: IsDepartmentLoading,
    }
  );
  // console.log(semesters);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const student_data = {
      Password: "",
      student_data: data,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(student_data));
    formData.append("studentImage", data?.profileImage);

    try {
      const res = await add_student(formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const gender_options: TOptions[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const academic_department_options = Ph_select_options_generator({
    data: departments,
    expected_value: "_id",
    expected_label: "name",
  });
  const academic_semester_options = Ph_select_options_generator({
    data: semesters,
    expected_value: "_id",
    expected_label: "name",
  });

  const bloodGroup_options: TOptions[] = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
  ];

  return (
    <Row>
      <Col span={24}>
        <Ph_form onSubmit={onSubmit} defaultValues={studentDummyData}>
          {/* ========== PERSONAL INFORMATION ========== */}
          <Divider>Personal Information</Divider>
          <Row gutter={8}>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="firstName"
                type="text"
                name="name.firstName"
                label="First Name"
                place_holder="Enter first name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="middleName"
                type="text"
                name="name.middleName"
                label="Middle Name"
                place_holder="Enter middle name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="lastName"
                type="text"
                name="name.lastName"
                label="Last Name"
                place_holder="Enter last name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Select
                name="gender"
                label="Gender"
                options={gender_options}
                place_holder="Select gender"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="dateOfBirth"
                type="date"
                name="dateOfBirth"
                label="Date of Birth"
                place_holder="Select date of birth"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Select
                name="bloodGroup"
                label="Blood Group"
                options={bloodGroup_options}
                place_holder="Select blood group"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="email"
                type="email"
                name="email"
                label="Email"
                place_holder="Enter email"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="contactNo"
                type="text"
                name="contactNo"
                label="Contact No"
                place_holder="Enter contact number"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="emergencyContactNo"
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact No"
                place_holder="Enter emergency contact number"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="presentAddress"
                type="text"
                name="presentAddress"
                label="Present Address"
                place_holder="Enter present address"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="permanentAddress"
                type="text"
                name="permanentAddress"
                label="Permanent Address"
                place_holder="Enter permanent address"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Controller
                name="profileImage"
                render={({ field: { onChange } }) => (
                  <Input
                    type="file"
                    onChange={(e) => onChange(e.target.files?.[0])}
                  />
                )}
              />
            </Col>
          </Row>

          {/* ========== ACADEMIC INFORMATION ========== */}
          <Divider>Academic Information</Divider>
          <Row gutter={8}>
            <Col span={24} md={12} lg={8}>
              <Ph_Select
                name="academic_department_id"
                label="Academic Department"
                options={academic_department_options}
                place_holder="Select Academic Department"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Select
                name="academic_semester_id"
                label="Academic Semester"
                options={academic_semester_options}
                place_holder="Select Academic Semester"
              />
            </Col>
          </Row>

          {/* ========== GUARDIAN INFORMATION ========== */}
          <Divider>Guardian Information</Divider>
          <Row gutter={8}>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="fatherName"
                type="text"
                name="guardian.fatherName"
                label="Father's Name"
                place_holder="Enter father's name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="fatherOccupation"
                type="text"
                name="guardian.fatherOccupation"
                label="Father's Occupation"
                place_holder="Enter father's occupation"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="fatherContactNo"
                type="text"
                name="guardian.fatherContactNo"
                label="Father's Contact No"
                place_holder="Enter father's contact no"
              />
            </Col>

            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="motherName"
                type="text"
                name="guardian.motherName"
                label="Mother's Name"
                place_holder="Enter mother's name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="motherOccupation"
                type="text"
                name="guardian.motherOccupation"
                label="Mother's Occupation"
                place_holder="Enter mother's occupation"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="motherContactNo"
                type="text"
                name="guardian.motherContactNo"
                label="Mother's Contact No"
                place_holder="Enter mother's contact no"
              />
            </Col>
          </Row>

          {/* ========== LOCAL GUARDIAN INFORMATION ========== */}
          <Divider>Local Guardian Information</Divider>
          <Row gutter={8}>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="localGuardianName"
                type="text"
                name="localGuardian.name"
                label="Local Guardian Name"
                place_holder="Enter local guardian name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="localGuardianOccupation"
                type="text"
                name="localGuardian.occupation"
                label="Occupation"
                place_holder="Enter occupation"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Ph_Input
                id="localGuardianContactNo"
                type="text"
                name="localGuardian.contactNo"
                label="Contact No"
                place_holder="Enter contact no"
              />
            </Col>
            <Col span={24} md={24} lg={12}>
              <Ph_Input
                id="localGuardianAddress"
                type="text"
                name="localGuardian.address"
                label="Address"
                place_holder="Enter address"
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </Ph_form>
      </Col>
    </Row>
  );
};

export default Create_student;

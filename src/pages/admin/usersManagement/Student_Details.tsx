import { useGet_single_studentQuery } from "@/redux/features/admin/user_management.api";
import { useParams } from "react-router-dom";
import { Card, Col, Divider, Row, Typography } from "antd";

const Student_Details = () => {
  const { student_id } = useParams();
  const { data: student, isLoading } = useGet_single_studentQuery(student_id);
  const { Title, Text } = Typography;

  if(isLoading){
    return <h1>... loading</h1>
  }


  return (
    <Card style={{ maxWidth: 900, margin: "20px auto", padding: "20px" }}>
      <Title>Student Details</Title>

      {/* Personal Information */}
      <Divider>Personal Information</Divider>
      <Row gutter={[16, 8]}>
        <Col span={12}>
          <Text strong>Full Name: </Text>
          <Text>
            {student?.data?.name?.firstName} {student?.data?.name?.middleName}{" "}
            {student?.data?.name?.lastName}
          </Text>
        </Col>
        <Col span={12}>
          <Text strong>Gender: </Text>
          <Text>{student?.data?.gender}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Date of Birth: </Text>
          <Text>{student?.data?.dateOfBirth}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Email: </Text>
          <Text>{student?.data?.email}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Contact No: </Text>
          <Text>{student?.data?.contactNo}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Emergency Contact: </Text>
          <Text>{student?.data?.emergencyContactNo}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Blood Group: </Text>
          <Text>{student?.data?.bloodGroup}</Text>
        </Col>
        <Col span={24}>
          <Text strong>Present Address: </Text>
          <Text>{student?.data?.presentAddress}</Text>
        </Col>
        <Col span={24}>
          <Text strong>Permanent Address: </Text>
          <Text>{student?.data?.permanentAddress}</Text>
        </Col>
      </Row>

      {/* Academic Information */}
      <Divider>Academic Information</Divider>
      <Row gutter={[16, 8]}>
        <Col span={12}>
          <Text strong>Department ID: </Text>
          <Text>{student?.data?.academic_department_id}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Semester ID: </Text>
          <Text>{student?.data?.academic_semester_id}</Text>
        </Col>
      </Row>

      {/* Guardian Information */}
      <Divider>Guardian Information</Divider>
      <Row gutter={[16, 8]}>
        <Col span={12}>
          <Text strong>Father Name: </Text>
          <Text>{student?.data?.guardian?.fatherName}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Father Contact: </Text>
          <Text>{student?.data?.guardian?.fatherContactNo}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Mother Name: </Text>
          <Text>{student?.data?.guardian?.motherName}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Mother Contact: </Text>
          <Text>{student?.data?.guardian?.motherContactNo}</Text>
        </Col>
      </Row>

      {/* Local Guardian Information */}
      {student?.data?.localGuardian && (
        <>
          <Divider>Local Guardian Information</Divider>
          <Row gutter={[16, 8]}>
            <Col span={12}>
              <Text strong>Name: </Text>
              <Text>{student?.data?.localGuardian?.name || "N/A"}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Occupation: </Text>
              <Text>{student?.data?.localGuardian?.occupation || "N/A"}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Contact No: </Text>
              <Text>{student?.data?.localGuardian?.contactNo || "N/A"}</Text>
            </Col>
            <Col span={24}>
              <Text strong>Address: </Text>
              <Text>{student?.data?.localGuardian?.address || "N/A"}</Text>
            </Col>
          </Row>
        </>
      )}

      {/* Profile Image */}
      {student?.data?.profileImage && (
        <>
          <Divider>Profile Image</Divider>
          <img
            src={student?.data?.profileImage}
            alt="Profile"
            style={{ maxWidth: "200px", borderRadius: "5px" }}
          />
        </>
      )}
    </Card>
  );
};

export default Student_Details;

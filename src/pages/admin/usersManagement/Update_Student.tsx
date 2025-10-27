import { useGet_single_studentQuery } from "@/redux/features/admin/user_management.api";
import { useParams } from "react-router-dom";
import Create_student from "../Create_student";

const Update_Student = () => {
  const { student_id } = useParams();
  const { data: student, isLoading } = useGet_single_studentQuery(student_id);
  console.log(student);

  return (
    <div>
      {student && (
        <Create_student existing_student_data={student?.data}></Create_student>
      )}
    </div>
  );
};

export default Update_Student;

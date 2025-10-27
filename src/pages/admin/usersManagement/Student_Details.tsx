import { useParams } from "react-router-dom";


const Student_Details = () => {

    const {student_id} = useParams()

  return (
    <div>
      <h1>This is Student_Details {student_id}</h1>
    </div>
  );
};

export default Student_Details;
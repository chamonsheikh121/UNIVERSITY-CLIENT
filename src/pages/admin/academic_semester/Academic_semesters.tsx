import { useGet_all_academic_semestersQuery } from "@/redux/features/academic_semester/academic_semester_api";

const Academic_semesters = () => {
  const { data, isLoading } = useGet_all_academic_semestersQuery(undefined);
  console.log(isLoading, data);
  return (
    <div>
      <h1>{isLoading? 'Loading ....': "This is academic_semesters component"}</h1>
    </div>
  );
};
export default Academic_semesters;

import Create_student from "../pages/admin/Create_student";
import Course from "../pages/student/Course";
import Student_Dashboard from "../pages/student/student_dashboard";

export const student_paths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Student_Dashboard></Student_Dashboard>,
  },
  {
    name: "Course",
    path: "course",
    element: <Course></Course>,
  },
  {
    name: "student Management",
    children: [
      {
        name: "create student",
        path: "create-student",
        element: <Create_student></Create_student>,
      },
    ],
  },
];

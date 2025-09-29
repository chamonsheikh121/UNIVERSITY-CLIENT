import Create_faculty from "../pages/admin/Create_faculty";
import Faculty_Dashboard from "../pages/faculty/Faculty_Dashboard";
import Offered_Course from "../pages/faculty/Offered_Course";

export const faculty_paths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Faculty_Dashboard></Faculty_Dashboard>,
  },
  {
    name: "Offered Course",
    path: "faculty",
    element: <Offered_Course></Offered_Course>,
  },
  {
    name: "Faculty Management",
    children: [
      {
        name: "create faculty",
        path: "create-faculty",
        element: <Create_faculty></Create_faculty>,
      },
    ],
  },
];

import Create_student from "../pages/admin/Create_student";
import Create_Admin from "../pages/admin/Create_Admin";
import Dashboard from "../pages/admin/Dashboard";
import Create_faculty from "../pages/admin/Create_faculty";
import Academic_semesters from "./../pages/admin/academic_semester/Academic_semesters";
import Academic_Faculty from "@/pages/admin/Academic_Faculty/Academic_Faculty";
import Create_Academic_Faculty from "@/pages/admin/Academic_Faculty/Create_Academic_Faculty";
import Create_Academic_Semester from "@/pages/admin/academic_semester/Create_Academic_Semester";
import Create_Academic_Department from "@/pages/admin/Academic_Department/Create_Academic_Department";
import Academic_Department from "@/pages/admin/Academic_Department/Academic_Department";
import { Children } from "react";
import Students from "@/pages/admin/usersManagement/Students";
import Faculties from "@/pages/admin/usersManagement/Faculties";
import Admin from "@/pages/admin/usersManagement/Admin";

export const admin_paths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <Create_Academic_Faculty></Create_Academic_Faculty>,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <Academic_Faculty></Academic_Faculty>,
      },
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <Create_Academic_Semester></Create_Academic_Semester>,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <Academic_semesters></Academic_semesters>,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <Create_Academic_Department></Create_Academic_Department>,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <Academic_Department></Academic_Department>,
      },
    ],
  },
  {
    name: "Users Management",
    children: [
      {
        name: "Create User",
        children: [
          {
            name: "Create Student",
            path: "create-student",
            element: <Create_student></Create_student>,
          },
          {
            name: "Create Faculty",
            path: "create-faculty",
            element: <Create_faculty></Create_faculty>,
          },

          {
            name: "Create Admin",
            path: "create-admin",
            element: <Create_Admin></Create_Admin>,
          },
        ],
      },
      {
        name: "Students",
        path: "students",
        element: <Students></Students>,
      },
      {
        name: "Faculties",
        path: "faculties",
        element: <Faculties></Faculties>,
      },
      {
        name: "Admins",
        path: "admins",
        element: <Admin></Admin>,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <Create_student></Create_student>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <Create_faculty></Create_faculty>,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <Create_Admin></Create_Admin>,
      },
      {
        name: "New Sub",
        children: [
          {
            name: "Create Sub Admin",
            path: "create-sub-admin",
            element: <Create_student></Create_student>,
          },
          {
            name: "update Sub Admin",
            path: "update-sub-admin",
            element: <Create_faculty></Create_faculty>,
          },
          {
            name: "Another Sub",
            children: [
              {
                name: "another 1",
                path: "create-another1",
                element: <Dashboard></Dashboard>,
              },
              {
                name: "another 2",
                path: "update-another2",
                element: <Create_Admin></Create_Admin>,
              },
            ],
          },
        ],
      },
    ],
  },
];

// type TAdmin_Routes = {
//   path: string;
//   element: ReactNode;
// };

// type TAdmin_Sidebar = {
//   key: string;
//   label: ReactNode;
//   children?: TAdmin_Sidebar[];
// };

// export const admin_route = admin_paths.reduce((acc: TAdmin_Routes[], item) => {
//   if (item.name && item.Element) {
//     acc.push({
//       path: item.path,
//       element: item.Element,
//     });
//   }
//   if (item.children) {
//     item?.children?.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.Element,
//       });
//     });
//   }

//   return acc;
// }, []);
// export const admin_sidebar = admin_paths.reduce(
//   (acc: TAdmin_Sidebar[], item) => {
//     if (item.name && item.Element) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item?.children?.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );

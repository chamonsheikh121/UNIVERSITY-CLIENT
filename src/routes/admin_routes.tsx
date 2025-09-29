import Create_student from "../pages/admin/Create_student";
import Dashboard from "../pages/admin/dashboard";
import Create_faculty from "../pages/admin/create_faculty";
import Create_Admin from "../pages/admin/Create_Admin";
import { type ReactNode } from "react";
import { NavLink } from "react-router-dom";

const admin_paths = [
  {
    name: "Dashboard",
    path: "admin",
    Element: <Dashboard></Dashboard>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        Element: <Create_student></Create_student>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        Element: <Create_faculty></Create_faculty>,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        Element: <Create_Admin></Create_Admin>,
      },
    ],
  },
];

type TAdmin_Routes = {
  path: string;
  element: ReactNode;
};

type TAdmin_Sidebar = {
  key: string;
  label: ReactNode;
  children?: TAdmin_Sidebar[];
};

export const admin_route = admin_paths.reduce((acc: TAdmin_Routes[], item) => {
  if (item.name && item.Element) {
    acc.push({
      path: item.path,
      element: item.Element,
    });
  }
  if (item.children) {
    item?.children?.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.Element,
      });
    });
  }

  return acc;
}, []);
export const admin_sidebar = admin_paths.reduce(
  (acc: TAdmin_Sidebar[], item) => {
    if (item.name && item.Element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item?.children?.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  },
  []
);

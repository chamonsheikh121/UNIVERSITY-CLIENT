import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { admin_paths } from "./admin_routes";
import Login from "../pages/Login";
import Dashboard from "./../pages/admin/Dashboard";
import routes_generator from "../utils/routes_generator";
import { faculty_paths } from "./faculty_routes";
import { student_paths } from "./student_routes";

const routes = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    children: routes_generator(admin_paths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routes_generator(faculty_paths),
  },
  {
    path: "/student",
    element: <App />,
    children: routes_generator(student_paths),
  },

  {
    path: "/login",
    element: <Login></Login>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default routes;

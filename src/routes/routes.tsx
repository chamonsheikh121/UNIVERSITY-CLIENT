import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/admin/dashboard";
import Login from "../pages/login";
import { admin_route } from "./admin_routes";


const routes = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    children: admin_route
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

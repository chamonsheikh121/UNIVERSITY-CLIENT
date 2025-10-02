import { Layout, Menu } from "antd";
import generate_dynamic_sidebar from "../../utils/generate_dynamic_sidebar";
import { admin_paths } from "../../routes/admin_routes";
import { faculty_paths } from "../../routes/faculty_routes";
import { student_paths } from "../../routes/student_routes";
import { useAppSelector } from "@/redux/hook";
import { current_user } from "@/redux/features/auth/auth_slice";

const { Sider } = Layout;

const SideBar = () => {
  const user = useAppSelector(current_user);

  const user_role = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };
  let sidebar_items;
  switch (user?.role) {
    case user_role.ADMIN:
      sidebar_items = generate_dynamic_sidebar(admin_paths, user_role.ADMIN);
      break;
    case user_role.FACULTY:
      sidebar_items = generate_dynamic_sidebar(
        faculty_paths,
        user_role.FACULTY
      );
      break;
    case user_role.STUDENT:
      sidebar_items = generate_dynamic_sidebar(
        student_paths,
        user_role.STUDENT
      );
      break;

    default:
      break;
  }

  return (
    <div>
      <Sider
        style={{ minHeight: "100vh", position: "sticky", top: "0", left: "0" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "10px 0px",
            color: "white",
            fontSize: "10px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PH UNIVERSITY</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebar_items}
        />
      </Sider>
    </div>
  );
};

export default SideBar;

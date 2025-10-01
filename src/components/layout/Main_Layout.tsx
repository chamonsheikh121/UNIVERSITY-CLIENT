import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Button } from "antd";
import { useAppDispatch } from "./../../redux/hook";
import { logout } from "@/redux/features/auth/auth_slice";
const { Header, Content } = Layout;

const Main_Layout = () => {
  const dispatch = useAppDispatch();

  const handle_logout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Layout style={{ minHeight: "100% " }}>
        <SideBar></SideBar>
        <Layout>
          <Header style={{ padding: 0 }}>
            <Button onClick={handle_logout}>logout</Button>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>
          
        </Layout>
      </Layout>
    </div>
  );
};

export default Main_Layout;

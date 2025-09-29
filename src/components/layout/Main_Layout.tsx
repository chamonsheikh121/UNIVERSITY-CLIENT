import { Layout} from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
const { Header, Content, Footer } = Layout;



const Main_Layout = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
       <SideBar></SideBar>
        <Layout>
          <Header style={{ padding: 0 }} />
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
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Main_Layout;

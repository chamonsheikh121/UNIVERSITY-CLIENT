import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { admin_sidebar } from "../../routes/admin_routes";
const { Header, Content, Footer, Sider } = Layout;


console.log(admin_sidebar)

const Main_Layout = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh"}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div style={{display:'flex', padding:'10px 0px', color:'white', fontSize:'10px', textAlign:'center', justifyContent:'center', alignItems:'center'}}>
            <h1>PH UNIVERSITY</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={admin_sidebar}
          />
        </Sider>
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

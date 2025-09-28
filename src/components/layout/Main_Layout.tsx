import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "1",
    label: "nav 1",
  },
  {
    key: "2",
    label: "nav 2",
  },
  {
    key: "3",
    label: "nav 3",
    children: [
      {
        key: "3-1",
        label: "option 1",
      },
      {
        key: "3-2",
        label: "option 2",
        children: [
          {
            key: "3-2-1",
            label: "option 1",
          },
        ],
      },
      {
        key: "3-3",
        label: "option 3",
      },
    ],
  },
  {
    key: "4",
    label: "nav 4",
  },
];

const Main_Layout = () => {
  return (
    <div>
      <Layout className="min-h-screen">
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
          <div style={{display:'flex', color:'white', fontSize:'10px', textAlign:'center', justifyContent:'center', alignItems:'center'}}>
            <h1>PH UNIVERSITY</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
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
              <h1>this is main layout</h1>
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

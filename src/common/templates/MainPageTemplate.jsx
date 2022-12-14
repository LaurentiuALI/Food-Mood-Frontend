import "./MainPageTemplate.less";
import { Content, Header } from "antd/lib/layout/layout";
import { Dropdown, Input, Layout, Menu, Typography } from "antd";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, useNavigate } from "react-router-dom";

const { Title } = Typography;

const MainPageTemplate = (props) => {
  const navigate = useNavigate();

  const onClick = ({ key }) => {
    if (key === "3") {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/", { replace: true });
    }
  };

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: <Link to={"/account-details"}>Account</Link>,
          key: "1",
          icon: (
            <Link to={"/account-details"}>
              <AccountCircleIcon className="dropdown-icon" />
            </Link>
          ),
        },
        {
          label: <Link to={"/account-preferences"}>Preferences</Link>,
          key: "2",
          icon: <SettingsIcon className="dropdown-icon" />,
        },
        {
          label: "Log out",
          key: "3",
          icon: <LogoutIcon className="dropdown-icon" />,
        },
      ]}
    />
  );

  return (
    <div>
      <Layout className="layout">
        <Header className="main-page-header">
          <div className="menu-bar-header">
            <div className="title-logo">
              <a href={"/home"}>
                {" "}
                <Title className="title-text">FOOD MOOD</Title>
              </a>
            </div>

            <div className="search-box">
              <Input
                size="small"
                placeholder="Search"
                suffix={<SearchOutlined />}
                style={{ width: "25rem" }}
              />
            </div>

            <div className="menu-buttons">
              <Link to={"/shopping-cart"}>
                <ShoppingCartOutlined className="shopping-cart-icon" />
              </Link>

              <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                  <AccountCircleIcon className="user-account-icon" />
                </a>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <div className="site-layout-content">{props.children}</div>
        </Content>
      </Layout>
    </div>
  );
};

export default MainPageTemplate;

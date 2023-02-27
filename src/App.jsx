import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    InfoCircleOutlined,
    HomeOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Button, Dropdown } from 'antd';
import { Link } from "react-router-dom";

import "./index.css"
import Logo from "./public/Mapup.png";
import FullLogo from "./public/Mapup-full.png";
import OSM from './components/osm';

const { Header, Sider: Slider, Content, Footer } = Layout;

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items = [
        {
          key: '1',
          label: (
            <span onClick={() => setLoggedIn(false)}>
              Log out
            </span>
          ),
        }]
    return (
      <div className='app'>
        <Layout>
            <Slider trigger={null} collapsible collapsed={collapsed}>
                <Link to="/">
                    <img src={collapsed ? Logo : FullLogo} className="logo" />
                </Link>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '3',
                            icon: <InfoCircleOutlined />,
                            label: 'About Us',
                        },
                    ]}
                />
            </Slider>
            <Layout className="site-layout">
                <Header style={{ background: colorBgContainer, paddingLeft: 0 }} className="header">
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <section>
                        {loggedIn ? <Dropdown menu={{items}} placement="bottomLeft">
                            <Button>
                                <UserOutlined /> Umesh Malik
                            </Button>
                        </Dropdown>
                            :
                            <Button onClick={() => setLoggedIn(true)}>
                                Log in
                            </Button>
                        }
                    </section>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <OSM />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Copyright © 2023 MapUp</Footer>
            </Layout>
        </Layout>
      </div>
    );
};

export default App;

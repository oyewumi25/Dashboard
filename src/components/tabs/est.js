import React, { Component, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TableOutlined,
  HomeOutlined,
  ShoppingOutlined,
  SwitcherOutlined,
} from '@ant-design/icons';
import { Card } from 'antd';
import { Col, Divider, Row, Button, Statistic, Layout, Menu, Breadcrumb, Progress } from 'antd';

import "../Style.css"
import 'antd/dist/antd.css'

import graphe from '../assets/graphe.png';
import bandeo from '../assets/bandeo.png';
import Anneaux from '../assets/Anneaux.png';
import { listMenu } from './listMenu';
import { Link,Route } from "react-router-dom"
const { Header, Sider, Content } = Layout;
const { Meta } = Card;

const style = {
  background: '',
  padding: '',
  height: ''
};

const Test = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      {/* <Button type="primary" style={{float:"left"}}>Connect</Button> */}
      <Sider trigger={null} collapsible collapsed={collapsed}>

        <div style={{ height: "" }} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
        >
          {listMenu.map((item, index) => (
            <Menu.Item key={index} icon={item.icon}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">

        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })} */}
        </Header>

        <Content className="site-layout-background" >

          { listMenu.map((index, item) => (
            <Route exact key={index} path={item.path} component={item.component} />
          )
          )
          }
        </Content>
      </Layout>
    </Layout>

  );
};

export default Test;





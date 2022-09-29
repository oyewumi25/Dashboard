import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { listMenu } from "./listMenu";
import { Link, Route } from "react-router-dom";
import { Button } from 'antd';
import { sessionHandler } from "../store/sessionStore";
import {  PoweroffOutlined } from '@ant-design/icons';
import {  removeUserData } from "../store/actions";
import { connect } from "react-redux";

import "../Style.css"
import 'antd/dist/antd.css'

const { Sider, Header, Content, Footer } = Layout;

class Home extends Component {
  render() { 
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <div style={{ height: 100 }}></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
            {listMenu.map((item, index) => (
              <Menu.Item key={index} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Link 
            to="/"
            style={{textdecoration:"none",color:"white"}}
            onClick={async()=>{
              await this.props.deleteData();
              return sessionHandler("auth_token",null,"remove");
            }}
            >  
            < PoweroffOutlined 
            style={{height:"100%",width:"100",float:"right",color:"white",marginTop:40,marginLeft:"20"}}
            />
            </Link> 
            <Menu theme="dark" mode="horizontal" />
          </Header>

          <Content className="site-layout-background">
              {listMenu.map((item, index) => (
                <Route exact key={index} path={item.path} component={item.component} />
              ))}
          </Content>
          <Footer style={{ textAlign: "center" }}>Powered by Xearth </Footer>
        </Layout>
      </Layout>
      <div></div>
    </div>
  );
  };
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchStoreToProps = (dispatch) => {
  return {
    deleteData: (data) => {
      dispatch( removeUserData (data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Home);




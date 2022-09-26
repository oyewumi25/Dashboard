// import {
//     MenuFoldOutlined,
//     MenuUnfoldOutlined,

// } from '@ant-design/icons';
// import { Layout, Menu } from 'antd'
// import React, { useState } from 'react'
// import { listMenu } from "./listMenu"
// import { Link, Route } from 'react-router-dom';F




// import "../Style.css"
// import 'antd/dist/antd.css'

// const { Header, Sider, Content } = Layout;


// const First = () => {
//     const [collapsed, setCollapsed] = useState(false);

//     return (
       
//             <Layout >


//                 <Sider trigger={null} collapsible collapsed={collapsed}>
//                     <div style={{  minHeight: "100vh" }}/>
//                     <Menu
//                         theme="dark"
//                         mode="inline"
//                         defaultSelectedKeys={["0"]}
//                     >

//                         {listMenu.map((item, index) => (
//                             <Menu.Item key={index} icon={item.icon}>
//                                 <Link to={item.path}>{item.label}</Link>
//                             </Menu.Item>
//                         ))}
//                     </Menu>
//                 </Sider>
//                 <Layout className="site-layout" >
//                     <Header className="site-layout-background"
                        
//                     >
//                         {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                             className: 'trigger',
//                             onClick: () => setCollapsed(!collapsed),
//                         })}
//                         <Menu theme="dark" mode="horizontal" />
//                     </Header>
//                     <Content className="site-layout-background"
//                      style={{
//                             margin: '24px 16px',
//                             padding: 24,
//                             minHeight: 280,
//                         }}
   
//                     >



//                         {listMenu.map((index, item) => (
//                             <Route exact key={index} path={item.path} component={item.component} />
//                         ))}
//                     </Content>
//                 </Layout>
//             </Layout>
       
//     )
// }

// export default First



// import React, { Component, useState } from 'react';
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
  
// } from '@ant-design/icons';
// import { Card } from 'antd';
// import {  Layout, Menu} from 'antd';
// import { listMenu } from './listMenu';

// import "../Style.css"
// import 'antd/dist/antd.css'


// import { Link,Route } from "react-router-dom"
// const { Header, Sider, Content } = Layout;
// const { Meta } = Card;



// const First = () => {
//   const [collapsed, setCollapsed] = useState(false);
// //   return (
//     <div>
//     <Layout style={{ minHeight: "100vh" }}>
//       {/* <Button type="primary" style={{float:"left"}}>Connect</Button> */}
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//       <div style={{ height: 100 }}></div>
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={["0"]}
//         >
//           {listMenu.map((item, index) => (
//             <Menu.Item key={index} icon={item.icon}>
//               <Link to={item.path}>{item.label}</Link>
//             </Menu.Item>
//           ))}
//         </Menu>
//       </Sider>
//       <Layout className="site-layout">

//         <Header
//           className="site-layout-background"
          
//         >
          // {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          //   className: 'trigger',
          //   onClick: () => setCollapsed(!collapsed),
          // })}

//           <Menu  theme="dark" mode="horizontal" />
          
//         </Header>

//         <Content className="site-layout-background" 
        
      //   style={{
      //     margin: '24px 16px',
      //     padding: 24,
      //     minHeight: 280,
      // }}

//         >

          // { listMenu.map((item, index) => (
          //   <Route exact key={index} path={item.path} component={item.component} />

//           )
//           )
//           }
//         </Content>
//       </Layout>
//     </Layout>
//     </div>
//   );
// };

// export default First;V







import {React,useState} from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  
} from '@ant-design/icons';
import { Layout, Menu } from "antd";
import { listMenu } from "./listMenu";
import { Link, Route } from "react-router-dom";


const { Sider, Header, Content } = Layout;

const First = () => {
  const [collapsed, setCollapsed] = useState(false);
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
          <Header className="header"          >

{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
            <Menu theme="dark" mode="horizontal" />
          </Header>

          <Content className="site-layout-background" 
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
        }}
          
          >
            { listMenu.map((item, index) => (
            <Route exact key={index} path={item.path} component={item.component} />

             
              ))}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default First;














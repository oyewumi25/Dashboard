

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { Input, Space,Button,Alert, notification} from 'antd';
import React from 'react';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description:'Renseignez les champs svp!',
   
  });
};
   
const User = () => (

  <Space direction="vertical"style={{backgroundColor:"",width:""}}>

<Button onClick={() => openNotificationWithIcon('success')}>Success</Button>


    
    {/* <UserOutlined style={{color:"blue",height:"150%",marginLeft:"240%"}}/> */}


  
    <Input size="large" placeholder="Username" 
         style={{marginLeft:"210%",width:"150%",marginTop:"90%",backgroundColor:""}} prefix={<UserOutlined />} />
    <Input.Password size="large"
      placeholder="Password"
      style={{marginLeft:"210%",width:"150%",marginTop:"8%",backgroundColor:""}}
      prefix={ <LockOutlined />}
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
      
        <Button type="primary" style={{marginLeft:"210%",width:"150%"}}>Connect</Button>

        </Space> 

  
  
);


export default User;


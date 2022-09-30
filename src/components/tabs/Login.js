
import React, { Component } from "react";
import { Card, Input, Space} from "antd";
import { DisplayButton } from "../librairy/Button";
import { validatorConnect } from "../functions/validator-connect";
import { sessionHandler } from "../functions/sessionStore";
import { openNotification }from "../functions/notification";
import { keyCredential, token } from "../constants/credential";
import { addUserData } from "../store/actions";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";

class Login extends Component {
  state = {
    email: "email",
    password: "password",
    alert: false,
    alertText: "Renseignez les champs svp!",
    alertType: "warning",

  };

  closeAlert = () => {
    return this.setState({
      alert: false
    });
  };

  handleConnect = async () => {
    const { email, password } = this.state;

    if (!validatorConnect(email, password)) {
      return openNotification ("warning", "email ou mot de passe incorrect")    
    
    }
    
    await this.props.saveData({
      email: email,
      password: password,
      token: token
    });

    await sessionHandler("auth_token", keyCredential, "set");
    this.setState({
      alert: true,
      alertType: "success",
      alertText: "Vous êtes connecté",
    });
  };
  render() {
    const { alert, alertText, alertType } = this.state;

    if (
      sessionHandler("auth_token", null, "get") &&
      sessionHandler("auth_token", null, "get").length !== 0
    ) {
      return <Redirect to="/user" />;
    }
    return (
      <div className="site-card-border-less-wrapper">

      
        <Card
          bordered={true}
          style={{
            width: "35%",
            backgroundColor: " #4169E1",
            marginLeft: "35%",
            marginTop: "10%",
          }}
        >
          <Space direction="vertical" >
            <Input
              size="large"
              placeholder="email"
              name="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              suffix={<UserOutlined style={{ color: "gray" }} />}
              style={{ width: "100%", marginLeft: "40%" }}
            />
            <Input.Password
              placeholder="password"
              size="large"
              name="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              style={{ width: "100%", marginLeft: "40%" }}
            />

            <DisplayButton
              type="primary"
              disabled={false}
              text={"Connect"}
              onPress={() => this.handleConnect()}
              style={{ width: "100%", height: 50, marginLeft: "40%", paddingTop: "6px" }}
            />
          </Space>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchStoreToProps = (dispatch) => {
  return {
    saveData: (data) => {
      dispatch(addUserData(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Login);






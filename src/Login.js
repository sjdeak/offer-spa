import {Button, Checkbox, DatePicker, Form, Icon, Input, Layout, Menu, Radio, Select, Spin} from "antd";
import "antd/dist/antd.css";
import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {client} from "./Client";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const RangePicker = DatePicker.RangePicker;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;
const ButtonGroup = Button.Group;

class RawLogin extends Component {
  sl;
  state = {
    loginInProgress: false, // 登陆过程中
    shouldRedirect: false // 登陆完成
  };

  redirectPath = () => {
    return "/resume/basic";
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log(this.state);
      if (!err && values.username === "admin" && values.password === "admin") {
        console.log("Received values of form: ", values);
        // dispath action into redux store...
        this.performLogin();
      }
    });
  };

  performLogin = () => {
    this.setState({ loginInProgress: true });
    setTimeout(() => {
      client.login();
      this.setState({ shouldRedirect: true });
    }, 1300);
  };

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to={this.redirectPath()} />;
    } else {
      const { getFieldDecorator } = this.props.form;

      return (
        <div
          style={{
            width: "450px",
            margin: "0 auto",
            marginTop: "100px",
            borderRadius: "5px",
            background: "#fff",
            padding: "30px"
          }}
        >
          <Spin spinning={this.state.loginInProgress} size="large">
            <Form
              onSubmit={this.handleSubmit}
              className="login-form"
              style={{
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  color: "#666666",
                  fontWeight: "300"
                }}
              >
                登陆
              </h1>

              <div>
                <FormItem>
                  {getFieldDecorator("username", {
                    rules: [{ required: true, message: "请输入账号" }],
                    initialValue: "admin"
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="账号"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("password", {
                    rules: [{ required: true, message: "请输入密码" }],
                    initialValue: "admin"
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="密码"
                    />
                  )}
                </FormItem>
                <p>用户名admin</p>
                <p>密码admin</p>
              </div>

              <Button
                type="primary"
                htmlType="submit"
                block
                className="login-form-button"
              >
                确定
              </Button>
            </Form>
          </Spin>
        </div>
      );
    }
  }
}

export const Login = Form.create()(RawLogin);

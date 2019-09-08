import {Button, Icon, Layout, Menu, Modal, Row} from "antd";
import React, {Component} from "react";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import "./App.css";
import {client} from "./Client";
import {
  BasicFormContainer,
  ExperienceSectionContainer,
  ResumeShowContainer,
  SelfIntroContainer,
  SkillFormContainer
} from "./Containers/FormContainer";
import {Login} from "./Login";
import {LoginRoute, PrivateRoute} from "./PrivateRoute";
import {ProjectShow} from "./Show";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/*<BasicForm/>*/}
//         {/*<SkillForm/>*/}
//         {/*<ExperienceForm/>*/}
//         {/*<ExperienceSection/>*/}
//         {/*<SelfIntro/>*/}
//         {/*<Show/>*/}
//         <Login/>
//       </div>
//     );
//   }
// }

class App extends Component {
  handleContactClick = () => {
    Modal.info({
      title: "联系方式",
      content: (
        <div>
          <br />
          <p>
            <b>手机:</b> 15927066787
          </p>
          <p>
            <b>Email:</b> sjdeak@yahoo.com
          </p>
          <p>
            <b>QQ:</b> 414797304
          </p>
          <p>
            <b>微信:</b> ComerSJ
          </p>
        </div>
      ),
      onOk() {}
    });
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header" style={{}}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{
                lineHeight: "64px",
                display: "flex",
                maxWidth: "1300px",
                margin: "0 auto"
              }}
            >
              <Menu.Item key="resume">
                <Link to={"/resume"}>简历系统</Link>
              </Menu.Item>
              <Menu.Item key="project-intro">
                <Link to={"/project-intro"}>项目介绍</Link>
              </Menu.Item>
              <Menu.Item key="3" onClick={this.handleContactClick}>
                联系我
              </Menu.Item>
              <Menu.Item key="4" style={{ marginLeft: "auto" }}>
                {client.isLoggedIn() ? (
                  <span>
                    <Icon type="user" />
                    admin
                  </span>
                ) : (
                  <Link to={"/login"}>登陆</Link>
                )}
              </Menu.Item>
            </Menu>
          </Header>

          <Switch>
            <Route
              exact
              path={"/"}
              render={() => <Redirect to={"/resume"} />}
            />

            {/*region PrivateRoute*/}
            <LoginRoute path={"/login"} component={Login} />
            <PrivateRoute path={"/resume"} component={MainContent} />
            <PrivateRoute path={"/show"} component={ResumeShowContainer} />
            {/*endregion*/}

            <Route path={"/project-intro"} component={ProjectShow} />
            <Route render={() => <Redirect to={"/404"} />} />
          </Switch>

          <Footer style={{ textAlign: "center" }}>
            简历管理模块 ©2018 Created by Jun Shen
          </Footer>
        </Layout>
      </div>
    );
  }
}

const MainContent = () => (
  <Content
    style={{
      padding: "50px 50px",
      display: "flex",
      justifyContent: "center"
    }}
  >
    <Layout
      style={{
        padding: "24px 0",
        background: "#fff",
        borderRadius: "5px",
        maxWidth: "1300px"
      }}
    >
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[window.location.pathname.slice(8)]}
          style={{ height: "500px" }}
        >
          <Menu.Item key="basic">
            <Link to={"/resume/basic"}>个人信息</Link>
          </Menu.Item>
          <Menu.Item key="skill">
            <Link to={"/resume/skill"}>技能</Link>
          </Menu.Item>
          <Menu.Item key="experience">
            <Link to={"/resume/experience"}>经历</Link>
          </Menu.Item>
          <Menu.Item key="self-intro">
            <Link to={"/resume/self-intro"}>个人描述</Link>
          </Menu.Item>
          <Row type="flex" justify={"center"} style={{ marginTop: "20px" }}>
            <Button style={{ margin: "0 auto" }}>
              <Link to={"/show"}>查看简历</Link>
            </Button>
          </Row>
        </Menu>
      </Sider>

      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <Route
          exact
          path={"/resume"}
          render={() => <Redirect to={"/resume/basic"} />}
        />
        <Route path={"/resume/basic"} component={BasicFormContainer} />
        <Route path={"/resume/skill"} component={SkillFormContainer} />
        <Route
          path={"/resume/experience"}
          component={ExperienceSectionContainer}
        />
        <Route path={"/resume/self-intro"} component={SelfIntroContainer} />
      </Content>
    </Layout>
  </Content>
);

export default App;

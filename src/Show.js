import React from "react";
import { Button, Layout, Row } from "antd";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { DIRECTIONS, TIME } from "./consts";
import { getLabel } from "./antd-utility";
import { projectIntroText } from "./texts";

const { Header, Content, Footer, Sider } = Layout;

const Show = props => {
  return (
    <Content
      style={{
        padding: "50px 50px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      {/*多这一次Layout主要是为了定宽和白色底*/}
      <Layout
        style={{
          padding: "24px 0",
          background: "#fff",
          borderRadius: "5px",
          maxWidth: "1300px"
        }}
      >
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <ReactMarkdown source={props.input} escapeHtml={false} />

          {/*容器底部居右*/}
          {/*<Row type="flex" justify={'end'}>*/}
          {/*<Link to={'/resume'}>*/}
          {/*<Button icon={'left'} shape="circle" type={'primary'} size={'large'}/>*/}
          {/*</Link>*/}
          {/*</Row>*/}

          {/*绝对定位 fixed*/}
          <Link
            to={"/resume"}
            style={{ position: "fixed", bottom: "150px", right: "100px" }}
          >
            <Button
              icon={"left"}
              shape="circle"
              type={"primary"}
              size={"large"}
            />
          </Link>

          {/*<Button icon={'left'} shape="circle" type={'primary'} size={'small'}/>*/}
          {/*<Button icon={'left'} shape="circle" type={'primary'} />*/}
          {/*<Button icon={'left'} shape="circle" type={'primary'} size={'large'}/>*/}
        </Content>
      </Layout>
    </Content>
  );
};

export const ResumeShow = props => {
  const { basic, skill, experience, self_intro } = props.storeValue;

  const input = `
# 个人信息
* ${basic.name} / ${basic.sex === "male" ? "男" : "女"} / ${basic.age}
* 所在城市
* 联系方式
  * 手机: ${basic.phone}
  * 邮箱: ${basic.mail}

# 技能
* 职业方向: ${DIRECTIONS[skill.direction].label}  工作经验: ${getLabel(
    TIME,
    skill.direction_time
  )}
* 期望从事的职位
${skill.positions_time
    .map(
      ({ position, time }) =>
        "  * " +
        getLabel(DIRECTIONS[skill.direction].positions, position) +
        "  " +
        "工作经验: " +
        time +
        "年"
    )
    .join("\n")}
* 职业技能: ${skill.skills.join(", ")}


# 教育经历
${experience.educationRecords
    .map(({ school, degree, major, duration }) =>
      `
* ${school}  ${degree}
  * 专业: ${major}
  * 时间: ${duration[0]} 至 ${duration[1]}
`.trim()
    )
    .join("\n")}


# 个人描述
${self_intro.content}
`.trim();

  return <Show input={input} />;
};

export const ProjectShow = props => {
  const input = projectIntroText;

  return <Show input={input} />;
};

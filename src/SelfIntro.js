import {Button, Row} from "antd";
import React from "react";
// import LzEditor from './Editor/index.js';
import LzEditor from "react-lz-editor";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlContent: `<h1>Yankees, Peeking at the Red Sox, Will Soon Get an Eyeful</h1>
                <p>Whenever Girardi stole a glance, there was rarely any good news for the Yankees. While Girardi’s charges were clawing their way to a split of their four-game series against the formidable Indians, the Boston Red Sox were plowing past the rebuilding Chicago White Sox, sweeping four games at Fenway Park.</p>`,
      markdownContent: "## HEAD 2 \n markdown examples \n ``` welcome ```",
      responseList: []
    };
    this.receiveHtml = this.receiveHtml.bind(this);
  }

  receiveHtml(content) {
    console.log("recieved HTML content", content);
    this.setState({ responseList: [] });
  }

  render() {
    let policy = "";
    const uploadProps = {
      action: "http://v0.api.upyun.com/devopee",
      onChange: this.onChange,
      listType: "picture",
      fileList: this.state.responseList,
      data: file => {},
      multiple: true,
      beforeUpload: this.beforeUpload,
      showUploadList: true
    };
    return (
      <div>
        <div>Editor demo 1 (use default html format ):</div>
        <LzEditor
          active={true}
          importContent={this.state.htmlContent}
          cbReceiver={this.receiveHtml}
          uploadProps={uploadProps}
          lang="en"
        />
        <br />
        <div>Editor demo 2 (use markdown format ):</div>
        <LzEditor
          active={true}
          importContent={this.state.markdownContent}
          cbReceiver={this.receiveHtml}
          image={false}
          video={false}
          audio={false}
          convertFormat="markdown"
        />
      </div>
    );
  }
}

export class SelfIntro extends React.Component {
  state = {
    importContent: this.props.storeValue.content
      ? this.props.storeValue.content
      : "请在此填写个人描述",
    content: ""
  };

  handleSubmit = () => {
    // SelfIntro用的Redux dispatch也是onFormSubmit，虽然意思有些混乱，但方便一点
    console.log("Before Dispatch SelfIntro", this.state.content);
    this.props.onFormSubmit("SUBMIT_SELF_INTRO", this.state.content);
  };

  receiveMarkdown = content => {
    console.log("recieved MD content", content);
    this.setState({ content: content });
  };

  insertTemplate = () => {
    //     const TEMPLATE = `<h2>个人简介</h2><p><br/></p>
    // <h2>技术经历和项目技术细节</h2><p><br/></p>
    // <h2>其他开源项目和个人作品</h2><p><br/></p>
    // <h2>理想团队</h2><p><br/></p>`;

    const TEMPLATE = `## 个人简介
## 技术经历和项目技术细节
## 其他开源项目和个人作品
## 理想团队
`;
    console.log(TEMPLATE);

    this.setState({
      importContent: TEMPLATE,
      content: TEMPLATE
    });
  };

  render() {
    return (
      <div>
        <LzEditor
          active={true}
          importContent={this.state.importContent}
          cbReceiver={this.receiveMarkdown}
          image={false}
          video={false}
          audio={false}
          convertFormat="markdown"
        />

        <Row
          type={"flex"}
          justify={"space-between"}
          style={{ marginTop: "15px" }}
        >
          <Button icon="plus" onClick={this.insertTemplate}>
            插入模板
          </Button>
          <Button type="primary" onClick={this.handleSubmit}>
            保存
          </Button>
        </Row>
      </div>
    );
  }
}

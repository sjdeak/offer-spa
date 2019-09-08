import {Button, Col, Divider, Icon, message, Modal, Row} from "antd";
import moment from "moment";
import React from "react";
import {ExperienceForm} from "./ExperienceForm";

const ButtonGroup = Button.Group;

const confirm = Modal.confirm;

export class ExperienceSection extends React.Component {
  // props是来自redux的state.experience
  state = {
    educationRecords: this.props.storeValue.educationRecords || [
      {
        school: "",
        degree: "本科",
        major: "",
        duration: ["2000-01", "2000-12"],
        id: 0
      }
    ]
  };

  handleFormEdit = values => {
    const i = this.state.educationRecords.findIndex(r => r.id === values.id);
    this.setState(
      {
        educationRecords: [
          ...this.state.educationRecords.slice(0, i),
          values,
          ...this.state.educationRecords.slice(i + 1)
        ]
      },
      () => {
        this.props.onExperienceChange(
          "SUBMIT_EXPERIENCE",
          this.state.educationRecords
        );
        message.success("修改成功");
      }
    );
  };

  handleFormAdd = values => {
    this.setState(
      (prevState, props) => {
        return {
          educationRecords: prevState.educationRecords.concat({
            ...values,
            id: prevState.educationRecords.length
          })
        };
      },
      () => {
        this.props.onExperienceChange(
          "SUBMIT_EXPERIENCE",
          this.state.educationRecords
        );
        message.success("添加成功");
      }
    );
  };

  handleDeleteClick = id => {
    confirm({
      title: "确定删除此条记录?",
      content: "该操作不可复原",
      onOk: () => {
        this.deleteRecord(id);
      },
      onCancel() {}
    });
  };

  deleteRecord = id => {
    const newRecords = this.state.educationRecords.filter(t => t.id !== id);
    this.setState({ educationRecords: newRecords });
    this.props.onExperienceChange("SUBMIT_EXPERIENCE", newRecords);
    message.success("删除成功");
  };

  render() {
    return (
      <div>
        {this.state.educationRecords.map(r => (
          <EditableRecord
            id={r.id}
            key={r.id}
            school={r.school}
            degree={r.degree}
            major={r.major}
            duration={r.duration}
            onFormSubmit={this.handleFormEdit}
            onDeleteClick={this.handleDeleteClick}
          />
        ))}

        <ToggleableExperienceForm onFormSubmit={this.handleFormAdd} />
      </div>
    );
  }
}

class EditableRecord extends React.Component {
  state = {
    editFormOpen: false
  };

  handleFormOpen = () => {
    this.setState({ editFormOpen: true });
  };

  handleFormClose = () => {
    this.setState({ editFormOpen: false });
  };

  handleFormSubmit = record => {
    this.props.onFormSubmit(record);
    this.setState({ editFormOpen: false });
  };

  handleDeleteClick = id => {
    this.props.onDeleteClick(id);
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <ExperienceForm
          school={this.props.school}
          degree={this.props.degree}
          major={this.props.major}
          id={this.props.id}
          duration={this.props.duration}
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <div>
          <Divider>{this.props.degree}</Divider>
          <Row type="flex" align={"middle"}>
            <Col span={20}>
              <Row type="flex" align={"top"}>
                <Col span={2}>
                  <Icon type="book" style={{ fontSize: 20 }} />
                  {/*style={{ fontSize: 32 }}*/}
                </Col>
                <Col span={18}>
                  <p>{this.props.school}</p>
                  <p>{this.props.major}</p>
                  <p>
                    {moment(this.props.duration[0], "YYYY-MM").format(
                      "YYYY年MM月"
                    )}{" "}
                    ~&nbsp;
                    {moment(this.props.duration[1], "YYYY-MM").format(
                      "YYYY年MM月"
                    )}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col span={4}>
              <ButtonGroup>
                <Button
                  type="danger"
                  icon="delete"
                  onClick={() => this.handleDeleteClick(this.props.id)}
                />
                <Button icon={"edit"} onClick={this.handleFormOpen} />
              </ButtonGroup>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

class ToggleableExperienceForm extends React.Component {
  state = {
    isOpen: false
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = record => {
    this.props.onFormSubmit(record);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <ExperienceForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Row type="flex" justify="center" style={{ marginTop: "25px" }}>
          <Col span={8}>
            <Button type="primary" block onClick={this.handleFormOpen}>
              新增
            </Button>
          </Col>
        </Row>
      );
    }
  }
}

import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select
} from "antd";
import moment from "moment";
import React from "react";

const RangePicker = DatePicker.RangePicker;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;
const ButtonGroup = Button.Group;

const DEGREE = [
  { label: "大专", value: "大专" },
  { label: "本科", value: "本科" },
  { label: "硕士", value: "硕士" },
  { label: "博士", value: "博士" }
];

const dateFormat = "YYYY-MM";

class RawExperienceForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      // todo 表单提交后发现values是undefined

      // console.log(arguments);

      if (!err) {
        let values = this.props.form.getFieldsValue();
        console.log("Received values of ExperienceForm: ", values);

        const rangeValue = values["duration"];
        values = {
          ...values,
          duration: [
            rangeValue[0].format("YYYY-MM"),
            rangeValue[1].format("YYYY-MM")
          ],
          id: this.props.id
        };
        console.log("moment格式转换后的values: ", values);
        this.props.onFormSubmit(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label={"学校名称:"}>
          {getFieldDecorator("school", {
            rules: [{ required: true, message: "请输入公司名称" }]
          })(<Input />)}
        </FormItem>

        <FormItem label={"学历:"}>
          {getFieldDecorator("degree", {
            rules: [{ required: true, message: "请选择学历" }]
          })(
            <Select>
              {DEGREE.map(({ label, value }) => (
                <Option value={value}>{label}</Option>
              ))}
            </Select>
          )}
        </FormItem>

        <FormItem label={"就读时间:"}>
          {getFieldDecorator("duration", {
            rules: [{ type: "array", required: true, message: "请选择时间" }]
          })(
            <RangePicker
              placeholder={["入学时间", "毕业时间"]}
              format="YYYY-MM"
            />
          )}
        </FormItem>

        <FormItem label={"专业:"}>
          {getFieldDecorator("major", {
            rules: [{ required: true, message: "请输入专业" }]
          })(<Input />)}
        </FormItem>

        <Row type="flex" justify="end">
          <ButtonGroup>
            <Button onClick={this.props.onFormClose}>取消</Button>
            <Button type={"primary"} htmlType="submit">
              保存
            </Button>
          </ButtonGroup>
        </Row>
      </Form>
    );
  }
}

export const ExperienceForm = Form.create({
  mapPropsToFields(props) {
    if (!props.school) return {};

    const { createFormField } = Form;

    return {
      school: createFormField({ value: props.school }),
      degree: createFormField({ value: props.degree }),
      duration: createFormField({
        value: [
          moment(props.duration[0], dateFormat),
          moment(props.duration[1], dateFormat)
        ]
      }),
      major: createFormField({ value: props.major })
    };
  }
})(RawExperienceForm);

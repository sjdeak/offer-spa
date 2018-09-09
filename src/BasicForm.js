import React from "react";
import { Upload, InputNumber, Form, Input, Tooltip,
  Icon, Cascader, Select, Row, Col, Checkbox, Radio, Button, AutoComplete, message } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const CITY = [
  {label: '杭州', value: 'hz'},
  {label: '北京', value: 'bj'},
  {label: '广州', value: 'gz'},
  {label: '上海', value: 'sh'},
  {label: '深圳', value: 'sz'},
];

class RawBasicForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log(this.state);
      if (!err) {
        console.log('BasicForm即将派发Action: ', values);
        this.props.onFormSubmit('SUBMIT_BASIC', values);
        message.success('保存成功');
      }
    });
  };

  validatePhone = (rule, value, callback) => {
    const phone = value;
    if (phone && phone.match(/^(13|15|18|19)/) && phone.length === 11)
      callback();
    else
      callback('请填写正确的11位手机号')
  };


  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        {/*<FormItem>*/}
          {/*<Upload name={'file'}>*/}
            {/*<Button>*/}
              {/*<Icon type="upload" /> 头像上传后将自动保存*/}
            {/*</Button>*/}
          {/*</Upload>*/}
        {/*</FormItem>*/}

        <FormItem label={'姓名'}>
          {
            getFieldDecorator('name', {
              rules: [
                {required: true, message: '请输入您的中文姓名'}
              ]
            })(<Input />)
          }
        </FormItem>

        <FormItem label={'性别'}>
          {getFieldDecorator('sex')(
            <RadioGroup>
              <Radio value={'male'}>男</Radio>
              <Radio value={'female'}>女</Radio>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem label={'年龄'}>
          {getFieldDecorator('age')(
            <InputNumber min={15} max={75} />
          )}
        </FormItem>

        <FormItem label={'当前所在城市'}>
          {
            getFieldDecorator('city')(
              <Select>
                {CITY.map(({label, value}) => (
                  <Option value={value}>{label}</Option>
                ))}
              </Select>
            )
          }
        </FormItem>

        <FormItem label={'手机号'}>
          {getFieldDecorator('phone', {
            rules: [
              { required: true, message: '请输入您的手机号' },
              { validator: this.validatePhone }
            ]
          })(<Input style={{ width: '100%' }} />)}
        </FormItem>

        <FormItem label={'联系邮箱'}>
          {getFieldDecorator('mail', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }]
          })(<Input />)}
        </FormItem>

        <Row type={'flex'} justify={'center'}>
          <Button type={'primary'} htmlType="submit">保存</Button>
        </Row>


      </Form>
    );
  }
}


export const BasicForm = Form.create({
  mapPropsToFields(props) {
    const { createFormField } = Form;

    return {
      name: createFormField({ value: props.storeValue.name }),
      age: createFormField({ value: props.storeValue.age }),
      sex: createFormField({ value: props.storeValue.sex }),
      city: createFormField({ value: props.storeValue.city }),
      phone: createFormField({ value: props.storeValue.phone }),
      mail: createFormField({ value: props.storeValue.mail }),
    };
  },
})(RawBasicForm);

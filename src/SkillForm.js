import {Button, Checkbox, Col, Form, Radio, Row, Select} from "antd"
import {message} from "antd/lib/index"
import React from "react"
import {DIRECTIONS, TIME} from "./consts"
import {SkillTags} from "./SkillTags"

const FormItem = Form.Item
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group
const Option = Select.Option

class RawSkillForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()

    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log("form submitted: ", this.state)
      if (!err) {
        console.log("SkillForm即将派发Action: ", values)
        this.props.onFormSubmit("SUBMIT_SKILL", values)
        message.success("保存成功")
      }
    })
  }

  handleSelectChange = value => {
    this.props.form.setFieldsValue({positions: []})
  }

  calculatePositionsCheckboxOptions = () => {
    console.log(
      "start calculatePositionsCheckboxOptions()",
      this.props.form.getFieldsValue()
    )
    const currentSelectedPositions = this.props.form.getFieldValue("positions")
    let rawOptions = Array.from(
      DIRECTIONS[this.props.form.getFieldValue("direction")].positions
    )

    if (currentSelectedPositions && currentSelectedPositions.length === 2) {
      rawOptions = rawOptions.map(o => {
        const res = Object.assign({}, o)
        if (currentSelectedPositions.indexOf(o.value) === -1)
          res.disabled = true
        return res
      })
    }

    console.log("calculating Positions results: ", rawOptions)
    return rawOptions
  }

  calculateRecommendation = () => {
    const currentSelectedPositions = this.props.form.getFieldValue("positions")
    console.log("calculateRecommendation", currentSelectedPositions)
    if (!currentSelectedPositions.length) return []

    // consts.js里目前选的职业方向下的所有职位
    const positions =
      DIRECTIONS[this.props.form.getFieldValue("direction")].positions

    return positions.find(
      p =>
        p.value ===
        currentSelectedPositions[currentSelectedPositions.length - 1]
    ).recommendation
  }

  handleKeyPress = e => {
    console.log("KeyPressing", e, e.keyCode)
    // return e.keyCode !== 0;
    return false
  }

  render() {
    const {getFieldDecorator} = this.props.form

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label={"职业方向"}>
          {getFieldDecorator("direction")(
            // 尝试手动监听onChange事件
            <Select onChange={this.handleSelectChange}>
              {Object.keys(DIRECTIONS).map(value => (
                <Option value={value}>{DIRECTIONS[value].label}</Option>
              ))}
            </Select>
          )}
        </FormItem>

        <FormItem label={"你在该职业方向上有多长时间的工作经验"}>
          {getFieldDecorator("direction_time", {
            rules: [{required: true, message: "请选择工作年数"}]
          })(
            <Select>
              {TIME.map(({label, value}) => (
                <Option value={value}>{label}</Option>
              ))}
            </Select>
          )}
        </FormItem>

        <FormItem label={"选择你期望从事的职位(最多选择两项)"}>
          {/*{console.log('calculateOptions!!', this.calculatePositionsCheckboxOptions())}*/}
          {getFieldDecorator("positions", {
            rules: [{required: true, message: "请选择职位!"}]
          })(
            <CheckboxGroup style={{width: "100%"}}>
              {/*options={this.calculatePositionsCheckboxOptions()}*/}
              <Row>
                {this.calculatePositionsCheckboxOptions().map(p => (
                  <Col span={6}>
                    <Checkbox
                      value={p.value}
                      disabled={p.disabled ? p.disabled : false}
                    >
                      {p.label}
                    </Checkbox>
                  </Col>
                ))}
              </Row>
            </CheckboxGroup>
          )}
        </FormItem>

        {this.props.form.getFieldValue("positions")
          ? this.props.form.getFieldValue("positions").map(positionValue => (
            <FormItem label={`你在${positionValue}上有多长时间的工作经验`}>
              {getFieldDecorator(positionValue, {
                initialValue: "0"
              })(
                <Select>
                  {TIME.map(({label, value}) => (
                    <Option value={value}>{label}</Option>
                  ))}
                </Select>
              )}
            </FormItem>
          ))
          : null}

        <FormItem label={"职业技能(按回车键添加)"}>
          {/*['ts1', 'ts2', 'ts3', 'ts4', 'ts5', 'ts6', 'ts7']*/}
          {/*this.calculateRecommendation()*/}
          {getFieldDecorator("skills")(
            <SkillTags recommendation={this.calculateRecommendation()}/>
          )}
        </FormItem>

        <Row type={"flex"} justify={"center"}>
          <Button htmlType="submit" disabled style={{display: "none"}}>
            Fake
          </Button>
          <Button type={"primary"} htmlType="submit">
            保存
          </Button>
        </Row>
      </Form>
    )
  }
}

let state = {
  direction: "...",
  direction_time: 3,
  positions: ["...", "..."],
  python: 1,
  cs: 2,
  positions_time: [
    {position: "python", time: 1},
    {position: "c#", time: 2}
  ],
  skills: ["...", "...", "..."] // 不需要value，只是技能名字符串的集合
}

export const SkillForm = Form.create({
  mapPropsToFields(props) {
    const {createFormField} = Form

    return {
      direction: createFormField({value: props.storeValue.direction}),
      direction_time: createFormField({
        value: props.storeValue.direction_time
      }),
      positions: createFormField({value: props.storeValue.positions}),
      positions_time: createFormField({
        value: props.storeValue.positions_time
      }),
      skills: createFormField({value: {tags: props.storeValue.skills}}) // 为了和自定义组件的数据格式一致而不得不加的
    }
  }
})(RawSkillForm)

import {Checkbox, Form, Input, Radio, Select, Tag} from "antd";
import PropTypes from "prop-types";
import React from "react";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;
const CheckableTag = Tag.CheckableTag;

export class SkillTags extends React.Component {
  static propTypes = {
    value: PropTypes.array,
    recommendation: PropTypes.string
  };

  inputComp;

  UNSAFE_componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    // if ('value' in nextProps) {
    //   const value = nextProps.value;
    //   this.setState(value);
    // }
  }

  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    this.props.onChange(Object.assign({}, changedValue));
  };

  handleTagClose = tag => {
    const newValue = this.props.value.tags.filter(tagName => tagName !== tag);
    this.triggerChange({ tags: newValue });
  };

  handlePressEnter = e => {
    if (!e.target.value) return;
    console.log("PressEnter", this.inputComp.input.value, this.inputComp);
    const newValue = this.props.value.tags.concat(this.inputComp.input.value);
    this.triggerChange({ tags: newValue });

    this.inputComp.input.value = "";
  };

  handleRecommendedTagClick = tag => {
    const newValue = this.props.value.tags.concat(tag);
    this.triggerChange({ tags: newValue });
  };

  render() {
    return (
      <div>
        <Input
          ref={comp => (this.inputComp = comp)}
          onPressEnter={this.handlePressEnter}
        />
        <RecommendedTags
          recommendation={this.props.recommendation}
          // recommendation={['ts1', 'ts2', 'ts3', 'ts4', 'ts5', 'ts6', 'ts7']}
          currentSelectedTags={this.props.value.tags}
          onClick={this.handleRecommendedTagClick}
          threshold={5}
        />
        <div>
          <h6>
            已选技能(
            {this.props.value.tags.length}
            /15)
          </h6>
          {console.log("SkillTags props now:", this.props, this.props.value)}
          {this.props.value.tags.map(tagName => {
            console.log("rendering 已选技能:", tagName);
            return (
              <Tag
                closable
                key={tagName}
                afterClose={() => this.handleTagClose(tagName)}
              >
                {tagName}
              </Tag>
            );
          })}
        </div>
      </div>
    );
  }
}

class RecommendedTags extends React.Component {
  calculateTagsToBeShown = () => {
    const res = [];
    const recommendation = this.props.recommendation;

    // console.log('recommendation', recommendation);
    // console.log('currentSelected', this.props.currentSelectedTags);

    for (let i = 0; i < recommendation.length; i++) {
      const now = recommendation[i];
      if (!this.props.currentSelectedTags.includes(now)) res.push(now);
      if (res.length === this.props.threshold) break;
    }
    console.log("recommended res: ", res);
    return res;
  };

  render() {
    return (
      <div>
        <h4 style={{ marginRight: 8, display: "inline" }}>建议选择:</h4>
        {this.calculateTagsToBeShown().map(tag => (
          <CheckableTag
            key={tag}
            onChange={() => {
              this.props.onClick(tag);
            }}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
    );
  }
}

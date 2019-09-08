import React from "react";
import {connect} from "react-redux";
import {BasicForm} from "../BasicForm";
import {ExperienceSection} from "../ExperienceSection";
import {SelfIntro} from "../SelfIntro";
import {ResumeShow} from "../Show";
import {SkillForm} from "../SkillForm";

const mapStateToPropsBasic = (state, ownProps) => ({
  storeValue: state.resume.basic
});
const mapStateToPropsSkill = (state, ownProps) => ({
  storeValue: state.resume.skill
});
const mapStateToPropsExperience = (state, ownProps) => ({
  storeValue: state.resume.experience
});
const mapStateToPropsSelfIntro = (state, ownProps) => ({
  storeValue: state.resume.self_intro
});
const mapStateToPropsResumeShow = (state, ownProps) => ({
  storeValue: state.resume
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFormSubmit: (type, values) =>
    dispatch({
      type: type,
      values: values
    })
});
const mapDispatchToPropsExperience = (dispatch, ownProps) => ({
  onExperienceChange: (type, values) =>
    dispatch({
      type: type,
      values: values
    })
});

const BasicFormContainer = connect(
  mapStateToPropsBasic,
  mapDispatchToProps
)(BasicForm);
const SkillFormContainer = connect(
  mapStateToPropsSkill,
  mapDispatchToProps
)(SkillForm);
const ExperienceSectionContainer = connect(
  mapStateToPropsExperience,
  mapDispatchToPropsExperience
)(ExperienceSection);
const SelfIntroContainer = connect(
  mapStateToPropsSelfIntro,
  mapDispatchToProps
)(SelfIntro);
const ResumeShowContainer = connect(
  mapStateToPropsResumeShow,
  mapDispatchToProps
)(ResumeShow);

export {
  BasicFormContainer,
  SkillFormContainer,
  ExperienceSectionContainer,
  SelfIntroContainer,
  ResumeShowContainer
};

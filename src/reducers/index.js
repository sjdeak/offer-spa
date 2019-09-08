import {combineReducers} from "redux";

const account = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
};

const resume = (
  state = {
    basic: {
      name: "沈骏",
      sex: "male",
      age: 18,
      city: "hz",
      phone: "15927066787",
      mail: "sjdeak@yahoo.com"
    },
    skill: {
      direction: "tech",
      direction_time: 3,
      positions: ["python"],
      positions_time: [{ position: "python", time: 1 }],
      skills: ["Flask"] // 不需要value，只是技能名字符串的集合
    },
    experience: {
      educationRecords: [
        // Experience以后还会增加工作经历、项目经历
        {
          school: "华中科技大学",
          degree: "硕士",
          major: "软件工程",
          duration: ["2017-09", "2020-03"],
          id: 0
        },
        {
          school: "宁波大学",
          degree: "本科",
          major: "数学与应用数学",
          duration: ["2013-09", "2017-06"],
          id: 1
        }
      ]
    },
    self_intro: {
      content: "寻找实习中"
    }
  },
  action
) => {
  console.log("resumeReducer", action.type, action.values);
  switch (action.type) {
    case "SUBMIT_BASIC":
      return Object.assign(state, { basic: action.values });
    case "SUBMIT_SKILL":
      const newObj = Object.assign({}, action.values, {
        skills: action.values.skills.tags
      });
      return Object.assign(state, { skill: newObj });
    case "SUBMIT_EXPERIENCE":
      return Object.assign(state, {
        experience: { educationRecords: action.values }
      });
    case "SUBMIT_SELF_INTRO":
      return Object.assign(state, { self_intro: { content: action.values } });
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  account,
  resume
});

// const basic = (state = [], action) => {
//   switch (action.type) {
//     case 'SUBMIT_BASIC':
//       return Object.assign(state, action.values);
//     default:
//       return state
//   }
// };
// const skill = (state = [], action) => {
//   switch (action.type) {
//     case 'SUBMIT_SKILL':
//       return Object.assign(state, action.values);
//     default:
//       return state
//   }
// };
// const experience = (state = [], action) => {
//   switch (action.type) {
//     case 'SUBMIT_EXPERIENCE':
//       return Object.assign(state, action.values);
//     default:
//       return state
//   }
// };
// const self_intro = (state = [], action) => {
//   switch (action.type) {
//     case 'SUBMIT_SELF_INTRO':
//       return Object.assign(state, action.values);
//     default:
//       return state
//   }
// };

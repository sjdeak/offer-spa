import imgDirection from './img/direction.png';
import imgExperience from './img/experience.png';
import imgPositions from './img/positions.png';
import imgSkillTag from './img/skillTag.png';

const resumeTemplate = `
# 个人信息
* 沈骏 / 男 / 年龄
* 所在城市
* 联系方式
  * 手机: 
  * 邮箱: 

# 技能
* 职业方向  工作经验
* 期望从事的职位
	* 职位一
* 职业技能: 

# 教育经历
* 华中科技大学 / 硕士 / 软件工程 / 2017 - 2020年3月(预计)
* 宁波大学 / 本科 / 数学与应用数学 / 2013 - 2017


# 个人描述


`;

// <a href="http://www.100offer.com/" target="_blank">100Offer</a>

export const projectIntroText = `
# 起源
18年初的软件实训课上，我所在的小组做了一个仿照[100Offer](http://www.100offer.com/)的招聘网站，其中我负责用户简历模块的前端部分，因为初接触前端，只是用Bootstrap和HTML、CSS、JS完成了静态页面，并配合后端的要求做适当修改

课程结束后，随着接触React框架，我把原来的静态页面改造成带路由的单页应用，并用Redux做状态管理，组件库也从Bootstrap换成了ant-design(antd)

# 项目特点
## 自定义组件
* 用户技能标签添加组件
  * 推荐技能列表会根据用户已选择的技能自动过滤
  * 经过适配，能在antd的表单系统里和官方提供的组件一样地使用，也能接上Redux

![](${imgSkillTag})

* 教育经历填写组件
  * 能实现教育经历记录的增删改

![](${imgExperience})

## 表单
* 能用ant-design内置表单校验的字段全部用了内置的\`<Form.Item>\`验证器
* 对用户手机号格式进行自定义校验
* 库提供的\`<Checkbox.Group>\`内置没有选中项数目限制，故添加了自定义校验，当用户选择的职位超过两项时自动禁用多选框

![](${imgPositions})

* 技能填写页是一个两阶段表单，根据职业方向\`<Select>\`的结果，职位选项会变化
* 用户选中了的职位选项后，会自动生成新的表单项(您在该职位上有多久的经验)

![](${imgDirection})

## 状态管理
* 使用了Redux，路由跳转后表单数据不会丢失
  * 但还没有把localStorage和Redux同步，网页刷新后数据还是会消失
* 登陆状态保存在localStorage中
* Container Component通过react-redux生成

## 前端路由
* 非法URL不会加载内容
* 访问/resume目录时，会判断登陆情况，若未登录则跳转回登录页

## 其他
* 脚手架工具: 官方的create-react-app
* CSS: 使用了弹性盒布局，以及antd的栅格系统

`;



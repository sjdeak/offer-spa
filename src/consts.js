const DIRECTIONS = {
  tech: {
    label: '技术',
    positions: [
      {value: 'cs', label: '.Net工程师',
        recommendation: ['C#','ASP.NET', 'VB.NET', 'WPF', 'LINQ']},
      {value: 'python', label: 'Python工程师',
        recommendation: ['Git', 'MongoDB', 'Django', 'Redis', 'Github']},
      {value: 'android',  label: 'Android工程师',
        recommendation: ['Android Studio', 'Kotlin', 'JNI/NDK', 'React Native', 'Weex']},
      {value: 'dba', label: 'DBA',
        recommendation: ['Git', 'MongoDB', 'Django', 'Redis', 'Memcached']},
      {value: 'fullstack', label: '全栈工程师',
        recommendation: ['JavaScript', 'HTML', 'CSS', 'Vue.js', 'React']},
      {value: 'ios', label: 'iOS工程师',
        recommendation: ['Objective-C', 'Swift', 'Xcode', 'Git', 'MongoDB']},
      {value: 'safe', label: '安全工程师',
        recommendation: ['Git', 'MongoDB', 'Django', 'Redis', 'Memcached']},
      {value: 'go', label: 'Go工程师',
        recommendation: ['Git', 'MongoDB', 'Django', 'Redis', 'Memcached']},
      {value: 'scala', label: 'Scala工程师',
        recommendation: ['Git', 'MongoDB', 'Django', 'Redis', 'Memcached']},
      {value: 'ruby', label: 'Ruby工程师',
        recommendation: ['Ruby on Rails', 'Rails', 'Sass', 'Less', 'Git']},
      {value: 'js', label: 'Node.js工程师',
        recommendation: ['Git', 'MongoDB', 'Django', 'Redis', 'Memcached']},
      {value: 'fe', label: '前端工程师',
        recommendation: ['JavaScript', 'HTML', 'CSS', 'Vue.js', 'React']},
      {value: 'test', label: '测试工程师',
        recommendation: ['自动化测试', '功能测试', '性能测试', '白盒测试', '黑盒测试']},
    ]
  },
  product: {
    label: '产品',
    positions: [
      {value: 'pm', label: '产品经理',
        recommendation: ['Axure', 'Xmind', 'MindManager', 'Visio', '交互设计']},
      {value: 'pa', label: '产品助理',
        recommendation: ['Axure', 'Xmind', 'MindManager', 'Visio', '交互设计']},
      {value: 'director', label: '产品总监',
        recommendation: ['Axure', 'Xmind', 'MindManager', 'Visio', '交互设计']},
    ]
  },
  design: {
    label: '设计',
    positions: [
      {value: 'brand', label: '品牌/平面设计师',
        recommendation: ['Photoshop', 'Sketch', 'Adobe Illustrator', 'Adobe After Effects', 'InDesign']},
      {value: 'ui', label: 'UI设计师',
        recommendation: ['Photoshop', 'Sketch', 'Adobe Illustrator', 'Adobe After Effects', 'InDesign']},
      {value: 'visual', label: '视觉设计师',
        recommendation: ['Photoshop', 'Sketch', 'Adobe Illustrator', 'Adobe After Effects', 'InDesign']},
      {value: 'ue', label: 'UE设计师',
        recommendation: ['Photoshop', 'Sketch', 'Adobe Illustrator', 'Adobe After Effects', 'InDesign']},
      {value: 'researcher', label: '用户研究员',
        recommendation: ['Photoshop', 'Sketch', 'Adobe Illustrator', 'Adobe After Effects', 'InDesign']},
    ]
  },
  operate: {
    label: '运营',
    positions: [
      {value: 'editor', label: '编辑/文案',
        recommendation: ['策划', 'App运营', '内容运营', '品牌运营', '新媒体运营']},
      {value: 'pe', label: '产品运营',
        recommendation: ['App运营', '内容运营', '品牌运营', '新媒体运营', '活动策划']},
      {value: 'media', label: '新媒体运营',
        recommendation: ['App运营', '内容运营', '品牌运营', '新媒体运营', '活动策划']},
    ]
  },
};

const TIME = [
  {label: '一年以内', value: '0'},
  {label: '一年', value: '1'},
  {label: '两年', value: '2'},
  {label: '三年', value: '3'},
  {label: '四年', value: '4'},
  {label: '五年', value: '5'},
  {label: '五年以上', value: '6'}
];

export {DIRECTIONS, TIME};
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1210:function(e,t,a){"use strict";a.r(t);a(327);var n=a(1),r=a.n(n),o=a(7),l=a.n(o),i=a(101),c=a(1251),s=a(137),u=a(35),m=a(36),p=a(42),d=a(40),h=a(43),f=a(1246),g=a(1240),b=a(1247),E=a(30),v=a(1237),y=a(209),j=a(1241),O=a(1253),S=a(1252),k=a(1249),C=(a(532),new(function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,[{key:"isLoggedIn",value:function(){return"true"===localStorage.getItem("loggedIn")}},{key:"login",value:function(){localStorage.setItem("loggedIn","true")}},{key:"logout",value:function(){localStorage.setItem("loggedIn","false")}}]),e}())),x=a(1244),F=a(1248),I=a(1234),R=a(1235),M=a(1245),A=a(1236),T=x.a.Item,w=F.a.Group,V=I.a.Option,D=[{label:"\u676d\u5dde",value:"hz"},{label:"\u5317\u4eac",value:"bj"},{label:"\u5e7f\u5dde",value:"gz"},{label:"\u4e0a\u6d77",value:"sh"},{label:"\u6df1\u5733",value:"sz"}],P=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){console.log(a.state),e||(console.log("BasicForm\u5373\u5c06\u6d3e\u53d1Action: ",t),a.props.onFormSubmit("SUBMIT_BASIC",t),R.a.success("\u4fdd\u5b58\u6210\u529f"))})},a.validatePhone=function(e,t,a){var n=t;n&&n.match(/^(13|15|18|19)/)&&11===n.length?a():a("\u8bf7\u586b\u5199\u6b63\u786e\u768411\u4f4d\u624b\u673a\u53f7")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(x.a,{onSubmit:this.handleSubmit},r.a.createElement(T,{label:"\u59d3\u540d"},e("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u4e2d\u6587\u59d3\u540d"}]})(r.a.createElement(M.a,null))),r.a.createElement(T,{label:"\u6027\u522b"},e("sex")(r.a.createElement(w,null,r.a.createElement(F.a,{value:"male"},"\u7537"),r.a.createElement(F.a,{value:"female"},"\u5973")))),r.a.createElement(T,{label:"\u5e74\u9f84"},e("age")(r.a.createElement(A.a,{min:15,max:75}))),r.a.createElement(T,{label:"\u5f53\u524d\u6240\u5728\u57ce\u5e02"},e("city")(r.a.createElement(I.a,null,D.map(function(e){var t=e.label,a=e.value;return r.a.createElement(V,{value:a},t)})))),r.a.createElement(T,{label:"\u624b\u673a\u53f7"},e("phone",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7"},{validator:this.validatePhone}]})(r.a.createElement(M.a,{style:{width:"100%"}}))),r.a.createElement(T,{label:"\u8054\u7cfb\u90ae\u7bb1"},e("mail",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(M.a,null))),r.a.createElement(v.a,{type:"flex",justify:"center"},r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58")))}}]),t}(r.a.Component),Y=x.a.create({mapPropsToFields:function(e){var t=x.a.createFormField;return{name:t({value:e.storeValue.name}),age:t({value:e.storeValue.age}),sex:t({value:e.storeValue.sex}),city:t({value:e.storeValue.city}),phone:t({value:e.storeValue.phone}),mail:t({value:e.storeValue.mail})}}})(P),B=a(226),_=a(324),G=a(1238),L=a(1239),N=a(14),U=a.n(N),q=a(1243),H=a(1250),z=q.a.RangePicker,J=x.a.Item,K=(F.a.Group,H.a.Group,I.a.Option),X=y.a.Group,W=[{label:"\u5927\u4e13",value:"\u5927\u4e13"},{label:"\u672c\u79d1",value:"\u672c\u79d1"},{label:"\u7855\u58eb",value:"\u7855\u58eb"},{label:"\u535a\u58eb",value:"\u535a\u58eb"}],Q=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){if(!e){var n=a.props.form.getFieldsValue();console.log("Received values of ExperienceForm: ",n);var r=n.duration;n=Object(B.a)({},n,{duration:[r[0].format("YYYY-MM"),r[1].format("YYYY-MM")],id:a.props.id}),console.log("moment\u683c\u5f0f\u8f6c\u6362\u540e\u7684values: ",n),a.props.onFormSubmit(n)}})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(x.a,{onSubmit:this.handleSubmit},r.a.createElement(J,{label:"\u5b66\u6821\u540d\u79f0:"},e("school",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0"}]})(r.a.createElement(M.a,null))),r.a.createElement(J,{label:"\u5b66\u5386:"},e("degree",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5b66\u5386"}]})(r.a.createElement(I.a,null,W.map(function(e){var t=e.label,a=e.value;return r.a.createElement(K,{value:a},t)})))),r.a.createElement(J,{label:"\u5c31\u8bfb\u65f6\u95f4:"},e("duration",{rules:[{type:"array",required:!0,message:"\u8bf7\u9009\u62e9\u65f6\u95f4"}]})(r.a.createElement(z,{placeholder:["\u5165\u5b66\u65f6\u95f4","\u6bd5\u4e1a\u65f6\u95f4"],format:"YYYY-MM"}))),r.a.createElement(J,{label:"\u4e13\u4e1a:"},e("major",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4e13\u4e1a"}]})(r.a.createElement(M.a,null))),r.a.createElement(v.a,{type:"flex",justify:"end"},r.a.createElement(X,null,r.a.createElement(y.a,{onClick:this.props.onFormClose},"\u53d6\u6d88"),r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58"))))}}]),t}(r.a.Component),Z=x.a.create({mapPropsToFields:function(e){if(!e.school)return{};var t=x.a.createFormField;return{school:t({value:e.school}),degree:t({value:e.degree}),duration:t({value:[U()(e.duration[0],"YYYY-MM"),U()(e.duration[1],"YYYY-MM")]}),major:t({value:e.major})}}})(Q),$=y.a.Group,ee=b.a.confirm,te=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={educationRecords:a.props.storeValue.educationRecords||[{school:"",degree:"\u672c\u79d1",major:"",duration:["2000-01","2000-12"],id:0}]},a.handleFormEdit=function(e){var t=a.state.educationRecords.findIndex(function(t){return t.id===e.id});a.setState({educationRecords:[].concat(Object(_.a)(a.state.educationRecords.slice(0,t)),[e],Object(_.a)(a.state.educationRecords.slice(t+1)))},function(){a.props.onExperienceChange("SUBMIT_EXPERIENCE",a.state.educationRecords),R.a.success("\u4fee\u6539\u6210\u529f")})},a.handleFormAdd=function(e){a.setState(function(t,a){return{educationRecords:t.educationRecords.concat(Object(B.a)({},e,{id:t.educationRecords.length}))}},function(){a.props.onExperienceChange("SUBMIT_EXPERIENCE",a.state.educationRecords),R.a.success("\u6dfb\u52a0\u6210\u529f")})},a.handleDeleteClick=function(e){ee({title:"\u786e\u5b9a\u5220\u9664\u6b64\u6761\u8bb0\u5f55?",content:"\u8be5\u64cd\u4f5c\u4e0d\u53ef\u590d\u539f",onOk:function(){a.deleteRecord(e)},onCancel:function(){}})},a.deleteRecord=function(e){var t=a.state.educationRecords.filter(function(t){return t.id!==e});a.setState({educationRecords:t}),a.props.onExperienceChange("SUBMIT_EXPERIENCE",t),R.a.success("\u5220\u9664\u6210\u529f")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.educationRecords.map(function(t){return r.a.createElement(ae,{id:t.id,key:t.id,school:t.school,degree:t.degree,major:t.major,duration:t.duration,onFormSubmit:e.handleFormEdit,onDeleteClick:e.handleDeleteClick})}),r.a.createElement(ne,{onFormSubmit:this.handleFormAdd}))}}]),t}(r.a.Component),ae=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={editFormOpen:!1},a.handleFormOpen=function(){a.setState({editFormOpen:!0})},a.handleFormClose=function(){a.setState({editFormOpen:!1})},a.handleFormSubmit=function(e){a.props.onFormSubmit(e),a.setState({editFormOpen:!1})},a.handleDeleteClick=function(e){a.props.onDeleteClick(e)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.state.editFormOpen?r.a.createElement(Z,{school:this.props.school,degree:this.props.degree,major:this.props.major,id:this.props.id,duration:this.props.duration,onFormSubmit:this.handleFormSubmit,onFormClose:this.handleFormClose}):r.a.createElement("div",null,r.a.createElement(G.a,null,this.props.degree),r.a.createElement(v.a,{type:"flex",align:"middle"},r.a.createElement(L.a,{span:20},r.a.createElement(v.a,{type:"flex",align:"top"},r.a.createElement(L.a,{span:2},r.a.createElement(E.a,{type:"book",style:{fontSize:20}})),r.a.createElement(L.a,{span:18},r.a.createElement("p",null,this.props.school),r.a.createElement("p",null,this.props.major),r.a.createElement("p",null,U()(this.props.duration[0],"YYYY-MM").format("YYYY\u5e74MM\u6708")," ","~\xa0",U()(this.props.duration[1],"YYYY-MM").format("YYYY\u5e74MM\u6708"))))),r.a.createElement(L.a,{span:4},r.a.createElement($,null,r.a.createElement(y.a,{type:"danger",icon:"delete",onClick:function(){return e.handleDeleteClick(e.props.id)}}),r.a.createElement(y.a,{icon:"edit",onClick:this.handleFormOpen})))))}}]),t}(r.a.Component),ne=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.handleFormOpen=function(){a.setState({isOpen:!0})},a.handleFormClose=function(){a.setState({isOpen:!1})},a.handleFormSubmit=function(e){a.props.onFormSubmit(e),a.setState({isOpen:!1})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.isOpen?r.a.createElement(Z,{onFormSubmit:this.handleFormSubmit,onFormClose:this.handleFormClose}):r.a.createElement(v.a,{type:"flex",justify:"center",style:{marginTop:"25px"}},r.a.createElement(L.a,{span:8},r.a.createElement(y.a,{type:"primary",block:!0,onClick:this.handleFormOpen},"\u65b0\u589e")))}}]),t}(r.a.Component),re=a(168),oe=a(228),le=a.n(oe),ie=(r.a.Component,function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={importContent:a.props.storeValue.content?a.props.storeValue.content:"\u8bf7\u5728\u6b64\u586b\u5199\u4e2a\u4eba\u63cf\u8ff0",content:""},a.handleSubmit=function(){console.log("Before Dispatch SelfIntro",a.state.content),a.props.onFormSubmit("SUBMIT_SELF_INTRO",a.state.content)},a.receiveMarkdown=function(e){console.log("recieved MD content",e),a.setState({content:e})},a.insertTemplate=function(){var e="## \u4e2a\u4eba\u7b80\u4ecb\n## \u6280\u672f\u7ecf\u5386\u548c\u9879\u76ee\u6280\u672f\u7ec6\u8282\n## \u5176\u4ed6\u5f00\u6e90\u9879\u76ee\u548c\u4e2a\u4eba\u4f5c\u54c1\n## \u7406\u60f3\u56e2\u961f\n";console.log(e),a.setState({importContent:e,content:e})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(le.a,{active:!0,importContent:this.state.importContent,cbReceiver:this.receiveMarkdown,image:!1,video:!1,audio:!1,convertFormat:"markdown"}),r.a.createElement(v.a,{type:"flex",justify:"space-between",style:{marginTop:"15px"}},r.a.createElement(y.a,{icon:"plus",onClick:this.insertTemplate},"\u63d2\u5165\u6a21\u677f"),r.a.createElement(y.a,{type:"primary",onClick:this.handleSubmit},"\u4fdd\u5b58")))}}]),t}(r.a.Component)),ce=a(505),se=a.n(ce);function ue(e,t){return console.log(e,t),e.find(function(e){return e.value===t.toString()}).label}var me={tech:{label:"\u6280\u672f",positions:[{value:"cs",label:".Net\u5de5\u7a0b\u5e08",recommendation:["C#","ASP.NET","VB.NET","WPF","LINQ"]},{value:"python",label:"Python\u5de5\u7a0b\u5e08",recommendation:["Git","MongoDB","Django","Redis","Github"]},{value:"android",label:"Android\u5de5\u7a0b\u5e08",recommendation:["Android Studio","Kotlin","JNI/NDK","React Native","Weex"]},{value:"dba",label:"DBA",recommendation:["Git","MongoDB","Django","Redis","Memcached"]},{value:"fullstack",label:"\u5168\u6808\u5de5\u7a0b\u5e08",recommendation:["JavaScript","HTML","CSS","Vue.js","React"]},{value:"ios",label:"iOS\u5de5\u7a0b\u5e08",recommendation:["Objective-C","Swift","Xcode","Git","MongoDB"]},{value:"safe",label:"\u5b89\u5168\u5de5\u7a0b\u5e08",recommendation:["Git","MongoDB","Django","Redis","Memcached"]},{value:"go",label:"Go\u5de5\u7a0b\u5e08",recommendation:["Git","MongoDB","Django","Redis","Memcached"]},{value:"scala",label:"Scala\u5de5\u7a0b\u5e08",recommendation:["Git","MongoDB","Django","Redis","Memcached"]},{value:"ruby",label:"Ruby\u5de5\u7a0b\u5e08",recommendation:["Ruby on Rails","Rails","Sass","Less","Git"]},{value:"js",label:"Node.js\u5de5\u7a0b\u5e08",recommendation:["Git","MongoDB","Django","Redis","Memcached"]},{value:"fe",label:"\u524d\u7aef\u5de5\u7a0b\u5e08",recommendation:["JavaScript","HTML","CSS","Vue.js","React"]},{value:"test",label:"\u6d4b\u8bd5\u5de5\u7a0b\u5e08",recommendation:["\u81ea\u52a8\u5316\u6d4b\u8bd5","\u529f\u80fd\u6d4b\u8bd5","\u6027\u80fd\u6d4b\u8bd5","\u767d\u76d2\u6d4b\u8bd5","\u9ed1\u76d2\u6d4b\u8bd5"]}]},product:{label:"\u4ea7\u54c1",positions:[{value:"pm",label:"\u4ea7\u54c1\u7ecf\u7406",recommendation:["Axure","Xmind","MindManager","Visio","\u4ea4\u4e92\u8bbe\u8ba1"]},{value:"pa",label:"\u4ea7\u54c1\u52a9\u7406",recommendation:["Axure","Xmind","MindManager","Visio","\u4ea4\u4e92\u8bbe\u8ba1"]},{value:"director",label:"\u4ea7\u54c1\u603b\u76d1",recommendation:["Axure","Xmind","MindManager","Visio","\u4ea4\u4e92\u8bbe\u8ba1"]}]},design:{label:"\u8bbe\u8ba1",positions:[{value:"brand",label:"\u54c1\u724c/\u5e73\u9762\u8bbe\u8ba1\u5e08",recommendation:["Photoshop","Sketch","Adobe Illustrator","Adobe After Effects","InDesign"]},{value:"ui",label:"UI\u8bbe\u8ba1\u5e08",recommendation:["Photoshop","Sketch","Adobe Illustrator","Adobe After Effects","InDesign"]},{value:"visual",label:"\u89c6\u89c9\u8bbe\u8ba1\u5e08",recommendation:["Photoshop","Sketch","Adobe Illustrator","Adobe After Effects","InDesign"]},{value:"ue",label:"UE\u8bbe\u8ba1\u5e08",recommendation:["Photoshop","Sketch","Adobe Illustrator","Adobe After Effects","InDesign"]},{value:"researcher",label:"\u7528\u6237\u7814\u7a76\u5458",recommendation:["Photoshop","Sketch","Adobe Illustrator","Adobe After Effects","InDesign"]}]},operate:{label:"\u8fd0\u8425",positions:[{value:"editor",label:"\u7f16\u8f91/\u6587\u6848",recommendation:["\u7b56\u5212","App\u8fd0\u8425","\u5185\u5bb9\u8fd0\u8425","\u54c1\u724c\u8fd0\u8425","\u65b0\u5a92\u4f53\u8fd0\u8425"]},{value:"pe",label:"\u4ea7\u54c1\u8fd0\u8425",recommendation:["App\u8fd0\u8425","\u5185\u5bb9\u8fd0\u8425","\u54c1\u724c\u8fd0\u8425","\u65b0\u5a92\u4f53\u8fd0\u8425","\u6d3b\u52a8\u7b56\u5212"]},{value:"media",label:"\u65b0\u5a92\u4f53\u8fd0\u8425",recommendation:["App\u8fd0\u8425","\u5185\u5bb9\u8fd0\u8425","\u54c1\u724c\u8fd0\u8425","\u65b0\u5a92\u4f53\u8fd0\u8425","\u6d3b\u52a8\u7b56\u5212"]}]}},pe=[{label:"\u4e00\u5e74\u4ee5\u5185",value:"0"},{label:"\u4e00\u5e74",value:"1"},{label:"\u4e24\u5e74",value:"2"},{label:"\u4e09\u5e74",value:"3"},{label:"\u56db\u5e74",value:"4"},{label:"\u4e94\u5e74",value:"5"},{label:"\u4e94\u5e74\u4ee5\u4e0a",value:"6"}],de=a(506),he=a.n(de),fe=a(507),ge=a.n(fe),be=a(508),Ee=a.n(be),ve=a(509),ye="\n# \u8d77\u6e90\n18\u5e74\u521d\u7684\u8f6f\u4ef6\u5b9e\u8bad\u8bfe\u4e0a\uff0c\u6211\u6240\u5728\u7684\u5c0f\u7ec4\u505a\u4e86\u4e00\u4e2a\u4eff\u7167[100Offer](http://www.100offer.com/)\u7684\u62db\u8058\u7f51\u7ad9\uff0c\u5176\u4e2d\u6211\u8d1f\u8d23\u7528\u6237\u7b80\u5386\u6a21\u5757\u7684\u524d\u7aef\u90e8\u5206\uff0c\u56e0\u4e3a\u521d\u63a5\u89e6\u524d\u7aef\uff0c\u53ea\u662f\u7528Bootstrap\u548cHTML\u3001CSS\u3001JS\u5b8c\u6210\u4e86\u9759\u6001\u9875\u9762\uff0c\u5e76\u914d\u5408\u540e\u7aef\u7684\u8981\u6c42\u505a\u9002\u5f53\u4fee\u6539\n\n\u8bfe\u7a0b\u7ed3\u675f\u540e\uff0c\u968f\u7740\u63a5\u89e6React\u6846\u67b6\uff0c\u6211\u628a\u539f\u6765\u7684\u9759\u6001\u9875\u9762\u6539\u9020\u6210\u5e26\u8def\u7531\u7684\u5355\u9875\u5e94\u7528\uff0c\u5e76\u7528Redux\u505a\u72b6\u6001\u7ba1\u7406\uff0c\u7ec4\u4ef6\u5e93\u4e5f\u4eceBootstrap\u6362\u6210\u4e86ant-design(antd)\n\n# \u9879\u76ee\u7279\u70b9\n## \u81ea\u5b9a\u4e49\u7ec4\u4ef6\n* \u7528\u6237\u6280\u80fd\u6807\u7b7e\u6dfb\u52a0\u7ec4\u4ef6\n  * \u63a8\u8350\u6280\u80fd\u5217\u8868\u4f1a\u6839\u636e\u7528\u6237\u5df2\u9009\u62e9\u7684\u6280\u80fd\u81ea\u52a8\u8fc7\u6ee4\n  * \u7ecf\u8fc7\u9002\u914d\uff0c\u80fd\u5728antd\u7684\u8868\u5355\u7cfb\u7edf\u91cc\u548c\u5b98\u65b9\u63d0\u4f9b\u7684\u7ec4\u4ef6\u4e00\u6837\u5730\u4f7f\u7528\uff0c\u4e5f\u80fd\u63a5\u4e0aRedux\n\n![](".concat(a.n(ve).a,")\n\n* \u6559\u80b2\u7ecf\u5386\u586b\u5199\u7ec4\u4ef6\n  * \u80fd\u5b9e\u73b0\u6559\u80b2\u7ecf\u5386\u8bb0\u5f55\u7684\u589e\u5220\u6539\n\n![](").concat(ge.a,")\n\n## \u8868\u5355\n* \u80fd\u7528ant-design\u5185\u7f6e\u8868\u5355\u6821\u9a8c\u7684\u5b57\u6bb5\u5168\u90e8\u7528\u4e86\u5185\u7f6e\u7684`<Form.Item>`\u9a8c\u8bc1\u5668\n* \u5bf9\u7528\u6237\u624b\u673a\u53f7\u683c\u5f0f\u8fdb\u884c\u81ea\u5b9a\u4e49\u6821\u9a8c\n* \u5e93\u63d0\u4f9b\u7684`<Checkbox.Group>`\u5185\u7f6e\u6ca1\u6709\u9009\u4e2d\u9879\u6570\u76ee\u9650\u5236\uff0c\u6545\u6dfb\u52a0\u4e86\u81ea\u5b9a\u4e49\u6821\u9a8c\uff0c\u5f53\u7528\u6237\u9009\u62e9\u7684\u804c\u4f4d\u8d85\u8fc7\u4e24\u9879\u65f6\u81ea\u52a8\u7981\u7528\u591a\u9009\u6846\n\n![](").concat(Ee.a,")\n\n* \u6280\u80fd\u586b\u5199\u9875\u662f\u4e00\u4e2a\u4e24\u9636\u6bb5\u8868\u5355\uff0c\u6839\u636e\u804c\u4e1a\u65b9\u5411`<Select>`\u7684\u7ed3\u679c\uff0c\u804c\u4f4d\u9009\u9879\u4f1a\u53d8\u5316\n* \u7528\u6237\u9009\u4e2d\u4e86\u7684\u804c\u4f4d\u9009\u9879\u540e\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u65b0\u7684\u8868\u5355\u9879(\u60a8\u5728\u8be5\u804c\u4f4d\u4e0a\u6709\u591a\u4e45\u7684\u7ecf\u9a8c)\n\n![](").concat(he.a,")\n\n## \u72b6\u6001\u7ba1\u7406\n* \u4f7f\u7528\u4e86Redux\uff0c\u8def\u7531\u8df3\u8f6c\u540e\u8868\u5355\u6570\u636e\u4e0d\u4f1a\u4e22\u5931\n  * \u4f46\u8fd8\u6ca1\u6709\u628alocalStorage\u548cRedux\u540c\u6b65\uff0c\u7f51\u9875\u5237\u65b0\u540e\u6570\u636e\u8fd8\u662f\u4f1a\u6d88\u5931\n* \u767b\u9646\u72b6\u6001\u4fdd\u5b58\u5728localStorage\u4e2d\n* Container Component\u901a\u8fc7react-redux\u751f\u6210\n\n## \u524d\u7aef\u8def\u7531\n* \u975e\u6cd5URL\u4e0d\u4f1a\u52a0\u8f7d\u5185\u5bb9\n* \u8bbf\u95ee/resume\u76ee\u5f55\u65f6\uff0c\u4f1a\u5224\u65ad\u767b\u9646\u60c5\u51b5\uff0c\u82e5\u672a\u767b\u5f55\u5219\u8df3\u8f6c\u56de\u767b\u5f55\u9875\n\n## \u5176\u4ed6\n* \u811a\u624b\u67b6\u5de5\u5177: \u5b98\u65b9\u7684create-react-app\n* CSS: \u4f7f\u7528\u4e86\u5f39\u6027\u76d2\u5e03\u5c40\uff0c\u4ee5\u53caantd\u7684\u6805\u683c\u7cfb\u7edf\n\n"),je=(g.a.Header,g.a.Content),Oe=(g.a.Footer,g.a.Sider,function(e){return r.a.createElement(je,{style:{padding:"50px 50px",display:"flex",justifyContent:"center"}},r.a.createElement(g.a,{style:{padding:"24px 0",background:"#fff",borderRadius:"5px",maxWidth:"1300px"}},r.a.createElement(je,{style:{padding:"0 24px",minHeight:280}},r.a.createElement(se.a,{source:e.input,escapeHtml:!1}),r.a.createElement(j.a,{to:"/resume",style:{position:"fixed",bottom:"150px",right:"100px"}},r.a.createElement(y.a,{icon:"left",shape:"circle",type:"primary",size:"large"})))))}),Se=function(e){var t=ye;return r.a.createElement(Oe,{input:t})},ke=a(510),Ce=a(1228),xe=(x.a.Item,F.a.Group,H.a.Group,I.a.Option,Ce.a.CheckableTag),Fe=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).triggerChange=function(e){a.props.onChange(Object.assign({},e))},a.handleTagClose=function(e){var t=a.props.value.tags.filter(function(t){return t!==e});a.triggerChange({tags:t})},a.handlePressEnter=function(e){if(e.target.value){console.log("PressEnter",a.inputComp.input.value,a.inputComp);var t=a.props.value.tags.concat(a.inputComp.input.value);a.triggerChange({tags:t}),a.inputComp.input.value=""}},a.handleRecommendedTagClick=function(e){var t=a.props.value.tags.concat(e);a.triggerChange({tags:t})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(M.a,{ref:function(t){return e.inputComp=t},onPressEnter:this.handlePressEnter}),r.a.createElement(Ie,{recommendation:this.props.recommendation,currentSelectedTags:this.props.value.tags,onClick:this.handleRecommendedTagClick,threshold:5}),r.a.createElement("div",null,r.a.createElement("h6",null,"\u5df2\u9009\u6280\u80fd(",this.props.value.tags.length,"/15)"),console.log("SkillTags props now:",this.props,this.props.value),this.props.value.tags.map(function(t){return console.log("rendering \u5df2\u9009\u6280\u80fd:",t),r.a.createElement(Ce.a,{closable:!0,key:t,afterClose:function(){return e.handleTagClose(t)}},t)})))}}]),t}(r.a.Component),Ie=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).calculateTagsToBeShown=function(){for(var e=[],t=a.props.recommendation,n=0;n<t.length;n++){var r=t[n];if(a.props.currentSelectedTags.includes(r)||e.push(r),e.length===a.props.threshold)break}return console.log("recommended res: ",e),e},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h4",{style:{marginRight:8,display:"inline"}},"\u5efa\u8bae\u9009\u62e9:"),this.calculateTagsToBeShown().map(function(t){return r.a.createElement(xe,{key:t,onChange:function(){e.props.onClick(t)}},t)}))}}]),t}(r.a.Component),Re=x.a.Item,Me=(F.a.Group,H.a.Group),Ae=I.a.Option,Te=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){console.log("form submitted: ",a.state),e||(console.log("SkillForm\u5373\u5c06\u6d3e\u53d1Action: ",t),a.props.onFormSubmit("SUBMIT_SKILL",t),ke.message.success("\u4fdd\u5b58\u6210\u529f"))})},a.handleSelectChange=function(e){a.props.form.setFieldsValue({positions:[]})},a.calculatePositionsCheckboxOptions=function(){console.log("start calculatePositionsCheckboxOptions()",a.props.form.getFieldsValue());var e=a.props.form.getFieldValue("positions"),t=Array.from(me[a.props.form.getFieldValue("direction")].positions);return e&&2===e.length&&(t=t.map(function(t){var a=Object.assign({},t);return-1===e.indexOf(t.value)&&(a.disabled=!0),a})),console.log("calculating Positions results: ",t),t},a.calculateRecommendation=function(){var e=a.props.form.getFieldValue("positions");return console.log("calculateRecommendation",e),e.length?me[a.props.form.getFieldValue("direction")].positions.find(function(t){return t.value===e[e.length-1]}).recommendation:[]},a.handleKeyPress=function(e){return console.log("KeyPressing",e,e.keyCode),!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(x.a,{onSubmit:this.handleSubmit},r.a.createElement(Re,{label:"\u804c\u4e1a\u65b9\u5411"},e("direction")(r.a.createElement(I.a,{onChange:this.handleSelectChange},Object.keys(me).map(function(e){return r.a.createElement(Ae,{value:e},me[e].label)})))),r.a.createElement(Re,{label:"\u4f60\u5728\u8be5\u804c\u4e1a\u65b9\u5411\u4e0a\u6709\u591a\u957f\u65f6\u95f4\u7684\u5de5\u4f5c\u7ecf\u9a8c"},e("direction_time",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5de5\u4f5c\u5e74\u6570"}]})(r.a.createElement(I.a,null,pe.map(function(e){var t=e.label,a=e.value;return r.a.createElement(Ae,{value:a},t)})))),r.a.createElement(Re,{label:"\u9009\u62e9\u4f60\u671f\u671b\u4ece\u4e8b\u7684\u804c\u4f4d(\u6700\u591a\u9009\u62e9\u4e24\u9879)"},e("positions",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u804c\u4f4d!"}]})(r.a.createElement(Me,{style:{width:"100%"}},r.a.createElement(v.a,null,this.calculatePositionsCheckboxOptions().map(function(e){return r.a.createElement(L.a,{span:6},r.a.createElement(H.a,{value:e.value,disabled:!!e.disabled&&e.disabled},e.label))}))))),this.props.form.getFieldValue("positions")?this.props.form.getFieldValue("positions").map(function(t){return r.a.createElement(Re,{label:"\u4f60\u5728".concat(t,"\u4e0a\u6709\u591a\u957f\u65f6\u95f4\u7684\u5de5\u4f5c\u7ecf\u9a8c")},e(t,{initialValue:"0"})(r.a.createElement(I.a,null,pe.map(function(e){var t=e.label,a=e.value;return r.a.createElement(Ae,{value:a},t)}))))}):null,r.a.createElement(Re,{label:"\u804c\u4e1a\u6280\u80fd(\u6309\u56de\u8f66\u952e\u6dfb\u52a0)"},e("skills")(r.a.createElement(Fe,{recommendation:this.calculateRecommendation()}))),r.a.createElement(v.a,{type:"flex",justify:"center"},r.a.createElement(y.a,{htmlType:"submit",disabled:!0,style:{display:"none"}},"Fake"),r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58")))}}]),t}(r.a.Component),we=x.a.create({mapPropsToFields:function(e){var t=x.a.createFormField;return{direction:t({value:e.storeValue.direction}),direction_time:t({value:e.storeValue.direction_time}),positions:t({value:e.storeValue.positions}),positions_time:t({value:e.storeValue.positions_time}),skills:t({value:{tags:e.storeValue.skills}})}}})(Te),Ve=function(e,t){return{onFormSubmit:function(t,a){return e({type:t,values:a})}}},De=Object(i.b)(function(e,t){return{storeValue:e.resume.basic}},Ve)(Y),Pe=Object(i.b)(function(e,t){return{storeValue:e.resume.skill}},Ve)(we),Ye=Object(i.b)(function(e,t){return{storeValue:e.resume.experience}},function(e,t){return{onExperienceChange:function(t,a){return e({type:t,values:a})}}})(te),Be=Object(i.b)(function(e,t){return{storeValue:e.resume.self_intro}},Ve)(ie),_e=Object(i.b)(function(e,t){return{storeValue:e.resume}},Ve)(function(e){var t=e.storeValue,a=t.basic,n=t.skill,o=t.experience,l=t.self_intro,i="\n# \u4e2a\u4eba\u4fe1\u606f\n* ".concat(a.name," / ").concat("male"===a.sex?"\u7537":"\u5973"," / ").concat(a.age,"\n* \u6240\u5728\u57ce\u5e02\n* \u8054\u7cfb\u65b9\u5f0f\n  * \u624b\u673a: ").concat(a.phone,"\n  * \u90ae\u7bb1: ").concat(a.mail,"\n\n# \u6280\u80fd\n* \u804c\u4e1a\u65b9\u5411: ").concat(me[n.direction].label,"  \u5de5\u4f5c\u7ecf\u9a8c: ").concat(ue(pe,n.direction_time),"\n* \u671f\u671b\u4ece\u4e8b\u7684\u804c\u4f4d\n").concat(n.positions_time.map(function(e){var t=e.position,a=e.time;return"  * "+ue(me[n.direction].positions,t)+"  \u5de5\u4f5c\u7ecf\u9a8c: "+a+"\u5e74"}).join("\n"),"\n* \u804c\u4e1a\u6280\u80fd: ").concat(n.skills.join(", "),"\n\n\n# \u6559\u80b2\u7ecf\u5386\n").concat(o.educationRecords.map(function(e){var t=e.school,a=e.degree,n=e.major,r=e.duration;return"\n* ".concat(t,"  ").concat(a,"\n  * \u4e13\u4e1a: ").concat(n,"\n  * \u65f6\u95f4: ").concat(r[0]," \u81f3 ").concat(r[1],"\n").trim()}).join("\n"),"\n\n\n# \u4e2a\u4eba\u63cf\u8ff0\n").concat(l.content,"\n").trim();return r.a.createElement(Oe,{input:i})}),Ge=a(1242),Le=(f.a.SubMenu,g.a.Header,g.a.Content,g.a.Footer,g.a.Sider,q.a.RangePicker,x.a.Item),Ne=(F.a.Group,H.a.Group,I.a.Option,y.a.Group,function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loginInProgress:!1,shouldRedirect:!1},a.redirectPath=function(){return"/resume/basic"},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){console.log(a.state),e||"admin"!==t.username||"admin"!==t.password||(console.log("Received values of form: ",t),a.performLogin())})},a.performLogin=function(){a.setState({loginInProgress:!0}),setTimeout(function(){C.login(),a.setState({shouldRedirect:!0})},1300)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){if(this.state.shouldRedirect)return r.a.createElement(k.a,{to:this.redirectPath()});var e=this.props.form.getFieldDecorator;return r.a.createElement("div",{style:{width:"450px",margin:"0 auto",marginTop:"100px",borderRadius:"5px",background:"#fff",padding:"30px"}},r.a.createElement(Ge.a,{spinning:this.state.loginInProgress,size:"large"},r.a.createElement(x.a,{onSubmit:this.handleSubmit,className:"login-form",style:{height:"400px",display:"flex",flexDirection:"column",justifyContent:"space-between"}},r.a.createElement("h1",{style:{textAlign:"center",fontSize:"30px",color:"#666666",fontWeight:"300"}},"\u767b\u9646"),r.a.createElement("div",null,r.a.createElement(Le,null,e("username",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u53f7"}],initialValue:"admin"})(r.a.createElement(M.a,{prefix:r.a.createElement(E.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8d26\u53f7"}))),r.a.createElement(Le,null,e("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],initialValue:"admin"})(r.a.createElement(M.a,{prefix:r.a.createElement(E.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"}))),r.a.createElement("p",null,"\u7528\u6237\u540dadmin"),r.a.createElement("p",null,"\u5bc6\u7801admin")),r.a.createElement(y.a,{type:"primary",htmlType:"submit",block:!0,className:"login-form-button"},"\u786e\u5b9a"))))}}]),t}(n.Component)),Ue=x.a.create()(Ne),qe=a(326),He=function(e){var t=e.component,a=Object(qe.a)(e,["component"]);return console.log("PrivateRouting","client:",C.isLoggedIn(),t),r.a.createElement(S.a,Object.assign({},a,{render:function(e){return C.isLoggedIn()?r.a.createElement(t,e):r.a.createElement(k.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ze=function(e){var t=e.component,a=Object(qe.a)(e,["component"]);return console.log("LoginRouting","client:",C.isLoggedIn(),t),r.a.createElement(S.a,Object.assign({},a,{render:function(e){return C.isLoggedIn()?r.a.createElement(k.a,{to:{pathname:"/resume",state:{from:e.location}}}):r.a.createElement(t,e)}}))},Je=(f.a.SubMenu,g.a.Header),Ke=g.a.Content,Xe=g.a.Footer,We=g.a.Sider,Qe=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).handleContactClick=function(){b.a.info({title:"\u8054\u7cfb\u65b9\u5f0f",content:r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("b",null,"\u624b\u673a:")," 15927066787"),r.a.createElement("p",null,r.a.createElement("b",null,"Email:")," sjdeak@yahoo.com"),r.a.createElement("p",null,r.a.createElement("b",null,"QQ:")," 414797304"),r.a.createElement("p",null,r.a.createElement("b",null,"\u5fae\u4fe1:")," ComerSJ")),onOk:function(){}})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,null,r.a.createElement(Je,{className:"header",style:{}},r.a.createElement(f.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{lineHeight:"64px",display:"flex",maxWidth:"1300px",margin:"0 auto"}},r.a.createElement(f.a.Item,{key:"resume"},r.a.createElement(j.a,{to:"/resume"},"\u7b80\u5386\u7cfb\u7edf")),r.a.createElement(f.a.Item,{key:"project-intro"},r.a.createElement(j.a,{to:"/project-intro"},"\u9879\u76ee\u4ecb\u7ecd")),r.a.createElement(f.a.Item,{key:"3",onClick:this.handleContactClick},"\u8054\u7cfb\u6211"),r.a.createElement(f.a.Item,{key:"4",style:{marginLeft:"auto"}},C.isLoggedIn()?r.a.createElement("span",null,r.a.createElement(E.a,{type:"user"}),"admin"):r.a.createElement(j.a,{to:"/login"},"\u767b\u9646")))),r.a.createElement(O.a,null,r.a.createElement(S.a,{exact:!0,path:"/",render:function(){return r.a.createElement(k.a,{to:"/resume"})}}),r.a.createElement(ze,{path:"/login",component:Ue}),r.a.createElement(He,{path:"/resume",component:Ze}),r.a.createElement(He,{path:"/show",component:_e}),r.a.createElement(S.a,{path:"/project-intro",component:Se}),r.a.createElement(S.a,{render:function(){return r.a.createElement(k.a,{to:"/404"})}})),r.a.createElement(Xe,{style:{textAlign:"center"}},"\u7b80\u5386\u7ba1\u7406\u6a21\u5757 \xa92018 Created by Jun Shen")))}}]),t}(n.Component),Ze=function(){return r.a.createElement(Ke,{style:{padding:"50px 50px",display:"flex",justifyContent:"center"}},r.a.createElement(g.a,{style:{padding:"24px 0",background:"#fff",borderRadius:"5px",maxWidth:"1300px"}},r.a.createElement(We,{width:200,style:{background:"#fff"}},r.a.createElement(f.a,{mode:"inline",defaultSelectedKeys:[window.location.pathname.slice(8)],style:{height:"500px"}},r.a.createElement(f.a.Item,{key:"basic"},r.a.createElement(j.a,{to:"/resume/basic"},"\u4e2a\u4eba\u4fe1\u606f")),r.a.createElement(f.a.Item,{key:"skill"},r.a.createElement(j.a,{to:"/resume/skill"},"\u6280\u80fd")),r.a.createElement(f.a.Item,{key:"experience"},r.a.createElement(j.a,{to:"/resume/experience"},"\u7ecf\u5386")),r.a.createElement(f.a.Item,{key:"self-intro"},r.a.createElement(j.a,{to:"/resume/self-intro"},"\u4e2a\u4eba\u63cf\u8ff0")),r.a.createElement(v.a,{type:"flex",justify:"center",style:{marginTop:"20px"}},r.a.createElement(y.a,{style:{margin:"0 auto"}},r.a.createElement(j.a,{to:"/show"},"\u67e5\u770b\u7b80\u5386"))))),r.a.createElement(Ke,{style:{padding:"0 24px",minHeight:280}},r.a.createElement(S.a,{exact:!0,path:"/resume",render:function(){return r.a.createElement(k.a,{to:"/resume/basic"})}}),r.a.createElement(S.a,{path:"/resume/basic",component:De}),r.a.createElement(S.a,{path:"/resume/skill",component:Pe}),r.a.createElement(S.a,{path:"/resume/experience",component:Ye}),r.a.createElement(S.a,{path:"/resume/self-intro",component:Be}))))},$e=Qe,et=Object(s.b)({account:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"LOGIN":return!0;case"LOGOUT":return!1;default:return e}},resume:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{basic:{name:"\u6c88\u9a8f",sex:"male",age:18,city:"hz",phone:"15927066787",mail:"sjdeak@yahoo.com"},skill:{direction:"tech",direction_time:3,positions:["python"],positions_time:[{position:"python",time:1}],skills:["Flask"]},experience:{educationRecords:[{school:"\u534e\u4e2d\u79d1\u6280\u5927\u5b66",degree:"\u7855\u58eb",major:"\u8f6f\u4ef6\u5de5\u7a0b",duration:["2017-09","2020-03"],id:0},{school:"\u5b81\u6ce2\u5927\u5b66",degree:"\u672c\u79d1",major:"\u6570\u5b66\u4e0e\u5e94\u7528\u6570\u5b66",duration:["2013-09","2017-06"],id:1}]},self_intro:{content:"\u5bfb\u627e\u5b9e\u4e60\u4e2d"}},t=arguments.length>1?arguments[1]:void 0;switch(console.log("resumeReducer",t.type,t.values),t.type){case"SUBMIT_BASIC":return Object.assign(e,{basic:t.values});case"SUBMIT_SKILL":var a=Object.assign({},t.values,{skills:t.values.skills.tags});return Object.assign(e,{skill:a});case"SUBMIT_EXPERIENCE":return Object.assign(e,{experience:{educationRecords:t.values}});case"SUBMIT_SELF_INTRO":return Object.assign(e,{self_intro:{content:t.values}});default:return e}}}),tt=Object(s.c)(et);l.a.render(r.a.createElement(i.a,{store:tt},r.a.createElement(c.a,null,r.a.createElement($e,null))),document.getElementById("root"))},506:function(e,t,a){e.exports=a.p+"static/media/direction.79b50975.png"},507:function(e,t,a){e.exports=a.p+"static/media/experience.963ff2f8.png"},508:function(e,t,a){e.exports=a.p+"static/media/positions.6fab2615.png"},509:function(e,t,a){e.exports=a.p+"static/media/skillTag.d63c3f85.png"},522:function(e,t,a){e.exports=a(1210)},532:function(e,t,a){}},[[522,2,1]]]);
//# sourceMappingURL=main.7345f30f.chunk.js.map
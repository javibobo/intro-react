(this.webpackJsonpgradebook=this.webpackJsonpgradebook||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(7),r=a.n(i),l=(a(13),a(2)),c=a(3),d=a(1),o=a(5),u=a(4),m=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"getValue",value:function(e,t,a){return t in e&&a in e[t]?e[t][a]:"Add Score"}},{key:"createRows",value:function(e){var t=this;return s.a.createElement("div",null,this.props.rows.map((function(a,n){return s.a.createElement("div",{className:"Box-row d-flex flex-justify-between"},a,s.a.createElement("input",{className:"form-control input-sm",type:"text",placeholder:t.getValue(t.props.data,e,a),onChange:function(n){return t.props.addFunction(e,a,n.target.value)}}))})))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,this.props.tableNames.map((function(t,a){return s.a.createElement("div",{className:"pt-6"},s.a.createElement("div",{className:"Box col-6 mx-auto"},s.a.createElement("div",{className:"Box-header Box-title"},t),s.a.createElement("div",null,e.createRows(t))))})))}}]),a}(s.a.Component),h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({value:""}),this.props.addFunction(this.state.value),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-6 mx-auto"},s.a.createElement("p",{className:"h2"},this.props.title),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",null,s.a.createElement("input",{className:"form-control input-sm",type:"text",placeholder:this.props.placeholder,value:this.state.value,onChange:this.handleChange})),s.a.createElement("input",{className:"btn btn-sm",type:"submit",value:"Submit"})),s.a.createElement("ul",{className:"Box"},s.a.createElement("div",{className:"Box-header"},this.props.title),this.props.currList.map((function(e,t){return s.a.createElement("li",{className:"Box-row",key:t}," ",e," ")}))))}}]),a}(s.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={buttonClicked:"",assignments:[],students:[],grades:{}},n.handleButtonClicked=n.handleButtonClicked.bind(Object(d.a)(n)),n.addAssignment=n.addAssignment.bind(Object(d.a)(n)),n.addStudent=n.addStudent.bind(Object(d.a)(n)),n.addGrade=n.addGrade.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"handleButtonClicked",value:function(e){this.setState({buttonClicked:e})}},{key:"addAssignment",value:function(e){this.setState({assignments:this.state.assignments.concat(e)})}},{key:"addStudent",value:function(e){this.setState({students:this.state.students.concat(e)})}},{key:"addGrade",value:function(e,t,a){var n=this.state.grades,s=e,i=t;e in n||(n[s]={}),n[s][i]=a,this.setState({grades:n})}},{key:"render",value:function(){var e=this,t=s.a.createElement("div",null);return"assignments"===this.state.buttonClicked&&(t=s.a.createElement(h,{placeholder:"Add Assignment...",currList:this.state.assignments,addFunction:this.addAssignment,title:"Assignments"})),"students"===this.state.buttonClicked&&(t=s.a.createElement(h,{placeholder:"Add Student...",currList:this.state.students,addFunction:this.addStudent,title:"Student Roster"})),"grades"===this.state.buttonClicked&&(t=s.a.createElement(m,{tableNames:this.state.assignments,rows:this.state.students,addFunction:this.addGrade,data:this.state.grades})),s.a.createElement("div",null,s.a.createElement("div",{className:"Box Box--spacious f4"},s.a.createElement("div",{className:"Box-header"},s.a.createElement("h3",{className:"Box-title d-flex flex-justify-center"},"GradeBook"))),s.a.createElement("nav",{className:"UnderlineNav d-flex flex-justify-center"},s.a.createElement("div",{className:"UnderlineNav-body pt-6"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.handleButtonClicked("assignments")}},"Assignments"),s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.handleButtonClicked("students")}},"Students"),s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.handleButtonClicked("grades")}},"Grades"))),t)}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9029f406.chunk.js.map
(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(9),i=a.n(s),c=(a(17),a(1)),l=a(11),r=a(3),d=a(4),u=a(5),m=a(7),p=a(6),h=a(2),f=(a(18),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).handleRemove=function(){o.props.removeTodo(o.props.id)},o.toggleForm=function(){o.setState({isEditing:!o.state.isEditing})},o.handleUpdate=function(e){e.preventDefault(),o.props.updateTodo(o.props.id,o.state.task),o.setState({isEditing:!1})},o.handleChange=function(e){o.setState(Object(h.a)({},e.target.name,e.target.value))},o.state={isEditing:!1,task:o.props.task},o.handleToggle=o.handleToggle.bind(Object(u.a)(o)),o}return Object(d.a)(a,[{key:"handleToggle",value:function(e){this.props.toggleTodo(this.props.id)}},{key:"render",value:function(){return this.state.isEditing?n.a.createElement("div",{className:"Todo"},n.a.createElement("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate},n.a.createElement("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange}),n.a.createElement("button",null,"Save"))):n.a.createElement("div",{className:"Todo"},n.a.createElement("li",{className:this.props.completed?"Todo-task completed":"todo-task",onClick:this.handleToggle},this.props.task),n.a.createElement("div",{className:"Todo-buttons"},n.a.createElement("button",{onClick:this.toggleForm},n.a.createElement("i",{className:"fas fa-pen"})),n.a.createElement("button",{onClick:this.handleRemove},n.a.createElement("i",{className:"fas fa-trash"}))))}}]),a}(o.Component)),g=a(10),v=a.n(g),b=(a(19),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).handleChange=function(e){o.setState(Object(h.a)({},e.target.name,e.target.value))},o.handleSubmit=function(e){e.preventDefault(),o.props.createTodo(Object(c.a)(Object(c.a)({},o.state),{},{id:v()(),completed:!1})),o.setState({task:""})},o.state={task:""},o}return Object(d.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{className:"NewTodoForm",onSubmit:this.handleSubmit},n.a.createElement("label",{htmlFor:"task"},"New Todo: "),n.a.createElement("input",{type:"text",name:"task",id:"task",placeholder:"Add ToDo",value:this.state.task,onChange:this.handleChange}),n.a.createElement("button",null,"Add Todo!"))}}]),a}(o.Component)),E=(a(22),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).createTodo=function(e){o.setState({todos:[].concat(Object(l.a)(o.state.todos),[e])})},o.removeTodo=function(e){o.setState({todos:o.state.todos.filter((function(t){return t.id!==e}))})},o.updateTodo=function(e,t){var a=o.state.todos.map((function(a){return a.id===e?Object(c.a)(Object(c.a)({},a),{},{task:t}):a}));o.setState({todos:a})},o.state={todos:[]},o.toggleCompletion=o.toggleCompletion.bind(Object(u.a)(o)),o}return Object(d.a)(a,[{key:"toggleCompletion",value:function(e){var t=this.state.todos.map((function(t){return t.id===e?Object(c.a)(Object(c.a)({},t),{},{completed:!t.completed}):t}));this.setState({todos:t})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return n.a.createElement(f,{key:t.id,id:t.id,task:t.task,completed:t.completed,removeTodo:e.removeTodo,updateTodo:e.updateTodo,toggleTodo:e.toggleCompletion})}));return n.a.createElement("div",{className:"TodoList"},n.a.createElement("h1",null,"Todo List ",n.a.createElement("span",null,"Simple React App.")),n.a.createElement("ul",null,t),n.a.createElement(b,{createTodo:this.createTodo}))}}]),a}(o.Component));a(23);var k=function(){return n.a.createElement("div",null,n.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.90dcad97.chunk.js.map
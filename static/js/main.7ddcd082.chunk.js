(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{10:function(e,t,n){e.exports={projects:"project-general_projects__3kxkZ",projects__list:"project-general_projects__list__3cPdw",project__button:"project-general_project__button__1uOnt",button:"project-general_button__w-v8b",project__title:"project-general_project__title__1i0Gd",form:"project-general_form__3MrXX",message:"project-general_message__1jV2C",textarea:"project-general_textarea__auZGE",project__info:"project-general_project__info__2Qh6U",project__description:"project-general_project__description__92Iu8"}},111:function(e,t,n){e.exports={sidebar:"sidebar_sidebar__Y80ct",active:"sidebar_active__2zaX5"}},113:function(e,t,n){e.exports=n(238)},118:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var r,a,o=n(0),c=n.n(o),i=n(49),l=n.n(i),s=(n(118),n(78),n(16)),u=n(240),m=n(239),p=n(39),d=n(51),f=n.n(d),_=function(e){e.input;var t=e.meta,n=(e.child,Object(p.a)(e,["input","meta","child"])),r=t.touched&&t.error;return c.a.createElement("div",{className:f.a.form_control+" "+(r?f.a.error:"")},c.a.createElement("div",null,n.children),c.a.createElement("div",null,r&&c.a.createElement("span",{className:f.a.error},t.error)))},j=function(e){var t=e.input,n=(e.meta,e.child,Object(p.a)(e,["input","meta","child"]));return c.a.createElement(_,e," ",c.a.createElement("input",Object.assign({},t,n))," ")},g=function(e){var t=e.input,n=(e.meta,e.child,Object(p.a)(e,["input","meta","child"]));return c.a.createElement(_,e," ",c.a.createElement("textarea",Object.assign({},t,n))," ")},E=function(e){if(!e)return"Field is required"},b=function(e){return e?e!==e.replace(/[^A-Za-z]/gi,"")?"must contain only English letters":void 0:"Field is required"},v=n(7),h=n(52),S=n.n(h),k=(r=20,a=4,function(e){if(e.length<a)return"Min length is ".concat(a," symbols")}),O=Object(m.a)({form:"postSound"})((function(e){console.log("lol");var t=Object(v.f)();return e.currentLogin&&e.currentToken&&t.push("/main/projects"),c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:S.a.login__form,onSubmit:e.handleSubmit},c.a.createElement("h1",null,"Log In"),!e.login&&c.a.createElement(u.a,{component:j,validate:[E],name:"login",placeholder:"Enter login"}),c.a.createElement(u.a,{component:j,validate:[E,k],type:"password",name:"password",placeholder:"Enter password"}),c.a.createElement("button",null," Submit")))})),w=function(e){var t,n,r=Object(v.f)(),a=JSON.parse(localStorage.getItem("state"));a&&(t=a.login.login,n=a.login.token);return e.currentLogin&&e.currentToken&&r.push("/main/projects"),c.a.createElement("div",{className:S.a.form},c.a.createElement(O,{currentLogin:t,currentToken:n,login:e.login,errorCode:e.errorCode,onSubmit:function(t){e.login||(console.log("right"),e.sendFormForAuthorization(t.login,t.password)),e.login&&(e.sendFormForAuthorization(e.login,t.password),r.push("/main/projects"))}}),e.errorCode&&c.a.createElement("div",{className:S.a.message},e.errorCode))},N=n(14),x=n.n(N),C=n(24),L=n(32),U=n(110).create({baseURL:"https://project23e.herokuapp.com/"}),P=function(e,t){return U.get("/get-users?login=".concat(e,"&password=").concat(t),{login:e,password:t}).then((function(e){return e.data}),(function(e){return e}))},y=function(e,t,n){return U.post("create-new-project/".concat(n),{title:e,description:t,token:n}).then((function(e){return e.data}))},T=function(e,t,n,r){return U.put("user-ptoject/".concat(n),{title:e,description:t,token:r}).then((function(e){return e.data}))},F=function(e){return U.get("/user-ptojects?token=".concat(e),{token:e}).then((function(e){return e.data}))},I=function(e,t){return U.delete("/delete-project/?id=".concat(e,"&token=").concat(t)).then((function(e){return e.data}))},A={token:null,status:null,sendCode:null,login:null,errorCode:null},R=function(e){return{type:"SET-USER-DATA",data:e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return console.log(t.data),Object(L.a)(Object(L.a)({},e),{},{token:t.data.token,status:t.data.status,login:t.data.login,errorCode:t.data.sendCode});default:return e}},z=Object(s.b)((function(e){return{token:e.login.token,status:e.login.status,login:e.login.login,errorCode:e.login.errorCode}}),{sendFormForAuthorization:function(e,t){return function(){var n=Object(C.a)(x.a.mark((function n(r){var a;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P(e,t);case 2:a=n.sent,console.log(a),r(R(a));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(w),D=n(15),M=n(111),Z=n.n(M),q=function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:Z.a.sidebar},c.a.createElement(D.b,{to:"/main/projects",activeClassName:"selected"},"My projects "),c.a.createElement(D.b,{to:"/main/create-project",activeClassName:"selected"},"Create project"),c.a.createElement(D.b,{to:"/login",activeClassName:"selected"},c.a.createElement("div",{onClick:function(){localStorage.clear()}},"Log Out")),c.a.createElement(D.b,{to:"/main/settings",activeClassName:"selected"},"Settings")))},G=n(31),K=n(54),X=n.n(K),B=Object(m.a)({form:"postSound"})((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:X.a.form,onSubmit:e.handleSubmit},c.a.createElement("h3",null,"Enter title"),c.a.createElement(u.a,{component:j,validate:[E,b],name:"title",placeholder:"String from soung"}),c.a.createElement("button",null," Next ")))})),V=Object(m.a)({form:"postSound"})((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:X.a.form,onSubmit:e.handleSubmit},c.a.createElement("h1",null,"Enter description "),c.a.createElement(u.a,{component:g,cols:"40",rows:"10",className:X.a.textarea,validate:[E],name:"description"}),c.a.createElement("button",null," Submit")))})),W=function(e){var t=Object(o.useState)(1),n=Object(G.a)(t,2),r=n[0],a=n[1],i=Object(o.useState)(null),l=Object(G.a)(i,2),s=l[0],u=l[1],m=Object(v.f)();console.log(e);var p=function(e){u(e.title),a(r+1)},d=function(t){e.createUsersProject(s,t.description,e.token),a(r+1)};if(3===r&&setTimeout((function(){return m.push("/main/projects")}),2e3),!e.token)return c.a.createElement(v.a,{to:"/login"});return c.a.createElement(c.a.Fragment,null,function(){switch(console.log(r),r){case 1:return c.a.createElement(B,{onSubmit:p});case 2:return c.a.createElement(V,{onSubmit:d});default:return c.a.createElement("div",null,"\u041f\u0440\u043e\u0435\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d")}}())},H={projectId:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-PROJECT-ID":return{projectId:t.projectId};default:return e}},Y=Object(s.b)((function(e){return{token:e.login.token,projectId:e.projectCreator.projectId}}),{createUsersProject:function(e,t,n){return function(){var r=Object(C.a)(x.a.mark((function r(a){var o;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(e,t,n),r.next=3,y(e,t,n);case 3:o=r.sent,a({type:"SET-PROJECT-ID",projectId:o.projectId}),console.log(o);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})(W),$=n(10),ee=n.n($),te=function(e){var t=Object(o.useState)(!1),n=Object(G.a)(t,2),r=n[0],a=n[1];return c.a.createElement("div",{className:ee.a.projects__container},c.a.createElement("div",{className:ee.a.projects__list},c.a.createElement("div",{className:ee.a.project__title},e.projectsList.title),c.a.createElement("div",{className:ee.a.project__button},c.a.createElement("button",{className:ee.a.button,onClick:function(){a(!r)}},"Expander"))),r&&c.a.createElement(ne,{setShow:a,token:e.token,removeUsersProject:e.removeUsersProject,editUserProject:e.editUserProject,projectsList:e.projectsList}))},ne=function(e){var t=Object(o.useState)("disable"),n=Object(G.a)(t,2),r=n[0],a=n[1],i=function(){e.setShow(!1),a("disable")};return c.a.createElement("div",{className:ee.a.project__info},"disable"===r&&c.a.createElement("div",null,c.a.createElement("div",{className:ee.a.project__title},e.projectsList.title,c.a.createElement("div",null,c.a.createElement("button",{className:ee.a.button,onClick:function(){a("enable")}},"Edit"))),c.a.createElement("div",{className:ee.a.project__description},e.projectsList.description)),"enable"===r&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("button",{className:ee.a.button,onClick:function(){e.setShow(!1),e.removeUsersProject(e.projectsList._id,e.token)},type:"button",name:"button"},"Delete ")),c.a.createElement("div",null,c.a.createElement(re,{onSubmit:function(t){e.editUserProject(t.titleEdit,t.descriptionEdit,e.projectsList._id,e.token),i()},projectsList:e.projectsList,initialValues:{titleEdit:e.projectsList.title,descriptionEdit:e.projectsList.description}}))))},re=Object(m.a)({form:"EditForm",enableReinitialize:!0})((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:ee.a.form,onSubmit:e.handleSubmit},c.a.createElement(u.a,{component:j,validate:[E,b],name:"titleEdit"}),c.a.createElement(u.a,{component:g,cols:"40",rows:"10",className:ee.a.textarea,validate:[E],name:"descriptionEdit"}),c.a.createElement("button",null,"Submit")))})),ae=function(e){return Object(o.useEffect)((function(){e.getUsersProjects(e.token)}),[]),e.token?c.a.createElement("div",{className:ee.a.projects},e.projectsList.map((function(t,n){return c.a.createElement(te,{key:n,status:e.status,removeUsersProject:e.removeUsersProject,getUsersProjects:e.getUsersProjects,token:e.token,editUserProject:e.editUserProject,projectsList:t})}))):c.a.createElement(v.a,{to:"/login"})},oe={token:null,projectsList:[],status:null},ce=function(e){return{type:"GET_USERS_PROJECTS",data:e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS_PROJECTS":return{projectsList:t.data};case"EDIT_STATUS":return Object(L.a)(Object(L.a)({},e),{},{status:t.status});default:return e}},le=Object(s.b)((function(e){return{token:e.login.token,projectsList:e.projects.projectsList,status:e.projects.status}}),{getUsersProjects:function(e){return function(){var t=Object(C.a)(x.a.mark((function t(n){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:r=t.sent,n(ce(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},editUserProject:function(e,t,n,r){return function(){var a=Object(C.a)(x.a.mark((function a(o){var c;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T(e,t,n,r);case 2:c=a.sent,o(ce(c));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},removeUsersProject:function(e,t){return function(){var n=Object(C.a)(x.a.mark((function n(r){var a;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I(e,t);case 2:a=n.sent,r(ce(a));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(ae),se=function(){return c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",name:"name",onChange:function(){console.log("ok")}}))},ue=n(55),me=n.n(ue),pe=function(){return c.a.createElement("div",{className:me.a.main},c.a.createElement("div",{className:me.a.main__sidebar},c.a.createElement(q,null)),c.a.createElement("div",{className:me.a.main__general},c.a.createElement(v.b,{path:"/main/create-project",component:Y}),c.a.createElement(v.b,{path:"/main/projects",render:function(){return c.a.createElement(c.a.Suspense,null,c.a.createElement(le,null))}}),c.a.createElement(v.b,{path:"/main/settings",component:se})))},de=n(6),fe=n(112),_e=n(241),je=Object(de.c)({projectCreator:Q,login:J,projects:ie,form:_e.a}),ge=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),Ee=Object(de.d)(je,ge,Object(de.a)(fe.a));Ee.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log(n)}}(Ee.getState())})),window.store=Ee;var be=Ee;var ve=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(D.a,{basename:"/project-app"},c.a.createElement(s.a,{store:be},c.a.createElement(v.b,{exact:!0,path:"/",render:function(){return c.a.createElement(v.a,{to:"/login"})}}),c.a.createElement("div",null,c.a.createElement(v.b,{path:"/login",render:function(){return console.log(),c.a.createElement(c.a.Suspense,null,c.a.createElement("div",{class:"container__login"},c.a.createElement(z,null)))}})),c.a.createElement("div",null,c.a.createElement(v.b,{path:"/main",render:function(){return c.a.createElement(c.a.Suspense,null,c.a.createElement("div",{className:"container__main"},c.a.createElement(pe,null)))}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,t,n){e.exports={form_control:"form-control_form_control__1RMN8",error:"form-control_error__218LK"}},52:function(e,t,n){e.exports={login__page:"login_login__page__qgthF",form:"login_form__Fv0Ml",message:"login_message__2PgTH",container:"login_container__uZxKL",info:"login_info__3cpon"}},54:function(e,t,n){e.exports={form:"project-creator_form__3OKLZ",message:"project-creator_message__k2z4N",container:"project-creator_container__35A-A",info:"project-creator_info__hS9br",textarea:"project-creator_textarea__3dC2h"}},55:function(e,t,n){e.exports={main:"main_main__3A9qg",main__sidebar:"main_main__sidebar__cU6C8",main__general:"main_main__general__5rodv"}},78:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.7ddcd082.chunk.js.map
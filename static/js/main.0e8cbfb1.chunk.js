(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{110:function(e,t,n){e.exports={sidebar:"sidebar_sidebar__Y80ct",active:"sidebar_active__2zaX5"}},111:function(e,t,n){e.exports={settings:"settings_settings__132Wp"}},113:function(e,t,n){e.exports=n(239)},118:function(e,t,n){},119:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var a,r,o=n(0),c=n.n(o),i=n(50),l=n.n(i),s=(n(118),n(17)),u=(n(119),n(16)),m=n(241),d=n(240),p=n(40),_=n(52),f=n.n(_),j=function(e){e.input;var t=e.meta,n=(e.child,Object(p.a)(e,["input","meta","child"])),a=t.touched&&t.error;return c.a.createElement("div",{className:f.a.form_control+" "+(a?f.a.error:"")},c.a.createElement("div",null,n.children),c.a.createElement("div",null,a&&c.a.createElement("span",{className:f.a.error},t.error)))},E=function(e){var t=e.input,n=(e.meta,e.child,Object(p.a)(e,["input","meta","child"]));return c.a.createElement(j,e," ",c.a.createElement("input",Object.assign({},t,n))," ")},g=function(e){var t=e.input,n=(e.meta,e.child,Object(p.a)(e,["input","meta","child"]));return c.a.createElement(j,e," ",c.a.createElement("textarea",Object.assign({},t,n))," ")},b=function(e){if(!e)return"Field is required"},v=function(e){return e?e!==e.replace(/[^A-Za-z]/gi,"")?"must contain only English letters":void 0:"Field is required"},h=n(8),S=n(53),w=n.n(S),k=(a=20,r=4,function(e){if(e.length<r)return"Min length is ".concat(r," symbols")}),O=Object(d.a)({form:"postSound"})((function(e){var t=Object(h.f)();return e.currentToken&&t.push("/main/projects"),c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:w.a.login__form,onSubmit:e.handleSubmit},e.login?c.a.createElement("h3",null,"Welcome ",e.login):c.a.createElement("h3",null,"Log In"),!e.login&&c.a.createElement(m.a,{component:E,validate:[b],name:"login",placeholder:"Enter login"}),c.a.createElement(m.a,{component:E,validate:[b,k],type:"password",name:"password",placeholder:"Enter password"}),c.a.createElement("button",null," Submit")))})),N=function(e){var t,n=Object(h.f)(),a=JSON.parse(localStorage.getItem("state"));a&&(t=a.login.token);return c.a.createElement("div",{className:w.a.form},c.a.createElement(O,{currentToken:t,login:e.login,errorCode:e.errorCode,onSubmit:function(t){e.login||e.sendFormForAuthorization(t.login,t.password),e.login&&(e.sendFormForAuthorization(e.login,t.password),setTimeout((function(){return n.push("/main/projects")}),150))}}),e.errorCode&&c.a.createElement("div",{className:w.a.message},e.errorCode))},x=n(14),C=n.n(x),y=n(25),L=n(32),U=n(109).create({baseURL:"https://project23e.herokuapp.com/"}),P=function(e,t){return U.get("/get-users?login=".concat(e,"&password=").concat(t),{login:e,password:t}).then((function(e){return e.data}),(function(e){return e}))},T=function(e,t,n){return U.post("create-new-project/".concat(n),{title:e,description:t,token:n}).then((function(e){return e.data}))},F=function(e,t,n,a){return U.put("user-ptoject/".concat(n),{title:e,description:t,token:a}).then((function(e){return e.data}))},I=function(e){return U.get("/user-ptojects?token=".concat(e),{token:e}).then((function(e){return e.data}))},A=function(e,t){return U.delete("/delete-project/?id=".concat(e,"&token=").concat(t)).then((function(e){return e.data}))},D={token:null,status:null,sendCode:null,login:null,errorCode:null},R=function(e){return{type:"SET-USER-DATA",data:e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(L.a)(Object(L.a)({},e),{},{token:t.data.token,status:t.data.status,login:t.data.login,errorCode:t.data.sendCode});default:return e}},z=Object(u.b)((function(e){return{token:e.login.token,status:e.login.status,login:e.login.login,errorCode:e.login.errorCode}}),{sendFormForAuthorization:function(e,t){return function(){var n=Object(y.a)(C.a.mark((function n(a){var r;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P(e,t);case 2:r=n.sent,a(R(r));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(N),M=n(15),G=n(110),W=n.n(G),Z=function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:W.a.sidebar},c.a.createElement(M.b,{to:"/main/projects",activeClassName:"selected"},"My projects "),c.a.createElement(M.b,{to:"/main/create-project",activeClassName:"selected"},"Create project"),c.a.createElement(M.b,{to:"/login",activeClassName:"selected"},c.a.createElement("div",{onClick:function(){localStorage.clear()}},"Log Out")),c.a.createElement(M.b,{to:"/main/settings",activeClassName:"selected"},"Settings")))},q=n(39),B=n.n(q),X=Object(d.a)({form:"title"})((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:B.a.form,onSubmit:e.handleSubmit},c.a.createElement("h3",null,"Enter title"),c.a.createElement(m.a,{component:E,validate:[b,v],name:"title",placeholder:"String from soung"}),c.a.createElement("button",null," Next "),e.checkTtitle&&c.a.createElement("div",{className:B.a.error},"this title already exist ")))})),K=Object(d.a)({form:"description"})((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:B.a.form,onSubmit:e.handleSubmit},c.a.createElement("h1",null,"Enter description "),c.a.createElement(m.a,{component:g,cols:"40",rows:"10",className:B.a.textarea,validate:[b],name:"description"}),c.a.createElement("button",null," Submit")))})),H=function(e){var t=Object(o.useState)(1),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(o.useState)(null),l=Object(s.a)(i,2),u=l[0],m=l[1],d=Object(o.useState)(!1),p=Object(s.a)(d,2),_=p[0],f=p[1],j=Object(h.f)(),E=function(t){m(t.title),e.projectsList.find((function(e){return e.title===t.title}))?f(!0):r(a+1)},g=function(t){e.createUsersProject(u,t.description,e.token),r(a+1)};if(3===a&&setTimeout((function(){return j.push("/main/projects")}),2e3),!e.token)return c.a.createElement(h.a,{to:"/login"});return c.a.createElement(c.a.Fragment,null,function(){switch(a){case 1:return c.a.createElement(X,{checkTtitle:_,onSubmit:E});case 2:return c.a.createElement(K,{onSubmit:g});default:return c.a.createElement("div",null,"\u041f\u0440\u043e\u0435\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d")}}())},V={projectId:null},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-PROJECT-ID":return{projectId:t.projectId};default:return e}},Q=Object(u.b)((function(e){return{token:e.login.token,projectId:e.projectCreator.projectId,projectsList:e.projects.projectsList}}),{createUsersProject:function(e,t,n){return function(){var a=Object(y.a)(C.a.mark((function a(r){var o;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e,t,n),a.next=3,T(e,t,n);case 3:o=a.sent,r({type:"SET-PROJECT-ID",projectId:o.projectId});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(H),$=n(7),ee=n.n($),te=function(e){var t=Object(o.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1];return c.a.createElement("div",{className:ee.a.projects__container},c.a.createElement("div",{className:ee.a.projects__list},c.a.createElement("div",{className:ee.a.project__title},e.projectsList.title),c.a.createElement("div",{className:ee.a.project__button},c.a.createElement("button",{className:ee.a.button,onClick:function(){r(!a)}},"Expander"))),a&&c.a.createElement(ne,{setShow:r,token:e.token,removeUsersProject:e.removeUsersProject,editUserProject:e.editUserProject,projectsList:e.projectsList}))},ne=function(e){var t=Object(o.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(o.useState)("disable"),l=Object(s.a)(i,2),u=l[0],m=l[1],d=function(){e.setShow(!1),m("disable")};return c.a.createElement("div",{className:ee.a.project__info},a&&c.a.createElement(ae,{cancelDelete:function(){e.setShow(!1)},deleteProject:function(){e.removeUsersProject(e.projectsList._id,e.token),e.setShow(!1)}}),"disable"===u&&c.a.createElement("div",null,c.a.createElement("div",{className:ee.a.project__title},e.projectsList.title,c.a.createElement("div",null,c.a.createElement("button",{className:ee.a.button,onClick:function(){m("enable")}},"Edit")),c.a.createElement("div",null,c.a.createElement("button",{className:ee.a.button,onClick:function(e){r(!0)},type:"button",name:"button"},"Delete "))),c.a.createElement("div",{className:ee.a.project__description},e.projectsList.description)),"enable"===u&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(re,{onSubmit:function(t){e.editUserProject(t.titleEdit,t.descriptionEdit.trim(),e.projectsList._id,e.token),d()},projectsList:e.projectsList,initialValues:{titleEdit:e.projectsList.title,descriptionEdit:e.projectsList.description}}))))},ae=function(e){return c.a.createElement("div",{className:ee.a.modal},c.a.createElement("div",{className:ee.a.modal__window},c.a.createElement("div",{className:ee.a.window__title},c.a.createElement("h3",null,"Do you really wanna delete the project")),c.a.createElement("div",{className:ee.a.window__button},c.a.createElement("div",{className:ee.a.window__button_action},c.a.createElement("button",{className:ee.a.button,onClick:function(){e.deleteProject()},type:"button",name:"button"},"Delete ")),c.a.createElement("div",{className:ee.a.window__button_action},c.a.createElement("button",{className:ee.a.button,onClick:function(){e.cancelDelete()},type:"button",name:"button"},"Cancel ")))))},re=Object(d.a)({form:"editForm",enableReinitialize:!0})((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:ee.a.form,onSubmit:e.handleSubmit},c.a.createElement(m.a,{component:E,validate:[b,v],name:"titleEdit"}),c.a.createElement(m.a,{component:g,cols:"40",rows:"10",className:ee.a.textarea,validate:[b],name:"descriptionEdit"}),c.a.createElement("button",null,"Submit")))})),oe=function(e){return Object(o.useEffect)((function(){e.getUsersProjects(e.token)}),[]),e.token?c.a.createElement("div",{className:ee.a.projects},e.projectsList.map((function(t,n){return c.a.createElement(te,{key:n,status:e.status,removeUsersProject:e.removeUsersProject,getUsersProjects:e.getUsersProjects,token:e.token,editUserProject:e.editUserProject,projectsList:t})}))):c.a.createElement(h.a,{to:"/login"})},ce={token:null,projectsList:[],status:null},ie=function(e){return{type:"GET_USERS_PROJECTS",data:e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS_PROJECTS":return{projectsList:t.data};case"EDIT_STATUS":return Object(L.a)(Object(L.a)({},e),{},{status:t.status});default:return e}},se=Object(u.b)((function(e){return{token:e.login.token,projectsList:e.projects.projectsList,status:e.projects.status}}),{getUsersProjects:function(e){return function(){var t=Object(y.a)(C.a.mark((function t(n){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:a=t.sent,n(ie(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},editUserProject:function(e,t,n,a){return function(){var r=Object(y.a)(C.a.mark((function r(o){var c;return C.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,F(e,t,n,a);case 2:c=r.sent,o(ie(c));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},removeUsersProject:function(e,t){return function(){var n=Object(y.a)(C.a.mark((function n(a){var r;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A(e,t);case 2:r=n.sent,a(ie(r));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(oe),ue=n(111),me=n.n(ue),de=function(e){var t=Object(o.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1];return c.a.createElement("div",{className:me.a.settings},c.a.createElement("input",{type:"checkbox",name:"name",onChange:function(){r(!a),e.triggerSearch(a)}}),c.a.createElement("span",null,"Light/Dark"))},pe=n(55),_e=n.n(pe),fe=function(e){return c.a.createElement("div",{className:_e.a.main},c.a.createElement("div",{className:_e.a.main__sidebar},c.a.createElement(Z,null)),c.a.createElement("div",{className:_e.a.main__general},c.a.createElement(h.b,{path:"/main/create-project",component:Q}),c.a.createElement(h.b,{path:"/main/projects",render:function(){return c.a.createElement(c.a.Suspense,null,c.a.createElement(se,null))}}),c.a.createElement(h.b,{path:"/main/settings",render:function(){return c.a.createElement(c.a.Suspense,null,c.a.createElement(de,{triggerSearch:e.triggerSearch}))}})))},je=n(6),Ee=n(112),ge=n(242),be=Object(je.c)({projectCreator:Y,login:J,projects:le,form:ge.a}),ve=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),he=Object(je.d)(be,ve,Object(je.a)(Ee.a));he.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log(n)}}(he.getState())})),window.store=he;var Se=he,we=function(){var e=Object(o.useState)(!0),t=Object(s.a)(e,2),n=t[0],a=t[1],r=function(e){localStorage.setItem("mode",e),a(e)};return c.a.createElement("div",{className:n?"container_light":"container_dark"},c.a.createElement(M.a,{basename:"/project-app"},c.a.createElement(u.a,{store:Se},c.a.createElement(h.b,{exact:!0,path:"/",render:function(){return c.a.createElement(h.a,{to:"/login"})}}),c.a.createElement("div",null,c.a.createElement(h.b,{path:"/login",render:function(){return c.a.createElement(c.a.Suspense,null,c.a.createElement("div",{class:"container__login"},c.a.createElement(z,null)))}})),c.a.createElement("div",null,c.a.createElement(h.b,{path:"/main",render:function(){return c.a.createElement(c.a.Suspense,null,c.a.createElement("div",{className:"container__main"},c.a.createElement(fe,{triggerSearch:r})))}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,n){e.exports={form:"project-creator_form__3OKLZ",message:"project-creator_message__k2z4N",container:"project-creator_container__35A-A",info:"project-creator_info__hS9br",textarea:"project-creator_textarea__3dC2h",error:"project-creator_error__35AWh"}},52:function(e,t,n){e.exports={form_control:"form-control_form_control__1RMN8",error:"form-control_error__218LK"}},53:function(e,t,n){e.exports={login__page:"login_login__page__qgthF",form:"login_form__Fv0Ml",message:"login_message__2PgTH",container:"login_container__uZxKL",info:"login_info__3cpon"}},55:function(e,t,n){e.exports={main:"main_main__3A9qg",main__sidebar:"main_main__sidebar__cU6C8",main__general:"main_main__general__5rodv"}},7:function(e,t,n){e.exports={projects:"project-general_projects__3kxkZ",projects__list:"project-general_projects__list__3cPdw",project__button:"project-general_project__button__1uOnt",button:"project-general_button__w-v8b",project__title:"project-general_project__title__1i0Gd",form:"project-general_form__3MrXX",message:"project-general_message__1jV2C",textarea:"project-general_textarea__auZGE",project__info:"project-general_project__info__2Qh6U",project__description:"project-general_project__description__92Iu8",modal:"project-general_modal__xj-aJ",modal__window:"project-general_modal__window__2dUx-",window__button:"project-general_window__button__BkcYn",window__title:"project-general_window__title__3aStG",active:"project-general_active__3eBHX"}}},[[113,1,2]]]);
//# sourceMappingURL=main.0e8cbfb1.chunk.js.map
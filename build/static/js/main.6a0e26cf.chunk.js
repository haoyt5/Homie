(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){},272:function(e,t,a){e.exports=a(542)},542:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(267),s=a.n(o),l=(a(178),a(5)),c=a(6),i=a(9),u=a(7),m=a(10),p=a(15),d=a(51),h=a(8),g=a(21),E=Object(h.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){var t=e.profile;return n.a.createElement("div",{className:"signinwrapper"},n.a.createElement(p.c,{to:"/post",className:"link-button"},"New Task"),n.a.createElement("a",{href:"/",className:"link-button",onClick:e.signOut},"Log out"),n.a.createElement(p.c,{to:"/",className:"avatar-circle"},t.initials))}),b=function(){return n.a.createElement("div",{className:"signinwrapper"},n.a.createElement(p.c,{to:"/signup",className:"link-button"},"Sign up"),n.a.createElement(p.c,{to:"/signin",className:"link-button "},"Log in"))},f=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.profile,r=t.uid?n.a.createElement(E,{profile:a}):n.a.createElement(b,null);return n.a.createElement("nav",{className:"navwrappe"},n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{to:"/",className:"brandname"},"HOMIE"),r))}}]),t}(r.Component),N=Object(h.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(f),v=a(26),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?n.a.createElement(d.a,{to:"/"}):n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"sub-instruciton-title"},"Member Login"),n.a.createElement("div",{className:"formoutter"},n.a.createElement("div",{className:"formwrapper"},n.a.createElement("div",{className:"button-row"},n.a.createElement("button",{className:"google-button"},n.a.createElement("div",{className:"login-icon"},"G"),n.a.createElement("div",{className:"login-text"},"Continue with Google"))),n.a.createElement("div",{className:"feature-row"},n.a.createElement("div",{className:"hr-box "},n.a.createElement("div",{className:"hr-placer"},"\u2014\u2014\u2014"),n.a.createElement("div",{className:"hr"},"OR"),n.a.createElement("div",{className:"hr-placer"},"\u2014\u2014\u2014"))),n.a.createElement("form",{className:"signinform",onSubmit:this.handleSubmit},n.a.createElement("label",{className:"label-font",htmlFor:"email"},"Email"),n.a.createElement("div",{className:"input-row"},n.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),n.a.createElement("label",{className:"label-font",htmlFor:"password"},"Password"),n.a.createElement("div",{className:"input-row"},n.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),n.a.createElement("div",{className:"text-row error-holder"},t?n.a.createElement("p",{className:"alert-font"},t):null),n.a.createElement("div",{className:"feature-row"},n.a.createElement("button",{className:"medium-button"},"Log in"))))))}}]),t}(r.Component),w=Object(h.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,r){(0,r.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(O),y=a(24),j=Object(y.b)(),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state),j.push("/signgroup/signup")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.props.authError;return n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"sub-instruciton-title"},"Start with Homie"),n.a.createElement("div",{className:"formoutter"},n.a.createElement("div",{className:"formwrapper"},n.a.createElement("div",{className:"button-row"},n.a.createElement("button",{className:"google-button"},n.a.createElement("div",{className:"login-icon"},"G"),n.a.createElement("div",{className:"login-text"},"Sign up with Google"))),n.a.createElement("div",{className:"feature-row"},n.a.createElement("div",{className:"hr-box "},n.a.createElement("div",{className:"hr-placer"},"\u2014\u2014\u2014"),n.a.createElement("div",{className:"hr"},"OR"),n.a.createElement("div",{className:"hr-placer"},"\u2014\u2014\u2014"))),n.a.createElement("form",{className:"signinform",onSubmit:this.handleSubmit},n.a.createElement("label",{className:"label-font",htmlFor:"email"},"Email"),n.a.createElement("div",{className:"input-row"},n.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),n.a.createElement("label",{className:"label-font",htmlFor:"password"},"Password"),n.a.createElement("div",{className:"input-row"},n.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),n.a.createElement("label",{className:"label-font",htmlFor:"firstName"},"First name"),n.a.createElement("div",{className:"input-row"},n.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),n.a.createElement("label",{className:"label-font",htmlFor:"lastName"},"Last name"),n.a.createElement("div",{className:"input-row"},n.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),n.a.createElement("div",{className:"text-row error-holder"},e?n.a.createElement("p",{className:"alert-font"},e):null),n.a.createElement("div",{className:"feature-row"},n.a.createElement("button",{className:"medium-button"},"Sign Up"))))))}}]),t}(r.Component),C=Object(h.b)(function(e){return console.log(e),{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,r){var n=r.getFirebase,o=r.getFirestore,s=n(),l=o();s.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return l.collection("users").doc(t.user.uid).set({firstname:e.firstName,lastname:e.lastName,initials:e.firstName[0]+e.lastName[0],email:e.email,groupsId:[]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(S),I=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.task;return n.a.createElement("div",{className:"tasklist-wapper"},n.a.createElement("div",{className:"container "},e&&e.map(function(e){return n.a.createElement(p.b,{to:"/task/"+e.id,key:e.id},n.a.createElement("div",{className:"task-card"},n.a.createElement("h3",null,e.title),n.a.createElement("p",{className:"expirydate"},n.a.createElement("span",{className:"expirydate-title"},"Expiry Date | Wed 19 / 04 / 2019 ")),n.a.createElement("p",null,e.content),n.a.createElement("span",{className:"expirydate-title"},"Posted by | ",e.author," "),n.a.createElement("span",{className:"expirydate-title"},"Posted at | ",e.createAt.toDate().toDateString())))})))}}]),t}(r.Component),k=a(38),R=a(25),G=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.props.tasks;return n.a.createElement("div",{className:"dashboard-wapper"},n.a.createElement("div",{className:"container"},n.a.createElement("h3",{className:"title"},"PENDING TASK"),n.a.createElement(I,{task:e})))}}]),t}(r.Component),U=Object(R.compose)(Object(h.b)(function(e){return{tasks:e.firestore.ordered.tasks}}),Object(k.firestoreConnect)([{collection:"tasks"}]))(G),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={title:"",content:"",expiryDate:""},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createTask(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"sub-instruciton-title"},"Post a task"),n.a.createElement("form",{className:"signinform",onSubmit:this.handleSubmit},n.a.createElement("label",{className:"label-font",htmlFor:"title"},"Title"),n.a.createElement("div",{className:"task-input-row"},n.a.createElement("input",{type:"test",id:"title",onChange:this.handleChange})),n.a.createElement("label",{className:"label-font",htmlFor:"expiryDate"},"Expiry Date"),n.a.createElement("div",{className:"task-input-row"},n.a.createElement("input",{type:"text",id:"expiryDate",onChange:this.handleChange})),n.a.createElement("label",{className:"label-font",htmlFor:"content"},"Description"),n.a.createElement("div",{className:"textarea-row"},n.a.createElement("textarea",{type:"text",id:"content",onChange:this.handleChange})),n.a.createElement("div",{className:"feature-row"},n.a.createElement("button",{className:"medium-square-button"},"Save"))))}}]),t}(r.Component),x=Object(h.b)(null,function(e){return{createTask:function(t){return e(function(e){return function(t,a,r){r.getFirebase;var n=(0,r.getFirestore)(),o=a().firebase.profile,s=a().firebase.auth.uid;n.collection("tasks").add(Object(g.a)({},e,{author:o.firstname,authorUid:s,grouprUid:"{groupUid}",category:"{category}",createAt:new Date,verification:{byOther:[{checkbox:"false",reviewerId:"null"}],byImage:[{checkbox:"false",url:"null"}]}})).then(function(){t({type:"CREATE_TASK",task:e})}).catch(function(e){t({type:"CREATE_TASK_ERROR",err:e})})}}(t))}}})(P),F=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id;if(this.props.task){var t=this.props.task,a=t.author,r=t.content,o=t.title;return n.a.createElement("div",{className:"taskdetails-wrapper",key:e},n.a.createElement("div",{className:"container "},n.a.createElement("div",{className:"task-card"},n.a.createElement("h2",{className:"title"},o),n.a.createElement("p",{className:"expirydate"},"Expiry Date | Wed"),n.a.createElement("p",{className:"expirydate"},"Posted by | ",a),n.a.createElement("p",null,r),n.a.createElement("button",null,"Accept"))))}return n.a.createElement("div",{className:"container"},n.a.createElement("p",null,"Loading ..."))}}]),t}(r.Component),T=Object(R.compose)(Object(h.b)(function(e,t){var a=t.match.params.id,r=e.firestore.data.tasks;return{task:r?r[a]:null}}),Object(k.firestoreConnect)([{collection:"tasks"}]))(F),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={groupName:"",groupId:"",groupPassword:""},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),0!==a.state.groupName.length&&0!==a.state.groupId.length&&0!==a.state.groupPassword.length?a.state.groupName.length>0&&a.state.groupId.length>0&&a.state.groupPassword.length>0&&(document.querySelector(".error-holder").innerHTML="",a.props.signUpGroup(a.state)):document.querySelector(".error-holder").innerHTML='<p class="alert-font">All fields are required</p>'},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"formoutter"},n.a.createElement("div",{className:"formwrapper-bottom"},n.a.createElement("form",{className:"signinform",onSubmit:this.handleSubmit},n.a.createElement("label",{className:"label-font",htmlFor:"groupName"},"Group Name"),n.a.createElement("div",{className:"input-row"},n.a.createElement("input",{type:"text",id:"groupName",onChange:this.handleChange})),n.a.createElement("label",{className:"label-font",htmlFor:"groupId"},"Group ID"),n.a.createElement("div",{className:"input-row"},n.a.createElement("input",{type:"text",id:"groupId",onChange:this.handleChange})),n.a.createElement("label",{className:"label-font",htmlFor:"groupPassword"},"Group Password"),n.a.createElement("div",{className:"input-row"},n.a.createElement("input",{type:"password",id:"groupPassword",onChange:this.handleChange})),n.a.createElement("div",{className:"text-row error-holder"},this.props.groupError?n.a.createElement("p",{className:"alert-font"},this.props.groupError):null),n.a.createElement("div",{className:"feature-row"},n.a.createElement("button",{className:"medium-button"},"Create Group")))))}}]),t}(r.Component),_=Object(h.b)(function(e){return{auth:e.firebase.auth,groupError:e.auth.groupError}},function(e){return{signUpGroup:function(t){return e(function(e){return function(t,a,r){r.getFirebase;var n=(0,r.getFirestore)(),o=a().firebase.auth.uid,s=!0;n.collection("groups").where("groupId","==",e.groupId).get().then(function(e){e.forEach(function(e){e.data()&&(s=!1)})}).then(function(){s||t({type:"SIGNUPGROUP_ERROR"}),s&&n.collection("groups").add(Object(g.a)({},e,{members:n.FieldValue.arrayUnion(o)})).then(function(e){var t=e.id;n.collection("users").doc(o).update({groupsUid:n.FieldValue.arrayUnion(t)})}).then(t({type:"SIGNUPGROUP_SUCCESS"}))})}}(t))}}})(A),D=(a(432),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={groupId:"",groupPassword:""},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),0!==a.state.groupId.length&&0!==a.state.groupPassword.length?a.state.groupId.length>0&&a.state.groupPassword.length>0&&(document.querySelector(".error-holder").innerHTML="",a.props.signInGroup(a.state)):document.querySelector(".error-holder").innerHTML='<p class="alert-font">That was an invalid user id or password.</p>'},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"formoutter"},n.a.createElement("div",{className:"formwrapper-bottom"},n.a.createElement("form",{className:"signinform",onSubmit:this.handleSubmit},n.a.createElement("label",{className:"label-font",htmlFor:"groupId"},"Group ID"),n.a.createElement("div",{className:"input-row"},n.a.createElement("input",{type:"text",id:"groupId",onChange:this.handleChange})),n.a.createElement("label",{className:"label-font",htmlFor:"groupPassword"},"Password"),n.a.createElement("div",{className:"input-row"},n.a.createElement("input",{type:"password",id:"groupPassword",onChange:this.handleChange})),n.a.createElement("div",{className:"text-row error-holder"},this.props.groupError?n.a.createElement("p",{className:"alert-font"},this.props.groupError):null),n.a.createElement("div",{className:"feature-row"},n.a.createElement("button",{className:"medium-button"},"Join Group")))))}}]),t}(r.Component)),L=Object(h.b)(function(e){return{groupError:e.auth.groupError}},function(e){return{signInGroup:function(t){return e((a=t,function(e,t,r){r.getFirebase;var n=(0,r.getFirestore)(),o=t().firebase.auth.uid,s=!1,l=null;n.collection("groups").where("groupId","==",a.groupId).get().then(function(t){0===t.docs.length&&e({type:"SIGNINGROUP_NOTEXIST"}),1===t.docs.length&&t.forEach(function(t){if(t.data()){l=t.id;var r=t.data().groupPassword;r!==a.groupPassword&&e({type:"SIGNINGROUP_ERROR"}),r===a.groupPassword&&(s=!0)}})}).then(function(){s&&o&&n.collection("groups").doc(l).update({members:n.FieldValue.arrayUnion(o)}).then(function(){n.collection("users").doc(o).update({groupsUid:n.FieldValue.arrayUnion(l)})}).then(function(){console.log("signin group success!"),e({type:"SIGNINGROUP_SUCCESS"})})})}));var a}}})(D),H=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"sub-instruciton-title"},"Join the Homie Group"),n.a.createElement("div",{className:"formoutter"},n.a.createElement("div",{className:"formwrapper-top "},n.a.createElement("div",{className:"link-wrapper"},n.a.createElement(p.c,{className:"signgroup-tab",activeClassName:"signgroup-tab-active",to:"/signgroup/signup"},"Create Group"),n.a.createElement(p.c,{className:"signgroup-tab",activeClassName:"signgroup-tab-active",to:"/signgroup/signin"},"Join Group")))),n.a.createElement(d.b,{path:"/signgroup/signup",component:_}),n.a.createElement(d.b,{path:"/signgroup/signin",component:L}))},M=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",{className:"app"},n.a.createElement(N,null),n.a.createElement(d.d,null,n.a.createElement(d.b,{exact:!0,path:"/",component:U}),n.a.createElement(d.b,{path:"/signin",component:w}),n.a.createElement(d.b,{path:"/task/:id",component:T}),n.a.createElement(d.b,{path:"/signup",component:function(){return n.a.createElement(C,null)}}),n.a.createElement(d.b,{path:"/post",component:x}),n.a.createElement(d.b,{path:"/signgroup",component:H}))))}}]),t}(n.a.Component),J=a(270),K={authError:null,groupError:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(g.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(g.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success and login"),Object(g.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),console.log(t),Object(g.a)({},e,{authError:t.err.message});case"SIGNINGROUP_SUCCESS":return console.log("signin group success"),Object(g.a)({},e,{groupError:null});case"SIGNINGROUP_NOTEXIST":return console.log("This group id was not exist"),Object(g.a)({},e,{groupError:"This group id was not exist"});case"SIGNINGROUP_ERROR":return console.log("The password is incorrect"),Object(g.a)({},e,{groupError:"That was an invalid password"});case"SIGNUPGROUP_SUCCESS":return console.log("signup group success"),Object(g.a)({},e,{groupError:null});case"SIGNUPGROUP_ERROR":return console.log("signup group error"),Object(g.a)({},e,{groupError:"This group id has already been used"});default:return e}},W={tasks:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TASK":return console.log("create task",t.task),e;case"CREATE_TASK_ERROR":return console.log("create task",t.err),e;default:return e}},z=a(78),B=Object(R.combineReducers)({auth:q,task:V,firestore:z.firestoreReducer,firebase:k.firebaseReducer}),X=a(271),Y=a(175),Z=a.n(Y);a(536),a(540);Z.a.initializeApp({apiKey:"AIzaSyAPYaJoMlKsJ6iepxr8uWw4ZE1aPlH6rvI",authDomain:"homie-2019.firebaseapp.com",databaseURL:"https://homie-2019.firebaseio.com",projectId:"homie-2019",storageBucket:"homie-2019.appspot.com",messagingSenderId:"769792607981"});var Q=Z.a,$=Object(R.createStore)(B,Object(J.composeWithDevTools)(Object(R.applyMiddleware)(X.a.withExtraArgument({getFirestore:z.getFirestore,getFirebase:k.getFirebase})),Object(z.reduxFirestore)(Q),Object(k.reactReduxFirebase)(Q,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0,firebaseStateName:"firebase"})));$.firebaseAuthIsReady.then(function(){s.a.render(n.a.createElement(h.a,{store:$},n.a.createElement(M,null)),document.getElementById("root"))})}},[[272,1,2]]]);
//# sourceMappingURL=main.6a0e26cf.chunk.js.map
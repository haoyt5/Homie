(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){},272:function(e,t,a){e.exports=a(540)},540:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(267),l=a.n(i),c=(a(178),a(14)),o=a(15),s=a(17),u=a(16),m=a(18),p=a(21),h=a(49),d=a(22),b=Object(d.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){var t=e.profile;return r.a.createElement("div",{className:"signinwrapper"},r.a.createElement(p.c,{to:"/post"},"New Task"),r.a.createElement("a",{href:"/",onClick:e.signOut},"Log Out"),r.a.createElement(p.c,{to:"/",className:"avatar-circle"},t.initials))}),E=function(){return r.a.createElement("div",{className:"signinwrapper"},r.a.createElement(p.c,{to:"/signup"},"Sign Up"),r.a.createElement(p.c,{to:"/signin"},"Log In"))},f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){console.log(this.props.auth)}},{key:"render",value:function(){var e=this.props,t=e.auth,a=e.profile,n=t.uid?r.a.createElement(b,{profile:a}):r.a.createElement(E,null);return r.a.createElement("nav",{className:"navwrapper"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{to:"/",className:"brandname"},"HOMIE"),n))}}]),t}(n.Component),g=Object(d.b)(function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}})(f),O=a(40),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"signinform",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-row"},r.a.createElement("button",{className:"btn login-btn"},"Sign In"),r.a.createElement("div",{className:"input-row"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),N=Object(d.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(v),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"signinform",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"firstName"},"Firstname"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"lastName"},"Lastname"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-row"},a?r.a.createElement("p",{className:"alert-font"},a):null),r.a.createElement("div",{className:"input-row"},r.a.createElement("button",{className:"btn login-btn"},"Sign Up"))))}}]),t}(n.Component),S=Object(d.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,i=n.getFirestore,l=r(),c=i();l.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return c.collection("users").doc(t.user.uid).set({firstname:e.firstName,lastname:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(j),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tasklist-wapper"},r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"task-card"},r.a.createElement("h3",null,"Task Name"),r.a.createElement("p",{className:"expirydate"},r.a.createElement("span",{className:"expirydate-title"},"Expiry Date "),"Wed 19 / 04 / 2019"),r.a.createElement("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ")),r.a.createElement("div",{className:"task-card"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu")))}}]),t}(n.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard-wapper"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"title"},"PENDING TASK"),r.a.createElement(y,null)))}}]),t}(n.Component),C=a(50),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:"",expiryDate:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"title"},"POST A TASK"),r.a.createElement("form",{className:"signinform",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"test",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"expiryDate"},"Expiry Date"),r.a.createElement("input",{type:"text",id:"expiryDate",onChange:this.handleChange})),r.a.createElement("div",{className:"input-row"},r.a.createElement("label",{htmlFor:"content"},"Description"),r.a.createElement("textarea",{type:"text",id:"content",onChange:this.handleChange})),r.a.createElement("div",{className:"input-row"},r.a.createElement("button",{className:"btn login-btn"},"SAVE"))))}}]),t}(n.Component),I=Object(d.b)(null,function(e){return{createTask:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("projects").add(Object(C.a)({},e)).then(function(){t({type:"CREATE_TASK",task:e})}).catch(function(e){t({type:"CREATE_TASK_ERROR",err:e})})}}(t))}}})(F),R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(g,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:w}),r.a.createElement(h.b,{path:"/signin",component:N}),r.a.createElement(h.b,{path:"/signup",component:function(){return r.a.createElement(S,null)}}),r.a.createElement(h.b,{path:"/post",component:I}))))}}]),t}(r.a.Component),x=a(39),U=a(270),k={authError:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(C.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(C.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success and login"),Object(C.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),console.log(t),Object(C.a)({},e,{authError:t.err.message});default:return e}},D=a(78),P=Object(x.combineReducers)({auth:A,firebase:D.firebaseReducer}),T=a(271),_=a(174),G=a(175),L=a.n(G);a(534),a(538);L.a.initializeApp({apiKey:"AIzaSyAPYaJoMlKsJ6iepxr8uWw4ZE1aPlH6rvI",authDomain:"homie-2019.firebaseapp.com",databaseURL:"https://homie-2019.firebaseio.com",projectId:"homie-2019",storageBucket:"homie-2019.appspot.com",messagingSenderId:"769792607981"});var q=L.a,K=Object(x.createStore)(P,Object(U.composeWithDevTools)(Object(x.applyMiddleware)(T.a.withExtraArgument({getFirestore:_.getFirestore,getFirebase:D.getFirebase})),Object(_.reduxFirestore)(q),Object(D.reactReduxFirebase)(q,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0,firebaseStateName:"firebase"})));K.firebaseAuthIsReady.then(function(){l.a.render(r.a.createElement(d.a,{store:K},r.a.createElement(R,null)),document.getElementById("root"))})}},[[272,1,2]]]);
//# sourceMappingURL=main.ed16ac38.chunk.js.map
(this["webpackJsonpeval-code-1"]=this["webpackJsonpeval-code-1"]||[]).push([[0],{23:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(20),s=c.n(r),j=(c(41),c(8)),o=c(3),a=(c(23),c(42),c(0));function b(){return Object(a.jsx)("div",{className:"back",children:Object(a.jsx)("h1",{children:"Movie Buffs"})})}var h=function(){var e=Object(o.g)();return Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){return e.goBack()},children:"Back"})})},l=c(13),d=c(4),u=c(11),O=c.n(u),x=c(14),p=c.n(x),v=c(17),f="SUBMIT",m=function(e){return{type:f,token:e}};function A(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),s=Object(d.a)(r,2),b=s[0],h=s[1],u=Object(n.useState)(!1),x=Object(d.a)(u,2),v=x[0],f=x[1];console.log("book",b),Object(n.useEffect)((function(){g()}),[]);var m=function(){f(!0)},A={display:"flex",justifyContent:"space-between",margin:"auto 35%",border:"1px solid black",background:"#be9191",padding:"1%"},g=function(){var e=Object(l.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("http://localhost:2345/users").then((function(e){return i(e.data.movies)}));case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("error:",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[0===b.length?Object(a.jsx)("div",{}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Booked"}),Object(a.jsxs)("div",{style:A,children:[Object(a.jsx)("h5",{children:b.title}),Object(a.jsx)("h5",{children:b.time})]})]}),Object(a.jsx)("h1",{children:"Movie"}),Object(a.jsxs)("div",{style:A,children:[Object(a.jsx)("h5",{children:"Movie"}),Object(a.jsx)("h5",{children:"Show Time"})]}),c.map((function(e){return Object(a.jsxs)("div",{style:A,children:[Object(a.jsxs)("h5",{children:[Object(a.jsx)(j.b,{to:"/movies/".concat(e.id),children:e.name}),v?Object(a.jsx)(o.a,{to:"/qr"}):"",Object(a.jsx)(a.Fragment,{children:" "}),e.id===b.id?Object(a.jsx)("button",{onClick:m,children:"Download Ticket"}):Object(a.jsx)("button",{onClick:function(){setTimeout((function(){alert("You have Booked"),h(e)}),2e3)},children:"Book now"})]}),Object(a.jsx)("p",{children:e.time})]},e.id)})),";"]})}function g(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),s=Object(d.a)(r,2),o=s[0],b=s[1];Object(n.useEffect)((function(){u()}),[]);var h={display:"flex",justifyContent:"space-between",margin:"auto 35%",border:"1px solid black",background:"#be9191",padding:"1%"},u=function(){var e=Object(l.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("http://localhost:2345/users").then((function(e){return i(e.data.movies)}));case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("error:",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[0===o.length?Object(a.jsx)("div",{}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Booked"}),Object(a.jsxs)("div",{style:h,children:[Object(a.jsx)("h5",{children:o.title}),Object(a.jsx)("h5",{children:o.time})]})]}),Object(a.jsx)("h1",{children:"Shows"}),Object(a.jsxs)("div",{style:h,children:[Object(a.jsx)("h5",{children:"Show"}),Object(a.jsx)("h5",{children:"Show Time"})]}),c.map((function(e){return Object(a.jsxs)("div",{style:h,children:[Object(a.jsx)("img",{src:e.url,alt:""}),Object(a.jsxs)("h5",{children:[Object(a.jsx)(j.b,{to:"/shows/".concat(e.id),children:e.name}),Object(a.jsx)(a.Fragment,{children:" "}),e.id===o.id?Object(a.jsx)("button",{children:"Download Ticket"}):Object(a.jsx)("button",{onClick:function(){setTimeout((function(){alert("You have Booked"),b(e)}),2e3)},children:"Book now"})]}),Object(a.jsx)("p",{children:e.time})]},e.id)})),";"]})}function w(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e})),c=t.token,i=Object(n.useState)(""),r=Object(d.a)(i,2),s=r[0],j=r[1],o=Object(n.useState)(""),b=Object(d.a)(o,2),h=b[0],u=b[1],x=Object(n.useState)(""),f=Object(d.a)(x,2);f[0],f[1];return c?Object(a.jsxs)("div",{children:[Object(a.jsx)(A,{}),Object(a.jsx)(g,{})]}):Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h4",{children:"Login to continue"}),Object(a.jsx)("label",{htmlFor:"em",children:"Email"}),Object(a.jsx)("input",{type:"text",id:"em",onChange:function(e){j(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"ps",children:"Password"}),Object(a.jsx)("input",{type:"text",id:"ps",onChange:function(e){u(e.target.value)}}),Object(a.jsx)("button",{onClick:Object(l.a)(O.a.mark((function t(){var c,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={email:s,password:h},t.next=3,p.a.post("https://reqres.in/api/login",c);case 3:n=t.sent,e(m(n));case 5:case"end":return t.stop()}}),t)}))),children:"Submit"}),Object(a.jsx)("pre",{children:"email:eve.holt@reqres.in"}),Object(a.jsx)("pre",{children:"password:1234"})]})}function k(){var e=Object(o.h)().id,t=Object(n.useState)([]),c=Object(d.a)(t,2),i=c[0],r=c[1];Object(n.useEffect)((function(){fetch("http://localhost:2345/users/".concat(e)).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);return console.log("details:",i),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Movie Details"}),Object(a.jsxs)("div",{style:{border:"1px solid black",background:"#be9191",margin:"auto 20%"},children:[Object(a.jsx)("img",{src:i.url,alt:""}),Object(a.jsx)("h3",{children:i.name}),Object(a.jsx)("p",{children:i.genre})]})]})}function M(){return Object(a.jsx)("div",{children:Object(a.jsx)(g,{})})}function D(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:""})})}function Y(){var e=Object(o.h)().id,t=Object(n.useState)([]),c=Object(d.a)(t,2),i=c[0],r=c[1];Object(n.useEffect)((function(){fetch("http://localhost:2345/users/".concat(e)).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Movie Details"}),Object(a.jsxs)("div",{style:{border:"1px solid black",background:"#be9191",margin:"auto 20%"},children:[Object(a.jsx)("h3",{children:i.title}),Object(a.jsx)("p",{children:i.description})]})]})}var y=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(j.b,{to:"/",children:"About"}),Object(a.jsx)(j.b,{to:"/newshow",children:"Newshow"}),Object(a.jsx)(j.b,{to:"/dashboard",children:"Dashboard"}),Object(a.jsx)(j.b,{to:"/movies"}),Object(a.jsx)(h,{})]}),Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/",children:Object(a.jsx)(b,{})}),Object(a.jsx)(o.b,{exact:!0,path:"/newshow",children:Object(a.jsx)(M,{})}),Object(a.jsx)(o.b,{exact:!0,path:"/dashboard",children:Object(a.jsx)(w,{})}),Object(a.jsx)(o.b,{exact:!0,path:"/movies/:id",children:Object(a.jsx)(k,{})}),Object(a.jsx)(o.b,{exact:!0,path:"/shows/:id",children:Object(a.jsx)(Y,{})}),Object(a.jsx)(o.b,{exact:!0,path:"/qr",children:Object(a.jsx)(D,{})})]})]})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))},F=c(36),C=c(15);function S(e,t){localStorage.setItem(e,JSON.stringify(t))}var z={token:function(e){try{var t=localStorage.getItem(e);return t=JSON.parse(t)}catch(c){return}}("")},E=Object(F.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.token;return c===f?(S("token",n),Object(C.a)(Object(C.a)({},e),{},{token:n})):e}));console.log(E.getState()),s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(v.a,{store:E,children:Object(a.jsx)(j.a,{children:Object(a.jsx)(y,{})})})}),document.getElementById("root")),B()}},[[69,1,2]]]);
//# sourceMappingURL=main.2a8cf093.chunk.js.map
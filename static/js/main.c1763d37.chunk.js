(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(25),s=n.n(r),i=(n(33),n(28)),o=n(2),u=n(6),h=n.n(u),j=n(10),l=(n(35),n(7)),d=n.n(l),b="https://nyf7qy1xfj.execute-api.us-east-1.amazonaws.com/dev",p=n(1),f=function(e){var t=e.history,n=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("".concat(b,"/checkout"));case 2:t=e.sent,window.location.href=t.data.url;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"home-container",children:Object(p.jsxs)("div",{className:"home-text-container",children:[Object(p.jsx)("h1",{children:"Monetized API"}),Object(p.jsx)("p",{children:"If you are interested in signing up for this API, you will have to put a credit card on file through Stripe's API. In return you will get an API Key that you can use to start using this API."}),Object(p.jsx)("button",{onClick:n,children:"Get Started"}),Object(p.jsx)("h1",{children:"Already a Subscriber?"}),Object(p.jsx)("button",{onClick:function(){t.push("/use-api")},children:"Click Here to use the API"})]})})},x=n(8),O=(n(55),function(e){var t=e.location,n=e.history,a=Object(c.useState)(""),r=Object(x.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),u=Object(x.a)(o,2),h=u[0],j=u[1];return Object(c.useEffect)((function(){var e=new URLSearchParams(t.search).get("session_id");d.a.get("".concat(b,"/apiKey"),{params:{session_id:e}}).then((function(e){i(e.data.name),j(e.data.apiKey)}))}),[t.search]),Object(p.jsx)("div",{className:"success-container",children:Object(p.jsxs)("div",{className:"success-text-container",children:[Object(p.jsx)("h1",{children:"Successful Checkout"}),Object(p.jsxs)("h3",{children:["Your API Key: ",h]}),Object(p.jsxs)("p",{children:["Thank you, ",s,", for purchasing this monetized API. Whenever you make an API call, include this API Key in your header so that your requests can be charged by usage."]}),Object(p.jsx)("button",{onClick:function(){n.push("/use-api")},children:"Use API"})]})})}),m=(n(56),function(){return Object(p.jsx)("div",{className:"error-container",children:Object(p.jsxs)("div",{className:"error-text-container",children:[Object(p.jsx)("h1",{children:"Something Went Wrong"}),Object(p.jsx)("p",{children:"There was a problem registering you for this monetized API. Please try again later."})]})})}),y=(n(57),function(){var e=new Intl.NumberFormat("en-us",{style:"currency",currency:"USD"}),t=Object(c.useState)(""),n=Object(x.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(x.a)(s,2),o=i[0],u=i[1],l=function(){var e=Object(j.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(""),t={"x-api-key":a},e.next=4,d.a.get("".concat(b,"/monetized"),{headers:t});case 4:n=e.sent,u(n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var t=Object(j.a)(h.a.mark((function t(){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(""),t.next=3,d.a.get("".concat(b,"/usage"),{params:{apiKey:a}});case 3:n=t.sent,c=e.format(n.data.amount_remaining/100),u("Invoice: ".concat(c));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"api-container",children:[Object(p.jsx)("h1",{children:"Use Monetized API"}),Object(p.jsx)("input",{placeholder:"Enter Your API Key",onChange:function(e){return r(e.target.value)}}),Object(p.jsxs)("div",{className:"btn-container",children:[Object(p.jsx)("button",{class:"api-button",onClick:l,children:"Submit API Call"}),Object(p.jsx)("button",{class:"api-button",onClick:f,children:"Get Usage Report"})]}),JSON.stringify(o)]})}),g=function(){return Object(p.jsx)("div",{style:{height:"100%",width:"100%"},children:Object(p.jsx)(i.a,{basename:"/monetized-api",children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(p.jsx)(o.a,{exact:!0,path:"/success",component:O}),Object(p.jsx)(o.a,{exact:!0,path:"/error",component:m}),Object(p.jsx)(o.a,{exact:!0,path:"/use-api",component:y})]})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),v()}},[[66,1,2]]]);
//# sourceMappingURL=main.c1763d37.chunk.js.map
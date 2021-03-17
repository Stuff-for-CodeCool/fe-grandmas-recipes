(this["webpackJsonpgrandmas-recipes"]=this["webpackJsonpgrandmas-recipes"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(17),s=(c(23),c(24),c(11)),r=c.n(s),i=c(14),l=c(7),j=c(8),o=c(2),b=c(0),d="https://codecoolfrontendapi.herokuapp.com/recipes",u=function(){var e=Object(o.f)().recipeId,t=Object(a.useState)(null),c=Object(l.a)(t,2)[1],n=Object(a.useState)(null),s=Object(l.a)(n,2),u=s[0],h=s[1],O=Object(a.useState)(null),m=Object(l.a)(O,2),p=m[0],x=m[1],v=Object(a.useState)(null),f=Object(l.a)(v,2),N=f[0],g=f[1],y=Object(a.useState)(null),S=Object(l.a)(y,2),k=S[0],w=S[1],C=Object(a.useState)(null),I=Object(l.a)(C,2),G=I[0],A=I[1],E=Object(a.useState)(null),L=Object(l.a)(E,2),D=L[0],F=L[1],J=Object(a.useState)(null),R=Object(l.a)(J,2),q=R[0],B=R[1];return Object(a.useEffect)((function(){(function(){var t=Object(i.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d+e);case 2:if(!(a=t.sent).ok){t.next=16;break}return t.next=6,a.json();case 6:n=(n=t.sent)[0],c(n.author),h(n.authorname),x(n.recipe),g(n.photos),w(n.quantities),A(n.units),F(n.ingredients),B(n.description);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:p}),Object(b.jsxs)("p",{className:"lead",children:["A recipe by ",Object(b.jsx)(j.b,{to:"/",children:u})]}),Object(b.jsx)("h5",{children:"Ingredients"}),Object(b.jsx)("div",{className:"row my-4",children:N?N.map((function(e,t){return Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("img",{src:e,alt:"",className:"img-thumbnail"})},t)})):null}),Object(b.jsx)("ul",{className:"list-group mb-4",children:k&&G&&D?k.map((function(e,t){return Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsxs)("strong",{children:[k[t]," ",G[t]]})," ",D[t]]},t)})):null}),Object(b.jsx)("h5",{children:"Directions"}),Object(b.jsx)("p",{children:q})]})},h=function(e){var t=e.author,c=e.authorname,a=e.id,n=e.name;return Object(b.jsx)("div",{className:"col p-3",children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:Object(b.jsx)(j.b,{to:"/recipe/"+a,children:n})}),Object(b.jsxs)("div",{className:"card-text",children:["A recipe by"," ",Object(b.jsx)(j.b,{to:"/author/"+t,children:c})]})]})})})},O=function(e){var t=e.name,c=e.recipes;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h1",{children:[t,"'s latest recipes"]}),Object(b.jsx)("div",{className:"row row-cols-1 row-cols-md-3",children:c?c.map((function(e,t){return Object(b.jsx)(h,{author:e.author,authorname:e.authorname,id:e.id,name:e.name},t)})):Object(b.jsx)("div",{className:"spinner-border text-info",children:Object(b.jsx)("span",{className:"visually-hidden",children:"Loading recipes..."})})})]})},m=function(e){var t=e.recipes,c=Object(o.f)().authorId,a=t.filter((function(e){return e.author===parseInt(c,10)})),n=a&&a[0]?a[0].authorname:"Grandma";return Object(b.jsx)(O,{name:n,recipes:a})},p=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),h=Object(l.a)(s,2),p=h[0],x=h[1],v=Object(a.useState)(""),f=Object(l.a)(v,2),N=f[0],g=f[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d);case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:c=e.sent,n(c),x(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(b.jsxs)(j.a,{children:[Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary bg-gradient",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(j.c,{className:"navbar-brand",to:"/",children:"Grandma's Recipes"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{id:"navigation",className:"collapse navbar-collapse",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.c,{className:"nav-link",activeClassName:"active",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.c,{className:"nav-link",activeClassName:"active",to:"/recipes/",children:"All recipes"})})]}),Object(b.jsx)("form",{className:"d-flex",children:Object(b.jsx)("input",{type:"search",placeholder:"Search",className:"form-control",name:"search",value:N,onChange:function(e){e.preventDefault();var t=e.target.value.toLowerCase();""===t?(g(""),x(c)):(x(c.filter((function(e){return e.name.toLowerCase().includes(t)}))),g(t))}})})]})]})}),Object(b.jsx)("div",{className:"container my-4",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/recipe/:recipeId/",children:Object(b.jsx)(u,{})}),Object(b.jsx)(o.a,{path:"/author/:authorId/",children:Object(b.jsx)(m,{recipes:p})}),Object(b.jsx)(o.a,{path:"/recipes/",children:Object(b.jsx)(O,{name:"Grandma",recipes:p})}),Object(b.jsx)(o.a,{exact:!0,path:"/",children:c?Object(b.jsx)(O,{name:"Grandma",recipes:N?p:c.slice(0,6)}):null})]})}),Object(b.jsx)("footer",{className:"mt-auto bg-secondary text-light",children:Object(b.jsx)("div",{className:"container fs-6 p-3",children:"Grandma's Recipes \xa9 2021 CodeCool"})})]})};Object(n.render)(Object(b.jsx)(a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.686e6018.chunk.js.map
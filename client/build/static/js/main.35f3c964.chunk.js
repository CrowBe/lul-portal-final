(this["webpackJsonptracker-app-frontend"]=this["webpackJsonptracker-app-frontend"]||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},37:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=a(7),i=a(3),u=Object(i.a)(),s=a(2),p=a.n(s),m=a(12),d=a(8),h=a(21),f=a.n(h),E=function(){return window.history.replaceState({},document.title,window.location.pathname)},g=r.a.createContext(),b=function(){return Object(n.useContext)(g)},v=function(e){var t=e.component,a=e.path,c=Object(m.a)(e,["component","path"]),l=b(),i=l.loading,u=l.isAuthenticated,s=l.loginWithRedirect;Object(n.useEffect)((function(){if(!i&&!u){p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.awrap(s({appState:{targetUrl:a}}));case 2:case"end":return e.stop()}}))}}),[i,u,s,a]);return r.a.createElement(o.a,Object.assign({path:a,render:function(e){return!0===u?r.a.createElement(t,e):null}},c))},w=a(6),x=function(){return r.a.createElement("nav",{id:"main-nav-bar"},r.a.createElement("span",null,r.a.createElement(w.a,{to:"/"},r.a.createElement("img",{src:"./assets/colour-logo.png",alt:"Logo"})),"\xa0"))},k=function(){var e=b(),t=e.isAuthenticated,a=e.loginWithRedirect,n=e.logout;return r.a.createElement("nav",{id:"portal-nav-bar"},!t&&r.a.createElement("button",{onClick:function(){return a({})}},"Log in"),t&&r.a.createElement("button",{onClick:function(){return n()}},"Log out"),t&&r.a.createElement("span",null,r.a.createElement(w.a,{to:"/portal"},"Home"),r.a.createElement(w.a,{to:"/portal/profile"},"Profile"),r.a.createElement(w.a,{to:"/portal/external-api"},"External API")))},y=a(17),O=function(){return r.a.createElement(y.a,{poster:"./assets/colour-logo.png"},r.a.createElement(y.a.Source,{src:"https://drive.google.com/file/d/17lqdAAMvUATZ_tYehANOA2d0NAebNPUL/view?usp=sharing",type:"video/mp4"}),"Your browser does not support this content")},j=function(){return r.a.createElement("section",{id:"about-section-container"},r.a.createElement("div",{id:"about-text-container"},r.a.createElement("div",{id:"about-section-summary"},r.a.createElement("h1",null,"Who We Are"),r.a.createElement("p",null,"A family owned business, providing a full range of Landscaping Services to the Central Coast, Lake Macquarie, Newcastle and The Hunter Valley")),r.a.createElement("div",{id:"about-section-values"},r.a.createElement("h1",null,"Our Values"),r.a.createElement("p",null,"We are committed to deliver a quality product with:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Integrity"),r.a.createElement("li",null,"Excellence"),r.a.createElement("li",null,"Genuine Care")))),r.a.createElement("div",{id:"about-icons-container"}))},A=function(e){var t=e.match;return console.log(t.url),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:t.url,exact:!0,component:O}),r.a.createElement(o.a,{path:"".concat(t.url,"about"),component:j}))},C=function(){var e=b(),t=e.loading,a=e.user;return console.log(a),t||!a?r.a.createElement("div",null,"Loading..."):r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:a.picture,alt:"Profile"}),r.a.createElement("h2",null,a.name),r.a.createElement("p",null,a.email))},S=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(d.a)(l,2),i=o[0],u=o[1],s=b().getTokenSilently;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"External API"),r.a.createElement("button",{onClick:function(){var e,t,a;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.a.awrap(s({audience:"https://lulauth/api",scope:"admin:all",redirect_uri:"http://localhost:3000/"}));case 3:return e=n.sent,console.log(e),n.next=7,p.a.awrap(fetch("http://localhost:3001/api/external",{headers:{Authorization:"Bearer ".concat(e)}}));case 7:return t=n.sent,console.log(t),n.next=11,p.a.awrap(t.json());case 11:a=n.sent,c(!0),u(a),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.error(n.t0);case 19:case"end":return n.stop()}}),null,null,[[0,16]])}},"Ping API"),a&&r.a.createElement("code",null,JSON.stringify(i,null,2)))},W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.b,{history:u},r.a.createElement("header",null,r.a.createElement(x,null),r.a.createElement(o.a,{path:"/portal",component:k})),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",component:A}),r.a.createElement(v,{path:"/portal/profile",component:C,exact:!0}),r.a.createElement(v,{path:"/portal/external-api",component:S,exact:!0}))))};a(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(24);a.n(R).a.config();l.a.render(r.a.createElement((function(e){var t=e.children,a=e.onRedirectCallback,c=void 0===a?E:a,l=Object(m.a)(e,["children","onRedirectCallback"]),o=Object(n.useState)(),i=Object(d.a)(o,2),u=i[0],s=i[1],h=Object(n.useState)(),b=Object(d.a)(h,2),v=b[0],w=b[1],x=Object(n.useState)(),k=Object(d.a)(x,2),y=k[0],O=k[1],j=Object(n.useState)(!0),A=Object(d.a)(j,2),C=A[0],S=A[1];Object(n.useEffect)((function(){!function(){var e,t,a,n,r;p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,p.a.awrap(f()(l));case 2:if(e=o.sent,O(e),!window.location.search.includes("code=")){o.next=10;break}return o.next=7,p.a.awrap(e.handleRedirectCallback());case 7:t=o.sent,a=t.appState,c(a);case 10:return o.next=12,p.a.awrap(e.isAuthenticated());case 12:if(n=o.sent,s(n),!n){o.next=19;break}return o.next=17,p.a.awrap(e.getUser());case 17:r=o.sent,w(r);case 19:S(!1);case 20:case"end":return o.stop()}}))}()}),[]);return r.a.createElement(g.Provider,{value:{isAuthenticated:u,user:v,loading:C,handleRedirectCallback:function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!0),t.next=3,p.a.awrap(y.handleRedirectCallback());case 3:return t.next=5,p.a.awrap(y.getUser());case 5:e=t.sent,S(!1),s(!0),w(e);case 9:case"end":return t.stop()}}))},getIdTokenClaims:function(){return y.getIdTokenClaims.apply(y,arguments)},loginWithRedirect:function(){return y.loginWithRedirect.apply(y,arguments)},getTokenSilently:function(){return y.getTokenSilently.apply(y,arguments)},logout:function(){return y.logout.apply(y,arguments)}}},t)}),{domain:"dev-lulapp.au.auth0.com",client_id:"zm32oLCwiQpWQWxdFIDbZPgy9fGeWB8v",redirect_uri:window.location.origin,onRedirectCallback:function(e){u.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)},audience:"https://lulauth/api"},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.35f3c964.chunk.js.map
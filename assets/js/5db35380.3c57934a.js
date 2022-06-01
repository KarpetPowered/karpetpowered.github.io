"use strict";(self.webpackChunkkarpetdocs=self.webpackChunkkarpetdocs||[]).push([[298],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),c=s(r),g=o,f=c["".concat(l,".").concat(g)]||c[g]||u[g]||a;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function g(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=c;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=t,d.mdxType="string"==typeof t?t:o,i[1]=d;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8601:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],d={sidebar_position:2},l="Port Forwarding",s={unversionedId:"getting-started/port-forward",id:"getting-started/port-forward",title:"Port Forwarding",description:"Allow people from outside your network to access the server",source:"@site/docs/getting-started/port-forward.md",sourceDirName:"getting-started",slug:"/getting-started/port-forward",permalink:"/docs/getting-started/port-forward",draft:!1,editUrl:"https://github.com/KarpetPowered/karpetpowered.github.io/tree/main/docs/getting-started/port-forward.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Loading a World",permalink:"/docs/getting-started/loading-world"},next:{title:"Karpet config",permalink:"/docs/getting-started/config"}},p={},u=[{value:"Recommending against port forwarding",id:"recommending-against-port-forwarding",level:2},{value:"Routers",id:"routers",level:2},{value:"Ports you need to forward",id:"ports-you-need-to-forward",level:2}],c={toc:u};function g(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"port-forwarding"},"Port Forwarding"),(0,a.kt)("p",null,"Allow people from outside your network to access the server"),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"DO NOT PROCEED UNLESS YOU KNOW WHAT YOU ARE DOING!!!!")),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"PORT FORWARDING CAN CAUSE UNINTENDED SECURITY RISKS TO YOUR COMPUTER")))),(0,a.kt)("h2",{id:"recommending-against-port-forwarding"},"Recommending against port forwarding"),(0,a.kt)("p",null,"Its not generally recommended to port forward a computer on your own network. Any vunrability in the code could lead to hackers taking advantage of it and taking personal data. Instead use a reverse proxy, or buy a VPS."),(0,a.kt)("h2",{id:"routers"},"Routers"),(0,a.kt)("p",null,"Theres alot of routers out there, so this tutorial will not show you how to use the router config settings, but instead tell you what you need to do generally."),(0,a.kt)("h2",{id:"ports-you-need-to-forward"},"Ports you need to forward"),(0,a.kt)("p",null,"Without these ports being forwarded, the server will not be able to be connected to."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Port"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Minecraft Server"),(0,a.kt)("td",{parentName:"tr",align:null},"25565")))))}g.isMDXComponent=!0}}]);
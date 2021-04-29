(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(187)),p={id:"api_mojang.getmultipleuuids",title:"Function: getMultipleUUIDs",sidebar_label:"getMultipleUUIDs",custom_edit_url:null},o={unversionedId:"api/functions/api_mojang.getmultipleuuids",id:"api/functions/api_mojang.getmultipleuuids",isDocsHomePage:!1,title:"Function: getMultipleUUIDs",description:"api/Mojang.getMultipleUUIDs",source:"@site/docs/api/functions/api_mojang.getmultipleuuids.md",sourceDirName:"api/functions",slug:"/api/functions/api_mojang.getmultipleuuids",permalink:"/MC-API/docs/api/functions/api_mojang.getmultipleuuids",editUrl:null,version:"current",sidebar_label:"getMultipleUUIDs",frontMatter:{id:"api_mojang.getmultipleuuids",title:"Function: getMultipleUUIDs",sidebar_label:"getMultipleUUIDs",custom_edit_url:null},sidebar:"api",previous:{title:"Function: getMojangStatus",permalink:"/MC-API/docs/api/functions/api_mojang.getmojangstatus"},next:{title:"Function: getNameHistory",permalink:"/MC-API/docs/api/functions/api_mojang.getnamehistory"}},l=[],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/MC-API/docs/api/modules/api_mojang"},"api/Mojang"),".getMultipleUUIDs"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getMultipleUUIDs"),"(",Object(i.b)("inlineCode",{parentName:"p"},"name"),": ",Object(i.b)("em",{parentName:"p"},"string"),"[]): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/MC-API/docs/api/classes/typings.player"},Object(i.b)("em",{parentName:"a"},"Player")),"[]",">"),Object(i.b)("p",null,"Fetch multiple UUIDs by player names"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"throws"))," When trying to request more than 10 players at a time"),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string"),"[]"),Object(i.b)("td",{parentName:"tr",align:"left"},"An array of player name (max 10 per request)")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/MC-API/docs/api/classes/typings.player"},Object(i.b)("em",{parentName:"a"},"Player")),"[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/eve0415/MC-API/blob/63dbf1b/src/api/Mojang/profile.ts#L23"},"api/Mojang/profile.ts:23")))}u.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,f=b["".concat(p,".").concat(m)]||b[m]||s[m]||i;return n?a.a.createElement(f,o(o({ref:t},c),{},{components:n})):a.a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
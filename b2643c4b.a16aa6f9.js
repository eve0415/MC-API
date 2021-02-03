(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(184)),c={id:"api_mojang.getmojangstatus",title:"Function: getMojangStatus",sidebar_label:"getMojangStatus",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/functions/api_mojang.getmojangstatus",id:"api/functions/api_mojang.getmojangstatus",isDocsHomePage:!1,title:"Function: getMojangStatus",description:"Function: getMojangStatus",source:"@site/docs/api/functions/api_mojang.getmojangstatus.md",slug:"/api/functions/api_mojang.getmojangstatus",permalink:"/Minecraft-API/docs/api/functions/api_mojang.getmojangstatus",editUrl:null,version:"current",sidebar_label:"getMojangStatus",sidebar:"api",previous:{title:"Function: searchProject",permalink:"/Minecraft-API/docs/api/functions/api_curseforge.searchproject"},next:{title:"Function: getMultipleUUIDs",permalink:"/Minecraft-API/docs/api/functions/api_mojang.getmultipleuuids"}},u=[],s={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"function-getmojangstatus"},"Function: getMojangStatus"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/Minecraft-API/docs/api/modules/api_mojang"}),"api/Mojang"),".getMojangStatus"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"getMojangStatus"),"(): ",Object(o.b)("em",{parentName:"p"},"Promise"),"<",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/Minecraft-API/docs/api/interfaces/typings.mojangstatus"}),Object(o.b)("em",{parentName:"a"},"MojangStatus")),">"),Object(o.b)("p",null,"Fetch Mojang's server status"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"Promise"),"<",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/Minecraft-API/docs/api/interfaces/typings.mojangstatus"}),Object(o.b)("em",{parentName:"a"},"MojangStatus")),">"),Object(o.b)("p",null,"Returns each service with status color"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Green: No problem"),Object(o.b)("li",{parentName:"ul"},"Yellow: Some issues"),Object(o.b)("li",{parentName:"ul"},"Red: Probably not working properly")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/eve0415/Minecraft-API/blob/61904a0/src/api/Mojang/status.ts#L12"}),"api/Mojang/status.ts:12")))}p.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,j=l["".concat(c,".").concat(m)]||l[m]||b[m]||o;return n?r.a.createElement(j,i(i({ref:t},s),{},{components:n})):r.a.createElement(j,i({ref:t},s))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
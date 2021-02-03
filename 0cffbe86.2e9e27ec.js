(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{184:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,j=s["".concat(o,".").concat(m)]||s[m]||l[m]||p;return r?a.a.createElement(j,c(c({ref:t},b),{},{components:r})):a.a.createElement(j,c({ref:t},b))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<p;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),p=(r(0),r(184)),o={id:"api_papermc.getversiongroup",title:"Function: getVersionGroup",sidebar_label:"getVersionGroup",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/functions/api_papermc.getversiongroup",id:"api/functions/api_papermc.getversiongroup",isDocsHomePage:!1,title:"Function: getVersionGroup",description:"Function: getVersionGroup",source:"@site/docs/api/functions/api_papermc.getversiongroup.md",slug:"/api/functions/api_papermc.getversiongroup",permalink:"/Minecraft-API/docs/api/functions/api_papermc.getversiongroup",editUrl:null,version:"current",sidebar_label:"getVersionGroup",sidebar:"api",previous:{title:"Function: getVersion",permalink:"/Minecraft-API/docs/api/functions/api_papermc.getversion"},next:{title:"Function: getVersionGroupBuilds",permalink:"/Minecraft-API/docs/api/functions/api_papermc.getversiongroupbuilds"}},i=[],b={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"function-getversiongroup"},"Function: getVersionGroup"),Object(p.b)("p",null,Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/Minecraft-API/docs/api/modules/api_papermc"}),"api/PaperMC"),".getVersionGroup"),Object(p.b)("p",null,"\u25b8 ",Object(p.b)("strong",{parentName:"p"},"getVersionGroup"),"(",Object(p.b)("inlineCode",{parentName:"p"},"project"),": ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/Minecraft-API/docs/api/types/typings.projecttype"}),Object(p.b)("em",{parentName:"a"},"ProjectType")),", ",Object(p.b)("inlineCode",{parentName:"p"},"version"),": ",Object(p.b)("em",{parentName:"p"},"string"),"): ",Object(p.b)("em",{parentName:"p"},"Promise"),"<",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/Minecraft-API/docs/api/classes/typings.versiongroupproject"}),Object(p.b)("em",{parentName:"a"},"VersionGroupProject")),">"),Object(p.b)("p",null,"Get information about a version group."),Object(p.b)("h4",{id:"parameters"},"Parameters:"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"project")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("a",Object(n.a)({parentName:"td"},{href:"/Minecraft-API/docs/api/types/typings.projecttype"}),Object(p.b)("em",{parentName:"a"},"ProjectType"))),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A project name")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"version")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("em",{parentName:"td"},"string")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A version group (1.16, 1.12)")))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Returns:")," ",Object(p.b)("em",{parentName:"p"},"Promise"),"<",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/Minecraft-API/docs/api/classes/typings.versiongroupproject"}),Object(p.b)("em",{parentName:"a"},"VersionGroupProject")),">"),Object(p.b)("p",null,"Defined in: ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/eve0415/Minecraft-API/blob/61904a0/src/api/PaperMC/project.ts#L33"}),"api/PaperMC/project.ts:33")))}u.isMDXComponent=!0}}]);
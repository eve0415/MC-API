(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{187:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,d=u["".concat(o,".").concat(b)]||u[b]||f[b]||a;return r?i.a.createElement(d,c(c({ref:t},s),{},{components:r})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(187)),o={id:"typings.projectlist",title:"Interface: ProjectList",sidebar_label:"ProjectList",custom_edit_url:null},c={unversionedId:"api/interfaces/typings.projectlist",id:"api/interfaces/typings.projectlist",isDocsHomePage:!1,title:"Interface: ProjectList",description:"typings.ProjectList",source:"@site/docs/api/interfaces/typings.projectlist.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/typings.projectlist",permalink:"/MC-API/docs/api/interfaces/typings.projectlist",editUrl:null,version:"current",sidebar_label:"ProjectList",frontMatter:{id:"typings.projectlist",title:"Interface: ProjectList",sidebar_label:"ProjectList",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: PaperVersion",permalink:"/MC-API/docs/api/interfaces/typings.paperversion"},next:{title:"Interface: SearchOptions",permalink:"/MC-API/docs/api/interfaces/typings.searchoptions"}},p=[{value:"Properties",id:"properties",children:[{value:"projects",id:"projects",children:[]}]}],s={toc:p};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/MC-API/docs/api/modules/typings"},"typings"),".ProjectList"),Object(a.b)("p",null,"An array of available projects list returned from PaperMC API"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"projects"},"projects"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(a.b)("strong",{parentName:"p"},"projects"),": ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"An array of available projects"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/eve0415/MC-API/blob/63dbf1b/src/typings/PaperMC/schemes.ts#L14"},"typings/PaperMC/schemes.ts:14")))}l.isMDXComponent=!0}}]);
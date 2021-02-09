(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),c=r(7),o=(r(0),r(185)),a={id:"api_curseforge.getprojectdescription",title:"Function: getProjectDescription",sidebar_label:"getProjectDescription",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/functions/api_curseforge.getprojectdescription",id:"api/functions/api_curseforge.getprojectdescription",isDocsHomePage:!1,title:"Function: getProjectDescription",description:"Function: getProjectDescription",source:"@site/docs/api/functions/api_curseforge.getprojectdescription.md",slug:"/api/functions/api_curseforge.getprojectdescription",permalink:"/MC-API/docs/api/functions/api_curseforge.getprojectdescription",editUrl:null,version:"current",sidebar_label:"getProjectDescription",sidebar:"api",previous:{title:"Function: getProject",permalink:"/MC-API/docs/api/functions/api_curseforge.getproject"},next:{title:"Function: getProjectFileChangelog",permalink:"/MC-API/docs/api/functions/api_curseforge.getprojectfilechangelog"}},p=[],b={toc:p};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"function-getprojectdescription"},"Function: getProjectDescription"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/MC-API/docs/api/modules/api_curseforge"}),"api/CurseForge"),".getProjectDescription"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"getProjectDescription"),"(",Object(o.b)("inlineCode",{parentName:"p"},"id"),": ",Object(o.b)("em",{parentName:"p"},"number"),"): ",Object(o.b)("em",{parentName:"p"},"Promise"),"<",Object(o.b)("em",{parentName:"p"},"string"),">"),Object(o.b)("p",null,"Fetch project description. (The main page of the project in CurseForge)"),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"id")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"number")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The project ID")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"Promise"),"<",Object(o.b)("em",{parentName:"p"},"string"),">"),Object(o.b)("p",null,"Return the Markdown strings formatted from html strings."),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/eve0415/MC-API/blob/4237c4f/src/api/CurseForge/project.ts#L74"}),"api/CurseForge/project.ts:74")))}u.isMDXComponent=!0},185:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var b=c.a.createContext({}),u=function(e){var t=c.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},j=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=u(r),j=n,m=l["".concat(a,".").concat(j)]||l[j]||s[j]||o;return r?c.a.createElement(m,i(i({ref:t},b),{},{components:r})):c.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=j;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var b=2;b<o;b++)a[b]=r[b];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}j.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(3),o=n(7),i=(n(0),n(184)),c={id:"file",title:"Getting a mod's latest file URL",sidebar_label:"Files"},a={unversionedId:"guides/curseforge/file",id:"guides/curseforge/file",isDocsHomePage:!1,title:"Getting a mod's latest file URL",description:"`js",source:"@site/docs/guides/curseforge/file.md",slug:"/guides/curseforge/file",permalink:"/Minecraft-API/docs/guides/curseforge/file",editUrl:"https://github.com/eve0415/Minecraft-API/edit/master/docs/docs/guides/curseforge/file.md",version:"current",sidebar_label:"Files",sidebar:"docs",previous:{title:"Fetching mod",permalink:"/Minecraft-API/docs/guides/curseforge/mod"},next:{title:"Interacting with player's data",permalink:"/Minecraft-API/docs/guides/mojang/player"}},s=[],l={toc:s};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { curseforge } = require('minecraft-api');\n\n// Let's search for JEI, we all use\n// Category 6 means mods in overall\nconst projects = await curseforge.searchProject( { category: 6, filter: 'JEI' } );\n\n// The first one should be JEI\nconst jei = projects[0];\nconsole.log(jei.name);\n\n// Fetch the project's description\nconst desc = await jei.getDescription();\nconsole.log(desc);\n\n// Let's filter out JEI's file that can be used for version 1.12.2 from a list of files info\nconst file = jei.files.filter(f => f.isLatest && f.gameVersion.includes('1.12.2'))[0];\nconsole.log(file);\n\n// Fetch the changelog for this file\nconst changelog = await file.getChangelog();\nconsole.log(changelog);\n\n// The download link to this file is;\nconsole.log(file.url);\n")))}f.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=f(n),d=r,g=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?o.a.createElement(g,a(a({ref:t},l),{},{components:n})):o.a.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
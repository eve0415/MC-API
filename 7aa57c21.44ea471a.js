(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return v})),n.d(t,"metadata",(function(){return O})),n.d(t,"toc",(function(){return y})),n.d(t,"default",(function(){return g}));var r=n(3),a=n(7),o=n(0),i=n.n(o),c=n(185),l=n(193),u=n(187),s=n(117),b=n.n(s),p=37,f=39;var m=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,a=e.values,c=e.groupId,s=e.className,m=Object(l.a)(),d=m.tabGroupChoices,v=m.setTabGroupChoices,O=Object(o.useState)(r),y=O[0],j=O[1],g=o.Children.toArray(e.children);if(null!=c){var h=d[c];null!=h&&h!==y&&a.some((function(e){return e.value===h}))&&j(h)}var w=function(e){j(e),null!=c&&v(c,e)},C=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":n},s)},a.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(u.a)("tabs__item",b.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case f:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(o.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))};var d=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)},v={id:"install",title:"Installation",sidebar_label:"Installation"},O={unversionedId:"about/install",id:"about/install",isDocsHomePage:!1,title:"Installation",description:"MC-API is a npm packages that can be installed over npm.",source:"@site/docs/about/install.md",slug:"/about/install",permalink:"/MC-API/docs/about/install",editUrl:"https://github.com/eve0415/MC-API/edit/master/docs/docs/about/install.md",version:"current",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Introduction",permalink:"/MC-API/docs/about/intro"},next:{title:"Contributing",permalink:"/MC-API/docs/about/contribute"}},y=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]}],j={toc:y};function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"MC-API is a npm packages that can be installed over npm."),Object(c.b)("h2",{id:"requirements"},"Requirements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/"}),"Node.js")," version 14.0.0 or newer.")),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)(m,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(d,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install mc-api\n"))),Object(c.b)(d,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add mc-api\n")))))}g.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),f=r,m=b["".concat(i,".").concat(f)]||b[f]||p[f]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},187:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},193:function(e,t,n){"use strict";var r=n(0),a=n(194);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},194:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),y=c(r),p=s,f=y["".concat(i,".").concat(p)]||y[p]||d[p]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,l=new Array(o);l[0]=p;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[y]="string"==typeof e?e:s,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const o={sidebar_position:5},l="Styles",a={unversionedId:"styles",id:"styles",title:"Styles",description:"Styles are accessed with the useStyle and setStyle functions. Styles are similar to CSS in that they cascade downwards in the tree.",source:"@site/docs/styles.md",sourceDirName:".",slug:"/styles",permalink:"/testdocss/docs/styles",draft:!1,editUrl:"https://github.com/WarpedEntrance/testdocss/edit/master/docs/styles.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Usage details",permalink:"/testdocss/docs/details"}},i={},c=[{value:"useStyle",id:"usestyle",level:2},{value:"setStyle",id:"setstyle",level:2},{value:"Default styles",id:"default-styles",level:2}],u={toc:c},y="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(y,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"styles"},"Styles"),(0,s.kt)("p",null,"Styles are accessed with the ",(0,s.kt)("inlineCode",{parentName:"p"},"useStyle")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"setStyle")," functions. Styles are similar to CSS in that they cascade downwards in the tree."),(0,s.kt)("p",null,"Styles are not anything special, they are just configuration. It's up to the widgets to read from the specified styles and use the values."),(0,s.kt)("h2",{id:"usestyle"},"useStyle"),(0,s.kt)("p",null,"Returns the current style information, with styles that are set more recently in the tree overriding styles that were set further up. In this way, styles cascade downwards, similar to CSS."),(0,s.kt)("h2",{id:"setstyle"},"setStyle"),(0,s.kt)("p",null,"Defines style for any subsequent calls in this scope. Merges with any existing styles."),(0,s.kt)("h2",{id:"default-styles"},"Default styles"),(0,s.kt)("p",null,"By default, these styles are used. You can override them anywhere:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"{\n    bg1 = Color3.fromRGB(31, 31, 31),\n    bg2 = Color3.fromRGB(42, 42, 42),\n    bg3 = Color3.fromRGB(54, 54, 54),\n    mutedTextColor = Color3.fromRGB(147, 147, 147),\n    textColor = Color3.fromRGB(255, 255, 255),\n}\n")))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),o=(r(0),r(148)),i={title:"useRecoilValueLoadable()",sidebar_label:"useRecoilValueLoadable()"},l={id:"api-reference/core/useRecoilValueLoadable",title:"useRecoilValueLoadable()",description:"Returns a `Loadable`.",source:"@site/docs/api-reference/core/useRecoilValueLoadable.md",permalink:"/docs/api-reference/core/useRecoilValueLoadable",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilValueLoadable.md",sidebar_label:"useRecoilValueLoadable()",sidebar:"someSidebar",previous:{title:"useResetRecoilState()",permalink:"/docs/api-reference/core/useResetRecoilState"},next:{title:"useRecoilStateLoadable()",permalink:"/docs/api-reference/core/useRecoilStateLoadable"}},c=[{value:"Example",id:"example",children:[]}],s={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Loadable"),"."),Object(o.b)("p",null,"This hook is intended to be used for reading the value of asynchronous selectors. This hook will implicitly subscribe the component to the given state."),Object(o.b)("p",null,"Unlike ",Object(o.b)("inlineCode",{parentName:"p"},"useRecoilValue()"),", this hook will not throw a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," when reading from a pending asynchronous selector (for the purpose of working alongside Suspense). Instead, this hook returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Loadable"),", which is an object with the following interface:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state"),": indicates the status of the selector. Possible values are ",Object(o.b)("inlineCode",{parentName:"li"},"'hasValue'"),", ",Object(o.b)("inlineCode",{parentName:"li"},"'hasError'"),", ",Object(o.b)("inlineCode",{parentName:"li"},"'loading'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getValue()"),": if there is an error, this function throws the error. If selector is still loading, it throws a Promise. Otherwise it returns the value that the selector resolved to."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"toPromise()"),": returns a ",Object(o.b)("inlineCode",{parentName:"li"},"Promise")," that will resolve when the selector has resolved. If the selector is synchronous or has already resolved, it returns a ",Object(o.b)("inlineCode",{parentName:"li"},"Promise")," that resolves immediately.")),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state"),": a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api-reference/core/selector"}),Object(o.b)("inlineCode",{parentName:"a"},"selector"))," that ",Object(o.b)("em",{parentName:"li"},"may")," have some asynchronous operations. The status of the returned loadable will depend on the status of the given selector.")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"")))}u.isMDXComponent=!0},148:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(m,l({ref:t},s,{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
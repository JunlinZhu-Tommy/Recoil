(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(6),r=(n(0),n(157)),i={title:"State Persistence",sidebar_label:"State Persistence"},s={id:"guides/persistence",title:"State Persistence",description:"Recoil allows you to persist application state using atoms.",source:"@site/docs/guides/persistence.md",permalink:"/docs/guides/persistence",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/guides/persistence.md",sidebar_label:"State Persistence",sidebar:"someSidebar",previous:{title:"Asynchronous State Sync",permalink:"/docs/guides/asynchronous-state-sync"},next:{title:"<RecoilRoot ...props />",permalink:"/docs/api-reference/core/RecoilRoot"}},c=[{value:"<em>IMPORTANT NOTE</em>",id:"important-note",children:[]},{value:"Saving State",id:"saving-state",children:[]},{value:"Restoring State",id:"restoring-state",children:[]},{value:"Syncing State",id:"syncing-state",children:[]},{value:"Backward-Compatibility and Value Validation",id:"backward-compatibility-and-value-validation",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Recoil allows you to persist application state using atoms."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"important-note"},Object(r.b)("em",{parentName:"h2"},"IMPORTANT NOTE")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"This API is currently under development and will change.  Please stay tuned..."))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"saving-state"},"Saving State"),Object(r.b)("p",null,"To save state, subscribe to atom changes and record the new state.  You could use React effects to subscribe to individual atoms (",Object(r.b)("em",{parentName:"p"},"See ",Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"asynchronous-state-sync"}),"Asynchronous State Sync")),").  However, Recoil provides a hook to allow you to subscribe to state changes for all atoms using ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"useTransactionObservation_UNSTABLE()")),".  (",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"NOTE")),": ",Object(r.b)("em",{parentName:"p"},"This API is currently under development"),")."),Object(r.b)("p",null,"The subscription callback provides all of the atom state and tells you which atoms changed.  From this you can save the changes with the storage and serialization of your preference.  Here is an example of a basic implementation using JSON:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function PersistenceObserver() {\n  useTransactionObservation_UNSTABLE(({atomValues, atomInfo, modifiedAtoms}) => {\n    for (const modifiedAtom of modifiedAtoms) {\n      Storage.setItem(\n        modifiedAtom,\n        JSON.stringify({value: atomValues.get(modifiedAtom)}),\n      );\n    }\n  });\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Storage")," could be the browser URL history, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),Object(r.b)("em",{parentName:"a"},"LocalStorage")),", ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/react-native-community/react-native-async-storage"}),"AsyncStorage"))," or whichever storage you like."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"em"},"atomValues"))," - A Map of the atom keys and values."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"em"},"modifiedAtoms"))," - Gives you a map containing the modified atoms."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"em"},"atomInfo"))," - Atom metadata.")),Object(r.b)("p",null,"You may not wish to persist all atoms, or some atoms may have different persistence behaviors.  You can read metadata (",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"NOTE")),": ",Object(r.b)("em",{parentName:"p"},"new API coming soon"),") to get options from each atom."),Object(r.b)("p",null,"Note that the current hook was designed for persistence and only reports atoms with special option (property ",Object(r.b)("inlineCode",{parentName:"p"},"persistence_UNSTABLE")," which is an object with a non-null ",Object(r.b)("inlineCode",{parentName:"p"},"type")," property)"),Object(r.b)("h2",{id:"restoring-state"},"Restoring State"),Object(r.b)("p",null,"After you ensure that you're saving your state to your storage, you need to recover it when loading the app.  This can be done using the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"initializeState"))," prop on thee ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"<RecoilRoot>"))," component. (",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"NOTE")),": ",Object(r.b)("em",{parentName:"p"},"API changes coming soon"),")."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"initializeState")," is a function that provides a ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"set"))," method to provide the initial atom value for an atom key.\nPass the key for the atom and the stored value to this callback and it will initialize the atom to the restored state."),Object(r.b)("p",null,"Note that it is important to use this prop instead of just manually setting atom values in an effect.  Otherwise there will be an initial render without the restored state which can cause flicker or be invalid."),Object(r.b)("p",null,"Here is a basic example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const initializeState = ({set}) => {\n  for(const [key, value] of Storage.entries()) {\n    set(getAtomWithKey(key), JSON.parse(value)).value;\n  }\n}\n\nreturn (\n  <RecoilRoot initializeState={initializeState}>\n    <PersistenceObserver />\n    <SomeComponent />\n  </RecoilRoot>\n);\n")),Object(r.b)("h2",{id:"syncing-state"},"Syncing State"),Object(r.b)("p",null,"You may also wish for asynchronous updates of the storage, such as the user pressing the browser back button with URL persistence, to sync with the current app state.  You can use a React effect to subscribe to these changes and update the value of any modified atoms directly."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example coming soon...")),Object(r.b)("h2",{id:"backward-compatibility-and-value-validation"},"Backward-Compatibility and Value Validation"),Object(r.b)("p",null,"What if your state storage is not reliable?  Or what if you change which atoms or types you are using and need to work with previously persisted state?  More documentation and examples on how to handle this coming soon as the API is finalized..."))}b.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||r;return n?o.a.createElement(d,s({ref:t},l,{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
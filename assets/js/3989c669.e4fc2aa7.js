"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[6561],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2836:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Complex transactions"},p=void 0,l={unversionedId:"api/start/api.tx.wrap",id:"api/start/api.tx.wrap",isDocsHomePage:!1,title:"Complex transactions",description:"Up till now we have focussed on the base operation of transactions. There are however some more complex operations that deserve some more information, for instance when doing either democracy proposals or executing sudo calls, in both these cases the transaction wraps a call or proposal to be evaluated.",source:"@site/docs/api/start/api.tx.wrap.md",sourceDirName:"api/start",slug:"/api/start/api.tx.wrap",permalink:"/docs/api/start/api.tx.wrap",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/api.tx.wrap.md",tags:[],version:"current",frontMatter:{title:"Complex transactions"},sidebar:"reference",previous:{title:"Transaction subscriptions",permalink:"/docs/api/start/api.tx.subs"},next:{title:"Type basics",permalink:"/docs/api/start/types.basics"}},c=[{value:"Sudo use",id:"sudo-use",children:[]},{value:"Complex types",id:"complex-types",children:[]},{value:"Understanding types",id:"understanding-types",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Up till now we have focussed on the base operation of transactions. There are however some more complex operations that deserve some more information, for instance when doing either democracy proposals or executing sudo calls, in both these cases the transaction wraps a call or proposal to be evaluated."),(0,o.kt)("h2",{id:"sudo-use"},"Sudo use"),(0,o.kt)("p",null,"When running a development chain (Polkadot/Substrate with a ",(0,o.kt)("inlineCode",{parentName:"p"},"--dev")," flag), or in certain testnets a sudo module is available - just like the sudo command found on some systems, it allows root-level access to perform actions. For instance, we can perform a ",(0,o.kt)("inlineCode",{parentName:"p"},"setBalance(<accountId>, <free>, <reserved>)")," on an account -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\n// Get the current sudo key in the system\nconst sudoKey = await api.query.sudo.key();\n\n// Lookup from keyring (assuming we have added all, on --dev this would be `//Alice`)\nconst sudoPair = keyring.getPair(sudoKey);\n\n// Send the actual sudo transaction\nconst unsub = await api.tx.sudo\n  .sudo(\n    api.tx.balances.setBalance(ADDR, 12345, 678)\n  )\n  .signAndSend(sudoPair, (result) => { ... });\n")),(0,o.kt)("p",null,"The above is really quite straight-forward, the ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo.sudo(<call>)")," call takes 1 parameter, which is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Call"),". We construct this via the ",(0,o.kt)("inlineCode",{parentName:"p"},"api.tx")," and pass it through. The only difference is that the nested call has no actual ",(0,o.kt)("inlineCode",{parentName:"p"},".signAndSend")," on it, rather it is only used as a container for data."),(0,o.kt)("p",null,"Exactly the same would apply to the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"democracy.propose(<proposal>, <value>)"),", for instance we can just swap the above sudo wrapper with a proposal and add the correct fees for the proposal."),(0,o.kt)("h2",{id:"complex-types"},"Complex types"),(0,o.kt)("p",null,"As indicated in previous sections (we will cover types in more detail next), the API will format the inputs into the actual type required for submission. For primitives such as numbers, this is quite understandable, but it is worth spending at least one example on cases where an object is provided as an input. For instance, making a call to validate -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst txHash = await api.tx.staking.validate({\n  validatorPayment: 12345\n});\n")),(0,o.kt)("p",null,"In the above example, all we need to provide is a the fields for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidatorPrefs")," object. (Any fields not defined will be set to the default for that type, i.e. all zero). This object maps through to what is defined on the Polkadot/Substrate side, with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api/blob/master/packages/types/src/interfaces/staking/definitions.ts"},"@polkadot/types version")," mapping all fields."),(0,o.kt)("h2",{id:"understanding-types"},"Understanding types"),(0,o.kt)("p",null,"As has been very apparent in all the preceding sections, the management of types is what allows the API to communicate with the node. Most values are in a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-scale-codec"},"binary SCALE-encoded format")," and it is the responsibility of the API is to encode and decode these. In the next section we will ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/start/types.basics"},"take a look at what interfaces the API provides around types"),"."))}u.isMDXComponent=!0}}]);
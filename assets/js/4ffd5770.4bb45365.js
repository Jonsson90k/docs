"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[1504],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1664:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Create an instance"},l=void 0,c={unversionedId:"api/start/create",id:"api/start/create",isDocsHomePage:!1,title:"Create an instance",description:"We have the API installed, we have an understanding of what will actually be exposed and how the API knows what to expose. So down the rabbit hole we go - let's create an actual API instance, and then take it from there -",source:"@site/docs/api/start/create.md",sourceDirName:"api/start",slug:"/api/start/create",permalink:"/docs/api/start/create",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/create.md",tags:[],version:"current",frontMatter:{title:"Create an instance"},sidebar:"reference",previous:{title:"Basics & Metadata",permalink:"/docs/api/start/basics"},next:{title:"Runtime constants",permalink:"/docs/api/start/api.consts"}},p=[{value:"Providers",id:"providers",children:[]},{value:"API Instance",id:"api-instance",children:[]},{value:"Failures",id:"failures",children:[]},{value:"Advanced creation",id:"advanced-creation",children:[]},{value:"Do something",id:"do-something",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We have the API installed, we have an understanding of what will actually be exposed and how the API knows what to expose. So down the rabbit hole we go - let's create an actual API instance, and then take it from there -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Import\nimport { ApiPromise, WsProvider } from '@polkadot/api';\n\n...\n// Construct\nconst wsProvider = new WsProvider('wss://rpc.polkadot.io');\nconst api = await ApiPromise.create({ provider: wsProvider });\n\n// Do something\nconsole.log(api.genesisHash.toHex());\n")),(0,i.kt)("p",null,"Where other code is included (or just some previous boilerplate is used), you will see ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," in most of the examples. This is not due to laziness, but rather just to keep things straight and to the point."),(0,i.kt)("h2",{id:"providers"},"Providers"),(0,i.kt)("p",null,"Focusing on the construction, any API requires a provider and we create one via the ",(0,i.kt)("inlineCode",{parentName:"p"},"const wsProvider = new WsProvider(...)"),". By default, if none is provided to the API it will construct a default ",(0,i.kt)("inlineCode",{parentName:"p"},"WsProvider")," instance to connect to ",(0,i.kt)("inlineCode",{parentName:"p"},"ws://127.0.0.1:9944"),"."),(0,i.kt)("p",null,"We generally recommend always specifying the endpoint since in most cases we want to connect to an external node and even for local nodes, it is always better being explicit, less magic that can make you wonder in the future."),(0,i.kt)("p",null,'At this time the only provider type that is fully supported by the API is the WebSocket version. Polkadot/Substrate really comes alive with possibilities once you have access to bi-directional RPCs such as what WebSockets provide. (It is technically possible to have some limited capability via bare-HTTP, but at this point WebSockets is the only fully-operational and supported version - always remember that it is just "upgraded HTTP".)'),(0,i.kt)("h2",{id:"api-instance"},"API Instance"),(0,i.kt)("p",null,"The API creation is done via the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiPromise.create")," interface which is a shortcut version for calling ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," and then waiting until the API is connected. Without the ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," syntax, this would be,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"ApiPromise\n  .create({ provider: wsProvider }).isReady\n  .then((api) =>\n    console.log(api.genesisHash.toHex())\n  );\n")),(0,i.kt)("p",null,"In most cases we would suggest using the ",(0,i.kt)("inlineCode",{parentName:"p"},".create")," shortcut, which really just takes care of the following boilerplate that otherwise needs to be provided -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Create the instance\nconst api = new ApiPromise({ provider: wsProvider });\n\n// Wait until we are ready and connected\nawait api.isReady;\n\n// Do something\nconsole.log(api.genesisHash.toHex());\n")),(0,i.kt)("h2",{id:"failures"},"Failures"),(0,i.kt)("p",null,"In all cases the API will handle reconnecting automatically. This means that when you connect and the endpoint is not (yet) ready, the promise will not resolve immediately, but rather when connected. The same applies to when connection is lost, the API will manage re-connections."),(0,i.kt)("p",null,"In cases where the API does not support the chain being connected to, such as it using an unknown metadata version, the ready promise will fail to resolve and instead reject."),(0,i.kt)("h2",{id:"advanced-creation"},"Advanced creation"),(0,i.kt)("p",null,"There are more advanced cases where you would prefer to use the longer version, for instance: if you want to explicitly listen to events emitted, you probably want to attach to the API even before connecting to the chain. All API instances implement an ",(0,i.kt)("inlineCode",{parentName:"p"},"EventEmitter")," interface, with ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," handlers, which emit ",(0,i.kt)("inlineCode",{parentName:"p"},"connected"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"disconnected"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ready")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," events, allowing you to listen to events on the transport layer."),(0,i.kt)("p",null,"In these cases, create via ",(0,i.kt)("inlineCode",{parentName:"p"},"new"),", attach listeners and then wait for the ",(0,i.kt)("inlineCode",{parentName:"p"},"isReady"),"."),(0,i.kt)("h2",{id:"do-something"},"Do something"),(0,i.kt)("p",null,"Now that we have the API initialized, the next step would be to start using it to interact and extract data ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/start/api.consts"},"starting with chain constants"),"."))}u.isMDXComponent=!0}}]);
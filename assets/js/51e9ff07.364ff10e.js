"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[463],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],p={},l=void 0,s={unversionedId:"api/start/rpc.custom",id:"api/start/rpc.custom",isDocsHomePage:!1,title:"rpc.custom",description:"title: Custom RPC",source:"@site/docs/api/start/rpc.custom.md",sourceDirName:"api/start",slug:"/api/start/rpc.custom",permalink:"/docs/api/start/rpc.custom",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/rpc.custom.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Extending types",permalink:"/docs/api/start/types.extend"},next:{title:"Type creation",permalink:"/docs/api/start/types.create"}},d=[{value:"title: Custom RPC",id:"title-custom-rpc",children:[]},{value:"Custom definitions",id:"custom-definitions",children:[]},{value:"RPC options in detail",id:"rpc-options-in-detail",children:[]},{value:"Type creation",id:"type-creation",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"title-custom-rpc"},"title: Custom RPC"),(0,r.kt)("p",null,"In the previous section we looked at how to override the types the node uses and how to define extra custom types. You can also define custom RPC methods and we will cover that here."),(0,r.kt)("h2",{id:"custom-definitions"},"Custom definitions"),(0,r.kt)("p",null,"RPCs are exposed as a method on a specific module. This means that once available: you can call any rpc via ",(0,r.kt)("inlineCode",{parentName:"p"},"api.rpc.<module>.<method>(...params[])"),". For example, you can define a ",(0,r.kt)("inlineCode",{parentName:"p"},"firstModule_testMethod")," on the Rust node and if correctly defined it will be callable via ",(0,r.kt)("inlineCode",{parentName:"p"},"api.rpc.firstModule.testMethod(..."),"). To supply custom RPC methods, you provide an ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc")," object on the options to the API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst api = await ApiPromise.create({\n  rpc: {\n    firstModule: {\n      testMethod: {\n        description: 'Just a test method',\n        params: [\n          {\n            name: 'index',\n            type: 'u64'\n          },\n          {\n            name: 'at',\n            type: 'Hash',\n            isOptional: true\n          }\n        ],\n        type: 'Balance'\n      },\n      anotherMethod: { ... },\n      ...\n    },\n    anotherModule: { ... },\n    ...\n  },\n  ...\n});\n")),(0,r.kt)("p",null,"In the above example we have defined a new method, which is now available on the API as ",(0,r.kt)("inlineCode",{parentName:"p"},"api.rpc.firstModule.testMethod(index: u64, at?: Hash) => Promise<Balance>"),". For the optional parameters, we added ",(0,r.kt)("inlineCode",{parentName:"p"},"isOptional: true")," alongside the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," in the parameter definition."),(0,r.kt)("p",null,"Even if you define the method it will only appear on the API if it appears in the list returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"api.rpc.rpc.methods()"),", which is the list of known RPCs the node exposes. So when making changes to the node you should double-check that it does announce the RPC method and that it conforms to the format ",(0,r.kt)("inlineCode",{parentName:"p"},"<module>_<method>"),".  For example ",(0,r.kt)("inlineCode",{parentName:"p"},"foo_bar")," is a valid name whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," is not. I.E. Methods which do not contain both a ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," component won't be detected and cannot be decorated. If in doubt, follow the conventions in Substrate master."),(0,r.kt)("h2",{id:"rpc-options-in-detail"},"RPC options in detail"),(0,r.kt)("p",null,"While the above example should be self-explanatory, let's quickly walk through the structure. Under the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc: { ... }")," key in the options, keys are the name of the module exposing the RPC. So given 2 modules ",(0,r.kt)("inlineCode",{parentName:"p"},"firstModule")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"testModule"),", and the top-level structure would be as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst api = await ApiPromise.create({\n  rpc: {\n    firstModule: { ... },\n    testModule: { ... }\n  }\n});\n")),(0,r.kt)("p",null,"Inside each module definition, the key is the name of the RPC method. In the example, we defined a ",(0,r.kt)("inlineCode",{parentName:"p"},"testMethod")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"firstModule"),". A method definition should provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," of the method, an array of type definitions for the parameters named ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),", and define the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," of the result of the RPC call."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"params")," is an array of type definitions. In the example, contains fields for ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and an optional flag ",(0,r.kt)("inlineCode",{parentName:"p"},"isOptional")," that indicates that the field is not required when making the call. (And example of this use would be in cases such as ",(0,r.kt)("inlineCode",{parentName:"p"},"state.getStorage(key, blockHash?)")," where the last param is optional)"),(0,r.kt)("h2",{id:"type-creation"},"Type creation"),(0,r.kt)("p",null,"While the API always converts all the inputs into the underlying type required by the operation, be it for RPC, query or transaction, in some cases you may want to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/start/types.create"},"create an instance of a type")," yourself."))}u.isMDXComponent=!0}}]);
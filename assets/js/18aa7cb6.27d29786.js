"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[3183],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3664:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Storage"},l=void 0,c={unversionedId:"api/cookbook/storage",id:"api/cookbook/storage",isDocsHomePage:!1,title:"Storage",description:"Here you will find snippets for working with storage.",source:"@site/docs/api/cookbook/storage.md",sourceDirName:"api/cookbook",slug:"/api/cookbook/storage",permalink:"/docs/api/cookbook/storage",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/cookbook/storage.md",tags:[],version:"current",frontMatter:{title:"Storage"},sidebar:"reference",previous:{title:"Blocks",permalink:"/docs/api/cookbook/blocks"},next:{title:"Transactions",permalink:"/docs/api/cookbook/tx"}},p=[{value:"How do I check for storage existence?",id:"how-do-i-check-for-storage-existence",children:[]},{value:"How do I use .entries()/.keys() on double maps?",id:"how-do-i-use-entrieskeys-on-double-maps",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here you will find snippets for working with storage."),(0,a.kt)("h2",{id:"how-do-i-check-for-storage-existence"},"How do I check for storage existence?"),(0,a.kt)("p",null,"In the metadata, for each storage item a fallback is provided. This means that when an entry does not exist, the fallback (which is the default value for the type) will be provided. This means, that querying for a non-existent key (unless an option), will yield a value -"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// retrieve Option<StakingLedger>\nconst ledger = await api.query.staking.ledger('EoukLS2Rzh6dZvMQSkqFy4zGvqeo14ron28Ue3yopVc8e3Q');\n// retrieve ValidatorPrefs (will yield the default value)\nconst prefs = await api.query.staking.validators('EoukLS2Rzh6dZvMQSkqFy4zGvqeo14ron28Ue3yopVc8e3Q');\n\nconsole.log(ledger.isNone, ledger.isSome); // true, false\nconsole.log(JSON.stringify(prefs.toHuman())); // {\"commission\":\"0\"}\n")),(0,a.kt)("p",null,"In the second case, the non-existent prefs returns the default/fallback value for the storage item. So in this case we don't know if the value is set to 0 or unset. Existence can be checked by using the storage size, which would be zero if nothing is stored."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// exists\nconst sizeY = await api.query.staking.validators.size('DB2mp5nNhbFN86J9hxoAog8JALMhDXgwvWMxrRMLNUFMEY4');\n// non existent\nconst sizeN = await api.query.staking.validators.size('EoukLS2Rzh6dZvMQSkqFy4zGvqeo14ron28Ue3yopVc8e3Q');\n\nconsole.log(sizeY.isZero(), sizeY.toNumber()); // false 4\nconsole.log(sizeN.isZero(), sizeY.toNumber()); // true 0\n")),(0,a.kt)("h2",{id:"how-do-i-use-entrieskeys-on-double-maps"},"How do I use .entries()/.keys() on double maps?"),(0,a.kt)("p",null,"As ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/start/api.query.other#map-keys-entries"},"explained elsewhere")," each map-type storage entry exposes the entries/keys helpers to retrieve the whole list. In the case of double maps, with the addition of a single argument, you can retrieve either all entries or a subset based on the first map key."),(0,a.kt)("p",null,"In both these cases, entries/keys operate the same way, ",(0,a.kt)("inlineCode",{parentName:"p"},".entries()")," retrieving ",(0,a.kt)("inlineCode",{parentName:"p"},"(StorageKey, Codec)[]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".keys()")," retrieving ",(0,a.kt)("inlineCode",{parentName:"p"},"StorageKey[]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Retrieves the entries for all slashes, in all eras (no arg)\nconst allEntries = await api.query.staking.nominatorSlashInEra.entries();\n\n// nominatorSlashInEra(EraIndex, AccountId) for the types of the key args\nallEntries.forEach(([{ args: [era, nominatorId] }, value]) => {\n  console.log(`${era}: ${nominatorId} slashed ${value.toHuman()}`);\n});\n")),(0,a.kt)("p",null,"While we can retrieve only the keys for a specific era, using a argument for the first part of the doublemap (as defined here, an ",(0,a.kt)("inlineCode",{parentName:"p"},"EraIndex"),") -"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Retrieves the keys for the slashed validators in era 652\nconst slashedKeys = await api.query.staking.nominatorSlashInEra.keys(652);\n\n// key args still contains [EraIndex, AccountId] decoded\nconsole.log(`slashed: ${slashedKeys.map(({ args: [era, nominatorId] }) => nominatorId)`);\n")))}d.isMDXComponent=!0}}]);
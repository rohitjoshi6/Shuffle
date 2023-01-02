"use strict";(globalThis.webpackChunkshuffle_docs=globalThis.webpackChunkshuffle_docs||[]).push([[924],{876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,f=p["".concat(l,".").concat(u)]||p[u]||c[u]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(8427),i=(n(2784),n(876));const a={sidebar_position:9},o="Adding and removing items",s={unversionedId:"adding-removing",id:"adding-removing",title:"Adding and removing items",description:"You can add and remove elements from shuffle after it has been created. This also works for infinite scrolling.",source:"@site/docs/adding-removing.md",sourceDirName:".",slug:"/adding-removing",permalink:"/Shuffle/docs/adding-removing",draft:!1,editUrl:"https://github.com/Vestride/Shuffle/tree/main/apps/website/docs/docs/adding-removing.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/Shuffle/docs/events"},next:{title:"API",permalink:"/Shuffle/docs/api"}},l={},d=[{value:"Adding elements",id:"adding-elements",level:2},{value:"Removing elements",id:"removing-elements",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-and-removing-items"},"Adding and removing items"),(0,i.kt)("p",null,"You can add and remove elements from shuffle after it has been created. This also works for infinite scrolling."),(0,i.kt)("h2",{id:"adding-elements"},"Adding elements"),(0,i.kt)("p",null,"Wherever you add the element in the DOM is where it will show up in the grid (assuming you\u2019re using the default sort-by-dom-order). With this in mind, you can append, prepend, or insert elements wherever you need to get them to show up in the right order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Create some DOM elements, append them to the shuffle container, then notify\n * shuffle about the new items. You could also insert the HTML as a string.\n */\nonAppendBoxes() {\n  const elements = this._getArrayOfElementsToAdd();\n\n  elements.forEach((element) => {\n    this.shuffle.element.appendChild(element);\n  });\n\n  // Tell shuffle elements have been appended.\n  // It expects an array of elements as the parameter.\n  this.shuffle.add(elements);\n}\n")),(0,i.kt)("h2",{id:"removing-elements"},"Removing elements"),(0,i.kt)("p",null,"Shuffle will animate the element away and then remove it from the DOM once it's finished. It will then emit the ",(0,i.kt)("inlineCode",{parentName:"p"},"Shuffle.EventType.REMOVED")," event with the array of elements in ",(0,i.kt)("inlineCode",{parentName:"p"},"event.collection"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"this.shuffle.remove([element1, element2]);\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://codepen.io/Vestride/details/yLParZL"},"adding and removing demo"),"."))))}c.isMDXComponent=!0}}]);
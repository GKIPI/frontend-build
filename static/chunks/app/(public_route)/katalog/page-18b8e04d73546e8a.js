(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8746],{2371:function(e,t,l){Promise.resolve().then(l.bind(l,7773))},3361:function(e,t,l){"use strict";l.r(t),l.d(t,{downloadImage:function(){return r},parseBlobToURL:function(){return n}});let r=(e,t)=>{let l=atob(e.split(",")[1]),r=new ArrayBuffer(l.length),n=new Uint8Array(r);for(let e=0;e<l.length;e++)n[e]=l.charCodeAt(e);let s=new Blob([r],{type:"image/jpeg"}),a=URL.createObjectURL(s),i=document.createElement("a");i.href=a,i.download="".concat(t,".jpg"),document.body.appendChild(i),i.click(),document.body.removeChild(i)},n=e=>{if(!e)return null;let t=atob(e.split(",")[1]),l=new ArrayBuffer(t.length),r=new Uint8Array(l);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);let n=new Blob([l],{type:"image/jpeg"}),s=URL.createObjectURL(n);return s}},5464:function(e,t,l){"use strict";l.r(t),l.d(t,{toRupiah:function(){return r}});let r=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e)},432:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=l(1024),n=l(7437),s=l(5464),a=r._(l(1396)),i=l(3361);e.exports=e=>{let{isOpen:t,onClose:l,catalog:r}=e;return t?(0,n.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,n.jsxs)("div",{className:"bg-slate-50 w-[90%] md:w-3/5 min-h-[35rem] max-h-[35rem] overflow-auto shadow-lg space-y-28 rounded-lg px-5 py-16 font-montserrat",children:[(0,n.jsxs)("div",{className:"w-full flex flex-col md:flex-row gap-6",children:[(0,n.jsx)("div",{className:"w-4/5 md:w-3/5",children:(0,n.jsx)(a.default,{href:(0,i.parseBlobToURL)(r.image),target:"_blank",children:(0,n.jsx)("img",{src:r.image})})}),(0,n.jsxs)("div",{className:"flex flex-col gap-4 w-full",children:[(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)("p",{className:"w-full font-poppins text-2xl md:text-4xl font-semibold",children:r.title})}),(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsxs)("p",{className:"w-full font-poppins",children:["Kategori: ",(0,n.jsx)("span",{className:"text-green-500 italic",children:r.tag})]})}),(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)("p",{className:"w-full font-montserrat font-semibold",children:(0,s.toRupiah)(r.price)})}),(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)("p",{className:"whitespace-pre-wrap w-full font-montserrat font-medium",children:r.details})})]})]}),(0,n.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,n.jsx)("button",{onClick:l,className:" px-5 py-1 text-lg text-zinc-800 hover:bg-slate-200 transition-colors",children:"Tutup"}),(0,n.jsx)(a.default,{href:"https://wa.me/62".concat(r.contact),target:"_blank",children:(0,n.jsx)("button",{className:"bg-zinc-800 px-5 py-1 text-lg text-slate-200 hover:bg-transparent hover:text-zinc-800 hover:outline hover:outline-2 hover:outline-zinc-800 transition-colors",children:"Hubungi"})})]})]})}):null}},6512:function(e){"use strict";e.exports=[{title:"Beauty & Health",link:"beauty-and-health"},{title:"Sport",link:"sport"},{title:"Property",link:"property"},{title:"Fashion & Accessories",link:"fashion-and-accessories"},{title:"Food & Beverage",link:"food-and-beverage"},{title:"Electronics",link:"electronics"},{title:"Book & Stationary",link:"book-and-stationary"},{title:"Other",link:"other"},{title:"All",link:""}]},7773:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return u}});var r=l(7437),n=l(4606),s=l(6512),a=l.n(s),i=l(2265),o=l(5464),c=l(432),d=l.n(c);function u(){let[e,t]=(0,i.useState)(!1),[l,s]=(0,i.useState)("All"),[c,u]=(0,i.useState)(!1),[f,m]=(0,i.useState)(null),[x,p]=(0,i.useState)([{_id:"",contact:"",details:"",image:"",price:0,tag:[],title:"Loading..."}]),[h,g]=(0,i.useState)(x),b=e=>{let{obj:t}=e;return(0,r.jsx)("div",{className:"flex flex-col items-center",children:(0,r.jsxs)("div",{className:"h-full max-w-min flex flex-col items-center justify-between p-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"h-32 sm:h-48 lg:h-56 aspect-square overflow-hidden bg-white flex flex-col justify-center",children:t.image?(0,r.jsx)("img",{alt:t.title,src:t.image}):(0,r.jsx)("div",{className:"bg-slate-200 animate-pulse w-full h-full"})}),(0,r.jsx)("h1",{className:"py-2 text-center leading-7 font-montserrat font-bold text-base md:text-3xl",children:t.title})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("h1",{className:"text-center font-playfairDisplay font-semibold text-base md:text-2xl italic text-[#B68D40]",children:(0,o.toRupiah)(t.price)}),(0,r.jsx)("button",{onClick:()=>{m(t),u(!0)},className:"cursor:pointer w-full py-1 md:py-3 bg-zinc-700 text-slate-200 text-base md:text-xl hover:bg-zinc-900",children:"Details"})]})]})})},j=async()=>{try{let e=await fetch("/api/katalog/"),t=await e.json();t.katalogs&&(p(t.katalogs),g(t.katalogs))}catch(e){console.error(e)}};return(0,i.useEffect)(()=>{j()},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"min-h-screen flex flex-col items-center pt-36 pb-48",children:(0,r.jsxs)("div",{className:"w-[95%] md:w-4/5 space-y-16",children:[(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)(()=>(0,r.jsxs)("div",{className:"absolute min-w-[15em]",children:[(0,r.jsxs)("button",{onClick:()=>{t(!e)},className:"relative w-full px-4 py-2 flex flex-row items-center text-neutral-400 justify-between border border-neutral-400 "+(e?"border-b-0":""),children:["All"===l?"Category":l,e?(0,r.jsx)(n.jnn,{}):(0,r.jsx)(n.F0C,{})]}),(0,r.jsx)("div",{className:"relative bg-white flex flex-col items-start border text-neutral-400 border-neutral-400 "+(e?"block":"hidden"),children:a().map((e,l)=>(0,r.jsx)("button",{onClick:()=>{s(e.title),t(!1),"All"!=e.title?g(x.filter(t=>t.tag[0]===e.title)):g(x)},className:"w-full text-left",children:(0,r.jsx)("div",{className:"hover:bg-neutral-300/50 px-4 py-2",children:e.title})},l))})]}),{})}),h.length>0?(0,r.jsx)("div",{className:"min-h-min grid grid-cols-2 md:grid-cols-3 gap-y-10",children:h.map((e,t)=>(0,r.jsx)(b,{obj:e},t))}):(0,r.jsx)("div",{className:"w-full text-slate-300 text-center font-poppins text-2xl",children:"Produk tidak ditemukan"})]})}),(0,r.jsx)(d(),{catalog:f,isOpen:c,onClose:()=>u(!1)})]})}},622:function(e,t,l){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=l(2265),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,l){var r,s={},c=null,d=null;for(r in void 0!==l&&(c=""+l),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:d,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},7437:function(e,t,l){"use strict";e.exports=l(622)},1396:function(e,t,l){e.exports=l(6685)},1172:function(e,t,l){"use strict";l.d(t,{w_:function(){return o}});var r=l(2265),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(n),a=function(){return(a=Object.assign||function(e){for(var t,l=1,r=arguments.length;l<r;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e,t){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(l[r[n]]=e[r[n]]);return l};function o(e){return function(t){return r.createElement(c,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,l){return r.createElement(t.tag,a({key:l},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var l,n=e.attr,s=e.size,o=e.title,c=i(e,["attr","size","title"]),d=s||t.size||"1em";return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:l,style:a(a({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==s?r.createElement(s.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){e.O(0,[8447,6685,2971,596,1744],function(){return e(e.s=2371)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{8603:function(e,s,t){Promise.resolve().then(t.bind(t,7886))},1295:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{default:function(){return c},unstable_getImgProps:function(){return o}});let l=t(1024),a=t(2301),n=t(7873),i=t(3222),r=l._(t(6515)),o=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:s}=(0,a.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(s))void 0===t&&delete s[e];return{props:s}},c=i.Image},9449:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let l=t(7437),a=t(4033);e.exports=e=>{let{isOpen:s,onClose:t,endpoint:n,index:i}=e;if(!s)return null;(0,a.useRouter)();let r=async()=>{try{await fetch("/api/".concat(n,"/").concat(i),{method:"DELETE"}),window.location.reload()}catch(e){console.error(e)}};return(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,l.jsxs)("div",{className:"bg-slate-50 font-montserrat w-2/5 justify-between flex flex-col min-h-[16rem] shadow-lg py-10 rounded-lg px-5",children:[(0,l.jsx)("p",{className:"text-center font-bold text-2xl",children:"Delete Items?"}),(0,l.jsxs)("div",{className:"flex gap-5 justify-end",children:[(0,l.jsx)("button",{onClick:t,className:" hover:bg-slate-200 transition-colors px-5 py-2.5 ",children:"Cancel"}),(0,l.jsx)("button",{onClick:()=>{r(),t()},className:"bg-zinc-800 text-slate-200 px-5 py-2.5 hover:outline hover:outline-2 hover:outline-zinc-800 hover:text-zinc-800 hover:bg-transparent transition-colors ",children:"Delete"})]})]})})}},7886:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return x}});var l=t(7437),a=t(1396),n=t.n(a);let i=()=>(0,l.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsx)("div",{className:"aspect-video rounded-md h-36 bg-slate-100 animate-pulse"}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 justify-end w-full",children:[(0,l.jsx)("h1",{className:"w-1/2 h-6 bg-slate-100 animate-pulse"}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)("h1",{className:"w-3/4 h-4 bg-slate-100 animate-pulse"}),(0,l.jsx)("h1",{className:"w-3/4 h-4 bg-slate-100 animate-pulse"})]})]})]}),(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsx)("div",{className:"aspect-video rounded-md h-36 bg-slate-100 animate-pulse"}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 justify-end w-full",children:[(0,l.jsx)("h1",{className:"w-1/2 h-6 bg-slate-100 animate-pulse"}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)("h1",{className:"w-3/4 h-4 bg-slate-100 animate-pulse"}),(0,l.jsx)("h1",{className:"w-3/4 h-4 bg-slate-100 animate-pulse"})]})]})]}),(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsx)("div",{className:"aspect-video rounded-md h-36 bg-slate-100 animate-pulse"}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 justify-end w-full",children:[(0,l.jsx)("h1",{className:"w-1/2 h-6 bg-slate-100 animate-pulse"}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)("h1",{className:"w-3/4 h-4 bg-slate-100 animate-pulse"}),(0,l.jsx)("h1",{className:"w-3/4 h-4 bg-slate-100 animate-pulse"})]})]})]})]});var r=t(2265),o=t(6691),c=t.n(o),d=t(9449),u=t.n(d);function x(){let[e,s]=(0,r.useState)(!1),[t,a]=(0,r.useState)([]),[o,d]=(0,r.useState)(!1),x=async()=>{try{let e=await fetch("/api/admin/activity"),t=await e.json();t.activities&&(a(t.activities),s(!0))}catch(e){console.error(e)}};return(0,r.useEffect)(()=>{x()},[]),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"h-36 flex justify-between items-end w-full border-b-2 py-1",children:[(0,l.jsx)("h1",{className:"font-poppins font-semibold text-4xl",children:"Content List"}),(0,l.jsx)(n(),{href:"/admin/dashboard/News/write",children:(0,l.jsx)("button",{className:"bg-zinc-800 px-5 py-2 text-slate-200 hover:outline hover:outline-2 hover:outline-zinc-800 hover:bg-transparent hover:text-zinc-800 transition-colors duration-200",children:"Write"})})]}),(0,l.jsx)("div",{className:"py-8",children:e?(0,l.jsx)("div",{className:"flex flex-col gap-8",children:t.map((e,s)=>(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsx)("div",{className:"relative h-36 aspect-video",children:(0,l.jsx)(c(),{src:e.image,fill:!0,alt:"",className:"w-full"})}),(0,l.jsxs)("div",{className:"flex flex-col w-full justify-end",children:[(0,l.jsx)("h1",{className:"font-montserrat font-semibold text-2xl",children:e.title}),(0,l.jsx)("p",{className:"line-clamp-3",children:e.details}),(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsx)(n(),{href:"/activity/".concat(e._id),target:"_blank",children:(0,l.jsx)("button",{className:"bg-zinc-800 px-5 py-2 text-slate-200 hover:outline hover:outline-2 hover:outline-zinc-800 hover:bg-transparent hover:text-zinc-800 transition-colors duration-200",children:"Read"})}),(0,l.jsx)("button",{onClick:()=>d(!0),className:"px-5 py-2 text-zinc-800 outline outline-2 outline-zinc-800 hover:outline-none hover:bg-red-500 hover:text-white transition-colors duration-200",children:"Delete"})]})]}),(0,l.jsx)(u(),{isOpen:o,onClose:()=>d(!1),endpoint:"admin/activity",index:e._id})]},s))}):(0,l.jsx)(i,{})})]})}},622:function(e,s,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=t(2265),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var l,n={},c=null,d=null;for(l in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(d=s.ref),s)i.call(s,l)&&!o.hasOwnProperty(l)&&(n[l]=s[l]);if(e&&e.defaultProps)for(l in s=e.defaultProps)void 0===n[l]&&(n[l]=s[l]);return{$$typeof:a,type:e,key:c,ref:d,props:n,_owner:r.current}}s.Fragment=n,s.jsx=c,s.jsxs=c},7437:function(e,s,t){"use strict";e.exports=t(622)},6691:function(e,s,t){e.exports=t(1295)},1396:function(e,s,t){e.exports=t(6685)},4033:function(e,s,t){e.exports=t(8165)}},function(e){e.O(0,[6685,3222,2971,596,1744],function(){return e(e.s=8603)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1630],{3509:function(e,s,t){Promise.resolve().then(t.t.bind(t,759,23))},1295:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{default:function(){return d},unstable_getImgProps:function(){return o}});let a=t(1024),n=t(2301),r=t(7873),i=t(3222),l=a._(t(6515)),o=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:s}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(s))void 0===t&&delete s[e];return{props:s}},d=i.Image},759:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let a=t(1024),n=t(7437),r=a._(t(1396)),i=a._(t(6691)),l=a._(t(7543)),o=t(2265);e.exports=()=>{let[e,s]=(0,o.useState)(0),[t,a]=(0,o.useState)({seeker:0,vacancies:0,catalog:0}),d=async()=>{let e=await fetch("/api/admin/requests"),s=await e.json();a({seeker:s.len[0],vacancies:s.len[1],catalog:s.len[2]})};return(0,o.useEffect)(()=>{let e=window.location.pathname;"/admin/dashboard"===e?s(0):"/admin/dashboard/JobSeeker"===e?s(1):"/admin/dashboard/JobVacancies"===e?s(2):"/admin/dashboard/Catalogs"===e?s(3):"/admin/dashboard/News"===e?s(4):"/admin/dashboard/Users"===e&&s(5)},[]),(0,o.useEffect)(()=>{d()},[]),(0,n.jsxs)("div",{className:"min-h-screen w-1/4 bg-zinc-200",children:[(0,n.jsx)("div",{className:"h-[30%] w-full flex justify-center items-center",children:(0,n.jsx)(r.default,{href:"/",children:(0,n.jsx)(i.default,{src:l.default,alt:"Logo",priority:!0,className:"w-28 bg-secondary"})})}),(0,n.jsxs)("div",{className:"flex flex-col justify-between h-[32rem]",children:[(0,n.jsxs)("div",{className:"px-6 font-montserrat text-lg space-y-4",children:[(0,n.jsx)("div",{children:0===e?(0,n.jsx)("button",{className:"text-[#B68D40] font-semibold",children:"Home"}):(0,n.jsx)(r.default,{href:"/admin/dashboard",children:(0,n.jsx)("button",{onClick:()=>{s(0)},children:"Home"})})}),(0,n.jsx)("div",{children:4===e?(0,n.jsx)("button",{className:"text-[#B68D40] font-semibold",children:"News"}):(0,n.jsx)(r.default,{href:"/admin/dashboard/News",children:(0,n.jsx)("button",{onClick:()=>{s(4)},children:"News"})})}),(0,n.jsx)("div",{children:5===e?(0,n.jsx)("button",{className:"text-[#B68D40] font-semibold",children:"Users"}):(0,n.jsx)(r.default,{href:"/admin/dashboard/Users",children:(0,n.jsx)("button",{onClick:()=>{s(5)},children:"Users"})})}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("h1",{className:"font-bold",children:"Job Opportunities"}),(0,n.jsxs)("div",{className:"flex flex-col pl-4 items-start",children:[1===e?(0,n.jsxs)("button",{className:"text-[#B68D40] font-semibold",children:["Job Seeker (",t.seeker,")"]}):(0,n.jsx)(r.default,{href:"/admin/dashboard/JobSeeker",children:(0,n.jsxs)("button",{onClick:()=>{s(1)},children:["Job Seeker (",t.seeker,")"]})}),2===e?(0,n.jsxs)("button",{className:"text-[#B68D40] font-semibold",children:["Job Vacancies (",t.vacancies,")"]}):(0,n.jsx)(r.default,{href:"/admin/dashboard/JobVacancies",children:(0,n.jsxs)("button",{onClick:()=>{s(2)},children:["Job Vacancies (",t.vacancies,")"]})})]})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("h1",{className:"font-bold",children:"Online Catalog"}),(0,n.jsx)("div",{className:"flex justify-start items-center",children:3===e?(0,n.jsxs)("button",{className:"text-[#B68D40] pl-4 font-semibold",children:["Catalog (",t.catalog,")"]}):(0,n.jsx)(r.default,{href:"/admin/dashboard/Catalogs",children:(0,n.jsxs)("button",{className:"pl-4",onClick:()=>{s(3)},children:["Catalog (",t.catalog,")"]})})})]})]}),(0,n.jsxs)("div",{className:"px-6 space-y-8",children:[(0,n.jsx)(r.default,{href:"/",children:(0,n.jsx)("button",{className:"font-montserrat text-2xl px-5 py-2.5 hover:bg-zinc-800 transition-colors duration-200 hover:text-slate-200 rounded-md",children:"Exit Dashboard"})}),(0,n.jsx)("div",{className:"border-b border-zinc-400"}),(0,n.jsx)("div",{className:"font-montserrat text-sm text-zinc-400",children:(0,n.jsx)("p",{children:"e-Mail : admin@komunitasprofesigkipi.org"})})]})]})]})}},7543:function(e,s,t){"use strict";t.r(s),s.default={src:"/_next/static/media/Logo.4ebef769.png",height:600,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXG0fFm4jnycZVDIs62xd2iulYETGQStAAAAB3RSTlMACzYYgSo/vZW4bwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAClJREFUeJxjYEACjIwQmpmJiRnMZ2VhYQWJMTKxsDCBJZnZIFIIxRAAAAjnAD8v98OMAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},622:function(e,s,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=t(2265),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,t){var a,r={},d=null,c=null;for(a in void 0!==t&&(d=""+t),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(c=s.ref),s)i.call(s,a)&&!o.hasOwnProperty(a)&&(r[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===r[a]&&(r[a]=s[a]);return{$$typeof:n,type:e,key:d,ref:c,props:r,_owner:l.current}}s.Fragment=r,s.jsx=d,s.jsxs=d},7437:function(e,s,t){"use strict";e.exports=t(622)},6691:function(e,s,t){e.exports=t(1295)},1396:function(e,s,t){e.exports=t(6685)}},function(e){e.O(0,[6685,3222,2971,596,1744],function(){return e(e.s=3509)}),_N_E=e.O()}]);
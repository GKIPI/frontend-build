(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8425],{2327:function(e,t,n){Promise.resolve().then(n.bind(n,6092))},6092:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(7437),o=n(1396),s=n.n(o),a=n(2265);function i(){let[e,t]=(0,a.useState)(""),[n,o]=(0,a.useState)(""),[i,l]=(0,a.useState)(""),c=async t=>{t.preventDefault();let r=await fetch("/api/admin/activity",{method:"POST",body:JSON.stringify({title:n,image:e,details:i,user:"GKI Pondok Indah"})}),o=await r.json();console.log(o)},u=async()=>{let e=await fetch("/api/admin/activity"),t=await e.json();console.log(t)};return(0,a.useEffect)(()=>{u()},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(s(),{href:"/admin/dashboard/News",children:(0,r.jsx)("button",{className:"bg-zinc-800 px-5 py-2 text-slate-200 hover:outline hover:outline-2 hover:outline-zinc-800 hover:bg-transparent hover:text-zinc-800 transition-colors duration-200",children:"Kembali"})}),(0,r.jsx)("div",{children:(0,r.jsxs)("form",{onSubmit:c,className:"flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsx)("p",{children:"Upload cover"}),(0,r.jsx)("input",{className:"text-sm",type:"file",accept:"image/*",onChange:e=>{let n=e.target.files[0];if(n){let e=new FileReader;e.onload=e=>{let n=e.target.result;t(n)},e.readAsDataURL(n)}}})]}),(0,r.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,r.jsx)("p",{className:"font-poppins",children:"Title"}),(0,r.jsx)("input",{className:"border focus:border-blue-500 font-poppins text-sm rounded-md px-4 py-2 focus:outline-none",type:"text",value:n,onChange:e=>o(e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Content"}),(0,r.jsx)("textarea",{wrap:"hard",className:"w-1/2 border focus:border-blue-500 font-poppins text-sm rounded-md px-4 py-2 focus:outline-none",value:i,onChange:e=>l(e.target.value)})]}),(0,r.jsx)("div",{className:"w-1/2 flex justify-end",children:(0,r.jsx)("button",{type:"submit",className:"bg-zinc-800 px-5 py-2 text-slate-200 hover:outline hover:outline-2 hover:outline-zinc-800 hover:bg-transparent hover:text-zinc-800 transition-colors duration-200",children:"Upload"})})]})})]})}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(6685)}},function(e){e.O(0,[6685,2971,596,1744],function(){return e(e.s=2327)}),_N_E=e.O()}]);
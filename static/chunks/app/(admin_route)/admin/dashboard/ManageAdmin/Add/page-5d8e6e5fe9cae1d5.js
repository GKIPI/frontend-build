(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{7755:function(e,r,t){Promise.resolve().then(t.bind(t,2912))},2912:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(7437),s=t(8920),a=t(2265),o=t(1396),i=t.n(o),l=t(4033);function c(){let[e,r]=(0,a.useState)(!0),[t,o]=(0,a.useState)(""),[c,d]=(0,a.useState)(""),[u,p]=(0,a.useState)(""),h=(0,l.useRouter)(),f=async e=>{try{let r=await fetch("/api/auth/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});await r.json(),o(""),d(""),p(""),h.push("/admin/dashboard/ManageAdmin")}catch(e){console.error(e)}};return(0,n.jsxs)("section",{className:" w-full flex flex-col gap-10",children:[(0,n.jsx)("h1",{className:"text-4xl font-montserrat font-bold border-b-2 border-spacing-5",children:"Add Admin"}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),f({name:t,email:c,password:u,role:"admin"})},className:"w-1/2 font-montserrat text-lg flex flex-col gap-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Name:"}),(0,n.jsx)("input",{type:"text",placeholder:"Masukkan nama lengkap...",className:"border w-full border-zinc-800 rounded-md px-[29px] py-4",value:t,onChange:e=>{o(e.target.value)},required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Email:"}),(0,n.jsx)("input",{type:"text",placeholder:"Masukkan alamat email...",className:"border w-full border-zinc-800 rounded-md px-[29px] py-4",value:c,onChange:e=>{d(e.target.value)},required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Password:"}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("input",{type:e?"password":"show",placeholder:"Buat password",className:"border border-zinc-800 rounded-md px-[29px] py-4 w-full",value:u,onChange:e=>p(e.target.value),required:!0}),(0,n.jsx)("div",{className:"cursor-pointer inset-y-0 pr-5 absolute right-0 flex items-center",children:e?(0,n.jsx)(s.FiEyeOff,{size:20,onClick:()=>r(!e)}):(0,n.jsx)(s.FiEye,{size:20,onClick:()=>r(!e)})})]})]}),(0,n.jsx)("div",{className:"flex justify-end",children:(0,n.jsx)("button",{className:"bg-zinc-800 px-10 py-4 text-slate-200 hover:outline hover:outline-2 hover:outline-zinc-800 hover:bg-transparent hover:text-zinc-800 transition-colors duration-200",children:"Submit"})})]}),(0,n.jsx)("div",{children:(0,n.jsx)(i(),{href:"/admin/dashboard/ManageAdmin",children:(0,n.jsx)("button",{className:"bg-zinc-800 px-5 py-2 text-slate-200 hover:outline hover:outline-2 hover:outline-zinc-800 hover:bg-transparent hover:text-zinc-800 transition-colors duration-200",children:"Back"})})})]})}},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(2265),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,a={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,n)&&!l.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:i.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},7437:function(e,r,t){"use strict";e.exports=t(622)},1396:function(e,r,t){e.exports=t(6685)},4033:function(e,r,t){e.exports=t(8165)}},function(e){e.O(0,[6685,8920,2971,596,1744],function(){return e(e.s=7755)}),_N_E=e.O()}]);
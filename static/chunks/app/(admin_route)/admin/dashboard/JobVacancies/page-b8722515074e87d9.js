(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8736],{3371:function(e,s,t){Promise.resolve().then(t.bind(t,7241))},3361:function(e,s,t){"use strict";t.r(s),t.d(s,{downloadImage:function(){return n},downloadPDf:function(){return l},parseBlobToURL:function(){return a}});let n=(e,s)=>{let t=atob(e.split(",")[1]),n=new ArrayBuffer(t.length),l=new Uint8Array(n);for(let e=0;e<t.length;e++)l[e]=t.charCodeAt(e);let a=new Blob([n],{type:"image/jpeg"}),r=URL.createObjectURL(a),c=document.createElement("a");c.href=r,c.download="".concat(s,".jpg"),document.body.appendChild(c),c.click(),document.body.removeChild(c)},l=(e,s)=>{let t=atob(e.split(",")[1]),n=new ArrayBuffer(t.length),l=new Uint8Array(n);for(let e=0;e<t.length;e++)l[e]=t.charCodeAt(e);let a=new Blob([n],{type:"application/pdf"}),r=URL.createObjectURL(a),c=document.createElement("a");c.href=r,c.download="".concat(s,".pdf"),document.body.appendChild(c),c.click(),document.body.removeChild(c)},a=e=>{if(!e)return null;let s=atob(e.split(",")[1]),t=new ArrayBuffer(s.length),n=new Uint8Array(t);for(let e=0;e<s.length;e++)n[e]=s.charCodeAt(e);let l=new Blob([t],{type:"image/jpeg"}),a=URL.createObjectURL(l);return a}},5464:function(e,s,t){"use strict";t.r(s),t.d(s,{toRupiah:function(){return n}});let n=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e)},3911:function(e,s,t){"use strict";t.r(s),t.d(s,{getRequestedData:function(){return l},requestCounter:function(){return n}});let n=e=>{let s=e.filter(e=>!e.approval);return s.length},l=e=>{let s=e.filter(e=>!e.approval);return s}},9449:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let n=t(7437),l=t(4033);e.exports=e=>{let{isOpen:s,onClose:t,endpoint:a,index:r}=e;if(!s)return null;(0,l.useRouter)();let c=async()=>{try{await fetch("/api/".concat(a,"/").concat(r),{method:"DELETE"}),window.location.reload()}catch(e){console.error(e)}};return(0,n.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,n.jsxs)("div",{className:"bg-slate-50 font-montserrat w-2/5 justify-between flex flex-col min-h-[16rem] shadow-lg py-10 rounded-lg px-5",children:[(0,n.jsx)("p",{className:"text-center font-bold text-2xl",children:"Delete Items?"}),(0,n.jsxs)("div",{className:"flex gap-5 justify-end",children:[(0,n.jsx)("button",{onClick:t,className:" hover:bg-slate-200 transition-colors px-5 py-2.5 ",children:"Cancel"}),(0,n.jsx)("button",{onClick:()=>{c(),t()},className:"bg-zinc-800 text-slate-200 px-5 py-2.5 hover:outline hover:outline-2 hover:outline-zinc-800 hover:text-zinc-800 hover:bg-transparent transition-colors ",children:"Delete"})]})]})})}},701:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let n=t(7437),l=t(2265);t(5464),e.exports=e=>{let{isOpen:s,onClose:t,vacancyId:a}=e,[r,c]=(0,l.useState)({_id:"",user:"Loading...",image:["Loading..."],jobTitle:"Loading...",company:"Loading...",image:"",location:"Loading...",notes:"Loading...",tag:["Loading...","Loading..."],approval:!0}),i=async()=>{try{let e=await fetch("/api/admin/vacancy/".concat(a)),s=await e.json();s.vacancy&&c(s.vacancy)}catch(e){console.error(e)}};return((0,l.useEffect)(()=>{i()},[s]),s)?(0,n.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,n.jsxs)("div",{className:"bg-slate-50 w-3/5 min-h-[35rem] shadow-lg space-y-28 rounded-lg px-5 py-16 font-montserrat",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("p",{className:"w-[25%] font-semibold",children:"Email"}),(0,n.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:r.user})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("p",{className:"w-[25%] font-semibold",children:"Perusahaan"}),(0,n.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:r.company})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("p",{className:"w-[25%] font-semibold",children:"Lokasi"}),(0,n.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:r.location})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("p",{className:"w-[25%] font-semibold",children:"Posisi"}),(0,n.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:r.jobTitle})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("p",{className:"w-[25%] font-semibold",children:"Tag"}),(0,n.jsxs)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:[r.tag[0]," |"," ",(0,n.jsx)("span",{className:"font-bold",children:r.tag[1]})]})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("p",{className:"w-[25%] font-semibold",children:"Note"}),(0,n.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:r.notes})]})]}),(0,n.jsx)("div",{className:"flex justify-end",children:(0,n.jsx)("button",{onClick:t,className:"bg-zinc-800 px-5 py-1 text-lg text-slate-200 hover:bg-transparent hover:text-zinc-800 hover:outline hover:outline-2 hover:outline-zinc-800 transition-colors",children:"OK"})})]})}):null}},4154:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let n=t(7437),l=t(8920),a=t(3361);e.exports=e=>{let{isOpen:s,onClose:t,src:r}=e,{currImageOpen:c,currImageTitle:i}=r;return s?(0,n.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,n.jsxs)("div",{className:"bg-slate-50 w-2/5 min-h-[43rem] shadow-lg space-y-8 rounded-lg px-5",children:[(0,n.jsxs)("div",{className:"flex flex-row justify-between items-center mt-1",children:[(0,n.jsx)("h1",{className:" w-3/4 line-clamp-1",children:i}),(0,n.jsx)("button",{onClick:t,children:(0,n.jsx)(l.FiX,{size:20})})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,n.jsx)("div",{className:"w-3/4 aspect-square ".concat(c?"":"animate-pulse bg-slate-300"),children:(0,n.jsx)("img",{src:c})}),(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)("button",{disabled:!0,className:"cursor-not-allowed px-4 py-1 bg-zinc-800 text-slate-200 font-montserrat text-xl hover:outline hover:outline-2 hover:bg-transparent hover:outline-zinc-800 hover:text-zinc-800 transition-colors",children:"View"}),(0,n.jsx)("button",{onClick:()=>{(0,a.downloadImage)(c,i)},className:"px-4 py-1 bg-zinc-800 text-slate-200 font-montserrat text-xl hover:outline hover:outline-2 hover:bg-transparent hover:outline-zinc-800 hover:text-zinc-800 transition-colors",children:"Download"})]})]})]})}):null}},9080:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let n=t(1024),l=t(7437),a=t(8920),r=t(6820);t(1396);let c=t(2265);t(3911),t(5464);let i=t(3361),o=n._(t(9449)),d=t(4033);e.exports=e=>{let{isOpen:s,onClose:t,requests:n}=e,[x,m]=(0,c.useState)(!1),[h,p]=(0,c.useState)("");(0,d.useRouter)();let u=e=>{let s=(0,i.parseBlobToURL)(e);window.open(s,"_blank")},b=async(e,s)=>{try{await fetch("/api/vacancy/".concat(s),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),window.location.reload()}catch(e){console.error(e)}},j=e=>{b({approval:!0},e)};return s?(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,l.jsxs)("div",{className:"bg-slate-50 w-[98%] min-h-[40rem] shadow-lg space-y-28 rounded-lg px-5 py-5 font-montserrat",children:[(0,l.jsx)("div",{className:"flex flex-row justify-end items-center",children:(0,l.jsx)("button",{onClick:t,children:(0,l.jsx)(a.FiX,{size:20})})}),(0,l.jsxs)("table",{className:"w-full border-collapse border border-zinc-800 text-left table-fixed",children:[(0,l.jsx)("thead",{className:"font-montserrat text-xs md:text-sm",children:(0,l.jsxs)("tr",{className:"border border-b border-zinc-800 bg-zinc-200",children:[(0,l.jsx)("th",{className:"py-2 pl-4",children:"Email"}),(0,l.jsx)("th",{className:"py-2",children:"Perusahaan"}),(0,l.jsx)("th",{className:"py-2",children:"Lokasi"}),(0,l.jsx)("th",{className:"py-2",children:"Posisi"}),(0,l.jsx)("th",{className:"py-2",children:"Note"}),(0,l.jsx)("th",{className:"py-2",children:"Gambar"}),(0,l.jsx)("th",{className:"py-2",children:"Tag"}),(0,l.jsx)("th",{className:"py-2"})]})}),(0,l.jsx)("tbody",{className:"text-sm font-montserrat text-zinc-600",children:n.map((e,s)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-4 pl-4 border-b border-zinc-800",children:(0,l.jsx)("div",{className:"pr-2",children:(0,l.jsx)("p",{children:e.user})})}),(0,l.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,l.jsx)("div",{className:"pr-2",children:(0,l.jsx)("p",{children:e.company})})}),(0,l.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,l.jsx)("div",{className:"pr-2",children:(0,l.jsx)("p",{children:e.location})})}),(0,l.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,l.jsx)("div",{className:"pr-2",children:(0,l.jsx)("p",{children:e.jobTitle})})}),(0,l.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,l.jsx)("div",{className:"pr-2",children:(0,l.jsx)("p",{children:e.notes})})}),(0,l.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,l.jsx)("div",{className:"pr-2",children:(0,l.jsxs)("button",{onClick:()=>u(e.image),className:"flex gap-1 items-center",children:[(0,l.jsx)(r.BiSolidFileJpg,{size:20}),(0,l.jsx)("p",{className:"line-clamp-1 text-amber-400 hover:underline italic",children:"".concat(e.company,"_").concat(e.jobTitle)})]})})}),(0,l.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,l.jsx)("div",{className:"pr-2",children:(0,l.jsxs)("p",{children:[e.tag[0]," |"," ",(0,l.jsx)("span",{className:"font-bold",children:e.tag[1]})]})})}),(0,l.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,l.jsxs)("div",{className:"flex flex-row items-center justify-center gap-3",children:[(0,l.jsx)("button",{onClick:()=>{j(e._id)},title:"accept",className:"bg-green-500 hover:bg-green-600 p-1 rounded-md text-slate-200",children:(0,l.jsx)(r.BiSolidUserCheck,{size:20})}),(0,l.jsx)("button",{onClick:()=>{p(e._id),m(!0)},className:"bg-red-500 hover:bg-red-600 p-1 rounded-md text-slate-200",children:(0,l.jsx)(r.BiTrash,{size:20})})]})})]},s))})]}),(0,l.jsx)(o.default,{onClose:()=>m(!1),isOpen:x,endpoint:"vacancy",index:h})]})}):null}},7241:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var n=t(7437),l=t(9150),a=t(2265),r=t(3911),c=t(9449),i=t.n(c),o=t(4154),d=t.n(o),x=t(701),m=t.n(x),h=t(9080),p=t.n(h);function u(){let[e,s]=(0,a.useState)(!1),[t,c]=(0,a.useState)(!1),[o,x]=(0,a.useState)(!1),[h,u]=(0,a.useState)(!1),[b,j]=(0,a.useState)(""),[f,N]=(0,a.useState)(""),[y,g]=(0,a.useState)(""),[v,w]=(0,a.useState)([]),[z,_]=(0,a.useState)([{_id:"",user:"Loading...",image:["Loading..."],jobTitle:"Loading...",company:"Loading...",image:"",location:"Loading...",notes:"Loading...",tag:["Loading...","Loading..."],createdAt:"",approval:!0}]),C=async()=>{try{let e=await fetch("/api/admin/vacancy"),s=await e.json();s.vacancies&&(_(s.vacancies),w((0,r.getRequestedData)(s.vacancies)))}catch(e){console.error(e)}};return(0,a.useEffect)(()=>{C()},[]),(0,n.jsxs)("section",{className:"space-y-10",children:[(0,n.jsx)("h1",{className:"font-montserrat text-2xl md:text-4xl font-bold pt-16",children:"Job Vacancies"}),(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("div",{className:"flex justify-end",children:(0,n.jsxs)("button",{onClick:()=>u(!0),className:"font-montserrat bg-zinc-800 text-slate-200 px-4 py-2 hover:bg-transparent hover:text-zinc-800 hover:outline hover:outline-2 hover:outline-zinc-800 transi duration-200",children:["Review (",v.length,")"]})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("table",{className:"w-full border-collapse border border-zinc-800 text-left table-fixed",children:[(0,n.jsx)("thead",{className:"font-montserrat text-xs md:text-sm",children:(0,n.jsxs)("tr",{className:"border border-b border-zinc-800 bg-zinc-200",children:[(0,n.jsx)("th",{className:"py-2 pl-4",children:"Job"}),(0,n.jsx)("th",{className:"py-2 line-clamp-1",children:"Company"}),(0,n.jsx)("th",{className:"py-2",children:"Location"}),(0,n.jsx)("th",{className:"py-2",children:"Notes"}),(0,n.jsx)("th",{className:"py-2",children:"Created At"}),(0,n.jsx)("th",{className:"py-2",children:"Poster"}),(0,n.jsx)("th",{className:"py-2"})]})}),(0,n.jsx)("tbody",{className:"text-sm font-montserrat text-zinc-600",children:z.map((e,t)=>e.approval?(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"py-4 pl-4 border-b border-zinc-800",children:(0,n.jsx)("p",{className:"line-clamp-1",children:e.jobTitle})}),(0,n.jsx)("td",{className:"border-b border-zinc-800",children:(0,n.jsx)("p",{className:"line-clamp-1",children:e.company})}),(0,n.jsx)("td",{className:"border-b border-zinc-800",children:(0,n.jsx)("p",{className:"line-clamp-1",children:e.location})}),(0,n.jsx)("td",{className:"border-b border-zinc-800",children:(0,n.jsx)("p",{className:"line-clamp-2",children:e.notes})}),(0,n.jsx)("td",{className:"border-b border-zinc-800",children:(0,n.jsx)("p",{className:"line-clamp-2",children:new Date(e.createdAt).toLocaleString("en-UK")})}),(0,n.jsx)("td",{className:"border-b border-zinc-800",children:(0,n.jsx)("div",{className:"flex flex-row items-center gap-3",children:(0,n.jsx)("button",{onClick:()=>{g("".concat(e.company," - ").concat(e.jobTitle)),N(e.image),s(!0)},children:(0,n.jsx)(l.Ehc,{title:"view PDF",size:25,className:"hover:text-blue-400"})})})}),(0,n.jsx)("td",{className:"border-b border-zinc-800",children:(0,n.jsxs)("div",{className:"flex flex-row items-center gap-3",children:[(0,n.jsx)("button",{onClick:()=>{j(e._id),c(!0)},children:(0,n.jsx)(l.Zju,{size:25,title:"view",className:"hover:text-blue-400"})}),(0,n.jsx)("button",{className:"cursor-not-allowed text-slate-300",disabled:!0,children:(0,n.jsx)(l.lFz,{size:25,title:"edit"})}),(0,n.jsx)("button",{onClick:()=>{j(e._id),x(!0)},children:(0,n.jsx)(l.VPh,{size:25,title:"delete",className:"hover:text-red-400"})})]})})]}):null)})]}),(0,n.jsx)(p(),{requests:v,isOpen:h,onClose:()=>u(!1)}),(0,n.jsx)(i(),{endpoint:"vacancy",index:b,onClose:()=>x(!1),isOpen:o}),(0,n.jsx)(d(),{src:{currImageOpen:f,currImageTitle:y},isOpen:e,onClose:()=>s(!1)}),(0,n.jsx)(m(),{isOpen:t,onClose:()=>c(!1),vacancyId:b})]})]})]})}},622:function(e,s,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(2265),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,t){var n,a={},o=null,d=null;for(n in void 0!==t&&(o=""+t),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(d=s.ref),s)r.call(s,n)&&!i.hasOwnProperty(n)&&(a[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:l,type:e,key:o,ref:d,props:a,_owner:c.current}}s.Fragment=a,s.jsx=o,s.jsxs=o},7437:function(e,s,t){"use strict";e.exports=t(622)},1396:function(e,s,t){e.exports=t(6685)},4033:function(e,s,t){e.exports=t(8165)}},function(e){e.O(0,[3712,6115,6685,8920,2971,596,1744],function(){return e(e.s=3371)}),_N_E=e.O()}]);
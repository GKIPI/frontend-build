(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4378],{6950:function(e,s,t){Promise.resolve().then(t.bind(t,9686))},3361:function(e,s,t){"use strict";t.r(s),t.d(s,{downloadImage:function(){return l},parseBlobToURL:function(){return n}});let l=(e,s)=>{let t=atob(e.split(",")[1]),l=new ArrayBuffer(t.length),n=new Uint8Array(l);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);let r=new Blob([l],{type:"image/jpeg"}),a=URL.createObjectURL(r),i=document.createElement("a");i.href=a,i.download="".concat(s,".jpg"),document.body.appendChild(i),i.click(),document.body.removeChild(i)},n=e=>{if(!e)return null;let s=atob(e.split(",")[1]),t=new ArrayBuffer(s.length),l=new Uint8Array(t);for(let e=0;e<s.length;e++)l[e]=s.charCodeAt(e);let n=new Blob([t],{type:"image/jpeg"}),r=URL.createObjectURL(n);return r}},3911:function(e,s,t){"use strict";t.r(s),t.d(s,{getRequestedData:function(){return n},requestCounter:function(){return l}});let l=e=>{let s=e.filter(e=>!e.approval);return s.length},n=e=>{let s=e.filter(e=>!e.approval);return s}},9449:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let l=t(7437),n=t(4033);e.exports=e=>{let{isOpen:s,onClose:t,endpoint:r,index:a}=e;if(!s)return null;(0,n.useRouter)();let i=async()=>{try{await fetch("/api/".concat(r,"/").concat(a),{method:"DELETE"}),window.location.reload()}catch(e){console.error(e)}};return(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,l.jsxs)("div",{className:"bg-slate-50 font-montserrat w-2/5 justify-between flex flex-col min-h-[16rem] shadow-lg py-10 rounded-lg px-5",children:[(0,l.jsx)("p",{className:"text-center font-bold text-2xl",children:"Delete Items?"}),(0,l.jsxs)("div",{className:"flex gap-5 justify-end",children:[(0,l.jsx)("button",{onClick:t,className:" hover:bg-slate-200 transition-colors px-5 py-2.5 ",children:"Cancel"}),(0,l.jsx)("button",{onClick:()=>{i(),t()},className:"bg-zinc-800 text-slate-200 px-5 py-2.5 hover:outline hover:outline-2 hover:outline-zinc-800 hover:text-zinc-800 hover:bg-transparent transition-colors ",children:"Delete"})]})]})})}},7204:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let l=t(7437),n=t(8920),r=t(3361);e.exports=e=>{let{isOpen:s,onClose:t,src:a}=e,{currItem:i,currCVOpen:c}=a;return s?(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,l.jsxs)("div",{className:"bg-slate-50 w-2/5 min-h-[43rem] shadow-lg space-y-8 rounded-lg px-5",children:[(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center mt-1",children:[(0,l.jsx)("h1",{className:" w-3/4 line-clamp-1",children:i}),(0,l.jsx)("button",{onClick:t,children:(0,l.jsx)(n.FiX,{size:20})})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,l.jsx)("div",{className:"w-3/4 ".concat(c?"":"animate-pulse bg-slate-300"),children:(0,l.jsx)("img",{src:c})}),(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsx)("button",{disabled:!0,className:"cursor-not-allowed px-4 py-1 bg-zinc-800 text-slate-200 font-montserrat text-xl hover:outline hover:outline-2 hover:bg-transparent hover:outline-zinc-800 hover:text-zinc-800 transition-colors",children:"View"}),(0,l.jsx)("button",{onClick:()=>{(0,r.downloadImage)(c,i)},className:"px-4 py-1 bg-zinc-800 text-slate-200 font-montserrat text-xl hover:outline hover:outline-2 hover:bg-transparent hover:outline-zinc-800 hover:text-zinc-800 transition-colors",children:"Download"})]})]})]})}):null}},3605:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let l=t(7437),n=t(2265),r=t(6820),a=t(3361);e.exports=e=>{let{isOpen:s,onClose:t,seekerId:i}=e,[c,d]=(0,n.useState)({_id:"",user:"Loading...",name:"Loading...",sex:"Loading...",jobTitle:"Loading...",skills:"Loading...",tag:["Loading...","Loading..."],education:"Loading...",age:"Loading..."}),o=e=>{let s=(0,a.parseBlobToURL)(e);window.open(s,"_blank")},x=async()=>{try{let e=await fetch("/api/admin/seeker/".concat(i)),s=await e.json();s.seeker&&d(s.seeker)}catch(e){console.error(e)}};return((0,n.useEffect)(()=>{x()},[s]),s)?(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,l.jsxs)("div",{className:"bg-slate-50 w-3/5 min-h-[35rem] shadow-lg space-y-28 rounded-lg px-5 py-16 font-montserrat",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Nama"}),(0,l.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:c.name})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Foto"}),(0,l.jsxs)("button",{onClick:()=>o(c.image),className:"bg-transparent rounded-lg flex gap-2 items-center",children:[(0,l.jsx)(r.BiSolidFileJpg,{size:15}),(0,l.jsx)("p",{className:"italic text-amber-400 hover:underline",children:c.name})]})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Jenis Kelamin"}),(0,l.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:c.sex})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Usia"}),(0,l.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:c.age})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Pendidikan"}),(0,l.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:c.education})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Keahlian"}),(0,l.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:c.skills})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Pengalaman"}),(0,l.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:c.jobTitle})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Kategori"}),(0,l.jsxs)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:[(0,l.jsx)("span",{children:c.tag[0]})," |"," ",(0,l.jsx)("span",{className:"font-bold",children:c.tag[1]})]})]})]}),(0,l.jsx)("div",{className:"flex justify-end",children:(0,l.jsx)("button",{onClick:t,className:"bg-zinc-800 px-5 py-1 text-lg text-slate-200 hover:bg-transparent hover:text-zinc-800 hover:outline hover:outline-2 hover:outline-zinc-800 transition-colors",children:"OK"})})]})}):null}},2664:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let l=t(1024),n=t(7437),r=t(8920),a=t(6820),i=t(2265),c=l._(t(9449)),d=t(3361);e.exports=e=>{let{isOpen:s,onClose:t,requests:l}=e,[o,x]=(0,i.useState)(!1),[m,h]=(0,i.useState)(""),p=e=>{let s=(0,d.parseBlobToURL)(e);window.open(s,"_blank")},j=async(e,s)=>{try{let t=await fetch("/api/seeker/".concat(s),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});await t.json(),window.location.reload()}catch(e){console.error(e)}},u=e=>{j({approval:!0},e)};return s?(0,n.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,n.jsxs)("div",{className:"bg-slate-50 w-[98%] min-h-[40rem] shadow-lg space-y-28 rounded-lg px-5 py-5 font-montserrat",children:[(0,n.jsx)("div",{className:"flex flex-row justify-end items-center",children:(0,n.jsx)("button",{onClick:t,children:(0,n.jsx)(r.FiX,{size:20})})}),(0,n.jsxs)("table",{className:"w-full border-collapse border border-zinc-800 text-left table-fixed",children:[(0,n.jsx)("thead",{className:"font-montserrat text-xs md:text-sm",children:(0,n.jsxs)("tr",{className:"border border-b border-zinc-800 bg-zinc-200",children:[(0,n.jsx)("th",{className:"py-2 pl-4",children:"Nama"}),(0,n.jsx)("th",{className:"py-2",children:"Pendidikan"}),(0,n.jsx)("th",{className:"py-2",children:"Posisi"}),(0,n.jsx)("th",{className:"py-2",children:"Jenis Kelamin"}),(0,n.jsx)("th",{className:"py-2",children:"Keahlian"}),(0,n.jsx)("th",{className:"py-2",children:"Tag"}),(0,n.jsx)("th",{className:"py-2",children:"Usia"}),(0,n.jsx)("th",{className:"py-2",children:"CV"}),(0,n.jsx)("th",{className:"py-2",children:"Foto"}),(0,n.jsx)("th",{className:"py-2"})]})}),(0,n.jsx)("tbody",{className:"text-sm font-montserrat text-zinc-600",children:l.map((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"py-4 pl-4 border-b border-zinc-800",children:(0,n.jsx)("div",{className:"pr-2",children:(0,n.jsx)("p",{children:e.name})})}),(0,n.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,n.jsx)("div",{className:"pr-2",children:(0,n.jsx)("p",{children:e.education})})}),(0,n.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,n.jsx)("div",{className:"pr-2",children:(0,n.jsx)("p",{children:e.jobTitle})})}),(0,n.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,n.jsx)("div",{className:"pr-2",children:(0,n.jsx)("p",{children:e.sex})})}),(0,n.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,n.jsx)("div",{className:"pr-2",children:(0,n.jsx)("p",{children:e.skills})})}),(0,n.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,n.jsx)("div",{className:"pr-2",children:(0,n.jsxs)("p",{children:[(0,n.jsxs)("span",{children:[e.tag[0]," "]}),"|",(0,n.jsxs)("span",{className:"font-bold",children:[" ",e.tag[1]]})]})})}),(0,n.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,n.jsx)("div",{className:"pr-2",children:(0,n.jsx)("p",{children:e.age})})}),(0,n.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,n.jsx)("div",{className:"pr-2",children:(0,n.jsxs)("button",{onClick:()=>p(e.image),className:"flex gap-1 items-center",children:[(0,n.jsx)(a.BiSolidFileJpg,{size:20}),(0,n.jsx)("p",{className:"line-clamp-1 text-amber-400 hover:underline italic",children:e.name})]})})}),(0,n.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,n.jsx)("div",{className:"pr-2",children:(0,n.jsxs)("button",{onClick:()=>p(e.image),className:"flex gap-1 items-center",children:[(0,n.jsx)(a.BiSolidFileJpg,{size:20}),(0,n.jsx)("p",{className:"line-clamp-1 text-amber-400 hover:underline italic",children:e.name})]})})}),(0,n.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,n.jsxs)("div",{className:"flex flex-row items-center justify-center gap-3",children:[(0,n.jsx)("button",{onClick:()=>{u(e._id)},title:"accept",className:"bg-green-500 hover:bg-green-600 p-1 rounded-md text-slate-200",children:(0,n.jsx)(a.BiSolidUserCheck,{size:20})}),(0,n.jsx)("button",{onClick:()=>{h(e._id),x(!0)},className:"bg-red-500 hover:bg-red-600 p-1 rounded-md text-slate-200",children:(0,n.jsx)(a.BiTrash,{size:20})})]})})]},s))})]}),(0,n.jsx)(c.default,{onClose:()=>x(!1),isOpen:o,endpoint:"seeker",index:m})]})}):null}},9686:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return j}});var l=t(7437),n=t(2265),r=t(9150),a=t(7204),i=t.n(a),c=t(3605),d=t.n(c),o=t(2664),x=t.n(o),m=t(9449),h=t.n(m),p=t(3911);function j(){let[e,s]=(0,n.useState)(!1),[t,a]=(0,n.useState)(!1),[c,o]=(0,n.useState)(!1),[m,j]=(0,n.useState)(!1),[u,b]=(0,n.useState)(""),[f,N]=(0,n.useState)(""),[g,v]=(0,n.useState)(""),[y,w]=(0,n.useState)([]),[z,k]=(0,n.useState)([{_id:"",name:"Loading...",image:"",skills:"Loading...",education:"Loading...",approval:!0,tag:["Loading List..."]}]),_=async()=>{try{let e=await fetch("/api/admin/seeker"),s=await e.json();s.seekers&&(k(s.seekers),w((0,p.getRequestedData)(s.seekers)))}catch(e){console.error(e)}};return(0,n.useEffect)(()=>{_()},[]),(0,l.jsxs)("section",{className:"space-y-10",children:[(0,l.jsx)("h1",{className:"font-montserrat text-2xl md:text-4xl font-bold pt-16",children:"Job Seeker"}),(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)("div",{className:"flex justify-end",children:(0,l.jsxs)("button",{onClick:()=>j(!0),className:"font-montserrat bg-zinc-800 text-slate-200 px-4 py-2 hover:bg-transparent hover:text-zinc-800 hover:outline hover:outline-2 hover:outline-zinc-800 transi duration-200",children:["Review (",(0,p.requestCounter)(z),")"]})}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("table",{className:"w-full border-collapse border border-zinc-800 text-left table-fixed",children:[(0,l.jsx)("thead",{className:"font-montserrat text-xs md:text-sm",children:(0,l.jsxs)("tr",{className:"border border-b border-zinc-800 bg-zinc-200",children:[(0,l.jsx)("th",{className:"py-2 pl-4",children:"Name"}),(0,l.jsx)("th",{className:"py-2 line-clamp-1",children:"Education"}),(0,l.jsx)("th",{className:"py-2",children:"Skills"}),(0,l.jsx)("th",{className:"py-2",children:"Tags"}),(0,l.jsx)("th",{className:"py-2",children:"CV"}),(0,l.jsx)("th",{className:"py-2"})]})}),(0,l.jsx)("tbody",{className:"text-sm font-montserrat text-zinc-600",children:z.map((e,t)=>e.approval?(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-4 pl-4 border-b border-zinc-800",children:(0,l.jsx)("p",{className:"line-clamp-1",children:e.name})}),(0,l.jsx)("td",{className:"border-b border-zinc-800",children:(0,l.jsx)("p",{className:"line-clamp-1",children:e.education})}),(0,l.jsx)("td",{className:"border-b border-zinc-800",children:(0,l.jsx)("p",{className:"line-clamp-1",children:e.skills})}),(0,l.jsx)("td",{className:"border-b border-zinc-800",children:(0,l.jsx)("div",{children:e.tag.map((e,s)=>(0,l.jsx)("ul",{className:"list-disc",children:(0,l.jsx)("li",{children:e})},s))})}),(0,l.jsx)("td",{className:"border-b border-zinc-800",children:(0,l.jsx)("div",{className:"flex flex-row items-center gap-3",children:(0,l.jsx)("button",{onClick:()=>{s(!0),N(e.image),b(e.name)},children:(0,l.jsx)(r.Ehc,{title:"view PDF",size:25,className:"hover:text-blue-400"})})})}),(0,l.jsx)("td",{className:"border-b border-zinc-800",children:(0,l.jsxs)("div",{className:"flex flex-row items-center gap-3",children:[(0,l.jsx)("button",{onClick:()=>{v(e._id),a(!0)},children:(0,l.jsx)(r.Zju,{size:25,title:"view",className:"hover:text-blue-400"})}),(0,l.jsx)("button",{className:"cursor-not-allowed text-slate-300",disabled:!0,children:(0,l.jsx)(r.lFz,{size:25,title:"edit"})}),(0,l.jsx)("button",{children:(0,l.jsx)(r.VPh,{onClick:()=>{v(e._id),o(!0)},size:25,title:"delete",className:"hover:text-red-400"})})]})})]},t):null)})]}),(0,l.jsx)(i(),{isOpen:e,src:{currCVOpen:f,currItem:u},onClose:()=>s(!1)}),(0,l.jsx)(d(),{seekerId:g,isOpen:t,onClose:()=>a(!1)}),(0,l.jsx)(h(),{endpoint:"seeker",index:g,isOpen:c,onClose:()=>o(!1)}),(0,l.jsx)(x(),{requests:y,isOpen:m,onClose:()=>j(!1)})]})]})]})}},622:function(e,s,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=t(2265),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,t){var l,r={},d=null,o=null;for(l in void 0!==t&&(d=""+t),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(o=s.ref),s)a.call(s,l)&&!c.hasOwnProperty(l)&&(r[l]=s[l]);if(e&&e.defaultProps)for(l in s=e.defaultProps)void 0===r[l]&&(r[l]=s[l]);return{$$typeof:n,type:e,key:d,ref:o,props:r,_owner:i.current}}s.Fragment=r,s.jsx=d,s.jsxs=d},7437:function(e,s,t){"use strict";e.exports=t(622)},4033:function(e,s,t){e.exports=t(8165)}},function(e){e.O(0,[3712,6115,8920,2971,596,1744],function(){return e(e.s=6950)}),_N_E=e.O()}]);
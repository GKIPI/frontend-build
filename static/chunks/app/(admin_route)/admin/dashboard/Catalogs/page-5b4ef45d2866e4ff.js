(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4502],{1367:function(e,s,t){Promise.resolve().then(t.bind(t,6492))},3361:function(e,s,t){"use strict";t.r(s),t.d(s,{downloadImage:function(){return l},parseBlobToURL:function(){return r}});let l=(e,s)=>{let t=atob(e.split(",")[1]),l=new ArrayBuffer(t.length),r=new Uint8Array(l);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);let a=new Blob([l],{type:"image/jpeg"}),n=URL.createObjectURL(a),i=document.createElement("a");i.href=n,i.download="".concat(s,".jpg"),document.body.appendChild(i),i.click(),document.body.removeChild(i)},r=e=>{if(!e)return null;let s=atob(e.split(",")[1]),t=new ArrayBuffer(s.length),l=new Uint8Array(t);for(let e=0;e<s.length;e++)l[e]=s.charCodeAt(e);let r=new Blob([t],{type:"image/jpeg"}),a=URL.createObjectURL(r);return a}},5464:function(e,s,t){"use strict";t.r(s),t.d(s,{toRupiah:function(){return l}});let l=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e)},3911:function(e,s,t){"use strict";t.r(s),t.d(s,{getRequestedData:function(){return r},requestCounter:function(){return l}});let l=e=>{let s=e.filter(e=>!e.approval);return s.length},r=e=>{let s=e.filter(e=>!e.approval);return s}},581:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let l=t(7437),r=t(2265),a=t(5464);e.exports=e=>{let{isOpen:s,onClose:t,catalogId:n}=e,[i,c]=(0,r.useState)({user:"Loading...",image:"",title:"Loading...",price:"Loading...",tag:["Loading..."],contact:"Loading...",details:"Loading...",approval:!0}),o=async()=>{try{let e=await fetch("/api/admin/katalog/".concat(n)),s=await e.json();s.katalog&&c(s.katalog)}catch(e){console.error(e)}};return((0,r.useEffect)(()=>{o()},[s]),s)?(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,l.jsxs)("div",{className:"bg-slate-50 w-3/5 min-h-[35rem] shadow-lg space-y-28 rounded-lg px-5 py-16 font-montserrat",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Email"}),(0,l.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:i.user})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Produk"}),(0,l.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:i.title})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Harga"}),(0,l.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:(0,a.toRupiah)(i.price)})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Tag"}),(0,l.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:i.tag})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Kontak"}),(0,l.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:i.contact})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("p",{className:"w-[25%] font-semibold",children:"Detail"}),(0,l.jsx)("p",{className:"w-[75%] px-3 py-2 bg-slate-200 rounded-lg",children:i.details})]})]}),(0,l.jsx)("div",{className:"flex justify-end",children:(0,l.jsx)("button",{onClick:t,className:"bg-zinc-800 px-5 py-1 text-lg text-slate-200 hover:bg-transparent hover:text-zinc-800 hover:outline hover:outline-2 hover:outline-zinc-800 transition-colors",children:"OK"})})]})}):null}},5602:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let l=t(7437),r=t(8920),a=t(3361);e.exports=e=>{let{isOpen:s,onClose:t,src:n}=e,{currImageOpen:i,currImageTitle:c}=n;return s?(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,l.jsxs)("div",{className:"bg-slate-50 w-2/5 min-h-[43rem] shadow-lg space-y-8 rounded-lg px-5",children:[(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center mt-1",children:[(0,l.jsx)("h1",{className:" w-3/4 line-clamp-1",children:c}),(0,l.jsx)("button",{onClick:t,children:(0,l.jsx)(r.FiX,{size:20})})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,l.jsx)("div",{className:"w-3/4 aspect-square ".concat(i?"":"animate-pulse bg-slate-300"),children:(0,l.jsx)("img",{src:i})}),(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsx)("button",{disabled:!0,className:"cursor-not-allowed px-4 py-1 bg-zinc-800 text-slate-200 font-montserrat text-xl hover:outline hover:outline-2 hover:bg-transparent hover:outline-zinc-800 hover:text-zinc-800 transition-colors",children:"View"}),(0,l.jsx)("button",{onClick:()=>{(0,a.downloadImage)(i,c)},className:"px-4 py-1 bg-zinc-800 text-slate-200 font-montserrat text-xl hover:outline hover:outline-2 hover:bg-transparent hover:outline-zinc-800 hover:text-zinc-800 transition-colors",children:"Download"})]})]})]})}):null}},2745:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let l=t(1024),r=t(7437),a=t(8920),n=t(6820),i=t(2265),c=t(5464),o=t(3361),d=l._(t(9449));e.exports=e=>{let{isOpen:s,onClose:t,requests:l}=e,[x,h]=(0,i.useState)(!1),[m,p]=(0,i.useState)(""),u=e=>{let s=(0,o.parseBlobToURL)(e);window.open(s,"_blank")},j=async(e,s)=>{try{let t=await fetch("/api/katalog/".concat(s),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});await t.json(),window.location.reload()}catch(e){console.error(e)}},b=e=>{j({approval:!0},e)};return s?(0,r.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,r.jsxs)("div",{className:"bg-slate-50 w-[98%] min-h-[40rem] shadow-lg space-y-28 rounded-lg px-5 py-5 font-montserrat",children:[(0,r.jsx)("div",{className:"flex flex-row justify-end items-center",children:(0,r.jsx)("button",{onClick:t,children:(0,r.jsx)(a.FiX,{size:20})})}),(0,r.jsxs)("table",{className:"w-full border-collapse border border-zinc-800 text-left table-fixed",children:[(0,r.jsx)("thead",{className:"font-montserrat text-xs md:text-sm",children:(0,r.jsxs)("tr",{className:"border border-b border-zinc-800 bg-zinc-200",children:[(0,r.jsx)("th",{className:"py-2 pl-4",children:"Email"}),(0,r.jsx)("th",{className:"py-2",children:"Nama"}),(0,r.jsx)("th",{className:"py-2",children:"Harga"}),(0,r.jsx)("th",{className:"py-2",children:"Kategori"}),(0,r.jsx)("th",{className:"py-2",children:"Detail"}),(0,r.jsx)("th",{className:"py-2",children:"Gambar"}),(0,r.jsx)("th",{className:"py-2",children:"Kontak"}),(0,r.jsx)("th",{className:"py-2"})]})}),(0,r.jsx)("tbody",{className:"text-sm font-montserrat text-zinc-600",children:l.map((e,s)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"py-4 pl-4 border-b border-zinc-800",children:(0,r.jsx)("div",{className:"pr-2",children:(0,r.jsx)("p",{children:e.user})})}),(0,r.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,r.jsx)("div",{className:"pr-2",children:(0,r.jsx)("p",{children:e.title})})}),(0,r.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,r.jsx)("div",{className:"pr-2",children:(0,r.jsx)("p",{children:(0,c.toRupiah)(e.price)})})}),(0,r.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,r.jsx)("div",{className:"pr-2",children:(0,r.jsx)("p",{children:e.tag})})}),(0,r.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,r.jsx)("div",{className:"pr-2",children:(0,r.jsx)("p",{children:e.details})})}),(0,r.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,r.jsx)("div",{className:"pr-2",children:(0,r.jsxs)("button",{onClick:()=>u(e.image),className:"flex gap-1 items-center",children:[(0,r.jsx)(n.BiSolidFileJpg,{size:20}),(0,r.jsx)("p",{className:"line-clamp-1 text-amber-400 hover:underline italic",children:e.title})]})})}),(0,r.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,r.jsx)("div",{className:"pr-2",children:(0,r.jsx)("p",{children:e.contact})})}),(0,r.jsx)("td",{className:"py-4 border-b border-zinc-800",children:(0,r.jsxs)("div",{className:"flex flex-row items-center justify-center gap-3",children:[(0,r.jsx)("button",{onClick:()=>{b(e._id)},title:"accept",className:"bg-green-500 hover:bg-green-600 p-1 rounded-md text-slate-200",children:(0,r.jsx)(n.BiSolidUserCheck,{size:20})}),(0,r.jsx)("button",{onClick:()=>{p(e._id),h(!0)},className:"bg-red-500 hover:bg-red-600 p-1 rounded-md text-slate-200",children:(0,r.jsx)(n.BiTrash,{size:20})})]})})]},s))})]}),(0,r.jsx)(d.default,{onClose:()=>h(!1),isOpen:x,endpoint:"katalog",index:m})]})}):null}},9449:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let l=t(7437),r=t(4033);e.exports=e=>{let{isOpen:s,onClose:t,endpoint:a,index:n}=e;if(!s)return null;(0,r.useRouter)();let i=async()=>{try{await fetch("/api/".concat(a,"/").concat(n),{method:"DELETE"}),window.location.reload()}catch(e){console.error(e)}};return(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",children:(0,l.jsxs)("div",{className:"bg-slate-50 font-montserrat w-2/5 justify-between flex flex-col min-h-[16rem] shadow-lg py-10 rounded-lg px-5",children:[(0,l.jsx)("p",{className:"text-center font-bold text-2xl",children:"Delete Items?"}),(0,l.jsxs)("div",{className:"flex gap-5 justify-end",children:[(0,l.jsx)("button",{onClick:t,className:" hover:bg-slate-200 transition-colors px-5 py-2.5 ",children:"Cancel"}),(0,l.jsx)("button",{onClick:()=>{i(),t()},className:"bg-zinc-800 text-slate-200 px-5 py-2.5 hover:outline hover:outline-2 hover:outline-zinc-800 hover:text-zinc-800 hover:bg-transparent transition-colors ",children:"Delete"})]})]})})}},6492:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return j}});var l=t(7437),r=t(2265),a=t(9150),n=t(5602),i=t.n(n),c=t(9449),o=t.n(c),d=t(2745),x=t.n(d),h=t(581),m=t.n(h),p=t(5464),u=t(3911);function j(){let[e,s]=(0,r.useState)(!1),[t,n]=(0,r.useState)(!1),[c,d]=(0,r.useState)(!1),[h,j]=(0,r.useState)(!1),[b,f]=(0,r.useState)(""),[N,g]=(0,r.useState)(""),[y,v]=(0,r.useState)(""),[w,z]=(0,r.useState)([]),[k,_]=(0,r.useState)([{_id:"",title:"Loading...",tag:["Loading..."],price:0,contact:"Loading...",image:"",approval:!0}]),C=async()=>{try{let e=await fetch("/api/admin/katalog"),s=await e.json();s.katalogs&&(_(s.katalogs),z((0,u.getRequestedData)(s.katalogs)))}catch(e){console.error(e)}};return(0,r.useEffect)(()=>{C()},[]),(0,l.jsxs)("section",{className:"space-y-10",children:[(0,l.jsx)("h1",{className:"font-montserrat text-2xl md:text-4xl font-bold pt-16",children:"My Catalog"}),(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)("div",{className:"flex justify-end",children:(0,l.jsxs)("button",{onClick:()=>j(!0),className:"font-montserrat bg-zinc-800 text-slate-200 px-4 py-2 hover:bg-transparent hover:text-zinc-800 hover:outline hover:outline-2 hover:outline-zinc-800 transi duration-200",children:["Review (",w.length,")"]})}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("table",{className:"w-full border-collapse border border-zinc-800 text-left table-fixed",children:[(0,l.jsx)("thead",{className:"font-montserrat text-xs md:text-sm",children:(0,l.jsxs)("tr",{className:"border border-b border-zinc-800 bg-zinc-200",children:[(0,l.jsx)("th",{className:"py-2 pl-4",children:"Name"}),(0,l.jsx)("th",{className:"py-2 line-clamp-1",children:"Category"}),(0,l.jsx)("th",{className:"py-2",children:"Price"}),(0,l.jsx)("th",{className:"py-2",children:"Contact"}),(0,l.jsx)("th",{className:"py-2",children:"Picture"}),(0,l.jsx)("th",{className:"py-2"})]})}),(0,l.jsx)("tbody",{className:"text-sm font-montserrat text-zinc-600",children:k.map((e,t)=>e.approval?(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-4 pl-4 border-b border-zinc-800",children:(0,l.jsx)("p",{className:"line-clamp-1",children:e.title})}),(0,l.jsx)("td",{className:"border-b border-zinc-800",children:(0,l.jsx)("p",{className:"line-clamp-1",children:e.tag})}),(0,l.jsx)("td",{className:"border-b border-zinc-800",children:(0,l.jsx)("p",{className:"line-clamp-1",children:(0,p.toRupiah)(e.price)})}),(0,l.jsx)("td",{className:"border-b border-zinc-800",children:(0,l.jsx)("p",{className:"line-clamp-2",children:e.contact})}),(0,l.jsx)("td",{className:"border-b border-zinc-800",children:(0,l.jsx)("div",{className:"flex flex-row items-center gap-3",children:(0,l.jsx)("button",{onClick:()=>{v(e.title),g(e.image),s(!0)},children:(0,l.jsx)(a.Ehc,{title:"view PDF",size:25,className:"hover:text-blue-400"})})})}),(0,l.jsx)("td",{className:"border-b border-zinc-800",children:(0,l.jsxs)("div",{className:"flex flex-row items-center gap-3",children:[(0,l.jsx)("button",{onClick:()=>{f(e._id),n(!0)},children:(0,l.jsx)(a.Zju,{size:25,title:"view",className:"hover:text-blue-400"})}),(0,l.jsx)("button",{className:"cursor-not-allowed text-slate-300",disabled:!0,children:(0,l.jsx)(a.lFz,{size:25,title:"edit"})}),(0,l.jsx)("button",{onClick:()=>{f(e._id),d(!0)},children:(0,l.jsx)(a.VPh,{size:25,title:"delete",className:"hover:text-red-400"})})]})})]},t):null)})]}),(0,l.jsx)(i(),{src:{currImageOpen:N,currImageTitle:y},isOpen:e,onClose:()=>s(!1)}),(0,l.jsx)(x(),{requests:w,isOpen:h,onClose:()=>j(!1)}),(0,l.jsx)(m(),{isOpen:t,onClose:()=>n(!1),catalogId:b}),(0,l.jsx)(o(),{endpoint:"katalog",index:b,onClose:()=>d(!1),isOpen:c})]})]})]})}},622:function(e,s,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=t(2265),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,t){var l,a={},o=null,d=null;for(l in void 0!==t&&(o=""+t),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(d=s.ref),s)n.call(s,l)&&!c.hasOwnProperty(l)&&(a[l]=s[l]);if(e&&e.defaultProps)for(l in s=e.defaultProps)void 0===a[l]&&(a[l]=s[l]);return{$$typeof:r,type:e,key:o,ref:d,props:a,_owner:i.current}}s.Fragment=a,s.jsx=o,s.jsxs=o},7437:function(e,s,t){"use strict";e.exports=t(622)},4033:function(e,s,t){e.exports=t(8165)}},function(e){e.O(0,[3712,6115,8920,2971,596,1744],function(){return e(e.s=1367)}),_N_E=e.O()}]);
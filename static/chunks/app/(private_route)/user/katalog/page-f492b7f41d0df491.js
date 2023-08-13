(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74],{8718:function(e,t,n){Promise.resolve().then(n.bind(n,5646))},5877:function(e,t,n){"use strict";function r(e,t){if(e.files.length>0){let n=new FileReader;n.onload=e=>{let n=e.target.result;t(n)},n.readAsDataURL(e.files[0])}}n.d(t,{k:function(){return r}})},5646:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(7437),s=n(1396),o=n.n(s),a=n(8920),l=n(2265),i=n(2749),c=n(2439),d=n(1552),u=n(171),m=n(4606),f=n(9150),p=n(5877);function h(){let[e,t]=(0,l.useState)(!0),[n,s]=(0,l.useState)(null),[h,g]=(0,l.useState)(!1),{data:x,status:b}=(0,i.useSession)(),[v,y]=(0,l.useState)({});(0,l.useEffect)(()=>{var e;"authenticated"===b&&(null==x?void 0:null===(e=x.user)||void 0===e?void 0:e.email)&&fetch("/api/user/katalog/".concat(x.user.email)).then(e=>{if(!e.ok)throw(0,u.toast)("".concat(error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error("Network response was not ok");return e.json()}).then(e=>{y(e.katalogs),t(!1)}).catch(e=>{(0,u.toast)("".concat(e),{hideProgressBar:!0,autoClose:2e3,type:"error"}),console.error("Error fetching data:",e)})},[x,b]),(0,l.useEffect)(()=>{n&&fetch("/api/katalog",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>{if(!e.ok)throw(0,u.toast)("".concat(e.error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error("Network response was not ok");return e.json()}).then(e=>{(0,u.toast)("Submited data",{hideProgressBar:!0,autoClose:2e3,type:"success"}),y(e),window.location.reload()}).catch(e=>{(0,u.toast)("".concat(response.error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),console.error("Error fetching data:",e)})},[n]);let[w,T]=(0,l.useState)(""),[E,j]=(0,l.useState)(""),[N,C]=(0,l.useState)(""),[k,_]=(0,l.useState)([]),[I,L]=(0,l.useState)(null),[O,S]=(0,l.useState)(""),[R,P]=(0,l.useState)(""),[B,A]=(0,l.useState)(!1),[D,M]=(0,l.useState)(!1),[$,z]=(0,l.useState)({}),F=e=>{z(e),A(!0)},H=e=>{z(e),M(!0)},q=e=>{try{console.log(e._id),fetch("/api/katalog/".concat(e._id),{method:"DELETE"})}catch(e){throw(0,u.toast)("".concat(e),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error(e)}(0,u.toast)("Deleted data",{hideProgressBar:!0,autoClose:2e3,type:"success"}),window.location.reload()};return(0,r.jsx)(r.Fragment,{children:e?(0,r.jsx)(d.Z,{}):(0,r.jsxs)("div",{className:"min-h-screen min-w-screen",children:[(0,r.jsx)("div",{className:"absolute h-[40px] w-[40px] rounded-full m-3 hover:bg-primary hover:text-white",children:(0,r.jsx)(o(),{href:"/user",children:(0,r.jsx)(a.FiArrowLeft,{className:"h-8 md:h-10 w-max"})})}),(0,r.jsxs)("div",{className:"lg:flex w-screen min-h-screen",children:[(0,r.jsx)("div",{className:"lg:w-[50%] lg:h-screen",children:(0,r.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),!E||!N||!R||!k||!O){g(!0);return}let t=document.querySelector('input[type="file"]');(0,p.k)(t,e=>{let t={user:x.user.email,title:E,price:N,details:R,contact:O,tag:k,image:e};s(t)})},className:"bg-tertiary lg:w-full h-screen p-5 flex flex-col justify-center",children:[(0,r.jsx)("h1",{className:"font-bold text-[3rem] px-4 self-center",children:"Lets make the world better!"}),(0,r.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Title:",(0,r.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:E,onChange:e=>j(e.target.value)})]}),(0,r.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Price:",(0,r.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"number",value:N,onChange:e=>C(e.target.value)})]}),(0,r.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Upload Image:",(0,r.jsx)("input",{className:"w-[50%] p-1",type:"file",accept:"image/*",onChange:e=>{let t=e.target.files[0];L(t)}})]}),(0,r.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Contact:",(0,r.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:O,onChange:e=>S(e.target.value)})]}),(0,r.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Details:",(0,r.jsx)("textarea",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:R,onChange:e=>P(e.target.value)})]}),(0,r.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Tag:",(0,r.jsxs)("select",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:k,onChange:e=>_(e.target.value),children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Select a Tag"}),["Beauty & Health","Sport","Property","Fashion & Accessories","Food & Beverage","Electronics","Book & Stationary","Other"].map(e=>(0,r.jsx)("option",{value:e,children:e},e))]})]}),(0,r.jsx)("button",{className:"bg-black text-white text-center py-4 rounded-md my-2 self-end w-[25%] hover:text-primary border-2 border-primary hover:bg-white",type:"submit",children:"Submit"})]})}),(0,r.jsx)("div",{className:"lg:w-[50%] h-max p-5 flex flex-col",children:(0,r.jsx)("div",{className:"max-w-full h-full p-4",style:{borderRadius:"10px",background:"#FAFAFA",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"},children:(0,r.jsxs)("div",{className:"h-[80vh]",children:[(0,r.jsx)("h1",{className:"font-bold text-[3rem] px-4 self-center",children:"My Katalogs"}),v.length>0?v.map((e,t)=>(0,r.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:[(0,r.jsxs)("div",{className:"lg:flex flex-row",children:["Title :",(0,r.jsxs)("div",{className:"line-clamp-1 mx-2",children:[" ",e.title]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("div",{className:"lg:p-3 p-1 rounded-full line-clamp-1 mx-3 border-2 ".concat((null==e?void 0:e.approval)?"bg-green-200 border-green-600":"bg-red-200 border-red-600"),children:(0,r.jsx)("p",{className:"text-center",children:(null==e?void 0:e.approval)?"approved":"not approved"})}),(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsx)(m.rCC,{size:30,title:"view",className:"mx-1 p-1 bg-primary text-white rounded-md hover:text-primary border-2 border-primary hover:bg-white",onClick:()=>F(e)}),(0,r.jsx)(f.VPh,{size:30,title:"delete",className:"mx-1 p-1 border-2 border-red-600 text-white bg-red-600 hover:text-red-400 rounded-md hover:bg-white",onClick:()=>H(e)})]})]})]},t)):(0,r.jsx)("p",{className:"m-5 text-red-600",children:"*No katalog added yet."}),(0,r.jsx)(c.Z,{isOpen:B,onClose:()=>A(!1),title:$.jobTitle,content:(0,r.jsxs)("div",{className:"max-h-[80vh] overflow-y-auto",children:[(0,r.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2 ".concat($.approval?"bg-green-300 border-green-600":"bg-red-300 border-red-600"),children:["Approval:",$.approval?(0,r.jsx)("p",{children:"Your data is approved"}):(0,r.jsx)("p",{children:"Your data isn't approved yet"})]}),(0,r.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Product Name :",(0,r.jsx)("div",{children:$.title})]}),(0,r.jsx)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:(0,r.jsx)("img",{src:$.image,alt:"CV Preview",className:"max-h-[80vh] max-w-[80vw]"})}),(0,r.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Price :",(0,r.jsx)("div",{children:$.price})]}),(0,r.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Details :",(0,r.jsx)("div",{children:$.details})]}),(0,r.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Tag :",(0,r.jsx)("div",{children:$.tag})]}),(0,r.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Contact :",(0,r.jsx)("p",{children:$.contact})]})]})}),(0,r.jsx)(c.Z,{isOpen:D,onClose:()=>M(!1),title:"Confirm Deletion",content:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Are you sure you want to delete this product?"}),(0,r.jsx)("button",{className:"bg-red-600 text-white px-4 py-2 rounded-md hover:text-red-600 border-2 border-red-600 hover:bg-white mx-2",onClick:()=>q($),children:"Delete"}),(0,r.jsx)("button",{className:"bg-primary text-white px-4 py-2 rounded-md hover:text-primary border-2 border-primary hover:bg-white mx-2",onClick:()=>M(!1),children:"Cancel"})]})})]})})})]})]})})}},2439:function(e,t,n){"use strict";var r=n(7437);n(2265);var s=n(3159);t.Z=e=>{let{isOpen:t,onClose:n,title:o,content:a}=e;return t?(0,r.jsx)("div",{className:"fixed z-[1000] top-0 left-0 w-full h-full flex items-center justify-center",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:(0,r.jsx)("div",{className:"modal",children:(0,r.jsxs)("div",{className:"modal-header bg-white p-6 rounded-lg shadow-lg max-w-[90vw] mx-auto",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,r.jsx)("h2",{className:"font-bold",children:o}),(0,r.jsx)("button",{className:"bg-white text-primary px-2 py-2 rounded-full hover:bg-primary hover:text-white",onClick:n,children:(0,r.jsx)(s.aHS,{size:18})})]}),(0,r.jsx)("div",{className:"modal-content",children:a})]})})}):null}},1552:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437);function s(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 bg-white z-[900] flex justify-center items-center",children:(0,r.jsx)("div",{className:"spinner"})})})}},171:function(e,t,n){"use strict";n.r(t),n.d(t,{Bounce:function(){return j},Flip:function(){return k},Icons:function(){return h},Slide:function(){return N},ToastContainer:function(){return _},Zoom:function(){return C},collapseToast:function(){return d},cssTransition:function(){return u},toast:function(){return A},useToast:function(){return v},useToastContainer:function(){return g}});var r=n(2265),s=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(s&&(s+=" "),s+=r);else for(n in t)t[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(r&&(r+=" "),r+=t);return r};let o=e=>"number"==typeof e&&!isNaN(e),a=e=>"string"==typeof e,l=e=>"function"==typeof e,i=e=>a(e)||l(e)?e:null,c=e=>(0,r.isValidElement)(e)||a(e)||l(e)||o(e);function d(e,t,n){void 0===n&&(n=300);let{scrollHeight:r,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}function u(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:o=!0,collapseDuration:a=300}=e;return function(e){let{children:l,position:i,preventExitTransition:c,done:u,nodeRef:m,isIn:f}=e,p=s?`${t}--${i}`:t,h=s?`${n}--${i}`:n,g=(0,r.useRef)(0);return(0,r.useLayoutEffect)(()=>{let e=m.current,t=p.split(" "),n=r=>{r.target===m.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,r.useEffect)(()=>{let e=m.current,t=()=>{e.removeEventListener("animationend",t),o?d(e,u,a):u()};f||(c?t():(g.current=1,e.className+=` ${h}`,e.addEventListener("animationend",t)))},[f]),r.createElement(r.Fragment,null,l)}}function m(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let f={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},p=e=>{let{theme:t,type:n,...s}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...s})},h={info:function(e){return r.createElement(p,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(p,{...e},r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(p,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(p,{...e},r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function g(e){let[,t]=(0,r.useReducer)(e=>e+1,0),[n,s]=(0,r.useState)([]),d=(0,r.useRef)(null),u=(0,r.useRef)(new Map).current,p=e=>-1!==n.indexOf(e),g=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:p,getToast:e=>u.get(e)}).current;function x(e){let{containerId:t}=e,{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function b(e){s(t=>null==e?[]:t.filter(t=>t!==e))}function v(){let{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();w(e,t,n)}function y(e,n){var s,p;let{delay:x,staleId:y,...T}=n;if(!c(e)||!d.current||g.props.enableMultiContainer&&T.containerId!==g.props.containerId||u.has(T.toastId)&&null==T.updateId)return;let{toastId:E,updateId:j,data:N}=T,{props:C}=g,k=()=>b(E),_=null==j;_&&g.count++;let I={...C,style:C.toastStyle,key:g.toastKey++,...Object.fromEntries(Object.entries(T).filter(e=>{let[t,n]=e;return null!=n})),toastId:E,updateId:j,data:N,closeToast:k,isIn:!1,className:i(T.className||C.toastClassName),bodyClassName:i(T.bodyClassName||C.bodyClassName),progressClassName:i(T.progressClassName||C.progressClassName),autoClose:!T.isLoading&&(s=T.autoClose,p=C.autoClose,!1===s||o(s)&&s>0?s:p),deleteToast(){let e=m(u.get(E),"removed");u.delete(E),f.emit(4,e);let n=g.queue.length;if(g.count=null==E?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),n>0){let e=null==E?g.props.limit:1;if(1===n||1===e)g.displayedToast++,v();else{let t=e>n?n:e;g.displayedToast=t;for(let e=0;e<t;e++)v()}}else t()}};I.iconOut=function(e){let{theme:t,type:n,isLoading:s,icon:i}=e,c=null,d={theme:t,type:n};return!1===i||(l(i)?c=i(d):(0,r.isValidElement)(i)?c=(0,r.cloneElement)(i,d):a(i)||o(i)?c=i:s?c=h.spinner():n in h&&(c=h[n](d))),c}(I),l(T.onOpen)&&(I.onOpen=T.onOpen),l(T.onClose)&&(I.onClose=T.onClose),I.closeButton=C.closeButton,!1===T.closeButton||c(T.closeButton)?I.closeButton=T.closeButton:!0===T.closeButton&&(I.closeButton=!c(C.closeButton)||C.closeButton);let L=e;(0,r.isValidElement)(e)&&!a(e.type)?L=(0,r.cloneElement)(e,{closeToast:k,toastProps:I,data:N}):l(e)&&(L=e({closeToast:k,toastProps:I,data:N})),C.limit&&C.limit>0&&g.count>C.limit&&_?g.queue.push({toastContent:L,toastProps:I,staleId:y}):o(x)?setTimeout(()=>{w(L,I,y)},x):w(L,I,y)}function w(e,t,n){let{toastId:r}=t;n&&u.delete(n);let o={content:e,props:t};u.set(r,o),s(e=>[...e,r].filter(e=>e!==n)),f.emit(4,m(o,null==o.props.updateId?"added":"updated"))}return(0,r.useEffect)(()=>(g.containerId=e.containerId,f.cancelEmit(3).on(0,y).on(1,e=>d.current&&b(e)).on(5,x).emit(2,g),()=>{u.clear(),f.emit(3,g)}),[]),(0,r.useEffect)(()=>{g.props=e,g.isToastActive=p,g.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,r=Array.from(u.values());return e.newestOnTop&&r.reverse(),r.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:d,isToastActive:p}}function x(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function b(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function v(e){let[t,n]=(0,r.useState)(!1),[s,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),i=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,r.useRef)(e),{autoClose:d,pauseOnHover:u,closeToast:m,onClick:f,closeOnClick:p}=e;function h(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),i.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",T),document.addEventListener("touchmove",w),document.addEventListener("touchend",T);let n=a.current;i.canCloseOnClick=!0,i.canDrag=!0,i.boundingRect=n.getBoundingClientRect(),n.style.transition="",i.x=x(t.nativeEvent),i.y=b(t.nativeEvent),"x"===e.draggableDirection?(i.start=i.x,i.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(i.start=i.y,i.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function g(t){if(i.boundingRect){let{top:n,bottom:r,left:s,right:o}=i.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&i.x>=s&&i.x<=o&&i.y>=n&&i.y<=r?y():v()}}function v(){n(!0)}function y(){n(!1)}function w(n){let r=a.current;i.canDrag&&r&&(i.didMove=!0,t&&y(),i.x=x(n),i.y=b(n),i.delta="x"===e.draggableDirection?i.x-i.start:i.y-i.start,i.start!==i.x&&(i.canCloseOnClick=!1),r.style.transform=`translate${e.draggableDirection}(${i.delta}px)`,r.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function T(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",T);let t=a.current;if(i.canDrag&&i.didMove&&t){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return o(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,r.useEffect)(()=>{c.current=e}),(0,r.useEffect)(()=>(a.current&&a.current.addEventListener("d",v,{once:!0}),l(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),()=>{let e=c.current;l(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}),[]),(0,r.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||y(),window.addEventListener("focus",v),window.addEventListener("blur",y)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",v),window.removeEventListener("blur",y))}),[e.pauseOnFocusLoss]);let E={onMouseDown:h,onTouchStart:h,onMouseUp:g,onTouchEnd:g};return d&&u&&(E.onMouseEnter=y,E.onMouseLeave=v),p&&(E.onClick=e=>{f&&f(e),i.canCloseOnClick&&m()}),{playToast:v,pauseToast:y,isRunning:t,preventExitTransition:s,toastRef:a,eventHandlers:E}}function y(e){let{closeToast:t,theme:n,ariaLabel:s="close"}=e;return r.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":s},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function w(e){let{delay:t,isRunning:n,closeToast:o,type:a="default",hide:i,className:c,style:d,controlledProgress:u,progress:m,rtl:f,isIn:p,theme:h}=e,g=i||u&&0===m,x={...d,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};u&&(x.transform=`scaleX(${m})`);let b=s("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":f}),v=l(c)?c({rtl:f,type:a,defaultClassName:b}):s(b,c);return r.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:v,style:x,[u&&m>=1?"onTransitionEnd":"onAnimationEnd"]:u&&m<1?null:()=>{p&&o()}})}let T=e=>{let{isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:a}=v(e),{closeButton:i,children:c,autoClose:d,onClick:u,type:m,hideProgressBar:f,closeToast:p,transition:h,position:g,className:x,style:b,bodyClassName:T,bodyStyle:E,progressClassName:j,progressStyle:N,updateId:C,role:k,progress:_,rtl:I,toastId:L,deleteToast:O,isIn:S,isLoading:R,iconOut:P,closeOnClick:B,theme:A}=e,D=s("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":I},{"Toastify__toast--close-on-click":B}),M=l(x)?x({rtl:I,position:g,type:m,defaultClassName:D}):s(D,x),$=!!_||!d,z={closeToast:p,type:m,theme:A},F=null;return!1===i||(F=l(i)?i(z):(0,r.isValidElement)(i)?(0,r.cloneElement)(i,z):y(z)),r.createElement(h,{isIn:S,done:O,position:g,preventExitTransition:n,nodeRef:o},r.createElement("div",{id:L,onClick:u,className:M,...a,style:b,ref:o},r.createElement("div",{...S&&{role:k},className:l(T)?T({type:m}):s("Toastify__toast-body",T),style:E},null!=P&&r.createElement("div",{className:s("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},P),r.createElement("div",null,c)),F,r.createElement(w,{...C&&!$?{key:`pb-${C}`}:{},rtl:I,theme:A,delay:d,isRunning:t,isIn:S,closeToast:p,hide:f,type:m,style:N,className:j,controlledProgress:$,progress:_||0})))},E=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},j=u(E("bounce",!0)),N=u(E("slide",!0)),C=u(E("zoom")),k=u(E("flip")),_=(0,r.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:o,isToastActive:a}=g(e),{className:c,style:d,rtl:u,containerId:m}=e;return(0,r.useEffect)(()=>{t&&(t.current=o.current)},[]),r.createElement("div",{ref:o,className:"Toastify",id:m},n((e,t)=>{let n=t.length?{...d}:{...d,pointerEvents:"none"};return r.createElement("div",{className:function(e){let t=s("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":u});return l(c)?c({position:e,rtl:u,defaultClassName:t}):s(t,i(c))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:s,props:o}=e;return r.createElement(T,{...o,isIn:a(o.toastId),style:{...o.style,"--nth":n+1,"--len":t.length},key:`toast-${o.key}`},s)}))}))});_.displayName="ToastContainer",_.defaultProps={position:"top-right",transition:j,autoClose:5e3,closeButton:y,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let I,L=new Map,O=[],S=1;function R(e,t){return L.size>0?f.emit(0,e,t):O.push({content:e,options:t}),t.toastId}function P(e,t){return{...t,type:t&&t.type||e,toastId:t&&(a(t.toastId)||o(t.toastId))?t.toastId:""+S++}}function B(e){return(t,n)=>R(t,P(e,n))}function A(e,t){return R(e,P("default",t))}A.loading=(e,t)=>R(e,P("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),A.promise=function(e,t,n){let r,{pending:s,error:o,success:i}=t;s&&(r=a(s)?A.loading(s,n):A.loading(s.render,{...n,...s}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(e,t,s)=>{if(null==t)return void A.dismiss(r);let o={type:e,...c,...n,data:s},l=a(t)?{render:t}:t;return r?A.update(r,{...o,...l}):A(l.render,{...o,...l}),s},u=l(e)?e():e;return u.then(e=>d("success",i,e)).catch(e=>d("error",o,e)),u},A.success=B("success"),A.info=B("info"),A.error=B("error"),A.warning=B("warning"),A.warn=A.warning,A.dark=(e,t)=>R(e,P("default",{theme:"dark",...t})),A.dismiss=e=>{L.size>0?f.emit(1,e):O=O.filter(t=>null!=e&&t.options.toastId!==e)},A.clearWaitingQueue=function(e){return void 0===e&&(e={}),f.emit(5,e)},A.isActive=e=>{let t=!1;return L.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},A.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,r=L.get(n||I);return r&&r.getToast(e)}(e,t);if(n){let{props:r,content:s}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:""+S++};o.toastId!==e&&(o.staleId=e);let a=o.render||s;delete o.render,R(a,o)}},0)},A.done=e=>{A.update(e,{progress:1})},A.onChange=e=>(f.on(4,e),()=>{f.off(4,e)}),A.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},A.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},f.on(2,e=>{I=e.containerId||e,L.set(I,e),O.forEach(e=>{f.emit(0,e.content,e.options)}),O=[]}).on(3,e=>{L.delete(e.containerId||e),0===L.size&&f.off(0).off(1).off(5)})}},function(e){e.O(0,[447,420,712,685,749,791,971,596,744],function(){return e(e.s=8718)}),_N_E=e.O()}]);
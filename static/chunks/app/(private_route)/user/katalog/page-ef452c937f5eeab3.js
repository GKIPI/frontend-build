(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74],{2410:function(e,r,t){Promise.resolve().then(t.bind(t,5646))},5646:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var l=t(7437),s=t(1396),a=t.n(s),o=t(8920),d=t(2265),n=t(2749),i=t(2439),c=t(1552),u=t(171),x=t(4606),h=t(9150),m=t(5877),b=t(5579),p=t.n(b);function f(){let[e,r]=(0,d.useState)(!0),[t,s]=(0,d.useState)(null),[b,f]=(0,d.useState)(!1),[g,w]=(0,d.useState)(!1),[j,v]=(0,d.useState)(!1),[y,N]=(0,d.useState)(!1),{data:k,status:C}=(0,n.useSession)(),[S,P]=(0,d.useState)({});(0,d.useEffect)(()=>{var e;"authenticated"===C&&(null==k?void 0:null===(e=k.user)||void 0===e?void 0:e.email)&&fetch("/api/user/katalog/".concat(k.user.email)).then(e=>{if(!e.ok)throw(0,u.toast)("".concat(error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error("Network response was not ok");return e.json()}).then(e=>{P(e.katalogs),r(!1)}).catch(e=>{(0,u.toast)("".concat(e),{hideProgressBar:!0,autoClose:2e3,type:"error"}),console.error("Error fetching data:",e)})},[k,C]),(0,d.useEffect)(()=>{t&&fetch("/api/katalog",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>{if(!e.ok)throw(0,u.toast)("".concat(e.error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error("Network response was not ok");return e.json()}).then(e=>{(0,u.toast)("Submited data",{hideProgressBar:!0,autoClose:2e3,type:"success"}),P(e),window.location.reload()}).catch(e=>{(0,u.toast)("".concat(response.error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),console.error("Error fetching data:",e)})},[t]);let[E,B]=(0,d.useState)(""),[O,T]=(0,d.useState)(""),[A,F]=(0,d.useState)(""),[_,D]=(0,d.useState)([]),[L,Z]=(0,d.useState)(null),[z,I]=(0,d.useState)(""),[V,Y]=(0,d.useState)(""),[q,H]=(0,d.useState)(!1),[J,K]=(0,d.useState)(!1),[M,R]=(0,d.useState)({}),U=e=>{R(e),H(!0)},G=e=>{R(e),K(!0)},Q=e=>{try{fetch("/api/katalog/".concat(e._id),{method:"DELETE"})}catch(e){throw(0,u.toast)("".concat(e),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error(e)}(0,u.toast)("Deleted data",{hideProgressBar:!0,autoClose:2e3,type:"success"}),window.location.reload()};return(0,l.jsx)(l.Fragment,{children:e?(0,l.jsx)(c.Z,{}):(0,l.jsxs)("div",{className:"min-h-screen min-w-screen",children:[(0,l.jsx)("div",{className:"absolute h-[40px] w-[40px] rounded-full m-3 hover:bg-primary hover:text-white",children:(0,l.jsx)(a(),{href:"/user",children:(0,l.jsx)(o.FiArrowLeft,{className:"h-8 md:h-10 w-max"})})}),(0,l.jsxs)("div",{className:"lg:flex w-screen min-h-screen",children:[(0,l.jsx)("div",{className:"lg:w-[50%] lg:h-screen",children:(0,l.jsxs)("form",{onSubmit:()=>{f(!0)},className:"bg-tertiary lg:w-full h-screen p-5 flex flex-col justify-center",children:[(0,l.jsx)("h1",{className:"font-bold text-[3rem] px-4 self-center",children:"Lets make the world better!"}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Title:",(0,l.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:O,onChange:e=>T(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Price:",(0,l.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"number",value:A,onChange:e=>F(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Upload Image:",(0,l.jsx)("input",{className:"w-[50%] p-1",type:"file",accept:"image/*",onChange:e=>{let r=e.target.files[0];Z(r)}})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Contact:",(0,l.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:z,placeholder:"contoh: 81234698723",onChange:e=>I(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Details:",(0,l.jsx)("textarea",{wrap:"hard",className:"border-2 border-black w-[50%] p-1 rounded-lg",value:V,onChange:e=>Y(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Tag:",(0,l.jsxs)("select",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:_,onChange:e=>D(e.target.value),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select a Tag"}),["Beauty & Health","Sport","Property","Fashion & Accessories","Food & Beverage","Electronics","Book & Stationary","Other"].map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})]}),g?(0,l.jsx)("div",{className:"text-red-600 text-xs",children:"*Lengkapi data anda!"}):null,(0,l.jsx)("button",{className:" ".concat(g?"bg-red-600":"bg-black border-primary hover:text-primary border-2 hover:bg-white"," bg-black text-white text-center py-4 rounded-md my-2 self-end w-[25%] "),type:"button",onClick:()=>{f(!0)},children:"Submit"})]})}),(0,l.jsx)("div",{className:"lg:w-[50%] h-max p-5 flex flex-col",children:(0,l.jsx)("div",{className:"max-w-full h-full p-4",style:{borderRadius:"10px",background:"#FAFAFA",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"},children:(0,l.jsxs)("div",{className:"h-[80vh]  overflow-auto",children:[(0,l.jsx)("h1",{className:"font-bold text-[3rem] px-4 self-center",children:"My Katalogs"}),S.length>0?S.map((e,r)=>(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:[(0,l.jsxs)("div",{className:"lg:flex flex-row",children:["Title :",(0,l.jsxs)("div",{className:"line-clamp-1 mx-2",children:[" ",e.title]})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)("div",{className:"lg:p-3 p-1 rounded-full line-clamp-1 mx-3 border-2 ".concat((null==e?void 0:e.approval)?"bg-green-200 border-green-600":"bg-red-200 border-red-600"),children:(0,l.jsx)("p",{className:"text-center",children:(null==e?void 0:e.approval)?"approved":"not approved"})}),(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)(x.rCC,{size:30,title:"view",className:"mx-1 p-1 bg-primary text-white rounded-md hover:text-primary border-2 border-primary hover:bg-white",onClick:()=>U(e)}),(0,l.jsx)(h.VPh,{size:30,title:"delete",className:"mx-1 p-1 border-2 border-red-600 text-white bg-red-600 hover:text-red-400 rounded-md hover:bg-white",onClick:()=>G(e)})]})]})]},r)):(0,l.jsx)("p",{className:"m-5 text-red-600",children:"*No katalog added yet."}),(0,l.jsx)(i.Z,{isOpen:q,onClose:()=>H(!1),title:M.jobTitle,content:(0,l.jsxs)("div",{className:"max-h-[80vh] overflow-y-auto",children:[(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2 ".concat(M.approval?"bg-green-300 border-green-600":"bg-red-300 border-red-600"),children:["Approval:",M.approval?(0,l.jsx)("p",{children:"Your data is approved"}):(0,l.jsx)("p",{children:"Your data isn't approved yet"})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Product Name :",(0,l.jsx)("div",{children:M.title})]}),(0,l.jsx)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:(0,l.jsx)("img",{src:M.image,alt:"CV Preview",className:"max-h-[80vh] max-w-[80vw]"})}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Price :",(0,l.jsx)("div",{children:M.price})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Details :",(0,l.jsx)("div",{className:"whitespace-pre-wrap",children:M.details})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Tag :",(0,l.jsx)("div",{children:M.tag})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Contact :",(0,l.jsx)("p",{children:M.contact})]})]})}),(0,l.jsx)(i.Z,{isOpen:J,onClose:()=>K(!1),title:"Confirm Deletion",content:(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Are you sure you want to delete this product?"}),(0,l.jsx)("button",{className:"bg-red-600 text-white px-4 py-2 rounded-md hover:text-red-600 border-2 border-red-600 hover:bg-white mx-2",onClick:()=>Q(M),children:"Delete"}),(0,l.jsx)("button",{className:"bg-primary text-white px-4 py-2 rounded-md hover:text-primary border-2 border-primary hover:bg-white mx-2",onClick:()=>K(!1),children:"Cancel"})]})}),(0,l.jsx)(p(),{isOpen:b,setIsOpenClose:f,handlesubmit:()=>{if(!O||!A||!V||!_||!z){w(!0),f(!1);return}let e=document.querySelector('input[type="file"]');(0,m.k)(e,e=>{let r={user:k.user.email,title:O,price:A,details:V,contact:z,tag:_,image:e};s(r)})}})]})})})]})]})})}}},function(e){e.O(0,[712,447,420,685,749,920,464,971,596,744],function(){return e(e.s=2410)}),_N_E=e.O()}]);
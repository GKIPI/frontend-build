(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{6647:function(e,r,l){Promise.resolve().then(l.bind(l,4831))},4831:function(e,r,l){"use strict";l.r(r),l.d(r,{default:function(){return g}});var t=l(7437),s=l(1396),a=l.n(s),o=l(8920),d=l(2265),n=l(2749),i=l(1552),c=l(171),u=l(3159),x=l(5877),b=l(2439),h=l(5579),m=l.n(h);function g(){let[e,r]=(0,d.useState)(!0),[l,s]=(0,d.useState)(!1),[h,g]=(0,d.useState)(null),[p,f]=(0,d.useState)(!1),{data:w,status:j}=(0,n.useSession)(),[v,y]=(0,d.useState)({user:"loading...",jobTitle:"loading...",skills:"loading...",name:"loading...",notes:"loading..."});(0,d.useEffect)(()=>{var e;"authenticated"===j&&(null==w?void 0:null===(e=w.user)||void 0===e?void 0:e.email)&&fetch("/api/user/seeker/".concat(w.user.email)).then(e=>{if(!e.ok)throw(0,c.toast)("".concat(error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error("Network response was not ok");return e.json()}).then(e=>{y(e.seekers[0]),r(!1)}).catch(e=>{(0,c.toast)("".concat(e),{hideProgressBar:!0,autoClose:2e3,type:"error"}),console.error("Error fetching data:",e)})},[w,j]),(0,d.useEffect)(()=>{if(h){if(null==v?void 0:v._id){fetch("/api/seeker/".concat(v._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then(e=>{if(!e.ok)throw(0,c.toast)("".concat(e.error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error("Network response was not ok");return(0,c.toast)("Updated data",{hideProgressBar:!0,autoClose:2e3,type:"success"}),e.json()}).then(e=>{y(e),window.location.reload()}).catch(e=>{console.error("Error fetching data:",e)});return}fetch("/api/seeker",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then(e=>{if(!e.ok)throw(0,c.toast)("".concat(e.error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error("Network response was not ok");return(0,c.toast)("Uploaded data",{hideProgressBar:!0,autoClose:2e3,type:"success"}),e.json()}).then(e=>{y(e),window.location.reload()}).catch(e=>{console.error("Error fetching data:",e)})}},[h]);let[N,k]=(0,d.useState)(""),[C,S]=(0,d.useState)(""),[T,E]=(0,d.useState)(""),[P,_]=(0,d.useState)(""),[A,B]=(0,d.useState)(""),[F,O]=(0,d.useState)(""),[V,D]=(0,d.useState)(""),[I,M]=(0,d.useState)(""),[U,J]=(0,d.useState)(!1),[L,G]=(0,d.useState)(!1),R=()=>{f(!0)},Z=e=>{try{fetch("/api/seeker/".concat(e._id),{method:"DELETE"})}catch(e){throw(0,c.toast)("".concat(e),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error(e)}(0,c.toast)("Deleted data",{hideProgressBar:!0,autoClose:2e3,type:"success"}),window.location.reload()};return(0,t.jsxs)(t.Fragment,{children:[e?(0,t.jsx)(i.Z,{}):(0,t.jsxs)("div",{className:"min-h-screen min-w-screen",children:[(0,t.jsx)("div",{className:"absolute h-[40px] w-[40px] rounded-full m-3 hover:bg-primary hover:text-white",children:(0,t.jsx)(a(),{href:"/user",children:(0,t.jsx)(o.FiArrowLeft,{className:"h-8 md:h-10 w-max"})})}),(0,t.jsxs)("div",{className:"lg:flex w-screen min-h-screen",children:[(0,t.jsx)("div",{className:"lg:w-[50%] ",children:(0,t.jsxs)("form",{onSubmit:()=>{s(!0)},className:"bg-tertiary lg:w-full p-5 flex flex-col justify-center",children:[(0,t.jsx)("h1",{className:"font-bold text-[3rem] px-4 self-center",children:"Upload your CV here!"}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2 ",children:["Job Title:",(0,t.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:A,onChange:e=>B(e.target.value)})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Name:",(0,t.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:N,onChange:e=>k(e.target.value)})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Sex:",(0,t.jsxs)("select",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:C,onChange:e=>{S(e.target.value)},children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Select a Tag"}),["Male","Female"].map(e=>(0,t.jsx)("option",{value:e,children:e},e))]}),"                        "]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Education:",(0,t.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:T,onChange:e=>E(e.target.value)})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Age:",(0,t.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"number",value:P,onChange:e=>_(e.target.value)})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Skills (comma-separated):",(0,t.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:F,onChange:e=>O(e.target.value)})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Upload Image:",(0,t.jsx)("input",{className:"w-[50%] p-1",type:"file",accept:"image/*"})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Industry tag:",(0,t.jsxs)("select",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:V,onChange:e=>{D(e.target.value)},children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Select a Tag"}),["Industrial / Manufacturing","Insurance","FMCG","Media & Agency","Financial Service","Property","Retail"].map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Title tag:",(0,t.jsxs)("select",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:I,onChange:e=>M(e.target.value),children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Select a Tag"}),["Staff","Supervisor","Manager","General Manager","Director"].map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}),U?(0,t.jsx)("div",{className:"text-red-600 text-xs",children:"*Lengkapi data anda!"}):null,(0,t.jsx)("button",{className:" ".concat(U?"bg-red-600":"bg-black border-primary hover:text-primary border-2 hover:bg-white"," bg-black text-white text-center py-4 rounded-md my-2 self-end w-[25%] "),type:"button",onClick:()=>{s(!0)},children:"Submit"})]})}),(0,t.jsx)("div",{className:"lg:w-[50%] h-max p-5 flex flex-col",children:(0,t.jsx)("div",{className:"max-w-full h-full p-4",style:{borderRadius:"10px",background:"#FAFAFA",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"},children:(0,t.jsxs)("div",{className:"h-full",children:[(0,t.jsx)("h1",{className:"font-bold text-[3rem] px-4 self-center",children:"Preview Your CV"}),(0,t.jsx)("div",{className:"p-4 border ".concat((null==v?void 0:v.approval)?"bg-green-200":"bg-red-200"),children:(0,t.jsx)("p",{className:"text-center",children:(null==v?void 0:v.approval)?"This CV is approved!":"This CV is not yet approved."})}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Name :",(0,t.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==v?void 0:v.name)?v.name:null})]}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Age :",(0,t.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==v?void 0:v.age)?v.age:null})]}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Job Title :",(0,t.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==v?void 0:v.jobTitle)?v.jobTitle:null})]}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Education :",(0,t.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==v?void 0:v.education)?v.education:null})]}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Skills :",(0,t.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==v?void 0:v.skills)?v.skills:null})]}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["CV :",(0,t.jsx)("div",{}),(null==v?void 0:v.image)?(0,t.jsx)("button",{onClick:()=>G(!0),className:"bg-primary text-white px-4 py-2 rounded-md hover:text-primary border-2 border-primary sNover:px-1 hover:bg-white",children:"View"}):null]}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Industrial Tag :",(0,t.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==v?void 0:v.tag)?v.tag[0]:null})]}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Title Tag :",(0,t.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==v?void 0:v.tag)?v.tag[1]:null})]}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Sex :",(0,t.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==v?void 0:v.sex)?v.sex:null})]}),(0,t.jsx)("button",{className:"bg-red-600 text-white px-4 py-2 rounded-md hover:text-red-600 border-2 border-red-600 hover:bg-white",onClick:()=>R(null==v?void 0:v._id),children:"Delete"})]})})})]}),(0,t.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex items-center justify-center ".concat(L?"visible":"invisible"),style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:(0,t.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[(0,t.jsx)("button",{className:"absolute bg-white text-primary px-2 py-2 rounded-full hover:bg-primary hover:text-white",onClick:()=>G(!1),children:(0,t.jsx)(u.aHS,{size:18})}),(0,t.jsx)("img",{src:null==v?void 0:v.image,alt:"CV Preview",className:"max-h-[80vh] max-w-[80vw]"})]})}),(0,t.jsx)(b.Z,{isOpen:p,onClose:()=>f(!1),title:"Confirm Deletion",content:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Are you sure you want to delete this job seeker?"}),(0,t.jsx)("button",{className:"mx-2 bg-red-600 text-white px-4 py-2 rounded-md hover:text-red-600 border-2 border-red-600 hover:bg-white",onClick:()=>Z(v),children:"Delete"}),(0,t.jsx)("button",{className:"mx-2 bg-primary text-white px-4 py-2 rounded-md hover:text-primary border-2 border-primary hover:bg-white",onClick:()=>f(!1),children:"Cancel"})]})})]}),(0,t.jsx)(m(),{isOpen:l,setIsOpenClose:s,handlesubmit:()=>{if(!A||!N||!C||!T||!P||!F||!V||!I){J(!0),s(!1);return}let e=document.querySelector('input[type="file"]');(0,x.k)(e,e=>{let r={user:w.user.email,jobTitle:A,name:N,sex:C,education:T,age:P,skills:F,tag:[V,I],image:e,approval:!1};g(r)})}})]})}}},function(e){e.O(0,[420,685,749,920,464,971,596,744],function(){return e(e.s=6647)}),_N_E=e.O()}]);
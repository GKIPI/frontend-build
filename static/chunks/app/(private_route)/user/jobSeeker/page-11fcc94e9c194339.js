(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7423],{6647:function(e,r,t){Promise.resolve().then(t.bind(t,4831))},3361:function(e,r,t){"use strict";t.r(r),t.d(r,{downloadImage:function(){return l},downloadPDf:function(){return a},parseBlobToURL:function(){return o}});let l=(e,r)=>{let t=atob(e.split(",")[1]),l=new ArrayBuffer(t.length),a=new Uint8Array(l);for(let e=0;e<t.length;e++)a[e]=t.charCodeAt(e);let o=new Blob([l],{type:"image/jpeg"}),s=URL.createObjectURL(o),n=document.createElement("a");n.href=s,n.download="".concat(r,".jpg"),document.body.appendChild(n),n.click(),document.body.removeChild(n)},a=(e,r)=>{let t=atob(e.split(",")[1]),l=new ArrayBuffer(t.length),a=new Uint8Array(l);for(let e=0;e<t.length;e++)a[e]=t.charCodeAt(e);let o=new Blob([l],{type:"application/pdf"}),s=URL.createObjectURL(o),n=document.createElement("a");n.href=s,n.download="".concat(r,".pdf"),document.body.appendChild(n),n.click(),document.body.removeChild(n)},o=e=>{if(!e)return null;let r=atob(e.split(",")[1]),t=new ArrayBuffer(r.length),l=new Uint8Array(t);for(let e=0;e<r.length;e++)l[e]=r.charCodeAt(e);let a=new Blob([t],{type:"image/jpeg"}),o=URL.createObjectURL(a);return o}},998:function(e,r,t){"use strict";function l(e){return e&&e.startsWith("data:image/")}t.r(r),t.d(r,{isImage:function(){return l}})},4831:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var l=t(7437),a=t(1396),o=t.n(a),s=t(8920),n=t(2265),d=t(2749),i=t(1552),c=t(171),u=t(3159),b=t(5877),x=t(2439),h=t(5579),m=t.n(h),p=t(3361),g=t(998);function f(){let[e,r]=(0,n.useState)(!0),[t,a]=(0,n.useState)(null),[h,f]=(0,n.useState)(!1),[w,j]=(0,n.useState)(null),[y,v]=(0,n.useState)(!1),{data:N,status:k}=(0,d.useSession)(),[C,S]=(0,n.useState)({user:"loading...",jobTitle:"loading...",skills:"loading...",name:"loading...",notes:"loading..."});(0,n.useEffect)(()=>{var e;"authenticated"===k&&(null==N?void 0:null===(e=N.user)||void 0===e?void 0:e.email)&&fetch("/api/user/seeker/".concat(N.user.email)).then(e=>{if(!e.ok)throw(0,c.toast)("".concat(error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error("Network response was not ok");return e.json()}).then(e=>{S(e.seekers[0]),r(!1)}).catch(e=>{(0,c.toast)("".concat(e),{hideProgressBar:!0,autoClose:2e3,type:"error"}),console.error("Error fetching data:",e)})},[N,k]),(0,n.useEffect)(()=>{if(w){if(null==C?void 0:C._id){fetch("/api/seeker/".concat(C._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)}).then(e=>{if(!e.ok)throw(0,c.toast)("".concat(e.error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error("Network response was not ok");return(0,c.toast)("Updated data",{hideProgressBar:!0,autoClose:2e3,type:"success"}),e.json()}).then(e=>{S(e),window.location.reload()}).catch(e=>{console.error("Error fetching data:",e)});return}fetch("/api/seeker",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)}).then(e=>{if(!e.ok)throw(0,c.toast)("".concat(e.error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error("Network response was not ok");return(0,c.toast)("Uploaded data",{hideProgressBar:!0,autoClose:2e3,type:"success"}),e.json()}).then(e=>{S(e),window.location.reload()}).catch(e=>{console.error("Error fetching data:",e)})}},[w]);let[T,A]=(0,n.useState)(""),[E,P]=(0,n.useState)(""),[U,B]=(0,n.useState)(""),[R,D]=(0,n.useState)(""),[L,O]=(0,n.useState)(""),[V,F]=(0,n.useState)(""),[_,I]=(0,n.useState)(""),[M,J]=(0,n.useState)(""),[G,Z]=(0,n.useState)(!1),[q,z]=(0,n.useState)(!1),[H,W]=(0,n.useState)(""),[Y,K]=(0,n.useState)(""),Q=()=>{v(!0)},X=e=>{try{fetch("/api/seeker/".concat(e._id),{method:"DELETE"})}catch(e){throw(0,c.toast)("".concat(e),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error(e)}(0,c.toast)("Deleted data",{hideProgressBar:!0,autoClose:2e3,type:"success"}),window.location.reload()};return(0,l.jsxs)(l.Fragment,{children:[e?(0,l.jsx)(i.Z,{}):(0,l.jsxs)("div",{className:"min-h-screen min-w-screen",children:[(0,l.jsx)("div",{className:"absolute h-[40px] w-[40px] rounded-full m-3 hover:bg-primary hover:text-white",children:(0,l.jsx)(o(),{href:"/user",children:(0,l.jsx)(s.FiArrowLeft,{className:"h-8 md:h-10 w-max"})})}),(0,l.jsxs)("div",{className:"lg:flex w-screen min-h-screen",children:[(0,l.jsx)("div",{className:"lg:w-[50%] ",children:(0,l.jsxs)("form",{onSubmit:()=>{f(!0)},className:"bg-tertiary lg:w-full p-5 flex flex-col ",children:[(0,l.jsx)("h1",{className:"font-bold text-[3rem] px-4 self-center",children:"Upload your CV here!"}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2 ",children:["Job Title:",(0,l.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:L,onChange:e=>O(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Name:",(0,l.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:T,onChange:e=>A(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Sex:",(0,l.jsxs)("select",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:E,onChange:e=>{P(e.target.value)},children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select a Tag"}),["Male","Female"].map(e=>(0,l.jsx)("option",{value:e,children:e},e))]}),"                        "]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Education:",(0,l.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:U,onChange:e=>B(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Age:",(0,l.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"number",value:R,onChange:e=>D(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Skills (comma-separated):",(0,l.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:V,onChange:e=>F(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Upload CV(.jpg, .png, .jpeg, .pdf):",(0,l.jsx)("input",{onChange:e=>{let r=e.target.files[0];if(r){let e=new FileReader;e.onload=e=>{let r=e.target.result;W(r)},e.readAsDataURL(r)}},className:"w-[50%] p-1",type:"file",accept:"image/* pdf"})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Upload Photo(.jpg, .jpeg, .png):",(0,l.jsx)("input",{onChange:e=>{let r=e.target.files[0];if(r){let e=new FileReader;e.onload=e=>{let r=e.target.result;K(r)},e.readAsDataURL(r)}},className:"w-[50%] p-1",type:"file",accept:"image/*"})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Industry tag:",(0,l.jsxs)("select",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:_,onChange:e=>{I(e.target.value)},children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select a Tag"}),["Industrial / Manufacturing","Insurance","FMCG","Media & Agency","Financial Service","Property","Retail"].map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Title tag:",(0,l.jsxs)("select",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:M,onChange:e=>J(e.target.value),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select a Tag"}),["Staff","Supervisor","Manager","General Manager","Director"].map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})]}),G?(0,l.jsx)("div",{className:"text-red-600 text-xs",children:"*Complete your data!"}):null,(0,l.jsx)("button",{className:" ".concat(G?"bg-red-600":"bg-black border-primary hover:text-primary border-2 hover:bg-white"," bg-black text-white text-center py-4 rounded-md my-2 self-end w-[25%] "),type:"button",onClick:()=>{f(!0)},children:"Submit"})]})}),(0,l.jsx)("div",{className:"lg:w-[50%] h-max p-5 flex flex-col",children:(0,l.jsx)("div",{className:"max-w-full h-full p-4",style:{borderRadius:"10px",background:"#FAFAFA",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"},children:(0,l.jsxs)("div",{className:"h-full",children:[(0,l.jsx)("h1",{className:"font-bold text-[3rem] px-4 self-center",children:"Preview Your CV"}),(0,l.jsx)("div",{className:"p-4 border ".concat((null==C?void 0:C.approval)?"bg-green-200":"bg-red-200"),children:(0,l.jsx)("p",{className:"text-center",children:(null==C?void 0:C.approval)?"This CV is approved!":"This CV is not yet approved."})}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Name :",(0,l.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==C?void 0:C.name)?C.name:null})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Age :",(0,l.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==C?void 0:C.age)?C.age:null})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Job Title :",(0,l.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==C?void 0:C.jobTitle)?C.jobTitle:null})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Education :",(0,l.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==C?void 0:C.education)?C.education:null})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Skills :",(0,l.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==C?void 0:C.skills)?C.skills:null})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["CV :",(0,l.jsx)("div",{}),(null==C?void 0:C.image)?(0,g.isImage)(C.image)?(0,l.jsx)("button",{onClick:()=>{a(C.image),z(!0)},className:"bg-primary text-white px-4 py-2 rounded-md hover:text-primary border-2 border-primary sNover:px-1 hover:bg-white",children:"View"}):(0,l.jsx)("button",{onClick:()=>{(0,p.downloadPDf)(C.image,C.name)},className:"bg-primary text-white px-4 py-2 rounded-md hover:text-primary border-2 border-primary sNover:px-1 hover:bg-white",children:"View"}):null]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Photo :",(0,l.jsx)("div",{}),(null==C?void 0:C.headshot)?(0,g.isImage)(C.headshot)?(0,l.jsx)("button",{onClick:()=>{a(C.headshot),z(!0)},className:"bg-primary text-white px-4 py-2 rounded-md hover:text-primary border-2 border-primary sNover:px-1 hover:bg-white",children:"View"}):(0,l.jsx)("button",{onClick:()=>{(0,p.downloadPDf)(C.headshot,C.name)},className:"bg-primary text-white px-4 py-2 rounded-md hover:text-primary border-2 border-primary sNover:px-1 hover:bg-white",children:"View"}):null]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Industrial Tag :",(0,l.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==C?void 0:C.tag)?C.tag[0]:null})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Title Tag :",(0,l.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==C?void 0:C.tag)?C.tag[1]:null})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Sex :",(0,l.jsx)("div",{className:"px-1 bg-white rounded-lg border-2",children:(null==C?void 0:C.sex)?C.sex:null})]}),(0,l.jsx)("button",{className:"bg-red-600 text-white px-4 py-2 rounded-md hover:text-red-600 border-2 border-red-600 hover:bg-white",onClick:()=>Q(null==C?void 0:C._id),children:"Delete"})]})})})]}),(0,l.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex items-center justify-center ".concat(q?"visible":"invisible"),style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:(0,l.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[(0,l.jsx)("button",{className:"absolute bg-white text-primary px-2 py-2 rounded-full hover:bg-primary hover:text-white",onClick:()=>z(!1),children:(0,l.jsx)(u.aHS,{size:18})}),(0,l.jsx)("img",{src:t,alt:"CV Preview",className:"max-h-[80vh] max-w-[80vw]"})]})}),(0,l.jsx)(x.Z,{isOpen:y,onClose:()=>v(!1),title:"Confirm Deletion",content:(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Are you sure you want to delete this job seeker?"}),(0,l.jsx)("button",{className:"mx-2 bg-red-600 text-white px-4 py-2 rounded-md hover:text-red-600 border-2 border-red-600 hover:bg-white",onClick:()=>X(C),children:"Delete"}),(0,l.jsx)("button",{className:"mx-2 bg-primary text-white px-4 py-2 rounded-md hover:text-primary border-2 border-primary hover:bg-white",onClick:()=>v(!1),children:"Cancel"})]})})]}),(0,l.jsx)(m(),{isOpen:h,setIsOpenClose:f,handlesubmit:()=>{if(!L||!T||!E||!U||!H||!R||!V||!_||!M){Z(!0),f(!1);return}let e=document.querySelector('input[type="file"]');(0,b.k)(e,e=>{let r={user:N.user.email,jobTitle:L,name:T,sex:E,education:U,age:R,skills:V,tag:[_,M],headshot:Y,image:H,approval:!1};j(r)})}})]})}}},function(e){e.O(0,[2420,6685,2749,8920,6464,2971,596,1744],function(){return e(e.s=6647)}),_N_E=e.O()}]);
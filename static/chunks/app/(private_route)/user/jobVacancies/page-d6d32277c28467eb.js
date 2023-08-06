(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{8666:function(e,r,l){Promise.resolve().then(l.bind(l,7128))},609:function(e,r,l){"use strict";var t=l(7437);l(2265);var s=l(3159);r.Z=e=>{let{isOpen:r,onClose:l,title:a,content:n}=e;return r?(0,t.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex items-center justify-center",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:(0,t.jsx)("div",{className:"modal",children:(0,t.jsxs)("div",{className:"modal-header bg-white p-6 rounded-lg shadow-lg w-[90vw] mx-auto",children:[(0,t.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,t.jsx)("h2",{className:"font-bold",children:a}),(0,t.jsx)("button",{className:"bg-white text-primary px-2 py-2 rounded-full hover:bg-primary hover:text-white",onClick:l,children:(0,t.jsx)(s.aHS,{size:18})})]}),(0,t.jsx)("div",{className:"modal-content",children:n})]})})}):null}},7128:function(e,r,l){"use strict";l.r(r),l.d(r,{default:function(){return u}});var t=l(7437),s=l(1396),a=l.n(s),n=l(8920),o=l(2265),d=l(2749),i=l(609),c=l(4033);function u(){let[e,r]=(0,o.useState)(null),[l,s]=(0,o.useState)(!1),{data:u,status:x}=(0,d.useSession)(),[b,h]=(0,o.useState)({});(0,c.useRouter)(),(0,o.useEffect)(()=>{var e;"authenticated"===x&&(null==u?void 0:null===(e=u.user)||void 0===e?void 0:e.email)&&fetch("/api/user/vacancy/".concat(u.user.email)).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{h(e.vacancies)}).catch(e=>{console.error("Error fetching data:",e)})},[u,x]),(0,o.useEffect)(()=>{e&&(console.log(e),fetch("/api/vacancy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{h(e)}).catch(e=>{console.error("Error fetching data:",e)}))},[e]);let[m,f]=(0,o.useState)(""),[g,w]=(0,o.useState)(""),[p,j]=(0,o.useState)(""),[v,y]=(0,o.useState)(""),[N,k]=(0,o.useState)(""),[S,C]=(0,o.useState)(""),[T,E]=(0,o.useState)(null),[_,A]=(0,o.useState)(!1),[D,F]=(0,o.useState)(!1),[J,O]=(0,o.useState)({}),I=e=>{O(e),A(!0)},L=e=>{O(e),F(!0)},M=e=>{try{console.log(e._id),fetch("/api/vacancy/".concat(e._id),{method:"DELETE"})}catch(e){throw Error(e)}window.location.reload()};return(0,t.jsxs)("div",{className:"min-h-screen min-w-screen",children:[(0,t.jsx)("div",{className:"absolute h-[40px] w-[40px] rounded-full m-3 hover:bg-primary hover:text-white",children:(0,t.jsx)(a(),{href:"/user",children:(0,t.jsx)(n.FiArrowLeft,{className:"h-8 md:h-10 w-max"})})}),(0,t.jsxs)("div",{className:"lg:flex w-screen min-h-screen",children:[(0,t.jsx)("div",{className:"lg:w-[50%] h-screen",children:(0,t.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),!m||!g||!v||!N||!S){s(!0);return}let l=document.querySelector('input[type="file"]'),t="";if(l.files.length>0){let e=new FileReader;e.onload=e=>{t=e.target.result;let l={user:u.user.email,jobTitle:m,company:g,location:p,notes:v,tag:[N,S],image:t};r(l)},e.readAsDataURL(l.files[0])}window.location.reload()},className:"bg-tertiary lg:w-full h-screen p-5 flex flex-col justify-center",children:[(0,t.jsx)("h1",{className:"font-bold text-[3rem] px-4 self-center",children:"Lets make the world better!"}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Job Title:",(0,t.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:m,onChange:e=>f(e.target.value)})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Company:",(0,t.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:g,onChange:e=>w(e.target.value)})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Notes:",(0,t.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:v,onChange:e=>y(e.target.value)})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Job location:",(0,t.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:p,onChange:e=>j(e.target.value)})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Upload Image:",(0,t.jsx)("input",{className:"w-[50%] p-1",type:"file",accept:"image/*",onChange:e=>{let r=e.target.files[0];E(r)}})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Industry tag:",(0,t.jsxs)("select",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:N,onChange:e=>k(e.target.value),children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Select a Tag"}),["Industrial / Manufacturing","Insurance","FMCG","Media & Agency","Financial Service","Property","Retail"].map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}),(0,t.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Title tag:",(0,t.jsxs)("select",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:S,onChange:e=>C(e.target.value),children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Select a Tag"}),["Staff","Supervisor","Manager","General Manager","Director"].map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}),l?(0,t.jsx)("div",{className:"text-red-600 text-xs",children:"*Lengkapi data anda!"}):null,(0,t.jsx)("button",{className:" ".concat(l?"bg-red-600":"bg-black border-primary hover:text-primary border-2 hover:bg-white"," bg-black text-white text-center py-4 rounded-md my-2 self-end w-[25%] "),type:"submit",children:"Submit"})]})}),(0,t.jsx)("div",{className:"lg:w-[50%] h-max p-5 flex flex-col",children:(0,t.jsx)("div",{className:"max-w-full h-full p-4",style:{borderRadius:"10px",background:"#FAFAFA",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"},children:(0,t.jsxs)("div",{className:"h-[80vh]",children:[(0,t.jsx)("h1",{className:"font-bold text-[3rem] px-4 self-center",children:"Preview"}),b.length>0?b.map((e,r)=>(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:[(0,t.jsxs)("div",{children:["Job Title :",(0,t.jsx)("div",{children:e.jobTitle})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("button",{className:"bg-primary text-white px-4 py-2 rounded-md hover:text-primary border-2 border-primary hover:bg-white",onClick:()=>I(e),children:"View"})," ",(0,t.jsx)("button",{className:"bg-red-600 text-white px-4 py-2 rounded-md hover:text-red-600 border-2 border-red-600 hover:bg-white",onClick:()=>L(e),children:"Delete"})]})]},r)):(0,t.jsx)("p",{className:"m-5 text-red-600",children:"*No job vacancies added yet."}),(0,t.jsx)(i.Z,{isOpen:_,onClose:()=>A(!1),title:J.jobTitle,content:(0,t.jsxs)("div",{className:"max-h-[80vh] overflow-y-auto",children:[(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Job Title :",(0,t.jsx)("div",{children:J.jobTitle})]}),(0,t.jsx)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:(0,t.jsx)("img",{src:J.image,alt:"CV Preview",className:"max-h-[80vh] max-w-[80vw]"})}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Job location :",(0,t.jsx)("div",{children:J.location})]}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Company :",(0,t.jsx)("div",{children:J.company})]}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Industrial Tag :",(0,t.jsx)("div",{children:J.tag?J.tag[0]:null})]}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Title Tag :",(0,t.jsx)("div",{children:J.tag?J.tag[1]:null})]}),(0,t.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Notes :",(0,t.jsx)("p",{children:J.notes})]})]})}),(0,t.jsx)(i.Z,{isOpen:D,onClose:()=>F(!1),title:"Confirm Deletion",content:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Are you sure you want to delete this job vacancy?"}),(0,t.jsx)("button",{className:"bg-red-600 text-white px-4 py-2 rounded-md hover:text-red-600 border-2 border-red-600 hover:bg-white",onClick:()=>M(J),children:"Delete"}),(0,t.jsx)("button",{className:"bg-primary text-white px-4 py-2 rounded-md hover:text-primary border-2 border-primary hover:bg-white",onClick:()=>F(!1),children:"Cancel"})]})})]})})})]})]})}},4033:function(e,r,l){e.exports=l(8165)}},function(e){e.O(0,[420,685,749,791,971,596,744],function(){return e(e.s=8666)}),_N_E=e.O()}]);
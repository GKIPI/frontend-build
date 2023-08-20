(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{3450:function(e,r,t){Promise.resolve().then(t.bind(t,7128))},7128:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return g}});var l=t(7437),s=t(1396),a=t.n(s),o=t(8920),n=t(2265),d=t(2749),i=t(2439),c=t(4033),u=t(1552),x=t(171),b=t(9150),m=t(4606),h=t(5877),p=t(5579),f=t.n(p);function g(){let[e,r]=(0,n.useState)(!0),[t,s]=(0,n.useState)(null),[p,g]=(0,n.useState)(!1),[w,j]=(0,n.useState)(!1),{data:v,status:y}=(0,d.useSession)(),[N,k]=(0,n.useState)({});(0,c.useRouter)(),(0,n.useEffect)(()=>{var e;"authenticated"===y&&(null==v?void 0:null===(e=v.user)||void 0===e?void 0:e.email)&&fetch("/api/user/vacancy/".concat(v.user.email)).then(e=>{if(!e.ok)throw(0,x.toast)("".concat(error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error("Network response was not ok");return e.json()}).then(e=>{k(e.vacancies),r(!1)}).catch(e=>{(0,x.toast)("".concat(e),{hideProgressBar:!0,autoClose:2e3,type:"error"}),console.error("Error fetching data:",e)})},[v,y]),(0,n.useEffect)(()=>{t&&fetch("/api/vacancy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>{if(!e.ok)throw(0,x.toast)("".concat(e.error),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error("Network response was not ok");return(0,x.toast)("Submited data",{hideProgressBar:!0,autoClose:2e3,type:"success"}),e.json()}).then(e=>{k(e),window.location.reload()}).catch(e=>{console.error("Error fetching data:",e)})},[t]);let[C,S]=(0,n.useState)(""),[T,E]=(0,n.useState)(""),[P,O]=(0,n.useState)(""),[A,F]=(0,n.useState)(""),[_,B]=(0,n.useState)(""),[I,J]=(0,n.useState)(""),[M,D]=(0,n.useState)(null),[R,V]=(0,n.useState)(!1),[Z,z]=(0,n.useState)(!1),[G,L]=(0,n.useState)({}),Y=e=>{L(e),V(!0)},q=e=>{L(e),z(!0)},H=e=>{try{fetch("/api/vacancy/".concat(e._id),{method:"DELETE"})}catch(e){throw(0,x.toast)("".concat(e),{hideProgressBar:!0,autoClose:2e3,type:"error"}),Error(e)}(0,x.toast)("Deleted data",{hideProgressBar:!0,autoClose:2e3,type:"success"}),window.location.reload()};return(0,l.jsx)(l.Fragment,{children:e?(0,l.jsx)(u.Z,{}):(0,l.jsxs)("div",{className:"min-h-screen min-w-screen",children:[(0,l.jsx)("div",{className:"absolute h-[40px] w-[40px] rounded-full m-3 hover:bg-primary hover:text-white",children:(0,l.jsx)(a(),{href:"/user",children:(0,l.jsx)(o.FiArrowLeft,{className:"h-8 md:h-10 w-max"})})}),(0,l.jsxs)("div",{className:"lg:flex w-screen min-h-screen",children:[(0,l.jsx)("div",{className:"lg:w-[50%] h-screen",children:(0,l.jsxs)("form",{onSubmit:()=>{g(!0)},className:"bg-tertiary lg:w-full h-screen p-5 flex flex-col justify-center",children:[(0,l.jsx)("h1",{className:"font-bold text-[3rem] px-4 self-center md:text-3xl mt-8",children:"Helping hands, better futures."}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Job Title:",(0,l.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:C,onChange:e=>S(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Company:",(0,l.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:T,onChange:e=>E(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Notes:",(0,l.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:A,onChange:e=>F(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Job location:",(0,l.jsx)("input",{className:"border-2 border-black w-[50%] p-1 rounded-lg",type:"text",value:P,onChange:e=>O(e.target.value)})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Upload Image:",(0,l.jsx)("input",{className:"w-[50%] p-1",type:"file",accept:"image/*",onChange:e=>{let r=e.target.files[0];D(r)}})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Industry tag:",(0,l.jsxs)("select",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:_,onChange:e=>B(e.target.value),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select a Tag"}),["Industrial / Manufacturing","Insurance","FMCG","Media & Agency","Financial Service","Property","Retail"].map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})]}),(0,l.jsxs)("label",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Title tag:",(0,l.jsxs)("select",{className:"border-2 border-black w-[50%] p-1 rounded-lg",value:I,onChange:e=>J(e.target.value),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select a Tag"}),["Staff","Supervisor","Manager","General Manager","Director"].map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})]}),w?(0,l.jsx)("div",{className:"text-red-600 text-xs",children:"*Complete your data!"}):null,(0,l.jsx)("button",{className:" ".concat(w?"bg-red-600":"bg-black border-primary hover:text-primary border-2 hover:bg-white"," bg-black text-white text-center py-4 rounded-md my-2 self-end w-[25%] "),type:"button",onClick:()=>{g(!0)},children:"Submit"})]})}),(0,l.jsxs)("div",{className:"lg:w-[50%] h-max p-5 flex flex-col",children:[(0,l.jsx)("h1",{className:"font-bold text-[3rem] px-4 md:text-4xl self-start mb-4 mt-4",children:"My Job Vacancies"}),(0,l.jsx)("div",{className:"max-w-full h-full p-4",style:{borderRadius:"10px",background:"#FAFAFA",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"},children:(0,l.jsxs)("div",{className:"h-[80vh] overflow-auto",children:[N.length>0?N.map((e,r)=>(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:[(0,l.jsx)("div",{className:"lg:flex flex-row",children:(0,l.jsxs)("div",{className:"line-clamp-1 mx-2 line-clamp-1 font-semibold",children:[" ",e.jobTitle]})}),(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)("div",{className:"lg:p-3 p-1 rounded-full line-clamp-1 mx-3 border-2 ".concat((null==e?void 0:e.approval)?"bg-green-200 border-green-600":"bg-red-200 border-red-600"),children:(0,l.jsx)("p",{className:"text-center",children:(null==e?void 0:e.approval)?"approved":"not approved"})}),(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)(m.rCC,{size:30,title:"view",className:"mx-1 p-1 bg-primary text-white rounded-md hover:text-primary border-2 border-primary hover:bg-white",onClick:()=>Y(e)}),(0,l.jsx)(b.VPh,{size:30,title:"delete",className:"mx-1 p-1 border-2 border-red-600 text-white bg-red-600 hover:text-red-400 rounded-md hover:bg-white",onClick:()=>q(e)})]})]})]},r)):(0,l.jsx)("p",{className:"m-5 text-red-600",children:"*No job vacancies added yet."}),(0,l.jsx)(i.Z,{isOpen:R,onClose:()=>V(!1),title:G.jobTitle,content:(0,l.jsxs)("div",{className:"max-h-[80vh] overflow-y-auto",children:[(0,l.jsxs)("div",{className:"border-2 p-3 w-full flex flex-row justify-between text-lg items-center rounded-lg my-2 ".concat(G.approval?"bg-green-300 border-green-600 ":"bg-red-300 border-red-600 "),children:["Approval:",G.approval?(0,l.jsx)("p",{children:"Your data is approved"}):(0,l.jsx)("p",{children:"Your data isn't approved yet"})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Job Title :",(0,l.jsx)("div",{children:G.jobTitle})]}),(0,l.jsx)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:(0,l.jsx)("img",{src:G.image,alt:"CV Preview",className:"max-h-[80vh] max-w-[80vw]"})}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Job location :",(0,l.jsx)("div",{children:G.location})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Company :",(0,l.jsx)("div",{children:G.company})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Industrial Tag :",(0,l.jsx)("div",{children:G.tag?G.tag[0]:null})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Title Tag :",(0,l.jsx)("div",{children:G.tag?G.tag[1]:null})]}),(0,l.jsxs)("div",{className:"border-2 p-3 w-full border-black flex flex-row justify-between text-lg items-center rounded-lg my-2",children:["Notes :",(0,l.jsx)("p",{children:G.notes})]})]})}),(0,l.jsx)(i.Z,{isOpen:Z,onClose:()=>z(!1),title:"Confirm Deletion",content:(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Are you sure you want to delete this job vacancy?"}),(0,l.jsx)("button",{className:"mx-2 bg-red-600 text-white px-4 py-2 rounded-md hover:text-red-600 border-2 border-red-600 hover:bg-white",onClick:()=>H(G),children:"Delete"}),(0,l.jsx)("button",{className:"mx-2 bg-primary text-white px-4 py-2 rounded-md hover:text-primary border-2 border-primary hover:bg-white",onClick:()=>z(!1),children:"Cancel"})]})}),(0,l.jsx)(f(),{isOpen:p,setIsOpenClose:g,handlesubmit:()=>{if(!C||!T||!A||!_||!I){j(!0),g(!1);return}let e=document.querySelector('input[type="file"]');(0,h.k)(e,e=>{let r={user:v.user.email,jobTitle:C,company:T,location:P,notes:A,tag:[_,I],image:e};s(r)})}})]})})]})]})]})})}},4033:function(e,r,t){e.exports=t(8165)}},function(e){e.O(0,[712,447,420,685,749,920,464,971,596,744],function(){return e(e.s=3450)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2358],{8364:function(e,t,r){Promise.resolve().then(r.bind(r,7704))},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},unstable_getImgProps:function(){return c}});let a=r(1024),l=r(2301),s=r(7873),i=r(3222),n=a._(r(6515)),c=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},o=i.Image},7704:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var a=r(7437),l=r(8465),s=r(7543),i=r(3159),n=r(6691),c=r.n(n),o=r(1396),x=r.n(o);function f(){return(0,a.jsx)("section",{className:"bg-tertiary max-w-[100vw] p-1",children:(0,a.jsxs)("div",{className:"md:max-w-[50%] flex flex-row md:mx-[50px] m-2 font-medium",children:[(0,a.jsxs)("div",{className:"flex justify-center flex-col md:items-center md:max-w-[70%] w-[100%] md:text-[15px] text-[10px]",children:[(0,a.jsx)(c(),{src:s.default,width:600,height:600,className:"md:w-[90px] w-[40px] bg-secondary m-3",alt:"Logo"}),(0,a.jsx)("div",{children:"Jalan Sekolah Kencana IV No. TN-7, RT.4/RW.15, Pondok Pinang, Kebayoran Lama, South Jakarta City, Jakarta 12310"}),(0,a.jsx)("div",{className:"w-full",children:"Telp     : (021) 7503247"}),(0,a.jsxs)("div",{className:"w-full",children:["e-Mail : ",(0,a.jsx)("a",{target:"_blank",href:"https://gkipi.org/",children:"admin@komunitasprofesigkipi.org"})]})]}),(0,a.jsxs)("div",{className:"md:m-5 m-2 w-fit min-w-max font-semibold flex flex-col md:text-[20px] text-[15px] items-center justify-center",children:[(0,a.jsx)("div",{children:"Follow Us"}),(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)(x(),{target:"_blank",href:"https://www.instagram.com/komunitas_profesi/",children:(0,a.jsx)(i.Zf_,{className:"w-[20px] h-[20px] max-xs:w-[30px] max-xs:h-[15px] m-3"})}),(0,a.jsx)(x(),{target:"_blank",href:"https://twitter.com/gkipiweb",children:(0,a.jsx)(i.fWC,{className:"w-[20px] h-[20px] max-xs:w-[30px] max-xs:h-[15px] m-3"})}),(0,a.jsx)(x(),{target:"_blank",href:"https://www.youtube.com/@komunitasprofesi8639",children:(0,a.jsx)(i.V2E,{className:"w-[20px] h-[20px] max-xs:w-[30px] max-xs:h-[15px] m-3"})})]})]})]})})}var d=r(2265),u=r(1552);function m(e){let{params:t}=e,[r,s]=(0,d.useState)(null),[i,n]=(0,d.useState)(!0);return(0,d.useEffect)(()=>{fetch("/api/admin/activity/".concat(t.id)).then(e=>e.json()).then(e=>{s(e),n(!1)}).catch(e=>{console.error("Error fetching data:",e)})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{}),i?(0,a.jsx)(u.Z,{}):(0,a.jsxs)("section",{className:"flex flex-col mt-[15vh]",children:[(0,a.jsx)("h1",{className:"m-3 text-3xl font-bold mt-[50px] self-center",children:null==r?void 0:r.title}),(0,a.jsx)("div",{className:"w-[90vw] self-center  items-center flex overflow-hidden justify-center",children:(0,a.jsx)("img",{src:null==r?void 0:r.image,className:"self-center"})}),(0,a.jsx)("div",{className:"max-w-[90vw] my-5 self-center",children:(0,a.jsx)("p",{className:"whitespace-pre-wrap text-justify",children:null==r?void 0:r.details})})]}),(0,a.jsx)(f,{})]})}},8465:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var a=r(7437),l=r(1396),s=r.n(l),i=r(4033),n=r(2265),c=r(6691),o=r.n(c),x=r(7543),f=r(2749),d=r(3560);function u(){var e,t;let r=(0,i.usePathname)(),{data:l,status:c}=(0,f.useSession)(),[u,m]=(0,n.useState)("/"),[h,p]=(0,n.useState)(!1),[g,w]=(0,n.useState)(0);return((0,n.useEffect)(()=>{p(!1),m(r)},[r]),(0,n.useEffect)(()=>{let e=()=>{let e=window.scrollY;w(Math.min(e/100,1))};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),"authenticated"===c)?(0,a.jsxs)("navbar",{className:"fixed top-0 w-full h-auto flex items-center lg:justify-center px-8 md:px-12 z-[300] text-primary font-montserrat font-thin shadow-black justify-between max-w-screen",style:{backgroundColor:"rgba(235,235,235, ".concat(g+.5,")")},children:[(0,a.jsxs)("div",{className:"hidden lg:flex justify-end gap-[50px] w-[50%] text-[24px] mx-[20px]",children:[(0,a.jsx)(s(),{href:"/",className:"flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 "+("/"==u?"after:w-full":"after:w-0 hover:bg-primary hover:text-white"),children:"Home"}),(0,a.jsx)(s(),{href:"/activity",className:"flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 "+("/activity"==u?"after:w-full":"after:w-0 hover:bg-primary hover:text-white"),children:"Activity"})]}),(0,a.jsx)(s(),{href:"/",className:"flex lg:items-center gap-[10px] bg-secondary m-3 items-start",children:(0,a.jsx)(o(),{src:x.default,width:600,height:600,className:"lg:w-[70px] w-[50px]",alt:"Logo"})}),(0,a.jsx)("div",{className:"hidden lg:flex gap-[50px] w-[50%] text-[24px] mx-[20px]",children:(0,a.jsx)(s(),{href:"/aboutUs",className:"flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 "+("/aboutUs"==u?"after:w-full":"after:w-0 hover:bg-primary hover:text-white"),children:"About Us"})}),(0,a.jsxs)("div",{className:"hidden absolute lg:flex right-0 text-[24px] mx-[20px] items-center",children:[(0,a.jsxs)("div",{className:"flex items-center mx-3",children:[(0,a.jsx)(s(),{href:"/user",children:(0,a.jsx)(d.Nhi,{size:50,title:"dashboard",className:"mx-0 hover:bg-primary hover:text-white p-2 rounded-full",alt:"".concat(null==l?void 0:null===(e=l.user)||void 0===e?void 0:e.name)})}),(0,a.jsxs)("div",{className:"italic",children:["( ",null==l?void 0:null===(t=l.user)||void 0===t?void 0:t.name," )"]})]}),(0,a.jsx)(s(),{href:"/",className:"flex flex-col after:h-[2px] after:duration-300 border-2 border-primary px-4 py-2 hover:text-white hover:bg-primary",onClick:()=>(0,f.signOut)(),children:"Sign Out"})]}),(0,a.jsxs)("div",{className:"relative lg:hidden",children:[(0,a.jsxs)("div",{className:"flex lg:hidden flex-col items-center justify-evenly aspect-square cursor-pointer",onClick:()=>p(!h),children:[(0,a.jsx)("div",{className:"w-[25px] duration-300 min-h-[3px] bg-secondary "+(h?"!w-0":"w-full")}),(0,a.jsx)("div",{className:"w-[25px] duration-300 h-[3px] bg-secondary "+(h?"rotate-45":"")}),(0,a.jsx)("div",{className:"w-[25px] duration-300 h-[3px] bg-secondary absolute "+(h?"-rotate-45":"")}),(0,a.jsx)("div",{className:"w-[25px] duration-300 h-[3px] bg-secondary "+(h?"!w-0":"w-full")})]}),(0,a.jsxs)("div",{className:"absolute lg:hidden flex flex-col items-center gap-3 duration-300 font-bold top-[calc(100%+40px)] right-0 bg-primary/90 text-tertiary outline outline-neutral-100 outline-1 px-8 py-5 rounded-[9px] z-[1000]"+(h?" translate-x-0":" translate-x-[200%]"),children:[(0,a.jsx)(s(),{href:"/",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 "+("/"==u?"after:w-full":"after:w-0"),children:"Home"}),(0,a.jsx)(s(),{href:"/activity",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 "+("/dokumentasi"==u?"after:w-full":"after:w-0"),children:"Activity"}),(0,a.jsx)(s(),{href:"/aboutUs",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max "+("/agenda"==u?"after:w-full":"after:w-0"),children:"About Us"}),(0,a.jsx)(s(),{href:"/user",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max "+("/agenda"==u?"after:w-full":"after:w-0"),children:"Dashboard"}),(0,a.jsx)(s(),{href:"/",onClick:()=>(0,f.signOut)(),className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max "+("/agenda"==u?"after:w-full":"after:w-0"),children:"Sign Out"})]})]})]}):(0,a.jsxs)("navbar",{className:"fixed top-0 w-full h-auto flex items-center lg:justify-center px-8 md:px-12 z-[300] text-primary font-montserrat font-thin shadow-black justify-between max-w-screen",style:{backgroundColor:"rgba(235,235,235, ".concat(g+.5,")")},children:[(0,a.jsxs)("div",{className:"hidden lg:flex justify-end gap-[50px] w-[50%] text-[24px] mx-[20px]",children:[(0,a.jsx)(s(),{href:"/",className:"flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 "+("/"==u?"after:w-full":"after:w-0 hover:bg-primary hover:text-white"),children:"Home"}),(0,a.jsx)(s(),{href:"/activity",className:"flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 "+("/activity"==u?"after:w-full":"after:w-0 hover:bg-primary hover:text-white"),children:"Activity"})]}),(0,a.jsx)(s(),{href:"/",className:"flex lg:items-center gap-[10px] bg-secondary m-3 items-start",children:(0,a.jsx)(o(),{src:x.default,width:600,height:600,className:"lg:w-[70px] w-[50px]",alt:"Logo"})}),(0,a.jsx)("div",{className:"hidden lg:flex gap-[50px] w-[50%] text-[24px] mx-[20px]",children:(0,a.jsx)(s(),{href:"/aboutUs",className:"flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 "+("/aboutUs"==u?"after:w-full":"after:w-0 hover:bg-primary hover:text-white"),children:"About Us"})}),(0,a.jsx)("div",{className:"hidden absolute lg:flex gap-[50px] right-0 text-[24px] mx-[20px] hover:bg-primary",children:(0,a.jsx)(s(),{href:"/login",className:"flex flex-col after:h-[2px] after:duration-300 border-2 border-primary px-4 py-2 hover:text-white",children:"Sign In"})}),(0,a.jsxs)("div",{className:"relative lg:hidden",children:[(0,a.jsxs)("div",{className:"flex lg:hidden flex-col items-center justify-evenly aspect-square cursor-pointer",onClick:()=>p(!h),children:[(0,a.jsx)("div",{className:"w-[25px] duration-300 min-h-[3px] bg-secondary "+(h?"!w-0":"w-full")}),(0,a.jsx)("div",{className:"w-[25px] duration-300 h-[3px] bg-secondary "+(h?"rotate-45":"")}),(0,a.jsx)("div",{className:"w-[25px] duration-300 h-[3px] bg-secondary absolute "+(h?"-rotate-45":"")}),(0,a.jsx)("div",{className:"w-[25px] duration-300 h-[3px] bg-secondary "+(h?"!w-0":"w-full")})]}),(0,a.jsxs)("div",{className:"absolute lg:hidden flex flex-col items-center gap-3 duration-300 font-bold top-[calc(100%+40px)] right-0 bg-primary/90 text-tertiary outline outline-neutral-100 outline-1 px-8 py-5 rounded-[9px] z-[1000]"+(h?" translate-x-0":" translate-x-[200%]"),children:[(0,a.jsx)(s(),{href:"/",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 "+("/"==u?"after:w-full":"after:w-0"),children:"Home"}),(0,a.jsx)(s(),{href:"/activity",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 "+("/activity"==u?"after:w-full":"after:w-0"),children:"Activity"}),(0,a.jsx)(s(),{href:"/aboutUs",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max "+("/AboutUs"==u?"after:w-full":"after:w-0"),children:"About Us"}),(0,a.jsx)(s(),{href:"/login",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max "+("/login"==u?"after:w-full":"after:w-0"),children:"Sign In"})]})]})]})}},1552:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var a=r(7437);function l(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 bg-white z-[900] flex justify-center items-center",children:(0,a.jsx)("div",{className:"spinner"})})})}},7543:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/Logo.4ebef769.png",height:600,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXG0fFm4jnycZVDIs62xd2iulYETGQStAAAAB3RSTlMACzYYgSo/vZW4bwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAClJREFUeJxjYEACjIwQmpmJiRnMZ2VhYQWJMTKxsDCBJZnZIFIIxRAAAAjnAD8v98OMAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},6691:function(e,t,r){e.exports=r(1295)},1396:function(e,t,r){e.exports=r(6685)},4033:function(e,t,r){e.exports=r(8165)},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var a=r(2265),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=a.createContext&&a.createContext(l),i=function(){return(i=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},n=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};function c(e){return function(t){return a.createElement(o,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return a.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var r,l=e.attr,s=e.size,c=e.title,o=n(e,["attr","size","title"]),x=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,o,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==s?a.createElement(s.Consumer,null,function(e){return t(e)}):t(l)}}},function(e){e.O(0,[2420,5520,6685,2749,3222,2971,596,1744],function(){return e(e.s=8364)}),_N_E=e.O()}]);
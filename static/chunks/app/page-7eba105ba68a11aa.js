(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{723:function(e,t,a){Promise.resolve().then(a.t.bind(a,6685,23)),Promise.resolve().then(a.bind(a,7409)),Promise.resolve().then(a.bind(a,8465)),Promise.resolve().then(a.t.bind(a,3222,23)),Promise.resolve().then(a.bind(a,7543))},7409:function(e,t,a){"use strict";a.r(t),a.d(t,{Card:function(){return f},default:function(){return x}});var r=a(7437),l=a(8278);a(7021),a(1773),a(6054);var s=a(7062),i=a(2265),n=a(1396),c=a.n(n);function x(){let[e,t]=(0,i.useState)([]),[a,n]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{fetch("/api/admin/activity/swiper").then(e=>e.json()).then(e=>{t(e.activities),n(!1)}).catch(e=>{console.error("Error fetching data:",e)})},[]),(0,r.jsx)("div",{className:"w-[80vw] h-[20vh]",children:a?(0,r.jsx)("div",{className:"bg-tertiary h-[20vh] flex items-center",children:(0,r.jsx)("div",{className:"z-[900] flex justify-center items-center w-full",children:(0,r.jsx)("div",{className:"spinner"})})}):0===e.length?(0,r.jsx)("div",{className:"bg-tertiary h-[20vh] flex items-center justify-center text-white",children:"No news posted yet."}):(0,r.jsx)(l.tq,{spaceBetween:0,centeredSlides:!0,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{clickable:!0},modules:[s.pt,s.tl,s.W_],className:"mySwiper",children:e.map((e,t)=>(0,r.jsx)(l.o5,{children:(0,r.jsx)(f,{data:e})},t))})})}function f(e){var t;return console.log(e),(0,r.jsx)(c(),{href:"/activity/".concat(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t._id),children:(0,r.jsxs)("div",{className:"bg-red-600 h-[20vh] flex items-center",children:[(0,r.jsx)("img",{src:e.data.image,className:"w-full"}),(0,r.jsx)("div",{className:"absolute text-white font-poppins p-3 self-end my-2 bg-gradient-to-r from-black/25",children:e.data.title})]})})}},8465:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var r=a(7437),l=a(1396),s=a.n(l),i=a(4033),n=a(2265),c=a(6691),x=a.n(c),f=a(7543),o=a(2749),d=a(3560);function h(){var e,t;let a=(0,i.usePathname)(),{data:l,status:c}=(0,o.useSession)(),[h,u]=(0,n.useState)("/"),[m,p]=(0,n.useState)(!1),[g,w]=(0,n.useState)(0);return((0,n.useEffect)(()=>{p(!1),u(a)},[a]),(0,n.useEffect)(()=>{let e=()=>{let e=window.scrollY;w(Math.min(e/100,1))};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),"authenticated"===c)?(0,r.jsxs)("navbar",{className:"fixed top-0 w-full h-auto flex items-center lg:justify-center px-8 md:px-12 z-[300] text-primary font-montserrat font-thin shadow-black justify-between max-w-screen",style:{backgroundColor:"rgba(235,235,235, ".concat(g+.5,")")},children:[(0,r.jsxs)("div",{className:"hidden lg:flex justify-end gap-[50px] w-[50%] text-[24px] mx-[20px]",children:[(0,r.jsx)(s(),{href:"/",className:"flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 "+("/"==h?"after:w-full":"after:w-0 hover:bg-primary hover:text-white"),children:"Home"}),(0,r.jsx)(s(),{href:"/activity",className:"flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 "+("/activity"==h?"after:w-full":"after:w-0 hover:bg-primary hover:text-white"),children:"Activity"})]}),(0,r.jsx)(s(),{href:"/",className:"flex lg:items-center gap-[10px] bg-secondary m-3 items-start",children:(0,r.jsx)(x(),{src:f.default,width:600,height:600,className:"lg:w-[70px] w-[50px]",alt:"Logo"})}),(0,r.jsx)("div",{className:"hidden lg:flex gap-[50px] w-[50%] text-[24px] mx-[20px]",children:(0,r.jsx)(s(),{href:"/aboutUs",className:"flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 "+("/aboutUs"==h?"after:w-full":"after:w-0 hover:bg-primary hover:text-white"),children:"About Us"})}),(0,r.jsxs)("div",{className:"hidden absolute lg:flex right-0 text-[24px] mx-[20px] items-center",children:[(0,r.jsxs)("div",{className:"flex items-center mx-3",children:[(0,r.jsx)(s(),{href:"/user",children:(0,r.jsx)(d.Nhi,{size:50,title:"dashboard",className:"mx-0 hover:bg-primary hover:text-white p-2 rounded-full",alt:"".concat(null==l?void 0:null===(e=l.user)||void 0===e?void 0:e.name)})}),(0,r.jsxs)("div",{className:"italic",children:["( ",null==l?void 0:null===(t=l.user)||void 0===t?void 0:t.name," )"]})]}),(0,r.jsx)(s(),{href:"/",className:"flex flex-col after:h-[2px] after:duration-300 border-2 border-primary px-4 py-2 hover:text-white hover:bg-primary",onClick:()=>(0,o.signOut)(),children:"Sign Out"})]}),(0,r.jsxs)("div",{className:"relative lg:hidden",children:[(0,r.jsxs)("div",{className:"flex lg:hidden flex-col items-center justify-evenly aspect-square cursor-pointer",onClick:()=>p(!m),children:[(0,r.jsx)("div",{className:"w-[25px] duration-300 min-h-[3px] bg-secondary "+(m?"!w-0":"w-full")}),(0,r.jsx)("div",{className:"w-[25px] duration-300 h-[3px] bg-secondary "+(m?"rotate-45":"")}),(0,r.jsx)("div",{className:"w-[25px] duration-300 h-[3px] bg-secondary absolute "+(m?"-rotate-45":"")}),(0,r.jsx)("div",{className:"w-[25px] duration-300 h-[3px] bg-secondary "+(m?"!w-0":"w-full")})]}),(0,r.jsxs)("div",{className:"absolute lg:hidden flex flex-col items-center gap-3 duration-300 font-bold top-[calc(100%+40px)] right-0 bg-primary/90 text-tertiary outline outline-neutral-100 outline-1 px-8 py-5 rounded-[9px] z-[1000]"+(m?" translate-x-0":" translate-x-[200%]"),children:[(0,r.jsx)(s(),{href:"/",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 "+("/"==h?"after:w-full":"after:w-0"),children:"Home"}),(0,r.jsx)(s(),{href:"/activity",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 "+("/dokumentasi"==h?"after:w-full":"after:w-0"),children:"Activity"}),(0,r.jsx)(s(),{href:"/aboutUs",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max "+("/agenda"==h?"after:w-full":"after:w-0"),children:"About Us"}),(0,r.jsx)(s(),{href:"/user",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max "+("/agenda"==h?"after:w-full":"after:w-0"),children:"Dashboard"}),(0,r.jsx)(s(),{href:"/",onClick:()=>(0,o.signOut)(),className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max "+("/agenda"==h?"after:w-full":"after:w-0"),children:"Sign Out"})]})]})]}):(0,r.jsxs)("navbar",{className:"fixed top-0 w-full h-auto flex items-center lg:justify-center px-8 md:px-12 z-[300] text-primary font-montserrat font-thin shadow-black justify-between max-w-screen",style:{backgroundColor:"rgba(235,235,235, ".concat(g+.5,")")},children:[(0,r.jsxs)("div",{className:"hidden lg:flex justify-end gap-[50px] w-[50%] text-[24px] mx-[20px]",children:[(0,r.jsx)(s(),{href:"/",className:"flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 "+("/"==h?"after:w-full":"after:w-0 hover:bg-primary hover:text-white"),children:"Home"}),(0,r.jsx)(s(),{href:"/activity",className:"flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 "+("/activity"==h?"after:w-full":"after:w-0 hover:bg-primary hover:text-white"),children:"Activity"})]}),(0,r.jsx)(s(),{href:"/",className:"flex lg:items-center gap-[10px] bg-secondary m-3 items-start",children:(0,r.jsx)(x(),{src:f.default,width:600,height:600,className:"lg:w-[70px] w-[50px]",alt:"Logo"})}),(0,r.jsx)("div",{className:"hidden lg:flex gap-[50px] w-[50%] text-[24px] mx-[20px]",children:(0,r.jsx)(s(),{href:"/aboutUs",className:"flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 "+("/aboutUs"==h?"after:w-full":"after:w-0 hover:bg-primary hover:text-white"),children:"About Us"})}),(0,r.jsx)("div",{className:"hidden absolute lg:flex gap-[50px] right-0 text-[24px] mx-[20px] hover:bg-primary",children:(0,r.jsx)(s(),{href:"/login",className:"flex flex-col after:h-[2px] after:duration-300 border-2 border-primary px-4 py-2 hover:text-white",children:"Sign In"})}),(0,r.jsxs)("div",{className:"relative lg:hidden",children:[(0,r.jsxs)("div",{className:"flex lg:hidden flex-col items-center justify-evenly aspect-square cursor-pointer",onClick:()=>p(!m),children:[(0,r.jsx)("div",{className:"w-[25px] duration-300 min-h-[3px] bg-secondary "+(m?"!w-0":"w-full")}),(0,r.jsx)("div",{className:"w-[25px] duration-300 h-[3px] bg-secondary "+(m?"rotate-45":"")}),(0,r.jsx)("div",{className:"w-[25px] duration-300 h-[3px] bg-secondary absolute "+(m?"-rotate-45":"")}),(0,r.jsx)("div",{className:"w-[25px] duration-300 h-[3px] bg-secondary "+(m?"!w-0":"w-full")})]}),(0,r.jsxs)("div",{className:"absolute lg:hidden flex flex-col items-center gap-3 duration-300 font-bold top-[calc(100%+40px)] right-0 bg-primary/90 text-tertiary outline outline-neutral-100 outline-1 px-8 py-5 rounded-[9px] z-[1000]"+(m?" translate-x-0":" translate-x-[200%]"),children:[(0,r.jsx)(s(),{href:"/",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 "+("/"==h?"after:w-full":"after:w-0"),children:"Home"}),(0,r.jsx)(s(),{href:"/activity",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 "+("/activity"==h?"after:w-full":"after:w-0"),children:"Activity"}),(0,r.jsx)(s(),{href:"/aboutUs",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max "+("/AboutUs"==h?"after:w-full":"after:w-0"),children:"About Us"}),(0,r.jsx)(s(),{href:"/login",className:"flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max "+("/login"==h?"after:w-full":"after:w-0"),children:"Sign In"})]})]})]})}},7543:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/Logo.4ebef769.png",height:600,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXG0fFm4jnycZVDIs62xd2iulYETGQStAAAAB3RSTlMACzYYgSo/vZW4bwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAClJREFUeJxjYEACjIwQmpmJiRnMZ2VhYQWJMTKxsDCBJZnZIFIIxRAAAAjnAD8v98OMAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},4033:function(e,t,a){e.exports=a(8165)}},function(e){e.O(0,[5520,6685,2749,3222,1207,2971,596,1744],function(){return e(e.s=723)}),_N_E=e.O()}]);
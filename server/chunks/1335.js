exports.id = 1335;
exports.ids = [1335];
exports.modules = {

/***/ 26453:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 11832));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 73380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61930))

/***/ }),

/***/ 11832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_Logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61930);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34025);
/* __next_internal_client_entry_do_not_use__ default auto */ 







function Navbar() {
    const { data, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const isAuth = status === "authenticated";
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const [activePage, setActivePage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setIsMenuOpen(false);
        setActivePage(pathname);
    }, [
        pathname
    ]);
    if (isAuth) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sticky top-0 w-full h-auto flex items-center px-8 md:px-12 z-[300] text-primary font-montserrat font-thin shadow-black justify-between max-w-screen bg-tertiary",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                className: " flex lg:items-center gap-[10px] bg-secondary m-3 items-start self-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: _public_Logo_png__WEBPACK_IMPORTED_MODULE_5__["default"],
                    width: 600,
                    height: 600,
                    className: "lg:w-[70px] w-[50px]",
                    alt: "Logo"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute hidden lg:flex justify-around gap-[90px] w-screen text-[24px] mx-[20px] lg:justify-center ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        className: "flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 " + (activePage == "/" ? "after:w-full" : "after:w-0 hover:bg-primary hover:text-white"),
                        children: "Home"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/activity",
                        className: "flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2  " + (activePage == "/activity" ? "after:w-full" : "after:w-0 hover:bg-primary hover:text-white"),
                        children: "Activity"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/aboutUs",
                        className: "flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2  " + (activePage == "/aboutUs" ? "after:w-full" : "after:w-0 hover:bg-primary hover:text-white"),
                        children: "About Us"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hidden absolute lg:flex justify-between right-0 text-[24px] mx-[20px] items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/user",
                        className: "flex items-center mx-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__/* .VscAccount */ .Nhi, {
                                size: 50,
                                title: "dashboard",
                                className: "mx-0 hover:bg-primary hover:text-white p-2 rounded-full",
                                alt: `${data?.user?.name}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "italic w-[20vh] line-clamp-1",
                                children: data?.user?.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        className: "flex flex-col after:h-[2px] after:duration-300 border-2 border-primary px-4 py-2 hover:text-white hover:bg-primary",
                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signOut)(),
                        children: "Sign Out"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative lg:hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex lg:hidden flex-col items-center justify-evenly aspect-square cursor-pointer",
                        onClick: ()=>setIsMenuOpen(!isMenuOpen),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[25px] duration-300 min-h-[3px] bg-secondary " + (isMenuOpen ? "!w-0" : "w-full")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[25px] duration-300 h-[3px] bg-secondary " + (isMenuOpen ? "rotate-45" : "")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[25px] duration-300 h-[3px] bg-secondary absolute " + (isMenuOpen ? "-rotate-45" : "")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[25px] duration-300 h-[3px] bg-secondary " + (isMenuOpen ? "!w-0" : "w-full")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute lg:hidden flex flex-col items-center gap-3 duration-300 font-bold top-[calc(100%+40px)] right-0 bg-primary/90 text-tertiary outline outline-neutral-100 outline-1 px-8 py-5 rounded-[9px] z-[1000]" + (isMenuOpen ? " translate-x-0" : " translate-x-[200%]"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/",
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 " + (activePage == "/" ? "after:w-full" : "after:w-0"),
                                children: "Home"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/activity",
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 " + (activePage == "/dokumentasi" ? "after:w-full" : "after:w-0"),
                                children: "Activity"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/aboutUs",
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max " + (activePage == "/agenda" ? "after:w-full" : "after:w-0"),
                                children: "About Us"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/user",
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max " + (activePage == "/agenda" ? "after:w-full" : "after:w-0"),
                                children: "Dashboard"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/",
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max " + (activePage == "/agenda" ? "after:w-full" : "after:w-0"),
                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signOut)(),
                                children: "Sign Out"
                            })
                        ]
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sticky top-0 w-full h-auto flex items-center px-8 md:px-12 z-[300] text-primary font-montserrat font-thin shadow-black justify-between max-w-screen bg-tertiary",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                className: " flex lg:items-center gap-[10px] bg-secondary m-3 items-start self-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: _public_Logo_png__WEBPACK_IMPORTED_MODULE_5__["default"],
                    width: 600,
                    height: 600,
                    className: "lg:w-[70px] w-[50px]",
                    alt: "Logo"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute hidden lg:flex justify-around gap-[90px] w-screen text-[24px] mx-[20px] lg:justify-center ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        className: "flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 " + (activePage == "/" ? "after:w-full" : "after:w-0 hover:bg-primary hover:text-white"),
                        children: "Home"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/activity",
                        className: "flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2  " + (activePage == "/activity" ? "after:w-full" : "after:w-0 hover:bg-primary hover:text-white"),
                        children: "Activity"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/aboutUs",
                        className: "flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2  " + (activePage == "/aboutUs" ? "after:w-full" : "after:w-0 hover:bg-primary hover:text-white"),
                        children: "About Us"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden absolute lg:flex gap-[50px] right-0 text-[24px] mx-[20px] hover:bg-primary",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/login",
                    className: "flex flex-col after:h-[2px] after:duration-300 border-2 border-primary px-4 py-2 hover:text-white",
                    children: "Sign In"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative lg:hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex lg:hidden flex-col items-center justify-evenly aspect-square cursor-pointer",
                        onClick: ()=>setIsMenuOpen(!isMenuOpen),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[25px] duration-300 min-h-[3px] bg-secondary " + (isMenuOpen ? "!w-0" : "w-full")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[25px] duration-300 h-[3px] bg-secondary " + (isMenuOpen ? "rotate-45" : "")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[25px] duration-300 h-[3px] bg-secondary absolute " + (isMenuOpen ? "-rotate-45" : "")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[25px] duration-300 h-[3px] bg-secondary " + (isMenuOpen ? "!w-0" : "w-full")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute lg:hidden flex flex-col items-center gap-3 duration-300 font-bold top-[calc(100%+40px)] right-0 bg-primary/90 text-tertiary outline outline-neutral-100 outline-1 px-8 py-5 rounded-[9px] z-[1000]" + (isMenuOpen ? " translate-x-0" : " translate-x-[200%]"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/",
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 " + (activePage == "/" ? "after:w-full" : "after:w-0"),
                                children: "Home"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/activity",
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 " + (activePage == "/dokumentasi" ? "after:w-full" : "after:w-0"),
                                children: "Activity"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/aboutUs",
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max " + (activePage == "/agenda" ? "after:w-full" : "after:w-0"),
                                children: "About Us"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/login",
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max " + (activePage == "/agenda" ? "after:w-full" : "after:w-0"),
                                children: "Sign In"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 64371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PublicLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./public/Logo.png
/* harmony default export */ const Logo = ({"src":"/_next/static/media/Logo.4ebef769.png","height":600,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXG0fFm4jnycZVDIs62xd2iulYETGQStAAAAB3RSTlMACzYYgSo/vZW4bwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAClJREFUeJxjYEACjIwQmpmJiRnMZ2VhYQWJMTKxsDCBJZnZIFIIxRAAAAjnAD8v98OMAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(2215);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/components/footer.js





function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "bg-tertiary max-w-[100vw] p-1",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "md:max-w-[50%] flex flex-row md:mx-[50px] m-2 font-medium",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center flex-col md:items-center md:max-w-[70%] w-[100%] md:text-[15px] text-[10px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Logo,
                            width: 600,
                            height: 600,
                            className: "md:w-[90px] w-[40px] bg-secondary m-3",
                            alt: "Logo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Jalan Sekolah Kencana IV No. TN-7, RT.4/RW.15, Pondok Pinang, Kebayoran Lama, South Jakarta City, Jakarta 12310"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full",
                            children: "Telp     : (021) 7503247"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full",
                            children: [
                                "e-Mail : ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    href: "https://gkipi.org/",
                                    children: "emailGKIPI@gmail.com"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "md:m-5 m-2 w-fit min-w-max font-semibold flex flex-col md:text-[20px] text-[15px] items-center justify-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Follow Us"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    target: "_blank",
                                    href: "https://www.instagram.com/komunitas_profesi/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaInstagram */.Zf_, {
                                        className: "w-[20px] h-[20px] max-xs:w-[30px] max-xs:h-[15px] m-3"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    target: "_blank",
                                    href: "https://twitter.com/gkipiweb",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaTwitter */.fWC, {
                                        className: "w-[20px] h-[20px] max-xs:w-[30px] max-xs:h-[15px] m-3"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    target: "_blank",
                                    href: "https://www.youtube.com/@komunitasprofesi8639",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaYoutube */.V2E, {
                                        className: "w-[20px] h-[20px] max-xs:w-[30px] max-xs:h-[15px] m-3"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/app/components/navbar.js

const proxy = (0,module_proxy.createProxy)(String.raw`D:\kuliah\cuan\frontend-gkpi\src\app\components\navbar.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const navbar = (__default__);
;// CONCATENATED MODULE: ./src/app/(public_route)/layout.js



function PublicLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "overflow-x-hidden max-w-[100vw]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 61930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Logo.4ebef769.png","height":600,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXG0fFm4jnycZVDIs62xd2iulYETGQStAAAAB3RSTlMACzYYgSo/vZW4bwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAClJREFUeJxjYEACjIwQmpmJiRnMZ2VhYQWJMTKxsDCBJZnZIFIIxRAAAAjnAD8v98OMAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ })

};
;
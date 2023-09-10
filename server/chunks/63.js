"use strict";
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 70063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const { data, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const isAuth = status === "authenticated";
    const [activePage, setActivePage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("/");
    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [scrollOpacity, setScrollOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setIsMenuOpen(false);
        setActivePage(pathname);
    }, [
        pathname
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const handleScroll = ()=>{
            const scrollY = window.scrollY;
            const opacity = Math.min(scrollY / 100, 1);
            setScrollOpacity(opacity);
        };
        // Attach the event listener when the component mounts
        window.addEventListener("scroll", handleScroll);
        // Clean up the event listener when the component unmounts
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    if (isAuth) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("navbar", {
        className: `fixed top-0 w-full h-auto flex items-center lg:justify-center px-8 md:px-12 z-[300] text-primary font-montserrat font-thin shadow-black justify-between max-w-screen`,
        style: {
            backgroundColor: `rgba(235,235,235, ${scrollOpacity + 0.5})`
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hidden lg:flex justify-end gap-[50px] w-[50%] text-[24px] mx-[20px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        className: "flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 " + (activePage == "/" ? "after:w-full" : "after:w-0 hover:bg-primary hover:text-white"),
                        children: "Home"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/activity",
                        className: "flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 " + (activePage == "/activity" ? "after:w-full" : "after:w-0 hover:bg-primary hover:text-white"),
                        children: "Activity"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                className: "flex lg:items-center gap-[10px] bg-secondary m-3 items-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: _public_Logo_png__WEBPACK_IMPORTED_MODULE_5__["default"],
                    width: 600,
                    height: 600,
                    className: "lg:w-[70px] w-[50px]",
                    alt: "Logo"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden lg:flex gap-[50px] w-[50%] text-[24px] mx-[20px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/aboutUs",
                    className: "flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 " + (activePage == "/aboutUs" ? "after:w-full" : "after:w-0 hover:bg-primary hover:text-white"),
                    children: "About Us"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hidden absolute lg:flex right-0 text-[24px] mx-[20px] items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center mx-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/user",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__/* .VscAccount */ .Nhi, {
                                    size: 50,
                                    title: "dashboard",
                                    className: "mx-0 hover:bg-primary hover:text-white p-2 rounded-full",
                                    alt: `${data?.user?.name}`
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "italic",
                                children: [
                                    "( ",
                                    data?.user?.name,
                                    " )"
                                ]
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
                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signOut)(),
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max " + (activePage == "/agenda" ? "after:w-full" : "after:w-0"),
                                children: "Sign Out"
                            })
                        ]
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("navbar", {
        className: `fixed top-0 w-full h-auto flex items-center lg:justify-center px-8 md:px-12 z-[300] text-primary font-montserrat font-thin shadow-black justify-between max-w-screen`,
        style: {
            backgroundColor: `rgba(235,235,235, ${scrollOpacity + 0.5})`
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hidden lg:flex justify-end gap-[50px] w-[50%] text-[24px] mx-[20px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        className: "flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 " + (activePage == "/" ? "after:w-full" : "after:w-0 hover:bg-primary hover:text-white"),
                        children: "Home"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/activity",
                        className: "flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 " + (activePage == "/activity" ? "after:w-full" : "after:w-0 hover:bg-primary hover:text-white"),
                        children: "Activity"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                className: "flex lg:items-center gap-[10px] bg-secondary m-3 items-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: _public_Logo_png__WEBPACK_IMPORTED_MODULE_5__["default"],
                    width: 600,
                    height: 600,
                    className: "lg:w-[70px] w-[50px]",
                    alt: "Logo"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden lg:flex gap-[50px] w-[50%] text-[24px] mx-[20px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/aboutUs",
                    className: "flex flex-col after:bg-primary after:h-[2px] after:duration-300 px-3 py-2 " + (activePage == "/aboutUs" ? "after:w-full" : "after:w-0 hover:bg-primary hover:text-white"),
                    children: "About Us"
                })
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
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] after:duration-300 " + (activePage == "/activity" ? "after:w-full" : "after:w-0"),
                                children: "Activity"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/aboutUs",
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max " + (activePage == "/AboutUs" ? "after:w-full" : "after:w-0"),
                                children: "About Us"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/login",
                                className: "flex flex-col after:bg-neutral-100 justify-center items-center after:h-[2px] duration-200 w-max " + (activePage == "/login" ? "after:w-full" : "after:w-0"),
                                children: "Sign In"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;
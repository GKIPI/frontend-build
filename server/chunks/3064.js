exports.id = 3064;
exports.ids = [3064];
exports.modules = {

/***/ 83336:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 80774, 23))

/***/ }),

/***/ 79175:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5621))

/***/ }),

/***/ 80774:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interop_require_default = __webpack_require__(82147);
const _jsxruntime = __webpack_require__(56786);
const _link = /*#__PURE__*/ _interop_require_default._(__webpack_require__(11440));
const _image = /*#__PURE__*/ _interop_require_default._(__webpack_require__(52451));
const _Logopng = /*#__PURE__*/ _interop_require_default._(__webpack_require__(61930));
const _react = __webpack_require__(18038);
const Aside = ()=>{
    const [activeIndex, setActiveIndex] = (0, _react.useState)(0);
    const [requestsCount, setRequestsCount] = (0, _react.useState)({
        seeker: 0,
        vacancies: 0,
        catalog: 0
    });
    const getCount = async ()=>{
        const res = await fetch("/api/admin/requests");
        const data = await res.json();
        setRequestsCount({
            seeker: data.len[0],
            vacancies: data.len[1],
            catalog: data.len[2]
        });
    };
    (0, _react.useEffect)(()=>{
        const page = window.location.pathname;
        if (page === "/admin/dashboard") {
            setActiveIndex(0);
        } else if (page === "/admin/dashboard/JobSeeker") {
            setActiveIndex(1);
        } else if (page === "/admin/dashboard/JobVacancies") {
            setActiveIndex(2);
        } else if (page === "/admin/dashboard/Catalogs") {
            setActiveIndex(3);
        } else if (page === "/admin/dashboard/News") {
            setActiveIndex(4);
        } else if (page === "/admin/dashboard/Users") {
            setActiveIndex(5);
        }
    }, []);
    (0, _react.useEffect)(()=>{
        getCount();
    }, []);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        className: "min-h-screen w-1/4 bg-zinc-200",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "h-[30%] w-full flex justify-center items-center",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
                    href: "/",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_image.default, {
                        src: _Logopng.default,
                        alt: "Logo",
                        priority: true,
                        className: "w-28 bg-secondary"
                    })
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "flex flex-col justify-between h-[32rem]",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                        className: "px-6 font-montserrat text-lg space-y-4",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                children: activeIndex === 0 ? /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                                    className: "text-[#B68D40] font-semibold",
                                    children: "Home"
                                }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
                                    href: "/admin/dashboard",
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                                        onClick: ()=>{
                                            setActiveIndex(0);
                                        },
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                children: activeIndex === 4 ? /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                                    className: "text-[#B68D40] font-semibold",
                                    children: "News"
                                }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
                                    href: "/admin/dashboard/News",
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                                        onClick: ()=>{
                                            setActiveIndex(4);
                                        },
                                        children: "News"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                children: activeIndex === 5 ? /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                                    className: "text-[#B68D40] font-semibold",
                                    children: "Users"
                                }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
                                    href: "/admin/dashboard/Users",
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                                        onClick: ()=>{
                                            setActiveIndex(5);
                                        },
                                        children: "Users"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                                        className: "font-bold",
                                        children: "Job Opportunities"
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                        className: "flex flex-col pl-4 items-start",
                                        children: [
                                            activeIndex === 1 ? /*#__PURE__*/ (0, _jsxruntime.jsxs)("button", {
                                                className: "text-[#B68D40] font-semibold",
                                                children: [
                                                    "Job Seeker (",
                                                    requestsCount.seeker,
                                                    ")"
                                                ]
                                            }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
                                                href: "/admin/dashboard/JobSeeker",
                                                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("button", {
                                                    onClick: ()=>{
                                                        setActiveIndex(1);
                                                    },
                                                    children: [
                                                        "Job Seeker (",
                                                        requestsCount.seeker,
                                                        ")"
                                                    ]
                                                })
                                            }),
                                            activeIndex === 2 ? /*#__PURE__*/ (0, _jsxruntime.jsxs)("button", {
                                                className: "text-[#B68D40] font-semibold",
                                                children: [
                                                    "Job Vacancies (",
                                                    requestsCount.vacancies,
                                                    ")"
                                                ]
                                            }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
                                                href: "/admin/dashboard/JobVacancies",
                                                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("button", {
                                                    onClick: ()=>{
                                                        setActiveIndex(2);
                                                    },
                                                    children: [
                                                        "Job Vacancies (",
                                                        requestsCount.vacancies,
                                                        ")"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                                        className: "font-bold",
                                        children: "Online Catalog"
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                        className: "flex justify-start items-center",
                                        children: activeIndex === 3 ? /*#__PURE__*/ (0, _jsxruntime.jsxs)("button", {
                                            className: "text-[#B68D40] pl-4 font-semibold",
                                            children: [
                                                "Catalog (",
                                                requestsCount.catalog,
                                                ")"
                                            ]
                                        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
                                            href: "/admin/dashboard/Catalogs",
                                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("button", {
                                                className: "pl-4",
                                                onClick: ()=>{
                                                    setActiveIndex(3);
                                                },
                                                children: [
                                                    "Catalog (",
                                                    requestsCount.catalog,
                                                    ")"
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                        className: "px-6 space-y-8",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
                                href: "/",
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                                    className: "font-montserrat text-2xl px-5 py-2.5 hover:bg-zinc-800 transition-colors duration-200 hover:text-slate-200 rounded-md",
                                    children: "Exit Dashboard"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                className: "border-b border-zinc-400"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                className: "font-montserrat text-sm text-zinc-400",
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    children: "e-Mail : admin@komunitasprofesigkipi.org"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
module.exports = Aside;


/***/ }),

/***/ 5621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function AdminLayout({ children }) {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [sessionChecked, setSessionChecked] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const checkSession = async ()=>{
            const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
            if (!session) {
                router.push("/login");
            } else {
                const { role } = session.user;
                if (role !== "admin") {
                    router.push("/");
                }
            }
            setSessionChecked(true);
        };
        checkSession();
    }, []);
    if (!sessionChecked) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 2009:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("D:\\kuliah\\cuan\\frontend-gkpi\\src\\app\\(admin_route)\\admin\\dashboard\\Aside.jsx");


/***/ }),

/***/ 55834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminDashboardLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2009);
/* harmony import */ var _Aside__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Aside__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18976);



function AdminDashboardLayout({ children }) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const currentDate = new Date().toLocaleDateString("en-UK", options);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen w-full flex flex-row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_Aside__WEBPACK_IMPORTED_MODULE_1___default()), {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "w-[75%] py-4 px-2 md:px-8 flex flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-end gap-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "gap-2 items-center font-montserrat text-zinc-800",
                                children: currentDate
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "flex gap-2 items-center font-montserrat italic text-zinc-800",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__/* .BsPersonCircle */ ._Tb, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "GKI Pondok Indah (Admin)"
                                    })
                                ]
                            })
                        ]
                    }),
                    children
                ]
            })
        ]
    });
}


/***/ }),

/***/ 95734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlurredOnLoad)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function BlurredOnLoad() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "absolute top-0 left-0 right-0 bottom-0 bg-white z-[900] flex justify-center items-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "spinner"
            })
        })
    });
}


/***/ }),

/***/ 62248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\kuliah\cuan\frontend-gkpi\src\app\(admin_route)\layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

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
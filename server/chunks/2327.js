"use strict";
exports.id = 2327;
exports.ids = [2327];
exports.modules = {

/***/ 21659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRequestedData: () => (/* binding */ getRequestedData),
/* harmony export */   requestCounter: () => (/* binding */ requestCounter)
/* harmony export */ });
const requestCounter = (requests)=>{
    const requestCount = requests.filter((request)=>!request.approval);
    return requestCount.length;
};
const getRequestedData = (requests)=>{
    const requestCount = requests.filter((request)=>!request.approval);
    return requestCount;
};


/***/ }),

/***/ 7100:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _jsxruntime = __webpack_require__(56786);
const _navigation = __webpack_require__(57114);
const ConfirmDeleteModal = ({ isOpen, onClose, endpoint, index })=>{
    if (!isOpen) return null;
    const router = (0, _navigation.useRouter)();
    const onDelete = async ()=>{
        try {
            const res = await fetch(`/api/${endpoint}/${index}`, {
                method: "DELETE"
            });
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };
    const handleDelete = ()=>{
        onDelete();
        onClose();
    };
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: "fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: "bg-slate-50 font-montserrat w-2/5 justify-between flex flex-col min-h-[16rem] shadow-lg py-10 rounded-lg px-5",
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                    className: "text-center font-bold text-2xl",
                    children: "Delete Items?"
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: "flex gap-5 justify-end",
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                            onClick: onClose,
                            className: " hover:bg-slate-200 transition-colors px-5 py-2.5 ",
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                            onClick: handleDelete,
                            className: "bg-zinc-800 text-slate-200 px-5 py-2.5 hover:outline hover:outline-2 hover:outline-zinc-800 hover:text-zinc-800 hover:bg-transparent transition-colors ",
                            children: "Delete"
                        })
                    ]
                })
            ]
        })
    });
};
module.exports = ConfirmDeleteModal;


/***/ })

};
;
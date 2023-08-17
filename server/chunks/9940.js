"use strict";
exports.id = 9940;
exports.ids = [9940];
exports.modules = {

/***/ 20594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ convertImageToBase64)
/* harmony export */ });
function convertImageToBase64(fileInput, callback) {
    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (event)=>{
            const base64Image = event.target.result;
            callback(base64Image);
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}


/***/ }),

/***/ 5284:
/***/ ((module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ default cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return DisclaimerModal;
    }
}));
const _jsxruntime = __webpack_require__(56786);
const _fi = __webpack_require__(95105);
function DisclaimerModal({ isOpen, setIsOpenClose, handlesubmit }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: isOpen ? /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            className: "fixed inset-0 flex items-center justify-center z-50 bg-slate-800/25 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "bg-slate-50 w-[80vw] md:w-[50%] max-h-[80vh] shadow-lg flex flex-col gap-8 rounded-lg px-5 py-5 font-montserrat",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "flex flex-row justify-end items-center",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                            onClick: ()=>{
                                setIsOpenClose(false);
                            },
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_fi.FiX, {
                                size: 20
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                        className: " flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                                className: "text-center text-3xl font-bold font-montserrat",
                                children: "Disclaimer"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)("ol", {
                                className: "list-decimal pl-6 text-justify flex flex-col  max-h-[55vh] overflow-auto gap-3",
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("li", {
                                        children: "Web ini merupakan fasilitator penjual - pembeli dan pemberi kerja - pencari kerja untuk dapat berkomunikasi dan transaksi."
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("li", {
                                        children: "Web ini tidak bertanggung jawab terhadap kualitas dan materi produk yang disampaikan penjual bilamana tidak sesuai dengan harapan pembeli."
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("li", {
                                        children: "Web ini tidak bertangung jawab baik atas kandidat pencari kerja maupun perorangan atau instasi pemberi kerja."
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("li", {
                                        children: "Tidak ada transaksi dilakukan web ini dan pengguna informasi web tidak dipungut biaya."
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("li", {
                                        children: "Komunikasi dan transaksi dapat dilakukan dengan menghubungi langsung kepada pihak terkait."
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("li", {
                                        children: "Administrator mempunyai kewenangan untuk menverifikasi produk, kandidat dan iklan pemberi kerja sebelum diatayangkan dan bahkan mengeluarkan atau menghapus dari web."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                            onClick: ()=>{
                                handlesubmit();
                            },
                            className: " px-4 py-1 bg-zinc-800 text-slate-200 font-montserrat text-xl hover:outline hover:outline-2 hover:bg-transparent hover:outline-zinc-800 hover:text-zinc-800 transition-colors",
                            children: "Setuju"
                        })
                    })
                ]
            })
        }) : null
    });
}
;
module.exports = DisclaimerModal;


/***/ })

};
;
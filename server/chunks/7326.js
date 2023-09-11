"use strict";
exports.id = 7326;
exports.ids = [7326];
exports.modules = {

/***/ 27326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// Import the Mongoose model and schema


const seekerSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    user: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    skills: [
        {
            type: String,
            required: false
        }
    ],
    tag: [
        {
            type: String,
            required: false
        }
    ],
    education: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    headshot: {
        type: String,
        required: false
    },
    approval: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});
const SeekerModel = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Seeker || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Seeker", seekerSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeekerModel);


/***/ })

};
;
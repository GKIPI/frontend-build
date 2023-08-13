"use strict";
exports.id = 5589;
exports.ids = [5589];
exports.modules = {

/***/ 65634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadImage: () => (/* binding */ downloadImage),
/* harmony export */   parseBlobToURL: () => (/* binding */ parseBlobToURL)
/* harmony export */ });
const downloadImage = (imgBlob, title)=>{
    const byteString = atob(imgBlob.split(",")[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for(let i = 0; i < byteString.length; i++){
        uint8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([
        arrayBuffer
    ], {
        type: "image/jpeg"
    });
    const imageUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const parseBlobToURL = (imgBlob)=>{
    if (!imgBlob) return null;
    const byteString = atob(imgBlob.split(",")[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for(let i = 0; i < byteString.length; i++){
        uint8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([
        arrayBuffer
    ], {
        type: "image/jpeg"
    });
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
};


/***/ }),

/***/ 61930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Logo.4ebef769.png","height":600,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXG0fFm4jnycZVDIs62xd2iulYETGQStAAAAB3RSTlMACzYYgSo/vZW4bwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAClJREFUeJxjYEACjIwQmpmJiRnMZ2VhYQWJMTKxsDCBJZnZIFIIxRAAAAjnAD8v98OMAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ })

};
;
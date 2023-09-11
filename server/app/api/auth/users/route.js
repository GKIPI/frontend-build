"use strict";
(() => {
var exports = {};
exports.id = 1585;
exports.ids = [1585];
exports.modules = {

/***/ 67096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 23018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/auth/users/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./models/userModels.js
var userModels = __webpack_require__(28197);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./lib/db.js
var db = __webpack_require__(53461);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(67096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
;// CONCATENATED MODULE: ./src/app/api/auth/users/route.js




const POST = async (req)=>{
    const body = await req.json();
    try {
        await (0,db/* default */.Z)();
    } catch (error) {
        console.error("Error connecting to the database:", error);
        return next_response/* default */.Z.json({
            error: "Failed to connect to the database"
        }, {
            status: 500
        });
    }
    const oldUser = await userModels/* default */.Z.findOne({
        email: body.email
    });
    console.log("no old user");
    if (oldUser) {
        return next_response/* default */.Z.json({
            error: "email already in use!"
        }, {
            status: 422
        });
    }
    const salt = await external_bcrypt_default().genSalt(10);
    body.password = await external_bcrypt_default().hash(body.password, salt);
    const user = await userModels/* default */.Z.create({
        ...body
    });
    return next_response/* default */.Z.json({
        user: {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role
        }
    });
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Fusers%2Froute&name=app%2Fapi%2Fauth%2Fusers%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fusers%2Froute.js&appDir=D%3A%5Ckuliah%5Ccuan%5Cfrontend-gkpi%5Csrc%5Capp&appPaths=%2Fapi%2Fauth%2Fusers%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/auth/users/route","pathname":"/api/auth/users","filename":"route","bundlePath":"app/api/auth/users/route"},"resolvedPagePath":"D:\\kuliah\\cuan\\frontend-gkpi\\src\\app\\api\\auth\\users\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/auth/users/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,2561], () => (__webpack_exec__(23018)));
module.exports = __webpack_exports__;

})();
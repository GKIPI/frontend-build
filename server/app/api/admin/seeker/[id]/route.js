"use strict";
(() => {
var exports = {};
exports.id = 4642;
exports.ids = [4642];
exports.modules = {

/***/ 67096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 54162:
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

// NAMESPACE OBJECT: ./src/app/api/admin/seeker/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./lib/db.js
var db = __webpack_require__(53461);
// EXTERNAL MODULE: ./models/seekerModels.js
var seekerModels = __webpack_require__(27326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(49861);
// EXTERNAL MODULE: ./src/app/api/auth/[...nextauth]/route.js
var route = __webpack_require__(23394);
;// CONCATENATED MODULE: ./src/app/api/admin/seeker/[id]/route.js
// Import the necessary dependencies and the SeekerModel





// Handler for the GET request
async function GET(req, params) {
    const session = await (0,next_auth.getServerSession)(route.authOptions);
    if (!session) {
        return next_response/* default */.Z.json({
            error: "not authorized"
        }, {
            status: 401
        });
    }
    const { role } = session.user;
    if (role !== "admin") {
        return next_response/* default */.Z.json({
            error: "not authorized"
        }, {
            status: 401
        });
    }
    try {
        // Connect to the database
        await (0,db/* default */.Z)();
        const { id } = await params.params;
        // Fetch data from the Mongoose model and send the response
        const seeker = await seekerModels/* default */.Z.findById(id);
        return seeker ? next_response/* default */.Z.json({
            seeker
        }, {
            status: 200
        }) : next_response/* default */.Z.json({
            error: "Seeker not found."
        }, {
            status: 404
        });
    } catch (error) {
        console.error(error);
        return next_response/* default */.Z.json({
            error: "Failed to fetch data."
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fadmin%2Fseeker%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fadmin%2Fseeker%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fseeker%2F%5Bid%5D%2Froute.js&appDir=D%3A%5Ckuliah%5Ccuan%5Cfrontend-gkpi%5Csrc%5Capp&appPaths=%2Fapi%2Fadmin%2Fseeker%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/admin/seeker/[id]/route","pathname":"/api/admin/seeker/[id]","filename":"route","bundlePath":"app/api/admin/seeker/[id]/route"},"resolvedPagePath":"D:\\kuliah\\cuan\\frontend-gkpi\\src\\app\\api\\admin\\seeker\\[id]\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/admin/seeker/[id]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,6810,2561,3394,7326], () => (__webpack_exec__(54162)));
module.exports = __webpack_exports__;

})();
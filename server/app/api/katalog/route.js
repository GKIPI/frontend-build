"use strict";
(() => {
var exports = {};
exports.id = 2521;
exports.ids = [2521];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 85177:
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

// NAMESPACE OBJECT: ./src/app/api/katalog/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./lib/db.js
var db = __webpack_require__(53461);
// EXTERNAL MODULE: ./models/katalogModels.js
var katalogModels = __webpack_require__(62034);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./src/app/api/katalog/route.js
// Import the necessary dependencies and the VacanciesModel



// Handler for the GET request
async function GET(req) {
    try {
        // Connect to the database
        await (0,db/* default */.Z)();
        // Fetch data from the Mongoose model and send the response
        const katalogs = await katalogModels/* default */.Z.find({
            approval: true
        }).sort({
            createdAt: "desc"
        });
        return next_response/* default */.Z.json({
            katalogs
        }, {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return next_response/* default */.Z.json({
            error: "Failed to fetch data."
        }, {
            status: 500
        });
    }
}
// Handler for the POST request
// Handler for the POST request
async function POST(request) {
    try {
        // Connect to the database
        await (0,db/* default */.Z)();
        const { user, image, title, prize, tag, contact, details } = JSON.parse(await request.text());
        // Simple input data validation
        if (!user || !image || !title || !prize || !contact) {
            return next_response/* default */.Z.json({
                error: "Bad request. Missing required fields."
            }, {
                status: 400
            });
        }
        const katalogData = {
            user,
            image,
            title,
            prize,
            contact
        };
        if (tag) {
            katalogData.tag = tag;
        }
        if (details) {
            katalogData.details = details;
        }
        const newKatalog = await katalogModels/* default */.Z.create(katalogData);
        const savedKatalog = await newKatalog.save();
        return next_response/* default */.Z.json(savedKatalog, {
            status: 201
        });
    } catch (error) {
        return next_response/* default */.Z.json({
            error: "Failed to save data."
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fkatalog%2Froute&name=app%2Fapi%2Fkatalog%2Froute&pagePath=private-next-app-dir%2Fapi%2Fkatalog%2Froute.js&appDir=%2Fhome%2Fpetrusariaa%2FGitHub%2FGKIPI-project%2Ffrontend-gkipi%2Fsrc%2Fapp&appPaths=%2Fapi%2Fkatalog%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/katalog/route","pathname":"/api/katalog","filename":"route","bundlePath":"app/api/katalog/route"},"resolvedPagePath":"/home/petrusariaa/GitHub/GKIPI-project/frontend-gkipi/src/app/api/katalog/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/katalog/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,153], () => (__webpack_exec__(85177)));
module.exports = __webpack_exports__;

})();
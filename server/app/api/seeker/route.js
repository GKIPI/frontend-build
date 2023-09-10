"use strict";
(() => {
var exports = {};
exports.id = 3670;
exports.ids = [3670];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 7770:
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

// NAMESPACE OBJECT: ./src/app/api/seeker/route.js
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
// EXTERNAL MODULE: ./models/seekerModels.js
var seekerModels = __webpack_require__(27326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./src/app/api/seeker/route.js
// Import the necessary dependencies and the SeekerModel



// Handler for the GET request
async function GET(req) {
    try {
        // Connect to the database
        await (0,db/* default */.Z)();
        const url = new URL(req.url, `http://${req.headers.host}`);
        const page = url.searchParams.get("page") || 1;
        const perPage = 6;
        const seekers = await seekerModels/* default */.Z.find({
            approval: true
        }).sort({
            createdAt: "desc"
        }).skip((page - 1) * perPage).limit(perPage);
        return next_response/* default */.Z.json({
            seekers
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
async function POST(request) {
    try {
        // Connect to the database
        await (0,db/* default */.Z)();
        const { user, image, jobTitle, skills, tag, name, sex, education, age } = JSON.parse(await request.text());
        // Simple input data validation
        if (!user || !image || !jobTitle || !skills || !name || !sex || !education || !age || !headshot) {
            return next_response/* default */.Z.json({
                error: "Bad request. Missing required fields."
            }, {
                status: 400
            });
        }
        // Create a new document in Mongoose model and send the response
        const seekerData = {
            user,
            image,
            jobTitle,
            skills,
            name,
            sex,
            education,
            age,
            headshot
        };
        if (tag) {
            seekerData.tag = tag;
        }
        if (skills) {
            seekerData.skills = skills;
        }
        const newSeeker = await seekerModels/* default */.Z.create(seekerData);
        const savedSeeker = await newSeeker.save();
        return next_response/* default */.Z.json(savedSeeker, {
            status: 201
        });
    } catch (error) {
        console.log(error);
        return next_response/* default */.Z.json({
            error: "Failed to save data."
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fseeker%2Froute&name=app%2Fapi%2Fseeker%2Froute&pagePath=private-next-app-dir%2Fapi%2Fseeker%2Froute.js&appDir=D%3A%5CGitHub%5Cgkipi-project%5Cfrontend-gkipi%5Csrc%5Capp&appPaths=%2Fapi%2Fseeker%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/seeker/route","pathname":"/api/seeker","filename":"route","bundlePath":"app/api/seeker/route"},"resolvedPagePath":"D:\\GitHub\\gkipi-project\\frontend-gkipi\\src\\app\\api\\seeker\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/seeker/route"

    

/***/ }),

/***/ 53461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const url = process.env.DATABASE_URL;
let connection;
const startDb = async ()=>{
    try {
        if (!connection) {
            connection = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(url);
        }
        return connection;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startDb);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,7326], () => (__webpack_exec__(7770)));
module.exports = __webpack_exports__;

})();
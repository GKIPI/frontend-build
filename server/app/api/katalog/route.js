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

/***/ 45417:
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
async function POST(request) {
    try {
        // Connect to the database
        await (0,db/* default */.Z)();
        const { user, image, title, price, tag, contact, details } = JSON.parse(await request.text());
        // Simple input data validation
        if (!user || !image || !title || !price || !contact) {
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
            price,
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fkatalog%2Froute&name=app%2Fapi%2Fkatalog%2Froute&pagePath=private-next-app-dir%2Fapi%2Fkatalog%2Froute.js&appDir=D%3A%5Ckuliah%5Ccuan%5Cfrontend-gkpi%5Csrc%5Capp&appPaths=%2Fapi%2Fkatalog%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/katalog/route","pathname":"/api/katalog","filename":"route","bundlePath":"app/api/katalog/route"},"resolvedPagePath":"D:\\kuliah\\cuan\\frontend-gkpi\\src\\app\\api\\katalog\\route.js","nextConfigOutput":""}
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


/***/ }),

/***/ 62034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// Import the Mongoose model and schema


const katalogSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    user: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tag: [
        {
            type: String,
            required: false
        }
    ],
    contact: {
        type: String,
        required: true
    },
    details: {
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
const KatalogModel = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Katalog || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Katalog", katalogSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KatalogModel);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335], () => (__webpack_exec__(45417)));
module.exports = __webpack_exports__;

})();
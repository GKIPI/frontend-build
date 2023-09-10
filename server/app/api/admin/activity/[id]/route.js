"use strict";
(() => {
var exports = {};
exports.id = 3230;
exports.ids = [3230];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 64239:
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

// NAMESPACE OBJECT: ./src/app/api/admin/activity/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./lib/db.js
var db = __webpack_require__(53461);
// EXTERNAL MODULE: ./models/activityModels.js
var activityModels = __webpack_require__(43323);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./src/app/api/admin/activity/[id]/route.js
// Import the necessary dependencies and the VacanciesModel



async function GET(request, params) {
    try {
        await (0,db/* default */.Z)();
        ;
        const { id } = await params.params;
        const activity = await activityModels/* default */.Z.findById(id);
        if (!activity) {
            return next_response/* default */.Z.json({
                error: "Activity not found."
            }, {
                status: 404
            });
        }
        return next_response/* default */.Z.json(activity, {
            status: 404
        });
    } catch  {
        return next_response/* default */.Z.json({
            error: "Failed to get data."
        }, {
            status: 500
        });
    }
}
// Handler for the PUT request
async function PUT(request, params) {
    try {
        // Connect to the database
        await (0,db/* default */.Z)();
        // Extract the Activity ID from the request URL
        const { id } = await params.params;
        // Find the Activity in the database based on the ID
        const activityToUpdate = await activityModels/* default */.Z.findById(id);
        // Check if the Activity exists in the database
        if (!activityToUpdate) {
            return next_response/* default */.Z.json({
                error: "Activity not found."
            }, {
                status: 404
            });
        }
        // Parse the updated Activity data from the request body
        const updatedData = JSON.parse(await request.text());
        // Simple input data validation
        if (!updatedData || Object.keys(updatedData).length === 0) {
            return next_response/* default */.Z.json({
                error: "Bad request. Request body is empty."
            }, {
                status: 400
            });
        }
        // Update the activity document with the new data
        if (updatedData.user) {
            activityToUpdate.user = updatedData.user;
        }
        if (updatedData.image) {
            activityToUpdate.image = updatedData.image;
        }
        if (updatedData.title) {
            activityToUpdate.title = updatedData.title;
        }
        if (updatedData.details) {
            activityToUpdate.details = updatedData.details;
        }
        // Save the updated document in the Mongoose model and send the response
        const updatedActivity = await activityToUpdate.save();
        return next_response/* default */.Z.json(updatedActivity, {
            status: 200
        });
    } catch (error) {
        return next_response/* default */.Z.json({
            error: "Failed to update data."
        }, {
            status: 500
        });
    }
}
async function DELETE(request, params) {
    try {
        // Connect to the database
        await (0,db/* default */.Z)();
        // Extract the Activity ID from the request URL
        const { id } = await params.params;
        // Find the Activity in the database based on the ID
        const activityToDelete = await activityModels/* default */.Z.findById(id);
        // Check if the Activity exists in the database
        if (!activityToDelete) {
            return next_response/* default */.Z.json({
                error: "Activity not found."
            }, {
                status: 404
            });
        }
        // Delete the Activity document from the Mongoose model and send the response
        await activityModels/* default */.Z.deleteOne({
            _id: id
        });
        return next_response/* default */.Z.json({
            message: "Activity deleted successfully."
        }, {
            status: 200
        });
    } catch (error) {
        return next_response/* default */.Z.json({
            error: "Failed to delete data."
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fadmin%2Factivity%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fadmin%2Factivity%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Factivity%2F%5Bid%5D%2Froute.js&appDir=D%3A%5CGitHub%5Cgkipi-project%5Cfrontend-gkipi%5Csrc%5Capp&appPaths=%2Fapi%2Fadmin%2Factivity%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/admin/activity/[id]/route","pathname":"/api/admin/activity/[id]","filename":"route","bundlePath":"app/api/admin/activity/[id]/route"},"resolvedPagePath":"D:\\GitHub\\gkipi-project\\frontend-gkipi\\src\\app\\api\\admin\\activity\\[id]\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/admin/activity/[id]/route"

    

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

/***/ 43323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// Import the Mongoose model and schema


const activitySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
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
    details: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});
const ActivityModel = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Activity || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Activity", activitySchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityModel);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335], () => (__webpack_exec__(64239)));
module.exports = __webpack_exports__;

})();
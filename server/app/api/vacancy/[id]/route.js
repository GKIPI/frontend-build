"use strict";
(() => {
var exports = {};
exports.id = 3177;
exports.ids = [3177];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 66976:
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

// NAMESPACE OBJECT: ./src/app/api/vacancy/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./lib/db.js
var db = __webpack_require__(53461);
// EXTERNAL MODULE: ./models/vacancyModels.js
var vacancyModels = __webpack_require__(30955);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./src/app/api/vacancy/[id]/route.js
// Import the necessary dependencies and the VacanciesModel



// Handler for the PUT request
async function PUT(request, params) {
    try {
        // Connect to the database
        await (0,db/* default */.Z)();
        // Extract the vacancy ID from the request URL
        const { id } = await params.params;
        // Find the vacancy in the database based on the ID
        const vacancyToUpdate = await vacancyModels/* default */.Z.findById(id);
        // Check if the vacancy exists in the database
        if (!vacancyToUpdate) {
            return next_response/* default */.Z.json({
                error: "Vacancy not found."
            }, {
                status: 404
            });
        }
        // Parse the updated vacancy data from the request body
        const updatedData = JSON.parse(await request.text());
        // Simple input data validation
        if (!updatedData || Object.keys(updatedData).length === 0) {
            return next_response/* default */.Z.json({
                error: "Bad request. Request body is empty."
            }, {
                status: 400
            });
        }
        // Update the vacancy document with the new data
        if (updatedData.user) {
            vacancyToUpdate.user = updatedData.user;
        }
        if (updatedData.image) {
            vacancyToUpdate.image = updatedData.image;
        }
        if (updatedData.jobTitle) {
            vacancyToUpdate.jobTitle = updatedData.jobTitle;
        }
        if (updatedData.company) {
            vacancyToUpdate.company = updatedData.company;
        }
        if (updatedData.location) {
            vacancyToUpdate.location = updatedData.location;
        }
        if (updatedData.tag) {
            vacancyToUpdate.tag = updatedData.tag;
        }
        if (updatedData.approval) {
            vacancyToUpdate.approval = updatedData.approval;
        }
        // Save the updated document in the Mongoose model and send the response
        const updatedVacancy = await vacancyToUpdate.save();
        return next_response/* default */.Z.json(updatedVacancy, {
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
        // Extract the vacancy ID from the request URL
        const { id } = await params.params;
        // Find the vacancy in the database based on the ID
        const vacancyToDelete = await vacancyModels/* default */.Z.findById(id);
        // Check if the vacancy exists in the database
        if (!vacancyToDelete) {
            return next_response/* default */.Z.json({
                error: "Vacancy not found."
            }, {
                status: 404
            });
        }
        // Delete the vacancy document from the Mongoose model and send the response
        await vacancyModels/* default */.Z.deleteOne({
            _id: id
        });
        return next_response/* default */.Z.json({
            message: "Vacancy deleted successfully."
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fvacancy%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fvacancy%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fvacancy%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Fpetrusariaa%2FGitHub%2FGKIPI-project%2Ffrontend-gkipi%2Fsrc%2Fapp&appPaths=%2Fapi%2Fvacancy%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/vacancy/[id]/route","pathname":"/api/vacancy/[id]","filename":"route","bundlePath":"app/api/vacancy/[id]/route"},"resolvedPagePath":"/home/petrusariaa/GitHub/GKIPI-project/frontend-gkipi/src/app/api/vacancy/[id]/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/vacancy/[id]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,6114], () => (__webpack_exec__(66976)));
module.exports = __webpack_exports__;

})();
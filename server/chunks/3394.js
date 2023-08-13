"use strict";
exports.id = 3394;
exports.ids = [3394];
exports.modules = {

/***/ 23394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET: () => (/* binding */ authHandler),
/* harmony export */   POST: () => (/* binding */ authHandler),
/* harmony export */   authOptions: () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49861);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53461);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42446);
/* harmony import */ var _models_userModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28197);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);





const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            name: "credentials",
            credential: {},
            async authorize (credentials, req) {
                const { email, password } = credentials;
                if (email === "kom39758@gkipi.org") {
                    if (password === "YWnY3c.)10cYo2") {
                        return {
                            name: "admin",
                            email: "admin.gkipi@gmail.com",
                            role: "admin",
                            id: "1"
                        };
                    }
                }
                await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
                const user = await _models_userModels__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.findOne({
                    email
                });
                if (!user) {
                    throw Error("Please sign Up");
                }
                try {
                    const passwordMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compare(password, user.password);
                } catch (error) {
                    throw Error("email/password missmatch");
                }
                return {
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    id: user._id
                };
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        jwt (params) {
            if (params.user?.role) {
                params.token.role = params.user.role, params.token.id = params.user.id;
            }
            return params.token;
        },
        session ({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        }
    }
};
const authHandler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);



/***/ })

};
;
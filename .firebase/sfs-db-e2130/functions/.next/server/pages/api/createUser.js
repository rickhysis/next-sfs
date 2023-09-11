"use strict";
(() => {
var exports = {};
exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 2509:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ 3263:
/***/ ((module) => {

module.exports = import("firebase-admin/app");;

/***/ }),

/***/ 8314:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_firebase_admin_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6151);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2509);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase_admin_config__WEBPACK_IMPORTED_MODULE_0__]);
_lib_firebase_admin_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


(0,_lib_firebase_admin_config__WEBPACK_IMPORTED_MODULE_0__/* .customInitApp */ .S)();
const CreateUser = async (req, res)=>{
    try {
        const { email, phoneNumber, displayName } = req.body;
        const userRecord = await (0,firebase_admin__WEBPACK_IMPORTED_MODULE_1__.auth)().createUser({
            emailVerified: true,
            email,
            phoneNumber,
            displayName
        });
        const user = userRecord.toJSON();
        res.status(200).json({
            sucess: true,
            user
        });
    } catch (error) {
        console.error("Error create users:", error);
        res.status(500).json({
            success: false,
            error: error
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [151], () => (__webpack_exec__(8314)));
module.exports = __webpack_exports__;

})();
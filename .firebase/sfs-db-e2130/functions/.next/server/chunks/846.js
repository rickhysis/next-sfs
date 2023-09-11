"use strict";
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 1846:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _ts_react_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6556);
/* harmony import */ var _ts_react_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ts_react_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const TextField = ({ label, inputProps, isDisabled, isRequired, paddingTop })=>{
    const { field: { onChange, value }, error } = (0,_ts_react_form__WEBPACK_IMPORTED_MODULE_2__.useTsController)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
        isInvalid: !!error,
        pt: paddingTop ?? 1,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                ...inputProps,
                w: "100%",
                disabled: isDisabled !== undefined && "true",
                onChange: (event)=>{
                    onChange(event.target.value);
                },
                value: value ?? "",
                required: isRequired,
                type: label === "Password" || label === "Confirmation Password" ? "password" : "text",
                color: "gray.700",
                _hover: {
                    borderColor: "green.700"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                children: error?.errorMessage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextField);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
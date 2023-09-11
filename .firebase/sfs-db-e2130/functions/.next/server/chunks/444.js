"use strict";
exports.id = 444;
exports.ids = [444];
exports.modules = {

/***/ 1444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_utils_links_BaseLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8422);
/* harmony import */ var _store_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, _components_utils_links_BaseLink__WEBPACK_IMPORTED_MODULE_5__, _store_sidebar__WEBPACK_IMPORTED_MODULE_6__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, _components_utils_links_BaseLink__WEBPACK_IMPORTED_MODULE_5__, _store_sidebar__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const DetailMenu = ({ menu, isActive, hasIcon, isOpenSideBar, deep, showSubMenu })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
        bg: isActive && hasIcon ? "white" : undefined,
        shadow: isActive && hasIcon ? "sm" : undefined,
        py: hasIcon ? "12px" : "8px",
        px: isOpenSideBar ? "20px" : "15px",
        rounded: "15px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                w: "30px",
                ml: `${deep * 15}px`,
                children: hasIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                    w: "30px",
                    h: "30px",
                    rounded: "12px",
                    bg: isActive ? "green.600" : "white",
                    shadow: isActive ? undefined : "sm",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        as: menu.icon,
                        boxSize: "15px",
                        color: isActive ? "white" : "green.600"
                    })
                })
            }),
            isOpenSideBar && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                w: "full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: "12px",
                        fontWeight: 700,
                        color: isActive && hasIcon ? "black" : isActive && !hasIcon ? "green.600" : "gray.600",
                        mr: "auto",
                        children: menu.name
                    }),
                    menu.subMenus?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        as: isActive || showSubMenu ? react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoChevronDown : react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoChevronUp,
                        boxSize: 4
                    })
                ]
            })
        ]
    });
};
const Menu = ({ menu, deep })=>{
    const pathUrl = window.location.pathname;
    const isActive = pathUrl.startsWith(menu.path ?? "");
    const hasIcon = !!menu.icon;
    const isOpenSideBar = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtomValue)(_store_sidebar__WEBPACK_IMPORTED_MODULE_6__/* .openSideBar */ .K);
    const [showSubMenu, setShowSubMenu] = react__WEBPACK_IMPORTED_MODULE_3__.useState(isActive);
    const handleOpenSubMenu = ()=>{
        setShowSubMenu((previous)=>!previous);
    };
    if (!menu.path) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontSize: "12px",
            fontWeight: 700,
            px: isOpenSideBar ? "22px" : "10px",
            py: "6px",
            color: "gray.700",
            children: menu.name
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            menu.subMenus ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                cursor: "pointer",
                onClick: handleOpenSubMenu,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DetailMenu, {
                    menu,
                    isActive,
                    hasIcon,
                    isOpenSideBar,
                    deep,
                    showSubMenu
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_utils_links_BaseLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                href: menu.path,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DetailMenu, {
                    menu,
                    isActive,
                    hasIcon,
                    isOpenSideBar,
                    deep,
                    showSubMenu
                })
            }),
            showSubMenu && menu.subMenus?.map((it, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Menu, {
                    menu: it,
                    deep: deep + 1
                }, `${it.path}-${index}`))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8422:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2210);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const BaseLink = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.chakra)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    // ensure that you're forwarding all of the required props for your case
    shouldForwardProp: (property)=>[
            "href",
            "target",
            "children"
        ].includes(property)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseLink);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
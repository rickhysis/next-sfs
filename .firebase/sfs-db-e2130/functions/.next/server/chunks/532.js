"use strict";
exports.id = 532;
exports.ids = [532];
exports.modules = {

/***/ 5532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_utils_useDesktopMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5384);
/* harmony import */ var _components_layouts_auth_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(235);
/* harmony import */ var _components_layouts_auth_components_TopBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4258);
/* harmony import */ var _store_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1539);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, _hooks_utils_useDesktopMode__WEBPACK_IMPORTED_MODULE_5__, _components_layouts_auth_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__, _components_layouts_auth_components_TopBar__WEBPACK_IMPORTED_MODULE_7__, _store_sidebar__WEBPACK_IMPORTED_MODULE_8__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, _hooks_utils_useDesktopMode__WEBPACK_IMPORTED_MODULE_5__, _components_layouts_auth_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__, _components_layouts_auth_components_TopBar__WEBPACK_IMPORTED_MODULE_7__, _store_sidebar__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const AuthAppLayout = ({ children, pageTitle = " SFS DEMO" })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_9__.useSession)({
        required: true,
        onUnauthenticated () {
            router.push("/login");
        }
    });
    const isOpenSideBar = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtomValue)(_store_sidebar__WEBPACK_IMPORTED_MODULE_8__/* .openSideBar */ .K);
    (0,_hooks_utils_useDesktopMode__WEBPACK_IMPORTED_MODULE_5__/* .useDesktopMode */ .u)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: "100vw",
        h: "100vh",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: pageTitle
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                h: "100vh",
                w: "100vw",
                overflow: "auto",
                bg: "gray.50",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        w: isOpenSideBar ? "255px" : "99px",
                        mx: "23px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_auth_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        w: `calc(100vw - 23px - ${isOpenSideBar ? "255px" : "99px"} - 17px)`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                mx: "17px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_auth_components_TopBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    title: pageTitle,
                                    email: session?.data?.user?.email
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                h: "calc(100vh - 113px)",
                                overflow: "auto",
                                ml: "17px",
                                pr: "17px",
                                mt: "20px",
                                children: children
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthAppLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6482:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1539);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, _store_sidebar__WEBPACK_IMPORTED_MODULE_5__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, _store_sidebar__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const NeedHelp = ()=>{
    const isOpenSideBar = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtomValue)(_store_sidebar__WEBPACK_IMPORTED_MODULE_5__/* .openSideBar */ .K);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    if (isOpenSideBar) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            w: "238px",
            h: "185px",
            rounded: "15px",
            bg: "green.600",
            position: "relative",
            py: "17.47px",
            px: "18px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                    shadow: "sm",
                    bg: "white",
                    w: "38.21px",
                    h: "38.21px",
                    rounded: "12px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoHelpCircle,
                        boxSize: "26.2px",
                        color: "green.600"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    position: "absolute",
                    bottom: "18px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "white",
                            children: "Butuh Bantuan?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontSize: "12px",
                            fontWeight: 400,
                            color: "white",
                            children: "Silahkan cek dokumentasi"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            mt: "10px",
                            rounded: "12px",
                            w: "203px",
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "gray.700",
                            onClick: ()=>router.push("/"),
                            children: "DOKUMENTASI"
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
        "aria-label": "Dokumentasi",
        shadow: "sm",
        bg: "white",
        w: "38.21px",
        h: "38.21px",
        rounded: "12px",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            as: react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoHelpCircle,
            boxSize: "26.2px",
            color: "green.600"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NeedHelp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_auth_components_NeedHelp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6482);
/* harmony import */ var _store_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1539);
/* harmony import */ var _types_menus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_4__, _components_layouts_auth_components_NeedHelp__WEBPACK_IMPORTED_MODULE_5__, _store_sidebar__WEBPACK_IMPORTED_MODULE_6__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_4__, _components_layouts_auth_components_NeedHelp__WEBPACK_IMPORTED_MODULE_5__, _store_sidebar__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const Menu = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(664), __webpack_require__.e(444)]).then(__webpack_require__.bind(__webpack_require__, 1444)), {
    ssr: false
});





const Sidebar = ()=>{
    const isOpenSideBar = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtomValue)(_store_sidebar__WEBPACK_IMPORTED_MODULE_6__/* .openSideBar */ .K);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
        position: "relative",
        h: "100vh",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                w: isOpenSideBar ? "238px" : "61px",
                pt: "22.5px",
                maxH: isOpenSideBar ? "calc(100vh - 300px)" : "calc(100vh - 200px)",
                overflowY: "auto",
                pb: isOpenSideBar ? "25px" : "0px",
                children: _types_menus__WEBPACK_IMPORTED_MODULE_7__/* .sidebarMenus */ ._.map((menu, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Menu, {
                        menu: menu,
                        deep: 0
                    }, `${menu.path}-${index}`))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                position: "absolute",
                bottom: 6,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_auth_components_NeedHelp__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4258:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const TopBar = ({ title, email })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
        h: "113px",
        w: "full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                mr: "auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "green.600",
                    children: title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                gap: 4,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                as: react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoPerson,
                                boxSize: "18px",
                                color: "teal.600"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                fontSize: "15px",
                                fontWeight: 700,
                                color: "teal.600",
                                noOfLines: 1,
                                children: email
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoLogOut,
                        boxSize: "24px",
                        color: "red.600",
                        focusable: true,
                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)()
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useDesktopMode)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2210);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4679);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__, jotai__WEBPACK_IMPORTED_MODULE_1__, _store_main__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__, jotai__WEBPACK_IMPORTED_MODULE_1__, _store_main__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useDesktopMode = ()=>{
    const [desktopMode, setDesktopMode] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_store_main__WEBPACK_IMPORTED_MODULE_3__/* .accessFromDesktop */ .q);
    const [isLargerThanMD] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)("(min-width: 48em)");
    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(()=>{
        setDesktopMode(isLargerThanMD);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isLargerThanMD
    ]);
    return [
        desktopMode,
        setDesktopMode
    ];
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ limit),
/* harmony export */   q: () => (/* binding */ accessFromDesktop)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const accessFromDesktop = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(false);
const limit = 10;


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ openSideBar)
/* harmony export */ });
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai_utils__WEBPACK_IMPORTED_MODULE_0__]);
jotai_utils__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const openSideBar = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_0__.atomWithStorage)("sidebar", true);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ sidebarMenus)
/* harmony export */ });
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_0__);

const sidebarMenus = [
    {
        name: "User",
        icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_0__.IoPerson,
        path: `/users`
    }
];


/***/ })

};
;
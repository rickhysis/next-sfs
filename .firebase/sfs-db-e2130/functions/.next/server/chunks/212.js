"use strict";
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 5069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useClearQueriesOnLogin)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 *  Function for clearing queries from cache when user is in the login page
 *  Assuming that the user is not logged in when he is in the login page
 *  This function is used to prevent the user from querrying data without
 *  being logged in
 */ const useClearQueriesOnLogin = ({ queryClient })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    // remove queries from cache when user is in the login page
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const handleRouteChange = (url)=>{
            if (url.includes("/login")) {
                queryClient.clear();
            }
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        router.events.on("hashChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
            router.events.off("hashChangeComplete", handleRouteChange);
        };
    }, [
        queryClient,
        router.events
    ]);
};


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9063);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_utils_useClearQueriesOnLogin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5069);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1324);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_4__, _theme__WEBPACK_IMPORTED_MODULE_9__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_4__, _theme__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const AppHead = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
            name: "google",
            content: "notranslate"
        })
    });
};
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page)=>page);
    const [queryClient] = react__WEBPACK_IMPORTED_MODULE_7___default().useState(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: false
                }
            }
        }));
    (0,_hooks_utils_useClearQueriesOnLogin__WEBPACK_IMPORTED_MODULE_8__/* .useClearQueriesOnLogin */ .h)({
        queryClient
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppHead, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {
                client: queryClient,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.Hydrate, {
                        state: pageProps.dehydratedState,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_6__.SessionProvider, {
                            session: session,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(jotai__WEBPACK_IMPORTED_MODULE_4__.Provider, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
                                    theme: _theme__WEBPACK_IMPORTED_MODULE_9__/* .theme */ .r,
                                    children: getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    }))
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__.ReactQueryDevtools, {
                        position: "bottom-right"
                    })
                ]
            })
        ]
    });
}
// MyApp.getInitialProps = async (context: AppContext) => {
// 	if (context?.ctx?.res) {
// 		context.ctx.res?.setHeader(
// 			'Cache-Control',
// 			'public, s-maxage=10, stale-while-revalidate=59'
// 		);
// 	}
// 	const appProps = await App.getInitialProps(context);
// 	return {
// 		...appProps,
// 	};
// };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// 1. Import the extendTheme function

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac"
    },
    BluePrimary: {
        100: "#F7FAFC",
        200: "#47ABF7",
        500: "#1572E9"
    },
    GreenPrimary: {
        50: "#F0F8F2",
        100: "#ECFCF3",
        200: "#3FCE36",
        300: "#21D173",
        400: "#0F8445",
        500: "#025628",
        600: "#0F8445",
        700: "#025628",
        800: "#285E61",
        900: "#00411E"
    },
    YellowPrimary: {
        "50": "#fffef9",
        "100": "#fffad9",
        "200": "#feef88",
        "300": "#fddf1e",
        "400": "#e7cc1b",
        "500": "#bea816",
        "600": "#988612",
        "700": "#77690e",
        "800": "#594e0a",
        "900": "#494109"
    },
    GrayPrimary: {
        600: "#828282"
    },
    OrangePrimary: {
        400: "#FFF3E4",
        500: "#FFFBE4",
        600: "#FEBD1E"
    },
    BlackPrimary: {
        200: "rgba(75,75,75,0.38)",
        400: "#2D3748"
    }
};
const config = {
    initialColorMode: "light",
    useSystemColorMode: false
};
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel.defaultProps = {
    ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel.defaultProps,
    fontSize: "12px",
    fontWeight: "medium"
};
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormHelperText.defaultProps = {
    ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormHelperText.defaultProps,
    fontSize: "xs",
    fontWeight: "light"
};
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input.defaultProps = {
    ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input.defaultProps,
    focusBorderColor: "GreenPrimary.400",
    fontSize: "12px",
    _readOnly: {
        bg: "gray.100"
    }
};
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button.defaultProps = {
    ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button.defaultProps,
    fontSize: "14px"
};
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormErrorMessage.defaultProps = {
    ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormErrorMessage.defaultProps,
    fontSize: "12px"
};
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Select.defaultProps = {
    ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Select.defaultProps,
    fontSize: "12px"
};
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Textarea.defaultProps = {
    ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Textarea.defaultProps,
    fontSize: "12px"
};
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text.defaultProps = {
    ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Textarea.defaultProps,
    fontSize: "12px"
};
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tr.defaultProps = {
    ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Textarea.defaultProps,
    fontSize: "12px"
};
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Th.defaultProps = {
    ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Textarea.defaultProps,
    bg: "green.500",
    color: "white",
    fontSize: "12px"
};
const fonts = {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    colors,
    config,
    fonts,
    components: {
        Text: {
            variants: {
                normal: {
                    fontSize: "12px"
                }
            }
        },
        Button: {
            variants: {
                white: {
                    bg: "white",
                    border: "1px",
                    borderColor: "gray.400"
                }
            }
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PersistentDrawerLeft; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"(app-pages-browser)/./node_modules/@mui/material/CssBaseline/CssBaseline.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/AppBar */ \"(app-pages-browser)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/layout/Header */ \"(app-pages-browser)/./src/app/_components/layout/Header.tsx\");\n/* harmony import */ var _components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/layout/Sidebar */ \"(app-pages-browser)/./src/app/_components/layout/Sidebar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst drawerWidth = 240;\nconst Main = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"main\", {\n    shouldForwardProp: (prop)=>prop !== \"open\"\n})((param)=>{\n    let { theme, open } = param;\n    return {\n        flexGrow: 1,\n        padding: theme.spacing(3),\n        transition: theme.transitions.create(\"margin\", {\n            easing: theme.transitions.easing.sharp,\n            duration: theme.transitions.duration.leavingScreen\n        }),\n        marginLeft: \"-\".concat(drawerWidth, \"px\"),\n        ...open && {\n            transition: theme.transitions.create(\"margin\", {\n                easing: theme.transitions.easing.easeOut,\n                duration: theme.transitions.duration.enteringScreen\n            }),\n            marginLeft: 0\n        }\n    };\n});\n_c = Main;\nconst AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    shouldForwardProp: (prop)=>prop !== \"open\"\n})((param)=>{\n    let { theme, open } = param;\n    return {\n        transition: theme.transitions.create([\n            \"margin\",\n            \"width\"\n        ], {\n            easing: theme.transitions.easing.sharp,\n            duration: theme.transitions.duration.leavingScreen\n        }),\n        ...open && {\n            width: \"calc(100% - \".concat(drawerWidth, \"px)\"),\n            marginLeft: \"\".concat(drawerWidth, \"px\"),\n            transition: theme.transitions.create([\n                \"margin\",\n                \"width\"\n            ], {\n                easing: theme.transitions.easing.easeOut,\n                duration: theme.transitions.duration.enteringScreen\n            })\n        }\n    };\n});\nconst DrawerHeader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"div\")((param)=>{\n    let { theme } = param;\n    return {\n        display: \"flex\",\n        alignItems: \"center\",\n        padding: theme.spacing(0, 1),\n        // necessary for content to be below app bar\n        ...theme.mixins.toolbar,\n        justifyContent: \"flex-end\"\n    };\n});\n_c1 = DrawerHeader;\nfunction PersistentDrawerLeft() {\n    _s();\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);\n    const handleDrawerOpen = ()=>{\n        setOpen(true);\n    };\n    const handleDrawerClose = ()=>{\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        sx: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                open: open\n            }, void 0, false, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                open: open\n            }, void 0, false, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {\n                open: open,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DrawerHeader, {}, void 0, false, {\n                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        paragraph: true,\n                        children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        paragraph: true,\n                        children: \"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this);\n}\n_s(PersistentDrawerLeft, \"C+PwaSq4kVaSX7ewkZP/5H5aQUE=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c2 = PersistentDrawerLeft;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c1, \"DrawerHeader\");\n$RefreshReg$(_c2, \"PersistentDrawerLeft\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7O2tDQWN0Qiw4REFBQ3BDLGdFQUFVQTt3QkFBQ29DLFNBQVM7a0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCOUI7R0FqRHdCTjs7UUFDUmxDLDREQUFRQTs7O01BREFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3R5bGVkLCB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgTXVpQXBwQmFyLCB7IEFwcEJhclByb3BzIGFzIE11aUFwcEJhclByb3BzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XG5pbXBvcnQgQ2hldnJvblJpZ2h0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25SaWdodCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbUJ1dHRvbic7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vdmVUb0luYm94JztcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01haWwnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL19jb21wb25lbnRzL2xheW91dC9IZWFkZXInO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9fY29tcG9uZW50cy9sYXlvdXQvU2lkZWJhcic7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xuXG5jb25zdCBNYWluID0gc3R5bGVkKCdtYWluJywgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KTx7XG4gIG9wZW4/OiBib29sZWFuO1xufT4oKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcbiAgZmxleEdyb3c6IDEsXG4gIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWFyZ2luJywge1xuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxuICB9KSxcbiAgbWFyZ2luTGVmdDogYC0ke2RyYXdlcldpZHRofXB4YCxcbiAgLi4uKG9wZW4gJiYge1xuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWFyZ2luJywge1xuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dCxcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcbiAgICB9KSxcbiAgICBtYXJnaW5MZWZ0OiAwLFxuICB9KSxcbn0pKTtcblxuaW50ZXJmYWNlIEFwcEJhclByb3BzIGV4dGVuZHMgTXVpQXBwQmFyUHJvcHMge1xuICBvcGVuPzogYm9vbGVhbjtcbn1cblxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcbn0pPEFwcEJhclByb3BzPigoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydtYXJnaW4nLCAnd2lkdGgnXSwge1xuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxuICB9KSxcbiAgLi4uKG9wZW4gJiYge1xuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxuICAgIG1hcmdpbkxlZnQ6IGAke2RyYXdlcldpZHRofXB4YCxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydtYXJnaW4nLCAnd2lkdGgnXSwge1xuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dCxcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcbiAgICB9KSxcbiAgfSksXG59KSk7XG5cbmNvbnN0IERyYXdlckhlYWRlciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxKSxcbiAgLy8gbmVjZXNzYXJ5IGZvciBjb250ZW50IHRvIGJlIGJlbG93IGFwcCBiYXJcbiAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzaXN0ZW50RHJhd2VyTGVmdCgpIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBoYW5kbGVEcmF3ZXJPcGVuID0gKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPEhlYWRlciBvcGVuPXtvcGVufSAvPlxuICAgICAgPFNpZGVCYXIgb3Blbj17b3Blbn0gLz5cbiAgICAgIDxNYWluIG9wZW49e29wZW59PlxuICAgICAgICA8RHJhd2VySGVhZGVyIC8+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHBhcmFncmFwaD5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBSaG9uY3VzIGRvbG9yIHB1cnVzIG5vblxuICAgICAgICAgIGVuaW0gcHJhZXNlbnQgZWxlbWVudHVtIGZhY2lsaXNpcyBsZW8gdmVsLiBSaXN1cyBhdCB1bHRyaWNlcyBtaSB0ZW1wdXNcbiAgICAgICAgICBpbXBlcmRpZXQuIFNlbXBlciByaXN1cyBpbiBoZW5kcmVyaXQgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzLlxuICAgICAgICAgIENvbnZhbGxpcyBjb252YWxsaXMgdGVsbHVzIGlkIGludGVyZHVtIHZlbGl0IGxhb3JlZXQgaWQgZG9uZWMgdWx0cmljZXMuXG4gICAgICAgICAgT2RpbyBtb3JiaSBxdWlzIGNvbW1vZG8gb2RpbyBhZW5lYW4gc2VkIGFkaXBpc2NpbmcuIEFtZXQgbmlzbCBzdXNjaXBpdFxuICAgICAgICAgIGFkaXBpc2NpbmcgYmliZW5kdW0gZXN0IHVsdHJpY2llcyBpbnRlZ2VyIHF1aXMuIEN1cnN1cyBldWlzbW9kIHF1aXMgdml2ZXJyYVxuICAgICAgICAgIG5pYmggY3Jhcy4gTWV0dXMgdnVscHV0YXRlIGV1IHNjZWxlcmlzcXVlIGZlbGlzIGltcGVyZGlldCBwcm9pbiBmZXJtZW50dW1cbiAgICAgICAgICBsZW8uIE1hdXJpcyBjb21tb2RvIHF1aXMgaW1wZXJkaWV0IG1hc3NhIHRpbmNpZHVudC4gQ3JhcyB0aW5jaWR1bnQgbG9ib3J0aXNcbiAgICAgICAgICBmZXVnaWF0IHZpdmFtdXMgYXQgYXVndWUuIEF0IGF1Z3VlIGVnZXQgYXJjdSBkaWN0dW0gdmFyaXVzIGR1aXMgYXRcbiAgICAgICAgICBjb25zZWN0ZXR1ciBsb3JlbS4gVmVsaXQgc2VkIHVsbGFtY29ycGVyIG1vcmJpIHRpbmNpZHVudC4gTG9yZW0gZG9uZWMgbWFzc2FcbiAgICAgICAgICBzYXBpZW4gZmF1Y2lidXMgZXQgbW9sZXN0aWUgYWMuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgcGFyYWdyYXBoPlxuICAgICAgICAgIENvbnNlcXVhdCBtYXVyaXMgbnVuYyBjb25ndWUgbmlzaSB2aXRhZSBzdXNjaXBpdC4gRnJpbmdpbGxhIGVzdCB1bGxhbWNvcnBlclxuICAgICAgICAgIGVnZXQgbnVsbGEgZmFjaWxpc2kgZXRpYW0gZGlnbmlzc2ltIGRpYW0uIFB1bHZpbmFyIGVsZW1lbnR1bSBpbnRlZ2VyIGVuaW1cbiAgICAgICAgICBuZXF1ZSB2b2x1dHBhdCBhYyB0aW5jaWR1bnQuIE9ybmFyZSBzdXNwZW5kaXNzZSBzZWQgbmlzaSBsYWN1cyBzZWQgdml2ZXJyYVxuICAgICAgICAgIHRlbGx1cy4gUHVydXMgc2l0IGFtZXQgdm9sdXRwYXQgY29uc2VxdWF0IG1hdXJpcy4gRWxlbWVudHVtIGV1IGZhY2lsaXNpc1xuICAgICAgICAgIHNlZCBvZGlvIG1vcmJpLiBFdWlzbW9kIGxhY2luaWEgYXQgcXVpcyByaXN1cyBzZWQgdnVscHV0YXRlIG9kaW8uIE1vcmJpXG4gICAgICAgICAgdGluY2lkdW50IG9ybmFyZSBtYXNzYSBlZ2V0IGVnZXN0YXMgcHVydXMgdml2ZXJyYSBhY2N1bXNhbiBpbi4gSW4gaGVuZHJlcml0XG4gICAgICAgICAgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzIG9yY2kgYWMuIFBlbGxlbnRlc3F1ZSBuZWMgbmFtIGFsaXF1YW0gc2VtXG4gICAgICAgICAgZXQgdG9ydG9yLiBIYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQuIEFkaXBpc2NpbmcgZWxpdCBkdWlzXG4gICAgICAgICAgdHJpc3RpcXVlIHNvbGxpY2l0dWRpbiBuaWJoIHNpdC4gT3JuYXJlIGFlbmVhbiBldWlzbW9kIGVsZW1lbnR1bSBuaXNpIHF1aXNcbiAgICAgICAgICBlbGVpZmVuZC4gQ29tbW9kbyB2aXZlcnJhIG1hZWNlbmFzIGFjY3Vtc2FuIGxhY3VzIHZlbCBmYWNpbGlzaXMuIE51bGxhXG4gICAgICAgICAgcG9zdWVyZSBzb2xsaWNpdHVkaW4gYWxpcXVhbSB1bHRyaWNlcyBzYWdpdHRpcyBvcmNpIGEuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvTWFpbj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsInVzZVRoZW1lIiwiQm94IiwiQ3NzQmFzZWxpbmUiLCJNdWlBcHBCYXIiLCJUeXBvZ3JhcGh5IiwiSGVhZGVyIiwiU2lkZUJhciIsImRyYXdlcldpZHRoIiwiTWFpbiIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsInRoZW1lIiwib3BlbiIsImZsZXhHcm93IiwicGFkZGluZyIsInNwYWNpbmciLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlYXNlT3V0IiwiZW50ZXJpbmdTY3JlZW4iLCJBcHBCYXIiLCJ3aWR0aCIsIkRyYXdlckhlYWRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWl4aW5zIiwidG9vbGJhciIsImp1c3RpZnlDb250ZW50IiwiUGVyc2lzdGVudERyYXdlckxlZnQiLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJzeCIsInBhcmFncmFwaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
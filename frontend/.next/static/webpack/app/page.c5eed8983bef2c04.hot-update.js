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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PersistentDrawerLeft; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"(app-pages-browser)/./node_modules/@mui/material/CssBaseline/CssBaseline.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/AppBar */ \"(app-pages-browser)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/layout/Header */ \"(app-pages-browser)/./src/app/_components/layout/Header.tsx\");\n/* harmony import */ var _components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/layout/Sidebar */ \"(app-pages-browser)/./src/app/_components/layout/Sidebar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst drawerWidth = 240;\nconst Main = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"main\", {\n    shouldForwardProp: (prop)=>prop !== \"open\"\n})((param)=>{\n    let { theme, open } = param;\n    return {\n        flexGrow: 1,\n        padding: theme.spacing(3),\n        transition: theme.transitions.create(\"margin\", {\n            easing: theme.transitions.easing.sharp,\n            duration: theme.transitions.duration.leavingScreen\n        }),\n        marginLeft: \"-\".concat(drawerWidth, \"px\"),\n        ...open && {\n            transition: theme.transitions.create(\"margin\", {\n                easing: theme.transitions.easing.easeOut,\n                duration: theme.transitions.duration.enteringScreen\n            }),\n            marginLeft: 0\n        }\n    };\n});\n_c = Main;\nconst AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    shouldForwardProp: (prop)=>prop !== \"open\"\n})((param)=>{\n    let { theme, open } = param;\n    return {\n        transition: theme.transitions.create([\n            \"margin\",\n            \"width\"\n        ], {\n            easing: theme.transitions.easing.sharp,\n            duration: theme.transitions.duration.leavingScreen\n        }),\n        ...open && {\n            width: \"calc(100% - \".concat(drawerWidth, \"px)\"),\n            marginLeft: \"\".concat(drawerWidth, \"px\"),\n            transition: theme.transitions.create([\n                \"margin\",\n                \"width\"\n            ], {\n                easing: theme.transitions.easing.easeOut,\n                duration: theme.transitions.duration.enteringScreen\n            })\n        }\n    };\n});\nconst DrawerHeader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"div\")((param)=>{\n    let { theme } = param;\n    return {\n        display: \"flex\",\n        alignItems: \"center\",\n        padding: theme.spacing(0, 1),\n        // necessary for content to be below app bar\n        ...theme.mixins.toolbar,\n        justifyContent: \"flex-end\"\n    };\n});\n_c1 = DrawerHeader;\nfunction PersistentDrawerLeft() {\n    _s();\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);\n    const handleDrawerOpen = ()=>{\n        setOpen(true);\n    };\n    const handleDrawerClose = ()=>{\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        sx: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                open: open\n            }, void 0, false, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {\n                open: open,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DrawerHeader, {}, void 0, false, {\n                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        paragraph: true,\n                        children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        paragraph: true,\n                        children: \"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this);\n}\n_s(PersistentDrawerLeft, \"C+PwaSq4kVaSX7ewkZP/5H5aQUE=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c2 = PersistentDrawerLeft;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c1, \"DrawerHeader\");\n$RefreshReg$(_c2, \"PersistentDrawerLeft\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDeUI7QUFDcEI7QUFFZ0I7QUFDNEI7QUFHOUI7QUFZRDtBQUNFO0FBRW5ELE1BQU1TLGNBQWM7QUFFcEIsTUFBTUMsT0FBT1QsZ0VBQU1BLENBQUMsUUFBUTtJQUFFVSxtQkFBbUIsQ0FBQ0MsT0FBU0EsU0FBUztBQUFPLEdBRXhFO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUU7V0FBTTtRQUN2QkMsVUFBVTtRQUNWQyxTQUFTSCxNQUFNSSxPQUFPLENBQUM7UUFDdkJDLFlBQVlMLE1BQU1NLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLFVBQVU7WUFDN0NDLFFBQVFSLE1BQU1NLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1lBQ3RDQyxVQUFVVixNQUFNTSxXQUFXLENBQUNJLFFBQVEsQ0FBQ0MsYUFBYTtRQUNwRDtRQUNBQyxZQUFZLElBQWdCLE9BQVpoQixhQUFZO1FBQzVCLEdBQUlLLFFBQVE7WUFDVkksWUFBWUwsTUFBTU0sV0FBVyxDQUFDQyxNQUFNLENBQUMsVUFBVTtnQkFDN0NDLFFBQVFSLE1BQU1NLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDSyxPQUFPO2dCQUN4Q0gsVUFBVVYsTUFBTU0sV0FBVyxDQUFDSSxRQUFRLENBQUNJLGNBQWM7WUFDckQ7WUFDQUYsWUFBWTtRQUNkLENBQUM7SUFDSDs7S0FqQk1mO0FBdUJOLE1BQU1rQixTQUFTM0IsZ0VBQU1BLENBQUNJLDREQUFTQSxFQUFFO0lBQy9CTSxtQkFBbUIsQ0FBQ0MsT0FBU0EsU0FBUztBQUN4QyxHQUFnQjtRQUFDLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFO1dBQU07UUFDcENJLFlBQVlMLE1BQU1NLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO1lBQUM7WUFBVTtTQUFRLEVBQUU7WUFDeERDLFFBQVFSLE1BQU1NLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1lBQ3RDQyxVQUFVVixNQUFNTSxXQUFXLENBQUNJLFFBQVEsQ0FBQ0MsYUFBYTtRQUNwRDtRQUNBLEdBQUlWLFFBQVE7WUFDVmUsT0FBTyxlQUEyQixPQUFacEIsYUFBWTtZQUNsQ2dCLFlBQVksR0FBZSxPQUFaaEIsYUFBWTtZQUMzQlMsWUFBWUwsTUFBTU0sV0FBVyxDQUFDQyxNQUFNLENBQUM7Z0JBQUM7Z0JBQVU7YUFBUSxFQUFFO2dCQUN4REMsUUFBUVIsTUFBTU0sV0FBVyxDQUFDRSxNQUFNLENBQUNLLE9BQU87Z0JBQ3hDSCxVQUFVVixNQUFNTSxXQUFXLENBQUNJLFFBQVEsQ0FBQ0ksY0FBYztZQUNyRDtRQUNGLENBQUM7SUFDSDs7QUFFQSxNQUFNRyxlQUFlN0IsZ0VBQU1BLENBQUMsT0FBTztRQUFDLEVBQUVZLEtBQUssRUFBRTtXQUFNO1FBQ2pEa0IsU0FBUztRQUNUQyxZQUFZO1FBQ1poQixTQUFTSCxNQUFNSSxPQUFPLENBQUMsR0FBRztRQUMxQiw0Q0FBNEM7UUFDNUMsR0FBR0osTUFBTW9CLE1BQU0sQ0FBQ0MsT0FBTztRQUN2QkMsZ0JBQWdCO0lBQ2xCOztNQVBNTDtBQVNTLFNBQVNNOztJQUN0QixNQUFNdkIsUUFBUVgsZ0VBQVFBO0lBQ3RCLE1BQU0sQ0FBQ1ksTUFBTXVCLFFBQVEsR0FBR3JDLDJDQUFjLENBQUM7SUFFdkMsTUFBTXVDLG1CQUFtQjtRQUN2QkYsUUFBUTtJQUNWO0lBRUEsTUFBTUcsb0JBQW9CO1FBQ3hCSCxRQUFRO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ2xDLHlEQUFHQTtRQUFDc0MsSUFBSTtZQUFFVixTQUFTO1FBQU87OzBCQUN6Qiw4REFBQzNCLGlFQUFXQTs7Ozs7MEJBQ1osOERBQUNHLGlFQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLGtFQUFPQTtnQkFBQ00sTUFBTUE7Ozs7OzswQkFDZiw4REFBQ0o7Z0JBQUtJLE1BQU1BOztrQ0FDViw4REFBQ2dCOzs7OztrQ0FDRCw4REFBQ3hCLGdFQUFVQTt3QkFBQ29DLFNBQVM7a0NBQUM7Ozs7OztrQ0FjdEIsOERBQUNwQyxnRUFBVUE7d0JBQUNvQyxTQUFTO2tDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjlCO0dBakR3Qk47O1FBQ1JsQyw0REFBUUE7OztNQURBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0eWxlZCwgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IE11aUFwcEJhciwgeyBBcHBCYXJQcm9wcyBhcyBNdWlBcHBCYXJQcm9wcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGl2aWRlcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uUmlnaHQnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1CdXR0b24nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3ZlVG9JbmJveCc7XG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NYWlsJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9fY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyJztcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vX2NvbXBvbmVudHMvbGF5b3V0L1NpZGViYXInO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcblxuY29uc3QgTWFpbiA9IHN0eWxlZCgnbWFpbicsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSk8e1xuICBvcGVuPzogYm9vbGVhbjtcbn0+KCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XG4gIGZsZXhHcm93OiAxLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ21hcmdpbicsIHtcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcbiAgfSksXG4gIG1hcmdpbkxlZnQ6IGAtJHtkcmF3ZXJXaWR0aH1weGAsXG4gIC4uLihvcGVuICYmIHtcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ21hcmdpbicsIHtcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXG4gICAgfSksXG4gICAgbWFyZ2luTGVmdDogMCxcbiAgfSksXG59KSk7XG5cbmludGVyZmFjZSBBcHBCYXJQcm9wcyBleHRlbmRzIE11aUFwcEJhclByb3BzIHtcbiAgb3Blbj86IGJvb2xlYW47XG59XG5cbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXG59KTxBcHBCYXJQcm9wcz4oKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnbWFyZ2luJywgJ3dpZHRoJ10sIHtcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcbiAgfSksXG4gIC4uLihvcGVuICYmIHtcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICBtYXJnaW5MZWZ0OiBgJHtkcmF3ZXJXaWR0aH1weGAsXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnbWFyZ2luJywgJ3dpZHRoJ10sIHtcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXG4gICAgfSksXG4gIH0pLFxufSkpO1xuXG5jb25zdCBEcmF3ZXJIZWFkZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMSksXG4gIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXG4gIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxuICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc2lzdGVudERyYXdlckxlZnQoKSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxIZWFkZXIgIC8+XG4gICAgICA8U2lkZUJhciBvcGVuPXtvcGVufSAvPlxuICAgICAgPE1haW4gb3Blbj17b3Blbn0+XG4gICAgICAgIDxEcmF3ZXJIZWFkZXIgLz5cbiAgICAgICAgPFR5cG9ncmFwaHkgcGFyYWdyYXBoPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFJob25jdXMgZG9sb3IgcHVydXMgbm9uXG4gICAgICAgICAgZW5pbSBwcmFlc2VudCBlbGVtZW50dW0gZmFjaWxpc2lzIGxlbyB2ZWwuIFJpc3VzIGF0IHVsdHJpY2VzIG1pIHRlbXB1c1xuICAgICAgICAgIGltcGVyZGlldC4gU2VtcGVyIHJpc3VzIGluIGhlbmRyZXJpdCBncmF2aWRhIHJ1dHJ1bSBxdWlzcXVlIG5vbiB0ZWxsdXMuXG4gICAgICAgICAgQ29udmFsbGlzIGNvbnZhbGxpcyB0ZWxsdXMgaWQgaW50ZXJkdW0gdmVsaXQgbGFvcmVldCBpZCBkb25lYyB1bHRyaWNlcy5cbiAgICAgICAgICBPZGlvIG1vcmJpIHF1aXMgY29tbW9kbyBvZGlvIGFlbmVhbiBzZWQgYWRpcGlzY2luZy4gQW1ldCBuaXNsIHN1c2NpcGl0XG4gICAgICAgICAgYWRpcGlzY2luZyBiaWJlbmR1bSBlc3QgdWx0cmljaWVzIGludGVnZXIgcXVpcy4gQ3Vyc3VzIGV1aXNtb2QgcXVpcyB2aXZlcnJhXG4gICAgICAgICAgbmliaCBjcmFzLiBNZXR1cyB2dWxwdXRhdGUgZXUgc2NlbGVyaXNxdWUgZmVsaXMgaW1wZXJkaWV0IHByb2luIGZlcm1lbnR1bVxuICAgICAgICAgIGxlby4gTWF1cmlzIGNvbW1vZG8gcXVpcyBpbXBlcmRpZXQgbWFzc2EgdGluY2lkdW50LiBDcmFzIHRpbmNpZHVudCBsb2JvcnRpc1xuICAgICAgICAgIGZldWdpYXQgdml2YW11cyBhdCBhdWd1ZS4gQXQgYXVndWUgZWdldCBhcmN1IGRpY3R1bSB2YXJpdXMgZHVpcyBhdFxuICAgICAgICAgIGNvbnNlY3RldHVyIGxvcmVtLiBWZWxpdCBzZWQgdWxsYW1jb3JwZXIgbW9yYmkgdGluY2lkdW50LiBMb3JlbSBkb25lYyBtYXNzYVxuICAgICAgICAgIHNhcGllbiBmYXVjaWJ1cyBldCBtb2xlc3RpZSBhYy5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+XG4gICAgICAgICAgQ29uc2VxdWF0IG1hdXJpcyBudW5jIGNvbmd1ZSBuaXNpIHZpdGFlIHN1c2NpcGl0LiBGcmluZ2lsbGEgZXN0IHVsbGFtY29ycGVyXG4gICAgICAgICAgZWdldCBudWxsYSBmYWNpbGlzaSBldGlhbSBkaWduaXNzaW0gZGlhbS4gUHVsdmluYXIgZWxlbWVudHVtIGludGVnZXIgZW5pbVxuICAgICAgICAgIG5lcXVlIHZvbHV0cGF0IGFjIHRpbmNpZHVudC4gT3JuYXJlIHN1c3BlbmRpc3NlIHNlZCBuaXNpIGxhY3VzIHNlZCB2aXZlcnJhXG4gICAgICAgICAgdGVsbHVzLiBQdXJ1cyBzaXQgYW1ldCB2b2x1dHBhdCBjb25zZXF1YXQgbWF1cmlzLiBFbGVtZW50dW0gZXUgZmFjaWxpc2lzXG4gICAgICAgICAgc2VkIG9kaW8gbW9yYmkuIEV1aXNtb2QgbGFjaW5pYSBhdCBxdWlzIHJpc3VzIHNlZCB2dWxwdXRhdGUgb2Rpby4gTW9yYmlcbiAgICAgICAgICB0aW5jaWR1bnQgb3JuYXJlIG1hc3NhIGVnZXQgZWdlc3RhcyBwdXJ1cyB2aXZlcnJhIGFjY3Vtc2FuIGluLiBJbiBoZW5kcmVyaXRcbiAgICAgICAgICBncmF2aWRhIHJ1dHJ1bSBxdWlzcXVlIG5vbiB0ZWxsdXMgb3JjaSBhYy4gUGVsbGVudGVzcXVlIG5lYyBuYW0gYWxpcXVhbSBzZW1cbiAgICAgICAgICBldCB0b3J0b3IuIEhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldC4gQWRpcGlzY2luZyBlbGl0IGR1aXNcbiAgICAgICAgICB0cmlzdGlxdWUgc29sbGljaXR1ZGluIG5pYmggc2l0LiBPcm5hcmUgYWVuZWFuIGV1aXNtb2QgZWxlbWVudHVtIG5pc2kgcXVpc1xuICAgICAgICAgIGVsZWlmZW5kLiBDb21tb2RvIHZpdmVycmEgbWFlY2VuYXMgYWNjdW1zYW4gbGFjdXMgdmVsIGZhY2lsaXNpcy4gTnVsbGFcbiAgICAgICAgICBwb3N1ZXJlIHNvbGxpY2l0dWRpbiBhbGlxdWFtIHVsdHJpY2VzIHNhZ2l0dGlzIG9yY2kgYS5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9NYWluPlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwidXNlVGhlbWUiLCJCb3giLCJDc3NCYXNlbGluZSIsIk11aUFwcEJhciIsIlR5cG9ncmFwaHkiLCJIZWFkZXIiLCJTaWRlQmFyIiwiZHJhd2VyV2lkdGgiLCJNYWluIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwidGhlbWUiLCJvcGVuIiwiZmxleEdyb3ciLCJwYWRkaW5nIiwic3BhY2luZyIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVhc2VPdXQiLCJlbnRlcmluZ1NjcmVlbiIsIkFwcEJhciIsIndpZHRoIiwiRHJhd2VySGVhZGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtaXhpbnMiLCJ0b29sYmFyIiwianVzdGlmeUNvbnRlbnQiLCJQZXJzaXN0ZW50RHJhd2VyTGVmdCIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsImhhbmRsZURyYXdlck9wZW4iLCJoYW5kbGVEcmF3ZXJDbG9zZSIsInN4IiwicGFyYWdyYXBoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
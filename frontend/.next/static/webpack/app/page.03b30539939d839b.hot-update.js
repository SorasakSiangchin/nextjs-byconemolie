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

/***/ "(app-pages-browser)/./src/app/_components/layout/Sidebar.tsx":
/*!************************************************!*\
  !*** ./src/app/_components/layout/Sidebar.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Drawer */ \"(app-pages-browser)/./node_modules/@mui/material/Drawer/Drawer.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AppBar */ \"(app-pages-browser)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/List */ \"(app-pages-browser)/./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Divider */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ChevronLeft.js\");\n/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ChevronRight */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ChevronRight.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItem */ \"(app-pages-browser)/./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ListItemButton */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemButton/ListItemButton.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemIcon/ListItemIcon.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/ListItemText */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/MoveToInbox */ \"(app-pages-browser)/./node_modules/@mui/icons-material/MoveToInbox.js\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Mail.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst drawerWidth = 240;\nconst Main = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"main\", {\n    shouldForwardProp: (prop)=>prop !== \"open\"\n})((param)=>{\n    let { theme, open } = param;\n    return {\n        flexGrow: 1,\n        padding: theme.spacing(3),\n        transition: theme.transitions.create(\"margin\", {\n            easing: theme.transitions.easing.sharp,\n            duration: theme.transitions.duration.leavingScreen\n        }),\n        marginLeft: \"-\".concat(drawerWidth, \"px\"),\n        ...open && {\n            transition: theme.transitions.create(\"margin\", {\n                easing: theme.transitions.easing.easeOut,\n                duration: theme.transitions.duration.enteringScreen\n            }),\n            marginLeft: 0\n        }\n    };\n});\nconst AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    shouldForwardProp: (prop)=>prop !== \"open\"\n})((param)=>{\n    let { theme, open } = param;\n    return {\n        transition: theme.transitions.create([\n            \"margin\",\n            \"width\"\n        ], {\n            easing: theme.transitions.easing.sharp,\n            duration: theme.transitions.duration.leavingScreen\n        }),\n        ...open && {\n            width: \"calc(100% - \".concat(drawerWidth, \"px)\"),\n            marginLeft: \"\".concat(drawerWidth, \"px\"),\n            transition: theme.transitions.create([\n                \"margin\",\n                \"width\"\n            ], {\n                easing: theme.transitions.easing.easeOut,\n                duration: theme.transitions.duration.enteringScreen\n            })\n        }\n    };\n});\nconst DrawerHeader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\")((param)=>{\n    let { theme } = param;\n    return {\n        display: \"flex\",\n        alignItems: \"center\",\n        padding: theme.spacing(0, 1),\n        // necessary for content to be below app bar\n        ...theme.mixins.toolbar,\n        justifyContent: \"flex-end\"\n    };\n});\n_c = DrawerHeader;\nfunction SideBar(param) {\n    let {} = param;\n    _s();\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);\n    const handleDrawerOpen = ()=>{\n        setOpen(true);\n    };\n    const handleDrawerClose = ()=>{\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            width: drawerWidth,\n            flexShrink: 0,\n            \"& .MuiDrawer-paper\": {\n                width: drawerWidth,\n                boxSizing: \"border-box\"\n            }\n        },\n        variant: \"persistent\",\n        anchor: \"left\",\n        open: open,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DrawerHeader, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    onClick: handleDrawerClose,\n                    children: theme.direction === \"ltr\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 38\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 60\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                lineNumber: 106,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                lineNumber: 111,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                children: [\n                    \"Inbox\",\n                    \"Starred\",\n                    \"Send email\",\n                    \"Drafts\"\n                ].map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        disablePadding: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 34\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 50\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                                    primary: text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this)\n                    }, text, false, {\n                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                lineNumber: 112,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                lineNumber: 124,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                children: [\n                    \"All mail\",\n                    \"Trash\",\n                    \"Spam\"\n                ].map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        disablePadding: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 34\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 50\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                                    primary: text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this)\n                    }, text, false, {\n                        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n                lineNumber: 125,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\sorasak\\\\next-js\\\\frontend\\\\src\\\\app\\\\_components\\\\layout\\\\Sidebar.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(SideBar, \"C+PwaSq4kVaSX7ewkZP/5H5aQUE=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c1 = SideBar;\nvar _c, _c1;\n$RefreshReg$(_c, \"DrawerHeader\");\n$RefreshReg$(_c1, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbGF5b3V0L1NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUN5QjtBQUVkO0FBRXNDO0FBRTFDO0FBRU07QUFDTTtBQUVZO0FBQ0U7QUFDbEI7QUFDWTtBQUNKO0FBQ0E7QUFDRTtBQUNSO0FBRWhELE1BQU1nQixjQUFjO0FBRXBCLE1BQU1DLE9BQU9oQixnRUFBTUEsQ0FBQyxRQUFRO0lBQUVpQixtQkFBbUIsQ0FBQ0MsT0FBU0EsU0FBUztBQUFPLEdBRXhFO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUU7V0FBTTtRQUN2QkMsVUFBVTtRQUNWQyxTQUFTSCxNQUFNSSxPQUFPLENBQUM7UUFDdkJDLFlBQVlMLE1BQU1NLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLFVBQVU7WUFDN0NDLFFBQVFSLE1BQU1NLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1lBQ3RDQyxVQUFVVixNQUFNTSxXQUFXLENBQUNJLFFBQVEsQ0FBQ0MsYUFBYTtRQUNwRDtRQUNBQyxZQUFZLElBQWdCLE9BQVpoQixhQUFZO1FBQzVCLEdBQUlLLFFBQVE7WUFDVkksWUFBWUwsTUFBTU0sV0FBVyxDQUFDQyxNQUFNLENBQUMsVUFBVTtnQkFDN0NDLFFBQVFSLE1BQU1NLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDSyxPQUFPO2dCQUN4Q0gsVUFBVVYsTUFBTU0sV0FBVyxDQUFDSSxRQUFRLENBQUNJLGNBQWM7WUFDckQ7WUFDQUYsWUFBWTtRQUNkLENBQUM7SUFDSDs7QUFNQSxNQUFNRyxTQUFTbEMsZ0VBQU1BLENBQUNHLDREQUFTQSxFQUFFO0lBQy9CYyxtQkFBbUIsQ0FBQ0MsT0FBU0EsU0FBUztBQUN4QyxHQUFnQjtRQUFDLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFO1dBQU07UUFDcENJLFlBQVlMLE1BQU1NLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO1lBQUM7WUFBVTtTQUFRLEVBQUU7WUFDeERDLFFBQVFSLE1BQU1NLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1lBQ3RDQyxVQUFVVixNQUFNTSxXQUFXLENBQUNJLFFBQVEsQ0FBQ0MsYUFBYTtRQUNwRDtRQUNBLEdBQUlWLFFBQVE7WUFDVmUsT0FBTyxlQUEyQixPQUFacEIsYUFBWTtZQUNsQ2dCLFlBQVksR0FBZSxPQUFaaEIsYUFBWTtZQUMzQlMsWUFBWUwsTUFBTU0sV0FBVyxDQUFDQyxNQUFNLENBQUM7Z0JBQUM7Z0JBQVU7YUFBUSxFQUFFO2dCQUN4REMsUUFBUVIsTUFBTU0sV0FBVyxDQUFDRSxNQUFNLENBQUNLLE9BQU87Z0JBQ3hDSCxVQUFVVixNQUFNTSxXQUFXLENBQUNJLFFBQVEsQ0FBQ0ksY0FBYztZQUNyRDtRQUNGLENBQUM7SUFDSDs7QUFFQSxNQUFNRyxlQUFlcEMsZ0VBQU1BLENBQUMsT0FBTztRQUFDLEVBQUVtQixLQUFLLEVBQUU7V0FBTTtRQUNqRGtCLFNBQVM7UUFDVEMsWUFBWTtRQUNaaEIsU0FBU0gsTUFBTUksT0FBTyxDQUFDLEdBQUc7UUFDMUIsNENBQTRDO1FBQzVDLEdBQUdKLE1BQU1vQixNQUFNLENBQUNDLE9BQU87UUFDdkJDLGdCQUFnQjtJQUNsQjs7S0FQTUw7QUFjUyxTQUFTTSxRQUFRLEtBQVk7UUFBWixFQUFZLEdBQVo7O0lBQzlCLE1BQU12QixRQUFRbEIsZ0VBQVFBO0lBQ3RCLE1BQU0sQ0FBQ21CLE1BQU11QixRQUFRLEdBQUc1QywyQ0FBYyxDQUFDO0lBRXZDLE1BQU04QyxtQkFBbUI7UUFDdkJGLFFBQVE7SUFDVjtJQUVBLE1BQU1HLG9CQUFvQjtRQUN4QkgsUUFBUTtJQUNWO0lBRUEscUJBQ0UsOERBQUN6Qyw0REFBTUE7UUFDUDZDLElBQUk7WUFDRlosT0FBT3BCO1lBQ1BpQyxZQUFZO1lBQ1osc0JBQXNCO2dCQUNwQmIsT0FBT3BCO2dCQUNQa0MsV0FBVztZQUNiO1FBQ0Y7UUFDQUMsU0FBUTtRQUNSQyxRQUFPO1FBQ1AvQixNQUFNQTs7MEJBRU4sOERBQUNnQjswQkFDQyw0RUFBQzlCLGdFQUFVQTtvQkFBQzhDLFNBQVNOOzhCQUNsQjNCLE1BQU1rQyxTQUFTLEtBQUssc0JBQVEsOERBQUM5Qyx1RUFBZUE7Ozs7NkNBQU0sOERBQUNDLHdFQUFnQkE7Ozs7Ozs7Ozs7Ozs7OzswQkFHeEUsOERBQUNILDZEQUFPQTs7Ozs7MEJBQ1IsOERBQUNELDJEQUFJQTswQkFDRjtvQkFBQztvQkFBUztvQkFBVztvQkFBYztpQkFBUyxDQUFDa0QsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN2RCw4REFBQy9DLCtEQUFRQTt3QkFBWWdELGNBQWM7a0NBQ2pDLDRFQUFDL0MscUVBQWNBOzs4Q0FDYiw4REFBQ0MsbUVBQVlBOzhDQUNWNkMsUUFBUSxNQUFNLGtCQUFJLDhEQUFDM0Msd0VBQVNBOzs7OzZEQUFNLDhEQUFDQyxpRUFBUUE7Ozs7Ozs7Ozs7OENBRTlDLDhEQUFDRixtRUFBWUE7b0NBQUM4QyxTQUFTSDs7Ozs7Ozs7Ozs7O3VCQUxaQTs7Ozs7Ozs7OzswQkFVbkIsOERBQUNsRCw2REFBT0E7Ozs7OzBCQUNSLDhEQUFDRCwyREFBSUE7MEJBQ0Y7b0JBQUM7b0JBQVk7b0JBQVM7aUJBQU8sQ0FBQ2tELEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDeEMsOERBQUMvQywrREFBUUE7d0JBQVlnRCxjQUFjO2tDQUNqQyw0RUFBQy9DLHFFQUFjQTs7OENBQ2IsOERBQUNDLG1FQUFZQTs4Q0FDVjZDLFFBQVEsTUFBTSxrQkFBSSw4REFBQzNDLHdFQUFTQTs7Ozs2REFBTSw4REFBQ0MsaUVBQVFBOzs7Ozs7Ozs7OzhDQUU5Qyw4REFBQ0YsbUVBQVlBO29DQUFDOEMsU0FBU0g7Ozs7Ozs7Ozs7Ozt1QkFMWkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZdkI7R0EzRHdCYjs7UUFDUnpDLDREQUFRQTs7O01BREF5QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19jb21wb25lbnRzL2xheW91dC9TaWRlYmFyLnRzeD82M2E0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHN0eWxlZCwgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpQXBwQmFyLCB7IEFwcEJhclByb3BzIGFzIE11aUFwcEJhclByb3BzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uUmlnaHQnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtQnV0dG9uJztcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtSWNvbic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW92ZVRvSW5ib3gnO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NYWlsJztcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgTWFpbiA9IHN0eWxlZCgnbWFpbicsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSk8e1xyXG4gIG9wZW4/OiBib29sZWFuO1xyXG59PigoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIGZsZXhHcm93OiAxLFxyXG4gIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdtYXJnaW4nLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIG1hcmdpbkxlZnQ6IGAtJHtkcmF3ZXJXaWR0aH1weGAsXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdtYXJnaW4nLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICB9KSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIEFwcEJhclByb3BzIGV4dGVuZHMgTXVpQXBwQmFyUHJvcHMge1xyXG4gIG9wZW4/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pPEFwcEJhclByb3BzPigoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ21hcmdpbicsICd3aWR0aCddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgbWFyZ2luTGVmdDogYCR7ZHJhd2VyV2lkdGh9cHhgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnbWFyZ2luJywgJ3dpZHRoJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuXHJcbmNvbnN0IERyYXdlckhlYWRlciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAvLyBuZWNlc3NhcnkgZm9yIGNvbnRlbnQgdG8gYmUgYmVsb3cgYXBwIGJhclxyXG4gIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG59KSk7XHJcblxyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBvcGVuIDogYm9vbGVhbiAsXHJcbiAgaGFuZGxlRHJhd2VyT3BlbiA6ICgpID0+IHZvaWRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhcih7ICB9IDogUHJvcHMpIHtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJcclxuICAgIHN4PXt7XHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIH0sXHJcbiAgICB9fVxyXG4gICAgdmFyaWFudD1cInBlcnNpc3RlbnRcIlxyXG4gICAgYW5jaG9yPVwibGVmdFwiXHJcbiAgICBvcGVuPXtvcGVufVxyXG4gID5cclxuICAgIDxEcmF3ZXJIZWFkZXI+XHJcbiAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfT5cclxuICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSAnbHRyJyA/IDxDaGV2cm9uTGVmdEljb24gLz4gOiA8Q2hldnJvblJpZ2h0SWNvbiAvPn1cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgPC9EcmF3ZXJIZWFkZXI+XHJcbiAgICA8RGl2aWRlciAvPlxyXG4gICAgPExpc3Q+XHJcbiAgICAgIHtbJ0luYm94JywgJ1N0YXJyZWQnLCAnU2VuZCBlbWFpbCcsICdEcmFmdHMnXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPExpc3RJdGVtIGtleT17dGV4dH0gZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICkpfVxyXG4gICAgPC9MaXN0PlxyXG4gICAgPERpdmlkZXIgLz5cclxuICAgIDxMaXN0PlxyXG4gICAgICB7WydBbGwgbWFpbCcsICdUcmFzaCcsICdTcGFtJ10ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxMaXN0SXRlbSBrZXk9e3RleHR9IGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgPExpc3RJdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIHtpbmRleCAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fVxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICApKX1cclxuICAgIDwvTGlzdD5cclxuICA8L0RyYXdlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsInVzZVRoZW1lIiwiRHJhd2VyIiwiTXVpQXBwQmFyIiwiTGlzdCIsIkRpdmlkZXIiLCJJY29uQnV0dG9uIiwiQ2hldnJvbkxlZnRJY29uIiwiQ2hldnJvblJpZ2h0SWNvbiIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJJbmJveEljb24iLCJNYWlsSWNvbiIsImRyYXdlcldpZHRoIiwiTWFpbiIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsInRoZW1lIiwib3BlbiIsImZsZXhHcm93IiwicGFkZGluZyIsInNwYWNpbmciLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlYXNlT3V0IiwiZW50ZXJpbmdTY3JlZW4iLCJBcHBCYXIiLCJ3aWR0aCIsIkRyYXdlckhlYWRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWl4aW5zIiwidG9vbGJhciIsImp1c3RpZnlDb250ZW50IiwiU2lkZUJhciIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsImhhbmRsZURyYXdlck9wZW4iLCJoYW5kbGVEcmF3ZXJDbG9zZSIsInN4IiwiZmxleFNocmluayIsImJveFNpemluZyIsInZhcmlhbnQiLCJhbmNob3IiLCJvbkNsaWNrIiwiZGlyZWN0aW9uIiwibWFwIiwidGV4dCIsImluZGV4IiwiZGlzYWJsZVBhZGRpbmciLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/layout/Sidebar.tsx\n"));

/***/ })

});
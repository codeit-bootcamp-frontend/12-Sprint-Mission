"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boards",{

/***/ "./pages/boards/index.tsx":
/*!********************************!*\
  !*** ./pages/boards/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_app_ItemListNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/app/ItemListNav */ \"./components/app/ItemListNav.tsx\");\n/* harmony import */ var _styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/boards/postList.module.css */ \"./styles/boards/postList.module.css\");\n/* harmony import */ var _styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_boards_BestPostsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/boards/BestPostsList */ \"./components/boards/BestPostsList.tsx\");\n/* harmony import */ var _components_boards_AllPostsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/boards/AllPostsList */ \"./components/boards/AllPostsList.tsx\");\n/* harmony import */ var _hook_useQueryBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hook/useQueryBoard */ \"./hook/useQueryBoard.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction PostListPage() {\n    _s();\n    const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"recent\");\n    const [keyword, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { data: likePost, loading: likeLoading } = (0,_hook_useQueryBoard__WEBPACK_IMPORTED_MODULE_6__.useQueryArticles)({\n        queryUrl: \"articles?orderBy=like&pageSize=3\"\n    });\n    const { data: recentPost, loading: recentLoading } = (0,_hook_useQueryBoard__WEBPACK_IMPORTED_MODULE_6__.useQueryArticles)({\n        queryUrl: \"articles?orderBy=\".concat(order, \"&keyword=\").concat(keyword)\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"자유게시판 - 판다마켓\"\n                }, void 0, false, {\n                    fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/pages/boards/index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/pages/boards/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_ItemListNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/pages/boards/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            likePost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().pagiContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boards_BestPostsList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        likePost: likePost,\n                        likeLoading: likeLoading\n                    }, void 0, false, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/pages/boards/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boards_AllPostsList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        recentPost: recentPost,\n                        setOrder: setOrder,\n                        setKeyword: setKeyword,\n                        recentLoading: recentLoading\n                    }, void 0, false, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/pages/boards/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/pages/boards/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PostListPage, \"JJvBhFgJAYJMkXLzZK/qCNc968g=\", false, function() {\n    return [\n        _hook_useQueryBoard__WEBPACK_IMPORTED_MODULE_6__.useQueryArticles,\n        _hook_useQueryBoard__WEBPACK_IMPORTED_MODULE_6__.useQueryArticles\n    ];\n});\n_c = PostListPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostListPage);\nvar _c;\n$RefreshReg$(_c, \"PostListPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZHMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNKO0FBQzBCO0FBQ007QUFDQztBQUNGO0FBQ0o7QUFHeEQsU0FBU087O0lBQ1AsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVZLE1BQU1DLFFBQVEsRUFBRUMsU0FBU0MsV0FBVyxFQUFFLEdBQUdULHFFQUFnQkEsQ0FHOUQ7UUFDRFUsVUFBVTtJQUNaO0lBQ0EsTUFBTSxFQUFFSixNQUFNSyxVQUFVLEVBQUVILFNBQVNJLGFBQWEsRUFBRSxHQUFHWixxRUFBZ0JBLENBR2xFO1FBQ0RVLFVBQVUsb0JBQXFDTixPQUFqQkYsT0FBTSxhQUFtQixPQUFSRTtJQUNqRDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1Qsa0RBQUlBOzBCQUNILDRFQUFDa0I7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDakIsbUVBQVdBOzs7OztZQUNYVywwQkFDQyw4REFBQ087Z0JBQUlDLFdBQVdsQix5RkFBb0I7O2tDQUNsQyw4REFBQ0Msd0VBQWFBO3dCQUFDUyxVQUFVQTt3QkFBVUUsYUFBYUE7Ozs7OztrQ0FDaEQsOERBQUNWLHVFQUFZQTt3QkFDWFksWUFBWUE7d0JBQ1pSLFVBQVVBO3dCQUNWRSxZQUFZQTt3QkFDWk8sZUFBZUE7Ozs7Ozs7Ozs7Ozs7O0FBTTNCO0dBbkNTWDs7UUFHMENELGlFQUFnQkE7UUFNWkEsaUVBQWdCQTs7O0tBVDlEQztBQXFDVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ib2FyZHMvaW5kZXgudHN4P2ZlZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJdGVtTGlzdE5hdiBmcm9tIFwiQC9jb21wb25lbnRzL2FwcC9JdGVtTGlzdE5hdlwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2JvYXJkcy9wb3N0TGlzdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQmVzdFBvc3RzTGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL2JvYXJkcy9CZXN0UG9zdHNMaXN0XCI7XG5pbXBvcnQgQWxsUG9zdHNMaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvYm9hcmRzL0FsbFBvc3RzTGlzdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnlBcnRpY2xlcyB9IGZyb20gXCJAL2hvb2svdXNlUXVlcnlCb2FyZFwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmZ1bmN0aW9uIFBvc3RMaXN0UGFnZSgpIHtcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZShcInJlY2VudFwiKTtcbiAgY29uc3QgW2tleXdvcmQsIHNldEtleXdvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHsgZGF0YTogbGlrZVBvc3QsIGxvYWRpbmc6IGxpa2VMb2FkaW5nIH0gPSB1c2VRdWVyeUFydGljbGVzPHtcbiAgICBsaXN0OiBJdGVtW107XG4gICAgdG90YWxDb3VudDogbnVtYmVyO1xuICB9Pih7XG4gICAgcXVlcnlVcmw6IFwiYXJ0aWNsZXM/b3JkZXJCeT1saWtlJnBhZ2VTaXplPTNcIixcbiAgfSk7XG4gIGNvbnN0IHsgZGF0YTogcmVjZW50UG9zdCwgbG9hZGluZzogcmVjZW50TG9hZGluZyB9ID0gdXNlUXVlcnlBcnRpY2xlczx7XG4gICAgbGlzdDogSXRlbVtdO1xuICAgIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgfT4oe1xuICAgIHF1ZXJ5VXJsOiBgYXJ0aWNsZXM/b3JkZXJCeT0ke29yZGVyfSZrZXl3b3JkPSR7a2V5d29yZH1gLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPuyekOycoOqyjOyLnO2MkCAtIO2MkOuLpOuniOy8kzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SXRlbUxpc3ROYXYgLz5cbiAgICAgIHtsaWtlUG9zdCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnaUNvbnRhaW5lcn0+XG4gICAgICAgICAgPEJlc3RQb3N0c0xpc3QgbGlrZVBvc3Q9e2xpa2VQb3N0fSBsaWtlTG9hZGluZz17bGlrZUxvYWRpbmd9IC8+XG4gICAgICAgICAgPEFsbFBvc3RzTGlzdFxuICAgICAgICAgICAgcmVjZW50UG9zdD17cmVjZW50UG9zdH1cbiAgICAgICAgICAgIHNldE9yZGVyPXtzZXRPcmRlcn1cbiAgICAgICAgICAgIHNldEtleXdvcmQ9e3NldEtleXdvcmR9XG4gICAgICAgICAgICByZWNlbnRMb2FkaW5nPXtyZWNlbnRMb2FkaW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3RQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZCIsIkl0ZW1MaXN0TmF2Iiwic3R5bGVzIiwiQmVzdFBvc3RzTGlzdCIsIkFsbFBvc3RzTGlzdCIsInVzZVF1ZXJ5QXJ0aWNsZXMiLCJQb3N0TGlzdFBhZ2UiLCJvcmRlciIsInNldE9yZGVyIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJkYXRhIiwibGlrZVBvc3QiLCJsb2FkaW5nIiwibGlrZUxvYWRpbmciLCJxdWVyeVVybCIsInJlY2VudFBvc3QiLCJyZWNlbnRMb2FkaW5nIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwYWdpQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/boards/index.tsx\n"));

/***/ })

});
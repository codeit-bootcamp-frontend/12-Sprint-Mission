"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/items",{

/***/ "./components/items/AllItemsList.tsx":
/*!*******************************************!*\
  !*** ./components/items/AllItemsList.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_items_productList_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/items/productList.module.css */ \"./styles/items/productList.module.css\");\n/* harmony import */ var _styles_items_productList_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_items_productList_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_assets_images_items_not_found_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/assets/images/items/not_found.png */ \"./public/assets/images/items/not_found.png\");\n/* harmony import */ var _AllItemsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllItemsContainer */ \"./components/items/AllItemsContainer.tsx\");\n/* harmony import */ var _AllItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AllItem */ \"./components/items/AllItem.tsx\");\n/* harmony import */ var _Section2Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Section2Skeleton */ \"./components/items/Section2Skeleton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction EmptyPlaceholder() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_items_productList_module_css__WEBPACK_IMPORTED_MODULE_8___default().emptyList),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: _public_assets_images_items_not_found_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                alt: \"Not Found\"\n            }, void 0, false, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/items/AllItemsList.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"검색 결과가 없습니다\"\n            }, void 0, false, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/items/AllItemsList.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/items/AllItemsList.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = EmptyPlaceholder;\nfunction GeneralItemsList(param) {\n    let { page, setPage, setPageCount, setIsDataCount } = param;\n    _s();\n    const [productContainer, setProductContainer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [loading, setLoading] = useState(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_items_productList_module_css__WEBPACK_IMPORTED_MODULE_8___default().productContents), \" \").concat((_styles_items_productList_module_css__WEBPACK_IMPORTED_MODULE_8___default().generalProduct)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AllItemsContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                setProductContainer: setProductContainer,\n                page: page,\n                setPage: setPage,\n                setPageCount: setPageCount,\n                setIsDataCount: setIsDataCount,\n                setLoading: setLoading\n            }, void 0, false, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/items/AllItemsList.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section2Skeleton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/items/AllItemsList.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_items_productList_module_css__WEBPACK_IMPORTED_MODULE_8___default().productCover),\n                children: [\n                    productContainer.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmptyPlaceholder, {}, void 0, false, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/items/AllItemsList.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 45\n                    }, this),\n                    productContainer.length > 0 && productContainer.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_items_productList_module_css__WEBPACK_IMPORTED_MODULE_8___default().item),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/items/\".concat(item.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AllItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    item: item\n                                }, void 0, false, {\n                                    fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/items/AllItemsList.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/items/AllItemsList.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 19\n                            }, this)\n                        }, item.id, false, {\n                            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/items/AllItemsList.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/items/AllItemsList.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/items/AllItemsList.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(GeneralItemsList, \"nerkRh25F8StcBFOuPxa2A96EUE=\");\n_c1 = GeneralItemsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeneralItemsList);\nvar _c, _c1;\n$RefreshReg$(_c, \"EmptyPlaceholder\");\n$RefreshReg$(_c1, \"GeneralItemsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2l0ZW1zL0FsbEl0ZW1zTGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDSjtBQUNFO0FBQ2dDO0FBQ007QUFDakI7QUFDaEI7QUFFYztBQUVsRCxTQUFTUTtJQUNQLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXUCx1RkFBZ0I7OzBCQUM5Qiw4REFBQ0QsbURBQUtBO2dCQUFDVSxLQUFLUixpRkFBV0E7Z0JBQUVTLEtBQUk7Ozs7OzswQkFDN0IsOERBQUNDOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFHVDtLQVBTTjtBQVNULFNBQVNPLGlCQUFpQixLQUtkO1FBTGMsRUFDeEJDLElBQUksRUFDSkMsT0FBTyxFQUNQQyxZQUFZLEVBQ1pDLGNBQWMsRUFDSixHQUxjOztJQU14QixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdyQiwrQ0FBUUEsQ0FBVSxFQUFFO0lBQ3BFLGdEQUFnRDtJQUVoRCxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVyxHQUE2QlAsT0FBMUJBLDZGQUFzQixFQUFDLEtBQXlCLE9BQXRCQSw0RkFBcUI7OzBCQUNoRSw4REFBQ0UsMERBQWlCQTtnQkFDaEJnQixxQkFBcUJBO2dCQUNyQkwsTUFBTUE7Z0JBQ05DLFNBQVNBO2dCQUNUQyxjQUFjQTtnQkFDZEMsZ0JBQWdCQTtnQkFDaEJLLFlBQVlBOzs7Ozs7WUFFYkMsd0JBQ0MsOERBQUNsQix5REFBZ0JBOzs7O3FDQUVqQiw4REFBQ21CO2dCQUFHaEIsV0FBV1AsMEZBQW1COztvQkFDL0JpQixpQkFBaUJRLE1BQU0sS0FBSyxtQkFBSyw4REFBQ3BCOzs7OztvQkFDbENZLGlCQUFpQlEsTUFBTSxHQUFHLEtBQ3pCUixpQkFBaUJTLEdBQUcsQ0FBQyxDQUFDQzt3QkFDcEIscUJBQ0UsOERBQUNDOzRCQUFpQnJCLFdBQVdQLGtGQUFXO3NDQUN0Qyw0RUFBQ0Ysa0RBQUlBO2dDQUFDK0IsTUFBTSxVQUFrQixPQUFSRixLQUFLRyxFQUFFOzBDQUMzQiw0RUFBQzNCLGdEQUFXQTtvQ0FBQ3dCLE1BQU1BOzs7Ozs7Ozs7OzsyQkFGZEEsS0FBS0csRUFBRTs7Ozs7b0JBTXBCOzs7Ozs7Ozs7Ozs7O0FBS1o7R0F0Q1NsQjtNQUFBQTtBQXdDVCwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaXRlbXMvQWxsSXRlbXNMaXN0LnRzeD9lYzYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9pdGVtcy9wcm9kdWN0TGlzdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgbm90Rm91bmRJbWcgZnJvbSBcIkAvcHVibGljL2Fzc2V0cy9pbWFnZXMvaXRlbXMvbm90X2ZvdW5kLnBuZ1wiO1xuaW1wb3J0IEdlbmVyYWxTZWFyY2hGb3JtIGZyb20gXCIuL0FsbEl0ZW1zQ29udGFpbmVyXCI7XG5pbXBvcnQgR2VuZXJhbEl0ZW0gZnJvbSBcIi4vQWxsSXRlbVwiO1xuaW1wb3J0IHsgSXRlbXNMaXN0LCBQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgU2VjdGlvbjJTa2VsZXRvbiBmcm9tIFwiLi9TZWN0aW9uMlNrZWxldG9uXCI7XG5cbmZ1bmN0aW9uIEVtcHR5UGxhY2Vob2xkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eUxpc3R9PlxuICAgICAgPEltYWdlIHNyYz17bm90Rm91bmRJbWd9IGFsdD1cIk5vdCBGb3VuZFwiIC8+XG4gICAgICA8cD7qsoDsg4kg6rKw6rO86rCAIOyXhuyKteuLiOuLpDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2VuZXJhbEl0ZW1zTGlzdCh7XG4gIHBhZ2UsXG4gIHNldFBhZ2UsXG4gIHNldFBhZ2VDb3VudCxcbiAgc2V0SXNEYXRhQ291bnQsXG59OiBJdGVtc0xpc3QpIHtcbiAgY29uc3QgW3Byb2R1Y3RDb250YWluZXIsIHNldFByb2R1Y3RDb250YWluZXJdID0gdXNlU3RhdGU8UHJvcHNbXT4oW10pO1xuICAvLyBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucHJvZHVjdENvbnRlbnRzfSAke3N0eWxlcy5nZW5lcmFsUHJvZHVjdH1gfT5cbiAgICAgIDxHZW5lcmFsU2VhcmNoRm9ybVxuICAgICAgICBzZXRQcm9kdWN0Q29udGFpbmVyPXtzZXRQcm9kdWN0Q29udGFpbmVyfVxuICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICBzZXRQYWdlPXtzZXRQYWdlfVxuICAgICAgICBzZXRQYWdlQ291bnQ9e3NldFBhZ2VDb3VudH1cbiAgICAgICAgc2V0SXNEYXRhQ291bnQ9e3NldElzRGF0YUNvdW50fVxuICAgICAgICBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfVxuICAgICAgLz5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8U2VjdGlvbjJTa2VsZXRvbiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RDb3Zlcn0+XG4gICAgICAgICAge3Byb2R1Y3RDb250YWluZXIubGVuZ3RoID09PSAwICYmIDxFbXB0eVBsYWNlaG9sZGVyIC8+fVxuICAgICAgICAgIHtwcm9kdWN0Q29udGFpbmVyLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHByb2R1Y3RDb250YWluZXIubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2l0ZW1zLyR7aXRlbS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPEdlbmVyYWxJdGVtIGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhbEl0ZW1zTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJJbWFnZSIsInN0eWxlcyIsIm5vdEZvdW5kSW1nIiwiR2VuZXJhbFNlYXJjaEZvcm0iLCJHZW5lcmFsSXRlbSIsIlNlY3Rpb24yU2tlbGV0b24iLCJFbXB0eVBsYWNlaG9sZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZW1wdHlMaXN0Iiwic3JjIiwiYWx0IiwicCIsIkdlbmVyYWxJdGVtc0xpc3QiLCJwYWdlIiwic2V0UGFnZSIsInNldFBhZ2VDb3VudCIsInNldElzRGF0YUNvdW50IiwicHJvZHVjdENvbnRhaW5lciIsInNldFByb2R1Y3RDb250YWluZXIiLCJwcm9kdWN0Q29udGVudHMiLCJnZW5lcmFsUHJvZHVjdCIsInNldExvYWRpbmciLCJsb2FkaW5nIiwidWwiLCJwcm9kdWN0Q292ZXIiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwibGkiLCJocmVmIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/items/AllItemsList.tsx\n"));

/***/ })

});
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

/***/ "./hook/useQueryBoard.ts":
/*!*******************************!*\
  !*** ./hook/useQueryBoard.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useQueryArticles: function() { return /* binding */ useQueryArticles; }\n/* harmony export */ });\n/* harmony import */ var _pages_api_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pages/api/axiosInstance */ \"./pages/api/axiosInstance.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useQueryArticles = (param)=>{\n    let { queryUrl, disabled = false } = param;\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        const query = async ()=>{\n            try {\n                const response = await _pages_api_axiosInstance__WEBPACK_IMPORTED_MODULE_0__.axiosIntance.get(queryUrl);\n                setData(response.data);\n            } catch (err) {\n                console.error(err);\n            } finally{\n            // setLoading(false);\n            }\n        };\n        if (!disabled) {\n            query();\n        }\n    }, [\n        queryUrl\n    ]);\n    return {\n        data,\n        loading\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rL3VzZVF1ZXJ5Qm9hcmQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5RDtBQUNiO0FBWXJDLE1BQU1HLG1CQUFtQjtRQUFJLEVBQ2xDQyxRQUFRLEVBQ1JDLFdBQVcsS0FBSyxFQUNGO0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFXO0lBQzNDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUlEsV0FBVztRQUNYLE1BQU1DLFFBQVE7WUFDWixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVgsa0VBQVlBLENBQUNZLEdBQUcsQ0FBSVI7Z0JBQzNDRyxRQUFRSSxTQUFTTCxJQUFJO1lBQ3ZCLEVBQUUsT0FBT08sS0FBSztnQkFDWkMsUUFBUUMsS0FBSyxDQUFDRjtZQUNoQixTQUFVO1lBQ1IscUJBQXFCO1lBQ3ZCO1FBQ0Y7UUFFQSxJQUFJLENBQUNSLFVBQVU7WUFDYks7UUFDRjtJQUNGLEdBQUc7UUFBQ047S0FBUztJQUViLE9BQU87UUFBRUU7UUFBTUU7SUFBUTtBQUN6QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2svdXNlUXVlcnlCb2FyZC50cz85MTM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF4aW9zSW50YW5jZSB9IGZyb20gXCJAL3BhZ2VzL2FwaS9heGlvc0luc3RhbmNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgVXNlUXVlcnlQcm9wcyA9IHtcbiAgcXVlcnlVcmw6IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufTtcblxudHlwZSB1c2VRdWVyeVJlc3VsdDxUPiA9IHtcbiAgZGF0YTogVCB8IG51bGw7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgdXNlUXVlcnlBcnRpY2xlcyA9IDxUPih7XG4gIHF1ZXJ5VXJsLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxufTogVXNlUXVlcnlQcm9wcyk6IHVzZVF1ZXJ5UmVzdWx0PFQ+ID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8VCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgcXVlcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW50YW5jZS5nZXQ8VD4ocXVlcnlVcmwpO1xuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIC8vIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBxdWVyeSgpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5VXJsXSk7XG5cbiAgcmV0dXJuIHsgZGF0YSwgbG9hZGluZyB9O1xufTtcbiJdLCJuYW1lcyI6WyJheGlvc0ludGFuY2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVF1ZXJ5QXJ0aWNsZXMiLCJxdWVyeVVybCIsImRpc2FibGVkIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInF1ZXJ5IiwicmVzcG9uc2UiLCJnZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hook/useQueryBoard.ts\n"));

/***/ })

});
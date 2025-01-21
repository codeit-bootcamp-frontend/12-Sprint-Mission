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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useQueryArticles: function() { return /* binding */ useQueryArticles; }\n/* harmony export */ });\n/* harmony import */ var _pages_api_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pages/api/axiosInstance */ \"./pages/api/axiosInstance.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useQueryArticles = (param)=>{\n    let { queryUrl, disabled = false } = param;\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const query = async ()=>{\n            try {\n                const response = await _pages_api_axiosInstance__WEBPACK_IMPORTED_MODULE_0__.axiosIntance.get(queryUrl);\n                setData(response.data);\n            } catch (err) {\n                console.error(err);\n            } finally{\n            // setLoading(false);\n            }\n        };\n        if (!disabled) {\n            query();\n        }\n    }, [\n        queryUrl\n    ]);\n    return {\n        data,\n        loading\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rL3VzZVF1ZXJ5Qm9hcmQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5RDtBQUNiO0FBWXJDLE1BQU1HLG1CQUFtQjtRQUFJLEVBQ2xDQyxRQUFRLEVBQ1JDLFdBQVcsS0FBSyxFQUNGO0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFXO0lBQzNDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxRQUFRO1lBQ1osSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1YLGtFQUFZQSxDQUFDWSxHQUFHLENBQUlSO2dCQUMzQ0csUUFBUUksU0FBU0wsSUFBSTtZQUN2QixFQUFFLE9BQU9PLEtBQUs7Z0JBQ1pDLFFBQVFDLEtBQUssQ0FBQ0Y7WUFDaEIsU0FBVTtZQUNSLHFCQUFxQjtZQUN2QjtRQUNGO1FBRUEsSUFBSSxDQUFDUixVQUFVO1lBQ2JLO1FBQ0Y7SUFDRixHQUFHO1FBQUNOO0tBQVM7SUFFYixPQUFPO1FBQUVFO1FBQU1FO0lBQVE7QUFDekIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rL3VzZVF1ZXJ5Qm9hcmQudHM/OTEzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBheGlvc0ludGFuY2UgfSBmcm9tIFwiQC9wYWdlcy9hcGkvYXhpb3NJbnN0YW5jZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFVzZVF1ZXJ5UHJvcHMgPSB7XG4gIHF1ZXJ5VXJsOiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn07XG5cbnR5cGUgdXNlUXVlcnlSZXN1bHQ8VD4gPSB7XG4gIGRhdGE6IFQgfCBudWxsO1xuICBsb2FkaW5nOiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVF1ZXJ5QXJ0aWNsZXMgPSA8VD4oe1xuICBxdWVyeVVybCxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbn06IFVzZVF1ZXJ5UHJvcHMpOiB1c2VRdWVyeVJlc3VsdDxUPiA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPFQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnRhbmNlLmdldDxUPihxdWVyeVVybCk7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgLy8gc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHF1ZXJ5KCk7XG4gICAgfVxuICB9LCBbcXVlcnlVcmxdKTtcblxuICByZXR1cm4geyBkYXRhLCBsb2FkaW5nIH07XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zSW50YW5jZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUXVlcnlBcnRpY2xlcyIsInF1ZXJ5VXJsIiwiZGlzYWJsZWQiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicXVlcnkiLCJyZXNwb25zZSIsImdldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hook/useQueryBoard.ts\n"));

/***/ })

});
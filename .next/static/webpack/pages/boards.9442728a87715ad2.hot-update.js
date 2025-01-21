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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useQueryArticles: function() { return /* binding */ useQueryArticles; }\n/* harmony export */ });\n/* harmony import */ var _pages_api_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pages/api/axiosInstance */ \"./pages/api/axiosInstance.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useQueryArticles = (param)=>{\n    let { queryUrl, disabled = false } = param;\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const query = async ()=>{\n            try {\n                const response = await _pages_api_axiosInstance__WEBPACK_IMPORTED_MODULE_0__.axiosIntance.get(queryUrl);\n                setData(response.data);\n            } catch (err) {\n                console.error(err);\n            } finally{\n                // setTimeout을 적용하지 않으니 원인 불명으로 Loading 기능이 정상 작동하지 않아 api의 이미지가 불러와지는 동안 레이아웃이 하얗게 보이는 현상이 일어난다. setTimeout을 넣어주니 Loading이 정상 작동 하지만 네트워크 속도가 빠를 때에도 스켈레톤이 무조건 보이게 되어 좋은 방향은 아닌 것 같다..\n                const timer = setTimeout(()=>{\n                    setLoading(false);\n                }, 500);\n                ()=>clearTimeout(timer);\n            }\n        };\n        if (!disabled) {\n            query();\n        }\n    }, [\n        queryUrl\n    ]);\n    return {\n        data,\n        loading\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rL3VzZVF1ZXJ5Qm9hcmQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5RDtBQUNiO0FBWXJDLE1BQU1HLG1CQUFtQjtRQUFJLEVBQ2xDQyxRQUFRLEVBQ1JDLFdBQVcsS0FBSyxFQUNGO0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFXO0lBQzNDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxRQUFRO1lBQ1osSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1YLGtFQUFZQSxDQUFDWSxHQUFHLENBQUlSO2dCQUMzQ0csUUFBUUksU0FBU0wsSUFBSTtZQUN2QixFQUFFLE9BQU9PLEtBQUs7Z0JBQ1pDLFFBQVFDLEtBQUssQ0FBQ0Y7WUFDaEIsU0FBVTtnQkFDUix1TEFBdUw7Z0JBQ3ZMLE1BQU1HLFFBQVFDLFdBQVc7b0JBQ3ZCUixXQUFXO2dCQUNiLEdBQUc7Z0JBRUgsSUFBTVMsYUFBYUY7WUFDckI7UUFDRjtRQUVBLElBQUksQ0FBQ1gsVUFBVTtZQUNiSztRQUNGO0lBQ0YsR0FBRztRQUFDTjtLQUFTO0lBRWIsT0FBTztRQUFFRTtRQUFNRTtJQUFRO0FBQ3pCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9vay91c2VRdWVyeUJvYXJkLnRzPzkxMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXhpb3NJbnRhbmNlIH0gZnJvbSBcIkAvcGFnZXMvYXBpL2F4aW9zSW5zdGFuY2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBVc2VRdWVyeVByb3BzID0ge1xuICBxdWVyeVVybDogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59O1xuXG50eXBlIHVzZVF1ZXJ5UmVzdWx0PFQ+ID0ge1xuICBkYXRhOiBUIHwgbnVsbDtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VRdWVyeUFydGljbGVzID0gPFQ+KHtcbiAgcXVlcnlVcmwsXG4gIGRpc2FibGVkID0gZmFsc2UsXG59OiBVc2VRdWVyeVByb3BzKTogdXNlUXVlcnlSZXN1bHQ8VD4gPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxUIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW50YW5jZS5nZXQ8VD4ocXVlcnlVcmwpO1xuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIC8vIHNldFRpbWVvdXTsnYQg7KCB7Jqp7ZWY7KeAIOyViuycvOuLiCDsm5Dsnbgg67aI66qF7Jy866GcIExvYWRpbmcg6riw64ql7J20IOygleyDgSDsnpHrj5ntlZjsp4Ag7JWK7JWEIGFwaeydmCDsnbTrr7jsp4DqsIAg67aI65+s7JmA7KeA64qUIOuPmeyViCDroIjsnbTslYTsm4PsnbQg7ZWY7JaX6rKMIOuztOydtOuKlCDtmITsg4HsnbQg7J287Ja064Kc64ukLiBzZXRUaW1lb3V07J2EIOuEo+yWtOyjvOuLiCBMb2FkaW5n7J20IOygleyDgSDsnpHrj5kg7ZWY7KeA66eMIOuEpO2KuOybjO2BrCDsho3rj4TqsIAg67mg66W8IOuVjOyXkOuPhCDsiqTsvIjroIjthqTsnbQg66y07KGw6rG0IOuztOydtOqyjCDrkJjslrQg7KKL7J2AIOuwqe2WpeydgCDslYTri4wg6rKDIOqwmeuLpC4uXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgcXVlcnkoKTtcbiAgICB9XG4gIH0sIFtxdWVyeVVybF0pO1xuXG4gIHJldHVybiB7IGRhdGEsIGxvYWRpbmcgfTtcbn07XG4iXSwibmFtZXMiOlsiYXhpb3NJbnRhbmNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VRdWVyeUFydGljbGVzIiwicXVlcnlVcmwiLCJkaXNhYmxlZCIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJxdWVyeSIsInJlc3BvbnNlIiwiZ2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hook/useQueryBoard.ts\n"));

/***/ })

});
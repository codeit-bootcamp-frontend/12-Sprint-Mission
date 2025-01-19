"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/items/[id]",{

/***/ "./pages/api/api.tsx":
/*!***************************!*\
  !*** ./pages/api/api.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCnomments: function() { return /* binding */ getCnomments; },\n/* harmony export */   getProductData: function() { return /* binding */ getProductData; },\n/* harmony export */   getProductId: function() { return /* binding */ getProductId; }\n/* harmony export */ });\nconst BASE_URL = \"https://panda-market-api.vercel.app\";\n// 베스트/전체 상품 리스트\nasync function getProductData() {\n    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    const query = new URLSearchParams(params).toString();\n    const response = await fetch(\"\".concat(BASE_URL, \"/products?\").concat(query));\n    if (!response.ok) {\n        throw new Error(\"상품을 불러오는 데 실패했습니다.\");\n    }\n    const body = await response.json();\n    return body;\n}\n// 디테일 상품 정보\nasync function getProductId(productId, setProductData, setLoading) {\n    const response = await fetch(\"\".concat(BASE_URL, \"/products/\").concat(productId));\n    try {\n        const body = await response.json();\n        setProductData(body);\n    } catch (error) {\n        console.log(error);\n    }\n    if (!response.ok) {\n        throw new Error(\"정보를 불러오는 데 실패했습니다.\");\n    }\n    setLoading(false);\n}\n// 디테일 댓글\nasync function getCnomments(productId, setCommentsData) {\n    const response = await fetch(\"\".concat(BASE_URL, \"/products/\").concat(productId, \"/comments?limit=10\"));\n    try {\n        const body = await response.json();\n        setCommentsData(body);\n    } catch (error) {\n        console.log(error);\n    }\n    if (!response.ok) {\n        throw new Error(\"정보를 불러오는 데 실패했습니다.\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXBpLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxNQUFNQSxXQUFXO0FBRWpCLGdCQUFnQjtBQUNULGVBQWVDO1FBQWVDLFNBQUFBLGlFQUFTLENBQUM7SUFDN0MsTUFBTUMsUUFBUSxJQUFJQyxnQkFBZ0JGLFFBQVFHLFFBQVE7SUFDbEQsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQXdCSixPQUFyQkgsVUFBUyxjQUFrQixPQUFORztJQUVyRCxJQUFJLENBQUNHLFNBQVNFLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7SUFDaEMsT0FBT0Q7QUFDVDtBQUVBLFlBQVk7QUFDTCxlQUFlRSxhQUNwQkMsU0FBNEIsRUFDNUJDLGNBRUMsRUFDREMsVUFBeUQ7SUFFekQsTUFBTVQsV0FBVyxNQUFNQyxNQUFNLEdBQXdCTSxPQUFyQmIsVUFBUyxjQUFzQixPQUFWYTtJQUVyRCxJQUFJO1FBQ0YsTUFBTUgsT0FBTyxNQUFNSixTQUFTSyxJQUFJO1FBQ2hDRyxlQUFlSjtJQUNqQixFQUFFLE9BQU9NLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0lBRUEsSUFBSSxDQUFDVixTQUFTRSxFQUFFLEVBQUU7UUFDaEIsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBRUFNLFdBQVc7QUFDYjtBQUVBLFNBQVM7QUFDRixlQUFlSSxhQUNwQk4sU0FBNEIsRUFDNUJPLGVBRUM7SUFFRCxNQUFNZCxXQUFXLE1BQU1DLE1BQ3JCLEdBQXdCTSxPQUFyQmIsVUFBUyxjQUFzQixPQUFWYSxXQUFVO0lBRXBDLElBQUk7UUFDRixNQUFNSCxPQUFPLE1BQU1KLFNBQVNLLElBQUk7UUFDaENTLGdCQUFnQlY7SUFDbEIsRUFBRSxPQUFPTSxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtJQUVBLElBQUksQ0FBQ1YsU0FBU0UsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS9hcGkudHN4PzkyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWVudERhdGFQcm9wcywgUHJvZHVjdERhdGFQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9wYW5kYS1tYXJrZXQtYXBpLnZlcmNlbC5hcHBcIjtcblxuLy8g67Kg7Iqk7Yq4L+yghOyytCDsg4Htkogg66as7Iqk7Yq4XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdERhdGEocGFyYW1zID0ge30pIHtcbiAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vcHJvZHVjdHM/JHtxdWVyeX1gKTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwi7IOB7ZKI7J2EIOu2iOufrOyYpOuKlCDrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukLlwiKTtcbiAgfVxuICBjb25zdCBib2R5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gYm9keTtcbn1cblxuLy8g65SU7YWM7J28IOyDge2SiCDsoJXrs7RcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0SWQoXG4gIHByb2R1Y3RJZDogc3RyaW5nIHwgc3RyaW5nW10sXG4gIHNldFByb2R1Y3REYXRhOiBSZWFjdC5EaXNwYXRjaDxcbiAgICBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxQcm9kdWN0RGF0YVByb3BzIHwgdW5kZWZpbmVkPlxuICA+LFxuICBzZXRMb2FkaW5nOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj5cbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9wcm9kdWN0cy8ke3Byb2R1Y3RJZH1gKTtcblxuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0UHJvZHVjdERhdGEoYm9keSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuygleuztOulvCDrtojrn6zsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpC5cIik7XG4gIH1cblxuICBzZXRMb2FkaW5nKGZhbHNlKTtcbn1cblxuLy8g65SU7YWM7J28IOuMk+q4gFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENub21tZW50cyhcbiAgcHJvZHVjdElkOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgc2V0Q29tbWVudHNEYXRhOiBSZWFjdC5EaXNwYXRjaDxcbiAgICBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxDb21tZW50RGF0YVByb3BzIHwgdW5kZWZpbmVkPlxuICA+XG4pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtCQVNFX1VSTH0vcHJvZHVjdHMvJHtwcm9kdWN0SWR9L2NvbW1lbnRzP2xpbWl0PTEwYFxuICApO1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0Q29tbWVudHNEYXRhKGJvZHkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCLsoJXrs7Trpbwg67aI65+s7Jik64qUIOuNsCDsi6TtjKjtlojsirXri4jri6QuXCIpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJnZXRQcm9kdWN0RGF0YSIsInBhcmFtcyIsInF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImJvZHkiLCJqc29uIiwiZ2V0UHJvZHVjdElkIiwicHJvZHVjdElkIiwic2V0UHJvZHVjdERhdGEiLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q25vbW1lbnRzIiwic2V0Q29tbWVudHNEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/api.tsx\n"));

/***/ })

});
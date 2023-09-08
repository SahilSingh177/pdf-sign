"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction RedirectPage() {\n    return;\n}\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)(context);\n    if (!session?.user?.email) {\n        return {\n            redirect: {\n                permanent: false,\n                destination: \"/login\"\n            }\n        };\n    }\n    return {\n        redirect: {\n            permanent: false,\n            destination: \"/dashboard\"\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedirectPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM2QztBQUU3QyxTQUFTQyxlQUFlO0lBQ3RCO0FBQ0Y7QUFFTyxlQUFlQyxtQkFBbUJDLE9BQXdCLEVBQUU7SUFDakUsTUFBTUMsVUFBVSxNQUFNSiwyREFBVUEsQ0FBQ0c7SUFFakMsSUFBSSxDQUFDQyxTQUFTQyxNQUFNQyxPQUFPO1FBQ3pCLE9BQU87WUFBRUMsVUFBVTtnQkFBRUMsV0FBVyxLQUFLO2dCQUFFQyxhQUFhO1lBQVM7UUFBRTtJQUNqRSxDQUFDO0lBRUQsT0FBTztRQUFFRixVQUFVO1lBQUVDLFdBQVcsS0FBSztZQUFFQyxhQUFhO1FBQWE7SUFBRTtBQUNyRSxDQUFDO0FBRUQsaUVBQWVSLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZG9jdW1lbnNvL3dlYi8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5mdW5jdGlvbiBSZWRpcmVjdFBhZ2UoKSB7XG4gIHJldHVybjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBOZXh0UGFnZUNvbnRleHQpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XG5cbiAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xuICAgIHJldHVybiB7IHJlZGlyZWN0OiB7IHBlcm1hbmVudDogZmFsc2UsIGRlc3RpbmF0aW9uOiBcIi9sb2dpblwiIH0gfTtcbiAgfVxuXG4gIHJldHVybiB7IHJlZGlyZWN0OiB7IHBlcm1hbmVudDogZmFsc2UsIGRlc3RpbmF0aW9uOiBcIi9kYXNoYm9hcmRcIiB9IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0UGFnZTtcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiUmVkaXJlY3RQYWdlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJyZWRpcmVjdCIsInBlcm1hbmVudCIsImRlc3RpbmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
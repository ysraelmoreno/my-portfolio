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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/ModalContext.tsx":
/*!**************************************!*\
  !*** ./src/context/ModalContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalProvider\": () => (/* binding */ ModalProvider),\n/* harmony export */   \"useModal\": () => (/* binding */ useModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n});\nfunction ModalProvider({ children  }) {\n    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ModalContext.Provider, {\n        value: {\n            isOpen,\n            setIsOpen\n        },\n        __source: {\n            fileName: \"/home/ysraelmoreno/Documents/codes/projects/my-portfolio/src/context/ModalContext.tsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: this,\n        children: children\n    }));\n}\nfunction useModal() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalContext);\n    if (!context) {\n        throw new Error(\"useModal must be used within a ModalProvider\");\n    }\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Nb2RhbENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkQ7QUFXM0QsS0FBSyxDQUFDRyxZQUFZLGlCQUFHSCxvREFBYSxDQUFvQixDQUFDO0FBQUEsQ0FBQztBQUVqRCxTQUFTSSxhQUFhLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQXFCLENBQUMsRUFBRSxDQUFDO0lBQy9ELEtBQUssTUFBRUMsTUFBTSxNQUFFQyxTQUFTLE1BQUlMLCtDQUFRLENBQUMsS0FBSztJQUUxQyxNQUFNLHNFQUNIQyxZQUFZLENBQUNLLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFBQ0gsTUFBTTtZQUFFQyxTQUFTO1FBQUMsQ0FBQzs7Ozs7OztrQkFDaERGLFFBQVE7O0FBR2YsQ0FBQztBQUVNLFNBQVNLLFFBQVEsR0FBRyxDQUFDO0lBQzFCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHVixpREFBVSxDQUFDRSxZQUFZO0lBRXZDLEVBQUUsR0FBR1EsT0FBTyxFQUFFLENBQUM7UUFDYixLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBOEM7SUFDaEUsQ0FBQztJQUVELE1BQU0sQ0FBQ0QsT0FBTztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vc3JjL2NvbnRleHQvTW9kYWxDb250ZXh0LnRzeD82NzE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBNb2RhbENvbnRleHRQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgc2V0SXNPcGVuOiAoaXNPcGVuOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgTW9kYWxQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgTW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxNb2RhbENvbnRleHRQcm9wcz4oe30gYXMgTW9kYWxDb250ZXh0UHJvcHMpO1xuXG5leHBvcnQgZnVuY3Rpb24gTW9kYWxQcm92aWRlcih7IGNoaWxkcmVuIH06IE1vZGFsUHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpc09wZW4sIHNldElzT3BlbiB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1vZGFsKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVzZU1vZGFsIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBNb2RhbFByb3ZpZGVyXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIk1vZGFsQ29udGV4dCIsIk1vZGFsUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzT3BlbiIsInNldElzT3BlbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VNb2RhbCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/ModalContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ModalContext */ \"./src/context/ModalContext.tsx\");\n\n\n\nconst auth = `Bearer ${\"fdc61137f30c25e6f0b37f4b659cb0\"}`;\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    uri: \"https://graphql.datocms.com/\" || 0,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache(),\n    headers: {\n        Authorization: auth\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: client,\n        __source: {\n            fileName: \"/home/ysraelmoreno/Documents/codes/projects/my-portfolio/src/pages/_app.tsx\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_ModalContext__WEBPACK_IMPORTED_MODULE_2__.ModalProvider, {\n            __source: {\n                fileName: \"/home/ysraelmoreno/Documents/codes/projects/my-portfolio/src/pages/_app.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/home/ysraelmoreno/Documents/codes/projects/my-portfolio/src/pages/_app.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                },\n                __self: this\n            })\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM0RTtBQUNyQjtBQUN2RCxLQUFLLENBQUNJLElBQUksSUFBSSxPQUFPLEVBQUVDLGdDQUFrQztBQUV6RCxLQUFLLENBQUNHLE1BQU0sR0FBRyxHQUFHLENBQUNSLHdEQUFZLENBQUMsQ0FBQztJQUMvQlMsR0FBRyxFQUFFSiw4QkFBZ0MsSUFBSSxDQUFFO0lBQzNDTSxLQUFLLEVBQUUsR0FBRyxDQUFDVix5REFBYTtJQUN4QlcsT0FBTyxFQUFFLENBQUM7UUFDUkMsYUFBYSxFQUFFVCxJQUFJO0lBQ3JCLENBQUM7QUFDSCxDQUFDO1NBRVFVLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELE1BQU0sc0VBQ0hkLDBEQUFjO1FBQUNNLE1BQU0sRUFBRUEsTUFBTTs7Ozs7Ozt1RkFDM0JMLGdFQUFhOzs7Ozs7OzJGQUNYWSxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBSWhDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IE1vZGFsUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9Nb2RhbENvbnRleHRcIjtcbmNvbnN0IGF1dGggPSBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREFUT19UT0tFTn1gO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgdXJpOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19EQVRPX1VSTCB8fCBcIlwiLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgaGVhZGVyczoge1xuICAgIEF1dGhvcml6YXRpb246IGF1dGgsXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8TW9kYWxQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Nb2RhbFByb3ZpZGVyPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+IFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiQXBvbGxvUHJvdmlkZXIiLCJNb2RhbFByb3ZpZGVyIiwiYXV0aCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19EQVRPX1RPS0VOIiwiY2xpZW50IiwidXJpIiwiTkVYVF9QVUJMSUNfREFUT19VUkwiLCJjYWNoZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
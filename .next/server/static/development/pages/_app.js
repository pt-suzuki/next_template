module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/scroll_to_top_helper.tsx":
/*!**********************************************!*\
  !*** ./src/helpers/scroll_to_top_helper.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const ScrollToTop = () => {
  const pathname = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])().pathname;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollToTop);

/***/ }),

/***/ "./src/modules/states/index.ts":
/*!*************************************!*\
  !*** ./src/modules/states/index.ts ***!
  \*************************************/
/*! exports provided: actions, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/user */ "./src/modules/states/slices/user.ts");
/* harmony import */ var _slices_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/message */ "./src/modules/states/slices/message.ts");



const actions = {
  userSlice: _slices_user__WEBPACK_IMPORTED_MODULE_1__["userSlice"].actions,
  messageSlice: _slices_message__WEBPACK_IMPORTED_MODULE_2__["messageSlice"].actions
};
const reducer = {
  currentUser: _slices_user__WEBPACK_IMPORTED_MODULE_1__["userSlice"].reducer,
  message: _slices_message__WEBPACK_IMPORTED_MODULE_2__["messageSlice"].reducer
};
const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer,
  // non-serializable valueのconsole errorが発生するため、シリアライズチェックをスキップして暫定対応
  // <https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data>
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['currentUser/mutateCurrentUser']
    }
  })
});

/***/ }),

/***/ "./src/modules/states/slices/message.ts":
/*!**********************************************!*\
  !*** ./src/modules/states/slices/message.ts ***!
  \**********************************************/
/*! exports provided: messageSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageSlice", function() { return messageSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initMessageList = {
  messageList: []
};
let sequence = 0;
const messageSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'messageList',
  initialState: initMessageList,
  reducers: {
    addMessage: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
      messageList: [...state.messageList, _objectSpread(_objectSpread({}, action.payload), {}, {
        id: sequence++
      })]
    }),
    removeMessage: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
      messageList: state.messageList.filter(message => message.id !== action.payload.id)
    })
  }
});

/***/ }),

/***/ "./src/modules/states/slices/user.ts":
/*!*******************************************!*\
  !*** ./src/modules/states/slices/user.ts ***!
  \*******************************************/
/*! exports provided: userSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSlice", function() { return userSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initCurrentUser = {
  currentUser: undefined
};
const userSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'currentUser',
  initialState: initCurrentUser,
  reducers: {
    mutateCurrentUser: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
      currentUser: action.payload
    })
  }
});

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/modules/states */ "./src/modules/states/index.ts");
/* harmony import */ var _helpers_scroll_to_top_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/helpers/scroll_to_top_helper */ "./src/helpers/scroll_to_top_helper.tsx");
var _jsxFileName = "/Users/suzukitakuya/workspace/front/next_template/src/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"]`
  body {
    background-color: #efede8;
    color: #252525;
    font-family: "-apple-system", BlinkMacSystemFont, "Helvetica Neue", "ヒラギノ角ゴ ProN", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  }
  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }
`;

const App = ({
  Component,
  pageProps
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {//accessLogUseCase.accessLog({ path: location.pathname });
    // NOTE: パス変更をフックにアクセスログを送信する
    // 送信するパスは/pc以下のフルパスである必要があるためlocation.pathnameを使用している
    // ただし、locationをフックには使用できないのでrouterをフックに使用している
  }, [router.basePath, router.pathname, router.query]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_helpers_scroll_to_top_helper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width,height=device-height",
    key: "viewport",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "NextExample")), __jsx(GlobalStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: _modules_states__WEBPACK_IMPORTED_MODULE_5__["store"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvc2Nyb2xsX3RvX3RvcF9oZWxwZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3N0YXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zdGF0ZXMvc2xpY2VzL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc3RhdGVzL3NsaWNlcy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJTY3JvbGxUb1RvcCIsInBhdGhuYW1lIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImFjdGlvbnMiLCJ1c2VyU2xpY2UiLCJtZXNzYWdlU2xpY2UiLCJyZWR1Y2VyIiwiY3VycmVudFVzZXIiLCJtZXNzYWdlIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIiwiaWdub3JlZEFjdGlvbnMiLCJpbml0TWVzc2FnZUxpc3QiLCJtZXNzYWdlTGlzdCIsInNlcXVlbmNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJhZGRNZXNzYWdlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiaWQiLCJyZW1vdmVNZXNzYWdlIiwiZmlsdGVyIiwiaW5pdEN1cnJlbnRVc2VyIiwidW5kZWZpbmVkIiwibXV0YXRlQ3VycmVudFVzZXIiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiYmFzZVBhdGgiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxXQUFxQixHQUFHLE1BQU07QUFDbEMsUUFBTUMsUUFBUSxHQUFHQyw2REFBUyxHQUFHRCxRQUE3QjtBQUNBRSw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLE1BQU07QUFDcEJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtB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QUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHlDQUE5QjtBQUF3RSxPQUFHLEVBQUMsVUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixDQUZGLEVBTUUsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUU5QixxREFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUFlMkIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FQRixDQURGO0FBYUQsQ0F0QkQ7O0FBd0JlRixrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNjcm9sbFRvVG9wOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VSb3V0ZXIoKS5wYXRobmFtZTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH0sIFtwYXRobmFtZV0pO1xuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9Ub3A7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgdXNlclNsaWNlLCBDdXJyZW50VXNlclN0YXRlIH0gZnJvbSAnLi9zbGljZXMvdXNlcic7XG5pbXBvcnQgeyBtZXNzYWdlU2xpY2UsIE1lc3NhZ2VTdGF0ZSB9IGZyb20gJy4vc2xpY2VzL21lc3NhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyU3RhdGU7XG4gIG1lc3NhZ2U6IE1lc3NhZ2VTdGF0ZTtcbn1cblxuaW50ZXJmYWNlIEFjdGlvbnMge1xuICB1c2VyU2xpY2U6IHR5cGVvZiB1c2VyU2xpY2UuYWN0aW9ucztcbiAgbWVzc2FnZVNsaWNlOiB0eXBlb2YgbWVzc2FnZVNsaWNlLmFjdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25zOiBBY3Rpb25zID0ge1xuICB1c2VyU2xpY2U6IHVzZXJTbGljZS5hY3Rpb25zLFxuICBtZXNzYWdlU2xpY2U6IG1lc3NhZ2VTbGljZS5hY3Rpb25zLFxufTtcblxuaW50ZXJmYWNlIFJlZHVjZXIge1xuICBjdXJyZW50VXNlcjogdHlwZW9mIHVzZXJTbGljZS5yZWR1Y2VyO1xuICBtZXNzYWdlOiB0eXBlb2YgbWVzc2FnZVNsaWNlLnJlZHVjZXI7XG59XG5cbmNvbnN0IHJlZHVjZXI6IFJlZHVjZXIgPSB7XG4gIGN1cnJlbnRVc2VyOiB1c2VyU2xpY2UucmVkdWNlcixcbiAgbWVzc2FnZTogbWVzc2FnZVNsaWNlLnJlZHVjZXIsXG59O1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXIsXG4gIC8vIG5vbi1zZXJpYWxpemFibGUgdmFsdWXjga5jb25zb2xlIGVycm9y44GM55m655Sf44GZ44KL44Gf44KB44CB44K344Oq44Ki44Op44Kk44K644OB44Kn44OD44Kv44KS44K544Kt44OD44OX44GX44Gm5pqr5a6a5a++5b+cXG4gIC8vIDxodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL3VzYWdlL3VzYWdlLWd1aWRlI3dvcmtpbmctd2l0aC1ub24tc2VyaWFsaXphYmxlLWRhdGE+XG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cbiAgICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XG4gICAgICBzZXJpYWxpemFibGVDaGVjazoge1xuICAgICAgICBpZ25vcmVkQWN0aW9uczogW1xuICAgICAgICAgICdjdXJyZW50VXNlci9tdXRhdGVDdXJyZW50VXNlcicsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5leHBvcnQgdHlwZSBNZXNzYWdlID0ge1xuICBpZD86IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0eXBlOiAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ25vdGljZScgfCAnaW5mbyc7XG4gIG9wdGlvbnM/OiB7XG4gICAgbGlua1JlbD86IHN0cmluZztcbiAgICBsaW5rVGFyZ2V0Pzogc3RyaW5nO1xuICAgIGxpbmtUaXRsZT86IHN0cmluZztcbiAgICBsaW5rVXJsPzogc3RyaW5nO1xuICAgIG9uTGlua0NsaWNrPzogKCkgPT4gdW5rbm93bjtcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIE1lc3NhZ2VTdGF0ZSA9IHtcbiAgbWVzc2FnZUxpc3Q6IE1lc3NhZ2VbXTtcbn07XG5cbmNvbnN0IGluaXRNZXNzYWdlTGlzdDogTWVzc2FnZVN0YXRlID0ge1xuICBtZXNzYWdlTGlzdDogW10sXG59O1xubGV0IHNlcXVlbmNlID0gMDtcbmV4cG9ydCBjb25zdCBtZXNzYWdlU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdtZXNzYWdlTGlzdCcsXG4gIGluaXRpYWxTdGF0ZTogaW5pdE1lc3NhZ2VMaXN0LFxuICByZWR1Y2Vyczoge1xuICAgIGFkZE1lc3NhZ2U6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPE1lc3NhZ2U+KSA9PiAoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBtZXNzYWdlTGlzdDogWy4uLnN0YXRlLm1lc3NhZ2VMaXN0LCB7IC4uLmFjdGlvbi5wYXlsb2FkLCBpZDogc2VxdWVuY2UrKyB9XSxcbiAgICB9KSxcbiAgICByZW1vdmVNZXNzYWdlOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxNZXNzYWdlPikgPT4gKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbWVzc2FnZUxpc3Q6IHN0YXRlLm1lc3NhZ2VMaXN0LmZpbHRlcigobWVzc2FnZSkgPT4gbWVzc2FnZS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpLFxuICAgIH0pLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ34vbW9kdWxlcy9kb21haW5zL3VzZXIvdXNlcic7XG5cbmV4cG9ydCB0eXBlIEN1cnJlbnRVc2VyU3RhdGUgPSB7XG4gIGN1cnJlbnRVc2VyPzogVXNlcjtcbn07XG5cbmNvbnN0IGluaXRDdXJyZW50VXNlcjogQ3VycmVudFVzZXJTdGF0ZSA9IHtcbiAgY3VycmVudFVzZXI6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdjdXJyZW50VXNlcicsXG4gIGluaXRpYWxTdGF0ZTogaW5pdEN1cnJlbnRVc2VyLFxuICByZWR1Y2Vyczoge1xuICAgIG11dGF0ZUN1cnJlbnRVc2VyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxDdXJyZW50VXNlclN0YXRlWydjdXJyZW50VXNlciddPikgPT4gKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgY3VycmVudFVzZXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgIH0pLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICd+L21vZHVsZXMvc3RhdGVzJztcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwifi9oZWxwZXJzL3Njcm9sbF90b190b3BfaGVscGVyXCI7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVkZTg7XG4gICAgY29sb3I6ICMyNTI1MjU7XG4gICAgZm9udC1mYW1pbHk6IFwiLWFwcGxlLXN5c3RlbVwiLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCLjg5Ljg6njgq7jg47op5LjgrQgUHJvTlwiLCBIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9OLCBBcmlhbCwgXCLjg6HjgqTjg6rjgqpcIiwgTWVpcnlvLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5qcy1mb2N1cy12aXNpYmxlIDpmb2N1czpub3QoLmZvY3VzLXZpc2libGUpIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy9hY2Nlc3NMb2dVc2VDYXNlLmFjY2Vzc0xvZyh7IHBhdGg6IGxvY2F0aW9uLnBhdGhuYW1lIH0pO1xuICAgIC8vIE5PVEU6IOODkeOCueWkieabtOOCkuODleODg+OCr+OBq+OCouOCr+OCu+OCueODreOCsOOCkumAgeS/oeOBmeOCi1xuICAgIC8vIOmAgeS/oeOBmeOCi+ODkeOCueOBry9wY+S7peS4i+OBruODleODq+ODkeOCueOBp+OBguOCi+W/heimgeOBjOOBguOCi+OBn+OCgWxvY2F0aW9uLnBhdGhuYW1l44KS5L2/55So44GX44Gm44GE44KLXG4gICAgLy8g44Gf44Gg44GX44CBbG9jYXRpb27jgpLjg5Xjg4Pjgq/jgavjga/kvb/nlKjjgafjgY3jgarjgYTjga7jgadyb3V0ZXLjgpLjg5Xjg4Pjgq/jgavkvb/nlKjjgZfjgabjgYTjgotcbiAgfSwgW3JvdXRlci5iYXNlUGF0aCwgcm91dGVyLnBhdGhuYW1lLCByb3V0ZXIucXVlcnldKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2Nyb2xsVG9Ub3AgLz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGhlaWdodD1kZXZpY2UtaGVpZ2h0XCIga2V5PVwidmlld3BvcnRcIiAvPlxuICAgICAgICA8dGl0bGU+TmV4dEV4YW1wbGU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9
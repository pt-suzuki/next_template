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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];







const GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(["body{background-color:#efede8;color:#252525;font-family:\"-apple-system\",BlinkMacSystemFont,\"Helvetica Neue\",\"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN\",Hiragino Kaku Gothic ProN,Arial,\"\u30E1\u30A4\u30EA\u30AA\",Meiryo,sans-serif;}.js-focus-visible :focus:not(.focus-visible){outline:none;}"]);

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_helpers_scroll_to_top_helper__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
    name: "viewport",
    content: "width=device-width,height=device-height",
    key: "viewport"
  }), __jsx("title", null, "NextExample")), __jsx(GlobalStyle, null), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: _modules_states__WEBPACK_IMPORTED_MODULE_5__["store"]
  }, __jsx(Component, pageProps)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvc2Nyb2xsX3RvX3RvcF9oZWxwZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3N0YXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zdGF0ZXMvc2xpY2VzL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc3RhdGVzL3NsaWNlcy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJTY3JvbGxUb1RvcCIsInBhdGhuYW1lIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImFjdGlvbnMiLCJ1c2VyU2xpY2UiLCJtZXNzYWdlU2xpY2UiLCJyZWR1Y2VyIiwiY3VycmVudFVzZXIiLCJtZXNzYWdlIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIiwiaWdub3JlZEFjdGlvbnMiLCJpbml0TWVzc2FnZUxpc3QiLCJtZXNzYWdlTGlzdCIsInNlcXVlbmNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJhZGRNZXNzYWdlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiaWQiLCJyZW1vdmVNZXNzYWdlIiwiZmlsdGVyIiwiaW5pdEN1cnJlbnRVc2VyIiwidW5kZWZpbmVkIiwibXV0YXRlQ3VycmVudFVzZXIiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiYmFzZVBhdGgiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxXQUFxQixHQUFHLE1BQU07QUFDbEMsUUFBTUMsUUFBUSxHQUFHQyw2REFBUyxHQUFHRCxRQUE3QjtBQUNBRSw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLE1BQU07QUFDcEJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtB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RSxJQURGLEVBRUUsbUNBRkYsQ0FGRixFQU1FLE1BQUMsV0FBRCxPQU5GLEVBT0UsTUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRTlCLHFEQUFLQTtBQUF0QixLQUNFLE1BQUMsU0FBRCxFQUFlMkIsU0FBZixDQURGLENBUEYsQ0FERjtBQWFELENBdEJEOztBQXdCZUYsa0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0EsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTY3JvbGxUb1RvcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUm91dGVyKCkucGF0aG5hbWU7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9LCBbcGF0aG5hbWVdKTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRvVG9wO1xuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IHVzZXJTbGljZSwgQ3VycmVudFVzZXJTdGF0ZSB9IGZyb20gJy4vc2xpY2VzL3VzZXInO1xuaW1wb3J0IHsgbWVzc2FnZVNsaWNlLCBNZXNzYWdlU3RhdGUgfSBmcm9tICcuL3NsaWNlcy9tZXNzYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlclN0YXRlO1xuICBtZXNzYWdlOiBNZXNzYWdlU3RhdGU7XG59XG5cbmludGVyZmFjZSBBY3Rpb25zIHtcbiAgdXNlclNsaWNlOiB0eXBlb2YgdXNlclNsaWNlLmFjdGlvbnM7XG4gIG1lc3NhZ2VTbGljZTogdHlwZW9mIG1lc3NhZ2VTbGljZS5hY3Rpb25zO1xufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uczogQWN0aW9ucyA9IHtcbiAgdXNlclNsaWNlOiB1c2VyU2xpY2UuYWN0aW9ucyxcbiAgbWVzc2FnZVNsaWNlOiBtZXNzYWdlU2xpY2UuYWN0aW9ucyxcbn07XG5cbmludGVyZmFjZSBSZWR1Y2VyIHtcbiAgY3VycmVudFVzZXI6IHR5cGVvZiB1c2VyU2xpY2UucmVkdWNlcjtcbiAgbWVzc2FnZTogdHlwZW9mIG1lc3NhZ2VTbGljZS5yZWR1Y2VyO1xufVxuXG5jb25zdCByZWR1Y2VyOiBSZWR1Y2VyID0ge1xuICBjdXJyZW50VXNlcjogdXNlclNsaWNlLnJlZHVjZXIsXG4gIG1lc3NhZ2U6IG1lc3NhZ2VTbGljZS5yZWR1Y2VyLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyLFxuICAvLyBub24tc2VyaWFsaXphYmxlIHZhbHVl44GuY29uc29sZSBlcnJvcuOBjOeZuueUn+OBmeOCi+OBn+OCgeOAgeOCt+ODquOCouODqeOCpOOCuuODgeOCp+ODg+OCr+OCkuOCueOCreODg+ODl+OBl+OBpuaaq+WumuWvvuW/nFxuICAvLyA8aHR0cHM6Ly9yZWR1eC10b29sa2l0LmpzLm9yZy91c2FnZS91c2FnZS1ndWlkZSN3b3JraW5nLXdpdGgtbm9uLXNlcmlhbGl6YWJsZS1kYXRhPlxuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XG4gICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoe1xuICAgICAgc2VyaWFsaXphYmxlQ2hlY2s6IHtcbiAgICAgICAgaWdub3JlZEFjdGlvbnM6IFtcbiAgICAgICAgICAnY3VycmVudFVzZXIvbXV0YXRlQ3VycmVudFVzZXInLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuZXhwb3J0IHR5cGUgTWVzc2FnZSA9IHtcbiAgaWQ/OiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICdub3RpY2UnIHwgJ2luZm8nO1xuICBvcHRpb25zPzoge1xuICAgIGxpbmtSZWw/OiBzdHJpbmc7XG4gICAgbGlua1RhcmdldD86IHN0cmluZztcbiAgICBsaW5rVGl0bGU/OiBzdHJpbmc7XG4gICAgbGlua1VybD86IHN0cmluZztcbiAgICBvbkxpbmtDbGljaz86ICgpID0+IHVua25vd247XG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSBNZXNzYWdlU3RhdGUgPSB7XG4gIG1lc3NhZ2VMaXN0OiBNZXNzYWdlW107XG59O1xuXG5jb25zdCBpbml0TWVzc2FnZUxpc3Q6IE1lc3NhZ2VTdGF0ZSA9IHtcbiAgbWVzc2FnZUxpc3Q6IFtdLFxufTtcbmxldCBzZXF1ZW5jZSA9IDA7XG5leHBvcnQgY29uc3QgbWVzc2FnZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnbWVzc2FnZUxpc3QnLFxuICBpbml0aWFsU3RhdGU6IGluaXRNZXNzYWdlTGlzdCxcbiAgcmVkdWNlcnM6IHtcbiAgICBhZGRNZXNzYWdlOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxNZXNzYWdlPikgPT4gKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbWVzc2FnZUxpc3Q6IFsuLi5zdGF0ZS5tZXNzYWdlTGlzdCwgeyAuLi5hY3Rpb24ucGF5bG9hZCwgaWQ6IHNlcXVlbmNlKysgfV0sXG4gICAgfSksXG4gICAgcmVtb3ZlTWVzc2FnZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248TWVzc2FnZT4pID0+ICh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG1lc3NhZ2VMaXN0OiBzdGF0ZS5tZXNzYWdlTGlzdC5maWx0ZXIoKG1lc3NhZ2UpID0+IG1lc3NhZ2UuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKSxcbiAgICB9KSxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICd+L21vZHVsZXMvZG9tYWlucy91c2VyL3VzZXInO1xuXG5leHBvcnQgdHlwZSBDdXJyZW50VXNlclN0YXRlID0ge1xuICBjdXJyZW50VXNlcj86IFVzZXI7XG59O1xuXG5jb25zdCBpbml0Q3VycmVudFVzZXI6IEN1cnJlbnRVc2VyU3RhdGUgPSB7XG4gIGN1cnJlbnRVc2VyOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnY3VycmVudFVzZXInLFxuICBpbml0aWFsU3RhdGU6IGluaXRDdXJyZW50VXNlcixcbiAgcmVkdWNlcnM6IHtcbiAgICBtdXRhdGVDdXJyZW50VXNlcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Q3VycmVudFVzZXJTdGF0ZVsnY3VycmVudFVzZXInXT4pID0+ICh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGN1cnJlbnRVc2VyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICB9KSxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnfi9tb2R1bGVzL3N0YXRlcyc7XG5pbXBvcnQgU2Nyb2xsVG9Ub3AgZnJvbSBcIn4vaGVscGVycy9zY3JvbGxfdG9fdG9wX2hlbHBlclwiO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZGU4O1xuICAgIGNvbG9yOiAjMjUyNTI1O1xuICAgIGZvbnQtZmFtaWx5OiBcIi1hcHBsZS1zeXN0ZW1cIiwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwi44OS44Op44Ku44OO6KeS44K0IFByb05cIiwgSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvTiwgQXJpYWwsIFwi44Oh44Kk44Oq44KqXCIsIE1laXJ5bywgc2Fucy1zZXJpZjtcbiAgfVxuICAuanMtZm9jdXMtdmlzaWJsZSA6Zm9jdXM6bm90KC5mb2N1cy12aXNpYmxlKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgQXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vYWNjZXNzTG9nVXNlQ2FzZS5hY2Nlc3NMb2coeyBwYXRoOiBsb2NhdGlvbi5wYXRobmFtZSB9KTtcbiAgICAvLyBOT1RFOiDjg5HjgrnlpInmm7TjgpLjg5Xjg4Pjgq/jgavjgqLjgq/jgrvjgrnjg63jgrDjgpLpgIHkv6HjgZnjgotcbiAgICAvLyDpgIHkv6HjgZnjgovjg5Hjgrnjga8vcGPku6XkuIvjga7jg5Xjg6vjg5HjgrnjgafjgYLjgovlv4XopoHjgYzjgYLjgovjgZ/jgoFsb2NhdGlvbi5wYXRobmFtZeOCkuS9v+eUqOOBl+OBpuOBhOOCi1xuICAgIC8vIOOBn+OBoOOBl+OAgWxvY2F0aW9u44KS44OV44OD44Kv44Gr44Gv5L2/55So44Gn44GN44Gq44GE44Gu44Gncm91dGVy44KS44OV44OD44Kv44Gr5L2/55So44GX44Gm44GE44KLXG4gIH0sIFtyb3V0ZXIuYmFzZVBhdGgsIHJvdXRlci5wYXRobmFtZSwgcm91dGVyLnF1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNjcm9sbFRvVG9wIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxoZWlnaHQ9ZGV2aWNlLWhlaWdodFwiIGtleT1cInZpZXdwb3J0XCIgLz5cbiAgICAgICAgPHRpdGxlPk5leHRFeGFtcGxlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
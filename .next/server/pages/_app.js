module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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

/***/ "./context/SubsContext.js":
/*!********************************!*\
  !*** ./context/SubsContext.js ***!
  \********************************/
/*! exports provided: SubsProvider, SubsContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubsProvider", function() { return SubsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubsContext", function() { return SubsContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\kshan\\Desktop\\Web dev projects\\subscriptions_tracker\\context\\SubsContext.js";

const SubsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const SubsProvider = ({
  children
}) => {
  const {
    0: subs,
    1: setSubs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const refreshSubs = async () => {
    try {
      const res = await fetch('/api/getSubs');
      const latestSubs = await res.json();
      setSubs(latestSubs);
    } catch (error) {
      console.error(error);
    }
  };

  const addSubs = async subs => {
    try {
      const res = await fetch('/api/createSubs', {
        method: 'POST',
        body: JSON.stringify(subs)
      });
      console.log(res);
      const newTodos = await res.json();
      setSubs(prevSubs => {
        const updatedSubs = [newTodos, ...prevSubs];
        return updatedSubs;
      });
    } catch (err) {
      console.error(err);
    }
  };

  const updateSubs = async updatedSub => {
    try {
      await fetch('/api/updateSubs', {
        method: 'PUT',
        body: JSON.stringify(updatedSub),
        headers: {
          'content-type': 'application/json'
        }
      });
      setSubs(prevSubs => {
        const existingSubs = [...prevSubs];
        const existingSub = existingSubs.find(subscription => subscription.id === updatedSub.id);
        existingSub.fields = updatedSub.fields;
        return existingSubs;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSubs = async id => {
    try {
      await fetch('/api/deleteSubs', {
        method: 'DELETE',
        body: JSON.stringify({
          id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSubs(prevSubs => {
        return prevSubs.filter(sub => sub.id !== id);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubsContext.Provider, {
    value: {
      subs,
      setSubs,
      refreshSubs,
      updateSubs,
      deleteSubs,
      addSubs
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 12
  }, undefined);
};



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SubsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SubsContext */ "./context/SubsContext.js");

var _jsxFileName = "C:\\Users\\kshan\\Desktop\\Web dev projects\\subscriptions_tracker\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_SubsContext__WEBPACK_IMPORTED_MODULE_2__["SubsProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mx-auto my-10 max-w-xl",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9TdWJzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiU3Vic0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU3Vic1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdWJzIiwic2V0U3VicyIsInVzZVN0YXRlIiwicmVmcmVzaFN1YnMiLCJyZXMiLCJmZXRjaCIsImxhdGVzdFN1YnMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiYWRkU3VicyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9nIiwibmV3VG9kb3MiLCJwcmV2U3VicyIsInVwZGF0ZWRTdWJzIiwiZXJyIiwidXBkYXRlU3VicyIsInVwZGF0ZWRTdWIiLCJoZWFkZXJzIiwiZXhpc3RpbmdTdWJzIiwiZXhpc3RpbmdTdWIiLCJmaW5kIiwic3Vic2NyaXB0aW9uIiwiaWQiLCJmaWVsZHMiLCJkZWxldGVTdWJzIiwiZmlsdGVyIiwic3ViIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNB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QUFDQyxTQUFMLENBQWU7QUFBQ2E7QUFBRCxTQUFmLENBRnFCO0FBRzFCTCxlQUFPLEVBQUM7QUFBQywwQkFBZTtBQUFoQjtBQUhrQixPQUFuQixDQUFYO0FBTUFyQixhQUFPLENBQUVnQixRQUFELElBQVk7QUFDaEIsZUFBT0EsUUFBUSxDQUFDYSxNQUFULENBQWlCQyxHQUFELElBQU9BLEdBQUcsQ0FBQ0osRUFBSixLQUFTQSxFQUFoQyxDQUFQO0FBRUgsT0FITSxDQUFQO0FBS0gsS0FaRCxDQVlFLE9BQU9uQixLQUFQLEVBQWM7QUFDWkMsYUFBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDSDtBQUNKLEdBaEJEOztBQWlCQSxzQkFBTyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFDaENSLFVBRGdDO0FBQzNCQyxhQUQyQjtBQUNuQkUsaUJBRG1CO0FBQ1BpQixnQkFETztBQUNJUyxnQkFESjtBQUNlbkI7QUFEZixLQUE3QjtBQUFBLGNBRUhYO0FBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBR0gsQ0FwRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7QUFDQSxTQUFTaUMsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLHFFQUFDLGlFQUFEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsa0NBQWY7QUFBQSw2QkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBRWNGLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTdWJzQ29udGV4dD1jcmVhdGVDb250ZXh0KClcclxuXHJcbmNvbnN0IFN1YnNQcm92aWRlcj0oe2NoaWxkcmVufSk9PntcclxuICAgIGNvbnN0IFtzdWJzLHNldFN1YnNdPXVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgcmVmcmVzaFN1YnM9YXN5bmMoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcz1hd2FpdCBmZXRjaCgnL2FwaS9nZXRTdWJzJylcclxuICAgICAgICAgICAgY29uc3QgbGF0ZXN0U3Vicz1hd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgIHNldFN1YnMobGF0ZXN0U3VicylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRTdWJzPWFzeW5jIChzdWJzKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9jcmVhdGVTdWJzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdWJzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFN1YnMoKHByZXZTdWJzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkU3VicyA9IFtuZXdUb2RvcywgLi4ucHJldlN1YnNdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRTdWJzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVN1YnM9YXN5bmModXBkYXRlZFN1Yik9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS91cGRhdGVTdWJzJyx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BVVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHVwZGF0ZWRTdWIpLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczp7J2NvbnRlbnQtdHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0U3VicygocHJldlN1YnMpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1N1YnM9Wy4uLnByZXZTdWJzXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdTdWI9ZXhpc3RpbmdTdWJzLmZpbmQoc3Vic2NyaXB0aW9uPT5zdWJzY3JpcHRpb24uaWQ9PT11cGRhdGVkU3ViLmlkKVxyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdTdWIuZmllbGRzPXVwZGF0ZWRTdWIuZmllbGRzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdTdWJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGVsZXRlU3Vicz1hc3luYyhpZCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9kZWxldGVTdWJzJyx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtpZH0pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRTdWJzKChwcmV2U3Vicyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3Vicy5maWx0ZXIoKHN1Yik9PnN1Yi5pZCE9PWlkKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxTdWJzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgIHN1YnMsc2V0U3VicyxyZWZyZXNoU3Vicyx1cGRhdGVTdWJzLGRlbGV0ZVN1YnMsYWRkU3Vic1xyXG4gICAgfX0+e2NoaWxkcmVufTwvU3Vic0NvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCB7U3Vic1Byb3ZpZGVyLFN1YnNDb250ZXh0fSIsImltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcydcbmltcG9ydCB7U3Vic1Byb3ZpZGVyfSBmcm9tICcuLi9jb250ZXh0L1N1YnNDb250ZXh0J1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiggXG4gICAgPFN1YnNQcm92aWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXktMTAgbWF4LXcteGxcIj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L1N1YnNQcm92aWRlcj5cbiAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
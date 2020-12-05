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
      const res = await fetch('/api/updateSubs', {
        method: 'PUT',
        body: JSON.stringify(updatedSub),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      await res.json();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9TdWJzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiU3Vic0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU3Vic1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdWJzIiwic2V0U3VicyIsInVzZVN0YXRlIiwicmVmcmVzaFN1YnMiLCJyZXMiLCJmZXRjaCIsImxhdGVzdFN1YnMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiYWRkU3VicyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9nIiwibmV3VG9kb3MiLCJwcmV2U3VicyIsInVwZGF0ZWRTdWJzIiwiZXJyIiwidXBkYXRlU3VicyIsInVwZGF0ZWRTdWIiLCJoZWFkZXJzIiwiZXhpc3RpbmdTdWJzIiwiZXhpc3RpbmdTdWIiLCJmaW5kIiwic3Vic2NyaXB0aW9uIiwiaWQiLCJmaWVsZHMiLCJkZWxldGVTdWJzIiwiZmlsdGVyIiwic3ViIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNB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ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCx7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3Vic0NvbnRleHQ9Y3JlYXRlQ29udGV4dCgpXHJcblxyXG5jb25zdCBTdWJzUHJvdmlkZXI9KHtjaGlsZHJlbn0pPT57XHJcbiAgICBjb25zdCBbc3VicyxzZXRTdWJzXT11c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IHJlZnJlc2hTdWJzPWFzeW5jKCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXM9YXdhaXQgZmV0Y2goJy9hcGkvZ2V0U3VicycpXHJcbiAgICAgICAgICAgIGNvbnN0IGxhdGVzdFN1YnM9YXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgICAgICBzZXRTdWJzKGxhdGVzdFN1YnMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkU3Vicz1hc3luYyAoc3Vicyk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvY3JlYXRlU3VicycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc3VicylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgY29uc3QgbmV3VG9kb3MgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRTdWJzKChwcmV2U3VicykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFN1YnMgPSBbbmV3VG9kb3MsIC4uLnByZXZTdWJzXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVkU3VicztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVTdWJzPWFzeW5jKHVwZGF0ZWRTdWIpPT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzPWF3YWl0IGZldGNoKCcvYXBpL3VwZGF0ZVN1YnMnLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUFVUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkodXBkYXRlZFN1YiksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICAgICAgc2V0U3VicygocHJldlN1YnMpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1N1YnM9Wy4uLnByZXZTdWJzXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdTdWI9ZXhpc3RpbmdTdWJzLmZpbmQoc3Vic2NyaXB0aW9uPT5zdWJzY3JpcHRpb24uaWQ9PT11cGRhdGVkU3ViLmlkKVxyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdTdWIuZmllbGRzPXVwZGF0ZWRTdWIuZmllbGRzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdTdWJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGVsZXRlU3Vicz1hc3luYyhpZCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9kZWxldGVTdWJzJyx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtpZH0pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRTdWJzKChwcmV2U3Vicyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3Vicy5maWx0ZXIoKHN1Yik9PnN1Yi5pZCE9PWlkKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxTdWJzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgIHN1YnMsc2V0U3VicyxyZWZyZXNoU3Vicyx1cGRhdGVTdWJzLGRlbGV0ZVN1YnMsYWRkU3Vic1xyXG4gICAgfX0+e2NoaWxkcmVufTwvU3Vic0NvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCB7U3Vic1Byb3ZpZGVyLFN1YnNDb250ZXh0fSIsImltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcydcbmltcG9ydCB7U3Vic1Byb3ZpZGVyfSBmcm9tICcuLi9jb250ZXh0L1N1YnNDb250ZXh0J1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiggXG4gICAgPFN1YnNQcm92aWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXktMTAgbWF4LXcteGxcIj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L1N1YnNQcm92aWRlcj5cbiAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
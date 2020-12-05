module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/updateSubs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/updateSubs.js":
/*!*********************************!*\
  !*** ./pages/api/updateSubs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Airtable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Airtable.js */ "./pages/api/utils/Airtable.js");
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/auth0 */ "./pages/api/utils/auth0.js");


/* harmony default export */ __webpack_exports__["default"] = (_utils_auth0__WEBPACK_IMPORTED_MODULE_1__["default"].requireAuthentication(async (req, res) => {
  const {
    id,
    fields
  } = req.body;

  try {
    const updatedRecords = await _utils_Airtable_js__WEBPACK_IMPORTED_MODULE_0__["table"].update([{
      id,
      fields
    }]);
    res.statusCode = 200;
    res.json(Object(_utils_Airtable_js__WEBPACK_IMPORTED_MODULE_0__["minifyRecord"])(updatedRecords[0]));
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({
      msg: 'Something went wrong'
    });
  }
}));

/***/ }),

/***/ "./pages/api/utils/Airtable.js":
/*!*************************************!*\
  !*** ./pages/api/utils/Airtable.js ***!
  \*************************************/
/*! exports provided: table, minifyRecord, minifyRecords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "table", function() { return table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minifyRecord", function() { return minifyRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minifyRecords", function() { return minifyRecords; });
__webpack_require__(/*! dotenv */ "dotenv").config();

const Airtable = __webpack_require__(/*! airtable */ "airtable");

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);
const table = base(process.env.AIRTABLE_TABLE_NAME);

const minifyRecords = records => {
  return records.map(record => minifyRecord(record));
};

const minifyRecord = record => {
  if (!record.fields.archive) {
    record.fields.archive = false;
  }

  return {
    id: record.id,
    fields: record.fields
  };
};



/***/ }),

/***/ "./pages/api/utils/auth0.js":
/*!**********************************!*\
  !*** ./pages/api/utils/auth0.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_SECRET,
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.COOKIE_SECRET,
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: 60 * 60 * 8,
    // (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.
    // (Optional) SameSite configuration for the session cookie. Defaults to 'lax', but can be changed to 'strict' or 'none'. Set it to false if you want to disable the SameSite setting.
    cookieSameSite: 'lax',
    // (Optional) Store the id_token in the session. Defaults to false.
    storeIdToken: false,
    // (Optional) Store the access_token in the session. Defaults to false.
    storeAccessToken: false,
    // (Optional) Store the refresh_token in the session. Defaults to false.
    storeRefreshToken: false
  },
  oidcClient: {
    // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
    httpTimeout: 2500,
    // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
    clockTolerance: 10000
  }
}));

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("airtable");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VwZGF0ZVN1YnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3V0aWxzL0FpcnRhYmxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS91dGlscy9hdXRoMC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWlydGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiJdLCJuYW1lcyI6WyJhdXRoMCIsInJlcXVpcmVBdXRoZW50aWNhdGlvbiIsInJlcSIsInJlcyIsImlkIiwiZmllbGRzIiwiYm9keSIsInVwZGF0ZWRSZWNvcmRzIiwidGFibGUiLCJ1cGRhdGUiLCJzdGF0dXNDb2RlIiwianNvbiIsIm1pbmlmeVJlY29yZCIsImVycm9yIiwiY29uc29sZSIsIm1zZyIsInJlcXVpcmUiLCJjb25maWciLCJBaXJ0YWJsZSIsImJhc2UiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQUlSVEFCTEVfQVBJX0tFWSIsIkFJUlRBQkxFX0JBU0VfSUQiLCJBSVJUQUJMRV9UQUJMRV9OQU1FIiwibWluaWZ5UmVjb3JkcyIsInJlY29yZHMiLCJtYXAiLCJyZWNvcmQiLCJhcmNoaXZlIiwiaW5pdEF1dGgwIiwiZG9tYWluIiwiQVVUSDBfRE9NQUlOIiwiY2xpZW50SWQiLCJBVVRIMF9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJBVVRIMF9TRUNSRVQiLCJzY29wZSIsInJlZGlyZWN0VXJpIiwicG9zdExvZ291dFJlZGlyZWN0VXJpIiwic2Vzc2lvbiIsImNvb2tpZVNlY3JldCIsIkNPT0tJRV9TRUNSRVQiLCJjb29raWVMaWZldGltZSIsImNvb2tpZVNhbWVTaXRlIiwic3RvcmVJZFRva2VuIiwic3RvcmVBY2Nlc3NUb2tlbiIsInN0b3JlUmVmcmVzaFRva2Vu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Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFHZTBCLG9JQUFTLENBQUM7QUFDdkJDLFFBQU0sRUFBRVgsT0FBTyxDQUFDQyxHQUFSLENBQVlXLFlBREc7QUFFdkJDLFVBQVEsRUFBRWIsT0FBTyxDQUFDQyxHQUFSLENBQVlhLGVBRkM7QUFHdkJDLGNBQVksRUFBRWYsT0FBTyxDQUFDQyxHQUFSLENBQVllLFlBSEg7QUFJdkJDLE9BQUssRUFBRSxnQkFKZ0I7QUFLdkJDLGFBQVcsRUFBRSxvQ0FMVTtBQU12QkMsdUJBQXFCLEVBQUUsd0JBTkE7QUFPdkJDLFNBQU8sRUFBRTtBQUNQO0FBQ0FDLGdCQUFZLEVBQUVyQixPQUFPLENBQUNDLEdBQVIsQ0FBWXFCLGFBRm5CO0FBR1A7QUFDQUMsa0JBQWMsRUFBRSxLQUFLLEVBQUwsR0FBVSxDQUpuQjtBQUtQO0FBRUE7QUFDQUMsa0JBQWMsRUFBRSxLQVJUO0FBU1A7QUFDQUMsZ0JBQVksRUFBRSxLQVZQO0FBV1A7QUFDQUMsb0JBQWdCLEVBQUUsS0FaWDtBQWFQO0FBQ0FDLHFCQUFpQixFQUFFO0FBZFosR0FQYztBQXVCdkJDLFlBQVUsRUFBRTtBQUNWO0FBQ0FDLGVBQVcsRUFBRSxJQUZIO0FBR1Y7QUFDQUMsa0JBQWMsRUFBRTtBQUpOO0FBdkJXLENBQUQsQ0FBeEIsRTs7Ozs7Ozs7Ozs7QUNIQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9hcGkvdXBkYXRlU3Vicy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3VwZGF0ZVN1YnMuanNcIik7XG4iLCJpbXBvcnQgeyB0YWJsZSxtaW5pZnlSZWNvcmQgfSBmcm9tICcuL3V0aWxzL0FpcnRhYmxlLmpzJztcclxuaW1wb3J0IGF1dGgwIGZyb20gJy4vdXRpbHMvYXV0aDAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aDAucmVxdWlyZUF1dGhlbnRpY2F0aW9uKGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBpZCxmaWVsZHMgfSA9IHJlcS5ib2R5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkUmVjb3JkcyA9IGF3YWl0IHRhYmxlLnVwZGF0ZShbXHJcbiAgICAgICAgICAgIHsgaWQsZmllbGRzIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICBcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgICAgICByZXMuanNvbihtaW5pZnlSZWNvcmQodXBkYXRlZFJlY29yZHNbMF0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcbiAgICAgICAgcmVzLmpzb24oeyBtc2c6ICdTb21ldGhpbmcgd2VudCB3cm9uZycgfSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuIiwicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuY29uc3QgQWlydGFibGU9cmVxdWlyZSgnYWlydGFibGUnKVxyXG5jb25zdCBiYXNlPW5ldyBBaXJ0YWJsZSh7YXBpS2V5OnByb2Nlc3MuZW52LkFJUlRBQkxFX0FQSV9LRVl9KS5iYXNlKHByb2Nlc3MuZW52LkFJUlRBQkxFX0JBU0VfSUQpXHJcbmNvbnN0IHRhYmxlPWJhc2UocHJvY2Vzcy5lbnYuQUlSVEFCTEVfVEFCTEVfTkFNRSlcclxuY29uc3QgbWluaWZ5UmVjb3Jkcz0ocmVjb3Jkcyk9PntcclxuICAgIHJldHVybiByZWNvcmRzLm1hcChyZWNvcmQ9Pm1pbmlmeVJlY29yZChyZWNvcmQpKVxyXG59XHJcbmNvbnN0IG1pbmlmeVJlY29yZD0ocmVjb3JkKT0+e1xyXG4gICAgaWYoIXJlY29yZC5maWVsZHMuYXJjaGl2ZSl7XHJcbiAgICAgICAgcmVjb3JkLmZpZWxkcy5hcmNoaXZlPWZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaWQ6cmVjb3JkLmlkLFxyXG4gICAgICAgIGZpZWxkczpyZWNvcmQuZmllbGRzXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHt0YWJsZSxtaW5pZnlSZWNvcmQsbWluaWZ5UmVjb3Jkc30iLCJpbXBvcnQgeyBpbml0QXV0aDAgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0QXV0aDAoe1xyXG4gIGRvbWFpbjogcHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOLFxyXG4gIGNsaWVudElkOiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUQsXHJcbiAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIMF9TRUNSRVQsXHJcbiAgc2NvcGU6ICdvcGVuaWQgcHJvZmlsZScsXHJcbiAgcmVkaXJlY3RVcmk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NhbGxiYWNrJyxcclxuICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICBzZXNzaW9uOiB7XHJcbiAgICAvLyBUaGUgc2VjcmV0IHVzZWQgdG8gZW5jcnlwdCB0aGUgY29va2llLlxyXG4gICAgY29va2llU2VjcmV0OiBwcm9jZXNzLmVudi5DT09LSUVfU0VDUkVULFxyXG4gICAgLy8gVGhlIGNvb2tpZSBsaWZldGltZSAoZXhwaXJhdGlvbikgaW4gc2Vjb25kcy4gU2V0IHRvIDggaG91cnMgYnkgZGVmYXVsdC5cclxuICAgIGNvb2tpZUxpZmV0aW1lOiA2MCAqIDYwICogOCxcclxuICAgIC8vIChPcHRpb25hbCkgVGhlIGNvb2tpZSBkb21haW4gdGhpcyBzaG91bGQgcnVuIG9uLiBMZWF2ZSBpdCBibGFuayB0byByZXN0cmljdCBpdCB0byB5b3VyIGRvbWFpbi5cclxuICAgIFxyXG4gICAgLy8gKE9wdGlvbmFsKSBTYW1lU2l0ZSBjb25maWd1cmF0aW9uIGZvciB0aGUgc2Vzc2lvbiBjb29raWUuIERlZmF1bHRzIHRvICdsYXgnLCBidXQgY2FuIGJlIGNoYW5nZWQgdG8gJ3N0cmljdCcgb3IgJ25vbmUnLiBTZXQgaXQgdG8gZmFsc2UgaWYgeW91IHdhbnQgdG8gZGlzYWJsZSB0aGUgU2FtZVNpdGUgc2V0dGluZy5cclxuICAgIGNvb2tpZVNhbWVTaXRlOiAnbGF4JyxcclxuICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIGlkX3Rva2VuIGluIHRoZSBzZXNzaW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgIHN0b3JlSWRUb2tlbjogZmFsc2UsXHJcbiAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSBhY2Nlc3NfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgc3RvcmVBY2Nlc3NUb2tlbjogZmFsc2UsXHJcbiAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSByZWZyZXNoX3Rva2VuIGluIHRoZSBzZXNzaW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgIHN0b3JlUmVmcmVzaFRva2VuOiBmYWxzZVxyXG4gIH0sXHJcbiAgb2lkY0NsaWVudDoge1xyXG4gICAgLy8gKE9wdGlvbmFsKSBDb25maWd1cmUgdGhlIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIGZvciBIVFRQIHJlcXVlc3RzIHRvIEF1dGgwLlxyXG4gICAgaHR0cFRpbWVvdXQ6IDI1MDAsXHJcbiAgICAvLyAoT3B0aW9uYWwpIENvbmZpZ3VyZSB0aGUgY2xvY2sgdG9sZXJhbmNlIGluIG1pbGxpc2Vjb25kcywgaWYgdGhlIHRpbWUgb24geW91ciBzZXJ2ZXIgaXMgcnVubmluZyBiZWhpbmQuXHJcbiAgICBjbG9ja1RvbGVyYW5jZTogMTAwMDBcclxuICB9XHJcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWlydGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return login; });
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/auth0 */ "./pages/api/utils/auth0.js");

async function login(req, res) {
  try {
    await _utils_auth0__WEBPACK_IMPORTED_MODULE_0__["default"].handleLogin(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS91dGlscy9hdXRoMC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIiXSwibmFtZXMiOlsibG9naW4iLCJyZXEiLCJyZXMiLCJhdXRoMCIsImhhbmRsZUxvZ2luIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwiZW5kIiwibWVzc2FnZSIsImluaXRBdXRoMCIsImRvbWFpbiIsInByb2Nlc3MiLCJlbnYiLCJBVVRIMF9ET01BSU4iLCJjbGllbnRJZCIsIkFVVEgwX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkFVVEgwX1NFQ1JFVCIsInNjb3BlIiwicmVkaXJlY3RVcmkiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJzZXNzaW9uIiwiY29va2llU2VjcmV0IiwiQ09PS0lFX1NFQ1JFVCIsImNvb2tpZUxpZmV0aW1lIiwiY29va2llU2FtZVNpdGUiLCJzdG9yZUlkVG9rZW4iLCJzdG9yZUFjY2Vzc1Rva2VuIiwic3RvcmVSZWZyZXNoVG9rZW4iLCJvaWRjQ2xpZW50IiwiaHR0cFRpbWVvdXQiLCJjbG9ja1RvbGVyYW5jZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUVlLGVBQWVBLEtBQWYsQ0FBcUJDLEdBQXJCLEVBQTBCQyxHQUExQixFQUErQjtBQUM1QyxNQUFJO0FBQ0YsVUFBTUMsb0RBQUssQ0FBQ0MsV0FBTixDQUFrQkgsR0FBbEIsRUFBdUJDLEdBQXZCLENBQU47QUFDRCxHQUZELENBRUUsT0FBT0csS0FBUCxFQUFjO0FBQ2RDLFdBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0FILE9BQUcsQ0FBQ0ssTUFBSixDQUFXRixLQUFLLENBQUNFLE1BQU4sSUFBZ0IsR0FBM0IsRUFBZ0NDLEdBQWhDLENBQW9DSCxLQUFLLENBQUNJLE9BQTFDO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7QUNURDtBQUFBO0FBQUE7QUFBQTtBQUdlQyxvSUFBUyxDQUFDO0FBQ3ZCQyxRQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQURHO0FBRXZCQyxVQUFRLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxlQUZDO0FBR3ZCQyxjQUFZLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxZQUhIO0FBSXZCQyxPQUFLLEVBQUUsZ0JBSmdCO0FBS3ZCQyxhQUFXLEVBQUUsb0NBTFU7QUFNdkJDLHVCQUFxQixFQUFFLHdCQU5BO0FBT3ZCQyxTQUFPLEVBQUU7QUFDUDtBQUNBQyxnQkFBWSxFQUFFWCxPQUFPLENBQUNDLEdBQVIsQ0FBWVcsYUFGbkI7QUFHUDtBQUNBQyxrQkFBYyxFQUFFLEtBQUssRUFBTCxHQUFVLENBSm5CO0FBS1A7QUFFQTtBQUNBQyxrQkFBYyxFQUFFLEtBUlQ7QUFTUDtBQUNBQyxnQkFBWSxFQUFFLEtBVlA7QUFXUDtBQUNBQyxvQkFBZ0IsRUFBRSxLQVpYO0FBYVA7QUFDQUMscUJBQWlCLEVBQUU7QUFkWixHQVBjO0FBdUJ2QkMsWUFBVSxFQUFFO0FBQ1Y7QUFDQUMsZUFBVyxFQUFFLElBRkg7QUFHVjtBQUNBQyxrQkFBYyxFQUFFO0FBSk47QUF2QlcsQ0FBRCxDQUF4QixFOzs7Ozs7Ozs7OztBQ0hBLGdEIiwiZmlsZSI6InBhZ2VzL2FwaS9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2xvZ2luLmpzXCIpO1xuIiwiaW1wb3J0IGF1dGgwIGZyb20gJy4vdXRpbHMvYXV0aDAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbG9naW4ocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgYXV0aDAuaGFuZGxlTG9naW4ocmVxLCByZXMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzIHx8IDQwMCkuZW5kKGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IGluaXRBdXRoMCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoMCh7XHJcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4sXHJcbiAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRCxcclxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX1NFQ1JFVCxcclxuICBzY29wZTogJ29wZW5pZCBwcm9maWxlJyxcclxuICByZWRpcmVjdFVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY2FsbGJhY2snLFxyXG4gIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gIHNlc3Npb246IHtcclxuICAgIC8vIFRoZSBzZWNyZXQgdXNlZCB0byBlbmNyeXB0IHRoZSBjb29raWUuXHJcbiAgICBjb29raWVTZWNyZXQ6IHByb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVQsXHJcbiAgICAvLyBUaGUgY29va2llIGxpZmV0aW1lIChleHBpcmF0aW9uKSBpbiBzZWNvbmRzLiBTZXQgdG8gOCBob3VycyBieSBkZWZhdWx0LlxyXG4gICAgY29va2llTGlmZXRpbWU6IDYwICogNjAgKiA4LFxyXG4gICAgLy8gKE9wdGlvbmFsKSBUaGUgY29va2llIGRvbWFpbiB0aGlzIHNob3VsZCBydW4gb24uIExlYXZlIGl0IGJsYW5rIHRvIHJlc3RyaWN0IGl0IHRvIHlvdXIgZG9tYWluLlxyXG4gICAgXHJcbiAgICAvLyAoT3B0aW9uYWwpIFNhbWVTaXRlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBzZXNzaW9uIGNvb2tpZS4gRGVmYXVsdHMgdG8gJ2xheCcsIGJ1dCBjYW4gYmUgY2hhbmdlZCB0byAnc3RyaWN0JyBvciAnbm9uZScuIFNldCBpdCB0byBmYWxzZSBpZiB5b3Ugd2FudCB0byBkaXNhYmxlIHRoZSBTYW1lU2l0ZSBzZXR0aW5nLlxyXG4gICAgY29va2llU2FtZVNpdGU6ICdsYXgnLFxyXG4gICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgaWRfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgc3RvcmVJZFRva2VuOiBmYWxzZSxcclxuICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIGFjY2Vzc190b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICBzdG9yZUFjY2Vzc1Rva2VuOiBmYWxzZSxcclxuICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIHJlZnJlc2hfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgc3RvcmVSZWZyZXNoVG9rZW46IGZhbHNlXHJcbiAgfSxcclxuICBvaWRjQ2xpZW50OiB7XHJcbiAgICAvLyAoT3B0aW9uYWwpIENvbmZpZ3VyZSB0aGUgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgZm9yIEhUVFAgcmVxdWVzdHMgdG8gQXV0aDAuXHJcbiAgICBodHRwVGltZW91dDogMjUwMCxcclxuICAgIC8vIChPcHRpb25hbCkgQ29uZmlndXJlIHRoZSBjbG9jayB0b2xlcmFuY2UgaW4gbWlsbGlzZWNvbmRzLCBpZiB0aGUgdGltZSBvbiB5b3VyIHNlcnZlciBpcyBydW5uaW5nIGJlaGluZC5cclxuICAgIGNsb2NrVG9sZXJhbmNlOiAxMDAwMFxyXG4gIH1cclxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF1dGgwL25leHRqcy1hdXRoMFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
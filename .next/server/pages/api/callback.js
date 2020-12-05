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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/callback.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/callback.js":
/*!*******************************!*\
  !*** ./pages/api/callback.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return callback; });
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/auth0 */ "./pages/api/utils/auth0.js");

async function callback(req, res) {
  try {
    await _utils_auth0__WEBPACK_IMPORTED_MODULE_0__["default"].handleCallback(req, res, {
      redirectTo: '/'
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS91dGlscy9hdXRoMC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIiXSwibmFtZXMiOlsiY2FsbGJhY2siLCJyZXEiLCJyZXMiLCJhdXRoMCIsImhhbmRsZUNhbGxiYWNrIiwicmVkaXJlY3RUbyIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsImVuZCIsIm1lc3NhZ2UiLCJpbml0QXV0aDAiLCJkb21haW4iLCJwcm9jZXNzIiwiZW52IiwiQVVUSDBfRE9NQUlOIiwiY2xpZW50SWQiLCJBVVRIMF9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJBVVRIMF9TRUNSRVQiLCJzY29wZSIsInJlZGlyZWN0VXJpIiwicG9zdExvZ291dFJlZGlyZWN0VXJpIiwic2Vzc2lvbiIsImNvb2tpZVNlY3JldCIsIkNPT0tJRV9TRUNSRVQiLCJjb29raWVMaWZldGltZSIsImNvb2tpZVNhbWVTaXRlIiwic3RvcmVJZFRva2VuIiwic3RvcmVBY2Nlc3NUb2tlbiIsInN0b3JlUmVmcmVzaFRva2VuIiwib2lkY0NsaWVudCIsImh0dHBUaW1lb3V0IiwiY2xvY2tUb2xlcmFuY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFFZSxlQUFlQSxRQUFmLENBQXdCQyxHQUF4QixFQUE2QkMsR0FBN0IsRUFBa0M7QUFDL0MsTUFBSTtBQUNGLFVBQU1DLG9EQUFLLENBQUNDLGNBQU4sQ0FBcUJILEdBQXJCLEVBQTBCQyxHQUExQixFQUErQjtBQUFFRyxnQkFBVSxFQUFFO0FBQWQsS0FBL0IsQ0FBTjtBQUNELEdBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsV0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDQUosT0FBRyxDQUFDTSxNQUFKLENBQVdGLEtBQUssQ0FBQ0UsTUFBTixJQUFnQixHQUEzQixFQUFnQ0MsR0FBaEMsQ0FBb0NILEtBQUssQ0FBQ0ksT0FBMUM7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7OztBQ1REO0FBQUE7QUFBQTtBQUFBO0FBR2VDLG9JQUFTLENBQUM7QUFDdkJDLFFBQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBREc7QUFFdkJDLFVBQVEsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGVBRkM7QUFHdkJDLGNBQVksRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLLFlBSEg7QUFJdkJDLE9BQUssRUFBRSxnQkFKZ0I7QUFLdkJDLGFBQVcsRUFBRSxvQ0FMVTtBQU12QkMsdUJBQXFCLEVBQUUsd0JBTkE7QUFPdkJDLFNBQU8sRUFBRTtBQUNQO0FBQ0FDLGdCQUFZLEVBQUVYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVyxhQUZuQjtBQUdQO0FBQ0FDLGtCQUFjLEVBQUUsS0FBSyxFQUFMLEdBQVUsQ0FKbkI7QUFLUDtBQUVBO0FBQ0FDLGtCQUFjLEVBQUUsS0FSVDtBQVNQO0FBQ0FDLGdCQUFZLEVBQUUsS0FWUDtBQVdQO0FBQ0FDLG9CQUFnQixFQUFFLEtBWlg7QUFhUDtBQUNBQyxxQkFBaUIsRUFBRTtBQWRaLEdBUGM7QUF1QnZCQyxZQUFVLEVBQUU7QUFDVjtBQUNBQyxlQUFXLEVBQUUsSUFGSDtBQUdWO0FBQ0FDLGtCQUFjLEVBQUU7QUFKTjtBQXZCVyxDQUFELENBQXhCLEU7Ozs7Ozs7Ozs7O0FDSEEsZ0QiLCJmaWxlIjoicGFnZXMvYXBpL2NhbGxiYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvY2FsbGJhY2suanNcIik7XG4iLCJpbXBvcnQgYXV0aDAgZnJvbSAnLi91dGlscy9hdXRoMCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjYWxsYmFjayhyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBhdXRoMC5oYW5kbGVDYWxsYmFjayhyZXEsIHJlcywgeyByZWRpcmVjdFRvOiAnLycgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyhlcnJvci5zdGF0dXMgfHwgNDAwKS5lbmQoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgaW5pdEF1dGgwIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdEF1dGgwKHtcclxuICBkb21haW46IHByb2Nlc3MuZW52LkFVVEgwX0RPTUFJTixcclxuICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxyXG4gIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfU0VDUkVULFxyXG4gIHNjb3BlOiAnb3BlbmlkIHByb2ZpbGUnLFxyXG4gIHJlZGlyZWN0VXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYWxsYmFjaycsXHJcbiAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgLy8gVGhlIHNlY3JldCB1c2VkIHRvIGVuY3J5cHQgdGhlIGNvb2tpZS5cclxuICAgIGNvb2tpZVNlY3JldDogcHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1JFVCxcclxuICAgIC8vIFRoZSBjb29raWUgbGlmZXRpbWUgKGV4cGlyYXRpb24pIGluIHNlY29uZHMuIFNldCB0byA4IGhvdXJzIGJ5IGRlZmF1bHQuXHJcbiAgICBjb29raWVMaWZldGltZTogNjAgKiA2MCAqIDgsXHJcbiAgICAvLyAoT3B0aW9uYWwpIFRoZSBjb29raWUgZG9tYWluIHRoaXMgc2hvdWxkIHJ1biBvbi4gTGVhdmUgaXQgYmxhbmsgdG8gcmVzdHJpY3QgaXQgdG8geW91ciBkb21haW4uXHJcbiAgICBcclxuICAgIC8vIChPcHRpb25hbCkgU2FtZVNpdGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHNlc3Npb24gY29va2llLiBEZWZhdWx0cyB0byAnbGF4JywgYnV0IGNhbiBiZSBjaGFuZ2VkIHRvICdzdHJpY3QnIG9yICdub25lJy4gU2V0IGl0IHRvIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgdGhlIFNhbWVTaXRlIHNldHRpbmcuXHJcbiAgICBjb29raWVTYW1lU2l0ZTogJ2xheCcsXHJcbiAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSBpZF90b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICBzdG9yZUlkVG9rZW46IGZhbHNlLFxyXG4gICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgYWNjZXNzX3Rva2VuIGluIHRoZSBzZXNzaW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgIHN0b3JlQWNjZXNzVG9rZW46IGZhbHNlLFxyXG4gICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgcmVmcmVzaF90b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICBzdG9yZVJlZnJlc2hUb2tlbjogZmFsc2VcclxuICB9LFxyXG4gIG9pZGNDbGllbnQ6IHtcclxuICAgIC8vIChPcHRpb25hbCkgQ29uZmlndXJlIHRoZSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBmb3IgSFRUUCByZXF1ZXN0cyB0byBBdXRoMC5cclxuICAgIGh0dHBUaW1lb3V0OiAyNTAwLFxyXG4gICAgLy8gKE9wdGlvbmFsKSBDb25maWd1cmUgdGhlIGNsb2NrIHRvbGVyYW5jZSBpbiBtaWxsaXNlY29uZHMsIGlmIHRoZSB0aW1lIG9uIHlvdXIgc2VydmVyIGlzIHJ1bm5pbmcgYmVoaW5kLlxyXG4gICAgY2xvY2tUb2xlcmFuY2U6IDEwMDAwXHJcbiAgfVxyXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
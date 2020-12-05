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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/deleteSubs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/deleteSubs.js":
/*!*********************************!*\
  !*** ./pages/api/deleteSubs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Airtable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Airtable.js */ "./pages/api/utils/Airtable.js");
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/auth0 */ "./pages/api/utils/auth0.js");
/* harmony import */ var _middleware_OwnsRecord_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/OwnsRecord.js */ "./pages/middleware/OwnsRecord.js");



/* harmony default export */ __webpack_exports__["default"] = (_utils_auth0__WEBPACK_IMPORTED_MODULE_1__["default"].requireAuthentication(async (req, res) => {
  const {
    id
  } = req.body;

  try {
    const deletedRecords = await _utils_Airtable_js__WEBPACK_IMPORTED_MODULE_0__["table"].destroy([id]);
    res.statusCode = 200;
    res.json(Object(_utils_Airtable_js__WEBPACK_IMPORTED_MODULE_0__["minifyRecord"])(deletedRecords[0]));
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

/***/ "./pages/middleware/OwnsRecord.js":
/*!****************************************!*\
  !*** ./pages/middleware/OwnsRecord.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/utils/auth0 */ "./pages/api/utils/auth0.js");
/* harmony import */ var _api_utils_Airtable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/utils/Airtable.js */ "./pages/api/utils/Airtable.js");



const ownsRecord = handler => async (req, res) => {
  const {
    user
  } = await _api_utils_auth0__WEBPACK_IMPORTED_MODULE_0__["default"].getSession(req);

  if (!user) {
    res.statusCode = 401;
    return res.json({
      msg: 'Not logged in'
    });
  }

  const {
    id
  } = req.body;

  try {
    const existingRecord = await _api_utils_Airtable_js__WEBPACK_IMPORTED_MODULE_1__["table"].find(id);

    if (!existingRecord || user.sub !== existingRecord.fields.userId) {
      res.statusCode = 404;
      return res.json({
        msg: 'Record not found'
      });
    }

    req.record = existingRecord;
    return handler(req, res);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    return res.json({
      msg: 'Something went wrong'
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ownsRecord);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2RlbGV0ZVN1YnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3V0aWxzL0FpcnRhYmxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS91dGlscy9hdXRoMC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9taWRkbGV3YXJlL093bnNSZWNvcmQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFpcnRhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiXSwibmFtZXMiOlsiYXV0aDAiLCJyZXF1aXJlQXV0aGVudGljYXRpb24iLCJyZXEiLCJyZXMiLCJpZCIsImJvZHkiLCJkZWxldGVkUmVjb3JkcyIsInRhYmxlIiwiZGVzdHJveSIsInN0YXR1c0NvZGUiLCJqc29uIiwibWluaWZ5UmVjb3JkIiwiZXJyb3IiLCJjb25zb2xlIiwibXNnIiwicmVxdWlyZSIsImNvbmZpZyIsIkFpcnRhYmxlIiwiYmFzZSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBSVJUQUJMRV9BUElfS0VZIiwiQUlSVEFCTEVfQkFTRV9JRCIsIkFJUlRBQkxFX1RBQkxFX05BTUUiLCJtaW5pZnlSZWNvcmRzIiwicmVjb3JkcyIsIm1hcCIsInJlY29yZCIsImZpZWxkcyIsImFyY2hpdmUiLCJpbml0QXV0aDAiLCJkb21haW4iLCJBVVRIMF9ET01BSU4iLCJjbGllbnRJZCIsIkFVVEgwX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkFVVEgwX1NFQ1JFVCIsInNjb3BlIiwicmVkaXJlY3RVcmkiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJzZXNzaW9uIiwiY29va2llU2VjcmV0IiwiQ09PS0lFX1NFQ1JFVCIsImNvb2tpZUxpZmV0aW1lIiwiY29va2llU2FtZVNpdGUiLCJzdG9yZUlkVG9rZW4iLCJzdG9yZUFjY2Vzc1Rva2VuIiwic3RvcmVSZWZyZXNoVG9rZW4iLCJvaWRjQ2xpZW50IiwiaHR0cFRpbWVvdXQiLCJjbG9ja1RvbGVyYW5jZSIsIm93bnNSZWNvcmQiLCJoYW5kbGVyIiwidXNlciIsImdldFNlc3Npb24iLCJleGlzdGluZ1JlY29yZCIsImZpbmQiLCJzdWIiLCJ1c2VySWQiLCJlcnIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZUEsbUhBQUssQ0FBQ0MscUJBQU4sQ0FBNEIsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQzNELFFBQU07QUFBRUM7QUFBRixNQUFTRixHQUFHLENBQUNHLElBQW5COztBQUNBLE1BQUk7QUFDQSxVQUFNQyxjQUFjLEdBQUcsTUFBTUMsd0RB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SixHQUFpQixHQUFqQjtBQUNBLFdBQU9OLEdBQUcsQ0FBQ08sSUFBSixDQUFTO0FBQUVJLFNBQUcsRUFBRTtBQUFQLEtBQVQsQ0FBUDtBQUNIOztBQUVELFFBQU07QUFBRVY7QUFBRixNQUFTRixHQUFHLENBQUNHLElBQW5COztBQUNBLE1BQUk7QUFDQSxVQUFNbUQsY0FBYyxHQUFHLE1BQU1qRCw0REFBSyxDQUFDa0QsSUFBTixDQUFXckQsRUFBWCxDQUE3Qjs7QUFDQSxRQUFJLENBQUNvRCxjQUFELElBQW1CRixJQUFJLENBQUNJLEdBQUwsS0FBYUYsY0FBYyxDQUFDM0IsTUFBZixDQUFzQjhCLE1BQTFELEVBQWtFO0FBQzlEeEQsU0FBRyxDQUFDTSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsYUFBT04sR0FBRyxDQUFDTyxJQUFKLENBQVM7QUFBRUksV0FBRyxFQUFFO0FBQVAsT0FBVCxDQUFQO0FBQ0g7O0FBQ0RaLE9BQUcsQ0FBQzBCLE1BQUosR0FBYTRCLGNBQWI7QUFDQSxXQUFPSCxPQUFPLENBQUNuRCxHQUFELEVBQU1DLEdBQU4sQ0FBZDtBQUNILEdBUkQsQ0FRRSxPQUFPeUQsR0FBUCxFQUFZO0FBQ1YvQyxXQUFPLENBQUNELEtBQVIsQ0FBY2dELEdBQWQ7QUFDQXpELE9BQUcsQ0FBQ00sVUFBSixHQUFpQixHQUFqQjtBQUNBLFdBQU9OLEdBQUcsQ0FBQ08sSUFBSixDQUFTO0FBQUVJLFNBQUcsRUFBRTtBQUFQLEtBQVQsQ0FBUDtBQUNIO0FBQ0osQ0F0QkQ7O0FBd0Jlc0MseUVBQWYsRTs7Ozs7Ozs7Ozs7QUMxQkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL2RlbGV0ZVN1YnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9kZWxldGVTdWJzLmpzXCIpO1xuIiwiaW1wb3J0IHsgdGFibGUsbWluaWZ5UmVjb3JkIH0gZnJvbSAnLi91dGlscy9BaXJ0YWJsZS5qcyc7XHJcbmltcG9ydCBhdXRoMCBmcm9tICcuL3V0aWxzL2F1dGgwJztcclxuaW1wb3J0IE93bnNSZWNvcmQgZnJvbSAnLi4vbWlkZGxld2FyZS9Pd25zUmVjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGgwLnJlcXVpcmVBdXRoZW50aWNhdGlvbihhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5ib2R5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkZWxldGVkUmVjb3JkcyA9IGF3YWl0IHRhYmxlLmRlc3Ryb3koW1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcbiAgICAgICAgcmVzLmpzb24obWluaWZ5UmVjb3JkKGRlbGV0ZWRSZWNvcmRzWzBdKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICAgIHJlcy5qc29uKHsgbXNnOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnIH0pO1xyXG4gICAgfVxyXG59KVxyXG4iLCJyZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKVxyXG5jb25zdCBBaXJ0YWJsZT1yZXF1aXJlKCdhaXJ0YWJsZScpXHJcbmNvbnN0IGJhc2U9bmV3IEFpcnRhYmxlKHthcGlLZXk6cHJvY2Vzcy5lbnYuQUlSVEFCTEVfQVBJX0tFWX0pLmJhc2UocHJvY2Vzcy5lbnYuQUlSVEFCTEVfQkFTRV9JRClcclxuY29uc3QgdGFibGU9YmFzZShwcm9jZXNzLmVudi5BSVJUQUJMRV9UQUJMRV9OQU1FKVxyXG5jb25zdCBtaW5pZnlSZWNvcmRzPShyZWNvcmRzKT0+e1xyXG4gICAgcmV0dXJuIHJlY29yZHMubWFwKHJlY29yZD0+bWluaWZ5UmVjb3JkKHJlY29yZCkpXHJcbn1cclxuY29uc3QgbWluaWZ5UmVjb3JkPShyZWNvcmQpPT57XHJcbiAgICBpZighcmVjb3JkLmZpZWxkcy5hcmNoaXZlKXtcclxuICAgICAgICByZWNvcmQuZmllbGRzLmFyY2hpdmU9ZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybntcclxuICAgICAgICBpZDpyZWNvcmQuaWQsXHJcbiAgICAgICAgZmllbGRzOnJlY29yZC5maWVsZHNcclxuICAgIH1cclxufVxyXG5leHBvcnQge3RhYmxlLG1pbmlmeVJlY29yZCxtaW5pZnlSZWNvcmRzfSIsImltcG9ydCB7IGluaXRBdXRoMCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoMCh7XHJcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4sXHJcbiAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRCxcclxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX1NFQ1JFVCxcclxuICBzY29wZTogJ29wZW5pZCBwcm9maWxlJyxcclxuICByZWRpcmVjdFVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY2FsbGJhY2snLFxyXG4gIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gIHNlc3Npb246IHtcclxuICAgIC8vIFRoZSBzZWNyZXQgdXNlZCB0byBlbmNyeXB0IHRoZSBjb29raWUuXHJcbiAgICBjb29raWVTZWNyZXQ6IHByb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVQsXHJcbiAgICAvLyBUaGUgY29va2llIGxpZmV0aW1lIChleHBpcmF0aW9uKSBpbiBzZWNvbmRzLiBTZXQgdG8gOCBob3VycyBieSBkZWZhdWx0LlxyXG4gICAgY29va2llTGlmZXRpbWU6IDYwICogNjAgKiA4LFxyXG4gICAgLy8gKE9wdGlvbmFsKSBUaGUgY29va2llIGRvbWFpbiB0aGlzIHNob3VsZCBydW4gb24uIExlYXZlIGl0IGJsYW5rIHRvIHJlc3RyaWN0IGl0IHRvIHlvdXIgZG9tYWluLlxyXG4gICAgXHJcbiAgICAvLyAoT3B0aW9uYWwpIFNhbWVTaXRlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBzZXNzaW9uIGNvb2tpZS4gRGVmYXVsdHMgdG8gJ2xheCcsIGJ1dCBjYW4gYmUgY2hhbmdlZCB0byAnc3RyaWN0JyBvciAnbm9uZScuIFNldCBpdCB0byBmYWxzZSBpZiB5b3Ugd2FudCB0byBkaXNhYmxlIHRoZSBTYW1lU2l0ZSBzZXR0aW5nLlxyXG4gICAgY29va2llU2FtZVNpdGU6ICdsYXgnLFxyXG4gICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgaWRfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgc3RvcmVJZFRva2VuOiBmYWxzZSxcclxuICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIGFjY2Vzc190b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICBzdG9yZUFjY2Vzc1Rva2VuOiBmYWxzZSxcclxuICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIHJlZnJlc2hfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgc3RvcmVSZWZyZXNoVG9rZW46IGZhbHNlXHJcbiAgfSxcclxuICBvaWRjQ2xpZW50OiB7XHJcbiAgICAvLyAoT3B0aW9uYWwpIENvbmZpZ3VyZSB0aGUgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgZm9yIEhUVFAgcmVxdWVzdHMgdG8gQXV0aDAuXHJcbiAgICBodHRwVGltZW91dDogMjUwMCxcclxuICAgIC8vIChPcHRpb25hbCkgQ29uZmlndXJlIHRoZSBjbG9jayB0b2xlcmFuY2UgaW4gbWlsbGlzZWNvbmRzLCBpZiB0aGUgdGltZSBvbiB5b3VyIHNlcnZlciBpcyBydW5uaW5nIGJlaGluZC5cclxuICAgIGNsb2NrVG9sZXJhbmNlOiAxMDAwMFxyXG4gIH1cclxufSk7IiwiaW1wb3J0IGF1dGgwIGZyb20gJy4uL2FwaS91dGlscy9hdXRoMCc7XHJcbmltcG9ydCB7IHRhYmxlIH0gZnJvbSAnLi4vYXBpL3V0aWxzL0FpcnRhYmxlLmpzJztcclxuY29uc3Qgb3duc1JlY29yZCA9IChoYW5kbGVyKSA9PiBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciB9ID0gYXdhaXQgYXV0aDAuZ2V0U2Vzc2lvbihyZXEpO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAxO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7IG1zZzogJ05vdCBsb2dnZWQgaW4nIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5ib2R5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBleGlzdGluZ1JlY29yZCA9IGF3YWl0IHRhYmxlLmZpbmQoaWQpO1xyXG4gICAgICAgIGlmICghZXhpc3RpbmdSZWNvcmQgfHwgdXNlci5zdWIgIT09IGV4aXN0aW5nUmVjb3JkLmZpZWxkcy51c2VySWQpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IG1zZzogJ1JlY29yZCBub3QgZm91bmQnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXEucmVjb3JkID0gZXhpc3RpbmdSZWNvcmQ7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7IG1zZzogJ1NvbWV0aGluZyB3ZW50IHdyb25nJyB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG93bnNSZWNvcmQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF1dGgwL25leHRqcy1hdXRoMFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhaXJ0YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
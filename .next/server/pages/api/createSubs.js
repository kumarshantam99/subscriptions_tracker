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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/createSubs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/createSubs.js":
/*!*********************************!*\
  !*** ./pages/api/createSubs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Airtable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Airtable.js */ "./pages/api/utils/Airtable.js");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const fields = req.body;
  var arr_from_json = JSON.parse(fields);
  console.log(arr_from_json.name);

  try {
    const createdRecords = await _utils_Airtable_js__WEBPACK_IMPORTED_MODULE_0__["table"].create([{
      fields: {
        name: arr_from_json.name,
        url: arr_from_json.url,
        amount: arr_from_json.amount
      }
    }]);
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields
    };
    console.log(createdRecord);
    res.statusCode = 200;
    res.json(createdRecord);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({
      msg: 'Something went wrong'
    });
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NyZWF0ZVN1YnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3V0aWxzL0FpcnRhYmxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFpcnRhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiZmllbGRzIiwiYm9keSIsImFycl9mcm9tX2pzb24iLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImNyZWF0ZWRSZWNvcmRzIiwidGFibGUiLCJjcmVhdGUiLCJ1cmwiLCJhbW91bnQiLCJjcmVhdGVkUmVjb3JkIiwiaWQiLCJzdGF0dXNDb2RlIiwianNvbiIsImVycm9yIiwibXNnIiwicmVxdWlyZSIsImNvbmZpZyIsIkFpcnRhYmxlIiwiYmFzZSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBSVJUQUJMRV9BUElfS0VZIiwiQUlSVEFCTEVfQkFTRV9JRCIsIkFJUlRBQkxFX1RBQkxFX05BTUUiLCJtaW5pZnlSZWNvcmRzIiwicmVjb3JkcyIsIm1hcCIsInJlY29yZCIsIm1pbmlmeVJlY29yZCIsImFyY2hpdmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FB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WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9jcmVhdGVTdWJzLmpzXCIpO1xuIiwiaW1wb3J0IHsgdGFibGUgfSBmcm9tICcuL3V0aWxzL0FpcnRhYmxlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgY29uc3QgZmllbGRzPSByZXEuYm9keTtcclxuICAgIHZhciBhcnJfZnJvbV9qc29uID0gSlNPTi5wYXJzZSggZmllbGRzICk7XHJcbiAgICBjb25zb2xlLmxvZyhhcnJfZnJvbV9qc29uLm5hbWUpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRSZWNvcmRzID0gYXdhaXQgdGFibGUuY3JlYXRlKFt7ZmllbGRzOntuYW1lOmFycl9mcm9tX2pzb24ubmFtZSx1cmw6YXJyX2Zyb21fanNvbi51cmwsYW1vdW50OmFycl9mcm9tX2pzb24uYW1vdW50fX1dKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVkUmVjb3JkID0ge1xyXG4gICAgICAgICAgICBpZDogY3JlYXRlZFJlY29yZHNbMF0uaWQsXHJcbiAgICAgICAgICAgIGZpZWxkczogY3JlYXRlZFJlY29yZHNbMF0uZmllbGRzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlZFJlY29yZClcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgICAgICByZXMuanNvbihjcmVhdGVkUmVjb3JkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcbiAgICAgICAgcmVzLmpzb24oeyBtc2c6ICdTb21ldGhpbmcgd2VudCB3cm9uZycgfSk7XHJcbiAgICB9XHJcbn0pIiwicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuY29uc3QgQWlydGFibGU9cmVxdWlyZSgnYWlydGFibGUnKVxyXG5jb25zdCBiYXNlPW5ldyBBaXJ0YWJsZSh7YXBpS2V5OnByb2Nlc3MuZW52LkFJUlRBQkxFX0FQSV9LRVl9KS5iYXNlKHByb2Nlc3MuZW52LkFJUlRBQkxFX0JBU0VfSUQpXHJcbmNvbnN0IHRhYmxlPWJhc2UocHJvY2Vzcy5lbnYuQUlSVEFCTEVfVEFCTEVfTkFNRSlcclxuY29uc3QgbWluaWZ5UmVjb3Jkcz0ocmVjb3Jkcyk9PntcclxuICAgIHJldHVybiByZWNvcmRzLm1hcChyZWNvcmQ9Pm1pbmlmeVJlY29yZChyZWNvcmQpKVxyXG59XHJcbmNvbnN0IG1pbmlmeVJlY29yZD0ocmVjb3JkKT0+e1xyXG4gICAgaWYoIXJlY29yZC5maWVsZHMuYXJjaGl2ZSl7XHJcbiAgICAgICAgcmVjb3JkLmZpZWxkcy5hcmNoaXZlPWZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaWQ6cmVjb3JkLmlkLFxyXG4gICAgICAgIGZpZWxkczpyZWNvcmQuZmllbGRzXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHt0YWJsZSxtaW5pZnlSZWNvcmQsbWluaWZ5UmVjb3Jkc30iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhaXJ0YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\kshan\\Desktop\\Web dev projects\\subscriptions_tracker\\components\\Navbar.js";

function Navbar({
  user
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "flex justify-between items-center py-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-2xl font-bold text-grey-800",
      children: "My Subscriptions"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex",
      children: [user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/api/logout",
        className: "rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4",
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 28
      }, this), !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/api/login",
        className: "rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 29
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/SubsForm.js":
/*!********************************!*\
  !*** ./components/SubsForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubsForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SubsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SubsContext */ "./context/SubsContext.js");
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tags */ "./components/Tags.js");

var _jsxFileName = "C:\\Users\\kshan\\Desktop\\Web dev projects\\subscriptions_tracker\\components\\SubsForm.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SubsForm() {
  const {
    0: subs,
    1: setSubs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    url: '',
    amount: '',
    date: '',
    edate: ''
  });
  const initialState = {
    name: '',
    url: '',
    amount: '',
    date: '',
    edate: ''
  };
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    addSubs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_SubsContext__WEBPACK_IMPORTED_MODULE_2__["SubsContext"]);

  const onChange = e => {
    setSubs(_objectSpread(_objectSpread({}, subs), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addSubs(subs);
    setSubs(_objectSpread({}, initialState));
    setCount(count + 1);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: "form my-6",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col text-sm mb-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "subscription",
        className: "font-bold mb-2 text-gray-800 ",
        children: "Add a Subscription"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        value: subs.name,
        className: " appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg ",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "font-bold mb-2 text-gray-800 ",
        children: "Date of Purchase"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "date",
        name: "date",
        value: subs.date,
        className: " appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg ",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "subscription",
        className: "font-bold mb-2 text-gray-800 ",
        children: "Date of Renewal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "date",
        name: "edate",
        value: subs.edate,
        className: " appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg ",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "slink",
        className: "font-bold mb-2 text-gray-800 ",
        children: "Link"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "url",
        value: subs.url,
        className: " appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg ",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "trial",
        className: "font-bold mb-2 text-gray-800 ",
        children: "Free-Trial"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "amount",
        className: "font-bold mb-2 text-gray-800 ",
        children: "Amount"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "amount",
        value: subs.amount,
        className: " appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg ",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "submit",
      className: " w-full rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Subscription.js":
/*!************************************!*\
  !*** ./components/Subscription.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SubsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SubsContext */ "./context/SubsContext.js");

var _jsxFileName = "C:\\Users\\kshan\\Desktop\\Web dev projects\\subscriptions_tracker\\components\\Subscription.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Subscription({
  subscription
}) {
  const {
    updateSubs,
    deleteSubs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_SubsContext__WEBPACK_IMPORTED_MODULE_2__["SubsContext"]);

  const handleToggleCompleted = () => {
    const updatedFields = _objectSpread(_objectSpread({}, subscription.fields), {}, {
      archive: !subscription.fields.archive
    });

    const updatedSub = {
      id: subscription.id,
      fields: updatedFields
    };
    updateSubs(updatedSub);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: "bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4 ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "checkbox",
        name: "marked",
        id: "marked",
        checked: subscription.fields.archive,
        className: "mr-2 form-checkbox h-5 w-5",
        onChange: handleToggleCompleted
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: `flex-1 text-gray-800 ${subscription.fields.archive ? 'underline' : ''} `,
        children: subscription.fields.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded ",
        onClick: () => deleteSubs(subscription.id),
        children: "Delete Me!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Tags.js":
/*!****************************!*\
  !*** ./components/Tags.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tags; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\kshan\\Desktop\\Web dev projects\\subscriptions_tracker\\components\\Tags.js";

function Tags({
  tagsUpdated,
  key
}) {
  const tagChoices = ['7 days', '15 days', '30 days', '30+ days'];
  const {
    0: selectedTags,
    1: setSelectedTags
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setSelectedTags([]);
  }, [key]);

  const tagChange = e => {
    const value = e.target.value;
    const alreadySelected = selectedTags.includes(value);

    if (e.target.checked && !alreadySelected) {
      setSelectedTags([...selectedTags, value]);
    } else if (!e.target.checked && alreadySelected) {
      setSelectedTags(selectedTags.filter(prevTag => prevTag !== value));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    tagsUpdated(selectedTags);
  }, [selectedTags, tagsUpdated]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: tagChoices.map((choice, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: "checkbox-inline mr-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "checkbox",
        className: "mr-2 form-checkbox h-5 w-5",
        onChange: tagChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 22
      }, this), ' ' + choice]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, this))
  }, void 0, false);
}

/***/ }),

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Subscription */ "./components/Subscription.js");
/* harmony import */ var _components_SubsForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SubsForm */ "./components/SubsForm.js");
/* harmony import */ var _api_utils_Airtable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/utils/Airtable */ "./pages/api/utils/Airtable.js");
/* harmony import */ var _context_SubsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/SubsContext */ "./context/SubsContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_utils_auth0__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/utils/auth0 */ "./pages/api/utils/auth0.js");


var _jsxFileName = "C:\\Users\\kshan\\Desktop\\Web dev projects\\subscriptions_tracker\\pages\\index.js";








function Home({
  initialSubs,
  user
}) {
  const {
    subs,
    setSubs
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useContext"])(_context_SubsContext__WEBPACK_IMPORTED_MODULE_6__["SubsContext"]);
  console.log(user);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    setSubs(initialSubs);
  }, []);
  console.log(initialSubs);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Subscriptions Tracker App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-2xl text-center mb-4",
          children: "Subscriptions Tracker"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SubsForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: subs && subs.map(subscription => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"], {
            subscription: subscription
          }, subscription.id, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 32
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
async function getServerSideProps(context) {
  const session = await _api_utils_auth0__WEBPACK_IMPORTED_MODULE_8__["default"].getSession(context.req);

  try {
    const subs = await _api_utils_Airtable__WEBPACK_IMPORTED_MODULE_5__["table"].select({}).firstPage();
    return {
      props: {
        initialSubs: Object(_api_utils_Airtable__WEBPACK_IMPORTED_MODULE_5__["minifyRecords"])(subs),
        user: (session === null || session === void 0 ? void 0 : session.user) || null
      }
    };
  } catch (error) {
    console.error(err);
    return {
      props: {
        err: "AHHH WTF!!!"
      }
    };
  }
}

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

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdWJzRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9TdWJzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXRpbHMvQWlydGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3V0aWxzL2F1dGgwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhaXJ0YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlciIsIlN1YnNGb3JtIiwic3VicyIsInNldFN1YnMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJ1cmwiLCJhbW91bnQiLCJkYXRlIiwiZWRhdGUiLCJpbml0aWFsU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwiYWRkU3VicyIsInVzZUNvbnRleHQiLCJTdWJzQ29udGV4dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJTdWJzY3JpcHRpb24iLCJzdWJzY3JpcHRpb24iLCJ1cGRhdGVTdWJzIiwiZGVsZXRlU3VicyIsImhhbmRsZVRvZ2dsZUNvbXBsZXRlZCIsInVwZGF0ZWRGaWVsZHMiLCJmaWVsZHMiLCJhcmNoaXZlIiwidXBkYXRlZFN1YiIsImlkIiwiVGFncyIsInRhZ3NVcGRhdGVkIiwia2V5IiwidGFnQ2hvaWNlcyIsInNlbGVjdGVkVGFncyIsInNldFNlbGVjdGVkVGFncyIsInVzZUVmZmVjdCIsInRhZ0NoYW5nZSIsImFscmVhZHlTZWxlY3RlZCIsImluY2x1ZGVzIiwiY2hlY2tlZCIsImZpbHRlciIsInByZXZUYWciLCJtYXAiLCJjaG9pY2UiLCJpbmRleCIsImNyZWF0ZUNvbnRleHQiLCJTdWJzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlZnJlc2hTdWJzIiwicmVzIiwiZmV0Y2giLCJsYXRlc3RTdWJzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9nIiwibmV3VG9kb3MiLCJwcmV2U3VicyIsInVwZGF0ZWRTdWJzIiwiZXJyIiwiaGVhZGVycyIsImV4aXN0aW5nU3VicyIsImV4aXN0aW5nU3ViIiwiZmluZCIsInN1YiIsInJlcXVpcmUiLCJjb25maWciLCJBaXJ0YWJsZSIsImJhc2UiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQUlSVEFCTEVfQVBJX0tFWSIsIkFJUlRBQkxFX0JBU0VfSUQiLCJ0YWJsZSIsIkFJUlRBQkxFX1RBQkxFX05BTUUiLCJtaW5pZnlSZWNvcmRzIiwicmVjb3JkcyIsInJlY29yZCIsIm1pbmlmeVJlY29yZCIsImluaXRBdXRoMCIsImRvbWFpbiIsIkFVVEgwX0RPTUFJTiIsImNsaWVudElkIiwiQVVUSDBfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiQVVUSDBfU0VDUkVUIiwic2NvcGUiLCJyZWRpcmVjdFVyaSIsInBvc3RMb2dvdXRSZWRpcmVjdFVyaSIsInNlc3Npb24iLCJjb29raWVTZWNyZXQiLCJDT09LSUVfU0VDUkVUIiwiY29va2llTGlmZXRpbWUiLCJjb29raWVTYW1lU2l0ZSIsInN0b3JlSWRUb2tlbiIsInN0b3JlQWNjZXNzVG9rZW4iLCJzdG9yZVJlZnJlc2hUb2tlbiIsIm9pZGNDbGllbnQiLCJodHRwVGltZW91dCIsImNsb2NrVG9sZXJhbmNlIiwiSG9tZSIsImluaXRpYWxTdWJzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImF1dGgwIiwiZ2V0U2Vzc2lvbiIsInJlcSIsInNlbGVjdCIsImZpcnN0UGFnZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFZSxTQUFTQSxNQUFULENBQWdCO0FBQUNDO0FBQUQsQ0FBaEIsRUFBd0I7QUFDbkMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsd0NBQWY7QUFBQSw0QkFDSTtBQUFHLGVBQVMsRUFBQyxrQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsTUFB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Q0MsT0FBbEMsRUFBMEM7QUFDL0MsUUFBTWQsT0FBTyxHQUFDLE1BQU1lLHdEQUFLLENBQUNDLFVBQU4sQ0FBaUJGLE9BQU8sQ0FBQ0csR0FBekIsQ0FBcEI7O0FBRUEsTUFBSTtBQUNGLFVBQU1oSCxJQUFJLEdBQUMsTUFBTStFLHlEQUFLLENBQUNrQyxNQUFOLENBQWEsRUFBYixFQUFpQkMsU0FBakIsRUFBakI7QUFDRixXQUFPO0FBQ0xDLFdBQUssRUFBQztBQUNKUixtQkFBVyxFQUFDMUIseUVBQWEsQ0FBQ2pGLElBQUQsQ0FEckI7QUFFSkYsWUFBSSxFQUFDLENBQUFpRyxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRWpHLElBQVQsS0FBaUI7QUFGbEI7QUFERCxLQUFQO0FBT0MsR0FURCxDQVNFLE9BQU93RCxLQUFQLEVBQWM7QUFDZEMsV0FBTyxDQUFDRCxLQUFSLENBQWNVLEdBQWQ7QUFDQSxXQUFPO0FBQ0xtRCxXQUFLLEVBQUM7QUFDSm5ELFdBQUcsRUFBQztBQURBO0FBREQsS0FBUDtBQU1EO0FBR0YsQzs7Ozs7Ozs7Ozs7QUN4RUQsZ0Q7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHt1c2VyfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyZXktODAwXCI+TXkgU3Vic2NyaXB0aW9uczwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciYmKDxhIGhyZWY9XCIvYXBpL2xvZ291dFwiY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNFwiPkxvZ291dDwvYT4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXVzZXImJig8YSBocmVmPVwiL2FwaS9sb2dpblwiY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNFwiPkxvZ2luPC9hPilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN1YnNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9TdWJzQ29udGV4dCc7XHJcbmltcG9ydCBUYWdzIGZyb20gJy4vVGFncydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJzRm9ybSgpIHtcclxuICBcclxuICAgIGNvbnN0IFtzdWJzLHNldFN1YnNdPXVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOicnLFxyXG4gICAgICAgIHVybDonJyxcclxuICAgICAgICBhbW91bnQ6JycsXHJcbiAgICAgICAgZGF0ZTonJyxcclxuICAgICAgICBlZGF0ZTonJyxcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICB9KVxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIG5hbWU6JycsXHJcbiAgICAgICAgdXJsOicnLFxyXG4gICAgICAgIGFtb3VudDonJyxcclxuICAgICAgICBkYXRlOicnLFxyXG4gICAgICAgIGVkYXRlOicnLFxyXG4gICAgICAgIFxyXG4gICAgICB9O1xyXG4gICAgY29uc3QgW2NvdW50LHNldENvdW50XT11c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgeyBhZGRTdWJzIH0gPSB1c2VDb250ZXh0KFN1YnNDb250ZXh0KTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBzZXRTdWJzKHsuLi5zdWJzLFtlLnRhcmdldC5uYW1lXTplLnRhcmdldC52YWx1ZX0pO1xyXG4gICAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRkU3VicyhzdWJzKVxyXG4gICAgICAgXHJcbiAgICAgICAgc2V0U3Vicyh7Li4uaW5pdGlhbFN0YXRlfSlcclxuICAgICAgICBcclxuICAgICAgICBzZXRDb3VudChjb3VudCArIDEpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybSBteS02XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXNtIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3Vic2NyaXB0aW9uXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1iLTIgdGV4dC1ncmF5LTgwMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgYSBTdWJzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1YnMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmF5LTUwMCByb3VuZGVkLWxnIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItMiB0ZXh0LWdyYXktODAwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERhdGUgb2YgUHVyY2hhc2VcclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJzLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS01MDAgcm91bmRlZC1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YnNjcmlwdGlvblwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtYi0yIHRleHQtZ3JheS04MDAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0ZSBvZiBSZW5ld2FsXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1YnMuZWRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS01MDAgcm91bmRlZC1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNsaW5rXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1iLTIgdGV4dC1ncmF5LTgwMCBcIj5cclxuICAgICAgICAgICAgICAgICAgIExpbmtcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJzLnVybH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmF5LTUwMCByb3VuZGVkLWxnIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0cmlhbFwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtYi0yIHRleHQtZ3JheS04MDAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRnJlZS1UcmlhbFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbW91bnRcIiBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItMiB0ZXh0LWdyYXktODAwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFtb3VudFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3Vicy5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS01MDAgcm91bmRlZC1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgcm91bmRlZCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0ICx7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7U3Vic0NvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvU3Vic0NvbnRleHQnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YnNjcmlwdGlvbih7c3Vic2NyaXB0aW9ufSkge1xyXG4gICAgY29uc3Qge3VwZGF0ZVN1YnMsZGVsZXRlU3Vic309dXNlQ29udGV4dChTdWJzQ29udGV4dClcclxuICAgICAgICBcclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZUNvbXBsZXRlZD0gKCk9PntcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkcz17XHJcbiAgICAgICAgICAgIC4uLnN1YnNjcmlwdGlvbi5maWVsZHMsXHJcbiAgICAgICAgICAgIGFyY2hpdmU6IXN1YnNjcmlwdGlvbi5maWVsZHMuYXJjaGl2ZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFN1Yj17aWQ6c3Vic2NyaXB0aW9uLmlkLGZpZWxkczp1cGRhdGVkRmllbGRzfVxyXG4gICAgICAgIHVwZGF0ZVN1YnModXBkYXRlZFN1YilcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiZy13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBzaGFkb3ctbGcgcm91bmRlZC1sZyBteS0yIHB5LTIgcHgtNCBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwibWFya2VkXCIgaWQ9XCJtYXJrZWRcIiBjaGVja2VkPXtzdWJzY3JpcHRpb24uZmllbGRzLmFyY2hpdmV9IGNsYXNzTmFtZT1cIm1yLTIgZm9ybS1jaGVja2JveCBoLTUgdy01XCIgb25DaGFuZ2U9e2hhbmRsZVRvZ2dsZUNvbXBsZXRlZH0vPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZmxleC0xIHRleHQtZ3JheS04MDAgJHtzdWJzY3JpcHRpb24uZmllbGRzLmFyY2hpdmU/J3VuZGVybGluZSc6Jyd9IGB9ID57c3Vic2NyaXB0aW9uLmZpZWxkcy5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInRleHQtc20gYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNjAwIHRleHQtd2hpdGUgcHktMSBweC0yIHJvdW5kZWQgXCIgb25DbGljaz17KCk9PmRlbGV0ZVN1YnMoc3Vic2NyaXB0aW9uLmlkKX0+RGVsZXRlIE1lITwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFncyh7IHRhZ3NVcGRhdGVkLCBrZXkgfSkge1xyXG4gICAgY29uc3QgdGFnQ2hvaWNlcyA9IFsnNyBkYXlzJywgJzE1IGRheXMnLCAnMzAgZGF5cycsICczMCsgZGF5cyddO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVGFncywgc2V0U2VsZWN0ZWRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkVGFncyhbXSk7XHJcbiAgICB9LCBba2V5XSk7XHJcblxyXG4gICAgY29uc3QgdGFnQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGFscmVhZHlTZWxlY3RlZCA9IHNlbGVjdGVkVGFncy5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQgJiYgIWFscmVhZHlTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRhZ3MoWy4uLnNlbGVjdGVkVGFncywgdmFsdWVdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFlLnRhcmdldC5jaGVja2VkICYmIGFscmVhZHlTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRhZ3MoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRhZ3MuZmlsdGVyKChwcmV2VGFnKSA9PiBwcmV2VGFnICE9PSB2YWx1ZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdGFnc1VwZGF0ZWQoc2VsZWN0ZWRUYWdzKTtcclxuICAgIH0sIFtzZWxlY3RlZFRhZ3MsIHRhZ3NVcGRhdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7dGFnQ2hvaWNlcy5tYXAoKGNob2ljZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmUgbXItM1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwibXItMiBmb3JtLWNoZWNrYm94IGgtNSB3LTVcIiBvbkNoYW5nZT17dGFnQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgeycgJyArIGNob2ljZX1cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN1YnNDb250ZXh0PWNyZWF0ZUNvbnRleHQoKVxyXG5cclxuY29uc3QgU3Vic1Byb3ZpZGVyPSh7Y2hpbGRyZW59KT0+e1xyXG4gICAgY29uc3QgW3N1YnMsc2V0U3Vic109dXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCByZWZyZXNoU3Vicz1hc3luYygpPT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzPWF3YWl0IGZldGNoKCcvYXBpL2dldFN1YnMnKVxyXG4gICAgICAgICAgICBjb25zdCBsYXRlc3RTdWJzPWF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICAgICAgc2V0U3VicyhsYXRlc3RTdWJzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFN1YnM9YXN5bmMgKHN1YnMpPT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2NyZWF0ZVN1YnMnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHN1YnMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG9zID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0U3VicygocHJldlN1YnMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRTdWJzID0gW25ld1RvZG9zLCAuLi5wcmV2U3Vic107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlZFN1YnM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU3Vicz1hc3luYyh1cGRhdGVkU3ViKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcz1hd2FpdCBmZXRjaCgnL2FwaS91cGRhdGVTdWJzJyx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BVVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHVwZGF0ZWRTdWIpLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgIHNldFN1YnMoKHByZXZTdWJzKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdTdWJzPVsuLi5wcmV2U3Vic11cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nU3ViPWV4aXN0aW5nU3Vicy5maW5kKHN1YnNjcmlwdGlvbj0+c3Vic2NyaXB0aW9uLmlkPT09dXBkYXRlZFN1Yi5pZClcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nU3ViLmZpZWxkcz11cGRhdGVkU3ViLmZpZWxkc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nU3Vic1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGRlbGV0ZVN1YnM9YXN5bmMoaWQpPT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvZGVsZXRlU3Vicycse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7aWR9KSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6eydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ31cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0U3VicygocHJldlN1YnMpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN1YnMuZmlsdGVyKChzdWIpPT5zdWIuaWQhPT1pZClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiA8U3Vic0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgICBzdWJzLHNldFN1YnMscmVmcmVzaFN1YnMsdXBkYXRlU3VicyxkZWxldGVTdWJzLGFkZFN1YnNcclxuICAgIH19PntjaGlsZHJlbn08L1N1YnNDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQge1N1YnNQcm92aWRlcixTdWJzQ29udGV4dH0iLCJyZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKVxyXG5jb25zdCBBaXJ0YWJsZT1yZXF1aXJlKCdhaXJ0YWJsZScpXHJcbmNvbnN0IGJhc2U9bmV3IEFpcnRhYmxlKHthcGlLZXk6cHJvY2Vzcy5lbnYuQUlSVEFCTEVfQVBJX0tFWX0pLmJhc2UocHJvY2Vzcy5lbnYuQUlSVEFCTEVfQkFTRV9JRClcclxuY29uc3QgdGFibGU9YmFzZShwcm9jZXNzLmVudi5BSVJUQUJMRV9UQUJMRV9OQU1FKVxyXG5jb25zdCBtaW5pZnlSZWNvcmRzPShyZWNvcmRzKT0+e1xyXG4gICAgcmV0dXJuIHJlY29yZHMubWFwKHJlY29yZD0+bWluaWZ5UmVjb3JkKHJlY29yZCkpXHJcbn1cclxuY29uc3QgbWluaWZ5UmVjb3JkPShyZWNvcmQpPT57XHJcbiAgICBpZighcmVjb3JkLmZpZWxkcy5hcmNoaXZlKXtcclxuICAgICAgICByZWNvcmQuZmllbGRzLmFyY2hpdmU9ZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybntcclxuICAgICAgICBpZDpyZWNvcmQuaWQsXHJcbiAgICAgICAgZmllbGRzOnJlY29yZC5maWVsZHNcclxuICAgIH1cclxufVxyXG5leHBvcnQge3RhYmxlLG1pbmlmeVJlY29yZCxtaW5pZnlSZWNvcmRzfSIsImltcG9ydCB7IGluaXRBdXRoMCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoMCh7XHJcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4sXHJcbiAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRCxcclxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX1NFQ1JFVCxcclxuICBzY29wZTogJ29wZW5pZCBwcm9maWxlJyxcclxuICByZWRpcmVjdFVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY2FsbGJhY2snLFxyXG4gIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gIHNlc3Npb246IHtcclxuICAgIC8vIFRoZSBzZWNyZXQgdXNlZCB0byBlbmNyeXB0IHRoZSBjb29raWUuXHJcbiAgICBjb29raWVTZWNyZXQ6IHByb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVQsXHJcbiAgICAvLyBUaGUgY29va2llIGxpZmV0aW1lIChleHBpcmF0aW9uKSBpbiBzZWNvbmRzLiBTZXQgdG8gOCBob3VycyBieSBkZWZhdWx0LlxyXG4gICAgY29va2llTGlmZXRpbWU6IDYwICogNjAgKiA4LFxyXG4gICAgLy8gKE9wdGlvbmFsKSBUaGUgY29va2llIGRvbWFpbiB0aGlzIHNob3VsZCBydW4gb24uIExlYXZlIGl0IGJsYW5rIHRvIHJlc3RyaWN0IGl0IHRvIHlvdXIgZG9tYWluLlxyXG4gICAgXHJcbiAgICAvLyAoT3B0aW9uYWwpIFNhbWVTaXRlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBzZXNzaW9uIGNvb2tpZS4gRGVmYXVsdHMgdG8gJ2xheCcsIGJ1dCBjYW4gYmUgY2hhbmdlZCB0byAnc3RyaWN0JyBvciAnbm9uZScuIFNldCBpdCB0byBmYWxzZSBpZiB5b3Ugd2FudCB0byBkaXNhYmxlIHRoZSBTYW1lU2l0ZSBzZXR0aW5nLlxyXG4gICAgY29va2llU2FtZVNpdGU6ICdsYXgnLFxyXG4gICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgaWRfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgc3RvcmVJZFRva2VuOiBmYWxzZSxcclxuICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIGFjY2Vzc190b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICBzdG9yZUFjY2Vzc1Rva2VuOiBmYWxzZSxcclxuICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIHJlZnJlc2hfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgc3RvcmVSZWZyZXNoVG9rZW46IGZhbHNlXHJcbiAgfSxcclxuICBvaWRjQ2xpZW50OiB7XHJcbiAgICAvLyAoT3B0aW9uYWwpIENvbmZpZ3VyZSB0aGUgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgZm9yIEhUVFAgcmVxdWVzdHMgdG8gQXV0aDAuXHJcbiAgICBodHRwVGltZW91dDogMjUwMCxcclxuICAgIC8vIChPcHRpb25hbCkgQ29uZmlndXJlIHRoZSBjbG9jayB0b2xlcmFuY2UgaW4gbWlsbGlzZWNvbmRzLCBpZiB0aGUgdGltZSBvbiB5b3VyIHNlcnZlciBpcyBydW5uaW5nIGJlaGluZC5cclxuICAgIGNsb2NrVG9sZXJhbmNlOiAxMDAwMFxyXG4gIH1cclxufSk7IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TdWJzY3JpcHRpb24nXG5pbXBvcnQgU3Vic0Zvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9TdWJzRm9ybSdcbmltcG9ydCB7dGFibGUsbWluaWZ5UmVjb3Jkc30gZnJvbSAnLi9hcGkvdXRpbHMvQWlydGFibGUnXG5pbXBvcnQge1N1YnNDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L1N1YnNDb250ZXh0J1xuaW1wb3J0IHt1c2VFZmZlY3QsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi9hcGkvdXRpbHMvYXV0aDAnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2luaXRpYWxTdWJzLHVzZXJ9KSB7XG4gIGNvbnN0IHtzdWJzLHNldFN1YnN9PXVzZUNvbnRleHQoU3Vic0NvbnRleHQpXG4gIFxuICBjb25zb2xlLmxvZyh1c2VyKVxuICBcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgc2V0U3Vicyhpbml0aWFsU3VicylcbiAgfSxbXSlcblxuICBjb25zb2xlLmxvZyhpbml0aWFsU3VicylcbiAgcmV0dXJuIChcbiAgICA8ZGl2ID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3Vic2NyaXB0aW9ucyBUcmFja2VyIEFwcDwvdGl0bGU+XG4gICAgICAgIFxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuXG4gICAgICA8bWFpbiA+XG4gICAgICAgIFxuICAgICAgICA8YnIvPlxuICAgICAgICB7dXNlciAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jZW50ZXIgbWItNFwiPlN1YnNjcmlwdGlvbnMgVHJhY2tlcjwvaDE+XG4gICAgICAgICAgICAgPFN1YnNGb3JtLz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtzdWJzICYmXG4gICAgICAgIHN1YnMubWFwKHN1YnNjcmlwdGlvbj0+PFN1YnNjcmlwdGlvbiBrZXk9e3N1YnNjcmlwdGlvbi5pZH0gc3Vic2NyaXB0aW9uPXtzdWJzY3JpcHRpb259IC8+KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICBcbiAgICAgICAgXG4gICAgICA8L21haW4+XG5cbiAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gIGNvbnN0IHNlc3Npb249YXdhaXQgYXV0aDAuZ2V0U2Vzc2lvbihjb250ZXh0LnJlcSlcbiAgXG4gIHRyeSB7XG4gICAgY29uc3Qgc3Vicz1hd2FpdCB0YWJsZS5zZWxlY3Qoe30pLmZpcnN0UGFnZSgpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6e1xuICAgICAgaW5pdGlhbFN1YnM6bWluaWZ5UmVjb3JkcyhzdWJzKSxcbiAgICAgIHVzZXI6c2Vzc2lvbj8udXNlciB8fCBudWxsXG4gICAgfVxuICB9XG4gICAgXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOntcbiAgICAgICAgZXJyOlwiQUhISCBXVEYhISFcIlxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuICBcblxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWlydGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
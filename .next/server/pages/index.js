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
    className: "flex w-full rounded justify-between bg-gray-700 items-center py-4 px-2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-2xl font-bold text-white",
      children: "My Subscriptions"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex",
      children: [user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "text-2l py-2 px-2 font-lg text-white",
        children: user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 25
      }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/api/logout",
        className: "rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4",
        children: " Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 28
      }, this), !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/api/login",
        className: "rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
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

  console.log(subscription);
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
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: `flex-1 text-gray-800 ${subscription.fields.archive ? 'underline' : ''} `,
        children: subscription.fields.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded ",
        onClick: () => deleteSubs(subscription.id),
        children: "Delete Me!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
      className: "navbar",
      user: user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "px-4",
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
      }, void 0, true), !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-2xl text-center mb-4 py-4",
        children: "Log in to save your subscriptions"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 18
      }, this)]
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
  let subs = [];

  if (session === null || session === void 0 ? void 0 : session.user) {
    subs = await _api_utils_Airtable__WEBPACK_IMPORTED_MODULE_5__["table"].select({
      filterByFormula: `userId = '${session.user.sub}'`
    }).firstPage();
  }

  return {
    props: {
      initialSubs: Object(_api_utils_Airtable__WEBPACK_IMPORTED_MODULE_5__["minifyRecords"])(subs),
      user: (session === null || session === void 0 ? void 0 : session.user) || null
    }
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdWJzRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9TdWJzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXRpbHMvQWlydGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3V0aWxzL2F1dGgwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhaXJ0YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlciIsIm5hbWUiLCJTdWJzRm9ybSIsInN1YnMiLCJzZXRTdWJzIiwidXNlU3RhdGUiLCJ1cmwiLCJhbW91bnQiLCJkYXRlIiwiZWRhdGUiLCJpbml0aWFsU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwiYWRkU3VicyIsInVzZUNvbnRleHQiLCJTdWJzQ29udGV4dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJTdWJzY3JpcHRpb24iLCJzdWJzY3JpcHRpb24iLCJ1cGRhdGVTdWJzIiwiZGVsZXRlU3VicyIsImhhbmRsZVRvZ2dsZUNvbXBsZXRlZCIsInVwZGF0ZWRGaWVsZHMiLCJmaWVsZHMiLCJhcmNoaXZlIiwidXBkYXRlZFN1YiIsImlkIiwiY29uc29sZSIsImxvZyIsIlRhZ3MiLCJ0YWdzVXBkYXRlZCIsImtleSIsInRhZ0Nob2ljZXMiLCJzZWxlY3RlZFRhZ3MiLCJzZXRTZWxlY3RlZFRhZ3MiLCJ1c2VFZmZlY3QiLCJ0YWdDaGFuZ2UiLCJhbHJlYWR5U2VsZWN0ZWQiLCJpbmNsdWRlcyIsImNoZWNrZWQiLCJmaWx0ZXIiLCJwcmV2VGFnIiwibWFwIiwiY2hvaWNlIiwiaW5kZXgiLCJjcmVhdGVDb250ZXh0IiwiU3Vic1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZWZyZXNoU3VicyIsInJlcyIsImZldGNoIiwibGF0ZXN0U3VicyIsImpzb24iLCJlcnJvciIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3VG9kb3MiLCJwcmV2U3VicyIsInVwZGF0ZWRTdWJzIiwiZXJyIiwiaGVhZGVycyIsImV4aXN0aW5nU3VicyIsImV4aXN0aW5nU3ViIiwiZmluZCIsInN1YiIsInJlcXVpcmUiLCJjb25maWciLCJBaXJ0YWJsZSIsImJhc2UiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQUlSVEFCTEVfQVBJX0tFWSIsIkFJUlRBQkxFX0JBU0VfSUQiLCJ0YWJsZSIsIkFJUlRBQkxFX1RBQkxFX05BTUUiLCJtaW5pZnlSZWNvcmRzIiwicmVjb3JkcyIsInJlY29yZCIsIm1pbmlmeVJlY29yZCIsImluaXRBdXRoMCIsImRvbWFpbiIsIkFVVEgwX0RPTUFJTiIsImNsaWVudElkIiwiQVVUSDBfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiQVVUSDBfU0VDUkVUIiwic2NvcGUiLCJyZWRpcmVjdFVyaSIsInBvc3RMb2dvdXRSZWRpcmVjdFVyaSIsInNlc3Npb24iLCJjb29raWVTZWNyZXQiLCJDT09LSUVfU0VDUkVUIiwiY29va2llTGlmZXRpbWUiLCJjb29raWVTYW1lU2l0ZSIsInN0b3JlSWRUb2tlbiIsInN0b3JlQWNjZXNzVG9rZW4iLCJzdG9yZVJlZnJlc2hUb2tlbiIsIm9pZGNDbGllbnQiLCJodHRwVGltZW91dCIsImNsb2NrVG9sZXJhbmNlIiwiSG9tZSIsImluaXRpYWxTdWJzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImF1dGgwIiwiZ2V0U2Vzc2lvbiIsInJlcSIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsImZpcnN0UGFnZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFZSxTQUFTQSxNQUFULENBQWdCO0FBQUNDO0FBQUQsQ0FBaEIsRUFBd0I7QUFDbkMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsd0VBQWY7QUFBQSw0QkFDSTtBQUFHLGVBQVMsRUFBQywrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7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QTtBQUFBO0FBQUEsZ0JBSEU7QUFBQSxzQkFKSixFQWVJLENBQUMvQixJQUFELGlCQUFPO0FBQUcsaUJBQVMsRUFBQyxnQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEO0FBRU0sZUFBZThHLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEwQztBQUMvQyxRQUFNZCxPQUFPLEdBQUMsTUFBTWUsd0RBQUssQ0FBQ0MsVUFBTixDQUFpQkYsT0FBTyxDQUFDRyxHQUF6QixDQUFwQjtBQUNBLE1BQUkvRyxJQUFJLEdBQUMsRUFBVDs7QUFDQSxNQUFHOEYsT0FBSCxhQUFHQSxPQUFILHVCQUFHQSxPQUFPLENBQUVqRyxJQUFaLEVBQWlCO0FBQ2ZHLFFBQUksR0FBQyxNQUFNOEUseURBQUssQ0FBQ2tDLE1BQU4sQ0FBYTtBQUFDQyxxQkFBZSxFQUFHLGFBQVluQixPQUFPLENBQUNqRyxJQUFSLENBQWF1RSxHQUFJO0FBQWhELEtBQWIsRUFBa0U4QyxTQUFsRSxFQUFYO0FBQ0Q7O0FBRUQsU0FBTztBQUNMQyxTQUFLLEVBQUM7QUFDSlQsaUJBQVcsRUFBQzFCLHlFQUFhLENBQUNoRixJQUFELENBRHJCO0FBRUpILFVBQUksRUFBQyxDQUFBaUcsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVqRyxJQUFULEtBQWlCO0FBRmxCO0FBREQsR0FBUDtBQVNELEM7Ozs7Ozs7Ozs7O0FDbkVELGdEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcih7dXNlcn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCByb3VuZGVkIGp1c3RpZnktYmV0d2VlbiBiZy1ncmF5LTcwMCBpdGVtcy1jZW50ZXIgcHktNCBweC0yXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+TXkgU3Vic2NyaXB0aW9uczwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlciYmKDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMmwgcHktMiBweC0yIGZvbnQtbGcgdGV4dC13aGl0ZVwiPnt1c2VyLm5hbWV9PC9zcGFuPil9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciYmKDxhIGhyZWY9XCIvYXBpL2xvZ291dFwiY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNFwiPiBMb2dvdXQ8L2E+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICF1c2VyJiYoPGEgaHJlZj1cIi9hcGkvbG9naW5cImNsYXNzTmFtZT1cInJvdW5kZWQgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBweS0yIHB4LTRcIj5Mb2dpbjwvYT4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTdWJzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvU3Vic0NvbnRleHQnO1xyXG5pbXBvcnQgVGFncyBmcm9tICcuL1RhZ3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Vic0Zvcm0oKSB7XHJcbiAgXHJcbiAgICBjb25zdCBbc3VicyxzZXRTdWJzXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTonJyxcclxuICAgICAgICB1cmw6JycsXHJcbiAgICAgICAgYW1vdW50OicnLFxyXG4gICAgICAgIGRhdGU6JycsXHJcbiAgICAgICAgZWRhdGU6JycsXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgfSlcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICBuYW1lOicnLFxyXG4gICAgICAgIHVybDonJyxcclxuICAgICAgICBhbW91bnQ6JycsXHJcbiAgICAgICAgZGF0ZTonJyxcclxuICAgICAgICBlZGF0ZTonJyxcclxuICAgICAgICBcclxuICAgICAgfTtcclxuICAgIGNvbnN0IFtjb3VudCxzZXRDb3VudF09dXNlU3RhdGUoMClcclxuICAgIGNvbnN0IHsgYWRkU3VicyB9ID0gdXNlQ29udGV4dChTdWJzQ29udGV4dCk7XHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0U3Vicyh7Li4uc3VicyxbZS50YXJnZXQubmFtZV06ZS50YXJnZXQudmFsdWV9KTtcclxuICAgICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkZFN1YnMoc3VicylcclxuICAgICAgIFxyXG4gICAgICAgIHNldFN1YnMoey4uLmluaXRpYWxTdGF0ZX0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0Q291bnQoY291bnQgKyAxKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0gbXktNlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1zbSBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YnNjcmlwdGlvblwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtYi0yIHRleHQtZ3JheS04MDAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkIGEgU3Vic2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS01MDAgcm91bmRlZC1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1iLTIgdGV4dC1ncmF5LTgwMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICBEYXRlIG9mIFB1cmNoYXNlXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3Vicy5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGcgXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdWJzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItMiB0ZXh0LWdyYXktODAwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERhdGUgb2YgUmVuZXdhbFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJzLmVkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGcgXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzbGlua1wiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtYi0yIHRleHQtZ3JheS04MDAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICBMaW5rXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3Vicy51cmx9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS01MDAgcm91bmRlZC1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHJpYWxcIiBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItMiB0ZXh0LWdyYXktODAwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEZyZWUtVHJpYWxcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW1vdW50XCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1iLTIgdGV4dC1ncmF5LTgwMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICBBbW91bnRcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1YnMuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGcgXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIHJvdW5kZWQgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBweS0yIHB4LTRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCAse3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1N1YnNDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L1N1YnNDb250ZXh0J1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJzY3JpcHRpb24oe3N1YnNjcmlwdGlvbn0pIHtcclxuICAgIGNvbnN0IHt1cGRhdGVTdWJzLGRlbGV0ZVN1YnN9PXVzZUNvbnRleHQoU3Vic0NvbnRleHQpXHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGVDb21wbGV0ZWQ9ICgpPT57XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZHM9e1xyXG4gICAgICAgICAgICAuLi5zdWJzY3JpcHRpb24uZmllbGRzLFxyXG4gICAgICAgICAgICBhcmNoaXZlOiFzdWJzY3JpcHRpb24uZmllbGRzLmFyY2hpdmVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRTdWI9e2lkOnN1YnNjcmlwdGlvbi5pZCxmaWVsZHM6dXBkYXRlZEZpZWxkc31cclxuICAgICAgICB1cGRhdGVTdWJzKHVwZGF0ZWRTdWIpXHJcblxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coc3Vic2NyaXB0aW9uKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmctd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgc2hhZG93LWxnIHJvdW5kZWQtbGcgbXktMiBweS0yIHB4LTQgXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hcmtlZFwiIGlkPVwibWFya2VkXCIgY2hlY2tlZD17c3Vic2NyaXB0aW9uLmZpZWxkcy5hcmNoaXZlfSBjbGFzc05hbWU9XCJtci0yIGZvcm0tY2hlY2tib3ggaC01IHctNVwiIG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGVDb21wbGV0ZWR9Lz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGZsZXgtMSB0ZXh0LWdyYXktODAwICR7c3Vic2NyaXB0aW9uLmZpZWxkcy5hcmNoaXZlPyd1bmRlcmxpbmUnOicnfSBgfSA+e3N1YnNjcmlwdGlvbi5maWVsZHMubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIHB5LTEgcHgtMiByb3VuZGVkIFwiIG9uQ2xpY2s9eygpPT5kZWxldGVTdWJzKHN1YnNjcmlwdGlvbi5pZCl9PkRlbGV0ZSBNZSE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhZ3MoeyB0YWdzVXBkYXRlZCwga2V5IH0pIHtcclxuICAgIGNvbnN0IHRhZ0Nob2ljZXMgPSBbJzcgZGF5cycsICcxNSBkYXlzJywgJzMwIGRheXMnLCAnMzArIGRheXMnXTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFRhZ3MsIHNldFNlbGVjdGVkVGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZFRhZ3MoW10pO1xyXG4gICAgfSwgW2tleV0pO1xyXG5cclxuICAgIGNvbnN0IHRhZ0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCBhbHJlYWR5U2VsZWN0ZWQgPSBzZWxlY3RlZFRhZ3MuaW5jbHVkZXModmFsdWUpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkICYmICFhbHJlYWR5U2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWdzKFsuLi5zZWxlY3RlZFRhZ3MsIHZhbHVlXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghZS50YXJnZXQuY2hlY2tlZCAmJiBhbHJlYWR5U2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWdzKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWdzLmZpbHRlcigocHJldlRhZykgPT4gcHJldlRhZyAhPT0gdmFsdWUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHRhZ3NVcGRhdGVkKHNlbGVjdGVkVGFncyk7XHJcbiAgICB9LCBbc2VsZWN0ZWRUYWdzLCB0YWdzVXBkYXRlZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3RhZ0Nob2ljZXMubWFwKChjaG9pY2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lIG1yLTNcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIm1yLTIgZm9ybS1jaGVja2JveCBoLTUgdy01XCIgb25DaGFuZ2U9e3RhZ0NoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHsnICcgKyBjaG9pY2V9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTdWJzQ29udGV4dD1jcmVhdGVDb250ZXh0KClcclxuXHJcbmNvbnN0IFN1YnNQcm92aWRlcj0oe2NoaWxkcmVufSk9PntcclxuICAgIGNvbnN0IFtzdWJzLHNldFN1YnNdPXVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgcmVmcmVzaFN1YnM9YXN5bmMoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcz1hd2FpdCBmZXRjaCgnL2FwaS9nZXRTdWJzJylcclxuICAgICAgICAgICAgY29uc3QgbGF0ZXN0U3Vicz1hd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgIHNldFN1YnMobGF0ZXN0U3VicylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRTdWJzPWFzeW5jIChzdWJzKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9jcmVhdGVTdWJzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdWJzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFN1YnMoKHByZXZTdWJzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkU3VicyA9IFtuZXdUb2RvcywgLi4ucHJldlN1YnNdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRTdWJzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVN1YnM9YXN5bmModXBkYXRlZFN1Yik9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS91cGRhdGVTdWJzJyx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BVVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHVwZGF0ZWRTdWIpLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczp7J2NvbnRlbnQtdHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0U3VicygocHJldlN1YnMpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1N1YnM9Wy4uLnByZXZTdWJzXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdTdWI9ZXhpc3RpbmdTdWJzLmZpbmQoc3Vic2NyaXB0aW9uPT5zdWJzY3JpcHRpb24uaWQ9PT11cGRhdGVkU3ViLmlkKVxyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdTdWIuZmllbGRzPXVwZGF0ZWRTdWIuZmllbGRzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdTdWJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGVsZXRlU3Vicz1hc3luYyhpZCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9kZWxldGVTdWJzJyx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtpZH0pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRTdWJzKChwcmV2U3Vicyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3Vicy5maWx0ZXIoKHN1Yik9PnN1Yi5pZCE9PWlkKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxTdWJzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgIHN1YnMsc2V0U3VicyxyZWZyZXNoU3Vicyx1cGRhdGVTdWJzLGRlbGV0ZVN1YnMsYWRkU3Vic1xyXG4gICAgfX0+e2NoaWxkcmVufTwvU3Vic0NvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCB7U3Vic1Byb3ZpZGVyLFN1YnNDb250ZXh0fSIsInJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcbmNvbnN0IEFpcnRhYmxlPXJlcXVpcmUoJ2FpcnRhYmxlJylcclxuY29uc3QgYmFzZT1uZXcgQWlydGFibGUoe2FwaUtleTpwcm9jZXNzLmVudi5BSVJUQUJMRV9BUElfS0VZfSkuYmFzZShwcm9jZXNzLmVudi5BSVJUQUJMRV9CQVNFX0lEKVxyXG5jb25zdCB0YWJsZT1iYXNlKHByb2Nlc3MuZW52LkFJUlRBQkxFX1RBQkxFX05BTUUpXHJcbmNvbnN0IG1pbmlmeVJlY29yZHM9KHJlY29yZHMpPT57XHJcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAocmVjb3JkPT5taW5pZnlSZWNvcmQocmVjb3JkKSlcclxufVxyXG5jb25zdCBtaW5pZnlSZWNvcmQ9KHJlY29yZCk9PntcclxuICAgIGlmKCFyZWNvcmQuZmllbGRzLmFyY2hpdmUpe1xyXG4gICAgICAgIHJlY29yZC5maWVsZHMuYXJjaGl2ZT1mYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGlkOnJlY29yZC5pZCxcclxuICAgICAgICBmaWVsZHM6cmVjb3JkLmZpZWxkc1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7dGFibGUsbWluaWZ5UmVjb3JkLG1pbmlmeVJlY29yZHN9IiwiaW1wb3J0IHsgaW5pdEF1dGgwIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdEF1dGgwKHtcclxuICBkb21haW46IHByb2Nlc3MuZW52LkFVVEgwX0RPTUFJTixcclxuICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxyXG4gIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfU0VDUkVULFxyXG4gIHNjb3BlOiAnb3BlbmlkIHByb2ZpbGUnLFxyXG4gIHJlZGlyZWN0VXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYWxsYmFjaycsXHJcbiAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgLy8gVGhlIHNlY3JldCB1c2VkIHRvIGVuY3J5cHQgdGhlIGNvb2tpZS5cclxuICAgIGNvb2tpZVNlY3JldDogcHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1JFVCxcclxuICAgIC8vIFRoZSBjb29raWUgbGlmZXRpbWUgKGV4cGlyYXRpb24pIGluIHNlY29uZHMuIFNldCB0byA4IGhvdXJzIGJ5IGRlZmF1bHQuXHJcbiAgICBjb29raWVMaWZldGltZTogNjAgKiA2MCAqIDgsXHJcbiAgICAvLyAoT3B0aW9uYWwpIFRoZSBjb29raWUgZG9tYWluIHRoaXMgc2hvdWxkIHJ1biBvbi4gTGVhdmUgaXQgYmxhbmsgdG8gcmVzdHJpY3QgaXQgdG8geW91ciBkb21haW4uXHJcbiAgICBcclxuICAgIC8vIChPcHRpb25hbCkgU2FtZVNpdGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHNlc3Npb24gY29va2llLiBEZWZhdWx0cyB0byAnbGF4JywgYnV0IGNhbiBiZSBjaGFuZ2VkIHRvICdzdHJpY3QnIG9yICdub25lJy4gU2V0IGl0IHRvIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgdGhlIFNhbWVTaXRlIHNldHRpbmcuXHJcbiAgICBjb29raWVTYW1lU2l0ZTogJ2xheCcsXHJcbiAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSBpZF90b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICBzdG9yZUlkVG9rZW46IGZhbHNlLFxyXG4gICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgYWNjZXNzX3Rva2VuIGluIHRoZSBzZXNzaW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgIHN0b3JlQWNjZXNzVG9rZW46IGZhbHNlLFxyXG4gICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgcmVmcmVzaF90b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICBzdG9yZVJlZnJlc2hUb2tlbjogZmFsc2VcclxuICB9LFxyXG4gIG9pZGNDbGllbnQ6IHtcclxuICAgIC8vIChPcHRpb25hbCkgQ29uZmlndXJlIHRoZSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBmb3IgSFRUUCByZXF1ZXN0cyB0byBBdXRoMC5cclxuICAgIGh0dHBUaW1lb3V0OiAyNTAwLFxyXG4gICAgLy8gKE9wdGlvbmFsKSBDb25maWd1cmUgdGhlIGNsb2NrIHRvbGVyYW5jZSBpbiBtaWxsaXNlY29uZHMsIGlmIHRoZSB0aW1lIG9uIHlvdXIgc2VydmVyIGlzIHJ1bm5pbmcgYmVoaW5kLlxyXG4gICAgY2xvY2tUb2xlcmFuY2U6IDEwMDAwXHJcbiAgfVxyXG59KTsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1N1YnNjcmlwdGlvbidcbmltcG9ydCBTdWJzRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1N1YnNGb3JtJ1xuaW1wb3J0IHt0YWJsZSxtaW5pZnlSZWNvcmRzfSBmcm9tICcuL2FwaS91dGlscy9BaXJ0YWJsZSdcbmltcG9ydCB7U3Vic0NvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvU3Vic0NvbnRleHQnXG5pbXBvcnQge3VzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBhdXRoMCBmcm9tICcuL2FwaS91dGlscy9hdXRoMCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7aW5pdGlhbFN1YnMsdXNlcn0pIHtcbiAgY29uc3Qge3N1YnMsc2V0U3Vic309dXNlQ29udGV4dChTdWJzQ29udGV4dClcbiAgXG4gIGNvbnNvbGUubG9nKHVzZXIpXG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBzZXRTdWJzKGluaXRpYWxTdWJzKVxuICB9LFtdKVxuXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TdWJzY3JpcHRpb25zIFRyYWNrZXIgQXBwPC90aXRsZT5cbiAgICAgICAgXG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2YmFyIGNsYXNzTmFtZT1cIm5hdmJhclwiIHVzZXI9e3VzZXJ9IC8+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInB4LTRcIj5cbiAgICAgICAgXG4gICAgICAgIDxici8+XG4gICAgICAgIHt1c2VyICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBtYi00XCI+U3Vic2NyaXB0aW9ucyBUcmFja2VyPC9oMT5cbiAgICAgICAgICAgICA8U3Vic0Zvcm0vPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3N1YnMgJiZcbiAgICAgICAgc3Vicy5tYXAoc3Vic2NyaXB0aW9uPT48U3Vic2NyaXB0aW9uIGtleT17c3Vic2NyaXB0aW9uLmlkfSBzdWJzY3JpcHRpb249e3N1YnNjcmlwdGlvbn0gLz4pfVxuICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgIFxuICAgICAgICB7XG4gICAgICAgICAgIXVzZXImJjxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyIG1iLTQgcHktNFwiPkxvZyBpbiB0byBzYXZlIHlvdXIgc3Vic2NyaXB0aW9uczwvcD5cbiAgICAgICAgfVxuICAgICAgPC9tYWluPlxuXG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xuICBjb25zdCBzZXNzaW9uPWF3YWl0IGF1dGgwLmdldFNlc3Npb24oY29udGV4dC5yZXEpXG4gIGxldCBzdWJzPVtdXG4gIGlmKHNlc3Npb24/LnVzZXIpe1xuICAgIHN1YnM9YXdhaXQgdGFibGUuc2VsZWN0KHtmaWx0ZXJCeUZvcm11bGE6IGB1c2VySWQgPSAnJHtzZXNzaW9uLnVzZXIuc3VifSdgfSkuZmlyc3RQYWdlKClcbiAgfVxuICBcbiAgcmV0dXJuIHtcbiAgICBwcm9wczp7XG4gICAgICBpbml0aWFsU3ViczptaW5pZnlSZWNvcmRzKHN1YnMpLFxuICAgICAgdXNlcjpzZXNzaW9uPy51c2VyIHx8IG51bGxcbiAgICB9XG4gIH1cbiAgICBcbiAgXG5cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFpcnRhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
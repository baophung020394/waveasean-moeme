(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var actions_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/app */ "./src/actions/app/index.tsx");
/* harmony import */ var components_Spinner_LoadingView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Spinner/LoadingView */ "./src/components/Spinner/LoadingView.tsx");
/* harmony import */ var layouts_Channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts/Channel */ "./src/layouts/Channel/index.tsx");
/* harmony import */ var layouts_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! layouts/Home */ "./src/layouts/Home/index.tsx");
/* harmony import */ var layouts_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! layouts/Login */ "./src/layouts/Login/index.tsx");
/* harmony import */ var layouts_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! layouts/Profile */ "./src/layouts/Profile/index.tsx");
/* harmony import */ var layouts_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! layouts/Settings */ "./src/layouts/Settings/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var services_TokenService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! services/TokenService */ "./src/services/TokenService.ts");
/* harmony import */ var store_StoreProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/StoreProvider */ "./src/store/StoreProvider.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/common/Header */ "./src/components/common/Header/index.tsx");
/* harmony import */ var actions_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! actions/auth */ "./src/actions/auth/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
var _excluded = ["children"];
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















function AuthRoute(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var token = (0,services_TokenService__WEBPACK_IMPORTED_MODULE_9__.getAccessToken)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref2) {
    var auth = _ref2.auth;
    return auth.user;
  });
  console.log("user route", user);
  var onlyChild = react__WEBPACK_IMPORTED_MODULE_7__.Children.only(children);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, _objectSpread(_objectSpread({}, rest), {}, {
    render: function render(props) {
      return user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.cloneElement(onlyChild, _objectSpread(_objectSpread({}, rest), props)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Redirect, {
        to: "/"
      });
    }
  }));
}
var ContentWrapper = function ContentWrapper(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
    className: "content-page",
    children: children
  });
};
function MoeMe() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  var isOnline = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref4) {
    var app = _ref4.app;
    return app.isOnline;
  });
  var isChecking = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref5) {
    var auth = _ref5.auth;
    return auth.isChecking;
  });
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref6) {
    var auth = _ref6.auth;
    return auth.user;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    var unsubFromAuth = dispatch((0,actions_auth__WEBPACK_IMPORTED_MODULE_12__.listenToAuthChanges)());
    var unsubFromConnection = dispatch((0,actions_app__WEBPACK_IMPORTED_MODULE_0__.listenToConnectionChanges)());
    return function () {
      unsubFromAuth();
      unsubFromConnection();
    };
  }, [dispatch]);

  // useEffect(() => {
  //   let unsubFromUserConnection: any;
  //   if (user?.uid) {
  //     unsubFromUserConnection = dispatch(checkUserConnection(user.uid));
  //   }

  //   return () => {
  //     unsubFromUserConnection && unsubFromUserConnection();
  //   };
  // }, [dispatch, user]);

  if (!isOnline) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(components_Spinner_LoadingView__WEBPACK_IMPORTED_MODULE_1__["default"], {
      message: "MoeMe has been disconnected from the internet. Please reconnect...."
    });
  }
  if (isChecking) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(components_Spinner_LoadingView__WEBPACK_IMPORTED_MODULE_1__["default"], {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.BrowserRouter, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_common_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(ContentWrapper, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Switch, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
          exact: true,
          path: "/",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(layouts_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(AuthRoute, {
          exact: true,
          path: "/home",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(layouts_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(AuthRoute, {
          exact: true,
          path: "/channel",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(layouts_Channel__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(AuthRoute, {
          path: "/channel/:id",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(layouts_Channel__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(AuthRoute, {
          path: "/profile",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(layouts_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(AuthRoute, {
          path: "/settings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(layouts_Settings__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        })]
      })
    })]
  });
}
function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(store_StoreProvider__WEBPACK_IMPORTED_MODULE_10__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(MoeMe, {})
  });
}
var ContentWrapperCSS = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding-top: 56px;\n"])));

/***/ }),

/***/ "./src/actions/app/index.tsx":
/*!***********************************!*\
  !*** ./src/actions/app/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listenToConnectionChanges": () => (/* binding */ listenToConnectionChanges)
/* harmony export */ });
var onStatusChange = function onStatusChange(dispatch) {
  return function () {
    var isOnline = navigator.onLine;
    var action = isOnline ? {
      type: "APP_IS_ONLINE",
      isOnline: isOnline
    } : {
      type: "APP_IS_OFFLINE",
      isOnline: isOnline
    };
    dispatch(action);
  };
};
var listenToConnectionChanges = function listenToConnectionChanges() {
  return function (dispatch) {
    var connectionHandler = onStatusChange(dispatch);
    window.addEventListener("online", connectionHandler);
    window.addEventListener("offline", connectionHandler);
    return function () {
      window.removeEventListener("online", connectionHandler);
      window.removeEventListener("offline", connectionHandler);
    };
  };
};

/***/ }),

/***/ "./src/actions/auth/index.ts":
/*!***********************************!*\
  !*** ./src/actions/auth/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listenToAuthChanges": () => (/* binding */ listenToAuthChanges),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/auth */ "./src/api/auth/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var login = function login(formData) {
  return function (dispatch) {
    dispatch({
      type: "AUTH_LOGIN_INIT"
    });
    return api_auth__WEBPACK_IMPORTED_MODULE_0__.login(formData).then(function (user) {
      // setUser(user);
      console.log("user login", user);
      return dispatch({
        type: "AUTH_LOGIN_SUCCESS",
        user: user
      });
    })["catch"](function (error) {
      dispatch({
        type: "AUTH_LOGIN_ERROR",
        error: error
      });
      logout();
    });
  };
};

// export const loginFirebase = (formData: any) => (dispatch: any) => {
//   dispatch({
//     type: "AUTH_LOGIN_FIREBASE_INIT",
//   });
//   return api
//     .login(formData)
//     .then((user) =>
//       dispatch({
//         type: "AUTH_LOGIN_FIREBASE_SUCCESS",
//         user,
//       })
//     )
//     .catch((error) => dispatch({ type: "AUTH_LOGIN_FIREBASE_ERROR", error }));
// };

var logout = function logout() {
  return function (dispatch) {
    return (
      // dispatch({
      //   type: "AUTH_LOGOUT_INIT",
      // });
      api_auth__WEBPACK_IMPORTED_MODULE_0__.logout().then(function (_) {
        dispatch({
          type: "AUTH_LOGOUT_SUCCESS"
        });
        dispatch({
          type: "CHATS_FETCH_RESTART"
        });
      })
    );
  };
};
// return dispatch({
//   type: "AUTH_LOGOUT_SUCCESS",
// });

var listenToAuthChanges = function listenToAuthChanges() {
  return function (dispatch) {
    console.log("vo");
    dispatch({
      type: "AUTH_ON_INIT"
    });
    return api_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanges( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(authUser) {
        var userProfile;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log("authUser", authUser);
              // const user = JSON.parse(localStorage.getItem("_profile"));
              if (!authUser) {
                _context.next = 10;
                break;
              }
              _context.next = 4;
              return api_auth__WEBPACK_IMPORTED_MODULE_0__.getUserProfile(authUser.uid);
            case 4:
              userProfile = _context.sent;
              console.log({
                userProfile: userProfile
              });
              dispatch({
                type: "AUTH_ON_SUCCESS",
                user: userProfile
              });
              console.log("we are authenticated");
              _context.next = 12;
              break;
            case 10:
              dispatch({
                type: "AUTH_ON_ERROR"
              });
              console.log("we are NOT authenticated");
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };
};

/***/ }),

/***/ "./src/actions/channel/index.ts":
/*!**************************************!*\
  !*** ./src/actions/channel/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createChannel": () => (/* binding */ createChannel),
/* harmony export */   "fetchChannels": () => (/* binding */ fetchChannels),
/* harmony export */   "fetchChannelsCompare": () => (/* binding */ fetchChannelsCompare),
/* harmony export */   "getChannelList": () => (/* binding */ getChannelList),
/* harmony export */   "joinChannel": () => (/* binding */ joinChannel),
/* harmony export */   "registerMessageSubscription": () => (/* binding */ registerMessageSubscription),
/* harmony export */   "sendChannelMessage": () => (/* binding */ sendChannelMessage),
/* harmony export */   "subscribeToChannel": () => (/* binding */ subscribeToChannel),
/* harmony export */   "subscribeToMessages": () => (/* binding */ subscribeToMessages),
/* harmony export */   "subscribeToProfile": () => (/* binding */ subscribeToProfile)
/* harmony export */ });
/* harmony import */ var api_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/channel */ "./src/api/channel/index.ts");
/* harmony import */ var db_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! db/firestore */ "./src/db/firestore.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }


var getChannelList = function getChannelList(userId) {
  return function (dispatch) {
    console.log({
      userId: userId
    });
    dispatch({
      type: "CHANNEL_ON_INIT"
    });
    return api_channel__WEBPACK_IMPORTED_MODULE_0__.getListChannel(userId).then(function (channel) {
      return dispatch({
        type: "CHANNEL_ON_SUCCESS",
        channel: channel
      });
    })["catch"](function (error) {
      return dispatch({
        type: "CHANNEL_ON_ERROR",
        error: error
      });
    });
  };
};
var fetchChannels = function fetchChannels() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState) {
      var user, channels, sortedChannels;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            user = getState().auth.user;
            dispatch({
              type: "CHANNELS_FETCH_INIT"
            });
            _context.next = 4;
            return api_channel__WEBPACK_IMPORTED_MODULE_0__.fetchChannels();
          case 4:
            channels = _context.sent;
            channels === null || channels === void 0 ? void 0 : channels.forEach(function (channel) {
              var _channel$joinedUsers;
              return channel.joinedUsers = channel === null || channel === void 0 ? void 0 : (_channel$joinedUsers = channel.joinedUsers) === null || _channel$joinedUsers === void 0 ? void 0 : _channel$joinedUsers.map(function (user) {
                return user.id;
              });
            });
            sortedChannels = channels === null || channels === void 0 ? void 0 : channels.reduce(function (accuChannels, channel) {
              if (user) {
                accuChannels[channel !== null && channel !== void 0 && channel.joinedUsers.includes(user && user.uid) ? "joined" : "available"].push(channel);
              }
              return accuChannels;
            }, {
              joined: [],
              available: []
            });
            dispatch(_objectSpread({
              type: "CHANNELS_FETCH_SUCCESS"
            }, sortedChannels));
            return _context.abrupt("return", sortedChannels);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};
var fetchChannelsCompare = function fetchChannelsCompare() {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      var channelsCompare;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return api_channel__WEBPACK_IMPORTED_MODULE_0__.fetchChannels();
          case 2:
            channelsCompare = _context2.sent;
            dispatch({
              type: "CHANNELS_COMPARE_FETCH_SUCCESS",
              channelsCompare: channelsCompare
            });
            return _context2.abrupt("return", channelsCompare);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var subscribeToChannel = function subscribeToChannel(channelId) {
  return function (dispatch) {
    return api_channel__WEBPACK_IMPORTED_MODULE_0__.subscribeToChannel(channelId, /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(channel) {
        var joinedUsers;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Promise.all(channel === null || channel === void 0 ? void 0 : channel.joinedUsers.map( /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(userRef) {
                  var userSnapshot;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return userRef.get();
                      case 2:
                        userSnapshot = _context3.sent;
                        return _context3.abrupt("return", userSnapshot.data());
                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x5) {
                  return _ref4.apply(this, arguments);
                };
              }()));
            case 2:
              joinedUsers = _context4.sent;
              channel.joinedUsers = joinedUsers;
              dispatch({
                type: "CHANNELS_SET_ACTIVE_CHANNEL",
                channel: channel
              });
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }());
  };
};
var joinChannel = function joinChannel(channel, uid) {
  return function (dispatch) {
    console.log("join channel", channel);
    return api_channel__WEBPACK_IMPORTED_MODULE_0__.joinChannel(uid, channel === null || channel === void 0 ? void 0 : channel.id).then(function (channelId) {
      dispatch({
        type: "CHANNELS_JOIN_SUCCESS",
        channel: channel
      });
    });
  };
};
var subscribeToProfile = function subscribeToProfile(uid, channelId) {
  return function (dispatch) {
    return api_channel__WEBPACK_IMPORTED_MODULE_0__.subscribeToProfile(uid, function (user) {
      dispatch({
        type: "CHANNELS_UPDATE_USER_STATE",
        user: user,
        channelId: channelId
      });
    });
  };
};
var createChannel = function createChannel(formData, userId) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(dispatch) {
      var newChannel, channelId;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            newChannel = _objectSpread({}, formData);
            newChannel.admin = db_firestore__WEBPACK_IMPORTED_MODULE_1__["default"].doc("profiles/".concat(userId));
            _context5.next = 4;
            return api_channel__WEBPACK_IMPORTED_MODULE_0__.createChannel(newChannel);
          case 4:
            channelId = _context5.sent;
            dispatch({
              type: "CHANNELS_CREATE_SUCCESS"
            });
            _context5.next = 8;
            return api_channel__WEBPACK_IMPORTED_MODULE_0__.joinChannel(userId, channelId);
          case 8:
            dispatch({
              type: "CHANNELS_JOIN_SUCCESS",
              channel: _objectSpread(_objectSpread({}, newChannel), {}, {
                id: channelId
              })
            });
            return _context5.abrupt("return", channelId);
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x6) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var sendChannelMessage = function sendChannelMessage(message, channelId) {
  return function (dispatch, getState) {
    var newMessage = _objectSpread({}, message);
    console.log({
      newMessage: newMessage
    });
    var user = getState().auth.user;
    var userRef = db_firestore__WEBPACK_IMPORTED_MODULE_1__["default"].doc("profiles/".concat(user.uid));
    newMessage.author = userRef;
    return api_channel__WEBPACK_IMPORTED_MODULE_0__.sendChannelMessage(newMessage, channelId).then(function (_) {
      return dispatch({
        type: "CHANNELS_MESSAGE_SENT"
      });
    });
  };
};
var subscribeToMessages = function subscribeToMessages(channelId) {
  return function (dispatch) {
    return api_channel__WEBPACK_IMPORTED_MODULE_0__.subscribeToMessages(channelId, /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(changes) {
        var messages, messageWithAuthor, cache, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, message, userSnapshot;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              messages = changes.map(function (change) {
                if (change.type === "added") {
                  return _objectSpread({
                    id: change.doc.id
                  }, change.doc.data());
                }
              });
              messageWithAuthor = [];
              cache = {};
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context6.prev = 5;
              _iterator = _asyncIterator(messages);
            case 7:
              _context6.next = 9;
              return _iterator.next();
            case 9:
              if (!(_iteratorAbruptCompletion = !(_step = _context6.sent).done)) {
                _context6.next = 24;
                break;
              }
              message = _step.value;
              if (!cache[message.author.id]) {
                _context6.next = 15;
                break;
              }
              message.author = cache[message.author.id];
              _context6.next = 20;
              break;
            case 15:
              _context6.next = 17;
              return message.author.get();
            case 17:
              userSnapshot = _context6.sent;
              cache[userSnapshot.id] = userSnapshot.data();
              message.author = cache[userSnapshot.id];
            case 20:
              messageWithAuthor.push(message);
            case 21:
              _iteratorAbruptCompletion = false;
              _context6.next = 7;
              break;
            case 24:
              _context6.next = 30;
              break;
            case 26:
              _context6.prev = 26;
              _context6.t0 = _context6["catch"](5);
              _didIteratorError = true;
              _iteratorError = _context6.t0;
            case 30:
              _context6.prev = 30;
              _context6.prev = 31;
              if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                _context6.next = 35;
                break;
              }
              _context6.next = 35;
              return _iterator["return"]();
            case 35:
              _context6.prev = 35;
              if (!_didIteratorError) {
                _context6.next = 38;
                break;
              }
              throw _iteratorError;
            case 38:
              return _context6.finish(35);
            case 39:
              return _context6.finish(30);
            case 40:
              return _context6.abrupt("return", dispatch({
                type: "CHANNELS_SET_MESSAGES",
                messages: messages,
                channelId: channelId
              }));
            case 41:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[5, 26, 30, 40], [31,, 35, 39]]);
      }));
      return function (_x7) {
        return _ref6.apply(this, arguments);
      };
    }());
  };
};
var registerMessageSubscription = function registerMessageSubscription(channelId, messageSub) {
  return {
    type: "CHANNELS_REGISTER_MESSAGE_SUB",
    sub: messageSub,
    channelId: channelId
  };
};

/***/ }),

/***/ "./src/api/auth/index.ts":
/*!*******************************!*\
  !*** ./src/api/auth/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUsers": () => (/* binding */ fetchUsers),
/* harmony export */   "getUserProfile": () => (/* binding */ getUserProfile),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "loginFirebase": () => (/* binding */ loginFirebase),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "onAuthStateChanges": () => (/* binding */ onAuthStateChanges)
/* harmony export */ });
/* harmony import */ var api_axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/axiosClient */ "./src/api/axiosClient.ts");
/* harmony import */ var services_TokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/TokenService */ "./src/services/TokenService.ts");
/* harmony import */ var db_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! db/firestore */ "./src/db/firestore.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






// Create collection profiles
var createUserProfile = function createUserProfile(userProfile) {
  return db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].collection("profiles").doc(userProfile.uid).set(userProfile);
};
var extractSnapshotData = function extractSnapshotData(snapshot) {
  return snapshot.docs.map(function (doc) {
    return _objectSpread({
      id: doc.id
    }, doc.data());
  });
};
var fetchUsers = function fetchUsers() {
  return db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].collection("profiles").get().then(extractSnapshotData);
};
var getUserProfile = function getUserProfile(uid) {
  return db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].collection("profiles").doc(uid).get().then(function (snapshot) {
    return snapshot.data();
  });
};
var login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var userId, userPassword, url, data, resLogin, dataFirebase, listUsers, dupUser, _loginFireBaseRes, _yield$firebase$auth$, user, userProfileRegister, loginFireBaseRes;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userId = _ref.userId, userPassword = _ref.userPassword;
          url = "/00010001";
          data = {
            params: {
              deviceType: "web",
              userId: userId,
              userPassword: userPassword
            }
          };
          _context.next = 5;
          return api_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, JSON.stringify(data));
        case 5:
          resLogin = _context.sent;
          (0,services_TokenService__WEBPACK_IMPORTED_MODULE_1__.setUser)(resLogin);
          console.log({
            resLogin: resLogin
          });
          dataFirebase = _objectSpread({}, resLogin);
          dataFirebase.email = "".concat(data.params.userId, "@gmail.com");
          dataFirebase.password = "".concat(data.params.userPassword, "56");
          _context.next = 13;
          return fetchUsers();
        case 13:
          listUsers = _context.sent;
          console.log({
            listUsers: listUsers
          });
          dupUser = listUsers.filter(function (user) {
            return user.email === dataFirebase.email;
          });
          console.log({
            dupUser: dupUser
          });
          if (!(dupUser.length > 0)) {
            _context.next = 22;
            break;
          }
          _context.next = 20;
          return loginFirebase(dataFirebase);
        case 20:
          _loginFireBaseRes = _context.sent;
          return _context.abrupt("return", _loginFireBaseRes);
        case 22:
          _context.next = 24;
          return firebase_app__WEBPACK_IMPORTED_MODULE_3___default().auth().createUserWithEmailAndPassword(dataFirebase.email, dataFirebase.password);
        case 24:
          _yield$firebase$auth$ = _context.sent;
          user = _yield$firebase$auth$.user;
          userProfileRegister = {
            userId: data.params.userId,
            uid: user.uid,
            username: user.uid,
            email: dataFirebase.email,
            avatar: resLogin === null || resLogin === void 0 ? void 0 : resLogin.params.profile_image,
            atk: resLogin === null || resLogin === void 0 ? void 0 : resLogin.params.atk,
            rtk: resLogin === null || resLogin === void 0 ? void 0 : resLogin.params.rtk,
            joinedChannels: []
          };
          _context.next = 29;
          return createUserProfile(userProfileRegister);
        case 29:
          _context.next = 31;
          return loginFirebase(dataFirebase);
        case 31:
          loginFireBaseRes = _context.sent;
          return _context.abrupt("return", loginFireBaseRes);
        case 33:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function login(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var loginFirebase = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
    var email, password, _yield$firebase$auth$2, user, userProfile;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          email = _ref3.email, password = _ref3.password;
          _context2.next = 3;
          return firebase_app__WEBPACK_IMPORTED_MODULE_3___default().auth().signInWithEmailAndPassword(email, password);
        case 3:
          _yield$firebase$auth$2 = _context2.sent;
          user = _yield$firebase$auth$2.user;
          _context2.next = 7;
          return getUserProfile(user.uid);
        case 7:
          userProfile = _context2.sent;
          return _context2.abrupt("return", userProfile);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function loginFirebase(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

// export const logout = () => {
//   removeUser();
// };

var logout = function logout() {
  (0,services_TokenService__WEBPACK_IMPORTED_MODULE_1__.removeUser)();
  return firebase_app__WEBPACK_IMPORTED_MODULE_3___default().auth().signOut();
};
var onAuthStateChanges = function onAuthStateChanges(onAuth) {
  return firebase_app__WEBPACK_IMPORTED_MODULE_3___default().auth().onAuthStateChanged(onAuth);
};

/***/ }),

/***/ "./src/api/axiosClient.ts":
/*!********************************!*\
  !*** ./src/api/axiosClient.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var services_TokenService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/TokenService */ "./src/services/TokenService.ts");


var axiosClient = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
  baseURL: "https://moeme-web-dev.aveapp.com/moa",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    Authorization: "value1"
  }
});
axiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  var token = (0,services_TokenService__WEBPACK_IMPORTED_MODULE_0__.getAccessToken)();
  console.log({
    token: token
  });
  if (token) {
    config.headers.set("Authorization", "MOA ".concat(token));
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // const originalConfig = error.config;
  // if (originalConfig.url !== "/" && error.code === "ERR_NETWORK") {
  //   // Access Token was expired
  //   if (!originalConfig.validateStatus()) {
  //     try {
  //       const refreshToken = getLocalRefreshToken();

  //       updateLocalAccessToken(refreshToken);

  //       return axiosClient(originalConfig);
  //     } catch (_error) {
  //       return Promise.reject(_error);
  //     }
  //   }
  // }

  return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosClient);

/***/ }),

/***/ "./src/api/channel/index.ts":
/*!**********************************!*\
  !*** ./src/api/channel/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createChannel": () => (/* binding */ createChannel),
/* harmony export */   "fetchChannels": () => (/* binding */ fetchChannels),
/* harmony export */   "getListChannel": () => (/* binding */ getListChannel),
/* harmony export */   "joinChannel": () => (/* binding */ joinChannel),
/* harmony export */   "sendChannelMessage": () => (/* binding */ sendChannelMessage),
/* harmony export */   "subscribeToChannel": () => (/* binding */ subscribeToChannel),
/* harmony export */   "subscribeToMessages": () => (/* binding */ subscribeToMessages),
/* harmony export */   "subscribeToProfile": () => (/* binding */ subscribeToProfile)
/* harmony export */ });
/* harmony import */ var api_axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/axiosClient */ "./src/api/axiosClient.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! db/firestore */ "./src/db/firestore.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var getListChannel = function getListChannel(userId) {
  var url = "/00040044";
  var data = {
    params: {
      userId: userId
    }
  };
  return api_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, JSON.stringify(data));
};
var extractSnapshotData = function extractSnapshotData(snapshot) {
  return snapshot.docs.map(function (doc) {
    return _objectSpread({
      id: doc.id
    }, doc.data());
  });
};
var fetchChannels = function fetchChannels() {
  return db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].collection("channels").get().then(extractSnapshotData);
};
var createChannel = function createChannel(channel) {
  return db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].collection("channels").add(channel).then(function (docRef) {
    return docRef.id;
  });
};
var subscribeToChannel = function subscribeToChannel(channelId, onSubsribe) {
  return db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].collection("channels").doc(channelId).onSnapshot(function (snapshot) {
    var channel = _objectSpread({
      id: snapshot.id
    }, snapshot.data());
    onSubsribe(channel);
  });
};
var subscribeToProfile = function subscribeToProfile(uid, onSubsribe) {
  return db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].collection("profiles").doc(uid).onSnapshot(function (snapshot) {
    return onSubsribe(snapshot.data());
  });
};
var joinChannel = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(userId, channelId) {
    var userRef, channelRef;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userRef = db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].doc("profiles/".concat(userId));
          channelRef = db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].doc("channels/".concat(channelId));
          _context.next = 4;
          return userRef.update({
            joinedChannels: firebase_app__WEBPACK_IMPORTED_MODULE_1___default().firestore.FieldValue.arrayUnion(channelRef)
          });
        case 4:
          _context.next = 6;
          return channelRef.update({
            joinedUsers: firebase_app__WEBPACK_IMPORTED_MODULE_1___default().firestore.FieldValue.arrayUnion(userRef)
          });
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function joinChannel(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var sendChannelMessage = function sendChannelMessage(message, channelId) {
  return db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].collection("channels").doc(channelId).collection("messages").doc(message.timestamp).set(message);
};
var subscribeToMessages = function subscribeToMessages(channelId, onSubsribe) {
  return db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].collection("channels").doc(channelId).collection("messages").onSnapshot(function (snapshot) {
    return onSubsribe(snapshot.docChanges());
  });
};

/***/ }),

/***/ "./src/assets/scss/mixin.ts":
/*!**********************************!*\
  !*** ./src/assets/scss/mixin.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakpoints": () => (/* binding */ breakpoints),
/* harmony export */   "responsive": () => (/* binding */ responsive)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Breakpoints
var breakpoints = {
  xs: 0,
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px"
};
var responsive = Object.keys(breakpoints).reduce(function (accumulator, label) {
  accumulator[label] = function () {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      @media (max-width: ", ") {\n        ", ";\n      }\n    "])), breakpoints[label], styled_components__WEBPACK_IMPORTED_MODULE_0__.css.apply(void 0, arguments));
  };
  return accumulator;
}, {});

/***/ }),

/***/ "./src/components/CardChannel/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/CardChannel/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var hooks_useFormatNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/useFormatNumber */ "./src/hooks/useFormatNumber.ts");
/* harmony import */ var assets_images_icon_STO_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/icon/STO.png */ "./src/assets/images/icon/STO.png");
/* harmony import */ var assets_images_icon_ORG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/icon/ORG.png */ "./src/assets/images/icon/ORG.png");
/* harmony import */ var assets_images_icon_PER_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/icon/PER.png */ "./src/assets/images/icon/PER.png");
/* harmony import */ var assets_images_icon_SPL_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/icon/SPL.png */ "./src/assets/images/icon/SPL.png");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var actions_channel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/channel */ "./src/actions/channel/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












function CardChannel(_ref) {
  var channel = _ref.channel,
    onClick = _ref.onClick,
    isGoChannel = _ref.isGoChannel;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref2) {
    var auth = _ref2.auth;
    return auth.user;
  });
  var renderChannelType = function renderChannelType(channelType) {
    switch (channelType) {
      case "STO":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "tag",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: assets_images_icon_STO_png__WEBPACK_IMPORTED_MODULE_2__,
              className: "iconTag"
            })
          }), "\uC885\uBAA9"]
        });
      case "ORG":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "tag",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: assets_images_icon_ORG_png__WEBPACK_IMPORTED_MODULE_3__,
              className: "iconTag"
            })
          }), "\uAE30\uAD00"]
        });
      case "PER":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "tag",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: assets_images_icon_PER_png__WEBPACK_IMPORTED_MODULE_4__,
              className: "iconTag"
            })
          }), "\uAC1C\uC778"]
        });
      case "SPL":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "tag",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: assets_images_icon_SPL_png__WEBPACK_IMPORTED_MODULE_5__,
              className: "iconTag"
            })
          }), "\uC804\uBB38\uAC00"]
        });
      default:
        return null;
    }
  };
  var onChooseChannel = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(channel) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log({
              isGoChannel: isGoChannel
            });
            _context.t0 = isGoChannel;
            _context.next = _context.t0 === "GO_CHANNEL" ? 4 : _context.t0 === "CREATE_CHANNEL" ? 5 : _context.t0 === "JOIN_CHANNEL" ? 6 : 7;
            break;
          case 4:
            return _context.abrupt("return", history.push("/channel/".concat(channel === null || channel === void 0 ? void 0 : channel.id)));
          case 5:
            return _context.abrupt("return", askForConfirmtionOldChannel(channel));
          case 6:
            return _context.abrupt("return", askForConfirmtionNewChannel(channel));
          case 7:
            return _context.abrupt("return", history.push("/channel/".concat(channel === null || channel === void 0 ? void 0 : channel.id)));
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onChooseChannel(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var askForConfirmtionOldChannel = function askForConfirmtionOldChannel(channel) {
    var isConfirming = confirm("Do you want to create & join channel: ".concat(channel.room_name));
    if (isConfirming) {
      dispatch((0,actions_channel__WEBPACK_IMPORTED_MODULE_7__.createChannel)(channel, user.uid));
    }
  };
  var askForConfirmtionNewChannel = function askForConfirmtionNewChannel(channel) {
    var isConfirming = confirm("Do you want to join channel: ".concat(channel.room_name));
    if (isConfirming) {
      dispatch((0,actions_channel__WEBPACK_IMPORTED_MODULE_7__.joinChannel)(channel, user.uid));
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(CardChannelStyled, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "card",
      onClick: function onClick() {
        return onChooseChannel(channel);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "card--top",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "card--top__infor",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("object", {
            className: "icon40 avatar",
            data: "http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=7&serverfile=thumb_".concat(channel.room_profile_image),
            type: "image/png",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: "http://www2.aveapp.com/wp-content/uploads/2021/05/w2560.jpg",
              alt: "avatar",
              className: "icon40 avatar"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "infor",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
              children: channel === null || channel === void 0 ? void 0 : channel.room_name
            }), renderChannelType(channel === null || channel === void 0 ? void 0 : channel.chnl_type)]
          })]
        }), Number(channel === null || channel === void 0 ? void 0 : channel.unread) > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "card--top__notify",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            children: "New"
          })
        }) : null]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "card--bottom",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "card--bottom__person",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("object", {
            className: "icon24 avatar",
            data: "http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=12&userid=".concat(channel.ownerId, "&roomid=").concat(channel === null || channel === void 0 ? void 0 : channel.roomId),
            type: "image/png",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
              alt: "avatar",
              className: "icon24 avatar"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "card--bottom__person__name",
            children: channel === null || channel === void 0 ? void 0 : channel.owner_name
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "card--bottom__buyer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
            className: "card--bottom__buyer--name",
            children: [channel === null || channel === void 0 ? void 0 : channel.ownerId, " 1"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "card--bottom__buyer--quantity",
            children: (0,hooks_useFormatNumber__WEBPACK_IMPORTED_MODULE_1__.currencyFormat)(Number(channel === null || channel === void 0 ? void 0 : channel.userCount))
          })]
        })]
      })]
    }, "".concat(channel === null || channel === void 0 ? void 0 : channel.room_name, "-").concat(channel === null || channel === void 0 ? void 0 : channel.id))
  });
}
var CardChannelStyled = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .card {\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    border: none;\n    border-radius: 10px;\n    margin-bottom: 16px;\n    cursor: pointer;\n\n    &--top {\n      display: flex;\n      justify-content: space-between;\n      padding: 20px 15px;\n      border-bottom: 1px solid #e6ecf3;\n\n      &__notify {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        p {\n          margin: 0;\n          font-size: 12px;\n          background-color: #6161e3;\n          color: #fff;\n          border-radius: 20px;\n          padding: 1px 4px;\n        }\n      }\n      &__infor {\n        display: flex;\n\n        img {\n          // width: 40px;\n          // height: 40px;\n          // border-radius: 100%;\n          // object-fit: cover;\n          // margin-right: 6px;\n        }\n        .infor {\n          h3 {\n            font-size: 16px;\n            margin: 0;\n            font-weight: bold;\n          }\n          p {\n            font-size: 14px;\n            margin: 0;\n            display: flex;\n            align-items: center;\n\n            font-size: 12px;\n          }\n        }\n      }\n    }\n    &--bottom {\n      display: flex;\n      justify-content: space-between;\n      algin-items: center;\n      padding: 8px 15px;\n\n      &__person {\n        img {\n          width: 24px;\n          height: 24px;\n          border-radius: 100%;\n          object-fit: cover;\n          margin-right: 6px;\n        }\n        span {\n          font-size: 13px;\n          font-weight: bold;\n        }\n      }\n\n      &__buyer {\n        display: flex;\n        align-items: center;\n\n        &--name {\n          font-size: 13px;\n          margin: 0 10px 0 0;\n          color: rgb(112, 112, 112);\n        }\n\n        &--quantity {\n          font-size: 13px;\n          color: rgb(112, 112, 112);\n        }\n      }\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardChannel);

/***/ }),

/***/ "./src/components/ChannelList/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ChannelList/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_CardChannel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/CardChannel */ "./src/components/CardChannel/index.tsx");
/* harmony import */ var components_Spinner_LoadingView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Spinner/LoadingView */ "./src/components/Spinner/LoadingView.tsx");
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Title */ "./src/components/Title/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function ChannelList(_ref) {
  var joinedChannels = _ref.joinedChannels;
  var isChecking = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (_ref2) {
    var channel = _ref2.channel;
    return channel.isChecking;
  });
  if (isChecking) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_Spinner_LoadingView__WEBPACK_IMPORTED_MODULE_1__["default"], {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ChannelListStyled, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Channel"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "card--container",
      children: (joinedChannels === null || joinedChannels === void 0 ? void 0 : joinedChannels.length) > 0 && (joinedChannels
      // ?.filter(
      //   (channel: any) =>
      //     (channel?.room_type === "2" || channel?.room_type === "3") &&
      //     channel?.ownserId !== user.uid
      // )
      === null || joinedChannels
      // ?.filter(
      //   (channel: any) =>
      //     (channel?.room_type === "2" || channel?.room_type === "3") &&
      //     channel?.ownserId !== user.uid
      // )
      === void 0 ? void 0 : joinedChannels
      // ?.filter(
      //   (channel: any) =>
      //     (channel?.room_type === "2" || channel?.room_type === "3") &&
      //     channel?.ownserId !== user.uid
      // )
      .map(function (channel, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_CardChannel__WEBPACK_IMPORTED_MODULE_0__["default"], {
          channel: channel
        }, "".concat(channel === null || channel === void 0 ? void 0 : channel.room_name, "-").concat(index));
      }))
    })]
  });
}
var ChannelListStyled = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // min-width: 420px;\n  // border-right: 1px solid #e6ecf3;\n\n  .card--container {\n    padding: 10px;\n    height: calc(100% - 91px);\n    overflow-y: auto;\n\n    /* width */\n    &::-webkit-scrollbar {\n      width: 8px;\n      display: none;\n    }\n\n    /* Track */\n    &::-webkit-scrollbar-track {\n      background: #f1f1f1;\n    }\n\n    /* Handle */\n    &::-webkit-scrollbar-thumb {\n      background: #ccc;\n      border-radius: 20px;\n    }\n\n    /* Handle on hover */\n    &::-webkit-scrollbar-thumb:hover {\n      background: #555;\n    }\n\n    &:hover {\n      &::-webkit-scrollbar {\n        display: unset;\n      }\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChannelList);

/***/ }),

/***/ "./src/components/ChatBar/index.tsx":
/*!******************************************!*\
  !*** ./src/components/ChatBar/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var hooks_useFormatNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hooks/useFormatNumber */ "./src/hooks/useFormatNumber.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_images_chat_stock_top_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/chat/stock-top.png */ "./src/assets/images/chat/stock-top.png");
/* harmony import */ var assets_images_chat_search_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/chat/search.png */ "./src/assets/images/chat/search.png");
/* harmony import */ var assets_images_chat_moremenu_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/chat/moremenu.png */ "./src/assets/images/chat/moremenu.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function ChatBar(_ref) {
  var channel = _ref.channel;
  // const channelDetail = useSelector(({ channel }) => channel.channelDetail);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ChatBarStyled, {
    className: "chat--bars",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "chat--bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "chat--bar__infor",
        children: [channel !== null && channel !== void 0 && channel.room_profile_image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("object", {
          className: "icon40 avatar",
          data: "http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=7&serverfile=thumb_".concat(channel.room_profile_image),
          type: "image/png",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: "http://www2.aveapp.com/wp-content/uploads/2021/05/w2560.jpg",
            alt: "avatar",
            className: "icon40 avatar"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: "http://www2.aveapp.com/wp-content/uploads/2021/05/w2560.jpg",
          alt: "avatar",
          className: "icon40 avatar"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "chat--bar__infor__groupname",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "chat--bar__infor__groupname__top",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
              children: channel === null || channel === void 0 ? void 0 : channel.room_name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "marks"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "number",
              children: (0,hooks_useFormatNumber__WEBPACK_IMPORTED_MODULE_0__.currencyFormat)(Number(channel === null || channel === void 0 ? void 0 : channel.userCount))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "chat--bar__infor__groupname__bottom",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
              className: "user",
              children: [channel === null || channel === void 0 ? void 0 : channel.owner_name, "-", channel === null || channel === void 0 ? void 0 : channel.ownerId]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "chat--bar__options",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: "btn-hover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "icon24 img-show",
            src: assets_images_chat_stock_top_png__WEBPACK_IMPORTED_MODULE_2__,
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "icon24 img-hover",
            src: assets_images_chat_stock_top_png__WEBPACK_IMPORTED_MODULE_2__,
            alt: ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: "btn-hover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "icon24 img-show",
            src: assets_images_chat_search_png__WEBPACK_IMPORTED_MODULE_3__,
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "icon24 img-hover",
            src: assets_images_chat_search_png__WEBPACK_IMPORTED_MODULE_3__,
            alt: ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: "btn-hover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "icon24 img-show",
            src: "https://static.vecteezy.com/system/resources/previews/006/086/198/original/notification-icon-for-web-vector.jpg",
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "icon24 img-hover",
            src: "https://static.vecteezy.com/system/resources/previews/006/086/198/original/notification-icon-for-web-vector.jpg",
            alt: ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: "btn-hover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "icon24 img-show",
            src: assets_images_chat_moremenu_png__WEBPACK_IMPORTED_MODULE_4__,
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "icon24 img-hover",
            src: assets_images_chat_moremenu_png__WEBPACK_IMPORTED_MODULE_4__,
            alt: ""
          })]
        })]
      })]
    })
  });
}
var ChatBarStyled = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0 20px;\n  border-bottom: 1px solid #e6ecf3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 91px;\n  max-height: 91px;\n\n  .chat--bar {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    align-items: center;\n\n    &__options {\n      button {\n        margin-right: 8px;\n\n        &:last-child {\n          margin-right: 0;\n        }\n      }\n    }\n\n    &__infor {\n      display: flex;\n\n      img {\n        margin-right: 16px;\n      }\n\n      &__groupname {\n        &__top {\n          display: flex;\n          align-items: center;\n\n          h4 {\n            font-weight: bold;\n            font-size: 16px;\n            margin-right: 6px;\n          }\n\n          .number {\n            font-size: 14px;\n            color: #333;\n          }\n        }\n\n        &__bottom {\n          .user {\n            margin: 0;\n            font-size: 14px;\n            color: #333;\n          }\n        }\n      }\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBar);

/***/ }),

/***/ "./src/components/ChatMessageList/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/ChatMessageList/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Stocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Stocks */ "./src/components/Stocks/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var utils_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/time */ "./src/utils/time.ts");
/* harmony import */ var utils_convertString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/convertString */ "./src/utils/convertString.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function ChatMessageList(_ref) {
  var _ref$messages = _ref.messages,
    messages = _ref$messages === void 0 ? [] : _ref$messages,
    innerRef = _ref.innerRef;
  // const user = JSON.parse(localStorage.getItem("_profile"));
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (_ref2) {
    var auth = _ref2.auth;
    return auth.user;
  });
  var isAuthorOf = function isAuthorOf(message) {
    var _message$author;
    return (message === null || message === void 0 ? void 0 : (_message$author = message.author) === null || _message$author === void 0 ? void 0 : _message$author.uid) === (user === null || user === void 0 ? void 0 : user.uid) ? "chat-right" : "chat-left";
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ChatMessageListStyled, {
    className: "chat--container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
      ref: innerRef,
      className: "chat-box chatContainerScroll",
      children: messages === null || messages === void 0 ? void 0 : messages.map(function (message, idx) {
        if (message !== null && message !== void 0 && message.stocks) {
          var _message$stocks, _message$stocks$user, _message$author2;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
            className: "".concat(isAuthorOf(message), " chat-stocks"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "chat-avatar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("object", {
                className: "icon40 avatar",
                data: "http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=12&userid=".concat(message === null || message === void 0 ? void 0 : (_message$stocks = message.stocks) === null || _message$stocks === void 0 ? void 0 : _message$stocks.user.params.userId, "&roomid=").concat(message === null || message === void 0 ? void 0 : (_message$stocks$user = message.stocks.user) === null || _message$stocks$user === void 0 ? void 0 : _message$stocks$user.roomId),
                type: "image/png",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  src: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                  alt: "avatar",
                  className: "icon40 avatar"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "chat-name",
                children: [message === null || message === void 0 ? void 0 : (_message$author2 = message.author) === null || _message$author2 === void 0 ? void 0 : _message$author2.username, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "chat-hour",
                  children: (0,utils_time__WEBPACK_IMPORTED_MODULE_3__.formatTimeAgo)(message.timestamp)
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "chat-text-wrapper",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_Stocks__WEBPACK_IMPORTED_MODULE_0__["default"], {
                stocks: message === null || message === void 0 ? void 0 : message.stocks
              })
            })]
          }, "".concat(message === null || message === void 0 ? void 0 : message.id, "-").concat(idx));
        } else if (message !== null && message !== void 0 && message.files && ["image/jpeg", "image/png"].includes(message === null || message === void 0 ? void 0 : message.fileType)) {
          var _message$user;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
            className: "".concat(isAuthorOf(message), " chat-images"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "chat-avatar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("object", {
                className: "icon40 avatar",
                data: "http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=12&userid=".concat(message === null || message === void 0 ? void 0 : message.user.params.userId, "&roomid=").concat(message === null || message === void 0 ? void 0 : (_message$user = message.user) === null || _message$user === void 0 ? void 0 : _message$user.roomId),
                type: "image/png",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  src: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                  alt: "avatar",
                  className: "icon40 avatar"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "chat-name",
                children: [message === null || message === void 0 ? void 0 : message.author.username, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "chat-hour",
                  children: (0,utils_time__WEBPACK_IMPORTED_MODULE_3__.formatTimeAgo)(message.timestamp)
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "chat-text-wrapper",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                className: "image-chat",
                src: JSON.parse(message === null || message === void 0 ? void 0 : message.files),
                alt: "Thumb"
              })
            })]
          }, "".concat(message === null || message === void 0 ? void 0 : message.ID, "-").concat(idx));
        } else if (message !== null && message !== void 0 && message.files && ["video/mp4", "video/mp3"].includes(message === null || message === void 0 ? void 0 : message.fileType)) {
          var _message$user2;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
            className: "".concat(isAuthorOf(message), " chat-images"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "chat-avatar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("object", {
                className: "icon40 avatar",
                data: "http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=12&userid=".concat(message === null || message === void 0 ? void 0 : message.user.params.userId, "&roomid=").concat(message === null || message === void 0 ? void 0 : (_message$user2 = message.user) === null || _message$user2 === void 0 ? void 0 : _message$user2.roomId),
                type: "image/png",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  src: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                  alt: "avatar",
                  className: "icon40 avatar"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "chat-name",
                children: [message === null || message === void 0 ? void 0 : message.author.username, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "chat-hour",
                  children: (0,utils_time__WEBPACK_IMPORTED_MODULE_3__.formatTimeAgo)(message.timestamp)
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "chat-text-wrapper",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("video", {
                width: "320",
                height: "240",
                controls: true,
                src: JSON.parse(message === null || message === void 0 ? void 0 : message.files),
                children: "Your browser does not support the video tag."
              })
            })]
          }, "".concat(message === null || message === void 0 ? void 0 : message.ID, "-").concat(idx));
        } else if (message !== null && message !== void 0 && message.files && ["application/pdf"].includes(message === null || message === void 0 ? void 0 : message.fileType)) {} else {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
            className: isAuthorOf(message),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "chat-avatar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("object", {
                className: "icon40 avatar",
                data: "http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=12&userid=".concat(message === null || message === void 0 ? void 0 : message.user.params.userId, "&roomid=").concat(message === null || message === void 0 ? void 0 : message.roomId),
                type: "image/png",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  src: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                  alt: "avatar",
                  className: "icon40 avatar"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "chat-name",
                children: [message === null || message === void 0 ? void 0 : message.author.username, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "chat-hour",
                  children: [" ", (0,utils_time__WEBPACK_IMPORTED_MODULE_3__.formatTimeAgo)(message.timestamp)]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "chat-text-wrapper ".concat((0,utils_convertString__WEBPACK_IMPORTED_MODULE_4__.isEmojisOnly)(message === null || message === void 0 ? void 0 : message.content) ? "hasEmoj" : ""),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "chat-text",
                children: message === null || message === void 0 ? void 0 : message.content
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "chat-spacer"
              })]
            })]
          }, "".concat(message === null || message === void 0 ? void 0 : message.id, "-").concat(idx));
        }
      })
    })
  });
}
var ChatMessageListStyled = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 16px;\n  background-color: #ccc;\n  overflow: auto;\n  height: 100%;\n\n  /* Track */\n  /* width */\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n  &::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  li.chat-right,\n  li.chat-left {\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    margin-bottom: 40px;\n\n    .chat-avatar {\n      align-self: flex-end;\n    }\n\n    .chat-name {\n      display: flex;\n      align-items: center;\n    }\n\n    .chat-text-wrapper {\n      align-self: flex-start;\n\n      &.hasEmoj {\n        background-color: transparent;\n\n        .chat-text {\n          font-size: 45px;\n          line-height: 1;\n        }\n      }\n    }\n\n    &.chat-images {\n      .chat-text-wrapper {\n        background-color: #fff;\n        padding: 0;\n      }\n    }\n  }\n\n  li {\n    &.chat-left {\n      &.chat-stocks {\n        .chat-text-wrapper {\n          h4 {\n            color: #000;\n          }\n\n          background-color: #fff;\n          padding: 0;\n          max-width: 420px;\n          width: 100%;\n        }\n      }\n    }\n\n    &.chat-right {\n      justify-content: flex-end;\n\n      &.chat-stocks {\n        h4 {\n          color: #000;\n        }\n        .chat-text-wrapper {\n          background-color: #fff;\n          padding: 0;\n          max-width: 420px;\n          width: 100%;\n        }\n      }\n\n      &.chat-image {\n        img:not(.icon40) {\n          width: 100%;\n          height: auto;\n          border-top-left-radius: 12px;\n          border-top-right-radius: 12px;\n        }\n\n        .chat-text-wrapper {\n          max-width: 15%;\n          padding: 0;\n\n          .chat-text {\n            display: inline-block;\n            padding: 10px;\n          }\n        }\n\n        .chat-href {\n          color: #e2e2e2;\n          font-size: 10px;\n          display: inline-block;\n          margin-left: 10px;\n          cursor: hover;\n        }\n      }\n\n      & > .chat-avatar {\n        // margin-right: 20px;\n      }\n\n      & > .chat-text-wrapper {\n        background-color: #7869ef;\n        color: #fff;\n      }\n    }\n\n    .chat-avatar {\n      //   margin-right: 20px;\n    }\n\n    .chat-name {\n      font-size: 0.75rem;\n      color: #999999;\n      text-align: center;\n    }\n\n    .chat-text-wrapper {\n      padding: 0.4rem 1rem;\n      -webkit-border-radius: 4px;\n      -moz-border-radius: 4px;\n      border-radius: 12px;\n      background: #ffffff;\n      font-weight: 300;\n      line-height: 150%;\n      position: relative;\n      max-width: 55%;\n      font-size: 0.9rem;\n    }\n\n    .chat-spacer {\n      width: 50px;\n      display: inline-block;\n    }\n\n    .chat-hour {\n      float: right;\n      font-size: 12px;\n      margin-left: 8px;\n      margin-right: 3px;\n    }\n  }\n\n  @media (max-width: 1600px) {\n    li {\n      &.chat-right {\n        justify-content: flex-end;\n\n        &.chat-image {\n          cursor: pointer;\n          .chat-text-wrapper {\n            max-width: 30%;\n            padding: 0;\n\n            .chat-text {\n              display: inline-block;\n              padding: 10px;\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatMessageList);

/***/ }),

/***/ "./src/components/ChatOptions/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ChatOptions/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var utils_styled_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/styled-component */ "./src/utils/styled-component.ts");
/* harmony import */ var assets_images_chat_trash_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/chat/trash.png */ "./src/assets/images/chat/trash.png");
/* harmony import */ var assets_images_chat_speaker_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/chat/speaker.png */ "./src/assets/images/chat/speaker.png");
/* harmony import */ var assets_images_chat_bring_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/chat/bring.png */ "./src/assets/images/chat/bring.png");
/* harmony import */ var assets_images_chat_mic_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/chat/mic.png */ "./src/assets/images/chat/mic.png");
/* harmony import */ var assets_images_chat_edit2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/chat/edit2.png */ "./src/assets/images/chat/edit2.png");
/* harmony import */ var assets_images_chat_stock_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/chat/stock.png */ "./src/assets/images/chat/stock.png");
/* harmony import */ var components_CreateStock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CreateStock */ "./src/components/CreateStock/index.tsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var utils_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/time */ "./src/utils/time.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function ChatOptions(_ref) {
  var submitStock = _ref.submitStock;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenStock = _useState2[0],
    setIsOpenStock = _useState2[1];
  var _messages = JSON.parse(localStorage.getItem("_messages"));
  var myuuid = (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])();
  var onSubmit = function onSubmit(data) {
    var newMessage = {
      content: "",
      idMessage: myuuid,
      user: data === null || data === void 0 ? void 0 : data.user,
      stocks: data,
      timestamp: (0,utils_time__WEBPACK_IMPORTED_MODULE_9__.createTimestamp)()
    };

    // localStorage.setItem("_messages", JSON.stringify(newMessage));
    submitStock(newMessage);
    setIsOpenStock(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ChatOptionsStyled, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "chat--options",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "chat--options__left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          className: "btn-hover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            className: "icon24 img-show",
            src: assets_images_chat_trash_png__WEBPACK_IMPORTED_MODULE_2__,
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            className: "icon24 img-hover",
            src: assets_images_chat_trash_png__WEBPACK_IMPORTED_MODULE_2__,
            alt: ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          className: "btn-hover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            className: "icon24 img-show",
            src: assets_images_chat_speaker_png__WEBPACK_IMPORTED_MODULE_3__,
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            className: "icon24 img-hover",
            src: assets_images_chat_speaker_png__WEBPACK_IMPORTED_MODULE_3__,
            alt: ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          className: "btn-hover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            className: "icon24 img-show",
            src: assets_images_chat_bring_png__WEBPACK_IMPORTED_MODULE_4__,
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            className: "icon24 img-hover",
            src: assets_images_chat_bring_png__WEBPACK_IMPORTED_MODULE_4__,
            alt: ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          className: "btn-hover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            className: "icon24 img-show",
            src: assets_images_chat_mic_png__WEBPACK_IMPORTED_MODULE_5__,
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            className: "icon24 img-hover",
            src: assets_images_chat_mic_png__WEBPACK_IMPORTED_MODULE_5__,
            alt: ""
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "chat--options__right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          className: "btn-hover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            className: "icon24 img-show",
            src: assets_images_chat_edit2_png__WEBPACK_IMPORTED_MODULE_6__,
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            className: "icon24 img-hover",
            src: assets_images_chat_edit2_png__WEBPACK_IMPORTED_MODULE_6__,
            alt: ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "stock-option",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
            className: "btn-hover",
            onClick: function onClick() {
              return setIsOpenStock(!isOpenStock);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
              className: "icon24 img-show",
              src: assets_images_chat_stock_png__WEBPACK_IMPORTED_MODULE_7__,
              alt: ""
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
              className: "icon24 img-hover",
              src: assets_images_chat_stock_png__WEBPACK_IMPORTED_MODULE_7__,
              alt: ""
            })]
          }), isOpenStock ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(components_CreateStock__WEBPACK_IMPORTED_MODULE_8__["default"], {
            submitForm: onSubmit,
            closeFunc: setIsOpenStock
          }) : null]
        })]
      })]
    })
  });
}
var ChatOptionsStyled = utils_styled_component__WEBPACK_IMPORTED_MODULE_1__.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .stock-option {\n    position: relative;\n  }\n\n  .chat--options {\n    background-color: #ccc;\n    padding: 15px;\n\n    button {\n      position: relative;\n      margin-right: 6px;\n    }\n\n    display: flex;\n    align-items: center;\n\n    justify-content: space-between;\n\n    &__right {\n      display: flex;\n      align-items: center;\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatOptions);

/***/ }),

/***/ "./src/components/CreateStock/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/CreateStock/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var utils_styled_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/styled-component */ "./src/utils/styled-component.ts");
/* harmony import */ var assets_images_chat_close_grey_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/chat/close-grey.png */ "./src/assets/images/chat/close-grey.png");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var components_common_Header_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/Header/Button */ "./src/components/common/Header/Button/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







function CreateStock(_ref) {
  var closeFunc = _ref.closeFunc,
    submitForm = _ref.submitForm;
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)(),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit;
  var user = JSON.parse(localStorage.getItem("_profile"));
  var onSubmit = function onSubmit(data) {
    data.user = user;
    console.log(data);
    submitForm(data);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(CreateStockStyled, {
    className: "create--stock",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "create--stock__heading",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
        children: "\uC2DC\uADF8\uB110"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        className: "btn-hover",
        onClick: function onClick() {
          return closeFunc(false);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          className: "icon24 img-show",
          src: assets_images_chat_close_grey_png__WEBPACK_IMPORTED_MODULE_2__,
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          className: "icon24 img-hover",
          src: assets_images_chat_close_grey_png__WEBPACK_IMPORTED_MODULE_2__,
          alt: ""
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      className: "stocks--box__form",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "form--inputs",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "form--inputs__input",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "\uC885\uBAA9\uBA85"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", _objectSpread(_objectSpread({}, register("name")), {}, {
            type: "text"
          }))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "form--inputs__input",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "\uB9E4\uC218\uAC00"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", _objectSpread(_objectSpread({}, register("priceBuy")), {}, {
            type: "text"
          }))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "form--inputs__input",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "\uB9E4\uB3C4\uAC00"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", _objectSpread(_objectSpread({}, register("priceSell")), {}, {
            type: "text"
          }))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "form--inputs__input",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "\uC190\uC808\uAC00"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", _objectSpread(_objectSpread({}, register("priceCutoff")), {}, {
            type: "text"
          }))]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "btn-options",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_common_Header_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "submit",
          name: "\uC804\uC1A1",
          className: "btn-submit",
          inputColor: "primary",
          children: "\uC804\uC1A1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_common_Header_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "button",
          name: "\uCDE8\uC18C",
          className: "btn-cancel",
          inputColor: "secondary",
          onClick: function onClick() {
            return closeFunc(false);
          },
          children: "\uCDE8\uC18C"
        })]
      })]
    })]
  });
}
var CreateStockStyled = utils_styled_component__WEBPACK_IMPORTED_MODULE_1__.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 30px;\n  right: 0;\n  z-index: 1;\n  padding: 24px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);\n  border: solid 1px #e2e2e2;\n  background-color: #fff;\n  min-width: 360px;\n\n  .stocks--box__form {\n    .form--inputs {\n      &__input {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin-bottom: 16px;\n        input {\n          border-radius: 8px;\n          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);\n          border: solid 1px #e2e2e2;\n          background-color: #fff;\n          min-width: 240px;\n          min-height: 40px;\n          max-height: 40px;\n          padding: 16px;\n        }\n\n        span {\n          font-size: 14px;\n        }\n      }\n    }\n  }\n\n  .create--stock__heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 22px;\n\n    h3 {\n      font-size: 18px;\n      font-weight: bold;\n    }\n  }\n\n  .btn-options {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n\n    .btn-cancel {\n      color: #fff;\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateStock);

/***/ }),

/***/ "./src/components/Messanger/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Messanger/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_images_chat_send_file_grey_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images/chat/send_file_grey.png */ "./src/assets/images/chat/send_file_grey.png");
/* harmony import */ var assets_images_chat_send_file_blue_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/chat/send_file_blue.png */ "./src/assets/images/chat/send_file_blue.png");
/* harmony import */ var assets_images_chat_screenshot_grey_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/chat/screenshot_grey.png */ "./src/assets/images/chat/screenshot_grey.png");
/* harmony import */ var assets_images_chat_screenshot_hover_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/chat/screenshot_hover.png */ "./src/assets/images/chat/screenshot_hover.png");
/* harmony import */ var assets_images_chat_chat_enter_grey_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/chat/chat_enter_grey.png */ "./src/assets/images/chat/chat_enter_grey.png");
/* harmony import */ var assets_images_chat_chat_enter_blue_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/chat/chat_enter_blue.png */ "./src/assets/images/chat/chat_enter_blue.png");
/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! emoji-picker-react */ "./node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var utils_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/time */ "./src/utils/time.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function Messanger(_ref) {
  var onSubmit = _ref.onSubmit;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    selectedImage = _useState2[0],
    setSelectedImage = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpenEmoj = _useState6[0],
    setIsOpenEmoj = _useState6[1];
  var _messages = JSON.parse(localStorage.getItem("_messages"));
  var textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var user = JSON.parse(localStorage.getItem("_profile"));
  var myuuid = (0,uuid__WEBPACK_IMPORTED_MODULE_10__["default"])();

  /**
   * Choose Emoji
   * @param emojiData
   * @param event
   */
  var onClick = function onClick(emojiData, event) {
    var textAreaElement = document.getElementById("text-area");
    setValue(value.substr(0, textAreaElement.selectionStart) + emojiData.emoji + value.substr(textAreaElement.selectionEnd));
  };

  /**
   *  This function will be triggered when the file field change
   * */
  var imageChange = function imageChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setSelectedImage(e.target.files[0]);
      var image = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = function () {
        var newMessage = {
          content: "".concat(e.target.files[0].type),
          files: JSON.stringify(reader === null || reader === void 0 ? void 0 : reader.result),
          idMessage: myuuid,
          user: user,
          timestamp: (0,utils_time__WEBPACK_IMPORTED_MODULE_8__.createTimestamp)(),
          fileType: e.target.files[0].type
        };
        onSubmit(newMessage);

        // localStorage.setItem("_messages", JSON.stringify(newMessage));
      };
    }
  };

  /**
   * Check key press 'Enter'
   * @param e
   */
  var onKeyPress = function onKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
      setValue("");
    }
  };
  var handler = function handler(inputBlob) {
    var url = URL.createObjectURL(inputBlob);
    console.log(url);
    // Creates URL to the image Blob in memory

    // const a = document.createElement("a");
    // a.setAttribute("href", url);
    // a.setAttribute("download", "fetched-image.jpeg");
    // // Create a download link in HTML

    // a.style.display = "none";
    // document.body.appendChild(a);

    // a.click(); // Simulates click

    // document.body.removeChild(a);
    // URL.revokeObjectURL(url);
    // Removes download link and image URL and image from memory
  };

  // const URLtoFile = async (url: string) => {
  //   const res = await fetch(url);
  //   const blob = await res.blob();
  //   // Gets URL data and read to blob

  //   const mime = blob.type;
  //   const ext = mime.slice(mime.lastIndexOf("/") + 1, mime.length);
  //   // Gets blob MIME type (e.g. image/png) and extracts extension

  //   const file: any = new File([blob], `filename.${ext}`, {
  //     type: "image/jpeg",
  //   });
  //   // Creates new File object using blob data, extension and MIME type

  //   const reader = new FileReader();

  //   console.log(file)
  //   reader.readAsDataURL(file);

  //   reader.onload = () => {
  //     let newMessage = {
  //       content: "image",
  //       images: JSON.stringify(reader?.result),
  //       idMessage: myuuid,
  //       user,
  //     };

  //     const prevMessage = _messages || [];
  //     const newMessages = [...prevMessage, { ...newMessage }];

  //     localStorage.setItem("_messages", JSON.stringify(newMessages));

  //     html2canvas(file).then((canvas) => {
  //       document.body.appendChild(canvas);
  //     });
  //   };

  //   // console.log(file);
  // };

  // const funcRequest = async (url: string) => {
  //   await fetch(url)
  //     .then((response) => {
  //       // console.log({ response });
  //       // console.log(
  //       //   response.text().then((_) => {
  //       //     console.log(_);
  //       //     // handler(_);
  //       //   })
  //       // );
  //       return response.json(); // data into json
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       // Here we can use the response Data
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  /**
   * Submit form data
   * @returns
   */
  var sendMessage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var messages;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(value.trim() === "")) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            messages = {
              idMessage: myuuid,
              content: value.trim(),
              user: user,
              timestamp: (0,utils_time__WEBPACK_IMPORTED_MODULE_8__.createTimestamp)()
            };
            onSubmit(messages);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function sendMessage() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Capture
   */
  var capture = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var canvas, context, video, captureStream, frame;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            canvas = document.createElement("canvas");
            context = canvas.getContext("2d");
            video = document.createElement("video");
            _context2.prev = 3;
            _context2.next = 6;
            return navigator.mediaDevices.getDisplayMedia();
          case 6:
            captureStream = _context2.sent;
            video.srcObject = captureStream;
            context.drawImage(video, 0, 0, window.innerWidth, window.innerHeight);
            frame = canvas.toDataURL("image/png");
            captureStream.getTracks().forEach(function (track) {
              return track.stop();
            });
            window.location.href = frame;
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](3);
            console.error("Error: " + _context2.t0);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 14]]);
    }));
    return function capture() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Check auto height of Textarea
   */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    textareaRef.current.style.height = "0px";
    var scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [value]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(MessangerStyled, {
    className: "chat-input form-group mt-3 mb-0",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("textarea", {
      id: "text-area",
      ref: textareaRef,
      onChange: function onChange(e) {
        return setValue(e.target.value);
      },
      onKeyPress: onKeyPress,
      value: value,
      className: "form-control",
      placeholder: "Type your message here..."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "chat-input__options",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "chat-input__options__left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
          className: "btn-hover mr-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            id: "fileUpload",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("label", {
              htmlFor: "file-input",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
                className: "icon24 img-show",
                src: assets_images_chat_send_file_grey_png__WEBPACK_IMPORTED_MODULE_1__,
                alt: ""
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
                className: "icon24 img-hover",
                src: assets_images_chat_send_file_blue_png__WEBPACK_IMPORTED_MODULE_2__,
                alt: ""
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
              className: "file-input",
              id: "file-input",
              type: "file",
              onChange: imageChange
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
          className: "btn-hover",
          onClick: capture,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
            className: "icon24 img-show",
            src: assets_images_chat_screenshot_grey_png__WEBPACK_IMPORTED_MODULE_3__,
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
            className: "icon24 img-hover",
            src: assets_images_chat_screenshot_hover_png__WEBPACK_IMPORTED_MODULE_4__,
            alt: ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "ml-3 chat--emoj",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
            className: "btn-hover",
            onClick: function onClick() {
              return setIsOpenEmoj(!isOpenEmoj);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
              className: "icon24 img-show",
              src: "https://cdn-icons-png.flaticon.com/512/1500/1500458.png",
              alt: ""
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
              className: "icon24 img-hover",
              src: "https://cdn-icons-png.flaticon.com/512/1500/1500458.png",
              alt: ""
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "chat--emoj__display",
            children: isOpenEmoj && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(emoji_picker_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                onEmojiClick: onClick,
                autoFocusSearch: false
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "layer",
                onClick: function onClick() {
                  return setIsOpenEmoj(false);
                }
              })]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "chat-input__options__right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
          className: "btn-hoveree btn-chat",
          onClick: function onClick() {
            sendMessage();
            setValue("");
          },
          children: (value === null || value === void 0 ? void 0 : value.length) > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
            className: "icon24 img-hover",
            src: assets_images_chat_chat_enter_blue_png__WEBPACK_IMPORTED_MODULE_6__,
            alt: ""
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
            className: "icon24 img-show",
            src: assets_images_chat_chat_enter_grey_png__WEBPACK_IMPORTED_MODULE_5__,
            alt: ""
          })
        })
      })]
    })]
  });
}
var MessangerStyled = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid #e2e2e2;\n  max-width: 97%;\n  width: 100%;\n  margin: auto;\n  border-radius: 8px;\n\n  textarea {\n    border: none;\n    padding: 0;\n    resize: none;\n    padding: 16px;\n    border-bottom: 1px solid #e2e2e2;\n    overflow: hidden;\n    border-radius: 0;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    max-height: 350px;\n\n    &::placeholder {\n      color: #e2e2e2;\n    }\n\n    &:focus {\n      border-bottom: 1px solid #e2e2e2;\n      box-shadow: none;\n    }\n  }\n\n  .chat-input__options {\n    padding: 16px;\n    display: flex;\n    justify-content: space-between;\n\n    &__left {\n      width: 100%;\n      border-right: 1px solid #e2e2e2;\n    }\n\n    button {\n      background: none;\n      border: none;\n    }\n  }\n\n  #fileUpload > label {\n    margin: 0;\n    cursor: pointer;\n  }\n  #fileUpload > .file-input {\n    display: none;\n  }\n\n  .chat--emoj {\n    display: inline-block;\n    position: relative;\n    &__display {\n      position: absolute;\n      bottom: 32px;\n      left: 0;\n      z-index: 0;\n\n      .EmojiPickerReact {\n        z-index: 9;\n      }\n\n      .layer {\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 0;\n        background: transparent;\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n\n  .btn-hover {\n    &.btn-chat {\n      .img-hover {\n        display: inline-block;\n      }\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messanger);

/***/ }),

/***/ "./src/components/Navbar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Navbar/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_images_icon_chat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images/icon/chat.png */ "./src/assets/images/icon/chat.png");
/* harmony import */ var assets_images_icon_chat2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/icon/chat2.png */ "./src/assets/images/icon/chat2.png");
/* harmony import */ var assets_images_icon_person_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/icon/person.png */ "./src/assets/images/icon/person.png");
/* harmony import */ var assets_images_icon_home_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/icon/home.png */ "./src/assets/images/icon/home.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









function Navbar() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(NavbarStyled, {
    className: "navbar-left",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          to: "/home",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: assets_images_icon_home_png__WEBPACK_IMPORTED_MODULE_4__,
            alt: ""
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          to: "/channel",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: assets_images_icon_chat2_png__WEBPACK_IMPORTED_MODULE_2__,
            alt: ""
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          to: "/home",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: assets_images_icon_chat_png__WEBPACK_IMPORTED_MODULE_1__,
            alt: ""
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          to: "/profile",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: assets_images_icon_person_png__WEBPACK_IMPORTED_MODULE_3__,
            alt: ""
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          to: "/settings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: "https://cdn-icons-png.flaticon.com/512/126/126472.png",
            alt: ""
          })
        })
      })]
    })
  });
}
var NavbarStyled = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #fff;\n  min-width: 80px;\n  text-align: center;\n  box-sizing: border-box;\n  border-right: 1px solid #e6ecf3;\n\n  ul {\n    li {\n      cursor: pointer;\n      min-height: 80px;\n      max-height: 80px;\n      line-height: 80px;\n\n      &:hover {\n        background-color: #ccc;\n      }\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n\n      a {\n        width: 100%;\n        height: 100%;\n        display: inline-block;\n\n        img {\n          width: 24px;\n          height: 24px;\n          object-fit: contain;\n        }\n      }\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/NewChannels/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/NewChannels/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_CardChannel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/CardChannel */ "./src/components/CardChannel/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var utils_styled_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/styled-component */ "./src/utils/styled-component.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function NewChannels(_ref) {
  var availableChannels = _ref.availableChannels,
    joinedChannels = _ref.joinedChannels,
    channels = _ref.channels;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    isGoChannel = _useState2[0],
    setIsGoChannel = _useState2[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (_ref2) {
    var auth = _ref2.auth;
    return auth.user;
  });
  var ids = new Set(joinedChannels.map(function (_ref3) {
    var roomId = _ref3.roomId;
    return roomId;
  }));
  var idsChannels = new Set(availableChannels === null || availableChannels === void 0 ? void 0 : availableChannels.map(function (_ref4) {
    var roomId = _ref4.roomId;
    return roomId;
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AvailableChatsStyled, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "availables container-fluid mt-3",
      children: [ false && /*#__PURE__*/0, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "available--created ",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "mb-3",
          children: "Channels Available"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "container-fluid",
          children: (availableChannels === null || availableChannels === void 0 ? void 0 : availableChannels.length) > 0 && availableChannels.map(function (channel, idx) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "available mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_CardChannel__WEBPACK_IMPORTED_MODULE_0__["default"], {
                channel: channel,
                onClick: function onClick() {
                  return setIsGoChannel("JOIN_CHANNEL");
                },
                isGoChannel: "JOIN_CHANNEL"
              }, "".concat(channel === null || channel === void 0 ? void 0 : channel.room_name, "-").concat(idx))
            });
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "available--exists",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "mb-3",
          children: "Channels Exists"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "container-fluid",
          children: (channels === null || channels === void 0 ? void 0 : channels.length) > 0 && channels.filter(function (_ref5) {
            var roomId = _ref5.roomId;
            return !idsChannels.has(roomId);
          }).filter(function (_ref6) {
            var roomId = _ref6.roomId;
            return !ids.has(roomId);
          }).filter(function (channel) {
            return ((channel === null || channel === void 0 ? void 0 : channel.room_type) === "2" || (channel === null || channel === void 0 ? void 0 : channel.room_type) === "3") && (channel === null || channel === void 0 ? void 0 : channel.ownserId) !== user.uid;
          }).map(function (channel, idx) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "available mb-4",
              onClick: function onClick() {
                return setIsGoChannel("CREATE_CHANNEL");
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_CardChannel__WEBPACK_IMPORTED_MODULE_0__["default"], {
                channel: channel,
                onClick: function onClick() {},
                isGoChannel: "CREATE_CHANNEL"
              }, "".concat(channel === null || channel === void 0 ? void 0 : channel.room_name, "-").concat(idx))
            });
          })
        })]
      })]
    })
  });
}
var AvailableChatsStyled = utils_styled_component__WEBPACK_IMPORTED_MODULE_3__.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n\n  .availables {\n    // display: flex;\n    // flex-wrap: wrap;\n\n    .available {\n      min-width: 300px;\n    }\n\n    .available--created {\n      display: flex;\n      flex-direction: column;\n      flex-wrap: wrap;\n\n      h1 {\n        font-size: 24px;\n        padding-right: 15px;\n        padding-left: 15px;\n      }\n\n      .container-fluid {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0;\n        justify-content: space-between;\n      }\n    }\n\n    .available--exists {\n      display: flex;\n      flex-direction: column;\n      flex-wrap: wrap;\n\n      h1 {\n        font-size: 24px;\n        padding-right: 15px;\n        padding-left: 15px;\n      }\n\n      .container-fluid {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0;\n        justify-content: space-between;\n      }\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewChannels);

/***/ }),

/***/ "./src/components/Spinner/Loader.tsx":
/*!*******************************************!*\
  !*** ./src/components/Spinner/Loader.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Loader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.scss */ "./src/components/Spinner/Loader.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function Loader() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "sk-chase",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "sk-chase-dot"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "sk-chase-dot"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "sk-chase-dot"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "sk-chase-dot"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "sk-chase-dot"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "sk-chase-dot"
    })]
  });
}

/***/ }),

/***/ "./src/components/Spinner/LoadingView.tsx":
/*!************************************************!*\
  !*** ./src/components/Spinner/LoadingView.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadingView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader */ "./src/components/Spinner/Loader.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function LoadingView(_ref) {
  var _ref$message = _ref.message,
    message = _ref$message === void 0 ? "just one moment please..." : _ref$message;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "loading-screen",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "loading-view",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "loading-view-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "mb-3",
          children: message
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
      })
    })
  });
}

/***/ }),

/***/ "./src/components/Stocks/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Stocks/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var utils_styled_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/styled-component */ "./src/utils/styled-component.ts");
/* harmony import */ var assets_images_chat_stock_blue_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/chat/stock-blue.png */ "./src/assets/images/chat/stock-blue.png");
/* harmony import */ var hooks_useFormatNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useFormatNumber */ "./src/hooks/useFormatNumber.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function Stocks(_ref) {
  var stocks = _ref.stocks;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StocksStyled, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
      className: "btn-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        className: "icon24 img-show",
        src: assets_images_chat_stock_blue_png__WEBPACK_IMPORTED_MODULE_2__,
        alt: ""
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        className: "icon24 img-hover",
        src: assets_images_chat_stock_blue_png__WEBPACK_IMPORTED_MODULE_2__,
        alt: ""
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "stocks",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "stocks--top",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
          children: stocks === null || stocks === void 0 ? void 0 : stocks.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "btn-order",
          children: "\uC8FC\uBB38"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "stocks--mid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "cols price-buy",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "title",
            children: "\uB9E4\uC218\uAC00"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "price",
            children: [" ", (0,hooks_useFormatNumber__WEBPACK_IMPORTED_MODULE_3__.currencyFormat)(Number(stocks === null || stocks === void 0 ? void 0 : stocks.priceBuy))]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "cols price-target",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "title",
            children: "\uBAA9\uD45C\uAC00"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "price",
            children: [(0,hooks_useFormatNumber__WEBPACK_IMPORTED_MODULE_3__.currencyFormat)(Number(stocks === null || stocks === void 0 ? void 0 : stocks.priceSell)), " "]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "cols price-cutoff",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "title",
            children: "\uC190\uC808\uAC00"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "price",
            children: (0,hooks_useFormatNumber__WEBPACK_IMPORTED_MODULE_3__.currencyFormat)(Number(stocks === null || stocks === void 0 ? void 0 : stocks.priceCutoff))
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "stocks--bot",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "stocks--bot__user",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("object", {
            className: "icon24 avatar",
            data: "http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=12&userid=".concat(stocks === null || stocks === void 0 ? void 0 : stocks.user.params.userId, "&roomid=").concat(stocks === null || stocks === void 0 ? void 0 : stocks.user.params.roomId),
            type: "image/png",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              src: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
              alt: "avatar",
              className: "icon24 avatar"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "stocks--bot__user__position",
            children: "\uBC29\uC7A5"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "stocks--bot__user__name",
            children: stocks === null || stocks === void 0 ? void 0 : stocks.user.params.userName
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "stocks--bot__time",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "\uBC29\uC7A5 2:30"
          })
        })]
      })]
    })]
  });
}
var StocksStyled = utils_styled_component__WEBPACK_IMPORTED_MODULE_1__.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n\n  .btn-hover {\n    position: absolute;\n    top: -13px;\n    right: -11px;\n    z-index: 1;\n  }\n\n  .stocks {\n    &--top {\n      padding: 8px 10px;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      position: relative;\n\n      &:before {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        content: \"\";\n        background-color: #ccc;\n        width: 95%;\n        height: 1px;\n        transform: translateX(-50%);\n      }\n\n      h4 {\n        font-size: 18px;\n      }\n      \n      .btn-order {\n        background-color: red;\n        border-radius: 8px;\n        padding: 3px 16px;\n        border: none;\n        color: white;\n        font-size: 14px;\n      }\n    }\n\n    &--mid {\n      padding: 10px 0;\n      display: flex;\n      justify-content: space-between;\n      border-bottom: 1px solid #ccc;\n\n      .cols {\n        display: flex;\n        flex-direction: column;\n        border-right: 1px solid #ccc;\n        padding-right: 16px;\n        flex: 1;\n        text-align: center;\n\n        .title {\n          color: #333;\n          font-size: 12px;\n        }\n\n        .price {\n          color: #333;\n          font-size: 12px;\n          font-weight: bold;\n        }\n\n        &:last-child {\n          border-right: none;\n          padding-right: 0;\n        }\n      }\n    }\n\n    &--bot {\n      padding: 10px;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n\n      &__user {\n        display: flex;\n        align-items: center;\n\n        span {\n          color: #333;\n          font-size: 12px;\n          font-weight: bold;\n        }\n\n        &__name {\n          margin-left: 10px;\n          position: relative;\n\n          &:before {\n            position: absolute;\n            top: 50%;\n            left: -7px;\n            content: \"\";\n            background-color: #333;\n            width: 4px;\n            height: 4px;\n            border-radius: 100%;\n            transform: translateY(-50%);\n          }\n        }\n      }\n\n      &__time {\n        color: #ccc;\n        font-size: 10px;\n      }\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stocks);

/***/ }),

/***/ "./src/components/Title/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Title/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



function Title(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TitleStyled, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      children: name
    })
  });
}
var TitleStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0 20px;\n  border-bottom: 1px solid #e6ecf3;\n  max-height: 91px;\n  min-height: 91px;\n  line-height: 91px;\n  \n  p {\n    font-size: 24px;\n    margin: 0;\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./src/components/common/Header/Button/index.tsx":
/*!*******************************************************!*\
  !*** ./src/components/common/Header/Button/index.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var assets_scss_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/scss/mixin */ "./src/assets/scss/mixin.ts");
/* harmony import */ var utils_styled_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/styled-component */ "./src/utils/styled-component.ts");
/* harmony import */ var constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/colors */ "./src/constants/colors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Button = function Button(_ref) {
  var name = _ref.name,
    onClick = _ref.onClick,
    className = _ref.className,
    inputColor = _ref.inputColor,
    type = _ref.type,
    disabled = _ref.disabled;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledButton, {
    className: className,
    onClick: onClick,
    inputColor: inputColor,
    type: type,
    disabled: disabled,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonName, {
      children: name
    })
  });
};
var renderColor = function renderColor(inputColor) {
  switch (inputColor) {
    case "primary":
      return "\n      background: ".concat(constants_colors__WEBPACK_IMPORTED_MODULE_3__.COLORS.BLUE, ";\n      color: ").concat(constants_colors__WEBPACK_IMPORTED_MODULE_3__.COLORS.WHITE, ";\n      border: none;\n      font-weight: bold;\n      ");
    case "stroke":
      return "\n        background: transparent;\n        color: ".concat(constants_colors__WEBPACK_IMPORTED_MODULE_3__.COLORS.WHITE, ";\n        border: 2px solid ").concat(constants_colors__WEBPACK_IMPORTED_MODULE_3__.COLORS.WHITE, ";\n      ");
    case "fill":
      return "\n      background:".concat(constants_colors__WEBPACK_IMPORTED_MODULE_3__.COLORS.BLUE, ";\n      color: ").concat(constants_colors__WEBPACK_IMPORTED_MODULE_3__.COLORS.WHITE, ";\n      border: none\n      ");
    case "secondary":
      return "\n        background: ".concat(constants_colors__WEBPACK_IMPORTED_MODULE_3__.COLORS.BACKGROUND_DISABLED, ";\n        color: ").concat(constants_colors__WEBPACK_IMPORTED_MODULE_3__.COLORS.COLOR_DISABLED, ";\n        border: 2px solid ").concat(constants_colors__WEBPACK_IMPORTED_MODULE_3__.COLORS.WHITE, ";\n      ");
    default:
      return "".concat(constants_colors__WEBPACK_IMPORTED_MODULE_3__.COLORS.WHITE);
  }
};
var StyledButton = utils_styled_component__WEBPACK_IMPORTED_MODULE_2__.styled.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 24px 0;\n  border-radius: 50px;\n  cursor: pointer;\n  max-width: 650px;\n  transition: opacity 0.25s ease;\n  padding: 10px 0;\n  display: inline-block;\n  min-width: 96px;\n  max-height: 40px;\n  border: none;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ", ";\n  &:focus {\n    outline: 0;\n  }\n  &:disabled,\n  &[disabled] {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  ", "\n  &:hover {\n    opacity: 0.8;\n  }\n"])), function (_ref2) {
  var inputColor = _ref2.inputColor;
  return renderColor(inputColor);
}, constants_colors__WEBPACK_IMPORTED_MODULE_3__.COLORS.BACKGROUND_DISABLED, constants_colors__WEBPACK_IMPORTED_MODULE_3__.COLORS.COLOR_DISABLED, assets_scss_mixin__WEBPACK_IMPORTED_MODULE_1__.responsive.sm(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 20px\n  "]))));
var ButtonName = utils_styled_component__WEBPACK_IMPORTED_MODULE_2__.styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  white-space: nowrap;\n  ", "\n"])), assets_scss_mixin__WEBPACK_IMPORTED_MODULE_1__.responsive.sm(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    font-size: 16px;\n  "]))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/common/Header/index.tsx":
/*!************************************************!*\
  !*** ./src/components/common/Header/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_images_logo_logo2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images/logo/logo2.png */ "./src/assets/images/logo/logo2.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }






function Header(_ref) {
  _objectDestructuringEmpty(_ref);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HeaderStyled, {
    className: "header--top",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/home",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: assets_images_logo_logo2_png__WEBPACK_IMPORTED_MODULE_1__,
        alt: ""
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        children: "MoeME"
      })]
    })
  });
}
var HeaderStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: 56px;\n  max-height: 56px;\n  width: 100%;\n  background-color: #fbf7f7;\n  display: flex;\n  align-items: center;\n  padding: 5px 20px;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n\n  a {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    color: #000;\n    text-decoration: none;\n    font-size: 24px;\n    font-weight: 400;\n\n    img {\n      width: 40px;\n      height: 40px;\n      object-fit: cover;\n      margin-right: 6px;\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/constants/colors.ts":
/*!*********************************!*\
  !*** ./src/constants/colors.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLORS": () => (/* binding */ COLORS)
/* harmony export */ });
var COLORS;
(function (COLORS) {
  COLORS["BLUE"] = "blue";
  COLORS["WHITE"] = "#fff";
  COLORS["BACKGROUND_DISABLED"] = "rgb(227 227 227)";
  COLORS["COLOR_DISABLED"] = "rgb(112 112 112)";
  COLORS["ERROR"] = "#FF1B1B";
  COLORS["SUCCESS"] = "#00b74a";
  COLORS["DANGER"] = "#d9534f";
  COLORS["INFO"] = "#0070f3";
  COLORS["WARNING"] = "#ff9700";
  COLORS["ICON_BACKGROUND"] = "#6c8599";
  COLORS["BORDER_FIELD"] = "#d8d8d8";
  COLORS["PRIMARY"] = "#050505";
  COLORS["BORDER_IMAGE"] = "#d3d3d3";
  COLORS["FONT_COLOR"] = "#181818";
  COLORS["PENDING"] = "#F29339";
  COLORS["PAYMENT_FEE_COLOR"] = "#e4edf4";
})(COLORS || (COLORS = {}));

/***/ }),

/***/ "./src/db/firestore.ts":
/*!*****************************!*\
  !*** ./src/db/firestore.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timestamp": () => (/* binding */ Timestamp),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");


var config = {
  apiKey: "AIzaSyDBpR6pg77-D4N-blRnGkJNkPmSoyjTOts",
  authDomain: "electron-5afae.firebaseapp.com",
  databaseURL: "https://electron-5afae.firebaseio.com",
  projectId: "electron-5afae",
  storageBucket: "electron-5afae.appspot.com",
  messagingSenderId: "253692635376",
  appId: "1:253692635376:web:b7d716b038f946cd58fa35",
  measurementId: "G-21ZBP1YRNC"
};
var Timestamp = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore.Timestamp);
// Initialize Firebase

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(config).firestore());

/***/ }),

/***/ "./src/hooks/useFormatNumber.ts":
/*!**************************************!*\
  !*** ./src/hooks/useFormatNumber.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currencyFormat": () => (/* binding */ currencyFormat),
/* harmony export */   "statisticsFormat": () => (/* binding */ statisticsFormat)
/* harmony export */ });
var currencyFormat = function currencyFormat(num) {
  if (!num) return;
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

var statisticsFormat = function statisticsFormat(num) {
  if (!num) return;
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







react_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {}), document.getElementById("root"));

/***/ }),

/***/ "./src/layouts/Base.tsx":
/*!******************************!*\
  !*** ./src/layouts/Base.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withBaseLayout": () => (/* binding */ withBaseLayout)
/* harmony export */ });
/* harmony import */ var components_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Navbar */ "./src/components/Navbar/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var utils_styled_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/styled-component */ "./src/utils/styled-component.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var withBaseLayout = function withBaseLayout(Component) {
  return function (props) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(BaseLayoutStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(components_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, _objectSpread({}, props))]
    });
  };
};
var BaseLayoutStyled = utils_styled_component__WEBPACK_IMPORTED_MODULE_2__.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n"])));

/***/ }),

/***/ "./src/layouts/Channel/index.tsx":
/*!***************************************!*\
  !*** ./src/layouts/Channel/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var actions_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/channel */ "./src/actions/channel/index.ts");
/* harmony import */ var components_ChannelList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ChannelList */ "./src/components/ChannelList/index.tsx");
/* harmony import */ var components_NewChannels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/NewChannels */ "./src/components/NewChannels/index.tsx");
/* harmony import */ var layouts_Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! layouts/Base */ "./src/layouts/Base.tsx");
/* harmony import */ var layouts_Chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! layouts/Chat */ "./src/layouts/Chat/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











function Channel() {
  // const channelDetail = useSelector(({ channel }) => channel.channelDetail);
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)(),
    id = _useParams.id;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref) {
    var auth = _ref.auth;
    return auth.user;
  });
  var profile = JSON.parse(localStorage.getItem("_profile"));
  var joinedChannels = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref2) {
    var channel = _ref2.channel;
    return channel.joined;
  });
  var availableChannels = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref3) {
    var channel = _ref3.channel;
    return channel.available;
  });
  var channels = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref4) {
    var channel = _ref4.channel;
    return channel.channel;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  var activeChannel = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref5) {
    var channel = _ref5.channel;
    return channel.activeChannels[id];
  });
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    dispatch((0,actions_channel__WEBPACK_IMPORTED_MODULE_0__.fetchChannels)());
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    dispatch((0,actions_channel__WEBPACK_IMPORTED_MODULE_0__.getChannelList)(profile === null || profile === void 0 ? void 0 : profile.params.userId));
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (id) {
      var unsubFromChannel = dispatch((0,actions_channel__WEBPACK_IMPORTED_MODULE_0__.subscribeToChannel)(id));
      return function () {
        unsubFromChannel();
      };
    }
  }, [id]);

  // useEffect(() => {
  //   if (
  //     user &&
  //     user.uid === profile?.params.userId &&
  //     insertData === "inserted"
  //   ) {
  //     return;
  //   } else if (channels1?.length > 0 && user?.uid) {
  //     if (channelsCompare.length > 0) {
  //       const newArr = channelsCompare.concat(channels1);
  //       const filterNewArr = newArr.filter((chnl: any, idx: number) => {
  //         return (
  //           newArr.findIndex(
  //             (chnl2: any) =>
  //               chnl2.room_name === chnl.room_name &&
  //               chnl2.ownerId === chnl.ownerId
  //           ) === idx
  //         );
  //       });
  //       console.log("filterNewArr", filterNewArr);
  //       const newFilterNewArr = filterNewArr.filter(
  //         (fcnl: any, idx: number) => {
  //           return fcnl?.room_name !== channels1[idx]?.room_name;
  //         }
  //       );

  //       // const newFiterCreate = filterNewArr.filter

  //       console.log({ newFilterNewArr });

  //       for (let i = 0; i <= filterNewArr?.length; i++) {
  //         if (
  //           filterNewArr &&
  //           filterNewArr[i]?.room_name !== channels1[i]?.room_name
  //         ) {
  //           const formData = {
  //             ...filterNewArr[i],
  //             // change_name: filterNewArr[i]?.change_name,
  //             // chnl_type: filterNewArr[i]?.chnl_type,
  //             // title: filterNewArr[i]?.title,
  //             // ruid: filterNewArr[i]?.ruid,
  //             // roomId: filterNewArr[i]?.roomId,
  //             // roomComment: filterNewArr[i]?.roomComment,
  //             // room_name: filterNewArr[i]?.room_name,
  //             // room_profile_image: filterNewArr[i]?.room_profile_image,
  //             // room_reg_date: filterNewArr[i]?.room_reg_date,
  //             // room_type: filterNewArr[i]?.room_type,
  //             // ownerId: filterNewArr[i]?.ownerId,
  //             // owner_name: filterNewArr[i]?.owner_name,
  //             // profile_image: filterNewArr[i]?.profile_image,
  //             // userCount: filterNewArr[i]?.userCount,
  //             // user_reg_date: filterNewArr[i]?.user_reg_date,
  //           };
  //           // dispatch(createChannel(formData, user?.uid));
  //           localStorage.setItem("insert", "inserted");
  //         } else {
  //           dispatch(joinChannel(newFilterNewArr[i], user?.uid));
  //           localStorage.setItem("join", "joined");
  //         }
  //       }
  //     } else {
  //       console.log("con lai");
  //       for (let i = 0; i <= channels1?.length; i++) {
  //         const formData = {
  //           ...channels1[i],
  //         };
  //         dispatch(createChannel(formData, user?.uid));
  //         localStorage.setItem("insert", "inserted");
  //       }
  //     }
  //   }
  // }, [user, channels1?.length, channels]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ChannelStyled, {
    className: "channel-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "channel-container__list",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(components_ChannelList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        joinedChannels: joinedChannels
      })
    }), activeChannel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(layouts_Chat__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(components_NewChannels__WEBPACK_IMPORTED_MODULE_2__["default"], {
      availableChannels: availableChannels,
      joinedChannels: joinedChannels,
      channels: (channels === null || channels === void 0 ? void 0 : channels.length) > 0 && channels
    })]
  });
}
var ChannelStyled = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n\n  .channel-container {\n    &__list {\n      min-width: 420px;\n      border-right: 1px solid #e6ecf3;\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,layouts_Base__WEBPACK_IMPORTED_MODULE_3__.withBaseLayout)(Channel));

/***/ }),

/***/ "./src/layouts/Chat/index.tsx":
/*!************************************!*\
  !*** ./src/layouts/Chat/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_ChatBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/ChatBar */ "./src/components/ChatBar/index.tsx");
/* harmony import */ var components_ChatMessageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ChatMessageList */ "./src/components/ChatMessageList/index.tsx");
/* harmony import */ var components_ChatOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ChatOptions */ "./src/components/ChatOptions/index.tsx");
/* harmony import */ var components_Messanger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Messanger */ "./src/components/Messanger/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var actions_channel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions/channel */ "./src/actions/channel/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }












function Chat(_ref) {
  _objectDestructuringEmpty(_ref);
  // const [messageList, setMessageList] = useState<any>(
  //   JSON.parse(localStorage.getItem("_messages"))
  // );
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)(),
    id = _useParams.id;
  var peopleWatchers = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)({});
  var activeChannel = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref2) {
    var channel = _ref2.channel;
    return channel.activeChannels[id];
  });
  var messages = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref3) {
    var channel = _ref3.channel;
    return channel.messages[id];
  });
  var messageSubs = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref4) {
    var channel = _ref4.channel;
    return channel.messageSubs[id];
  });
  var messageListRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)({});
  var joinedUsers = activeChannel === null || activeChannel === void 0 ? void 0 : activeChannel.joinedUsers;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var unsubFromChannel = dispatch((0,actions_channel__WEBPACK_IMPORTED_MODULE_6__.subscribeToChannel)(id));
    if (!messageSubs) {
      var unsubFromMessages = dispatch((0,actions_channel__WEBPACK_IMPORTED_MODULE_6__.subscribeToMessages)(id));
      dispatch((0,actions_channel__WEBPACK_IMPORTED_MODULE_6__.registerMessageSubscription)(id, unsubFromMessages));
    }
    return function () {
      unsubFromChannel();
      unsubFromJoinedUsers();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    joinedUsers && subscribeToJoinedUsers(joinedUsers);
  }, [joinedUsers]);
  var subscribeToJoinedUsers = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (JUsers) {
    JUsers.forEach(function (user) {
      if (!peopleWatchers.current[user.uid]) {
        peopleWatchers.current[user.uid] = dispatch((0,actions_channel__WEBPACK_IMPORTED_MODULE_6__.subscribeToProfile)(user.uid, id));
      }
    });
  }, [dispatch, id]);
  var unsubFromJoinedUsers = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    Object.keys(peopleWatchers.current).forEach(function (id) {
      return peopleWatchers.current[id]();
    });
  }, [peopleWatchers.current]);

  // const sendMessage = (message: any) => {
  //   // alert(JSON.stringify(message));
  //   console.log({ message });
  //   console.log({ messageList });
  //   const prevMessage = messageList || [];

  //   const newMessage = [...prevMessage, { ...message }];
  //   localStorage.setItem("_messages", JSON.stringify(newMessage));
  //   console.log({ newMessage });

  //   // dispatch(sendChatMessage(message, id));
  //   setMessageList(newMessage);
  // };

  var sendMessage = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (message) {
    console.log({
      message: message
    });
    dispatch((0,actions_channel__WEBPACK_IMPORTED_MODULE_6__.sendChannelMessage)(message, id)).then(function (_) {
      return messageListRef.current.scrollIntoView(false);
    });
  }, [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (messages) {
      messageListRef.current.scrollIntoView(false);
    }
  }, [messages === null || messages === void 0 ? void 0 : messages.length]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ChatStyled, {
      className: "chat--view",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(components_ChatBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
        channel: activeChannel
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(components_ChatMessageList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        innerRef: messageListRef,
        messages: messages
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(components_ChatOptions__WEBPACK_IMPORTED_MODULE_2__["default"], {
        submitStock: sendMessage
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(components_Messanger__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onSubmit: sendMessage
      })]
    })
  });
}
var ChatStyled = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

/***/ }),

/***/ "./src/layouts/Home/index.tsx":
/*!************************************!*\
  !*** ./src/layouts/Home/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var utils_styled_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/styled-component */ "./src/utils/styled-component.ts");
/* harmony import */ var layouts_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts/Base */ "./src/layouts/Base.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(HomeStyled, {
    className: "home-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
      children: "Home page"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
      children: "Comming soon"
    })]
  });
}
var HomeStyled = utils_styled_component__WEBPACK_IMPORTED_MODULE_1__.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,layouts_Base__WEBPACK_IMPORTED_MODULE_2__.withBaseLayout)(Home));

/***/ }),

/***/ "./src/layouts/Login/index.tsx":
/*!*************************************!*\
  !*** ./src/layouts/Login/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var assets_images_logo_logo_aveapp_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images/logo/logo_aveapp.png */ "./src/assets/images/logo/logo_aveapp.png");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/auth */ "./src/actions/auth/index.ts");
/* harmony import */ var components_Spinner_LoadingView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Spinner/LoadingView */ "./src/components/Spinner/LoadingView.tsx");
/* harmony import */ var components_common_Header_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/Header/Button */ "./src/components/common/Header/Button/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }











function Login(_ref) {
  _objectDestructuringEmpty(_ref);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit;
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (_ref2) {
    var auth = _ref2.auth;
    return auth.login.error;
  });
  var isChecking = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (_ref3) {
    var auth = _ref3.auth;
    return auth.login.isChecking;
  });
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (_ref4) {
    var auth = _ref4.auth;
    return auth.user;
  });
  var obSubmit = function obSubmit(data) {
    dispatch((0,actions_auth__WEBPACK_IMPORTED_MODULE_3__.login)(data));
  };
  if (isChecking) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_Spinner_LoadingView__WEBPACK_IMPORTED_MODULE_4__["default"], {});
  }
  if (user) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
      to: "/channel"
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(LoginStyled, {
    className: "login-styled",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "login--box",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
        onSubmit: handleSubmit(obSubmit),
        className: "login--box__form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
          children: "Login"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form--inputs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "form--inputs__input userid",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", _objectSpread(_objectSpread({}, register("userId")), {}, {
              type: "text",
              placeholder: "Enter the userid"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "form--inputs__input password",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", _objectSpread(_objectSpread({}, register("userPassword")), {}, {
              type: "password",
              placeholder: "Enter the password"
            }))
          })]
        }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "alert alert-danger small",
          children: error.message
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "btn-options",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_common_Header_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            type: "submit",
            name: "Login",
            className: "btn-login",
            inputColor: isChecking ? "" : "primary",
            children: "Login"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "forgot-options",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
          to: "/",
          children: "userid searching"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
          to: "/",
          children: "PW searching"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "footer-copyright",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          src: assets_images_logo_logo_aveapp_png__WEBPACK_IMPORTED_MODULE_1__,
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: "Copyright @ AVE APP.ALL RIGHTS RESERVED.TERMS OF SERVICE PRIVACY POLICY"
        })]
      })]
    })
  });
}
var LoginStyled = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .login--box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .login--box__form {\n    border: 1px solid #e2e2e2;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    padding: 40px 40px;\n    min-width: 480px;\n    max-width: 480px;\n\n    h1 {\n      font-size: 26px;\n      text-align: center;\n      margin-bottom: 48px;\n    }\n\n    .form--inputs {\n      width: 100%;\n      border: 1px solid #e2e2e2;\n      border-radius: 8px;\n\n      input {\n        width: 100%;\n        border: none;\n        min-height: 48px;\n        padding: 0 10px;\n      }\n\n      &__input.userid {\n        border-top-left-radius: 8px;\n        border-top-right-radius: 8px;\n        border-bottom: 1px solid #e2e2e2;\n\n        input {\n          border-top-left-radius: 8px;\n          border-top-right-radius: 8px;\n        }\n      }\n\n      &__input.password {\n        border-bottom-left-radius: 8px;\n        border-bottom-right-radius: 8px;\n        input {\n          border-bottom-left-radius: 8px;\n          border-bottom-right-radius: 8px;\n        }\n      }\n    }\n\n    .btn-options {\n      text-align: right;\n      margin-top: 60px;\n      display: flex;\n      justify-content: flex-end;\n\n      .btn-login {\n        color: #fff;\n        padding: 10px 0;\n        display: inline-block;\n        min-width: 96px;\n        max-height: 40px;\n        border: none;\n        border-radius: 8px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n    }\n  }\n\n  .forgot-options {\n    text-align: center;\n    padding: 20px 0;\n\n    a {\n      color: #707070;\n      font-size: 14px;\n\n      border-right: 1px solid #e2e2e2;\n      margin-right: 16px;\n      padding-right: 16px;\n\n      &:last-child {\n        margin-right: 0;\n        border-right: none;\n      }\n    }\n  }\n  .footer-copyright {\n    img {\n      width: 40px;\n      height: 40px;\n      object-fit: contain;\n    }\n    span {\n      color: #707070;\n      font-size: 14px;\n    }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./src/layouts/Profile/index.tsx":
/*!***************************************!*\
  !*** ./src/layouts/Profile/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var layouts_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! layouts/Base */ "./src/layouts/Base.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var utils_styled_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/styled-component */ "./src/utils/styled-component.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function Profile() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ProfileStyled, {
    className: "profile-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
      children: "Profile page"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
      children: "Comming soon"
    })]
  });
}
var ProfileStyled = utils_styled_component__WEBPACK_IMPORTED_MODULE_2__.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,layouts_Base__WEBPACK_IMPORTED_MODULE_0__.withBaseLayout)(Profile));

/***/ }),

/***/ "./src/layouts/Settings/index.tsx":
/*!****************************************!*\
  !*** ./src/layouts/Settings/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var actions_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/auth */ "./src/actions/auth/index.ts");
/* harmony import */ var components_common_Header_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/Header/Button */ "./src/components/common/Header/Button/index.tsx");
/* harmony import */ var layouts_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts/Base */ "./src/layouts/Base.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var utils_styled_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/styled-component */ "./src/utils/styled-component.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









function Settings() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (_ref) {
    var _auth$logout;
    var auth = _ref.auth;
    return auth === null || auth === void 0 ? void 0 : (_auth$logout = auth.logout) === null || _auth$logout === void 0 ? void 0 : _auth$logout.user;
  });
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(SettingsStyled, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
      children: "Settings page"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_common_Header_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: "button",
      name: "logout",
      className: "btn-login",
      inputColor: "primary",
      onClick: function onClick() {
        dispatch((0,actions_auth__WEBPACK_IMPORTED_MODULE_0__.logout)());
        history.push("/");
      },
      children: "Logout"
    })]
  });
}
var SettingsStyled = utils_styled_component__WEBPACK_IMPORTED_MODULE_5__.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,layouts_Base__WEBPACK_IMPORTED_MODULE_2__.withBaseLayout)(Settings));

/***/ }),

/***/ "./src/reducers/app/index.tsx":
/*!************************************!*\
  !*** ./src/reducers/app/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

function createAppReducer() {
  var _navigator = navigator,
    onLine = _navigator.onLine;
  var isOnline = function isOnline() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : onLine;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "APP_IS_ONLINE":
      case "APP_IS_OFFLINE":
        return action.isOnline;
      default:
        return state;
    }
  };
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    isOnline: isOnline
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAppReducer());

/***/ }),

/***/ "./src/reducers/auth/index.ts":
/*!************************************!*\
  !*** ./src/reducers/auth/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reducers_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reducers/common */ "./src/reducers/common.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


var createLoginReducer = function createLoginReducer() {
  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
    isChecking: (0,reducers_common__WEBPACK_IMPORTED_MODULE_0__.createIsFetchingReducer)("AUTH_LOGIN"),
    error: (0,reducers_common__WEBPACK_IMPORTED_MODULE_0__.createErrorReducer)("AUTH_LOGIN")
  });
};
function createAuthReducer() {
  var user = function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "AUTH_ON_ERROR":
      case "AUTH_ON_INIT":
        return null;
      case "AUTH_LOGIN_FIREBASE_SUCCESS":
      case "AUTH_LOGIN_SUCCESS":
      case "AUTH_ON_SUCCESS":
        return action.user;
      default:
        return state;
    }
  };
  var logout = function logout() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "AUTH_LOGOUT_SUCCESS":
        return {
          user: null
        };
      default:
        return state;
    }
  };
  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
    user: user,
    logout: logout,
    isChecking: (0,reducers_common__WEBPACK_IMPORTED_MODULE_0__.createIsFetchingReducer)("AUTH_ON"),
    login: createLoginReducer()
    // logout: logoutReducer("AUTH_LOGOUT"),
    // register: createRegisterReducer(),
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAuthReducer());

/***/ }),

/***/ "./src/reducers/channel/index.ts":
/*!***************************************!*\
  !*** ./src/reducers/channel/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reducers_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reducers/common */ "./src/reducers/common.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



function createChannelReducer() {
  var joined = function joined() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "CHANNELS_FETCH_RESTART":
        return [];
      case "CHANNELS_FETCH_SUCCESS":
        return action.joined;
      case "CHANNELS_JOIN_SUCCESS":
        return [].concat(_toConsumableArray(state), [action.channel]);
      default:
        return state;
    }
  };
  var available = function available() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "CHANNELS_FETCH_RESTART":
        return [];
      case "CHANNELS_FETCH_SUCCESS":
        return action.available;
      case "CHANNELS_JOIN_SUCCESS":
        return state.filter(function (channel) {
          return channel.id !== action.channel.id;
        });
      default:
        return state;
    }
  };
  var channelsCompare = function channelsCompare() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "CHANNELS_COMPARE_FETCH_SUCCESS":
        return action.channelsCompare;
      default:
        return state;
    }
  };
  var activeChannels = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({}, {
    CHANNELS_SET_ACTIVE_CHANNEL: function CHANNELS_SET_ACTIVE_CHANNEL(state, action) {
      var channel = action.channel;
      state[channel.id] = channel;
    },
    CHANNELS_UPDATE_USER_STATE: function CHANNELS_UPDATE_USER_STATE(state, action) {
      var user = action.user,
        channelId = action.channelId;
      var joinedUsers = state[channelId].joinedUsers;
      var index = joinedUsers.findIndex(function (ju) {
        return ju.uid === user.uid;
      });
      if (index < 0) return state;
      if (joinedUsers[index].state === user.state) return state;
      joinedUsers[index].state = user.state;
    }
  });
  var channel = function channel() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "AUTH_LOGOUT_SUCCESS":
      case "CHANNEL_ON_ERROR":
      case "CHANNEL_ON_INIT":
        return null;
      case "CHANNEL_ON_SUCCESS":
        return action.channel.params;
      default:
        return state;
    }
  };
  var channelDetail = function channelDetail() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "CHOOSE_CHANNEL":
        return action.channelDetail;
      default:
        return state;
    }
  };
  var messages = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({}, {
    CHANNELS_SET_MESSAGES: function CHANNELS_SET_MESSAGES(state, action) {
      var prevMessage = state[action.channelId] || [];
      state[action.channelId] = [].concat(_toConsumableArray(prevMessage), _toConsumableArray(action.messages));
    }
  });
  var messageSubs = function messageSubs() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "CHANNELS_REGISTER_MESSAGE_SUB":
        return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.channelId, action.sub));
      default:
        return state;
    }
  };
  return (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
    joined: joined,
    available: available,
    activeChannels: activeChannels,
    messages: messages,
    messageSubs: messageSubs,
    channel: channel,
    channelDetail: channelDetail,
    channelsCompare: channelsCompare,
    isChecking: (0,reducers_common__WEBPACK_IMPORTED_MODULE_0__.createIsFetchingReducer)("CHANNEL_ON")
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createChannelReducer());

/***/ }),

/***/ "./src/reducers/chat/index.ts":
/*!************************************!*\
  !*** ./src/reducers/chat/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function createChatReducer() {
  var messages = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)({}, {
    CHATS_SET_MESSAGES: function CHATS_SET_MESSAGES(state, action) {
      var prevMessage = state[action.chatId] || [];
      state[action.chatId] = [].concat(_toConsumableArray(prevMessage), _toConsumableArray(action.messages));
    }
  });
  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
    messages: messages
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createChatReducer());

/***/ }),

/***/ "./src/reducers/common.ts":
/*!********************************!*\
  !*** ./src/reducers/common.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createErrorReducer": () => (/* binding */ createErrorReducer),
/* harmony export */   "createIsFetchingReducer": () => (/* binding */ createIsFetchingReducer),
/* harmony export */   "logoutReducer": () => (/* binding */ logoutReducer)
/* harmony export */ });
var createErrorReducer = function createErrorReducer(actionType) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "".concat(actionType, "_INIT"):
        return null;
      case "".concat(actionType, "_ERROR"):
        return action.error;
      default:
        return state;
    }
  };
};
var createIsFetchingReducer = function createIsFetchingReducer(actionType) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "".concat(actionType, "_INIT"):
        return true;
      case "".concat(actionType, "_SUCCESS"):
      case "".concat(actionType, "_ERROR"):
        return false;
      default:
        return state;
    }
  };
};
var logoutReducer = function logoutReducer(actionType) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "".concat(actionType, "_INIT"):
        return false;
      case "".concat(actionType, "_SUCCESS"):
      case "".concat(actionType, "_ERROR"):
        return null;
      default:
        return state;
    }
  };
};

/***/ }),

/***/ "./src/services/TokenService.ts":
/*!**************************************!*\
  !*** ./src/services/TokenService.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAccessToken": () => (/* binding */ getAccessToken),
/* harmony export */   "getLocalRefreshToken": () => (/* binding */ getLocalRefreshToken),
/* harmony export */   "getUser": () => (/* binding */ getUser),
/* harmony export */   "removeUser": () => (/* binding */ removeUser),
/* harmony export */   "setUser": () => (/* binding */ setUser),
/* harmony export */   "updateLocalAccessToken": () => (/* binding */ updateLocalAccessToken)
/* harmony export */ });
var getAccessToken = function getAccessToken() {
  var _user = JSON.parse(localStorage.getItem("_user"));
  return _user === null || _user === void 0 ? void 0 : _user.accessToken;
};
var setUser = function setUser(user) {
  console.log(JSON.stringify(user));
  var accessToken = user === null || user === void 0 ? void 0 : user.params.atk;
  var refreshToken = user === null || user === void 0 ? void 0 : user.params.rtk;
  var userId = user === null || user === void 0 ? void 0 : user.params.uid;
  var _user = {
    accessToken: accessToken,
    refreshToken: refreshToken,
    userId: userId
  };
  localStorage.setItem("_user", JSON.stringify(_user));
  localStorage.setItem("_profile", JSON.stringify(user));
};
var getUser = function getUser() {
  return JSON.parse(localStorage.getItem("_user"));
};
var getLocalRefreshToken = function getLocalRefreshToken() {
  var _user = JSON.parse(localStorage.getItem("_user"));
  return _user === null || _user === void 0 ? void 0 : _user.refreshToken;
};
var updateLocalAccessToken = function updateLocalAccessToken(token) {
  localStorage.setItem("_user", JSON.stringify(token));
};
var removeUser = function removeUser() {
  localStorage.removeItem("_user");
};

/***/ }),

/***/ "./src/store/StoreProvider.tsx":
/*!*************************************!*\
  !*** ./src/store/StoreProvider.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store */ "./src/store/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var store = (0,store__WEBPACK_IMPORTED_MODULE_2__["default"])();
function StoreProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: store,
    children: children
  });
}

/***/ }),

/***/ "./src/store/index.tsx":
/*!*****************************!*\
  !*** ./src/store/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ configureStore)
/* harmony export */ });
/* harmony import */ var reducers_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reducers/auth */ "./src/reducers/auth/index.ts");
/* harmony import */ var reducers_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers/channel */ "./src/reducers/channel/index.ts");
/* harmony import */ var reducers_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers/chat */ "./src/reducers/chat/index.ts");
/* harmony import */ var reducers_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers/app */ "./src/reducers/app/index.tsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _middlewares_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares/app */ "./src/store/middlewares/app.ts");








function configureStore() {
  var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_6__["default"], _middlewares_app__WEBPACK_IMPORTED_MODULE_5__["default"]];
  var mainReducer = (0,redux__WEBPACK_IMPORTED_MODULE_7__.combineReducers)({
    channel: reducers_channel__WEBPACK_IMPORTED_MODULE_1__["default"],
    auth: reducers_auth__WEBPACK_IMPORTED_MODULE_0__["default"],
    app: reducers_app__WEBPACK_IMPORTED_MODULE_3__["default"],
    chat: reducers_chat__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
  var rootReducer = function rootReducer(state, action) {
    if (action.type === "AUTH_LOGOUT_SUCCESS") {
      state = undefined;
    }
    return mainReducer(state, action);
  };
  var store = (0,redux__WEBPACK_IMPORTED_MODULE_7__.createStore)(rootReducer, redux__WEBPACK_IMPORTED_MODULE_7__.applyMiddleware.apply(void 0, middlewares.concat([(redux_logger__WEBPACK_IMPORTED_MODULE_4___default())])));
  return store;
}

/***/ }),

/***/ "./src/store/middlewares/app.ts":
/*!**************************************!*\
  !*** ./src/store/middlewares/app.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/notification */ "./src/utils/notification.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (store) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        case "APP_IS_ONLINE":
        case "APP_IS_OFFLINE":
          {
            utils_notification__WEBPACK_IMPORTED_MODULE_0__["default"].show({
              title: "Connection status:",
              body: action.isOnline ? "Online" : "Offline"
            });
          }

        // case "AUTH_LOGGOUT_SUCCESS": {
        //   const { messagesSubs } = store.getState().chats;

        //   if (messagesSubs) {
        //     Object.keys(messagesSubs).forEach((messageSub) => {
        //       messagesSubs[messageSub]();
        //     });
        //   }
        // }
      }

      next(action);
    };
  };
});

/***/ }),

/***/ "./src/utils/convertString.ts":
/*!************************************!*\
  !*** ./src/utils/convertString.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEmojisOnly": () => (/* binding */ isEmojisOnly)
/* harmony export */ });
var removeEmojis = function removeEmojis(string) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|[\ud83c[\ude50\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g; // eslint-disable-line

  return string.replace(regex, "");
};
var isEmojisOnly = function isEmojisOnly(string) {
  return removeEmojis(string).length === 0;
};

/***/ }),

/***/ "./src/utils/notification.ts":
/*!***********************************!*\
  !*** ./src/utils/notification.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    if (!("Notification" in window)) {
      console.error("This browser window doesn't support notification");
    } else if (Notification.permission === "granted") {
      return;
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("Permission has been granted!");
        }
      });
    }
  },
  show: function show(_ref) {
    var title = _ref.title,
      body = _ref.body;
    new Notification(title, {
      body: body
    });
  }
});

/***/ }),

/***/ "./src/utils/styled-component.ts":
/*!***************************************!*\
  !*** ./src/utils/styled-component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGlobalStyle": () => (/* reexport safe */ styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle),
/* harmony export */   "css": () => (/* reexport safe */ styled_components__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   "keyframes": () => (/* reexport safe */ styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes),
/* harmony export */   "styled": () => (/* reexport safe */ styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/***/ }),

/***/ "./src/utils/time.ts":
/*!***************************!*\
  !*** ./src/utils/time.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTimestamp": () => (/* binding */ createTimestamp),
/* harmony export */   "formatTimeAgo": () => (/* binding */ formatTimeAgo)
/* harmony export */ });
/* harmony import */ var db_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! db/firestore */ "./src/db/firestore.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


var createTimestamp = function createTimestamp() {
  return db_firestore__WEBPACK_IMPORTED_MODULE_0__.Timestamp.now().toMillis().toString();
};
var formatTimeAgo = function formatTimeAgo(timestamp) {
  return moment__WEBPACK_IMPORTED_MODULE_1___default()(parseInt(timestamp, 10)).fromNow();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Spinner/Loader.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Spinner/Loader.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sk-chase {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  animation: sk-chase 2.5s infinite linear both;\n}\n\n.sk-chase-dot {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  animation: sk-chase-dot 2s infinite ease-in-out both;\n}\n\n.sk-chase-dot:before {\n  content: \"\";\n  display: block;\n  width: 25%;\n  height: 25%;\n  background-color: black;\n  border-radius: 100%;\n  animation: sk-chase-dot-before 2s infinite ease-in-out both;\n}\n\n.sk-chase-dot:nth-child(1) {\n  animation-delay: -1.1s;\n}\n\n.sk-chase-dot:nth-child(2) {\n  animation-delay: -1s;\n}\n\n.sk-chase-dot:nth-child(3) {\n  animation-delay: -0.9s;\n}\n\n.sk-chase-dot:nth-child(4) {\n  animation-delay: -0.8s;\n}\n\n.sk-chase-dot:nth-child(5) {\n  animation-delay: -0.7s;\n}\n\n.sk-chase-dot:nth-child(6) {\n  animation-delay: -0.6s;\n}\n\n.sk-chase-dot:nth-child(1):before {\n  animation-delay: -1.1s;\n}\n\n.sk-chase-dot:nth-child(2):before {\n  animation-delay: -1s;\n}\n\n.sk-chase-dot:nth-child(3):before {\n  animation-delay: -0.9s;\n}\n\n.sk-chase-dot:nth-child(4):before {\n  animation-delay: -0.8s;\n}\n\n.sk-chase-dot:nth-child(5):before {\n  animation-delay: -0.7s;\n}\n\n.sk-chase-dot:nth-child(6):before {\n  animation-delay: -0.6s;\n}\n\n@keyframes sk-chase {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes sk-chase-dot {\n  80%, 100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes sk-chase-dot-before {\n  50% {\n    transform: scale(0.4);\n  }\n  100%, 0% {\n    transform: scale(1);\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Spinner/Loader.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,6CAAA;AACJ;;AAEE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,oDAAA;AACJ;;AAEE;EACE,WAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;EACA,2DAAA;AACJ;;AAEE;EACE,sBAAA;AACJ;;AACE;EACE,oBAAA;AAEJ;;AAAE;EACE,sBAAA;AAGJ;;AADE;EACE,sBAAA;AAIJ;;AAFE;EACE,sBAAA;AAKJ;;AAHE;EACE,sBAAA;AAMJ;;AAJE;EACE,sBAAA;AAOJ;;AALE;EACE,oBAAA;AAQJ;;AANE;EACE,sBAAA;AASJ;;AAPE;EACE,sBAAA;AAUJ;;AARE;EACE,sBAAA;AAWJ;;AATE;EACE,sBAAA;AAYJ;;AATE;EACE;IACE,yBAAA;EAYJ;AACF;AATE;EACE;IAEE,yBAAA;EAUJ;AACF;AAPE;EACE;IACE,qBAAA;EASJ;EAPE;IAEE,mBAAA;EAQJ;AACF","sourcesContent":[".sk-chase {\n    width: 40px;\n    height: 40px;\n    position: relative;\n    animation: sk-chase 2.5s infinite linear both;\n  }\n  \n  .sk-chase-dot {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    animation: sk-chase-dot 2s infinite ease-in-out both;\n  }\n  \n  .sk-chase-dot:before {\n    content: \"\";\n    display: block;\n    width: 25%;\n    height: 25%;\n    background-color: black;\n    border-radius: 100%;\n    animation: sk-chase-dot-before 2s infinite ease-in-out both;\n  }\n  \n  .sk-chase-dot:nth-child(1) {\n    animation-delay: -1.1s;\n  }\n  .sk-chase-dot:nth-child(2) {\n    animation-delay: -1s;\n  }\n  .sk-chase-dot:nth-child(3) {\n    animation-delay: -0.9s;\n  }\n  .sk-chase-dot:nth-child(4) {\n    animation-delay: -0.8s;\n  }\n  .sk-chase-dot:nth-child(5) {\n    animation-delay: -0.7s;\n  }\n  .sk-chase-dot:nth-child(6) {\n    animation-delay: -0.6s;\n  }\n  .sk-chase-dot:nth-child(1):before {\n    animation-delay: -1.1s;\n  }\n  .sk-chase-dot:nth-child(2):before {\n    animation-delay: -1s;\n  }\n  .sk-chase-dot:nth-child(3):before {\n    animation-delay: -0.9s;\n  }\n  .sk-chase-dot:nth-child(4):before {\n    animation-delay: -0.8s;\n  }\n  .sk-chase-dot:nth-child(5):before {\n    animation-delay: -0.7s;\n  }\n  .sk-chase-dot:nth-child(6):before {\n    animation-delay: -0.6s;\n  }\n  \n  @keyframes sk-chase {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  \n  @keyframes sk-chase-dot {\n    80%,\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  \n  @keyframes sk-chase-dot-before {\n    50% {\n      transform: scale(0.4);\n    }\n    100%,\n    0% {\n      transform: scale(1);\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n}\n\n.content-page {\n  width: 100%;\n  height: 100%;\n  padding-top: 56px;\n}\n\n#root {\n  height: 100%;\n}\n\n.iconTag {\n  width: 8px;\n  height: auto;\n  margin-right: 6px;\n}\n\n.icon24 {\n  width: 24px;\n  height: 24px;\n  object-fit: contain;\n}\n\n.icon40 {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n}\n\n.icon60 {\n  width: 60px;\n  height: 60px;\n  object-fit: contain;\n}\n\n.avatar {\n  border-radius: 100%;\n  margin-right: 6px;\n  object-fit: cover;\n}\n\n.content-wrap {\n  padding: 20px;\n}\n\n.image-chat {\n  max-width: 300px;\n  width: 100%;\n  border-radius: 12px;\n  object-fit: cover;\n}\n\n.btn-hover {\n  border: none;\n  background: none;\n}\n.btn-hover:hover .img-hover {\n  display: inline-block;\n}\n.btn-hover:hover .img-show {\n  display: none;\n}\n.btn-hover .img-hover {\n  display: none;\n}\n\n.loading-screen {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 990;\n}\n.loading-screen .loading-view {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.loading-screen .loading-view-container {\n  z-index: 9999;\n  background-color: #f4f4f4;\n  width: 480px;\n  padding: 32px;\n  font-size: 18px;\n  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media (max-width: 830px) {\n  .loading-screen .loading-view .loading-view-container {\n    max-width: 480px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;AACF;;AA6BA;;EAEE,YAAA;AA1BF;;AA6BA;;;;;;;EAOE,SAAA;AA1BF;;AA4BA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AAzBF;;AA4BA;EACE,YAAA;AAzBF;;AA4BA;EACE,UAAA;EACA,YAAA;EACA,iBAAA;AAzBF;;AA4BA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AAzBF;;AA4BA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AAzBF;;AA4BA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AAzBF;;AA4BA;EACE,mBAAA;EACA,iBAAA;EACA,iBAAA;AAzBF;;AA4BA;EACE,aAAA;AAzBF;;AA4BA;EACE,gBAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;AAzBF;;AA2BA;EACE,YAAA;EACA,gBAAA;AAxBF;AA2BI;EACE,qBAAA;AAzBN;AA4BI;EACE,aAAA;AA1BN;AA8BE;EACE,aAAA;AA5BJ;;AA+BA;EACE,eAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,oCAAA;EACA,YAAA;AA5BF;AA8BE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AA5BJ;AA8BI;EACE,aAAA;EACA,yBA5HK;EA6HL,YAAA;EACA,aAAA;EACA,eAAA;EACA,mDAAA;EACA,2CAAA;EACA,kBAAA;EACA,8BAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AA5BN;AA+BI;EACE;IACE,gBAAA;EA7BN;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n$white: #fff !default;\n$gray-100: #f8f9fc !default;\n$gray-200: #f4f4f4 !default;\n$gray-300: #dddfeb !default;\n$gray-400: #d1d3e2 !default;\n$gray-500: #b7b9cc !default;\n$gray-600: #858796 !default;\n$gray-700: #6e707e !default;\n$gray-800: #5a5c69 !default;\n$gray-900: #3a3b45 !default;\n$black: #000 !default;\n\n$blue: #4e73df !default;\n$indigo: #6610f2 !default;\n$purple: #6f42c1 !default;\n$pink: #e83e8c !default;\n$red: #e74a3b !default;\n$orange: #fd7e14 !default;\n$yellow: #f6c23e !default;\n$green: #1cc88a !default;\n$teal: #20c9a6 !default;\n$cyan: #36b9cc !default;\n\n// Custom Colors\n$brand-google: #ea4335 !default;\n$brand-facebook: #3b5998 !default;\n\nhtml,\nbody {\n  height: 100%;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n}\n.content-page {\n  width: 100%;\n  height: 100%;\n  padding-top: 56px;\n}\n\n#root {\n  height: 100%;\n}\n\n.iconTag {\n  width: 8px;\n  height: auto;\n  margin-right: 6px;\n}\n\n.icon24 {\n  width: 24px;\n  height: 24px;\n  object-fit: contain;\n}\n\n.icon40 {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n}\n\n.icon60 {\n  width: 60px;\n  height: 60px;\n  object-fit: contain;\n}\n\n.avatar {\n  border-radius: 100%;\n  margin-right: 6px;\n  object-fit: cover;\n}\n\n.content-wrap {\n  padding: 20px;\n}\n\n.image-chat {\n  max-width: 300px;\n  width: 100%;\n  border-radius: 12px;\n  object-fit: cover;\n}\n.btn-hover {\n  border: none;\n  background: none;\n\n  &:hover {\n    .img-hover {\n      display: inline-block;\n    }\n\n    .img-show {\n      display: none;\n    }\n  }\n\n  .img-hover {\n    display: none;\n  }\n}\n.loading-screen {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 990;\n\n  .loading-view {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n\n    &-container {\n      z-index: 9999;\n      background-color: $gray-200;\n      width: 480px;\n      padding: 32px;\n      font-size: 18px;\n      -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);\n      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);\n      border-radius: 5px;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    @media (max-width: 830px) {\n      .loading-view-container {\n        max-width: 480px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/components/Spinner/Loader.scss":
/*!********************************************!*\
  !*** ./src/components/Spinner/Loader.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Loader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Loader.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Spinner/Loader.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Loader_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Loader_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/assets/images/chat/bring.png":
/*!******************************************!*\
  !*** ./src/assets/images/chat/bring.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "87eef6803cea8d5c1ca2.png";

/***/ }),

/***/ "./src/assets/images/chat/chat_enter_blue.png":
/*!****************************************************!*\
  !*** ./src/assets/images/chat/chat_enter_blue.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bf439074e04cd043baae.png";

/***/ }),

/***/ "./src/assets/images/chat/chat_enter_grey.png":
/*!****************************************************!*\
  !*** ./src/assets/images/chat/chat_enter_grey.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3ebb655743a55a771924.png";

/***/ }),

/***/ "./src/assets/images/chat/close-grey.png":
/*!***********************************************!*\
  !*** ./src/assets/images/chat/close-grey.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2a23a0ec867acf302901.png";

/***/ }),

/***/ "./src/assets/images/chat/edit2.png":
/*!******************************************!*\
  !*** ./src/assets/images/chat/edit2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60624638a61c71f3a87e.png";

/***/ }),

/***/ "./src/assets/images/chat/mic.png":
/*!****************************************!*\
  !*** ./src/assets/images/chat/mic.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9b20fcb587bfe57a4d19.png";

/***/ }),

/***/ "./src/assets/images/chat/moremenu.png":
/*!*********************************************!*\
  !*** ./src/assets/images/chat/moremenu.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "98f367c7036148587039.png";

/***/ }),

/***/ "./src/assets/images/chat/screenshot_grey.png":
/*!****************************************************!*\
  !*** ./src/assets/images/chat/screenshot_grey.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "395ffe805bc727c5a43e.png";

/***/ }),

/***/ "./src/assets/images/chat/screenshot_hover.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/chat/screenshot_hover.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a37fb1289aa5782d5d70.png";

/***/ }),

/***/ "./src/assets/images/chat/search.png":
/*!*******************************************!*\
  !*** ./src/assets/images/chat/search.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dce4d2223b5d55ec7f01.png";

/***/ }),

/***/ "./src/assets/images/chat/send_file_blue.png":
/*!***************************************************!*\
  !*** ./src/assets/images/chat/send_file_blue.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eef5ce2e86b2c91c608f.png";

/***/ }),

/***/ "./src/assets/images/chat/send_file_grey.png":
/*!***************************************************!*\
  !*** ./src/assets/images/chat/send_file_grey.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "43972fde2271efe7c09f.png";

/***/ }),

/***/ "./src/assets/images/chat/speaker.png":
/*!********************************************!*\
  !*** ./src/assets/images/chat/speaker.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "48fb40554e7d6d6f1eee.png";

/***/ }),

/***/ "./src/assets/images/chat/stock-blue.png":
/*!***********************************************!*\
  !*** ./src/assets/images/chat/stock-blue.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2044d91d971a9587ea01.png";

/***/ }),

/***/ "./src/assets/images/chat/stock-top.png":
/*!**********************************************!*\
  !*** ./src/assets/images/chat/stock-top.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8fa481e6829fb068694d.png";

/***/ }),

/***/ "./src/assets/images/chat/stock.png":
/*!******************************************!*\
  !*** ./src/assets/images/chat/stock.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f286063ad298c1bfa3d4.png";

/***/ }),

/***/ "./src/assets/images/chat/trash.png":
/*!******************************************!*\
  !*** ./src/assets/images/chat/trash.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eff6e7ca37b0b9770ec0.png";

/***/ }),

/***/ "./src/assets/images/icon/ORG.png":
/*!****************************************!*\
  !*** ./src/assets/images/icon/ORG.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "70cd55c54223529e26a2.png";

/***/ }),

/***/ "./src/assets/images/icon/PER.png":
/*!****************************************!*\
  !*** ./src/assets/images/icon/PER.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c20a7da0b62921a96e53.png";

/***/ }),

/***/ "./src/assets/images/icon/SPL.png":
/*!****************************************!*\
  !*** ./src/assets/images/icon/SPL.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "03c66cf605a884acb25a.png";

/***/ }),

/***/ "./src/assets/images/icon/STO.png":
/*!****************************************!*\
  !*** ./src/assets/images/icon/STO.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ad1186840b538788c3f5.png";

/***/ }),

/***/ "./src/assets/images/icon/chat.png":
/*!*****************************************!*\
  !*** ./src/assets/images/icon/chat.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b7134770c74af144b7ea.png";

/***/ }),

/***/ "./src/assets/images/icon/chat2.png":
/*!******************************************!*\
  !*** ./src/assets/images/icon/chat2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5a99136513a629518e0b.png";

/***/ }),

/***/ "./src/assets/images/icon/home.png":
/*!*****************************************!*\
  !*** ./src/assets/images/icon/home.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "98c2e7d507642d6be519.png";

/***/ }),

/***/ "./src/assets/images/icon/person.png":
/*!*******************************************!*\
  !*** ./src/assets/images/icon/person.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b958f0bd28d2a2be7ea1.png";

/***/ }),

/***/ "./src/assets/images/logo/logo2.png":
/*!******************************************!*\
  !*** ./src/assets/images/logo/logo2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f2080590c77e820e754b.png";

/***/ }),

/***/ "./src/assets/images/logo/logo_aveapp.png":
/*!************************************************!*\
  !*** ./src/assets/images/logo/logo_aveapp.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0d27275dff215facb9ed.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25TK0Y7QUFDL0YsWUFBNkk7O0FBRTdJOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDZIQUFPOzs7O0FBSXhCLGlFQUFlLG9JQUFjLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pzRDtBQUN6RixZQUFnSTs7QUFFaEk7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJeEIsaUVBQWUsbUlBQWMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvYXV0aC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFubmVsL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvYXV0aC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2F4aW9zQ2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvY2hhbm5lbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Njc3MvbWl4aW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZENoYW5uZWwvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NoYW5uZWxMaXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DaGF0QmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DaGF0TWVzc2FnZUxpc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NoYXRPcHRpb25zL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DcmVhdGVTdG9jay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FuZ2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05ld0NoYW5uZWxzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGlubmVyL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci9Mb2FkaW5nVmlldy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RvY2tzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaXRsZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0hlYWRlci9CdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYi9maXJlc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZUZvcm1hdE51bWJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL0Jhc2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL0NoYW5uZWwvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL0NoYXQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL0hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL0xvZ2luL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9Qcm9maWxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9TZXR0aW5ncy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2F1dGgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NoYW5uZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NoYXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvVG9rZW5TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9TdG9yZVByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9taWRkbGV3YXJlcy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnZlcnRTdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL25vdGlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc3R5bGVkLWNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGlubmVyL0xvYWRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci9Mb2FkZXIuc2Nzcz8xMjY1Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzPzcyMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdGVuVG9Db25uZWN0aW9uQ2hhbmdlcyB9IGZyb20gXCJhY3Rpb25zL2FwcFwiO1xuaW1wb3J0IExvYWRpbmdWaWV3IGZyb20gXCJjb21wb25lbnRzL1NwaW5uZXIvTG9hZGluZ1ZpZXdcIjtcbmltcG9ydCBDaGF0IGZyb20gXCJsYXlvdXRzL0NoYXRcIjtcbmltcG9ydCBDaGFubmVsVmlldyBmcm9tIFwibGF5b3V0cy9DaGFubmVsXCI7XG5pbXBvcnQgSG9tZVZpZXcgZnJvbSBcImxheW91dHMvSG9tZVwiO1xuaW1wb3J0IExvZ2luVmlldyBmcm9tIFwibGF5b3V0cy9Mb2dpblwiO1xuaW1wb3J0IFByb2ZpbGVWaWV3IGZyb20gXCJsYXlvdXRzL1Byb2ZpbGVcIjtcbmltcG9ydCBTZXR0aW5nc1ZpZXcgZnJvbSBcImxheW91dHMvU2V0dGluZ3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxuICBSZWRpcmVjdCxcbiAgUm91dGUsXG4gIFN3aXRjaCxcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGdldEFjY2Vzc1Rva2VuIH0gZnJvbSBcInNlcnZpY2VzL1Rva2VuU2VydmljZVwiO1xuaW1wb3J0IFN0b3JlUHJvdmlkZXIgZnJvbSBcInN0b3JlL1N0b3JlUHJvdmlkZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvY29tbW9uL0hlYWRlclwiO1xuaW1wb3J0IHsgbGlzdGVuVG9BdXRoQ2hhbmdlcyB9IGZyb20gXCJhY3Rpb25zL2F1dGhcIjtcbmltcG9ydCB7IGNoZWNrVXNlckNvbm5lY3Rpb24gfSBmcm9tIFwiYWN0aW9ucy9jb25uZWN0aW9uXCI7XG5cbmZ1bmN0aW9uIEF1dGhSb3V0ZSh7IGNoaWxkcmVuLCAuLi5yZXN0IH06IGFueSkge1xuICBjb25zdCB0b2tlbiA9IGdldEFjY2Vzc1Rva2VuKCk7XG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigoeyBhdXRoIH0pID0+IGF1dGgudXNlcik7XG4gIGNvbnNvbGUubG9nKFwidXNlciByb3V0ZVwiLCB1c2VyKTtcbiAgY29uc3Qgb25seUNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlXG4gICAgICB7Li4ucmVzdH1cbiAgICAgIHJlbmRlcj17KHByb3BzKSA9PlxuICAgICAgICB1c2VyID8gKFxuICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudChvbmx5Q2hpbGQsIHsgLi4ucmVzdCwgLi4ucHJvcHMgfSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvXCIgLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIC8+XG4gICk7XG59XG5cbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1wYWdlXCI+e2NoaWxkcmVufTwvZGl2PlxuKTtcblxuZnVuY3Rpb24gTW9lTWUoKSB7XG4gIGNvbnN0IGRpc3BhdGNoOiBhbnkgPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBpc09ubGluZSA9IHVzZVNlbGVjdG9yKCh7IGFwcCB9KSA9PiBhcHAuaXNPbmxpbmUpO1xuICBjb25zdCBpc0NoZWNraW5nID0gdXNlU2VsZWN0b3IoKHsgYXV0aCB9KSA9PiBhdXRoLmlzQ2hlY2tpbmcpO1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHsgYXV0aCB9KSA9PiBhdXRoLnVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJGcm9tQXV0aCA9IGRpc3BhdGNoKGxpc3RlblRvQXV0aENoYW5nZXMoKSk7XG4gICAgY29uc3QgdW5zdWJGcm9tQ29ubmVjdGlvbiA9IGRpc3BhdGNoKGxpc3RlblRvQ29ubmVjdGlvbkNoYW5nZXMoKSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdW5zdWJGcm9tQXV0aCgpO1xuICAgICAgdW5zdWJGcm9tQ29ubmVjdGlvbigpO1xuICAgIH07XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgbGV0IHVuc3ViRnJvbVVzZXJDb25uZWN0aW9uOiBhbnk7XG4gIC8vICAgaWYgKHVzZXI/LnVpZCkge1xuICAvLyAgICAgdW5zdWJGcm9tVXNlckNvbm5lY3Rpb24gPSBkaXNwYXRjaChjaGVja1VzZXJDb25uZWN0aW9uKHVzZXIudWlkKSk7XG4gIC8vICAgfVxuXG4gIC8vICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgIHVuc3ViRnJvbVVzZXJDb25uZWN0aW9uICYmIHVuc3ViRnJvbVVzZXJDb25uZWN0aW9uKCk7XG4gIC8vICAgfTtcbiAgLy8gfSwgW2Rpc3BhdGNoLCB1c2VyXSk7XG5cbiAgaWYgKCFpc09ubGluZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8TG9hZGluZ1ZpZXcgbWVzc2FnZT1cIk1vZU1lIGhhcyBiZWVuIGRpc2Nvbm5lY3RlZCBmcm9tIHRoZSBpbnRlcm5ldC4gUGxlYXNlIHJlY29ubmVjdC4uLi5cIiAvPlxuICAgICk7XG4gIH1cblxuICBpZiAoaXNDaGVja2luZykge1xuICAgIHJldHVybiA8TG9hZGluZ1ZpZXcgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSb3V0ZXI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCI+XG4gICAgICAgICAgICA8TG9naW5WaWV3IC8+XG4gICAgICAgICAgICB7LyogPENoYW5uZWxWaWV3IC8+ICovfVxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPEF1dGhSb3V0ZSBleGFjdCBwYXRoPVwiL2hvbWVcIj5cbiAgICAgICAgICAgIDxIb21lVmlldyAvPlxuICAgICAgICAgIDwvQXV0aFJvdXRlPlxuICAgICAgICAgIDxBdXRoUm91dGUgZXhhY3QgcGF0aD1cIi9jaGFubmVsXCI+XG4gICAgICAgICAgICA8Q2hhbm5lbFZpZXcgLz5cbiAgICAgICAgICA8L0F1dGhSb3V0ZT5cbiAgICAgICAgICA8QXV0aFJvdXRlIHBhdGg9XCIvY2hhbm5lbC86aWRcIj5cbiAgICAgICAgICAgIDxDaGFubmVsVmlldyAvPlxuICAgICAgICAgIDwvQXV0aFJvdXRlPlxuICAgICAgICAgIDxBdXRoUm91dGUgcGF0aD1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICA8UHJvZmlsZVZpZXcgLz5cbiAgICAgICAgICA8L0F1dGhSb3V0ZT5cbiAgICAgICAgICA8QXV0aFJvdXRlIHBhdGg9XCIvc2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxTZXR0aW5nc1ZpZXcgLz5cbiAgICAgICAgICA8L0F1dGhSb3V0ZT5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgIDwvUm91dGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPFN0b3JlUHJvdmlkZXI+XG4gICAgICA8TW9lTWUgLz5cbiAgICA8L1N0b3JlUHJvdmlkZXI+XG4gICk7XG59XG5cbmNvbnN0IENvbnRlbnRXcmFwcGVyQ1NTID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDU2cHg7XG5gO1xuIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IG9uU3RhdHVzQ2hhbmdlID0gKGRpc3BhdGNoOiBhbnkpID0+ICgpID0+IHtcbiAgY29uc3QgaXNPbmxpbmUgPSBuYXZpZ2F0b3Iub25MaW5lO1xuICBjb25zdCBhY3Rpb24gPSBpc09ubGluZVxuICAgID8geyB0eXBlOiBcIkFQUF9JU19PTkxJTkVcIiwgaXNPbmxpbmUgfVxuICAgIDogeyB0eXBlOiBcIkFQUF9JU19PRkZMSU5FXCIsIGlzT25saW5lIH07XG5cbiAgZGlzcGF0Y2goYWN0aW9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaXN0ZW5Ub0Nvbm5lY3Rpb25DaGFuZ2VzID0gKCkgPT4gKGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgY29uc3QgY29ubmVjdGlvbkhhbmRsZXIgPSBvblN0YXR1c0NoYW5nZShkaXNwYXRjaCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwgY29ubmVjdGlvbkhhbmRsZXIpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgY29ubmVjdGlvbkhhbmRsZXIpO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwgY29ubmVjdGlvbkhhbmRsZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCBjb25uZWN0aW9uSGFuZGxlcik7XG4gIH07XG59O1xuIiwiaW1wb3J0ICogYXMgYXBpIGZyb20gXCJhcGkvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCJtb2RlbHMvYXV0aFwiO1xuaW1wb3J0IHsgc2V0VXNlciB9IGZyb20gXCJzZXJ2aWNlcy9Ub2tlblNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGZvcm1EYXRhOiBBdXRoKSA9PiAoZGlzcGF0Y2g6IGFueSkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogXCJBVVRIX0xPR0lOX0lOSVRcIixcbiAgfSk7XG4gIHJldHVybiBhcGlcbiAgICAubG9naW4oZm9ybURhdGEpXG4gICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgIC8vIHNldFVzZXIodXNlcik7XG4gICAgICBjb25zb2xlLmxvZyhcInVzZXIgbG9naW5cIiwgdXNlcik7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIkFVVEhfTE9HSU5fU1VDQ0VTU1wiLFxuICAgICAgICB1c2VyLFxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQVVUSF9MT0dJTl9FUlJPUlwiLCBlcnJvciB9KTtcbiAgICAgIGxvZ291dCgpO1xuICAgIH0pO1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luRmlyZWJhc2UgPSAoZm9ybURhdGE6IGFueSkgPT4gKGRpc3BhdGNoOiBhbnkpID0+IHtcbi8vICAgZGlzcGF0Y2goe1xuLy8gICAgIHR5cGU6IFwiQVVUSF9MT0dJTl9GSVJFQkFTRV9JTklUXCIsXG4vLyAgIH0pO1xuLy8gICByZXR1cm4gYXBpXG4vLyAgICAgLmxvZ2luKGZvcm1EYXRhKVxuLy8gICAgIC50aGVuKCh1c2VyKSA9PlxuLy8gICAgICAgZGlzcGF0Y2goe1xuLy8gICAgICAgICB0eXBlOiBcIkFVVEhfTE9HSU5fRklSRUJBU0VfU1VDQ0VTU1wiLFxuLy8gICAgICAgICB1c2VyLFxuLy8gICAgICAgfSlcbi8vICAgICApXG4vLyAgICAgLmNhdGNoKChlcnJvcikgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIkFVVEhfTE9HSU5fRklSRUJBU0VfRVJST1JcIiwgZXJyb3IgfSkpO1xuLy8gfTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IChkaXNwYXRjaDogYW55KSA9PlxuICAvLyBkaXNwYXRjaCh7XG4gIC8vICAgdHlwZTogXCJBVVRIX0xPR09VVF9JTklUXCIsXG4gIC8vIH0pO1xuICBhcGkubG9nb3V0KCkudGhlbigoXykgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJBVVRIX0xPR09VVF9TVUNDRVNTXCIgfSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkNIQVRTX0ZFVENIX1JFU1RBUlRcIiB9KTtcbiAgfSk7XG4vLyByZXR1cm4gZGlzcGF0Y2goe1xuLy8gICB0eXBlOiBcIkFVVEhfTE9HT1VUX1NVQ0NFU1NcIixcbi8vIH0pO1xuXG5leHBvcnQgY29uc3QgbGlzdGVuVG9BdXRoQ2hhbmdlcyA9ICgpID0+IChkaXNwYXRjaDogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwidm9cIik7XG4gIGRpc3BhdGNoKHsgdHlwZTogXCJBVVRIX09OX0lOSVRcIiB9KTtcblxuICByZXR1cm4gYXBpLm9uQXV0aFN0YXRlQ2hhbmdlcyhhc3luYyAoYXV0aFVzZXI6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYXV0aFVzZXJcIiwgYXV0aFVzZXIpO1xuICAgIC8vIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX3Byb2ZpbGVcIikpO1xuXG4gICAgaWYgKGF1dGhVc2VyKSB7XG4gICAgICBjb25zdCB1c2VyUHJvZmlsZSA9IGF3YWl0IGFwaS5nZXRVc2VyUHJvZmlsZShhdXRoVXNlci51aWQpO1xuICAgICAgY29uc29sZS5sb2coeyB1c2VyUHJvZmlsZSB9KTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJBVVRIX09OX1NVQ0NFU1NcIiwgdXNlcjogdXNlclByb2ZpbGUgfSk7XG4gICAgICBjb25zb2xlLmxvZyhgd2UgYXJlIGF1dGhlbnRpY2F0ZWRgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkFVVEhfT05fRVJST1JcIiB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGB3ZSBhcmUgTk9UIGF1dGhlbnRpY2F0ZWRgKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGdldFVzZXJQcm9maWxlIH0gZnJvbSBcImFwaS9hdXRoXCI7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSBcImFwaS9jaGFubmVsXCI7XG5pbXBvcnQgZGIgZnJvbSBcImRiL2ZpcmVzdG9yZVwiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hhbm5lbExpc3QgPSAodXNlcklkOiBzdHJpbmcpID0+IChkaXNwYXRjaDogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKHt1c2VySWR9KVxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogXCJDSEFOTkVMX09OX0lOSVRcIixcbiAgfSk7XG4gIHJldHVybiBhcGlcbiAgICAuZ2V0TGlzdENoYW5uZWwodXNlcklkKVxuICAgIC50aGVuKChjaGFubmVsKSA9PiB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIkNIQU5ORUxfT05fU1VDQ0VTU1wiLFxuICAgICAgICBjaGFubmVsLFxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFwiQ0hBTk5FTF9PTl9FUlJPUlwiLCBlcnJvciB9KSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDaGFubmVscyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogYW55LCBnZXRTdGF0ZTogYW55KSA9PiB7XG4gIGNvbnN0IHsgdXNlciB9ID0gZ2V0U3RhdGUoKS5hdXRoO1xuXG4gIGRpc3BhdGNoKHsgdHlwZTogXCJDSEFOTkVMU19GRVRDSF9JTklUXCIgfSk7XG4gIGNvbnN0IGNoYW5uZWxzOiBhbnkgPSBhd2FpdCBhcGkuZmV0Y2hDaGFubmVscygpO1xuICBjaGFubmVscz8uZm9yRWFjaChcbiAgICAoY2hhbm5lbDogYW55KSA9PlxuICAgICAgKGNoYW5uZWwuam9pbmVkVXNlcnMgPSBjaGFubmVsPy5qb2luZWRVc2Vycz8ubWFwKCh1c2VyOiBhbnkpID0+IHVzZXIuaWQpKVxuICApO1xuXG4gIGNvbnN0IHNvcnRlZENoYW5uZWxzID0gY2hhbm5lbHM/LnJlZHVjZShcbiAgICAoYWNjdUNoYW5uZWxzOiBhbnksIGNoYW5uZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgYWNjdUNoYW5uZWxzW1xuICAgICAgICAgIGNoYW5uZWw/LmpvaW5lZFVzZXJzLmluY2x1ZGVzKHVzZXIgJiYgdXNlci51aWQpXG4gICAgICAgICAgICA/IFwiam9pbmVkXCJcbiAgICAgICAgICAgIDogXCJhdmFpbGFibGVcIlxuICAgICAgICBdLnB1c2goY2hhbm5lbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdUNoYW5uZWxzO1xuICAgIH0sXG4gICAgeyBqb2luZWQ6IFtdLCBhdmFpbGFibGU6IFtdIH1cbiAgKTtcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogXCJDSEFOTkVMU19GRVRDSF9TVUNDRVNTXCIsXG4gICAgLi4uc29ydGVkQ2hhbm5lbHMsXG4gIH0pO1xuXG4gIHJldHVybiBzb3J0ZWRDaGFubmVscztcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENoYW5uZWxzQ29tcGFyZSA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XG4gIGNvbnN0IGNoYW5uZWxzQ29tcGFyZTogYW55ID0gYXdhaXQgYXBpLmZldGNoQ2hhbm5lbHMoKTtcbiAgZGlzcGF0Y2goeyB0eXBlOiBcIkNIQU5ORUxTX0NPTVBBUkVfRkVUQ0hfU1VDQ0VTU1wiLCBjaGFubmVsc0NvbXBhcmUgfSk7XG4gIHJldHVybiBjaGFubmVsc0NvbXBhcmU7XG59O1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlVG9DaGFubmVsID0gKGNoYW5uZWxJZDogc3RyaW5nKSA9PiAoZGlzcGF0Y2g6IGFueSkgPT5cbiAgYXBpLnN1YnNjcmliZVRvQ2hhbm5lbChjaGFubmVsSWQsIGFzeW5jIChjaGFubmVsOiBhbnkpID0+IHtcbiAgICBjb25zdCBqb2luZWRVc2VycyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgY2hhbm5lbD8uam9pbmVkVXNlcnMubWFwKGFzeW5jICh1c2VyUmVmOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgdXNlclNuYXBzaG90ID0gYXdhaXQgdXNlclJlZi5nZXQoKTtcbiAgICAgICAgcmV0dXJuIHVzZXJTbmFwc2hvdC5kYXRhKCk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjaGFubmVsLmpvaW5lZFVzZXJzID0gam9pbmVkVXNlcnM7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkNIQU5ORUxTX1NFVF9BQ1RJVkVfQ0hBTk5FTFwiLCBjaGFubmVsIH0pO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IGpvaW5DaGFubmVsID0gKGNoYW5uZWw6IGFueSwgdWlkOiBzdHJpbmcpID0+IChkaXNwYXRjaDogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiam9pbiBjaGFubmVsXCIsIGNoYW5uZWwpO1xuICByZXR1cm4gYXBpLmpvaW5DaGFubmVsKHVpZCwgY2hhbm5lbD8uaWQpLnRoZW4oKGNoYW5uZWxJZCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJDSEFOTkVMU19KT0lOX1NVQ0NFU1NcIiwgY2hhbm5lbCB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlVG9Qcm9maWxlID1cbiAgKHVpZDogc3RyaW5nLCBjaGFubmVsSWQ6IHN0cmluZykgPT4gKGRpc3BhdGNoOiBhbnkpID0+XG4gICAgYXBpLnN1YnNjcmliZVRvUHJvZmlsZSh1aWQsICh1c2VyOiBhbnkpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJDSEFOTkVMU19VUERBVEVfVVNFUl9TVEFURVwiLCB1c2VyLCBjaGFubmVsSWQgfSk7XG4gICAgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDaGFubmVsID1cbiAgKGZvcm1EYXRhOiBhbnksIHVzZXJJZDogYW55KSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xuICAgIGNvbnN0IG5ld0NoYW5uZWwgPSB7IC4uLmZvcm1EYXRhIH07XG5cbiAgICBuZXdDaGFubmVsLmFkbWluID0gZGIuZG9jKGBwcm9maWxlcy8ke3VzZXJJZH1gKTtcbiAgICBjb25zdCBjaGFubmVsSWQgPSBhd2FpdCBhcGkuY3JlYXRlQ2hhbm5lbChuZXdDaGFubmVsKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQ0hBTk5FTFNfQ1JFQVRFX1NVQ0NFU1NcIiB9KTtcbiAgICBhd2FpdCBhcGkuam9pbkNoYW5uZWwodXNlcklkLCBjaGFubmVsSWQpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiQ0hBTk5FTFNfSk9JTl9TVUNDRVNTXCIsXG4gICAgICBjaGFubmVsOiB7IC4uLm5ld0NoYW5uZWwsIGlkOiBjaGFubmVsSWQgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gY2hhbm5lbElkO1xuICB9O1xuXG5leHBvcnQgY29uc3Qgc2VuZENoYW5uZWxNZXNzYWdlID1cbiAgKG1lc3NhZ2U6IGFueSwgY2hhbm5lbElkOiBzdHJpbmcpID0+IChkaXNwYXRjaDogYW55LCBnZXRTdGF0ZTogYW55KSA9PiB7XG4gICAgY29uc3QgbmV3TWVzc2FnZSA9IHsgLi4ubWVzc2FnZSB9O1xuICAgIGNvbnNvbGUubG9nKHsgbmV3TWVzc2FnZSB9KTtcbiAgICBjb25zdCB7IHVzZXIgfSA9IGdldFN0YXRlKCkuYXV0aDtcblxuICAgIGNvbnN0IHVzZXJSZWYgPSBkYi5kb2MoYHByb2ZpbGVzLyR7dXNlci51aWR9YCk7XG4gICAgbmV3TWVzc2FnZS5hdXRob3IgPSB1c2VyUmVmO1xuXG4gICAgcmV0dXJuIGFwaVxuICAgICAgLnNlbmRDaGFubmVsTWVzc2FnZShuZXdNZXNzYWdlLCBjaGFubmVsSWQpXG4gICAgICAudGhlbigoXykgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIkNIQU5ORUxTX01FU1NBR0VfU0VOVFwiIH0pKTtcbiAgfTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZVRvTWVzc2FnZXMgPSAoY2hhbm5lbElkOiBzdHJpbmcpID0+IChkaXNwYXRjaDogYW55KSA9PiB7XG4gIHJldHVybiBhcGkuc3Vic2NyaWJlVG9NZXNzYWdlcyhjaGFubmVsSWQsIGFzeW5jIChjaGFuZ2VzOiBhbnkpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGNoYW5nZXMubWFwKChjaGFuZ2U6IGFueSkgPT4ge1xuICAgICAgaWYgKGNoYW5nZS50eXBlID09PSBcImFkZGVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgaWQ6IGNoYW5nZS5kb2MuaWQsIC4uLmNoYW5nZS5kb2MuZGF0YSgpIH07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZXNzYWdlV2l0aEF1dGhvciA9IFtdO1xuICAgIGNvbnN0IGNhY2hlOiBhbnkgPSB7fTtcblxuICAgIGZvciBhd2FpdCAobGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMpIHtcbiAgICAgIGlmIChjYWNoZVttZXNzYWdlLmF1dGhvci5pZF0pIHtcbiAgICAgICAgbWVzc2FnZS5hdXRob3IgPSBjYWNoZVttZXNzYWdlLmF1dGhvci5pZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1c2VyU25hcHNob3QgPSBhd2FpdCBtZXNzYWdlLmF1dGhvci5nZXQoKTtcbiAgICAgICAgY2FjaGVbdXNlclNuYXBzaG90LmlkXSA9IHVzZXJTbmFwc2hvdC5kYXRhKCk7XG4gICAgICAgIG1lc3NhZ2UuYXV0aG9yID0gY2FjaGVbdXNlclNuYXBzaG90LmlkXTtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2VXaXRoQXV0aG9yLnB1c2gobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IFwiQ0hBTk5FTFNfU0VUX01FU1NBR0VTXCIsIG1lc3NhZ2VzLCBjaGFubmVsSWQgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyTWVzc2FnZVN1YnNjcmlwdGlvbiA9IChcbiAgY2hhbm5lbElkOiBhbnksXG4gIG1lc3NhZ2VTdWI6IGFueVxuKSA9PiAoe1xuICB0eXBlOiBcIkNIQU5ORUxTX1JFR0lTVEVSX01FU1NBR0VfU1VCXCIsXG4gIHN1YjogbWVzc2FnZVN1YixcbiAgY2hhbm5lbElkLFxufSk7XG4iLCJpbXBvcnQgYXhpb3NDbGllbnQgZnJvbSBcImFwaS9heGlvc0NsaWVudFwiO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCJtb2RlbHMvYXV0aFwiO1xuaW1wb3J0IHsgcmVtb3ZlVXNlciwgc2V0VXNlciB9IGZyb20gXCJzZXJ2aWNlcy9Ub2tlblNlcnZpY2VcIjtcbmltcG9ydCBkYiBmcm9tIFwiZGIvZmlyZXN0b3JlXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xuXG4vLyBDcmVhdGUgY29sbGVjdGlvbiBwcm9maWxlc1xuY29uc3QgY3JlYXRlVXNlclByb2ZpbGUgPSAodXNlclByb2ZpbGU6IGFueSkgPT5cbiAgZGIuY29sbGVjdGlvbihcInByb2ZpbGVzXCIpLmRvYyh1c2VyUHJvZmlsZS51aWQpLnNldCh1c2VyUHJvZmlsZSk7XG5cbmNvbnN0IGV4dHJhY3RTbmFwc2hvdERhdGEgPSAoc25hcHNob3Q6IGFueSkgPT5cbiAgc25hcHNob3QuZG9jcy5tYXAoKGRvYzogYW55KSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSAoKSA9PlxuICBkYi5jb2xsZWN0aW9uKFwicHJvZmlsZXNcIikuZ2V0KCkudGhlbihleHRyYWN0U25hcHNob3REYXRhKTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJQcm9maWxlID0gKHVpZDogc3RyaW5nKSA9PlxuICBkYlxuICAgIC5jb2xsZWN0aW9uKFwicHJvZmlsZXNcIilcbiAgICAuZG9jKHVpZClcbiAgICAuZ2V0KClcbiAgICAudGhlbigoc25hcHNob3QpID0+IHNuYXBzaG90LmRhdGEoKSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jICh7IHVzZXJJZCwgdXNlclBhc3N3b3JkIH06IEF1dGgpID0+IHtcbiAgY29uc3QgdXJsID0gXCIvMDAwMTAwMDFcIjtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIGRldmljZVR5cGU6IFwid2ViXCIsXG4gICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgIHVzZXJQYXNzd29yZDogdXNlclBhc3N3b3JkLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgcmVzTG9naW46IGFueSA9IGF3YWl0IGF4aW9zQ2xpZW50LnBvc3QodXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIHNldFVzZXIocmVzTG9naW4pO1xuICBjb25zb2xlLmxvZyh7IHJlc0xvZ2luIH0pO1xuICBjb25zdCBkYXRhRmlyZWJhc2UgPSB7IC4uLnJlc0xvZ2luIH07XG4gIGRhdGFGaXJlYmFzZS5lbWFpbCA9IGAke2RhdGEucGFyYW1zLnVzZXJJZH1AZ21haWwuY29tYDtcbiAgZGF0YUZpcmViYXNlLnBhc3N3b3JkID0gYCR7ZGF0YS5wYXJhbXMudXNlclBhc3N3b3JkfTU2YDtcblxuICBjb25zdCBsaXN0VXNlcnMgPSBhd2FpdCBmZXRjaFVzZXJzKCk7XG4gIGNvbnNvbGUubG9nKHsgbGlzdFVzZXJzIH0pO1xuICBjb25zdCBkdXBVc2VyID0gbGlzdFVzZXJzLmZpbHRlcihcbiAgICAodXNlcjogYW55KSA9PiB1c2VyLmVtYWlsID09PSBkYXRhRmlyZWJhc2UuZW1haWxcbiAgKTtcbiAgY29uc29sZS5sb2coeyBkdXBVc2VyIH0pO1xuXG4gIGlmIChkdXBVc2VyLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBsb2dpbkZpcmVCYXNlUmVzID0gYXdhaXQgbG9naW5GaXJlYmFzZShkYXRhRmlyZWJhc2UpO1xuICAgIHJldHVybiBsb2dpbkZpcmVCYXNlUmVzO1xuICB9XG5cbiAgY29uc3QgeyB1c2VyIH0gPSBhd2FpdCBmaXJlYmFzZVxuICAgIC5hdXRoKClcbiAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGRhdGFGaXJlYmFzZS5lbWFpbCwgZGF0YUZpcmViYXNlLnBhc3N3b3JkKTtcblxuICBjb25zdCB1c2VyUHJvZmlsZVJlZ2lzdGVyOiBhbnkgPSB7XG4gICAgdXNlcklkOiBkYXRhLnBhcmFtcy51c2VySWQsXG4gICAgdWlkOiB1c2VyLnVpZCxcbiAgICB1c2VybmFtZTogdXNlci51aWQsXG4gICAgZW1haWw6IGRhdGFGaXJlYmFzZS5lbWFpbCxcbiAgICBhdmF0YXI6IHJlc0xvZ2luPy5wYXJhbXMucHJvZmlsZV9pbWFnZSxcbiAgICBhdGs6IHJlc0xvZ2luPy5wYXJhbXMuYXRrLFxuICAgIHJ0azogcmVzTG9naW4/LnBhcmFtcy5ydGssXG4gICAgam9pbmVkQ2hhbm5lbHM6IFtdLFxuICB9O1xuXG4gIGF3YWl0IGNyZWF0ZVVzZXJQcm9maWxlKHVzZXJQcm9maWxlUmVnaXN0ZXIpO1xuXG4gIGNvbnN0IGxvZ2luRmlyZUJhc2VSZXMgPSBhd2FpdCBsb2dpbkZpcmViYXNlKGRhdGFGaXJlYmFzZSk7XG4gIHJldHVybiBsb2dpbkZpcmVCYXNlUmVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luRmlyZWJhc2UgPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfTogYW55KSA9PiB7XG4gIGNvbnN0IHsgdXNlciB9ID0gYXdhaXQgZmlyZWJhc2VcbiAgICAuYXV0aCgpXG4gICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XG4gIC8vIGNvbnNvbGUubG9nKHsgdXNlciB9KTtcbiAgY29uc3QgdXNlclByb2ZpbGUgPSBhd2FpdCBnZXRVc2VyUHJvZmlsZSh1c2VyLnVpZCk7XG4gIC8vIGNvbnNvbGUubG9nKHsgdXNlclByb2ZpbGUgfSk7XG4gIHJldHVybiB1c2VyUHJvZmlsZTtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4vLyAgIHJlbW92ZVVzZXIoKTtcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gIHJlbW92ZVVzZXIoKTtcbiAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XG59O1xuXG5leHBvcnQgY29uc3Qgb25BdXRoU3RhdGVDaGFuZ2VzID0gKG9uQXV0aDogYW55KSA9PiB7XG4gIHJldHVybiBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKG9uQXV0aCk7XG59O1xuIiwiaW1wb3J0IGF4aW9zLCB7IEF4aW9zSGVhZGVycywgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1xuICBnZXRBY2Nlc3NUb2tlbixcbiAgZ2V0TG9jYWxSZWZyZXNoVG9rZW4sXG4gIHVwZGF0ZUxvY2FsQWNjZXNzVG9rZW4sXG59IGZyb20gXCJzZXJ2aWNlcy9Ub2tlblNlcnZpY2VcIjtcblxuY29uc3QgYXhpb3NDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcImh0dHBzOi8vbW9lbWUtd2ViLWRldi5hdmVhcHAuY29tL21vYVwiLFxuICBoZWFkZXJzOiB7XG4gICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCI6IFwiR0VULCBQVVQsIFBPU1QsIERFTEVURSwgT1BUSU9OU1wiLFxuICAgIEF1dGhvcml6YXRpb246IFwidmFsdWUxXCIsXG4gIH0sXG59KTtcblxuYXhpb3NDbGllbnQuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICBmdW5jdGlvbiAoY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcpIHtcbiAgICAvLyBEbyBzb21ldGhpbmcgYmVmb3JlIHJlcXVlc3QgaXMgc2VudFxuICAgIGNvbnN0IHRva2VuID0gZ2V0QWNjZXNzVG9rZW4oKTtcbiAgICBjb25zb2xlLmxvZyh7dG9rZW59KVxuICAgIGlmICh0b2tlbikge1xuICAgICAgKGNvbmZpZy5oZWFkZXJzIGFzIEF4aW9zSGVhZGVycykuc2V0KFwiQXV0aG9yaXphdGlvblwiLCBgTU9BICR7dG9rZW59YCk7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG4gIH0sXG4gIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlcXVlc3QgZXJyb3JcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG4pO1xuXG4vLyBBZGQgYSByZXNwb25zZSBpbnRlcmNlcHRvclxuYXhpb3NDbGllbnQuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgZnVuY3Rpb24gKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKSB7XG4gICAgLy8gQW55IHN0YXR1cyBjb2RlIHRoYXQgbGllIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMnh4IGNhdXNlIHRoaXMgZnVuY3Rpb24gdG8gdHJpZ2dlclxuICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlc3BvbnNlIGRhdGFcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSxcbiAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgLy8gQW55IHN0YXR1cyBjb2RlcyB0aGF0IGZhbGxzIG91dHNpZGUgdGhlIHJhbmdlIG9mIDJ4eCBjYXVzZSB0aGlzIGZ1bmN0aW9uIHRvIHRyaWdnZXJcbiAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXNwb25zZSBlcnJvclxuICAgIC8vIGNvbnN0IG9yaWdpbmFsQ29uZmlnID0gZXJyb3IuY29uZmlnO1xuICAgIC8vIGlmIChvcmlnaW5hbENvbmZpZy51cmwgIT09IFwiL1wiICYmIGVycm9yLmNvZGUgPT09IFwiRVJSX05FVFdPUktcIikge1xuICAgIC8vICAgLy8gQWNjZXNzIFRva2VuIHdhcyBleHBpcmVkXG4gICAgLy8gICBpZiAoIW9yaWdpbmFsQ29uZmlnLnZhbGlkYXRlU3RhdHVzKCkpIHtcbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBnZXRMb2NhbFJlZnJlc2hUb2tlbigpO1xuXG4gICAgLy8gICAgICAgdXBkYXRlTG9jYWxBY2Nlc3NUb2tlbihyZWZyZXNoVG9rZW4pO1xuXG4gICAgLy8gICAgICAgcmV0dXJuIGF4aW9zQ2xpZW50KG9yaWdpbmFsQ29uZmlnKTtcbiAgICAvLyAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KF9lcnJvcik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBheGlvc0NsaWVudDtcbiIsImltcG9ydCBheGlvc0NsaWVudCBmcm9tIFwiYXBpL2F4aW9zQ2xpZW50XCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IGRiIGZyb20gXCJkYi9maXJlc3RvcmVcIjtcblxuZXhwb3J0IGNvbnN0IGdldExpc3RDaGFubmVsID0gKHVzZXJJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHVybCA9IFwiLzAwMDQwMDQ0XCI7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgcGFyYW1zOiB7XG4gICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBheGlvc0NsaWVudC5wb3N0KHVybCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufTtcblxuY29uc3QgZXh0cmFjdFNuYXBzaG90RGF0YSA9IChzbmFwc2hvdDogYW55KSA9PlxuICBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jOiBhbnkpID0+ICh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDaGFubmVscyA9ICgpID0+XG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKS5nZXQoKS50aGVuKGV4dHJhY3RTbmFwc2hvdERhdGEpO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2hhbm5lbCA9IChjaGFubmVsOiBhbnkpID0+XG4gIGRiXG4gICAgLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKVxuICAgIC5hZGQoY2hhbm5lbClcbiAgICAudGhlbigoZG9jUmVmKSA9PiBkb2NSZWYuaWQpO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlVG9DaGFubmVsID0gKGNoYW5uZWxJZDogc3RyaW5nLCBvblN1YnNyaWJlOiBhbnkpID0+XG4gIGRiXG4gICAgLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKVxuICAgIC5kb2MoY2hhbm5lbElkKVxuICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xuICAgICAgY29uc3QgY2hhbm5lbCA9IHsgaWQ6IHNuYXBzaG90LmlkLCAuLi5zbmFwc2hvdC5kYXRhKCkgfTtcbiAgICAgIG9uU3Vic3JpYmUoY2hhbm5lbCk7XG4gICAgfSk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVUb1Byb2ZpbGUgPSAodWlkOiBzdHJpbmcsIG9uU3Vic3JpYmU6IGFueSkgPT5cbiAgZGJcbiAgICAuY29sbGVjdGlvbihcInByb2ZpbGVzXCIpXG4gICAgLmRvYyh1aWQpXG4gICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiBvblN1YnNyaWJlKHNuYXBzaG90LmRhdGEoKSkpO1xuXG5leHBvcnQgY29uc3Qgam9pbkNoYW5uZWwgPSBhc3luYyAodXNlcklkOiBzdHJpbmcsIGNoYW5uZWxJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHVzZXJSZWYgPSBkYi5kb2MoYHByb2ZpbGVzLyR7dXNlcklkfWApO1xuICBjb25zdCBjaGFubmVsUmVmID0gZGIuZG9jKGBjaGFubmVscy8ke2NoYW5uZWxJZH1gKTtcbiAgYXdhaXQgdXNlclJlZi51cGRhdGUoe1xuICAgIGpvaW5lZENoYW5uZWxzOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5hcnJheVVuaW9uKGNoYW5uZWxSZWYpLFxuICB9KTtcblxuICBhd2FpdCBjaGFubmVsUmVmLnVwZGF0ZSh7XG4gICAgam9pbmVkVXNlcnM6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLmFycmF5VW5pb24odXNlclJlZiksXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRDaGFubmVsTWVzc2FnZSA9IChtZXNzYWdlOiBhbnksIGNoYW5uZWxJZDogYW55KSA9PlxuICBkYlxuICAgIC5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIilcbiAgICAuZG9jKGNoYW5uZWxJZClcbiAgICAuY29sbGVjdGlvbihcIm1lc3NhZ2VzXCIpXG4gICAgLmRvYyhtZXNzYWdlLnRpbWVzdGFtcClcbiAgICAuc2V0KG1lc3NhZ2UpO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlVG9NZXNzYWdlcyA9IChjaGFubmVsSWQ6IGFueSwgb25TdWJzcmliZTogYW55KSA9PlxuICBkYlxuICAgIC5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIilcbiAgICAuZG9jKGNoYW5uZWxJZClcbiAgICAuY29sbGVjdGlvbihcIm1lc3NhZ2VzXCIpXG4gICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiBvblN1YnNyaWJlKHNuYXBzaG90LmRvY0NoYW5nZXMoKSkpO1xuIiwiaW1wb3J0IHsgY3NzLCBDU1NPYmplY3QgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxudHlwZSBicmVha3BvaW50c1R5cGUgPSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG4vLyBCcmVha3BvaW50c1xuZXhwb3J0IGNvbnN0IGJyZWFrcG9pbnRzOiBicmVha3BvaW50c1R5cGUgPSB7XG4gIHhzOiAwLFxuICBzbTogXCI1NzZweFwiLFxuICBtZDogXCI3NjhweFwiLFxuICBsZzogXCI5OTJweFwiLFxuICB4bDogXCIxMjAwcHhcIixcbiAgeHhsOiBcIjE0MDBweFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmUgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykucmVkdWNlKFxuICAoYWNjdW11bGF0b3I6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIGxhYmVsKSA9PiB7XG4gICAgYWNjdW11bGF0b3JbbGFiZWxdID0gKFxuICAgICAgLi4uYXJnczogW1RlbXBsYXRlU3RyaW5nc0FycmF5IHwgQ1NTT2JqZWN0XVxuICAgICk6IGFueSA9PiBjc3NgXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHticmVha3BvaW50c1tsYWJlbF19KSB7XG4gICAgICAgICR7Y3NzKC4uLmFyZ3MpfTtcbiAgICAgIH1cbiAgICBgO1xuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfSxcbiAge31cbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENoYW5uZWwgfSBmcm9tIFwibW9kZWxzL2NoYW5uZWxcIjtcbmltcG9ydCB7IGN1cnJlbmN5Rm9ybWF0IH0gZnJvbSBcImhvb2tzL3VzZUZvcm1hdE51bWJlclwiO1xuaW1wb3J0IFNUT0ljb24gZnJvbSBcImFzc2V0cy9pbWFnZXMvaWNvbi9TVE8ucG5nXCI7XG5pbXBvcnQgT1JHSWNvbiBmcm9tIFwiYXNzZXRzL2ltYWdlcy9pY29uL09SRy5wbmdcIjtcbmltcG9ydCBQRVJJY29uIGZyb20gXCJhc3NldHMvaW1hZ2VzL2ljb24vUEVSLnBuZ1wiO1xuaW1wb3J0IFNQTEljb24gZnJvbSBcImFzc2V0cy9pbWFnZXMvaWNvbi9TUEwucG5nXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgY3JlYXRlQ2hhbm5lbCwgam9pbkNoYW5uZWwgfSBmcm9tIFwiYWN0aW9ucy9jaGFubmVsXCI7XG5cbmludGVyZmFjZSBDYXJkQ2hhbm5lbFByb3BzIHtcbiAgY2hhbm5lbDogQ2hhbm5lbDtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIGlzR29DaGFubmVsPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBDYXJkQ2hhbm5lbCh7IGNoYW5uZWwsIG9uQ2xpY2ssIGlzR29DaGFubmVsIH06IENhcmRDaGFubmVsUHJvcHMpIHtcbiAgY29uc3QgZGlzcGF0Y2g6IGFueSA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IHVzZXI6IGFueSA9IHVzZVNlbGVjdG9yKCh7IGF1dGggfSkgPT4gYXV0aC51c2VyKTtcblxuICBjb25zdCByZW5kZXJDaGFubmVsVHlwZSA9IChjaGFubmVsVHlwZTogc3RyaW5nKSA9PiB7XG4gICAgc3dpdGNoIChjaGFubmVsVHlwZSkge1xuICAgICAgY2FzZSBcIlNUT1wiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtTVE9JY29ufSBjbGFzc05hbWU9XCJpY29uVGFnXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIOyiheuqqVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJPUkdcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZ1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17T1JHSWNvbn0gY2xhc3NOYW1lPVwiaWNvblRhZ1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICDquLDqtIBcbiAgICAgICAgICA8L3A+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiUEVSXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWdcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e1BFUkljb259IGNsYXNzTmFtZT1cImljb25UYWdcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAg6rCc7J24XG4gICAgICAgICAgPC9wPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlNQTFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtTUExJY29ufSBjbGFzc05hbWU9XCJpY29uVGFnXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIOyghOusuOqwgFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNob29zZUNoYW5uZWwgPSBhc3luYyAoY2hhbm5lbDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coe2lzR29DaGFubmVsfSlcbiAgICBzd2l0Y2ggKGlzR29DaGFubmVsKSB7XG4gICAgICBjYXNlIFwiR09fQ0hBTk5FTFwiOlxuICAgICAgICByZXR1cm4gaGlzdG9yeS5wdXNoKGAvY2hhbm5lbC8ke2NoYW5uZWw/LmlkfWApO1xuICAgICAgY2FzZSBcIkNSRUFURV9DSEFOTkVMXCI6XG4gICAgICAgIHJldHVybiBhc2tGb3JDb25maXJtdGlvbk9sZENoYW5uZWwoY2hhbm5lbCk7XG4gICAgICBjYXNlIFwiSk9JTl9DSEFOTkVMXCI6XG4gICAgICAgIHJldHVybiBhc2tGb3JDb25maXJtdGlvbk5ld0NoYW5uZWwoY2hhbm5lbCk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBoaXN0b3J5LnB1c2goYC9jaGFubmVsLyR7Y2hhbm5lbD8uaWR9YCk7XG4gICAgfVxuXG4gICAgLy8gaWYgKCFvbkNsaWNrKSB7XG4gICAgLy8gICBoaXN0b3J5LnB1c2goYC9jaGFubmVsLyR7Y2hhbm5lbD8uaWR9YCk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGFza0ZvckNvbmZpcm10aW9uTmV3Q2hhbm5lbChjaGFubmVsKTtcbiAgICAvLyB9XG5cbiAgICAvLyBkaXNwYXRjaCh7XG4gICAgLy8gICB0eXBlOiBcIkNIT09TRV9DSEFOTkVMXCIsXG4gICAgLy8gICBjaGFubmVsRGV0YWlsOiBjaGFubmVsLFxuICAgIC8vIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFza0ZvckNvbmZpcm10aW9uT2xkQ2hhbm5lbCA9IChjaGFubmVsOiBhbnkpID0+IHtcbiAgICBjb25zdCBpc0NvbmZpcm1pbmcgPSBjb25maXJtKFxuICAgICAgYERvIHlvdSB3YW50IHRvIGNyZWF0ZSAmIGpvaW4gY2hhbm5lbDogJHtjaGFubmVsLnJvb21fbmFtZX1gXG4gICAgKTtcblxuICAgIGlmIChpc0NvbmZpcm1pbmcpIHtcbiAgICAgIGRpc3BhdGNoKGNyZWF0ZUNoYW5uZWwoY2hhbm5lbCwgdXNlci51aWQpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXNrRm9yQ29uZmlybXRpb25OZXdDaGFubmVsID0gKGNoYW5uZWw6IGFueSkgPT4ge1xuICAgIGNvbnN0IGlzQ29uZmlybWluZyA9IGNvbmZpcm0oXG4gICAgICBgRG8geW91IHdhbnQgdG8gam9pbiBjaGFubmVsOiAke2NoYW5uZWwucm9vbV9uYW1lfWBcbiAgICApO1xuXG4gICAgaWYgKGlzQ29uZmlybWluZykge1xuICAgICAgZGlzcGF0Y2goam9pbkNoYW5uZWwoY2hhbm5lbCwgdXNlci51aWQpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZENoYW5uZWxTdHlsZWQ+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNob29zZUNoYW5uZWwoY2hhbm5lbCl9XG4gICAgICAgIGtleT17YCR7Y2hhbm5lbD8ucm9vbV9uYW1lfS0ke2NoYW5uZWw/LmlkfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC0tdG9wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLS10b3BfX2luZm9yXCI+XG4gICAgICAgICAgICA8b2JqZWN0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb240MCBhdmF0YXJcIlxuICAgICAgICAgICAgICBkYXRhPXtgaHR0cDovL21vYS5hdmVhcHAuY29tOjIxNDA1L2ZpbGUvYXBpL2Rvd25fcHJvYy5qc3A/dHlwZT03JnNlcnZlcmZpbGU9dGh1bWJfJHtjaGFubmVsLnJvb21fcHJvZmlsZV9pbWFnZX1gfVxuICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cImh0dHA6Ly93d3cyLmF2ZWFwcC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDUvdzI1NjAuanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb240MCBhdmF0YXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9vYmplY3Q+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9yXCI+XG4gICAgICAgICAgICAgIDxoMz57Y2hhbm5lbD8ucm9vbV9uYW1lfTwvaDM+XG4gICAgICAgICAgICAgIHtyZW5kZXJDaGFubmVsVHlwZShjaGFubmVsPy5jaG5sX3R5cGUpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge051bWJlcihjaGFubmVsPy51bnJlYWQpID4gMCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC0tdG9wX19ub3RpZnlcIj5cbiAgICAgICAgICAgICAgPHA+TmV3PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtLWJvdHRvbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC0tYm90dG9tX19wZXJzb25cIj5cbiAgICAgICAgICAgIDxvYmplY3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbjI0IGF2YXRhclwiXG4gICAgICAgICAgICAgIGRhdGE9e2BodHRwOi8vbW9hLmF2ZWFwcC5jb206MjE0MDUvZmlsZS9hcGkvZG93bl9wcm9jLmpzcD90eXBlPTEyJnVzZXJpZD0ke2NoYW5uZWwub3duZXJJZH0mcm9vbWlkPSR7Y2hhbm5lbD8ucm9vbUlkfWB9XG4gICAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvMTQ3LzE0NzE0NC5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbjI0IGF2YXRhclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L29iamVjdD5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC0tYm90dG9tX19wZXJzb25fX25hbWVcIj5cbiAgICAgICAgICAgICAge2NoYW5uZWw/Lm93bmVyX25hbWV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLS1ib3R0b21fX2J1eWVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLS1ib3R0b21fX2J1eWVyLS1uYW1lXCI+e2NoYW5uZWw/Lm93bmVySWR9IDE8L3A+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLS1ib3R0b21fX2J1eWVyLS1xdWFudGl0eVwiPlxuICAgICAgICAgICAgICB7Y3VycmVuY3lGb3JtYXQoTnVtYmVyKGNoYW5uZWw/LnVzZXJDb3VudCkpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZENoYW5uZWxTdHlsZWQ+XG4gICk7XG59XG5jb25zdCBDYXJkQ2hhbm5lbFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIC5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJi0tdG9wIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZWNmMztcblxuICAgICAgJl9fbm90aWZ5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MWUzO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogMXB4IDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJl9faW5mb3Ige1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgLy8gd2lkdGg6IDQwcHg7XG4gICAgICAgICAgLy8gaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgLy8gb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm9yIHtcbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLS1ib3R0b20ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsZ2luLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHggMTVweDtcblxuICAgICAgJl9fcGVyc29uIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9fYnV5ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICYtLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDA7XG4gICAgICAgICAgY29sb3I6IHJnYigxMTIsIDExMiwgMTEyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLXF1YW50aXR5IHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgY29sb3I6IHJnYigxMTIsIDExMiwgMTEyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZENoYW5uZWw7XG4iLCJpbXBvcnQge1xuICBnZXRDaGFubmVsTGlzdCxcbiAgY3JlYXRlQ2hhbm5lbCxcbiAgZmV0Y2hDaGFubmVscyxcbiAgZmV0Y2hDaGFubmVsc0NvbXBhcmUsXG59IGZyb20gXCJhY3Rpb25zL2NoYW5uZWxcIjtcbmltcG9ydCBDYXJkQ2hhbm5lbCBmcm9tIFwiY29tcG9uZW50cy9DYXJkQ2hhbm5lbFwiO1xuaW1wb3J0IExvYWRpbmdWaWV3IGZyb20gXCJjb21wb25lbnRzL1NwaW5uZXIvTG9hZGluZ1ZpZXdcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiY29tcG9uZW50cy9UaXRsZVwiO1xuaW1wb3J0IHsgQ2hhbm5lbCB9IGZyb20gXCJtb2RlbHMvY2hhbm5lbFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCJzZXJ2aWNlcy9Ub2tlblNlcnZpY2VcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmludGVyZmFjZSBDaGFubmVsTGlzdFByb3BzIHtcbiAgam9pbmVkQ2hhbm5lbHM6IGFueTtcbn1cblxuZnVuY3Rpb24gQ2hhbm5lbExpc3QoeyBqb2luZWRDaGFubmVscyB9OiBDaGFubmVsTGlzdFByb3BzKSB7XG4gIGNvbnN0IGlzQ2hlY2tpbmcgPSB1c2VTZWxlY3RvcigoeyBjaGFubmVsIH0pID0+IGNoYW5uZWwuaXNDaGVja2luZyk7XG5cbiAgaWYgKGlzQ2hlY2tpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmdWaWV3IC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhbm5lbExpc3RTdHlsZWQ+XG4gICAgICA8VGl0bGUgbmFtZT1cIkNoYW5uZWxcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLS1jb250YWluZXJcIj5cbiAgICAgICAge2pvaW5lZENoYW5uZWxzPy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgam9pbmVkQ2hhbm5lbHNcbiAgICAgICAgICAgIC8vID8uZmlsdGVyKFxuICAgICAgICAgICAgLy8gICAoY2hhbm5lbDogYW55KSA9PlxuICAgICAgICAgICAgLy8gICAgIChjaGFubmVsPy5yb29tX3R5cGUgPT09IFwiMlwiIHx8IGNoYW5uZWw/LnJvb21fdHlwZSA9PT0gXCIzXCIpICYmXG4gICAgICAgICAgICAvLyAgICAgY2hhbm5lbD8ub3duc2VySWQgIT09IHVzZXIudWlkXG4gICAgICAgICAgICAvLyApXG4gICAgICAgICAgICA/Lm1hcCgoY2hhbm5lbDogQ2hhbm5lbCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDYXJkQ2hhbm5lbFxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17Y2hhbm5lbH1cbiAgICAgICAgICAgICAgICAgIGtleT17YCR7Y2hhbm5lbD8ucm9vbV9uYW1lfS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9DaGFubmVsTGlzdFN0eWxlZD5cbiAgKTtcbn1cblxuY29uc3QgQ2hhbm5lbExpc3RTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAvLyBtaW4td2lkdGg6IDQyMHB4O1xuICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTZlY2YzO1xuXG4gIC5jYXJkLS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5MXB4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLyogd2lkdGggKi9cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAvKiBUcmFjayAqL1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgfVxuXG4gICAgLyogSGFuZGxlICovXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuXG4gICAgLyogSGFuZGxlIG9uIGhvdmVyICovXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzU1NTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogdW5zZXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbExpc3Q7XG4iLCJpbXBvcnQgeyBjdXJyZW5jeUZvcm1hdCB9IGZyb20gXCJob29rcy91c2VGb3JtYXROdW1iZXJcIjtcbmltcG9ydCB7IENoYW5uZWwgfSBmcm9tIFwibW9kZWxzL2NoYW5uZWxcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEljb25TdG9ja1RvcCBmcm9tIFwiYXNzZXRzL2ltYWdlcy9jaGF0L3N0b2NrLXRvcC5wbmdcIjtcbmltcG9ydCBJY29uU2VhcmNoIGZyb20gXCJhc3NldHMvaW1hZ2VzL2NoYXQvc2VhcmNoLnBuZ1wiO1xuaW1wb3J0IEljb25Nb3JlTWVudSBmcm9tIFwiYXNzZXRzL2ltYWdlcy9jaGF0L21vcmVtZW51LnBuZ1wiO1xuXG5pbnRlcmZhY2UgQ2hhdEJhclByb3BzIHtcbiAgY2hhbm5lbD86IGFueTtcbn1cblxuZnVuY3Rpb24gQ2hhdEJhcih7IGNoYW5uZWwgfTogQ2hhdEJhclByb3BzKSB7XG4gIC8vIGNvbnN0IGNoYW5uZWxEZXRhaWwgPSB1c2VTZWxlY3RvcigoeyBjaGFubmVsIH0pID0+IGNoYW5uZWwuY2hhbm5lbERldGFpbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhdEJhclN0eWxlZCBjbGFzc05hbWU9XCJjaGF0LS1iYXJzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtLWJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtLWJhcl9faW5mb3JcIj5cbiAgICAgICAgICB7Y2hhbm5lbD8ucm9vbV9wcm9maWxlX2ltYWdlID8gKFxuICAgICAgICAgICAgPG9iamVjdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uNDAgYXZhdGFyXCJcbiAgICAgICAgICAgICAgZGF0YT17YGh0dHA6Ly9tb2EuYXZlYXBwLmNvbToyMTQwNS9maWxlL2FwaS9kb3duX3Byb2MuanNwP3R5cGU9NyZzZXJ2ZXJmaWxlPXRodW1iXyR7Y2hhbm5lbC5yb29tX3Byb2ZpbGVfaW1hZ2V9YH1cbiAgICAgICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwOi8vd3d3Mi5hdmVhcHAuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA1L3cyNTYwLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uNDAgYXZhdGFyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvb2JqZWN0PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cImh0dHA6Ly93d3cyLmF2ZWFwcC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDUvdzI1NjAuanBnXCJcbiAgICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbjQwIGF2YXRhclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtLWJhcl9faW5mb3JfX2dyb3VwbmFtZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LS1iYXJfX2luZm9yX19ncm91cG5hbWVfX3RvcFwiPlxuICAgICAgICAgICAgICA8aDQ+e2NoYW5uZWw/LnJvb21fbmFtZX08L2g0PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXJrc1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyXCI+XG4gICAgICAgICAgICAgICAge2N1cnJlbmN5Rm9ybWF0KE51bWJlcihjaGFubmVsPy51c2VyQ291bnQpKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtLWJhcl9faW5mb3JfX2dyb3VwbmFtZV9fYm90dG9tXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICB7Y2hhbm5lbD8ub3duZXJfbmFtZX0te2NoYW5uZWw/Lm93bmVySWR9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LS1iYXJfX29wdGlvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ob3ZlclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uMjQgaW1nLXNob3dcIiBzcmM9e0ljb25TdG9ja1RvcH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvbjI0IGltZy1ob3ZlclwiIHNyYz17SWNvblN0b2NrVG9wfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWhvdmVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24yNCBpbWctc2hvd1wiIHNyYz17SWNvblNlYXJjaH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvbjI0IGltZy1ob3ZlclwiIHNyYz17SWNvblNlYXJjaH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ob3ZlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uMjQgaW1nLXNob3dcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3N0YXRpYy52ZWN0ZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDYvMDg2LzE5OC9vcmlnaW5hbC9ub3RpZmljYXRpb24taWNvbi1mb3Itd2ViLXZlY3Rvci5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbjI0IGltZy1ob3ZlclwiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAwNi8wODYvMTk4L29yaWdpbmFsL25vdGlmaWNhdGlvbi1pY29uLWZvci13ZWItdmVjdG9yLmpwZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWhvdmVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24yNCBpbWctc2hvd1wiIHNyYz17SWNvbk1vcmVNZW51fSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uMjQgaW1nLWhvdmVyXCIgc3JjPXtJY29uTW9yZU1lbnV9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9DaGF0QmFyU3R5bGVkPlxuICApO1xufVxuXG5jb25zdCBDaGF0QmFyU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZWNmMztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA5MXB4O1xuICBtYXgtaGVpZ2h0OiA5MXB4O1xuXG4gIC5jaGF0LS1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmX19vcHRpb25zIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9faW5mb3Ige1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAmX19ncm91cG5hbWUge1xuICAgICAgICAmX190b3Age1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm51bWJlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19ib3R0b20ge1xuICAgICAgICAgIC51c2VyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJhcjtcbiIsImltcG9ydCBDaGF0T3B0aW9ucyBmcm9tIFwiY29tcG9uZW50cy9DaGF0T3B0aW9uc1wiO1xuaW1wb3J0IFN0b2NrcyBmcm9tIFwiY29tcG9uZW50cy9TdG9ja3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBmb3JtYXRUaW1lQWdvIH0gZnJvbSBcInV0aWxzL3RpbWVcIjtcbmltcG9ydCB7IGlzRW1vamlzT25seSB9IGZyb20gXCJ1dGlscy9jb252ZXJ0U3RyaW5nXCI7XG5cbmludGVyZmFjZSBDaGF0TWVzc2FnZUxpc3RQcm9wcyB7XG4gIG1lc3NhZ2VzOiBhbnk7XG4gIGlubmVyUmVmOiBhbnk7XG59XG5cbmZ1bmN0aW9uIENoYXRNZXNzYWdlTGlzdCh7IG1lc3NhZ2VzID0gW10sIGlubmVyUmVmIH06IENoYXRNZXNzYWdlTGlzdFByb3BzKSB7XG4gIC8vIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX3Byb2ZpbGVcIikpO1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHsgYXV0aCB9KSA9PiBhdXRoLnVzZXIpO1xuICBjb25zdCBpc0F1dGhvck9mID0gKG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgIHJldHVybiBtZXNzYWdlPy5hdXRob3I/LnVpZCA9PT0gdXNlcj8udWlkID8gXCJjaGF0LXJpZ2h0XCIgOiBcImNoYXQtbGVmdFwiO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENoYXRNZXNzYWdlTGlzdFN0eWxlZCBjbGFzc05hbWU9XCJjaGF0LS1jb250YWluZXJcIj5cbiAgICAgIDx1bCByZWY9e2lubmVyUmVmfSBjbGFzc05hbWU9XCJjaGF0LWJveCBjaGF0Q29udGFpbmVyU2Nyb2xsXCI+XG4gICAgICAgIHttZXNzYWdlcz8ubWFwKChtZXNzYWdlOiBhbnksIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKG1lc3NhZ2U/LnN0b2Nrcykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc0F1dGhvck9mKG1lc3NhZ2UpfSBjaGF0LXN0b2Nrc2B9XG4gICAgICAgICAgICAgICAga2V5PXtgJHttZXNzYWdlPy5pZH0tJHtpZHh9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1hdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgIDxvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbjQwIGF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2BodHRwOi8vbW9hLmF2ZWFwcC5jb206MjE0MDUvZmlsZS9hcGkvZG93bl9wcm9jLmpzcD90eXBlPTEyJnVzZXJpZD0ke21lc3NhZ2U/LnN0b2Nrcz8udXNlci5wYXJhbXMudXNlcklkfSZyb29taWQ9JHttZXNzYWdlPy5zdG9ja3MudXNlcj8ucm9vbUlkfWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvMTQ3LzE0NzE0NC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbjQwIGF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L29iamVjdD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlPy5hdXRob3I/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaG91clwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRUaW1lQWdvKG1lc3NhZ2UudGltZXN0YW1wKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8U3RvY2tzIHN0b2Nrcz17bWVzc2FnZT8uc3RvY2tzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgbWVzc2FnZT8uZmlsZXMgJiZcbiAgICAgICAgICAgIFtcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9wbmdcIl0uaW5jbHVkZXMobWVzc2FnZT8uZmlsZVR5cGUpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzQXV0aG9yT2YobWVzc2FnZSl9IGNoYXQtaW1hZ2VzYH1cbiAgICAgICAgICAgICAgICBrZXk9e2Ake21lc3NhZ2U/LklEfS0ke2lkeH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgPG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uNDAgYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17YGh0dHA6Ly9tb2EuYXZlYXBwLmNvbToyMTQwNS9maWxlL2FwaS9kb3duX3Byb2MuanNwP3R5cGU9MTImdXNlcmlkPSR7bWVzc2FnZT8udXNlci5wYXJhbXMudXNlcklkfSZyb29taWQ9JHttZXNzYWdlPy51c2VyPy5yb29tSWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xNDcvMTQ3MTQ0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uNDAgYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvb2JqZWN0PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2U/LmF1dGhvci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhvdXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0VGltZUFnbyhtZXNzYWdlLnRpbWVzdGFtcCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1jaGF0XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtKU09OLnBhcnNlKG1lc3NhZ2U/LmZpbGVzKX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGh1bWJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIG1lc3NhZ2U/LmZpbGVzICYmXG4gICAgICAgICAgICBbXCJ2aWRlby9tcDRcIiwgXCJ2aWRlby9tcDNcIl0uaW5jbHVkZXMobWVzc2FnZT8uZmlsZVR5cGUpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzQXV0aG9yT2YobWVzc2FnZSl9IGNoYXQtaW1hZ2VzYH1cbiAgICAgICAgICAgICAgICBrZXk9e2Ake21lc3NhZ2U/LklEfS0ke2lkeH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgPG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uNDAgYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17YGh0dHA6Ly9tb2EuYXZlYXBwLmNvbToyMTQwNS9maWxlL2FwaS9kb3duX3Byb2MuanNwP3R5cGU9MTImdXNlcmlkPSR7bWVzc2FnZT8udXNlci5wYXJhbXMudXNlcklkfSZyb29taWQ9JHttZXNzYWdlPy51c2VyPy5yb29tSWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xNDcvMTQ3MTQ0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uNDAgYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvb2JqZWN0PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2U/LmF1dGhvci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhvdXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0VGltZUFnbyhtZXNzYWdlLnRpbWVzdGFtcCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzIwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjQwXCJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtKU09OLnBhcnNlKG1lc3NhZ2U/LmZpbGVzKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBtZXNzYWdlPy5maWxlcyAmJlxuICAgICAgICAgICAgW1wiYXBwbGljYXRpb24vcGRmXCJdLmluY2x1ZGVzKG1lc3NhZ2U/LmZpbGVUeXBlKVxuICAgICAgICAgICkge1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtpc0F1dGhvck9mKG1lc3NhZ2UpfSBrZXk9e2Ake21lc3NhZ2U/LmlkfS0ke2lkeH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICA8b2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb240MCBhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtgaHR0cDovL21vYS5hdmVhcHAuY29tOjIxNDA1L2ZpbGUvYXBpL2Rvd25fcHJvYy5qc3A/dHlwZT0xMiZ1c2VyaWQ9JHttZXNzYWdlPy51c2VyLnBhcmFtcy51c2VySWR9JnJvb21pZD0ke21lc3NhZ2U/LnJvb21JZH1gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzE0Ny8xNDcxNDQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb240MCBhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9vYmplY3Q+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlPy5hdXRob3IudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ob3VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRUaW1lQWdvKG1lc3NhZ2UudGltZXN0YW1wKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjaGF0LXRleHQtd3JhcHBlciAke1xuICAgICAgICAgICAgICAgICAgICBpc0Vtb2ppc09ubHkobWVzc2FnZT8uY29udGVudCkgPyBcImhhc0Vtb2pcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoYXQtdGV4dFwiPnttZXNzYWdlPy5jb250ZW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoYXQtc3BhY2VyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuXG4gICAgICAgIHsvKiBcbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJjaGF0LXJpZ2h0IGNoYXQtaW1hZ2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYXZhdGFyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cImh0dHA6Ly9maWxlLmhzdGF0aWMubmV0LzEwMDAxNTk5OTEvZmlsZS9kb3JlbW9uLW1pbl9kN2ZiYTdmN2Y2MGE0MWEwYWY2ZTY3ZGNhZWI3NTYzNF9ncmFuZGUuanBnXCJcbiAgICAgICAgICAgICAgYWx0PVwiUmV0YWlsIEFkbWluXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbjQwIGF2YXRhclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LW5hbWVcIj5cbiAgICAgICAgICAgICAgVXNlciAxIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ob3VyXCI+MjozMDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCJodHRwOi8vY2RuLnRnZGQudm4vRmlsZXMvMjAyMC8wOS8wMy8xMjg2NTc2L3RvcC0yNi10YXAtcGhpbS1ob2F0LWhpbmgtZG9yZW1vbi1kYWktaGF5LW5oYXQtY2hvLWJlLTIwMjIwNjA3MTE0ODQ4MzE2MC5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoYXQtdGV4dFwiPlxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgICAgICAgICAgUmVwZWxsZW5kdXMgZG9sb3J1bSBzaW50IHZpdGFlIHRlbmV0dXIgY29tbW9kaSBhbmltaSBpdGFxdWUgYmVhdGFlXG4gICAgICAgICAgICAgIGJsYW5kaXRpaXMgcXVpcyBhIG9mZmljaWlzIG1pbmltYSBxdWlkZW0gdm9sdXB0YXRlbSwgbmlzaVxuICAgICAgICAgICAgICBleGVyY2l0YXRpb25lbSBleHBsaWNhYm8gbGF1ZGFudGl1bSBsYWJvcmlvc2FtIGFzc3VtZW5kYS5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoYXQtc3BhY2VyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoYXQtaHJlZlwiPnd3dy5ldG5ld3MuY29tPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPiBcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXQtbGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1hdmF0YXJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cDovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDE1OTk5MS9maWxlL2RvcmVtb24tbWluX2Q3ZmJhN2Y3ZjYwYTQxYTBhZjZlNjdkY2FlYjc1NjM0X2dyYW5kZS5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJSZXRhaWwgQWRtaW5cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uNDAgYXZhdGFyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtbmFtZVwiPlxuICAgICAgICAgICAgICBVc2VyIDIgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhvdXJcIj4yOjMwPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGF0LXRleHRcIj5cbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG4gICAgICAgICAgICAgIFJlcGVsbGVuZHVzIGRvbG9ydW0gc2ludCB2aXRhZSB0ZW5ldHVyIGNvbW1vZGkgYW5pbWkgaXRhcXVlIGJlYXRhZVxuICAgICAgICAgICAgICBibGFuZGl0aWlzIHF1aXMgYSBvZmZpY2lpcyBtaW5pbWEgcXVpZGVtIHZvbHVwdGF0ZW0sIG5pc2lcbiAgICAgICAgICAgICAgZXhlcmNpdGF0aW9uZW0gZXhwbGljYWJvIGxhdWRhbnRpdW0gbGFib3Jpb3NhbSBhc3N1bWVuZGEuXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGF0LXNwYWNlclwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT4gKi99XG4gICAgICA8L3VsPlxuICAgIDwvQ2hhdE1lc3NhZ2VMaXN0U3R5bGVkPlxuICApO1xufVxuXG5jb25zdCBDaGF0TWVzc2FnZUxpc3RTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC8qIFRyYWNrICovXG4gIC8qIHdpZHRoICovXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogOHB4O1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIGxpLmNoYXQtcmlnaHQsXG4gIGxpLmNoYXQtbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcblxuICAgIC5jaGF0LWF2YXRhciB7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAuY2hhdC1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5jaGF0LXRleHQtd3JhcHBlciB7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAmLmhhc0Vtb2oge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAuY2hhdC10ZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNoYXQtaW1hZ2VzIHtcbiAgICAgIC5jaGF0LXRleHQtd3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGkge1xuICAgICYuY2hhdC1sZWZ0IHtcbiAgICAgICYuY2hhdC1zdG9ja3Mge1xuICAgICAgICAuY2hhdC10ZXh0LXdyYXBwZXIge1xuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQyMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5jaGF0LXJpZ2h0IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICYuY2hhdC1zdG9ja3Mge1xuICAgICAgICBoNCB7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXQtdGV4dC13cmFwcGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MjBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmNoYXQtaW1hZ2Uge1xuICAgICAgICBpbWc6bm90KC5pY29uNDApIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGF0LXRleHQtd3JhcHBlciB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxNSU7XG4gICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgIC5jaGF0LXRleHQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhdC1ocmVmIHtcbiAgICAgICAgICBjb2xvcjogI2UyZTJlMjtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogaG92ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJiA+IC5jaGF0LWF2YXRhciB7XG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgIH1cblxuICAgICAgJiA+IC5jaGF0LXRleHQtd3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODY5ZWY7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGF0LWF2YXRhciB7XG4gICAgICAvLyAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAuY2hhdC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5jaGF0LXRleHQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1heC13aWR0aDogNTUlO1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuXG4gICAgLmNoYXQtc3BhY2VyIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5jaGF0LWhvdXIge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgICBsaSB7XG4gICAgICAmLmNoYXQtcmlnaHQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgICYuY2hhdC1pbWFnZSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIC5jaGF0LXRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAgIC5jaGF0LXRleHQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0TWVzc2FnZUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJ1dGlscy9zdHlsZWQtY29tcG9uZW50XCI7XG5pbXBvcnQgSWNvblRyYXNoIGZyb20gXCJhc3NldHMvaW1hZ2VzL2NoYXQvdHJhc2gucG5nXCI7XG5pbXBvcnQgSWNvblNwZWFrZXIgZnJvbSBcImFzc2V0cy9pbWFnZXMvY2hhdC9zcGVha2VyLnBuZ1wiO1xuaW1wb3J0IEljb25CcmluZyBmcm9tIFwiYXNzZXRzL2ltYWdlcy9jaGF0L2JyaW5nLnBuZ1wiO1xuaW1wb3J0IEljb25NaWMgZnJvbSBcImFzc2V0cy9pbWFnZXMvY2hhdC9taWMucG5nXCI7XG5pbXBvcnQgSWNvbkVkaXQgZnJvbSBcImFzc2V0cy9pbWFnZXMvY2hhdC9lZGl0Mi5wbmdcIjtcbmltcG9ydCBJY29uU3RvY2sgZnJvbSBcImFzc2V0cy9pbWFnZXMvY2hhdC9zdG9jay5wbmdcIjtcbmltcG9ydCBDcmVhdGVTdG9jayBmcm9tIFwiY29tcG9uZW50cy9DcmVhdGVTdG9ja1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IGNyZWF0ZVRpbWVzdGFtcCB9IGZyb20gXCJ1dGlscy90aW1lXCI7XG5cbmludGVyZmFjZSBDaGF0T3B0aW9ucyB7XG4gIHN1Ym1pdFN0b2NrOiAoZGF0YTogYW55KSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBDaGF0T3B0aW9ucyh7IHN1Ym1pdFN0b2NrIH06IENoYXRPcHRpb25zKSB7XG4gIGNvbnN0IFtpc09wZW5TdG9jaywgc2V0SXNPcGVuU3RvY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBfbWVzc2FnZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX21lc3NhZ2VzXCIpKTtcbiAgbGV0IG15dXVpZCA9IHV1aWR2NCgpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIGxldCBuZXdNZXNzYWdlID0ge1xuICAgICAgY29udGVudDogXCJcIixcbiAgICAgIGlkTWVzc2FnZTogbXl1dWlkLFxuICAgICAgdXNlcjogZGF0YT8udXNlcixcbiAgICAgIHN0b2NrczogZGF0YSxcbiAgICAgIHRpbWVzdGFtcDogY3JlYXRlVGltZXN0YW1wKCksXG4gICAgfTtcblxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX21lc3NhZ2VzXCIsIEpTT04uc3RyaW5naWZ5KG5ld01lc3NhZ2UpKTtcbiAgICBzdWJtaXRTdG9jayhuZXdNZXNzYWdlKTtcbiAgICBzZXRJc09wZW5TdG9jayhmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhdE9wdGlvbnNTdHlsZWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtLW9wdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LS1vcHRpb25zX19sZWZ0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4taG92ZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvbjI0IGltZy1zaG93XCIgc3JjPXtJY29uVHJhc2h9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24yNCBpbWctaG92ZXJcIiBzcmM9e0ljb25UcmFzaH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ob3ZlclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uMjQgaW1nLXNob3dcIiBzcmM9e0ljb25TcGVha2VyfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uMjQgaW1nLWhvdmVyXCIgc3JjPXtJY29uU3BlYWtlcn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ob3ZlclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uMjQgaW1nLXNob3dcIiBzcmM9e0ljb25CcmluZ30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvbjI0IGltZy1ob3ZlclwiIHNyYz17SWNvbkJyaW5nfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWhvdmVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24yNCBpbWctc2hvd1wiIHNyYz17SWNvbk1pY30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvbjI0IGltZy1ob3ZlclwiIHNyYz17SWNvbk1pY30gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC0tb3B0aW9uc19fcmlnaHRcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ob3ZlclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uMjQgaW1nLXNob3dcIiBzcmM9e0ljb25FZGl0fSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uMjQgaW1nLWhvdmVyXCIgc3JjPXtJY29uRWRpdH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b2NrLW9wdGlvblwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4taG92ZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW5TdG9jayghaXNPcGVuU3RvY2spfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24yNCBpbWctc2hvd1wiIHNyYz17SWNvblN0b2NrfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24yNCBpbWctaG92ZXJcIiBzcmM9e0ljb25TdG9ja30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAge2lzT3BlblN0b2NrID8gKFxuICAgICAgICAgICAgICA8Q3JlYXRlU3RvY2sgc3VibWl0Rm9ybT17b25TdWJtaXR9IGNsb3NlRnVuYz17c2V0SXNPcGVuU3RvY2t9IC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NoYXRPcHRpb25zU3R5bGVkPlxuICApO1xufVxuXG5jb25zdCBDaGF0T3B0aW9uc1N0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIC5zdG9jay1vcHRpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jaGF0LS1vcHRpb25zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgfVxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgJl9fcmlnaHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGRlZmF1bHQgQ2hhdE9wdGlvbnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwidXRpbHMvc3R5bGVkLWNvbXBvbmVudFwiO1xuaW1wb3J0IEljb25DbG9zZUdyZXkgZnJvbSBcImFzc2V0cy9pbWFnZXMvY2hhdC9jbG9zZS1ncmV5LnBuZ1wiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0hlYWRlci9CdXR0b25cIjtcblxuaW50ZXJmYWNlIENyZWF0ZVN0b2NrUHJvcHMge1xuICBzdWJtaXRGb3JtOiAoZGF0YTogYW55KSA9PiB2b2lkO1xuICBjbG9zZUZ1bmM6IChzdGF0ZTogYm9vbGVhbikgPT4gdm9pZDtcbn1cbmZ1bmN0aW9uIENyZWF0ZVN0b2NrKHsgY2xvc2VGdW5jLCBzdWJtaXRGb3JtIH06IENyZWF0ZVN0b2NrUHJvcHMpIHtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XG4gIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX3Byb2ZpbGVcIikpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIGRhdGEudXNlciA9IHVzZXI7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBzdWJtaXRGb3JtKGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENyZWF0ZVN0b2NrU3R5bGVkIGNsYXNzTmFtZT1cImNyZWF0ZS0tc3RvY2tcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLS1zdG9ja19faGVhZGluZ1wiPlxuICAgICAgICA8aDM+7Iuc6re464SQPC9oMz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4taG92ZXJcIiBvbkNsaWNrPXsoKSA9PiBjbG9zZUZ1bmMoZmFsc2UpfT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24yNCBpbWctc2hvd1wiIHNyYz17SWNvbkNsb3NlR3JleX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24yNCBpbWctaG92ZXJcIiBzcmM9e0ljb25DbG9zZUdyZXl9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwic3RvY2tzLS1ib3hfX2Zvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLS1pbnB1dHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tLWlucHV0c19faW5wdXRcIj5cbiAgICAgICAgICAgIDxzcGFuPuyiheuqqeuqhTwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoXCJuYW1lXCIpfSB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLS1pbnB1dHNfX2lucHV0XCI+XG4gICAgICAgICAgICA8c3Bhbj7rp6TsiJjqsIA8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKFwicHJpY2VCdXlcIil9IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tLWlucHV0c19faW5wdXRcIj5cbiAgICAgICAgICAgIDxzcGFuPuunpOuPhOqwgDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoXCJwcmljZVNlbGxcIil9IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tLWlucHV0c19faW5wdXRcIj5cbiAgICAgICAgICAgIDxzcGFuPuyGkOygiOqwgDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoXCJwcmljZUN1dG9mZlwiKX0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1vcHRpb25zXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBuYW1lPVwi7KCE7IahXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1zdWJtaXRcIlxuICAgICAgICAgICAgaW5wdXRDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIOyghOyGoVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgbmFtZT1cIuy3qOyGjFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tY2FuY2VsXCJcbiAgICAgICAgICAgIGlucHV0Q29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VGdW5jKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDst6jshoxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9DcmVhdGVTdG9ja1N0eWxlZD5cbiAgKTtcbn1cblxuY29uc3QgQ3JlYXRlU3RvY2tTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UyZTJlMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWluLXdpZHRoOiAzNjBweDtcblxuICAuc3RvY2tzLS1ib3hfX2Zvcm0ge1xuICAgIC5mb3JtLS1pbnB1dHMge1xuICAgICAgJl9faW5wdXQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZTJlMmUyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWluLXdpZHRoOiAyNDBweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jcmVhdGUtLXN0b2NrX19oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cblxuICAuYnRuLW9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmJ0bi1jYW5jZWwge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTdG9jaztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgSWNvbkZpbGVHcmV5IGZyb20gXCJhc3NldHMvaW1hZ2VzL2NoYXQvc2VuZF9maWxlX2dyZXkucG5nXCI7XG5pbXBvcnQgSWNvbkZpbGVIb3ZlciBmcm9tIFwiYXNzZXRzL2ltYWdlcy9jaGF0L3NlbmRfZmlsZV9ibHVlLnBuZ1wiO1xuaW1wb3J0IEljb25TY3JlZW5TaG90R3JleSBmcm9tIFwiYXNzZXRzL2ltYWdlcy9jaGF0L3NjcmVlbnNob3RfZ3JleS5wbmdcIjtcbmltcG9ydCBJY29uU2NyZWVuU2hvdEhvdmVyIGZyb20gXCJhc3NldHMvaW1hZ2VzL2NoYXQvc2NyZWVuc2hvdF9ob3Zlci5wbmdcIjtcbmltcG9ydCBJY29uQ2hhdEdyZXkgZnJvbSBcImFzc2V0cy9pbWFnZXMvY2hhdC9jaGF0X2VudGVyX2dyZXkucG5nXCI7XG5pbXBvcnQgSWNvbkNoYXRCbHVlIGZyb20gXCJhc3NldHMvaW1hZ2VzL2NoYXQvY2hhdF9lbnRlcl9ibHVlLnBuZ1wiO1xuaW1wb3J0IEVtb2ppUGlja2VyLCB7XG4gIEVtb2ppU3R5bGUsXG4gIFNraW5Ub25lcyxcbiAgVGhlbWUsXG4gIENhdGVnb3JpZXMsXG4gIEVtb2ppQ2xpY2tEYXRhLFxuICBFbW9qaSxcbiAgU3VnZ2VzdGlvbk1vZGUsXG4gIFNraW5Ub25lUGlja2VyTG9jYXRpb24sXG59IGZyb20gXCJlbW9qaS1waWNrZXItcmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBmZXRjaFVSTCB9IGZyb20gXCJ1dGlscy9jb252ZXJVUkxUb0NvbnRlbnRcIjtcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tIFwiaHRtbDJjYW52YXNcIjtcbmltcG9ydCAqIGFzIGh0bWxUb0ltYWdlIGZyb20gXCJodG1sLXRvLWltYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVUaW1lc3RhbXAgfSBmcm9tIFwidXRpbHMvdGltZVwiO1xuXG5pbnRlcmZhY2UgTWVzc2FuZ2VyUHJvcHMge1xuICBvblN1Ym1pdDogKG1lc3NhZ2U6IGFueSkgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gTWVzc2FuZ2VyKHsgb25TdWJtaXQgfTogTWVzc2FuZ2VyUHJvcHMpIHtcbiAgY29uc3QgW3NlbGVjdGVkSW1hZ2UsIHNldFNlbGVjdGVkSW1hZ2VdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxhbnk+KFwiXCIpO1xuICBjb25zdCBbaXNPcGVuRW1vaiwgc2V0SXNPcGVuRW1val0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IF9tZXNzYWdlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfbWVzc2FnZXNcIikpO1xuICBjb25zdCB0ZXh0YXJlYVJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xuICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9wcm9maWxlXCIpKTtcblxuICBsZXQgbXl1dWlkID0gdXVpZHY0KCk7XG5cbiAgLyoqXG4gICAqIENob29zZSBFbW9qaVxuICAgKiBAcGFyYW0gZW1vamlEYXRhXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgY29uc3Qgb25DbGljayA9IChlbW9qaURhdGE6IEVtb2ppQ2xpY2tEYXRhLCBldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHRleHRBcmVhRWxlbWVudDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LWFyZWFcIik7XG4gICAgc2V0VmFsdWUoXG4gICAgICB2YWx1ZS5zdWJzdHIoMCwgdGV4dEFyZWFFbGVtZW50LnNlbGVjdGlvblN0YXJ0KSArXG4gICAgICAgIGVtb2ppRGF0YS5lbW9qaSArXG4gICAgICAgIHZhbHVlLnN1YnN0cih0ZXh0QXJlYUVsZW1lbnQuc2VsZWN0aW9uRW5kKVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqICBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGZpbGUgZmllbGQgY2hhbmdlXG4gICAqICovXG4gIGNvbnN0IGltYWdlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICBzZXRTZWxlY3RlZEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgIGNvbnN0IGltYWdlID0gZS50YXJnZXQuZmlsZXNbMF07XG5cbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlKTtcblxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IG5ld01lc3NhZ2UgPSB7XG4gICAgICAgICAgY29udGVudDogYCR7ZS50YXJnZXQuZmlsZXNbMF0udHlwZX1gLFxuICAgICAgICAgIGZpbGVzOiBKU09OLnN0cmluZ2lmeShyZWFkZXI/LnJlc3VsdCksXG4gICAgICAgICAgaWRNZXNzYWdlOiBteXV1aWQsXG4gICAgICAgICAgdXNlcixcbiAgICAgICAgICB0aW1lc3RhbXA6IGNyZWF0ZVRpbWVzdGFtcCgpLFxuICAgICAgICAgIGZpbGVUeXBlOiBlLnRhcmdldC5maWxlc1swXS50eXBlLFxuICAgICAgICB9O1xuXG4gICAgICAgIG9uU3VibWl0KG5ld01lc3NhZ2UpO1xuXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX21lc3NhZ2VzXCIsIEpTT04uc3RyaW5naWZ5KG5ld01lc3NhZ2UpKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBrZXkgcHJlc3MgJ0VudGVyJ1xuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgY29uc3Qgb25LZXlQcmVzcyA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2VuZE1lc3NhZ2UoKTtcbiAgICAgIHNldFZhbHVlKFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVyID0gKGlucHV0QmxvYjogYW55KSA9PiB7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpbnB1dEJsb2IpO1xuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgLy8gQ3JlYXRlcyBVUkwgdG8gdGhlIGltYWdlIEJsb2IgaW4gbWVtb3J5XG5cbiAgICAvLyBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgLy8gYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHVybCk7XG4gICAgLy8gYS5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcImZldGNoZWQtaW1hZ2UuanBlZ1wiKTtcbiAgICAvLyAvLyBDcmVhdGUgYSBkb3dubG9hZCBsaW5rIGluIEhUTUxcblxuICAgIC8vIGEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgICAvLyBhLmNsaWNrKCk7IC8vIFNpbXVsYXRlcyBjbGlja1xuXG4gICAgLy8gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgICAvLyBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgLy8gUmVtb3ZlcyBkb3dubG9hZCBsaW5rIGFuZCBpbWFnZSBVUkwgYW5kIGltYWdlIGZyb20gbWVtb3J5XG4gIH07XG5cbiAgLy8gY29uc3QgVVJMdG9GaWxlID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgLy8gICBjb25zdCBibG9iID0gYXdhaXQgcmVzLmJsb2IoKTtcbiAgLy8gICAvLyBHZXRzIFVSTCBkYXRhIGFuZCByZWFkIHRvIGJsb2JcblxuICAvLyAgIGNvbnN0IG1pbWUgPSBibG9iLnR5cGU7XG4gIC8vICAgY29uc3QgZXh0ID0gbWltZS5zbGljZShtaW1lLmxhc3RJbmRleE9mKFwiL1wiKSArIDEsIG1pbWUubGVuZ3RoKTtcbiAgLy8gICAvLyBHZXRzIGJsb2IgTUlNRSB0eXBlIChlLmcuIGltYWdlL3BuZykgYW5kIGV4dHJhY3RzIGV4dGVuc2lvblxuXG4gIC8vICAgY29uc3QgZmlsZTogYW55ID0gbmV3IEZpbGUoW2Jsb2JdLCBgZmlsZW5hbWUuJHtleHR9YCwge1xuICAvLyAgICAgdHlwZTogXCJpbWFnZS9qcGVnXCIsXG4gIC8vICAgfSk7XG4gIC8vICAgLy8gQ3JlYXRlcyBuZXcgRmlsZSBvYmplY3QgdXNpbmcgYmxvYiBkYXRhLCBleHRlbnNpb24gYW5kIE1JTUUgdHlwZVxuXG4gIC8vICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKGZpbGUpXG4gIC8vICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG5cbiAgLy8gICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAvLyAgICAgbGV0IG5ld01lc3NhZ2UgPSB7XG4gIC8vICAgICAgIGNvbnRlbnQ6IFwiaW1hZ2VcIixcbiAgLy8gICAgICAgaW1hZ2VzOiBKU09OLnN0cmluZ2lmeShyZWFkZXI/LnJlc3VsdCksXG4gIC8vICAgICAgIGlkTWVzc2FnZTogbXl1dWlkLFxuICAvLyAgICAgICB1c2VyLFxuICAvLyAgICAgfTtcblxuICAvLyAgICAgY29uc3QgcHJldk1lc3NhZ2UgPSBfbWVzc2FnZXMgfHwgW107XG4gIC8vICAgICBjb25zdCBuZXdNZXNzYWdlcyA9IFsuLi5wcmV2TWVzc2FnZSwgeyAuLi5uZXdNZXNzYWdlIH1dO1xuXG4gIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl9tZXNzYWdlc1wiLCBKU09OLnN0cmluZ2lmeShuZXdNZXNzYWdlcykpO1xuXG4gIC8vICAgICBodG1sMmNhbnZhcyhmaWxlKS50aGVuKChjYW52YXMpID0+IHtcbiAgLy8gICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfTtcblxuICAvLyAgIC8vIGNvbnNvbGUubG9nKGZpbGUpO1xuICAvLyB9O1xuXG4gIC8vIGNvbnN0IGZ1bmNSZXF1ZXN0ID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gIC8vICAgYXdhaXQgZmV0Y2godXJsKVxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKHsgcmVzcG9uc2UgfSk7XG4gIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAvLyAgICAgICAvLyAgIHJlc3BvbnNlLnRleHQoKS50aGVuKChfKSA9PiB7XG4gIC8vICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhfKTtcbiAgLy8gICAgICAgLy8gICAgIC8vIGhhbmRsZXIoXyk7XG4gIC8vICAgICAgIC8vICAgfSlcbiAgLy8gICAgICAgLy8gKTtcbiAgLy8gICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgLy8gZGF0YSBpbnRvIGpzb25cbiAgLy8gICAgIH0pXG4gIC8vICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICAgICAgLy8gSGVyZSB3ZSBjYW4gdXNlIHRoZSByZXNwb25zZSBEYXRhXG4gIC8vICAgICB9KVxuICAvLyAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIC8vICAgICB9KTtcbiAgLy8gfTtcbiAgLyoqXG4gICAqIFN1Ym1pdCBmb3JtIGRhdGFcbiAgICogQHJldHVybnNcbiAgICovXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcbiAgICBjb25zdCBtZXNzYWdlczogYW55ID0ge1xuICAgICAgaWRNZXNzYWdlOiBteXV1aWQsXG4gICAgICBjb250ZW50OiB2YWx1ZS50cmltKCksXG4gICAgICB1c2VyLFxuICAgICAgdGltZXN0YW1wOiBjcmVhdGVUaW1lc3RhbXAoKSxcbiAgICB9O1xuICAgIG9uU3VibWl0KG1lc3NhZ2VzKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2FwdHVyZVxuICAgKi9cbiAgY29uc3QgY2FwdHVyZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhcHR1cmVTdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldERpc3BsYXlNZWRpYSgpO1xuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gY2FwdHVyZVN0cmVhbTtcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgIGNvbnN0IGZyYW1lID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICAgIGNhcHR1cmVTdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCgodHJhY2spID0+IHRyYWNrLnN0b3AoKSk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZyYW1lO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiBcIiArIGVycik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBhdXRvIGhlaWdodCBvZiBUZXh0YXJlYVxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0ZXh0YXJlYVJlZi5jdXJyZW50LnN0eWxlLmhlaWdodCA9IFwiMHB4XCI7XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGV4dGFyZWFSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQ7XG4gICAgdGV4dGFyZWFSZWYuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBzY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH0sIFt2YWx1ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPE1lc3NhbmdlclN0eWxlZCBjbGFzc05hbWU9XCJjaGF0LWlucHV0IGZvcm0tZ3JvdXAgbXQtMyBtYi0wXCI+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgaWQ9XCJ0ZXh0LWFyZWFcIlxuICAgICAgICByZWY9e3RleHRhcmVhUmVmfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25LZXlQcmVzcz17b25LZXlQcmVzc31cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlIGhlcmUuLi5cIlxuICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaW5wdXRfX29wdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWlucHV0X19vcHRpb25zX19sZWZ0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4taG92ZXIgbXItM1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImZpbGVVcGxvYWRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uMjQgaW1nLXNob3dcIiBzcmM9e0ljb25GaWxlR3JleX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24yNCBpbWctaG92ZXJcIiBzcmM9e0ljb25GaWxlSG92ZXJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGUtaW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZmlsZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtpbWFnZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWhvdmVyXCIgb25DbGljaz17Y2FwdHVyZX0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24yNCBpbWctc2hvd1wiIHNyYz17SWNvblNjcmVlblNob3RHcmV5fSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uMjQgaW1nLWhvdmVyXCJcbiAgICAgICAgICAgICAgc3JjPXtJY29uU2NyZWVuU2hvdEhvdmVyfVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTMgY2hhdC0tZW1valwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4taG92ZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW5FbW9qKCFpc09wZW5FbW9qKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24yNCBpbWctc2hvd1wiXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvMTUwMC8xNTAwNDU4LnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24yNCBpbWctaG92ZXJcIlxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzE1MDAvMTUwMDQ1OC5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LS1lbW9qX19kaXNwbGF5XCI+XG4gICAgICAgICAgICAgIHtpc09wZW5FbW9qICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEVtb2ppUGlja2VyIG9uRW1vamlDbGljaz17b25DbGlja30gYXV0b0ZvY3VzU2VhcmNoPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW5FbW9qKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWlucHV0X19vcHRpb25zX19yaWdodFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1ob3ZlcmVlIGJ0bi1jaGF0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgc2V0VmFsdWUoXCJcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2YWx1ZT8ubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uMjQgaW1nLWhvdmVyXCIgc3JjPXtJY29uQ2hhdEJsdWV9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24yNCBpbWctc2hvd1wiIHNyYz17SWNvbkNoYXRHcmV5fSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L01lc3NhbmdlclN0eWxlZD5cbiAgKTtcbn1cblxuY29uc3QgTWVzc2FuZ2VyU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgbWF4LXdpZHRoOiA5NyU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICNlMmUyZTI7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmNoYXQtaW5wdXRfX29wdGlvbnMge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAmX19sZWZ0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UyZTJlMjtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAjZmlsZVVwbG9hZCA+IGxhYmVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICNmaWxlVXBsb2FkID4gLmZpbGUtaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY2hhdC0tZW1vaiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmX19kaXNwbGF5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMzJweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAwO1xuXG4gICAgICAuRW1vamlQaWNrZXJSZWFjdCB7XG4gICAgICAgIHotaW5kZXg6IDk7XG4gICAgICB9XG5cbiAgICAgIC5sYXllciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnRuLWhvdmVyIHtcbiAgICAmLmJ0bi1jaGF0IHtcbiAgICAgIC5pbWctaG92ZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYW5nZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ2hhdDEgZnJvbSBcImFzc2V0cy9pbWFnZXMvaWNvbi9jaGF0LnBuZ1wiO1xuaW1wb3J0IENoYXQyIGZyb20gXCJhc3NldHMvaW1hZ2VzL2ljb24vY2hhdDIucG5nXCI7XG5pbXBvcnQgUGVyc29uIGZyb20gXCJhc3NldHMvaW1hZ2VzL2ljb24vcGVyc29uLnBuZ1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCJhc3NldHMvaW1hZ2VzL2ljb24vc2V0dGluZ3MucG5nXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiYXNzZXRzL2ltYWdlcy9pY29uL2hvbWUucG5nXCI7XG5cbmludGVyZmFjZSBOYXZiYXJQcm9wcyB7XG4gIHZpZXc6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxOYXZiYXJTdHlsZWQgY2xhc3NOYW1lPVwibmF2YmFyLWxlZnRcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtIb21lfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2NoYW5uZWxcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtDaGF0Mn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayB0bz1cIi9ob21lXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17Q2hhdDF9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgdG89XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e1BlcnNvbn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayB0bz1cIi9zZXR0aW5nc1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xMjYvMTI2NDcyLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9OYXZiYXJTdHlsZWQ+XG4gICk7XG59XG5cbmNvbnN0IE5hdmJhclN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1pbi13aWR0aDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTZlY2YzO1xuXG4gIHVsIHtcbiAgICBsaSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgICAgbWF4LWhlaWdodDogODBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ2hhbm5lbCwgZ2V0Q2hhbm5lbExpc3QsIGpvaW5DaGFubmVsIH0gZnJvbSBcImFjdGlvbnMvY2hhbm5lbFwiO1xuaW1wb3J0IENhcmRDaGFubmVsIGZyb20gXCJjb21wb25lbnRzL0NhcmRDaGFubmVsXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwidXRpbHMvc3R5bGVkLWNvbXBvbmVudFwiO1xuXG5pbnRlcmZhY2UgTmV3Q2hhbm5lbHNQcm9wcyB7XG4gIGF2YWlsYWJsZUNoYW5uZWxzOiBhbnk7XG4gIGpvaW5lZENoYW5uZWxzOiBhbnk7XG4gIGNoYW5uZWxzOiBhbnk7XG59XG5cbmZ1bmN0aW9uIE5ld0NoYW5uZWxzKHtcbiAgYXZhaWxhYmxlQ2hhbm5lbHMsXG4gIGpvaW5lZENoYW5uZWxzLFxuICBjaGFubmVscyxcbn06IE5ld0NoYW5uZWxzUHJvcHMpIHtcbiAgY29uc3QgW2lzR29DaGFubmVsLCBzZXRJc0dvQ2hhbm5lbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBkaXNwYXRjaDogYW55ID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKCh7IGF1dGggfSkgPT4gYXV0aC51c2VyKTtcblxuICBsZXQgaWRzID0gbmV3IFNldChqb2luZWRDaGFubmVscy5tYXAoKHsgcm9vbUlkIH06IGFueSkgPT4gcm9vbUlkKSk7XG4gIGxldCBpZHNDaGFubmVscyA9IG5ldyBTZXQoXG4gICAgYXZhaWxhYmxlQ2hhbm5lbHM/Lm1hcCgoeyByb29tSWQgfTogYW55KSA9PiByb29tSWQpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXZhaWxhYmxlQ2hhdHNTdHlsZWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJsZXMgY29udGFpbmVyLWZsdWlkIG10LTNcIj5cbiAgICAgICAge2ZhbHNlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJsZXMtLW51bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPk5vIGNoYW5uZWxzIHRvIGpvaW4gOig8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJsZS0tY3JlYXRlZCBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItM1wiPkNoYW5uZWxzIEF2YWlsYWJsZTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIHthdmFpbGFibGVDaGFubmVscz8ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICBhdmFpbGFibGVDaGFubmVscy5tYXAoKGNoYW5uZWw6IGFueSwgaWR4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJsZSBtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENoYW5uZWxcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbD17Y2hhbm5lbH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtjaGFubmVsPy5yb29tX25hbWV9LSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzR29DaGFubmVsKFwiSk9JTl9DSEFOTkVMXCIpfVxuICAgICAgICAgICAgICAgICAgICBpc0dvQ2hhbm5lbD1cIkpPSU5fQ0hBTk5FTFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmFpbGFibGUtLWV4aXN0c1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0zXCI+Q2hhbm5lbHMgRXhpc3RzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAge2NoYW5uZWxzPy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgIGNoYW5uZWxzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoeyByb29tSWQgfTogYW55KSA9PiAhaWRzQ2hhbm5lbHMuaGFzKHJvb21JZCkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoeyByb29tSWQgfTogYW55KSA9PiAhaWRzLmhhcyhyb29tSWQpKVxuXG4gICAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIChjaGFubmVsOiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgIChjaGFubmVsPy5yb29tX3R5cGUgPT09IFwiMlwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbD8ucm9vbV90eXBlID09PSBcIjNcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbD8ub3duc2VySWQgIT09IHVzZXIudWlkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5tYXAoKGNoYW5uZWw6IGFueSwgaWR4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXZhaWxhYmxlIG1iLTRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0dvQ2hhbm5lbChcIkNSRUFURV9DSEFOTkVMXCIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENoYW5uZWxcbiAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsPXtjaGFubmVsfVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y2hhbm5lbD8ucm9vbV9uYW1lfS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxuICAgICAgICAgICAgICAgICAgICAgIGlzR29DaGFubmVsPVwiQ1JFQVRFX0NIQU5ORUxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9BdmFpbGFibGVDaGF0c1N0eWxlZD5cbiAgKTtcbn1cblxuY29uc3QgQXZhaWxhYmxlQ2hhdHNTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcblxuICAuYXZhaWxhYmxlcyB7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAuYXZhaWxhYmxlIHtcbiAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgfVxuXG4gICAgLmF2YWlsYWJsZS0tY3JlYXRlZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hdmFpbGFibGUtLWV4aXN0cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBkZWZhdWx0IE5ld0NoYW5uZWxzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9Mb2FkZXIuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaGFzZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaGFzZS1kb3RcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2hhc2UtZG90XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNoYXNlLWRvdFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaGFzZS1kb3RcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2hhc2UtZG90XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNoYXNlLWRvdFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9Mb2FkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZ1ZpZXcoeyBtZXNzYWdlID0gXCJqdXN0IG9uZSBtb21lbnQgcGxlYXNlLi4uXCIgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy12aWV3XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy12aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPnttZXNzYWdlfTwvZGl2PlxuICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJ1dGlscy9zdHlsZWQtY29tcG9uZW50XCI7XG5pbXBvcnQgSWNvblN0b2NrQmx1ZSBmcm9tIFwiYXNzZXRzL2ltYWdlcy9jaGF0L3N0b2NrLWJsdWUucG5nXCI7XG5pbXBvcnQgeyBjdXJyZW5jeUZvcm1hdCB9IGZyb20gXCJob29rcy91c2VGb3JtYXROdW1iZXJcIjtcbmludGVyZmFjZSBTdG9ja3Mge1xuICBzdG9ja3M6IGFueTtcbn1cblxuZnVuY3Rpb24gU3RvY2tzKHsgc3RvY2tzIH06IFN0b2Nrcykge1xuICByZXR1cm4gKFxuICAgIDxTdG9ja3NTdHlsZWQ+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ob3ZlclwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24yNCBpbWctc2hvd1wiIHNyYz17SWNvblN0b2NrQmx1ZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uMjQgaW1nLWhvdmVyXCIgc3JjPXtJY29uU3RvY2tCbHVlfSBhbHQ9XCJcIiAvPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvY2tzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvY2tzLS10b3BcIj5cbiAgICAgICAgICA8aDQ+e3N0b2Nrcz8ubmFtZX08L2g0PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLW9yZGVyXCI+7KO866y4PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b2Nrcy0tbWlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xzIHByaWNlLWJ1eVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj7rp6TsiJjqsIA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIHtjdXJyZW5jeUZvcm1hdChOdW1iZXIoc3RvY2tzPy5wcmljZUJ1eSkpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29scyBwcmljZS10YXJnZXRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+66qp7ZGc6rCAPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj5cbiAgICAgICAgICAgICAge2N1cnJlbmN5Rm9ybWF0KE51bWJlcihzdG9ja3M/LnByaWNlU2VsbCkpfXtcIiBcIn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHMgcHJpY2UtY3V0b2ZmXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPuyGkOygiOqwgDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+XG4gICAgICAgICAgICAgIHtjdXJyZW5jeUZvcm1hdChOdW1iZXIoc3RvY2tzPy5wcmljZUN1dG9mZikpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9ja3MtLWJvdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvY2tzLS1ib3RfX3VzZXJcIj5cbiAgICAgICAgICAgIDxvYmplY3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbjI0IGF2YXRhclwiXG4gICAgICAgICAgICAgIGRhdGE9e2BodHRwOi8vbW9hLmF2ZWFwcC5jb206MjE0MDUvZmlsZS9hcGkvZG93bl9wcm9jLmpzcD90eXBlPTEyJnVzZXJpZD0ke3N0b2Nrcz8udXNlci5wYXJhbXMudXNlcklkfSZyb29taWQ9JHtzdG9ja3M/LnVzZXIucGFyYW1zLnJvb21JZH1gfVxuICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzE0Ny8xNDcxNDQucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24yNCBhdmF0YXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9vYmplY3Q+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdG9ja3MtLWJvdF9fdXNlcl9fcG9zaXRpb25cIj7rsKnsnqU8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdG9ja3MtLWJvdF9fdXNlcl9fbmFtZVwiPntzdG9ja3M/LnVzZXIucGFyYW1zLnVzZXJOYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b2Nrcy0tYm90X190aW1lXCI+XG4gICAgICAgICAgICA8c3Bhbj7rsKnsnqUgMjozMDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0b2Nrc1N0eWxlZD5cbiAgKTtcbn1cblxuY29uc3QgU3RvY2tzU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5idG4taG92ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xM3B4O1xuICAgIHJpZ2h0OiAtMTFweDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLnN0b2NrcyB7XG4gICAgJi0tdG9wIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5idG4tb3JkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgcGFkZGluZzogM3B4IDE2cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi0tbWlkIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcblxuICAgICAgLmNvbHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ib3Qge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAmX191c2VyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAmX19uYW1lIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IC03cHg7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZfX3RpbWUge1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgU3RvY2tzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW50ZXJmYWNlIFRpdGxlUHJvcHMge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIFRpdGxlKHsgbmFtZSB9OiBUaXRsZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFRpdGxlU3R5bGVkPlxuICAgICAgPHA+e25hbWV9PC9wPlxuICAgIDwvVGl0bGVTdHlsZWQ+XG4gICk7XG59XG5cbmNvbnN0IFRpdGxlU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZWNmMztcbiAgbWF4LWhlaWdodDogOTFweDtcbiAgbWluLWhlaWdodDogOTFweDtcbiAgbGluZS1oZWlnaHQ6IDkxcHg7XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlc3BvbnNpdmUgfSBmcm9tIFwiYXNzZXRzL3Njc3MvbWl4aW5cIjtcblxuaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJ1dGlscy9zdHlsZWQtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDT0xPUlMgfSBmcm9tIFwiY29uc3RhbnRzL2NvbG9yc1wiO1xuXG50eXBlIEJ1dHRvblR5cGUgPSB7XG4gIG5hbWU6IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcbiAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50PiB8IHVuZGVmaW5lZDtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBpbnB1dENvbG9yOiBzdHJpbmc7XG4gIHR5cGU/OiBcImJ1dHRvblwiIHwgXCJzdWJtaXRcIiB8IFwicmVzZXRcIiB8IHVuZGVmaW5lZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufTtcblxuY29uc3QgQnV0dG9uOiBGQzxCdXR0b25UeXBlPiA9ICh7XG4gIG5hbWUsXG4gIG9uQ2xpY2ssXG4gIGNsYXNzTmFtZSxcbiAgaW5wdXRDb2xvcixcbiAgdHlwZSxcbiAgZGlzYWJsZWQsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgaW5wdXRDb2xvcj17aW5wdXRDb2xvcn1cbiAgICAgIHR5cGU9e3R5cGV9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgPlxuICAgICAgPEJ1dHRvbk5hbWU+e25hbWV9PC9CdXR0b25OYW1lPlxuICAgIDwvU3R5bGVkQnV0dG9uPlxuICApO1xufTtcblxuY29uc3QgcmVuZGVyQ29sb3IgPSAoaW5wdXRDb2xvcj86IHN0cmluZykgPT4ge1xuICBzd2l0Y2ggKGlucHV0Q29sb3IpIHtcbiAgICBjYXNlIFwicHJpbWFyeVwiOlxuICAgICAgcmV0dXJuIGBcbiAgICAgIGJhY2tncm91bmQ6ICR7Q09MT1JTLkJMVUV9O1xuICAgICAgY29sb3I6ICR7Q09MT1JTLldISVRFfTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgYDtcblxuICAgIGNhc2UgXCJzdHJva2VcIjpcbiAgICAgIHJldHVybiBgXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogJHtDT0xPUlMuV0hJVEV9O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke0NPTE9SUy5XSElURX07XG4gICAgICBgO1xuXG4gICAgY2FzZSBcImZpbGxcIjpcbiAgICAgIHJldHVybiBgXG4gICAgICBiYWNrZ3JvdW5kOiR7Q09MT1JTLkJMVUV9O1xuICAgICAgY29sb3I6ICR7Q09MT1JTLldISVRFfTtcbiAgICAgIGJvcmRlcjogbm9uZVxuICAgICAgYDtcblxuICAgIGNhc2UgXCJzZWNvbmRhcnlcIjpcbiAgICAgIHJldHVybiBgXG4gICAgICAgIGJhY2tncm91bmQ6ICR7Q09MT1JTLkJBQ0tHUk9VTkRfRElTQUJMRUR9O1xuICAgICAgICBjb2xvcjogJHtDT0xPUlMuQ09MT1JfRElTQUJMRUR9O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke0NPTE9SUy5XSElURX07XG4gICAgICBgO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBgJHtDT0xPUlMuV0hJVEV9YDtcbiAgfVxufTtcblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjx7IGlucHV0Q29sb3I/OiBzdHJpbmcgfT5gXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjRweCAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogOTZweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAkeyh7IGlucHV0Q29sb3IgfSkgPT4gcmVuZGVyQ29sb3IoaW5wdXRDb2xvcil9O1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG4gICY6ZGlzYWJsZWQsXG4gICZbZGlzYWJsZWRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NPTE9SUy5CQUNLR1JPVU5EX0RJU0FCTEVEfTtcbiAgICBjb2xvcjogJHtDT0xPUlMuQ09MT1JfRElTQUJMRUR9O1xuICB9XG5cbiAgJHtyZXNwb25zaXZlLnNtYFxuICAgIHBhZGRpbmc6IDIwcHhcbiAgYH1cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5gO1xuXG5jb25zdCBCdXR0b25OYW1lID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgJHtyZXNwb25zaXZlLnNtYFxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgYH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBMb2dvVG9wIGZyb20gXCJhc3NldHMvaW1hZ2VzL2xvZ28vbG9nbzIucG5nXCI7XG5cbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7fVxuXG5mdW5jdGlvbiBIZWFkZXIoe306IEhlYWRlclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEhlYWRlclN0eWxlZCBjbGFzc05hbWU9XCJoZWFkZXItLXRvcFwiPlxuICAgICAgPExpbmsgdG89XCIvaG9tZVwiPlxuICAgICAgICA8aW1nIHNyYz17TG9nb1RvcH0gYWx0PVwiXCIgLz5cbiAgICAgICAgPHNwYW4+TW9lTUU8L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9IZWFkZXJTdHlsZWQ+XG4gICk7XG59XG5cbmNvbnN0IEhlYWRlclN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDU2cHg7XG4gIG1heC1oZWlnaHQ6IDU2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmN2Y3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG5cbiAgYSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImV4cG9ydCBlbnVtIENPTE9SUyB7XG4gIEJMVUUgPSBcImJsdWVcIixcbiAgV0hJVEUgPSBcIiNmZmZcIixcbiAgQkFDS0dST1VORF9ESVNBQkxFRCA9IFwicmdiKDIyNyAyMjcgMjI3KVwiLFxuICBDT0xPUl9ESVNBQkxFRCA9IFwicmdiKDExMiAxMTIgMTEyKVwiLFxuICBFUlJPUiA9IFwiI0ZGMUIxQlwiLFxuICBTVUNDRVNTID0gXCIjMDBiNzRhXCIsXG4gIERBTkdFUiA9IFwiI2Q5NTM0ZlwiLFxuICBJTkZPID0gXCIjMDA3MGYzXCIsXG4gIFdBUk5JTkcgPSBcIiNmZjk3MDBcIixcbiAgSUNPTl9CQUNLR1JPVU5EID0gXCIjNmM4NTk5XCIsXG4gIEJPUkRFUl9GSUVMRCA9IFwiI2Q4ZDhkOFwiLFxuICBQUklNQVJZID0gXCIjMDUwNTA1XCIsXG4gIEJPUkRFUl9JTUFHRSA9IFwiI2QzZDNkM1wiLFxuICBGT05UX0NPTE9SID0gXCIjMTgxODE4XCIsXG4gIFBFTkRJTkcgPSBcIiNGMjkzMzlcIixcbiAgUEFZTUVOVF9GRUVfQ09MT1IgPSBcIiNlNGVkZjRcIixcbn1cbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5REJwUjZwZzc3LUQ0Ti1ibFJuR2tKTmtQbVNveWpUT3RzXCIsXG4gIGF1dGhEb21haW46IFwiZWxlY3Ryb24tNWFmYWUuZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZWxlY3Ryb24tNWFmYWUuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcImVsZWN0cm9uLTVhZmFlXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZWxlY3Ryb24tNWFmYWUuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjUzNjkyNjM1Mzc2XCIsXG4gIGFwcElkOiBcIjE6MjUzNjkyNjM1Mzc2OndlYjpiN2Q3MTZiMDM4Zjk0NmNkNThmYTM1XCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy0yMVpCUDFZUk5DXCIsXG59O1xuXG5leHBvcnQgY29uc3QgeyBUaW1lc3RhbXAgfSA9IGZpcmViYXNlLmZpcmVzdG9yZTtcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKS5maXJlc3RvcmUoKTtcbiIsImNvbnN0IGN1cnJlbmN5Rm9ybWF0ID0gKG51bTogYW55KSA9PiB7XG4gIGlmICghbnVtKSByZXR1cm47XG4gIHJldHVybiBudW0udG9GaXhlZCgwKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiJDEsXCIpO1xufTtcblxuZXhwb3J0IHsgY3VycmVuY3lGb3JtYXQgfTtcblxuY29uc3Qgc3RhdGlzdGljc0Zvcm1hdCA9IChudW06IGFueSkgPT4ge1xuICBpZiAoIW51bSkgcmV0dXJuO1xuICByZXR1cm4gbnVtLnRvRml4ZWQoMCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIiQxLlwiKTtcbn07XG5cbmV4cG9ydCB7IHN0YXRpc3RpY3NGb3JtYXQgfTtcbiIsImltcG9ydCBcIkBiYWJlbC9wb2x5ZmlsbFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbiIsImltcG9ydCBOYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwidXRpbHMvc3R5bGVkLWNvbXBvbmVudFwiO1xuXG5leHBvcnQgY29uc3Qgd2l0aEJhc2VMYXlvdXQgPSAoQ29tcG9uZW50OiBhbnkpID0+IChwcm9wczogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJhc2VMYXlvdXRTdHlsZWQ+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICA8L0Jhc2VMYXlvdXRTdHlsZWQ+XG4gICk7XG59O1xuXG5jb25zdCBCYXNlTGF5b3V0U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcbiIsImltcG9ydCB7XG4gIGZldGNoQ2hhbm5lbHMsXG4gIGZldGNoQ2hhbm5lbHNDb21wYXJlLFxuICBnZXRDaGFubmVsTGlzdCxcbiAgc3Vic2NyaWJlVG9DaGFubmVsLFxufSBmcm9tIFwiYWN0aW9ucy9jaGFubmVsXCI7XG5pbXBvcnQgQ2hhbm5lbExpc3QgZnJvbSBcImNvbXBvbmVudHMvQ2hhbm5lbExpc3RcIjtcbmltcG9ydCBOZXdDaGFubmVscyBmcm9tIFwiY29tcG9uZW50cy9OZXdDaGFubmVsc1wiO1xuaW1wb3J0IHsgd2l0aEJhc2VMYXlvdXQgfSBmcm9tIFwibGF5b3V0cy9CYXNlXCI7XG5pbXBvcnQgQ2hhdCBmcm9tIFwibGF5b3V0cy9DaGF0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbnRlcmZhY2UgQ2hhbm5lbFByb3BzIHt9XG5cbmZ1bmN0aW9uIENoYW5uZWwoKSB7XG4gIC8vIGNvbnN0IGNoYW5uZWxEZXRhaWwgPSB1c2VTZWxlY3RvcigoeyBjaGFubmVsIH0pID0+IGNoYW5uZWwuY2hhbm5lbERldGFpbCk7XG4gIGNvbnN0IHsgaWQgfTogYW55ID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigoeyBhdXRoIH0pID0+IGF1dGgudXNlcik7XG4gIGNvbnN0IHByb2ZpbGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX3Byb2ZpbGVcIikpO1xuICBjb25zdCBqb2luZWRDaGFubmVscyA9IHVzZVNlbGVjdG9yKCh7IGNoYW5uZWwgfSkgPT4gY2hhbm5lbC5qb2luZWQpO1xuICBjb25zdCBhdmFpbGFibGVDaGFubmVscyA9IHVzZVNlbGVjdG9yKCh7IGNoYW5uZWwgfSkgPT4gY2hhbm5lbC5hdmFpbGFibGUpO1xuICBjb25zdCBjaGFubmVscyA9IHVzZVNlbGVjdG9yKCh7IGNoYW5uZWwgfSkgPT4gY2hhbm5lbC5jaGFubmVsKTtcbiAgY29uc3QgZGlzcGF0Y2g6IGFueSA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGFjdGl2ZUNoYW5uZWwgPSB1c2VTZWxlY3RvcihcbiAgICAoeyBjaGFubmVsIH0pID0+IGNoYW5uZWwuYWN0aXZlQ2hhbm5lbHNbaWRdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaENoYW5uZWxzKCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldENoYW5uZWxMaXN0KHByb2ZpbGU/LnBhcmFtcy51c2VySWQpKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGNvbnN0IHVuc3ViRnJvbUNoYW5uZWwgPSBkaXNwYXRjaChzdWJzY3JpYmVUb0NoYW5uZWwoaWQpKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHVuc3ViRnJvbUNoYW5uZWwoKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbaWRdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChcbiAgLy8gICAgIHVzZXIgJiZcbiAgLy8gICAgIHVzZXIudWlkID09PSBwcm9maWxlPy5wYXJhbXMudXNlcklkICYmXG4gIC8vICAgICBpbnNlcnREYXRhID09PSBcImluc2VydGVkXCJcbiAgLy8gICApIHtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9IGVsc2UgaWYgKGNoYW5uZWxzMT8ubGVuZ3RoID4gMCAmJiB1c2VyPy51aWQpIHtcbiAgLy8gICAgIGlmIChjaGFubmVsc0NvbXBhcmUubGVuZ3RoID4gMCkge1xuICAvLyAgICAgICBjb25zdCBuZXdBcnIgPSBjaGFubmVsc0NvbXBhcmUuY29uY2F0KGNoYW5uZWxzMSk7XG4gIC8vICAgICAgIGNvbnN0IGZpbHRlck5ld0FyciA9IG5ld0Fyci5maWx0ZXIoKGNobmw6IGFueSwgaWR4OiBudW1iZXIpID0+IHtcbiAgLy8gICAgICAgICByZXR1cm4gKFxuICAvLyAgICAgICAgICAgbmV3QXJyLmZpbmRJbmRleChcbiAgLy8gICAgICAgICAgICAgKGNobmwyOiBhbnkpID0+XG4gIC8vICAgICAgICAgICAgICAgY2hubDIucm9vbV9uYW1lID09PSBjaG5sLnJvb21fbmFtZSAmJlxuICAvLyAgICAgICAgICAgICAgIGNobmwyLm93bmVySWQgPT09IGNobmwub3duZXJJZFxuICAvLyAgICAgICAgICAgKSA9PT0gaWR4XG4gIC8vICAgICAgICAgKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyTmV3QXJyXCIsIGZpbHRlck5ld0Fycik7XG4gIC8vICAgICAgIGNvbnN0IG5ld0ZpbHRlck5ld0FyciA9IGZpbHRlck5ld0Fyci5maWx0ZXIoXG4gIC8vICAgICAgICAgKGZjbmw6IGFueSwgaWR4OiBudW1iZXIpID0+IHtcbiAgLy8gICAgICAgICAgIHJldHVybiBmY25sPy5yb29tX25hbWUgIT09IGNoYW5uZWxzMVtpZHhdPy5yb29tX25hbWU7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICApO1xuXG4gIC8vICAgICAgIC8vIGNvbnN0IG5ld0ZpdGVyQ3JlYXRlID0gZmlsdGVyTmV3QXJyLmZpbHRlclxuXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHsgbmV3RmlsdGVyTmV3QXJyIH0pO1xuXG4gIC8vICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGZpbHRlck5ld0Fycj8ubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgICAgICBpZiAoXG4gIC8vICAgICAgICAgICBmaWx0ZXJOZXdBcnIgJiZcbiAgLy8gICAgICAgICAgIGZpbHRlck5ld0FycltpXT8ucm9vbV9uYW1lICE9PSBjaGFubmVsczFbaV0/LnJvb21fbmFtZVxuICAvLyAgICAgICAgICkge1xuICAvLyAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4gIC8vICAgICAgICAgICAgIC4uLmZpbHRlck5ld0FycltpXSxcbiAgLy8gICAgICAgICAgICAgLy8gY2hhbmdlX25hbWU6IGZpbHRlck5ld0FycltpXT8uY2hhbmdlX25hbWUsXG4gIC8vICAgICAgICAgICAgIC8vIGNobmxfdHlwZTogZmlsdGVyTmV3QXJyW2ldPy5jaG5sX3R5cGUsXG4gIC8vICAgICAgICAgICAgIC8vIHRpdGxlOiBmaWx0ZXJOZXdBcnJbaV0/LnRpdGxlLFxuICAvLyAgICAgICAgICAgICAvLyBydWlkOiBmaWx0ZXJOZXdBcnJbaV0/LnJ1aWQsXG4gIC8vICAgICAgICAgICAgIC8vIHJvb21JZDogZmlsdGVyTmV3QXJyW2ldPy5yb29tSWQsXG4gIC8vICAgICAgICAgICAgIC8vIHJvb21Db21tZW50OiBmaWx0ZXJOZXdBcnJbaV0/LnJvb21Db21tZW50LFxuICAvLyAgICAgICAgICAgICAvLyByb29tX25hbWU6IGZpbHRlck5ld0FycltpXT8ucm9vbV9uYW1lLFxuICAvLyAgICAgICAgICAgICAvLyByb29tX3Byb2ZpbGVfaW1hZ2U6IGZpbHRlck5ld0FycltpXT8ucm9vbV9wcm9maWxlX2ltYWdlLFxuICAvLyAgICAgICAgICAgICAvLyByb29tX3JlZ19kYXRlOiBmaWx0ZXJOZXdBcnJbaV0/LnJvb21fcmVnX2RhdGUsXG4gIC8vICAgICAgICAgICAgIC8vIHJvb21fdHlwZTogZmlsdGVyTmV3QXJyW2ldPy5yb29tX3R5cGUsXG4gIC8vICAgICAgICAgICAgIC8vIG93bmVySWQ6IGZpbHRlck5ld0FycltpXT8ub3duZXJJZCxcbiAgLy8gICAgICAgICAgICAgLy8gb3duZXJfbmFtZTogZmlsdGVyTmV3QXJyW2ldPy5vd25lcl9uYW1lLFxuICAvLyAgICAgICAgICAgICAvLyBwcm9maWxlX2ltYWdlOiBmaWx0ZXJOZXdBcnJbaV0/LnByb2ZpbGVfaW1hZ2UsXG4gIC8vICAgICAgICAgICAgIC8vIHVzZXJDb3VudDogZmlsdGVyTmV3QXJyW2ldPy51c2VyQ291bnQsXG4gIC8vICAgICAgICAgICAgIC8vIHVzZXJfcmVnX2RhdGU6IGZpbHRlck5ld0FycltpXT8udXNlcl9yZWdfZGF0ZSxcbiAgLy8gICAgICAgICAgIH07XG4gIC8vICAgICAgICAgICAvLyBkaXNwYXRjaChjcmVhdGVDaGFubmVsKGZvcm1EYXRhLCB1c2VyPy51aWQpKTtcbiAgLy8gICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW5zZXJ0XCIsIFwiaW5zZXJ0ZWRcIik7XG4gIC8vICAgICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAgIGRpc3BhdGNoKGpvaW5DaGFubmVsKG5ld0ZpbHRlck5ld0FycltpXSwgdXNlcj8udWlkKSk7XG4gIC8vICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImpvaW5cIiwgXCJqb2luZWRcIik7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcImNvbiBsYWlcIik7XG4gIC8vICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGNoYW5uZWxzMT8ubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgLy8gICAgICAgICAgIC4uLmNoYW5uZWxzMVtpXSxcbiAgLy8gICAgICAgICB9O1xuICAvLyAgICAgICAgIGRpc3BhdGNoKGNyZWF0ZUNoYW5uZWwoZm9ybURhdGEsIHVzZXI/LnVpZCkpO1xuICAvLyAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW5zZXJ0XCIsIFwiaW5zZXJ0ZWRcIik7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0sIFt1c2VyLCBjaGFubmVsczE/Lmxlbmd0aCwgY2hhbm5lbHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxDaGFubmVsU3R5bGVkIGNsYXNzTmFtZT1cImNoYW5uZWwtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWwtY29udGFpbmVyX19saXN0XCI+XG4gICAgICAgIDxDaGFubmVsTGlzdCBqb2luZWRDaGFubmVscz17am9pbmVkQ2hhbm5lbHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthY3RpdmVDaGFubmVsID8gKFxuICAgICAgICA8Q2hhdCAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPE5ld0NoYW5uZWxzXG4gICAgICAgICAgYXZhaWxhYmxlQ2hhbm5lbHM9e2F2YWlsYWJsZUNoYW5uZWxzfVxuICAgICAgICAgIGpvaW5lZENoYW5uZWxzPXtqb2luZWRDaGFubmVsc31cbiAgICAgICAgICBjaGFubmVscz17Y2hhbm5lbHM/Lmxlbmd0aCA+IDAgJiYgY2hhbm5lbHN9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQ2hhbm5lbFN0eWxlZD5cbiAgKTtcbn1cblxuY29uc3QgQ2hhbm5lbFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLmNoYW5uZWwtY29udGFpbmVyIHtcbiAgICAmX19saXN0IHtcbiAgICAgIG1pbi13aWR0aDogNDIwcHg7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTZlY2YzO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2VMYXlvdXQoQ2hhbm5lbCk7XG4iLCJpbXBvcnQgeyBzZW5kQ2hhdE1lc3NhZ2UgfSBmcm9tIFwiYWN0aW9ucy9jaGF0XCI7XG5pbXBvcnQgQ2hhdEJhciBmcm9tIFwiY29tcG9uZW50cy9DaGF0QmFyXCI7XG5pbXBvcnQgQ2hhdE1lc3NhZ2VMaXN0IGZyb20gXCJjb21wb25lbnRzL0NoYXRNZXNzYWdlTGlzdFwiO1xuaW1wb3J0IENoYXRPcHRpb25zIGZyb20gXCJjb21wb25lbnRzL0NoYXRPcHRpb25zXCI7XG5pbXBvcnQgTWVzc2FuZ2VyIGZyb20gXCJjb21wb25lbnRzL01lc3NhbmdlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBNRVNTQUdFUyB9IGZyb20gXCJtb2Nrcy9jaGF0XCI7XG5pbXBvcnQge1xuICByZWdpc3Rlck1lc3NhZ2VTdWJzY3JpcHRpb24sXG4gIHNlbmRDaGFubmVsTWVzc2FnZSxcbiAgc3Vic2NyaWJlVG9DaGFubmVsLFxuICBzdWJzY3JpYmVUb01lc3NhZ2VzLFxuICBzdWJzY3JpYmVUb1Byb2ZpbGUsXG59IGZyb20gXCJhY3Rpb25zL2NoYW5uZWxcIjtcblxuaW50ZXJmYWNlIENoYXRQcm9wcyB7fVxuXG5mdW5jdGlvbiBDaGF0KHt9OiBDaGF0UHJvcHMpIHtcbiAgLy8gY29uc3QgW21lc3NhZ2VMaXN0LCBzZXRNZXNzYWdlTGlzdF0gPSB1c2VTdGF0ZTxhbnk+KFxuICAvLyAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfbWVzc2FnZXNcIikpXG4gIC8vICk7XG4gIGNvbnN0IGRpc3BhdGNoOiBhbnkgPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGlkIH06IGFueSA9IHVzZVBhcmFtcygpO1xuICBjb25zdCBwZW9wbGVXYXRjaGVyczogYW55ID0gdXNlUmVmKHt9KTtcbiAgY29uc3QgYWN0aXZlQ2hhbm5lbCA9IHVzZVNlbGVjdG9yKFxuICAgICh7IGNoYW5uZWwgfSkgPT4gY2hhbm5lbC5hY3RpdmVDaGFubmVsc1tpZF1cbiAgKTtcbiAgY29uc3QgbWVzc2FnZXMgPSB1c2VTZWxlY3RvcigoeyBjaGFubmVsIH0pID0+IGNoYW5uZWwubWVzc2FnZXNbaWRdKTtcbiAgY29uc3QgbWVzc2FnZVN1YnMgPSB1c2VTZWxlY3RvcigoeyBjaGFubmVsIH0pID0+IGNoYW5uZWwubWVzc2FnZVN1YnNbaWRdKTtcblxuICBjb25zdCBtZXNzYWdlTGlzdFJlZiA9IHVzZVJlZjxhbnk+KHt9KTtcbiAgY29uc3Qgam9pbmVkVXNlcnMgPSBhY3RpdmVDaGFubmVsPy5qb2luZWRVc2VycztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVuc3ViRnJvbUNoYW5uZWwgPSBkaXNwYXRjaChzdWJzY3JpYmVUb0NoYW5uZWwoaWQpKTtcblxuICAgIGlmICghbWVzc2FnZVN1YnMpIHtcbiAgICAgIGNvbnN0IHVuc3ViRnJvbU1lc3NhZ2VzID0gZGlzcGF0Y2goc3Vic2NyaWJlVG9NZXNzYWdlcyhpZCkpO1xuICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJNZXNzYWdlU3Vic2NyaXB0aW9uKGlkLCB1bnN1YkZyb21NZXNzYWdlcykpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1bnN1YkZyb21DaGFubmVsKCk7XG4gICAgICB1bnN1YkZyb21Kb2luZWRVc2VycygpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGpvaW5lZFVzZXJzICYmIHN1YnNjcmliZVRvSm9pbmVkVXNlcnMoam9pbmVkVXNlcnMpO1xuICB9LCBbam9pbmVkVXNlcnNdKTtcblxuICBjb25zdCBzdWJzY3JpYmVUb0pvaW5lZFVzZXJzID0gdXNlQ2FsbGJhY2soXG4gICAgKEpVc2VycykgPT4ge1xuICAgICAgSlVzZXJzLmZvckVhY2goKHVzZXI6IGFueSkgPT4ge1xuICAgICAgICBpZiAoIXBlb3BsZVdhdGNoZXJzLmN1cnJlbnRbdXNlci51aWRdKSB7XG4gICAgICAgICAgcGVvcGxlV2F0Y2hlcnMuY3VycmVudFt1c2VyLnVpZF0gPSBkaXNwYXRjaChcbiAgICAgICAgICAgIHN1YnNjcmliZVRvUHJvZmlsZSh1c2VyLnVpZCwgaWQpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBbZGlzcGF0Y2gsIGlkXVxuICApO1xuXG4gIGNvbnN0IHVuc3ViRnJvbUpvaW5lZFVzZXJzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIE9iamVjdC5rZXlzKHBlb3BsZVdhdGNoZXJzLmN1cnJlbnQpLmZvckVhY2goKGlkKSA9PlxuICAgICAgcGVvcGxlV2F0Y2hlcnMuY3VycmVudFtpZF0oKVxuICAgICk7XG4gIH0sIFtwZW9wbGVXYXRjaGVycy5jdXJyZW50XSk7XG5cbiAgLy8gY29uc3Qgc2VuZE1lc3NhZ2UgPSAobWVzc2FnZTogYW55KSA9PiB7XG4gIC8vICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAvLyAgIGNvbnNvbGUubG9nKHsgbWVzc2FnZSB9KTtcbiAgLy8gICBjb25zb2xlLmxvZyh7IG1lc3NhZ2VMaXN0IH0pO1xuICAvLyAgIGNvbnN0IHByZXZNZXNzYWdlID0gbWVzc2FnZUxpc3QgfHwgW107XG5cbiAgLy8gICBjb25zdCBuZXdNZXNzYWdlID0gWy4uLnByZXZNZXNzYWdlLCB7IC4uLm1lc3NhZ2UgfV07XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfbWVzc2FnZXNcIiwgSlNPTi5zdHJpbmdpZnkobmV3TWVzc2FnZSkpO1xuICAvLyAgIGNvbnNvbGUubG9nKHsgbmV3TWVzc2FnZSB9KTtcblxuICAvLyAgIC8vIGRpc3BhdGNoKHNlbmRDaGF0TWVzc2FnZShtZXNzYWdlLCBpZCkpO1xuICAvLyAgIHNldE1lc3NhZ2VMaXN0KG5ld01lc3NhZ2UpO1xuICAvLyB9O1xuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gdXNlQ2FsbGJhY2soXG4gICAgKG1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHsgbWVzc2FnZSB9KTtcbiAgICAgIGRpc3BhdGNoKHNlbmRDaGFubmVsTWVzc2FnZShtZXNzYWdlLCBpZCkpLnRoZW4oKF86IGFueSkgPT5cbiAgICAgICAgbWVzc2FnZUxpc3RSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyhmYWxzZSlcbiAgICAgICk7XG4gICAgfSxcbiAgICBbaWRdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobWVzc2FnZXMpIHtcbiAgICAgIG1lc3NhZ2VMaXN0UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW21lc3NhZ2VzPy5sZW5ndGhdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2hhdFN0eWxlZCBjbGFzc05hbWU9XCJjaGF0LS12aWV3XCI+XG4gICAgICAgIDxDaGF0QmFyIGNoYW5uZWw9e2FjdGl2ZUNoYW5uZWx9IC8+XG4gICAgICAgIDxDaGF0TWVzc2FnZUxpc3QgaW5uZXJSZWY9e21lc3NhZ2VMaXN0UmVmfSBtZXNzYWdlcz17bWVzc2FnZXN9IC8+XG4gICAgICAgIDxDaGF0T3B0aW9ucyBzdWJtaXRTdG9jaz17c2VuZE1lc3NhZ2V9IC8+XG4gICAgICAgIDxNZXNzYW5nZXIgb25TdWJtaXQ9e3NlbmRNZXNzYWdlfSAvPlxuICAgICAgPC9DaGF0U3R5bGVkPlxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBDaGF0U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcbiIsImltcG9ydCBOYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwidXRpbHMvc3R5bGVkLWNvbXBvbmVudFwiO1xuaW1wb3J0IHsgd2l0aEJhc2VMYXlvdXQgfSBmcm9tIFwibGF5b3V0cy9CYXNlXCI7XG5cbmludGVyZmFjZSBIb21lUHJvcHMge31cblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8SG9tZVN0eWxlZCBjbGFzc05hbWU9XCJob21lLWNvbnRhaW5lclwiPlxuICAgICAgPGgxPkhvbWUgcGFnZTwvaDE+XG4gICAgICA8aDQ+Q29tbWluZyBzb29uPC9oND5cbiAgICA8L0hvbWVTdHlsZWQ+XG4gICk7XG59XG5cbmNvbnN0IEhvbWVTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2VMYXlvdXQoSG9tZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0LCB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBMb2dvV2F2ZSBmcm9tIFwiYXNzZXRzL2ltYWdlcy9sb2dvL2xvZ29fYXZlYXBwLnBuZ1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gXCJhY3Rpb25zL2F1dGhcIjtcbmltcG9ydCB7IEF1dGggfSBmcm9tIFwibW9kZWxzL2F1dGhcIjtcbmltcG9ydCBMb2FkaW5nVmlldyBmcm9tIFwiY29tcG9uZW50cy9TcGlubmVyL0xvYWRpbmdWaWV3XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9IZWFkZXIvQnV0dG9uXCI7XG5pbXBvcnQgeyBjcmVhdGVDaGFubmVsIH0gZnJvbSBcImFjdGlvbnMvY2hhbm5lbFwiO1xuXG5pbnRlcmZhY2UgTG9naW5Qcm9wcyB7fVxuXG5mdW5jdGlvbiBMb2dpbih7fTogTG9naW5Qcm9wcykge1xuICBjb25zdCBkaXNwYXRjaDogYW55ID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XG4gIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3IoKHsgYXV0aCB9KSA9PiBhdXRoLmxvZ2luLmVycm9yKTtcbiAgY29uc3QgaXNDaGVja2luZyA9IHVzZVNlbGVjdG9yKCh7IGF1dGggfSkgPT4gYXV0aC5sb2dpbi5pc0NoZWNraW5nKTtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKCh7IGF1dGggfSkgPT4gYXV0aC51c2VyKTtcblxuICBjb25zdCBvYlN1Ym1pdCA9IChkYXRhOiBBdXRoKSA9PiB7XG4gICAgZGlzcGF0Y2gobG9naW4oZGF0YSkpO1xuICB9O1xuXG4gIGlmIChpc0NoZWNraW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nVmlldyAvPjtcbiAgfVxuXG4gIGlmICh1c2VyKSB7XG4gICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9jaGFubmVsXCIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMb2dpblN0eWxlZCBjbGFzc05hbWU9XCJsb2dpbi1zdHlsZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tLWJveFwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9iU3VibWl0KX0gY2xhc3NOYW1lPVwibG9naW4tLWJveF9fZm9ybVwiPlxuICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLS1pbnB1dHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS0taW5wdXRzX19pbnB1dCB1c2VyaWRcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwidXNlcklkXCIpfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSB1c2VyaWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tLWlucHV0c19faW5wdXQgcGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwidXNlclBhc3N3b3JkXCIpfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7Lyoge3VzZXIgIT09IG51bGwgJiYgdXNlcj8ucmVzdWx0ICE9PSBcInN1Y2Nlc3NcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBzbWFsbFwiIHN0eWxlPXt7IG1hcmdpblRvcDogNDggfX0+XG4gICAgICAgICAgICAgIHt1c2VyPy5yZXN1bHR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfSAqL31cbiAgICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXIgc21hbGxcIj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tb3B0aW9uc1wiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIkxvZ2luXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxvZ2luXCJcbiAgICAgICAgICAgICAgaW5wdXRDb2xvcj17aXNDaGVja2luZyA/IFwiXCIgOiBcInByaW1hcnlcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3Jnb3Qtb3B0aW9uc1wiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPnVzZXJpZCBzZWFyY2hpbmc8L0xpbms+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCI+UFcgc2VhcmNoaW5nPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb3B5cmlnaHRcIj5cbiAgICAgICAgICA8aW1nIHNyYz17TG9nb1dhdmV9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBDb3B5cmlnaHQgQCBBVkUgQVBQLkFMTCBSSUdIVFMgUkVTRVJWRUQuVEVSTVMgT0YgU0VSVklDRSBQUklWQUNZXG4gICAgICAgICAgICBQT0xJQ1lcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Mb2dpblN0eWxlZD5cbiAgKTtcbn1cblxuY29uc3QgTG9naW5TdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5sb2dpbi0tYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5sb2dpbi0tYm94X19mb3JtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogNDBweCA0MHB4O1xuICAgIG1pbi13aWR0aDogNDgwcHg7XG4gICAgbWF4LXdpZHRoOiA0ODBweDtcblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gICAgfVxuXG4gICAgLmZvcm0tLWlucHV0cyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWluLWhlaWdodDogNDhweDtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmX19pbnB1dC51c2VyaWQge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmX19pbnB1dC5wYXNzd29yZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1vcHRpb25zIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAuYnRuLWxvZ2luIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtaW4td2lkdGg6IDk2cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZm9yZ290LW9wdGlvbnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5mb290ZXItY29weXJpZ2h0IHtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJpbXBvcnQgeyB3aXRoQmFzZUxheW91dCB9IGZyb20gXCJsYXlvdXRzL0Jhc2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJ1dGlscy9zdHlsZWQtY29tcG9uZW50XCI7XG5cbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIHJldHVybiAoXG4gICAgPFByb2ZpbGVTdHlsZWQgY2xhc3NOYW1lPVwicHJvZmlsZS1jb250YWluZXJcIj5cbiAgICAgIDxoMT5Qcm9maWxlIHBhZ2U8L2gxPlxuICAgICAgPGg0PkNvbW1pbmcgc29vbjwvaDQ+XG4gICAgPC9Qcm9maWxlU3R5bGVkPlxuICApO1xufVxuY29uc3QgUHJvZmlsZVN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZUxheW91dChQcm9maWxlKTtcbiIsImltcG9ydCB7IGxvZ291dCB9IGZyb20gXCJhY3Rpb25zL2F1dGhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0hlYWRlci9CdXR0b25cIjtcbmltcG9ydCB7IHdpdGhCYXNlTGF5b3V0IH0gZnJvbSBcImxheW91dHMvQmFzZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBSZWRpcmVjdCwgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwidXRpbHMvc3R5bGVkLWNvbXBvbmVudFwiO1xuXG5mdW5jdGlvbiBTZXR0aW5ncygpIHtcbiAgY29uc3QgZGlzcGF0Y2g6IGFueSA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigoeyBhdXRoIH0pID0+IGF1dGg/LmxvZ291dD8udXNlcik7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2V0dGluZ3NTdHlsZWQ+XG4gICAgICA8aDE+U2V0dGluZ3MgcGFnZTwvaDE+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBuYW1lPVwibG9nb3V0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxvZ2luXCJcbiAgICAgICAgaW5wdXRDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nb3V0KCkpO1xuICAgICAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIExvZ291dFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9TZXR0aW5nc1N0eWxlZD5cbiAgKTtcbn1cblxuY29uc3QgU2V0dGluZ3NTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2VMYXlvdXQoU2V0dGluZ3MpO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwcFJlZHVjZXIoKSB7XG4gIGNvbnN0IHsgb25MaW5lIH0gPSBuYXZpZ2F0b3I7XG4gIGNvbnN0IGlzT25saW5lID0gKHN0YXRlID0gb25MaW5lLCBhY3Rpb246IGFueSkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJBUFBfSVNfT05MSU5FXCI6XG4gICAgICBjYXNlIFwiQVBQX0lTX09GRkxJTkVcIjpcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pc09ubGluZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgaXNPbmxpbmUsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcHBSZWR1Y2VyKCk7XG4iLCJpbXBvcnQge1xuICBjcmVhdGVFcnJvclJlZHVjZXIsXG4gIGNyZWF0ZUlzRmV0Y2hpbmdSZWR1Y2VyLFxuICBsb2dvdXRSZWR1Y2VyLFxufSBmcm9tIFwicmVkdWNlcnMvY29tbW9uXCI7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuY29uc3QgY3JlYXRlTG9naW5SZWR1Y2VyID0gKCkgPT5cbiAgY29tYmluZVJlZHVjZXJzKHtcbiAgICBpc0NoZWNraW5nOiBjcmVhdGVJc0ZldGNoaW5nUmVkdWNlcihcIkFVVEhfTE9HSU5cIiksXG4gICAgZXJyb3I6IGNyZWF0ZUVycm9yUmVkdWNlcihcIkFVVEhfTE9HSU5cIiksXG4gIH0pO1xuXG5mdW5jdGlvbiBjcmVhdGVBdXRoUmVkdWNlcigpIHtcbiAgY29uc3QgdXNlciA9IChzdGF0ZTogYW55ID0gbnVsbCwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFwiQVVUSF9PTl9FUlJPUlwiOlxuICAgICAgY2FzZSBcIkFVVEhfT05fSU5JVFwiOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIGNhc2UgXCJBVVRIX0xPR0lOX0ZJUkVCQVNFX1NVQ0NFU1NcIjpcbiAgICAgIGNhc2UgXCJBVVRIX0xPR0lOX1NVQ0NFU1NcIjpcbiAgICAgIGNhc2UgXCJBVVRIX09OX1NVQ0NFU1NcIjpcbiAgICAgICAgcmV0dXJuIGFjdGlvbi51c2VyO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoc3RhdGU6IGFueSA9IG51bGwsIGFjdGlvbjogYW55KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcIkFVVEhfTE9HT1VUX1NVQ0NFU1NcIjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gY29tYmluZVJlZHVjZXJzKHtcbiAgICB1c2VyLFxuICAgIGxvZ291dCxcbiAgICBpc0NoZWNraW5nOiBjcmVhdGVJc0ZldGNoaW5nUmVkdWNlcihcIkFVVEhfT05cIiksXG4gICAgbG9naW46IGNyZWF0ZUxvZ2luUmVkdWNlcigpLFxuICAgIC8vIGxvZ291dDogbG9nb3V0UmVkdWNlcihcIkFVVEhfTE9HT1VUXCIpLFxuICAgIC8vIHJlZ2lzdGVyOiBjcmVhdGVSZWdpc3RlclJlZHVjZXIoKSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUF1dGhSZWR1Y2VyKCk7XG4iLCJpbXBvcnQgeyBDaGFubmVsIH0gZnJvbSBcIm1vZGVscy9jaGFubmVsXCI7XG5pbXBvcnQgeyBjcmVhdGVJc0ZldGNoaW5nUmVkdWNlciB9IGZyb20gXCJyZWR1Y2Vycy9jb21tb25cIjtcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmludGVyZmFjZSBpbml0aWFsU3RhdGUge1xuICBjaGFubmVsPzogQ2hhbm5lbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbFJlZHVjZXIoKSB7XG4gIGNvbnN0IGpvaW5lZCA9IChzdGF0ZTogYW55ID0gW10sIGFjdGlvbjogYW55KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcIkNIQU5ORUxTX0ZFVENIX1JFU1RBUlRcIjpcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgY2FzZSBcIkNIQU5ORUxTX0ZFVENIX1NVQ0NFU1NcIjpcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5qb2luZWQ7XG4gICAgICBjYXNlIFwiQ0hBTk5FTFNfSk9JTl9TVUNDRVNTXCI6XG4gICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5jaGFubmVsXTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGF2YWlsYWJsZSA9IChzdGF0ZTogYW55ID0gW10sIGFjdGlvbjogYW55KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcIkNIQU5ORUxTX0ZFVENIX1JFU1RBUlRcIjpcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgY2FzZSBcIkNIQU5ORUxTX0ZFVENIX1NVQ0NFU1NcIjpcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5hdmFpbGFibGU7XG4gICAgICBjYXNlIFwiQ0hBTk5FTFNfSk9JTl9TVUNDRVNTXCI6XG4gICAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoKGNoYW5uZWw6IGFueSkgPT4gY2hhbm5lbC5pZCAhPT0gYWN0aW9uLmNoYW5uZWwuaWQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGFubmVsc0NvbXBhcmUgPSAoc3RhdGU6IGFueSA9IFtdLCBhY3Rpb246IGFueSkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJDSEFOTkVMU19DT01QQVJFX0ZFVENIX1NVQ0NFU1NcIjpcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5jaGFubmVsc0NvbXBhcmU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFjdGl2ZUNoYW5uZWxzID0gY3JlYXRlUmVkdWNlcihcbiAgICB7fSxcbiAgICB7XG4gICAgICBDSEFOTkVMU19TRVRfQUNUSVZFX0NIQU5ORUw6IChzdGF0ZTogYW55LCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGFubmVsIH0gPSBhY3Rpb247XG5cbiAgICAgICAgc3RhdGVbY2hhbm5lbC5pZF0gPSBjaGFubmVsO1xuICAgICAgfSxcblxuICAgICAgQ0hBTk5FTFNfVVBEQVRFX1VTRVJfU1RBVEU6IChzdGF0ZTogYW55LCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VyLCBjaGFubmVsSWQgfSA9IGFjdGlvbjtcbiAgICAgICAgY29uc3Qgam9pbmVkVXNlcnMgPSBzdGF0ZVtjaGFubmVsSWRdLmpvaW5lZFVzZXJzO1xuICAgICAgICBjb25zdCBpbmRleCA9IGpvaW5lZFVzZXJzLmZpbmRJbmRleCgoanU6IGFueSkgPT4ganUudWlkID09PSB1c2VyLnVpZCk7XG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIHN0YXRlO1xuICAgICAgICBpZiAoam9pbmVkVXNlcnNbaW5kZXhdLnN0YXRlID09PSB1c2VyLnN0YXRlKSByZXR1cm4gc3RhdGU7XG5cbiAgICAgICAgam9pbmVkVXNlcnNbaW5kZXhdLnN0YXRlID0gdXNlci5zdGF0ZTtcbiAgICAgIH0sXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IGNoYW5uZWwgPSAoc3RhdGU6IGluaXRpYWxTdGF0ZSA9IG51bGwsIGFjdGlvbjogYW55KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcIkFVVEhfTE9HT1VUX1NVQ0NFU1NcIjpcbiAgICAgIGNhc2UgXCJDSEFOTkVMX09OX0VSUk9SXCI6XG4gICAgICBjYXNlIFwiQ0hBTk5FTF9PTl9JTklUXCI6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgY2FzZSBcIkNIQU5ORUxfT05fU1VDQ0VTU1wiOlxuICAgICAgICByZXR1cm4gYWN0aW9uLmNoYW5uZWwucGFyYW1zO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW5uZWxEZXRhaWwgPSAoc3RhdGU6IGluaXRpYWxTdGF0ZSA9IG51bGwsIGFjdGlvbjogYW55KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcIkNIT09TRV9DSEFOTkVMXCI6XG4gICAgICAgIHJldHVybiBhY3Rpb24uY2hhbm5lbERldGFpbDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbWVzc2FnZXMgPSBjcmVhdGVSZWR1Y2VyKFxuICAgIHt9LFxuICAgIHtcbiAgICAgIENIQU5ORUxTX1NFVF9NRVNTQUdFUzogKHN0YXRlOiBhbnksIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBwcmV2TWVzc2FnZSA9IHN0YXRlW2FjdGlvbi5jaGFubmVsSWRdIHx8IFtdO1xuXG4gICAgICAgIHN0YXRlW2FjdGlvbi5jaGFubmVsSWRdID0gWy4uLnByZXZNZXNzYWdlLCAuLi5hY3Rpb24ubWVzc2FnZXNdO1xuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgbWVzc2FnZVN1YnMgPSAoc3RhdGUgPSB7fSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFwiQ0hBTk5FTFNfUkVHSVNURVJfTUVTU0FHRV9TVUJcIjpcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIFthY3Rpb24uY2hhbm5lbElkXTogYWN0aW9uLnN1YiB9O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGpvaW5lZCxcbiAgICBhdmFpbGFibGUsXG4gICAgYWN0aXZlQ2hhbm5lbHMsXG4gICAgbWVzc2FnZXMsXG4gICAgbWVzc2FnZVN1YnMsXG4gICAgY2hhbm5lbCxcbiAgICBjaGFubmVsRGV0YWlsLFxuICAgIGNoYW5uZWxzQ29tcGFyZSxcbiAgICBpc0NoZWNraW5nOiBjcmVhdGVJc0ZldGNoaW5nUmVkdWNlcihcIkNIQU5ORUxfT05cIiksXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDaGFubmVsUmVkdWNlcigpO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuaW50ZXJmYWNlIGluaXRpYWxTdGF0ZSB7XG4gIG1lc3NhZ2U/OiBhbnk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoYXRSZWR1Y2VyKCkge1xuICBjb25zdCBtZXNzYWdlcyA9IGNyZWF0ZVJlZHVjZXIoXG4gICAge30sXG4gICAge1xuICAgICAgQ0hBVFNfU0VUX01FU1NBR0VTOiAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcHJldk1lc3NhZ2UgPSBzdGF0ZVthY3Rpb24uY2hhdElkXSB8fCBbXTtcblxuICAgICAgICBzdGF0ZVthY3Rpb24uY2hhdElkXSA9IFsuLi5wcmV2TWVzc2FnZSwgLi4uYWN0aW9uLm1lc3NhZ2VzXTtcbiAgICAgIH0sXG4gICAgfVxuICApO1xuXG4gIHJldHVybiBjb21iaW5lUmVkdWNlcnMoe1xuICAgIG1lc3NhZ2VzLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2hhdFJlZHVjZXIoKTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVFcnJvclJlZHVjZXIgPVxuICAoYWN0aW9uVHlwZTogYW55KSA9PlxuICAoc3RhdGU6IGFueSA9IG51bGwsIGFjdGlvbjogYW55KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBgJHthY3Rpb25UeXBlfV9JTklUYDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBjYXNlIGAke2FjdGlvblR5cGV9X0VSUk9SYDpcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5lcnJvcjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJc0ZldGNoaW5nUmVkdWNlciA9XG4gIChhY3Rpb25UeXBlOiBhbnkpID0+XG4gIChzdGF0ZSA9IGZhbHNlLCBhY3Rpb246IGFueSkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgYCR7YWN0aW9uVHlwZX1fSU5JVGA6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSBgJHthY3Rpb25UeXBlfV9TVUNDRVNTYDpcbiAgICAgIGNhc2UgYCR7YWN0aW9uVHlwZX1fRVJST1JgOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0UmVkdWNlciA9XG4gIChhY3Rpb25UeXBlOiBhbnkpID0+XG4gIChzdGF0ZTogYW55ID0gbnVsbCwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIGAke2FjdGlvblR5cGV9X0lOSVRgOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBjYXNlIGAke2FjdGlvblR5cGV9X1NVQ0NFU1NgOlxuICAgICAgY2FzZSBgJHthY3Rpb25UeXBlfV9FUlJPUmA6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tIFwibW9kZWxzL3VzZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldEFjY2Vzc1Rva2VuID0gKCkgPT4ge1xuICBjb25zdCBfdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfdXNlclwiKSk7XG4gIHJldHVybiBfdXNlcj8uYWNjZXNzVG9rZW47XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0VXNlciA9ICh1c2VyOiBhbnkpID0+IHtcbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlcj8ucGFyYW1zLmF0aztcbiAgY29uc3QgcmVmcmVzaFRva2VuID0gdXNlcj8ucGFyYW1zLnJ0aztcbiAgY29uc3QgdXNlcklkID0gdXNlcj8ucGFyYW1zLnVpZDtcbiAgY29uc3QgX3VzZXIgPSB7XG4gICAgYWNjZXNzVG9rZW4sXG4gICAgcmVmcmVzaFRva2VuLFxuICAgIHVzZXJJZCxcbiAgfTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdXNlclwiLCBKU09OLnN0cmluZ2lmeShfdXNlcikpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl9wcm9maWxlXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKCkgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl91c2VyXCIpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhbFJlZnJlc2hUb2tlbiA9ICgpID0+IHtcbiAgY29uc3QgX3VzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX3VzZXJcIikpO1xuICByZXR1cm4gX3VzZXI/LnJlZnJlc2hUb2tlbjtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVMb2NhbEFjY2Vzc1Rva2VuID0gKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdXNlclwiLCBKU09OLnN0cmluZ2lmeSh0b2tlbikpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVVzZXIgPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiX3VzZXJcIik7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tIFwic3RvcmVcIjtcblxuY29uc3Qgc3RvcmU6IGFueSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0b3JlUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBhbnkpIHtcbiAgcmV0dXJuIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PntjaGlsZHJlbn08L1Byb3ZpZGVyPjtcbn1cbiIsImltcG9ydCBhdXRoUmVkdWNlciBmcm9tIFwicmVkdWNlcnMvYXV0aFwiO1xuaW1wb3J0IGNoYW5uZWxSZWR1Y2VyIGZyb20gXCJyZWR1Y2Vycy9jaGFubmVsXCI7XG5pbXBvcnQgY2hhdFJlZHVjZXIgZnJvbSBcInJlZHVjZXJzL2NoYXRcIjtcbmltcG9ydCBhcHBSZWR1Y2VyIGZyb20gXCJyZWR1Y2Vycy9hcHBcIjtcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwicmVkdXgtbG9nZ2VyXCI7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IGFwcE1pZGRsZXdhcmUgZnJvbSBcIi4vbWlkZGxld2FyZXMvYXBwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICBjb25zdCBtaWRkbGV3YXJlcyA9IFt0aHVua01pZGRsZXdhcmUsIGFwcE1pZGRsZXdhcmVdO1xuXG4gIGNvbnN0IG1haW5SZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBjaGFubmVsOiBjaGFubmVsUmVkdWNlcixcbiAgICBhdXRoOiBhdXRoUmVkdWNlcixcbiAgICBhcHA6IGFwcFJlZHVjZXIsXG4gICAgY2hhdDogY2hhdFJlZHVjZXIsXG4gIH0pO1xuXG4gIGNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBcIkFVVEhfTE9HT1VUX1NVQ0NFU1NcIikge1xuICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1haW5SZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9O1xuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzLCBsb2dnZXIpXG4gICk7XG5cbiAgcmV0dXJuIHN0b3JlO1xufVxuIiwiaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwidXRpbHMvbm90aWZpY2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChzdG9yZTogYW55KSA9PiAobmV4dDogYW55KSA9PiAoYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJBUFBfSVNfT05MSU5FXCI6XG4gICAgY2FzZSBcIkFQUF9JU19PRkZMSU5FXCI6IHtcbiAgICAgIE5vdGlmaWNhdGlvbi5zaG93KHtcbiAgICAgICAgdGl0bGU6IFwiQ29ubmVjdGlvbiBzdGF0dXM6XCIsXG4gICAgICAgIGJvZHk6IGFjdGlvbi5pc09ubGluZSA/IFwiT25saW5lXCIgOiBcIk9mZmxpbmVcIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNhc2UgXCJBVVRIX0xPR0dPVVRfU1VDQ0VTU1wiOiB7XG4gICAgLy8gICBjb25zdCB7IG1lc3NhZ2VzU3VicyB9ID0gc3RvcmUuZ2V0U3RhdGUoKS5jaGF0cztcblxuICAgIC8vICAgaWYgKG1lc3NhZ2VzU3Vicykge1xuICAgIC8vICAgICBPYmplY3Qua2V5cyhtZXNzYWdlc1N1YnMpLmZvckVhY2goKG1lc3NhZ2VTdWIpID0+IHtcbiAgICAvLyAgICAgICBtZXNzYWdlc1N1YnNbbWVzc2FnZVN1Yl0oKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgbmV4dChhY3Rpb24pO1xufTtcbiIsImNvbnN0IHJlbW92ZUVtb2ppcyA9IChzdHJpbmc6IHN0cmluZykgPT4ge1xuICBjb25zdCByZWdleCA9XG4gICAgLyg/OltcXHUyNzAwLVxcdTI3YmZdfCg/OlxcdWQ4M2NbXFx1ZGRlNi1cXHVkZGZmXSl7Mn18W1xcdWQ4MDAtXFx1ZGJmZl1bXFx1ZGMwMC1cXHVkZmZmXXxbXFx1MDAyMy1cXHUwMDM5XVxcdWZlMGY/XFx1MjBlM3xcXHUzMjk5fFxcdTMyOTd8XFx1MzAzZHxcXHUzMDMwfFxcdTI0YzJ8XFx1ZDgzY1tcXHVkZDcwLVxcdWRkNzFdfFxcdWQ4M2NbXFx1ZGQ3ZS1cXHVkZDdmXXxcXHVkODNjXFx1ZGQ4ZXxcXHVkODNjW1xcdWRkOTEtXFx1ZGQ5YV18XFx1ZDgzY1tcXHVkZGU2LVxcdWRkZmZdfFtcXHVkODNjW1xcdWRlMDFcXHVkZGZmXXxcXHVkODNjW1xcdWRlMDEtXFx1ZGUwMl18XFx1ZDgzY1xcdWRlMWF8XFx1ZDgzY1xcdWRlMmZ8W1xcdWQ4M2NbXFx1ZGUzMlxcdWRlMDJdfFxcdWQ4M2NcXHVkZTFhfFxcdWQ4M2NcXHVkZTJmfFxcdWQ4M2NbXFx1ZGUzMi1cXHVkZTNhXXxbXFx1ZDgzY1tcXHVkZTUwXFx1ZGUzYV18XFx1ZDgzY1tcXHVkZTUwLVxcdWRlNTFdfFxcdTIwM2N8XFx1MjA0OXxbXFx1MjVhYS1cXHUyNWFiXXxcXHUyNWI2fFxcdTI1YzB8W1xcdTI1ZmItXFx1MjVmZV18XFx1MDBhOXxcXHUwMGFlfFxcdTIxMjJ8XFx1MjEzOXxcXHVkODNjXFx1ZGMwNHxbXFx1MjYwMC1cXHUyNkZGXXxcXHUyYjA1fFxcdTJiMDZ8XFx1MmIwN3xcXHUyYjFifFxcdTJiMWN8XFx1MmI1MHxcXHUyYjU1fFxcdTIzMWF8XFx1MjMxYnxcXHUyMzI4fFxcdTIzY2Z8W1xcdTIzZTktXFx1MjNmM118W1xcdTIzZjgtXFx1MjNmYV18XFx1ZDgzY1xcdWRjY2Z8XFx1MjkzNHxcXHUyOTM1fFtcXHUyMTkwLVxcdTIxZmZdKS9nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0Vtb2ppc09ubHkgPSAoc3RyaW5nOiBzdHJpbmcpID0+XG4gIHJlbW92ZUVtb2ppcyhzdHJpbmcpLmxlbmd0aCA9PT0gMDtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0dXAoKSB7XG4gICAgaWYgKCEoXCJOb3RpZmljYXRpb25cIiBpbiB3aW5kb3cpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIHdpbmRvdyBkb2Vzbid0IHN1cHBvcnQgbm90aWZpY2F0aW9uXCIpO1xuICAgIH0gZWxzZSBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gXCJkZW5pZWRcIikge1xuICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocGVybWlzc2lvbikgPT4ge1xuICAgICAgICBpZiAocGVybWlzc2lvbiA9PT0gXCJncmFudGVkXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcm1pc3Npb24gaGFzIGJlZW4gZ3JhbnRlZCFcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgc2hvdyh7IHRpdGxlLCBib2R5IH06IGFueSkge1xuICAgIG5ldyBOb3RpZmljYXRpb24odGl0bGUsIHsgYm9keSB9KTtcbiAgfSxcbn07XG4iLCJleHBvcnQge1xuICAgIGRlZmF1bHQgYXMgc3R5bGVkLFxuICAgIGNzcyxcbiAgICBjcmVhdGVHbG9iYWxTdHlsZSxcbiAgICBrZXlmcmFtZXNcbiAgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbiAgZXhwb3J0IHR5cGUgeyBDU1NPYmplY3QgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbiAgIiwiaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSBcImRiL2ZpcmVzdG9yZVwiO1xuXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbWVzdGFtcCA9ICgpID0+IFRpbWVzdGFtcC5ub3coKS50b01pbGxpcygpLnRvU3RyaW5nKCk7XG5cblxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWVBZ28gPSAodGltZXN0YW1wOiBzdHJpbmcpID0+XG4gIG1vbWVudChwYXJzZUludCh0aW1lc3RhbXAsIDEwKSkuZnJvbU5vdygpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2stY2hhc2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbmltYXRpb246IHNrLWNoYXNlIDIuNXMgaW5maW5pdGUgbGluZWFyIGJvdGg7XFxufVxcblxcbi5zay1jaGFzZS1kb3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYW5pbWF0aW9uOiBzay1jaGFzZS1kb3QgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcXG59XFxuXFxuLnNrLWNoYXNlLWRvdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyNSU7XFxuICBoZWlnaHQ6IDI1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGFuaW1hdGlvbjogc2stY2hhc2UtZG90LWJlZm9yZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xcbn1cXG5cXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgxKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xcbn1cXG5cXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgyKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0xcztcXG59XFxuXFxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMykge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcXG59XFxuXFxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNCkge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcXG59XFxuXFxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNSkge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcXG59XFxuXFxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcXG59XFxuXFxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMSk6YmVmb3JlIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XFxufVxcblxcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0xcztcXG59XFxuXFxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMyk6YmVmb3JlIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XFxufVxcblxcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDQpOmJlZm9yZSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xcbn1cXG5cXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCg1KTpiZWZvcmUge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcXG59XFxuXFxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNik6YmVmb3JlIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2stY2hhc2Uge1xcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2stY2hhc2UtZG90IHtcXG4gIDgwJSwgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2stY2hhc2UtZG90LWJlZm9yZSB7XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuICB9XFxuICAxMDAlLCAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXIvTG9hZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLG9EQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJEQUFBO0FBQ0o7O0FBRUU7RUFDRSxzQkFBQTtBQUNKOztBQUNFO0VBQ0Usb0JBQUE7QUFFSjs7QUFBRTtFQUNFLHNCQUFBO0FBR0o7O0FBREU7RUFDRSxzQkFBQTtBQUlKOztBQUZFO0VBQ0Usc0JBQUE7QUFLSjs7QUFIRTtFQUNFLHNCQUFBO0FBTUo7O0FBSkU7RUFDRSxzQkFBQTtBQU9KOztBQUxFO0VBQ0Usb0JBQUE7QUFRSjs7QUFORTtFQUNFLHNCQUFBO0FBU0o7O0FBUEU7RUFDRSxzQkFBQTtBQVVKOztBQVJFO0VBQ0Usc0JBQUE7QUFXSjs7QUFURTtFQUNFLHNCQUFBO0FBWUo7O0FBVEU7RUFDRTtJQUNFLHlCQUFBO0VBWUo7QUFDRjtBQVRFO0VBQ0U7SUFFRSx5QkFBQTtFQVVKO0FBQ0Y7QUFQRTtFQUNFO0lBQ0UscUJBQUE7RUFTSjtFQVBFO0lBRUUsbUJBQUE7RUFRSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zay1jaGFzZSB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYW5pbWF0aW9uOiBzay1jaGFzZSAyLjVzIGluZmluaXRlIGxpbmVhciBib3RoO1xcbiAgfVxcbiAgXFxuICAuc2stY2hhc2UtZG90IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGFuaW1hdGlvbjogc2stY2hhc2UtZG90IDJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XFxuICB9XFxuICBcXG4gIC5zay1jaGFzZS1kb3Q6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBoZWlnaHQ6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGFuaW1hdGlvbjogc2stY2hhc2UtZG90LWJlZm9yZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xcbiAgfVxcbiAgXFxuICAuc2stY2hhc2UtZG90Om50aC1jaGlsZCgxKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XFxuICB9XFxuICAuc2stY2hhc2UtZG90Om50aC1jaGlsZCgyKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTFzO1xcbiAgfVxcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMykge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xcbiAgfVxcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNCkge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xcbiAgfVxcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNSkge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xcbiAgfVxcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzO1xcbiAgfVxcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMSk6YmVmb3JlIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcXG4gIH1cXG4gIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTFzO1xcbiAgfVxcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMyk6YmVmb3JlIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcXG4gIH1cXG4gIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDQpOmJlZm9yZSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XFxuICB9XFxuICAuc2stY2hhc2UtZG90Om50aC1jaGlsZCg1KTpiZWZvcmUge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xcbiAgfVxcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNik6YmVmb3JlIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBzay1jaGFzZSB7XFxuICAgIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBzay1jaGFzZS1kb3Qge1xcbiAgICA4MCUsXFxuICAgIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBzay1jaGFzZS1kb3QtYmVmb3JlIHtcXG4gICAgNTAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuICAgIH1cXG4gICAgMTAwJSxcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jb250ZW50LXBhZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogNTZweDtcXG59XFxuXFxuI3Jvb3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaWNvblRhZyB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcblxcbi5pY29uMjQge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uaWNvbjQwIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmljb242MCB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5hdmF0YXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5jb250ZW50LXdyYXAge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmltYWdlLWNoYXQge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uYnRuLWhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5idG4taG92ZXI6aG92ZXIgLmltZy1ob3ZlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idG4taG92ZXI6aG92ZXIgLmltZy1zaG93IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5idG4taG92ZXIgLmltZy1ob3ZlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubG9hZGluZy1zY3JlZW4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgei1pbmRleDogOTkwO1xcbn1cXG4ubG9hZGluZy1zY3JlZW4gLmxvYWRpbmctdmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubG9hZGluZy1zY3JlZW4gLmxvYWRpbmctdmlldy1jb250YWluZXIge1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxuICB3aWR0aDogNDgwcHg7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MzBweCkge1xcbiAgLmxvYWRpbmctc2NyZWVuIC5sb2FkaW5nLXZpZXcgLmxvYWRpbmctdmlldy1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBNkJBOztFQUVFLFlBQUE7QUExQkY7O0FBNkJBOzs7Ozs7O0VBT0UsU0FBQTtBQTFCRjs7QUE0QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBekJGOztBQTRCQTtFQUNFLFlBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXpCRjs7QUE0QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBekJGOztBQTRCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXpCRjs7QUE0QkE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsYUFBQTtBQXpCRjs7QUE0QkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBekJGOztBQTJCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQXhCRjtBQTJCSTtFQUNFLHFCQUFBO0FBekJOO0FBNEJJO0VBQ0UsYUFBQTtBQTFCTjtBQThCRTtFQUNFLGFBQUE7QUE1Qko7O0FBK0JBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUE1QkY7QUE4QkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUE1Qko7QUE4Qkk7RUFDRSxhQUFBO0VBQ0EseUJBNUhLO0VBNkhMLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQTVCTjtBQStCSTtFQUNFO0lBQ0UsZ0JBQUE7RUE3Qk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcXG4kZ3JheS0xMDA6ICNmOGY5ZmMgIWRlZmF1bHQ7XFxuJGdyYXktMjAwOiAjZjRmNGY0ICFkZWZhdWx0O1xcbiRncmF5LTMwMDogI2RkZGZlYiAhZGVmYXVsdDtcXG4kZ3JheS00MDA6ICNkMWQzZTIgIWRlZmF1bHQ7XFxuJGdyYXktNTAwOiAjYjdiOWNjICFkZWZhdWx0O1xcbiRncmF5LTYwMDogIzg1ODc5NiAhZGVmYXVsdDtcXG4kZ3JheS03MDA6ICM2ZTcwN2UgIWRlZmF1bHQ7XFxuJGdyYXktODAwOiAjNWE1YzY5ICFkZWZhdWx0O1xcbiRncmF5LTkwMDogIzNhM2I0NSAhZGVmYXVsdDtcXG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XFxuXFxuJGJsdWU6ICM0ZTczZGYgIWRlZmF1bHQ7XFxuJGluZGlnbzogIzY2MTBmMiAhZGVmYXVsdDtcXG4kcHVycGxlOiAjNmY0MmMxICFkZWZhdWx0O1xcbiRwaW5rOiAjZTgzZThjICFkZWZhdWx0O1xcbiRyZWQ6ICNlNzRhM2IgIWRlZmF1bHQ7XFxuJG9yYW5nZTogI2ZkN2UxNCAhZGVmYXVsdDtcXG4keWVsbG93OiAjZjZjMjNlICFkZWZhdWx0O1xcbiRncmVlbjogIzFjYzg4YSAhZGVmYXVsdDtcXG4kdGVhbDogIzIwYzlhNiAhZGVmYXVsdDtcXG4kY3lhbjogIzM2YjljYyAhZGVmYXVsdDtcXG5cXG4vLyBDdXN0b20gQ29sb3JzXFxuJGJyYW5kLWdvb2dsZTogI2VhNDMzNSAhZGVmYXVsdDtcXG4kYnJhbmQtZmFjZWJvb2s6ICMzYjU5OTggIWRlZmF1bHQ7XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5jb250ZW50LXBhZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogNTZweDtcXG59XFxuXFxuI3Jvb3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaWNvblRhZyB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcblxcbi5pY29uMjQge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uaWNvbjQwIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmljb242MCB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5hdmF0YXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5jb250ZW50LXdyYXAge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmltYWdlLWNoYXQge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uYnRuLWhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgLmltZy1ob3ZlciB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB9XFxuXFxuICAgIC5pbWctc2hvdyB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmltZy1ob3ZlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5sb2FkaW5nLXNjcmVlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB6LWluZGV4OiA5OTA7XFxuXFxuICAubG9hZGluZy12aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgJi1jb250YWluZXIge1xcbiAgICAgIHotaW5kZXg6IDk5OTk7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktMjAwO1xcbiAgICAgIHdpZHRoOiA0ODBweDtcXG4gICAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgzMHB4KSB7XFxuICAgICAgLmxvYWRpbmctdmlldy1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLWJkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4tYmQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4taW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tc2dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1teFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLW14LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9maWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tZGV2YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1kZXZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vb2MtbG5jXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL29jLWxuYy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLW1vXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtbW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9hZGVyLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sIm5hbWVzIjpbImxpc3RlblRvQ29ubmVjdGlvbkNoYW5nZXMiLCJMb2FkaW5nVmlldyIsIkNoYW5uZWxWaWV3IiwiSG9tZVZpZXciLCJMb2dpblZpZXciLCJQcm9maWxlVmlldyIsIlNldHRpbmdzVmlldyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSZWRpcmVjdCIsIlJvdXRlIiwiU3dpdGNoIiwiZ2V0QWNjZXNzVG9rZW4iLCJTdG9yZVByb3ZpZGVyIiwic3R5bGVkIiwiSGVhZGVyIiwibGlzdGVuVG9BdXRoQ2hhbmdlcyIsIkF1dGhSb3V0ZSIsImNoaWxkcmVuIiwicmVzdCIsInRva2VuIiwidXNlciIsImF1dGgiLCJjb25zb2xlIiwibG9nIiwib25seUNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwicHJvcHMiLCJjbG9uZUVsZW1lbnQiLCJDb250ZW50V3JhcHBlciIsIk1vZU1lIiwiZGlzcGF0Y2giLCJpc09ubGluZSIsImFwcCIsImlzQ2hlY2tpbmciLCJ1bnN1YkZyb21BdXRoIiwidW5zdWJGcm9tQ29ubmVjdGlvbiIsIkFwcCIsIkNvbnRlbnRXcmFwcGVyQ1NTIiwiZGl2Iiwib25TdGF0dXNDaGFuZ2UiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJhY3Rpb24iLCJ0eXBlIiwiY29ubmVjdGlvbkhhbmRsZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFwaSIsImxvZ2luIiwiZm9ybURhdGEiLCJ0aGVuIiwiZXJyb3IiLCJsb2dvdXQiLCJfIiwib25BdXRoU3RhdGVDaGFuZ2VzIiwiYXV0aFVzZXIiLCJnZXRVc2VyUHJvZmlsZSIsInVpZCIsInVzZXJQcm9maWxlIiwiZGIiLCJnZXRDaGFubmVsTGlzdCIsInVzZXJJZCIsImdldExpc3RDaGFubmVsIiwiY2hhbm5lbCIsImZldGNoQ2hhbm5lbHMiLCJnZXRTdGF0ZSIsImNoYW5uZWxzIiwiZm9yRWFjaCIsImpvaW5lZFVzZXJzIiwibWFwIiwiaWQiLCJzb3J0ZWRDaGFubmVscyIsInJlZHVjZSIsImFjY3VDaGFubmVscyIsImluY2x1ZGVzIiwicHVzaCIsImpvaW5lZCIsImF2YWlsYWJsZSIsImZldGNoQ2hhbm5lbHNDb21wYXJlIiwiY2hhbm5lbHNDb21wYXJlIiwic3Vic2NyaWJlVG9DaGFubmVsIiwiY2hhbm5lbElkIiwiUHJvbWlzZSIsImFsbCIsInVzZXJSZWYiLCJnZXQiLCJ1c2VyU25hcHNob3QiLCJkYXRhIiwiam9pbkNoYW5uZWwiLCJzdWJzY3JpYmVUb1Byb2ZpbGUiLCJjcmVhdGVDaGFubmVsIiwibmV3Q2hhbm5lbCIsImFkbWluIiwiZG9jIiwic2VuZENoYW5uZWxNZXNzYWdlIiwibWVzc2FnZSIsIm5ld01lc3NhZ2UiLCJhdXRob3IiLCJzdWJzY3JpYmVUb01lc3NhZ2VzIiwiY2hhbmdlcyIsIm1lc3NhZ2VzIiwiY2hhbmdlIiwibWVzc2FnZVdpdGhBdXRob3IiLCJjYWNoZSIsInJlZ2lzdGVyTWVzc2FnZVN1YnNjcmlwdGlvbiIsIm1lc3NhZ2VTdWIiLCJzdWIiLCJheGlvc0NsaWVudCIsInJlbW92ZVVzZXIiLCJzZXRVc2VyIiwiZmlyZWJhc2UiLCJjcmVhdGVVc2VyUHJvZmlsZSIsImNvbGxlY3Rpb24iLCJzZXQiLCJleHRyYWN0U25hcHNob3REYXRhIiwic25hcHNob3QiLCJkb2NzIiwiZmV0Y2hVc2VycyIsInVzZXJQYXNzd29yZCIsInVybCIsInBhcmFtcyIsImRldmljZVR5cGUiLCJwb3N0IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc0xvZ2luIiwiZGF0YUZpcmViYXNlIiwiZW1haWwiLCJwYXNzd29yZCIsImxpc3RVc2VycyIsImR1cFVzZXIiLCJmaWx0ZXIiLCJsZW5ndGgiLCJsb2dpbkZpcmViYXNlIiwibG9naW5GaXJlQmFzZVJlcyIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXJQcm9maWxlUmVnaXN0ZXIiLCJ1c2VybmFtZSIsImF2YXRhciIsInByb2ZpbGVfaW1hZ2UiLCJhdGsiLCJydGsiLCJqb2luZWRDaGFubmVscyIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsIm9uQXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInJlamVjdCIsInJlc3BvbnNlIiwiYWRkIiwiZG9jUmVmIiwib25TdWJzcmliZSIsIm9uU25hcHNob3QiLCJjaGFubmVsUmVmIiwidXBkYXRlIiwiZmlyZXN0b3JlIiwiRmllbGRWYWx1ZSIsImFycmF5VW5pb24iLCJ0aW1lc3RhbXAiLCJkb2NDaGFuZ2VzIiwiY3NzIiwiYnJlYWtwb2ludHMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwicmVzcG9uc2l2ZSIsIk9iamVjdCIsImtleXMiLCJhY2N1bXVsYXRvciIsImxhYmVsIiwiY3VycmVuY3lGb3JtYXQiLCJTVE9JY29uIiwiT1JHSWNvbiIsIlBFUkljb24iLCJTUExJY29uIiwidXNlSGlzdG9yeSIsIkNhcmRDaGFubmVsIiwib25DbGljayIsImlzR29DaGFubmVsIiwiaGlzdG9yeSIsInJlbmRlckNoYW5uZWxUeXBlIiwiY2hhbm5lbFR5cGUiLCJvbkNob29zZUNoYW5uZWwiLCJhc2tGb3JDb25maXJtdGlvbk9sZENoYW5uZWwiLCJhc2tGb3JDb25maXJtdGlvbk5ld0NoYW5uZWwiLCJpc0NvbmZpcm1pbmciLCJjb25maXJtIiwicm9vbV9uYW1lIiwicm9vbV9wcm9maWxlX2ltYWdlIiwiY2hubF90eXBlIiwiTnVtYmVyIiwidW5yZWFkIiwib3duZXJJZCIsInJvb21JZCIsIm93bmVyX25hbWUiLCJ1c2VyQ291bnQiLCJDYXJkQ2hhbm5lbFN0eWxlZCIsIlRpdGxlIiwiQ2hhbm5lbExpc3QiLCJpbmRleCIsIkNoYW5uZWxMaXN0U3R5bGVkIiwiSWNvblN0b2NrVG9wIiwiSWNvblNlYXJjaCIsIkljb25Nb3JlTWVudSIsIkNoYXRCYXIiLCJDaGF0QmFyU3R5bGVkIiwiU3RvY2tzIiwiZm9ybWF0VGltZUFnbyIsImlzRW1vamlzT25seSIsIkNoYXRNZXNzYWdlTGlzdCIsImlubmVyUmVmIiwiaXNBdXRob3JPZiIsImlkeCIsInN0b2NrcyIsImZpbGVzIiwiZmlsZVR5cGUiLCJwYXJzZSIsIklEIiwiY29udGVudCIsIkNoYXRNZXNzYWdlTGlzdFN0eWxlZCIsInVzZVN0YXRlIiwiSWNvblRyYXNoIiwiSWNvblNwZWFrZXIiLCJJY29uQnJpbmciLCJJY29uTWljIiwiSWNvbkVkaXQiLCJJY29uU3RvY2siLCJDcmVhdGVTdG9jayIsInY0IiwidXVpZHY0IiwiY3JlYXRlVGltZXN0YW1wIiwiQ2hhdE9wdGlvbnMiLCJzdWJtaXRTdG9jayIsImlzT3BlblN0b2NrIiwic2V0SXNPcGVuU3RvY2siLCJfbWVzc2FnZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibXl1dWlkIiwib25TdWJtaXQiLCJpZE1lc3NhZ2UiLCJDaGF0T3B0aW9uc1N0eWxlZCIsIkljb25DbG9zZUdyZXkiLCJ1c2VGb3JtIiwiQnV0dG9uIiwiY2xvc2VGdW5jIiwic3VibWl0Rm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiQ3JlYXRlU3RvY2tTdHlsZWQiLCJ1c2VSZWYiLCJJY29uRmlsZUdyZXkiLCJJY29uRmlsZUhvdmVyIiwiSWNvblNjcmVlblNob3RHcmV5IiwiSWNvblNjcmVlblNob3RIb3ZlciIsIkljb25DaGF0R3JleSIsIkljb25DaGF0Qmx1ZSIsIkVtb2ppUGlja2VyIiwiTWVzc2FuZ2VyIiwic2VsZWN0ZWRJbWFnZSIsInNldFNlbGVjdGVkSW1hZ2UiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaXNPcGVuRW1vaiIsInNldElzT3BlbkVtb2oiLCJ0ZXh0YXJlYVJlZiIsImVtb2ppRGF0YSIsImV2ZW50IiwidGV4dEFyZWFFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN1YnN0ciIsInNlbGVjdGlvblN0YXJ0IiwiZW1vamkiLCJzZWxlY3Rpb25FbmQiLCJpbWFnZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpbWFnZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0Iiwib25LZXlQcmVzcyIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic2VuZE1lc3NhZ2UiLCJoYW5kbGVyIiwiaW5wdXRCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidHJpbSIsImNhcHR1cmUiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJ2aWRlbyIsIm1lZGlhRGV2aWNlcyIsImdldERpc3BsYXlNZWRpYSIsImNhcHR1cmVTdHJlYW0iLCJzcmNPYmplY3QiLCJkcmF3SW1hZ2UiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJmcmFtZSIsInRvRGF0YVVSTCIsImdldFRyYWNrcyIsInRyYWNrIiwic3RvcCIsImxvY2F0aW9uIiwiaHJlZiIsImN1cnJlbnQiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsIk1lc3NhbmdlclN0eWxlZCIsIkxpbmsiLCJDaGF0MSIsIkNoYXQyIiwiUGVyc29uIiwiSG9tZSIsIk5hdmJhciIsIk5hdmJhclN0eWxlZCIsIk5ld0NoYW5uZWxzIiwiYXZhaWxhYmxlQ2hhbm5lbHMiLCJzZXRJc0dvQ2hhbm5lbCIsImlkcyIsIlNldCIsImlkc0NoYW5uZWxzIiwiaGFzIiwicm9vbV90eXBlIiwib3duc2VySWQiLCJBdmFpbGFibGVDaGF0c1N0eWxlZCIsIkxvYWRlciIsIkljb25TdG9ja0JsdWUiLCJuYW1lIiwicHJpY2VCdXkiLCJwcmljZVNlbGwiLCJwcmljZUN1dG9mZiIsInVzZXJOYW1lIiwiU3RvY2tzU3R5bGVkIiwiVGl0bGVTdHlsZWQiLCJDT0xPUlMiLCJjbGFzc05hbWUiLCJpbnB1dENvbG9yIiwiZGlzYWJsZWQiLCJyZW5kZXJDb2xvciIsIkJMVUUiLCJXSElURSIsIkJBQ0tHUk9VTkRfRElTQUJMRUQiLCJDT0xPUl9ESVNBQkxFRCIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsIkJ1dHRvbk5hbWUiLCJzcGFuIiwiTG9nb1RvcCIsIkhlYWRlclN0eWxlZCIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIlRpbWVzdGFtcCIsImluaXRpYWxpemVBcHAiLCJudW0iLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInN0YXRpc3RpY3NGb3JtYXQiLCJSZWFjdERPTSIsInJlbmRlciIsIndpdGhCYXNlTGF5b3V0IiwiQ29tcG9uZW50IiwiQmFzZUxheW91dFN0eWxlZCIsIkNoYXQiLCJ1c2VQYXJhbXMiLCJDaGFubmVsIiwicHJvZmlsZSIsImFjdGl2ZUNoYW5uZWwiLCJhY3RpdmVDaGFubmVscyIsInVuc3ViRnJvbUNoYW5uZWwiLCJDaGFubmVsU3R5bGVkIiwidXNlQ2FsbGJhY2siLCJwZW9wbGVXYXRjaGVycyIsIm1lc3NhZ2VTdWJzIiwibWVzc2FnZUxpc3RSZWYiLCJ1bnN1YkZyb21NZXNzYWdlcyIsInVuc3ViRnJvbUpvaW5lZFVzZXJzIiwic3Vic2NyaWJlVG9Kb2luZWRVc2VycyIsIkpVc2VycyIsInNjcm9sbEludG9WaWV3IiwiQ2hhdFN0eWxlZCIsIkhvbWVTdHlsZWQiLCJMb2dvV2F2ZSIsIkxvZ2luIiwib2JTdWJtaXQiLCJMb2dpblN0eWxlZCIsIlByb2ZpbGUiLCJQcm9maWxlU3R5bGVkIiwiU2V0dGluZ3MiLCJTZXR0aW5nc1N0eWxlZCIsImNvbWJpbmVSZWR1Y2VycyIsImNyZWF0ZUFwcFJlZHVjZXIiLCJzdGF0ZSIsImNyZWF0ZUVycm9yUmVkdWNlciIsImNyZWF0ZUlzRmV0Y2hpbmdSZWR1Y2VyIiwiY3JlYXRlTG9naW5SZWR1Y2VyIiwiY3JlYXRlQXV0aFJlZHVjZXIiLCJjcmVhdGVSZWR1Y2VyIiwiY3JlYXRlQ2hhbm5lbFJlZHVjZXIiLCJDSEFOTkVMU19TRVRfQUNUSVZFX0NIQU5ORUwiLCJDSEFOTkVMU19VUERBVEVfVVNFUl9TVEFURSIsImZpbmRJbmRleCIsImp1IiwiY2hhbm5lbERldGFpbCIsIkNIQU5ORUxTX1NFVF9NRVNTQUdFUyIsInByZXZNZXNzYWdlIiwiY3JlYXRlQ2hhdFJlZHVjZXIiLCJDSEFUU19TRVRfTUVTU0FHRVMiLCJjaGF0SWQiLCJhY3Rpb25UeXBlIiwibG9nb3V0UmVkdWNlciIsIl91c2VyIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJzZXRJdGVtIiwiZ2V0VXNlciIsImdldExvY2FsUmVmcmVzaFRva2VuIiwidXBkYXRlTG9jYWxBY2Nlc3NUb2tlbiIsInJlbW92ZUl0ZW0iLCJQcm92aWRlciIsImNvbmZpZ3VyZVN0b3JlIiwic3RvcmUiLCJhdXRoUmVkdWNlciIsImNoYW5uZWxSZWR1Y2VyIiwiY2hhdFJlZHVjZXIiLCJhcHBSZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJsb2dnZXIiLCJ0aHVua01pZGRsZXdhcmUiLCJhcHBNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJtYWluUmVkdWNlciIsImNoYXQiLCJyb290UmVkdWNlciIsInVuZGVmaW5lZCIsIk5vdGlmaWNhdGlvbiIsIm5leHQiLCJzaG93IiwidGl0bGUiLCJib2R5IiwicmVtb3ZlRW1vamlzIiwic3RyaW5nIiwicmVnZXgiLCJzZXR1cCIsInBlcm1pc3Npb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsImRlZmF1bHQiLCJjcmVhdGVHbG9iYWxTdHlsZSIsImtleWZyYW1lcyIsIm1vbWVudCIsIm5vdyIsInRvTWlsbGlzIiwidG9TdHJpbmciLCJwYXJzZUludCIsImZyb21Ob3ciXSwic291cmNlUm9vdCI6IiJ9
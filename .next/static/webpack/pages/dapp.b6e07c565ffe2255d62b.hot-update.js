"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dapp",{

/***/ "./src/components/Marketplace.js":
/*!***************************************!*\
  !*** ./src/components/Marketplace.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MarketPlace; }\n/* harmony export */ });\n/* harmony import */ var _Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/web3 */ \"./src/utils/web3.js\");\n/* harmony import */ var _utils_web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shared_NFTCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/NFTCard */ \"./src/components/shared/NFTCard.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/atoo/Desktop/promelo-frontend/src/components/Marketplace.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MarketPlace() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      nfts = _useState[0],\n      setNfts = _useState[1]; // const fetchNFTs = async () => {\n  //     const nfts = await getAllNfts()\n  //     setNfts(nfts)\n  // };\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchNFTs = /*#__PURE__*/function () {\n      var _ref = (0,_Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var nfts;\n        return _Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return (0,_utils_web3__WEBPACK_IMPORTED_MODULE_3__.getAllNfts)(_utils_web3__WEBPACK_IMPORTED_MODULE_3__.loanContractAddress);\n\n              case 2:\n                nfts = _context.sent;\n                setNfts(nfts);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchNFTs() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchNFTs();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"p-4 rounded shadow-md space-y-2\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n      className: \"text-xl font-bold\",\n      children: \"MarketPlace\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_shared_NFTCard__WEBPACK_IMPORTED_MODULE_4__.default, {\n      nfts: nfts\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, this);\n}\n\n_s(MarketPlace, \"WoQOxielu1Zw1vsEZjYoUHnckyk=\");\n\n_c = MarketPlace;\n\nvar _c;\n\n$RefreshReg$(_c, \"MarketPlace\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYXJrZXRwbGFjZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ssV0FBVCxHQUF3QjtBQUFBOztBQUNuQyxrQkFBd0JKLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9LLElBQVA7QUFBQSxNQUFhQyxPQUFiLGdCQURtQyxDQUVuQztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1RLFNBQVM7QUFBQSw2UkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNLTix1REFBVSxDQUFDQyw0REFBRCxDQURmOztBQUFBO0FBQ1JHLGdCQUFBQSxJQURRO0FBRWRDLGdCQUFBQSxPQUFPLENBQUNELElBQUQsQ0FBUDs7QUFGYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFURSxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBSUFBLElBQUFBLFNBQVM7QUFDWixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0ksOERBQUMsb0RBQUQ7QUFBUyxVQUFJLEVBQUVGO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0dBdkJ1QkQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01hcmtldHBsYWNlLmpzPzNkYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0QWxsTmZ0cywgbG9hbkNvbnRyYWN0QWRkcmVzcyB9IGZyb20gJy4uL3V0aWxzL3dlYjMnO1xyXG5pbXBvcnQgTkZUQ2FyZCBmcm9tICcuL3NoYXJlZC9ORlRDYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcmtldFBsYWNlICgpIHtcclxuICAgIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgLy8gY29uc3QgZmV0Y2hORlRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IG5mdHMgPSBhd2FpdCBnZXRBbGxOZnRzKClcclxuICAgIC8vICAgICBzZXROZnRzKG5mdHMpXHJcbiAgICAvLyB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaE5GVHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5mdHMgPSBhd2FpdCBnZXRBbGxOZnRzKGxvYW5Db250cmFjdEFkZHJlc3MpXHJcbiAgICAgICAgICAgIHNldE5mdHMobmZ0cylcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZldGNoTkZUcygpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQgc2hhZG93LW1kIHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5NYXJrZXRQbGFjZTwvaDI+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoTkZUc30gY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgR2V0IE5GVHNcclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8TkZUQ2FyZCBuZnRzPXtuZnRzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRBbGxOZnRzIiwibG9hbkNvbnRyYWN0QWRkcmVzcyIsIk5GVENhcmQiLCJNYXJrZXRQbGFjZSIsIm5mdHMiLCJzZXROZnRzIiwiZmV0Y2hORlRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Marketplace.js\n");

/***/ })

});
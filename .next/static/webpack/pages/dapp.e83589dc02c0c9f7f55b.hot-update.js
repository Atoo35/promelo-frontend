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

/***/ "./src/components/shared/NFTCard.js":
/*!******************************************!*\
  !*** ./src/components/shared/NFTCard.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTCard; }\n/* harmony export */ });\n/* harmony import */ var _Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/web3 */ \"./src/utils/web3.js\");\n/* harmony import */ var _utils_web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_web3__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/atoo/Desktop/promelo-frontend/src/components/shared/NFTCard.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction NFTCard(_ref) {\n  _s();\n\n  var _this = this;\n\n  var nfts = _ref.nfts;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var loanNFT = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(contractAddress, tokenID) {\n      return _Users_atoo_Desktop_promelo_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_utils_web3__WEBPACK_IMPORTED_MODULE_2__.approveLoanContract)(contractAddress, _utils_web3__WEBPACK_IMPORTED_MODULE_2__.loanContractAddress, tokenID, time.toString());\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loanNFT(_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    \"class\": \"bg-white\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      \"class\": \"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        \"class\": \"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n        children: nfts.map(function (nft) {\n          var _nft$media$;\n\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              \"class\": \"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-7 xl:aspect-w-6\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n                src: (_nft$media$ = nft.media[0]) === null || _nft$media$ === void 0 ? void 0 : _nft$media$.thumbnail,\n                alt: nft.title,\n                \"class\": \"h-full w-full object-cover object-center group-hover:opacity-75\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              \"class\": \"mt-4 flex justify-between\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n                  \"class\": \"text-sm text-gray-700\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n                      \"aria-hidden\": \"true\",\n                      \"class\": \"absolute inset-0\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 23,\n                      columnNumber: 45\n                    }, _this), nft.title, \" #\", nft.tokenId]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 22,\n                    columnNumber: 41\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 21,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n                  \"class\": \"mt-1 text-sm text-gray-500\",\n                  children: nft.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 27,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n                  \"class\": \"mt-1 text-sm text-gray-500\",\n                  children: [\"Contract address: \", \"\".concat(nft.contract.address.slice(0, 4), \"...\").concat(nft.contract.address.slice(nft.contract.address.length - 4, nft.contract.address))]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 28,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n                  type: \"number\",\n                  name: \"time\",\n                  value: time,\n                  onChange: function onChange(e) {\n                    return setTime(e.target.value);\n                  },\n                  placeholder: \"Time to loan (seconds)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 29,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n                  onClick: function onClick() {\n                    loanNFT(nft.contract.address, nft.tokenId);\n                  },\n                  \"class\": \"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded\",\n                  children: \"Approve\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 30,\n                  columnNumber: 37\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 20,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, this);\n}\n\n_s(NFTCard, \"ZvA5SmQV1aosV0jCQnw8cioyBM0=\");\n\n_c = NFTCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"NFTCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QURqRTtBQUVJLDJCQUFNLGlKQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURNO0FBQUEsU0FBVDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0NIOztHQXZDdUJiOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvTkZUQ2FyZC5qcz9mMGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcHJvdmVMb2FuQ29udHJhY3QsIGxvYW5Db250cmFjdEFkZHJlc3MgfSBmcm9tICcuLi8uLi91dGlscy93ZWIzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBORlRDYXJkICh7IG5mdHMgfSkge1xyXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IGxvYW5ORlQgPSBhc3luYyAoY29udHJhY3RBZGRyZXNzLCB0b2tlbklEKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXBwcm92ZUxvYW5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGxvYW5Db250cmFjdEFkZHJlc3MsIHRva2VuSUQsIHRpbWUudG9TdHJpbmcoKSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC1hdXRvIG1heC13LTJ4bCBweC00IHB5LTE2IHNtOnB4LTYgc206cHktMjQgbGc6bWF4LXctN3hsIGxnOnB4LThcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteC02IGdhcC15LTEwIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bmZ0cy5tYXAoKG5mdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFzcGVjdC1oLTEgYXNwZWN0LXctMSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctZ3JheS0yMDAgeGw6YXNwZWN0LWgtNyB4bDphc3BlY3Qtdy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25mdC5tZWRpYVswXT8udGh1bWJuYWlsfSBhbHQ9e25mdC50aXRsZX0gY2xhc3M9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImFic29sdXRlIGluc2V0LTBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25mdC50aXRsZX0gI3tuZnQudG9rZW5JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPntuZnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTEgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+Q29udHJhY3QgYWRkcmVzczoge2Ake25mdC5jb250cmFjdC5hZGRyZXNzLnNsaWNlKDAsIDQpfS4uLiR7bmZ0LmNvbnRyYWN0LmFkZHJlc3Muc2xpY2UobmZ0LmNvbnRyYWN0LmFkZHJlc3MubGVuZ3RoIC0gNCwgbmZ0LmNvbnRyYWN0LmFkZHJlc3MpfWB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJ0aW1lXCIgdmFsdWU9e3RpbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGltZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPSdUaW1lIHRvIGxvYW4gKHNlY29uZHMpJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGxvYW5ORlQobmZ0LmNvbnRyYWN0LmFkZHJlc3MsIG5mdC50b2tlbklkKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ibHVlLTUwMCB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwcm92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJhcHByb3ZlTG9hbkNvbnRyYWN0IiwibG9hbkNvbnRyYWN0QWRkcmVzcyIsInVzZVN0YXRlIiwiTkZUQ2FyZCIsIm5mdHMiLCJ0aW1lIiwic2V0VGltZSIsImxvYW5ORlQiLCJjb250cmFjdEFkZHJlc3MiLCJ0b2tlbklEIiwidG9TdHJpbmciLCJtYXAiLCJuZnQiLCJtZWRpYSIsInRodW1ibmFpbCIsInRpdGxlIiwidG9rZW5JZCIsImRlc2NyaXB0aW9uIiwiY29udHJhY3QiLCJhZGRyZXNzIiwic2xpY2UiLCJsZW5ndGgiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/shared/NFTCard.js\n");

/***/ })

});
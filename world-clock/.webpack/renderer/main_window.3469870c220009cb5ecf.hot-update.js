"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateworld_clock"]("main_window",{

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));\nvar DumbButton_1 = __webpack_require__(/*! ./DumbButton */ \"./src/DumbButton.tsx\");\nfunction App() {\n    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];\n    var handleAdd = (0, react_1.useCallback)(function () {\n        setCount(function (prevCount) { return prevCount + 1; });\n    }, [count, setCount]);\n    var handleSub = (0, react_1.useCallback)(function () {\n        setCount(function (prevCount) { return prevCount - 1; });\n    }, [count, setCount]);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"p\", null,\n            \"you clicked \",\n            count,\n            \" times.\"),\n        react_1.default.createElement(DumbButton_1.DumbButton, { onClick: handleAdd }, \"+\"),\n        react_1.default.createElement(DumbButton_1.DumbButton, { onClick: handleSub }, \"-\")));\n}\nReactDOM.render(react_1.default.createElement(App, null), document.querySelector(\"#root\"));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RkFBcUQ7QUFDckQsdUdBQXNDO0FBQ3RDLG1GQUEwQztBQUUxQyxTQUFTLEdBQUc7SUFDSixTQUFvQixvQkFBUSxFQUFDLENBQUMsQ0FBQyxFQUE5QixLQUFLLFVBQUUsUUFBUSxRQUFlLENBQUM7SUFFdEMsSUFBTSxTQUFTLEdBQUcsdUJBQVcsRUFBQztRQUM1QixRQUFRLENBQUMsVUFBQyxTQUFpQixJQUFLLGdCQUFTLEdBQUcsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXRCLElBQU0sU0FBUyxHQUFHLHVCQUFXLEVBQUM7UUFDNUIsUUFBUSxDQUFDLFVBQUMsU0FBaUIsSUFBSyxnQkFBUyxHQUFHLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUV0QixPQUFPLENBQ0w7UUFDRTs7WUFBZ0IsS0FBSztzQkFBWTtRQUNqQyw4QkFBQyx1QkFBVSxJQUFDLE9BQU8sRUFBRSxTQUFTLFFBQWdCO1FBQzlDLDhCQUFDLHVCQUFVLElBQUMsT0FBTyxFQUFFLFNBQVMsUUFBZ0IsQ0FDMUMsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQUVELFFBQVEsQ0FBQyxNQUFNLENBQUMsOEJBQUMsR0FBRyxPQUFHLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29ybGQtY2xvY2svLi9zcmMvYXBwLnRzeD9hNGI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IER1bWJCdXR0b24gfSBmcm9tIFwiLi9EdW1iQnV0dG9uXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVBZGQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Q291bnQoKHByZXZDb3VudDogbnVtYmVyKSA9PiBwcmV2Q291bnQgKyAxKTtcbiAgfSwgW2NvdW50LCBzZXRDb3VudF0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1YiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRDb3VudCgocHJldkNvdW50OiBudW1iZXIpID0+IHByZXZDb3VudCAtIDEpO1xuICB9LCBbY291bnQsIHNldENvdW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+eW91IGNsaWNrZWQge2NvdW50fSB0aW1lcy48L3A+XG4gICAgICA8RHVtYkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGR9Pis8L0R1bWJCdXR0b24+XG4gICAgICA8RHVtYkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJ9Pi08L0R1bWJCdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("72378f1f74e5642c2adc")
/******/ })();
/******/ 
/******/ }
);
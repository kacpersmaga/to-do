/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --gray: #e4e4e7;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: var(--gray);\r\n  font-family: \"Roboto\", sans-serif;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n/* Sidebar Styling */\r\n.side-bar {\r\n  background-color: #a1a1aa;\r\n  grid-column: 1;\r\n  padding: 20px;\r\n}\r\n\r\n/* Main Content Styling */\r\nmain {\r\n  grid-column: 2;\r\n  background-color: color-mix(in srgb, var(--gray) 50%, #a1a1aa 50%);\r\n  padding: 20px;\r\n}\r\n\r\n/* Filter Items */\r\n.filter-item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.filter-name {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.filter-items-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n/* Project Container */\r\n.projects-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n/* Project Header */\r\n.project-header {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.project-header button {\r\n  border: none;\r\n  background-color: #a1a1aa;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/* Project Items */\r\n.project {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.project button {\r\n  border: none;\r\n  background-color: #a1a1aa;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.project-options {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n/* Add Task Button */\r\n.add-task {\r\n  cursor: pointer;\r\n}\r\n\r\n.add-task-button {\r\n  border: none;\r\n  background-color: var(--gray);\r\n  border-radius: 10px;\r\n  font-size: 1rem;\r\n  font-family: \"Roboto\";\r\n  padding: 5px 10px;\r\n}\r\n\r\n/* Task Info Container */\r\n.task-info-container {\r\n  background-color: var(--gray);\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 0px 24px 5px rgb(0, 0, 0, 0.4);\r\n  width: 250px;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.task-info-container input,\r\n.task-info-container select {\r\n  border: none;\r\n  background-color: white;\r\n  border-radius: 10px;\r\n  min-width: 200px;\r\n  min-height: 25px;\r\n  text-align: center;\r\n  font-weight: 600;\r\n}\r\n\r\n/* Item Container */\r\n.item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* Decisive Buttons */\r\n.decisive-buttons {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n\r\n.decisive-buttons button {\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 10px;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n/* Project Item */\r\n.project-item {\r\n  background-color: var(--gray);\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 0px 24px 5px rgb(0, 0, 0, 0.4);\r\n  width: 250px;\r\n  font-size: 1.2rem;\r\n  margin-bottom: 15px;\r\n  text-align: center;\r\n  height: 150px;\r\n}\r\n\r\n/* Task Container */\r\n.task-container {\r\n  display: flex;\r\n  gap: 20px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n/* Task Checkbox */\r\n.task-checkbox {\r\n  position: relative;\r\n  left: 130px;\r\n  top: -10px;\r\n  appearance: none;\r\n  width: 15px;\r\n  height: 15px;\r\n  border: 2px solid orange;\r\n  background-color: orange;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Project Form */\r\n.project-form-container {\r\n  position: relative;\r\n  left: 650px;\r\n  top: 300px;\r\n}\r\n\r\n.project-form {\r\n  background-color: var(--gray);\r\n  height: 200px;\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 10px;\r\n}\r\n\r\n.project-form #project-form-name {\r\n  margin-bottom: 10px;\r\n  border: none;\r\n  padding: 3px 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.project-form #submit-button {\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 5px 10px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _ui_ProjectUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/ProjectUI.js */ \"./src/js/ui/ProjectUI.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const projectUI = new _ui_ProjectUI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    projectUI.init();\n});\n\n//# sourceURL=webpack://to-do/./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/Project.js":
/*!**********************************!*\
  !*** ./src/js/models/Project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n      this.name = name;\n      this.tasks = [];\n  }\n\n  addTask(task) {\n      this.tasks.push(task);\n  }\n\n  removeTask(taskName) {\n      this.tasks = this.tasks.filter(task => task.name !== taskName);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://to-do/./src/js/models/Project.js?");

/***/ }),

/***/ "./src/js/models/Task.js":
/*!*******************************!*\
  !*** ./src/js/models/Task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n  constructor(name, dueDate, priority, completed = false) {\n      this.name = name;\n      this.dueDate = dueDate;\n      this.priority = priority;\n      this.completed = completed;\n  }\n\n  toggleCompletion() {\n      this.completed = !this.completed;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://to-do/./src/js/models/Task.js?");

/***/ }),

/***/ "./src/js/repositories/ProjectRepository.js":
/*!**************************************************!*\
  !*** ./src/js/repositories/ProjectRepository.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_StorageService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/StorageService.js */ \"./src/js/services/StorageService.js\");\n/* harmony import */ var _models_Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Project.js */ \"./src/js/models/Project.js\");\n/* harmony import */ var _models_Task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Task.js */ \"./src/js/models/Task.js\");\n\n\n\n\nclass ProjectRepository {\n    static STORAGE_KEY = 'projects';\n\n    static getAllProjects() {\n        const data = _services_StorageService_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load(ProjectRepository.STORAGE_KEY);\n        if (!data) return [];\n\n        return data.map(projectData => {\n            const project = new _models_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectData.name);\n\n            const tasksData = projectData.tasks || [];\n            project.tasks = tasksData.map(taskData => new _models_Task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n                taskData.name,\n                taskData.dueDate,\n                taskData.priority,\n                taskData.completed\n            ));\n            return project;\n        });\n    }\n\n    static saveProject(project) {\n        const projects = ProjectRepository.getAllProjects();\n        const index = projects.findIndex(p => p.name === project.name);\n        if (index >= 0) {\n            projects[index] = project;\n        } else {\n            projects.push(project);\n        }\n        _services_StorageService_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].save(ProjectRepository.STORAGE_KEY, projects);\n    }\n\n    static deleteProject(projectName) {\n        const projects = ProjectRepository.getAllProjects();\n        const updatedProjects = projects.filter(project => project.name !== projectName);\n        _services_StorageService_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].save(ProjectRepository.STORAGE_KEY, updatedProjects);\n    }\n\n    static findProjectByName(projectName) {\n        const projects = ProjectRepository.getAllProjects();\n        return projects.find(project => project.name === projectName);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectRepository);\n\n\n//# sourceURL=webpack://to-do/./src/js/repositories/ProjectRepository.js?");

/***/ }),

/***/ "./src/js/services/StorageService.js":
/*!*******************************************!*\
  !*** ./src/js/services/StorageService.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass StorageService {\n    static save(key, data) {\n        localStorage.setItem(key, JSON.stringify(data));\n    }\n\n    static load(key) {\n        const data = localStorage.getItem(key);\n        return data ? JSON.parse(data) : null;\n    }\n\n    static remove(key) {\n        localStorage.removeItem(key);\n    }\n\n    static clear() {\n        localStorage.clear();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageService);\n\n\n//# sourceURL=webpack://to-do/./src/js/services/StorageService.js?");

/***/ }),

/***/ "./src/js/ui/ProjectUI.js":
/*!********************************!*\
  !*** ./src/js/ui/ProjectUI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _repositories_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/ProjectRepository.js */ \"./src/js/repositories/ProjectRepository.js\");\n/* harmony import */ var _models_Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Project.js */ \"./src/js/models/Project.js\");\n/* harmony import */ var _TaskUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskUI.js */ \"./src/js/ui/TaskUI.js\");\n\n\n\n\nclass ProjectUI {\n    constructor() {\n        this.projects = _repositories_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProjects();\n        this.taskUI = new _TaskUI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    }\n\n    init() {\n        this.renderProjects();\n        this.bindAddProjectButton();\n        this.bindFilterButtons();\n        this.updateTaskCounts();\n    }\n\n    bindAddProjectButton() {\n        const addProjectButton = document.getElementById('project-create-button');\n        addProjectButton.addEventListener('click', () => this.renderProjectForm());\n    }\n\n    bindFilterButtons() {\n        document.getElementById('filter-all').addEventListener('click', () => {\n            this.taskUI.renderAllTasks();\n        });\n        document.getElementById('filter-today').addEventListener('click', () => {\n            this.taskUI.renderTodayTasks();\n        });\n        document.getElementById('filter-completed').addEventListener('click', () => {\n            this.taskUI.renderCompletedTasks();\n        });\n    }\n\n    renderProjects() {\n        const projectsContainer = document.querySelector('.projects');\n        projectsContainer.innerHTML = '';\n\n        this.projects.forEach(project => {\n            const projectElement = this.createProjectElement(project);\n            projectsContainer.appendChild(projectElement);\n        });\n    }\n\n    createProjectElement(project) {\n        const projectElement = document.createElement('div');\n        projectElement.classList.add('project');\n        projectElement.innerHTML = `\n            <span class=\"project-name\"># ${project.name}</span>\n            <div class=\"project-options\">\n                <button class=\"delete-button\">×</button>\n            </div>\n        `;\n        this.bindProjectEvents(projectElement, project);\n        return projectElement;\n    }\n\n    bindProjectEvents(projectElement, project) {\n        projectElement.addEventListener('click', (e) => {\n            if (e.target.classList.contains('delete-button')) {\n                e.stopPropagation();\n                this.deleteProject(project.name);\n            } else {\n                this.taskUI.renderProjectTasks(project);\n            }\n        });\n    }\n\n    renderProjectForm() {\n        const main = document.querySelector('main');\n        main.innerHTML = '';\n\n        const projectFormContainer = document.createElement('div');\n        projectFormContainer.classList.add('project-form-container');\n        projectFormContainer.innerHTML = `\n            <form class=\"project-form\">\n                <h3 id=\"project-name-header\">Project Name</h3>\n                <input type=\"text\" name=\"project-form-name\" id=\"project-form-name\" required />\n                <input type=\"submit\" id=\"submit-button\" value=\"Create\" />\n            </form>\n        `;\n\n        main.appendChild(projectFormContainer);\n        this.bindProjectFormEvents();\n    }\n\n    bindProjectFormEvents() {\n        const form = document.querySelector('.project-form');\n        form.addEventListener('submit', (e) => {\n            e.preventDefault();\n            const projectName = document.querySelector('#project-form-name').value.trim();\n            if (projectName) {\n                const newProject = new _models_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName);\n                _repositories_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProject(newProject);\n                this.projects.push(newProject);\n                this.renderProjects();\n                this.taskUI.renderProjectTasks(newProject);\n            }\n        });\n    }\n\n    deleteProject(projectName) {\n        _repositories_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject(projectName);\n        this.projects = this.projects.filter(project => project.name !== projectName);\n        this.renderProjects();\n        this.updateTaskCounts();\n        const main = document.querySelector('main');\n        if (main.querySelector('h2') && main.querySelector('h2').textContent.includes(projectName)) {\n            main.innerHTML = '';\n        }\n    }\n\n    updateTaskCounts() {\n        this.taskUI.updateTaskCounts();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectUI);\n\n\n//# sourceURL=webpack://to-do/./src/js/ui/ProjectUI.js?");

/***/ }),

/***/ "./src/js/ui/TaskUI.js":
/*!*****************************!*\
  !*** ./src/js/ui/TaskUI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _repositories_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/ProjectRepository.js */ \"./src/js/repositories/ProjectRepository.js\");\n/* harmony import */ var _models_Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Task.js */ \"./src/js/models/Task.js\");\n\n\n\nclass TaskUI {\n    renderProjectTasks(project) {\n        const main = document.querySelector('main');\n        main.innerHTML = '';\n        \n        const projectPage = this.createProjectUI(project);\n        main.appendChild(projectPage);\n\n        this.renderTasks(project.tasks, project);\n        this.bindAddTaskButton(project);\n    }\n\n    createProjectUI(project) {\n        const allPage = document.createElement('div');\n        const header = document.createElement('h2');\n        const taskContainer = document.createElement('div');\n        const addTaskButton = document.createElement('button');\n\n        allPage.classList.add('page-container');\n        taskContainer.classList.add('task-container');\n        addTaskButton.classList.add('add-task-button');\n\n        header.innerText = `${project.name} To-Dos`;\n        addTaskButton.textContent = 'Add a new task';\n\n        allPage.append(header, taskContainer, addTaskButton);\n        return allPage;\n    }\n\n    renderTasks(tasks, project = null) {\n        const taskContainer = document.querySelector('.task-container');\n        taskContainer.innerHTML = '';\n        tasks.forEach(task => {\n            const taskElement = this.createTaskElement(task, project);\n            taskContainer.appendChild(taskElement);\n        });\n    }\n\n    createTaskElement(task, project) {\n        const taskElement = document.createElement('div');\n        taskElement.classList.add('project-item');\n\n\n        taskElement.innerHTML = `\n            <p class=\"task-name\">${task.name}</p>\n            <p class=\"due-date\">Due: ${task.dueDate}</p>\n            <p class=\"priority\">Priority: ${task.priority}</p>\n            <input type=\"checkbox\" class=\"task-checkbox\" ${task.completed ? 'checked' : ''}>\n        `;\n\n        this.bindTaskEvents(taskElement, task, project);\n        return taskElement;\n    }\n\n    bindTaskEvents(taskElement, task, project) {\n        const checkbox = taskElement.querySelector('.task-checkbox');\n        checkbox.addEventListener('change', () => {\n            task.toggleCompletion();\n            if (project) {\n                _repositories_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProject(project);\n            }\n            this.updateTaskCounts();\n        });\n    }\n\n    bindAddTaskButton(project) {\n        const addTaskButton = document.querySelector('.add-task-button');\n        addTaskButton.addEventListener('click', () => {\n            this.renderTaskForm(project);\n        });\n    }\n\n    renderTaskForm(project) {\n        const main = document.querySelector('main');\n        main.innerHTML = '';\n\n        const taskFormContainer = document.createElement('div');\n        taskFormContainer.classList.add('task-info-container');\n        taskFormContainer.innerHTML = `\n            <form class=\"task-form\">\n                <div class=\"item\">\n                    <label for=\"task-name\">Task</label>\n                    <input type=\"text\" id=\"task-name\" name=\"task-name\" required />\n                </div>\n                <div class=\"item\">\n                    <label for=\"due-date\">Due Date</label>\n                    <input type=\"date\" id=\"due-date\" name=\"due-date\" required />\n                </div>\n                <div class=\"item\">\n                    <label for=\"priority\">Priority</label>\n                    <select id=\"priority\" name=\"priority\" required>\n                        <option value=\"\" disabled selected>Select priority</option>\n                        <option value=\"High\">High</option>\n                        <option value=\"Medium\">Medium</option>\n                        <option value=\"Low\">Low</option>\n                    </select>\n                </div>\n                <div class=\"decisive-buttons\">\n                    <button type=\"submit\" id=\"submit-task\">Add</button>\n                    <button type=\"button\" id=\"cancel-task\">Cancel</button>\n                </div>\n            </form>\n        `;\n\n        main.appendChild(taskFormContainer);\n        this.bindTaskFormEvents(project);\n    }\n\n    bindTaskFormEvents(project) {\n        const form = document.querySelector('.task-form');\n        form.addEventListener('submit', (e) => {\n            e.preventDefault();\n            const taskName = form.querySelector('#task-name').value.trim();\n            const dueDate = form.querySelector('#due-date').value;\n            const priority = form.querySelector('#priority').value;\n\n            if (taskName && dueDate && priority) {\n                const newTask = new _models_Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskName, dueDate, priority);\n                project.addTask(newTask);\n                _repositories_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProject(project);\n                this.renderProjectTasks(project);\n                this.updateTaskCounts();\n            }\n        });\n\n        const cancelButton = document.getElementById('cancel-task');\n        cancelButton.addEventListener('click', () => {\n            this.renderProjectTasks(project);\n        });\n    }\n\n    renderAllTasks() {\n        const projects = _repositories_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProjects();\n        let allTasks = [];\n        projects.forEach(project => {\n            allTasks = allTasks.concat(project.tasks);\n        });\n        this.renderTasksPage('All Tasks', allTasks);\n    }\n\n    renderTodayTasks() {\n        const projects = _repositories_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProjects();\n        const today = new Date().toISOString().split('T')[0];\n        let todayTasks = [];\n        projects.forEach(project => {\n            const tasksDueToday = project.tasks.filter(task => task.dueDate === today);\n            todayTasks = todayTasks.concat(tasksDueToday);\n        });\n        this.renderTasksPage(\"Today's Tasks\", todayTasks);\n    }\n\n    renderCompletedTasks() {\n        const projects = _repositories_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProjects();\n        let completedTasks = [];\n        projects.forEach(project => {\n            const completed = project.tasks.filter(task => task.completed);\n            completedTasks = completedTasks.concat(completed);\n        });\n        this.renderTasksPage('Completed Tasks', completedTasks);\n    }\n\n    renderTasksPage(title, tasks) {\n        const main = document.querySelector('main');\n        main.innerHTML = '';\n\n        const pageContainer = document.createElement('div');\n        pageContainer.classList.add('page-container');\n\n        const header = document.createElement('h2');\n        header.innerText = title;\n\n        const taskContainer = document.createElement('div');\n        taskContainer.classList.add('task-container');\n\n        pageContainer.append(header, taskContainer);\n        main.appendChild(pageContainer);\n\n        this.renderTasks(tasks);\n        this.updateTaskCounts();\n    }\n\n    updateTaskCounts() {\n        const projects = _repositories_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProjects();\n        let allTasks = [];\n        let todayTasks = [];\n        let completedTasks = [];\n        const today = new Date().toISOString().split('T')[0];\n\n        projects.forEach(project => {\n            allTasks = allTasks.concat(project.tasks);\n            todayTasks = todayTasks.concat(project.tasks.filter(task => task.dueDate === today));\n            completedTasks = completedTasks.concat(project.tasks.filter(task => task.completed));\n        });\n\n        document.getElementById('all-count').textContent = allTasks.length;\n        document.getElementById('today-count').textContent = todayTasks.length;\n        document.getElementById('completed-count').textContent = completedTasks.length;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskUI);\n\n\n//# sourceURL=webpack://to-do/./src/js/ui/TaskUI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
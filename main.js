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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/close.svg */ \"./src/assets/close.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/check.svg */ \"./src/assets/check.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html {\n    background-color: rgb(50, 50, 50);\n    color: white;\n}\n\nbody {\n    margin: 0px;\n    display: grid;\n    height: 100vh;\n    grid-template: max-content 1fr / max-content 1fr;\n    gap: 1rem;\n}\n\nheader {\n    font-size: 5rem;\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    box-shadow: 0px 5px 10px rgb(21, 21, 21);\n    grid-column: 1/3;\n}\n\nh2 {\n    font-size: 2rem;\n    padding: 0px 20px;\n}\n\n.sidebar {\n    grid-column: 1/2;\n    display: flex;\n    flex-direction: column;\n    width: 250px;\n    background-color: rgb(50, 50, 50); \n    box-shadow: 10px 10px 10px rgb(30, 30, 30);\n}\n\n.sidebarProjectButton,\n.activeProject {\n    background-color: rgb(50, 50, 50);\n    color: white;\n    border: none;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.project-button {\n    background-color: rgba(50, 50, 50, 0);\n    color: white;\n    border: none;\n    font-size: 1.4rem;\n    width: 75%;\n    padding: 8px 20px;\n    text-align: start;\n    overflow: hidden;\n}\n\n.sidebarProjectButton:hover,\n.activeProject {\n    background-color: rgb(30, 30, 30);\n}\n\n.sidebar-projects > button:active {\n    outline: none;\n    box-shadow: inset 2px 2px 5px rgb(15, 15, 15);\n}\n\n.project-delete {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center;\n    border: none;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin-right: 10px;\n}\n\n.notes {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-template-rows: max-content;\n    gap: 10px;\n    margin-right: 10px;\n}\n\n.note-header,\n.sidebar-header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.note-header > button,\n.sidebar-header > button {\n    background-color: rgb(50, 50, 50);\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    border: none;\n    margin-right: 10px;\n}\n\n.note-header > button:hover,\n.sidebar-header > button:hover {\n    background-color: rgb(70, 70, 70);\n}\n\n.notes > div {\n    position: relative;\n    border-radius: 15px;\n    padding: 0px 15px;\n    height: max-content;\n    box-shadow: 2px 2px 10px 3px rgb(21, 21, 21);\n}\n\n.notes > div > p {\n    margin-top: 0px;\n    margin-bottom: 10px;\n}\n\n.del-button,\n.complete-button {\n    position: absolute;\n    top: 15px;\n    height: 30px;\n    width: 30px;\n    border-radius: 50%;\n    background-color: rgb(70, 70, 70);\n    border: none;\n}\n\n.complete-button {\n    right: 50px;\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center;\n}\n\n.del-button {\n    right: 15px;\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center;\n}\n\n.completed {\n    opacity: 50%;\n}\n\n.priority1 {\n    background-color: rgb(100, 0, 0);\n}\n\n.priority2 {\n    background-color: rgb(100, 65, 0);\n}\n\n.priority3 {\n    background-color: rgb(100, 100, 0);\n}\n\n.del-button:hover,\n.project-delete:hover {\n    background-color: rgba(255, 0, 0, 0.71);\n}\n\n.complete-button:hover {\n    background-color: rgba(0, 255, 0, 0.51);\n}\n\n.title-button {\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n    color: white;\n    font-size: 1.5rem;\n    width: 50%;\n    text-align: start;\n    padding: 15px 0px;\n    overflow: hidden;\n}\n\n#newNote,\n#newProject {\n    background-color: rgb(30, 30, 30);\n    color: white;\n    border: none;\n    border-radius: 20px;\n}\n\n#noteTitle,\n#noteDescription,\n#noteDate,\n#projectName {\n    display: flex;\n    flex-direction: column;\n}\n\n#notePriority {\n    display: flex;\n    justify-content: space-between;\n}\n\n.formButtons {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.formButtons > button {\n    background-color: rgb(30, 30, 30);\n    display: block;\n    color: white;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 5px;\n}\n\n.formButtons > button:hover {\n    background-color: rgb(50, 50, 50);\n}\n\n#noteForm,\n#projectForm {\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/assets/check.svg"
/*!******************************!*\
  !*** ./src/assets/check.svg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f9aa82dafdb66324be8e.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/check.svg?\n}");

/***/ },

/***/ "./src/assets/close.svg"
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7c767ef52235892c5fb8.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/close.svg?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDOM.js */ \"./src/projectDOM.js\");\n/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager.js */ \"./src/projectManager.js\");\n/* harmony import */ var _noteDialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noteDialog.js */ \"./src/noteDialog.js\");\n/* harmony import */ var _projectDialog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectDialog.js */ \"./src/projectDialog.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n\n//initializes the create, edit, and cancel buttons for the dialogs\n(0,_noteDialog_js__WEBPACK_IMPORTED_MODULE_2__.initNoteCancel)();\n(0,_projectDialog_js__WEBPACK_IMPORTED_MODULE_3__.initProjectCancel)();\n(0,_noteDialog_js__WEBPACK_IMPORTED_MODULE_2__.initNewNote)();\n(0,_projectDialog_js__WEBPACK_IMPORTED_MODULE_3__.initAddProject)();\n(0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.initProjects)();\n\n(0,_projectDOM_js__WEBPACK_IMPORTED_MODULE_0__.addSidebarListener)((id) => {\n        (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(id);\n        refreshview();\n    });\n\n//Makes new note and saves note id to pass along to delete note functionality\n(0,_noteDialog_js__WEBPACK_IMPORTED_MODULE_2__.attachNoteSubmit)((title, description, dueDate, priority) => {\n    (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)().addNote(title, description, dueDate, priority);\n    refreshview()\n}, (title, description, dueDate, priority, id) => {\n    (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)().editNote(title, description, dueDate, priority, id);\n    refreshview();\n});\n\n//Adds projects to project manager\n(0,_projectDialog_js__WEBPACK_IMPORTED_MODULE_3__.attachProjectSubmit)((title) => {\n    (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.addProject)(title);\n    refreshview();\n}, (title) => {\n    (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.editProjectName)(title, (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)().id);\n    refreshview();\n})\n\n//Refreshed the notes within each project\nfunction refreshview() {\n    ;(0,_projectDOM_js__WEBPACK_IMPORTED_MODULE_0__.displayProject)((0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)().notes, _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.deleteNote, (id) => {\n        ;(0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)().findNote(id).toggleCompleted();\n        (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.pushProjects)();\n    }, (id) => {\n        (0,_noteDialog_js__WEBPACK_IMPORTED_MODULE_2__.editNoteDiag)((0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)().findNote(id), updateNote);\n    });\n    projectSidebar();\n    (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.pushProjects)();\n}\n\n//Note update handler\nfunction updateNote(title, description = null, dueDate = null, priority = 1, id) {\n    (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)().editNote(title, description, dueDate, priority, id);\n    refreshview();\n}\n\n//Gets the projects in an array and creates a button and delete button for them\nfunction projectSidebar() {\n    (0,_projectDOM_js__WEBPACK_IMPORTED_MODULE_0__.clearSidebar)();\n    (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)().forEach((project) => {\n    (0,_projectDOM_js__WEBPACK_IMPORTED_MODULE_0__.addProjectToSidebar)((id) => {\n        if (id === (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)().id) {\n            (0,_projectDialog_js__WEBPACK_IMPORTED_MODULE_3__.editProject)(project);\n        }\n        else {\n            (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.setActiveProject)(project.id);\n            (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.pushProjects)();\n        }\n        refreshview();\n    }, project.name, project.id, (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)().id);\n})}\n\nrefreshview();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/note.js"
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Note)\n/* harmony export */ });\nclass Note {\n    constructor(title, description, dueDate, priority, completed = false, id = null) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.completed = completed;\n        this.id = id ? id : crypto.randomUUID();\n    };\n\n    updateNote(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n\n    toggleCompleted() {\n        this.completed = !this.completed;\n    }\n};\n\n//# sourceURL=webpack://todo-list/./src/note.js?\n}");

/***/ },

/***/ "./src/noteDOM.js"
/*!************************!*\
  !*** ./src/noteDOM.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearNoteCards: () => (/* binding */ clearNoteCards),\n/* harmony export */   createChild: () => (/* binding */ createChild),\n/* harmony export */   createNoteCard: () => (/* binding */ createNoteCard)\n/* harmony export */ });\nfunction createChild(element, content = null) {\n    const ele = document.createElement(element);\n    if (content) {ele.textContent = content};\n    return ele;\n}\n\nfunction createNoteCard(note, func, completeFunc, edit) {\n    const notes = document.querySelector(\".notes\");\n    const noteCard = createChild(\"div\");\n    const delButton = createChild(\"button\");\n    const complete = createChild(\"button\");\n    complete.setAttribute(\"class\", \"complete-button\");\n    complete.addEventListener(\"click\", () => {\n        completeFunc(note.id);\n        document.querySelector(`[data-id=\"${note.id}\"]`).classList.toggle(\"completed\");\n    })\n    //Creates the function that deletes each note\n    delButton.setAttribute(\"class\", \"del-button\");\n    delButton.addEventListener(\"click\", () => {\n        func(note.id);\n        document.querySelector(`[data-id=\"${note.id}\"]`).remove();\n    });\n    const title = createChild(\"button\", note.title);\n    //Makes the title and shows the update dialog when clicked\n    title.setAttribute(\"class\", \"title-button\");\n    title.addEventListener(\"click\", () => {\n        edit(note.id)});\n    if (note.completed) {noteCard.classList.toggle(\"completed\")};\n    noteCard.append(title, complete, delButton);\n    noteCard.classList.add(`priority${note.priority}`);\n    if (note.dueDate) { noteCard.appendChild(createChild(\"p\", note.dueDate))};\n    noteCard.setAttribute(\"data-id\", note.id);\n    notes.appendChild(noteCard);\n}\n\nfunction clearNoteCards() {\n    document.querySelector(\".notes\").innerHTML = '';\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/noteDOM.js?\n}");

/***/ },

/***/ "./src/noteDialog.js"
/*!***************************!*\
  !*** ./src/noteDialog.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attachNoteSubmit: () => (/* binding */ attachNoteSubmit),\n/* harmony export */   editNoteDiag: () => (/* binding */ editNoteDiag),\n/* harmony export */   initNewNote: () => (/* binding */ initNewNote),\n/* harmony export */   initNoteCancel: () => (/* binding */ initNoteCancel)\n/* harmony export */ });\nlet editingNote;\n\nfunction initNoteCancel() {\n    const cancelNote = document.querySelector(\"#closeNote\");\n    cancelNote.addEventListener(\"click\", () => {\n        document.querySelector(\"#noteForm\").reset();\n        document.querySelector(\"#newNote\").close();\n    });\n}\n\nfunction initNewNote() {\n    const newNoteButton = document.querySelector(\"#addNote\");\n    const submitNote = document.querySelector(\"#submitNote\");\n    newNoteButton.addEventListener(\"click\", () => {\n        submitNote.textContent = \"Add\";\n        editingNote = null;\n    })\n}\n\nfunction attachNoteSubmit(addFunc, editFunc) {\n    const submitNote = document.querySelector(\"#submitNote\");\n    submitNote.addEventListener(\"click\", () => {\n        const noteForm = new FormData(document.querySelector(\"#noteForm\"));\n        if (editingNote) {\n            if (noteForm.get(\"title\")) {\n                editFunc(noteForm.get(\"title\"), noteForm.get(\"description\"), noteForm.get(\"dueDate\"), noteForm.get(\"priority\"), editingNote.id);\n            };\n            editingNote = null;\n        }\n        else {\n            if (noteForm.get(\"title\")) {\n                addFunc(noteForm.get(\"title\"), noteForm.get(\"description\"), noteForm.get(\"dueDate\"), noteForm.get(\"priority\"));\n            };\n        }\n        document.querySelector(\"#noteForm\").reset();\n        document.querySelector(\"#newNote\").close();\n    });\n}\n\nfunction editNoteDiag(note) {\n    const noteDialog = document.querySelector(\"#newNote\");\n    const submitNote = document.querySelector(\"#submitNote\");\n    const noteForm = document.querySelector(\"#noteForm\");\n    //removing submit button and displaying edit button\n    submitNote.textContent = \"Update\";\n    editingNote = note;\n    document.querySelector(\"#title\").value = note.title;\n    document.querySelector(\"#description\").value = note.description;\n    document.querySelector(\"#dueDate\").value = note.dueDate;\n    document.querySelector(\"#priority\").value = note.priority;\n    noteDialog.showModal();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/noteDialog.js?\n}");

/***/ },

/***/ "./src/project.js"
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note.js */ \"./src/note.js\");\n\n\nclass Project {\n    constructor(name, id = null) {\n        this.name = name;\n        this.notes = [];\n        this.id = id ? id : crypto.randomUUID();\n    }\n\n    addNote(title, description = null, dueDate = null, priority = 1, completed) {\n        const newNote = new _note_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority, completed);\n        this.notes.push(newNote);\n        return newNote.id;\n    }\n\n    findNote(id) {\n        return this.notes.find((note) => note.id === id);\n    }\n\n    removeNote(id) {\n        this.notes = this.notes.filter((note) => note.id != id);\n    }\n\n    editNote(title, description = null, dueDate = null, priority = 1, id) {\n        this.findNote(id).updateNote(title, description, dueDate, priority);\n    }\n\n    editName(title) {\n        this.name = title;\n    }\n\n    reconstruct(notes) {\n        notes.forEach((note) => {\n            this.addNote(note.title, note.description, note.dueDate, note.priority, note.completed, note.id)\n        })\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/project.js?\n}");

/***/ },

/***/ "./src/projectDOM.js"
/*!***************************!*\
  !*** ./src/projectDOM.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectToSidebar: () => (/* binding */ addProjectToSidebar),\n/* harmony export */   addSidebarListener: () => (/* binding */ addSidebarListener),\n/* harmony export */   clearSidebar: () => (/* binding */ clearSidebar),\n/* harmony export */   displayProject: () => (/* binding */ displayProject)\n/* harmony export */ });\n/* harmony import */ var _noteDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noteDOM.js */ \"./src/noteDOM.js\");\n\n//calls NoteDOM to display the notes within each project\nfunction displayProject(notes, func, completeFunc, edit) {\n    (0,_noteDOM_js__WEBPACK_IMPORTED_MODULE_0__.clearNoteCards)();\n    notes.forEach((element) => {\n        (0,_noteDOM_js__WEBPACK_IMPORTED_MODULE_0__.createNoteCard)(element, func, completeFunc, edit);\n    });\n}\n\nfunction addProjectToSidebar(func, name, id, activeID) {\n    const sidebar = document.querySelector(\".sidebar-projects\");\n    const buttonDiv = (0,_noteDOM_js__WEBPACK_IMPORTED_MODULE_0__.createChild)(\"div\");\n    //sets the active project class\n    if (id == activeID) {\n        buttonDiv.setAttribute(\"class\", \"activeProject\");\n    }\n    else {\n        buttonDiv.setAttribute(\"class\", \"sidebarProjectButton\");\n    }\n    //creates the clickable project button, then the delete project button\n    const button = (0,_noteDOM_js__WEBPACK_IMPORTED_MODULE_0__.createChild)(\"button\", name);\n    const delButton = (0,_noteDOM_js__WEBPACK_IMPORTED_MODULE_0__.createChild)(\"button\");\n    delButton.className = \"project-delete\";\n    button.className = \"project-button\";\n    buttonDiv.setAttribute(\"data-projectid\", id);\n    delButton.setAttribute(\"data-projectid\", id);\n    //handles setting the active project when clicked\n    button.addEventListener(\"click\", () => {\n        func(id);\n        document.querySelector(\".activeProject\").classList.replace(\"activeProject\", \"sidebarProjectButton\");\n        document.querySelector(`[data-projectid=\"${id}\"]`).classList.replace(\"sidebarProjectButton\", \"activeProject\");\n    });\n    buttonDiv.append(button, delButton);\n    sidebar.appendChild(buttonDiv);\n}\n\nfunction clearSidebar() {\n    document.querySelector(\".sidebar-projects\").innerHTML = '';\n}\n//handles the deleting of projects\nfunction addSidebarListener(func) {\n    const sidebar = document.querySelector(\".sidebar-projects\");\n    sidebar.addEventListener(\"click\", (event) => {\n        if (event.target.getAttribute(\"class\") == \"project-delete\") {\n            const id = event.target.getAttribute(\"data-projectid\");\n            func(id);\n        }\n    })\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectDOM.js?\n}");

/***/ },

/***/ "./src/projectDialog.js"
/*!******************************!*\
  !*** ./src/projectDialog.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attachProjectSubmit: () => (/* binding */ attachProjectSubmit),\n/* harmony export */   editProject: () => (/* binding */ editProject),\n/* harmony export */   initAddProject: () => (/* binding */ initAddProject),\n/* harmony export */   initProjectCancel: () => (/* binding */ initProjectCancel)\n/* harmony export */ });\nlet editingProject = null;\n\nfunction initProjectCancel() {\n    const cancelProject = document.querySelector(\"#closeProject\");\n    cancelProject.addEventListener(\"click\", () => {\n        document.querySelector(\"#projectForm\").reset();\n        document.querySelector(\"#newProject\").close();\n    });\n}\n\nfunction initAddProject() {\n    const addButton = document.querySelector(\"#addProject\");\n    addButton.addEventListener(\"click\", () => {\n        document.querySelector(\"#submitProject\").textContent = \"Add\";\n        editingProject = null;\n    })\n}\n\nfunction attachProjectSubmit(addFunc, editFunc) {\n    const submitProject = document.querySelector(\"#submitProject\");\n    submitProject.addEventListener(\"click\", () => {\n        const projectForm = new FormData(document.querySelector(\"#projectForm\"));\n        if (editingProject) {\n            if (projectForm.get(\"projectTitle\")) {\n                editFunc(projectForm.get(\"projectTitle\"))\n            }\n            editingProject = null;\n        }\n        else {\n            if (projectForm.get(\"projectTitle\")) {\n                addFunc(projectForm.get(\"projectTitle\"));\n            };\n        }\n        \n        document.querySelector(\"#projectForm\").reset();\n        document.querySelector(\"#newProject\").close();\n    });\n}\n\nfunction editProject(project) {\n    const submitProject = document.querySelector(\"#submitProject\");\n    submitProject.textContent = \"Update\";\n    editingProject = project;\n    document.querySelector(\"#projectTitle\").value = project.name;\n    document.querySelector(\"#newProject\").showModal();\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectDialog.js?\n}");

/***/ },

/***/ "./src/projectManager.js"
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   deleteNote: () => (/* binding */ deleteNote),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   editProjectName: () => (/* binding */ editProjectName),\n/* harmony export */   getActiveProject: () => (/* binding */ getActiveProject),\n/* harmony export */   getProjects: () => (/* binding */ getProjects),\n/* harmony export */   initProjects: () => (/* binding */ initProjects),\n/* harmony export */   pushProjects: () => (/* binding */ pushProjects),\n/* harmony export */   setActiveProject: () => (/* binding */ setActiveProject)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\nlet projects = [];\nlet activeProject;\n\nfunction pushProjects() {\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectStorage)(activeProject, projects);\n}\n\nfunction initProjects() {\n    const stored = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getStored)();\n    if (stored.projects) {\n        activeProject = stored.activeProject;\n        stored.projects.forEach((project) => {\n            const newProj = addProject(project.name, project.id, false);\n            newProj.reconstruct(project.notes);\n        })\n    }\n    \n    if (projects.length == 0) {\n        addProject(\"New\");\n    }\n}\n\nfunction addProject(name, id, setActive = true) {\n    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, id);\n    projects.push(newProject);\n    if (setActive) {\n        activeProject = newProject.id;\n        pushProjects();\n    };\n    return newProject;\n}\n\nfunction deleteProject(id) {\n    projects = projects.filter((project) => project.id != id);\n    if (getProjects().length == 0) {\n        addProject(\"New\");\n    }\n    if (id === activeProject) {\n        setActiveProject(getProjects()[0].id);\n    }\n    pushProjects();\n}\n\nfunction findProject(id) {\n    return projects.find((project) => project.id === id);\n}\n\nfunction editProjectName(title, id) {\n    findProject(id).editName(title);\n    setActiveProject(id);\n    pushProjects();\n}\n\nfunction deleteNote(id) {\n    getActiveProject().removeNote(id);\n    pushProjects();\n}\n\nfunction getActiveProject() {\n    return projects.find((project) => project.id == activeProject);\n}\n\nfunction setActiveProject(id) {\n    activeProject = id;\n}\n\nfunction getProjects() {\n    return projects;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectManager.js?\n}");

/***/ },

/***/ "./src/storage.js"
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStored: () => (/* binding */ getStored),\n/* harmony export */   updateProjectStorage: () => (/* binding */ updateProjectStorage)\n/* harmony export */ });\nfunction getStored() {\n    try {\n        const projects = localStorage.getItem(\"projects\");\n        const activeProject = localStorage.getItem(\"active-project\");\n        if (!projects) {\n            return {};\n        }\n        return {\"activeProject\": activeProject, \"projects\": JSON.parse(projects)};\n    } catch (error) {\n        console.log(error);\n        return {};\n    }\n}\n\nfunction updateProjectStorage(activeProject, projects) {\n    localStorage.setItem(\"projects\", JSON.stringify(projects));\n    localStorage.setItem(\"active-project\", activeProject);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
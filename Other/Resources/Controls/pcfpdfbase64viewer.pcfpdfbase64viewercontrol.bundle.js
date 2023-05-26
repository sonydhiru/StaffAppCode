/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pcfpdfbase64viewercontrol/index.ts":
/*!********************************************!*\
  !*** ./pcfpdfbase64viewercontrol/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.pcfpdfbase64viewercontrol = void 0;\nvar pcfpdfbase64viewercontrol = /** @class */function () {\n  function pcfpdfbase64viewercontrol() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n  pcfpdfbase64viewercontrol.prototype.init = function (context, notifyOutputChanged, state, container) {\n    // Add control initialization code\n    this._container = container;\n    this._controlViewRendered = false;\n    context.mode.trackContainerResize(true);\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n  pcfpdfbase64viewercontrol.prototype.updateView = function (context) {\n    // Add code to update control view\n    if (!this._controlViewRendered) {\n      this._controlViewRendered = true;\n      this._Embed = document.createElement(\"iframe\");\n      this._Embed.setAttribute(\"name\", \"embedded\");\n      this._Embed.setAttribute(\"width\", \"100%\");\n      this._Embed.setAttribute(\"type\", \"application/pdf\");\n      this._container.appendChild(this._Embed);\n    }\n    var srcUrl = context.parameters.sourceProperty.raw;\n    this._Embed.setAttribute(\"height\", \"\".concat(context.mode.allocatedHeight, \"px\"));\n    srcUrl && this._Embed.setAttribute(\"src\", srcUrl);\n  };\n  pcfpdfbase64viewercontrol.prototype.printPDF = function (base64Data) {\n    var newWindow = window.open('', '', 'width=100, height=100');\n    if (newWindow) {\n      var document_1 = newWindow.document.open();\n      document_1.close();\n      newWindow.moveTo(0, 0);\n      newWindow.resizeTo(window.screen.width, window.screen.height);\n      var contentType = 'application/pdf';\n      document_1.write(\"<iframe id=\\\"pdfDocument\\\"\\n      src=\\\"\".concat(base64Data, \"\\\" \\n      width=\\\"100%\\\"\\n      height=\\\"100%\\\"\\n      frameBorder=\\\"0\\\" ></iframe>\"));\n    }\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n  pcfpdfbase64viewercontrol.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n  pcfpdfbase64viewercontrol.prototype.destroy = function () {\n    // Add code to cleanup control if necessary\n  };\n  return pcfpdfbase64viewercontrol;\n}();\nexports.pcfpdfbase64viewercontrol = pcfpdfbase64viewercontrol;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./pcfpdfbase64viewercontrol/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./pcfpdfbase64viewercontrol/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('pcfpdfbase64viewer.pcfpdfbase64viewercontrol', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.pcfpdfbase64viewercontrol);
} else {
	var pcfpdfbase64viewer = pcfpdfbase64viewer || {};
	pcfpdfbase64viewer.pcfpdfbase64viewercontrol = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.pcfpdfbase64viewercontrol;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}
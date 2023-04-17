"use strict";
(self["webpackChunklibrary"] = self["webpackChunklibrary"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --pumpkin: #ff6700ff;\n    --pumpkin-darker: #c55308;\n    --antiflash-white: #ebebebff;\n    --silver: #c0c0c0ff;\n    --bice-blue: #3a6ea5ff;\n    --polynesian-blue: #004e98ff;\n}\n\nhtml {\n    font-family: 'Poppins', Arial, sans-serif;\n}\n\nbody {\n    margin: 0;\n    height: 100vh;\n    background-color: var(--antiflash-white);\n}\n\n/* HEADER */\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px;\n    padding: 10px;\n    border-bottom: 5px solid var(--polynesian-blue);\n}\n\n#btn-new-book {\n    height: 2.5rem;\n    width: 7rem;\n    border-radius: 5px;\n    background-color: var(--pumpkin);\n    color: white;\n\n    border : none;\n    box-shadow: 1px 1px 1px var(--silver);\n\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\n#btn-new-book:hover{\n    cursor: pointer;\n    box-shadow: 1px 1px 1px var(--antiflash-white);\n}\n\n#btn-new-book:active{\n    cursor: pointer;\n    box-shadow: 1px 1px 1px var(--antiflash-white);\n    background-color: var(--pumpkin-darker);\n}\n/* MAIN - BOOK CARDS */\n\nmain {\n    min-height: 700px;\n    margin: 30px 0 10px;\n    padding: 20px;\n}\n\n/* book card */\n\n.books-containers{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    gap: 3rem;\n\n}\n\n\n.book-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    background-color: white;\n    min-height: 190px;\n    width: 220px;\n    overflow: hidden;\n    padding: 15px;\n\n    border-radius: 5px;\n    border:outset 1px var(--pumpkin);\n    box-shadow: 1px 1px 1px var(--pumpkin-darker);\n}\n\n\n.book-description p {\n    font-weight: 300;\n}\n\n.switch {\n    display: inline-block;\n    position: relative;\n    width: 50px;\n    height: 30px;\n    cursor: pointer;\n    overflow: hidden;\n}\n.switch input {\n    position: absolute;\n    top: -30px;\n    width: 0;\n    height: 0;\n}\n.switch input + span {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: #99b4df;\n    border-radius: 20px;\n}\n.switch input + span:before {\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    top: 50%;\n    left: 3px;\n    width: 22px;\n    height: 22px;\n    background: white;\n    border-radius: 50%;\n    transform: translateY(-50%);\n    transition: all .5s;\n}\n.switch input:checked + span {\n    background: #346abf;\n}\n.switch input:checked + span:before {\n    left: 25px;\n}\n\n.btn-del {\n    height: 2rem;\n    width: 6rem;\n    border-radius: 5px;\n    background-color: var(--pumpkin-darker);\n    color: white;\n    align-self: flex-end;\n\n    border : none;\n    box-shadow: 1px 1px 1px var(--silver);\n\n    font-weight: 600;\n    font-size: 1.1rem;\n\n}\n\n\n.btn-del:hover{\n    cursor: pointer;\n    box-shadow: 1px 1px 1px var(--antiflash-white);\n}\n\n.btn-del:active{\n    cursor: pointer;\n    box-shadow: 1px 1px 1px var(--antiflash-white);\n    background-color: var(--pumpkin-darker);\n}\n/*MODAL*/\n\n#modal-container{\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 9999;\n    background-color: rgba(0,0,0, 0.5);\n    display: none;\n}\n#modal-container.active {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.modal{\n    width: 300px;\n    background-color: var(--antiflash-white);\n\n    padding: 10px 0 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n#modalForm{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.inputField {\n    height: 1.5rem;\n    text-indent: 0.2rem;\n    min-width: 200px;\n    transition: all 0.2s ease-in-out;\n}\n\n.inputField:focus{\n    min-width: 250px;\n}\n\n#read{\n    margin-right: 10px;\n}\n\n#addBookModalBtn{\n    padding: 0.5rem 0 0.5rem;\n    font-weight: 500;\n    font-size: 1.3rem;\n    width: 200px;\n    background-color: var(--pumpkin);\n    color: white;\n}\n/* FOOTER */\nfooter {\n    display: flex;\n    justify-content: flex-end;\n    margin: 10px;\n}\nfooter p {\n    font-weight: 600;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,oBAAoB;IACpB,yBAAyB;IACzB,4BAA4B;IAC5B,mBAAmB;IACnB,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,SAAS;IACT,aAAa;IACb,wCAAwC;AAC5C;;AAEA,WAAW;AACX;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,+CAA+C;AACnD;;AAEA;IACI,cAAc;IACd,WAAW;IACX,kBAAkB;IAClB,gCAAgC;IAChC,YAAY;;IAEZ,aAAa;IACb,qCAAqC;;IAErC,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,8CAA8C;AAClD;;AAEA;IACI,eAAe;IACf,8CAA8C;IAC9C,uCAAuC;AAC3C;AACA,sBAAsB;;AAEtB;IACI,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;AACjB;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,eAAe;IACf,2BAA2B;IAC3B,SAAS;;AAEb;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,uBAAuB;IACvB,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;IAChB,aAAa;;IAEb,kBAAkB;IAClB,gCAAgC;IAChC,6CAA6C;AACjD;;;AAGA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,qBAAqB;IACrB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;IAC3B,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,uCAAuC;IACvC,YAAY;IACZ,oBAAoB;;IAEpB,aAAa;IACb,qCAAqC;;IAErC,gBAAgB;IAChB,iBAAiB;;AAErB;;;AAGA;IACI,eAAe;IACf,8CAA8C;AAClD;;AAEA;IACI,eAAe;IACf,8CAA8C;IAC9C,uCAAuC;AAC3C;AACA,QAAQ;;AAER;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,SAAS;IACT,QAAQ;IACR,aAAa;IACb,kCAAkC;IAClC,aAAa;AACjB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;AAE3B;;AAEA;IACI,YAAY;IACZ,wCAAwC;;IAExC,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,gCAAgC;IAChC,YAAY;AAChB;AACA,WAAW;AACX;IACI,aAAa;IACb,yBAAyB;IACzB,YAAY;AAChB;AACA;IACI,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700&display=swap');\n\n:root {\n    --pumpkin: #ff6700ff;\n    --pumpkin-darker: #c55308;\n    --antiflash-white: #ebebebff;\n    --silver: #c0c0c0ff;\n    --bice-blue: #3a6ea5ff;\n    --polynesian-blue: #004e98ff;\n}\n\nhtml {\n    font-family: 'Poppins', Arial, sans-serif;\n}\n\nbody {\n    margin: 0;\n    height: 100vh;\n    background-color: var(--antiflash-white);\n}\n\n/* HEADER */\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px;\n    padding: 10px;\n    border-bottom: 5px solid var(--polynesian-blue);\n}\n\n#btn-new-book {\n    height: 2.5rem;\n    width: 7rem;\n    border-radius: 5px;\n    background-color: var(--pumpkin);\n    color: white;\n\n    border : none;\n    box-shadow: 1px 1px 1px var(--silver);\n\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\n#btn-new-book:hover{\n    cursor: pointer;\n    box-shadow: 1px 1px 1px var(--antiflash-white);\n}\n\n#btn-new-book:active{\n    cursor: pointer;\n    box-shadow: 1px 1px 1px var(--antiflash-white);\n    background-color: var(--pumpkin-darker);\n}\n/* MAIN - BOOK CARDS */\n\nmain {\n    min-height: 700px;\n    margin: 30px 0 10px;\n    padding: 20px;\n}\n\n/* book card */\n\n.books-containers{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    gap: 3rem;\n\n}\n\n\n.book-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    background-color: white;\n    min-height: 190px;\n    width: 220px;\n    overflow: hidden;\n    padding: 15px;\n\n    border-radius: 5px;\n    border:outset 1px var(--pumpkin);\n    box-shadow: 1px 1px 1px var(--pumpkin-darker);\n}\n\n\n.book-description p {\n    font-weight: 300;\n}\n\n.switch {\n    display: inline-block;\n    position: relative;\n    width: 50px;\n    height: 30px;\n    cursor: pointer;\n    overflow: hidden;\n}\n.switch input {\n    position: absolute;\n    top: -30px;\n    width: 0;\n    height: 0;\n}\n.switch input + span {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: #99b4df;\n    border-radius: 20px;\n}\n.switch input + span:before {\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    top: 50%;\n    left: 3px;\n    width: 22px;\n    height: 22px;\n    background: white;\n    border-radius: 50%;\n    transform: translateY(-50%);\n    transition: all .5s;\n}\n.switch input:checked + span {\n    background: #346abf;\n}\n.switch input:checked + span:before {\n    left: 25px;\n}\n\n.btn-del {\n    height: 2rem;\n    width: 6rem;\n    border-radius: 5px;\n    background-color: var(--pumpkin-darker);\n    color: white;\n    align-self: flex-end;\n\n    border : none;\n    box-shadow: 1px 1px 1px var(--silver);\n\n    font-weight: 600;\n    font-size: 1.1rem;\n\n}\n\n\n.btn-del:hover{\n    cursor: pointer;\n    box-shadow: 1px 1px 1px var(--antiflash-white);\n}\n\n.btn-del:active{\n    cursor: pointer;\n    box-shadow: 1px 1px 1px var(--antiflash-white);\n    background-color: var(--pumpkin-darker);\n}\n/*MODAL*/\n\n#modal-container{\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 9999;\n    background-color: rgba(0,0,0, 0.5);\n    display: none;\n}\n#modal-container.active {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.modal{\n    width: 300px;\n    background-color: var(--antiflash-white);\n\n    padding: 10px 0 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n#modalForm{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.inputField {\n    height: 1.5rem;\n    text-indent: 0.2rem;\n    min-width: 200px;\n    transition: all 0.2s ease-in-out;\n}\n\n.inputField:focus{\n    min-width: 250px;\n}\n\n#read{\n    margin-right: 10px;\n}\n\n#addBookModalBtn{\n    padding: 0.5rem 0 0.5rem;\n    font-weight: 500;\n    font-size: 1.3rem;\n    width: 200px;\n    background-color: var(--pumpkin);\n    color: white;\n}\n/* FOOTER */\nfooter {\n    display: flex;\n    justify-content: flex-end;\n    margin: 10px;\n}\nfooter p {\n    font-weight: 600;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function Library() {
    this.books = [];
}

Library.prototype.addBook = function (newBook) {
    this.books.push(newBook);
};

Library.prototype.findBook = function (title)  {

   return this.books.findIndex(book => {return book.title === title});
}


Library.prototype.remove = function (bookIndex)  {

        this.books.splice(bookIndex, 1);
}

const library = new Library();

/**
 * Represent a book
 * @constructor
 * @param {string} title
 * @param  {string} author
 * @param {number} pages
 * @param {boolean} read
 * @constructor
 */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

/*EXAMPLE BOOK*/
const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const epine = new Book("Le chevalier aux épines", "J-P Jaworski", 528, true);


library.addBook(hobbit);
library.addBook(epine);

/* DOM Manipulation*/
const bookContainers = document.querySelector(".books-containers");
const newBookBtn = document.getElementById("btn-new-book");
const modalContainer = document.getElementById("modal-container");
const addBookBtn = document.getElementById("addBookModalBtn");
const addBookForm = document.getElementById("modalForm");

/*MODAL*/
const activeModal = () => {
    modalContainer.classList.add('active');
};
const closeModal = () => {
    modalContainer.classList.remove('active');
};

addBookForm.addEventListener("submit", (e) => {
    submitNewBook(e);
});

const submitNewBook = (e) => {

    e.preventDefault();
    const form = new FormData(addBookForm);
    const title = form.get("title").toString().trim();
    if (title === "") {
        return;
    }
    const author = form.get("author").toString().trim();
    const pages = Number(form.get("pages"));
    if (isNaN(pages)) {
        return;
    }
    const read = Boolean(form.get("read"));
    const newBook = new Book(title, author, pages, read);
    createBookCard(newBook);
    addBookForm.reset();
    closeModal();
};


newBookBtn.addEventListener("click", activeModal, false);

/*Book grid*/
const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    const bookDescription = document.createElement('div');
    const title = document.createElement('h4');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readLabel = document.createElement('label');
    const readInput = document.createElement("input");
    const slider = document.createElement("span");
    const deleteBtn = document.createElement("button");

    readLabel.classList.add("switch");
    readInput.type = "checkbox";
    slider.classList.add("slider","round");
    deleteBtn.classList.add('btn-del');
    bookCard.classList.add('book-card');
    bookDescription.classList.add('book-description');

    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    pages.textContent = `${book.pages} pages`;
    deleteBtn.textContent = "remove";

    deleteBtn.onclick = removeBook;
    if(book.read){
        readInput.checked = true;
    }
    readInput.onclick = toggleRead;

    readLabel.appendChild(readInput);
    readLabel.appendChild(slider);

    bookDescription.appendChild(title);
    bookDescription.appendChild(author);
    bookDescription.appendChild(pages);
    bookDescription.appendChild(readLabel);

    bookCard.appendChild(bookDescription);
    bookCard.appendChild(deleteBtn);
    bookContainers.appendChild(bookCard);
};

const updateBookCards = () => {
    bookContainers.innerHTML = "";
    for (const book of library.books){
        createBookCard(book);
    }
}

const toggleRead = (e) =>{

    const title = e.currentTarget.parentNode.parentNode.firstChild.firstChild.textContent;
    const book = library.findBook(title);
    library.books[book].read = !library.books[book].read;
}

const removeBook = (e) => {
   const title = e.currentTarget.parentNode.firstChild.firstChild.textContent;
   const book = library.findBook(title);
    console.log(library.books);
   library.remove(book);
    console.log(library.books);
   updateBookCards();
}

for (const book of library.books) {
    createBookCard(book);
}





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQywyQkFBMkIsWUFBWTtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDs0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tcHVtcGtpbjogI2ZmNjcwMGZmO1xcbiAgICAtLXB1bXBraW4tZGFya2VyOiAjYzU1MzA4O1xcbiAgICAtLWFudGlmbGFzaC13aGl0ZTogI2ViZWJlYmZmO1xcbiAgICAtLXNpbHZlcjogI2MwYzBjMGZmO1xcbiAgICAtLWJpY2UtYmx1ZTogIzNhNmVhNWZmO1xcbiAgICAtLXBvbHluZXNpYW4tYmx1ZTogIzAwNGU5OGZmO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFudGlmbGFzaC13aGl0ZSk7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tcG9seW5lc2lhbi1ibHVlKTtcXG59XFxuXFxuI2J0bi1uZXctYm9vayB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdW1wa2luKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBib3JkZXIgOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1zaWx2ZXIpO1xcblxcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuI2J0bi1uZXctYm9vazpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1hbnRpZmxhc2gtd2hpdGUpO1xcbn1cXG5cXG4jYnRuLW5ldy1ib29rOmFjdGl2ZXtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1hbnRpZmxhc2gtd2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdW1wa2luLWRhcmtlcik7XFxufVxcbi8qIE1BSU4gLSBCT09LIENBUkRTICovXFxuXFxubWFpbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xcbiAgICBtYXJnaW46IDMwcHggMCAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiBib29rIGNhcmQgKi9cXG5cXG4uYm9va3MtY29udGFpbmVyc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogM3JlbTtcXG5cXG59XFxuXFxuXFxuLmJvb2stY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1pbi1oZWlnaHQ6IDE5MHB4O1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOm91dHNldCAxcHggdmFyKC0tcHVtcGtpbik7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLXB1bXBraW4tZGFya2VyKTtcXG59XFxuXFxuXFxuLmJvb2stZGVzY3JpcHRpb24gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc3dpdGNoIGlucHV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zMHB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG4uc3dpdGNoIGlucHV0ICsgc3BhbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjOTliNGRmO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uc3dpdGNoIGlucHV0ICsgc3BhbjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiAzcHg7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXG59XFxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XFxuICAgIGJhY2tncm91bmQ6ICMzNDZhYmY7XFxufVxcbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIHNwYW46YmVmb3JlIHtcXG4gICAgbGVmdDogMjVweDtcXG59XFxuXFxuLmJ0bi1kZWwge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1bXBraW4tZGFya2VyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXG4gICAgYm9yZGVyIDogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggdmFyKC0tc2lsdmVyKTtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuXFxufVxcblxcblxcbi5idG4tZGVsOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLWFudGlmbGFzaC13aGl0ZSk7XFxufVxcblxcbi5idG4tZGVsOmFjdGl2ZXtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1hbnRpZmxhc2gtd2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdW1wa2luLWRhcmtlcik7XFxufVxcbi8qTU9EQUwqL1xcblxcbiNtb2RhbC1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4jbW9kYWwtY29udGFpbmVyLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG4ubW9kYWx7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW50aWZsYXNoLXdoaXRlKTtcXG5cXG4gICAgcGFkZGluZzogMTBweCAwIDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcbiNtb2RhbEZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmlucHV0RmllbGQge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgdGV4dC1pbmRlbnQ6IDAuMnJlbTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5pbnB1dEZpZWxkOmZvY3Vze1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4jcmVhZHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jYWRkQm9va01vZGFsQnRue1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1bXBraW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuZm9vdGVyIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qiw0QkFB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QXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1wdW1wa2luOiAjZmY2NzAwZmY7XFxuICAgIC0tcHVtcGtpbi1kYXJrZXI6ICNjNTUzMDg7XFxuICAgIC0tYW50aWZsYXNoLXdoaXRlOiAjZWJlYmViZmY7XFxuICAgIC0tc2lsdmVyOiAjYzBjMGMwZmY7XFxuICAgIC0tYmljZS1ibHVlOiAjM2E2ZWE1ZmY7XFxuICAgIC0tcG9seW5lc2lhbi1ibHVlOiAjMDA0ZTk4ZmY7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW50aWZsYXNoLXdoaXRlKTtcXG59XFxuXFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1wb2x5bmVzaWFuLWJsdWUpO1xcbn1cXG5cXG4jYnRuLW5ldy1ib29rIHtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA3cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1bXBraW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGJvcmRlciA6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLXNpbHZlcik7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4jYnRuLW5ldy1ib29rOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLWFudGlmbGFzaC13aGl0ZSk7XFxufVxcblxcbiNidG4tbmV3LWJvb2s6YWN0aXZle1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLWFudGlmbGFzaC13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1bXBraW4tZGFya2VyKTtcXG59XFxuLyogTUFJTiAtIEJPT0sgQ0FSRFMgKi9cXG5cXG5tYWluIHtcXG4gICAgbWluLWhlaWdodDogNzAwcHg7XFxuICAgIG1hcmdpbjogMzBweCAwIDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIGJvb2sgY2FyZCAqL1xcblxcbi5ib29rcy1jb250YWluZXJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAzcmVtO1xcblxcbn1cXG5cXG5cXG4uYm9vay1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWluLWhlaWdodDogMTkwcHg7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6b3V0c2V0IDFweCB2YXIoLS1wdW1wa2luKTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggdmFyKC0tcHVtcGtpbi1kYXJrZXIpO1xcbn1cXG5cXG5cXG4uYm9vay1kZXNjcmlwdGlvbiBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMwcHg7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcbi5zd2l0Y2ggaW5wdXQgKyBzcGFuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQ6ICM5OWI0ZGY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5zd2l0Y2ggaW5wdXQgKyBzcGFuOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcbn1cXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBzcGFuIHtcXG4gICAgYmFja2dyb3VuZDogIzM0NmFiZjtcXG59XFxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgc3BhbjpiZWZvcmUge1xcbiAgICBsZWZ0OiAyNXB4O1xcbn1cXG5cXG4uYnRuLWRlbCB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVtcGtpbi1kYXJrZXIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcbiAgICBib3JkZXIgOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1zaWx2ZXIpO1xcblxcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG5cXG59XFxuXFxuXFxuLmJ0bi1kZWw6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggdmFyKC0tYW50aWZsYXNoLXdoaXRlKTtcXG59XFxuXFxuLmJ0bi1kZWw6YWN0aXZle1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLWFudGlmbGFzaC13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1bXBraW4tZGFya2VyKTtcXG59XFxuLypNT0RBTCovXFxuXFxuI21vZGFsLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbiNtb2RhbC1jb250YWluZXIuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi5tb2RhbHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbnRpZmxhc2gtd2hpdGUpO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4IDAgMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuI21vZGFsRm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaW5wdXRGaWVsZCB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB0ZXh0LWluZGVudDogMC4ycmVtO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmlucHV0RmllbGQ6Zm9jdXN7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbiNyZWFke1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbiNhZGRCb29rTW9kYWxCdG57XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVtcGtpbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5mb290ZXIgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gTGlicmFyeSgpIHtcbiAgICB0aGlzLmJvb2tzID0gW107XG59XG5cbkxpYnJhcnkucHJvdG90eXBlLmFkZEJvb2sgPSBmdW5jdGlvbiAobmV3Qm9vaykge1xuICAgIHRoaXMuYm9va3MucHVzaChuZXdCb29rKTtcbn07XG5cbkxpYnJhcnkucHJvdG90eXBlLmZpbmRCb29rID0gZnVuY3Rpb24gKHRpdGxlKSAge1xuXG4gICByZXR1cm4gdGhpcy5ib29rcy5maW5kSW5kZXgoYm9vayA9PiB7cmV0dXJuIGJvb2sudGl0bGUgPT09IHRpdGxlfSk7XG59XG5cblxuTGlicmFyeS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGJvb2tJbmRleCkgIHtcblxuICAgICAgICB0aGlzLmJvb2tzLnNwbGljZShib29rSW5kZXgsIDEpO1xufVxuXG5jb25zdCBsaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcblxuLyoqXG4gKiBSZXByZXNlbnQgYSBib29rXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuICogQHBhcmFtICB7c3RyaW5nfSBhdXRob3JcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlc1xuICogQHBhcmFtIHtib29sZWFufSByZWFkXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgcmVhZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcbiAgICB0aGlzLnBhZ2VzID0gcGFnZXM7XG4gICAgdGhpcy5yZWFkID0gcmVhZDtcbn1cblxuLypFWEFNUExFIEJPT0sqL1xuY29uc3QgaG9iYml0ID0gbmV3IEJvb2soXCJUaGUgSG9iYml0XCIsIFwiSi5SLlIgVG9sa2llblwiLCAyOTUsIGZhbHNlKTtcbmNvbnN0IGVwaW5lID0gbmV3IEJvb2soXCJMZSBjaGV2YWxpZXIgYXV4IMOpcGluZXNcIiwgXCJKLVAgSmF3b3Jza2lcIiwgNTI4LCB0cnVlKTtcblxuXG5saWJyYXJ5LmFkZEJvb2soaG9iYml0KTtcbmxpYnJhcnkuYWRkQm9vayhlcGluZSk7XG5cbi8qIERPTSBNYW5pcHVsYXRpb24qL1xuY29uc3QgYm9va0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2tzLWNvbnRhaW5lcnNcIik7XG5jb25zdCBuZXdCb29rQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tbmV3LWJvb2tcIik7XG5jb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpO1xuY29uc3QgYWRkQm9va0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQm9va01vZGFsQnRuXCIpO1xuY29uc3QgYWRkQm9va0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsRm9ybVwiKTtcblxuLypNT0RBTCovXG5jb25zdCBhY3RpdmVNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn07XG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufTtcblxuYWRkQm9va0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIHN1Ym1pdE5ld0Jvb2soZSk7XG59KTtcblxuY29uc3Qgc3VibWl0TmV3Qm9vayA9IChlKSA9PiB7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YShhZGRCb29rRm9ybSk7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtLmdldChcInRpdGxlXCIpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGlmICh0aXRsZSA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGF1dGhvciA9IGZvcm0uZ2V0KFwiYXV0aG9yXCIpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IHBhZ2VzID0gTnVtYmVyKGZvcm0uZ2V0KFwicGFnZXNcIikpO1xuICAgIGlmIChpc05hTihwYWdlcykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWFkID0gQm9vbGVhbihmb3JtLmdldChcInJlYWRcIikpO1xuICAgIGNvbnN0IG5ld0Jvb2sgPSBuZXcgQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgcmVhZCk7XG4gICAgY3JlYXRlQm9va0NhcmQobmV3Qm9vayk7XG4gICAgYWRkQm9va0Zvcm0ucmVzZXQoKTtcbiAgICBjbG9zZU1vZGFsKCk7XG59O1xuXG5cbm5ld0Jvb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2ZU1vZGFsLCBmYWxzZSk7XG5cbi8qQm9vayBncmlkKi9cbmNvbnN0IGNyZWF0ZUJvb2tDYXJkID0gKGJvb2spID0+IHtcbiAgICBjb25zdCBib29rQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvb2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcmVhZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCByZWFkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHJlYWRMYWJlbC5jbGFzc0xpc3QuYWRkKFwic3dpdGNoXCIpO1xuICAgIHJlYWRJbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIsXCJyb3VuZFwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLWRlbCcpO1xuICAgIGJvb2tDYXJkLmNsYXNzTGlzdC5hZGQoJ2Jvb2stY2FyZCcpO1xuICAgIGJvb2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdib29rLWRlc2NyaXB0aW9uJyk7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGJvb2sudGl0bGU7XG4gICAgYXV0aG9yLnRleHRDb250ZW50ID0gYGJ5ICR7Ym9vay5hdXRob3J9YDtcbiAgICBwYWdlcy50ZXh0Q29udGVudCA9IGAke2Jvb2sucGFnZXN9IHBhZ2VzYDtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcInJlbW92ZVwiO1xuXG4gICAgZGVsZXRlQnRuLm9uY2xpY2sgPSByZW1vdmVCb29rO1xuICAgIGlmKGJvb2sucmVhZCl7XG4gICAgICAgIHJlYWRJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVhZElucHV0Lm9uY2xpY2sgPSB0b2dnbGVSZWFkO1xuXG4gICAgcmVhZExhYmVsLmFwcGVuZENoaWxkKHJlYWRJbnB1dCk7XG4gICAgcmVhZExhYmVsLmFwcGVuZENoaWxkKHNsaWRlcik7XG5cbiAgICBib29rRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGJvb2tEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChhdXRob3IpO1xuICAgIGJvb2tEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwYWdlcyk7XG4gICAgYm9va0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHJlYWRMYWJlbCk7XG5cbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rRGVzY3JpcHRpb24pO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgYm9va0NvbnRhaW5lcnMuYXBwZW5kQ2hpbGQoYm9va0NhcmQpO1xufTtcblxuY29uc3QgdXBkYXRlQm9va0NhcmRzID0gKCkgPT4ge1xuICAgIGJvb2tDb250YWluZXJzLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChjb25zdCBib29rIG9mIGxpYnJhcnkuYm9va3Mpe1xuICAgICAgICBjcmVhdGVCb29rQ2FyZChib29rKTtcbiAgICB9XG59XG5cbmNvbnN0IHRvZ2dsZVJlYWQgPSAoZSkgPT57XG5cbiAgICBjb25zdCB0aXRsZSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZmlyc3RDaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGJvb2sgPSBsaWJyYXJ5LmZpbmRCb29rKHRpdGxlKTtcbiAgICBsaWJyYXJ5LmJvb2tzW2Jvb2tdLnJlYWQgPSAhbGlicmFyeS5ib29rc1tib29rXS5yZWFkO1xufVxuXG5jb25zdCByZW1vdmVCb29rID0gKGUpID0+IHtcbiAgIGNvbnN0IHRpdGxlID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICAgY29uc3QgYm9vayA9IGxpYnJhcnkuZmluZEJvb2sodGl0bGUpO1xuICAgIGNvbnNvbGUubG9nKGxpYnJhcnkuYm9va3MpO1xuICAgbGlicmFyeS5yZW1vdmUoYm9vayk7XG4gICAgY29uc29sZS5sb2cobGlicmFyeS5ib29rcyk7XG4gICB1cGRhdGVCb29rQ2FyZHMoKTtcbn1cblxuZm9yIChjb25zdCBib29rIG9mIGxpYnJhcnkuYm9va3MpIHtcbiAgICBjcmVhdGVCb29rQ2FyZChib29rKTtcbn1cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
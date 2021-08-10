import{o as omi,h,b as tag,W as WeElement,t as tw,s as sheet}from"./vendor.559db013.js";import"./admin-docs.c1cc5713.js";import"./index.78421ea7.js";import{M as Masonry}from"./masonry.aef2d0a5.js";import"./___vite-browser-external_commonjs-proxy.f6ebf826.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){function r(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function __decorate(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}var css=".o-progress-line__bar {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  vertical-align: middle;\n  background-color: #f5f5f5;\n  border-radius: 100px; }\n\n.o-progress-line__outer {\n  display: inline-block;\n  width: 100%;\n  margin-right: 0;\n  padding-right: 0; }\n\n.o-progress-line__inner-bar {\n  position: relative;\n  height: 8px;\n  background-color: #1890ff;\n  border-radius: 100px;\n  transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s; }\n\n.o-progress-line-text {\n  display: inline-block;\n  width: 2em;\n  margin-left: 8px;\n  color: #000000d9;\n  font-size: 1em;\n  line-height: 1;\n  white-space: nowrap;\n  text-align: left;\n  vertical-align: middle;\n  word-break: normal; }\n\n.o-progress-circle-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  color: #000000d9;\n  font-size: 1em;\n  line-height: 1;\n  white-space: normal;\n  text-align: center;\n  transform: translate(-50%, -50%); }\n\n.o-progress-circle__inner {\n  position: relative;\n  overflow: hidden;\n  vertical-align: middle;\n  line-height: 1;\n  background-color: transparent; }\n",commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function unwrapExports(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var checkCircleRounded=createCommonjsModule((function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./esm/check-circle-rounded.js")}({"./esm/check-circle-rounded.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a.9959.9959 0 010-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"\n}), \'CheckCircleRounded\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/check-circle-rounded.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval('\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, \'-$1\').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    omi_1.define(hyphenate(\'OIcon\' + displayName), function (_) {\n        return omi_1.h(\'svg\', __assign({ viewBox: "0 0 24 24", title: displayName }, _.props), path);\n    }, {\n        css: ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}"\n    });\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?')},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(omi)}));unwrapExports(checkCircleRounded);var cancelRounded=createCommonjsModule((function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./esm/cancel-rounded.js")}({"./esm/cancel-rounded.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 010-1.41L10.59 12 7.7 9.11a.9959.9959 0 010-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"\n}), \'CancelRounded\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/cancel-rounded.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval('\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, \'-$1\').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    omi_1.define(hyphenate(\'OIcon\' + displayName), function (_) {\n        return omi_1.h(\'svg\', __assign({ viewBox: "0 0 24 24", title: displayName }, _.props), path);\n    }, {\n        css: ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}"\n    });\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?')},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(omi)}));unwrapExports(cancelRounded);var checkRounded=createCommonjsModule((function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./esm/check-rounded.js")}({"./esm/check-rounded.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M9 16.17L5.53 12.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L9 16.17z"\n}), \'CheckRounded\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/check-rounded.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval('\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, \'-$1\').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    omi_1.define(hyphenate(\'OIcon\' + displayName), function (_) {\n        return omi_1.h(\'svg\', __assign({ viewBox: "0 0 24 24", title: displayName }, _.props), path);\n    }, {\n        css: ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}"\n    });\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?')},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(omi)}));unwrapExports(checkRounded);var closeRounded=createCommonjsModule((function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./esm/close-rounded.js")}({"./esm/close-rounded.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"\n}), \'CloseRounded\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/close-rounded.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval('\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, \'-$1\').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    omi_1.define(hyphenate(\'OIcon\' + displayName), function (_) {\n        return omi_1.h(\'svg\', __assign({ viewBox: "0 0 24 24", title: displayName }, _.props), path);\n    }, {\n        css: ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}"\n    });\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?')},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(omi)}));unwrapExports(closeRounded);var status2color={success:"#09BB07",error:"#F43530",active:"#1890ff"},type_status2icon={circle:{success:h("o-icon-check-rounded",null),error:h("o-icon-close-rounded",null)},line:{success:h("o-icon-check-circle-rounded",null),error:h("o-icon-cancel-rounded",null)}};!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}__extends(t,e),t.prototype.install=function(){var e=this,t=this;this.setPercent=function(r){e._state||(e._state=new Proxy({percent:r},{set:function(e,r,n,o){return Reflect.set(e,r,n,o),t.update(),!0}})),e._state.percent=r}},t.prototype.render=function(e){var t=e.trailColor?e.trailColor:"#f5f5f5",r=e.textColor?e.textColor:"black",n=e.strokeWidth?e.strokeWidth:"line"===e.type?8:6,o=e.width?e.width:"line"===e.type?160:120,s=e.type,i=e.status,c=e.strokeColor,a=e.showInfo,l=this._state?this._state.percent:e.percent,p=l>=100;if("circle"===s){var u=o/2-n,d=2*Math.PI*u;return h("div",{style:{width:o,height:o}},h("div",{className:"o-progress-circle__inner"},h("svg",{width:o,heigth:o,class:"o-progress-circle-trail",viewBox:"0 0 "+o+" "+o},h("circle",{cx:o/2,cy:o/2,r:u,stroke:t,"stroke-width":n,"fill-opacity":"0"}),h("path",{d:"M "+o/2+","+o/2+" m 0,"+(o/2-n)+"\n   a "+(o/2-n)+","+(o/2-n)+" 0 1 1 0,-"+2*(o/2-n)+"\n   a "+(o/2-n)+","+(o/2-n)+" 0 1 1 0,"+2*(o/2-n),"stroke-linecap":"round",stroke:c||status2color[i]||(p?status2color.success:void 0)||status2color.active,"stroke-width":n,opacity:"1","fill-opacity":"0",style:"\n               stroke-dasharray: "+l/100*d+"px "+d+"px;\n                stroke-dashoffset: 0px;\n                 transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity ease 0s;"})),a&&h("span",{className:"o-progress-circle-text",style:{fontSize:1.75*(o-2*n)/6}},!i&&!p||"active"===i?h("span",{style:{color:r}},l,"%"):h("span",{style:{color:status2color[i||(p?"success":"active")],fontSize:"2em"}},type_status2icon.circle[i||(p?"success":"active")]))))}return h("div",null,h("div",{className:"o-progress-line__outer",style:{width:o}},h("div",{className:"o-progress-line__bar",style:{backgroundColor:t}},h("div",{className:"o-progress-line__inner-bar",style:{width:l+"%",backgroundColor:c||status2color[i]||(p?status2color.success:void 0)||status2color.active,height:n}}))),a&&h("span",{className:"o-progress-line-text",style:{fontSize:1.75*n}},!i&&!p||"active"===i?h("span",{style:{color:r}},l,"%"):h("span",{style:{color:status2color[i||(p?"success":"active")]}},type_status2icon.line[i||(p?"success":"active")])))},t.css=css,t.defaultProps={type:"line",percent:0,status:void 0,strokeColor:void 0,trailColor:void 0,textColor:void 0,strokeWidth:void 0,width:void 0,showInfo:!0},t.propTypes={type:String,percent:Number,status:String,strokeColor:String,trailColor:String,textColor:String,strokeWidth:Number,width:Number,showInfo:Boolean},t=__decorate([tag("o-progress")],t)}(WeElement);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(e,t,r,n)=>{for(var o,s=n>1?void 0:n?__getOwnPropDesc(t,r):t,i=e.length-1;i>=0;i--)(o=e[i])&&(s=(n?o(t,r,s):o(s))||s);return n&&s&&__defProp(t,r,s),s};const tagName="progress-component";let progress_component_default=class extends WeElement{constructor(){super(...arguments),this.mdA='\n  ```html\n  <o-progress percent="40"></o-progress>\n  <o-progress percent="60"></o-progress>\n```\n  ',this.mdB='\n  ```html\n  <o-progress percent="50" width="200" stroke-width="8"></o-progress>\n  <o-progress percent="50" width="300" stroke-width="16"></o-progress>\n  <o-progress percent="50" width="400" stroke-width="24"></o-progress>\n  ```\n  ',this.mdC='\n  ```html\n  <o-progress percent="50" stroke-color="lightseagreen"></o-progress>\n  <o-progress percent="50" trail-color="black"></o-progress>\n  <o-progress percent="50" text-color = "red"></o-progress>\n\n  ```\n  ',this.mdD='\n  ```html\n  <o-progress percent="50" status="active"></o-progress>\n  <o-progress percent="90" status="error"></o-progress>\n  <o-progress percent="100" status="success"></o-progress>\n\n  ```\n  ',this.mdE='\n  ```html\n  <o-progress percent="50" status="error" stroke-width="8" show-info="false"></o-progress>\n  <o-progress percent="50" status="success" stroke-width="8" show-info="false"></o-progress>\n\n  ```\n  ',this.mdF='\n  ```html\n  <o-progress id="change"></o-progress>\n  <script>\n    const p = document.getElementById("change")\n    let a = 0\n    setInterval(() => {\n      a += 10\n      if (a > 100) a = 0\n        p.setPercent(a)\n      }\n    }, 1000);\n  <\/script>\n  ```\n  ',this.mdG='\n  ```html\n  <o-progress type="circle" percent="40"></o-progress>\n  <o-progress type="circle" percent="60"></o-progress>\n\n  ```\n  ',this.mdH='\n  ```html\n  <o-progress type="circle" percent="50" stroke-width="16" stroke-color="lightseagreen"></o-progress>\n  <o-progress type="circle" percent="60" width="150" stroke-color="lightseagreen"  trail-color="black"></o-progress>\n  <o-progress type="circle" percent="70" width="150" stroke-width="16" stroke-color="lightseagreen"  trail-color="black" text-color="red"></o-progress>\n\n  ```\n  ',this.mdI='\n  ```html\n  <o-progress type="circle" percent="80" status="active"></o-progress>\n  <o-progress type="circle" percent="90" status="error"></o-progress>\n  <o-progress type="circle" percent="100" status="success"></o-progress>\n\n  ```\n  ',this.mdJ='\n  ```html\n  <o-progress type="circle" percent="70" status="error" show-info="false"></o-progress>\n  <o-progress type="circle" percent="90" status="success" show-info="false"></o-progress>\n\n  ```\n  '}install(){let e=0;setInterval((()=>{e+=10,e>100&&(e=0),this.changeTest.setPercent(e)}),1e3)}installed(){new Masonry(this.grid,{})}render(){const e=tw`px-2 w-full md:w-6/12`;return h("div",{class:tw`px-4`},h("div",{ref:e=>this.grid=e},h("div",{class:tw`${e}`},h("code-demo",{class:tw``,title:"基本",describe:"最简单的 progress",code:this.mdA},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-progress",{percent:40}),h("o-progress",{percent:60})))),h("div",{class:tw`${e}`},h("code-demo",{title:"不同尺寸",describe:"支持传入 width和stroke-width 控制大小，可以通过任意组合实现自定义",code:this.mdB},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-progress",{percent:50,width:200,strokeWidth:8}),h("o-progress",{percent:50,width:300,strokeWidth:16}),h("o-progress",{percent:50,width:400,strokeWidth:24})))),h("div",{class:tw`${e}`},h("code-demo",{title:"不同颜色",describe:"支持传入 storke-color、trail-color和text-color控制颜色，可以通过任意组合实现自定义",code:this.mdC},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-progress",{percent:50,strokeColor:"lightseagreen"}),h("o-progress",{percent:50,trailColor:"black"}),h("o-progress",{percent:50,textColor:"red"})))),h("div",{class:tw`${e}`},h("code-demo",{title:"不同状态",describe:"支持传入status 控制状态（success/error/active）",code:this.mdD},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-progress",{percent:50,status:"active"}),h("o-progress",{percent:90,status:"error"}),h("o-progress",{percent:100,status:"success"})))),h("div",{class:tw`${e}`},h("code-demo",{title:"显示与否",describe:"支持传入showInfo 控制图标或者文字的显示",code:this.mdE},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-progress",{percent:50,status:"error",strokeWidth:8,showInfo:!1}),h("o-progress",{percent:50,status:"success",strokeWidth:8,showInfo:!1})))),h("div",{class:tw`${e}`},h("code-demo",{title:"动态效果",describe:"支持动态改变（内部原生DOM元素的暴露更新方法），并拥有优先级顺序，也支持外部传入事件update",code:this.mdF},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-progress",{ref:e=>{this.changeTest=e},id:"change"})))),h("div",{class:tw`${e}`},h("code-demo",{class:tw``,title:"环形进度条",describe:"支持type选择circle来实现，默认为line(可外部传入dispaly展示)",code:this.mdG},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-progress",{type:"circle",percent:40,style:"display:inline-block"}),h("o-progress",{type:"circle",percent:60,style:"display:inline-block"})))),h("div",{class:tw`${e}`},h("code-demo",{class:tw``,title:"环形基本样式改变",describe:"如同line一样支持颜色、大小改变",code:this.mdH},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-progress",{type:"circle",percent:50,strokeWidth:16,strokeColor:"lightseagreen",style:"display:inline-block"}),h("o-progress",{type:"circle",percent:60,width:150,strokeColor:"lightseagreen",trailColor:"black",style:"display:inline-block"}),h("o-progress",{type:"circle",percent:70,width:150,strokeWidth:16,strokeColor:"lightseagreen",trailColor:"black",textColor:"red",style:"display:inline-block"})))),h("div",{class:tw`${e}`},h("code-demo",{class:tw``,title:"环形状态改变",describe:"如同line一样支持选择状态",code:this.mdI},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-progress",{type:"circle",percent:80,status:"active",style:"display:inline-block"}),h("o-progress",{type:"circle",percent:90,status:"error",style:"display:inline-block"}),h("o-progress",{type:"circle",percent:100,status:"success",style:"display:inline-block"})))),h("div",{class:tw`${e}`},h("code-demo",{class:tw``,title:"环形显示与否",describe:"支持设置show-info来控制文本的显示与否",code:this.mdJ},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-progress",{type:"circle",percent:70,status:"error",showInfo:!1,style:"display:inline-block"}),h("o-progress",{type:"circle",percent:70,status:"success",showInfo:!1,style:"display:inline-block"}))))))}};progress_component_default.css=sheet.target,progress_component_default=__decorateClass([tag(tagName)],progress_component_default);export{progress_component_default as default};

import{h as o,b as e,W as n,t as i,s as r}from"./vendor.559db013.js";import"./admin-docs.c1cc5713.js";import"./index.78421ea7.js";import"./container.31c6fcce.js";import"./___vite-browser-external_commonjs-proxy.f6ebf826.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var n in e)e.hasOwnProperty(n)&&(o[n]=e[n])})(o,e)};!function(n){function i(){return null!==n&&n.apply(this,arguments)||this}(function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(i,n),i.prototype.render=function(e){return o("div",{class:"o-root o-colorPrimary o-indeterminate",role:"progressbar",style:"width: "+e.size+"px; height: "+e.size+"px;"+(e.color?"color:"+e.color+";":"")},o("svg",{class:"o-svg",viewBox:"22 22 44 44"},o("circle",{class:"o-circle o-circleIndeterminate",cx:"44",cy:"44",r:"20.2",fill:"none","stroke-width":"3.6"})))},i.css=":host {\n  display: inline-block; }\n\n.o-root {\n  display: inline-block;\n  line-height: 1;\n  color: #07c160; }\n\n.o-static {\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n\n.o-indeterminate {\n  animation: o-rotate 1.4s linear infinite; }\n\n.o-circle {\n  stroke: currentColor; }\n\n.o-circleStatic {\n  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n\n.o-circleIndeterminate {\n  animation: mui-progress-circular-dash 1.4s ease-in-out infinite;\n  animation-name: o-keyframes-mui-progress-circular-dash;\n  stroke-dasharray: 80px, 200px;\n  stroke-dashoffset: 0px; }\n\n@-webkit-keyframes o-rotate {\n  100% {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes o-keyframes-mui-progress-circular-dash {\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0px; }\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px; }\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px; } }\n\n.o-circleDisableShrink {\n  animation: none; }\n",i.defaultProps={size:40},i.propTypes={size:Number,color:String},i=function(o,e,n,i){var r,t=arguments.length,s=t<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(o,e,n,i);else for(var l=o.length-1;l>=0;l--)(r=o[l])&&(s=(t<3?r(s):t>3?r(e,n,s):r(e,n))||s);return t>3&&s&&Object.defineProperty(e,n,s),s}([e("o-loading")],i)}(n);var s=Object.defineProperty,l=Object.getOwnPropertyDescriptor;let a=class extends n{constructor(){super(...arguments),this.mdA='\n  ```html\n<o-loading size="15"></o-loading>\n```\n  ',this.mdB='\n  ```html\n<o-loading size="15"></o-loading>\n<o-loading size="25"></o-loading>\n<o-loading size="35"></o-loading>\n<o-loading size="45"></o-loading>\n<o-loading size="55"></o-loading>\n  ```\n  ',this.mdC='\n  ```html\n  <o-loading size="25" color="#8e2035"></o-loading>\n  <o-loading size="25" color="#2d7418"></o-loading>\n  <o-loading size="25" color="#f37736"></o-loading>\n  <o-loading size="25" color="#7bc043"></o-loading>\n  <o-loading size="25" color="#2170b8"></o-loading>\n  ```\n  ',this.mdD='\n  ```html\n  <o-loading size="15" color="#8e2035"></o-loading>\n  <o-loading size="25" color="#2d7418"></o-loading>\n  <o-loading size="35" color="#f37736"></o-loading>\n  <o-loading size="45" color="#7bc043"></o-loading>\n  <o-loading size="55" color="#2170b8"></o-loading>\n  ```\n  '}installed(){}render(){return o("code-demo-container",null,o("code-demo",{class:i``,title:"基本",describe:"最简单的 Loading",code:this.mdA},o("div",{slot:"demo",class:i`px-5 py-5`},o("o-loading",{size:"15"}))),o("code-demo",{title:"不同尺寸",describe:"支持传入 size 控制大小",code:this.mdB},o("div",{slot:"demo",class:i`px-5 py-5`},o("o-loading",{size:"15"}),o("o-loading",{size:"25"}),o("o-loading",{size:"35"}),o("o-loading",{size:"45"}),o("o-loading",{size:"55"}))),o("code-demo",{title:"不同颜色",describe:"支持传入 color 控制颜色",code:this.mdC},o("div",{slot:"demo",class:i`px-5 py-5`},o("o-loading",{size:"25",color:"#8e2035"}),o("o-loading",{size:"25",color:"#2d7418"}),o("o-loading",{size:"25",color:"#f37736"}),o("o-loading",{size:"25",color:"#7bc043"}),o("o-loading",{size:"25",color:"#2170b8"}))),o("code-demo",{title:"不同颜色和尺寸",describe:"支持传入 size 和 color 控制大小颜色",code:this.mdD},o("div",{slot:"demo",class:i`px-5 py-5`},o("o-loading",{size:"15",color:"#8e2035"}),o("o-loading",{size:"25",color:"#2d7418"}),o("o-loading",{size:"35",color:"#f37736"}),o("o-loading",{size:"45",color:"#7bc043"}),o("o-loading",{size:"55",color:"#2170b8"}))))}};a.css=r.target,a=((o,e,n,i)=>{for(var r,t=i>1?void 0:i?l(e,n):e,a=o.length-1;a>=0;a--)(r=o[a])&&(t=(i?r(e,n,t):r(t))||t);return i&&t&&s(e,n,t),t})([e("loading-component")],a);export{a as default};

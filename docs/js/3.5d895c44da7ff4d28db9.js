(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{57:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(8),o=function(){return(o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("body,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\ncode,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nblockquote,\nth,\ntd,\nhr,\nbutton,\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  margin: 0;\n  padding: 0; }\n\nul,\nol {\n  list-style: none; }\n\nhtml, body {\n  font-family: 'Microsoft YaHei', sans-serif; }\n\n/**************** Global ****************/\n/**************** Color ****************/\n/**************** Background ****************/\n/**************** Font ****************/\n/**************** Animation ****************/\n/**************** Button ****************/\n/**************** Border ****************/\n/**************** Input ****************/\n/**************** Textarea ****************/\n/**************** Grid ****************/\n/**************** Radio ****************/\n/**************** Global ****************/\n/**************** Color ****************/\n/**************** Background ****************/\n/**************** Font ****************/\n/**************** Animation ****************/\n/**************** Button ****************/\n/**************** Border ****************/\n/**************** Input ****************/\n/**************** Textarea ****************/\n/**************** Grid ****************/\n/**************** Radio ****************/\n@keyframes anim-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.rc-x-test-title {\n  border-left: 2px solid #0077ff;\n  padding-left: 8px;\n  font-size: 18px;\n  color: #333333;\n  margin-bottom: 8px; }\n\n.rc-x-test-package {\n  padding: 16px; }\n  .rc-x-test-package table {\n    width: 100%;\n    font-size: 14px;\n    color: #666666;\n    border-collapse: collapse; }\n    .rc-x-test-package table tr:not(:last-child) {\n      border-bottom: 1px dashed #eeeeee; }\n    .rc-x-test-package table td {\n      padding: 4px; }\n      .rc-x-test-package table td:nth-child(1) {\n        width: 156px; }\n\n.rc-x-test-props {\n  padding: 16px;\n  border-top: 1px solid #cccccc; }\n\n.rc-x-test-prop {\n  display: flex;\n  font-size: 14px;\n  color: #666666;\n  padding: 4px; }\n  .rc-x-test-prop:not(:last-child) {\n    border-bottom: 1px dashed #eeeeee; }\n  .rc-x-test-prop-label {\n    width: 156px; }\n  .rc-x-test-prop-controller {\n    flex: 1; }\n  .rc-x-test-prop-switch-group, .rc-x-test-prop-checkbox-group, .rc-x-test-prop-radio-group {\n    user-select: none; }\n    .rc-x-test-prop-switch-group label, .rc-x-test-prop-checkbox-group label, .rc-x-test-prop-radio-group label {\n      padding: 4px 6px; }\n      .rc-x-test-prop-switch-group label input, .rc-x-test-prop-checkbox-group label input, .rc-x-test-prop-radio-group label input {\n        margin-right: 4px; }\n\n.rc-x-test-component, .rc-x-test-custom {\n  padding: 16px;\n  border-top: 1px solid #cccccc; }\n\n.rc-x-test-item {\n  display: none; }\n  .rc-x-test-item-active {\n    display: block; }\n\n.rc-x-test-tabs {\n  position: fixed;\n  top: -24px;\n  left: 0;\n  right: 0;\n  user-select: none;\n  transition: all 0.2s ease-in-out;\n  display: flex;\n  flex-flow: row nowrap;\n  box-shadow: 0 1px 5px 1px #cccccc; }\n  .rc-x-test-tabs:hover {\n    top: 0; }\n\n.rc-x-test-tab {\n  padding: 8px;\n  cursor: pointer;\n  box-sizing: border-box;\n  flex: 1;\n  text-align: center;\n  font-size: 12px;\n  color: #333333;\n  background-color: #ffffff;\n  transition: all 0.2s ease-in-out; }\n  .rc-x-test-tab:hover:not(.rc-x-test-tab-active) {\n    color: #0077ff; }\n  .rc-x-test-tab-active {\n    background-color: #0077ff;\n    color: #ffffff; }\n");var l=Object(c.b)("test"),i=function(e){var t=e.component,n=e.componentProps,i=e.componentTestProps,s=Object.keys(i).map(function(e){var t=i[e],n=Object(a.useState)(t.value);return{name:e,value:n[0],setValue:n[1]}}),p={};return s.forEach(function(e){return p[e.name]=e.value}),r.a.createElement("div",{className:Object(c.b)("child",l)},r.a.createElement("div",{className:Object(c.b)("props",l)},r.a.createElement("div",{className:Object(c.b)("title",l)},"Props"),s.map(function(e,t){var n=i[e.name];if(!n)return null;var a,o=Object(c.b)("prop",l);switch(n.type){case"input":a=r.a.createElement("input",{value:e.value,type:"text",onChange:function(t){e.setValue(t.target.value)}});break;case"inputNumber":a=r.a.createElement("input",{type:"number",value:e.value,onChange:function(t){e.setValue(Number(t.target.value))}});break;case"radio":var s=Object(c.b)("radio-group",o);a=r.a.createElement("div",{className:s},n.options.map(function(t,n){return r.a.createElement("label",{key:s+"-"+n},r.a.createElement("input",{name:e.name,value:t.value,type:"radio",checked:t.value===e.value,onChange:function(n){return e.setValue(t.value)}}),t.label)}));break;case"switch":var p=Object(c.b)("switch-group",o);a=r.a.createElement("div",{className:p},r.a.createElement("label",null,r.a.createElement("input",{name:e.name,type:"checkbox",checked:e.value,onChange:function(t){e.setValue(t.target.checked)}}),e.value?"true":"false"));break;case"checkbox":var u=Object(c.b)("checkbox-group",o);a=r.a.createElement("div",{className:u},n.options.map(function(t,n){return r.a.createElement("label",{key:u+"-"+n},r.a.createElement("input",{name:e.name,value:t.value,type:"checkbox",checked:e.value.indexOf(t.value)>-1,onChange:function(n){var a=[],r=e.value.indexOf(t.value);r<0&&a.push(t.value),e.value.forEach(function(e,t){r>-1&&t===r||a.push(e)}),e.setValue(a)}}),t.label)}))}return r.a.createElement("div",{className:o,key:o+"-"+t},r.a.createElement("div",{className:Object(c.b)("label",o)},n.label+" ("+e.name+") :"),r.a.createElement("div",{className:Object(c.b)("controller")},a))})),r.a.createElement("div",{className:Object(c.b)("component",l)},r.a.createElement("div",{className:Object(c.b)("title",l)},"Component"),r.a.createElement(t,o({},n||{},p))))};t.a=function(e){var t,n=e.component,o=e.componentName,s=e.componentProps,p=e.componentTestProps,u=e.componentPackageJson,m=e.defaultActiveComponentName,d=e.children;if(Array.isArray(n)&&(!Array.isArray(o)||!Array.isArray(s)||!Array.isArray(p)||o.length!==n.length||s.length!==n.length||p.length!==n.length))return r.a.createElement("div",null,"Invalid Test Props");if(Array.isArray(n)){var b=0;if(m){var f=o.indexOf(m);f>-1&&(b=f)}var x=Object(a.useState)(b),v=x[0],g=x[1];t=[r.a.createElement("div",{className:Object(c.b)("items",l),key:"items"},n.map(function(e,t){var n,a=Object(c.b)("item",l);return r.a.createElement("div",{className:Object(c.a)(a,(n={},n[a+"-active"]=t===v,n)),key:a+"-"+t},r.a.createElement(i,{component:e,componentProps:s?s[t]:void 0,componentTestProps:p[t]}))})),r.a.createElement("div",{className:Object(c.b)("tabs",l),key:"tabs"},n.map(function(e,t){var n,a=Object(c.b)("tab",l);return r.a.createElement("div",{key:a+"-"+t,onClick:function(){g(t)},className:Object(c.a)(a,(n={},n[a+"-active"]=t===v,n))},o?o[t]:void 0)}))]}else t=r.a.createElement(i,{component:n,componentProps:s,componentTestProps:p});return r.a.createElement("div",{className:Object(c.a)(l)},r.a.createElement("div",{className:Object(c.b)("package",l)},r.a.createElement("div",{className:Object(c.b)("title",l)},"Package"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"name:"),r.a.createElement("td",null,u.name)),r.a.createElement("tr",null,r.a.createElement("td",null,"description:"),r.a.createElement("td",null,u.description)),r.a.createElement("tr",null,r.a.createElement("td",null,"version:"),r.a.createElement("td",null,u.version))))),t,d&&r.a.createElement("div",{className:Object(c.b)("custom",l)},r.a.createElement("div",{className:Object(c.b)("title",l)},"Custom"),d))}},62:function(e,t,n){},63:function(e){e.exports={name:"@rc-x/animate",version:"0.0.1",description:"Animation Utils",author:"Pwcong <pwcong@foxmail.com>",main:"dist/bundle.min.js",module:"dist/bundle.es.js",keywords:["rc-x-animate"],license:"MIT",dependencies:{"@rc-x/style":"^0.0.1","@rc-x/utils":"^0.0.1","react-motion":"^0.5.2","react-transition-group":"^4.0.0"},devDependencies:{"@rc-x/test":"^0.0.1","@types/react-motion":"^0.0.28","@types/react-transition-group":"^2.9.0"}}},91:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n(0),c=n.n(r),o=n(57),l=(n(62),{motion:n(54),transition:n(55)}),i=n(63),s=l.transition.Transition,p=l.motion,u=p.Motion,m=p.spring;t.default=function(){var e=Object(r.useState)(!0),t=e[0],n=e[1],l=Object(r.useState)(!0),p=l[0],d=l[1];return c.a.createElement(o.a,{component:[],componentProps:[],componentTestProps:[],componentName:[],componentPackageJson:i},c.a.createElement("fieldset",{style:{padding:8}},c.a.createElement("legend",null,"Transition"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){n(!t)}},t?"true":"false")),c.a.createElement("div",null,c.a.createElement(s,{in:t,timeout:200},function(e){return c.a.createElement("p",{className:"transition",style:a.a({transition:"all 0.2s"},{entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}}[e])},"Hello World!")}))),c.a.createElement("fieldset",{style:{padding:8}},c.a.createElement("legend",null,"Motion"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){d(!p)}},p?"true":"false")),c.a.createElement("div",null,c.a.createElement(u,{style:{opacity:m(p?1:0)}},function(e){return c.a.createElement("p",{className:"transition",style:e},"Hello World!")}))))}}}]);
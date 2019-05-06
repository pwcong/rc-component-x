(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{57:function(e,t,a){"use strict";var n=a(19),c=a(0),l=a.n(c),r=a(8),o=(a(58),Object(r.b)("test")),s=function(e){var t=e.component,a=e.componentProps,s=e.componentTestProps,m=Object.keys(s).map(function(e){var t=s[e],a=Object(c.useState)(t.value);return{name:e,value:a[0],setValue:a[1]}}),i={};return m.forEach(function(e){return i[e.name]=e.value}),l.a.createElement("div",{className:Object(r.b)("child",o)},l.a.createElement("div",{className:Object(r.b)("props",o)},l.a.createElement("div",{className:Object(r.b)("title",o)},"Props"),m.map(function(e,t){var a=s[e.name];if(!a)return null;var n,c=Object(r.b)("prop",o);switch(a.type){case"input":n=l.a.createElement("input",{value:e.value,type:"text",onChange:function(t){e.setValue(t.target.value)}});break;case"inputNumber":n=l.a.createElement("input",{type:"number",value:e.value,onChange:function(t){e.setValue(Number(t.target.value))}});break;case"radio":var m=Object(r.b)("radio-group",c);n=l.a.createElement("div",{className:m},a.options.map(function(t,a){return l.a.createElement("label",{key:m+"-"+a},l.a.createElement("input",{name:e.name,value:t.value,type:"radio",checked:t.value===e.value,onChange:function(a){return e.setValue(t.value)}}),t.label)}));break;case"switch":var i=Object(r.b)("switch-group",c);n=l.a.createElement("div",{className:i},l.a.createElement("label",null,l.a.createElement("input",{name:e.name,type:"checkbox",checked:e.value,onChange:function(t){e.setValue(t.target.checked)}}),e.value?"true":"false"));break;case"checkbox":var u=Object(r.b)("checkbox-group",c);n=l.a.createElement("div",{className:u},a.options.map(function(t,a){return l.a.createElement("label",{key:u+"-"+a},l.a.createElement("input",{name:e.name,value:t.value,type:"checkbox",checked:e.value.indexOf(t.value)>-1,onChange:function(a){var n=[],c=e.value.indexOf(t.value);c<0&&n.push(t.value),e.value.forEach(function(e,t){c>-1&&t===c||n.push(e)}),e.setValue(n)}}),t.label)}))}return l.a.createElement("div",{className:c,key:c+"-"+t},l.a.createElement("div",{className:Object(r.b)("label",c)},a.label+" ("+e.name+") :"),l.a.createElement("div",{className:Object(r.b)("controller")},n))})),l.a.createElement("div",{className:Object(r.b)("component",o)},l.a.createElement("div",{className:Object(r.b)("title",o)},"Component"),l.a.createElement(t,n.a({},a||{},i))))};t.a=function(e){var t,a=e.component,n=e.componentName,m=e.componentProps,i=e.componentTestProps,u=e.componentPackageJson,b=e.defaultActiveComponentName,p=e.children;if(Array.isArray(a)&&(!Array.isArray(n)||!Array.isArray(m)||!Array.isArray(i)||n.length!==a.length||m.length!==a.length||i.length!==a.length))return l.a.createElement("div",null,"Invalid Test Props");if(Array.isArray(a)){var v=0;if(b){var d=n.indexOf(b);d>-1&&(v=d)}var E=Object(c.useState)(v),f=E[0],h=E[1];t=[l.a.createElement("div",{className:Object(r.b)("items",o),key:"items"},a.map(function(e,t){var a,n=Object(r.b)("item",o);return l.a.createElement("div",{className:Object(r.a)(n,(a={},a[n+"-active"]=t===f,a)),key:n+"-"+t},l.a.createElement(s,{component:e,componentProps:m?m[t]:void 0,componentTestProps:i[t]}))})),l.a.createElement("div",{className:Object(r.b)("tabs",o),key:"tabs"},a.map(function(e,t){var a,c=Object(r.b)("tab",o);return l.a.createElement("div",{key:c+"-"+t,onClick:function(){h(t)},className:Object(r.a)(c,(a={},a[c+"-active"]=t===f,a))},n?n[t]:void 0)}))]}else t=l.a.createElement(s,{component:a,componentProps:m,componentTestProps:i});return l.a.createElement("div",{className:Object(r.a)(o)},l.a.createElement("div",{className:Object(r.b)("package",o)},l.a.createElement("div",{className:Object(r.b)("title",o)},"Package"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"name:"),l.a.createElement("td",null,u.name)),l.a.createElement("tr",null,l.a.createElement("td",null,"description:"),l.a.createElement("td",null,u.description)),l.a.createElement("tr",null,l.a.createElement("td",null,"version:"),l.a.createElement("td",null,u.version))))),t,p&&l.a.createElement("div",{className:Object(r.b)("custom",o)},l.a.createElement("div",{className:Object(r.b)("title",o)},"Custom"),p))}},58:function(e,t,a){},78:function(e,t,a){},79:function(e){e.exports={name:"@rc-x/switch",version:"0.0.1",description:"Switch",author:"Pwcong <pwcong@foxmail.com>",main:"dist/bundle.min.js",module:"dist/bundle.es.js",keywords:["rc-x-switch"],license:"MIT",dependencies:{"@rc-x/style":"^0.0.1","@rc-x/utils":"^0.0.1"},devDependencies:{"@rc-x/test":"^0.0.1"}}},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(57),r=a(8),o=(a(78),Object(r.b)("switch")),s=function(e){return c.a.createElement("div",{className:Object(r.a)(o)},"Hello World!")},m=a(79);t.default=function(){return c.a.createElement(l.a,{component:s,componentProps:{},componentTestProps:{},componentPackageJson:m})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{35:function(e,t,a){"use strict";var n=a(12),c=a(0),l=a.n(c),r=a(6),o=(a(36),Object(r.b)("test")),s=function(e){var t=e.component,a=e.componentProps,s=e.componentTestProps,m=Object.keys(s).map(function(e){var t=s[e],a=Object(c.useState)(t.value);return{name:e,value:a[0],setValue:a[1]}}),u={};return m.forEach(function(e){return u[e.name]=e.value}),l.a.createElement("div",{className:Object(r.b)("child",o)},l.a.createElement("div",{className:Object(r.b)("props",o)},l.a.createElement("div",{className:Object(r.b)("title",o)},"Props"),m.map(function(e,t){var a=s[e.name];if(!a)return null;var n,c=Object(r.b)("prop",o);switch(a.type){case"input":n=l.a.createElement("input",{value:e.value,type:"text",onChange:function(t){e.setValue(t.target.value)}});break;case"inputNumber":n=l.a.createElement("input",{type:"number",value:e.value,onChange:function(t){e.setValue(Number(t.target.value))}});break;case"radio":var m=Object(r.b)("radio-group",c);n=l.a.createElement("div",{className:m},a.options.map(function(a,n){return l.a.createElement("label",{key:m+"-"+n},l.a.createElement("input",{name:e.name+"-"+t+"-"+n,value:a.value,type:"radio",checked:a.value===e.value,onChange:function(t){return e.setValue(a.value)}}),a.label)}));break;case"switch":var u=Object(r.b)("switch-group",c);n=l.a.createElement("div",{className:u},l.a.createElement("label",null,l.a.createElement("input",{name:e.name+"-"+t,type:"checkbox",checked:e.value,onChange:function(t){e.setValue(t.target.checked)}}),e.value?"true":"false"));break;case"checkbox":var i=Object(r.b)("checkbox-group",c);n=l.a.createElement("div",{className:i},a.options.map(function(a,n){return l.a.createElement("label",{key:i+"-"+n},l.a.createElement("input",{name:e.name+"-"+t+"-"+n,value:a.value,type:"checkbox",checked:e.value.indexOf(a.value)>-1,onChange:function(t){var n=[],c=e.value.indexOf(a.value);c<0&&n.push(a.value),e.value.forEach(function(e,t){c>-1&&t===c||n.push(e)}),e.setValue(n)}}),a.label)}))}return l.a.createElement("div",{className:c,key:c+"-"+t},l.a.createElement("div",{className:Object(r.b)("label",c)},a.label+" ("+e.name+") :"),l.a.createElement("div",{className:Object(r.b)("controller")},n))})),l.a.createElement("div",{className:Object(r.b)("component",o)},l.a.createElement("div",{className:Object(r.b)("title",o)},"Component"),l.a.createElement(t,n.a({},a||{},u))))};t.a=function(e){var t,a=e.component,n=e.componentName,m=e.componentProps,u=e.componentTestProps,i=e.componentPackageJson,b=e.defaultActiveComponentName,p=e.children;if(Array.isArray(a)&&(!Array.isArray(n)||!Array.isArray(m)||!Array.isArray(u)||n.length!==a.length||m.length!==a.length||u.length!==a.length))return l.a.createElement("div",null,"Invalid Test Props");if(Array.isArray(a)){var v=0;if(b){var d=n.indexOf(b);d>-1&&(v=d)}var E=Object(c.useState)(v),f=E[0],O=E[1];t=[l.a.createElement("div",{className:Object(r.b)("items",o),key:"items"},a.map(function(e,t){var a,n=Object(r.b)("item",o);return l.a.createElement("div",{className:Object(r.a)(n,(a={},a[n+"-active"]=t===f,a)),key:n+"-"+t},l.a.createElement(s,{component:e,componentProps:m?m[t]:void 0,componentTestProps:u[t]}))})),l.a.createElement("div",{className:Object(r.b)("tabs",o),key:"tabs"},a.map(function(e,t){var a,c=Object(r.b)("tab",o);return l.a.createElement("div",{key:c+"-"+t,onClick:function(){O(t)},className:Object(r.a)(c,(a={},a[c+"-active"]=t===f,a))},n?n[t]:void 0)}))]}else t=l.a.createElement(s,{component:a,componentProps:m,componentTestProps:u});return l.a.createElement("div",{className:Object(r.a)(o)},l.a.createElement("div",{className:Object(r.b)("package",o)},l.a.createElement("div",{className:Object(r.b)("title",o)},"Package"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"name:"),l.a.createElement("td",null,i.name)),l.a.createElement("tr",null,l.a.createElement("td",null,"description:"),l.a.createElement("td",null,i.description)),l.a.createElement("tr",null,l.a.createElement("td",null,"version:"),l.a.createElement("td",null,i.version))))),t,p&&l.a.createElement("div",{className:Object(r.b)("custom",o)},l.a.createElement("div",{className:Object(r.b)("title",o)},"Custom"),p))}},36:function(e,t,a){},67:function(e,t,a){},68:function(e){e.exports={name:"@rc-x/rate",version:"0.0.1",description:"Rate",author:"Pwcong <pwcong@foxmail.com>",main:"dist/bundle.min.js",module:"dist/bundle.es.js",keywords:["rc-x-rate"],license:"MIT",dependencies:{"@rc-x/style":"^0.0.1","@rc-x/utils":"^0.0.1"},devDependencies:{"@rc-x/test":"^0.0.1"}}},90:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(35),r=a(6),o=(a(67),Object(r.b)("rate")),s=function(e){return c.a.createElement("div",{className:Object(r.a)(o)},"Hello World!")},m=a(68);t.default=function(){return c.a.createElement(l.a,{component:s,componentProps:{},componentTestProps:{},componentPackageJson:m})}}}]);
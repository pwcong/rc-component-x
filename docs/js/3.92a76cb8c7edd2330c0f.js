(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{49:function(e,t,a){"use strict";var n=function(e,t){return e?(t||"rc-x")+"-"+e:"rc-x"},r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var a={}.hasOwnProperty,n=[],l=0;l<e.length;l++){var c=e[l];if(c){var o=typeof c;if("string"===o||"number"===o)n.push(c);else if(Array.isArray(c)&&c.length){var i=r.apply(null,c);i&&n.push(i)}else if("object"===o)for(var s in c)a.call(c,s)&&c[s]&&n.push(s)}}return n.join(" ")},l=r,c=function(e,t,a,n){e&&(console.warn(t+": "+a),n&&n())};a.d(t,"a",function(){return l}),a.d(t,"b",function(){return n}),a.d(t,"c",function(){return c})},50:function(e,t,a){"use strict";var n=a(18),r=a(0),l=a.n(r),c=a(49),o=(a(51),Object(c.b)("test")),i=function(e){var t=e.component,a=e.componentProps,i=e.componentTestProps,s=Object.keys(i).map(function(e){var t=i[e],a=Object(r.useState)(t.value);return{name:e,value:a[0],setValue:a[1]}}),u={};return s.forEach(function(e){return u[e.name]=e.value}),l.a.createElement("div",{className:Object(c.b)("child",o)},l.a.createElement("div",{className:Object(c.b)("props",o)},l.a.createElement("div",{className:Object(c.b)("title",o)},"Props"),s.map(function(e,t){var a=i[e.name];if(!a)return null;var n,r=Object(c.b)("prop",o);switch(a.type){case"input":n=l.a.createElement("input",{value:e.value,type:"text",onChange:function(t){e.setValue(t.target.value)}});break;case"inputNumber":n=l.a.createElement("input",{type:"number",value:e.value,onChange:function(t){e.setValue(Number(t.target.value))}});break;case"radio":var s=Object(c.b)("radio-group",r);n=l.a.createElement("div",{className:s},a.options.map(function(t,a){return l.a.createElement("label",{key:s+"-"+a},l.a.createElement("input",{name:e.name,value:t.value,type:"radio",checked:t.value===e.value,onChange:function(t){return e.setValue(t.target.value)}}),t.label)}));break;case"switch":var u=Object(c.b)("switch-group",r);n=l.a.createElement("div",{className:u},l.a.createElement("label",null,l.a.createElement("input",{name:e.name,type:"checkbox",checked:e.value,onChange:function(t){e.setValue(t.target.checked)}}),e.value?"true":"false"));break;case"checkbox":var m=Object(c.b)("checkbox-group",r);n=l.a.createElement("div",{className:m},a.options.map(function(t,a){return l.a.createElement("label",{key:m+"-"+a},l.a.createElement("input",{name:e.name,value:t.value,type:"checkbox",checked:e.value.indexOf(t.value)>-1,onChange:function(t){var a=[],n=e.value.indexOf(t.target.value);n<0&&a.push(t.target.value),e.value.forEach(function(e,t){n>-1&&t===n||a.push(e)}),e.setValue(a)}}),t.label)}))}return l.a.createElement("div",{className:r,key:r+"-"+t},l.a.createElement("div",{className:Object(c.b)("label",r)},a.label+" ("+e.name+") :"),l.a.createElement("div",{className:Object(c.b)("controller")},n))})),l.a.createElement("div",{className:Object(c.b)("component",o)},l.a.createElement("div",{className:Object(c.b)("title",o)},"Component"),l.a.createElement(t,n.a({},a||{},u))))};t.a=function(e){var t,a=e.component,n=e.componentName,s=e.componentProps,u=e.componentTestProps,m=e.componentPackageJson,p=e.defaultActiveComponentName,d=e.children;if(Array.isArray(a)&&(!Array.isArray(n)||!Array.isArray(s)||!Array.isArray(u)||n.length!==a.length||s.length!==a.length||u.length!==a.length))return l.a.createElement("div",null,"Invalid Test Props");if(Array.isArray(a)){var f=0;if(p){var v=n.indexOf(p);v>-1&&(f=v)}var b=Object(r.useState)(f),h=b[0],E=b[1];t=[l.a.createElement("div",{className:Object(c.b)("items",o),key:"items"},a.map(function(e,t){var a,n=Object(c.b)("item",o);return l.a.createElement("div",{className:Object(c.a)(n,(a={},a[n+"-active"]=t===h,a)),key:n+"-"+t},l.a.createElement(i,{component:e,componentProps:s?s[t]:void 0,componentTestProps:u[t]}))})),l.a.createElement("div",{className:Object(c.b)("tabs",o),key:"tabs"},a.map(function(e,t){var a,r=Object(c.b)("tab",o);return l.a.createElement("div",{key:r+"-"+t,onClick:function(){E(t)},className:Object(c.a)(r,(a={},a[r+"-active"]=t===h,a))},n?n[t]:void 0)}))]}else t=l.a.createElement(i,{component:a,componentProps:s,componentTestProps:u});return l.a.createElement("div",{className:Object(c.a)(o)},l.a.createElement("div",{className:Object(c.b)("package",o)},l.a.createElement("div",{className:Object(c.b)("title",o)},"Package"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"name:"),l.a.createElement("td",null,m.name)),l.a.createElement("tr",null,l.a.createElement("td",null,"description:"),l.a.createElement("td",null,m.description)),l.a.createElement("tr",null,l.a.createElement("td",null,"version:"),l.a.createElement("td",null,m.version))))),t,d&&l.a.createElement("div",{className:Object(c.b)("custom",o)},l.a.createElement("div",{className:Object(c.b)("title",o)},"Custom"),d))}},51:function(e,t,a){},58:function(e,t,a){},59:function(e){e.exports={name:"@rc-x/folder",version:"0.0.1",description:"Folder",author:"Pwcong <pwcong@foxmail.com>",main:"dist/bundle.min.js",module:"dist/bundle.es.js",keywords:["rc-x-folder"],license:"MIT",dependencies:{"@rc-x/style":"^0.0.1","@rc-x/utils":"^0.0.1","react-motion":"^0.5.2"},devDependencies:{"@rc-x/test":"^0.0.1"}}},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(50),c=a(18),o=a(49),i=function(e){return e<0?0:e},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ref=r.a.createRef(),t.getRef=function(){return t.props.forwardedRef||t.ref},t}return c.b(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.maxHeight,n=e.minHeight,l=e.expand,c=e.style,s=void 0===c?{}:c,u=Object(o.b)("folder-panel"),m={};m.height=!1===l?"0":"auto",a&&(m.maxHeight=i(a)+"px"),n&&(m.minHeight=i(n)+"px");var p=this.getRef();return p&&p.current&&!1===l&&(p.current.scrollTop=0),r.a.createElement("div",{ref:p,className:Object(o.a)(u,u+"-"+(!1===l?"collapse":"expand")),style:Object.assign({},s,m)},t)},t}(r.a.PureComponent),u=r.a.forwardRef(function(e,t){return r.a.createElement(s,c.a({},e,{forwardedRef:t}))}),m=a(47),p=function(e){function t(t){var a=e.call(this,t)||this;a.ref=r.a.createRef(),a.getRef=function(){return a.props.forwardedRef||a.ref};var n=t.expand;return a.state={expand:!0===n,status:void 0===n?"expand":"collapse",panelHeight:0},a}return c.b(t,e),t.getDerivedStateFromProps=function(e,t){return void 0!==e.expand&&t.expand!==e.expand?Object.assign({},t,{expand:e.expand,status:"idle"}):t},t.prototype.componentDidMount=function(){var e=this.getRef();e&&e.current&&this.setState({panelHeight:e.current.scrollHeight})},t.prototype.render=function(){var e=this,t=this.props,a=t.children,n=t.expand,l=t.maxHeight,c=t.minHeight,s=t.style,u=void 0===s?{}:s,p=this.state.status,d=Object(o.b)("folder-motion-panel"),f={};l&&(f.maxHeight=i(l)+"px"),c&&(f.minHeight=i(c)+"px");var v=this.getRef(),b=this.state.panelHeight;if(v&&v.current){var h=v.current;h.scrollHeight!==b&&(b=h.scrollHeight),!1===n&&(h.scrollTop=0)}var E=!1===n?0:b;return r.a.createElement(m.Motion,{style:{height:Object(m.spring)(E,{stiffness:260,damping:26})},onRest:function(){e.setState({status:n?"expand":"collapse",panelHeight:b})}},function(e){return r.a.createElement("div",{className:Object(o.a)(d,d+"-"+p),ref:v,style:Object.assign({},u,f,{height:e.height})},a)})},t}(r.a.PureComponent),d=r.a.forwardRef(function(e,t){return r.a.createElement(p,c.a({},e,{forwardedRef:t}))}),f=(a(58),r.a.forwardRef(function(e,t){var a=e.className,n=e.useMotion;return r.a.createElement("div",{className:Object(o.a)(Object(o.b)("folder"),a)},!1===n?r.a.createElement(u,c.a({},e,{ref:t})):r.a.createElement(d,c.a({},e,{ref:t})))})),v=a(59);t.default=function(){return r.a.createElement(l.a,{component:f,componentProps:{children:r.a.createElement("div",null,r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!")),style:{border:"1px solid #cccccc"}},componentTestProps:{useMotion:{type:"switch",label:"是否使用动画",value:!1},expand:{type:"switch",label:"是否展开",value:!0},minHeight:{type:"inputNumber",label:"最小高度",value:0},maxHeight:{type:"inputNumber",label:"最大高度",value:50}},componentPackageJson:v})}}}]);
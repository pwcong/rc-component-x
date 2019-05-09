(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{57:function(e,t,a){"use strict";var n=a(19),r=a(0),l=a.n(r),c=a(8),o=(a(58),Object(c.b)("test")),i=function(e){var t=e.component,a=e.componentProps,i=e.componentTestProps,s=Object.keys(i).map(function(e){var t=i[e],a=Object(r.useState)(t.value);return{name:e,value:a[0],setValue:a[1]}}),u={};return s.forEach(function(e){return u[e.name]=e.value}),l.a.createElement("div",{className:Object(c.b)("child",o)},l.a.createElement("div",{className:Object(c.b)("props",o)},l.a.createElement("div",{className:Object(c.b)("title",o)},"Props"),s.map(function(e,t){var a=i[e.name];if(!a)return null;var n,r=Object(c.b)("prop",o);switch(a.type){case"input":n=l.a.createElement("input",{value:e.value,type:"text",onChange:function(t){e.setValue(t.target.value)}});break;case"inputNumber":n=l.a.createElement("input",{type:"number",value:e.value,onChange:function(t){e.setValue(Number(t.target.value))}});break;case"radio":var s=Object(c.b)("radio-group",r);n=l.a.createElement("div",{className:s},a.options.map(function(a,n){return l.a.createElement("label",{key:s+"-"+n},l.a.createElement("input",{name:e.name+"-"+t+"-"+n,value:a.value,type:"radio",checked:a.value===e.value,onChange:function(t){return e.setValue(a.value)}}),a.label)}));break;case"switch":var u=Object(c.b)("switch-group",r);n=l.a.createElement("div",{className:u},l.a.createElement("label",null,l.a.createElement("input",{name:e.name+"-"+t,type:"checkbox",checked:e.value,onChange:function(t){e.setValue(t.target.checked)}}),e.value?"true":"false"));break;case"checkbox":var m=Object(c.b)("checkbox-group",r);n=l.a.createElement("div",{className:m},a.options.map(function(a,n){return l.a.createElement("label",{key:m+"-"+n},l.a.createElement("input",{name:e.name+"-"+t+"-"+n,value:a.value,type:"checkbox",checked:e.value.indexOf(a.value)>-1,onChange:function(t){var n=[],r=e.value.indexOf(a.value);r<0&&n.push(a.value),e.value.forEach(function(e,t){r>-1&&t===r||n.push(e)}),e.setValue(n)}}),a.label)}))}return l.a.createElement("div",{className:r,key:r+"-"+t},l.a.createElement("div",{className:Object(c.b)("label",r)},a.label+" ("+e.name+") :"),l.a.createElement("div",{className:Object(c.b)("controller")},n))})),l.a.createElement("div",{className:Object(c.b)("component",o)},l.a.createElement("div",{className:Object(c.b)("title",o)},"Component"),l.a.createElement(t,n.a({},a||{},u))))};t.a=function(e){var t,a=e.component,n=e.componentName,s=e.componentProps,u=e.componentTestProps,m=e.componentPackageJson,p=e.defaultActiveComponentName,d=e.children;if(Array.isArray(a)&&(!Array.isArray(n)||!Array.isArray(s)||!Array.isArray(u)||n.length!==a.length||s.length!==a.length||u.length!==a.length))return l.a.createElement("div",null,"Invalid Test Props");if(Array.isArray(a)){var v=0;if(p){var b=n.indexOf(p);b>-1&&(v=b)}var f=Object(r.useState)(v),h=f[0],E=f[1];t=[l.a.createElement("div",{className:Object(c.b)("items",o),key:"items"},a.map(function(e,t){var a,n=Object(c.b)("item",o);return l.a.createElement("div",{className:Object(c.a)(n,(a={},a[n+"-active"]=t===h,a)),key:n+"-"+t},l.a.createElement(i,{component:e,componentProps:s?s[t]:void 0,componentTestProps:u[t]}))})),l.a.createElement("div",{className:Object(c.b)("tabs",o),key:"tabs"},a.map(function(e,t){var a,r=Object(c.b)("tab",o);return l.a.createElement("div",{key:r+"-"+t,onClick:function(){E(t)},className:Object(c.a)(r,(a={},a[r+"-active"]=t===h,a))},n?n[t]:void 0)}))]}else t=l.a.createElement(i,{component:a,componentProps:s,componentTestProps:u});return l.a.createElement("div",{className:Object(c.a)(o)},l.a.createElement("div",{className:Object(c.b)("package",o)},l.a.createElement("div",{className:Object(c.b)("title",o)},"Package"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"name:"),l.a.createElement("td",null,m.name)),l.a.createElement("tr",null,l.a.createElement("td",null,"description:"),l.a.createElement("td",null,m.description)),l.a.createElement("tr",null,l.a.createElement("td",null,"version:"),l.a.createElement("td",null,m.version))))),t,d&&l.a.createElement("div",{className:Object(c.b)("custom",o)},l.a.createElement("div",{className:Object(c.b)("title",o)},"Custom"),d))}},58:function(e,t,a){},61:function(e,t,a){"use strict";a(62);var n=a(54),r=a(55);t.a={motion:n,transition:r}},62:function(e,t,a){},72:function(e,t,a){},73:function(e){e.exports={name:"@rc-x/folder",version:"0.0.1",description:"Folder",author:"Pwcong <pwcong@foxmail.com>",main:"dist/bundle.min.js",module:"dist/bundle.es.js",keywords:["rc-x-folder"],license:"MIT",dependencies:{"@rc-x/animate":"^0.0.1","@rc-x/style":"^0.0.1","@rc-x/utils":"^0.0.1"},devDependencies:{"@rc-x/test":"^0.0.1"}}},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(57),c=a(19),o=a(8),i=function(e){return e<0?0:e},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ref=r.a.createRef(),t.getRef=function(){return t.props.forwardedRef||t.ref},t}return c.b(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.maxHeight,n=e.minHeight,l=e.expand,c=e.style,s=void 0===c?{}:c,u=Object(o.b)("folder-panel"),m={};m.height=!1===l?"0":"auto",a&&(m.maxHeight=i(a)+"px"),n&&(m.minHeight=i(n)+"px");var p=this.getRef();return p&&p.current&&!1===l&&(p.current.scrollTop=0),r.a.createElement("div",{ref:p,className:Object(o.a)(u,u+"-"+(!1===l?"collapse":"expand")),style:Object.assign({},s,m)},t)},t}(r.a.PureComponent),u=r.a.forwardRef(function(e,t){return r.a.createElement(s,c.a({},e,{forwardedRef:t}))}),m=a(61).a.motion,p=m.Motion,d=m.spring,v=function(e){function t(t){var a=e.call(this,t)||this;a.ref=r.a.createRef(),a.getRef=function(){return a.props.forwardedRef||a.ref};var n=t.expand;return a.state={expand:!0===n,status:void 0===n?"expand":"collapse",panelHeight:0},a}return c.b(t,e),t.getDerivedStateFromProps=function(e,t){return void 0!==e.expand&&t.expand!==e.expand?Object.assign({},t,{expand:e.expand,status:"idle"}):t},t.prototype.componentDidMount=function(){var e=this.getRef();e&&e.current&&this.setState({panelHeight:e.current.scrollHeight})},t.prototype.render=function(){var e=this,t=this.props,a=t.children,n=t.expand,l=t.maxHeight,c=t.minHeight,s=t.style,u=void 0===s?{}:s,m=this.state.status,v=Object(o.b)("folder-motion-panel"),b={};l&&(b.maxHeight=i(l)+"px"),c&&(b.minHeight=i(c)+"px");var f=this.getRef(),h=this.state.panelHeight;if(f&&f.current){var E=f.current;E.scrollHeight!==h&&(h=E.scrollHeight),!1===n&&(E.scrollTop=0)}var g=!1===n?0:h;return r.a.createElement(p,{style:{height:d(g,{stiffness:260,damping:26})},onRest:function(){e.setState({status:n?"expand":"collapse",panelHeight:h})}},function(e){return r.a.createElement("div",{className:Object(o.a)(v,v+"-"+m),ref:f,style:Object.assign({},u,b,{height:e.height})},a)})},t}(r.a.PureComponent),b=r.a.forwardRef(function(e,t){return r.a.createElement(v,c.a({},e,{forwardedRef:t}))}),f=(a(72),r.a.forwardRef(function(e,t){var a=e.className,n=e.useMotion;return r.a.createElement("div",{className:Object(o.a)(Object(o.b)("folder"),a)},!1===n?r.a.createElement(u,c.a({},e,{ref:t})):r.a.createElement(b,c.a({},e,{ref:t})))})),h=a(73);t.default=function(){return r.a.createElement(l.a,{component:f,componentProps:{children:r.a.createElement("div",null,r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!"),r.a.createElement("p",null,"Hello World!")),style:{border:"1px solid #cccccc"}},componentTestProps:{useMotion:{type:"switch",label:"是否使用动画",value:!1},expand:{type:"switch",label:"是否展开",value:!0},minHeight:{type:"inputNumber",label:"最小高度",value:0},maxHeight:{type:"inputNumber",label:"最大高度",value:50}},componentPackageJson:h})}}}]);
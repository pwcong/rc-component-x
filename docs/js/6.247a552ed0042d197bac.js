(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{33:function(e,a,t){"use strict";var n=t(13),c=t(0),l=t.n(c),r=t(6),o=(t(35),Object(r.c)("test")),i=function(e){var a=e.component,t=e.componentProps,i=e.componentTestProps,s=Object.keys(i).map(function(e){var a=i[e],t=Object(c.useState)(a.value);return{name:e,value:t[0],setValue:t[1]}}),u={};return s.forEach(function(e){return u[e.name]=e.value}),l.a.createElement("div",{className:Object(r.c)("child",o)},l.a.createElement("div",{className:Object(r.c)("props",o)},l.a.createElement("div",{className:Object(r.c)("title",o)},"Props"),s.map(function(e,a){var t=i[e.name];if(!t)return null;var n,c=Object(r.c)("prop",o);switch(t.type){case"input":n=l.a.createElement("input",{value:e.value,type:"text",onChange:function(a){e.setValue(a.target.value)}});break;case"inputNumber":n=l.a.createElement("input",{type:"number",value:e.value,onChange:function(a){e.setValue(Number(a.target.value))}});break;case"radio":var s=Object(r.c)("radio-group",c);n=l.a.createElement("div",{className:s},t.options.map(function(t,n){return l.a.createElement("label",{key:s+"-"+n},l.a.createElement("input",{name:e.name+"-"+a+"-"+n,value:t.value,type:"radio",checked:t.value===e.value,onChange:function(a){return e.setValue(t.value)}}),t.label)}));break;case"switch":var u=Object(r.c)("switch-group",c);n=l.a.createElement("div",{className:u},l.a.createElement("label",null,l.a.createElement("input",{name:e.name+"-"+a,type:"checkbox",checked:e.value,onChange:function(a){e.setValue(a.target.checked)}}),e.value?"true":"false"));break;case"checkbox":var d=Object(r.c)("checkbox-group",c);n=l.a.createElement("div",{className:d},t.options.map(function(t,n){return l.a.createElement("label",{key:d+"-"+n},l.a.createElement("input",{name:e.name+"-"+a+"-"+n,value:t.value,type:"checkbox",checked:e.value.indexOf(t.value)>-1,onChange:function(a){var n=[],c=e.value.indexOf(t.value);c<0&&n.push(t.value),e.value.forEach(function(e,a){c>-1&&a===c||n.push(e)}),e.setValue(n)}}),t.label)}))}return l.a.createElement("div",{className:c,key:c+"-"+a},l.a.createElement("div",{className:Object(r.c)("label",c)},t.label+" ("+e.name+") :"),l.a.createElement("div",{className:Object(r.c)("controller")},n))})),l.a.createElement("div",{className:Object(r.c)("component",o)},l.a.createElement("div",{className:Object(r.c)("title",o)},"Component"),l.a.createElement(a,Object(n.a)(Object(n.a)({},t||{}),u))))};a.a=function(e){var a,t=e.component,n=e.componentName,s=e.componentProps,u=e.componentTestProps,d=e.componentPackageJson,m=e.defaultActiveComponentName,v=e.children;if(Array.isArray(t)&&(!Array.isArray(n)||!Array.isArray(s)||!Array.isArray(u)||n.length!==t.length||s.length!==t.length||u.length!==t.length))return l.a.createElement("div",null,"Invalid Test Props");if(Array.isArray(t)){var p=0;if(m){var b=n.indexOf(m);b>-1&&(p=b)}var h=Object(c.useState)(p),f=h[0],O=h[1];a=[l.a.createElement("div",{className:Object(r.c)("items",o),key:"items"},t.map(function(e,a){var t,n=Object(r.c)("item",o);return l.a.createElement("div",{className:Object(r.a)(n,(t={},t[n+"-active"]=a===f,t)),key:n+"-"+a},l.a.createElement(i,{component:e,componentProps:s?s[a]:void 0,componentTestProps:u[a]}))})),l.a.createElement("div",{className:Object(r.c)("tabs",o),key:"tabs"},t.map(function(e,a){var t,c=Object(r.c)("tab",o);return l.a.createElement("div",{key:c+"-"+a,onClick:function(){O(a)},className:Object(r.a)(c,(t={},t[c+"-active"]=a===f,t))},n?n[a]:void 0)}))]}else a=l.a.createElement(i,{component:t,componentProps:s,componentTestProps:u});return l.a.createElement("div",{className:Object(r.a)(o)},l.a.createElement("div",{className:Object(r.c)("package",o)},l.a.createElement("div",{className:Object(r.c)("title",o)},"Package"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"name:"),l.a.createElement("td",null,d.name)),l.a.createElement("tr",null,l.a.createElement("td",null,"description:"),l.a.createElement("td",null,d.description)),l.a.createElement("tr",null,l.a.createElement("td",null,"version:"),l.a.createElement("td",null,d.version))))),a,v&&l.a.createElement("div",{className:Object(r.c)("custom",o)},l.a.createElement("div",{className:Object(r.c)("title",o)},"Custom"),v))}},35:function(e,a,t){},42:function(e,a,t){},52:function(e){e.exports=JSON.parse('{"name":"@rc-x/checkbox","version":"0.0.1","description":"Checkbox","author":"Pwcong <pwcong@foxmail.com>","main":"dist/bundle.min.js","module":"dist/bundle.es.js","types":"dist/bundle.d.ts","keywords":["rc-x-checkbox"],"license":"MIT","dependencies":{"@rc-x/style":"^0.0.1","@rc-x/utils":"^0.0.1"},"devDependencies":{"@rc-x/test":"^0.0.1"}}')},86:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(33),r=t(13),o=t(6),i=(t(42),Object(o.c)("checkbox")),s=function(e){function a(a){var t=e.call(this,a)||this;t.handleChange=function(e){var a=t.props,n=a.onCheck,c=a.disabled,l=a.checked;if(!c){var r=!(void 0!==l?l:t.state.checked);t.setState({checked:r},function(){n&&n(r)})}};var n=a.defaultChecked,c=void 0!==n&&n;return t.state={checked:c},t}return Object(r.b)(a,e),a.prototype.render=function(){var e,a=this.props,t=a.className,n=a.value,l=a.children,s=a.checked,u=a.disabled,d=a.name,m=a.style,v=this.state.checked,p=Object(o.d)(this.props);return c.a.createElement("label",Object(r.a)({},p,{className:Object(o.a)(Object(o.c)("wrapper",i),t),style:m}),c.a.createElement("div",{className:Object(o.c)("inner",i)},c.a.createElement("span",{className:Object(o.a)(i,(e={},e[""+Object(o.c)("disabled",i)]=u,e[""+Object(o.c)("active",i)]=void 0!==s?s:v,e))},c.a.createElement("input",{type:"checkbox",name:d,disabled:u,checked:void 0!==s?s:v,value:n,onChange:this.handleChange})),c.a.createElement("span",{className:Object(o.c)("children",i)},l)))},a}(c.a.PureComponent),u=Object(o.c)("checkbox-group"),d=function(e){function a(a){var t=e.call(this,a)||this;t.handleChange=function(e,a){var n=t.props,c=n.value,l=n.onChange,r=(void 0!==c?c:t.state.value).map(function(e){return e}).filter(function(a){return a!==e}).concat(a?[e]:[]);t.setState({value:r},function(){l&&l(r)})},t.renderOptions=function(){var e=t.props,a=e.options,n=e.children,l=e.name,o=e.value,i=e.disabled;return void 0!==a?a.map(function(e,a){var n={checked:void 0!==o?o.indexOf(e.value)>-1:t.state.value.indexOf(e.value)>-1,key:u+"-item-"+a,name:l,value:e.value,onCheck:function(a){t.handleChange(e.value,a)},disabled:void 0!==i?i:e.disabled};return c.a.createElement(s,Object(r.a)({},n),e.label)}):c.a.Children.map(n,function(e,a){var n=Object.assign({},e.props,{key:u+"-item-"+a,name:l,checked:void 0!==o?o.indexOf(e.props.value)>-1:t.state.value.indexOf(e.props.value)>-1,disabled:void 0!==i?i:e.props.disabled,onCheck:function(a){t.handleChange(e.props.value,a)}});return c.a.createElement(s,Object(r.a)({},n))})};var n=a.defaultValue;return t.state={value:n||[]},t}return Object(r.b)(a,e),a.prototype.render=function(){var e=this.props.className,a=Object(o.d)(this.props);return c.a.createElement("div",Object(r.a)({},a,{className:Object(o.a)(u,e)}),this.renderOptions())},a}(c.a.PureComponent),m=s,v=t(52);a.default=function(){return c.a.createElement(l.a,{component:[m,d],componentProps:[{children:"Hello World!"},{options:[{label:"AAA",value:"a"},{label:"BBB",value:"b"},{label:"CCC",value:"c"}],onChange:function(e){console.log(e)}}],componentTestProps:[{disabled:{type:"switch",value:!1,label:"是否禁用"},defaultChecked:{type:"switch",value:!1,label:"默认选中状态"},checked:{type:"radio",label:"选中状态",value:void 0,options:[{value:void 0,label:"undefined"},{value:!0,label:"true"},{value:!1,label:"false"}]},name:{type:"input",value:"radio",label:"字段名称"},value:{type:"input",value:"value",label:"选中值"}},{disabled:{type:"radio",value:void 0,label:"是否禁用",options:[{value:void 0,label:"undefined"},{value:!0,label:"true"},{value:!1,label:"false"}]},name:{type:"input",value:"radio-group",label:"字段名称"},value:{type:"radio",label:"当前选中值",value:void 0,options:[{value:void 0,label:"undefined"},{value:["a"],label:'["a"]'},{value:["b"],label:'["b"]'},{value:["c"],label:'["c"]'}]}}],componentName:["Checkbox","CheckboxGroup"],componentPackageJson:v})}}}]);
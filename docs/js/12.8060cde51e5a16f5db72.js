(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,a,t){},81:function(e){e.exports={name:"@rc-x/switch",version:"0.0.1",description:"Switch",author:"Pwcong <pwcong@foxmail.com>",main:"dist/bundle.min.js",module:"dist/bundle.es.js",keywords:["rc-x-switch"],license:"MIT",dependencies:{"@rc-x/icon":"^0.0.1","@rc-x/style":"^0.0.1","@rc-x/utils":"^0.0.1"},devDependencies:{"@rc-x/test":"^0.0.1"}}},94:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(57),s=t(19),i=t(59),o=t(8),d=(t(80),Object(o.b)("switch")),r=function(e){function a(a){var t=e.call(this,a)||this;t.handleChange=function(e){var a=t.props,n=a.disabled,c=a.loading,l=a.onChange;if(!n&&!c){var s=e.target.checked;t.setState({checked:s},function(){l&&l(s)})}};var n=a.defaultChecked;return t.state={checked:void 0!==n&&n},t}return s.b(a,e),a.prototype.render=function(){var e,a=this.props,t=a.className,n=a.name,l=a.value,s=a.checked,r=a.size,u=a.loading,p=a.disabled,h=a.checkedChildren,m=a.unCheckedChildren,b=this.state.checked;return c.a.createElement("label",{className:Object(o.a)(d,t,(e={},e[d+"-"+r]=r,e[d+"-loading"]=u,e[d+"-disabled"]=p,e[d+"-checked"]=void 0!==s?s:b,e))},c.a.createElement("span",{className:Object(o.b)("input",d)},c.a.createElement("input",{type:"checkbox",name:n,value:l,checked:void 0!==s?s:b,onChange:this.handleChange})),c.a.createElement("span",{className:Object(o.b)("button",d)},c.a.createElement("span",{className:Object(o.b)("dot",d)},u&&c.a.createElement(i.a,{type:"loader",spin:!0})),c.a.createElement("span",null,h),c.a.createElement("span",null,m)))},a}(c.a.PureComponent),u=t(81);a.default=function(){return c.a.createElement(l.a,{component:r,componentProps:{},componentTestProps:{loading:{type:"switch",label:"是否加载中",value:!0},disabled:{type:"switch",label:"是否禁用",value:!1},defaultChecked:{type:"switch",label:"默认选中状态",value:!0},size:{type:"radio",label:"尺寸",value:"default",options:[{label:"default",value:"default"},{label:"large",value:"large"},{label:"small",value:"small"}]}},componentPackageJson:u})}}}]);
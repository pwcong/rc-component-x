(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{39:function(e,l,a){"use strict";var t=a(0),n=a.n(t),o=a(37),u=a(6),c=(a(40),Object(u.b)("button")),i=function(e){var l,a=e.className,t=e.children,i=e.onClick,b=e.htmlType,s=void 0===b?"button":b,d=e.type,r=void 0===d?"default":d,p=e.shape,v=void 0===p?"default":p,f=e.size,m=void 0===f?"default":f,y=e.icon,h=e.disabled,k=e.href,w=e.target,g=void 0===w?"_self":w,j=e.loading,O=e.block,x=e.checked;return n.a.createElement("button",{className:Object(u.a)(c,a,Object(u.b)(m,c),Object(u.b)(v,c),Object(u.b)(r,c),(l={},l[""+Object(u.b)("disabled",c)]=h,l[""+Object(u.b)("loading",c)]=j,l[""+Object(u.b)("block",c)]=O,l[""+Object(u.b)("checked",c)]=x,l)),onClick:j||h?void 0:k?function(){window.open(k,g)}:i,type:s},(y||j)&&n.a.createElement("span",{className:Object(u.b)("icon",c)},n.a.createElement(o.a,{type:y||(j?"loader":""),spin:j})),n.a.createElement("span",null,t))};i.defaultProps={htmlType:"button",size:"default",shape:"default",type:"default",target:"_self"},l.a=i},40:function(e,l,a){},52:function(e){e.exports={name:"@rc-x/button",version:"0.0.1",description:"Button",main:"dist/bundle.min.js",module:"dist/bundle.es.js",keywords:["rc-x-button"],author:"Pwcong <pwcong@foxmail.com>",dependencies:{"@rc-x/icon":"^0.0.1","@rc-x/style":"^0.0.1","@rc-x/utils":"^0.0.1"},devDependencies:{"@rc-x/test":"^0.0.1"},license:"MIT",gitHead:"56ef5fc17a78c9aaaf5dfde8b6ed6b5fb779bd51"}},75:function(e,l,a){"use strict";a.r(l);var t=a(0),n=a.n(t),o=a(35),u=a(39),c=a(52);l.default=function(){return n.a.createElement(o.a,{component:u.a,componentProps:{children:"Hello World!"},componentTestProps:{type:{type:"radio",label:"类型",value:"default",options:[{label:"primary",value:"primary"},{label:"default",value:"default"},{label:"warning",value:"warning"},{label:"success",value:"success"},{label:"danger",value:"danger"}]},shape:{type:"radio",label:"形状",value:"default",options:[{label:"default",value:"default"},{label:"round",value:"round"},{label:"circle",value:"circle"},{label:"link",value:"link"}]},size:{type:"radio",label:"尺寸",value:"default",options:[{label:"large",value:"large"},{label:"default",value:"default"},{label:"small",value:"small"}]},disabled:{type:"switch",value:!1,label:"是否禁止"},loading:{type:"switch",value:!1,label:"是否载入中"},icon:{type:"input",value:"",label:"图标"},href:{type:"input",value:"",label:"链接"},target:{type:"radio",value:"_self",label:"链接窗口对象",options:[{label:"_self",value:"_self"},{label:"_blank",value:"_blank"}]},htmlType:{type:"radio",value:"button",label:"HTML类型",options:[{label:"button",value:"button"},{label:"submit",value:"submit"},{label:"reset",value:"reset"}]},block:{type:"switch",value:!1,label:"是否为Block"},checked:{type:"switch",value:!1,label:"是否为选中状态"}},componentPackageJson:c})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{74:function(e,a,l){},75:function(e){e.exports={name:"@rc-x/tag",version:"0.0.1",description:"Tag",author:"Pwcong <pwcong@foxmail.com>",main:"dist/bundle.min.js",module:"dist/bundle.es.js",types:"dist/bundle.d.ts",keywords:["rc-x-tag"],license:"MIT",dependencies:{"@rc-x/style":"^0.0.1","@rc-x/utils":"^0.0.1"},devDependencies:{"@rc-x/test":"^0.0.1"}}},94:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),s=l(35),c=l(12),o=l(37),u=l(6),r=(l(74),Object(u.c)("tag")),i=function(e){var a,l=e.className,s=e.closable,i=e.type,d=void 0===i?"default":i,p=e.shape,b=void 0===p?"default":p,v=e.onClose,f=e.style,m=e.visible,y=e.children,w=Object(u.d)(e),j=Object(t.useState)(!0),h=j[0],g=j[1],O=void 0!==m?m:h;return n.a.createElement("div",c.a({},w,{className:Object(u.a)(r,l,(a={},a[""+Object(u.c)("hidden",r)]=!O,a[""+Object(u.c)(d,r)]=d,a[""+Object(u.c)(b,r)]=b,a)),style:f}),y&&n.a.createElement("span",{className:Object(u.c)("children",r)},y),s&&n.a.createElement("span",{className:Object(u.c)("close",r)},n.a.createElement(o.a,{type:"x",onClick:function(){g(!1),v&&v()}})))};i.defaultProps={type:"default",shape:"default"};var d=i,p=l(75);a.default=function(){return n.a.createElement(s.a,{component:d,componentProps:{children:"Hello World!"},componentTestProps:{closable:{type:"switch",value:!1,label:"允许关闭"},visible:{type:"radio",value:void 0,label:"是否显示",options:[{label:"undefined",value:void 0},{label:"true",value:!0},{label:"false",value:!1}]},type:{type:"radio",value:"default",label:"类型",options:[{label:"default",value:"default"},{label:"primary",value:"primary"},{label:"success",value:"success"},{label:"warning",value:"warning"},{label:"error",value:"error"}]},shape:{type:"radio",value:"default",label:"形状",options:[{label:"default",value:"default"},{label:"square",value:"square"},{label:"round",value:"round"}]}},componentPackageJson:p})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{69:function(e,a,n){},70:function(e){e.exports={name:"@rc-x/spin",version:"0.0.1",description:"Spin",author:"Pwcong <pwcong@foxmail.com>",main:"dist/bundle.min.js",module:"dist/bundle.es.js",keywords:["rc-x-spin"],license:"MIT",dependencies:{"@rc-x/icon":"^0.0.1","@rc-x/style":"^0.0.1","@rc-x/utils":"^0.0.1"},devDependencies:{"@rc-x/test":"^0.0.1"}}},91:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(35),i=n(37),s=n(6),o=(n(69),Object(s.b)("spin")),r=function(e){var a,n,t=e.wrapperClassName,l=e.className,r=e.size,p=e.tip,b=e.type,d=e.spinning,m=e.children,u=void 0===b?c.a.createElement("span",{className:Object(s.a)(o,l,(a={},a[""+Object(s.b)(r,o)]=r,a[""+Object(s.b)("spinning",o)]=d,a))},c.a.createElement("span",{className:Object(s.b)("indicator",o)}),c.a.createElement("span",{className:Object(s.b)("indicator",o)}),c.a.createElement("span",{className:Object(s.b)("indicator",o)}),c.a.createElement("span",{className:Object(s.b)("indicator",o)})):c.a.createElement(i.a,{className:Object(s.a)(Object(s.b)("icon",o),(n={},n[""+Object(s.b)(r,Object(s.b)("icon",o))]=r,n)),type:b,spin:d});return void 0!==m?c.a.createElement("div",{className:Object(s.a)(Object(s.b)("wrapper",o),t)},d&&c.a.createElement("div",{className:Object(s.b)("inner",o)},u,p&&c.a.createElement("div",{className:Object(s.b)("tip",o)},p)),m):u},p=n(70);a.default=function(){return c.a.createElement(l.a,{component:r,componentProps:{children:c.a.createElement("div",{style:{textAlign:"center",height:200,lineHeight:"200px",border:"1px solid #cccccc"}},"Hello World!")},componentTestProps:{size:{type:"radio",value:"default",label:"尺寸",options:[{label:"default",value:"default"},{label:"small",value:"small"},{label:"large",value:"large"}]},type:{type:"radio",value:void 0,label:"图标类型",options:[{label:"undefined",value:void 0},{label:"loader",value:"loader"}]},spinning:{type:"switch",value:!0,label:"加载中"},tip:{type:"input",value:"Hello World!",label:"提示信息"}},componentPackageJson:p})}}}]);
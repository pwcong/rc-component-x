(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{55:function(e,t,n){},56:function(e){e.exports=JSON.parse('{"name":"@rc-x/folder","version":"0.0.1","description":"Folder","author":"Pwcong <pwcong@foxmail.com>","main":"dist/bundle.min.js","module":"dist/bundle.es.js","types":"dist/bundle.d.ts","keywords":["rc-x-folder"],"license":"MIT","dependencies":{"@rc-x/animate":"^0.0.1","@rc-x/style":"^0.0.1","@rc-x/utils":"^0.0.1"},"devDependencies":{"@rc-x/test":"^0.0.1"}}')},85:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(33),o=n(13),c=n(6),i=function(e){return e<0?0:e},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ref=a.a.createRef(),t.getRef=function(){return t.props.forwardedRef||t.ref},t}return Object(o.b)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.maxHeight,r=e.minHeight,l=e.expand,o=e.style,s=void 0===o?{}:o,p=Object(c.c)("folder-panel"),u={};u.height=!1===l?"0":"auto",n&&(u.maxHeight=i(n)+"px"),r&&(u.minHeight=i(r)+"px");var d=this.getRef();return d&&d.current&&!1===l&&(d.current.scrollTop=0),a.a.createElement("div",{ref:d,className:Object(c.a)(p,p+"-"+(!1===l?"collapse":"expand")),style:Object.assign({},s,u)},t)},t}(a.a.PureComponent),p=a.a.forwardRef(function(e,t){return a.a.createElement(s,Object(o.a)({},e,{forwardedRef:t}))}),u=n(43).a.motion,d=u.Motion,f=u.spring,m=function(e){function t(t){var n=e.call(this,t)||this;n.ref=a.a.createRef(),n.getRef=function(){return n.props.forwardedRef||n.ref};var r=t.expand;return n.state={expand:!0===r,status:void 0===r?"expand":"collapse",panelHeight:0},n}return Object(o.b)(t,e),t.getDerivedStateFromProps=function(e,t){return void 0!==e.expand&&t.expand!==e.expand?Object.assign({},t,{expand:e.expand,status:"idle"}):t},t.prototype.componentDidMount=function(){var e=this.getRef();e&&e.current&&this.setState({panelHeight:e.current.scrollHeight})},t.prototype.render=function(){var e=this,t=this.props,n=t.children,r=t.expand,l=t.maxHeight,o=t.minHeight,s=t.style,p=void 0===s?{}:s,u=this.state.status,m=Object(c.c)("folder-motion-panel"),h={};l&&(h.maxHeight=i(l)+"px"),o&&(h.minHeight=i(o)+"px");var g=this.getRef(),b=this.state.panelHeight;if(g&&g.current){var x=g.current;x.scrollHeight!==b&&(b=x.scrollHeight),!1===r&&(x.scrollTop=0)}var v=!1===r?0:b;return a.a.createElement(d,{style:{height:f(v,{stiffness:260,damping:26})},onRest:function(){e.setState({status:r?"expand":"collapse",panelHeight:b})}},function(e){return a.a.createElement("div",{className:Object(c.a)(m,m+"-"+u),ref:g,style:Object.assign({},p,h,{height:e.height})},n)})},t}(a.a.PureComponent),h=a.a.forwardRef(function(e,t){return a.a.createElement(m,Object(o.a)({},e,{forwardedRef:t}))}),g=(n(55),a.a.forwardRef(function(e,t){var n=e.className,r=e.useMotion,l=Object(c.d)(e);return a.a.createElement("div",Object(o.a)({},l,{className:Object(c.a)(Object(c.c)("folder"),n)}),!1===r?a.a.createElement(p,Object(o.a)({},e,{ref:t})):a.a.createElement(h,Object(o.a)({},e,{ref:t})))})),b=n(56);t.default=function(){return a.a.createElement(l.a,{component:g,componentProps:{children:a.a.createElement("div",null,a.a.createElement("p",null,"Hello World!"),a.a.createElement("p",null,"Hello World!"),a.a.createElement("p",null,"Hello World!"),a.a.createElement("p",null,"Hello World!"),a.a.createElement("p",null,"Hello World!"),a.a.createElement("p",null,"Hello World!"),a.a.createElement("p",null,"Hello World!"),a.a.createElement("p",null,"Hello World!"),a.a.createElement("p",null,"Hello World!"),a.a.createElement("p",null,"Hello World!")),style:{border:"1px solid #cccccc"}},componentTestProps:{useMotion:{type:"switch",label:"是否使用动画",value:!1},expand:{type:"switch",label:"是否展开",value:!0},minHeight:{type:"inputNumber",label:"最小高度",value:0},maxHeight:{type:"inputNumber",label:"最大高度",value:50}},componentPackageJson:b})}}}]);
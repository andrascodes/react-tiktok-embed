/*! For license information please see main.570ff903.chunk.js.LICENSE.txt */
(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{10:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(2),a=r.n(i),c=r(3);var u=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"react-tiktok Example:"),o.a.createElement(c.a,{url:"https://www.tiktok.com/@scout2015/video/6718335390845095173"}))};a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root"))},3:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return Je}));var n=r(0),o=r.n(n);function i(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}((void 0===t||null===t)&&r.path)}},r.exports),r.exports}var a="function"===typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,u=a?Symbol.for("react.portal"):60106,s=a?Symbol.for("react.fragment"):60107,f=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,y=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.async_mode"):60111,m=a?Symbol.for("react.concurrent_mode"):60111,h=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,v=a?Symbol.for("react.suspense_list"):60120,g=a?Symbol.for("react.memo"):60115,w=a?Symbol.for("react.lazy"):60116,T=a?Symbol.for("react.block"):60121,O=a?Symbol.for("react.fundamental"):60117,S=a?Symbol.for("react.responder"):60118,E=a?Symbol.for("react.scope"):60119;function A(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case c:switch(e=e.type){case d:case m:case s:case l:case f:case b:return e;default:switch(e=e&&e.$$typeof){case y:case h:case w:case g:case p:return e;default:return t}}case u:return t}}}function C(e){return A(e)===m}var j={AsyncMode:d,ConcurrentMode:m,ContextConsumer:y,ContextProvider:p,Element:c,ForwardRef:h,Fragment:s,Lazy:w,Memo:g,Portal:u,Profiler:l,StrictMode:f,Suspense:b,isAsyncMode:function(e){return C(e)||A(e)===d},isConcurrentMode:C,isContextConsumer:function(e){return A(e)===y},isContextProvider:function(e){return A(e)===p},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===c},isForwardRef:function(e){return A(e)===h},isFragment:function(e){return A(e)===s},isLazy:function(e){return A(e)===w},isMemo:function(e){return A(e)===g},isPortal:function(e){return A(e)===u},isProfiler:function(e){return A(e)===l},isStrictMode:function(e){return A(e)===f},isSuspense:function(e){return A(e)===b},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===s||e===m||e===l||e===f||e===b||e===v||"object"===typeof e&&null!==e&&(e.$$typeof===w||e.$$typeof===g||e.$$typeof===p||e.$$typeof===y||e.$$typeof===h||e.$$typeof===O||e.$$typeof===S||e.$$typeof===E||e.$$typeof===T)},typeOf:A},P=(i((function(e,t){0})),i((function(e){e.exports=j})),Object.getOwnPropertySymbols),k=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;function I(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var L=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,n,o=I(e),i=1;i<arguments.length;i++){for(var a in r=Object(arguments[i]))k.call(r,a)&&(o[a]=r[a]);if(P){n=P(r);for(var c=0;c<n.length;c++)x.call(r,n[c])&&(o[n[c]]=r[n[c]])}}return o},M="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function _(e,t,r,n,o){}_.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function N(){}function R(){}R.resetWarningCache=N;var D=i((function(e){e.exports=function(){function e(e,t,r,n,o,i){if(i!==M){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:R,resetWarningCache:N};return r.PropTypes=r,r}()}));var $,F=($=o.a)&&"object"===typeof $&&"default"in $?$.default:$;function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B=!("undefined"===typeof window||!window.document||!window.document.createElement);var H=function(e,t,r){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!==typeof n)throw new Error("Expected WrappedComponent to be a React component.");var i,a=[];function c(){i=e(a.map((function(e){return e.props}))),u.canUseDOM?t(i):r&&(i=r(i))}var u=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return i},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=i;return i=void 0,a=[],e};var u=o.prototype;return u.UNSAFE_componentWillMount=function(){a.push(this),c()},u.componentDidUpdate=function(){c()},u.componentWillUnmount=function(){var e=a.indexOf(this);a.splice(e,1),c()},u.render=function(){return F.createElement(n,this.props)},o}(o.a.PureComponent);return q(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),q(u,"canUseDOM",B),u}},Y="undefined"!==typeof Element,U="function"===typeof Map,z="function"===typeof Set,W="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;var K=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,o,i,a;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!==o--;)if(!e(t[o],r[o]))return!1;return!0}if(U&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(a=t.entries();!(o=a.next()).done;)if(!r.has(o.value[0]))return!1;for(a=t.entries();!(o=a.next()).done;)if(!e(o.value[1],r.get(o.value[0])))return!1;return!0}if(z&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(a=t.entries();!(o=a.next()).done;)if(!r.has(o.value[0]))return!1;return!0}if(W&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((n=t.length)!=r.length)return!1;for(o=n;0!==o--;)if(t[o]!==r[o])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(i=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!==o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;if(Y&&t instanceof Element)return!1;for(o=n;0!==o--;)if(("_owner"!==i[o]&&"__v"!==i[o]&&"__o"!==i[o]||!t.$$typeof)&&!e(t[i[o]],r[i[o]]))return!1;return!0}return t!==t&&r!==r}(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},V="bodyAttributes",J="htmlAttributes",G="titleAttributes",Q={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},X=(Object.keys(Q).map((function(e){return Q[e]})),"charset"),Z="cssText",ee="href",te="http-equiv",re="innerHTML",ne="itemprop",oe="name",ie="property",ae="rel",ce="src",ue="target",se={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},fe="defaultTitle",le="defer",pe="encodeSpecialCharacters",ye="onChangeClientState",de="titleTemplate",me=Object.keys(se).reduce((function(e,t){return e[se[t]]=t,e}),{}),he=[Q.NOSCRIPT,Q.SCRIPT,Q.STYLE],be="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ve=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ge=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Te=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Oe=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},Se=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Ee=function(e){var t=ke(e,Q.TITLE),r=ke(e,de);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ke(e,fe);return t||n||void 0},Ae=function(e){return ke(e,ye)||function(){}},Ce=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return we({},e,t)}),{})},je=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[Q.BASE]})).map((function(e){return e[Q.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Pe=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&_e("Helmet: "+e+' should be of type "Array". Instead found type "'+be(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===ae&&"canonical"===e[r].toLowerCase()||u===ae&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==re&&c!==Z&&c!==ne||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=L({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},ke=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},xe=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout((function(){xe(t)}),0)}}(),Ie=function(e){return clearTimeout(e)},Le="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||xe:e.requestAnimationFrame||xe,Me="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Ie:e.cancelAnimationFrame||Ie,_e=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},Ne=null,Re=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;Fe(Q.BODY,n),Fe(Q.HTML,o),$e(l,p);var y={baseTag:qe(Q.BASE,r),linkTags:qe(Q.LINK,i),metaTags:qe(Q.META,a),noscriptTags:qe(Q.NOSCRIPT,c),scriptTags:qe(Q.SCRIPT,s),styleTags:qe(Q.STYLE,f)},d={},m={};Object.keys(y).forEach((function(e){var t=y[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(m[e]=y[e].oldTags)})),t&&t(),u(e,d,m)},De=function(e){return Array.isArray(e)?e.join(""):e},$e=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=De(e)),Fe(Q.TITLE,t)},Fe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)r.removeAttribute(i[l]);o.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==a.join(",")&&r.setAttribute("data-react-helmet",a.join(","))}},qe=function(e,t){var r=document.head||document.querySelector(Q.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===re)r.innerHTML=t.innerHTML;else if(n===Z)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},Be=function(e){return Object.keys(e).reduce((function(t,r){var n="undefined"!==typeof e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},He=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[se[r]||r]=e[r],t}),t)},Ye=function(e,t,r){switch(e){case Q.TITLE:return{toComponent:function(){return function(e,t,r){var n,i=((n={key:t})["data-react-helmet"]=!0,n),a=He(r,i);return[o.a.createElement(Q.TITLE,a,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,r,n){var o=Be(r),i=De(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Se(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Se(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case V:case J:return{toComponent:function(){return He(t)},toString:function(){return Be(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=se[e]||e;if(r===re||r===Z){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),o.a.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===re||e===Z)})).reduce((function(e,t){var o="undefined"===typeof n[t]?t:t+'="'+Se(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===he.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},Ue=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,p=e.titleAttributes;return{base:Ye(Q.BASE,t,n),bodyAttributes:Ye(V,r,n),htmlAttributes:Ye(J,o,n),link:Ye(Q.LINK,i,n),meta:Ye(Q.META,a,n),noscript:Ye(Q.NOSCRIPT,c,n),script:Ye(Q.SCRIPT,u,n),style:Ye(Q.STYLE,s,n),title:Ye(Q.TITLE,{title:l,titleAttributes:p},n)}},ze=function(e){var t,r;return r=t=function(t){function r(){return ve(this,r),Oe(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),r.prototype.shouldComponentUpdate=function(e){return!K(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case Q.SCRIPT:case Q.NOSCRIPT:return{innerHTML:t};case Q.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return we({},n,((t={})[r.type]=[].concat(n[r.type]||[],[we({},o,this.mapNestedChildrenToProps(r,i))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case Q.TITLE:return we({},o,((t={})[n.type]=a,t.titleAttributes=we({},i),t));case Q.BODY:return we({},o,{bodyAttributes:we({},i)});case Q.HTML:return we({},o,{htmlAttributes:we({},i)})}return we({},o,((r={})[n.type]=we({},i),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=we({},t);return Object.keys(e).forEach((function(t){var n;r=we({},r,((n={})[t]=e[t],n))})),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[me[r]||r]=e[r],t}),t)}(Te(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case Q.LINK:case Q.META:case Q.NOSCRIPT:case Q.SCRIPT:case Q.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},r.prototype.render=function(){var t=this.props,r=t.children,n=Te(t,["children"]),i=we({},n);return r&&(i=this.mapChildrenToProps(r,i)),o.a.createElement(e,i)},ge(r,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(o.a.Component),t.propTypes={base:D.object,bodyAttributes:D.object,children:D.oneOfType([D.arrayOf(D.node),D.node]),defaultTitle:D.string,defer:D.bool,encodeSpecialCharacters:D.bool,htmlAttributes:D.object,link:D.arrayOf(D.object),meta:D.arrayOf(D.object),noscript:D.arrayOf(D.object),onChangeClientState:D.func,script:D.arrayOf(D.object),style:D.arrayOf(D.object),title:D.string,titleAttributes:D.object,titleTemplate:D.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=Ue({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(H((function(e){return{baseTag:je([ee,ue],e),bodyAttributes:Ce(V,e),defer:ke(e,le),encode:ke(e,pe),htmlAttributes:Ce(J,e),linkTags:Pe(Q.LINK,[ae,ee],e),metaTags:Pe(Q.META,[oe,X,te,ie,ne],e),noscriptTags:Pe(Q.NOSCRIPT,[re],e),onChangeClientState:Ae(e),scriptTags:Pe(Q.SCRIPT,[ce,re],e),styleTags:Pe(Q.STYLE,[Z],e),title:Ee(e),titleAttributes:Ce(G,e)}}),(function(e){Ne&&Me(Ne),e.defer?Ne=Le((function(){Re(e,(function(){Ne=null}))})):(Re(e),Ne=null)}),Ue)((function(){return null})));ze.renderStatic=ze.rewind;function We(e){return Number.isInteger(e)&&e>=0}function Ke(e){this.name="ArgumentError",this.message=e}var Ve=function(e,t){if(t=t||{},"function"!==typeof e)throw new Ke("fetch must be a function");if("object"!==typeof t)throw new Ke("defaults must be an object");if(void 0!==t.retries&&!We(t.retries))throw new Ke("retries must be a positive integer");if(void 0!==t.retryDelay&&!We(t.retryDelay)&&"function"!==typeof t.retryDelay)throw new Ke("retryDelay must be a positive integer or a function returning a positive integer");if(void 0!==t.retryOn&&!Array.isArray(t.retryOn)&&"function"!==typeof t.retryOn)throw new Ke("retryOn property expects an array or function");return t=Object.assign({retries:3,retryDelay:1e3,retryOn:[]},t),function(r,n){var o=t.retries,i=t.retryDelay,a=t.retryOn;if(n&&void 0!==n.retries){if(!We(n.retries))throw new Ke("retries must be a positive integer");o=n.retries}if(n&&void 0!==n.retryDelay){if(!We(n.retryDelay)&&"function"!==typeof n.retryDelay)throw new Ke("retryDelay must be a positive integer or a function returning a positive integer");i=n.retryDelay}if(n&&n.retryOn){if(!Array.isArray(n.retryOn)&&"function"!==typeof n.retryOn)throw new Ke("retryOn property expects an array or function");a=n.retryOn}return new Promise((function(t,c){var u=function(i){e(r,n).then((function(e){Array.isArray(a)&&-1===a.indexOf(e.status)?t(e):"function"===typeof a?a(i,null,e)?s(i,null,e):t(e):i<o?s(i,null,e):t(e)})).catch((function(e){"function"===typeof a?a(i,e,null)?s(i,e,null):c(e):i<o?s(i,e,null):c(e)}))};function s(e,t,r){var n="function"===typeof i?i(e,t,r):i;setTimeout((function(){u(++e)}),n)}u(0)}))}}(window.fetch);function Je(e){var t=e.url,r=Object(n.useState)(!1),i=r[0],a=r[1],c=Object(n.useState)(void 0),u=c[0],s=c[1],f=Object(n.useState)(void 0),l=f[0],p=f[1],y=Object(n.useState)(void 0),d=y[0],m=y[1],h=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(!("MutationObserver"in window))return a(!0);var e=h.current,t=new MutationObserver((function(e){var t=e.reduce((function(e,t){var r=Array.from(t.addedNodes).find((function(e){return"IFRAME"===e.nodeName}));return r&&(e=r),e}),void 0);t&&t.addEventListener("load",(function(){return a(!0)}))}));return e&&t.observe(e,{childList:!0,attributes:!0,subtree:!0}),function(){t.disconnect()}}),[]),Object(n.useEffect)((function(){Ve("https://www.tiktok.com/oembed?url="+t).then((function(e){return e.json()})).then((function(e){if(e&&e.status_msg)throw new Error(e.status_msg);if(!e||!e.html)throw new Error("API response doesn't look right");var t=e.html,r=document.createElement("div");r.innerHTML=t;var n=r.getElementsByTagName("script")[0];p(n&&n.src),m(t.substr(0,t.indexOf("<script")))})).catch((function(e){return s(e)}))}),[t]),u?o.a.createElement("div",null,"Error: ",u):o.a.createElement(n.Fragment,null,o.a.createElement(ze,null,o.a.createElement("script",{id:"ttEmbedder",async:!0,src:l})),o.a.createElement("div",{ref:h,style:{display:i&&d?"flex":"none"},dangerouslySetInnerHTML:{__html:d||""}}))}}).call(this,r(9))},4:function(e,t,r){e.exports=r(10)}},[[4,1,2]]]);
//# sourceMappingURL=main.570ff903.chunk.js.map
/*! For license information please see app.js.LICENSE */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e){e.exports={kaizen:{mobile_1x:"all and (max-width: 639px)",mobile_2x:"all and (max-width: 639px) and (min-resolution: 2dppx)",narrow_1x:"all and (min-width: 640px) and (max-width: 1023px)",narrow_2x:"all and (min-width: 640px) and (max-width: 1023px) and (min-resolution: 2dppx)",wide_1x:"all and (min-width: 1024px)",wide_2x:"all and (min-width: 1024px) and (min-resolution: 2dppx)"}}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(t){var r="Modernizr"in t,o=t.Modernizr;!function(e,t,r){var o=[],i={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){o.push({name:e,fn:t,options:n})},addAsyncTest:function(e){o.push({name:null,fn:e})}},s=function(){};s.prototype=i,s=new s;var a=[];function c(e,t){return n(e)===t}var u=t.documentElement,l="svg"===u.nodeName.toLowerCase();var f=i._config.usePrefixes?"Moz O ms Webkit".split(" "):[];function d(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):l?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}i._cssomPrefixes=f;var p={elem:d("modernizr")};s._q.push(function(){delete p.elem});var m={style:p.elem.style};function v(e,n,r,o){var i,s,a,c,f="modernizr",p=d("div"),m=function(){var e=t.body;return e||((e=d(l?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(a=d("div")).id=o?o[r]:f+(r+1),p.appendChild(a);return(i=d("style")).type="text/css",i.id="s"+f,(m.fake?m:p).appendChild(i),m.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=f,m.fake&&(m.style.background="",m.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(m)),s=n(p,e),m.fake?(m.parentNode.removeChild(m),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!s}function y(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,n){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(y(t[o]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+y(t[o])+":"+n+")");return v("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",function(t){return"absolute"===function(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;null!==o?r&&(o=o.getPropertyValue(r)):i&&i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}(t,null,"position")})}return r}s._q.unshift(function(){delete m.style});var g=i._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];function b(e,t){return function(){return e.apply(t,arguments)}}function S(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+f.join(s+" ")+s).split(" ");return c(t,"string")||c(t,"undefined")?function(e,t,n,o){if(o=!c(o,"undefined")&&o,!c(n,"undefined")){var i=h(e,n);if(!c(i,"undefined"))return i}for(var s,a,u,l,f,p=["modernizr","tspan","samp"];!m.style&&p.length;)s=!0,m.modElem=d(p.shift()),m.style=m.modElem.style;function v(){s&&(delete m.style,delete m.modElem)}for(u=e.length,a=0;a<u;a++)if(l=e[a],f=m.style[l],~(""+l).indexOf("-")&&(l=l.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),m.style[l]!==r){if(o||c(n,"undefined"))return v(),"pfx"!==t||l;try{m.style[l]=n}catch(e){}if(m.style[l]!==f)return v(),"pfx"!==t||l}return v(),!1}(a,t,o,i):function(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:c(r=t[e[o]],"function")?b(r,n||t):r;return!1}(a=(e+" "+g.join(s+" ")+s).split(" "),t,n)}function x(e,t,n){return S(e,r,r,t,n)}i._domPrefixes=g,i.testAllProps=S,i.testAllProps=x,s.addTest("cssgridlegacy",x("grid-columns","10px",!0)),s.addTest("cssgrid",x("grid-template-rows","none",!0)),function(){var e,t,n,r,i,u;for(var l in o)if(o.hasOwnProperty(l)){if(e=[],(t=o[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=c(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(u=e[i].split(".")).length?s[u[0]]=r:(!s[u[0]]||s[u[0]]instanceof Boolean||(s[u[0]]=new Boolean(s[u[0]])),s[u[0]][u[1]]=r),a.push((r?"":"no-")+u.join("-"))}}(),function(e){var t=u.className,n=s._config.classPrefix||"";if(l&&(t=t.baseVal),s._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}s._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),l?u.className.baseVal=t:u.className=t)}(a),delete i.addTest,delete i.addAsyncTest;for(var w=0;w<s._q.length;w++)s._q[w]();e.Modernizr=s}(t,document),e.exports=t.Modernizr,r?t.Modernizr=o:delete t.Modernizr}(window)},function(e,t,n){(function(t){var n="Expected a function",r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,d=l||f||Function("return this")(),p=Object.prototype.toString,m=Math.max,v=Math.min,y=function(){return d.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==o}(e))return r;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):s.test(e)?r:+e}e.exports=function(e,t,r){var o,i,s,a,c,u,l=0,f=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function b(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-l>=s}function x(){var e=y();if(S(e))return w(e);c=setTimeout(x,function(e){var n=t-(e-u);return d?v(n,s-(e-l)):n}(e))}function w(e){return c=void 0,p&&o?b(e):(o=i=void 0,a)}function E(){var e=y(),n=S(e);if(o=arguments,i=this,u=e,n){if(void 0===c)return function(e){return l=e,c=setTimeout(x,t),f?b(e):a}(u);if(d)return c=setTimeout(x,t),b(u)}return void 0===c&&(c=setTimeout(x,t)),a}return t=g(t)||0,h(r)&&(f=!!r.leading,s=(d="maxWait"in r)?m(g(r.maxWait)||0,t):s,p="trailing"in r?!!r.trailing:p),E.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=u=i=c=void 0},E.flush=function(){return void 0===c?a:w(y())},E}}).call(this,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={mimeType:t.mimeType||null,onBeforeSend:t.onBeforeSend||Function.prototype,onSuccess:t.onSuccess||Function.prototype,onError:t.onError||Function.prototype,onComplete:t.onComplete||Function.prototype},r=Array.isArray(e)?e:[e],o=Array.apply(null,Array(r.length)).map(function(e){return null});function i(){return!("<"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().charAt(0))}function s(e,t){n.onError(e,r[t],t)}function a(e,t){var i=n.onSuccess(e,r[t],t);e=!1===i?"":i||e,o[t]=e,-1===o.indexOf(null)&&n.onComplete(o)}var c=document.createElement("a");r.forEach(function(e,t){if(c.setAttribute("href",e),c.href=String(c.href),Boolean(document.all&&!window.atob)&&c.host.split(":")[0]!==location.host.split(":")[0]){if(c.protocol===location.protocol){var r=new XDomainRequest;r.open("GET",e),r.timeout=0,r.onprogress=Function.prototype,r.ontimeout=Function.prototype,r.onload=function(){i(r.responseText)?a(r.responseText,t):s(r,t)},r.onerror=function(e){s(r,t)},setTimeout(function(){r.send()},0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),s(null,t)}else{var o=new XMLHttpRequest;o.open("GET",e),n.mimeType&&o.overrideMimeType&&o.overrideMimeType(n.mimeType),n.onBeforeSend(o,e,t),o.onreadystatechange=function(){4===o.readyState&&(200===o.status&&i(o.responseText)?a(o.responseText,t):s(o,t))},o.send()}})}function s(e){var t={cssComments:/\/\*[\s\S]+?\*\//g,cssImports:/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g},n={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},r=Array.apply(null,n.rootElement.querySelectorAll(n.include)).filter(function(e){return t=e,r=n.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,r);var t,r}),o=Array.apply(null,Array(r.length)).map(function(e){return null});function s(){if(-1===o.indexOf(null)){var e=o.join("");n.onComplete(e,o,r)}}function c(e,t,r,a){var c=n.onSuccess(e,r,a);(function e(t,r,o,s){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];var l=u(t,o,c);l.rules.length?i(l.absoluteUrls,{onBeforeSend:function(e,t,o){n.onBeforeSend(e,r,t)},onSuccess:function(e,t,o){var i=n.onSuccess(e,r,t),s=u(e=!1===i?"":i||e,t,c);return s.rules.forEach(function(t,n){e=e.replace(t,s.absoluteRules[n])}),e},onError:function(n,i,u){a.push({xhr:n,url:i}),c.push(l.rules[u]),e(t,r,o,s,a,c)},onComplete:function(n){n.forEach(function(e,n){t=t.replace(l.rules[n],e)}),e(t,r,o,s,a,c)}}):s(t,a)})(e=void 0!==c&&!1===Boolean(c)?"":c||e,r,a,function(e,i){null===o[t]&&(i.forEach(function(e){return n.onError(e.xhr,r,e.url)}),!n.filter||n.filter.test(e)?o[t]=e:o[t]="",s())})}function u(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o={};return o.rules=(e.replace(t.cssComments,"").match(t.cssImports)||[]).filter(function(e){return-1===r.indexOf(e)}),o.urls=o.rules.map(function(e){return e.replace(t.cssImports,"$1")}),o.absoluteUrls=o.urls.map(function(e){return a(e,n)}),o.absoluteRules=o.rules.map(function(e,t){var r=o.urls[t],i=a(o.absoluteUrls[t],n);return e.replace(r,i)}),o}r.length?r.forEach(function(e,t){var r=e.getAttribute("href"),u=e.getAttribute("rel"),l="LINK"===e.nodeName&&r&&u&&"stylesheet"===u.toLowerCase(),f="STYLE"===e.nodeName;if(l)i(r,{mimeType:"text/css",onBeforeSend:function(t,r,o){n.onBeforeSend(t,e,r)},onSuccess:function(n,o,i){var s=a(r,location.href);c(n,t,e,s)},onError:function(r,i,a){o[t]="",n.onError(r,e,i),s()}});else if(f){var d=e.textContent;n.useCSSOM&&(d=Array.apply(null,e.sheet.cssRules).map(function(e){return e.cssText}).join("")),c(d,t,e,location.href)}else o[t]="",s()}):n.onComplete("",[])}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),r.href=t,o.href=e,o.href}n.r(t);var c=u;function u(e,t,n){e instanceof RegExp&&(e=l(e,n)),t instanceof RegExp&&(t=l(t,n));var r=f(e,t,n);return r&&{start:r[0],end:r[1],pre:n.slice(0,r[0]),body:n.slice(r[0]+e.length,r[1]),post:n.slice(r[1]+t.length)}}function l(e,t){var n=t.match(e);return n?n[0]:null}function f(e,t,n){var r,o,i,s,a,c=n.indexOf(e),u=n.indexOf(t,c+1),l=c;if(c>=0&&u>0){for(r=[],i=n.length;l>=0&&!a;)l==c?(r.push(l),c=n.indexOf(e,l+1)):1==r.length?a=[r.pop(),u]:((o=r.pop())<i&&(i=o,s=u),u=n.indexOf(t,l+1)),l=c<u&&c>=0?c:u;r.length&&(a=[i,s])}return a}function d(e){var t=r({},{onlyVars:!1,removeComments:!1},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});function n(e){throw new Error("CSS parse error: ".concat(e))}function o(t){var n=t.exec(e);if(n)return e=e.slice(n[0].length),n}function i(){return o(/^{\s*/)}function s(){return o(/^}/)}function a(){o(/^\s*/)}function u(){if(a(),"/"===e[0]&&"*"===e[1]){for(var t=2;e[t]&&("*"!==e[t]||"/"!==e[t+1]);)t++;if(!e[t])return n("end of comment is missing");var r=e.slice(2,t);return e=e.slice(t+2),{type:"comment",comment:r}}}function l(){for(var e,n=[];e=u();)n.push(e);return t.removeComments?[]:n}function f(){for(a();"}"===e[0];)n("extra closing bracket");var t=o(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(t)return t[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,function(e){return e.replace(/,/g,"‌")}).split(/\s*(?![^(]*\)),\s*/).map(function(e){return e.replace(/\u200C/g,",")})}function d(){o(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,t=o(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(t){if(t=t[0].trim(),!o(/^:\s*/))return n("property missing ':'");var r=o(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),i={type:"declaration",property:t.replace(e,""),value:r?r[0].replace(e,"").trim():""};return o(/^[;\s]*/),i}}function p(){if(!i())return n("missing '{'");for(var e,t=l();e=d();)t.push(e),t=t.concat(l());return s()?t:n("missing '}'")}function m(){a();for(var e,t=[];e=o(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),o(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:p()}}function v(){if(a(),"@"===e[0]){var r=function(){var e=o(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=o(/^([-\w]+)\s*/)))return n("@keyframes missing name");var r,a=e[1];if(!i())return n("@keyframes missing '{'");for(var c=l();r=m();)c.push(r),c=c.concat(l());return s()?{type:"keyframes",name:a,vendor:t,keyframes:c}:n("@keyframes missing '}'")}}()||function(){var e=o(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:h()}}()||function(){if(o(/^@host\s*/))return{type:"host",rules:h()}}()||function(){var e=o(/^@media *([^{]+)/);if(e)return{type:"media",media:e[1].trim(),rules:h()}}()||function(){var e=o(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}()||function(){if(o(/^@page */))return{type:"page",selectors:f()||[],declarations:p()}}()||function(){var e=o(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:h()}}()||function(){if(o(/^@font-face\s*/))return{type:"font-face",declarations:p()}}()||function(){var e=o(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}();if(r&&t.onlyVars){var c=!1;if(r.declarations)c=r.declarations.some(function(e){return/var\(/.test(e.value)});else c=(r.keyframes||r.rules||[]).some(function(e){return(e.declarations||[]).some(function(e){return/var\(/.test(e.value)})});return c?r:{}}return r}}function y(){if(t.onlyVars){var r=c("{","}",e);if(r){var o=-1!==r.pre.indexOf(":root")&&/--\S*\s*:/.test(r.body),i=/var\(/.test(r.body);if(!o&&!i)return e=e.slice(r.end+1),{}}}var s=f()||[],a=t.onlyVars?p().filter(function(e){var t=s.some(function(e){return-1!==e.indexOf(":root")})&&/^--\S/.test(e.property),n=/var\(/.test(e.value);return t||n}):p();return s.length||n("selector missing"),{type:"rule",selectors:s,declarations:a}}function h(t){if(!t&&!i())return n("missing '{'");for(var r,o=l();e.length&&(t||"}"!==e[0])&&(r=v()||y());)r.type&&o.push(r),o=o.concat(l());return t||s()?o:n("missing '}'")}return{type:"stylesheet",stylesheet:{rules:h(!0),errors:[]}}}u.range=f;var p="--",m="var",v={dom:{},temp:{},user:{}};function y(e){var t,n,o=r({},{fixNestedCalc:!0,onlyVars:!1,persist:!1,preserve:!1,variables:{},onWarning:function(){}},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),i=o.persist?v.dom:v.temp=JSON.parse(JSON.stringify(v.dom)),s=d(e,{onlyVars:o.onlyVars});if(s.stylesheet.rules.forEach(function(e){var t=[];if("rule"===e.type&&1===e.selectors.length&&":root"===e.selectors[0]&&(e.declarations.forEach(function(e,n){var r=e.property,o=e.value;r&&0===r.indexOf(p)&&(i[r]=o,t.push(n))}),!o.preserve))for(var n=t.length-1;n>=0;n--)e.declarations.splice(t[n],1)}),Object.keys(v.user).forEach(function(e){i[e]=v.user[e]}),Object.keys(o.variables).length){var a={declarations:[],selectors:[":root"],type:"rule"};Object.keys(o.variables).forEach(function(e){var t="--".concat(e.replace(/^-+/,"")),n=o.variables[e];o.persist&&(v.user[t]=n),i[t]!==n&&(i[t]=n,a.declarations.push({type:"declaration",property:t,value:n}))}),o.preserve&&a.declarations.length&&s.stylesheet.rules.push(a)}return function e(t,n){t.rules.forEach(function(r){r.rules?e(r,n):r.keyframes?r.keyframes.forEach(function(e){"keyframe"===e.type&&n(e.declarations,r)}):r.declarations&&n(r.declarations,t)})}(s.stylesheet,function(e,t){for(var n,r,s,a=0;a<e.length;a++)s=(n=e[a]).value,"declaration"===n.type&&s&&-1!==s.indexOf(m+"(")&&(r=h(s,i,o))!==n.value&&(o.preserve?(e.splice(a,0,{type:n.type,property:n.property,value:r}),a++):n.value=r)}),o.fixNestedCalc&&(t=s.stylesheet.rules,n=/(-[a-z]+-)?calc\(/,t.forEach(function(e){e.declarations&&e.declarations.forEach(function(e){for(var t=e.value,r="";n.test(t);){var o=c("calc(",")",t||"");for(t=t.slice(o.end);n.test(o.body);){var i=c(n,")",o.body);o.body="".concat(i.pre,"(").concat(i.body,")").concat(i.post)}r+="".concat(o.pre,"calc(").concat(o.body),r+=n.test(t)?"":")".concat(o.post)}e.value=r||e.value})})),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+o(e.rules)+"}"},"font-face":function(e){return"@font-face{"+o(e.declarations)+"}"},host:function(e){return"@host{"+o(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+o(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+o(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+o(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+o(e.declarations)+"}"},rule:function(e){var t=e.declarations;if(t.length)return e.selectors.join(",")+"{"+o(t)+"}"},supports:function(e){return"@supports "+e.supports+"{"+o(e.rules)+"}"}};function o(e){for(var o="",i=0;i<e.length;i++){var s=e[i];n&&n(s);var a=r[s.type](s);a&&(o+=a,a.length&&s.selectors&&(o+=t))}return o}return o(e.stylesheet.rules)}(s)}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(-1===e.indexOf("var("))return e;var o=c("(",")",e);return o?"var"===o.pre.slice(-3)?0===o.body.trim().length?(n.onWarning("var() must contain a non-whitespace string"),e):o.pre.slice(0,-3)+function(e){var o=e.split(",")[0].replace(/[\s\n\t]/g,""),i=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],s=t.hasOwnProperty(o)?String(t[o]):void 0,a=s||(i?String(i):void 0),c=r||e;return s||n.onWarning('variable "'.concat(o,'" is undefined')),a&&"undefined"!==a&&a.length>0?h(a,t,n,c):"var(".concat(c,")")}(o.body)+h(o.post,t,n):o.pre+"(".concat(h(o.body,t,n),")")+h(o.post,t,n):(-1!==e.indexOf("var(")&&n.onWarning('missing closing ")" in the value "'.concat(e,'"')),e)}var g="css-vars-ponyfill",b="undefined"!=typeof window,S=b&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),x="cssVars(): ",w={rootElement:b?document:null,shadowDOM:!1,include:"style,link[rel=stylesheet]",exclude:"",variables:{},fixNestedCalc:!0,onlyLegacy:!0,onlyVars:!1,preserve:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:null,onBeforeSend:function(){},onSuccess:function(){},onWarning:function(){},onError:function(){},onComplete:function(){}},E={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssRootRules:/(?::root\s*{\s*[^}]*})/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVars:/(?:(?::root\s*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},C=null,O=null,_=!1;function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r({},w,e),n=g;function i(e,n,r,o){t.silent||console.error("".concat(x).concat(e,"\n"),n),t.onError(e,n,r,o)}function a(e){t.silent||console.warn("".concat(x).concat(e)),t.onWarning(e)}if(t.exclude="#".concat(n)+(t.exclude?",".concat(t.exclude):""),t._benchmark=t._benchmark?t._benchmark:M(),b)if(!1===t.watch&&C&&C.disconnect(),t.watch)!function(e,t){if(!window.MutationObserver)return;var n=function(e){return"LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")},r=function(e){return"STYLE"===e.tagName&&(!t||e.id!==t)};C&&C.disconnect();e.watch=w.watch,(C=new MutationObserver(function(t){var o=t.some(function(e){var t=!1;if("attributes"===e.type)t=n(e.target)||r(e.target);else if("childList"===e.type){var o=Array.apply(null,e.addedNodes),i=Array.apply(null,e.removedNodes);t=[].concat(o,i).some(function(e){var t=n(e)&&!e.disabled,o=r(e)&&E.cssVars.test(e.textContent);return t||o})}return t});o&&j(e)})).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0})}(t,n),j(t);else if("loading"!==document.readyState){var c=t.shadowDOM||t.rootElement.shadowRoot||t.rootElement.host;if(S&&t.onlyLegacy){if(t.updateDOM){var u=t.rootElement.host||(t.rootElement===document?document.documentElement:t.rootElement);Object.keys(t.variables).forEach(function(e){var n="--".concat(e.replace(/^-+/,"")),r=t.variables[e];u.style.setProperty(n,r)})}}else s(c&&!_?{rootElement:w.rootElement,include:w.include,exclude:t.exclude,onSuccess:function(e,t,n){return(e.match(E.cssRootRules)||[]).join("")||!1},onComplete:function(e,n,r){y(e,{persist:!0}),_=!0,T(t)}}:{rootElement:t.rootElement,include:t.include,exclude:t.exclude,filter:t.onlyVars?E.cssVars:null,onBeforeSend:t.onBeforeSend,onSuccess:function(e,n,r){var o=t.onSuccess(e,n,r);(e=void 0!==o&&!1===Boolean(o)?"":o||e,n.setAttribute("data-cssvars",""),t.updateURLs)&&(e.replace(E.cssComments,"").match(E.cssUrls)||[]).forEach(function(t){var n=t.replace(E.cssUrls,"$1"),o=k(n,r);e=e.replace(t,t.replace(n,o))});return e},onError:function(e,t,n){var r=e.responseURL||k(n,location.href),o=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");i("CSS XHR Error: ".concat(r," ").concat(e.status," ").concat(o),t,e,r)},onComplete:function(e,s,c){var u,l=JSON.stringify({include:t.include,exclude:t.exclude,variables:t.variables,fixNestedCalc:t.fixNestedCalc,onlyVars:t.onlyVars,preserve:t.preserve,silent:t.silent,updateURLs:t.updateURLs}),f=t.rootElement.querySelector("#".concat(n))||document.createElement("style"),d=f.__cssVars||{},p=d.cssText===e&&d.settings===l;if(p)e=f.textContent,t.silent||console.info("".concat(x,"No changes"),f);else{f.__cssVars={cssText:e,settings:l},e=s.map(function(e,t){return E.cssVars.test(e)?e:"/*__CSSVARSPONYFILL-".concat(t,"__*/")}).join("");try{e=y(e,{fixNestedCalc:t.fixNestedCalc,onlyVars:t.onlyVars,persist:t.updateDOM,preserve:t.preserve,variables:t.variables,onWarning:a}),u=E.cssKeyframes.test(e),e=e.replace(/\/\*__CSSVARSPONYFILL-(\d+)__\*\//g,function(e,t){return s[t]})}catch(e){var m=!1;s.forEach(function(e,n){try{e=y(e,t)}catch(e){var r=c[n-0];m=!0,i(e.message,r)}}),m||i(e.message||e)}}if(t.shadowDOM)for(var h,g=[t.rootElement].concat(o(t.rootElement.querySelectorAll("*"))),b=0;h=g[b];++b){if(h.shadowRoot&&h.shadowRoot.querySelector("style"))T(r({},t,{rootElement:h.shadowRoot,variables:v.dom}))}if(!p&&c&&c.length){var S=t.rootElement.querySelectorAll("link[data-cssvars],style[data-cssvars]")||t.rootElement.querySelectorAll('link[rel+="stylesheet"],style'),w=S?S[S.length-1]:null;if(w)w.parentNode.insertBefore(f,w.nextSibling);else(t.rootElement.head||t.rootElement.body||t.rootElement).appendChild(f);t.updateDOM&&(f.setAttribute("id",n),f.textContent=e,u&&function(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter(function(e){return getComputedStyle(document.body)[e]})[0];if(t){for(var n=e.getElementsByTagName("*"),r=[],o=0,i=n.length;o<i;o++){var s=n[o],a=getComputedStyle(s)[t];"none"!==a&&(s.style[t]+="__CSSVARSPONYFILL-KEYFRAMES__",r.push(s))}document.body.offsetHeight;for(var c=0,u=r.length;c<u;c++){var l=r[c].style;l[t]=l[t].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}(t.rootElement)),t.onComplete(e,f,JSON.parse(JSON.stringify(t.updateDOM?v.dom:v.temp)),M()-t._benchmark)}}})}else document.addEventListener("DOMContentLoaded",function t(n){T(e),document.removeEventListener("DOMContentLoaded",t)})}function j(e){clearTimeout(O),O=setTimeout(function(){e._benchmark=null,T(e)},100)}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),r.href=t,o.href=e,o.href}function M(){return b&&(window.performance||{}).now?window.performance.now():(new Date).getTime()}var A=T,L=n(1),N=n.n(L),R=n(2),V=n.n(R),P=n(0),z=["load","resize"];function F(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];z.forEach(function(n){var r=e;t&&"resize"===n&&(r=V()(e,t)),window.addEventListener(n,r)})}function B(e){return window.matchMedia(e).matches}function D(){Object.keys(P).forEach(function(e){var t=P[e];Object.keys(t).forEach(function(n){B(t[n].toString())?document.body.classList.add("".concat(e,"__").concat(n)):document.body.classList.remove("".concat(e,"__").concat(n))})})}F(D),N.a.testAllProps("customproperties")||A()}]);
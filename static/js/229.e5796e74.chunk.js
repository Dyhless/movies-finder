/*! For license information please see 229.e5796e74.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[229],{830:function(t,e,n){n.d(e,{Df:function(){return u},TP:function(){return l},z1:function(){return s}});var r=n(861),o=n(243);function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new Z(o||[]);return r(a,"_invoke",{value:L(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var g={};s(g,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(k([])));m&&m!==e&&n.call(m,a)&&(g=m);var x=v.prototype=p.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(r,i,a,c){var u=f(t[r],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function L(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=v,r(x,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,u,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var a="/movie",c=o.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"b4ef19b8e9db5b53dec85dc073650305"}}),u=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/all/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie",{params:{query:e}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("".concat(a,"/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},229:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var r,o,i,a,c,u,s,l,f,h=n(433),p=n(683),d=n(861),v=n(439),g=n(791),y=n(830),m=n(850),x=n(168),w=n(867),b=w.ZP.button(r||(r=(0,x.Z)(["\n  display: inline-block;\n  margin-left: 50%;\n  margin-bottom: 28px;\n  transform: translateX(-50%);\n  min-width: 60;\n  padding: 14px;\n  border-radius: 20px;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #5f116f;\n  box-shadow: inset 0 3px 4px #ffffff, inset 0 -3px 4px #c49dbf;\n  &:hover,\n  &:focus {\n    position: relative;\n    top: 3px;\n  }\n"]))),L=n(184),E=function(t){var e=t.onClick;return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(b,{type:"button",onClick:e,children:"Load more"})})},_=w.ZP.form(o||(o=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 75px;\n"]))),j=w.ZP.button(i||(i=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 16px;\n  width: 100px;\n  padding: 10px;\n  margin-left: 10px;\n  border-radius: 15px;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #120083;\n  box-shadow: inset 0 3px 4px #ffffff, inset 0 -3px 4px #B0B49D;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    box-shadow: 0 3px 4px #AEE6E2, 0 -3px 4px #ffffff;\n  }\n"]))),Z=w.ZP.input(a||(a=(0,x.Z)(["\n  @media screen and (max-width: 767.99px) {\n    width: 260px;\n  }\n  width: 400px;\n  height: 26px;\n  padding: 4px;\n  text-align: center;\n  font-size: 16px;\n  outline: none;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 6px 8px #AEE6E2, 0 -1px 1px #e4d5e3;\n  color: #120083;\n  &::placeholder {\n    padding: 4px;\n    font-size: 16px;\n    color: #cccccc;\n  }\n  &:hover {\n    background: linear-gradient(45deg, #6579BE, #7A8F8E);\n    color: white;\n  }\n"]))),k=function(t){var e=t.onSearch,n=(0,g.useState)(""),r=(0,v.Z)(n,2),o=r[0],i=r[1];return(0,L.jsxs)(_,{onSubmit:function(t){t.preventDefault(),e(o)},children:[(0,L.jsx)(Z,{type:"text",value:o,onChange:function(t){return i(t.target.value)},placeholder:"Search for movies..."}),(0,L.jsx)(j,{type:"submit",children:"Search"})]})},O=n(87),S=w.ZP.ul(c||(c=(0,x.Z)(["\n  @media screen and (max-width: 475.99px) {\n    display: flex;\n    flex-direction: column;\n    gap: 28px;\n    align-items: center;\n  }\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 28px;\n  margin-top: 56px;\n  margin-bottom: 20px;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),P=(0,w.ZP)(O.OL)(u||(u=(0,x.Z)(["\n  width: 200px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  color: black;\n  text-decoration: none;\n  transition: transform 250ms linear, box-shadow 250ms linear;\n  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);\n\n  &:hover {\n    transform: scale(1.1);\n    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);\n  }\n"]))),F=(w.ZP.div(s||(s=(0,x.Z)(["\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 5px;\n  transition: transform 250ms linear, box-shadow 250ms linear;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  &:hover {\n    transform: scale(1.1);\n    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);\n  }\n"]))),w.ZP.img(l||(l=(0,x.Z)(["\n  width: 100%;\n  height: auto;\n  max-height: 70%;\n  object-fit: contain;\n"])))),G=w.ZP.div(f||(f=(0,x.Z)(["\n  font-size: 16px;\n  text-align: center;\n  max-height: 44px; \n  overflow: hidden;\n  white-space: nowrap; \n  text-overflow: ellipsis;\n  ","\n"])),(function(t){return t.isLongTitle&&"\n    white-space: normal;\n  "}));function N(){N=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,n){return t[e]=n}}function s(t,e,n,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new j(o||[]);return r(a,"_invoke",{value:b(t,n,c)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(Z([])));y&&y!==e&&n.call(y,i)&&(v=y);var m=d.prototype=h.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(r,i,a,c){var u=l(t[r],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function b(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function Z(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,r(m,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=Z,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:Z(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}var T=function(){var t=(0,g.useState)(!1),e=(0,v.Z)(t,2),n=e[0],r=e[1],o=(0,g.useState)([]),i=(0,v.Z)(o,2),a=i[0],c=i[1],u=(0,g.useState)(1),s=(0,v.Z)(u,2),l=s[0],f=s[1],x=(0,g.useState)(!1),w=(0,v.Z)(x,2),b=w[0],_=w[1],j=(0,g.useState)(!1),Z=(0,v.Z)(j,2),O=Z[0],T=Z[1],z=(0,g.useState)(""),A=(0,v.Z)(z,2),C=A[0],I=A[1];(0,g.useEffect)((function(){if(""!==C){var t=function(){var t=(0,d.Z)(N().mark((function t(){var e,n;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.prev=1,t.next=4,(0,y.z1)(C);case 4:e=t.sent,n=e.map((function(t){return(0,p.Z)((0,p.Z)({},t),{},{poster_path:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):null})})),c(n),T(!1),f(1),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.error("Failed to search movies",t.t0);case 14:return t.prev=14,r(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})));return function(){return t.apply(this,arguments)}}();t()}}),[C]);var Y=function(){var t=(0,d.Z)(N().mark((function t(){var e,n;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f((function(t){return t+1})),r(!0),t.prev=2,t.next=5,(0,y.z1)(C,l+1);case 5:if(0!==(e=t.sent).length){t.next=9;break}return T(!1),t.abrupt("return");case 9:n=e.map((function(t){return(0,p.Z)((0,p.Z)({},t),{},{poster_path:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):null})})),c((function(t){return[].concat((0,h.Z)(t),(0,h.Z)(n))})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.error("Failed to load more movies",t.t0);case 16:return t.prev=16,r(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[2,13,16,19]])})));return function(){return t.apply(this,arguments)}}();return(0,L.jsx)(L.Fragment,{children:n?(0,L.jsx)(m.Z,{}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(k,{onSearch:function(t){c([]),f(1),I(t),_(!0)}}),b&&(0,L.jsx)(S,{children:a.map((function(t){return t.poster_path?(0,L.jsx)("li",{children:(0,L.jsxs)(P,{to:"/movies/".concat(t.id),children:[(0,L.jsx)(F,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}),(0,L.jsx)(G,{isLongTitle:t.title.length>25,children:t.title})]})},t.id):null}))}),O&&(0,L.jsx)(E,{onClick:Y})]})})}}}]);
//# sourceMappingURL=229.e5796e74.chunk.js.map
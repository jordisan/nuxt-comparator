(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4,5],{249:function(t,e,n){"use strict";var r=n(2),o=n(6),c=n(31),f=n(25),l=n(11),h=n(122),y=n(178),d=n(5),v=n(15),O=n(89),m=n(12),j=n(8),w=n(21),R=n(24),S=n(85),P=n(44),x=n(84),D=n(62),C=n(118),k=n(252),T=n(121),_=n(35),$=n(20),E=n(87),N=n(22),A=n(18),G=n(120),J=n(88),F=n(86),H=n(119),I=n(4),Q=n(251),V=n(253),W=n(43),z=n(30),B=n(36).forEach,K=J("hidden"),L=I("toPrimitive"),M=z.set,U=z.getterFor("Symbol"),X=Object.prototype,Y=o.Symbol,Z=c("JSON","stringify"),tt=_.f,et=$.f,nt=k.f,ot=E.f,it=G("symbols"),ct=G("op-symbols"),ut=G("string-to-symbol-registry"),at=G("symbol-to-string-registry"),ft=G("wks"),st=o.QObject,lt=!st||!st.prototype||!st.prototype.findChild,pt=l&&d((function(){return 7!=x(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=tt(X,e);r&&delete X[e],et(t,e,n),r&&t!==X&&et(X,e,r)}:et,ht=function(t,e){var symbol=it[t]=x(Y.prototype);return M(symbol,{type:"Symbol",tag:t,description:e}),l||(symbol.description=e),symbol},yt=y?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},bt=function(t,e,n){t===X&&bt(ct,e,n),j(t);var r=S(e,!0);return j(n),v(it,r)?(n.enumerable?(v(t,K)&&t[K][r]&&(t[K][r]=!1),n=x(n,{enumerable:P(0,!1)})):(v(t,K)||et(t,K,P(1,{})),t[K][r]=!0),pt(t,r,n)):et(t,r,n)},vt=function(t,e){j(t);var n=R(e),r=D(n).concat(jt(n));return B(r,(function(e){l&&!gt.call(n,e)||bt(t,e,n[e])})),t},gt=function(t){var e=S(t,!0),n=ot.call(this,e);return!(this===X&&v(it,e)&&!v(ct,e))&&(!(n||!v(this,e)||!v(it,e)||v(this,K)&&this[K][e])||n)},Ot=function(t,e){var n=R(t),r=S(e,!0);if(n!==X||!v(it,r)||v(ct,r)){var o=tt(n,r);return!o||!v(it,r)||v(n,K)&&n[K][r]||(o.enumerable=!0),o}},mt=function(t){var e=nt(R(t)),n=[];return B(e,(function(t){v(it,t)||v(F,t)||n.push(t)})),n},jt=function(t){var e=t===X,n=nt(e?ct:R(t)),r=[];return B(n,(function(t){!v(it,t)||e&&!v(X,t)||r.push(it[t])})),r};(h||(A((Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=H(t),n=function(t){this===X&&n.call(ct,t),v(this,K)&&v(this[K],e)&&(this[K][e]=!1),pt(this,e,P(1,t))};return l&&lt&&pt(X,e,{configurable:!0,set:n}),ht(e,t)}).prototype,"toString",(function(){return U(this).tag})),A(Y,"withoutSetter",(function(t){return ht(H(t),t)})),E.f=gt,$.f=bt,_.f=Ot,C.f=k.f=mt,T.f=jt,Q.f=function(t){return ht(I(t),t)},l&&(et(Y.prototype,"description",{configurable:!0,get:function(){return U(this).description}}),f||A(X,"propertyIsEnumerable",gt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:Y}),B(D(ft),(function(t){V(t)})),r({target:"Symbol",stat:!0,forced:!h},{for:function(t){var e=String(t);if(v(ut,e))return ut[e];var symbol=Y(e);return ut[e]=symbol,at[symbol]=e,symbol},keyFor:function(t){if(!yt(t))throw TypeError(t+" is not a symbol");if(v(at,t))return at[t]},useSetter:function(){lt=!0},useSimple:function(){lt=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:function(t,e){return void 0===e?x(t):vt(x(t),e)},defineProperty:bt,defineProperties:vt,getOwnPropertyDescriptor:Ot}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:mt,getOwnPropertySymbols:jt}),r({target:"Object",stat:!0,forced:d((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(w(t))}}),Z)&&r({target:"JSON",stat:!0,forced:!h||d((function(){var symbol=Y();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,e,n){for(var r,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(r=e,(m(e)||void 0!==t)&&!yt(t))return O(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!yt(e))return e}),o[1]=e,Z.apply(null,o)}});Y.prototype[L]||N(Y.prototype,L,Y.prototype.valueOf),W(Y,"Symbol"),F[K]=!0},250:function(t,e,n){"use strict";var r=n(2),o=n(11),c=n(6),f=n(15),l=n(12),h=n(20).f,y=n(176),d=c.Symbol;if(o&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var v={},O=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof O?new d(t):void 0===t?d():d(t);return""===t&&(v[e]=!0),e};y(O,d);var m=O.prototype=d.prototype;m.constructor=O;var j=m.toString,w="Symbol(test)"==String(d("test")),R=/^Symbol\((.*)\)[^)]+$/;h(m,"description",{configurable:!0,get:function(){var symbol=l(this)?this.valueOf():this,t=j.call(symbol);if(f(v,symbol))return"";var desc=w?t.slice(7,-1):t.replace(R,"$1");return""===desc?void 0:desc}}),r({global:!0,forced:!0},{Symbol:O})}},251:function(t,e,n){var r=n(4);e.f=r},252:function(t,e,n){var r=n(24),o=n(118).f,c={}.toString,f="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return f&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return f.slice()}}(t):o(r(t))}},253:function(t,e,n){var path=n(177),r=n(15),o=n(251),c=n(20).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});r(e,t)||c(e,t,{value:o.f(t)})}},254:function(t,e,n){"use strict";n.r(e);n(249),n(250),n(175),n(34);var r=n(7),o=n(60),c=n(61),f=n(116),l=n(117),h=n(82),y=n(9),d=n(83);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(f.a)(h,t);var e,n,l=v(h);function h(){var t;return Object(o.a)(this,h),(t=l.apply(this,arguments)).globalContent=null,t.pageTitle="",t.pageDescription="",t}return Object(c.a)(h,[{key:"getGlobalData",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content("global").fetch();case 2:this.globalContent=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"fetch",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"head",value:function(){var t,e;return{title:(this.pageTitle?this.pageTitle+" — ":"")+(null===(t=this.globalContent)||void 0===t?void 0:t.title),meta:[{hid:"description",name:"description",content:this.pageDescription?this.pageDescription:null===(e=this.globalContent)||void 0===e?void 0:e.description}]}}}]),h}(d.Vue),j=m=O([d.Component],m),w=n(10),component=Object(w.a)(j,void 0,void 0,!1,null,null,null);e.default=component.exports},258:function(t,e,n){"use strict";n.r(e);n(249),n(250),n(175),n(34);var r=n(7),o=n(60),c=n(61),f=n(116),l=n(117),h=n(82),y=n(9),d=n(83);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(f.a)(l,t);var e,n=v(l);function l(){var t;return Object(o.a)(this,l),(t=n.apply(this,arguments)).PATH="",t.content=null,t}return Object(c.a)(l,[{key:"fetch",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:return t.next=4,this.$content(this.PATH,this.$route.params.slug).fetch();case 4:this.content=t.sent,this.pageTitle=this.content.title,this.pageDescription=this.content.description;case 7:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),l}(n(254).default),j=m=O([d.Component],m),w=n(10),component=Object(w.a)(j,void 0,void 0,!1,null,null,null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);n(175),n(34);var r=n(7),o=n(60),c=n(61),f=n(116),l=n(117),h=n(82),y=n(9),d=n(83);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(f.a)(l,t);var e,n=v(l);function l(){return Object(o.a)(this,l),n.apply(this,arguments)}return Object(c.a)(l,[{key:"fetch",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:this.pageTitle="About";case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),l}(n(258).default),j=m=O([d.Component],m),w=n(10),component=Object(w.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about"},[n("header",{staticClass:"title-wrapper"},[n("h1",{staticClass:"title"},[t._v("\n      About\n    ")]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.globalContent.description)+"\n    ")])]),t._v(" "),t.globalContent?n("nuxt-content",{attrs:{document:t.globalContent}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);
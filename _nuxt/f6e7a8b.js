(window.webpackJsonp=window.webpackJsonp||[]).push([[15,13,14],{242:function(t,e,n){var r=n(4);e.f=r},243:function(t,e,n){"use strict";var r=n(3),o=n(5),c=n(28),f=n(24),l=n(14),h=n(117),d=n(175),y=n(6),v=n(18),m=n(82),O=n(12),j=n(8),w=n(26),R=n(25),S=n(77),x=n(43),k=n(76),P=n(56),C=n(113),D=n(245),T=n(116),_=n(34),$=n(21),E=n(80),G=n(22),N=n(19),A=n(115),J=n(81),F=n(78),H=n(114),I=n(4),Q=n(242),V=n(246),W=n(41),z=n(29),B=n(55).forEach,K=J("hidden"),L="Symbol",M=I("toPrimitive"),U=z.set,X=z.getterFor(L),Y=Object.prototype,Z=o.Symbol,tt=c("JSON","stringify"),et=_.f,nt=$.f,ot=D.f,it=E.f,ct=A("symbols"),ut=A("op-symbols"),at=A("string-to-symbol-registry"),ft=A("symbol-to-string-registry"),st=A("wks"),lt=o.QObject,pt=!lt||!lt.prototype||!lt.prototype.findChild,ht=l&&y((function(){return 7!=k(nt({},"a",{get:function(){return nt(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=et(Y,e);r&&delete Y[e],nt(t,e,n),r&&t!==Y&&nt(Y,e,r)}:nt,yt=function(t,e){var symbol=ct[t]=k(Z.prototype);return U(symbol,{type:L,tag:t,description:e}),l||(symbol.description=e),symbol},bt=d?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Z},vt=function(t,e,n){t===Y&&vt(ut,e,n),j(t);var r=S(e,!0);return j(n),v(ct,r)?(n.enumerable?(v(t,K)&&t[K][r]&&(t[K][r]=!1),n=k(n,{enumerable:x(0,!1)})):(v(t,K)||nt(t,K,x(1,{})),t[K][r]=!0),ht(t,r,n)):nt(t,r,n)},gt=function(t,e){j(t);var n=R(e),r=P(n).concat(wt(n));return B(r,(function(e){l&&!mt.call(n,e)||vt(t,e,n[e])})),t},mt=function(t){var e=S(t,!0),n=it.call(this,e);return!(this===Y&&v(ct,e)&&!v(ut,e))&&(!(n||!v(this,e)||!v(ct,e)||v(this,K)&&this[K][e])||n)},Ot=function(t,e){var n=R(t),r=S(e,!0);if(n!==Y||!v(ct,r)||v(ut,r)){var o=et(n,r);return!o||!v(ct,r)||v(n,K)&&n[K][r]||(o.enumerable=!0),o}},jt=function(t){var e=ot(R(t)),n=[];return B(e,(function(t){v(ct,t)||v(F,t)||n.push(t)})),n},wt=function(t){var e=t===Y,n=ot(e?ut:R(t)),r=[];return B(n,(function(t){!v(ct,t)||e&&!v(Y,t)||r.push(ct[t])})),r};(h||(N((Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=H(t),n=function(t){this===Y&&n.call(ut,t),v(this,K)&&v(this[K],e)&&(this[K][e]=!1),ht(this,e,x(1,t))};return l&&pt&&ht(Y,e,{configurable:!0,set:n}),yt(e,t)}).prototype,"toString",(function(){return X(this).tag})),N(Z,"withoutSetter",(function(t){return yt(H(t),t)})),E.f=mt,$.f=vt,_.f=Ot,C.f=D.f=jt,T.f=wt,Q.f=function(t){return yt(I(t),t)},l&&(nt(Z.prototype,"description",{configurable:!0,get:function(){return X(this).description}}),f||N(Y,"propertyIsEnumerable",mt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:Z}),B(P(st),(function(t){V(t)})),r({target:L,stat:!0,forced:!h},{for:function(t){var e=String(t);if(v(at,e))return at[e];var symbol=Z(e);return at[e]=symbol,ft[symbol]=e,symbol},keyFor:function(t){if(!bt(t))throw TypeError(t+" is not a symbol");if(v(ft,t))return ft[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:function(t,e){return void 0===e?k(t):gt(k(t),e)},defineProperty:vt,defineProperties:gt,getOwnPropertyDescriptor:Ot}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:jt,getOwnPropertySymbols:wt}),r({target:"Object",stat:!0,forced:y((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(w(t))}}),tt)&&r({target:"JSON",stat:!0,forced:!h||y((function(){var symbol=Z();return"[null]"!=tt([symbol])||"{}"!=tt({a:symbol})||"{}"!=tt(Object(symbol))}))},{stringify:function(t,e,n){for(var r,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(r=e,(O(e)||void 0!==t)&&!bt(t))return m(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!bt(e))return e}),o[1]=e,tt.apply(null,o)}});Z.prototype[M]||G(Z.prototype,M,Z.prototype.valueOf),W(Z,L),F[K]=!0},244:function(t,e,n){"use strict";var r=n(3),o=n(14),c=n(5),f=n(18),l=n(12),h=n(21).f,d=n(173),y=c.Symbol;if(o&&"function"==typeof y&&(!("description"in y.prototype)||void 0!==y().description)){var v={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new y(t):void 0===t?y():y(t);return""===t&&(v[e]=!0),e};d(m,y);var O=m.prototype=y.prototype;O.constructor=m;var j=O.toString,w="Symbol(test)"==String(y("test")),R=/^Symbol\((.*)\)[^)]+$/;h(O,"description",{configurable:!0,get:function(){var symbol=l(this)?this.valueOf():this,t=j.call(symbol);if(f(v,symbol))return"";var desc=w?t.slice(7,-1):t.replace(R,"$1");return""===desc?void 0:desc}}),r({global:!0,forced:!0},{Symbol:m})}},245:function(t,e,n){var r=n(25),o=n(113).f,c={}.toString,f="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return f&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return f.slice()}}(t):o(r(t))}},246:function(t,e,n){var path=n(174),r=n(18),o=n(242),c=n(21).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});r(e,t)||c(e,t,{value:o.f(t)})}},248:function(t,e,n){"use strict";n.r(e);n(243),n(244),n(171),n(33);var r=n(7),o=n(52),c=n(53),f=n(111),l=n(112),h=n(74),d=n(10),y=n(75);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(f.a)(d,t);var e,n,l,h=v(d);function d(){var t;return Object(o.a)(this,d),(t=h.apply(this,arguments)).globalContent=null,t.pageTitle="",t.pageDescription="",t}return Object(c.a)(d,[{key:"getGlobalData",value:(l=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.globalContent){t.next=4;break}return t.next=3,this.$content("global").fetch();case 3:this.globalContent=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})},{key:"fetch",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"created",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"head",value:function(){var t,e;return{title:(this.pageTitle?this.pageTitle+" — ":"")+(null===(t=this.globalContent)||void 0===t?void 0:t.title),meta:[{hid:"description",name:"description",content:this.pageDescription?this.pageDescription:null===(e=this.globalContent)||void 0===e?void 0:e.description}]}}}]),d}(y.Vue),j=O=m([y.Component],O),w=n(11),component=Object(w.a)(j,undefined,undefined,!1,null,null,null);e.default=component.exports},256:function(t,e,n){"use strict";n.r(e);n(243),n(244),n(171),n(33);var r=n(7),o=n(52),c=n(53),f=n(111),l=n(112),h=n(74),d=n(10),y=n(75);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(f.a)(d,t);var e,n,l,h=v(d);function d(){var t;return Object(o.a)(this,d),(t=h.apply(this,arguments)).PATH="",t.content=null,t}return Object(c.a)(d,[{key:"getContent",value:(l=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.content){t.next=6;break}return t.next=3,this.$content(this.PATH,this.$route.params.slug).fetch();case 3:this.content=t.sent,this.pageTitle=this.content.title,this.pageDescription=this.content.description;case 6:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})},{key:"fetch",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:return t.next=4,this.getContent();case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"created",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:return t.next=4,this.getContent();case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),d}(n(248).default),j=O=m([y.Component],O),w=n(11),component=Object(w.a)(j,undefined,undefined,!1,null,null,null);e.default=component.exports},312:function(t,e,n){"use strict";n.r(e);n(171);var r=n(52),o=n(53),c=n(111),f=n(112),l=n(74),h=n(10),d=n(75);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"mounted",value:function(){this.pageTitle="About"}}]),n}(n(256).default),O=m=v([d.Component],m),j=n(11),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.globalContent?n("section",{staticClass:"about"},[n("header",{staticClass:"title-wrapper"},[n("h1",{staticClass:"title"},[t._v("\n      About\n    ")]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.globalContent.description)+"\n    ")])]),t._v(" "),n("nuxt-content",{attrs:{document:t.globalContent}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);
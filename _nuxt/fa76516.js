(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4,5],{249:function(t,e,n){"use strict";var r=n(2),o=n(6),c=n(31),f=n(25),l=n(11),h=n(122),d=n(178),y=n(5),v=n(15),O=n(89),j=n(12),m=n(8),R=n(21),_=n(24),S=n(85),w=n(45),E=n(84),P=n(62),D=n(118),N=n(252),x=n(121),A=n(35),C=n(20),T=n(87),k=n(22),I=n(18),F=n(120),$=n(88),M=n(86),G=n(119),U=n(4),V=n(251),H=n(253),L=n(43),Y=n(30),J=n(36).forEach,K=$("hidden"),X=U("toPrimitive"),B=Y.set,Q=Y.getterFor("Symbol"),W=Object.prototype,z=o.Symbol,Z=c("JSON","stringify"),tt=A.f,et=C.f,nt=N.f,ot=T.f,ct=F("symbols"),it=F("op-symbols"),at=F("string-to-symbol-registry"),ut=F("symbol-to-string-registry"),ft=F("wks"),st=o.QObject,lt=!st||!st.prototype||!st.prototype.findChild,pt=l&&y((function(){return 7!=E(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=tt(W,e);r&&delete W[e],et(t,e,n),r&&t!==W&&et(W,e,r)}:et,ht=function(t,e){var symbol=ct[t]=E(z.prototype);return B(symbol,{type:"Symbol",tag:t,description:e}),l||(symbol.description=e),symbol},yt=d?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},vt=function(t,e,n){t===W&&vt(it,e,n),m(t);var r=S(e,!0);return m(n),v(ct,r)?(n.enumerable?(v(t,K)&&t[K][r]&&(t[K][r]=!1),n=E(n,{enumerable:w(0,!1)})):(v(t,K)||et(t,K,w(1,{})),t[K][r]=!0),pt(t,r,n)):et(t,r,n)},bt=function(t,e){m(t);var n=_(e),r=P(n).concat(mt(n));return J(r,(function(e){l&&!gt.call(n,e)||vt(t,e,n[e])})),t},gt=function(t){var e=S(t,!0),n=ot.call(this,e);return!(this===W&&v(ct,e)&&!v(it,e))&&(!(n||!v(this,e)||!v(ct,e)||v(this,K)&&this[K][e])||n)},Ot=function(t,e){var n=_(t),r=S(e,!0);if(n!==W||!v(ct,r)||v(it,r)){var o=tt(n,r);return!o||!v(ct,r)||v(n,K)&&n[K][r]||(o.enumerable=!0),o}},jt=function(t){var e=nt(_(t)),n=[];return J(e,(function(t){v(ct,t)||v(M,t)||n.push(t)})),n},mt=function(t){var e=t===W,n=nt(e?it:_(t)),r=[];return J(n,(function(t){!v(ct,t)||e&&!v(W,t)||r.push(ct[t])})),r};(h||(I((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=G(t),n=function(t){this===W&&n.call(it,t),v(this,K)&&v(this[K],e)&&(this[K][e]=!1),pt(this,e,w(1,t))};return l&&lt&&pt(W,e,{configurable:!0,set:n}),ht(e,t)}).prototype,"toString",(function(){return Q(this).tag})),I(z,"withoutSetter",(function(t){return ht(G(t),t)})),T.f=gt,C.f=vt,A.f=Ot,D.f=N.f=jt,x.f=mt,V.f=function(t){return ht(U(t),t)},l&&(et(z.prototype,"description",{configurable:!0,get:function(){return Q(this).description}}),f||I(W,"propertyIsEnumerable",gt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:z}),J(P(ft),(function(t){H(t)})),r({target:"Symbol",stat:!0,forced:!h},{for:function(t){var e=String(t);if(v(at,e))return at[e];var symbol=z(e);return at[e]=symbol,ut[symbol]=e,symbol},keyFor:function(t){if(!yt(t))throw TypeError(t+" is not a symbol");if(v(ut,t))return ut[t]},useSetter:function(){lt=!0},useSimple:function(){lt=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:function(t,e){return void 0===e?E(t):bt(E(t),e)},defineProperty:vt,defineProperties:bt,getOwnPropertyDescriptor:Ot}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:jt,getOwnPropertySymbols:mt}),r({target:"Object",stat:!0,forced:y((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(R(t))}}),Z)&&r({target:"JSON",stat:!0,forced:!h||y((function(){var symbol=z();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,e,n){for(var r,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(r=e,(j(e)||void 0!==t)&&!yt(t))return O(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!yt(e))return e}),o[1]=e,Z.apply(null,o)}});z.prototype[X]||k(z.prototype,X,z.prototype.valueOf),L(z,"Symbol"),M[K]=!0},250:function(t,e,n){"use strict";var r=n(2),o=n(11),c=n(6),f=n(15),l=n(12),h=n(20).f,d=n(176),y=c.Symbol;if(o&&"function"==typeof y&&(!("description"in y.prototype)||void 0!==y().description)){var v={},O=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof O?new y(t):void 0===t?y():y(t);return""===t&&(v[e]=!0),e};d(O,y);var j=O.prototype=y.prototype;j.constructor=O;var m=j.toString,R="Symbol(test)"==String(y("test")),_=/^Symbol\((.*)\)[^)]+$/;h(j,"description",{configurable:!0,get:function(){var symbol=l(this)?this.valueOf():this,t=m.call(symbol);if(f(v,symbol))return"";var desc=R?t.slice(7,-1):t.replace(_,"$1");return""===desc?void 0:desc}}),r({global:!0,forced:!0},{Symbol:O})}},251:function(t,e,n){var r=n(4);e.f=r},252:function(t,e,n){var r=n(24),o=n(118).f,c={}.toString,f="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return f&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return f.slice()}}(t):o(r(t))}},253:function(t,e,n){var path=n(177),r=n(15),o=n(251),c=n(20).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});r(e,t)||c(e,t,{value:o.f(t)})}},254:function(t,e,n){"use strict";n.r(e);n(249),n(250),n(175),n(34);var r=n(7),o=n(60),c=n(61),f=n(116),l=n(117),h=n(82),d=n(9),y=n(83);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(f.a)(h,t);var e,n,l=v(h);function h(){var t;return Object(o.a)(this,h),(t=l.apply(this,arguments)).globalContent=null,t.pageTitle="",t.pageDescription="",t}return Object(c.a)(h,[{key:"getGlobalData",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content("global").fetch();case 2:this.globalContent=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"fetch",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"head",value:function(){var t,e;return{title:(this.pageTitle?this.pageTitle+" — ":"")+(null===(t=this.globalContent)||void 0===t?void 0:t.title),meta:[{hid:"description",name:"description",content:this.pageDescription?this.pageDescription:null===(e=this.globalContent)||void 0===e?void 0:e.description}]}}}]),h}(y.Vue),m=j=O([y.Component],j),R=n(10),component=Object(R.a)(m,void 0,void 0,!1,null,null,null);e.default=component.exports},256:function(t,e,n){"use strict";n(175);var r=n(60),o=n(61),c=n(116),f=n(117),l=n(82),h=n(9),d=n(83);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var v,O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=v=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,null,[{key:"getBodyAsHtml",value:function(content){var t,e=new(d.Vue.extend(v))({propsData:{content:content}});return e.$mount(),null===(t=e.$el)||void 0===t?void 0:t.outerHTML}}]),n}(d.Vue);O([Object(d.Prop)()],j.prototype,"content",void 0);var m=j=v=O([d.Component],j),R=n(10),component=Object(R.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("nuxt-content",{attrs:{document:this.content}})}),[],!1,null,null,null);e.a=component.exports},257:function(t,e,n){"use strict";n(249),n(250),n(175);var r=n(60),o=n(61),c=n(116),f=n(117),l=n(82),h=n(9),d=n(83);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).title="",t.description="",t.slug="",t.body="",t.img="",t.alt="",t.createdAt=new Date,t.references=[],t}return Object(o.a)(n,[{key:"createdAtFormatted",get:function(){var t;return null===(t=new Date(this.createdAt))||void 0===t?void 0:t.toLocaleDateString("en",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}]),n}(d.Vue),j=O=v([d.Component],O),m=n(10),component=Object(m.a)(j,void 0,void 0,!1,null,null,null);e.a=component.exports},258:function(t,e,n){var content=n(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("3bb47402",content,!0,{sourceMap:!1})},263:function(t,e,n){"use strict";n.r(e);n(249),n(250),n(175),n(34);var r=n(7),o=n(60),c=n(61),f=n(116),l=n(117),h=n(82),d=n(9),y=n(83);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(f.a)(l,t);var e,n=v(l);function l(){var t;return Object(o.a)(this,l),(t=n.apply(this,arguments)).PATH="",t.content=null,t}return Object(c.a)(l,[{key:"fetch",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:return t.next=4,this.$content(this.PATH,this.$route.params.slug).fetch();case 4:this.content=t.sent,this.pageTitle=this.content.title,this.pageDescription=this.content.description;case 7:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),l}(n(254).default),m=j=O([y.Component],j),R=n(10),component=Object(R.a)(m,void 0,void 0,!1,null,null,null);e.default=component.exports},264:function(t,e,n){"use strict";var r=n(11),o=n(6),c=n(90),f=n(18),l=n(15),h=n(38),d=n(179),y=n(85),v=n(5),O=n(84),j=n(118).f,m=n(35).f,R=n(20).f,_=n(183).trim,S=o.Number,w=S.prototype,E="Number"==h(O(w)),P=function(t){var e,n,r,o,c,f,l,code,h=y(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=_(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+h}for(f=(c=h.slice(2)).length,l=0;l<f;l++)if((code=c.charCodeAt(l))<48||code>o)return NaN;return parseInt(c,r)}return+h};if(c("Number",!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var D,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(E?v((function(){w.valueOf.call(n)})):"Number"!=h(n))?d(new S(P(e)),n,N):P(e)},x=r?j(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;x.length>A;A++)l(S,D=x[A])&&!l(N,D)&&R(N,D,m(S,D));N.prototype=w,w.constructor=N,f(o,"Number",N)}},265:function(t,e,n){n(2)({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},266:function(t,e,n){"use strict";n(258)},267:function(t,e,n){(e=n(28)(!1)).push([t.i,".antagonist-header{text-align:center}.antagonist-header img{max-height:300px}",""]),t.exports=e},270:function(t,e,n){"use strict";n.r(e);n(249),n(250),n(37),n(175),n(63),n(44);var r=n(60),o=n(61),c=n(116),f=n(117),l=n(82),h=n(9),d=n(83),y=n(256);n(264),n(265);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).order=Number.MAX_SAFE_INTEGER,t.features={},t}return Object(o.a)(n,[{key:"imgUrl",get:function(){return"/img/antagonists/"+this.img}}]),n}(n(257).a),m=j=O([d.Component],j),R=(n(266),n(10)),_=Object(R.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"antagonist"},[n("header",{staticClass:"antagonist-header"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.description)+"\n    ")]),t._v(" "),n("img",{attrs:{src:t.imgUrl,alt:t.alt}})]),t._v(" "),n("section",{staticClass:"antagonist-body",domProps:{innerHTML:t._s(t.body)}}),t._v(" "),t.features?n("section",{staticClass:"antagonist-features"},[n("h2",[t._v("Features")]),t._v(" "),n("table",{staticClass:"features"},[n("tbody",t._l(t.features,(function(e,r){return n("tr",{key:r},[n("th",[t._v("\n            "+t._s(r)+"\n          ")]),t._v(" "),n("td",[t._v("\n            "+t._s(e)+"\n          ")])])})),0)])]):t._e(),t._v(" "),t.references?n("section",{staticClass:"antagonist-references"},[n("h2",[t._v("References")]),t._v(" "),n("ul",t._l(t.references,(function(e){return n("li",{key:e},[n("a",{attrs:{href:e,target:"_blank"}},[t._v("\n          "+t._s(e)+"\n        ")])])})),0)]):t._e()])}),[],!1,null,null,null).exports;function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var w,E=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},P=w=function(t){Object(c.a)(n,t);var e=S(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"created",value:function(){var t=this;this.content&&(this.order=this.content.order,this.title=this.content.title,this.slug=this.content.slug,this.description=this.content.description,this.createdAt=this.content.createdAt,this.img=this.content.img,this.alt=this.content.alt,this.references=this.content.references,this.features={},this.content[w.FEATURES_KEY]&&Object.keys(this.content[w.FEATURES_KEY]).forEach((function(e){t.features[e]=t.content[w.FEATURES_KEY][e]})),this.body=y.a.getBodyAsHtml(this.content))}}]),n}(_);P.FEATURES_KEY="features",E([Object(d.Prop)()],P.prototype,"content",void 0);var D=P=w=E([d.Component],P),N=Object(R.a)(D,void 0,void 0,!1,null,null,null);e.default=N.exports},299:function(t,e,n){"use strict";n.r(e);n(175);var r=n(60),o=n(116),c=n(117),f=n(82),l=n(9),h=n(83);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},v=function(t){Object(o.a)(n,t);var e=d(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).PATH="antagonists",t}return n}(n(263).default),O=v=y([h.Component],v),j=n(10),component=Object(j.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return this.content?e("Antagonist",{attrs:{content:this.content}}):this._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Antagonist:n(270).default})}}]);
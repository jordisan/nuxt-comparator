(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,5],{249:function(t,e,n){"use strict";var r=n(2),o=n(6),c=n(31),f=n(25),l=n(11),d=n(122),y=n(178),h=n(5),v=n(15),O=n(89),j=n(12),m=n(8),R=n(21),w=n(24),P=n(85),S=n(45),D=n(84),x=n(62),_=n(118),C=n(252),k=n(121),A=n(35),T=n(20),$=n(87),E=n(22),H=n(18),N=n(120),B=n(88),F=n(86),J=n(119),V=n(4),L=n(251),M=n(253),U=n(43),I=n(30),Q=n(36).forEach,W=B("hidden"),z=V("toPrimitive"),G=I.set,K=I.getterFor("Symbol"),X=Object.prototype,Y=o.Symbol,Z=c("JSON","stringify"),tt=A.f,et=T.f,nt=C.f,ot=$.f,ct=N("symbols"),it=N("op-symbols"),ut=N("string-to-symbol-registry"),at=N("symbol-to-string-registry"),ft=N("wks"),lt=o.QObject,st=!lt||!lt.prototype||!lt.prototype.findChild,pt=l&&h((function(){return 7!=D(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=tt(X,e);r&&delete X[e],et(t,e,n),r&&t!==X&&et(X,e,r)}:et,yt=function(t,e){var symbol=ct[t]=D(Y.prototype);return G(symbol,{type:"Symbol",tag:t,description:e}),l||(symbol.description=e),symbol},ht=y?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},bt=function(t,e,n){t===X&&bt(it,e,n),m(t);var r=P(e,!0);return m(n),v(ct,r)?(n.enumerable?(v(t,W)&&t[W][r]&&(t[W][r]=!1),n=D(n,{enumerable:S(0,!1)})):(v(t,W)||et(t,W,S(1,{})),t[W][r]=!0),pt(t,r,n)):et(t,r,n)},vt=function(t,e){m(t);var n=w(e),r=x(n).concat(mt(n));return Q(r,(function(e){l&&!gt.call(n,e)||bt(t,e,n[e])})),t},gt=function(t){var e=P(t,!0),n=ot.call(this,e);return!(this===X&&v(ct,e)&&!v(it,e))&&(!(n||!v(this,e)||!v(ct,e)||v(this,W)&&this[W][e])||n)},Ot=function(t,e){var n=w(t),r=P(e,!0);if(n!==X||!v(ct,r)||v(it,r)){var o=tt(n,r);return!o||!v(ct,r)||v(n,W)&&n[W][r]||(o.enumerable=!0),o}},jt=function(t){var e=nt(w(t)),n=[];return Q(e,(function(t){v(ct,t)||v(F,t)||n.push(t)})),n},mt=function(t){var e=t===X,n=nt(e?it:w(t)),r=[];return Q(n,(function(t){!v(ct,t)||e&&!v(X,t)||r.push(ct[t])})),r};(d||(H((Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=J(t),n=function(t){this===X&&n.call(it,t),v(this,W)&&v(this[W],e)&&(this[W][e]=!1),pt(this,e,S(1,t))};return l&&st&&pt(X,e,{configurable:!0,set:n}),yt(e,t)}).prototype,"toString",(function(){return K(this).tag})),H(Y,"withoutSetter",(function(t){return yt(J(t),t)})),$.f=gt,T.f=bt,A.f=Ot,_.f=C.f=jt,k.f=mt,L.f=function(t){return yt(V(t),t)},l&&(et(Y.prototype,"description",{configurable:!0,get:function(){return K(this).description}}),f||H(X,"propertyIsEnumerable",gt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Y}),Q(x(ft),(function(t){M(t)})),r({target:"Symbol",stat:!0,forced:!d},{for:function(t){var e=String(t);if(v(ut,e))return ut[e];var symbol=Y(e);return ut[e]=symbol,at[symbol]=e,symbol},keyFor:function(t){if(!ht(t))throw TypeError(t+" is not a symbol");if(v(at,t))return at[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),r({target:"Object",stat:!0,forced:!d,sham:!l},{create:function(t,e){return void 0===e?D(t):vt(D(t),e)},defineProperty:bt,defineProperties:vt,getOwnPropertyDescriptor:Ot}),r({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:jt,getOwnPropertySymbols:mt}),r({target:"Object",stat:!0,forced:h((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(R(t))}}),Z)&&r({target:"JSON",stat:!0,forced:!d||h((function(){var symbol=Y();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,e,n){for(var r,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(r=e,(j(e)||void 0!==t)&&!ht(t))return O(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ht(e))return e}),o[1]=e,Z.apply(null,o)}});Y.prototype[z]||E(Y.prototype,z,Y.prototype.valueOf),U(Y,"Symbol"),F[W]=!0},250:function(t,e,n){"use strict";var r=n(2),o=n(11),c=n(6),f=n(15),l=n(12),d=n(20).f,y=n(176),h=c.Symbol;if(o&&"function"==typeof h&&(!("description"in h.prototype)||void 0!==h().description)){var v={},O=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof O?new h(t):void 0===t?h():h(t);return""===t&&(v[e]=!0),e};y(O,h);var j=O.prototype=h.prototype;j.constructor=O;var m=j.toString,R="Symbol(test)"==String(h("test")),w=/^Symbol\((.*)\)[^)]+$/;d(j,"description",{configurable:!0,get:function(){var symbol=l(this)?this.valueOf():this,t=m.call(symbol);if(f(v,symbol))return"";var desc=R?t.slice(7,-1):t.replace(w,"$1");return""===desc?void 0:desc}}),r({global:!0,forced:!0},{Symbol:O})}},251:function(t,e,n){var r=n(4);e.f=r},252:function(t,e,n){var r=n(24),o=n(118).f,c={}.toString,f="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return f&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return f.slice()}}(t):o(r(t))}},253:function(t,e,n){var path=n(177),r=n(15),o=n(251),c=n(20).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});r(e,t)||c(e,t,{value:o.f(t)})}},254:function(t,e,n){"use strict";n.r(e);n(249),n(250),n(175),n(34);var r=n(7),o=n(60),c=n(61),f=n(116),l=n(117),d=n(82),y=n(9),h=n(83);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(f.a)(l,t);var e,n=v(l);function l(){var t;return Object(o.a)(this,l),(t=n.apply(this,arguments)).globalContent=null,t.pageTitle="",t.pageDescription="",t}return Object(c.a)(l,[{key:"created",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content("global").fetch();case 2:this.globalContent=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"head",value:function(){var t,e;return{title:(this.pageTitle?this.pageTitle+" — ":"")+(null===(t=this.globalContent)||void 0===t?void 0:t.title),meta:[{hid:"description",name:"description",content:this.pageDescription?this.pageDescription:null===(e=this.globalContent)||void 0===e?void 0:e.description}]}}}]),l}(h.Vue),m=j=O([h.Component],j),R=n(10),component=Object(R.a)(m,void 0,void 0,!1,null,null,null);e.default=component.exports},255:function(t,e,n){var content=n(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("5e5117c4",content,!0,{sourceMap:!1})},256:function(t,e,n){"use strict";n(175);var r=n(60),o=n(61),c=n(116),f=n(117),l=n(82),d=n(9),y=n(83);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var v,O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=v=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,null,[{key:"getBodyAsHtml",value:function(content){var t,e=new(y.Vue.extend(v))({propsData:{content:content}});return e.$mount(),null===(t=e.$el)||void 0===t?void 0:t.outerHTML}}]),n}(y.Vue);O([Object(y.Prop)()],j.prototype,"content",void 0);var m=j=v=O([y.Component],j),R=n(10),component=Object(R.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("nuxt-content",{attrs:{document:this.content}})}),[],!1,null,null,null);e.a=component.exports},257:function(t,e,n){"use strict";n(249),n(250),n(175);var r=n(60),o=n(61),c=n(116),f=n(117),l=n(82),d=n(9),y=n(83);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).title="",t.description="",t.slug="",t.body="",t.img="",t.alt="",t.createdAt=new Date,t.references=[],t}return Object(o.a)(n,[{key:"createdAtFormatted",get:function(){var t;return null===(t=new Date(this.createdAt))||void 0===t?void 0:t.toLocaleDateString("en",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}]),n}(y.Vue),j=O=v([y.Component],O),m=n(10),component=Object(m.a)(j,void 0,void 0,!1,null,null,null);e.a=component.exports},260:function(t,e,n){"use strict";n(255)},261:function(t,e,n){(e=n(28)(!1)).push([t.i,".blog-entry-header .blog-entry-img-wrapper{text-align:center}.blog-entry-header .blog-entry-img-wrapper img{max-height:200px}",""]),t.exports=e},262:function(t,e,n){"use strict";n.r(e);n(249),n(250),n(175);var r=n(60),o=n(61),c=n(116),f=n(117),l=n(82),d=n(9),y=n(83),h=n(256);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"imgUrl",get:function(){return"/img/blog/"+this.img}}]),n}(n(257).a),m=j=O([y.Component],j),R=(n(260),n(10));function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var P=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},S=function(t){Object(c.a)(n,t);var e=w(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"created",value:function(){this.content&&(this.title=this.content.title,this.slug=this.content.slug,this.description=this.content.description,this.createdAt=this.content.createdAt,this.img=this.content.img,this.alt=this.content.alt,this.references=this.content.references,this.body=h.a.getBodyAsHtml(this.content))}}]),n}(Object(R.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"blog-entry"},[n("header",{staticClass:"blog-entry-header"},[n("p",{staticClass:"blog-entry-img-wrapper"},[n("img",{attrs:{src:t.imgUrl,alt:t.alt}})]),t._v(" "),n("h1",[t._v(t._s(t.title))]),t._v(" "),n("time",[t._v(t._s(t.createdAtFormatted))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.description)+"\n    ")])]),t._v(" "),n("section",{staticClass:"blog-entry-body",domProps:{innerHTML:t._s(t.body)}}),t._v(" "),t.references?n("section",{staticClass:"blog-references"},[n("h2",[t._v("References")]),t._v(" "),n("ul",t._l(t.references,(function(e){return n("li",{key:e},[n("a",{attrs:{href:e,target:"_blank"}},[t._v("\n          "+t._s(e)+"\n        ")])])})),0)]):t._e()])}),[],!1,null,null,null).exports);P([Object(y.Prop)()],S.prototype,"content",void 0);var D=S=P([y.Component],S),x=Object(R.a)(D,void 0,void 0,!1,null,null,null);e.default=x.exports},263:function(t,e,n){"use strict";n.r(e);n(249),n(250),n(175),n(34);var r=n(7),o=n(60),c=n(61),f=n(116),l=n(117),d=n(82),y=n(9),h=n(83);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(f.a)(l,t);var e,n=v(l);function l(){var t;return Object(o.a)(this,l),(t=n.apply(this,arguments)).PATH="",t.content=null,t}return Object(c.a)(l,[{key:"mounted",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content(this.PATH,this.$route.params.slug).fetch();case 2:this.content=t.sent,this.pageTitle=this.content.title,this.pageDescription=this.content.description;case 5:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),l}(n(254).default),m=j=O([h.Component],j),R=n(10),component=Object(R.a)(m,void 0,void 0,!1,null,null,null);e.default=component.exports},300:function(t,e,n){"use strict";n.r(e);n(175);var r=n(60),o=n(116),c=n(117),f=n(82),l=n(9),d=n(83);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},v=function(t){Object(o.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).PATH="blog",t}return n}(n(263).default),O=v=h([d.Component],v),j=n(10),component=Object(j.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return this.content?e("BlogEntry",{attrs:{content:this.content}}):this._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogEntry:n(262).default})}}]);
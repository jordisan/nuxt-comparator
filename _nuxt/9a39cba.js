(window.webpackJsonp=window.webpackJsonp||[]).push([[0,8,11,12],{242:function(t,e,n){var r=n(4);e.f=r},243:function(t,e,n){"use strict";var r=n(3),o=n(5),c=n(28),f=n(24),l=n(14),d=n(117),y=n(175),h=n(6),v=n(18),O=n(82),m=n(12),j=n(8),R=n(26),w=n(25),S=n(77),P=n(43),_=n(76),x=n(56),D=n(113),C=n(245),k=n(116),A=n(34),E=n(21),$=n(80),N=n(22),F=n(19),H=n(115),J=n(81),T=n(78),L=n(114),M=n(4),V=n(242),B=n(246),U=n(41),I=n(29),Q=n(55).forEach,W=J("hidden"),z="Symbol",G=M("toPrimitive"),K=I.set,X=I.getterFor(z),Y=Object.prototype,Z=o.Symbol,tt=c("JSON","stringify"),et=A.f,nt=E.f,ot=C.f,ct=$.f,it=H("symbols"),ut=H("op-symbols"),ft=H("string-to-symbol-registry"),at=H("symbol-to-string-registry"),st=H("wks"),lt=o.QObject,pt=!lt||!lt.prototype||!lt.prototype.findChild,yt=l&&h((function(){return 7!=_(nt({},"a",{get:function(){return nt(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=et(Y,e);r&&delete Y[e],nt(t,e,n),r&&t!==Y&&nt(Y,e,r)}:nt,ht=function(t,e){var symbol=it[t]=_(Z.prototype);return K(symbol,{type:z,tag:t,description:e}),l||(symbol.description=e),symbol},bt=y?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Z},vt=function(t,e,n){t===Y&&vt(ut,e,n),j(t);var r=S(e,!0);return j(n),v(it,r)?(n.enumerable?(v(t,W)&&t[W][r]&&(t[W][r]=!1),n=_(n,{enumerable:P(0,!1)})):(v(t,W)||nt(t,W,P(1,{})),t[W][r]=!0),yt(t,r,n)):nt(t,r,n)},gt=function(t,e){j(t);var n=w(e),r=x(n).concat(Rt(n));return Q(r,(function(e){l&&!Ot.call(n,e)||vt(t,e,n[e])})),t},Ot=function(t){var e=S(t,!0),n=ct.call(this,e);return!(this===Y&&v(it,e)&&!v(ut,e))&&(!(n||!v(this,e)||!v(it,e)||v(this,W)&&this[W][e])||n)},mt=function(t,e){var n=w(t),r=S(e,!0);if(n!==Y||!v(it,r)||v(ut,r)){var o=et(n,r);return!o||!v(it,r)||v(n,W)&&n[W][r]||(o.enumerable=!0),o}},jt=function(t){var e=ot(w(t)),n=[];return Q(e,(function(t){v(it,t)||v(T,t)||n.push(t)})),n},Rt=function(t){var e=t===Y,n=ot(e?ut:w(t)),r=[];return Q(n,(function(t){!v(it,t)||e&&!v(Y,t)||r.push(it[t])})),r};(d||(F((Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),n=function(t){this===Y&&n.call(ut,t),v(this,W)&&v(this[W],e)&&(this[W][e]=!1),yt(this,e,P(1,t))};return l&&pt&&yt(Y,e,{configurable:!0,set:n}),ht(e,t)}).prototype,"toString",(function(){return X(this).tag})),F(Z,"withoutSetter",(function(t){return ht(L(t),t)})),$.f=Ot,E.f=vt,A.f=mt,D.f=C.f=jt,k.f=Rt,V.f=function(t){return ht(M(t),t)},l&&(nt(Z.prototype,"description",{configurable:!0,get:function(){return X(this).description}}),f||F(Y,"propertyIsEnumerable",Ot,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),Q(x(st),(function(t){B(t)})),r({target:z,stat:!0,forced:!d},{for:function(t){var e=String(t);if(v(ft,e))return ft[e];var symbol=Z(e);return ft[e]=symbol,at[symbol]=e,symbol},keyFor:function(t){if(!bt(t))throw TypeError(t+" is not a symbol");if(v(at,t))return at[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!d,sham:!l},{create:function(t,e){return void 0===e?_(t):gt(_(t),e)},defineProperty:vt,defineProperties:gt,getOwnPropertyDescriptor:mt}),r({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:jt,getOwnPropertySymbols:Rt}),r({target:"Object",stat:!0,forced:h((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(R(t))}}),tt)&&r({target:"JSON",stat:!0,forced:!d||h((function(){var symbol=Z();return"[null]"!=tt([symbol])||"{}"!=tt({a:symbol})||"{}"!=tt(Object(symbol))}))},{stringify:function(t,e,n){for(var r,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(r=e,(m(e)||void 0!==t)&&!bt(t))return O(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!bt(e))return e}),o[1]=e,tt.apply(null,o)}});Z.prototype[G]||N(Z.prototype,G,Z.prototype.valueOf),U(Z,z),T[W]=!0},244:function(t,e,n){"use strict";var r=n(3),o=n(14),c=n(5),f=n(18),l=n(12),d=n(21).f,y=n(173),h=c.Symbol;if(o&&"function"==typeof h&&(!("description"in h.prototype)||void 0!==h().description)){var v={},O=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof O?new h(t):void 0===t?h():h(t);return""===t&&(v[e]=!0),e};y(O,h);var m=O.prototype=h.prototype;m.constructor=O;var j=m.toString,R="Symbol(test)"==String(h("test")),w=/^Symbol\((.*)\)[^)]+$/;d(m,"description",{configurable:!0,get:function(){var symbol=l(this)?this.valueOf():this,t=j.call(symbol);if(f(v,symbol))return"";var desc=R?t.slice(7,-1):t.replace(w,"$1");return""===desc?void 0:desc}}),r({global:!0,forced:!0},{Symbol:O})}},245:function(t,e,n){var r=n(25),o=n(113).f,c={}.toString,f="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return f&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return f.slice()}}(t):o(r(t))}},246:function(t,e,n){var path=n(174),r=n(18),o=n(242),c=n(21).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});r(e,t)||c(e,t,{value:o.f(t)})}},250:function(t,e,n){"use strict";n.r(e);n(243),n(244),n(171);var r=n(52),o=n(53),c=n(111),f=n(112),l=n(74),d=n(10),y=n(75);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).title="",t.description="",t.slug="",t.body="",t.img="",t.alt="",t.createdAt=new Date,t.references=[],t}return Object(o.a)(n,[{key:"createdAtFormatted",get:function(){var t;return null===(t=new Date(this.createdAt))||void 0===t?void 0:t.toLocaleDateString("en",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}]),n}(y.Vue),m=O=v([y.Component],O),j=n(11),component=Object(j.a)(m,undefined,undefined,!1,null,null,null);e.default=component.exports},255:function(t,e,n){"use strict";n.r(e);n(171);var r=n(52),o=n(53),c=n(111),f=n(112),l=n(74),d=n(10),y=n(75);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var v,O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=v=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,null,[{key:"getBodyAsHtml",value:function(content){var t,e=new(y.Vue.extend(v))({propsData:{content:content}});return e.$mount(),null===(t=e.$el)||void 0===t?void 0:t.outerHTML}}]),n}(y.Vue);O([Object(y.Prop)()],m.prototype,"content",void 0);var j=m=v=O([y.Component],m),R=n(11),component=Object(R.a)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-content",{attrs:{document:t.content}})}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,n){var content=n(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("5e5117c4",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";n.r(e);n(243),n(244),n(171);var r=n(52),o=n(53),c=n(111),f=n(112),l=n(74),d=n(10),y=n(75),h=n(255);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"created",value:function(){this.content&&(this.title=this.content.title,this.slug=this.content.slug,this.description=this.content.description,this.createdAt=this.content.createdAt,this.img=this.content.img,this.alt=this.content.alt,this.references=this.content.references,this.body=h.default.getBodyAsHtml(this.content))}}]),n}(n(294).default);O([Object(y.Prop)()],m.prototype,"content",void 0);var j=m=O([y.Component],m),R=n(11),component=Object(R.a)(j,undefined,undefined,!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";n(257)},268:function(t,e,n){var r=n(30)(!1);r.push([t.i,".blog-entry-header .blog-entry-img-wrapper{text-align:center}.blog-entry-header .blog-entry-img-wrapper img{max-height:200px}",""]),t.exports=r},294:function(t,e,n){"use strict";n.r(e);n(171);var r=n(52),o=n(53),c=n(111),f=n(112),l=n(74),d=n(10),y=n(75);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"imgUrl",get:function(){return"/img/blog/"+this.img}}]),n}(n(250).default),m=O=v([y.Component],O),j=(n(267),n(11)),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"blog-entry"},[n("header",{staticClass:"blog-entry-header"},[n("p",{staticClass:"blog-entry-img-wrapper"},[n("img",{attrs:{src:t.imgUrl,alt:t.alt}})]),t._v(" "),n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"created"},[n("time",[t._v(t._s(t.createdAtFormatted))])]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.description)+"\n    ")])]),t._v(" "),n("section",{staticClass:"blog-entry-body",domProps:{innerHTML:t._s(t.body)}}),t._v(" "),t.references?n("section",{staticClass:"blog-references"},[n("h2",[t._v("References")]),t._v(" "),n("ul",t._l(t.references,(function(e){return n("li",{key:e},[n("a",{attrs:{href:e,target:"_blank"}},[t._v("\n          "+t._s(e)+"\n        ")])])})),0)]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);
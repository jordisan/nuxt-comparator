(window.webpackJsonp=window.webpackJsonp||[]).push([[9,7,8,10,11,12],{237:function(t,e,n){"use strict";var r=n(4),o=n(6),c=n(29),f=n(28),l=n(15),d=n(106),y=n(166),h=n(8),v=n(19),O=n(74),m=n(13),j=n(10),R=n(27),w=n(23),_=n(69),P=n(50),S=n(102),x=n(51),D=n(101),C=n(240),E=n(105),k=n(38),L=n(18),A=n(72),N=n(21),$=n(20),T=n(104),F=n(73),H=n(70),J=n(103),M=n(7),V=n(239),U=n(241),B=n(71),I=n(39),Q=n(40).forEach,W=F("hidden"),z="Symbol",G=M("toPrimitive"),K=I.set,X=I.getterFor(z),Y=Object.prototype,Z=o.Symbol,tt=c("JSON","stringify"),et=k.f,nt=L.f,ot=C.f,ct=A.f,it=T("symbols"),ut=T("op-symbols"),at=T("string-to-symbol-registry"),ft=T("symbol-to-string-registry"),lt=T("wks"),st=o.QObject,pt=!st||!st.prototype||!st.prototype.findChild,yt=l&&h((function(){return 7!=S(nt({},"a",{get:function(){return nt(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=et(Y,e);r&&delete Y[e],nt(t,e,n),r&&t!==Y&&nt(Y,e,r)}:nt,bt=function(t,e){var symbol=it[t]=S(Z.prototype);return K(symbol,{type:z,tag:t,description:e}),l||(symbol.description=e),symbol},gt=y?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Z},ht=function(t,e,n){t===Y&&ht(ut,e,n),j(t);var r=_(e,!0);return j(n),v(it,r)?(n.enumerable?(v(t,W)&&t[W][r]&&(t[W][r]=!1),n=S(n,{enumerable:P(0,!1)})):(v(t,W)||nt(t,W,P(1,{})),t[W][r]=!0),yt(t,r,n)):nt(t,r,n)},vt=function(t,e){j(t);var n=w(e),r=x(n).concat(Rt(n));return Q(r,(function(e){l&&!Ot.call(n,e)||ht(t,e,n[e])})),t},Ot=function(t){var e=_(t,!0),n=ct.call(this,e);return!(this===Y&&v(it,e)&&!v(ut,e))&&(!(n||!v(this,e)||!v(it,e)||v(this,W)&&this[W][e])||n)},mt=function(t,e){var n=w(t),r=_(e,!0);if(n!==Y||!v(it,r)||v(ut,r)){var o=et(n,r);return!o||!v(it,r)||v(n,W)&&n[W][r]||(o.enumerable=!0),o}},jt=function(t){var e=ot(w(t)),n=[];return Q(e,(function(t){v(it,t)||v(H,t)||n.push(t)})),n},Rt=function(t){var e=t===Y,n=ot(e?ut:w(t)),r=[];return Q(n,(function(t){!v(it,t)||e&&!v(Y,t)||r.push(it[t])})),r};(d||($((Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=J(t),n=function(t){this===Y&&n.call(ut,t),v(this,W)&&v(this[W],e)&&(this[W][e]=!1),yt(this,e,P(1,t))};return l&&pt&&yt(Y,e,{configurable:!0,set:n}),bt(e,t)}).prototype,"toString",(function(){return X(this).tag})),$(Z,"withoutSetter",(function(t){return bt(J(t),t)})),A.f=Ot,L.f=ht,k.f=mt,D.f=C.f=jt,E.f=Rt,V.f=function(t){return bt(M(t),t)},l&&(nt(Z.prototype,"description",{configurable:!0,get:function(){return X(this).description}}),f||$(Y,"propertyIsEnumerable",Ot,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),Q(x(lt),(function(t){U(t)})),r({target:z,stat:!0,forced:!d},{for:function(t){var e=String(t);if(v(at,e))return at[e];var symbol=Z(e);return at[e]=symbol,ft[symbol]=e,symbol},keyFor:function(t){if(!gt(t))throw TypeError(t+" is not a symbol");if(v(ft,t))return ft[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!d,sham:!l},{create:function(t,e){return void 0===e?S(t):vt(S(t),e)},defineProperty:ht,defineProperties:vt,getOwnPropertyDescriptor:mt}),r({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:jt,getOwnPropertySymbols:Rt}),r({target:"Object",stat:!0,forced:h((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(R(t))}}),tt)&&r({target:"JSON",stat:!0,forced:!d||h((function(){var symbol=Z();return"[null]"!=tt([symbol])||"{}"!=tt({a:symbol})||"{}"!=tt(Object(symbol))}))},{stringify:function(t,e,n){for(var r,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(r=e,(m(e)||void 0!==t)&&!gt(t))return O(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!gt(e))return e}),o[1]=e,tt.apply(null,o)}});Z.prototype[G]||N(Z.prototype,G,Z.prototype.valueOf),B(Z,z),H[W]=!0},238:function(t,e,n){"use strict";var r=n(4),o=n(15),c=n(6),f=n(19),l=n(13),d=n(18).f,y=n(164),h=c.Symbol;if(o&&"function"==typeof h&&(!("description"in h.prototype)||void 0!==h().description)){var v={},O=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof O?new h(t):void 0===t?h():h(t);return""===t&&(v[e]=!0),e};y(O,h);var m=O.prototype=h.prototype;m.constructor=O;var j=m.toString,R="Symbol(test)"==String(h("test")),w=/^Symbol\((.*)\)[^)]+$/;d(m,"description",{configurable:!0,get:function(){var symbol=l(this)?this.valueOf():this,t=j.call(symbol);if(f(v,symbol))return"";var desc=R?t.slice(7,-1):t.replace(w,"$1");return""===desc?void 0:desc}}),r({global:!0,forced:!0},{Symbol:O})}},239:function(t,e,n){var r=n(7);e.f=r},240:function(t,e,n){var r=n(23),o=n(101).f,c={}.toString,f="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return f&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return f.slice()}}(t):o(r(t))}},241:function(t,e,n){var path=n(165),r=n(19),o=n(239),c=n(18).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});r(e,t)||c(e,t,{value:o.f(t)})}},242:function(t,e,n){"use strict";n.r(e);n(237),n(238),n(162);var r=n(97),o=n(100),c=n(98),f=n(99),l=n(67),d=n(12),y=n(68);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).title="",t.description="",t.slug="",t.body="",t.img="",t.alt="",t.createdAt=new Date,t.references=[],t}return Object(o.a)(n,[{key:"createdAtFormatted",get:function(){var t;return null===(t=new Date(this.createdAt))||void 0===t?void 0:t.toLocaleDateString("en",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}]),n}(y.Vue),m=O=v([y.Component],O),j=n(11),component=Object(j.a)(m,undefined,undefined,!1,null,null,null);e.default=component.exports},243:function(t,e,n){var content=n(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5e5117c4",content,!0,{sourceMap:!1})},245:function(t,e,n){"use strict";n.r(e);n(162);var r=n(97),o=n(100),c=n(98),f=n(99),l=n(67),d=n(12),y=n(68);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var v,O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=v=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,null,[{key:"getBodyAsHtml",value:function(content){var t,e=new(y.Vue.extend(v))({propsData:{content:content}});return e.$mount(),null===(t=e.$el)||void 0===t?void 0:t.outerHTML}}]),n}(y.Vue);O([Object(y.Prop)()],m.prototype,"content",void 0);var j=m=v=O([y.Component],m),R=n(11),component=Object(R.a)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-content",{attrs:{document:t.content}})}),[],!1,null,null,null);e.default=component.exports},248:function(t,e,n){var content=n(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("6f824354",content,!0,{sourceMap:!1})},249:function(t,e,n){"use strict";n(243)},250:function(t,e,n){var r=n(25)(!1);r.push([t.i,".blog-entry-header .blog-entry-img-wrapper{text-align:center}.blog-entry-header .blog-entry-img-wrapper img{max-height:200px}",""]),t.exports=r},251:function(t,e,n){"use strict";n.r(e);n(162);var r=n(97),o=n(100),c=n(98),f=n(99),l=n(67),d=n(12),y=n(68);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"imgUrl",get:function(){return"/img/blog/"+this.img}}]),n}(n(242).default),m=O=v([y.Component],O),j=(n(249),n(11)),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"blog-entry"},[n("header",{staticClass:"blog-entry-header"},[n("p",{staticClass:"blog-entry-img-wrapper"},[n("img",{attrs:{src:t.imgUrl,alt:t.alt}})]),t._v(" "),n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"created"},[n("time",[t._v(t._s(t.createdAtFormatted))])]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.description)+"\n    ")])]),t._v(" "),n("section",{staticClass:"blog-entry-body",domProps:{innerHTML:t._s(t.body)}}),t._v(" "),t.references?n("section",{staticClass:"blog-references"},[n("h2",[t._v("References")]),t._v(" "),n("ul",t._l(t.references,(function(e){return n("li",{key:e},[n("a",{attrs:{href:e,target:"_blank"}},[t._v("\n          "+t._s(e)+"\n        ")])])})),0)]):t._e()])}),[],!1,null,null,null);e.default=component.exports},252:function(t,e,n){"use strict";n.r(e);n(237),n(238),n(162);var r=n(97),o=n(100),c=n(98),f=n(99),l=n(67),d=n(12),y=n(68),h=n(245);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"created",value:function(){this.content&&(this.title=this.content.title,this.slug=this.content.slug,this.description=this.content.description,this.createdAt=this.content.createdAt,this.img=this.content.img,this.alt=this.content.alt,this.references=this.content.references,this.body=h.default.getBodyAsHtml(this.content))}}]),n}(n(251).default);O([Object(y.Prop)()],m.prototype,"content",void 0);var j=m=O([y.Component],m),R=n(11),component=Object(R.a)(j,undefined,undefined,!1,null,null,null);e.default=component.exports},257:function(t,e,n){"use strict";n(248)},258:function(t,e,n){var r=n(25)(!1);r.push([t.i,".blog-entry-list{margin-top:1em;text-align:center}.blog-entry-list .blog-entries{margin:0;padding:0}.blog-entry-list .blog-entries li{clear:left;list-style-type:none;margin-bottom:3em}.blog-entry-list .blog-entries li img{width:300px;margin:5px}",""]),t.exports=r},260:function(t,e,n){"use strict";n.r(e);n(162);var r=n(97),o=n(98),c=n(99),f=n(67),l=n(12),d=n(68);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},v=function(t){Object(o.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).blogEntryList=[],t}return n}(d.Vue),O=v=h([d.Component],v),m=(n(257),n(11)),component=Object(m.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.blogEntryList?n("section",{staticClass:"blog-entry-list"},[t.blogEntryList?n("ol",{staticClass:"blog blog-entries"},t._l(t.blogEntryList,(function(e){return n("li",{key:e.slug},[n("NuxtLink",{attrs:{to:"blog/"+e.slug}},[n("h3",[t._v(t._s(e.title))])]),t._v(" "),n("p",{staticClass:"created"},[n("time",[t._v(t._s(e.createdAtFormatted))])]),t._v(" "),n("NuxtLink",{attrs:{to:"blog/"+e.slug}},[n("p",[n("img",{attrs:{src:e.imgUrl,alt:e.alt}})])]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n        "+t._s(e.description)+"\n      ")])],1)})),0):t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports},266:function(t,e,n){"use strict";n.r(e);n(41),n(162),n(52);var r=n(97),o=n(100),c=n(98),f=n(99),l=n(67),d=n(12),y=n(68),h=n(260),v=n(252);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(c.a)(n,t);var e=O(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"created",value:function(){var t,e=this;this.blogEntryList=[],null===(t=this.contentList)||void 0===t||t.forEach((function(content){e.blogEntryList.push(new v.default({propsData:{content:content}}))})),this.blogEntryList=this.blogEntryList.sort((function(t,e){return new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()}))}}]),n}(h.default);m([Object(y.Prop)()],j.prototype,"contentList",void 0);var R=j=m([y.Component],j),w=n(11),component=Object(w.a)(R,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);
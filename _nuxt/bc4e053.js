(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5,6],{247:function(t,e,n){"use strict";n.r(e);n(244),n(245),n(239),n(33);var r=n(6),c=n(110),o=n(111),l=n(242),f=n(243),d=n(240),h=n(18),y=n(241);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(l.a)(f,t);var e,n=v(f);function f(){var t;return Object(c.a)(this,f),(t=n.apply(this,arguments)).globalContent=null,t.pageTitle="",t.pageDescription="",t}return Object(o.a)(f,[{key:"created",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content("global").fetch();case 2:this.globalContent=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"head",value:function(){var t,e;return{title:(this.pageTitle?this.pageTitle+" — ":"")+(null===(t=this.globalContent)||void 0===t?void 0:t.title),meta:[{hid:"description",name:"description",content:this.pageDescription?this.pageDescription:null===(e=this.globalContent)||void 0===e?void 0:e.description}]}}}]),f}(y.Vue),R=O=j([y.Component],O),m=n(8),component=Object(m.a)(R,void 0,void 0,!1,null,null,null);e.default=component.exports},248:function(t,e,n){var content=n(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5e5117c4",content,!0,{sourceMap:!1})},249:function(t,e,n){"use strict";n(239);var r=n(110),c=n(111),o=n(242),l=n(243),f=n(240),d=n(18),h=n(241);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v,j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=v=function(t){Object(o.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,null,[{key:"getBodyAsHtml",value:function(content){var t,e=new(h.Vue.extend(v))({propsData:{content:content}});return e.$mount(),null===(t=e.$el)||void 0===t?void 0:t.outerHTML}}]),n}(h.Vue);j([Object(h.Prop)()],O.prototype,"content",void 0);var R=O=v=j([h.Component],O),m=n(8),component=Object(m.a)(R,(function(){var t=this.$createElement;return(this._self._c||t)("nuxt-content",{attrs:{document:this.content}})}),[],!1,null,null,null);e.a=component.exports},250:function(t,e,n){"use strict";n(244),n(245),n(239);var r=n(110),c=n(111),o=n(242),l=n(243),f=n(240),d=n(18),h=n(241);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(o.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).title="",t.description="",t.slug="",t.body="",t.img="",t.alt="",t.createdAt=new Date,t}return Object(c.a)(n,[{key:"createdAtFormatted",get:function(){var t;return null===(t=new Date(this.createdAt))||void 0===t?void 0:t.toLocaleDateString("en",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}]),n}(h.Vue),O=j=v([h.Component],j),R=n(8),component=Object(R.a)(O,void 0,void 0,!1,null,null,null);e.a=component.exports},253:function(t,e,n){"use strict";n(248)},254:function(t,e,n){(e=n(25)(!1)).push([t.i,".blog-entry-header .blog-entry-img-wrapper{text-align:center}.blog-entry-header .blog-entry-img-wrapper img{max-height:200px}",""]),t.exports=e},255:function(t,e,n){"use strict";n.r(e);n(244),n(245),n(239);var r=n(110),c=n(111),o=n(242),l=n(243),f=n(240),d=n(18),h=n(241),y=n(249);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(o.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"imgUrl",get:function(){return"/img/blog/"+this.img}}]),n}(n(250).a),R=O=j([h.Component],O),m=(n(253),n(8));function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var P=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},x=function(t){Object(o.a)(n,t);var e=D(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"created",value:function(){this.content&&(this.title=this.content.title,this.slug=this.content.slug,this.description=this.content.description,this.createdAt=this.content.createdAt,this.img=this.content.img,this.alt=this.content.alt,this.body=y.a.getBodyAsHtml(this.content))}}]),n}(Object(m.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"blog-entry"},[n("header",{staticClass:"blog-entry-header"},[n("p",{staticClass:"blog-entry-img-wrapper"},[n("img",{attrs:{src:t.imgUrl,alt:t.alt}})]),t._v(" "),n("h1",[t._v(t._s(t.title))]),t._v(" "),n("time",[t._v(t._s(t.createdAtFormatted))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.description)+"\n    ")])]),t._v(" "),n("section",{staticClass:"blog-entry-body",domProps:{innerHTML:t._s(t.body)}})])}),[],!1,null,null,null).exports);P([Object(h.Prop)()],x.prototype,"content",void 0);var w=x=P([h.Component],x),_=Object(m.a)(w,void 0,void 0,!1,null,null,null);e.default=_.exports},256:function(t,e,n){"use strict";n.r(e);n(244),n(245),n(239),n(33);var r=n(6),c=n(110),o=n(111),l=n(242),f=n(243),d=n(240),h=n(18),y=n(241);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(l.a)(f,t);var e,n=v(f);function f(){var t;return Object(c.a)(this,f),(t=n.apply(this,arguments)).PATH="",t.content=null,t}return Object(o.a)(f,[{key:"mounted",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content(this.PATH,this.$route.params.slug).fetch();case 2:this.content=t.sent,this.pageTitle=this.content.title,this.pageDescription=this.content.description;case 5:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),f}(n(247).default),R=O=j([y.Component],O),m=n(8),component=Object(m.a)(R,void 0,void 0,!1,null,null,null);e.default=component.exports},300:function(t,e,n){"use strict";n.r(e);n(239);var r=n(110),c=n(242),o=n(243),l=n(240),f=n(18),d=n(241);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},v=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).PATH="blog",t}return n}(n(256).default),j=v=y([d.Component],v),O=n(8),component=Object(O.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return this.content?e("BlogEntry",{attrs:{content:this.content}}):this._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogEntry:n(255).default})}}]);
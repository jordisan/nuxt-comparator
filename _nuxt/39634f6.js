(window.webpackJsonp=window.webpackJsonp||[]).push([[17,14],{257:function(t,e,n){"use strict";n.r(e);n(185),n(11);var r=n(7),c=n(69),o=n(70),l=n(123),f=n(124),h=n(88),d=n(15),v=(n(44),n(41),n(31),n(42),n(89));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(l.a)(d,t);var e,n,f,h=y(d);function d(){var t;return Object(c.a)(this,d),(t=h.apply(this,arguments)).globalContent=null,t.pageTitle="",t.pageDescription="",t}return Object(o.a)(d,[{key:"getGlobalData",value:(f=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.globalContent){t.next=4;break}return t.next=3,this.$content("global").fetch();case 3:this.globalContent=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)})},{key:"fetch",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"created",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"head",value:function(){var t,e;return{title:(this.pageTitle?this.pageTitle+" — ":"")+(null===(t=this.globalContent)||void 0===t?void 0:t.title),meta:[{hid:"description",name:"description",content:this.pageDescription?this.pageDescription:null===(e=this.globalContent)||void 0===e?void 0:e.description}]}}}]),d}(v.Vue),O=j=m([v.Component],j),R=n(13),component=Object(R.a)(O,undefined,undefined,!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n.r(e);n(185),n(11);var r=n(7),c=n(69),o=n(70),l=n(123),f=n(124),h=n(88),d=n(15),v=(n(44),n(41),n(89));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(l.a)(f,t);var e,n=y(f);function f(){var t;return Object(c.a)(this,f),(t=n.apply(this,arguments)).pageTitle="Comparison",t}return Object(o.a)(f,[{key:"asyncData",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,t.next=3,n("antagonists",r.slug).fetch();case 3:return c=t.sent,t.abrupt("return",{antagonistContentList:c});case 5:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}]),f}(n(257).default),O=j=m([v.Component],j),R=n(13),component=Object(R.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"antagonists"},[t._m(0),t._v(" "),n("AntagonistComparison",{attrs:{"content-list":t.antagonistContentList}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"title-wrapper"},[n("h1",{staticClass:"title"},[t._v("\n      Comparison\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AntagonistComparison:n(303).default})}}]);
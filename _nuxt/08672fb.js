(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{246:function(t,e,n){"use strict";n.r(e);n(244),n(245),n(238),n(33);var r=n(6),c=n(110),o=n(111),l=n(241),f=n(242),h=n(239),d=n(18),v=n(240);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(l.a)(f,t);var e,n=y(f);function f(){var t;return Object(c.a)(this,f),(t=n.apply(this,arguments)).globalContent=null,t.pageTitle="",t.pageDescription="",t}return Object(o.a)(f,[{key:"created",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content("global").fetch();case 2:this.globalContent=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"head",value:function(){var t,e;return{title:(this.pageTitle?this.pageTitle+" — ":"")+(null===(t=this.globalContent)||void 0===t?void 0:t.title),meta:[{hid:"description",name:"description",content:this.pageDescription?this.pageDescription:null===(e=this.globalContent)||void 0===e?void 0:e.description}]}}}]),f}(v.Vue),R=O=j([v.Component],O),m=n(11),component=Object(m.a)(R,void 0,void 0,!1,null,null,null);e.default=component.exports},252:function(t,e,n){"use strict";n.r(e);n(244),n(245),n(238),n(33);var r=n(6),c=n(110),o=n(111),l=n(241),f=n(242),h=n(239),d=n(18),v=n(240);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(l.a)(f,t);var e,n=y(f);function f(){var t;return Object(c.a)(this,f),(t=n.apply(this,arguments)).PATH="",t.content=null,t}return Object(o.a)(f,[{key:"mounted",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content(this.PATH,this.$route.params.slug).fetch();case 2:this.content=t.sent,this.pageTitle=this.content.title,this.pageDescription=this.content.description;case 5:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),f}(n(246).default),R=O=j([v.Component],O),m=n(11),component=Object(m.a)(R,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);
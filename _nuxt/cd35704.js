(window.webpackJsonp=window.webpackJsonp||[]).push([[20,9,10],{248:function(t,e,n){"use strict";n.r(e);n(243),n(244),n(171),n(33);var r=n(7),o=n(52),c=n(53),l=n(111),f=n(112),d=n(74),h=n(10),y=n(75);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(l.a)(h,t);var e,n,f,d=v(h);function h(){var t;return Object(o.a)(this,h),(t=d.apply(this,arguments)).globalContent=null,t.pageTitle="",t.pageDescription="",t}return Object(c.a)(h,[{key:"getGlobalData",value:(f=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.globalContent){t.next=4;break}return t.next=3,this.$content("global").fetch();case 3:this.globalContent=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)})},{key:"fetch",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"created",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"head",value:function(){var t,e;return{title:(this.pageTitle?this.pageTitle+" — ":"")+(null===(t=this.globalContent)||void 0===t?void 0:t.title),meta:[{hid:"description",name:"description",content:this.pageDescription?this.pageDescription:null===(e=this.globalContent)||void 0===e?void 0:e.description}]}}}]),h}(y.Vue),O=j=m([y.Component],j),R=n(11),component=Object(R.a)(O,undefined,undefined,!1,null,null,null);e.default=component.exports},249:function(t,e,n){var content=n(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("6f824354",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n(249)},253:function(t,e,n){var r=n(30)(!1);r.push([t.i,".blog-entry-list{margin-top:1em;text-align:center}.blog-entry-list .blog-entries{margin:0;padding:0}.blog-entry-list .blog-entries li{clear:left;list-style-type:none;margin-bottom:3em}.blog-entry-list .blog-entries li img{width:300px;margin:5px}",""]),t.exports=r},254:function(t,e,n){"use strict";n.r(e);n(171);var r=n(52),o=n(111),c=n(112),l=n(74),f=n(10),d=n(75);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},v=function(t){Object(o.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).blogEntryList=[],t}return n}(d.Vue),m=v=y([d.Component],v),j=(n(252),n(11)),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.blogEntryList?n("section",{staticClass:"blog-entry-list"},[t.blogEntryList?n("ol",{staticClass:"blog blog-entries"},t._l(t.blogEntryList,(function(e){return n("li",{key:e.slug},[n("NuxtLink",{attrs:{to:"blog/"+e.slug}},[n("h3",[t._v(t._s(e.title))])]),t._v(" "),n("p",{staticClass:"created"},[n("time",[t._v(t._s(e.createdAtFormatted))])]),t._v(" "),n("NuxtLink",{attrs:{to:"blog/"+e.slug}},[n("p",[n("img",{attrs:{src:e.imgUrl,alt:e.alt}})])]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n        "+t._s(e.description)+"\n      ")])],1)})),0):t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n.r(e);n(171),n(44);var r=n(52),o=n(53),c=n(111),l=n(112),f=n(74),d=n(10),h=n(75),y=n(254),v=n(266);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"created",value:function(){var t,e=this;this.blogEntryList=[],null===(t=this.contentList)||void 0===t||t.forEach((function(content){e.blogEntryList.push(new v.default({propsData:{content:content}}))})),this.blogEntryList=this.blogEntryList.sort((function(t,e){return new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()}))}}]),n}(y.default);j([Object(h.Prop)()],O.prototype,"contentList",void 0);var R=O=j([h.Component],O),x=n(11),component=Object(x.a)(R,undefined,undefined,!1,null,null,null);e.default=component.exports},293:function(t,e,n){var content=n(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("28f1127f",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n(293)},298:function(t,e,n){var r=n(30)(!1);r.push([t.i,".home .logo{width:200px;margin-top:3rem}@media(max-width:768px){.home .logo{width:100px}}.home .title-wrapper{text-align:center}.home .title-wrapper .title{margin-top:1rem;margin-bottom:1rem;display:block;font-weight:300;font-size:70px;color:#35495e;letter-spacing:1px}@media(max-width:768px){.home .title-wrapper .title{font-size:40px}}.home .title-wrapper .description{font-size:22px}.home .blog-title{text-align:center;margin-top:3rem}",""]),t.exports=r},317:function(t,e,n){"use strict";n.r(e);n(171),n(33);var r=n(7),o=n(52),c=n(53),l=n(111),f=n(112),d=n(74),h=n(10),y=n(75);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(l.a)(f,t);var e,n=v(f);function f(){return Object(o.a)(this,f),n.apply(this,arguments)}return Object(c.a)(f,[{key:"asyncData",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,t.next=3,n("antagonists",r.slug).fetch();case 3:return o=t.sent,t.next=6,n("blog",r.slug).fetch();case 6:return c=t.sent,t.abrupt("return",{antagonistContentList:o,blogContentList:c});case 8:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}]),f}(n(248).default),O=j=m([Object(y.Component)({layout:"home"})],j),R=(n(297),n(11)),component=Object(R.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home"},[n("header",{staticClass:"title-wrapper"},[n("Logo"),t._v(" "),t.globalContent?n("h1",{staticClass:"title"},[t._v("\n      "+t._s(t.globalContent.title)+"\n    ")]):t._e(),t._v(" "),t.globalContent?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.globalContent.description)+"\n      "),n("NuxtLink",{attrs:{to:"/about"}},[t._v("\n        More …\n      ")])],1):t._e()],1),t._v(" "),n("AntagonistComparison",{attrs:{"content-list":t.antagonistContentList}}),t._v(" "),n("NuxtLink",{attrs:{to:"/blog"}},[n("h2",{staticClass:"blog-title"},[t._v("\n      Blog\n    ")])]),t._v(" "),n("BlogList",{attrs:{"content-list":t.blogContentList}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(183).default,BlogList:n(265).default})}}]);
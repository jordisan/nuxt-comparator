(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{253:function(t,e,n){var content=n(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("6f824354",content,!0,{sourceMap:!1})},262:function(t,e,n){"use strict";n(253)},263:function(t,e,n){var r=n(29)(!1);r.push([t.i,".blog-entry-list{margin-top:1em;text-align:center}.blog-entry-list .blog-entries{margin:0;padding:0}.blog-entry-list .blog-entries li{clear:left;list-style-type:none;margin-bottom:3em}.blog-entry-list .blog-entries li img{width:300px;margin:5px}",""]),t.exports=r},265:function(t,e,n){"use strict";n.r(e);n(172);var r=n(52),o=n(112),l=n(113),c=n(74),f=n(10),y=n(75);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},m=function(t){Object(o.a)(n,t);var e=d(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).blogEntryList=[],t}return n}(y.Vue),h=m=v([y.Component],m),_=(n(262),n(11)),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.blogEntryList?n("section",{staticClass:"blog-entry-list"},[t.blogEntryList?n("ol",{staticClass:"blog blog-entries"},t._l(t.blogEntryList,(function(e){return n("li",{key:e.slug},[n("NuxtLink",{attrs:{to:"blog/"+e.slug}},[n("h3",[t._v(t._s(e.title))])]),t._v(" "),n("p",{staticClass:"created"},[n("time",[t._v(t._s(e.createdAtFormatted))])]),t._v(" "),n("NuxtLink",{attrs:{to:"blog/"+e.slug}},[n("p",[n("img",{attrs:{src:e.imgUrl,alt:e.alt}})])]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n        "+t._s(e.description)+"\n      ")])],1)})),0):t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{190:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return s});const i=t=>{const e=["under-maintenance","major-outage","partial-outage","degraded-performance","operational"];let n;t&&(n=e.reduce((e,n)=>(e[n]=t(`statuses.${n}`),e),{}));return{keys:e,i18nKeys:n,icons:{"under-maintenance":"clock-solid","degraded-performance":"exclamation-circle-solid","partial-outage":"minus-circle-solid","major-outage":"times-circle-solid",operational:"check-circle-solid"}}},s=(t,e)=>{const n=i(t);return{title:n.i18nKeys[e],icon:n.icons[e]}}},197:function(t,e,n){"use strict";var i=n(75);n.n(i).a.register({"fortawesome/clock-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"/>'}})},198:function(t,e,n){"use strict";var i=n(75);n.n(i).a.register({"fortawesome/exclamation-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/>'}})},199:function(t,e,n){"use strict";var i=n(75);n.n(i).a.register({"fortawesome/minus-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"/>'}})},200:function(t,e,n){"use strict";var i=n(75);n.n(i).a.register({"fortawesome/times-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/>'}})},201:function(t,e,n){"use strict";var i=n(75);n.n(i).a.register({"fortawesome/check-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>'}})},202:function(t,e,n){"use strict";var i={props:{date:{type:String,required:!0},format:{default:"short",validator:function(t){return-1!==["short","long","month"].indexOf(t)}}},computed:{label:function(){var t=this.$t.bind(this);return this.$statusfy.dayjs(this.date).locale(this.$i18n.locale).format(t("dates.formats.".concat(this.format)))}}},s=n(4),r=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("time",{attrs:{datetime:this.date}},[this._v("\n  "+this._s(this.label)+"\n")])},[],!1,null,null,null);r.options.__file="NiceDate.vue";e.a=r.exports},203:function(t,e){function n(t,e,n,i,s,r,a){try{var o=t[r](a),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(i,s)}t.exports=function(t){return function(){var e=this,i=arguments;return new Promise(function(s,r){var a=t.apply(e,i);function o(t){n(a,s,r,o,c,"next",t)}function c(t){n(a,s,r,o,c,"throw",t)}o(void 0)})}}},204:function(t,e,n){"use strict";n.d(e,"a",function(){return i});class i{constructor(t,e){this.axios=t,this.lang=e,this.isStatic=!0,this.basePath="/api/v0"}buildUrl(t,e={}){const n=Object.keys(e);let i,s=`${this.basePath}${t}`;if(this.isStatic)s="/static/content"+s,s+=(i=n.map(t=>`${t}-${e[t]}`).join("."))?`.${i}`:"",s+=`.${this.lang}.json`;else{let t=n.map(t=>`${t}=${e[t]}`).join("&");s+=t?`?${t}`:""}return s}async getSystems(){return this.axios.$get(this.buildUrl("/systems"))}async getIncidents(t=1){return this.axios.$get(this.buildUrl("/incidents",{page:t}))}async getIncident(t){return this.axios.$get(this.buildUrl(`/incidents/${t}`))}async getIncidentsHistory(t=1){return this.axios.$get(this.buildUrl("/incidents/history",{page:t}))}async getIncidentsTimeline(){return this.axios.$get(this.buildUrl("/incidents/timeline"))}}},211:function(t,e,n){var i=n(212);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){i(t,e,n[e])})}return t}},212:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},213:function(t,e,n){"use strict";n(207);var i=n(211),s=n.n(i),r=(n(231),n(190)),a=(n(197),n(198),n(199),n(200),n(201),n(75));n.n(a).a.register({"fortawesome/external-link-alt-solid":{width:16,height:16,viewBox:"0 0 576 512",data:'<path pid="0" _fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/>'}});var o={components:{NiceDate:n(202).a},props:{incident:{type:Object,required:!0},summary:{type:Boolean,default:!1},level:{type:Number,default:4,validator:function(t){return-1!==[0,3,4].indexOf(t)}}},data:function(){return{content:""}},computed:{status:function(){var t=this.$t.bind(this);return Object(r.a)(t,this.incident.severity)},resolved:function(){var t=this.$t.bind(this),e=this.incident.resolved?"operational":this.incident.severity;return s()({value:this.incident.resolved},Object(r.a)(t,e))}},mounted:function(){var t=this,e=this.$t.bind(this);if(this.$refs.content){var n=this.$refs.content.querySelectorAll(".update-block"),i=this.$refs.content.querySelectorAll("a.external"),s=this.$refs["external-link-icon"].$el;n.forEach(function(n,i){var s=n.querySelectorAll(".update-block-date")[0],r=t.$statusfy.dayjs(s.innerHTML);s.innerHTML=r.locale(t.$i18n.locale).format(e("dates.formats.long"))}),i.forEach(function(t,e){t.appendChild(s)})}}},c=n(4),l=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"incident",class:t.incident.severity+" "+(t.resolved.value?"resolved":"unresolved")},[n("div",{staticClass:"incident-header",class:"level-"+t.level},[n("div",{staticClass:"incident-title"},[n("span",{staticClass:"badge"},[t._v("\n        "+t._s(t.resolved.value?t.$t("incidents.resolved"):t.$t("incidents.unresolved"))+"\n      ")]),t._v(" "),t.level>0?n("nuxt-link",{attrs:{to:t.localePath({name:"incidents-id",params:{id:t.incident.id}})}},[n("h"+t.level,{tag:"component"},[t._v("\n          "+t._s(t.incident.title)+"\n        ")])],1):t._e()],1),t._v(" "),n("div",{staticClass:"incident-systems"},t._l(t.incident.affectedsystems,function(e){return n("span",{key:e,staticClass:"badge"},[t._v("\n        "+t._s(t.$t("systems.items."+e+".title"))+"\n      ")])}))]),t._v(" "),n("div",{staticClass:"incident-subtitle"},[n("div",{staticClass:"status"},[n("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/"+t.status.icon}}),t._v("\n      "+t._s(t.status.title)+"\n    ")],1),t._v(" "),n("div",[n("nice-date",{attrs:{date:t.incident.date,format:"long"}})],1)]),t._v(" "),n("div",{staticClass:"incident-body"},[t.summary?n("div",[t.incident.description?n("div",[t._v(t._s(t.incident.description))]):t._e()]):n("div",{ref:"content",staticClass:"markdown",domProps:{innerHTML:t._s(t.incident.content)}})]),t._v(" "),n("div",{staticClass:"hidden"},[n("svgicon",{ref:"external-link-icon",staticClass:"svg-inline--fa fa-w-12 ml-1",attrs:{name:"fortawesome/external-link-alt-solid"}})],1)])},[],!1,null,null,null);l.options.__file="Incident.vue";e.a=l.exports},245:function(t,e,n){n(246)("asyncIterator")},246:function(t,e,n){var i=n(189),s=n(215),r=n(216),a=n(247),o=n(192).f;t.exports=function(t){var e=s.Symbol||(s.Symbol=r?{}:i.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:a.f(t)})}},247:function(t,e,n){e.f=n(191)},248:function(t,e,n){"use strict";var i=n(189),s=n(195),r=n(194),a=n(219),o=n(210),c=n(273).KEY,l=n(205),u=n(222),f=n(230),d=n(208),v=n(191),h=n(247),p=n(246),m=n(274),y=n(250),b=n(209),g=n(193),_=n(206),w=n(217),x=n(218),C=n(227),S=n(275),$=n(232),O=n(192),j=n(220),k=$.f,P=O.f,E=S.f,z=i.Symbol,M=i.JSON,A=M&&M.stringify,I=v("_hidden"),N=v("toPrimitive"),D={}.propertyIsEnumerable,q=u("symbol-registry"),L=u("symbols"),T=u("op-symbols"),F=Object.prototype,B="function"==typeof z,H=i.QObject,K=!H||!H.prototype||!H.prototype.findChild,J=r&&l(function(){return 7!=C(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var i=k(F,e);i&&delete F[e],P(t,e,n),i&&t!==F&&P(F,e,i)}:P,U=function(t){var e=L[t]=C(z.prototype);return e._k=t,e},V=B&&"symbol"==typeof z.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof z},W=function(t,e,n){return t===F&&W(T,e,n),b(t),e=w(e,!0),b(n),s(L,e)?(n.enumerable?(s(t,I)&&t[I][e]&&(t[I][e]=!1),n=C(n,{enumerable:x(0,!1)})):(s(t,I)||P(t,I,x(1,{})),t[I][e]=!0),J(t,e,n)):P(t,e,n)},R=function(t,e){b(t);for(var n,i=m(e=_(e)),s=0,r=i.length;r>s;)W(t,n=i[s++],e[n]);return t},Y=function(t){var e=D.call(this,t=w(t,!0));return!(this===F&&s(L,t)&&!s(T,t))&&(!(e||!s(this,t)||!s(L,t)||s(this,I)&&this[I][t])||e)},G=function(t,e){if(t=_(t),e=w(e,!0),t!==F||!s(L,e)||s(T,e)){var n=k(t,e);return!n||!s(L,e)||s(t,I)&&t[I][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=E(_(t)),i=[],r=0;n.length>r;)s(L,e=n[r++])||e==I||e==c||i.push(e);return i},X=function(t){for(var e,n=t===F,i=E(n?T:_(t)),r=[],a=0;i.length>a;)!s(L,e=i[a++])||n&&!s(F,e)||r.push(L[e]);return r};B||(o((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===F&&e.call(T,n),s(this,I)&&s(this[I],t)&&(this[I][t]=!1),J(this,t,x(1,n))};return r&&K&&J(F,t,{configurable:!0,set:e}),U(t)}).prototype,"toString",function(){return this._k}),$.f=G,O.f=W,n(234).f=S.f=Q,n(233).f=Y,n(249).f=X,r&&!n(216)&&o(F,"propertyIsEnumerable",Y,!0),h.f=function(t){return U(v(t))}),a(a.G+a.W+a.F*!B,{Symbol:z});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)v(Z[tt++]);for(var et=j(v.store),nt=0;et.length>nt;)p(et[nt++]);a(a.S+a.F*!B,"Symbol",{for:function(t){return s(q,t+="")?q[t]:q[t]=z(t)},keyFor:function(t){if(!V(t))throw TypeError(t+" is not a symbol!");for(var e in q)if(q[e]===t)return e},useSetter:function(){K=!0},useSimple:function(){K=!1}}),a(a.S+a.F*!B,"Object",{create:function(t,e){return void 0===e?C(t):R(C(t),e)},defineProperty:W,defineProperties:R,getOwnPropertyDescriptor:G,getOwnPropertyNames:Q,getOwnPropertySymbols:X}),M&&a(a.S+a.F*(!B||l(function(){var t=z();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){for(var e,n,i=[t],s=1;arguments.length>s;)i.push(arguments[s++]);if(n=e=i[1],(g(e)||void 0!==t)&&!V(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!V(e))return e}),i[1]=e,A.apply(M,i)}}),z.prototype[N]||n(196)(z.prototype,N,z.prototype.valueOf),f(z,"Symbol"),f(Math,"Math",!0),f(i.JSON,"JSON",!0)},249:function(t,e){e.f=Object.getOwnPropertySymbols},250:function(t,e,n){var i=n(224);t.exports=Array.isArray||function(t){return"Array"==i(t)}},273:function(t,e,n){var i=n(208)("meta"),s=n(193),r=n(195),a=n(192).f,o=0,c=Object.isExtensible||function(){return!0},l=!n(205)(function(){return c(Object.preventExtensions({}))}),u=function(t){a(t,i,{value:{i:"O"+ ++o,w:{}}})},f=t.exports={KEY:i,NEED:!1,fastKey:function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,i)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[i].i},getWeak:function(t,e){if(!r(t,i)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[i].w},onFreeze:function(t){return l&&f.NEED&&c(t)&&!r(t,i)&&u(t),t}}},274:function(t,e,n){var i=n(220),s=n(249),r=n(233);t.exports=function(t){var e=i(t),n=s.f;if(n)for(var a,o=n(t),c=r.f,l=0;o.length>l;)c.call(t,a=o[l++])&&e.push(a);return e}},275:function(t,e,n){var i=n(206),s=n(234).f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==r.call(t)?function(t){try{return s(t)}catch(t){return a.slice()}}(t):s(i(t))}},276:function(t,e,n){"use strict";var i=n(219),s=n(277)(5),r=!0;"find"in[]&&Array(1).find(function(){r=!1}),i(i.P+i.F*r,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n(237)("find")},277:function(t,e,n){var i=n(226),s=n(240),r=n(244),a=n(242),o=n(278);t.exports=function(t,e){var n=1==t,c=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f,v=e||o;return function(e,o,h){for(var p,m,y=r(e),b=s(y),g=i(o,h,3),_=a(b.length),w=0,x=n?v(e,_):c?v(e,0):void 0;_>w;w++)if((d||w in b)&&(m=g(p=b[w],w,y),t))if(n)x[w]=m;else if(m)switch(t){case 3:return!0;case 5:return p;case 6:return w;case 2:x.push(p)}else if(u)return!1;return f?-1:l||u?u:x}}},278:function(t,e,n){var i=n(279);t.exports=function(t,e){return new(i(t))(e)}},279:function(t,e,n){var i=n(193),s=n(250),r=n(191)("species");t.exports=function(t){var e;return s(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!s(e.prototype)||(e=void 0),i(e)&&null===(e=e[r])&&(e=void 0)),void 0===e?Array:e}},280:function(t,e,n){var i=n(192).f,s=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in s||n(194)&&i(s,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},282:function(t,e,n){"use strict";n.r(e);n(214);var i=n(203),s=n.n(i),r=n(204),a=(n(245),n(248),n(207),n(190)),o=n(213),c=n(202),l={components:{Incident:o.a,NiceDate:c.a},props:{data:{type:Object,required:!0}},computed:{days:function(){var t=this.data.days.slice(0),e=!0,n=!1,i=void 0;try{for(var s,r=t[Symbol.iterator]();!(e=(s=r.next()).done);e=!0){var a=s.value;a.status=this.getDayStatus(a.incidents)}}catch(t){n=!0,i=t}finally{try{e||null==r.return||r.return()}finally{if(n)throw i}}return t}},methods:{getDayStatus:function(t){var e=this.$t.bind(this),n=Object(a.b)(e),i="operational",s=!0,r=!1,o=void 0;try{for(var c,l=n.keys[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var u=c.value,f=!0,d=!1,v=void 0;try{for(var h,p=t[Symbol.iterator]();!(f=(h=p.next()).done);f=!0){if(h.value.severity===u){i=u;break}}}catch(t){d=!0,v=t}finally{try{f||null==p.return||p.return()}finally{if(d)throw v}}}}catch(t){r=!0,o=t}finally{try{s||null==l.return||l.return()}finally{if(r)throw o}}return{key:i,title:n.i18nKeys[i],icon:n.icons[i]}}}},u=n(4),f=Object(u.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeline-container"},[n("h2",[t._v(t._s(t.$t("incidents.latest-incidents")))]),t._v(" "),n("ul",{staticClass:"timeline"},t._l(t.days,function(e){return n("li",{key:e.date,staticClass:"timeline-incident",class:e.status.key},[n("h3",{staticClass:"timeline-incident-title"},[n("nice-date",{attrs:{date:e.date}})],1),t._v(" "),n("div",{staticClass:"timeline-incident-body"},[0===e.incidents.length?n("div",{staticClass:"message"},[t._v("\n          "+t._s(t.$t("incidents.no-incidents"))+"\n        ")]):t._e(),t._v(" "),t._l(e.incidents,function(t){return n("incident",{key:t.id,attrs:{incident:t}})})],2)])})),t._v(" "),n("div",{staticClass:"text-center"},[n("nuxt-link",{staticClass:"btn mb-4",attrs:{to:t.localePath("history")}},[t._v("\n      "+t._s(t.$t("incidents.incidents-history"))+"\n    ")])],1)])},[],!1,null,null,null);f.options.__file="IncidentsTimeline.vue";var d=f.exports,v=(n(276),n(280),n(75));n.n(v).a.register({"fortawesome/question-circle-regular":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"/>'}});n(197),n(198),n(199),n(200),n(201);var h={components:{"v-popover":function(){return n.e(15).then(n.bind(null,281)).then(function(t){return t.VPopover})}},props:{system:{type:Object,required:!0}},computed:{description:function(){var t=this.$t.bind(this),e=this.$te.bind(this),n="systems.items.".concat(this.system.name,".description");return e(n)?t(n):null},status:function(){var t=this.$t.bind(this);return Object(a.a)(t,this.system.status)}}},p=Object(u.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"system flex flex-row justify-between",class:t.system.status},[n("div",{staticClass:"system-title flex-1"},[t._v("\n    "+t._s(t.$t("systems.items."+t.system.name+".title"))+"\n\n    "),t.description?n("v-popover",{staticClass:"hidden sm:inline",attrs:{trigger:"hover focus",placement:"top","popover-class":"popover"}},[n("span",{staticClass:"system-title-info"},[n("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/question-circle-regular"}})],1),t._v(" "),n("template",{slot:"popover"},[t._v(t._s(t.description))])],2):t._e()],1),t._v(" "),n("div",{staticClass:"system-status flex-1"},[n("span",{staticClass:"hidden sm:inline"},[t._v(t._s(t.status.title))]),t._v(" "),n("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/"+t.status.icon}})],1)])},[],!1,null,null,null);p.options.__file="System.vue";var m={components:{System:p.exports},props:{systems:{type:Array,require:!0,default:function(){return[]}}},computed:{status:function(){var t=this,e=this.$t.bind(this),n=Object(a.b)(e),i="operational",s=!0,r=!1,o=void 0;try{for(var c,l=function(){var e=c.value;if(t.systems.find(function(t){return t.status===e}))return i=e,"break"},u=n.keys[Symbol.iterator]();!(s=(c=u.next()).done);s=!0){if("break"===l())break}}catch(t){r=!0,o=t}finally{try{s||null==u.return||u.return()}finally{if(r)throw o}}return{title:n.i18nKeys[i],icon:n.icons[i],key:i}}}},y=Object(u.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"global-status flex justify-center",class:t.status.key},[n("span",[t._v(t._s(t.status.title))]),t._v(" "),n("span",{staticClass:"global-status-icon"},[n("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/"+t.status.icon}})],1)]),t._v(" "),n("div",{staticClass:"systems-container flex flex-col"},t._l(t.systems,function(t){return n("system",{key:t.name,attrs:{system:t}})}))])},[],!1,null,null,null);y.options.__file="SystemStatus.vue";var b,g={layout:"home",components:{IncidentsTimeline:d,SystemStatus:y.exports},asyncData:(b=s()(regeneratorRuntime.mark(function t(e){var n,i,s,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,i=new r.a(n.$axios,n.i18n.locale),t.next=4,i.getSystems();case 4:return s=t.sent,t.next=7,i.getIncidentsTimeline();case 7:return a=t.sent,t.abrupt("return",{systems:s,timelineData:a});case 9:case"end":return t.stop()}},t,this)})),function(t){return b.apply(this,arguments)}),head:function(){var t=this.$t.bind(this);return{title:t("incidents.current-status"),meta:[{hid:"description",name:"description",content:t("incidents.current-status-description")}]}}},_=Object(u.a)(g,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("system-status",{attrs:{systems:this.systems}}),this._v(" "),e("incidents-timeline",{attrs:{data:this.timelineData}})],1)},[],!1,null,null,null);_.options.__file="index.vue";e.default=_.exports}}]);
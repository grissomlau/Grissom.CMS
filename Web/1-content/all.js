/*! all - v0.1.0 - 2017-01-23*/
// Knockout JavaScript library v3.1.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function() {(function(p){var A=this||(0,eval)("this"),w=A.document,K=A.navigator,t=A.jQuery,C=A.JSON;(function(p){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?p(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],p):p(A.ko={})})(function(z){function G(a,c){return null===a||typeof a in M?a===c:!1}function N(a,c){var d;return function(){d||(d=setTimeout(function(){d=p;a()},c))}}function O(a,c){var d;return function(){clearTimeout(d);d=setTimeout(a,
c)}}function H(b,c,d,e){a.d[b]={init:function(b,h,g,k,l){var n,r;a.ba(function(){var g=a.a.c(h()),k=!d!==!g,s=!r;if(s||c||k!==n)s&&a.ca.fa()&&(r=a.a.lb(a.e.childNodes(b),!0)),k?(s||a.e.U(b,a.a.lb(r)),a.gb(e?e(l,g):l,b)):a.e.da(b),n=k},null,{G:b});return{controlsDescendantBindings:!0}}};a.g.aa[b]=!1;a.e.Q[b]=!0}var a="undefined"!==typeof z?z:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.s=function(a,c,d){a[c]=d};a.version="3.1.0";a.b("version",
a.version);a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}var e={__proto__:[]}instanceof Array,f={},h={};f[K&&/Firefox\/2/i.test(K.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];f.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(f,function(a,b){if(b.length)for(var c=0,
d=b.length;c<d;c++)h[b[c]]=a});var g={propertychange:!0},k=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:p}();return{mb:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],r:function(a,b){for(var c=0,d=a.length;c<d;c++)b(a[c],c)},l:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,d=a.length;c<d;c++)if(a[c]===
b)return c;return-1},hb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d))return a[d];return null},ma:function(b,c){var d=a.a.l(b,c);0<d?b.splice(d,1):0===d&&b.shift()},ib:function(b){b=b||[];for(var c=[],d=0,e=b.length;d<e;d++)0>a.a.l(c,b[d])&&c.push(b[d]);return c},ya:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)c.push(b(a[d],d));return c},la:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c},$:function(a,b){if(b instanceof Array)a.push.apply(a,
b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},Y:function(b,c,d){var e=a.a.l(a.a.Sa(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},na:e,extend:c,ra:d,sa:e?d:c,A:b,Oa:function(a,b){if(!a)return a;var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a));return c},Fa:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},ec:function(b){b=a.a.R(b);for(var c=w.createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.M(b[d]));return c},lb:function(b,c){for(var d=0,e=b.length,g=[];d<
e;d++){var k=b[d].cloneNode(!0);g.push(c?a.M(k):k)}return g},U:function(b,c){a.a.Fa(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},Bb:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],g=e.parentNode,k=0,h=c.length;k<h;k++)g.insertBefore(c[k],e);k=0;for(h=d.length;k<h;k++)a.removeNode(d[k])}},ea:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.shift();if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)if(a.push(c),
c=c.nextSibling,!c)return;a.push(d)}}return a},Db:function(a,b){7>k?a.setAttribute("selected",b):a.selected=b},ta:function(a){return null===a||a===p?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},oc:function(b,c){for(var d=[],e=(b||"").split(c),g=0,k=e.length;g<k;g++){var h=a.a.ta(e[g]);""!==h&&d.push(h)}return d},kc:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},Sb:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===
a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Ea:function(b){return a.a.Sb(b,b.ownerDocument.documentElement)},eb:function(b){return!!a.a.hb(b,a.a.Ea)},B:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},q:function(b,c,d){var e=k&&g[c];if(!e&&t)t(b).bind(c,d);else if(e||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var h=function(a){d.call(b,a)},f="on"+c;b.attachEvent(f,
h);a.a.u.ja(b,function(){b.detachEvent(f,h)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,d,!1)},ha:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.B(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(t&&!d)t(b).trigger(c);else if("function"==typeof w.createEvent)if("function"==typeof b.dispatchEvent)d=w.createEvent(h[c]||"HTMLEvents"),
d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.v(b)?b():b},Sa:function(b){return a.v(b)?b.o():b},ua:function(b,c,d){if(c){var e=/\S+/g,g=b.className.match(e)||[];a.a.r(c.match(e),function(b){a.a.Y(g,b,d)});b.className=g.join(" ")}},Xa:function(b,
c){var d=a.a.c(c);if(null===d||d===p)d="";var e=a.e.firstChild(b);!e||3!=e.nodeType||a.e.nextSibling(e)?a.e.U(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Vb(b)},Cb:function(a,b){a.name=b;if(7>=k)try{a.mergeAttributes(w.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},Vb:function(a){9<=k&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Tb:function(a){if(k){var b=a.style.width;a.style.width=0;a.style.width=b}},ic:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var d=
[],e=b;e<=c;e++)d.push(e);return d},R:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},mc:6===k,nc:7===k,oa:k,ob:function(b,c){for(var d=a.a.R(b.getElementsByTagName("input")).concat(a.a.R(b.getElementsByTagName("textarea"))),e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},g=[],k=d.length-1;0<=k;k--)e(d[k])&&g.push(d[k]);return g},fc:function(b){return"string"==typeof b&&(b=a.a.ta(b))?C&&C.parse?C.parse(b):(new Function("return "+b))():
null},Ya:function(b,c,d){if(!C||!C.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");return C.stringify(a.a.c(b),c,d)},gc:function(c,d,e){e=e||{};var g=e.params||{},k=e.includeFields||this.mb,h=c;if("object"==typeof c&&"form"===a.a.B(c))for(var h=c.action,f=k.length-1;0<=f;f--)for(var u=a.a.ob(c,k[f]),D=u.length-1;0<=D;D--)g[u[D].name]=
u[D].value;d=a.a.c(d);var y=w.createElement("form");y.style.display="none";y.action=h;y.method="post";for(var p in d)c=w.createElement("input"),c.name=p,c.value=a.a.Ya(a.a.c(d[p])),y.appendChild(c);b(g,function(a,b){var c=w.createElement("input");c.name=a;c.value=b;y.appendChild(c)});w.body.appendChild(y);e.submitter?e.submitter(y):y.submit();setTimeout(function(){y.parentNode.removeChild(y)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.r);a.b("utils.arrayFirst",a.a.hb);a.b("utils.arrayFilter",
a.a.la);a.b("utils.arrayGetDistinctValues",a.a.ib);a.b("utils.arrayIndexOf",a.a.l);a.b("utils.arrayMap",a.a.ya);a.b("utils.arrayPushAll",a.a.$);a.b("utils.arrayRemoveItem",a.a.ma);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.mb);a.b("utils.getFormFields",a.a.ob);a.b("utils.peekObservable",a.a.Sa);a.b("utils.postJson",a.a.gc);a.b("utils.parseJson",a.a.fc);a.b("utils.registerEventHandler",a.a.q);a.b("utils.stringifyJson",a.a.Ya);a.b("utils.range",a.a.ic);a.b("utils.toggleDomNodeCssClass",
a.a.ua);a.b("utils.triggerEvent",a.a.ha);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.A);a.b("utils.addOrRemoveItem",a.a.Y);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this,d=Array.prototype.slice.call(arguments);a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){function a(b,h){var g=b[d];if(!g||"null"===g||!e[g]){if(!h)return p;g=b[d]="ko"+c++;e[g]={}}return e[g]}
var c=0,d="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===p?p:e[d]},set:function(c,d,e){if(e!==p||a(c,!1)!==p)a(c,!0)[d]=e},clear:function(a){var b=a[d];return b?(delete e[b],a[d]=null,!0):!1},L:function(){return c++ +d}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.u=new function(){function b(b,c){var e=a.a.f.get(b,d);e===p&&c&&(e=[],a.a.f.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](d);
a.a.f.clear(d);a.a.u.cleanExternalData(d);if(f[d.nodeType])for(e=d.firstChild;d=e;)e=d.nextSibling,8===d.nodeType&&c(d)}var d=a.a.f.L(),e={1:!0,8:!0,9:!0},f={1:!0,9:!0};return{ja:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},Ab:function(c,e){var k=b(c,!1);k&&(a.a.ma(k,e),0==k.length&&a.a.f.set(c,d,p))},M:function(b){if(e[b.nodeType]&&(c(b),f[b.nodeType])){var d=[];a.a.$(d,b.getElementsByTagName("*"));for(var k=0,l=d.length;k<l;k++)c(d[k])}return b},
removeNode:function(b){a.M(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){t&&"function"==typeof t.cleanData&&t.cleanData([a])}}};a.M=a.a.u.M;a.removeNode=a.a.u.removeNode;a.b("cleanNode",a.M);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.u);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.u.ja);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.u.Ab);(function(){a.a.Qa=function(b){var c;if(t)if(t.parseHTML)c=t.parseHTML(b)||[];else{if((c=t.clean([b]))&&
c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&b.parentNode.removeChild(b)}}else{var d=a.a.ta(b).toLowerCase();c=w.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof A.innerShiv?c.appendChild(A.innerShiv(b)):
c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.R(c.lastChild.childNodes)}return c};a.a.Va=function(b,c){a.a.Fa(b);c=a.a.c(c);if(null!==c&&c!==p)if("string"!=typeof c&&(c=c.toString()),t)t(b).html(c);else for(var d=a.a.Qa(c),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.Qa);a.b("utils.setHtml",a.a.Va);a.w=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.w.xb(c.nodeValue);null!=f&&e.push({Rb:c,cc:f})}else if(1==c.nodeType)for(var f=0,h=c.childNodes,g=h.length;f<g;f++)b(h[f],
e)}var c={};return{Na:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},Hb:function(a,b){var f=c[a];if(f===p)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete c[a]}},Ib:function(c,e){var f=
[];b(c,f);for(var h=0,g=f.length;h<g;h++){var k=f[h].Rb,l=[k];e&&a.a.$(l,e);a.w.Hb(f[h].cc,l);k.nodeValue="";k.parentNode&&k.parentNode.removeChild(k)}},xb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.w);a.b("memoization.memoize",a.w.Na);a.b("memoization.unmemoize",a.w.Hb);a.b("memoization.parseMemoText",a.w.xb);a.b("memoization.unmemoizeDomNodeAndDescendants",a.w.Ib);a.Ga={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.h({read:b,write:function(a){clearTimeout(d);
d=setTimeout(function(){b(a)},c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);f="notifyWhenChangesStop"==e?O:N;a.Ma(function(a){return f(a,d)})},notify:function(a,c){a.equalityComparer="always"==c?null:G}};var M={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Ga);a.Fb=function(b,c,d){this.target=b;this.za=c;this.Qb=d;this.sb=!1;a.s(this,"dispose",this.F)};a.Fb.prototype.F=function(){this.sb=!0;this.Qb()};a.N=function(){a.a.sa(this,a.N.fn);this.H=
{}};var F="change";z={V:function(b,c,d){var e=this;d=d||F;var f=new a.Fb(e,c?b.bind(c):b,function(){a.a.ma(e.H[d],f)});e.o&&e.o();e.H[d]||(e.H[d]=[]);e.H[d].push(f);return f},notifySubscribers:function(b,c){c=c||F;if(this.qb(c))try{a.k.jb();for(var d=this.H[c].slice(0),e=0,f;f=d[e];++e)f.sb||f.za(b)}finally{a.k.end()}},Ma:function(b){var c=this,d=a.v(c),e,f,h;c.ia||(c.ia=c.notifySubscribers,c.notifySubscribers=function(a,b){b&&b!==F?"beforeChange"===b?c.bb(a):c.ia(a,b):c.cb(a)});var g=b(function(){d&&
h===c&&(h=c());e=!1;c.Ka(f,h)&&c.ia(f=h)});c.cb=function(a){e=!0;h=a;g()};c.bb=function(a){e||(f=a,c.ia(a,"beforeChange"))}},qb:function(a){return this.H[a]&&this.H[a].length},Wb:function(){var b=0;a.a.A(this.H,function(a,d){b+=d.length});return b},Ka:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},extend:function(b){var c=this;b&&a.a.A(b,function(b,e){var f=a.Ga[b];"function"==typeof f&&(c=f(c,e)||c)});return c}};a.s(z,"subscribe",z.V);a.s(z,"extend",z.extend);a.s(z,"getSubscriptionsCount",
z.Wb);a.a.na&&a.a.ra(z,Function.prototype);a.N.fn=z;a.tb=function(a){return null!=a&&"function"==typeof a.V&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.N);a.b("isSubscribable",a.tb);a.ca=a.k=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{jb:b,end:c,zb:function(b){if(e){if(!a.tb(b))throw Error("Only subscribable things can act as dependencies");e.za(b,b.Kb||(b.Kb=++f))}},t:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},fa:function(){if(e)return e.ba.fa()},
pa:function(){if(e)return e.pa}}}();a.b("computedContext",a.ca);a.b("computedContext.getDependenciesCount",a.ca.fa);a.b("computedContext.isInitial",a.ca.pa);a.m=function(b){function c(){if(0<arguments.length)return c.Ka(d,arguments[0])&&(c.P(),d=arguments[0],c.O()),this;a.k.zb(c);return d}var d=b;a.N.call(c);a.a.sa(c,a.m.fn);c.o=function(){return d};c.O=function(){c.notifySubscribers(d)};c.P=function(){c.notifySubscribers(d,"beforeChange")};a.s(c,"peek",c.o);a.s(c,"valueHasMutated",c.O);a.s(c,"valueWillMutate",
c.P);return c};a.m.fn={equalityComparer:G};var E=a.m.hc="__ko_proto__";a.m.fn[E]=a.m;a.a.na&&a.a.ra(a.m.fn,a.N.fn);a.Ha=function(b,c){return null===b||b===p||b[E]===p?!1:b[E]===c?!0:a.Ha(b[E],c)};a.v=function(b){return a.Ha(b,a.m)};a.ub=function(b){return"function"==typeof b&&b[E]===a.m||"function"==typeof b&&b[E]===a.h&&b.Yb?!0:!1};a.b("observable",a.m);a.b("isObservable",a.v);a.b("isWriteableObservable",a.ub);a.T=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
b=a.m(b);a.a.sa(b,a.T.fn);return b.extend({trackArrayChanges:!0})};a.T.fn={remove:function(b){for(var c=this.o(),d=[],e="function"!=typeof b||a.v(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var h=c[f];e(h)&&(0===d.length&&this.P(),d.push(h),c.splice(f,1),f--)}d.length&&this.O();return d},removeAll:function(b){if(b===p){var c=this.o(),d=c.slice(0);this.P();c.splice(0,c.length);this.O();return d}return b?this.remove(function(c){return 0<=a.a.l(b,c)}):[]},destroy:function(b){var c=this.o(),d=
"function"!=typeof b||a.v(b)?function(a){return a===b}:b;this.P();for(var e=c.length-1;0<=e;e--)d(c[e])&&(c[e]._destroy=!0);this.O()},destroyAll:function(b){return b===p?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.l(b,c)}):[]},indexOf:function(b){var c=this();return a.a.l(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.P(),this.o()[d]=c,this.O())}};a.a.r("pop push reverse shift sort splice unshift".split(" "),function(b){a.T.fn[b]=function(){var a=this.o();
this.P();this.kb(a,b,arguments);a=a[b].apply(a,arguments);this.O();return a}});a.a.r(["slice"],function(b){a.T.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.a.na&&a.a.ra(a.T.fn,a.m.fn);a.b("observableArray",a.T);var I="arrayChange";a.Ga.trackArrayChanges=function(b){function c(){if(!d){d=!0;var c=b.notifySubscribers;b.notifySubscribers=function(a,b){b&&b!==F||++f;return c.apply(this,arguments)};var k=[].concat(b.o()||[]);e=null;b.V(function(c){c=[].concat(c||[]);if(b.qb(I)){var d;
if(!e||1<f)e=a.a.Aa(k,c,{sparse:!0});d=e;d.length&&b.notifySubscribers(d,I)}k=c;e=null;f=0})}}if(!b.kb){var d=!1,e=null,f=0,h=b.V;b.V=b.subscribe=function(a,b,d){d===I&&c();return h.apply(this,arguments)};b.kb=function(b,c,l){function h(a,b,c){return r[r.length]={status:a,value:b,index:c}}if(d&&!f){var r=[],m=b.length,q=l.length,s=0;switch(c){case "push":s=m;case "unshift":for(c=0;c<q;c++)h("added",l[c],s+c);break;case "pop":s=m-1;case "shift":m&&h("deleted",b[s],s);break;case "splice":c=Math.min(Math.max(0,
0>l[0]?m+l[0]:l[0]),m);for(var m=1===q?m:Math.min(c+(l[1]||0),m),q=c+q-2,s=Math.max(m,q),B=[],u=[],D=2;c<s;++c,++D)c<m&&u.push(h("deleted",b[c],c)),c<q&&B.push(h("added",l[D],c));a.a.nb(u,B);break;default:return}e=r}}}};a.ba=a.h=function(b,c,d){function e(){q=!0;a.a.A(v,function(a,b){b.F()});v={};x=0;n=!1}function f(){var a=g.throttleEvaluation;a&&0<=a?(clearTimeout(t),t=setTimeout(h,a)):g.wa?g.wa():h()}function h(){if(!r&&!q){if(y&&y()){if(!m){p();return}}else m=!1;r=!0;try{var b=v,d=x;a.k.jb({za:function(a,
c){q||(d&&b[c]?(v[c]=b[c],++x,delete b[c],--d):v[c]||(v[c]=a.V(f),++x))},ba:g,pa:!x});v={};x=0;try{var e=c?s.call(c):s()}finally{a.k.end(),d&&a.a.A(b,function(a,b){b.F()}),n=!1}g.Ka(l,e)&&(g.notifySubscribers(l,"beforeChange"),l=e,g.wa&&!g.throttleEvaluation||g.notifySubscribers(l))}finally{r=!1}x||p()}}function g(){if(0<arguments.length){if("function"===typeof B)B.apply(c,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}n&&h();a.k.zb(g);return l}function k(){return n||0<x}var l,n=!0,r=!1,m=!1,q=!1,s=b;s&&"object"==typeof s?(d=s,s=d.read):(d=d||{},s||(s=d.read));if("function"!=typeof s)throw Error("Pass a function that returns the value of the ko.computed");var B=d.write,u=d.disposeWhenNodeIsRemoved||d.G||null,D=d.disposeWhen||d.Da,y=D,p=e,v={},x=0,t=null;c||(c=d.owner);a.N.call(g);a.a.sa(g,a.h.fn);g.o=function(){n&&!x&&h();return l};g.fa=function(){return x};g.Yb="function"===typeof d.write;g.F=function(){p()};
g.ga=k;var w=g.Ma;g.Ma=function(a){w.call(g,a);g.wa=function(){g.bb(l);n=!0;g.cb(g)}};a.s(g,"peek",g.o);a.s(g,"dispose",g.F);a.s(g,"isActive",g.ga);a.s(g,"getDependenciesCount",g.fa);u&&(m=!0,u.nodeType&&(y=function(){return!a.a.Ea(u)||D&&D()}));!0!==d.deferEvaluation&&h();u&&k()&&u.nodeType&&(p=function(){a.a.u.Ab(u,p);e()},a.a.u.ja(u,p));return g};a.$b=function(b){return a.Ha(b,a.h)};z=a.m.hc;a.h[z]=a.m;a.h.fn={equalityComparer:G};a.h.fn[z]=a.h;a.a.na&&a.a.ra(a.h.fn,a.N.fn);a.b("dependentObservable",
a.h);a.b("computed",a.h);a.b("isComputed",a.$b);(function(){function b(a,f,h){h=h||new d;a=f(a);if("object"!=typeof a||null===a||a===p||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var g=a instanceof Array?[]:{};h.save(a,g);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":g[c]=d;break;case "object":case "undefined":var n=h.get(d);g[c]=n!==p?n:b(d,f,h)}});return g}function c(a,b){if(a instanceof Array){for(var c=
0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.ab=[]}a.Gb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.v(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.Gb(b);return a.a.Ya(b,c,d)};d.prototype={save:function(b,c){var d=a.a.l(this.keys,b);0<=d?this.ab[d]=c:(this.keys.push(b),this.ab.push(c))},get:function(b){b=a.a.l(this.keys,
b);return 0<=b?this.ab[b]:p}}})();a.b("toJS",a.Gb);a.b("toJSON",a.toJSON);(function(){a.i={p:function(b){switch(a.a.B(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.Pa):7>=a.a.oa?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.i.p(b.options[b.selectedIndex]):p;default:return b.value}},X:function(b,c,d){switch(a.a.B(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.d.options.Pa,
p);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.d.options.Pa,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof c?c:""}break;case "select":if(""===c||null===c)c=p;for(var e=-1,f=0,h=b.options.length,g;f<h;++f)if(g=a.i.p(b.options[f]),g==c||""==g&&c===p){e=f;break}if(d||0<=e||c===p&&1<b.size)b.selectedIndex=e;break;default:if(null===c||c===p)c="";b.value=c}}}})();a.b("selectExtensions",a.i);a.b("selectExtensions.readValue",
a.i.p);a.b("selectExtensions.writeValue",a.i.X);a.g=function(){function b(b){b=a.a.ta(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),g,m,q=0;if(d){d.push(",");for(var s=0,B;B=d[s];++s){var u=B.charCodeAt(0);if(44===u){if(0>=q){g&&c.push(m?{key:g,value:m.join("")}:{unknown:g});g=m=q=0;continue}}else if(58===u){if(!m)continue}else if(47===u&&s&&1<B.length)(u=d[s-1].match(f))&&!h[u[0]]&&(b=b.substr(b.indexOf(B)+1),d=b.match(e),d.push(","),s=-1,B="/");else if(40===u||123===u||91===
u)++q;else if(41===u||125===u||93===u)--q;else if(!g&&!m){g=34===u||39===u?B.slice(1,-1):B;continue}m?m.push(B):m=[B]}}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,h={"in":1,"return":1,"typeof":1},g={};return{aa:[],W:g,Ra:b,qa:function(e,l){function f(b,e){var l,k=a.getBindingHandler(b);
if(k&&k.preprocess?e=k.preprocess(e,b,f):1){if(k=g[b])l=e,0<=a.a.l(c,l)?l=!1:(k=l.match(d),l=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:l),k=l;k&&m.push("'"+b+"':function(_z){"+l+"=_z}");q&&(e="function(){return "+e+" }");h.push("'"+b+"':"+e)}}l=l||{};var h=[],m=[],q=l.valueAccessors,s="string"===typeof e?b(e):e;a.a.r(s,function(a){f(a.key||a.unknown,a.value)});m.length&&f("_ko_property_writers","{"+m.join(",")+" }");return h.join(",")},bc:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;
return!1},va:function(b,c,d,e,g){if(b&&a.v(b))!a.ub(b)||g&&b.o()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.g);a.b("expressionRewriting.bindingRewriteValidators",a.g.aa);a.b("expressionRewriting.parseObjectLiteral",a.g.Ra);a.b("expressionRewriting.preProcessBindings",a.g.qa);a.b("expressionRewriting._twoWayBindings",a.g.W);a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.g.qa);(function(){function b(a){return 8==
a.nodeType&&h.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function d(a,d){for(var e=a,g=1,k=[];e=e.nextSibling;){if(c(e)&&(g--,0===g))return k;k.push(e);b(e)&&g++}if(!d)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,h=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,
g=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,k={ul:!0,ol:!0};a.e={Q:{},childNodes:function(a){return b(a)?d(a):a.childNodes},da:function(c){if(b(c)){c=a.e.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Fa(c)},U:function(c,d){if(b(c)){a.e.da(c);for(var e=c.nextSibling,g=0,k=d.length;g<k;g++)e.parentNode.insertBefore(d[g],e)}else a.a.U(c,d)},yb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},rb:function(c,
d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.e.yb(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},Xb:b,lc:function(a){return(a=(f?a.text:a.nodeValue).match(h))?a[1]:null},wb:function(d){if(k[a.a.B(d)]){var g=d.firstChild;if(g){do if(1===g.nodeType){var f;f=g.firstChild;
var h=null;if(f){do if(h)h.push(f);else if(b(f)){var q=e(f,!0);q?f=q:h=[f]}else c(f)&&(h=[f]);while(f=f.nextSibling)}if(f=h)for(h=g.nextSibling,q=0;q<f.length;q++)h?d.insertBefore(f[q],h):d.appendChild(f[q])}while(g=g.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.Q);a.b("virtualElements.emptyNode",a.e.da);a.b("virtualElements.insertAfter",a.e.rb);a.b("virtualElements.prepend",a.e.yb);a.b("virtualElements.setDomNodeChildren",a.e.U);(function(){a.J=function(){this.Nb=
{}};a.a.extend(a.J.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind");case 8:return a.e.Xb(b);default:return!1}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a):null},getBindingAccessors:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a,{valueAccessors:!0}):null},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");
case 8:return a.e.lc(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var f=this.Nb,h=b+(e&&e.valueAccessors||""),g;if(!(g=f[h])){var k,l="with($context){with($data||{}){return{"+a.g.qa(b,e)+"}}}";k=new Function("$context","$element",l);g=f[h]=k}return g(c,d)}catch(n){throw n.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+n.message,n;}}});a.J.instance=new a.J})();a.b("bindingProvider",a.J);(function(){function b(a){return function(){return a}}function c(a){return a()}
function d(b){return a.a.Oa(a.k.t(b),function(a,c){return function(){return b()[c]}})}function e(a,b){return d(this.getBindings.bind(this,a,b))}function f(b,c,d){var e,g=a.e.firstChild(c),k=a.J.instance,f=k.preprocessNode;if(f){for(;e=g;)g=a.e.nextSibling(e),f.call(k,e);g=a.e.firstChild(c)}for(;e=g;)g=a.e.nextSibling(e),h(b,e,d)}function h(b,c,d){var e=!0,g=1===c.nodeType;g&&a.e.wb(c);if(g&&d||a.J.instance.nodeHasBindings(c))e=k(c,null,b,d).shouldBindDescendants;e&&!n[a.a.B(c)]&&f(b,c,!g)}function g(b){var c=
[],d={},e=[];a.a.A(b,function y(g){if(!d[g]){var k=a.getBindingHandler(g);k&&(k.after&&(e.push(g),a.a.r(k.after,function(c){if(b[c]){if(-1!==a.a.l(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));y(c)}}),e.length--),c.push({key:g,pb:k}));d[g]=!0}});return c}function k(b,d,k,f){var h=a.a.f.get(b,r);if(!d){if(h)throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b,r,!0)}!h&&f&&a.Eb(b,k);var l;if(d&&"function"!==
typeof d)l=d;else{var n=a.J.instance,m=n.getBindingAccessors||e,x=a.h(function(){(l=d?d(k,b):m.call(n,b,k))&&k.D&&k.D();return l},null,{G:b});l&&x.ga()||(x=null)}var t;if(l){var w=x?function(a){return function(){return c(x()[a])}}:function(a){return l[a]},z=function(){return a.a.Oa(x?x():l,c)};z.get=function(a){return l[a]&&c(w(a))};z.has=function(a){return a in l};f=g(l);a.a.r(f,function(c){var d=c.pb.init,e=c.pb.update,g=c.key;if(8===b.nodeType&&!a.e.Q[g])throw Error("The binding '"+g+"' cannot be used with virtual elements");
try{"function"==typeof d&&a.k.t(function(){var a=d(b,w(g),z,k.$data,k);if(a&&a.controlsDescendantBindings){if(t!==p)throw Error("Multiple bindings ("+t+" and "+g+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");t=g}}),"function"==typeof e&&a.h(function(){e(b,w(g),z,k.$data,k)},null,{G:b})}catch(f){throw f.message='Unable to process binding "'+g+": "+l[g]+'"\nMessage: '+f.message,f;}})}return{shouldBindDescendants:t===p}}
function l(b){return b&&b instanceof a.I?b:new a.I(b)}a.d={};var n={script:!0};a.getBindingHandler=function(b){return a.d[b]};a.I=function(b,c,d,e){var g=this,k="function"==typeof b&&!a.v(b),f,h=a.h(function(){var f=k?b():b,l=a.a.c(f);c?(c.D&&c.D(),a.a.extend(g,c),h&&(g.D=h)):(g.$parents=[],g.$root=l,g.ko=a);g.$rawData=f;g.$data=l;d&&(g[d]=l);e&&e(g,c,l);return g.$data},null,{Da:function(){return f&&!a.a.eb(f)},G:!0});h.ga()&&(g.D=h,h.equalityComparer=null,f=[],h.Jb=function(b){f.push(b);a.a.u.ja(b,
function(b){a.a.ma(f,b);f.length||(h.F(),g.D=h=p)})})};a.I.prototype.createChildContext=function(b,c,d){return new a.I(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.I.prototype.extend=function(b){return new a.I(this.D||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};var r=a.a.f.L(),m=a.a.f.L();a.Eb=function(b,c){if(2==arguments.length)a.a.f.set(b,m,c),
c.D&&c.D.Jb(b);else return a.a.f.get(b,m)};a.xa=function(b,c,d){1===b.nodeType&&a.e.wb(b);return k(b,c,l(d),!0)};a.Lb=function(c,e,g){g=l(g);return a.xa(c,"function"===typeof e?d(e.bind(null,g,c)):a.a.Oa(e,b),g)};a.gb=function(a,b){1!==b.nodeType&&8!==b.nodeType||f(l(a),b,!0)};a.fb=function(a,b){!t&&A.jQuery&&(t=A.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||A.document.body;h(l(a),
b,!0)};a.Ca=function(b){switch(b.nodeType){case 1:case 8:var c=a.Eb(b);if(c)return c;if(b.parentNode)return a.Ca(b.parentNode)}return p};a.Pb=function(b){return(b=a.Ca(b))?b.$data:p};a.b("bindingHandlers",a.d);a.b("applyBindings",a.fb);a.b("applyBindingsToDescendants",a.gb);a.b("applyBindingAccessorsToNode",a.xa);a.b("applyBindingsToNode",a.Lb);a.b("contextFor",a.Ca);a.b("dataFor",a.Pb)})();var L={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.A(d,function(c,
d){d=a.a.c(d);var h=!1===d||null===d||d===p;h&&b.removeAttribute(c);8>=a.a.oa&&c in L?(c=L[c],h?b.removeAttribute(c):b[c]=d):h||b.setAttribute(c,d.toString());"name"===c&&a.a.Cb(b,h?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,c,d){function e(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):b.value}function f(){var g=b.checked,f=r?e():g;if(!a.ca.pa()&&(!k||g)){var h=a.k.t(c);l?n!==f?(g&&(a.a.Y(h,f,!0),a.a.Y(h,n,!1)),n=f):a.a.Y(h,f,g):a.g.va(h,d,"checked",
f,!0)}}function h(){var d=a.a.c(c());b.checked=l?0<=a.a.l(d,e()):g?d:e()===d}var g="checkbox"==b.type,k="radio"==b.type;if(g||k){var l=g&&a.a.c(c())instanceof Array,n=l?e():p,r=k||l;k&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.ba(f,null,{G:b});a.a.q(b,"click",f);a.ba(h,null,{G:b})}}};a.g.W.checked=!0;a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.d.css={update:function(b,c){var d=a.a.c(c());"object"==typeof d?a.a.A(d,function(c,d){d=a.a.c(d);a.a.ua(b,c,d)}):(d=String(d||
""),a.a.ua(b,b.__ko__cssValue,!1),b.__ko__cssValue=d,a.a.ua(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,e,f){var h=c()||{};a.a.A(h,function(g){"string"==typeof g&&a.a.q(b,g,function(b){var h,n=c()[g];if(n){try{var r=a.a.R(arguments);e=f.$data;r.unshift(e);h=n.apply(e,r)}finally{!0!==h&&(b.preventDefault?
b.preventDefault():b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={vb:function(b){return function(){var c=b(),d=a.a.Sa(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.K.Ja};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.K.Ja}}},init:function(b,
c){return a.d.template.init(b,a.d.foreach.vb(c))},update:function(b,c,d,e,f){return a.d.template.update(b,a.d.foreach.vb(c),d,e,f)}};a.g.aa.foreach=!1;a.e.Q.foreach=!0;a.d.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var k=b.ownerDocument;if("activeElement"in k){var f;try{f=k.activeElement}catch(h){f=k.body}e=f===b}k=c();a.g.va(k,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),h=e.bind(null,!1);a.a.q(b,"focus",f);a.a.q(b,"focusin",
f);a.a.q(b,"blur",h);a.a.q(b,"focusout",h)},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),a.k.t(a.a.ha,null,[b,d?"focusin":"focusout"]))}};a.g.W.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.g.W.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Va(b,c())}};H("if");H("ifnot",!1,!0);H("with",!0,!1,function(a,c){return a.createChildContext(c)});var J={};a.d.options={init:function(b){if("select"!==
a.a.B(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.la(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function h(c,d){if(r.length){var e=0<=a.a.l(r,a.i.p(d[0]));a.a.Db(d[0],e);m&&!e&&a.k.t(a.a.ha,null,[b,"change"])}}var g=0!=b.length&&b.multiple?b.scrollTop:null,k=a.a.c(c()),l=d.get("optionsIncludeDestroyed");
c={};var n,r;r=b.multiple?a.a.ya(e(),a.i.p):0<=b.selectedIndex?[a.i.p(b.options[b.selectedIndex])]:[];k&&("undefined"==typeof k.length&&(k=[k]),n=a.a.la(k,function(b){return l||b===p||null===b||!a.a.c(b._destroy)}),d.has("optionsCaption")&&(k=a.a.c(d.get("optionsCaption")),null!==k&&k!==p&&n.unshift(J)));var m=!1;c.beforeRemove=function(a){b.removeChild(a)};k=h;d.has("optionsAfterRender")&&(k=function(b,c){h(0,c);a.k.t(d.get("optionsAfterRender"),null,[c[0],b!==J?b:p])});a.a.Ua(b,n,function(c,e,g){g.length&&
(r=g[0].selected?[a.i.p(g[0])]:[],m=!0);e=b.ownerDocument.createElement("option");c===J?(a.a.Xa(e,d.get("optionsCaption")),a.i.X(e,p)):(g=f(c,d.get("optionsValue"),c),a.i.X(e,a.a.c(g)),c=f(c,d.get("optionsText"),g),a.a.Xa(e,c));return[e]},c,k);a.k.t(function(){d.get("valueAllowUnset")&&d.has("value")?a.i.X(b,a.a.c(d.get("value")),!0):(b.multiple?r.length&&e().length<r.length:r.length&&0<=b.selectedIndex?a.i.p(b.options[b.selectedIndex])!==r[0]:r.length||0<=b.selectedIndex)&&a.a.ha(b,"change")});a.a.Tb(b);
g&&20<Math.abs(g-b.scrollTop)&&(b.scrollTop=g)}};a.d.options.Pa=a.a.f.L();a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.q(b,"change",function(){var e=c(),f=[];a.a.r(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.i.p(b))});a.g.va(e,d,"selectedOptions",f)})},update:function(b,c){if("select"!=a.a.B(b))throw Error("values binding applies only to SELECT elements");var d=a.a.c(c());d&&"number"==typeof d.length&&a.a.r(b.getElementsByTagName("option"),function(b){var c=
0<=a.a.l(d,a.i.p(b));a.a.Db(b,c)})}};a.g.W.selectedOptions=!0;a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.A(d,function(c,d){d=a.a.c(d);b.style[c]=d||""})}};a.d.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.q(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},
update:function(b,c){a.a.Xa(b,c())}};a.e.Q.text=!0;a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.Ob;a.a.Cb(b,d)}}};a.d.uniqueName.Ob=0;a.d.value={after:["options","foreach"],init:function(b,c,d){function e(){g=!1;var e=c(),f=a.i.p(b);a.g.va(e,d,"value",f)}var f=["change"],h=d.get("valueUpdate"),g=!1;h&&("string"==typeof h&&(h=[h]),a.a.$(f,h),f=a.a.ib(f));!a.a.oa||"input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||
-1!=a.a.l(f,"propertychange")||(a.a.q(b,"propertychange",function(){g=!0}),a.a.q(b,"focus",function(){g=!1}),a.a.q(b,"blur",function(){g&&e()}));a.a.r(f,function(c){var d=e;a.a.kc(c,"after")&&(d=function(){setTimeout(e,0)},c=c.substring(5));a.a.q(b,c,d)})},update:function(b,c,d){var e=a.a.c(c());c=a.i.p(b);if(e!==c)if("select"===a.a.B(b)){var f=d.get("valueAllowUnset");d=function(){a.i.X(b,e,f)};d();f||e===a.i.p(b)?setTimeout(d,0):a.k.t(a.a.ha,null,[b,"change"])}else a.i.X(b,e)}};a.g.W.value=!0;a.d.visible=
{update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(c,d,e,f,h){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,h)}}})("click");a.C=function(){};a.C.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.C.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.C.prototype.makeTemplateSource=
function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.n.j(d)}if(1==b.nodeType||8==b.nodeType)return new a.n.Z(b);throw Error("Unknown template type: "+b);};a.C.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d)};a.C.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.C.prototype.rewriteTemplate=
function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.C);a.Za=function(){function b(b,c,d,g){b=a.g.Ra(b);for(var k=a.g.aa,l=0;l<b.length;l++){var n=b[l].key;if(k.hasOwnProperty(n)){var r=k[n];if("function"===typeof r){if(n=r(b[l].value))throw Error(n);}else if(!r)throw Error("This template engine does not support the '"+n+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.g.qa(b,
{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return g.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Ub:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Za.dc(b,c)},d)},dc:function(a,f){return a.replace(c,function(a,c,d,e,n){return b(n,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e",
"#comment",f)})},Mb:function(b,c){return a.w.Na(function(d,g){var k=d.nextSibling;k&&k.nodeName.toLowerCase()===c&&a.xa(k,b,g)})}}}();a.b("__tr_ambtns",a.Za.Mb);(function(){a.n={};a.n.j=function(a){this.j=a};a.n.j.prototype.text=function(){var b=a.a.B(this.j),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.j[b];var c=arguments[0];"innerHTML"===b?a.a.Va(this.j,c):this.j[b]=c};var b=a.a.f.L()+"_";a.n.j.prototype.data=function(c){if(1===arguments.length)return a.a.f.get(this.j,
b+c);a.a.f.set(this.j,b+c,arguments[1])};var c=a.a.f.L();a.n.Z=function(a){this.j=a};a.n.Z.prototype=new a.n.j;a.n.Z.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.j,c)||{};b.$a===p&&b.Ba&&(b.$a=b.Ba.innerHTML);return b.$a}a.a.f.set(this.j,c,{$a:arguments[0]})};a.n.j.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.j,c)||{}).Ba;a.a.f.set(this.j,c,{Ba:arguments[0]})};a.b("templateSources",a.n);a.b("templateSources.domElement",a.n.j);a.b("templateSources.anonymousTemplate",
a.n.Z)})();(function(){function b(b,c,d){var e;for(c=a.e.nextSibling(c);b&&(e=b)!==c;)b=a.e.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],h=e.parentNode,m=a.J.instance,q=m.preprocessNode;if(q){b(e,f,function(a,b){var c=a.previousSibling,d=q.call(m,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.ea(c,h))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.fb(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==
b.nodeType||a.w.Ib(b,[d])});a.a.ea(c,h)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,h,n,r){r=r||{};var m=b&&d(b),m=m&&m.ownerDocument,q=r.templateEngine||f;a.Za.Ub(h,q,m);h=q.renderTemplate(h,n,r,m);if("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType)throw Error("Template engine must return an array of DOM nodes");m=!1;switch(e){case "replaceChildren":a.e.U(b,h);m=!0;break;case "replaceNode":a.a.Bb(b,h);m=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+
e);}m&&(c(h,n),r.afterRender&&a.k.t(r.afterRender,null,[h,n.$data]));return h}var f;a.Wa=function(b){if(b!=p&&!(b instanceof a.C))throw Error("templateEngine must inherit from ko.templateEngine");f=b};a.Ta=function(b,c,h,n,r){h=h||{};if((h.templateEngine||f)==p)throw Error("Set a template engine before calling renderTemplate");r=r||"replaceChildren";if(n){var m=d(n);return a.h(function(){var f=c&&c instanceof a.I?c:new a.I(a.a.c(c)),p=a.v(b)?b():"function"==typeof b?b(f.$data,f):b,f=e(n,r,p,f,h);
"replaceNode"==r&&(n=f,m=d(n))},null,{Da:function(){return!m||!a.a.Ea(m)},G:m&&"replaceNode"==r?m.parentNode:m})}return a.w.Na(function(d){a.Ta(b,c,h,d,"replaceNode")})};a.jc=function(b,d,f,h,r){function m(a,b){c(b,s);f.afterRender&&f.afterRender(b,a)}function q(a,c){s=r.createChildContext(a,f.as,function(a){a.$index=c});var d="function"==typeof b?b(a,s):b;return e(null,"ignoreTargetNode",d,s,f)}var s;return a.h(function(){var b=a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.la(b,function(b){return f.includeDestroyed||
b===p||null===b||!a.a.c(b._destroy)});a.k.t(a.a.Ua,null,[h,b,q,f,m])},null,{G:h})};var h=a.a.f.L();a.d.template={init:function(b,c){var d=a.a.c(c());"string"==typeof d||d.name?a.e.da(b):(d=a.e.childNodes(b),d=a.a.ec(d),(new a.n.Z(b)).nodes(d));return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var m=c(),q;c=a.a.c(m);d=!0;e=null;"string"==typeof c?c={}:(m=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in c&&(d=!a.a.c(c.ifnot)),q=a.a.c(c.data));"foreach"in c?e=a.jc(m||b,d&&c.foreach||
[],c,b,f):d?(f="data"in c?f.createChildContext(q,c.as):f,e=a.Ta(m||b,f,c,b)):a.e.da(b);f=e;(q=a.a.f.get(b,h))&&"function"==typeof q.F&&q.F();a.a.f.set(b,h,f&&f.ga()?f:p)}};a.g.aa.template=function(b){b=a.g.Ra(b);return 1==b.length&&b[0].unknown||a.g.bc(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.e.Q.template=!0})();a.b("setTemplateEngine",a.Wa);a.b("renderTemplate",a.Ta);a.a.nb=function(a,c,d){if(a.length&&c.length){var e,f,h,g,k;for(e=
f=0;(!d||e<d)&&(g=a[f]);++f){for(h=0;k=c[h];++h)if(g.value===k.value){g.moved=k.index;k.moved=g.index;c.splice(h,1);e=h=0;break}e+=h}}};a.a.Aa=function(){function b(b,d,e,f,h){var g=Math.min,k=Math.max,l=[],n,p=b.length,m,q=d.length,s=q-p||1,t=p+q+1,u,w,y;for(n=0;n<=p;n++)for(w=u,l.push(u=[]),y=g(q,n+s),m=k(0,n-1);m<=y;m++)u[m]=m?n?b[n-1]===d[m-1]?w[m-1]:g(w[m]||t,u[m-1]||t)+1:m+1:n+1;g=[];k=[];s=[];n=p;for(m=q;n||m;)q=l[n][m]-1,m&&q===l[n][m-1]?k.push(g[g.length]={status:e,value:d[--m],index:m}):
n&&q===l[n-1][m]?s.push(g[g.length]={status:f,value:b[--n],index:n}):(--m,--n,h.sparse||g.push({status:"retained",value:d[m]}));a.a.nb(k,s,10*p);return g.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<=d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Aa);(function(){function b(b,c,f,h,g){var k=[],l=a.h(function(){var l=c(f,g,a.a.ea(k,b))||[];0<k.length&&(a.a.Bb(k,l),h&&a.k.t(h,null,[f,
l,g]));k.length=0;a.a.$(k,l)},null,{G:b,Da:function(){return!a.a.eb(k)}});return{S:k,h:l.ga()?l:p}}var c=a.a.f.L();a.a.Ua=function(d,e,f,h,g){function k(b,c){v=r[c];u!==c&&(z[b]=v);v.Ia(u++);a.a.ea(v.S,d);s.push(v);y.push(v)}function l(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.r(c[d].S,function(a){b(a,d,c[d].ka)})}e=e||[];h=h||{};var n=a.a.f.get(d,c)===p,r=a.a.f.get(d,c)||[],m=a.a.ya(r,function(a){return a.ka}),q=a.a.Aa(m,e,h.dontLimitMoves),s=[],t=0,u=0,w=[],y=[];e=[];for(var z=[],m=[],
v,x=0,A,C;A=q[x];x++)switch(C=A.moved,A.status){case "deleted":C===p&&(v=r[t],v.h&&v.h.F(),w.push.apply(w,a.a.ea(v.S,d)),h.beforeRemove&&(e[x]=v,y.push(v)));t++;break;case "retained":k(x,t++);break;case "added":C!==p?k(x,C):(v={ka:A.value,Ia:a.m(u++)},s.push(v),y.push(v),n||(m[x]=v))}l(h.beforeMove,z);a.a.r(w,h.beforeRemove?a.M:a.removeNode);for(var x=0,n=a.e.firstChild(d),E;v=y[x];x++){v.S||a.a.extend(v,b(d,f,v.ka,g,v.Ia));for(t=0;q=v.S[t];n=q.nextSibling,E=q,t++)q!==n&&a.e.rb(d,q,E);!v.Zb&&g&&(g(v.ka,
v.S,v.Ia),v.Zb=!0)}l(h.beforeRemove,e);l(h.afterMove,z);l(h.afterAdd,m);a.a.f.set(d,c,s)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Ua);a.K=function(){this.allowTemplateRewriting=!1};a.K.prototype=new a.C;a.K.prototype.renderTemplateSource=function(b){var c=(9>a.a.oa?0:b.nodes)?b.nodes():null;if(c)return a.a.R(c.cloneNode(!0).childNodes);b=b.text();return a.a.Qa(b)};a.K.Ja=new a.K;a.Wa(a.K.Ja);a.b("nativeTemplateEngine",a.K);(function(){a.La=function(){var a=this.ac=function(){if(!t||
!t.tmpl)return 0;try{if(0<=t.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,f){f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=t.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=t.extend({koBindingContext:e},f.templateOptions);e=t.tmpl(h,b,e);e.appendTo(w.createElement("div"));
t.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(t.tmpl.tag.ko_code={open:"__.push($1 || '');"},t.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.La.prototype=new a.C;var b=new a.La;0<b.ac&&a.Wa(b);a.b("jqueryTmplTemplateEngine",a.La)})()})})();})();
;/// Knockout Mapping plugin v2.4.1
/// (c) 2013 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
/// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function(e){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?e(require("knockout"),exports):"function"===typeof define&&define.amd?define(["knockout","exports"],e):e(ko,ko.mapping={})})(function(e,f){function y(b,c){var a,d;for(d in c)if(c.hasOwnProperty(d)&&c[d])if(a=f.getType(b[d]),d&&b[d]&&"array"!==a&&"string"!==a)y(b[d],c[d]);else if("array"===f.getType(b[d])&&"array"===f.getType(c[d])){a=b;for(var e=d,l=b[d],n=c[d],t={},g=l.length-1;0<=g;--g)t[l[g]]=l[g];for(g=
n.length-1;0<=g;--g)t[n[g]]=n[g];l=[];n=void 0;for(n in t)l.push(t[n]);a[e]=l}else b[d]=c[d]}function E(b,c){var a={};y(a,b);y(a,c);return a}function z(b,c){for(var a=E({},b),e=L.length-1;0<=e;e--){var f=L[e];a[f]&&(a[""]instanceof Object||(a[""]={}),a[""][f]=a[f],delete a[f])}c&&(a.ignore=h(c.ignore,a.ignore),a.include=h(c.include,a.include),a.copy=h(c.copy,a.copy),a.observe=h(c.observe,a.observe));a.ignore=h(a.ignore,j.ignore);a.include=h(a.include,j.include);a.copy=h(a.copy,j.copy);a.observe=h(a.observe,
j.observe);a.mappedProperties=a.mappedProperties||{};a.copiedProperties=a.copiedProperties||{};return a}function h(b,c){"array"!==f.getType(b)&&(b="undefined"===f.getType(b)?[]:[b]);"array"!==f.getType(c)&&(c="undefined"===f.getType(c)?[]:[c]);return e.utils.arrayGetDistinctValues(b.concat(c))}function F(b,c,a,d,k,l,n){var t="array"===f.getType(e.utils.unwrapObservable(c));l=l||"";if(f.isMapped(b)){var g=e.utils.unwrapObservable(b)[p];a=E(g,a)}var j=n||k,h=function(){return a[d]&&a[d].create instanceof
Function},x=function(b){var f=G,g=e.dependentObservable;e.dependentObservable=function(a,b,c){c=c||{};a&&"object"==typeof a&&(c=a);var d=c.deferEvaluation,M=!1;c.deferEvaluation=!0;a=new H(a,b,c);if(!d){var g=a,d=e.dependentObservable;e.dependentObservable=H;a=e.isWriteableObservable(g);e.dependentObservable=d;d=H({read:function(){M||(e.utils.arrayRemoveItem(f,g),M=!0);return g.apply(g,arguments)},write:a&&function(a){return g(a)},deferEvaluation:!0});d.__DO=g;a=d;f.push(a)}return a};e.dependentObservable.fn=
H.fn;e.computed=e.dependentObservable;b=e.utils.unwrapObservable(k)instanceof Array?a[d].create({data:b||c,parent:j,skip:N}):a[d].create({data:b||c,parent:j});e.dependentObservable=g;e.computed=e.dependentObservable;return b},u=function(){return a[d]&&a[d].update instanceof Function},v=function(b,f){var g={data:f||c,parent:j,target:e.utils.unwrapObservable(b)};e.isWriteableObservable(b)&&(g.observable=b);return a[d].update(g)};if(n=I.get(c))return n;d=d||"";if(t){var t=[],s=!1,m=function(a){return a};
a[d]&&a[d].key&&(m=a[d].key,s=!0);e.isObservable(b)||(b=e.observableArray([]),b.mappedRemove=function(a){var c="function"==typeof a?a:function(b){return b===m(a)};return b.remove(function(a){return c(m(a))})},b.mappedRemoveAll=function(a){var c=C(a,m);return b.remove(function(a){return-1!=e.utils.arrayIndexOf(c,m(a))})},b.mappedDestroy=function(a){var c="function"==typeof a?a:function(b){return b===m(a)};return b.destroy(function(a){return c(m(a))})},b.mappedDestroyAll=function(a){var c=C(a,m);return b.destroy(function(a){return-1!=
e.utils.arrayIndexOf(c,m(a))})},b.mappedIndexOf=function(a){var c=C(b(),m);a=m(a);return e.utils.arrayIndexOf(c,a)},b.mappedGet=function(a){return b()[b.mappedIndexOf(a)]},b.mappedCreate=function(a){if(-1!==b.mappedIndexOf(a))throw Error("There already is an object with the key that you specified.");var c=h()?x(a):a;u()&&(a=v(c,a),e.isWriteableObservable(c)?c(a):c=a);b.push(c);return c});n=C(e.utils.unwrapObservable(b),m).sort();g=C(c,m);s&&g.sort();s=e.utils.compareArrays(n,g);n={};var J,A=e.utils.unwrapObservable(c),
y={},z=!0,g=0;for(J=A.length;g<J;g++){var r=m(A[g]);if(void 0===r||r instanceof Object){z=!1;break}y[r]=A[g]}var A=[],B=0,g=0;for(J=s.length;g<J;g++){var r=s[g],q,w=l+"["+g+"]";switch(r.status){case "added":var D=z?y[r.value]:K(e.utils.unwrapObservable(c),r.value,m);q=F(void 0,D,a,d,b,w,k);h()||(q=e.utils.unwrapObservable(q));w=O(e.utils.unwrapObservable(c),D,n);q===N?B++:A[w-B]=q;n[w]=!0;break;case "retained":D=z?y[r.value]:K(e.utils.unwrapObservable(c),r.value,m);q=K(b,r.value,m);F(q,D,a,d,b,w,
k);w=O(e.utils.unwrapObservable(c),D,n);A[w]=q;n[w]=!0;break;case "deleted":q=K(b,r.value,m)}t.push({event:r.status,item:q})}b(A);a[d]&&a[d].arrayChanged&&e.utils.arrayForEach(t,function(b){a[d].arrayChanged(b.event,b.item)})}else if(P(c)){b=e.utils.unwrapObservable(b);if(!b){if(h())return s=x(),u()&&(s=v(s)),s;if(u())return v(s);b={}}u()&&(b=v(b));I.save(c,b);if(u())return b;Q(c,function(d){var f=l.length?l+"."+d:d;if(-1==e.utils.arrayIndexOf(a.ignore,f))if(-1!=e.utils.arrayIndexOf(a.copy,f))b[d]=
c[d];else if("object"!=typeof c[d]&&"array"!=typeof c[d]&&0<a.observe.length&&-1==e.utils.arrayIndexOf(a.observe,f))b[d]=c[d],a.copiedProperties[f]=!0;else{var g=I.get(c[d]),k=F(b[d],c[d],a,d,b,f,b),g=g||k;if(0<a.observe.length&&-1==e.utils.arrayIndexOf(a.observe,f))b[d]=g(),a.copiedProperties[f]=!0;else{if(e.isWriteableObservable(b[d])){if(g=e.utils.unwrapObservable(g),b[d]()!==g)b[d](g)}else g=void 0===b[d]?g:e.utils.unwrapObservable(g),b[d]=g;a.mappedProperties[f]=!0}}})}else switch(f.getType(c)){case "function":u()?
e.isWriteableObservable(c)?(c(v(c)),b=c):b=v(c):b=c;break;default:if(e.isWriteableObservable(b))return q=u()?v(b):e.utils.unwrapObservable(c),b(q),q;h()||u();b=h()?x():e.observable(e.utils.unwrapObservable(c));u()&&b(v(b))}return b}function O(b,c,a){for(var d=0,e=b.length;d<e;d++)if(!0!==a[d]&&b[d]===c)return d;return null}function R(b,c){var a;c&&(a=c(b));"undefined"===f.getType(a)&&(a=b);return e.utils.unwrapObservable(a)}function K(b,c,a){b=e.utils.unwrapObservable(b);for(var d=0,f=b.length;d<
f;d++){var l=b[d];if(R(l,a)===c)return l}throw Error("When calling ko.update*, the key '"+c+"' was not found!");}function C(b,c){return e.utils.arrayMap(e.utils.unwrapObservable(b),function(a){return c?R(a,c):a})}function Q(b,c){if("array"===f.getType(b))for(var a=0;a<b.length;a++)c(a);else for(a in b)c(a)}function P(b){var c=f.getType(b);return("object"===c||"array"===c)&&null!==b}function T(){var b=[],c=[];this.save=function(a,d){var f=e.utils.arrayIndexOf(b,a);0<=f?c[f]=d:(b.push(a),c.push(d))};
this.get=function(a){a=e.utils.arrayIndexOf(b,a);return 0<=a?c[a]:void 0}}function S(){var b={},c=function(a){var c;try{c=a}catch(e){c="$$$"}a=b[c];void 0===a&&(a=new T,b[c]=a);return a};this.save=function(a,b){c(a).save(a,b)};this.get=function(a){return c(a).get(a)}}var p="__ko_mapping__",H=e.dependentObservable,B=0,G,I,L=["create","update","key","arrayChanged"],N={},x={include:["_destroy"],ignore:[],copy:[],observe:[]},j=x;f.isMapped=function(b){return(b=e.utils.unwrapObservable(b))&&b[p]};f.fromJS=
function(b){if(0==arguments.length)throw Error("When calling ko.fromJS, pass the object you want to convert.");try{B++||(G=[],I=new S);var c,a;2==arguments.length&&(arguments[1][p]?a=arguments[1]:c=arguments[1]);3==arguments.length&&(c=arguments[1],a=arguments[2]);a&&(c=E(c,a[p]));c=z(c);var d=F(a,b,c);a&&(d=a);if(!--B)for(;G.length;){var e=G.pop();e&&(e(),e.__DO.throttleEvaluation=e.throttleEvaluation)}d[p]=E(d[p],c);return d}catch(f){throw B=0,f;}};f.fromJSON=function(b){var c=e.utils.parseJson(b);
arguments[0]=c;return f.fromJS.apply(this,arguments)};f.updateFromJS=function(){throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");};f.updateFromJSON=function(){throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");};f.toJS=function(b,c){j||f.resetDefaultOptions();if(0==arguments.length)throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");
if("array"!==f.getType(j.ignore))throw Error("ko.mapping.defaultOptions().ignore should be an array.");if("array"!==f.getType(j.include))throw Error("ko.mapping.defaultOptions().include should be an array.");if("array"!==f.getType(j.copy))throw Error("ko.mapping.defaultOptions().copy should be an array.");c=z(c,b[p]);return f.visitModel(b,function(a){return e.utils.unwrapObservable(a)},c)};f.toJSON=function(b,c){var a=f.toJS(b,c);return e.utils.stringifyJson(a)};f.defaultOptions=function(){if(0<arguments.length)j=
arguments[0];else return j};f.resetDefaultOptions=function(){j={include:x.include.slice(0),ignore:x.ignore.slice(0),copy:x.copy.slice(0)}};f.getType=function(b){if(b&&"object"===typeof b){if(b.constructor===Date)return"date";if(b.constructor===Array)return"array"}return typeof b};f.visitModel=function(b,c,a){a=a||{};a.visitedObjects=a.visitedObjects||new S;var d,k=e.utils.unwrapObservable(b);if(P(k))a=z(a,k[p]),c(b,a.parentName),d="array"===f.getType(k)?[]:{};else return c(b,a.parentName);a.visitedObjects.save(b,
d);var l=a.parentName;Q(k,function(b){if(!(a.ignore&&-1!=e.utils.arrayIndexOf(a.ignore,b))){var j=k[b],g=a,h=l||"";"array"===f.getType(k)?l&&(h+="["+b+"]"):(l&&(h+="."),h+=b);g.parentName=h;if(!(-1===e.utils.arrayIndexOf(a.copy,b)&&-1===e.utils.arrayIndexOf(a.include,b)&&k[p]&&k[p].mappedProperties&&!k[p].mappedProperties[b]&&k[p].copiedProperties&&!k[p].copiedProperties[b]&&"array"!==f.getType(k)))switch(f.getType(e.utils.unwrapObservable(j))){case "object":case "array":case "undefined":g=a.visitedObjects.get(j);
d[b]="undefined"!==f.getType(g)?g:f.visitModel(j,c,a);break;default:d[b]=c(j,a.parentName)}}});return d}});
;/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
;/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});
;(function($) {

    var defaults = {
        monthNames: ['January','February','March','April','May','June',
                     'July','August','September','October','November',
                     'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                          'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                   'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ampmNames: ['AM', 'PM'],
        attribute: 'data-datetime'
    };

    var ticksTo1970 = (((1970 - 1) * 365 + Math.floor(1970 / 4)
                        - Math.floor(1970 / 100)
                        + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000);

    var formatDateTime = function(format, date, settings) {
        var output = '';
        var literal = false;
        var iFormat = 0;

        // Check whether a format character is doubled
        var lookAhead = function(match) {
            var matches = (iFormat + 1 < format.length
                           && format.charAt(iFormat + 1) == match);
            if (matches) {
                iFormat++;
            }
            return matches;
        };

        // Format a number, with leading zero if necessary
        var formatNumber = function(match, value, len) {
            var num = '' + value;
            if (lookAhead(match)) {
                while (num.length < len) {
                    num = '0' + num;
                }
            }
            return num;
        };

        // Format a name, short or long as requested
        var formatName = function(match, value, shortNames, longNames) {
            return (lookAhead(match) ? longNames[value] : shortNames[value]);
        };

        for (iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
                if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
                    literal = false;
                }
                else {
                    output += format.charAt(iFormat);
                }
            } else {
                switch (format.charAt(iFormat)) {
                case 'a':
                    output += date.getHours() < 12
                        ? settings.ampmNames[0]
                        : settings.ampmNames[1];
                    break;
                case 'd':
                    output += formatNumber('d', date.getDate(), 2);
                    break;
                case 'D':
                    output += formatName('D',
                                         date.getDay(),
                                         settings.dayNamesShort,
                                         settings.dayNames);
                    break;
                case 'o':
                    var end = new Date(date.getFullYear(),
                                       date.getMonth(),
                                       date.getDate()).getTime();
                    var start = new Date(date.getFullYear(), 0, 0).getTime();
                    output += formatNumber(
                        'o', Math.round((end - start) / 86400000), 3);
                    break;
                case 'g':
                    var hour = date.getHours() % 12;
                    output += formatNumber('g', (hour === 0 ? 12 : hour), 2);
                    break;
                case 'h':
                    output += formatNumber('h', date.getHours(), 2);
                    break;
                case 'u':
                    output += formatNumber('u', date.getMilliseconds(), 3);
                    break;
                case 'i':
                    output += formatNumber('i', date.getMinutes(), 2);
                    break;
                case 'm':
                    output += formatNumber('m', date.getMonth() + 1, 2);
                    break;
                case 'M':
                    output += formatName('M',
                                         date.getMonth(),
                                         settings.monthNamesShort,
                                         settings.monthNames);
                    break;
                case 's':
                    output += formatNumber('s', date.getSeconds(), 2);
                    break;
                case 'y':
                    output += (lookAhead('y')
                               ? date.getFullYear()
                               : (date.getYear() % 100 < 10 ? '0' : '')
                               + date.getYear() % 100);
                    break;
                case '@':
                    output += date.getTime();
                    break;
                case '!':
                    output += date.getTime() * 10000 + ticksTo1970;
                    break;
                case "'":
                    if (lookAhead("'")) {
                        output += "'";
                    } else {
                        literal = true;
                    }
                    break;
                default:
                    output += format.charAt(iFormat);
                }
            }
        }
        return output;
    };

    $.fn.formatDateTime = function(format, settings) {
        settings = $.extend({}, defaults, settings);
        var date = $(this).attr(settings.attribute);

        if (typeof date === 'undefined' || date === false) {
            date = $(this).text();
        }

        if (date === '') {
            $(this).text('');
        } else {
            $(this).text(formatDateTime(format, new Date(date), settings));
        }

        return this;
    };

    /**
       Format a date object into a string value.
       The format can be combinations of the following:
       a - Ante meridiem and post meridiem
       d  - day of month (no leading zero)
       dd - day of month (two digit)
       o  - day of year (no leading zeros)
       oo - day of year (three digit)
       D  - day name short
       DD - day name long
       g  - 12-hour hour format of day (no leading zero)
       gg - 12-hour hour format of day (two digit)
       h  - 24-hour hour format of day (no leading zero)
       hh - 24-hour hour format of day (two digit)
       u  - millisecond of second (no leading zeros)
       uu - millisecond of second (three digit)
       i  - minute of hour (no leading zero)
       ii - minute of hour (two digit)
       m  - month of year (no leading zero)
       mm - month of year (two digit)
       M  - month name short
       MM - month name long
       s  - second of minute (no leading zero)
       ss - second of minute (two digit)
       y  - year (two digit)
       yy - year (four digit)
       @  - Unix timestamp (ms since 01/01/1970)
       !  - Windows ticks (100ns since 01/01/0001)
       '...' - literal text
       '' - single quote

       @param  format    string - the desired format of the date
       @param  date      Date - the date value to format
       @param  settings  Object - attributes include:
           ampmNames        string[2] - am/pm (optional)
           dayNamesShort    string[7] - abbreviated names of the days
                                        from Sunday (optional)
           dayNames         string[7] - names of the days from Sunday (optional)
           monthNamesShort  string[12] - abbreviated names of the months
                                         (optional)
           monthNames       string[12] - names of the months (optional)
           attribute        string - Attribute which stores datetime, defaults
                                     to data-datetime, only valid when called
                                     on dom element(s). If not present,
                                     uses text.
       @return  string - the date in the above format
    */
    $.formatDateTime = function(format, date, settings) {
        settings = $.extend({}, defaults, settings);
        if (!date) { return ''; }
        return formatDateTime(format, date, settings);
    };

})(jQuery);
;;(function($){
	
	/**
	 * Displays loading mask over selected element(s). Accepts both single and multiple selectors.
	 *
	 * @param label Text message that will be displayed on top of the mask besides a spinner (optional). 
	 * 				If not provided only mask will be displayed without a label or a spinner.  	
	 * @param delay Delay in milliseconds before element is masked (optional). If unmask() is called 
	 *              before the delay times out, no mask is displayed. This can be used to prevent unnecessary 
	 *              mask display for quick processes.   	
	 */
	$.fn.mask = function(label, delay){
		$(this).each(function() {
			if(delay !== undefined && delay > 0) {
		        var element = $(this);
		        element.data("_mask_timeout", setTimeout(function() { $.maskElement(element, label)}, delay));
			} else {
				$.maskElement($(this), label);
			}
		});
	};
	
	/**
	 * Removes mask from the element(s). Accepts both single and multiple selectors.
	 */
	$.fn.unmask = function(delay){
	    if(delay) {
	        var self = this;
	        setTimeout(function() {
	            $(self).each(function() {
	                $.unmaskElement($(self));
	            });
	        }, delay);
	    }else{
		$(this).each(function() {
		    $.unmaskElement($(this));
		});
	   }
	};
	
	/**
	 * Checks if a single element is masked. Returns false if mask is delayed or not displayed. 
	 */
	$.fn.isMasked = function(){
		return this.hasClass("masked");
	};

	$.maskElement = function(element, label){
	
		//if this element has delayed mask scheduled then remove it and display the new one
		if (element.data("_mask_timeout") !== undefined) {
			clearTimeout(element.data("_mask_timeout"));
			element.removeData("_mask_timeout");
		}

		if(element.isMasked()) {
			$.unmaskElement(element);
		}
		
		if(element.css("position") == "static") {
			element.addClass("masked-relative");
		}
		
		element.addClass("masked");
		
		var maskDiv = $('<div class="loadmask"></div>');
		
		//auto height fix for IE
		if(navigator.userAgent.toLowerCase().indexOf("msie") > -1){
			maskDiv.height(element.height() + parseInt(element.css("padding-top")) + parseInt(element.css("padding-bottom")));
			maskDiv.width(element.width() + parseInt(element.css("padding-left")) + parseInt(element.css("padding-right")));
		}
		
		//fix for z-index bug with selects in IE6
		if(navigator.userAgent.toLowerCase().indexOf("msie 6") > -1){
			element.find("select").addClass("masked-hidden");
		}
		
		element.append(maskDiv);
		
		if(label !== undefined) {
			var maskMsgDiv = $('<div class="loadmask-msg" style="display:none;"></div>');
			maskMsgDiv.append('<div>' + label + '</div>');
			element.append(maskMsgDiv);
			
			//calculate center position
			maskMsgDiv.css("top", Math.round(element.height() / 2 - (maskMsgDiv.height() - parseInt(maskMsgDiv.css("padding-top")) - parseInt(maskMsgDiv.css("padding-bottom"))) / 2)+"px");
			maskMsgDiv.css("left", Math.round(element.width() / 2 - (maskMsgDiv.width() - parseInt(maskMsgDiv.css("padding-left")) - parseInt(maskMsgDiv.css("padding-right"))) / 2)+"px");
			
			maskMsgDiv.show();
		}
		
	};
	
	$.unmaskElement = function(element){
		//if this element has delayed mask scheduled then remove it
		if (element.data("_mask_timeout") !== undefined) {
			clearTimeout(element.data("_mask_timeout"));
			element.removeData("_mask_timeout");
		}
		
		element.find(".loadmask-msg,.loadmask").remove();
		element.removeClass("masked");
		element.removeClass("masked-relative");
		element.find("select").removeClass("masked-hidden");
	};
 
})(jQuery);;(function($){
$.parser={auto:true,onComplete:function(_1){
},plugins:["draggable","droppable","resizable","pagination","tooltip","linkbutton","menu","menubutton","splitbutton","progressbar","tree","textbox","filebox","combo","combobox","combotree","combogrid","numberbox","validatebox","searchbox","spinner","numberspinner","timespinner","datetimespinner","calendar","datebox","datetimebox","slider","layout","panel","datagrid","propertygrid","treegrid","datalist","tabs","accordion","window","dialog","form"],parse:function(_2){
var aa=[];
for(var i=0;i<$.parser.plugins.length;i++){
var _3=$.parser.plugins[i];
var r=$(".easyui-"+_3,_2);
if(r.length){
if(r[_3]){
r[_3]();
}else{
aa.push({name:_3,jq:r});
}
}
}
if(aa.length&&window.easyloader){
var _4=[];
for(var i=0;i<aa.length;i++){
_4.push(aa[i].name);
}
easyloader.load(_4,function(){
for(var i=0;i<aa.length;i++){
var _5=aa[i].name;
var jq=aa[i].jq;
jq[_5]();
}
$.parser.onComplete.call($.parser,_2);
});
}else{
$.parser.onComplete.call($.parser,_2);
}
},parseValue:function(_6,_7,_8,_9){
_9=_9||0;
var v=$.trim(String(_7||""));
var _a=v.substr(v.length-1,1);
if(_a=="%"){
v=parseInt(v.substr(0,v.length-1));
if(_6.toLowerCase().indexOf("width")>=0){
v=Math.floor((_8.width()-_9)*v/100);
}else{
v=Math.floor((_8.height()-_9)*v/100);
}
}else{
v=parseInt(v)||undefined;
}
return v;
},parseOptions:function(_b,_c){
var t=$(_b);
var _d={};
var s=$.trim(t.attr("data-options"));
if(s){
if(s.substring(0,1)!="{"){
s="{"+s+"}";
}
_d=(new Function("return "+s))();
}
$.map(["width","height","left","top","minWidth","maxWidth","minHeight","maxHeight"],function(p){
var pv=$.trim(_b.style[p]||"");
if(pv){
if(pv.indexOf("%")==-1){
pv=parseInt(pv)||undefined;
}
_d[p]=pv;
}
});
if(_c){
var _e={};
for(var i=0;i<_c.length;i++){
var pp=_c[i];
if(typeof pp=="string"){
_e[pp]=t.attr(pp);
}else{
for(var _f in pp){
var _10=pp[_f];
if(_10=="boolean"){
_e[_f]=t.attr(_f)?(t.attr(_f)=="true"):undefined;
}else{
if(_10=="number"){
_e[_f]=t.attr(_f)=="0"?0:parseFloat(t.attr(_f))||undefined;
}
}
}
}
}
$.extend(_d,_e);
}
return _d;
}};
$(function(){
var d=$("<div style=\"position:absolute;top:-1000px;width:100px;height:100px;padding:5px\"></div>").appendTo("body");
$._boxModel=d.outerWidth()!=100;
d.remove();
if(!window.easyloader&&$.parser.auto){
$.parser.parse();
}
});
$.fn._outerWidth=function(_11){
if(_11==undefined){
if(this[0]==window){
return this.width()||document.body.clientWidth;
}
return this.outerWidth()||0;
}
return this._size("width",_11);
};
$.fn._outerHeight=function(_12){
if(_12==undefined){
if(this[0]==window){
return this.height()||document.body.clientHeight;
}
return this.outerHeight()||0;
}
return this._size("height",_12);
};
$.fn._scrollLeft=function(_13){
if(_13==undefined){
return this.scrollLeft();
}else{
return this.each(function(){
$(this).scrollLeft(_13);
});
}
};
$.fn._propAttr=$.fn.prop||$.fn.attr;
$.fn._size=function(_14,_15){
if(typeof _14=="string"){
if(_14=="clear"){
return this.each(function(){
$(this).css({width:"",minWidth:"",maxWidth:"",height:"",minHeight:"",maxHeight:""});
});
}else{
if(_14=="fit"){
return this.each(function(){
_16(this,this.tagName=="BODY"?$("body"):$(this).parent(),true);
});
}else{
if(_14=="unfit"){
return this.each(function(){
_16(this,$(this).parent(),false);
});
}else{
if(_15==undefined){
return _17(this[0],_14);
}else{
return this.each(function(){
_17(this,_14,_15);
});
}
}
}
}
}else{
return this.each(function(){
_15=_15||$(this).parent();
$.extend(_14,_16(this,_15,_14.fit)||{});
var r1=_18(this,"width",_15,_14);
var r2=_18(this,"height",_15,_14);
if(r1||r2){
$(this).addClass("easyui-fluid");
}else{
$(this).removeClass("easyui-fluid");
}
});
}
function _16(_19,_1a,fit){
if(!_1a.length){
return false;
}
var t=$(_19)[0];
var p=_1a[0];
var _1b=p.fcount||0;
if(fit){
if(!t.fitted){
t.fitted=true;
p.fcount=_1b+1;
$(p).addClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").addClass("panel-fit");
}
}
return {width:($(p).width()||1),height:($(p).height()||1)};
}else{
if(t.fitted){
t.fitted=false;
p.fcount=_1b-1;
if(p.fcount==0){
$(p).removeClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").removeClass("panel-fit");
}
}
}
return false;
}
};
function _18(_1c,_1d,_1e,_1f){
var t=$(_1c);
var p=_1d;
var p1=p.substr(0,1).toUpperCase()+p.substr(1);
var min=$.parser.parseValue("min"+p1,_1f["min"+p1],_1e);
var max=$.parser.parseValue("max"+p1,_1f["max"+p1],_1e);
var val=$.parser.parseValue(p,_1f[p],_1e);
var _20=(String(_1f[p]||"").indexOf("%")>=0?true:false);
if(!isNaN(val)){
var v=Math.min(Math.max(val,min||0),max||99999);
if(!_20){
_1f[p]=v;
}
t._size("min"+p1,"");
t._size("max"+p1,"");
t._size(p,v);
}else{
t._size(p,"");
t._size("min"+p1,min);
t._size("max"+p1,max);
}
return _20||_1f.fit;
};
function _17(_21,_22,_23){
var t=$(_21);
if(_23==undefined){
_23=parseInt(_21.style[_22]);
if(isNaN(_23)){
return undefined;
}
if($._boxModel){
_23+=_24();
}
return _23;
}else{
if(_23===""){
t.css(_22,"");
}else{
if($._boxModel){
_23-=_24();
if(_23<0){
_23=0;
}
}
t.css(_22,_23+"px");
}
}
function _24(){
if(_22.toLowerCase().indexOf("width")>=0){
return t.outerWidth()-t.width();
}else{
return t.outerHeight()-t.height();
}
};
};
};
})(jQuery);
(function($){
var _25=null;
var _26=null;
var _27=false;
function _28(e){
if(e.touches.length!=1){
return;
}
if(!_27){
_27=true;
dblClickTimer=setTimeout(function(){
_27=false;
},500);
}else{
clearTimeout(dblClickTimer);
_27=false;
_29(e,"dblclick");
}
_25=setTimeout(function(){
_29(e,"contextmenu",3);
},1000);
_29(e,"mousedown");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _2a(e){
if(e.touches.length!=1){
return;
}
if(_25){
clearTimeout(_25);
}
_29(e,"mousemove");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _2b(e){
if(_25){
clearTimeout(_25);
}
_29(e,"mouseup");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _29(e,_2c,_2d){
var _2e=new $.Event(_2c);
_2e.pageX=e.changedTouches[0].pageX;
_2e.pageY=e.changedTouches[0].pageY;
_2e.which=_2d||1;
$(e.target).trigger(_2e);
};
if(document.addEventListener){
document.addEventListener("touchstart",_28,true);
document.addEventListener("touchmove",_2a,true);
document.addEventListener("touchend",_2b,true);
}
})(jQuery);
(function($){
function _2f(e){
var _30=$.data(e.data.target,"draggable");
var _31=_30.options;
var _32=_30.proxy;
var _33=e.data;
var _34=_33.startLeft+e.pageX-_33.startX;
var top=_33.startTop+e.pageY-_33.startY;
if(_32){
if(_32.parent()[0]==document.body){
if(_31.deltaX!=null&&_31.deltaX!=undefined){
_34=e.pageX+_31.deltaX;
}else{
_34=e.pageX-e.data.offsetWidth;
}
if(_31.deltaY!=null&&_31.deltaY!=undefined){
top=e.pageY+_31.deltaY;
}else{
top=e.pageY-e.data.offsetHeight;
}
}else{
if(_31.deltaX!=null&&_31.deltaX!=undefined){
_34+=e.data.offsetWidth+_31.deltaX;
}
if(_31.deltaY!=null&&_31.deltaY!=undefined){
top+=e.data.offsetHeight+_31.deltaY;
}
}
}
if(e.data.parent!=document.body){
_34+=$(e.data.parent).scrollLeft();
top+=$(e.data.parent).scrollTop();
}
if(_31.axis=="h"){
_33.left=_34;
}else{
if(_31.axis=="v"){
_33.top=top;
}else{
_33.left=_34;
_33.top=top;
}
}
};
function _35(e){
var _36=$.data(e.data.target,"draggable");
var _37=_36.options;
var _38=_36.proxy;
if(!_38){
_38=$(e.data.target);
}
_38.css({left:e.data.left,top:e.data.top});
$("body").css("cursor",_37.cursor);
};
function _39(e){
if(!$.fn.draggable.isDragging){
return false;
}
var _3a=$.data(e.data.target,"draggable");
var _3b=_3a.options;
var _3c=$(".droppable").filter(function(){
return e.data.target!=this;
}).filter(function(){
var _3d=$.data(this,"droppable").options.accept;
if(_3d){
return $(_3d).filter(function(){
return this==e.data.target;
}).length>0;
}else{
return true;
}
});
_3a.droppables=_3c;
var _3e=_3a.proxy;
if(!_3e){
if(_3b.proxy){
if(_3b.proxy=="clone"){
_3e=$(e.data.target).clone().insertAfter(e.data.target);
}else{
_3e=_3b.proxy.call(e.data.target,e.data.target);
}
_3a.proxy=_3e;
}else{
_3e=$(e.data.target);
}
}
_3e.css("position","absolute");
_2f(e);
_35(e);
_3b.onStartDrag.call(e.data.target,e);
return false;
};
function _3f(e){
if(!$.fn.draggable.isDragging){
return false;
}
var _40=$.data(e.data.target,"draggable");
_2f(e);
if(_40.options.onDrag.call(e.data.target,e)!=false){
_35(e);
}
var _41=e.data.target;
_40.droppables.each(function(){
var _42=$(this);
if(_42.droppable("options").disabled){
return;
}
var p2=_42.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_42.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_42.outerHeight()){
if(!this.entered){
$(this).trigger("_dragenter",[_41]);
this.entered=true;
}
$(this).trigger("_dragover",[_41]);
}else{
if(this.entered){
$(this).trigger("_dragleave",[_41]);
this.entered=false;
}
}
});
return false;
};
function _43(e){
if(!$.fn.draggable.isDragging){
_44();
return false;
}
_3f(e);
var _45=$.data(e.data.target,"draggable");
var _46=_45.proxy;
var _47=_45.options;
if(_47.revert){
if(_48()==true){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}else{
if(_46){
var _49,top;
if(_46.parent()[0]==document.body){
_49=e.data.startX-e.data.offsetWidth;
top=e.data.startY-e.data.offsetHeight;
}else{
_49=e.data.startLeft;
top=e.data.startTop;
}
_46.animate({left:_49,top:top},function(){
_4a();
});
}else{
$(e.data.target).animate({left:e.data.startLeft,top:e.data.startTop},function(){
$(e.data.target).css("position",e.data.startPosition);
});
}
}
}else{
$(e.data.target).css({position:"absolute",left:e.data.left,top:e.data.top});
_48();
}
_47.onStopDrag.call(e.data.target,e);
_44();
function _4a(){
if(_46){
_46.remove();
}
_45.proxy=null;
};
function _48(){
var _4b=false;
_45.droppables.each(function(){
var _4c=$(this);
if(_4c.droppable("options").disabled){
return;
}
var p2=_4c.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_4c.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_4c.outerHeight()){
if(_47.revert){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}
$(this).trigger("_drop",[e.data.target]);
_4a();
_4b=true;
this.entered=false;
return false;
}
});
if(!_4b&&!_47.revert){
_4a();
}
return _4b;
};
return false;
};
function _44(){
if($.fn.draggable.timer){
clearTimeout($.fn.draggable.timer);
$.fn.draggable.timer=undefined;
}
$(document).unbind(".draggable");
$.fn.draggable.isDragging=false;
setTimeout(function(){
$("body").css("cursor","");
},100);
};
$.fn.draggable=function(_4d,_4e){
if(typeof _4d=="string"){
return $.fn.draggable.methods[_4d](this,_4e);
}
return this.each(function(){
var _4f;
var _50=$.data(this,"draggable");
if(_50){
_50.handle.unbind(".draggable");
_4f=$.extend(_50.options,_4d);
}else{
_4f=$.extend({},$.fn.draggable.defaults,$.fn.draggable.parseOptions(this),_4d||{});
}
var _51=_4f.handle?(typeof _4f.handle=="string"?$(_4f.handle,this):_4f.handle):$(this);
$.data(this,"draggable",{options:_4f,handle:_51});
if(_4f.disabled){
$(this).css("cursor","");
return;
}
_51.unbind(".draggable").bind("mousemove.draggable",{target:this},function(e){
if($.fn.draggable.isDragging){
return;
}
var _52=$.data(e.data.target,"draggable").options;
if(_53(e)){
$(this).css("cursor",_52.cursor);
}else{
$(this).css("cursor","");
}
}).bind("mouseleave.draggable",{target:this},function(e){
$(this).css("cursor","");
}).bind("mousedown.draggable",{target:this},function(e){
if(_53(e)==false){
return;
}
$(this).css("cursor","");
var _54=$(e.data.target).position();
var _55=$(e.data.target).offset();
var _56={startPosition:$(e.data.target).css("position"),startLeft:_54.left,startTop:_54.top,left:_54.left,top:_54.top,startX:e.pageX,startY:e.pageY,offsetWidth:(e.pageX-_55.left),offsetHeight:(e.pageY-_55.top),target:e.data.target,parent:$(e.data.target).parent()[0]};
$.extend(e.data,_56);
var _57=$.data(e.data.target,"draggable").options;
if(_57.onBeforeDrag.call(e.data.target,e)==false){
return;
}
$(document).bind("mousedown.draggable",e.data,_39);
$(document).bind("mousemove.draggable",e.data,_3f);
$(document).bind("mouseup.draggable",e.data,_43);
$.fn.draggable.timer=setTimeout(function(){
$.fn.draggable.isDragging=true;
_39(e);
},_57.delay);
return false;
});
function _53(e){
var _58=$.data(e.data.target,"draggable");
var _59=_58.handle;
var _5a=$(_59).offset();
var _5b=$(_59).outerWidth();
var _5c=$(_59).outerHeight();
var t=e.pageY-_5a.top;
var r=_5a.left+_5b-e.pageX;
var b=_5a.top+_5c-e.pageY;
var l=e.pageX-_5a.left;
return Math.min(t,r,b,l)>_58.options.edge;
};
});
};
$.fn.draggable.methods={options:function(jq){
return $.data(jq[0],"draggable").options;
},proxy:function(jq){
return $.data(jq[0],"draggable").proxy;
},enable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:true});
});
}};
$.fn.draggable.parseOptions=function(_5d){
var t=$(_5d);
return $.extend({},$.parser.parseOptions(_5d,["cursor","handle","axis",{"revert":"boolean","deltaX":"number","deltaY":"number","edge":"number","delay":"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.draggable.defaults={proxy:null,revert:false,cursor:"move",deltaX:null,deltaY:null,handle:null,disabled:false,edge:0,axis:null,delay:100,onBeforeDrag:function(e){
},onStartDrag:function(e){
},onDrag:function(e){
},onStopDrag:function(e){
}};
$.fn.draggable.isDragging=false;
})(jQuery);
(function($){
function _5e(_5f){
$(_5f).addClass("droppable");
$(_5f).bind("_dragenter",function(e,_60){
$.data(_5f,"droppable").options.onDragEnter.apply(_5f,[e,_60]);
});
$(_5f).bind("_dragleave",function(e,_61){
$.data(_5f,"droppable").options.onDragLeave.apply(_5f,[e,_61]);
});
$(_5f).bind("_dragover",function(e,_62){
$.data(_5f,"droppable").options.onDragOver.apply(_5f,[e,_62]);
});
$(_5f).bind("_drop",function(e,_63){
$.data(_5f,"droppable").options.onDrop.apply(_5f,[e,_63]);
});
};
$.fn.droppable=function(_64,_65){
if(typeof _64=="string"){
return $.fn.droppable.methods[_64](this,_65);
}
_64=_64||{};
return this.each(function(){
var _66=$.data(this,"droppable");
if(_66){
$.extend(_66.options,_64);
}else{
_5e(this);
$.data(this,"droppable",{options:$.extend({},$.fn.droppable.defaults,$.fn.droppable.parseOptions(this),_64)});
}
});
};
$.fn.droppable.methods={options:function(jq){
return $.data(jq[0],"droppable").options;
},enable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:true});
});
}};
$.fn.droppable.parseOptions=function(_67){
var t=$(_67);
return $.extend({},$.parser.parseOptions(_67,["accept"]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.droppable.defaults={accept:null,disabled:false,onDragEnter:function(e,_68){
},onDragOver:function(e,_69){
},onDragLeave:function(e,_6a){
},onDrop:function(e,_6b){
}};
})(jQuery);
(function($){
$.fn.resizable=function(_6c,_6d){
if(typeof _6c=="string"){
return $.fn.resizable.methods[_6c](this,_6d);
}
function _6e(e){
var _6f=e.data;
var _70=$.data(_6f.target,"resizable").options;
if(_6f.dir.indexOf("e")!=-1){
var _71=_6f.startWidth+e.pageX-_6f.startX;
_71=Math.min(Math.max(_71,_70.minWidth),_70.maxWidth);
_6f.width=_71;
}
if(_6f.dir.indexOf("s")!=-1){
var _72=_6f.startHeight+e.pageY-_6f.startY;
_72=Math.min(Math.max(_72,_70.minHeight),_70.maxHeight);
_6f.height=_72;
}
if(_6f.dir.indexOf("w")!=-1){
var _71=_6f.startWidth-e.pageX+_6f.startX;
_71=Math.min(Math.max(_71,_70.minWidth),_70.maxWidth);
_6f.width=_71;
_6f.left=_6f.startLeft+_6f.startWidth-_6f.width;
}
if(_6f.dir.indexOf("n")!=-1){
var _72=_6f.startHeight-e.pageY+_6f.startY;
_72=Math.min(Math.max(_72,_70.minHeight),_70.maxHeight);
_6f.height=_72;
_6f.top=_6f.startTop+_6f.startHeight-_6f.height;
}
};
function _73(e){
var _74=e.data;
var t=$(_74.target);
t.css({left:_74.left,top:_74.top});
if(t.outerWidth()!=_74.width){
t._outerWidth(_74.width);
}
if(t.outerHeight()!=_74.height){
t._outerHeight(_74.height);
}
};
function _75(e){
$.fn.resizable.isResizing=true;
$.data(e.data.target,"resizable").options.onStartResize.call(e.data.target,e);
return false;
};
function _76(e){
_6e(e);
if($.data(e.data.target,"resizable").options.onResize.call(e.data.target,e)!=false){
_73(e);
}
return false;
};
function _77(e){
$.fn.resizable.isResizing=false;
_6e(e,true);
_73(e);
$.data(e.data.target,"resizable").options.onStopResize.call(e.data.target,e);
$(document).unbind(".resizable");
$("body").css("cursor","");
return false;
};
return this.each(function(){
var _78=null;
var _79=$.data(this,"resizable");
if(_79){
$(this).unbind(".resizable");
_78=$.extend(_79.options,_6c||{});
}else{
_78=$.extend({},$.fn.resizable.defaults,$.fn.resizable.parseOptions(this),_6c||{});
$.data(this,"resizable",{options:_78});
}
if(_78.disabled==true){
return;
}
$(this).bind("mousemove.resizable",{target:this},function(e){
if($.fn.resizable.isResizing){
return;
}
var dir=_7a(e);
if(dir==""){
$(e.data.target).css("cursor","");
}else{
$(e.data.target).css("cursor",dir+"-resize");
}
}).bind("mouseleave.resizable",{target:this},function(e){
$(e.data.target).css("cursor","");
}).bind("mousedown.resizable",{target:this},function(e){
var dir=_7a(e);
if(dir==""){
return;
}
function _7b(css){
var val=parseInt($(e.data.target).css(css));
if(isNaN(val)){
return 0;
}else{
return val;
}
};
var _7c={target:e.data.target,dir:dir,startLeft:_7b("left"),startTop:_7b("top"),left:_7b("left"),top:_7b("top"),startX:e.pageX,startY:e.pageY,startWidth:$(e.data.target).outerWidth(),startHeight:$(e.data.target).outerHeight(),width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),deltaWidth:$(e.data.target).outerWidth()-$(e.data.target).width(),deltaHeight:$(e.data.target).outerHeight()-$(e.data.target).height()};
$(document).bind("mousedown.resizable",_7c,_75);
$(document).bind("mousemove.resizable",_7c,_76);
$(document).bind("mouseup.resizable",_7c,_77);
$("body").css("cursor",dir+"-resize");
});
function _7a(e){
var tt=$(e.data.target);
var dir="";
var _7d=tt.offset();
var _7e=tt.outerWidth();
var _7f=tt.outerHeight();
var _80=_78.edge;
if(e.pageY>_7d.top&&e.pageY<_7d.top+_80){
dir+="n";
}else{
if(e.pageY<_7d.top+_7f&&e.pageY>_7d.top+_7f-_80){
dir+="s";
}
}
if(e.pageX>_7d.left&&e.pageX<_7d.left+_80){
dir+="w";
}else{
if(e.pageX<_7d.left+_7e&&e.pageX>_7d.left+_7e-_80){
dir+="e";
}
}
var _81=_78.handles.split(",");
for(var i=0;i<_81.length;i++){
var _82=_81[i].replace(/(^\s*)|(\s*$)/g,"");
if(_82=="all"||_82==dir){
return dir;
}
}
return "";
};
});
};
$.fn.resizable.methods={options:function(jq){
return $.data(jq[0],"resizable").options;
},enable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:true});
});
}};
$.fn.resizable.parseOptions=function(_83){
var t=$(_83);
return $.extend({},$.parser.parseOptions(_83,["handles",{minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number",edge:"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.resizable.defaults={disabled:false,handles:"n, e, s, w, ne, se, sw, nw, all",minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000,edge:5,onStartResize:function(e){
},onResize:function(e){
},onStopResize:function(e){
}};
$.fn.resizable.isResizing=false;
})(jQuery);
(function($){
function _84(_85,_86){
var _87=$.data(_85,"linkbutton").options;
if(_86){
$.extend(_87,_86);
}
if(_87.width||_87.height||_87.fit){
var btn=$(_85);
var _88=btn.parent();
var _89=btn.is(":visible");
if(!_89){
var _8a=$("<div style=\"display:none\"></div>").insertBefore(_85);
var _8b={position:btn.css("position"),display:btn.css("display"),left:btn.css("left")};
btn.appendTo("body");
btn.css({position:"absolute",display:"inline-block",left:-20000});
}
btn._size(_87,_88);
var _8c=btn.find(".l-btn-left");
_8c.css("margin-top",0);
_8c.css("margin-top",parseInt((btn.height()-_8c.height())/2)+"px");
if(!_89){
btn.insertAfter(_8a);
btn.css(_8b);
_8a.remove();
}
}
};
function _8d(_8e){
var _8f=$.data(_8e,"linkbutton").options;
var t=$(_8e).empty();
t.addClass("l-btn").removeClass("l-btn-plain l-btn-selected l-btn-plain-selected l-btn-outline");
t.removeClass("l-btn-small l-btn-medium l-btn-large").addClass("l-btn-"+_8f.size);
if(_8f.plain){
t.addClass("l-btn-plain");
}
if(_8f.outline){
t.addClass("l-btn-outline");
}
if(_8f.selected){
t.addClass(_8f.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");
}
t.attr("group",_8f.group||"");
t.attr("id",_8f.id||"");
var _90=$("<span class=\"l-btn-left\"></span>").appendTo(t);
if(_8f.text){
$("<span class=\"l-btn-text\"></span>").html(_8f.text).appendTo(_90);
}else{
$("<span class=\"l-btn-text l-btn-empty\">&nbsp;</span>").appendTo(_90);
}
if(_8f.iconCls){
$("<span class=\"l-btn-icon\">&nbsp;</span>").addClass(_8f.iconCls).appendTo(_90);
_90.addClass("l-btn-icon-"+_8f.iconAlign);
}
t.unbind(".linkbutton").bind("focus.linkbutton",function(){
if(!_8f.disabled){
$(this).addClass("l-btn-focus");
}
}).bind("blur.linkbutton",function(){
$(this).removeClass("l-btn-focus");
}).bind("click.linkbutton",function(){
if(!_8f.disabled){
if(_8f.toggle){
if(_8f.selected){
$(this).linkbutton("unselect");
}else{
$(this).linkbutton("select");
}
}
_8f.onClick.call(this);
}
});
_91(_8e,_8f.selected);
_92(_8e,_8f.disabled);
};
function _91(_93,_94){
var _95=$.data(_93,"linkbutton").options;
if(_94){
if(_95.group){
$("a.l-btn[group=\""+_95.group+"\"]").each(function(){
var o=$(this).linkbutton("options");
if(o.toggle){
$(this).removeClass("l-btn-selected l-btn-plain-selected");
o.selected=false;
}
});
}
$(_93).addClass(_95.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");
_95.selected=true;
}else{
if(!_95.group){
$(_93).removeClass("l-btn-selected l-btn-plain-selected");
_95.selected=false;
}
}
};
function _92(_96,_97){
var _98=$.data(_96,"linkbutton");
var _99=_98.options;
$(_96).removeClass("l-btn-disabled l-btn-plain-disabled");
if(_97){
_99.disabled=true;
var _9a=$(_96).attr("href");
if(_9a){
_98.href=_9a;
$(_96).attr("href","javascript:void(0)");
}
if(_96.onclick){
_98.onclick=_96.onclick;
_96.onclick=null;
}
_99.plain?$(_96).addClass("l-btn-disabled l-btn-plain-disabled"):$(_96).addClass("l-btn-disabled");
}else{
_99.disabled=false;
if(_98.href){
$(_96).attr("href",_98.href);
}
if(_98.onclick){
_96.onclick=_98.onclick;
}
}
};
$.fn.linkbutton=function(_9b,_9c){
if(typeof _9b=="string"){
return $.fn.linkbutton.methods[_9b](this,_9c);
}
_9b=_9b||{};
return this.each(function(){
var _9d=$.data(this,"linkbutton");
if(_9d){
$.extend(_9d.options,_9b);
}else{
$.data(this,"linkbutton",{options:$.extend({},$.fn.linkbutton.defaults,$.fn.linkbutton.parseOptions(this),_9b)});
$(this).removeAttr("disabled");
$(this).bind("_resize",function(e,_9e){
if($(this).hasClass("easyui-fluid")||_9e){
_84(this);
}
return false;
});
}
_8d(this);
_84(this);
});
};
$.fn.linkbutton.methods={options:function(jq){
return $.data(jq[0],"linkbutton").options;
},resize:function(jq,_9f){
return jq.each(function(){
_84(this,_9f);
});
},enable:function(jq){
return jq.each(function(){
_92(this,false);
});
},disable:function(jq){
return jq.each(function(){
_92(this,true);
});
},select:function(jq){
return jq.each(function(){
_91(this,true);
});
},unselect:function(jq){
return jq.each(function(){
_91(this,false);
});
}};
$.fn.linkbutton.parseOptions=function(_a0){
var t=$(_a0);
return $.extend({},$.parser.parseOptions(_a0,["id","iconCls","iconAlign","group","size",{plain:"boolean",toggle:"boolean",selected:"boolean",outline:"boolean"}]),{disabled:(t.attr("disabled")?true:undefined),text:$.trim(t.html()),iconCls:(t.attr("icon")||t.attr("iconCls"))});
};
$.fn.linkbutton.defaults={id:null,disabled:false,toggle:false,selected:false,outline:false,group:null,plain:false,text:"",iconCls:null,iconAlign:"left",size:"small",onClick:function(){
}};
})(jQuery);
(function($){
function _a1(_a2){
var _a3=$.data(_a2,"pagination");
var _a4=_a3.options;
var bb=_a3.bb={};
var _a5=$(_a2).addClass("pagination").html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr></tr></table>");
var tr=_a5.find("tr");
var aa=$.extend([],_a4.layout);
if(!_a4.showPageList){
_a6(aa,"list");
}
if(!_a4.showRefresh){
_a6(aa,"refresh");
}
if(aa[0]=="sep"){
aa.shift();
}
if(aa[aa.length-1]=="sep"){
aa.pop();
}
for(var _a7=0;_a7<aa.length;_a7++){
var _a8=aa[_a7];
if(_a8=="list"){
var ps=$("<select class=\"pagination-page-list\"></select>");
ps.bind("change",function(){
_a4.pageSize=parseInt($(this).val());
_a4.onChangePageSize.call(_a2,_a4.pageSize);
_ae(_a2,_a4.pageNumber);
});
for(var i=0;i<_a4.pageList.length;i++){
$("<option></option>").text(_a4.pageList[i]).appendTo(ps);
}
$("<td></td>").append(ps).appendTo(tr);
}else{
if(_a8=="sep"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
if(_a8=="first"){
bb.first=_a9("first");
}else{
if(_a8=="prev"){
bb.prev=_a9("prev");
}else{
if(_a8=="next"){
bb.next=_a9("next");
}else{
if(_a8=="last"){
bb.last=_a9("last");
}else{
if(_a8=="manual"){
$("<span style=\"padding-left:6px;\"></span>").html(_a4.beforePageText).appendTo(tr).wrap("<td></td>");
bb.num=$("<input class=\"pagination-num\" type=\"text\" value=\"1\" size=\"2\">").appendTo(tr).wrap("<td></td>");
bb.num.unbind(".pagination").bind("keydown.pagination",function(e){
if(e.keyCode==13){
var _aa=parseInt($(this).val())||1;
_ae(_a2,_aa);
return false;
}
});
bb.after=$("<span style=\"padding-right:6px;\"></span>").appendTo(tr).wrap("<td></td>");
}else{
if(_a8=="refresh"){
bb.refresh=_a9("refresh");
}else{
if(_a8=="links"){
$("<td class=\"pagination-links\"></td>").appendTo(tr);
}
}
}
}
}
}
}
}
}
}
if(_a4.buttons){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
if($.isArray(_a4.buttons)){
for(var i=0;i<_a4.buttons.length;i++){
var btn=_a4.buttons[i];
if(btn=="-"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var a=$("<a href=\"javascript:void(0)\"></a>").appendTo(td);
a[0].onclick=eval(btn.handler||function(){
});
a.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
var td=$("<td></td>").appendTo(tr);
$(_a4.buttons).appendTo(td).show();
}
}
$("<div class=\"pagination-info\"></div>").appendTo(_a5);
$("<div style=\"clear:both;\"></div>").appendTo(_a5);
function _a9(_ab){
var btn=_a4.nav[_ab];
var a=$("<a href=\"javascript:void(0)\"></a>").appendTo(tr);
a.wrap("<td></td>");
a.linkbutton({iconCls:btn.iconCls,plain:true}).unbind(".pagination").bind("click.pagination",function(){
btn.handler.call(_a2);
});
return a;
};
function _a6(aa,_ac){
var _ad=$.inArray(_ac,aa);
if(_ad>=0){
aa.splice(_ad,1);
}
return aa;
};
};
function _ae(_af,_b0){
var _b1=$.data(_af,"pagination").options;
_b2(_af,{pageNumber:_b0});
_b1.onSelectPage.call(_af,_b1.pageNumber,_b1.pageSize);
};
function _b2(_b3,_b4){
var _b5=$.data(_b3,"pagination");
var _b6=_b5.options;
var bb=_b5.bb;
$.extend(_b6,_b4||{});
var ps=$(_b3).find("select.pagination-page-list");
if(ps.length){
ps.val(_b6.pageSize+"");
_b6.pageSize=parseInt(ps.val());
}
var _b7=Math.ceil(_b6.total/_b6.pageSize)||1;
if(_b6.pageNumber<1){
_b6.pageNumber=1;
}
if(_b6.pageNumber>_b7){
_b6.pageNumber=_b7;
}
if(_b6.total==0){
_b6.pageNumber=0;
_b7=0;
}
if(bb.num){
bb.num.val(_b6.pageNumber);
}
if(bb.after){
bb.after.html(_b6.afterPageText.replace(/{pages}/,_b7));
}
var td=$(_b3).find("td.pagination-links");
if(td.length){
td.empty();
var _b8=_b6.pageNumber-Math.floor(_b6.links/2);
if(_b8<1){
_b8=1;
}
var _b9=_b8+_b6.links-1;
if(_b9>_b7){
_b9=_b7;
}
_b8=_b9-_b6.links+1;
if(_b8<1){
_b8=1;
}
for(var i=_b8;i<=_b9;i++){
var a=$("<a class=\"pagination-link\" href=\"javascript:void(0)\"></a>").appendTo(td);
a.linkbutton({plain:true,text:i});
if(i==_b6.pageNumber){
a.linkbutton("select");
}else{
a.unbind(".pagination").bind("click.pagination",{pageNumber:i},function(e){
_ae(_b3,e.data.pageNumber);
});
}
}
}
var _ba=_b6.displayMsg;
_ba=_ba.replace(/{from}/,_b6.total==0?0:_b6.pageSize*(_b6.pageNumber-1)+1);
_ba=_ba.replace(/{to}/,Math.min(_b6.pageSize*(_b6.pageNumber),_b6.total));
_ba=_ba.replace(/{total}/,_b6.total);
$(_b3).find("div.pagination-info").html(_ba);
if(bb.first){
bb.first.linkbutton({disabled:((!_b6.total)||_b6.pageNumber==1)});
}
if(bb.prev){
bb.prev.linkbutton({disabled:((!_b6.total)||_b6.pageNumber==1)});
}
if(bb.next){
bb.next.linkbutton({disabled:(_b6.pageNumber==_b7)});
}
if(bb.last){
bb.last.linkbutton({disabled:(_b6.pageNumber==_b7)});
}
_bb(_b3,_b6.loading);
};
function _bb(_bc,_bd){
var _be=$.data(_bc,"pagination");
var _bf=_be.options;
_bf.loading=_bd;
if(_bf.showRefresh&&_be.bb.refresh){
_be.bb.refresh.linkbutton({iconCls:(_bf.loading?"pagination-loading":"pagination-load")});
}
};
$.fn.pagination=function(_c0,_c1){
if(typeof _c0=="string"){
return $.fn.pagination.methods[_c0](this,_c1);
}
_c0=_c0||{};
return this.each(function(){
var _c2;
var _c3=$.data(this,"pagination");
if(_c3){
_c2=$.extend(_c3.options,_c0);
}else{
_c2=$.extend({},$.fn.pagination.defaults,$.fn.pagination.parseOptions(this),_c0);
$.data(this,"pagination",{options:_c2});
}
_a1(this);
_b2(this);
});
};
$.fn.pagination.methods={options:function(jq){
return $.data(jq[0],"pagination").options;
},loading:function(jq){
return jq.each(function(){
_bb(this,true);
});
},loaded:function(jq){
return jq.each(function(){
_bb(this,false);
});
},refresh:function(jq,_c4){
return jq.each(function(){
_b2(this,_c4);
});
},select:function(jq,_c5){
return jq.each(function(){
_ae(this,_c5);
});
}};
$.fn.pagination.parseOptions=function(_c6){
var t=$(_c6);
return $.extend({},$.parser.parseOptions(_c6,[{total:"number",pageSize:"number",pageNumber:"number",links:"number"},{loading:"boolean",showPageList:"boolean",showRefresh:"boolean"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined)});
};
$.fn.pagination.defaults={total:1,pageSize:10,pageNumber:1,pageList:[10,20,30,50],loading:false,buttons:null,showPageList:true,showRefresh:true,links:10,layout:["list","sep","first","prev","sep","manual","sep","next","last","sep","refresh"],onSelectPage:function(_c7,_c8){
},onBeforeRefresh:function(_c9,_ca){
},onRefresh:function(_cb,_cc){
},onChangePageSize:function(_cd){
},beforePageText:"Page",afterPageText:"of {pages}",displayMsg:"Displaying {from} to {to} of {total} items",nav:{first:{iconCls:"pagination-first",handler:function(){
var _ce=$(this).pagination("options");
if(_ce.pageNumber>1){
$(this).pagination("select",1);
}
}},prev:{iconCls:"pagination-prev",handler:function(){
var _cf=$(this).pagination("options");
if(_cf.pageNumber>1){
$(this).pagination("select",_cf.pageNumber-1);
}
}},next:{iconCls:"pagination-next",handler:function(){
var _d0=$(this).pagination("options");
var _d1=Math.ceil(_d0.total/_d0.pageSize);
if(_d0.pageNumber<_d1){
$(this).pagination("select",_d0.pageNumber+1);
}
}},last:{iconCls:"pagination-last",handler:function(){
var _d2=$(this).pagination("options");
var _d3=Math.ceil(_d2.total/_d2.pageSize);
if(_d2.pageNumber<_d3){
$(this).pagination("select",_d3);
}
}},refresh:{iconCls:"pagination-refresh",handler:function(){
var _d4=$(this).pagination("options");
if(_d4.onBeforeRefresh.call(this,_d4.pageNumber,_d4.pageSize)!=false){
$(this).pagination("select",_d4.pageNumber);
_d4.onRefresh.call(this,_d4.pageNumber,_d4.pageSize);
}
}}}};
})(jQuery);
(function($){
function _d5(_d6){
var _d7=$(_d6);
_d7.addClass("tree");
return _d7;
};
function _d8(_d9){
var _da=$.data(_d9,"tree").options;
$(_d9).unbind().bind("mouseover",function(e){
var tt=$(e.target);
var _db=tt.closest("div.tree-node");
if(!_db.length){
return;
}
_db.addClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.addClass("tree-expanded-hover");
}else{
tt.addClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("mouseout",function(e){
var tt=$(e.target);
var _dc=tt.closest("div.tree-node");
if(!_dc.length){
return;
}
_dc.removeClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.removeClass("tree-expanded-hover");
}else{
tt.removeClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("click",function(e){
var tt=$(e.target);
var _dd=tt.closest("div.tree-node");
if(!_dd.length){
return;
}
if(tt.hasClass("tree-hit")){
_144(_d9,_dd[0]);
return false;
}else{
if(tt.hasClass("tree-checkbox")){
_104(_d9,_dd[0]);
return false;
}else{
_18a(_d9,_dd[0]);
_da.onClick.call(_d9,_e0(_d9,_dd[0]));
}
}
e.stopPropagation();
}).bind("dblclick",function(e){
var _de=$(e.target).closest("div.tree-node");
if(!_de.length){
return;
}
_18a(_d9,_de[0]);
_da.onDblClick.call(_d9,_e0(_d9,_de[0]));
e.stopPropagation();
}).bind("contextmenu",function(e){
var _df=$(e.target).closest("div.tree-node");
if(!_df.length){
return;
}
_da.onContextMenu.call(_d9,e,_e0(_d9,_df[0]));
e.stopPropagation();
});
};
function _e1(_e2){
var _e3=$.data(_e2,"tree").options;
_e3.dnd=false;
var _e4=$(_e2).find("div.tree-node");
_e4.draggable("disable");
_e4.css("cursor","pointer");
};
function _e5(_e6){
var _e7=$.data(_e6,"tree");
var _e8=_e7.options;
var _e9=_e7.tree;
_e7.disabledNodes=[];
_e8.dnd=true;
_e9.find("div.tree-node").draggable({disabled:false,revert:true,cursor:"pointer",proxy:function(_ea){
var p=$("<div class=\"tree-node-proxy\"></div>").appendTo("body");
p.html("<span class=\"tree-dnd-icon tree-dnd-no\">&nbsp;</span>"+$(_ea).find(".tree-title").html());
p.hide();
return p;
},deltaX:15,deltaY:15,onBeforeDrag:function(e){
if(_e8.onBeforeDrag.call(_e6,_e0(_e6,this))==false){
return false;
}
if($(e.target).hasClass("tree-hit")||$(e.target).hasClass("tree-checkbox")){
return false;
}
if(e.which!=1){
return false;
}
$(this).next("ul").find("div.tree-node").droppable({accept:"no-accept"});
var _eb=$(this).find("span.tree-indent");
if(_eb.length){
e.data.offsetWidth-=_eb.length*_eb.width();
}
},onStartDrag:function(){
$(this).draggable("proxy").css({left:-10000,top:-10000});
_e8.onStartDrag.call(_e6,_e0(_e6,this));
var _ec=_e0(_e6,this);
if(_ec.id==undefined){
_ec.id="easyui_tree_node_id_temp";
_127(_e6,_ec);
}
_e7.draggingNodeId=_ec.id;
},onDrag:function(e){
var x1=e.pageX,y1=e.pageY,x2=e.data.startX,y2=e.data.startY;
var d=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
if(d>3){
$(this).draggable("proxy").show();
}
this.pageY=e.pageY;
},onStopDrag:function(){
$(this).next("ul").find("div.tree-node").droppable({accept:"div.tree-node"});
for(var i=0;i<_e7.disabledNodes.length;i++){
$(_e7.disabledNodes[i]).droppable("enable");
}
_e7.disabledNodes=[];
var _ed=_182(_e6,_e7.draggingNodeId);
if(_ed&&_ed.id=="easyui_tree_node_id_temp"){
_ed.id="";
_127(_e6,_ed);
}
_e8.onStopDrag.call(_e6,_ed);
}}).droppable({accept:"div.tree-node",onDragEnter:function(e,_ee){
if(_e8.onDragEnter.call(_e6,this,_ef(_ee))==false){
_f0(_ee,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_e7.disabledNodes.push(this);
}
},onDragOver:function(e,_f1){
if($(this).droppable("options").disabled){
return;
}
var _f2=_f1.pageY;
var top=$(this).offset().top;
var _f3=top+$(this).outerHeight();
_f0(_f1,true);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
if(_f2>top+(_f3-top)/2){
if(_f3-_f2<5){
$(this).addClass("tree-node-bottom");
}else{
$(this).addClass("tree-node-append");
}
}else{
if(_f2-top<5){
$(this).addClass("tree-node-top");
}else{
$(this).addClass("tree-node-append");
}
}
if(_e8.onDragOver.call(_e6,this,_ef(_f1))==false){
_f0(_f1,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_e7.disabledNodes.push(this);
}
},onDragLeave:function(e,_f4){
_f0(_f4,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
_e8.onDragLeave.call(_e6,this,_ef(_f4));
},onDrop:function(e,_f5){
var _f6=this;
var _f7,_f8;
if($(this).hasClass("tree-node-append")){
_f7=_f9;
_f8="append";
}else{
_f7=_fa;
_f8=$(this).hasClass("tree-node-top")?"top":"bottom";
}
if(_e8.onBeforeDrop.call(_e6,_f6,_ef(_f5),_f8)==false){
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
return;
}
_f7(_f5,_f6,_f8);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
}});
function _ef(_fb,pop){
return $(_fb).closest("ul.tree").tree(pop?"pop":"getData",_fb);
};
function _f0(_fc,_fd){
var _fe=$(_fc).draggable("proxy").find("span.tree-dnd-icon");
_fe.removeClass("tree-dnd-yes tree-dnd-no").addClass(_fd?"tree-dnd-yes":"tree-dnd-no");
};
function _f9(_ff,dest){
if(_e0(_e6,dest).state=="closed"){
_13c(_e6,dest,function(){
_100();
});
}else{
_100();
}
function _100(){
var node=_ef(_ff,true);
$(_e6).tree("append",{parent:dest,data:[node]});
_e8.onDrop.call(_e6,dest,node,"append");
};
};
function _fa(_101,dest,_102){
var _103={};
if(_102=="top"){
_103.before=dest;
}else{
_103.after=dest;
}
var node=_ef(_101,true);
_103.data=node;
$(_e6).tree("insert",_103);
_e8.onDrop.call(_e6,dest,node,_102);
};
};
function _104(_105,_106,_107){
var _108=$.data(_105,"tree");
var opts=_108.options;
if(!opts.checkbox){
return;
}
var _109=_e0(_105,_106);
if(_107==undefined){
var ck=$(_106).find(".tree-checkbox");
if(ck.hasClass("tree-checkbox1")){
_107=false;
}else{
if(ck.hasClass("tree-checkbox0")){
_107=true;
}else{
if(_109._checked==undefined){
_109._checked=$(_106).find(".tree-checkbox").hasClass("tree-checkbox1");
}
_107=!_109._checked;
}
}
}
_109._checked=_107;
if(opts.onBeforeCheck.call(_105,_109,_107)==false){
return;
}
if(opts.cascadeCheck){
_10a(_109,_107);
_10b(_109,_107);
}else{
_10c($(_109.target),_107?"1":"0");
}
opts.onCheck.call(_105,_109,_107);
function _10c(node,flag){
var ck=node.find(".tree-checkbox");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
ck.addClass("tree-checkbox"+flag);
};
function _10a(_10d,_10e){
if(opts.deepCheck){
var node=$("#"+_10d.domId);
var flag=_10e?"1":"0";
_10c(node,flag);
_10c(node.next(),flag);
}else{
_10f(_10d,_10e);
_12a(_10d.children||[],function(n){
_10f(n,_10e);
});
}
};
function _10f(_110,_111){
if(_110.hidden){
return;
}
var cls="tree-checkbox"+(_111?"1":"0");
var node=$("#"+_110.domId);
_10c(node,_111?"1":"0");
if(_110.children){
for(var i=0;i<_110.children.length;i++){
if(_110.children[i].hidden){
if(!$("#"+_110.children[i].domId).find("."+cls).length){
_10c(node,"2");
var _112=_14f(_105,node[0]);
while(_112){
_10c($(_112.target),"2");
_112=_14f(_105,_112[0]);
}
return;
}
}
}
}
};
function _10b(_113,_114){
var node=$("#"+_113.domId);
var _115=_14f(_105,node[0]);
if(_115){
var flag="";
if(_116(node,true)){
flag="1";
}else{
if(_116(node,false)){
flag="0";
}else{
flag="2";
}
}
_10c($(_115.target),flag);
_10b(_115,_114);
}
};
function _116(node,_117){
var cls="tree-checkbox"+(_117?"1":"0");
var ck=node.find(".tree-checkbox");
if(!ck.hasClass(cls)){
return false;
}
var b=true;
node.parent().siblings().each(function(){
var ck=$(this).children("div.tree-node").children(".tree-checkbox");
if(ck.length&&!ck.hasClass(cls)){
b=false;
return false;
}
});
return b;
};
};
function _118(_119,_11a){
var opts=$.data(_119,"tree").options;
if(!opts.checkbox){
return;
}
var node=$(_11a);
if(_11b(_119,_11a)){
var ck=node.find(".tree-checkbox");
if(ck.length){
if(ck.hasClass("tree-checkbox1")){
_104(_119,_11a,true);
}else{
_104(_119,_11a,false);
}
}else{
if(opts.onlyLeafCheck){
$("<span class=\"tree-checkbox tree-checkbox0\"></span>").insertBefore(node.find(".tree-title"));
}
}
}else{
var ck=node.find(".tree-checkbox");
if(opts.onlyLeafCheck){
ck.remove();
}else{
if(ck.hasClass("tree-checkbox1")){
_104(_119,_11a,true);
}else{
if(ck.hasClass("tree-checkbox2")){
var _11c=true;
var _11d=true;
var _11e=_11f(_119,_11a);
for(var i=0;i<_11e.length;i++){
if(_11e[i].checked){
_11d=false;
}else{
_11c=false;
}
}
if(_11c){
_104(_119,_11a,true);
}
if(_11d){
_104(_119,_11a,false);
}
}
}
}
}
};
function _120(_121,ul,data,_122){
var _123=$.data(_121,"tree");
var opts=_123.options;
var _124=$(ul).prevAll("div.tree-node:first");
data=opts.loadFilter.call(_121,data,_124[0]);
var _125=_126(_121,"domId",_124.attr("id"));
if(!_122){
_125?_125.children=data:_123.data=data;
$(ul).empty();
}else{
if(_125){
_125.children?_125.children=_125.children.concat(data):_125.children=data;
}else{
_123.data=_123.data.concat(data);
}
}
opts.view.render.call(opts.view,_121,ul,data);
if(opts.dnd){
_e5(_121);
}
if(_125){
_127(_121,_125);
}
var _128=[];
var _129=[];
for(var i=0;i<data.length;i++){
var node=data[i];
if(!node.checked){
_128.push(node);
}
}
_12a(data,function(node){
if(node.checked){
_129.push(node);
}
});
var _12b=opts.onCheck;
opts.onCheck=function(){
};
if(_128.length){
_104(_121,$("#"+_128[0].domId)[0],false);
}
for(var i=0;i<_129.length;i++){
_104(_121,$("#"+_129[i].domId)[0],true);
}
opts.onCheck=_12b;
setTimeout(function(){
_12c(_121,_121);
},0);
opts.onLoadSuccess.call(_121,_125,data);
};
function _12c(_12d,ul,_12e){
var opts=$.data(_12d,"tree").options;
if(opts.lines){
$(_12d).addClass("tree-lines");
}else{
$(_12d).removeClass("tree-lines");
return;
}
if(!_12e){
_12e=true;
$(_12d).find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
$(_12d).find("div.tree-node").removeClass("tree-node-last tree-root-first tree-root-one");
var _12f=$(_12d).tree("getRoots");
if(_12f.length>1){
$(_12f[0].target).addClass("tree-root-first");
}else{
if(_12f.length==1){
$(_12f[0].target).addClass("tree-root-one");
}
}
}
$(ul).children("li").each(function(){
var node=$(this).children("div.tree-node");
var ul=node.next("ul");
if(ul.length){
if($(this).next().length){
_130(node);
}
_12c(_12d,ul,_12e);
}else{
_131(node);
}
});
var _132=$(ul).children("li:last").children("div.tree-node").addClass("tree-node-last");
_132.children("span.tree-join").removeClass("tree-join").addClass("tree-joinbottom");
function _131(node,_133){
var icon=node.find("span.tree-icon");
icon.prev("span.tree-indent").addClass("tree-join");
};
function _130(node){
var _134=node.find("span.tree-indent, span.tree-hit").length;
node.next().find("div.tree-node").each(function(){
$(this).children("span:eq("+(_134-1)+")").addClass("tree-line");
});
};
};
function _135(_136,ul,_137,_138){
var opts=$.data(_136,"tree").options;
_137=$.extend({},opts.queryParams,_137||{});
var _139=null;
if(_136!=ul){
var node=$(ul).prev();
_139=_e0(_136,node[0]);
}
if(opts.onBeforeLoad.call(_136,_139,_137)==false){
return;
}
var _13a=$(ul).prev().children("span.tree-folder");
_13a.addClass("tree-loading");
var _13b=opts.loader.call(_136,_137,function(data){
_13a.removeClass("tree-loading");
_120(_136,ul,data);
if(_138){
_138();
}
},function(){
_13a.removeClass("tree-loading");
opts.onLoadError.apply(_136,arguments);
if(_138){
_138();
}
});
if(_13b==false){
_13a.removeClass("tree-loading");
}
};
function _13c(_13d,_13e,_13f){
var opts=$.data(_13d,"tree").options;
var hit=$(_13e).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
var node=_e0(_13d,_13e);
if(opts.onBeforeExpand.call(_13d,node)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var ul=$(_13e).next();
if(ul.length){
if(opts.animate){
ul.slideDown("normal",function(){
node.state="open";
opts.onExpand.call(_13d,node);
if(_13f){
_13f();
}
});
}else{
ul.css("display","block");
node.state="open";
opts.onExpand.call(_13d,node);
if(_13f){
_13f();
}
}
}else{
var _140=$("<ul style=\"display:none\"></ul>").insertAfter(_13e);
_135(_13d,_140[0],{id:node.id},function(){
if(_140.is(":empty")){
_140.remove();
}
if(opts.animate){
_140.slideDown("normal",function(){
node.state="open";
opts.onExpand.call(_13d,node);
if(_13f){
_13f();
}
});
}else{
_140.css("display","block");
node.state="open";
opts.onExpand.call(_13d,node);
if(_13f){
_13f();
}
}
});
}
};
function _141(_142,_143){
var opts=$.data(_142,"tree").options;
var hit=$(_143).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
var node=_e0(_142,_143);
if(opts.onBeforeCollapse.call(_142,node)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
var ul=$(_143).next();
if(opts.animate){
ul.slideUp("normal",function(){
node.state="closed";
opts.onCollapse.call(_142,node);
});
}else{
ul.css("display","none");
node.state="closed";
opts.onCollapse.call(_142,node);
}
};
function _144(_145,_146){
var hit=$(_146).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
_141(_145,_146);
}else{
_13c(_145,_146);
}
};
function _147(_148,_149){
var _14a=_11f(_148,_149);
if(_149){
_14a.unshift(_e0(_148,_149));
}
for(var i=0;i<_14a.length;i++){
_13c(_148,_14a[i].target);
}
};
function _14b(_14c,_14d){
var _14e=[];
var p=_14f(_14c,_14d);
while(p){
_14e.unshift(p);
p=_14f(_14c,p.target);
}
for(var i=0;i<_14e.length;i++){
_13c(_14c,_14e[i].target);
}
};
function _150(_151,_152){
var c=$(_151).parent();
while(c[0].tagName!="BODY"&&c.css("overflow-y")!="auto"){
c=c.parent();
}
var n=$(_152);
var ntop=n.offset().top;
if(c[0].tagName!="BODY"){
var ctop=c.offset().top;
if(ntop<ctop){
c.scrollTop(c.scrollTop()+ntop-ctop);
}else{
if(ntop+n.outerHeight()>ctop+c.outerHeight()-18){
c.scrollTop(c.scrollTop()+ntop+n.outerHeight()-ctop-c.outerHeight()+18);
}
}
}else{
c.scrollTop(ntop);
}
};
function _153(_154,_155){
var _156=_11f(_154,_155);
if(_155){
_156.unshift(_e0(_154,_155));
}
for(var i=0;i<_156.length;i++){
_141(_154,_156[i].target);
}
};
function _157(_158,_159){
var node=$(_159.parent);
var data=_159.data;
if(!data){
return;
}
data=$.isArray(data)?data:[data];
if(!data.length){
return;
}
var ul;
if(node.length==0){
ul=$(_158);
}else{
if(_11b(_158,node[0])){
var _15a=node.find("span.tree-icon");
_15a.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_15a);
if(hit.prev().length){
hit.prev().remove();
}
}
ul=node.next();
if(!ul.length){
ul=$("<ul></ul>").insertAfter(node);
}
}
_120(_158,ul[0],data,true);
_118(_158,ul.prev());
};
function _15b(_15c,_15d){
var ref=_15d.before||_15d.after;
var _15e=_14f(_15c,ref);
var data=_15d.data;
if(!data){
return;
}
data=$.isArray(data)?data:[data];
if(!data.length){
return;
}
_157(_15c,{parent:(_15e?_15e.target:null),data:data});
var _15f=_15e?_15e.children:$(_15c).tree("getRoots");
for(var i=0;i<_15f.length;i++){
if(_15f[i].domId==$(ref).attr("id")){
for(var j=data.length-1;j>=0;j--){
_15f.splice((_15d.before?i:(i+1)),0,data[j]);
}
_15f.splice(_15f.length-data.length,data.length);
break;
}
}
var li=$();
for(var i=0;i<data.length;i++){
li=li.add($("#"+data[i].domId).parent());
}
if(_15d.before){
li.insertBefore($(ref).parent());
}else{
li.insertAfter($(ref).parent());
}
};
function _160(_161,_162){
var _163=del(_162);
$(_162).parent().remove();
if(_163){
if(!_163.children||!_163.children.length){
var node=$(_163.target);
node.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
node.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(node);
node.next().remove();
}
_127(_161,_163);
_118(_161,_163.target);
}
_12c(_161,_161);
function del(_164){
var id=$(_164).attr("id");
var _165=_14f(_161,_164);
var cc=_165?_165.children:$.data(_161,"tree").data;
for(var i=0;i<cc.length;i++){
if(cc[i].domId==id){
cc.splice(i,1);
break;
}
}
return _165;
};
};
function _127(_166,_167){
var opts=$.data(_166,"tree").options;
var node=$(_167.target);
var data=_e0(_166,_167.target);
var _168=data.checked;
if(data.iconCls){
node.find(".tree-icon").removeClass(data.iconCls);
}
$.extend(data,_167);
node.find(".tree-title").html(opts.formatter.call(_166,data));
if(data.iconCls){
node.find(".tree-icon").addClass(data.iconCls);
}
if(_168!=data.checked){
_104(_166,_167.target,data.checked);
}
};
function _169(_16a,_16b){
if(_16b){
var p=_14f(_16a,_16b);
while(p){
_16b=p.target;
p=_14f(_16a,_16b);
}
return _e0(_16a,_16b);
}else{
var _16c=_16d(_16a);
return _16c.length?_16c[0]:null;
}
};
function _16d(_16e){
var _16f=$.data(_16e,"tree").data;
for(var i=0;i<_16f.length;i++){
_170(_16f[i]);
}
return _16f;
};
function _11f(_171,_172){
var _173=[];
var n=_e0(_171,_172);
var data=n?(n.children||[]):$.data(_171,"tree").data;
_12a(data,function(node){
_173.push(_170(node));
});
return _173;
};
function _14f(_174,_175){
var p=$(_175).closest("ul").prevAll("div.tree-node:first");
return _e0(_174,p[0]);
};
function _176(_177,_178){
_178=_178||"checked";
if(!$.isArray(_178)){
_178=[_178];
}
var _179=[];
for(var i=0;i<_178.length;i++){
var s=_178[i];
if(s=="checked"){
_179.push("span.tree-checkbox1");
}else{
if(s=="unchecked"){
_179.push("span.tree-checkbox0");
}else{
if(s=="indeterminate"){
_179.push("span.tree-checkbox2");
}
}
}
}
var _17a=[];
$(_177).find(_179.join(",")).each(function(){
var node=$(this).parent();
_17a.push(_e0(_177,node[0]));
});
return _17a;
};
function _17b(_17c){
var node=$(_17c).find("div.tree-node-selected");
return node.length?_e0(_17c,node[0]):null;
};
function _17d(_17e,_17f){
var data=_e0(_17e,_17f);
if(data&&data.children){
_12a(data.children,function(node){
_170(node);
});
}
return data;
};
function _e0(_180,_181){
return _126(_180,"domId",$(_181).attr("id"));
};
function _182(_183,id){
return _126(_183,"id",id);
};
function _126(_184,_185,_186){
var data=$.data(_184,"tree").data;
var _187=null;
_12a(data,function(node){
if(node[_185]==_186){
_187=_170(node);
return false;
}
});
return _187;
};
function _170(node){
var d=$("#"+node.domId);
node.target=d[0];
node.checked=d.find(".tree-checkbox").hasClass("tree-checkbox1");
return node;
};
function _12a(data,_188){
var _189=[];
for(var i=0;i<data.length;i++){
_189.push(data[i]);
}
while(_189.length){
var node=_189.shift();
if(_188(node)==false){
return;
}
if(node.children){
for(var i=node.children.length-1;i>=0;i--){
_189.unshift(node.children[i]);
}
}
}
};
function _18a(_18b,_18c){
var opts=$.data(_18b,"tree").options;
var node=_e0(_18b,_18c);
if(opts.onBeforeSelect.call(_18b,node)==false){
return;
}
$(_18b).find("div.tree-node-selected").removeClass("tree-node-selected");
$(_18c).addClass("tree-node-selected");
opts.onSelect.call(_18b,node);
};
function _11b(_18d,_18e){
return $(_18e).children("span.tree-hit").length==0;
};
function _18f(_190,_191){
var opts=$.data(_190,"tree").options;
var node=_e0(_190,_191);
if(opts.onBeforeEdit.call(_190,node)==false){
return;
}
$(_191).css("position","relative");
var nt=$(_191).find(".tree-title");
var _192=nt.outerWidth();
nt.empty();
var _193=$("<input class=\"tree-editor\">").appendTo(nt);
_193.val(node.text).focus();
_193.width(_192+20);
_193.height(document.compatMode=="CSS1Compat"?(18-(_193.outerHeight()-_193.height())):18);
_193.bind("click",function(e){
return false;
}).bind("mousedown",function(e){
e.stopPropagation();
}).bind("mousemove",function(e){
e.stopPropagation();
}).bind("keydown",function(e){
if(e.keyCode==13){
_194(_190,_191);
return false;
}else{
if(e.keyCode==27){
_198(_190,_191);
return false;
}
}
}).bind("blur",function(e){
e.stopPropagation();
_194(_190,_191);
});
};
function _194(_195,_196){
var opts=$.data(_195,"tree").options;
$(_196).css("position","");
var _197=$(_196).find("input.tree-editor");
var val=_197.val();
_197.remove();
var node=_e0(_195,_196);
node.text=val;
_127(_195,node);
opts.onAfterEdit.call(_195,node);
};
function _198(_199,_19a){
var opts=$.data(_199,"tree").options;
$(_19a).css("position","");
$(_19a).find("input.tree-editor").remove();
var node=_e0(_199,_19a);
_127(_199,node);
opts.onCancelEdit.call(_199,node);
};
function _19b(_19c,q){
var _19d=$.data(_19c,"tree");
var opts=_19d.options;
var ids={};
_12a(_19d.data,function(node){
if(opts.filter.call(_19c,q,node)){
$("#"+node.domId).removeClass("tree-node-hidden");
ids[node.domId]=1;
node.hidden=false;
}else{
$("#"+node.domId).addClass("tree-node-hidden");
node.hidden=true;
}
});
for(var id in ids){
_19e(id);
}
function _19e(_19f){
var p=$(_19c).tree("getParent",$("#"+_19f)[0]);
while(p){
$(p.target).removeClass("tree-node-hidden");
p.hidden=false;
p=$(_19c).tree("getParent",p.target);
}
};
};
$.fn.tree=function(_1a0,_1a1){
if(typeof _1a0=="string"){
return $.fn.tree.methods[_1a0](this,_1a1);
}
var _1a0=_1a0||{};
return this.each(function(){
var _1a2=$.data(this,"tree");
var opts;
if(_1a2){
opts=$.extend(_1a2.options,_1a0);
_1a2.options=opts;
}else{
opts=$.extend({},$.fn.tree.defaults,$.fn.tree.parseOptions(this),_1a0);
$.data(this,"tree",{options:opts,tree:_d5(this),data:[]});
var data=$.fn.tree.parseData(this);
if(data.length){
_120(this,this,data);
}
}
_d8(this);
if(opts.data){
_120(this,this,$.extend(true,[],opts.data));
}
_135(this,this);
});
};
$.fn.tree.methods={options:function(jq){
return $.data(jq[0],"tree").options;
},loadData:function(jq,data){
return jq.each(function(){
_120(this,this,data);
});
},getNode:function(jq,_1a3){
return _e0(jq[0],_1a3);
},getData:function(jq,_1a4){
return _17d(jq[0],_1a4);
},reload:function(jq,_1a5){
return jq.each(function(){
if(_1a5){
var node=$(_1a5);
var hit=node.children("span.tree-hit");
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
node.next().remove();
_13c(this,_1a5);
}else{
$(this).empty();
_135(this,this);
}
});
},getRoot:function(jq,_1a6){
return _169(jq[0],_1a6);
},getRoots:function(jq){
return _16d(jq[0]);
},getParent:function(jq,_1a7){
return _14f(jq[0],_1a7);
},getChildren:function(jq,_1a8){
return _11f(jq[0],_1a8);
},getChecked:function(jq,_1a9){
return _176(jq[0],_1a9);
},getSelected:function(jq){
return _17b(jq[0]);
},isLeaf:function(jq,_1aa){
return _11b(jq[0],_1aa);
},find:function(jq,id){
return _182(jq[0],id);
},select:function(jq,_1ab){
return jq.each(function(){
_18a(this,_1ab);
});
},check:function(jq,_1ac){
return jq.each(function(){
_104(this,_1ac,true);
});
},uncheck:function(jq,_1ad){
return jq.each(function(){
_104(this,_1ad,false);
});
},collapse:function(jq,_1ae){
return jq.each(function(){
_141(this,_1ae);
});
},expand:function(jq,_1af){
return jq.each(function(){
_13c(this,_1af);
});
},collapseAll:function(jq,_1b0){
return jq.each(function(){
_153(this,_1b0);
});
},expandAll:function(jq,_1b1){
return jq.each(function(){
_147(this,_1b1);
});
},expandTo:function(jq,_1b2){
return jq.each(function(){
_14b(this,_1b2);
});
},scrollTo:function(jq,_1b3){
return jq.each(function(){
_150(this,_1b3);
});
},toggle:function(jq,_1b4){
return jq.each(function(){
_144(this,_1b4);
});
},append:function(jq,_1b5){
return jq.each(function(){
_157(this,_1b5);
});
},insert:function(jq,_1b6){
return jq.each(function(){
_15b(this,_1b6);
});
},remove:function(jq,_1b7){
return jq.each(function(){
_160(this,_1b7);
});
},pop:function(jq,_1b8){
var node=jq.tree("getData",_1b8);
jq.tree("remove",_1b8);
return node;
},update:function(jq,_1b9){
return jq.each(function(){
_127(this,_1b9);
});
},enableDnd:function(jq){
return jq.each(function(){
_e5(this);
});
},disableDnd:function(jq){
return jq.each(function(){
_e1(this);
});
},beginEdit:function(jq,_1ba){
return jq.each(function(){
_18f(this,_1ba);
});
},endEdit:function(jq,_1bb){
return jq.each(function(){
_194(this,_1bb);
});
},cancelEdit:function(jq,_1bc){
return jq.each(function(){
_198(this,_1bc);
});
},doFilter:function(jq,q){
return jq.each(function(){
_19b(this,q);
});
}};
$.fn.tree.parseOptions=function(_1bd){
var t=$(_1bd);
return $.extend({},$.parser.parseOptions(_1bd,["url","method",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean",lines:"boolean",dnd:"boolean"}]));
};
$.fn.tree.parseData=function(_1be){
var data=[];
_1bf(data,$(_1be));
return data;
function _1bf(aa,tree){
tree.children("li").each(function(){
var node=$(this);
var item=$.extend({},$.parser.parseOptions(this,["id","iconCls","state"]),{checked:(node.attr("checked")?true:undefined)});
item.text=node.children("span").html();
if(!item.text){
item.text=node.html();
}
var _1c0=node.children("ul");
if(_1c0.length){
item.children=[];
_1bf(item.children,_1c0);
}
aa.push(item);
});
};
};
var _1c1=1;
var _1c2={render:function(_1c3,ul,data){
var opts=$.data(_1c3,"tree").options;
var _1c4=$(ul).prev("div.tree-node").find("span.tree-indent, span.tree-hit").length;
var cc=_1c5(_1c4,data);
$(ul).append(cc.join(""));
function _1c5(_1c6,_1c7){
var cc=[];
for(var i=0;i<_1c7.length;i++){
var item=_1c7[i];
if(item.state!="open"&&item.state!="closed"){
item.state="open";
}
item.domId="_easyui_tree_"+_1c1++;
cc.push("<li>");
cc.push("<div id=\""+item.domId+"\" class=\"tree-node\">");
for(var j=0;j<_1c6;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
var _1c8=false;
if(item.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
if(item.children&&item.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(item.iconCls?item.iconCls:"")+"\"></span>");
_1c8=true;
}
}
if(opts.checkbox){
if((!opts.onlyLeafCheck)||_1c8){
cc.push("<span class=\"tree-checkbox tree-checkbox0\"></span>");
}
}
cc.push("<span class=\"tree-title\">"+opts.formatter.call(_1c3,item)+"</span>");
cc.push("</div>");
if(item.children&&item.children.length){
var tmp=_1c5(_1c6+1,item.children);
cc.push("<ul style=\"display:"+(item.state=="closed"?"none":"block")+"\">");
cc=cc.concat(tmp);
cc.push("</ul>");
}
cc.push("</li>");
}
return cc;
};
}};
$.fn.tree.defaults={url:null,method:"post",animate:false,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,dnd:false,data:null,queryParams:{},formatter:function(node){
return node.text;
},filter:function(q,node){
return node.text.toLowerCase().indexOf(q.toLowerCase())>=0;
},loader:function(_1c9,_1ca,_1cb){
var opts=$(this).tree("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_1c9,dataType:"json",success:function(data){
_1ca(data);
},error:function(){
_1cb.apply(this,arguments);
}});
},loadFilter:function(data,_1cc){
return data;
},view:_1c2,onBeforeLoad:function(node,_1cd){
},onLoadSuccess:function(node,data){
},onLoadError:function(){
},onClick:function(node){
},onDblClick:function(node){
},onBeforeExpand:function(node){
},onExpand:function(node){
},onBeforeCollapse:function(node){
},onCollapse:function(node){
},onBeforeCheck:function(node,_1ce){
},onCheck:function(node,_1cf){
},onBeforeSelect:function(node){
},onSelect:function(node){
},onContextMenu:function(e,node){
},onBeforeDrag:function(node){
},onStartDrag:function(node){
},onStopDrag:function(node){
},onDragEnter:function(_1d0,_1d1){
},onDragOver:function(_1d2,_1d3){
},onDragLeave:function(_1d4,_1d5){
},onBeforeDrop:function(_1d6,_1d7,_1d8){
},onDrop:function(_1d9,_1da,_1db){
},onBeforeEdit:function(node){
},onAfterEdit:function(node){
},onCancelEdit:function(node){
}};
})(jQuery);
(function($){
function init(_1dc){
$(_1dc).addClass("progressbar");
$(_1dc).html("<div class=\"progressbar-text\"></div><div class=\"progressbar-value\"><div class=\"progressbar-text\"></div></div>");
$(_1dc).bind("_resize",function(e,_1dd){
if($(this).hasClass("easyui-fluid")||_1dd){
_1de(_1dc);
}
return false;
});
return $(_1dc);
};
function _1de(_1df,_1e0){
var opts=$.data(_1df,"progressbar").options;
var bar=$.data(_1df,"progressbar").bar;
if(_1e0){
opts.width=_1e0;
}
bar._size(opts);
bar.find("div.progressbar-text").css("width",bar.width());
bar.find("div.progressbar-text,div.progressbar-value").css({height:bar.height()+"px",lineHeight:bar.height()+"px"});
};
$.fn.progressbar=function(_1e1,_1e2){
if(typeof _1e1=="string"){
var _1e3=$.fn.progressbar.methods[_1e1];
if(_1e3){
return _1e3(this,_1e2);
}
}
_1e1=_1e1||{};
return this.each(function(){
var _1e4=$.data(this,"progressbar");
if(_1e4){
$.extend(_1e4.options,_1e1);
}else{
_1e4=$.data(this,"progressbar",{options:$.extend({},$.fn.progressbar.defaults,$.fn.progressbar.parseOptions(this),_1e1),bar:init(this)});
}
$(this).progressbar("setValue",_1e4.options.value);
_1de(this);
});
};
$.fn.progressbar.methods={options:function(jq){
return $.data(jq[0],"progressbar").options;
},resize:function(jq,_1e5){
return jq.each(function(){
_1de(this,_1e5);
});
},getValue:function(jq){
return $.data(jq[0],"progressbar").options.value;
},setValue:function(jq,_1e6){
if(_1e6<0){
_1e6=0;
}
if(_1e6>100){
_1e6=100;
}
return jq.each(function(){
var opts=$.data(this,"progressbar").options;
var text=opts.text.replace(/{value}/,_1e6);
var _1e7=opts.value;
opts.value=_1e6;
$(this).find("div.progressbar-value").width(_1e6+"%");
$(this).find("div.progressbar-text").html(text);
if(_1e7!=_1e6){
opts.onChange.call(this,_1e6,_1e7);
}
});
}};
$.fn.progressbar.parseOptions=function(_1e8){
return $.extend({},$.parser.parseOptions(_1e8,["width","height","text",{value:"number"}]));
};
$.fn.progressbar.defaults={width:"auto",height:22,value:0,text:"{value}%",onChange:function(_1e9,_1ea){
}};
})(jQuery);
(function($){
function init(_1eb){
$(_1eb).addClass("tooltip-f");
};
function _1ec(_1ed){
var opts=$.data(_1ed,"tooltip").options;
$(_1ed).unbind(".tooltip").bind(opts.showEvent+".tooltip",function(e){
$(_1ed).tooltip("show",e);
}).bind(opts.hideEvent+".tooltip",function(e){
$(_1ed).tooltip("hide",e);
}).bind("mousemove.tooltip",function(e){
if(opts.trackMouse){
opts.trackMouseX=e.pageX;
opts.trackMouseY=e.pageY;
$(_1ed).tooltip("reposition");
}
});
};
function _1ee(_1ef){
var _1f0=$.data(_1ef,"tooltip");
if(_1f0.showTimer){
clearTimeout(_1f0.showTimer);
_1f0.showTimer=null;
}
if(_1f0.hideTimer){
clearTimeout(_1f0.hideTimer);
_1f0.hideTimer=null;
}
};
function _1f1(_1f2){
var _1f3=$.data(_1f2,"tooltip");
if(!_1f3||!_1f3.tip){
return;
}
var opts=_1f3.options;
var tip=_1f3.tip;
var pos={left:-100000,top:-100000};
if($(_1f2).is(":visible")){
pos=_1f4(opts.position);
if(opts.position=="top"&&pos.top<0){
pos=_1f4("bottom");
}else{
if((opts.position=="bottom")&&(pos.top+tip._outerHeight()>$(window)._outerHeight()+$(document).scrollTop())){
pos=_1f4("top");
}
}
if(pos.left<0){
if(opts.position=="left"){
pos=_1f4("right");
}else{
$(_1f2).tooltip("arrow").css("left",tip._outerWidth()/2+pos.left);
pos.left=0;
}
}else{
if(pos.left+tip._outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
if(opts.position=="right"){
pos=_1f4("left");
}else{
var left=pos.left;
pos.left=$(window)._outerWidth()+$(document)._scrollLeft()-tip._outerWidth();
$(_1f2).tooltip("arrow").css("left",tip._outerWidth()/2-(pos.left-left));
}
}
}
}
tip.css({left:pos.left,top:pos.top,zIndex:(opts.zIndex!=undefined?opts.zIndex:($.fn.window?$.fn.window.defaults.zIndex++:""))});
opts.onPosition.call(_1f2,pos.left,pos.top);
function _1f4(_1f5){
opts.position=_1f5||"bottom";
tip.removeClass("tooltip-top tooltip-bottom tooltip-left tooltip-right").addClass("tooltip-"+opts.position);
var left,top;
if(opts.trackMouse){
t=$();
left=opts.trackMouseX+opts.deltaX;
top=opts.trackMouseY+opts.deltaY;
}else{
var t=$(_1f2);
left=t.offset().left+opts.deltaX;
top=t.offset().top+opts.deltaY;
}
switch(opts.position){
case "right":
left+=t._outerWidth()+12+(opts.trackMouse?12:0);
top-=(tip._outerHeight()-t._outerHeight())/2;
break;
case "left":
left-=tip._outerWidth()+12+(opts.trackMouse?12:0);
top-=(tip._outerHeight()-t._outerHeight())/2;
break;
case "top":
left-=(tip._outerWidth()-t._outerWidth())/2;
top-=tip._outerHeight()+12+(opts.trackMouse?12:0);
break;
case "bottom":
left-=(tip._outerWidth()-t._outerWidth())/2;
top+=t._outerHeight()+12+(opts.trackMouse?12:0);
break;
}
return {left:left,top:top};
};
};
function _1f6(_1f7,e){
var _1f8=$.data(_1f7,"tooltip");
var opts=_1f8.options;
var tip=_1f8.tip;
if(!tip){
tip=$("<div tabindex=\"-1\" class=\"tooltip\">"+"<div class=\"tooltip-content\"></div>"+"<div class=\"tooltip-arrow-outer\"></div>"+"<div class=\"tooltip-arrow\"></div>"+"</div>").appendTo("body");
_1f8.tip=tip;
_1f9(_1f7);
}
_1ee(_1f7);
_1f8.showTimer=setTimeout(function(){
$(_1f7).tooltip("reposition");
tip.show();
opts.onShow.call(_1f7,e);
var _1fa=tip.children(".tooltip-arrow-outer");
var _1fb=tip.children(".tooltip-arrow");
var bc="border-"+opts.position+"-color";
_1fa.add(_1fb).css({borderTopColor:"",borderBottomColor:"",borderLeftColor:"",borderRightColor:""});
_1fa.css(bc,tip.css(bc));
_1fb.css(bc,tip.css("backgroundColor"));
},opts.showDelay);
};
function _1fc(_1fd,e){
var _1fe=$.data(_1fd,"tooltip");
if(_1fe&&_1fe.tip){
_1ee(_1fd);
_1fe.hideTimer=setTimeout(function(){
_1fe.tip.hide();
_1fe.options.onHide.call(_1fd,e);
},_1fe.options.hideDelay);
}
};
function _1f9(_1ff,_200){
var _201=$.data(_1ff,"tooltip");
var opts=_201.options;
if(_200){
opts.content=_200;
}
if(!_201.tip){
return;
}
var cc=typeof opts.content=="function"?opts.content.call(_1ff):opts.content;
_201.tip.children(".tooltip-content").html(cc);
opts.onUpdate.call(_1ff,cc);
};
function _202(_203){
var _204=$.data(_203,"tooltip");
if(_204){
_1ee(_203);
var opts=_204.options;
if(_204.tip){
_204.tip.remove();
}
if(opts._title){
$(_203).attr("title",opts._title);
}
$.removeData(_203,"tooltip");
$(_203).unbind(".tooltip").removeClass("tooltip-f");
opts.onDestroy.call(_203);
}
};
$.fn.tooltip=function(_205,_206){
if(typeof _205=="string"){
return $.fn.tooltip.methods[_205](this,_206);
}
_205=_205||{};
return this.each(function(){
var _207=$.data(this,"tooltip");
if(_207){
$.extend(_207.options,_205);
}else{
$.data(this,"tooltip",{options:$.extend({},$.fn.tooltip.defaults,$.fn.tooltip.parseOptions(this),_205)});
init(this);
}
_1ec(this);
_1f9(this);
});
};
$.fn.tooltip.methods={options:function(jq){
return $.data(jq[0],"tooltip").options;
},tip:function(jq){
return $.data(jq[0],"tooltip").tip;
},arrow:function(jq){
return jq.tooltip("tip").children(".tooltip-arrow-outer,.tooltip-arrow");
},show:function(jq,e){
return jq.each(function(){
_1f6(this,e);
});
},hide:function(jq,e){
return jq.each(function(){
_1fc(this,e);
});
},update:function(jq,_208){
return jq.each(function(){
_1f9(this,_208);
});
},reposition:function(jq){
return jq.each(function(){
_1f1(this);
});
},destroy:function(jq){
return jq.each(function(){
_202(this);
});
}};
$.fn.tooltip.parseOptions=function(_209){
var t=$(_209);
var opts=$.extend({},$.parser.parseOptions(_209,["position","showEvent","hideEvent","content",{trackMouse:"boolean",deltaX:"number",deltaY:"number",showDelay:"number",hideDelay:"number"}]),{_title:t.attr("title")});
t.attr("title","");
if(!opts.content){
opts.content=opts._title;
}
return opts;
};
$.fn.tooltip.defaults={position:"bottom",content:null,trackMouse:false,deltaX:0,deltaY:0,showEvent:"mouseenter",hideEvent:"mouseleave",showDelay:200,hideDelay:100,onShow:function(e){
},onHide:function(e){
},onUpdate:function(_20a){
},onPosition:function(left,top){
},onDestroy:function(){
}};
})(jQuery);
(function($){
$.fn._remove=function(){
return this.each(function(){
$(this).remove();
try{
this.outerHTML="";
}
catch(err){
}
});
};
function _20b(node){
node._remove();
};
function _20c(_20d,_20e){
var _20f=$.data(_20d,"panel");
var opts=_20f.options;
var _210=_20f.panel;
var _211=_210.children(".panel-header");
var _212=_210.children(".panel-body");
var _213=_210.children(".panel-footer");
if(_20e){
$.extend(opts,{width:_20e.width,height:_20e.height,minWidth:_20e.minWidth,maxWidth:_20e.maxWidth,minHeight:_20e.minHeight,maxHeight:_20e.maxHeight,left:_20e.left,top:_20e.top});
}
_210._size(opts);
_211.add(_212)._outerWidth(_210.width());
if(!isNaN(parseInt(opts.height))){
_212._outerHeight(_210.height()-_211._outerHeight()-_213._outerHeight());
}else{
_212.css("height","");
var min=$.parser.parseValue("minHeight",opts.minHeight,_210.parent());
var max=$.parser.parseValue("maxHeight",opts.maxHeight,_210.parent());
var _214=_211._outerHeight()+_213._outerHeight()+_210._outerHeight()-_210.height();
_212._size("minHeight",min?(min-_214):"");
_212._size("maxHeight",max?(max-_214):"");
}
_210.css({height:"",minHeight:"",maxHeight:"",left:opts.left,top:opts.top});
opts.onResize.apply(_20d,[opts.width,opts.height]);
$(_20d).panel("doLayout");
};
function _215(_216,_217){
var opts=$.data(_216,"panel").options;
var _218=$.data(_216,"panel").panel;
if(_217){
if(_217.left!=null){
opts.left=_217.left;
}
if(_217.top!=null){
opts.top=_217.top;
}
}
_218.css({left:opts.left,top:opts.top});
opts.onMove.apply(_216,[opts.left,opts.top]);
};
function _219(_21a){
$(_21a).addClass("panel-body")._size("clear");
var _21b=$("<div class=\"panel\"></div>").insertBefore(_21a);
_21b[0].appendChild(_21a);
_21b.bind("_resize",function(e,_21c){
if($(this).hasClass("easyui-fluid")||_21c){
_20c(_21a);
}
return false;
});
return _21b;
};
function _21d(_21e){
var _21f=$.data(_21e,"panel");
var opts=_21f.options;
var _220=_21f.panel;
_220.css(opts.style);
_220.addClass(opts.cls);
_221();
_222();
var _223=$(_21e).panel("header");
var body=$(_21e).panel("body");
var _224=$(_21e).siblings(".panel-footer");
if(opts.border){
_223.removeClass("panel-header-noborder");
body.removeClass("panel-body-noborder");
_224.removeClass("panel-footer-noborder");
}else{
_223.addClass("panel-header-noborder");
body.addClass("panel-body-noborder");
_224.addClass("panel-footer-noborder");
}
_223.addClass(opts.headerCls);
body.addClass(opts.bodyCls);
$(_21e).attr("id",opts.id||"");
if(opts.content){
$(_21e).panel("clear");
$(_21e).html(opts.content);
$.parser.parse($(_21e));
}
function _221(){
if(opts.noheader||(!opts.title&&!opts.header)){
_20b(_220.children(".panel-header"));
_220.children(".panel-body").addClass("panel-body-noheader");
}else{
if(opts.header){
$(opts.header).addClass("panel-header").prependTo(_220);
}else{
var _225=_220.children(".panel-header");
if(!_225.length){
_225=$("<div class=\"panel-header\"></div>").prependTo(_220);
}
if(!$.isArray(opts.tools)){
_225.find("div.panel-tool .panel-tool-a").appendTo(opts.tools);
}
_225.empty();
var _226=$("<div class=\"panel-title\"></div>").html(opts.title).appendTo(_225);
if(opts.iconCls){
_226.addClass("panel-with-icon");
$("<div class=\"panel-icon\"></div>").addClass(opts.iconCls).appendTo(_225);
}
var tool=$("<div class=\"panel-tool\"></div>").appendTo(_225);
tool.bind("click",function(e){
e.stopPropagation();
});
if(opts.tools){
if($.isArray(opts.tools)){
$.map(opts.tools,function(t){
_227(tool,t.iconCls,eval(t.handler));
});
}else{
$(opts.tools).children().each(function(){
$(this).addClass($(this).attr("iconCls")).addClass("panel-tool-a").appendTo(tool);
});
}
}
if(opts.collapsible){
_227(tool,"panel-tool-collapse",function(){
if(opts.collapsed==true){
_245(_21e,true);
}else{
_238(_21e,true);
}
});
}
if(opts.minimizable){
_227(tool,"panel-tool-min",function(){
_24b(_21e);
});
}
if(opts.maximizable){
_227(tool,"panel-tool-max",function(){
if(opts.maximized==true){
_24e(_21e);
}else{
_237(_21e);
}
});
}
if(opts.closable){
_227(tool,"panel-tool-close",function(){
_239(_21e);
});
}
}
_220.children("div.panel-body").removeClass("panel-body-noheader");
}
};
function _227(c,icon,_228){
var a=$("<a href=\"javascript:void(0)\"></a>").addClass(icon).appendTo(c);
a.bind("click",_228);
};
function _222(){
if(opts.footer){
$(opts.footer).addClass("panel-footer").appendTo(_220);
$(_21e).addClass("panel-body-nobottom");
}else{
_220.children(".panel-footer").remove();
$(_21e).removeClass("panel-body-nobottom");
}
};
};
function _229(_22a,_22b){
var _22c=$.data(_22a,"panel");
var opts=_22c.options;
if(_22d){
opts.queryParams=_22b;
}
if(!opts.href){
return;
}
if(!_22c.isLoaded||!opts.cache){
var _22d=$.extend({},opts.queryParams);
if(opts.onBeforeLoad.call(_22a,_22d)==false){
return;
}
_22c.isLoaded=false;
$(_22a).panel("clear");
if(opts.loadingMessage){
$(_22a).html($("<div class=\"panel-loading\"></div>").html(opts.loadingMessage));
}
opts.loader.call(_22a,_22d,function(data){
var _22e=opts.extractor.call(_22a,data);
$(_22a).html(_22e);
$.parser.parse($(_22a));
opts.onLoad.apply(_22a,arguments);
_22c.isLoaded=true;
},function(){
opts.onLoadError.apply(_22a,arguments);
});
}
};
function _22f(_230){
var t=$(_230);
t.find(".combo-f").each(function(){
$(this).combo("destroy");
});
t.find(".m-btn").each(function(){
$(this).menubutton("destroy");
});
t.find(".s-btn").each(function(){
$(this).splitbutton("destroy");
});
t.find(".tooltip-f").each(function(){
$(this).tooltip("destroy");
});
t.children("div").each(function(){
$(this)._size("unfit");
});
t.empty();
};
function _231(_232){
$(_232).panel("doLayout",true);
};
function _233(_234,_235){
var opts=$.data(_234,"panel").options;
var _236=$.data(_234,"panel").panel;
if(_235!=true){
if(opts.onBeforeOpen.call(_234)==false){
return;
}
}
_236.stop(true,true);
if($.isFunction(opts.openAnimation)){
opts.openAnimation.call(_234,cb);
}else{
switch(opts.openAnimation){
case "slide":
_236.slideDown(opts.openDuration,cb);
break;
case "fade":
_236.fadeIn(opts.openDuration,cb);
break;
case "show":
_236.show(opts.openDuration,cb);
break;
default:
_236.show();
cb();
}
}
function cb(){
opts.closed=false;
opts.minimized=false;
var tool=_236.children(".panel-header").find("a.panel-tool-restore");
if(tool.length){
opts.maximized=true;
}
opts.onOpen.call(_234);
if(opts.maximized==true){
opts.maximized=false;
_237(_234);
}
if(opts.collapsed==true){
opts.collapsed=false;
_238(_234);
}
if(!opts.collapsed){
_229(_234);
_231(_234);
}
};
};
function _239(_23a,_23b){
var opts=$.data(_23a,"panel").options;
var _23c=$.data(_23a,"panel").panel;
if(_23b!=true){
if(opts.onBeforeClose.call(_23a)==false){
return;
}
}
_23c.stop(true,true);
_23c._size("unfit");
if($.isFunction(opts.closeAnimation)){
opts.closeAnimation.call(_23a,cb);
}else{
switch(opts.closeAnimation){
case "slide":
_23c.slideUp(opts.closeDuration,cb);
break;
case "fade":
_23c.fadeOut(opts.closeDuration,cb);
break;
case "hide":
_23c.hide(opts.closeDuration,cb);
break;
default:
_23c.hide();
cb();
}
}
function cb(){
opts.closed=true;
opts.onClose.call(_23a);
};
};
function _23d(_23e,_23f){
var _240=$.data(_23e,"panel");
var opts=_240.options;
var _241=_240.panel;
if(_23f!=true){
if(opts.onBeforeDestroy.call(_23e)==false){
return;
}
}
$(_23e).panel("clear").panel("clear","footer");
_20b(_241);
opts.onDestroy.call(_23e);
};
function _238(_242,_243){
var opts=$.data(_242,"panel").options;
var _244=$.data(_242,"panel").panel;
var body=_244.children(".panel-body");
var tool=_244.children(".panel-header").find("a.panel-tool-collapse");
if(opts.collapsed==true){
return;
}
body.stop(true,true);
if(opts.onBeforeCollapse.call(_242)==false){
return;
}
tool.addClass("panel-tool-expand");
if(_243==true){
body.slideUp("normal",function(){
opts.collapsed=true;
opts.onCollapse.call(_242);
});
}else{
body.hide();
opts.collapsed=true;
opts.onCollapse.call(_242);
}
};
function _245(_246,_247){
var opts=$.data(_246,"panel").options;
var _248=$.data(_246,"panel").panel;
var body=_248.children(".panel-body");
var tool=_248.children(".panel-header").find("a.panel-tool-collapse");
if(opts.collapsed==false){
return;
}
body.stop(true,true);
if(opts.onBeforeExpand.call(_246)==false){
return;
}
tool.removeClass("panel-tool-expand");
if(_247==true){
body.slideDown("normal",function(){
opts.collapsed=false;
opts.onExpand.call(_246);
_229(_246);
_231(_246);
});
}else{
body.show();
opts.collapsed=false;
opts.onExpand.call(_246);
_229(_246);
_231(_246);
}
};
function _237(_249){
var opts=$.data(_249,"panel").options;
var _24a=$.data(_249,"panel").panel;
var tool=_24a.children(".panel-header").find("a.panel-tool-max");
if(opts.maximized==true){
return;
}
tool.addClass("panel-tool-restore");
if(!$.data(_249,"panel").original){
$.data(_249,"panel").original={width:opts.width,height:opts.height,left:opts.left,top:opts.top,fit:opts.fit};
}
opts.left=0;
opts.top=0;
opts.fit=true;
_20c(_249);
opts.minimized=false;
opts.maximized=true;
opts.onMaximize.call(_249);
};
function _24b(_24c){
var opts=$.data(_24c,"panel").options;
var _24d=$.data(_24c,"panel").panel;
_24d._size("unfit");
_24d.hide();
opts.minimized=true;
opts.maximized=false;
opts.onMinimize.call(_24c);
};
function _24e(_24f){
var opts=$.data(_24f,"panel").options;
var _250=$.data(_24f,"panel").panel;
var tool=_250.children(".panel-header").find("a.panel-tool-max");
if(opts.maximized==false){
return;
}
_250.show();
tool.removeClass("panel-tool-restore");
$.extend(opts,$.data(_24f,"panel").original);
_20c(_24f);
opts.minimized=false;
opts.maximized=false;
$.data(_24f,"panel").original=null;
opts.onRestore.call(_24f);
};
function _251(_252,_253){
$.data(_252,"panel").options.title=_253;
$(_252).panel("header").find("div.panel-title").html(_253);
};
var _254=null;
$(window).unbind(".panel").bind("resize.panel",function(){
if(_254){
clearTimeout(_254);
}
_254=setTimeout(function(){
var _255=$("body.layout");
if(_255.length){
_255.layout("resize");
$("body").children(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
}else{
$("body").panel("doLayout");
}
_254=null;
},100);
});
$.fn.panel=function(_256,_257){
if(typeof _256=="string"){
return $.fn.panel.methods[_256](this,_257);
}
_256=_256||{};
return this.each(function(){
var _258=$.data(this,"panel");
var opts;
if(_258){
opts=$.extend(_258.options,_256);
_258.isLoaded=false;
}else{
opts=$.extend({},$.fn.panel.defaults,$.fn.panel.parseOptions(this),_256);
$(this).attr("title","");
_258=$.data(this,"panel",{options:opts,panel:_219(this),isLoaded:false});
}
_21d(this);
if(opts.doSize==true){
_258.panel.css("display","block");
_20c(this);
}
if(opts.closed==true||opts.minimized==true){
_258.panel.hide();
}else{
_233(this);
}
});
};
$.fn.panel.methods={options:function(jq){
return $.data(jq[0],"panel").options;
},panel:function(jq){
return $.data(jq[0],"panel").panel;
},header:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-header");
},footer:function(jq){
return jq.panel("panel").children(".panel-footer");
},body:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-body");
},setTitle:function(jq,_259){
return jq.each(function(){
_251(this,_259);
});
},open:function(jq,_25a){
return jq.each(function(){
_233(this,_25a);
});
},close:function(jq,_25b){
return jq.each(function(){
_239(this,_25b);
});
},destroy:function(jq,_25c){
return jq.each(function(){
_23d(this,_25c);
});
},clear:function(jq,type){
return jq.each(function(){
_22f(type=="footer"?$(this).panel("footer"):this);
});
},refresh:function(jq,href){
return jq.each(function(){
var _25d=$.data(this,"panel");
_25d.isLoaded=false;
if(href){
if(typeof href=="string"){
_25d.options.href=href;
}else{
_25d.options.queryParams=href;
}
}
_229(this);
});
},resize:function(jq,_25e){
return jq.each(function(){
_20c(this,_25e);
});
},doLayout:function(jq,all){
return jq.each(function(){
_25f(this,"body");
_25f($(this).siblings(".panel-footer")[0],"footer");
function _25f(_260,type){
if(!_260){
return;
}
var _261=_260==$("body")[0];
var s=$(_260).find("div.panel:visible,div.accordion:visible,div.tabs-container:visible,div.layout:visible,.easyui-fluid:visible").filter(function(_262,el){
var p=$(el).parents(".panel-"+type+":first");
return _261?p.length==0:p[0]==_260;
});
s.each(function(){
$(this).triggerHandler("_resize",[all||false]);
});
};
});
},move:function(jq,_263){
return jq.each(function(){
_215(this,_263);
});
},maximize:function(jq){
return jq.each(function(){
_237(this);
});
},minimize:function(jq){
return jq.each(function(){
_24b(this);
});
},restore:function(jq){
return jq.each(function(){
_24e(this);
});
},collapse:function(jq,_264){
return jq.each(function(){
_238(this,_264);
});
},expand:function(jq,_265){
return jq.each(function(){
_245(this,_265);
});
}};
$.fn.panel.parseOptions=function(_266){
var t=$(_266);
var hh=t.children(".panel-header,header");
var ff=t.children(".panel-footer,footer");
return $.extend({},$.parser.parseOptions(_266,["id","width","height","left","top","title","iconCls","cls","headerCls","bodyCls","tools","href","method","header","footer",{cache:"boolean",fit:"boolean",border:"boolean",noheader:"boolean"},{collapsible:"boolean",minimizable:"boolean",maximizable:"boolean"},{closable:"boolean",collapsed:"boolean",minimized:"boolean",maximized:"boolean",closed:"boolean"},"openAnimation","closeAnimation",{openDuration:"number",closeDuration:"number"},]),{loadingMessage:(t.attr("loadingMessage")!=undefined?t.attr("loadingMessage"):undefined),header:(hh.length?hh.removeClass("panel-header"):undefined),footer:(ff.length?ff.removeClass("panel-footer"):undefined)});
};
$.fn.panel.defaults={id:null,title:null,iconCls:null,width:"auto",height:"auto",left:null,top:null,cls:null,headerCls:null,bodyCls:null,style:{},href:null,cache:true,fit:false,border:true,doSize:true,noheader:false,content:null,collapsible:false,minimizable:false,maximizable:false,closable:false,collapsed:false,minimized:false,maximized:false,closed:false,openAnimation:false,openDuration:400,closeAnimation:false,closeDuration:400,tools:null,footer:null,header:null,queryParams:{},method:"get",href:null,loadingMessage:"Loading...",loader:function(_267,_268,_269){
var opts=$(this).panel("options");
if(!opts.href){
return false;
}
$.ajax({type:opts.method,url:opts.href,cache:false,data:_267,dataType:"html",success:function(data){
_268(data);
},error:function(){
_269.apply(this,arguments);
}});
},extractor:function(data){
var _26a=/<body[^>]*>((.|[\n\r])*)<\/body>/im;
var _26b=_26a.exec(data);
if(_26b){
return _26b[1];
}else{
return data;
}
},onBeforeLoad:function(_26c){
},onLoad:function(){
},onLoadError:function(){
},onBeforeOpen:function(){
},onOpen:function(){
},onBeforeClose:function(){
},onClose:function(){
},onBeforeDestroy:function(){
},onDestroy:function(){
},onResize:function(_26d,_26e){
},onMove:function(left,top){
},onMaximize:function(){
},onRestore:function(){
},onMinimize:function(){
},onBeforeCollapse:function(){
},onBeforeExpand:function(){
},onCollapse:function(){
},onExpand:function(){
}};
})(jQuery);
(function($){
function _26f(_270,_271){
var _272=$.data(_270,"window");
if(_271){
if(_271.left!=null){
_272.options.left=_271.left;
}
if(_271.top!=null){
_272.options.top=_271.top;
}
}
$(_270).panel("move",_272.options);
if(_272.shadow){
_272.shadow.css({left:_272.options.left,top:_272.options.top});
}
};
function _273(_274,_275){
var opts=$.data(_274,"window").options;
var pp=$(_274).window("panel");
var _276=pp._outerWidth();
if(opts.inline){
var _277=pp.parent();
opts.left=Math.ceil((_277.width()-_276)/2+_277.scrollLeft());
}else{
opts.left=Math.ceil(($(window)._outerWidth()-_276)/2+$(document).scrollLeft());
}
if(_275){
_26f(_274);
}
};
function _278(_279,_27a){
var opts=$.data(_279,"window").options;
var pp=$(_279).window("panel");
var _27b=pp._outerHeight();
if(opts.inline){
var _27c=pp.parent();
opts.top=Math.ceil((_27c.height()-_27b)/2+_27c.scrollTop());
}else{
opts.top=Math.ceil(($(window)._outerHeight()-_27b)/2+$(document).scrollTop());
}
if(_27a){
_26f(_279);
}
};
function _27d(_27e){
var _27f=$.data(_27e,"window");
var opts=_27f.options;
var win=$(_27e).panel($.extend({},_27f.options,{border:false,doSize:true,closed:true,cls:"window",headerCls:"window-header",bodyCls:"window-body "+(opts.noheader?"window-body-noheader":""),onBeforeDestroy:function(){
if(opts.onBeforeDestroy.call(_27e)==false){
return false;
}
if(_27f.shadow){
_27f.shadow.remove();
}
if(_27f.mask){
_27f.mask.remove();
}
},onClose:function(){
if(_27f.shadow){
_27f.shadow.hide();
}
if(_27f.mask){
_27f.mask.hide();
}
opts.onClose.call(_27e);
},onOpen:function(){
if(_27f.mask){
_27f.mask.css({display:"block",zIndex:$.fn.window.defaults.zIndex++});
}
if(_27f.shadow){
_27f.shadow.css({display:"block",zIndex:$.fn.window.defaults.zIndex++,left:opts.left,top:opts.top,width:_27f.window._outerWidth(),height:_27f.window._outerHeight()});
}
_27f.window.css("z-index",$.fn.window.defaults.zIndex++);
opts.onOpen.call(_27e);
},onResize:function(_280,_281){
var _282=$(this).panel("options");
$.extend(opts,{width:_282.width,height:_282.height,left:_282.left,top:_282.top});
if(_27f.shadow){
_27f.shadow.css({left:opts.left,top:opts.top,width:_27f.window._outerWidth(),height:_27f.window._outerHeight()});
}
opts.onResize.call(_27e,_280,_281);
},onMinimize:function(){
if(_27f.shadow){
_27f.shadow.hide();
}
if(_27f.mask){
_27f.mask.hide();
}
_27f.options.onMinimize.call(_27e);
},onBeforeCollapse:function(){
if(opts.onBeforeCollapse.call(_27e)==false){
return false;
}
if(_27f.shadow){
_27f.shadow.hide();
}
},onExpand:function(){
if(_27f.shadow){
_27f.shadow.show();
}
opts.onExpand.call(_27e);
}}));
_27f.window=win.panel("panel");
if(_27f.mask){
_27f.mask.remove();
}
if(opts.modal==true){
_27f.mask=$("<div class=\"window-mask\"></div>").insertAfter(_27f.window);
_27f.mask.css({width:(opts.inline?_27f.mask.parent().width():_283().width),height:(opts.inline?_27f.mask.parent().height():_283().height),display:"none"});
}
if(_27f.shadow){
_27f.shadow.remove();
}
if(opts.shadow==true){
_27f.shadow=$("<div class=\"window-shadow\"></div>").insertAfter(_27f.window);
_27f.shadow.css({display:"none"});
}
if(opts.left==null){
_273(_27e);
}
if(opts.top==null){
_278(_27e);
}
_26f(_27e);
if(!opts.closed){
win.window("open");
}
};
function _284(_285){
var _286=$.data(_285,"window");
_286.window.draggable({handle:">div.panel-header>div.panel-title",disabled:_286.options.draggable==false,onStartDrag:function(e){
if(_286.mask){
_286.mask.css("z-index",$.fn.window.defaults.zIndex++);
}
if(_286.shadow){
_286.shadow.css("z-index",$.fn.window.defaults.zIndex++);
}
_286.window.css("z-index",$.fn.window.defaults.zIndex++);
if(!_286.proxy){
_286.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_286.window);
}
_286.proxy.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top});
_286.proxy._outerWidth(_286.window._outerWidth());
_286.proxy._outerHeight(_286.window._outerHeight());
setTimeout(function(){
if(_286.proxy){
_286.proxy.show();
}
},500);
},onDrag:function(e){
_286.proxy.css({display:"block",left:e.data.left,top:e.data.top});
return false;
},onStopDrag:function(e){
_286.options.left=e.data.left;
_286.options.top=e.data.top;
$(_285).window("move");
_286.proxy.remove();
_286.proxy=null;
}});
_286.window.resizable({disabled:_286.options.resizable==false,onStartResize:function(e){
if(_286.pmask){
_286.pmask.remove();
}
_286.pmask=$("<div class=\"window-proxy-mask\"></div>").insertAfter(_286.window);
_286.pmask.css({zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top,width:_286.window._outerWidth(),height:_286.window._outerHeight()});
if(_286.proxy){
_286.proxy.remove();
}
_286.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_286.window);
_286.proxy.css({zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top});
_286.proxy._outerWidth(e.data.width)._outerHeight(e.data.height);
},onResize:function(e){
_286.proxy.css({left:e.data.left,top:e.data.top});
_286.proxy._outerWidth(e.data.width);
_286.proxy._outerHeight(e.data.height);
return false;
},onStopResize:function(e){
$(_285).window("resize",e.data);
_286.pmask.remove();
_286.pmask=null;
_286.proxy.remove();
_286.proxy=null;
}});
};
function _283(){
if(document.compatMode=="BackCompat"){
return {width:Math.max(document.body.scrollWidth,document.body.clientWidth),height:Math.max(document.body.scrollHeight,document.body.clientHeight)};
}else{
return {width:Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth),height:Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight)};
}
};
$(window).resize(function(){
$("body>div.window-mask").css({width:$(window)._outerWidth(),height:$(window)._outerHeight()});
setTimeout(function(){
$("body>div.window-mask").css({width:_283().width,height:_283().height});
},50);
});
$.fn.window=function(_287,_288){
if(typeof _287=="string"){
var _289=$.fn.window.methods[_287];
if(_289){
return _289(this,_288);
}else{
return this.panel(_287,_288);
}
}
_287=_287||{};
return this.each(function(){
var _28a=$.data(this,"window");
if(_28a){
$.extend(_28a.options,_287);
}else{
_28a=$.data(this,"window",{options:$.extend({},$.fn.window.defaults,$.fn.window.parseOptions(this),_287)});
if(!_28a.options.inline){
document.body.appendChild(this);
}
}
_27d(this);
_284(this);
});
};
$.fn.window.methods={options:function(jq){
var _28b=jq.panel("options");
var _28c=$.data(jq[0],"window").options;
return $.extend(_28c,{closed:_28b.closed,collapsed:_28b.collapsed,minimized:_28b.minimized,maximized:_28b.maximized});
},window:function(jq){
return $.data(jq[0],"window").window;
},move:function(jq,_28d){
return jq.each(function(){
_26f(this,_28d);
});
},hcenter:function(jq){
return jq.each(function(){
_273(this,true);
});
},vcenter:function(jq){
return jq.each(function(){
_278(this,true);
});
},center:function(jq){
return jq.each(function(){
_273(this);
_278(this);
_26f(this);
});
}};
$.fn.window.parseOptions=function(_28e){
return $.extend({},$.fn.panel.parseOptions(_28e),$.parser.parseOptions(_28e,[{draggable:"boolean",resizable:"boolean",shadow:"boolean",modal:"boolean",inline:"boolean"}]));
};
$.fn.window.defaults=$.extend({},$.fn.panel.defaults,{zIndex:9000,draggable:true,resizable:true,shadow:true,modal:false,inline:false,title:"New Window",collapsible:true,minimizable:true,maximizable:true,closable:true,closed:false});
})(jQuery);
(function($){
function _28f(_290){
var opts=$.data(_290,"dialog").options;
opts.inited=false;
$(_290).window($.extend({},opts,{onResize:function(w,h){
if(opts.inited){
_295(this);
opts.onResize.call(this,w,h);
}
}}));
var win=$(_290).window("window");
if(opts.toolbar){
if($.isArray(opts.toolbar)){
$(_290).siblings("div.dialog-toolbar").remove();
var _291=$("<div class=\"dialog-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").appendTo(win);
var tr=_291.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"dialog-tool-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:void(0)\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(opts.toolbar).addClass("dialog-toolbar").appendTo(win);
$(opts.toolbar).show();
}
}else{
$(_290).siblings("div.dialog-toolbar").remove();
}
if(opts.buttons){
if($.isArray(opts.buttons)){
$(_290).siblings("div.dialog-button").remove();
var _292=$("<div class=\"dialog-button\"></div>").appendTo(win);
for(var i=0;i<opts.buttons.length;i++){
var p=opts.buttons[i];
var _293=$("<a href=\"javascript:void(0)\"></a>").appendTo(_292);
if(p.handler){
_293[0].onclick=p.handler;
}
_293.linkbutton(p);
}
}else{
$(opts.buttons).addClass("dialog-button").appendTo(win);
$(opts.buttons).show();
}
}else{
$(_290).siblings("div.dialog-button").remove();
}
opts.inited=true;
var _294=opts.closed;
win.show();
$(_290).window("resize");
if(_294){
win.hide();
}
};
function _295(_296,_297){
var t=$(_296);
var opts=t.dialog("options");
var _298=opts.noheader;
var tb=t.siblings(".dialog-toolbar");
var bb=t.siblings(".dialog-button");
tb.insertBefore(_296).css({position:"relative",borderTopWidth:(_298?1:0),top:(_298?tb.length:0)});
bb.insertAfter(_296).css({position:"relative",top:-1});
tb.add(bb)._outerWidth(t._outerWidth()).find(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
if(!isNaN(parseInt(opts.height))){
t._outerHeight(t._outerHeight()-tb._outerHeight()-bb._outerHeight());
}
var _299=$.data(_296,"window").shadow;
if(_299){
var cc=t.panel("panel");
_299.css({width:cc._outerWidth(),height:cc._outerHeight()});
}
};
$.fn.dialog=function(_29a,_29b){
if(typeof _29a=="string"){
var _29c=$.fn.dialog.methods[_29a];
if(_29c){
return _29c(this,_29b);
}else{
return this.window(_29a,_29b);
}
}
_29a=_29a||{};
return this.each(function(){
var _29d=$.data(this,"dialog");
if(_29d){
$.extend(_29d.options,_29a);
}else{
$.data(this,"dialog",{options:$.extend({},$.fn.dialog.defaults,$.fn.dialog.parseOptions(this),_29a)});
}
_28f(this);
});
};
$.fn.dialog.methods={options:function(jq){
var _29e=$.data(jq[0],"dialog").options;
var _29f=jq.panel("options");
$.extend(_29e,{width:_29f.width,height:_29f.height,left:_29f.left,top:_29f.top,closed:_29f.closed,collapsed:_29f.collapsed,minimized:_29f.minimized,maximized:_29f.maximized});
return _29e;
},dialog:function(jq){
return jq.window("window");
}};
$.fn.dialog.parseOptions=function(_2a0){
var t=$(_2a0);
return $.extend({},$.fn.window.parseOptions(_2a0),$.parser.parseOptions(_2a0,["toolbar","buttons"]),{toolbar:(t.children(".dialog-toolbar").length?t.children(".dialog-toolbar").removeClass("dialog-toolbar"):undefined),buttons:(t.children(".dialog-button").length?t.children(".dialog-button").removeClass("dialog-button"):undefined)});
};
$.fn.dialog.defaults=$.extend({},$.fn.window.defaults,{title:"New Dialog",collapsible:false,minimizable:false,maximizable:false,resizable:false,toolbar:null,buttons:null});
})(jQuery);
(function($){
function _2a1(){
$(document).unbind(".messager").bind("keydown.messager",function(e){
if(e.keyCode==27){
$("body").children("div.messager-window").children("div.messager-body").each(function(){
$(this).window("close");
});
}else{
if(e.keyCode==9){
var win=$("body").children("div.messager-window").children("div.messager-body");
if(!win.length){
return;
}
var _2a2=win.find(".messager-input,.messager-button .l-btn");
for(var i=0;i<_2a2.length;i++){
if($(_2a2[i]).is(":focus")){
$(_2a2[i>=_2a2.length-1?0:i+1]).focus();
return false;
}
}
}
}
});
};
function _2a3(){
$(document).unbind(".messager");
};
function _2a4(_2a5){
var opts=$.extend({},$.messager.defaults,{modal:false,shadow:false,draggable:false,resizable:false,closed:true,style:{left:"",top:"",right:0,zIndex:$.fn.window.defaults.zIndex++,bottom:-document.body.scrollTop-document.documentElement.scrollTop},title:"",width:250,height:100,showType:"slide",showSpeed:600,msg:"",timeout:4000},_2a5);
var win=$("<div class=\"messager-body\"></div>").html(opts.msg).appendTo("body");
win.window($.extend({},opts,{openAnimation:(opts.showType),closeAnimation:(opts.showType=="show"?"hide":opts.showType),openDuration:opts.showSpeed,closeDuration:opts.showSpeed,onOpen:function(){
win.window("window").hover(function(){
if(opts.timer){
clearTimeout(opts.timer);
}
},function(){
_2a6();
});
_2a6();
function _2a6(){
if(opts.timeout>0){
opts.timer=setTimeout(function(){
if(win.length&&win.data("window")){
win.window("close");
}
},opts.timeout);
}
};
if(_2a5.onOpen){
_2a5.onOpen.call(this);
}else{
opts.onOpen.call(this);
}
},onClose:function(){
if(opts.timer){
clearTimeout(opts.timer);
}
if(_2a5.onClose){
_2a5.onClose.call(this);
}else{
opts.onClose.call(this);
}
win.window("destroy");
}}));
win.window("window").css(opts.style);
win.window("open");
return win;
};
function _2a7(_2a8){
_2a1();
var win=$("<div class=\"messager-body\"></div>").appendTo("body");
win.window($.extend({},_2a8,{doSize:false,noheader:(_2a8.title?false:true),onClose:function(){
_2a3();
if(_2a8.onClose){
_2a8.onClose.call(this);
}
setTimeout(function(){
win.window("destroy");
},100);
}}));
if(_2a8.buttons&&_2a8.buttons.length){
var tb=$("<div class=\"messager-button\"></div>").appendTo(win);
$.map(_2a8.buttons,function(btn){
$("<a href=\"javascript:void(0)\" style=\"margin-left:10px\"></a>").appendTo(tb).linkbutton(btn);
});
}
win.window("window").addClass("messager-window");
win.window("resize");
win.children("div.messager-button").children("a:first").focus();
return win;
};
$.messager={show:function(_2a9){
return _2a4(_2a9);
},alert:function(_2aa,msg,icon,fn){
var opts=typeof _2aa=="object"?_2aa:{title:_2aa,msg:msg,icon:icon,fn:fn};
var cls=opts.icon?"messager-icon messager-"+opts.icon:"";
opts=$.extend({},$.messager.defaults,{content:"<div class=\""+cls+"\"></div>"+"<div>"+opts.msg+"</div>"+"<div style=\"clear:both;\"/>",buttons:[{text:$.messager.defaults.ok,onClick:function(){
win.window("close");
opts.fn();
}}]},opts);
var win=_2a7(opts);
return win;
},confirm:function(_2ab,msg,fn){
var opts=typeof _2ab=="object"?_2ab:{title:_2ab,msg:msg,fn:fn};
opts=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+opts.msg+"</div>"+"<div style=\"clear:both;\"/>",buttons:[{text:$.messager.defaults.ok,onClick:function(){
win.window("close");
opts.fn(true);
}},{text:$.messager.defaults.cancel,onClick:function(){
win.window("close");
opts.fn(false);
}}]},opts);
var win=_2a7(opts);
return win;
},prompt:function(_2ac,msg,fn){
var opts=typeof _2ac=="object"?_2ac:{title:_2ac,msg:msg,fn:fn};
opts=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+opts.msg+"</div>"+"<br/>"+"<div style=\"clear:both;\"/>"+"<div><input class=\"messager-input\" type=\"text\"/></div>",buttons:[{text:$.messager.defaults.ok,onClick:function(){
win.window("close");
opts.fn(win.find(".messager-input").val());
}},{text:$.messager.defaults.cancel,onClick:function(){
win.window("close");
opts.fn();
}}]},opts);
var win=_2a7(opts);
win.find("input.messager-input").focus();
return win;
},progress:function(_2ad){
var _2ae={bar:function(){
return $("body>div.messager-window").find("div.messager-p-bar");
},close:function(){
var win=$("body>div.messager-window>div.messager-body:has(div.messager-progress)");
if(win.length){
win.window("close");
}
}};
if(typeof _2ad=="string"){
var _2af=_2ae[_2ad];
return _2af();
}
var opts=$.extend({},{title:"",content:undefined,msg:"",text:undefined,interval:300},_2ad||{});
var win=_2a7($.extend({},$.messager.defaults,{content:"<div class=\"messager-progress\"><div class=\"messager-p-msg\">"+opts.msg+"</div><div class=\"messager-p-bar\"></div></div>",closable:false,doSize:false},opts,{onClose:function(){
if(this.timer){
clearInterval(this.timer);
}
if(_2ad.onClose){
_2ad.onClose.call(this);
}else{
$.messager.defaults.onClose.call(this);
}
}}));
var bar=win.find("div.messager-p-bar");
bar.progressbar({text:opts.text});
win.window("resize");
if(opts.interval){
win[0].timer=setInterval(function(){
var v=bar.progressbar("getValue");
v+=10;
if(v>100){
v=0;
}
bar.progressbar("setValue",v);
},opts.interval);
}
return win;
}};
$.messager.defaults=$.extend({},$.fn.window.defaults,{ok:"Ok",cancel:"Cancel",width:300,height:"auto",modal:true,collapsible:false,minimizable:false,maximizable:false,resizable:false,fn:function(){
}});
})(jQuery);
(function($){
function _2b0(_2b1,_2b2){
var _2b3=$.data(_2b1,"accordion");
var opts=_2b3.options;
var _2b4=_2b3.panels;
var cc=$(_2b1);
if(_2b2){
$.extend(opts,{width:_2b2.width,height:_2b2.height});
}
cc._size(opts);
var _2b5=0;
var _2b6="auto";
var _2b7=cc.find(">.panel>.accordion-header");
if(_2b7.length){
_2b5=$(_2b7[0]).css("height","")._outerHeight();
}
if(!isNaN(parseInt(opts.height))){
_2b6=cc.height()-_2b5*_2b7.length;
}
_2b8(true,_2b6-_2b8(false)+1);
function _2b8(_2b9,_2ba){
var _2bb=0;
for(var i=0;i<_2b4.length;i++){
var p=_2b4[i];
var h=p.panel("header")._outerHeight(_2b5);
if(p.panel("options").collapsible==_2b9){
var _2bc=isNaN(_2ba)?undefined:(_2ba+_2b5*h.length);
p.panel("resize",{width:cc.width(),height:(_2b9?_2bc:undefined)});
_2bb+=p.panel("panel").outerHeight()-_2b5*h.length;
}
}
return _2bb;
};
};
function _2bd(_2be,_2bf,_2c0,all){
var _2c1=$.data(_2be,"accordion").panels;
var pp=[];
for(var i=0;i<_2c1.length;i++){
var p=_2c1[i];
if(_2bf){
if(p.panel("options")[_2bf]==_2c0){
pp.push(p);
}
}else{
if(p[0]==$(_2c0)[0]){
return i;
}
}
}
if(_2bf){
return all?pp:(pp.length?pp[0]:null);
}else{
return -1;
}
};
function _2c2(_2c3){
return _2bd(_2c3,"collapsed",false,true);
};
function _2c4(_2c5){
var pp=_2c2(_2c5);
return pp.length?pp[0]:null;
};
function _2c6(_2c7,_2c8){
return _2bd(_2c7,null,_2c8);
};
function _2c9(_2ca,_2cb){
var _2cc=$.data(_2ca,"accordion").panels;
if(typeof _2cb=="number"){
if(_2cb<0||_2cb>=_2cc.length){
return null;
}else{
return _2cc[_2cb];
}
}
return _2bd(_2ca,"title",_2cb);
};
function _2cd(_2ce){
var opts=$.data(_2ce,"accordion").options;
var cc=$(_2ce);
if(opts.border){
cc.removeClass("accordion-noborder");
}else{
cc.addClass("accordion-noborder");
}
};
function init(_2cf){
var _2d0=$.data(_2cf,"accordion");
var cc=$(_2cf);
cc.addClass("accordion");
_2d0.panels=[];
cc.children("div").each(function(){
var opts=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
var pp=$(this);
_2d0.panels.push(pp);
_2d2(_2cf,pp,opts);
});
cc.bind("_resize",function(e,_2d1){
if($(this).hasClass("easyui-fluid")||_2d1){
_2b0(_2cf);
}
return false;
});
};
function _2d2(_2d3,pp,_2d4){
var opts=$.data(_2d3,"accordion").options;
pp.panel($.extend({},{collapsible:true,minimizable:false,maximizable:false,closable:false,doSize:false,collapsed:true,headerCls:"accordion-header",bodyCls:"accordion-body"},_2d4,{onBeforeExpand:function(){
if(_2d4.onBeforeExpand){
if(_2d4.onBeforeExpand.call(this)==false){
return false;
}
}
if(!opts.multiple){
var all=$.grep(_2c2(_2d3),function(p){
return p.panel("options").collapsible;
});
for(var i=0;i<all.length;i++){
_2dc(_2d3,_2c6(_2d3,all[i]));
}
}
var _2d5=$(this).panel("header");
_2d5.addClass("accordion-header-selected");
_2d5.find(".accordion-collapse").removeClass("accordion-expand");
},onExpand:function(){
if(_2d4.onExpand){
_2d4.onExpand.call(this);
}
opts.onSelect.call(_2d3,$(this).panel("options").title,_2c6(_2d3,this));
},onBeforeCollapse:function(){
if(_2d4.onBeforeCollapse){
if(_2d4.onBeforeCollapse.call(this)==false){
return false;
}
}
var _2d6=$(this).panel("header");
_2d6.removeClass("accordion-header-selected");
_2d6.find(".accordion-collapse").addClass("accordion-expand");
},onCollapse:function(){
if(_2d4.onCollapse){
_2d4.onCollapse.call(this);
}
opts.onUnselect.call(_2d3,$(this).panel("options").title,_2c6(_2d3,this));
}}));
var _2d7=pp.panel("header");
var tool=_2d7.children("div.panel-tool");
tool.children("a.panel-tool-collapse").hide();
var t=$("<a href=\"javascript:void(0)\"></a>").addClass("accordion-collapse accordion-expand").appendTo(tool);
t.bind("click",function(){
_2d8(pp);
return false;
});
pp.panel("options").collapsible?t.show():t.hide();
_2d7.click(function(){
_2d8(pp);
return false;
});
function _2d8(p){
var _2d9=p.panel("options");
if(_2d9.collapsible){
var _2da=_2c6(_2d3,p);
if(_2d9.collapsed){
_2db(_2d3,_2da);
}else{
_2dc(_2d3,_2da);
}
}
};
};
function _2db(_2dd,_2de){
var p=_2c9(_2dd,_2de);
if(!p){
return;
}
_2df(_2dd);
var opts=$.data(_2dd,"accordion").options;
p.panel("expand",opts.animate);
};
function _2dc(_2e0,_2e1){
var p=_2c9(_2e0,_2e1);
if(!p){
return;
}
_2df(_2e0);
var opts=$.data(_2e0,"accordion").options;
p.panel("collapse",opts.animate);
};
function _2e2(_2e3){
var opts=$.data(_2e3,"accordion").options;
var p=_2bd(_2e3,"selected",true);
if(p){
_2e4(_2c6(_2e3,p));
}else{
_2e4(opts.selected);
}
function _2e4(_2e5){
var _2e6=opts.animate;
opts.animate=false;
_2db(_2e3,_2e5);
opts.animate=_2e6;
};
};
function _2df(_2e7){
var _2e8=$.data(_2e7,"accordion").panels;
for(var i=0;i<_2e8.length;i++){
_2e8[i].stop(true,true);
}
};
function add(_2e9,_2ea){
var _2eb=$.data(_2e9,"accordion");
var opts=_2eb.options;
var _2ec=_2eb.panels;
if(_2ea.selected==undefined){
_2ea.selected=true;
}
_2df(_2e9);
var pp=$("<div></div>").appendTo(_2e9);
_2ec.push(pp);
_2d2(_2e9,pp,_2ea);
_2b0(_2e9);
opts.onAdd.call(_2e9,_2ea.title,_2ec.length-1);
if(_2ea.selected){
_2db(_2e9,_2ec.length-1);
}
};
function _2ed(_2ee,_2ef){
var _2f0=$.data(_2ee,"accordion");
var opts=_2f0.options;
var _2f1=_2f0.panels;
_2df(_2ee);
var _2f2=_2c9(_2ee,_2ef);
var _2f3=_2f2.panel("options").title;
var _2f4=_2c6(_2ee,_2f2);
if(!_2f2){
return;
}
if(opts.onBeforeRemove.call(_2ee,_2f3,_2f4)==false){
return;
}
_2f1.splice(_2f4,1);
_2f2.panel("destroy");
if(_2f1.length){
_2b0(_2ee);
var curr=_2c4(_2ee);
if(!curr){
_2db(_2ee,0);
}
}
opts.onRemove.call(_2ee,_2f3,_2f4);
};
$.fn.accordion=function(_2f5,_2f6){
if(typeof _2f5=="string"){
return $.fn.accordion.methods[_2f5](this,_2f6);
}
_2f5=_2f5||{};
return this.each(function(){
var _2f7=$.data(this,"accordion");
if(_2f7){
$.extend(_2f7.options,_2f5);
}else{
$.data(this,"accordion",{options:$.extend({},$.fn.accordion.defaults,$.fn.accordion.parseOptions(this),_2f5),accordion:$(this).addClass("accordion"),panels:[]});
init(this);
}
_2cd(this);
_2b0(this);
_2e2(this);
});
};
$.fn.accordion.methods={options:function(jq){
return $.data(jq[0],"accordion").options;
},panels:function(jq){
return $.data(jq[0],"accordion").panels;
},resize:function(jq,_2f8){
return jq.each(function(){
_2b0(this,_2f8);
});
},getSelections:function(jq){
return _2c2(jq[0]);
},getSelected:function(jq){
return _2c4(jq[0]);
},getPanel:function(jq,_2f9){
return _2c9(jq[0],_2f9);
},getPanelIndex:function(jq,_2fa){
return _2c6(jq[0],_2fa);
},select:function(jq,_2fb){
return jq.each(function(){
_2db(this,_2fb);
});
},unselect:function(jq,_2fc){
return jq.each(function(){
_2dc(this,_2fc);
});
},add:function(jq,_2fd){
return jq.each(function(){
add(this,_2fd);
});
},remove:function(jq,_2fe){
return jq.each(function(){
_2ed(this,_2fe);
});
}};
$.fn.accordion.parseOptions=function(_2ff){
var t=$(_2ff);
return $.extend({},$.parser.parseOptions(_2ff,["width","height",{fit:"boolean",border:"boolean",animate:"boolean",multiple:"boolean",selected:"number"}]));
};
$.fn.accordion.defaults={width:"auto",height:"auto",fit:false,border:true,animate:true,multiple:false,selected:0,onSelect:function(_300,_301){
},onUnselect:function(_302,_303){
},onAdd:function(_304,_305){
},onBeforeRemove:function(_306,_307){
},onRemove:function(_308,_309){
}};
})(jQuery);
(function($){
function _30a(c){
var w=0;
$(c).children().each(function(){
w+=$(this).outerWidth(true);
});
return w;
};
function _30b(_30c){
var opts=$.data(_30c,"tabs").options;
if(opts.tabPosition=="left"||opts.tabPosition=="right"||!opts.showHeader){
return;
}
var _30d=$(_30c).children("div.tabs-header");
var tool=_30d.children("div.tabs-tool");
var _30e=_30d.children("div.tabs-scroller-left");
var _30f=_30d.children("div.tabs-scroller-right");
var wrap=_30d.children("div.tabs-wrap");
var _310=_30d.outerHeight();
if(opts.plain){
_310-=_310-_30d.height();
}
tool._outerHeight(_310);
var _311=_30a(_30d.find("ul.tabs"));
var _312=_30d.width()-tool._outerWidth();
if(_311>_312){
_30e.add(_30f).show()._outerHeight(_310);
if(opts.toolPosition=="left"){
tool.css({left:_30e.outerWidth(),right:""});
wrap.css({marginLeft:_30e.outerWidth()+tool._outerWidth(),marginRight:_30f._outerWidth(),width:_312-_30e.outerWidth()-_30f.outerWidth()});
}else{
tool.css({left:"",right:_30f.outerWidth()});
wrap.css({marginLeft:_30e.outerWidth(),marginRight:_30f.outerWidth()+tool._outerWidth(),width:_312-_30e.outerWidth()-_30f.outerWidth()});
}
}else{
_30e.add(_30f).hide();
if(opts.toolPosition=="left"){
tool.css({left:0,right:""});
wrap.css({marginLeft:tool._outerWidth(),marginRight:0,width:_312});
}else{
tool.css({left:"",right:0});
wrap.css({marginLeft:0,marginRight:tool._outerWidth(),width:_312});
}
}
};
function _313(_314){
var opts=$.data(_314,"tabs").options;
var _315=$(_314).children("div.tabs-header");
if(opts.tools){
if(typeof opts.tools=="string"){
$(opts.tools).addClass("tabs-tool").appendTo(_315);
$(opts.tools).show();
}else{
_315.children("div.tabs-tool").remove();
var _316=$("<div class=\"tabs-tool\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"height:100%\"><tr></tr></table></div>").appendTo(_315);
var tr=_316.find("tr");
for(var i=0;i<opts.tools.length;i++){
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:void(0);\"></a>").appendTo(td);
tool[0].onclick=eval(opts.tools[i].handler||function(){
});
tool.linkbutton($.extend({},opts.tools[i],{plain:true}));
}
}
}else{
_315.children("div.tabs-tool").remove();
}
};
function _317(_318,_319){
var _31a=$.data(_318,"tabs");
var opts=_31a.options;
var cc=$(_318);
if(!opts.doSize){
return;
}
if(_319){
$.extend(opts,{width:_319.width,height:_319.height});
}
cc._size(opts);
var _31b=cc.children("div.tabs-header");
var _31c=cc.children("div.tabs-panels");
var wrap=_31b.find("div.tabs-wrap");
var ul=wrap.find(".tabs");
ul.children("li").removeClass("tabs-first tabs-last");
ul.children("li:first").addClass("tabs-first");
ul.children("li:last").addClass("tabs-last");
if(opts.tabPosition=="left"||opts.tabPosition=="right"){
_31b._outerWidth(opts.showHeader?opts.headerWidth:0);
_31c._outerWidth(cc.width()-_31b.outerWidth());
_31b.add(_31c)._outerHeight(opts.height);
wrap._outerWidth(_31b.width());
ul._outerWidth(wrap.width()).css("height","");
}else{
_31b.children("div.tabs-scroller-left,div.tabs-scroller-right,div.tabs-tool").css("display",opts.showHeader?"block":"none");
_31b._outerWidth(cc.width()).css("height","");
if(opts.showHeader){
_31b.css("background-color","");
wrap.css("height","");
}else{
_31b.css("background-color","transparent");
_31b._outerHeight(0);
wrap._outerHeight(0);
}
ul._outerHeight(opts.tabHeight).css("width","");
ul._outerHeight(ul.outerHeight()-ul.height()-1+opts.tabHeight).css("width","");
_31c._size("height",isNaN(opts.height)?"":(opts.height-_31b.outerHeight()));
_31c._size("width",isNaN(opts.width)?"":opts.width);
}
if(_31a.tabs.length){
var d1=ul.outerWidth(true)-ul.width();
var li=ul.children("li:first");
var d2=li.outerWidth(true)-li.width();
var _31d=_31b.width()-_31b.children(".tabs-tool")._outerWidth();
var _31e=Math.floor((_31d-d1-d2*_31a.tabs.length)/_31a.tabs.length);
$.map(_31a.tabs,function(p){
_31f(p,(opts.justified&&$.inArray(opts.tabPosition,["top","bottom"])>=0)?_31e:undefined);
});
if(opts.justified&&$.inArray(opts.tabPosition,["top","bottom"])>=0){
var _320=_31d-d1-_30a(ul);
_31f(_31a.tabs[_31a.tabs.length-1],_31e+_320);
}
}
_30b(_318);
function _31f(p,_321){
var _322=p.panel("options");
var p_t=_322.tab.find("a.tabs-inner");
var _321=_321?_321:(parseInt(_322.tabWidth||opts.tabWidth||undefined));
if(_321){
p_t._outerWidth(_321);
}else{
p_t.css("width","");
}
p_t._outerHeight(opts.tabHeight);
p_t.css("lineHeight",p_t.height()+"px");
p_t.find(".easyui-fluid:visible").triggerHandler("_resize");
};
};
function _323(_324){
var opts=$.data(_324,"tabs").options;
var tab=_325(_324);
if(tab){
var _326=$(_324).children("div.tabs-panels");
var _327=opts.width=="auto"?"auto":_326.width();
var _328=opts.height=="auto"?"auto":_326.height();
tab.panel("resize",{width:_327,height:_328});
}
};
function _329(_32a){
var tabs=$.data(_32a,"tabs").tabs;
var cc=$(_32a).addClass("tabs-container");
var _32b=$("<div class=\"tabs-panels\"></div>").insertBefore(cc);
cc.children("div").each(function(){
_32b[0].appendChild(this);
});
cc[0].appendChild(_32b[0]);
$("<div class=\"tabs-header\">"+"<div class=\"tabs-scroller-left\"></div>"+"<div class=\"tabs-scroller-right\"></div>"+"<div class=\"tabs-wrap\">"+"<ul class=\"tabs\"></ul>"+"</div>"+"</div>").prependTo(_32a);
cc.children("div.tabs-panels").children("div").each(function(i){
var opts=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
_338(_32a,opts,$(this));
});
cc.children("div.tabs-header").find(".tabs-scroller-left, .tabs-scroller-right").hover(function(){
$(this).addClass("tabs-scroller-over");
},function(){
$(this).removeClass("tabs-scroller-over");
});
cc.bind("_resize",function(e,_32c){
if($(this).hasClass("easyui-fluid")||_32c){
_317(_32a);
_323(_32a);
}
return false;
});
};
function _32d(_32e){
var _32f=$.data(_32e,"tabs");
var opts=_32f.options;
$(_32e).children("div.tabs-header").unbind().bind("click",function(e){
if($(e.target).hasClass("tabs-scroller-left")){
$(_32e).tabs("scrollBy",-opts.scrollIncrement);
}else{
if($(e.target).hasClass("tabs-scroller-right")){
$(_32e).tabs("scrollBy",opts.scrollIncrement);
}else{
var li=$(e.target).closest("li");
if(li.hasClass("tabs-disabled")){
return false;
}
var a=$(e.target).closest("a.tabs-close");
if(a.length){
_351(_32e,_330(li));
}else{
if(li.length){
var _331=_330(li);
var _332=_32f.tabs[_331].panel("options");
if(_332.collapsible){
_332.closed?_348(_32e,_331):_365(_32e,_331);
}else{
_348(_32e,_331);
}
}
}
return false;
}
}
}).bind("contextmenu",function(e){
var li=$(e.target).closest("li");
if(li.hasClass("tabs-disabled")){
return;
}
if(li.length){
opts.onContextMenu.call(_32e,e,li.find("span.tabs-title").html(),_330(li));
}
});
function _330(li){
var _333=0;
li.parent().children("li").each(function(i){
if(li[0]==this){
_333=i;
return false;
}
});
return _333;
};
};
function _334(_335){
var opts=$.data(_335,"tabs").options;
var _336=$(_335).children("div.tabs-header");
var _337=$(_335).children("div.tabs-panels");
_336.removeClass("tabs-header-top tabs-header-bottom tabs-header-left tabs-header-right");
_337.removeClass("tabs-panels-top tabs-panels-bottom tabs-panels-left tabs-panels-right");
if(opts.tabPosition=="top"){
_336.insertBefore(_337);
}else{
if(opts.tabPosition=="bottom"){
_336.insertAfter(_337);
_336.addClass("tabs-header-bottom");
_337.addClass("tabs-panels-top");
}else{
if(opts.tabPosition=="left"){
_336.addClass("tabs-header-left");
_337.addClass("tabs-panels-right");
}else{
if(opts.tabPosition=="right"){
_336.addClass("tabs-header-right");
_337.addClass("tabs-panels-left");
}
}
}
}
if(opts.plain==true){
_336.addClass("tabs-header-plain");
}else{
_336.removeClass("tabs-header-plain");
}
_336.removeClass("tabs-header-narrow").addClass(opts.narrow?"tabs-header-narrow":"");
var tabs=_336.find(".tabs");
tabs.removeClass("tabs-pill").addClass(opts.pill?"tabs-pill":"");
tabs.removeClass("tabs-narrow").addClass(opts.narrow?"tabs-narrow":"");
tabs.removeClass("tabs-justified").addClass(opts.justified?"tabs-justified":"");
if(opts.border==true){
_336.removeClass("tabs-header-noborder");
_337.removeClass("tabs-panels-noborder");
}else{
_336.addClass("tabs-header-noborder");
_337.addClass("tabs-panels-noborder");
}
opts.doSize=true;
};
function _338(_339,_33a,pp){
_33a=_33a||{};
var _33b=$.data(_339,"tabs");
var tabs=_33b.tabs;
if(_33a.index==undefined||_33a.index>tabs.length){
_33a.index=tabs.length;
}
if(_33a.index<0){
_33a.index=0;
}
var ul=$(_339).children("div.tabs-header").find("ul.tabs");
var _33c=$(_339).children("div.tabs-panels");
var tab=$("<li>"+"<a href=\"javascript:void(0)\" class=\"tabs-inner\">"+"<span class=\"tabs-title\"></span>"+"<span class=\"tabs-icon\"></span>"+"</a>"+"</li>");
if(!pp){
pp=$("<div></div>");
}
if(_33a.index>=tabs.length){
tab.appendTo(ul);
pp.appendTo(_33c);
tabs.push(pp);
}else{
tab.insertBefore(ul.children("li:eq("+_33a.index+")"));
pp.insertBefore(_33c.children("div.panel:eq("+_33a.index+")"));
tabs.splice(_33a.index,0,pp);
}
pp.panel($.extend({},_33a,{tab:tab,border:false,noheader:true,closed:true,doSize:false,iconCls:(_33a.icon?_33a.icon:undefined),onLoad:function(){
if(_33a.onLoad){
_33a.onLoad.call(this,arguments);
}
_33b.options.onLoad.call(_339,$(this));
},onBeforeOpen:function(){
if(_33a.onBeforeOpen){
if(_33a.onBeforeOpen.call(this)==false){
return false;
}
}
var p=$(_339).tabs("getSelected");
if(p){
if(p[0]!=this){
$(_339).tabs("unselect",_343(_339,p));
p=$(_339).tabs("getSelected");
if(p){
return false;
}
}else{
_323(_339);
return false;
}
}
var _33d=$(this).panel("options");
_33d.tab.addClass("tabs-selected");
var wrap=$(_339).find(">div.tabs-header>div.tabs-wrap");
var left=_33d.tab.position().left;
var _33e=left+_33d.tab.outerWidth();
if(left<0||_33e>wrap.width()){
var _33f=left-(wrap.width()-_33d.tab.width())/2;
$(_339).tabs("scrollBy",_33f);
}else{
$(_339).tabs("scrollBy",0);
}
var _340=$(this).panel("panel");
_340.css("display","block");
_323(_339);
_340.css("display","none");
},onOpen:function(){
if(_33a.onOpen){
_33a.onOpen.call(this);
}
var _341=$(this).panel("options");
_33b.selectHis.push(_341.title);
_33b.options.onSelect.call(_339,_341.title,_343(_339,this));
},onBeforeClose:function(){
if(_33a.onBeforeClose){
if(_33a.onBeforeClose.call(this)==false){
return false;
}
}
$(this).panel("options").tab.removeClass("tabs-selected");
},onClose:function(){
if(_33a.onClose){
_33a.onClose.call(this);
}
var _342=$(this).panel("options");
_33b.options.onUnselect.call(_339,_342.title,_343(_339,this));
}}));
$(_339).tabs("update",{tab:pp,options:pp.panel("options"),type:"header"});
};
function _344(_345,_346){
var _347=$.data(_345,"tabs");
var opts=_347.options;
if(_346.selected==undefined){
_346.selected=true;
}
_338(_345,_346);
opts.onAdd.call(_345,_346.title,_346.index);
if(_346.selected){
_348(_345,_346.index);
}
};
function _349(_34a,_34b){
_34b.type=_34b.type||"all";
var _34c=$.data(_34a,"tabs").selectHis;
var pp=_34b.tab;
var _34d=pp.panel("options").title;
if(_34b.type=="all"||_34b=="body"){
pp.panel($.extend({},_34b.options,{iconCls:(_34b.options.icon?_34b.options.icon:undefined)}));
}
if(_34b.type=="all"||_34b.type=="header"){
var opts=pp.panel("options");
var tab=opts.tab;
if(opts.header){
tab.find(".tabs-inner").html($(opts.header));
}else{
var _34e=tab.find("span.tabs-title");
var _34f=tab.find("span.tabs-icon");
_34e.html(opts.title);
_34f.attr("class","tabs-icon");
tab.find("a.tabs-close").remove();
if(opts.closable){
_34e.addClass("tabs-closable");
$("<a href=\"javascript:void(0)\" class=\"tabs-close\"></a>").appendTo(tab);
}else{
_34e.removeClass("tabs-closable");
}
if(opts.iconCls){
_34e.addClass("tabs-with-icon");
_34f.addClass(opts.iconCls);
}else{
_34e.removeClass("tabs-with-icon");
}
if(opts.tools){
var _350=tab.find("span.tabs-p-tool");
if(!_350.length){
var _350=$("<span class=\"tabs-p-tool\"></span>").insertAfter(tab.find("a.tabs-inner"));
}
if($.isArray(opts.tools)){
for(var i=0;i<opts.tools.length;i++){
var t=$("<a href=\"javascript:void(0)\"></a>").appendTo(_350);
t.addClass(opts.tools[i].iconCls);
if(opts.tools[i].handler){
t.bind("click",{handler:opts.tools[i].handler},function(e){
if($(this).parents("li").hasClass("tabs-disabled")){
return;
}
e.data.handler.call(this);
});
}
}
}else{
$(opts.tools).children().appendTo(_350);
}
var pr=_350.children().length*12;
if(opts.closable){
pr+=8;
}else{
pr-=3;
_350.css("right","5px");
}
_34e.css("padding-right",pr+"px");
}else{
tab.find("span.tabs-p-tool").remove();
_34e.css("padding-right","");
}
}
if(_34d!=opts.title){
for(var i=0;i<_34c.length;i++){
if(_34c[i]==_34d){
_34c[i]=opts.title;
}
}
}
}
_317(_34a);
$.data(_34a,"tabs").options.onUpdate.call(_34a,opts.title,_343(_34a,pp));
};
function _351(_352,_353){
var opts=$.data(_352,"tabs").options;
var tabs=$.data(_352,"tabs").tabs;
var _354=$.data(_352,"tabs").selectHis;
if(!_355(_352,_353)){
return;
}
var tab=_356(_352,_353);
var _357=tab.panel("options").title;
var _358=_343(_352,tab);
if(opts.onBeforeClose.call(_352,_357,_358)==false){
return;
}
var tab=_356(_352,_353,true);
tab.panel("options").tab.remove();
tab.panel("destroy");
opts.onClose.call(_352,_357,_358);
_317(_352);
for(var i=0;i<_354.length;i++){
if(_354[i]==_357){
_354.splice(i,1);
i--;
}
}
var _359=_354.pop();
if(_359){
_348(_352,_359);
}else{
if(tabs.length){
_348(_352,0);
}
}
};
function _356(_35a,_35b,_35c){
var tabs=$.data(_35a,"tabs").tabs;
if(typeof _35b=="number"){
if(_35b<0||_35b>=tabs.length){
return null;
}else{
var tab=tabs[_35b];
if(_35c){
tabs.splice(_35b,1);
}
return tab;
}
}
for(var i=0;i<tabs.length;i++){
var tab=tabs[i];
if(tab.panel("options").title==_35b){
if(_35c){
tabs.splice(i,1);
}
return tab;
}
}
return null;
};
function _343(_35d,tab){
var tabs=$.data(_35d,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
if(tabs[i][0]==$(tab)[0]){
return i;
}
}
return -1;
};
function _325(_35e){
var tabs=$.data(_35e,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
var tab=tabs[i];
if(tab.panel("options").tab.hasClass("tabs-selected")){
return tab;
}
}
return null;
};
function _35f(_360){
var _361=$.data(_360,"tabs");
var tabs=_361.tabs;
for(var i=0;i<tabs.length;i++){
if(tabs[i].panel("options").selected){
_348(_360,i);
return;
}
}
_348(_360,_361.options.selected);
};
function _348(_362,_363){
var p=_356(_362,_363);
if(p&&!p.is(":visible")){
_364(_362);
p.panel("open");
}
};
function _365(_366,_367){
var p=_356(_366,_367);
if(p&&p.is(":visible")){
_364(_366);
p.panel("close");
}
};
function _364(_368){
$(_368).children("div.tabs-panels").each(function(){
$(this).stop(true,true);
});
};
function _355(_369,_36a){
return _356(_369,_36a)!=null;
};
function _36b(_36c,_36d){
var opts=$.data(_36c,"tabs").options;
opts.showHeader=_36d;
$(_36c).tabs("resize");
};
$.fn.tabs=function(_36e,_36f){
if(typeof _36e=="string"){
return $.fn.tabs.methods[_36e](this,_36f);
}
_36e=_36e||{};
return this.each(function(){
var _370=$.data(this,"tabs");
if(_370){
$.extend(_370.options,_36e);
}else{
$.data(this,"tabs",{options:$.extend({},$.fn.tabs.defaults,$.fn.tabs.parseOptions(this),_36e),tabs:[],selectHis:[]});
_329(this);
}
_313(this);
_334(this);
_317(this);
_32d(this);
_35f(this);
});
};
$.fn.tabs.methods={options:function(jq){
var cc=jq[0];
var opts=$.data(cc,"tabs").options;
var s=_325(cc);
opts.selected=s?_343(cc,s):-1;
return opts;
},tabs:function(jq){
return $.data(jq[0],"tabs").tabs;
},resize:function(jq,_371){
return jq.each(function(){
_317(this,_371);
_323(this);
});
},add:function(jq,_372){
return jq.each(function(){
_344(this,_372);
});
},close:function(jq,_373){
return jq.each(function(){
_351(this,_373);
});
},getTab:function(jq,_374){
return _356(jq[0],_374);
},getTabIndex:function(jq,tab){
return _343(jq[0],tab);
},getSelected:function(jq){
return _325(jq[0]);
},select:function(jq,_375){
return jq.each(function(){
_348(this,_375);
});
},unselect:function(jq,_376){
return jq.each(function(){
_365(this,_376);
});
},exists:function(jq,_377){
return _355(jq[0],_377);
},update:function(jq,_378){
return jq.each(function(){
_349(this,_378);
});
},enableTab:function(jq,_379){
return jq.each(function(){
$(this).tabs("getTab",_379).panel("options").tab.removeClass("tabs-disabled");
});
},disableTab:function(jq,_37a){
return jq.each(function(){
$(this).tabs("getTab",_37a).panel("options").tab.addClass("tabs-disabled");
});
},showHeader:function(jq){
return jq.each(function(){
_36b(this,true);
});
},hideHeader:function(jq){
return jq.each(function(){
_36b(this,false);
});
},scrollBy:function(jq,_37b){
return jq.each(function(){
var opts=$(this).tabs("options");
var wrap=$(this).find(">div.tabs-header>div.tabs-wrap");
var pos=Math.min(wrap._scrollLeft()+_37b,_37c());
wrap.animate({scrollLeft:pos},opts.scrollDuration);
function _37c(){
var w=0;
var ul=wrap.children("ul");
ul.children("li").each(function(){
w+=$(this).outerWidth(true);
});
return w-wrap.width()+(ul.outerWidth()-ul.width());
};
});
}};
$.fn.tabs.parseOptions=function(_37d){
return $.extend({},$.parser.parseOptions(_37d,["tools","toolPosition","tabPosition",{fit:"boolean",border:"boolean",plain:"boolean"},{headerWidth:"number",tabWidth:"number",tabHeight:"number",selected:"number"},{showHeader:"boolean",justified:"boolean",narrow:"boolean",pill:"boolean"}]));
};
$.fn.tabs.defaults={width:"auto",height:"auto",headerWidth:150,tabWidth:"auto",tabHeight:27,selected:0,showHeader:true,plain:false,fit:false,border:true,justified:false,narrow:false,pill:false,tools:null,toolPosition:"right",tabPosition:"top",scrollIncrement:100,scrollDuration:400,onLoad:function(_37e){
},onSelect:function(_37f,_380){
},onUnselect:function(_381,_382){
},onBeforeClose:function(_383,_384){
},onClose:function(_385,_386){
},onAdd:function(_387,_388){
},onUpdate:function(_389,_38a){
},onContextMenu:function(e,_38b,_38c){
}};
})(jQuery);
(function($){
var _38d=false;
function _38e(_38f,_390){
var _391=$.data(_38f,"layout");
var opts=_391.options;
var _392=_391.panels;
var cc=$(_38f);
if(_390){
$.extend(opts,{width:_390.width,height:_390.height});
}
if(_38f.tagName.toLowerCase()=="body"){
cc._size("fit");
}else{
cc._size(opts);
}
var cpos={top:0,left:0,width:cc.width(),height:cc.height()};
_393(_394(_392.expandNorth)?_392.expandNorth:_392.north,"n");
_393(_394(_392.expandSouth)?_392.expandSouth:_392.south,"s");
_395(_394(_392.expandEast)?_392.expandEast:_392.east,"e");
_395(_394(_392.expandWest)?_392.expandWest:_392.west,"w");
_392.center.panel("resize",cpos);
function _393(pp,type){
if(!pp.length||!_394(pp)){
return;
}
var opts=pp.panel("options");
pp.panel("resize",{width:cc.width(),height:opts.height});
var _396=pp.panel("panel").outerHeight();
pp.panel("move",{left:0,top:(type=="n"?0:cc.height()-_396)});
cpos.height-=_396;
if(type=="n"){
cpos.top+=_396;
if(!opts.split&&opts.border){
cpos.top--;
}
}
if(!opts.split&&opts.border){
cpos.height++;
}
};
function _395(pp,type){
if(!pp.length||!_394(pp)){
return;
}
var opts=pp.panel("options");
pp.panel("resize",{width:opts.width,height:cpos.height});
var _397=pp.panel("panel").outerWidth();
pp.panel("move",{left:(type=="e"?cc.width()-_397:0),top:cpos.top});
cpos.width-=_397;
if(type=="w"){
cpos.left+=_397;
if(!opts.split&&opts.border){
cpos.left--;
}
}
if(!opts.split&&opts.border){
cpos.width++;
}
};
};
function init(_398){
var cc=$(_398);
cc.addClass("layout");
function _399(cc){
cc.children("div").each(function(){
var opts=$.fn.layout.parsePanelOptions(this);
if("north,south,east,west,center".indexOf(opts.region)>=0){
_39b(_398,opts,this);
}
});
};
cc.children("form").length?_399(cc.children("form")):_399(cc);
cc.append("<div class=\"layout-split-proxy-h\"></div><div class=\"layout-split-proxy-v\"></div>");
cc.bind("_resize",function(e,_39a){
if($(this).hasClass("easyui-fluid")||_39a){
_38e(_398);
}
return false;
});
};
function _39b(_39c,_39d,el){
_39d.region=_39d.region||"center";
var _39e=$.data(_39c,"layout").panels;
var cc=$(_39c);
var dir=_39d.region;
if(_39e[dir].length){
return;
}
var pp=$(el);
if(!pp.length){
pp=$("<div></div>").appendTo(cc);
}
var _39f=$.extend({},$.fn.layout.paneldefaults,{width:(pp.length?parseInt(pp[0].style.width)||pp.outerWidth():"auto"),height:(pp.length?parseInt(pp[0].style.height)||pp.outerHeight():"auto"),doSize:false,collapsible:true,cls:("layout-panel layout-panel-"+dir),bodyCls:"layout-body",onOpen:function(){
var tool=$(this).panel("header").children("div.panel-tool");
tool.children("a.panel-tool-collapse").hide();
var _3a0={north:"up",south:"down",east:"right",west:"left"};
if(!_3a0[dir]){
return;
}
var _3a1="layout-button-"+_3a0[dir];
var t=tool.children("a."+_3a1);
if(!t.length){
t=$("<a href=\"javascript:void(0)\"></a>").addClass(_3a1).appendTo(tool);
t.bind("click",{dir:dir},function(e){
_3ad(_39c,e.data.dir);
return false;
});
}
$(this).panel("options").collapsible?t.show():t.hide();
}},_39d);
pp.panel(_39f);
_39e[dir]=pp;
var _3a2={north:"s",south:"n",east:"w",west:"e"};
var _3a3=pp.panel("panel");
if(pp.panel("options").split){
_3a3.addClass("layout-split-"+dir);
}
_3a3.resizable($.extend({},{handles:(_3a2[dir]||""),disabled:(!pp.panel("options").split),onStartResize:function(e){
_38d=true;
if(dir=="north"||dir=="south"){
var _3a4=$(">div.layout-split-proxy-v",_39c);
}else{
var _3a4=$(">div.layout-split-proxy-h",_39c);
}
var top=0,left=0,_3a5=0,_3a6=0;
var pos={display:"block"};
if(dir=="north"){
pos.top=parseInt(_3a3.css("top"))+_3a3.outerHeight()-_3a4.height();
pos.left=parseInt(_3a3.css("left"));
pos.width=_3a3.outerWidth();
pos.height=_3a4.height();
}else{
if(dir=="south"){
pos.top=parseInt(_3a3.css("top"));
pos.left=parseInt(_3a3.css("left"));
pos.width=_3a3.outerWidth();
pos.height=_3a4.height();
}else{
if(dir=="east"){
pos.top=parseInt(_3a3.css("top"))||0;
pos.left=parseInt(_3a3.css("left"))||0;
pos.width=_3a4.width();
pos.height=_3a3.outerHeight();
}else{
if(dir=="west"){
pos.top=parseInt(_3a3.css("top"))||0;
pos.left=_3a3.outerWidth()-_3a4.width();
pos.width=_3a4.width();
pos.height=_3a3.outerHeight();
}
}
}
}
_3a4.css(pos);
$("<div class=\"layout-mask\"></div>").css({left:0,top:0,width:cc.width(),height:cc.height()}).appendTo(cc);
},onResize:function(e){
if(dir=="north"||dir=="south"){
var _3a7=$(">div.layout-split-proxy-v",_39c);
_3a7.css("top",e.pageY-$(_39c).offset().top-_3a7.height()/2);
}else{
var _3a7=$(">div.layout-split-proxy-h",_39c);
_3a7.css("left",e.pageX-$(_39c).offset().left-_3a7.width()/2);
}
return false;
},onStopResize:function(e){
cc.children("div.layout-split-proxy-v,div.layout-split-proxy-h").hide();
pp.panel("resize",e.data);
_38e(_39c);
_38d=false;
cc.find(">div.layout-mask").remove();
}},_39d));
};
function _3a8(_3a9,_3aa){
var _3ab=$.data(_3a9,"layout").panels;
if(_3ab[_3aa].length){
_3ab[_3aa].panel("destroy");
_3ab[_3aa]=$();
var _3ac="expand"+_3aa.substring(0,1).toUpperCase()+_3aa.substring(1);
if(_3ab[_3ac]){
_3ab[_3ac].panel("destroy");
_3ab[_3ac]=undefined;
}
}
};
function _3ad(_3ae,_3af,_3b0){
if(_3b0==undefined){
_3b0="normal";
}
var _3b1=$.data(_3ae,"layout").panels;
var p=_3b1[_3af];
var _3b2=p.panel("options");
if(_3b2.onBeforeCollapse.call(p)==false){
return;
}
var _3b3="expand"+_3af.substring(0,1).toUpperCase()+_3af.substring(1);
if(!_3b1[_3b3]){
_3b1[_3b3]=_3b4(_3af);
_3b1[_3b3].panel("panel").bind("click",function(){
p.panel("expand",false).panel("open");
var _3b5=_3b6();
p.panel("resize",_3b5.collapse);
p.panel("panel").animate(_3b5.expand,function(){
$(this).unbind(".layout").bind("mouseleave.layout",{region:_3af},function(e){
if(_38d==true){
return;
}
if($("body>div.combo-p>div.combo-panel:visible").length){
return;
}
_3ad(_3ae,e.data.region);
});
});
return false;
});
}
var _3b7=_3b6();
if(!_394(_3b1[_3b3])){
_3b1.center.panel("resize",_3b7.resizeC);
}
p.panel("panel").animate(_3b7.collapse,_3b0,function(){
p.panel("collapse",false).panel("close");
_3b1[_3b3].panel("open").panel("resize",_3b7.expandP);
$(this).unbind(".layout");
});
function _3b4(dir){
var icon;
if(dir=="east"){
icon="layout-button-left";
}else{
if(dir=="west"){
icon="layout-button-right";
}else{
if(dir=="north"){
icon="layout-button-down";
}else{
if(dir=="south"){
icon="layout-button-up";
}
}
}
}
var p=$("<div></div>").appendTo(_3ae);
p.panel($.extend({},$.fn.layout.paneldefaults,{cls:("layout-expand layout-expand-"+dir),title:"&nbsp;",closed:true,minWidth:0,minHeight:0,doSize:false,tools:[{iconCls:icon,handler:function(){
_3bd(_3ae,_3af);
return false;
}}]}));
p.panel("panel").hover(function(){
$(this).addClass("layout-expand-over");
},function(){
$(this).removeClass("layout-expand-over");
});
return p;
};
function _3b6(){
var cc=$(_3ae);
var _3b8=_3b1.center.panel("options");
var _3b9=_3b2.collapsedSize;
if(_3af=="east"){
var _3ba=p.panel("panel")._outerWidth();
var _3bb=_3b8.width+_3ba-_3b9;
if(_3b2.split||!_3b2.border){
_3bb++;
}
return {resizeC:{width:_3bb},expand:{left:cc.width()-_3ba},expandP:{top:_3b8.top,left:cc.width()-_3b9,width:_3b9,height:_3b8.height},collapse:{left:cc.width(),top:_3b8.top,height:_3b8.height}};
}else{
if(_3af=="west"){
var _3ba=p.panel("panel")._outerWidth();
var _3bb=_3b8.width+_3ba-_3b9;
if(_3b2.split||!_3b2.border){
_3bb++;
}
return {resizeC:{width:_3bb,left:_3b9-1},expand:{left:0},expandP:{left:0,top:_3b8.top,width:_3b9,height:_3b8.height},collapse:{left:-_3ba,top:_3b8.top,height:_3b8.height}};
}else{
if(_3af=="north"){
var _3bc=p.panel("panel")._outerHeight();
var hh=_3b8.height;
if(!_394(_3b1.expandNorth)){
hh+=_3bc-_3b9+((_3b2.split||!_3b2.border)?1:0);
}
_3b1.east.add(_3b1.west).add(_3b1.expandEast).add(_3b1.expandWest).panel("resize",{top:_3b9-1,height:hh});
return {resizeC:{top:_3b9-1,height:hh},expand:{top:0},expandP:{top:0,left:0,width:cc.width(),height:_3b9},collapse:{top:-_3bc,width:cc.width()}};
}else{
if(_3af=="south"){
var _3bc=p.panel("panel")._outerHeight();
var hh=_3b8.height;
if(!_394(_3b1.expandSouth)){
hh+=_3bc-_3b9+((_3b2.split||!_3b2.border)?1:0);
}
_3b1.east.add(_3b1.west).add(_3b1.expandEast).add(_3b1.expandWest).panel("resize",{height:hh});
return {resizeC:{height:hh},expand:{top:cc.height()-_3bc},expandP:{top:cc.height()-_3b9,left:0,width:cc.width(),height:_3b9},collapse:{top:cc.height(),width:cc.width()}};
}
}
}
}
};
};
function _3bd(_3be,_3bf){
var _3c0=$.data(_3be,"layout").panels;
var p=_3c0[_3bf];
var _3c1=p.panel("options");
if(_3c1.onBeforeExpand.call(p)==false){
return;
}
var _3c2="expand"+_3bf.substring(0,1).toUpperCase()+_3bf.substring(1);
if(_3c0[_3c2]){
_3c0[_3c2].panel("close");
p.panel("panel").stop(true,true);
p.panel("expand",false).panel("open");
var _3c3=_3c4();
p.panel("resize",_3c3.collapse);
p.panel("panel").animate(_3c3.expand,function(){
_38e(_3be);
});
}
function _3c4(){
var cc=$(_3be);
var _3c5=_3c0.center.panel("options");
if(_3bf=="east"&&_3c0.expandEast){
return {collapse:{left:cc.width(),top:_3c5.top,height:_3c5.height},expand:{left:cc.width()-p.panel("panel")._outerWidth()}};
}else{
if(_3bf=="west"&&_3c0.expandWest){
return {collapse:{left:-p.panel("panel")._outerWidth(),top:_3c5.top,height:_3c5.height},expand:{left:0}};
}else{
if(_3bf=="north"&&_3c0.expandNorth){
return {collapse:{top:-p.panel("panel")._outerHeight(),width:cc.width()},expand:{top:0}};
}else{
if(_3bf=="south"&&_3c0.expandSouth){
return {collapse:{top:cc.height(),width:cc.width()},expand:{top:cc.height()-p.panel("panel")._outerHeight()}};
}
}
}
}
};
};
function _394(pp){
if(!pp){
return false;
}
if(pp.length){
return pp.panel("panel").is(":visible");
}else{
return false;
}
};
function _3c6(_3c7){
var _3c8=$.data(_3c7,"layout").panels;
_3c9("east");
_3c9("west");
_3c9("north");
_3c9("south");
function _3c9(_3ca){
var p=_3c8[_3ca];
if(p.length&&p.panel("options").collapsed){
_3ad(_3c7,_3ca,0);
}
};
};
function _3cb(_3cc,_3cd,_3ce){
var p=$(_3cc).layout("panel",_3cd);
p.panel("options").split=_3ce;
var cls="layout-split-"+_3cd;
var _3cf=p.panel("panel").removeClass(cls);
if(_3ce){
_3cf.addClass(cls);
}
_3cf.resizable({disabled:(!_3ce)});
_38e(_3cc);
};
$.fn.layout=function(_3d0,_3d1){
if(typeof _3d0=="string"){
return $.fn.layout.methods[_3d0](this,_3d1);
}
_3d0=_3d0||{};
return this.each(function(){
var _3d2=$.data(this,"layout");
if(_3d2){
$.extend(_3d2.options,_3d0);
}else{
var opts=$.extend({},$.fn.layout.defaults,$.fn.layout.parseOptions(this),_3d0);
$.data(this,"layout",{options:opts,panels:{center:$(),north:$(),south:$(),east:$(),west:$()}});
init(this);
}
_38e(this);
_3c6(this);
});
};
$.fn.layout.methods={options:function(jq){
return $.data(jq[0],"layout").options;
},resize:function(jq,_3d3){
return jq.each(function(){
_38e(this,_3d3);
});
},panel:function(jq,_3d4){
return $.data(jq[0],"layout").panels[_3d4];
},collapse:function(jq,_3d5){
return jq.each(function(){
_3ad(this,_3d5);
});
},expand:function(jq,_3d6){
return jq.each(function(){
_3bd(this,_3d6);
});
},add:function(jq,_3d7){
return jq.each(function(){
_39b(this,_3d7);
_38e(this);
if($(this).layout("panel",_3d7.region).panel("options").collapsed){
_3ad(this,_3d7.region,0);
}
});
},remove:function(jq,_3d8){
return jq.each(function(){
_3a8(this,_3d8);
_38e(this);
});
},split:function(jq,_3d9){
return jq.each(function(){
_3cb(this,_3d9,true);
});
},unsplit:function(jq,_3da){
return jq.each(function(){
_3cb(this,_3da,false);
});
}};
$.fn.layout.parseOptions=function(_3db){
return $.extend({},$.parser.parseOptions(_3db,[{fit:"boolean"}]));
};
$.fn.layout.defaults={fit:false};
$.fn.layout.parsePanelOptions=function(_3dc){
var t=$(_3dc);
return $.extend({},$.fn.panel.parseOptions(_3dc),$.parser.parseOptions(_3dc,["region",{split:"boolean",collpasedSize:"number",minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number"}]));
};
$.fn.layout.paneldefaults=$.extend({},$.fn.panel.defaults,{region:null,split:false,collapsedSize:28,minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000});
})(jQuery);
(function($){
$(function(){
$(document).unbind(".menu").bind("mousedown.menu",function(e){
var m=$(e.target).closest("div.menu,div.combo-p");
if(m.length){
return;
}
$("body>div.menu-top:visible").not(".menu-inline").menu("hide");
_3dd($("body>div.menu:visible").not(".menu-inline"));
});
});
function init(_3de){
var opts=$.data(_3de,"menu").options;
$(_3de).addClass("menu-top");
opts.inline?$(_3de).addClass("menu-inline"):$(_3de).appendTo("body");
$(_3de).bind("_resize",function(e,_3df){
if($(this).hasClass("easyui-fluid")||_3df){
$(_3de).menu("resize",_3de);
}
return false;
});
var _3e0=_3e1($(_3de));
for(var i=0;i<_3e0.length;i++){
_3e2(_3e0[i]);
}
function _3e1(menu){
var _3e3=[];
menu.addClass("menu");
_3e3.push(menu);
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
var _3e4=$(this).children("div");
if(_3e4.length){
_3e4.appendTo("body");
this.submenu=_3e4;
var mm=_3e1(_3e4);
_3e3=_3e3.concat(mm);
}
});
}
return _3e3;
};
function _3e2(menu){
var wh=$.parser.parseOptions(menu[0],["width","height"]);
menu[0].originalHeight=wh.height||0;
if(menu.hasClass("menu-content")){
menu[0].originalWidth=wh.width||menu._outerWidth();
}else{
menu[0].originalWidth=wh.width||0;
menu.children("div").each(function(){
var item=$(this);
var _3e5=$.extend({},$.parser.parseOptions(this,["name","iconCls","href",{separator:"boolean"}]),{disabled:(item.attr("disabled")?true:undefined)});
if(_3e5.separator){
item.addClass("menu-sep");
}
if(!item.hasClass("menu-sep")){
item[0].itemName=_3e5.name||"";
item[0].itemHref=_3e5.href||"";
var text=item.addClass("menu-item").html();
item.empty().append($("<div class=\"menu-text\"></div>").html(text));
if(_3e5.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_3e5.iconCls).appendTo(item);
}
if(_3e5.disabled){
_3e6(_3de,item[0],true);
}
if(item[0].submenu){
$("<div class=\"menu-rightarrow\"></div>").appendTo(item);
}
_3e7(_3de,item);
}
});
$("<div class=\"menu-line\"></div>").prependTo(menu);
}
_3e8(_3de,menu);
if(!menu.hasClass("menu-inline")){
menu.hide();
}
_3e9(_3de,menu);
};
};
function _3e8(_3ea,menu){
var opts=$.data(_3ea,"menu").options;
var _3eb=menu.attr("style")||"";
menu.css({display:"block",left:-10000,height:"auto",overflow:"hidden"});
menu.find(".menu-item").each(function(){
$(this)._outerHeight(opts.itemHeight);
$(this).find(".menu-text").css({height:(opts.itemHeight-2)+"px",lineHeight:(opts.itemHeight-2)+"px"});
});
menu.removeClass("menu-noline").addClass(opts.noline?"menu-noline":"");
var _3ec=menu[0].originalWidth||"auto";
if(isNaN(parseInt(_3ec))){
_3ec=0;
menu.find("div.menu-text").each(function(){
if(_3ec<$(this)._outerWidth()){
_3ec=$(this)._outerWidth();
}
});
_3ec+=40;
}
var _3ed=menu.outerHeight();
var _3ee=menu[0].originalHeight||"auto";
if(isNaN(parseInt(_3ee))){
_3ee=_3ed;
if(menu.hasClass("menu-top")&&opts.alignTo){
var at=$(opts.alignTo);
var h1=at.offset().top-$(document).scrollTop();
var h2=$(window)._outerHeight()+$(document).scrollTop()-at.offset().top-at._outerHeight();
_3ee=Math.min(_3ee,Math.max(h1,h2));
}else{
if(_3ee>$(window)._outerHeight()){
_3ee=$(window).height();
}
}
}
menu.attr("style",_3eb);
menu._size({fit:(menu[0]==_3ea?opts.fit:false),width:_3ec,minWidth:opts.minWidth,height:_3ee});
menu.css("overflow",menu.outerHeight()<_3ed?"auto":"hidden");
menu.children("div.menu-line")._outerHeight(_3ed-2);
};
function _3e9(_3ef,menu){
if(menu.hasClass("menu-inline")){
return;
}
var _3f0=$.data(_3ef,"menu");
menu.unbind(".menu").bind("mouseenter.menu",function(){
if(_3f0.timer){
clearTimeout(_3f0.timer);
_3f0.timer=null;
}
}).bind("mouseleave.menu",function(){
if(_3f0.options.hideOnUnhover){
_3f0.timer=setTimeout(function(){
_3f1(_3ef,$(_3ef).hasClass("menu-inline"));
},_3f0.options.duration);
}
});
};
function _3e7(_3f2,item){
if(!item.hasClass("menu-item")){
return;
}
item.unbind(".menu");
item.bind("click.menu",function(){
if($(this).hasClass("menu-item-disabled")){
return;
}
if(!this.submenu){
_3f1(_3f2,$(_3f2).hasClass("menu-inline"));
var href=this.itemHref;
if(href){
location.href=href;
}
}
$(this).trigger("mouseenter");
var item=$(_3f2).menu("getItem",this);
$.data(_3f2,"menu").options.onClick.call(_3f2,item);
}).bind("mouseenter.menu",function(e){
item.siblings().each(function(){
if(this.submenu){
_3dd(this.submenu);
}
$(this).removeClass("menu-active");
});
item.addClass("menu-active");
if($(this).hasClass("menu-item-disabled")){
item.addClass("menu-active-disabled");
return;
}
var _3f3=item[0].submenu;
if(_3f3){
$(_3f2).menu("show",{menu:_3f3,parent:item});
}
}).bind("mouseleave.menu",function(e){
item.removeClass("menu-active menu-active-disabled");
var _3f4=item[0].submenu;
if(_3f4){
if(e.pageX>=parseInt(_3f4.css("left"))){
item.addClass("menu-active");
}else{
_3dd(_3f4);
}
}else{
item.removeClass("menu-active");
}
});
};
function _3f1(_3f5,_3f6){
var _3f7=$.data(_3f5,"menu");
if(_3f7){
if($(_3f5).is(":visible")){
_3dd($(_3f5));
if(_3f6){
$(_3f5).show();
}else{
_3f7.options.onHide.call(_3f5);
}
}
}
return false;
};
function _3f8(_3f9,_3fa){
var left,top;
_3fa=_3fa||{};
var menu=$(_3fa.menu||_3f9);
$(_3f9).menu("resize",menu[0]);
if(menu.hasClass("menu-top")){
var opts=$.data(_3f9,"menu").options;
$.extend(opts,_3fa);
left=opts.left;
top=opts.top;
if(opts.alignTo){
var at=$(opts.alignTo);
left=at.offset().left;
top=at.offset().top+at._outerHeight();
if(opts.align=="right"){
left+=at.outerWidth()-menu.outerWidth();
}
}
if(left+menu.outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-menu.outerWidth()-5;
}
if(left<0){
left=0;
}
top=_3fb(top,opts.alignTo);
}else{
var _3fc=_3fa.parent;
left=_3fc.offset().left+_3fc.outerWidth()-2;
if(left+menu.outerWidth()+5>$(window)._outerWidth()+$(document).scrollLeft()){
left=_3fc.offset().left-menu.outerWidth()+2;
}
top=_3fb(_3fc.offset().top-3);
}
function _3fb(top,_3fd){
if(top+menu.outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
if(_3fd){
top=$(_3fd).offset().top-menu._outerHeight();
}else{
top=$(window)._outerHeight()+$(document).scrollTop()-menu.outerHeight();
}
}
if(top<0){
top=0;
}
return top;
};
menu.css({left:left,top:top});
menu.show(0,function(){
if(!menu[0].shadow){
menu[0].shadow=$("<div class=\"menu-shadow\"></div>").insertAfter(menu);
}
menu[0].shadow.css({display:(menu.hasClass("menu-inline")?"none":"block"),zIndex:$.fn.menu.defaults.zIndex++,left:menu.css("left"),top:menu.css("top"),width:menu.outerWidth(),height:menu.outerHeight()});
menu.css("z-index",$.fn.menu.defaults.zIndex++);
if(menu.hasClass("menu-top")){
$.data(menu[0],"menu").options.onShow.call(menu[0]);
}
});
};
function _3dd(menu){
if(menu&&menu.length){
_3fe(menu);
menu.find("div.menu-item").each(function(){
if(this.submenu){
_3dd(this.submenu);
}
$(this).removeClass("menu-active");
});
}
function _3fe(m){
m.stop(true,true);
if(m[0].shadow){
m[0].shadow.hide();
}
m.hide();
};
};
function _3ff(_400,text){
var _401=null;
var tmp=$("<div></div>");
function find(menu){
menu.children("div.menu-item").each(function(){
var item=$(_400).menu("getItem",this);
var s=tmp.empty().html(item.text).text();
if(text==$.trim(s)){
_401=item;
}else{
if(this.submenu&&!_401){
find(this.submenu);
}
}
});
};
find($(_400));
tmp.remove();
return _401;
};
function _3e6(_402,_403,_404){
var t=$(_403);
if(!t.hasClass("menu-item")){
return;
}
if(_404){
t.addClass("menu-item-disabled");
if(_403.onclick){
_403.onclick1=_403.onclick;
_403.onclick=null;
}
}else{
t.removeClass("menu-item-disabled");
if(_403.onclick1){
_403.onclick=_403.onclick1;
_403.onclick1=null;
}
}
};
function _405(_406,_407){
var opts=$.data(_406,"menu").options;
var menu=$(_406);
if(_407.parent){
if(!_407.parent.submenu){
var _408=$("<div class=\"menu\"><div class=\"menu-line\"></div></div>").appendTo("body");
_408.hide();
_407.parent.submenu=_408;
$("<div class=\"menu-rightarrow\"></div>").appendTo(_407.parent);
}
menu=_407.parent.submenu;
}
if(_407.separator){
var item=$("<div class=\"menu-sep\"></div>").appendTo(menu);
}else{
var item=$("<div class=\"menu-item\"></div>").appendTo(menu);
$("<div class=\"menu-text\"></div>").html(_407.text).appendTo(item);
}
if(_407.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_407.iconCls).appendTo(item);
}
if(_407.id){
item.attr("id",_407.id);
}
if(_407.name){
item[0].itemName=_407.name;
}
if(_407.href){
item[0].itemHref=_407.href;
}
if(_407.onclick){
if(typeof _407.onclick=="string"){
item.attr("onclick",_407.onclick);
}else{
item[0].onclick=eval(_407.onclick);
}
}
if(_407.handler){
item[0].onclick=eval(_407.handler);
}
if(_407.disabled){
_3e6(_406,item[0],true);
}
_3e7(_406,item);
_3e9(_406,menu);
_3e8(_406,menu);
};
function _409(_40a,_40b){
function _40c(el){
if(el.submenu){
el.submenu.children("div.menu-item").each(function(){
_40c(this);
});
var _40d=el.submenu[0].shadow;
if(_40d){
_40d.remove();
}
el.submenu.remove();
}
$(el).remove();
};
var menu=$(_40b).parent();
_40c(_40b);
_3e8(_40a,menu);
};
function _40e(_40f,_410,_411){
var menu=$(_410).parent();
if(_411){
$(_410).show();
}else{
$(_410).hide();
}
_3e8(_40f,menu);
};
function _412(_413){
$(_413).children("div.menu-item").each(function(){
_409(_413,this);
});
if(_413.shadow){
_413.shadow.remove();
}
$(_413).remove();
};
$.fn.menu=function(_414,_415){
if(typeof _414=="string"){
return $.fn.menu.methods[_414](this,_415);
}
_414=_414||{};
return this.each(function(){
var _416=$.data(this,"menu");
if(_416){
$.extend(_416.options,_414);
}else{
_416=$.data(this,"menu",{options:$.extend({},$.fn.menu.defaults,$.fn.menu.parseOptions(this),_414)});
init(this);
}
$(this).css({left:_416.options.left,top:_416.options.top});
});
};
$.fn.menu.methods={options:function(jq){
return $.data(jq[0],"menu").options;
},show:function(jq,pos){
return jq.each(function(){
_3f8(this,pos);
});
},hide:function(jq){
return jq.each(function(){
_3f1(this);
});
},destroy:function(jq){
return jq.each(function(){
_412(this);
});
},setText:function(jq,_417){
return jq.each(function(){
$(_417.target).children("div.menu-text").html(_417.text);
});
},setIcon:function(jq,_418){
return jq.each(function(){
$(_418.target).children("div.menu-icon").remove();
if(_418.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_418.iconCls).appendTo(_418.target);
}
});
},getItem:function(jq,_419){
var t=$(_419);
var item={target:_419,id:t.attr("id"),text:$.trim(t.children("div.menu-text").html()),disabled:t.hasClass("menu-item-disabled"),name:_419.itemName,href:_419.itemHref,onclick:_419.onclick};
var icon=t.children("div.menu-icon");
if(icon.length){
var cc=[];
var aa=icon.attr("class").split(" ");
for(var i=0;i<aa.length;i++){
if(aa[i]!="menu-icon"){
cc.push(aa[i]);
}
}
item.iconCls=cc.join(" ");
}
return item;
},findItem:function(jq,text){
return _3ff(jq[0],text);
},appendItem:function(jq,_41a){
return jq.each(function(){
_405(this,_41a);
});
},removeItem:function(jq,_41b){
return jq.each(function(){
_409(this,_41b);
});
},enableItem:function(jq,_41c){
return jq.each(function(){
_3e6(this,_41c,false);
});
},disableItem:function(jq,_41d){
return jq.each(function(){
_3e6(this,_41d,true);
});
},showItem:function(jq,_41e){
return jq.each(function(){
_40e(this,_41e,true);
});
},hideItem:function(jq,_41f){
return jq.each(function(){
_40e(this,_41f,false);
});
},resize:function(jq,_420){
return jq.each(function(){
_3e8(this,$(_420));
});
}};
$.fn.menu.parseOptions=function(_421){
return $.extend({},$.parser.parseOptions(_421,[{minWidth:"number",itemHeight:"number",duration:"number",hideOnUnhover:"boolean"},{fit:"boolean",inline:"boolean",noline:"boolean"}]));
};
$.fn.menu.defaults={zIndex:110000,left:0,top:0,alignTo:null,align:"left",minWidth:120,itemHeight:22,duration:100,hideOnUnhover:true,inline:false,fit:false,noline:false,onShow:function(){
},onHide:function(){
},onClick:function(item){
}};
})(jQuery);
(function($){
function init(_422){
var opts=$.data(_422,"menubutton").options;
var btn=$(_422);
btn.linkbutton(opts);
if(opts.hasDownArrow){
btn.removeClass(opts.cls.btn1+" "+opts.cls.btn2).addClass("m-btn");
btn.removeClass("m-btn-small m-btn-medium m-btn-large").addClass("m-btn-"+opts.size);
var _423=btn.find(".l-btn-left");
$("<span></span>").addClass(opts.cls.arrow).appendTo(_423);
$("<span></span>").addClass("m-btn-line").appendTo(_423);
}
$(_422).menubutton("resize");
if(opts.menu){
$(opts.menu).menu({duration:opts.duration});
var _424=$(opts.menu).menu("options");
var _425=_424.onShow;
var _426=_424.onHide;
$.extend(_424,{onShow:function(){
var _427=$(this).menu("options");
var btn=$(_427.alignTo);
var opts=btn.menubutton("options");
btn.addClass((opts.plain==true)?opts.cls.btn2:opts.cls.btn1);
_425.call(this);
},onHide:function(){
var _428=$(this).menu("options");
var btn=$(_428.alignTo);
var opts=btn.menubutton("options");
btn.removeClass((opts.plain==true)?opts.cls.btn2:opts.cls.btn1);
_426.call(this);
}});
}
};
function _429(_42a){
var opts=$.data(_42a,"menubutton").options;
var btn=$(_42a);
var t=btn.find("."+opts.cls.trigger);
if(!t.length){
t=btn;
}
t.unbind(".menubutton");
var _42b=null;
t.bind("click.menubutton",function(){
if(!_42c()){
_42d(_42a);
return false;
}
}).bind("mouseenter.menubutton",function(){
if(!_42c()){
_42b=setTimeout(function(){
_42d(_42a);
},opts.duration);
return false;
}
}).bind("mouseleave.menubutton",function(){
if(_42b){
clearTimeout(_42b);
}
$(opts.menu).triggerHandler("mouseleave");
});
function _42c(){
return $(_42a).linkbutton("options").disabled;
};
};
function _42d(_42e){
var opts=$(_42e).menubutton("options");
if(opts.disabled||!opts.menu){
return;
}
$("body>div.menu-top").menu("hide");
var btn=$(_42e);
var mm=$(opts.menu);
if(mm.length){
mm.menu("options").alignTo=btn;
mm.menu("show",{alignTo:btn,align:opts.menuAlign});
}
btn.blur();
};
$.fn.menubutton=function(_42f,_430){
if(typeof _42f=="string"){
var _431=$.fn.menubutton.methods[_42f];
if(_431){
return _431(this,_430);
}else{
return this.linkbutton(_42f,_430);
}
}
_42f=_42f||{};
return this.each(function(){
var _432=$.data(this,"menubutton");
if(_432){
$.extend(_432.options,_42f);
}else{
$.data(this,"menubutton",{options:$.extend({},$.fn.menubutton.defaults,$.fn.menubutton.parseOptions(this),_42f)});
$(this).removeAttr("disabled");
}
init(this);
_429(this);
});
};
$.fn.menubutton.methods={options:function(jq){
var _433=jq.linkbutton("options");
return $.extend($.data(jq[0],"menubutton").options,{toggle:_433.toggle,selected:_433.selected,disabled:_433.disabled});
},destroy:function(jq){
return jq.each(function(){
var opts=$(this).menubutton("options");
if(opts.menu){
$(opts.menu).menu("destroy");
}
$(this).remove();
});
}};
$.fn.menubutton.parseOptions=function(_434){
var t=$(_434);
return $.extend({},$.fn.linkbutton.parseOptions(_434),$.parser.parseOptions(_434,["menu",{plain:"boolean",hasDownArrow:"boolean",duration:"number"}]));
};
$.fn.menubutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,hasDownArrow:true,menu:null,menuAlign:"left",duration:100,cls:{btn1:"m-btn-active",btn2:"m-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn"}});
})(jQuery);
(function($){
function init(_435){
var opts=$.data(_435,"splitbutton").options;
$(_435).menubutton(opts);
$(_435).addClass("s-btn");
};
$.fn.splitbutton=function(_436,_437){
if(typeof _436=="string"){
var _438=$.fn.splitbutton.methods[_436];
if(_438){
return _438(this,_437);
}else{
return this.menubutton(_436,_437);
}
}
_436=_436||{};
return this.each(function(){
var _439=$.data(this,"splitbutton");
if(_439){
$.extend(_439.options,_436);
}else{
$.data(this,"splitbutton",{options:$.extend({},$.fn.splitbutton.defaults,$.fn.splitbutton.parseOptions(this),_436)});
$(this).removeAttr("disabled");
}
init(this);
});
};
$.fn.splitbutton.methods={options:function(jq){
var _43a=jq.menubutton("options");
var _43b=$.data(jq[0],"splitbutton").options;
$.extend(_43b,{disabled:_43a.disabled,toggle:_43a.toggle,selected:_43a.selected});
return _43b;
}};
$.fn.splitbutton.parseOptions=function(_43c){
var t=$(_43c);
return $.extend({},$.fn.linkbutton.parseOptions(_43c),$.parser.parseOptions(_43c,["menu",{plain:"boolean",duration:"number"}]));
};
$.fn.splitbutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,menu:null,duration:100,cls:{btn1:"m-btn-active s-btn-active",btn2:"m-btn-plain-active s-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn-line"}});
})(jQuery);
(function($){
function init(_43d){
$(_43d).addClass("validatebox-text");
};
function _43e(_43f){
var _440=$.data(_43f,"validatebox");
_440.validating=false;
if(_440.timer){
clearTimeout(_440.timer);
}
$(_43f).tooltip("destroy");
$(_43f).unbind();
$(_43f).remove();
};
function _441(_442){
var opts=$.data(_442,"validatebox").options;
var box=$(_442);
box.unbind(".validatebox");
if(opts.novalidate||box.is(":disabled")){
return;
}
for(var _443 in opts.events){
$(_442).bind(_443+".validatebox",{target:_442},opts.events[_443]);
}
};
function _444(e){
var _445=e.data.target;
var _446=$.data(_445,"validatebox");
var box=$(_445);
if($(_445).attr("readonly")){
return;
}
_446.validating=true;
_446.value=undefined;
(function(){
if(_446.validating){
if(_446.value!=box.val()){
_446.value=box.val();
if(_446.timer){
clearTimeout(_446.timer);
}
_446.timer=setTimeout(function(){
$(_445).validatebox("validate");
},_446.options.delay);
}else{
_447(_445);
}
setTimeout(arguments.callee,200);
}
})();
};
function _448(e){
var _449=e.data.target;
var _44a=$.data(_449,"validatebox");
if(_44a.timer){
clearTimeout(_44a.timer);
_44a.timer=undefined;
}
_44a.validating=false;
_44b(_449);
};
function _44c(e){
var _44d=e.data.target;
if($(_44d).hasClass("validatebox-invalid")){
_44e(_44d);
}
};
function _44f(e){
var _450=e.data.target;
var _451=$.data(_450,"validatebox");
if(!_451.validating){
_44b(_450);
}
};
function _44e(_452){
var _453=$.data(_452,"validatebox");
var opts=_453.options;
$(_452).tooltip($.extend({},opts.tipOptions,{content:_453.message,position:opts.tipPosition,deltaX:opts.deltaX})).tooltip("show");
_453.tip=true;
};
function _447(_454){
var _455=$.data(_454,"validatebox");
if(_455&&_455.tip){
$(_454).tooltip("reposition");
}
};
function _44b(_456){
var _457=$.data(_456,"validatebox");
_457.tip=false;
$(_456).tooltip("hide");
};
function _458(_459){
var _45a=$.data(_459,"validatebox");
var opts=_45a.options;
var box=$(_459);
opts.onBeforeValidate.call(_459);
var _45b=_45c();
opts.onValidate.call(_459,_45b);
return _45b;
function _45d(msg){
_45a.message=msg;
};
function _45e(_45f,_460){
var _461=box.val();
var _462=/([a-zA-Z_]+)(.*)/.exec(_45f);
var rule=opts.rules[_462[1]];
if(rule&&_461){
var _463=_460||opts.validParams||eval(_462[2]);
if(!rule["validator"].call(_459,_461,_463)){
box.addClass("validatebox-invalid");
var _464=rule["message"];
if(_463){
for(var i=0;i<_463.length;i++){
_464=_464.replace(new RegExp("\\{"+i+"\\}","g"),_463[i]);
}
}
_45d(opts.invalidMessage||_464);
if(_45a.validating){
_44e(_459);
}
return false;
}
}
return true;
};
function _45c(){
box.removeClass("validatebox-invalid");
_44b(_459);
if(opts.novalidate||box.is(":disabled")){
return true;
}
if(opts.required){
if(box.val()==""){
box.addClass("validatebox-invalid");
_45d(opts.missingMessage);
if(_45a.validating){
_44e(_459);
}
return false;
}
}
if(opts.validType){
if($.isArray(opts.validType)){
for(var i=0;i<opts.validType.length;i++){
if(!_45e(opts.validType[i])){
return false;
}
}
}else{
if(typeof opts.validType=="string"){
if(!_45e(opts.validType)){
return false;
}
}else{
for(var _465 in opts.validType){
var _466=opts.validType[_465];
if(!_45e(_465,_466)){
return false;
}
}
}
}
}
return true;
};
};
function _467(_468,_469){
var opts=$.data(_468,"validatebox").options;
if(_469!=undefined){
opts.novalidate=_469;
}
if(opts.novalidate){
$(_468).removeClass("validatebox-invalid");
_44b(_468);
}
_458(_468);
_441(_468);
};
$.fn.validatebox=function(_46a,_46b){
if(typeof _46a=="string"){
return $.fn.validatebox.methods[_46a](this,_46b);
}
_46a=_46a||{};
return this.each(function(){
var _46c=$.data(this,"validatebox");
if(_46c){
$.extend(_46c.options,_46a);
}else{
init(this);
$.data(this,"validatebox",{options:$.extend({},$.fn.validatebox.defaults,$.fn.validatebox.parseOptions(this),_46a)});
}
_467(this);
_458(this);
});
};
$.fn.validatebox.methods={options:function(jq){
return $.data(jq[0],"validatebox").options;
},destroy:function(jq){
return jq.each(function(){
_43e(this);
});
},validate:function(jq){
return jq.each(function(){
_458(this);
});
},isValid:function(jq){
return _458(jq[0]);
},enableValidation:function(jq){
return jq.each(function(){
_467(this,false);
});
},disableValidation:function(jq){
return jq.each(function(){
_467(this,true);
});
}};
$.fn.validatebox.parseOptions=function(_46d){
var t=$(_46d);
return $.extend({},$.parser.parseOptions(_46d,["validType","missingMessage","invalidMessage","tipPosition",{delay:"number",deltaX:"number"}]),{required:(t.attr("required")?true:undefined),novalidate:(t.attr("novalidate")!=undefined?true:undefined)});
};
$.fn.validatebox.defaults={required:false,validType:null,validParams:null,delay:200,missingMessage:"This field is required.",invalidMessage:null,tipPosition:"right",deltaX:0,novalidate:false,events:{focus:_444,blur:_448,mouseenter:_44c,mouseleave:_44f,click:function(e){
var t=$(e.data.target);
if(!t.is(":focus")){
t.trigger("focus");
}
}},tipOptions:{showEvent:"none",hideEvent:"none",showDelay:0,hideDelay:0,zIndex:"",onShow:function(){
$(this).tooltip("tip").css({color:"#000",borderColor:"#CC9933",backgroundColor:"#FFFFCC"});
},onHide:function(){
$(this).tooltip("destroy");
}},rules:{email:{validator:function(_46e){
return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(_46e);
},message:"Please enter a valid email address."},url:{validator:function(_46f){
return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(_46f);
},message:"Please enter a valid URL."},length:{validator:function(_470,_471){
var len=$.trim(_470).length;
return len>=_471[0]&&len<=_471[1];
},message:"Please enter a value between {0} and {1}."},remote:{validator:function(_472,_473){
var data={};
data[_473[1]]=_472;
var _474=$.ajax({url:_473[0],dataType:"json",data:data,async:false,cache:false,type:"post"}).responseText;
return _474=="true";
},message:"Please fix this field."}},onBeforeValidate:function(){
},onValidate:function(_475){
}};
})(jQuery);
(function($){
function init(_476){
$(_476).addClass("textbox-f").hide();
var span=$("<span class=\"textbox\">"+"<input class=\"textbox-text\" autocomplete=\"off\">"+"<input type=\"hidden\" class=\"textbox-value\">"+"</span>").insertAfter(_476);
var name=$(_476).attr("name");
if(name){
span.find("input.textbox-value").attr("name",name);
$(_476).removeAttr("name").attr("textboxName",name);
}
return span;
};
function _477(_478){
var _479=$.data(_478,"textbox");
var opts=_479.options;
var tb=_479.textbox;
tb.find(".textbox-text").remove();
if(opts.multiline){
$("<textarea class=\"textbox-text\" autocomplete=\"off\"></textarea>").prependTo(tb);
}else{
$("<input type=\""+opts.type+"\" class=\"textbox-text\" autocomplete=\"off\">").prependTo(tb);
}
tb.find(".textbox-addon").remove();
var bb=opts.icons?$.extend(true,[],opts.icons):[];
if(opts.iconCls){
bb.push({iconCls:opts.iconCls,disabled:true});
}
if(bb.length){
var bc=$("<span class=\"textbox-addon\"></span>").prependTo(tb);
bc.addClass("textbox-addon-"+opts.iconAlign);
for(var i=0;i<bb.length;i++){
bc.append("<a href=\"javascript:void(0)\" class=\"textbox-icon "+bb[i].iconCls+"\" icon-index=\""+i+"\" tabindex=\"-1\"></a>");
}
}
tb.find(".textbox-button").remove();
if(opts.buttonText||opts.buttonIcon){
var btn=$("<a href=\"javascript:void(0)\" class=\"textbox-button\"></a>").prependTo(tb);
btn.addClass("textbox-button-"+opts.buttonAlign).linkbutton({text:opts.buttonText,iconCls:opts.buttonIcon});
}
_47a(_478,opts.disabled);
_47b(_478,opts.readonly);
};
function _47c(_47d){
var tb=$.data(_47d,"textbox").textbox;
tb.find(".textbox-text").validatebox("destroy");
tb.remove();
$(_47d).remove();
};
function _47e(_47f,_480){
var _481=$.data(_47f,"textbox");
var opts=_481.options;
var tb=_481.textbox;
var _482=tb.parent();
if(_480){
opts.width=_480;
}
if(isNaN(parseInt(opts.width))){
var c=$(_47f).clone();
c.css("visibility","hidden");
c.insertAfter(_47f);
opts.width=c.outerWidth();
    //Dh 20140318 宽度在 css 定义生效；
opts.width = $(_47f).width();
    // Dh 20150715 新chrome 下宽度为0
if (opts.width <= 0) {
    opts.width = $(_47f).parent().width();
}
    //end
c.remove();
}
var _483=tb.is(":visible");
if(!_483){
tb.appendTo("body");
}
var _484=tb.find(".textbox-text");
var btn=tb.find(".textbox-button");
var _485=tb.find(".textbox-addon");
var _486=_485.find(".textbox-icon");
tb._size(opts,_482);
btn.linkbutton("resize",{height:tb.height()});
btn.css({left:(opts.buttonAlign=="left"?0:""),right:(opts.buttonAlign=="right"?0:"")});
_485.css({left:(opts.iconAlign=="left"?(opts.buttonAlign=="left"?btn._outerWidth():0):""),right:(opts.iconAlign=="right"?(opts.buttonAlign=="right"?btn._outerWidth():0):"")});
_486.css({width:opts.iconWidth+"px",height:tb.height()+"px"});
_484.css({paddingLeft:(_47f.style.paddingLeft||""),paddingRight:(_47f.style.paddingRight||""),marginLeft:_487("left"),marginRight:_487("right")});
if(opts.multiline){
_484.css({paddingTop:(_47f.style.paddingTop||""),paddingBottom:(_47f.style.paddingBottom||"")});
_484._outerHeight(tb.height());
}else{
var _488=Math.floor((tb.height()-_484.height())/2);
_484.css({paddingTop:_488+"px",paddingBottom:_488+"px"});
}
_484._outerWidth(tb.width()-_486.length*opts.iconWidth-btn._outerWidth());
if(!_483){
tb.insertAfter(_47f);
}
opts.onResize.call(_47f,opts.width,opts.height);
function _487(_489){
return (opts.iconAlign==_489?_485._outerWidth():0)+(opts.buttonAlign==_489?btn._outerWidth():0);
};
};
function _48a(_48b){
var opts=$(_48b).textbox("options");
var _48c=$(_48b).textbox("textbox");
_48c.validatebox($.extend({},opts,{deltaX:$(_48b).textbox("getTipX"),onBeforeValidate:function(){
var box=$(this);
if(!box.is(":focus")){
opts.oldInputValue=box.val();
box.val(opts.value);
}
},onValidate:function(_48d){
var box=$(this);
if(opts.oldInputValue!=undefined){
box.val(opts.oldInputValue);
opts.oldInputValue=undefined;
}
var tb=box.parent();
if(_48d){
tb.removeClass("textbox-invalid");
}else{
tb.addClass("textbox-invalid");
}
}}));
};
function _48e(_48f){
var _490=$.data(_48f,"textbox");
var opts=_490.options;
var tb=_490.textbox;
var _491=tb.find(".textbox-text");
_491.attr("placeholder",opts.prompt);
_491.unbind(".textbox");
if(!opts.disabled&&!opts.readonly){
_491.bind("blur.textbox",function(e){
if(!tb.hasClass("textbox-focused")){
return;
}
opts.value=$(this).val();
if(opts.value==""){
$(this).val(opts.prompt).addClass("textbox-prompt");
}else{
$(this).removeClass("textbox-prompt");
}
tb.removeClass("textbox-focused");
}).bind("focus.textbox",function(e){
if(tb.hasClass("textbox-focused")){
return;
}
if($(this).val()!=opts.value){
$(this).val(opts.value);
}
$(this).removeClass("textbox-prompt");
tb.addClass("textbox-focused");
});
for(var _492 in opts.inputEvents){
_491.bind(_492+".textbox",{target:_48f},opts.inputEvents[_492]);
}
}
var _493=tb.find(".textbox-addon");
_493.unbind().bind("click",{target:_48f},function(e){
var icon=$(e.target).closest("a.textbox-icon:not(.textbox-icon-disabled)");
if(icon.length){
var _494=parseInt(icon.attr("icon-index"));
var conf=opts.icons[_494];
if(conf&&conf.handler){
conf.handler.call(icon[0],e);
opts.onClickIcon.call(_48f,_494);
}
}
});
_493.find(".textbox-icon").each(function(_495){
var conf=opts.icons[_495];
var icon=$(this);
if(!conf||conf.disabled||opts.disabled||opts.readonly){
icon.addClass("textbox-icon-disabled");
}else{
icon.removeClass("textbox-icon-disabled");
}
});
var btn=tb.find(".textbox-button");
btn.unbind(".textbox").bind("click.textbox",function(){
if(!btn.linkbutton("options").disabled){
opts.onClickButton.call(_48f);
}
});
btn.linkbutton((opts.disabled||opts.readonly)?"disable":"enable");
tb.unbind(".textbox").bind("_resize.textbox",function(e,_496){
if($(this).hasClass("easyui-fluid")||_496){
_47e(_48f);
}
return false;
});
};
function _47a(_497,_498){
var _499=$.data(_497,"textbox");
var opts=_499.options;
var tb=_499.textbox;
if(_498){
opts.disabled=true;
$(_497).attr("disabled","disabled");
tb.addClass("textbox-disabled");
tb.find(".textbox-text,.textbox-value").attr("disabled","disabled");
}else{
opts.disabled=false;
tb.removeClass("textbox-disabled");
$(_497).removeAttr("disabled");
tb.find(".textbox-text,.textbox-value").removeAttr("disabled");
}
};
function _47b(_49a,mode){
var _49b=$.data(_49a,"textbox");
var opts=_49b.options;
opts.readonly=mode==undefined?true:mode;
_49b.textbox.removeClass("textbox-readonly").addClass(opts.readonly?"textbox-readonly":"");
var _49c=_49b.textbox.find(".textbox-text");
_49c.removeAttr("readonly");
if(opts.readonly||!opts.editable){
_49c.attr("readonly","readonly");
}
};
$.fn.textbox=function(_49d,_49e){
if(typeof _49d=="string"){
var _49f=$.fn.textbox.methods[_49d];
if(_49f){
return _49f(this,_49e);
}else{
return this.each(function(){
var _4a0=$(this).textbox("textbox");
_4a0.validatebox(_49d,_49e);
});
}
}
_49d=_49d||{};
return this.each(function(){
var _4a1=$.data(this,"textbox");
if(_4a1){
$.extend(_4a1.options,_49d);
if(_49d.value!=undefined){
_4a1.options.originalValue=_49d.value;
}
}else{
_4a1=$.data(this,"textbox",{options:$.extend({},$.fn.textbox.defaults,$.fn.textbox.parseOptions(this),_49d),textbox:init(this)});
_4a1.options.originalValue=_4a1.options.value;
}
_477(this);
_48e(this);
_47e(this);
_48a(this);
$(this).textbox("initValue",_4a1.options.value);
});
};
$.fn.textbox.methods={options:function(jq){
return $.data(jq[0],"textbox").options;
},cloneFrom:function(jq,from){
return jq.each(function(){
var t=$(this);
if(t.data("textbox")){
return;
}
if(!$(from).data("textbox")){
$(from).textbox();
}
var name=t.attr("name")||"";
t.addClass("textbox-f").hide();
t.removeAttr("name").attr("textboxName",name);
var span=$(from).next().clone().insertAfter(t);
span.find("input.textbox-value").attr("name",name);
$.data(this,"textbox",{options:$.extend(true,{},$(from).textbox("options")),textbox:span});
var _4a2=$(from).textbox("button");
if(_4a2.length){
t.textbox("button").linkbutton($.extend(true,{},_4a2.linkbutton("options")));
}
_48e(this);
_48a(this);
});
},textbox:function(jq){
return $.data(jq[0],"textbox").textbox.find(".textbox-text");
},button:function(jq){
return $.data(jq[0],"textbox").textbox.find(".textbox-button");
},destroy:function(jq){
return jq.each(function(){
_47c(this);
});
},resize:function(jq,_4a3){
return jq.each(function(){
_47e(this,_4a3);
});
},disable:function(jq){
return jq.each(function(){
_47a(this,true);
_48e(this);
});
},enable:function(jq){
return jq.each(function(){
_47a(this,false);
_48e(this);
});
},readonly:function(jq,mode){
return jq.each(function(){
_47b(this,mode);
_48e(this);
});
},isValid:function(jq){
return jq.textbox("textbox").validatebox("isValid");
},clear:function(jq){
return jq.each(function(){
$(this).textbox("setValue","");
});
},setText:function(jq,_4a4){
return jq.each(function(){
var opts=$(this).textbox("options");
var _4a5=$(this).textbox("textbox");
if($(this).textbox("getText")!=_4a4){
opts.value=_4a4;
_4a5.val(_4a4);
}
if(!_4a5.is(":focus")){
if(_4a4){
_4a5.removeClass("textbox-prompt");
}else{
_4a5.val(opts.prompt).addClass("textbox-prompt");
}
}
$(this).textbox("validate");
});
},initValue:function(jq,_4a6){
return jq.each(function(){
var _4a7=$.data(this,"textbox");
_4a7.options.value="";
$(this).textbox("setText",_4a6);
_4a7.textbox.find(".textbox-value").val(_4a6);
$(this).val(_4a6);
});
},setValue:function(jq,_4a8){
return jq.each(function(){
var opts=$.data(this,"textbox").options;
var _4a9=$(this).textbox("getValue");
$(this).textbox("initValue",_4a8);
if(_4a9!=_4a8){
opts.onChange.call(this,_4a8,_4a9);
$(this).closest("form").trigger("_change",[this]);
}
});
},getText:function(jq){
var _4aa=jq.textbox("textbox");
if(_4aa.is(":focus")){
return _4aa.val();
}else{
return jq.textbox("options").value;
}
},getValue:function(jq){
return jq.data("textbox").textbox.find(".textbox-value").val();
},reset:function(jq){
return jq.each(function(){
var opts=$(this).textbox("options");
$(this).textbox("setValue",opts.originalValue);
});
},getIcon:function(jq,_4ab){
return jq.data("textbox").textbox.find(".textbox-icon:eq("+_4ab+")");
},getTipX:function(jq){
var _4ac=jq.data("textbox");
var opts=_4ac.options;
var tb=_4ac.textbox;
var _4ad=tb.find(".textbox-text");
var _4ae=tb.find(".textbox-addon")._outerWidth();
var _4af=tb.find(".textbox-button")._outerWidth();
if(opts.tipPosition=="right"){
return (opts.iconAlign=="right"?_4ae:0)+(opts.buttonAlign=="right"?_4af:0)+1;
}else{
if(opts.tipPosition=="left"){
return (opts.iconAlign=="left"?-_4ae:0)+(opts.buttonAlign=="left"?-_4af:0)-1;
}else{
return _4ae/2*(opts.iconAlign=="right"?1:-1);
}
}
}};
$.fn.textbox.parseOptions=function(_4b0){
var t=$(_4b0);
return $.extend({},$.fn.validatebox.parseOptions(_4b0),$.parser.parseOptions(_4b0,["prompt","iconCls","iconAlign","buttonText","buttonIcon","buttonAlign",{multiline:"boolean",editable:"boolean",iconWidth:"number"}]),{value:(t.val()||undefined),type:(t.attr("type")?t.attr("type"):undefined),disabled:(t.attr("disabled")?true:undefined),readonly:(t.attr("readonly")?true:undefined)});
};
$.fn.textbox.defaults=$.extend({},$.fn.validatebox.defaults,{width:"auto",height:22,prompt:"",value:"",type:"text",multiline:false,editable:true,disabled:false,readonly:false,icons:[],iconCls:null,iconAlign:"right",iconWidth:18,buttonText:"",buttonIcon:null,buttonAlign:"right",inputEvents:{blur:function(e){
var t=$(e.data.target);
var opts=t.textbox("options");
t.textbox("setValue",opts.value);
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.textbox("setValue",t.textbox("getText"));
}
}},onChange:function(_4b1,_4b2){
},onResize:function(_4b3,_4b4){
},onClickButton:function(){
},onClickIcon:function(_4b5){
}});
})(jQuery);
(function($){
var _4b6=0;
function _4b7(_4b8){
var _4b9=$.data(_4b8,"filebox");
var opts=_4b9.options;
var id="filebox_file_id_"+(++_4b6);
$(_4b8).addClass("filebox-f").textbox(opts);
$(_4b8).textbox("textbox").attr("readonly","readonly");
_4b9.filebox=$(_4b8).next().addClass("filebox");
_4b9.filebox.find(".textbox-value").remove();
opts.oldValue="";
var file=$("<input type=\"file\" class=\"textbox-value\">").appendTo(_4b9.filebox);
file.attr("id",id).attr("name",$(_4b8).attr("textboxName")||"");
file.change(function(){
$(_4b8).filebox("setText",this.value);
opts.onChange.call(_4b8,this.value,opts.oldValue);
opts.oldValue=this.value;
});
var btn=$(_4b8).filebox("button");
if(btn.length){
$("<label class=\"filebox-label\" for=\""+id+"\"></label>").appendTo(btn);
if(btn.linkbutton("options").disabled){
file.attr("disabled","disabled");
}else{
file.removeAttr("disabled");
}
}
};
$.fn.filebox=function(_4ba,_4bb){
if(typeof _4ba=="string"){
var _4bc=$.fn.filebox.methods[_4ba];
if(_4bc){
return _4bc(this,_4bb);
}else{
return this.textbox(_4ba,_4bb);
}
}
_4ba=_4ba||{};
return this.each(function(){
var _4bd=$.data(this,"filebox");
if(_4bd){
$.extend(_4bd.options,_4ba);
}else{
$.data(this,"filebox",{options:$.extend({},$.fn.filebox.defaults,$.fn.filebox.parseOptions(this),_4ba)});
}
_4b7(this);
});
};
$.fn.filebox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"filebox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.filebox.parseOptions=function(_4be){
return $.extend({},$.fn.textbox.parseOptions(_4be),{});
};
$.fn.filebox.defaults=$.extend({},$.fn.textbox.defaults,{buttonIcon:null,buttonText:"Choose File",buttonAlign:"right",inputEvents:{}});
})(jQuery);
(function($){
function _4bf(_4c0){
var _4c1=$.data(_4c0,"searchbox");
var opts=_4c1.options;
var _4c2=$.extend(true,[],opts.icons);
_4c2.push({iconCls:"searchbox-button",handler:function(e){
var t=$(e.data.target);
var opts=t.searchbox("options");
opts.searcher.call(e.data.target,t.searchbox("getValue"),t.searchbox("getName"));
}});
_4c3();
var _4c4=_4c5();
$(_4c0).addClass("searchbox-f").textbox($.extend({},opts,{icons:_4c2,buttonText:(_4c4?_4c4.text:"")}));
$(_4c0).attr("searchboxName",$(_4c0).attr("textboxName"));
_4c1.searchbox=$(_4c0).next();
_4c1.searchbox.addClass("searchbox");
_4c6(_4c4);
function _4c3(){
if(opts.menu){
_4c1.menu=$(opts.menu).menu();
var _4c7=_4c1.menu.menu("options");
var _4c8=_4c7.onClick;
_4c7.onClick=function(item){
_4c6(item);
_4c8.call(this,item);
};
}else{
if(_4c1.menu){
_4c1.menu.menu("destroy");
}
_4c1.menu=null;
}
};
function _4c5(){
if(_4c1.menu){
var item=_4c1.menu.children("div.menu-item:first");
_4c1.menu.children("div.menu-item").each(function(){
var _4c9=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
if(_4c9.selected){
item=$(this);
return false;
}
});
return _4c1.menu.menu("getItem",item[0]);
}else{
return null;
}
};
function _4c6(item){
if(!item){
return;
}
$(_4c0).textbox("button").menubutton({text:item.text,iconCls:(item.iconCls||null),menu:_4c1.menu,menuAlign:opts.buttonAlign,plain:false});
_4c1.searchbox.find("input.textbox-value").attr("name",item.name||item.text);
$(_4c0).searchbox("resize");
};
};
$.fn.searchbox=function(_4ca,_4cb){
if(typeof _4ca=="string"){
var _4cc=$.fn.searchbox.methods[_4ca];
if(_4cc){
return _4cc(this,_4cb);
}else{
return this.textbox(_4ca,_4cb);
}
}
_4ca=_4ca||{};
return this.each(function(){
var _4cd=$.data(this,"searchbox");
if(_4cd){
$.extend(_4cd.options,_4ca);
}else{
$.data(this,"searchbox",{options:$.extend({},$.fn.searchbox.defaults,$.fn.searchbox.parseOptions(this),_4ca)});
}
_4bf(this);
});
};
$.fn.searchbox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"searchbox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},menu:function(jq){
return $.data(jq[0],"searchbox").menu;
},getName:function(jq){
return $.data(jq[0],"searchbox").searchbox.find("input.textbox-value").attr("name");
},selectName:function(jq,name){
return jq.each(function(){
var menu=$.data(this,"searchbox").menu;
if(menu){
menu.children("div.menu-item").each(function(){
var item=menu.menu("getItem",this);
if(item.name==name){
$(this).triggerHandler("click");
return false;
}
});
}
});
},destroy:function(jq){
return jq.each(function(){
var menu=$(this).searchbox("menu");
if(menu){
menu.menu("destroy");
}
$(this).textbox("destroy");
});
}};
$.fn.searchbox.parseOptions=function(_4ce){
var t=$(_4ce);
return $.extend({},$.fn.textbox.parseOptions(_4ce),$.parser.parseOptions(_4ce,["menu"]),{searcher:(t.attr("searcher")?eval(t.attr("searcher")):undefined)});
};
$.fn.searchbox.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:$.extend({},$.fn.textbox.defaults.inputEvents,{keydown:function(e){
if(e.keyCode==13){
e.preventDefault();
var t=$(e.data.target);
var opts=t.searchbox("options");
t.searchbox("setValue",$(this).val());
opts.searcher.call(e.data.target,t.searchbox("getValue"),t.searchbox("getName"));
return false;
}
}}),buttonAlign:"left",menu:null,searcher:function(_4cf,name){
}});
})(jQuery);
(function($){
function _4d0(_4d1,_4d2){
var opts=$.data(_4d1,"form").options;
$.extend(opts,_4d2||{});
var _4d3=$.extend({},opts.queryParams);
if(opts.onSubmit.call(_4d1,_4d3)==false){
return;
}
$(_4d1).find(".textbox-text:focus").blur();
var _4d4="easyui_frame_"+(new Date().getTime());
var _4d5=$("<iframe id="+_4d4+" name="+_4d4+"></iframe>").appendTo("body");
_4d5.attr("src",window.ActiveXObject?"javascript:false":"about:blank");
_4d5.css({position:"absolute",top:-1000,left:-1000});
_4d5.bind("load",cb);
_4d6(_4d3);
function _4d6(_4d7){
var form=$(_4d1);
if(opts.url){
form.attr("action",opts.url);
}
var t=form.attr("target"),a=form.attr("action");
form.attr("target",_4d4);
var _4d8=$();
try{
for(var n in _4d7){
var _4d9=$("<input type=\"hidden\" name=\""+n+"\">").val(_4d7[n]).appendTo(form);
_4d8=_4d8.add(_4d9);
}
_4da();
form[0].submit();
}
finally{
form.attr("action",a);
t?form.attr("target",t):form.removeAttr("target");
_4d8.remove();
}
};
function _4da(){
var f=$("#"+_4d4);
if(!f.length){
return;
}
try{
var s=f.contents()[0].readyState;
if(s&&s.toLowerCase()=="uninitialized"){
setTimeout(_4da,100);
}
}
catch(e){
cb();
}
};
var _4db=10;
function cb(){
var f=$("#"+_4d4);
if(!f.length){
return;
}
f.unbind();
var data="";
try{
var body=f.contents().find("body");
data=body.html();
if(data==""){
if(--_4db){
setTimeout(cb,100);
return;
}
}
var ta=body.find(">textarea");
if(ta.length){
data=ta.val();
}else{
var pre=body.find(">pre");
if(pre.length){
data=pre.html();
}
}
}
catch(e){
}
opts.success(data);
setTimeout(function(){
f.unbind();
f.remove();
},100);
};
};
function load(_4dc,data){
var opts=$.data(_4dc,"form").options;
if(typeof data=="string"){
var _4dd={};
if(opts.onBeforeLoad.call(_4dc,_4dd)==false){
return;
}
$.ajax({url:data,data:_4dd,dataType:"json",success:function(data){
_4de(data);
},error:function(){
opts.onLoadError.apply(_4dc,arguments);
}});
}else{
_4de(data);
}
function _4de(data){
var form=$(_4dc);
for(var name in data){
var val=data[name];
if(!_4df(name,val)){
if(!_4e0(name,val)){
form.find("input[name=\""+name+"\"]").val(val);
form.find("textarea[name=\""+name+"\"]").val(val);
form.find("select[name=\""+name+"\"]").val(val);
}
}
}
opts.onLoadSuccess.call(_4dc,data);
form.form("validate");
};
function _4df(name,val){
var cc=$(_4dc).find("input[name=\""+name+"\"][type=radio], input[name=\""+name+"\"][type=checkbox]");
if(cc.length){
cc._propAttr("checked",false);
cc.each(function(){
var f=$(this);
if(f.val()==String(val)||$.inArray(f.val(),$.isArray(val)?val:[val])>=0){
f._propAttr("checked",true);
}
});
return true;
}
return false;
};
function _4e0(name,val){
var _4e1=$(_4dc).find("[textboxName=\""+name+"\"],[sliderName=\""+name+"\"]");
if(_4e1.length){
for(var i=0;i<opts.fieldTypes.length;i++){
var type=opts.fieldTypes[i];
var _4e2=_4e1.data(type);
if(_4e2){
if(_4e2.options.multiple||_4e2.options.range){
_4e1[type]("setValues",val);
}else{
_4e1[type]("setValue",val);
}
return true;
}
}
}
return false;
};
};
function _4e3(_4e4){
$("input,select,textarea",_4e4).each(function(){
var t=this.type,tag=this.tagName.toLowerCase();
if(t=="text"||t=="hidden"||t=="password"||tag=="textarea"){
this.value="";
}else{
if(t=="file"){
var file=$(this);
if(!file.hasClass("textbox-value")){
var _4e5=file.clone().val("");
_4e5.insertAfter(file);
if(file.data("validatebox")){
file.validatebox("destroy");
_4e5.validatebox();
}else{
file.remove();
}
}
}else{
if(t=="checkbox"||t=="radio"){
this.checked=false;
}else{
if(tag=="select"){
this.selectedIndex=-1;
}
}
}
}
});
var form=$(_4e4);
var opts=$.data(_4e4,"form").options;
for(var i=opts.fieldTypes.length-1;i>=0;i--){
var type=opts.fieldTypes[i];
var _4e6=form.find("."+type+"-f");
if(_4e6.length&&_4e6[type]){
_4e6[type]("clear");
}
}
form.form("validate");
};
function _4e7(_4e8){
_4e8.reset();
var form=$(_4e8);
var opts=$.data(_4e8,"form").options;
for(var i=opts.fieldTypes.length-1;i>=0;i--){
var type=opts.fieldTypes[i];
var _4e9=form.find("."+type+"-f");
if(_4e9.length&&_4e9[type]){
_4e9[type]("reset");
}
}
form.form("validate");
};
function _4ea(_4eb){
var _4ec=$.data(_4eb,"form").options;
$(_4eb).unbind(".form");
if(_4ec.ajax){
$(_4eb).bind("submit.form",function(){
setTimeout(function(){
_4d0(_4eb,_4ec);
},0);
return false;
});
}
$(_4eb).bind("_change.form",function(e,t){
_4ec.onChange.call(this,t);
}).bind("change.form",function(e){
var t=e.target;
if(!$(t).hasClass("textbox-text")){
_4ec.onChange.call(this,t);
}
});
_4ed(_4eb,_4ec.novalidate);
};
function _4ee(_4ef,_4f0){
_4f0=_4f0||{};
var _4f1=$.data(_4ef,"form");
if(_4f1){
$.extend(_4f1.options,_4f0);
}else{
$.data(_4ef,"form",{options:$.extend({},$.fn.form.defaults,$.fn.form.parseOptions(_4ef),_4f0)});
}
};
function _4f2(_4f3){
if($.fn.validatebox){
var t=$(_4f3);
t.find(".validatebox-text:not(:disabled)").validatebox("validate");
var _4f4=t.find(".validatebox-invalid");
_4f4.filter(":not(:disabled):first").focus();
return _4f4.length==0;
}
return true;
};
function _4ed(_4f5,_4f6){
var opts=$.data(_4f5,"form").options;
opts.novalidate=_4f6;
$(_4f5).find(".validatebox-text:not(:disabled)").validatebox(_4f6?"disableValidation":"enableValidation");
};
$.fn.form=function(_4f7,_4f8){
if(typeof _4f7=="string"){
this.each(function(){
_4ee(this);
});
return $.fn.form.methods[_4f7](this,_4f8);
}
return this.each(function(){
_4ee(this,_4f7);
_4ea(this);
});
};
$.fn.form.methods={options:function(jq){
return $.data(jq[0],"form").options;
},submit:function(jq,_4f9){
return jq.each(function(){
_4d0(this,_4f9);
});
},load:function(jq,data){
return jq.each(function(){
load(this,data);
});
},clear:function(jq){
return jq.each(function(){
_4e3(this);
});
},reset:function(jq){
return jq.each(function(){
_4e7(this);
});
},validate:function(jq){
return _4f2(jq[0]);
},disableValidation:function(jq){
return jq.each(function(){
_4ed(this,true);
});
},enableValidation:function(jq){
return jq.each(function(){
_4ed(this,false);
});
}};
$.fn.form.parseOptions=function(_4fa){
var t=$(_4fa);
return $.extend({},$.parser.parseOptions(_4fa,[{ajax:"boolean"}]),{url:(t.attr("action")?t.attr("action"):undefined)});
};
$.fn.form.defaults={fieldTypes:["combobox","combotree","combogrid","datetimebox","datebox","combo","datetimespinner","timespinner","numberspinner","spinner","slider","searchbox","numberbox","textbox"],novalidate:false,ajax:true,url:null,queryParams:{},onSubmit:function(_4fb){
return $(this).form("validate");
},success:function(data){
},onBeforeLoad:function(_4fc){
},onLoadSuccess:function(data){
},onLoadError:function(){
},onChange:function(_4fd){
}};
})(jQuery);
(function($){
function _4fe(_4ff){
var _500=$.data(_4ff,"numberbox");
var opts=_500.options;
$(_4ff).addClass("numberbox-f").textbox(opts);
$(_4ff).textbox("textbox").css({imeMode:"disabled"});
$(_4ff).attr("numberboxName",$(_4ff).attr("textboxName"));
_500.numberbox=$(_4ff).next();
_500.numberbox.addClass("numberbox");
var _501=opts.parser.call(_4ff,opts.value);
var _502=opts.formatter.call(_4ff,_501);
$(_4ff).numberbox("initValue",_501).numberbox("setText",_502);
};
function _503(_504,_505){
var _506=$.data(_504,"numberbox");
var opts=_506.options;
var _505=opts.parser.call(_504,_505);
var text=opts.formatter.call(_504,_505);
opts.value=_505;
$(_504).textbox("setText",text).textbox("setValue",_505);
text=opts.formatter.call(_504,$(_504).textbox("getValue"));
$(_504).textbox("setText",text);
};
$.fn.numberbox=function(_507,_508){
if(typeof _507=="string"){
var _509=$.fn.numberbox.methods[_507];
if(_509){
return _509(this,_508);
}else{
return this.textbox(_507,_508);
}
}
_507=_507||{};
return this.each(function(){
var _50a=$.data(this,"numberbox");
if(_50a){
$.extend(_50a.options,_507);
}else{
_50a=$.data(this,"numberbox",{options:$.extend({},$.fn.numberbox.defaults,$.fn.numberbox.parseOptions(this),_507)});
}
_4fe(this);
});
};
$.fn.numberbox.methods={options:function(jq){
var opts=jq.data("textbox")?jq.textbox("options"):{};
return $.extend($.data(jq[0],"numberbox").options,{width:opts.width,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},fix:function(jq){
return jq.each(function(){
$(this).numberbox("setValue",$(this).numberbox("getText"));
});
},setValue:function(jq,_50b){
return jq.each(function(){
_503(this,_50b);
});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("clear");
$(this).numberbox("options").value="";
});
},reset:function(jq){
return jq.each(function(){
$(this).textbox("reset");
$(this).numberbox("setValue",$(this).numberbox("getValue"));
});
}};
$.fn.numberbox.parseOptions=function(_50c){
var t=$(_50c);
return $.extend({},$.fn.textbox.parseOptions(_50c),$.parser.parseOptions(_50c,["decimalSeparator","groupSeparator","suffix",{min:"number",max:"number",precision:"number"}]),{prefix:(t.attr("prefix")?t.attr("prefix"):undefined)});
};
$.fn.numberbox.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:{keypress:function(e){
var _50d=e.data.target;
var opts=$(_50d).numberbox("options");
return opts.filter.call(_50d,e);
},blur:function(e){
var _50e=e.data.target;
$(_50e).numberbox("setValue",$(_50e).numberbox("getText"));
},keydown:function(e){
if(e.keyCode==13){
var _50f=e.data.target;
$(_50f).numberbox("setValue",$(_50f).numberbox("getText"));
}
}},min:null,max:null,precision:0,decimalSeparator:".",groupSeparator:"",prefix:"",suffix:"",filter:function(e){
var opts=$(this).numberbox("options");
var s=$(this).numberbox("getText");
if(e.which==13){
return true;
}
if(e.which==45){
return (s.indexOf("-")==-1?true:false);
}
var c=String.fromCharCode(e.which);
if(c==opts.decimalSeparator){
return (s.indexOf(c)==-1?true:false);
}else{
if(c==opts.groupSeparator){
return true;
}else{
if((e.which>=48&&e.which<=57&&e.ctrlKey==false&&e.shiftKey==false)||e.which==0||e.which==8){
return true;
}else{
if(e.ctrlKey==true&&(e.which==99||e.which==118)){
return true;
}else{
return false;
}
}
}
}
},formatter:function(_510){
if(!_510){
return _510;
}
_510=_510+"";
var opts=$(this).numberbox("options");
var s1=_510,s2="";
var dpos=_510.indexOf(".");
if(dpos>=0){
s1=_510.substring(0,dpos);
s2=_510.substring(dpos+1,_510.length);
}
if(opts.groupSeparator){
var p=/(\d+)(\d{3})/;
while(p.test(s1)){
s1=s1.replace(p,"$1"+opts.groupSeparator+"$2");
}
}
if(s2){
return opts.prefix+s1+opts.decimalSeparator+s2+opts.suffix;
}else{
return opts.prefix+s1+opts.suffix;
}
},parser:function(s){
s=s+"";
var opts=$(this).numberbox("options");
if(parseFloat(s)!=s){
if(opts.prefix){
s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.prefix),"g"),""));
}
if(opts.suffix){
s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.suffix),"g"),""));
}
if(opts.groupSeparator){
s=$.trim(s.replace(new RegExp("\\"+opts.groupSeparator,"g"),""));
}
if(opts.decimalSeparator){
s=$.trim(s.replace(new RegExp("\\"+opts.decimalSeparator,"g"),"."));
}
s=s.replace(/\s/g,"");
}
var val=parseFloat(s).toFixed(opts.precision);
if(isNaN(val)){
val="";
}else{
if(typeof (opts.min)=="number"&&val<opts.min){
val=opts.min.toFixed(opts.precision);
}else{
if(typeof (opts.max)=="number"&&val>opts.max){
val=opts.max.toFixed(opts.precision);
}
}
}
return val;
}});
})(jQuery);
(function($){
function _511(_512,_513){
var opts=$.data(_512,"calendar").options;
var t=$(_512);
if(_513){
$.extend(opts,{width:_513.width,height:_513.height});
}
t._size(opts,t.parent());
t.find(".calendar-body")._outerHeight(t.height()-t.find(".calendar-header")._outerHeight());
if(t.find(".calendar-menu").is(":visible")){
_514(_512);
}
};
function init(_515){
$(_515).addClass("calendar").html("<div class=\"calendar-header\">"+"<div class=\"calendar-nav calendar-prevmonth\"></div>"+"<div class=\"calendar-nav calendar-nextmonth\"></div>"+"<div class=\"calendar-nav calendar-prevyear\"></div>"+"<div class=\"calendar-nav calendar-nextyear\"></div>"+"<div class=\"calendar-title\">"+"<span class=\"calendar-text\"></span>"+"</div>"+"</div>"+"<div class=\"calendar-body\">"+"<div class=\"calendar-menu\">"+"<div class=\"calendar-menu-year-inner\">"+"<span class=\"calendar-nav calendar-menu-prev\"></span>"+"<span><input class=\"calendar-menu-year\" type=\"text\"></input></span>"+"<span class=\"calendar-nav calendar-menu-next\"></span>"+"</div>"+"<div class=\"calendar-menu-month-inner\">"+"</div>"+"</div>"+"</div>");
$(_515).bind("_resize",function(e,_516){
if($(this).hasClass("easyui-fluid")||_516){
_511(_515);
}
return false;
});
};
function _517(_518){
var opts=$.data(_518,"calendar").options;
var menu=$(_518).find(".calendar-menu");
menu.find(".calendar-menu-year").unbind(".calendar").bind("keypress.calendar",function(e){
if(e.keyCode==13){
_519(true);
}
});
$(_518).unbind(".calendar").bind("mouseover.calendar",function(e){
var t=_51a(e.target);
if(t.hasClass("calendar-nav")||t.hasClass("calendar-text")||(t.hasClass("calendar-day")&&!t.hasClass("calendar-disabled"))){
t.addClass("calendar-nav-hover");
}
}).bind("mouseout.calendar",function(e){
var t=_51a(e.target);
if(t.hasClass("calendar-nav")||t.hasClass("calendar-text")||(t.hasClass("calendar-day")&&!t.hasClass("calendar-disabled"))){
t.removeClass("calendar-nav-hover");
}
}).bind("click.calendar",function(e){
var t=_51a(e.target);
if(t.hasClass("calendar-menu-next")||t.hasClass("calendar-nextyear")){
_51b(1);
}else{
if(t.hasClass("calendar-menu-prev")||t.hasClass("calendar-prevyear")){
_51b(-1);
}else{
if(t.hasClass("calendar-menu-month")){
menu.find(".calendar-selected").removeClass("calendar-selected");
t.addClass("calendar-selected");
_519(true);
}else{
if(t.hasClass("calendar-prevmonth")){
_51c(-1);
}else{
if(t.hasClass("calendar-nextmonth")){
_51c(1);
}else{
if(t.hasClass("calendar-text")){
if(menu.is(":visible")){
menu.hide();
}else{
_514(_518);
}
}else{
if(t.hasClass("calendar-day")){
if(t.hasClass("calendar-disabled")){
return;
}
var _51d=opts.current;
t.closest("div.calendar-body").find(".calendar-selected").removeClass("calendar-selected");
t.addClass("calendar-selected");
var _51e=t.attr("abbr").split(",");
var y=parseInt(_51e[0]);
var m=parseInt(_51e[1]);
var d=parseInt(_51e[2]);
opts.current=new Date(y,m-1,d);
opts.onSelect.call(_518,opts.current);
if(!_51d||_51d.getTime()!=opts.current.getTime()){
opts.onChange.call(_518,opts.current,_51d);
}
if(opts.year!=y||opts.month!=m){
opts.year=y;
opts.month=m;
show(_518);
}
}
}
}
}
}
}
}
});
function _51a(t){
var day=$(t).closest(".calendar-day");
if(day.length){
return day;
}else{
return $(t);
}
};
function _519(_51f){
var menu=$(_518).find(".calendar-menu");
var year=menu.find(".calendar-menu-year").val();
var _520=menu.find(".calendar-selected").attr("abbr");
if(!isNaN(year)){
opts.year=parseInt(year);
opts.month=parseInt(_520);
show(_518);
}
if(_51f){
menu.hide();
}
};
function _51b(_521){
opts.year+=_521;
show(_518);
menu.find(".calendar-menu-year").val(opts.year);
};
function _51c(_522){
opts.month+=_522;
if(opts.month>12){
opts.year++;
opts.month=1;
}else{
if(opts.month<1){
opts.year--;
opts.month=12;
}
}
show(_518);
menu.find("td.calendar-selected").removeClass("calendar-selected");
menu.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
};
};
function _514(_523){
var opts=$.data(_523,"calendar").options;
$(_523).find(".calendar-menu").show();
if($(_523).find(".calendar-menu-month-inner").is(":empty")){
$(_523).find(".calendar-menu-month-inner").empty();
var t=$("<table class=\"calendar-mtable\"></table>").appendTo($(_523).find(".calendar-menu-month-inner"));
var idx=0;
for(var i=0;i<3;i++){
var tr=$("<tr></tr>").appendTo(t);
for(var j=0;j<4;j++){
$("<td class=\"calendar-nav calendar-menu-month\"></td>").html(opts.months[idx++]).attr("abbr",idx).appendTo(tr);
}
}
}
var body=$(_523).find(".calendar-body");
var sele=$(_523).find(".calendar-menu");
var _524=sele.find(".calendar-menu-year-inner");
var _525=sele.find(".calendar-menu-month-inner");
_524.find("input").val(opts.year).focus();
_525.find("td.calendar-selected").removeClass("calendar-selected");
_525.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
sele._outerWidth(body._outerWidth());
sele._outerHeight(body._outerHeight());
_525._outerHeight(sele.height()-_524._outerHeight());
};
function _526(_527,year,_528){
var opts=$.data(_527,"calendar").options;
var _529=[];
var _52a=new Date(year,_528,0).getDate();
for(var i=1;i<=_52a;i++){
_529.push([year,_528,i]);
}
var _52b=[],week=[];
var _52c=-1;
while(_529.length>0){
var date=_529.shift();
week.push(date);
var day=new Date(date[0],date[1]-1,date[2]).getDay();
if(_52c==day){
day=0;
}else{
if(day==(opts.firstDay==0?7:opts.firstDay)-1){
_52b.push(week);
week=[];
}
}
_52c=day;
}
if(week.length){
_52b.push(week);
}
var _52d=_52b[0];
if(_52d.length<7){
while(_52d.length<7){
var _52e=_52d[0];
var date=new Date(_52e[0],_52e[1]-1,_52e[2]-1);
_52d.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
}else{
var _52e=_52d[0];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_52e[0],_52e[1]-1,_52e[2]-i);
week.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_52b.unshift(week);
}
var _52f=_52b[_52b.length-1];
while(_52f.length<7){
var _530=_52f[_52f.length-1];
var date=new Date(_530[0],_530[1]-1,_530[2]+1);
_52f.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
if(_52b.length<6){
var _530=_52f[_52f.length-1];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_530[0],_530[1]-1,_530[2]+i);
week.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_52b.push(week);
}
return _52b;
};
function show(_531){
var opts=$.data(_531,"calendar").options;
if(opts.current&&!opts.validator.call(_531,opts.current)){
opts.current=null;
}
var now=new Date();
var _532=now.getFullYear()+","+(now.getMonth()+1)+","+now.getDate();
var _533=opts.current?(opts.current.getFullYear()+","+(opts.current.getMonth()+1)+","+opts.current.getDate()):"";
var _534=6-opts.firstDay;
var _535=_534+1;
if(_534>=7){
_534-=7;
}
if(_535>=7){
_535-=7;
}
$(_531).find(".calendar-title span").html(opts.months[opts.month-1]+" "+opts.year);
var body=$(_531).find("div.calendar-body");
body.children("table").remove();
var data=["<table class=\"calendar-dtable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];
data.push("<thead><tr>");
for(var i=opts.firstDay;i<opts.weeks.length;i++){
data.push("<th>"+opts.weeks[i]+"</th>");
}
for(var i=0;i<opts.firstDay;i++){
data.push("<th>"+opts.weeks[i]+"</th>");
}
data.push("</tr></thead>");
data.push("<tbody>");
var _536=_526(_531,opts.year,opts.month);
for(var i=0;i<_536.length;i++){
var week=_536[i];
var cls="";
if(i==0){
cls="calendar-first";
}else{
if(i==_536.length-1){
cls="calendar-last";
}
}
data.push("<tr class=\""+cls+"\">");
for(var j=0;j<week.length;j++){
var day=week[j];
var s=day[0]+","+day[1]+","+day[2];
var _537=new Date(day[0],parseInt(day[1])-1,day[2]);
var d=opts.formatter.call(_531,_537);
var css=opts.styler.call(_531,_537);
var _538="";
var _539="";
if(typeof css=="string"){
_539=css;
}else{
if(css){
_538=css["class"]||"";
_539=css["style"]||"";
}
}
var cls="calendar-day";
if(!(opts.year==day[0]&&opts.month==day[1])){
cls+=" calendar-other-month";
}
if(s==_532){
cls+=" calendar-today";
}
if(s==_533){
cls+=" calendar-selected";
}
if(j==_534){
cls+=" calendar-saturday";
}else{
if(j==_535){
cls+=" calendar-sunday";
}
}
if(j==0){
cls+=" calendar-first";
}else{
if(j==week.length-1){
cls+=" calendar-last";
}
}
cls+=" "+_538;
if(!opts.validator.call(_531,_537)){
cls+=" calendar-disabled";
}
data.push("<td class=\""+cls+"\" abbr=\""+s+"\" style=\""+_539+"\">"+d+"</td>");
}
data.push("</tr>");
}
data.push("</tbody>");
data.push("</table>");
body.append(data.join(""));
body.children("table.calendar-dtable").prependTo(body);
opts.onNavigate.call(_531,opts.year,opts.month);
};
$.fn.calendar=function(_53a,_53b){
if(typeof _53a=="string"){
return $.fn.calendar.methods[_53a](this,_53b);
}
_53a=_53a||{};
return this.each(function(){
var _53c=$.data(this,"calendar");
if(_53c){
$.extend(_53c.options,_53a);
}else{
_53c=$.data(this,"calendar",{options:$.extend({},$.fn.calendar.defaults,$.fn.calendar.parseOptions(this),_53a)});
init(this);
}
if(_53c.options.border==false){
$(this).addClass("calendar-noborder");
}
_511(this);
_517(this);
show(this);
$(this).find("div.calendar-menu").hide();
});
};
$.fn.calendar.methods={options:function(jq){
return $.data(jq[0],"calendar").options;
},resize:function(jq,_53d){
return jq.each(function(){
_511(this,_53d);
});
},moveTo:function(jq,date){
return jq.each(function(){
if(!date){
var now=new Date();
$(this).calendar({year:now.getFullYear(),month:now.getMonth()+1,current:date});
return;
}
var opts=$(this).calendar("options");
if(opts.validator.call(this,date)){
var _53e=opts.current;
$(this).calendar({year:date.getFullYear(),month:date.getMonth()+1,current:date});
if(!_53e||_53e.getTime()!=date.getTime()){
opts.onChange.call(this,opts.current,_53e);
}
}
});
}};
$.fn.calendar.parseOptions=function(_53f){
var t=$(_53f);
return $.extend({},$.parser.parseOptions(_53f,[{firstDay:"number",fit:"boolean",border:"boolean"}]));
};
$.fn.calendar.defaults={width:180,height:180,fit:false,border:true,firstDay:0,weeks:["S","M","T","W","T","F","S"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:new Date().getFullYear(),month:new Date().getMonth()+1,current:(function(){
var d=new Date();
return new Date(d.getFullYear(),d.getMonth(),d.getDate());
})(),formatter:function(date){
return date.getDate();
},styler:function(date){
return "";
},validator:function(date){
return true;
},onSelect:function(date){
},onChange:function(_540,_541){
},onNavigate:function(year,_542){
}};
})(jQuery);
(function($){
function _543(_544){
var _545=$.data(_544,"spinner");
var opts=_545.options;
var _546=$.extend(true,[],opts.icons);
_546.push({iconCls:"spinner-arrow",handler:function(e){
_547(e);
}});
$(_544).addClass("spinner-f").textbox($.extend({},opts,{icons:_546}));
var _548=$(_544).textbox("getIcon",_546.length-1);
_548.append("<a href=\"javascript:void(0)\" class=\"spinner-arrow-up\" tabindex=\"-1\"></a>");
_548.append("<a href=\"javascript:void(0)\" class=\"spinner-arrow-down\" tabindex=\"-1\"></a>");
$(_544).attr("spinnerName",$(_544).attr("textboxName"));
_545.spinner=$(_544).next();
_545.spinner.addClass("spinner");
};
function _547(e){
var _549=e.data.target;
var opts=$(_549).spinner("options");
var up=$(e.target).closest("a.spinner-arrow-up");
if(up.length){
opts.spin.call(_549,false);
opts.onSpinUp.call(_549);
$(_549).spinner("validate");
}
var down=$(e.target).closest("a.spinner-arrow-down");
if(down.length){
opts.spin.call(_549,true);
opts.onSpinDown.call(_549);
$(_549).spinner("validate");
}
};
$.fn.spinner=function(_54a,_54b){
if(typeof _54a=="string"){
var _54c=$.fn.spinner.methods[_54a];
if(_54c){
return _54c(this,_54b);
}else{
return this.textbox(_54a,_54b);
}
}
_54a=_54a||{};
return this.each(function(){
var _54d=$.data(this,"spinner");
if(_54d){
$.extend(_54d.options,_54a);
}else{
_54d=$.data(this,"spinner",{options:$.extend({},$.fn.spinner.defaults,$.fn.spinner.parseOptions(this),_54a)});
}
_543(this);
});
};
$.fn.spinner.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"spinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.spinner.parseOptions=function(_54e){
return $.extend({},$.fn.textbox.parseOptions(_54e),$.parser.parseOptions(_54e,["min","max",{increment:"number"}]));
};
$.fn.spinner.defaults=$.extend({},$.fn.textbox.defaults,{min:null,max:null,increment:1,spin:function(down){
},onSpinUp:function(){
},onSpinDown:function(){
}});
})(jQuery);
(function($){
function _54f(_550){
$(_550).addClass("numberspinner-f");
var opts=$.data(_550,"numberspinner").options;
$(_550).numberbox(opts).spinner(opts);
$(_550).numberbox("setValue",opts.value);
};
function _551(_552,down){
var opts=$.data(_552,"numberspinner").options;
var v=parseFloat($(_552).numberbox("getValue")||opts.value)||0;
if(down){
v-=opts.increment;
}else{
v+=opts.increment;
}
$(_552).numberbox("setValue",v);
};
$.fn.numberspinner=function(_553,_554){
if(typeof _553=="string"){
var _555=$.fn.numberspinner.methods[_553];
if(_555){
return _555(this,_554);
}else{
return this.numberbox(_553,_554);
}
}
_553=_553||{};
return this.each(function(){
var _556=$.data(this,"numberspinner");
if(_556){
$.extend(_556.options,_553);
}else{
$.data(this,"numberspinner",{options:$.extend({},$.fn.numberspinner.defaults,$.fn.numberspinner.parseOptions(this),_553)});
}
_54f(this);
});
};
$.fn.numberspinner.methods={options:function(jq){
var opts=jq.numberbox("options");
return $.extend($.data(jq[0],"numberspinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.numberspinner.parseOptions=function(_557){
return $.extend({},$.fn.spinner.parseOptions(_557),$.fn.numberbox.parseOptions(_557),{});
};
$.fn.numberspinner.defaults=$.extend({},$.fn.spinner.defaults,$.fn.numberbox.defaults,{spin:function(down){
_551(this,down);
}});
})(jQuery);
(function($){
function _558(_559){
var _55a=0;
if(_559.selectionStart){
_55a=_559.selectionStart;
}else{
if(_559.createTextRange){
var _55b=_559.createTextRange();
var s=document.selection.createRange();
s.setEndPoint("StartToStart",_55b);
_55a=s.text.length;
}
}
return _55a;
};
function _55c(_55d,_55e,end){
if(_55d.selectionStart){
_55d.setSelectionRange(_55e,end);
}else{
if(_55d.createTextRange){
var _55f=_55d.createTextRange();
_55f.collapse();
_55f.moveEnd("character",end);
_55f.moveStart("character",_55e);
_55f.select();
}
}
};
function _560(_561){
var opts=$.data(_561,"timespinner").options;
$(_561).addClass("timespinner-f").spinner(opts);
var _562=opts.formatter.call(_561,opts.parser.call(_561,opts.value));
$(_561).timespinner("initValue",_562);
};
function _563(e){
var _564=e.data.target;
var opts=$.data(_564,"timespinner").options;
var _565=_558(this);
for(var i=0;i<opts.selections.length;i++){
var _566=opts.selections[i];
if(_565>=_566[0]&&_565<=_566[1]){
_567(_564,i);
return;
}
}
};
function _567(_568,_569){
var opts=$.data(_568,"timespinner").options;
if(_569!=undefined){
opts.highlight=_569;
}
var _56a=opts.selections[opts.highlight];
if(_56a){
var tb=$(_568).timespinner("textbox");
_55c(tb[0],_56a[0],_56a[1]);
tb.focus();
}
};
function _56b(_56c,_56d){
var opts=$.data(_56c,"timespinner").options;
var _56d=opts.parser.call(_56c,_56d);
var text=opts.formatter.call(_56c,_56d);
$(_56c).spinner("setValue",text);
};
function _56e(_56f,down){
var opts=$.data(_56f,"timespinner").options;
var s=$(_56f).timespinner("getValue");
var _570=opts.selections[opts.highlight];
var s1=s.substring(0,_570[0]);
var s2=s.substring(_570[0],_570[1]);
var s3=s.substring(_570[1]);
var v=s1+((parseInt(s2)||0)+opts.increment*(down?-1:1))+s3;
$(_56f).timespinner("setValue",v);
_567(_56f);
};
$.fn.timespinner=function(_571,_572){
if(typeof _571=="string"){
var _573=$.fn.timespinner.methods[_571];
if(_573){
return _573(this,_572);
}else{
return this.spinner(_571,_572);
}
}
_571=_571||{};
return this.each(function(){
var _574=$.data(this,"timespinner");
if(_574){
$.extend(_574.options,_571);
}else{
$.data(this,"timespinner",{options:$.extend({},$.fn.timespinner.defaults,$.fn.timespinner.parseOptions(this),_571)});
}
_560(this);
});
};
$.fn.timespinner.methods={options:function(jq){
var opts=jq.data("spinner")?jq.spinner("options"):{};
return $.extend($.data(jq[0],"timespinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},setValue:function(jq,_575){
return jq.each(function(){
_56b(this,_575);
});
},getHours:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[0],10);
},getMinutes:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[1],10);
},getSeconds:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[2],10)||0;
}};
$.fn.timespinner.parseOptions=function(_576){
return $.extend({},$.fn.spinner.parseOptions(_576),$.parser.parseOptions(_576,["separator",{showSeconds:"boolean",highlight:"number"}]));
};
$.fn.timespinner.defaults=$.extend({},$.fn.spinner.defaults,{inputEvents:$.extend({},$.fn.spinner.defaults.inputEvents,{click:function(e){
_563.call(this,e);
},blur:function(e){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
}
}}),formatter:function(date){
if(!date){
return "";
}
var opts=$(this).timespinner("options");
var tt=[_577(date.getHours()),_577(date.getMinutes())];
if(opts.showSeconds){
tt.push(_577(date.getSeconds()));
}
return tt.join(opts.separator);
function _577(_578){
return (_578<10?"0":"")+_578;
};
},parser:function(s){
var opts=$(this).timespinner("options");
var date=_579(s);
if(date){
var min=_579(opts.min);
var max=_579(opts.max);
if(min&&min>date){
date=min;
}
if(max&&max<date){
date=max;
}
}
return date;
function _579(s){
if(!s){
return null;
}
var tt=s.split(opts.separator);
return new Date(1900,0,0,parseInt(tt[0],10)||0,parseInt(tt[1],10)||0,parseInt(tt[2],10)||0);
};
if(!s){
return null;
}
var tt=s.split(opts.separator);
return new Date(1900,0,0,parseInt(tt[0],10)||0,parseInt(tt[1],10)||0,parseInt(tt[2],10)||0);
},selections:[[0,2],[3,5],[6,8]],separator:":",showSeconds:false,highlight:0,spin:function(down){
_56e(this,down);
}});
})(jQuery);
(function($){
function _57a(_57b){
var opts=$.data(_57b,"datetimespinner").options;
$(_57b).addClass("datetimespinner-f").timespinner(opts);
};
$.fn.datetimespinner=function(_57c,_57d){
if(typeof _57c=="string"){
var _57e=$.fn.datetimespinner.methods[_57c];
if(_57e){
return _57e(this,_57d);
}else{
return this.timespinner(_57c,_57d);
}
}
_57c=_57c||{};
return this.each(function(){
var _57f=$.data(this,"datetimespinner");
if(_57f){
$.extend(_57f.options,_57c);
}else{
$.data(this,"datetimespinner",{options:$.extend({},$.fn.datetimespinner.defaults,$.fn.datetimespinner.parseOptions(this),_57c)});
}
_57a(this);
});
};
$.fn.datetimespinner.methods={options:function(jq){
var opts=jq.timespinner("options");
return $.extend($.data(jq[0],"datetimespinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.datetimespinner.parseOptions=function(_580){
return $.extend({},$.fn.timespinner.parseOptions(_580),$.parser.parseOptions(_580,[]));
};
$.fn.datetimespinner.defaults=$.extend({},$.fn.timespinner.defaults,{formatter:function(date){
if(!date){
return "";
}
return $.fn.datebox.defaults.formatter.call(this,date)+" "+$.fn.timespinner.defaults.formatter.call(this,date);
},parser:function(s){
s=$.trim(s);
if(!s){
return null;
}
var dt=s.split(" ");
var _581=$.fn.datebox.defaults.parser.call(this,dt[0]);
if(dt.length<2){
return _581;
}
var _582=$.fn.timespinner.defaults.parser.call(this,dt[1]);
return new Date(_581.getFullYear(),_581.getMonth(),_581.getDate(),_582.getHours(),_582.getMinutes(),_582.getSeconds());
},selections:[[0,2],[3,5],[6,10],[11,13],[14,16],[17,19]]});
})(jQuery);
(function($){
var _583=0;
function _584(a,o){
for(var i=0,len=a.length;i<len;i++){
if(a[i]==o){
return i;
}
}
return -1;
};
function _585(a,o,id){
if(typeof o=="string"){
for(var i=0,len=a.length;i<len;i++){
if(a[i][o]==id){
a.splice(i,1);
return;
}
}
}else{
var _586=_584(a,o);
if(_586!=-1){
a.splice(_586,1);
}
}
};
function _587(a,o,r){
for(var i=0,len=a.length;i<len;i++){
if(a[i][o]==r[o]){
return;
}
}
a.push(r);
};
function _588(_589,aa){
return $.data(_589,"treegrid")?aa.slice(1):aa;
};
function _58a(_58b){
var _58c=$.data(_58b,"datagrid");
var opts=_58c.options;
var _58d=_58c.panel;
var dc=_58c.dc;
var ss=null;
if(opts.sharedStyleSheet){
ss=typeof opts.sharedStyleSheet=="boolean"?"head":opts.sharedStyleSheet;
}else{
ss=_58d.closest("div.datagrid-view");
if(!ss.length){
ss=dc.view;
}
}
var cc=$(ss);
var _58e=$.data(cc[0],"ss");
if(!_58e){
_58e=$.data(cc[0],"ss",{cache:{},dirty:[]});
}
return {add:function(_58f){
var ss=["<style type=\"text/css\" easyui=\"true\">"];
for(var i=0;i<_58f.length;i++){
_58e.cache[_58f[i][0]]={width:_58f[i][1]};
}
var _590=0;
for(var s in _58e.cache){
var item=_58e.cache[s];
item.index=_590++;
ss.push(s+"{width:"+item.width+"}");
}
ss.push("</style>");
$(ss.join("\n")).appendTo(cc);
cc.children("style[easyui]:not(:last)").remove();
},getRule:function(_591){
var _592=cc.children("style[easyui]:last")[0];
var _593=_592.styleSheet?_592.styleSheet:(_592.sheet||document.styleSheets[document.styleSheets.length-1]);
var _594=_593.cssRules||_593.rules;
return _594[_591];
},set:function(_595,_596){
var item=_58e.cache[_595];
if(item){
item.width=_596;
var rule=this.getRule(item.index);
if(rule){
rule.style["width"]=_596;
}
}
},remove:function(_597){
var tmp=[];
for(var s in _58e.cache){
if(s.indexOf(_597)==-1){
tmp.push([s,_58e.cache[s].width]);
}
}
_58e.cache={};
this.add(tmp);
},dirty:function(_598){
if(_598){
_58e.dirty.push(_598);
}
},clean:function(){
for(var i=0;i<_58e.dirty.length;i++){
this.remove(_58e.dirty[i]);
}
_58e.dirty=[];
}};
};
function _599(_59a,_59b){
var _59c=$.data(_59a,"datagrid");
var opts=_59c.options;
var _59d=_59c.panel;
if(_59b){
$.extend(opts,_59b);
}
if(opts.fit==true){
var p=_59d.panel("panel").parent();
opts.width=p.width();
opts.height=p.height();
}
_59d.panel("resize",opts);
};
function _59e(_59f){
var _5a0=$.data(_59f,"datagrid");
var opts=_5a0.options;
var dc=_5a0.dc;
var wrap=_5a0.panel;
var _5a1=wrap.width();
var _5a2=wrap.height();
var view=dc.view;
var _5a3=dc.view1;
var _5a4=dc.view2;
var _5a5=_5a3.children("div.datagrid-header");
var _5a6=_5a4.children("div.datagrid-header");
var _5a7=_5a5.find("table");
var _5a8=_5a6.find("table");
view.width(_5a1);
var _5a9=_5a5.children("div.datagrid-header-inner").show();
_5a3.width(_5a9.find("table").width());
if(!opts.showHeader){
_5a9.hide();
}
_5a4.width(_5a1-_5a3._outerWidth());
_5a3.children()._outerWidth(_5a3.width());
_5a4.children()._outerWidth(_5a4.width());
var all=_5a5.add(_5a6).add(_5a7).add(_5a8);
all.css("height","");
var hh=Math.max(_5a7.height(),_5a8.height());
all._outerHeight(hh);
dc.body1.add(dc.body2).children("table.datagrid-btable-frozen").css({position:"absolute",top:dc.header2._outerHeight()});
var _5aa=dc.body2.children("table.datagrid-btable-frozen")._outerHeight();
var _5ab=_5aa+_5a6._outerHeight()+_5a4.children(".datagrid-footer")._outerHeight();
wrap.children(":not(.datagrid-view)").each(function(){
_5ab+=$(this)._outerHeight();
});
var _5ac=wrap.outerHeight()-wrap.height();
var _5ad=wrap._size("minHeight")||"";
var _5ae=wrap._size("maxHeight")||"";
_5a3.add(_5a4).children("div.datagrid-body").css({marginTop:_5aa,height:(isNaN(parseInt(opts.height))?"":(_5a2-_5ab)),minHeight:(_5ad?_5ad-_5ac-_5ab:""),maxHeight:(_5ae?_5ae-_5ac-_5ab:"")});
view.height(_5a4.height());
};
function _5af(_5b0,_5b1,_5b2){
var rows=$.data(_5b0,"datagrid").data.rows;
var opts=$.data(_5b0,"datagrid").options;
var dc=$.data(_5b0,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight||_5b2)){
if(_5b1!=undefined){
var tr1=opts.finder.getTr(_5b0,_5b1,"body",1);
var tr2=opts.finder.getTr(_5b0,_5b1,"body",2);
_5b3(tr1,tr2);
}else{
var tr1=opts.finder.getTr(_5b0,0,"allbody",1);
var tr2=opts.finder.getTr(_5b0,0,"allbody",2);
_5b3(tr1,tr2);
if(opts.showFooter){
var tr1=opts.finder.getTr(_5b0,0,"allfooter",1);
var tr2=opts.finder.getTr(_5b0,0,"allfooter",2);
_5b3(tr1,tr2);
}
}
}
_59e(_5b0);
if(opts.height=="auto"){
var _5b4=dc.body1.parent();
var _5b5=dc.body2;
var _5b6=_5b7(_5b5);
var _5b8=_5b6.height;
if(_5b6.width>_5b5.width()){
_5b8+=18;
}
_5b8-=parseInt(_5b5.css("marginTop"))||0;
_5b4.height(_5b8);
_5b5.height(_5b8);
dc.view.height(dc.view2.height());
}
dc.body2.triggerHandler("scroll");
function _5b3(trs1,trs2){
for(var i=0;i<trs2.length;i++){
var tr1=$(trs1[i]);
var tr2=$(trs2[i]);
tr1.css("height","");
tr2.css("height","");
var _5b9=Math.max(tr1.height(),tr2.height());
tr1.css("height",_5b9);
tr2.css("height",_5b9);
}
};
function _5b7(cc){
var _5ba=0;
var _5bb=0;
$(cc).children().each(function(){
var c=$(this);
if(c.is(":visible")){
_5bb+=c._outerHeight();
if(_5ba<c._outerWidth()){
_5ba=c._outerWidth();
}
}
});
return {width:_5ba,height:_5bb};
};
};
function _5bc(_5bd,_5be){
var _5bf=$.data(_5bd,"datagrid");
var opts=_5bf.options;
var dc=_5bf.dc;
if(!dc.body2.children("table.datagrid-btable-frozen").length){
dc.body1.add(dc.body2).prepend("<table class=\"datagrid-btable datagrid-btable-frozen\" cellspacing=\"0\" cellpadding=\"0\"></table>");
}
_5c0(true);
_5c0(false);
_59e(_5bd);
function _5c0(_5c1){
var _5c2=_5c1?1:2;
var tr=opts.finder.getTr(_5bd,_5be,"body",_5c2);
(_5c1?dc.body1:dc.body2).children("table.datagrid-btable-frozen").append(tr);
};
};
function _5c3(_5c4,_5c5){
function _5c6(){
var _5c7=[];
var _5c8=[];
$(_5c4).children("thead").each(function(){
var opt=$.parser.parseOptions(this,[{frozen:"boolean"}]);
$(this).find("tr").each(function(){
var cols=[];
$(this).find("th").each(function(){
var th=$(this);
var col=$.extend({},$.parser.parseOptions(this,["field","align","halign","order","width",{sortable:"boolean",checkbox:"boolean",resizable:"boolean",fixed:"boolean"},{rowspan:"number",colspan:"number"}]),{title:(th.html()||undefined),hidden:(th.attr("hidden")?true:undefined),formatter:(th.attr("formatter")?eval(th.attr("formatter")):undefined),styler:(th.attr("styler")?eval(th.attr("styler")):undefined),sorter:(th.attr("sorter")?eval(th.attr("sorter")):undefined)});
if(col.width&&String(col.width).indexOf("%")==-1){
col.width=parseInt(col.width);
}
if(th.attr("editor")){
var s=$.trim(th.attr("editor"));
if(s.substr(0,1)=="{"){
col.editor=eval("("+s+")");
}else{
col.editor=s;
}
}
cols.push(col);
});
opt.frozen?_5c7.push(cols):_5c8.push(cols);
});
});
return [_5c7,_5c8];
};
var _5c9=$("<div class=\"datagrid-wrap\">"+"<div class=\"datagrid-view\">"+"<div class=\"datagrid-view1\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\">"+"<div class=\"datagrid-body-inner\"></div>"+"</div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"<div class=\"datagrid-view2\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\"></div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"</div>"+"</div>").insertAfter(_5c4);
_5c9.panel({doSize:false,cls:"datagrid"});
$(_5c4).addClass("datagrid-f").hide().appendTo(_5c9.children("div.datagrid-view"));
var cc=_5c6();
var view=_5c9.children("div.datagrid-view");
var _5ca=view.children("div.datagrid-view1");
var _5cb=view.children("div.datagrid-view2");
return {panel:_5c9,frozenColumns:cc[0],columns:cc[1],dc:{view:view,view1:_5ca,view2:_5cb,header1:_5ca.children("div.datagrid-header").children("div.datagrid-header-inner"),header2:_5cb.children("div.datagrid-header").children("div.datagrid-header-inner"),body1:_5ca.children("div.datagrid-body").children("div.datagrid-body-inner"),body2:_5cb.children("div.datagrid-body"),footer1:_5ca.children("div.datagrid-footer").children("div.datagrid-footer-inner"),footer2:_5cb.children("div.datagrid-footer").children("div.datagrid-footer-inner")}};
};
function _5cc(_5cd){
var _5ce=$.data(_5cd,"datagrid");
var opts=_5ce.options;
var dc=_5ce.dc;
var _5cf=_5ce.panel;
_5ce.ss=$(_5cd).datagrid("createStyleSheet");
_5cf.panel($.extend({},opts,{id:null,doSize:false,onResize:function(_5d0,_5d1){
if($.data(_5cd,"datagrid")){
_59e(_5cd);
$(_5cd).datagrid("fitColumns");
opts.onResize.call(_5cf,_5d0,_5d1);
}
},onExpand:function(){
_5af(_5cd);
opts.onExpand.call(_5cf);
}}));
_5ce.rowIdPrefix="datagrid-row-r"+(++_583);
_5ce.cellClassPrefix="datagrid-cell-c"+_583;
_5d2(dc.header1,opts.frozenColumns,true);
_5d2(dc.header2,opts.columns,false);
_5d3();
dc.header1.add(dc.header2).css("display",opts.showHeader?"block":"none");
dc.footer1.add(dc.footer2).css("display",opts.showFooter?"block":"none");
if(opts.toolbar){
if($.isArray(opts.toolbar)){
$("div.datagrid-toolbar",_5cf).remove();
var tb=$("<div class=\"datagrid-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").prependTo(_5cf);
var tr=tb.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"datagrid-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:void(0)\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(opts.toolbar).addClass("datagrid-toolbar").prependTo(_5cf);
$(opts.toolbar).show();
}
}else{
$("div.datagrid-toolbar",_5cf).remove();
}
$("div.datagrid-pager",_5cf).remove();
if(opts.pagination){
var _5d4=$("<div class=\"datagrid-pager\"></div>");
if(opts.pagePosition=="bottom"){
_5d4.appendTo(_5cf);
}else{
if(opts.pagePosition=="top"){
_5d4.addClass("datagrid-pager-top").prependTo(_5cf);
}else{
var ptop=$("<div class=\"datagrid-pager datagrid-pager-top\"></div>").prependTo(_5cf);
_5d4.appendTo(_5cf);
_5d4=_5d4.add(ptop);
}
}
_5d4.pagination({total:(opts.pageNumber*opts.pageSize),pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_5d5,_5d6){
opts.pageNumber=_5d5||1;
opts.pageSize=_5d6;
_5d4.pagination("refresh",{pageNumber:_5d5,pageSize:_5d6});
_611(_5cd);
}});
opts.pageSize=_5d4.pagination("options").pageSize;
}
function _5d2(_5d7,_5d8,_5d9){
if(!_5d8){
return;
}
$(_5d7).show();
$(_5d7).empty();
var _5da=[];
var _5db=[];
if(opts.sortName){
_5da=opts.sortName.split(",");
_5db=opts.sortOrder.split(",");
}
var t=$("<table class=\"datagrid-htable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tbody></tbody></table>").appendTo(_5d7);
for(var i=0;i<_5d8.length;i++){
var tr=$("<tr class=\"datagrid-header-row\"></tr>").appendTo($("tbody",t));
var cols=_5d8[i];
for(var j=0;j<cols.length;j++){
var col=cols[j];
var attr="";
if(col.rowspan){
attr+="rowspan=\""+col.rowspan+"\" ";
}
if(col.colspan){
attr+="colspan=\""+col.colspan+"\" ";
}
var td=$("<td "+attr+"></td>").appendTo(tr);
if(col.checkbox){
td.attr("field",col.field);
$("<div class=\"datagrid-header-check\"></div>").html("<input type=\"checkbox\"/>").appendTo(td);
}else{
if(col.field){
td.attr("field",col.field);
td.append("<div class=\"datagrid-cell\"><span></span><span class=\"datagrid-sort-icon\"></span></div>");
$("span",td).html(col.title);
$("span.datagrid-sort-icon",td).html("&nbsp;");
var cell=td.find("div.datagrid-cell");
var pos=_584(_5da,col.field);
if(pos>=0){
cell.addClass("datagrid-sort-"+_5db[pos]);
}
if(col.resizable==false){
cell.attr("resizable","false");
}
if(col.width){
var _5dc=$.parser.parseValue("width",col.width,dc.view,opts.scrollbarSize);
cell._outerWidth(_5dc-1);
col.boxWidth=parseInt(cell[0].style.width);
col.deltaWidth=_5dc-col.boxWidth;
}else{
col.auto=true;
}
cell.css("text-align",(col.halign||col.align||""));
col.cellClass=_5ce.cellClassPrefix+"-"+col.field.replace(/[\.|\s]/g,"-");
cell.addClass(col.cellClass).css("width","");
}else{
$("<div class=\"datagrid-cell-group\"></div>").html(col.title).appendTo(td);
}
}
if(col.hidden){
td.hide();
}
}
}
if(_5d9&&opts.rownumbers){
var td=$("<td rowspan=\""+opts.frozenColumns.length+"\"><div class=\"datagrid-header-rownumber\"></div></td>");
if($("tr",t).length==0){
td.wrap("<tr class=\"datagrid-header-row\"></tr>").parent().appendTo($("tbody",t));
}else{
td.prependTo($("tr:first",t));
}
}
};
function _5d3(){
var _5dd=[];
var _5de=_5df(_5cd,true).concat(_5df(_5cd));
for(var i=0;i<_5de.length;i++){
var col=_5e0(_5cd,_5de[i]);
if(col&&!col.checkbox){
_5dd.push(["."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto"]);
}
}
_5ce.ss.add(_5dd);
_5ce.ss.dirty(_5ce.cellSelectorPrefix);
_5ce.cellSelectorPrefix="."+_5ce.cellClassPrefix;
};
};
function _5e1(_5e2){
var _5e3=$.data(_5e2,"datagrid");
var _5e4=_5e3.panel;
var opts=_5e3.options;
var dc=_5e3.dc;
var _5e5=dc.header1.add(dc.header2);
_5e5.find("input[type=checkbox]").unbind(".datagrid").bind("click.datagrid",function(e){
if(opts.singleSelect&&opts.selectOnCheck){
return false;
}
if($(this).is(":checked")){
_67b(_5e2);
}else{
_681(_5e2);
}
e.stopPropagation();
});
var _5e6=_5e5.find("div.datagrid-cell");
_5e6.closest("td").unbind(".datagrid").bind("mouseenter.datagrid",function(){
if(_5e3.resizing){
return;
}
$(this).addClass("datagrid-header-over");
}).bind("mouseleave.datagrid",function(){
$(this).removeClass("datagrid-header-over");
}).bind("contextmenu.datagrid",function(e){
var _5e7=$(this).attr("field");
opts.onHeaderContextMenu.call(_5e2,e,_5e7);
});
_5e6.unbind(".datagrid").bind("click.datagrid",function(e){
var p1=$(this).offset().left+5;
var p2=$(this).offset().left+$(this)._outerWidth()-5;
if(e.pageX<p2&&e.pageX>p1){
_606(_5e2,$(this).parent().attr("field"));
}
}).bind("dblclick.datagrid",function(e){
var p1=$(this).offset().left+5;
var p2=$(this).offset().left+$(this)._outerWidth()-5;
var cond=opts.resizeHandle=="right"?(e.pageX>p2):(opts.resizeHandle=="left"?(e.pageX<p1):(e.pageX<p1||e.pageX>p2));
if(cond){
var _5e8=$(this).parent().attr("field");
var col=_5e0(_5e2,_5e8);
if(col.resizable==false){
return;
}
$(_5e2).datagrid("autoSizeColumn",_5e8);
col.auto=false;
}
});
var _5e9=opts.resizeHandle=="right"?"e":(opts.resizeHandle=="left"?"w":"e,w");
_5e6.each(function(){
$(this).resizable({handles:_5e9,disabled:($(this).attr("resizable")?$(this).attr("resizable")=="false":false),minWidth:25,onStartResize:function(e){
_5e3.resizing=true;
_5e5.css("cursor",$("body").css("cursor"));
if(!_5e3.proxy){
_5e3.proxy=$("<div class=\"datagrid-resize-proxy\"></div>").appendTo(dc.view);
}
_5e3.proxy.css({left:e.pageX-$(_5e4).offset().left-1,display:"none"});
setTimeout(function(){
if(_5e3.proxy){
_5e3.proxy.show();
}
},500);
},onResize:function(e){
_5e3.proxy.css({left:e.pageX-$(_5e4).offset().left-1,display:"block"});
return false;
},onStopResize:function(e){
_5e5.css("cursor","");
$(this).css("height","");
var _5ea=$(this).parent().attr("field");
var col=_5e0(_5e2,_5ea);
col.width=$(this)._outerWidth();
col.boxWidth=col.width-col.deltaWidth;
col.auto=undefined;
$(this).css("width","");
$(_5e2).datagrid("fixColumnSize",_5ea);
_5e3.proxy.remove();
_5e3.proxy=null;
if($(this).parents("div:first.datagrid-header").parent().hasClass("datagrid-view1")){
_59e(_5e2);
}
$(_5e2).datagrid("fitColumns");
opts.onResizeColumn.call(_5e2,_5ea,col.width);
setTimeout(function(){
_5e3.resizing=false;
},0);
}});
});
var bb=dc.body1.add(dc.body2);
bb.unbind();
for(var _5eb in opts.rowEvents){
bb.bind(_5eb,opts.rowEvents[_5eb]);
}
dc.body1.bind("mousewheel DOMMouseScroll",function(e){
var e1=e.originalEvent||window.event;
var _5ec=e1.wheelDelta||e1.detail*(-1);
var dg=$(e.target).closest("div.datagrid-view").children(".datagrid-f");
var dc=dg.data("datagrid").dc;
dc.body2.scrollTop(dc.body2.scrollTop()-_5ec);
});
dc.body2.bind("scroll",function(){
var b1=dc.view1.children("div.datagrid-body");
b1.scrollTop($(this).scrollTop());
var c1=dc.body1.children(":first");
var c2=dc.body2.children(":first");
if(c1.length&&c2.length){
var top1=c1.offset().top;
var top2=c2.offset().top;
if(top1!=top2){
b1.scrollTop(b1.scrollTop()+top1-top2);
}
}
dc.view2.children("div.datagrid-header,div.datagrid-footer")._scrollLeft($(this)._scrollLeft());
dc.body2.children("table.datagrid-btable-frozen").css("left",-$(this)._scrollLeft());
});
};
function _5ed(_5ee){
return function(e){
var tr=_5ef(e.target);
if(!tr){
return;
}
var _5f0=_5f1(tr);
if($.data(_5f0,"datagrid").resizing){
return;
}
var _5f2=_5f3(tr);
if(_5ee){
_5f4(_5f0,_5f2);
}else{
var opts=$.data(_5f0,"datagrid").options;
opts.finder.getTr(_5f0,_5f2).removeClass("datagrid-row-over");
}
};
};
function _5f5(e){
var tr=_5ef(e.target);
if(!tr){
return;
}
var _5f6=_5f1(tr);
var opts=$.data(_5f6,"datagrid").options;
var _5f7=_5f3(tr);
var tt=$(e.target);
if(tt.parent().hasClass("datagrid-cell-check")){
if(opts.singleSelect&&opts.selectOnCheck){
tt._propAttr("checked",!tt.is(":checked"));
_5f8(_5f6,_5f7);
}else{
if(tt.is(":checked")){
tt._propAttr("checked",false);
_5f8(_5f6,_5f7);
}else{
tt._propAttr("checked",true);
_5f9(_5f6,_5f7);
}
}
}else{
var row=opts.finder.getRow(_5f6,_5f7);
var td=tt.closest("td[field]",tr);
if(td.length){
var _5fa=td.attr("field");
opts.onClickCell.call(_5f6,_5f7,_5fa,row[_5fa]);
}
if(opts.singleSelect==true){
_5fb(_5f6,_5f7);
}else{
if(opts.ctrlSelect){
if(e.ctrlKey){
if(tr.hasClass("datagrid-row-selected")){
_5fc(_5f6,_5f7);
}else{
_5fb(_5f6,_5f7);
}
}else{
if(e.shiftKey){
$(_5f6).datagrid("clearSelections");
var _5fd=Math.min(opts.lastSelectedIndex||0,_5f7);
var _5fe=Math.max(opts.lastSelectedIndex||0,_5f7);
for(var i=_5fd;i<=_5fe;i++){
_5fb(_5f6,i);
}
}else{
$(_5f6).datagrid("clearSelections");
_5fb(_5f6,_5f7);
opts.lastSelectedIndex=_5f7;
}
}
}else{
if(tr.hasClass("datagrid-row-selected")){
_5fc(_5f6,_5f7);
}else{
_5fb(_5f6,_5f7);
}
}
}
opts.onClickRow.apply(_5f6,_588(_5f6,[_5f7,row]));
}
};
function _5ff(e){
var tr=_5ef(e.target);
if(!tr){
return;
}
var _600=_5f1(tr);
var opts=$.data(_600,"datagrid").options;
var _601=_5f3(tr);
var row=opts.finder.getRow(_600,_601);
var td=$(e.target).closest("td[field]",tr);
if(td.length){
var _602=td.attr("field");
opts.onDblClickCell.call(_600,_601,_602,row[_602]);
}
opts.onDblClickRow.apply(_600,_588(_600,[_601,row]));
};
function _603(e){
var tr=_5ef(e.target);
if(!tr){
return;
}
var _604=_5f1(tr);
var opts=$.data(_604,"datagrid").options;
var _605=_5f3(tr);
var row=opts.finder.getRow(_604,_605);
opts.onRowContextMenu.call(_604,e,_605,row);
};
function _5f1(t){
return $(t).closest("div.datagrid-view").children(".datagrid-f")[0];
};
function _5ef(t){
var tr=$(t).closest("tr.datagrid-row");
if(tr.length&&tr.parent().length){
return tr;
}else{
return undefined;
}
};
function _5f3(tr){
if(tr.attr("datagrid-row-index")){
return parseInt(tr.attr("datagrid-row-index"));
}else{
return tr.attr("node-id");
}
};
function _606(_607,_608){
var _609=$.data(_607,"datagrid");
var opts=_609.options;
_608=_608||{};
var _60a={sortName:opts.sortName,sortOrder:opts.sortOrder};
if(typeof _608=="object"){
$.extend(_60a,_608);
}
var _60b=[];
var _60c=[];
if(_60a.sortName){
_60b=_60a.sortName.split(",");
_60c=_60a.sortOrder.split(",");
}
if(typeof _608=="string"){
var _60d=_608;
var col=_5e0(_607,_60d);
if(!col.sortable||_609.resizing){
return;
}
var _60e=col.order||"asc";
var pos=_584(_60b,_60d);
if(pos>=0){
var _60f=_60c[pos]=="asc"?"desc":"asc";
if(opts.multiSort&&_60f==_60e){
_60b.splice(pos,1);
_60c.splice(pos,1);
}else{
_60c[pos]=_60f;
}
}else{
if(opts.multiSort){
_60b.push(_60d);
_60c.push(_60e);
}else{
_60b=[_60d];
_60c=[_60e];
}
}
_60a.sortName=_60b.join(",");
_60a.sortOrder=_60c.join(",");
}
if(opts.onBeforeSortColumn.call(_607,_60a.sortName,_60a.sortOrder)==false){
return;
}
$.extend(opts,_60a);
var dc=_609.dc;
var _610=dc.header1.add(dc.header2);
_610.find("div.datagrid-cell").removeClass("datagrid-sort-asc datagrid-sort-desc");
for(var i=0;i<_60b.length;i++){
var col=_5e0(_607,_60b[i]);
_610.find("div."+col.cellClass).addClass("datagrid-sort-"+_60c[i]);
}
if(opts.remoteSort){
_611(_607);
}else{
_612(_607,$(_607).datagrid("getData"));
}
opts.onSortColumn.call(_607,opts.sortName,opts.sortOrder);
};
function _613(_614){
var _615=$.data(_614,"datagrid");
var opts=_615.options;
var dc=_615.dc;
var _616=dc.view2.children("div.datagrid-header");
dc.body2.css("overflow-x","");
_617();
_618();
_619();
_617(true);
if(_616.width()>=_616.find("table").width()){
dc.body2.css("overflow-x","hidden");
}
function _619(){
if(!opts.fitColumns){
return;
}
if(!_615.leftWidth){
_615.leftWidth=0;
}
var _61a=0;
var cc=[];
var _61b=_5df(_614,false);
for(var i=0;i<_61b.length;i++){
var col=_5e0(_614,_61b[i]);
if(_61c(col)){
_61a+=col.width;
cc.push({field:col.field,col:col,addingWidth:0});
}
}
if(!_61a){
return;
}
cc[cc.length-1].addingWidth-=_615.leftWidth;
var _61d=_616.children("div.datagrid-header-inner").show();
var _61e=_616.width()-_616.find("table").width()-opts.scrollbarSize+_615.leftWidth;
var rate=_61e/_61a;
if(!opts.showHeader){
_61d.hide();
}
for(var i=0;i<cc.length;i++){
var c=cc[i];
var _61f=parseInt(c.col.width*rate);
c.addingWidth+=_61f;
_61e-=_61f;
}
cc[cc.length-1].addingWidth+=_61e;
for(var i=0;i<cc.length;i++){
var c=cc[i];
if(c.col.boxWidth+c.addingWidth>0){
c.col.boxWidth+=c.addingWidth;
c.col.width+=c.addingWidth;
}
}
_615.leftWidth=_61e;
$(_614).datagrid("fixColumnSize");
};
function _618(){
var _620=false;
var _621=_5df(_614,true).concat(_5df(_614,false));
$.map(_621,function(_622){
var col=_5e0(_614,_622);
if(String(col.width||"").indexOf("%")>=0){
var _623=$.parser.parseValue("width",col.width,dc.view,opts.scrollbarSize)-col.deltaWidth;
if(_623>0){
col.boxWidth=_623;
_620=true;
}
}
});
if(_620){
$(_614).datagrid("fixColumnSize");
}
};
function _617(fit){
var _624=dc.header1.add(dc.header2).find(".datagrid-cell-group");
if(_624.length){
_624.each(function(){
$(this)._outerWidth(fit?$(this).parent().width():10);
});
if(fit){
_59e(_614);
}
}
};
function _61c(col){
if(String(col.width||"").indexOf("%")>=0){
return false;
}
if(!col.hidden&&!col.checkbox&&!col.auto&&!col.fixed){
return true;
}
};
};
function _625(_626,_627){
var _628=$.data(_626,"datagrid");
var opts=_628.options;
var dc=_628.dc;
var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-9999px\"></div>").appendTo("body");
if(_627){
_599(_627);
if(opts.fitColumns){
_59e(_626);
$(_626).datagrid("fitColumns");
}
}else{
var _629=false;
var _62a=_5df(_626,true).concat(_5df(_626,false));
for(var i=0;i<_62a.length;i++){
var _627=_62a[i];
var col=_5e0(_626,_627);
if(col.auto){
_599(_627);
_629=true;
}
}
if(_629&&opts.fitColumns){
_59e(_626);
$(_626).datagrid("fitColumns");
}
}
tmp.remove();
function _599(_62b){
var _62c=dc.view.find("div.datagrid-header td[field=\""+_62b+"\"] div.datagrid-cell");
_62c.css("width","");
var col=$(_626).datagrid("getColumnOption",_62b);
col.width=undefined;
col.boxWidth=undefined;
col.auto=true;
$(_626).datagrid("fixColumnSize",_62b);
var _62d=Math.max(_62e("header"),_62e("allbody"),_62e("allfooter"))+1;
_62c._outerWidth(_62d-1);
col.width=_62d;
col.boxWidth=parseInt(_62c[0].style.width);
col.deltaWidth=_62d-col.boxWidth;
_62c.css("width","");
$(_626).datagrid("fixColumnSize",_62b);
opts.onResizeColumn.call(_626,_62b,col.width);
function _62e(type){
var _62f=0;
if(type=="header"){
_62f=_630(_62c);
}else{
opts.finder.getTr(_626,0,type).find("td[field=\""+_62b+"\"] div.datagrid-cell").each(function(){
var w=_630($(this));
if(_62f<w){
_62f=w;
}
});
}
return _62f;
function _630(cell){
return cell.is(":visible")?cell._outerWidth():tmp.html(cell.html())._outerWidth();
};
};
};
};
function _631(_632,_633){
var _634=$.data(_632,"datagrid");
var opts=_634.options;
var dc=_634.dc;
var _635=dc.view.find("table.datagrid-btable,table.datagrid-ftable");
_635.css("table-layout","fixed");
if(_633){
fix(_633);
}else{
var ff=_5df(_632,true).concat(_5df(_632,false));
for(var i=0;i<ff.length;i++){
fix(ff[i]);
}
}
_635.css("table-layout","");
_636(_632);
_5af(_632);
_637(_632);
function fix(_638){
var col=_5e0(_632,_638);
if(col.cellClass){
_634.ss.set("."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto");
}
};
};
function _636(_639){
var dc=$.data(_639,"datagrid").dc;
dc.view.find("td.datagrid-td-merged").each(function(){
var td=$(this);
var _63a=td.attr("colspan")||1;
var col=_5e0(_639,td.attr("field"));
var _63b=col.boxWidth+col.deltaWidth-1;
for(var i=1;i<_63a;i++){
td=td.next();
col=_5e0(_639,td.attr("field"));
_63b+=col.boxWidth+col.deltaWidth;
}
$(this).children("div.datagrid-cell")._outerWidth(_63b);
});
};
function _637(_63c){
var dc=$.data(_63c,"datagrid").dc;
dc.view.find("div.datagrid-editable").each(function(){
var cell=$(this);
var _63d=cell.parent().attr("field");
var col=$(_63c).datagrid("getColumnOption",_63d);
cell._outerWidth(col.boxWidth+col.deltaWidth-1);
var ed=$.data(this,"datagrid.editor");
if(ed.actions.resize){
ed.actions.resize(ed.target,cell.width());
}
});
};
function _5e0(_63e,_63f){
function find(_640){
if(_640){
for(var i=0;i<_640.length;i++){
var cc=_640[i];
for(var j=0;j<cc.length;j++){
var c=cc[j];
if(c.field==_63f){
return c;
}
}
}
}
return null;
};
var opts=$.data(_63e,"datagrid").options;
var col=find(opts.columns);
if(!col){
col=find(opts.frozenColumns);
}
return col;
};
function _5df(_641,_642){
var opts=$.data(_641,"datagrid").options;
var _643=(_642==true)?(opts.frozenColumns||[[]]):opts.columns;
if(_643.length==0){
return [];
}
var aa=[];
var _644=_645();
for(var i=0;i<_643.length;i++){
aa[i]=new Array(_644);
}
for(var _646=0;_646<_643.length;_646++){
$.map(_643[_646],function(col){
var _647=_648(aa[_646]);
if(_647>=0){
var _649=col.field||"";
for(var c=0;c<(col.colspan||1);c++){
for(var r=0;r<(col.rowspan||1);r++){
aa[_646+r][_647]=_649;
}
_647++;
}
}
});
}
return aa[aa.length-1];
function _645(){
var _64a=0;
$.map(_643[0],function(col){
_64a+=col.colspan||1;
});
return _64a;
};
function _648(a){
for(var i=0;i<a.length;i++){
if(a[i]==undefined){
return i;
}
}
return -1;
};
};
function _612(_64b,data){
var _64c=$.data(_64b,"datagrid");
var opts=_64c.options;
var dc=_64c.dc;
data=opts.loadFilter.call(_64b,data);
data.total=parseInt(data.total);
_64c.data=data;
if(data.footer){
_64c.footer=data.footer;
}
if(!opts.remoteSort&&opts.sortName){
var _64d=opts.sortName.split(",");
var _64e=opts.sortOrder.split(",");
data.rows.sort(function(r1,r2){
var r=0;
for(var i=0;i<_64d.length;i++){
var sn=_64d[i];
var so=_64e[i];
var col=_5e0(_64b,sn);
var _64f=col.sorter||function(a,b){
return a==b?0:(a>b?1:-1);
};
r=_64f(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_64b,data.rows);
}
opts.view.render.call(opts.view,_64b,dc.body2,false);
opts.view.render.call(opts.view,_64b,dc.body1,true);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_64b,dc.footer2,false);
opts.view.renderFooter.call(opts.view,_64b,dc.footer1,true);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_64b);
}
_64c.ss.clean();
var _650=$(_64b).datagrid("getPager");
if(_650.length){
var _651=_650.pagination("options");
if(_651.total!=data.total){
_650.pagination("refresh",{total:data.total});
if(opts.pageNumber!=_651.pageNumber&&_651.pageNumber>0){
opts.pageNumber=_651.pageNumber;
_611(_64b);
}
}
}
_5af(_64b);
dc.body2.triggerHandler("scroll");
$(_64b).datagrid("setSelectionState");
$(_64b).datagrid("autoSizeColumn");
opts.onLoadSuccess.call(_64b,data);
};
function _652(_653){
var _654=$.data(_653,"datagrid");
var opts=_654.options;
var dc=_654.dc;
dc.header1.add(dc.header2).find("input[type=checkbox]")._propAttr("checked",false);
if(opts.idField){
var _655=$.data(_653,"treegrid")?true:false;
var _656=opts.onSelect;
var _657=opts.onCheck;
opts.onSelect=opts.onCheck=function(){
};
var rows=opts.finder.getRows(_653);
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _658=_655?row[opts.idField]:i;
if(_659(_654.selectedRows,row)){
_5fb(_653,_658,true);
}
if(_659(_654.checkedRows,row)){
_5f8(_653,_658,true);
}
}
opts.onSelect=_656;
opts.onCheck=_657;
}
function _659(a,r){
for(var i=0;i<a.length;i++){
if(a[i][opts.idField]==r[opts.idField]){
a[i]=r;
return true;
}
}
return false;
};
};
function _65a(_65b,row){
var _65c=$.data(_65b,"datagrid");
var opts=_65c.options;
var rows=_65c.data.rows;
if(typeof row=="object"){
return _584(rows,row);
}else{
for(var i=0;i<rows.length;i++){
if(rows[i][opts.idField]==row){
return i;
}
}
return -1;
}
};
function _65d(_65e){
var _65f=$.data(_65e,"datagrid");
var opts=_65f.options;
var data=_65f.data;
if(opts.idField){
return _65f.selectedRows;
}else{
var rows=[];
opts.finder.getTr(_65e,"","selected",2).each(function(){
rows.push(opts.finder.getRow(_65e,$(this)));
});
return rows;
}
};
function _660(_661){
var _662=$.data(_661,"datagrid");
var opts=_662.options;
if(opts.idField){
return _662.checkedRows;
}else{
var rows=[];
opts.finder.getTr(_661,"","checked",2).each(function(){
rows.push(opts.finder.getRow(_661,$(this)));
});
return rows;
}
};
function _663(_664,_665){
var _666=$.data(_664,"datagrid");
var dc=_666.dc;
var opts=_666.options;
var tr=opts.finder.getTr(_664,_665);
if(tr.length){
if(tr.closest("table").hasClass("datagrid-btable-frozen")){
return;
}
var _667=dc.view2.children("div.datagrid-header")._outerHeight();
var _668=dc.body2;
var _669=_668.outerHeight(true)-_668.outerHeight();
var top=tr.position().top-_667-_669;
if(top<0){
_668.scrollTop(_668.scrollTop()+top);
}else{
if(top+tr._outerHeight()>_668.height()-18){
_668.scrollTop(_668.scrollTop()+top+tr._outerHeight()-_668.height()+18);
}
}
}
};
function _5f4(_66a,_66b){
var _66c=$.data(_66a,"datagrid");
var opts=_66c.options;
opts.finder.getTr(_66a,_66c.highlightIndex).removeClass("datagrid-row-over");
opts.finder.getTr(_66a,_66b).addClass("datagrid-row-over");
_66c.highlightIndex=_66b;
};
function _5fb(_66d,_66e,_66f){
var _670=$.data(_66d,"datagrid");
var opts=_670.options;
var row=opts.finder.getRow(_66d,_66e);
if(opts.onBeforeSelect.apply(_66d,_588(_66d,[_66e,row]))==false){
return;
}
if(opts.singleSelect){
_671(_66d,true);
_670.selectedRows=[];
}
if(!_66f&&opts.checkOnSelect){
_5f8(_66d,_66e,true);
}
if(opts.idField){
_587(_670.selectedRows,opts.idField,row);
}
opts.finder.getTr(_66d,_66e).addClass("datagrid-row-selected");
opts.onSelect.apply(_66d,_588(_66d,[_66e,row]));
_663(_66d,_66e);
};
function _5fc(_672,_673,_674){
var _675=$.data(_672,"datagrid");
var dc=_675.dc;
var opts=_675.options;
var row=opts.finder.getRow(_672,_673);
if(opts.onBeforeUnselect.apply(_672,_588(_672,[_673,row]))==false){
return;
}
if(!_674&&opts.checkOnSelect){
_5f9(_672,_673,true);
}
opts.finder.getTr(_672,_673).removeClass("datagrid-row-selected");
if(opts.idField){
_585(_675.selectedRows,opts.idField,row[opts.idField]);
}
opts.onUnselect.apply(_672,_588(_672,[_673,row]));
};
function _676(_677,_678){
var _679=$.data(_677,"datagrid");
var opts=_679.options;
var rows=opts.finder.getRows(_677);
var _67a=$.data(_677,"datagrid").selectedRows;
if(!_678&&opts.checkOnSelect){
_67b(_677,true);
}
opts.finder.getTr(_677,"","allbody").addClass("datagrid-row-selected");
if(opts.idField){
for(var _67c=0;_67c<rows.length;_67c++){
_587(_67a,opts.idField,rows[_67c]);
}
}
opts.onSelectAll.call(_677,rows);
};
function _671(_67d,_67e){
var _67f=$.data(_67d,"datagrid");
var opts=_67f.options;
var rows=opts.finder.getRows(_67d);
var _680=$.data(_67d,"datagrid").selectedRows;
if(!_67e&&opts.checkOnSelect){
_681(_67d,true);
}
opts.finder.getTr(_67d,"","selected").removeClass("datagrid-row-selected");
if(opts.idField){
for(var _682=0;_682<rows.length;_682++){
_585(_680,opts.idField,rows[_682][opts.idField]);
}
}
opts.onUnselectAll.call(_67d,rows);
};
function _5f8(_683,_684,_685){
var _686=$.data(_683,"datagrid");
var opts=_686.options;
var row=opts.finder.getRow(_683,_684);
if(opts.onBeforeCheck.apply(_683,_588(_683,[_684,row]))==false){
return;
}
if(opts.singleSelect&&opts.selectOnCheck){
_681(_683,true);
_686.checkedRows=[];
}
if(!_685&&opts.selectOnCheck){
_5fb(_683,_684,true);
}
var tr=opts.finder.getTr(_683,_684).addClass("datagrid-row-checked");
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
tr=opts.finder.getTr(_683,"","checked",2);
if(tr.length==opts.finder.getRows(_683).length){
var dc=_686.dc;
dc.header1.add(dc.header2).find("input[type=checkbox]")._propAttr("checked",true);
}
if(opts.idField){
_587(_686.checkedRows,opts.idField,row);
}
opts.onCheck.apply(_683,_588(_683,[_684,row]));
};
function _5f9(_687,_688,_689){
var _68a=$.data(_687,"datagrid");
var opts=_68a.options;
var row=opts.finder.getRow(_687,_688);
if(opts.onBeforeUncheck.apply(_687,_588(_687,[_688,row]))==false){
return;
}
if(!_689&&opts.selectOnCheck){
_5fc(_687,_688,true);
}
var tr=opts.finder.getTr(_687,_688).removeClass("datagrid-row-checked");
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",false);
var dc=_68a.dc;
var _68b=dc.header1.add(dc.header2);
_68b.find("input[type=checkbox]")._propAttr("checked",false);
if(opts.idField){
_585(_68a.checkedRows,opts.idField,row[opts.idField]);
}
opts.onUncheck.apply(_687,_588(_687,[_688,row]));
};
function _67b(_68c,_68d){
var _68e=$.data(_68c,"datagrid");
var opts=_68e.options;
var rows=opts.finder.getRows(_68c);
if(!_68d&&opts.selectOnCheck){
_676(_68c,true);
}
var dc=_68e.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_68c,"","allbody").addClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",true);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_587(_68e.checkedRows,opts.idField,rows[i]);
}
}
opts.onCheckAll.call(_68c,rows);
};
function _681(_68f,_690){
var _691=$.data(_68f,"datagrid");
var opts=_691.options;
var rows=opts.finder.getRows(_68f);
if(!_690&&opts.selectOnCheck){
_671(_68f,true);
}
var dc=_691.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_68f,"","checked").removeClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",false);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_585(_691.checkedRows,opts.idField,rows[i][opts.idField]);
}
}
opts.onUncheckAll.call(_68f,rows);
};
function _692(_693,_694){
var opts=$.data(_693,"datagrid").options;
var tr=opts.finder.getTr(_693,_694);
var row=opts.finder.getRow(_693,_694);
if(tr.hasClass("datagrid-row-editing")){
return;
}
if(opts.onBeforeEdit.apply(_693,_588(_693,[_694,row]))==false){
return;
}
tr.addClass("datagrid-row-editing");
_695(_693,_694);
_637(_693);
tr.find("div.datagrid-editable").each(function(){
var _696=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
ed.actions.setValue(ed.target,row[_696]);
});
_697(_693,_694);
opts.onBeginEdit.apply(_693,_588(_693,[_694,row]));
};
function _698(_699,_69a,_69b){
var _69c=$.data(_699,"datagrid");
var opts=_69c.options;
var _69d=_69c.updatedRows;
var _69e=_69c.insertedRows;
var tr=opts.finder.getTr(_699,_69a);
var row=opts.finder.getRow(_699,_69a);
if(!tr.hasClass("datagrid-row-editing")){
return;
}
if(!_69b){
if(!_697(_699,_69a)){
return;
}
var _69f=false;
var _6a0={};
tr.find("div.datagrid-editable").each(function(){
var _6a1=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
var t=$(ed.target);
var _6a2=t.data("textbox")?t.textbox("textbox"):t;
_6a2.triggerHandler("blur");
var _6a3=ed.actions.getValue(ed.target);
if(row[_6a1]!=_6a3){
row[_6a1]=_6a3;
_69f=true;
_6a0[_6a1]=_6a3;
}
});
if(_69f){
if(_584(_69e,row)==-1){
if(_584(_69d,row)==-1){
_69d.push(row);
}
}
}
opts.onEndEdit.apply(_699,_588(_699,[_69a,row,_6a0]));
}
tr.removeClass("datagrid-row-editing");
_6a4(_699,_69a);
$(_699).datagrid("refreshRow",_69a);
if(!_69b){
opts.onAfterEdit.apply(_699,_588(_699,[_69a,row,_6a0]));
}else{
opts.onCancelEdit.apply(_699,_588(_699,[_69a,row]));
}
};
function _6a5(_6a6,_6a7){
var opts=$.data(_6a6,"datagrid").options;
var tr=opts.finder.getTr(_6a6,_6a7);
var _6a8=[];
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
_6a8.push(ed);
}
});
return _6a8;
};
function _6a9(_6aa,_6ab){
var _6ac=_6a5(_6aa,_6ab.index!=undefined?_6ab.index:_6ab.id);
for(var i=0;i<_6ac.length;i++){
if(_6ac[i].field==_6ab.field){
return _6ac[i];
}
}
return null;
};
function _695(_6ad,_6ae){
var opts=$.data(_6ad,"datagrid").options;
var tr=opts.finder.getTr(_6ad,_6ae);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-cell");
var _6af=$(this).attr("field");
var col=_5e0(_6ad,_6af);
if(col&&col.editor){
var _6b0,_6b1;
if(typeof col.editor=="string"){
_6b0=col.editor;
}else{
_6b0=col.editor.type;
_6b1=col.editor.options;
}
var _6b2=opts.editors[_6b0];
if(_6b2){
var _6b3=cell.html();
var _6b4=cell._outerWidth();
cell.addClass("datagrid-editable");
cell._outerWidth(_6b4);
cell.html("<table border=\"0\" cellspacing=\"0\" cellpadding=\"1\"><tr><td></td></tr></table>");
cell.children("table").bind("click dblclick contextmenu",function(e){
e.stopPropagation();
});
$.data(cell[0],"datagrid.editor",{actions:_6b2,target:_6b2.init(cell.find("td"),_6b1),field:_6af,type:_6b0,oldHtml:_6b3});
}
}
});
_5af(_6ad,_6ae,true);
};
function _6a4(_6b5,_6b6){
var opts=$.data(_6b5,"datagrid").options;
var tr=opts.finder.getTr(_6b5,_6b6);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
if(ed.actions.destroy){
ed.actions.destroy(ed.target);
}
cell.html(ed.oldHtml);
$.removeData(cell[0],"datagrid.editor");
cell.removeClass("datagrid-editable");
cell.css("width","");
}
});
};
function _697(_6b7,_6b8){
var tr=$.data(_6b7,"datagrid").options.finder.getTr(_6b7,_6b8);
if(!tr.hasClass("datagrid-row-editing")){
return true;
}
var vbox=tr.find(".validatebox-text");
vbox.validatebox("validate");
vbox.trigger("mouseleave");
var _6b9=tr.find(".validatebox-invalid");
return _6b9.length==0;
};
function _6ba(_6bb,_6bc){
var _6bd=$.data(_6bb,"datagrid").insertedRows;
var _6be=$.data(_6bb,"datagrid").deletedRows;
var _6bf=$.data(_6bb,"datagrid").updatedRows;
if(!_6bc){
var rows=[];
rows=rows.concat(_6bd);
rows=rows.concat(_6be);
rows=rows.concat(_6bf);
return rows;
}else{
if(_6bc=="inserted"){
return _6bd;
}else{
if(_6bc=="deleted"){
return _6be;
}else{
if(_6bc=="updated"){
return _6bf;
}
}
}
}
return [];
};
function _6c0(_6c1,_6c2){
var _6c3=$.data(_6c1,"datagrid");
var opts=_6c3.options;
var data=_6c3.data;
var _6c4=_6c3.insertedRows;
var _6c5=_6c3.deletedRows;
$(_6c1).datagrid("cancelEdit",_6c2);
var row=opts.finder.getRow(_6c1,_6c2);
if(_584(_6c4,row)>=0){
_585(_6c4,row);
}else{
_6c5.push(row);
}
_585(_6c3.selectedRows,opts.idField,row[opts.idField]);
_585(_6c3.checkedRows,opts.idField,row[opts.idField]);
opts.view.deleteRow.call(opts.view,_6c1,_6c2);
if(opts.height=="auto"){
_5af(_6c1);
}
$(_6c1).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _6c6(_6c7,_6c8){
var data=$.data(_6c7,"datagrid").data;
var view=$.data(_6c7,"datagrid").options.view;
var _6c9=$.data(_6c7,"datagrid").insertedRows;
view.insertRow.call(view,_6c7,_6c8.index,_6c8.row);
_6c9.push(_6c8.row);
$(_6c7).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _6ca(_6cb,row){
var data=$.data(_6cb,"datagrid").data;
var view=$.data(_6cb,"datagrid").options.view;
var _6cc=$.data(_6cb,"datagrid").insertedRows;
view.insertRow.call(view,_6cb,null,row);
_6cc.push(row);
$(_6cb).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _6cd(_6ce){
var _6cf=$.data(_6ce,"datagrid");
var data=_6cf.data;
var rows=data.rows;
var _6d0=[];
for(var i=0;i<rows.length;i++){
_6d0.push($.extend({},rows[i]));
}
_6cf.originalRows=_6d0;
_6cf.updatedRows=[];
_6cf.insertedRows=[];
_6cf.deletedRows=[];
};
function _6d1(_6d2){
var data=$.data(_6d2,"datagrid").data;
var ok=true;
for(var i=0,len=data.rows.length;i<len;i++){
if(_697(_6d2,i)){
$(_6d2).datagrid("endEdit",i);
}else{
ok=false;
}
}
if(ok){
_6cd(_6d2);
}
};
function _6d3(_6d4){
var _6d5=$.data(_6d4,"datagrid");
var opts=_6d5.options;
var _6d6=_6d5.originalRows;
var _6d7=_6d5.insertedRows;
var _6d8=_6d5.deletedRows;
var _6d9=_6d5.selectedRows;
var _6da=_6d5.checkedRows;
var data=_6d5.data;
function _6db(a){
var ids=[];
for(var i=0;i<a.length;i++){
ids.push(a[i][opts.idField]);
}
return ids;
};
function _6dc(ids,_6dd){
for(var i=0;i<ids.length;i++){
var _6de=_65a(_6d4,ids[i]);
if(_6de>=0){
(_6dd=="s"?_5fb:_5f8)(_6d4,_6de,true);
}
}
};
for(var i=0;i<data.rows.length;i++){
$(_6d4).datagrid("cancelEdit",i);
}
var _6df=_6db(_6d9);
var _6e0=_6db(_6da);
_6d9.splice(0,_6d9.length);
_6da.splice(0,_6da.length);
data.total+=_6d8.length-_6d7.length;
data.rows=_6d6;
_612(_6d4,data);
_6dc(_6df,"s");
_6dc(_6e0,"c");
_6cd(_6d4);
};
function _611(_6e1,_6e2){
var opts=$.data(_6e1,"datagrid").options;
if(_6e2){
opts.queryParams=_6e2;
}
var _6e3=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_6e3,{page:opts.pageNumber||1,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_6e3,{sort:opts.sortName,order:opts.sortOrder});
}
if(opts.onBeforeLoad.call(_6e1,_6e3)==false){
return;
}
$(_6e1).datagrid("loading");
var _6e4=opts.loader.call(_6e1,_6e3,function(data){
$(_6e1).datagrid("loaded");
$(_6e1).datagrid("loadData",data);
},function(){
$(_6e1).datagrid("loaded");
opts.onLoadError.apply(_6e1,arguments);
});
if(_6e4==false){
$(_6e1).datagrid("loaded");
}
};
function _6e5(_6e6,_6e7){
var opts=$.data(_6e6,"datagrid").options;
_6e7.type=_6e7.type||"body";
_6e7.rowspan=_6e7.rowspan||1;
_6e7.colspan=_6e7.colspan||1;
if(_6e7.rowspan==1&&_6e7.colspan==1){
return;
}
var tr=opts.finder.getTr(_6e6,(_6e7.index!=undefined?_6e7.index:_6e7.id),_6e7.type);
if(!tr.length){
return;
}
var td=tr.find("td[field=\""+_6e7.field+"\"]");
td.attr("rowspan",_6e7.rowspan).attr("colspan",_6e7.colspan);
td.addClass("datagrid-td-merged");
_6e8(td.next(),_6e7.colspan-1);
for(var i=1;i<_6e7.rowspan;i++){
tr=tr.next();
if(!tr.length){
break;
}
td=tr.find("td[field=\""+_6e7.field+"\"]");
_6e8(td,_6e7.colspan);
}
_636(_6e6);
function _6e8(td,_6e9){
for(var i=0;i<_6e9;i++){
td.hide();
td=td.next();
}
};
};
$.fn.datagrid=function(_6ea,_6eb){
if(typeof _6ea=="string"){
return $.fn.datagrid.methods[_6ea](this,_6eb);
}
_6ea=_6ea||{};
return this.each(function(){
var _6ec=$.data(this,"datagrid");
var opts;
if(_6ec){
opts=$.extend(_6ec.options,_6ea);
_6ec.options=opts;
}else{
opts=$.extend({},$.extend({},$.fn.datagrid.defaults,{queryParams:{}}),$.fn.datagrid.parseOptions(this),_6ea);
$(this).css("width","").css("height","");
var _6ed=_5c3(this,opts.rownumbers);
if(!opts.columns){
opts.columns=_6ed.columns;
}
if(!opts.frozenColumns){
opts.frozenColumns=_6ed.frozenColumns;
}
opts.columns=$.extend(true,[],opts.columns);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.view=$.extend({},opts.view);
$.data(this,"datagrid",{options:opts,panel:_6ed.panel,dc:_6ed.dc,ss:null,selectedRows:[],checkedRows:[],data:{total:0,rows:[]},originalRows:[],updatedRows:[],insertedRows:[],deletedRows:[]});
}
_5cc(this);
_5e1(this);
_599(this);
if(opts.data){
_612(this,opts.data);
_6cd(this);
}else{
var data=$.fn.datagrid.parseData(this);
if(data.total>0){
_612(this,data);
_6cd(this);
}else{
opts.view.renderEmptyRow(this);
}
}
_611(this);
});
};
function _6ee(_6ef){
var _6f0={};
$.map(_6ef,function(name){
_6f0[name]=_6f1(name);
});
return _6f0;
function _6f1(name){
function isA(_6f2){
return $.data($(_6f2)[0],name)!=undefined;
};
return {init:function(_6f3,_6f4){
var _6f5=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_6f3);
if(_6f5[name]&&name!="text"){
return _6f5[name](_6f4);
}else{
return _6f5;
}
},destroy:function(_6f6){
if(isA(_6f6,name)){
$(_6f6)[name]("destroy");
}
},getValue:function(_6f7){
if(isA(_6f7,name)){
var opts=$(_6f7)[name]("options");
if(opts.multiple){
return $(_6f7)[name]("getValues").join(opts.separator);
}else{
return $(_6f7)[name]("getValue");
}
}else{
return $(_6f7).val();
}
},setValue:function(_6f8,_6f9){
if(isA(_6f8,name)){
var opts=$(_6f8)[name]("options");
if(opts.multiple){
if(_6f9){
$(_6f8)[name]("setValues",_6f9.split(opts.separator));
}else{
$(_6f8)[name]("clear");
}
}else{
$(_6f8)[name]("setValue",_6f9);
}
}else{
$(_6f8).val(_6f9);
}
},resize:function(_6fa,_6fb){
if(isA(_6fa,name)){
$(_6fa)[name]("resize",_6fb);
}else{
$(_6fa)._outerWidth(_6fb)._outerHeight(22);
}
}};
};
};
var _6fc=$.extend({},_6ee(["text","textbox","numberbox","numberspinner","combobox","combotree","combogrid","datebox","datetimebox","timespinner","datetimespinner"]),{textarea:{init:function(_6fd,_6fe){
var _6ff=$("<textarea class=\"datagrid-editable-input\"></textarea>").appendTo(_6fd);
return _6ff;
},getValue:function(_700){
return $(_700).val();
},setValue:function(_701,_702){
$(_701).val(_702);
},resize:function(_703,_704){
$(_703)._outerWidth(_704);
}},checkbox:{init:function(_705,_706){
var _707=$("<input type=\"checkbox\">").appendTo(_705);
_707.val(_706.on);
_707.attr("offval",_706.off);
return _707;
},getValue:function(_708){
if($(_708).is(":checked")){
return $(_708).val();
}else{
return $(_708).attr("offval");
}
},setValue:function(_709,_70a){
var _70b=false;
if($(_709).val()==_70a){
_70b=true;
}
$(_709)._propAttr("checked",_70b);
}},validatebox:{init:function(_70c,_70d){
var _70e=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_70c);
_70e.validatebox(_70d);
return _70e;
},destroy:function(_70f){
$(_70f).validatebox("destroy");
},getValue:function(_710){
return $(_710).val();
},setValue:function(_711,_712){
$(_711).val(_712);
},resize:function(_713,_714){
$(_713)._outerWidth(_714)._outerHeight(22);
}}});
$.fn.datagrid.methods={options:function(jq){
var _715=$.data(jq[0],"datagrid").options;
var _716=$.data(jq[0],"datagrid").panel.panel("options");
var opts=$.extend(_715,{width:_716.width,height:_716.height,closed:_716.closed,collapsed:_716.collapsed,minimized:_716.minimized,maximized:_716.maximized});
return opts;
},setSelectionState:function(jq){
return jq.each(function(){
_652(this);
});
},createStyleSheet:function(jq){
return _58a(jq[0]);
},getPanel:function(jq){
return $.data(jq[0],"datagrid").panel;
},getPager:function(jq){
return $.data(jq[0],"datagrid").panel.children("div.datagrid-pager");
},getColumnFields:function(jq,_717){
return _5df(jq[0],_717);
},getColumnOption:function(jq,_718){
return _5e0(jq[0],_718);
},resize:function(jq,_719){
return jq.each(function(){
_599(this,_719);
});
},load:function(jq,_71a){
return jq.each(function(){
var opts=$(this).datagrid("options");
if(typeof _71a=="string"){
opts.url=_71a;
_71a=null;
}
opts.pageNumber=1;
var _71b=$(this).datagrid("getPager");
_71b.pagination("refresh",{pageNumber:1});
_611(this,_71a);
});
},reload:function(jq,_71c){
return jq.each(function(){
var opts=$(this).datagrid("options");
if(typeof _71c=="string"){
opts.url=_71c;
_71c=null;
}
_611(this,_71c);
});
},reloadFooter:function(jq,_71d){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
var dc=$.data(this,"datagrid").dc;
if(_71d){
$.data(this,"datagrid").footer=_71d;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).datagrid("fixRowHeight");
}
});
},loading:function(jq){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
$(this).datagrid("getPager").pagination("loading");
if(opts.loadMsg){
var _71e=$(this).datagrid("getPanel");
if(!_71e.children("div.datagrid-mask").length){
$("<div class=\"datagrid-mask\" style=\"display:block\"></div>").appendTo(_71e);
var msg=$("<div class=\"datagrid-mask-msg\" style=\"display:block;left:50%\"></div>").html(opts.loadMsg).appendTo(_71e);
msg._outerHeight(40);
msg.css({marginLeft:(-msg.outerWidth()/2),lineHeight:(msg.height()+"px")});
}
}
});
},loaded:function(jq){
return jq.each(function(){
$(this).datagrid("getPager").pagination("loaded");
var _71f=$(this).datagrid("getPanel");
_71f.children("div.datagrid-mask-msg").remove();
_71f.children("div.datagrid-mask").remove();
});
},fitColumns:function(jq){
return jq.each(function(){
_613(this);
});
},fixColumnSize:function(jq,_720){
return jq.each(function(){
_631(this,_720);
});
},fixRowHeight:function(jq,_721){
return jq.each(function(){
_5af(this,_721);
});
},freezeRow:function(jq,_722){
return jq.each(function(){
_5bc(this,_722);
});
},autoSizeColumn:function(jq,_723){
return jq.each(function(){
_625(this,_723);
});
},loadData:function(jq,data){
return jq.each(function(){
_612(this,data);
_6cd(this);
});
},getData:function(jq){
return $.data(jq[0],"datagrid").data;
},getRows:function(jq){
return $.data(jq[0],"datagrid").data.rows;
},getFooterRows:function(jq){
return $.data(jq[0],"datagrid").footer;
},getRowIndex:function(jq,id){
return _65a(jq[0],id);
},getChecked:function(jq){
return _660(jq[0]);
},getSelected:function(jq){
var rows=_65d(jq[0]);
return rows.length>0?rows[0]:null;
},getSelections:function(jq){
return _65d(jq[0]);
},clearSelections:function(jq){
return jq.each(function(){
var _724=$.data(this,"datagrid");
var _725=_724.selectedRows;
var _726=_724.checkedRows;
_725.splice(0,_725.length);
_671(this);
if(_724.options.checkOnSelect){
_726.splice(0,_726.length);
}
});
},clearChecked:function(jq){
return jq.each(function(){
var _727=$.data(this,"datagrid");
var _728=_727.selectedRows;
var _729=_727.checkedRows;
_729.splice(0,_729.length);
_681(this);
if(_727.options.selectOnCheck){
_728.splice(0,_728.length);
}
});
},scrollTo:function(jq,_72a){
return jq.each(function(){
_663(this,_72a);
});
},highlightRow:function(jq,_72b){
return jq.each(function(){
_5f4(this,_72b);
_663(this,_72b);
});
},selectAll:function(jq){
return jq.each(function(){
_676(this);
});
},unselectAll:function(jq){
return jq.each(function(){
_671(this);
});
},selectRow:function(jq,_72c){
return jq.each(function(){
_5fb(this,_72c);
});
},selectRecord:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
if(opts.idField){
var _72d=_65a(this,id);
if(_72d>=0){
$(this).datagrid("selectRow",_72d);
}
}
});
},unselectRow:function(jq,_72e){
return jq.each(function(){
_5fc(this,_72e);
});
},checkRow:function(jq,_72f){
return jq.each(function(){
_5f8(this,_72f);
});
},uncheckRow:function(jq,_730){
return jq.each(function(){
_5f9(this,_730);
});
},checkAll:function(jq){
return jq.each(function(){
_67b(this);
});
},uncheckAll:function(jq){
return jq.each(function(){
_681(this);
});
},beginEdit:function(jq,_731){
return jq.each(function(){
_692(this,_731);
});
},endEdit:function(jq,_732){
return jq.each(function(){
_698(this,_732,false);
});
},cancelEdit:function(jq,_733){
return jq.each(function(){
_698(this,_733,true);
});
},getEditors:function(jq,_734){
return _6a5(jq[0],_734);
},getEditor:function(jq,_735){
return _6a9(jq[0],_735);
},refreshRow:function(jq,_736){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
opts.view.refreshRow.call(opts.view,this,_736);
});
},validateRow:function(jq,_737){
return _697(jq[0],_737);
},updateRow:function(jq,_738){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
opts.view.updateRow.call(opts.view,this,_738.index,_738.row);
});
},appendRow:function(jq,row){
return jq.each(function(){
_6ca(this,row);
});
},insertRow:function(jq,_739){
return jq.each(function(){
_6c6(this,_739);
});
},deleteRow:function(jq,_73a){
return jq.each(function(){
_6c0(this,_73a);
});
},getChanges:function(jq,_73b){
return _6ba(jq[0],_73b);
},acceptChanges:function(jq){
return jq.each(function(){
_6d1(this);
});
},rejectChanges:function(jq){
return jq.each(function(){
_6d3(this);
});
},mergeCells:function(jq,_73c){
return jq.each(function(){
_6e5(this,_73c);
});
},showColumn:function(jq,_73d){
return jq.each(function(){
var _73e=$(this).datagrid("getPanel");
_73e.find("td[field=\""+_73d+"\"]").show();
$(this).datagrid("getColumnOption",_73d).hidden=false;
$(this).datagrid("fitColumns");
});
},hideColumn:function(jq,_73f){
return jq.each(function(){
var _740=$(this).datagrid("getPanel");
_740.find("td[field=\""+_73f+"\"]").hide();
$(this).datagrid("getColumnOption",_73f).hidden=true;
$(this).datagrid("fitColumns");
});
},sort:function(jq,_741){
return jq.each(function(){
_606(this,_741);
});
}};
$.fn.datagrid.parseOptions=function(_742){
var t=$(_742);
return $.extend({},$.fn.panel.parseOptions(_742),$.parser.parseOptions(_742,["url","toolbar","idField","sortName","sortOrder","pagePosition","resizeHandle",{sharedStyleSheet:"boolean",fitColumns:"boolean",autoRowHeight:"boolean",striped:"boolean",nowrap:"boolean"},{rownumbers:"boolean",singleSelect:"boolean",ctrlSelect:"boolean",checkOnSelect:"boolean",selectOnCheck:"boolean"},{pagination:"boolean",pageSize:"number",pageNumber:"number"},{multiSort:"boolean",remoteSort:"boolean",showHeader:"boolean",showFooter:"boolean"},{scrollbarSize:"number"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined),loadMsg:(t.attr("loadMsg")!=undefined?t.attr("loadMsg"):undefined),rowStyler:(t.attr("rowStyler")?eval(t.attr("rowStyler")):undefined)});
};
$.fn.datagrid.parseData=function(_743){
var t=$(_743);
var data={total:0,rows:[]};
var _744=t.datagrid("getColumnFields",true).concat(t.datagrid("getColumnFields",false));
t.find("tbody tr").each(function(){
data.total++;
var row={};
$.extend(row,$.parser.parseOptions(this,["iconCls","state"]));
for(var i=0;i<_744.length;i++){
row[_744[i]]=$(this).find("td:eq("+i+")").html();
}
data.rows.push(row);
});
return data;
};
var _745={render:function(_746,_747,_748){
var rows=$(_746).datagrid("getRows");
$(_747).html(this.renderTable(_746,0,rows,_748));
},renderFooter:function(_749,_74a,_74b){
var opts=$.data(_749,"datagrid").options;
var rows=$.data(_749,"datagrid").footer||[];
var _74c=$(_749).datagrid("getColumnFields",_74b);
var _74d=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
_74d.push("<tr class=\"datagrid-row\" datagrid-row-index=\""+i+"\">");
_74d.push(this.renderRow.call(this,_749,_74c,_74b,i,rows[i]));
_74d.push("</tr>");
}
_74d.push("</tbody></table>");
// modified by grissom on 2016-12-28
//$(_74a).html(_74d.join(""));
$(_74a).innerHtml = _74d.join("");
},renderTable:function(_74e,_74f,rows,_750){
var _751=$.data(_74e,"datagrid");
var opts=_751.options;
if(_750){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return "";
}
}
var _752=$(_74e).datagrid("getColumnFields",_750);
var _753=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var css=opts.rowStyler?opts.rowStyler.call(_74e,_74f,row):"";
var _754="";
var _755="";
if(typeof css=="string"){
_755=css;
}else{
if(css){
_754=css["class"]||"";
_755=css["style"]||"";
}
}
var cls="class=\"datagrid-row "+(_74f%2&&opts.striped?"datagrid-row-alt ":" ")+_754+"\"";
var _756=_755?"style=\""+_755+"\"":"";
var _757=_751.rowIdPrefix+"-"+(_750?1:2)+"-"+_74f;
_753.push("<tr id=\""+_757+"\" datagrid-row-index=\""+_74f+"\" "+cls+" "+_756+">");
_753.push(this.renderRow.call(this,_74e,_752,_750,_74f,row));
_753.push("</tr>");
_74f++;
}
_753.push("</tbody></table>");
return _753.join("");
},renderRow:function(_758,_759,_75a,_75b,_75c){
var opts=$.data(_758,"datagrid").options;
var cc=[];
if(_75a&&opts.rownumbers){
var _75d=_75b+1;
if(opts.pagination){
_75d+=(opts.pageNumber-1)*opts.pageSize;
}
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">"+_75d+"</div></td>");
}
for(var i=0;i<_759.length;i++){
var _75e=_759[i];
var col=$(_758).datagrid("getColumnOption",_75e);
if(col){
var _75f=_75c[_75e];
var css=col.styler?(col.styler(_75f,_75c,_75b)||""):"";
var _760="";
var _761="";
if(typeof css=="string"){
_761=css;
}else{
if(css){
_760=css["class"]||"";
_761=css["style"]||"";
}
}
var cls=_760?"class=\""+_760+"\"":"";
var _762=col.hidden?"style=\"display:none;"+_761+"\"":(_761?"style=\""+_761+"\"":"");
cc.push("<td field=\""+_75e+"\" "+cls+" "+_762+">");
var _762="";
if(!col.checkbox){
if(col.align){
_762+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_762+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_762+="height:auto;";
}
}
}
cc.push("<div style=\""+_762+"\" ");
cc.push(col.checkbox?"class=\"datagrid-cell-check\"":"class=\"datagrid-cell "+col.cellClass+"\"");
cc.push(">");
if(col.checkbox){
cc.push("<input type=\"checkbox\" "+(_75c.checked?"checked=\"checked\"":""));
cc.push(" name=\""+_75e+"\" value=\""+(_75f!=undefined?_75f:"")+"\">");
}else{
if(col.formatter){
cc.push(col.formatter(_75f,_75c,_75b));
}else{
cc.push(_75f);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},refreshRow:function(_763,_764){
this.updateRow.call(this,_763,_764,{});
},updateRow:function(_765,_766,row){
var opts=$.data(_765,"datagrid").options;
var rows=$(_765).datagrid("getRows");
var _767=_768(_766);
$.extend(rows[_766],row);
var _769=_768(_766);
var _76a=_767.c;
var _76b=_769.s;
var _76c="datagrid-row "+(_766%2&&opts.striped?"datagrid-row-alt ":" ")+_769.c;
function _768(_76d){
var css=opts.rowStyler?opts.rowStyler.call(_765,_76d,rows[_76d]):"";
var _76e="";
var _76f="";
if(typeof css=="string"){
_76f=css;
}else{
if(css){
_76e=css["class"]||"";
_76f=css["style"]||"";
}
}
return {c:_76e,s:_76f};
};
function _770(_771){
var _772=$(_765).datagrid("getColumnFields",_771);
var tr=opts.finder.getTr(_765,_766,"body",(_771?1:2));
var _773=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow.call(this,_765,_772,_771,_766,rows[_766]));
tr.attr("style",_76b).removeClass(_76a).addClass(_76c);
if(_773){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
};
_770.call(this,true);
_770.call(this,false);
$(_765).datagrid("fixRowHeight",_766);
},insertRow:function(_774,_775,row){
var _776=$.data(_774,"datagrid");
var opts=_776.options;
var dc=_776.dc;
var data=_776.data;
if(_775==undefined||_775==null){
_775=data.rows.length;
}
if(_775>data.rows.length){
_775=data.rows.length;
}
function _777(_778){
var _779=_778?1:2;
for(var i=data.rows.length-1;i>=_775;i--){
var tr=opts.finder.getTr(_774,i,"body",_779);
tr.attr("datagrid-row-index",i+1);
tr.attr("id",_776.rowIdPrefix+"-"+_779+"-"+(i+1));
if(_778&&opts.rownumbers){
var _77a=i+2;
if(opts.pagination){
_77a+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_77a);
}
if(opts.striped){
tr.removeClass("datagrid-row-alt").addClass((i+1)%2?"datagrid-row-alt":"");
}
}
};
function _77b(_77c){
var _77d=_77c?1:2;
var _77e=$(_774).datagrid("getColumnFields",_77c);
var _77f=_776.rowIdPrefix+"-"+_77d+"-"+_775;
var tr="<tr id=\""+_77f+"\" class=\"datagrid-row\" datagrid-row-index=\""+_775+"\"></tr>";
if(_775>=data.rows.length){
if(data.rows.length){
opts.finder.getTr(_774,"","last",_77d).after(tr);
}else{
var cc=_77c?dc.body1:dc.body2;
cc.html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"+tr+"</tbody></table>");
}
}else{
opts.finder.getTr(_774,_775+1,"body",_77d).before(tr);
}
};
_777.call(this,true);
_777.call(this,false);
_77b.call(this,true);
_77b.call(this,false);
data.total+=1;
data.rows.splice(_775,0,row);
this.refreshRow.call(this,_774,_775);
},deleteRow:function(_780,_781){
var _782=$.data(_780,"datagrid");
var opts=_782.options;
var data=_782.data;
function _783(_784){
var _785=_784?1:2;
for(var i=_781+1;i<data.rows.length;i++){
var tr=opts.finder.getTr(_780,i,"body",_785);
tr.attr("datagrid-row-index",i-1);
tr.attr("id",_782.rowIdPrefix+"-"+_785+"-"+(i-1));
if(_784&&opts.rownumbers){
var _786=i;
if(opts.pagination){
_786+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_786);
}
if(opts.striped){
tr.removeClass("datagrid-row-alt").addClass((i-1)%2?"datagrid-row-alt":"");
}
}
};
opts.finder.getTr(_780,_781).remove();
_783.call(this,true);
_783.call(this,false);
data.total-=1;
data.rows.splice(_781,1);
},onBeforeRender:function(_787,rows){
},onAfterRender:function(_788){
var _789=$.data(_788,"datagrid");
var opts=_789.options;
if(opts.showFooter){
var _78a=$(_788).datagrid("getPanel").find("div.datagrid-footer");
_78a.find("div.datagrid-cell-rownumber,div.datagrid-cell-check").css("visibility","hidden");
}
if(opts.finder.getRows(_788).length==0){
this.renderEmptyRow(_788);
}
},renderEmptyRow:function(_78b){
var dc=$.data(_78b,"datagrid").dc;
dc.body2.html(this.renderTable(_78b,0,[{}],false));
dc.body2.find(".datagrid-row").removeClass("datagrid-row").removeAttr("datagrid-row-index");
dc.body2.find("tbody *").css({height:1,borderColor:"transparent",background:"transparent"});
}};
$.fn.datagrid.defaults=$.extend({},$.fn.panel.defaults,{sharedStyleSheet:false,frozenColumns:undefined,columns:undefined,fitColumns:false,resizeHandle:"right",autoRowHeight:true,toolbar:null,striped:false,method:"post",nowrap:true,idField:null,url:null,data:null,loadMsg:"Processing, please wait ...",rownumbers:false,singleSelect:false,ctrlSelect:false,selectOnCheck:true,checkOnSelect:true,pagination:false,pagePosition:"bottom",pageNumber:1,pageSize:10,pageList:[10,20,30,40,50],queryParams:{},sortName:null,sortOrder:"asc",multiSort:false,remoteSort:true,showHeader:true,showFooter:false,scrollbarSize:18,rowEvents:{mouseover:_5ed(true),mouseout:_5ed(false),click:_5f5,dblclick:_5ff,contextmenu:_603},rowStyler:function(_78c,_78d){
},loader:function(_78e,_78f,_790){
var opts=$(this).datagrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_78e,dataType:"json",success:function(data){
_78f(data);
},error:function(){
_790.apply(this,arguments);
}});
},loadFilter:function(data){
if(typeof data.length=="number"&&typeof data.splice=="function"){
return {total:data.length,rows:data};
}else{
return data;
}
},editors:_6fc,finder:{getTr:function(_791,_792,type,_793){
type=type||"body";
_793=_793||0;
var _794=$.data(_791,"datagrid");
var dc=_794.dc;
var opts=_794.options;
if(_793==0){
var tr1=opts.finder.getTr(_791,_792,type,1);
var tr2=opts.finder.getTr(_791,_792,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+_794.rowIdPrefix+"-"+_793+"-"+_792);
if(!tr.length){
tr=(_793==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index="+_792+"]");
}
return tr;
}else{
if(type=="footer"){
return (_793==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index="+_792+"]");
}else{
if(type=="selected"){
return (_793==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-selected");
}else{
if(type=="highlight"){
return (_793==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-over");
}else{
if(type=="checked"){
return (_793==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-checked");
}else{
if(type=="editing"){
return (_793==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-editing");
}else{
if(type=="last"){
return (_793==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]:last");
}else{
if(type=="allbody"){
return (_793==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]");
}else{
if(type=="allfooter"){
return (_793==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index]");
}
}
}
}
}
}
}
}
}
}
},getRow:function(_795,p){
var _796=(typeof p=="object")?p.attr("datagrid-row-index"):p;
return $.data(_795,"datagrid").data.rows[parseInt(_796)];
},getRows:function(_797){
return $(_797).datagrid("getRows");
}},view:_745,onBeforeLoad:function(_798){
},onLoadSuccess:function(){
},onLoadError:function(){
},onClickRow:function(_799,_79a){
},onDblClickRow:function(_79b,_79c){
},onClickCell:function(_79d,_79e,_79f){
},onDblClickCell:function(_7a0,_7a1,_7a2){
},onBeforeSortColumn:function(sort,_7a3){
},onSortColumn:function(sort,_7a4){
},onResizeColumn:function(_7a5,_7a6){
},onBeforeSelect:function(_7a7,_7a8){
},onSelect:function(_7a9,_7aa){
},onBeforeUnselect:function(_7ab,_7ac){
},onUnselect:function(_7ad,_7ae){
},onSelectAll:function(rows){
},onUnselectAll:function(rows){
},onBeforeCheck:function(_7af,_7b0){
},onCheck:function(_7b1,_7b2){
},onBeforeUncheck:function(_7b3,_7b4){
},onUncheck:function(_7b5,_7b6){
},onCheckAll:function(rows){
},onUncheckAll:function(rows){
},onBeforeEdit:function(_7b7,_7b8){
},onBeginEdit:function(_7b9,_7ba){
},onEndEdit:function(_7bb,_7bc,_7bd){
},onAfterEdit:function(_7be,_7bf,_7c0){
},onCancelEdit:function(_7c1,_7c2){
},onHeaderContextMenu:function(e,_7c3){
},onRowContextMenu:function(e,_7c4,_7c5){
}});
})(jQuery);
(function($){
var _7c6;
$(document).unbind(".propertygrid").bind("mousedown.propertygrid",function(e){
var p=$(e.target).closest("div.datagrid-view,div.combo-panel");
if(p.length){
return;
}
_7c7(_7c6);
_7c6=undefined;
});
function _7c8(_7c9){
var _7ca=$.data(_7c9,"propertygrid");
var opts=$.data(_7c9,"propertygrid").options;
$(_7c9).datagrid($.extend({},opts,{cls:"propertygrid",view:(opts.showGroup?opts.groupView:opts.view),onBeforeEdit:function(_7cb,row){
if(opts.onBeforeEdit.call(_7c9,_7cb,row)==false){
return false;
}
var dg=$(this);
var row=dg.datagrid("getRows")[_7cb];
var col=dg.datagrid("getColumnOption","value");
col.editor=row.editor;
},onClickCell:function(_7cc,_7cd,_7ce){
if(_7c6!=this){
_7c7(_7c6);
_7c6=this;
}
if(opts.editIndex!=_7cc){
_7c7(_7c6);
$(this).datagrid("beginEdit",_7cc);
var ed=$(this).datagrid("getEditor",{index:_7cc,field:_7cd});
if(!ed){
ed=$(this).datagrid("getEditor",{index:_7cc,field:"value"});
}
if(ed){
var t=$(ed.target);
var _7cf=t.data("textbox")?t.textbox("textbox"):t;
_7cf.focus();
opts.editIndex=_7cc;
}
}
opts.onClickCell.call(_7c9,_7cc,_7cd,_7ce);
},loadFilter:function(data){
_7c7(this);
return opts.loadFilter.call(this,data);
}}));
};
function _7c7(_7d0){
var t=$(_7d0);
if(!t.length){
return;
}
var opts=$.data(_7d0,"propertygrid").options;
opts.finder.getTr(_7d0,null,"editing").each(function(){
var _7d1=parseInt($(this).attr("datagrid-row-index"));
if(t.datagrid("validateRow",_7d1)){
t.datagrid("endEdit",_7d1);
}else{
t.datagrid("cancelEdit",_7d1);
}
});
opts.editIndex=undefined;
};
$.fn.propertygrid=function(_7d2,_7d3){
if(typeof _7d2=="string"){
var _7d4=$.fn.propertygrid.methods[_7d2];
if(_7d4){
return _7d4(this,_7d3);
}else{
return this.datagrid(_7d2,_7d3);
}
}
_7d2=_7d2||{};
return this.each(function(){
var _7d5=$.data(this,"propertygrid");
if(_7d5){
$.extend(_7d5.options,_7d2);
}else{
var opts=$.extend({},$.fn.propertygrid.defaults,$.fn.propertygrid.parseOptions(this),_7d2);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.columns=$.extend(true,[],opts.columns);
$.data(this,"propertygrid",{options:opts});
}
_7c8(this);
});
};
$.fn.propertygrid.methods={options:function(jq){
return $.data(jq[0],"propertygrid").options;
}};
$.fn.propertygrid.parseOptions=function(_7d6){
return $.extend({},$.fn.datagrid.parseOptions(_7d6),$.parser.parseOptions(_7d6,[{showGroup:"boolean"}]));
};
var _7d7=$.extend({},$.fn.datagrid.defaults.view,{render:function(_7d8,_7d9,_7da){
var _7db=[];
var _7dc=this.groups;
for(var i=0;i<_7dc.length;i++){
_7db.push(this.renderGroup.call(this,_7d8,i,_7dc[i],_7da));
}
$(_7d9).html(_7db.join(""));
},renderGroup:function(_7dd,_7de,_7df,_7e0){
var _7e1=$.data(_7dd,"datagrid");
var opts=_7e1.options;
var _7e2=$(_7dd).datagrid("getColumnFields",_7e0);
var _7e3=[];
_7e3.push("<div class=\"datagrid-group\" group-index="+_7de+">");
_7e3.push("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"height:100%\"><tbody>");
_7e3.push("<tr>");
if((_7e0&&(opts.rownumbers||opts.frozenColumns.length))||(!_7e0&&!(opts.rownumbers||opts.frozenColumns.length))){
_7e3.push("<td style=\"border:0;text-align:center;width:25px\"><span class=\"datagrid-row-expander datagrid-row-collapse\" style=\"display:inline-block;width:16px;height:16px;cursor:pointer\">&nbsp;</span></td>");
}
_7e3.push("<td style=\"border:0;\">");
if(!_7e0){
_7e3.push("<span class=\"datagrid-group-title\">");
_7e3.push(opts.groupFormatter.call(_7dd,_7df.value,_7df.rows));
_7e3.push("</span>");
}
_7e3.push("</td>");
_7e3.push("</tr>");
_7e3.push("</tbody></table>");
_7e3.push("</div>");
_7e3.push("<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>");
var _7e4=_7df.startIndex;
for(var j=0;j<_7df.rows.length;j++){
var css=opts.rowStyler?opts.rowStyler.call(_7dd,_7e4,_7df.rows[j]):"";
var _7e5="";
var _7e6="";
if(typeof css=="string"){
_7e6=css;
}else{
if(css){
_7e5=css["class"]||"";
_7e6=css["style"]||"";
}
}
var cls="class=\"datagrid-row "+(_7e4%2&&opts.striped?"datagrid-row-alt ":" ")+_7e5+"\"";
var _7e7=_7e6?"style=\""+_7e6+"\"":"";
var _7e8=_7e1.rowIdPrefix+"-"+(_7e0?1:2)+"-"+_7e4;
_7e3.push("<tr id=\""+_7e8+"\" datagrid-row-index=\""+_7e4+"\" "+cls+" "+_7e7+">");
_7e3.push(this.renderRow.call(this,_7dd,_7e2,_7e0,_7e4,_7df.rows[j]));
_7e3.push("</tr>");
_7e4++;
}
_7e3.push("</tbody></table>");
return _7e3.join("");
},bindEvents:function(_7e9){
var _7ea=$.data(_7e9,"datagrid");
var dc=_7ea.dc;
var body=dc.body1.add(dc.body2);
var _7eb=($.data(body[0],"events")||$._data(body[0],"events")).click[0].handler;
body.unbind("click").bind("click",function(e){
var tt=$(e.target);
var _7ec=tt.closest("span.datagrid-row-expander");
if(_7ec.length){
var _7ed=_7ec.closest("div.datagrid-group").attr("group-index");
if(_7ec.hasClass("datagrid-row-collapse")){
$(_7e9).datagrid("collapseGroup",_7ed);
}else{
$(_7e9).datagrid("expandGroup",_7ed);
}
}else{
_7eb(e);
}
e.stopPropagation();
});
},onBeforeRender:function(_7ee,rows){
var _7ef=$.data(_7ee,"datagrid");
var opts=_7ef.options;
_7f0();
var _7f1=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _7f2=_7f3(row[opts.groupField]);
if(!_7f2){
_7f2={value:row[opts.groupField],rows:[row]};
_7f1.push(_7f2);
}else{
_7f2.rows.push(row);
}
}
var _7f4=0;
var _7f5=[];
for(var i=0;i<_7f1.length;i++){
var _7f2=_7f1[i];
_7f2.startIndex=_7f4;
_7f4+=_7f2.rows.length;
_7f5=_7f5.concat(_7f2.rows);
}
_7ef.data.rows=_7f5;
this.groups=_7f1;
var that=this;
setTimeout(function(){
that.bindEvents(_7ee);
},0);
function _7f3(_7f6){
for(var i=0;i<_7f1.length;i++){
var _7f7=_7f1[i];
if(_7f7.value==_7f6){
return _7f7;
}
}
return null;
};
function _7f0(){
if(!$("#datagrid-group-style").length){
$("head").append("<style id=\"datagrid-group-style\">"+".datagrid-group{height:25px;overflow:hidden;font-weight:bold;border-bottom:1px solid #ccc;}"+"</style>");
}
};
}});
$.extend($.fn.datagrid.methods,{expandGroup:function(jq,_7f8){
return jq.each(function(){
var view=$.data(this,"datagrid").dc.view;
var _7f9=view.find(_7f8!=undefined?"div.datagrid-group[group-index=\""+_7f8+"\"]":"div.datagrid-group");
var _7fa=_7f9.find("span.datagrid-row-expander");
if(_7fa.hasClass("datagrid-row-expand")){
_7fa.removeClass("datagrid-row-expand").addClass("datagrid-row-collapse");
_7f9.next("table").show();
}
$(this).datagrid("fixRowHeight");
});
},collapseGroup:function(jq,_7fb){
return jq.each(function(){
var view=$.data(this,"datagrid").dc.view;
var _7fc=view.find(_7fb!=undefined?"div.datagrid-group[group-index=\""+_7fb+"\"]":"div.datagrid-group");
var _7fd=_7fc.find("span.datagrid-row-expander");
if(_7fd.hasClass("datagrid-row-collapse")){
_7fd.removeClass("datagrid-row-collapse").addClass("datagrid-row-expand");
_7fc.next("table").hide();
}
$(this).datagrid("fixRowHeight");
});
}});
$.extend(_7d7,{refreshGroupTitle:function(_7fe,_7ff){
var _800=$.data(_7fe,"datagrid");
var opts=_800.options;
var dc=_800.dc;
var _801=this.groups[_7ff];
var span=dc.body2.children("div.datagrid-group[group-index="+_7ff+"]").find("span.datagrid-group-title");
span.html(opts.groupFormatter.call(_7fe,_801.value,_801.rows));
},insertRow:function(_802,_803,row){
var _804=$.data(_802,"datagrid");
var opts=_804.options;
var dc=_804.dc;
var _805=null;
var _806;
for(var i=0;i<this.groups.length;i++){
if(this.groups[i].value==row[opts.groupField]){
_805=this.groups[i];
_806=i;
break;
}
}
if(_805){
if(_803==undefined||_803==null){
_803=_804.data.rows.length;
}
if(_803<_805.startIndex){
_803=_805.startIndex;
}else{
if(_803>_805.startIndex+_805.rows.length){
_803=_805.startIndex+_805.rows.length;
}
}
$.fn.datagrid.defaults.view.insertRow.call(this,_802,_803,row);
if(_803>=_805.startIndex+_805.rows.length){
_807(_803,true);
_807(_803,false);
}
_805.rows.splice(_803-_805.startIndex,0,row);
}else{
_805={value:row[opts.groupField],rows:[row],startIndex:_804.data.rows.length};
_806=this.groups.length;
dc.body1.append(this.renderGroup.call(this,_802,_806,_805,true));
dc.body2.append(this.renderGroup.call(this,_802,_806,_805,false));
this.groups.push(_805);
_804.data.rows.push(row);
}
this.refreshGroupTitle(_802,_806);
function _807(_808,_809){
var _80a=_809?1:2;
var _80b=opts.finder.getTr(_802,_808-1,"body",_80a);
var tr=opts.finder.getTr(_802,_808,"body",_80a);
tr.insertAfter(_80b);
};
},updateRow:function(_80c,_80d,row){
var opts=$.data(_80c,"datagrid").options;
$.fn.datagrid.defaults.view.updateRow.call(this,_80c,_80d,row);
var tb=opts.finder.getTr(_80c,_80d,"body",2).closest("table.datagrid-btable");
var _80e=parseInt(tb.prev().attr("group-index"));
this.refreshGroupTitle(_80c,_80e);
},deleteRow:function(_80f,_810){
var _811=$.data(_80f,"datagrid");
var opts=_811.options;
var dc=_811.dc;
var body=dc.body1.add(dc.body2);
var tb=opts.finder.getTr(_80f,_810,"body",2).closest("table.datagrid-btable");
var _812=parseInt(tb.prev().attr("group-index"));
$.fn.datagrid.defaults.view.deleteRow.call(this,_80f,_810);
var _813=this.groups[_812];
if(_813.rows.length>1){
_813.rows.splice(_810-_813.startIndex,1);
this.refreshGroupTitle(_80f,_812);
}else{
body.children("div.datagrid-group[group-index="+_812+"]").remove();
for(var i=_812+1;i<this.groups.length;i++){
body.children("div.datagrid-group[group-index="+i+"]").attr("group-index",i-1);
}
this.groups.splice(_812,1);
}
var _810=0;
for(var i=0;i<this.groups.length;i++){
var _813=this.groups[i];
_813.startIndex=_810;
_810+=_813.rows.length;
}
}});
$.fn.propertygrid.defaults=$.extend({},$.fn.datagrid.defaults,{singleSelect:true,remoteSort:false,fitColumns:true,loadMsg:"",frozenColumns:[[{field:"f",width:16,resizable:false}]],columns:[[{field:"name",title:"Name",width:100,sortable:true},{field:"value",title:"Value",width:100,resizable:false}]],showGroup:false,groupView:_7d7,groupField:"group",groupFormatter:function(_814,rows){
return _814;
}});
})(jQuery);
(function($){
function _815(_816){
var _817=$.data(_816,"treegrid");
var opts=_817.options;
$(_816).datagrid($.extend({},opts,{url:null,data:null,loader:function(){
return false;
},onBeforeLoad:function(){
return false;
},onLoadSuccess:function(){
},onResizeColumn:function(_818,_819){
_826(_816);
opts.onResizeColumn.call(_816,_818,_819);
},onBeforeSortColumn:function(sort,_81a){
if(opts.onBeforeSortColumn.call(_816,sort,_81a)==false){
return false;
}
},onSortColumn:function(sort,_81b){
opts.sortName=sort;
opts.sortOrder=_81b;
if(opts.remoteSort){
_825(_816);
}else{
var data=$(_816).treegrid("getData");
_83c(_816,0,data);
}
opts.onSortColumn.call(_816,sort,_81b);
},onClickCell:function(_81c,_81d){
opts.onClickCell.call(_816,_81d,find(_816,_81c));
},onDblClickCell:function(_81e,_81f){
opts.onDblClickCell.call(_816,_81f,find(_816,_81e));
},onRowContextMenu:function(e,_820){
opts.onContextMenu.call(_816,e,find(_816,_820));
}}));
var _821=$.data(_816,"datagrid").options;
opts.columns=_821.columns;
opts.frozenColumns=_821.frozenColumns;
_817.dc=$.data(_816,"datagrid").dc;
if(opts.pagination){
var _822=$(_816).datagrid("getPager");
_822.pagination({pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_823,_824){
opts.pageNumber=_823;
opts.pageSize=_824;
_825(_816);
}});
opts.pageSize=_822.pagination("options").pageSize;
}
};
function _826(_827,_828){
var opts=$.data(_827,"datagrid").options;
var dc=$.data(_827,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight)){
if(_828!=undefined){
var _829=_82a(_827,_828);
for(var i=0;i<_829.length;i++){
_82b(_829[i][opts.idField]);
}
}
}
$(_827).datagrid("fixRowHeight",_828);
function _82b(_82c){
var tr1=opts.finder.getTr(_827,_82c,"body",1);
var tr2=opts.finder.getTr(_827,_82c,"body",2);
tr1.css("height","");
tr2.css("height","");
var _82d=Math.max(tr1.height(),tr2.height());
tr1.css("height",_82d);
tr2.css("height",_82d);
};
};
function _82e(_82f){
var dc=$.data(_82f,"datagrid").dc;
var opts=$.data(_82f,"treegrid").options;
if(!opts.rownumbers){
return;
}
dc.body1.find("div.datagrid-cell-rownumber").each(function(i){
$(this).html(i+1);
});
};
function _830(_831){
return function(e){
$.fn.datagrid.defaults.rowEvents[_831?"mouseover":"mouseout"](e);
var tt=$(e.target);
var fn=_831?"addClass":"removeClass";
if(tt.hasClass("tree-hit")){
tt.hasClass("tree-expanded")?tt[fn]("tree-expanded-hover"):tt[fn]("tree-collapsed-hover");
}
};
};
function _832(e){
var tt=$(e.target);
if(tt.hasClass("tree-hit")){
var tr=tt.closest("tr.datagrid-row");
var _833=tr.closest("div.datagrid-view").children(".datagrid-f")[0];
_834(_833,tr.attr("node-id"));
}else{
$.fn.datagrid.defaults.rowEvents.click(e);
}
};
function _835(_836,_837){
var opts=$.data(_836,"treegrid").options;
var tr1=opts.finder.getTr(_836,_837,"body",1);
var tr2=opts.finder.getTr(_836,_837,"body",2);
var _838=$(_836).datagrid("getColumnFields",true).length+(opts.rownumbers?1:0);
var _839=$(_836).datagrid("getColumnFields",false).length;
_83a(tr1,_838);
_83a(tr2,_839);
function _83a(tr,_83b){
$("<tr class=\"treegrid-tr-tree\">"+"<td style=\"border:0px\" colspan=\""+_83b+"\">"+"<div></div>"+"</td>"+"</tr>").insertAfter(tr);
};
};
function _83c(_83d,_83e,data,_83f){
var _840=$.data(_83d,"treegrid");
var opts=_840.options;
var dc=_840.dc;
data=opts.loadFilter.call(_83d,data,_83e);
var node=find(_83d,_83e);
if(node){
var _841=opts.finder.getTr(_83d,_83e,"body",1);
var _842=opts.finder.getTr(_83d,_83e,"body",2);
var cc1=_841.next("tr.treegrid-tr-tree").children("td").children("div");
var cc2=_842.next("tr.treegrid-tr-tree").children("td").children("div");
if(!_83f){
node.children=[];
}
}else{
var cc1=dc.body1;
var cc2=dc.body2;
if(!_83f){
_840.data=[];
}
}
if(!_83f){
cc1.empty();
cc2.empty();
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_83d,_83e,data);
}
opts.view.render.call(opts.view,_83d,cc1,true);
opts.view.render.call(opts.view,_83d,cc2,false);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_83d,dc.footer1,true);
opts.view.renderFooter.call(opts.view,_83d,dc.footer2,false);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_83d);
}
if(!_83e&&opts.pagination){
var _843=$.data(_83d,"treegrid").total;
var _844=$(_83d).datagrid("getPager");
if(_844.pagination("options").total!=_843){
_844.pagination({total:_843});
}
}
_826(_83d);
_82e(_83d);
$(_83d).treegrid("showLines");
$(_83d).treegrid("setSelectionState");
$(_83d).treegrid("autoSizeColumn");
opts.onLoadSuccess.call(_83d,node,data);
};
function _825(_845,_846,_847,_848,_849){
var opts=$.data(_845,"treegrid").options;
var body=$(_845).datagrid("getPanel").find("div.datagrid-body");
if(_847){
opts.queryParams=_847;
}
var _84a=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_84a,{page:opts.pageNumber,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_84a,{sort:opts.sortName,order:opts.sortOrder});
}
var row=find(_845,_846);
if(opts.onBeforeLoad.call(_845,row,_84a)==false){
return;
}
var _84b=body.find("tr[node-id=\""+_846+"\"] span.tree-folder");
_84b.addClass("tree-loading");
$(_845).treegrid("loading");
var _84c=opts.loader.call(_845,_84a,function(data){
_84b.removeClass("tree-loading");
$(_845).treegrid("loaded");
_83c(_845,_846,data,_848);
if(_849){
_849();
}
},function(){
_84b.removeClass("tree-loading");
$(_845).treegrid("loaded");
opts.onLoadError.apply(_845,arguments);
if(_849){
_849();
}
});
if(_84c==false){
_84b.removeClass("tree-loading");
$(_845).treegrid("loaded");
}
};
function _84d(_84e){
var rows=_84f(_84e);
if(rows.length){
return rows[0];
}else{
return null;
}
};
function _84f(_850){
return $.data(_850,"treegrid").data;
};
function _851(_852,_853){
var row=find(_852,_853);
if(row._parentId){
return find(_852,row._parentId);
}else{
return null;
}
};
function _82a(_854,_855){
var opts=$.data(_854,"treegrid").options;
var body=$(_854).datagrid("getPanel").find("div.datagrid-view2 div.datagrid-body");
var _856=[];
if(_855){
_857(_855);
}else{
var _858=_84f(_854);
for(var i=0;i<_858.length;i++){
_856.push(_858[i]);
_857(_858[i][opts.idField]);
}
}
function _857(_859){
var _85a=find(_854,_859);
if(_85a&&_85a.children){
for(var i=0,len=_85a.children.length;i<len;i++){
var _85b=_85a.children[i];
_856.push(_85b);
_857(_85b[opts.idField]);
}
}
};
return _856;
};
function _85c(_85d,_85e){
if(!_85e){
return 0;
}
var opts=$.data(_85d,"treegrid").options;
var view=$(_85d).datagrid("getPanel").children("div.datagrid-view");
var node=view.find("div.datagrid-body tr[node-id=\""+_85e+"\"]").children("td[field=\""+opts.treeField+"\"]");
return node.find("span.tree-indent,span.tree-hit").length;
};
function find(_85f,_860){
var opts=$.data(_85f,"treegrid").options;
var data=$.data(_85f,"treegrid").data;
var cc=[data];
while(cc.length){
var c=cc.shift();
for(var i=0;i<c.length;i++){
var node=c[i];
if(node[opts.idField]==_860){
return node;
}else{
if(node["children"]){
cc.push(node["children"]);
}
}
}
}
return null;
};
function _861(_862,_863){
var opts=$.data(_862,"treegrid").options;
var row=find(_862,_863);
var tr=opts.finder.getTr(_862,_863);
var hit=tr.find("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
if(opts.onBeforeCollapse.call(_862,row)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
row.state="closed";
tr=tr.next("tr.treegrid-tr-tree");
var cc=tr.children("td").children("div");
if(opts.animate){
cc.slideUp("normal",function(){
$(_862).treegrid("autoSizeColumn");
_826(_862,_863);
opts.onCollapse.call(_862,row);
});
}else{
cc.hide();
$(_862).treegrid("autoSizeColumn");
_826(_862,_863);
opts.onCollapse.call(_862,row);
}
};
function _864(_865,_866){
var opts=$.data(_865,"treegrid").options;
var tr=opts.finder.getTr(_865,_866);
var hit=tr.find("span.tree-hit");
var row=find(_865,_866);
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
if(opts.onBeforeExpand.call(_865,row)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var _867=tr.next("tr.treegrid-tr-tree");
if(_867.length){
var cc=_867.children("td").children("div");
_868(cc);
}else{
_835(_865,row[opts.idField]);
var _867=tr.next("tr.treegrid-tr-tree");
var cc=_867.children("td").children("div");
cc.hide();
var _869=$.extend({},opts.queryParams||{});
_869.id=row[opts.idField];
_825(_865,row[opts.idField],_869,true,function(){
if(cc.is(":empty")){
_867.remove();
}else{
_868(cc);
}
});
}
function _868(cc){
row.state="open";
if(opts.animate){
cc.slideDown("normal",function(){
$(_865).treegrid("autoSizeColumn");
_826(_865,_866);
opts.onExpand.call(_865,row);
});
}else{
cc.show();
$(_865).treegrid("autoSizeColumn");
_826(_865,_866);
opts.onExpand.call(_865,row);
}
};
};
function _834(_86a,_86b){
var opts=$.data(_86a,"treegrid").options;
var tr=opts.finder.getTr(_86a,_86b);
var hit=tr.find("span.tree-hit");
if(hit.hasClass("tree-expanded")){
_861(_86a,_86b);
}else{
_864(_86a,_86b);
}
};
function _86c(_86d,_86e){
var opts=$.data(_86d,"treegrid").options;
var _86f=_82a(_86d,_86e);
if(_86e){
_86f.unshift(find(_86d,_86e));
}
for(var i=0;i<_86f.length;i++){
_861(_86d,_86f[i][opts.idField]);
}
};
function _870(_871,_872){
var opts=$.data(_871,"treegrid").options;
var _873=_82a(_871,_872);
if(_872){
_873.unshift(find(_871,_872));
}
for(var i=0;i<_873.length;i++){
_864(_871,_873[i][opts.idField]);
}
};
function _874(_875,_876){
var opts=$.data(_875,"treegrid").options;
var ids=[];
var p=_851(_875,_876);
while(p){
var id=p[opts.idField];
ids.unshift(id);
p=_851(_875,id);
}
for(var i=0;i<ids.length;i++){
_864(_875,ids[i]);
}
};
function _877(_878,_879){
var opts=$.data(_878,"treegrid").options;
if(_879.parent){
var tr=opts.finder.getTr(_878,_879.parent);
if(tr.next("tr.treegrid-tr-tree").length==0){
_835(_878,_879.parent);
}
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
var _87a=cell.children("span.tree-icon");
if(_87a.hasClass("tree-file")){
_87a.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_87a);
if(hit.prev().length){
hit.prev().remove();
}
}
}
_83c(_878,_879.parent,_879.data,true);
};
function _87b(_87c,_87d){
var ref=_87d.before||_87d.after;
var opts=$.data(_87c,"treegrid").options;
var _87e=_851(_87c,ref);
_877(_87c,{parent:(_87e?_87e[opts.idField]:null),data:[_87d.data]});
var _87f=_87e?_87e.children:$(_87c).treegrid("getRoots");
for(var i=0;i<_87f.length;i++){
if(_87f[i][opts.idField]==ref){
var _880=_87f[_87f.length-1];
_87f.splice(_87d.before?i:(i+1),0,_880);
_87f.splice(_87f.length-1,1);
break;
}
}
_881(true);
_881(false);
_82e(_87c);
$(_87c).treegrid("showLines");
function _881(_882){
var _883=_882?1:2;
var tr=opts.finder.getTr(_87c,_87d.data[opts.idField],"body",_883);
var _884=tr.closest("table.datagrid-btable");
tr=tr.parent().children();
var dest=opts.finder.getTr(_87c,ref,"body",_883);
if(_87d.before){
tr.insertBefore(dest);
}else{
var sub=dest.next("tr.treegrid-tr-tree");
tr.insertAfter(sub.length?sub:dest);
}
_884.remove();
};
};
function _885(_886,_887){
var _888=$.data(_886,"treegrid");
$(_886).datagrid("deleteRow",_887);
_82e(_886);
_888.total-=1;
$(_886).datagrid("getPager").pagination("refresh",{total:_888.total});
$(_886).treegrid("showLines");
};
function _889(_88a){
var t=$(_88a);
var opts=t.treegrid("options");
if(opts.lines){
t.treegrid("getPanel").addClass("tree-lines");
}else{
t.treegrid("getPanel").removeClass("tree-lines");
return;
}
t.treegrid("getPanel").find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
t.treegrid("getPanel").find("div.datagrid-cell").removeClass("tree-node-last tree-root-first tree-root-one");
var _88b=t.treegrid("getRoots");
if(_88b.length>1){
_88c(_88b[0]).addClass("tree-root-first");
}else{
if(_88b.length==1){
_88c(_88b[0]).addClass("tree-root-one");
}
}
_88d(_88b);
_88e(_88b);
function _88d(_88f){
$.map(_88f,function(node){
if(node.children&&node.children.length){
_88d(node.children);
}else{
var cell=_88c(node);
cell.find(".tree-icon").prev().addClass("tree-join");
}
});
if(_88f.length){
var cell=_88c(_88f[_88f.length-1]);
cell.addClass("tree-node-last");
cell.find(".tree-join").removeClass("tree-join").addClass("tree-joinbottom");
}
};
function _88e(_890){
$.map(_890,function(node){
if(node.children&&node.children.length){
_88e(node.children);
}
});
for(var i=0;i<_890.length-1;i++){
var node=_890[i];
var _891=t.treegrid("getLevel",node[opts.idField]);
var tr=opts.finder.getTr(_88a,node[opts.idField]);
var cc=tr.next().find("tr.datagrid-row td[field=\""+opts.treeField+"\"] div.datagrid-cell");
cc.find("span:eq("+(_891-1)+")").addClass("tree-line");
}
};
function _88c(node){
var tr=opts.finder.getTr(_88a,node[opts.idField]);
var cell=tr.find("td[field=\""+opts.treeField+"\"] div.datagrid-cell");
return cell;
};
};
$.fn.treegrid=function(_892,_893){
if(typeof _892=="string"){
var _894=$.fn.treegrid.methods[_892];
if(_894){
return _894(this,_893);
}else{
return this.datagrid(_892,_893);
}
}
_892=_892||{};
return this.each(function(){
var _895=$.data(this,"treegrid");
if(_895){
$.extend(_895.options,_892);
}else{
_895=$.data(this,"treegrid",{options:$.extend({},$.fn.treegrid.defaults,$.fn.treegrid.parseOptions(this),_892),data:[]});
}
_815(this);
if(_895.options.data){
$(this).treegrid("loadData",_895.options.data);
}
_825(this);
});
};
$.fn.treegrid.methods={options:function(jq){
return $.data(jq[0],"treegrid").options;
},resize:function(jq,_896){
return jq.each(function(){
$(this).datagrid("resize",_896);
});
},fixRowHeight:function(jq,_897){
return jq.each(function(){
_826(this,_897);
});
},loadData:function(jq,data){
return jq.each(function(){
_83c(this,data.parent,data);
});
},load:function(jq,_898){
return jq.each(function(){
$(this).treegrid("options").pageNumber=1;
$(this).treegrid("getPager").pagination({pageNumber:1});
$(this).treegrid("reload",_898);
});
},reload:function(jq,id){
return jq.each(function(){
var opts=$(this).treegrid("options");
var _899={};
if(typeof id=="object"){
_899=id;
}else{
_899=$.extend({},opts.queryParams);
_899.id=id;
}
if(_899.id){
var node=$(this).treegrid("find",_899.id);
if(node.children){
node.children.splice(0,node.children.length);
}
opts.queryParams=_899;
var tr=opts.finder.getTr(this,_899.id);
tr.next("tr.treegrid-tr-tree").remove();
tr.find("span.tree-hit").removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
_864(this,_899.id);
}else{
_825(this,null,_899);
}
});
},reloadFooter:function(jq,_89a){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
var dc=$.data(this,"datagrid").dc;
if(_89a){
$.data(this,"treegrid").footer=_89a;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).treegrid("fixRowHeight");
}
});
},getData:function(jq){
return $.data(jq[0],"treegrid").data;
},getFooterRows:function(jq){
return $.data(jq[0],"treegrid").footer;
},getRoot:function(jq){
return _84d(jq[0]);
},getRoots:function(jq){
return _84f(jq[0]);
},getParent:function(jq,id){
return _851(jq[0],id);
},getChildren:function(jq,id){
return _82a(jq[0],id);
},getLevel:function(jq,id){
return _85c(jq[0],id);
},find:function(jq,id){
return find(jq[0],id);
},isLeaf:function(jq,id){
var opts=$.data(jq[0],"treegrid").options;
var tr=opts.finder.getTr(jq[0],id);
var hit=tr.find("span.tree-hit");
return hit.length==0;
},select:function(jq,id){
return jq.each(function(){
$(this).datagrid("selectRow",id);
});
},unselect:function(jq,id){
return jq.each(function(){
$(this).datagrid("unselectRow",id);
});
},collapse:function(jq,id){
return jq.each(function(){
_861(this,id);
});
},expand:function(jq,id){
return jq.each(function(){
_864(this,id);
});
},toggle:function(jq,id){
return jq.each(function(){
_834(this,id);
});
},collapseAll:function(jq,id){
return jq.each(function(){
_86c(this,id);
});
},expandAll:function(jq,id){
return jq.each(function(){
_870(this,id);
});
},expandTo:function(jq,id){
return jq.each(function(){
_874(this,id);
});
},append:function(jq,_89b){
return jq.each(function(){
_877(this,_89b);
});
},insert:function(jq,_89c){
return jq.each(function(){
_87b(this,_89c);
});
},remove:function(jq,id){
return jq.each(function(){
_885(this,id);
});
},pop:function(jq,id){
var row=jq.treegrid("find",id);
jq.treegrid("remove",id);
return row;
},refresh:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
opts.view.refreshRow.call(opts.view,this,id);
});
},update:function(jq,_89d){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
opts.view.updateRow.call(opts.view,this,_89d.id,_89d.row);
});
},beginEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("beginEdit",id);
$(this).treegrid("fixRowHeight",id);
});
},endEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("endEdit",id);
});
},cancelEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("cancelEdit",id);
});
},showLines:function(jq){
return jq.each(function(){
_889(this);
});
}};
$.fn.treegrid.parseOptions=function(_89e){
return $.extend({},$.fn.datagrid.parseOptions(_89e),$.parser.parseOptions(_89e,["treeField",{animate:"boolean"}]));
};
var _89f=$.extend({},$.fn.datagrid.defaults.view,{render:function(_8a0,_8a1,_8a2){
var opts=$.data(_8a0,"treegrid").options;
var _8a3=$(_8a0).datagrid("getColumnFields",_8a2);
var _8a4=$.data(_8a0,"datagrid").rowIdPrefix;
if(_8a2){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return;
}
}
var view=this;
if(this.treeNodes&&this.treeNodes.length){
var _8a5=_8a6(_8a2,this.treeLevel,this.treeNodes);
$(_8a1).append(_8a5.join(""));
}
function _8a6(_8a7,_8a8,_8a9){
var _8aa=$(_8a0).treegrid("getParent",_8a9[0][opts.idField]);
var _8ab=(_8aa?_8aa.children.length:$(_8a0).treegrid("getRoots").length)-_8a9.length;
var _8ac=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<_8a9.length;i++){
var row=_8a9[i];
if(row.state!="open"&&row.state!="closed"){
row.state="open";
}
var css=opts.rowStyler?opts.rowStyler.call(_8a0,row):"";
var _8ad="";
var _8ae="";
if(typeof css=="string"){
_8ae=css;
}else{
if(css){
_8ad=css["class"]||"";
_8ae=css["style"]||"";
}
}
var cls="class=\"datagrid-row "+(_8ab++%2&&opts.striped?"datagrid-row-alt ":" ")+_8ad+"\"";
var _8af=_8ae?"style=\""+_8ae+"\"":"";
var _8b0=_8a4+"-"+(_8a7?1:2)+"-"+row[opts.idField];
_8ac.push("<tr id=\""+_8b0+"\" node-id=\""+row[opts.idField]+"\" "+cls+" "+_8af+">");
_8ac=_8ac.concat(view.renderRow.call(view,_8a0,_8a3,_8a7,_8a8,row));
_8ac.push("</tr>");
if(row.children&&row.children.length){
var tt=_8a6(_8a7,_8a8+1,row.children);
var v=row.state=="closed"?"none":"block";
_8ac.push("<tr class=\"treegrid-tr-tree\"><td style=\"border:0px\" colspan="+(_8a3.length+(opts.rownumbers?1:0))+"><div style=\"display:"+v+"\">");
_8ac=_8ac.concat(tt);
_8ac.push("</div></td></tr>");
}
}
_8ac.push("</tbody></table>");
return _8ac;
};
},renderFooter:function(_8b1,_8b2,_8b3){
var opts=$.data(_8b1,"treegrid").options;
var rows=$.data(_8b1,"treegrid").footer||[];
var _8b4=$(_8b1).datagrid("getColumnFields",_8b3);
var _8b5=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
row[opts.idField]=row[opts.idField]||("foot-row-id"+i);
_8b5.push("<tr class=\"datagrid-row\" node-id=\""+row[opts.idField]+"\">");
_8b5.push(this.renderRow.call(this,_8b1,_8b4,_8b3,0,row));
_8b5.push("</tr>");
}
_8b5.push("</tbody></table>");
$(_8b2).html(_8b5.join(""));
},renderRow:function(_8b6,_8b7,_8b8,_8b9,row){
var opts=$.data(_8b6,"treegrid").options;
var cc=[];
if(_8b8&&opts.rownumbers){
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">0</div></td>");
}
for(var i=0;i<_8b7.length;i++){
var _8ba=_8b7[i];
var col=$(_8b6).datagrid("getColumnOption",_8ba);
if(col){
var css=col.styler?(col.styler(row[_8ba],row)||""):"";
var _8bb="";
var _8bc="";
if(typeof css=="string"){
_8bc=css;
}else{
if(cc){
_8bb=css["class"]||"";
_8bc=css["style"]||"";
}
}
var cls=_8bb?"class=\""+_8bb+"\"":"";
var _8bd=col.hidden?"style=\"display:none;"+_8bc+"\"":(_8bc?"style=\""+_8bc+"\"":"");
cc.push("<td field=\""+_8ba+"\" "+cls+" "+_8bd+">");
var _8bd="";
if(!col.checkbox){
if(col.align){
_8bd+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_8bd+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_8bd+="height:auto;";
}
}
}
cc.push("<div style=\""+_8bd+"\" ");
if(col.checkbox){
cc.push("class=\"datagrid-cell-check ");
}else{
cc.push("class=\"datagrid-cell "+col.cellClass);
}
cc.push("\">");
if(col.checkbox){
if(row.checked){
cc.push("<input type=\"checkbox\" checked=\"checked\"");
}else{
cc.push("<input type=\"checkbox\"");
}
cc.push(" name=\""+_8ba+"\" value=\""+(row[_8ba]!=undefined?row[_8ba]:"")+"\">");
}else{
var val=null;
if(col.formatter){
val=col.formatter(row[_8ba],row);
}else{
val=row[_8ba];
}
if(_8ba==opts.treeField){
for(var j=0;j<_8b9;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(row.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
if(row.children&&row.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(row.iconCls?row.iconCls:"")+"\"></span>");
}
}
cc.push("<span class=\"tree-title\">"+val+"</span>");
}else{
cc.push(val);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},refreshRow:function(_8be,id){
this.updateRow.call(this,_8be,id,{});
},updateRow:function(_8bf,id,row){
var opts=$.data(_8bf,"treegrid").options;
var _8c0=$(_8bf).treegrid("find",id);
$.extend(_8c0,row);
var _8c1=$(_8bf).treegrid("getLevel",id)-1;
var _8c2=opts.rowStyler?opts.rowStyler.call(_8bf,_8c0):"";
var _8c3=$.data(_8bf,"datagrid").rowIdPrefix;
var _8c4=_8c0[opts.idField];
function _8c5(_8c6){
var _8c7=$(_8bf).treegrid("getColumnFields",_8c6);
var tr=opts.finder.getTr(_8bf,id,"body",(_8c6?1:2));
var _8c8=tr.find("div.datagrid-cell-rownumber").html();
var _8c9=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow(_8bf,_8c7,_8c6,_8c1,_8c0));
tr.attr("style",_8c2||"");
tr.find("div.datagrid-cell-rownumber").html(_8c8);
if(_8c9){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
if(_8c4!=id){
tr.attr("id",_8c3+"-"+(_8c6?1:2)+"-"+_8c4);
tr.attr("node-id",_8c4);
}
};
_8c5.call(this,true);
_8c5.call(this,false);
$(_8bf).treegrid("fixRowHeight",id);
},deleteRow:function(_8ca,id){
var opts=$.data(_8ca,"treegrid").options;
var tr=opts.finder.getTr(_8ca,id);
tr.next("tr.treegrid-tr-tree").remove();
tr.remove();
var _8cb=del(id);
if(_8cb){
if(_8cb.children.length==0){
tr=opts.finder.getTr(_8ca,_8cb[opts.idField]);
tr.next("tr.treegrid-tr-tree").remove();
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
cell.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
cell.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(cell);
}
}
function del(id){
var cc;
var _8cc=$(_8ca).treegrid("getParent",id);
if(_8cc){
cc=_8cc.children;
}else{
cc=$(_8ca).treegrid("getData");
}
for(var i=0;i<cc.length;i++){
if(cc[i][opts.idField]==id){
cc.splice(i,1);
break;
}
}
return _8cc;
};
},onBeforeRender:function(_8cd,_8ce,data){
if($.isArray(_8ce)){
data={total:_8ce.length,rows:_8ce};
_8ce=null;
}
if(!data){
return false;
}
var _8cf=$.data(_8cd,"treegrid");
var opts=_8cf.options;
if(data.length==undefined){
if(data.footer){
_8cf.footer=data.footer;
}
if(data.total){
_8cf.total=data.total;
}
data=this.transfer(_8cd,_8ce,data.rows);
}else{
function _8d0(_8d1,_8d2){
for(var i=0;i<_8d1.length;i++){
var row=_8d1[i];
row._parentId=_8d2;
if(row.children&&row.children.length){
_8d0(row.children,row[opts.idField]);
}
}
};
_8d0(data,_8ce);
}
var node=find(_8cd,_8ce);
if(node){
if(node.children){
node.children=node.children.concat(data);
}else{
node.children=data;
}
}else{
_8cf.data=_8cf.data.concat(data);
}
this.sort(_8cd,data);
this.treeNodes=data;
this.treeLevel=$(_8cd).treegrid("getLevel",_8ce);
},sort:function(_8d3,data){
var opts=$.data(_8d3,"treegrid").options;
if(!opts.remoteSort&&opts.sortName){
var _8d4=opts.sortName.split(",");
var _8d5=opts.sortOrder.split(",");
_8d6(data);
}
function _8d6(rows){
rows.sort(function(r1,r2){
var r=0;
for(var i=0;i<_8d4.length;i++){
var sn=_8d4[i];
var so=_8d5[i];
var col=$(_8d3).treegrid("getColumnOption",sn);
var _8d7=col.sorter||function(a,b){
return a==b?0:(a>b?1:-1);
};
r=_8d7(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
for(var i=0;i<rows.length;i++){
var _8d8=rows[i].children;
if(_8d8&&_8d8.length){
_8d6(_8d8);
}
}
};
},transfer:function(_8d9,_8da,data){
var opts=$.data(_8d9,"treegrid").options;
var rows=[];
for(var i=0;i<data.length;i++){
rows.push(data[i]);
}
var _8db=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
if(!_8da){
if(!row._parentId){
_8db.push(row);
rows.splice(i,1);
i--;
}
}else{
if(row._parentId==_8da){
_8db.push(row);
rows.splice(i,1);
i--;
}
}
}
var toDo=[];
for(var i=0;i<_8db.length;i++){
toDo.push(_8db[i]);
}
while(toDo.length){
var node=toDo.shift();
for(var i=0;i<rows.length;i++){
var row=rows[i];
if(row._parentId==node[opts.idField]){
if(node.children){
node.children.push(row);
}else{
node.children=[row];
}
toDo.push(row);
rows.splice(i,1);
i--;
}
}
}
return _8db;
}});
$.fn.treegrid.defaults=$.extend({},$.fn.datagrid.defaults,{treeField:null,lines:false,animate:false,singleSelect:true,view:_89f,rowEvents:$.extend({},$.fn.datagrid.defaults.rowEvents,{mouseover:_830(true),mouseout:_830(false),click:_832}),loader:function(_8dc,_8dd,_8de){
var opts=$(this).treegrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_8dc,dataType:"json",success:function(data){
_8dd(data);
},error:function(){
_8de.apply(this,arguments);
}});
},loadFilter:function(data,_8df){
return data;
},finder:{getTr:function(_8e0,id,type,_8e1){
type=type||"body";
_8e1=_8e1||0;
var dc=$.data(_8e0,"datagrid").dc;
if(_8e1==0){
var opts=$.data(_8e0,"treegrid").options;
var tr1=opts.finder.getTr(_8e0,id,type,1);
var tr2=opts.finder.getTr(_8e0,id,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+$.data(_8e0,"datagrid").rowIdPrefix+"-"+_8e1+"-"+id);
if(!tr.length){
tr=(_8e1==1?dc.body1:dc.body2).find("tr[node-id=\""+id+"\"]");
}
return tr;
}else{
if(type=="footer"){
return (_8e1==1?dc.footer1:dc.footer2).find("tr[node-id=\""+id+"\"]");
}else{
if(type=="selected"){
return (_8e1==1?dc.body1:dc.body2).find("tr.datagrid-row-selected");
}else{
if(type=="highlight"){
return (_8e1==1?dc.body1:dc.body2).find("tr.datagrid-row-over");
}else{
if(type=="checked"){
return (_8e1==1?dc.body1:dc.body2).find("tr.datagrid-row-checked");
}else{
if(type=="last"){
return (_8e1==1?dc.body1:dc.body2).find("tr:last[node-id]");
}else{
if(type=="allbody"){
return (_8e1==1?dc.body1:dc.body2).find("tr[node-id]");
}else{
if(type=="allfooter"){
return (_8e1==1?dc.footer1:dc.footer2).find("tr[node-id]");
}
}
}
}
}
}
}
}
}
},getRow:function(_8e2,p){
var id=(typeof p=="object")?p.attr("node-id"):p;
return $(_8e2).treegrid("find",id);
},getRows:function(_8e3){
return $(_8e3).treegrid("getChildren");
}},onBeforeLoad:function(row,_8e4){
},onLoadSuccess:function(row,data){
},onLoadError:function(){
},onBeforeCollapse:function(row){
},onCollapse:function(row){
},onBeforeExpand:function(row){
},onExpand:function(row){
},onClickRow:function(row){
},onDblClickRow:function(row){
},onClickCell:function(_8e5,row){
},onDblClickCell:function(_8e6,row){
},onContextMenu:function(e,row){
},onBeforeEdit:function(row){
},onAfterEdit:function(row,_8e7){
},onCancelEdit:function(row){
}});
})(jQuery);
(function($){
function _8e8(_8e9){
var opts=$.data(_8e9,"datalist").options;
$(_8e9).datagrid($.extend({},opts,{cls:"datalist"+(opts.lines?" datalist-lines":""),frozenColumns:(opts.frozenColumns&&opts.frozenColumns.length)?opts.frozenColumns:(opts.checkbox?[[{field:"_ck",checkbox:true}]]:undefined),columns:(opts.columns&&opts.columns.length)?opts.columns:[[{field:opts.textField,width:"100%",formatter:function(_8ea,row,_8eb){
return opts.textFormatter?opts.textFormatter(_8ea,row,_8eb):_8ea;
}}]]}));
};
var _8ec=$.extend({},$.fn.datagrid.defaults.view,{render:function(_8ed,_8ee,_8ef){
var _8f0=$.data(_8ed,"datagrid");
var opts=_8f0.options;
if(opts.groupField){
var g=this.groupRows(_8ed,_8f0.data.rows);
this.groups=g.groups;
_8f0.data.rows=g.rows;
var _8f1=[];
for(var i=0;i<g.groups.length;i++){
_8f1.push(this.renderGroup.call(this,_8ed,i,g.groups[i],_8ef));
}
$(_8ee).html(_8f1.join(""));
}else{
$(_8ee).html(this.renderTable(_8ed,0,_8f0.data.rows,_8ef));
}
},renderGroup:function(_8f2,_8f3,_8f4,_8f5){
var _8f6=$.data(_8f2,"datagrid");
var opts=_8f6.options;
var _8f7=$(_8f2).datagrid("getColumnFields",_8f5);
var _8f8=[];
_8f8.push("<div class=\"datagrid-group\" group-index="+_8f3+">");
if(!_8f5){
_8f8.push("<span class=\"datagrid-group-title\">");
_8f8.push(opts.groupFormatter.call(_8f2,_8f4.value,_8f4.rows));
_8f8.push("</span>");
}
_8f8.push("</div>");
_8f8.push(this.renderTable(_8f2,_8f4.startIndex,_8f4.rows,_8f5));
return _8f8.join("");
},groupRows:function(_8f9,rows){
var _8fa=$.data(_8f9,"datagrid");
var opts=_8fa.options;
var _8fb=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _8fc=_8fd(row[opts.groupField]);
if(!_8fc){
_8fc={value:row[opts.groupField],rows:[row]};
_8fb.push(_8fc);
}else{
_8fc.rows.push(row);
}
}
var _8fe=0;
var rows=[];
for(var i=0;i<_8fb.length;i++){
var _8fc=_8fb[i];
_8fc.startIndex=_8fe;
_8fe+=_8fc.rows.length;
rows=rows.concat(_8fc.rows);
}
return {groups:_8fb,rows:rows};
function _8fd(_8ff){
for(var i=0;i<_8fb.length;i++){
var _900=_8fb[i];
if(_900.value==_8ff){
return _900;
}
}
return null;
};
}});
$.fn.datalist=function(_901,_902){
if(typeof _901=="string"){
var _903=$.fn.datalist.methods[_901];
if(_903){
return _903(this,_902);
}else{
return this.datagrid(_901,_902);
}
}
_901=_901||{};
return this.each(function(){
var _904=$.data(this,"datalist");
if(_904){
$.extend(_904.options,_901);
}else{
var opts=$.extend({},$.fn.datalist.defaults,$.fn.datalist.parseOptions(this),_901);
opts.columns=$.extend(true,[],opts.columns);
_904=$.data(this,"datalist",{options:opts});
}
_8e8(this);
if(!_904.options.data){
var data=$.fn.datalist.parseData(this);
if(data.total){
$(this).datalist("loadData",data);
}
}
});
};
$.fn.datalist.methods={options:function(jq){
return $.data(jq[0],"datalist").options;
}};
$.fn.datalist.parseOptions=function(_905){
return $.extend({},$.fn.datagrid.parseOptions(_905),$.parser.parseOptions(_905,["valueField","textField","groupField",{checkbox:"boolean",lines:"boolean"}]));
};
$.fn.datalist.parseData=function(_906){
var opts=$.data(_906,"datalist").options;
var data={total:0,rows:[]};
$(_906).children().each(function(){
var _907=$.parser.parseOptions(this,["value","group"]);
var row={};
var html=$(this).html();
row[opts.valueField]=_907.value!=undefined?_907.value:html;
row[opts.textField]=html;
if(opts.groupField){
row[opts.groupField]=_907.group;
}
data.total++;
data.rows.push(row);
});
return data;
};
$.fn.datalist.defaults=$.extend({},$.fn.datagrid.defaults,{fitColumns:true,singleSelect:true,showHeader:false,checkbox:false,lines:false,valueField:"value",textField:"text",groupField:"",view:_8ec,textFormatter:function(_908,row){
return _908;
},groupFormatter:function(_909,rows){
return _909;
}});
})(jQuery);
(function($){
$(function(){
$(document).unbind(".combo").bind("mousedown.combo mousewheel.combo",function(e){
var p=$(e.target).closest("span.combo,div.combo-p,div.menu");
if(p.length){
_90a(p);
return;
}
$("body>div.combo-p>div.combo-panel:visible").panel("close");
});
});
function _90b(_90c){
var _90d=$.data(_90c,"combo");
var opts=_90d.options;
if(!_90d.panel){
_90d.panel=$("<div class=\"combo-panel\"></div>").appendTo("body");
_90d.panel.panel({minWidth:opts.panelMinWidth,maxWidth:opts.panelMaxWidth,minHeight:opts.panelMinHeight,maxHeight:opts.panelMaxHeight,doSize:false,closed:true,cls:"combo-p",style:{position:"absolute",zIndex:10},onOpen:function(){
var _90e=$(this).panel("options").comboTarget;
var _90f=$.data(_90e,"combo");
if(_90f){
_90f.options.onShowPanel.call(_90e);
}
},onBeforeClose:function(){
_90a(this);
},onClose:function(){
var _910=$(this).panel("options").comboTarget;
var _911=$(_910).data("combo");
if(_911){
_911.options.onHidePanel.call(_910);
}
}});
}
var _912=$.extend(true,[],opts.icons);
if(opts.hasDownArrow){
_912.push({iconCls:"combo-arrow",handler:function(e){
_916(e.data.target);
}});
}
$(_90c).addClass("combo-f").textbox($.extend({},opts,{icons:_912,onChange:function(){
}}));
$(_90c).attr("comboName",$(_90c).attr("textboxName"));
_90d.combo=$(_90c).next();
_90d.combo.addClass("combo");
};
function _913(_914){
var _915=$.data(_914,"combo");
var opts=_915.options;
var p=_915.panel;
if(p.is(":visible")){
p.panel("close");
}
if(!opts.cloned){
p.panel("destroy");
}
$(_914).textbox("destroy");
};
function _916(_917){
var _918=$.data(_917,"combo").panel;
if(_918.is(":visible")){
_919(_917);
}else{
var p=$(_917).closest("div.combo-panel");
$("div.combo-panel:visible").not(_918).not(p).panel("close");
$(_917).combo("showPanel");
}
$(_917).combo("textbox").focus();
};
function _90a(_91a){
$(_91a).find(".combo-f").each(function(){
var p=$(this).combo("panel");
if(p.is(":visible")){
p.panel("close");
}
});
};
function _91b(e){
var _91c=e.data.target;
var _91d=$.data(_91c,"combo");
var opts=_91d.options;
var _91e=_91d.panel;
if(!opts.editable){
_916(_91c);
}else{
var p=$(_91c).closest("div.combo-panel");
$("div.combo-panel:visible").not(_91e).not(p).panel("close");
}
};
function _91f(e){
var _920=e.data.target;
var t=$(_920);
var _921=t.data("combo");
var opts=t.combo("options");
switch(e.keyCode){
case 38:
opts.keyHandler.up.call(_920,e);
break;
case 40:
opts.keyHandler.down.call(_920,e);
break;
case 37:
opts.keyHandler.left.call(_920,e);
break;
case 39:
opts.keyHandler.right.call(_920,e);
break;
case 13:
e.preventDefault();
opts.keyHandler.enter.call(_920,e);
return false;
case 9:
case 27:
_919(_920);
break;
default:
if(opts.editable){
if(_921.timer){
clearTimeout(_921.timer);
}
_921.timer=setTimeout(function(){
var q=t.combo("getText");
if(_921.previousText!=q){
_921.previousText=q;
t.combo("showPanel");
opts.keyHandler.query.call(_920,q,e);
t.combo("validate");
}
},opts.delay);
}
}
};
function _922(_923){
var _924=$.data(_923,"combo");
var _925=_924.combo;
var _926=_924.panel;
var opts=$(_923).combo("options");
var _927=_926.panel("options");
_927.comboTarget=_923;
if(_927.closed){
_926.panel("panel").show().css({zIndex:($.fn.menu?$.fn.menu.defaults.zIndex++:$.fn.window.defaults.zIndex++),left:-999999});
_926.panel("resize",{width:(opts.panelWidth?opts.panelWidth:_925._outerWidth()),height:opts.panelHeight});
_926.panel("panel").hide();
_926.panel("open");
}
(function(){
if(_926.is(":visible")){
_926.panel("move",{left:_928(),top:_929()});
setTimeout(arguments.callee,200);
}
})();
function _928(){
var left=_925.offset().left;
if(opts.panelAlign=="right"){
left+=_925._outerWidth()-_926._outerWidth();
}
if(left+_926._outerWidth()>$(window)._outerWidth()+$(document).scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-_926._outerWidth();
}
if(left<0){
left=0;
}
return left;
};
function _929(){
var top=_925.offset().top+_925._outerHeight();
if(top+_926._outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
top=_925.offset().top-_926._outerHeight();
}
if(top<$(document).scrollTop()){
top=_925.offset().top+_925._outerHeight();
}
return top;
};
};
function _919(_92a){
var _92b=$.data(_92a,"combo").panel;
_92b.panel("close");
};
function _92c(_92d,text){
var _92e=$.data(_92d,"combo");
var _92f=$(_92d).textbox("getText");
if(_92f!=text){
$(_92d).textbox("setText",text);
_92e.previousText=text;
}
};
function _930(_931){
var _932=[];
var _933=$.data(_931,"combo").combo;
_933.find(".textbox-value").each(function(){
_932.push($(this).val());
});
return _932;
};
function _934(_935,_936){
var _937=$.data(_935,"combo");
var opts=_937.options;
var _938=_937.combo;
if(!$.isArray(_936)){
_936=_936.split(opts.separator);
}
var _939=_930(_935);
_938.find(".textbox-value").remove();
var name=$(_935).attr("textboxName")||"";
for(var i=0;i<_936.length;i++){
var _93a=$("<input type=\"hidden\" class=\"textbox-value\">").appendTo(_938);
_93a.attr("name",name);
if(opts.disabled){
_93a.attr("disabled","disabled");
}
_93a.val(_936[i]);
}
var _93b=(function(){
if(_939.length!=_936.length){
return true;
}
var a1=$.extend(true,[],_939);
var a2=$.extend(true,[],_936);
a1.sort();
a2.sort();
for(var i=0;i<a1.length;i++){
if(a1[i]!=a2[i]){
return true;
}
}
return false;
})();
if(_93b){
if(opts.multiple){
opts.onChange.call(_935,_936,_939);
}else{
opts.onChange.call(_935,_936[0],_939[0]);
}
$(_935).closest("form").trigger("_change",[_935]);
}
};
function _93c(_93d){
var _93e=_930(_93d);
return _93e[0];
};
function _93f(_940,_941){
_934(_940,[_941]);
};
function _942(_943){
var opts=$.data(_943,"combo").options;
var _944=opts.onChange;
opts.onChange=function(){
};
if(opts.multiple){
_934(_943,opts.value?opts.value:[]);
}else{
_93f(_943,opts.value);
}
opts.onChange=_944;
};
$.fn.combo=function(_945,_946){
if(typeof _945=="string"){
var _947=$.fn.combo.methods[_945];
if(_947){
return _947(this,_946);
}else{
return this.textbox(_945,_946);
}
}
_945=_945||{};
return this.each(function(){
var _948=$.data(this,"combo");
if(_948){
$.extend(_948.options,_945);
if(_945.value!=undefined){
_948.options.originalValue=_945.value;
}
}else{
_948=$.data(this,"combo",{options:$.extend({},$.fn.combo.defaults,$.fn.combo.parseOptions(this),_945),previousText:""});
_948.options.originalValue=_948.options.value;
}
_90b(this);
_942(this);
});
};
$.fn.combo.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"combo").options,{width:opts.width,height:opts.height,disabled:opts.disabled,readonly:opts.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).textbox("cloneFrom",from);
$.data(this,"combo",{options:$.extend(true,{cloned:true},$(from).combo("options")),combo:$(this).next(),panel:$(from).combo("panel")});
$(this).addClass("combo-f").attr("comboName",$(this).attr("textboxName"));
});
},panel:function(jq){
return $.data(jq[0],"combo").panel;
},destroy:function(jq){
return jq.each(function(){
_913(this);
});
},showPanel:function(jq){
return jq.each(function(){
_922(this);
});
},hidePanel:function(jq){
return jq.each(function(){
_919(this);
});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("setText","");
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",[]);
}else{
$(this).combo("setValue","");
}
});
},reset:function(jq){
return jq.each(function(){
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",opts.originalValue);
}else{
$(this).combo("setValue",opts.originalValue);
}
});
},setText:function(jq,text){
return jq.each(function(){
_92c(this,text);
});
},getValues:function(jq){
return _930(jq[0]);
},setValues:function(jq,_949){
return jq.each(function(){
_934(this,_949);
});
},getValue:function(jq){
return _93c(jq[0]);
},setValue:function(jq,_94a){
return jq.each(function(){
_93f(this,_94a);
});
}};
$.fn.combo.parseOptions=function(_94b){
var t=$(_94b);
return $.extend({},$.fn.textbox.parseOptions(_94b),$.parser.parseOptions(_94b,["separator","panelAlign",{panelWidth:"number",hasDownArrow:"boolean",delay:"number",selectOnNavigation:"boolean"},{panelMinWidth:"number",panelMaxWidth:"number",panelMinHeight:"number",panelMaxHeight:"number"}]),{panelHeight:(t.attr("panelHeight")=="auto"?"auto":parseInt(t.attr("panelHeight"))||undefined),multiple:(t.attr("multiple")?true:undefined)});
};
$.fn.combo.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:{click:_91b,keydown:_91f,paste:_91f,drop:_91f},panelWidth:null,panelHeight:200,panelMinWidth:null,panelMaxWidth:null,panelMinHeight:null,panelMaxHeight:null,panelAlign:"left",multiple:false,selectOnNavigation:true,separator:",",hasDownArrow:true,delay:200,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
},query:function(q,e){
}},onShowPanel:function(){
},onHidePanel:function(){
},onChange:function(_94c,_94d){
}});
})(jQuery);
(function($){
var _94e=0;
function _94f(_950,_951){
var _952=$.data(_950,"combobox");
var opts=_952.options;
var data=_952.data;
for(var i=0;i<data.length;i++){
if(data[i][opts.valueField]==_951){
return i;
}
}
return -1;
};
function _953(_954,_955){
var opts=$.data(_954,"combobox").options;
var _956=$(_954).combo("panel");
var item=opts.finder.getEl(_954,_955);
if(item.length){
if(item.position().top<=0){
var h=_956.scrollTop()+item.position().top;
_956.scrollTop(h);
}else{
if(item.position().top+item.outerHeight()>_956.height()){
var h=_956.scrollTop()+item.position().top+item.outerHeight()-_956.height();
_956.scrollTop(h);
}
}
}
};
function nav(_957,dir){
var opts=$.data(_957,"combobox").options;
var _958=$(_957).combobox("panel");
var item=_958.children("div.combobox-item-hover");
if(!item.length){
item=_958.children("div.combobox-item-selected");
}
item.removeClass("combobox-item-hover");
var _959="div.combobox-item:visible:not(.combobox-item-disabled):first";
var _95a="div.combobox-item:visible:not(.combobox-item-disabled):last";
if(!item.length){
item=_958.children(dir=="next"?_959:_95a);
}else{
if(dir=="next"){
item=item.nextAll(_959);
if(!item.length){
item=_958.children(_959);
}
}else{
item=item.prevAll(_959);
if(!item.length){
item=_958.children(_95a);
}
}
}
if(item.length){
item.addClass("combobox-item-hover");
var row=opts.finder.getRow(_957,item);
if(row){
_953(_957,row[opts.valueField]);
if(opts.selectOnNavigation){
_95b(_957,row[opts.valueField]);
}
}
}
};
function _95b(_95c,_95d){
var opts=$.data(_95c,"combobox").options;
var _95e=$(_95c).combo("getValues");
if($.inArray(_95d+"",_95e)==-1){
if(opts.multiple){
_95e.push(_95d);
}else{
_95e=[_95d];
}
_95f(_95c,_95e);
opts.onSelect.call(_95c,opts.finder.getRow(_95c,_95d));
}
};
function _960(_961,_962){
var opts=$.data(_961,"combobox").options;
var _963=$(_961).combo("getValues");
var _964=$.inArray(_962+"",_963);
if(_964>=0){
_963.splice(_964,1);
_95f(_961,_963);
opts.onUnselect.call(_961,opts.finder.getRow(_961,_962));
}
};
function _95f(_965,_966,_967){
var opts=$.data(_965,"combobox").options;
var _968=$(_965).combo("panel");
if(!$.isArray(_966)){
_966=_966.split(opts.separator);
}
_968.find("div.combobox-item-selected").removeClass("combobox-item-selected");
var vv=[],ss=[];
for(var i=0;i<_966.length;i++){
var v=_966[i];
var s=v;
opts.finder.getEl(_965,v).addClass("combobox-item-selected");
var row=opts.finder.getRow(_965,v);
if(row){
s=row[opts.textField];
}
vv.push(v);
ss.push(s);
}
if(!_967){
$(_965).combo("setText",ss.join(opts.separator));
}
$(_965).combo("setValues",vv);
};
function _969(_96a,data,_96b){
var _96c=$.data(_96a,"combobox");
var opts=_96c.options;
_96c.data=opts.loadFilter.call(_96a,data);
_96c.groups=[];
data=_96c.data;
var _96d=$(_96a).combobox("getValues");
var dd=[];
var _96e=undefined;
for(var i=0;i<data.length;i++){
var row=data[i];
var v=row[opts.valueField]+"";
var s=row[opts.textField];
var g=row[opts.groupField];
if(g){
if(_96e!=g){
_96e=g;
_96c.groups.push(g);
dd.push("<div id=\""+(_96c.groupIdPrefix+"_"+(_96c.groups.length-1))+"\" class=\"combobox-group\">");
dd.push(opts.groupFormatter?opts.groupFormatter.call(_96a,g):g);
dd.push("</div>");
}
}else{
_96e=undefined;
}
var cls="combobox-item"+(row.disabled?" combobox-item-disabled":"")+(g?" combobox-gitem":"");
dd.push("<div id=\""+(_96c.itemIdPrefix+"_"+i)+"\" class=\""+cls+"\">");
dd.push(opts.formatter?opts.formatter.call(_96a,row):s);
dd.push("</div>");
if(row["selected"]&&$.inArray(v,_96d)==-1){
_96d.push(v);
}
}
$(_96a).combo("panel").html(dd.join(""));
if(opts.multiple){
_95f(_96a,_96d,_96b);
}else{
_95f(_96a,_96d.length?[_96d[_96d.length-1]]:[],_96b);
}
opts.onLoadSuccess.call(_96a,data);
};
function _96f(_970,url,_971,_972){
var opts=$.data(_970,"combobox").options;
if(url){
opts.url=url;
}
_971=$.extend({},opts.queryParams,_971||{});
if(opts.onBeforeLoad.call(_970,_971)==false){
return;
}
opts.loader.call(_970,_971,function(data){
_969(_970,data,_972);
},function(){
opts.onLoadError.apply(this,arguments);
});
};
function _973(_974,q){
var _975=$.data(_974,"combobox");
var opts=_975.options;
var qq=opts.multiple?q.split(opts.separator):[q];
if(opts.mode=="remote"){
_976(qq);
_96f(_974,null,{q:q},true);
}else{
var _977=$(_974).combo("panel");
_977.find("div.combobox-item-selected,div.combobox-item-hover").removeClass("combobox-item-selected combobox-item-hover");
_977.find("div.combobox-item,div.combobox-group").hide();
var data=_975.data;
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
var _978=q;
var _979=undefined;
for(var i=0;i<data.length;i++){
var row=data[i];
if(opts.filter.call(_974,q,row)){
var v=row[opts.valueField];
var s=row[opts.textField];
var g=row[opts.groupField];
var item=opts.finder.getEl(_974,v).show();
if(s.toLowerCase()==q.toLowerCase()){
_978=v;
item.addClass("combobox-item-selected");
}
if(opts.groupField&&_979!=g){
$("#"+_975.groupIdPrefix+"_"+$.inArray(g,_975.groups)).show();
_979=g;
}
}
}
vv.push(_978);
});
_976(vv);
}
function _976(vv){
_95f(_974,opts.multiple?(q?vv:[]):vv,true);
};
};
function _97a(_97b){
var t=$(_97b);
var opts=t.combobox("options");
var _97c=t.combobox("panel");
var item=_97c.children("div.combobox-item-hover");
if(item.length){
var row=opts.finder.getRow(_97b,item);
var _97d=row[opts.valueField];
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
t.combobox("unselect",_97d);
}else{
t.combobox("select",_97d);
}
}else{
t.combobox("select",_97d);
}
}
var vv=[];
$.map(t.combobox("getValues"),function(v){
if(_94f(_97b,v)>=0){
vv.push(v);
}
});
t.combobox("setValues",vv);
if(!opts.multiple){
t.combobox("hidePanel");
}
};
function _97e(_97f){
var _980=$.data(_97f,"combobox");
var opts=_980.options;
_94e++;
_980.itemIdPrefix="_easyui_combobox_i"+_94e;
_980.groupIdPrefix="_easyui_combobox_g"+_94e;
$(_97f).addClass("combobox-f");
$(_97f).combo($.extend({},opts,{onShowPanel:function(){
$(_97f).combo("panel").find("div.combobox-item,div.combobox-group").show();
_953(_97f,$(_97f).combobox("getValue"));
opts.onShowPanel.call(_97f);
}}));
$(_97f).combo("panel").unbind().bind("mouseover",function(e){
$(this).children("div.combobox-item-hover").removeClass("combobox-item-hover");
var item=$(e.target).closest("div.combobox-item");
if(!item.hasClass("combobox-item-disabled")){
item.addClass("combobox-item-hover");
}
e.stopPropagation();
}).bind("mouseout",function(e){
$(e.target).closest("div.combobox-item").removeClass("combobox-item-hover");
e.stopPropagation();
}).bind("click",function(e){
var item=$(e.target).closest("div.combobox-item");
if(!item.length||item.hasClass("combobox-item-disabled")){
return;
}
var row=opts.finder.getRow(_97f,item);
if(!row){
return;
}
var _981=row[opts.valueField];
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
_960(_97f,_981);
}else{
_95b(_97f,_981);
}
}else{
_95b(_97f,_981);
$(_97f).combo("hidePanel");
}
e.stopPropagation();
});
};
$.fn.combobox=function(_982,_983){
if(typeof _982=="string"){
var _984=$.fn.combobox.methods[_982];
if(_984){
return _984(this,_983);
}else{
return this.combo(_982,_983);
}
}
_982=_982||{};
return this.each(function(){
var _985=$.data(this,"combobox");
if(_985){
$.extend(_985.options,_982);
_97e(this);
}else{
_985=$.data(this,"combobox",{options:$.extend({},$.fn.combobox.defaults,$.fn.combobox.parseOptions(this),_982),data:[]});
_97e(this);
var data=$.fn.combobox.parseData(this);
if(data.length){
_969(this,data);
}
}
if(_985.options.data){
_969(this,_985.options.data);
}
_96f(this);
});
};
$.fn.combobox.methods={options:function(jq){
var _986=jq.combo("options");
return $.extend($.data(jq[0],"combobox").options,{width:_986.width,height:_986.height,originalValue:_986.originalValue,disabled:_986.disabled,readonly:_986.readonly});
},getData:function(jq){
return $.data(jq[0],"combobox").data;
},setValues:function(jq,_987){
return jq.each(function(){
_95f(this,_987);
});
},setValue:function(jq,_988){
return jq.each(function(){
_95f(this,[_988]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combo("clear");
var _989=$(this).combo("panel");
_989.find("div.combobox-item-selected").removeClass("combobox-item-selected");
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combobox("options");
if(opts.multiple){
$(this).combobox("setValues",opts.originalValue);
}else{
$(this).combobox("setValue",opts.originalValue);
}
});
},loadData:function(jq,data){
return jq.each(function(){
_969(this,data);
});
},reload:function(jq,url){
return jq.each(function(){
if(typeof url=="string"){
_96f(this,url);
}else{
if(url){
var opts=$(this).combobox("options");
opts.queryParams=url;
}
_96f(this);
}
});
},select:function(jq,_98a){
return jq.each(function(){
_95b(this,_98a);
});
},unselect:function(jq,_98b){
return jq.each(function(){
_960(this,_98b);
});
}};
$.fn.combobox.parseOptions=function(_98c){
var t=$(_98c);
return $.extend({},$.fn.combo.parseOptions(_98c),$.parser.parseOptions(_98c,["valueField","textField","groupField","mode","method","url"]));
};
$.fn.combobox.parseData=function(_98d){
var data=[];
var opts=$(_98d).combobox("options");
$(_98d).children().each(function(){
if(this.tagName.toLowerCase()=="optgroup"){
var _98e=$(this).attr("label");
$(this).children().each(function(){
_98f(this,_98e);
});
}else{
_98f(this);
}
});
return data;
function _98f(el,_990){
var t=$(el);
var row={};
row[opts.valueField]=t.attr("value")!=undefined?t.attr("value"):t.text();
row[opts.textField]=t.text();
row["selected"]=t.is(":selected");
row["disabled"]=t.is(":disabled");
if(_990){
opts.groupField=opts.groupField||"group";
row[opts.groupField]=_990;
}
data.push(row);
};
};
$.fn.combobox.defaults=$.extend({},$.fn.combo.defaults,{valueField:"value",textField:"text",groupField:null,groupFormatter:function(_991){
return _991;
},mode:"local",method:"post",url:null,data:null,queryParams:{},keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_97a(this);
},query:function(q,e){
_973(this,q);
}},filter:function(q,row){
var opts=$(this).combobox("options");
return row[opts.textField].toLowerCase().indexOf(q.toLowerCase())==0;
},formatter:function(row){
var opts=$(this).combobox("options");
return row[opts.textField];
},loader:function(_992,_993,_994){
var opts=$(this).combobox("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_992,dataType:"json",success:function(data){
_993(data);
},error:function(){
_994.apply(this,arguments);
}});
},loadFilter:function(data){
return data;
},finder:{getEl:function(_995,_996){
var _997=_94f(_995,_996);
var id=$.data(_995,"combobox").itemIdPrefix+"_"+_997;
return $("#"+id);
},getRow:function(_998,p){
var _999=$.data(_998,"combobox");
var _99a=(p instanceof jQuery)?p.attr("id").substr(_999.itemIdPrefix.length+1):_94f(_998,p);
return _999.data[parseInt(_99a)];
}},onBeforeLoad:function(_99b){
},onLoadSuccess:function(){
},onLoadError:function(){
},onSelect:function(_99c){
},onUnselect:function(_99d){
}});
})(jQuery);
(function($){
function _99e(_99f){
var _9a0=$.data(_99f,"combotree");
var opts=_9a0.options;
var tree=_9a0.tree;
$(_99f).addClass("combotree-f");
$(_99f).combo(opts);
var _9a1=$(_99f).combo("panel");
if(!tree){
tree=$("<ul></ul>").appendTo(_9a1);
$.data(_99f,"combotree").tree=tree;
}
tree.tree($.extend({},opts,{checkbox:opts.multiple,onLoadSuccess:function(node,data){
var _9a2=$(_99f).combotree("getValues");
if(opts.multiple){
var _9a3=tree.tree("getChecked");
for(var i=0;i<_9a3.length;i++){
var id=_9a3[i].id;
(function(){
for(var i=0;i<_9a2.length;i++){
if(id==_9a2[i]){
return;
}
}
_9a2.push(id);
})();
}
}
$(_99f).combotree("setValues",_9a2);
opts.onLoadSuccess.call(this,node,data);
},onClick:function(node){
if(opts.multiple){
$(this).tree(node.checked?"uncheck":"check",node.target);
}else{
$(_99f).combo("hidePanel");
}
_9a5(_99f);
opts.onClick.call(this,node);
},onCheck:function(node,_9a4){
_9a5(_99f);
opts.onCheck.call(this,node,_9a4);
}}));
};
function _9a5(_9a6){
var _9a7=$.data(_9a6,"combotree");
var opts=_9a7.options;
var tree=_9a7.tree;
var vv=[],ss=[];
if(opts.multiple){
var _9a8=tree.tree("getChecked");
for(var i=0;i<_9a8.length;i++){
vv.push(_9a8[i].id);
ss.push(_9a8[i].text);
}
}else{
var node=tree.tree("getSelected");
if(node){
vv.push(node.id);
ss.push(node.text);
}
}
$(_9a6).combo("setText",ss.join(opts.separator)).combo("setValues",opts.multiple?vv:(vv.length?vv:[""]));
};
function _9a9(_9aa,_9ab){
var _9ac=$.data(_9aa,"combotree");
var opts=_9ac.options;
var tree=_9ac.tree;
var _9ad=tree.tree("options");
var _9ae=_9ad.onCheck;
var _9af=_9ad.onSelect;
_9ad.onCheck=_9ad.onSelect=function(){
};
tree.find("span.tree-checkbox").addClass("tree-checkbox0").removeClass("tree-checkbox1 tree-checkbox2");
if(!$.isArray(_9ab)){
_9ab=_9ab.split(opts.separator);
}
var vv=$.map(_9ab,function(_9b0){
return String(_9b0);
});
var ss=[];
$.map(vv,function(v){
var node=tree.tree("find",v);
if(node){
tree.tree("check",node.target).tree("select",node.target);
ss.push(node.text);
}else{
ss.push(v);
}
});
if(opts.multiple){
var _9b1=tree.tree("getChecked");
$.map(_9b1,function(node){
var id=String(node.id);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(node.text);
}
});
}
_9ad.onCheck=_9ae;
_9ad.onSelect=_9af;
$(_9aa).combo("setText",ss.join(opts.separator)).combo("setValues",opts.multiple?vv:(vv.length?vv:[""]));
};
$.fn.combotree=function(_9b2,_9b3){
if(typeof _9b2=="string"){
var _9b4=$.fn.combotree.methods[_9b2];
if(_9b4){
return _9b4(this,_9b3);
}else{
return this.combo(_9b2,_9b3);
}
}
_9b2=_9b2||{};
return this.each(function(){
var _9b5=$.data(this,"combotree");
if(_9b5){
$.extend(_9b5.options,_9b2);
}else{
$.data(this,"combotree",{options:$.extend({},$.fn.combotree.defaults,$.fn.combotree.parseOptions(this),_9b2)});
}
_99e(this);
});
};
$.fn.combotree.methods={options:function(jq){
var _9b6=jq.combo("options");
return $.extend($.data(jq[0],"combotree").options,{width:_9b6.width,height:_9b6.height,originalValue:_9b6.originalValue,disabled:_9b6.disabled,readonly:_9b6.readonly});
},clone:function(jq,_9b7){
var t=jq.combo("clone",_9b7);
t.data("combotree",{options:$.extend(true,{},jq.combotree("options")),tree:jq.combotree("tree")});
return t;
},tree:function(jq){
return $.data(jq[0],"combotree").tree;
},loadData:function(jq,data){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
opts.data=data;
var tree=$.data(this,"combotree").tree;
tree.tree("loadData",data);
});
},reload:function(jq,url){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
var tree=$.data(this,"combotree").tree;
if(url){
opts.url=url;
}
tree.tree({url:opts.url});
});
},setValues:function(jq,_9b8){
return jq.each(function(){
_9a9(this,_9b8);
});
},setValue:function(jq,_9b9){
return jq.each(function(){
_9a9(this,[_9b9]);
});
},clear:function(jq){
return jq.each(function(){
var tree=$.data(this,"combotree").tree;
tree.find("div.tree-node-selected").removeClass("tree-node-selected");
var cc=tree.tree("getChecked");
for(var i=0;i<cc.length;i++){
tree.tree("uncheck",cc[i].target);
}
$(this).combo("clear");
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combotree("options");
if(opts.multiple){
$(this).combotree("setValues",opts.originalValue);
}else{
$(this).combotree("setValue",opts.originalValue);
}
});
}};
$.fn.combotree.parseOptions=function(_9ba){
return $.extend({},$.fn.combo.parseOptions(_9ba),$.fn.tree.parseOptions(_9ba));
};
$.fn.combotree.defaults=$.extend({},$.fn.combo.defaults,$.fn.tree.defaults,{editable:false});
})(jQuery);
(function($){
function _9bb(_9bc){
var _9bd=$.data(_9bc,"combogrid");
var opts=_9bd.options;
var grid=_9bd.grid;
$(_9bc).addClass("combogrid-f").combo($.extend({},opts,{onShowPanel:function(){
var p=$(this).combogrid("panel");
var _9be=p.outerHeight()-p.height();
var _9bf=p._size("minHeight");
var _9c0=p._size("maxHeight");
var dg=$(this).combogrid("grid");
dg.datagrid("resize",{width:"100%",height:(isNaN(parseInt(opts.panelHeight))?"auto":"100%"),minHeight:(_9bf?_9bf-_9be:""),maxHeight:(_9c0?_9c0-_9be:"")});
var row=dg.datagrid("getSelected");
if(row){
dg.datagrid("scrollTo",dg.datagrid("getRowIndex",row));
}
opts.onShowPanel.call(this);
}}));
var _9c1=$(_9bc).combo("panel");
if(!grid){
grid=$("<table></table>").appendTo(_9c1);
_9bd.grid=grid;
}
grid.datagrid($.extend({},opts,{border:false,singleSelect:(!opts.multiple),onLoadSuccess:function(data){
var _9c2=$(_9bc).combo("getValues");
var _9c3=opts.onSelect;
opts.onSelect=function(){
};
_9cd(_9bc,_9c2,_9bd.remainText);
opts.onSelect=_9c3;
opts.onLoadSuccess.apply(_9bc,arguments);
},onClickRow:_9c4,onSelect:function(_9c5,row){
_9c6();
opts.onSelect.call(this,_9c5,row);
},onUnselect:function(_9c7,row){
_9c6();
opts.onUnselect.call(this,_9c7,row);
},onSelectAll:function(rows){
_9c6();
opts.onSelectAll.call(this,rows);
},onUnselectAll:function(rows){
if(opts.multiple){
_9c6();
}
opts.onUnselectAll.call(this,rows);
}}));
function _9c4(_9c8,row){
_9bd.remainText=false;
_9c6();
if(!opts.multiple){
$(_9bc).combo("hidePanel");
}
opts.onClickRow.call(this,_9c8,row);
};
function _9c6(){
var rows=grid.datagrid("getSelections");
var vv=[],ss=[];
for(var i=0;i<rows.length;i++){
vv.push(rows[i][opts.idField]);
ss.push(rows[i][opts.textField]);
}
if(!opts.multiple){
$(_9bc).combo("setValues",(vv.length?vv:[""]));
}else{
$(_9bc).combo("setValues",vv);
}
if(!_9bd.remainText){
$(_9bc).combo("setText",ss.join(opts.separator));
}
};
};
function nav(_9c9,dir){
var _9ca=$.data(_9c9,"combogrid");
var opts=_9ca.options;
var grid=_9ca.grid;
var _9cb=grid.datagrid("getRows").length;
if(!_9cb){
return;
}
var tr=opts.finder.getTr(grid[0],null,"highlight");
if(!tr.length){
tr=opts.finder.getTr(grid[0],null,"selected");
}
var _9cc;
if(!tr.length){
_9cc=(dir=="next"?0:_9cb-1);
}else{
var _9cc=parseInt(tr.attr("datagrid-row-index"));
_9cc+=(dir=="next"?1:-1);
if(_9cc<0){
_9cc=_9cb-1;
}
if(_9cc>=_9cb){
_9cc=0;
}
}
grid.datagrid("highlightRow",_9cc);
if(opts.selectOnNavigation){
_9ca.remainText=false;
grid.datagrid("selectRow",_9cc);
}
};
function _9cd(_9ce,_9cf,_9d0){
var _9d1=$.data(_9ce,"combogrid");
var opts=_9d1.options;
var grid=_9d1.grid;
var rows=grid.datagrid("getRows");
var ss=[];
var _9d2=$(_9ce).combo("getValues");
var _9d3=$(_9ce).combo("options");
var _9d4=_9d3.onChange;
_9d3.onChange=function(){
};
grid.datagrid("clearSelections");
if(!$.isArray(_9cf)){
_9cf=_9cf.split(opts.separator);
}
for(var i=0;i<_9cf.length;i++){
var _9d5=grid.datagrid("getRowIndex",_9cf[i]);
if(_9d5>=0){
grid.datagrid("selectRow",_9d5);
ss.push(rows[_9d5][opts.textField]);
}else{
ss.push(_9cf[i]);
}
}
$(_9ce).combo("setValues",_9d2);
_9d3.onChange=_9d4;
if(!_9d0){
var s=ss.join(opts.separator);
if($(_9ce).combo("getText")!=s){
$(_9ce).combo("setText",s);
}
}
$(_9ce).combo("setValues",_9cf);
};
function _9d6(_9d7,q){
var _9d8=$.data(_9d7,"combogrid");
var opts=_9d8.options;
var grid=_9d8.grid;
_9d8.remainText=true;
if(opts.multiple&&!q){
_9cd(_9d7,[],true);
}else{
_9cd(_9d7,[q],true);
}
if(opts.mode=="remote"){
grid.datagrid("clearSelections");
grid.datagrid("load",$.extend({},opts.queryParams,{q:q}));
}else{
if(!q){
return;
}
grid.datagrid("clearSelections").datagrid("highlightRow",-1);
var rows=grid.datagrid("getRows");
var qq=opts.multiple?q.split(opts.separator):[q];
$.map(qq,function(q){
q=$.trim(q);
if(q){
$.map(rows,function(row,i){
if(q==row[opts.textField]){
grid.datagrid("selectRow",i);
}else{
if(opts.filter.call(_9d7,q,row)){
grid.datagrid("highlightRow",i);
}
}
});
}
});
}
};
function _9d9(_9da){
var _9db=$.data(_9da,"combogrid");
var opts=_9db.options;
var grid=_9db.grid;
var tr=opts.finder.getTr(grid[0],null,"highlight");
_9db.remainText=false;
if(tr.length){
var _9dc=parseInt(tr.attr("datagrid-row-index"));
if(opts.multiple){
if(tr.hasClass("datagrid-row-selected")){
grid.datagrid("unselectRow",_9dc);
}else{
grid.datagrid("selectRow",_9dc);
}
}else{
grid.datagrid("selectRow",_9dc);
}
}
var vv=[];
$.map(grid.datagrid("getSelections"),function(row){
vv.push(row[opts.idField]);
});
$(_9da).combogrid("setValues",vv);
if(!opts.multiple){
$(_9da).combogrid("hidePanel");
}
};
$.fn.combogrid=function(_9dd,_9de){
if(typeof _9dd=="string"){
var _9df=$.fn.combogrid.methods[_9dd];
if(_9df){
return _9df(this,_9de);
}else{
return this.combo(_9dd,_9de);
}
}
_9dd=_9dd||{};
return this.each(function(){
var _9e0=$.data(this,"combogrid");
if(_9e0){
$.extend(_9e0.options,_9dd);
}else{
_9e0=$.data(this,"combogrid",{options:$.extend({},$.fn.combogrid.defaults,$.fn.combogrid.parseOptions(this),_9dd)});
}
_9bb(this);
});
};
$.fn.combogrid.methods={options:function(jq){
var _9e1=jq.combo("options");
return $.extend($.data(jq[0],"combogrid").options,{width:_9e1.width,height:_9e1.height,originalValue:_9e1.originalValue,disabled:_9e1.disabled,readonly:_9e1.readonly});
},grid:function(jq){
return $.data(jq[0],"combogrid").grid;
},setValues:function(jq,_9e2){
return jq.each(function(){
_9cd(this,_9e2);
});
},setValue:function(jq,_9e3){
return jq.each(function(){
_9cd(this,[_9e3]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combogrid("grid").datagrid("clearSelections");
$(this).combo("clear");
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combogrid("options");
if(opts.multiple){
$(this).combogrid("setValues",opts.originalValue);
}else{
$(this).combogrid("setValue",opts.originalValue);
}
});
}};
$.fn.combogrid.parseOptions=function(_9e4){
var t=$(_9e4);
return $.extend({},$.fn.combo.parseOptions(_9e4),$.fn.datagrid.parseOptions(_9e4),$.parser.parseOptions(_9e4,["idField","textField","mode"]));
};
$.fn.combogrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.datagrid.defaults,{height:22,loadMsg:null,idField:null,textField:null,mode:"local",keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_9d9(this);
},query:function(q,e){
_9d6(this,q);
}},filter:function(q,row){
var opts=$(this).combogrid("options");
return row[opts.textField].toLowerCase().indexOf(q.toLowerCase())==0;
}});
})(jQuery);
(function($){
function _9e5(_9e6){
var _9e7=$.data(_9e6,"datebox");
var opts=_9e7.options;
$(_9e6).addClass("datebox-f").combo($.extend({},opts,{onShowPanel:function(){
_9e8(this);
_9e9(this);
_9ea(this);
_9f8(this,$(this).datebox("getText"),true);
opts.onShowPanel.call(this);
}}));
if(!_9e7.calendar){
var _9eb=$(_9e6).combo("panel").css("overflow","hidden");
_9eb.panel("options").onBeforeDestroy=function(){
var c=$(this).find(".calendar-shared");
if(c.length){
c.insertBefore(c[0].pholder);
}
};
var cc=$("<div class=\"datebox-calendar-inner\"></div>").prependTo(_9eb);
if(opts.sharedCalendar){
var c=$(opts.sharedCalendar);
if(!c[0].pholder){
c[0].pholder=$("<div class=\"calendar-pholder\" style=\"display:none\"></div>").insertAfter(c);
}
c.addClass("calendar-shared").appendTo(cc);
if(!c.hasClass("calendar")){
c.calendar();
}
_9e7.calendar=c;
}else{
_9e7.calendar=$("<div></div>").appendTo(cc).calendar();
}
$.extend(_9e7.calendar.calendar("options"),{fit:true,border:false,onSelect:function(date){
var _9ec=this.target;
var opts=$(_9ec).datebox("options");
_9f8(_9ec,opts.formatter.call(_9ec,date));
$(_9ec).combo("hidePanel");
opts.onSelect.call(_9ec,date);
}});
}
$(_9e6).combo("textbox").parent().addClass("datebox");
$(_9e6).datebox("initValue",opts.value);
function _9e8(_9ed){
var opts=$(_9ed).datebox("options");
var _9ee=$(_9ed).combo("panel");
_9ee.unbind(".datebox").bind("click.datebox",function(e){
if($(e.target).hasClass("datebox-button-a")){
var _9ef=parseInt($(e.target).attr("datebox-button-index"));
opts.buttons[_9ef].handler.call(e.target,_9ed);
}
});
};
function _9e9(_9f0){
var _9f1=$(_9f0).combo("panel");
if(_9f1.children("div.datebox-button").length){
return;
}
var _9f2=$("<div class=\"datebox-button\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"width:100%\"><tr></tr></table></div>").appendTo(_9f1);
var tr=_9f2.find("tr");
for(var i=0;i<opts.buttons.length;i++){
var td=$("<td></td>").appendTo(tr);
var btn=opts.buttons[i];
var t=$("<a class=\"datebox-button-a\" href=\"javascript:void(0)\"></a>").html($.isFunction(btn.text)?btn.text(_9f0):btn.text).appendTo(td);
t.attr("datebox-button-index",i);
}
tr.find("td").css("width",(100/opts.buttons.length)+"%");
};
function _9ea(_9f3){
var _9f4=$(_9f3).combo("panel");
var cc=_9f4.children("div.datebox-calendar-inner");
_9f4.children()._outerWidth(_9f4.width());
_9e7.calendar.appendTo(cc);
_9e7.calendar[0].target=_9f3;
if(opts.panelHeight!="auto"){
var _9f5=_9f4.height();
_9f4.children().not(cc).each(function(){
_9f5-=$(this).outerHeight();
});
cc._outerHeight(_9f5);
}
_9e7.calendar.calendar("resize");
};
};
function _9f6(_9f7,q){
_9f8(_9f7,q,true);
};
function _9f9(_9fa){
var _9fb=$.data(_9fa,"datebox");
var opts=_9fb.options;
var _9fc=_9fb.calendar.calendar("options").current;
if(_9fc){
_9f8(_9fa,opts.formatter.call(_9fa,_9fc));
$(_9fa).combo("hidePanel");
}
};
function _9f8(_9fd,_9fe,_9ff){
var _a00=$.data(_9fd,"datebox");
var opts=_a00.options;
var _a01=_a00.calendar;
_a01.calendar("moveTo",opts.parser.call(_9fd,_9fe));
if(_9ff){
$(_9fd).combo("setValue",_9fe);
}else{
if(_9fe){
_9fe=opts.formatter.call(_9fd,_a01.calendar("options").current);
}
$(_9fd).combo("setText",_9fe).combo("setValue",_9fe);
}
};
$.fn.datebox=function(_a02,_a03){
if(typeof _a02=="string"){
var _a04=$.fn.datebox.methods[_a02];
if(_a04){
return _a04(this,_a03);
}else{
return this.combo(_a02,_a03);
}
}
_a02=_a02||{};
return this.each(function(){
var _a05=$.data(this,"datebox");
if(_a05){
$.extend(_a05.options,_a02);
}else{
$.data(this,"datebox",{options:$.extend({},$.fn.datebox.defaults,$.fn.datebox.parseOptions(this),_a02)});
}
_9e5(this);
});
};
$.fn.datebox.methods={options:function(jq){
var _a06=jq.combo("options");
return $.extend($.data(jq[0],"datebox").options,{width:_a06.width,height:_a06.height,originalValue:_a06.originalValue,disabled:_a06.disabled,readonly:_a06.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"datebox",{options:$.extend(true,{},$(from).datebox("options")),calendar:$(from).datebox("calendar")});
$(this).addClass("datebox-f");
});
},calendar:function(jq){
return $.data(jq[0],"datebox").calendar;
},initValue:function(jq,_a07){
return jq.each(function(){
var opts=$(this).datebox("options");
var _a08=opts.value;
if(_a08){
_a08=opts.formatter.call(this,opts.parser.call(this,_a08));
}
$(this).combo("initValue",_a08).combo("setText",_a08);
});
},setValue:function(jq,_a09){
return jq.each(function(){
_9f8(this,_a09);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datebox("options");
$(this).datebox("setValue",opts.originalValue);
});
}};
$.fn.datebox.parseOptions=function(_a0a){
return $.extend({},$.fn.combo.parseOptions(_a0a),$.parser.parseOptions(_a0a,["sharedCalendar"]));
};
$.fn.datebox.defaults=$.extend({},$.fn.combo.defaults,{panelWidth:180,panelHeight:"auto",sharedCalendar:null,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_9f9(this);
},query:function(q,e){
_9f6(this,q);
}},currentText:"Today",closeText:"Close",okText:"Ok",buttons:[{text:function(_a0b){
return $(_a0b).datebox("options").currentText;
},handler:function(_a0c){
var now=new Date();
$(_a0c).datebox("calendar").calendar({year:now.getFullYear(),month:now.getMonth()+1,current:new Date(now.getFullYear(),now.getMonth(),now.getDate())});
_9f9(_a0c);
}},{text:function(_a0d){
return $(_a0d).datebox("options").closeText;
},handler:function(_a0e){
$(this).closest("div.combo-panel").panel("close");
}}],formatter:function(date){
var y=date.getFullYear();
var m=date.getMonth()+1;
var d=date.getDate();
return (m<10?("0"+m):m)+"/"+(d<10?("0"+d):d)+"/"+y;
},parser:function(s){
if(!s){
return new Date();
}
var ss=s.split("/");
var m=parseInt(ss[0],10);
var d=parseInt(ss[1],10);
var y=parseInt(ss[2],10);
if(!isNaN(y)&&!isNaN(m)&&!isNaN(d)){
return new Date(y,m-1,d);
}else{
return new Date();
}
},onSelect:function(date){
}});
})(jQuery);
(function($){
function _a0f(_a10){
var _a11=$.data(_a10,"datetimebox");
var opts=_a11.options;
$(_a10).datebox($.extend({},opts,{onShowPanel:function(){
var _a12=$(this).datetimebox("getValue");
_a18(this,_a12,true);
opts.onShowPanel.call(this);
},formatter:$.fn.datebox.defaults.formatter,parser:$.fn.datebox.defaults.parser}));
$(_a10).removeClass("datebox-f").addClass("datetimebox-f");
$(_a10).datebox("calendar").calendar({onSelect:function(date){
opts.onSelect.call(this.target,date);
}});
if(!_a11.spinner){
var _a13=$(_a10).datebox("panel");
var p=$("<div style=\"padding:2px\"><input></div>").insertAfter(_a13.children("div.datebox-calendar-inner"));
_a11.spinner=p.children("input");
}
_a11.spinner.timespinner({width:opts.spinnerWidth,showSeconds:opts.showSeconds,separator:opts.timeSeparator});
$(_a10).datetimebox("initValue",opts.value);
};
function _a14(_a15){
var c=$(_a15).datetimebox("calendar");
var t=$(_a15).datetimebox("spinner");
var date=c.calendar("options").current;
return new Date(date.getFullYear(),date.getMonth(),date.getDate(),t.timespinner("getHours"),t.timespinner("getMinutes"),t.timespinner("getSeconds"));
};
function _a16(_a17,q){
_a18(_a17,q,true);
};
function _a19(_a1a){
var opts=$.data(_a1a,"datetimebox").options;
var date=_a14(_a1a);
_a18(_a1a,opts.formatter.call(_a1a,date));
$(_a1a).combo("hidePanel");
};
function _a18(_a1b,_a1c,_a1d){
var opts=$.data(_a1b,"datetimebox").options;
$(_a1b).combo("setValue",_a1c);
if(!_a1d){
if(_a1c){
var date=opts.parser.call(_a1b,_a1c);
$(_a1b).combo("setText",opts.formatter.call(_a1b,date));
$(_a1b).combo("setValue",opts.formatter.call(_a1b,date));
}else{
$(_a1b).combo("setText",_a1c);
}
}
var date=opts.parser.call(_a1b,_a1c);
$(_a1b).datetimebox("calendar").calendar("moveTo",date);
$(_a1b).datetimebox("spinner").timespinner("setValue",_a1e(date));
function _a1e(date){
function _a1f(_a20){
return (_a20<10?"0":"")+_a20;
};
var tt=[_a1f(date.getHours()),_a1f(date.getMinutes())];
if(opts.showSeconds){
tt.push(_a1f(date.getSeconds()));
}
return tt.join($(_a1b).datetimebox("spinner").timespinner("options").separator);
};
};
$.fn.datetimebox=function(_a21,_a22){
if(typeof _a21=="string"){
var _a23=$.fn.datetimebox.methods[_a21];
if(_a23){
return _a23(this,_a22);
}else{
return this.datebox(_a21,_a22);
}
}
_a21=_a21||{};
return this.each(function(){
var _a24=$.data(this,"datetimebox");
if(_a24){
$.extend(_a24.options,_a21);
}else{
$.data(this,"datetimebox",{options:$.extend({},$.fn.datetimebox.defaults,$.fn.datetimebox.parseOptions(this),_a21)});
}
_a0f(this);
});
};
$.fn.datetimebox.methods={options:function(jq){
var _a25=jq.datebox("options");
return $.extend($.data(jq[0],"datetimebox").options,{originalValue:_a25.originalValue,disabled:_a25.disabled,readonly:_a25.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).datebox("cloneFrom",from);
$.data(this,"datetimebox",{options:$.extend(true,{},$(from).datetimebox("options")),spinner:$(from).datetimebox("spinner")});
$(this).removeClass("datebox-f").addClass("datetimebox-f");
});
},spinner:function(jq){
return $.data(jq[0],"datetimebox").spinner;
},initValue:function(jq,_a26){
return jq.each(function(){
var opts=$(this).datetimebox("options");
var _a27=opts.value;
if(_a27){
_a27=opts.formatter.call(this,opts.parser.call(this,_a27));
}
$(this).combo("initValue",_a27).combo("setText",_a27);
});
},setValue:function(jq,_a28){
return jq.each(function(){
_a18(this,_a28);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datetimebox("options");
$(this).datetimebox("setValue",opts.originalValue);
});
}};
$.fn.datetimebox.parseOptions=function(_a29){
var t=$(_a29);
return $.extend({},$.fn.datebox.parseOptions(_a29),$.parser.parseOptions(_a29,["timeSeparator","spinnerWidth",{showSeconds:"boolean"}]));
};
$.fn.datetimebox.defaults=$.extend({},$.fn.datebox.defaults,{spinnerWidth:"100%",showSeconds:true,timeSeparator:":",keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_a19(this);
},query:function(q,e){
_a16(this,q);
}},buttons:[{text:function(_a2a){
return $(_a2a).datetimebox("options").currentText;
},handler:function(_a2b){
var opts=$(_a2b).datetimebox("options");
_a18(_a2b,opts.formatter.call(_a2b,new Date()));
$(_a2b).datetimebox("hidePanel");
}},{text:function(_a2c){
return $(_a2c).datetimebox("options").okText;
},handler:function(_a2d){
_a19(_a2d);
}},{text:function(_a2e){
return $(_a2e).datetimebox("options").closeText;
},handler:function(_a2f){
$(_a2f).datetimebox("hidePanel");
}}],formatter:function(date){
var h=date.getHours();
var M=date.getMinutes();
var s=date.getSeconds();
function _a30(_a31){
return (_a31<10?"0":"")+_a31;
};
var _a32=$(this).datetimebox("spinner").timespinner("options").separator;
var r=$.fn.datebox.defaults.formatter(date)+" "+_a30(h)+_a32+_a30(M);
if($(this).datetimebox("options").showSeconds){
r+=_a32+_a30(s);
}
return r;
},parser:function(s){
if($.trim(s)==""){
return new Date();
}
var dt=s.split(" ");
var d=$.fn.datebox.defaults.parser(dt[0]);
if(dt.length<2){
return d;
}
var _a33=$(this).datetimebox("spinner").timespinner("options").separator;
var tt=dt[1].split(_a33);
var hour=parseInt(tt[0],10)||0;
var _a34=parseInt(tt[1],10)||0;
var _a35=parseInt(tt[2],10)||0;
return new Date(d.getFullYear(),d.getMonth(),d.getDate(),hour,_a34,_a35);
}});
})(jQuery);
(function($){
function init(_a36){
var _a37=$("<div class=\"slider\">"+"<div class=\"slider-inner\">"+"<a href=\"javascript:void(0)\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>"+"</div>"+"<div class=\"slider-rule\"></div>"+"<div class=\"slider-rulelabel\"></div>"+"<div style=\"clear:both\"></div>"+"<input type=\"hidden\" class=\"slider-value\">"+"</div>").insertAfter(_a36);
var t=$(_a36);
t.addClass("slider-f").hide();
var name=t.attr("name");
if(name){
_a37.find("input.slider-value").attr("name",name);
t.removeAttr("name").attr("sliderName",name);
}
_a37.bind("_resize",function(e,_a38){
if($(this).hasClass("easyui-fluid")||_a38){
_a39(_a36);
}
return false;
});
return _a37;
};
function _a39(_a3a,_a3b){
var _a3c=$.data(_a3a,"slider");
var opts=_a3c.options;
var _a3d=_a3c.slider;
if(_a3b){
if(_a3b.width){
opts.width=_a3b.width;
}
if(_a3b.height){
opts.height=_a3b.height;
}
}
_a3d._size(opts);
if(opts.mode=="h"){
_a3d.css("height","");
_a3d.children("div").css("height","");
}else{
_a3d.css("width","");
_a3d.children("div").css("width","");
_a3d.children("div.slider-rule,div.slider-rulelabel,div.slider-inner")._outerHeight(_a3d._outerHeight());
}
_a3e(_a3a);
};
function _a3f(_a40){
var _a41=$.data(_a40,"slider");
var opts=_a41.options;
var _a42=_a41.slider;
var aa=opts.mode=="h"?opts.rule:opts.rule.slice(0).reverse();
if(opts.reversed){
aa=aa.slice(0).reverse();
}
_a43(aa);
function _a43(aa){
var rule=_a42.find("div.slider-rule");
var _a44=_a42.find("div.slider-rulelabel");
rule.empty();
_a44.empty();
for(var i=0;i<aa.length;i++){
var _a45=i*100/(aa.length-1)+"%";
var span=$("<span></span>").appendTo(rule);
span.css((opts.mode=="h"?"left":"top"),_a45);
if(aa[i]!="|"){
span=$("<span></span>").appendTo(_a44);
span.html(aa[i]);
if(opts.mode=="h"){
span.css({left:_a45,marginLeft:-Math.round(span.outerWidth()/2)});
}else{
span.css({top:_a45,marginTop:-Math.round(span.outerHeight()/2)});
}
}
}
};
};
function _a46(_a47){
var _a48=$.data(_a47,"slider");
var opts=_a48.options;
var _a49=_a48.slider;
_a49.removeClass("slider-h slider-v slider-disabled");
_a49.addClass(opts.mode=="h"?"slider-h":"slider-v");
_a49.addClass(opts.disabled?"slider-disabled":"");
var _a4a=_a49.find(".slider-inner");
_a4a.html("<a href=\"javascript:void(0)\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>");
if(opts.range){
_a4a.append("<a href=\"javascript:void(0)\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>");
}
_a49.find("a.slider-handle").draggable({axis:opts.mode,cursor:"pointer",disabled:opts.disabled,onDrag:function(e){
var left=e.data.left;
var _a4b=_a49.width();
if(opts.mode!="h"){
left=e.data.top;
_a4b=_a49.height();
}
if(left<0||left>_a4b){
return false;
}else{
_a4c(left);
return false;
}
},onBeforeDrag:function(){
_a48.isDragging=true;
},onStartDrag:function(){
opts.onSlideStart.call(_a47,opts.value);
},onStopDrag:function(e){
_a4c(opts.mode=="h"?e.data.left:e.data.top);
opts.onSlideEnd.call(_a47,opts.value);
opts.onComplete.call(_a47,opts.value);
_a48.isDragging=false;
}});
_a49.find("div.slider-inner").unbind(".slider").bind("mousedown.slider",function(e){
if(_a48.isDragging||opts.disabled){
return;
}
var pos=$(this).offset();
_a4c(opts.mode=="h"?(e.pageX-pos.left):(e.pageY-pos.top));
opts.onComplete.call(_a47,opts.value);
});
function _a4c(pos){
var _a4d=_a4e(_a47,pos);
var s=Math.abs(_a4d%opts.step);
if(s<opts.step/2){
_a4d-=s;
}else{
_a4d=_a4d-s+opts.step;
}
if(opts.range){
var v1=opts.value[0];
var v2=opts.value[1];
var m=parseFloat((v1+v2)/2);
if(_a4d<v1){
v1=_a4d;
}else{
if(_a4d>v2){
v2=_a4d;
}else{
_a4d<m?v1=_a4d:v2=_a4d;
}
}
$(_a47).slider("setValues",[v1,v2]);
}else{
$(_a47).slider("setValue",_a4d);
}
};
};
function _a4f(_a50,_a51){
var _a52=$.data(_a50,"slider");
var opts=_a52.options;
var _a53=_a52.slider;
var _a54=$.isArray(opts.value)?opts.value:[opts.value];
var _a55=[];
if(!$.isArray(_a51)){
_a51=$.map(String(_a51).split(opts.separator),function(v){
return parseFloat(v);
});
}
_a53.find(".slider-value").remove();
var name=$(_a50).attr("sliderName")||"";
for(var i=0;i<_a51.length;i++){
var _a56=_a51[i];
if(_a56<opts.min){
_a56=opts.min;
}
if(_a56>opts.max){
_a56=opts.max;
}
var _a57=$("<input type=\"hidden\" class=\"slider-value\">").appendTo(_a53);
_a57.attr("name",name);
_a57.val(_a56);
_a55.push(_a56);
var _a58=_a53.find(".slider-handle:eq("+i+")");
var tip=_a58.next();
var pos=_a59(_a50,_a56);
if(opts.showTip){
tip.show();
tip.html(opts.tipFormatter.call(_a50,_a56));
}else{
tip.hide();
}
if(opts.mode=="h"){
var _a5a="left:"+pos+"px;";
_a58.attr("style",_a5a);
tip.attr("style",_a5a+"margin-left:"+(-Math.round(tip.outerWidth()/2))+"px");
}else{
var _a5a="top:"+pos+"px;";
_a58.attr("style",_a5a);
tip.attr("style",_a5a+"margin-left:"+(-Math.round(tip.outerWidth()))+"px");
}
}
opts.value=opts.range?_a55:_a55[0];
$(_a50).val(opts.range?_a55.join(opts.separator):_a55[0]);
if(_a54.join(",")!=_a55.join(",")){
opts.onChange.call(_a50,opts.value,(opts.range?_a54:_a54[0]));
}
};
function _a3e(_a5b){
var opts=$.data(_a5b,"slider").options;
var fn=opts.onChange;
opts.onChange=function(){
};
_a4f(_a5b,opts.value);
opts.onChange=fn;
};
function _a59(_a5c,_a5d){
var _a5e=$.data(_a5c,"slider");
var opts=_a5e.options;
var _a5f=_a5e.slider;
var size=opts.mode=="h"?_a5f.width():_a5f.height();
var pos=opts.converter.toPosition.call(_a5c,_a5d,size);
if(opts.mode=="v"){
pos=_a5f.height()-pos;
}
if(opts.reversed){
pos=size-pos;
}
return pos.toFixed(0);
};
function _a4e(_a60,pos){
var _a61=$.data(_a60,"slider");
var opts=_a61.options;
var _a62=_a61.slider;
var size=opts.mode=="h"?_a62.width():_a62.height();
var _a63=opts.converter.toValue.call(_a60,opts.mode=="h"?(opts.reversed?(size-pos):pos):(size-pos),size);
return _a63.toFixed(0);
};
$.fn.slider=function(_a64,_a65){
if(typeof _a64=="string"){
return $.fn.slider.methods[_a64](this,_a65);
}
_a64=_a64||{};
return this.each(function(){
var _a66=$.data(this,"slider");
if(_a66){
$.extend(_a66.options,_a64);
}else{
_a66=$.data(this,"slider",{options:$.extend({},$.fn.slider.defaults,$.fn.slider.parseOptions(this),_a64),slider:init(this)});
$(this).removeAttr("disabled");
}
var opts=_a66.options;
opts.min=parseFloat(opts.min);
opts.max=parseFloat(opts.max);
if(opts.range){
if(!$.isArray(opts.value)){
opts.value=$.map(String(opts.value).split(opts.separator),function(v){
return parseFloat(v);
});
}
if(opts.value.length<2){
opts.value.push(opts.max);
}
}else{
opts.value=parseFloat(opts.value);
}
opts.step=parseFloat(opts.step);
opts.originalValue=opts.value;
_a46(this);
_a3f(this);
_a39(this);
});
};
$.fn.slider.methods={options:function(jq){
return $.data(jq[0],"slider").options;
},destroy:function(jq){
return jq.each(function(){
$.data(this,"slider").slider.remove();
$(this).remove();
});
},resize:function(jq,_a67){
return jq.each(function(){
_a39(this,_a67);
});
},getValue:function(jq){
return jq.slider("options").value;
},getValues:function(jq){
return jq.slider("options").value;
},setValue:function(jq,_a68){
return jq.each(function(){
_a4f(this,[_a68]);
});
},setValues:function(jq,_a69){
return jq.each(function(){
_a4f(this,_a69);
});
},clear:function(jq){
return jq.each(function(){
var opts=$(this).slider("options");
_a4f(this,opts.range?[opts.min,opts.max]:[opts.min]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).slider("options");
$(this).slider(opts.range?"setValues":"setValue",opts.originalValue);
});
},enable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=false;
_a46(this);
});
},disable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=true;
_a46(this);
});
}};
$.fn.slider.parseOptions=function(_a6a){
var t=$(_a6a);
return $.extend({},$.parser.parseOptions(_a6a,["width","height","mode",{reversed:"boolean",showTip:"boolean",range:"boolean",min:"number",max:"number",step:"number"}]),{value:(t.val()||undefined),disabled:(t.attr("disabled")?true:undefined),rule:(t.attr("rule")?eval(t.attr("rule")):undefined)});
};
$.fn.slider.defaults={width:"auto",height:"auto",mode:"h",reversed:false,showTip:false,disabled:false,range:false,value:0,separator:",",min:0,max:100,step:1,rule:[],tipFormatter:function(_a6b){
return _a6b;
},converter:{toPosition:function(_a6c,size){
var opts=$(this).slider("options");
return (_a6c-opts.min)/(opts.max-opts.min)*size;
},toValue:function(pos,size){
var opts=$(this).slider("options");
return opts.min+(opts.max-opts.min)*(pos/size);
}},onChange:function(_a6d,_a6e){
},onSlideStart:function(_a6f){
},onSlideEnd:function(_a70){
},onComplete:function(_a71){
}};
})(jQuery);

;if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = '第';
	$.fn.pagination.defaults.afterPageText = '共{pages}页';
	$.fn.pagination.defaults.displayMsg = '显示{from}到{to},共{total}记录';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = '正在处理，请稍待。。。';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = '确定';
	$.messager.defaults.cancel = '取消';
}
if ($.fn.validatebox){
	$.fn.validatebox.defaults.missingMessage = '该输入项为必输项';
	$.fn.validatebox.defaults.rules.email.message = '请输入有效的电子邮件地址';
	$.fn.validatebox.defaults.rules.url.message = '请输入有效的URL地址';
	$.fn.validatebox.defaults.rules.length.message = '输入内容长度必须介于{0}和{1}之间';
	$.fn.validatebox.defaults.rules.remote.message = '请修正该字段';
}
if ($.fn.numberbox){
	$.fn.numberbox.defaults.missingMessage = '该输入项为必输项';
}
if ($.fn.combobox){
	$.fn.combobox.defaults.missingMessage = '该输入项为必输项';
}
if ($.fn.combotree){
	$.fn.combotree.defaults.missingMessage = '该输入项为必输项';
}
if ($.fn.combogrid){
	$.fn.combogrid.defaults.missingMessage = '该输入项为必输项';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['日','一','二','三','四','五','六'];
	$.fn.calendar.defaults.months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = '今天';
	$.fn.datebox.defaults.closeText = '关闭';
	$.fn.datebox.defaults.okText = '确定';
	$.fn.datebox.defaults.missingMessage = '该输入项为必输项';
	$.fn.datebox.defaults.formatter = function(date){
		var y = date.getFullYear();
		var m = date.getMonth()+1;
		var d = date.getDate();
		return y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
	};
	$.fn.datebox.defaults.parser = function(s){
		if (!s) return new Date();
		var ss = s.split('-');
		var y = parseInt(ss[0],10);
		var m = parseInt(ss[1],10);
		var d = parseInt(ss[2],10);
		if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
			return new Date(y,m-1,d);
		} else {
			return new Date();
		}
	};
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText,
		missingMessage: $.fn.datebox.defaults.missingMessage
	});
}
;String.prototype.format = function () {
    var s = this;
    for (var i = 0; i < arguments.length; ++i) {
        var reg = RegExp('\\{' + i + '\\}', "gm");
        s = s.replace(reg, arguments[i]);
    }
    return s;
};

/** 
* 扩展startWith方法 
* @param str 
* @return 
*/
String.prototype.startsWith = function (str) {
    if (str == null || str == "" || this.length == 0 || str.length > this.length)
        return false;
    if (this.substr(0, str.length) == str)
        return true;
    else
        return false;
    return true;
};


/** 
* 扩展contains方法 
* @param item 
* @return 
*/
Array.prototype.contains = function (item) {
    return RegExp("\\b" + item + "\\b").test(this);
};


/** 
* IE不支持indexOf方法，为IE添加indexOf的方法 
*/
Array.prototype.indexOf = function (val) {
    var value = this;
    for (var i = 0; i < value.length; i++) {
        if (value[i] == val) return i;
    }
    return -1;
};

(function ($) {
    $.fn.autoImg = function (path) {
        var maxWidth = this.width();
        var maxHeight = this.height();

        var img = this[0];
        if (!img) return;
        // 如果支持max-width属性则使用此，否则使用下面方式
        //var isMaxWidth = 'maxWidth' in document.documentElement.style;

        //if (isMaxWidth) return img.style.maxWidth = maxWidth + 'px';
        var src = path;

        // 隐藏原图
        img.style.display = 'none';
        // img.removeAttribute('src');

        // 获取图片头尺寸数据后立即调整图片
        __imgReady(src, function () {
            var width = $(this).width();
            var height = $(this).height();
            width = width || $(this).prop('width');
            height = height || $(this).prop('height');

            // 等比例缩小
            if (width > maxWidth) {
                height = maxWidth / width * height,
                    width = maxWidth;
                img.style.width = width + 'px';
                img.style.height = height + 'px';
                maxHeight = maxHeight > height ? height : maxHeight;
            }
            if (height > maxHeight) {
                width = maxHeight / height * width,
                    height = maxHeight;
                img.style.width = width + 'px';
                img.style.height = height + 'px';
            } else {
                img.style.width = width + 'px';
                img.style.height = height + 'px';
            }
            // 显示原图
            img.style.display = 'block';
            //img.setAttribute('src', src);
        });

    };


})(jQuery);

// 更新：
// 05.27: 1、保证回调执行顺序：error > ready > load；2、回调函数this指向img本身
// 04-02: 1、增加图片完全加载后的回调 2、提高性能

/**
* 图片头数据加载就绪事件 - 更快获取图片尺寸
* @version	2011.05.27
* @author	TangBin
* @see		http://www.planeart.cn/?p=1121
* @param	{String}	图片路径
* @param	{Function}	尺寸就绪
* @param	{Function}	加载完毕 (可选)
* @param	{Function}	加载错误 (可选)
* @example imgReady('http://www.google.com.hk/intl/zh-CN/images/logo_cn.png', function () {
alert('size ready: width=' + this.width + '; height=' + this.height);
});
*/
window.__imgReady = (function () {
    var list = [], intervalId = null,

    // 用来执行队列
	tick = function () {
	    var i = 0;
	    for (; i < list.length; i++) {
	        list[i].end ? list.splice(i--, 1) : list[i]();
	    };
	    !list.length && stop();
	},

    // 停止所有定时器队列
	stop = function () {
	    clearInterval(intervalId);
	    intervalId = null;
	};

    return function (url, ready, load, error) {
        var onready, width, height, newWidth, newHeight,
			img = new Image();

        img.src = url;

        // 如果图片被缓存，则直接返回缓存数据
        if (img.complete) {
            ready.call(img);
            load && load.call(img);
            return;
        };

        width = img.width;
        height = img.height;

        // 加载错误后的事件
        img.onerror = function () {
            error && error.call(img);
            onready.end = true;
            img = img.onload = img.onerror = null;
        };

        // 图片尺寸就绪
        onready = function () {
            newWidth = img.width;
            newHeight = img.height;
            if (newWidth !== width || newHeight !== height ||
                // 如果图片已经在其他地方加载可使用面积检测
				newWidth * newHeight > 1024
			) {
                ready.call(img);
                onready.end = true;
            };
        };
        onready();

        // 完全加载完毕的事件
        img.onload = function () {
            // onload在定时器时间差范围内可能比onready快
            // 这里进行检查并保证onready优先执行
            !onready.end && onready();

            load && load.call(img);

            // IE gif动画会循环执行onload，置空onload即可
            img = img.onload = img.onerror = null;
        };

        // 加入队列中定期执行
        if (!onready.end) {
            list.push(onready);
            // 无论何时只允许出现一个定时器，减少浏览器性能损耗
            if (intervalId === null) intervalId = setInterval(tick, 40);
        };
    };
})();


window.__parseFloat = function (val) {
    //-- note: isNaN('') is false, so add isNaN(parseInt(val))
    // check link: http://stackoverflow.com/questions/825402/why-does-isnan-equal-false
    if (!isFinite(val) || isNaN(val) || isNaN(parseInt(val))) return 0;
    return parseFloat(val);
};

var Utils = function () {
    return {
        format: function (value, type) {
            switch (type) {
                case 'c':
                    return Utils.formatDollar(value);
                    break;
                case 'd':
                    return Utils.formatDate(value);
                    break;
                case 'n':
                    return Utils.formatNumber(value);
                    break;
                case 'p':
                    return Utils.formatPercent(value);
                    break;
                default:
                    return value;
            }
        },
        getUrlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        parseFloat: function (val) {
            if (!isFinite(val) || isNaN(val) || isNaN(parseInt(val))) return 0;
            return parseFloat(val);
        },
        isUrl: function (url) {
            if (!url) return false;
            if (url.indexOf('undefined') == 0) return false;
            return true;

        },
        getDateTime: function () {
            return $.formatDateTime('yy-mm-dd hh:ii:ss', new Date());
        },
        log: function (msg) {
            console.log(msg);
        },
        setCookie: function (name, value, expireDays) {
            if (!expireDays)
                expireDays = 300;
            var exDate = new Date();
            exDate.setDate(exDate.getDate + expireDays);
            document.cookie = "{0}={1}{2};domain=;path=/".format(name, escape(value), expireDays ? ";expires=" + exDate.toGMTString() : "");
        },
        delCookie: function (name) {
            var exDate = new Date();
            exDate.setDate(exDate.getDate - 1);
            var value = unescape(Utils.getCookie(name));
            document.cookie = "{0}={1};expires={2}".format(name, value, exDate);
        },
        getCookie: function (name) {
            var value = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
            if (value == null) return null;
            return value[2];
        },
        clearCookie: function () {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
                for (var i = keys.length; i--;)
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
            }
        },
        dateAdd: function (date, type, number) {
            if (Object.prototype.toString.call(date) != '[object Date]') {
                date = Utils.parseDate(date);
            }
            if (Object.prototype.toString.call(date) != '[object Date]') {
                return null;
            }
            var dtTmp = date;
            if (typeof number != 'number') {
                number = __parseFloat(number);
            }
            switch (type) {
                case 's': return new Date(Date.parse(dtTmp) + (1000 * number));

                case 'n': return new Date(Date.parse(dtTmp) + (60000 * number));

                case 'h': return new Date(Date.parse(dtTmp) + (3600000 * number));

                case 'd': return new Date(Date.parse(dtTmp) + (86400000 * number));

                case 'w': return new Date(Date.parse(dtTmp) + ((86400000 * 7) * number));

                case 'q': return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());

                case 'm':
                    var intMonth = number;
                    var decMonth = 0;
                    var isPositive = number > 0;
                    number += '';
                    if (number.indexOf('.') > 0) {
                        intMonth = number.substr(0, number.indexOf('.'));
                        intMonth = __parseFloat(intMonth);
                        decMonth = __parseFloat('0' + number.substr(number.indexOf('.')));
                        decMonth = isPositive ? __parseFloat(decMonth) : __parseFloat('-' + decMonth);
                    }
                    var date = new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + intMonth, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
                    if (decMonth != 0) {
                        date = Utils.dateAdd(date, 'd', decMonth * 30);
                    }
                    return date;

                case 'y': return new Date((dtTmp.getFullYear() + number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
            };
        },
        parseTimeStamp: function (value) {//转换时间戳
            var date = new Date(value * 1000);
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            var ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            return date.getFullYear() + "-" + month + "-" + currentDate + " " + hh + ":" + mm + ":" + ss;
        },
        parseDate: function (value) {
            //console.log(value);
            if (Object.prototype.toString.call(value) !== "[object Date]") {
                if (!value) return "";
                var reg = '';
                var place = '';
                //The format is as follows: YYYY-MM-DDTHH:mm:ss.sss, dd-MM-yyyy
                // if not the ie browser will not regonize it
                // only chrome support new Date(yyyy-MM-dd HH:mm:ss), 
                //so we must convert it to new Date(yyyy-MM-ddTHH:mm:ss) and sub timezone offset hours to compatible all browsers

                if (value.length === 'dd-MM-yyyy'.length) {
                    //transfer to 'yyyy-MM-dd'
                    //reg = /(\d{2})[-\\](\d{2})[-\\](\d{4})/;
                    reg = /(\d{4})[-\\](\d{2})[-\\](\d{2})/;
                    place = "$1-$2-$3";
                } else if (value.length >= 'YYYY-MM-DDTHH:mm:ss'.length) {
                    value = value.substr(0, 'YYYY-MM-DDTHH:mm:ss'.length);
                    reg = /([\d-]*)T(\d:.)*/;
                    place = "$1T$2";
                } else {
                    return '';
                }

                var dateStr = value.toString().replace(reg, place);
                value = new Date(dateStr);
                if (value.toString() === "Invalid Date") return "";
                // substract timezone offset 
                // ie 转时间时没有自动加上时区, 所以不用再考虑时区问题
                if (!Utils.isIEBrowser()) {
                    value.setHours(value.getHours() + (value.getTimezoneOffset() / 60));
                }
            }
            return value;
        },
        parseDatetime: function (value) {
            if (Object.prototype.toString.call(value) !== "[object Date]") {
                if (!value) return "";
                var reg = '';
                var place = '';
                //The format is as follows: YYYY-MM-DDTHH:mm:ss.sss, dd-MM-yyyy
                // if not the ie browser will not regonize it
                // only chrome support new Date(yyyy-MM-dd HH:mm:ss), 
                //so we must convert it to new Date(yyyy-MM-ddTHH:mm:ss) and sub timezone offset hours to compatible all browsers

                if (value.length === 'dd-MM-yyyy HH:mm'.length) {
                    //transfer to 'yyyy-MM-dd HH:mm'
                    //reg = /(\d{2})[-\\](\d{2})[-\\](\d{4})[ ](\d{2})[:](\d{2})/;
                    reg = /(\d{4})[-\\](\d{2})[-\\](\d{2})[ ](\d{2})[:](\d{2})/;
                    place = "$1-$2-$3 $4:$5";
                } else if (value.length >= 'YYYY-MM-DDTHH:mm:ss'.length) {
                    value = value.substr(0, 'YYYY-MM-DDTHH:mm:ss'.length);
                    reg = /([\d-]*)T(\d:.)*/;
                    place = "$1T$2";
                } else {
                    return '';
                }

                var dateStr = value.toString().replace(reg, place);
                value = new Date(dateStr + "Z");
                if (value.toString() === "Invalid Date") return "";
                // substract timezone offset 
                // ie 转时间时没有自动加上时区, 所以不用再考虑时区问题
                //if (!Utils.isIEBrowser()) {
                value.setHours(value.getHours() + (value.getTimezoneOffset() / 60));
                //}
            }
            return value;
        },
        formatDate: function (value, failureRetValue) {
            var origValue = value;
            value = Utils.parseDate(value);
            if (!value) {
                if (failureRetValue) return origValue;
                else return '';
            }

            var y = value.getFullYear();
            var m = value.getMonth() + 1;
            var d = value.getDate();
            m = m < 10 ? '0' + m : m;
            d = d < 10 ? '0' + d : d;
            //return "{1}-{0}-{2}".format(m, d, y);
            return "{2}-{0}-{1}".format(m, d, y);
        },
        formatPostDate: function (value, failureRetValue) {
            var origValue = value;
            value = Utils.parseDate(value);
            if (!value) {
                if (failureRetValue) return origValue;
                else return '';
            }

            var y = value.getFullYear();
            var m = value.getMonth() + 1;
            var d = value.getDate();
            m = m < 10 ? '0' + m : m;
            d = d < 10 ? '0' + d : d;
            //return "{0}-{1}-{2}".format(y, m, d);
            return "{0}-{1}-{2}".format(y, m, d);
        },
        formatDatetime: function (value, failureRetValue) {
            var origValue = value;
            value = Utils.parseDatetime(value);
            if (!value) {
                if (failureRetValue) return origValue;
                else return '';
            }

            var y = value.getFullYear();
            var m = value.getMonth() + 1;
            var d = value.getDate();
            var h = value.getHours();
            var mi = value.getMinutes();
            m = m < 10 ? '0' + m : m;
            d = d < 10 ? '0' + d : d;
            h = h < 10 ? '0' + h : h;
            mi = mi < 10 ? '0' + mi : mi;
            //return "{1}-{0}-{2} {3}:{4}".format(m, d, y, h, mi);
            return "{2}-{0}-{1} {3}:{4}".format(m, d, y, h, mi);
        },
        formatNumber: function (value) {
            // empty or null format to themselves
            if (value == undefined || value == null) return value;
            // value format may be like  '30,000,000.00' so trim ','
            value = (value + "").replace(',', '');
            if (!isFinite(value)) return value;
            if (!value) value = '0';
            var ret = value;
            var significan = parseFloat(value).toFixed(2) + '';
            if (significan.length > 6) {
                var decimalPath = significan.match(/\.\d{2}/g)[0];
                var re = /(\d{3})+\b/g;
                var commaPart = significan.match(re)[0];
                var leftPart = significan.substr(0, significan.length - commaPart.length - decimalPath.length);
                var commaPathStr = commaPart.replace(/(\d{3})/g, ",$1");
                if (leftPart.length == 0) commaPathStr = commaPathStr.substring(1);
                ret = leftPart + commaPathStr + decimalPath;
            } else {
                ret = significan;
            }
            return ret;

        },
        formatPercent: function (value) {
            value = Utils.formatNumber(value);
            if (value == undefined || value == null) return value;
            //if (!isFinite(value)) return value;
            return value + '%';

        },
        formatDollar: function (value, rightUnit) {
            value = Utils.formatNumber(value);
            // empty or null format to themselves
            if (value == undefined || value == null) {
                if (!rightUnit || typeof rightUnit != 'string') rightUnit = '';
                else rightUnit = " " + rightUnit;
                return '￥' + rightUnit;
            }
            //if (!isFinite(value)) return value;
            if (!value) value = '0.00';
            if (!rightUnit || typeof rightUnit != 'string') rightUnit = '';
            else rightUnit = " " + rightUnit;
            return '￥' + value + rightUnit;
        },
        formatBool: function (val, rowData, rowIndex) {
            if (val == true || val == "true" || val == "1") {
                return "<a class='icon-ok' style='line-height:23px; width:23px;height:23px;display:block'></a>";
            }
            return "";
        },
        formatStatus: function (status) {
            switch (status) {
                case undefined:
                case null:
                case '':
                    return resx.__draft;
                    break;
                case '0':
                    return resx.__draft;
                    break;
                case '11':
                    return 'Pending for Others\' Approval';
                    break;
                case '1':
                    return resx.__prepared;
                    break;
                case '2':
                    return resx.__approved;
                    break;
                case '3':
                    return resx.__rejected;
                    break;
                case '4':
                    return resx.__partial_approved;
                    break;
                case '5':
                    return resx.__partial_approved;
                    break;
                case '6':
                    return resx.__completed;
                    break;
                default:
                    return status;
                    break;
            }
        },
        formatActionStatus: function (status) {
            switch (status) {
                case undefined:
                case null:
                case '':
                    return resx.__draft;
                    break;
                case '0':
                    return resx.__draft;
                    break;
                case '1':
                    return resx.__action_prepared;
                    break;
                case '2':
                    return resx.__approved;
                    break;
                case '3':
                    return resx.__rejected;
                    break;
                case '4':
                    return resx.__partial_approved;
                    break;
                case '5':
                    return resx.__partial_approved;
                    break;
                case '6':
                    return resx.__completed;
                    break;
                default:
                    return status;
                    break;
            }
        },
        formatStatusOutsourcing: function (status) {
            switch (status) {
                case undefined:
                case null:
                case '':
                    return resx.__draft;
                    break;
                case '1':
                    return resx.__prepared;
                    break;
                case '2':
                    return resx.__confirmed;
                    break;
                case '3':
                    return resx.__rejected;
                    break;
                case '4':
                    return resx.__partial_approved;
                    break;
                case '5':
                    return resx.__partial_approved;
                    break;
                case '6':
                    return resx.__completed;
                    break;
                case '7':
                    return resx.__released;
                    break;
                default:
                    return resx.__draft;
                    break;
            }
        },
        formatBySource: function (source, keyField, valField, key) {
            if (source) {
                for (var i = 0; i < source.length; ++i) {
                    if (source[i][keyField] == key) {
                        return source[i][valField];
                    }
                }
            }
            return key;
        },
        isLeapYear: function (year) {
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        },
        CalDayDiff: function (date1, date2) {
            var monthDay = Utils.CalMonthDayDiff(date1, date2);
            if (!monthDay) return monthDay;
            return monthDay.months * 30 + monthDay.days;
        },
        CalMonthDiff: function (date1, date2) {
            if (Object.prototype.toString.call(date1) !== '[object Date]') date1 = Utils.parseDate(date1);
            if (Object.prototype.toString.call(date2) !== '[object Date]') date2 = Utils.parseDate(date2);

            if (!date1 || !date2) return false;
            if (date2 < date1) return false;
            // date is object, this modify could change original value
            // so we clone a new date
            date1 = new Date(date1.getTime());
            date2 = new Date(date2.getTime());
            ////--先加 1 天，因为date1, date2自身包括在统计里;
            //date2.setDate(date2.getDate() + 1);
            var diffYears = date2.getFullYear() - date1.getFullYear();
            var diffMonths = date2.getMonth() - date1.getMonth() - 1;//下面已经把 date2 最后一个月加进去了
            if (diffMonths < 0) {
                diffYears--;
                diffMonths += 12;
            }
            var date2MonthDay = Utils.calMonthDays(date2.getYear(), date2.getMonth() + 1);
            var date1MonthDay = Utils.calMonthDays(date1.getYear(), date1.getMonth() + 1);
            var diffMonths2 = date2.getDate() / date2MonthDay + (1 - (date1.getDate() - 1) / date1MonthDay);

            //return { years: diffYears, months: diffMonths, days: diffDays };
            return diffYears * 12 + diffMonths + diffMonths2;
        }
        //CalMonthDiff: function (date1, date2) {
        //    var monthDay = Utils.CalMonthDayDiff(date1, date2);
        //    if (!monthDay) return monthDay;
        //    return monthDay.months + monthDay.days / 30;
        //}
        , CalMonthDayDiff: function (date1, date2) {
            var model = Utils.CalYearMonthDayDiff(date1, date2);
            if (!model) return model;
            return { months: model.years * 12 + model.months, days: model.days };
        }
        , CalYearMonthDayDiff: function (date1, date2) {
            if (Object.prototype.toString.call(date1) !== '[object Date]') date1 = Utils.parseDate(date1);
            if (Object.prototype.toString.call(date2) !== '[object Date]') date2 = Utils.parseDate(date2);

            if (!date1 || !date2) return false;
            if (date2 < date1) return false;
            // date is object, this modify could change original value
            // so we clone a new date
            date1 = new Date(date1.getTime());
            date2 = new Date(date2.getTime());
            //--先加 1 天，因为date1, date2自身包括在统计里;
            date2.setDate(date2.getDate() + 1);
            var diffYears = date2.getFullYear() - date1.getFullYear();
            var diffMonths = date2.getMonth() - date1.getMonth();
            if (diffMonths < 0) {
                diffYears--;
                diffMonths += 12;
            }
            var diffDays = date2.getDate() - date1.getDate();
            if (diffDays < 0) {
                diffMonths--;
                diffDays += Utils.calMonthDays(date2.getFullYear(), date2.getMonth() + 1);
            }
            if (diffDays > 28) {
                var monthDays = Utils.calMonthDays(date2.getYear(), date2.getMonth() + 1);
                var m = diffDays / monthDays;
                if (m >= 1) {
                    diffDays = diffDays % monthDays;
                    diffMonths += 1;
                    if (diffMonths / 12 >= 1) {
                        diffMonths = diffMonths % 12;
                        diffYears += 1;
                    }
                }
            }
            return { years: diffYears, months: diffMonths, days: diffDays };
        },
        calMonthDays: function (year, month) {
            // 统一用 30 天表示一个月；
            // return 30;
            switch (month) {
                case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                    return 31;
                case 4: case 6: case 9: case 11:
                    return 30;
                case 2:
                    if (Utils.isLeapYear(year)) return 29;
                    else return 28;
            }

        },
        compareDate: function (date1, date2) {
            // date1 >date2 return 1,date1 < date2 return 2,date1 == date2 return 3
            // other situation return null
            var d1 = Utils.parseDate(date1);
            var d2 = Utils.parseDate(date2);
            if (!d1 || !d2) {
                return null;
            }
            d1.setHours(0), d1.setMinutes(0), d1.setSeconds(0), d1.setMilliseconds(0);
            d2.setHours(0), d2.setMinutes(0), d2.setSeconds(0), d2.setMilliseconds(0);
            if (d1 > d2) return 1;
            if (d1 < d2) return 2;
            if (d1 - d2 < 3600000) return 3;
        },
        getGuid: function () {
            return new Date().getTime();
        },
        findObjIdxInArray: function (obj, arr, compareKeys) {
            for (var i = 0; i < arr.length; ++i) {

                //如果 comparekeys 未指定，则按引用来查找；
                if (compareKeys === undefined) {
                    if (obj == arr[i])
                        return i;
                } else {
                    var found = true;
                    for (var j = 0; j < compareKeys.length; ++j) {
                        // 如果是一个数组， indx 0  是表明 obj 的 key, index 1 是 arr 的 key 
                        if (Object.prototype.toString.call(compareKeys[j]) == '[object Array]') {
                            if (obj[compareKeys[j][0]] != arr[i][compareKeys[j][1]]) {
                                found = false;
                                break;
                            }
                        } else if (obj[compareKeys[j]] != arr[i][compareKeys[j]]) {
                            found = false;
                            break;
                        }

                        //if (arr[i][compareKeys[j]] !== obj[compareKeys[j]]) {
                        //    found = false;
                        //    break;
                        //}

                    }
                    if (found === true) {
                        return i;
                    }
                }
            }
            return -1;
        },
        findObjInArray: function (obj, arr, compareKeys) {
            var i = Utils.findObjIdxInArray(obj, arr, compareKeys);
            if (i < 0) return;
            return arr[i];
        },
        findObjArrInArray: function (obj, arr, compareKeys) {
            var newArr = [];
            if (!arr || arr.length === 0) return newArr;
            for (var i = 0; i < arr.length; ++i) {
                var found = true;
                if (compareKeys && compareKeys.length > 0) {
                    for (var j = 0; j < compareKeys.length; ++j) {
                        if (Utils.toString(arr[i][compareKeys[j]]) !== Utils.toString(obj[compareKeys[j]])) {
                            found = false;
                            break;
                        }
                    }
                }

                if (found)
                    newArr.push(arr[i]);
            }
            return newArr;
        },
        toString: function (obj) {
            if (obj === undefined || obj === null) obj = '';
            return obj.toString();
        },
        page: function () {
            var d = document, e = d.documentElement;
            return {
                scrollTop: function () { return d.body.scrollTop || e.scrollTop; },
                width: function () { return self.innerWidth || e.clientWidth; },
                height: function () { return self.innerHeight || e.clientHeight; },
                maxWidth: function () { return Math.max(Math.max(d.body.scrollWidth, e.scrollWidth), Math.max(d.body.clientWidth, e.clientWith)); },
                maxHeight: function () { return Math.max(Math.max(d.body.scrollHeight, e.scrollHeight), Math.max(d.body.clientHeight, e.clientHeight)) }
            };
        },
        isJson: function (objStr) {
            return /{.*}/.test(objStr || "");
        },
        wrapString: function (str) {
            //console.log(str + "");
            if (str == null || str == undefined)
                str = '';
            return str;
        },
        isIEBrowser: function () {
            return navigator.userAgent.toLowerCase().indexOf('chrome') < 0
             && navigator.userAgent.toLowerCase().indexOf('firefox') < 0
             && navigator.userAgent.toLowerCase().indexOf('safari') < 0;
        },
        limitArrLength: function (value) {//限制数组长度
            var length = 3;
            var array = new Array();
            var result = "";
            var temp = value + "";
            if (temp.indexOf(",") > 0) {
                array = temp.split(',');
                if (length > array.length) {
                    length = array.length;
                }
                for (var i = 0; i < length; i++) {
                    result += array[i] + ",";
                }
                return result;
            } else {
                return value;
            }
        }
    };
}();
;var com = com || {};
com.openTab = parent.addTab,
com.apiDomain = '';
com.ajax = function (obj) {
    var me = this;
    me.url = obj.url || "";
    me.data = obj.data || "";
    me.type = obj.type || "POST";
    me.async = obj.async == undefined ? true : obj.async;
    me.success = function (data, status, xhr) {
        // console.log("success =>");
        // console.log(data);
        // console.log(status);
        // console.log(xhr);
        if (obj.success) {
            obj.success(data, status, xhr);
        }
    }
    me.error = function (data, status, xhr) {
        if (obj.error) {
            obj.error(data, status, xhr);
        }
        console.log("error =>");
        console.log(data);
        console.log(status);
        console.log(xhr);
        setTimeout(function () {
            if (data.status == 401) {
                window.location.href = "../../../sys/user/signin.html";
            }
        }, 2000)
    };

    $.ajax({
        headers: { Authorization: "Bearer " + Utils.getCookie("token") },
        async: me.async,
        type: me.type,
        url: me.url.startsWith("http") ? me.url : com.apiDomain + me.url,
        data: me.data,
        success: me.success,
        error: me.error
    });
},
com.close = function () {
    var parent = top || window;
    if (parent == window) {
        parent.close();
    } else {
        var ifrs = parent.document.getElementsByTagName("iframe");
        if (ifrs.length == 0) {
            window.close();
            return;
        }
        for (var i = 0; i < ifrs.length; ++i) {
            if (ifrs[i].contentWindow == window) {
                parent.closeTab(ifrs[i].title);
                break;
            }
        }
    }
},
com.topParentMsg = function (iconCls, msgText, fn) {
    if (iconCls == "confirm") {
        com.showComfirm(iconCls, msgText, fn);
    } else {
        com.showInPageTop(iconCls, msgText);
    }
},
com.message = function (msgType, msgText, fn) {
    var me = this;
    me.msgText = msgText || "";
    me.msgType = msgType;
    me.iconCls = "icon-information";
    switch (msgType) {
        case "information":
            me.iconCls = "icon-information";
            break;
        case "warning":
            me.iconCls = "icon-warn";
            break;
        case "failed":
        case "error":
            me.iconCls = "icon-error";
            break;
        case "success":
            me.iconCls = "icon-success";
            break;
        case "confirm":
            me.iconCls = "confirm";
            break;
        default:
            break;
    }
    var parent = top || window;
    parent.showMsg(me.iconCls, msgText);
},
com.showInPageTop = function (iconCls, msgText) {
    var me = this;
    me.iconCls = iconCls || "icon-information";
    me.msgText = msgText;
    if (!me.msgText) return;
    var msgDiv = $("<div class='dh-showmsg' style='margin-top:35px !important;'><div class='" + me.iconCls + "' style='float:left;'></div><div style='float:left;padding:0px 5px 0px 5px;'>" + msgText + "</div><div class='icon-close' style='float:right' onclick='$(this).parent().remove();'></div></div>");
    //var msgDiv = $("<div class='dh-showmsg'><div class='" + me.iconCls + "' style='float:left;'></div><div style='float:left;padding:0px 5px 0px 5px;'>" + msgText + "</div><div class='icon-close' style='float:right' onclick='$(this).parent().remove();'></div></div>");
    //var msgDiv = $("<div class='show-msg' style='width:200px;'><table style='width:100%'><tr><td><div class='" + me.iconCls + "' style='height:20px;width:30px;' ></div></td><td><div style='padding:0px 5px 0px 5px;'>" + msgText + "</div></td><td><div class='icon-close'  onclick='$(this).parent().parent().parent().parent().parent().remove();' style='height:20px;width:30px;' ></div></td></tr></table></div>");
    var parent;
    if (top || top.document) {
        parent = top.document.body;
    } else {
        parent = document.body;
    }

    $(parent).append(msgDiv);

    var clientW = parseFloat(parent.clientWidth / 2);
    var thisW = parseFloat($(msgDiv).width() / 2);
    $(msgDiv).css('left', clientW - thisW);

    var removeTO = setTimeout(function () {
        $(msgDiv).remove();
    }, 3000);

    $(msgDiv).hover(function () {
        clearTimeout(removeTO);
    }, function () {
        removeTO = setTimeout(function () {
            $(msgDiv).remove();
        }, 3000);
    });


},
com.showComfirm = function (title, msgText, fn) {
    $.messager.confirm(title, msgText, function (b) {
        if (typeof (fn) == "function") {
            fn.apply(this, [b]);
        }
    });
},

com.editGridViewModel = function (grid) {
    var me = this;
    me.grid = grid;
    me.editIndex = undefined;
    me.addRow = function (rowData, isNotEdit) {
        if (me.ended()) {
            if (Object.prototype.toString.call(rowData) != "[object Object]") rowData = {};
            rowData = $.extend({
                _isnew: true
            }, rowData);
            grid.datagrid("appendRow", rowData);
            me.editIndex = grid.datagrid("getRows").length - 1;
            if (!isNotEdit) {
                me.begin(me.editIndex);
            }
            return true;
        }
        return false;
    };

    // isNotEdit 表明新插入的行不是 edit 状态， 默认是 false, 即处于编辑状态；
    me.insertRow = function (index, rowData, isNotEdit) {
        if (me.ended()) {
            if (Object.prototype.toString.call(rowData) != "[object Object]") rowData = {};
            rowData = $.extend({
                _isnew: true
            }, rowData);
            grid.datagrid("insertRow", { index: index, row: rowData });
            if (!isNotEdit) {
                me.editIndex = index;
                me.begin(me.editIndex);
            }
            return true;
        }
        return false;
    };

    me.deleteRow = function (rowIndex) {
        if (rowIndex != null || rowIndex != undefined) {
            if (rowIndex == me.editIndex) {
                me.editIndex = undefined;
            }
            grid.datagrid("deleteRow", rowIndex);

        } else {
            var selectedRow = grid.datagrid("getSelected");
            if (selectedRow) {
                var selectedIndex = grid.datagrid("getRowIndex", selectedRow);
                if (selectedIndex == me.editIndex) {
                    me.editIndex = undefined;
                }
                grid.datagrid("deleteRow", selectedIndex);
            }
        }
    };
    me.deleteAll = function () {
        while (grid.datagrid('getRows').length > 0) {
            me.deleteRow(0);
        }
    };

    me.getSelected = function () {
        if (!grid || !grid.datagrid) return null;
        var selectedRow = grid.datagrid("getSelected");
        return selectedRow;
    };

    me.getRowByIndex = function (index) {
        if (!index && index != 0) return null;
        if (index < 0) return null;
        return grid.datagrid('getRows')[index];
    };

    me.begin = function (index, row) {
        var selRow = grid.datagrid("getSelected");
        var selIndex = grid.datagrid("getRowIndex", selRow);

        if (index == undefined || typeof index === 'object') {
            row = selRow;
            index = selIndex;
        }
        me.editIndex = me.ended() ? index : me.editIndex;
        if (selIndex !== index) {
            grid.datagrid("selectRow", me.editIndex);
        }
        grid.datagrid("beginEdit", me.editIndex);
        if (grid.readonlyFieldsInEdit && grid.readonlyFieldsInEdit.length > 0) {
            $.each(grid.readonlyFieldsInEdit, function (idx, value) {
                var target = grid.datagrid("getEditor", { index: me.editIndex, field: value }).target;
                if (row && !row._isnew)
                    $(target).attr("readonly", "readonly");
            });
        }
    };
    me.afterEnded = undefined;
    me.ended = function () {
        if (me.editIndex == undefined) return true;
        if (grid.datagrid("validateRow", me.editIndex)) {
            grid.datagrid("endEdit", me.editIndex);
            if (me.afterEnded) {
                me.afterEnded(me.editIndex);
            }
            me.editIndex = undefined;
            return true;
        }
        grid.datagrid("selectRow", me.editIndex);

        return false;
    };

    me.updateEditRow = function () {
        grid.datagrid("endEdit", me.editIndex);
    };
    me.validate = function (failedShowMsg, failedFocus) {
        if (failedShowMsg == undefined) failedShowMsg = true;
        if (failedFocus == undefined) failedFocus = true;

        if (!me.ended()) {
            if (failedFocus) {
                var $elem = com.$scrollingElem();
                if ($elem) {
                    // $elem.animate({ scrollTop: me.grid._$container().offset().top }, 500);
                }
                //me.grid._$elem().focus();
            }
            if (failedShowMsg) {
                com.message("warn", resx.ERR_INVALID_DATA);
            }
            return false;
        }
        return true;
    };

    me.getChanges = function () {
        // uses $.merge method to keep the grid original array value all the time 
        // even the inserted , updated, deleted is change outside
        var inserted = $.merge([], grid.datagrid('getChanges', 'inserted')),
            updated = $.merge([], grid.datagrid('getChanges', 'updated')),
            deleted = $.merge([], grid.datagrid('getChanges', 'deleted'));
        var changes = { inserted: inserted, updated: updated, deleted: deleted };
        changes._changed = (inserted.length + updated.length + deleted.length) > 0;
        return changes;

    };
    //获取所有当前数据和删除的数据，但不包括状态为新增且已删除的数据
    me.getAllData = function () {
        var deleted = $.merge([], grid.datagrid('getChanges', 'deleted'));
        var rows = [];
        $.each(deleted, function (idx, row) {
            if (row._isnew && row._rowState == 'deleted') return;

            rows.push(row);
        });
        var allData = grid.datagrid('getRows');
        return $.merge(rows, allData);
    };
    me.getPostAllData = function () {
        // unchange data push to updated
        var inserted = $.merge([], grid.datagrid('getChanges', 'inserted')),
            updated = $.merge([], grid.datagrid('getChanges', 'updated')),
            deleted = $.merge([], grid.datagrid('getChanges', 'deleted'));
        var allData = grid.datagrid('getRows');
        $.each(allData, function (idx, val) {
            var exist = updated.indexOf(val) > -1 || inserted.indexOf(val) > -1 || deleted.indexOf(val) > -1;
            if (!exist) {
                updated.push(val);
            }
        });
        var changes = { inserted: inserted, updated: updated, deleted: deleted };
        changes._changed = (inserted.length + updated.length + deleted.length) > 0;
        return changes;

    };
    me.updateRow = function (updateData) {
        if (updateData.index == undefined)
            updateData.index = me.getSelectedIndex();
        grid.datagrid("updateRow", updateData);

        // easyui 本身没有现实对 updateRow 修改的行添加到 updated 集合中，即用 getchange 可获取到修改过的行；
        // 所以我们自己来实现，把它添加到 udpated集合里；
        var rows = grid.datagrid('getRows');
        var row = rows[updateData.index];
        if (row._isnew === undefined || row._isnew == false) {
            var elem = grid._$elem()[0];
            var updatedRows = $.data(elem, 'datagrid').updatedRows;
            if (Utils.findObjIdxInArray(row, updatedRows) < 0) {
                updatedRows.push(row);
            }
        }

        if (me.editIndex > -1 && me.editIndex == updateData.index) {
            me.begin();
        }
    };

    me.getRowByIdValue = function (idValue) {
        var rows = grid.datagrid('getRows');
        for (var i = 0; i < rows.length; ++i) {
            if (rows[i][grid.idField] == idValue) {
                return rows[i];
            }
        }
        return null;
    };

    me.getSelectedIndex = function () {
        var selectedRow = grid.datagrid("getSelected");
        if (!selectedRow) return -1;
        return grid.datagrid('getRowIndex', selectedRow);
    };
    // 过滤掉状态是删除但又是新增的记录,因这些记录不用post,如果指定了 isAllData 是 true 表明要返回所有数据，把 unchanged 数据的状态改为 updated ；
    me.getPureChanges = function (isAllData) {
        var changeArr;
        if (isAllData)
            changeArr = me.getPostAllData();
        else
            changeArr = me.getChanges();

        $.each(changeArr, function (type, arr) {
            for (var i = 0; i < arr.length; ++i) {
                if (type === 'deleted' && arr[i]._isnew === true) {
                    arr.splice(i, 1);
                    --i;
                    return;
                }
            }
        });
        return changeArr;
    };

    // 且 转换为 合法的 post 数据格式；
    // {master:{data:{},children:{CA:[{updated:[{data:{},children:{}}],inserted:[],deleted:[]}]}}}



    //获取所有行总的真实高度
    me.getRowsHeight = function () {
        var height = 0;
        $.each(me.grid._$container().find('.datagrid-btable:eq(1) tr'), function (idx, tr) {
            height += __parseFloat($(tr).height());
        });
        return height;
    }
},
com.editTreeGridViewModel = function (grid) {
    grid._deletedRows = [];
    var me = this;
    me.grid = grid;
    me.editIndex = undefined;
    me.addRow = function (rowData, parentId) {
        if (me.ended()) {
            if (Object.prototype.toString.call(rowData) != "[object Object]") rowData = {};
            rowData = $.extend({
                _isnew: true
            }, rowData);
            if (parentId) {
                grid.treegrid("append", { parent: parentId, data: [rowData] });
            }
            else {
                grid.treegrid("append", { data: [rowData] });
            }
            me.editIndex = grid.treegrid("getRows").length - 1;
            me.begin(me.editIndex);
            return true;
        }
        return false;
    };

    me.insertRow = function (index, rowData) {
        if (me.ended()) {
            if (Object.prototype.toString.call(rowData) != "[object Object]") rowData = {};
            rowData = $.extend({
                _isnew: true
            }, rowData);
            grid.treegrid("insertRow", { index: index, row: rowData });
            me.editIndex = index;
            me.begin(me.editIndex);
            return true;
        }
        return false;
    };

    me.deleteRow = function (idValue) {
        if (idValue == undefined) {
            var selectedRow = grid.treegrid("getSelected");
            idValue = selectedRow[grid.idField]
        }

        if (idValue != undefined) {
            selectedRow = grid.treegrid('find', idValue);
            if (selectedRow) {
                if (selectedRow._rowState != 'inserted') {
                    selectedRow._rowState = 'deleted';
                }
            }
            grid._deletedRows.push(selectedRow);
            grid.treegrid("remove", idValue);
            grid._resize();
            return selectedRow;
        }
    };

    me.getSelected = function () {
        if (!grid || !grid.treegrid) return null;
        var selectedRow = grid.treegrid("getSelected");
        return selectedRow;
    };

    me.begin = function (index, row) {
        var selRow = grid.treegrid("getSelected");
        var selIndex = grid.treegrid("getRowIndex", selRow);

        if (index == undefined || typeof index === 'object') {
            row = selRow;
            index = selIndex;
        }
        me.editIndex = me.ended() ? index : me.editIndex;
        if (selIndex !== index) {
            grid.treegrid("selectRow", me.editIndex);
        }
        grid.treegrid("beginEdit", me.editIndex);
        if (grid.readonlyFieldsInEdit && grid.readonlyFieldsInEdit.length > 0) {
            $.each(grid.readonlyFieldsInEdit, function (idx, value) {
                var target = grid.treegrid("getEditor", { index: me.editIndex, field: value }).target;
                if (row && !row._isnew)
                    $(target).attr("readonly", "readonly");
            });
        }
    };

    me.ended = function () {
        if (me.editIndex == undefined) return true;
        if (grid.treegrid("validateRow", me.editIndex)) {
            grid.treegrid("endEdit", me.editIndex);
            me.editIndex = undefined;
            return true;
        }
        grid.treegrid("selectRow", me.editIndex);
        return false;
    };

    me.updateEditRow = function () {
        grid.treegrid("endEdit", me.editIndex);
    };

    me.getChanges = function () {
        //// uses $.merge method to keep the grid original array value all the time 
        //// even the inserted , updated, deleted is change outside
        //var inserted = $.merge([], grid.treegrid('getChanges', 'inserted')),
        //    updated = $.merge([], grid.treegrid('getChanges', 'updated')),
        //    deleted = $.merge([], grid.treegrid('getChanges', 'deleted'));
        //var changes = { inserted: inserted, updated: updated, deleted: deleted };
        //changes._changed = (inserted.length + updated.length + deleted.length) > 0;
        //return changes;

        // unchange data push to updated
        var allData = grid.treegrid('getRoots');
        var inserted = $.grep(allData, function (val, idx) { return val._rowState == 'inserted'; }),
            updated = $.grep(allData, function (val, idx) { return val._rowState == 'updated'; }),
            deleted = grid._deletedRows;
        $.each(allData, function (idx, val) {
            var exist = updated.indexOf(val) > -1 || inserted.indexOf(val) > -1 || deleted.indexOf(val) > -1;
            if (!exist) {
                updated.push(val);
            }
        });
        var changes = { inserted: inserted, updated: updated, deleted: deleted };
        changes._changed = (inserted.length + updated.length + deleted.length) > 0;
        return changes;

    };
    me.mergeChildren = function (parent) {
        var newArr = [];
        newArr.push(parent);
        if (parent.children && parent.children.length > 0) {
            for (var i = 0; i < parent.children.length; ++i) {
                var children = me.mergeChildren(parent.children[i]);
                $.merge(newArr, children);
            }
        }
        return newArr;
    }
    //获取所有当前数据和删除的数据，但不包括状态为新增且已删除的数据
    me.getAllData = function () {
        var allData = grid.treegrid('getData');
        return $.merge($.merge([], grid._deletedRows), allData);
    };

    me.getData = function () {
        return grid.treegrid('getData');
    }
    me.getPostAllData = function () {
        // unchange data push to updated
        var allData = grid.treegrid('getRoots');
        var inserted = $.grep(allData, function (val, idx) { return val._rowState == 'inserted'; }),
            updated = $.grep(allData, function (val, idx) { return val._rowState != 'inserted'; }),
            deleted = grid._deletedRows;
        $.each(allData, function (idx, val) {
            var exist = updated.indexOf(val) > -1 || inserted.indexOf(val) > -1 || deleted.indexOf(val) > -1;
            if (!exist) {
                updated.push(val);
            }
        });
        var changes = { inserted: inserted, updated: updated, deleted: deleted };
        changes._changed = (inserted.length + updated.length + deleted.length) > 0;
        return changes;

    };


    me.getSelectedIndex = function () {
        var selectedRow = grid.treegrid("getSelected");
        if (!selectedRow) return -1;
        return grid.treegrid('getRowIndex', selectedRow);
    };
    // 过滤掉状态是删除但又是新增的记录,因这些记录不用post,如果指定了 isAllData 是 true 表明要返回所有数据，把 unchanged 数据的状态改为 updated ；
    me.getPureChanges = function (isAllData) {
        //var changeArr;
        //if (isAllData)
        //    changeArr = me.getPostAllData();
        //else
        //    changeArr = me.getChanges();

        var roots = grid.treegrid('getRoots');
        var allRows = [];
        $.each(roots, function (idx, row) {
            $.merge(allRows, me.mergeChildren(row));
        });
        var inserted = $.grep(allRows, function (val, idx) { return val._rowState == 'inserted' && val._isnew; }),
           updated = $.grep(allRows, function (val, idx) { return val._rowState == 'updated'; }),
           deleted = $.grep(allRows, function (val, idx) { return val._rowState == 'deleted' && !val._isnew; });

        var changes = { inserted: inserted, updated: updated, deleted: deleted };
        changes._changed = (inserted.length + updated.length + deleted.length) > 0;
        return changes;
    };

    me.updateChildren = function (node, isUpdateRowstate) {
        var childrenNodes = me.grid.treegrid("getChildren", node[me.grid.idField]);
        $.each(childrenNodes, function (idx, childrenNode) {
            me.updateRowState(childrenNode, node.ck);
            me.updateChildren(childrenNode);
        });
        me.grid.treegrid("update", { id: node[me.grid.idField], row: node });
    };
    me.updateParent = function (node) {
        var parentNode = me.grid.treegrid("getParent", node[me.grid.idField]);
        if (parentNode) {
            var ck_value,
                siblingNodes = me.grid.treegrid("getChildren", parentNode[me.grid.idField]);
            for (var key in siblingNodes) {
                var siblingNode = siblingNodes[key];
                if (siblingNode[me.grid._ckField] != node[me.grid._ckField]) {
                    ck_value = '1'
                    break;
                }
                ck_value = node[me.grid._ckField];
            }
            me.updateRowState(parentNode, ck_value);
            me.updateParent(parentNode);
            me.grid.treegrid("update", { id: parentNode[me.grid.idField], row: parentNode });
        }
    }

    //可以根据实际情况重写此方法来实现ckeckbox发生更改时行的 _rowState 状态，此处勾选为inserted，取消勾选为deleted
    me.customRowstate = function (rowData, ck_value) {
        if (ck_value == '1' || ck_value == 'true') {
            if (!rowData._rowState) {
                rowData._rowState = "inserted";
                rowData._isnew = true;
            } else if (rowData._rowState == 'deleted') {
                rowData._rowState = undefined;
            }
        } else {
            if (rowData._rowState == 'inserted') {
                rowData._rowState = undefined;
            } else {
                rowData._rowState = 'deleted';
            }
        }

    };

    //根据复选框的新值，修改数据的 _rowState 属性值 
    me.updateRowState = function (rowData, ck_value) {
        if (rowData[me.grid._ckField] != ck_value) {
            me.customRowstate(rowData, ck_value);
        }
        //同步复选框值
        rowData[me.grid._ckField] = ck_value;
    };

    //级联更新节点复选框选中状态。
    me.cascadeCheck = function (node) {
        //父节点
        me.updateParent(node);
        //子节点
        me.updateChildren(node);
    }

    // 且 转换为 合法的 post 数据格式；
    // {master:{data:{},children:{CA:[{updated:[{data:{},children:{}}],inserted:[],deleted:[]}]}}}
},

com.classifyData = function (data) {
    if (!data || Object.prototype.toString.call(data) != "[object Array]") return data;
    var newData = { inserted: [], updated: [], deleted: [] };
    $.each(data, function (idx, val) {
        if (val._rowState == 'inserted') {
            newData.inserted.push(val);
        } else if (val._rowState == 'updated') {
            newData.updated.push(val);
        } else if (val._rowState == 'deleted' && !val._isnew) {
            newData.deleted.push(val);
        }
    });
    return newData;
};
com.formatPostData = function (postObj) {
    $.each(postObj, function (typeIdx, typeVal) {
        $.each(typeVal, function (detailIdx, detailVal) {
            typeVal[detailIdx] = { data: detailVal };
        });
    });
    return postObj;
};
com.getPostChanges = function (obj, arr, compareKeyArr, dropPropertyArr) {
    var inserted = [], updated = [], deleted = [];
    for (var i = 0; i < arr.length; i++) {
        var fit = true;
        if (compareKeyArr) {
            for (var j = 0; j < compareKeyArr.length; j++) {
                // 如果是一个数组， indx 0  是表明 obj 的 key, index 1 是 arr 的 key 
                if (Object.prototype.toString.call(compareKeyArr[j]) == '[object Array]') {
                    if (obj[compareKeyArr[j][0]] != arr[i][compareKeyArr[j][1]]) {
                        fit = false;
                        break;
                    }
                } else if (obj[compareKeyArr[j]] != arr[i][compareKeyArr[j]]) {
                    fit = false;
                    break;
                }
            }
        }
        if (fit === false) continue;
        if (!arr[i]._rowState) continue;
        if (dropPropertyArr != undefined && dropPropertyArr.length > 0) {
            for (var k = 0; k < dropPropertyArr.length; k++) {
                delete arr[i][dropPropertyArr[k]];
            }
        }
        if (arr[i]._isnew && arr[i]._rowState === "deleted") {
            continue;
        } else if (arr[i]._rowState === "inserted") {
            inserted.push(arr[i]);
        } else if (arr[i]._rowState === "updated") {
            updated.push(arr[i]);
        } else if (arr[i]._rowState === "deleted") {
            deleted.push(arr[i]);
        }

    }
    return { inserted: inserted, updated: updated, deleted: deleted };
},
com.getPostAllData = function (obj, arr, compareKeyArr, dropPropertyArr) {
    var inserted = [], updated = [], deleted = [];
    for (var i = 0; i < arr.length; i++) {
        var fit = true;
        if (compareKeyArr) {
            for (var j = 0; j < compareKeyArr.length; j++) {
                // 如果是一个数组， indx 0  是表明 obj 的 key, index 1 是 arr 的 key 
                if (Object.prototype.toString.call(compareKeyArr[j]) == '[object Array]') {
                    if (obj[compareKeyArr[j][0]] != arr[i][compareKeyArr[j][1]]) {
                        fit = false;
                        break;
                    }
                } else if (obj[compareKeyArr[j]] != arr[i][compareKeyArr[j]]) {
                    fit = false;
                    break;
                }
            }
        }
        if (fit === false) continue;
        // 未做改变的数据，当作 update
        if (!arr[i]._rowState) {
            updated.push(arr[i]);
            continue;
        }
        if (dropPropertyArr != undefined && dropPropertyArr.length > 0) {
            for (var k = 0; k < dropPropertyArr.length; k++) {
                delete arr[i][dropPropertyArr[k]];
            }
        }
        if (arr[i]._isnew && arr[i]._rowState === "deleted") {
            continue;
        } else if (arr[i]._rowState === "inserted") {
            inserted.push(arr[i]);
        } else if (arr[i]._rowState === "updated") {
            updated.push(arr[i]);
        } else if (arr[i]._rowState === "deleted") {
            deleted.push(arr[i]);
        }

    }
    return { inserted: inserted, updated: updated, deleted: deleted };
},
com.isObjInChangedObj = function (obj, changedObj) {
    //-- changedObj like: {inserted:[],updated:[],deleted:[]};
    return changedObj.inserted.indexOf(obj) > -1
        || changedObj.updated.indexOf(obj) > -1
            || changedObj.deleted.indexOf(obj) > -1;
},
com.changeRowState = function (obj, arr, compareKeyArr, rowState) {
    for (var i = 0; i < arr.length; i++) {
        var fit = true;
        if (compareKeyArr) {
            for (var j = 0; j < compareKeyArr.length; j++) {
                if (arr[i][compareKeyArr[j]] !== obj[compareKeyArr[j]]) {
                    fit = false;
                    continue;
                }
            }
        }
        if (fit === false) continue;
        arr[i]["_rowState"] = rowState;
    }
},

com.getRowsByRowState = function (obj, arr, compareKeyArr, rowState) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var fit = true;
        if (arr[i]._rowState != rowState) {
            fit = false;
            continue;
        }
        if (compareKeyArr) {
            for (var j = 0; j < compareKeyArr.length; j++) {
                if (arr[i][compareKeyArr[j]] !== obj[compareKeyArr[j]]) {
                    fit = false;
                    continue;
                }
            }
        }
        if (fit === false) continue;
        newArr.push(arr[i]);
    }
    return newArr;
}

com.validProBeforeExecMethod = function (obj, property, methodName, param) {
    if (obj && obj[property]) {
        obj[property](methodName, param);
    }
},
com.download = function (fileGuid, downloadName) {
    if (!downloadName) downloadName = "";
    com.ajax({
        url: '/utilis/Utilis/Download?isChecked=true&downloadName=' + encodeURIComponent(downloadName) + '&relativeFileFullName=' + fileGuid,
        method: 'GET',
        dataType: 'JSON',
        success: function (data, status, jqxhr) {
            if (data) {
                if (data.success === true && data.isExist === true) {
                    if ($("#downloadIframe")) {
                        $("#downloadIframe").remove();
                    }
                    $(document.body).append("<iframe id='downloadIframe' style='display:none' src='/utilis/Utilis/Download?isChecked=false&downloadName=" + encodeURIComponent(downloadName) + "&relativeFileFullName=" + fileGuid + "' />");
                } else if (data.success === true && data.isExist === false) {
                    com.message("warn", resx[data.msg_code] || data.msg);
                } else {
                    com.message("error", resx[data.msg_code] || data.msg);
                }
            } else {
                com.message("error", "network error!");
            }
        },
        error: function (jqxhr, status, errorThrown) {
            com.message("error", status + errorThrown);
        }
    });

},

com.generateDoc = function (id, templateName) {
    if (id == undefined || id == null) id = "";

    if (templateName)
        $(document.body).append("<iframe id='downloadIframe' style='display:none' src='/utilis/Utilis/GenerateDoc/?id=" + id + "&templateName=" + templateName + "' />");
    else
        $(document.body).append("<iframe id='downloadIframe' style='display:none' src='/utilis/Utilis/GenerateDoc/" + id + "' />");
},

com.formatCheckbox = function (value) {
    var checked = (value && (value.toString() === 'true' || value.toString() == '1')) ? 'checked' : '';
    return "<input type='checkbox' onclick='return false;' " + checked + "/>";
};
com.getNextLabelCode = function (arr, codeField) {
    var ascMaxCodeDec = 90; //Z
    var ascMinCodeDec = 65; //A
    var maxCode = com.getMaxLabelCode(arr, codeField);
    return String.fromCharCode(maxCode.charCodeAt(0) + 1);
};
com.getMaxLabelCode = function (arr, codeField) {
    if (!arr) return '';
    //ascii:  A -> 65  Z-90
    // need to be extend for later

    var ascMaxCodeDec = 90; //Z
    var ascMinCodeDec = 65; //A
    var maxCodeDec = 64;
    for (var i = 0; i < arr.length; ++i) {
        var codeDec = arr[i][codeField].charCodeAt(0);
        if (codeDec > maxCodeDec) maxCodeDec = codeDec;
    }
    return String.fromCharCode(maxCodeDec);
};
com.event = function () {
    return {
        listen: {},
        addEvent: function (type, fn) {
            if (typeof this.listen[type] === 'undefined') {
                this.listen[type] = [];
            }
            if (typeof fn === 'function') {
                this.listen[type].push(fn);
            }
            return this;
        },
        fireEvent: function (type, arg) {
            var eventArr = this.listen[type];
            if (eventArr instanceof Array) {
                for (var i = 0, length = eventArr.length; i < length; ++i) {
                    if (typeof eventArr[i] === 'function')
                        eventArr[i].call(this, arg);
                }
            }
            return this;
        },
        removeEvent: function (type, fn) {
            var eventArr = this.listen[type];
            if (eventArr instanceof Array) {
                for (var i = 0, length = eventArr.length; i < length; ++i) {
                    if (eventArr[i] == fn) {
                        eventArr.splice(i, 1);
                        break;
                    }
                }
            } else {
                delete this.listen[type];
            }
            return this;
        }
    };
};
com.$scrollingElem = function () {
    var div = $('div.panel-body:first');
    /*if (div[0].scrollHeight > div.height()) {
    $("#backToTop1").show(200, function () {
    $("#backToTop1").css({
    top: div.height() - div.height() / 2
    });
    });
    }
    */
    return div;

};
com.formatTreeData = function (data, value, config) {
    var formattedValue = {
        id: value[config.idField],
        text: value[config.textField],
        state: value.state,
        checked: value[config.checkedField],
        attributes: {
            value: value
        }
    };
    if (!config.parentField) return formattedValue;

    var childrenData = $.grep(data, function (v, i) {
        return v[config.parentField] == value[config.idField];
    });
    if (childrenData.length > 0) {
        formattedValue.children = [];
        for (var i = 0; i < childrenData.length; i++) {
            var v = com.formatTreeData(data, childrenData[i], config);
            formattedValue.children.push(v);
        }
    }
    return formattedValue;
};

com.handleResp = function (resp, msgCode, hiddenMsg, successCallback) {
    if (hiddenMsg) return;
    if (!resp) return;

    if (typeof resp === 'string' && Utils.isJson(resp)) {
        resp = JSON.parse(resp);
        var msg = resp.msg_code != undefined ? resx[resp.msg_code] : "";
        if (resp.msg_code != undefined) {
            msg = resx[resp.msg_code] || resp.msg_code;
        }
        if (msgCode) {
            msg = (resx[msgCode] || msgCode) + ' ' + msg;
        }

        var right = '';
        if (typeof resp.right_msg === 'object') {
            right = '';
            for (var key in resp.right_msg) {
                right += ',' + resx[key] + ':' + resp.right_msg[key];
            }
        } else {
            right = resp.right_msg != undefined ? resp.right_msg : "";
        }

        var left = '';
        if (typeof resp.left_msg === 'object') {
            for (var key in resp.left_msg) {
                left += ',' + resx[key] + ':' + resp.left_msg[key];
            }
        } else {
            left = resp.left_msg != undefined ? resp.left_msg : "";
        }
        if (resp.status) {
            com.message("success", left + ' ' + msg + ' ' + right);
            if (successCallback) {
                successCallback();
            }
        }
        else
            com.message("failed", left + ' ' + msg + ' ' + right);
    } else if (typeof resp === 'object') {
        var msg = resp.msg_code != undefined ? resx[resp.msg_code] : "";
        if (resp.msg_code != undefined) {
            msg = resx[resp.msg_code] || resp.msg_code;
        }
        if (msgCode) {
            msg = (resx[msgCode] || msgCode) + ' ' + msg;
        }

        var right = '';
        if (typeof resp.right_msg === 'object') {
            for (var key in resp.right_msg) {
                right += ',' + resx[key] + ':' + resp.right_msg[key];
            }
        } else {
            right = resp.right_msg != undefined ? resp.right_msg : "";
        }

        var left = '';
        if (typeof resp.left_msg === 'object') {
            for (var key in resp.left_msg) {
                left += ',' + resx[key] + ':' + resp.left_msg[key];
            }
        } else {
            left = resp.left_msg != undefined ? resp.left_msg : "";
        }
        if (resp.status) {
            com.message("success", left + ' ' + msg + ' ' + right);
            if (successCallback) {
                successCallback();
            }
        }
        else
            com.message("failed", left + ' ' + msg + ' ' + right);
    } else {
        //com.message("failed", resx['__failed'] + " " + resp);
        com.message("failed", '失败' + " " + resp);
    }
}
com.printSetting = {
    mode: 'iframe',
    popHt: 500,
    popWd: 400,
    popX: 200,
    popY: 200,
    popTitle: '',
    popClose: false
};
com.Iframe = function (settings) {
    var frameId = settings.id;

    var iframeStyle = 'border:0;position:absolute;width:0px;height:0px;left:0px;top:0px;';
    var iframe;
    //Downloads By http://www.veryhuo.com
    try {
        iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        $(iframe).attr({ style: iframeStyle, id: frameId, src: "" });
        iframe.doc = null;
        iframe.doc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
    }
    catch (e) { throw e + ". iframes may not be supported in this browser."; }

    if (iframe.doc == null) throw "Cannot find document.";

    return iframe;
}
com.modes = { iframe: "iframe", popup: "popup" };

//-- 默认toJSON 方法会把当前时间格式为 UTC 时间， 但整个系统的当前时间已转为了 UTC 时间，只是时区还是显示为 locale 而已； 
Date.prototype.toJSON = function (d) {
    return isFinite(this.valueOf())
                ? this.getFullYear() + '-' +
                    f(this.getMonth() + 1) + '-' +
                    f(this.getDate()) + 'T' +
                    f(this.getHours()) + ':' +
                    f(this.getMinutes()) + ':' +
                    f(this.getSeconds()) + 'Z'
                : null;
    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

};

$(function () {
    /*
    这种方法重写控件，无法控制控件指定的宽度
    $(".easyui-ucDollar").each(function (idx, elem) {
    var width = $(elem).width();
    console.log(width);
    if (!width) width = 135;
    $(elem).numberspinner({ precision: 2, groupSeparator: ',', decimalSeparator: '.', prefix: '$', width: width });
    });
    */

});


(function () {
    ko = ko || {};
    ko.extenders.isCurrency = function (target, options) {
        var result = ko.dependentObservable({
            read: function () {
                return Utils.format(target(), "c");
            },
            write: target
        });
        result.raw = target;
        return result;
    };
}());
;/*! easyui-uc_plugins - v0.1.0 - 2015-09-23
* https://github.com/Adder/jsUglify
* Copyright (c) 2015 ; Licensed MIT */
(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_checkboxs') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_checkboxs';
    })();
    function create(target) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var span = $.data(target, 'uc_checkboxs').span;
        if (!span)
            span = $('<span class="dh-checkboxs"></span>');
        $(target).after(span);
        //var select = $('<select multiple="multiple" class="dh-select"></select>').appendTo(span);
        $(target).removeClass('easyui-uc_checkboxs').addClass('easyui-uc_checkboxs');
        $.data(target, 'uc_checkboxs').span = span;
        if (opts.url) {
            reload(target, opts.url);
        } else if (opts.data) {
            loadData(target, opts.data);
        }

        span.on("input:checkbox").bind('change', function () {
            var value = getValue(target);
            if (opts.onChange) opts.onChange(target, value);
        });
        resize(target);
    }
    function resize(target, width) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var span = $.data(target, 'uc_checkboxs').span;
        if (width) {
            opts.width = width;
        }
        if (!opts.width) {
            opts.width = $(target).outerWidth();
        }
        if (!opts.height) {
            opts.height = $(target).outerHeight();
        }
        span.outerHeight(opts.height).outerWidth(opts.width);
        //select.outerHeight(opts.height).outerWidth(opts.width);
    }

    function loadData(target, data) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var span = $.data(target, 'uc_checkboxs').span;
        opts.data = data;
        span.html('');
        if (data.length) {
            if (opts.orientation == 'vertical') {
                var ul = $('<ul class="dh-checkboxs-list-v" ></ul>').appendTo(span);
            } else {
                var ul = $('<ul class="dh-checkboxs-list-h"" ></ul>').appendTo(span);
            }
            $.each(data, function (idx, val) {
                ul.append('<li><label><input style="width:15px;height:15px;" type="checkbox" class="easyui-uc_validatebox" value="' + val[opts.valueField] + '" />' + val[opts.textField] + '</label></li>');
                //select.append('<option value="' + val[opts.valueField] + '">' + val[opts.textField] + '</option>');
                //select.append('<option value="' + val[opts.valueField] + '">' + val[opts.textField] + '</option>');
            });
        }
        var val = $(target).val();
        setTimeout(function () {
            setValue(target, val);
        },200);
    }

    function getData(target) {
        var data = $.data(target, 'uc_checkboxs').options.data;
        if (!data)
            data = [];
        return data;
    }

    function setValue(target, val) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var span = $.data(target, 'uc_checkboxs').span;


        if (val === undefined || val === null)
            val = $(target).val();
        if (Object.prototype.toString.call(val) == "[object Array]") {
            var valArr = val;
            $(target).val(val.join(opts.splitter));
        } else {
            var valArr = val.toString().split(opts.splitter);
            $(target).val(val);
        }
        var checkboxArr = span.find('input');

        for (var i = 0, count = checkboxArr.length; i < count; ++i) {
            $(checkboxArr[i]).prop('checked', false);
        }

        $.each(valArr, function (index, value) {
            for (var i = 0, count = checkboxArr.length; i < count; ++i) {
                if (Object.prototype.toString.call(value) == "[object Object]") {
                    if ($(checkboxArr[i]).val() == value[opts.valueField]) {
                        $(checkboxArr[i]).prop('checked', true);
                    }
                } else {
                    if ($(checkboxArr[i]).val() == value) {
                        $(checkboxArr[i]).prop('checked', true);
                    }
                }
            }
        });

        //select.val();
    }

    function getValue(target) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var span = $.data(target, 'uc_checkboxs').span;


        var value = getValueStr(target);
        $(target).val(value);

        if (opts.isValueArray) {
            return getSelRows(target);
        } else {
            return value;
        }
    }

    function getValueStr(target) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var span = $.data(target, 'uc_checkboxs').span;


        var valArr = [];
        var checkboxArr = span.find('input');
        for (var i = 0, count = checkboxArr.length; i < count; ++i) {
            if ($(checkboxArr[i]).prop('checked')) {
                valArr.push($(checkboxArr[i]).val());
            }
        }

        var value = '';
        if (valArr) {
            value = valArr.join(opts.splitter);
        }
        return value;
    }

    function removeValue(target, val) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var data = opts.data;
        $(target).val(val);
        select.val(val.split(opts.splitter));

    }

    function addRows(target, rows) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) data = [];
        $.each(rows, function (idx, row) {
            data.push(row);
        });
        loadData(target, data);
    }

    function removeRows(target, rows, isValueType) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) return;
        var valArr = [];
        if (isValueType) {
            for (var i = 0; i < rows.length; ++i)
                valArr.push(rows[i][opts.valueField]);
        }
        for (var i = 0; i < data.length; ++i) {
            if (isValueType) {
                if ($.inArray(data[i][opts.valueField], valArr) > -1) {
                    data.splice(i, 1);
                    --i;
                }

            } else {
                if ($.inArray(data[i], rows) > -1) {
                    data.splice(i, 1);
                    --i;
                }
            }
        }
        /*$.each(data, function (idx, row) {
        if ($.inArray(row, rows) > -1)
        data.splice(idx, 1);
        });
        */
        loadData(target, data);
    }

    function removeValRows(target, rows) {
        removeRows(target, rows, true);
    }

    function getSelRows(target, isCopy) {
        var opts = $.data(target, 'uc_checkboxs').options;
        var data = opts.data;
        var value = getValueStr(target);
        if (value === undefined || value === null) return value;
        var valArr = value.split(opts.splitter);
        var rows = [];
        $.each(data, function (idx, val) {
            if ($.inArray(val[opts.valueField].toString(), valArr) > -1) {
                if (isCopy)
                    rows.push($.extend({}, val));
                else
                    rows.push(val);
            }
        });
        return rows;
    }

    function removeSelRows(target) {
        var rows = getSelRows(target);
        removeRows(target, rows);
    }

    function reload(target, url) {
        com.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                loadData(target, data);
            }
        });
    }

    $.fn.uc_checkboxs = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_checkboxs.methods[options];
            if (method) return method(this, param);
            else return false;
            //else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_checkboxs');
            if (state) $.extend(state.options, options);

            else $.data(this, 'uc_checkboxs', { options: $.extend({}, $.fn.uc_checkboxs.defaults, $.fn.uc_checkboxs.parseOptions(this), options) });

            create(this);
        });
    };
    $.fn.uc_checkboxs.parseOptions = function (target) {
        var opts = $.extend({}, $.parser.parseOptions(target, ["valueField", "textField", "width", "height", "data", 'isValueArray']));
        return opts;
    };


    $.fn.uc_checkboxs.defaults = {
        splitter: ',',
        height: 22,
        isValueArray: false,
        orientation: 'horizontal',
        initValue: null,
        onDbClick: function (target, selRows) {

        }
    };

    $.fn.uc_checkboxs.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_checkboxs').options;
        },
        setValue: function (jq, value) {
            setValue(jq[0], value);
        },
        getValue: function (jq) {
            return getValue(jq[0]);
        },
        getData: function (jq) {
            return getData(jq[0]);
        },
        reload: function (jq, url) {
            reload(jq[0], url);
        },
        loadData: function (jq, data) {
            loadData(jq[0], data);
        }, addRows: function (jq, rows) {
            addRows(jq[0], rows);
        }, removeRows: function (jq, rows) {
            removeRows(jq[0], rows);
        }, removeValRows: function (jq, rows) {
            removeValRows(jq[0], rows);
        }, getSelRows: function (jq, isCopy) {
            return getSelRows(jq[0], isCopy);
        }, removeSelRows: function (jq) {
            removeSelRows(jq[0]);
        },
        disable: function (jq) {
            var span = $.data(jq[0], 'uc_checkboxs').span;
            $(span).find('input').attr('disabled', true);
        },
        enable: function (jq) {
            var span = $.data(jq[0], 'uc_checkboxs').span;
            $(span).find('input').attr('disabled', false);
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_combo') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_combo';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_combo').options;
        if (opts.width == 'auto')
            opts.width = undefined;// Ĭ�� width='auto' ���µ� chrome 43 �ᵼ�¿���Ϊ0, �� default ��������ʱ���� auto 
        $(target).combo(opts);

        $(target).combo('resize');
        $(target).find('.combo-text').bind('mousedown.combo', function (e) {
        });
    }

    $.fn.uc_combo = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combo.methods[options];
            if (method) return method(this, param);
            else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_combo');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_combo', { options: $.extend({}, $.fn.combo.defaults, $.fn.uc_combo.defaults, $.fn.combo.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_combo.defaults = {};

    $.fn.uc_combo.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_combo').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_combobox') < 0) {
            $.parser.plugins[$.parser.plugins.length] = 'uc_combobox';
        }
    })();

    function create(target) {
        var opts = $.data(target, 'uc_combobox').options;
        if (opts.width == 'auto')
            opts.width = undefined;// Ĭ�� width='auto' ���µ� chrome 43 �ᵼ�¿���Ϊ0, �� default ��������ʱ���� auto 
        $(target).combobox(opts);
        //$($.data(target).combo.combo).find('span:eq(1)').css('height', '100%');
        //$(target).combogrid('resize', $(target).parent().width());

        $(target).parent().find('.textbox-text').bind('keydown.combo', function (e) {
            switch (e.keyCode) {
                case 40: //down
                    $(target).combobox('showPanel');
                    break;
            }
        });
    }

    function findDataItem(data, valueField, value) {
        for (var i = 0; i < data.length; ++i) {
            if (data[i][valueField] == value) return data[i];
        }
    }

    $.fn.uc_combobox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combobox.methods[options];
            if (method) return method(this, param);
            else return $(this).combobox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_combobox');
            if (state) $.extend(state.options, options);
            else {
                $.data(this, 'uc_combobox', { options: $.extend({}, $.fn.combobox.defaults, $.fn.uc_combobox.defaults, $.fn.combobox.parseOptions(this), options) });
            }
            create(this);
        });
    }

    $.fn.uc_combobox.methods = {
        loadData: function (jq, data) {
            $(jq[0]).combobox('panel').css('height', 50);
            return $.fn.combobox.methods.loadData(jq, data);
        }
    };


    $.fn.uc_combobox.defaults = {
        onHidePanel: function () {
            var target = $(this)[0];
            var opts = $.data(target, 'uc_combobox').options;
            var data = $.data(target, 'combobox').data;
            var values = $(target).uc_combobox('getValues');
            for (var i = 0; i < values.length; ++i) {
                var item = findDataItem(data, opts.valueField, values[i]);
                if (!item) {
                    $(target).uc_combobox('setValue', '');
                    break;
                }
            }
        },
        onShowPanel: function () {
            var data = $(this).combobox('getData');
            var opts = $.data(this, 'uc_combobox').options;
            if (!opts.panelMaxHeight)
                $(this).combobox('panel').height(24 * data.length + 20);
        },
        valueField: 'id',
        textField: 'text',
        /*
        ������д keyhandler, �����Ḳ��combobox ʵ�ֵ��¼�
        keyHandler: {
        down: function (object) {
        if ($(this).combogrid('panel').is(':visible')) {
        return;
        }

        $(this).combobox('showPanel');
        }
        }*/

    };
})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_combobox_m') < 0) {
            $.parser.plugins[$.parser.plugins.length] = 'uc_combobox_m';
        }
    })();

    function create(target) {
        var opts = $.data(target, 'uc_combobox_m').options;
        $(target).combobox(opts);
        $($.data(target).combo.combo).find('span:eq(1)').css('height', '100%');
        $(target).combo('resize');

        $(target).parent().find('.combo-text').bind('keydown.combo', function (e) {
            switch (e.keyCode) {
                case 40: //down
                    $(target).combobox('showPanel');
                    break;
            }
        });

    }

    function findDataItem(data, valueField, value) {
        for (var i = 0; i < data.length; ++i) {
            if (data[i][valueField] == value) return data[i];
        }
    }

    $.fn.uc_combobox_m = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combobox_m.methods[options];
            if (method) return method(this, param);
            else return $(this).combobox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_combobox_m');
            if (state) $.extend(state.options, options);
            else {
                var curOpts = {};
                //-- ��ֹ onShowPanel �����ǣ�
                $.extend(curOpts, $.fn.combobox.parseOptions(this), options);
                if (typeof curOpts.onShowPanel === 'function') {
                    var func = curOpts.onShowPanel;
                    curOpts.onShowPanel = function () {
                        func.apply(this,arguments);
                        $.fn.uc_combobox_m.defaults.onShowPanel.apply(this,arguments);
                    }
                }

                $.data(this, 'uc_combobox_m', { options: $.extend({}, $.fn.combobox.defaults, $.fn.uc_combobox_m.defaults, curOpts) });
            }
            create(this);
        });
    }

    $.fn.uc_combobox_m.methods = {
        loadData: function (jq, data) {
            $(jq[0]).combobox('panel').resize({ panelWidth: 50 });
            return $.fn.combobox.methods.loadData(jq, data);
        }
    };

    $.fn.uc_combobox_m.defaults = {
        onHidePanel: function () {
            var target = $(this)[0];
            var opts = $.data(target, 'uc_combobox_m').options;
            if (opts.check === true) {
                var data = $.data(target, 'combobox').data;
                var values = $(target).uc_combobox_m('getValues');
                for (var i = 0; i < values.length; ++i) {
                    var item = findDataItem(data, opts.valueField, values[i]);
                    if (!item) {
                        $(target).uc_combobox_m('setValues', []);
                        break;
                    }
                }
            }
        },
        onShowPanel: function () {
            var data = $(this).combobox('getData');
            $(this).combobox('panel').height(24 * data.length + 20);
        },
        multiple: true,
        check: true
    };
})(jQuery);(function ($) {
    (
        function () {
            var plugin = 'uc_combogrid';
            var idx = $.inArray($.parser.plugins, plugin);
            if (idx < 0) {
                $.parser.plugins[$.parser.plugins.length] = plugin;
            }
        }
    )();
    function create(target) {
        var opts = $.data(target, "uc_combogrid").options;
        $(target).combogrid(opts);


        resize(target);
        setTimeout(function () {
            $(target).parent().find('.combo-text').bind('keydown.combo', function (e) {
                switch (e.keyCode) {
                    case 40: //down
                        $(target).combobox('showPanel');
                        break;
                }
            });

            //$(target).combogrid('resize', $(target).parent().width());
        }, 10);
    }

    function resize(target) {
        var cols = $(target).combogrid('grid').datagrid('options').columns;
        if (cols) {
            var width = 0;
            $.each(cols[0], function (idx, val) {
                if (!isNaN(val.width)) {
                    width += parseInt(val.width);
                }
            });
            if (width > 0) {
                $(target).combogrid('panel').panel('resize', { width: width + 5 });
            }
        }
    }

    $.fn.uc_combogrid = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combogrid.methods[options];
            if (method) {
                return method(this, param);
            } else {
                return $(this).combogrid(options, param);
                //return $.fn.combogrid.methods[options](this, param);
            }
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, "uc_combogrid");
            if (state) {
                $.extend(state.options, options);
            } else {
                $.data(this, "uc_combogrid", {
                    options: $.extend({}, $.fn.combogrid.defaults, $.fn.uc_combogrid.defaults, $.fn.combogrid.parseOptions(this), options)
                });
            }
            create(this);
        });
    };
    /* $.fn.uc_combogrid.parseOptions = function (target) {
    return $.extend({}, $.fn.combogrid.parseOptions(target), {
    });
    };
    */

    $.fn.uc_combogrid.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_combogrid').options;
        }
    };
    $.fn.uc_combogrid.defaults = {
        editable:false,//--��Ϊ�ÿؼ��ɱ��������в����ڵ�ֵ�����Բ������룬����ֻ����������ֵ
        onHidePanel: function () {
            //-- �������� combo �Ŀؼ��������� hide, mounse down ʱ��
            //   �����ѵ�ǰҳ������ combo hide һ����
            if ($(this).combogrid('panel').not(':visible')) {
                return;
            }
            var rows = $(this).combogrid('grid').datagrid('getSelected');
            if (!rows) {
                $(this).combogrid('setValue', '');
            }

        },
        onShowPanel: function () {
            var panel = $(this).combogrid('grid').datagrid('getPanel');
            // ĳЩҳ���ᵼ�� combogrid �������б���ʾ�������г�������ûָ��һ��,������ͷ�������г��Ȳ�һ
            if (panel.find('.datagrid-htable td:first').width() != panel.find('.datagrid-btable td:first').width()) {
                var data = $(this).combogrid('grid').datagrid('getData');
                $(this).combogrid('grid').datagrid({});
                $(this).combogrid('grid').datagrid('loadData', data);
            }
            //-- grid �ĸ߶ȱ��趨��,���� panel �����ֹ�����
            //var data = $(this).combogrid('grid').datagrid('getRows');
            //$(this).combobox('panel').height(25 * data.length + 100);
        },
        height: 22

    };
}
)(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_combotree') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_combotree';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_combotree').options;
        $(target).combotree(opts);

        setTimeout(function () {
            $(target).parent().find('.combo-text').bind('keydown.combo', function (e) {
                switch (e.keyCode) {
                    case 40: //down
                        $(target).combobox('showPanel');
                        break;
                }
            });
        }, 500);
    }

    $.fn.uc_combotree = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_combotree.methods[options];
            if (method) return method(this, param);
            else return $(this).combotree(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_combotree');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_combotree', { options: $.extend({}, $.fn.combotree.defaults, $.fn.uc_combotree.defaults, $.fn.combotree.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_combotree.defaults = {};

    $.fn.uc_combotree.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_combotree').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_datagrid') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_datagrid';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_datagrid').options;
        $(target).datagrid(opts);
    }

    $.fn.uc_datagrid = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_datagrid.methods[options];
            if (method) return method(this, param);
            else return $(this).datagrid(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_datagrid');
            var newOpts;
            if (state) newOpts = $.extend(state.options, options);
            else {
                newOpts = $.extend({}, $.fn.datagrid.defaults, $.fn.uc_datagrid.defaults, $.fn.datagrid.parseOptions(this), options);
                if (newOpts.columns && newOpts.allSortable) {
                    $.each(newOpts.columns[0], function (idx, col) {
                        // 显式指定不可排序 sortable = false, 否则是 sortable = undefined
                        if (col.sortable == false) {
                        } else {
                            col.sortable = true;
                        }
                    });
                }
            }
            $.data(this, 'uc_datagrid', { options: newOpts });

            create(this);
        });
    }

    $.fn.uc_datagrid.defaults = {
        allSortable: true
    };

    $.fn.uc_datagrid.methods = {
    };

})(jQuery)
;(function () {
    (function () {
        var dr = 'uc_dateRange';
        var drIndex = $.inArray($.parser.plugins, dr);
        if (drIndex < 0) {
            $.parser.plugins[$.parser.plugins.length] = dr;
        }
    })();

    $.fn.uc_dateRange = function (options, param) {
        if (typeof options === "string") {
            return $.fn.uc_dateRange.methods[options](this, param);
        }

        return this.each(function () {
            var state = $.data(this, "uc_dateRange");
            options = options || {};
            if (state) {
                $.extend(state.options, options);
            } else {
                $.data(this, "uc_dateRange", {
                    options: $.extend({}, $.fn.uc_dateRange.defaults, $.fn.uc_dateRange.parseOptions(this), options)
                });
            }
            createBox(this);
        });
    }

    function resize(target, width) {
        $(target).combo('resize', width);
    }

    function createBox(target) {
        var state = $.data(target, 'uc_dateRange');
        var opts = state.options;

        $(target).combo($.extend({}, opts, {
            onShowPanel: function () {
                //state.calendar.calendar('resize');
                state.calendarFrom.calendar('resize');
                state.calendarTo.calendar('resize');
                // setValue(target, getValue(target));
                opts.onShowPanel.call(target);
            },
            onHidePanel: function () {
                // hide 时再触发一次 setValue， 以便按backspace 清空控件时，能及时更新值；
                setValue(target, getValue(target));
                // 因为值改了，同时也要触发了 onSelect 事件；
                opts.onSelect.call(target, dateFrom, dateTo);
            }
        }));
        $(target).combo('textbox').parent().addClass('datebox');
        var textbox = $(target).combo('textbox');

        // calendar 
        if (!state.calendarFrom) {
            createCalendarFrom();
        }
        if (!state.calendarTo) {
            createCalendarTo();
        }


        var dateFrom, dateTo;

        function createCalendarFrom() {
            var panel = $(target).combo("panel");
            state.calendarFrom = $("<div></div>").appendTo(panel).wrap("<div class='datebox-calendar-inner' style='width:180px; float:left; border-right:1px solid #95B8E7'></div>");
            state.calendarFrom.calendar({
                height: 180,
                border: false,
                onSelect: function (date) {
                    dateFrom = date;
                }
            });

            var button = $("<div class='datebox-button'></div>").appendTo(state.calendarFrom.parent());
            $("<a href='javascript:void(0)' class='datebox-current'></a>").html(opts.currentText).appendTo(button);
            //$("<a href='javascript:void(0)' class='datebox-close'></a>").html(opts.closeText).appendTo(button);
            button.find(".datebox-current,.datebox-close").hover(
                function () { $(this).addClass("datebox-button-hover"); },
                function () { $(this).removeClass("datebox-button-hover"); }
            );

            button.find(".datebox-current").click(function () {
                state.calendarFrom.calendar("moveTo", new Date());
                dateFrom = new Date();
            });
        }

        function createCalendarTo() {
            var panel = $(target).combo("panel");
            state.calendarTo = $("<div></div>").appendTo(panel).wrap("<div  class='datebox-calendar-inner' style='width:180px; float:left;margin-left:5px;border-left: 1px solid #95B8E7'></div>");
            state.calendarTo.calendar({
                height: 180,
                border: false,
                onSelect: function (date) {
                    dateTo = date;
                }
            });

            var button = $("<div class='datebox-button'></div>").appendTo(state.calendarTo.parent());
            $("<a href='javascript:void(0)' class='datebox-current'></a>").html(opts.currentText).appendTo(button);
            $("<a href='javascript:void(0)' class='datebox-ok'></a>").html(opts.okText).appendTo(button);
            $("<a href='javascript:void(0)' class='datebox-close'></a>").html(opts.closeText).appendTo(button);
            button.find(".datebox-current,.datebox-close,.datebox-ok").hover(
                function () { $(this).addClass("datebox-button-hover"); },
                function () { $(this).removeClass("datebox-button-hover"); }
            );

            button.find(".datebox-current").click(function () {
                state.calendarTo.calendar("moveTo", new Date());
                dateTo = new Date();
            });
            button.find(".datebox-close").click(function () {
                $(target).combo("hidePanel");
            });

            button.find(".datebox-ok").click(function () {
                dateFrom = dateFrom || state.dateFrom;
                dateTo = dateTo || state.dateTo;
                if (dateFrom && dateTo) {
                    var value = opts.formatter(dateFrom, dateTo);
                    setValue(target, value);
                    // hidePanel 有触发 onSelect 事件，以免重复，这里不再触发
                    //opts.onSelect.call(target, dateFrom, dateTo);
                    $(target).combo("hidePanel");
                }
            });

        }

        setValue(target, opts.value);
    }

    $.fn.uc_dateRange.defaults = $.extend({}, $.fn.combo.defaults, {
        panelWidth: 390,
        panelHeight: 205,
        keyHandler: {
            up: function () { },
            down: function () { },
            enter: function () { doEnter(this); },
            query: function (q) { doQuery(this, q); }
        },

        currentText: 'Today',
        closeText: 'Close',
        okText: 'Ok',

        formatter: function (dateFrom, dateTo) {
            var y = dateFrom.getFullYear();
            var m = dateFrom.getMonth() + 1;
            var d = dateFrom.getDate();
            var yto = dateTo.getFullYear();
            var mto = dateTo.getMonth() + 1;
            var dto = dateTo.getDate();
            return m + '/' + d + '/' + y + ' to ' + mto + '/' + dto + '/' + yto;

        },
        parser: function (s) {
            if (s) {
                var dateArr = s.split(' to ');
                var t1 = Date.parse(dateArr[0]);
                var t2 = Date.parse(dateArr[1]);
                if (!isNaN(t1) && !isNaN(t2)) {
                    return [new Date(t1), new Date(t2)];
                } else {

                    return [new Date(), new Date()];
                }
            } else {
                return [new Date(), new Date()];
            }
        },

        onSelect: function (dateFrom, dateTo) { }
    });
    $.fn.uc_dateRange.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_dateRange').options;
        },
        calendarFrom: function (jq) {	// get the calendar object
            return $.data(jq[0], 'uc_dateRange').calendarFrom;
        },
        calendarTo: function (jq) {
            return $.data(jq[0], 'uc_dateRange').calendarTo;
        },
        setValue: function (jq, value) {
            return jq.each(function () {
                setValue(this, value);
            });
        },
        getValue: function (jq) {
            return getValue(jq[0]);
        },
        resize: function (jq, width) {
            return resize(jq[0], width);
        }
    };

    $.fn.uc_dateRange.parseOptions = function (target) {
        var t = $(target);
        return $.extend({}, $.fn.combo.parseOptions(target), {
        });
    };


    /**
    * called when user inputs some value in text box
    */
    function doQuery(target, q) {
        setValue(target, q, true);
    }

    function bindEvents(target) {

    }

    /**
    * called when user press enter key
    */
    function doEnter(target) {
        return;
        var opts = $.data(target, 'uc_dateRange').options;
        var from = $.data(target, 'uc_dateRange').calendarFrom;
        var to = $.data(target, 'uc_dateRange').calendarTo;
        var value = opts.formatter(from, to);
        setValue(target, value);
        $(target).combo('hidePanel');
    }

    function setValue(target, value, notSetText) {
        var state = $.data(target, 'uc_dateRange');
        var opts = state.options;
        $(target).combo('setValue', value);
        if (!notSetText) {
            $(target).combo('setText', value);
        }
        var dateArr = opts.parser(value);
        state.dateFrom = dateArr[0];
        state.dateTo = dateArr[1];
        state.calendarFrom.calendar("moveTo", dateArr[0]);
        state.calendarTo.calendar('moveTo', dateArr[1]);
    }

    function getValue(target) {
        return $(target).combo("getValue");
    }
})(jQuery);;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_datebox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_datebox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_datebox').options;
        var onSelect = opts.onSelect;
        opts.onSelect = function (date) {
            if (opts.onChange) {
                opts.onChange(data);
            }
            if (onSelect) {
                onSelect(date);
            }
        }
        $(target).datebox(opts);
        $(target).datebox();

        //$(target).combo('resize',$.data(target).combo.combo.parent().width());
        //$($.data(target).combo.combo).find('span:eq(1)').css('height', '100%');
    }

    $.fn.uc_datebox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_datebox.methods[options];
            if (method) return method(this, param);
            else return $(this).datebox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_datebox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_datebox', { options: $.extend({}, $.fn.datebox.defaults, $.fn.uc_datebox.defaults, $.fn.datebox.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_datebox.defaults = {
    };

    $.fn.uc_datebox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_datebox').options;
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_datetimebox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_datetimebox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_datetimebox').options;
        $(target).datetimebox(opts);
    }

    $.fn.uc_datetimebox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_datetimebox.methods[options];
            if (method) return method(this, param);
            else return $(this).datetimebox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_datetimebox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_datetimebox', { options: $.extend({}, $.fn.datetimebox.defaults, $.fn.uc_datetimebox.defaults, $.fn.datetimebox.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_datetimebox.defaults = {
        showSeconds: false
    };

    $.fn.uc_datetimebox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_datetimebox').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_dialog') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_dialog';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_dialog').options;
        $(target).dialog(opts);
    }

    $.fn.uc_dialog = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_dialog.methods[options];
            if (method) return method(this, param);
            else return $(this).dialog(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_dialog');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_dialog', { options: $.extend({}, $.fn.dialog.defaults, $.fn.uc_dialog.defaults, $.fn.dialog.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_dialog.defaults = {};

    $.fn.uc_dialog.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_dialog').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_dollar') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_dollar';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_dollar').options;
        if (opts.width == 'auto')
            opts.width = undefined;// 默认 width='auto' 在新的 chrome 43 会导致宽度为0, 在 default 中设置有时还是 auto 
        $(target).uc_numberspinner(opts);
        var txt = $(target).uc_numberspinner('textbox');
        $(txt).css('text-align', 'right');
        $(txt).attr('placeholder', '￥');
        $(target).spinner('resize');
    }

    $.fn.uc_dollar = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_dollar.methods[options];
            if (method) return method(this, param);
            else return $(this).numberspinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_dollar');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_dollar', { options: $.extend({}, $.fn.numberspinner.defaults, $.fn.uc_dollar.defaults, $.fn.numberspinner.parseOptions(this), options) });

            create(this);
        });
    };

    $.fn.uc_dollar.defaults = {
        precision: 2,
        groupSeparator: ',',
        decimalSeparator: '.',
        prefix: '￥'
    };

    $.fn.uc_dollar.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_form') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_form';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_form').options;
        $(target).form(opts);
    }

    $.fn.uc_form = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_form.methods[options];
            if (method) return method(this, param);
            else return $(this).form(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_form');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_form', { options: $.extend({}, $.fn.form.defaults, $.fn.uc_form.defaults, $.fn.form.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_form.defaults = {};

    $.fn.uc_form.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_form').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_fuzzybox') < 0) {
            $.parser.plugins[$.parser.plugins.length] = 'uc_fuzzybox';
        }
    })();

    function create(target) {
        var opt = $.data(target, 'uc_fuzzybox').options;
        if (opt.width == 'auto')
            opt.width = undefined;// 默认 width='auto' 在新的 chrome 43 会导致宽度为0, 在 default 中设置有时还是 auto 
        $(target).combobox(opt);
        var txtData = $.data(target, 'combobox');
        $(target).combobox('panel').panel("options").closed = false;
    };

    function loaData(target) {
        var opt = $.data(target, 'uc_fuzzybox').options;
        var value = $(target).textbox('getValue');
        if (opt.url) {
            com.ajax({
                type: 'GET',
                url: opt.url + value,
                success: function (data) {
                    if (Object.prototype.toString.call(data) == '[object Array]') {
                        opt.data = data;
                        $(target).combobox('loadData', data);
                    }
                }
            })
        }
    }

    $.fn.uc_fuzzybox = function (options, param) {
        if (typeof options == 'string') {
            var method = $.fn.uc_fuzzybox.methods[options];
            if (method) return method(this, param);
            else return $(this).combobox(options, param);
        }
        options = options || {};
        this.each(function () {
            var data = $.data(this, 'uc_fuzzybox');
            if (data) $.extend(data.options, options)
            else $.data(this, 'uc_fuzzybox', { options: $.extend({}, $.fn.uc_fuzzybox.defaults, $.fn.uc_fuzzybox.parseOptions(this), options) });
            create(this);
        });

    };

    $.fn.uc_fuzzybox.parseOptions = function (target) {
        var opts = $.extend({}, $.fn.combobox.parseOptions(target), $.parser.parseOptions(target, []));
        return opts;
    };

    $.fn.uc_fuzzybox.defaults = {
        mode: 'remote',
        method: 'GET',
        delay: 500,
        hasDownArrow: false,
        onShowPanel: function () {
        },
        onLoadSuccess: function () {
            var data = $(this).combobox('getData');
            if (data && data.length > 0 && $(this).combobox('textbox').is(':focus')) {
                $(this).combobox('panel').panel('options').closed = true;
                $(this).combobox('showPanel');
                $(this).combobox('panel').panel('options').closed = true;
            } else {
                $(this).combobox('panel').panel('options').closed = true;
                $(this).combobox('hidePanel');
            }
        }
    };
    $.fn.uc_fuzzybox.methods = {};


})(jQuery);;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_fuzzypaginbox') < 0) {
            $.parser.plugins[$.parser.plugins.length] = 'uc_fuzzypaginbox'
        }
    })();

    function create(target) {
        var opts = $.data(target, 'uc_fuzzypaginbox').options;
        $(target).combo($.extend({}, opts));
        var panel = $(target).combo('panel');
        var div = $('<div class="dh-fuzzy" style="overflow:auto;"><div id="_easyui_combobox_i1_0" class="combobox-item">admin</div><div id="_easyui_combobox_i1_1" class="combobox-item">oTVPpjkRtC0a3ys0a3eiGOD5oYlA</div><div id="_easyui_combobox_i1_2" class="combobox-item">oTVPpjsMVH2Mu_XmFwPx7uAdBAAY</div><div id="_easyui_combobox_i1_3" class="combobox-item">oTVPpjvISwqyyZ3fMH9DDvRPsfaA</div><div id="_easyui_combobox_i1_4" class="combobox-item">oTVPpjk4fhC1uWN8LzTqU858Y4KA</div><div id="_easyui_combobox_i1_5" class="combobox-item">oTVPpjvYAsoWFKpFcLl7rSYi-hiY</div><div id="_easyui_combobox_i1_6" class="combobox-item">oTVPpjtPBkkQ-Rr2vL0OLV3xAlgY</div><div id="_easyui_combobox_i1_7" class="combobox-item">oTVPpjmbC9Cdlz7TAII0oQyveAwU</div><div id="_easyui_combobox_i1_8" class="combobox-item">oTVPpjur_7tX_EBJ89Al5kKG3IF8</div><div id="_easyui_combobox_i1_9" class="combobox-item">oTVPpjg8_gy0JwDeWs7aRmEKn1n8</div></div>').appendTo(panel);
        opts.databox = div;

        var paginDiv = $("<div style='width:100%;line-height:20px;'><a style='float:right'>上一页</a><a style='float:right'>下一页</a></div>").appendTo(panel);
        opts.paginbox = paginDiv;

        $(div).unbind().bind("mouseover", function (e) {
            $(this).find("div.combobox-item-hover").removeClass("combobox-item-hover");
            $(e.target).closest("div.combobox-item").addClass("combobox-item-hover");
            e.stopPropagation();
        }).bind("mouseout", function (e) {
            $(e.target).find("div.combobox-item").removeClass("combobox-item-hover");
            e.stopPropagation();
        }).bind("click", function (e) {
            var item = $(e.target).closest("div.combobox-item");
            if (item.length == 0) return;
            var val = item.attr('value');
            $(target).combo("hidePanel");
            e.stopPropagation();
        });
    }
    function loaData(target, data, remainText) {
        var opts = $.data(target, 'uc_fuzzypaginbox').options;
        var value = $(target).textbox('getValue');
        $(opts.databox).empty();

        opts.data = data;
        $.each(data, function (idx, row) {
            var item = $("<div class='combobox-item'>" + row[opts.textField] + "</div>").appendTo(opts.databox);
            $(item).attr('value', row[opts.valueField]);
        });
    }

    function request(target, url, param, remainText) {
        var opts = $.data(target, 'uc_fuzzypaginbox').options;
        if (url) {
            opts.url = url;
        }
        param = param || {};

        opts.loader.call(target, param, function (data) {
            loaData(target, data, remainText);
        }, function () {
            console.log('error occur');
        });
    }

    $.fn.uc_fuzzypaginbox = function (options, param) {
        $.each(this, function (idx, elem) {
            $.data(this, 'uc_fuzzypaginbox', { options: options || {} });
            create(this);
            loaData(this)
        });
    }

    $.fn.uc_fuzzypaginbox.parseOptions = function (target) {
        return $.extend({}, $.fn.combo.parseOptions(target), $.parser);
    }

    $.fn.uc_fuzzypaginbox.defaults = {
        textField: 'text',
        valueField: 'value',
        url: null,
        method: 'GET',
        mode: 'remote',
        delay: 500,
        loader: function (param, success, error) {
            var opts = $(this).uc_fuzzypaginbox('options');
            if (!opts.url) return;
            $.ajax({
                type: opts.method,
                url: opts.url,
                data: param,
                dataType: 'json',
                success: function (data) {
                    success(data);
                },
                error: function () {
                    error.apply(this, arguments);
                }
            });
        }
    }

})();;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_layout') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_layout';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_layout').options;
        $(target).layout(opts);
    }

    $.fn.uc_layout = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_layout.methods[options];
            if (method) return method(this, param);
            else return $(this).layout(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_layout');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_layout', { options: $.extend({}, $.fn.layout.defaults, $.fn.uc_layout.defaults, $.fn.layout.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_layout.defaults = {};

    $.fn.uc_layout.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_layout').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_linkbutton') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_linkbutton';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_linkbutton').options;
        $(target).linkbutton(opts);
    }

    $.fn.uc_linkbutton = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_linkbutton.methods[options];
            if (method) return method(this, param);
            else return $(this).linkbutton(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_linkbutton');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_linkbutton', { options: $.extend({}, $.fn.linkbutton.defaults, $.fn.uc_linkbutton.defaults, $.fn.linkbutton.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_linkbutton.defaults = {};

    $.fn.uc_linkbutton.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_linkbutton').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_listbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_listbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_listbox').options;
        var span = $('<span class="dh-listbox"></span>');
        $(target).after(span);
        var select = $('<select multiple="multiple" class="dh-select"></select>').appendTo(span);
        $(target).removeClass('easyui-uc_listbox').addClass('easyui-uc_listbox');

        select.bind('change', function () {
            var value = getValue(target);
            if (opts.onChange) opts.onChange(target, value);
        }).bind('dblclick', function () {
            var selRows = getSelRows(target);
            if (opts.onDbClick) opts.onDbClick(target, selRows);
        });
        $.data(target, 'uc_listbox').select = select;
        $.data(target, 'uc_listbox').span = span;
        if (opts.url) {
            reload(target, opts.url);
        } else if (opts.data) {
            loadData(target, opts.data);
        }
        resize(target);
    }
    function resize(target, width) {
        var opts = $.data(target, 'uc_listbox').options;
        var span = $.data(target, 'uc_listbox').span;
        var select = $.data(target, 'uc_listbox').select;
        if (width) {
            opts.width = width;
        }
        if (!opts.width) {
            opts.width = $(target).outerWidth();
        }
        if (!opts.height) {
            opts.height = $(target).outerHeight();
        }
        span.outerHeight(opts.height).outerWidth(opts.width);
        select.outerHeight(opts.height).outerWidth(opts.width);
    }

    function loadData(target, data) {
        var opts = $.data(target, 'uc_listbox').options;
        var select = $.data(target, 'uc_listbox').select;
        opts.data = data;
        select.empty();
        if (data.length) {
            $.each(data, function (idx, val) {
                select.append('<option value="' + val[opts.valueField] + '">' + val[opts.textField] + '</option>');
            });
        }
        setValue(target);
    }

    function getData(target) {
        var data = $.data(target, 'uc_listbox').options.data;
        if (!data)
            data = [];
        return data;
    }

    function setValue(target, val) {
        var opts = $.data(target, 'uc_listbox').options;
        var select = $.data(target, 'uc_listbox').select;
        if (val === undefined || val === null)
            val = $(target).val();
        $(target).val(val);
        select.val(val.split(opts.splitter));
    }

    function getValue(target) {
        var opts = $.data(target, 'uc_listbox').options;
        var select = $.data(target, 'uc_listbox').select;
        var valArr = select.val();
        var value;
        if (valArr) {
            value = valArr.join(opts.splitter);
        }
        $(target).val(value);
        return value;
    }

    function removeValue(target, val) {
        var opts = $.data(target, 'uc_listbox').options;
        var data = opts.data;
        $(target).val(val);
        select.val(val.split(opts.splitter));

    }

    function addRows(target, rows) {
        var opts = $.data(target, 'uc_listbox').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) data = [];
        $.each(rows, function (idx, row) {
            data.push(row);
        });
        loadData(target, data);
    }

    function removeRows(target, rows, isValueType) {
        var opts = $.data(target, 'uc_listbox').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) return;
        var valArr = [];
        if (isValueType) {
            for (var i = 0; i < rows.length; ++i)
                valArr.push(rows[i][opts.valueField]);
        }
        for (var i = 0; i < data.length; ++i) {
            if (isValueType) {
                if ($.inArray(data[i][opts.valueField], valArr) > -1) {
                    data.splice(i, 1);
                    --i;
                }

            } else {
                if ($.inArray(data[i], rows) > -1) {
                    data.splice(i, 1);
                    --i;
                }
            }
        }
        /*$.each(data, function (idx, row) {
        if ($.inArray(row, rows) > -1)
        data.splice(idx, 1);
        });
        */
        loadData(target, data);
    }

    function removeValRows(target, rows) {
        removeRows(target, rows, true);
    }

    function getSelRows(target, isCopy) {
        var opts = $.data(target, 'uc_listbox').options;
        var data = opts.data;
        var value = getValue(target);
        if (value === undefined || value === null) return value;
        var valArr = value.split(opts.splitter);
        var rows = [];
        $.each(data, function (idx, val) {
            if ($.inArray(val[opts.valueField].toString(), valArr) > -1) {
                if (isCopy)
                    rows.push($.extend({}, val));
                else
                    rows.push(val);
            }
        });
        return rows;
    }

    function removeSelRows(target) {
        var rows = getSelRows(target);
        removeRows(target, rows);
    }

    function reload(target, url) {
        com.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                loadData(target, data);
            }
        });
    }

    $.fn.uc_listbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_listbox.methods[options];
            if (method) return method(this, param);
            else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_listbox');
            if (state) $.extend(state.options, options);

            else $.data(this, 'uc_listbox', { options: $.extend({}, $.fn.uc_listbox.defaults, $.fn.uc_listbox.parseOptions(this), options) });

            create(this);
        });
    };
    $.fn.uc_listbox.parseOptions = function (target) {
        var opts = $.extend({}, $.parser.parseOptions(target, ["valueField", "textField", "width", "height", "data"]));
        return opts;
    };


    $.fn.uc_listbox.defaults = {
        splitter: ',',
        height: 22,
        onDbClick: function (target, selRows) {

        }
    };

    $.fn.uc_listbox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_listbox').options;
        },
        setValue: function (jq, value) {
            setValue(jq[0], value);
        },
        getValue: function (jq) {
            return getValue(jq[0]);
        },
        getData: function (jq) {
            return getData(jq[0]);
        },
        reload: function (jq, url) {
            reload(jq[0], url);
        },
        loadData: function (jq, data) {
            loadData(jq[0], data);
        }, addRows: function (jq, rows) {
            addRows(jq[0], rows);
        }, removeRows: function (jq, rows) {
            removeRows(jq[0], rows);
        }, removeValRows: function (jq, rows) {
            removeValRows(jq[0], rows);
        }, getSelRows: function (jq, isCopy) {
            return getSelRows(jq[0], isCopy);
        }, removeSelRows: function (jq) {
            removeSelRows(jq[0]);
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_menu') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_menu';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_menu').options;
        $(target).menu(opts);
    }

    $.fn.uc_menu = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_menu.methods[options];
            if (method) return method(this, param);
            else return $(this).menu(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_menu');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_menu', { options: $.extend({}, $.fn.menu.defaults, $.fn.uc_menu.defaults, $.fn.menu.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_menu.defaults = {};

    $.fn.uc_menu.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_menu').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_menubutton') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_menubutton';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_menubutton').options;
        $(target).menubutton(opts);
    }

    $.fn.uc_menubutton = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_menubutton.methods[options];
            if (method) return method(this, param);
            else return $(this).menubutton(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_menubutton');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_menubutton', { options: $.extend({}, $.fn.menubutton.defaults, $.fn.uc_menubutton.defaults, $.fn.menubutton.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_menubutton.defaults = {};

    $.fn.uc_menubutton.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_menubutton').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_messager') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_messager';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_messager').options;
        $(target).messager(opts);
    }

    $.fn.uc_messager = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_messager.methods[options];
            if (method) return method(this, param);
            else return $(this).messager(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_messager');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_messager', { options: $.extend({}, $.fn.messager.defaults, $.fn.uc_messager.defaults, $.fn.messager.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_messager.defaults = {};

    $.fn.uc_messager.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_messager').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_numberbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_numberbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_numberbox').options;
        $(target).numberbox(opts);
        $(target).css('text-align', 'right');
        var txt = $(target).numberbox('textbox');
        $(txt).css('text-align', 'right');
    }

    $.fn.uc_numberbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_numberbox.methods[options];
            if (method) return method(this, param);
            else return $(this).numberbox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_numberbox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_numberbox', { options: $.extend({}, $.fn.numberbox.defaults, $.fn.uc_numberbox.defaults, $.fn.numberbox.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_numberbox.defaults = {};

    $.fn.uc_numberbox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_numberbox').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_numberspinner') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_numberspinner';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_numberspinner').options;
        $(target).numberspinner(opts);
        $(target).css('text-align', 'right');
        var txt = $(target).uc_numberspinner('textbox');
        $(txt).css('text-align', 'right');
        $(target).spinner('resize');
    }


    $.fn.uc_numberspinner = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_numberspinner.methods[options];
            if (method) return method(this, param);
            else return $(this).numberspinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_numberspinner');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_numberspinner', { options: $.extend({}, $.fn.numberspinner.defaults, $.fn.uc_numberspinner.defaults, $.fn.numberspinner.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_numberspinner.defaults = {
        groupSeparator: ','
        /* onSpinUp: function () {
        console.log('spin up');
        },
        onSpinDown: function () {
        console.log('spin down');
        },
        
        onChange: function () {
        console.log('change');
        }
        */
    };

    $.fn.uc_numberspinner.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_numberspinner').options;
        }
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_panel') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_panel';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_panel').options;
        $(target).panel(opts);
    }

    $.fn.uc_panel = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_panel.methods[options];
            if (method) return method(this, param);
            else return $(this).panel(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_panel');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_panel', { options: $.extend({}, $.fn.panel.defaults, $.fn.uc_panel.defaults, $.fn.panel.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_panel.defaults = {};

    $.fn.uc_panel.methods = {
     
    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_percent') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_percent';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_percent').options;
        $(target).uc_numberspinner(opts);
        var txt = $(target).uc_numberspinner('textbox');
        $(txt).css('text-align', 'right');
        $(txt).attr('placeholder', '%');
        $(target).spinner('resize');
    }

    $.fn.uc_percent = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_percent.methods[options];
            if (method) return method(this, param);
            else return $(this).numberspinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_percent');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_percent', { options: $.extend({}, $.fn.numberspinner.defaults, $.fn.uc_percent.defaults, $.fn.numberspinner.parseOptions(this), options) });

            create(this);
        });
    };

    $.fn.uc_percent.defaults = {
        precision: 2,
        groupSeparator: ',',
        decimalSeparator: '.',
        suffix: '%'
        //max: 100,
        //min: -100
    };

    $.fn.uc_percent.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_pickbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_pickbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_pickbox').options;
        var totalColWidth = 0;
        $.each(opts.columns[0], function (idx, val) {
            totalColWidth += val.width || val.title.length * 10;
        });
        opts.winWidth = opts.winWidth || totalColWidth + 60,
        opts.winHeight = opts.winHeight || 300;
        opts._reload = true;

        $(target).combo($.extend({}, opts, {
            onShowPanel: function () {
                var panel = $(target).combo('panel');
                var win = $.data(target, 'uc_pickbox').win;
                if (!win) {
                    var div = $('<div></div>').appendTo($('body'));
                    panel.appendTo(div);

                    win = div.window({
                        width: opts.winWidth || 550,
                        height: opts.winHeight || 300,
                        title: opts.title || '',
                        closed: true,
                        modal: opts.wiinModal || false,
                        minimizable: false,
                        onBeforeClose: function () {
                            panel.panel('options').closed = true;
                        },
                        onResize: function (width, height) {
                            $.data(target, 'uc_pickbox').layout.uc_layout('resize');
                            $.data(target, 'uc_pickbox').grid.uc_datagrid('resize');
                            opts.winWidth = width;
                            opts.winHeight = height;
                        }

                    });
                    $.data(target, 'uc_pickbox').win = win;
                }
                // init grid data
                if (opts.url && (opts._reload || opts.reloadEveryTimes)) {
                    com.ajax({
                        type: "GET",
                        url: opts.url,
                        data: opts.params,
                        success: function (data) {
                            if (data) {
                                $.data(target, 'uc_pickbox')._data = data;
                                $.data(target, 'uc_pickbox').grid.uc_datagrid("loadData", data);
                            } else {
                                com.message("error", data);
                            }
                            opts._reload = false;
                        },
                        error: function (xrq, status, errorMsg) {
                            com.message("error", errorMsg);
                        }
                    });
                }


                // $.data(target, 'uc_pickbox').grid.uc_datagrid("loadData", $.data(target, 'uc_pickbox')._data);
                if (opts.alignRight) {
                    // reset panel parent's parent's position to adjust current layout
                    var textbox = $(target).combo('textbox');
                    var winOpts = panel.parent().window('options');
                    panel.parent().window('move', { left: textbox.offset().left - winOpts.width + textbox.width() });
                }


                updateSelection(target);
                setTimeout(function () {
                    panel.parent().css({ 'top': '0px', 'left': '0px' });
                    panel.css({ 'border': '0', 'width': '100%', 'height': '100%' });
                    $.data(target, 'uc_pickbox').layout.uc_layout('resize');
                    $.data(target, 'uc_pickbox').grid.uc_datagrid('resize');
                }, 0);
                if (opts.winCenter) win.window('center');
                win.window('resize', { width: opts.width, height: opts.height }).window('open');
            },
            onHidePanel: function () {
                $.data(target, 'uc_pickbox').win && $.data(target, 'uc_pickbox').win.window('close');
            }
        }));

        var panel = $(target).combo('panel');
        panel.parent().css('position', 'relative');

        // windows

        // datagrid
        if (!$.data(target, 'uc_pickbox').grid) {
            var layout = $('<div class="easyui-layout" style="width:100%;height:100%;border:0px"><div data-options="region:\'north\',border:false" style="height:30px"><div class="dh-pickbox-toolbar"><div><input type="text" style="min-width:200px"/></div><div><a data-options="plain:true,iconCls:\'icon-ok\'">' + (resx.__ok || 'Ok') + '</a><a data-options="plain:true,iconCls:\'icon-close\'">' + (resx.__close || 'Close') + '</a></div></div></div><div data-options="region:\'center\',border:false"><table></table></div></div>').appendTo(panel);
            layout.uc_layout({ fix: true });
            layout.find('a:first').uc_linkbutton().bind('click', function () { ok(target); });
            layout.find('a:eq(1)').uc_linkbutton().bind('click', function () { close(target); });
            layout.find('input[type="text"]').uc_searchbox({ searcher: function (value, name) { search(target, value, name); } });
            var grid = layout.find('table');
            $.data(target, 'uc_pickbox').grid = grid;
            $.data(target, 'uc_pickbox').layout = layout;

            grid.uc_datagrid($.extend({}, {
                pagination: opts.pagination,
                sortable: opts.sortable,
                autoRowHeight: opts.autoRowHeight,
                fit: opts.fit,
                pageSize: opts.pageSize,
                remoteSort: opts.remoteSort,
                singleSelect: opts.singleSelect,
                columns: opts.columns,
                loadFilter: function (data) {
                    if (data && !data.rows) return { rows: data };
                    return data;
                },
                onDblClickRow: function () { ok(target); }
            }));
        }
        $.data($(target)[0], 'combo').combo.find('.combo-arrow').addClass('combo-search');
    }

    function ok(target) {
        var grid = $.data(target, 'uc_pickbox').grid;
        var opts = $.data(target, 'uc_pickbox').options;
        var selRows = grid.datagrid("getSelections");
        if (selRows.length > 0 && opts.singleSelect) {
            $(target).combo('setValue', selRows[0][opts.idField]);
            $(target).combo('setText', selRows[0][opts.textField]);
        } else {
            var valArr = [];
            var textArr = [];
            $.each(selRows, function (idx, val) {
                valArr.push(val[opts.idField]);
                textArr.push(val[opts.textField]);
            });
            $(target).combo('setValue', valArr.join(','));
            $(target).combo('setText', textArr.join(','));
        }
        if (opts.onOk) {
            opts.onOk(selRows, target);
        }
        $.data(target, 'uc_pickbox').win.window('close');
    }

    function close(target) {
        $.data(target, 'uc_pickbox').win.window('close');
    }

    function search(target, value, name) {
        var grid = $.data(target, 'uc_pickbox').grid;
        var opts = $.data(target, 'uc_pickbox').options;
        var data = $.data(target, 'uc_pickbox')._data;
        if (data && data.rows) data = data.rows;
        var suitableArr = [];
        if (data && value && $.trim(value)) {
            $.each(data, function (idx, val) {
                for (var i in opts.columns[0]) {
                    var reg = new RegExp(value, 'ig');
                    if (reg.test(val[opts.columns[0][i].field])) {
                        suitableArr.push(val);
                        break;
                    }
                }
            });
        }
        else {
            suitableArr = data;
        }
        if (grid.datagrid) {
            grid.datagrid('loadData', suitableArr);
            grid.datagrid('selectRow', 0);
        }
    }

    function updateSelection(target) {
        var grid = $.data(target, 'uc_pickbox').grid;
        var opts = $.data(target, 'uc_pickbox').options;
        var valArr = $(target).combo('getValues');
        var rows = grid.datagrid('getRows');
        if (valArr && valArr.length > 0) {
            $.each(rows, function (rowIdx, row) {
                $.each(valArr, function (idx, val) {
                    if (row[opts.idField] === val) {
                        grid.datagrid('selectRow', rowIdx);
                    }
                });
            });
        }
    }
    function up(target) {
        var grid = $.data(target, 'uc_pickbox').grid;
        var opts = $.data(target, 'uc_pickbox').options;
        var row = grid.datagrid('getSelected');
        if (row) {
            var rowIndex = grid.datagrid('getRowIndex', row);
            rowIndex = rowIndex == 0 ? rowIndex : rowIndex - 1;
            grid.datagrid('selectRow', rowIndex);
        }

    }
    function down(target) {
        var grid = $.data(target, 'uc_pickbox').grid;
        var opts = $.data(target, 'uc_pickbox').options;
        var row = grid.datagrid('getSelected');
        if (row) {
            var rowIndex = grid.datagrid('getRowIndex', row);
            var rows = grid.datagrid('getRows');
            rowIndex = rowIndex >= rows.length - 1 ? rows.length - 1 : rowIndex + 1;
            grid.datagrid('selectRow', rowIndex);
        }
    }




    $.fn.uc_pickbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_pickbox.methods[options];
            if (method) return method(this, param);
            else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_pickbox');
            if (state) $.extend(state.options, options);

            else $.data(this, 'uc_pickbox', { options: $.extend({}, $.fn.validatebox.defaults, $.fn.uc_pickbox.defaults, $.fn.uc_pickbox.parseOptions(this), options) });

            create(this);
        });
    };
    $.fn.uc_pickbox.parseOptions = function (target) {
        var opts = $.extend({}, $.fn.combo.parseOptions(target), $.fn.datagrid.parseOptions(target), $.parser.parseOptions(target, ["idField", "textField", "mode"]));
        //if (opts.idField !== opts.textField) opts.textField = opts.idField;
        return opts;
    };


    var timerQuery;
    $.fn.uc_pickbox.defaults = {
        winModal: false,
        winCenter: false,
        pagination: false,
        sortable: true,
        autoRowHeight: false,
        fit: true,
        pageSize: 50,
        remoteSort: false,
        singleSelect: true,
        reloadEveryTimes: false,
        alignRight: false,
        onOk: function (rows, target) { },
        keyHandler: {
            query: function (q, e) {
                timerQuery && clearTimeout(timerQuery);
                var thisObj = this;
                timerQuery = setTimeout(function () {
                    search(thisObj, q);
                }, 300);
            },
            enter: function () {
                var panel = $(this).combo('panel');
                if (!panel.panel('options').closed)
                    ok(this);
            },
            up: function () {
                var panel = $(this).combo('panel');
                if (!panel.panel('options').closed)
                    up(this);
            },
            down: function () {
                var panel = $(this).combo('panel');
                if (!panel.panel('options').closed)
                    down(this);
            }
        }
    };
    $.fn.uc_pickbox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_pickbox').options;
        },
        grid: function (jq) {
            return $.data(jq[0], "uc_pickbox").grid;
        },
        setValue: function (jq, value) {
            $(jq[0]).combo('setText', value);
            $(jq[0]).combo('setValue', value);
        },
        setUrl: function (jq, value) {
            var opts = $.data(jq[0], 'uc_pickbox').options;
            opts._reload = true;
            opts.url = value;
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_progressbar') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_progressbar';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_progressbar').options;
        $(target).progressbar(opts);
    }

    $.fn.uc_progressbar = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_progressbar.methods[options];
            if (method) return method(this, param);
            else return $(this).progressbar(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_progressbar');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_progressbar', { options: $.extend({}, $.fn.progressbar.defaults, $.fn.uc_progressbar.defaults, $.fn.progressbar.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_progressbar.defaults = {};

    $.fn.uc_progressbar.methods = {

    };

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_radioGroup') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_radioGroup';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var span = $('<span class="dh-radioGroup"></span>');
        var oldSpan = $.data(target, 'uc_radioGroup').span;
        if (oldSpan) oldSpan.remove();
        $(target).after(span);
        $(target).removeClass('easyui-uc_radioGroup').addClass('easyui-uc_radioGroup');
        $.data(target, 'uc_radioGroup').span = span;
        if (opts.url) {
            reload(target, opts.url);
        } else if (opts.data) {
            loadData(target, opts.data);
        }

        span.on("input:radio").bind('change', function () {
            var value = getValue(target);
            if (opts.onChange) opts.onChange(target, value);
        });
        resize(target);
    }
    function resize(target, width) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var span = $.data(target, 'uc_radioGroup').span;
        if (width) {
            opts.width = width;
        }
        if (!opts.width) {
            opts.width = $(target).outerWidth();
        }
        if (!opts.height) {
            opts.height = $(target).outerHeight();
        }
        span.outerHeight(opts.height).outerWidth(opts.width);
        //select.outerHeight(opts.height).outerWidth(opts.width);
    }

    function loadData(target, data) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var span = $.data(target, 'uc_radioGroup').span;
        opts.data = data;
        span.html('');
        if (data.length) {
            if (opts.orientation == 'vertical') {
                var ul = $('<ul class="dh-radio-list-v" ></ul>').appendTo(span);
            } else {
                var ul = $('<ul class="dh-radio-list-h"" ></ul>').appendTo(span);
            }
            $.each(data, function (idx, val) {
                ul.append('<li><label><input style="width:15px;height:15px;" name="' + opts.name + '" type="radio" class="easyui-uc_validatebox" value="' + val[opts.valueField] + '" />' + val[opts.textField] + '</label></li>');
                //select.append('<option value="' + val[opts.valueField] + '">' + val[opts.textField] + '</option>');
                //select.append('<option value="' + val[opts.valueField] + '">' + val[opts.textField] + '</option>');
            });
        }
        setValue(target);
    }

    function getData(target) {
        var data = $.data(target, 'uc_radioGroup').options.data;
        if (!data)
            data = [];
        return data;
    }

    function setValue(target, val) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var span = $.data(target, 'uc_radioGroup').span;
        if (val === undefined || val === null)
            val = $(target).val();
        $(target).val(val);
        var checkboxArr = span.find('input');

        for (var i = 0, count = checkboxArr.length; i < count; ++i) {
            if ($(checkboxArr[i]).val() == val) {
                $(checkboxArr[i]).prop('checked', true);
                break;
            }
        }

    }

    function getValue(target) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var span = $.data(target, 'uc_radioGroup').span;
        var value = $(span).find("input:checked").val();
        $(target).val(value);
        return value;
    }

    function getValueStr(target) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var span = $.data(target, 'uc_radioGroup').span;


        var valArr = [];
        var checkboxArr = span.find('input:checked');


        var value = '';
        if (valArr) {
            value = valArr.join(opts.splitter);
        }
        return value;
    }

    function removeValue(target, val) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var data = opts.data;
        $(target).val(val);
        select.val(val.split(opts.splitter));

    }

    function addRows(target, rows) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) data = [];
        $.each(rows, function (idx, row) {
            data.push(row);
        });
        loadData(target, data);
    }

    function removeRows(target, rows, isValueType) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) return;
        var valArr = [];
        if (isValueType) {
            for (var i = 0; i < rows.length; ++i)
                valArr.push(rows[i][opts.valueField]);
        }
        for (var i = 0; i < data.length; ++i) {
            if (isValueType) {
                if ($.inArray(data[i][opts.valueField], valArr) > -1) {
                    data.splice(i, 1);
                    --i;
                }

            } else {
                if ($.inArray(data[i], rows) > -1) {
                    data.splice(i, 1);
                    --i;
                }
            }
        }
        /*$.each(data, function (idx, row) {
        if ($.inArray(row, rows) > -1)
        data.splice(idx, 1);
        });
        */
        loadData(target, data);
    }

    function removeValRows(target, rows) {
        removeRows(target, rows, true);
    }

    function getSelRows(target, isCopy) {
        var opts = $.data(target, 'uc_radioGroup').options;
        var data = opts.data;
        var value = getValueStr(target);
        if (value === undefined || value === null) return value;
        var valArr = value.split(opts.splitter);
        var rows = [];
        $.each(data, function (idx, val) {
            if ($.inArray(val[opts.valueField].toString(), valArr) > -1) {
                if (isCopy)
                    rows.push($.extend({}, val));
                else
                    rows.push(val);
            }
        });
        return rows;
    }

    function removeSelRows(target) {
        var rows = getSelRows(target);
        removeRows(target, rows);
    }

    function reload(target, url) {
        com.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                loadData(target, data);
            }
        });
    }

    $.fn.uc_radioGroup = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_radioGroup.methods[options];
            if (method) return method(this, param);
            else return false;
            //else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_radioGroup');
            if (state) $.extend(state.options, options);

            else $.data(this, 'uc_radioGroup', { options: $.extend({}, $.fn.uc_radioGroup.defaults, $.fn.uc_radioGroup.parseOptions(this), options) });

            create(this);
        });
    };
    $.fn.uc_radioGroup.parseOptions = function (target) {
        var opts = $.extend({}, $.parser.parseOptions(target, ["valueField", "textField", "width", "height", "data", 'isValueArray', 'name']));
        return opts;
    };


    $.fn.uc_radioGroup.defaults = {
        splitter: ',',
        height: 22,
        isValueArray: false,
        name: 'uc_radioGroup' + Utils.getGuid(),
        orientation: 'horizontal',
        onDbClick: function (target, selRows) {

        }
    };

    $.fn.uc_radioGroup.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_radioGroup').options;
        },
        setValue: function (jq, value) {
            setValue(jq[0], value);
        },
        getValue: function (jq) {
            return getValue(jq[0]);
        },
        getData: function (jq) {
            return getData(jq[0]);
        },
        reload: function (jq, url) {
            reload(jq[0], url);
        },
        loadData: function (jq, data) {
            loadData(jq[0], data);
        }, addRows: function (jq, rows) {
            addRows(jq[0], rows);
        }, removeRows: function (jq, rows) {
            removeRows(jq[0], rows);
        }, removeValRows: function (jq, rows) {
            removeValRows(jq[0], rows);
        }, getSelRows: function (jq, isCopy) {
            return getSelRows(jq[0], isCopy);
        }, removeSelRows: function (jq) {
            removeSelRows(jq[0]);
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_searchbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_searchbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_searchbox').options;
        $(target).searchbox(opts);
        var height = $($.data(target).searchbox.searchbox).find('input:first').height();
        $($.data(target).searchbox.searchbox).find('span').css('height', height +2);
        $($.data(target).searchbox.searchbox).css('height', height + 2);
    }

    $.fn.uc_searchbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_searchbox.methods[options];
            if (method) return method(this, param);
            else return $(this).searchbox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_searchbox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_searchbox', { options: $.extend({}, $.fn.searchbox.defaults, $.fn.uc_searchbox.defaults, $.fn.searchbox.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_searchbox.defaults = {
    };

    $.fn.uc_searchbox.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_spinner') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_spinner';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_spinner').options;
        $(target).spinner(opts);
        $(target).spinner('resize');
    }

    $.fn.uc_spinner = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_spinner.methods[options];
            if (method) return method(this, param);
            else return $(this).spinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_spinner');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_spinner', { options: $.extend({}, $.fn.spinner.defaults, $.fn.uc_spinner.defaults, $.fn.spinner.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_spinner.defaults = {};

    $.fn.uc_spinner.methods = {};

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_splitbutton') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_splitbutton';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_splitbutton').options;
        $(target).splitbutton(opts);
    }

    $.fn.uc_splitbutton = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_splitbutton.methods[options];
            if (method) return method(this, param);
            else return $(this).splitbutton(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_splitbutton');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_splitbutton', { options: $.extend({}, $.fn.splitbutton.defaults, $.fn.uc_splitbutton.defaults, $.fn.splitbutton.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_splitbutton.defaults = {};

    $.fn.uc_splitbutton.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_tabs') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_tabs';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_tabs').options;
        $(target).tabs(opts);
    }

    $.fn.uc_tabs = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_tabs.methods[options];
            if (method) return method(this, param);
            else return $(this).tabs(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_tabs');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_tabs', { options: $.extend({}, $.fn.tabs.defaults, $.fn.uc_tabs.defaults, $.fn.tabs.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_tabs.defaults = {};

    $.fn.uc_tabs.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_textbox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_textbox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_textbox').options;
        $(target).textbox(opts);

    }

    $.fn.uc_textbox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_textbox.methods[options];
            if (method) return method(this, param);
            else return $(this).textbox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_textbox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_textbox', { options: $.extend({}, $.fn.textbox.defaults, $.fn.uc_textbox.defaults, $.fn.textbox.parseOptions(this), options) });

            create(this);
          
        });
    };


    $.fn.uc_textbox.defaults = {};

    $.fn.uc_textbox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_textbox').options;
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_timespinner') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_timespinner';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_timespinner').options;
        $(target).timespinner(opts);
    }

    $.fn.uc_timespinner = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_timespinner.methods[options];
            if (method) return method(this, param);
            else return $(this).timespinner(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_timespinner');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_timespinner', { options: $.extend({}, $.fn.timespinner.defaults, $.fn.uc_timespinner.defaults, $.fn.timespinner.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_timespinner.defaults = {};

    $.fn.uc_timespinner.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_tooltip') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_tooltip';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_tooltip').options;
        $(target).tooltip(opts);
    }

    $.fn.uc_tooltip = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_tooltip.methods[options];
            if (method) return method(this, param);
            else return $(this).tooltip(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_tooltip');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_tooltip', { options: $.extend({}, $.fn.tooltip.defaults, $.fn.uc_tooltip.defaults, $.fn.tooltip.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_tooltip.defaults = {};

    $.fn.uc_tooltip.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_tree') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_tree';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_tree').options;
        $(target).tree(opts);
    }

    $.fn.uc_tree = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_tree.methods[options];
            if (method) return method(this, param);
            else return $(this).tree(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_tree');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_tree', { options: $.extend({}, $.fn.tree.defaults, $.fn.uc_tree.defaults, $.fn.tree.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_tree.defaults = {};

    $.fn.uc_tree.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_treegrid') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_treegrid';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_treegrid').options;
        $(target).treegrid(opts);
    }

    $.fn.uc_treegrid = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_treegrid.methods[options];
            if (method) return method(this, param);
            else return $(this).treegrid(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_treegrid');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_treegrid', { options: $.extend({}, $.fn.treegrid.defaults, $.fn.uc_treegrid.defaults, $.fn.treegrid.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_treegrid.defaults = {};

    $.fn.uc_treegrid.methods = {};

})(jQuery)
;(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_uploadify') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_uploadify';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_uploadify').options;
        var span = $('<span class="dh-uploadify"></span>');
        $(target).after(span);
        var input = $('<input id="shit" type="file" ></input>').appendTo(span);
        $(target).removeClass('easyui-uc_uploadify').addClass('easyui-uc_uploadify');

        $("#shit").uploadify({
            'swf': './uploadify/uploadify.swf',
            'uploader': '/utilis/Utilis/UploadHandler',
            'auto': true,
            'onUploadSuccess': function (file, data, resp) {
                console.log(data);
            }
        });
        $.data(target, 'uc_uploadify').input = input;
        $.data(target, 'uc_uploadify').span = span;
        resize(target);
    }

    function resize(target, width) {
        var opts = $.data(target, 'uc_uploadify').options;
        var span = $.data(target, 'uc_uploadify').span;
        var input = $.data(target, 'uc_uploadify').input;
        if (width) {
            opts.width = width;
        }
        if (!opts.width) {
            opts.width = $(target).outerWidth();
        }
        if (!opts.height) {
            opts.height = $(target).outerHeight();
        }
        span.outerHeight(opts.height).outerWidth(opts.width);
        input.outerHeight(opts.height).outerWidth(opts.width);
    }

    function loadData(target, data) {
        var opts = $.data(target, 'uc_uploadify').options;
        var select = $.data(target, 'uc_uploadify').select;
        opts.data = data;
        select.empty();
        if (data.length) {
            $.each(data, function (idx, val) {
                select.append('<option value="' + val[opts.valueField] + '">' + val[opts.textField] + '</option>');
            });
        }
        setValue(target);
    }

    function getData(target) {
        var data = $.data(target, 'uc_uploadify').options.data;
        if (!data)
            data = [];
        return data;
    }

    function setValue(target, val) {
        var opts = $.data(target, 'uc_uploadify').options;
        var select = $.data(target, 'uc_uploadify').select;
        if (val === undefined || val === null)
            val = $(target).val();
        $(target).val(val);
        select.val(val.split(opts.splitter));
    }

    function getValue(target) {
        var opts = $.data(target, 'uc_uploadify').options;
        var select = $.data(target, 'uc_uploadify').select;
        var valArr = select.val();
        var value;
        if (valArr) {
            value = valArr.join(opts.splitter);
        }
        $(target).val(value);
        return value;
    }

    function removeValue(target, val) {
        var opts = $.data(target, 'uc_uploadify').options;
        var data = opts.data;
        $(target).val(val);
        select.val(val.split(opts.splitter));

    }

    function addRows(target, rows) {
        var opts = $.data(target, 'uc_uploadify').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) data = [];
        $.each(rows, function (idx, row) {
            data.push(row);
        });
        loadData(target, data);
    }

    function removeRows(target, rows, isValueType) {
        var opts = $.data(target, 'uc_uploadify').options;
        var data = opts.data;
        if (!rows) return;
        if (!data) return;
        var valArr = [];
        if (isValueType) {
            for (var i = 0; i < rows.length; ++i)
                valArr.push(rows[i][opts.valueField]);
        }
        for (var i = 0; i < data.length; ++i) {
            if (isValueType) {
                if ($.inArray(data[i][opts.valueField], valArr) > -1) {
                    data.splice(i, 1);
                    --i;
                }

            } else {
                if ($.inArray(data[i], rows) > -1) {
                    data.splice(i, 1);
                    --i;
                }
            }
        }
        /*$.each(data, function (idx, row) {
        if ($.inArray(row, rows) > -1)
        data.splice(idx, 1);
        });
        */
        loadData(target, data);
    }

    function removeValRows(target, rows) {
        removeRows(target, rows, true);
    }

    function getSelRows(target, isCopy) {
        var opts = $.data(target, 'uc_uploadify').options;
        var data = opts.data;
        var value = getValue(target);
        if (value === undefined || value === null) return value;
        var valArr = value.split(opts.splitter);
        var rows = [];
        $.each(data, function (idx, val) {
            if ($.inArray(val[opts.valueField].toString(), valArr) > -1) {
                if (isCopy)
                    rows.push($.extend({}, val));
                else
                    rows.push(val);
            }
        });
        return rows;
    }

    function removeSelRows(target) {
        var rows = getSelRows(target);
        removeRows(target, rows);
    }

    function reload(target, url) {
        com.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                loadData(target, data);
            }
        });
    }

    $.fn.uc_uploadify = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_uploadify.methods[options];
            if (method) return method(this, param);
            else return $(this).combo(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_uploadify');
            if (state) $.extend(state.options, options);

            else $.data(this, 'uc_uploadify', { options: $.extend({}, $.fn.uc_uploadify.defaults, $.fn.uc_uploadify.parseOptions(this), options) });

            create(this);
        });
    };
    $.fn.uc_uploadify.parseOptions = function (target) {
        var opts = $.extend({}, $.parser.parseOptions(target, ["valueField", "textField", "width", "height", "data"]));
        return opts;
    };


    $.fn.uc_uploadify.defaults = {
        splitter: ',',
        height: 22,
        onDbClick: function (target, selRows) {

        }
    };

    $.fn.uc_uploadify.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_uploadify').options;
        },
        setValue: function (jq, value) {
            setValue(jq[0], value);
        },
        getValue: function (jq) {
            return getValue(jq[0]);
        },
        getData: function (jq) {
            return getData(jq[0]);
        },
        reload: function (jq, url) {
            reload(jq[0], url);
        },
        loadData: function (jq, data) {
            loadData(jq[0], data);
        }, addRows: function (jq, rows) {
            addRows(jq[0], rows);
        }, removeRows: function (jq, rows) {
            removeRows(jq[0], rows);
        }, removeValRows: function (jq, rows) {
            removeValRows(jq[0], rows);
        }, getSelRows: function (jq, isCopy) {
            return getSelRows(jq[0], isCopy);
        }, removeSelRows: function (jq) {
            removeSelRows(jq[0]);
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_validatebox') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_validatebox';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_validatebox').options;
        $(target).validatebox(opts);

    }

    $.fn.uc_validatebox = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_validatebox.methods[options];
            if (method) return method(this, param);
            else return $(this).validatebox(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_validatebox');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_validatebox', { options: $.extend({}, $.fn.validatebox.defaults, $.fn.uc_validatebox.defaults, $.fn.validatebox.parseOptions(this), options) });

            create(this);
            //-- �� 960 grid ���� �ٷֱ�ָ������ʱ��validatetextbox ��Ϊ���� border ��ʵ�ʿ��Ȼ��ȸ������ȳ��� 2px 
            if ($(this).width()) {
                $(this).width($(this).width() - 4);
            }
        });
    }

    $.fn.uc_validatebox.defaults = {};

    $.fn.uc_validatebox.methods = {
        options: function (jq) {
            return $.data(jq[0], 'uc_validatebox').options;
        }
    };

})(jQuery);(function () {
    (function () {
        if ($.inArray($.parser.plugins, 'uc_window') < 0)
            $.parser.plugins[$.parser.plugins.length] = 'uc_window';
    })();

    function create(target) {
        var opts = $.data(target, 'uc_window').options;
        $(target).window(opts);
    }

    $.fn.uc_window = function (options, param) {
        if (typeof options === 'string') {
            var method = $.fn.uc_window.methods[options];
            if (method) return method(this, param);
            else return $(this).window(options, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'uc_window');
            if (state) $.extend(state.options, options);
            else $.data(this, 'uc_window', { options: $.extend({}, $.fn.window.defaults, $.fn.uc_window.defaults, $.fn.window.parseOptions(this), options) });

            create(this);
        });
    }

    $.fn.uc_window.defaults = {
        onBeforeOpen: function () {
            var mask = $.data(this, 'window').mask;
            $(mask).height(document.body.scrollHeight);
        }
    };

    $.fn.uc_window.methods = {};

})(jQuery)
;{
    if ($.fn.datagrid) {
        /**
         * Datagrid扩展方法tooltip 基于Easyui 1.3.3，可用于Easyui1.3.3+
         * 简单实现，如需高级功能，可以自由修改
         * 使用说明:
         *   在easyui.min.js之后导入本js
         *   代码案例:
         *		$("#dg").datagrid({....}).datagrid('tooltip'); 所有列
         *		$("#dg").datagrid({....}).datagrid('tooltip',['productid','listprice']); 指定列
         */
        $.extend($.fn.datagrid.methods, {
            tooltip: function (jq, fields) {
                return jq.each(function () {
                    var panel = $(this).datagrid('getPanel');
                    if (fields && typeof fields == 'object' && fields.sort) {
                        $.each(fields, function () {
                            var field = this;
                            bindEvent($('.datagrid-body td[field=' + field + '] .datagrid-cell', panel));
                        });
                    } else {
                        bindEvent($(".datagrid-body .datagrid-cell", panel));
                    }
                });

                function bindEvent(jqs) {
                    jqs.mouseover(function () {
                        var content = $(this).text();
                        $(this).tooltip({
                            content: content,
                            trackMouse: true,
                            onShow: function () {
                                $(this).tooltip("tip").css({
                                    backgroundColor: "#FFFFCC",
                                    boxShadow: "1px 1px 3px #666666"
                                });
                            },
                            onHide: function () {
                                $(this).tooltip('destroy');
                            }
                        }).tooltip('show');
                    });
                }
            },
            /**
             * 超出宽度省略,最小宽度大于20px
             */
            wtooltip: function (jq, fields) {
                return jq.each(function () {
                    var panel = $(this).datagrid('getPanel');
                    if (fields && typeof fields == 'object' && fields.sort) {
                        $.each(fields, function () {
                            var field = this;
                            var fdiv = $('.datagrid-body td[field=' + field + '] .datagrid-cell', panel);
                            bindEvent(fdiv, fdiv.width());
                        });
                    } else {
                        var flist = $(".datagrid-body .datagrid-cell", panel);
                        $.each(flist, function () {
                            bindEvent($(this), $(this).width());
                        });
                    }
                });

                function bindEvent(jqs, w) {
                    jqs.mouseover(function () {
                        var content = $(this).text();                        
                        $(this).tooltip({
                            content: content,
                            trackMouse: true,
                            onShow: function () {
                                $(this).tooltip("tip").css({
                                    backgroundColor: "#FFFFCC",
                                    boxShadow: "1px 1px 3px #666666",
                                    borderColor: "#666",
                                    "max-width": 400,
                                    "font-size": "18px!important",
                                });
                            },
                            onHide: function () {
                                $(this).tooltip('destroy');
                            }
                        }).tooltip('show');                        
                    }).attr("style", "width:" + w + "px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;");
                }
            }
        });
        //#region override datagrid editor

        // datebox
        $.fn.datagrid, $.extend($.fn.datagrid.defaults.editors, {
            uc_datebox: {
                init: function (container, options) {
                    var input = $('<input type="text">').appendTo(container);
                    input.uc_datebox(options);

                    return input;
                },
                destroy: function (target) {
                    $(target).uc_datebox("destroy");
                },
                getValue: function (target) {
                    var val = $(target).uc_datebox("getValue");
                    if (!val) return val;
                    return Utils.parseDate(val);
                },
                setValue: function (target, value) {
                    if (value) {
                        value = Utils.formatDate(value);
                    }
                    $(target).uc_datebox("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_datebox("resize", width);
                }
            }
        });

        // combogrid
        $.extend($.fn.datagrid.defaults.editors, {
            uc_combogrid: {
                init: function (container, options) {
                    var input = $('<input type="text">').appendTo(container);
                    input.uc_combogrid(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_combogrid("destroy");
                },
                getValue: function (target) {
                    return $(target).uc_combogrid("getValue");
                },
                setValue: function (target, value) {
                    $(target).uc_combogrid("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_combogrid("resize", width);
                }
            }
        });

        // dollar
        $.extend($.fn.datagrid.defaults.editors, {
            uc_dollar: {
                init: function (container, options) {
                    var input = $('<input type="text">').appendTo(container);
                    input.uc_dollar(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_dollar("destroy");
                },
                getValue: function (target) {
                    return $(target).uc_dollar("getValue");
                },
                setValue: function (target, value) {
                    $(target).uc_dollar("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_dollar("resize", width);
                }
            }
        });

        // dollar
        $.extend($.fn.datagrid.defaults.editors, {
            uc_dollar: {
                init: function (container, options) {
                    var input = $('<input type="text">').appendTo(container);
                    input.uc_dollar(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_dollar("destroy");
                },
                getValue: function (target) {
                    return $(target).uc_dollar("getValue");
                },
                setValue: function (target, value) {
                    $(target).uc_dollar("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_dollar("resize", width);
                }
            }
        });

        // pecent 
        $.extend($.fn.datagrid.defaults.editors, {
            uc_percent: {
                init: function (container, options) {
                    var input = $('<input type="text">').appendTo(container);
                    input.uc_percent(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_percent("destroy");
                },
                getValue: function (target) {
                    return $(target).uc_percent("getValue");
                },
                setValue: function (target, value) {
                    $(target).uc_percent("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_percent("resize", width);
                }
            }
        });
        // checkbox
        $.extend($.fn.datagrid.defaults.editors, {
            uc_checkbox: {
                init: function (container, options) {
                    var input = $("<input type=\"checkbox\">").appendTo(container);
                    $.data(input, "on", options.on);
                    $.data(input, "off", options.off);
                    return input;
                },
                getValue: function (target) {
                    if ($(target).is(":checked")) {
                        return $.data(target, "on");
                    } else {
                        return $.data(target, "off");
                    }
                },
                setValue: function (target, value) {
                    var bool = false;
                    if ($.data(target, "on") === value) {
                        bool = true;
                    }
                    $(target).prop("checked", bool);
                }
            }
        });

        //validatebox
        $.extend($.fn.datagrid.defaults.editors, {
            uc_validatebox: {
                init: function (container, options) {
                    var input = $('<input type="text" class="easyui-uc_validatebox"/>');
                    $(input).appendTo(container);
                    input.uc_validatebox(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).remove();
                },
                getValue: function (target) {
                    return $(target).val();
                },
                setValue: function (target, value) {
                    $(target).val(value);
                },
                resize: function (target, width) {
                    $(target)._outerWidth(width);
                }
            }
        });

        // combobox
        $.extend($.fn.datagrid.defaults.editors, {
            uc_combobox: {
                init: function (container, options) {
                    var input = $('<input type="text"/>');
                    $(input).appendTo(container);
                    input.uc_combobox(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_combobox('destroy');
                },
                getValue: function (target) {
                    return $(target).uc_combobox('getValue');
                },
                setValue: function (target, value) {
                    $(target).uc_combobox('setValue', value);
                },
                resize: function (target, width) {
                    $(target).uc_combobox('resize', width);
                }
            }
        });

        // numberspinner
        $.extend($.fn.datagrid.defaults.editors, {
            uc_numberspinner: {
                init: function (container, options) {
                    var input = $('<input type="text">').appendTo(container);
                    input.uc_numberspinner(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_dollar("destroy");
                },
                getValue: function (target) {
                    return $(target).uc_dollar("getValue");
                },
                setValue: function (target, value) {
                    $(target).uc_dollar("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_dollar("resize", width);
                }
            }
        });

        // uc_linkbutton 
        $.extend($.fn.datagrid.defaults.editors, {
            uc_linkbutton: {
                init: function (container, options) {
                    var input = $('<a/>').appendTo(container);
                    input.uc_linkbutton(options);
                    return input;
                },
                destroy: function (target) {
                    $(target).uc_linkbutton("destroy");
                },
                getValue: function (target) {
                    //return $(target).uc_linkbutton("getValue");
                },
                setValue: function (target, value) {
                    //$(target).uc_linkbutton("setValue", value);
                },
                resize: function (target, width) {
                    $(target).uc_linkbutton("resize", width);
                }
            }
        });

        // dateRange
        $.extend($.fn.datagrid.defaults.editors, {
            uc_dateRange: {
                init: function (container, options) {
                    var input = $('<input type="text"/>').appendTo(container);
                    $(input).uc_dateRange(options);
                    return input;
                },
                getValue: function (target) {
                    var value = $(target).uc_dateRange('getValue');
                    //console.log(value);
                    return value;
                },
                setValue: function (target, value) {
                    $(target).uc_dateRange('setValue', value);
                },
                resize: function (target, width) {
                    $(target).uc_dateRange('resize', width);
                }
            }
        })
        //#endregion
    }
    if ($.fn.treegrid) {
        /**
        * 扩展树表格级联勾选方法：
        * @param {Object} container
        * @param {Object} options
        * @return {TypeName} 
        */
        $.extend($.fn.treegrid.methods, {
            /**
            * 级联选择
            * @param {Object} target
            * @param {Object} param 
            *		param包括两个参数:
            *			id:勾选的节点ID
            *			deepCascade:是否深度级联
            * @return {TypeName} 
            */
            cascadeCheck: function (target, param) {
                //$.extend(param, { deepCascade: true, checked: null }, param);
                // 用上面这种方式，会忽略掉 param 的；
                param = $.extend({}, { deepCascade: true, checked: null }, param);
                var opts = $.data(target[0], "treegrid").options;
                if (opts.singleSelect)
                    return;
                var idField = opts.idField; //这里的idField其实就是API里方法的id参数
                var status = false; //用来标记当前节点的状态，true:勾选，false:未勾选
                if (param.checked != undefined && param.checked != null) {
                    status = param.checked;
                } else {
                    var selectNodes = $(target).treegrid('getSelections'); //获取当前选中项
                    for (var i = 0; i < selectNodes.length; i++) {
                        if (selectNodes[i][idField] == param.id)
                            status = true;
                    }
                }
                //级联选择父节点
                // selectParent(target[0], param.id, idField, status);
                selectChildren(target[0], param.id, idField, param.deepCascade, status);
                /**
                * 级联选择父节点
                * @param {Object} target
                * @param {Object} id 节点ID
                * @param {Object} status 节点状态，true:勾选，false:未勾选
                * @return {TypeName} 
                */
                function selectParent(target, id, idField, status) {
                    var parent = $(target).treegrid('getParent', id);
                    if (parent) {
                        var parentId = parent[idField];
                        if (status)
                            $(target).treegrid('select', parentId);
                        else
                            $(target).treegrid('unselect', parentId);
                        selectParent(target, parentId, idField, status);
                    }
                }
                /**
                * 级联选择子节点
                * @param {Object} target
                * @param {Object} id 节点ID
                * @param {Object} deepCascade 是否深度级联
                * @param {Object} status 节点状态，true:勾选，false:未勾选
                * @return {TypeName} 
                */
                function selectChildren(target, id, idField, deepCascade, status) {
                    //深度级联时先展开节点
                    if (!status && deepCascade)
                        $(target).treegrid('expand', id);
                    //根据ID获取下层孩子节点
                    var children = $(target).treegrid('getChildren', id);
                    for (var i = 0; i < children.length; i++) {
                        var childId = children[i][idField];
                        if (status)
                            $(target).treegrid('select', childId);
                        else
                            $(target).treegrid('unselect', childId);
                        selectChildren(target, childId, idField, deepCascade, status); //递归选择子节点
                    }
                }
            }
        });
    }
    //-- datebox defaults
    if ($.fn.datebox)
        $.fn.datebox.defaults.formatter = function (date) {
            // onSelect 时才会触发 formatter, onpopup 时才触发 parser
            return Utils.formatDate(date);
        };

    if ($.fn.datebox)
        $.fn.datebox.defaults.parser = function (s) {
            if (!s) {
                if (s == '') return '';
                return new Date();
            }
            var d = Utils.parseDate(s);
            if (d.toString() === 'Invalid Date') return new Date();
            return d;
        };

    //-- dateRange default
    if ($.fn.uc_dateRange) {
        $.fn.uc_dateRange.defaults.formatter = function (df, dt) {
            return Utils.formatDate(df) + ' ~ ' + Utils.formatDate(dt);
        };
        $.fn.uc_dateRange.defaults.parser = function (s) {
            if (s) {
                var dArr = s.split(' ~ ');
                if (dArr.length > 1) {
                    var d1 = Utils.parseDate(dArr[0]);
                    var d2 = Utils.parseDate(dArr[1]);
                    if (d1.toString() === 'Invalid Date') d1 = new Date();
                    if (d2.toString() === "Invalid Date") d2 = new Date();
                    return [d1, d2];
                } else {
                    return [new Date(), new Date()];
                }
            } else {
                return [new Date(), new Date()];
            }
        }
    }
    if ($.fn.combo) {
        /*
        $.fn.combo.methods.resize = function (jq, width) {
        var opts = $.data(jq[0], "combo").options;
        var comb = $.data(jq[0], "combo").combo;
        var panel = $.data(jq[0], "combo").panel;
        if (width) {
        opts.width = width;
        }
        if (isNaN(opts.width)) {
        var c = $(jq[0]).clone();
        c.css("visibility", "hidden");
        c.appendTo("body");
        opts.width = $(jq[0]).outerWidth();
        c.remove();
        }

        comb.appendTo("body");
        var comboText = comb.find("input.combo-text");
        var comboArrow = comb.find(".combo-arrow");
        var arrowOuterWidth = opts.hasDownArrow ? comboArrow._outerWidth() : 0;
        comb._outerWidth(opts.width)._outerHeight(opts.height);
        comboText._outerWidth(comb.width() - arrowOuterWidth);
        comboText.css({ height: comb.height() + "px", lineHeight: comb.height() + "px" });
        comboArrow._outerHeight(comb.height() + 2);
        panel.panel("resize", { width: (opts.panelWidth ? opts.panelWidth : comb.outerWidth()), height: opts.panelHeight });
        comb.insertAfter(jq[0]);
        };
        */
    }
    if ($.fn.spinner) {
        /*$.fn.spinner.methods.resize = function (jq, width) {
        var opts = $.data(jq[0], "spinner").options;
        var spinner = $.data(jq[0], "spinner").spinner;
        if (width) {
        opts.width = width;
        }
        var _452 = $("<div style=\"display:none\"></div>").insertBefore(spinner);
        spinner.appendTo("body");
        if (isNaN(opts.width)) {
        opts.width = $(jq[0]).outerWidth();
        }
        var spinnerArrow = spinner.find(".spinner-arrow");
        spinner._outerWidth(opts.width)._outerHeight(opts.height + 2);
        $(jq[0])._outerWidth(spinner.width() - spinnerArrow.outerWidth());
        $(jq[0]).css({ height: spinner.height() - 2 + "px", lineHeight: spinner.height() - 2 + "px" });
        spinnerArrow._outerHeight(spinner.height());
        spinnerArrow.find("span")._outerHeight(spinnerArrow.height() / 2);
        spinner.insertAfter(_452);
        _452.remove();
        };
        */
    }

    //在layout的panle全局配置中,增加一个onCollapse处理title
    $.extend($.fn.panel.defaults, {
        onCollapse: function () {
            //获取layout容器
            var layout = $(this).parents("div.layout");
            //获取当前region的配置属性
            var opts = $(this).panel("options");
            //获取key
            var expandKey = "expand" + opts.region.substring(0, 1).toUpperCase() + opts.region.substring(1);
            //从layout的缓存对象中取得对应的收缩对象
            var expandPanel = layout.data("layout").panels[expandKey];
            //针对横向和竖向的不同处理方式
            if (opts.region == "west" || opts.region == "east") {
                //竖向的文字打竖,其实就是切割文字加br
                var split = [];
                for (var i = 0; i < opts.title.length; i++) {
                    split.push(opts.title.substring(i, i + 1));
                }
                expandPanel.panel("body").addClass("panel-title").css("text-align", "center").html(split.join("＜br＞"));
            } else {
                if (expandPanel)
                    expandPanel.panel("setTitle", opts.title);
            }
        }
    });
    $.extend($.fn.tabs.methods, {
        setTabTitle: function (jq, opts) {
            return jq.each(function () {
                var tab = opts.tab;
                var options = tab.panel("options");
                var tab = options.tab;
                options.title = opts.title;
                var title = tab.find("span.tabs-title");
                title.html(opts.title);
            });
        }
    });

    $.extend($.fn.tabs.methods, {
        getTabTitle: function (jq, index) {
            var tab = $(jq[0]).tabs('getTab', index);
            var options = tab.panel("options");
            var tab = options.tab;
            var title = tab.find("span.tabs-title");
            return title.html();
        }
    });



        $.extend($.fn.validatebox.defaults.rules, {
            minLength: {
                validator: function (value, param) {   //value 为需要校验的输入框的值 , param为使用此规则时存入的参数
                    return value.length >= param[0];
                },
                message: '请输入最小{0}位字符.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            maxLength: {
                validator: function (value, param) {
                    return param[0] >= value.length;
                },
                message: '请输入最大{0}位字符.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            length: {
                validator: function (value, param) {
                    return value.length >= param[0] && param[1] >= value.length;
                },
                message: '请输入{0}-{1}位字符.'
            }
        });

        // extend the 'equals' rule   
        $.extend($.fn.validatebox.defaults.rules, {
            equals: {
                validator: function (value, param) {
                    return value == $(param[0]).val();
                },
                message: '字段不相同.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            web: {
                validator: function (value) {
                    return /^(http[s]{0,1}|ftp):\/\//i.test($.trim(value));
                },
                message: '网址格式错误.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            mobile: {
                validator: function (value) {
                    return /^1[0-9]{10}$/i.test($.trim(value));
                },
                message: '手机号码格式错误.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            date: {
                validator: function (value) {
                    return /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/i.test($.trim(value));
                },
                message: '曰期格式错误,如2012-09-11.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            email: {
                validator: function (value) {
                    return /^[a-zA-Z0-9_+.-]+\@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/i.test($.trim(value));
                },
                message: '电子邮箱格式错误.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            captcha: {
                validator: function (value) {
                    var data0 = false;
                    $.ajax({
                        type: "POST", async: false,
                        url: contextPath + "/json/valSimulation.action",
                        dataType: "json",
                        data: { "simulation": value },
                        async: false,
                        success: function (data) {
                            data0 = data;
                        }
                    });

                    return data0;
                    // 			        	return /^[a-zA-Z0-9]{4}$/i.test($.trim(value));
                },
                message: '验证码错误.'
            }
        });

        $.extend($.fn.validatebox.defaults.rules, {
            txtName: {
                validator: function (value, param) {
                    var data0 = false;
                    if (value.length >= param[0] && param[1] >= value.length) {
                        $.ajax({
                            type: "POST", async: false,
                            url: contextPath + "/json/valName.action",
                            dataType: "json",
                            data: { "txtName": value },
                            async: false,
                            success: function (data) {
                                data0 = !data;
                            }
                        });
                    } else {
                        param[2] = "请输入" + param[0] + "-" + param[1] + "位字符.";
                        return false;
                    }

                    param[2] = "用户名称已存在.";
                    return data0;
                },
                message: "{2}"
            }
        });

};(function ($) {
    function getPluginName(target) {
        if ($(target).data('treegrid')) {
            return 'treegrid';
        } else {
            return 'datagrid';
        }
    }

    var oldAutoSizeColumn = $.fn.datagrid.methods.autoSizeColumn;
    $.fn.datagrid.methods.autoSizeColumn = function (jq, field) {
        return jq.each(function () {
            resizeFilter(this, field, 10);
            oldAutoSizeColumn.call($.fn.datagrid.methods, $(this), field);
            resizeFilter(this, field);
        });
    };

    var oldLoadDataMethod1 = $.fn.datagrid.methods.loadData;
    $.fn.datagrid.methods.loadData = function (jq, data) {
        jq.each(function () {
            $.data(this, 'datagrid').filterSource = null;
        });
        return oldLoadDataMethod1.call($.fn.datagrid.methods, jq, data);
    };
    var oldLoadDataMethod2 = $.fn.treegrid.methods.loadData;
    $.fn.treegrid.methods.loadData = function (jq, data) {
        jq.each(function () {
            $.data(this, 'treegrid').filterSource = null;
        });
        return oldLoadDataMethod2.call($.fn.treegrid.methods, jq, data);
    };
    var oldAppendMethod1 = $.fn.datagrid.methods.appendRow;
    $.fn.datagrid.methods.appendRow = function (jq, row) {
        var result = oldAppendMethod1.call($.fn.datagrid.methods, jq, row);
        jq.each(function () {
            var state = $(this).data('datagrid');
            if (state.filterSource) {
                state.filterSource.total++;
                state.filterSource.rows.push(row);
            }
            // doFilter(this);
        });
        return result;
    };
    var oldAppendMethod2 = $.fn.treegrid.methods.append;
    $.fn.treegrid.methods.append = function (jq, data) {
        var result = oldAppendMethod2.call($.fn.treegrid.methods, jq, data);
        jq.each(function () {
            // doFilter(this);
        });
        return result;
    };
    var deleteMethod1 = $.fn.datagrid.methods.deleteRow;
    $.fn.datagrid.methods.deleteRow = function (jq, index) {
        jq.each(function () {
            var state = $(this).data('datagrid');
            var opts = state.options;
            if (state.filterSource && opts.idField) {
                for (var i = 0; i < state.filterSource.rows.length; i++) {
                    var row = state.filterSource.rows[i];
                    if (row[opts.idField] == state.data.rows[index][opts.idField]) {
                        state.filterSource.rows.splice(i, 1);
                        state.filterSource.total--;
                        break;
                    }
                }
            }
        });
        return deleteMethod1.call($.fn.datagrid.methods, jq, index);
    };

    var extendedOptions = {
        filterMenuIconCls: 'icon-ok',
        filterBtnIconCls: 'icon-filter',
        filterBtnPosition: 'right',
        filterPosition: 'bottom',
        remoteFilter: false,
        filterDelay: 400,
        filterRules: [],
        filterMatcher: function (data) {
            var name = getPluginName(this);
            var state = $.data(this, name);
            var opts = state.options;
            if (opts.filterRules.length) {
                var rows = [];
                if (name == 'treegrid') {
                    var rr = {};
                    $.map(data.rows, function (row) {
                        if (isMatch(row)) {
                            rr[row[opts.idField]] = row;
                            row = getRow(data.rows, row._parentId);
                            while (row) {
                                rr[row[opts.idField]] = row;
                                row = getRow(data.rows, row._parentId);
                            }
                        }
                    });
                    for (var id in rr) {
                        rows.push(rr[id]);
                    }
                } else {
                    for (var i = 0; i < data.rows.length; i++) {
                        var row = data.rows[i];
                        if (isMatch(row)) {
                            rows.push(row);
                        }
                    }
                }
                data = {
                    total: data.total - (data.rows.length - rows.length),
                    rows: rows
                };
            }
            return data;

            function isMatch(row) {
                var rules = opts.filterRules;
                for (var i = 0; i < rules.length; i++) {
                    var rule = rules[i];
                    var source = row[rule.field];
                    if (source == undefined) {
                        source = '';
                    }
                    var op = opts.operators[rule.op];
                    if (!op.isMatch(source, rule.value)) { return false }
                }
                return true;
            }
            function getRow(rows, id) {
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    if (row[opts.idField] == id) {
                        return row;
                    }
                }
                return null;
            }
        },
        defaultFilterType: 'text',
        defaultFilterOperator: 'contains',
        defaultFilterOptions: {
            onInit: function (target) {
                var name = getPluginName(target);
                var opts = $(target)[name]('options');
                var input = $(this);
                input.unbind('.filter').bind('keydown.filter', function (e) {
                    var t = $(this);
                    if (this.timer) {
                        clearTimeout(this.timer);
                    }
                    if (e.keyCode == 13) {
                        _doFilter();
                    } else {
                        this.timer = setTimeout(function () {
                            _doFilter();
                        }, opts.filterDelay);
                    }
                });
                function _doFilter() {
                    var field = input.attr('name');
                    var rule = $(target)[name]('getFilterRule', field);
                    var value = input.val();
                    if (value != '') {
                        if ((rule && rule.value != value) || !rule) {
                            $(target)[name]('addFilterRule', {
                                field: field,
                                op: opts.defaultFilterOperator,
                                value: value
                            });
                            $(target)[name]('doFilter');
                        }
                    } else {
                        if (rule) {
                            $(target)[name]('removeFilterRule', field);
                            $(target)[name]('doFilter');
                        }
                    }
                }
            }
        },
        filterStringify: function (data) {
            return JSON.stringify(data);
        },
        onClickMenu: function (item, button) { }
    };
    $.extend($.fn.datagrid.defaults, extendedOptions);
    $.extend($.fn.treegrid.defaults, extendedOptions);

    // filter types
    $.fn.datagrid.defaults.filters = $.extend({}, $.fn.datagrid.defaults.editors, {
        label: {
            init: function (container, options) {
                return $('<span></span>').appendTo(container);
            },
            getValue: function (target) {
                return $(target).html();
            },
            setValue: function (target, value) {
                $(target).html(value);
            },
            resize: function (target, width) {
                $(target)._outerWidth(width)._outerHeight(22);
            }
        },
    });
    $.fn.treegrid.defaults.filters = $.fn.datagrid.defaults.filters;

    // filter operators
    $.fn.datagrid.defaults.operators = {
        nofilter: {
            text: 'No Filter'
        },
        contains: {
            text: 'Contains',
            isMatch: function (source, value) {
                source = String(source);
                value = String(value);
                return source.toLowerCase().indexOf(value.toLowerCase()) >= 0;
            }
        },
        equal: {
            text: 'Equal',
            isMatch: function (source, value) {
                return source == value;
            }
        },
        notequal: {
            text: 'Not Equal',
            isMatch: function (source, value) {
                return source != value;
            }
        },
        beginwith: {
            text: 'Begin With',
            isMatch: function (source, value) {
                source = String(source);
                value = String(value);
                return source.toLowerCase().indexOf(value.toLowerCase()) == 0;
            }
        },
        endwith: {
            text: 'End With',
            isMatch: function (source, value) {
                source = String(source);
                value = String(value);
                return source.toLowerCase().indexOf(value.toLowerCase(), source.length - value.length) !== -1;
            }
        },
        less: {
            text: 'Less',
            isMatch: function (source, value) {
                return source < value;
            }
        },
        lessorequal: {
            text: 'Less Or Equal',
            isMatch: function (source, value) {
                return source <= value;
            }
        },
        greater: {
            text: 'Greater',
            isMatch: function (source, value) {
                return source > value;
            }
        },
        greaterorequal: {
            text: 'Greater Or Equal',
            isMatch: function (source, value) {
                return source >= value;
            }
        }
    };
    $.fn.treegrid.defaults.operators = $.fn.datagrid.defaults.operators;

    function resizeFilter(target, field, width) {
        var dg = $(target);
        var header = dg.datagrid('getPanel').find('div.datagrid-header');
        var ff = field ? header.find('.datagrid-filter[name="' + field + '"]') : header.find('.datagrid-filter');
        ff.each(function () {
            var name = $(this).attr('name');
            var col = dg.datagrid('getColumnOption', name);
            var cc = $(this).closest('div.datagrid-filter-c');
            var btn = cc.find('a.datagrid-filter-btn');
            if (width != undefined) {
                this.filter.resize(this, width);
            } else {
                this.filter.resize(this, 10);
                this.filter.resize(this, cc.width() - btn._outerWidth());
            }
        });
    }

    function getFilterComponent(target, field) {
        var header = $(target).datagrid('getPanel').find('div.datagrid-header');
        return header.find('tr.datagrid-filter-row td[field="' + field + '"] .datagrid-filter');
    }

    /**
	 * get filter rule index, return -1 if not found.
	 */
    function getRuleIndex(target, field) {
        var name = getPluginName(target);
        var rules = $(target)[name]('options').filterRules;
        for (var i = 0; i < rules.length; i++) {
            if (rules[i].field == field) {
                return i;
            }
        }
        return -1;
    }

    function getFilterRule(target, field) {
        var name = getPluginName(target);
        var rules = $(target)[name]('options').filterRules;
        var index = getRuleIndex(target, field);
        if (index >= 0) {
            return rules[index];
        } else {
            return null;
        }
    }

    function addFilterRule(target, param) {
        var name = getPluginName(target);
        var opts = $(target)[name]('options');
        var rules = opts.filterRules;

        if (param.op == 'nofilter') {
            removeFilterRule(target, param.field);
        } else {
            var index = getRuleIndex(target, param.field);
            if (index >= 0) {
                $.extend(rules[index], param);
            } else {
                rules.push(param);
            }
        }

        var input = getFilterComponent(target, param.field);
        if (input.length) {
            if (param.op != 'nofilter') {
                input[0].filter.setValue(input, param.value);
            }
            var menu = input[0].menu;
            if (menu) {
                menu.find('.' + opts.filterMenuIconCls).removeClass(opts.filterMenuIconCls);
                var item = menu.menu('findItem', opts.operators[param.op]['text']);
                menu.menu('setIcon', {
                    target: item.target,
                    iconCls: opts.filterMenuIconCls
                });
            }
        }
    }

    function removeFilterRule(target, field) {
        var name = getPluginName(target);
        var dg = $(target);
        var opts = dg[name]('options');
        if (field) {
            var index = getRuleIndex(target, field);
            if (index >= 0) {
                opts.filterRules.splice(index, 1);
            }
            _clear([field]);
        } else {
            opts.filterRules = [];
            var fields = dg.datagrid('getColumnFields', true).concat(dg.datagrid('getColumnFields'));
            _clear(fields);
        }

        function _clear(fields) {
            for (var i = 0; i < fields.length; i++) {
                var input = getFilterComponent(target, fields[i]);
                if (input.length) {
                    input[0].filter.setValue(input, '');
                    var menu = input[0].menu;
                    if (menu) {
                        menu.find('.' + opts.filterMenuIconCls).removeClass(opts.filterMenuIconCls);
                    }
                }
            }
        }
    }

    function doFilter(target) {
        var name = getPluginName(target);
        var state = $.data(target, name);
        var opts = state.options;
        if (opts.remoteFilter) {
            // dh 2015-05-15 fire method of doRemoteFilter in options
            if (opts.doRemoteFilter) {
                opts.doRemoteFilter();
            } else {
                $(target)[name]('load');
            }
        } else {
            $(target)[name]('getPager').pagination('refresh', { pageNumber: 1 });
            $(target)[name]('options').pageNumber = 1;
            $(target)[name]('loadData', state.filterSource || state.data);
        }
    }

    function myLoadFilter(data, parentId) {
        var name = getPluginName(this);
        var state = $.data(this, name);
        var opts = state.options;

        if (name == 'datagrid' && $.isArray(data)) {
            data = {
                total: data.length,
                rows: data
            };
        } else if (name == 'treegrid' && $.isArray(data)) {
            function translate(children, pid) {
                if (!children || !children.length) { return [] }
                var rows = [];
                $.map(children, function (item) {
                    item._parentId = pid;
                    rows.push(item);
                    rows = rows.concat(translate(item.children, item[opts.idField]));
                });
                return rows;
            }
            var rows = translate(data, parentId);
            $.map(rows, function (row) {
                row.children = undefined;
            });
            data = {
                total: rows.length,
                rows: rows
            }
        }
        if (!opts.remoteFilter) {
            if (!state.filterSource) {
                state.filterSource = data;
            } else {
                if (name == 'datagrid' && !opts.isSorting) {
                    state.filterSource = data;
                } else if (name == 'treegrid' && !opts.isSorting) {
                    var addedRows = $.extend(true, [], data.rows);
                    state.filterSource.total += addedRows.length;
                    state.filterSource.rows = state.filterSource.rows.concat(addedRows);
                }
                opts.isSorting = undefined;
            }
            data = opts.filterMatcher.call(this, {
                total: state.filterSource.total,
                rows: $.extend(true, [], state.filterSource.rows)
            });

            if (opts.pagination) {
                var dg = $(this);
                var pager = dg[name]('getPager');
                pager.pagination({
                    onSelectPage: function (pageNum, pageSize) {
                        opts.pageNumber = pageNum;
                        opts.pageSize = pageSize;
                        pager.pagination('refresh', {
                            pageNumber: pageNum,
                            pageSize: pageSize
                        });
                        //dg.datagrid('loadData', state.filterSource);
                        dg[name]('loadData', state.filterSource);
                    },
                    onBeforeRefresh: function () {
                        dg[name]('reload');
                        return false;
                    }
                });
                if (name == 'datagrid') {
                    var start = (opts.pageNumber - 1) * parseInt(opts.pageSize);
                    var end = start + parseInt(opts.pageSize);
                    data.rows = data.rows.slice(start, end);
                } else {
                    var topRows = [];
                    var childRows = [];
                    $.map(data.rows, function (row) {
                        row._parentId ? childRows.push(row) : topRows.push(row);
                    });
                    data.total = topRows.length;
                    var start = (opts.pageNumber - 1) * parseInt(opts.pageSize);
                    var end = start + parseInt(opts.pageSize);
                    data.rows = $.extend(true, [], topRows.slice(start, end).concat(childRows));
                }
            }
        }
        return data;
    }

    function init(target, filters) {
        filters = filters || [];
        var name = getPluginName(target);
        var state = $.data(target, name);
        var opts = state.options;
        if (!opts.filterRules.length) {
            opts.filterRules = [];
        }

        var onResizeColumn = opts.onResizeColumn;
        opts.onResizeColumn = function (field, width) {
            if (opts.fitColumns) {
                resizeFilter(target, null, 10);
                $(target).datagrid('fitColumns');
                resizeFilter(target);
            } else {
                resizeFilter(target, field);
            }
            onResizeColumn.call(target, field, width);
        };
        var onResize = opts.onResize;
        opts.onResize = function (width, height) {
            resizeFilter(target, null, 10);
            $(target).datagrid('fitColumns');
            resizeFilter(target);
            onResize.call(this, width, height);
        }
        var onBeforeLoad = opts.onBeforeLoad;
        opts.onBeforeLoad = function (param1, param2) {
            if (param1) {
                param1.filterRules = opts.filterStringify(opts.filterRules);
            }
            if (param2) {
                param2.filterRules = opts.filterStringify(opts.filterRules);
            }
            var result = onBeforeLoad.call(this, param1, param2);
            if (result != false && opts.url) {
                state.filterSource = null;
            }
            return result;
        };
        var dgOpts = $.data(target, 'datagrid').options;
        var onBeforeSortColumn = dgOpts.onBeforeSortColumn;
        dgOpts.onBeforeSortColumn = function (sort, order) {
            var result = onBeforeSortColumn.call(this, sort, order);
            if (result != false) {
                opts.isSorting = true;
            }
            return result;
        };
        var onBeforeEdit = opts.onBeforeEdit;
        opts.onBeforeEdit = function (index, row) {
            var result = onBeforeEdit.call(this, index, row);
            state.originalEditingRow = $.extend(true, {}, name == 'treegrid' ? index : row);
            return result;
        };
        var onAfterEdit = opts.onAfterEdit;
        opts.onAfterEdit = function (index, row, changes) {
            if (opts.idField && state.filterSource) {
                for (var i = 0; i < state.filterSource.rows.length; i++) {
                    var r = state.filterSource.rows[i];
                    if (r[opts.idField] == state.originalEditingRow[opts.idField]) {
                        $.extend(r, name == 'treegrid' ? index : row);
                        break;
                    }
                }
            }
            onAfterEdit.call(this, index, row, changes);
        };

        // opts.loadFilter = myLoadFilter;
        opts.loadFilter = function (data, parentId) {
            var d = opts.oldLoadFilter.call(this, data, parentId);
            return myLoadFilter.call(this, d, parentId);
        };

        initCss();
        createFilter(true);
        createFilter();
        if (opts.fitColumns) {
            setTimeout(function () {
                resizeFilter(target);
            }, 0);
        }

        $.map(opts.filterRules, function (rule) {
            addFilterRule(target, rule);
        });

        function initCss() {
            if (!$('#datagrid-filter-style').length) {
                $('head').append(
					'<style id="datagrid-filter-style">' +
					'a.datagrid-filter-btn{display:inline-block;width:22px;height:22px;margin:0;vertical-align:top;cursor:pointer;opacity:0.6;filter:alpha(opacity=60);}' +
					'a:hover.datagrid-filter-btn{opacity:1;filter:alpha(opacity=100);}' +
					'.datagrid-filter-row .textbox,.datagrid-filter-row .textbox .textbox-text{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;}' +
					'.datagrid-filter-row input{margin:0;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;}' +
					'</style>'
				);
            }
        }

        /**
		 * create filter component
		 */
        function createFilter(frozen) {
            var dc = state.dc;
            var fields = $(target).datagrid('getColumnFields', frozen);
            if (frozen && opts.rownumbers) {
                fields.unshift('_');
            }
            var table = (frozen ? dc.header1 : dc.header2).find('table.datagrid-htable');
            // table.find('tr').each(function(){
            // 	$(this).height($(this).height());
            // });

            // clear the old filter component
            table.find('.datagrid-filter').each(function () {
                if (this.filter.destroy) {
                    this.filter.destroy(this);
                }
                if (this.menu) {
                    $(this.menu).menu('destroy');
                }
            });
            table.find('tr.datagrid-filter-row').remove();

            var tr = $('<tr class="datagrid-header-row datagrid-filter-row"></tr>');
            if (opts.filterPosition == 'bottom') {
                tr.appendTo(table.find('tbody'));
            } else {
                tr.prependTo(table.find('tbody'));
            }

            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                var col = $(target).datagrid('getColumnOption', field);
                var td = $('<td></td>').attr('field', field).appendTo(tr);
                if (col && col.hidden) {
                    td.hide();
                }
                if (field == '_') {
                    continue;
                }
                if (col && (col.checkbox || col.expander)) {
                    continue;
                }
                var div = $('<div class="datagrid-filter-c"></div>').appendTo(td);

                var fopts = getFilter(field);
                if (!fopts) {
                    fopts = $.extend({}, {
                        field: field,
                        type: opts.defaultFilterType,
                        options: opts.defaultFilterOptions
                    });
                }
                var filter = opts.filters[fopts.type];
                var input = filter.init(div, fopts.options || {});
                input.addClass('datagrid-filter').attr('name', field);
                input[0].filter = filter;
                input[0].menu = createFilterButton(div, fopts.op);
                if (fopts.options && fopts.options.onInit) {
                    fopts.options.onInit.call(input[0], target);
                }

                resizeFilter(target, field);
            }
        }

        function createFilterButton(container, operators) {
            if (!operators) { return null; }

            var btn = $('<a class="datagrid-filter-btn">&nbsp;</a>').addClass(opts.filterBtnIconCls);
            if (opts.filterBtnPosition == 'right') {
                btn.appendTo(container);
            } else {
                btn.prependTo(container);
            }
            var menu = $('<div></div>').appendTo('body');
            menu.menu({
                alignTo: btn,
                onClick: function (item) {
                    var btn = $(this).menu('options').alignTo;
                    var td = btn.closest('td[field]');
                    var field = td.attr('field');
                    var input = td.find('.datagrid-filter');
                    var value = input[0].filter.getValue(input);

                    addFilterRule(target, {
                        field: field,
                        op: item.name,
                        value: value
                    });

                    opts.onClickMenu.call(target, item, btn);

                    doFilter(target);
                }
            });
            $.each(['nofilter'].concat(operators), function (index, item) {
                var op = opts.operators[item];
                if (op) {
                    menu.menu('appendItem', {
                        text: op.text,
                        name: item
                    });
                }
            });
            btn[0].menu = menu;
            btn.bind('click', { menu: menu }, function (e) {
                // $(e.data.menu).menu('show');
                $(this.menu).menu('show');
                return false;
            });
            return menu;
        }

        function getFilter(field) {
            for (var i = 0; i < filters.length; i++) {
                var filter = filters[i];
                if (filter.field == field) {
                    return filter;
                }
            }
            return null;
        }
    }

    $.extend($.fn.datagrid.methods, {
        enableFilter: function (jq, filters) {
            return jq.each(function () {
                var name = getPluginName(this);
                var opts = $.data(this, name).options;
                opts.oldLoadFilter = opts.loadFilter;
                init(this, filters);
                $(this)[name]('resize');
                if (opts.filterRules.length) {
                    doFilter(this);
                }
            });
        },
        disableFilter: function (jq) {
            return jq.each(function () {
                var name = getPluginName(this);
                var opts = $.data(this, name).options;
                var dc = $(this).data('datagrid').dc;
                var fr = dc.header1.add(dc.header2).find('.datagrid-filter-row');
                fr.find('.datagrid-filter-btn').each(function () {
                    $(this.menu).menu('destroy');
                });
                fr.find('.combo-f').each(function () {
                    $(this).combo('destroy');
                });
                $(this)[name]({
                    loadFilter: (opts.oldLoadFilter || undefined),
                    oldLoadFilter: null
                });
            });
        },
        getFilterRule: function (jq, field) {
            return getFilterRule(jq[0], field);
        },
        addFilterRule: function (jq, param) {
            return jq.each(function () {
                addFilterRule(this, param);
            });
        },
        removeFilterRule: function (jq, field) {
            return jq.each(function () {
                removeFilterRule(this, field);
            });
        },
        doFilter: function (jq) {
            return jq.each(function () {
                doFilter(this);
            });
        },
        getFilterComponent: function (jq, field) {
            return getFilterComponent(jq[0], field);
        },
        resizeFilter: function (jq, field) {
            return jq.each(function () {
                resizeFilter(this, field);
            });
        }
    });
})(jQuery);
;(
    function ($, ko) {
        ko.createEasyUiGridBindings = function (pro, config) {
            return {
                init: function (element, valueAccessor) {
                    var grid = valueAccessor();
                    //-- 获取 grid 的对应绑定的 html 元素, 以供开发使用
                    var tempGrid = $.extend({}, config, grid, {
                        _$elem: function () { return $(element); }
                    });
                    $.extend(grid, tempGrid);
                },

                update: function (element, valueAccessor) {
                    // declare elem, value and databind;
                    var gridControl = $(element),
                        grid = valueAccessor(),
                        value = ko.toJS(grid),
                        bindData = function (params) {
                            if (!params || typeof (params) != "object") params = ko.toJS(valueAccessor()).queryParams;
                            params = params || {};

                            var opts = gridControl.datagrid("options");

                            if (opts.pagination) {
                                var pagerOption = gridControl[pro]("getPager").pagination("options");
                                $.extend(params, {
                                    pageNumber: pagerOption.pageNumber,
                                    pageSize: pagerOption.pageSize
                                });
                                if (opts) {
                                    opts.pageNumber = pagerOption.pageNumber;
                                    opts.pageSize = pagerOption.pageSize;
                                }
                            }

                            if (opts && opts.sortName) {
                                $.extend(params, {
                                    /* sortName: opts.sortName,
                                    sortOrder: opts.sortOrder
                                    */
                                    orderBy: opts.sortName + ' ' + opts.sortOrder
                                });
                            }

                            if (Utils.isUrl(value.url)) {
                                /* //lgr 2015-04-09 hold on next time to add the filter function for the grid,
                                 //be care: filter only invole datagrid load function,but if the url is empty, load function won't be invole, then we may be need modified doFilter function in filter js;
                                 // the filter data append to param in event of onBeforeLoad

                                if (opts.onBeforeLoad.call(element, params) == false) {
                                    return false;
                                }

                                 */
                                $("body").mask("loading ... ...");

                                com.ajax({
                                    type: "GET",
                                    url: value.url,
                                    data: params,
                                    success: function (data) {
                                        // 请用 loadFilter
                                        //if (typeof opts._onBeforeLoadData === 'function')
                                        //   opts._onBeforeLoadData(data);
                                        if ((data && data.rows) || Object.prototype.toString.call(data) == '[object Array]') {
                                            if (!data.rows) data = { rows: data };
                                            gridControl[pro]("loadData", data);
                                        } else {
                                            //com.message("error", data);
                                            com.handleResp(data);
                                        }
                                        $("body").unmask();
                                    },
                                    error: function (xrq, status, errorMsg) {
                                        com.message("error", errorMsg);
                                        $("body").unmask();
                                    }
                                });
                            }
                            ;
                        };


                    // if elem.datagrid is undefined then init it and init the sort and selectpage event;
                    if (gridControl.data(pro) && gridControl.data(pro).options._hasInit) {
                        // bind data
                        bindData(value.queryParams);
                    } else {
                        var options = {
                            pagination: true,
                            rownumbers: true,
                            customLoad: false,
                            method: 'GET',
                            singleSelect: true,
                            autoRowHeight: false,
                            fit: true,
                            pageSize: 20,
                            remoteFilter: true,
                            enableFilter: true,
                            remoteSort: true,
                            _hasInit: true,
                            checkOnSelect: true,
                            selectOnCheck: false,
                            ctrlSelect: true,
                        };
                        //options = $.extend(options, config, value);
                        options = $.extend(options, config, grid);
                        //-- url will cause load method of datagrid control, but we want load data manually, so delete it before init datagrid options as below;
                        delete options.url,
                        grid[pro] = function () {
                            return gridControl[pro].apply(gridControl, arguments);
                        },
                        grid['uc_' + pro] = function () { return gridControl['uc_' + pro].apply(gridControl, arguments); },
                        options.onSortColumn = bindData;
                        gridControl['uc_' + pro](options);
                        gridControl[pro]("getPager").pagination({
                            pageList: [1, 2, 10, 20, 100, 1000, 10000],
                            onSelectPage: function (pageNumber, pageSize) {
                                //如果 pagePosition:'both',getPager 会有 2 个 pager,而 getPageer.pagination 只到第一个 pager ，而如果改了第 2 个 pager， 则无法得到正确的页数
                                $.each(gridControl[pro]("getPager"), function (idx, val) {
                                    $(val).pagination("options").pageNumber = pageNumber;
                                    $(val).pagination("options").pageSize = pageSize;
                                    $(val).pagination("refresh");
                                });

                                bindData();
                            }
                        });
                        //gridControl[pro].call(gridControl, 'fitColumns');
                        //gridControl[pro].call(gridControl, 'autoSizeColumn');
                        if (!options.customLoad)
                            bindData(value.queryParams);
                    }

                }
            };
        },
        ko.bindingHandlers.datagrid = ko.createEasyUiGridBindings("datagrid", {
            isReload: ko.observable(false),
        }),
        ko.bindingHandlers.simpleDatagrid = ko.createEasyUiGridBindings("datagrid", {
            pagination: false,
            remotesort: false,
            showHeader: true,
            autoRowHeight: true,
            fixedHeight: false,
            // reload: ko.observable(false),这个全局监视，会导致所有 simplegrid 引用该相同的 reload 变量，其中一个 grid 调用  reload 会使所有 simplegrid 都 reload
            onLoadSuccess: function (data) {
                //this is table
                var opts = $.data(this, 'datagrid').options;
                if (!opts.fixedHeight)
                    opts._resize();
                if (opts._onAfterLoadSuccess) {
                    opts._onAfterLoadSuccess(data);
                }
            },
            _onAfterLoadSuccess: undefined,
            loadFilter: function (data) {
                if (data && !data.rows) {
                    return { rows: data };
                }
                return data;
            },
            //isReload: ko.observable(false),-- 和下面同理
            //queryParams: ko.observable(), -- 不能出现在这里，任何一个 grid 修改了都会导致所有 grid 都触发监听
            _$container: function () {
                return this._$elem().parent().parent().parent().parent();
            },
            _canResize: true,
            _resize: function () {
                //if (!this._canResize)
                //    return false;

                var rows = [];
                var grid;
                if (!this.datagrid)
                    grid = this._$elem();
                else
                    grid = this;

                rows = grid.datagrid('getRows');
                var opts = grid.datagrid('options');
                var headerH = opts.headerHeight || 50;
                if (!opts.showHeader)
                    headerH = 0;
                var buttonH = 30;
                if (!opts.toolbar || opts.toolbar.length == 0) {
                    buttonH = 0;
                }
                var footerH = opts.footerHeight || 30;
                if (!opts.showFooter)
                    footerH = 0;

                var titleH = 0;
                var contentH = rows.length * 28;
                this._$container().height(headerH + footerH + contentH + titleH + buttonH);
                grid.datagrid('resize');
            },
            _hideToolbar: function () {
                this._$container().find('.datagrid-toolbar').hide();
            },
            _showToolbar: function () {
                this._$container().find('.datagrid-toolbar').show();
            },
            _reloadData: function (newUrl, tempForm, tempKeyField) {
                this.datagrid("unselectAll");
                this._oldRowIndex = -1;
                tempForm = tempForm || form;
                tempKeyField = tempKeyField || keyField;
                var thisUrl = typeof (this.url) == 'function' ? this.url() : this.url;
                if (thisUrl) {
                    if (!newUrl) {
                        var pureUrl = thisUrl.replace(/[^\/]+$/gi, '');
                        if (tempKeyField.split(',').length > 1) {
                            newUrl = pureUrl + "?";
                            var keys = tempKeyField.split(',');
                            for (var i = 0; i < keys.length; ++i) {
                                if (i == 0)
                                    newUrl += keys[i] + "=" + tempForm[keys[i]].apply();
                                else
                                    newUrl += "&" + keys[i] + "=" + tempForm[keys[i]].apply();
                            }
                        } else {
                            newUrl = pureUrl + tempForm[tempKeyField].apply();
                        }
                    }
                    if (thisUrl !== newUrl) {
                        if (typeof (this.url) == 'function') {
                            this.url(newUrl);
                        }
                        else {
                            this.url = newUrl;
                            this.isReload(!this.isReload());
                        }

                    } else {
                        this.isReload(!this.isReload());
                    }
                }
            },
            doRemoteFilter: function () {
                // this is options
                var grid = this._$elem();
                var opts = grid.datagrid('options');
                var filterParam = {};
                for (var i = 0; i < opts.filterRules.length; ++i) {
                    filterParam[opts.filterRules[i].field] = opts.filterRules[i].value;
                }
                if (!grid || !grid.datagrid) return false;
                this.queryParams(filterParam);
                grid.datagrid('clearChecked');
            },
            checkEnableFilter: function () {
                var grid = this;
                var opts = grid.datagrid('options');
                if (!opts.enableFilter) return false;
                var filters = [];
                $.each(opts.columns[0], function (idx, col) {
                    if (col.filter) {
                        //col.filter.field = col.field;
                        var hasProp = false;
                        for (var p in col.filter) {
                            hasProp = true;
                            break;
                        }
                        if (hasProp) {
                            col.filter.field = col.field;
                            if (!col.filter.type) {
                                col.filter.type = 'uc_validatebox';
                            }
                            if (!col.filter.paramField) {
                                col.filter.paramField = col.field;
                            }
                        }

                    } else {
                        col.filter = { type: 'label', field: col.field };
                    }
                    col.filter.options = col.filter.options || {};
                    var options = {};
                    switch (col.filter.type) {
                        case 'uc_dateRange':
                            options = {
                                panelWidth: 388,
                                onSelect: function (from, to) {
                                    var value = $(this).uc_dateRange('getValue');
                                    if (!value) {
                                        grid.datagrid('removeFilterRule', col.filter.field);
                                    } else {
                                        grid.datagrid('addFilterRule', {
                                            field: col.filter.paramField,
                                            op: 'equal',
                                            value: value
                                        });
                                    }
                                    grid.datagrid('doFilter');
                                }
                            };
                            break;
                        case 'uc_combobox':
                            options = {
                                onChange: function (value) {
                                    if (value == '') {
                                        grid.datagrid('removeFilterRule', col.filter.field);
                                    } else {
                                        grid.datagrid('addFilterRule', {
                                            field: col.filter.paramField,
                                            op: 'equal',
                                            value: value
                                        });

                                    }
                                    grid.datagrid('doFilter');
                                }
                            }
                            break;
                        case 'uc_dollar':
                        case 'uc_percent':
                        case 'uc_numberspinner':
                            options = {
                                onChange: function (value) {
                                    if (value == '') {
                                        grid.datagrid('removeFilterRule', col.filter.field);
                                    } else {
                                        grid.datagrid('addFilterRule', {
                                            field: col.filter.paramField,
                                            op: 'equal',
                                            value: value
                                        });

                                    }
                                    grid.datagrid('doFilter');
                                }
                            }
                    }
                    $.extend(col.filter.options, options, col.filter.options);
                    filters.push(col.filter);
                });
                if (opts.filters) {
                    $.merge(filters, opts.filters);
                }
                var notLabelFilters = $.grep(filters, function (val, idx) {
                    return val.type != 'label';
                });
                if (notLabelFilters.length > 0)
                    grid.datagrid('enableFilter', filters);
            }

        }),
        ko.bindingHandlers.treegrid = ko.createEasyUiGridBindings("treegrid"),
        ko.bindingHandlers.simpleTreegrid = ko.createEasyUiGridBindings("treegrid", {
            pagination: false,
            remotesort: false,
            showHeader: true,
            autoRowHeight: true,
            fit: true,
            _onLoadSuccess: function (row, data) { },
            onLoadSuccess: function (row, data) {

                //this is table
                var opts = $.data(this, 'datagrid').options;
                opts._onLoadSuccess(row, data);
                opts._resize();
            },
            //reload: ko.observable(false),
            loadFilter: function (data) {
                if (data && !data.rows) {
                    return { rows: data };
                }
                return data;
            },
            _$container: function () {
                return this._$elem().parent().parent().parent().parent();
            },
            _resize: function () {
                var grid;
                if (!this.treegrid)
                    grid = this._$elem();
                else
                    grid = this;

                var len = 0;

                var roots = grid.treegrid('getRoots');
                $.each(roots, function (idx, row) {
                    len++;
                    /*if (row.state == 'open' && row.children) {
                        len += row.children.length;
                    }*/
                    if (row.children) {
                        len += row.children.length;
                        $.each(row.children, function (childIdx, childRow) {
                            if (childRow.children) {
                                len += childRow.children.length;
                            }
                        })
                    }
                });

                var opts = grid.treegrid('options');
                var rows = grid.treegrid('getData');
                var headerH = 80;
                var footerH = opts.showFooter ? 60 : 0;
                var titleH = 0;
                //var contentH = rows.length * 29;
                var contentH = len * 29;
                this._$container().height(headerH + footerH + contentH + titleH);
                grid.treegrid('resize');
            },
            _reloadData: function (newUrl) {
                this.treegrid("unselectAll");
                this._oldRowIndex = -1;
                if (this.url()) {
                    if (!newUrl) {

                        var pureUrl = this.url().replace(/[^\/]+$/gi, '');
                        if (keyField.split(',').length > 1) {
                            var para = "";
                            $.each(keyField.split(','), function (idx, val) {
                                para += val + "=" + form[val].apply() + "&";
                            });
                            para = para.substr(0, para.length - 1);
                            //com.openTab(me.resx.editTitle, "{0}?{1}".format(me.urls.edit, para));
                            newUrl = "{0}?{1}".format(pureUrl, para);

                        } else {
                            //com.openTab(me.resx.editTitle, me.urls.edit + row[me.keyField]);
                            newUrl = pureUrl + form[keyField].apply();
                        }
                        //newUrl = pureUrl + form[keyField].apply();
                    }
                    if (this.url() !== newUrl) {
                        this.url(newUrl);
                    } else if (this.isReload != undefined) {
                        this.isReload(!this.isReload());
                    }
                }
            }
        }),

        ko.createEasyuiTreeBindings = function (pro, config) {
            return {
                init: function (elem, valueAccessor) {
                    var tree = valueAccessor();
                    var tempTree = $.extend({}, config, tree, { _$elem: function () { return $(elem); } })
                    $.extend(tree, tempTree);
                },
                update: function (element, valueAccessor) {
                    var treeControl = $(element),
                        tree = valueAccessor(),
                        value = ko.toJS(tree);
                    if (value.idField != undefined && value.textField != undefined && !value.loadFilter) {
                        value.loadFilter = function (data, parent) {
                            var newData = [];
                            if (value.parentField) {
                                var firstArr = $.grep(data, function (v, i) {
                                    return v[value.parentField] == '';
                                });
                            } else {
                                firstArr = data;
                            }

                            for (var i = 0; i < firstArr.length; i++) {
                                var val = firstArr[i];
                                var newVal = com.formatTreeData(data, val, value);
                                newData.push(newVal);
                            }
                            if (value.firstNode) {
                                value.firstNode.children = newData;
                                return [value.firstNode];
                            } else {
                                return newData;
                            }
                        }
                    }
                    tree[pro] = function () {
                        return treeControl[pro].apply(treeControl, arguments);
                    }
                    treeControl[pro](value);
                }
            };
        }
        ko.bindingHandlers.tree = ko.createEasyuiTreeBindings("tree"),

        ko.bindingViewModel = function (vm, elem) {
            //var preFun = $.parser.onComplete;


            //$.parser.onComplete = function () {
                //console.log(new Date() + " => parse easyui complete");
                if (typeof preFun === 'function') preFun();
                setTimeout(function () {
                    elem = elem || document.body;
                    // 防止重复绑定，在body 中动态添加控件时，会引发重新绑定
                    if (!!ko.contextFor(elem)) {
                        return;
                    }
                    ko.applyBindings(vm, elem || document.body);
                    if (window.onDataBindingCompleted) {
                        window.onDataBindingCompleted();
                    }
                    //console.log(new Date() + " => bind data complete");
                }, 0);
            //};
        },
        //-- validate binding
        ko.createEasyuiValueBindings = function (elemConfig) {
            elemConfig = $.extend({
                type: "",
                event: "",
                getter: "getValue",
                setter: "setValue",
                fix: $.noop,
                parser: function (n) {
                    return n
                },
                formatter: function (n) {
                    return n
                }
            }, elemConfig);

            var handle = {
                init: function (elem, valueAccessor) {
                    var elemControl = $(elem),
                        event = elemControl[elemConfig.type]("options")[elemConfig.event],
                        eventConfig = {};

                    eventConfig[elemConfig.event] = function () {
                        if (event)
                            event.apply($, arguments);
                        var latestValue = elemControl[elemConfig.type](elemConfig.getter);
                        valueAccessor()(elemConfig.parser(latestValue));
                        //if (u() == null) throw "viewModel中没有页面绑定的字段";
                        //u()(ko);
                    },
                    ko.utils.domNodeDisposal.addDisposeCallback(elem, function () {
                        elemControl[elemConfig.type]("destroy")
                    }),
                    elemConfig.fix(elem, valueAccessor)
                    elemControl[elemConfig.type](eventConfig);

                },
                update: function (elem, valueAccessor) {
                    value = ko.utils.unwrapObservable(valueAccessor()),
                    $(elem)[elemConfig.type](elemConfig.setter, elemConfig.formatter(value));
                }
            };
            ko.bindingHandlers[elemConfig.type + "Value"] = handle;
        },
        ko.createEasyuiValueBindings({
            type: "numberspinner",
            event: "onChange",
            fix: function (elem) {
                $(elem).width($(elem).width() + 16);
            }
        }),
        ko.createEasyuiValueBindings({
            type: "timespinner",
            event: "onChange"
        }),
        ko.createEasyuiValueBindings({
            type: "numberbox",
            event: "onChange"
        }),
        ko.createEasyuiValueBindings({
            type: "datebox",
            event: "onSelect",
            parser: function (value) {
                return Utils.parseDate(value);
            },
            formatter: function (value) {
                if (value) {
                    value = Utils.formatDate(value);
                }
                return value;
            }
        }),
         ko.createEasyuiValueBindings({
             type: "dateRange",
             event: "onSelect",
             parser: function (value) {
                 return value;
             },
             formatter: function (value) {

                 return value;
             }
         }),

        ko.createEasyuiValueBindings({
            type: "combobox",
            event: "onChange"
        }),

         ko.createEasyuiValueBindings({
             type: "combogrid",
             event: "onChange"
         }),

        // user control value binding

        ko.createEasyuiValueBindings({
            type: "uc_numberspinner",
            event: "onChange",
            fix: function (elem) {
                //$(elem).width($(elem).width() + 19);
            }
        }),
        ko.createEasyuiValueBindings({
            type: "uc_dollar",
            event: "onChange",
            fix: function (elem) {
                //$(elem).width($(elem).width() + 19);
            }
        }),

        ko.createEasyuiValueBindings({
            type: "uc_percent",
            event: "onChange",
            fix: function (elem) {
                //$(elem).width($(elem).width() + 19);
            }
        }),

        ko.createEasyuiValueBindings({
            type: "uc_timespinner",
            event: "onChange"
        }),

        ko.createEasyuiValueBindings({
            type: "uc_numberbox",
            event: "onChange"
        }),
        ko.createEasyuiValueBindings({
            type: "uc_datebox",
            event: "onChange",
            parser: function (value) {
                return Utils.parseDate(value);
            },
            formatter: function (value) {
                if (value) {
                    value = Utils.formatDate(value);
                }
                return value;
            }
        }),
                ko.createEasyuiValueBindings({
                    type: "uc_datetimebox",
                    event: "onChange",
                    parser: function (value) {
                        return Utils.parseDatetime(value);
                    },
                    formatter: function (value) {
                        if (value) {
                            value = Utils.formatDatetime(value);
                        }
                        return value;
                    }
                }),
        ko.createEasyuiValueBindings({
            type: "uc_dateRange",
            event: "onSelect",
            parser: function (value) {
                return value;
            },
            formatter: function (value) {

                return value;
            }
        }),

        ko.createEasyuiValueBindings({
            type: "uc_combobox",
            event: "onChange"
        }),

        ko.createEasyuiValueBindings({
            type: "uc_combobox_m",
            event: "onChange",
            getter: "getValues",
            setter: "setValues",
            parser: function (value) {
                if (Object.prototype.toString.call(value) == '[object Array]')
                    return value.join(',');
                return value;

            },
            formatter: function (value) {
                if (value === undefined || value === null || value === '') return [];
                return value.split(',');
            }
        }),

         ko.createEasyuiValueBindings({
             type: "uc_combogrid",
             event: "onChange"
         }),
        ko.createEasyuiValueBindings({
            type: "uc_pickbox",
            event: "onChange"
        }),
        ko.createEasyuiValueBindings({
            type: "uc_fuzzybox",
            event: "onChange"
        }),
        ko.createEasyuiValueBindings({
            type: "uc_checkboxs",
            event: "onChange"
        }),
         ko.createEasyuiValueBindings({
             type: "uc_radioGroup",
             event: "onChange"
         }),
        //-- text binding
             ko.createEasyuiTextBindings = function (elemConfig) {
                 elemConfig = $.extend({
                     type: "",
                     event: "",
                     getter: "getText",
                     setter: "setText",
                     fix: $.noop,
                     parser: function (n) {
                         return n
                     },
                     formatter: function (n) {
                         return n
                     }
                 }, elemConfig);

                 var handle = {
                     init: function (elem, valueAccessor) {
                         var elemControl = $(elem),
                             event = elemControl[elemConfig.type]("options")[elemConfig.event],
                             eventConfig = {};

                         eventConfig[elemConfig.event] = function () {
                             if (event)
                                 event.apply($, arguments);
                             var latestValue = elemControl[elemConfig.type](elemConfig.getter);
                             valueAccessor()(elemConfig.parser(latestValue));
                             //if (u() == null) throw "viewModel中没有页面绑定的字段";
                             //u()(ko);
                         },
                         ko.utils.domNodeDisposal.addDisposeCallback(elem, function () {
                             elemControl[elemConfig.type]("destroy")
                         }),
                         elemConfig.fix(elem, valueAccessor),
                         elemControl[elemConfig.type](eventConfig);
                     },
                     update: function (elem, valueAccessor) {
                         value = ko.utils.unwrapObservable(valueAccessor()),
                         $(elem)[elemConfig.type](elemConfig.setter, elemConfig.formatter(value));
                     }
                 };
                 ko.bindingHandlers[elemConfig.type + "Text"] = handle;
             },
               ko.createEasyuiTextBindings({
                   type: "uc_pickbox",
                   event: "onChange"
               }),

        //-- datasource binding 
        ko.createEasyuiDatasourceBindings = function (config) {
            config = $.extend({
                type: "",
                event: "",
                load: "loadData"
            }, config);
            var handle = {
                init: function (elem, valueAccess) {
                    // set panewidth width on init
                    if (config.type === "combogrid") {
                        var opts = $(elem).combogrid("options");
                        var width = 0;
                        $.each(opts.columns[0], function (idx, value) {
                            width += value.width;
                        });
                        if (width) {
                            $(elem).combogrid({ panelWidth: width + 5 });
                        }
                    }
                },
                update: function (elem, valueAccess) {
                    var value = ko.utils.unwrapObservable(valueAccess());
                    var gridType = ['combogrid', 'uc_combogrid', 'uc_pickbox'];
                    if ($.inArray(config.type, gridType) > -1) {
                        $(elem)[config.type]("grid")["datagrid"](config.load, value);
                        if (config.type == 'uc_pickbox') {
                            $.data(elem, 'uc_pickbox')._data = value;
                        }

                    } else {
                        $(elem)[config.type](config.load, value);
                    }
                }
            };
            ko.bindingHandlers[config.type + "Ds"] = handle;
        },
        ko.createEasyuiDatasourceBindings({
            type: "combobox"
        }),
        ko.createEasyuiDatasourceBindings({
            type: "uc_combobox"
        }),
        ko.createEasyuiDatasourceBindings({
            type: "uc_combobox_m"
        }),
        ko.createEasyuiDatasourceBindings({
            type: "uc_combogrid"
        }),
        ko.createEasyuiDatasourceBindings({
            type: "uc_pickbox"
        }),
        ko.createEasyuiDatasourceBindings({
            type: "uc_checkboxs"
        }),
           ko.createEasyuiDatasourceBindings({
               type: "uc_radioGroup"
           }),
        ko.createEasyuiDatasourceBindings({
            type: "combogrid"
        }),



        ko.createEasyuiEableBindings = function (config) {
            config = $.extend({
                type: "",
                method: function (elem, isEnable) {
                    if (isEnable) {
                        $(elem)[config.type]("enable");
                    } else {
                        $(elem)[config.type]("disable");
                    }
                }
            }, config);

            var handle = {
                init: function (elem, valueAccess) {
                    var value = ko.utils.unwrapObservable(valueAccess());
                    config.method(elem, value);
                },
                update: function (elem, valueAccess) {
                    var value = ko.utils.unwrapObservable(valueAccess());
                    config.method(elem, value);
                }
            };
            ko.bindingHandlers[config.type + "Enable"] = handle;
        },
         ko.createEasyuiEableBindings({ type: "uc_pickbox" }),
        ko.createEasyuiEableBindings({ type: "combobox" }),
        ko.createEasyuiEableBindings({ type: "uc_numberspinner" }),
        ko.createEasyuiEableBindings({ type: "uc_combobox" });
        ko.createEasyuiEableBindings({ type: "uc_combogrid" });
        ko.createEasyuiEableBindings({ type: "uc_combobox_m" });
        ko.createEasyuiEableBindings({ type: "uc_datebox" });
        ko.createEasyuiEableBindings({ type: "uc_dollar" });
        ko.createEasyuiEableBindings({ type: "uc_percent" });
        ko.createEasyuiEableBindings({ type: "uc_timespinner" });
        ko.createEasyuiEableBindings({ type: "uc_checkboxs" });


        //-- url binding
        ko.createEasyuiUrlBindings = function (config) {
            config = $.extend({
                type: '',
                setter: 'setUrl'
            }, config);
            var handle = {
                init: function (elem, valueAccess) {
                },
                update: function (elem, valueAccess) {
                    var value = ko.utils.unwrapObservable(valueAccess());
                    $(elem)[config.type](config.setter, value);
                }
            };
            ko.bindingHandlers[config.type + "Url"] = handle;
        };
        ko.createEasyuiUrlBindings({ type: "uc_pickbox" });
        ko.createEasyuiUrlBindings({ type: "uc_combobox", setter: 'reload' });


        // 绑定格式化的显示数据,只作显示用途；
        ko.createEasyuiFormatBindings = function (config) {
            config = $.extend({
                type: '',
                setter: 'html',
                formatter: function (value) {
                    return value;
                }
            }, config);
            var handle = {
                init: function (elem, valueAccess) {
                    var value = ko.utils.unwrapObservable(valueAccess());
                    //$(elem)[config.setter](config.formatter(value));

                },
                update: function (elem, valueAccess) {
                    var value = ko.utils.unwrapObservablev(valueAccess());
                    $(elem)[config.setter](config.formatter(value));
                }
            };
            ko.bindingHandlers[config.type + "Format"] = handle;
        };

        ko.createEasyuiFormatBindings({ type: 'dollar', formatter: function (value) { return Utils.formatDollar(value); } });
        ko.createEasyuiFormatBindings({ type: 'date', formatter: function (value) { return Utils.format(value, 'd'); } });
        ko.createEasyuiFormatBindings({ type: 'percent', formatter: function (value) { return Utils.format(value, 'p'); } });
        ko.createEasyuiFormatBindings({ type: 'number', formatter: function (value) { return Utils.format(value, 'n'); } });
        ko.createEasyuiFormatBindings({ type: 'valueDate', setter: 'val', formatter: function (value) { return Utils.format(value, 'd'); } });
        ko.createEasyuiFormatBindings({
            type: 'valueDollar',
            setter: 'val',
            formatter: function (value) {
                var val = Utils.formatDollar(value);
                if (val == null || val == undefined) val = '';
                return val;
            }
        });
        ko.createEasyuiFormatBindings({
            type: 'valuePercent',
            setter: 'val',
            formatter: function (value) {
                return Utils.format(value, 'p');
            }
        });
        ko.createEasyuiFormatBindings({ type: 'valueNumber', setter: 'val', formatter: function (value) { return Utils.format(value, 'n'); } });

        // windows

        ko.createEasyuiWinBindings = function (config) {
            config = $.extend({
                type: ''
            }, config);
            var handle = {
                init: function (element, valueAccessor) {
                    var win = valueAccessor();
                    win._$elem = function () { return $(element); };
                },

                update: function (element, valueAccessor) {
                    // declare elem, value and databind;
                    var winControl = $(element),
                        win = valueAccessor(),
                        value = ko.toJS(win);
                    var options;
                    if (winControl.data[config.type])
                        options = winControl.data[config.type].options;

                    if (!options) {
                        options = {
                            iconCls: 'icon-edit',
                            cached: true,
                            closed: true,
                            modal: true,
                            minimizable: false,
                            maximizable: true,
                            resizable: true
                        };
                        $.extend(win, config, $.extend({}, win));
                        options = $.extend(options, win);

                        setTimeout(function () {
                            winControl['uc_' + config.type](options);
                        }, 0);
                    }
                    //win[config.type] = function () { return win[config.type].apply(winControl, arguments); },
                }
            };
            return handle;
            //ko.bindingHandlers[config.type] = handle;
        };
        ko.bindingHandlers.dialog = ko.createEasyuiWinBindings({
            type: 'dialog',
            _beforeOpen: function () { return true },
            _open: function (isMax) {
                if (typeof this._beforeOpen == 'function' && !this._beforeOpen())
                    return false;

                if (isMax) {
                    this._$elem().uc_dialog('maximize');
                }
                this._$elem().uc_dialog('center').uc_dialog('open');

                if (typeof this._afterOpen == 'function' && !this._afterOpen())
                    return false;
            },
            _max: function () {
                this._$elem().uc_dialog('maximize');
            },
            _afterOpen: function () { return true },
            _beforeClose: function () { return true },
            _close: function () {
                if (typeof this._beforeClose == 'function' && !this._beforeClose())
                    return false;

                this._$elem().uc_dialog('close');

                if (typeof this._afterClose == 'function' && !this._afterClose())
                    return false;
            },
            _afterClose: function () { return true },
            _validate: function () {
                if (!this._$elem().form('validate')) {
                    com.message('error', resx.__input_required_field);
                    return false;
                }
                return true;
            }
        });


        ko.bindingHandlers.window = ko.createEasyuiWinBindings({
            type: 'window',
            _open: function () {
                this._$elem().uc_window('center').uc_window('open');
            },
            _close: function () {
                this._$elem().uc_window('close');
            }
        });
        ko.createEasyuiWinBindings({ type: 'panel' });


        ko.createEasyuiWinBindings({ type: 'panel' });


        //tab
        ko.createEasyuiTabsBindings = function (config) {
            config = $.extend({
                type: 'tabs'
            }, config);
            var handle = {
                init: function (element, valueAccessor) {
                    var tabs = valueAccessor();
                    tabs._$elem = function () { return $(element); };
                },

                update: function (element, valueAccessor) {
                    var tabsControl = $(element),
                       tabs = valueAccessor(),
                        value = ko.toJS(tabs);
                    var options;
                    if (tabsControl.data[config.type])
                        options = tabsControl.data[config.type].options;

                    if (!options) {
                        options = {
                            fit: true
                        };
                        tabs.tabs = function () {
                            return tabsControl.tabs.apply(tabsControl, arguments);
                        };
                        $.extend(tabs, config, $.extend({}, tabs));
                        options = $.extend(options, tabs);

                        setTimeout(function () {
                            tabsControl['uc_' + config.type](options);
                            setTimeout(function () {
                                var height = tabsControl.height();
                                if (tabs.getHeight) {
                                    height = tabs.getHeight();
                                }
                                //tabsControl.parent().height(height - 65);
                                tabsControl.parent().height(height - 10);
                                tabsControl['uc_' + config.type]("resize");
                            }, 0);

                        }, 0);
                    }
                    //win[config.type] = function () { return win[config.type].apply(winControl, arguments); },
                }
            };
            return handle;
            //ko.bindingHandlers[config.type] = handle;
        };
        ko.bindingHandlers.tabs = ko.createEasyuiTabsBindings({ type: 'tabs' });


        //others 

        ko.bindingHandlers.radioTrueFalseBoolean = {
            init: function (element, valueAccessor, allBindingsAccessor) {
                $(element).change(function () {
                    var value = valueAccessor();
                    var elemVal = $(element).val();
                    if ($(element).prop('checked')) {
                        value(elemVal == "true");
                    }
                    else {
                        value(elemVal == "false");
                    }
                });
            },
            update: function (element, valueAccessor, allBindingsAccessor) {
                var value = valueAccessor();
                if (ko.utils.unwrapObservable(value) === true) {
                    if ($(element).val() == 'true') {
                        $(element).prop('checked', true);
                    } else {
                        $(element).prop('checked', false);
                    }

                    value(true);
                } else {
                    if ($(element).val() == 'false') {
                        $(element).prop('checked', true);
                    } else {
                        $(element).prop('checked', false);
                    }

                    value(false);
                }
            }
        };
        ko.bindingHandlers.tabTitle = {
            init: function (element, valueAccessor, allBindingsAccessor) {
            },
            update: function (element, valueAccessor, allBindingsAccessor) {
                var value = valueAccessor();
                var tab = $(element);
                var tabs = tab.parent().parent().parent();
                tabs.tabs('update', { tab: tab, options: { title: value } });
            }
        }

    }(jQuery, ko)
)
;var com = com || {};
com.viewModel = com.viewModel || {};

com.viewModel.common = function (data) {
    var me = this;
    if (Object.prototype.toString.call(data) === '[object Arguments]')
        data = data[0];
    data.otherData = data.otherData || {};
    me.otherData = data.otherData || {};

    me.keyField = data.keyField;
    me.tools = data.common.tools;
    data.defaultData = data.defaultData || {};
    data.common.resx = this.resx || {};
    me.resx = data.common.resx;
    me.viewType = data.viewType;
    //me.resx.form = ko.mapping.fromJS(data.resx.form);
    me.common = data.common;
    //me.common.form = ko.mapping.fromJS(data.common.form);

    // extend from other
    me.urls = $.extend({}, data.urls, data.otherData.urls);
    me.datasource = $.extend({}, data.datasource, data.otherData.datasource);
    me.defaultData = $.extend({}, data.defaultData);
    me.form = ko.mapping.fromJS($.extend({}, data.form || data.defaultForm));
    me.setting = $.extend({}, data.setting, data.otherData.setting);
    me._formPassword = {
        old_password: ko.observable(),
        new_password: ko.observable()
    };
    me.data = data;

    me.signout = function (form) {
        //com.showComfirm("comfirm", resx.__want_to_sign_out, function (b) {
        //    if (!b) return;
        //window.location.href = '/Home/SignOut';
        //return;

        com.ajax({
            type: "GET",
            url: "/Home/SignOut",
            data: ko.toJSON(me.common.form.user),
            success: function (retJson) {
                if (retJson && retJson.status === "success") {
                    location.reload();
                } else {
                    Utils.log(retJson);
                }
            }
        });

        //});
    };


    me.__winChangePassword = {
        //title: resx['__change_password'],
        title: '修改密码',
        width: 450,
        height: 200,
        buttons: [
            {
                //text: resx.__save,
                text: '保存',
                iconCls: 'icon-save',
                handler: function () {
                    if (!me.__winChangePassword._$elem().form("validate")) {
                        me.message(me.resx.__input_required_field);
                        return false;
                    }
                    com.ajax({
                        type: 'GET',
                        data: { old_password: me._formPassword.old_password(), new_password: me._formPassword.new_password() },
                        // url: '/api/sys/user/changePassword/',
                        url: '/api/bas/user/changePassword/',
                        success: function (resp, status, xhr) {
                            com.handleResp(resp, undefined, undefined, function () {
                                me.__winChangePassword._close();
                            });
                        }
                    });
                }

            },
            {
                //text: resx.__close,
                text: '关闭',
                iconCls: 'icon-close',
                handler: function () {
                    me.__winChangePassword._close();
                }
            }
        ]

    };
    me._changePwd = function () {
        me.__winChangePassword._open();
    }


    me.init = function () {
        /*if (top != window) {
        top.window.location = window.location;
        }
        */

        //$(document).ready(function () {
        if (me.common.menus) {
            //me.loadNavMenus(me.common.menus);
            me.loadMenus(me.common.menus);
            var mainHeaderHeight = 0;
            var $mainHeader = $("#mainHeader")[0];
            if ($mainHeader) {
                mainHeaderHeight = $("#mainHeader")[0].scrollHeight;
                $('#mainContainer').height($('body').height() - mainHeaderHeight);
                $(".easyui-uc_layout").uc_layout('resize');
            }


            var $content = $('.quicklinks .dropdown .dropdown_content');
            $('.quicklinks .dropdown a:first').click(function () {
                $content.slideToggle(200);
                if ($content.css('display') === 'block') {
                    $('.quicklinks .dropdown').css('background-color', '#0078B1');
                } else {
                    $('.quicklinks .dropdown').css('background-color', 'white');
                }
                //$('.quicklinks .dropdown .dropdown_content').css("display", "block");
            });
            $('.quicklinks').mouseleave(function () {
                $content.css('display', 'none');
                $('.quicklinks .dropdown').css('background-color', 'white');
            });
        }

        me.loadTools(me.common.tools);
        //});
    }

    me.loadMenus = function (menus) {
        var parents = $.grep(menus, function (menu, index) {
            return !menu.ParentCode;
        });
        $.each(parents, function (index, menu) {
            var ul = document.createElement("ul");
            ul.style.padding = '8px';
            ul.className = 'easyui-tree';
            $("#menu").accordion("add", { title: menu.Name, content: ul,selected:false });
            var json = getChildren(menus, menu.Code);
            $(ul).tree({ data: json });

            $(ul).tree({
                onSelect: function (node) {
                    addTab(node.text, node.attributes.url);
                }
            });
        });
    };

    me.loadNavMenus = function (menus) {
        var parents = $.grep(menus, function (menu, index) {
            return !menu.ParentCode;
        });
        var menuHtml = '';
        $.each(parents, function (index, menu) {
            //<a href="javascript:void(0)" class="easyui-menubutton" data-options="menu:'#mm',iconCls:'icon-edit'">System</a>

            var div = document.createElement("div");
            div.style.width = 150;
            div.id = "m_" + menu.Code;
            var json = me.getChildren(menus, menu.Code);

            if (!json.length) {
                menuHtml += "<li><a url='{0}' onclick='addTab(\"{1}\",\"{0}\")'>".format(menu.Url, (menu.Name || resx[menu.Code])) + (menu.Name || resx[menu.Code]) + '</a>';
            }
            else {
                menuHtml += '<li><a>' + (menu.Name || resx[menu.Code]) + '</a>' + '<i class="fa fa-caret-down"></i>';
            }

            menuHtml += "<ul>";
            $.each(json, function (idx, m) {

                if (m.children && m.children.length > 0) {
                    var childHtml = "";
                    menuHtml += "<ul>";
                    $.each(m.children, function (i, gm) {
                        menuHtml += "<li><a>" + gm.text + "</a></li>"
                        // childHtml += "<div data-options='iconCls:\"{0}\"' url='{1}' onclick='redirect(\"{2}\",\"{1}\")'>{2}</div>".format(gm.iconCls, gm.attributes.url, gm.text);
                        childHtml += "<div data-options='iconCls:\"{0}\"' url='{1}' onclick='addTab(\"{2}\",\"{1}\")'>{2}</div>".format(gm.iconCls, gm.attributes.url, gm.text);
                    });
                    menuHtml += "</ul>";

                    var html = "<div data-options='iconCls:\"{2}\"' id='m_{0}'><span>{1}</span><div style='width:150px;'>{3}</div></div>".format(m.Code, m.text, m.iconCls, childHtml);
                    $(div).append(html);
                } else {
                    //menuHtml += "<li><a url='{0}' onclick='redirect(\"{1}\",\"{0}\")'>".format(m.attributes.url, resx[m.menu_code]) + (resx[m.menu_name] || resx[m.menu_code]) + "</a></li>"
                    menuHtml += "<li><a url='{0}' onclick='addTab(\"{1}\",\"{0}\")'>".format(m.attributes.url, m.text) + m.text + "</a></li>"
                    //$(div).append("<div data-options='iconCls:\"{0}\"' url='{1}' onclick='redirect(\"{2}\",\"{1}\")'>{2}</div>".format(m.iconCls, m.attributes.url, resx[m.menu_code]));
                    $(div).append("<div data-options='iconCls:\"{0}\"' url='{1}' onclick='addTab(\"{2}\",\"{1}\")'>{2}</div>".format(m.iconCls, m.attributes.url, m.text));
                }
            });
            menuHtml += "</ul>";
            $(div).appendTo("#menu_container");
            $("#nav_menu").append("<a id='a_{0}' >{1}</a>".format(menu.Code, resx[menu.Code]));

            menuHtml += '</li>';
            /*$("#a_" + menu.menu_code).menubutton({
                iconCls: menu.icon_cls,
                plain: true,
                menu: '#m_' + menu.menu_code
            });
            */
        });
        $('#navul').html(menuHtml);
        $("#navul>li").hover(
            function () {
                clearTimeout($(this).data('t'));
                $(this).addClass("navmoon");
                var me = this;
                var t = setTimeout(function () {
                    var dHeight = $(document).height();
                    if ($(me).children('ul').height() > dHeight - 100) {
                        $(me).children('ul').height(dHeight - 100);
                    }
                    $(me).parent().find('ul').hide();
                    $(me).children('ul').slideDown('fast');
                }, 50);
                $(this).data('t', t);
            }, function () {
                clearTimeout($(this).data('t'));
                //$(this).children('ul').css('display', 'none');
                $(this).children('ul').hide();
                $(this).removeClass("navmoon");
            }
        );
        $("#navul>li").mouseleave(function () {
            $(this).children('ul').css('display', 'none');
        });

    }

    me.addTab = function (title, url) {
        //TODO:用于替换Test
        //url = url.replace("/test", "");
        var tabs = $('#tabs');

        if (tabs.tabs('exists', title)) {
            tabs.tabs('close', title);
        }
        var content = '<iframe title=\"' + title + '\" scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:99.5%;"></iframe>';
        tabs.tabs('add', {
            title: title,
            content: content,
            closable: true
        });
        $("#navul>li").children('ul').css('display', 'none');
    };

    me.closeTab = function (title) {
        var tabs = $('#tabs');

        if (tabs.tabs('exists', title)) {
            tabs.tabs('close', title);
        }

    };

    me.redirect = function (title, url) {
        document.location.href = url;
    };

    /*me.loadTools = function (tools, included) {
        //<a href="#" class="easyui-uc_linkbutton" data-options="plain:true,iconCls:'icon-search'"
        //      data-bind="click:search">Search</a>
        if (!me.tools) return;
        me.__tools = {};
        $("#toolbar .easyui-uc_linkbutton").remove();
        $.each(me.tools, function (idx, val) {
            if (tools && included && tools.indexOf(val.point_code) < 0) return;
            if (tools && !included && tools.indexOf(val.point_code) > -1) return;

            if (!val.is_hidden) {
                var icon = val.icon || 'icon-' + val.point_code;
                var method = val.method_name || '_' + val.point_code;
                var name = resx[val.point_name] || resx['__' + val.point_code] || val.point_name || resx[val.point_code] || val.point_code;
                var a = $('<a href="#" class="easyui-uc_linkbutton" data-options="iconCls:\'' + icon + '\'" onclick ="' + method + '(this)">' + name + '</a>').appendTo($("#toolbar"));
                a.data('data', val);
            }
            me.__tools[val.point_code] = val;
        });

        //$('<a href="#" class="easyui-uc_linkbutton" data-options="plain:true,iconCls:\'icon-refresh\'" onclick ="_refresh(this)">' + me.resx['__refresh'] + '</a>').appendTo($("#toolbar"));
        $('<a href="#" class="easyui-uc_linkbutton" data-options="iconCls:\'icon-close\'" onclick ="_close(this)">' + me.resx['__close'] + '</a>').appendTo($("#toolbar"));
        $("#toolbar .easyui-uc_linkbutton").uc_linkbutton();
    };*/

    me.loadTools = function (tools, included) {
        //<a href="#" class="easyui-uc_linkbutton" data-options="plain:true,iconCls:'icon-search'"
        //      data-bind="click:search">Search</a>
        me.tools = tools;
        if (!me.tools) return;
        me.__tools = {};
        $("#toolbar a").remove();

        $.each(me.tools, function (idx, val) {
            if (tools && included && tools.indexOf(val.Code) < 0) return;
            if (tools && !included && tools.indexOf(val.Code) > -1) return;

            if (!val.is_hidden) {
                var icon = val.icon || 'icon-' + val.Code;
                var method = val.Method || '_' + val.Code;
                var name = resx[val.Name] || resx['__' + val.Code] || val.Name || resx[val.Code] || val.Code;
                //var a = $('<a href="#" class="easyui-uc_linkbutton" data-options="iconCls:\'' + icon + '\'" onclick ="' + method + '(this)">' + name + '</a>').appendTo($("#toolbar"));
                var a = $('<a href="#" class="dh-menu-point" onclick ="' + method + '(this)"><span class="dh-point"><span class="dh-icon ' + icon + '"></span><span class="dh-text">' + name + '</span></span></a>').appendTo($("#toolbar"));
                a.data('data', val);
            }
            me.__tools[val.Code] = val;
        });

        //$('<a href="#" class="easyui-uc_linkbutton" data-options="plain:true,iconCls:\'icon-refresh\'" onclick ="_refresh(this)">' + me.resx['__refresh'] + '</a>').appendTo($("#toolbar"));
        $('<a href="#" class="dh-menu-point" data-options="iconCls:\'icon-close\'" onclick ="_close(this)"><span class="dh-point"><span class="dh-icon icon-close">&nbsp;</span><span class="dh-text">关闭</span></span></a>').appendTo($("#toolbar"));
        //$("#toolbar .easyui-uc_linkbutton").uc_linkbutton();
    };


    me.getChildren = function (menus, parentCode) {
        var childJson = [];
        var children = $.grep(menus, function (menu, index) {
            return menu.ParentCode == parentCode;
        });

        $.each(children, function (index, menu) {
            // 用 text, iconCls, attrubutes: url 属性是为了兼容easyui-tree
            childJson.push({ Code: menu.Code, text: menu.Name, iconCls: menu.Icon, attributes: { url: menu.Url }, children: me.getChildren(menus, menu.Code) });
        });
        return childJson;
    };

    me.message = function () {
        return com.topParentMsg.apply(this, arguments);
    };

    me.isEnabled = function (field) {
        if (me.isEditing && me.setting && me.setting.disabledFieldsInEdit) {
            return $.inArray(field, me.setting.disabledFieldsInEdit) < 0;
        } else {
            return true;
        }
    };

    //
    me._close = function () {
        com.close();
        //me.redirect(null, '/home');
    };

    // init grid head name from dictionary
    /*setTimeout(function () {
    var gridArr = $('table[data-bind^=datagrid],table[data-bind^=treegrid]');
    if (gridArr.length) {
    gridArr.each(function (gridIdx, gridObj) {
    var thArr = $(gridObj).find('th[field]');
    if (!$.data(gridObj).datagrid) return;
    $.data(gridObj).datagrid.dc.header2.find('td[field]').each(function (idx, val) {
    var th = $.grep(thArr, function (th, idx) {
    return $(th).attr('field') === $(val).attr('field');
    });

    var text = $(th).find('label').text();
    if (text)
    $(val).find('span:first').text(text);
    });

    $(gridObj).datagrid('fitColumns');
    $(gridObj).datagrid('autoSizeColumn');

    });
    }
    }, 0);
    */


    me.unableForm = function () {
        $(".dh-form input,select,textarea,button").prop('disabled', true);
        $(".dh-form input,select,textarea,button,span").unbind('click');
        $('.dh-form .datagrid-toolbar').remove();
    };
    //me.init();

    //$.extend($.fn.validatebox.defaults, { missingMessage: resx.__missingMessage });
    //$.extend($.messager.defaults, { ok: resx.__ok, cancel: resx.__cancel });
    //$.extend($.fn.combobox.defaults, { missingMessage: resx.__missingMessage });
    //$.extend($.fn.datebox.defaults, { missingMessage: resx.__missingMessage });
};var com = com || {};
com.viewModel = com.viewModel || {};

com.viewModel.search = function (data) {
    com.viewModel.common.apply(this, arguments);

    var me = this;

    // console.log(me.resx);
    //me.form = ko.mapping.fromJS(data.form);
    //delete me.form.__ko_mapping__;
    me.formImport = {
        confirm: ko.observable(),
        content: ko.observable(),
        logName: ko.observable(),
        logPath: ko.observable(),
        file: ko.observable()
    };

    me.grid = {
        url: me.urls.query,
        fixed: true,
        pagePosition: 'both',
        printSetting: undefined,
        queryParams: ko.observable(),
        onLoadSuccess: function () {
            if (__resizeLayout)
                __resizeLayout();
        },
        doRemoteFilter: function () {
            var opts = me.grid.datagrid('options');
            var filterParam = {};
            for (var i = 0; i < opts.filterRules.length; ++i) {
                filterParam[opts.filterRules[i].field] = opts.filterRules[i].value;
            }


            var param = ko.toJS(me.form);
            delete param.__ko_mapping__;


            if (!me.grid || !me.grid.datagrid) return false;
            var pages = me.grid.datagrid("getPager");
            if (!pages || pages.length == 0) return false;

            $(pages[0]).pagination("options").pageNumber = 1;
            $(pages[1]).pagination("options").pageNumber = 1;

            $.extend(param, filterParam);
            me.grid.queryParams(param);

            $(pages[0]).pagination("refresh");
            $(pages[1]).pagination("refresh");
            me.grid.datagrid('clearChecked');

        },
        checkEnableFilter: function () {
            var opts = me.grid.datagrid('options');
            if (!opts.enableFilter) return false;
            var filters = [];
            $.each(opts.columns[0], function (idx, col) {
                if (col.filter) {
                    //col.filter.field = col.field;
                    var hasProp = false;
                    for (var p in col.filter) {
                        hasProp = true;
                        break;
                    }
                    if (hasProp) {
                        col.filter.field = col.field;
                        if (!col.filter.type) {
                            col.filter.type = 'uc_validatebox';
                        }
                        if (!col.filter.paramField) {
                            col.filter.paramField = col.field;
                        }
                    }

                } else {
                    col.filter = { type: 'label', field: col.field };
                }
                col.filter.options = col.filter.options || {};
                var options = {};
                switch (col.filter.type) {
                    case 'uc_dateRange':
                        options = {
                            panelWidth: 388,
                            onSelect: function (from, to) {
                                var value = $(this).uc_dateRange('getValue');
                                if (!value) {
                                    grid.datagrid('removeFilterRule', col.filter.paramField);
                                } else {
                                    grid.datagrid('addFilterRule', {
                                        field: col.filter.paramField,
                                        op: 'equal',
                                        value: value
                                    });
                                }
                                grid.datagrid('doFilter');
                            }
                        };
                        break;
                    case 'uc_combobox':
                        options = {
                            onChange: function (value) {
                                if (value == '') {
                                    grid.datagrid('removeFilterRule', col.filter.paramField);
                                } else {
                                    grid.datagrid('addFilterRule', {
                                        field: col.filter.paramField,
                                        op: 'equal',
                                        value: value
                                    });

                                }
                                grid.datagrid('doFilter');
                            }
                        }
                        break;
                    case 'uc_dollar':
                    case 'uc_percent':
                    case 'uc_numberspinner':
                        options = {
                            onChange: function (value) {
                                if (value == '') {
                                    grid.datagrid('removeFilterRule', col.filter.paramField);
                                } else {
                                    grid.datagrid('addFilterRule', {
                                        field: col.filter.paramField,
                                        op: 'equal',
                                        value: value
                                    });

                                }
                                grid.datagrid('doFilter');
                            }
                        }
                }
                $.extend(col.filter.options, options, col.filter.options);
                filters.push(col.filter);
            });
            if (opts.filters) {
                $.merge(filters, opts.filters);
            }
            var notLabelFilters = $.grep(filters, function (val, idx) {
                return val.type != 'label';
            });
            if (notLabelFilters.length > 0)
                me.grid.datagrid('enableFilter', filters);
        }
    };

    me.grid._printArea = function (options) {
        var settings = $.extend(me.grid.printSetting, com.printSetting, options);
        var writeDoc;
        var printWindow;

        switch (settings.mode) {
            case com.modes.iframe:
                var f = new com.Iframe(settings);
                writeDoc = f.doc;
                printWindow = f.contentWindow || f;
                break;
            case com.modes.popup:
                printWindow = new Popup();
                writeDoc = printWindow.doc;
        }
        writeDoc.open();
        var head = writeDoc.createElement("head"),
            body = writeDoc.createElement("body");
        title = writeDoc.createElement("title"),
        style = writeDoc.createElement("style");
        //title.innerHTML ="{0}".format( resx[parent.window.__pageSetting.title] || parent.window.__pageSetting.title);
        title.innerHTML = "{0}".format(me.resx[window.__pageSetting.title] || window.__pageSetting.title);
        style.innerHTML = "body{font-size:12px;} table{font-size:12px;border-collapse:collapse;border-spacing:0px;} table td{border:1px solid;padding:3px;} table th{border:1px solid;padding:3px;} ";
        head.appendChild(title);
        head.appendChild(style);
        var tableData = me.grid.datagrid("getRows"),
            colsInfo = me.grid.datagrid("options").columns;
        var table = writeDoc.createElement("table"),
            thead = writeDoc.createElement("thead"),
            thtr = writeDoc.createElement("tr"),
            tbody = writeDoc.createElement("tbody");

        if (!tableData || !tableData.length) {
            com.message("wran", me.resx.no_print_data);
            return false;
        }

        for (var rowIdx in tableData) {
            var tr = writeDoc.createElement("tr");
            var rowData = tableData[rowIdx];
            $.each(colsInfo[0], function (colIdx, col) {
                if (rowIdx == 0) {
                    var th = writeDoc.createElement("th");
                    th.innerHTML = col.title;
                    thtr.appendChild(th);
                }

                var colData = rowData[col.field]
                if (col.formatter) {
                    colData = col.formatter(colData, rowData, rowIdx);
                }
                var td = writeDoc.createElement("td");
                td.innerHTML = colData;
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        }

        thead.appendChild(thtr);
        table.appendChild(thead);
        table.appendChild(tbody);
        body.appendChild(table);

        writeDoc.write("<html>" + $(head).html() + $(body).html() + "</html>");
        writeDoc.close();

        printWindow.focus();
        printWindow.print();

        if (settings.mode == com.modes.popup && settings.popClose) {
            printWindow.close();
        }
    };

    me._printGrid = function () {
        me.grid._printArea();
    };

    me.grid.queryParams(data.form);

    me._beforeAdd = undefined;
    me.showWin = function (title, url, iwidth, iheight, winType) {
        /*if (winType != 'popUp') {
            // lgr 2015-04-20 rental 的编辑界面直接在新界面中打开
            window.open(url);
            return;
        }
        */
        //TODO:用于替换Test,替换按钮，弹出窗体
        //url = url.replace("/test", "");


        var win = $('#__win');
        var width, height;
        $('#ifr').hide();
        $('#ifr').attr('src', '');

        //为了防止用户看到 iframe 显示的前个页面内容，用 settimeout 延迟弹出层；
        setTimeout(function () {
            $('#ifr').show();

            if (iwidth || iheight) {
                height = iheight || $(document.body).height() - 40;
                width = iwidth || $(document.body).width() - 40;
                //width = width > 1000 ? 1000 : width;
                //height = height > 600 ? 600 : height;
                if (!iheight && __pageSetting && __pageSetting.modalHeight) {
                    height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                }
                if (!iwidth && __pageSetting.modalWidth) {
                    width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                } else {
                    width = width > 1000 ? 1000 : width;
                }

                $('#ifr').attr('src', url);
                win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');

            }
            else if (!__pageSetting || (!__pageSetting.modalHeight && !__pageSetting.modalWidth)) {
                $('#ifr').attr('src', url);
                win.window('maximize').window('setTitle', title).window('open').window('center');
            } else {
                height = $(document.body).height() - 40;
                width = $(document.body).width() - 40;
                //width = width > 1000 ? 1000 : width;
                //height = height > 600 ? 600 : height;
                var isMax = true;;
                if (__pageSetting && __pageSetting.modalHeight) {
                    if (__pageSetting.modalHeight < height - 100) {
                        isMax = false;
                    }

                    height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                }
                if (__pageSetting.modalWidth) {
                    if (__pageSetting.modalWidth < width) {
                        isMax = false;
                    }
                    width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                } else {
                    width = width > 1000 ? 1000 : width;
                }
                $('#ifr').attr('src', url);
                if (isMax) {
                    // win.window('maximize').window('setTitle', title).window('open').window('center');
                    win.window('maximize').window('setTitle', title).window('open');
                } else {
                    //win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                    win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                    if (win.window('options').top > 100) {
                        win.window('move', { top: 100 });
                    }
                }


            }
        }, 0)
        return;

    };
    me.closeWin = function () {
        var win = $('#__win');
        win.window('close');
    };

    //-- notice that grid.datagrid() will be declared in koext.js
    me.grid.onDblClickRow = function () {
        var thisData = me.__tools["edit"];
        if (thisData) {
            me._edit();
        } else {
            thisData = me.__tools["detail"];
            if (thisData) {
                me._detail();
            }
        }
    };


    if (me.viewType == "approval") {
        me.grid.onDblClickRow = function () {
            me._detail();
        };
    }

    me._refresh = function () {
        me._query();
    };
    me._search = function () {
        me._query();
    }

    me._query = function () {
        var param = ko.toJS(me.form);
        delete param.__ko_mapping__;
        //param.pageNumber = 1;
        if (!me.grid || !me.grid.datagrid) return false;
        var pages = me.grid.datagrid("getPager");
        if (!pages || pages.length == 0) return false;

        $(pages[0]).pagination("options").pageNumber = 1;
        $(pages[1]).pagination("options").pageNumber = 1;
        me.grid.queryParams(param);

        $(pages[0]).pagination("refresh");
        $(pages[1]).pagination("refresh");
        me.grid.datagrid('clearChecked');
    };

    me._searchAll = function (value) {

        var pages = me.grid.datagrid("getPager");
        $(pages[0]).pagination("options").pageNumber = 1;
        $(pages[1]).pagination("options").pageNumber = 1;

        var param = ko.toJS(me.form);
        delete param.__ko_mapping__;
        var searchValue = $("#__btnSearch").val();
        if ($.trim(searchValue)) {
            param._value = searchValue;
        }
        param.pageNumber = 1;
        me.grid.queryParams(param);
        //me.grid.queryParams({ _value: value, pageNumber: 1 });
        $(pages[0]).pagination("refresh");
        $(pages[1]).pagination("refresh");
        me.grid.datagrid('clearChecked');
    }

    me._delete = function (target) {
        me._remove(target);
    }

    me._export = function (target) {
        var param = ko.toJS(me.form);
        delete param.__ko_mapping__;
        var searchValue = $("#__btnSearch").val();
        if ($.trim(searchValue)) {
            param._value = searchValue;
        }
        var thisData = target ? $(target).data("data") : me.__tools["export"];
        if (!thisData) return
        var url = thisData.url;
        com.ajax({
            url: url,
            type: 'GET',
            data: param,
            dataType: 'JSON',
            success: function (data, status, jqxhr) {
                if (data) {
                    if (typeof data != 'object')
                        data = JSON.parse(data);
                    if (data.status === true) {
                        if ($("#downloadIframe")) {
                            $("#downloadIframe").remove();
                        }
                        $(document.body).append("<iframe id='downloadIframe' style='display:none' src='" + com.preUrl + "/utilis/Utilis/Download?isChecked=false&downloadName=" + data.downloadName + "&relativeFileFullName=" + data.relativeFileFullName + "' />");
                    } else if (data.status === false) {
                        com.message("warn", data.msg);
                    } else {
                        com.message("error", data.msg);
                    }
                } else {
                    com.message("error", "network error!");
                }
            },
            error: function (jqxhr, status, errorThrown) {
                com.message("error", status + errorThrown);
            }
        });
    };

    me._editWin = {
        closed:true,
        modal:true,
        minimizable:false,
        _close: function () {
            me._editWin._close();
        },
        _open: function (title, url, iwidth, iheight, winType) {
            /*if (winType != 'popUp') {
                // lgr 2015-04-20 rental 的编辑界面直接在新界面中打开
                window.open(url);
                return;
            }
            */
            //TODO:用于替换Test,替换按钮，弹出窗体
            //url = url.replace("/test", "");
     
            var width, height;
            $('#ifr').hide();
            $('#ifr').attr('src', '');
            var win = me._editWin._$elem();
            //为了防止用户看到 iframe 显示的前个页面内容，用 settimeout 延迟弹出层；
            setTimeout(function () {
                $('#ifr').show();

                if (iwidth || iheight) {
                    height = iheight || $(document.body).height() - 40;
                    width = iwidth || $(document.body).width() - 40;
                    //width = width > 1000 ? 1000 : width;
                    //height = height > 600 ? 600 : height;
                    if (!iheight && __pageSetting && __pageSetting.modalHeight) {
                        height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                    }
                    if (!iwidth && __pageSetting.modalWidth) {
                        width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                    } else {
                        width = width > 1000 ? 1000 : width;
                    }

                    $('#ifr').attr('src', url);
                    me._editWin.win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');

                }
                else if (!__pageSetting || (!__pageSetting.modalHeight && !__pageSetting.modalWidth)) {
                    $('#ifr').attr('src', url);
                    win.window('maximize').window('setTitle', title).window('open').window('center');
                } else {
                    height = $(document.body).height() - 40;
                    width = $(document.body).width() - 40;
                    //width = width > 1000 ? 1000 : width;
                    //height = height > 600 ? 600 : height;
                    var isMax = true;;
                    if (__pageSetting && __pageSetting.modalHeight) {
                        if (__pageSetting.modalHeight < height - 100) {
                            isMax = false;
                        }

                        height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                    }
                    if (__pageSetting.modalWidth) {
                        if (__pageSetting.modalWidth < width) {
                            isMax = false;
                        }
                        width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                    } else {
                        width = width > 1000 ? 1000 : width;
                    }
                    $('#ifr').attr('src', url);
                    if (isMax) {
                        // win.window('maximize').window('setTitle', title).window('open').window('center');
                        win.window('maximize').window('setTitle', title).window('open');
                    } else {
                        //win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                        win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                        if (win.window('options').top > 100) {
                            win.window('move', { top: 100 });
                        }
                    }


                }
            }, 0)
            return;
        }
    };

    me._winUploadImport = {
        title: me.resx['__import'],
        width: 450,
        height: 300,
        buttons: [
            {
                text: me.resx.__close,
                iconCls: 'icon-close',
                handler: function () {
                    me._winUploadImport._close();
                }
            }
        ]

    };
    me._dialogMsgImport = {
        title: me.resx['__info'],
        width: 700,
        height: 330,
        buttons: [
            {
                text: me.resx.__close,
                iconCls: 'icon-close',
                handler: function () {
                    me._dialogMsgImport._close();
                }
            },
            {
                text: me.resx.__download,
                iconCls: 'icon-download',
                handler: function () {
                    if ($("#downloadIframe")) {
                        $("#downloadIframe").remove();
                    }
                    $(document.body).append("<iframe id='downloadIframe' style='display:none' src='/utilis/Utilis/Download?isChecked=false&downloadName=" + me.formImport.logName() + "&relativeFileFullName=" + me.formImport.logPath() + "' />");
                }
            }
        ]

    };
    me._dialogConfirmImport = {
        title: me.resx['__confirm'],
        width: 700,
        height: 330,
        buttons: [
            {
                text: me.resx.__yes,
                iconCls: 'icon-ok',
                handler: function () {
                    me._confirmImport(me.formImport.file(), false, true);
                    me._dialogConfirmImport._close();
                }
            },
            {
                text: me.resx.__no,
                iconCls: 'icon-no',
                handler: function () {
                    me._confirmImport(me.formImport.file(), false, false);
                    me._dialogConfirmImport._close();
                }
            },
            {
                text: me.resx.__cancel,
                iconCls: 'icon-cancel',
                handler: function () {
                    me._dialogConfirmImport._close();
                }
            }
        ]
    };
    me._onImportUploadSuccess = function (record) {
        me.formImport.file(record.relativeFileName);
        //me._confirmImport(record.relativeFileName, true);
        me._confirmImport(record.relativeFileName, false, true);
    };
    me._onImportQueueComplete = function () {
        me._winUploadImport._close();
    };
    me._confirmImport = function (filename, isCheck, isRepeatedUpdate) {
        var param = '';
        if (isRepeatedUpdate == false) param = '&isRepeatedUpdate=false';
        else if (isRepeatedUpdate == true) param = '&isRepeatedUpdate=true';
        $("#__content").mask(me.resx.__importingWait);
        com.ajax({
            type: 'GET',
            url: me.urls.import + "?filePath=" + filename + "&isCheck=" + isCheck + param,
            success: function (data, status, xhr) {
                $("#__content").unmask(me.resx.__importingWait);
                if (typeof data == 'object' && data.status == 'confirm') {
                    me.formImport.confirm(me.resx[data.msg_code]);
                    me.formImport.content(data.content);
                    me._dialogConfirmImport._open();
                } else {
                    com.handleResp(data, undefined, undefined, function () {
                        if (data.status == true) {
                            me.formImport.confirm(me.resx[data.msg_code] + ', ' + me.resx["__success"] + ':' + data.right_msg.__success + ', ' + me.resx["__failed"] + ":" + data.right_msg.__failed);
                            me.formImport.content(data.content);
                            me.formImport.logPath(data.logPath);
                            me.formImport.logName(data.logName);
                            me._dialogMsgImport._open();
                        }
                        me._refresh();
                    });
                }
            }
        });
    }
    me._import = function () {
        var body = me._winUploadImport._$elem().panel("body");
        $(body).html("<iframe src='/utilis/Utilis/Uploadify?onUploadSuccess=_onImportUploadSuccess&onQueueComplete=_onImportQueueComplete&multi=false&auto=true&fileType=*.xls;*.xlsx' scrolling='auto' frameborder='0' style='width:100%;height:95%;'/>");
        me._winUploadImport._open();

    }


    //#region tools
    me._beforeEdit = undefined;
    me._actionEdit = undefined;
    me._afterEdit = undefined;
    me._edit = function (target) {
        var thisData = target ? $(target).data("data") : me.__tools["edit"];
        if (!thisData) return;

        var row = me.grid.datagrid("getSelected");
        var obj = { row: row };
        if ((typeof me._beforeEdit === 'function' && !me._beforeEdit(me, thisData, obj)))
            return false;

        var url = '';
        row = obj.row;
        if (!row) return com.message("error", me.resx.noneSelection);
        if (me.keyField.split(',').length > 1) {
            var para = "";
            $.each(me.keyField.split(','), function (idx, val) {
                para += val + "=" + row[val] + "&";
            });
            para = para.substr(0, para.length - 1);
            //com.openTab(me.resx.editTitle, "{0}?{1}".format(me.urls.edit, para));
            url = "{0}?{1}".format(thisData.Url, para);

        } else {
            //com.openTab(me.resx.editTitle, me.urls.edit + row[me.keyField]);
            //url = thisData.url + row[me.keyField];
            url = "{0}?{1}={2}".format(thisData.Url, me.keyField, row[me.keyField]);
        }

        var title = (me.resx[thisData.Name] || me.resx['__edit']) + ' ' + me.resx[__pageSetting.title] || __pageSetting.title || data.Code;
        var title = '编辑 ' + __pageSetting.title;

        var obj = { context: me, toolData: thisData, url: url, row: row, title: title };

        // action edit 是在 post 回服务前要执行的方法，一般把 post 方法的参数，作为自己的参数， 如 me.showWin(title,url) 中的 title,url,
        // 当然第一个参数是传递调用该方法的上下文环境,第二个 thisData 是当前tool 的数据，第三个 row 是选中的行；
        if ((typeof me._actionEdit === 'function' && !me._actionEdit(obj)))
            return false;

        //me.showWin(obj.title, obj.url, null, null, thisData.win_type);
        me._editWin._open(obj.title, obj.url, null, null, thisData.WinType);

        if (typeof me._afterEdit == 'function')
            me._afterEdit(me);
    };


    me._beforeRemove = undefined;
    me._afterRemove = undefined;
    me._actionRemove = undefined;
    me._remove = function (target) {
        var rows = [];
        if (me.grid) {
            // if has _delCB column, then getChecked
            if ($.grep(me.grid.datagrid('options').columns, function (idx, row) { return row.field == '_delCB'; }).length == 1) {
                rows = me.grid.datagrid('getChecked');
            }
            if (rows.length == 0) {
                row = me.grid.datagrid("getSelected");
                if (row)
                    rows.push(row);
            }
            if (!rows || rows.length == 0) return com.message("error", me.resx.__noneSelection)
            /* 
            if (me.keyField.split('&').length > 1) {
            var para = "";
            $.each(me.keyField.split('&'), function (idx, val) {
            para += val + "=" + row[val] + "&";
            });
            para = para.substr(0, para.length - 1);
            url = "{0}?{1}".format(me.urls.remove, para);
    
            } else {
            url = me.urls.remove + row[me.keyField];
            }
            */
        }
        var deleted = { deleted: rows };
        com.formatPostData(deleted);
        var postData = { master: deleted };

        var thisData = target ? $(target).data('data') : me.__tools["remove"];
        if ((typeof me._beforeRemove === 'function' && !me._beforeRemove(me, toolData)))
            return false;


        var obj = { context: me, toolData: thisData, url: thisData.Url, postData: postData };
        if ((typeof me._actionRemove === 'function' && !me._actionRemove(obj)))
            return false;
        com.showComfirm("删除确认", "是否删除选中的记录?", function (b) {
            if (b) {
                com.ajax({
                    type: "POST",
                    url: obj.url,
                    data: ko.toJSON(obj.postData),
                    success: function (resp) {
                        if (typeof resp === 'string' && Utils.isJson(resp)) {
                            resp = JSON.parse(resp);
                        }

                        if (resp === 1 || resp === true || resp.Status === true) {
                            com.message("success","删除成功");
                            me._query();

                        } else {
                            com.message("error", "删除失败," + resp);

                        }
                    }
                });
            }
        });

        if (typeof me._afterRemove == 'function')
            me._afterRemove(me);
    };

    me._beforeAdd = undefined;
    me._afterAdd = undefined;
    me._actionAdd = undefined;
    me._add = function (target) {
        var toolData = target ? $(target).data("data") : me.__tools["add"];
        if ((typeof me._beforeAdd === 'function' && !me._beforeAdd(me, toolData)))
            return false;

        //me.redirect(me.resx.addTitle, me.urls.add);
        var title = me.resx['__add'] + ' ' + me.resx[__pageSetting.title] || __pageSetting.title || data.Code;
        var title = '新增' + ' ' + __pageSetting.title;

        var obj = { context: me, toolData: toolData, url: toolData.Url, title: title };

        if ((typeof me._actionAdd === 'function' && !me._actionAdd(obj)))
            return false;
        console.log(obj.url);
        //me.showWin(obj.title, obj.url, null, null, toolData.win_type);
        me._editWin._open(obj.title, obj.url, null, null, toolData.WinType);

        if (typeof me._afterAdd == 'function')
            me._afterAdd(me);
        //com.openTab(me.resx.addTitle, me.urls.add);
    };

    me._beforeDetail = undefined;
    me._actionDetail = undefined;
    me._afterDetail = undefined;
    me._detail = function (target) {
        var thisData = target ? $(target).data("data") : me.__tools["detail"];
        if ((typeof me._beforeDetail === 'function' && !me._beforeDetail(me, toolData)))
            return false;

        var url = '';
        var row = me.grid.datagrid("getSelected");
        if (!row) return com.message("error", me.resx.noneSelection);
        if (me.keyField.split(',').length > 1) {
            var para = "";
            $.each(me.keyField.split(','), function (idx, val) {
                para += val + "=" + row[val] + "&";
            });
            para = para.substr(0, para.length - 1);
            //com.openTab(me.resx.editTitle, "{0}?{1}".format(me.urls.edit, para));
            url = "{0}?{1}".format(thisData.Url, para);

        } else {
            //com.openTab(me.resx.editTitle, me.urls.edit + row[me.keyField]);
            url = thisData.Url + row[me.keyField];
        }

        var title = me.resx['__detail'] + ' ' + me.resx[__pageSetting.title] || __pageSetting.title || data.Code;

        var obj = { context: me, toolData: thisData, row: row, title: title, url: url };
        if ((typeof me._actionDetail === 'function' && !me._actionDetail(obj)))
            return false;

        //me.showWin(obj.title, obj.url);
        me._editWin._open(obj.title, obj.url);

        if (typeof me._afterDetail == 'function')
            me._afterDetail(me);
    };

    me._beforeApprove = undefined;
    me._afterApprove = undefined;
    me._actionApprove = undefined;
    me._approve = function (target) {
        var toolData = target ? $(target).data("data") : me.__tools["approve"];
        if ((typeof me._beforeApprove === 'function' && !me._beforeApprove(me, toolData)))
            return false;

        var selRow = me.grid.datagrid('getSelected');


        var url = toolData.Url + (selRow ? selRow[me.keyField] : '');
        var canContinue = selRow;
        var obj = { context: me, toolData: toolData, url: url, row: selRow, canContinue: canContinue };

        if ((typeof me._actionApprove === 'function' && !me._actionApprove(obj)))
            return false;

        if (obj.canContinue) {
            com.ajax({
                type: 'GET',
                url: obj.url,
                success: function (resp) {
                    if (typeof resp === 'string' && Utils.isJson(resp)) {
                        resp = JSON.parse(resp);
                    }

                    if (resp === 1 || resp === true || resp.status === true) {
                        if (typeof me._afterApprove == 'function')
                            me._afterApprove(me);

                        me._query();
                        com.message("success", me.resx.__approveSuccess);
                    } else {
                        com.message("failed", me.resx.__approveFailed + " " + resp);
                    }
                }
            });

        }

    };

    me._beforeDisapprove = undefined;
    me._afterDisapprove = undefined;
    me._actionDisapprove = undefined;
    me._disapprove = function (target) {
        var toolData = target ? $(target).data("data") : me.__tools["approve"];
        if ((typeof me._beforeDisapprove === 'function' && !me._beforeDisapprove(me, toolData)))
            return false;

        var selRow = me.grid.datagrid('getSelected');


        var url = toolData.Url + (selRow ? selRow[me.keyField] : '');
        var canContinue = selRow;
        var obj = { context: me, toolData: toolData, url: url, row: selRow, canContinue: canContinue };

        if ((typeof me._actionDisapprove === 'function' && !me._actionDisapprove(obj)))
            return false;

        if (obj.canContinue) {
            com.ajax({
                type: 'GET',
                url: obj.url,
                success: function (resp) {
                    if (typeof resp === 'string' && Utils.isJson(resp)) {
                        resp = JSON.parse(resp);
                    }

                    if (resp === 1 || resp === true || resp.status === true) {
                        if (typeof me._afterDisapprove == 'function')
                            me._afterDisapprove(me);

                        me._query();
                        com.message("success", me.resx.__disapproveSuccess);
                    } else {
                        com.message("failed", me.resx.__disapproveFailed + " " + resp);
                    }
                }
            });

        }

    };

    me._beforeReject = undefined;
    me._afterReject = undefined;
    me._actionReject = undefined;
    me._reject = function (target) {
        var toolData = target ? $(target).data("data") : me.__tools["reject"];
        if ((typeof me._beforeReject === 'function' && !me._beforeReject(me, toolData)))
            return false;

        var selRow = me.grid.datagrid('getSelected');

        var url = toolData.Url + selRow[me.keyField];
        var obj = { context: me, toolData: toolData, url: url, row: selRow };

        if ((typeof me._actionReject === 'function' && !me._actionReject(obj)))
            return false;

        if (obj.row) {
            com.ajax({
                type: 'GET',
                url: obj.url,
                success: function (resp) {
                    if (typeof resp === 'string' && Utils.isJson(resp)) {
                        resp = JSON.parse(resp);
                    }

                    if (resp === 1 || resp === true || resp.status === true) {
                        if (typeof me._afterApprove == 'function')
                            me._afterApprove(me);
                        me._query();
                        com.message("success", me.resx.__rejectSuccess);
                    } else {
                        com.message("failed", me.resx.__rejectFailed + " " + resp);
                    }
                }
            });
        }
    };



    me._beforeSave = function () { return true; };
    me._actionSave = undefined;
    me._afterSave = undefined;
    me._save = function (target, callback, hiddenMsg) {
        var postData = {};
        if (me.grid._editGrid) {
            if (!me.grid._editGrid.validate()) {
                me.message(me.resx.__input_required_field);
                return false;
            }

            if (typeof (me._beforeSave) == 'function' && !me._beforeSave(target)) return false;

            var postData = me.grid._editGrid.getPureChanges();
            com.formatPostData(postData);
            postData = { master: postData };
        }

        var toolData = target ? $(target).data("data") : me.__tools["save"];
        var url = toolData ? toolData.Url : '';

        var post = { context: me, toolData: toolData, postData: postData, url: url };
        if (typeof (me._actionSave) == 'function' && !me._actionSave(post)) {
            return false;
        }


        var postDataLen = 0;
        for (var key in post.postData) {
            for (var pKey in post.postData[key]) {
                if (Object.prototype.toString.call(post.postData[key][pKey]) == '[object Array]')
                    postDataLen = post.postData[key][pKey].length + postDataLen;
            }

        }
        if (!postDataLen) {
            com.message('warn', me.resx.INFO_NOT_CHANGED);
            return false;
        }

        me._post(post, function (success, resp) {
            if (success) {
                if (!hiddenMsg) {
                    var msg_code = post.msg_success || '__saveSuccess';
                    com.message("success", me.resx[msg_code]);
                }
                if (parent && parent._refresh) {
                    parent._refresh();
                }
            } else {
                if (!hiddenMsg) {
                    //if (typeof resp === 'string' && Utils.isJson(resp)) {
                    //    resp = JSON.parse(resp);
                    //    var msg = resp.msg_code != undefined ? me.resx[resp.msg_code] : "";
                    //    var right = resp.right_msg != undefined ? resp.right_msg : "";
                    //    var left = resp.left_msg != undefined ? resp.left_msg : "";
                    //    com.message("failed", left + msg + right);
                    //} else
                    if (typeof resp === 'object') {
                        var msg = resp.msg_code != undefined ? me.resx[resp.msg_code] : "";
                        var right = resp.right_msg != undefined ? resp.right_msg : "";
                        var left = resp.left_msg != undefined ? resp.left_msg : "";
                        com.message("failed", left + msg + ", " + right);

                    } else {
                        var msg_code = post.msg_failed || '__saveFailed';
                        com.message("failed", me.resx[msg_code] + " " + resp);
                    }
                }
            }
            if (callback)
            { callback(success, resp); }

            if (me._afterSave) {
                if (me._afterSave(success, resp)) {
                }
            } else if (success) {
            }
        });

    };

    me._post = function (post, callback) {
        $(document.body).mask('wait ...');
        com.ajax({
            type: "POST",
            url: post.url,
            data: ko.toJSON(post.postData),
            success: function (resp) {
                if (typeof resp === 'string' && Utils.isJson(resp)) {
                    resp = JSON.parse(resp);
                }

                if (resp === 1 || resp === true || resp.status === true) {
                    if (callback) {
                        callback(true, resp);
                    }
                    //me.httpMethod = "PUT";
                } else {
                    if (callback) {
                        callback(false, resp);
                    }
                }
                $(document.body).unmask(50);
            }
        });
    };
    //#endregion


    //region lzh add
    me.restForm = ko.mapping.fromJS(data.form || data.defaultData || data.otherData);
    me._restForm = function () {
        ko.mapping.fromJS(me.restForm, me.form);
    };
    //#endregion



    me._checkGridEnableFilter = function () {
        if (me.grid.datagrid) {
            me.grid.checkEnableFilter();
        } else {
            setTimeout(me._checkGridEnableFilter, 200);
        }
    };

    (function () {
        $(function () {
            //$('#gridLayout').uc_layout('panel', 'center').panel('setTitle', me.resx[__pageSetting.title]);
            //  $("<span class='dh-title'>" + me.resx[__pageSetting.title] + "</span>").prependTo($('#toolbar'));
            var search = $('<div class="header-search" style="float:right"><input style="float:right;color: blue !important; font-weight: bolder !important;" type="text" class="easyui-uc_searchbox" data-options="prompt:resx.__search" searcher="_searchAll" id="__btnSearch" /></div>').appendTo($("#toolbar"));
            $(search).find('input').uc_searchbox();

            me._checkGridEnableFilter();

        });
    })();

};var com = com || {};
com.viewModel = com.viewModel || {};

com.viewModel.edit = function (data) {
    com.viewModel.common.apply(this, arguments);
    if (Object.prototype.toString.call(data) === '[object Arguments]')
        data = data[0];
    var me = this;
    me.statusArr = ['prepared', 'submitted', 'endorsed', 'approved'];

    //me.httpMethod = data.form ? "PUT" : "POST";
    //me.isEditing = me.httpMethod == "PUT";
    me.isEditing = data.form ? true : false;
    me.isEditing = data.isEditing == null ? me.isEditing : data.isEditing;


    //#region tools

    me._beforeSave = function () { return true; };
    me._actionSave = undefined;
    me._afterSave = undefined;
    me._save = function (target, callback, hiddenMsg, menuPoint) {
        if (!$(".dh-form").form("validate")) {
            //me.message('warn', me.resx.__input_required_field);
            me.message('warn', "有不合法的输入，请检查！");
            return false;
        }
        if (typeof (me._beforeSave) == 'function' && !me._beforeSave(target)) return;
        var postData = ko.toJS(me.form);
        delete postData.__ko_mapping__;
        if (me.isEditing) {
            postData = { master: { updated: [{ data: postData }] } };
        } else {
            postData = { master: { inserted: [{ data: postData }] } };
        }

        menuPoint = menuPoint || 'save';

        var toolData = target ? $(target).data("data") : me.__tools[menuPoint];
        var url = toolData ? toolData.Url : '';
        console.log(toolData);

        var post = { context: me, toolData: toolData, postData: postData, url: url };
        if (typeof (me._actionSave) == 'function' && !me._actionSave(post)) {
            return false;
        }

        var postDataLen = 0;
        for (var key in post.postData) {
            for (var pKey in post.postData[key]) {
                if (Object.prototype.toString.call(post.postData[key][pKey]) == '[object Array]')
                    postDataLen = post.postData[key][pKey].length + postDataLen;
            }

        }
        if (!postDataLen) {
            com.message('warn', resx.INFO_NOT_CHANGED);
            return false;
        }
        console.log(post);

        me._post(post, function (success, resp) {
            if (success) {
                if (!hiddenMsg) {
                    com.message("success", "保存成功!");
                }
                if (parent && parent._refresh) {
                    parent._refresh();
                }
            } else {
                if (!hiddenMsg) {
                    if (typeof resp === 'object') {
                        var msg = resp.Msg != undefined ? resx[resp.Msg] : resp.Msg;
                        var right = resp.right_msg != undefined ? resp.right_msg : "";
                        var left = resp.left_msg != undefined ? resp.left_msg : "";
                        com.message("failed", left + msg + ", " + right);

                    } else {
                        var Msg = post.msg_failed || '保存失败';
                        com.message("failed", me.resx[Msg] + " " + resp);
                    }
                }
            }
            if (callback) callback(success, resp);

            if (me._afterSave) {
                if (me._afterSave(success, resp)) {
                    me._close();
                }
            } else if (success) {
                me._close();
            }
        });

    };


    me._newVersion = function (target) {
        if (me._beforeNewVersion && !me._beforeNewVersion(target)) {
            return false;
        }
        me._save(target, function (success, resp) {
            if (success) {
                com.message("success", me.resx.__saveSuccess);;
            } else {
                com.handleResp(resp);
            }
            if (me._afterNewVersion && !me._afterNewVersion(success, resp)) {
                return false;
            }
        }, false, 'newVersion');
    }

    me._beforeSubmit = function (target) {
        return true;
    };
    me._actionSubmit = undefined;
    me._afterSubmit = undefined;
    me._successSubmit = function () {
        ko.mapping.fromJS({ status: 'submitted' }, me.form);
        me.loadTools([], true);
        //me._initStatus();
    };
    me._submit = function (target, onlySubmit, hideMsg) {
        if (typeof (me._beforeSubmit) == "function" && !me._beforeSubmit(target)) return;
        var submit = function () {
            var toolData = target ? $(target).data("data") : me.__tools["submit"];

            var url = '';
            if (me.keyField.split(',').length > 1) {
                url = toolData.Url + "?";
                var keys = me.keyField.split(',');
                for (var i = 0; i < keys.length; ++i) {
                    // no,version is the first two specify parameter for approve api
                    if (i == 0 && form[keys[i]] != undefined)
                        //url += keys[i] + "=" + form[keys[i]].apply();
                        url += "no=" + form[keys[i]].apply();
                    else if (i == 1 && form[keys[i]] != undefined)
                        //url += "&" + keys[i] + "=" + form[keys[i]].apply();
                        url += "&version=" + form[keys[i]].apply();
                    else if (form[keys[i]] != undefined)
                        url += "&" + keys[i] + "=" + form[keys[i]].apply();
                }
            } else {
                if (form[me.keyField] != undefined)
                    url = toolData.Url + form[me.keyField].apply();
                else
                    url = toolData.Url;
            }


            var post = { toolData: toolData, url: url, postData: {} };
            if (typeof (me._actionSubmit) == "function" && !me._actionSubmit(post)) return false;
            com.ajax({
                type: post.type || 'GET',
                url: post.url,
                data: (post.type == 'POST' ? ko.toJSON(post.postData) : undefined),
                success: function (resp) {
                    if (typeof resp === 'string' && Utils.isJson(resp)) {
                        resp = JSON.parse(resp);
                    }
                    var success = false;
                    if (resp === 1 || resp === true || resp.status === true) {
                        success = true;
                        if (!hideMsg)
                            com.message("success", "保存成功!");
                        //com.message("success", me.resx.__submitSuccess);
                        if (parent && parent._refresh) {
                            parent._refresh();
                        }
                        if (me._successSubmit) me._successSubmit();

                    } else {
                        com.handleResp(resp, '保存失败!');
                        //com.handleResp(resp, '__submitFailed');
                        //com.message("failed", me.resx.__submitFailed + " " + re);
                    }

                    if (me._afterSubmit) {
                        if (me._afterSubmit(success, resp)) {
                            me._close();
                        }
                    } else if (success) {
                        me._close();
                    }
                }
            });
        };
        if (onlySubmit) {
            submit();
        } else {
            // 先保存到 submit
            var pointCode = me.__tools['save'] ? 'save' : 'newVersion';
            me._save(null, function (success, resp) {
                if (success) {
                    submit();
                } else {
                    com.handleResp(resp);
                }
            }, true, pointCode);
        }
    };


    me._beforeApprove = function (target) {
        return true;
    };
    me._actionApprove = undefined;
    me._afterApprove = undefined;
    me._successApprove = function () {
        me.loadTools([], true);
    };
    me._approve = function (target) {
        if (me._beforeApprove && !me._beforeApprove(target)) {
            return false;
        }

        me.form.task_approval_value('2');
        me.form.task_is_completed(1);
        var master = ko.mapping.toJS(me.form);
        delete master.__ko_mapping__;
        var postData = { master: { updated: [{ data: master }] } };
        if (me._actionApprove && !me._actionApprove({ target: target, postData: postData })) {
            return false;
        }

        me._actionSave = function (post) {
            post.postData = postData;
            return true;
        };
        me._save(target, function (success, resp) {
            if (success) {
                com.message("success", me.resx.__approveSuccess);;
                if (success) me._successApprove();
            } else {
                com.handleResp(resp);
            }
        }, true, 'approve');
    }
    //me._approve = function (target, saveFirst) {
    //    var toolData = target ? $(target).data("data") : me.__tools["approve"];
    //    if (typeof (me._beforeApprove) == "function" && !me._beforeApprove(target)) return;
    //    var approve = function () {
    //        var url = '';
    //        if (me.keyField.split(',').length > 1) {
    //            url = toolData.Url + "?";
    //            var keys = me.keyField.split(',');
    //            for (var i = 0; i < keys.length; ++i) {
    //                // no,version is the first two specify parameter for approve api
    //                if (i == 0)
    //                    //url += keys[i] + "=" + form[keys[i]].apply();
    //                    url += "no=" + form[keys[i]].apply();
    //                else if (i == 1)
    //                    //url += "&" + keys[i] + "=" + form[keys[i]].apply();
    //                    url += "&version=" + form[keys[i]].apply();
    //                else
    //                    url += "&" + keys[i] + "=" + form[keys[i]].apply();
    //            }
    //        } else {
    //            url = toolData.Url + form[me.keyField].apply();
    //        }


    //        var post = { toolData: toolData, url: url, postData: {} };
    //        if (typeof (me._actionApprove) == "function" && !me._actionApprove(post)) return false;

    //        com.ajax({
    //            //type: 'GET',
    //            type: post.type || 'POST',
    //            url: post.url,
    //            data: ko.toJSON(post.postData),
    //            success: function (resp) {
    //                if (typeof resp === 'string' && Utils.isJson(resp)) {
    //                    resp = JSON.parse(resp);
    //                }
    //                var success = false;
    //                if (resp === 1 || resp === true || resp.status === true) {
    //                    success = true;
    //                    if (me._successApprove) me._successApprove();
    //                    com.message("success", me.resx.__approveSuccess);
    //                    if (parent && parent._refresh) {
    //                        parent._refresh();
    //                    }
    //                } else {
    //                    com.handleResp(resp, '__approveFailed');
    //                    //com.message("failed", me.resx.__approveFailed + " " + resp);
    //                }
    //                if (me._afterApprove) {
    //                    if (me._afterApprove(success, resp)) {
    //                        me._close();
    //                    }
    //                } else if (success) {
    //                    me._close();
    //                }
    //            }
    //        });
    //    }
    //    if (!saveFirst) {
    //        approve();
    //    } else {
    //        me._save(null, function (success, resp) {
    //            if (success) {
    //                approve();
    //            } else {
    //                com.handleResp(resp);
    //            }
    //        }, true);
    //    }
    //};

    me._beforeReject = function (target) {
        return true;
    };
    me._actionReject = undefined;
    me._afterReject = undefined;
    me._successReject = function () {
        me.loadTools([], true);
    };
    me._reject = function (target) {
        if (me._beforeReject && !me._beforeReject(target)) {
            return false;
        }

        me.form.task_approval_value('3');
        me.form.task_is_completed(1);
        var master = ko.mapping.toJS(me.form);
        delete master.__ko_mapping__;
        var postData = { master: { updated: [{ data: master }] } };
        if (me._actionReject && !me._actionReject({ target: target, postData: postData })) {
            return false;
        }

        me._actionSave = function (post) {
            post.postData = postData;
            return true;
        };

        me._save(target, function (success, resp) {
            if (success) {
                com.message("success", me.resx.__rejectSuccess)
                if (success)
                    me._successReject();
            } else {
                com.handleResp(resp);
            }
        }, true, 'reject')
    }
    //me._reject = function (target, saveFirst) {
    //    var toolData = target ? $(target).data("data") : me.__tools["reject"];
    //    if (typeof (me._beforeReject) == "function" && !me._beforeReject(target)) return;

    //    var reject = function () {
    //        var url = '';
    //        if (me.keyField.split(',').length > 1) {
    //            url = toolData.Url + "?";
    //            var keys = me.keyField.split(',');
    //            for (var i = 0; i < keys.length; ++i) {
    //                // no,version is the first two specify parameter for approve api
    //                if (i == 0)
    //                    //url += keys[i] + "=" + form[keys[i]].apply();
    //                    url += "no=" + form[keys[i]].apply();
    //                else if (i == 1)
    //                    //url += "&" + keys[i] + "=" + form[keys[i]].apply();
    //                    url += "&version=" + form[keys[i]].apply();
    //                else
    //                    url += "&" + keys[i] + "=" + form[keys[i]].apply();
    //            }
    //        } else {
    //            url = toolData.Url + form[me.keyField].apply();
    //        }

    //        var post = { toolData: toolData, url: url, postData: {} };
    //        if (typeof (me._actionReject) == "function" && !me._actionReject(post)) return false;

    //        com.ajax({
    //            //type: 'GET',
    //            type: post.type || 'GET',
    //            url: post.url,
    //            data: ko.toJSON(post.postData),
    //            success: function (resp) {
    //                if (typeof resp === 'string' && Utils.isJson(resp)) {
    //                    resp = JSON.parse(resp);
    //                }
    //                var success = false;
    //                if (resp === 1 || resp === true || resp.status === true) {
    //                    success = true;
    //                    if (me._successReject) me._successReject();
    //                    com.message("success", me.resx.__rejectSuccess);
    //                    if (parent && parent._refresh) {
    //                        parent._refresh();
    //                    }
    //                } else {
    //                    com.handleResp(resp, '__approveFailed');
    //                    //com.message("failed", me.resx.__rejectFailed + " " + resp);
    //                }
    //                if (me._afterReject) {
    //                    if (me._afterApprove(success, resp)) {
    //                        me._close();
    //                    }
    //                } else if (success) {
    //                    me._close();
    //                }
    //            }
    //        });
    //    };
    //    if (!saveFirst) {
    //        reject();
    //    } else {
    //        me._save(null, function (success, resp) {
    //            if (success) {
    //                reject();
    //            } else {
    //                com.handleResp(resp);
    //            }
    //        }, true);
    //    }

    //};


    me._beforeComplete = function (target) {
        return true;
    };

    me._actionComplete = undefined;
    me._afterComplete = undefined;
    me._successComplete = function () {
        me.loadTools([], true);
    };
    me._complete = function (target, saveFirst) {
        var toolData = target ? $(target).data("data") : me.__tools["complete"];
        if (typeof (me._beforeComplete) == "function" && !me._beforeComplete(target)) return;
        var complete = function () {
            var url = '';
            if (me.keyField.split(',').length > 1) {
                url = toolData.Url + "?";
                var keys = me.keyField.split(',');
                for (var i = 0; i < keys.length; ++i) {
                    // no,version is the first two specify parameter for complete api
                    if (i == 0)
                        //url += keys[i] + "=" + form[keys[i]].apply();
                        url += "no=" + form[keys[i]].apply();
                    else if (i == 1)
                        //url += "&" + keys[i] + "=" + form[keys[i]].apply();
                        url += "&version=" + form[keys[i]].apply();
                    else
                        url += "&" + keys[i] + "=" + form[keys[i]].apply();
                }
            } else {
                url = toolData.Url + form[me.keyField].apply();
            }


            var post = { toolData: toolData, url: url, postData: {} };
            if (typeof (me._actionComplete) == "function" && !me._actionComplete(post)) return false;

            com.ajax({
                //type: 'GET',
                type: post.type || 'POST',
                url: post.url,
                data: ko.toJSON(post.postData),
                success: function (resp) {
                    if (typeof resp === 'string' && Utils.isJson(resp)) {
                        resp = JSON.parse(resp);
                    }
                    var success = false;
                    if (resp === 1 || resp === true || resp.status === true) {
                        success = true;
                        if (me._successComplete) me._successComplete();
                        com.message("success", me.resx.INFO_OPERATION_SUCCESSFUL);
                        if (parent && parent._refresh) {
                            parent._refresh();
                        }
                    } else {
                        com.handleResp(resp, 'INFO_OPERATION_FAIELED');
                        //com.message("failed", me.resx.__completeFailed + " " + resp);
                    }
                    if (me._afterComplete) {
                        if (me._afterComplete(success, resp)) {
                            me._close();
                        }
                    } else if (success) {
                        me._close();
                    }
                }
            });
        }
        if (!saveFirst) {
            complete();
        } else {
            me._save(null, function (success, resp) {
                if (success) {
                    complete();
                } else {
                    com.handleResp(resp);
                }
            }, true);
        }
    };

    me._post = function (post, callback) {
        $(document.body).mask('wait ...');
        com.ajax({
            type: "POST",
            url: post.url,
            data: ko.toJSON(post.postData),
            success: function (resp) {
                if (typeof resp === 'string' && Utils.isJson(resp)) {
                    resp = JSON.parse(resp);
                }

                if (resp === 1 || resp === true || resp.Status === true) {
                    if (resp.Data && !post.doNotUpdateForm) {
                        if (post.updateForm)
                            ko.mapping.fromJS(resp.Data, post.updateForm);
                        else
                            ko.mapping.fromJS(resp.Data, me.form);
                    }
                    me.isEditing = true;
                    if (callback) {
                        callback(true, resp);
                    }
                    //me.httpMethod = "PUT";
                } else {
                    if (callback) {
                        callback(false, resp);
                    }
                }
                $(document.body).unmask(50);
            }
        });
    };

    me._beforeRemove = undefined;
    me._afterRemove = undefined;
    me._actionRemove = undefined;
    me._remove = function (target) {
        var row = ko.mapping.toJS(me.form);
        var postData = { master: { deleted: [{ data: row }] } };

        var thisData = target ? $(target).data('data') : me.__tools["remove"];
        if ((typeof me._beforeRemove === 'function' && !me._beforeRemove(me, toolData)))
            return false;


        var obj = { context: me, toolData: thisData, url: thisData.url, postData: postData };
        if ((typeof me._actionRemove === 'function' && !me._actionRemove(obj)))
            return false;

        com.showComfirm("confirm", me.resx.__removeComfirm, function (b) {
            if (b) {
                com.ajax({
                    type: "POST",
                    url: obj.url,
                    data: ko.toJSON(obj.postData),
                    success: function (resp) {
                        if (typeof resp === 'string' && Utils.isJson(resp)) {
                            resp = JSON.parse(resp);
                        }

                        if (resp === 1 || resp === true || resp.status === true) {
                            com.message("success", me.resx.__removeSuccess);
                        } else {
                            com.message("error", me.resx.__removeFailed + " " + resp);

                        }

                        if (typeof me._afterRemove == 'function')
                            me._afterRemove(me);
                    }
                });
            }
        });

    };


    me.showWin = function (title, url, iwidth, iheight, winType) {
        /*if (winType != 'popUp') {
            // lgr 2015-04-20 rental 的编辑界面直接在新界面中打开
            window.open(url);
            return;
        }
        */
        //TODO:用于替换Test,替换按钮，弹出窗体
        //url = url.replace("/test", "");
        console.log(url);
        if (url.startsWith('/')) {
            url = com.preUrl + url;
        }

        var win = $('#__win');
        var width, height;
        $('#ifr').hide();
        $('#ifr').attr('src', '');

        //为了防止用户看到 iframe 显示的前个页面内容，用 settimeout 延迟弹出层；
        setTimeout(function () {
            $('#ifr').show();

            if (iwidth || iheight) {
                height = iheight || $(document.body).height() - 40;
                width = iwidth || $(document.body).width() - 40;
                //width = width > 1000 ? 1000 : width;
                //height = height > 600 ? 600 : height;
                if (!iheight && __pageSetting && __pageSetting.modalHeight) {
                    height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                }
                if (!iwidth && __pageSetting.modalWidth) {
                    width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                } else {
                    width = width > 1000 ? 1000 : width;
                }

                $('#ifr').attr('src', url);
                win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');

            }
            else if (!__pageSetting || (!__pageSetting.modalHeight && !__pageSetting.modalWidth)) {
                $('#ifr').attr('src', url);
                win.window('maximize').window('setTitle', title).window('open').window('center');
            } else {
                height = $(document.body).height() - 40;
                width = $(document.body).width() - 40;
                //width = width > 1000 ? 1000 : width;
                //height = height > 600 ? 600 : height;
                var isMax = true;;
                if (__pageSetting && __pageSetting.modalHeight) {
                    if (__pageSetting.modalHeight < height - 100) {
                        isMax = false;
                    }

                    height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                }
                if (__pageSetting.modalWidth) {
                    if (__pageSetting.modalWidth < width) {
                        isMax = false;
                    }
                    width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                } else {
                    width = width > 1000 ? 1000 : width;
                }
                $('#ifr').attr('src', url);
                if (isMax) {
                    // win.window('maximize').window('setTitle', title).window('open').window('center');
                    win.window('maximize').window('setTitle', title).window('open');
                } else {
                    //win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                    win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                    if (win.window('options').top > 100) {
                        win.window('move', { top: 100 });
                    }
                }


            }
        }, 0)
        return;

    };
    me.closeWin = function () {
        var win = $('#__win');
        win.window('close');
    };


    me._editWin = {
        closed: true,
        modal: true,
        minimizable: false,
        _close: function () {
            me._editWin._close();
        },
        _open: function (title, url, iwidth, iheight, winType) {
            /*if (winType != 'popUp') {
                // lgr 2015-04-20 rental 的编辑界面直接在新界面中打开
                window.open(url);
                return;
            }
            */
            //TODO:用于替换Test,替换按钮，弹出窗体
            //url = url.replace("/test", "");
    
            var width, height;
            $('#ifr').hide();
            $('#ifr').attr('src', '');
            var win = me._editWin._$elem();
            //为了防止用户看到 iframe 显示的前个页面内容，用 settimeout 延迟弹出层；
            setTimeout(function () {
                $('#ifr').show();

                if (iwidth || iheight) {
                    height = iheight || $(document.body).height() - 40;
                    width = iwidth || $(document.body).width() - 40;
                    //width = width > 1000 ? 1000 : width;
                    //height = height > 600 ? 600 : height;
                    if (!iheight && __pageSetting && __pageSetting.modalHeight) {
                        height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                    }
                    if (!iwidth && __pageSetting.modalWidth) {
                        width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                    } else {
                        width = width > 1000 ? 1000 : width;
                    }

                    $('#ifr').attr('src', url);
                    me._editWin.win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');

                }
                else if (!__pageSetting || (!__pageSetting.modalHeight && !__pageSetting.modalWidth)) {
                    $('#ifr').attr('src', url);
                    win.window('maximize').window('setTitle', title).window('open').window('center');
                } else {
                    height = $(document.body).height() - 40;
                    width = $(document.body).width() - 40;
                    //width = width > 1000 ? 1000 : width;
                    //height = height > 600 ? 600 : height;
                    var isMax = true;;
                    if (__pageSetting && __pageSetting.modalHeight) {
                        if (__pageSetting.modalHeight < height - 100) {
                            isMax = false;
                        }

                        height = __pageSetting.modalHeight > height ? height : __pageSetting.modalHeight;
                    }
                    if (__pageSetting.modalWidth) {
                        if (__pageSetting.modalWidth < width) {
                            isMax = false;
                        }
                        width = __pageSetting.modalWidth > width ? width : __pageSetting.modalWidth;
                    } else {
                        width = width > 1000 ? 1000 : width;
                    }
                    $('#ifr').attr('src', url);
                    if (isMax) {
                        // win.window('maximize').window('setTitle', title).window('open').window('center');
                        win.window('maximize').window('setTitle', title).window('open');
                    } else {
                        //win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                        win.window('resize', { height: height, width: width }).window('setTitle', title).window('open').window('center');
                        if (win.window('options').top > 100) {
                            win.window('move', { top: 100 });
                        }
                    }


                }
            }, 0)
            return;
        }
    };


    me._close = function () {
        if (parent.closeWin) {
            parent.closeWin();
        } else {
            com.close();
        }
    };

    me._add = function () {
        parent._add();
    }

    //#endregion tools

    me._initStatus = function () {
        /*var status = me.form['status']();
        if (me.statusArr.indexOf(status) > -1) {
        me.unableForm();
        switch (status) {
        case 'submitted':
        case 'prepared':
        me.loadTools(['save', 'submit'], false);
        break;
        case 'approved':
        me.loadTools(['save', 'submit', 'approve', 'reject'], false);
        break;
        default: break;
        }
        }*/
        if (me.form["status"]) {
            if (me.form["status"] && me.form["status"]() == "1") {
                me.loadTools(['save', 'submit', 'complete_procurement', 'newVersion'], false);
            } else if (me.form["status"]() == "2" || me.form["status"]() == "5" || me.form["status"]() == "6" || me.form["status"]() == "3") {
                if (me.form['status']() == '2' || me.form['status']() == '6')
                    me.loadTools(['save', 'submit', 'approve', 'reject', 'newVersion'], false);
                else if (me.form['status']() == '3')
                    me.loadTools(['save', 'submit', 'approve', 'reject', 'comment', 'complete_procurement'], false);
                else
                    me.loadTools(['save', 'submit', 'approve', 'reject', 'complete_procurement', 'newVersion'], false);

            } else {
                me.loadTools(['complete_procurement', 'newVersion'], false);
            }
        } else {
            me.loadTools(['complete_procurement', 'newVersion'], false);
        }
        /*
        if (me.form['approval_stage']) {
            var stage = me.form['approval_stage']();
            if (stage == -1) {
                // 已经审核结束
                me.loadTools(['save', 'submit', 'approve', 'reject'], false);
            } else if (stage > 0) {
                // 正在审核中
                me.loadTools(['save', 'submit'], false);
            } else {
                me.loadTools();
            }
        }*/

        /*
        //simple approval that approval status column attach in the same table with data would use this
        if (me.form['status']) {
            var status = me.form['status']();
            if (status == 1) {
                // 已经审核结束
                me.loadTools(['save', 'submit', 'approve', 'reject'], false);
            } else {
                me.loadTools();
            }
        }*/
    };
    me._isApproval = ko.computed({
        read: function () {
            if (me.viewType == 'approval') {
                return true;
            } else {
                return false;
            }
        },
        owner: me
    });

    if (me._isApproval) {
        me.formApproval = {
            remark: ko.observable()
        };

        me.winComment = {
            title: resx.comment,
            width: 350,
            height: 220,
            buttons: [
                {
                    text: resx.__ok,
                    iconCls: 'icon-ok',
                    handler: function () {
                        me.winComment._ok();
                    }
                },
                {
                    text: resx.__close,
                    iconCls: 'icon-close',
                    handler: function () {
                        me.winComment._close();
                    }
                }
            ],
            _ok: function () {
                me.form.task_remark(me.formApproval.remark());
                me.winComment._close();
            }
        }

        me._comment = function () {
            me.winComment._open();
        }
    }

    $(function () {
        me._initStatus();
        //setTimeout(function () {
        //    $('.dh-form input:visible:not(:disabled):first').focus()
        //    var validateBoxs = $('.easyui-uc_validatebox');
        //    if (validateBoxs) {
        //        $.each(validateBoxs, function (idx, elem) {
        //            $(elem).validatebox('isValid');
        //        });
        //    }
        //}, 500);

    });
};$(function () {

    if ($("#mainHeader")[0]) {
        $('#mainContainer').height($('body').height() - $("#mainHeader")[0].scrollHeight);
    }
    $(".easyui-uc_layout").uc_layout('resize');
    //    $("#__content").layout('expand', 'center');
    $(window).resize(function () {

        if ($("#mainHeader")[0]) {
            $('#mainContainer').height($('body').height() - $("#mainHeader")[0].scrollHeight);
        }
        $(".easyui-uc_layout").uc_layout('resize');
    });

    window.showMsg = function (icon, msg) {
        com.showInPageTop(icon, msg);
    }

    // 头部工具栏
    var headerToolTimeout = undefined;
    $('.header-tool>div').hover(
        function () {
            clearTimeout(headerToolTimeout);
            $(this).parent().find('.header-tool-content').removeClass('onHover');
            $(this).find('.header-tool-content').addClass('onHover');
        },
        function () {
            var me = this;
            headerToolTimeout = setTimeout(function () {
                $(me).find('.header-tool-content').removeClass('onHover');
            }, 300);
        }
    );

    ///**
    //* backToTop1
    //*/
    //var div = $('div.panel-body:first');
    //if (div[0].scrollHeight > div.height()) {
    //    $("#backToTop1").show(200, function () {
    //        $("#backToTop1").css({
    //            top: div.height() - div.height() / 2
    //        });
    //    });
    //}
    //$(div).scroll(function () {               //滚动时触发
    //    var top = div.scrollTop(),       //获取滚动条到顶部的垂直高度
    //        height = div.height();         //获得可视浏览器的高度
    //    if (top > 100) {
    //        $("#backToTop1").show(200, function () {
    //            $("#backToTop1").css({
    //                top: height - div.height() / 2
    //            });
    //        });
    //    }
    //});
    ///*点击回到顶部*/
    //$('#backToTop-up').click(function () {
    //    div.animate({
    //        scrollTop: 0
    //    }, 500);
    //    /*
    //    $('html, body').animate({
    //    scrollTop: 0
    //    }, 0);

    //    */
    //});
    ///*点击到底部*/
    //$('#backToTop-down').click(function () {
    //    var height = div.height() > div[0].scrollHeight ? div.height() : div[0].scrollHeight;
    //    div.animate({
    //        scrollTop: height
    //    }, 500);
    //    /* $('html, body').animate({
    //    scrollTop: $(document).height()
    //    }, 500);
    //    */
    //});
});

//<![CDATA[
__resizeLayout = function () {
    setTimeout(function () {
        var h = $("#toolbar").parent().height() - $('#toolbar').outerHeight() - $('#searchbar').outerHeight();

        $("#__content").height(h);
        //$("#__searchbar").panel('resize', { height: $("#__searchbar .dh-form").height() + 40 });
        //$("#datagrid").layout('resize', { height: h });
        $("div.easyui-uc_layout").layout('resize', {});

        $("table[data-bind]").datagrid("resize");
    }, 200);
};
$(window).resize(function () {
    __resizeLayout();
});
$(function () {
    $.parser.onComplete = function () {
        __resizeLayout();
    }
    if (window.onPageInit) {
        window.onPageInit();
    }
})
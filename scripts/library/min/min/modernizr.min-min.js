window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&g[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function c(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+E.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+x.join(r+" ")+r).split(" "),s(i,t,n))}var u,l,f,p="2.8.3",d={},m=!0,y=t.documentElement,h="modernizr",v=t.createElement(h),g=v.style,b=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),w="Webkit Moz O ms",E=w.split(" "),x=w.toLowerCase().split(" "),j={svg:"http://www.w3.org/2000/svg"},C={},S=[],T=S.slice,z=function(e,n,r,o){var i,a,s,c,u=t.createElement("div"),l=t.body,f=l||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=o?o[r]:h+(r+1),u.appendChild(s);return i=["&#173;",'<style id="s',h,'">',e,"</style>"].join(""),u.id=h,(l?u:f).innerHTML+=i,f.appendChild(u),l||(f.style.background="",f.style.overflow="hidden",c=y.style.overflow,y.style.overflow="hidden",y.appendChild(f)),a=n(u,e),l?u.parentNode.removeChild(u):(f.parentNode.removeChild(f),y.style.overflow=c),!!a},N=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),P={}.hasOwnProperty;f=o(P,"undefined")||o(P.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return P.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=T.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(T.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(T.call(arguments)))};return r}),C.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:z(["@media (",b.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},C.textshadow=function(){return""===t.createElement("div").style.textShadow},C.cssanimations=function(){return c("animationName")},C.csstransforms=function(){return!!c("transform")},C.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in y.style&&z("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},C.csstransitions=function(){return c("transition")},C.fontface=function(){var e;return z('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},C.svg=function(){return!!t.createElementNS&&!!t.createElementNS(j.svg,"svg").createSVGRect};for(var A in C)f(C,A)&&(l=A.toLowerCase(),d[l]=C[A](),S.push((d[l]?"":"no-")+l));return d.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(y.className+=" "+(t?"":"no-")+e),d[e]=t}return d},r(""),v=u=null,d._version=p,d._prefixes=b,d._domPrefixes=x,d._cssomPrefixes=E,d.hasEvent=N,d.testProp=function(e){return a([e])},d.testAllProps=c,d.testStyles=z,d.prefixed=function(e,t,n){return t?c(e,t,n):c(e,"pfx")},y.className=y.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+S.join(" "):""),d}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==h.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=v.shift();g=1,e?e.t?m(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):g=0}function c(e,n,r,o,i,c,u){function l(t){if(!d&&a(f.readyState)&&(b.r=d=1,!g&&s(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&m(function(){E.removeChild(f)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var u=u||p.errorTimeout,f=t.createElement(e),d=0,h=0,b={t:r,s:n,e:i,a:c,x:u};1===T[n]&&(h=1,T[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){l.call(this,h)},v.splice(o,0,b),"img"!=e&&(h||2===T[n]?(E.insertBefore(f,w?null:y),m(l,u)):T[n].push(f))}function u(e,t,n,r,i){return g=0,t=t||"j",o(e)?c("c"==t?j:x,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&s()),this}function l(){var e=p;return e.loader={load:u,i:0},e}var f,p,d=t.documentElement,m=e.setTimeout,y=t.getElementsByTagName("script")[0],h={}.toString,v=[],g=0,b="MozAppearance"in d.style,w=b&&!!t.createRange().compareNode,E=w?d:y.parentNode,d=e.opera&&"[object Opera]"==h.call(e.opera),d=!!t.attachEvent&&!d,x=b?"object":d?"script":"img",j=d?"script":x,C=Array.isArray||function(e){return"[object Array]"==h.call(e)},S=[],T={},z={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,r,e=e.split("!"),o=S.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=z[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=S[n](i);return i}function a(e,o,i,a,s){var c=t(e),u=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,o,i,a,s):(T[c.url]?c.noexec=!0:T[c.url]=1,i.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(o)||r(u))&&i.load(function(){l(),o&&o(c.origUrl,s,a),u&&u(c.origUrl,s,a),T[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}),a(e,f,t,0,u);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(r(f)?f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}:f[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(p[c])),a(e[c],f,t,c,u))}else!n&&d()}var s,c,u=!!e.test,l=e.load||e.both,f=e.callback||i,p=f,d=e.complete||i;n(u?e.yep:e.nope,!!l),l&&n(l)}var c,u,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(C(e))for(c=0;c<e.length;c++)u=e[c],o(u)?a(u,0,f,0):C(u)?p(u):Object(u)===u&&s(u,f);else Object(e)===e&&s(e,f)},p.addPrefix=function(e,t){z[e]=t},p.addFilter=function(e){S.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,o,c,u){var l,f,d=t.createElement("script"),o=o||p.errorTimeout;d.src=e;for(f in r)d.setAttribute(f,r[f]);n=u?s:n||i,d.onreadystatechange=d.onload=function(){!l&&a(d.readyState)&&(l=1,n(),d.onload=d.onreadystatechange=null)},m(function(){l||(l=1,n(1))},o),c?d.onload():y.parentNode.insertBefore(d,y)},e.yepnope.injectCss=function(e,n,r,o,a,c){var u,o=t.createElement("link"),n=c?s:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(u in r)o.setAttribute(u,r[u]);a||(y.parentNode.insertBefore(o,y),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addValueTest=function(e,t){var n=(e+t).replace(/-/g,"");Modernizr.addTest(n,function(){var n=document.createElement("link"),r=document.getElementsByTagName("HEAD")[0],o=[],i=e.replace(/(^|-)([a-z])/g,function(e,t,n){return n.toUpperCase()});o[e]=e,o["Webkit"+i]="-webkit-"+e,o["Moz"+i]="-moz-"+e,o["ms"+i]="-ms-"+e,r.insertBefore(n,null);for(var a in o)void 0!==n.style[a]&&(n.style[a]=t);window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"==t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this});var s=window.getComputedStyle(n,null),c=s.getPropertyValue("-webkit-"+e)||s.getPropertyValue("-moz-"+e)||s.getPropertyValue("-ms-"+e)||s.getPropertyValue(e);return c!==t?(n.parentNode.removeChild(n),!1):(n.parentNode.removeChild(n),!0)})},Modernizr.addValueTest("transform-style","preserve-3d");
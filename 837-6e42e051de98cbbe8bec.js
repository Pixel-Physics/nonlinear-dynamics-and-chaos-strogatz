(self.webpackChunkbook_nonlinear_dynamics_and_chaos=self.webpackChunkbook_nonlinear_dynamics_and_chaos||[]).push([[837],{2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var u,c,s,l;if(Array.isArray(t)){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((u=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(e&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!i(t[s[c]],a[s[c]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=t(s.map((function(t){return t.props}))),f.canUseDOM?e(c):n&&(c=n(c))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},9483:function(t,e,n){var r=n(7854),o=n(4411),i=n(6330),a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a constructor")}},1530:function(t,e,n){"use strict";var r=n(8710).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},648:function(t,e,n){var r=n(7854),o=n(1694),i=n(614),a=n(4326),u=n(5112)("toStringTag"),c=r.Object,s="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=c(t),u))?n:s?a(e):"Object"==(r=a(e))&&i(e.callee)?"Arguments":r}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:function(t,e,n){"use strict";var r=n(3383).IteratorPrototype,o=n(30),i=n(9114),a=n(8003),u=n(7497),c=function(){return this};t.exports=function(t,e,n,s){var l=e+" Iterator";return t.prototype=o(r,{next:i(+!s,n)}),a(t,l,!1,!0),u[l]=c,t}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4411:function(t,e,n){var r=n(1702),o=n(7293),i=n(614),a=n(648),u=n(5005),c=n(2788),s=function(){},l=[],f=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,d=r(p.exec),h=!p.exec(s),v=function(t){if(!i(t))return!1;try{return f(s,l,t),!0}catch(e){return!1}},y=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return h||!!d(p,c(t))}catch(e){return!0}};y.sham=!0,t.exports=!f||o((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?y:v},7850:function(t,e,n){var r=n(111),o=n(4326),i=n(5112)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},3383:function(t,e,n){"use strict";var r,o,i,a=n(7293),u=n(614),c=n(30),s=n(9518),l=n(1320),f=n(5112),p=n(1913),d=f("iterator"),h=!1;[].keys&&("next"in(i=[].keys())?(o=s(s(i)))!==Object.prototype&&(r=o):h=!0),null==r||a((function(){var t={};return r[d].call(t)!==t}))?r={}:p&&(r=c(r)),u(r[d])||l(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:h}},7497:function(t){t.exports={}},8523:function(t,e,n){"use strict";var r=n(9662),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},30:function(t,e,n){var r,o=n(9670),i=n(6048),a=n(748),u=n(3501),c=n(490),s=n(317),l=n(6200),f=l("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"</"+"script>"},h=function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){try{r=new ActiveXObject("htmlfile")}catch(o){}var t,e;v="undefined"!=typeof document?document.domain&&r?h(r):((e=s("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F):h(r);for(var n=a.length;n--;)delete v.prototype[a[n]];return v()};u[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[f]=t):n=v(),void 0===e?n:i.f(n,e)}},6048:function(t,e,n){var r=n(9781),o=n(3353),i=n(3070),a=n(9670),u=n(5656),c=n(1956);e.f=r&&!o?Object.defineProperties:function(t,e){a(t);for(var n,r=u(e),o=c(e),s=o.length,l=0;s>l;)i.f(t,n=o[l++],r[n]);return t}},9518:function(t,e,n){var r=n(7854),o=n(2597),i=n(614),a=n(7908),u=n(6200),c=n(8544),s=u("IE_PROTO"),l=r.Object,f=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=a(t);if(o(e,s))return e[s];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof l?f:null}},1956:function(t,e,n){var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},2492:function(t,e,n){var r=n(7854);t.exports=r.Promise},9478:function(t,e,n){var r=n(9670),o=n(111),i=n(8523);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},7651:function(t,e,n){var r=n(7854),o=n(6916),i=n(9670),a=n(614),u=n(4326),c=n(2261),s=r.TypeError;t.exports=function(t,e){var n=t.exec;if(a(n)){var r=o(n,t,e);return null!==r&&i(r),r}if("RegExp"===u(t))return o(c,t,e);throw s("RegExp#exec called on incompatible receiver")}},2261:function(t,e,n){"use strict";var r,o,i=n(6916),a=n(1702),u=n(1340),c=n(7066),s=n(2999),l=n(2309),f=n(30),p=n(9909).get,d=n(9441),h=n(7168),v=l("native-string-replace",String.prototype.replace),y=RegExp.prototype.exec,b=y,g=a("".charAt),m=a("".indexOf),T=a("".replace),w=a("".slice),x=(o=/b*/g,i(y,r=/a/,"a"),i(y,o,"a"),0!==r.lastIndex||0!==o.lastIndex),O=s.BROKEN_CARET,A=void 0!==/()??/.exec("")[1];(x||A||O||d||h)&&(b=function(t){var e,n,r,o,a,s,l,d=this,h=p(d),E=u(t),S=h.raw;if(S)return S.lastIndex=d.lastIndex,e=i(b,S,E),d.lastIndex=S.lastIndex,e;var C=h.groups,I=O&&d.sticky,P=i(c,d),k=d.source,j=0,R=E;if(I&&(P=T(P,"y",""),-1===m(P,"g")&&(P+="g"),R=w(E,d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==g(E,d.lastIndex-1))&&(k="(?: "+k+")",R=" "+R,j++),n=new RegExp("^(?:"+k+")",P)),A&&(n=new RegExp("^"+k+"$(?!\\s)",P)),x&&(r=d.lastIndex),o=i(y,I?n:d,R),I?o?(o.input=w(o.input,j),o[0]=w(o[0],j),o.index=d.lastIndex,d.lastIndex+=o[0].length):d.lastIndex=0:x&&o&&(d.lastIndex=d.global?o.index+o[0].length:r),A&&o&&o.length>1&&i(v,o[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o&&C)for(o.groups=s=f(null),a=0;a<C.length;a++)s[(l=C[a])[0]]=o[l[1]];return o}),t.exports=b},7066:function(t,e,n){"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},4706:function(t,e,n){var r=n(6916),o=n(2597),i=n(7976),a=n(7066),u=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in u||o(t,"flags")||!i(u,t)?e:r(a,t)}},2999:function(t,e,n){var r=n(7293),o=n(7854).RegExp,i=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=i||r((function(){return!o("a","y").sticky})),u=i||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:u,MISSED_STICKY:a,UNSUPPORTED_Y:i}},9441:function(t,e,n){var r=n(7293),o=n(7854).RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:function(t,e,n){var r=n(7293),o=n(7854).RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},8003:function(t,e,n){var r=n(3070).f,o=n(2597),i=n(5112)("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!o(t,i)&&r(t,i,{configurable:!0,value:e})}},6707:function(t,e,n){var r=n(9670),o=n(9483),i=n(5112)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[i])?e:o(n)}},8710:function(t,e,n){var r=n(1702),o=n(9303),i=n(1340),a=n(4488),u=r("".charAt),c=r("".charCodeAt),s=r("".slice),l=function(t){return function(e,n){var r,l,f=i(a(e)),p=o(n),d=f.length;return p<0||p>=d?t?"":void 0:(r=c(f,p))<55296||r>56319||p+1===d||(l=c(f,p+1))<56320||l>57343?t?u(f,p):r:t?s(f,p,p+2):l-56320+(r-55296<<10)+65536}};t.exports={codeAt:l(!1),charAt:l(!0)}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var r=n(7854),o=n(648),i=r.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},5438:function(t,e,n){var r=n(2109),o=Math.hypot,i=Math.abs,a=Math.sqrt;r({target:"Math",stat:!0,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(t,e){for(var n,r,o=0,u=0,c=arguments.length,s=0;u<c;)s<(n=i(arguments[u++]))?(o=o*(r=s/n)*r+1,s=n):o+=n>0?(r=n/s)*r:n;return s===1/0?1/0:s*a(o)}})},7727:function(t,e,n){"use strict";var r=n(2109),o=n(1913),i=n(2492),a=n(7293),u=n(5005),c=n(614),s=n(6707),l=n(9478),f=n(1320),p=i&&i.prototype;if(r({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){p.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=s(this,u("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!o&&c(i)){var d=u("Promise").prototype.finally;p.finally!==d&&f(p,"finally",d,{unsafe:!0})}},6373:function(t,e,n){"use strict";var r=n(2109),o=n(7854),i=n(6916),a=n(1702),u=n(4994),c=n(4488),s=n(7466),l=n(1340),f=n(9670),p=n(4326),d=n(7850),h=n(4706),v=n(8173),y=n(1320),b=n(7293),g=n(5112),m=n(6707),T=n(1530),w=n(7651),x=n(9909),O=n(1913),A=g("matchAll"),E="RegExp String",S="RegExp String Iterator",C=x.set,I=x.getterFor(S),P=RegExp.prototype,k=o.TypeError,j=a("".indexOf),R=a("".matchAll),L=!!R&&!b((function(){R("a",/./)})),_=u((function(t,e,n,r){C(this,{type:S,regexp:t,string:e,global:n,unicode:r,done:!1})}),E,(function(){var t=I(this);if(t.done)return{value:void 0,done:!0};var e=t.regexp,n=t.string,r=w(e,n);return null===r?{value:void 0,done:t.done=!0}:t.global?(""===l(r[0])&&(e.lastIndex=T(n,s(e.lastIndex),t.unicode)),{value:r,done:!1}):(t.done=!0,{value:r,done:!1})})),M=function(t){var e,n,r,o=f(this),i=l(t),a=m(o,RegExp),u=l(h(o));return e=new a(a===RegExp?o.source:o,u),n=!!~j(u,"g"),r=!!~j(u,"u"),e.lastIndex=s(o.lastIndex),new _(e,i,n,r)};r({target:"String",proto:!0,forced:L},{matchAll:function(t){var e,n,r,o,a=c(this);if(null!=t){if(d(t)&&(e=l(c(h(t))),!~j(e,"g")))throw k("`.matchAll` does not allow non-global regexes");if(L)return R(a,t);if(void 0===(r=v(t,A))&&O&&"RegExp"==p(t)&&(r=M),r)return i(r,t,a)}else if(L)return R(a,t);return n=l(a),o=new RegExp(t,"g"),O?i(M,o,n):o[A](n)}}),O||A in P||y(P,A,M)},3728:function(t,e,n){n(6373)},4791:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Ft}});var r,o,i,a,u=n(5697),c=n.n(u),s=n(4839),l=n.n(s),f=n(2993),p=n.n(f),d=n(7294),h=n(6494),v=n.n(h),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",m={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(m).map((function(t){return m[t]})),"charset"),w="cssText",x="href",O="http-equiv",A="innerHTML",E="itemprop",S="name",C="property",I="rel",P="src",k="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",L="defer",_="encodeSpecialCharacters",M="onChangeClientState",N="titleTemplate",Y=Object.keys(j).reduce((function(t,e){return t[j[e]]=e,t}),{}),Z=[m.NOSCRIPT,m.SCRIPT,m.STYLE],F="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},z=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},q=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},U=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},K=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(t){var e=J(t,m.TITLE),n=J(t,N);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=J(t,R);return e||r||void 0},W=function(t){return J(t,M)||function(){}},$=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return D({},t,e)}),{})},G=function(t,e){return e.filter((function(t){return void 0!==t[m.BASE]})).map((function(t){return t[m.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},V=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+H(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===e.indexOf(c)||n===I&&"canonical"===t[n].toLowerCase()||c===I&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(u)||u!==A&&u!==w&&u!==E||(n=u)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=v()({},r[u],o[u]);r[u]=c}return t}),[]).reverse()},J=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Q=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){Q(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ct(m.BODY,r),ct(m.HTML,o),ut(f,p);var d={baseTag:st(m.BASE,n),linkTags:st(m.LINK,i),metaTags:st(m.META,a),noscriptTags:st(m.NOSCRIPT,u),scriptTags:st(m.SCRIPT,s),styleTags:st(m.STYLE,l)},h={},v={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(v[t]=d[t].oldTags)})),e&&e(),c(t,h,v)},at=function(t){return Array.isArray(t)?t.join(""):t},ut=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ct(m.TITLE,e)},ct=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(F),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],s=e[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(F):n.getAttribute(F)!==a.join(",")&&n.setAttribute(F,a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(m.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===A)n.innerHTML=e.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(F,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[j[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case m.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[F]=!0,o=ft(n,r),[d.createElement(m.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=lt(n),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+K(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case y:case b:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[F]=!0,r);return Object.keys(e).forEach((function(t){var n=j[t]||t;if(n===A||n===w){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),d.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===A||t===w)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+K(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===Z.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(m.BASE,e,r),bodyAttributes:pt(y,n,r),htmlAttributes:pt(b,o,r),link:pt(m.LINK,i,r),meta:pt(m.META,a,r),noscript:pt(m.NOSCRIPT,u,r),script:pt(m.SCRIPT,c,r),style:pt(m.STYLE,s,r),title:pt(m.TITLE,{title:f,titleAttributes:p},r)}},ht=l()((function(t){return{baseTag:G([x,k],t),bodyAttributes:$(y,t),defer:J(t,L),encode:J(t,_),htmlAttributes:$(b,t),linkTags:V(m.LINK,[I,x],t),metaTags:V(m.META,[S,T,O,C,E],t),noscriptTags:V(m.NOSCRIPT,[A],t),onChangeClientState:W(t),scriptTags:V(m.SCRIPT,[P,A],t),styleTags:V(m.STYLE,[w],t),title:X(t),titleAttributes:$(g,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),dt)((function(){return null})),vt=(o=ht,a=i=function(t){function e(){return B(this,e),U(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case m.SCRIPT:case m.NOSCRIPT:return{innerHTML:e};case m.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return D({},r,((e={})[n.type]=[].concat(r[n.type]||[],[D({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case m.TITLE:return D({},o,((e={})[r.type]=a,e.titleAttributes=D({},i),e));case m.BODY:return D({},o,{bodyAttributes:D({},i)});case m.HTML:return D({},o,{htmlAttributes:D({},i)})}return D({},o,((n={})[r.type]=D({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=D({},e);return Object.keys(t).forEach((function(e){var r;n=D({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return d.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[Y[n]||n]=t[n],e}),e)}(q(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case m.LINK:case m.META:case m.NOSCRIPT:case m.SCRIPT:case m.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=q(t,["children"]),r=D({},n);return e&&(r=this.mapChildrenToProps(e,r)),d.createElement(o,r)},z(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(d.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);vt.renderStatic=vt.rewind;var yt=n(3629);function bt(){return(bt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var gt=(0,d.memo)((function(t){var e=t.children,n=t.math,r=t.block,o=t.errorColor,i=t.renderError,a=t.settings,u=t.as,c=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e.indexOf(n=i[r])>=0||(o[n]=t[n]);return o}(t,["children","math","block","errorColor","renderError","settings","as"]),s=u||(r?"div":"span"),l=null!=e?e:n,f=(0,d.useState)({innerHtml:""}),p=f[0],h=f[1];return(0,d.useEffect)((function(){try{var t=yt.Z.renderToString(l,bt({displayMode:!!r,errorColor:o,throwOnError:!!i},a));h({innerHtml:t})}catch(t){if(!(t instanceof yt.Z.ParseError||t instanceof TypeError))throw t;h(i?{errorElement:i(t)}:{innerHtml:t.message})}}),[r,l,o,i,a]),"errorElement"in p?p.errorElement:d.createElement(s,Object.assign({},c,{dangerouslySetInnerHTML:{__html:p.innerHtml}}))})),mt=n(7946),Tt=function(t){var e=t.children;return(0,mt.tZ)("div",null,"* Wrapped in Layout",(0,mt.tZ)("div",null,e))},wt=n(8378),xt=n.n(wt),Ot=2,At=.1,Et=10,St=0,Ct=150,It=0,Pt=.1,kt=30,jt=function(t){var e=t.m,n=void 0===e?Ot:e,r=t.b,o=void 0===r?At:r,i=t.k,a=void 0===i?Et:i,u=t.x,c=void 0===u?St:u,s=t.v,l=void 0===s?Ct:s,f=t.t,p=void 0===f?It:f,d=t.dt,h=void 0===d?Pt:d,v=t.tMax,y=void 0===v?kt:v;function b(t,e,n){for(var r=1;r<5;r+=1){var o=8*r;t.ellipse(e,n,4+o,4+o)}}return(0,mt.tZ)(xt(),{setup:function(t,e){t.createCanvas(400,400).parent(e),t.background(0),function(t){t.stroke(255),t.strokeWeight(.25),function(t,e){void 0===e&&(e=10);for(var n=0;n<t.width;n+=e)t.line(n,0,n,t.height),t.line(t.width,n,0,n)}(t),t.strokeWeight(1)}(t),t.stroke(0),t.translate(t.width/2,t.height/2),t.noFill(),t.stroke(255),b(t,c,l),t.stroke(0)},draw:function(t){t.translate(t.width/2,t.height/2),t.fill(200+50*t.cos(2*t.PI*p/y),200+50*t.sin(2*t.PI*p/y),200),t.ellipse(c,l,4,4),l+=-o/n*l-a/n*(c+=l*h)*h,(p+=h)>y&&(t.noLoop(),t.noFill(),t.stroke(200+50*t.cos(2*t.PI*p/y),200+50*t.sin(2*t.PI*p/y),200),b(t,c,l))}})},Rt=n(3144),Lt=function(){function t(t){this.end=0,this.start=0,this.size=t,this.buffer=Array(t).fill(null)}var e=t.prototype;return e.put=function(t){this.buffer[this.end++]=t,this.end%=this.size},e.get=function(){return this.buffer[this.start++]},t}();function _t(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return Mt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mt(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Mt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Nt,Yt=function(){function t(t){var e=t.baseX,n=void 0===e?0:e,r=t.baseY,o=void 0===r?0:r,i=t.x0,a=void 0===i?50:i,u=t.x,c=void 0===u?0:u,s=t.width,l=void 0===s?10:s,f=t.coils,p=void 0===f?10:f,d=t.massSize,h=void 0===d?20:d,v=t.traceLength,y=void 0===v?500:v;this.points=[],this.baseX=n,this.baseY=o,this.x0=a,this._x=c,this.width=l,this.coils=p,this.massSize=h,this.tracePoints=new Lt(y),this.computePoints()}var e=t.prototype;return e.computePoints=function(){var t=this.length/this.coils/2,e=0;for(this.points=[],this.points.push([this.baseX,this.baseY+e++*t]),this.points.push([this.baseX,this.baseY+e++*t]);e<this.coils+2;e++){var n=this.width/2*(e%2?1:-1);this.points.push([this.baseX+n,this.baseY+e*t])}this.points.push([this.baseX,this.baseY+e++*t]),this.points.push([this.baseX,this.baseY+e++*t])},e.draw=function(t){for(var e=1;e<this.points.length;e++){var n=this.points[e-1],r=this.points[e];t.line(n[0],n[1],r[0],r[1])}t.rectMode(t.CENTER),t.rect(this.lastPoint[0],this.lastPoint[1]+this.massSize/2,this.massSize,this.massSize)},e.trace=function(t){var e=[this.lastPoint[0],this.lastPoint[1]+this.massSize/2];this.tracePoints.put(e),t.push(),t.fill(0);for(var n,r=_t(this.tracePoints.buffer);!(n=r()).done;){var o=n.value;if(!o)break;t.point(o[0]++,o[1])}t.pop()},(0,Rt.Z)(t,[{key:"x",get:function(){return this._x},set:function(t){this._x=t,this.computePoints()}},{key:"lastPoint",get:function(){return this.points[this.points.length-1]}},{key:"length",get:function(){return this.x0+this.x}}]),t}(),Zt=function(t){var e=t.m,n=void 0===e?Ot:e,r=t.b,o=void 0===r?At:r,i=t.k,a=void 0===i?Et:i,u=t.x,c=void 0===u?St:u,s=t.v,l=void 0===s?Ct:s,f=t.t,p=void 0===f?It:f,h=t.dt,v=void 0===h?Pt:h,y=t.tMax,b=void 0===y?kt:y,g=(0,d.useState)(new Yt({baseX:20,baseY:110,x0:90}))[0];return(0,mt.tZ)(xt(),{setup:function(t,e){t.createCanvas(400,400).parent(e)},draw:function(t){t.background(220),g.x=c,g.draw(t),g.trace(t),l+=-o/n*l-a/n*(c+=l*v)*v,(p+=v)>b&&t.noLoop()}})},Ft=function(){return(0,mt.tZ)(Tt,null,(0,mt.tZ)(vt,null,(0,mt.tZ)("title",null,"Test")),(0,mt.tZ)("h1",null,"Damped Harmonic Oscillator"),(0,mt.tZ)("p",null,"The equation for the damped harmonic oscillator."),(0,mt.tZ)(gt,{math:"m \\dfrac{d^2x}{dt^2} + b \\dfrac{dx}{dt} + kx = 0",block:!0}),(0,mt.tZ)(Zt,null),(0,mt.tZ)("p",null,"A phase space diagram for the damped harmonic oscillator"),(0,mt.tZ)(gt,{block:!0},String.raw(Nt||(t=["\n            \begin{cases}              dot{x} = v,\\\n              dot{v} = -dfrac{b}{m}v -dfrac{k}{m}x            end{cases}\n            "],(e=["\n            \\begin{cases}\\\n              \\dot{x} = v,\\\\\n              \\dot{v} = -\\dfrac{b}{m}v -\\dfrac{k}{m}x\\\n            \\end{cases}\n            "])||(e=t.slice(0)),t.raw=e,Nt=t))),(0,mt.tZ)(jt,null));var t,e}},5671:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},3144:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return o}})},885:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(181);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,e)||(0,r.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=837-6e42e051de98cbbe8bec.js.map
(self.webpackChunkbook_nonlinear_dynamics_and_chaos=self.webpackChunkbook_nonlinear_dynamics_and_chaos||[]).push([[742],{2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,u,c,l;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(u=s;0!=u--;)if(!i(t[u],a[u]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(u=s;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(c=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=s;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,c[u]))return!1;if(e&&t instanceof Element)return!1;for(u=s;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!t.$$typeof)&&!i(t[c[u]],a[c[u]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function l(){u=t(c.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,c=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){c.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=c.indexOf(this);c.splice(t,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",s),f}}},8382:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Rt}});var r,o,i,a,s=n(5697),u=n.n(s),c=n(4839),l=n.n(c),f=n(2993),p=n.n(f),d=n(7294),h=n(6494),y=n.n(h),m="bodyAttributes",b="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(t){return g[t]})),"charset"),w="cssText",A="href",C="http-equiv",O="innerHTML",S="itemprop",E="name",k="property",x="rel",P="src",j="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",_="encodeSpecialCharacters",Z="onChangeClientState",N="titleTemplate",R=Object.keys(I).reduce((function(t,e){return t[I[e]]=e,t}),{}),H=[g.NOSCRIPT,g.SCRIPT,g.STYLE],Y="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},q=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},F=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},U=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},X=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(t){var e=J(t,g.TITLE),n=J(t,N);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=J(t,L);return e||r||void 0},W=function(t){return J(t,Z)||function(){}},V=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return B({},t,e)}),{})},$=function(t,e){return e.filter((function(t){return void 0!==t[g.BASE]})).map((function(t){return t[g.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},G=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+D(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var s=i[a],u=s.toLowerCase();-1===e.indexOf(u)||n===x&&"canonical"===t[n].toLowerCase()||u===x&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(s)||s!==O&&s!==w&&s!==S||(n=s)}if(!n||!t[n])return!1;var c=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],u=y()({},r[s],o[s]);r[s]=u}return t}),[]).reverse()},J=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Q=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){Q(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,u=t.onChangeClientState,c=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ut(g.BODY,r),ut(g.HTML,o),st(f,p);var d={baseTag:ct(g.BASE,n),linkTags:ct(g.LINK,i),metaTags:ct(g.META,a),noscriptTags:ct(g.NOSCRIPT,s),scriptTags:ct(g.SCRIPT,c),styleTags:ct(g.STYLE,l)},h={},y={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(y[t]=d[t].oldTags)})),e&&e(),u(t,h,y)},at=function(t){return Array.isArray(t)?t.join(""):t},st=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ut(g.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(Y),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),s=0;s<a.length;s++){var u=a[s],c=e[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Y):n.getAttribute(Y)!==a.join(",")&&n.setAttribute(Y,a.join(","))}},ct=function(t,e){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===O)n.innerHTML=e.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[r]?"":e[r];n.setAttribute(r,s)}n.setAttribute(Y,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[I[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case g.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[Y]=!0,o=ft(n,r),[d.createElement(g.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=lt(n),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+X(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+X(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case m:case b:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[Y]=!0,r);return Object.keys(e).forEach((function(t){var n=I[t]||t;if(n===O||n===w){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),d.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===O||t===w)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+X(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===H.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,u=t.scriptTags,c=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(g.BASE,e,r),bodyAttributes:pt(m,n,r),htmlAttributes:pt(b,o,r),link:pt(g.LINK,i,r),meta:pt(g.META,a,r),noscript:pt(g.NOSCRIPT,s,r),script:pt(g.SCRIPT,u,r),style:pt(g.STYLE,c,r),title:pt(g.TITLE,{title:f,titleAttributes:p},r)}},ht=l()((function(t){return{baseTag:$([A,j],t),bodyAttributes:V(m,t),defer:J(t,M),encode:J(t,_),htmlAttributes:V(b,t),linkTags:G(g.LINK,[x,A],t),metaTags:G(g.META,[E,T,C,k,S],t),noscriptTags:G(g.NOSCRIPT,[O],t),onChangeClientState:W(t),scriptTags:G(g.SCRIPT,[P,O],t),styleTags:G(g.STYLE,[w],t),title:K(t),titleAttributes:V(v,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),dt)((function(){return null})),yt=(o=ht,a=i=function(t){function e(){return z(this,e),U(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:e};case g.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return B({},r,((e={})[n.type]=[].concat(r[n.type]||[],[B({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case g.TITLE:return B({},o,((e={})[r.type]=a,e.titleAttributes=B({},i),e));case g.BODY:return B({},o,{bodyAttributes:B({},i)});case g.HTML:return B({},o,{htmlAttributes:B({},i)})}return B({},o,((n={})[r.type]=B({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=B({},e);return Object.keys(t).forEach((function(e){var r;n=B({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return d.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[R[n]||n]=t[n],e}),e)}(F(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=F(t,["children"]),r=B({},n);return e&&(r=this.mapChildrenToProps(e,r)),d.createElement(o,r)},q(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(d.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);yt.renderStatic=yt.rewind;var mt=n(3629);function bt(){return(bt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var vt,gt=(0,d.memo)((function(t){var e=t.children,n=t.math,r=t.block,o=t.errorColor,i=t.renderError,a=t.settings,s=t.as,u=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e.indexOf(n=i[r])>=0||(o[n]=t[n]);return o}(t,["children","math","block","errorColor","renderError","settings","as"]),c=s||(r?"div":"span"),l=null!=e?e:n,f=(0,d.useState)({innerHtml:""}),p=f[0],h=f[1];return(0,d.useEffect)((function(){try{var t=mt.Z.renderToString(l,bt({displayMode:!!r,errorColor:o,throwOnError:!!i},a));h({innerHtml:t})}catch(t){if(!(t instanceof mt.Z.ParseError||t instanceof TypeError))throw t;h(i?{errorElement:i(t)}:{innerHtml:t.message})}}),[r,l,o,i,a]),"errorElement"in p?p.errorElement:d.createElement(c,Object.assign({},u,{dangerouslySetInnerHTML:{__html:p.innerHtml}}))})),Tt=n(6520),wt=n(8378),At=n.n(wt),Ct={m:2,b:.1,k:10,x:0,v:100,t:0,dt:.1,tMax:30},Ot=n(7946),St=function(t){var e=t.m,n=void 0===e?Ct.m:e,r=t.b,o=void 0===r?Ct.b:r,i=t.k,a=void 0===i?Ct.k:i,s=t.x,u=void 0===s?Ct.x:s,c=t.v,l=void 0===c?Ct.v:c,f=t.t,p=void 0===f?Ct.t:f,d=t.dt,h=void 0===d?Ct.dt:d,y=t.tMax,m=void 0===y?Ct.tMax:y;function b(t,e,n){for(var r=1;r<5;r+=1){var o=8*r;t.ellipse(e,n,4+o,4+o)}}return(0,Ot.tZ)(At(),{setup:function(t,e){t.createCanvas(400,400).parent(e),t.background(0),function(t){t.stroke(255),t.strokeWeight(.25),function(t,e){void 0===e&&(e=10);for(var n=0;n<t.width;n+=e)t.line(n,0,n,t.height),t.line(t.width,n,0,n)}(t),t.strokeWeight(1)}(t),t.stroke(0),t.translate(t.width/2,t.height/2),t.noFill(),t.stroke(255),b(t,u,l),t.stroke(0)},draw:function(t){t.translate(t.width/2,t.height/2),t.fill(200+50*t.cos(2*t.PI*p/m),200+50*t.sin(2*t.PI*p/m),200),t.ellipse(u,l,4,4),l+=(-o/n*l-a/n*(u+=l*h))*h,(p+=h)>m&&(t.noLoop(),t.noFill(),t.stroke(200+50*t.cos(2*t.PI*p/m),200+50*t.sin(2*t.PI*p/m),200),b(t,u,l))}})},Et=n(3144);vt=Symbol.iterator;var kt=function(){function t(t){this.end=0,this.start=0,this.size=t,this.buffer=Array(t).fill(null)}var e=t.prototype;return e.put=function(t){this.buffer[this.end++]=t,this.end%=this.size},e.get=function(){return this.buffer[this.start++]},e[vt]=function(){var t=this,e=0;return{next:function(){return{value:t.buffer[e++],done:!(e in t.buffer)}}}},t}();function xt(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return Pt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pt(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Pt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var jt=function(){function t(t){var e=t.baseX,n=void 0===e?0:e,r=t.baseY,o=void 0===r?0:r,i=t.x0,a=void 0===i?50:i,s=t.x,u=void 0===s?0:s,c=t.width,l=void 0===c?10:c,f=t.coils,p=void 0===f?10:f,d=t.massSize,h=void 0===d?20:d,y=t.traceLength,m=void 0===y?500:y;this.points=[],this.baseX=n,this.baseY=o,this.x0=a,this._x=u,this.width=l,this.coils=p,this.massSize=h,this.tracePoints=new kt(m),this.computePoints()}var e=t.prototype;return e.computePoints=function(){var t=this.length/this.coils/2,e=0;for(this.points=[],this.points.push([this.baseX,this.baseY+e++*t]),this.points.push([this.baseX,this.baseY+e++*t]);e<this.coils+2;e++){var n=this.width/2*(e%2?1:-1);this.points.push([this.baseX+n,this.baseY+e*t])}this.points.push([this.baseX,this.baseY+e++*t]),this.points.push([this.baseX,this.baseY+e++*t])},e.draw=function(t){for(var e=1;e<this.points.length;e++){var n=this.points[e-1],r=this.points[e];t.line(n[0],n[1],r[0],r[1])}t.rectMode(t.CENTER),t.rect(this.lastPoint[0],this.lastPoint[1]+this.massSize/2,this.massSize,this.massSize)},e.trace=function(t){var e=[this.lastPoint[0],this.lastPoint[1]+this.massSize/2];this.tracePoints.put(e),t.push(),t.fill(0);for(var n,r=xt(this.tracePoints);!(n=r()).done;){var o=n.value;if(!o)break;t.point(o[0]++,o[1])}t.pop()},(0,Et.Z)(t,[{key:"x",get:function(){return this._x},set:function(t){this._x=t,this.computePoints()}},{key:"lastPoint",get:function(){return this.points[this.points.length-1]}},{key:"length",get:function(){return this.x0+this.x}}]),t}(),It=function(t){var e=t.m,n=void 0===e?Ct.m:e,r=t.b,o=void 0===r?Ct.b:r,i=t.k,a=void 0===i?Ct.k:i,s=t.x,u=void 0===s?Ct.x:s,c=t.v,l=void 0===c?Ct.v:c,f=t.t,p=void 0===f?Ct.t:f,h=t.dt,y=void 0===h?Ct.dt:h,m=t.tMax,b=void 0===m?Ct.tMax:m,v=(0,d.useState)(new jt({baseX:20,baseY:110,x0:90}))[0];return(0,Ot.tZ)(At(),{setup:function(t,e){t.createCanvas(400,400).parent(e)},draw:function(t){t.background(220),v.x=u,v.trace(t),v.draw(t),l+=(-o/n*l-a/n*(u+=l*y))*y,(p+=y)>b&&t.noLoop()}})},Lt=n(7462);var Mt,_t={container:{name:"8xhv84",styles:"width:100%;display:flex"},label:{name:"1wbz4d4",styles:"min-width:5em"},slider:{name:"ic69gy",styles:"-webkit-appearance:none;appearance:none;width:100%;height:25px;background:#d3d3d3;outline:none;opacity:0.7;-webkit-transition:.2s;transition:opacity .2s;&:hover{opacity:1;}"}},Zt=function(t){var e=t.value,n=t.onChange,r=t.label;return(0,Ot.tZ)("div",{css:_t.container},(0,Ot.tZ)("div",{css:_t.label},r,":"),(0,Ot.tZ)("input",{type:"range",css:_t.slider,min:"1",max:"100",value:e,onChange:function(t){return n(Number.parseFloat(t.target.value))},id:"myRange"}))},Nt=function(t){var e=t.Component,n=t.componentProps,r=(0,d.useState)(n),o=r[0],i=r[1];console.log(o);for(var a=[],s=function(){var t=c[u],e=t[0],n=t[1];a.push((0,Ot.tZ)(Zt,{value:n,onChange:function(t){var n;console.log("key: "+e+", value: "+t),i(Object.assign({},o,((n={})[e]=t,n)))},label:e,key:"slider-"+e}))},u=0,c=Object.entries(o);u<c.length;u++)s();return(0,Ot.tZ)("div",null,a,(0,Ot.tZ)(e,(0,Lt.Z)({key:Date.now()},o)))},Rt=function(){return(0,Ot.tZ)(Tt.Z,null,(0,Ot.tZ)(yt,null,(0,Ot.tZ)("title",null,"Damped Harmonic Oscillator")),(0,Ot.tZ)("h1",null,"Damped Harmonic Oscillator"),(0,Ot.tZ)(Nt,{Component:It,componentProps:Ct}),(0,Ot.tZ)("p",null,"The equation for the damped harmonic oscillator."),(0,Ot.tZ)(gt,{math:"m \\dfrac{d^2x}{dt^2} + b \\dfrac{dx}{dt} + kx = 0",block:!0}),(0,Ot.tZ)("p",null,"A phase space diagram for the damped harmonic oscillator"),(0,Ot.tZ)(gt,{block:!0},String.raw(Mt||(t=["\n            \begin{cases}              dot{x} = v,\\\n              dot{v} = -dfrac{b}{m}v -dfrac{k}{m}x            end{cases}\n            "],(e=["\n            \\begin{cases}\\\n              \\dot{x} = v,\\\\\n              \\dot{v} = -\\dfrac{b}{m}v -\\dfrac{k}{m}x\\\n            \\end{cases}\n            "])||(e=t.slice(0)),t.raw=e,Mt=t))),(0,Ot.tZ)(Nt,{Component:St,componentProps:Ct}));var t,e}},5671:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},885:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(181);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){s=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,e)||(0,r.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=742-9a962fdb52ce0da6295a.js.map
"use strict";(self.webpackChunkbook_nonlinear_dynamics_and_chaos=self.webpackChunkbook_nonlinear_dynamics_and_chaos||[]).push([[840],{5515:function(t,e,n){n.d(e,{ZP:function(){return E}});var r=n(7294);function o(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}var a=n(7462);function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var s=n(1721),u=n(8812),c=n(5706),l=n.n(c);function h(t,e){if(!t){var n=new Error("loadable: "+e);throw n.framesToPop=1,n.name="Invariant Violation",n}}var d=r.createContext();var f={initialChunks:{}},p="PENDING",v="REJECTED";var y=function(t){return t};function m(t){var e=t.defaultResolveComponent,n=void 0===e?y:e,c=t.render,m=t.onLoad;function x(t,e){void 0===e&&(e={});var y=function(t){return"function"==typeof t?{requireAsync:t,resolve:function(){},chunkName:function(){}}:t}(t),x={};function _(t){return e.cacheKey?e.cacheKey(t):y.resolve?y.resolve(t):"static"}function w(t,r,o){var a=e.resolveComponent?e.resolveComponent(t,r):n(t);if(e.resolveComponent&&!(0,u.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return l()(o,a,{preload:!0}),a}var k,b,g=function(t){var e=_(t),n=x[e];return n&&n.status!==v||((n=y.requireAsync(t)).status=p,x[e]=n,n.then((function(){n.status="RESOLVED"}),(function(e){console.error("loadable-components: failed to asynchronously load component",{fileName:y.resolve(t),chunkName:y.chunkName(t),error:e?e.message:e}),n.status=v}))),n},C=function(t){function n(n){var r;return(r=t.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:_(n)},h(!n.__chunkExtractor||y.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===e.ssr||(y.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(y.chunkName(n))),i(r)):(!1!==e.ssr&&(y.isReady&&y.isReady(n)||y.chunkName&&f.initialChunks[y.chunkName(n)])&&r.loadSync(),r)}(0,s.Z)(n,t),n.getDerivedStateFromProps=function(t,e){var n=_(t);return(0,a.Z)({},e,{cacheKey:n,loading:e.loading||e.cacheKey!==n})};var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0;var t=this.getCache();t&&t.status===v&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(t,e){e.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(t,e){this.mounted&&this.setState(t,e)},r.getCacheKey=function(){return _(this.props)},r.getCache=function(){return x[this.getCacheKey()]},r.setCache=function(t){void 0===t&&(t=void 0),x[this.getCacheKey()]=t},r.triggerOnLoad=function(){var t=this;m&&setTimeout((function(){m(t.state.result,t.props)}))},r.loadSync=function(){if(this.state.loading)try{var t=w(y.requireSync(this.props),this.props,R);this.state.result=t,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:y.resolve(this.props),chunkName:y.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},r.loadAsync=function(){var t=this,e=this.resolveAsync();return e.then((function(e){var n=w(e,t.props,R);t.safeSetState({result:n,loading:!1},(function(){return t.triggerOnLoad()}))})).catch((function(e){return t.safeSetState({error:e,loading:!1})})),e},r.resolveAsync=function(){var t=this.props,e=(t.__chunkExtractor,t.forwardedRef,o(t,["__chunkExtractor","forwardedRef"]));return g(e)},r.render=function(){var t=this.props,n=t.forwardedRef,r=t.fallback,i=(t.__chunkExtractor,o(t,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,u=s.error,l=s.loading,h=s.result;if(e.suspense&&(this.getCache()||this.loadAsync()).status===p)throw this.loadAsync();if(u)throw u;var d=r||e.fallback||null;return l?d:c({fallback:d,result:h,options:e,props:(0,a.Z)({},i,{ref:n})})},n}(r.Component),E=(b=function(t){return r.createElement(d.Consumer,null,(function(e){return r.createElement(k,Object.assign({__chunkExtractor:e},t))}))},(k=C).displayName&&(b.displayName=k.displayName+"WithChunkExtractor"),b),R=r.forwardRef((function(t,e){return r.createElement(E,Object.assign({forwardedRef:e},t))}));return R.displayName="Loadable",R.preload=function(t){R.load(t)},R.load=function(t){return g(t)},R}return{loadable:x,lazy:function(t,e){return x(t,(0,a.Z)({},e,{suspense:!0}))}}}var x=m({defaultResolveComponent:function(t){return t.__esModule?t.default:t.default||t},render:function(t){var e=t.result,n=t.props;return r.createElement(e,n)}}),_=x.loadable,w=x.lazy,k=m({onLoad:function(t,e){t&&e.forwardedRef&&("function"==typeof e.forwardedRef?e.forwardedRef(t):e.forwardedRef.current=t)},render:function(t){var e=t.result,n=t.props;return n.children?n.children(e):null}}),b=k.loadable,g=k.lazy;var C=_;C.lib=b,w.lib=g;var E=C},1080:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(6520),o=n(5515),a=n(2698),i=n(4143),s=(0,o.ZP)((function(){return Promise.resolve().then(n.bind(n,2698))})),u=(0,o.ZP)((function(){return Promise.resolve().then(n.bind(n,4143))})),c=n(1966),l=n(7946),h=function(){return(0,l.tZ)(r.Z,null,(0,l.tZ)(c.v,{Component:s,componentProps:a.defaultArrowProps}),(0,l.tZ)(c.v,{Component:u,componentProps:i.defaultArrowPolarProps}))}},6043:function(t,e,n){n.d(e,{E:function(){return o}});var r=n(3144),o=function(){function t(t,e,n,r,o){void 0===o&&(o=10),this.x1=t,this.y1=e,this.x2=n,this.y2=r,this.headSize=o,this._r=Math.sqrt(Math.pow(this.x2-this.x1,2)+Math.pow(this.y2-this.y1,2)),this._theta=Math.atan((r-e)/(n-t))}t.Cartesian=function(e,n,r,o){return new t(e,n,r,o)},t.Polar=function(e,n,r,o){var a=e+r*Math.cos(o),i=n+r*Math.sin(o);return console.log(a,i),new t(e,n,a,i)};var e=t.prototype;return e.draw=function(t){t.line(this.x1,this.y1,this.x2,this.y2),this.drawHead(t)},e.drawHead=function(t){var e=this._theta,n=this.x1,r=this.x2,o=this.y2,a=this.headSize,i=a/2,s=(n<r?1:-1)*(Math.sqrt(3)/2)*a;t.push(),t.angleMode(t.RADIANS),t.translate(r,o),t.rotate(e),t.triangle(0,i,s,0,0,-i),t.pop()},(0,r.Z)(t,[{key:"r",get:function(){return this._r},set:function(t){this._r=t,this.x2=this.x1+t*Math.cos(this._theta),this.y2=this.y1+t*Math.sin(this._theta)}},{key:"theta",get:function(){return this._theta},set:function(t){this._theta=t,this.x2=this.x1+this._r*Math.cos(t),this.y2=this.x2+this._r*Math.sin(t)}}]),t}()},2698:function(t,e,n){n.r(e),n.d(e,{defaultArrowProps:function(){return s}});var r=n(8378),o=n.n(r),a=n(6043),i=n(7946),s={x1:0,y1:0,x2:100,y2:100};e.default=function(t){var e=t.x1,n=void 0===e?s.x1:e,r=t.y1,u=void 0===r?s.y1:r,c=t.x2,l=void 0===c?s.x2:c,h=t.y2,d=void 0===h?s.x2:h,f=a.E.Cartesian(n,u,l,d);return(0,i.tZ)(o(),{setup:function(t,e){t.createCanvas(400,400).parent(e).style("border","solid 2px black")},draw:function(t){t.fill(0),f.draw(t)}})}},4143:function(t,e,n){n.r(e),n.d(e,{defaultArrowPolarProps:function(){return s}});var r=n(8378),o=n.n(r),a=n(6043),i=n(7946),s={x1:0,y1:0,r:100,theta:0};e.default=function(t){var e=t.x1,n=void 0===e?s.x1:e,r=t.y1,u=void 0===r?s.y1:r,c=t.r,l=void 0===c?s.r:c,h=t.theta,d=void 0===h?s.theta:h,f=a.E.Polar(n,u,l,d);return(0,i.tZ)(o(),{setup:function(t,e){t.createCanvas(400,400).parent(e).style("border","solid 2px black")},draw:function(t){t.fill(0),f.draw(t)}})}}}]);
//# sourceMappingURL=component---src-pages-brainstorm-tsx-5a355b7b75ddb3a1e4dd.js.map
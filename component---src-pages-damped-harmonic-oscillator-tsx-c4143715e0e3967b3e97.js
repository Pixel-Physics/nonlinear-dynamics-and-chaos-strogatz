"use strict";(self.webpackChunkbook_nonlinear_dynamics_and_chaos=self.webpackChunkbook_nonlinear_dynamics_and_chaos||[]).push([[959],{3914:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r=t(7294);function o(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}var a=t(7462);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=t(1721),c=t(8812),u=t(5706),l=t.n(u);function f(e,n){if(!e){var t=new Error("loadable: "+n);throw t.framesToPop=1,t.name="Invariant Violation",t}}var d=r.createContext();var h={initialChunks:{}},p="PENDING",v="REJECTED";var m=function(e){return e};function y(e){var n=e.defaultResolveComponent,t=void 0===n?m:n,u=e.render,y=e.onLoad;function k(e,n){void 0===n&&(n={});var m=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),k={};function b(e){return n.cacheKey?n.cacheKey(e):m.resolve?m.resolve(e):"static"}function g(e,r,o){var a=n.resolveComponent?n.resolveComponent(e,r):t(e);if(n.resolveComponent&&!(0,c.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return l()(o,a,{preload:!0}),a}var _,C,E=function(e){var n=b(e),t=k[n];return t&&t.status!==v||((t=m.requireAsync(e)).status=p,k[n]=t,t.then((function(){t.status="RESOLVED"}),(function(n){console.error("loadable-components: failed to asynchronously load component",{fileName:m.resolve(e),chunkName:m.chunkName(e),error:n?n.message:n}),t.status=v}))),t},w=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={result:null,error:null,loading:!0,cacheKey:b(t)},f(!t.__chunkExtractor||m.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),t.__chunkExtractor?(!1===n.ssr||(m.requireAsync(t).catch((function(){return null})),r.loadSync(),t.__chunkExtractor.addChunk(m.chunkName(t))),i(r)):(!1!==n.ssr&&(m.isReady&&m.isReady(t)||m.chunkName&&h.initialChunks[m.chunkName(t)])&&r.loadSync(),r)}(0,s.Z)(t,e),t.getDerivedStateFromProps=function(e,n){var t=b(e);return(0,a.Z)({},n,{cacheKey:t,loading:n.loading||n.cacheKey!==t})};var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===v&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,n){n.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,n){this.mounted&&this.setState(e,n)},r.getCacheKey=function(){return b(this.props)},r.getCache=function(){return k[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),k[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;y&&setTimeout((function(){y(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=g(m.requireSync(this.props),this.props,N);this.state.result=e,this.state.loading=!1}catch(n){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:m.resolve(this.props),chunkName:m.chunkName(this.props),error:n?n.message:n}),this.state.error=n}},r.loadAsync=function(){var e=this,n=this.resolveAsync();return n.then((function(n){var t=g(n,e.props,N);e.safeSetState({result:t,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(n){return e.safeSetState({error:n,loading:!1})})),n},r.resolveAsync=function(){var e=this.props,n=(e.__chunkExtractor,e.forwardedRef,o(e,["__chunkExtractor","forwardedRef"]));return E(n)},r.render=function(){var e=this.props,t=e.forwardedRef,r=e.fallback,i=(e.__chunkExtractor,o(e,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,c=s.error,l=s.loading,f=s.result;if(n.suspense&&(this.getCache()||this.loadAsync()).status===p)throw this.loadAsync();if(c)throw c;var d=r||n.fallback||null;return l?d:u({fallback:d,result:f,options:n,props:(0,a.Z)({},i,{ref:t})})},t}(r.Component),R=(C=function(e){return r.createElement(d.Consumer,null,(function(n){return r.createElement(_,Object.assign({__chunkExtractor:n},e))}))},(_=w).displayName&&(C.displayName=_.displayName+"WithChunkExtractor"),C),N=r.forwardRef((function(e,n){return r.createElement(R,Object.assign({forwardedRef:n},e))}));return N.displayName="Loadable",N.preload=function(e){N.load(e)},N.load=function(e){return E(e)},N}return{loadable:k,lazy:function(e,n){return k(e,(0,a.Z)({},n,{suspense:!0}))}}}var k=y({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var n=e.result,t=e.props;return r.createElement(n,t)}}),b=k.loadable,g=k.lazy,_=y({onLoad:function(e,n){e&&n.forwardedRef&&("function"==typeof n.forwardedRef?n.forwardedRef(e):n.forwardedRef.current=e)},render:function(e){var n=e.result,t=e.props;return t.children?t.children(n):null}}),C=_.loadable,E=_.lazy;var w=b;w.lib=C,g.lib=E;var R=w((function(){return Promise.all([t.e(257),t.e(265),t.e(85)]).then(t.bind(t,9073))}))}}]);
//# sourceMappingURL=component---src-pages-damped-harmonic-oscillator-tsx-c4143715e0e3967b3e97.js.map
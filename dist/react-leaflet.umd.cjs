(function(m,w){typeof exports=="object"&&typeof module<"u"?module.exports=w(require("react"),require("leaflet"),require("uuid")):typeof define=="function"&&define.amd?define(["react","leaflet","uuid"],w):(m=typeof globalThis<"u"?globalThis:m||self,m.reactLeaflet=w(m.React,m.Leaflet,m.Uuid))})(this,function(m,w,Se){"use strict";import"leaflet/dist/leaflet.css";var B={exports:{}},k={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q;function Pe(){if(Q)return k;Q=1;var y=m,g=Symbol.for("react.element"),h=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,M=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function F(_,l,S){var v,E={},T=null,L=null;S!==void 0&&(T=""+S),l.key!==void 0&&(T=""+l.key),l.ref!==void 0&&(L=l.ref);for(v in l)C.call(l,v)&&!W.hasOwnProperty(v)&&(E[v]=l[v]);if(_&&_.defaultProps)for(v in l=_.defaultProps,l)E[v]===void 0&&(E[v]=l[v]);return{$$typeof:g,type:_,key:T,ref:L,props:E,_owner:M.current}}return k.Fragment=h,k.jsx=F,k.jsxs=F,k}var D={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function xe(){return ee||(ee=1,process.env.NODE_ENV!=="production"&&function(){var y=m,g=Symbol.for("react.element"),h=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),_=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),te=Symbol.iterator,Me="@@iterator";function We(e){if(e===null||typeof e!="object")return null;var r=te&&e[te]||e[Me];return typeof r=="function"?r:null}var P=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Le("error",e,t)}}function Le(e,r,t){{var n=P.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ye=!1,Ne=!1,$e=!1,Ve=!1,Ue=!1,ne;ne=Symbol.for("react.module.reference");function Be(e){return!!(typeof e=="string"||typeof e=="function"||e===C||e===W||Ue||e===M||e===S||e===v||Ve||e===L||Ye||Ne||$e||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===E||e.$$typeof===F||e.$$typeof===_||e.$$typeof===l||e.$$typeof===ne||e.getModuleId!==void 0))}function qe(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ae(e){return e.displayName||"Context"}function b(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case h:return"Portal";case W:return"Profiler";case M:return"StrictMode";case S:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _:var r=e;return ae(r)+".Consumer";case F:var t=e;return ae(t._context)+".Provider";case l:return qe(e,e.render,"ForwardRef");case E:var n=e.displayName||null;return n!==null?n:b(e.type)||"Memo";case T:{var i=e,u=i._payload,o=i._init;try{return b(o(u))}catch{return null}}}return null}var O=Object.assign,A=0,oe,ie,ue,se,fe,le,ce;function de(){}de.__reactDisabledLog=!0;function ze(){{if(A===0){oe=console.log,ie=console.info,ue=console.warn,se=console.error,fe=console.group,le=console.groupCollapsed,ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:de,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}A++}}function Ge(){{if(A--,A===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:O({},e,{value:oe}),info:O({},e,{value:ie}),warn:O({},e,{value:ue}),error:O({},e,{value:se}),group:O({},e,{value:fe}),groupCollapsed:O({},e,{value:le}),groupEnd:O({},e,{value:ce})})}A<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=P.ReactCurrentDispatcher,z;function Y(e,r,t){{if(z===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+e}}var G=!1,N;{var Je=typeof WeakMap=="function"?WeakMap:Map;N=new Je}function ve(e,r){if(!e||G)return"";{var t=N.get(e);if(t!==void 0)return t}var n;G=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=q.current,q.current=null,ze();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(R){n=R}Reflect.construct(e,[],o)}else{try{o.call()}catch(R){n=R}e.call(o.prototype)}}else{try{throw Error()}catch(R){n=R}e()}}catch(R){if(R&&n&&typeof R.stack=="string"){for(var a=R.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&N.set(e,p),p}while(s>=1&&f>=0);break}}}finally{G=!1,q.current=u,Ge(),Error.prepareStackTrace=i}var j=e?e.displayName||e.name:"",Ce=j?Y(j):"";return typeof e=="function"&&N.set(e,Ce),Ce}function Ke(e,r,t){return ve(e,!1)}function He(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function $(e,r,t){if(e==null)return"";if(typeof e=="function")return ve(e,He(e));if(typeof e=="string")return Y(e);switch(e){case S:return Y("Suspense");case v:return Y("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return Ke(e.render);case E:return $(e.type,r,t);case T:{var n=e,i=n._payload,u=n._init;try{return $(u(i),r,t)}catch{}}}return""}var V=Object.prototype.hasOwnProperty,pe={},ge=P.ReactDebugCurrentFrame;function U(e){if(e){var r=e._owner,t=$(e.type,e._source,r?r.type:null);ge.setExtraStackFrame(t)}else ge.setExtraStackFrame(null)}function Xe(e,r,t,n,i){{var u=Function.call.bind(V);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(U(i),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),U(null)),a instanceof Error&&!(a.message in pe)&&(pe[a.message]=!0,U(i),c("Failed %s type: %s",t,a.message),U(null))}}}var Ze=Array.isArray;function J(e){return Ze(e)}function Qe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function er(e){try{return he(e),!1}catch{return!0}}function he(e){return""+e}function me(e){if(er(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Qe(e)),he(e)}var I=P.ReactCurrentOwner,rr={key:!0,ref:!0,__self:!0,__source:!0},ye,Ee,K;K={};function tr(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function nr(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ar(e,r){if(typeof e.ref=="string"&&I.current&&r&&I.current.stateNode!==r){var t=b(I.current.type);K[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',b(I.current.type),e.ref),K[t]=!0)}}function or(e,r){{var t=function(){ye||(ye=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function ir(e,r){{var t=function(){Ee||(Ee=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ur=function(e,r,t,n,i,u,o){var a={$$typeof:g,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function sr(e,r,t,n,i){{var u,o={},a=null,d=null;t!==void 0&&(me(t),a=""+t),nr(r)&&(me(r.key),a=""+r.key),tr(r)&&(d=r.ref,ar(r,i));for(u in r)V.call(r,u)&&!rr.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&or(o,f),d&&ir(o,f)}return ur(e,a,d,i,n,I.current,o)}}var H=P.ReactCurrentOwner,be=P.ReactDebugCurrentFrame;function x(e){if(e){var r=e._owner,t=$(e.type,e._source,r?r.type:null);be.setExtraStackFrame(t)}else be.setExtraStackFrame(null)}var X;X=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===g}function Re(){{if(H.current){var e=b(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function fr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var _e={};function lr(e){{var r=Re();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Te(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=lr(r);if(_e[t])return;_e[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+b(e._owner.type)+"."),x(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),x(null)}}function Oe(e,r){{if(typeof e!="object")return;if(J(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&Te(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var i=We(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Z(o.value)&&Te(o.value,r)}}}function cr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===E))t=r.propTypes;else return;if(t){var n=b(r);Xe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var i=b(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function dr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){x(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),x(null);break}}e.ref!==null&&(x(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),x(null))}}function we(e,r,t,n,i,u){{var o=Be(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=fr(i);d?a+=d:a+=Re();var s;e===null?s="null":J(e)?s="array":e!==void 0&&e.$$typeof===g?(s="<"+(b(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=sr(e,r,t,i,u);if(f==null)return f;if(o){var p=r.children;if(p!==void 0)if(n)if(J(p)){for(var j=0;j<p.length;j++)Oe(p[j],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(p,e)}return e===C?dr(f):cr(f),f}}function vr(e,r,t){return we(e,r,t,!0)}function pr(e,r,t){return we(e,r,t,!1)}var gr=pr,hr=vr;D.Fragment=C,D.jsx=gr,D.jsxs=hr}()),D}process.env.NODE_ENV==="production"?B.exports=Pe():B.exports=xe();var je=B.exports;const ke="https://tile.openstreetmap.org/{z}/{x}/{y}.png",De=51.51,Fe=-.08,Ae=13,re=Se.v4();function Ie(y){return m.useEffect(()=>{const g=new w.Map(re,{layers:[new w.TileLayer(ke)],center:{lng:Fe,lat:De},zoom:Ae,zoomControl:!1});g.on("moveend",()=>{if(y.onViewChange){const h=g.getBounds();y.onViewChange(h.getWest(),h.getSouth(),h.getEast(),h.getNorth())}}),g.on("mousemove",h=>{y.onMouseMove&&y.onMouseMove({in:!0,lng:h.latlng.lng,lat:h.latlng.lat})}),g.on("mouseout",()=>{y.onMouseMove&&y.onMouseMove({in:!1})}),g.fire("moveend")},[]),je.jsx("div",{id:re,style:{width:"100%",height:"100%"}})}return Ie});

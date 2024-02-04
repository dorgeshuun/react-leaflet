var Ss = Object.defineProperty;
var bs = (de, M, N) => M in de ? Ss(de, M, { enumerable: !0, configurable: !0, writable: !0, value: N }) : de[M] = N;
var ul = (de, M, N) => (bs(de, typeof M != "symbol" ? M + "" : M, N), N);
import "leaflet/dist/leaflet.css";
import Et from "react";
import Sn, { LatLng as ls, CRS as ss } from "leaflet";
var as = { exports: {} }, yi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us;
function ws() {
  if (us)
    return yi;
  us = 1;
  var de = Et, M = Symbol.for("react.element"), N = Symbol.for("react.fragment"), ce = Object.prototype.hasOwnProperty, g = de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function xe(le, T, D) {
    var Pe, U = {}, re = null, yt = null;
    D !== void 0 && (re = "" + D), T.key !== void 0 && (re = "" + T.key), T.ref !== void 0 && (yt = T.ref);
    for (Pe in T)
      ce.call(T, Pe) && !Q.hasOwnProperty(Pe) && (U[Pe] = T[Pe]);
    if (le && le.defaultProps)
      for (Pe in T = le.defaultProps, T)
        U[Pe] === void 0 && (U[Pe] = T[Pe]);
    return { $$typeof: M, type: le, key: re, ref: yt, props: U, _owner: g.current };
  }
  return yi.Fragment = N, yi.jsx = xe, yi.jsxs = xe, yi;
}
var Si = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs;
function xs() {
  return cs || (cs = 1, process.env.NODE_ENV !== "production" && function() {
    var de = Et, M = Symbol.for("react.element"), N = Symbol.for("react.portal"), ce = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), xe = Symbol.for("react.provider"), le = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), yt = Symbol.for("react.offscreen"), ke = Symbol.iterator, pe = "@@iterator";
    function W(w) {
      if (w === null || typeof w != "object")
        return null;
      var B = ke && w[ke] || w[pe];
      return typeof B == "function" ? B : null;
    }
    var O = de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ne(w) {
      {
        for (var B = arguments.length, z = new Array(B > 1 ? B - 1 : 0), X = 1; X < B; X++)
          z[X - 1] = arguments[X];
        qe("error", w, z);
      }
    }
    function qe(w, B, z) {
      {
        var X = O.ReactDebugCurrentFrame, oe = X.getStackAddendum();
        oe !== "" && (B += "%s", z = z.concat([oe]));
        var se = z.map(function(ie) {
          return String(ie);
        });
        se.unshift("Warning: " + B), Function.prototype.apply.call(console[w], console, se);
      }
    }
    var De = !1, ee = !1, ye = !1, ue = !1, St = !1, Se;
    Se = Symbol.for("react.module.reference");
    function Tt(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === ce || w === Q || St || w === g || w === D || w === Pe || ue || w === yt || De || ee || ye || typeof w == "object" && w !== null && (w.$$typeof === re || w.$$typeof === U || w.$$typeof === xe || w.$$typeof === le || w.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === Se || w.getModuleId !== void 0));
    }
    function ct(w, B, z) {
      var X = w.displayName;
      if (X)
        return X;
      var oe = B.displayName || B.name || "";
      return oe !== "" ? z + "(" + oe + ")" : z;
    }
    function $e(w) {
      return w.displayName || "Context";
    }
    function Ne(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && ne("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case ce:
          return "Fragment";
        case N:
          return "Portal";
        case Q:
          return "Profiler";
        case g:
          return "StrictMode";
        case D:
          return "Suspense";
        case Pe:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case le:
            var B = w;
            return $e(B) + ".Consumer";
          case xe:
            var z = w;
            return $e(z._context) + ".Provider";
          case T:
            return ct(w, w.render, "ForwardRef");
          case U:
            var X = w.displayName || null;
            return X !== null ? X : Ne(w.type) || "Memo";
          case re: {
            var oe = w, se = oe._payload, ie = oe._init;
            try {
              return Ne(ie(se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ve = Object.assign, Rt = 0, ir, lr, ft, Ke, Jt, Ce, Ee;
    function Qt() {
    }
    Qt.__reactDisabledLog = !0;
    function jt() {
      {
        if (Rt === 0) {
          ir = console.log, lr = console.info, ft = console.warn, Ke = console.error, Jt = console.group, Ce = console.groupCollapsed, Ee = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: Qt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        Rt++;
      }
    }
    function Ae() {
      {
        if (Rt--, Rt === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ve({}, w, {
              value: ir
            }),
            info: Ve({}, w, {
              value: lr
            }),
            warn: Ve({}, w, {
              value: ft
            }),
            error: Ve({}, w, {
              value: Ke
            }),
            group: Ve({}, w, {
              value: Jt
            }),
            groupCollapsed: Ve({}, w, {
              value: Ce
            }),
            groupEnd: Ve({}, w, {
              value: Ee
            })
          });
        }
        Rt < 0 && ne("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Te = O.ReactCurrentDispatcher, It;
    function bt(w, B, z) {
      {
        if (It === void 0)
          try {
            throw Error();
          } catch (oe) {
            var X = oe.stack.trim().match(/\n( *(at )?)/);
            It = X && X[1] || "";
          }
        return `
` + It + w;
      }
    }
    var Xe = !1, it;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      it = new Ze();
    }
    function Kt(w, B) {
      if (!w || Xe)
        return "";
      {
        var z = it.get(w);
        if (z !== void 0)
          return z;
      }
      var X;
      Xe = !0;
      var oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var se;
      se = Te.current, Te.current = null, jt();
      try {
        if (B) {
          var ie = function() {
            throw Error();
          };
          if (Object.defineProperty(ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ie, []);
            } catch (Be) {
              X = Be;
            }
            Reflect.construct(w, [], ie);
          } else {
            try {
              ie.call();
            } catch (Be) {
              X = Be;
            }
            w.call(ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Be) {
            X = Be;
          }
          w();
        }
      } catch (Be) {
        if (Be && X && typeof Be.stack == "string") {
          for (var q = Be.stack.split(`
`), Le = X.stack.split(`
`), ge = q.length - 1, me = Le.length - 1; ge >= 1 && me >= 0 && q[ge] !== Le[me]; )
            me--;
          for (; ge >= 1 && me >= 0; ge--, me--)
            if (q[ge] !== Le[me]) {
              if (ge !== 1 || me !== 1)
                do
                  if (ge--, me--, me < 0 || q[ge] !== Le[me]) {
                    var _e = `
` + q[ge].replace(" at new ", " at ");
                    return w.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", w.displayName)), typeof w == "function" && it.set(w, _e), _e;
                  }
                while (ge >= 1 && me >= 0);
              break;
            }
        }
      } finally {
        Xe = !1, Te.current = se, Ae(), Error.prepareStackTrace = oe;
      }
      var st = w ? w.displayName || w.name : "", Wt = st ? bt(st) : "";
      return typeof w == "function" && it.set(w, Wt), Wt;
    }
    function ze(w, B, z) {
      return Kt(w, !1);
    }
    function Je(w) {
      var B = w.prototype;
      return !!(B && B.isReactComponent);
    }
    function Pt(w, B, z) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return Kt(w, Je(w));
      if (typeof w == "string")
        return bt(w);
      switch (w) {
        case D:
          return bt("Suspense");
        case Pe:
          return bt("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case T:
            return ze(w.render);
          case U:
            return Pt(w.type, B, z);
          case re: {
            var X = w, oe = X._payload, se = X._init;
            try {
              return Pt(se(oe), B, z);
            } catch {
            }
          }
        }
      return "";
    }
    var wt = Object.prototype.hasOwnProperty, Cr = {}, lt = O.ReactDebugCurrentFrame;
    function xt(w) {
      if (w) {
        var B = w._owner, z = Pt(w.type, w._source, B ? B.type : null);
        lt.setExtraStackFrame(z);
      } else
        lt.setExtraStackFrame(null);
    }
    function qt(w, B, z, X, oe) {
      {
        var se = Function.call.bind(wt);
        for (var ie in w)
          if (se(w, ie)) {
            var q = void 0;
            try {
              if (typeof w[ie] != "function") {
                var Le = Error((X || "React class") + ": " + z + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Le.name = "Invariant Violation", Le;
              }
              q = w[ie](B, ie, X, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              q = ge;
            }
            q && !(q instanceof Error) && (xt(oe), ne("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", z, ie, typeof q), xt(null)), q instanceof Error && !(q.message in Cr) && (Cr[q.message] = !0, xt(oe), ne("Failed %s type: %s", z, q.message), xt(null));
          }
      }
    }
    var jr = Array.isArray;
    function et(w) {
      return jr(w);
    }
    function Ye(w) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, z = B && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return z;
      }
    }
    function He(w) {
      try {
        return sr(w), !1;
      } catch {
        return !0;
      }
    }
    function sr(w) {
      return "" + w;
    }
    function ur(w) {
      if (He(w))
        return ne("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ye(w)), sr(w);
    }
    var _t = O.ReactCurrentOwner, Me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, cr, Er, fr;
    fr = {};
    function Tr(w) {
      if (wt.call(w, "ref")) {
        var B = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function dr(w) {
      if (wt.call(w, "key")) {
        var B = Object.getOwnPropertyDescriptor(w, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function Kr(w, B) {
      if (typeof w.ref == "string" && _t.current && B && _t.current.stateNode !== B) {
        var z = Ne(_t.current.type);
        fr[z] || (ne('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ne(_t.current.type), w.ref), fr[z] = !0);
      }
    }
    function Rr(w, B) {
      {
        var z = function() {
          cr || (cr = !0, ne("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        z.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function Ht(w, B) {
      {
        var z = function() {
          Er || (Er = !0, ne("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        z.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var Ir = function(w, B, z, X, oe, se, ie) {
      var q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: M,
        // Built-in properties that belong on the element
        type: w,
        key: B,
        ref: z,
        props: ie,
        // Record the component responsible for creating this element.
        _owner: se
      };
      return q._store = {}, Object.defineProperty(q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.defineProperty(q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function Hr(w, B, z, X, oe) {
      {
        var se, ie = {}, q = null, Le = null;
        z !== void 0 && (ur(z), q = "" + z), dr(B) && (ur(B.key), q = "" + B.key), Tr(B) && (Le = B.ref, Kr(B, oe));
        for (se in B)
          wt.call(B, se) && !Me.hasOwnProperty(se) && (ie[se] = B[se]);
        if (w && w.defaultProps) {
          var ge = w.defaultProps;
          for (se in ge)
            ie[se] === void 0 && (ie[se] = ge[se]);
        }
        if (q || Le) {
          var me = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          q && Rr(ie, me), Le && Ht(ie, me);
        }
        return Ir(w, q, Le, oe, X, _t.current, ie);
      }
    }
    var Ge = O.ReactCurrentOwner, dt = O.ReactDebugCurrentFrame;
    function tt(w) {
      if (w) {
        var B = w._owner, z = Pt(w.type, w._source, B ? B.type : null);
        dt.setExtraStackFrame(z);
      } else
        dt.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function kt(w) {
      return typeof w == "object" && w !== null && w.$$typeof === M;
    }
    function er() {
      {
        if (Ge.current) {
          var w = Ne(Ge.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function tr(w) {
      {
        if (w !== void 0) {
          var B = w.fileName.replace(/^.*[\\\/]/, ""), z = w.lineNumber;
          return `

Check your code at ` + B + ":" + z + ".";
        }
        return "";
      }
    }
    var pt = {};
    function pr(w) {
      {
        var B = er();
        if (!B) {
          var z = typeof w == "string" ? w : w.displayName || w.name;
          z && (B = `

Check the top-level render call using <` + z + ">.");
        }
        return B;
      }
    }
    function Ct(w, B) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var z = pr(B);
        if (pt[z])
          return;
        pt[z] = !0;
        var X = "";
        w && w._owner && w._owner !== Ge.current && (X = " It was passed a child from " + Ne(w._owner.type) + "."), tt(w), ne('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, X), tt(null);
      }
    }
    function Ie(w, B) {
      {
        if (typeof w != "object")
          return;
        if (et(w))
          for (var z = 0; z < w.length; z++) {
            var X = w[z];
            kt(X) && Ct(X, B);
          }
        else if (kt(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var oe = W(w);
          if (typeof oe == "function" && oe !== w.entries)
            for (var se = oe.call(w), ie; !(ie = se.next()).done; )
              kt(ie.value) && Ct(ie.value, B);
        }
      }
    }
    function Pr(w) {
      {
        var B = w.type;
        if (B == null || typeof B == "string")
          return;
        var z;
        if (typeof B == "function")
          z = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === U))
          z = B.propTypes;
        else
          return;
        if (z) {
          var X = Ne(B);
          qt(z, w.props, "prop", X, w);
        } else if (B.PropTypes !== void 0 && !fe) {
          fe = !0;
          var oe = Ne(B);
          ne("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", oe || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && ne("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(w) {
      {
        for (var B = Object.keys(w.props), z = 0; z < B.length; z++) {
          var X = B[z];
          if (X !== "children" && X !== "key") {
            tt(w), ne("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), tt(null);
            break;
          }
        }
        w.ref !== null && (tt(w), ne("Invalid attribute `ref` supplied to `React.Fragment`."), tt(null));
      }
    }
    function Fr(w, B, z, X, oe, se) {
      {
        var ie = Tt(w);
        if (!ie) {
          var q = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Le = tr(oe);
          Le ? q += Le : q += er();
          var ge;
          w === null ? ge = "null" : et(w) ? ge = "array" : w !== void 0 && w.$$typeof === M ? (ge = "<" + (Ne(w.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof w, ne("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, q);
        }
        var me = Hr(w, B, z, oe, se);
        if (me == null)
          return me;
        if (ie) {
          var _e = B.children;
          if (_e !== void 0)
            if (X)
              if (et(_e)) {
                for (var st = 0; st < _e.length; st++)
                  Ie(_e[st], w);
                Object.freeze && Object.freeze(_e);
              } else
                ne("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(_e, w);
        }
        return w === ce ? _r(me) : Pr(me), me;
      }
    }
    function Oe(w, B, z) {
      return Fr(w, B, z, !0);
    }
    function Dr(w, B, z) {
      return Fr(w, B, z, !1);
    }
    var qr = Dr, en = Oe;
    Si.Fragment = ce, Si.jsx = qr, Si.jsxs = en;
  }()), Si;
}
process.env.NODE_ENV === "production" ? as.exports = ws() : as.exports = xs();
var vs = as.exports;
function* ks(de, M, N) {
  const { x: ce, y: g } = ss.EPSG3857.latLngToPoint(de, N).divideBy(256).floor(), { x: Q, y: xe } = ss.EPSG3857.latLngToPoint(M, N).divideBy(256).floor();
  for (let le = ce; le <= Q; le++)
    for (let T = g; T <= xe; T++)
      yield new gs(le, T, N);
}
class gs {
  constructor(M, N, ce) {
    ul(this, "x");
    ul(this, "y");
    ul(this, "z");
    this.x = M, this.y = N, this.z = ce;
  }
  static fromExtent(M, N, ce, g, Q) {
    const xe = new ls(g, M), le = new ls(N, ce), T = ks(xe, le, Q);
    return Array.from(T);
  }
  toString() {
    return `${this.x}-${this.y}-${this.z}`;
  }
}
var wo = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fs;
function Cs() {
  if (fs)
    return wo;
  fs = 1;
  var de = Et;
  function M(o) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, h = 1; h < arguments.length; h++)
      u += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + o + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var N = Object.prototype.hasOwnProperty, ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, Q = {};
  function xe(o) {
    return N.call(Q, o) ? !0 : N.call(g, o) ? !1 : ce.test(o) ? Q[o] = !0 : (g[o] = !0, !1);
  }
  function le(o, u, h, m, R, C, F) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = m, this.attributeNamespace = R, this.mustUseProperty = h, this.propertyName = o, this.type = u, this.sanitizeURL = C, this.removeEmptyString = F;
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    T[o] = new le(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var u = o[0];
    T[u] = new le(u, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    T[o] = new le(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    T[o] = new le(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    T[o] = new le(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    T[o] = new le(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    T[o] = new le(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    T[o] = new le(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    T[o] = new le(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var D = /[\-:]([a-z])/g;
  function Pe(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var u = o.replace(
      D,
      Pe
    );
    T[u] = new le(u, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var u = o.replace(D, Pe);
    T[u] = new le(u, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var u = o.replace(D, Pe);
    T[u] = new le(u, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    T[o] = new le(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new le("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    T[o] = new le(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var U = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, re = ["Webkit", "ms", "Moz", "O"];
  Object.keys(U).forEach(function(o) {
    re.forEach(function(u) {
      u = u + o.charAt(0).toUpperCase() + o.substring(1), U[u] = U[o];
    });
  });
  var yt = /["'&<>]/;
  function ke(o) {
    if (typeof o == "boolean" || typeof o == "number")
      return "" + o;
    o = "" + o;
    var u = yt.exec(o);
    if (u) {
      var h = "", m, R = 0;
      for (m = u.index; m < o.length; m++) {
        switch (o.charCodeAt(m)) {
          case 34:
            u = "&quot;";
            break;
          case 38:
            u = "&amp;";
            break;
          case 39:
            u = "&#x27;";
            break;
          case 60:
            u = "&lt;";
            break;
          case 62:
            u = "&gt;";
            break;
          default:
            continue;
        }
        R !== m && (h += o.substring(R, m)), R = m + 1, h += u;
      }
      o = R !== m ? h + o.substring(R, m) : h;
    }
    return o;
  }
  var pe = /([A-Z])/g, W = /^ms-/, O = Array.isArray;
  function ne(o, u) {
    return { insertionMode: o, selectedValue: u };
  }
  function qe(o, u, h) {
    switch (u) {
      case "select":
        return ne(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return ne(2, null);
      case "math":
        return ne(3, null);
      case "foreignObject":
        return ne(1, null);
      case "table":
        return ne(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ne(5, null);
      case "colgroup":
        return ne(7, null);
      case "tr":
        return ne(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? ne(1, null) : o;
  }
  var De = /* @__PURE__ */ new Map();
  function ee(o, u, h) {
    if (typeof h != "object")
      throw Error(M(62));
    u = !0;
    for (var m in h)
      if (N.call(h, m)) {
        var R = h[m];
        if (R != null && typeof R != "boolean" && R !== "") {
          if (m.indexOf("--") === 0) {
            var C = ke(m);
            R = ke(("" + R).trim());
          } else {
            C = m;
            var F = De.get(C);
            F !== void 0 || (F = ke(C.replace(pe, "-$1").toLowerCase().replace(W, "-ms-")), De.set(C, F)), C = F, R = typeof R == "number" ? R === 0 || N.call(U, m) ? "" + R : R + "px" : ke(("" + R).trim());
          }
          u ? (u = !1, o.push(' style="', C, ":", R)) : o.push(";", C, ":", R);
        }
      }
    u || o.push('"');
  }
  function ye(o, u, h, m) {
    switch (h) {
      case "style":
        ee(o, u, m);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (u = T.hasOwnProperty(h) ? T[h] : null, u !== null) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans)
              return;
        }
        switch (h = u.attributeName, u.type) {
          case 3:
            m && o.push(" ", h, '=""');
            break;
          case 4:
            m === !0 ? o.push(" ", h, '=""') : m !== !1 && o.push(" ", h, '="', ke(m), '"');
            break;
          case 5:
            isNaN(m) || o.push(" ", h, '="', ke(m), '"');
            break;
          case 6:
            !isNaN(m) && 1 <= m && o.push(" ", h, '="', ke(m), '"');
            break;
          default:
            u.sanitizeURL && (m = "" + m), o.push(" ", h, '="', ke(m), '"');
        }
      } else if (xe(h)) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = h.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-")
              return;
        }
        o.push(" ", h, '="', ke(m), '"');
      }
    }
  }
  function ue(o, u, h) {
    if (u != null) {
      if (h != null)
        throw Error(M(60));
      if (typeof u != "object" || !("__html" in u))
        throw Error(M(61));
      u = u.__html, u != null && o.push("" + u);
    }
  }
  function St(o) {
    var u = "";
    return de.Children.forEach(o, function(h) {
      h != null && (u += h);
    }), u;
  }
  function Se(o, u, h, m) {
    o.push($e(h));
    var R = h = null, C;
    for (C in u)
      if (N.call(u, C)) {
        var F = u[C];
        if (F != null)
          switch (C) {
            case "children":
              h = F;
              break;
            case "dangerouslySetInnerHTML":
              R = F;
              break;
            default:
              ye(o, m, C, F);
          }
      }
    return o.push(">"), ue(o, R, h), typeof h == "string" ? (o.push(ke(h)), null) : h;
  }
  var Tt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ct = /* @__PURE__ */ new Map();
  function $e(o) {
    var u = ct.get(o);
    if (u === void 0) {
      if (!Tt.test(o))
        throw Error(M(65, o));
      u = "<" + o, ct.set(o, u);
    }
    return u;
  }
  function Ne(o, u, h, m, R) {
    switch (u) {
      case "select":
        o.push($e("select"));
        var C = null, F = null;
        for (G in h)
          if (N.call(h, G)) {
            var j = h[G];
            if (j != null)
              switch (G) {
                case "children":
                  C = j;
                  break;
                case "dangerouslySetInnerHTML":
                  F = j;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  ye(o, m, G, j);
              }
          }
        return o.push(">"), ue(o, F, C), C;
      case "option":
        F = R.selectedValue, o.push($e("option"));
        var V = j = null, Z = null, G = null;
        for (C in h)
          if (N.call(h, C)) {
            var he = h[C];
            if (he != null)
              switch (C) {
                case "children":
                  j = he;
                  break;
                case "selected":
                  Z = he;
                  break;
                case "dangerouslySetInnerHTML":
                  G = he;
                  break;
                case "value":
                  V = he;
                default:
                  ye(o, m, C, he);
              }
          }
        if (F != null)
          if (h = V !== null ? "" + V : St(j), O(F)) {
            for (m = 0; m < F.length; m++)
              if ("" + F[m] === h) {
                o.push(' selected=""');
                break;
              }
          } else
            "" + F === h && o.push(' selected=""');
        else
          Z && o.push(' selected=""');
        return o.push(">"), ue(o, G, j), j;
      case "textarea":
        o.push($e("textarea")), G = F = C = null;
        for (j in h)
          if (N.call(h, j) && (V = h[j], V != null))
            switch (j) {
              case "children":
                G = V;
                break;
              case "value":
                C = V;
                break;
              case "defaultValue":
                F = V;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(M(91));
              default:
                ye(
                  o,
                  m,
                  j,
                  V
                );
            }
        if (C === null && F !== null && (C = F), o.push(">"), G != null) {
          if (C != null)
            throw Error(M(92));
          if (O(G) && 1 < G.length)
            throw Error(M(93));
          C = "" + G;
        }
        return typeof C == "string" && C[0] === `
` && o.push(`
`), C !== null && o.push(ke("" + C)), null;
      case "input":
        o.push($e("input")), V = G = j = C = null;
        for (F in h)
          if (N.call(h, F) && (Z = h[F], Z != null))
            switch (F) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(M(399, "input"));
              case "defaultChecked":
                V = Z;
                break;
              case "defaultValue":
                j = Z;
                break;
              case "checked":
                G = Z;
                break;
              case "value":
                C = Z;
                break;
              default:
                ye(o, m, F, Z);
            }
        return G !== null ? ye(o, m, "checked", G) : V !== null && ye(o, m, "checked", V), C !== null ? ye(o, m, "value", C) : j !== null && ye(o, m, "value", j), o.push("/>"), null;
      case "menuitem":
        o.push($e("menuitem"));
        for (var ht in h)
          if (N.call(h, ht) && (C = h[ht], C != null))
            switch (ht) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(M(400));
              default:
                ye(o, m, ht, C);
            }
        return o.push(">"), null;
      case "title":
        o.push($e("title")), C = null;
        for (he in h)
          if (N.call(h, he) && (F = h[he], F != null))
            switch (he) {
              case "children":
                C = F;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(M(434));
              default:
                ye(o, m, he, F);
            }
        return o.push(">"), C;
      case "listing":
      case "pre":
        o.push($e(u)), F = C = null;
        for (V in h)
          if (N.call(h, V) && (j = h[V], j != null))
            switch (V) {
              case "children":
                C = j;
                break;
              case "dangerouslySetInnerHTML":
                F = j;
                break;
              default:
                ye(o, m, V, j);
            }
        if (o.push(">"), F != null) {
          if (C != null)
            throw Error(M(60));
          if (typeof F != "object" || !("__html" in F))
            throw Error(M(61));
          h = F.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? o.push(`
`, h) : o.push("" + h));
        }
        return typeof C == "string" && C[0] === `
` && o.push(`
`), C;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        o.push($e(u));
        for (var rt in h)
          if (N.call(h, rt) && (C = h[rt], C != null))
            switch (rt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(M(399, u));
              default:
                ye(o, m, rt, C);
            }
        return o.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Se(
          o,
          h,
          u,
          m
        );
      case "html":
        return R.insertionMode === 0 && o.push("<!DOCTYPE html>"), Se(o, h, u, m);
      default:
        if (u.indexOf("-") === -1 && typeof h.is != "string")
          return Se(o, h, u, m);
        o.push($e(u)), F = C = null;
        for (Z in h)
          if (N.call(h, Z) && (j = h[Z], j != null))
            switch (Z) {
              case "children":
                C = j;
                break;
              case "dangerouslySetInnerHTML":
                F = j;
                break;
              case "style":
                ee(o, m, j);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                xe(Z) && typeof j != "function" && typeof j != "symbol" && o.push(" ", Z, '="', ke(j), '"');
            }
        return o.push(">"), ue(o, F, C), C;
    }
  }
  function Ve(o, u, h) {
    if (o.push('<!--$?--><template id="'), h === null)
      throw Error(M(395));
    return o.push(h), o.push('"></template>');
  }
  function Rt(o, u, h, m) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return o.push('<div hidden id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      case 2:
        return o.push('<svg aria-hidden="true" style="display:none" id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      case 3:
        return o.push('<math aria-hidden="true" style="display:none" id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      case 4:
        return o.push('<table hidden id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      case 5:
        return o.push('<table hidden><tbody id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      case 6:
        return o.push('<table hidden><tr id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      case 7:
        return o.push('<table hidden><colgroup id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      default:
        throw Error(M(397));
    }
  }
  function ir(o, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return o.push("</div>");
      case 2:
        return o.push("</svg>");
      case 3:
        return o.push("</math>");
      case 4:
        return o.push("</table>");
      case 5:
        return o.push("</tbody></table>");
      case 6:
        return o.push("</tr></table>");
      case 7:
        return o.push("</colgroup></table>");
      default:
        throw Error(M(397));
    }
  }
  var lr = /[<\u2028\u2029]/g;
  function ft(o) {
    return JSON.stringify(o).replace(lr, function(u) {
      switch (u) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function Ke(o, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: o };
  }
  function Jt(o, u, h, m) {
    return h.generateStaticMarkup ? (o.push(ke(u)), !1) : (u === "" ? o = m : (m && o.push("<!-- -->"), o.push(ke(u)), o = !0), o);
  }
  var Ce = Object.assign, Ee = Symbol.for("react.element"), Qt = Symbol.for("react.portal"), jt = Symbol.for("react.fragment"), Ae = Symbol.for("react.strict_mode"), Te = Symbol.for("react.profiler"), It = Symbol.for("react.provider"), bt = Symbol.for("react.context"), Xe = Symbol.for("react.forward_ref"), it = Symbol.for("react.suspense"), Ze = Symbol.for("react.suspense_list"), Kt = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), Je = Symbol.for("react.scope"), Pt = Symbol.for("react.debug_trace_mode"), wt = Symbol.for("react.legacy_hidden"), Cr = Symbol.for("react.default_value"), lt = Symbol.iterator;
  function xt(o) {
    if (o == null)
      return null;
    if (typeof o == "function")
      return o.displayName || o.name || null;
    if (typeof o == "string")
      return o;
    switch (o) {
      case jt:
        return "Fragment";
      case Qt:
        return "Portal";
      case Te:
        return "Profiler";
      case Ae:
        return "StrictMode";
      case it:
        return "Suspense";
      case Ze:
        return "SuspenseList";
    }
    if (typeof o == "object")
      switch (o.$$typeof) {
        case bt:
          return (o.displayName || "Context") + ".Consumer";
        case It:
          return (o._context.displayName || "Context") + ".Provider";
        case Xe:
          var u = o.render;
          return o = o.displayName, o || (o = u.displayName || u.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
        case Kt:
          return u = o.displayName || null, u !== null ? u : xt(o.type) || "Memo";
        case ze:
          u = o._payload, o = o._init;
          try {
            return xt(o(u));
          } catch {
          }
      }
    return null;
  }
  var qt = {};
  function jr(o, u) {
    if (o = o.contextTypes, !o)
      return qt;
    var h = {}, m;
    for (m in o)
      h[m] = u[m];
    return h;
  }
  var et = null;
  function Ye(o, u) {
    if (o !== u) {
      o.context._currentValue2 = o.parentValue, o = o.parent;
      var h = u.parent;
      if (o === null) {
        if (h !== null)
          throw Error(M(401));
      } else {
        if (h === null)
          throw Error(M(401));
        Ye(o, h);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function He(o) {
    o.context._currentValue2 = o.parentValue, o = o.parent, o !== null && He(o);
  }
  function sr(o) {
    var u = o.parent;
    u !== null && sr(u), o.context._currentValue2 = o.value;
  }
  function ur(o, u) {
    if (o.context._currentValue2 = o.parentValue, o = o.parent, o === null)
      throw Error(M(402));
    o.depth === u.depth ? Ye(o, u) : ur(o, u);
  }
  function _t(o, u) {
    var h = u.parent;
    if (h === null)
      throw Error(M(402));
    o.depth === h.depth ? Ye(o, h) : _t(o, h), u.context._currentValue2 = u.value;
  }
  function Me(o) {
    var u = et;
    u !== o && (u === null ? sr(o) : o === null ? He(u) : u.depth === o.depth ? Ye(u, o) : u.depth > o.depth ? ur(u, o) : _t(u, o), et = o);
  }
  var cr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, u) {
    o = o._reactInternals, o.queue !== null && o.queue.push(u);
  }, enqueueReplaceState: function(o, u) {
    o = o._reactInternals, o.replace = !0, o.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Er(o, u, h, m) {
    var R = o.state !== void 0 ? o.state : null;
    o.updater = cr, o.props = h, o.state = R;
    var C = { queue: [], replace: !1 };
    o._reactInternals = C;
    var F = u.contextType;
    if (o.context = typeof F == "object" && F !== null ? F._currentValue2 : m, F = u.getDerivedStateFromProps, typeof F == "function" && (F = F(h, R), R = F == null ? R : Ce({}, R, F), o.state = R), typeof u.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function"))
      if (u = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), u !== o.state && cr.enqueueReplaceState(o, o.state, null), C.queue !== null && 0 < C.queue.length)
        if (u = C.queue, F = C.replace, C.queue = null, C.replace = !1, F && u.length === 1)
          o.state = u[0];
        else {
          for (C = F ? u[0] : o.state, R = !0, F = F ? 1 : 0; F < u.length; F++) {
            var j = u[F];
            j = typeof j == "function" ? j.call(o, C, h, m) : j, j != null && (R ? (R = !1, C = Ce({}, C, j)) : Ce(C, j));
          }
          o.state = C;
        }
      else
        C.queue = null;
  }
  var fr = { id: 1, overflow: "" };
  function Tr(o, u, h) {
    var m = o.id;
    o = o.overflow;
    var R = 32 - dr(m) - 1;
    m &= ~(1 << R), h += 1;
    var C = 32 - dr(u) + R;
    if (30 < C) {
      var F = R - R % 5;
      return C = (m & (1 << F) - 1).toString(32), m >>= F, R -= F, { id: 1 << 32 - dr(u) + R | h << R | m, overflow: C + o };
    }
    return { id: 1 << C | h << R | m, overflow: o };
  }
  var dr = Math.clz32 ? Math.clz32 : Ht, Kr = Math.log, Rr = Math.LN2;
  function Ht(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Kr(o) / Rr | 0) | 0;
  }
  function Ir(o, u) {
    return o === u && (o !== 0 || 1 / o === 1 / u) || o !== o && u !== u;
  }
  var Hr = typeof Object.is == "function" ? Object.is : Ir, Ge = null, dt = null, tt = null, fe = null, kt = !1, er = !1, tr = 0, pt = null, pr = 0;
  function Ct() {
    if (Ge === null)
      throw Error(M(321));
    return Ge;
  }
  function Ie() {
    if (0 < pr)
      throw Error(M(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Pr() {
    return fe === null ? tt === null ? (kt = !1, tt = fe = Ie()) : (kt = !0, fe = tt) : fe.next === null ? (kt = !1, fe = fe.next = Ie()) : (kt = !0, fe = fe.next), fe;
  }
  function _r() {
    dt = Ge = null, er = !1, tt = null, pr = 0, fe = pt = null;
  }
  function Fr(o, u) {
    return typeof u == "function" ? u(o) : u;
  }
  function Oe(o, u, h) {
    if (Ge = Ct(), fe = Pr(), kt) {
      var m = fe.queue;
      if (u = m.dispatch, pt !== null && (h = pt.get(m), h !== void 0)) {
        pt.delete(m), m = fe.memoizedState;
        do
          m = o(m, h.action), h = h.next;
        while (h !== null);
        return fe.memoizedState = m, [m, u];
      }
      return [fe.memoizedState, u];
    }
    return o = o === Fr ? typeof u == "function" ? u() : u : h !== void 0 ? h(u) : u, fe.memoizedState = o, o = fe.queue = { last: null, dispatch: null }, o = o.dispatch = qr.bind(null, Ge, o), [fe.memoizedState, o];
  }
  function Dr(o, u) {
    if (Ge = Ct(), fe = Pr(), u = u === void 0 ? null : u, fe !== null) {
      var h = fe.memoizedState;
      if (h !== null && u !== null) {
        var m = h[1];
        e:
          if (m === null)
            m = !1;
          else {
            for (var R = 0; R < m.length && R < u.length; R++)
              if (!Hr(u[R], m[R])) {
                m = !1;
                break e;
              }
            m = !0;
          }
        if (m)
          return h[0];
      }
    }
    return o = o(), fe.memoizedState = [o, u], o;
  }
  function qr(o, u, h) {
    if (25 <= pr)
      throw Error(M(301));
    if (o === Ge)
      if (er = !0, o = { action: h, next: null }, pt === null && (pt = /* @__PURE__ */ new Map()), h = pt.get(u), h === void 0)
        pt.set(u, o);
      else {
        for (u = h; u.next !== null; )
          u = u.next;
        u.next = o;
      }
  }
  function en() {
    throw Error(M(394));
  }
  function w() {
  }
  var B = { readContext: function(o) {
    return o._currentValue2;
  }, useContext: function(o) {
    return Ct(), o._currentValue2;
  }, useMemo: Dr, useReducer: Oe, useRef: function(o) {
    Ge = Ct(), fe = Pr();
    var u = fe.memoizedState;
    return u === null ? (o = { current: o }, fe.memoizedState = o) : u;
  }, useState: function(o) {
    return Oe(Fr, o);
  }, useInsertionEffect: w, useLayoutEffect: function() {
  }, useCallback: function(o, u) {
    return Dr(function() {
      return o;
    }, u);
  }, useImperativeHandle: w, useEffect: w, useDebugValue: w, useDeferredValue: function(o) {
    return Ct(), o;
  }, useTransition: function() {
    return Ct(), [
      !1,
      en
    ];
  }, useId: function() {
    var o = dt.treeContext, u = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - dr(o) - 1)).toString(32) + u;
    var h = z;
    if (h === null)
      throw Error(M(404));
    return u = tr++, o = ":" + h.idPrefix + "R" + o, 0 < u && (o += "H" + u.toString(32)), o + ":";
  }, useMutableSource: function(o, u) {
    return Ct(), u(o._source);
  }, useSyncExternalStore: function(o, u, h) {
    if (h === void 0)
      throw Error(M(407));
    return h();
  } }, z = null, X = de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function oe(o) {
    return console.error(o), null;
  }
  function se() {
  }
  function ie(o, u, h, m, R, C, F, j, V) {
    var Z = [], G = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: m === void 0 ? 12800 : m, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: G, pingedTasks: Z, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: R === void 0 ? oe : R, onAllReady: C === void 0 ? se : C, onShellReady: F === void 0 ? se : F, onShellError: j === void 0 ? se : j, onFatalError: V === void 0 ? se : V }, h = Le(u, 0, null, h, !1, !1), h.parentFlushed = !0, o = q(u, o, null, h, G, qt, null, fr), Z.push(o), u;
  }
  function q(o, u, h, m, R, C, F, j) {
    o.allPendingTasks++, h === null ? o.pendingRootTasks++ : h.pendingTasks++;
    var V = { node: u, ping: function() {
      var Z = o.pingedTasks;
      Z.push(V), Z.length === 1 && ut(o);
    }, blockedBoundary: h, blockedSegment: m, abortSet: R, legacyContext: C, context: F, treeContext: j };
    return R.add(V), V;
  }
  function Le(o, u, h, m, R, C) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: m, boundary: h, lastPushedText: R, textEmbedded: C };
  }
  function ge(o, u) {
    if (o = o.onError(u), o != null && typeof o != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function me(o, u) {
    var h = o.onShellError;
    h(u), h = o.onFatalError, h(u), o.destination !== null ? (o.status = 2, o.destination.destroy(u)) : (o.status = 1, o.fatalError = u);
  }
  function _e(o, u, h, m, R) {
    for (Ge = {}, dt = u, tr = 0, o = h(m, R); er; )
      er = !1, tr = 0, pr += 1, fe = null, o = h(m, R);
    return _r(), o;
  }
  function st(o, u, h, m) {
    var R = h.render(), C = m.childContextTypes;
    if (C != null) {
      var F = u.legacyContext;
      if (typeof h.getChildContext != "function")
        m = F;
      else {
        h = h.getChildContext();
        for (var j in h)
          if (!(j in C))
            throw Error(M(108, xt(m) || "Unknown", j));
        m = Ce({}, F, h);
      }
      u.legacyContext = m, Ue(o, u, R), u.legacyContext = F;
    } else
      Ue(o, u, R);
  }
  function Wt(o, u) {
    if (o && o.defaultProps) {
      u = Ce({}, u), o = o.defaultProps;
      for (var h in o)
        u[h] === void 0 && (u[h] = o[h]);
      return u;
    }
    return u;
  }
  function Be(o, u, h, m, R) {
    if (typeof h == "function")
      if (h.prototype && h.prototype.isReactComponent) {
        R = jr(h, u.legacyContext);
        var C = h.contextType;
        C = new h(m, typeof C == "object" && C !== null ? C._currentValue2 : R), Er(C, h, m, R), st(o, u, C, h);
      } else {
        C = jr(h, u.legacyContext), R = _e(o, u, h, m, C);
        var F = tr !== 0;
        if (typeof R == "object" && R !== null && typeof R.render == "function" && R.$$typeof === void 0)
          Er(R, h, m, C), st(o, u, R, h);
        else if (F) {
          m = u.treeContext, u.treeContext = Tr(m, 1, 0);
          try {
            Ue(o, u, R);
          } finally {
            u.treeContext = m;
          }
        } else
          Ue(o, u, R);
      }
    else if (typeof h == "string") {
      switch (R = u.blockedSegment, C = Ne(R.chunks, h, m, o.responseState, R.formatContext), R.lastPushedText = !1, F = R.formatContext, R.formatContext = qe(F, h, m), Ft(o, u, C), R.formatContext = F, h) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          R.chunks.push("</", h, ">");
      }
      R.lastPushedText = !1;
    } else {
      switch (h) {
        case wt:
        case Pt:
        case Ae:
        case Te:
        case jt:
          Ue(o, u, m.children);
          return;
        case Ze:
          Ue(o, u, m.children);
          return;
        case Je:
          throw Error(M(343));
        case it:
          e: {
            h = u.blockedBoundary, R = u.blockedSegment, C = m.fallback, m = m.children, F = /* @__PURE__ */ new Set();
            var j = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: F, errorDigest: null }, V = Le(o, R.chunks.length, j, R.formatContext, !1, !1);
            R.children.push(V), R.lastPushedText = !1;
            var Z = Le(o, 0, null, R.formatContext, !1, !1);
            Z.parentFlushed = !0, u.blockedBoundary = j, u.blockedSegment = Z;
            try {
              if (Ft(
                o,
                u,
                m
              ), o.responseState.generateStaticMarkup || Z.lastPushedText && Z.textEmbedded && Z.chunks.push("<!-- -->"), Z.status = 1, $t(j, Z), j.pendingTasks === 0)
                break e;
            } catch (G) {
              Z.status = 4, j.forceClientRender = !0, j.errorDigest = ge(o, G);
            } finally {
              u.blockedBoundary = h, u.blockedSegment = R;
            }
            u = q(o, C, h, V, F, u.legacyContext, u.context, u.treeContext), o.pingedTasks.push(u);
          }
          return;
      }
      if (typeof h == "object" && h !== null)
        switch (h.$$typeof) {
          case Xe:
            if (m = _e(o, u, h.render, m, R), tr !== 0) {
              h = u.treeContext, u.treeContext = Tr(h, 1, 0);
              try {
                Ue(o, u, m);
              } finally {
                u.treeContext = h;
              }
            } else
              Ue(o, u, m);
            return;
          case Kt:
            h = h.type, m = Wt(h, m), Be(o, u, h, m, R);
            return;
          case It:
            if (R = m.children, h = h._context, m = m.value, C = h._currentValue2, h._currentValue2 = m, F = et, et = m = { parent: F, depth: F === null ? 0 : F.depth + 1, context: h, parentValue: C, value: m }, u.context = m, Ue(o, u, R), o = et, o === null)
              throw Error(M(403));
            m = o.parentValue, o.context._currentValue2 = m === Cr ? o.context._defaultValue : m, o = et = o.parent, u.context = o;
            return;
          case bt:
            m = m.children, m = m(h._currentValue2), Ue(o, u, m);
            return;
          case ze:
            R = h._init, h = R(h._payload), m = Wt(h, m), Be(
              o,
              u,
              h,
              m,
              void 0
            );
            return;
        }
      throw Error(M(130, h == null ? h : typeof h, ""));
    }
  }
  function Ue(o, u, h) {
    if (u.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ee:
          Be(o, u, h.type, h.props, h.ref);
          return;
        case Qt:
          throw Error(M(257));
        case ze:
          var m = h._init;
          h = m(h._payload), Ue(o, u, h);
          return;
      }
      if (O(h)) {
        zt(o, u, h);
        return;
      }
      if (h === null || typeof h != "object" ? m = null : (m = lt && h[lt] || h["@@iterator"], m = typeof m == "function" ? m : null), m && (m = m.call(h))) {
        if (h = m.next(), !h.done) {
          var R = [];
          do
            R.push(h.value), h = m.next();
          while (!h.done);
          zt(o, u, R);
        }
        return;
      }
      throw o = Object.prototype.toString.call(h), Error(M(31, o === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : o));
    }
    typeof h == "string" ? (m = u.blockedSegment, m.lastPushedText = Jt(u.blockedSegment.chunks, h, o.responseState, m.lastPushedText)) : typeof h == "number" && (m = u.blockedSegment, m.lastPushedText = Jt(u.blockedSegment.chunks, "" + h, o.responseState, m.lastPushedText));
  }
  function zt(o, u, h) {
    for (var m = h.length, R = 0; R < m; R++) {
      var C = u.treeContext;
      u.treeContext = Tr(C, m, R);
      try {
        Ft(o, u, h[R]);
      } finally {
        u.treeContext = C;
      }
    }
  }
  function Ft(o, u, h) {
    var m = u.blockedSegment.formatContext, R = u.legacyContext, C = u.context;
    try {
      return Ue(o, u, h);
    } catch (V) {
      if (_r(), typeof V == "object" && V !== null && typeof V.then == "function") {
        h = V;
        var F = u.blockedSegment, j = Le(o, F.chunks.length, null, F.formatContext, F.lastPushedText, !0);
        F.children.push(j), F.lastPushedText = !1, o = q(o, u.node, u.blockedBoundary, j, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, h.then(o, o), u.blockedSegment.formatContext = m, u.legacyContext = R, u.context = C, Me(C);
      } else
        throw u.blockedSegment.formatContext = m, u.legacyContext = R, u.context = C, Me(C), V;
    }
  }
  function Qe(o) {
    var u = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Nt(this, u, o);
  }
  function Wr(o, u, h) {
    var m = o.blockedBoundary;
    o.blockedSegment.status = 3, m === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (m.pendingTasks--, m.forceClientRender || (m.forceClientRender = !0, o = h === void 0 ? Error(M(432)) : h, m.errorDigest = u.onError(o), m.parentFlushed && u.clientRenderedBoundaries.push(m)), m.fallbackAbortableTasks.forEach(function(R) {
      return Wr(R, u, h);
    }), m.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (m = u.onAllReady, m()));
  }
  function $t(o, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var h = u.children[0];
      h.id = u.id, h.parentFlushed = !0, h.status === 1 && $t(o, h);
    } else
      o.completedSegments.push(u);
  }
  function Nt(o, u, h) {
    if (u === null) {
      if (h.parentFlushed) {
        if (o.completedRootSegment !== null)
          throw Error(M(389));
        o.completedRootSegment = h;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = se, u = o.onShellReady, u());
    } else
      u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && $t(u, h), u.parentFlushed && o.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Qe, o), u.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && ($t(u, h), u.completedSegments.length === 1 && u.parentFlushed && o.partialBoundaries.push(u)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function ut(o) {
    if (o.status !== 2) {
      var u = et, h = X.current;
      X.current = B;
      var m = z;
      z = o.responseState;
      try {
        var R = o.pingedTasks, C;
        for (C = 0; C < R.length; C++) {
          var F = R[C], j = o, V = F.blockedSegment;
          if (V.status === 0) {
            Me(F.context);
            try {
              Ue(j, F, F.node), j.responseState.generateStaticMarkup || V.lastPushedText && V.textEmbedded && V.chunks.push("<!-- -->"), F.abortSet.delete(F), V.status = 1, Nt(j, F.blockedBoundary, V);
            } catch (nt) {
              if (_r(), typeof nt == "object" && nt !== null && typeof nt.then == "function") {
                var Z = F.ping;
                nt.then(Z, Z);
              } else {
                F.abortSet.delete(F), V.status = 4;
                var G = F.blockedBoundary, he = nt, ht = ge(j, he);
                if (G === null ? me(j, he) : (G.pendingTasks--, G.forceClientRender || (G.forceClientRender = !0, G.errorDigest = ht, G.parentFlushed && j.clientRenderedBoundaries.push(G))), j.allPendingTasks--, j.allPendingTasks === 0) {
                  var rt = j.onAllReady;
                  rt();
                }
              }
            } finally {
            }
          }
        }
        R.splice(0, C), o.destination !== null && vr(o, o.destination);
      } catch (nt) {
        ge(o, nt), me(o, nt);
      } finally {
        z = m, X.current = h, h === B && Me(u);
      }
    }
  }
  function rr(o, u, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var m = h.id = o.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, o = o.responseState, u.push('<template id="'), u.push(o.placeholderPrefix), o = m.toString(16), u.push(o), u.push('"></template>');
      case 1:
        h.status = 2;
        var R = !0;
        m = h.chunks;
        var C = 0;
        h = h.children;
        for (var F = 0; F < h.length; F++) {
          for (R = h[F]; C < R.index; C++)
            u.push(m[C]);
          R = hr(o, u, R);
        }
        for (; C < m.length - 1; C++)
          u.push(m[C]);
        return C < m.length && (R = u.push(m[C])), R;
      default:
        throw Error(M(390));
    }
  }
  function hr(o, u, h) {
    var m = h.boundary;
    if (m === null)
      return rr(o, u, h);
    if (m.parentFlushed = !0, m.forceClientRender)
      return o.responseState.generateStaticMarkup || (m = m.errorDigest, u.push("<!--$!-->"), u.push("<template"), m && (u.push(' data-dgst="'), m = ke(m), u.push(m), u.push('"')), u.push("></template>")), rr(o, u, h), o = o.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), o;
    if (0 < m.pendingTasks) {
      m.rootSegmentID = o.nextSegmentId++, 0 < m.completedSegments.length && o.partialBoundaries.push(m);
      var R = o.responseState, C = R.nextSuspenseID++;
      return R = R.boundaryPrefix + C.toString(16), m = m.id = R, Ve(u, o.responseState, m), rr(o, u, h), u.push("<!--/$-->");
    }
    if (m.byteSize > o.progressiveChunkSize)
      return m.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(m), Ve(u, o.responseState, m.id), rr(o, u, h), u.push("<!--/$-->");
    if (o.responseState.generateStaticMarkup || u.push("<!--$-->"), h = m.completedSegments, h.length !== 1)
      throw Error(M(391));
    return hr(o, u, h[0]), o = o.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), o;
  }
  function tn(o, u, h) {
    return Rt(u, o.responseState, h.formatContext, h.id), hr(o, u, h), ir(u, h.formatContext);
  }
  function rn(o, u, h) {
    for (var m = h.completedSegments, R = 0; R < m.length; R++)
      zr(o, u, h, m[R]);
    if (m.length = 0, o = o.responseState, m = h.id, h = h.rootSegmentID, u.push(o.startInlineScript), o.sentCompleteBoundaryFunction ? u.push('$RC("') : (o.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), m === null)
      throw Error(M(395));
    return h = h.toString(16), u.push(m), u.push('","'), u.push(o.segmentPrefix), u.push(h), u.push('")<\/script>');
  }
  function zr(o, u, h, m) {
    if (m.status === 2)
      return !0;
    var R = m.id;
    if (R === -1) {
      if ((m.id = h.rootSegmentID) === -1)
        throw Error(M(392));
      return tn(o, u, m);
    }
    return tn(o, u, m), o = o.responseState, u.push(o.startInlineScript), o.sentCompleteSegmentFunction ? u.push('$RS("') : (o.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(o.segmentPrefix), R = R.toString(16), u.push(R), u.push('","'), u.push(o.placeholderPrefix), u.push(R), u.push('")<\/script>');
  }
  function vr(o, u) {
    try {
      var h = o.completedRootSegment;
      if (h !== null && o.pendingRootTasks === 0) {
        hr(o, u, h), o.completedRootSegment = null;
        var m = o.responseState.bootstrapChunks;
        for (h = 0; h < m.length - 1; h++)
          u.push(m[h]);
        h < m.length && u.push(m[h]);
      }
      var R = o.clientRenderedBoundaries, C;
      for (C = 0; C < R.length; C++) {
        var F = R[C];
        m = u;
        var j = o.responseState, V = F.id, Z = F.errorDigest, G = F.errorMessage, he = F.errorComponentStack;
        if (m.push(j.startInlineScript), j.sentClientRenderFunction ? m.push('$RX("') : (j.sentClientRenderFunction = !0, m.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), V === null)
          throw Error(M(395));
        if (m.push(V), m.push('"'), Z || G || he) {
          m.push(",");
          var ht = ft(Z || "");
          m.push(ht);
        }
        if (G || he) {
          m.push(",");
          var rt = ft(G || "");
          m.push(rt);
        }
        if (he) {
          m.push(",");
          var nt = ft(he);
          m.push(nt);
        }
        if (!m.push(")<\/script>")) {
          o.destination = null, C++, R.splice(0, C);
          return;
        }
      }
      R.splice(0, C);
      var nr = o.completedBoundaries;
      for (C = 0; C < nr.length; C++)
        if (!rn(o, u, nr[C])) {
          o.destination = null, C++, nr.splice(0, C);
          return;
        }
      nr.splice(0, C);
      var Dt = o.partialBoundaries;
      for (C = 0; C < Dt.length; C++) {
        var Vr = Dt[C];
        e: {
          R = o, F = u;
          var gr = Vr.completedSegments;
          for (j = 0; j < gr.length; j++)
            if (!zr(R, F, Vr, gr[j])) {
              j++, gr.splice(0, j);
              var Ar = !1;
              break e;
            }
          gr.splice(0, j), Ar = !0;
        }
        if (!Ar) {
          o.destination = null, C++, Dt.splice(0, C);
          return;
        }
      }
      Dt.splice(0, C);
      var or = o.completedBoundaries;
      for (C = 0; C < or.length; C++)
        if (!rn(o, u, or[C])) {
          o.destination = null, C++, or.splice(0, C);
          return;
        }
      or.splice(0, C);
    } finally {
      o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function nn(o, u) {
    try {
      var h = o.abortableTasks;
      h.forEach(function(m) {
        return Wr(m, o, u);
      }), h.clear(), o.destination !== null && vr(o, o.destination);
    } catch (m) {
      ge(o, m), me(o, m);
    }
  }
  function $r() {
  }
  function Nr(o, u, h, m) {
    var R = !1, C = null, F = "", j = { push: function(Z) {
      return Z !== null && (F += Z), !0;
    }, destroy: function(Z) {
      R = !0, C = Z;
    } }, V = !1;
    if (o = ie(o, Ke(h, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, $r, void 0, function() {
      V = !0;
    }, void 0, void 0), ut(o), nn(o, m), o.status === 1)
      o.status = 2, j.destroy(o.fatalError);
    else if (o.status !== 2 && o.destination === null) {
      o.destination = j;
      try {
        vr(o, j);
      } catch (Z) {
        ge(o, Z), me(o, Z);
      }
    }
    if (R)
      throw C;
    if (!V)
      throw Error(M(426));
    return F;
  }
  return wo.renderToNodeStream = function() {
    throw Error(M(207));
  }, wo.renderToStaticMarkup = function(o, u) {
    return Nr(o, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, wo.renderToStaticNodeStream = function() {
    throw Error(M(208));
  }, wo.renderToString = function(o, u) {
    return Nr(o, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, wo.version = "18.2.0", wo;
}
var cl = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ds;
function Es() {
  if (ds)
    return cl;
  ds = 1;
  var de = Et;
  function M(a) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, p = 1; p < arguments.length; p++)
      c += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + a + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var N = null, ce = 0;
  function g(a, c) {
    if (c.length !== 0)
      if (512 < c.length)
        0 < ce && (a.enqueue(new Uint8Array(N.buffer, 0, ce)), N = new Uint8Array(512), ce = 0), a.enqueue(c);
      else {
        var p = N.length - ce;
        p < c.length && (p === 0 ? a.enqueue(N) : (N.set(c.subarray(0, p), ce), a.enqueue(N), c = c.subarray(p)), N = new Uint8Array(512), ce = 0), N.set(c, ce), ce += c.length;
      }
  }
  function Q(a, c) {
    return g(a, c), !0;
  }
  function xe(a) {
    N && 0 < ce && (a.enqueue(new Uint8Array(N.buffer, 0, ce)), N = null, ce = 0);
  }
  var le = new TextEncoder();
  function T(a) {
    return le.encode(a);
  }
  function D(a) {
    return le.encode(a);
  }
  function Pe(a, c) {
    typeof a.error == "function" ? a.error(c) : a.close();
  }
  var U = Object.prototype.hasOwnProperty, re = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, yt = {}, ke = {};
  function pe(a) {
    return U.call(ke, a) ? !0 : U.call(yt, a) ? !1 : re.test(a) ? ke[a] = !0 : (yt[a] = !0, !1);
  }
  function W(a, c, p, y, I, E, A) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = y, this.attributeNamespace = I, this.mustUseProperty = p, this.propertyName = a, this.type = c, this.sanitizeURL = E, this.removeEmptyString = A;
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    O[a] = new W(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var c = a[0];
    O[c] = new W(c, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    O[a] = new W(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    O[a] = new W(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    O[a] = new W(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    O[a] = new W(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    O[a] = new W(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    O[a] = new W(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    O[a] = new W(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var ne = /[\-:]([a-z])/g;
  function qe(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var c = a.replace(
      ne,
      qe
    );
    O[c] = new W(c, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var c = a.replace(ne, qe);
    O[c] = new W(c, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var c = a.replace(ne, qe);
    O[c] = new W(c, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    O[a] = new W(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), O.xlinkHref = new W("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    O[a] = new W(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var De = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ee = ["Webkit", "ms", "Moz", "O"];
  Object.keys(De).forEach(function(a) {
    ee.forEach(function(c) {
      c = c + a.charAt(0).toUpperCase() + a.substring(1), De[c] = De[a];
    });
  });
  var ye = /["'&<>]/;
  function ue(a) {
    if (typeof a == "boolean" || typeof a == "number")
      return "" + a;
    a = "" + a;
    var c = ye.exec(a);
    if (c) {
      var p = "", y, I = 0;
      for (y = c.index; y < a.length; y++) {
        switch (a.charCodeAt(y)) {
          case 34:
            c = "&quot;";
            break;
          case 38:
            c = "&amp;";
            break;
          case 39:
            c = "&#x27;";
            break;
          case 60:
            c = "&lt;";
            break;
          case 62:
            c = "&gt;";
            break;
          default:
            continue;
        }
        I !== y && (p += a.substring(I, y)), I = y + 1, p += c;
      }
      a = I !== y ? p + a.substring(I, y) : p;
    }
    return a;
  }
  var St = /([A-Z])/g, Se = /^ms-/, Tt = Array.isArray, ct = D("<script>"), $e = D("<\/script>"), Ne = D('<script src="'), Ve = D('<script type="module" src="'), Rt = D('" async=""><\/script>'), ir = /(<\/|<)(s)(cript)/gi;
  function lr(a, c, p, y) {
    return "" + c + (p === "s" ? "\\u0073" : "\\u0053") + y;
  }
  function ft(a, c, p, y, I) {
    a = a === void 0 ? "" : a, c = c === void 0 ? ct : D('<script nonce="' + ue(c) + '">');
    var E = [];
    if (p !== void 0 && E.push(c, T(("" + p).replace(ir, lr)), $e), y !== void 0)
      for (p = 0; p < y.length; p++)
        E.push(Ne, T(ue(y[p])), Rt);
    if (I !== void 0)
      for (y = 0; y < I.length; y++)
        E.push(Ve, T(ue(I[y])), Rt);
    return { bootstrapChunks: E, startInlineScript: c, placeholderPrefix: D(a + "P:"), segmentPrefix: D(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ke(a, c) {
    return { insertionMode: a, selectedValue: c };
  }
  function Jt(a) {
    return Ke(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Ce(a, c, p) {
    switch (c) {
      case "select":
        return Ke(1, p.value != null ? p.value : p.defaultValue);
      case "svg":
        return Ke(2, null);
      case "math":
        return Ke(3, null);
      case "foreignObject":
        return Ke(1, null);
      case "table":
        return Ke(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ke(5, null);
      case "colgroup":
        return Ke(7, null);
      case "tr":
        return Ke(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? Ke(1, null) : a;
  }
  var Ee = D("<!-- -->");
  function Qt(a, c, p, y) {
    return c === "" ? y : (y && a.push(Ee), a.push(T(ue(c))), !0);
  }
  var jt = /* @__PURE__ */ new Map(), Ae = D(' style="'), Te = D(":"), It = D(";");
  function bt(a, c, p) {
    if (typeof p != "object")
      throw Error(M(62));
    c = !0;
    for (var y in p)
      if (U.call(p, y)) {
        var I = p[y];
        if (I != null && typeof I != "boolean" && I !== "") {
          if (y.indexOf("--") === 0) {
            var E = T(ue(y));
            I = T(ue(("" + I).trim()));
          } else {
            E = y;
            var A = jt.get(E);
            A !== void 0 || (A = D(ue(E.replace(St, "-$1").toLowerCase().replace(Se, "-ms-"))), jt.set(E, A)), E = A, I = typeof I == "number" ? I === 0 || U.call(De, y) ? T("" + I) : T(I + "px") : T(ue(("" + I).trim()));
          }
          c ? (c = !1, a.push(Ae, E, Te, I)) : a.push(It, E, Te, I);
        }
      }
    c || a.push(Ze);
  }
  var Xe = D(" "), it = D('="'), Ze = D('"'), Kt = D('=""');
  function ze(a, c, p, y) {
    switch (p) {
      case "style":
        bt(a, c, y);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
      if (c = O.hasOwnProperty(p) ? O[p] : null, c !== null) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans)
              return;
        }
        switch (p = T(c.attributeName), c.type) {
          case 3:
            y && a.push(Xe, p, Kt);
            break;
          case 4:
            y === !0 ? a.push(Xe, p, Kt) : y !== !1 && a.push(Xe, p, it, T(ue(y)), Ze);
            break;
          case 5:
            isNaN(y) || a.push(Xe, p, it, T(ue(y)), Ze);
            break;
          case 6:
            !isNaN(y) && 1 <= y && a.push(Xe, p, it, T(ue(y)), Ze);
            break;
          default:
            c.sanitizeURL && (y = "" + y), a.push(Xe, p, it, T(ue(y)), Ze);
        }
      } else if (pe(p)) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = p.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-")
              return;
        }
        a.push(Xe, T(p), it, T(ue(y)), Ze);
      }
    }
  }
  var Je = D(">"), Pt = D("/>");
  function wt(a, c, p) {
    if (c != null) {
      if (p != null)
        throw Error(M(60));
      if (typeof c != "object" || !("__html" in c))
        throw Error(M(61));
      c = c.__html, c != null && a.push(T("" + c));
    }
  }
  function Cr(a) {
    var c = "";
    return de.Children.forEach(a, function(p) {
      p != null && (c += p);
    }), c;
  }
  var lt = D(' selected=""');
  function xt(a, c, p, y) {
    a.push(Ye(p));
    var I = p = null, E;
    for (E in c)
      if (U.call(c, E)) {
        var A = c[E];
        if (A != null)
          switch (E) {
            case "children":
              p = A;
              break;
            case "dangerouslySetInnerHTML":
              I = A;
              break;
            default:
              ze(a, y, E, A);
          }
      }
    return a.push(Je), wt(a, I, p), typeof p == "string" ? (a.push(T(ue(p))), null) : p;
  }
  var qt = D(`
`), jr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, et = /* @__PURE__ */ new Map();
  function Ye(a) {
    var c = et.get(a);
    if (c === void 0) {
      if (!jr.test(a))
        throw Error(M(65, a));
      c = D("<" + a), et.set(a, c);
    }
    return c;
  }
  var He = D("<!DOCTYPE html>");
  function sr(a, c, p, y, I) {
    switch (c) {
      case "select":
        a.push(Ye("select"));
        var E = null, A = null;
        for (te in p)
          if (U.call(p, te)) {
            var H = p[te];
            if (H != null)
              switch (te) {
                case "children":
                  E = H;
                  break;
                case "dangerouslySetInnerHTML":
                  A = H;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  ze(a, y, te, H);
              }
          }
        return a.push(Je), wt(a, A, E), E;
      case "option":
        A = I.selectedValue, a.push(Ye("option"));
        var J = H = null, ae = null, te = null;
        for (E in p)
          if (U.call(p, E)) {
            var Re = p[E];
            if (Re != null)
              switch (E) {
                case "children":
                  H = Re;
                  break;
                case "selected":
                  ae = Re;
                  break;
                case "dangerouslySetInnerHTML":
                  te = Re;
                  break;
                case "value":
                  J = Re;
                default:
                  ze(a, y, E, Re);
              }
          }
        if (A != null)
          if (p = J !== null ? "" + J : Cr(H), Tt(A)) {
            for (y = 0; y < A.length; y++)
              if ("" + A[y] === p) {
                a.push(lt);
                break;
              }
          } else
            "" + A === p && a.push(lt);
        else
          ae && a.push(lt);
        return a.push(Je), wt(a, te, H), H;
      case "textarea":
        a.push(Ye("textarea")), te = A = E = null;
        for (H in p)
          if (U.call(p, H) && (J = p[H], J != null))
            switch (H) {
              case "children":
                te = J;
                break;
              case "value":
                E = J;
                break;
              case "defaultValue":
                A = J;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(M(91));
              default:
                ze(a, y, H, J);
            }
        if (E === null && A !== null && (E = A), a.push(Je), te != null) {
          if (E != null)
            throw Error(M(92));
          if (Tt(te) && 1 < te.length)
            throw Error(M(93));
          E = "" + te;
        }
        return typeof E == "string" && E[0] === `
` && a.push(qt), E !== null && a.push(T(ue("" + E))), null;
      case "input":
        a.push(Ye("input")), J = te = H = E = null;
        for (A in p)
          if (U.call(p, A) && (ae = p[A], ae != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(M(399, "input"));
              case "defaultChecked":
                J = ae;
                break;
              case "defaultValue":
                H = ae;
                break;
              case "checked":
                te = ae;
                break;
              case "value":
                E = ae;
                break;
              default:
                ze(a, y, A, ae);
            }
        return te !== null ? ze(
          a,
          y,
          "checked",
          te
        ) : J !== null && ze(a, y, "checked", J), E !== null ? ze(a, y, "value", E) : H !== null && ze(a, y, "value", H), a.push(Pt), null;
      case "menuitem":
        a.push(Ye("menuitem"));
        for (var mt in p)
          if (U.call(p, mt) && (E = p[mt], E != null))
            switch (mt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(M(400));
              default:
                ze(a, y, mt, E);
            }
        return a.push(Je), null;
      case "title":
        a.push(Ye("title")), E = null;
        for (Re in p)
          if (U.call(p, Re) && (A = p[Re], A != null))
            switch (Re) {
              case "children":
                E = A;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(M(434));
              default:
                ze(a, y, Re, A);
            }
        return a.push(Je), E;
      case "listing":
      case "pre":
        a.push(Ye(c)), A = E = null;
        for (J in p)
          if (U.call(p, J) && (H = p[J], H != null))
            switch (J) {
              case "children":
                E = H;
                break;
              case "dangerouslySetInnerHTML":
                A = H;
                break;
              default:
                ze(a, y, J, H);
            }
        if (a.push(Je), A != null) {
          if (E != null)
            throw Error(M(60));
          if (typeof A != "object" || !("__html" in A))
            throw Error(M(61));
          p = A.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? a.push(qt, T(p)) : a.push(T("" + p)));
        }
        return typeof E == "string" && E[0] === `
` && a.push(qt), E;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(Ye(c));
        for (var Mt in p)
          if (U.call(p, Mt) && (E = p[Mt], E != null))
            switch (Mt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(M(399, c));
              default:
                ze(a, y, Mt, E);
            }
        return a.push(Pt), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return xt(a, p, c, y);
      case "html":
        return I.insertionMode === 0 && a.push(He), xt(a, p, c, y);
      default:
        if (c.indexOf("-") === -1 && typeof p.is != "string")
          return xt(a, p, c, y);
        a.push(Ye(c)), A = E = null;
        for (ae in p)
          if (U.call(p, ae) && (H = p[ae], H != null))
            switch (ae) {
              case "children":
                E = H;
                break;
              case "dangerouslySetInnerHTML":
                A = H;
                break;
              case "style":
                bt(a, y, H);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                pe(ae) && typeof H != "function" && typeof H != "symbol" && a.push(Xe, T(ae), it, T(ue(H)), Ze);
            }
        return a.push(Je), wt(a, A, E), E;
    }
  }
  var ur = D("</"), _t = D(">"), Me = D('<template id="'), cr = D('"></template>'), Er = D("<!--$-->"), fr = D('<!--$?--><template id="'), Tr = D('"></template>'), dr = D("<!--$!-->"), Kr = D("<!--/$-->"), Rr = D("<template"), Ht = D('"'), Ir = D(' data-dgst="');
  D(' data-msg="'), D(' data-stck="');
  var Hr = D("></template>");
  function Ge(a, c, p) {
    if (g(a, fr), p === null)
      throw Error(M(395));
    return g(a, p), Q(a, Tr);
  }
  var dt = D('<div hidden id="'), tt = D('">'), fe = D("</div>"), kt = D('<svg aria-hidden="true" style="display:none" id="'), er = D('">'), tr = D("</svg>"), pt = D('<math aria-hidden="true" style="display:none" id="'), pr = D('">'), Ct = D("</math>"), Ie = D('<table hidden id="'), Pr = D('">'), _r = D("</table>"), Fr = D('<table hidden><tbody id="'), Oe = D('">'), Dr = D("</tbody></table>"), qr = D('<table hidden><tr id="'), en = D('">'), w = D("</tr></table>"), B = D('<table hidden><colgroup id="'), z = D('">'), X = D("</colgroup></table>");
  function oe(a, c, p, y) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return g(a, dt), g(a, c.segmentPrefix), g(a, T(y.toString(16))), Q(a, tt);
      case 2:
        return g(a, kt), g(a, c.segmentPrefix), g(a, T(y.toString(16))), Q(a, er);
      case 3:
        return g(a, pt), g(a, c.segmentPrefix), g(a, T(y.toString(16))), Q(a, pr);
      case 4:
        return g(a, Ie), g(a, c.segmentPrefix), g(a, T(y.toString(16))), Q(a, Pr);
      case 5:
        return g(a, Fr), g(a, c.segmentPrefix), g(a, T(y.toString(16))), Q(a, Oe);
      case 6:
        return g(a, qr), g(a, c.segmentPrefix), g(a, T(y.toString(16))), Q(a, en);
      case 7:
        return g(
          a,
          B
        ), g(a, c.segmentPrefix), g(a, T(y.toString(16))), Q(a, z);
      default:
        throw Error(M(397));
    }
  }
  function se(a, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return Q(a, fe);
      case 2:
        return Q(a, tr);
      case 3:
        return Q(a, Ct);
      case 4:
        return Q(a, _r);
      case 5:
        return Q(a, Dr);
      case 6:
        return Q(a, w);
      case 7:
        return Q(a, X);
      default:
        throw Error(M(397));
    }
  }
  var ie = D('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), q = D('$RS("'), Le = D('","'), ge = D('")<\/script>'), me = D('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), _e = D('$RC("'), st = D('","'), Wt = D('")<\/script>'), Be = D('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ue = D('$RX("'), zt = D('"'), Ft = D(")<\/script>"), Qe = D(","), Wr = /[<\u2028\u2029]/g;
  function $t(a) {
    return JSON.stringify(a).replace(Wr, function(c) {
      switch (c) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var Nt = Object.assign, ut = Symbol.for("react.element"), rr = Symbol.for("react.portal"), hr = Symbol.for("react.fragment"), tn = Symbol.for("react.strict_mode"), rn = Symbol.for("react.profiler"), zr = Symbol.for("react.provider"), vr = Symbol.for("react.context"), nn = Symbol.for("react.forward_ref"), $r = Symbol.for("react.suspense"), Nr = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), h = Symbol.for("react.scope"), m = Symbol.for("react.debug_trace_mode"), R = Symbol.for("react.legacy_hidden"), C = Symbol.for("react.default_value"), F = Symbol.iterator;
  function j(a) {
    if (a == null)
      return null;
    if (typeof a == "function")
      return a.displayName || a.name || null;
    if (typeof a == "string")
      return a;
    switch (a) {
      case hr:
        return "Fragment";
      case rr:
        return "Portal";
      case rn:
        return "Profiler";
      case tn:
        return "StrictMode";
      case $r:
        return "Suspense";
      case Nr:
        return "SuspenseList";
    }
    if (typeof a == "object")
      switch (a.$$typeof) {
        case vr:
          return (a.displayName || "Context") + ".Consumer";
        case zr:
          return (a._context.displayName || "Context") + ".Provider";
        case nn:
          var c = a.render;
          return a = a.displayName, a || (a = c.displayName || c.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
        case o:
          return c = a.displayName || null, c !== null ? c : j(a.type) || "Memo";
        case u:
          c = a._payload, a = a._init;
          try {
            return j(a(c));
          } catch {
          }
      }
    return null;
  }
  var V = {};
  function Z(a, c) {
    if (a = a.contextTypes, !a)
      return V;
    var p = {}, y;
    for (y in a)
      p[y] = c[y];
    return p;
  }
  var G = null;
  function he(a, c) {
    if (a !== c) {
      a.context._currentValue = a.parentValue, a = a.parent;
      var p = c.parent;
      if (a === null) {
        if (p !== null)
          throw Error(M(401));
      } else {
        if (p === null)
          throw Error(M(401));
        he(a, p);
      }
      c.context._currentValue = c.value;
    }
  }
  function ht(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && ht(a);
  }
  function rt(a) {
    var c = a.parent;
    c !== null && rt(c), a.context._currentValue = a.value;
  }
  function nt(a, c) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null)
      throw Error(M(402));
    a.depth === c.depth ? he(a, c) : nt(a, c);
  }
  function nr(a, c) {
    var p = c.parent;
    if (p === null)
      throw Error(M(402));
    a.depth === p.depth ? he(a, p) : nr(a, p), c.context._currentValue = c.value;
  }
  function Dt(a) {
    var c = G;
    c !== a && (c === null ? rt(a) : a === null ? ht(c) : c.depth === a.depth ? he(c, a) : c.depth > a.depth ? nt(c, a) : nr(c, a), G = a);
  }
  var Vr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, c) {
    a = a._reactInternals, a.queue !== null && a.queue.push(c);
  }, enqueueReplaceState: function(a, c) {
    a = a._reactInternals, a.replace = !0, a.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function gr(a, c, p, y) {
    var I = a.state !== void 0 ? a.state : null;
    a.updater = Vr, a.props = p, a.state = I;
    var E = { queue: [], replace: !1 };
    a._reactInternals = E;
    var A = c.contextType;
    if (a.context = typeof A == "object" && A !== null ? A._currentValue : y, A = c.getDerivedStateFromProps, typeof A == "function" && (A = A(p, I), I = A == null ? I : Nt({}, I, A), a.state = I), typeof c.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function"))
      if (c = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), c !== a.state && Vr.enqueueReplaceState(a, a.state, null), E.queue !== null && 0 < E.queue.length)
        if (c = E.queue, A = E.replace, E.queue = null, E.replace = !1, A && c.length === 1)
          a.state = c[0];
        else {
          for (E = A ? c[0] : a.state, I = !0, A = A ? 1 : 0; A < c.length; A++) {
            var H = c[A];
            H = typeof H == "function" ? H.call(a, E, p, y) : H, H != null && (I ? (I = !1, E = Nt({}, E, H)) : Nt(E, H));
          }
          a.state = E;
        }
      else
        E.queue = null;
  }
  var Ar = { id: 1, overflow: "" };
  function or(a, c, p) {
    var y = a.id;
    a = a.overflow;
    var I = 32 - on(y) - 1;
    y &= ~(1 << I), p += 1;
    var E = 32 - on(c) + I;
    if (30 < E) {
      var A = I - I % 5;
      return E = (y & (1 << A) - 1).toString(32), y >>= A, I -= A, { id: 1 << 32 - on(c) + I | p << I | y, overflow: E + a };
    }
    return { id: 1 << E | p << I | y, overflow: a };
  }
  var on = Math.clz32 ? Math.clz32 : Hn, wa = Math.log, xa = Math.LN2;
  function Hn(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (wa(a) / xa | 0) | 0;
  }
  function ka(a, c) {
    return a === c && (a !== 0 || 1 / a === 1 / c) || a !== a && c !== c;
  }
  var Wn = typeof Object.is == "function" ? Object.is : ka, ar = null, an = null, bn = null, we = null, mr = !1, vt = !1, Mr = 0, yr = null, wn = 0;
  function Sr() {
    if (ar === null)
      throw Error(M(321));
    return ar;
  }
  function At() {
    if (0 < wn)
      throw Error(M(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function zn() {
    return we === null ? bn === null ? (mr = !1, bn = we = At()) : (mr = !0, we = bn) : we.next === null ? (mr = !1, we = we.next = At()) : (mr = !0, we = we.next), we;
  }
  function $n() {
    an = ar = null, vt = !1, bn = null, wn = 0, we = yr = null;
  }
  function Co(a, c) {
    return typeof c == "function" ? c(a) : c;
  }
  function Eo(a, c, p) {
    if (ar = Sr(), we = zn(), mr) {
      var y = we.queue;
      if (c = y.dispatch, yr !== null && (p = yr.get(y), p !== void 0)) {
        yr.delete(y), y = we.memoizedState;
        do
          y = a(y, p.action), p = p.next;
        while (p !== null);
        return we.memoizedState = y, [y, c];
      }
      return [we.memoizedState, c];
    }
    return a = a === Co ? typeof c == "function" ? c() : c : p !== void 0 ? p(c) : c, we.memoizedState = a, a = we.queue = { last: null, dispatch: null }, a = a.dispatch = Ca.bind(null, ar, a), [we.memoizedState, a];
  }
  function To(a, c) {
    if (ar = Sr(), we = zn(), c = c === void 0 ? null : c, we !== null) {
      var p = we.memoizedState;
      if (p !== null && c !== null) {
        var y = p[1];
        e:
          if (y === null)
            y = !1;
          else {
            for (var I = 0; I < y.length && I < c.length; I++)
              if (!Wn(c[I], y[I])) {
                y = !1;
                break e;
              }
            y = !0;
          }
        if (y)
          return p[0];
      }
    }
    return a = a(), we.memoizedState = [a, c], a;
  }
  function Ca(a, c, p) {
    if (25 <= wn)
      throw Error(M(301));
    if (a === ar)
      if (vt = !0, a = { action: p, next: null }, yr === null && (yr = /* @__PURE__ */ new Map()), p = yr.get(c), p === void 0)
        yr.set(c, a);
      else {
        for (c = p; c.next !== null; )
          c = c.next;
        c.next = a;
      }
  }
  function Ea() {
    throw Error(M(394));
  }
  function xn() {
  }
  var kn = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return Sr(), a._currentValue;
  }, useMemo: To, useReducer: Eo, useRef: function(a) {
    ar = Sr(), we = zn();
    var c = we.memoizedState;
    return c === null ? (a = { current: a }, we.memoizedState = a) : c;
  }, useState: function(a) {
    return Eo(Co, a);
  }, useInsertionEffect: xn, useLayoutEffect: function() {
  }, useCallback: function(a, c) {
    return To(function() {
      return a;
    }, c);
  }, useImperativeHandle: xn, useEffect: xn, useDebugValue: xn, useDeferredValue: function(a) {
    return Sr(), a;
  }, useTransition: function() {
    return Sr(), [!1, Ea];
  }, useId: function() {
    var a = an.treeContext, c = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - on(a) - 1)).toString(32) + c;
    var p = Cn;
    if (p === null)
      throw Error(M(404));
    return c = Mr++, a = ":" + p.idPrefix + "R" + a, 0 < c && (a += "H" + c.toString(32)), a + ":";
  }, useMutableSource: function(a, c) {
    return Sr(), c(a._source);
  }, useSyncExternalStore: function(a, c, p) {
    if (p === void 0)
      throw Error(M(407));
    return p();
  } }, Cn = null, ln = de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ta(a) {
    return console.error(a), null;
  }
  function sn() {
  }
  function Nn(a, c, p, y, I, E, A, H, J) {
    var ae = [], te = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: y === void 0 ? 12800 : y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: te, pingedTasks: ae, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: I === void 0 ? Ta : I, onAllReady: E === void 0 ? sn : E, onShellReady: A === void 0 ? sn : A, onShellError: H === void 0 ? sn : H, onFatalError: J === void 0 ? sn : J }, p = Yr(c, 0, null, p, !1, !1), p.parentFlushed = !0, a = Vn(c, a, null, p, te, V, null, Ar), ae.push(a), c;
  }
  function Vn(a, c, p, y, I, E, A, H) {
    a.allPendingTasks++, p === null ? a.pendingRootTasks++ : p.pendingTasks++;
    var J = { node: c, ping: function() {
      var ae = a.pingedTasks;
      ae.push(J), ae.length === 1 && Do(a);
    }, blockedBoundary: p, blockedSegment: y, abortSet: I, legacyContext: E, context: A, treeContext: H };
    return I.add(J), J;
  }
  function Yr(a, c, p, y, I, E) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: y, boundary: p, lastPushedText: I, textEmbedded: E };
  }
  function Gr(a, c) {
    if (a = a.onError(c), a != null && typeof a != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function En(a, c) {
    var p = a.onShellError;
    p(c), p = a.onFatalError, p(c), a.destination !== null ? (a.status = 2, Pe(a.destination, c)) : (a.status = 1, a.fatalError = c);
  }
  function Ro(a, c, p, y, I) {
    for (ar = {}, an = c, Mr = 0, a = p(y, I); vt; )
      vt = !1, Mr = 0, wn += 1, we = null, a = p(y, I);
    return $n(), a;
  }
  function Yn(a, c, p, y) {
    var I = p.render(), E = y.childContextTypes;
    if (E != null) {
      var A = c.legacyContext;
      if (typeof p.getChildContext != "function")
        y = A;
      else {
        p = p.getChildContext();
        for (var H in p)
          if (!(H in E))
            throw Error(M(108, j(y) || "Unknown", H));
        y = Nt({}, A, p);
      }
      c.legacyContext = y, gt(a, c, I), c.legacyContext = A;
    } else
      gt(a, c, I);
  }
  function Io(a, c) {
    if (a && a.defaultProps) {
      c = Nt({}, c), a = a.defaultProps;
      for (var p in a)
        c[p] === void 0 && (c[p] = a[p]);
      return c;
    }
    return c;
  }
  function Tn(a, c, p, y, I) {
    if (typeof p == "function")
      if (p.prototype && p.prototype.isReactComponent) {
        I = Z(p, c.legacyContext);
        var E = p.contextType;
        E = new p(y, typeof E == "object" && E !== null ? E._currentValue : I), gr(E, p, y, I), Yn(a, c, E, p);
      } else {
        E = Z(p, c.legacyContext), I = Ro(a, c, p, y, E);
        var A = Mr !== 0;
        if (typeof I == "object" && I !== null && typeof I.render == "function" && I.$$typeof === void 0)
          gr(I, p, y, E), Yn(a, c, I, p);
        else if (A) {
          y = c.treeContext, c.treeContext = or(y, 1, 0);
          try {
            gt(a, c, I);
          } finally {
            c.treeContext = y;
          }
        } else
          gt(a, c, I);
      }
    else if (typeof p == "string") {
      switch (I = c.blockedSegment, E = sr(I.chunks, p, y, a.responseState, I.formatContext), I.lastPushedText = !1, A = I.formatContext, I.formatContext = Ce(A, p, y), Rn(a, c, E), I.formatContext = A, p) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          I.chunks.push(ur, T(p), _t);
      }
      I.lastPushedText = !1;
    } else {
      switch (p) {
        case R:
        case m:
        case tn:
        case rn:
        case hr:
          gt(a, c, y.children);
          return;
        case Nr:
          gt(a, c, y.children);
          return;
        case h:
          throw Error(M(343));
        case $r:
          e: {
            p = c.blockedBoundary, I = c.blockedSegment, E = y.fallback, y = y.children, A = /* @__PURE__ */ new Set();
            var H = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: A, errorDigest: null }, J = Yr(a, I.chunks.length, H, I.formatContext, !1, !1);
            I.children.push(J), I.lastPushedText = !1;
            var ae = Yr(a, 0, null, I.formatContext, !1, !1);
            ae.parentFlushed = !0, c.blockedBoundary = H, c.blockedSegment = ae;
            try {
              if (Rn(
                a,
                c,
                y
              ), ae.lastPushedText && ae.textEmbedded && ae.chunks.push(Ee), ae.status = 1, In(H, ae), H.pendingTasks === 0)
                break e;
            } catch (te) {
              ae.status = 4, H.forceClientRender = !0, H.errorDigest = Gr(a, te);
            } finally {
              c.blockedBoundary = p, c.blockedSegment = I;
            }
            c = Vn(a, E, p, J, A, c.legacyContext, c.context, c.treeContext), a.pingedTasks.push(c);
          }
          return;
      }
      if (typeof p == "object" && p !== null)
        switch (p.$$typeof) {
          case nn:
            if (y = Ro(a, c, p.render, y, I), Mr !== 0) {
              p = c.treeContext, c.treeContext = or(p, 1, 0);
              try {
                gt(a, c, y);
              } finally {
                c.treeContext = p;
              }
            } else
              gt(a, c, y);
            return;
          case o:
            p = p.type, y = Io(p, y), Tn(a, c, p, y, I);
            return;
          case zr:
            if (I = y.children, p = p._context, y = y.value, E = p._currentValue, p._currentValue = y, A = G, G = y = { parent: A, depth: A === null ? 0 : A.depth + 1, context: p, parentValue: E, value: y }, c.context = y, gt(a, c, I), a = G, a === null)
              throw Error(M(403));
            y = a.parentValue, a.context._currentValue = y === C ? a.context._defaultValue : y, a = G = a.parent, c.context = a;
            return;
          case vr:
            y = y.children, y = y(p._currentValue), gt(a, c, y);
            return;
          case u:
            I = p._init, p = I(p._payload), y = Io(p, y), Tn(a, c, p, y, void 0);
            return;
        }
      throw Error(M(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function gt(a, c, p) {
    if (c.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ut:
          Tn(a, c, p.type, p.props, p.ref);
          return;
        case rr:
          throw Error(M(257));
        case u:
          var y = p._init;
          p = y(p._payload), gt(a, c, p);
          return;
      }
      if (Tt(p)) {
        Po(a, c, p);
        return;
      }
      if (p === null || typeof p != "object" ? y = null : (y = F && p[F] || p["@@iterator"], y = typeof y == "function" ? y : null), y && (y = y.call(p))) {
        if (p = y.next(), !p.done) {
          var I = [];
          do
            I.push(p.value), p = y.next();
          while (!p.done);
          Po(a, c, I);
        }
        return;
      }
      throw a = Object.prototype.toString.call(p), Error(M(31, a === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : a));
    }
    typeof p == "string" ? (y = c.blockedSegment, y.lastPushedText = Qt(c.blockedSegment.chunks, p, a.responseState, y.lastPushedText)) : typeof p == "number" && (y = c.blockedSegment, y.lastPushedText = Qt(c.blockedSegment.chunks, "" + p, a.responseState, y.lastPushedText));
  }
  function Po(a, c, p) {
    for (var y = p.length, I = 0; I < y; I++) {
      var E = c.treeContext;
      c.treeContext = or(E, y, I);
      try {
        Rn(a, c, p[I]);
      } finally {
        c.treeContext = E;
      }
    }
  }
  function Rn(a, c, p) {
    var y = c.blockedSegment.formatContext, I = c.legacyContext, E = c.context;
    try {
      return gt(a, c, p);
    } catch (J) {
      if ($n(), typeof J == "object" && J !== null && typeof J.then == "function") {
        p = J;
        var A = c.blockedSegment, H = Yr(a, A.chunks.length, null, A.formatContext, A.lastPushedText, !0);
        A.children.push(H), A.lastPushedText = !1, a = Vn(a, c.node, c.blockedBoundary, H, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, p.then(a, a), c.blockedSegment.formatContext = y, c.legacyContext = I, c.context = E, Dt(E);
      } else
        throw c.blockedSegment.formatContext = y, c.legacyContext = I, c.context = E, Dt(E), J;
    }
  }
  function Ra(a) {
    var c = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Fo(this, c, a);
  }
  function _o(a, c, p) {
    var y = a.blockedBoundary;
    a.blockedSegment.status = 3, y === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (y.pendingTasks--, y.forceClientRender || (y.forceClientRender = !0, a = p === void 0 ? Error(M(432)) : p, y.errorDigest = c.onError(a), y.parentFlushed && c.clientRenderedBoundaries.push(y)), y.fallbackAbortableTasks.forEach(function(I) {
      return _o(I, c, p);
    }), y.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (y = c.onAllReady, y()));
  }
  function In(a, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var p = c.children[0];
      p.id = c.id, p.parentFlushed = !0, p.status === 1 && In(a, p);
    } else
      a.completedSegments.push(c);
  }
  function Fo(a, c, p) {
    if (c === null) {
      if (p.parentFlushed) {
        if (a.completedRootSegment !== null)
          throw Error(M(389));
        a.completedRootSegment = p;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = sn, c = a.onShellReady, c());
    } else
      c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && In(c, p), c.parentFlushed && a.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(Ra, a), c.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (In(c, p), c.completedSegments.length === 1 && c.parentFlushed && a.partialBoundaries.push(c)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function Do(a) {
    if (a.status !== 2) {
      var c = G, p = ln.current;
      ln.current = kn;
      var y = Cn;
      Cn = a.responseState;
      try {
        var I = a.pingedTasks, E;
        for (E = 0; E < I.length; E++) {
          var A = I[E], H = a, J = A.blockedSegment;
          if (J.status === 0) {
            Dt(A.context);
            try {
              gt(H, A, A.node), J.lastPushedText && J.textEmbedded && J.chunks.push(Ee), A.abortSet.delete(A), J.status = 1, Fo(H, A.blockedBoundary, J);
            } catch (Ot) {
              if ($n(), typeof Ot == "object" && Ot !== null && typeof Ot.then == "function") {
                var ae = A.ping;
                Ot.then(ae, ae);
              } else {
                A.abortSet.delete(A), J.status = 4;
                var te = A.blockedBoundary, Re = Ot, mt = Gr(H, Re);
                if (te === null ? En(H, Re) : (te.pendingTasks--, te.forceClientRender || (te.forceClientRender = !0, te.errorDigest = mt, te.parentFlushed && H.clientRenderedBoundaries.push(te))), H.allPendingTasks--, H.allPendingTasks === 0) {
                  var Mt = H.onAllReady;
                  Mt();
                }
              }
            } finally {
            }
          }
        }
        I.splice(0, E), a.destination !== null && Gn(a, a.destination);
      } catch (Ot) {
        Gr(a, Ot), En(a, Ot);
      } finally {
        Cn = y, ln.current = p, p === kn && Dt(c);
      }
    }
  }
  function Pn(a, c, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var y = p.id = a.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, a = a.responseState, g(c, Me), g(c, a.placeholderPrefix), a = T(y.toString(16)), g(c, a), Q(c, cr);
      case 1:
        p.status = 2;
        var I = !0;
        y = p.chunks;
        var E = 0;
        p = p.children;
        for (var A = 0; A < p.length; A++) {
          for (I = p[A]; E < I.index; E++)
            g(c, y[E]);
          I = _n(a, c, I);
        }
        for (; E < y.length - 1; E++)
          g(c, y[E]);
        return E < y.length && (I = Q(c, y[E])), I;
      default:
        throw Error(M(390));
    }
  }
  function _n(a, c, p) {
    var y = p.boundary;
    if (y === null)
      return Pn(a, c, p);
    if (y.parentFlushed = !0, y.forceClientRender)
      y = y.errorDigest, Q(c, dr), g(c, Rr), y && (g(c, Ir), g(c, T(ue(y))), g(c, Ht)), Q(c, Hr), Pn(a, c, p);
    else if (0 < y.pendingTasks) {
      y.rootSegmentID = a.nextSegmentId++, 0 < y.completedSegments.length && a.partialBoundaries.push(y);
      var I = a.responseState, E = I.nextSuspenseID++;
      I = D(I.boundaryPrefix + E.toString(16)), y = y.id = I, Ge(c, a.responseState, y), Pn(a, c, p);
    } else if (y.byteSize > a.progressiveChunkSize)
      y.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(y), Ge(c, a.responseState, y.id), Pn(a, c, p);
    else {
      if (Q(c, Er), p = y.completedSegments, p.length !== 1)
        throw Error(M(391));
      _n(a, c, p[0]);
    }
    return Q(c, Kr);
  }
  function Ao(a, c, p) {
    return oe(c, a.responseState, p.formatContext, p.id), _n(a, c, p), se(c, p.formatContext);
  }
  function Mo(a, c, p) {
    for (var y = p.completedSegments, I = 0; I < y.length; I++)
      Oo(a, c, p, y[I]);
    if (y.length = 0, a = a.responseState, y = p.id, p = p.rootSegmentID, g(c, a.startInlineScript), a.sentCompleteBoundaryFunction ? g(c, _e) : (a.sentCompleteBoundaryFunction = !0, g(c, me)), y === null)
      throw Error(M(395));
    return p = T(p.toString(16)), g(c, y), g(c, st), g(c, a.segmentPrefix), g(c, p), Q(c, Wt);
  }
  function Oo(a, c, p, y) {
    if (y.status === 2)
      return !0;
    var I = y.id;
    if (I === -1) {
      if ((y.id = p.rootSegmentID) === -1)
        throw Error(M(392));
      return Ao(a, c, y);
    }
    return Ao(a, c, y), a = a.responseState, g(c, a.startInlineScript), a.sentCompleteSegmentFunction ? g(c, q) : (a.sentCompleteSegmentFunction = !0, g(c, ie)), g(c, a.segmentPrefix), I = T(I.toString(16)), g(c, I), g(c, Le), g(c, a.placeholderPrefix), g(c, I), Q(c, ge);
  }
  function Gn(a, c) {
    N = new Uint8Array(512), ce = 0;
    try {
      var p = a.completedRootSegment;
      if (p !== null && a.pendingRootTasks === 0) {
        _n(a, c, p), a.completedRootSegment = null;
        var y = a.responseState.bootstrapChunks;
        for (p = 0; p < y.length - 1; p++)
          g(c, y[p]);
        p < y.length && Q(c, y[p]);
      }
      var I = a.clientRenderedBoundaries, E;
      for (E = 0; E < I.length; E++) {
        var A = I[E];
        y = c;
        var H = a.responseState, J = A.id, ae = A.errorDigest, te = A.errorMessage, Re = A.errorComponentStack;
        if (g(y, H.startInlineScript), H.sentClientRenderFunction ? g(y, Ue) : (H.sentClientRenderFunction = !0, g(
          y,
          Be
        )), J === null)
          throw Error(M(395));
        g(y, J), g(y, zt), (ae || te || Re) && (g(y, Qe), g(y, T($t(ae || "")))), (te || Re) && (g(y, Qe), g(y, T($t(te || "")))), Re && (g(y, Qe), g(y, T($t(Re)))), Q(y, Ft);
      }
      I.splice(0, E);
      var mt = a.completedBoundaries;
      for (E = 0; E < mt.length; E++)
        Mo(a, c, mt[E]);
      mt.splice(0, E), xe(c), N = new Uint8Array(512), ce = 0;
      var Mt = a.partialBoundaries;
      for (E = 0; E < Mt.length; E++) {
        var Ot = Mt[E];
        e: {
          I = a, A = c;
          var Fn = Ot.completedSegments;
          for (H = 0; H < Fn.length; H++)
            if (!Oo(
              I,
              A,
              Ot,
              Fn[H]
            )) {
              H++, Fn.splice(0, H);
              var Bo = !1;
              break e;
            }
          Fn.splice(0, H), Bo = !0;
        }
        if (!Bo) {
          a.destination = null, E++, Mt.splice(0, E);
          return;
        }
      }
      Mt.splice(0, E);
      var Xn = a.completedBoundaries;
      for (E = 0; E < Xn.length; E++)
        Mo(a, c, Xn[E]);
      Xn.splice(0, E);
    } finally {
      xe(c), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && c.close();
    }
  }
  function Lo(a, c) {
    try {
      var p = a.abortableTasks;
      p.forEach(function(y) {
        return _o(y, a, c);
      }), p.clear(), a.destination !== null && Gn(a, a.destination);
    } catch (y) {
      Gr(a, y), En(a, y);
    }
  }
  return cl.renderToReadableStream = function(a, c) {
    return new Promise(function(p, y) {
      var I, E, A = new Promise(function(te, Re) {
        E = te, I = Re;
      }), H = Nn(a, ft(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), Jt(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, E, function() {
        var te = new ReadableStream({ type: "bytes", pull: function(Re) {
          if (H.status === 1)
            H.status = 2, Pe(Re, H.fatalError);
          else if (H.status !== 2 && H.destination === null) {
            H.destination = Re;
            try {
              Gn(H, Re);
            } catch (mt) {
              Gr(H, mt), En(H, mt);
            }
          }
        }, cancel: function() {
          Lo(H);
        } }, { highWaterMark: 0 });
        te.allReady = A, p(te);
      }, function(te) {
        A.catch(function() {
        }), y(te);
      }, I);
      if (c && c.signal) {
        var J = c.signal, ae = function() {
          Lo(H, J.reason), J.removeEventListener("abort", ae);
        };
        J.addEventListener("abort", ae);
      }
      Do(H);
    });
  }, cl.version = "18.2.0", cl;
}
var xo = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps;
function Ts() {
  return ps || (ps = 1, process.env.NODE_ENV !== "production" && function() {
    var de = Et, M = "18.2.0", N = de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ce(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          i[s - 1] = arguments[s];
        Q("warn", e, i);
      }
    }
    function g(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          i[s - 1] = arguments[s];
        Q("error", e, i);
      }
    }
    function Q(e, r, i) {
      {
        var s = N.ReactDebugCurrentFrame, d = s.getStackAddendum();
        d !== "" && (r += "%s", i = i.concat([d]));
        var S = i.map(function(x) {
          return String(x);
        });
        S.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, S);
      }
    }
    function xe(e) {
      e();
    }
    function le(e) {
    }
    function T(e, r) {
      D(e, r);
    }
    function D(e, r) {
      return e.push(r);
    }
    function Pe(e) {
    }
    function U(e) {
      e.push(null);
    }
    function re(e) {
      return e;
    }
    function yt(e) {
      return e;
    }
    function ke(e, r) {
      e.destroy(r);
    }
    function pe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function W(e) {
      try {
        return O(e), !1;
      } catch {
        return !0;
      }
    }
    function O(e) {
      return "" + e;
    }
    function ne(e, r) {
      if (W(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", r, pe(e)), O(e);
    }
    function qe(e, r) {
      if (W(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", r, pe(e)), O(e);
    }
    function De(e) {
      if (W(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", pe(e)), O(e);
    }
    var ee = Object.prototype.hasOwnProperty, ye = 0, ue = 1, St = 2, Se = 3, Tt = 4, ct = 5, $e = 6, Ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ve = Ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Rt = new RegExp("^[" + Ne + "][" + Ve + "]*$"), ir = {}, lr = {};
    function ft(e) {
      return ee.call(lr, e) ? !0 : ee.call(ir, e) ? !1 : Rt.test(e) ? (lr[e] = !0, !0) : (ir[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Ke(e, r, i, s) {
      if (i !== null && i.type === ye)
        return !1;
      switch (typeof r) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (s)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var d = e.toLowerCase().slice(0, 5);
          return d !== "data-" && d !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Jt(e) {
      return Ee.hasOwnProperty(e) ? Ee[e] : null;
    }
    function Ce(e, r, i, s, d, S, x) {
      this.acceptsBooleans = r === St || r === Se || r === Tt, this.attributeName = s, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = r, this.sanitizeURL = S, this.removeEmptyString = x;
    }
    var Ee = {}, Qt = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Qt.forEach(function(e) {
      Ee[e] = new Ce(
        e,
        ye,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var r = e[0], i = e[1];
      Ee[r] = new Ce(
        r,
        ue,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Ee[e] = new Ce(
        e,
        St,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Ee[e] = new Ce(
        e,
        St,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Ee[e] = new Ce(
        e,
        Se,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ee[e] = new Ce(
        e,
        Se,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ee[e] = new Ce(
        e,
        Tt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ee[e] = new Ce(
        e,
        $e,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Ee[e] = new Ce(
        e,
        ct,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var jt = /[\-\:]([a-z])/g, Ae = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var r = e.replace(jt, Ae);
      Ee[r] = new Ce(
        r,
        ue,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var r = e.replace(jt, Ae);
      Ee[r] = new Ce(
        r,
        ue,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var r = e.replace(jt, Ae);
      Ee[r] = new Ce(
        r,
        ue,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ee[e] = new Ce(
        e,
        ue,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Te = "xlinkHref";
    Ee[Te] = new Ce(
      "xlinkHref",
      ue,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ee[e] = new Ce(
        e,
        ue,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var It = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function bt(e, r) {
      return e + r.charAt(0).toUpperCase() + r.substring(1);
    }
    var Xe = ["Webkit", "ms", "Moz", "O"];
    Object.keys(It).forEach(function(e) {
      Xe.forEach(function(r) {
        It[bt(r, e)] = It[e];
      });
    });
    var it = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ze(e, r) {
      it[r.type] || r.onChange || r.onInput || r.readOnly || r.disabled || r.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), r.onChange || r.readOnly || r.disabled || r.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Kt(e, r) {
      if (e.indexOf("-") === -1)
        return typeof r.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ze = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Je = {}, Pt = new RegExp("^(aria)-[" + Ve + "]*$"), wt = new RegExp("^(aria)[A-Z][" + Ve + "]*$");
    function Cr(e, r) {
      {
        if (ee.call(Je, r) && Je[r])
          return !0;
        if (wt.test(r)) {
          var i = "aria-" + r.slice(4).toLowerCase(), s = ze.hasOwnProperty(i) ? i : null;
          if (s == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", r), Je[r] = !0, !0;
          if (r !== s)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", r, s), Je[r] = !0, !0;
        }
        if (Pt.test(r)) {
          var d = r.toLowerCase(), S = ze.hasOwnProperty(d) ? d : null;
          if (S == null)
            return Je[r] = !0, !1;
          if (r !== S)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", r, S), Je[r] = !0, !0;
        }
      }
      return !0;
    }
    function lt(e, r) {
      {
        var i = [];
        for (var s in r) {
          var d = Cr(e, s);
          d || i.push(s);
        }
        var S = i.map(function(x) {
          return "`" + x + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", S, e) : i.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", S, e);
      }
    }
    function xt(e, r) {
      Kt(e, r) || lt(e, r);
    }
    var qt = !1;
    function jr(e, r) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        r != null && r.value === null && !qt && (qt = !0, e === "select" && r.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var et = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Ye = function() {
    };
    {
      var He = {}, sr = /^on./, ur = /^on[^A-Z]/, _t = new RegExp("^(aria)-[" + Ve + "]*$"), Me = new RegExp("^(aria)[A-Z][" + Ve + "]*$");
      Ye = function(e, r, i, s) {
        if (ee.call(He, r) && He[r])
          return !0;
        var d = r.toLowerCase();
        if (d === "onfocusin" || d === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), He[r] = !0, !0;
        if (s != null) {
          var S = s.registrationNameDependencies, x = s.possibleRegistrationNames;
          if (S.hasOwnProperty(r))
            return !0;
          var P = x.hasOwnProperty(d) ? x[d] : null;
          if (P != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", r, P), He[r] = !0, !0;
          if (sr.test(r))
            return g("Unknown event handler property `%s`. It will be ignored.", r), He[r] = !0, !0;
        } else if (sr.test(r))
          return ur.test(r) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", r), He[r] = !0, !0;
        if (_t.test(r) || Me.test(r))
          return !0;
        if (d === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), He[r] = !0, !0;
        if (d === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), He[r] = !0, !0;
        if (d === "is" && i !== null && i !== void 0 && typeof i != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), He[r] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", r), He[r] = !0, !0;
        var L = Jt(r), $ = L !== null && L.type === ye;
        if (et.hasOwnProperty(d)) {
          var Y = et[d];
          if (Y !== r)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", r, Y), He[r] = !0, !0;
        } else if (!$ && r !== d)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", r, d), He[r] = !0, !0;
        return typeof i == "boolean" && Ke(r, i, L, !1) ? (i ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, r, r, i, r) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, r, r, i, r, r, r), He[r] = !0, !0) : $ ? !0 : Ke(r, i, L, !1) ? (He[r] = !0, !1) : ((i === "false" || i === "true") && L !== null && L.type === Se && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, r, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', r, i), He[r] = !0), !0);
      };
    }
    var cr = function(e, r, i) {
      {
        var s = [];
        for (var d in r) {
          var S = Ye(e, d, r[d], i);
          S || s.push(d);
        }
        var x = s.map(function(P) {
          return "`" + P + "`";
        }).join(", ");
        s.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", x, e) : s.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", x, e);
      }
    };
    function Er(e, r, i) {
      Kt(e, r) || cr(e, r, i);
    }
    var fr = function() {
    };
    {
      var Tr = /^(?:webkit|moz|o)[A-Z]/, dr = /^-ms-/, Kr = /-(.)/g, Rr = /;\s*$/, Ht = {}, Ir = {}, Hr = !1, Ge = !1, dt = function(e) {
        return e.replace(Kr, function(r, i) {
          return i.toUpperCase();
        });
      }, tt = function(e) {
        Ht.hasOwnProperty(e) && Ht[e] || (Ht[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          dt(e.replace(dr, "ms-"))
        ));
      }, fe = function(e) {
        Ht.hasOwnProperty(e) && Ht[e] || (Ht[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, kt = function(e, r) {
        Ir.hasOwnProperty(r) && Ir[r] || (Ir[r] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, r.replace(Rr, "")));
      }, er = function(e, r) {
        Hr || (Hr = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, tr = function(e, r) {
        Ge || (Ge = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      fr = function(e, r) {
        e.indexOf("-") > -1 ? tt(e) : Tr.test(e) ? fe(e) : Rr.test(r) && kt(e, r), typeof r == "number" && (isNaN(r) ? er(e, r) : isFinite(r) || tr(e, r));
      };
    }
    var pt = fr, pr = /["'&<>]/;
    function Ct(e) {
      De(e);
      var r = "" + e, i = pr.exec(r);
      if (!i)
        return r;
      var s, d = "", S, x = 0;
      for (S = i.index; S < r.length; S++) {
        switch (r.charCodeAt(S)) {
          case 34:
            s = "&quot;";
            break;
          case 38:
            s = "&amp;";
            break;
          case 39:
            s = "&#x27;";
            break;
          case 60:
            s = "&lt;";
            break;
          case 62:
            s = "&gt;";
            break;
          default:
            continue;
        }
        x !== S && (d += r.substring(x, S)), x = S + 1, d += s;
      }
      return x !== S ? d + r.substring(x, S) : d;
    }
    function Ie(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : Ct(e);
    }
    var Pr = /([A-Z])/g, _r = /^ms-/;
    function Fr(e) {
      return e.replace(Pr, "-$1").toLowerCase().replace(_r, "-ms-");
    }
    var Oe = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Dr = !1;
    function qr(e) {
      !Dr && Oe.test(e) && (Dr = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var en = Array.isArray;
    function w(e) {
      return en(e);
    }
    var B = "<script>", z = "<\/script>", X = '<script src="', oe = '<script type="module" src="', se = '" async=""><\/script>';
    function ie(e) {
      return De(e), ("" + e).replace(q, Le);
    }
    var q = /(<\/|<)(s)(cript)/gi, Le = function(e, r, i, s) {
      return "" + r + (i === "s" ? "\\u0073" : "\\u0053") + s;
    };
    function ge(e, r, i, s, d) {
      var S = e === void 0 ? "" : e, x = r === void 0 ? B : '<script nonce="' + Ie(r) + '">', P = [];
      if (i !== void 0 && P.push(x, ie(i), z), s !== void 0)
        for (var L = 0; L < s.length; L++)
          P.push(X, Ie(s[L]), se);
      if (d !== void 0)
        for (var $ = 0; $ < d.length; $++)
          P.push(oe, Ie(d[$]), se);
      return {
        bootstrapChunks: P,
        startInlineScript: x,
        placeholderPrefix: S + "P:",
        segmentPrefix: S + "S:",
        boundaryPrefix: S + "B:",
        idPrefix: S,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var me = 0, _e = 1, st = 2, Wt = 3, Be = 4, Ue = 5, zt = 6, Ft = 7;
    function Qe(e, r) {
      return {
        insertionMode: e,
        selectedValue: r
      };
    }
    function Wr(e, r, i) {
      switch (r) {
        case "select":
          return Qe(_e, i.value != null ? i.value : i.defaultValue);
        case "svg":
          return Qe(st, null);
        case "math":
          return Qe(Wt, null);
        case "foreignObject":
          return Qe(_e, null);
        case "table":
          return Qe(Be, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Qe(Ue, null);
        case "colgroup":
          return Qe(Ft, null);
        case "tr":
          return Qe(zt, null);
      }
      return e.insertionMode >= Be || e.insertionMode === me ? Qe(_e, null) : e;
    }
    var $t = null;
    function Nt(e) {
      var r = e.nextSuspenseID++;
      return e.boundaryPrefix + r.toString(16);
    }
    function ut(e, r, i) {
      var s = e.idPrefix, d = ":" + s + "R" + r;
      return i > 0 && (d += "H" + i.toString(32)), d + ":";
    }
    function rr(e) {
      return Ie(e);
    }
    var hr = "<!-- -->";
    function tn(e, r, i, s) {
      return r === "" ? s : (s && e.push(hr), e.push(rr(r)), !0);
    }
    function rn(e, r, i, s) {
      i && s && e.push(hr);
    }
    var zr = /* @__PURE__ */ new Map();
    function vr(e) {
      var r = zr.get(e);
      if (r !== void 0)
        return r;
      var i = Ie(Fr(e));
      return zr.set(e, i), i;
    }
    var nn = ' style="', $r = ":", Nr = ";";
    function o(e, r, i) {
      if (typeof i != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var s = !0;
      for (var d in i)
        if (ee.call(i, d)) {
          var S = i[d];
          if (!(S == null || typeof S == "boolean" || S === "")) {
            var x = void 0, P = void 0, L = d.indexOf("--") === 0;
            L ? (x = Ie(d), qe(S, d), P = Ie(("" + S).trim())) : (pt(d, S), x = vr(d), typeof S == "number" ? S !== 0 && !ee.call(It, d) ? P = S + "px" : P = "" + S : (qe(S, d), P = Ie(("" + S).trim()))), s ? (s = !1, e.push(nn, x, $r, P)) : e.push(Nr, x, $r, P);
          }
        }
      s || e.push(m);
    }
    var u = " ", h = '="', m = '"', R = '=""';
    function C(e, r, i, s) {
      switch (i) {
        case "style": {
          o(e, r, s);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(i.length > 2 && (i[0] === "o" || i[0] === "O") && (i[1] === "n" || i[1] === "N"))
      ) {
        var d = Jt(i);
        if (d !== null) {
          switch (typeof s) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!d.acceptsBooleans)
                return;
          }
          var S = d.attributeName, x = S;
          switch (d.type) {
            case Se:
              s && e.push(u, x, R);
              return;
            case Tt:
              s === !0 ? e.push(u, x, R) : s === !1 || e.push(u, x, h, Ie(s), m);
              return;
            case ct:
              isNaN(s) || e.push(u, x, h, Ie(s), m);
              break;
            case $e:
              !isNaN(s) && s >= 1 && e.push(u, x, h, Ie(s), m);
              break;
            default:
              d.sanitizeURL && (ne(s, S), s = "" + s, qr(s)), e.push(u, x, h, Ie(s), m);
          }
        } else if (ft(i)) {
          switch (typeof s) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var P = i.toLowerCase().slice(0, 5);
              if (P !== "data-" && P !== "aria-")
                return;
            }
          }
          e.push(u, i, h, Ie(s), m);
        }
      }
    }
    var F = ">", j = "/>";
    function V(e, r, i) {
      if (r != null) {
        if (i != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof r != "object" || !("__html" in r))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var s = r.__html;
        s != null && (De(s), e.push("" + s));
      }
    }
    var Z = !1, G = !1, he = !1, ht = !1, rt = !1, nt = !1, nr = !1;
    function Dt(e, r) {
      {
        var i = e[r];
        if (i != null) {
          var s = w(i);
          e.multiple && !s ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.", r) : !e.multiple && s && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", r);
        }
      }
    }
    function Vr(e, r, i) {
      Ze("select", r), Dt(r, "value"), Dt(r, "defaultValue"), r.value !== void 0 && r.defaultValue !== void 0 && !he && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), he = !0), e.push(vt("select"));
      var s = null, d = null;
      for (var S in r)
        if (ee.call(r, S)) {
          var x = r[S];
          if (x == null)
            continue;
          switch (S) {
            case "children":
              s = x;
              break;
            case "dangerouslySetInnerHTML":
              d = x;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              C(e, i, S, x);
              break;
          }
        }
      return e.push(F), V(e, d, s), s;
    }
    function gr(e) {
      var r = "";
      return de.Children.forEach(e, function(i) {
        i != null && (r += i, !rt && typeof i != "string" && typeof i != "number" && (rt = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), r;
    }
    var Ar = ' selected=""';
    function or(e, r, i, s) {
      var d = s.selectedValue;
      e.push(vt("option"));
      var S = null, x = null, P = null, L = null;
      for (var $ in r)
        if (ee.call(r, $)) {
          var Y = r[$];
          if (Y == null)
            continue;
          switch ($) {
            case "children":
              S = Y;
              break;
            case "selected":
              P = Y, nr || (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), nr = !0);
              break;
            case "dangerouslySetInnerHTML":
              L = Y;
              break;
            case "value":
              x = Y;
            default:
              C(e, i, $, Y);
              break;
          }
        }
      if (d != null) {
        var K;
        if (x !== null ? (ne(x, "value"), K = "" + x) : (L !== null && (nt || (nt = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), K = gr(S)), w(d))
          for (var Fe = 0; Fe < d.length; Fe++) {
            ne(d[Fe], "value");
            var at = "" + d[Fe];
            if (at === K) {
              e.push(Ar);
              break;
            }
          }
        else
          ne(d, "select.value"), "" + d === K && e.push(Ar);
      } else
        P && e.push(Ar);
      return e.push(F), V(e, L, S), S;
    }
    function on(e, r, i) {
      Ze("input", r), r.checked !== void 0 && r.defaultChecked !== void 0 && !G && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), G = !0), r.value !== void 0 && r.defaultValue !== void 0 && !Z && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), Z = !0), e.push(vt("input"));
      var s = null, d = null, S = null, x = null;
      for (var P in r)
        if (ee.call(r, P)) {
          var L = r[P];
          if (L == null)
            continue;
          switch (P) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              x = L;
              break;
            case "defaultValue":
              d = L;
              break;
            case "checked":
              S = L;
              break;
            case "value":
              s = L;
              break;
            default:
              C(e, i, P, L);
              break;
          }
        }
      return S !== null ? C(e, i, "checked", S) : x !== null && C(e, i, "checked", x), s !== null ? C(e, i, "value", s) : d !== null && C(e, i, "value", d), e.push(j), null;
    }
    function wa(e, r, i) {
      Ze("textarea", r), r.value !== void 0 && r.defaultValue !== void 0 && !ht && (g("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ht = !0), e.push(vt("textarea"));
      var s = null, d = null, S = null;
      for (var x in r)
        if (ee.call(r, x)) {
          var P = r[x];
          if (P == null)
            continue;
          switch (x) {
            case "children":
              S = P;
              break;
            case "value":
              s = P;
              break;
            case "defaultValue":
              d = P;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              C(e, i, x, P);
              break;
          }
        }
      if (s === null && d !== null && (s = d), e.push(F), S != null) {
        if (g("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), s != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (w(S)) {
          if (S.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          De(S[0]), s = "" + S[0];
        }
        De(S), s = "" + S;
      }
      return typeof s == "string" && s[0] === `
` && e.push(an), s !== null && (ne(s, "value"), e.push(rr("" + s))), null;
    }
    function xa(e, r, i, s) {
      e.push(vt(i));
      for (var d in r)
        if (ee.call(r, d)) {
          var S = r[d];
          if (S == null)
            continue;
          switch (d) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(i + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              C(e, s, d, S);
              break;
          }
        }
      return e.push(j), null;
    }
    function Hn(e, r, i) {
      e.push(vt("menuitem"));
      for (var s in r)
        if (ee.call(r, s)) {
          var d = r[s];
          if (d == null)
            continue;
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              C(e, i, s, d);
              break;
          }
        }
      return e.push(F), null;
    }
    function ka(e, r, i) {
      e.push(vt("title"));
      var s = null;
      for (var d in r)
        if (ee.call(r, d)) {
          var S = r[d];
          if (S == null)
            continue;
          switch (d) {
            case "children":
              s = S;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              C(e, i, d, S);
              break;
          }
        }
      e.push(F);
      {
        var x = Array.isArray(s) && s.length < 2 ? s[0] || null : s;
        Array.isArray(s) && s.length > 1 ? g("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : x != null && x.$$typeof != null ? g("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : x != null && typeof x != "string" && typeof x != "number" && g("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return s;
    }
    function Wn(e, r, i, s) {
      e.push(vt(i));
      var d = null, S = null;
      for (var x in r)
        if (ee.call(r, x)) {
          var P = r[x];
          if (P == null)
            continue;
          switch (x) {
            case "children":
              d = P;
              break;
            case "dangerouslySetInnerHTML":
              S = P;
              break;
            default:
              C(e, s, x, P);
              break;
          }
        }
      return e.push(F), V(e, S, d), typeof d == "string" ? (e.push(rr(d)), null) : d;
    }
    function ar(e, r, i, s) {
      e.push(vt(i));
      var d = null, S = null;
      for (var x in r)
        if (ee.call(r, x)) {
          var P = r[x];
          if (P == null)
            continue;
          switch (x) {
            case "children":
              d = P;
              break;
            case "dangerouslySetInnerHTML":
              S = P;
              break;
            case "style":
              o(e, s, P);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ft(x) && typeof P != "function" && typeof P != "symbol" && e.push(u, x, h, Ie(P), m);
              break;
          }
        }
      return e.push(F), V(e, S, d), d;
    }
    var an = `
`;
    function bn(e, r, i, s) {
      e.push(vt(i));
      var d = null, S = null;
      for (var x in r)
        if (ee.call(r, x)) {
          var P = r[x];
          if (P == null)
            continue;
          switch (x) {
            case "children":
              d = P;
              break;
            case "dangerouslySetInnerHTML":
              S = P;
              break;
            default:
              C(e, s, x, P);
              break;
          }
        }
      if (e.push(F), S != null) {
        if (d != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof S != "object" || !("__html" in S))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var L = S.__html;
        L != null && (typeof L == "string" && L.length > 0 && L[0] === `
` ? e.push(an, L) : (De(L), e.push("" + L)));
      }
      return typeof d == "string" && d[0] === `
` && e.push(an), d;
    }
    var we = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, mr = /* @__PURE__ */ new Map();
    function vt(e) {
      var r = mr.get(e);
      if (r === void 0) {
        if (!we.test(e))
          throw new Error("Invalid tag: " + e);
        r = "<" + e, mr.set(e, r);
      }
      return r;
    }
    var Mr = "<!DOCTYPE html>";
    function yr(e, r, i, s, d) {
      switch (xt(r, i), jr(r, i), Er(r, i, null), !i.suppressContentEditableWarning && i.contentEditable && i.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), d.insertionMode !== st && d.insertionMode !== Wt && r.indexOf("-") === -1 && typeof i.is != "string" && r.toLowerCase() !== r && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", r), r) {
        case "select":
          return Vr(e, i, s);
        case "option":
          return or(e, i, s, d);
        case "textarea":
          return wa(e, i, s);
        case "input":
          return on(e, i, s);
        case "menuitem":
          return Hn(e, i, s);
        case "title":
          return ka(e, i, s);
        case "listing":
        case "pre":
          return bn(e, i, r, s);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return xa(e, i, r, s);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Wn(e, i, r, s);
        case "html":
          return d.insertionMode === me && e.push(Mr), Wn(e, i, r, s);
        default:
          return r.indexOf("-") === -1 && typeof i.is != "string" ? Wn(e, i, r, s) : ar(e, i, r, s);
      }
    }
    var wn = "</", Sr = ">";
    function At(e, r, i) {
      switch (r) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(wn, r, Sr);
      }
    }
    function zn(e, r) {
      for (var i = r.bootstrapChunks, s = 0; s < i.length - 1; s++)
        T(e, i[s]);
      return s < i.length ? D(e, i[s]) : !0;
    }
    var $n = '<template id="', Co = '"></template>';
    function Eo(e, r, i) {
      T(e, $n), T(e, r.placeholderPrefix);
      var s = i.toString(16);
      return T(e, s), D(e, Co);
    }
    var To = "<!--$-->", Ca = '<!--$?--><template id="', Ea = '"></template>', xn = "<!--$!-->", kn = "<!--/$-->", Cn = "<template", ln = '"', Ta = ' data-dgst="', sn = ' data-msg="', Nn = ' data-stck="', Vn = "></template>";
    function Yr(e, r) {
      return D(e, To);
    }
    function Gr(e, r, i) {
      if (T(e, Ca), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return T(e, i), D(e, Ea);
    }
    function En(e, r, i, s, d) {
      var S;
      return S = D(e, xn), T(e, Cn), i && (T(e, Ta), T(e, Ie(i)), T(e, ln)), s && (T(e, sn), T(e, Ie(s)), T(e, ln)), d && (T(e, Nn), T(e, Ie(d)), T(e, ln)), S = D(e, Vn), S;
    }
    function Ro(e, r) {
      return D(e, kn);
    }
    function Yn(e, r) {
      return D(e, kn);
    }
    function Io(e, r) {
      return D(e, kn);
    }
    var Tn = '<div hidden id="', gt = '">', Po = "</div>", Rn = '<svg aria-hidden="true" style="display:none" id="', Ra = '">', _o = "</svg>", In = '<math aria-hidden="true" style="display:none" id="', Fo = '">', Do = "</math>", Pn = '<table hidden id="', _n = '">', Ao = "</table>", Mo = '<table hidden><tbody id="', Oo = '">', Gn = "</tbody></table>", Lo = '<table hidden><tr id="', a = '">', c = "</tr></table>", p = '<table hidden><colgroup id="', y = '">', I = "</colgroup></table>";
    function E(e, r, i, s) {
      switch (i.insertionMode) {
        case me:
        case _e:
          return T(e, Tn), T(e, r.segmentPrefix), T(e, s.toString(16)), D(e, gt);
        case st:
          return T(e, Rn), T(e, r.segmentPrefix), T(e, s.toString(16)), D(e, Ra);
        case Wt:
          return T(e, In), T(e, r.segmentPrefix), T(e, s.toString(16)), D(e, Fo);
        case Be:
          return T(e, Pn), T(e, r.segmentPrefix), T(e, s.toString(16)), D(e, _n);
        case Ue:
          return T(e, Mo), T(e, r.segmentPrefix), T(e, s.toString(16)), D(e, Oo);
        case zt:
          return T(e, Lo), T(e, r.segmentPrefix), T(e, s.toString(16)), D(e, a);
        case Ft:
          return T(e, p), T(e, r.segmentPrefix), T(e, s.toString(16)), D(e, y);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function A(e, r) {
      switch (r.insertionMode) {
        case me:
        case _e:
          return D(e, Po);
        case st:
          return D(e, _o);
        case Wt:
          return D(e, Do);
        case Be:
          return D(e, Ao);
        case Ue:
          return D(e, Gn);
        case zt:
          return D(e, c);
        case Ft:
          return D(e, I);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var H = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", J = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', ae = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', te = H + ';$RS("', Re = '$RS("', mt = '","', Mt = '")<\/script>';
    function Ot(e, r, i) {
      T(e, r.startInlineScript), r.sentCompleteSegmentFunction ? T(e, Re) : (r.sentCompleteSegmentFunction = !0, T(e, te)), T(e, r.segmentPrefix);
      var s = i.toString(16);
      return T(e, s), T(e, mt), T(e, r.placeholderPrefix), T(e, s), D(e, Mt);
    }
    var Fn = J + ';$RC("', Bo = '$RC("', Xn = '","', dl = '")<\/script>';
    function pl(e, r, i, s) {
      if (T(e, r.startInlineScript), r.sentCompleteBoundaryFunction ? T(e, Bo) : (r.sentCompleteBoundaryFunction = !0, T(e, Fn)), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var d = s.toString(16);
      return T(e, i), T(e, Xn), T(e, r.segmentPrefix), T(e, d), D(e, dl);
    }
    var hl = ae + ';$RX("', vl = '$RX("', gl = '"', ml = ")<\/script>", Ia = ",";
    function yl(e, r, i, s, d, S) {
      if (T(e, r.startInlineScript), r.sentClientRenderFunction ? T(e, vl) : (r.sentClientRenderFunction = !0, T(e, hl)), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return T(e, i), T(e, gl), (s || d || S) && (T(e, Ia), T(e, Pa(s || ""))), (d || S) && (T(e, Ia), T(e, Pa(d || ""))), S && (T(e, Ia), T(e, Pa(S))), D(e, ml);
    }
    var Sl = /[<\u2028\u2029]/g;
    function Pa(e) {
      var r = JSON.stringify(e);
      return r.replace(Sl, function(i) {
        switch (i) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function bl(e, r) {
      var i = ge(r, void 0);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: i.bootstrapChunks,
        startInlineScript: i.startInlineScript,
        placeholderPrefix: i.placeholderPrefix,
        segmentPrefix: i.segmentPrefix,
        boundaryPrefix: i.boundaryPrefix,
        idPrefix: i.idPrefix,
        nextSuspenseID: i.nextSuspenseID,
        sentCompleteSegmentFunction: i.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: i.sentCompleteBoundaryFunction,
        sentClientRenderFunction: i.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function _a() {
      return {
        insertionMode: _e,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function wi(e, r, i, s) {
      return i.generateStaticMarkup ? (e.push(Ie(r)), !1) : tn(e, r, i, s);
    }
    function xi(e, r, i, s) {
      if (!r.generateStaticMarkup)
        return rn(e, r, i, s);
    }
    function Fa(e, r) {
      return r.generateStaticMarkup ? !0 : Yr(e);
    }
    function Vt(e, r, i, s, d) {
      return r.generateStaticMarkup ? !0 : En(e, r, i, s, d);
    }
    function wl(e, r) {
      return r.generateStaticMarkup ? !0 : Ro(e);
    }
    function ki(e, r) {
      return r.generateStaticMarkup ? !0 : Io(e);
    }
    var Lt = Object.assign, Ci = Symbol.for("react.element"), Da = Symbol.for("react.portal"), Uo = Symbol.for("react.fragment"), jo = Symbol.for("react.strict_mode"), Ho = Symbol.for("react.profiler"), Zn = Symbol.for("react.provider"), Jn = Symbol.for("react.context"), Qn = Symbol.for("react.forward_ref"), Dn = Symbol.for("react.suspense"), Aa = Symbol.for("react.suspense_list"), Ma = Symbol.for("react.memo"), Wo = Symbol.for("react.lazy"), xl = Symbol.for("react.scope"), Ei = Symbol.for("react.debug_trace_mode"), kl = Symbol.for("react.legacy_hidden"), Cl = Symbol.for("react.default_value"), Ti = Symbol.iterator, Ri = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Ti && e[Ti] || e[Ri];
      return typeof r == "function" ? r : null;
    }
    function Kn(e, r, i) {
      var s = e.displayName;
      if (s)
        return s;
      var d = r.displayName || r.name || "";
      return d !== "" ? i + "(" + d + ")" : i;
    }
    function Oa(e) {
      return e.displayName || "Context";
    }
    function je(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Uo:
          return "Fragment";
        case Da:
          return "Portal";
        case Ho:
          return "Profiler";
        case jo:
          return "StrictMode";
        case Dn:
          return "Suspense";
        case Aa:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Jn:
            var r = e;
            return Oa(r) + ".Consumer";
          case Zn:
            var i = e;
            return Oa(i._context) + ".Provider";
          case Qn:
            return Kn(e, e.render, "ForwardRef");
          case Ma:
            var s = e.displayName || null;
            return s !== null ? s : je(e.type) || "Memo";
          case Wo: {
            var d = e, S = d._payload, x = d._init;
            try {
              return je(x(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var An = 0, La, Ba, Ua, ja, Ha, Ii, Pi;
    function zo() {
    }
    zo.__reactDisabledLog = !0;
    function Wa() {
      {
        if (An === 0) {
          La = console.log, Ba = console.info, Ua = console.warn, ja = console.error, Ha = console.group, Ii = console.groupCollapsed, Pi = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: zo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        An++;
      }
    }
    function qn() {
      {
        if (An--, An === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Lt({}, e, {
              value: La
            }),
            info: Lt({}, e, {
              value: Ba
            }),
            warn: Lt({}, e, {
              value: Ua
            }),
            error: Lt({}, e, {
              value: ja
            }),
            group: Lt({}, e, {
              value: Ha
            }),
            groupCollapsed: Lt({}, e, {
              value: Ii
            }),
            groupEnd: Lt({}, e, {
              value: Pi
            })
          });
        }
        An < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var eo = N.ReactCurrentDispatcher, Mn;
    function to(e, r, i) {
      {
        if (Mn === void 0)
          try {
            throw Error();
          } catch (d) {
            var s = d.stack.trim().match(/\n( *(at )?)/);
            Mn = s && s[1] || "";
          }
        return `
` + Mn + e;
      }
    }
    var ro = !1, $o;
    {
      var _i = typeof WeakMap == "function" ? WeakMap : Map;
      $o = new _i();
    }
    function za(e, r) {
      if (!e || ro)
        return "";
      {
        var i = $o.get(e);
        if (i !== void 0)
          return i;
      }
      var s;
      ro = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = eo.current, eo.current = null, Wa();
      try {
        if (r) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (Zt) {
              s = Zt;
            }
            Reflect.construct(e, [], x);
          } else {
            try {
              x.call();
            } catch (Zt) {
              s = Zt;
            }
            e.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Zt) {
            s = Zt;
          }
          e();
        }
      } catch (Zt) {
        if (Zt && s && typeof Zt.stack == "string") {
          for (var P = Zt.stack.split(`
`), L = s.stack.split(`
`), $ = P.length - 1, Y = L.length - 1; $ >= 1 && Y >= 0 && P[$] !== L[Y]; )
            Y--;
          for (; $ >= 1 && Y >= 0; $--, Y--)
            if (P[$] !== L[Y]) {
              if ($ !== 1 || Y !== 1)
                do
                  if ($--, Y--, Y < 0 || P[$] !== L[Y]) {
                    var K = `
` + P[$].replace(" at new ", " at ");
                    return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), typeof e == "function" && $o.set(e, K), K;
                  }
                while ($ >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        ro = !1, eo.current = S, qn(), Error.prepareStackTrace = d;
      }
      var Fe = e ? e.displayName || e.name : "", at = Fe ? to(Fe) : "";
      return typeof e == "function" && $o.set(e, at), at;
    }
    function $a(e, r, i) {
      return za(e, !0);
    }
    function Na(e, r, i) {
      return za(e, !1);
    }
    function Fi(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function On(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return za(e, Fi(e));
      if (typeof e == "string")
        return to(e);
      switch (e) {
        case Dn:
          return to("Suspense");
        case Aa:
          return to("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Qn:
            return Na(e.render);
          case Ma:
            return On(e.type, r, i);
          case Wo: {
            var s = e, d = s._payload, S = s._init;
            try {
              return On(S(d), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var Va = {}, No = N.ReactDebugCurrentFrame;
    function un(e) {
      if (e) {
        var r = e._owner, i = On(e.type, e._source, r ? r.type : null);
        No.setExtraStackFrame(i);
      } else
        No.setExtraStackFrame(null);
    }
    function Ya(e, r, i, s, d) {
      {
        var S = Function.call.bind(ee);
        for (var x in e)
          if (S(e, x)) {
            var P = void 0;
            try {
              if (typeof e[x] != "function") {
                var L = Error((s || "React class") + ": " + i + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              P = e[x](r, x, s, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              P = $;
            }
            P && !(P instanceof Error) && (un(d), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", i, x, typeof P), un(null)), P instanceof Error && !(P.message in Va) && (Va[P.message] = !0, un(d), g("Failed %s type: %s", i, P.message), un(null));
          }
      }
    }
    var Ga;
    Ga = {};
    var Xr = {};
    Object.freeze(Xr);
    function Di(e, r) {
      {
        var i = e.contextTypes;
        if (!i)
          return Xr;
        var s = {};
        for (var d in i)
          s[d] = r[d];
        {
          var S = je(e) || "Unknown";
          Ya(i, s, "context", S);
        }
        return s;
      }
    }
    function cn(e, r, i, s) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var d = je(r) || "Unknown";
            Ga[d] || (Ga[d] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return i;
        }
        var S = e.getChildContext();
        for (var x in S)
          if (!(x in s))
            throw new Error((je(r) || "Unknown") + '.getChildContext(): key "' + x + '" is not defined in childContextTypes.');
        {
          var P = je(r) || "Unknown";
          Ya(s, S, "child context", P);
        }
        return Lt({}, i, S);
      }
    }
    var fn;
    fn = {};
    var Xa = null, br = null;
    function Vo(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function Yo(e) {
      e.context._currentValue2 = e.value;
    }
    function no(e, r) {
      if (e !== r) {
        Vo(e);
        var i = e.parent, s = r.parent;
        if (i === null) {
          if (s !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (s === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          no(i, s);
        }
        Yo(r);
      }
    }
    function Za(e) {
      Vo(e);
      var r = e.parent;
      r !== null && Za(r);
    }
    function oo(e) {
      var r = e.parent;
      r !== null && oo(r), Yo(e);
    }
    function Ai(e, r) {
      Vo(e);
      var i = e.parent;
      if (i === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      i.depth === r.depth ? no(i, r) : Ai(i, r);
    }
    function Mi(e, r) {
      var i = r.parent;
      if (i === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === i.depth ? no(e, i) : Mi(e, i), Yo(r);
    }
    function Go(e) {
      var r = br, i = e;
      r !== i && (r === null ? oo(i) : i === null ? Za(r) : r.depth === i.depth ? no(r, i) : r.depth > i.depth ? Ai(r, i) : Mi(r, i), br = i);
    }
    function ao(e, r) {
      var i;
      i = e._currentValue2, e._currentValue2 = r, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== fn && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = fn;
      var s = br, d = {
        parent: s,
        depth: s === null ? 0 : s.depth + 1,
        context: e,
        parentValue: i,
        value: r
      };
      return br = d, d;
    }
    function Ja(e) {
      var r = br;
      if (r === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      r.context !== e && g("The parent context is not the expected context. This is probably a bug in React.");
      {
        var i = r.parentValue;
        i === Cl ? r.context._currentValue2 = r.context._defaultValue : r.context._currentValue2 = i, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== fn && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = fn;
      }
      return br = r.parent;
    }
    function El() {
      return br;
    }
    function Ln(e) {
      var r = e._currentValue2;
      return r;
    }
    function Xo(e) {
      return e._reactInternals;
    }
    function Qa(e, r) {
      e._reactInternals = r;
    }
    var Zo = {}, Jo = {}, io, Qo, Bn, lo, Ko, Un, qo, ea, ta;
    {
      io = /* @__PURE__ */ new Set(), Qo = /* @__PURE__ */ new Set(), Bn = /* @__PURE__ */ new Set(), qo = /* @__PURE__ */ new Set(), lo = /* @__PURE__ */ new Set(), ea = /* @__PURE__ */ new Set(), ta = /* @__PURE__ */ new Set();
      var Oi = /* @__PURE__ */ new Set();
      Un = function(e, r) {
        if (!(e === null || typeof e == "function")) {
          var i = r + "_" + e;
          Oi.has(i) || (Oi.add(i), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r, e));
        }
      }, Ko = function(e, r) {
        if (r === void 0) {
          var i = je(e) || "Component";
          lo.has(i) || (lo.add(i), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      };
    }
    function Li(e, r) {
      {
        var i = e.constructor, s = i && je(i) || "ReactClass", d = s + "." + r;
        if (Zo[d])
          return;
        g(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, r, r, s), Zo[d] = !0;
      }
    }
    var Bi = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, r, i) {
        var s = Xo(e);
        s.queue === null ? Li(e, "setState") : (s.queue.push(r), i != null && Un(i, "setState"));
      },
      enqueueReplaceState: function(e, r, i) {
        var s = Xo(e);
        s.replace = !0, s.queue = [r], i != null && Un(i, "setState");
      },
      enqueueForceUpdate: function(e, r) {
        var i = Xo(e);
        i.queue === null ? Li(e, "forceUpdate") : r != null && Un(r, "setState");
      }
    };
    function Tl(e, r, i, s, d) {
      var S = i(d, s);
      Ko(r, S);
      var x = S == null ? s : Lt({}, s, S);
      return x;
    }
    function Rl(e, r, i) {
      var s = Xr, d = e.contextType;
      if ("contextType" in e) {
        var S = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === Jn && d._context === void 0
        );
        if (!S && !ta.has(e)) {
          ta.add(e);
          var x = "";
          d === void 0 ? x = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? x = " However, it is set to a " + typeof d + "." : d.$$typeof === Zn ? x = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? x = " Did you accidentally pass the Context.Consumer instead?" : x = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", je(e) || "Component", x);
        }
      }
      typeof d == "object" && d !== null ? s = Ln(d) : s = i;
      var P = new e(r, s);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (P.state === null || P.state === void 0)) {
          var L = je(e) || "Component";
          io.has(L) || (io.add(L), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", L, P.state === null ? "null" : "undefined", L));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof P.getSnapshotBeforeUpdate == "function") {
          var $ = null, Y = null, K = null;
          if (typeof P.componentWillMount == "function" && P.componentWillMount.__suppressDeprecationWarning !== !0 ? $ = "componentWillMount" : typeof P.UNSAFE_componentWillMount == "function" && ($ = "UNSAFE_componentWillMount"), typeof P.componentWillReceiveProps == "function" && P.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof P.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof P.componentWillUpdate == "function" && P.componentWillUpdate.__suppressDeprecationWarning !== !0 ? K = "componentWillUpdate" : typeof P.UNSAFE_componentWillUpdate == "function" && (K = "UNSAFE_componentWillUpdate"), $ !== null || Y !== null || K !== null) {
            var Fe = je(e) || "Component", at = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Bn.has(Fe) || (Bn.add(Fe), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Fe, at, $ !== null ? `
  ` + $ : "", Y !== null ? `
  ` + Y : "", K !== null ? `
  ` + K : ""));
          }
        }
      }
      return P;
    }
    function Ui(e, r, i) {
      {
        var s = je(r) || "Component", d = e.render;
        d || (r.prototype && typeof r.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), e.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), e.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), e.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), r.contextType && r.contextTypes && !ea.has(r) && (ea.add(r), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof e.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), r.prototype && r.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", je(r) || "A pure component"), typeof e.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof e.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof e.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof e.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
        var S = e.props !== i;
        e.props !== void 0 && S && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), e.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !Qo.has(r) && (Qo.add(r), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", je(r))), typeof e.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof e.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof r.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
        var x = e.state;
        x && (typeof x != "object" || w(x)) && g("%s.state: must be set to an object or null", s), typeof e.getChildContext == "function" && typeof r.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
      }
    }
    function Il(e, r) {
      var i = r.state;
      if (typeof r.componentWillMount == "function") {
        if (r.componentWillMount.__suppressDeprecationWarning !== !0) {
          var s = je(e) || "Unknown";
          Jo[s] || (ce(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            s
          ), Jo[s] = !0);
        }
        r.componentWillMount();
      }
      typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), i !== r.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", je(e) || "Component"), Bi.enqueueReplaceState(r, r.state, null));
    }
    function Pl(e, r, i, s) {
      if (e.queue !== null && e.queue.length > 0) {
        var d = e.queue, S = e.replace;
        if (e.queue = null, e.replace = !1, S && d.length === 1)
          r.state = d[0];
        else {
          for (var x = S ? d[0] : r.state, P = !0, L = S ? 1 : 0; L < d.length; L++) {
            var $ = d[L], Y = typeof $ == "function" ? $.call(r, x, i, s) : $;
            Y != null && (P ? (P = !1, x = Lt({}, x, Y)) : Lt(x, Y));
          }
          r.state = x;
        }
      } else
        e.queue = null;
    }
    function ra(e, r, i, s) {
      Ui(e, r, i);
      var d = e.state !== void 0 ? e.state : null;
      e.updater = Bi, e.props = i, e.state = d;
      var S = {
        queue: [],
        replace: !1
      };
      Qa(e, S);
      var x = r.contextType;
      if (typeof x == "object" && x !== null ? e.context = Ln(x) : e.context = s, e.state === i) {
        var P = je(r) || "Component";
        qo.has(P) || (qo.add(P), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", P));
      }
      var L = r.getDerivedStateFromProps;
      typeof L == "function" && (e.state = Tl(e, r, L, d, i)), typeof r.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Il(r, e), Pl(S, e, i, s));
    }
    var na = {
      id: 1,
      overflow: ""
    };
    function _l(e) {
      var r = e.overflow, i = e.id, s = i & ~Fl(i);
      return s.toString(32) + r;
    }
    function Ka(e, r, i) {
      var s = e.id, d = e.overflow, S = oa(s) - 1, x = s & ~(1 << S), P = i + 1, L = oa(r) + S;
      if (L > 30) {
        var $ = S - S % 5, Y = (1 << $) - 1, K = (x & Y).toString(32), Fe = x >> $, at = S - $, Zt = oa(r) + at, il = P << at, ll = il | Fe, sl = K + d;
        return {
          id: 1 << Zt | ll,
          overflow: sl
        };
      } else {
        var ba = P << S, ms = ba | x, ys = d;
        return {
          id: 1 << L | ms,
          overflow: ys
        };
      }
    }
    function oa(e) {
      return 32 - Dl(e);
    }
    function Fl(e) {
      return 1 << oa(e) - 1;
    }
    var Dl = Math.clz32 ? Math.clz32 : Or, Al = Math.log, Ml = Math.LN2;
    function Or(e) {
      var r = e >>> 0;
      return r === 0 ? 32 : 31 - (Al(r) / Ml | 0) | 0;
    }
    function qa(e, r) {
      return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r;
    }
    var aa = typeof Object.is == "function" ? Object.is : qa, ve = null, dn = null, pn = null, be = null, Yt = !1, hn = !1, ia = 0, ot = null, Lr = 0, vn = 25, wr = !1, gn;
    function Br() {
      if (ve === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return wr && g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), ve;
    }
    function Ol(e, r) {
      if (r === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", gn), !1;
      e.length !== r.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, gn, "[" + e.join(", ") + "]", "[" + r.join(", ") + "]");
      for (var i = 0; i < r.length && i < e.length; i++)
        if (!aa(e[i], r[i]))
          return !1;
      return !0;
    }
    function ji() {
      if (Lr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function la() {
      return be === null ? pn === null ? (Yt = !1, pn = be = ji()) : (Yt = !0, be = pn) : be.next === null ? (Yt = !1, be = be.next = ji()) : (Yt = !0, be = be.next), be;
    }
    function ei(e, r) {
      ve = r, dn = e, wr = !1, ia = 0;
    }
    function Ll(e, r, i, s) {
      for (; hn; )
        hn = !1, ia = 0, Lr += 1, be = null, i = e(r, s);
      return so(), i;
    }
    function Hi() {
      var e = ia !== 0;
      return e;
    }
    function so() {
      wr = !1, ve = null, dn = null, hn = !1, pn = null, Lr = 0, ot = null, be = null;
    }
    function Bl(e) {
      return wr && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Ln(e);
    }
    function Wi(e) {
      return gn = "useContext", Br(), Ln(e);
    }
    function sa(e, r) {
      return typeof r == "function" ? r(e) : r;
    }
    function Ul(e) {
      return gn = "useState", zi(
        sa,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function zi(e, r, i) {
      if (e !== sa && (gn = "useReducer"), ve = Br(), be = la(), Yt) {
        var s = be.queue, d = s.dispatch;
        if (ot !== null) {
          var S = ot.get(s);
          if (S !== void 0) {
            ot.delete(s);
            var x = be.memoizedState, P = S;
            do {
              var L = P.action;
              wr = !0, x = e(x, L), wr = !1, P = P.next;
            } while (P !== null);
            return be.memoizedState = x, [x, d];
          }
        }
        return [be.memoizedState, d];
      } else {
        wr = !0;
        var $;
        e === sa ? $ = typeof r == "function" ? r() : r : $ = i !== void 0 ? i(r) : r, wr = !1, be.memoizedState = $;
        var Y = be.queue = {
          last: null,
          dispatch: null
        }, K = Y.dispatch = Wl.bind(null, ve, Y);
        return [be.memoizedState, K];
      }
    }
    function $i(e, r) {
      ve = Br(), be = la();
      var i = r === void 0 ? null : r;
      if (be !== null) {
        var s = be.memoizedState;
        if (s !== null && i !== null) {
          var d = s[1];
          if (Ol(i, d))
            return s[0];
        }
      }
      wr = !0;
      var S = e();
      return wr = !1, be.memoizedState = [S, i], S;
    }
    function jl(e) {
      ve = Br(), be = la();
      var r = be.memoizedState;
      if (r === null) {
        var i = {
          current: e
        };
        return Object.seal(i), be.memoizedState = i, i;
      } else
        return r;
    }
    function Hl(e, r) {
      gn = "useLayoutEffect", g("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Wl(e, r, i) {
      if (Lr >= vn)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === ve) {
        hn = !0;
        var s = {
          action: i,
          next: null
        };
        ot === null && (ot = /* @__PURE__ */ new Map());
        var d = ot.get(r);
        if (d === void 0)
          ot.set(r, s);
        else {
          for (var S = d; S.next !== null; )
            S = S.next;
          S.next = s;
        }
      }
    }
    function zl(e, r) {
      return $i(function() {
        return e;
      }, r);
    }
    function $l(e, r, i) {
      return Br(), r(e._source);
    }
    function Nl(e, r, i) {
      if (i === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return i();
    }
    function Vl(e) {
      return Br(), e;
    }
    function ua() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Ni() {
      return Br(), [!1, ua];
    }
    function ti() {
      var e = dn, r = _l(e.treeContext), i = co;
      if (i === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var s = ia++;
      return ut(i, r, s);
    }
    function uo() {
    }
    var Vi = {
      readContext: Bl,
      useContext: Wi,
      useMemo: $i,
      useReducer: zi,
      useRef: jl,
      useState: Ul,
      useInsertionEffect: uo,
      useLayoutEffect: Hl,
      useCallback: zl,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: uo,
      // Effects are not run in the server environment.
      useEffect: uo,
      // Debugging effect
      useDebugValue: uo,
      useDeferredValue: Vl,
      useTransition: Ni,
      useId: ti,
      // Subscriptions are not setup in a server environment.
      useMutableSource: $l,
      useSyncExternalStore: Nl
    }, co = null;
    function ca(e) {
      co = e;
    }
    function ri(e) {
      try {
        var r = "", i = e;
        do {
          switch (i.tag) {
            case 0:
              r += to(i.type, null, null);
              break;
            case 1:
              r += Na(i.type, null, null);
              break;
            case 2:
              r += $a(i.type, null, null);
              break;
          }
          i = i.parent;
        } while (i);
        return r;
      } catch (s) {
        return `
Error generating stack: ` + s.message + `
` + s.stack;
      }
    }
    var Zr = N.ReactCurrentDispatcher, fa = N.ReactDebugCurrentFrame, da = 0, mn = 1, Yi = 2, ni = 3, yn = 4, Yl = 0, Gi = 1, xr = 2, Gl = 12800;
    function Xl(e) {
      return console.error(e), null;
    }
    function fo() {
    }
    function oi(e, r, i, s, d, S, x, P, L) {
      var $ = [], Y = /* @__PURE__ */ new Set(), K = {
        destination: null,
        responseState: r,
        progressiveChunkSize: s === void 0 ? Gl : s,
        status: Yl,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: Y,
        pingedTasks: $,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: d === void 0 ? Xl : d,
        onAllReady: S === void 0 ? fo : S,
        onShellReady: x === void 0 ? fo : x,
        onShellError: P === void 0 ? fo : P,
        onFatalError: L === void 0 ? fo : L
      }, Fe = Jr(
        K,
        0,
        null,
        i,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      Fe.parentFlushed = !0;
      var at = po(K, e, null, Fe, Y, Xr, Xa, na);
      return $.push(at), K;
    }
    function pa(e, r) {
      var i = e.pingedTasks;
      i.push(r), i.length === 1 && xe(function() {
        return ol(e);
      });
    }
    function Ur(e, r) {
      return {
        id: $t,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: r,
        errorDigest: null
      };
    }
    function po(e, r, i, s, d, S, x, P) {
      e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
      var L = {
        node: r,
        ping: function() {
          return pa(e, L);
        },
        blockedBoundary: i,
        blockedSegment: s,
        abortSet: d,
        legacyContext: S,
        context: x,
        treeContext: P
      };
      return L.componentStack = null, d.add(L), L;
    }
    function Jr(e, r, i, s, d, S) {
      return {
        status: da,
        id: -1,
        // lazily assigned later
        index: r,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: s,
        boundary: i,
        lastPushedText: d,
        textEmbedded: S
      };
    }
    var kr = null;
    function ai() {
      return kr === null || kr.componentStack === null ? "" : ri(kr.componentStack);
    }
    function Gt(e, r) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: r
      };
    }
    function jn(e, r) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: r
      };
    }
    function ii(e, r) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: r
      };
    }
    function Xt(e) {
      e.componentStack === null ? g("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var Qr = null;
    function li(e, r) {
      {
        var i;
        typeof r == "string" ? i = r : r && typeof r.message == "string" ? i = r.message : i = String(r);
        var s = Qr || ai();
        Qr = null, e.errorMessage = i, e.errorComponentStack = s;
      }
    }
    function ho(e, r) {
      var i = e.onError(r);
      if (i != null && typeof i != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
      return i;
    }
    function ha(e, r) {
      var i = e.onShellError;
      i(r);
      var s = e.onFatalError;
      s(r), e.destination !== null ? (e.status = xr, ke(e.destination, r)) : (e.status = Gi, e.fatalError = r);
    }
    function Xi(e, r, i) {
      Gt(r, "Suspense");
      var s = r.blockedBoundary, d = r.blockedSegment, S = i.fallback, x = i.children, P = /* @__PURE__ */ new Set(), L = Ur(e, P), $ = d.chunks.length, Y = Jr(
        e,
        $,
        L,
        d.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      d.children.push(Y), d.lastPushedText = !1;
      var K = Jr(
        e,
        0,
        null,
        d.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      K.parentFlushed = !0, r.blockedBoundary = L, r.blockedSegment = K;
      try {
        if (va(e, r, x), xi(K.chunks, e.responseState, K.lastPushedText, K.textEmbedded), K.status = mn, mo(L, K), L.pendingTasks === 0) {
          Xt(r);
          return;
        }
      } catch (at) {
        K.status = yn, L.forceClientRender = !0, L.errorDigest = ho(e, at), li(L, at);
      } finally {
        r.blockedBoundary = s, r.blockedSegment = d;
      }
      var Fe = po(e, S, s, Y, P, r.legacyContext, r.context, r.treeContext);
      Fe.componentStack = r.componentStack, e.pingedTasks.push(Fe), Xt(r);
    }
    function Zi(e, r, i, s) {
      Gt(r, i);
      var d = r.blockedSegment, S = yr(d.chunks, i, s, e.responseState, d.formatContext);
      d.lastPushedText = !1;
      var x = d.formatContext;
      d.formatContext = Wr(x, i, s), va(e, r, S), d.formatContext = x, At(d.chunks, i), d.lastPushedText = !1, Xt(r);
    }
    function Zl(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function si(e, r, i, s, d) {
      var S = {};
      ei(r, S);
      var x = i(s, d);
      return Ll(i, s, x, d);
    }
    function vo(e, r, i, s, d) {
      var S = i.render();
      i.props !== d && (di || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", je(s) || "a component"), di = !0);
      {
        var x = s.childContextTypes;
        if (x != null) {
          var P = r.legacyContext, L = cn(i, s, P, x);
          r.legacyContext = L, Ut(e, r, S), r.legacyContext = P;
          return;
        }
      }
      Ut(e, r, S);
    }
    function Ji(e, r, i, s) {
      ii(r, i);
      var d = Di(i, r.legacyContext), S = Rl(i, s, d);
      ra(S, i, s, d), vo(e, r, S, i, s), Xt(r);
    }
    var ui = {}, go = {}, ci = {}, fi = {}, di = !1, Qi = !1, Ki = !1, pi = !1;
    function Jl(e, r, i, s) {
      var d;
      if (d = Di(i, r.legacyContext), jn(r, i), i.prototype && typeof i.prototype.render == "function") {
        var S = je(i) || "Unknown";
        ui[S] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), ui[S] = !0);
      }
      var x = si(e, r, i, s, d), P = Hi();
      if (typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0) {
        var L = je(i) || "Unknown";
        go[L] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), go[L] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0
      ) {
        {
          var $ = je(i) || "Unknown";
          go[$] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", $, $, $), go[$] = !0);
        }
        ra(x, i, s, d), vo(e, r, x, i, s);
      } else if (Ql(i), P) {
        var Y = r.treeContext, K = 1, Fe = 0;
        r.treeContext = Ka(Y, K, Fe);
        try {
          Ut(e, r, x);
        } finally {
          r.treeContext = Y;
        }
      } else
        Ut(e, r, x);
      Xt(r);
    }
    function Ql(e) {
      {
        if (e && e.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), typeof e.getDerivedStateFromProps == "function") {
          var r = je(e) || "Unknown";
          fi[r] || (g("%s: Function components do not support getDerivedStateFromProps.", r), fi[r] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var i = je(e) || "Unknown";
          ci[i] || (g("%s: Function components do not support contextType.", i), ci[i] = !0);
        }
      }
    }
    function qi(e, r) {
      if (e && e.defaultProps) {
        var i = Lt({}, r), s = e.defaultProps;
        for (var d in s)
          i[d] === void 0 && (i[d] = s[d]);
        return i;
      }
      return r;
    }
    function Kl(e, r, i, s, d) {
      jn(r, i.render);
      var S = si(e, r, i.render, s, d), x = Hi();
      if (x) {
        var P = r.treeContext, L = 1, $ = 0;
        r.treeContext = Ka(P, L, $);
        try {
          Ut(e, r, S);
        } finally {
          r.treeContext = P;
        }
      } else
        Ut(e, r, S);
      Xt(r);
    }
    function ql(e, r, i, s, d) {
      var S = i.type, x = qi(S, s);
      vi(e, r, S, x, d);
    }
    function hi(e, r, i, s) {
      i._context === void 0 ? i !== i.Consumer && (pi || (pi = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var d = s.children;
      typeof d != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var S = Ln(i), x = d(S);
      Ut(e, r, x);
    }
    function es(e, r, i, s) {
      var d = i._context, S = s.value, x = s.children, P;
      P = r.context, r.context = ao(d, S), Ut(e, r, x), r.context = Ja(d), P !== r.context && g("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Bt(e, r, i, s, d) {
      Gt(r, "Lazy");
      var S = i._payload, x = i._init, P = x(S), L = qi(P, s);
      vi(e, r, P, L, d), Xt(r);
    }
    function vi(e, r, i, s, d) {
      if (typeof i == "function")
        if (Zl(i)) {
          Ji(e, r, i, s);
          return;
        } else {
          Jl(e, r, i, s);
          return;
        }
      if (typeof i == "string") {
        Zi(e, r, i, s);
        return;
      }
      switch (i) {
        case kl:
        case Ei:
        case jo:
        case Ho:
        case Uo: {
          Ut(e, r, s.children);
          return;
        }
        case Aa: {
          Gt(r, "SuspenseList"), Ut(e, r, s.children), Xt(r);
          return;
        }
        case xl:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Dn: {
          Xi(e, r, s);
          return;
        }
      }
      if (typeof i == "object" && i !== null)
        switch (i.$$typeof) {
          case Qn: {
            Kl(e, r, i, s, d);
            return;
          }
          case Ma: {
            ql(e, r, i, s, d);
            return;
          }
          case Zn: {
            es(e, r, i, s);
            return;
          }
          case Jn: {
            hi(e, r, i, s);
            return;
          }
          case Wo: {
            Bt(e, r, i, s);
            return;
          }
        }
      var S = "";
      throw (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (i == null ? i : typeof i) + "." + S));
    }
    function el(e, r) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (Qi || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Qi = !0), e.entries === r && (Ki || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ki = !0);
    }
    function Ut(e, r, i) {
      try {
        return gi(e, r, i);
      } catch (s) {
        throw typeof s == "object" && s !== null && typeof s.then == "function" || (Qr = Qr !== null ? Qr : ai()), s;
      }
    }
    function gi(e, r, i) {
      if (r.node = i, typeof i == "object" && i !== null) {
        switch (i.$$typeof) {
          case Ci: {
            var s = i, d = s.type, S = s.props, x = s.ref;
            vi(e, r, d, S, x);
            return;
          }
          case Da:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Wo: {
            var P = i, L = P._payload, $ = P._init, Y;
            try {
              Y = $(L);
            } catch (ba) {
              throw typeof ba == "object" && ba !== null && typeof ba.then == "function" && Gt(r, "Lazy"), ba;
            }
            Ut(e, r, Y);
            return;
          }
        }
        if (w(i)) {
          tl(e, r, i);
          return;
        }
        var K = We(i);
        if (K) {
          el(i, K);
          var Fe = K.call(i);
          if (Fe) {
            var at = Fe.next();
            if (!at.done) {
              var Zt = [];
              do
                Zt.push(at.value), at = Fe.next();
              while (!at.done);
              tl(e, r, Zt);
              return;
            }
            return;
          }
        }
        var il = Object.prototype.toString.call(i);
        throw new Error("Objects are not valid as a React child (found: " + (il === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : il) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof i == "string") {
        var ll = r.blockedSegment;
        ll.lastPushedText = wi(r.blockedSegment.chunks, i, e.responseState, ll.lastPushedText);
        return;
      }
      if (typeof i == "number") {
        var sl = r.blockedSegment;
        sl.lastPushedText = wi(r.blockedSegment.chunks, "" + i, e.responseState, sl.lastPushedText);
        return;
      }
      typeof i == "function" && g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function tl(e, r, i) {
      for (var s = i.length, d = 0; d < s; d++) {
        var S = r.treeContext;
        r.treeContext = Ka(S, s, d);
        try {
          va(e, r, i[d]);
        } finally {
          r.treeContext = S;
        }
      }
    }
    function ts(e, r, i) {
      var s = r.blockedSegment, d = s.chunks.length, S = Jr(
        e,
        d,
        null,
        s.formatContext,
        // Adopt the parent segment's leading text embed
        s.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      s.children.push(S), s.lastPushedText = !1;
      var x = po(e, r.node, r.blockedBoundary, S, r.abortSet, r.legacyContext, r.context, r.treeContext);
      r.componentStack !== null && (x.componentStack = r.componentStack.parent);
      var P = x.ping;
      i.then(P, P);
    }
    function va(e, r, i) {
      var s = r.blockedSegment.formatContext, d = r.legacyContext, S = r.context, x = null;
      x = r.componentStack;
      try {
        return Ut(e, r, i);
      } catch (P) {
        if (so(), typeof P == "object" && P !== null && typeof P.then == "function") {
          ts(e, r, P), r.blockedSegment.formatContext = s, r.legacyContext = d, r.context = S, Go(S), r.componentStack = x;
          return;
        } else
          throw r.blockedSegment.formatContext = s, r.legacyContext = d, r.context = S, Go(S), r.componentStack = x, P;
      }
    }
    function ga(e, r, i, s) {
      var d = ho(e, s);
      if (r === null ? ha(e, s) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, r.errorDigest = d, li(r, s), r.parentFlushed && e.clientRenderedBoundaries.push(r))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var S = e.onAllReady;
        S();
      }
    }
    function rl(e) {
      var r = this, i = e.blockedBoundary, s = e.blockedSegment;
      s.status = ni, yo(r, i, s);
    }
    function nl(e, r, i) {
      var s = e.blockedBoundary, d = e.blockedSegment;
      if (d.status = ni, s === null)
        r.allPendingTasks--, r.status !== xr && (r.status = xr, r.destination !== null && U(r.destination));
      else {
        if (s.pendingTasks--, !s.forceClientRender) {
          s.forceClientRender = !0;
          var S = i === void 0 ? new Error("The render was aborted by the server without a reason.") : i;
          s.errorDigest = r.onError(S);
          {
            var x = "The server did not finish this Suspense boundary: ";
            S && typeof S.message == "string" ? S = x + S.message : S = x + String(S);
            var P = kr;
            kr = e;
            try {
              li(s, S);
            } finally {
              kr = P;
            }
          }
          s.parentFlushed && r.clientRenderedBoundaries.push(s);
        }
        if (s.fallbackAbortableTasks.forEach(function($) {
          return nl($, r, i);
        }), s.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0) {
          var L = r.onAllReady;
          L();
        }
      }
    }
    function mo(e, r) {
      if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
        var i = r.children[0];
        i.id = r.id, i.parentFlushed = !0, i.status === mn && mo(e, i);
      } else {
        var s = e.completedSegments;
        s.push(r);
      }
    }
    function yo(e, r, i) {
      if (r === null) {
        if (i.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = i;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = fo;
          var s = e.onShellReady;
          s();
        }
      } else if (r.pendingTasks--, !r.forceClientRender) {
        if (r.pendingTasks === 0)
          i.parentFlushed && i.status === mn && mo(r, i), r.parentFlushed && e.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(rl, e), r.fallbackAbortableTasks.clear();
        else if (i.parentFlushed && i.status === mn) {
          mo(r, i);
          var d = r.completedSegments;
          d.length === 1 && r.parentFlushed && e.partialBoundaries.push(r);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var S = e.onAllReady;
        S();
      }
    }
    function ma(e, r) {
      var i = r.blockedSegment;
      if (i.status === da) {
        Go(r.context);
        var s = null;
        s = kr, kr = r;
        try {
          Ut(e, r, r.node), xi(i.chunks, e.responseState, i.lastPushedText, i.textEmbedded), r.abortSet.delete(r), i.status = mn, yo(e, r.blockedBoundary, i);
        } catch (S) {
          if (so(), typeof S == "object" && S !== null && typeof S.then == "function") {
            var d = r.ping;
            S.then(d, d);
          } else
            r.abortSet.delete(r), i.status = yn, ga(e, r.blockedBoundary, i, S);
        } finally {
          kr = s;
        }
      }
    }
    function ol(e) {
      if (e.status !== xr) {
        var r = El(), i = Zr.current;
        Zr.current = Vi;
        var s;
        s = fa.getCurrentStack, fa.getCurrentStack = ai;
        var d = co;
        ca(e.responseState);
        try {
          var S = e.pingedTasks, x;
          for (x = 0; x < S.length; x++) {
            var P = S[x];
            ma(e, P);
          }
          S.splice(0, x), e.destination !== null && Sa(e, e.destination);
        } catch (L) {
          ho(e, L), ha(e, L);
        } finally {
          ca(d), Zr.current = i, fa.getCurrentStack = s, i === Vi && Go(r);
        }
      }
    }
    function So(e, r, i) {
      switch (i.parentFlushed = !0, i.status) {
        case da: {
          var s = i.id = e.nextSegmentId++;
          return i.lastPushedText = !1, i.textEmbedded = !1, Eo(r, e.responseState, s);
        }
        case mn: {
          i.status = Yi;
          for (var d = !0, S = i.chunks, x = 0, P = i.children, L = 0; L < P.length; L++) {
            for (var $ = P[L]; x < $.index; x++)
              T(r, S[x]);
            d = bo(e, r, $);
          }
          for (; x < S.length - 1; x++)
            T(r, S[x]);
          return x < S.length && (d = D(r, S[x])), d;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function bo(e, r, i) {
      var s = i.boundary;
      if (s === null)
        return So(e, r, i);
      if (s.parentFlushed = !0, s.forceClientRender)
        return Vt(r, e.responseState, s.errorDigest, s.errorMessage, s.errorComponentStack), So(e, r, i), ki(r, e.responseState);
      if (s.pendingTasks > 0) {
        s.rootSegmentID = e.nextSegmentId++, s.completedSegments.length > 0 && e.partialBoundaries.push(s);
        var d = s.id = Nt(e.responseState);
        return Gr(r, e.responseState, d), So(e, r, i), Yn(r, e.responseState);
      } else {
        if (s.byteSize > e.progressiveChunkSize)
          return s.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(s), Gr(r, e.responseState, s.id), So(e, r, i), Yn(r, e.responseState);
        Fa(r, e.responseState);
        var S = s.completedSegments;
        if (S.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var x = S[0];
        return bo(e, r, x), wl(r, e.responseState);
      }
    }
    function rs(e, r, i) {
      return yl(r, e.responseState, i.id, i.errorDigest, i.errorMessage, i.errorComponentStack);
    }
    function mi(e, r, i) {
      return E(r, e.responseState, i.formatContext, i.id), bo(e, r, i), A(r, i.formatContext);
    }
    function ya(e, r, i) {
      for (var s = i.completedSegments, d = 0; d < s.length; d++) {
        var S = s[d];
        al(e, r, i, S);
      }
      return s.length = 0, pl(r, e.responseState, i.id, i.rootSegmentID);
    }
    function ns(e, r, i) {
      for (var s = i.completedSegments, d = 0; d < s.length; d++) {
        var S = s[d];
        if (!al(e, r, i, S))
          return d++, s.splice(0, d), !1;
      }
      return s.splice(0, d), !0;
    }
    function al(e, r, i, s) {
      if (s.status === Yi)
        return !0;
      var d = s.id;
      if (d === -1) {
        var S = s.id = i.rootSegmentID;
        if (S === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return mi(e, r, s);
      } else
        return mi(e, r, s), Ot(r, e.responseState, d);
    }
    function Sa(e, r) {
      try {
        var i = e.completedRootSegment;
        i !== null && e.pendingRootTasks === 0 && (bo(e, r, i), e.completedRootSegment = null, zn(r, e.responseState));
        var s = e.clientRenderedBoundaries, d;
        for (d = 0; d < s.length; d++) {
          var S = s[d];
          if (!rs(e, r, S)) {
            e.destination = null, d++, s.splice(0, d);
            return;
          }
        }
        s.splice(0, d);
        var x = e.completedBoundaries;
        for (d = 0; d < x.length; d++) {
          var P = x[d];
          if (!ya(e, r, P)) {
            e.destination = null, d++, x.splice(0, d);
            return;
          }
        }
        x.splice(0, d);
        var L = e.partialBoundaries;
        for (d = 0; d < L.length; d++) {
          var $ = L[d];
          if (!ns(e, r, $)) {
            e.destination = null, d++, L.splice(0, d);
            return;
          }
        }
        L.splice(0, d);
        var Y = e.completedBoundaries;
        for (d = 0; d < Y.length; d++) {
          var K = Y[d];
          if (!ya(e, r, K)) {
            e.destination = null, d++, Y.splice(0, d);
            return;
          }
        }
        Y.splice(0, d);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && g("There was still abortable task at the root when we closed. This is a bug in React."), U(r));
      }
    }
    function os(e) {
      xe(function() {
        return ol(e);
      });
    }
    function t(e, r) {
      if (e.status === Gi) {
        e.status = xr, ke(r, e.fatalError);
        return;
      }
      if (e.status !== xr && e.destination === null) {
        e.destination = r;
        try {
          Sa(e, r);
        } catch (i) {
          ho(e, i), ha(e, i);
        }
      }
    }
    function n(e, r) {
      try {
        var i = e.abortableTasks;
        i.forEach(function(s) {
          return nl(s, e, r);
        }), i.clear(), e.destination !== null && Sa(e, e.destination);
      } catch (s) {
        ho(e, s), ha(e, s);
      }
    }
    function l() {
    }
    function f(e, r, i, s) {
      var d = !1, S = null, x = "", P = {
        push: function(K) {
          return K !== null && (x += K), !0;
        },
        destroy: function(K) {
          d = !0, S = K;
        }
      }, L = !1;
      function $() {
        L = !0;
      }
      var Y = oi(e, bl(i, r ? r.identifierPrefix : void 0), _a(), 1 / 0, l, void 0, $, void 0, void 0);
      if (os(Y), n(Y, s), t(Y, P), d)
        throw S;
      if (!L)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return x;
    }
    function v(e, r) {
      return f(e, r, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function b(e, r) {
      return f(e, r, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function k() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function _() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    xo.renderToNodeStream = k, xo.renderToStaticMarkup = b, xo.renderToStaticNodeStream = _, xo.renderToString = v, xo.version = M;
  }()), xo;
}
var fl = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hs;
function Rs() {
  return hs || (hs = 1, process.env.NODE_ENV !== "production" && function() {
    var de = Et, M = "18.2.0", N = de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ce(t) {
      {
        for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++)
          l[f - 1] = arguments[f];
        Q("warn", t, l);
      }
    }
    function g(t) {
      {
        for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++)
          l[f - 1] = arguments[f];
        Q("error", t, l);
      }
    }
    function Q(t, n, l) {
      {
        var f = N.ReactDebugCurrentFrame, v = f.getStackAddendum();
        v !== "" && (n += "%s", l = l.concat([v]));
        var b = l.map(function(k) {
          return String(k);
        });
        b.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, b);
      }
    }
    function xe(t) {
      t();
    }
    var le = 512, T = null, D = 0;
    function Pe(t) {
      T = new Uint8Array(le), D = 0;
    }
    function U(t, n) {
      if (n.length !== 0) {
        if (n.length > le) {
          D > 0 && (t.enqueue(new Uint8Array(T.buffer, 0, D)), T = new Uint8Array(le), D = 0), t.enqueue(n);
          return;
        }
        var l = n, f = T.length - D;
        f < l.length && (f === 0 ? t.enqueue(T) : (T.set(l.subarray(0, f), D), t.enqueue(T), l = l.subarray(f)), T = new Uint8Array(le), D = 0), T.set(l, D), D += l.length;
      }
    }
    function re(t, n) {
      return U(t, n), !0;
    }
    function yt(t) {
      T && D > 0 && (t.enqueue(new Uint8Array(T.buffer, 0, D)), T = null, D = 0);
    }
    function ke(t) {
      t.close();
    }
    var pe = new TextEncoder();
    function W(t) {
      return pe.encode(t);
    }
    function O(t) {
      return pe.encode(t);
    }
    function ne(t, n) {
      typeof t.error == "function" ? t.error(n) : t.close();
    }
    function qe(t) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, l = n && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function De(t) {
      try {
        return ee(t), !1;
      } catch {
        return !0;
      }
    }
    function ee(t) {
      return "" + t;
    }
    function ye(t, n) {
      if (De(t))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", n, qe(t)), ee(t);
    }
    function ue(t, n) {
      if (De(t))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", n, qe(t)), ee(t);
    }
    function St(t) {
      if (De(t))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", qe(t)), ee(t);
    }
    var Se = Object.prototype.hasOwnProperty, Tt = 0, ct = 1, $e = 2, Ne = 3, Ve = 4, Rt = 5, ir = 6, lr = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ft = lr + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ke = new RegExp("^[" + lr + "][" + ft + "]*$"), Jt = {}, Ce = {};
    function Ee(t) {
      return Se.call(Ce, t) ? !0 : Se.call(Jt, t) ? !1 : Ke.test(t) ? (Ce[t] = !0, !0) : (Jt[t] = !0, g("Invalid attribute name: `%s`", t), !1);
    }
    function Qt(t, n, l, f) {
      if (l !== null && l.type === Tt)
        return !1;
      switch (typeof n) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (f)
            return !1;
          if (l !== null)
            return !l.acceptsBooleans;
          var v = t.toLowerCase().slice(0, 5);
          return v !== "data-" && v !== "aria-";
        }
        default:
          return !1;
      }
    }
    function jt(t) {
      return Te.hasOwnProperty(t) ? Te[t] : null;
    }
    function Ae(t, n, l, f, v, b, k) {
      this.acceptsBooleans = n === $e || n === Ne || n === Ve, this.attributeName = f, this.attributeNamespace = v, this.mustUseProperty = l, this.propertyName = t, this.type = n, this.sanitizeURL = b, this.removeEmptyString = k;
    }
    var Te = {}, It = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    It.forEach(function(t) {
      Te[t] = new Ae(
        t,
        Tt,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
      var n = t[0], l = t[1];
      Te[n] = new Ae(
        n,
        ct,
        !1,
        // mustUseProperty
        l,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
      Te[t] = new Ae(
        t,
        $e,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
      Te[t] = new Ae(
        t,
        $e,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(t) {
      Te[t] = new Ae(
        t,
        Ne,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      Te[t] = new Ae(
        t,
        Ne,
        !0,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      Te[t] = new Ae(
        t,
        Ve,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      Te[t] = new Ae(
        t,
        ir,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(t) {
      Te[t] = new Ae(
        t,
        Rt,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var bt = /[\-\:]([a-z])/g, Xe = function(t) {
      return t[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var n = t.replace(bt, Xe);
      Te[n] = new Ae(
        n,
        ct,
        !1,
        // mustUseProperty
        t,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var n = t.replace(bt, Xe);
      Te[n] = new Ae(
        n,
        ct,
        !1,
        // mustUseProperty
        t,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var n = t.replace(bt, Xe);
      Te[n] = new Ae(
        n,
        ct,
        !1,
        // mustUseProperty
        t,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(t) {
      Te[t] = new Ae(
        t,
        ct,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var it = "xlinkHref";
    Te[it] = new Ae(
      "xlinkHref",
      ct,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(t) {
      Te[t] = new Ae(
        t,
        ct,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Ze = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Kt(t, n) {
      return t + n.charAt(0).toUpperCase() + n.substring(1);
    }
    var ze = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ze).forEach(function(t) {
      ze.forEach(function(n) {
        Ze[Kt(n, t)] = Ze[t];
      });
    });
    var Je = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pt(t, n) {
      Je[n.type] || n.onChange || n.onInput || n.readOnly || n.disabled || n.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), n.onChange || n.readOnly || n.disabled || n.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function wt(t, n) {
      if (t.indexOf("-") === -1)
        return typeof n.is == "string";
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Cr = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, lt = {}, xt = new RegExp("^(aria)-[" + ft + "]*$"), qt = new RegExp("^(aria)[A-Z][" + ft + "]*$");
    function jr(t, n) {
      {
        if (Se.call(lt, n) && lt[n])
          return !0;
        if (qt.test(n)) {
          var l = "aria-" + n.slice(4).toLowerCase(), f = Cr.hasOwnProperty(l) ? l : null;
          if (f == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", n), lt[n] = !0, !0;
          if (n !== f)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", n, f), lt[n] = !0, !0;
        }
        if (xt.test(n)) {
          var v = n.toLowerCase(), b = Cr.hasOwnProperty(v) ? v : null;
          if (b == null)
            return lt[n] = !0, !1;
          if (n !== b)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", n, b), lt[n] = !0, !0;
        }
      }
      return !0;
    }
    function et(t, n) {
      {
        var l = [];
        for (var f in n) {
          var v = jr(t, f);
          v || l.push(f);
        }
        var b = l.map(function(k) {
          return "`" + k + "`";
        }).join(", ");
        l.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", b, t) : l.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", b, t);
      }
    }
    function Ye(t, n) {
      wt(t, n) || et(t, n);
    }
    var He = !1;
    function sr(t, n) {
      {
        if (t !== "input" && t !== "textarea" && t !== "select")
          return;
        n != null && n.value === null && !He && (He = !0, t === "select" && n.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
      }
    }
    var ur = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, _t = function() {
    };
    {
      var Me = {}, cr = /^on./, Er = /^on[^A-Z]/, fr = new RegExp("^(aria)-[" + ft + "]*$"), Tr = new RegExp("^(aria)[A-Z][" + ft + "]*$");
      _t = function(t, n, l, f) {
        if (Se.call(Me, n) && Me[n])
          return !0;
        var v = n.toLowerCase();
        if (v === "onfocusin" || v === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Me[n] = !0, !0;
        if (f != null) {
          var b = f.registrationNameDependencies, k = f.possibleRegistrationNames;
          if (b.hasOwnProperty(n))
            return !0;
          var _ = k.hasOwnProperty(v) ? k[v] : null;
          if (_ != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", n, _), Me[n] = !0, !0;
          if (cr.test(n))
            return g("Unknown event handler property `%s`. It will be ignored.", n), Me[n] = !0, !0;
        } else if (cr.test(n))
          return Er.test(n) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", n), Me[n] = !0, !0;
        if (fr.test(n) || Tr.test(n))
          return !0;
        if (v === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Me[n] = !0, !0;
        if (v === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Me[n] = !0, !0;
        if (v === "is" && l !== null && l !== void 0 && typeof l != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof l), Me[n] = !0, !0;
        if (typeof l == "number" && isNaN(l))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", n), Me[n] = !0, !0;
        var e = jt(n), r = e !== null && e.type === Tt;
        if (ur.hasOwnProperty(v)) {
          var i = ur[v];
          if (i !== n)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", n, i), Me[n] = !0, !0;
        } else if (!r && n !== v)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", n, v), Me[n] = !0, !0;
        return typeof l == "boolean" && Qt(n, l, e, !1) ? (l ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', l, n, n, l, n) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', l, n, n, l, n, n, n), Me[n] = !0, !0) : r ? !0 : Qt(n, l, e, !1) ? (Me[n] = !0, !1) : ((l === "false" || l === "true") && e !== null && e.type === Ne && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", l, n, l === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', n, l), Me[n] = !0), !0);
      };
    }
    var dr = function(t, n, l) {
      {
        var f = [];
        for (var v in n) {
          var b = _t(t, v, n[v], l);
          b || f.push(v);
        }
        var k = f.map(function(_) {
          return "`" + _ + "`";
        }).join(", ");
        f.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", k, t) : f.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", k, t);
      }
    };
    function Kr(t, n, l) {
      wt(t, n) || dr(t, n, l);
    }
    var Rr = function() {
    };
    {
      var Ht = /^(?:webkit|moz|o)[A-Z]/, Ir = /^-ms-/, Hr = /-(.)/g, Ge = /;\s*$/, dt = {}, tt = {}, fe = !1, kt = !1, er = function(t) {
        return t.replace(Hr, function(n, l) {
          return l.toUpperCase();
        });
      }, tr = function(t) {
        dt.hasOwnProperty(t) && dt[t] || (dt[t] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          t,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          er(t.replace(Ir, "ms-"))
        ));
      }, pt = function(t) {
        dt.hasOwnProperty(t) && dt[t] || (dt[t] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", t, t.charAt(0).toUpperCase() + t.slice(1)));
      }, pr = function(t, n) {
        tt.hasOwnProperty(n) && tt[n] || (tt[n] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, t, n.replace(Ge, "")));
      }, Ct = function(t, n) {
        fe || (fe = !0, g("`NaN` is an invalid value for the `%s` css style property.", t));
      }, Ie = function(t, n) {
        kt || (kt = !0, g("`Infinity` is an invalid value for the `%s` css style property.", t));
      };
      Rr = function(t, n) {
        t.indexOf("-") > -1 ? tr(t) : Ht.test(t) ? pt(t) : Ge.test(n) && pr(t, n), typeof n == "number" && (isNaN(n) ? Ct(t, n) : isFinite(n) || Ie(t, n));
      };
    }
    var Pr = Rr, _r = /["'&<>]/;
    function Fr(t) {
      St(t);
      var n = "" + t, l = _r.exec(n);
      if (!l)
        return n;
      var f, v = "", b, k = 0;
      for (b = l.index; b < n.length; b++) {
        switch (n.charCodeAt(b)) {
          case 34:
            f = "&quot;";
            break;
          case 38:
            f = "&amp;";
            break;
          case 39:
            f = "&#x27;";
            break;
          case 60:
            f = "&lt;";
            break;
          case 62:
            f = "&gt;";
            break;
          default:
            continue;
        }
        k !== b && (v += n.substring(k, b)), k = b + 1, v += f;
      }
      return k !== b ? v + n.substring(k, b) : v;
    }
    function Oe(t) {
      return typeof t == "boolean" || typeof t == "number" ? "" + t : Fr(t);
    }
    var Dr = /([A-Z])/g, qr = /^ms-/;
    function en(t) {
      return t.replace(Dr, "-$1").toLowerCase().replace(qr, "-ms-");
    }
    var w = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, B = !1;
    function z(t) {
      !B && w.test(t) && (B = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(t)));
    }
    var X = Array.isArray;
    function oe(t) {
      return X(t);
    }
    var se = O("<script>"), ie = O("<\/script>"), q = O('<script src="'), Le = O('<script type="module" src="'), ge = O('" async=""><\/script>');
    function me(t) {
      return St(t), ("" + t).replace(_e, st);
    }
    var _e = /(<\/|<)(s)(cript)/gi, st = function(t, n, l, f) {
      return "" + n + (l === "s" ? "\\u0073" : "\\u0053") + f;
    };
    function Wt(t, n, l, f, v) {
      var b = t === void 0 ? "" : t, k = n === void 0 ? se : O('<script nonce="' + Oe(n) + '">'), _ = [];
      if (l !== void 0 && _.push(k, W(me(l)), ie), f !== void 0)
        for (var e = 0; e < f.length; e++)
          _.push(q, W(Oe(f[e])), ge);
      if (v !== void 0)
        for (var r = 0; r < v.length; r++)
          _.push(Le, W(Oe(v[r])), ge);
      return {
        bootstrapChunks: _,
        startInlineScript: k,
        placeholderPrefix: O(b + "P:"),
        segmentPrefix: O(b + "S:"),
        boundaryPrefix: b + "B:",
        idPrefix: b,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Be = 0, Ue = 1, zt = 2, Ft = 3, Qe = 4, Wr = 5, $t = 6, Nt = 7;
    function ut(t, n) {
      return {
        insertionMode: t,
        selectedValue: n
      };
    }
    function rr(t) {
      var n = t === "http://www.w3.org/2000/svg" ? zt : t === "http://www.w3.org/1998/Math/MathML" ? Ft : Be;
      return ut(n, null);
    }
    function hr(t, n, l) {
      switch (n) {
        case "select":
          return ut(Ue, l.value != null ? l.value : l.defaultValue);
        case "svg":
          return ut(zt, null);
        case "math":
          return ut(Ft, null);
        case "foreignObject":
          return ut(Ue, null);
        case "table":
          return ut(Qe, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return ut(Wr, null);
        case "colgroup":
          return ut(Nt, null);
        case "tr":
          return ut($t, null);
      }
      return t.insertionMode >= Qe || t.insertionMode === Be ? ut(Ue, null) : t;
    }
    var tn = null;
    function rn(t) {
      var n = t.nextSuspenseID++;
      return O(t.boundaryPrefix + n.toString(16));
    }
    function zr(t, n, l) {
      var f = t.idPrefix, v = ":" + f + "R" + n;
      return l > 0 && (v += "H" + l.toString(32)), v + ":";
    }
    function vr(t) {
      return Oe(t);
    }
    var nn = O("<!-- -->");
    function $r(t, n, l, f) {
      return n === "" ? f : (f && t.push(nn), t.push(W(vr(n))), !0);
    }
    function Nr(t, n, l, f) {
      l && f && t.push(nn);
    }
    var o = /* @__PURE__ */ new Map();
    function u(t) {
      var n = o.get(t);
      if (n !== void 0)
        return n;
      var l = O(Oe(en(t)));
      return o.set(t, l), l;
    }
    var h = O(' style="'), m = O(":"), R = O(";");
    function C(t, n, l) {
      if (typeof l != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var f = !0;
      for (var v in l)
        if (Se.call(l, v)) {
          var b = l[v];
          if (!(b == null || typeof b == "boolean" || b === "")) {
            var k = void 0, _ = void 0, e = v.indexOf("--") === 0;
            e ? (k = W(Oe(v)), ue(b, v), _ = W(Oe(("" + b).trim()))) : (Pr(v, b), k = u(v), typeof b == "number" ? b !== 0 && !Se.call(Ze, v) ? _ = W(b + "px") : _ = W("" + b) : (ue(b, v), _ = W(Oe(("" + b).trim())))), f ? (f = !1, t.push(h, k, m, _)) : t.push(R, k, m, _);
          }
        }
      f || t.push(V);
    }
    var F = O(" "), j = O('="'), V = O('"'), Z = O('=""');
    function G(t, n, l, f) {
      switch (l) {
        case "style": {
          C(t, n, f);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(l.length > 2 && (l[0] === "o" || l[0] === "O") && (l[1] === "n" || l[1] === "N"))
      ) {
        var v = jt(l);
        if (v !== null) {
          switch (typeof f) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!v.acceptsBooleans)
                return;
          }
          var b = v.attributeName, k = W(b);
          switch (v.type) {
            case Ne:
              f && t.push(F, k, Z);
              return;
            case Ve:
              f === !0 ? t.push(F, k, Z) : f === !1 || t.push(F, k, j, W(Oe(f)), V);
              return;
            case Rt:
              isNaN(f) || t.push(F, k, j, W(Oe(f)), V);
              break;
            case ir:
              !isNaN(f) && f >= 1 && t.push(F, k, j, W(Oe(f)), V);
              break;
            default:
              v.sanitizeURL && (ye(f, b), f = "" + f, z(f)), t.push(F, k, j, W(Oe(f)), V);
          }
        } else if (Ee(l)) {
          switch (typeof f) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var _ = l.toLowerCase().slice(0, 5);
              if (_ !== "data-" && _ !== "aria-")
                return;
            }
          }
          t.push(F, W(l), j, W(Oe(f)), V);
        }
      }
    }
    var he = O(">"), ht = O("/>");
    function rt(t, n, l) {
      if (n != null) {
        if (l != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof n != "object" || !("__html" in n))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var f = n.__html;
        f != null && (St(f), t.push(W("" + f)));
      }
    }
    var nt = !1, nr = !1, Dt = !1, Vr = !1, gr = !1, Ar = !1, or = !1;
    function on(t, n) {
      {
        var l = t[n];
        if (l != null) {
          var f = oe(l);
          t.multiple && !f ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.", n) : !t.multiple && f && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", n);
        }
      }
    }
    function wa(t, n, l) {
      Pt("select", n), on(n, "value"), on(n, "defaultValue"), n.value !== void 0 && n.defaultValue !== void 0 && !Dt && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Dt = !0), t.push(At("select"));
      var f = null, v = null;
      for (var b in n)
        if (Se.call(n, b)) {
          var k = n[b];
          if (k == null)
            continue;
          switch (b) {
            case "children":
              f = k;
              break;
            case "dangerouslySetInnerHTML":
              v = k;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              G(t, l, b, k);
              break;
          }
        }
      return t.push(he), rt(t, v, f), f;
    }
    function xa(t) {
      var n = "";
      return de.Children.forEach(t, function(l) {
        l != null && (n += l, !gr && typeof l != "string" && typeof l != "number" && (gr = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), n;
    }
    var Hn = O(' selected=""');
    function ka(t, n, l, f) {
      var v = f.selectedValue;
      t.push(At("option"));
      var b = null, k = null, _ = null, e = null;
      for (var r in n)
        if (Se.call(n, r)) {
          var i = n[r];
          if (i == null)
            continue;
          switch (r) {
            case "children":
              b = i;
              break;
            case "selected":
              _ = i, or || (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), or = !0);
              break;
            case "dangerouslySetInnerHTML":
              e = i;
              break;
            case "value":
              k = i;
            default:
              G(t, l, r, i);
              break;
          }
        }
      if (v != null) {
        var s;
        if (k !== null ? (ye(k, "value"), s = "" + k) : (e !== null && (Ar || (Ar = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), s = xa(b)), oe(v))
          for (var d = 0; d < v.length; d++) {
            ye(v[d], "value");
            var S = "" + v[d];
            if (S === s) {
              t.push(Hn);
              break;
            }
          }
        else
          ye(v, "select.value"), "" + v === s && t.push(Hn);
      } else
        _ && t.push(Hn);
      return t.push(he), rt(t, e, b), b;
    }
    function Wn(t, n, l) {
      Pt("input", n), n.checked !== void 0 && n.defaultChecked !== void 0 && !nr && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), nr = !0), n.value !== void 0 && n.defaultValue !== void 0 && !nt && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), nt = !0), t.push(At("input"));
      var f = null, v = null, b = null, k = null;
      for (var _ in n)
        if (Se.call(n, _)) {
          var e = n[_];
          if (e == null)
            continue;
          switch (_) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              k = e;
              break;
            case "defaultValue":
              v = e;
              break;
            case "checked":
              b = e;
              break;
            case "value":
              f = e;
              break;
            default:
              G(t, l, _, e);
              break;
          }
        }
      return b !== null ? G(t, l, "checked", b) : k !== null && G(t, l, "checked", k), f !== null ? G(t, l, "value", f) : v !== null && G(t, l, "value", v), t.push(ht), null;
    }
    function ar(t, n, l) {
      Pt("textarea", n), n.value !== void 0 && n.defaultValue !== void 0 && !Vr && (g("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vr = !0), t.push(At("textarea"));
      var f = null, v = null, b = null;
      for (var k in n)
        if (Se.call(n, k)) {
          var _ = n[k];
          if (_ == null)
            continue;
          switch (k) {
            case "children":
              b = _;
              break;
            case "value":
              f = _;
              break;
            case "defaultValue":
              v = _;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              G(t, l, k, _);
              break;
          }
        }
      if (f === null && v !== null && (f = v), t.push(he), b != null) {
        if (g("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), f != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (oe(b)) {
          if (b.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          St(b[0]), f = "" + b[0];
        }
        St(b), f = "" + b;
      }
      return typeof f == "string" && f[0] === `
` && t.push(Mr), f !== null && (ye(f, "value"), t.push(W(vr("" + f)))), null;
    }
    function an(t, n, l, f) {
      t.push(At(l));
      for (var v in n)
        if (Se.call(n, v)) {
          var b = n[v];
          if (b == null)
            continue;
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(l + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              G(t, f, v, b);
              break;
          }
        }
      return t.push(ht), null;
    }
    function bn(t, n, l) {
      t.push(At("menuitem"));
      for (var f in n)
        if (Se.call(n, f)) {
          var v = n[f];
          if (v == null)
            continue;
          switch (f) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              G(t, l, f, v);
              break;
          }
        }
      return t.push(he), null;
    }
    function we(t, n, l) {
      t.push(At("title"));
      var f = null;
      for (var v in n)
        if (Se.call(n, v)) {
          var b = n[v];
          if (b == null)
            continue;
          switch (v) {
            case "children":
              f = b;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              G(t, l, v, b);
              break;
          }
        }
      t.push(he);
      {
        var k = Array.isArray(f) && f.length < 2 ? f[0] || null : f;
        Array.isArray(f) && f.length > 1 ? g("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : k != null && k.$$typeof != null ? g("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : k != null && typeof k != "string" && typeof k != "number" && g("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return f;
    }
    function mr(t, n, l, f) {
      t.push(At(l));
      var v = null, b = null;
      for (var k in n)
        if (Se.call(n, k)) {
          var _ = n[k];
          if (_ == null)
            continue;
          switch (k) {
            case "children":
              v = _;
              break;
            case "dangerouslySetInnerHTML":
              b = _;
              break;
            default:
              G(t, f, k, _);
              break;
          }
        }
      return t.push(he), rt(t, b, v), typeof v == "string" ? (t.push(W(vr(v))), null) : v;
    }
    function vt(t, n, l, f) {
      t.push(At(l));
      var v = null, b = null;
      for (var k in n)
        if (Se.call(n, k)) {
          var _ = n[k];
          if (_ == null)
            continue;
          switch (k) {
            case "children":
              v = _;
              break;
            case "dangerouslySetInnerHTML":
              b = _;
              break;
            case "style":
              C(t, f, _);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              Ee(k) && typeof _ != "function" && typeof _ != "symbol" && t.push(F, W(k), j, W(Oe(_)), V);
              break;
          }
        }
      return t.push(he), rt(t, b, v), v;
    }
    var Mr = O(`
`);
    function yr(t, n, l, f) {
      t.push(At(l));
      var v = null, b = null;
      for (var k in n)
        if (Se.call(n, k)) {
          var _ = n[k];
          if (_ == null)
            continue;
          switch (k) {
            case "children":
              v = _;
              break;
            case "dangerouslySetInnerHTML":
              b = _;
              break;
            default:
              G(t, f, k, _);
              break;
          }
        }
      if (t.push(he), b != null) {
        if (v != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof b != "object" || !("__html" in b))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var e = b.__html;
        e != null && (typeof e == "string" && e.length > 0 && e[0] === `
` ? t.push(Mr, W(e)) : (St(e), t.push(W("" + e))));
      }
      return typeof v == "string" && v[0] === `
` && t.push(Mr), v;
    }
    var wn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Sr = /* @__PURE__ */ new Map();
    function At(t) {
      var n = Sr.get(t);
      if (n === void 0) {
        if (!wn.test(t))
          throw new Error("Invalid tag: " + t);
        n = O("<" + t), Sr.set(t, n);
      }
      return n;
    }
    var zn = O("<!DOCTYPE html>");
    function $n(t, n, l, f, v) {
      switch (Ye(n, l), sr(n, l), Kr(n, l, null), !l.suppressContentEditableWarning && l.contentEditable && l.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), v.insertionMode !== zt && v.insertionMode !== Ft && n.indexOf("-") === -1 && typeof l.is != "string" && n.toLowerCase() !== n && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", n), n) {
        case "select":
          return wa(t, l, f);
        case "option":
          return ka(t, l, f, v);
        case "textarea":
          return ar(t, l, f);
        case "input":
          return Wn(t, l, f);
        case "menuitem":
          return bn(t, l, f);
        case "title":
          return we(t, l, f);
        case "listing":
        case "pre":
          return yr(t, l, n, f);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return an(t, l, n, f);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return mr(t, l, n, f);
        case "html":
          return v.insertionMode === Be && t.push(zn), mr(t, l, n, f);
        default:
          return n.indexOf("-") === -1 && typeof l.is != "string" ? mr(t, l, n, f) : vt(t, l, n, f);
      }
    }
    var Co = O("</"), Eo = O(">");
    function To(t, n, l) {
      switch (n) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          t.push(Co, W(n), Eo);
      }
    }
    function Ca(t, n) {
      for (var l = n.bootstrapChunks, f = 0; f < l.length - 1; f++)
        U(t, l[f]);
      return f < l.length ? re(t, l[f]) : !0;
    }
    var Ea = O('<template id="'), xn = O('"></template>');
    function kn(t, n, l) {
      U(t, Ea), U(t, n.placeholderPrefix);
      var f = W(l.toString(16));
      return U(t, f), re(t, xn);
    }
    var Cn = O("<!--$-->"), ln = O('<!--$?--><template id="'), Ta = O('"></template>'), sn = O("<!--$!-->"), Nn = O("<!--/$-->"), Vn = O("<template"), Yr = O('"'), Gr = O(' data-dgst="'), En = O(' data-msg="'), Ro = O(' data-stck="'), Yn = O("></template>");
    function Io(t, n) {
      return re(t, Cn);
    }
    function Tn(t, n, l) {
      if (U(t, ln), l === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return U(t, l), re(t, Ta);
    }
    function gt(t, n, l, f, v) {
      var b;
      return b = re(t, sn), U(t, Vn), l && (U(t, Gr), U(t, W(Oe(l))), U(t, Yr)), f && (U(t, En), U(t, W(Oe(f))), U(t, Yr)), v && (U(t, Ro), U(t, W(Oe(v))), U(t, Yr)), b = re(t, Yn), b;
    }
    function Po(t, n) {
      return re(t, Nn);
    }
    function Rn(t, n) {
      return re(t, Nn);
    }
    function Ra(t, n) {
      return re(t, Nn);
    }
    var _o = O('<div hidden id="'), In = O('">'), Fo = O("</div>"), Do = O('<svg aria-hidden="true" style="display:none" id="'), Pn = O('">'), _n = O("</svg>"), Ao = O('<math aria-hidden="true" style="display:none" id="'), Mo = O('">'), Oo = O("</math>"), Gn = O('<table hidden id="'), Lo = O('">'), a = O("</table>"), c = O('<table hidden><tbody id="'), p = O('">'), y = O("</tbody></table>"), I = O('<table hidden><tr id="'), E = O('">'), A = O("</tr></table>"), H = O('<table hidden><colgroup id="'), J = O('">'), ae = O("</colgroup></table>");
    function te(t, n, l, f) {
      switch (l.insertionMode) {
        case Be:
        case Ue:
          return U(t, _o), U(t, n.segmentPrefix), U(t, W(f.toString(16))), re(t, In);
        case zt:
          return U(t, Do), U(t, n.segmentPrefix), U(t, W(f.toString(16))), re(t, Pn);
        case Ft:
          return U(t, Ao), U(t, n.segmentPrefix), U(t, W(f.toString(16))), re(t, Mo);
        case Qe:
          return U(t, Gn), U(t, n.segmentPrefix), U(t, W(f.toString(16))), re(t, Lo);
        case Wr:
          return U(t, c), U(t, n.segmentPrefix), U(t, W(f.toString(16))), re(t, p);
        case $t:
          return U(t, I), U(t, n.segmentPrefix), U(t, W(f.toString(16))), re(t, E);
        case Nt:
          return U(t, H), U(t, n.segmentPrefix), U(t, W(f.toString(16))), re(t, J);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Re(t, n) {
      switch (n.insertionMode) {
        case Be:
        case Ue:
          return re(t, Fo);
        case zt:
          return re(t, _n);
        case Ft:
          return re(t, Oo);
        case Qe:
          return re(t, a);
        case Wr:
          return re(t, y);
        case $t:
          return re(t, A);
        case Nt:
          return re(t, ae);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var mt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Mt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Ot = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Fn = O(mt + ';$RS("'), Bo = O('$RS("'), Xn = O('","'), dl = O('")<\/script>');
    function pl(t, n, l) {
      U(t, n.startInlineScript), n.sentCompleteSegmentFunction ? U(t, Bo) : (n.sentCompleteSegmentFunction = !0, U(t, Fn)), U(t, n.segmentPrefix);
      var f = W(l.toString(16));
      return U(t, f), U(t, Xn), U(t, n.placeholderPrefix), U(t, f), re(t, dl);
    }
    var hl = O(Mt + ';$RC("'), vl = O('$RC("'), gl = O('","'), ml = O('")<\/script>');
    function Ia(t, n, l, f) {
      if (U(t, n.startInlineScript), n.sentCompleteBoundaryFunction ? U(t, vl) : (n.sentCompleteBoundaryFunction = !0, U(t, hl)), l === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var v = W(f.toString(16));
      return U(t, l), U(t, gl), U(t, n.segmentPrefix), U(t, v), re(t, ml);
    }
    var yl = O(Ot + ';$RX("'), Sl = O('$RX("'), Pa = O('"'), bl = O(")<\/script>"), _a = O(",");
    function wi(t, n, l, f, v, b) {
      if (U(t, n.startInlineScript), n.sentClientRenderFunction ? U(t, Sl) : (n.sentClientRenderFunction = !0, U(t, yl)), l === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return U(t, l), U(t, Pa), (f || v || b) && (U(t, _a), U(t, W(Fa(f || "")))), (v || b) && (U(t, _a), U(t, W(Fa(v || "")))), b && (U(t, _a), U(t, W(Fa(b)))), re(t, bl);
    }
    var xi = /[<\u2028\u2029]/g;
    function Fa(t) {
      var n = JSON.stringify(t);
      return n.replace(xi, function(l) {
        switch (l) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var Vt = Object.assign, wl = Symbol.for("react.element"), ki = Symbol.for("react.portal"), Lt = Symbol.for("react.fragment"), Ci = Symbol.for("react.strict_mode"), Da = Symbol.for("react.profiler"), Uo = Symbol.for("react.provider"), jo = Symbol.for("react.context"), Ho = Symbol.for("react.forward_ref"), Zn = Symbol.for("react.suspense"), Jn = Symbol.for("react.suspense_list"), Qn = Symbol.for("react.memo"), Dn = Symbol.for("react.lazy"), Aa = Symbol.for("react.scope"), Ma = Symbol.for("react.debug_trace_mode"), Wo = Symbol.for("react.legacy_hidden"), xl = Symbol.for("react.default_value"), Ei = Symbol.iterator, kl = "@@iterator";
    function Cl(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = Ei && t[Ei] || t[kl];
      return typeof n == "function" ? n : null;
    }
    function Ti(t, n, l) {
      var f = t.displayName;
      if (f)
        return f;
      var v = n.displayName || n.name || "";
      return v !== "" ? l + "(" + v + ")" : l;
    }
    function Ri(t) {
      return t.displayName || "Context";
    }
    function We(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case Lt:
          return "Fragment";
        case ki:
          return "Portal";
        case Da:
          return "Profiler";
        case Ci:
          return "StrictMode";
        case Zn:
          return "Suspense";
        case Jn:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case jo:
            var n = t;
            return Ri(n) + ".Consumer";
          case Uo:
            var l = t;
            return Ri(l._context) + ".Provider";
          case Ho:
            return Ti(t, t.render, "ForwardRef");
          case Qn:
            var f = t.displayName || null;
            return f !== null ? f : We(t.type) || "Memo";
          case Dn: {
            var v = t, b = v._payload, k = v._init;
            try {
              return We(k(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Kn = 0, Oa, je, An, La, Ba, Ua, ja;
    function Ha() {
    }
    Ha.__reactDisabledLog = !0;
    function Ii() {
      {
        if (Kn === 0) {
          Oa = console.log, je = console.info, An = console.warn, La = console.error, Ba = console.group, Ua = console.groupCollapsed, ja = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Ha,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Kn++;
      }
    }
    function Pi() {
      {
        if (Kn--, Kn === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Vt({}, t, {
              value: Oa
            }),
            info: Vt({}, t, {
              value: je
            }),
            warn: Vt({}, t, {
              value: An
            }),
            error: Vt({}, t, {
              value: La
            }),
            group: Vt({}, t, {
              value: Ba
            }),
            groupCollapsed: Vt({}, t, {
              value: Ua
            }),
            groupEnd: Vt({}, t, {
              value: ja
            })
          });
        }
        Kn < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var zo = N.ReactCurrentDispatcher, Wa;
    function qn(t, n, l) {
      {
        if (Wa === void 0)
          try {
            throw Error();
          } catch (v) {
            var f = v.stack.trim().match(/\n( *(at )?)/);
            Wa = f && f[1] || "";
          }
        return `
` + Wa + t;
      }
    }
    var eo = !1, Mn;
    {
      var to = typeof WeakMap == "function" ? WeakMap : Map;
      Mn = new to();
    }
    function ro(t, n) {
      if (!t || eo)
        return "";
      {
        var l = Mn.get(t);
        if (l !== void 0)
          return l;
      }
      var f;
      eo = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = zo.current, zo.current = null, Ii();
      try {
        if (n) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (x) {
              f = x;
            }
            Reflect.construct(t, [], k);
          } else {
            try {
              k.call();
            } catch (x) {
              f = x;
            }
            t.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            f = x;
          }
          t();
        }
      } catch (x) {
        if (x && f && typeof x.stack == "string") {
          for (var _ = x.stack.split(`
`), e = f.stack.split(`
`), r = _.length - 1, i = e.length - 1; r >= 1 && i >= 0 && _[r] !== e[i]; )
            i--;
          for (; r >= 1 && i >= 0; r--, i--)
            if (_[r] !== e[i]) {
              if (r !== 1 || i !== 1)
                do
                  if (r--, i--, i < 0 || _[r] !== e[i]) {
                    var s = `
` + _[r].replace(" at new ", " at ");
                    return t.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", t.displayName)), typeof t == "function" && Mn.set(t, s), s;
                  }
                while (r >= 1 && i >= 0);
              break;
            }
        }
      } finally {
        eo = !1, zo.current = b, Pi(), Error.prepareStackTrace = v;
      }
      var d = t ? t.displayName || t.name : "", S = d ? qn(d) : "";
      return typeof t == "function" && Mn.set(t, S), S;
    }
    function $o(t, n, l) {
      return ro(t, !0);
    }
    function _i(t, n, l) {
      return ro(t, !1);
    }
    function za(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function $a(t, n, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ro(t, za(t));
      if (typeof t == "string")
        return qn(t);
      switch (t) {
        case Zn:
          return qn("Suspense");
        case Jn:
          return qn("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Ho:
            return _i(t.render);
          case Qn:
            return $a(t.type, n, l);
          case Dn: {
            var f = t, v = f._payload, b = f._init;
            try {
              return $a(b(v), n, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Na = {}, Fi = N.ReactDebugCurrentFrame;
    function On(t) {
      if (t) {
        var n = t._owner, l = $a(t.type, t._source, n ? n.type : null);
        Fi.setExtraStackFrame(l);
      } else
        Fi.setExtraStackFrame(null);
    }
    function Va(t, n, l, f, v) {
      {
        var b = Function.call.bind(Se);
        for (var k in t)
          if (b(t, k)) {
            var _ = void 0;
            try {
              if (typeof t[k] != "function") {
                var e = Error((f || "React class") + ": " + l + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw e.name = "Invariant Violation", e;
              }
              _ = t[k](n, k, f, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (r) {
              _ = r;
            }
            _ && !(_ instanceof Error) && (On(v), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", l, k, typeof _), On(null)), _ instanceof Error && !(_.message in Na) && (Na[_.message] = !0, On(v), g("Failed %s type: %s", l, _.message), On(null));
          }
      }
    }
    var No;
    No = {};
    var un = {};
    Object.freeze(un);
    function Ya(t, n) {
      {
        var l = t.contextTypes;
        if (!l)
          return un;
        var f = {};
        for (var v in l)
          f[v] = n[v];
        {
          var b = We(t) || "Unknown";
          Va(l, f, "context", b);
        }
        return f;
      }
    }
    function Ga(t, n, l, f) {
      {
        if (typeof t.getChildContext != "function") {
          {
            var v = We(n) || "Unknown";
            No[v] || (No[v] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", v, v));
          }
          return l;
        }
        var b = t.getChildContext();
        for (var k in b)
          if (!(k in f))
            throw new Error((We(n) || "Unknown") + '.getChildContext(): key "' + k + '" is not defined in childContextTypes.');
        {
          var _ = We(n) || "Unknown";
          Va(f, b, "child context", _);
        }
        return Vt({}, l, b);
      }
    }
    var Xr;
    Xr = {};
    var Di = null, cn = null;
    function fn(t) {
      t.context._currentValue = t.parentValue;
    }
    function Xa(t) {
      t.context._currentValue = t.value;
    }
    function br(t, n) {
      if (t !== n) {
        fn(t);
        var l = t.parent, f = n.parent;
        if (l === null) {
          if (f !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (f === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          br(l, f);
        }
        Xa(n);
      }
    }
    function Vo(t) {
      fn(t);
      var n = t.parent;
      n !== null && Vo(n);
    }
    function Yo(t) {
      var n = t.parent;
      n !== null && Yo(n), Xa(t);
    }
    function no(t, n) {
      fn(t);
      var l = t.parent;
      if (l === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      l.depth === n.depth ? br(l, n) : no(l, n);
    }
    function Za(t, n) {
      var l = n.parent;
      if (l === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === l.depth ? br(t, l) : Za(t, l), Xa(n);
    }
    function oo(t) {
      var n = cn, l = t;
      n !== l && (n === null ? Yo(l) : l === null ? Vo(n) : n.depth === l.depth ? br(n, l) : n.depth > l.depth ? no(n, l) : Za(n, l), cn = l);
    }
    function Ai(t, n) {
      var l;
      l = t._currentValue, t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Xr && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Xr;
      var f = cn, v = {
        parent: f,
        depth: f === null ? 0 : f.depth + 1,
        context: t,
        parentValue: l,
        value: n
      };
      return cn = v, v;
    }
    function Mi(t) {
      var n = cn;
      if (n === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      n.context !== t && g("The parent context is not the expected context. This is probably a bug in React.");
      {
        var l = n.parentValue;
        l === xl ? n.context._currentValue = n.context._defaultValue : n.context._currentValue = l, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Xr && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Xr;
      }
      return cn = n.parent;
    }
    function Go() {
      return cn;
    }
    function ao(t) {
      var n = t._currentValue;
      return n;
    }
    function Ja(t) {
      return t._reactInternals;
    }
    function El(t, n) {
      t._reactInternals = n;
    }
    var Ln = {}, Xo = {}, Qa, Zo, Jo, io, Qo, Bn, lo, Ko, Un;
    {
      Qa = /* @__PURE__ */ new Set(), Zo = /* @__PURE__ */ new Set(), Jo = /* @__PURE__ */ new Set(), lo = /* @__PURE__ */ new Set(), io = /* @__PURE__ */ new Set(), Ko = /* @__PURE__ */ new Set(), Un = /* @__PURE__ */ new Set();
      var qo = /* @__PURE__ */ new Set();
      Bn = function(t, n) {
        if (!(t === null || typeof t == "function")) {
          var l = n + "_" + t;
          qo.has(l) || (qo.add(l), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, t));
        }
      }, Qo = function(t, n) {
        if (n === void 0) {
          var l = We(t) || "Component";
          io.has(l) || (io.add(l), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", l));
        }
      };
    }
    function ea(t, n) {
      {
        var l = t.constructor, f = l && We(l) || "ReactClass", v = f + "." + n;
        if (Ln[v])
          return;
        g(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, n, n, f), Ln[v] = !0;
      }
    }
    var ta = {
      isMounted: function(t) {
        return !1;
      },
      enqueueSetState: function(t, n, l) {
        var f = Ja(t);
        f.queue === null ? ea(t, "setState") : (f.queue.push(n), l != null && Bn(l, "setState"));
      },
      enqueueReplaceState: function(t, n, l) {
        var f = Ja(t);
        f.replace = !0, f.queue = [n], l != null && Bn(l, "setState");
      },
      enqueueForceUpdate: function(t, n) {
        var l = Ja(t);
        l.queue === null ? ea(t, "forceUpdate") : n != null && Bn(n, "setState");
      }
    };
    function Oi(t, n, l, f, v) {
      var b = l(v, f);
      Qo(n, b);
      var k = b == null ? f : Vt({}, f, b);
      return k;
    }
    function Li(t, n, l) {
      var f = un, v = t.contextType;
      if ("contextType" in t) {
        var b = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === jo && v._context === void 0
        );
        if (!b && !Un.has(t)) {
          Un.add(t);
          var k = "";
          v === void 0 ? k = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? k = " However, it is set to a " + typeof v + "." : v.$$typeof === Uo ? k = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? k = " Did you accidentally pass the Context.Consumer instead?" : k = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", We(t) || "Component", k);
        }
      }
      typeof v == "object" && v !== null ? f = ao(v) : f = l;
      var _ = new t(n, f);
      {
        if (typeof t.getDerivedStateFromProps == "function" && (_.state === null || _.state === void 0)) {
          var e = We(t) || "Component";
          Qa.has(e) || (Qa.add(e), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", e, _.state === null ? "null" : "undefined", e));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function") {
          var r = null, i = null, s = null;
          if (typeof _.componentWillMount == "function" && _.componentWillMount.__suppressDeprecationWarning !== !0 ? r = "componentWillMount" : typeof _.UNSAFE_componentWillMount == "function" && (r = "UNSAFE_componentWillMount"), typeof _.componentWillReceiveProps == "function" && _.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? i = "componentWillReceiveProps" : typeof _.UNSAFE_componentWillReceiveProps == "function" && (i = "UNSAFE_componentWillReceiveProps"), typeof _.componentWillUpdate == "function" && _.componentWillUpdate.__suppressDeprecationWarning !== !0 ? s = "componentWillUpdate" : typeof _.UNSAFE_componentWillUpdate == "function" && (s = "UNSAFE_componentWillUpdate"), r !== null || i !== null || s !== null) {
            var d = We(t) || "Component", S = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jo.has(d) || (Jo.add(d), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, d, S, r !== null ? `
  ` + r : "", i !== null ? `
  ` + i : "", s !== null ? `
  ` + s : ""));
          }
        }
      }
      return _;
    }
    function Bi(t, n, l) {
      {
        var f = We(n) || "Component", v = t.render;
        v || (n.prototype && typeof n.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", f) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", f)), t.getInitialState && !t.getInitialState.isReactClassApproved && !t.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", f), t.getDefaultProps && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", f), t.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", f), t.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", f), t.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", f), n.contextType && n.contextTypes && !Ko.has(n) && (Ko.add(n), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", f)), typeof t.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", f), n.prototype && n.prototype.isPureReactComponent && typeof t.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", We(n) || "A pure component"), typeof t.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", f), typeof t.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", f), typeof t.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", f), typeof t.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", f);
        var b = t.props !== l;
        t.props !== void 0 && b && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", f, f), t.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", f, f), typeof t.getSnapshotBeforeUpdate == "function" && typeof t.componentDidUpdate != "function" && !Zo.has(n) && (Zo.add(n), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", We(n))), typeof t.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof t.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof n.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", f);
        var k = t.state;
        k && (typeof k != "object" || oe(k)) && g("%s.state: must be set to an object or null", f), typeof t.getChildContext == "function" && typeof n.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", f);
      }
    }
    function Tl(t, n) {
      var l = n.state;
      if (typeof n.componentWillMount == "function") {
        if (n.componentWillMount.__suppressDeprecationWarning !== !0) {
          var f = We(t) || "Unknown";
          Xo[f] || (ce(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            f
          ), Xo[f] = !0);
        }
        n.componentWillMount();
      }
      typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", We(t) || "Component"), ta.enqueueReplaceState(n, n.state, null));
    }
    function Rl(t, n, l, f) {
      if (t.queue !== null && t.queue.length > 0) {
        var v = t.queue, b = t.replace;
        if (t.queue = null, t.replace = !1, b && v.length === 1)
          n.state = v[0];
        else {
          for (var k = b ? v[0] : n.state, _ = !0, e = b ? 1 : 0; e < v.length; e++) {
            var r = v[e], i = typeof r == "function" ? r.call(n, k, l, f) : r;
            i != null && (_ ? (_ = !1, k = Vt({}, k, i)) : Vt(k, i));
          }
          n.state = k;
        }
      } else
        t.queue = null;
    }
    function Ui(t, n, l, f) {
      Bi(t, n, l);
      var v = t.state !== void 0 ? t.state : null;
      t.updater = ta, t.props = l, t.state = v;
      var b = {
        queue: [],
        replace: !1
      };
      El(t, b);
      var k = n.contextType;
      if (typeof k == "object" && k !== null ? t.context = ao(k) : t.context = f, t.state === l) {
        var _ = We(n) || "Component";
        lo.has(_) || (lo.add(_), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", _));
      }
      var e = n.getDerivedStateFromProps;
      typeof e == "function" && (t.state = Oi(t, n, e, v, l)), typeof n.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function") && (Tl(n, t), Rl(b, t, l, f));
    }
    var Il = {
      id: 1,
      overflow: ""
    };
    function Pl(t) {
      var n = t.overflow, l = t.id, f = l & ~_l(l);
      return f.toString(32) + n;
    }
    function ra(t, n, l) {
      var f = t.id, v = t.overflow, b = na(f) - 1, k = f & ~(1 << b), _ = l + 1, e = na(n) + b;
      if (e > 30) {
        var r = b - b % 5, i = (1 << r) - 1, s = (k & i).toString(32), d = k >> r, S = b - r, x = na(n) + S, P = _ << S, L = P | d, $ = s + v;
        return {
          id: 1 << x | L,
          overflow: $
        };
      } else {
        var Y = _ << b, K = Y | k, Fe = v;
        return {
          id: 1 << e | K,
          overflow: Fe
        };
      }
    }
    function na(t) {
      return 32 - Ka(t);
    }
    function _l(t) {
      return 1 << na(t) - 1;
    }
    var Ka = Math.clz32 ? Math.clz32 : Dl, oa = Math.log, Fl = Math.LN2;
    function Dl(t) {
      var n = t >>> 0;
      return n === 0 ? 32 : 31 - (oa(n) / Fl | 0) | 0;
    }
    function Al(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var Ml = typeof Object.is == "function" ? Object.is : Al, Or = null, qa = null, aa = null, ve = null, dn = !1, pn = !1, be = 0, Yt = null, hn = 0, ia = 25, ot = !1, Lr;
    function vn() {
      if (Or === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return ot && g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Or;
    }
    function wr(t, n) {
      if (n === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Lr), !1;
      t.length !== n.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Lr, "[" + t.join(", ") + "]", "[" + n.join(", ") + "]");
      for (var l = 0; l < n.length && l < t.length; l++)
        if (!Ml(t[l], n[l]))
          return !1;
      return !0;
    }
    function gn() {
      if (hn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Br() {
      return ve === null ? aa === null ? (dn = !1, aa = ve = gn()) : (dn = !0, ve = aa) : ve.next === null ? (dn = !1, ve = ve.next = gn()) : (dn = !0, ve = ve.next), ve;
    }
    function Ol(t, n) {
      Or = n, qa = t, ot = !1, be = 0;
    }
    function ji(t, n, l, f) {
      for (; pn; )
        pn = !1, be = 0, hn += 1, ve = null, l = t(n, f);
      return ei(), l;
    }
    function la() {
      var t = be !== 0;
      return t;
    }
    function ei() {
      ot = !1, Or = null, qa = null, pn = !1, aa = null, hn = 0, Yt = null, ve = null;
    }
    function Ll(t) {
      return ot && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), ao(t);
    }
    function Hi(t) {
      return Lr = "useContext", vn(), ao(t);
    }
    function so(t, n) {
      return typeof n == "function" ? n(t) : n;
    }
    function Bl(t) {
      return Lr = "useState", Wi(
        so,
        // useReducer has a special case to support lazy useState initializers
        t
      );
    }
    function Wi(t, n, l) {
      if (t !== so && (Lr = "useReducer"), Or = vn(), ve = Br(), dn) {
        var f = ve.queue, v = f.dispatch;
        if (Yt !== null) {
          var b = Yt.get(f);
          if (b !== void 0) {
            Yt.delete(f);
            var k = ve.memoizedState, _ = b;
            do {
              var e = _.action;
              ot = !0, k = t(k, e), ot = !1, _ = _.next;
            } while (_ !== null);
            return ve.memoizedState = k, [k, v];
          }
        }
        return [ve.memoizedState, v];
      } else {
        ot = !0;
        var r;
        t === so ? r = typeof n == "function" ? n() : n : r = l !== void 0 ? l(n) : n, ot = !1, ve.memoizedState = r;
        var i = ve.queue = {
          last: null,
          dispatch: null
        }, s = i.dispatch = $i.bind(null, Or, i);
        return [ve.memoizedState, s];
      }
    }
    function sa(t, n) {
      Or = vn(), ve = Br();
      var l = n === void 0 ? null : n;
      if (ve !== null) {
        var f = ve.memoizedState;
        if (f !== null && l !== null) {
          var v = f[1];
          if (wr(l, v))
            return f[0];
        }
      }
      ot = !0;
      var b = t();
      return ot = !1, ve.memoizedState = [b, l], b;
    }
    function Ul(t) {
      Or = vn(), ve = Br();
      var n = ve.memoizedState;
      if (n === null) {
        var l = {
          current: t
        };
        return Object.seal(l), ve.memoizedState = l, l;
      } else
        return n;
    }
    function zi(t, n) {
      Lr = "useLayoutEffect", g("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function $i(t, n, l) {
      if (hn >= ia)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (t === Or) {
        pn = !0;
        var f = {
          action: l,
          next: null
        };
        Yt === null && (Yt = /* @__PURE__ */ new Map());
        var v = Yt.get(n);
        if (v === void 0)
          Yt.set(n, f);
        else {
          for (var b = v; b.next !== null; )
            b = b.next;
          b.next = f;
        }
      }
    }
    function jl(t, n) {
      return sa(function() {
        return t;
      }, n);
    }
    function Hl(t, n, l) {
      return vn(), n(t._source);
    }
    function Wl(t, n, l) {
      if (l === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return l();
    }
    function zl(t) {
      return vn(), t;
    }
    function $l() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Nl() {
      return vn(), [!1, $l];
    }
    function Vl() {
      var t = qa, n = Pl(t.treeContext), l = ti;
      if (l === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var f = be++;
      return zr(l, n, f);
    }
    function ua() {
    }
    var Ni = {
      readContext: Ll,
      useContext: Hi,
      useMemo: sa,
      useReducer: Wi,
      useRef: Ul,
      useState: Bl,
      useInsertionEffect: ua,
      useLayoutEffect: zi,
      useCallback: jl,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ua,
      // Effects are not run in the server environment.
      useEffect: ua,
      // Debugging effect
      useDebugValue: ua,
      useDeferredValue: zl,
      useTransition: Nl,
      useId: Vl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Hl,
      useSyncExternalStore: Wl
    }, ti = null;
    function uo(t) {
      ti = t;
    }
    function Vi(t) {
      try {
        var n = "", l = t;
        do {
          switch (l.tag) {
            case 0:
              n += qn(l.type, null, null);
              break;
            case 1:
              n += _i(l.type, null, null);
              break;
            case 2:
              n += $o(l.type, null, null);
              break;
          }
          l = l.parent;
        } while (l);
        return n;
      } catch (f) {
        return `
Error generating stack: ` + f.message + `
` + f.stack;
      }
    }
    var co = N.ReactCurrentDispatcher, ca = N.ReactDebugCurrentFrame, ri = 0, Zr = 1, fa = 2, da = 3, mn = 4, Yi = 0, ni = 1, yn = 2, Yl = 12800;
    function Gi(t) {
      return console.error(t), null;
    }
    function xr() {
    }
    function Gl(t, n, l, f, v, b, k, _, e) {
      var r = [], i = /* @__PURE__ */ new Set(), s = {
        destination: null,
        responseState: n,
        progressiveChunkSize: f === void 0 ? Yl : f,
        status: Yi,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: i,
        pingedTasks: r,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: v === void 0 ? Gi : v,
        onAllReady: b === void 0 ? xr : b,
        onShellReady: k === void 0 ? xr : k,
        onShellError: _ === void 0 ? xr : _,
        onFatalError: e === void 0 ? xr : e
      }, d = pa(
        s,
        0,
        null,
        l,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      d.parentFlushed = !0;
      var S = oi(s, t, null, d, i, un, Di, Il);
      return r.push(S), s;
    }
    function Xl(t, n) {
      var l = t.pingedTasks;
      l.push(n), l.length === 1 && xe(function() {
        return mo(t);
      });
    }
    function fo(t, n) {
      return {
        id: tn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: n,
        errorDigest: null
      };
    }
    function oi(t, n, l, f, v, b, k, _) {
      t.allPendingTasks++, l === null ? t.pendingRootTasks++ : l.pendingTasks++;
      var e = {
        node: n,
        ping: function() {
          return Xl(t, e);
        },
        blockedBoundary: l,
        blockedSegment: f,
        abortSet: v,
        legacyContext: b,
        context: k,
        treeContext: _
      };
      return e.componentStack = null, v.add(e), e;
    }
    function pa(t, n, l, f, v, b) {
      return {
        status: ri,
        id: -1,
        // lazily assigned later
        index: n,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: f,
        boundary: l,
        lastPushedText: v,
        textEmbedded: b
      };
    }
    var Ur = null;
    function po() {
      return Ur === null || Ur.componentStack === null ? "" : Vi(Ur.componentStack);
    }
    function Jr(t, n) {
      t.componentStack = {
        tag: 0,
        parent: t.componentStack,
        type: n
      };
    }
    function kr(t, n) {
      t.componentStack = {
        tag: 1,
        parent: t.componentStack,
        type: n
      };
    }
    function ai(t, n) {
      t.componentStack = {
        tag: 2,
        parent: t.componentStack,
        type: n
      };
    }
    function Gt(t) {
      t.componentStack === null ? g("Unexpectedly popped too many stack frames. This is a bug in React.") : t.componentStack = t.componentStack.parent;
    }
    var jn = null;
    function ii(t, n) {
      {
        var l;
        typeof n == "string" ? l = n : n && typeof n.message == "string" ? l = n.message : l = String(n);
        var f = jn || po();
        jn = null, t.errorMessage = l, t.errorComponentStack = f;
      }
    }
    function Xt(t, n) {
      var l = t.onError(n);
      if (l != null && typeof l != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof l + '" instead');
      return l;
    }
    function Qr(t, n) {
      var l = t.onShellError;
      l(n);
      var f = t.onFatalError;
      f(n), t.destination !== null ? (t.status = yn, ne(t.destination, n)) : (t.status = ni, t.fatalError = n);
    }
    function li(t, n, l) {
      Jr(n, "Suspense");
      var f = n.blockedBoundary, v = n.blockedSegment, b = l.fallback, k = l.children, _ = /* @__PURE__ */ new Set(), e = fo(t, _), r = v.chunks.length, i = pa(
        t,
        r,
        e,
        v.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      v.children.push(i), v.lastPushedText = !1;
      var s = pa(
        t,
        0,
        null,
        v.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      s.parentFlushed = !0, n.blockedBoundary = e, n.blockedSegment = s;
      try {
        if (gi(t, n, k), Nr(s.chunks, t.responseState, s.lastPushedText, s.textEmbedded), s.status = Zr, ga(e, s), e.pendingTasks === 0) {
          Gt(n);
          return;
        }
      } catch (S) {
        s.status = mn, e.forceClientRender = !0, e.errorDigest = Xt(t, S), ii(e, S);
      } finally {
        n.blockedBoundary = f, n.blockedSegment = v;
      }
      var d = oi(t, b, f, i, _, n.legacyContext, n.context, n.treeContext);
      d.componentStack = n.componentStack, t.pingedTasks.push(d), Gt(n);
    }
    function ho(t, n, l, f) {
      Jr(n, l);
      var v = n.blockedSegment, b = $n(v.chunks, l, f, t.responseState, v.formatContext);
      v.lastPushedText = !1;
      var k = v.formatContext;
      v.formatContext = hr(k, l, f), gi(t, n, b), v.formatContext = k, To(v.chunks, l), v.lastPushedText = !1, Gt(n);
    }
    function ha(t) {
      return t.prototype && t.prototype.isReactComponent;
    }
    function Xi(t, n, l, f, v) {
      var b = {};
      Ol(n, b);
      var k = l(f, v);
      return ji(l, f, k, v);
    }
    function Zi(t, n, l, f, v) {
      var b = l.render();
      l.props !== v && (go || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", We(f) || "a component"), go = !0);
      {
        var k = f.childContextTypes;
        if (k != null) {
          var _ = n.legacyContext, e = Ga(l, f, _, k);
          n.legacyContext = e, Bt(t, n, b), n.legacyContext = _;
          return;
        }
      }
      Bt(t, n, b);
    }
    function Zl(t, n, l, f) {
      ai(n, l);
      var v = Ya(l, n.legacyContext), b = Li(l, f, v);
      Ui(b, l, f, v), Zi(t, n, b, l, f), Gt(n);
    }
    var si = {}, vo = {}, Ji = {}, ui = {}, go = !1, ci = !1, fi = !1, di = !1;
    function Qi(t, n, l, f) {
      var v;
      if (v = Ya(l, n.legacyContext), kr(n, l), l.prototype && typeof l.prototype.render == "function") {
        var b = We(l) || "Unknown";
        si[b] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), si[b] = !0);
      }
      var k = Xi(t, n, l, f, v), _ = la();
      if (typeof k == "object" && k !== null && typeof k.render == "function" && k.$$typeof === void 0) {
        var e = We(l) || "Unknown";
        vo[e] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", e, e, e), vo[e] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof k == "object" && k !== null && typeof k.render == "function" && k.$$typeof === void 0
      ) {
        {
          var r = We(l) || "Unknown";
          vo[r] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", r, r, r), vo[r] = !0);
        }
        Ui(k, l, f, v), Zi(t, n, k, l, f);
      } else if (Ki(l), _) {
        var i = n.treeContext, s = 1, d = 0;
        n.treeContext = ra(i, s, d);
        try {
          Bt(t, n, k);
        } finally {
          n.treeContext = i;
        }
      } else
        Bt(t, n, k);
      Gt(n);
    }
    function Ki(t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), typeof t.getDerivedStateFromProps == "function") {
          var n = We(t) || "Unknown";
          ui[n] || (g("%s: Function components do not support getDerivedStateFromProps.", n), ui[n] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var l = We(t) || "Unknown";
          Ji[l] || (g("%s: Function components do not support contextType.", l), Ji[l] = !0);
        }
      }
    }
    function pi(t, n) {
      if (t && t.defaultProps) {
        var l = Vt({}, n), f = t.defaultProps;
        for (var v in f)
          l[v] === void 0 && (l[v] = f[v]);
        return l;
      }
      return n;
    }
    function Jl(t, n, l, f, v) {
      kr(n, l.render);
      var b = Xi(t, n, l.render, f, v), k = la();
      if (k) {
        var _ = n.treeContext, e = 1, r = 0;
        n.treeContext = ra(_, e, r);
        try {
          Bt(t, n, b);
        } finally {
          n.treeContext = _;
        }
      } else
        Bt(t, n, b);
      Gt(n);
    }
    function Ql(t, n, l, f, v) {
      var b = l.type, k = pi(b, f);
      hi(t, n, b, k, v);
    }
    function qi(t, n, l, f) {
      l._context === void 0 ? l !== l.Consumer && (di || (di = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var v = f.children;
      typeof v != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var b = ao(l), k = v(b);
      Bt(t, n, k);
    }
    function Kl(t, n, l, f) {
      var v = l._context, b = f.value, k = f.children, _;
      _ = n.context, n.context = Ai(v, b), Bt(t, n, k), n.context = Mi(v), _ !== n.context && g("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function ql(t, n, l, f, v) {
      Jr(n, "Lazy");
      var b = l._payload, k = l._init, _ = k(b), e = pi(_, f);
      hi(t, n, _, e, v), Gt(n);
    }
    function hi(t, n, l, f, v) {
      if (typeof l == "function")
        if (ha(l)) {
          Zl(t, n, l, f);
          return;
        } else {
          Qi(t, n, l, f);
          return;
        }
      if (typeof l == "string") {
        ho(t, n, l, f);
        return;
      }
      switch (l) {
        case Wo:
        case Ma:
        case Ci:
        case Da:
        case Lt: {
          Bt(t, n, f.children);
          return;
        }
        case Jn: {
          Jr(n, "SuspenseList"), Bt(t, n, f.children), Gt(n);
          return;
        }
        case Aa:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Zn: {
          li(t, n, f);
          return;
        }
      }
      if (typeof l == "object" && l !== null)
        switch (l.$$typeof) {
          case Ho: {
            Jl(t, n, l, f, v);
            return;
          }
          case Qn: {
            Ql(t, n, l, f, v);
            return;
          }
          case Uo: {
            Kl(t, n, l, f);
            return;
          }
          case jo: {
            qi(t, n, l, f);
            return;
          }
          case Dn: {
            ql(t, n, l, f);
            return;
          }
        }
      var b = "";
      throw (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (l == null ? l : typeof l) + "." + b));
    }
    function es(t, n) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      t[Symbol.toStringTag] === "Generator" && (ci || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ci = !0), t.entries === n && (fi || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), fi = !0);
    }
    function Bt(t, n, l) {
      try {
        return vi(t, n, l);
      } catch (f) {
        throw typeof f == "object" && f !== null && typeof f.then == "function" || (jn = jn !== null ? jn : po()), f;
      }
    }
    function vi(t, n, l) {
      if (n.node = l, typeof l == "object" && l !== null) {
        switch (l.$$typeof) {
          case wl: {
            var f = l, v = f.type, b = f.props, k = f.ref;
            hi(t, n, v, b, k);
            return;
          }
          case ki:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Dn: {
            var _ = l, e = _._payload, r = _._init, i;
            try {
              i = r(e);
            } catch (Y) {
              throw typeof Y == "object" && Y !== null && typeof Y.then == "function" && Jr(n, "Lazy"), Y;
            }
            Bt(t, n, i);
            return;
          }
        }
        if (oe(l)) {
          el(t, n, l);
          return;
        }
        var s = Cl(l);
        if (s) {
          es(l, s);
          var d = s.call(l);
          if (d) {
            var S = d.next();
            if (!S.done) {
              var x = [];
              do
                x.push(S.value), S = d.next();
              while (!S.done);
              el(t, n, x);
              return;
            }
            return;
          }
        }
        var P = Object.prototype.toString.call(l);
        throw new Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof l == "string") {
        var L = n.blockedSegment;
        L.lastPushedText = $r(n.blockedSegment.chunks, l, t.responseState, L.lastPushedText);
        return;
      }
      if (typeof l == "number") {
        var $ = n.blockedSegment;
        $.lastPushedText = $r(n.blockedSegment.chunks, "" + l, t.responseState, $.lastPushedText);
        return;
      }
      typeof l == "function" && g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function el(t, n, l) {
      for (var f = l.length, v = 0; v < f; v++) {
        var b = n.treeContext;
        n.treeContext = ra(b, f, v);
        try {
          gi(t, n, l[v]);
        } finally {
          n.treeContext = b;
        }
      }
    }
    function Ut(t, n, l) {
      var f = n.blockedSegment, v = f.chunks.length, b = pa(
        t,
        v,
        null,
        f.formatContext,
        // Adopt the parent segment's leading text embed
        f.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      f.children.push(b), f.lastPushedText = !1;
      var k = oi(t, n.node, n.blockedBoundary, b, n.abortSet, n.legacyContext, n.context, n.treeContext);
      n.componentStack !== null && (k.componentStack = n.componentStack.parent);
      var _ = k.ping;
      l.then(_, _);
    }
    function gi(t, n, l) {
      var f = n.blockedSegment.formatContext, v = n.legacyContext, b = n.context, k = null;
      k = n.componentStack;
      try {
        return Bt(t, n, l);
      } catch (_) {
        if (ei(), typeof _ == "object" && _ !== null && typeof _.then == "function") {
          Ut(t, n, _), n.blockedSegment.formatContext = f, n.legacyContext = v, n.context = b, oo(b), n.componentStack = k;
          return;
        } else
          throw n.blockedSegment.formatContext = f, n.legacyContext = v, n.context = b, oo(b), n.componentStack = k, _;
      }
    }
    function tl(t, n, l, f) {
      var v = Xt(t, f);
      if (n === null ? Qr(t, f) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = !0, n.errorDigest = v, ii(n, f), n.parentFlushed && t.clientRenderedBoundaries.push(n))), t.allPendingTasks--, t.allPendingTasks === 0) {
        var b = t.onAllReady;
        b();
      }
    }
    function ts(t) {
      var n = this, l = t.blockedBoundary, f = t.blockedSegment;
      f.status = da, rl(n, l, f);
    }
    function va(t, n, l) {
      var f = t.blockedBoundary, v = t.blockedSegment;
      if (v.status = da, f === null)
        n.allPendingTasks--, n.status !== yn && (n.status = yn, n.destination !== null && ke(n.destination));
      else {
        if (f.pendingTasks--, !f.forceClientRender) {
          f.forceClientRender = !0;
          var b = l === void 0 ? new Error("The render was aborted by the server without a reason.") : l;
          f.errorDigest = n.onError(b);
          {
            var k = "The server did not finish this Suspense boundary: ";
            b && typeof b.message == "string" ? b = k + b.message : b = k + String(b);
            var _ = Ur;
            Ur = t;
            try {
              ii(f, b);
            } finally {
              Ur = _;
            }
          }
          f.parentFlushed && n.clientRenderedBoundaries.push(f);
        }
        if (f.fallbackAbortableTasks.forEach(function(r) {
          return va(r, n, l);
        }), f.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0) {
          var e = n.onAllReady;
          e();
        }
      }
    }
    function ga(t, n) {
      if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
        var l = n.children[0];
        l.id = n.id, l.parentFlushed = !0, l.status === Zr && ga(t, l);
      } else {
        var f = t.completedSegments;
        f.push(n);
      }
    }
    function rl(t, n, l) {
      if (n === null) {
        if (l.parentFlushed) {
          if (t.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          t.completedRootSegment = l;
        }
        if (t.pendingRootTasks--, t.pendingRootTasks === 0) {
          t.onShellError = xr;
          var f = t.onShellReady;
          f();
        }
      } else if (n.pendingTasks--, !n.forceClientRender) {
        if (n.pendingTasks === 0)
          l.parentFlushed && l.status === Zr && ga(n, l), n.parentFlushed && t.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(ts, t), n.fallbackAbortableTasks.clear();
        else if (l.parentFlushed && l.status === Zr) {
          ga(n, l);
          var v = n.completedSegments;
          v.length === 1 && n.parentFlushed && t.partialBoundaries.push(n);
        }
      }
      if (t.allPendingTasks--, t.allPendingTasks === 0) {
        var b = t.onAllReady;
        b();
      }
    }
    function nl(t, n) {
      var l = n.blockedSegment;
      if (l.status === ri) {
        oo(n.context);
        var f = null;
        f = Ur, Ur = n;
        try {
          Bt(t, n, n.node), Nr(l.chunks, t.responseState, l.lastPushedText, l.textEmbedded), n.abortSet.delete(n), l.status = Zr, rl(t, n.blockedBoundary, l);
        } catch (b) {
          if (ei(), typeof b == "object" && b !== null && typeof b.then == "function") {
            var v = n.ping;
            b.then(v, v);
          } else
            n.abortSet.delete(n), l.status = mn, tl(t, n.blockedBoundary, l, b);
        } finally {
          Ur = f;
        }
      }
    }
    function mo(t) {
      if (t.status !== yn) {
        var n = Go(), l = co.current;
        co.current = Ni;
        var f;
        f = ca.getCurrentStack, ca.getCurrentStack = po;
        var v = ti;
        uo(t.responseState);
        try {
          var b = t.pingedTasks, k;
          for (k = 0; k < b.length; k++) {
            var _ = b[k];
            nl(t, _);
          }
          b.splice(0, k), t.destination !== null && ya(t, t.destination);
        } catch (e) {
          Xt(t, e), Qr(t, e);
        } finally {
          uo(v), co.current = l, ca.getCurrentStack = f, l === Ni && oo(n);
        }
      }
    }
    function yo(t, n, l) {
      switch (l.parentFlushed = !0, l.status) {
        case ri: {
          var f = l.id = t.nextSegmentId++;
          return l.lastPushedText = !1, l.textEmbedded = !1, kn(n, t.responseState, f);
        }
        case Zr: {
          l.status = fa;
          for (var v = !0, b = l.chunks, k = 0, _ = l.children, e = 0; e < _.length; e++) {
            for (var r = _[e]; k < r.index; k++)
              U(n, b[k]);
            v = ma(t, n, r);
          }
          for (; k < b.length - 1; k++)
            U(n, b[k]);
          return k < b.length && (v = re(n, b[k])), v;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function ma(t, n, l) {
      var f = l.boundary;
      if (f === null)
        return yo(t, n, l);
      if (f.parentFlushed = !0, f.forceClientRender)
        return gt(n, t.responseState, f.errorDigest, f.errorMessage, f.errorComponentStack), yo(t, n, l), Ra(n, t.responseState);
      if (f.pendingTasks > 0) {
        f.rootSegmentID = t.nextSegmentId++, f.completedSegments.length > 0 && t.partialBoundaries.push(f);
        var v = f.id = rn(t.responseState);
        return Tn(n, t.responseState, v), yo(t, n, l), Rn(n, t.responseState);
      } else {
        if (f.byteSize > t.progressiveChunkSize)
          return f.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(f), Tn(n, t.responseState, f.id), yo(t, n, l), Rn(n, t.responseState);
        Io(n, t.responseState);
        var b = f.completedSegments;
        if (b.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var k = b[0];
        return ma(t, n, k), Po(n, t.responseState);
      }
    }
    function ol(t, n, l) {
      return wi(n, t.responseState, l.id, l.errorDigest, l.errorMessage, l.errorComponentStack);
    }
    function So(t, n, l) {
      return te(n, t.responseState, l.formatContext, l.id), ma(t, n, l), Re(n, l.formatContext);
    }
    function bo(t, n, l) {
      for (var f = l.completedSegments, v = 0; v < f.length; v++) {
        var b = f[v];
        mi(t, n, l, b);
      }
      return f.length = 0, Ia(n, t.responseState, l.id, l.rootSegmentID);
    }
    function rs(t, n, l) {
      for (var f = l.completedSegments, v = 0; v < f.length; v++) {
        var b = f[v];
        if (!mi(t, n, l, b))
          return v++, f.splice(0, v), !1;
      }
      return f.splice(0, v), !0;
    }
    function mi(t, n, l, f) {
      if (f.status === fa)
        return !0;
      var v = f.id;
      if (v === -1) {
        var b = f.id = l.rootSegmentID;
        if (b === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return So(t, n, f);
      } else
        return So(t, n, f), pl(n, t.responseState, v);
    }
    function ya(t, n) {
      Pe();
      try {
        var l = t.completedRootSegment;
        l !== null && t.pendingRootTasks === 0 && (ma(t, n, l), t.completedRootSegment = null, Ca(n, t.responseState));
        var f = t.clientRenderedBoundaries, v;
        for (v = 0; v < f.length; v++) {
          var b = f[v];
          ol(t, n, b);
        }
        f.splice(0, v);
        var k = t.completedBoundaries;
        for (v = 0; v < k.length; v++) {
          var _ = k[v];
          bo(t, n, _);
        }
        k.splice(0, v), yt(n), Pe(n);
        var e = t.partialBoundaries;
        for (v = 0; v < e.length; v++) {
          var r = e[v];
          if (!rs(t, n, r)) {
            t.destination = null, v++, e.splice(0, v);
            return;
          }
        }
        e.splice(0, v);
        var i = t.completedBoundaries;
        for (v = 0; v < i.length; v++) {
          var s = i[v];
          bo(t, n, s);
        }
        i.splice(0, v);
      } finally {
        yt(n), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && (t.abortableTasks.size !== 0 && g("There was still abortable task at the root when we closed. This is a bug in React."), ke(n));
      }
    }
    function ns(t) {
      xe(function() {
        return mo(t);
      });
    }
    function al(t, n) {
      if (t.status === ni) {
        t.status = yn, ne(n, t.fatalError);
        return;
      }
      if (t.status !== yn && t.destination === null) {
        t.destination = n;
        try {
          ya(t, n);
        } catch (l) {
          Xt(t, l), Qr(t, l);
        }
      }
    }
    function Sa(t, n) {
      try {
        var l = t.abortableTasks;
        l.forEach(function(f) {
          return va(f, t, n);
        }), l.clear(), t.destination !== null && ya(t, t.destination);
      } catch (f) {
        Xt(t, f), Qr(t, f);
      }
    }
    function os(t, n) {
      return new Promise(function(l, f) {
        var v, b, k = new Promise(function(d, S) {
          b = d, v = S;
        });
        function _() {
          var d = new ReadableStream(
            {
              type: "bytes",
              pull: function(S) {
                al(r, S);
              },
              cancel: function(S) {
                Sa(r);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          d.allReady = k, l(d);
        }
        function e(d) {
          k.catch(function() {
          }), f(d);
        }
        var r = Gl(t, Wt(n ? n.identifierPrefix : void 0, n ? n.nonce : void 0, n ? n.bootstrapScriptContent : void 0, n ? n.bootstrapScripts : void 0, n ? n.bootstrapModules : void 0), rr(n ? n.namespaceURI : void 0), n ? n.progressiveChunkSize : void 0, n ? n.onError : void 0, b, _, e, v);
        if (n && n.signal) {
          var i = n.signal, s = function() {
            Sa(r, i.reason), i.removeEventListener("abort", s);
          };
          i.addEventListener("abort", s);
        }
        ns(r);
      });
    }
    fl.renderToReadableStream = os, fl.version = M;
  }()), fl;
}
var ko, is;
process.env.NODE_ENV === "production" ? (ko = Cs(), is = Es()) : (ko = Ts(), is = Rs());
ko.version;
ko.renderToString;
var Is = ko.renderToStaticMarkup;
ko.renderToNodeStream;
ko.renderToStaticNodeStream;
is.renderToReadableStream;
const Ps = 500, _s = 300, Fs = 51.51, Ds = -0.08, As = 13, Ms = "https://tile.openstreetmap.org/{z}/{x}/{y}.png", bi = () => {
};
function Os(de) {
  return de === void 0 ? "" : de.sort((M, N) => M.id.localeCompare(N.id)).map((M) => M.id + ":" + ("color" in M ? M.color : ".")).join("-");
}
function Ls(de, M) {
  return Is(
    /* @__PURE__ */ vs.jsx(
      "div",
      {
        "aria-label": M,
        className: "marker-pin",
        style: { background: de, border: "1px solid black" }
      }
    )
  );
}
function Bs(de, M) {
  const N = Array.from(de), ce = Array.from(M), g = new Set(de), Q = new Set(M);
  return {
    toDel: N.filter((xe) => !Q.has(xe)),
    toAdd: ce.filter((xe) => !g.has(xe))
  };
}
function zs({
  initialView: de = { lng: Ds, lat: Fs, zoom: As },
  basemapProviderUrl: M = Ms,
  style: N,
  points: ce = [],
  extent: g,
  onViewChange: Q = bi,
  onMouseMove: xe = bi,
  onClick: le = bi,
  onSelect: T = bi,
  onClickaway: D = bi
}) {
  const Pe = Et.useId(), U = Et.useRef(), re = Et.useRef(), yt = Et.useRef(), ke = Et.useRef(/* @__PURE__ */ new Map());
  return Et.useEffect(() => {
    const pe = Sn.tileLayer(M), W = Sn.layerGroup(), O = Sn.map(Pe, {
      layers: [pe, W],
      center: { lng: de.lng, lat: de.lat },
      zoom: de.zoom,
      zoomControl: !1
    });
    U.current = O, re.current = pe, yt.current = W;
  }, []), Et.useEffect(() => {
    let pe = re.current;
    const W = U.current;
    if (!pe || !W)
      throw new Error();
    pe.removeFrom(W), pe = Sn.tileLayer(M), pe.addTo(W);
  }, [M]), Et.useEffect(
    () => {
      const pe = U.current;
      if (!pe)
        throw new Error();
      if (!g)
        return;
      const W = Sn.latLng(g.south, g.west), O = Sn.latLng(g.north, g.east);
      pe.fitBounds(Sn.latLngBounds(W, O));
    },
    g ? [g.west, g.east, g.north, g.south] : [0, 0, 0, 0]
  ), Et.useEffect(() => {
    var De;
    const pe = yt.current, W = ke.current;
    if (!pe || !W)
      throw new Error();
    const O = new Map(
      ce.map((ee) => [
        ee.id,
        { lng: ee.lng, lat: ee.lat, color: ee.color }
      ])
    ), { toDel: ne, toAdd: qe } = Bs(W.keys(), O.keys());
    for (const ee of ne)
      (De = W.get(ee)) == null || De.remove(), W.delete(ee);
    for (const ee of qe) {
      const ye = O.get(ee);
      if (!ye)
        throw new Error();
      const ue = Sn.marker(ye, {
        icon: Sn.divIcon({
          className: "custom-div-icon",
          html: Ls(
            ye.color || "dodgerblue",
            "marker-" + ee
          ),
          iconSize: [30, 42],
          iconAnchor: [15, 42]
        })
      }).on("click", () => {
        T(ee);
      }).addTo(pe);
      W.set(ee, ue);
    }
  }, [Os(ce), T]), Et.useEffect(() => {
    const pe = U.current;
    if (!pe)
      throw new Error();
    pe.on("click", (W) => {
      le(W.latlng.lng, W.latlng.lat), D();
    }), pe.on("moveend", () => {
      const W = pe.getBounds(), O = pe.getZoom(), ne = W.getWest(), qe = W.getSouth(), De = W.getEast(), ee = W.getNorth(), ye = { west: ne, south: qe, east: De, north: ee }, ue = gs.fromExtent(ne, qe, De, ee, O);
      Q(ye, ue);
    }), pe.on("mousemove", (W) => {
      xe(W.latlng.lng, W.latlng.lat);
    }), pe.on("mouseout", () => {
      xe(null, null);
    }), pe.fire("moveend");
  }, [le, xe, Q, D]), /* @__PURE__ */ vs.jsx(
    "div",
    {
      id: Pe,
      style: {
        width: Ps,
        height: _s,
        background: "lightgray",
        cursor: "default",
        ...N
      }
    }
  );
}
export {
  zs as default
};

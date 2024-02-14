var dr = Object.defineProperty;
var vr = (f, o, c) => o in f ? dr(f, o, { enumerable: !0, configurable: !0, writable: !0, value: c }) : f[o] = c;
var Q = (f, o, c) => (vr(f, typeof o != "symbol" ? o + "" : o, c), c);
import "leaflet/dist/leaflet.css";
import P from "react";
import F, { LatLng as De, CRS as Fe } from "leaflet";
var ue = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function pr() {
  if ($e)
    return B;
  $e = 1;
  var f = P, o = Symbol.for("react.element"), c = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, p = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(b, d, k) {
    var R, w = {}, C = null, $ = null;
    k !== void 0 && (C = "" + k), d.key !== void 0 && (C = "" + d.key), d.ref !== void 0 && ($ = d.ref);
    for (R in d)
      y.call(d, R) && !O.hasOwnProperty(R) && (w[R] = d[R]);
    if (b && b.defaultProps)
      for (R in d = b.defaultProps, d)
        w[R] === void 0 && (w[R] = d[R]);
    return { $$typeof: o, type: b, key: C, ref: $, props: w, _owner: p.current };
  }
  return B.Fragment = c, B.jsx = E, B.jsxs = E, B;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function mr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var f = P, o = Symbol.for("react.element"), c = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), b = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), q = Symbol.iterator, v = "@@iterator";
    function u(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = q && e[q] || e[v];
      return typeof r == "function" ? r : null;
    }
    var _ = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        W("error", e, t);
      }
    }
    function W(e, r, t) {
      {
        var n = _.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var I = !1, S = !1, j = !1, M = !1, We = !1, le;
    le = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === O || We || e === p || e === k || e === R || M || e === $ || I || S || j || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === w || e.$$typeof === E || e.$$typeof === b || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case c:
          return "Portal";
        case O:
          return "Profiler";
        case p:
          return "StrictMode";
        case k:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ce(r) + ".Consumer";
          case E:
            var t = e;
            return ce(t._context) + ".Provider";
          case d:
            return Ne(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : A(e.type) || "Memo";
          case C: {
            var s = e, l = s._payload, i = s._init;
            try {
              return A(i(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, U = 0, fe, de, ve, pe, me, ge, he;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Me() {
      {
        if (U === 0) {
          fe = console.log, de = console.info, ve = console.warn, pe = console.error, me = console.group, ge = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
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
        U++;
      }
    }
    function Ue() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: fe
            }),
            info: L({}, e, {
              value: de
            }),
            warn: L({}, e, {
              value: ve
            }),
            error: L({}, e, {
              value: pe
            }),
            group: L({}, e, {
              value: me
            }),
            groupCollapsed: L({}, e, {
              value: ge
            }),
            groupEnd: L({}, e, {
              value: he
            })
          });
        }
        U < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = _.ReactCurrentDispatcher, re;
    function H(e, r, t) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            re = n && n[1] || "";
          }
        return `
` + re + e;
      }
    }
    var te = !1, J;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      J = new ze();
    }
    function Ee(e, r) {
      if (!e || te)
        return "";
      {
        var t = J.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      te = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = ee.current, ee.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (D) {
              n = D;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (D) {
              n = D;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            n = D;
          }
          e();
        }
      } catch (D) {
        if (D && n && typeof D.stack == "string") {
          for (var a = D.stack.split(`
`), T = n.stack.split(`
`), m = a.length - 1, h = T.length - 1; m >= 1 && h >= 0 && a[m] !== T[h]; )
            h--;
          for (; m >= 1 && h >= 0; m--, h--)
            if (a[m] !== T[h]) {
              if (m !== 1 || h !== 1)
                do
                  if (m--, h--, h < 0 || a[m] !== T[h]) {
                    var x = `
` + a[m].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, x), x;
                  }
                while (m >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = l, Ue(), Error.prepareStackTrace = s;
      }
      var N = e ? e.displayName || e.name : "", Ae = N ? H(N) : "";
      return typeof e == "function" && J.set(e, Ae), Ae;
    }
    function Be(e, r, t) {
      return Ee(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, Ve(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case k:
          return H("Suspense");
        case R:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Be(e.render);
          case w:
            return K(e.type, r, t);
          case C: {
            var n = e, s = n._payload, l = n._init;
            try {
              return K(l(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, be = {}, Re = _.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function Ge(e, r, t, n, s) {
      {
        var l = Function.call.bind(X);
        for (var i in e)
          if (l(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var T = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              a = m;
            }
            a && !(a instanceof Error) && (Z(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), Z(null)), a instanceof Error && !(a.message in be) && (be[a.message] = !0, Z(s), g("Failed %s type: %s", t, a.message), Z(null));
          }
      }
    }
    var qe = Array.isArray;
    function ne(e) {
      return qe(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function Te(e) {
      if (Je(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), _e(e);
    }
    var z = _.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Se, ae;
    ae = {};
    function Xe(e) {
      if (X.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (X.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && z.current && r && z.current.stateNode !== r) {
        var t = A(z.current.type);
        ae[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(z.current.type), e.ref), ae[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          we || (we = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Se || (Se = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, s, l, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, s) {
      {
        var l, i = {}, a = null, T = null;
        t !== void 0 && (Te(t), a = "" + t), Ze(r) && (Te(r.key), a = "" + r.key), Xe(r) && (T = r.ref, Qe(r, s));
        for (l in r)
          X.call(r, l) && !Ke.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (l in m)
            i[l] === void 0 && (i[l] = m[l]);
        }
        if (a || T) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(i, h), T && rr(i, h);
        }
        return tr(e, a, T, s, n, z.current, i);
      }
    }
    var oe = _.ReactCurrentOwner, Oe = _.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function xe() {
      {
        if (oe.current) {
          var e = A(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Pe = {};
    function or(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== oe.current && (n = " It was passed a child from " + A(e._owner.type) + "."), Y(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), Y(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            se(n) && Ce(n, r);
          }
        else if (se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = u(e);
          if (typeof s == "function" && s !== e.entries)
            for (var l = s.call(e), i; !(i = l.next()).done; )
              se(i.value) && Ce(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = A(r);
          Ge(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var s = A(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            Y(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function ke(e, r, t, n, s, l) {
      {
        var i = Ye(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = ar(s);
          T ? a += T : a += xe();
          var m;
          e === null ? m = "null" : ne(e) ? m = "array" : e !== void 0 && e.$$typeof === o ? (m = "<" + (A(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, a);
        }
        var h = nr(e, r, t, s, l);
        if (h == null)
          return h;
        if (i) {
          var x = r.children;
          if (x !== void 0)
            if (n)
              if (ne(x)) {
                for (var N = 0; N < x.length; N++)
                  je(x[N], e);
                Object.freeze && Object.freeze(x);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(x, e);
        }
        return e === y ? sr(h) : ir(h), h;
      }
    }
    function ur(e, r, t) {
      return ke(e, r, t, !0);
    }
    function lr(e, r, t) {
      return ke(e, r, t, !1);
    }
    var cr = lr, fr = ur;
    V.Fragment = y, V.jsx = cr, V.jsxs = fr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ue.exports = pr() : ue.exports = mr();
var gr = ue.exports;
function* hr(f, o, c) {
  const { x: y, y: p } = Fe.EPSG3857.latLngToPoint(f, c).divideBy(256).floor(), { x: O, y: E } = Fe.EPSG3857.latLngToPoint(o, c).divideBy(256).floor();
  for (let b = y; b <= O; b++)
    for (let d = p; d <= E; d++)
      yield new Le(b, d, c);
}
class Le {
  constructor(o, c, y) {
    Q(this, "x");
    Q(this, "y");
    Q(this, "z");
    this.x = o, this.y = c, this.z = y;
  }
  static fromExtent(o, c, y, p, O) {
    const E = new De(p, o), b = new De(c, y), d = hr(E, b, O);
    return Array.from(d);
  }
  toString() {
    return `${this.x}-${this.y}-${this.z}`;
  }
}
const yr = 500, Er = 300, br = 51.51, Rr = -0.08, _r = 13, Tr = "https://tile.openstreetmap.org/{z}/{x}/{y}.png", G = () => {
};
function wr(f) {
  return f === void 0 ? "" : f.sort((o, c) => o.id.localeCompare(c.id)).map((o) => o.id + ":" + ("color" in o ? o.color : ".")).join("-");
}
function Sr(f, o, c, y) {
  return `
        <div>
            <div style="color:${f};font-size:15px;top:-22px;position:absolute">
                ${y || ""}
            </div>
            <div aria-label=${o} style="width:30px;height:30px;border-radius: 50% 50% 50% 0;transform:rotate(-45deg);border: 1px solid black;background:${f}">
                ${c && `<img src=${c} style="transform:rotate(+45deg);position:absolute;left:3px;top:3px;" />`}
            </div>
        </div>
    `;
}
function Or(f, o) {
  const c = Array.from(f), y = Array.from(o), p = new Set(f), O = new Set(o);
  return {
    toDel: c.filter((E) => !O.has(E)),
    toAdd: y.filter((E) => !p.has(E))
  };
}
function kr({
  initialView: f = { lng: Rr, lat: br, zoom: _r },
  basemapProviderUrl: o = Tr,
  style: c,
  points: y = [],
  extent: p,
  onViewChange: O = G,
  onMouseMove: E = G,
  onClick: b = G,
  onSelect: d = G,
  onClickaway: k = G
}) {
  const R = P.useId(), w = P.useRef(), C = P.useRef(), $ = P.useRef(), q = P.useRef(/* @__PURE__ */ new Map());
  return P.useEffect(() => {
    const v = F.tileLayer(o), u = F.layerGroup(), _ = F.map(R, {
      layers: [v, u],
      center: { lng: f.lng, lat: f.lat },
      zoom: f.zoom,
      zoomControl: !1
    });
    return w.current = _, C.current = v, $.current = u, () => {
      _.remove();
    };
  }, []), P.useEffect(() => {
    let v = C.current;
    const u = w.current;
    if (!v || !u)
      throw new Error();
    v.removeFrom(u), v = F.tileLayer(o), v.addTo(u);
  }, [o]), P.useEffect(
    () => {
      const v = w.current;
      if (!v)
        throw new Error();
      if (!p)
        return;
      const u = F.latLng(p.south, p.west), _ = F.latLng(p.north, p.east);
      v.fitBounds(F.latLngBounds(u, _));
    },
    p ? [p.west, p.east, p.north, p.south] : [0, 0, 0, 0]
  ), P.useEffect(() => {
    var I;
    const v = $.current, u = q.current;
    if (!v || !u)
      throw new Error();
    const _ = new Map(y.map((S) => [S.id, S])), { toDel: g, toAdd: W } = Or(u.keys(), _.keys());
    for (const S of g)
      (I = u.get(S)) == null || I.remove(), u.delete(S);
    for (const S of W) {
      const j = _.get(S);
      if (!j)
        throw new Error();
      const M = F.marker(j, {
        icon: F.divIcon({
          className: "custom-div-icon",
          html: Sr(
            j.color || "dodgerblue",
            "marker-" + j.id,
            j.icon || "",
            j.title
          ),
          iconSize: [30, 42],
          iconAnchor: [15, 42]
        })
      }).on("click", () => {
        d(S);
      }).addTo(v);
      u.set(S, M);
    }
  }, [wr(y), d]), P.useEffect(() => {
    const v = w.current;
    if (!v)
      throw new Error();
    v.on("click", (u) => {
      b(u.latlng.lng, u.latlng.lat), k();
    }), v.on("moveend", () => {
      const u = v.getBounds(), _ = v.getZoom(), g = u.getWest(), W = u.getSouth(), I = u.getEast(), S = u.getNorth(), j = { west: g, south: W, east: I, north: S }, M = Le.fromExtent(g, W, I, S, _);
      O(j, M);
    }), v.on("mousemove", (u) => {
      E(u.latlng.lng, u.latlng.lat);
    }), v.on("mouseout", () => {
      E(null, null);
    }), v.fire("moveend");
  }, [b, E, O, k]), /* @__PURE__ */ gr.jsx(
    "div",
    {
      id: R,
      style: {
        width: yr,
        height: Er,
        background: "lightgray",
        cursor: "default",
        ...c
      }
    }
  );
}
export {
  kr as default
};

;(function () {
  const p = document.createElement('link').relList
  if (p && p.supports && p.supports('modulepreload')) return
  for (const g of document.querySelectorAll('link[rel="modulepreload"]')) c(g)
  new MutationObserver((g) => {
    for (const s of g)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && c(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function h(g) {
    const s = {}
    return (
      g.integrity && (s.integrity = g.integrity),
      g.referrerPolicy && (s.referrerPolicy = g.referrerPolicy),
      g.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : g.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    )
  }
  function c(g) {
    if (g.ep) return
    g.ep = !0
    const s = h(g)
    fetch(g.href, s)
  }
})()
var vc = { exports: {} },
  il = {}
var Ug
function W_() {
  if (Ug) return il
  Ug = 1
  var y = Symbol.for('react.transitional.element'),
    p = Symbol.for('react.fragment')
  function h(c, g, s) {
    var o = null
    if (
      (s !== void 0 && (o = '' + s),
      g.key !== void 0 && (o = '' + g.key),
      'key' in g)
    ) {
      s = {}
      for (var u in g) u !== 'key' && (s[u] = g[u])
    } else s = g
    return (
      (g = s.ref),
      { $$typeof: y, type: c, key: o, ref: g !== void 0 ? g : null, props: s }
    )
  }
  return ((il.Fragment = p), (il.jsx = h), (il.jsxs = h), il)
}
var Dg
function X_() {
  return (Dg || ((Dg = 1), (vc.exports = W_())), vc.exports)
}
var Ke = X_(),
  _c = { exports: {} },
  $e = {}
var Bg
function Z_() {
  if (Bg) return $e
  Bg = 1
  var y = Symbol.for('react.transitional.element'),
    p = Symbol.for('react.portal'),
    h = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    g = Symbol.for('react.profiler'),
    s = Symbol.for('react.consumer'),
    o = Symbol.for('react.context'),
    u = Symbol.for('react.forward_ref'),
    i = Symbol.for('react.suspense'),
    a = Symbol.for('react.memo'),
    d = Symbol.for('react.lazy'),
    v = Symbol.for('react.activity'),
    S = Symbol.iterator
  function E(B) {
    return B === null || typeof B != 'object'
      ? null
      : ((B = (S && B[S]) || B['@@iterator']),
        typeof B == 'function' ? B : null)
  }
  var b = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    A = {}
  function M(B, D, Q) {
    ;((this.props = B),
      (this.context = D),
      (this.refs = A),
      (this.updater = Q || b))
  }
  ;((M.prototype.isReactComponent = {}),
    (M.prototype.setState = function (B, D) {
      if (typeof B != 'object' && typeof B != 'function' && B != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, B, D, 'setState')
    }),
    (M.prototype.forceUpdate = function (B) {
      this.updater.enqueueForceUpdate(this, B, 'forceUpdate')
    }))
  function _() {}
  _.prototype = M.prototype
  function O(B, D, Q) {
    ;((this.props = B),
      (this.context = D),
      (this.refs = A),
      (this.updater = Q || b))
  }
  var N = (O.prototype = new _())
  ;((N.constructor = O), w(N, M.prototype), (N.isPureReactComponent = !0))
  var T = Array.isArray
  function j() {}
  var x = { H: null, A: null, T: null, S: null },
    k = Object.prototype.hasOwnProperty
  function q(B, D, Q) {
    var he = Q.ref
    return {
      $$typeof: y,
      type: B,
      key: D,
      ref: he !== void 0 ? he : null,
      props: Q,
    }
  }
  function H(B, D) {
    return q(B.type, D, B.props)
  }
  function X(B) {
    return typeof B == 'object' && B !== null && B.$$typeof === y
  }
  function I(B) {
    var D = { '=': '=0', ':': '=2' }
    return (
      '$' +
      B.replace(/[=:]/g, function (Q) {
        return D[Q]
      })
    )
  }
  var ee = /\/+/g
  function J(B, D) {
    return typeof B == 'object' && B !== null && B.key != null
      ? I('' + B.key)
      : D.toString(36)
  }
  function $(B) {
    switch (B.status) {
      case 'fulfilled':
        return B.value
      case 'rejected':
        throw B.reason
      default:
        switch (
          (typeof B.status == 'string'
            ? B.then(j, j)
            : ((B.status = 'pending'),
              B.then(
                function (D) {
                  B.status === 'pending' &&
                    ((B.status = 'fulfilled'), (B.value = D))
                },
                function (D) {
                  B.status === 'pending' &&
                    ((B.status = 'rejected'), (B.reason = D))
                }
              )),
          B.status)
        ) {
          case 'fulfilled':
            return B.value
          case 'rejected':
            throw B.reason
        }
    }
    throw B
  }
  function K(B, D, Q, he, le) {
    var Me = typeof B
    ;(Me === 'undefined' || Me === 'boolean') && (B = null)
    var re = !1
    if (B === null) re = !0
    else
      switch (Me) {
        case 'bigint':
        case 'string':
        case 'number':
          re = !0
          break
        case 'object':
          switch (B.$$typeof) {
            case y:
            case p:
              re = !0
              break
            case d:
              return ((re = B._init), K(re(B._payload), D, Q, he, le))
          }
      }
    if (re)
      return (
        (le = le(B)),
        (re = he === '' ? '.' + J(B, 0) : he),
        T(le)
          ? ((Q = ''),
            re != null && (Q = re.replace(ee, '$&/') + '/'),
            K(le, D, Q, '', function (oe) {
              return oe
            }))
          : le != null &&
            (X(le) &&
              (le = H(
                le,
                Q +
                  (le.key == null || (B && B.key === le.key)
                    ? ''
                    : ('' + le.key).replace(ee, '$&/') + '/') +
                  re
              )),
            D.push(le)),
        1
      )
    re = 0
    var Y = he === '' ? '.' : he + ':'
    if (T(B))
      for (var ye = 0; ye < B.length; ye++)
        ((he = B[ye]), (Me = Y + J(he, ye)), (re += K(he, D, Q, Me, le)))
    else if (((ye = E(B)), typeof ye == 'function'))
      for (B = ye.call(B), ye = 0; !(he = B.next()).done; )
        ((he = he.value), (Me = Y + J(he, ye++)), (re += K(he, D, Q, Me, le)))
    else if (Me === 'object') {
      if (typeof B.then == 'function') return K($(B), D, Q, he, le)
      throw (
        (D = String(B)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (D === '[object Object]'
              ? 'object with keys {' + Object.keys(B).join(', ') + '}'
              : D) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      )
    }
    return re
  }
  function P(B, D, Q) {
    if (B == null) return B
    var he = [],
      le = 0
    return (
      K(B, he, '', '', function (Me) {
        return D.call(Q, Me, le++)
      }),
      he
    )
  }
  function F(B) {
    if (B._status === -1) {
      var D = B._result
      ;((D = D()),
        D.then(
          function (Q) {
            ;(B._status === 0 || B._status === -1) &&
              ((B._status = 1), (B._result = Q))
          },
          function (Q) {
            ;(B._status === 0 || B._status === -1) &&
              ((B._status = 2), (B._result = Q))
          }
        ),
        B._status === -1 && ((B._status = 0), (B._result = D)))
    }
    if (B._status === 1) return B._result.default
    throw B._result
  }
  var ce =
      typeof reportError == 'function'
        ? reportError
        : function (B) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var D = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof B == 'object' &&
                  B !== null &&
                  typeof B.message == 'string'
                    ? String(B.message)
                    : String(B),
                error: B,
              })
              if (!window.dispatchEvent(D)) return
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', B)
              return
            }
            console.error(B)
          },
    V = {
      map: P,
      forEach: function (B, D, Q) {
        P(
          B,
          function () {
            D.apply(this, arguments)
          },
          Q
        )
      },
      count: function (B) {
        var D = 0
        return (
          P(B, function () {
            D++
          }),
          D
        )
      },
      toArray: function (B) {
        return (
          P(B, function (D) {
            return D
          }) || []
        )
      },
      only: function (B) {
        if (!X(B))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          )
        return B
      },
    }
  return (
    ($e.Activity = v),
    ($e.Children = V),
    ($e.Component = M),
    ($e.Fragment = h),
    ($e.Profiler = g),
    ($e.PureComponent = O),
    ($e.StrictMode = c),
    ($e.Suspense = i),
    ($e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    ($e.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (B) {
        return x.H.useMemoCache(B)
      },
    }),
    ($e.cache = function (B) {
      return function () {
        return B.apply(null, arguments)
      }
    }),
    ($e.cacheSignal = function () {
      return null
    }),
    ($e.cloneElement = function (B, D, Q) {
      if (B == null)
        throw Error(
          'The argument must be a React element, but you passed ' + B + '.'
        )
      var he = w({}, B.props),
        le = B.key
      if (D != null)
        for (Me in (D.key !== void 0 && (le = '' + D.key), D))
          !k.call(D, Me) ||
            Me === 'key' ||
            Me === '__self' ||
            Me === '__source' ||
            (Me === 'ref' && D.ref === void 0) ||
            (he[Me] = D[Me])
      var Me = arguments.length - 2
      if (Me === 1) he.children = Q
      else if (1 < Me) {
        for (var re = Array(Me), Y = 0; Y < Me; Y++) re[Y] = arguments[Y + 2]
        he.children = re
      }
      return q(B.type, le, he)
    }),
    ($e.createContext = function (B) {
      return (
        (B = {
          $$typeof: o,
          _currentValue: B,
          _currentValue2: B,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (B.Provider = B),
        (B.Consumer = { $$typeof: s, _context: B }),
        B
      )
    }),
    ($e.createElement = function (B, D, Q) {
      var he,
        le = {},
        Me = null
      if (D != null)
        for (he in (D.key !== void 0 && (Me = '' + D.key), D))
          k.call(D, he) &&
            he !== 'key' &&
            he !== '__self' &&
            he !== '__source' &&
            (le[he] = D[he])
      var re = arguments.length - 2
      if (re === 1) le.children = Q
      else if (1 < re) {
        for (var Y = Array(re), ye = 0; ye < re; ye++) Y[ye] = arguments[ye + 2]
        le.children = Y
      }
      if (B && B.defaultProps)
        for (he in ((re = B.defaultProps), re))
          le[he] === void 0 && (le[he] = re[he])
      return q(B, Me, le)
    }),
    ($e.createRef = function () {
      return { current: null }
    }),
    ($e.forwardRef = function (B) {
      return { $$typeof: u, render: B }
    }),
    ($e.isValidElement = X),
    ($e.lazy = function (B) {
      return { $$typeof: d, _payload: { _status: -1, _result: B }, _init: F }
    }),
    ($e.memo = function (B, D) {
      return { $$typeof: a, type: B, compare: D === void 0 ? null : D }
    }),
    ($e.startTransition = function (B) {
      var D = x.T,
        Q = {}
      x.T = Q
      try {
        var he = B(),
          le = x.S
        ;(le !== null && le(Q, he),
          typeof he == 'object' &&
            he !== null &&
            typeof he.then == 'function' &&
            he.then(j, ce))
      } catch (Me) {
        ce(Me)
      } finally {
        ;(D !== null && Q.types !== null && (D.types = Q.types), (x.T = D))
      }
    }),
    ($e.unstable_useCacheRefresh = function () {
      return x.H.useCacheRefresh()
    }),
    ($e.use = function (B) {
      return x.H.use(B)
    }),
    ($e.useActionState = function (B, D, Q) {
      return x.H.useActionState(B, D, Q)
    }),
    ($e.useCallback = function (B, D) {
      return x.H.useCallback(B, D)
    }),
    ($e.useContext = function (B) {
      return x.H.useContext(B)
    }),
    ($e.useDebugValue = function () {}),
    ($e.useDeferredValue = function (B, D) {
      return x.H.useDeferredValue(B, D)
    }),
    ($e.useEffect = function (B, D) {
      return x.H.useEffect(B, D)
    }),
    ($e.useEffectEvent = function (B) {
      return x.H.useEffectEvent(B)
    }),
    ($e.useId = function () {
      return x.H.useId()
    }),
    ($e.useImperativeHandle = function (B, D, Q) {
      return x.H.useImperativeHandle(B, D, Q)
    }),
    ($e.useInsertionEffect = function (B, D) {
      return x.H.useInsertionEffect(B, D)
    }),
    ($e.useLayoutEffect = function (B, D) {
      return x.H.useLayoutEffect(B, D)
    }),
    ($e.useMemo = function (B, D) {
      return x.H.useMemo(B, D)
    }),
    ($e.useOptimistic = function (B, D) {
      return x.H.useOptimistic(B, D)
    }),
    ($e.useReducer = function (B, D, Q) {
      return x.H.useReducer(B, D, Q)
    }),
    ($e.useRef = function (B) {
      return x.H.useRef(B)
    }),
    ($e.useState = function (B) {
      return x.H.useState(B)
    }),
    ($e.useSyncExternalStore = function (B, D, Q) {
      return x.H.useSyncExternalStore(B, D, Q)
    }),
    ($e.useTransition = function () {
      return x.H.useTransition()
    }),
    ($e.version = '19.2.4'),
    $e
  )
}
var kg
function Rh() {
  return (kg || ((kg = 1), (_c.exports = Z_())), _c.exports)
}
var Xe = Rh(),
  Sc = { exports: {} },
  al = {},
  wc = { exports: {} },
  Ec = {}
var Lg
function J_() {
  return (
    Lg ||
      ((Lg = 1),
      (function (y) {
        function p(K, P) {
          var F = K.length
          K.push(P)
          e: for (; 0 < F; ) {
            var ce = (F - 1) >>> 1,
              V = K[ce]
            if (0 < g(V, P)) ((K[ce] = P), (K[F] = V), (F = ce))
            else break e
          }
        }
        function h(K) {
          return K.length === 0 ? null : K[0]
        }
        function c(K) {
          if (K.length === 0) return null
          var P = K[0],
            F = K.pop()
          if (F !== P) {
            K[0] = F
            e: for (var ce = 0, V = K.length, B = V >>> 1; ce < B; ) {
              var D = 2 * (ce + 1) - 1,
                Q = K[D],
                he = D + 1,
                le = K[he]
              if (0 > g(Q, F))
                he < V && 0 > g(le, Q)
                  ? ((K[ce] = le), (K[he] = F), (ce = he))
                  : ((K[ce] = Q), (K[D] = F), (ce = D))
              else if (he < V && 0 > g(le, F))
                ((K[ce] = le), (K[he] = F), (ce = he))
              else break e
            }
          }
          return P
        }
        function g(K, P) {
          var F = K.sortIndex - P.sortIndex
          return F !== 0 ? F : K.id - P.id
        }
        if (
          ((y.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var s = performance
          y.unstable_now = function () {
            return s.now()
          }
        } else {
          var o = Date,
            u = o.now()
          y.unstable_now = function () {
            return o.now() - u
          }
        }
        var i = [],
          a = [],
          d = 1,
          v = null,
          S = 3,
          E = !1,
          b = !1,
          w = !1,
          A = !1,
          M = typeof setTimeout == 'function' ? setTimeout : null,
          _ = typeof clearTimeout == 'function' ? clearTimeout : null,
          O = typeof setImmediate < 'u' ? setImmediate : null
        function N(K) {
          for (var P = h(a); P !== null; ) {
            if (P.callback === null) c(a)
            else if (P.startTime <= K)
              (c(a), (P.sortIndex = P.expirationTime), p(i, P))
            else break
            P = h(a)
          }
        }
        function T(K) {
          if (((w = !1), N(K), !b))
            if (h(i) !== null) ((b = !0), j || ((j = !0), I()))
            else {
              var P = h(a)
              P !== null && $(T, P.startTime - K)
            }
        }
        var j = !1,
          x = -1,
          k = 5,
          q = -1
        function H() {
          return A ? !0 : !(y.unstable_now() - q < k)
        }
        function X() {
          if (((A = !1), j)) {
            var K = y.unstable_now()
            q = K
            var P = !0
            try {
              e: {
                ;((b = !1), w && ((w = !1), _(x), (x = -1)), (E = !0))
                var F = S
                try {
                  t: {
                    for (
                      N(K), v = h(i);
                      v !== null && !(v.expirationTime > K && H());
                    ) {
                      var ce = v.callback
                      if (typeof ce == 'function') {
                        ;((v.callback = null), (S = v.priorityLevel))
                        var V = ce(v.expirationTime <= K)
                        if (((K = y.unstable_now()), typeof V == 'function')) {
                          ;((v.callback = V), N(K), (P = !0))
                          break t
                        }
                        ;(v === h(i) && c(i), N(K))
                      } else c(i)
                      v = h(i)
                    }
                    if (v !== null) P = !0
                    else {
                      var B = h(a)
                      ;(B !== null && $(T, B.startTime - K), (P = !1))
                    }
                  }
                  break e
                } finally {
                  ;((v = null), (S = F), (E = !1))
                }
                P = void 0
              }
            } finally {
              P ? I() : (j = !1)
            }
          }
        }
        var I
        if (typeof O == 'function')
          I = function () {
            O(X)
          }
        else if (typeof MessageChannel < 'u') {
          var ee = new MessageChannel(),
            J = ee.port2
          ;((ee.port1.onmessage = X),
            (I = function () {
              J.postMessage(null)
            }))
        } else
          I = function () {
            M(X, 0)
          }
        function $(K, P) {
          x = M(function () {
            K(y.unstable_now())
          }, P)
        }
        ;((y.unstable_IdlePriority = 5),
          (y.unstable_ImmediatePriority = 1),
          (y.unstable_LowPriority = 4),
          (y.unstable_NormalPriority = 3),
          (y.unstable_Profiling = null),
          (y.unstable_UserBlockingPriority = 2),
          (y.unstable_cancelCallback = function (K) {
            K.callback = null
          }),
          (y.unstable_forceFrameRate = function (K) {
            0 > K || 125 < K
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (k = 0 < K ? Math.floor(1e3 / K) : 5)
          }),
          (y.unstable_getCurrentPriorityLevel = function () {
            return S
          }),
          (y.unstable_next = function (K) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var P = 3
                break
              default:
                P = S
            }
            var F = S
            S = P
            try {
              return K()
            } finally {
              S = F
            }
          }),
          (y.unstable_requestPaint = function () {
            A = !0
          }),
          (y.unstable_runWithPriority = function (K, P) {
            switch (K) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                K = 3
            }
            var F = S
            S = K
            try {
              return P()
            } finally {
              S = F
            }
          }),
          (y.unstable_scheduleCallback = function (K, P, F) {
            var ce = y.unstable_now()
            switch (
              (typeof F == 'object' && F !== null
                ? ((F = F.delay),
                  (F = typeof F == 'number' && 0 < F ? ce + F : ce))
                : (F = ce),
              K)
            ) {
              case 1:
                var V = -1
                break
              case 2:
                V = 250
                break
              case 5:
                V = 1073741823
                break
              case 4:
                V = 1e4
                break
              default:
                V = 5e3
            }
            return (
              (V = F + V),
              (K = {
                id: d++,
                callback: P,
                priorityLevel: K,
                startTime: F,
                expirationTime: V,
                sortIndex: -1,
              }),
              F > ce
                ? ((K.sortIndex = F),
                  p(a, K),
                  h(i) === null &&
                    K === h(a) &&
                    (w ? (_(x), (x = -1)) : (w = !0), $(T, F - ce)))
                : ((K.sortIndex = V),
                  p(i, K),
                  b || E || ((b = !0), j || ((j = !0), I()))),
              K
            )
          }),
          (y.unstable_shouldYield = H),
          (y.unstable_wrapCallback = function (K) {
            var P = S
            return function () {
              var F = S
              S = P
              try {
                return K.apply(this, arguments)
              } finally {
                S = F
              }
            }
          }))
      })(Ec)),
    Ec
  )
}
var Ig
function $_() {
  return (Ig || ((Ig = 1), (wc.exports = J_())), wc.exports)
}
var Ac = { exports: {} },
  Kt = {}
var zg
function e1() {
  if (zg) return Kt
  zg = 1
  var y = Rh()
  function p(i) {
    var a = 'https://react.dev/errors/' + i
    if (1 < arguments.length) {
      a += '?args[]=' + encodeURIComponent(arguments[1])
      for (var d = 2; d < arguments.length; d++)
        a += '&args[]=' + encodeURIComponent(arguments[d])
    }
    return (
      'Minified React error #' +
      i +
      '; visit ' +
      a +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function h() {}
  var c = {
      d: {
        f: h,
        r: function () {
          throw Error(p(522))
        },
        D: h,
        C: h,
        L: h,
        m: h,
        X: h,
        S: h,
        M: h,
      },
      p: 0,
      findDOMNode: null,
    },
    g = Symbol.for('react.portal')
  function s(i, a, d) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: g,
      key: v == null ? null : '' + v,
      children: i,
      containerInfo: a,
      implementation: d,
    }
  }
  var o = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  function u(i, a) {
    if (i === 'font') return ''
    if (typeof a == 'string') return a === 'use-credentials' ? a : ''
  }
  return (
    (Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (Kt.createPortal = function (i, a) {
      var d =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!a || (a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11))
        throw Error(p(299))
      return s(i, a, null, d)
    }),
    (Kt.flushSync = function (i) {
      var a = o.T,
        d = c.p
      try {
        if (((o.T = null), (c.p = 2), i)) return i()
      } finally {
        ;((o.T = a), (c.p = d), c.d.f())
      }
    }),
    (Kt.preconnect = function (i, a) {
      typeof i == 'string' &&
        (a
          ? ((a = a.crossOrigin),
            (a =
              typeof a == 'string'
                ? a === 'use-credentials'
                  ? a
                  : ''
                : void 0))
          : (a = null),
        c.d.C(i, a))
    }),
    (Kt.prefetchDNS = function (i) {
      typeof i == 'string' && c.d.D(i)
    }),
    (Kt.preinit = function (i, a) {
      if (typeof i == 'string' && a && typeof a.as == 'string') {
        var d = a.as,
          v = u(d, a.crossOrigin),
          S = typeof a.integrity == 'string' ? a.integrity : void 0,
          E = typeof a.fetchPriority == 'string' ? a.fetchPriority : void 0
        d === 'style'
          ? c.d.S(i, typeof a.precedence == 'string' ? a.precedence : void 0, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: E,
            })
          : d === 'script' &&
            c.d.X(i, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: E,
              nonce: typeof a.nonce == 'string' ? a.nonce : void 0,
            })
      }
    }),
    (Kt.preinitModule = function (i, a) {
      if (typeof i == 'string')
        if (typeof a == 'object' && a !== null) {
          if (a.as == null || a.as === 'script') {
            var d = u(a.as, a.crossOrigin)
            c.d.M(i, {
              crossOrigin: d,
              integrity: typeof a.integrity == 'string' ? a.integrity : void 0,
              nonce: typeof a.nonce == 'string' ? a.nonce : void 0,
            })
          }
        } else a == null && c.d.M(i)
    }),
    (Kt.preload = function (i, a) {
      if (
        typeof i == 'string' &&
        typeof a == 'object' &&
        a !== null &&
        typeof a.as == 'string'
      ) {
        var d = a.as,
          v = u(d, a.crossOrigin)
        c.d.L(i, d, {
          crossOrigin: v,
          integrity: typeof a.integrity == 'string' ? a.integrity : void 0,
          nonce: typeof a.nonce == 'string' ? a.nonce : void 0,
          type: typeof a.type == 'string' ? a.type : void 0,
          fetchPriority:
            typeof a.fetchPriority == 'string' ? a.fetchPriority : void 0,
          referrerPolicy:
            typeof a.referrerPolicy == 'string' ? a.referrerPolicy : void 0,
          imageSrcSet:
            typeof a.imageSrcSet == 'string' ? a.imageSrcSet : void 0,
          imageSizes: typeof a.imageSizes == 'string' ? a.imageSizes : void 0,
          media: typeof a.media == 'string' ? a.media : void 0,
        })
      }
    }),
    (Kt.preloadModule = function (i, a) {
      if (typeof i == 'string')
        if (a) {
          var d = u(a.as, a.crossOrigin)
          c.d.m(i, {
            as: typeof a.as == 'string' && a.as !== 'script' ? a.as : void 0,
            crossOrigin: d,
            integrity: typeof a.integrity == 'string' ? a.integrity : void 0,
          })
        } else c.d.m(i)
    }),
    (Kt.requestFormReset = function (i) {
      c.d.r(i)
    }),
    (Kt.unstable_batchedUpdates = function (i, a) {
      return i(a)
    }),
    (Kt.useFormState = function (i, a, d) {
      return o.H.useFormState(i, a, d)
    }),
    (Kt.useFormStatus = function () {
      return o.H.useHostTransitionStatus()
    }),
    (Kt.version = '19.2.4'),
    Kt
  )
}
var qg
function t1() {
  if (qg) return Ac.exports
  qg = 1
  function y() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)
      } catch (p) {
        console.error(p)
      }
  }
  return (y(), (Ac.exports = e1()), Ac.exports)
}
var Hg
function r1() {
  if (Hg) return al
  Hg = 1
  var y = $_(),
    p = Rh(),
    h = t1()
  function c(e) {
    var t = 'https://react.dev/errors/' + e
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1])
      for (var r = 2; r < arguments.length; r++)
        t += '&args[]=' + encodeURIComponent(arguments[r])
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function g(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function s(e) {
    var t = e,
      r = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do ((t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return))
      while (e)
    }
    return t.tag === 3 ? r : null
  }
  function o(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated
    }
    return null
  }
  function u(e) {
    if (e.tag === 31) {
      var t = e.memoizedState
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated
    }
    return null
  }
  function i(e) {
    if (s(e) !== e) throw Error(c(188))
  }
  function a(e) {
    var t = e.alternate
    if (!t) {
      if (((t = s(e)), t === null)) throw Error(c(188))
      return t !== e ? null : e
    }
    for (var r = e, n = t; ; ) {
      var l = r.return
      if (l === null) break
      var f = l.alternate
      if (f === null) {
        if (((n = l.return), n !== null)) {
          r = n
          continue
        }
        break
      }
      if (l.child === f.child) {
        for (f = l.child; f; ) {
          if (f === r) return (i(l), e)
          if (f === n) return (i(l), t)
          f = f.sibling
        }
        throw Error(c(188))
      }
      if (r.return !== n.return) ((r = l), (n = f))
      else {
        for (var C = !1, L = l.child; L; ) {
          if (L === r) {
            ;((C = !0), (r = l), (n = f))
            break
          }
          if (L === n) {
            ;((C = !0), (n = l), (r = f))
            break
          }
          L = L.sibling
        }
        if (!C) {
          for (L = f.child; L; ) {
            if (L === r) {
              ;((C = !0), (r = f), (n = l))
              break
            }
            if (L === n) {
              ;((C = !0), (n = f), (r = l))
              break
            }
            L = L.sibling
          }
          if (!C) throw Error(c(189))
        }
      }
      if (r.alternate !== n) throw Error(c(190))
    }
    if (r.tag !== 3) throw Error(c(188))
    return r.stateNode.current === r ? e : t
  }
  function d(e) {
    var t = e.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return e
    for (e = e.child; e !== null; ) {
      if (((t = d(e)), t !== null)) return t
      e = e.sibling
    }
    return null
  }
  var v = Object.assign,
    S = Symbol.for('react.element'),
    E = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.portal'),
    w = Symbol.for('react.fragment'),
    A = Symbol.for('react.strict_mode'),
    M = Symbol.for('react.profiler'),
    _ = Symbol.for('react.consumer'),
    O = Symbol.for('react.context'),
    N = Symbol.for('react.forward_ref'),
    T = Symbol.for('react.suspense'),
    j = Symbol.for('react.suspense_list'),
    x = Symbol.for('react.memo'),
    k = Symbol.for('react.lazy'),
    q = Symbol.for('react.activity'),
    H = Symbol.for('react.memo_cache_sentinel'),
    X = Symbol.iterator
  function I(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (X && e[X]) || e['@@iterator']),
        typeof e == 'function' ? e : null)
  }
  var ee = Symbol.for('react.client.reference')
  function J(e) {
    if (e == null) return null
    if (typeof e == 'function')
      return e.$$typeof === ee ? null : e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
      case w:
        return 'Fragment'
      case M:
        return 'Profiler'
      case A:
        return 'StrictMode'
      case T:
        return 'Suspense'
      case j:
        return 'SuspenseList'
      case q:
        return 'Activity'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case b:
          return 'Portal'
        case O:
          return e.displayName || 'Context'
        case _:
          return (e._context.displayName || 'Context') + '.Consumer'
        case N:
          var t = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          )
        case x:
          return (
            (t = e.displayName || null),
            t !== null ? t : J(e.type) || 'Memo'
          )
        case k:
          ;((t = e._payload), (e = e._init))
          try {
            return J(e(t))
          } catch {}
      }
    return null
  }
  var $ = Array.isArray,
    K = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = { pending: !1, data: null, method: null, action: null },
    ce = [],
    V = -1
  function B(e) {
    return { current: e }
  }
  function D(e) {
    0 > V || ((e.current = ce[V]), (ce[V] = null), V--)
  }
  function Q(e, t) {
    ;(V++, (ce[V] = e.current), (e.current = t))
  }
  var he = B(null),
    le = B(null),
    Me = B(null),
    re = B(null)
  function Y(e, t) {
    switch ((Q(Me, t), Q(le, e), Q(he, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? rg(e) : 0
        break
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = rg(t)), (e = ng(t, e)))
        else
          switch (e) {
            case 'svg':
              e = 1
              break
            case 'math':
              e = 2
              break
            default:
              e = 0
          }
    }
    ;(D(he), Q(he, e))
  }
  function ye() {
    ;(D(he), D(le), D(Me))
  }
  function oe(e) {
    e.memoizedState !== null && Q(re, e)
    var t = he.current,
      r = ng(t, e.type)
    t !== r && (Q(le, e), Q(he, r))
  }
  function ue(e) {
    ;(le.current === e && (D(he), D(le)),
      re.current === e && (D(re), (el._currentValue = F)))
  }
  var fe, De
  function we(e) {
    if (fe === void 0)
      try {
        throw Error()
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/)
        ;((fe = (t && t[1]) || ''),
          (De =
            -1 <
            r.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < r.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''))
      }
    return (
      `
` +
      fe +
      e +
      De
    )
  }
  var G = !1
  function ne(e, t) {
    if (!e || G) return ''
    G = !0
    var r = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Le = function () {
                throw Error()
              }
              if (
                (Object.defineProperty(Le.prototype, 'props', {
                  set: function () {
                    throw Error()
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Le, [])
                } catch (Ee) {
                  var _e = Ee
                }
                Reflect.construct(e, [], Le)
              } else {
                try {
                  Le.call()
                } catch (Ee) {
                  _e = Ee
                }
                e.call(Le.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (Ee) {
                _e = Ee
              }
              ;(Le = e()) &&
                typeof Le.catch == 'function' &&
                Le.catch(function () {})
            }
          } catch (Ee) {
            if (Ee && _e && typeof Ee.stack == 'string')
              return [Ee.stack, _e.stack]
          }
          return [null, null]
        },
      }
      n.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot'
      var l = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        'name'
      )
      l &&
        l.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        })
      var f = n.DetermineComponentFrameRoot(),
        C = f[0],
        L = f[1]
      if (C && L) {
        var Z = C.split(`
`),
          ve = L.split(`
`)
        for (
          l = n = 0;
          n < Z.length && !Z[n].includes('DetermineComponentFrameRoot');
        )
          n++
        for (
          ;
          l < ve.length && !ve[l].includes('DetermineComponentFrameRoot');
        )
          l++
        if (n === Z.length || l === ve.length)
          for (
            n = Z.length - 1, l = ve.length - 1;
            1 <= n && 0 <= l && Z[n] !== ve[l];
          )
            l--
        for (; 1 <= n && 0 <= l; n--, l--)
          if (Z[n] !== ve[l]) {
            if (n !== 1 || l !== 1)
              do
                if ((n--, l--, 0 > l || Z[n] !== ve[l])) {
                  var je =
                    `
` + Z[n].replace(' at new ', ' at ')
                  return (
                    e.displayName &&
                      je.includes('<anonymous>') &&
                      (je = je.replace('<anonymous>', e.displayName)),
                    je
                  )
                }
              while (1 <= n && 0 <= l)
            break
          }
      }
    } finally {
      ;((G = !1), (Error.prepareStackTrace = r))
    }
    return (r = e ? e.displayName || e.name : '') ? we(r) : ''
  }
  function ge(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return we(e.type)
      case 16:
        return we('Lazy')
      case 13:
        return e.child !== t && t !== null
          ? we('Suspense Fallback')
          : we('Suspense')
      case 19:
        return we('SuspenseList')
      case 0:
      case 15:
        return ne(e.type, !1)
      case 11:
        return ne(e.type.render, !1)
      case 1:
        return ne(e.type, !0)
      case 31:
        return we('Activity')
      default:
        return ''
    }
  }
  function Re(e) {
    try {
      var t = '',
        r = null
      do ((t += ge(e, r)), (r = e), (e = e.return))
      while (e)
      return t
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      )
    }
  }
  var Ce = Object.prototype.hasOwnProperty,
    Be = y.unstable_scheduleCallback,
    ie = y.unstable_cancelCallback,
    Ne = y.unstable_shouldYield,
    Ie = y.unstable_requestPaint,
    Se = y.unstable_now,
    Je = y.unstable_getCurrentPriorityLevel,
    m = y.unstable_ImmediatePriority,
    R = y.unstable_UserBlockingPriority,
    U = y.unstable_NormalPriority,
    te = y.unstable_LowPriority,
    de = y.unstable_IdlePriority,
    Ae = y.log,
    qe = y.unstable_setDisableYieldValue,
    se = null,
    me = null
  function Ye(e) {
    if (
      (typeof Ae == 'function' && qe(e),
      me && typeof me.setStrictMode == 'function')
    )
      try {
        me.setStrictMode(se, e)
      } catch {}
  }
  var Pe = Math.clz32 ? Math.clz32 : Ar,
    Ze = Math.log,
    et = Math.LN2
  function Ar(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ze(e) / et) | 0)) | 0)
  }
  var Zt = 256,
    Mt = 262144,
    Jt = 4194304
  function nr(e) {
    var t = e & 42
    if (t !== 0) return t
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
        return 64
      case 128:
        return 128
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560
      case 67108864:
        return 67108864
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 0
      default:
        return e
    }
  }
  function $t(e, t, r) {
    var n = e.pendingLanes
    if (n === 0) return 0
    var l = 0,
      f = e.suspendedLanes,
      C = e.pingedLanes
    e = e.warmLanes
    var L = n & 134217727
    return (
      L !== 0
        ? ((n = L & ~f),
          n !== 0
            ? (l = nr(n))
            : ((C &= L),
              C !== 0
                ? (l = nr(C))
                : r || ((r = L & ~e), r !== 0 && (l = nr(r)))))
        : ((L = n & ~f),
          L !== 0
            ? (l = nr(L))
            : C !== 0
              ? (l = nr(C))
              : r || ((r = n & ~e), r !== 0 && (l = nr(r)))),
      l === 0
        ? 0
        : t !== 0 &&
            t !== l &&
            (t & f) === 0 &&
            ((f = l & -l),
            (r = t & -t),
            f >= r || (f === 32 && (r & 4194048) !== 0))
          ? t
          : l
    )
  }
  function Bt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
  }
  function Ti(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function Kr() {
    var e = Jt
    return ((Jt <<= 1), (Jt & 62914560) === 0 && (Jt = 4194304), e)
  }
  function Fr(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e)
    return t
  }
  function z(e, t) {
    ;((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)))
  }
  function W(e, t, r, n, l, f) {
    var C = e.pendingLanes
    ;((e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= r),
      (e.entangledLanes &= r),
      (e.errorRecoveryDisabledLanes &= r),
      (e.shellSuspendCounter = 0))
    var L = e.entanglements,
      Z = e.expirationTimes,
      ve = e.hiddenUpdates
    for (r = C & ~r; 0 < r; ) {
      var je = 31 - Pe(r),
        Le = 1 << je
      ;((L[je] = 0), (Z[je] = -1))
      var _e = ve[je]
      if (_e !== null)
        for (ve[je] = null, je = 0; je < _e.length; je++) {
          var Ee = _e[je]
          Ee !== null && (Ee.lane &= -536870913)
        }
      r &= ~Le
    }
    ;(n !== 0 && ze(e, n, 0),
      f !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(C & ~t)))
  }
  function ze(e, t, r) {
    ;((e.pendingLanes |= t), (e.suspendedLanes &= ~t))
    var n = 31 - Pe(t)
    ;((e.entangledLanes |= t),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (r & 261930)))
  }
  function He(e, t) {
    var r = (e.entangledLanes |= t)
    for (e = e.entanglements; r; ) {
      var n = 31 - Pe(r),
        l = 1 << n
      ;((l & t) | (e[n] & t) && (e[n] |= t), (r &= ~l))
    }
  }
  function Ge(e, t) {
    var r = t & -t
    return (
      (r = (r & 42) !== 0 ? 1 : Et(r)),
      (r & (e.suspendedLanes | t)) !== 0 ? 0 : r
    )
  }
  function Et(e) {
    switch (e) {
      case 2:
        e = 1
        break
      case 8:
        e = 4
        break
      case 32:
        e = 16
        break
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128
        break
      case 268435456:
        e = 134217728
        break
      default:
        e = 0
    }
    return e
  }
  function kt(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    )
  }
  function ir() {
    var e = P.p
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Og(e.type))
  }
  function Tn(e, t) {
    var r = P.p
    try {
      return ((P.p = e), t())
    } finally {
      P.p = r
    }
  }
  var ar = Math.random().toString(36).slice(2),
    At = '__reactFiber$' + ar,
    Lt = '__reactProps$' + ar,
    lr = '__reactContainer$' + ar,
    or = '__reactEvents$' + ar,
    zr = '__reactListeners$' + ar,
    Wr = '__reactHandles$' + ar,
    gr = '__reactResources$' + ar,
    er = '__reactMarker$' + ar
  function fs(e) {
    ;(delete e[At], delete e[Lt], delete e[or], delete e[zr], delete e[Wr])
  }
  function Oi(e) {
    var t = e[At]
    if (t) return t
    for (var r = e.parentNode; r; ) {
      if ((t = r[lr] || r[At])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = cg(e); e !== null; ) {
            if ((r = e[At])) return r
            e = cg(e)
          }
        return t
      }
      ;((e = r), (r = e.parentNode))
    }
    return null
  }
  function xi(e) {
    if ((e = e[At] || e[lr])) {
      var t = e.tag
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e
    }
    return null
  }
  function ga(e) {
    var t = e.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode
    throw Error(c(33))
  }
  function Mi(e) {
    var t = e[gr]
    return (
      t ||
        (t = e[gr] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    )
  }
  function zt(e) {
    e[er] = !0
  }
  var Yh = new Set(),
    Qh = {}
  function ti(e, t) {
    ;(Ri(e, t), Ri(e + 'Capture', t))
  }
  function Ri(e, t) {
    for (Qh[e] = t, e = 0; e < t.length; e++) Yh.add(t[e])
  }
  var qv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Vh = {},
    Kh = {}
  function Hv(e) {
    return Ce.call(Kh, e)
      ? !0
      : Ce.call(Vh, e)
        ? !1
        : qv.test(e)
          ? (Kh[e] = !0)
          : ((Vh[e] = !0), !1)
  }
  function yl(e, t, r) {
    if (Hv(t))
      if (r === null) e.removeAttribute(t)
      else {
        switch (typeof r) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t)
            return
          case 'boolean':
            var n = t.toLowerCase().slice(0, 5)
            if (n !== 'data-' && n !== 'aria-') {
              e.removeAttribute(t)
              return
            }
        }
        e.setAttribute(t, '' + r)
      }
  }
  function gl(e, t, r) {
    if (r === null) e.removeAttribute(t)
    else {
      switch (typeof r) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t)
          return
      }
      e.setAttribute(t, '' + r)
    }
  }
  function Xr(e, t, r, n) {
    if (n === null) e.removeAttribute(r)
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(r)
          return
      }
      e.setAttributeNS(t, r, '' + n)
    }
  }
  function Tr(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return e
      default:
        return ''
    }
  }
  function Fh(e) {
    var t = e.type
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    )
  }
  function Pv(e, t, r) {
    var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var l = n.get,
        f = n.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this)
          },
          set: function (C) {
            ;((r = '' + C), f.call(this, C))
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r
          },
          setValue: function (C) {
            r = '' + C
          },
          stopTracking: function () {
            ;((e._valueTracker = null), delete e[t])
          },
        }
      )
    }
  }
  function hs(e) {
    if (!e._valueTracker) {
      var t = Fh(e) ? 'checked' : 'value'
      e._valueTracker = Pv(e, t, '' + e[t])
    }
  }
  function Wh(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var r = t.getValue(),
      n = ''
    return (
      e && (n = Fh(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = n),
      e !== r ? (t.setValue(e), !0) : !1
    )
  }
  function ml(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  var Gv = /[\n"\\]/g
  function Or(e) {
    return e.replace(Gv, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' '
    })
  }
  function ds(e, t, r, n, l, f, C, L) {
    ;((e.name = ''),
      C != null &&
      typeof C != 'function' &&
      typeof C != 'symbol' &&
      typeof C != 'boolean'
        ? (e.type = C)
        : e.removeAttribute('type'),
      t != null
        ? C === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) &&
            (e.value = '' + Tr(t))
          : e.value !== '' + Tr(t) && (e.value = '' + Tr(t))
        : (C !== 'submit' && C !== 'reset') || e.removeAttribute('value'),
      t != null
        ? ps(e, C, Tr(t))
        : r != null
          ? ps(e, C, Tr(r))
          : n != null && e.removeAttribute('value'),
      l == null && f != null && (e.defaultChecked = !!f),
      l != null &&
        (e.checked = l && typeof l != 'function' && typeof l != 'symbol'),
      L != null &&
      typeof L != 'function' &&
      typeof L != 'symbol' &&
      typeof L != 'boolean'
        ? (e.name = '' + Tr(L))
        : e.removeAttribute('name'))
  }
  function Xh(e, t, r, n, l, f, C, L) {
    if (
      (f != null &&
        typeof f != 'function' &&
        typeof f != 'symbol' &&
        typeof f != 'boolean' &&
        (e.type = f),
      t != null || r != null)
    ) {
      if (!((f !== 'submit' && f !== 'reset') || t != null)) {
        hs(e)
        return
      }
      ;((r = r != null ? '' + Tr(r) : ''),
        (t = t != null ? '' + Tr(t) : r),
        L || t === e.value || (e.value = t),
        (e.defaultValue = t))
    }
    ;((n = n ?? l),
      (n = typeof n != 'function' && typeof n != 'symbol' && !!n),
      (e.checked = L ? e.checked : !!n),
      (e.defaultChecked = !!n),
      C != null &&
        typeof C != 'function' &&
        typeof C != 'symbol' &&
        typeof C != 'boolean' &&
        (e.name = C),
      hs(e))
  }
  function ps(e, t, r) {
    ;(t === 'number' && ml(e.ownerDocument) === e) ||
      e.defaultValue === '' + r ||
      (e.defaultValue = '' + r)
  }
  function Ci(e, t, r, n) {
    if (((e = e.options), t)) {
      t = {}
      for (var l = 0; l < r.length; l++) t['$' + r[l]] = !0
      for (r = 0; r < e.length; r++)
        ((l = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== l && (e[r].selected = l),
          l && n && (e[r].defaultSelected = !0))
    } else {
      for (r = '' + Tr(r), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === r) {
          ;((e[l].selected = !0), n && (e[l].defaultSelected = !0))
          return
        }
        t !== null || e[l].disabled || (t = e[l])
      }
      t !== null && (t.selected = !0)
    }
  }
  function Zh(e, t, r) {
    if (
      t != null &&
      ((t = '' + Tr(t)), t !== e.value && (e.value = t), r == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t)
      return
    }
    e.defaultValue = r != null ? '' + Tr(r) : ''
  }
  function Jh(e, t, r, n) {
    if (t == null) {
      if (n != null) {
        if (r != null) throw Error(c(92))
        if ($(n)) {
          if (1 < n.length) throw Error(c(93))
          n = n[0]
        }
        r = n
      }
      ;(r == null && (r = ''), (t = r))
    }
    ;((r = Tr(t)),
      (e.defaultValue = r),
      (n = e.textContent),
      n === r && n !== '' && n !== null && (e.value = n),
      hs(e))
  }
  function ji(e, t) {
    if (t) {
      var r = e.firstChild
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var Yv = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  )
  function $h(e, t, r) {
    var n = t.indexOf('--') === 0
    r == null || typeof r == 'boolean' || r === ''
      ? n
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : n
        ? e.setProperty(t, r)
        : typeof r != 'number' || r === 0 || Yv.has(t)
          ? t === 'float'
            ? (e.cssFloat = r)
            : (e[t] = ('' + r).trim())
          : (e[t] = r + 'px')
  }
  function ed(e, t, r) {
    if (t != null && typeof t != 'object') throw Error(c(62))
    if (((e = e.style), r != null)) {
      for (var n in r)
        !r.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf('--') === 0
            ? e.setProperty(n, '')
            : n === 'float'
              ? (e.cssFloat = '')
              : (e[n] = ''))
      for (var l in t)
        ((n = t[l]), t.hasOwnProperty(l) && r[l] !== n && $h(e, l, n))
    } else for (var f in t) t.hasOwnProperty(f) && $h(e, f, t[f])
  }
  function ys(e) {
    if (e.indexOf('-') === -1) return !1
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var Qv = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    Vv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
  function bl(e) {
    return Vv.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e
  }
  function Zr() {}
  var gs = null
  function ms(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var Ni = null,
    Ui = null
  function td(e) {
    var t = xi(e)
    if (t && (e = t.stateNode)) {
      var r = e[Lt] || null
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (ds(
              e,
              r.value,
              r.defaultValue,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name
            ),
            (t = r.name),
            r.type === 'radio' && t != null)
          ) {
            for (r = e; r.parentNode; ) r = r.parentNode
            for (
              r = r.querySelectorAll(
                'input[name="' + Or('' + t) + '"][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var n = r[t]
              if (n !== e && n.form === e.form) {
                var l = n[Lt] || null
                if (!l) throw Error(c(90))
                ds(
                  n,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name
                )
              }
            }
            for (t = 0; t < r.length; t++)
              ((n = r[t]), n.form === e.form && Wh(n))
          }
          break e
        case 'textarea':
          Zh(e, r.value, r.defaultValue)
          break e
        case 'select':
          ;((t = r.value), t != null && Ci(e, !!r.multiple, t, !1))
      }
    }
  }
  var bs = !1
  function rd(e, t, r) {
    if (bs) return e(t, r)
    bs = !0
    try {
      var n = e(t)
      return n
    } finally {
      if (
        ((bs = !1),
        (Ni !== null || Ui !== null) &&
          (ao(), Ni && ((t = Ni), (e = Ui), (Ui = Ni = null), td(t), e)))
      )
        for (t = 0; t < e.length; t++) td(e[t])
    }
  }
  function ma(e, t) {
    var r = e.stateNode
    if (r === null) return null
    var n = r[Lt] || null
    if (n === null) return null
    r = n[t]
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;((n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !n))
        break e
      default:
        e = !1
    }
    if (e) return null
    if (r && typeof r != 'function') throw Error(c(231, t, typeof r))
    return r
  }
  var Jr = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    vs = !1
  if (Jr)
    try {
      var ba = {}
      ;(Object.defineProperty(ba, 'passive', {
        get: function () {
          vs = !0
        },
      }),
        window.addEventListener('test', ba, ba),
        window.removeEventListener('test', ba, ba))
    } catch {
      vs = !1
    }
  var On = null,
    _s = null,
    vl = null
  function nd() {
    if (vl) return vl
    var e,
      t = _s,
      r = t.length,
      n,
      l = 'value' in On ? On.value : On.textContent,
      f = l.length
    for (e = 0; e < r && t[e] === l[e]; e++);
    var C = r - e
    for (n = 1; n <= C && t[r - n] === l[f - n]; n++);
    return (vl = l.slice(e, 1 < n ? 1 - n : void 0))
  }
  function _l(e) {
    var t = e.keyCode
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function Sl() {
    return !0
  }
  function id() {
    return !1
  }
  function sr(e) {
    function t(r, n, l, f, C) {
      ;((this._reactName = r),
        (this._targetInst = l),
        (this.type = n),
        (this.nativeEvent = f),
        (this.target = C),
        (this.currentTarget = null))
      for (var L in e)
        e.hasOwnProperty(L) && ((r = e[L]), (this[L] = r ? r(f) : f[L]))
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Sl
          : id),
        (this.isPropagationStopped = id),
        this
      )
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var r = this.nativeEvent
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = Sl))
        },
        stopPropagation: function () {
          var r = this.nativeEvent
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = Sl))
        },
        persist: function () {},
        isPersistent: Sl,
      }),
      t
    )
  }
  var ri = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    wl = sr(ri),
    va = v({}, ri, { view: 0, detail: 0 }),
    Kv = sr(va),
    Ss,
    ws,
    _a,
    El = v({}, va, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: As,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== _a &&
              (_a && e.type === 'mousemove'
                ? ((Ss = e.screenX - _a.screenX), (ws = e.screenY - _a.screenY))
                : (ws = Ss = 0),
              (_a = e)),
            Ss)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : ws
      },
    }),
    ad = sr(El),
    Fv = v({}, El, { dataTransfer: 0 }),
    Wv = sr(Fv),
    Xv = v({}, va, { relatedTarget: 0 }),
    Es = sr(Xv),
    Zv = v({}, ri, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jv = sr(Zv),
    $v = v({}, ri, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    e0 = sr($v),
    t0 = v({}, ri, { data: 0 }),
    ld = sr(t0),
    r0 = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    n0 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    i0 = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    }
  function a0(e) {
    var t = this.nativeEvent
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = i0[e])
        ? !!t[e]
        : !1
  }
  function As() {
    return a0
  }
  var l0 = v({}, va, {
      key: function (e) {
        if (e.key) {
          var t = r0[e.key] || e.key
          if (t !== 'Unidentified') return t
        }
        return e.type === 'keypress'
          ? ((e = _l(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? n0[e.keyCode] || 'Unidentified'
            : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: As,
      charCode: function (e) {
        return e.type === 'keypress' ? _l(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress'
          ? _l(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0
      },
    }),
    o0 = sr(l0),
    s0 = v({}, El, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    od = sr(s0),
    u0 = v({}, va, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: As,
    }),
    c0 = sr(u0),
    f0 = v({}, ri, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    h0 = sr(f0),
    d0 = v({}, El, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    p0 = sr(d0),
    y0 = v({}, ri, { newState: 0, oldState: 0 }),
    g0 = sr(y0),
    m0 = [9, 13, 27, 32],
    Ts = Jr && 'CompositionEvent' in window,
    Sa = null
  Jr && 'documentMode' in document && (Sa = document.documentMode)
  var b0 = Jr && 'TextEvent' in window && !Sa,
    sd = Jr && (!Ts || (Sa && 8 < Sa && 11 >= Sa)),
    ud = ' ',
    cd = !1
  function fd(e, t) {
    switch (e) {
      case 'keyup':
        return m0.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function hd(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null)
  }
  var Di = !1
  function v0(e, t) {
    switch (e) {
      case 'compositionend':
        return hd(t)
      case 'keypress':
        return t.which !== 32 ? null : ((cd = !0), ud)
      case 'textInput':
        return ((e = t.data), e === ud && cd ? null : e)
      default:
        return null
    }
  }
  function _0(e, t) {
    if (Di)
      return e === 'compositionend' || (!Ts && fd(e, t))
        ? ((e = nd()), (vl = _s = On = null), (Di = !1), e)
        : null
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return sd && t.locale !== 'ko' ? null : t.data
      default:
        return null
    }
  }
  var S0 = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function dd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!S0[e.type] : t === 'textarea'
  }
  function pd(e, t, r, n) {
    ;(Ni ? (Ui ? Ui.push(n) : (Ui = [n])) : (Ni = n),
      (t = ho(t, 'onChange')),
      0 < t.length &&
        ((r = new wl('onChange', 'change', null, r, n)),
        e.push({ event: r, listeners: t })))
  }
  var wa = null,
    Ea = null
  function w0(e) {
    Xy(e, 0)
  }
  function Al(e) {
    var t = ga(e)
    if (Wh(t)) return e
  }
  function yd(e, t) {
    if (e === 'change') return t
  }
  var gd = !1
  if (Jr) {
    var Os
    if (Jr) {
      var xs = 'oninput' in document
      if (!xs) {
        var md = document.createElement('div')
        ;(md.setAttribute('oninput', 'return;'),
          (xs = typeof md.oninput == 'function'))
      }
      Os = xs
    } else Os = !1
    gd = Os && (!document.documentMode || 9 < document.documentMode)
  }
  function bd() {
    wa && (wa.detachEvent('onpropertychange', vd), (Ea = wa = null))
  }
  function vd(e) {
    if (e.propertyName === 'value' && Al(Ea)) {
      var t = []
      ;(pd(t, Ea, e, ms(e)), rd(w0, t))
    }
  }
  function E0(e, t, r) {
    e === 'focusin'
      ? (bd(), (wa = t), (Ea = r), wa.attachEvent('onpropertychange', vd))
      : e === 'focusout' && bd()
  }
  function A0(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Al(Ea)
  }
  function T0(e, t) {
    if (e === 'click') return Al(t)
  }
  function O0(e, t) {
    if (e === 'input' || e === 'change') return Al(t)
  }
  function x0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var mr = typeof Object.is == 'function' ? Object.is : x0
  function Aa(e, t) {
    if (mr(e, t)) return !0
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1
    var r = Object.keys(e),
      n = Object.keys(t)
    if (r.length !== n.length) return !1
    for (n = 0; n < r.length; n++) {
      var l = r[n]
      if (!Ce.call(t, l) || !mr(e[l], t[l])) return !1
    }
    return !0
  }
  function _d(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function Sd(e, t) {
    var r = _d(e)
    e = 0
    for (var n; r; ) {
      if (r.nodeType === 3) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e }
        e = n
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling
            break e
          }
          r = r.parentNode
        }
        r = void 0
      }
      r = _d(r)
    }
  }
  function wd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? wd(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1
  }
  function Ed(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window
    for (var t = ml(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string'
      } catch {
        r = !1
      }
      if (r) e = t.contentWindow
      else break
      t = ml(e.document)
    }
    return t
  }
  function Ms(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    )
  }
  var M0 = Jr && 'documentMode' in document && 11 >= document.documentMode,
    Bi = null,
    Rs = null,
    Ta = null,
    Cs = !1
  function Ad(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
    Cs ||
      Bi == null ||
      Bi !== ml(n) ||
      ((n = Bi),
      'selectionStart' in n && Ms(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (Ta && Aa(Ta, n)) ||
        ((Ta = n),
        (n = ho(Rs, 'onSelect')),
        0 < n.length &&
          ((t = new wl('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: n }),
          (t.target = Bi))))
  }
  function ni(e, t) {
    var r = {}
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    )
  }
  var ki = {
      animationend: ni('Animation', 'AnimationEnd'),
      animationiteration: ni('Animation', 'AnimationIteration'),
      animationstart: ni('Animation', 'AnimationStart'),
      transitionrun: ni('Transition', 'TransitionRun'),
      transitionstart: ni('Transition', 'TransitionStart'),
      transitioncancel: ni('Transition', 'TransitionCancel'),
      transitionend: ni('Transition', 'TransitionEnd'),
    },
    js = {},
    Td = {}
  Jr &&
    ((Td = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ki.animationend.animation,
      delete ki.animationiteration.animation,
      delete ki.animationstart.animation),
    'TransitionEvent' in window || delete ki.transitionend.transition)
  function ii(e) {
    if (js[e]) return js[e]
    if (!ki[e]) return e
    var t = ki[e],
      r
    for (r in t) if (t.hasOwnProperty(r) && r in Td) return (js[e] = t[r])
    return e
  }
  var Od = ii('animationend'),
    xd = ii('animationiteration'),
    Md = ii('animationstart'),
    R0 = ii('transitionrun'),
    C0 = ii('transitionstart'),
    j0 = ii('transitioncancel'),
    Rd = ii('transitionend'),
    Cd = new Map(),
    Ns =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  Ns.push('scrollEnd')
  function Br(e, t) {
    ;(Cd.set(e, t), ti(t, [e]))
  }
  var Tl =
      typeof reportError == 'function'
        ? reportError
        : function (e) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var t = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == 'object' &&
                  e !== null &&
                  typeof e.message == 'string'
                    ? String(e.message)
                    : String(e),
                error: e,
              })
              if (!window.dispatchEvent(t)) return
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', e)
              return
            }
            console.error(e)
          },
    xr = [],
    Li = 0,
    Us = 0
  function Ol() {
    for (var e = Li, t = (Us = Li = 0); t < e; ) {
      var r = xr[t]
      xr[t++] = null
      var n = xr[t]
      xr[t++] = null
      var l = xr[t]
      xr[t++] = null
      var f = xr[t]
      if (((xr[t++] = null), n !== null && l !== null)) {
        var C = n.pending
        ;(C === null ? (l.next = l) : ((l.next = C.next), (C.next = l)),
          (n.pending = l))
      }
      f !== 0 && jd(r, l, f)
    }
  }
  function xl(e, t, r, n) {
    ;((xr[Li++] = e),
      (xr[Li++] = t),
      (xr[Li++] = r),
      (xr[Li++] = n),
      (Us |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n))
  }
  function Ds(e, t, r, n) {
    return (xl(e, t, r, n), Ml(e))
  }
  function ai(e, t) {
    return (xl(e, null, null, t), Ml(e))
  }
  function jd(e, t, r) {
    e.lanes |= r
    var n = e.alternate
    n !== null && (n.lanes |= r)
    for (var l = !1, f = e.return; f !== null; )
      ((f.childLanes |= r),
        (n = f.alternate),
        n !== null && (n.childLanes |= r),
        f.tag === 22 &&
          ((e = f.stateNode), e === null || e._visibility & 1 || (l = !0)),
        (e = f),
        (f = f.return))
    return e.tag === 3
      ? ((f = e.stateNode),
        l &&
          t !== null &&
          ((l = 31 - Pe(r)),
          (e = f.hiddenUpdates),
          (n = e[l]),
          n === null ? (e[l] = [t]) : n.push(t),
          (t.lane = r | 536870912)),
        f)
      : null
  }
  function Ml(e) {
    if (50 < Ka) throw ((Ka = 0), (Gu = null), Error(c(185)))
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return))
    return e.tag === 3 ? e.stateNode : null
  }
  var Ii = {}
  function N0(e, t, r, n) {
    ;((this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null))
  }
  function br(e, t, r, n) {
    return new N0(e, t, r, n)
  }
  function Bs(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent))
  }
  function $r(e, t) {
    var r = e.alternate
    return (
      r === null
        ? ((r = br(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 65011712),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      (r.refCleanup = e.refCleanup),
      r
    )
  }
  function Nd(e, t) {
    e.flags &= 65011714
    var r = e.alternate
    return (
      r === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = r.childLanes),
          (e.lanes = r.lanes),
          (e.child = r.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = r.memoizedProps),
          (e.memoizedState = r.memoizedState),
          (e.updateQueue = r.updateQueue),
          (e.type = r.type),
          (t = r.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    )
  }
  function Rl(e, t, r, n, l, f) {
    var C = 0
    if (((n = e), typeof e == 'function')) Bs(e) && (C = 1)
    else if (typeof e == 'string')
      C = L_(e, r, he.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5
    else
      e: switch (e) {
        case q:
          return ((e = br(31, r, t, l)), (e.elementType = q), (e.lanes = f), e)
        case w:
          return li(r.children, l, f, t)
        case A:
          ;((C = 8), (l |= 24))
          break
        case M:
          return (
            (e = br(12, r, t, l | 2)),
            (e.elementType = M),
            (e.lanes = f),
            e
          )
        case T:
          return ((e = br(13, r, t, l)), (e.elementType = T), (e.lanes = f), e)
        case j:
          return ((e = br(19, r, t, l)), (e.elementType = j), (e.lanes = f), e)
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case O:
                C = 10
                break e
              case _:
                C = 9
                break e
              case N:
                C = 11
                break e
              case x:
                C = 14
                break e
              case k:
                ;((C = 16), (n = null))
                break e
            }
          ;((C = 29),
            (r = Error(c(130, e === null ? 'null' : typeof e, ''))),
            (n = null))
      }
    return (
      (t = br(C, r, t, l)),
      (t.elementType = e),
      (t.type = n),
      (t.lanes = f),
      t
    )
  }
  function li(e, t, r, n) {
    return ((e = br(7, e, n, t)), (e.lanes = r), e)
  }
  function ks(e, t, r) {
    return ((e = br(6, e, null, t)), (e.lanes = r), e)
  }
  function Ud(e) {
    var t = br(18, null, null, 0)
    return ((t.stateNode = e), t)
  }
  function Ls(e, t, r) {
    return (
      (t = br(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  var Dd = new WeakMap()
  function Mr(e, t) {
    if (typeof e == 'object' && e !== null) {
      var r = Dd.get(e)
      return r !== void 0
        ? r
        : ((t = { value: e, source: t, stack: Re(t) }), Dd.set(e, t), t)
    }
    return { value: e, source: t, stack: Re(t) }
  }
  var zi = [],
    qi = 0,
    Cl = null,
    Oa = 0,
    Rr = [],
    Cr = 0,
    xn = null,
    qr = 1,
    Hr = ''
  function en(e, t) {
    ;((zi[qi++] = Oa), (zi[qi++] = Cl), (Cl = e), (Oa = t))
  }
  function Bd(e, t, r) {
    ;((Rr[Cr++] = qr), (Rr[Cr++] = Hr), (Rr[Cr++] = xn), (xn = e))
    var n = qr
    e = Hr
    var l = 32 - Pe(n) - 1
    ;((n &= ~(1 << l)), (r += 1))
    var f = 32 - Pe(t) + l
    if (30 < f) {
      var C = l - (l % 5)
      ;((f = (n & ((1 << C) - 1)).toString(32)),
        (n >>= C),
        (l -= C),
        (qr = (1 << (32 - Pe(t) + l)) | (r << l) | n),
        (Hr = f + e))
    } else ((qr = (1 << f) | (r << l) | n), (Hr = e))
  }
  function Is(e) {
    e.return !== null && (en(e, 1), Bd(e, 1, 0))
  }
  function zs(e) {
    for (; e === Cl; )
      ((Cl = zi[--qi]), (zi[qi] = null), (Oa = zi[--qi]), (zi[qi] = null))
    for (; e === xn; )
      ((xn = Rr[--Cr]),
        (Rr[Cr] = null),
        (Hr = Rr[--Cr]),
        (Rr[Cr] = null),
        (qr = Rr[--Cr]),
        (Rr[Cr] = null))
  }
  function kd(e, t) {
    ;((Rr[Cr++] = qr),
      (Rr[Cr++] = Hr),
      (Rr[Cr++] = xn),
      (qr = t.id),
      (Hr = t.overflow),
      (xn = e))
  }
  var Gt = null,
    vt = null,
    ot = !1,
    Mn = null,
    jr = !1,
    qs = Error(c(519))
  function Rn(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? 'text'
          : 'HTML',
        ''
      )
    )
    throw (xa(Mr(t, e)), qs)
  }
  function Ld(e) {
    var t = e.stateNode,
      r = e.type,
      n = e.memoizedProps
    switch (((t[At] = e), (t[Lt] = n), r)) {
      case 'dialog':
        ;(it('cancel', t), it('close', t))
        break
      case 'iframe':
      case 'object':
      case 'embed':
        it('load', t)
        break
      case 'video':
      case 'audio':
        for (r = 0; r < Wa.length; r++) it(Wa[r], t)
        break
      case 'source':
        it('error', t)
        break
      case 'img':
      case 'image':
      case 'link':
        ;(it('error', t), it('load', t))
        break
      case 'details':
        it('toggle', t)
        break
      case 'input':
        ;(it('invalid', t),
          Xh(
            t,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0
          ))
        break
      case 'select':
        it('invalid', t)
        break
      case 'textarea':
        ;(it('invalid', t), Jh(t, n.value, n.defaultValue, n.children))
    }
    ;((r = n.children),
      (typeof r != 'string' && typeof r != 'number' && typeof r != 'bigint') ||
      t.textContent === '' + r ||
      n.suppressHydrationWarning === !0 ||
      eg(t.textContent, r)
        ? (n.popover != null && (it('beforetoggle', t), it('toggle', t)),
          n.onScroll != null && it('scroll', t),
          n.onScrollEnd != null && it('scrollend', t),
          n.onClick != null && (t.onclick = Zr),
          (t = !0))
        : (t = !1),
      t || Rn(e, !0))
  }
  function Id(e) {
    for (Gt = e.return; Gt; )
      switch (Gt.tag) {
        case 5:
        case 31:
        case 13:
          jr = !1
          return
        case 27:
        case 3:
          jr = !0
          return
        default:
          Gt = Gt.return
      }
  }
  function Hi(e) {
    if (e !== Gt) return !1
    if (!ot) return (Id(e), (ot = !0), !1)
    var t = e.tag,
      r
    if (
      ((r = t !== 3 && t !== 27) &&
        ((r = t === 5) &&
          ((r = e.type),
          (r =
            !(r !== 'form' && r !== 'button') || ic(e.type, e.memoizedProps))),
        (r = !r)),
      r && vt && Rn(e),
      Id(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317))
      vt = ug(e)
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317))
      vt = ug(e)
    } else
      t === 27
        ? ((t = vt), Gn(e.type) ? ((e = uc), (uc = null), (vt = e)) : (vt = t))
        : (vt = Gt ? Ur(e.stateNode.nextSibling) : null)
    return !0
  }
  function oi() {
    ;((vt = Gt = null), (ot = !1))
  }
  function Hs() {
    var e = Mn
    return (
      e !== null &&
        (hr === null ? (hr = e) : hr.push.apply(hr, e), (Mn = null)),
      e
    )
  }
  function xa(e) {
    Mn === null ? (Mn = [e]) : Mn.push(e)
  }
  var Ps = B(null),
    si = null,
    tn = null
  function Cn(e, t, r) {
    ;(Q(Ps, t._currentValue), (t._currentValue = r))
  }
  function rn(e) {
    ;((e._currentValue = Ps.current), D(Ps))
  }
  function Gs(e, t, r) {
    for (; e !== null; ) {
      var n = e.alternate
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
      )
        break
      e = e.return
    }
  }
  function Ys(e, t, r, n) {
    var l = e.child
    for (l !== null && (l.return = e); l !== null; ) {
      var f = l.dependencies
      if (f !== null) {
        var C = l.child
        f = f.firstContext
        e: for (; f !== null; ) {
          var L = f
          f = l
          for (var Z = 0; Z < t.length; Z++)
            if (L.context === t[Z]) {
              ;((f.lanes |= r),
                (L = f.alternate),
                L !== null && (L.lanes |= r),
                Gs(f.return, r, e),
                n || (C = null))
              break e
            }
          f = L.next
        }
      } else if (l.tag === 18) {
        if (((C = l.return), C === null)) throw Error(c(341))
        ;((C.lanes |= r),
          (f = C.alternate),
          f !== null && (f.lanes |= r),
          Gs(C, r, e),
          (C = null))
      } else C = l.child
      if (C !== null) C.return = l
      else
        for (C = l; C !== null; ) {
          if (C === e) {
            C = null
            break
          }
          if (((l = C.sibling), l !== null)) {
            ;((l.return = C.return), (C = l))
            break
          }
          C = C.return
        }
      l = C
    }
  }
  function Pi(e, t, r, n) {
    e = null
    for (var l = t, f = !1; l !== null; ) {
      if (!f) {
        if ((l.flags & 524288) !== 0) f = !0
        else if ((l.flags & 262144) !== 0) break
      }
      if (l.tag === 10) {
        var C = l.alternate
        if (C === null) throw Error(c(387))
        if (((C = C.memoizedProps), C !== null)) {
          var L = l.type
          mr(l.pendingProps.value, C.value) ||
            (e !== null ? e.push(L) : (e = [L]))
        }
      } else if (l === re.current) {
        if (((C = l.alternate), C === null)) throw Error(c(387))
        C.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (e !== null ? e.push(el) : (e = [el]))
      }
      l = l.return
    }
    ;(e !== null && Ys(t, e, r, n), (t.flags |= 262144))
  }
  function jl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!mr(e.context._currentValue, e.memoizedValue)) return !0
      e = e.next
    }
    return !1
  }
  function ui(e) {
    ;((si = e),
      (tn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null))
  }
  function Yt(e) {
    return zd(si, e)
  }
  function Nl(e, t) {
    return (si === null && ui(e), zd(e, t))
  }
  function zd(e, t) {
    var r = t._currentValue
    if (((t = { context: t, memoizedValue: r, next: null }), tn === null)) {
      if (e === null) throw Error(c(308))
      ;((tn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288))
    } else tn = tn.next = t
    return r
  }
  var U0 =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (r, n) {
                  e.push(n)
                },
              })
            this.abort = function () {
              ;((t.aborted = !0),
                e.forEach(function (r) {
                  return r()
                }))
            }
          },
    D0 = y.unstable_scheduleCallback,
    B0 = y.unstable_NormalPriority,
    jt = {
      $$typeof: O,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    }
  function Qs() {
    return { controller: new U0(), data: new Map(), refCount: 0 }
  }
  function Ma(e) {
    ;(e.refCount--,
      e.refCount === 0 &&
        D0(B0, function () {
          e.controller.abort()
        }))
  }
  var Ra = null,
    Vs = 0,
    Gi = 0,
    Yi = null
  function k0(e, t) {
    if (Ra === null) {
      var r = (Ra = [])
      ;((Vs = 0),
        (Gi = Wu()),
        (Yi = {
          status: 'pending',
          value: void 0,
          then: function (n) {
            r.push(n)
          },
        }))
    }
    return (Vs++, t.then(qd, qd), t)
  }
  function qd() {
    if (--Vs === 0 && Ra !== null) {
      Yi !== null && (Yi.status = 'fulfilled')
      var e = Ra
      ;((Ra = null), (Gi = 0), (Yi = null))
      for (var t = 0; t < e.length; t++) (0, e[t])()
    }
  }
  function L0(e, t) {
    var r = [],
      n = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (l) {
          r.push(l)
        },
      }
    return (
      e.then(
        function () {
          ;((n.status = 'fulfilled'), (n.value = t))
          for (var l = 0; l < r.length; l++) (0, r[l])(t)
        },
        function (l) {
          for (n.status = 'rejected', n.reason = l, l = 0; l < r.length; l++)
            (0, r[l])(void 0)
        }
      ),
      n
    )
  }
  var Hd = K.S
  K.S = function (e, t) {
    ;((Ay = Se()),
      typeof t == 'object' &&
        t !== null &&
        typeof t.then == 'function' &&
        k0(e, t),
      Hd !== null && Hd(e, t))
  }
  var ci = B(null)
  function Ks() {
    var e = ci.current
    return e !== null ? e : mt.pooledCache
  }
  function Ul(e, t) {
    t === null ? Q(ci, ci.current) : Q(ci, t.pool)
  }
  function Pd() {
    var e = Ks()
    return e === null ? null : { parent: jt._currentValue, pool: e }
  }
  var Qi = Error(c(460)),
    Fs = Error(c(474)),
    Dl = Error(c(542)),
    Bl = { then: function () {} }
  function Gd(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected')
  }
  function Yd(e, t, r) {
    switch (
      ((r = e[r]),
      r === void 0 ? e.push(t) : r !== t && (t.then(Zr, Zr), (t = r)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value
      case 'rejected':
        throw ((e = t.reason), Vd(e), e)
      default:
        if (typeof t.status == 'string') t.then(Zr, Zr)
        else {
          if (((e = mt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482))
          ;((e = t),
            (e.status = 'pending'),
            e.then(
              function (n) {
                if (t.status === 'pending') {
                  var l = t
                  ;((l.status = 'fulfilled'), (l.value = n))
                }
              },
              function (n) {
                if (t.status === 'pending') {
                  var l = t
                  ;((l.status = 'rejected'), (l.reason = n))
                }
              }
            ))
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value
          case 'rejected':
            throw ((e = t.reason), Vd(e), e)
        }
        throw ((hi = t), Qi)
    }
  }
  function fi(e) {
    try {
      var t = e._init
      return t(e._payload)
    } catch (r) {
      throw r !== null && typeof r == 'object' && typeof r.then == 'function'
        ? ((hi = r), Qi)
        : r
    }
  }
  var hi = null
  function Qd() {
    if (hi === null) throw Error(c(459))
    var e = hi
    return ((hi = null), e)
  }
  function Vd(e) {
    if (e === Qi || e === Dl) throw Error(c(483))
  }
  var Vi = null,
    Ca = 0
  function kl(e) {
    var t = Ca
    return ((Ca += 1), Vi === null && (Vi = []), Yd(Vi, e, t))
  }
  function ja(e, t) {
    ;((t = t.props.ref), (e.ref = t !== void 0 ? t : null))
  }
  function Ll(e, t) {
    throw t.$$typeof === S
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e
          )
        ))
  }
  function Kd(e) {
    function t(pe, ae) {
      if (e) {
        var be = pe.deletions
        be === null ? ((pe.deletions = [ae]), (pe.flags |= 16)) : be.push(ae)
      }
    }
    function r(pe, ae) {
      if (!e) return null
      for (; ae !== null; ) (t(pe, ae), (ae = ae.sibling))
      return null
    }
    function n(pe) {
      for (var ae = new Map(); pe !== null; )
        (pe.key !== null ? ae.set(pe.key, pe) : ae.set(pe.index, pe),
          (pe = pe.sibling))
      return ae
    }
    function l(pe, ae) {
      return ((pe = $r(pe, ae)), (pe.index = 0), (pe.sibling = null), pe)
    }
    function f(pe, ae, be) {
      return (
        (pe.index = be),
        e
          ? ((be = pe.alternate),
            be !== null
              ? ((be = be.index), be < ae ? ((pe.flags |= 67108866), ae) : be)
              : ((pe.flags |= 67108866), ae))
          : ((pe.flags |= 1048576), ae)
      )
    }
    function C(pe) {
      return (e && pe.alternate === null && (pe.flags |= 67108866), pe)
    }
    function L(pe, ae, be, ke) {
      return ae === null || ae.tag !== 6
        ? ((ae = ks(be, pe.mode, ke)), (ae.return = pe), ae)
        : ((ae = l(ae, be)), (ae.return = pe), ae)
    }
    function Z(pe, ae, be, ke) {
      var Fe = be.type
      return Fe === w
        ? je(pe, ae, be.props.children, ke, be.key)
        : ae !== null &&
            (ae.elementType === Fe ||
              (typeof Fe == 'object' &&
                Fe !== null &&
                Fe.$$typeof === k &&
                fi(Fe) === ae.type))
          ? ((ae = l(ae, be.props)), ja(ae, be), (ae.return = pe), ae)
          : ((ae = Rl(be.type, be.key, be.props, null, pe.mode, ke)),
            ja(ae, be),
            (ae.return = pe),
            ae)
    }
    function ve(pe, ae, be, ke) {
      return ae === null ||
        ae.tag !== 4 ||
        ae.stateNode.containerInfo !== be.containerInfo ||
        ae.stateNode.implementation !== be.implementation
        ? ((ae = Ls(be, pe.mode, ke)), (ae.return = pe), ae)
        : ((ae = l(ae, be.children || [])), (ae.return = pe), ae)
    }
    function je(pe, ae, be, ke, Fe) {
      return ae === null || ae.tag !== 7
        ? ((ae = li(be, pe.mode, ke, Fe)), (ae.return = pe), ae)
        : ((ae = l(ae, be)), (ae.return = pe), ae)
    }
    function Le(pe, ae, be) {
      if (
        (typeof ae == 'string' && ae !== '') ||
        typeof ae == 'number' ||
        typeof ae == 'bigint'
      )
        return ((ae = ks('' + ae, pe.mode, be)), (ae.return = pe), ae)
      if (typeof ae == 'object' && ae !== null) {
        switch (ae.$$typeof) {
          case E:
            return (
              (be = Rl(ae.type, ae.key, ae.props, null, pe.mode, be)),
              ja(be, ae),
              (be.return = pe),
              be
            )
          case b:
            return ((ae = Ls(ae, pe.mode, be)), (ae.return = pe), ae)
          case k:
            return ((ae = fi(ae)), Le(pe, ae, be))
        }
        if ($(ae) || I(ae))
          return ((ae = li(ae, pe.mode, be, null)), (ae.return = pe), ae)
        if (typeof ae.then == 'function') return Le(pe, kl(ae), be)
        if (ae.$$typeof === O) return Le(pe, Nl(pe, ae), be)
        Ll(pe, ae)
      }
      return null
    }
    function _e(pe, ae, be, ke) {
      var Fe = ae !== null ? ae.key : null
      if (
        (typeof be == 'string' && be !== '') ||
        typeof be == 'number' ||
        typeof be == 'bigint'
      )
        return Fe !== null ? null : L(pe, ae, '' + be, ke)
      if (typeof be == 'object' && be !== null) {
        switch (be.$$typeof) {
          case E:
            return be.key === Fe ? Z(pe, ae, be, ke) : null
          case b:
            return be.key === Fe ? ve(pe, ae, be, ke) : null
          case k:
            return ((be = fi(be)), _e(pe, ae, be, ke))
        }
        if ($(be) || I(be)) return Fe !== null ? null : je(pe, ae, be, ke, null)
        if (typeof be.then == 'function') return _e(pe, ae, kl(be), ke)
        if (be.$$typeof === O) return _e(pe, ae, Nl(pe, be), ke)
        Ll(pe, be)
      }
      return null
    }
    function Ee(pe, ae, be, ke, Fe) {
      if (
        (typeof ke == 'string' && ke !== '') ||
        typeof ke == 'number' ||
        typeof ke == 'bigint'
      )
        return ((pe = pe.get(be) || null), L(ae, pe, '' + ke, Fe))
      if (typeof ke == 'object' && ke !== null) {
        switch (ke.$$typeof) {
          case E:
            return (
              (pe = pe.get(ke.key === null ? be : ke.key) || null),
              Z(ae, pe, ke, Fe)
            )
          case b:
            return (
              (pe = pe.get(ke.key === null ? be : ke.key) || null),
              ve(ae, pe, ke, Fe)
            )
          case k:
            return ((ke = fi(ke)), Ee(pe, ae, be, ke, Fe))
        }
        if ($(ke) || I(ke))
          return ((pe = pe.get(be) || null), je(ae, pe, ke, Fe, null))
        if (typeof ke.then == 'function') return Ee(pe, ae, be, kl(ke), Fe)
        if (ke.$$typeof === O) return Ee(pe, ae, be, Nl(ae, ke), Fe)
        Ll(ae, ke)
      }
      return null
    }
    function Qe(pe, ae, be, ke) {
      for (
        var Fe = null, st = null, Ve = ae, rt = (ae = 0), lt = null;
        Ve !== null && rt < be.length;
        rt++
      ) {
        Ve.index > rt ? ((lt = Ve), (Ve = null)) : (lt = Ve.sibling)
        var ut = _e(pe, Ve, be[rt], ke)
        if (ut === null) {
          Ve === null && (Ve = lt)
          break
        }
        ;(e && Ve && ut.alternate === null && t(pe, Ve),
          (ae = f(ut, ae, rt)),
          st === null ? (Fe = ut) : (st.sibling = ut),
          (st = ut),
          (Ve = lt))
      }
      if (rt === be.length) return (r(pe, Ve), ot && en(pe, rt), Fe)
      if (Ve === null) {
        for (; rt < be.length; rt++)
          ((Ve = Le(pe, be[rt], ke)),
            Ve !== null &&
              ((ae = f(Ve, ae, rt)),
              st === null ? (Fe = Ve) : (st.sibling = Ve),
              (st = Ve)))
        return (ot && en(pe, rt), Fe)
      }
      for (Ve = n(Ve); rt < be.length; rt++)
        ((lt = Ee(Ve, pe, rt, be[rt], ke)),
          lt !== null &&
            (e &&
              lt.alternate !== null &&
              Ve.delete(lt.key === null ? rt : lt.key),
            (ae = f(lt, ae, rt)),
            st === null ? (Fe = lt) : (st.sibling = lt),
            (st = lt)))
      return (
        e &&
          Ve.forEach(function (Fn) {
            return t(pe, Fn)
          }),
        ot && en(pe, rt),
        Fe
      )
    }
    function We(pe, ae, be, ke) {
      if (be == null) throw Error(c(151))
      for (
        var Fe = null,
          st = null,
          Ve = ae,
          rt = (ae = 0),
          lt = null,
          ut = be.next();
        Ve !== null && !ut.done;
        rt++, ut = be.next()
      ) {
        Ve.index > rt ? ((lt = Ve), (Ve = null)) : (lt = Ve.sibling)
        var Fn = _e(pe, Ve, ut.value, ke)
        if (Fn === null) {
          Ve === null && (Ve = lt)
          break
        }
        ;(e && Ve && Fn.alternate === null && t(pe, Ve),
          (ae = f(Fn, ae, rt)),
          st === null ? (Fe = Fn) : (st.sibling = Fn),
          (st = Fn),
          (Ve = lt))
      }
      if (ut.done) return (r(pe, Ve), ot && en(pe, rt), Fe)
      if (Ve === null) {
        for (; !ut.done; rt++, ut = be.next())
          ((ut = Le(pe, ut.value, ke)),
            ut !== null &&
              ((ae = f(ut, ae, rt)),
              st === null ? (Fe = ut) : (st.sibling = ut),
              (st = ut)))
        return (ot && en(pe, rt), Fe)
      }
      for (Ve = n(Ve); !ut.done; rt++, ut = be.next())
        ((ut = Ee(Ve, pe, rt, ut.value, ke)),
          ut !== null &&
            (e &&
              ut.alternate !== null &&
              Ve.delete(ut.key === null ? rt : ut.key),
            (ae = f(ut, ae, rt)),
            st === null ? (Fe = ut) : (st.sibling = ut),
            (st = ut)))
      return (
        e &&
          Ve.forEach(function (F_) {
            return t(pe, F_)
          }),
        ot && en(pe, rt),
        Fe
      )
    }
    function yt(pe, ae, be, ke) {
      if (
        (typeof be == 'object' &&
          be !== null &&
          be.type === w &&
          be.key === null &&
          (be = be.props.children),
        typeof be == 'object' && be !== null)
      ) {
        switch (be.$$typeof) {
          case E:
            e: {
              for (var Fe = be.key; ae !== null; ) {
                if (ae.key === Fe) {
                  if (((Fe = be.type), Fe === w)) {
                    if (ae.tag === 7) {
                      ;(r(pe, ae.sibling),
                        (ke = l(ae, be.props.children)),
                        (ke.return = pe),
                        (pe = ke))
                      break e
                    }
                  } else if (
                    ae.elementType === Fe ||
                    (typeof Fe == 'object' &&
                      Fe !== null &&
                      Fe.$$typeof === k &&
                      fi(Fe) === ae.type)
                  ) {
                    ;(r(pe, ae.sibling),
                      (ke = l(ae, be.props)),
                      ja(ke, be),
                      (ke.return = pe),
                      (pe = ke))
                    break e
                  }
                  r(pe, ae)
                  break
                } else t(pe, ae)
                ae = ae.sibling
              }
              be.type === w
                ? ((ke = li(be.props.children, pe.mode, ke, be.key)),
                  (ke.return = pe),
                  (pe = ke))
                : ((ke = Rl(be.type, be.key, be.props, null, pe.mode, ke)),
                  ja(ke, be),
                  (ke.return = pe),
                  (pe = ke))
            }
            return C(pe)
          case b:
            e: {
              for (Fe = be.key; ae !== null; ) {
                if (ae.key === Fe)
                  if (
                    ae.tag === 4 &&
                    ae.stateNode.containerInfo === be.containerInfo &&
                    ae.stateNode.implementation === be.implementation
                  ) {
                    ;(r(pe, ae.sibling),
                      (ke = l(ae, be.children || [])),
                      (ke.return = pe),
                      (pe = ke))
                    break e
                  } else {
                    r(pe, ae)
                    break
                  }
                else t(pe, ae)
                ae = ae.sibling
              }
              ;((ke = Ls(be, pe.mode, ke)), (ke.return = pe), (pe = ke))
            }
            return C(pe)
          case k:
            return ((be = fi(be)), yt(pe, ae, be, ke))
        }
        if ($(be)) return Qe(pe, ae, be, ke)
        if (I(be)) {
          if (((Fe = I(be)), typeof Fe != 'function')) throw Error(c(150))
          return ((be = Fe.call(be)), We(pe, ae, be, ke))
        }
        if (typeof be.then == 'function') return yt(pe, ae, kl(be), ke)
        if (be.$$typeof === O) return yt(pe, ae, Nl(pe, be), ke)
        Ll(pe, be)
      }
      return (typeof be == 'string' && be !== '') ||
        typeof be == 'number' ||
        typeof be == 'bigint'
        ? ((be = '' + be),
          ae !== null && ae.tag === 6
            ? (r(pe, ae.sibling), (ke = l(ae, be)), (ke.return = pe), (pe = ke))
            : (r(pe, ae),
              (ke = ks(be, pe.mode, ke)),
              (ke.return = pe),
              (pe = ke)),
          C(pe))
        : r(pe, ae)
    }
    return function (pe, ae, be, ke) {
      try {
        Ca = 0
        var Fe = yt(pe, ae, be, ke)
        return ((Vi = null), Fe)
      } catch (Ve) {
        if (Ve === Qi || Ve === Dl) throw Ve
        var st = br(29, Ve, null, pe.mode)
        return ((st.lanes = ke), (st.return = pe), st)
      }
    }
  }
  var di = Kd(!0),
    Fd = Kd(!1),
    jn = !1
  function Ws(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    }
  }
  function Xs(e, t) {
    ;((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }))
  }
  function Nn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null }
  }
  function Un(e, t, r) {
    var n = e.updateQueue
    if (n === null) return null
    if (((n = n.shared), (ct & 2) !== 0)) {
      var l = n.pending
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (n.pending = t),
        (t = Ml(e)),
        jd(e, null, r),
        t
      )
    }
    return (xl(e, n, t, r), Ml(e))
  }
  function Na(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194048) !== 0))
    ) {
      var n = t.lanes
      ;((n &= e.pendingLanes), (r |= n), (t.lanes = r), He(e, r))
    }
  }
  function Zs(e, t) {
    var r = e.updateQueue,
      n = e.alternate
    if (n !== null && ((n = n.updateQueue), r === n)) {
      var l = null,
        f = null
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var C = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null,
          }
          ;(f === null ? (l = f = C) : (f = f.next = C), (r = r.next))
        } while (r !== null)
        f === null ? (l = f = t) : (f = f.next = t)
      } else l = f = t
      ;((r = {
        baseState: n.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: f,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (e.updateQueue = r))
      return
    }
    ;((e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t))
  }
  var Js = !1
  function Ua() {
    if (Js) {
      var e = Yi
      if (e !== null) throw e
    }
  }
  function Da(e, t, r, n) {
    Js = !1
    var l = e.updateQueue
    jn = !1
    var f = l.firstBaseUpdate,
      C = l.lastBaseUpdate,
      L = l.shared.pending
    if (L !== null) {
      l.shared.pending = null
      var Z = L,
        ve = Z.next
      ;((Z.next = null), C === null ? (f = ve) : (C.next = ve), (C = Z))
      var je = e.alternate
      je !== null &&
        ((je = je.updateQueue),
        (L = je.lastBaseUpdate),
        L !== C &&
          (L === null ? (je.firstBaseUpdate = ve) : (L.next = ve),
          (je.lastBaseUpdate = Z)))
    }
    if (f !== null) {
      var Le = l.baseState
      ;((C = 0), (je = ve = Z = null), (L = f))
      do {
        var _e = L.lane & -536870913,
          Ee = _e !== L.lane
        if (Ee ? (at & _e) === _e : (n & _e) === _e) {
          ;(_e !== 0 && _e === Gi && (Js = !0),
            je !== null &&
              (je = je.next =
                {
                  lane: 0,
                  tag: L.tag,
                  payload: L.payload,
                  callback: null,
                  next: null,
                }))
          e: {
            var Qe = e,
              We = L
            _e = t
            var yt = r
            switch (We.tag) {
              case 1:
                if (((Qe = We.payload), typeof Qe == 'function')) {
                  Le = Qe.call(yt, Le, _e)
                  break e
                }
                Le = Qe
                break e
              case 3:
                Qe.flags = (Qe.flags & -65537) | 128
              case 0:
                if (
                  ((Qe = We.payload),
                  (_e = typeof Qe == 'function' ? Qe.call(yt, Le, _e) : Qe),
                  _e == null)
                )
                  break e
                Le = v({}, Le, _e)
                break e
              case 2:
                jn = !0
            }
          }
          ;((_e = L.callback),
            _e !== null &&
              ((e.flags |= 64),
              Ee && (e.flags |= 8192),
              (Ee = l.callbacks),
              Ee === null ? (l.callbacks = [_e]) : Ee.push(_e)))
        } else
          ((Ee = {
            lane: _e,
            tag: L.tag,
            payload: L.payload,
            callback: L.callback,
            next: null,
          }),
            je === null ? ((ve = je = Ee), (Z = Le)) : (je = je.next = Ee),
            (C |= _e))
        if (((L = L.next), L === null)) {
          if (((L = l.shared.pending), L === null)) break
          ;((Ee = L),
            (L = Ee.next),
            (Ee.next = null),
            (l.lastBaseUpdate = Ee),
            (l.shared.pending = null))
        }
      } while (!0)
      ;(je === null && (Z = Le),
        (l.baseState = Z),
        (l.firstBaseUpdate = ve),
        (l.lastBaseUpdate = je),
        f === null && (l.shared.lanes = 0),
        (In |= C),
        (e.lanes = C),
        (e.memoizedState = Le))
    }
  }
  function Wd(e, t) {
    if (typeof e != 'function') throw Error(c(191, e))
    e.call(t)
  }
  function Xd(e, t) {
    var r = e.callbacks
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++) Wd(r[e], t)
  }
  var Ki = B(null),
    Il = B(0)
  function Zd(e, t) {
    ;((e = hn), Q(Il, e), Q(Ki, t), (hn = e | t.baseLanes))
  }
  function $s() {
    ;(Q(Il, hn), Q(Ki, Ki.current))
  }
  function eu() {
    ;((hn = Il.current), D(Ki), D(Il))
  }
  var vr = B(null),
    Nr = null
  function Dn(e) {
    var t = e.alternate
    ;(Q(Rt, Rt.current & 1),
      Q(vr, e),
      Nr === null &&
        (t === null || Ki.current !== null || t.memoizedState !== null) &&
        (Nr = e))
  }
  function tu(e) {
    ;(Q(Rt, Rt.current), Q(vr, e), Nr === null && (Nr = e))
  }
  function Jd(e) {
    e.tag === 22 ? (Q(Rt, Rt.current), Q(vr, e), Nr === null && (Nr = e)) : Bn()
  }
  function Bn() {
    ;(Q(Rt, Rt.current), Q(vr, vr.current))
  }
  function _r(e) {
    ;(D(vr), Nr === e && (Nr = null), D(Rt))
  }
  var Rt = B(0)
  function zl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState
        if (r !== null && ((r = r.dehydrated), r === null || oc(r) || sc(r)))
          return t
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === 'forwards' ||
          t.memoizedProps.revealOrder === 'backwards' ||
          t.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          t.memoizedProps.revealOrder === 'together')
      ) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        ;((t.child.return = t), (t = t.child))
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;((t.sibling.return = t.return), (t = t.sibling))
    }
    return null
  }
  var nn = 0,
    tt = null,
    dt = null,
    Nt = null,
    ql = !1,
    Fi = !1,
    pi = !1,
    Hl = 0,
    Ba = 0,
    Wi = null,
    I0 = 0
  function Ot() {
    throw Error(c(321))
  }
  function ru(e, t) {
    if (t === null) return !1
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!mr(e[r], t[r])) return !1
    return !0
  }
  function nu(e, t, r, n, l, f) {
    return (
      (nn = f),
      (tt = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (K.H = e === null || e.memoizedState === null ? Bp : bu),
      (pi = !1),
      (f = r(n, l)),
      (pi = !1),
      Fi && (f = ep(t, r, n, l)),
      $d(e),
      f
    )
  }
  function $d(e) {
    K.H = Ia
    var t = dt !== null && dt.next !== null
    if (((nn = 0), (Nt = dt = tt = null), (ql = !1), (Ba = 0), (Wi = null), t))
      throw Error(c(300))
    e === null || Ut || ((e = e.dependencies), e !== null && jl(e) && (Ut = !0))
  }
  function ep(e, t, r, n) {
    tt = e
    var l = 0
    do {
      if ((Fi && (Wi = null), (Ba = 0), (Fi = !1), 25 <= l)) throw Error(c(301))
      if (((l += 1), (Nt = dt = null), e.updateQueue != null)) {
        var f = e.updateQueue
        ;((f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0))
      }
      ;((K.H = kp), (f = t(r, n)))
    } while (Fi)
    return f
  }
  function z0() {
    var e = K.H,
      t = e.useState()[0]
    return (
      (t = typeof t.then == 'function' ? ka(t) : t),
      (e = e.useState()[0]),
      (dt !== null ? dt.memoizedState : null) !== e && (tt.flags |= 1024),
      t
    )
  }
  function iu() {
    var e = Hl !== 0
    return ((Hl = 0), e)
  }
  function au(e, t, r) {
    ;((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r))
  }
  function lu(e) {
    if (ql) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue
        ;(t !== null && (t.pending = null), (e = e.next))
      }
      ql = !1
    }
    ;((nn = 0), (Nt = dt = tt = null), (Fi = !1), (Ba = Hl = 0), (Wi = null))
  }
  function tr() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return (Nt === null ? (tt.memoizedState = Nt = e) : (Nt = Nt.next = e), Nt)
  }
  function Ct() {
    if (dt === null) {
      var e = tt.alternate
      e = e !== null ? e.memoizedState : null
    } else e = dt.next
    var t = Nt === null ? tt.memoizedState : Nt.next
    if (t !== null) ((Nt = t), (dt = e))
    else {
      if (e === null)
        throw tt.alternate === null ? Error(c(467)) : Error(c(310))
      ;((dt = e),
        (e = {
          memoizedState: dt.memoizedState,
          baseState: dt.baseState,
          baseQueue: dt.baseQueue,
          queue: dt.queue,
          next: null,
        }),
        Nt === null ? (tt.memoizedState = Nt = e) : (Nt = Nt.next = e))
    }
    return Nt
  }
  function Pl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null }
  }
  function ka(e) {
    var t = Ba
    return (
      (Ba += 1),
      Wi === null && (Wi = []),
      (e = Yd(Wi, e, t)),
      (t = tt),
      (Nt === null ? t.memoizedState : Nt.next) === null &&
        ((t = t.alternate),
        (K.H = t === null || t.memoizedState === null ? Bp : bu)),
      e
    )
  }
  function Gl(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ka(e)
      if (e.$$typeof === O) return Yt(e)
    }
    throw Error(c(438, String(e)))
  }
  function ou(e) {
    var t = null,
      r = tt.updateQueue
    if ((r !== null && (t = r.memoCache), t == null)) {
      var n = tt.alternate
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (l) {
                return l.slice()
              }),
              index: 0,
            })))
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      r === null && ((r = Pl()), (tt.updateQueue = r)),
      (r.memoCache = t),
      (r = t.data[t.index]),
      r === void 0)
    )
      for (r = t.data[t.index] = Array(e), n = 0; n < e; n++) r[n] = H
    return (t.index++, r)
  }
  function an(e, t) {
    return typeof t == 'function' ? t(e) : t
  }
  function Yl(e) {
    var t = Ct()
    return su(t, dt, e)
  }
  function su(e, t, r) {
    var n = e.queue
    if (n === null) throw Error(c(311))
    n.lastRenderedReducer = r
    var l = e.baseQueue,
      f = n.pending
    if (f !== null) {
      if (l !== null) {
        var C = l.next
        ;((l.next = f.next), (f.next = C))
      }
      ;((t.baseQueue = l = f), (n.pending = null))
    }
    if (((f = e.baseState), l === null)) e.memoizedState = f
    else {
      t = l.next
      var L = (C = null),
        Z = null,
        ve = t,
        je = !1
      do {
        var Le = ve.lane & -536870913
        if (Le !== ve.lane ? (at & Le) === Le : (nn & Le) === Le) {
          var _e = ve.revertLane
          if (_e === 0)
            (Z !== null &&
              (Z = Z.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: ve.action,
                  hasEagerState: ve.hasEagerState,
                  eagerState: ve.eagerState,
                  next: null,
                }),
              Le === Gi && (je = !0))
          else if ((nn & _e) === _e) {
            ;((ve = ve.next), _e === Gi && (je = !0))
            continue
          } else
            ((Le = {
              lane: 0,
              revertLane: ve.revertLane,
              gesture: null,
              action: ve.action,
              hasEagerState: ve.hasEagerState,
              eagerState: ve.eagerState,
              next: null,
            }),
              Z === null ? ((L = Z = Le), (C = f)) : (Z = Z.next = Le),
              (tt.lanes |= _e),
              (In |= _e))
          ;((Le = ve.action),
            pi && r(f, Le),
            (f = ve.hasEagerState ? ve.eagerState : r(f, Le)))
        } else
          ((_e = {
            lane: Le,
            revertLane: ve.revertLane,
            gesture: ve.gesture,
            action: ve.action,
            hasEagerState: ve.hasEagerState,
            eagerState: ve.eagerState,
            next: null,
          }),
            Z === null ? ((L = Z = _e), (C = f)) : (Z = Z.next = _e),
            (tt.lanes |= Le),
            (In |= Le))
        ve = ve.next
      } while (ve !== null && ve !== t)
      if (
        (Z === null ? (C = f) : (Z.next = L),
        !mr(f, e.memoizedState) && ((Ut = !0), je && ((r = Yi), r !== null)))
      )
        throw r
      ;((e.memoizedState = f),
        (e.baseState = C),
        (e.baseQueue = Z),
        (n.lastRenderedState = f))
    }
    return (l === null && (n.lanes = 0), [e.memoizedState, n.dispatch])
  }
  function uu(e) {
    var t = Ct(),
      r = t.queue
    if (r === null) throw Error(c(311))
    r.lastRenderedReducer = e
    var n = r.dispatch,
      l = r.pending,
      f = t.memoizedState
    if (l !== null) {
      r.pending = null
      var C = (l = l.next)
      do ((f = e(f, C.action)), (C = C.next))
      while (C !== l)
      ;(mr(f, t.memoizedState) || (Ut = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (r.lastRenderedState = f))
    }
    return [f, n]
  }
  function tp(e, t, r) {
    var n = tt,
      l = Ct(),
      f = ot
    if (f) {
      if (r === void 0) throw Error(c(407))
      r = r()
    } else r = t()
    var C = !mr((dt || l).memoizedState, r)
    if (
      (C && ((l.memoizedState = r), (Ut = !0)),
      (l = l.queue),
      hu(ip.bind(null, n, l, e), [e]),
      l.getSnapshot !== t || C || (Nt !== null && Nt.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Xi(9, { destroy: void 0 }, np.bind(null, n, l, r, t), null),
        mt === null)
      )
        throw Error(c(349))
      f || (nn & 127) !== 0 || rp(n, t, r)
    }
    return r
  }
  function rp(e, t, r) {
    ;((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = tt.updateQueue),
      t === null
        ? ((t = Pl()), (tt.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)))
  }
  function np(e, t, r, n) {
    ;((t.value = r), (t.getSnapshot = n), ap(t) && lp(e))
  }
  function ip(e, t, r) {
    return r(function () {
      ap(t) && lp(e)
    })
  }
  function ap(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var r = t()
      return !mr(e, r)
    } catch {
      return !0
    }
  }
  function lp(e) {
    var t = ai(e, 2)
    t !== null && dr(t, e, 2)
  }
  function cu(e) {
    var t = tr()
    if (typeof e == 'function') {
      var r = e
      if (((e = r()), pi)) {
        Ye(!0)
        try {
          r()
        } finally {
          Ye(!1)
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: an,
        lastRenderedState: e,
      }),
      t
    )
  }
  function op(e, t, r, n) {
    return ((e.baseState = r), su(e, dt, typeof n == 'function' ? n : an))
  }
  function q0(e, t, r, n, l) {
    if (Kl(e)) throw Error(c(485))
    if (((e = t.action), e !== null)) {
      var f = {
        payload: l,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (C) {
          f.listeners.push(C)
        },
      }
      ;(K.T !== null ? r(!0) : (f.isTransition = !1),
        n(f),
        (r = t.pending),
        r === null
          ? ((f.next = t.pending = f), sp(t, f))
          : ((f.next = r.next), (t.pending = r.next = f)))
    }
  }
  function sp(e, t) {
    var r = t.action,
      n = t.payload,
      l = e.state
    if (t.isTransition) {
      var f = K.T,
        C = {}
      K.T = C
      try {
        var L = r(l, n),
          Z = K.S
        ;(Z !== null && Z(C, L), up(e, t, L))
      } catch (ve) {
        fu(e, t, ve)
      } finally {
        ;(f !== null && C.types !== null && (f.types = C.types), (K.T = f))
      }
    } else
      try {
        ;((f = r(l, n)), up(e, t, f))
      } catch (ve) {
        fu(e, t, ve)
      }
  }
  function up(e, t, r) {
    r !== null && typeof r == 'object' && typeof r.then == 'function'
      ? r.then(
          function (n) {
            cp(e, t, n)
          },
          function (n) {
            return fu(e, t, n)
          }
        )
      : cp(e, t, r)
  }
  function cp(e, t, r) {
    ;((t.status = 'fulfilled'),
      (t.value = r),
      fp(t),
      (e.state = r),
      (t = e.pending),
      t !== null &&
        ((r = t.next),
        r === t ? (e.pending = null) : ((r = r.next), (t.next = r), sp(e, r))))
  }
  function fu(e, t, r) {
    var n = e.pending
    if (((e.pending = null), n !== null)) {
      n = n.next
      do ((t.status = 'rejected'), (t.reason = r), fp(t), (t = t.next))
      while (t !== n)
    }
    e.action = null
  }
  function fp(e) {
    e = e.listeners
    for (var t = 0; t < e.length; t++) (0, e[t])()
  }
  function hp(e, t) {
    return t
  }
  function dp(e, t) {
    if (ot) {
      var r = mt.formState
      if (r !== null) {
        e: {
          var n = tt
          if (ot) {
            if (vt) {
              t: {
                for (var l = vt, f = jr; l.nodeType !== 8; ) {
                  if (!f) {
                    l = null
                    break t
                  }
                  if (((l = Ur(l.nextSibling)), l === null)) {
                    l = null
                    break t
                  }
                }
                ;((f = l.data), (l = f === 'F!' || f === 'F' ? l : null))
              }
              if (l) {
                ;((vt = Ur(l.nextSibling)), (n = l.data === 'F!'))
                break e
              }
            }
            Rn(n)
          }
          n = !1
        }
        n && (t = r[0])
      }
    }
    return (
      (r = tr()),
      (r.memoizedState = r.baseState = t),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hp,
        lastRenderedState: t,
      }),
      (r.queue = n),
      (r = Np.bind(null, tt, n)),
      (n.dispatch = r),
      (n = cu(!1)),
      (f = mu.bind(null, tt, !1, n.queue)),
      (n = tr()),
      (l = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = l),
      (r = q0.bind(null, tt, l, f, r)),
      (l.dispatch = r),
      (n.memoizedState = e),
      [t, r, !1]
    )
  }
  function pp(e) {
    var t = Ct()
    return yp(t, dt, e)
  }
  function yp(e, t, r) {
    if (
      ((t = su(e, t, hp)[0]),
      (e = Yl(an)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var n = ka(t)
      } catch (C) {
        throw C === Qi ? Dl : C
      }
    else n = t
    t = Ct()
    var l = t.queue,
      f = l.dispatch
    return (
      r !== t.memoizedState &&
        ((tt.flags |= 2048),
        Xi(9, { destroy: void 0 }, H0.bind(null, l, r), null)),
      [n, f, e]
    )
  }
  function H0(e, t) {
    e.action = t
  }
  function gp(e) {
    var t = Ct(),
      r = dt
    if (r !== null) return yp(t, r, e)
    ;(Ct(), (t = t.memoizedState), (r = Ct()))
    var n = r.queue.dispatch
    return ((r.memoizedState = e), [t, n, !1])
  }
  function Xi(e, t, r, n) {
    return (
      (e = { tag: e, create: r, deps: n, inst: t, next: null }),
      (t = tt.updateQueue),
      t === null && ((t = Pl()), (tt.updateQueue = t)),
      (r = t.lastEffect),
      r === null
        ? (t.lastEffect = e.next = e)
        : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e)),
      e
    )
  }
  function mp() {
    return Ct().memoizedState
  }
  function Ql(e, t, r, n) {
    var l = tr()
    ;((tt.flags |= e),
      (l.memoizedState = Xi(
        1 | t,
        { destroy: void 0 },
        r,
        n === void 0 ? null : n
      )))
  }
  function Vl(e, t, r, n) {
    var l = Ct()
    n = n === void 0 ? null : n
    var f = l.memoizedState.inst
    dt !== null && n !== null && ru(n, dt.memoizedState.deps)
      ? (l.memoizedState = Xi(t, f, r, n))
      : ((tt.flags |= e), (l.memoizedState = Xi(1 | t, f, r, n)))
  }
  function bp(e, t) {
    Ql(8390656, 8, e, t)
  }
  function hu(e, t) {
    Vl(2048, 8, e, t)
  }
  function P0(e) {
    tt.flags |= 4
    var t = tt.updateQueue
    if (t === null) ((t = Pl()), (tt.updateQueue = t), (t.events = [e]))
    else {
      var r = t.events
      r === null ? (t.events = [e]) : r.push(e)
    }
  }
  function vp(e) {
    var t = Ct().memoizedState
    return (
      P0({ ref: t, nextImpl: e }),
      function () {
        if ((ct & 2) !== 0) throw Error(c(440))
        return t.impl.apply(void 0, arguments)
      }
    )
  }
  function _p(e, t) {
    return Vl(4, 2, e, t)
  }
  function Sp(e, t) {
    return Vl(4, 4, e, t)
  }
  function wp(e, t) {
    if (typeof t == 'function') {
      e = e()
      var r = t(e)
      return function () {
        typeof r == 'function' ? r() : t(null)
      }
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function Ep(e, t, r) {
    ;((r = r != null ? r.concat([e]) : null), Vl(4, 4, wp.bind(null, t, e), r))
  }
  function du() {}
  function Ap(e, t) {
    var r = Ct()
    t = t === void 0 ? null : t
    var n = r.memoizedState
    return t !== null && ru(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e)
  }
  function Tp(e, t) {
    var r = Ct()
    t = t === void 0 ? null : t
    var n = r.memoizedState
    if (t !== null && ru(t, n[1])) return n[0]
    if (((n = e()), pi)) {
      Ye(!0)
      try {
        e()
      } finally {
        Ye(!1)
      }
    }
    return ((r.memoizedState = [n, t]), n)
  }
  function pu(e, t, r) {
    return r === void 0 || ((nn & 1073741824) !== 0 && (at & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = r), (e = Oy()), (tt.lanes |= e), (In |= e), r)
  }
  function Op(e, t, r, n) {
    return mr(r, t)
      ? r
      : Ki.current !== null
        ? ((e = pu(e, r, n)), mr(e, t) || (Ut = !0), e)
        : (nn & 42) === 0 || ((nn & 1073741824) !== 0 && (at & 261930) === 0)
          ? ((Ut = !0), (e.memoizedState = r))
          : ((e = Oy()), (tt.lanes |= e), (In |= e), t)
  }
  function xp(e, t, r, n, l) {
    var f = P.p
    P.p = f !== 0 && 8 > f ? f : 8
    var C = K.T,
      L = {}
    ;((K.T = L), mu(e, !1, t, r))
    try {
      var Z = l(),
        ve = K.S
      if (
        (ve !== null && ve(L, Z),
        Z !== null && typeof Z == 'object' && typeof Z.then == 'function')
      ) {
        var je = L0(Z, n)
        La(e, t, je, Er(e))
      } else La(e, t, n, Er(e))
    } catch (Le) {
      La(e, t, { then: function () {}, status: 'rejected', reason: Le }, Er())
    } finally {
      ;((P.p = f),
        C !== null && L.types !== null && (C.types = L.types),
        (K.T = C))
    }
  }
  function G0() {}
  function yu(e, t, r, n) {
    if (e.tag !== 5) throw Error(c(476))
    var l = Mp(e).queue
    xp(
      e,
      l,
      t,
      F,
      r === null
        ? G0
        : function () {
            return (Rp(e), r(n))
          }
    )
  }
  function Mp(e) {
    var t = e.memoizedState
    if (t !== null) return t
    t = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: an,
        lastRenderedState: F,
      },
      next: null,
    }
    var r = {}
    return (
      (t.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: an,
          lastRenderedState: r,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    )
  }
  function Rp(e) {
    var t = Mp(e)
    ;(t.next === null && (t = e.alternate.memoizedState),
      La(e, t.next.queue, {}, Er()))
  }
  function gu() {
    return Yt(el)
  }
  function Cp() {
    return Ct().memoizedState
  }
  function jp() {
    return Ct().memoizedState
  }
  function Y0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = Er()
          e = Nn(r)
          var n = Un(t, e, r)
          ;(n !== null && (dr(n, t, r), Na(n, t, r)),
            (t = { cache: Qs() }),
            (e.payload = t))
          return
      }
      t = t.return
    }
  }
  function Q0(e, t, r) {
    var n = Er()
    ;((r = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Kl(e)
        ? Up(t, r)
        : ((r = Ds(e, t, r, n)), r !== null && (dr(r, e, n), Dp(r, t, n))))
  }
  function Np(e, t, r) {
    var n = Er()
    La(e, t, r, n)
  }
  function La(e, t, r, n) {
    var l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }
    if (Kl(e)) Up(t, l)
    else {
      var f = e.alternate
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var C = t.lastRenderedState,
            L = f(C, r)
          if (((l.hasEagerState = !0), (l.eagerState = L), mr(L, C)))
            return (xl(e, t, l, 0), mt === null && Ol(), !1)
        } catch {}
      if (((r = Ds(e, t, l, n)), r !== null))
        return (dr(r, e, n), Dp(r, t, n), !0)
    }
    return !1
  }
  function mu(e, t, r, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: Wu(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Kl(e))
    ) {
      if (t) throw Error(c(479))
    } else ((t = Ds(e, r, n, 2)), t !== null && dr(t, e, 2))
  }
  function Kl(e) {
    var t = e.alternate
    return e === tt || (t !== null && t === tt)
  }
  function Up(e, t) {
    Fi = ql = !0
    var r = e.pending
    ;(r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t))
  }
  function Dp(e, t, r) {
    if ((r & 4194048) !== 0) {
      var n = t.lanes
      ;((n &= e.pendingLanes), (r |= n), (t.lanes = r), He(e, r))
    }
  }
  var Ia = {
    readContext: Yt,
    use: Gl,
    useCallback: Ot,
    useContext: Ot,
    useEffect: Ot,
    useImperativeHandle: Ot,
    useLayoutEffect: Ot,
    useInsertionEffect: Ot,
    useMemo: Ot,
    useReducer: Ot,
    useRef: Ot,
    useState: Ot,
    useDebugValue: Ot,
    useDeferredValue: Ot,
    useTransition: Ot,
    useSyncExternalStore: Ot,
    useId: Ot,
    useHostTransitionStatus: Ot,
    useFormState: Ot,
    useActionState: Ot,
    useOptimistic: Ot,
    useMemoCache: Ot,
    useCacheRefresh: Ot,
  }
  Ia.useEffectEvent = Ot
  var Bp = {
      readContext: Yt,
      use: Gl,
      useCallback: function (e, t) {
        return ((tr().memoizedState = [e, t === void 0 ? null : t]), e)
      },
      useContext: Yt,
      useEffect: bp,
      useImperativeHandle: function (e, t, r) {
        ;((r = r != null ? r.concat([e]) : null),
          Ql(4194308, 4, wp.bind(null, t, e), r))
      },
      useLayoutEffect: function (e, t) {
        return Ql(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        Ql(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var r = tr()
        t = t === void 0 ? null : t
        var n = e()
        if (pi) {
          Ye(!0)
          try {
            e()
          } finally {
            Ye(!1)
          }
        }
        return ((r.memoizedState = [n, t]), n)
      },
      useReducer: function (e, t, r) {
        var n = tr()
        if (r !== void 0) {
          var l = r(t)
          if (pi) {
            Ye(!0)
            try {
              r(t)
            } finally {
              Ye(!1)
            }
          }
        } else l = t
        return (
          (n.memoizedState = n.baseState = l),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: l,
          }),
          (n.queue = e),
          (e = e.dispatch = Q0.bind(null, tt, e)),
          [n.memoizedState, e]
        )
      },
      useRef: function (e) {
        var t = tr()
        return ((e = { current: e }), (t.memoizedState = e))
      },
      useState: function (e) {
        e = cu(e)
        var t = e.queue,
          r = Np.bind(null, tt, t)
        return ((t.dispatch = r), [e.memoizedState, r])
      },
      useDebugValue: du,
      useDeferredValue: function (e, t) {
        var r = tr()
        return pu(r, e, t)
      },
      useTransition: function () {
        var e = cu(!1)
        return (
          (e = xp.bind(null, tt, e.queue, !0, !1)),
          (tr().memoizedState = e),
          [!1, e]
        )
      },
      useSyncExternalStore: function (e, t, r) {
        var n = tt,
          l = tr()
        if (ot) {
          if (r === void 0) throw Error(c(407))
          r = r()
        } else {
          if (((r = t()), mt === null)) throw Error(c(349))
          ;(at & 127) !== 0 || rp(n, t, r)
        }
        l.memoizedState = r
        var f = { value: r, getSnapshot: t }
        return (
          (l.queue = f),
          bp(ip.bind(null, n, f, e), [e]),
          (n.flags |= 2048),
          Xi(9, { destroy: void 0 }, np.bind(null, n, f, r, t), null),
          r
        )
      },
      useId: function () {
        var e = tr(),
          t = mt.identifierPrefix
        if (ot) {
          var r = Hr,
            n = qr
          ;((r = (n & ~(1 << (32 - Pe(n) - 1))).toString(32) + r),
            (t = '_' + t + 'R_' + r),
            (r = Hl++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += '_'))
        } else ((r = I0++), (t = '_' + t + 'r_' + r.toString(32) + '_'))
        return (e.memoizedState = t)
      },
      useHostTransitionStatus: gu,
      useFormState: dp,
      useActionState: dp,
      useOptimistic: function (e) {
        var t = tr()
        t.memoizedState = t.baseState = e
        var r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        }
        return (
          (t.queue = r),
          (t = mu.bind(null, tt, !0, r)),
          (r.dispatch = t),
          [e, t]
        )
      },
      useMemoCache: ou,
      useCacheRefresh: function () {
        return (tr().memoizedState = Y0.bind(null, tt))
      },
      useEffectEvent: function (e) {
        var t = tr(),
          r = { impl: e }
        return (
          (t.memoizedState = r),
          function () {
            if ((ct & 2) !== 0) throw Error(c(440))
            return r.impl.apply(void 0, arguments)
          }
        )
      },
    },
    bu = {
      readContext: Yt,
      use: Gl,
      useCallback: Ap,
      useContext: Yt,
      useEffect: hu,
      useImperativeHandle: Ep,
      useInsertionEffect: _p,
      useLayoutEffect: Sp,
      useMemo: Tp,
      useReducer: Yl,
      useRef: mp,
      useState: function () {
        return Yl(an)
      },
      useDebugValue: du,
      useDeferredValue: function (e, t) {
        var r = Ct()
        return Op(r, dt.memoizedState, e, t)
      },
      useTransition: function () {
        var e = Yl(an)[0],
          t = Ct().memoizedState
        return [typeof e == 'boolean' ? e : ka(e), t]
      },
      useSyncExternalStore: tp,
      useId: Cp,
      useHostTransitionStatus: gu,
      useFormState: pp,
      useActionState: pp,
      useOptimistic: function (e, t) {
        var r = Ct()
        return op(r, dt, e, t)
      },
      useMemoCache: ou,
      useCacheRefresh: jp,
    }
  bu.useEffectEvent = vp
  var kp = {
    readContext: Yt,
    use: Gl,
    useCallback: Ap,
    useContext: Yt,
    useEffect: hu,
    useImperativeHandle: Ep,
    useInsertionEffect: _p,
    useLayoutEffect: Sp,
    useMemo: Tp,
    useReducer: uu,
    useRef: mp,
    useState: function () {
      return uu(an)
    },
    useDebugValue: du,
    useDeferredValue: function (e, t) {
      var r = Ct()
      return dt === null ? pu(r, e, t) : Op(r, dt.memoizedState, e, t)
    },
    useTransition: function () {
      var e = uu(an)[0],
        t = Ct().memoizedState
      return [typeof e == 'boolean' ? e : ka(e), t]
    },
    useSyncExternalStore: tp,
    useId: Cp,
    useHostTransitionStatus: gu,
    useFormState: gp,
    useActionState: gp,
    useOptimistic: function (e, t) {
      var r = Ct()
      return dt !== null
        ? op(r, dt, e, t)
        : ((r.baseState = e), [e, r.queue.dispatch])
    },
    useMemoCache: ou,
    useCacheRefresh: jp,
  }
  kp.useEffectEvent = vp
  function vu(e, t, r, n) {
    ;((t = e.memoizedState),
      (r = r(n, t)),
      (r = r == null ? t : v({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r))
  }
  var _u = {
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals
      var n = Er(),
        l = Nn(n)
      ;((l.payload = t),
        r != null && (l.callback = r),
        (t = Un(e, l, n)),
        t !== null && (dr(t, e, n), Na(t, e, n)))
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals
      var n = Er(),
        l = Nn(n)
      ;((l.tag = 1),
        (l.payload = t),
        r != null && (l.callback = r),
        (t = Un(e, l, n)),
        t !== null && (dr(t, e, n), Na(t, e, n)))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var r = Er(),
        n = Nn(r)
      ;((n.tag = 2),
        t != null && (n.callback = t),
        (t = Un(e, n, r)),
        t !== null && (dr(t, e, r), Na(t, e, r)))
    },
  }
  function Lp(e, t, r, n, l, f, C) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(n, f, C)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Aa(r, n) || !Aa(l, f)
          : !0
    )
  }
  function Ip(e, t, r, n) {
    ;((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(r, n),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, n),
      t.state !== e && _u.enqueueReplaceState(t, t.state, null))
  }
  function yi(e, t) {
    var r = t
    if ('ref' in t) {
      r = {}
      for (var n in t) n !== 'ref' && (r[n] = t[n])
    }
    if ((e = e.defaultProps)) {
      r === t && (r = v({}, r))
      for (var l in e) r[l] === void 0 && (r[l] = e[l])
    }
    return r
  }
  function zp(e) {
    Tl(e)
  }
  function qp(e) {
    console.error(e)
  }
  function Hp(e) {
    Tl(e)
  }
  function Fl(e, t) {
    try {
      var r = e.onUncaughtError
      r(t.value, { componentStack: t.stack })
    } catch (n) {
      setTimeout(function () {
        throw n
      })
    }
  }
  function Pp(e, t, r) {
    try {
      var n = e.onCaughtError
      n(r.value, {
        componentStack: r.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      })
    } catch (l) {
      setTimeout(function () {
        throw l
      })
    }
  }
  function Su(e, t, r) {
    return (
      (r = Nn(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        Fl(e, t)
      }),
      r
    )
  }
  function Gp(e) {
    return ((e = Nn(e)), (e.tag = 3), e)
  }
  function Yp(e, t, r, n) {
    var l = r.type.getDerivedStateFromError
    if (typeof l == 'function') {
      var f = n.value
      ;((e.payload = function () {
        return l(f)
      }),
        (e.callback = function () {
          Pp(t, r, n)
        }))
    }
    var C = r.stateNode
    C !== null &&
      typeof C.componentDidCatch == 'function' &&
      (e.callback = function () {
        ;(Pp(t, r, n),
          typeof l != 'function' &&
            (zn === null ? (zn = new Set([this])) : zn.add(this)))
        var L = n.stack
        this.componentDidCatch(n.value, { componentStack: L !== null ? L : '' })
      })
  }
  function V0(e, t, r, n, l) {
    if (
      ((r.flags |= 32768),
      n !== null && typeof n == 'object' && typeof n.then == 'function')
    ) {
      if (
        ((t = r.alternate),
        t !== null && Pi(t, r, l, !0),
        (r = vr.current),
        r !== null)
      ) {
        switch (r.tag) {
          case 31:
          case 13:
            return (
              Nr === null ? lo() : r.alternate === null && xt === 0 && (xt = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = l),
              n === Bl
                ? (r.flags |= 16384)
                : ((t = r.updateQueue),
                  t === null ? (r.updateQueue = new Set([n])) : t.add(n),
                  Vu(e, n, l)),
              !1
            )
          case 22:
            return (
              (r.flags |= 65536),
              n === Bl
                ? (r.flags |= 16384)
                : ((t = r.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (r.updateQueue = t))
                    : ((r = t.retryQueue),
                      r === null ? (t.retryQueue = new Set([n])) : r.add(n)),
                  Vu(e, n, l)),
              !1
            )
        }
        throw Error(c(435, r.tag))
      }
      return (Vu(e, n, l), lo(), !1)
    }
    if (ot)
      return (
        (t = vr.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = l),
            n !== qs && ((e = Error(c(422), { cause: n })), xa(Mr(e, r))))
          : (n !== qs && ((t = Error(c(423), { cause: n })), xa(Mr(t, r))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (n = Mr(n, r)),
            (l = Su(e.stateNode, n, l)),
            Zs(e, l),
            xt !== 4 && (xt = 2)),
        !1
      )
    var f = Error(c(520), { cause: n })
    if (
      ((f = Mr(f, r)),
      Va === null ? (Va = [f]) : Va.push(f),
      xt !== 4 && (xt = 2),
      t === null)
    )
      return !0
    ;((n = Mr(n, r)), (r = t))
    do {
      switch (r.tag) {
        case 3:
          return (
            (r.flags |= 65536),
            (e = l & -l),
            (r.lanes |= e),
            (e = Su(r.stateNode, n, e)),
            Zs(r, e),
            !1
          )
        case 1:
          if (
            ((t = r.type),
            (f = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (f !== null &&
                  typeof f.componentDidCatch == 'function' &&
                  (zn === null || !zn.has(f)))))
          )
            return (
              (r.flags |= 65536),
              (l &= -l),
              (r.lanes |= l),
              (l = Gp(l)),
              Yp(l, e, r, n),
              Zs(r, l),
              !1
            )
      }
      r = r.return
    } while (r !== null)
    return !1
  }
  var wu = Error(c(461)),
    Ut = !1
  function Qt(e, t, r, n) {
    t.child = e === null ? Fd(t, null, r, n) : di(t, e.child, r, n)
  }
  function Qp(e, t, r, n, l) {
    r = r.render
    var f = t.ref
    if ('ref' in n) {
      var C = {}
      for (var L in n) L !== 'ref' && (C[L] = n[L])
    } else C = n
    return (
      ui(t),
      (n = nu(e, t, r, C, f, l)),
      (L = iu()),
      e !== null && !Ut
        ? (au(e, t, l), ln(e, t, l))
        : (ot && L && Is(t), (t.flags |= 1), Qt(e, t, n, l), t.child)
    )
  }
  function Vp(e, t, r, n, l) {
    if (e === null) {
      var f = r.type
      return typeof f == 'function' &&
        !Bs(f) &&
        f.defaultProps === void 0 &&
        r.compare === null
        ? ((t.tag = 15), (t.type = f), Kp(e, t, f, n, l))
        : ((e = Rl(r.type, null, n, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e))
    }
    if (((f = e.child), !Cu(e, l))) {
      var C = f.memoizedProps
      if (
        ((r = r.compare), (r = r !== null ? r : Aa), r(C, n) && e.ref === t.ref)
      )
        return ln(e, t, l)
    }
    return (
      (t.flags |= 1),
      (e = $r(f, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    )
  }
  function Kp(e, t, r, n, l) {
    if (e !== null) {
      var f = e.memoizedProps
      if (Aa(f, n) && e.ref === t.ref)
        if (((Ut = !1), (t.pendingProps = n = f), Cu(e, l)))
          (e.flags & 131072) !== 0 && (Ut = !0)
        else return ((t.lanes = e.lanes), ln(e, t, l))
    }
    return Eu(e, t, r, n, l)
  }
  function Fp(e, t, r, n) {
    var l = n.children,
      f = e !== null ? e.memoizedState : null
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.mode === 'hidden')
    ) {
      if ((t.flags & 128) !== 0) {
        if (((f = f !== null ? f.baseLanes | r : r), e !== null)) {
          for (n = t.child = e.child, l = 0; n !== null; )
            ((l = l | n.lanes | n.childLanes), (n = n.sibling))
          n = l & ~f
        } else ((n = 0), (t.child = null))
        return Wp(e, t, f, r, n)
      }
      if ((r & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ul(t, f !== null ? f.cachePool : null),
          f !== null ? Zd(t, f) : $s(),
          Jd(t))
      else
        return (
          (n = t.lanes = 536870912),
          Wp(e, t, f !== null ? f.baseLanes | r : r, r, n)
        )
    } else
      f !== null
        ? (Ul(t, f.cachePool), Zd(t, f), Bn(), (t.memoizedState = null))
        : (e !== null && Ul(t, null), $s(), Bn())
    return (Qt(e, t, l, r), t.child)
  }
  function za(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    )
  }
  function Wp(e, t, r, n, l) {
    var f = Ks()
    return (
      (f = f === null ? null : { parent: jt._currentValue, pool: f }),
      (t.memoizedState = { baseLanes: r, cachePool: f }),
      e !== null && Ul(t, null),
      $s(),
      Jd(t),
      e !== null && Pi(e, t, n, !0),
      (t.childLanes = l),
      null
    )
  }
  function Wl(e, t) {
    return (
      (t = Zl({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    )
  }
  function Xp(e, t, r) {
    return (
      di(t, e.child, null, r),
      (e = Wl(t, t.pendingProps)),
      (e.flags |= 2),
      _r(t),
      (t.memoizedState = null),
      e
    )
  }
  function K0(e, t, r) {
    var n = t.pendingProps,
      l = (t.flags & 128) !== 0
    if (((t.flags &= -129), e === null)) {
      if (ot) {
        if (n.mode === 'hidden')
          return ((e = Wl(t, n)), (t.lanes = 536870912), za(null, e))
        if (
          (tu(t),
          (e = vt)
            ? ((e = sg(e, jr)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: xn !== null ? { id: qr, overflow: Hr } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (r = Ud(e)),
                (r.return = t),
                (t.child = r),
                (Gt = t),
                (vt = null)))
            : (e = null),
          e === null)
        )
          throw Rn(t)
        return ((t.lanes = 536870912), null)
      }
      return Wl(t, n)
    }
    var f = e.memoizedState
    if (f !== null) {
      var C = f.dehydrated
      if ((tu(t), l))
        if (t.flags & 256) ((t.flags &= -257), (t = Xp(e, t, r)))
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null))
        else throw Error(c(558))
      else if (
        (Ut || Pi(e, t, r, !1), (l = (r & e.childLanes) !== 0), Ut || l)
      ) {
        if (
          ((n = mt),
          n !== null && ((C = Ge(n, r)), C !== 0 && C !== f.retryLane))
        )
          throw ((f.retryLane = C), ai(e, C), dr(n, e, C), wu)
        ;(lo(), (t = Xp(e, t, r)))
      } else
        ((e = f.treeContext),
          (vt = Ur(C.nextSibling)),
          (Gt = t),
          (ot = !0),
          (Mn = null),
          (jr = !1),
          e !== null && kd(t, e),
          (t = Wl(t, n)),
          (t.flags |= 4096))
      return t
    }
    return (
      (e = $r(e.child, { mode: n.mode, children: n.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    )
  }
  function Xl(e, t) {
    var r = t.ref
    if (r === null) e !== null && e.ref !== null && (t.flags |= 4194816)
    else {
      if (typeof r != 'function' && typeof r != 'object') throw Error(c(284))
      ;(e === null || e.ref !== r) && (t.flags |= 4194816)
    }
  }
  function Eu(e, t, r, n, l) {
    return (
      ui(t),
      (r = nu(e, t, r, n, void 0, l)),
      (n = iu()),
      e !== null && !Ut
        ? (au(e, t, l), ln(e, t, l))
        : (ot && n && Is(t), (t.flags |= 1), Qt(e, t, r, l), t.child)
    )
  }
  function Zp(e, t, r, n, l, f) {
    return (
      ui(t),
      (t.updateQueue = null),
      (r = ep(t, n, r, l)),
      $d(e),
      (n = iu()),
      e !== null && !Ut
        ? (au(e, t, f), ln(e, t, f))
        : (ot && n && Is(t), (t.flags |= 1), Qt(e, t, r, f), t.child)
    )
  }
  function Jp(e, t, r, n, l) {
    if ((ui(t), t.stateNode === null)) {
      var f = Ii,
        C = r.contextType
      ;(typeof C == 'object' && C !== null && (f = Yt(C)),
        (f = new r(n, f)),
        (t.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = _u),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = n),
        (f.state = t.memoizedState),
        (f.refs = {}),
        Ws(t),
        (C = r.contextType),
        (f.context = typeof C == 'object' && C !== null ? Yt(C) : Ii),
        (f.state = t.memoizedState),
        (C = r.getDerivedStateFromProps),
        typeof C == 'function' && (vu(t, r, C, n), (f.state = t.memoizedState)),
        typeof r.getDerivedStateFromProps == 'function' ||
          typeof f.getSnapshotBeforeUpdate == 'function' ||
          (typeof f.UNSAFE_componentWillMount != 'function' &&
            typeof f.componentWillMount != 'function') ||
          ((C = f.state),
          typeof f.componentWillMount == 'function' && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == 'function' &&
            f.UNSAFE_componentWillMount(),
          C !== f.state && _u.enqueueReplaceState(f, f.state, null),
          Da(t, n, f, l),
          Ua(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
        (n = !0))
    } else if (e === null) {
      f = t.stateNode
      var L = t.memoizedProps,
        Z = yi(r, L)
      f.props = Z
      var ve = f.context,
        je = r.contextType
      ;((C = Ii), typeof je == 'object' && je !== null && (C = Yt(je)))
      var Le = r.getDerivedStateFromProps
      ;((je =
        typeof Le == 'function' ||
        typeof f.getSnapshotBeforeUpdate == 'function'),
        (L = t.pendingProps !== L),
        je ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((L || ve !== C) && Ip(t, f, n, C)),
        (jn = !1))
      var _e = t.memoizedState
      ;((f.state = _e),
        Da(t, n, f, l),
        Ua(),
        (ve = t.memoizedState),
        L || _e !== ve || jn
          ? (typeof Le == 'function' &&
              (vu(t, r, Le, n), (ve = t.memoizedState)),
            (Z = jn || Lp(t, r, Z, n, _e, ve, C))
              ? (je ||
                  (typeof f.UNSAFE_componentWillMount != 'function' &&
                    typeof f.componentWillMount != 'function') ||
                  (typeof f.componentWillMount == 'function' &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == 'function' &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = ve)),
            (f.props = n),
            (f.state = ve),
            (f.context = C),
            (n = Z))
          : (typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
            (n = !1)))
    } else {
      ;((f = t.stateNode),
        Xs(e, t),
        (C = t.memoizedProps),
        (je = yi(r, C)),
        (f.props = je),
        (Le = t.pendingProps),
        (_e = f.context),
        (ve = r.contextType),
        (Z = Ii),
        typeof ve == 'object' && ve !== null && (Z = Yt(ve)),
        (L = r.getDerivedStateFromProps),
        (ve =
          typeof L == 'function' ||
          typeof f.getSnapshotBeforeUpdate == 'function') ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((C !== Le || _e !== Z) && Ip(t, f, n, Z)),
        (jn = !1),
        (_e = t.memoizedState),
        (f.state = _e),
        Da(t, n, f, l),
        Ua())
      var Ee = t.memoizedState
      C !== Le ||
      _e !== Ee ||
      jn ||
      (e !== null && e.dependencies !== null && jl(e.dependencies))
        ? (typeof L == 'function' && (vu(t, r, L, n), (Ee = t.memoizedState)),
          (je =
            jn ||
            Lp(t, r, je, n, _e, Ee, Z) ||
            (e !== null && e.dependencies !== null && jl(e.dependencies)))
            ? (ve ||
                (typeof f.UNSAFE_componentWillUpdate != 'function' &&
                  typeof f.componentWillUpdate != 'function') ||
                (typeof f.componentWillUpdate == 'function' &&
                  f.componentWillUpdate(n, Ee, Z),
                typeof f.UNSAFE_componentWillUpdate == 'function' &&
                  f.UNSAFE_componentWillUpdate(n, Ee, Z)),
              typeof f.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != 'function' ||
                (C === e.memoizedProps && _e === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != 'function' ||
                (C === e.memoizedProps && _e === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = Ee)),
          (f.props = n),
          (f.state = Ee),
          (f.context = Z),
          (n = je))
        : (typeof f.componentDidUpdate != 'function' ||
            (C === e.memoizedProps && _e === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != 'function' ||
            (C === e.memoizedProps && _e === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1))
    }
    return (
      (f = n),
      Xl(e, t),
      (n = (t.flags & 128) !== 0),
      f || n
        ? ((f = t.stateNode),
          (r =
            n && typeof r.getDerivedStateFromError != 'function'
              ? null
              : f.render()),
          (t.flags |= 1),
          e !== null && n
            ? ((t.child = di(t, e.child, null, l)),
              (t.child = di(t, null, r, l)))
            : Qt(e, t, r, l),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = ln(e, t, l)),
      e
    )
  }
  function $p(e, t, r, n) {
    return (oi(), (t.flags |= 256), Qt(e, t, r, n), t.child)
  }
  var Au = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  }
  function Tu(e) {
    return { baseLanes: e, cachePool: Pd() }
  }
  function Ou(e, t, r) {
    return ((e = e !== null ? e.childLanes & ~r : 0), t && (e |= wr), e)
  }
  function ey(e, t, r) {
    var n = t.pendingProps,
      l = !1,
      f = (t.flags & 128) !== 0,
      C
    if (
      ((C = f) ||
        (C =
          e !== null && e.memoizedState === null ? !1 : (Rt.current & 2) !== 0),
      C && ((l = !0), (t.flags &= -129)),
      (C = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ot) {
        if (
          (l ? Dn(t) : Bn(),
          (e = vt)
            ? ((e = sg(e, jr)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: xn !== null ? { id: qr, overflow: Hr } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (r = Ud(e)),
                (r.return = t),
                (t.child = r),
                (Gt = t),
                (vt = null)))
            : (e = null),
          e === null)
        )
          throw Rn(t)
        return (sc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null)
      }
      var L = n.children
      return (
        (n = n.fallback),
        l
          ? (Bn(),
            (l = t.mode),
            (L = Zl({ mode: 'hidden', children: L }, l)),
            (n = li(n, l, r, null)),
            (L.return = t),
            (n.return = t),
            (L.sibling = n),
            (t.child = L),
            (n = t.child),
            (n.memoizedState = Tu(r)),
            (n.childLanes = Ou(e, C, r)),
            (t.memoizedState = Au),
            za(null, n))
          : (Dn(t), xu(t, L))
      )
    }
    var Z = e.memoizedState
    if (Z !== null && ((L = Z.dehydrated), L !== null)) {
      if (f)
        t.flags & 256
          ? (Dn(t), (t.flags &= -257), (t = Mu(e, t, r)))
          : t.memoizedState !== null
            ? (Bn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Bn(),
              (L = n.fallback),
              (l = t.mode),
              (n = Zl({ mode: 'visible', children: n.children }, l)),
              (L = li(L, l, r, null)),
              (L.flags |= 2),
              (n.return = t),
              (L.return = t),
              (n.sibling = L),
              (t.child = n),
              di(t, e.child, null, r),
              (n = t.child),
              (n.memoizedState = Tu(r)),
              (n.childLanes = Ou(e, C, r)),
              (t.memoizedState = Au),
              (t = za(null, n)))
      else if ((Dn(t), sc(L))) {
        if (((C = L.nextSibling && L.nextSibling.dataset), C)) var ve = C.dgst
        ;((C = ve),
          (n = Error(c(419))),
          (n.stack = ''),
          (n.digest = C),
          xa({ value: n, source: null, stack: null }),
          (t = Mu(e, t, r)))
      } else if (
        (Ut || Pi(e, t, r, !1), (C = (r & e.childLanes) !== 0), Ut || C)
      ) {
        if (
          ((C = mt),
          C !== null && ((n = Ge(C, r)), n !== 0 && n !== Z.retryLane))
        )
          throw ((Z.retryLane = n), ai(e, n), dr(C, e, n), wu)
        ;(oc(L) || lo(), (t = Mu(e, t, r)))
      } else
        oc(L)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = Z.treeContext),
            (vt = Ur(L.nextSibling)),
            (Gt = t),
            (ot = !0),
            (Mn = null),
            (jr = !1),
            e !== null && kd(t, e),
            (t = xu(t, n.children)),
            (t.flags |= 4096))
      return t
    }
    return l
      ? (Bn(),
        (L = n.fallback),
        (l = t.mode),
        (Z = e.child),
        (ve = Z.sibling),
        (n = $r(Z, { mode: 'hidden', children: n.children })),
        (n.subtreeFlags = Z.subtreeFlags & 65011712),
        ve !== null
          ? (L = $r(ve, L))
          : ((L = li(L, l, r, null)), (L.flags |= 2)),
        (L.return = t),
        (n.return = t),
        (n.sibling = L),
        (t.child = n),
        za(null, n),
        (n = t.child),
        (L = e.child.memoizedState),
        L === null
          ? (L = Tu(r))
          : ((l = L.cachePool),
            l !== null
              ? ((Z = jt._currentValue),
                (l = l.parent !== Z ? { parent: Z, pool: Z } : l))
              : (l = Pd()),
            (L = { baseLanes: L.baseLanes | r, cachePool: l })),
        (n.memoizedState = L),
        (n.childLanes = Ou(e, C, r)),
        (t.memoizedState = Au),
        za(e.child, n))
      : (Dn(t),
        (r = e.child),
        (e = r.sibling),
        (r = $r(r, { mode: 'visible', children: n.children })),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
          ((C = t.deletions),
          C === null ? ((t.deletions = [e]), (t.flags |= 16)) : C.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r)
  }
  function xu(e, t) {
    return (
      (t = Zl({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    )
  }
  function Zl(e, t) {
    return ((e = br(22, e, null, t)), (e.lanes = 0), e)
  }
  function Mu(e, t, r) {
    return (
      di(t, e.child, null, r),
      (e = xu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    )
  }
  function ty(e, t, r) {
    e.lanes |= t
    var n = e.alternate
    ;(n !== null && (n.lanes |= t), Gs(e.return, t, r))
  }
  function Ru(e, t, r, n, l, f) {
    var C = e.memoizedState
    C === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: r,
          tailMode: l,
          treeForkCount: f,
        })
      : ((C.isBackwards = t),
        (C.rendering = null),
        (C.renderingStartTime = 0),
        (C.last = n),
        (C.tail = r),
        (C.tailMode = l),
        (C.treeForkCount = f))
  }
  function ry(e, t, r) {
    var n = t.pendingProps,
      l = n.revealOrder,
      f = n.tail
    n = n.children
    var C = Rt.current,
      L = (C & 2) !== 0
    if (
      (L ? ((C = (C & 1) | 2), (t.flags |= 128)) : (C &= 1),
      Q(Rt, C),
      Qt(e, t, n, r),
      (n = ot ? Oa : 0),
      !L && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ty(e, r, t)
        else if (e.tag === 19) ty(e, r, t)
        else if (e.child !== null) {
          ;((e.child.return = e), (e = e.child))
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;((e.sibling.return = e.return), (e = e.sibling))
      }
    switch (l) {
      case 'forwards':
        for (r = t.child, l = null; r !== null; )
          ((e = r.alternate),
            e !== null && zl(e) === null && (l = r),
            (r = r.sibling))
        ;((r = l),
          r === null
            ? ((l = t.child), (t.child = null))
            : ((l = r.sibling), (r.sibling = null)),
          Ru(t, !1, l, r, f, n))
        break
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && zl(e) === null)) {
            t.child = l
            break
          }
          ;((e = l.sibling), (l.sibling = r), (r = l), (l = e))
        }
        Ru(t, !0, r, null, f, n)
        break
      case 'together':
        Ru(t, !1, null, null, void 0, n)
        break
      default:
        t.memoizedState = null
    }
    return t.child
  }
  function ln(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (In |= t.lanes),
      (r & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Pi(e, t, r, !1), (r & t.childLanes) === 0)) return null
      } else return null
    if (e !== null && t.child !== e.child) throw Error(c(153))
    if (t.child !== null) {
      for (
        e = t.child, r = $r(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (r = r.sibling = $r(e, e.pendingProps)),
          (r.return = t))
      r.sibling = null
    }
    return t.child
  }
  function Cu(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && jl(e)))
  }
  function F0(e, t, r) {
    switch (t.tag) {
      case 3:
        ;(Y(t, t.stateNode.containerInfo),
          Cn(t, jt, e.memoizedState.cache),
          oi())
        break
      case 27:
      case 5:
        oe(t)
        break
      case 4:
        Y(t, t.stateNode.containerInfo)
        break
      case 10:
        Cn(t, t.type, t.memoizedProps.value)
        break
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), tu(t), null)
        break
      case 13:
        var n = t.memoizedState
        if (n !== null)
          return n.dehydrated !== null
            ? (Dn(t), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? ey(e, t, r)
              : (Dn(t), (e = ln(e, t, r)), e !== null ? e.sibling : null)
        Dn(t)
        break
      case 19:
        var l = (e.flags & 128) !== 0
        if (
          ((n = (r & t.childLanes) !== 0),
          n || (Pi(e, t, r, !1), (n = (r & t.childLanes) !== 0)),
          l)
        ) {
          if (n) return ry(e, t, r)
          t.flags |= 128
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Q(Rt, Rt.current),
          n)
        )
          break
        return null
      case 22:
        return ((t.lanes = 0), Fp(e, t, r, t.pendingProps))
      case 24:
        Cn(t, jt, e.memoizedState.cache)
    }
    return ln(e, t, r)
  }
  function ny(e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ut = !0
      else {
        if (!Cu(e, r) && (t.flags & 128) === 0) return ((Ut = !1), F0(e, t, r))
        Ut = (e.flags & 131072) !== 0
      }
    else ((Ut = !1), ot && (t.flags & 1048576) !== 0 && Bd(t, Oa, t.index))
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var n = t.pendingProps
          if (((e = fi(t.elementType)), (t.type = e), typeof e == 'function'))
            Bs(e)
              ? ((n = yi(e, n)), (t.tag = 1), (t = Jp(null, t, e, n, r)))
              : ((t.tag = 0), (t = Eu(null, t, e, n, r)))
          else {
            if (e != null) {
              var l = e.$$typeof
              if (l === N) {
                ;((t.tag = 11), (t = Qp(null, t, e, n, r)))
                break e
              } else if (l === x) {
                ;((t.tag = 14), (t = Vp(null, t, e, n, r)))
                break e
              }
            }
            throw ((t = J(e) || e), Error(c(306, t, '')))
          }
        }
        return t
      case 0:
        return Eu(e, t, t.type, t.pendingProps, r)
      case 1:
        return ((n = t.type), (l = yi(n, t.pendingProps)), Jp(e, t, n, l, r))
      case 3:
        e: {
          if ((Y(t, t.stateNode.containerInfo), e === null)) throw Error(c(387))
          n = t.pendingProps
          var f = t.memoizedState
          ;((l = f.element), Xs(e, t), Da(t, n, null, r))
          var C = t.memoizedState
          if (
            ((n = C.cache),
            Cn(t, jt, n),
            n !== f.cache && Ys(t, [jt], r, !0),
            Ua(),
            (n = C.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: n, isDehydrated: !1, cache: C.cache }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              t = $p(e, t, n, r)
              break e
            } else if (n !== l) {
              ;((l = Mr(Error(c(424)), t)), xa(l), (t = $p(e, t, n, r)))
              break e
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === 'HTML' ? e.ownerDocument.body : e),
                  vt = Ur(e.firstChild),
                  Gt = t,
                  ot = !0,
                  Mn = null,
                  jr = !0,
                  r = Fd(t, null, n, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling))
          else {
            if ((oi(), n === l)) {
              t = ln(e, t, r)
              break e
            }
            Qt(e, t, n, r)
          }
          t = t.child
        }
        return t
      case 26:
        return (
          Xl(e, t),
          e === null
            ? (r = pg(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = r)
              : ot ||
                ((r = t.type),
                (e = t.pendingProps),
                (n = po(Me.current).createElement(r)),
                (n[At] = t),
                (n[Lt] = e),
                Vt(n, r, e),
                zt(n),
                (t.stateNode = n))
            : (t.memoizedState = pg(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        )
      case 27:
        return (
          oe(t),
          e === null &&
            ot &&
            ((n = t.stateNode = fg(t.type, t.pendingProps, Me.current)),
            (Gt = t),
            (jr = !0),
            (l = vt),
            Gn(t.type) ? ((uc = l), (vt = Ur(n.firstChild))) : (vt = l)),
          Qt(e, t, t.pendingProps.children, r),
          Xl(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        )
      case 5:
        return (
          e === null &&
            ot &&
            ((l = n = vt) &&
              ((n = A_(n, t.type, t.pendingProps, jr)),
              n !== null
                ? ((t.stateNode = n),
                  (Gt = t),
                  (vt = Ur(n.firstChild)),
                  (jr = !1),
                  (l = !0))
                : (l = !1)),
            l || Rn(t)),
          oe(t),
          (l = t.type),
          (f = t.pendingProps),
          (C = e !== null ? e.memoizedProps : null),
          (n = f.children),
          ic(l, f) ? (n = null) : C !== null && ic(l, C) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((l = nu(e, t, z0, null, null, r)), (el._currentValue = l)),
          Xl(e, t),
          Qt(e, t, n, r),
          t.child
        )
      case 6:
        return (
          e === null &&
            ot &&
            ((e = r = vt) &&
              ((r = T_(r, t.pendingProps, jr)),
              r !== null
                ? ((t.stateNode = r), (Gt = t), (vt = null), (e = !0))
                : (e = !1)),
            e || Rn(t)),
          null
        )
      case 13:
        return ey(e, t, r)
      case 4:
        return (
          Y(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = di(t, null, n, r)) : Qt(e, t, n, r),
          t.child
        )
      case 11:
        return Qp(e, t, t.type, t.pendingProps, r)
      case 7:
        return (Qt(e, t, t.pendingProps, r), t.child)
      case 8:
        return (Qt(e, t, t.pendingProps.children, r), t.child)
      case 12:
        return (Qt(e, t, t.pendingProps.children, r), t.child)
      case 10:
        return (
          (n = t.pendingProps),
          Cn(t, t.type, n.value),
          Qt(e, t, n.children, r),
          t.child
        )
      case 9:
        return (
          (l = t.type._context),
          (n = t.pendingProps.children),
          ui(t),
          (l = Yt(l)),
          (n = n(l)),
          (t.flags |= 1),
          Qt(e, t, n, r),
          t.child
        )
      case 14:
        return Vp(e, t, t.type, t.pendingProps, r)
      case 15:
        return Kp(e, t, t.type, t.pendingProps, r)
      case 19:
        return ry(e, t, r)
      case 31:
        return K0(e, t, r)
      case 22:
        return Fp(e, t, r, t.pendingProps)
      case 24:
        return (
          ui(t),
          (n = Yt(jt)),
          e === null
            ? ((l = Ks()),
              l === null &&
                ((l = mt),
                (f = Qs()),
                (l.pooledCache = f),
                f.refCount++,
                f !== null && (l.pooledCacheLanes |= r),
                (l = f)),
              (t.memoizedState = { parent: n, cache: l }),
              Ws(t),
              Cn(t, jt, l))
            : ((e.lanes & r) !== 0 && (Xs(e, t), Da(t, null, null, r), Ua()),
              (l = e.memoizedState),
              (f = t.memoizedState),
              l.parent !== n
                ? ((l = { parent: n, cache: n }),
                  (t.memoizedState = l),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = l),
                  Cn(t, jt, n))
                : ((n = f.cache),
                  Cn(t, jt, n),
                  n !== l.cache && Ys(t, [jt], r, !0))),
          Qt(e, t, t.pendingProps.children, r),
          t.child
        )
      case 29:
        throw t.pendingProps
    }
    throw Error(c(156, t.tag))
  }
  function on(e) {
    e.flags |= 4
  }
  function ju(e, t, r, n, l) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (l & 335544128) === l))
        if (e.stateNode.complete) e.flags |= 8192
        else if (Cy()) e.flags |= 8192
        else throw ((hi = Bl), Fs)
    } else e.flags &= -16777217
  }
  function iy(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217
    else if (((e.flags |= 16777216), !vg(t)))
      if (Cy()) e.flags |= 8192
      else throw ((hi = Bl), Fs)
  }
  function Jl(e, t) {
    ;(t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Kr() : 536870912), (e.lanes |= t), (ea |= t)))
  }
  function qa(e, t) {
    if (!ot)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail
          for (var r = null; t !== null; )
            (t.alternate !== null && (r = t), (t = t.sibling))
          r === null ? (e.tail = null) : (r.sibling = null)
          break
        case 'collapsed':
          r = e.tail
          for (var n = null; r !== null; )
            (r.alternate !== null && (n = r), (r = r.sibling))
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null)
      }
  }
  function _t(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      n = 0
    if (t)
      for (var l = e.child; l !== null; )
        ((r |= l.lanes | l.childLanes),
          (n |= l.subtreeFlags & 65011712),
          (n |= l.flags & 65011712),
          (l.return = e),
          (l = l.sibling))
    else
      for (l = e.child; l !== null; )
        ((r |= l.lanes | l.childLanes),
          (n |= l.subtreeFlags),
          (n |= l.flags),
          (l.return = e),
          (l = l.sibling))
    return ((e.subtreeFlags |= n), (e.childLanes = r), t)
  }
  function W0(e, t, r) {
    var n = t.pendingProps
    switch ((zs(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (_t(t), null)
      case 1:
        return (_t(t), null)
      case 3:
        return (
          (r = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          rn(jt),
          ye(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Hi(t)
              ? on(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Hs())),
          _t(t),
          null
        )
      case 26:
        var l = t.type,
          f = t.memoizedState
        return (
          e === null
            ? (on(t),
              f !== null ? (_t(t), iy(t, f)) : (_t(t), ju(t, l, null, n, r)))
            : f
              ? f !== e.memoizedState
                ? (on(t), _t(t), iy(t, f))
                : (_t(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== n && on(t),
                _t(t),
                ju(t, l, e, n, r)),
          null
        )
      case 27:
        if (
          (ue(t),
          (r = Me.current),
          (l = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== n && on(t)
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(c(166))
            return (_t(t), null)
          }
          ;((e = he.current),
            Hi(t) ? Ld(t) : ((e = fg(l, n, r)), (t.stateNode = e), on(t)))
        }
        return (_t(t), null)
      case 5:
        if ((ue(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && on(t)
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(c(166))
            return (_t(t), null)
          }
          if (((f = he.current), Hi(t))) Ld(t)
          else {
            var C = po(Me.current)
            switch (f) {
              case 1:
                f = C.createElementNS('http://www.w3.org/2000/svg', l)
                break
              case 2:
                f = C.createElementNS('http://www.w3.org/1998/Math/MathML', l)
                break
              default:
                switch (l) {
                  case 'svg':
                    f = C.createElementNS('http://www.w3.org/2000/svg', l)
                    break
                  case 'math':
                    f = C.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      l
                    )
                    break
                  case 'script':
                    ;((f = C.createElement('div')),
                      (f.innerHTML = '<script><\/script>'),
                      (f = f.removeChild(f.firstChild)))
                    break
                  case 'select':
                    ;((f =
                      typeof n.is == 'string'
                        ? C.createElement('select', { is: n.is })
                        : C.createElement('select')),
                      n.multiple
                        ? (f.multiple = !0)
                        : n.size && (f.size = n.size))
                    break
                  default:
                    f =
                      typeof n.is == 'string'
                        ? C.createElement(l, { is: n.is })
                        : C.createElement(l)
                }
            }
            ;((f[At] = t), (f[Lt] = n))
            e: for (C = t.child; C !== null; ) {
              if (C.tag === 5 || C.tag === 6) f.appendChild(C.stateNode)
              else if (C.tag !== 4 && C.tag !== 27 && C.child !== null) {
                ;((C.child.return = C), (C = C.child))
                continue
              }
              if (C === t) break e
              for (; C.sibling === null; ) {
                if (C.return === null || C.return === t) break e
                C = C.return
              }
              ;((C.sibling.return = C.return), (C = C.sibling))
            }
            t.stateNode = f
            e: switch ((Vt(f, l, n), l)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus
                break e
              case 'img':
                n = !0
                break e
              default:
                n = !1
            }
            n && on(t)
          }
        }
        return (
          _t(t),
          ju(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, r),
          null
        )
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && on(t)
        else {
          if (typeof n != 'string' && t.stateNode === null) throw Error(c(166))
          if (((e = Me.current), Hi(t))) {
            if (
              ((e = t.stateNode),
              (r = t.memoizedProps),
              (n = null),
              (l = Gt),
              l !== null)
            )
              switch (l.tag) {
                case 27:
                case 5:
                  n = l.memoizedProps
              }
            ;((e[At] = t),
              (e = !!(
                e.nodeValue === r ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                eg(e.nodeValue, r)
              )),
              e || Rn(t, !0))
          } else ((e = po(e).createTextNode(n)), (e[At] = t), (t.stateNode = e))
        }
        return (_t(t), null)
      case 31:
        if (((r = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((n = Hi(t)), r !== null)) {
            if (e === null) {
              if (!n) throw Error(c(318))
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(c(557))
              e[At] = t
            } else
              (oi(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4))
            ;(_t(t), (e = !1))
          } else
            ((r = Hs()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = r),
              (e = !0))
          if (!e) return t.flags & 256 ? (_r(t), t) : (_r(t), null)
          if ((t.flags & 128) !== 0) throw Error(c(558))
        }
        return (_t(t), null)
      case 13:
        if (
          ((n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((l = Hi(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(c(318))
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(c(317))
              l[At] = t
            } else
              (oi(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4))
            ;(_t(t), (l = !1))
          } else
            ((l = Hs()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (l = !0))
          if (!l) return t.flags & 256 ? (_r(t), t) : (_r(t), null)
        }
        return (
          _r(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = r), t)
            : ((r = n !== null),
              (e = e !== null && e.memoizedState !== null),
              r &&
                ((n = t.child),
                (l = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (l = n.alternate.memoizedState.cachePool.pool),
                (f = null),
                n.memoizedState !== null &&
                  n.memoizedState.cachePool !== null &&
                  (f = n.memoizedState.cachePool.pool),
                f !== l && (n.flags |= 2048)),
              r !== e && r && (t.child.flags |= 8192),
              Jl(t, t.updateQueue),
              _t(t),
              null)
        )
      case 4:
        return (ye(), e === null && $u(t.stateNode.containerInfo), _t(t), null)
      case 10:
        return (rn(t.type), _t(t), null)
      case 19:
        if ((D(Rt), (n = t.memoizedState), n === null)) return (_t(t), null)
        if (((l = (t.flags & 128) !== 0), (f = n.rendering), f === null))
          if (l) qa(n, !1)
          else {
            if (xt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = zl(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      qa(n, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      Jl(t, e),
                      t.subtreeFlags = 0,
                      e = r,
                      r = t.child;
                    r !== null;
                  )
                    (Nd(r, e), (r = r.sibling))
                  return (
                    Q(Rt, (Rt.current & 1) | 2),
                    ot && en(t, n.treeForkCount),
                    t.child
                  )
                }
                e = e.sibling
              }
            n.tail !== null &&
              Se() > no &&
              ((t.flags |= 128), (l = !0), qa(n, !1), (t.lanes = 4194304))
          }
        else {
          if (!l)
            if (((e = zl(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Jl(t, e),
                qa(n, !0),
                n.tail === null &&
                  n.tailMode === 'hidden' &&
                  !f.alternate &&
                  !ot)
              )
                return (_t(t), null)
            } else
              2 * Se() - n.renderingStartTime > no &&
                r !== 536870912 &&
                ((t.flags |= 128), (l = !0), qa(n, !1), (t.lanes = 4194304))
          n.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((e = n.last),
              e !== null ? (e.sibling = f) : (t.child = f),
              (n.last = f))
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = Se()),
            (e.sibling = null),
            (r = Rt.current),
            Q(Rt, l ? (r & 1) | 2 : r & 1),
            ot && en(t, n.treeForkCount),
            e)
          : (_t(t), null)
      case 22:
      case 23:
        return (
          _r(t),
          eu(),
          (n = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== n && (t.flags |= 8192)
            : n && (t.flags |= 8192),
          n
            ? (r & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _t(t),
          (r = t.updateQueue),
          r !== null && Jl(t, r.retryQueue),
          (r = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (r = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          n !== r && (t.flags |= 2048),
          e !== null && D(ci),
          null
        )
      case 24:
        return (
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          rn(jt),
          _t(t),
          null
        )
      case 25:
        return null
      case 30:
        return null
    }
    throw Error(c(156, t.tag))
  }
  function X0(e, t) {
    switch ((zs(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 3:
        return (
          rn(jt),
          ye(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        )
      case 26:
      case 27:
      case 5:
        return (ue(t), null)
      case 31:
        if (t.memoizedState !== null) {
          if ((_r(t), t.alternate === null)) throw Error(c(340))
          oi()
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 13:
        if (
          (_r(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340))
          oi()
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 19:
        return (D(Rt), null)
      case 4:
        return (ye(), null)
      case 10:
        return (rn(t.type), null)
      case 22:
      case 23:
        return (
          _r(t),
          eu(),
          e !== null && D(ci),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 24:
        return (rn(jt), null)
      case 25:
        return null
      default:
        return null
    }
  }
  function ay(e, t) {
    switch ((zs(t), t.tag)) {
      case 3:
        ;(rn(jt), ye())
        break
      case 26:
      case 27:
      case 5:
        ue(t)
        break
      case 4:
        ye()
        break
      case 31:
        t.memoizedState !== null && _r(t)
        break
      case 13:
        _r(t)
        break
      case 19:
        D(Rt)
        break
      case 10:
        rn(t.type)
        break
      case 22:
      case 23:
        ;(_r(t), eu(), e !== null && D(ci))
        break
      case 24:
        rn(jt)
    }
  }
  function Ha(e, t) {
    try {
      var r = t.updateQueue,
        n = r !== null ? r.lastEffect : null
      if (n !== null) {
        var l = n.next
        r = l
        do {
          if ((r.tag & e) === e) {
            n = void 0
            var f = r.create,
              C = r.inst
            ;((n = f()), (C.destroy = n))
          }
          r = r.next
        } while (r !== l)
      }
    } catch (L) {
      ht(t, t.return, L)
    }
  }
  function kn(e, t, r) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null
      if (l !== null) {
        var f = l.next
        n = f
        do {
          if ((n.tag & e) === e) {
            var C = n.inst,
              L = C.destroy
            if (L !== void 0) {
              ;((C.destroy = void 0), (l = t))
              var Z = r,
                ve = L
              try {
                ve()
              } catch (je) {
                ht(l, Z, je)
              }
            }
          }
          n = n.next
        } while (n !== f)
      }
    } catch (je) {
      ht(t, t.return, je)
    }
  }
  function ly(e) {
    var t = e.updateQueue
    if (t !== null) {
      var r = e.stateNode
      try {
        Xd(t, r)
      } catch (n) {
        ht(e, e.return, n)
      }
    }
  }
  function oy(e, t, r) {
    ;((r.props = yi(e.type, e.memoizedProps)), (r.state = e.memoizedState))
    try {
      r.componentWillUnmount()
    } catch (n) {
      ht(e, t, n)
    }
  }
  function Pa(e, t) {
    try {
      var r = e.ref
      if (r !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode
            break
          case 30:
            n = e.stateNode
            break
          default:
            n = e.stateNode
        }
        typeof r == 'function' ? (e.refCleanup = r(n)) : (r.current = n)
      }
    } catch (l) {
      ht(e, t, l)
    }
  }
  function Pr(e, t) {
    var r = e.ref,
      n = e.refCleanup
    if (r !== null)
      if (typeof n == 'function')
        try {
          n()
        } catch (l) {
          ht(e, t, l)
        } finally {
          ;((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null))
        }
      else if (typeof r == 'function')
        try {
          r(null)
        } catch (l) {
          ht(e, t, l)
        }
      else r.current = null
  }
  function sy(e) {
    var t = e.type,
      r = e.memoizedProps,
      n = e.stateNode
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          r.autoFocus && n.focus()
          break e
        case 'img':
          r.src ? (n.src = r.src) : r.srcSet && (n.srcset = r.srcSet)
      }
    } catch (l) {
      ht(e, e.return, l)
    }
  }
  function Nu(e, t, r) {
    try {
      var n = e.stateNode
      ;(b_(n, e.type, r, t), (n[Lt] = t))
    } catch (l) {
      ht(e, e.return, l)
    }
  }
  function uy(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Gn(e.type)) ||
      e.tag === 4
    )
  }
  function Uu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || uy(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Gn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e
        ;((e.child.return = e), (e = e.child))
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function Du(e, t, r) {
    var n = e.tag
    if (n === 5 || n === 6)
      ((e = e.stateNode),
        t
          ? (r.nodeType === 9
              ? r.body
              : r.nodeName === 'HTML'
                ? r.ownerDocument.body
                : r
            ).insertBefore(e, t)
          : ((t =
              r.nodeType === 9
                ? r.body
                : r.nodeName === 'HTML'
                  ? r.ownerDocument.body
                  : r),
            t.appendChild(e),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Zr)))
    else if (
      n !== 4 &&
      (n === 27 && Gn(e.type) && ((r = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Du(e, t, r), e = e.sibling; e !== null; )
        (Du(e, t, r), (e = e.sibling))
  }
  function $l(e, t, r) {
    var n = e.tag
    if (n === 5 || n === 6)
      ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e))
    else if (
      n !== 4 &&
      (n === 27 && Gn(e.type) && (r = e.stateNode), (e = e.child), e !== null)
    )
      for ($l(e, t, r), e = e.sibling; e !== null; )
        ($l(e, t, r), (e = e.sibling))
  }
  function cy(e) {
    var t = e.stateNode,
      r = e.memoizedProps
    try {
      for (var n = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0])
      ;(Vt(t, n, r), (t[At] = e), (t[Lt] = r))
    } catch (f) {
      ht(e, e.return, f)
    }
  }
  var sn = !1,
    Dt = !1,
    Bu = !1,
    fy = typeof WeakSet == 'function' ? WeakSet : Set,
    qt = null
  function Z0(e, t) {
    if (((e = e.containerInfo), (rc = So), (e = Ed(e)), Ms(e))) {
      if ('selectionStart' in e)
        var r = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window
          var n = r.getSelection && r.getSelection()
          if (n && n.rangeCount !== 0) {
            r = n.anchorNode
            var l = n.anchorOffset,
              f = n.focusNode
            n = n.focusOffset
            try {
              ;(r.nodeType, f.nodeType)
            } catch {
              r = null
              break e
            }
            var C = 0,
              L = -1,
              Z = -1,
              ve = 0,
              je = 0,
              Le = e,
              _e = null
            t: for (;;) {
              for (
                var Ee;
                Le !== r || (l !== 0 && Le.nodeType !== 3) || (L = C + l),
                  Le !== f || (n !== 0 && Le.nodeType !== 3) || (Z = C + n),
                  Le.nodeType === 3 && (C += Le.nodeValue.length),
                  (Ee = Le.firstChild) !== null;
              )
                ((_e = Le), (Le = Ee))
              for (;;) {
                if (Le === e) break t
                if (
                  (_e === r && ++ve === l && (L = C),
                  _e === f && ++je === n && (Z = C),
                  (Ee = Le.nextSibling) !== null)
                )
                  break
                ;((Le = _e), (_e = Le.parentNode))
              }
              Le = Ee
            }
            r = L === -1 || Z === -1 ? null : { start: L, end: Z }
          } else r = null
        }
      r = r || { start: 0, end: 0 }
    } else r = null
    for (
      nc = { focusedElem: e, selectionRange: r }, So = !1, qt = t;
      qt !== null;
    )
      if (
        ((t = qt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (qt = e))
      else
        for (; qt !== null; ) {
          switch (((t = qt), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (r = 0; r < e.length; r++)
                  ((l = e[r]), (l.ref.impl = l.nextImpl))
              break
            case 11:
            case 15:
              break
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                ;((e = void 0),
                  (r = t),
                  (l = f.memoizedProps),
                  (f = f.memoizedState),
                  (n = r.stateNode))
                try {
                  var Qe = yi(r.type, l)
                  ;((e = n.getSnapshotBeforeUpdate(Qe, f)),
                    (n.__reactInternalSnapshotBeforeUpdate = e))
                } catch (We) {
                  ht(r, r.return, We)
                }
              }
              break
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (r = e.nodeType), r === 9)
                )
                  lc(e)
                else if (r === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      lc(e)
                      break
                    default:
                      e.textContent = ''
                  }
              }
              break
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break
            default:
              if ((e & 1024) !== 0) throw Error(c(163))
          }
          if (((e = t.sibling), e !== null)) {
            ;((e.return = t.return), (qt = e))
            break
          }
          qt = t.return
        }
  }
  function hy(e, t, r) {
    var n = r.flags
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        ;(cn(e, r), n & 4 && Ha(5, r))
        break
      case 1:
        if ((cn(e, r), n & 4))
          if (((e = r.stateNode), t === null))
            try {
              e.componentDidMount()
            } catch (C) {
              ht(r, r.return, C)
            }
          else {
            var l = yi(r.type, t.memoizedProps)
            t = t.memoizedState
            try {
              e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate)
            } catch (C) {
              ht(r, r.return, C)
            }
          }
        ;(n & 64 && ly(r), n & 512 && Pa(r, r.return))
        break
      case 3:
        if ((cn(e, r), n & 64 && ((e = r.updateQueue), e !== null))) {
          if (((t = null), r.child !== null))
            switch (r.child.tag) {
              case 27:
              case 5:
                t = r.child.stateNode
                break
              case 1:
                t = r.child.stateNode
            }
          try {
            Xd(e, t)
          } catch (C) {
            ht(r, r.return, C)
          }
        }
        break
      case 27:
        t === null && n & 4 && cy(r)
      case 26:
      case 5:
        ;(cn(e, r), t === null && n & 4 && sy(r), n & 512 && Pa(r, r.return))
        break
      case 12:
        cn(e, r)
        break
      case 31:
        ;(cn(e, r), n & 4 && yy(e, r))
        break
      case 13:
        ;(cn(e, r),
          n & 4 && gy(e, r),
          n & 64 &&
            ((e = r.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((r = l_.bind(null, r)), O_(e, r)))))
        break
      case 22:
        if (((n = r.memoizedState !== null || sn), !n)) {
          ;((t = (t !== null && t.memoizedState !== null) || Dt), (l = sn))
          var f = Dt
          ;((sn = n),
            (Dt = t) && !f ? fn(e, r, (r.subtreeFlags & 8772) !== 0) : cn(e, r),
            (sn = l),
            (Dt = f))
        }
        break
      case 30:
        break
      default:
        cn(e, r)
    }
  }
  function dy(e) {
    var t = e.alternate
    ;(t !== null && ((e.alternate = null), dy(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && fs(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null))
  }
  var St = null,
    ur = !1
  function un(e, t, r) {
    for (r = r.child; r !== null; ) (py(e, t, r), (r = r.sibling))
  }
  function py(e, t, r) {
    if (me && typeof me.onCommitFiberUnmount == 'function')
      try {
        me.onCommitFiberUnmount(se, r)
      } catch {}
    switch (r.tag) {
      case 26:
        ;(Dt || Pr(r, t),
          un(e, t, r),
          r.memoizedState
            ? r.memoizedState.count--
            : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r)))
        break
      case 27:
        Dt || Pr(r, t)
        var n = St,
          l = ur
        ;(Gn(r.type) && ((St = r.stateNode), (ur = !1)),
          un(e, t, r),
          Za(r.stateNode),
          (St = n),
          (ur = l))
        break
      case 5:
        Dt || Pr(r, t)
      case 6:
        if (
          ((n = St),
          (l = ur),
          (St = null),
          un(e, t, r),
          (St = n),
          (ur = l),
          St !== null)
        )
          if (ur)
            try {
              ;(St.nodeType === 9
                ? St.body
                : St.nodeName === 'HTML'
                  ? St.ownerDocument.body
                  : St
              ).removeChild(r.stateNode)
            } catch (f) {
              ht(r, t, f)
            }
          else
            try {
              St.removeChild(r.stateNode)
            } catch (f) {
              ht(r, t, f)
            }
        break
      case 18:
        St !== null &&
          (ur
            ? ((e = St),
              lg(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                    ? e.ownerDocument.body
                    : e,
                r.stateNode
              ),
              sa(e))
            : lg(St, r.stateNode))
        break
      case 4:
        ;((n = St),
          (l = ur),
          (St = r.stateNode.containerInfo),
          (ur = !0),
          un(e, t, r),
          (St = n),
          (ur = l))
        break
      case 0:
      case 11:
      case 14:
      case 15:
        ;(kn(2, r, t), Dt || kn(4, r, t), un(e, t, r))
        break
      case 1:
        ;(Dt ||
          (Pr(r, t),
          (n = r.stateNode),
          typeof n.componentWillUnmount == 'function' && oy(r, t, n)),
          un(e, t, r))
        break
      case 21:
        un(e, t, r)
        break
      case 22:
        ;((Dt = (n = Dt) || r.memoizedState !== null), un(e, t, r), (Dt = n))
        break
      default:
        un(e, t, r)
    }
  }
  function yy(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated
      try {
        sa(e)
      } catch (r) {
        ht(t, t.return, r)
      }
    }
  }
  function gy(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        sa(e)
      } catch (r) {
        ht(t, t.return, r)
      }
  }
  function J0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode
        return (t === null && (t = e.stateNode = new fy()), t)
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new fy()),
          t
        )
      default:
        throw Error(c(435, e.tag))
    }
  }
  function eo(e, t) {
    var r = J0(e)
    t.forEach(function (n) {
      if (!r.has(n)) {
        r.add(n)
        var l = o_.bind(null, e, n)
        n.then(l, l)
      }
    })
  }
  function cr(e, t) {
    var r = t.deletions
    if (r !== null)
      for (var n = 0; n < r.length; n++) {
        var l = r[n],
          f = e,
          C = t,
          L = C
        e: for (; L !== null; ) {
          switch (L.tag) {
            case 27:
              if (Gn(L.type)) {
                ;((St = L.stateNode), (ur = !1))
                break e
              }
              break
            case 5:
              ;((St = L.stateNode), (ur = !1))
              break e
            case 3:
            case 4:
              ;((St = L.stateNode.containerInfo), (ur = !0))
              break e
          }
          L = L.return
        }
        if (St === null) throw Error(c(160))
        ;(py(f, C, l),
          (St = null),
          (ur = !1),
          (f = l.alternate),
          f !== null && (f.return = null),
          (l.return = null))
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (my(t, e), (t = t.sibling))
  }
  var kr = null
  function my(e, t) {
    var r = e.alternate,
      n = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ;(cr(t, e),
          fr(e),
          n & 4 && (kn(3, e, e.return), Ha(3, e), kn(5, e, e.return)))
        break
      case 1:
        ;(cr(t, e),
          fr(e),
          n & 512 && (Dt || r === null || Pr(r, r.return)),
          n & 64 &&
            sn &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((r = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = r === null ? n : r.concat(n))))))
        break
      case 26:
        var l = kr
        if (
          (cr(t, e),
          fr(e),
          n & 512 && (Dt || r === null || Pr(r, r.return)),
          n & 4)
        ) {
          var f = r !== null ? r.memoizedState : null
          if (((n = e.memoizedState), r === null))
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  ;((n = e.type),
                    (r = e.memoizedProps),
                    (l = l.ownerDocument || l))
                  t: switch (n) {
                    case 'title':
                      ;((f = l.getElementsByTagName('title')[0]),
                        (!f ||
                          f[er] ||
                          f[At] ||
                          f.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          f.hasAttribute('itemprop')) &&
                          ((f = l.createElement(n)),
                          l.head.insertBefore(
                            f,
                            l.querySelector('head > title')
                          )),
                        Vt(f, n, r),
                        (f[At] = e),
                        zt(f),
                        (n = f))
                      break e
                    case 'link':
                      var C = mg('link', 'href', l).get(n + (r.href || ''))
                      if (C) {
                        for (var L = 0; L < C.length; L++)
                          if (
                            ((f = C[L]),
                            f.getAttribute('href') ===
                              (r.href == null || r.href === ''
                                ? null
                                : r.href) &&
                              f.getAttribute('rel') ===
                                (r.rel == null ? null : r.rel) &&
                              f.getAttribute('title') ===
                                (r.title == null ? null : r.title) &&
                              f.getAttribute('crossorigin') ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            C.splice(L, 1)
                            break t
                          }
                      }
                      ;((f = l.createElement(n)),
                        Vt(f, n, r),
                        l.head.appendChild(f))
                      break
                    case 'meta':
                      if (
                        (C = mg('meta', 'content', l).get(
                          n + (r.content || '')
                        ))
                      ) {
                        for (L = 0; L < C.length; L++)
                          if (
                            ((f = C[L]),
                            f.getAttribute('content') ===
                              (r.content == null ? null : '' + r.content) &&
                              f.getAttribute('name') ===
                                (r.name == null ? null : r.name) &&
                              f.getAttribute('property') ===
                                (r.property == null ? null : r.property) &&
                              f.getAttribute('http-equiv') ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              f.getAttribute('charset') ===
                                (r.charSet == null ? null : r.charSet))
                          ) {
                            C.splice(L, 1)
                            break t
                          }
                      }
                      ;((f = l.createElement(n)),
                        Vt(f, n, r),
                        l.head.appendChild(f))
                      break
                    default:
                      throw Error(c(468, n))
                  }
                  ;((f[At] = e), zt(f), (n = f))
                }
                e.stateNode = n
              } else bg(l, e.type, e.stateNode)
            else e.stateNode = gg(l, n, e.memoizedProps)
          else
            f !== n
              ? (f === null
                  ? r.stateNode !== null &&
                    ((r = r.stateNode), r.parentNode.removeChild(r))
                  : f.count--,
                n === null
                  ? bg(l, e.type, e.stateNode)
                  : gg(l, n, e.memoizedProps))
              : n === null &&
                e.stateNode !== null &&
                Nu(e, e.memoizedProps, r.memoizedProps)
        }
        break
      case 27:
        ;(cr(t, e),
          fr(e),
          n & 512 && (Dt || r === null || Pr(r, r.return)),
          r !== null && n & 4 && Nu(e, e.memoizedProps, r.memoizedProps))
        break
      case 5:
        if (
          (cr(t, e),
          fr(e),
          n & 512 && (Dt || r === null || Pr(r, r.return)),
          e.flags & 32)
        ) {
          l = e.stateNode
          try {
            ji(l, '')
          } catch (Qe) {
            ht(e, e.return, Qe)
          }
        }
        ;(n & 4 &&
          e.stateNode != null &&
          ((l = e.memoizedProps), Nu(e, l, r !== null ? r.memoizedProps : l)),
          n & 1024 && (Bu = !0))
        break
      case 6:
        if ((cr(t, e), fr(e), n & 4)) {
          if (e.stateNode === null) throw Error(c(162))
          ;((n = e.memoizedProps), (r = e.stateNode))
          try {
            r.nodeValue = n
          } catch (Qe) {
            ht(e, e.return, Qe)
          }
        }
        break
      case 3:
        if (
          ((mo = null),
          (l = kr),
          (kr = yo(t.containerInfo)),
          cr(t, e),
          (kr = l),
          fr(e),
          n & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            sa(t.containerInfo)
          } catch (Qe) {
            ht(e, e.return, Qe)
          }
        Bu && ((Bu = !1), by(e))
        break
      case 4:
        ;((n = kr),
          (kr = yo(e.stateNode.containerInfo)),
          cr(t, e),
          fr(e),
          (kr = n))
        break
      case 12:
        ;(cr(t, e), fr(e))
        break
      case 31:
        ;(cr(t, e),
          fr(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), eo(e, n))))
        break
      case 13:
        ;(cr(t, e),
          fr(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (r !== null && r.memoizedState !== null) &&
            (ro = Se()),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), eo(e, n))))
        break
      case 22:
        l = e.memoizedState !== null
        var Z = r !== null && r.memoizedState !== null,
          ve = sn,
          je = Dt
        if (
          ((sn = ve || l),
          (Dt = je || Z),
          cr(t, e),
          (Dt = je),
          (sn = ve),
          fr(e),
          n & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = l ? t._visibility & -2 : t._visibility | 1,
              l && (r === null || Z || sn || Dt || gi(e)),
              r = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (r === null) {
                Z = r = t
                try {
                  if (((f = Z.stateNode), l))
                    ((C = f.style),
                      typeof C.setProperty == 'function'
                        ? C.setProperty('display', 'none', 'important')
                        : (C.display = 'none'))
                  else {
                    L = Z.stateNode
                    var Le = Z.memoizedProps.style,
                      _e =
                        Le != null && Le.hasOwnProperty('display')
                          ? Le.display
                          : null
                    L.style.display =
                      _e == null || typeof _e == 'boolean'
                        ? ''
                        : ('' + _e).trim()
                  }
                } catch (Qe) {
                  ht(Z, Z.return, Qe)
                }
              }
            } else if (t.tag === 6) {
              if (r === null) {
                Z = t
                try {
                  Z.stateNode.nodeValue = l ? '' : Z.memoizedProps
                } catch (Qe) {
                  ht(Z, Z.return, Qe)
                }
              }
            } else if (t.tag === 18) {
              if (r === null) {
                Z = t
                try {
                  var Ee = Z.stateNode
                  l ? og(Ee, !0) : og(Z.stateNode, !1)
                } catch (Qe) {
                  ht(Z, Z.return, Qe)
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ;((t.child.return = t), (t = t.child))
              continue
            }
            if (t === e) break e
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e
              ;(r === t && (r = null), (t = t.return))
            }
            ;(r === t && (r = null),
              (t.sibling.return = t.return),
              (t = t.sibling))
          }
        n & 4 &&
          ((n = e.updateQueue),
          n !== null &&
            ((r = n.retryQueue),
            r !== null && ((n.retryQueue = null), eo(e, r))))
        break
      case 19:
        ;(cr(t, e),
          fr(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), eo(e, n))))
        break
      case 30:
        break
      case 21:
        break
      default:
        ;(cr(t, e), fr(e))
    }
  }
  function fr(e) {
    var t = e.flags
    if (t & 2) {
      try {
        for (var r, n = e.return; n !== null; ) {
          if (uy(n)) {
            r = n
            break
          }
          n = n.return
        }
        if (r == null) throw Error(c(160))
        switch (r.tag) {
          case 27:
            var l = r.stateNode,
              f = Uu(e)
            $l(e, f, l)
            break
          case 5:
            var C = r.stateNode
            r.flags & 32 && (ji(C, ''), (r.flags &= -33))
            var L = Uu(e)
            $l(e, L, C)
            break
          case 3:
          case 4:
            var Z = r.stateNode.containerInfo,
              ve = Uu(e)
            Du(e, ve, Z)
            break
          default:
            throw Error(c(161))
        }
      } catch (je) {
        ht(e, e.return, je)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function by(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e
        ;(by(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling))
      }
  }
  function cn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (hy(e, t.alternate, t), (t = t.sibling))
  }
  function gi(e) {
    for (e = e.child; e !== null; ) {
      var t = e
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ;(kn(4, t, t.return), gi(t))
          break
        case 1:
          Pr(t, t.return)
          var r = t.stateNode
          ;(typeof r.componentWillUnmount == 'function' && oy(t, t.return, r),
            gi(t))
          break
        case 27:
          Za(t.stateNode)
        case 26:
        case 5:
          ;(Pr(t, t.return), gi(t))
          break
        case 22:
          t.memoizedState === null && gi(t)
          break
        case 30:
          gi(t)
          break
        default:
          gi(t)
      }
      e = e.sibling
    }
  }
  function fn(e, t, r) {
    for (r = r && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate,
        l = e,
        f = t,
        C = f.flags
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ;(fn(l, f, r), Ha(4, f))
          break
        case 1:
          if (
            (fn(l, f, r),
            (n = f),
            (l = n.stateNode),
            typeof l.componentDidMount == 'function')
          )
            try {
              l.componentDidMount()
            } catch (ve) {
              ht(n, n.return, ve)
            }
          if (((n = f), (l = n.updateQueue), l !== null)) {
            var L = n.stateNode
            try {
              var Z = l.shared.hiddenCallbacks
              if (Z !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < Z.length; l++)
                  Wd(Z[l], L)
            } catch (ve) {
              ht(n, n.return, ve)
            }
          }
          ;(r && C & 64 && ly(f), Pa(f, f.return))
          break
        case 27:
          cy(f)
        case 26:
        case 5:
          ;(fn(l, f, r), r && n === null && C & 4 && sy(f), Pa(f, f.return))
          break
        case 12:
          fn(l, f, r)
          break
        case 31:
          ;(fn(l, f, r), r && C & 4 && yy(l, f))
          break
        case 13:
          ;(fn(l, f, r), r && C & 4 && gy(l, f))
          break
        case 22:
          ;(f.memoizedState === null && fn(l, f, r), Pa(f, f.return))
          break
        case 30:
          break
        default:
          fn(l, f, r)
      }
      t = t.sibling
    }
  }
  function ku(e, t) {
    var r = null
    ;(e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (r = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== r && (e != null && e.refCount++, r != null && Ma(r)))
  }
  function Lu(e, t) {
    ;((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ma(e)))
  }
  function Lr(e, t, r, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (vy(e, t, r, n), (t = t.sibling))
  }
  function vy(e, t, r, n) {
    var l = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ;(Lr(e, t, r, n), l & 2048 && Ha(9, t))
        break
      case 1:
        Lr(e, t, r, n)
        break
      case 3:
        ;(Lr(e, t, r, n),
          l & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ma(e))))
        break
      case 12:
        if (l & 2048) {
          ;(Lr(e, t, r, n), (e = t.stateNode))
          try {
            var f = t.memoizedProps,
              C = f.id,
              L = f.onPostCommit
            typeof L == 'function' &&
              L(
                C,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0
              )
          } catch (Z) {
            ht(t, t.return, Z)
          }
        } else Lr(e, t, r, n)
        break
      case 31:
        Lr(e, t, r, n)
        break
      case 13:
        Lr(e, t, r, n)
        break
      case 23:
        break
      case 22:
        ;((f = t.stateNode),
          (C = t.alternate),
          t.memoizedState !== null
            ? f._visibility & 2
              ? Lr(e, t, r, n)
              : Ga(e, t)
            : f._visibility & 2
              ? Lr(e, t, r, n)
              : ((f._visibility |= 2),
                Zi(e, t, r, n, (t.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && ku(C, t))
        break
      case 24:
        ;(Lr(e, t, r, n), l & 2048 && Lu(t.alternate, t))
        break
      default:
        Lr(e, t, r, n)
    }
  }
  function Zi(e, t, r, n, l) {
    for (
      l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var f = e,
        C = t,
        L = r,
        Z = n,
        ve = C.flags
      switch (C.tag) {
        case 0:
        case 11:
        case 15:
          ;(Zi(f, C, L, Z, l), Ha(8, C))
          break
        case 23:
          break
        case 22:
          var je = C.stateNode
          ;(C.memoizedState !== null
            ? je._visibility & 2
              ? Zi(f, C, L, Z, l)
              : Ga(f, C)
            : ((je._visibility |= 2), Zi(f, C, L, Z, l)),
            l && ve & 2048 && ku(C.alternate, C))
          break
        case 24:
          ;(Zi(f, C, L, Z, l), l && ve & 2048 && Lu(C.alternate, C))
          break
        default:
          Zi(f, C, L, Z, l)
      }
      t = t.sibling
    }
  }
  function Ga(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var r = e,
          n = t,
          l = n.flags
        switch (n.tag) {
          case 22:
            ;(Ga(r, n), l & 2048 && ku(n.alternate, n))
            break
          case 24:
            ;(Ga(r, n), l & 2048 && Lu(n.alternate, n))
            break
          default:
            Ga(r, n)
        }
        t = t.sibling
      }
  }
  var Ya = 8192
  function Ji(e, t, r) {
    if (e.subtreeFlags & Ya)
      for (e = e.child; e !== null; ) (_y(e, t, r), (e = e.sibling))
  }
  function _y(e, t, r) {
    switch (e.tag) {
      case 26:
        ;(Ji(e, t, r),
          e.flags & Ya &&
            e.memoizedState !== null &&
            I_(r, kr, e.memoizedState, e.memoizedProps))
        break
      case 5:
        Ji(e, t, r)
        break
      case 3:
      case 4:
        var n = kr
        ;((kr = yo(e.stateNode.containerInfo)), Ji(e, t, r), (kr = n))
        break
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Ya), (Ya = 16777216), Ji(e, t, r), (Ya = n))
            : Ji(e, t, r))
        break
      default:
        Ji(e, t, r)
    }
  }
  function Sy(e) {
    var t = e.alternate
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null
      do ((t = e.sibling), (e.sibling = null), (e = t))
      while (e !== null)
    }
  }
  function Qa(e) {
    var t = e.deletions
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          ;((qt = n), Ey(n, e))
        }
      Sy(e)
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (wy(e), (e = e.sibling))
  }
  function wy(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ;(Qa(e), e.flags & 2048 && kn(9, e, e.return))
        break
      case 3:
        Qa(e)
        break
      case 12:
        Qa(e)
        break
      case 22:
        var t = e.stateNode
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), to(e))
          : Qa(e)
        break
      default:
        Qa(e)
    }
  }
  function to(e) {
    var t = e.deletions
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          ;((qt = n), Ey(n, e))
        }
      Sy(e)
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ;(kn(8, t, t.return), to(t))
          break
        case 22:
          ;((r = t.stateNode),
            r._visibility & 2 && ((r._visibility &= -3), to(t)))
          break
        default:
          to(t)
      }
      e = e.sibling
    }
  }
  function Ey(e, t) {
    for (; qt !== null; ) {
      var r = qt
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          kn(8, r, t)
          break
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var n = r.memoizedState.cachePool.pool
            n != null && n.refCount++
          }
          break
        case 24:
          Ma(r.memoizedState.cache)
      }
      if (((n = r.child), n !== null)) ((n.return = r), (qt = n))
      else
        e: for (r = e; qt !== null; ) {
          n = qt
          var l = n.sibling,
            f = n.return
          if ((dy(n), n === r)) {
            qt = null
            break e
          }
          if (l !== null) {
            ;((l.return = f), (qt = l))
            break e
          }
          qt = f
        }
    }
  }
  var $0 = {
      getCacheForType: function (e) {
        var t = Yt(jt),
          r = t.data.get(e)
        return (r === void 0 && ((r = e()), t.data.set(e, r)), r)
      },
      cacheSignal: function () {
        return Yt(jt).controller.signal
      },
    },
    e_ = typeof WeakMap == 'function' ? WeakMap : Map,
    ct = 0,
    mt = null,
    nt = null,
    at = 0,
    ft = 0,
    Sr = null,
    Ln = !1,
    $i = !1,
    Iu = !1,
    hn = 0,
    xt = 0,
    In = 0,
    mi = 0,
    zu = 0,
    wr = 0,
    ea = 0,
    Va = null,
    hr = null,
    qu = !1,
    ro = 0,
    Ay = 0,
    no = 1 / 0,
    io = null,
    zn = null,
    It = 0,
    qn = null,
    ta = null,
    dn = 0,
    Hu = 0,
    Pu = null,
    Ty = null,
    Ka = 0,
    Gu = null
  function Er() {
    return (ct & 2) !== 0 && at !== 0 ? at & -at : K.T !== null ? Wu() : ir()
  }
  function Oy() {
    if (wr === 0)
      if ((at & 536870912) === 0 || ot) {
        var e = Mt
        ;((Mt <<= 1), (Mt & 3932160) === 0 && (Mt = 262144), (wr = e))
      } else wr = 536870912
    return ((e = vr.current), e !== null && (e.flags |= 32), wr)
  }
  function dr(e, t, r) {
    ;(((e === mt && (ft === 2 || ft === 9)) ||
      e.cancelPendingCommit !== null) &&
      (ra(e, 0), Hn(e, at, wr, !1)),
      z(e, r),
      ((ct & 2) === 0 || e !== mt) &&
        (e === mt &&
          ((ct & 2) === 0 && (mi |= r), xt === 4 && Hn(e, at, wr, !1)),
        Gr(e)))
  }
  function xy(e, t, r) {
    if ((ct & 6) !== 0) throw Error(c(327))
    var n = (!r && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Bt(e, t),
      l = n ? n_(e, t) : Qu(e, t, !0),
      f = n
    do {
      if (l === 0) {
        $i && !n && Hn(e, t, 0, !1)
        break
      } else {
        if (((r = e.current.alternate), f && !t_(r))) {
          ;((l = Qu(e, t, !1)), (f = !1))
          continue
        }
        if (l === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var C = 0
          else
            ((C = e.pendingLanes & -536870913),
              (C = C !== 0 ? C : C & 536870912 ? 536870912 : 0))
          if (C !== 0) {
            t = C
            e: {
              var L = e
              l = Va
              var Z = L.current.memoizedState.isDehydrated
              if ((Z && (ra(L, C).flags |= 256), (C = Qu(L, C, !1)), C !== 2)) {
                if (Iu && !Z) {
                  ;((L.errorRecoveryDisabledLanes |= f), (mi |= f), (l = 4))
                  break e
                }
                ;((f = hr),
                  (hr = l),
                  f !== null && (hr === null ? (hr = f) : hr.push.apply(hr, f)))
              }
              l = C
            }
            if (((f = !1), l !== 2)) continue
          }
        }
        if (l === 1) {
          ;(ra(e, 0), Hn(e, t, 0, !0))
          break
        }
        e: {
          switch (((n = e), (f = l), f)) {
            case 0:
            case 1:
              throw Error(c(345))
            case 4:
              if ((t & 4194048) !== t) break
            case 6:
              Hn(n, t, wr, !Ln)
              break e
            case 2:
              hr = null
              break
            case 3:
            case 5:
              break
            default:
              throw Error(c(329))
          }
          if ((t & 62914560) === t && ((l = ro + 300 - Se()), 10 < l)) {
            if ((Hn(n, t, wr, !Ln), $t(n, 0, !0) !== 0)) break e
            ;((dn = t),
              (n.timeoutHandle = ig(
                My.bind(
                  null,
                  n,
                  r,
                  hr,
                  io,
                  qu,
                  t,
                  wr,
                  mi,
                  ea,
                  Ln,
                  f,
                  'Throttled',
                  -0,
                  0
                ),
                l
              )))
            break e
          }
          My(n, r, hr, io, qu, t, wr, mi, ea, Ln, f, null, -0, 0)
        }
      }
      break
    } while (!0)
    Gr(e)
  }
  function My(e, t, r, n, l, f, C, L, Z, ve, je, Le, _e, Ee) {
    if (
      ((e.timeoutHandle = -1),
      (Le = t.subtreeFlags),
      Le & 8192 || (Le & 16785408) === 16785408)
    ) {
      ;((Le = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Zr,
      }),
        _y(t, f, Le))
      var Qe =
        (f & 62914560) === f ? ro - Se() : (f & 4194048) === f ? Ay - Se() : 0
      if (((Qe = z_(Le, Qe)), Qe !== null)) {
        ;((dn = f),
          (e.cancelPendingCommit = Qe(
            ky.bind(null, e, t, f, r, n, l, C, L, Z, je, Le, null, _e, Ee)
          )),
          Hn(e, f, C, !ve))
        return
      }
    }
    ky(e, t, f, r, n, l, C, L, Z)
  }
  function t_(e) {
    for (var t = e; ; ) {
      var r = t.tag
      if (
        (r === 0 || r === 11 || r === 15) &&
        t.flags & 16384 &&
        ((r = t.updateQueue), r !== null && ((r = r.stores), r !== null))
      )
        for (var n = 0; n < r.length; n++) {
          var l = r[n],
            f = l.getSnapshot
          l = l.value
          try {
            if (!mr(f(), l)) return !1
          } catch {
            return !1
          }
        }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        ((r.return = t), (t = r))
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;((t.sibling.return = t.return), (t = t.sibling))
      }
    }
    return !0
  }
  function Hn(e, t, r, n) {
    ;((t &= ~zu),
      (t &= ~mi),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes))
    for (var l = t; 0 < l; ) {
      var f = 31 - Pe(l),
        C = 1 << f
      ;((n[f] = -1), (l &= ~C))
    }
    r !== 0 && ze(e, r, t)
  }
  function ao() {
    return (ct & 6) === 0 ? (Fa(0), !1) : !0
  }
  function Yu() {
    if (nt !== null) {
      if (ft === 0) var e = nt.return
      else ((e = nt), (tn = si = null), lu(e), (Vi = null), (Ca = 0), (e = nt))
      for (; e !== null; ) (ay(e.alternate, e), (e = e.return))
      nt = null
    }
  }
  function ra(e, t) {
    var r = e.timeoutHandle
    ;(r !== -1 && ((e.timeoutHandle = -1), S_(r)),
      (r = e.cancelPendingCommit),
      r !== null && ((e.cancelPendingCommit = null), r()),
      (dn = 0),
      Yu(),
      (mt = e),
      (nt = r = $r(e.current, null)),
      (at = t),
      (ft = 0),
      (Sr = null),
      (Ln = !1),
      ($i = Bt(e, t)),
      (Iu = !1),
      (ea = wr = zu = mi = In = xt = 0),
      (hr = Va = null),
      (qu = !1),
      (t & 8) !== 0 && (t |= t & 32))
    var n = e.entangledLanes
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var l = 31 - Pe(n),
          f = 1 << l
        ;((t |= e[l]), (n &= ~f))
      }
    return ((hn = t), Ol(), r)
  }
  function Ry(e, t) {
    ;((tt = null),
      (K.H = Ia),
      t === Qi || t === Dl
        ? ((t = Qd()), (ft = 3))
        : t === Fs
          ? ((t = Qd()), (ft = 4))
          : (ft =
              t === wu
                ? 8
                : t !== null &&
                    typeof t == 'object' &&
                    typeof t.then == 'function'
                  ? 6
                  : 1),
      (Sr = t),
      nt === null && ((xt = 1), Fl(e, Mr(t, e.current))))
  }
  function Cy() {
    var e = vr.current
    return e === null
      ? !0
      : (at & 4194048) === at
        ? Nr === null
        : (at & 62914560) === at || (at & 536870912) !== 0
          ? e === Nr
          : !1
  }
  function jy() {
    var e = K.H
    return ((K.H = Ia), e === null ? Ia : e)
  }
  function Ny() {
    var e = K.A
    return ((K.A = $0), e)
  }
  function lo() {
    ;((xt = 4),
      Ln || ((at & 4194048) !== at && vr.current !== null) || ($i = !0),
      ((In & 134217727) === 0 && (mi & 134217727) === 0) ||
        mt === null ||
        Hn(mt, at, wr, !1))
  }
  function Qu(e, t, r) {
    var n = ct
    ct |= 2
    var l = jy(),
      f = Ny()
    ;((mt !== e || at !== t) && ((io = null), ra(e, t)), (t = !1))
    var C = xt
    e: do
      try {
        if (ft !== 0 && nt !== null) {
          var L = nt,
            Z = Sr
          switch (ft) {
            case 8:
              ;(Yu(), (C = 6))
              break e
            case 3:
            case 2:
            case 9:
            case 6:
              vr.current === null && (t = !0)
              var ve = ft
              if (((ft = 0), (Sr = null), na(e, L, Z, ve), r && $i)) {
                C = 0
                break e
              }
              break
            default:
              ;((ve = ft), (ft = 0), (Sr = null), na(e, L, Z, ve))
          }
        }
        ;(r_(), (C = xt))
        break
      } catch (je) {
        Ry(e, je)
      }
    while (!0)
    return (
      t && e.shellSuspendCounter++,
      (tn = si = null),
      (ct = n),
      (K.H = l),
      (K.A = f),
      nt === null && ((mt = null), (at = 0), Ol()),
      C
    )
  }
  function r_() {
    for (; nt !== null; ) Uy(nt)
  }
  function n_(e, t) {
    var r = ct
    ct |= 2
    var n = jy(),
      l = Ny()
    mt !== e || at !== t
      ? ((io = null), (no = Se() + 500), ra(e, t))
      : ($i = Bt(e, t))
    e: do
      try {
        if (ft !== 0 && nt !== null) {
          t = nt
          var f = Sr
          t: switch (ft) {
            case 1:
              ;((ft = 0), (Sr = null), na(e, t, f, 1))
              break
            case 2:
            case 9:
              if (Gd(f)) {
                ;((ft = 0), (Sr = null), Dy(t))
                break
              }
              ;((t = function () {
                ;((ft !== 2 && ft !== 9) || mt !== e || (ft = 7), Gr(e))
              }),
                f.then(t, t))
              break e
            case 3:
              ft = 7
              break e
            case 4:
              ft = 5
              break e
            case 7:
              Gd(f)
                ? ((ft = 0), (Sr = null), Dy(t))
                : ((ft = 0), (Sr = null), na(e, t, f, 7))
              break
            case 5:
              var C = null
              switch (nt.tag) {
                case 26:
                  C = nt.memoizedState
                case 5:
                case 27:
                  var L = nt
                  if (C ? vg(C) : L.stateNode.complete) {
                    ;((ft = 0), (Sr = null))
                    var Z = L.sibling
                    if (Z !== null) nt = Z
                    else {
                      var ve = L.return
                      ve !== null ? ((nt = ve), oo(ve)) : (nt = null)
                    }
                    break t
                  }
              }
              ;((ft = 0), (Sr = null), na(e, t, f, 5))
              break
            case 6:
              ;((ft = 0), (Sr = null), na(e, t, f, 6))
              break
            case 8:
              ;(Yu(), (xt = 6))
              break e
            default:
              throw Error(c(462))
          }
        }
        i_()
        break
      } catch (je) {
        Ry(e, je)
      }
    while (!0)
    return (
      (tn = si = null),
      (K.H = n),
      (K.A = l),
      (ct = r),
      nt !== null ? 0 : ((mt = null), (at = 0), Ol(), xt)
    )
  }
  function i_() {
    for (; nt !== null && !Ne(); ) Uy(nt)
  }
  function Uy(e) {
    var t = ny(e.alternate, e, hn)
    ;((e.memoizedProps = e.pendingProps), t === null ? oo(e) : (nt = t))
  }
  function Dy(e) {
    var t = e,
      r = t.alternate
    switch (t.tag) {
      case 15:
      case 0:
        t = Zp(r, t, t.pendingProps, t.type, void 0, at)
        break
      case 11:
        t = Zp(r, t, t.pendingProps, t.type.render, t.ref, at)
        break
      case 5:
        lu(t)
      default:
        ;(ay(r, t), (t = nt = Nd(t, hn)), (t = ny(r, t, hn)))
    }
    ;((e.memoizedProps = e.pendingProps), t === null ? oo(e) : (nt = t))
  }
  function na(e, t, r, n) {
    ;((tn = si = null), lu(t), (Vi = null), (Ca = 0))
    var l = t.return
    try {
      if (V0(e, l, t, r, at)) {
        ;((xt = 1), Fl(e, Mr(r, e.current)), (nt = null))
        return
      }
    } catch (f) {
      if (l !== null) throw ((nt = l), f)
      ;((xt = 1), Fl(e, Mr(r, e.current)), (nt = null))
      return
    }
    t.flags & 32768
      ? (ot || n === 1
          ? (e = !0)
          : $i || (at & 536870912) !== 0
            ? (e = !1)
            : ((Ln = e = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = vr.current),
                n !== null && n.tag === 13 && (n.flags |= 16384))),
        By(t, e))
      : oo(t)
  }
  function oo(e) {
    var t = e
    do {
      if ((t.flags & 32768) !== 0) {
        By(t, Ln)
        return
      }
      e = t.return
      var r = W0(t.alternate, t, hn)
      if (r !== null) {
        nt = r
        return
      }
      if (((t = t.sibling), t !== null)) {
        nt = t
        return
      }
      nt = t = e
    } while (t !== null)
    xt === 0 && (xt = 5)
  }
  function By(e, t) {
    do {
      var r = X0(e.alternate, e)
      if (r !== null) {
        ;((r.flags &= 32767), (nt = r))
        return
      }
      if (
        ((r = e.return),
        r !== null &&
          ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        nt = e
        return
      }
      nt = e = r
    } while (e !== null)
    ;((xt = 6), (nt = null))
  }
  function ky(e, t, r, n, l, f, C, L, Z) {
    e.cancelPendingCommit = null
    do so()
    while (It !== 0)
    if ((ct & 6) !== 0) throw Error(c(327))
    if (t !== null) {
      if (t === e.current) throw Error(c(177))
      if (
        ((f = t.lanes | t.childLanes),
        (f |= Us),
        W(e, r, f, C, L, Z),
        e === mt && ((nt = mt = null), (at = 0)),
        (ta = t),
        (qn = e),
        (dn = r),
        (Hu = f),
        (Pu = l),
        (Ty = n),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            s_(U, function () {
              return (Hy(), null)
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (n = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || n)
      ) {
        ;((n = K.T), (K.T = null), (l = P.p), (P.p = 2), (C = ct), (ct |= 4))
        try {
          Z0(e, t, r)
        } finally {
          ;((ct = C), (P.p = l), (K.T = n))
        }
      }
      ;((It = 1), Ly(), Iy(), zy())
    }
  }
  function Ly() {
    if (It === 1) {
      It = 0
      var e = qn,
        t = ta,
        r = (t.flags & 13878) !== 0
      if ((t.subtreeFlags & 13878) !== 0 || r) {
        ;((r = K.T), (K.T = null))
        var n = P.p
        P.p = 2
        var l = ct
        ct |= 4
        try {
          my(t, e)
          var f = nc,
            C = Ed(e.containerInfo),
            L = f.focusedElem,
            Z = f.selectionRange
          if (
            C !== L &&
            L &&
            L.ownerDocument &&
            wd(L.ownerDocument.documentElement, L)
          ) {
            if (Z !== null && Ms(L)) {
              var ve = Z.start,
                je = Z.end
              if ((je === void 0 && (je = ve), 'selectionStart' in L))
                ((L.selectionStart = ve),
                  (L.selectionEnd = Math.min(je, L.value.length)))
              else {
                var Le = L.ownerDocument || document,
                  _e = (Le && Le.defaultView) || window
                if (_e.getSelection) {
                  var Ee = _e.getSelection(),
                    Qe = L.textContent.length,
                    We = Math.min(Z.start, Qe),
                    yt = Z.end === void 0 ? We : Math.min(Z.end, Qe)
                  !Ee.extend && We > yt && ((C = yt), (yt = We), (We = C))
                  var pe = Sd(L, We),
                    ae = Sd(L, yt)
                  if (
                    pe &&
                    ae &&
                    (Ee.rangeCount !== 1 ||
                      Ee.anchorNode !== pe.node ||
                      Ee.anchorOffset !== pe.offset ||
                      Ee.focusNode !== ae.node ||
                      Ee.focusOffset !== ae.offset)
                  ) {
                    var be = Le.createRange()
                    ;(be.setStart(pe.node, pe.offset),
                      Ee.removeAllRanges(),
                      We > yt
                        ? (Ee.addRange(be), Ee.extend(ae.node, ae.offset))
                        : (be.setEnd(ae.node, ae.offset), Ee.addRange(be)))
                  }
                }
              }
            }
            for (Le = [], Ee = L; (Ee = Ee.parentNode); )
              Ee.nodeType === 1 &&
                Le.push({ element: Ee, left: Ee.scrollLeft, top: Ee.scrollTop })
            for (
              typeof L.focus == 'function' && L.focus(), L = 0;
              L < Le.length;
              L++
            ) {
              var ke = Le[L]
              ;((ke.element.scrollLeft = ke.left),
                (ke.element.scrollTop = ke.top))
            }
          }
          ;((So = !!rc), (nc = rc = null))
        } finally {
          ;((ct = l), (P.p = n), (K.T = r))
        }
      }
      ;((e.current = t), (It = 2))
    }
  }
  function Iy() {
    if (It === 2) {
      It = 0
      var e = qn,
        t = ta,
        r = (t.flags & 8772) !== 0
      if ((t.subtreeFlags & 8772) !== 0 || r) {
        ;((r = K.T), (K.T = null))
        var n = P.p
        P.p = 2
        var l = ct
        ct |= 4
        try {
          hy(e, t.alternate, t)
        } finally {
          ;((ct = l), (P.p = n), (K.T = r))
        }
      }
      It = 3
    }
  }
  function zy() {
    if (It === 4 || It === 3) {
      ;((It = 0), Ie())
      var e = qn,
        t = ta,
        r = dn,
        n = Ty
      ;(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (It = 5)
        : ((It = 0), (ta = qn = null), qy(e, e.pendingLanes))
      var l = e.pendingLanes
      if (
        (l === 0 && (zn = null),
        kt(r),
        (t = t.stateNode),
        me && typeof me.onCommitFiberRoot == 'function')
      )
        try {
          me.onCommitFiberRoot(se, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
      if (n !== null) {
        ;((t = K.T), (l = P.p), (P.p = 2), (K.T = null))
        try {
          for (var f = e.onRecoverableError, C = 0; C < n.length; C++) {
            var L = n[C]
            f(L.value, { componentStack: L.stack })
          }
        } finally {
          ;((K.T = t), (P.p = l))
        }
      }
      ;((dn & 3) !== 0 && so(),
        Gr(e),
        (l = e.pendingLanes),
        (r & 261930) !== 0 && (l & 42) !== 0
          ? e === Gu
            ? Ka++
            : ((Ka = 0), (Gu = e))
          : (Ka = 0),
        Fa(0))
    }
  }
  function qy(e, t) {
    ;(e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ma(t)))
  }
  function so() {
    return (Ly(), Iy(), zy(), Hy())
  }
  function Hy() {
    if (It !== 5) return !1
    var e = qn,
      t = Hu
    Hu = 0
    var r = kt(dn),
      n = K.T,
      l = P.p
    try {
      ;((P.p = 32 > r ? 32 : r), (K.T = null), (r = Pu), (Pu = null))
      var f = qn,
        C = dn
      if (((It = 0), (ta = qn = null), (dn = 0), (ct & 6) !== 0))
        throw Error(c(331))
      var L = ct
      if (
        ((ct |= 4),
        wy(f.current),
        vy(f, f.current, C, r),
        (ct = L),
        Fa(0, !1),
        me && typeof me.onPostCommitFiberRoot == 'function')
      )
        try {
          me.onPostCommitFiberRoot(se, f)
        } catch {}
      return !0
    } finally {
      ;((P.p = l), (K.T = n), qy(e, t))
    }
  }
  function Py(e, t, r) {
    ;((t = Mr(r, t)),
      (t = Su(e.stateNode, t, 2)),
      (e = Un(e, t, 2)),
      e !== null && (z(e, 2), Gr(e)))
  }
  function ht(e, t, r) {
    if (e.tag === 3) Py(e, e, r)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Py(t, e, r)
          break
        } else if (t.tag === 1) {
          var n = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof n.componentDidCatch == 'function' &&
              (zn === null || !zn.has(n)))
          ) {
            ;((e = Mr(r, e)),
              (r = Gp(2)),
              (n = Un(t, r, 2)),
              n !== null && (Yp(r, n, t, e), z(n, 2), Gr(n)))
            break
          }
        }
        t = t.return
      }
  }
  function Vu(e, t, r) {
    var n = e.pingCache
    if (n === null) {
      n = e.pingCache = new e_()
      var l = new Set()
      n.set(t, l)
    } else ((l = n.get(t)), l === void 0 && ((l = new Set()), n.set(t, l)))
    l.has(r) ||
      ((Iu = !0), l.add(r), (e = a_.bind(null, e, t, r)), t.then(e, e))
  }
  function a_(e, t, r) {
    var n = e.pingCache
    ;(n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & r),
      (e.warmLanes &= ~r),
      mt === e &&
        (at & r) === r &&
        (xt === 4 || (xt === 3 && (at & 62914560) === at && 300 > Se() - ro)
          ? (ct & 2) === 0 && ra(e, 0)
          : (zu |= r),
        ea === at && (ea = 0)),
      Gr(e))
  }
  function Gy(e, t) {
    ;(t === 0 && (t = Kr()), (e = ai(e, t)), e !== null && (z(e, t), Gr(e)))
  }
  function l_(e) {
    var t = e.memoizedState,
      r = 0
    ;(t !== null && (r = t.retryLane), Gy(e, r))
  }
  function o_(e, t) {
    var r = 0
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode,
          l = e.memoizedState
        l !== null && (r = l.retryLane)
        break
      case 19:
        n = e.stateNode
        break
      case 22:
        n = e.stateNode._retryCache
        break
      default:
        throw Error(c(314))
    }
    ;(n !== null && n.delete(t), Gy(e, r))
  }
  function s_(e, t) {
    return Be(e, t)
  }
  var uo = null,
    ia = null,
    Ku = !1,
    co = !1,
    Fu = !1,
    Pn = 0
  function Gr(e) {
    ;(e !== ia &&
      e.next === null &&
      (ia === null ? (uo = ia = e) : (ia = ia.next = e)),
      (co = !0),
      Ku || ((Ku = !0), c_()))
  }
  function Fa(e, t) {
    if (!Fu && co) {
      Fu = !0
      do
        for (var r = !1, n = uo; n !== null; ) {
          if (e !== 0) {
            var l = n.pendingLanes
            if (l === 0) var f = 0
            else {
              var C = n.suspendedLanes,
                L = n.pingedLanes
              ;((f = (1 << (31 - Pe(42 | e) + 1)) - 1),
                (f &= l & ~(C & ~L)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0))
            }
            f !== 0 && ((r = !0), Ky(n, f))
          } else
            ((f = at),
              (f = $t(
                n,
                n === mt ? f : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1
              )),
              (f & 3) === 0 || Bt(n, f) || ((r = !0), Ky(n, f)))
          n = n.next
        }
      while (r)
      Fu = !1
    }
  }
  function u_() {
    Yy()
  }
  function Yy() {
    co = Ku = !1
    var e = 0
    Pn !== 0 && __() && (e = Pn)
    for (var t = Se(), r = null, n = uo; n !== null; ) {
      var l = n.next,
        f = Qy(n, t)
      ;(f === 0
        ? ((n.next = null),
          r === null ? (uo = l) : (r.next = l),
          l === null && (ia = r))
        : ((r = n), (e !== 0 || (f & 3) !== 0) && (co = !0)),
        (n = l))
    }
    ;((It !== 0 && It !== 5) || Fa(e), Pn !== 0 && (Pn = 0))
  }
  function Qy(e, t) {
    for (
      var r = e.suspendedLanes,
        n = e.pingedLanes,
        l = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;
    ) {
      var C = 31 - Pe(f),
        L = 1 << C,
        Z = l[C]
      ;(Z === -1
        ? ((L & r) === 0 || (L & n) !== 0) && (l[C] = Ti(L, t))
        : Z <= t && (e.expiredLanes |= L),
        (f &= ~L))
    }
    if (
      ((t = mt),
      (r = at),
      (r = $t(
        e,
        e === t ? r : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (n = e.callbackNode),
      r === 0 ||
        (e === t && (ft === 2 || ft === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && ie(n),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      )
    if ((r & 3) === 0 || Bt(e, r)) {
      if (((t = r & -r), t === e.callbackPriority)) return t
      switch ((n !== null && ie(n), kt(r))) {
        case 2:
        case 8:
          r = R
          break
        case 32:
          r = U
          break
        case 268435456:
          r = de
          break
        default:
          r = U
      }
      return (
        (n = Vy.bind(null, e)),
        (r = Be(r, n)),
        (e.callbackPriority = t),
        (e.callbackNode = r),
        t
      )
    }
    return (
      n !== null && n !== null && ie(n),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    )
  }
  function Vy(e, t) {
    if (It !== 0 && It !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null)
    var r = e.callbackNode
    if (so() && e.callbackNode !== r) return null
    var n = at
    return (
      (n = $t(
        e,
        e === mt ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      n === 0
        ? null
        : (xy(e, n, t),
          Qy(e, Se()),
          e.callbackNode != null && e.callbackNode === r
            ? Vy.bind(null, e)
            : null)
    )
  }
  function Ky(e, t) {
    if (so()) return null
    xy(e, t, !0)
  }
  function c_() {
    w_(function () {
      ;(ct & 6) !== 0 ? Be(m, u_) : Yy()
    })
  }
  function Wu() {
    if (Pn === 0) {
      var e = Gi
      ;(e === 0 && ((e = Zt), (Zt <<= 1), (Zt & 261888) === 0 && (Zt = 256)),
        (Pn = e))
    }
    return Pn
  }
  function Fy(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : bl('' + e)
  }
  function Wy(e, t) {
    var r = t.ownerDocument.createElement('input')
    return (
      (r.name = t.name),
      (r.value = t.value),
      e.id && r.setAttribute('form', e.id),
      t.parentNode.insertBefore(r, t),
      (e = new FormData(e)),
      r.parentNode.removeChild(r),
      e
    )
  }
  function f_(e, t, r, n, l) {
    if (t === 'submit' && r && r.stateNode === l) {
      var f = Fy((l[Lt] || null).action),
        C = n.submitter
      C &&
        ((t = (t = C[Lt] || null)
          ? Fy(t.formAction)
          : C.getAttribute('formAction')),
        t !== null && ((f = t), (C = null)))
      var L = new wl('action', 'action', null, n, l)
      e.push({
        event: L,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (Pn !== 0) {
                  var Z = C ? Wy(l, C) : new FormData(l)
                  yu(
                    r,
                    { pending: !0, data: Z, method: l.method, action: f },
                    null,
                    Z
                  )
                }
              } else
                typeof f == 'function' &&
                  (L.preventDefault(),
                  (Z = C ? Wy(l, C) : new FormData(l)),
                  yu(
                    r,
                    { pending: !0, data: Z, method: l.method, action: f },
                    f,
                    Z
                  ))
            },
            currentTarget: l,
          },
        ],
      })
    }
  }
  for (var Xu = 0; Xu < Ns.length; Xu++) {
    var Zu = Ns[Xu],
      h_ = Zu.toLowerCase(),
      d_ = Zu[0].toUpperCase() + Zu.slice(1)
    Br(h_, 'on' + d_)
  }
  ;(Br(Od, 'onAnimationEnd'),
    Br(xd, 'onAnimationIteration'),
    Br(Md, 'onAnimationStart'),
    Br('dblclick', 'onDoubleClick'),
    Br('focusin', 'onFocus'),
    Br('focusout', 'onBlur'),
    Br(R0, 'onTransitionRun'),
    Br(C0, 'onTransitionStart'),
    Br(j0, 'onTransitionCancel'),
    Br(Rd, 'onTransitionEnd'),
    Ri('onMouseEnter', ['mouseout', 'mouseover']),
    Ri('onMouseLeave', ['mouseout', 'mouseover']),
    Ri('onPointerEnter', ['pointerout', 'pointerover']),
    Ri('onPointerLeave', ['pointerout', 'pointerover']),
    ti(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    ti(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    ti('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    ti(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    ti(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    ti(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ))
  var Wa =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    p_ = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Wa)
    )
  function Xy(e, t) {
    t = (t & 4) !== 0
    for (var r = 0; r < e.length; r++) {
      var n = e[r],
        l = n.event
      n = n.listeners
      e: {
        var f = void 0
        if (t)
          for (var C = n.length - 1; 0 <= C; C--) {
            var L = n[C],
              Z = L.instance,
              ve = L.currentTarget
            if (((L = L.listener), Z !== f && l.isPropagationStopped())) break e
            ;((f = L), (l.currentTarget = ve))
            try {
              f(l)
            } catch (je) {
              Tl(je)
            }
            ;((l.currentTarget = null), (f = Z))
          }
        else
          for (C = 0; C < n.length; C++) {
            if (
              ((L = n[C]),
              (Z = L.instance),
              (ve = L.currentTarget),
              (L = L.listener),
              Z !== f && l.isPropagationStopped())
            )
              break e
            ;((f = L), (l.currentTarget = ve))
            try {
              f(l)
            } catch (je) {
              Tl(je)
            }
            ;((l.currentTarget = null), (f = Z))
          }
      }
    }
  }
  function it(e, t) {
    var r = t[or]
    r === void 0 && (r = t[or] = new Set())
    var n = e + '__bubble'
    r.has(n) || (Zy(t, e, 2, !1), r.add(n))
  }
  function Ju(e, t, r) {
    var n = 0
    ;(t && (n |= 4), Zy(r, e, n, t))
  }
  var fo = '_reactListening' + Math.random().toString(36).slice(2)
  function $u(e) {
    if (!e[fo]) {
      ;((e[fo] = !0),
        Yh.forEach(function (r) {
          r !== 'selectionchange' && (p_.has(r) || Ju(r, !1, e), Ju(r, !0, e))
        }))
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[fo] || ((t[fo] = !0), Ju('selectionchange', !1, t))
    }
  }
  function Zy(e, t, r, n) {
    switch (Og(t)) {
      case 2:
        var l = P_
        break
      case 8:
        l = G_
        break
      default:
        l = pc
    }
    ;((r = l.bind(null, t, r, e)),
      (l = void 0),
      !vs ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (l = !0),
      n
        ? l !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: l })
          : e.addEventListener(t, r, !0)
        : l !== void 0
          ? e.addEventListener(t, r, { passive: l })
          : e.addEventListener(t, r, !1))
  }
  function ec(e, t, r, n, l) {
    var f = n
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return
        var C = n.tag
        if (C === 3 || C === 4) {
          var L = n.stateNode.containerInfo
          if (L === l) break
          if (C === 4)
            for (C = n.return; C !== null; ) {
              var Z = C.tag
              if ((Z === 3 || Z === 4) && C.stateNode.containerInfo === l)
                return
              C = C.return
            }
          for (; L !== null; ) {
            if (((C = Oi(L)), C === null)) return
            if (((Z = C.tag), Z === 5 || Z === 6 || Z === 26 || Z === 27)) {
              n = f = C
              continue e
            }
            L = L.parentNode
          }
        }
        n = n.return
      }
    rd(function () {
      var ve = f,
        je = ms(r),
        Le = []
      e: {
        var _e = Cd.get(e)
        if (_e !== void 0) {
          var Ee = wl,
            Qe = e
          switch (e) {
            case 'keypress':
              if (_l(r) === 0) break e
            case 'keydown':
            case 'keyup':
              Ee = o0
              break
            case 'focusin':
              ;((Qe = 'focus'), (Ee = Es))
              break
            case 'focusout':
              ;((Qe = 'blur'), (Ee = Es))
              break
            case 'beforeblur':
            case 'afterblur':
              Ee = Es
              break
            case 'click':
              if (r.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              Ee = ad
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Ee = Wv
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Ee = c0
              break
            case Od:
            case xd:
            case Md:
              Ee = Jv
              break
            case Rd:
              Ee = h0
              break
            case 'scroll':
            case 'scrollend':
              Ee = Kv
              break
            case 'wheel':
              Ee = p0
              break
            case 'copy':
            case 'cut':
            case 'paste':
              Ee = e0
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Ee = od
              break
            case 'toggle':
            case 'beforetoggle':
              Ee = g0
          }
          var We = (t & 4) !== 0,
            yt = !We && (e === 'scroll' || e === 'scrollend'),
            pe = We ? (_e !== null ? _e + 'Capture' : null) : _e
          We = []
          for (var ae = ve, be; ae !== null; ) {
            var ke = ae
            if (
              ((be = ke.stateNode),
              (ke = ke.tag),
              (ke !== 5 && ke !== 26 && ke !== 27) ||
                be === null ||
                pe === null ||
                ((ke = ma(ae, pe)), ke != null && We.push(Xa(ae, ke, be))),
              yt)
            )
              break
            ae = ae.return
          }
          0 < We.length &&
            ((_e = new Ee(_e, Qe, null, r, je)),
            Le.push({ event: _e, listeners: We }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((_e = e === 'mouseover' || e === 'pointerover'),
            (Ee = e === 'mouseout' || e === 'pointerout'),
            _e &&
              r !== gs &&
              (Qe = r.relatedTarget || r.fromElement) &&
              (Oi(Qe) || Qe[lr]))
          )
            break e
          if (
            (Ee || _e) &&
            ((_e =
              je.window === je
                ? je
                : (_e = je.ownerDocument)
                  ? _e.defaultView || _e.parentWindow
                  : window),
            Ee
              ? ((Qe = r.relatedTarget || r.toElement),
                (Ee = ve),
                (Qe = Qe ? Oi(Qe) : null),
                Qe !== null &&
                  ((yt = s(Qe)),
                  (We = Qe.tag),
                  Qe !== yt || (We !== 5 && We !== 27 && We !== 6)) &&
                  (Qe = null))
              : ((Ee = null), (Qe = ve)),
            Ee !== Qe)
          ) {
            if (
              ((We = ad),
              (ke = 'onMouseLeave'),
              (pe = 'onMouseEnter'),
              (ae = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((We = od),
                (ke = 'onPointerLeave'),
                (pe = 'onPointerEnter'),
                (ae = 'pointer')),
              (yt = Ee == null ? _e : ga(Ee)),
              (be = Qe == null ? _e : ga(Qe)),
              (_e = new We(ke, ae + 'leave', Ee, r, je)),
              (_e.target = yt),
              (_e.relatedTarget = be),
              (ke = null),
              Oi(je) === ve &&
                ((We = new We(pe, ae + 'enter', Qe, r, je)),
                (We.target = be),
                (We.relatedTarget = yt),
                (ke = We)),
              (yt = ke),
              Ee && Qe)
            )
              t: {
                for (
                  We = y_, pe = Ee, ae = Qe, be = 0, ke = pe;
                  ke;
                  ke = We(ke)
                )
                  be++
                ke = 0
                for (var Fe = ae; Fe; Fe = We(Fe)) ke++
                for (; 0 < be - ke; ) ((pe = We(pe)), be--)
                for (; 0 < ke - be; ) ((ae = We(ae)), ke--)
                for (; be--; ) {
                  if (pe === ae || (ae !== null && pe === ae.alternate)) {
                    We = pe
                    break t
                  }
                  ;((pe = We(pe)), (ae = We(ae)))
                }
                We = null
              }
            else We = null
            ;(Ee !== null && Jy(Le, _e, Ee, We, !1),
              Qe !== null && yt !== null && Jy(Le, yt, Qe, We, !0))
          }
        }
        e: {
          if (
            ((_e = ve ? ga(ve) : window),
            (Ee = _e.nodeName && _e.nodeName.toLowerCase()),
            Ee === 'select' || (Ee === 'input' && _e.type === 'file'))
          )
            var st = yd
          else if (dd(_e))
            if (gd) st = O0
            else {
              st = A0
              var Ve = E0
            }
          else
            ((Ee = _e.nodeName),
              !Ee ||
              Ee.toLowerCase() !== 'input' ||
              (_e.type !== 'checkbox' && _e.type !== 'radio')
                ? ve && ys(ve.elementType) && (st = yd)
                : (st = T0))
          if (st && (st = st(e, ve))) {
            pd(Le, st, r, je)
            break e
          }
          ;(Ve && Ve(e, _e, ve),
            e === 'focusout' &&
              ve &&
              _e.type === 'number' &&
              ve.memoizedProps.value != null &&
              ps(_e, 'number', _e.value))
        }
        switch (((Ve = ve ? ga(ve) : window), e)) {
          case 'focusin':
            ;(dd(Ve) || Ve.contentEditable === 'true') &&
              ((Bi = Ve), (Rs = ve), (Ta = null))
            break
          case 'focusout':
            Ta = Rs = Bi = null
            break
          case 'mousedown':
            Cs = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;((Cs = !1), Ad(Le, r, je))
            break
          case 'selectionchange':
            if (M0) break
          case 'keydown':
          case 'keyup':
            Ad(Le, r, je)
        }
        var rt
        if (Ts)
          e: {
            switch (e) {
              case 'compositionstart':
                var lt = 'onCompositionStart'
                break e
              case 'compositionend':
                lt = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                lt = 'onCompositionUpdate'
                break e
            }
            lt = void 0
          }
        else
          Di
            ? fd(e, r) && (lt = 'onCompositionEnd')
            : e === 'keydown' &&
              r.keyCode === 229 &&
              (lt = 'onCompositionStart')
        ;(lt &&
          (sd &&
            r.locale !== 'ko' &&
            (Di || lt !== 'onCompositionStart'
              ? lt === 'onCompositionEnd' && Di && (rt = nd())
              : ((On = je),
                (_s = 'value' in On ? On.value : On.textContent),
                (Di = !0))),
          (Ve = ho(ve, lt)),
          0 < Ve.length &&
            ((lt = new ld(lt, e, null, r, je)),
            Le.push({ event: lt, listeners: Ve }),
            rt
              ? (lt.data = rt)
              : ((rt = hd(r)), rt !== null && (lt.data = rt)))),
          (rt = b0 ? v0(e, r) : _0(e, r)) &&
            ((lt = ho(ve, 'onBeforeInput')),
            0 < lt.length &&
              ((Ve = new ld('onBeforeInput', 'beforeinput', null, r, je)),
              Le.push({ event: Ve, listeners: lt }),
              (Ve.data = rt))),
          f_(Le, e, ve, r, je))
      }
      Xy(Le, t)
    })
  }
  function Xa(e, t, r) {
    return { instance: e, listener: t, currentTarget: r }
  }
  function ho(e, t) {
    for (var r = t + 'Capture', n = []; e !== null; ) {
      var l = e,
        f = l.stateNode
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          f === null ||
          ((l = ma(e, r)),
          l != null && n.unshift(Xa(e, l, f)),
          (l = ma(e, t)),
          l != null && n.push(Xa(e, l, f))),
        e.tag === 3)
      )
        return n
      e = e.return
    }
    return []
  }
  function y_(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5 && e.tag !== 27)
    return e || null
  }
  function Jy(e, t, r, n, l) {
    for (var f = t._reactName, C = []; r !== null && r !== n; ) {
      var L = r,
        Z = L.alternate,
        ve = L.stateNode
      if (((L = L.tag), Z !== null && Z === n)) break
      ;((L !== 5 && L !== 26 && L !== 27) ||
        ve === null ||
        ((Z = ve),
        l
          ? ((ve = ma(r, f)), ve != null && C.unshift(Xa(r, ve, Z)))
          : l || ((ve = ma(r, f)), ve != null && C.push(Xa(r, ve, Z)))),
        (r = r.return))
    }
    C.length !== 0 && e.push({ event: t, listeners: C })
  }
  var g_ = /\r\n?/g,
    m_ = /\u0000|\uFFFD/g
  function $y(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        g_,
        `
`
      )
      .replace(m_, '')
  }
  function eg(e, t) {
    return ((t = $y(t)), $y(e) === t)
  }
  function pt(e, t, r, n, l, f) {
    switch (r) {
      case 'children':
        typeof n == 'string'
          ? t === 'body' || (t === 'textarea' && n === '') || ji(e, n)
          : (typeof n == 'number' || typeof n == 'bigint') &&
            t !== 'body' &&
            ji(e, '' + n)
        break
      case 'className':
        gl(e, 'class', n)
        break
      case 'tabIndex':
        gl(e, 'tabindex', n)
        break
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        gl(e, r, n)
        break
      case 'style':
        ed(e, n, f)
        break
      case 'data':
        if (t !== 'object') {
          gl(e, 'data', n)
          break
        }
      case 'src':
      case 'href':
        if (n === '' && (t !== 'a' || r !== 'href')) {
          e.removeAttribute(r)
          break
        }
        if (
          n == null ||
          typeof n == 'function' ||
          typeof n == 'symbol' ||
          typeof n == 'boolean'
        ) {
          e.removeAttribute(r)
          break
        }
        ;((n = bl('' + n)), e.setAttribute(r, n))
        break
      case 'action':
      case 'formAction':
        if (typeof n == 'function') {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          )
          break
        } else
          typeof f == 'function' &&
            (r === 'formAction'
              ? (t !== 'input' && pt(e, t, 'name', l.name, l, null),
                pt(e, t, 'formEncType', l.formEncType, l, null),
                pt(e, t, 'formMethod', l.formMethod, l, null),
                pt(e, t, 'formTarget', l.formTarget, l, null))
              : (pt(e, t, 'encType', l.encType, l, null),
                pt(e, t, 'method', l.method, l, null),
                pt(e, t, 'target', l.target, l, null)))
        if (n == null || typeof n == 'symbol' || typeof n == 'boolean') {
          e.removeAttribute(r)
          break
        }
        ;((n = bl('' + n)), e.setAttribute(r, n))
        break
      case 'onClick':
        n != null && (e.onclick = Zr)
        break
      case 'onScroll':
        n != null && it('scroll', e)
        break
      case 'onScrollEnd':
        n != null && it('scrollend', e)
        break
      case 'dangerouslySetInnerHTML':
        if (n != null) {
          if (typeof n != 'object' || !('__html' in n)) throw Error(c(61))
          if (((r = n.__html), r != null)) {
            if (l.children != null) throw Error(c(60))
            e.innerHTML = r
          }
        }
        break
      case 'multiple':
        e.multiple = n && typeof n != 'function' && typeof n != 'symbol'
        break
      case 'muted':
        e.muted = n && typeof n != 'function' && typeof n != 'symbol'
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break
      case 'autoFocus':
        break
      case 'xlinkHref':
        if (
          n == null ||
          typeof n == 'function' ||
          typeof n == 'boolean' ||
          typeof n == 'symbol'
        ) {
          e.removeAttribute('xlink:href')
          break
        }
        ;((r = bl('' + n)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', r))
        break
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        n != null && typeof n != 'function' && typeof n != 'symbol'
          ? e.setAttribute(r, '' + n)
          : e.removeAttribute(r)
        break
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        n && typeof n != 'function' && typeof n != 'symbol'
          ? e.setAttribute(r, '')
          : e.removeAttribute(r)
        break
      case 'capture':
      case 'download':
        n === !0
          ? e.setAttribute(r, '')
          : n !== !1 &&
              n != null &&
              typeof n != 'function' &&
              typeof n != 'symbol'
            ? e.setAttribute(r, n)
            : e.removeAttribute(r)
        break
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        n != null &&
        typeof n != 'function' &&
        typeof n != 'symbol' &&
        !isNaN(n) &&
        1 <= n
          ? e.setAttribute(r, n)
          : e.removeAttribute(r)
        break
      case 'rowSpan':
      case 'start':
        n == null || typeof n == 'function' || typeof n == 'symbol' || isNaN(n)
          ? e.removeAttribute(r)
          : e.setAttribute(r, n)
        break
      case 'popover':
        ;(it('beforetoggle', e), it('toggle', e), yl(e, 'popover', n))
        break
      case 'xlinkActuate':
        Xr(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', n)
        break
      case 'xlinkArcrole':
        Xr(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', n)
        break
      case 'xlinkRole':
        Xr(e, 'http://www.w3.org/1999/xlink', 'xlink:role', n)
        break
      case 'xlinkShow':
        Xr(e, 'http://www.w3.org/1999/xlink', 'xlink:show', n)
        break
      case 'xlinkTitle':
        Xr(e, 'http://www.w3.org/1999/xlink', 'xlink:title', n)
        break
      case 'xlinkType':
        Xr(e, 'http://www.w3.org/1999/xlink', 'xlink:type', n)
        break
      case 'xmlBase':
        Xr(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', n)
        break
      case 'xmlLang':
        Xr(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', n)
        break
      case 'xmlSpace':
        Xr(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', n)
        break
      case 'is':
        yl(e, 'is', n)
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        ;(!(2 < r.length) ||
          (r[0] !== 'o' && r[0] !== 'O') ||
          (r[1] !== 'n' && r[1] !== 'N')) &&
          ((r = Qv.get(r) || r), yl(e, r, n))
    }
  }
  function tc(e, t, r, n, l, f) {
    switch (r) {
      case 'style':
        ed(e, n, f)
        break
      case 'dangerouslySetInnerHTML':
        if (n != null) {
          if (typeof n != 'object' || !('__html' in n)) throw Error(c(61))
          if (((r = n.__html), r != null)) {
            if (l.children != null) throw Error(c(60))
            e.innerHTML = r
          }
        }
        break
      case 'children':
        typeof n == 'string'
          ? ji(e, n)
          : (typeof n == 'number' || typeof n == 'bigint') && ji(e, '' + n)
        break
      case 'onScroll':
        n != null && it('scroll', e)
        break
      case 'onScrollEnd':
        n != null && it('scrollend', e)
        break
      case 'onClick':
        n != null && (e.onclick = Zr)
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        if (!Qh.hasOwnProperty(r))
          e: {
            if (
              r[0] === 'o' &&
              r[1] === 'n' &&
              ((l = r.endsWith('Capture')),
              (t = r.slice(2, l ? r.length - 7 : void 0)),
              (f = e[Lt] || null),
              (f = f != null ? f[r] : null),
              typeof f == 'function' && e.removeEventListener(t, f, l),
              typeof n == 'function')
            ) {
              ;(typeof f != 'function' &&
                f !== null &&
                (r in e
                  ? (e[r] = null)
                  : e.hasAttribute(r) && e.removeAttribute(r)),
                e.addEventListener(t, n, l))
              break e
            }
            r in e ? (e[r] = n) : n === !0 ? e.setAttribute(r, '') : yl(e, r, n)
          }
    }
  }
  function Vt(e, t, r) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'img':
        ;(it('error', e), it('load', e))
        var n = !1,
          l = !1,
          f
        for (f in r)
          if (r.hasOwnProperty(f)) {
            var C = r[f]
            if (C != null)
              switch (f) {
                case 'src':
                  n = !0
                  break
                case 'srcSet':
                  l = !0
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(c(137, t))
                default:
                  pt(e, t, f, C, r, null)
              }
          }
        ;(l && pt(e, t, 'srcSet', r.srcSet, r, null),
          n && pt(e, t, 'src', r.src, r, null))
        return
      case 'input':
        it('invalid', e)
        var L = (f = C = l = null),
          Z = null,
          ve = null
        for (n in r)
          if (r.hasOwnProperty(n)) {
            var je = r[n]
            if (je != null)
              switch (n) {
                case 'name':
                  l = je
                  break
                case 'type':
                  C = je
                  break
                case 'checked':
                  Z = je
                  break
                case 'defaultChecked':
                  ve = je
                  break
                case 'value':
                  f = je
                  break
                case 'defaultValue':
                  L = je
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (je != null) throw Error(c(137, t))
                  break
                default:
                  pt(e, t, n, je, r, null)
              }
          }
        Xh(e, f, L, Z, ve, C, l, !1)
        return
      case 'select':
        ;(it('invalid', e), (n = C = f = null))
        for (l in r)
          if (r.hasOwnProperty(l) && ((L = r[l]), L != null))
            switch (l) {
              case 'value':
                f = L
                break
              case 'defaultValue':
                C = L
                break
              case 'multiple':
                n = L
              default:
                pt(e, t, l, L, r, null)
            }
        ;((t = f),
          (r = C),
          (e.multiple = !!n),
          t != null ? Ci(e, !!n, t, !1) : r != null && Ci(e, !!n, r, !0))
        return
      case 'textarea':
        ;(it('invalid', e), (f = l = n = null))
        for (C in r)
          if (r.hasOwnProperty(C) && ((L = r[C]), L != null))
            switch (C) {
              case 'value':
                n = L
                break
              case 'defaultValue':
                l = L
                break
              case 'children':
                f = L
                break
              case 'dangerouslySetInnerHTML':
                if (L != null) throw Error(c(91))
                break
              default:
                pt(e, t, C, L, r, null)
            }
        Jh(e, n, l, f)
        return
      case 'option':
        for (Z in r)
          r.hasOwnProperty(Z) &&
            ((n = r[Z]), n != null) &&
            (Z === 'selected'
              ? (e.selected =
                  n && typeof n != 'function' && typeof n != 'symbol')
              : pt(e, t, Z, n, r, null))
        return
      case 'dialog':
        ;(it('beforetoggle', e),
          it('toggle', e),
          it('cancel', e),
          it('close', e))
        break
      case 'iframe':
      case 'object':
        it('load', e)
        break
      case 'video':
      case 'audio':
        for (n = 0; n < Wa.length; n++) it(Wa[n], e)
        break
      case 'image':
        ;(it('error', e), it('load', e))
        break
      case 'details':
        it('toggle', e)
        break
      case 'embed':
      case 'source':
      case 'link':
        ;(it('error', e), it('load', e))
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (ve in r)
          if (r.hasOwnProperty(ve) && ((n = r[ve]), n != null))
            switch (ve) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(c(137, t))
              default:
                pt(e, t, ve, n, r, null)
            }
        return
      default:
        if (ys(t)) {
          for (je in r)
            r.hasOwnProperty(je) &&
              ((n = r[je]), n !== void 0 && tc(e, t, je, n, r, void 0))
          return
        }
    }
    for (L in r)
      r.hasOwnProperty(L) && ((n = r[L]), n != null && pt(e, t, L, n, r, null))
  }
  function b_(e, t, r, n) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'input':
        var l = null,
          f = null,
          C = null,
          L = null,
          Z = null,
          ve = null,
          je = null
        for (Ee in r) {
          var Le = r[Ee]
          if (r.hasOwnProperty(Ee) && Le != null)
            switch (Ee) {
              case 'checked':
                break
              case 'value':
                break
              case 'defaultValue':
                Z = Le
              default:
                n.hasOwnProperty(Ee) || pt(e, t, Ee, null, n, Le)
            }
        }
        for (var _e in n) {
          var Ee = n[_e]
          if (
            ((Le = r[_e]), n.hasOwnProperty(_e) && (Ee != null || Le != null))
          )
            switch (_e) {
              case 'type':
                f = Ee
                break
              case 'name':
                l = Ee
                break
              case 'checked':
                ve = Ee
                break
              case 'defaultChecked':
                je = Ee
                break
              case 'value':
                C = Ee
                break
              case 'defaultValue':
                L = Ee
                break
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Ee != null) throw Error(c(137, t))
                break
              default:
                Ee !== Le && pt(e, t, _e, Ee, n, Le)
            }
        }
        ds(e, C, L, Z, ve, je, f, l)
        return
      case 'select':
        Ee = C = L = _e = null
        for (f in r)
          if (((Z = r[f]), r.hasOwnProperty(f) && Z != null))
            switch (f) {
              case 'value':
                break
              case 'multiple':
                Ee = Z
              default:
                n.hasOwnProperty(f) || pt(e, t, f, null, n, Z)
            }
        for (l in n)
          if (
            ((f = n[l]),
            (Z = r[l]),
            n.hasOwnProperty(l) && (f != null || Z != null))
          )
            switch (l) {
              case 'value':
                _e = f
                break
              case 'defaultValue':
                L = f
                break
              case 'multiple':
                C = f
              default:
                f !== Z && pt(e, t, l, f, n, Z)
            }
        ;((t = L),
          (r = C),
          (n = Ee),
          _e != null
            ? Ci(e, !!r, _e, !1)
            : !!n != !!r &&
              (t != null ? Ci(e, !!r, t, !0) : Ci(e, !!r, r ? [] : '', !1)))
        return
      case 'textarea':
        Ee = _e = null
        for (L in r)
          if (
            ((l = r[L]),
            r.hasOwnProperty(L) && l != null && !n.hasOwnProperty(L))
          )
            switch (L) {
              case 'value':
                break
              case 'children':
                break
              default:
                pt(e, t, L, null, n, l)
            }
        for (C in n)
          if (
            ((l = n[C]),
            (f = r[C]),
            n.hasOwnProperty(C) && (l != null || f != null))
          )
            switch (C) {
              case 'value':
                _e = l
                break
              case 'defaultValue':
                Ee = l
                break
              case 'children':
                break
              case 'dangerouslySetInnerHTML':
                if (l != null) throw Error(c(91))
                break
              default:
                l !== f && pt(e, t, C, l, n, f)
            }
        Zh(e, _e, Ee)
        return
      case 'option':
        for (var Qe in r)
          ((_e = r[Qe]),
            r.hasOwnProperty(Qe) &&
              _e != null &&
              !n.hasOwnProperty(Qe) &&
              (Qe === 'selected'
                ? (e.selected = !1)
                : pt(e, t, Qe, null, n, _e)))
        for (Z in n)
          ((_e = n[Z]),
            (Ee = r[Z]),
            n.hasOwnProperty(Z) &&
              _e !== Ee &&
              (_e != null || Ee != null) &&
              (Z === 'selected'
                ? (e.selected =
                    _e && typeof _e != 'function' && typeof _e != 'symbol')
                : pt(e, t, Z, _e, n, Ee)))
        return
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var We in r)
          ((_e = r[We]),
            r.hasOwnProperty(We) &&
              _e != null &&
              !n.hasOwnProperty(We) &&
              pt(e, t, We, null, n, _e))
        for (ve in n)
          if (
            ((_e = n[ve]),
            (Ee = r[ve]),
            n.hasOwnProperty(ve) && _e !== Ee && (_e != null || Ee != null))
          )
            switch (ve) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (_e != null) throw Error(c(137, t))
                break
              default:
                pt(e, t, ve, _e, n, Ee)
            }
        return
      default:
        if (ys(t)) {
          for (var yt in r)
            ((_e = r[yt]),
              r.hasOwnProperty(yt) &&
                _e !== void 0 &&
                !n.hasOwnProperty(yt) &&
                tc(e, t, yt, void 0, n, _e))
          for (je in n)
            ((_e = n[je]),
              (Ee = r[je]),
              !n.hasOwnProperty(je) ||
                _e === Ee ||
                (_e === void 0 && Ee === void 0) ||
                tc(e, t, je, _e, n, Ee))
          return
        }
    }
    for (var pe in r)
      ((_e = r[pe]),
        r.hasOwnProperty(pe) &&
          _e != null &&
          !n.hasOwnProperty(pe) &&
          pt(e, t, pe, null, n, _e))
    for (Le in n)
      ((_e = n[Le]),
        (Ee = r[Le]),
        !n.hasOwnProperty(Le) ||
          _e === Ee ||
          (_e == null && Ee == null) ||
          pt(e, t, Le, _e, n, Ee))
  }
  function tg(e) {
    switch (e) {
      case 'css':
      case 'script':
      case 'font':
      case 'img':
      case 'image':
      case 'input':
      case 'link':
        return !0
      default:
        return !1
    }
  }
  function v_() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, r = performance.getEntriesByType('resource'), n = 0;
        n < r.length;
        n++
      ) {
        var l = r[n],
          f = l.transferSize,
          C = l.initiatorType,
          L = l.duration
        if (f && L && tg(C)) {
          for (C = 0, L = l.responseEnd, n += 1; n < r.length; n++) {
            var Z = r[n],
              ve = Z.startTime
            if (ve > L) break
            var je = Z.transferSize,
              Le = Z.initiatorType
            je &&
              tg(Le) &&
              ((Z = Z.responseEnd),
              (C += je * (Z < L ? 1 : (L - ve) / (Z - ve))))
          }
          if ((--n, (t += (8 * (f + C)) / (l.duration / 1e3)), e++, 10 < e))
            break
        }
      }
      if (0 < e) return t / e / 1e6
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5
  }
  var rc = null,
    nc = null
  function po(e) {
    return e.nodeType === 9 ? e : e.ownerDocument
  }
  function rg(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1
      case 'http://www.w3.org/1998/Math/MathML':
        return 2
      default:
        return 0
    }
  }
  function ng(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1
        case 'math':
          return 2
        default:
          return 0
      }
    return e === 1 && t === 'foreignObject' ? 0 : e
  }
  function ic(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var ac = null
  function __() {
    var e = window.event
    return e && e.type === 'popstate'
      ? e === ac
        ? !1
        : ((ac = e), !0)
      : ((ac = null), !1)
  }
  var ig = typeof setTimeout == 'function' ? setTimeout : void 0,
    S_ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    ag = typeof Promise == 'function' ? Promise : void 0,
    w_ =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof ag < 'u'
          ? function (e) {
              return ag.resolve(null).then(e).catch(E_)
            }
          : ig
  function E_(e) {
    setTimeout(function () {
      throw e
    })
  }
  function Gn(e) {
    return e === 'head'
  }
  function lg(e, t) {
    var r = t,
      n = 0
    do {
      var l = r.nextSibling
      if ((e.removeChild(r), l && l.nodeType === 8))
        if (((r = l.data), r === '/$' || r === '/&')) {
          if (n === 0) {
            ;(e.removeChild(l), sa(t))
            return
          }
          n--
        } else if (
          r === '$' ||
          r === '$?' ||
          r === '$~' ||
          r === '$!' ||
          r === '&'
        )
          n++
        else if (r === 'html') Za(e.ownerDocument.documentElement)
        else if (r === 'head') {
          ;((r = e.ownerDocument.head), Za(r))
          for (var f = r.firstChild; f; ) {
            var C = f.nextSibling,
              L = f.nodeName
            ;(f[er] ||
              L === 'SCRIPT' ||
              L === 'STYLE' ||
              (L === 'LINK' && f.rel.toLowerCase() === 'stylesheet') ||
              r.removeChild(f),
              (f = C))
          }
        } else r === 'body' && Za(e.ownerDocument.body)
      r = l
    } while (r)
    sa(t)
  }
  function og(e, t) {
    var r = e
    e = 0
    do {
      var n = r.nextSibling
      if (
        (r.nodeType === 1
          ? t
            ? ((r._stashedDisplay = r.style.display),
              (r.style.display = 'none'))
            : ((r.style.display = r._stashedDisplay || ''),
              r.getAttribute('style') === '' && r.removeAttribute('style'))
          : r.nodeType === 3 &&
            (t
              ? ((r._stashedText = r.nodeValue), (r.nodeValue = ''))
              : (r.nodeValue = r._stashedText || '')),
        n && n.nodeType === 8)
      )
        if (((r = n.data), r === '/$')) {
          if (e === 0) break
          e--
        } else (r !== '$' && r !== '$?' && r !== '$~' && r !== '$!') || e++
      r = n
    } while (r)
  }
  function lc(e) {
    var t = e.firstChild
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t
      switch (((t = t.nextSibling), r.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          ;(lc(r), fs(r))
          continue
        case 'SCRIPT':
        case 'STYLE':
          continue
        case 'LINK':
          if (r.rel.toLowerCase() === 'stylesheet') continue
      }
      e.removeChild(r)
    }
  }
  function A_(e, t, r, n) {
    for (; e.nodeType === 1; ) {
      var l = r
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break
      } else if (n) {
        if (!e[er])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break
              return e
            case 'link':
              if (
                ((f = e.getAttribute('rel')),
                f === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break
              if (
                f !== l.rel ||
                e.getAttribute('href') !==
                  (l.href == null || l.href === '' ? null : l.href) ||
                e.getAttribute('crossorigin') !==
                  (l.crossOrigin == null ? null : l.crossOrigin) ||
                e.getAttribute('title') !== (l.title == null ? null : l.title)
              )
                break
              return e
            case 'style':
              if (e.hasAttribute('data-precedence')) break
              return e
            case 'script':
              if (
                ((f = e.getAttribute('src')),
                (f !== (l.src == null ? null : l.src) ||
                  e.getAttribute('type') !== (l.type == null ? null : l.type) ||
                  e.getAttribute('crossorigin') !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  f &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break
              return e
            default:
              return e
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var f = l.name == null ? null : '' + l.name
        if (l.type === 'hidden' && e.getAttribute('name') === f) return e
      } else return e
      if (((e = Ur(e.nextSibling)), e === null)) break
    }
    return null
  }
  function T_(e, t, r) {
    if (t === '') return null
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !r) ||
        ((e = Ur(e.nextSibling)), e === null)
      )
        return null
    return e
  }
  function sg(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !t) ||
        ((e = Ur(e.nextSibling)), e === null)
      )
        return null
    return e
  }
  function oc(e) {
    return e.data === '$?' || e.data === '$~'
  }
  function sc(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
    )
  }
  function O_(e, t) {
    var r = e.ownerDocument
    if (e.data === '$~') e._reactRetry = t
    else if (e.data !== '$?' || r.readyState !== 'loading') t()
    else {
      var n = function () {
        ;(t(), r.removeEventListener('DOMContentLoaded', n))
      }
      ;(r.addEventListener('DOMContentLoaded', n), (e._reactRetry = n))
    }
  }
  function Ur(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' ||
            t === '$!' ||
            t === '$?' ||
            t === '$~' ||
            t === '&' ||
            t === 'F!' ||
            t === 'F')
        )
          break
        if (t === '/$' || t === '/&') return null
      }
    }
    return e
  }
  var uc = null
  function ug(e) {
    e = e.nextSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data
        if (r === '/$' || r === '/&') {
          if (t === 0) return Ur(e.nextSibling)
          t--
        } else
          (r !== '$' && r !== '$!' && r !== '$?' && r !== '$~' && r !== '&') ||
            t++
      }
      e = e.nextSibling
    }
    return null
  }
  function cg(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data
        if (r === '$' || r === '$!' || r === '$?' || r === '$~' || r === '&') {
          if (t === 0) return e
          t--
        } else (r !== '/$' && r !== '/&') || t++
      }
      e = e.previousSibling
    }
    return null
  }
  function fg(e, t, r) {
    switch (((t = po(r)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(c(452))
        return e
      case 'head':
        if (((e = t.head), !e)) throw Error(c(453))
        return e
      case 'body':
        if (((e = t.body), !e)) throw Error(c(454))
        return e
      default:
        throw Error(c(451))
    }
  }
  function Za(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0])
    fs(e)
  }
  var Dr = new Map(),
    hg = new Set()
  function yo(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument
  }
  var pn = P.d
  P.d = { f: x_, r: M_, D: R_, C: C_, L: j_, m: N_, X: D_, S: U_, M: B_ }
  function x_() {
    var e = pn.f(),
      t = ao()
    return e || t
  }
  function M_(e) {
    var t = xi(e)
    t !== null && t.tag === 5 && t.type === 'form' ? Rp(t) : pn.r(e)
  }
  var aa = typeof document > 'u' ? null : document
  function dg(e, t, r) {
    var n = aa
    if (n && typeof t == 'string' && t) {
      var l = Or(t)
      ;((l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof r == 'string' && (l += '[crossorigin="' + r + '"]'),
        hg.has(l) ||
          (hg.add(l),
          (e = { rel: e, crossOrigin: r, href: t }),
          n.querySelector(l) === null &&
            ((t = n.createElement('link')),
            Vt(t, 'link', e),
            zt(t),
            n.head.appendChild(t))))
    }
  }
  function R_(e) {
    ;(pn.D(e), dg('dns-prefetch', e, null))
  }
  function C_(e, t) {
    ;(pn.C(e, t), dg('preconnect', e, t))
  }
  function j_(e, t, r) {
    pn.L(e, t, r)
    var n = aa
    if (n && e && t) {
      var l = 'link[rel="preload"][as="' + Or(t) + '"]'
      t === 'image' && r && r.imageSrcSet
        ? ((l += '[imagesrcset="' + Or(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == 'string' &&
            (l += '[imagesizes="' + Or(r.imageSizes) + '"]'))
        : (l += '[href="' + Or(e) + '"]')
      var f = l
      switch (t) {
        case 'style':
          f = la(e)
          break
        case 'script':
          f = oa(e)
      }
      Dr.has(f) ||
        ((e = v(
          {
            rel: 'preload',
            href: t === 'image' && r && r.imageSrcSet ? void 0 : e,
            as: t,
          },
          r
        )),
        Dr.set(f, e),
        n.querySelector(l) !== null ||
          (t === 'style' && n.querySelector(Ja(f))) ||
          (t === 'script' && n.querySelector($a(f))) ||
          ((t = n.createElement('link')),
          Vt(t, 'link', e),
          zt(t),
          n.head.appendChild(t)))
    }
  }
  function N_(e, t) {
    pn.m(e, t)
    var r = aa
    if (r && e) {
      var n = t && typeof t.as == 'string' ? t.as : 'script',
        l =
          'link[rel="modulepreload"][as="' + Or(n) + '"][href="' + Or(e) + '"]',
        f = l
      switch (n) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          f = oa(e)
      }
      if (
        !Dr.has(f) &&
        ((e = v({ rel: 'modulepreload', href: e }, t)),
        Dr.set(f, e),
        r.querySelector(l) === null)
      ) {
        switch (n) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (r.querySelector($a(f))) return
        }
        ;((n = r.createElement('link')),
          Vt(n, 'link', e),
          zt(n),
          r.head.appendChild(n))
      }
    }
  }
  function U_(e, t, r) {
    pn.S(e, t, r)
    var n = aa
    if (n && e) {
      var l = Mi(n).hoistableStyles,
        f = la(e)
      t = t || 'default'
      var C = l.get(f)
      if (!C) {
        var L = { loading: 0, preload: null }
        if ((C = n.querySelector(Ja(f)))) L.loading = 5
        else {
          ;((e = v({ rel: 'stylesheet', href: e, 'data-precedence': t }, r)),
            (r = Dr.get(f)) && cc(e, r))
          var Z = (C = n.createElement('link'))
          ;(zt(Z),
            Vt(Z, 'link', e),
            (Z._p = new Promise(function (ve, je) {
              ;((Z.onload = ve), (Z.onerror = je))
            })),
            Z.addEventListener('load', function () {
              L.loading |= 1
            }),
            Z.addEventListener('error', function () {
              L.loading |= 2
            }),
            (L.loading |= 4),
            go(C, t, n))
        }
        ;((C = { type: 'stylesheet', instance: C, count: 1, state: L }),
          l.set(f, C))
      }
    }
  }
  function D_(e, t) {
    pn.X(e, t)
    var r = aa
    if (r && e) {
      var n = Mi(r).hoistableScripts,
        l = oa(e),
        f = n.get(l)
      f ||
        ((f = r.querySelector($a(l))),
        f ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = Dr.get(l)) && fc(e, t),
          (f = r.createElement('script')),
          zt(f),
          Vt(f, 'link', e),
          r.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        n.set(l, f))
    }
  }
  function B_(e, t) {
    pn.M(e, t)
    var r = aa
    if (r && e) {
      var n = Mi(r).hoistableScripts,
        l = oa(e),
        f = n.get(l)
      f ||
        ((f = r.querySelector($a(l))),
        f ||
          ((e = v({ src: e, async: !0, type: 'module' }, t)),
          (t = Dr.get(l)) && fc(e, t),
          (f = r.createElement('script')),
          zt(f),
          Vt(f, 'link', e),
          r.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        n.set(l, f))
    }
  }
  function pg(e, t, r, n) {
    var l = (l = Me.current) ? yo(l) : null
    if (!l) throw Error(c(446))
    switch (e) {
      case 'meta':
      case 'title':
        return null
      case 'style':
        return typeof r.precedence == 'string' && typeof r.href == 'string'
          ? ((t = la(r.href)),
            (r = Mi(l).hoistableStyles),
            (n = r.get(t)),
            n ||
              ((n = { type: 'style', instance: null, count: 0, state: null }),
              r.set(t, n)),
            n)
          : { type: 'void', instance: null, count: 0, state: null }
      case 'link':
        if (
          r.rel === 'stylesheet' &&
          typeof r.href == 'string' &&
          typeof r.precedence == 'string'
        ) {
          e = la(r.href)
          var f = Mi(l).hoistableStyles,
            C = f.get(e)
          if (
            (C ||
              ((l = l.ownerDocument || l),
              (C = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, C),
              (f = l.querySelector(Ja(e))) &&
                !f._p &&
                ((C.instance = f), (C.state.loading = 5)),
              Dr.has(e) ||
                ((r = {
                  rel: 'preload',
                  as: 'style',
                  href: r.href,
                  crossOrigin: r.crossOrigin,
                  integrity: r.integrity,
                  media: r.media,
                  hrefLang: r.hrefLang,
                  referrerPolicy: r.referrerPolicy,
                }),
                Dr.set(e, r),
                f || k_(l, e, r, C.state))),
            t && n === null)
          )
            throw Error(c(528, ''))
          return C
        }
        if (t && n !== null) throw Error(c(529, ''))
        return null
      case 'script':
        return (
          (t = r.async),
          (r = r.src),
          typeof r == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = oa(r)),
              (r = Mi(l).hoistableScripts),
              (n = r.get(t)),
              n ||
                ((n = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                r.set(t, n)),
              n)
            : { type: 'void', instance: null, count: 0, state: null }
        )
      default:
        throw Error(c(444, e))
    }
  }
  function la(e) {
    return 'href="' + Or(e) + '"'
  }
  function Ja(e) {
    return 'link[rel="stylesheet"][' + e + ']'
  }
  function yg(e) {
    return v({}, e, { 'data-precedence': e.precedence, precedence: null })
  }
  function k_(e, t, r, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (n.loading = 1)
      : ((t = e.createElement('link')),
        (n.preload = t),
        t.addEventListener('load', function () {
          return (n.loading |= 1)
        }),
        t.addEventListener('error', function () {
          return (n.loading |= 2)
        }),
        Vt(t, 'link', r),
        zt(t),
        e.head.appendChild(t))
  }
  function oa(e) {
    return '[src="' + Or(e) + '"]'
  }
  function $a(e) {
    return 'script[async]' + e
  }
  function gg(e, t, r) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var n = e.querySelector('style[data-href~="' + Or(r.href) + '"]')
          if (n) return ((t.instance = n), zt(n), n)
          var l = v({}, r, {
            'data-href': r.href,
            'data-precedence': r.precedence,
            href: null,
            precedence: null,
          })
          return (
            (n = (e.ownerDocument || e).createElement('style')),
            zt(n),
            Vt(n, 'style', l),
            go(n, r.precedence, e),
            (t.instance = n)
          )
        case 'stylesheet':
          l = la(r.href)
          var f = e.querySelector(Ja(l))
          if (f) return ((t.state.loading |= 4), (t.instance = f), zt(f), f)
          ;((n = yg(r)),
            (l = Dr.get(l)) && cc(n, l),
            (f = (e.ownerDocument || e).createElement('link')),
            zt(f))
          var C = f
          return (
            (C._p = new Promise(function (L, Z) {
              ;((C.onload = L), (C.onerror = Z))
            })),
            Vt(f, 'link', n),
            (t.state.loading |= 4),
            go(f, r.precedence, e),
            (t.instance = f)
          )
        case 'script':
          return (
            (f = oa(r.src)),
            (l = e.querySelector($a(f)))
              ? ((t.instance = l), zt(l), l)
              : ((n = r),
                (l = Dr.get(f)) && ((n = v({}, r)), fc(n, l)),
                (e = e.ownerDocument || e),
                (l = e.createElement('script')),
                zt(l),
                Vt(l, 'link', n),
                e.head.appendChild(l),
                (t.instance = l))
          )
        case 'void':
          return null
        default:
          throw Error(c(443, t.type))
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((n = t.instance), (t.state.loading |= 4), go(n, r.precedence, e))
    return t.instance
  }
  function go(e, t, r) {
    for (
      var n = r.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        l = n.length ? n[n.length - 1] : null,
        f = l,
        C = 0;
      C < n.length;
      C++
    ) {
      var L = n[C]
      if (L.dataset.precedence === t) f = L
      else if (f !== l) break
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = r.nodeType === 9 ? r.head : r), t.insertBefore(e, t.firstChild))
  }
  function cc(e, t) {
    ;(e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title))
  }
  function fc(e, t) {
    ;(e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity))
  }
  var mo = null
  function mg(e, t, r) {
    if (mo === null) {
      var n = new Map(),
        l = (mo = new Map())
      l.set(r, n)
    } else ((l = mo), (n = l.get(r)), n || ((n = new Map()), l.set(r, n)))
    if (n.has(e)) return n
    for (
      n.set(e, null), r = r.getElementsByTagName(e), l = 0;
      l < r.length;
      l++
    ) {
      var f = r[l]
      if (
        !(
          f[er] ||
          f[At] ||
          (e === 'link' && f.getAttribute('rel') === 'stylesheet')
        ) &&
        f.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var C = f.getAttribute(t) || ''
        C = e + C
        var L = n.get(C)
        L ? L.push(f) : n.set(C, [f])
      }
    }
    return n
  }
  function bg(e, t, r) {
    ;((e = e.ownerDocument || e),
      e.head.insertBefore(
        r,
        t === 'title' ? e.querySelector('head > title') : null
      ))
  }
  function L_(e, t, r) {
    if (r === 1 || t.itemProp != null) return !1
    switch (e) {
      case 'meta':
      case 'title':
        return !0
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break
        return !0
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break
        return t.rel === 'stylesheet'
          ? ((e = t.disabled), typeof t.precedence == 'string' && e == null)
          : !0
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0
    }
    return !1
  }
  function vg(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0)
  }
  function I_(e, t, r, n) {
    if (
      r.type === 'stylesheet' &&
      (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
      (r.state.loading & 4) === 0
    ) {
      if (r.instance === null) {
        var l = la(n.href),
          f = t.querySelector(Ja(l))
        if (f) {
          ;((t = f._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = bo.bind(e)), t.then(e, e)),
            (r.state.loading |= 4),
            (r.instance = f),
            zt(f))
          return
        }
        ;((f = t.ownerDocument || t),
          (n = yg(n)),
          (l = Dr.get(l)) && cc(n, l),
          (f = f.createElement('link')),
          zt(f))
        var C = f
        ;((C._p = new Promise(function (L, Z) {
          ;((C.onload = L), (C.onerror = Z))
        })),
          Vt(f, 'link', n),
          (r.instance = f))
      }
      ;(e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(r, t),
        (t = r.state.preload) &&
          (r.state.loading & 3) === 0 &&
          (e.count++,
          (r = bo.bind(e)),
          t.addEventListener('load', r),
          t.addEventListener('error', r)))
    }
  }
  var hc = 0
  function z_(e, t) {
    return (
      e.stylesheets && e.count === 0 && _o(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (r) {
            var n = setTimeout(function () {
              if ((e.stylesheets && _o(e, e.stylesheets), e.unsuspend)) {
                var f = e.unsuspend
                ;((e.unsuspend = null), f())
              }
            }, 6e4 + t)
            0 < e.imgBytes && hc === 0 && (hc = 62500 * v_())
            var l = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && _o(e, e.stylesheets), e.unsuspend))
                ) {
                  var f = e.unsuspend
                  ;((e.unsuspend = null), f())
                }
              },
              (e.imgBytes > hc ? 50 : 800) + t
            )
            return (
              (e.unsuspend = r),
              function () {
                ;((e.unsuspend = null), clearTimeout(n), clearTimeout(l))
              }
            )
          }
        : null
    )
  }
  function bo() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) _o(this, this.stylesheets)
      else if (this.unsuspend) {
        var e = this.unsuspend
        ;((this.unsuspend = null), e())
      }
    }
  }
  var vo = null
  function _o(e, t) {
    ;((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (vo = new Map()),
        t.forEach(q_, e),
        (vo = null),
        bo.call(e)))
  }
  function q_(e, t) {
    if (!(t.state.loading & 4)) {
      var r = vo.get(e)
      if (r) var n = r.get(null)
      else {
        ;((r = new Map()), vo.set(e, r))
        for (
          var l = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]'
            ),
            f = 0;
          f < l.length;
          f++
        ) {
          var C = l[f]
          ;(C.nodeName === 'LINK' || C.getAttribute('media') !== 'not all') &&
            (r.set(C.dataset.precedence, C), (n = C))
        }
        n && r.set(null, n)
      }
      ;((l = t.instance),
        (C = l.getAttribute('data-precedence')),
        (f = r.get(C) || n),
        f === n && r.set(null, l),
        r.set(C, l),
        this.count++,
        (n = bo.bind(this)),
        l.addEventListener('load', n),
        l.addEventListener('error', n),
        f
          ? f.parentNode.insertBefore(l, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(l, e.firstChild)),
        (t.state.loading |= 4))
    }
  }
  var el = {
    $$typeof: O,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0,
  }
  function H_(e, t, r, n, l, f, C, L, Z) {
    ;((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Fr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Fr(0)),
      (this.hiddenUpdates = Fr(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = l),
      (this.onCaughtError = f),
      (this.onRecoverableError = C),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = Z),
      (this.incompleteTransitions = new Map()))
  }
  function _g(e, t, r, n, l, f, C, L, Z, ve, je, Le) {
    return (
      (e = new H_(e, t, r, C, Z, ve, je, Le, L)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = br(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = Qs()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: n, isDehydrated: r, cache: t }),
      Ws(f),
      e
    )
  }
  function Sg(e) {
    return e ? ((e = Ii), e) : Ii
  }
  function wg(e, t, r, n, l, f) {
    ;((l = Sg(l)),
      n.context === null ? (n.context = l) : (n.pendingContext = l),
      (n = Nn(t)),
      (n.payload = { element: r }),
      (f = f === void 0 ? null : f),
      f !== null && (n.callback = f),
      (r = Un(e, n, t)),
      r !== null && (dr(r, e, t), Na(r, e, t)))
  }
  function Eg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane
      e.retryLane = r !== 0 && r < t ? r : t
    }
  }
  function dc(e, t) {
    ;(Eg(e, t), (e = e.alternate) && Eg(e, t))
  }
  function Ag(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ai(e, 67108864)
      ;(t !== null && dr(t, e, 67108864), dc(e, 67108864))
    }
  }
  function Tg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Er()
      t = Et(t)
      var r = ai(e, t)
      ;(r !== null && dr(r, e, t), dc(e, t))
    }
  }
  var So = !0
  function P_(e, t, r, n) {
    var l = K.T
    K.T = null
    var f = P.p
    try {
      ;((P.p = 2), pc(e, t, r, n))
    } finally {
      ;((P.p = f), (K.T = l))
    }
  }
  function G_(e, t, r, n) {
    var l = K.T
    K.T = null
    var f = P.p
    try {
      ;((P.p = 8), pc(e, t, r, n))
    } finally {
      ;((P.p = f), (K.T = l))
    }
  }
  function pc(e, t, r, n) {
    if (So) {
      var l = yc(n)
      if (l === null) (ec(e, t, n, wo, r), xg(e, n))
      else if (Q_(l, e, t, r, n)) n.stopPropagation()
      else if ((xg(e, n), t & 4 && -1 < Y_.indexOf(e))) {
        for (; l !== null; ) {
          var f = xi(l)
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var C = nr(f.pendingLanes)
                  if (C !== 0) {
                    var L = f
                    for (L.pendingLanes |= 2, L.entangledLanes |= 2; C; ) {
                      var Z = 1 << (31 - Pe(C))
                      ;((L.entanglements[1] |= Z), (C &= ~Z))
                    }
                    ;(Gr(f), (ct & 6) === 0 && ((no = Se() + 500), Fa(0)))
                  }
                }
                break
              case 31:
              case 13:
                ;((L = ai(f, 2)), L !== null && dr(L, f, 2), ao(), dc(f, 2))
            }
          if (((f = yc(n)), f === null && ec(e, t, n, wo, r), f === l)) break
          l = f
        }
        l !== null && n.stopPropagation()
      } else ec(e, t, n, null, r)
    }
  }
  function yc(e) {
    return ((e = ms(e)), gc(e))
  }
  var wo = null
  function gc(e) {
    if (((wo = null), (e = Oi(e)), e !== null)) {
      var t = s(e)
      if (t === null) e = null
      else {
        var r = t.tag
        if (r === 13) {
          if (((e = o(t)), e !== null)) return e
          e = null
        } else if (r === 31) {
          if (((e = u(t)), e !== null)) return e
          e = null
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null
          e = null
        } else t !== e && (e = null)
      }
    }
    return ((wo = e), null)
  }
  function Og(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8
      case 'message':
        switch (Je()) {
          case m:
            return 2
          case R:
            return 8
          case U:
          case te:
            return 32
          case de:
            return 268435456
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var mc = !1,
    Yn = null,
    Qn = null,
    Vn = null,
    tl = new Map(),
    rl = new Map(),
    Kn = [],
    Y_ =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      )
  function xg(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Yn = null
        break
      case 'dragenter':
      case 'dragleave':
        Qn = null
        break
      case 'mouseover':
      case 'mouseout':
        Vn = null
        break
      case 'pointerover':
      case 'pointerout':
        tl.delete(t.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        rl.delete(t.pointerId)
    }
  }
  function nl(e, t, r, n, l, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: n,
          nativeEvent: f,
          targetContainers: [l],
        }),
        t !== null && ((t = xi(t)), t !== null && Ag(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e)
  }
  function Q_(e, t, r, n, l) {
    switch (t) {
      case 'focusin':
        return ((Yn = nl(Yn, e, t, r, n, l)), !0)
      case 'dragenter':
        return ((Qn = nl(Qn, e, t, r, n, l)), !0)
      case 'mouseover':
        return ((Vn = nl(Vn, e, t, r, n, l)), !0)
      case 'pointerover':
        var f = l.pointerId
        return (tl.set(f, nl(tl.get(f) || null, e, t, r, n, l)), !0)
      case 'gotpointercapture':
        return (
          (f = l.pointerId),
          rl.set(f, nl(rl.get(f) || null, e, t, r, n, l)),
          !0
        )
    }
    return !1
  }
  function Mg(e) {
    var t = Oi(e.target)
    if (t !== null) {
      var r = s(t)
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = o(r)), t !== null)) {
            ;((e.blockedOn = t),
              Tn(e.priority, function () {
                Tg(r)
              }))
            return
          }
        } else if (t === 31) {
          if (((t = u(r)), t !== null)) {
            ;((e.blockedOn = t),
              Tn(e.priority, function () {
                Tg(r)
              }))
            return
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function Eo(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = yc(e.nativeEvent)
      if (r === null) {
        r = e.nativeEvent
        var n = new r.constructor(r.type, r)
        ;((gs = n), r.target.dispatchEvent(n), (gs = null))
      } else return ((t = xi(r)), t !== null && Ag(t), (e.blockedOn = r), !1)
      t.shift()
    }
    return !0
  }
  function Rg(e, t, r) {
    Eo(e) && r.delete(t)
  }
  function V_() {
    ;((mc = !1),
      Yn !== null && Eo(Yn) && (Yn = null),
      Qn !== null && Eo(Qn) && (Qn = null),
      Vn !== null && Eo(Vn) && (Vn = null),
      tl.forEach(Rg),
      rl.forEach(Rg))
  }
  function Ao(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      mc ||
        ((mc = !0), y.unstable_scheduleCallback(y.unstable_NormalPriority, V_)))
  }
  var To = null
  function Cg(e) {
    To !== e &&
      ((To = e),
      y.unstable_scheduleCallback(y.unstable_NormalPriority, function () {
        To === e && (To = null)
        for (var t = 0; t < e.length; t += 3) {
          var r = e[t],
            n = e[t + 1],
            l = e[t + 2]
          if (typeof n != 'function') {
            if (gc(n || r) === null) continue
            break
          }
          var f = xi(r)
          f !== null &&
            (e.splice(t, 3),
            (t -= 3),
            yu(f, { pending: !0, data: l, method: r.method, action: n }, n, l))
        }
      }))
  }
  function sa(e) {
    function t(Z) {
      return Ao(Z, e)
    }
    ;(Yn !== null && Ao(Yn, e),
      Qn !== null && Ao(Qn, e),
      Vn !== null && Ao(Vn, e),
      tl.forEach(t),
      rl.forEach(t))
    for (var r = 0; r < Kn.length; r++) {
      var n = Kn[r]
      n.blockedOn === e && (n.blockedOn = null)
    }
    for (; 0 < Kn.length && ((r = Kn[0]), r.blockedOn === null); )
      (Mg(r), r.blockedOn === null && Kn.shift())
    if (((r = (e.ownerDocument || e).$$reactFormReplay), r != null))
      for (n = 0; n < r.length; n += 3) {
        var l = r[n],
          f = r[n + 1],
          C = l[Lt] || null
        if (typeof f == 'function') C || Cg(r)
        else if (C) {
          var L = null
          if (f && f.hasAttribute('formAction')) {
            if (((l = f), (C = f[Lt] || null))) L = C.formAction
            else if (gc(l) !== null) continue
          } else L = C.action
          ;(typeof L == 'function'
            ? (r[n + 1] = L)
            : (r.splice(n, 3), (n -= 3)),
            Cg(r))
        }
      }
  }
  function jg() {
    function e(f) {
      f.canIntercept &&
        f.info === 'react-transition' &&
        f.intercept({
          handler: function () {
            return new Promise(function (C) {
              return (l = C)
            })
          },
          focusReset: 'manual',
          scroll: 'manual',
        })
    }
    function t() {
      ;(l !== null && (l(), (l = null)), n || setTimeout(r, 20))
    }
    function r() {
      if (!n && !navigation.transition) {
        var f = navigation.currentEntry
        f &&
          f.url != null &&
          navigation.navigate(f.url, {
            state: f.getState(),
            info: 'react-transition',
            history: 'replace',
          })
      }
    }
    if (typeof navigation == 'object') {
      var n = !1,
        l = null
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', t),
        navigation.addEventListener('navigateerror', t),
        setTimeout(r, 100),
        function () {
          ;((n = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', t),
            navigation.removeEventListener('navigateerror', t),
            l !== null && (l(), (l = null)))
        }
      )
    }
  }
  function bc(e) {
    this._internalRoot = e
  }
  ;((Oo.prototype.render = bc.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw Error(c(409))
      var r = t.current,
        n = Er()
      wg(r, n, e, t, null, null)
    }),
    (Oo.prototype.unmount = bc.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          ;(wg(e.current, 2, null, e, null, null), ao(), (t[lr] = null))
        }
      }))
  function Oo(e) {
    this._internalRoot = e
  }
  Oo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ir()
      e = { blockedOn: null, target: e, priority: t }
      for (var r = 0; r < Kn.length && t !== 0 && t < Kn[r].priority; r++);
      ;(Kn.splice(r, 0, e), r === 0 && Mg(e))
    }
  }
  var Ng = p.version
  if (Ng !== '19.2.4') throw Error(c(527, Ng, '19.2.4'))
  P.findDOMNode = function (e) {
    var t = e._reactInternals
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(c(188))
        : ((e = Object.keys(e).join(',')), Error(c(268, e)))
    return (
      (e = a(t)),
      (e = e !== null ? d(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    )
  }
  var K_ = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: K,
    reconcilerVersion: '19.2.4',
  }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var xo = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!xo.isDisabled && xo.supportsFiber)
      try {
        ;((se = xo.inject(K_)), (me = xo))
      } catch {}
  }
  return (
    (al.createRoot = function (e, t) {
      if (!g(e)) throw Error(c(299))
      var r = !1,
        n = '',
        l = zp,
        f = qp,
        C = Hp
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (C = t.onRecoverableError)),
        (t = _g(e, 1, !1, null, null, r, n, null, l, f, C, jg)),
        (e[lr] = t.current),
        $u(e),
        new bc(t)
      )
    }),
    (al.hydrateRoot = function (e, t, r) {
      if (!g(e)) throw Error(c(299))
      var n = !1,
        l = '',
        f = zp,
        C = qp,
        L = Hp,
        Z = null
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (n = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (f = r.onUncaughtError),
          r.onCaughtError !== void 0 && (C = r.onCaughtError),
          r.onRecoverableError !== void 0 && (L = r.onRecoverableError),
          r.formState !== void 0 && (Z = r.formState)),
        (t = _g(e, 1, !0, t, r ?? null, n, l, Z, f, C, L, jg)),
        (t.context = Sg(null)),
        (r = t.current),
        (n = Er()),
        (n = Et(n)),
        (l = Nn(n)),
        (l.callback = null),
        Un(r, l, n),
        (r = n),
        (t.current.lanes = r),
        z(t, r),
        Gr(t),
        (e[lr] = t.current),
        $u(e),
        new Oo(t)
      )
    }),
    (al.version = '19.2.4'),
    al
  )
}
var Pg
function n1() {
  if (Pg) return Sc.exports
  Pg = 1
  function y() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)
      } catch (p) {
        console.error(p)
      }
  }
  return (y(), (Sc.exports = r1()), Sc.exports)
}
var i1 = n1()
const Gg = 'ws://localhost:3000'
class a1 {
  constructor() {
    ;((this.screens = null),
      (this.esp32 = null),
      (this.screenListeners = []),
      (this.esp32Listeners = []))
  }
  connect() {
    ;((this.screens = new WebSocket(`${Gg}/screens`)),
      (this.screens.onopen = () =>
        console.log('[Backglass Screens] connecté ✅')),
      (this.screens.onclose = () =>
        console.log('[Backglass Screens] déconnecté')),
      (this.screens.onerror = (p) =>
        console.error('[Backglass Screens] erreur', p)),
      (this.screens.onmessage = (p) => {
        try {
          const h = JSON.parse(p.data)
          this.screenListeners.forEach((c) => c(h))
        } catch (h) {
          console.error('[Backglass Screens] parsing error', h)
        }
      }),
      (this.esp32 = new WebSocket(`${Gg}/esp32`)),
      (this.esp32.onopen = () => console.log('[Backglass ESP32] connecté ✅')),
      (this.esp32.onclose = () => console.log('[Backglass ESP32] déconnecté')),
      (this.esp32.onerror = (p) =>
        console.error('[Backglass ESP32] erreur', p)),
      (this.esp32.onmessage = (p) => {
        try {
          const h = JSON.parse(p.data)
          this.esp32Listeners.forEach((c) => c(h))
        } catch (h) {
          console.error('[Backglass ESP32] parsing error', h)
        }
      }))
  }
  onScreenMessage(p) {
    this.screenListeners.push(p)
  }
  onEsp32Message(p) {
    this.esp32Listeners.push(p)
  }
  send(p, h = {}) {
    this.screens?.readyState === WebSocket.OPEN
      ? this.screens.send(JSON.stringify({ type: p, ...h }))
      : console.warn(`[Backglass Screens] non connecté, message ${p} ignoré`)
  }
  disconnect() {
    ;(this.screens?.close(),
      this.esp32?.close(),
      (this.screenListeners = []),
      (this.esp32Listeners = []))
  }
}
const Mo = new a1()
function l1() {
  const [y, p] = Xe.useState('intro'),
    [h, c] = Xe.useState(null)
  Xe.useEffect(() => {
    Mo.connect()
    const s = (o) => {
      ;(console.log('[Backglass] Message reçu:', o),
        o.state && c(o.state),
        o.type === 'state_update' && o.state?.isRunning && p('video'),
        o.type === 'game_over' && p('result'))
    }
    return (Mo.onScreenMessage(s), () => Mo.disconnect())
  }, [])
  const g = Xe.useCallback((s = 'Player 1', o = 'cuphead') => {
    Mo.send('start_game', { playerName: s, avatar: o })
  }, [])
  return {
    screen: y,
    setScreen: p,
    gameState: h || { score: 0, balls: 3, isRunning: !1 },
    startGame: g,
  }
}
var Ch = Object.defineProperty,
  o1 = Object.getOwnPropertyDescriptor,
  s1 = Object.getOwnPropertyNames,
  u1 = Object.prototype.hasOwnProperty,
  yr = (y, p) => () => (y && (p = y((y = 0))), p),
  Ue = (y, p) => () => (p || y((p = { exports: {} }).exports, p), p.exports),
  ha = (y, p) => {
    for (var h in p) Ch(y, h, { get: p[h], enumerable: !0 })
  },
  c1 = (y, p, h, c) => {
    if ((p && typeof p == 'object') || typeof p == 'function')
      for (let g of s1(p))
        !u1.call(y, g) &&
          g !== h &&
          Ch(y, g, {
            get: () => p[g],
            enumerable: !(c = o1(p, g)) || c.enumerable,
          })
    return y
  },
  gt = (y) => c1(Ch({}, '__esModule', { value: !0 }), y),
  Te = yr(() => {}),
  bt = {}
ha(bt, {
  _debugEnd: () => cf,
  _debugProcess: () => uf,
  _events: () => Tf,
  _eventsCount: () => Of,
  _exiting: () => Fc,
  _fatalExceptions: () => lf,
  _getActiveHandles: () => db,
  _getActiveRequests: () => hb,
  _kill: () => Zc,
  _linkedBinding: () => cb,
  _maxListeners: () => Af,
  _preload_modules: () => wf,
  _rawDebug: () => Qc,
  _startProfilerIdleNotifier: () => ff,
  _stopProfilerIdleNotifier: () => hf,
  _tickCallback: () => sf,
  abort: () => gf,
  addListener: () => xf,
  allowedNodeEnvironmentFlags: () => nf,
  arch: () => jc,
  argv: () => Dc,
  argv0: () => Sf,
  assert: () => pb,
  binding: () => zc,
  browser: () => Yc,
  chdir: () => Pc,
  config: () => Wc,
  cpuUsage: () => ll,
  cwd: () => Hc,
  debugPort: () => _f,
  default: () => Nh,
  dlopen: () => fb,
  domain: () => Kc,
  emit: () => Nf,
  emitWarning: () => Ic,
  env: () => Uc,
  execArgv: () => Bc,
  execPath: () => vf,
  exit: () => tf,
  features: () => af,
  hasUncaughtExceptionCaptureCallback: () => yb,
  hrtime: () => jo,
  kill: () => ef,
  listeners: () => mb,
  memoryUsage: () => $c,
  moduleLoadList: () => Vc,
  nextTick: () => sb,
  off: () => Rf,
  on: () => gn,
  once: () => Mf,
  openStdin: () => rf,
  pid: () => mf,
  platform: () => Nc,
  ppid: () => bf,
  prependListener: () => Uf,
  prependOnceListener: () => Df,
  reallyExit: () => Xc,
  release: () => Gc,
  removeAllListeners: () => jf,
  removeListener: () => Cf,
  resourceUsage: () => Jc,
  setSourceMapsEnabled: () => Ef,
  setUncaughtExceptionCaptureCallback: () => of,
  stderr: () => pf,
  stdin: () => yf,
  stdout: () => df,
  title: () => Cc,
  umask: () => qc,
  uptime: () => gb,
  version: () => kc,
  versions: () => Lc,
})
function jh(y) {
  throw new Error(
    'Node.js process ' + y + ' is not supported by JSPM core outside of Node.js'
  )
}
function f1() {
  !_i ||
    !bi ||
    ((_i = !1), bi.length ? (Yr = bi.concat(Yr)) : (cl = -1), Yr.length && ob())
}
function ob() {
  if (!_i) {
    var y = setTimeout(f1, 0)
    _i = !0
    for (var p = Yr.length; p; ) {
      for (bi = Yr, Yr = []; ++cl < p; ) bi && bi[cl].run()
      ;((cl = -1), (p = Yr.length))
    }
    ;((bi = null), (_i = !1), clearTimeout(y))
  }
}
function sb(y) {
  var p = new Array(arguments.length - 1)
  if (arguments.length > 1)
    for (var h = 1; h < arguments.length; h++) p[h - 1] = arguments[h]
  ;(Yr.push(new ub(y, p)), Yr.length === 1 && !_i && setTimeout(ob, 0))
}
function ub(y, p) {
  ;((this.fun = y), (this.array = p))
}
function Ft() {}
function cb(y) {
  jh('_linkedBinding')
}
function fb(y) {
  jh('dlopen')
}
function hb() {
  return []
}
function db() {
  return []
}
function pb(y, p) {
  if (!y) throw new Error(p || 'assertion error')
}
function yb() {
  return !1
}
function gb() {
  return bn.now() / 1e3
}
function jo(y) {
  var p = Math.floor((Date.now() - bn.now()) * 0.001),
    h = bn.now() * 0.001,
    c = Math.floor(h) + p,
    g = Math.floor((h % 1) * 1e9)
  return (
    y && ((c = c - y[0]), (g = g - y[1]), g < 0 && (c--, (g += No))),
    [c, g]
  )
}
function gn() {
  return Nh
}
function mb(y) {
  return []
}
var Yr,
  _i,
  bi,
  cl,
  Cc,
  jc,
  Nc,
  Uc,
  Dc,
  Bc,
  kc,
  Lc,
  Ic,
  zc,
  qc,
  Hc,
  Pc,
  Gc,
  Yc,
  Qc,
  Vc,
  Kc,
  Fc,
  Wc,
  Xc,
  Zc,
  ll,
  Jc,
  $c,
  ef,
  tf,
  rf,
  nf,
  af,
  lf,
  of,
  sf,
  uf,
  cf,
  ff,
  hf,
  df,
  pf,
  yf,
  gf,
  mf,
  bf,
  vf,
  _f,
  Sf,
  wf,
  Ef,
  bn,
  Tc,
  No,
  Af,
  Tf,
  Of,
  xf,
  Mf,
  Rf,
  Cf,
  jf,
  Nf,
  Uf,
  Df,
  Nh,
  h1 = yr(() => {
    ;(Te(),
      xe(),
      Oe(),
      (Yr = []),
      (_i = !1),
      (cl = -1),
      (ub.prototype.run = function () {
        this.fun.apply(null, this.array)
      }),
      (Cc = 'browser'),
      (jc = 'x64'),
      (Nc = 'browser'),
      (Uc = {
        PATH: '/usr/bin',
        LANG: typeof navigator < 'u' ? navigator.language + '.UTF-8' : void 0,
        PWD: '/',
        HOME: '/home',
        TMP: '/tmp',
      }),
      (Dc = ['/usr/bin/node']),
      (Bc = []),
      (kc = 'v16.8.0'),
      (Lc = {}),
      (Ic = function (y, p) {
        console.warn((p ? p + ': ' : '') + y)
      }),
      (zc = function (y) {
        jh('binding')
      }),
      (qc = function (y) {
        return 0
      }),
      (Hc = function () {
        return '/'
      }),
      (Pc = function (y) {}),
      (Gc = { name: 'node', sourceUrl: '', headersUrl: '', libUrl: '' }),
      (Yc = !0),
      (Qc = Ft),
      (Vc = []),
      (Kc = {}),
      (Fc = !1),
      (Wc = {}),
      (Xc = Ft),
      (Zc = Ft),
      (ll = function () {
        return {}
      }),
      (Jc = ll),
      ($c = ll),
      (ef = Ft),
      (tf = Ft),
      (rf = Ft),
      (nf = {}),
      (af = {
        inspector: !1,
        debug: !1,
        uv: !1,
        ipv6: !1,
        tls_alpn: !1,
        tls_sni: !1,
        tls_ocsp: !1,
        tls: !1,
        cached_builtins: !0,
      }),
      (lf = Ft),
      (of = Ft),
      (sf = Ft),
      (uf = Ft),
      (cf = Ft),
      (ff = Ft),
      (hf = Ft),
      (df = void 0),
      (pf = void 0),
      (yf = void 0),
      (gf = Ft),
      (mf = 2),
      (bf = 1),
      (vf = '/bin/usr/node'),
      (_f = 9229),
      (Sf = 'node'),
      (wf = []),
      (Ef = Ft),
      (bn = {
        now:
          typeof performance < 'u' ? performance.now.bind(performance) : void 0,
        timing: typeof performance < 'u' ? performance.timing : void 0,
      }),
      bn.now === void 0 &&
        ((Tc = Date.now()),
        bn.timing &&
          bn.timing.navigationStart &&
          (Tc = bn.timing.navigationStart),
        (bn.now = () => Date.now() - Tc)),
      (No = 1e9),
      (jo.bigint = function (y) {
        var p = jo(y)
        return typeof BigInt > 'u'
          ? p[0] * No + p[1]
          : BigInt(p[0] * No) + BigInt(p[1])
      }),
      (Af = 10),
      (Tf = {}),
      (Of = 0),
      (xf = gn),
      (Mf = gn),
      (Rf = gn),
      (Cf = gn),
      (jf = gn),
      (Nf = Ft),
      (Uf = gn),
      (Df = gn),
      (Nh = {
        version: kc,
        versions: Lc,
        arch: jc,
        platform: Nc,
        browser: Yc,
        release: Gc,
        _rawDebug: Qc,
        moduleLoadList: Vc,
        binding: zc,
        _linkedBinding: cb,
        _events: Tf,
        _eventsCount: Of,
        _maxListeners: Af,
        on: gn,
        addListener: xf,
        once: Mf,
        off: Rf,
        removeListener: Cf,
        removeAllListeners: jf,
        emit: Nf,
        prependListener: Uf,
        prependOnceListener: Df,
        listeners: mb,
        domain: Kc,
        _exiting: Fc,
        config: Wc,
        dlopen: fb,
        uptime: gb,
        _getActiveRequests: hb,
        _getActiveHandles: db,
        reallyExit: Xc,
        _kill: Zc,
        cpuUsage: ll,
        resourceUsage: Jc,
        memoryUsage: $c,
        kill: ef,
        exit: tf,
        openStdin: rf,
        allowedNodeEnvironmentFlags: nf,
        assert: pb,
        features: af,
        _fatalExceptions: lf,
        setUncaughtExceptionCaptureCallback: of,
        hasUncaughtExceptionCaptureCallback: yb,
        emitWarning: Ic,
        nextTick: sb,
        _tickCallback: sf,
        _debugProcess: uf,
        _debugEnd: cf,
        _startProfilerIdleNotifier: ff,
        _stopProfilerIdleNotifier: hf,
        stdout: df,
        stdin: yf,
        stderr: pf,
        abort: gf,
        umask: qc,
        chdir: Pc,
        cwd: Hc,
        env: Uc,
        title: Cc,
        argv: Dc,
        execArgv: Bc,
        pid: mf,
        ppid: bf,
        execPath: vf,
        debugPort: _f,
        hrtime: jo,
        argv0: Sf,
        _preload_modules: wf,
        setSourceMapsEnabled: Ef,
      }))
  }),
  Oe = yr(() => {
    h1()
  })
function d1() {
  if (Bf) return ua
  ;((Bf = !0),
    (ua.byteLength = u),
    (ua.toByteArray = a),
    (ua.fromByteArray = S))
  for (
    var y = [],
      p = [],
      h = typeof Uint8Array < 'u' ? Uint8Array : Array,
      c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      g = 0,
      s = c.length;
    g < s;
    ++g
  )
    ((y[g] = c[g]), (p[c.charCodeAt(g)] = g))
  ;((p[45] = 62), (p[95] = 63))
  function o(E) {
    var b = E.length
    if (b % 4 > 0)
      throw new Error('Invalid string. Length must be a multiple of 4')
    var w = E.indexOf('=')
    w === -1 && (w = b)
    var A = w === b ? 0 : 4 - (w % 4)
    return [w, A]
  }
  function u(E) {
    var b = o(E),
      w = b[0],
      A = b[1]
    return ((w + A) * 3) / 4 - A
  }
  function i(E, b, w) {
    return ((b + w) * 3) / 4 - w
  }
  function a(E) {
    var b,
      w = o(E),
      A = w[0],
      M = w[1],
      _ = new h(i(E, A, M)),
      O = 0,
      N = M > 0 ? A - 4 : A,
      T
    for (T = 0; T < N; T += 4)
      ((b =
        (p[E.charCodeAt(T)] << 18) |
        (p[E.charCodeAt(T + 1)] << 12) |
        (p[E.charCodeAt(T + 2)] << 6) |
        p[E.charCodeAt(T + 3)]),
        (_[O++] = (b >> 16) & 255),
        (_[O++] = (b >> 8) & 255),
        (_[O++] = b & 255))
    return (
      M === 2 &&
        ((b = (p[E.charCodeAt(T)] << 2) | (p[E.charCodeAt(T + 1)] >> 4)),
        (_[O++] = b & 255)),
      M === 1 &&
        ((b =
          (p[E.charCodeAt(T)] << 10) |
          (p[E.charCodeAt(T + 1)] << 4) |
          (p[E.charCodeAt(T + 2)] >> 2)),
        (_[O++] = (b >> 8) & 255),
        (_[O++] = b & 255)),
      _
    )
  }
  function d(E) {
    return y[(E >> 18) & 63] + y[(E >> 12) & 63] + y[(E >> 6) & 63] + y[E & 63]
  }
  function v(E, b, w) {
    for (var A, M = [], _ = b; _ < w; _ += 3)
      ((A =
        ((E[_] << 16) & 16711680) +
        ((E[_ + 1] << 8) & 65280) +
        (E[_ + 2] & 255)),
        M.push(d(A)))
    return M.join('')
  }
  function S(E) {
    for (
      var b, w = E.length, A = w % 3, M = [], _ = 16383, O = 0, N = w - A;
      O < N;
      O += _
    )
      M.push(v(E, O, O + _ > N ? N : O + _))
    return (
      A === 1
        ? ((b = E[w - 1]), M.push(y[b >> 2] + y[(b << 4) & 63] + '=='))
        : A === 2 &&
          ((b = (E[w - 2] << 8) + E[w - 1]),
          M.push(y[b >> 10] + y[(b >> 4) & 63] + y[(b << 2) & 63] + '=')),
      M.join('')
    )
  }
  return ua
}
function p1() {
  return kf
    ? ol
    : ((kf = !0),
      (ol.read = function (y, p, h, c, g) {
        var s,
          o,
          u = g * 8 - c - 1,
          i = (1 << u) - 1,
          a = i >> 1,
          d = -7,
          v = h ? g - 1 : 0,
          S = h ? -1 : 1,
          E = y[p + v]
        for (
          v += S, s = E & ((1 << -d) - 1), E >>= -d, d += u;
          d > 0;
          s = s * 256 + y[p + v], v += S, d -= 8
        );
        for (
          o = s & ((1 << -d) - 1), s >>= -d, d += c;
          d > 0;
          o = o * 256 + y[p + v], v += S, d -= 8
        );
        if (s === 0) s = 1 - a
        else {
          if (s === i) return o ? NaN : (E ? -1 : 1) * (1 / 0)
          ;((o = o + Math.pow(2, c)), (s = s - a))
        }
        return (E ? -1 : 1) * o * Math.pow(2, s - c)
      }),
      (ol.write = function (y, p, h, c, g, s) {
        var o,
          u,
          i,
          a = s * 8 - g - 1,
          d = (1 << a) - 1,
          v = d >> 1,
          S = g === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          E = c ? 0 : s - 1,
          b = c ? 1 : -1,
          w = p < 0 || (p === 0 && 1 / p < 0) ? 1 : 0
        for (
          p = Math.abs(p),
            isNaN(p) || p === 1 / 0
              ? ((u = isNaN(p) ? 1 : 0), (o = d))
              : ((o = Math.floor(Math.log(p) / Math.LN2)),
                p * (i = Math.pow(2, -o)) < 1 && (o--, (i *= 2)),
                o + v >= 1 ? (p += S / i) : (p += S * Math.pow(2, 1 - v)),
                p * i >= 2 && (o++, (i /= 2)),
                o + v >= d
                  ? ((u = 0), (o = d))
                  : o + v >= 1
                    ? ((u = (p * i - 1) * Math.pow(2, g)), (o = o + v))
                    : ((u = p * Math.pow(2, v - 1) * Math.pow(2, g)), (o = 0)));
          g >= 8;
          y[h + E] = u & 255, E += b, u /= 256, g -= 8
        );
        for (
          o = (o << g) | u, a += g;
          a > 0;
          y[h + E] = o & 255, E += b, o /= 256, a -= 8
        );
        y[h + E - b] |= w * 128
      }),
      ol)
}
function y1() {
  if (Lf) return Xn
  Lf = !0
  let y = d1(),
    p = p1(),
    h =
      typeof Symbol == 'function' && typeof Symbol.for == 'function'
        ? Symbol.for('nodejs.util.inspect.custom')
        : null
  ;((Xn.Buffer = o), (Xn.SlowBuffer = M), (Xn.INSPECT_MAX_BYTES = 50))
  let c = 2147483647
  ;((Xn.kMaxLength = c),
    (o.TYPED_ARRAY_SUPPORT = g()),
    !o.TYPED_ARRAY_SUPPORT &&
      typeof console < 'u' &&
      typeof console.error == 'function' &&
      console.error(
        'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
      ))
  function g() {
    try {
      let m = new Uint8Array(1),
        R = {
          foo: function () {
            return 42
          },
        }
      return (
        Object.setPrototypeOf(R, Uint8Array.prototype),
        Object.setPrototypeOf(m, R),
        m.foo() === 42
      )
    } catch {
      return !1
    }
  }
  ;(Object.defineProperty(o.prototype, 'parent', {
    enumerable: !0,
    get: function () {
      if (o.isBuffer(this)) return this.buffer
    },
  }),
    Object.defineProperty(o.prototype, 'offset', {
      enumerable: !0,
      get: function () {
        if (o.isBuffer(this)) return this.byteOffset
      },
    }))
  function s(m) {
    if (m > c)
      throw new RangeError('The value "' + m + '" is invalid for option "size"')
    let R = new Uint8Array(m)
    return (Object.setPrototypeOf(R, o.prototype), R)
  }
  function o(m, R, U) {
    if (typeof m == 'number') {
      if (typeof R == 'string')
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        )
      return d(m)
    }
    return u(m, R, U)
  }
  o.poolSize = 8192
  function u(m, R, U) {
    if (typeof m == 'string') return v(m, R)
    if (ArrayBuffer.isView(m)) return E(m)
    if (m == null)
      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
          typeof m
      )
    if (
      ie(m, ArrayBuffer) ||
      (m && ie(m.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < 'u' &&
        (ie(m, SharedArrayBuffer) || (m && ie(m.buffer, SharedArrayBuffer))))
    )
      return b(m, R, U)
    if (typeof m == 'number')
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      )
    let te = m.valueOf && m.valueOf()
    if (te != null && te !== m) return o.from(te, R, U)
    let de = w(m)
    if (de) return de
    if (
      typeof Symbol < 'u' &&
      Symbol.toPrimitive != null &&
      typeof m[Symbol.toPrimitive] == 'function'
    )
      return o.from(m[Symbol.toPrimitive]('string'), R, U)
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
        typeof m
    )
  }
  ;((o.from = function (m, R, U) {
    return u(m, R, U)
  }),
    Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(o, Uint8Array))
  function i(m) {
    if (typeof m != 'number')
      throw new TypeError('"size" argument must be of type number')
    if (m < 0)
      throw new RangeError('The value "' + m + '" is invalid for option "size"')
  }
  function a(m, R, U) {
    return (
      i(m),
      m <= 0
        ? s(m)
        : R !== void 0
          ? typeof U == 'string'
            ? s(m).fill(R, U)
            : s(m).fill(R)
          : s(m)
    )
  }
  o.alloc = function (m, R, U) {
    return a(m, R, U)
  }
  function d(m) {
    return (i(m), s(m < 0 ? 0 : A(m) | 0))
  }
  ;((o.allocUnsafe = function (m) {
    return d(m)
  }),
    (o.allocUnsafeSlow = function (m) {
      return d(m)
    }))
  function v(m, R) {
    if (((typeof R != 'string' || R === '') && (R = 'utf8'), !o.isEncoding(R)))
      throw new TypeError('Unknown encoding: ' + R)
    let U = _(m, R) | 0,
      te = s(U),
      de = te.write(m, R)
    return (de !== U && (te = te.slice(0, de)), te)
  }
  function S(m) {
    let R = m.length < 0 ? 0 : A(m.length) | 0,
      U = s(R)
    for (let te = 0; te < R; te += 1) U[te] = m[te] & 255
    return U
  }
  function E(m) {
    if (ie(m, Uint8Array)) {
      let R = new Uint8Array(m)
      return b(R.buffer, R.byteOffset, R.byteLength)
    }
    return S(m)
  }
  function b(m, R, U) {
    if (R < 0 || m.byteLength < R)
      throw new RangeError('"offset" is outside of buffer bounds')
    if (m.byteLength < R + (U || 0))
      throw new RangeError('"length" is outside of buffer bounds')
    let te
    return (
      R === void 0 && U === void 0
        ? (te = new Uint8Array(m))
        : U === void 0
          ? (te = new Uint8Array(m, R))
          : (te = new Uint8Array(m, R, U)),
      Object.setPrototypeOf(te, o.prototype),
      te
    )
  }
  function w(m) {
    if (o.isBuffer(m)) {
      let R = A(m.length) | 0,
        U = s(R)
      return (U.length === 0 || m.copy(U, 0, 0, R), U)
    }
    if (m.length !== void 0)
      return typeof m.length != 'number' || Ne(m.length) ? s(0) : S(m)
    if (m.type === 'Buffer' && Array.isArray(m.data)) return S(m.data)
  }
  function A(m) {
    if (m >= c)
      throw new RangeError(
        'Attempt to allocate Buffer larger than maximum size: 0x' +
          c.toString(16) +
          ' bytes'
      )
    return m | 0
  }
  function M(m) {
    return (+m != m && (m = 0), o.alloc(+m))
  }
  ;((o.isBuffer = function (m) {
    return m != null && m._isBuffer === !0 && m !== o.prototype
  }),
    (o.compare = function (m, R) {
      if (
        (ie(m, Uint8Array) && (m = o.from(m, m.offset, m.byteLength)),
        ie(R, Uint8Array) && (R = o.from(R, R.offset, R.byteLength)),
        !o.isBuffer(m) || !o.isBuffer(R))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        )
      if (m === R) return 0
      let U = m.length,
        te = R.length
      for (let de = 0, Ae = Math.min(U, te); de < Ae; ++de)
        if (m[de] !== R[de]) {
          ;((U = m[de]), (te = R[de]))
          break
        }
      return U < te ? -1 : te < U ? 1 : 0
    }),
    (o.isEncoding = function (m) {
      switch (String(m).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return !0
        default:
          return !1
      }
    }),
    (o.concat = function (m, R) {
      if (!Array.isArray(m))
        throw new TypeError('"list" argument must be an Array of Buffers')
      if (m.length === 0) return o.alloc(0)
      let U
      if (R === void 0) for (R = 0, U = 0; U < m.length; ++U) R += m[U].length
      let te = o.allocUnsafe(R),
        de = 0
      for (U = 0; U < m.length; ++U) {
        let Ae = m[U]
        if (ie(Ae, Uint8Array))
          de + Ae.length > te.length
            ? (o.isBuffer(Ae) || (Ae = o.from(Ae)), Ae.copy(te, de))
            : Uint8Array.prototype.set.call(te, Ae, de)
        else if (o.isBuffer(Ae)) Ae.copy(te, de)
        else throw new TypeError('"list" argument must be an Array of Buffers')
        de += Ae.length
      }
      return te
    }))
  function _(m, R) {
    if (o.isBuffer(m)) return m.length
    if (ArrayBuffer.isView(m) || ie(m, ArrayBuffer)) return m.byteLength
    if (typeof m != 'string')
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof m
      )
    let U = m.length,
      te = arguments.length > 2 && arguments[2] === !0
    if (!te && U === 0) return 0
    let de = !1
    for (;;)
      switch (R) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return U
        case 'utf8':
        case 'utf-8':
          return ne(m).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return U * 2
        case 'hex':
          return U >>> 1
        case 'base64':
          return Ce(m).length
        default:
          if (de) return te ? -1 : ne(m).length
          ;((R = ('' + R).toLowerCase()), (de = !0))
      }
  }
  o.byteLength = _
  function O(m, R, U) {
    let te = !1
    if (
      ((R === void 0 || R < 0) && (R = 0),
      R > this.length ||
        ((U === void 0 || U > this.length) && (U = this.length), U <= 0) ||
        ((U >>>= 0), (R >>>= 0), U <= R))
    )
      return ''
    for (m || (m = 'utf8'); ; )
      switch (m) {
        case 'hex':
          return F(this, R, U)
        case 'utf8':
        case 'utf-8':
          return ee(this, R, U)
        case 'ascii':
          return K(this, R, U)
        case 'latin1':
        case 'binary':
          return P(this, R, U)
        case 'base64':
          return I(this, R, U)
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ce(this, R, U)
        default:
          if (te) throw new TypeError('Unknown encoding: ' + m)
          ;((m = (m + '').toLowerCase()), (te = !0))
      }
  }
  o.prototype._isBuffer = !0
  function N(m, R, U) {
    let te = m[R]
    ;((m[R] = m[U]), (m[U] = te))
  }
  ;((o.prototype.swap16 = function () {
    let m = this.length
    if (m % 2 !== 0)
      throw new RangeError('Buffer size must be a multiple of 16-bits')
    for (let R = 0; R < m; R += 2) N(this, R, R + 1)
    return this
  }),
    (o.prototype.swap32 = function () {
      let m = this.length
      if (m % 4 !== 0)
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      for (let R = 0; R < m; R += 4) (N(this, R, R + 3), N(this, R + 1, R + 2))
      return this
    }),
    (o.prototype.swap64 = function () {
      let m = this.length
      if (m % 8 !== 0)
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      for (let R = 0; R < m; R += 8)
        (N(this, R, R + 7),
          N(this, R + 1, R + 6),
          N(this, R + 2, R + 5),
          N(this, R + 3, R + 4))
      return this
    }),
    (o.prototype.toString = function () {
      let m = this.length
      return m === 0
        ? ''
        : arguments.length === 0
          ? ee(this, 0, m)
          : O.apply(this, arguments)
    }),
    (o.prototype.toLocaleString = o.prototype.toString),
    (o.prototype.equals = function (m) {
      if (!o.isBuffer(m)) throw new TypeError('Argument must be a Buffer')
      return this === m ? !0 : o.compare(this, m) === 0
    }),
    (o.prototype.inspect = function () {
      let m = '',
        R = Xn.INSPECT_MAX_BYTES
      return (
        (m = this.toString('hex', 0, R)
          .replace(/(.{2})/g, '$1 ')
          .trim()),
        this.length > R && (m += ' ... '),
        '<Buffer ' + m + '>'
      )
    }),
    h && (o.prototype[h] = o.prototype.inspect),
    (o.prototype.compare = function (m, R, U, te, de) {
      if (
        (ie(m, Uint8Array) && (m = o.from(m, m.offset, m.byteLength)),
        !o.isBuffer(m))
      )
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof m
        )
      if (
        (R === void 0 && (R = 0),
        U === void 0 && (U = m ? m.length : 0),
        te === void 0 && (te = 0),
        de === void 0 && (de = this.length),
        R < 0 || U > m.length || te < 0 || de > this.length)
      )
        throw new RangeError('out of range index')
      if (te >= de && R >= U) return 0
      if (te >= de) return -1
      if (R >= U) return 1
      if (((R >>>= 0), (U >>>= 0), (te >>>= 0), (de >>>= 0), this === m))
        return 0
      let Ae = de - te,
        qe = U - R,
        se = Math.min(Ae, qe),
        me = this.slice(te, de),
        Ye = m.slice(R, U)
      for (let Pe = 0; Pe < se; ++Pe)
        if (me[Pe] !== Ye[Pe]) {
          ;((Ae = me[Pe]), (qe = Ye[Pe]))
          break
        }
      return Ae < qe ? -1 : qe < Ae ? 1 : 0
    }))
  function T(m, R, U, te, de) {
    if (m.length === 0) return -1
    if (
      (typeof U == 'string'
        ? ((te = U), (U = 0))
        : U > 2147483647
          ? (U = 2147483647)
          : U < -2147483648 && (U = -2147483648),
      (U = +U),
      Ne(U) && (U = de ? 0 : m.length - 1),
      U < 0 && (U = m.length + U),
      U >= m.length)
    ) {
      if (de) return -1
      U = m.length - 1
    } else if (U < 0)
      if (de) U = 0
      else return -1
    if ((typeof R == 'string' && (R = o.from(R, te)), o.isBuffer(R)))
      return R.length === 0 ? -1 : j(m, R, U, te, de)
    if (typeof R == 'number')
      return (
        (R = R & 255),
        typeof Uint8Array.prototype.indexOf == 'function'
          ? de
            ? Uint8Array.prototype.indexOf.call(m, R, U)
            : Uint8Array.prototype.lastIndexOf.call(m, R, U)
          : j(m, [R], U, te, de)
      )
    throw new TypeError('val must be string, number or Buffer')
  }
  function j(m, R, U, te, de) {
    let Ae = 1,
      qe = m.length,
      se = R.length
    if (
      te !== void 0 &&
      ((te = String(te).toLowerCase()),
      te === 'ucs2' || te === 'ucs-2' || te === 'utf16le' || te === 'utf-16le')
    ) {
      if (m.length < 2 || R.length < 2) return -1
      ;((Ae = 2), (qe /= 2), (se /= 2), (U /= 2))
    }
    function me(Pe, Ze) {
      return Ae === 1 ? Pe[Ze] : Pe.readUInt16BE(Ze * Ae)
    }
    let Ye
    if (de) {
      let Pe = -1
      for (Ye = U; Ye < qe; Ye++)
        if (me(m, Ye) === me(R, Pe === -1 ? 0 : Ye - Pe)) {
          if ((Pe === -1 && (Pe = Ye), Ye - Pe + 1 === se)) return Pe * Ae
        } else (Pe !== -1 && (Ye -= Ye - Pe), (Pe = -1))
    } else
      for (U + se > qe && (U = qe - se), Ye = U; Ye >= 0; Ye--) {
        let Pe = !0
        for (let Ze = 0; Ze < se; Ze++)
          if (me(m, Ye + Ze) !== me(R, Ze)) {
            Pe = !1
            break
          }
        if (Pe) return Ye
      }
    return -1
  }
  ;((o.prototype.includes = function (m, R, U) {
    return this.indexOf(m, R, U) !== -1
  }),
    (o.prototype.indexOf = function (m, R, U) {
      return T(this, m, R, U, !0)
    }),
    (o.prototype.lastIndexOf = function (m, R, U) {
      return T(this, m, R, U, !1)
    }))
  function x(m, R, U, te) {
    U = Number(U) || 0
    let de = m.length - U
    te ? ((te = Number(te)), te > de && (te = de)) : (te = de)
    let Ae = R.length
    te > Ae / 2 && (te = Ae / 2)
    let qe
    for (qe = 0; qe < te; ++qe) {
      let se = parseInt(R.substr(qe * 2, 2), 16)
      if (Ne(se)) return qe
      m[U + qe] = se
    }
    return qe
  }
  function k(m, R, U, te) {
    return Be(ne(R, m.length - U), m, U, te)
  }
  function q(m, R, U, te) {
    return Be(ge(R), m, U, te)
  }
  function H(m, R, U, te) {
    return Be(Ce(R), m, U, te)
  }
  function X(m, R, U, te) {
    return Be(Re(R, m.length - U), m, U, te)
  }
  ;((o.prototype.write = function (m, R, U, te) {
    if (R === void 0) ((te = 'utf8'), (U = this.length), (R = 0))
    else if (U === void 0 && typeof R == 'string')
      ((te = R), (U = this.length), (R = 0))
    else if (isFinite(R))
      ((R = R >>> 0),
        isFinite(U)
          ? ((U = U >>> 0), te === void 0 && (te = 'utf8'))
          : ((te = U), (U = void 0)))
    else
      throw new Error(
        'Buffer.write(string, encoding, offset[, length]) is no longer supported'
      )
    let de = this.length - R
    if (
      ((U === void 0 || U > de) && (U = de),
      (m.length > 0 && (U < 0 || R < 0)) || R > this.length)
    )
      throw new RangeError('Attempt to write outside buffer bounds')
    te || (te = 'utf8')
    let Ae = !1
    for (;;)
      switch (te) {
        case 'hex':
          return x(this, m, R, U)
        case 'utf8':
        case 'utf-8':
          return k(this, m, R, U)
        case 'ascii':
        case 'latin1':
        case 'binary':
          return q(this, m, R, U)
        case 'base64':
          return H(this, m, R, U)
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return X(this, m, R, U)
        default:
          if (Ae) throw new TypeError('Unknown encoding: ' + te)
          ;((te = ('' + te).toLowerCase()), (Ae = !0))
      }
  }),
    (o.prototype.toJSON = function () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0),
      }
    }))
  function I(m, R, U) {
    return R === 0 && U === m.length
      ? y.fromByteArray(m)
      : y.fromByteArray(m.slice(R, U))
  }
  function ee(m, R, U) {
    U = Math.min(m.length, U)
    let te = [],
      de = R
    for (; de < U; ) {
      let Ae = m[de],
        qe = null,
        se = Ae > 239 ? 4 : Ae > 223 ? 3 : Ae > 191 ? 2 : 1
      if (de + se <= U) {
        let me, Ye, Pe, Ze
        switch (se) {
          case 1:
            Ae < 128 && (qe = Ae)
            break
          case 2:
            ;((me = m[de + 1]),
              (me & 192) === 128 &&
                ((Ze = ((Ae & 31) << 6) | (me & 63)), Ze > 127 && (qe = Ze)))
            break
          case 3:
            ;((me = m[de + 1]),
              (Ye = m[de + 2]),
              (me & 192) === 128 &&
                (Ye & 192) === 128 &&
                ((Ze = ((Ae & 15) << 12) | ((me & 63) << 6) | (Ye & 63)),
                Ze > 2047 && (Ze < 55296 || Ze > 57343) && (qe = Ze)))
            break
          case 4:
            ;((me = m[de + 1]),
              (Ye = m[de + 2]),
              (Pe = m[de + 3]),
              (me & 192) === 128 &&
                (Ye & 192) === 128 &&
                (Pe & 192) === 128 &&
                ((Ze =
                  ((Ae & 15) << 18) |
                  ((me & 63) << 12) |
                  ((Ye & 63) << 6) |
                  (Pe & 63)),
                Ze > 65535 && Ze < 1114112 && (qe = Ze)))
        }
      }
      ;(qe === null
        ? ((qe = 65533), (se = 1))
        : qe > 65535 &&
          ((qe -= 65536),
          te.push(((qe >>> 10) & 1023) | 55296),
          (qe = 56320 | (qe & 1023))),
        te.push(qe),
        (de += se))
    }
    return $(te)
  }
  let J = 4096
  function $(m) {
    let R = m.length
    if (R <= J) return String.fromCharCode.apply(String, m)
    let U = '',
      te = 0
    for (; te < R; )
      U += String.fromCharCode.apply(String, m.slice(te, (te += J)))
    return U
  }
  function K(m, R, U) {
    let te = ''
    U = Math.min(m.length, U)
    for (let de = R; de < U; ++de) te += String.fromCharCode(m[de] & 127)
    return te
  }
  function P(m, R, U) {
    let te = ''
    U = Math.min(m.length, U)
    for (let de = R; de < U; ++de) te += String.fromCharCode(m[de])
    return te
  }
  function F(m, R, U) {
    let te = m.length
    ;((!R || R < 0) && (R = 0), (!U || U < 0 || U > te) && (U = te))
    let de = ''
    for (let Ae = R; Ae < U; ++Ae) de += Ie[m[Ae]]
    return de
  }
  function ce(m, R, U) {
    let te = m.slice(R, U),
      de = ''
    for (let Ae = 0; Ae < te.length - 1; Ae += 2)
      de += String.fromCharCode(te[Ae] + te[Ae + 1] * 256)
    return de
  }
  o.prototype.slice = function (m, R) {
    let U = this.length
    ;((m = ~~m),
      (R = R === void 0 ? U : ~~R),
      m < 0 ? ((m += U), m < 0 && (m = 0)) : m > U && (m = U),
      R < 0 ? ((R += U), R < 0 && (R = 0)) : R > U && (R = U),
      R < m && (R = m))
    let te = this.subarray(m, R)
    return (Object.setPrototypeOf(te, o.prototype), te)
  }
  function V(m, R, U) {
    if (m % 1 !== 0 || m < 0) throw new RangeError('offset is not uint')
    if (m + R > U) throw new RangeError('Trying to access beyond buffer length')
  }
  ;((o.prototype.readUintLE = o.prototype.readUIntLE =
    function (m, R, U) {
      ;((m = m >>> 0), (R = R >>> 0), U || V(m, R, this.length))
      let te = this[m],
        de = 1,
        Ae = 0
      for (; ++Ae < R && (de *= 256); ) te += this[m + Ae] * de
      return te
    }),
    (o.prototype.readUintBE = o.prototype.readUIntBE =
      function (m, R, U) {
        ;((m = m >>> 0), (R = R >>> 0), U || V(m, R, this.length))
        let te = this[m + --R],
          de = 1
        for (; R > 0 && (de *= 256); ) te += this[m + --R] * de
        return te
      }),
    (o.prototype.readUint8 = o.prototype.readUInt8 =
      function (m, R) {
        return ((m = m >>> 0), R || V(m, 1, this.length), this[m])
      }),
    (o.prototype.readUint16LE = o.prototype.readUInt16LE =
      function (m, R) {
        return (
          (m = m >>> 0),
          R || V(m, 2, this.length),
          this[m] | (this[m + 1] << 8)
        )
      }),
    (o.prototype.readUint16BE = o.prototype.readUInt16BE =
      function (m, R) {
        return (
          (m = m >>> 0),
          R || V(m, 2, this.length),
          (this[m] << 8) | this[m + 1]
        )
      }),
    (o.prototype.readUint32LE = o.prototype.readUInt32LE =
      function (m, R) {
        return (
          (m = m >>> 0),
          R || V(m, 4, this.length),
          (this[m] | (this[m + 1] << 8) | (this[m + 2] << 16)) +
            this[m + 3] * 16777216
        )
      }),
    (o.prototype.readUint32BE = o.prototype.readUInt32BE =
      function (m, R) {
        return (
          (m = m >>> 0),
          R || V(m, 4, this.length),
          this[m] * 16777216 +
            ((this[m + 1] << 16) | (this[m + 2] << 8) | this[m + 3])
        )
      }),
    (o.prototype.readBigUInt64LE = Se(function (m) {
      ;((m = m >>> 0), fe(m, 'offset'))
      let R = this[m],
        U = this[m + 7]
      ;(R === void 0 || U === void 0) && De(m, this.length - 8)
      let te =
          R + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24,
        de = this[++m] + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + U * 2 ** 24
      return BigInt(te) + (BigInt(de) << BigInt(32))
    })),
    (o.prototype.readBigUInt64BE = Se(function (m) {
      ;((m = m >>> 0), fe(m, 'offset'))
      let R = this[m],
        U = this[m + 7]
      ;(R === void 0 || U === void 0) && De(m, this.length - 8)
      let te =
          R * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m],
        de = this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + U
      return (BigInt(te) << BigInt(32)) + BigInt(de)
    })),
    (o.prototype.readIntLE = function (m, R, U) {
      ;((m = m >>> 0), (R = R >>> 0), U || V(m, R, this.length))
      let te = this[m],
        de = 1,
        Ae = 0
      for (; ++Ae < R && (de *= 256); ) te += this[m + Ae] * de
      return ((de *= 128), te >= de && (te -= Math.pow(2, 8 * R)), te)
    }),
    (o.prototype.readIntBE = function (m, R, U) {
      ;((m = m >>> 0), (R = R >>> 0), U || V(m, R, this.length))
      let te = R,
        de = 1,
        Ae = this[m + --te]
      for (; te > 0 && (de *= 256); ) Ae += this[m + --te] * de
      return ((de *= 128), Ae >= de && (Ae -= Math.pow(2, 8 * R)), Ae)
    }),
    (o.prototype.readInt8 = function (m, R) {
      return (
        (m = m >>> 0),
        R || V(m, 1, this.length),
        this[m] & 128 ? (255 - this[m] + 1) * -1 : this[m]
      )
    }),
    (o.prototype.readInt16LE = function (m, R) {
      ;((m = m >>> 0), R || V(m, 2, this.length))
      let U = this[m] | (this[m + 1] << 8)
      return U & 32768 ? U | 4294901760 : U
    }),
    (o.prototype.readInt16BE = function (m, R) {
      ;((m = m >>> 0), R || V(m, 2, this.length))
      let U = this[m + 1] | (this[m] << 8)
      return U & 32768 ? U | 4294901760 : U
    }),
    (o.prototype.readInt32LE = function (m, R) {
      return (
        (m = m >>> 0),
        R || V(m, 4, this.length),
        this[m] | (this[m + 1] << 8) | (this[m + 2] << 16) | (this[m + 3] << 24)
      )
    }),
    (o.prototype.readInt32BE = function (m, R) {
      return (
        (m = m >>> 0),
        R || V(m, 4, this.length),
        (this[m] << 24) | (this[m + 1] << 16) | (this[m + 2] << 8) | this[m + 3]
      )
    }),
    (o.prototype.readBigInt64LE = Se(function (m) {
      ;((m = m >>> 0), fe(m, 'offset'))
      let R = this[m],
        U = this[m + 7]
      ;(R === void 0 || U === void 0) && De(m, this.length - 8)
      let te =
        this[m + 4] + this[m + 5] * 2 ** 8 + this[m + 6] * 2 ** 16 + (U << 24)
      return (
        (BigInt(te) << BigInt(32)) +
        BigInt(
          R + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24
        )
      )
    })),
    (o.prototype.readBigInt64BE = Se(function (m) {
      ;((m = m >>> 0), fe(m, 'offset'))
      let R = this[m],
        U = this[m + 7]
      ;(R === void 0 || U === void 0) && De(m, this.length - 8)
      let te = (R << 24) + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m]
      return (
        (BigInt(te) << BigInt(32)) +
        BigInt(
          this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + U
        )
      )
    })),
    (o.prototype.readFloatLE = function (m, R) {
      return (
        (m = m >>> 0),
        R || V(m, 4, this.length),
        p.read(this, m, !0, 23, 4)
      )
    }),
    (o.prototype.readFloatBE = function (m, R) {
      return (
        (m = m >>> 0),
        R || V(m, 4, this.length),
        p.read(this, m, !1, 23, 4)
      )
    }),
    (o.prototype.readDoubleLE = function (m, R) {
      return (
        (m = m >>> 0),
        R || V(m, 8, this.length),
        p.read(this, m, !0, 52, 8)
      )
    }),
    (o.prototype.readDoubleBE = function (m, R) {
      return (
        (m = m >>> 0),
        R || V(m, 8, this.length),
        p.read(this, m, !1, 52, 8)
      )
    }))
  function B(m, R, U, te, de, Ae) {
    if (!o.isBuffer(m))
      throw new TypeError('"buffer" argument must be a Buffer instance')
    if (R > de || R < Ae)
      throw new RangeError('"value" argument is out of bounds')
    if (U + te > m.length) throw new RangeError('Index out of range')
  }
  ;((o.prototype.writeUintLE = o.prototype.writeUIntLE =
    function (m, R, U, te) {
      if (((m = +m), (R = R >>> 0), (U = U >>> 0), !te)) {
        let qe = Math.pow(2, 8 * U) - 1
        B(this, m, R, U, qe, 0)
      }
      let de = 1,
        Ae = 0
      for (this[R] = m & 255; ++Ae < U && (de *= 256); )
        this[R + Ae] = (m / de) & 255
      return R + U
    }),
    (o.prototype.writeUintBE = o.prototype.writeUIntBE =
      function (m, R, U, te) {
        if (((m = +m), (R = R >>> 0), (U = U >>> 0), !te)) {
          let qe = Math.pow(2, 8 * U) - 1
          B(this, m, R, U, qe, 0)
        }
        let de = U - 1,
          Ae = 1
        for (this[R + de] = m & 255; --de >= 0 && (Ae *= 256); )
          this[R + de] = (m / Ae) & 255
        return R + U
      }),
    (o.prototype.writeUint8 = o.prototype.writeUInt8 =
      function (m, R, U) {
        return (
          (m = +m),
          (R = R >>> 0),
          U || B(this, m, R, 1, 255, 0),
          (this[R] = m & 255),
          R + 1
        )
      }),
    (o.prototype.writeUint16LE = o.prototype.writeUInt16LE =
      function (m, R, U) {
        return (
          (m = +m),
          (R = R >>> 0),
          U || B(this, m, R, 2, 65535, 0),
          (this[R] = m & 255),
          (this[R + 1] = m >>> 8),
          R + 2
        )
      }),
    (o.prototype.writeUint16BE = o.prototype.writeUInt16BE =
      function (m, R, U) {
        return (
          (m = +m),
          (R = R >>> 0),
          U || B(this, m, R, 2, 65535, 0),
          (this[R] = m >>> 8),
          (this[R + 1] = m & 255),
          R + 2
        )
      }),
    (o.prototype.writeUint32LE = o.prototype.writeUInt32LE =
      function (m, R, U) {
        return (
          (m = +m),
          (R = R >>> 0),
          U || B(this, m, R, 4, 4294967295, 0),
          (this[R + 3] = m >>> 24),
          (this[R + 2] = m >>> 16),
          (this[R + 1] = m >>> 8),
          (this[R] = m & 255),
          R + 4
        )
      }),
    (o.prototype.writeUint32BE = o.prototype.writeUInt32BE =
      function (m, R, U) {
        return (
          (m = +m),
          (R = R >>> 0),
          U || B(this, m, R, 4, 4294967295, 0),
          (this[R] = m >>> 24),
          (this[R + 1] = m >>> 16),
          (this[R + 2] = m >>> 8),
          (this[R + 3] = m & 255),
          R + 4
        )
      }))
  function D(m, R, U, te, de) {
    ue(R, te, de, m, U, 7)
    let Ae = Number(R & BigInt(4294967295))
    ;((m[U++] = Ae),
      (Ae = Ae >> 8),
      (m[U++] = Ae),
      (Ae = Ae >> 8),
      (m[U++] = Ae),
      (Ae = Ae >> 8),
      (m[U++] = Ae))
    let qe = Number((R >> BigInt(32)) & BigInt(4294967295))
    return (
      (m[U++] = qe),
      (qe = qe >> 8),
      (m[U++] = qe),
      (qe = qe >> 8),
      (m[U++] = qe),
      (qe = qe >> 8),
      (m[U++] = qe),
      U
    )
  }
  function Q(m, R, U, te, de) {
    ue(R, te, de, m, U, 7)
    let Ae = Number(R & BigInt(4294967295))
    ;((m[U + 7] = Ae),
      (Ae = Ae >> 8),
      (m[U + 6] = Ae),
      (Ae = Ae >> 8),
      (m[U + 5] = Ae),
      (Ae = Ae >> 8),
      (m[U + 4] = Ae))
    let qe = Number((R >> BigInt(32)) & BigInt(4294967295))
    return (
      (m[U + 3] = qe),
      (qe = qe >> 8),
      (m[U + 2] = qe),
      (qe = qe >> 8),
      (m[U + 1] = qe),
      (qe = qe >> 8),
      (m[U] = qe),
      U + 8
    )
  }
  ;((o.prototype.writeBigUInt64LE = Se(function (m, R = 0) {
    return D(this, m, R, BigInt(0), BigInt('0xffffffffffffffff'))
  })),
    (o.prototype.writeBigUInt64BE = Se(function (m, R = 0) {
      return Q(this, m, R, BigInt(0), BigInt('0xffffffffffffffff'))
    })),
    (o.prototype.writeIntLE = function (m, R, U, te) {
      if (((m = +m), (R = R >>> 0), !te)) {
        let se = Math.pow(2, 8 * U - 1)
        B(this, m, R, U, se - 1, -se)
      }
      let de = 0,
        Ae = 1,
        qe = 0
      for (this[R] = m & 255; ++de < U && (Ae *= 256); )
        (m < 0 && qe === 0 && this[R + de - 1] !== 0 && (qe = 1),
          (this[R + de] = (((m / Ae) >> 0) - qe) & 255))
      return R + U
    }),
    (o.prototype.writeIntBE = function (m, R, U, te) {
      if (((m = +m), (R = R >>> 0), !te)) {
        let se = Math.pow(2, 8 * U - 1)
        B(this, m, R, U, se - 1, -se)
      }
      let de = U - 1,
        Ae = 1,
        qe = 0
      for (this[R + de] = m & 255; --de >= 0 && (Ae *= 256); )
        (m < 0 && qe === 0 && this[R + de + 1] !== 0 && (qe = 1),
          (this[R + de] = (((m / Ae) >> 0) - qe) & 255))
      return R + U
    }),
    (o.prototype.writeInt8 = function (m, R, U) {
      return (
        (m = +m),
        (R = R >>> 0),
        U || B(this, m, R, 1, 127, -128),
        m < 0 && (m = 255 + m + 1),
        (this[R] = m & 255),
        R + 1
      )
    }),
    (o.prototype.writeInt16LE = function (m, R, U) {
      return (
        (m = +m),
        (R = R >>> 0),
        U || B(this, m, R, 2, 32767, -32768),
        (this[R] = m & 255),
        (this[R + 1] = m >>> 8),
        R + 2
      )
    }),
    (o.prototype.writeInt16BE = function (m, R, U) {
      return (
        (m = +m),
        (R = R >>> 0),
        U || B(this, m, R, 2, 32767, -32768),
        (this[R] = m >>> 8),
        (this[R + 1] = m & 255),
        R + 2
      )
    }),
    (o.prototype.writeInt32LE = function (m, R, U) {
      return (
        (m = +m),
        (R = R >>> 0),
        U || B(this, m, R, 4, 2147483647, -2147483648),
        (this[R] = m & 255),
        (this[R + 1] = m >>> 8),
        (this[R + 2] = m >>> 16),
        (this[R + 3] = m >>> 24),
        R + 4
      )
    }),
    (o.prototype.writeInt32BE = function (m, R, U) {
      return (
        (m = +m),
        (R = R >>> 0),
        U || B(this, m, R, 4, 2147483647, -2147483648),
        m < 0 && (m = 4294967295 + m + 1),
        (this[R] = m >>> 24),
        (this[R + 1] = m >>> 16),
        (this[R + 2] = m >>> 8),
        (this[R + 3] = m & 255),
        R + 4
      )
    }),
    (o.prototype.writeBigInt64LE = Se(function (m, R = 0) {
      return D(
        this,
        m,
        R,
        -BigInt('0x8000000000000000'),
        BigInt('0x7fffffffffffffff')
      )
    })),
    (o.prototype.writeBigInt64BE = Se(function (m, R = 0) {
      return Q(
        this,
        m,
        R,
        -BigInt('0x8000000000000000'),
        BigInt('0x7fffffffffffffff')
      )
    })))
  function he(m, R, U, te, de, Ae) {
    if (U + te > m.length) throw new RangeError('Index out of range')
    if (U < 0) throw new RangeError('Index out of range')
  }
  function le(m, R, U, te, de) {
    return (
      (R = +R),
      (U = U >>> 0),
      de || he(m, R, U, 4),
      p.write(m, R, U, te, 23, 4),
      U + 4
    )
  }
  ;((o.prototype.writeFloatLE = function (m, R, U) {
    return le(this, m, R, !0, U)
  }),
    (o.prototype.writeFloatBE = function (m, R, U) {
      return le(this, m, R, !1, U)
    }))
  function Me(m, R, U, te, de) {
    return (
      (R = +R),
      (U = U >>> 0),
      de || he(m, R, U, 8),
      p.write(m, R, U, te, 52, 8),
      U + 8
    )
  }
  ;((o.prototype.writeDoubleLE = function (m, R, U) {
    return Me(this, m, R, !0, U)
  }),
    (o.prototype.writeDoubleBE = function (m, R, U) {
      return Me(this, m, R, !1, U)
    }),
    (o.prototype.copy = function (m, R, U, te) {
      if (!o.isBuffer(m)) throw new TypeError('argument should be a Buffer')
      if (
        (U || (U = 0),
        !te && te !== 0 && (te = this.length),
        R >= m.length && (R = m.length),
        R || (R = 0),
        te > 0 && te < U && (te = U),
        te === U || m.length === 0 || this.length === 0)
      )
        return 0
      if (R < 0) throw new RangeError('targetStart out of bounds')
      if (U < 0 || U >= this.length) throw new RangeError('Index out of range')
      if (te < 0) throw new RangeError('sourceEnd out of bounds')
      ;(te > this.length && (te = this.length),
        m.length - R < te - U && (te = m.length - R + U))
      let de = te - U
      return (
        this === m && typeof Uint8Array.prototype.copyWithin == 'function'
          ? this.copyWithin(R, U, te)
          : Uint8Array.prototype.set.call(m, this.subarray(U, te), R),
        de
      )
    }),
    (o.prototype.fill = function (m, R, U, te) {
      if (typeof m == 'string') {
        if (
          (typeof R == 'string'
            ? ((te = R), (R = 0), (U = this.length))
            : typeof U == 'string' && ((te = U), (U = this.length)),
          te !== void 0 && typeof te != 'string')
        )
          throw new TypeError('encoding must be a string')
        if (typeof te == 'string' && !o.isEncoding(te))
          throw new TypeError('Unknown encoding: ' + te)
        if (m.length === 1) {
          let Ae = m.charCodeAt(0)
          ;((te === 'utf8' && Ae < 128) || te === 'latin1') && (m = Ae)
        }
      } else
        typeof m == 'number'
          ? (m = m & 255)
          : typeof m == 'boolean' && (m = Number(m))
      if (R < 0 || this.length < R || this.length < U)
        throw new RangeError('Out of range index')
      if (U <= R) return this
      ;((R = R >>> 0), (U = U === void 0 ? this.length : U >>> 0), m || (m = 0))
      let de
      if (typeof m == 'number') for (de = R; de < U; ++de) this[de] = m
      else {
        let Ae = o.isBuffer(m) ? m : o.from(m, te),
          qe = Ae.length
        if (qe === 0)
          throw new TypeError(
            'The value "' + m + '" is invalid for argument "value"'
          )
        for (de = 0; de < U - R; ++de) this[de + R] = Ae[de % qe]
      }
      return this
    }))
  let re = {}
  function Y(m, R, U) {
    re[m] = class extends U {
      constructor() {
        ;(super(),
          Object.defineProperty(this, 'message', {
            value: R.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${m}]`),
          this.stack,
          delete this.name)
      }
      get code() {
        return m
      }
      set code(te) {
        Object.defineProperty(this, 'code', {
          configurable: !0,
          enumerable: !0,
          value: te,
          writable: !0,
        })
      }
      toString() {
        return `${this.name} [${m}]: ${this.message}`
      }
    }
  }
  ;(Y(
    'ERR_BUFFER_OUT_OF_BOUNDS',
    function (m) {
      return m
        ? `${m} is outside of buffer bounds`
        : 'Attempt to access memory outside buffer bounds'
    },
    RangeError
  ),
    Y(
      'ERR_INVALID_ARG_TYPE',
      function (m, R) {
        return `The "${m}" argument must be of type number. Received type ${typeof R}`
      },
      TypeError
    ),
    Y(
      'ERR_OUT_OF_RANGE',
      function (m, R, U) {
        let te = `The value of "${m}" is out of range.`,
          de = U
        return (
          Number.isInteger(U) && Math.abs(U) > 2 ** 32
            ? (de = ye(String(U)))
            : typeof U == 'bigint' &&
              ((de = String(U)),
              (U > BigInt(2) ** BigInt(32) || U < -(BigInt(2) ** BigInt(32))) &&
                (de = ye(de)),
              (de += 'n')),
          (te += ` It must be ${R}. Received ${de}`),
          te
        )
      },
      RangeError
    ))
  function ye(m) {
    let R = '',
      U = m.length,
      te = m[0] === '-' ? 1 : 0
    for (; U >= te + 4; U -= 3) R = `_${m.slice(U - 3, U)}${R}`
    return `${m.slice(0, U)}${R}`
  }
  function oe(m, R, U) {
    ;(fe(R, 'offset'),
      (m[R] === void 0 || m[R + U] === void 0) && De(R, m.length - (U + 1)))
  }
  function ue(m, R, U, te, de, Ae) {
    if (m > U || m < R) {
      let qe = typeof R == 'bigint' ? 'n' : '',
        se
      throw (
        R === 0 || R === BigInt(0)
          ? (se = `>= 0${qe} and < 2${qe} ** ${(Ae + 1) * 8}${qe}`)
          : (se = `>= -(2${qe} ** ${(Ae + 1) * 8 - 1}${qe}) and < 2 ** ${(Ae + 1) * 8 - 1}${qe}`),
        new re.ERR_OUT_OF_RANGE('value', se, m)
      )
    }
    oe(te, de, Ae)
  }
  function fe(m, R) {
    if (typeof m != 'number') throw new re.ERR_INVALID_ARG_TYPE(R, 'number', m)
  }
  function De(m, R, U) {
    throw Math.floor(m) !== m
      ? (fe(m, U), new re.ERR_OUT_OF_RANGE('offset', 'an integer', m))
      : R < 0
        ? new re.ERR_BUFFER_OUT_OF_BOUNDS()
        : new re.ERR_OUT_OF_RANGE('offset', `>= 0 and <= ${R}`, m)
  }
  let we = /[^+/0-9A-Za-z-_]/g
  function G(m) {
    if (((m = m.split('=')[0]), (m = m.trim().replace(we, '')), m.length < 2))
      return ''
    for (; m.length % 4 !== 0; ) m = m + '='
    return m
  }
  function ne(m, R) {
    R = R || 1 / 0
    let U,
      te = m.length,
      de = null,
      Ae = []
    for (let qe = 0; qe < te; ++qe) {
      if (((U = m.charCodeAt(qe)), U > 55295 && U < 57344)) {
        if (!de) {
          if (U > 56319) {
            ;(R -= 3) > -1 && Ae.push(239, 191, 189)
            continue
          } else if (qe + 1 === te) {
            ;(R -= 3) > -1 && Ae.push(239, 191, 189)
            continue
          }
          de = U
          continue
        }
        if (U < 56320) {
          ;((R -= 3) > -1 && Ae.push(239, 191, 189), (de = U))
          continue
        }
        U = (((de - 55296) << 10) | (U - 56320)) + 65536
      } else de && (R -= 3) > -1 && Ae.push(239, 191, 189)
      if (((de = null), U < 128)) {
        if ((R -= 1) < 0) break
        Ae.push(U)
      } else if (U < 2048) {
        if ((R -= 2) < 0) break
        Ae.push((U >> 6) | 192, (U & 63) | 128)
      } else if (U < 65536) {
        if ((R -= 3) < 0) break
        Ae.push((U >> 12) | 224, ((U >> 6) & 63) | 128, (U & 63) | 128)
      } else if (U < 1114112) {
        if ((R -= 4) < 0) break
        Ae.push(
          (U >> 18) | 240,
          ((U >> 12) & 63) | 128,
          ((U >> 6) & 63) | 128,
          (U & 63) | 128
        )
      } else throw new Error('Invalid code point')
    }
    return Ae
  }
  function ge(m) {
    let R = []
    for (let U = 0; U < m.length; ++U) R.push(m.charCodeAt(U) & 255)
    return R
  }
  function Re(m, R) {
    let U,
      te,
      de,
      Ae = []
    for (let qe = 0; qe < m.length && !((R -= 2) < 0); ++qe)
      ((U = m.charCodeAt(qe)),
        (te = U >> 8),
        (de = U % 256),
        Ae.push(de),
        Ae.push(te))
    return Ae
  }
  function Ce(m) {
    return y.toByteArray(G(m))
  }
  function Be(m, R, U, te) {
    let de
    for (de = 0; de < te && !(de + U >= R.length || de >= m.length); ++de)
      R[de + U] = m[de]
    return de
  }
  function ie(m, R) {
    return (
      m instanceof R ||
      (m != null &&
        m.constructor != null &&
        m.constructor.name != null &&
        m.constructor.name === R.name)
    )
  }
  function Ne(m) {
    return m !== m
  }
  let Ie = (function () {
    let m = '0123456789abcdef',
      R = new Array(256)
    for (let U = 0; U < 16; ++U) {
      let te = U * 16
      for (let de = 0; de < 16; ++de) R[te + de] = m[U] + m[de]
    }
    return R
  })()
  function Se(m) {
    return typeof BigInt > 'u' ? Je : m
  }
  function Je() {
    throw new Error('BigInt not supported')
  }
  return Xn
}
var ua,
  Bf,
  ol,
  kf,
  Xn,
  Lf,
  g1 = yr(() => {
    ;(Te(),
      xe(),
      Oe(),
      (ua = {}),
      (Bf = !1),
      (ol = {}),
      (kf = !1),
      (Xn = {}),
      (Lf = !1))
  }),
  Ht = {}
ha(Ht, {
  Buffer: () => ns,
  INSPECT_MAX_BYTES: () => bb,
  default: () => mn,
  kMaxLength: () => vb,
})
var mn,
  ns,
  bb,
  vb,
  Pt = yr(() => {
    ;(Te(),
      xe(),
      Oe(),
      g1(),
      (mn = y1()),
      mn.Buffer,
      mn.SlowBuffer,
      mn.INSPECT_MAX_BYTES,
      mn.kMaxLength,
      (ns = mn.Buffer),
      (bb = mn.INSPECT_MAX_BYTES),
      (vb = mn.kMaxLength))
  }),
  xe = yr(() => {
    Pt()
  }),
  Tt = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = class extends Error {
      constructor(c) {
        if (!Array.isArray(c))
          throw new TypeError(`Expected input to be an Array, got ${typeof c}`)
        let g = ''
        for (let s = 0; s < c.length; s++)
          g += `    ${c[s].stack}
`
        ;(super(g), (this.name = 'AggregateError'), (this.errors = c))
      }
    }
    p.exports = {
      AggregateError: h,
      ArrayIsArray(c) {
        return Array.isArray(c)
      },
      ArrayPrototypeIncludes(c, g) {
        return c.includes(g)
      },
      ArrayPrototypeIndexOf(c, g) {
        return c.indexOf(g)
      },
      ArrayPrototypeJoin(c, g) {
        return c.join(g)
      },
      ArrayPrototypeMap(c, g) {
        return c.map(g)
      },
      ArrayPrototypePop(c, g) {
        return c.pop(g)
      },
      ArrayPrototypePush(c, g) {
        return c.push(g)
      },
      ArrayPrototypeSlice(c, g, s) {
        return c.slice(g, s)
      },
      Error,
      FunctionPrototypeCall(c, g, ...s) {
        return c.call(g, ...s)
      },
      FunctionPrototypeSymbolHasInstance(c, g) {
        return Function.prototype[Symbol.hasInstance].call(c, g)
      },
      MathFloor: Math.floor,
      Number,
      NumberIsInteger: Number.isInteger,
      NumberIsNaN: Number.isNaN,
      NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
      NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
      NumberParseInt: Number.parseInt,
      ObjectDefineProperties(c, g) {
        return Object.defineProperties(c, g)
      },
      ObjectDefineProperty(c, g, s) {
        return Object.defineProperty(c, g, s)
      },
      ObjectGetOwnPropertyDescriptor(c, g) {
        return Object.getOwnPropertyDescriptor(c, g)
      },
      ObjectKeys(c) {
        return Object.keys(c)
      },
      ObjectSetPrototypeOf(c, g) {
        return Object.setPrototypeOf(c, g)
      },
      Promise,
      PromisePrototypeCatch(c, g) {
        return c.catch(g)
      },
      PromisePrototypeThen(c, g, s) {
        return c.then(g, s)
      },
      PromiseReject(c) {
        return Promise.reject(c)
      },
      PromiseResolve(c) {
        return Promise.resolve(c)
      },
      ReflectApply: Reflect.apply,
      RegExpPrototypeTest(c, g) {
        return c.test(g)
      },
      SafeSet: Set,
      String,
      StringPrototypeSlice(c, g, s) {
        return c.slice(g, s)
      },
      StringPrototypeToLowerCase(c) {
        return c.toLowerCase()
      },
      StringPrototypeToUpperCase(c) {
        return c.toUpperCase()
      },
      StringPrototypeTrim(c) {
        return c.trim()
      },
      Symbol,
      SymbolFor: Symbol.for,
      SymbolAsyncIterator: Symbol.asyncIterator,
      SymbolHasInstance: Symbol.hasInstance,
      SymbolIterator: Symbol.iterator,
      SymbolDispose: Symbol.dispose || Symbol('Symbol.dispose'),
      SymbolAsyncDispose: Symbol.asyncDispose || Symbol('Symbol.asyncDispose'),
      TypedArrayPrototypeSet(c, g, s) {
        return c.set(g, s)
      },
      Boolean,
      Uint8Array,
    }
  }),
  _b = Ue((y, p) => {
    ;(Te(),
      xe(),
      Oe(),
      (p.exports = {
        format(h, ...c) {
          return h.replace(/%([sdifj])/g, function (...[g, s]) {
            let o = c.shift()
            return s === 'f'
              ? o.toFixed(6)
              : s === 'j'
                ? JSON.stringify(o)
                : s === 's' && typeof o == 'object'
                  ? `${o.constructor !== Object ? o.constructor.name : ''} {}`.trim()
                  : o.toString()
          })
        },
        inspect(h) {
          switch (typeof h) {
            case 'string':
              if (h.includes("'"))
                if (h.includes('"')) {
                  if (!h.includes('`') && !h.includes('${')) return `\`${h}\``
                } else return `"${h}"`
              return `'${h}'`
            case 'number':
              return isNaN(h) ? 'NaN' : Object.is(h, -0) ? String(h) : h
            case 'bigint':
              return `${String(h)}n`
            case 'boolean':
            case 'undefined':
              return String(h)
            case 'object':
              return '{}'
          }
        },
      }))
  }),
  rr = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { format: h, inspect: c } = _b(),
      { AggregateError: g } = Tt(),
      s = globalThis.AggregateError || g,
      o = Symbol('kIsNodeError'),
      u = [
        'string',
        'function',
        'number',
        'object',
        'Function',
        'Object',
        'boolean',
        'bigint',
        'symbol',
      ],
      i = /^([A-Z][a-z0-9]*)+$/,
      a = '__node_internal_',
      d = {}
    function v(_, O) {
      if (!_) throw new d.ERR_INTERNAL_ASSERTION(O)
    }
    function S(_) {
      let O = '',
        N = _.length,
        T = _[0] === '-' ? 1 : 0
      for (; N >= T + 4; N -= 3) O = `_${_.slice(N - 3, N)}${O}`
      return `${_.slice(0, N)}${O}`
    }
    function E(_, O, N) {
      if (typeof O == 'function')
        return (
          v(
            O.length <= N.length,
            `Code: ${_}; The provided arguments length (${N.length}) does not match the required ones (${O.length}).`
          ),
          O(...N)
        )
      let T = (O.match(/%[dfijoOs]/g) || []).length
      return (
        v(
          T === N.length,
          `Code: ${_}; The provided arguments length (${N.length}) does not match the required ones (${T}).`
        ),
        N.length === 0 ? O : h(O, ...N)
      )
    }
    function b(_, O, N) {
      N || (N = Error)
      class T extends N {
        constructor(...x) {
          super(E(_, O, x))
        }
        toString() {
          return `${this.name} [${_}]: ${this.message}`
        }
      }
      ;(Object.defineProperties(T.prototype, {
        name: { value: N.name, writable: !0, enumerable: !1, configurable: !0 },
        toString: {
          value() {
            return `${this.name} [${_}]: ${this.message}`
          },
          writable: !0,
          enumerable: !1,
          configurable: !0,
        },
      }),
        (T.prototype.code = _),
        (T.prototype[o] = !0),
        (d[_] = T))
    }
    function w(_) {
      let O = a + _.name
      return (Object.defineProperty(_, 'name', { value: O }), _)
    }
    function A(_, O) {
      if (_ && O && _ !== O) {
        if (Array.isArray(O.errors)) return (O.errors.push(_), O)
        let N = new s([O, _], O.message)
        return ((N.code = O.code), N)
      }
      return _ || O
    }
    var M = class extends Error {
      constructor(_ = 'The operation was aborted', O = void 0) {
        if (O !== void 0 && typeof O != 'object')
          throw new d.ERR_INVALID_ARG_TYPE('options', 'Object', O)
        ;(super(_, O), (this.code = 'ABORT_ERR'), (this.name = 'AbortError'))
      }
    }
    ;(b('ERR_ASSERTION', '%s', Error),
      b(
        'ERR_INVALID_ARG_TYPE',
        (_, O, N) => {
          ;(v(typeof _ == 'string', "'name' must be a string"),
            Array.isArray(O) || (O = [O]))
          let T = 'The '
          ;(_.endsWith(' argument')
            ? (T += `${_} `)
            : (T += `"${_}" ${_.includes('.') ? 'property' : 'argument'} `),
            (T += 'must be '))
          let j = [],
            x = [],
            k = []
          for (let H of O)
            (v(
              typeof H == 'string',
              'All expected entries have to be of type string'
            ),
              u.includes(H)
                ? j.push(H.toLowerCase())
                : i.test(H)
                  ? x.push(H)
                  : (v(
                      H !== 'object',
                      'The value "object" should be written as "Object"'
                    ),
                    k.push(H)))
          if (x.length > 0) {
            let H = j.indexOf('object')
            H !== -1 && (j.splice(j, H, 1), x.push('Object'))
          }
          if (j.length > 0) {
            switch (j.length) {
              case 1:
                T += `of type ${j[0]}`
                break
              case 2:
                T += `one of type ${j[0]} or ${j[1]}`
                break
              default: {
                let H = j.pop()
                T += `one of type ${j.join(', ')}, or ${H}`
              }
            }
            ;(x.length > 0 || k.length > 0) && (T += ' or ')
          }
          if (x.length > 0) {
            switch (x.length) {
              case 1:
                T += `an instance of ${x[0]}`
                break
              case 2:
                T += `an instance of ${x[0]} or ${x[1]}`
                break
              default: {
                let H = x.pop()
                T += `an instance of ${x.join(', ')}, or ${H}`
              }
            }
            k.length > 0 && (T += ' or ')
          }
          switch (k.length) {
            case 0:
              break
            case 1:
              ;(k[0].toLowerCase() !== k[0] && (T += 'an '), (T += `${k[0]}`))
              break
            case 2:
              T += `one of ${k[0]} or ${k[1]}`
              break
            default: {
              let H = k.pop()
              T += `one of ${k.join(', ')}, or ${H}`
            }
          }
          if (N == null) T += `. Received ${N}`
          else if (typeof N == 'function' && N.name)
            T += `. Received function ${N.name}`
          else if (typeof N == 'object') {
            var q
            if ((q = N.constructor) !== null && q !== void 0 && q.name)
              T += `. Received an instance of ${N.constructor.name}`
            else {
              let H = c(N, { depth: -1 })
              T += `. Received ${H}`
            }
          } else {
            let H = c(N, { colors: !1 })
            ;(H.length > 25 && (H = `${H.slice(0, 25)}...`),
              (T += `. Received type ${typeof N} (${H})`))
          }
          return T
        },
        TypeError
      ),
      b(
        'ERR_INVALID_ARG_VALUE',
        (_, O, N = 'is invalid') => {
          let T = c(O)
          return (
            T.length > 128 && (T = T.slice(0, 128) + '...'),
            `The ${_.includes('.') ? 'property' : 'argument'} '${_}' ${N}. Received ${T}`
          )
        },
        TypeError
      ),
      b(
        'ERR_INVALID_RETURN_VALUE',
        (_, O, N) => {
          var T
          let j =
            N != null && (T = N.constructor) !== null && T !== void 0 && T.name
              ? `instance of ${N.constructor.name}`
              : `type ${typeof N}`
          return `Expected ${_} to be returned from the "${O}" function but got ${j}.`
        },
        TypeError
      ),
      b(
        'ERR_MISSING_ARGS',
        (..._) => {
          v(_.length > 0, 'At least one arg needs to be specified')
          let O,
            N = _.length
          switch (
            ((_ = (Array.isArray(_) ? _ : [_])
              .map((T) => `"${T}"`)
              .join(' or ')),
            N)
          ) {
            case 1:
              O += `The ${_[0]} argument`
              break
            case 2:
              O += `The ${_[0]} and ${_[1]} arguments`
              break
            default:
              {
                let T = _.pop()
                O += `The ${_.join(', ')}, and ${T} arguments`
              }
              break
          }
          return `${O} must be specified`
        },
        TypeError
      ),
      b(
        'ERR_OUT_OF_RANGE',
        (_, O, N) => {
          v(O, 'Missing "range" argument')
          let T
          if (Number.isInteger(N) && Math.abs(N) > 2 ** 32) T = S(String(N))
          else if (typeof N == 'bigint') {
            T = String(N)
            let j = BigInt(2) ** BigInt(32)
            ;((N > j || N < -j) && (T = S(T)), (T += 'n'))
          } else T = c(N)
          return `The value of "${_}" is out of range. It must be ${O}. Received ${T}`
        },
        RangeError
      ),
      b('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times', Error),
      b(
        'ERR_METHOD_NOT_IMPLEMENTED',
        'The %s method is not implemented',
        Error
      ),
      b(
        'ERR_STREAM_ALREADY_FINISHED',
        'Cannot call %s after a stream was finished',
        Error
      ),
      b('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable', Error),
      b(
        'ERR_STREAM_DESTROYED',
        'Cannot call %s after a stream was destroyed',
        Error
      ),
      b(
        'ERR_STREAM_NULL_VALUES',
        'May not write null values to stream',
        TypeError
      ),
      b('ERR_STREAM_PREMATURE_CLOSE', 'Premature close', Error),
      b('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF', Error),
      b(
        'ERR_STREAM_UNSHIFT_AFTER_END_EVENT',
        'stream.unshift() after end event',
        Error
      ),
      b('ERR_STREAM_WRITE_AFTER_END', 'write after end', Error),
      b('ERR_UNKNOWN_ENCODING', 'Unknown encoding: %s', TypeError),
      (p.exports = {
        AbortError: M,
        aggregateTwoErrors: w(A),
        hideStackFrames: w,
        codes: d,
      }))
  }),
  hl = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { AbortController: h, AbortSignal: c } =
      typeof self < 'u' ? self : typeof window < 'u' ? window : void 0
    ;((p.exports = h), (p.exports.AbortSignal = c), (p.exports.default = h))
  }),
  $n = {}
ha($n, {
  EventEmitter: () => Sb,
  default: () => ca,
  defaultMaxListeners: () => wb,
  init: () => Eb,
  listenerCount: () => Ab,
  on: () => Tb,
  once: () => Ob,
})
function m1() {
  if (If) return sl
  If = !0
  var y = typeof Reflect == 'object' ? Reflect : null,
    p =
      y && typeof y.apply == 'function'
        ? y.apply
        : function (N, T, j) {
            return Function.prototype.apply.call(N, T, j)
          },
    h
  y && typeof y.ownKeys == 'function'
    ? (h = y.ownKeys)
    : Object.getOwnPropertySymbols
      ? (h = function (N) {
          return Object.getOwnPropertyNames(N).concat(
            Object.getOwnPropertySymbols(N)
          )
        })
      : (h = function (N) {
          return Object.getOwnPropertyNames(N)
        })
  function c(N) {
    console && console.warn && console.warn(N)
  }
  var g =
    Number.isNaN ||
    function (N) {
      return N !== N
    }
  function s() {
    s.init.call(this)
  }
  ;((sl = s),
    (sl.once = M),
    (s.EventEmitter = s),
    (s.prototype._events = void 0),
    (s.prototype._eventsCount = 0),
    (s.prototype._maxListeners = void 0))
  var o = 10
  function u(N) {
    if (typeof N != 'function')
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' +
          typeof N
      )
  }
  ;(Object.defineProperty(s, 'defaultMaxListeners', {
    enumerable: !0,
    get: function () {
      return o
    },
    set: function (N) {
      if (typeof N != 'number' || N < 0 || g(N))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            N +
            '.'
        )
      o = N
    },
  }),
    (s.init = function () {
      ;((this._events === void 0 ||
        this._events === Object.getPrototypeOf(this)._events) &&
        ((this._events = Object.create(null)), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0))
    }),
    (s.prototype.setMaxListeners = function (N) {
      if (typeof N != 'number' || N < 0 || g(N))
        throw new RangeError(
          'The value of "n" is out of range. It must be a non-negative number. Received ' +
            N +
            '.'
        )
      return ((this._maxListeners = N), this)
    }))
  function i(N) {
    return N._maxListeners === void 0 ? s.defaultMaxListeners : N._maxListeners
  }
  ;((s.prototype.getMaxListeners = function () {
    return i(this)
  }),
    (s.prototype.emit = function (N) {
      for (var T = [], j = 1; j < arguments.length; j++) T.push(arguments[j])
      var x = N === 'error',
        k = this._events
      if (k !== void 0) x = x && k.error === void 0
      else if (!x) return !1
      if (x) {
        var q
        if ((T.length > 0 && (q = T[0]), q instanceof Error)) throw q
        var H = new Error(
          'Unhandled error.' + (q ? ' (' + q.message + ')' : '')
        )
        throw ((H.context = q), H)
      }
      var X = k[N]
      if (X === void 0) return !1
      if (typeof X == 'function') p(X, this, T)
      else
        for (var I = X.length, ee = b(X, I), j = 0; j < I; ++j)
          p(ee[j], this, T)
      return !0
    }))
  function a(N, T, j, x) {
    var k, q, H
    if (
      (u(j),
      (q = N._events),
      q === void 0
        ? ((q = N._events = Object.create(null)), (N._eventsCount = 0))
        : (q.newListener !== void 0 &&
            (N.emit('newListener', T, j.listener ? j.listener : j),
            (q = N._events)),
          (H = q[T])),
      H === void 0)
    )
      ((H = q[T] = j), ++N._eventsCount)
    else if (
      (typeof H == 'function'
        ? (H = q[T] = x ? [j, H] : [H, j])
        : x
          ? H.unshift(j)
          : H.push(j),
      (k = i(N)),
      k > 0 && H.length > k && !H.warned)
    ) {
      H.warned = !0
      var X = new Error(
        'Possible EventEmitter memory leak detected. ' +
          H.length +
          ' ' +
          String(T) +
          ' listeners added. Use emitter.setMaxListeners() to increase limit'
      )
      ;((X.name = 'MaxListenersExceededWarning'),
        (X.emitter = N),
        (X.type = T),
        (X.count = H.length),
        c(X))
    }
    return N
  }
  ;((s.prototype.addListener = function (N, T) {
    return a(this, N, T, !1)
  }),
    (s.prototype.on = s.prototype.addListener),
    (s.prototype.prependListener = function (N, T) {
      return a(this, N, T, !0)
    }))
  function d() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        arguments.length === 0
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      )
  }
  function v(N, T, j) {
    var x = { fired: !1, wrapFn: void 0, target: N, type: T, listener: j },
      k = d.bind(x)
    return ((k.listener = j), (x.wrapFn = k), k)
  }
  ;((s.prototype.once = function (N, T) {
    return (u(T), this.on(N, v(this, N, T)), this)
  }),
    (s.prototype.prependOnceListener = function (N, T) {
      return (u(T), this.prependListener(N, v(this, N, T)), this)
    }),
    (s.prototype.removeListener = function (N, T) {
      var j, x, k, q, H
      if ((u(T), (x = this._events), x === void 0)) return this
      if (((j = x[N]), j === void 0)) return this
      if (j === T || j.listener === T)
        --this._eventsCount === 0
          ? (this._events = Object.create(null))
          : (delete x[N],
            x.removeListener && this.emit('removeListener', N, j.listener || T))
      else if (typeof j != 'function') {
        for (k = -1, q = j.length - 1; q >= 0; q--)
          if (j[q] === T || j[q].listener === T) {
            ;((H = j[q].listener), (k = q))
            break
          }
        if (k < 0) return this
        ;(k === 0 ? j.shift() : w(j, k),
          j.length === 1 && (x[N] = j[0]),
          x.removeListener !== void 0 && this.emit('removeListener', N, H || T))
      }
      return this
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.removeAllListeners = function (N) {
      var T, j, x
      if (((j = this._events), j === void 0)) return this
      if (j.removeListener === void 0)
        return (
          arguments.length === 0
            ? ((this._events = Object.create(null)), (this._eventsCount = 0))
            : j[N] !== void 0 &&
              (--this._eventsCount === 0
                ? (this._events = Object.create(null))
                : delete j[N]),
          this
        )
      if (arguments.length === 0) {
        var k = Object.keys(j),
          q
        for (x = 0; x < k.length; ++x)
          ((q = k[x]), q !== 'removeListener' && this.removeAllListeners(q))
        return (
          this.removeAllListeners('removeListener'),
          (this._events = Object.create(null)),
          (this._eventsCount = 0),
          this
        )
      }
      if (((T = j[N]), typeof T == 'function')) this.removeListener(N, T)
      else if (T !== void 0)
        for (x = T.length - 1; x >= 0; x--) this.removeListener(N, T[x])
      return this
    }))
  function S(N, T, j) {
    var x = N._events
    if (x === void 0) return []
    var k = x[T]
    return k === void 0
      ? []
      : typeof k == 'function'
        ? j
          ? [k.listener || k]
          : [k]
        : j
          ? A(k)
          : b(k, k.length)
  }
  ;((s.prototype.listeners = function (N) {
    return S(this, N, !0)
  }),
    (s.prototype.rawListeners = function (N) {
      return S(this, N, !1)
    }),
    (s.listenerCount = function (N, T) {
      return typeof N.listenerCount == 'function'
        ? N.listenerCount(T)
        : E.call(N, T)
    }),
    (s.prototype.listenerCount = E))
  function E(N) {
    var T = this._events
    if (T !== void 0) {
      var j = T[N]
      if (typeof j == 'function') return 1
      if (j !== void 0) return j.length
    }
    return 0
  }
  s.prototype.eventNames = function () {
    return this._eventsCount > 0 ? h(this._events) : []
  }
  function b(N, T) {
    for (var j = new Array(T), x = 0; x < T; ++x) j[x] = N[x]
    return j
  }
  function w(N, T) {
    for (; T + 1 < N.length; T++) N[T] = N[T + 1]
    N.pop()
  }
  function A(N) {
    for (var T = new Array(N.length), j = 0; j < T.length; ++j)
      T[j] = N[j].listener || N[j]
    return T
  }
  function M(N, T) {
    return new Promise(function (j, x) {
      function k(H) {
        ;(N.removeListener(T, q), x(H))
      }
      function q() {
        ;(typeof N.removeListener == 'function' && N.removeListener('error', k),
          j([].slice.call(arguments)))
      }
      ;(O(N, T, q, { once: !0 }), T !== 'error' && _(N, k, { once: !0 }))
    })
  }
  function _(N, T, j) {
    typeof N.on == 'function' && O(N, 'error', T, j)
  }
  function O(N, T, j, x) {
    if (typeof N.on == 'function') x.once ? N.once(T, j) : N.on(T, j)
    else if (typeof N.addEventListener == 'function')
      N.addEventListener(T, function k(q) {
        ;(x.once && N.removeEventListener(T, k), j(q))
      })
    else
      throw new TypeError(
        'The "emitter" argument must be of type EventEmitter. Received type ' +
          typeof N
      )
  }
  return sl
}
var sl,
  If,
  ca,
  Sb,
  wb,
  Eb,
  Ab,
  Tb,
  Ob,
  wi = yr(() => {
    ;(Te(),
      xe(),
      Oe(),
      (sl = {}),
      (If = !1),
      (ca = m1()),
      ca.once,
      (ca.once = function (y, p) {
        return new Promise((h, c) => {
          function g(...o) {
            ;(s !== void 0 && y.removeListener('error', s), h(o))
          }
          let s
          ;(p !== 'error' &&
            ((s = (o) => {
              ;(y.removeListener(name, g), c(o))
            }),
            y.once('error', s)),
            y.once(p, g))
        })
      }),
      (ca.on = function (y, p) {
        let h = [],
          c = [],
          g = null,
          s = !1,
          o = {
            async next() {
              let a = h.shift()
              if (a) return createIterResult(a, !1)
              if (g) {
                let d = Promise.reject(g)
                return ((g = null), d)
              }
              return s
                ? createIterResult(void 0, !0)
                : new Promise((d, v) => c.push({ resolve: d, reject: v }))
            },
            async return() {
              ;(y.removeListener(p, u), y.removeListener('error', i), (s = !0))
              for (let a of c) a.resolve(createIterResult(void 0, !0))
              return createIterResult(void 0, !0)
            },
            throw(a) {
              ;((g = a), y.removeListener(p, u), y.removeListener('error', i))
            },
            [Symbol.asyncIterator]() {
              return this
            },
          }
        return (y.on(p, u), y.on('error', i), o)
        function u(...a) {
          let d = c.shift()
          d ? d.resolve(createIterResult(a, !1)) : h.push(a)
        }
        function i(a) {
          s = !0
          let d = c.shift()
          ;(d ? d.reject(a) : (g = a), o.return())
        }
      }),
      ({
        EventEmitter: Sb,
        defaultMaxListeners: wb,
        init: Eb,
        listenerCount: Ab,
        on: Tb,
        once: Ob,
      } = ca))
  }),
  pr = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = (Pt(), gt(Ht)),
      { format: c, inspect: g } = _b(),
      {
        codes: { ERR_INVALID_ARG_TYPE: s },
      } = rr(),
      { kResistStopPropagation: o, AggregateError: u, SymbolDispose: i } = Tt(),
      a = globalThis.AbortSignal || hl().AbortSignal,
      d = globalThis.AbortController || hl().AbortController,
      v = Object.getPrototypeOf(async function () {}).constructor,
      S = globalThis.Blob || h.Blob,
      E =
        typeof S < 'u'
          ? function (A) {
              return A instanceof S
            }
          : function (A) {
              return !1
            },
      b = (A, M) => {
        if (
          A !== void 0 &&
          (A === null || typeof A != 'object' || !('aborted' in A))
        )
          throw new s(M, 'AbortSignal', A)
      },
      w = (A, M) => {
        if (typeof A != 'function') throw new s(M, 'Function', A)
      }
    ;((p.exports = {
      AggregateError: u,
      kEmptyObject: Object.freeze({}),
      once(A) {
        let M = !1
        return function (..._) {
          M || ((M = !0), A.apply(this, _))
        }
      },
      createDeferredPromise: function () {
        let A, M
        return {
          promise: new Promise((_, O) => {
            ;((A = _), (M = O))
          }),
          resolve: A,
          reject: M,
        }
      },
      promisify(A) {
        return new Promise((M, _) => {
          A((O, ...N) => (O ? _(O) : M(...N)))
        })
      },
      debuglog() {
        return function () {}
      },
      format: c,
      inspect: g,
      types: {
        isAsyncFunction(A) {
          return A instanceof v
        },
        isArrayBufferView(A) {
          return ArrayBuffer.isView(A)
        },
      },
      isBlob: E,
      deprecate(A, M) {
        return A
      },
      addAbortListener:
        (wi(), gt($n)).addAbortListener ||
        function (A, M) {
          if (A === void 0) throw new s('signal', 'AbortSignal', A)
          ;(b(A, 'signal'), w(M, 'listener'))
          let _
          return (
            A.aborted
              ? queueMicrotask(() => M())
              : (A.addEventListener('abort', M, {
                  __proto__: null,
                  once: !0,
                  [o]: !0,
                }),
                (_ = () => {
                  A.removeEventListener('abort', M)
                })),
            {
              __proto__: null,
              [i]() {
                var O
                ;(O = _) === null || O === void 0 || O()
              },
            }
          )
        },
      AbortSignalAny:
        a.any ||
        function (A) {
          if (A.length === 1) return A[0]
          let M = new d(),
            _ = () => M.abort()
          return (
            A.forEach((O) => {
              ;(b(O, 'signals'), O.addEventListener('abort', _, { once: !0 }))
            }),
            M.signal.addEventListener(
              'abort',
              () => {
                A.forEach((O) => O.removeEventListener('abort', _))
              },
              { once: !0 }
            ),
            M.signal
          )
        },
    }),
      (p.exports.promisify.custom = Symbol.for('nodejs.util.promisify.custom')))
  }),
  dl = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var {
        ArrayIsArray: h,
        ArrayPrototypeIncludes: c,
        ArrayPrototypeJoin: g,
        ArrayPrototypeMap: s,
        NumberIsInteger: o,
        NumberIsNaN: u,
        NumberMAX_SAFE_INTEGER: i,
        NumberMIN_SAFE_INTEGER: a,
        NumberParseInt: d,
        ObjectPrototypeHasOwnProperty: v,
        RegExpPrototypeExec: S,
        String: E,
        StringPrototypeToUpperCase: b,
        StringPrototypeTrim: w,
      } = Tt(),
      {
        hideStackFrames: A,
        codes: {
          ERR_SOCKET_BAD_PORT: M,
          ERR_INVALID_ARG_TYPE: _,
          ERR_INVALID_ARG_VALUE: O,
          ERR_OUT_OF_RANGE: N,
          ERR_UNKNOWN_SIGNAL: T,
        },
      } = rr(),
      { normalizeEncoding: j } = pr(),
      { isAsyncFunction: x, isArrayBufferView: k } = pr().types,
      q = {}
    function H(ie) {
      return ie === (ie | 0)
    }
    function X(ie) {
      return ie === ie >>> 0
    }
    var I = /^[0-7]+$/,
      ee = 'must be a 32-bit unsigned integer or an octal string'
    function J(ie, Ne, Ie) {
      if ((typeof ie > 'u' && (ie = Ie), typeof ie == 'string')) {
        if (S(I, ie) === null) throw new O(Ne, ie, ee)
        ie = d(ie, 8)
      }
      return (P(ie, Ne), ie)
    }
    var $ = A((ie, Ne, Ie = a, Se = i) => {
        if (typeof ie != 'number') throw new _(Ne, 'number', ie)
        if (!o(ie)) throw new N(Ne, 'an integer', ie)
        if (ie < Ie || ie > Se) throw new N(Ne, `>= ${Ie} && <= ${Se}`, ie)
      }),
      K = A((ie, Ne, Ie = -2147483648, Se = 2147483647) => {
        if (typeof ie != 'number') throw new _(Ne, 'number', ie)
        if (!o(ie)) throw new N(Ne, 'an integer', ie)
        if (ie < Ie || ie > Se) throw new N(Ne, `>= ${Ie} && <= ${Se}`, ie)
      }),
      P = A((ie, Ne, Ie = !1) => {
        if (typeof ie != 'number') throw new _(Ne, 'number', ie)
        if (!o(ie)) throw new N(Ne, 'an integer', ie)
        let Se = Ie ? 1 : 0,
          Je = 4294967295
        if (ie < Se || ie > Je) throw new N(Ne, `>= ${Se} && <= ${Je}`, ie)
      })
    function F(ie, Ne) {
      if (typeof ie != 'string') throw new _(Ne, 'string', ie)
    }
    function ce(ie, Ne, Ie = void 0, Se) {
      if (typeof ie != 'number') throw new _(Ne, 'number', ie)
      if (
        (Ie != null && ie < Ie) ||
        (Se != null && ie > Se) ||
        ((Ie != null || Se != null) && u(ie))
      )
        throw new N(
          Ne,
          `${Ie != null ? `>= ${Ie}` : ''}${Ie != null && Se != null ? ' && ' : ''}${Se != null ? `<= ${Se}` : ''}`,
          ie
        )
    }
    var V = A((ie, Ne, Ie) => {
      if (!c(Ie, ie)) {
        let Se =
          'must be one of: ' +
          g(
            s(Ie, (Je) => (typeof Je == 'string' ? `'${Je}'` : E(Je))),
            ', '
          )
        throw new O(Ne, ie, Se)
      }
    })
    function B(ie, Ne) {
      if (typeof ie != 'boolean') throw new _(Ne, 'boolean', ie)
    }
    function D(ie, Ne, Ie) {
      return ie == null || !v(ie, Ne) ? Ie : ie[Ne]
    }
    var Q = A((ie, Ne, Ie = null) => {
        let Se = D(Ie, 'allowArray', !1),
          Je = D(Ie, 'allowFunction', !1)
        if (
          (!D(Ie, 'nullable', !1) && ie === null) ||
          (!Se && h(ie)) ||
          (typeof ie != 'object' && (!Je || typeof ie != 'function'))
        )
          throw new _(Ne, 'Object', ie)
      }),
      he = A((ie, Ne) => {
        if (ie != null && typeof ie != 'object' && typeof ie != 'function')
          throw new _(Ne, 'a dictionary', ie)
      }),
      le = A((ie, Ne, Ie = 0) => {
        if (!h(ie)) throw new _(Ne, 'Array', ie)
        if (ie.length < Ie) {
          let Se = `must be longer than ${Ie}`
          throw new O(Ne, ie, Se)
        }
      })
    function Me(ie, Ne) {
      le(ie, Ne)
      for (let Ie = 0; Ie < ie.length; Ie++) F(ie[Ie], `${Ne}[${Ie}]`)
    }
    function re(ie, Ne) {
      le(ie, Ne)
      for (let Ie = 0; Ie < ie.length; Ie++) B(ie[Ie], `${Ne}[${Ie}]`)
    }
    function Y(ie, Ne) {
      le(ie, Ne)
      for (let Ie = 0; Ie < ie.length; Ie++) {
        let Se = ie[Ie],
          Je = `${Ne}[${Ie}]`
        if (Se == null) throw new _(Je, 'AbortSignal', Se)
        De(Se, Je)
      }
    }
    function ye(ie, Ne = 'signal') {
      if ((F(ie, Ne), q[ie] === void 0))
        throw q[b(ie)] !== void 0
          ? new T(ie + ' (signals must use all capital letters)')
          : new T(ie)
    }
    var oe = A((ie, Ne = 'buffer') => {
      if (!k(ie)) throw new _(Ne, ['Buffer', 'TypedArray', 'DataView'], ie)
    })
    function ue(ie, Ne) {
      let Ie = j(Ne),
        Se = ie.length
      if (Ie === 'hex' && Se % 2 !== 0)
        throw new O('encoding', Ne, `is invalid for data of length ${Se}`)
    }
    function fe(ie, Ne = 'Port', Ie = !0) {
      if (
        (typeof ie != 'number' && typeof ie != 'string') ||
        (typeof ie == 'string' && w(ie).length === 0) ||
        +ie !== +ie >>> 0 ||
        ie > 65535 ||
        (ie === 0 && !Ie)
      )
        throw new M(Ne, ie, Ie)
      return ie | 0
    }
    var De = A((ie, Ne) => {
        if (
          ie !== void 0 &&
          (ie === null || typeof ie != 'object' || !('aborted' in ie))
        )
          throw new _(Ne, 'AbortSignal', ie)
      }),
      we = A((ie, Ne) => {
        if (typeof ie != 'function') throw new _(Ne, 'Function', ie)
      }),
      G = A((ie, Ne) => {
        if (typeof ie != 'function' || x(ie)) throw new _(Ne, 'Function', ie)
      }),
      ne = A((ie, Ne) => {
        if (ie !== void 0) throw new _(Ne, 'undefined', ie)
      })
    function ge(ie, Ne, Ie) {
      if (!c(Ie, ie)) throw new _(Ne, `('${g(Ie, '|')}')`, ie)
    }
    var Re = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/
    function Ce(ie, Ne) {
      if (typeof ie > 'u' || !S(Re, ie))
        throw new O(
          Ne,
          ie,
          'must be an array or string of format "</styles.css>; rel=preload; as=style"'
        )
    }
    function Be(ie) {
      if (typeof ie == 'string') return (Ce(ie, 'hints'), ie)
      if (h(ie)) {
        let Ne = ie.length,
          Ie = ''
        if (Ne === 0) return Ie
        for (let Se = 0; Se < Ne; Se++) {
          let Je = ie[Se]
          ;(Ce(Je, 'hints'), (Ie += Je), Se !== Ne - 1 && (Ie += ', '))
        }
        return Ie
      }
      throw new O(
        'hints',
        ie,
        'must be an array or string of format "</styles.css>; rel=preload; as=style"'
      )
    }
    p.exports = {
      isInt32: H,
      isUint32: X,
      parseFileMode: J,
      validateArray: le,
      validateStringArray: Me,
      validateBooleanArray: re,
      validateAbortSignalArray: Y,
      validateBoolean: B,
      validateBuffer: oe,
      validateDictionary: he,
      validateEncoding: ue,
      validateFunction: we,
      validateInt32: K,
      validateInteger: $,
      validateNumber: ce,
      validateObject: Q,
      validateOneOf: V,
      validatePlainFunction: G,
      validatePort: fe,
      validateSignalName: ye,
      validateString: F,
      validateUint32: P,
      validateUndefined: ne,
      validateUnion: ge,
      validateAbortSignal: De,
      validateLinkHeaderValue: Be,
    }
  }),
  Ei = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = (p.exports = {}),
      c,
      g
    function s() {
      throw new Error('setTimeout has not been defined')
    }
    function o() {
      throw new Error('clearTimeout has not been defined')
    }
    ;(function () {
      try {
        typeof setTimeout == 'function' ? (c = setTimeout) : (c = s)
      } catch {
        c = s
      }
      try {
        typeof clearTimeout == 'function' ? (g = clearTimeout) : (g = o)
      } catch {
        g = o
      }
    })()
    function u(M) {
      if (c === setTimeout) return setTimeout(M, 0)
      if ((c === s || !c) && setTimeout)
        return ((c = setTimeout), setTimeout(M, 0))
      try {
        return c(M, 0)
      } catch {
        try {
          return c.call(null, M, 0)
        } catch {
          return c.call(this, M, 0)
        }
      }
    }
    function i(M) {
      if (g === clearTimeout) return clearTimeout(M)
      if ((g === o || !g) && clearTimeout)
        return ((g = clearTimeout), clearTimeout(M))
      try {
        return g(M)
      } catch {
        try {
          return g.call(null, M)
        } catch {
          return g.call(this, M)
        }
      }
    }
    var a = [],
      d = !1,
      v,
      S = -1
    function E() {
      !d ||
        !v ||
        ((d = !1), v.length ? (a = v.concat(a)) : (S = -1), a.length && b())
    }
    function b() {
      if (!d) {
        var M = u(E)
        d = !0
        for (var _ = a.length; _; ) {
          for (v = a, a = []; ++S < _; ) v && v[S].run()
          ;((S = -1), (_ = a.length))
        }
        ;((v = null), (d = !1), i(M))
      }
    }
    h.nextTick = function (M) {
      var _ = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var O = 1; O < arguments.length; O++) _[O - 1] = arguments[O]
      ;(a.push(new w(M, _)), a.length === 1 && !d && u(b))
    }
    function w(M, _) {
      ;((this.fun = M), (this.array = _))
    }
    ;((w.prototype.run = function () {
      this.fun.apply(null, this.array)
    }),
      (h.title = 'browser'),
      (h.browser = !0),
      (h.env = {}),
      (h.argv = []),
      (h.version = ''),
      (h.versions = {}))
    function A() {}
    ;((h.on = A),
      (h.addListener = A),
      (h.once = A),
      (h.off = A),
      (h.removeListener = A),
      (h.removeAllListeners = A),
      (h.emit = A),
      (h.prependListener = A),
      (h.prependOnceListener = A),
      (h.listeners = function (M) {
        return []
      }),
      (h.binding = function (M) {
        throw new Error('process.binding is not supported')
      }),
      (h.cwd = function () {
        return '/'
      }),
      (h.chdir = function (M) {
        throw new Error('process.chdir is not supported')
      }),
      (h.umask = function () {
        return 0
      }))
  }),
  wn = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { SymbolAsyncIterator: h, SymbolIterator: c, SymbolFor: g } = Tt(),
      s = g('nodejs.stream.destroyed'),
      o = g('nodejs.stream.errored'),
      u = g('nodejs.stream.readable'),
      i = g('nodejs.stream.writable'),
      a = g('nodejs.stream.disturbed'),
      d = g('nodejs.webstream.isClosedPromise'),
      v = g('nodejs.webstream.controllerErrorFunction')
    function S(D, Q = !1) {
      var he
      return !!(
        D &&
        typeof D.pipe == 'function' &&
        typeof D.on == 'function' &&
        (!Q ||
          (typeof D.pause == 'function' && typeof D.resume == 'function')) &&
        (!D._writableState ||
          ((he = D._readableState) === null || he === void 0
            ? void 0
            : he.readable) !== !1) &&
        (!D._writableState || D._readableState)
      )
    }
    function E(D) {
      var Q
      return !!(
        D &&
        typeof D.write == 'function' &&
        typeof D.on == 'function' &&
        (!D._readableState ||
          ((Q = D._writableState) === null || Q === void 0
            ? void 0
            : Q.writable) !== !1)
      )
    }
    function b(D) {
      return !!(
        D &&
        typeof D.pipe == 'function' &&
        D._readableState &&
        typeof D.on == 'function' &&
        typeof D.write == 'function'
      )
    }
    function w(D) {
      return (
        D &&
        (D._readableState ||
          D._writableState ||
          (typeof D.write == 'function' && typeof D.on == 'function') ||
          (typeof D.pipe == 'function' && typeof D.on == 'function'))
      )
    }
    function A(D) {
      return !!(
        D &&
        !w(D) &&
        typeof D.pipeThrough == 'function' &&
        typeof D.getReader == 'function' &&
        typeof D.cancel == 'function'
      )
    }
    function M(D) {
      return !!(
        D &&
        !w(D) &&
        typeof D.getWriter == 'function' &&
        typeof D.abort == 'function'
      )
    }
    function _(D) {
      return !!(
        D &&
        !w(D) &&
        typeof D.readable == 'object' &&
        typeof D.writable == 'object'
      )
    }
    function O(D) {
      return A(D) || M(D) || _(D)
    }
    function N(D, Q) {
      return D == null
        ? !1
        : Q === !0
          ? typeof D[h] == 'function'
          : Q === !1
            ? typeof D[c] == 'function'
            : typeof D[h] == 'function' || typeof D[c] == 'function'
    }
    function T(D) {
      if (!w(D)) return null
      let Q = D._writableState,
        he = D._readableState,
        le = Q || he
      return !!(D.destroyed || D[s] || (le != null && le.destroyed))
    }
    function j(D) {
      if (!E(D)) return null
      if (D.writableEnded === !0) return !0
      let Q = D._writableState
      return Q != null && Q.errored
        ? !1
        : typeof Q?.ended != 'boolean'
          ? null
          : Q.ended
    }
    function x(D, Q) {
      if (!E(D)) return null
      if (D.writableFinished === !0) return !0
      let he = D._writableState
      return he != null && he.errored
        ? !1
        : typeof he?.finished != 'boolean'
          ? null
          : !!(he.finished || (Q === !1 && he.ended === !0 && he.length === 0))
    }
    function k(D) {
      if (!S(D)) return null
      if (D.readableEnded === !0) return !0
      let Q = D._readableState
      return !Q || Q.errored
        ? !1
        : typeof Q?.ended != 'boolean'
          ? null
          : Q.ended
    }
    function q(D, Q) {
      if (!S(D)) return null
      let he = D._readableState
      return he != null && he.errored
        ? !1
        : typeof he?.endEmitted != 'boolean'
          ? null
          : !!(
              he.endEmitted ||
              (Q === !1 && he.ended === !0 && he.length === 0)
            )
    }
    function H(D) {
      return D && D[u] != null
        ? D[u]
        : typeof D?.readable != 'boolean'
          ? null
          : T(D)
            ? !1
            : S(D) && D.readable && !q(D)
    }
    function X(D) {
      return D && D[i] != null
        ? D[i]
        : typeof D?.writable != 'boolean'
          ? null
          : T(D)
            ? !1
            : E(D) && D.writable && !j(D)
    }
    function I(D, Q) {
      return w(D)
        ? T(D)
          ? !0
          : !((Q?.readable !== !1 && H(D)) || (Q?.writable !== !1 && X(D)))
        : null
    }
    function ee(D) {
      var Q, he
      return w(D)
        ? D.writableErrored
          ? D.writableErrored
          : (Q =
                (he = D._writableState) === null || he === void 0
                  ? void 0
                  : he.errored) !== null && Q !== void 0
            ? Q
            : null
        : null
    }
    function J(D) {
      var Q, he
      return w(D)
        ? D.readableErrored
          ? D.readableErrored
          : (Q =
                (he = D._readableState) === null || he === void 0
                  ? void 0
                  : he.errored) !== null && Q !== void 0
            ? Q
            : null
        : null
    }
    function $(D) {
      if (!w(D)) return null
      if (typeof D.closed == 'boolean') return D.closed
      let Q = D._writableState,
        he = D._readableState
      return typeof Q?.closed == 'boolean' || typeof he?.closed == 'boolean'
        ? Q?.closed || he?.closed
        : typeof D._closed == 'boolean' && K(D)
          ? D._closed
          : null
    }
    function K(D) {
      return (
        typeof D._closed == 'boolean' &&
        typeof D._defaultKeepAlive == 'boolean' &&
        typeof D._removedConnection == 'boolean' &&
        typeof D._removedContLen == 'boolean'
      )
    }
    function P(D) {
      return typeof D._sent100 == 'boolean' && K(D)
    }
    function F(D) {
      var Q
      return (
        typeof D._consuming == 'boolean' &&
        typeof D._dumped == 'boolean' &&
        ((Q = D.req) === null || Q === void 0 ? void 0 : Q.upgradeOrConnect) ===
          void 0
      )
    }
    function ce(D) {
      if (!w(D)) return null
      let Q = D._writableState,
        he = D._readableState,
        le = Q || he
      return (
        (!le && P(D)) ||
        !!(le && le.autoDestroy && le.emitClose && le.closed === !1)
      )
    }
    function V(D) {
      var Q
      return !!(
        D &&
        ((Q = D[a]) !== null && Q !== void 0
          ? Q
          : D.readableDidRead || D.readableAborted)
      )
    }
    function B(D) {
      var Q, he, le, Me, re, Y, ye, oe, ue, fe
      return !!(
        D &&
        ((Q =
          (he =
            (le =
              (Me =
                (re =
                  (Y = D[o]) !== null && Y !== void 0
                    ? Y
                    : D.readableErrored) !== null && re !== void 0
                  ? re
                  : D.writableErrored) !== null && Me !== void 0
                ? Me
                : (ye = D._readableState) === null || ye === void 0
                  ? void 0
                  : ye.errorEmitted) !== null && le !== void 0
              ? le
              : (oe = D._writableState) === null || oe === void 0
                ? void 0
                : oe.errorEmitted) !== null && he !== void 0
            ? he
            : (ue = D._readableState) === null || ue === void 0
              ? void 0
              : ue.errored) !== null && Q !== void 0
          ? Q
          : !((fe = D._writableState) === null || fe === void 0) && fe.errored)
      )
    }
    p.exports = {
      isDestroyed: T,
      kIsDestroyed: s,
      isDisturbed: V,
      kIsDisturbed: a,
      isErrored: B,
      kIsErrored: o,
      isReadable: H,
      kIsReadable: u,
      kIsClosedPromise: d,
      kControllerErrorFunction: v,
      kIsWritable: i,
      isClosed: $,
      isDuplexNodeStream: b,
      isFinished: I,
      isIterable: N,
      isReadableNodeStream: S,
      isReadableStream: A,
      isReadableEnded: k,
      isReadableFinished: q,
      isReadableErrored: J,
      isNodeStream: w,
      isWebStream: O,
      isWritable: X,
      isWritableNodeStream: E,
      isWritableStream: M,
      isWritableEnded: j,
      isWritableFinished: x,
      isWritableErrored: ee,
      isServerRequest: F,
      isServerResponse: P,
      willEmitClose: ce,
      isTransformStream: _,
    }
  }),
  ei = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = Ei(),
      { AbortError: c, codes: g } = rr(),
      { ERR_INVALID_ARG_TYPE: s, ERR_STREAM_PREMATURE_CLOSE: o } = g,
      { kEmptyObject: u, once: i } = pr(),
      {
        validateAbortSignal: a,
        validateFunction: d,
        validateObject: v,
        validateBoolean: S,
      } = dl(),
      { Promise: E, PromisePrototypeThen: b, SymbolDispose: w } = Tt(),
      {
        isClosed: A,
        isReadable: M,
        isReadableNodeStream: _,
        isReadableStream: O,
        isReadableFinished: N,
        isReadableErrored: T,
        isWritable: j,
        isWritableNodeStream: x,
        isWritableStream: k,
        isWritableFinished: q,
        isWritableErrored: H,
        isNodeStream: X,
        willEmitClose: I,
        kIsClosedPromise: ee,
      } = wn(),
      J
    function $(V) {
      return V.setHeader && typeof V.abort == 'function'
    }
    var K = () => {}
    function P(V, B, D) {
      var Q, he
      if (
        (arguments.length === 2
          ? ((D = B), (B = u))
          : B == null
            ? (B = u)
            : v(B, 'options'),
        d(D, 'callback'),
        a(B.signal, 'options.signal'),
        (D = i(D)),
        O(V) || k(V))
      )
        return F(V, B, D)
      if (!X(V))
        throw new s('stream', ['ReadableStream', 'WritableStream', 'Stream'], V)
      let le = (Q = B.readable) !== null && Q !== void 0 ? Q : _(V),
        Me = (he = B.writable) !== null && he !== void 0 ? he : x(V),
        re = V._writableState,
        Y = V._readableState,
        ye = () => {
          V.writable || fe()
        },
        oe = I(V) && _(V) === le && x(V) === Me,
        ue = q(V, !1),
        fe = () => {
          ;((ue = !0),
            V.destroyed && (oe = !1),
            !(oe && (!V.readable || le)) && (!le || De) && D.call(V))
        },
        De = N(V, !1),
        we = () => {
          ;((De = !0),
            V.destroyed && (oe = !1),
            !(oe && (!V.writable || Me)) && (!Me || ue) && D.call(V))
        },
        G = (ie) => {
          D.call(V, ie)
        },
        ne = A(V),
        ge = () => {
          ne = !0
          let ie = H(V) || T(V)
          if (ie && typeof ie != 'boolean') return D.call(V, ie)
          if (le && !De && _(V, !0) && !N(V, !1)) return D.call(V, new o())
          if (Me && !ue && !q(V, !1)) return D.call(V, new o())
          D.call(V)
        },
        Re = () => {
          ne = !0
          let ie = H(V) || T(V)
          if (ie && typeof ie != 'boolean') return D.call(V, ie)
          D.call(V)
        },
        Ce = () => {
          V.req.on('finish', fe)
        }
      ;($(V)
        ? (V.on('complete', fe),
          oe || V.on('abort', ge),
          V.req ? Ce() : V.on('request', Ce))
        : Me && !re && (V.on('end', ye), V.on('close', ye)),
        !oe && typeof V.aborted == 'boolean' && V.on('aborted', ge),
        V.on('end', we),
        V.on('finish', fe),
        B.error !== !1 && V.on('error', G),
        V.on('close', ge),
        ne
          ? h.nextTick(ge)
          : (re != null && re.errorEmitted) || (Y != null && Y.errorEmitted)
            ? oe || h.nextTick(Re)
            : ((!le && (!oe || M(V)) && (ue || j(V) === !1)) ||
                (!Me && (!oe || j(V)) && (De || M(V) === !1)) ||
                (Y && V.req && V.aborted)) &&
              h.nextTick(Re))
      let Be = () => {
        ;((D = K),
          V.removeListener('aborted', ge),
          V.removeListener('complete', fe),
          V.removeListener('abort', ge),
          V.removeListener('request', Ce),
          V.req && V.req.removeListener('finish', fe),
          V.removeListener('end', ye),
          V.removeListener('close', ye),
          V.removeListener('finish', fe),
          V.removeListener('end', we),
          V.removeListener('error', G),
          V.removeListener('close', ge))
      }
      if (B.signal && !ne) {
        let ie = () => {
          let Ne = D
          ;(Be(), Ne.call(V, new c(void 0, { cause: B.signal.reason })))
        }
        if (B.signal.aborted) h.nextTick(ie)
        else {
          J = J || pr().addAbortListener
          let Ne = J(B.signal, ie),
            Ie = D
          D = i((...Se) => {
            ;(Ne[w](), Ie.apply(V, Se))
          })
        }
      }
      return Be
    }
    function F(V, B, D) {
      let Q = !1,
        he = K
      if (B.signal)
        if (
          ((he = () => {
            ;((Q = !0), D.call(V, new c(void 0, { cause: B.signal.reason })))
          }),
          B.signal.aborted)
        )
          h.nextTick(he)
        else {
          J = J || pr().addAbortListener
          let Me = J(B.signal, he),
            re = D
          D = i((...Y) => {
            ;(Me[w](), re.apply(V, Y))
          })
        }
      let le = (...Me) => {
        Q || h.nextTick(() => D.apply(V, Me))
      }
      return (b(V[ee].promise, le, le), K)
    }
    function ce(V, B) {
      var D
      let Q = !1
      return (
        B === null && (B = u),
        (D = B) !== null &&
          D !== void 0 &&
          D.cleanup &&
          (S(B.cleanup, 'cleanup'), (Q = B.cleanup)),
        new E((he, le) => {
          let Me = P(V, B, (re) => {
            ;(Q && Me(), re ? le(re) : he())
          })
        })
      )
    }
    ;((p.exports = P), (p.exports.finished = ce))
  }),
  da = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = Ei(),
      {
        aggregateTwoErrors: c,
        codes: { ERR_MULTIPLE_CALLBACK: g },
        AbortError: s,
      } = rr(),
      { Symbol: o } = Tt(),
      {
        kIsDestroyed: u,
        isDestroyed: i,
        isFinished: a,
        isServerRequest: d,
      } = wn(),
      v = o('kDestroy'),
      S = o('kConstruct')
    function E(I, ee, J) {
      I &&
        (I.stack,
        ee && !ee.errored && (ee.errored = I),
        J && !J.errored && (J.errored = I))
    }
    function b(I, ee) {
      let J = this._readableState,
        $ = this._writableState,
        K = $ || J
      return ($ != null && $.destroyed) || (J != null && J.destroyed)
        ? (typeof ee == 'function' && ee(), this)
        : (E(I, $, J),
          $ && ($.destroyed = !0),
          J && (J.destroyed = !0),
          K.constructed
            ? w(this, I, ee)
            : this.once(v, function (P) {
                w(this, c(P, I), ee)
              }),
          this)
    }
    function w(I, ee, J) {
      let $ = !1
      function K(P) {
        if ($) return
        $ = !0
        let F = I._readableState,
          ce = I._writableState
        ;(E(P, ce, F),
          ce && (ce.closed = !0),
          F && (F.closed = !0),
          typeof J == 'function' && J(P),
          P ? h.nextTick(A, I, P) : h.nextTick(M, I))
      }
      try {
        I._destroy(ee || null, K)
      } catch (P) {
        K(P)
      }
    }
    function A(I, ee) {
      ;(_(I, ee), M(I))
    }
    function M(I) {
      let ee = I._readableState,
        J = I._writableState
      ;(J && (J.closeEmitted = !0),
        ee && (ee.closeEmitted = !0),
        ((J != null && J.emitClose) || (ee != null && ee.emitClose)) &&
          I.emit('close'))
    }
    function _(I, ee) {
      let J = I._readableState,
        $ = I._writableState
      ;($ != null && $.errorEmitted) ||
        (J != null && J.errorEmitted) ||
        ($ && ($.errorEmitted = !0),
        J && (J.errorEmitted = !0),
        I.emit('error', ee))
    }
    function O() {
      let I = this._readableState,
        ee = this._writableState
      ;(I &&
        ((I.constructed = !0),
        (I.closed = !1),
        (I.closeEmitted = !1),
        (I.destroyed = !1),
        (I.errored = null),
        (I.errorEmitted = !1),
        (I.reading = !1),
        (I.ended = I.readable === !1),
        (I.endEmitted = I.readable === !1)),
        ee &&
          ((ee.constructed = !0),
          (ee.destroyed = !1),
          (ee.closed = !1),
          (ee.closeEmitted = !1),
          (ee.errored = null),
          (ee.errorEmitted = !1),
          (ee.finalCalled = !1),
          (ee.prefinished = !1),
          (ee.ended = ee.writable === !1),
          (ee.ending = ee.writable === !1),
          (ee.finished = ee.writable === !1)))
    }
    function N(I, ee, J) {
      let $ = I._readableState,
        K = I._writableState
      if ((K != null && K.destroyed) || ($ != null && $.destroyed)) return this
      ;($ != null && $.autoDestroy) || (K != null && K.autoDestroy)
        ? I.destroy(ee)
        : ee &&
          (ee.stack,
          K && !K.errored && (K.errored = ee),
          $ && !$.errored && ($.errored = ee),
          J ? h.nextTick(_, I, ee) : _(I, ee))
    }
    function T(I, ee) {
      if (typeof I._construct != 'function') return
      let J = I._readableState,
        $ = I._writableState
      ;(J && (J.constructed = !1),
        $ && ($.constructed = !1),
        I.once(S, ee),
        !(I.listenerCount(S) > 1) && h.nextTick(j, I))
    }
    function j(I) {
      let ee = !1
      function J($) {
        if (ee) {
          N(I, $ ?? new g())
          return
        }
        ee = !0
        let K = I._readableState,
          P = I._writableState,
          F = P || K
        ;(K && (K.constructed = !0),
          P && (P.constructed = !0),
          F.destroyed ? I.emit(v, $) : $ ? N(I, $, !0) : h.nextTick(x, I))
      }
      try {
        I._construct(($) => {
          h.nextTick(J, $)
        })
      } catch ($) {
        h.nextTick(J, $)
      }
    }
    function x(I) {
      I.emit(S)
    }
    function k(I) {
      return I?.setHeader && typeof I.abort == 'function'
    }
    function q(I) {
      I.emit('close')
    }
    function H(I, ee) {
      ;(I.emit('error', ee), h.nextTick(q, I))
    }
    function X(I, ee) {
      !I ||
        i(I) ||
        (!ee && !a(I) && (ee = new s()),
        d(I)
          ? ((I.socket = null), I.destroy(ee))
          : k(I)
            ? I.abort()
            : k(I.req)
              ? I.req.abort()
              : typeof I.destroy == 'function'
                ? I.destroy(ee)
                : typeof I.close == 'function'
                  ? I.close()
                  : ee
                    ? h.nextTick(H, I, ee)
                    : h.nextTick(q, I),
        I.destroyed || (I[u] = !0))
    }
    p.exports = {
      construct: T,
      destroyer: X,
      destroy: b,
      undestroy: O,
      errorOrDestroy: N,
    }
  }),
  Uh = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { ArrayIsArray: h, ObjectSetPrototypeOf: c } = Tt(),
      { EventEmitter: g } = (wi(), gt($n))
    function s(u) {
      g.call(this, u)
    }
    ;(c(s.prototype, g.prototype),
      c(s, g),
      (s.prototype.pipe = function (u, i) {
        let a = this
        function d(M) {
          u.writable && u.write(M) === !1 && a.pause && a.pause()
        }
        a.on('data', d)
        function v() {
          a.readable && a.resume && a.resume()
        }
        ;(u.on('drain', v),
          !u._isStdio &&
            (!i || i.end !== !1) &&
            (a.on('end', E), a.on('close', b)))
        let S = !1
        function E() {
          S || ((S = !0), u.end())
        }
        function b() {
          S || ((S = !0), typeof u.destroy == 'function' && u.destroy())
        }
        function w(M) {
          ;(A(), g.listenerCount(this, 'error') === 0 && this.emit('error', M))
        }
        ;(o(a, 'error', w), o(u, 'error', w))
        function A() {
          ;(a.removeListener('data', d),
            u.removeListener('drain', v),
            a.removeListener('end', E),
            a.removeListener('close', b),
            a.removeListener('error', w),
            u.removeListener('error', w),
            a.removeListener('end', A),
            a.removeListener('close', A),
            u.removeListener('close', A))
        }
        return (
          a.on('end', A),
          a.on('close', A),
          u.on('close', A),
          u.emit('pipe', a),
          u
        )
      }))
    function o(u, i, a) {
      if (typeof u.prependListener == 'function') return u.prependListener(i, a)
      !u._events || !u._events[i]
        ? u.on(i, a)
        : h(u._events[i])
          ? u._events[i].unshift(a)
          : (u._events[i] = [a, u._events[i]])
    }
    p.exports = { Stream: s, prependListener: o }
  }),
  as = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { SymbolDispose: h } = Tt(),
      { AbortError: c, codes: g } = rr(),
      { isNodeStream: s, isWebStream: o, kControllerErrorFunction: u } = wn(),
      i = ei(),
      { ERR_INVALID_ARG_TYPE: a } = g,
      d,
      v = (S, E) => {
        if (typeof S != 'object' || !('aborted' in S))
          throw new a(E, 'AbortSignal', S)
      }
    ;((p.exports.addAbortSignal = function (S, E) {
      if ((v(S, 'signal'), !s(E) && !o(E)))
        throw new a('stream', ['ReadableStream', 'WritableStream', 'Stream'], E)
      return p.exports.addAbortSignalNoValidate(S, E)
    }),
      (p.exports.addAbortSignalNoValidate = function (S, E) {
        if (typeof S != 'object' || !('aborted' in S)) return E
        let b = s(E)
          ? () => {
              E.destroy(new c(void 0, { cause: S.reason }))
            }
          : () => {
              E[u](new c(void 0, { cause: S.reason }))
            }
        if (S.aborted) b()
        else {
          d = d || pr().addAbortListener
          let w = d(S, b)
          i(E, w[h])
        }
        return E
      }))
  }),
  b1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var {
        StringPrototypeSlice: h,
        SymbolIterator: c,
        TypedArrayPrototypeSet: g,
        Uint8Array: s,
      } = Tt(),
      { Buffer: o } = (Pt(), gt(Ht)),
      { inspect: u } = pr()
    p.exports = class {
      constructor() {
        ;((this.head = null), (this.tail = null), (this.length = 0))
      }
      push(i) {
        let a = { data: i, next: null }
        ;(this.length > 0 ? (this.tail.next = a) : (this.head = a),
          (this.tail = a),
          ++this.length)
      }
      unshift(i) {
        let a = { data: i, next: this.head }
        ;(this.length === 0 && (this.tail = a), (this.head = a), ++this.length)
      }
      shift() {
        if (this.length === 0) return
        let i = this.head.data
        return (
          this.length === 1
            ? (this.head = this.tail = null)
            : (this.head = this.head.next),
          --this.length,
          i
        )
      }
      clear() {
        ;((this.head = this.tail = null), (this.length = 0))
      }
      join(i) {
        if (this.length === 0) return ''
        let a = this.head,
          d = '' + a.data
        for (; (a = a.next) !== null; ) d += i + a.data
        return d
      }
      concat(i) {
        if (this.length === 0) return o.alloc(0)
        let a = o.allocUnsafe(i >>> 0),
          d = this.head,
          v = 0
        for (; d; ) (g(a, d.data, v), (v += d.data.length), (d = d.next))
        return a
      }
      consume(i, a) {
        let d = this.head.data
        if (i < d.length) {
          let v = d.slice(0, i)
          return ((this.head.data = d.slice(i)), v)
        }
        return i === d.length
          ? this.shift()
          : a
            ? this._getString(i)
            : this._getBuffer(i)
      }
      first() {
        return this.head.data
      }
      *[c]() {
        for (let i = this.head; i; i = i.next) yield i.data
      }
      _getString(i) {
        let a = '',
          d = this.head,
          v = 0
        do {
          let S = d.data
          if (i > S.length) ((a += S), (i -= S.length))
          else {
            i === S.length
              ? ((a += S),
                ++v,
                d.next ? (this.head = d.next) : (this.head = this.tail = null))
              : ((a += h(S, 0, i)), (this.head = d), (d.data = h(S, i)))
            break
          }
          ++v
        } while ((d = d.next) !== null)
        return ((this.length -= v), a)
      }
      _getBuffer(i) {
        let a = o.allocUnsafe(i),
          d = i,
          v = this.head,
          S = 0
        do {
          let E = v.data
          if (i > E.length) (g(a, E, d - i), (i -= E.length))
          else {
            i === E.length
              ? (g(a, E, d - i),
                ++S,
                v.next ? (this.head = v.next) : (this.head = this.tail = null))
              : (g(a, new s(E.buffer, E.byteOffset, i), d - i),
                (this.head = v),
                (v.data = E.slice(i)))
            break
          }
          ++S
        } while ((v = v.next) !== null)
        return ((this.length -= S), a)
      }
      [Symbol.for('nodejs.util.inspect.custom')](i, a) {
        return u(this, { ...a, depth: 0, customInspect: !1 })
      }
    }
  }),
  ls = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { MathFloor: h, NumberIsInteger: c } = Tt(),
      { validateInteger: g } = dl(),
      { ERR_INVALID_ARG_VALUE: s } = rr().codes,
      o = 16 * 1024,
      u = 16
    function i(S, E, b) {
      return S.highWaterMark != null ? S.highWaterMark : E ? S[b] : null
    }
    function a(S) {
      return S ? u : o
    }
    function d(S, E) {
      ;(g(E, 'value', 0), S ? (u = E) : (o = E))
    }
    function v(S, E, b, w) {
      let A = i(E, w, b)
      if (A != null) {
        if (!c(A) || A < 0) {
          let M = w ? `options.${b}` : 'options.highWaterMark'
          throw new s(M, A)
        }
        return h(A)
      }
      return a(S.objectMode)
    }
    p.exports = {
      getHighWaterMark: v,
      getDefaultHighWaterMark: a,
      setDefaultHighWaterMark: d,
    }
  }),
  v1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = (Pt(), gt(Ht)),
      c = h.Buffer
    function g(o, u) {
      for (var i in o) u[i] = o[i]
    }
    c.from && c.alloc && c.allocUnsafe && c.allocUnsafeSlow
      ? (p.exports = h)
      : (g(h, y), (y.Buffer = s))
    function s(o, u, i) {
      return c(o, u, i)
    }
    ;((s.prototype = Object.create(c.prototype)),
      g(c, s),
      (s.from = function (o, u, i) {
        if (typeof o == 'number')
          throw new TypeError('Argument must not be a number')
        return c(o, u, i)
      }),
      (s.alloc = function (o, u, i) {
        if (typeof o != 'number')
          throw new TypeError('Argument must be a number')
        var a = c(o)
        return (
          u !== void 0
            ? typeof i == 'string'
              ? a.fill(u, i)
              : a.fill(u)
            : a.fill(0),
          a
        )
      }),
      (s.allocUnsafe = function (o) {
        if (typeof o != 'number')
          throw new TypeError('Argument must be a number')
        return c(o)
      }),
      (s.allocUnsafeSlow = function (o) {
        if (typeof o != 'number')
          throw new TypeError('Argument must be a number')
        return h.SlowBuffer(o)
      }))
  }),
  _1 = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p = v1().Buffer,
      h =
        p.isEncoding ||
        function (_) {
          switch (((_ = '' + _), _ && _.toLowerCase())) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
            case 'raw':
              return !0
            default:
              return !1
          }
        }
    function c(_) {
      if (!_) return 'utf8'
      for (var O; ; )
        switch (_) {
          case 'utf8':
          case 'utf-8':
            return 'utf8'
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return 'utf16le'
          case 'latin1':
          case 'binary':
            return 'latin1'
          case 'base64':
          case 'ascii':
          case 'hex':
            return _
          default:
            if (O) return
            ;((_ = ('' + _).toLowerCase()), (O = !0))
        }
    }
    function g(_) {
      var O = c(_)
      if (typeof O != 'string' && (p.isEncoding === h || !h(_)))
        throw new Error('Unknown encoding: ' + _)
      return O || _
    }
    y.StringDecoder = s
    function s(_) {
      this.encoding = g(_)
      var O
      switch (this.encoding) {
        case 'utf16le':
          ;((this.text = S), (this.end = E), (O = 4))
          break
        case 'utf8':
          ;((this.fillLast = a), (O = 4))
          break
        case 'base64':
          ;((this.text = b), (this.end = w), (O = 3))
          break
        default:
          ;((this.write = A), (this.end = M))
          return
      }
      ;((this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = p.allocUnsafe(O)))
    }
    ;((s.prototype.write = function (_) {
      if (_.length === 0) return ''
      var O, N
      if (this.lastNeed) {
        if (((O = this.fillLast(_)), O === void 0)) return ''
        ;((N = this.lastNeed), (this.lastNeed = 0))
      } else N = 0
      return N < _.length
        ? O
          ? O + this.text(_, N)
          : this.text(_, N)
        : O || ''
    }),
      (s.prototype.end = v),
      (s.prototype.text = d),
      (s.prototype.fillLast = function (_) {
        if (this.lastNeed <= _.length)
          return (
            _.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          )
        ;(_.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, _.length),
          (this.lastNeed -= _.length))
      }))
    function o(_) {
      return _ <= 127
        ? 0
        : _ >> 5 === 6
          ? 2
          : _ >> 4 === 14
            ? 3
            : _ >> 3 === 30
              ? 4
              : _ >> 6 === 2
                ? -1
                : -2
    }
    function u(_, O, N) {
      var T = O.length - 1
      if (T < N) return 0
      var j = o(O[T])
      return j >= 0
        ? (j > 0 && (_.lastNeed = j - 1), j)
        : --T < N || j === -2
          ? 0
          : ((j = o(O[T])),
            j >= 0
              ? (j > 0 && (_.lastNeed = j - 2), j)
              : --T < N || j === -2
                ? 0
                : ((j = o(O[T])),
                  j >= 0
                    ? (j > 0 && (j === 2 ? (j = 0) : (_.lastNeed = j - 3)), j)
                    : 0))
    }
    function i(_, O, N) {
      if ((O[0] & 192) !== 128) return ((_.lastNeed = 0), '�')
      if (_.lastNeed > 1 && O.length > 1) {
        if ((O[1] & 192) !== 128) return ((_.lastNeed = 1), '�')
        if (_.lastNeed > 2 && O.length > 2 && (O[2] & 192) !== 128)
          return ((_.lastNeed = 2), '�')
      }
    }
    function a(_) {
      var O = this.lastTotal - this.lastNeed,
        N = i(this, _)
      if (N !== void 0) return N
      if (this.lastNeed <= _.length)
        return (
          _.copy(this.lastChar, O, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal)
        )
      ;(_.copy(this.lastChar, O, 0, _.length), (this.lastNeed -= _.length))
    }
    function d(_, O) {
      var N = u(this, _, O)
      if (!this.lastNeed) return _.toString('utf8', O)
      this.lastTotal = N
      var T = _.length - (N - this.lastNeed)
      return (_.copy(this.lastChar, 0, T), _.toString('utf8', O, T))
    }
    function v(_) {
      var O = _ && _.length ? this.write(_) : ''
      return this.lastNeed ? O + '�' : O
    }
    function S(_, O) {
      if ((_.length - O) % 2 === 0) {
        var N = _.toString('utf16le', O)
        if (N) {
          var T = N.charCodeAt(N.length - 1)
          if (T >= 55296 && T <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = _[_.length - 2]),
              (this.lastChar[1] = _[_.length - 1]),
              N.slice(0, -1)
            )
        }
        return N
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = _[_.length - 1]),
        _.toString('utf16le', O, _.length - 1)
      )
    }
    function E(_) {
      var O = _ && _.length ? this.write(_) : ''
      if (this.lastNeed) {
        var N = this.lastTotal - this.lastNeed
        return O + this.lastChar.toString('utf16le', 0, N)
      }
      return O
    }
    function b(_, O) {
      var N = (_.length - O) % 3
      return N === 0
        ? _.toString('base64', O)
        : ((this.lastNeed = 3 - N),
          (this.lastTotal = 3),
          N === 1
            ? (this.lastChar[0] = _[_.length - 1])
            : ((this.lastChar[0] = _[_.length - 2]),
              (this.lastChar[1] = _[_.length - 1])),
          _.toString('base64', O, _.length - N))
    }
    function w(_) {
      var O = _ && _.length ? this.write(_) : ''
      return this.lastNeed
        ? O + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
        : O
    }
    function A(_) {
      return _.toString(this.encoding)
    }
    function M(_) {
      return _ && _.length ? this.write(_) : ''
    }
  }),
  xb = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = Ei(),
      {
        PromisePrototypeThen: c,
        SymbolAsyncIterator: g,
        SymbolIterator: s,
      } = Tt(),
      { Buffer: o } = (Pt(), gt(Ht)),
      { ERR_INVALID_ARG_TYPE: u, ERR_STREAM_NULL_VALUES: i } = rr().codes
    function a(d, v, S) {
      let E
      if (typeof v == 'string' || v instanceof o)
        return new d({
          objectMode: !0,
          ...S,
          read() {
            ;(this.push(v), this.push(null))
          },
        })
      let b
      if (v && v[g]) ((b = !0), (E = v[g]()))
      else if (v && v[s]) ((b = !1), (E = v[s]()))
      else throw new u('iterable', ['Iterable'], v)
      let w = new d({ objectMode: !0, highWaterMark: 1, ...S }),
        A = !1
      ;((w._read = function () {
        A || ((A = !0), _())
      }),
        (w._destroy = function (O, N) {
          c(
            M(O),
            () => h.nextTick(N, O),
            (T) => h.nextTick(N, T || O)
          )
        }))
      async function M(O) {
        let N = O != null,
          T = typeof E.throw == 'function'
        if (N && T) {
          let { value: j, done: x } = await E.throw(O)
          if ((await j, x)) return
        }
        if (typeof E.return == 'function') {
          let { value: j } = await E.return()
          await j
        }
      }
      async function _() {
        for (;;) {
          try {
            let { value: O, done: N } = b ? await E.next() : E.next()
            if (N) w.push(null)
            else {
              let T = O && typeof O.then == 'function' ? await O : O
              if (T === null) throw ((A = !1), new i())
              if (w.push(T)) continue
              A = !1
            }
          } catch (O) {
            w.destroy(O)
          }
          break
        }
      }
      return w
    }
    p.exports = a
  }),
  os = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = Ei(),
      {
        ArrayPrototypeIndexOf: c,
        NumberIsInteger: g,
        NumberIsNaN: s,
        NumberParseInt: o,
        ObjectDefineProperties: u,
        ObjectKeys: i,
        ObjectSetPrototypeOf: a,
        Promise: d,
        SafeSet: v,
        SymbolAsyncDispose: S,
        SymbolAsyncIterator: E,
        Symbol: b,
      } = Tt()
    ;((p.exports = Se), (Se.ReadableState = Ie))
    var { EventEmitter: w } = (wi(), gt($n)),
      { Stream: A, prependListener: M } = Uh(),
      { Buffer: _ } = (Pt(), gt(Ht)),
      { addAbortSignal: O } = as(),
      N = ei(),
      T = pr().debuglog('stream', (z) => {
        T = z
      }),
      j = b1(),
      x = da(),
      { getHighWaterMark: k, getDefaultHighWaterMark: q } = ls(),
      {
        aggregateTwoErrors: H,
        codes: {
          ERR_INVALID_ARG_TYPE: X,
          ERR_METHOD_NOT_IMPLEMENTED: I,
          ERR_OUT_OF_RANGE: ee,
          ERR_STREAM_PUSH_AFTER_EOF: J,
          ERR_STREAM_UNSHIFT_AFTER_END_EVENT: $,
        },
        AbortError: K,
      } = rr(),
      { validateObject: P } = dl(),
      F = b('kPaused'),
      { StringDecoder: ce } = _1(),
      V = xb()
    ;(a(Se.prototype, A.prototype), a(Se, A))
    var B = () => {},
      { errorOrDestroy: D } = x,
      Q = 1,
      he = 2,
      le = 4,
      Me = 8,
      re = 16,
      Y = 32,
      ye = 64,
      oe = 128,
      ue = 256,
      fe = 512,
      De = 1024,
      we = 2048,
      G = 4096,
      ne = 8192,
      ge = 16384,
      Re = 32768,
      Ce = 65536,
      Be = 1 << 17,
      ie = 1 << 18
    function Ne(z) {
      return {
        enumerable: !1,
        get() {
          return (this.state & z) !== 0
        },
        set(W) {
          W ? (this.state |= z) : (this.state &= ~z)
        },
      }
    }
    u(Ie.prototype, {
      objectMode: Ne(Q),
      ended: Ne(he),
      endEmitted: Ne(le),
      reading: Ne(Me),
      constructed: Ne(re),
      sync: Ne(Y),
      needReadable: Ne(ye),
      emittedReadable: Ne(oe),
      readableListening: Ne(ue),
      resumeScheduled: Ne(fe),
      errorEmitted: Ne(De),
      emitClose: Ne(we),
      autoDestroy: Ne(G),
      destroyed: Ne(ne),
      closed: Ne(ge),
      closeEmitted: Ne(Re),
      multiAwaitDrain: Ne(Ce),
      readingMore: Ne(Be),
      dataEmitted: Ne(ie),
    })
    function Ie(z, W, ze) {
      ;(typeof ze != 'boolean' && (ze = W instanceof _n()),
        (this.state = we | G | re | Y),
        z && z.objectMode && (this.state |= Q),
        ze && z && z.readableObjectMode && (this.state |= Q),
        (this.highWaterMark = z
          ? k(this, z, 'readableHighWaterMark', ze)
          : q(!1)),
        (this.buffer = new j()),
        (this.length = 0),
        (this.pipes = []),
        (this.flowing = null),
        (this[F] = null),
        z && z.emitClose === !1 && (this.state &= ~we),
        z && z.autoDestroy === !1 && (this.state &= ~G),
        (this.errored = null),
        (this.defaultEncoding = (z && z.defaultEncoding) || 'utf8'),
        (this.awaitDrainWriters = null),
        (this.decoder = null),
        (this.encoding = null),
        z &&
          z.encoding &&
          ((this.decoder = new ce(z.encoding)), (this.encoding = z.encoding)))
    }
    function Se(z) {
      if (!(this instanceof Se)) return new Se(z)
      let W = this instanceof _n()
      ;((this._readableState = new Ie(z, this, W)),
        z &&
          (typeof z.read == 'function' && (this._read = z.read),
          typeof z.destroy == 'function' && (this._destroy = z.destroy),
          typeof z.construct == 'function' && (this._construct = z.construct),
          z.signal && !W && O(z.signal, this)),
        A.call(this, z),
        x.construct(this, () => {
          this._readableState.needReadable && se(this, this._readableState)
        }))
    }
    ;((Se.prototype.destroy = x.destroy),
      (Se.prototype._undestroy = x.undestroy),
      (Se.prototype._destroy = function (z, W) {
        W(z)
      }),
      (Se.prototype[w.captureRejectionSymbol] = function (z) {
        this.destroy(z)
      }),
      (Se.prototype[S] = function () {
        let z
        return (
          this.destroyed ||
            ((z = this.readableEnded ? null : new K()), this.destroy(z)),
          new d((W, ze) => N(this, (He) => (He && He !== z ? ze(He) : W(null))))
        )
      }),
      (Se.prototype.push = function (z, W) {
        return Je(this, z, W, !1)
      }),
      (Se.prototype.unshift = function (z, W) {
        return Je(this, z, W, !0)
      }))
    function Je(z, W, ze, He) {
      T('readableAddChunk', W)
      let Ge = z._readableState,
        Et
      if (
        ((Ge.state & Q) === 0 &&
          (typeof W == 'string'
            ? ((ze = ze || Ge.defaultEncoding),
              Ge.encoding !== ze &&
                (He && Ge.encoding
                  ? (W = _.from(W, ze).toString(Ge.encoding))
                  : ((W = _.from(W, ze)), (ze = ''))))
            : W instanceof _
              ? (ze = '')
              : A._isUint8Array(W)
                ? ((W = A._uint8ArrayToBuffer(W)), (ze = ''))
                : W != null &&
                  (Et = new X('chunk', ['string', 'Buffer', 'Uint8Array'], W))),
        Et)
      )
        D(z, Et)
      else if (W === null) ((Ge.state &= ~Me), de(z, Ge))
      else if ((Ge.state & Q) !== 0 || (W && W.length > 0))
        if (He)
          if ((Ge.state & le) !== 0) D(z, new $())
          else {
            if (Ge.destroyed || Ge.errored) return !1
            m(z, Ge, W, !0)
          }
        else if (Ge.ended) D(z, new J())
        else {
          if (Ge.destroyed || Ge.errored) return !1
          ;((Ge.state &= ~Me),
            Ge.decoder && !ze
              ? ((W = Ge.decoder.write(W)),
                Ge.objectMode || W.length !== 0 ? m(z, Ge, W, !1) : se(z, Ge))
              : m(z, Ge, W, !1))
        }
      else He || ((Ge.state &= ~Me), se(z, Ge))
      return !Ge.ended && (Ge.length < Ge.highWaterMark || Ge.length === 0)
    }
    function m(z, W, ze, He) {
      ;(W.flowing && W.length === 0 && !W.sync && z.listenerCount('data') > 0
        ? ((W.state & Ce) !== 0
            ? W.awaitDrainWriters.clear()
            : (W.awaitDrainWriters = null),
          (W.dataEmitted = !0),
          z.emit('data', ze))
        : ((W.length += W.objectMode ? 1 : ze.length),
          He ? W.buffer.unshift(ze) : W.buffer.push(ze),
          (W.state & ye) !== 0 && Ae(z)),
        se(z, W))
    }
    ;((Se.prototype.isPaused = function () {
      let z = this._readableState
      return z[F] === !0 || z.flowing === !1
    }),
      (Se.prototype.setEncoding = function (z) {
        let W = new ce(z)
        ;((this._readableState.decoder = W),
          (this._readableState.encoding = this._readableState.decoder.encoding))
        let ze = this._readableState.buffer,
          He = ''
        for (let Ge of ze) He += W.write(Ge)
        return (
          ze.clear(),
          He !== '' && ze.push(He),
          (this._readableState.length = He.length),
          this
        )
      }))
    var R = 1073741824
    function U(z) {
      if (z > R) throw new ee('size', '<= 1GiB', z)
      return (
        z--,
        (z |= z >>> 1),
        (z |= z >>> 2),
        (z |= z >>> 4),
        (z |= z >>> 8),
        (z |= z >>> 16),
        z++,
        z
      )
    }
    function te(z, W) {
      return z <= 0 || (W.length === 0 && W.ended)
        ? 0
        : (W.state & Q) !== 0
          ? 1
          : s(z)
            ? W.flowing && W.length
              ? W.buffer.first().length
              : W.length
            : z <= W.length
              ? z
              : W.ended
                ? W.length
                : 0
    }
    Se.prototype.read = function (z) {
      ;(T('read', z), z === void 0 ? (z = NaN) : g(z) || (z = o(z, 10)))
      let W = this._readableState,
        ze = z
      if (
        (z > W.highWaterMark && (W.highWaterMark = U(z)),
        z !== 0 && (W.state &= ~oe),
        z === 0 &&
          W.needReadable &&
          ((W.highWaterMark !== 0
            ? W.length >= W.highWaterMark
            : W.length > 0) ||
            W.ended))
      )
        return (
          T('read: emitReadable', W.length, W.ended),
          W.length === 0 && W.ended ? $t(this) : Ae(this),
          null
        )
      if (((z = te(z, W)), z === 0 && W.ended))
        return (W.length === 0 && $t(this), null)
      let He = (W.state & ye) !== 0
      if (
        (T('need readable', He),
        (W.length === 0 || W.length - z < W.highWaterMark) &&
          ((He = !0), T('length less than watermark', He)),
        W.ended || W.reading || W.destroyed || W.errored || !W.constructed)
      )
        ((He = !1), T('reading, ended or constructing', He))
      else if (He) {
        ;(T('do read'), (W.state |= Me | Y), W.length === 0 && (W.state |= ye))
        try {
          this._read(W.highWaterMark)
        } catch (Et) {
          D(this, Et)
        }
        ;((W.state &= ~Y), W.reading || (z = te(ze, W)))
      }
      let Ge
      return (
        z > 0 ? (Ge = nr(z, W)) : (Ge = null),
        Ge === null
          ? ((W.needReadable = W.length <= W.highWaterMark), (z = 0))
          : ((W.length -= z),
            W.multiAwaitDrain
              ? W.awaitDrainWriters.clear()
              : (W.awaitDrainWriters = null)),
        W.length === 0 &&
          (W.ended || (W.needReadable = !0), ze !== z && W.ended && $t(this)),
        Ge !== null &&
          !W.errorEmitted &&
          !W.closeEmitted &&
          ((W.dataEmitted = !0), this.emit('data', Ge)),
        Ge
      )
    }
    function de(z, W) {
      if ((T('onEofChunk'), !W.ended)) {
        if (W.decoder) {
          let ze = W.decoder.end()
          ze &&
            ze.length &&
            (W.buffer.push(ze), (W.length += W.objectMode ? 1 : ze.length))
        }
        ;((W.ended = !0),
          W.sync
            ? Ae(z)
            : ((W.needReadable = !1), (W.emittedReadable = !0), qe(z)))
      }
    }
    function Ae(z) {
      let W = z._readableState
      ;(T('emitReadable', W.needReadable, W.emittedReadable),
        (W.needReadable = !1),
        W.emittedReadable ||
          (T('emitReadable', W.flowing),
          (W.emittedReadable = !0),
          h.nextTick(qe, z)))
    }
    function qe(z) {
      let W = z._readableState
      ;(T('emitReadable_', W.destroyed, W.length, W.ended),
        !W.destroyed &&
          !W.errored &&
          (W.length || W.ended) &&
          (z.emit('readable'), (W.emittedReadable = !1)),
        (W.needReadable =
          !W.flowing && !W.ended && W.length <= W.highWaterMark),
        Zt(z))
    }
    function se(z, W) {
      !W.readingMore &&
        W.constructed &&
        ((W.readingMore = !0), h.nextTick(me, z, W))
    }
    function me(z, W) {
      for (
        ;
        !W.reading &&
        !W.ended &&
        (W.length < W.highWaterMark || (W.flowing && W.length === 0));
      ) {
        let ze = W.length
        if ((T('maybeReadMore read 0'), z.read(0), ze === W.length)) break
      }
      W.readingMore = !1
    }
    ;((Se.prototype._read = function (z) {
      throw new I('_read()')
    }),
      (Se.prototype.pipe = function (z, W) {
        let ze = this,
          He = this._readableState
        ;(He.pipes.length === 1 &&
          (He.multiAwaitDrain ||
            ((He.multiAwaitDrain = !0),
            (He.awaitDrainWriters = new v(
              He.awaitDrainWriters ? [He.awaitDrainWriters] : []
            )))),
          He.pipes.push(z),
          T('pipe count=%d opts=%j', He.pipes.length, W))
        let Ge =
          (!W || W.end !== !1) && z !== h.stdout && z !== h.stderr ? kt : Wr
        ;(He.endEmitted ? h.nextTick(Ge) : ze.once('end', Ge),
          z.on('unpipe', Et))
        function Et(gr, er) {
          ;(T('onunpipe'),
            gr === ze &&
              er &&
              er.hasUnpiped === !1 &&
              ((er.hasUnpiped = !0), ar()))
        }
        function kt() {
          ;(T('onend'), z.end())
        }
        let ir,
          Tn = !1
        function ar() {
          ;(T('cleanup'),
            z.removeListener('close', or),
            z.removeListener('finish', zr),
            ir && z.removeListener('drain', ir),
            z.removeListener('error', lr),
            z.removeListener('unpipe', Et),
            ze.removeListener('end', kt),
            ze.removeListener('end', Wr),
            ze.removeListener('data', Lt),
            (Tn = !0),
            ir &&
              He.awaitDrainWriters &&
              (!z._writableState || z._writableState.needDrain) &&
              ir())
        }
        function At() {
          ;(Tn ||
            (He.pipes.length === 1 && He.pipes[0] === z
              ? (T('false write response, pause', 0),
                (He.awaitDrainWriters = z),
                (He.multiAwaitDrain = !1))
              : He.pipes.length > 1 &&
                He.pipes.includes(z) &&
                (T('false write response, pause', He.awaitDrainWriters.size),
                He.awaitDrainWriters.add(z)),
            ze.pause()),
            ir || ((ir = Ye(ze, z)), z.on('drain', ir)))
        }
        ze.on('data', Lt)
        function Lt(gr) {
          T('ondata')
          let er = z.write(gr)
          ;(T('dest.write', er), er === !1 && At())
        }
        function lr(gr) {
          if (
            (T('onerror', gr),
            Wr(),
            z.removeListener('error', lr),
            z.listenerCount('error') === 0)
          ) {
            let er = z._writableState || z._readableState
            er && !er.errorEmitted ? D(z, gr) : z.emit('error', gr)
          }
        }
        M(z, 'error', lr)
        function or() {
          ;(z.removeListener('finish', zr), Wr())
        }
        z.once('close', or)
        function zr() {
          ;(T('onfinish'), z.removeListener('close', or), Wr())
        }
        z.once('finish', zr)
        function Wr() {
          ;(T('unpipe'), ze.unpipe(z))
        }
        return (
          z.emit('pipe', ze),
          z.writableNeedDrain === !0
            ? At()
            : He.flowing || (T('pipe resume'), ze.resume()),
          z
        )
      }))
    function Ye(z, W) {
      return function () {
        let ze = z._readableState
        ;(ze.awaitDrainWriters === W
          ? (T('pipeOnDrain', 1), (ze.awaitDrainWriters = null))
          : ze.multiAwaitDrain &&
            (T('pipeOnDrain', ze.awaitDrainWriters.size),
            ze.awaitDrainWriters.delete(W)),
          (!ze.awaitDrainWriters || ze.awaitDrainWriters.size === 0) &&
            z.listenerCount('data') &&
            z.resume())
      }
    }
    ;((Se.prototype.unpipe = function (z) {
      let W = this._readableState,
        ze = { hasUnpiped: !1 }
      if (W.pipes.length === 0) return this
      if (!z) {
        let Ge = W.pipes
        ;((W.pipes = []), this.pause())
        for (let Et = 0; Et < Ge.length; Et++)
          Ge[Et].emit('unpipe', this, { hasUnpiped: !1 })
        return this
      }
      let He = c(W.pipes, z)
      return He === -1
        ? this
        : (W.pipes.splice(He, 1),
          W.pipes.length === 0 && this.pause(),
          z.emit('unpipe', this, ze),
          this)
    }),
      (Se.prototype.on = function (z, W) {
        let ze = A.prototype.on.call(this, z, W),
          He = this._readableState
        return (
          z === 'data'
            ? ((He.readableListening = this.listenerCount('readable') > 0),
              He.flowing !== !1 && this.resume())
            : z === 'readable' &&
              !He.endEmitted &&
              !He.readableListening &&
              ((He.readableListening = He.needReadable = !0),
              (He.flowing = !1),
              (He.emittedReadable = !1),
              T('on readable', He.length, He.reading),
              He.length ? Ae(this) : He.reading || h.nextTick(Ze, this)),
          ze
        )
      }),
      (Se.prototype.addListener = Se.prototype.on),
      (Se.prototype.removeListener = function (z, W) {
        let ze = A.prototype.removeListener.call(this, z, W)
        return (z === 'readable' && h.nextTick(Pe, this), ze)
      }),
      (Se.prototype.off = Se.prototype.removeListener),
      (Se.prototype.removeAllListeners = function (z) {
        let W = A.prototype.removeAllListeners.apply(this, arguments)
        return ((z === 'readable' || z === void 0) && h.nextTick(Pe, this), W)
      }))
    function Pe(z) {
      let W = z._readableState
      ;((W.readableListening = z.listenerCount('readable') > 0),
        W.resumeScheduled && W[F] === !1
          ? (W.flowing = !0)
          : z.listenerCount('data') > 0
            ? z.resume()
            : W.readableListening || (W.flowing = null))
    }
    function Ze(z) {
      ;(T('readable nexttick read 0'), z.read(0))
    }
    Se.prototype.resume = function () {
      let z = this._readableState
      return (
        z.flowing ||
          (T('resume'), (z.flowing = !z.readableListening), et(this, z)),
        (z[F] = !1),
        this
      )
    }
    function et(z, W) {
      W.resumeScheduled || ((W.resumeScheduled = !0), h.nextTick(Ar, z, W))
    }
    function Ar(z, W) {
      ;(T('resume', W.reading),
        W.reading || z.read(0),
        (W.resumeScheduled = !1),
        z.emit('resume'),
        Zt(z),
        W.flowing && !W.reading && z.read(0))
    }
    Se.prototype.pause = function () {
      return (
        T('call pause flowing=%j', this._readableState.flowing),
        this._readableState.flowing !== !1 &&
          (T('pause'), (this._readableState.flowing = !1), this.emit('pause')),
        (this._readableState[F] = !0),
        this
      )
    }
    function Zt(z) {
      let W = z._readableState
      for (T('flow', W.flowing); W.flowing && z.read() !== null; );
    }
    ;((Se.prototype.wrap = function (z) {
      let W = !1
      ;(z.on('data', (He) => {
        !this.push(He) && z.pause && ((W = !0), z.pause())
      }),
        z.on('end', () => {
          this.push(null)
        }),
        z.on('error', (He) => {
          D(this, He)
        }),
        z.on('close', () => {
          this.destroy()
        }),
        z.on('destroy', () => {
          this.destroy()
        }),
        (this._read = () => {
          W && z.resume && ((W = !1), z.resume())
        }))
      let ze = i(z)
      for (let He = 1; He < ze.length; He++) {
        let Ge = ze[He]
        this[Ge] === void 0 &&
          typeof z[Ge] == 'function' &&
          (this[Ge] = z[Ge].bind(z))
      }
      return this
    }),
      (Se.prototype[E] = function () {
        return Mt(this)
      }),
      (Se.prototype.iterator = function (z) {
        return (z !== void 0 && P(z, 'options'), Mt(this, z))
      }))
    function Mt(z, W) {
      typeof z.read != 'function' && (z = Se.wrap(z, { objectMode: !0 }))
      let ze = Jt(z, W)
      return ((ze.stream = z), ze)
    }
    async function* Jt(z, W) {
      let ze = B
      function He(kt) {
        this === z ? (ze(), (ze = B)) : (ze = kt)
      }
      z.on('readable', He)
      let Ge,
        Et = N(z, { writable: !1 }, (kt) => {
          ;((Ge = kt ? H(Ge, kt) : null), ze(), (ze = B))
        })
      try {
        for (;;) {
          let kt = z.destroyed ? null : z.read()
          if (kt !== null) yield kt
          else {
            if (Ge) throw Ge
            if (Ge === null) return
            await new d(He)
          }
        }
      } catch (kt) {
        throw ((Ge = H(Ge, kt)), Ge)
      } finally {
        ;(Ge || W?.destroyOnReturn !== !1) &&
        (Ge === void 0 || z._readableState.autoDestroy)
          ? x.destroyer(z, null)
          : (z.off('readable', He), Et())
      }
    }
    ;(u(Se.prototype, {
      readable: {
        __proto__: null,
        get() {
          let z = this._readableState
          return (
            !!z &&
            z.readable !== !1 &&
            !z.destroyed &&
            !z.errorEmitted &&
            !z.endEmitted
          )
        },
        set(z) {
          this._readableState && (this._readableState.readable = !!z)
        },
      },
      readableDidRead: {
        __proto__: null,
        enumerable: !1,
        get: function () {
          return this._readableState.dataEmitted
        },
      },
      readableAborted: {
        __proto__: null,
        enumerable: !1,
        get: function () {
          return !!(
            this._readableState.readable !== !1 &&
            (this._readableState.destroyed || this._readableState.errored) &&
            !this._readableState.endEmitted
          )
        },
      },
      readableHighWaterMark: {
        __proto__: null,
        enumerable: !1,
        get: function () {
          return this._readableState.highWaterMark
        },
      },
      readableBuffer: {
        __proto__: null,
        enumerable: !1,
        get: function () {
          return this._readableState && this._readableState.buffer
        },
      },
      readableFlowing: {
        __proto__: null,
        enumerable: !1,
        get: function () {
          return this._readableState.flowing
        },
        set: function (z) {
          this._readableState && (this._readableState.flowing = z)
        },
      },
      readableLength: {
        __proto__: null,
        enumerable: !1,
        get() {
          return this._readableState.length
        },
      },
      readableObjectMode: {
        __proto__: null,
        enumerable: !1,
        get() {
          return this._readableState ? this._readableState.objectMode : !1
        },
      },
      readableEncoding: {
        __proto__: null,
        enumerable: !1,
        get() {
          return this._readableState ? this._readableState.encoding : null
        },
      },
      errored: {
        __proto__: null,
        enumerable: !1,
        get() {
          return this._readableState ? this._readableState.errored : null
        },
      },
      closed: {
        __proto__: null,
        get() {
          return this._readableState ? this._readableState.closed : !1
        },
      },
      destroyed: {
        __proto__: null,
        enumerable: !1,
        get() {
          return this._readableState ? this._readableState.destroyed : !1
        },
        set(z) {
          this._readableState && (this._readableState.destroyed = z)
        },
      },
      readableEnded: {
        __proto__: null,
        enumerable: !1,
        get() {
          return this._readableState ? this._readableState.endEmitted : !1
        },
      },
    }),
      u(Ie.prototype, {
        pipesCount: {
          __proto__: null,
          get() {
            return this.pipes.length
          },
        },
        paused: {
          __proto__: null,
          get() {
            return this[F] !== !1
          },
          set(z) {
            this[F] = !!z
          },
        },
      }),
      (Se._fromList = nr))
    function nr(z, W) {
      if (W.length === 0) return null
      let ze
      return (
        W.objectMode
          ? (ze = W.buffer.shift())
          : !z || z >= W.length
            ? (W.decoder
                ? (ze = W.buffer.join(''))
                : W.buffer.length === 1
                  ? (ze = W.buffer.first())
                  : (ze = W.buffer.concat(W.length)),
              W.buffer.clear())
            : (ze = W.buffer.consume(z, W.decoder)),
        ze
      )
    }
    function $t(z) {
      let W = z._readableState
      ;(T('endReadable', W.endEmitted),
        W.endEmitted || ((W.ended = !0), h.nextTick(Bt, W, z)))
    }
    function Bt(z, W) {
      if (
        (T('endReadableNT', z.endEmitted, z.length),
        !z.errored && !z.closeEmitted && !z.endEmitted && z.length === 0)
      ) {
        if (
          ((z.endEmitted = !0),
          W.emit('end'),
          W.writable && W.allowHalfOpen === !1)
        )
          h.nextTick(Ti, W)
        else if (z.autoDestroy) {
          let ze = W._writableState
          ;(!ze || (ze.autoDestroy && (ze.finished || ze.writable === !1))) &&
            W.destroy()
        }
      }
    }
    function Ti(z) {
      z.writable && !z.writableEnded && !z.destroyed && z.end()
    }
    Se.from = function (z, W) {
      return V(Se, z, W)
    }
    var Kr
    function Fr() {
      return (Kr === void 0 && (Kr = {}), Kr)
    }
    ;((Se.fromWeb = function (z, W) {
      return Fr().newStreamReadableFromReadableStream(z, W)
    }),
      (Se.toWeb = function (z, W) {
        return Fr().newReadableStreamFromStreamReadable(z, W)
      }),
      (Se.wrap = function (z, W) {
        var ze, He
        return new Se({
          objectMode:
            (ze =
              (He = z.readableObjectMode) !== null && He !== void 0
                ? He
                : z.objectMode) !== null && ze !== void 0
              ? ze
              : !0,
          ...W,
          destroy(Ge, Et) {
            ;(x.destroyer(z, Ge), Et(Ge))
          },
        }).wrap(z)
      }))
  }),
  Dh = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = Ei(),
      {
        ArrayPrototypeSlice: c,
        Error: g,
        FunctionPrototypeSymbolHasInstance: s,
        ObjectDefineProperty: o,
        ObjectDefineProperties: u,
        ObjectSetPrototypeOf: i,
        StringPrototypeToLowerCase: a,
        Symbol: d,
        SymbolHasInstance: v,
      } = Tt()
    ;((p.exports = P), (P.WritableState = $))
    var { EventEmitter: S } = (wi(), gt($n)),
      E = Uh().Stream,
      { Buffer: b } = (Pt(), gt(Ht)),
      w = da(),
      { addAbortSignal: A } = as(),
      { getHighWaterMark: M, getDefaultHighWaterMark: _ } = ls(),
      {
        ERR_INVALID_ARG_TYPE: O,
        ERR_METHOD_NOT_IMPLEMENTED: N,
        ERR_MULTIPLE_CALLBACK: T,
        ERR_STREAM_CANNOT_PIPE: j,
        ERR_STREAM_DESTROYED: x,
        ERR_STREAM_ALREADY_FINISHED: k,
        ERR_STREAM_NULL_VALUES: q,
        ERR_STREAM_WRITE_AFTER_END: H,
        ERR_UNKNOWN_ENCODING: X,
      } = rr().codes,
      { errorOrDestroy: I } = w
    ;(i(P.prototype, E.prototype), i(P, E))
    function ee() {}
    var J = d('kOnFinished')
    function $(G, ne, ge) {
      ;(typeof ge != 'boolean' && (ge = ne instanceof _n()),
        (this.objectMode = !!(G && G.objectMode)),
        ge &&
          (this.objectMode = this.objectMode || !!(G && G.writableObjectMode)),
        (this.highWaterMark = G
          ? M(this, G, 'writableHighWaterMark', ge)
          : _(!1)),
        (this.finalCalled = !1),
        (this.needDrain = !1),
        (this.ending = !1),
        (this.ended = !1),
        (this.finished = !1),
        (this.destroyed = !1))
      let Re = !!(G && G.decodeStrings === !1)
      ;((this.decodeStrings = !Re),
        (this.defaultEncoding = (G && G.defaultEncoding) || 'utf8'),
        (this.length = 0),
        (this.writing = !1),
        (this.corked = 0),
        (this.sync = !0),
        (this.bufferProcessing = !1),
        (this.onwrite = D.bind(void 0, ne)),
        (this.writecb = null),
        (this.writelen = 0),
        (this.afterWriteTickInfo = null),
        K(this),
        (this.pendingcb = 0),
        (this.constructed = !0),
        (this.prefinished = !1),
        (this.errorEmitted = !1),
        (this.emitClose = !G || G.emitClose !== !1),
        (this.autoDestroy = !G || G.autoDestroy !== !1),
        (this.errored = null),
        (this.closed = !1),
        (this.closeEmitted = !1),
        (this[J] = []))
    }
    function K(G) {
      ;((G.buffered = []),
        (G.bufferedIndex = 0),
        (G.allBuffers = !0),
        (G.allNoop = !0))
    }
    ;(($.prototype.getBuffer = function () {
      return c(this.buffered, this.bufferedIndex)
    }),
      o($.prototype, 'bufferedRequestCount', {
        __proto__: null,
        get() {
          return this.buffered.length - this.bufferedIndex
        },
      }))
    function P(G) {
      let ne = this instanceof _n()
      if (!ne && !s(P, this)) return new P(G)
      ;((this._writableState = new $(G, this, ne)),
        G &&
          (typeof G.write == 'function' && (this._write = G.write),
          typeof G.writev == 'function' && (this._writev = G.writev),
          typeof G.destroy == 'function' && (this._destroy = G.destroy),
          typeof G.final == 'function' && (this._final = G.final),
          typeof G.construct == 'function' && (this._construct = G.construct),
          G.signal && A(G.signal, this)),
        E.call(this, G),
        w.construct(this, () => {
          let ge = this._writableState
          ;(ge.writing || Me(this, ge), oe(this, ge))
        }))
    }
    ;(o(P, v, {
      __proto__: null,
      value: function (G) {
        return s(this, G)
          ? !0
          : this !== P
            ? !1
            : G && G._writableState instanceof $
      },
    }),
      (P.prototype.pipe = function () {
        I(this, new j())
      }))
    function F(G, ne, ge, Re) {
      let Ce = G._writableState
      if (typeof ge == 'function') ((Re = ge), (ge = Ce.defaultEncoding))
      else {
        if (!ge) ge = Ce.defaultEncoding
        else if (ge !== 'buffer' && !b.isEncoding(ge)) throw new X(ge)
        typeof Re != 'function' && (Re = ee)
      }
      if (ne === null) throw new q()
      if (!Ce.objectMode)
        if (typeof ne == 'string')
          Ce.decodeStrings !== !1 && ((ne = b.from(ne, ge)), (ge = 'buffer'))
        else if (ne instanceof b) ge = 'buffer'
        else if (E._isUint8Array(ne))
          ((ne = E._uint8ArrayToBuffer(ne)), (ge = 'buffer'))
        else throw new O('chunk', ['string', 'Buffer', 'Uint8Array'], ne)
      let Be
      return (
        Ce.ending ? (Be = new H()) : Ce.destroyed && (Be = new x('write')),
        Be
          ? (h.nextTick(Re, Be), I(G, Be, !0), Be)
          : (Ce.pendingcb++, ce(G, Ce, ne, ge, Re))
      )
    }
    ;((P.prototype.write = function (G, ne, ge) {
      return F(this, G, ne, ge) === !0
    }),
      (P.prototype.cork = function () {
        this._writableState.corked++
      }),
      (P.prototype.uncork = function () {
        let G = this._writableState
        G.corked && (G.corked--, G.writing || Me(this, G))
      }),
      (P.prototype.setDefaultEncoding = function (G) {
        if ((typeof G == 'string' && (G = a(G)), !b.isEncoding(G)))
          throw new X(G)
        return ((this._writableState.defaultEncoding = G), this)
      }))
    function ce(G, ne, ge, Re, Ce) {
      let Be = ne.objectMode ? 1 : ge.length
      ne.length += Be
      let ie = ne.length < ne.highWaterMark
      return (
        ie || (ne.needDrain = !0),
        ne.writing || ne.corked || ne.errored || !ne.constructed
          ? (ne.buffered.push({ chunk: ge, encoding: Re, callback: Ce }),
            ne.allBuffers && Re !== 'buffer' && (ne.allBuffers = !1),
            ne.allNoop && Ce !== ee && (ne.allNoop = !1))
          : ((ne.writelen = Be),
            (ne.writecb = Ce),
            (ne.writing = !0),
            (ne.sync = !0),
            G._write(ge, Re, ne.onwrite),
            (ne.sync = !1)),
        ie && !ne.errored && !ne.destroyed
      )
    }
    function V(G, ne, ge, Re, Ce, Be, ie) {
      ;((ne.writelen = Re),
        (ne.writecb = ie),
        (ne.writing = !0),
        (ne.sync = !0),
        ne.destroyed
          ? ne.onwrite(new x('write'))
          : ge
            ? G._writev(Ce, ne.onwrite)
            : G._write(Ce, Be, ne.onwrite),
        (ne.sync = !1))
    }
    function B(G, ne, ge, Re) {
      ;(--ne.pendingcb, Re(ge), le(ne), I(G, ge))
    }
    function D(G, ne) {
      let ge = G._writableState,
        Re = ge.sync,
        Ce = ge.writecb
      if (typeof Ce != 'function') {
        I(G, new T())
        return
      }
      ;((ge.writing = !1),
        (ge.writecb = null),
        (ge.length -= ge.writelen),
        (ge.writelen = 0),
        ne
          ? (ne.stack,
            ge.errored || (ge.errored = ne),
            G._readableState &&
              !G._readableState.errored &&
              (G._readableState.errored = ne),
            Re ? h.nextTick(B, G, ge, ne, Ce) : B(G, ge, ne, Ce))
          : (ge.buffered.length > ge.bufferedIndex && Me(G, ge),
            Re
              ? ge.afterWriteTickInfo !== null &&
                ge.afterWriteTickInfo.cb === Ce
                ? ge.afterWriteTickInfo.count++
                : ((ge.afterWriteTickInfo = {
                    count: 1,
                    cb: Ce,
                    stream: G,
                    state: ge,
                  }),
                  h.nextTick(Q, ge.afterWriteTickInfo))
              : he(G, ge, 1, Ce)))
    }
    function Q({ stream: G, state: ne, count: ge, cb: Re }) {
      return ((ne.afterWriteTickInfo = null), he(G, ne, ge, Re))
    }
    function he(G, ne, ge, Re) {
      for (
        !ne.ending &&
        !G.destroyed &&
        ne.length === 0 &&
        ne.needDrain &&
        ((ne.needDrain = !1), G.emit('drain'));
        ge-- > 0;
      )
        (ne.pendingcb--, Re())
      ;(ne.destroyed && le(ne), oe(G, ne))
    }
    function le(G) {
      if (G.writing) return
      for (let Ce = G.bufferedIndex; Ce < G.buffered.length; ++Ce) {
        var ne
        let { chunk: Be, callback: ie } = G.buffered[Ce],
          Ne = G.objectMode ? 1 : Be.length
        ;((G.length -= Ne),
          ie((ne = G.errored) !== null && ne !== void 0 ? ne : new x('write')))
      }
      let ge = G[J].splice(0)
      for (let Ce = 0; Ce < ge.length; Ce++) {
        var Re
        ge[Ce]((Re = G.errored) !== null && Re !== void 0 ? Re : new x('end'))
      }
      K(G)
    }
    function Me(G, ne) {
      if (ne.corked || ne.bufferProcessing || ne.destroyed || !ne.constructed)
        return
      let { buffered: ge, bufferedIndex: Re, objectMode: Ce } = ne,
        Be = ge.length - Re
      if (!Be) return
      let ie = Re
      if (((ne.bufferProcessing = !0), Be > 1 && G._writev)) {
        ne.pendingcb -= Be - 1
        let Ne = ne.allNoop
            ? ee
            : (Se) => {
                for (let Je = ie; Je < ge.length; ++Je) ge[Je].callback(Se)
              },
          Ie = ne.allNoop && ie === 0 ? ge : c(ge, ie)
        ;((Ie.allBuffers = ne.allBuffers),
          V(G, ne, !0, ne.length, Ie, '', Ne),
          K(ne))
      } else {
        do {
          let { chunk: Ne, encoding: Ie, callback: Se } = ge[ie]
          ge[ie++] = null
          let Je = Ce ? 1 : Ne.length
          V(G, ne, !1, Je, Ne, Ie, Se)
        } while (ie < ge.length && !ne.writing)
        ie === ge.length
          ? K(ne)
          : ie > 256
            ? (ge.splice(0, ie), (ne.bufferedIndex = 0))
            : (ne.bufferedIndex = ie)
      }
      ne.bufferProcessing = !1
    }
    ;((P.prototype._write = function (G, ne, ge) {
      if (this._writev) this._writev([{ chunk: G, encoding: ne }], ge)
      else throw new N('_write()')
    }),
      (P.prototype._writev = null),
      (P.prototype.end = function (G, ne, ge) {
        let Re = this._writableState
        typeof G == 'function'
          ? ((ge = G), (G = null), (ne = null))
          : typeof ne == 'function' && ((ge = ne), (ne = null))
        let Ce
        if (G != null) {
          let Be = F(this, G, ne)
          Be instanceof g && (Ce = Be)
        }
        return (
          Re.corked && ((Re.corked = 1), this.uncork()),
          Ce ||
            (!Re.errored && !Re.ending
              ? ((Re.ending = !0), oe(this, Re, !0), (Re.ended = !0))
              : Re.finished
                ? (Ce = new k('end'))
                : Re.destroyed && (Ce = new x('end'))),
          typeof ge == 'function' &&
            (Ce || Re.finished ? h.nextTick(ge, Ce) : Re[J].push(ge)),
          this
        )
      }))
    function re(G) {
      return (
        G.ending &&
        !G.destroyed &&
        G.constructed &&
        G.length === 0 &&
        !G.errored &&
        G.buffered.length === 0 &&
        !G.finished &&
        !G.writing &&
        !G.errorEmitted &&
        !G.closeEmitted
      )
    }
    function Y(G, ne) {
      let ge = !1
      function Re(Ce) {
        if (ge) {
          I(G, Ce ?? T())
          return
        }
        if (((ge = !0), ne.pendingcb--, Ce)) {
          let Be = ne[J].splice(0)
          for (let ie = 0; ie < Be.length; ie++) Be[ie](Ce)
          I(G, Ce, ne.sync)
        } else
          re(ne) &&
            ((ne.prefinished = !0),
            G.emit('prefinish'),
            ne.pendingcb++,
            h.nextTick(ue, G, ne))
      }
      ;((ne.sync = !0), ne.pendingcb++)
      try {
        G._final(Re)
      } catch (Ce) {
        Re(Ce)
      }
      ne.sync = !1
    }
    function ye(G, ne) {
      !ne.prefinished &&
        !ne.finalCalled &&
        (typeof G._final == 'function' && !ne.destroyed
          ? ((ne.finalCalled = !0), Y(G, ne))
          : ((ne.prefinished = !0), G.emit('prefinish')))
    }
    function oe(G, ne, ge) {
      re(ne) &&
        (ye(G, ne),
        ne.pendingcb === 0 &&
          (ge
            ? (ne.pendingcb++,
              h.nextTick(
                (Re, Ce) => {
                  re(Ce) ? ue(Re, Ce) : Ce.pendingcb--
                },
                G,
                ne
              ))
            : re(ne) && (ne.pendingcb++, ue(G, ne))))
    }
    function ue(G, ne) {
      ;(ne.pendingcb--, (ne.finished = !0))
      let ge = ne[J].splice(0)
      for (let Re = 0; Re < ge.length; Re++) ge[Re]()
      if ((G.emit('finish'), ne.autoDestroy)) {
        let Re = G._readableState
        ;(!Re || (Re.autoDestroy && (Re.endEmitted || Re.readable === !1))) &&
          G.destroy()
      }
    }
    u(P.prototype, {
      closed: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.closed : !1
        },
      },
      destroyed: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.destroyed : !1
        },
        set(G) {
          this._writableState && (this._writableState.destroyed = G)
        },
      },
      writable: {
        __proto__: null,
        get() {
          let G = this._writableState
          return (
            !!G &&
            G.writable !== !1 &&
            !G.destroyed &&
            !G.errored &&
            !G.ending &&
            !G.ended
          )
        },
        set(G) {
          this._writableState && (this._writableState.writable = !!G)
        },
      },
      writableFinished: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.finished : !1
        },
      },
      writableObjectMode: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.objectMode : !1
        },
      },
      writableBuffer: {
        __proto__: null,
        get() {
          return this._writableState && this._writableState.getBuffer()
        },
      },
      writableEnded: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.ending : !1
        },
      },
      writableNeedDrain: {
        __proto__: null,
        get() {
          let G = this._writableState
          return G ? !G.destroyed && !G.ending && G.needDrain : !1
        },
      },
      writableHighWaterMark: {
        __proto__: null,
        get() {
          return this._writableState && this._writableState.highWaterMark
        },
      },
      writableCorked: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.corked : 0
        },
      },
      writableLength: {
        __proto__: null,
        get() {
          return this._writableState && this._writableState.length
        },
      },
      errored: {
        __proto__: null,
        enumerable: !1,
        get() {
          return this._writableState ? this._writableState.errored : null
        },
      },
      writableAborted: {
        __proto__: null,
        enumerable: !1,
        get: function () {
          return !!(
            this._writableState.writable !== !1 &&
            (this._writableState.destroyed || this._writableState.errored) &&
            !this._writableState.finished
          )
        },
      },
    })
    var fe = w.destroy
    ;((P.prototype.destroy = function (G, ne) {
      let ge = this._writableState
      return (
        !ge.destroyed &&
          (ge.bufferedIndex < ge.buffered.length || ge[J].length) &&
          h.nextTick(le, ge),
        fe.call(this, G, ne),
        this
      )
    }),
      (P.prototype._undestroy = w.undestroy),
      (P.prototype._destroy = function (G, ne) {
        ne(G)
      }),
      (P.prototype[S.captureRejectionSymbol] = function (G) {
        this.destroy(G)
      }))
    var De
    function we() {
      return (De === void 0 && (De = {}), De)
    }
    ;((P.fromWeb = function (G, ne) {
      return we().newStreamWritableFromWritableStream(G, ne)
    }),
      (P.toWeb = function (G) {
        return we().newWritableStreamFromStreamWritable(G)
      }))
  }),
  S1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = Ei(),
      c = (Pt(), gt(Ht)),
      {
        isReadable: g,
        isWritable: s,
        isIterable: o,
        isNodeStream: u,
        isReadableNodeStream: i,
        isWritableNodeStream: a,
        isDuplexNodeStream: d,
        isReadableStream: v,
        isWritableStream: S,
      } = wn(),
      E = ei(),
      {
        AbortError: b,
        codes: { ERR_INVALID_ARG_TYPE: w, ERR_INVALID_RETURN_VALUE: A },
      } = rr(),
      { destroyer: M } = da(),
      _ = _n(),
      O = os(),
      N = Dh(),
      { createDeferredPromise: T } = pr(),
      j = xb(),
      x = globalThis.Blob || c.Blob,
      k =
        typeof x < 'u'
          ? function (J) {
              return J instanceof x
            }
          : function (J) {
              return !1
            },
      q = globalThis.AbortController || hl().AbortController,
      { FunctionPrototypeCall: H } = Tt(),
      X = class extends _ {
        constructor(J) {
          ;(super(J),
            J?.readable === !1 &&
              ((this._readableState.readable = !1),
              (this._readableState.ended = !0),
              (this._readableState.endEmitted = !0)),
            J?.writable === !1 &&
              ((this._writableState.writable = !1),
              (this._writableState.ending = !0),
              (this._writableState.ended = !0),
              (this._writableState.finished = !0)))
        }
      }
    p.exports = function J($, K) {
      if (d($)) return $
      if (i($)) return ee({ readable: $ })
      if (a($)) return ee({ writable: $ })
      if (u($)) return ee({ writable: !1, readable: !1 })
      if (v($)) return ee({ readable: O.fromWeb($) })
      if (S($)) return ee({ writable: N.fromWeb($) })
      if (typeof $ == 'function') {
        let { value: F, write: ce, final: V, destroy: B } = I($)
        if (o(F))
          return j(X, F, { objectMode: !0, write: ce, final: V, destroy: B })
        let D = F?.then
        if (typeof D == 'function') {
          let Q,
            he = H(
              D,
              F,
              (le) => {
                if (le != null) throw new A('nully', 'body', le)
              },
              (le) => {
                M(Q, le)
              }
            )
          return (Q = new X({
            objectMode: !0,
            readable: !1,
            write: ce,
            final(le) {
              V(async () => {
                try {
                  ;(await he, h.nextTick(le, null))
                } catch (Me) {
                  h.nextTick(le, Me)
                }
              })
            },
            destroy: B,
          }))
        }
        throw new A('Iterable, AsyncIterable or AsyncFunction', K, F)
      }
      if (k($)) return J($.arrayBuffer())
      if (o($)) return j(X, $, { objectMode: !0, writable: !1 })
      if (v($?.readable) && S($?.writable)) return X.fromWeb($)
      if (typeof $?.writable == 'object' || typeof $?.readable == 'object') {
        let F =
            $ != null && $.readable
              ? i($?.readable)
                ? $?.readable
                : J($.readable)
              : void 0,
          ce =
            $ != null && $.writable
              ? a($?.writable)
                ? $?.writable
                : J($.writable)
              : void 0
        return ee({ readable: F, writable: ce })
      }
      let P = $?.then
      if (typeof P == 'function') {
        let F
        return (
          H(
            P,
            $,
            (ce) => {
              ;(ce != null && F.push(ce), F.push(null))
            },
            (ce) => {
              M(F, ce)
            }
          ),
          (F = new X({ objectMode: !0, writable: !1, read() {} }))
        )
      }
      throw new w(
        K,
        [
          'Blob',
          'ReadableStream',
          'WritableStream',
          'Stream',
          'Iterable',
          'AsyncIterable',
          'Function',
          '{ readable, writable } pair',
          'Promise',
        ],
        $
      )
    }
    function I(J) {
      let { promise: $, resolve: K } = T(),
        P = new q(),
        F = P.signal
      return {
        value: J(
          (async function* () {
            for (;;) {
              let ce = $
              $ = null
              let { chunk: V, done: B, cb: D } = await ce
              if ((h.nextTick(D), B)) return
              if (F.aborted) throw new b(void 0, { cause: F.reason })
              ;(({ promise: $, resolve: K } = T()), yield V)
            }
          })(),
          { signal: F }
        ),
        write(ce, V, B) {
          let D = K
          ;((K = null), D({ chunk: ce, done: !1, cb: B }))
        },
        final(ce) {
          let V = K
          ;((K = null), V({ done: !0, cb: ce }))
        },
        destroy(ce, V) {
          ;(P.abort(), V(ce))
        },
      }
    }
    function ee(J) {
      let $ =
          J.readable && typeof J.readable.read != 'function'
            ? O.wrap(J.readable)
            : J.readable,
        K = J.writable,
        P = !!g($),
        F = !!s(K),
        ce,
        V,
        B,
        D,
        Q
      function he(le) {
        let Me = D
        ;((D = null), Me ? Me(le) : le && Q.destroy(le))
      }
      return (
        (Q = new X({
          readableObjectMode: !!($ != null && $.readableObjectMode),
          writableObjectMode: !!(K != null && K.writableObjectMode),
          readable: P,
          writable: F,
        })),
        F &&
          (E(K, (le) => {
            ;((F = !1), le && M($, le), he(le))
          }),
          (Q._write = function (le, Me, re) {
            K.write(le, Me) ? re() : (ce = re)
          }),
          (Q._final = function (le) {
            ;(K.end(), (V = le))
          }),
          K.on('drain', function () {
            if (ce) {
              let le = ce
              ;((ce = null), le())
            }
          }),
          K.on('finish', function () {
            if (V) {
              let le = V
              ;((V = null), le())
            }
          })),
        P &&
          (E($, (le) => {
            ;((P = !1), le && M($, le), he(le))
          }),
          $.on('readable', function () {
            if (B) {
              let le = B
              ;((B = null), le())
            }
          }),
          $.on('end', function () {
            Q.push(null)
          }),
          (Q._read = function () {
            for (;;) {
              let le = $.read()
              if (le === null) {
                B = Q._read
                return
              }
              if (!Q.push(le)) return
            }
          })),
        (Q._destroy = function (le, Me) {
          ;(!le && D !== null && (le = new b()),
            (B = null),
            (ce = null),
            (V = null),
            D === null ? Me(le) : ((D = Me), M(K, le), M($, le)))
        }),
        Q
      )
    }
  }),
  _n = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var {
      ObjectDefineProperties: h,
      ObjectGetOwnPropertyDescriptor: c,
      ObjectKeys: g,
      ObjectSetPrototypeOf: s,
    } = Tt()
    p.exports = i
    var o = os(),
      u = Dh()
    ;(s(i.prototype, o.prototype), s(i, o))
    {
      let S = g(u.prototype)
      for (let E = 0; E < S.length; E++) {
        let b = S[E]
        i.prototype[b] || (i.prototype[b] = u.prototype[b])
      }
    }
    function i(S) {
      if (!(this instanceof i)) return new i(S)
      ;(o.call(this, S),
        u.call(this, S),
        S
          ? ((this.allowHalfOpen = S.allowHalfOpen !== !1),
            S.readable === !1 &&
              ((this._readableState.readable = !1),
              (this._readableState.ended = !0),
              (this._readableState.endEmitted = !0)),
            S.writable === !1 &&
              ((this._writableState.writable = !1),
              (this._writableState.ending = !0),
              (this._writableState.ended = !0),
              (this._writableState.finished = !0)))
          : (this.allowHalfOpen = !0))
    }
    h(i.prototype, {
      writable: { __proto__: null, ...c(u.prototype, 'writable') },
      writableHighWaterMark: {
        __proto__: null,
        ...c(u.prototype, 'writableHighWaterMark'),
      },
      writableObjectMode: {
        __proto__: null,
        ...c(u.prototype, 'writableObjectMode'),
      },
      writableBuffer: { __proto__: null, ...c(u.prototype, 'writableBuffer') },
      writableLength: { __proto__: null, ...c(u.prototype, 'writableLength') },
      writableFinished: {
        __proto__: null,
        ...c(u.prototype, 'writableFinished'),
      },
      writableCorked: { __proto__: null, ...c(u.prototype, 'writableCorked') },
      writableEnded: { __proto__: null, ...c(u.prototype, 'writableEnded') },
      writableNeedDrain: {
        __proto__: null,
        ...c(u.prototype, 'writableNeedDrain'),
      },
      destroyed: {
        __proto__: null,
        get() {
          return this._readableState === void 0 ||
            this._writableState === void 0
            ? !1
            : this._readableState.destroyed && this._writableState.destroyed
        },
        set(S) {
          this._readableState &&
            this._writableState &&
            ((this._readableState.destroyed = S),
            (this._writableState.destroyed = S))
        },
      },
    })
    var a
    function d() {
      return (a === void 0 && (a = {}), a)
    }
    ;((i.fromWeb = function (S, E) {
      return d().newStreamDuplexFromReadableWritablePair(S, E)
    }),
      (i.toWeb = function (S) {
        return d().newReadableWritablePairFromDuplex(S)
      }))
    var v
    i.from = function (S) {
      return (v || (v = S1()), v(S, 'body'))
    }
  }),
  Mb = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { ObjectSetPrototypeOf: h, Symbol: c } = Tt()
    p.exports = i
    var { ERR_METHOD_NOT_IMPLEMENTED: g } = rr().codes,
      s = _n(),
      { getHighWaterMark: o } = ls()
    ;(h(i.prototype, s.prototype), h(i, s))
    var u = c('kCallback')
    function i(v) {
      if (!(this instanceof i)) return new i(v)
      let S = v ? o(this, v, 'readableHighWaterMark', !0) : null
      ;(S === 0 &&
        (v = {
          ...v,
          highWaterMark: null,
          readableHighWaterMark: S,
          writableHighWaterMark: v.writableHighWaterMark || 0,
        }),
        s.call(this, v),
        (this._readableState.sync = !1),
        (this[u] = null),
        v &&
          (typeof v.transform == 'function' && (this._transform = v.transform),
          typeof v.flush == 'function' && (this._flush = v.flush)),
        this.on('prefinish', d))
    }
    function a(v) {
      typeof this._flush == 'function' && !this.destroyed
        ? this._flush((S, E) => {
            if (S) {
              v ? v(S) : this.destroy(S)
              return
            }
            ;(E != null && this.push(E), this.push(null), v && v())
          })
        : (this.push(null), v && v())
    }
    function d() {
      this._final !== a && a.call(this)
    }
    ;((i.prototype._final = a),
      (i.prototype._transform = function (v, S, E) {
        throw new g('_transform()')
      }),
      (i.prototype._write = function (v, S, E) {
        let b = this._readableState,
          w = this._writableState,
          A = b.length
        this._transform(v, S, (M, _) => {
          if (M) {
            E(M)
            return
          }
          ;(_ != null && this.push(_),
            w.ended || A === b.length || b.length < b.highWaterMark
              ? E()
              : (this[u] = E))
        })
      }),
      (i.prototype._read = function () {
        if (this[u]) {
          let v = this[u]
          ;((this[u] = null), v())
        }
      }))
  }),
  Rb = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { ObjectSetPrototypeOf: h } = Tt()
    p.exports = g
    var c = Mb()
    ;(h(g.prototype, c.prototype), h(g, c))
    function g(s) {
      if (!(this instanceof g)) return new g(s)
      c.call(this, s)
    }
    g.prototype._transform = function (s, o, u) {
      u(null, s)
    }
  }),
  Bh = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = Ei(),
      {
        ArrayIsArray: c,
        Promise: g,
        SymbolAsyncIterator: s,
        SymbolDispose: o,
      } = Tt(),
      u = ei(),
      { once: i } = pr(),
      a = da(),
      d = _n(),
      {
        aggregateTwoErrors: v,
        codes: {
          ERR_INVALID_ARG_TYPE: S,
          ERR_INVALID_RETURN_VALUE: E,
          ERR_MISSING_ARGS: b,
          ERR_STREAM_DESTROYED: w,
          ERR_STREAM_PREMATURE_CLOSE: A,
        },
        AbortError: M,
      } = rr(),
      { validateFunction: _, validateAbortSignal: O } = dl(),
      {
        isIterable: N,
        isReadable: T,
        isReadableNodeStream: j,
        isNodeStream: x,
        isTransformStream: k,
        isWebStream: q,
        isReadableStream: H,
        isReadableFinished: X,
      } = wn(),
      I = globalThis.AbortController || hl().AbortController,
      ee,
      J,
      $
    function K(le, Me, re) {
      let Y = !1
      le.on('close', () => {
        Y = !0
      })
      let ye = u(le, { readable: Me, writable: re }, (oe) => {
        Y = !oe
      })
      return {
        destroy: (oe) => {
          Y || ((Y = !0), a.destroyer(le, oe || new w('pipe')))
        },
        cleanup: ye,
      }
    }
    function P(le) {
      return (_(le[le.length - 1], 'streams[stream.length - 1]'), le.pop())
    }
    function F(le) {
      if (N(le)) return le
      if (j(le)) return ce(le)
      throw new S('val', ['Readable', 'Iterable', 'AsyncIterable'], le)
    }
    async function* ce(le) {
      ;(J || (J = os()), yield* J.prototype[s].call(le))
    }
    async function V(le, Me, re, { end: Y }) {
      let ye,
        oe = null,
        ue = (we) => {
          if ((we && (ye = we), oe)) {
            let G = oe
            ;((oe = null), G())
          }
        },
        fe = () =>
          new g((we, G) => {
            ye
              ? G(ye)
              : (oe = () => {
                  ye ? G(ye) : we()
                })
          })
      Me.on('drain', ue)
      let De = u(Me, { readable: !1 }, ue)
      try {
        Me.writableNeedDrain && (await fe())
        for await (let we of le) Me.write(we) || (await fe())
        ;(Y && (Me.end(), await fe()), re())
      } catch (we) {
        re(ye !== we ? v(ye, we) : we)
      } finally {
        ;(De(), Me.off('drain', ue))
      }
    }
    async function B(le, Me, re, { end: Y }) {
      k(Me) && (Me = Me.writable)
      let ye = Me.getWriter()
      try {
        for await (let oe of le) (await ye.ready, ye.write(oe).catch(() => {}))
        ;(await ye.ready, Y && (await ye.close()), re())
      } catch (oe) {
        try {
          ;(await ye.abort(oe), re(oe))
        } catch (ue) {
          re(ue)
        }
      }
    }
    function D(...le) {
      return Q(le, i(P(le)))
    }
    function Q(le, Me, re) {
      if ((le.length === 1 && c(le[0]) && (le = le[0]), le.length < 2))
        throw new b('streams')
      let Y = new I(),
        ye = Y.signal,
        oe = re?.signal,
        ue = []
      O(oe, 'options.signal')
      function fe() {
        Ce(new M())
      }
      $ = $ || pr().addAbortListener
      let De
      oe && (De = $(oe, fe))
      let we,
        G,
        ne = [],
        ge = 0
      function Re(Ie) {
        Ce(Ie, --ge === 0)
      }
      function Ce(Ie, Se) {
        var Je
        if (
          (Ie && (!we || we.code === 'ERR_STREAM_PREMATURE_CLOSE') && (we = Ie),
          !(!we && !Se))
        ) {
          for (; ne.length; ) ne.shift()(we)
          ;((Je = De) === null || Je === void 0 || Je[o](),
            Y.abort(),
            Se && (we || ue.forEach((m) => m()), h.nextTick(Me, we, G)))
        }
      }
      let Be
      for (let Ie = 0; Ie < le.length; Ie++) {
        let Se = le[Ie],
          Je = Ie < le.length - 1,
          m = Ie > 0,
          R = Je || re?.end !== !1,
          U = Ie === le.length - 1
        if (x(Se)) {
          let te = function (de) {
            de &&
              de.name !== 'AbortError' &&
              de.code !== 'ERR_STREAM_PREMATURE_CLOSE' &&
              Re(de)
          }
          if (R) {
            let { destroy: de, cleanup: Ae } = K(Se, Je, m)
            ;(ne.push(de), T(Se) && U && ue.push(Ae))
          }
          ;(Se.on('error', te),
            T(Se) &&
              U &&
              ue.push(() => {
                Se.removeListener('error', te)
              }))
        }
        if (Ie === 0)
          if (typeof Se == 'function') {
            if (((Be = Se({ signal: ye })), !N(Be)))
              throw new E('Iterable, AsyncIterable or Stream', 'source', Be)
          } else N(Se) || j(Se) || k(Se) ? (Be = Se) : (Be = d.from(Se))
        else if (typeof Se == 'function') {
          if (k(Be)) {
            var ie
            Be = F((ie = Be) === null || ie === void 0 ? void 0 : ie.readable)
          } else Be = F(Be)
          if (((Be = Se(Be, { signal: ye })), Je)) {
            if (!N(Be, !0))
              throw new E('AsyncIterable', `transform[${Ie - 1}]`, Be)
          } else {
            var Ne
            ee || (ee = Rb())
            let te = new ee({ objectMode: !0 }),
              de = (Ne = Be) === null || Ne === void 0 ? void 0 : Ne.then
            if (typeof de == 'function')
              (ge++,
                de.call(
                  Be,
                  (se) => {
                    ;((G = se),
                      se != null && te.write(se),
                      R && te.end(),
                      h.nextTick(Re))
                  },
                  (se) => {
                    ;(te.destroy(se), h.nextTick(Re, se))
                  }
                ))
            else if (N(Be, !0)) (ge++, V(Be, te, Re, { end: R }))
            else if (H(Be) || k(Be)) {
              let se = Be.readable || Be
              ;(ge++, V(se, te, Re, { end: R }))
            } else throw new E('AsyncIterable or Promise', 'destination', Be)
            Be = te
            let { destroy: Ae, cleanup: qe } = K(Be, !1, !0)
            ;(ne.push(Ae), U && ue.push(qe))
          }
        } else if (x(Se)) {
          if (j(Be)) {
            ge += 2
            let te = he(Be, Se, Re, { end: R })
            T(Se) && U && ue.push(te)
          } else if (k(Be) || H(Be)) {
            let te = Be.readable || Be
            ;(ge++, V(te, Se, Re, { end: R }))
          } else if (N(Be)) (ge++, V(Be, Se, Re, { end: R }))
          else
            throw new S(
              'val',
              [
                'Readable',
                'Iterable',
                'AsyncIterable',
                'ReadableStream',
                'TransformStream',
              ],
              Be
            )
          Be = Se
        } else if (q(Se)) {
          if (j(Be)) (ge++, B(F(Be), Se, Re, { end: R }))
          else if (H(Be) || N(Be)) (ge++, B(Be, Se, Re, { end: R }))
          else if (k(Be)) (ge++, B(Be.readable, Se, Re, { end: R }))
          else
            throw new S(
              'val',
              [
                'Readable',
                'Iterable',
                'AsyncIterable',
                'ReadableStream',
                'TransformStream',
              ],
              Be
            )
          Be = Se
        } else Be = d.from(Se)
      }
      return (
        ((ye != null && ye.aborted) || (oe != null && oe.aborted)) &&
          h.nextTick(fe),
        Be
      )
    }
    function he(le, Me, re, { end: Y }) {
      let ye = !1
      if (
        (Me.on('close', () => {
          ye || re(new A())
        }),
        le.pipe(Me, { end: !1 }),
        Y)
      ) {
        let oe = function () {
          ;((ye = !0), Me.end())
        }
        X(le) ? h.nextTick(oe) : le.once('end', oe)
      } else re()
      return (
        u(le, { readable: !0, writable: !1 }, (oe) => {
          let ue = le._readableState
          oe &&
          oe.code === 'ERR_STREAM_PREMATURE_CLOSE' &&
          ue &&
          ue.ended &&
          !ue.errored &&
          !ue.errorEmitted
            ? le.once('end', re).once('error', re)
            : re(oe)
        }),
        u(Me, { readable: !1, writable: !0 }, re)
      )
    }
    p.exports = { pipelineImpl: Q, pipeline: D }
  }),
  Cb = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { pipeline: h } = Bh(),
      c = _n(),
      { destroyer: g } = da(),
      {
        isNodeStream: s,
        isReadable: o,
        isWritable: u,
        isWebStream: i,
        isTransformStream: a,
        isWritableStream: d,
        isReadableStream: v,
      } = wn(),
      {
        AbortError: S,
        codes: { ERR_INVALID_ARG_VALUE: E, ERR_MISSING_ARGS: b },
      } = rr(),
      w = ei()
    p.exports = function (...A) {
      if (A.length === 0) throw new b('streams')
      if (A.length === 1) return c.from(A[0])
      let M = [...A]
      if (
        (typeof A[0] == 'function' && (A[0] = c.from(A[0])),
        typeof A[A.length - 1] == 'function')
      ) {
        let I = A.length - 1
        A[I] = c.from(A[I])
      }
      for (let I = 0; I < A.length; ++I)
        if (!(!s(A[I]) && !i(A[I]))) {
          if (I < A.length - 1 && !(o(A[I]) || v(A[I]) || a(A[I])))
            throw new E(`streams[${I}]`, M[I], 'must be readable')
          if (I > 0 && !(u(A[I]) || d(A[I]) || a(A[I])))
            throw new E(`streams[${I}]`, M[I], 'must be writable')
        }
      let _, O, N, T, j
      function x(I) {
        let ee = T
        ;((T = null), ee ? ee(I) : I ? j.destroy(I) : !X && !H && j.destroy())
      }
      let k = A[0],
        q = h(A, x),
        H = !!(u(k) || d(k) || a(k)),
        X = !!(o(q) || v(q) || a(q))
      if (
        ((j = new c({
          writableObjectMode: !!(k != null && k.writableObjectMode),
          readableObjectMode: !!(q != null && q.readableObjectMode),
          writable: H,
          readable: X,
        })),
        H)
      ) {
        if (s(k))
          ((j._write = function (ee, J, $) {
            k.write(ee, J) ? $() : (_ = $)
          }),
            (j._final = function (ee) {
              ;(k.end(), (O = ee))
            }),
            k.on('drain', function () {
              if (_) {
                let ee = _
                ;((_ = null), ee())
              }
            }))
        else if (i(k)) {
          let ee = (a(k) ? k.writable : k).getWriter()
          ;((j._write = async function (J, $, K) {
            try {
              ;(await ee.ready, ee.write(J).catch(() => {}), K())
            } catch (P) {
              K(P)
            }
          }),
            (j._final = async function (J) {
              try {
                ;(await ee.ready, ee.close().catch(() => {}), (O = J))
              } catch ($) {
                J($)
              }
            }))
        }
        let I = a(q) ? q.readable : q
        w(I, () => {
          if (O) {
            let ee = O
            ;((O = null), ee())
          }
        })
      }
      if (X) {
        if (s(q))
          (q.on('readable', function () {
            if (N) {
              let I = N
              ;((N = null), I())
            }
          }),
            q.on('end', function () {
              j.push(null)
            }),
            (j._read = function () {
              for (;;) {
                let I = q.read()
                if (I === null) {
                  N = j._read
                  return
                }
                if (!j.push(I)) return
              }
            }))
        else if (i(q)) {
          let I = (a(q) ? q.readable : q).getReader()
          j._read = async function () {
            for (;;)
              try {
                let { value: ee, done: J } = await I.read()
                if (!j.push(ee)) return
                if (J) {
                  j.push(null)
                  return
                }
              } catch {
                return
              }
          }
        }
      }
      return (
        (j._destroy = function (I, ee) {
          ;(!I && T !== null && (I = new S()),
            (N = null),
            (_ = null),
            (O = null),
            T === null ? ee(I) : ((T = ee), s(q) && g(q, I)))
        }),
        j
      )
    }
  }),
  w1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = globalThis.AbortController || hl().AbortController,
      {
        codes: {
          ERR_INVALID_ARG_VALUE: c,
          ERR_INVALID_ARG_TYPE: g,
          ERR_MISSING_ARGS: s,
          ERR_OUT_OF_RANGE: o,
        },
        AbortError: u,
      } = rr(),
      { validateAbortSignal: i, validateInteger: a, validateObject: d } = dl(),
      v = Tt().Symbol('kWeak'),
      S = Tt().Symbol('kResistStopPropagation'),
      { finished: E } = ei(),
      b = Cb(),
      { addAbortSignalNoValidate: w } = as(),
      { isWritable: A, isNodeStream: M } = wn(),
      { deprecate: _ } = pr(),
      {
        ArrayPrototypePush: O,
        Boolean: N,
        MathFloor: T,
        Number: j,
        NumberIsNaN: x,
        Promise: k,
        PromiseReject: q,
        PromiseResolve: H,
        PromisePrototypeThen: X,
        Symbol: I,
      } = Tt(),
      ee = I('kEmpty'),
      J = I('kEof')
    function $(oe, ue) {
      if (
        (ue != null && d(ue, 'options'),
        ue?.signal != null && i(ue.signal, 'options.signal'),
        M(oe) && !A(oe))
      )
        throw new c('stream', oe, 'must be writable')
      let fe = b(this, oe)
      return (ue != null && ue.signal && w(ue.signal, fe), fe)
    }
    function K(oe, ue) {
      if (typeof oe != 'function')
        throw new g('fn', ['Function', 'AsyncFunction'], oe)
      ;(ue != null && d(ue, 'options'),
        ue?.signal != null && i(ue.signal, 'options.signal'))
      let fe = 1
      ue?.concurrency != null && (fe = T(ue.concurrency))
      let De = fe - 1
      return (
        ue?.highWaterMark != null && (De = T(ue.highWaterMark)),
        a(fe, 'options.concurrency', 1),
        a(De, 'options.highWaterMark', 0),
        (De += fe),
        async function* () {
          let we = pr().AbortSignalAny([ue?.signal].filter(N)),
            G = this,
            ne = [],
            ge = { signal: we },
            Re,
            Ce,
            Be = !1,
            ie = 0
          function Ne() {
            ;((Be = !0), Ie())
          }
          function Ie() {
            ;((ie -= 1), Se())
          }
          function Se() {
            Ce && !Be && ie < fe && ne.length < De && (Ce(), (Ce = null))
          }
          async function Je() {
            try {
              for await (let m of G) {
                if (Be) return
                if (we.aborted) throw new u()
                try {
                  if (((m = oe(m, ge)), m === ee)) continue
                  m = H(m)
                } catch (R) {
                  m = q(R)
                }
                ;((ie += 1),
                  X(m, Ie, Ne),
                  ne.push(m),
                  Re && (Re(), (Re = null)),
                  !Be &&
                    (ne.length >= De || ie >= fe) &&
                    (await new k((R) => {
                      Ce = R
                    })))
              }
              ne.push(J)
            } catch (m) {
              let R = q(m)
              ;(X(R, Ie, Ne), ne.push(R))
            } finally {
              ;((Be = !0), Re && (Re(), (Re = null)))
            }
          }
          Je()
          try {
            for (;;) {
              for (; ne.length > 0; ) {
                let m = await ne[0]
                if (m === J) return
                if (we.aborted) throw new u()
                ;(m !== ee && (yield m), ne.shift(), Se())
              }
              await new k((m) => {
                Re = m
              })
            }
          } finally {
            ;((Be = !0), Ce && (Ce(), (Ce = null)))
          }
        }.call(this)
      )
    }
    function P(oe = void 0) {
      return (
        oe != null && d(oe, 'options'),
        oe?.signal != null && i(oe.signal, 'options.signal'),
        async function* () {
          let ue = 0
          for await (let De of this) {
            var fe
            if (
              oe != null &&
              (fe = oe.signal) !== null &&
              fe !== void 0 &&
              fe.aborted
            )
              throw new u({ cause: oe.signal.reason })
            yield [ue++, De]
          }
        }.call(this)
      )
    }
    async function F(oe, ue = void 0) {
      for await (let fe of D.call(this, oe, ue)) return !0
      return !1
    }
    async function ce(oe, ue = void 0) {
      if (typeof oe != 'function')
        throw new g('fn', ['Function', 'AsyncFunction'], oe)
      return !(await F.call(this, async (...fe) => !(await oe(...fe)), ue))
    }
    async function V(oe, ue) {
      for await (let fe of D.call(this, oe, ue)) return fe
    }
    async function B(oe, ue) {
      if (typeof oe != 'function')
        throw new g('fn', ['Function', 'AsyncFunction'], oe)
      async function fe(De, we) {
        return (await oe(De, we), ee)
      }
      for await (let De of K.call(this, fe, ue));
    }
    function D(oe, ue) {
      if (typeof oe != 'function')
        throw new g('fn', ['Function', 'AsyncFunction'], oe)
      async function fe(De, we) {
        return (await oe(De, we)) ? De : ee
      }
      return K.call(this, fe, ue)
    }
    var Q = class extends s {
      constructor() {
        ;(super('reduce'),
          (this.message =
            'Reduce of an empty stream requires an initial value'))
      }
    }
    async function he(oe, ue, fe) {
      var De
      if (typeof oe != 'function')
        throw new g('reducer', ['Function', 'AsyncFunction'], oe)
      ;(fe != null && d(fe, 'options'),
        fe?.signal != null && i(fe.signal, 'options.signal'))
      let we = arguments.length > 1
      if (
        fe != null &&
        (De = fe.signal) !== null &&
        De !== void 0 &&
        De.aborted
      ) {
        let Ce = new u(void 0, { cause: fe.signal.reason })
        throw (this.once('error', () => {}), await E(this.destroy(Ce)), Ce)
      }
      let G = new h(),
        ne = G.signal
      if (fe != null && fe.signal) {
        let Ce = { once: !0, [v]: this, [S]: !0 }
        fe.signal.addEventListener('abort', () => G.abort(), Ce)
      }
      let ge = !1
      try {
        for await (let Ce of this) {
          var Re
          if (
            ((ge = !0),
            fe != null &&
              (Re = fe.signal) !== null &&
              Re !== void 0 &&
              Re.aborted)
          )
            throw new u()
          we ? (ue = await oe(ue, Ce, { signal: ne })) : ((ue = Ce), (we = !0))
        }
        if (!ge && !we) throw new Q()
      } finally {
        G.abort()
      }
      return ue
    }
    async function le(oe) {
      ;(oe != null && d(oe, 'options'),
        oe?.signal != null && i(oe.signal, 'options.signal'))
      let ue = []
      for await (let De of this) {
        var fe
        if (
          oe != null &&
          (fe = oe.signal) !== null &&
          fe !== void 0 &&
          fe.aborted
        )
          throw new u(void 0, { cause: oe.signal.reason })
        O(ue, De)
      }
      return ue
    }
    function Me(oe, ue) {
      let fe = K.call(this, oe, ue)
      return async function* () {
        for await (let De of fe) yield* De
      }.call(this)
    }
    function re(oe) {
      if (((oe = j(oe)), x(oe))) return 0
      if (oe < 0) throw new o('number', '>= 0', oe)
      return oe
    }
    function Y(oe, ue = void 0) {
      return (
        ue != null && d(ue, 'options'),
        ue?.signal != null && i(ue.signal, 'options.signal'),
        (oe = re(oe)),
        async function* () {
          var fe
          if (
            ue != null &&
            (fe = ue.signal) !== null &&
            fe !== void 0 &&
            fe.aborted
          )
            throw new u()
          for await (let we of this) {
            var De
            if (
              ue != null &&
              (De = ue.signal) !== null &&
              De !== void 0 &&
              De.aborted
            )
              throw new u()
            oe-- <= 0 && (yield we)
          }
        }.call(this)
      )
    }
    function ye(oe, ue = void 0) {
      return (
        ue != null && d(ue, 'options'),
        ue?.signal != null && i(ue.signal, 'options.signal'),
        (oe = re(oe)),
        async function* () {
          var fe
          if (
            ue != null &&
            (fe = ue.signal) !== null &&
            fe !== void 0 &&
            fe.aborted
          )
            throw new u()
          for await (let we of this) {
            var De
            if (
              ue != null &&
              (De = ue.signal) !== null &&
              De !== void 0 &&
              De.aborted
            )
              throw new u()
            if ((oe-- > 0 && (yield we), oe <= 0)) return
          }
        }.call(this)
      )
    }
    ;((p.exports.streamReturningOperators = {
      asIndexedPairs: _(
        P,
        'readable.asIndexedPairs will be removed in a future version.'
      ),
      drop: Y,
      filter: D,
      flatMap: Me,
      map: K,
      take: ye,
      compose: $,
    }),
      (p.exports.promiseReturningOperators = {
        every: ce,
        forEach: B,
        reduce: he,
        toArray: le,
        some: F,
        find: V,
      }))
  }),
  jb = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { ArrayPrototypePop: h, Promise: c } = Tt(),
      { isIterable: g, isNodeStream: s, isWebStream: o } = wn(),
      { pipelineImpl: u } = Bh(),
      { finished: i } = ei()
    Nb()
    function a(...d) {
      return new c((v, S) => {
        let E,
          b,
          w = d[d.length - 1]
        if (w && typeof w == 'object' && !s(w) && !g(w) && !o(w)) {
          let A = h(d)
          ;((E = A.signal), (b = A.end))
        }
        u(
          d,
          (A, M) => {
            A ? S(A) : v(M)
          },
          { signal: E, end: b }
        )
      })
    }
    p.exports = { finished: i, pipeline: a }
  }),
  Nb = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { Buffer: h } = (Pt(), gt(Ht)),
      { ObjectDefineProperty: c, ObjectKeys: g, ReflectApply: s } = Tt(),
      {
        promisify: { custom: o },
      } = pr(),
      { streamReturningOperators: u, promiseReturningOperators: i } = w1(),
      {
        codes: { ERR_ILLEGAL_CONSTRUCTOR: a },
      } = rr(),
      d = Cb(),
      { setDefaultHighWaterMark: v, getDefaultHighWaterMark: S } = ls(),
      { pipeline: E } = Bh(),
      { destroyer: b } = da(),
      w = ei(),
      A = jb(),
      M = wn(),
      _ = (p.exports = Uh().Stream)
    ;((_.isDestroyed = M.isDestroyed),
      (_.isDisturbed = M.isDisturbed),
      (_.isErrored = M.isErrored),
      (_.isReadable = M.isReadable),
      (_.isWritable = M.isWritable),
      (_.Readable = os()))
    for (let N of g(u)) {
      let T = function (...x) {
          if (new.target) throw a()
          return _.Readable.from(s(j, this, x))
        },
        j = u[N]
      ;(c(T, 'name', { __proto__: null, value: j.name }),
        c(T, 'length', { __proto__: null, value: j.length }),
        c(_.Readable.prototype, N, {
          __proto__: null,
          value: T,
          enumerable: !1,
          configurable: !0,
          writable: !0,
        }))
    }
    for (let N of g(i)) {
      let T = function (...x) {
          if (new.target) throw a()
          return s(j, this, x)
        },
        j = i[N]
      ;(c(T, 'name', { __proto__: null, value: j.name }),
        c(T, 'length', { __proto__: null, value: j.length }),
        c(_.Readable.prototype, N, {
          __proto__: null,
          value: T,
          enumerable: !1,
          configurable: !0,
          writable: !0,
        }))
    }
    ;((_.Writable = Dh()),
      (_.Duplex = _n()),
      (_.Transform = Mb()),
      (_.PassThrough = Rb()),
      (_.pipeline = E))
    var { addAbortSignal: O } = as()
    ;((_.addAbortSignal = O),
      (_.finished = w),
      (_.destroy = b),
      (_.compose = d),
      (_.setDefaultHighWaterMark = v),
      (_.getDefaultHighWaterMark = S),
      c(_, 'promises', {
        __proto__: null,
        configurable: !0,
        enumerable: !0,
        get() {
          return A
        },
      }),
      c(E, o, {
        __proto__: null,
        enumerable: !0,
        get() {
          return A.pipeline
        },
      }),
      c(w, o, {
        __proto__: null,
        enumerable: !0,
        get() {
          return A.finished
        },
      }),
      (_.Stream = _),
      (_._isUint8Array = function (N) {
        return N instanceof Uint8Array
      }),
      (_._uint8ArrayToBuffer = function (N) {
        return h.from(N.buffer, N.byteOffset, N.byteLength)
      }))
  }),
  Ai = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = Nb(),
      c = jb(),
      g = h.Readable.destroy
    ;((p.exports = h.Readable),
      (p.exports._uint8ArrayToBuffer = h._uint8ArrayToBuffer),
      (p.exports._isUint8Array = h._isUint8Array),
      (p.exports.isDisturbed = h.isDisturbed),
      (p.exports.isErrored = h.isErrored),
      (p.exports.isReadable = h.isReadable),
      (p.exports.Readable = h.Readable),
      (p.exports.Writable = h.Writable),
      (p.exports.Duplex = h.Duplex),
      (p.exports.Transform = h.Transform),
      (p.exports.PassThrough = h.PassThrough),
      (p.exports.addAbortSignal = h.addAbortSignal),
      (p.exports.finished = h.finished),
      (p.exports.destroy = h.destroy),
      (p.exports.destroy = g),
      (p.exports.pipeline = h.pipeline),
      (p.exports.compose = h.compose),
      Object.defineProperty(h, 'promises', {
        configurable: !0,
        enumerable: !0,
        get() {
          return c
        },
      }),
      (p.exports.Stream = h.Stream),
      (p.exports.default = p.exports))
  }),
  E1 = Ue((y, p) => {
    ;(Te(),
      xe(),
      Oe(),
      typeof Object.create == 'function'
        ? (p.exports = function (h, c) {
            c &&
              ((h.super_ = c),
              (h.prototype = Object.create(c.prototype, {
                constructor: {
                  value: h,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })))
          })
        : (p.exports = function (h, c) {
            if (c) {
              h.super_ = c
              var g = function () {}
              ;((g.prototype = c.prototype),
                (h.prototype = new g()),
                (h.prototype.constructor = h))
            }
          }))
  }),
  A1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { Buffer: h } = (Pt(), gt(Ht)),
      c = Symbol.for('BufferList')
    function g(s) {
      if (!(this instanceof g)) return new g(s)
      g._init.call(this, s)
    }
    ;((g._init = function (s) {
      ;(Object.defineProperty(this, c, { value: !0 }),
        (this._bufs = []),
        (this.length = 0),
        s && this.append(s))
    }),
      (g.prototype._new = function (s) {
        return new g(s)
      }),
      (g.prototype._offset = function (s) {
        if (s === 0) return [0, 0]
        let o = 0
        for (let u = 0; u < this._bufs.length; u++) {
          let i = o + this._bufs[u].length
          if (s < i || u === this._bufs.length - 1) return [u, s - o]
          o = i
        }
      }),
      (g.prototype._reverseOffset = function (s) {
        let o = s[0],
          u = s[1]
        for (let i = 0; i < o; i++) u += this._bufs[i].length
        return u
      }),
      (g.prototype.getBuffers = function () {
        return this._bufs
      }),
      (g.prototype.get = function (s) {
        if (s > this.length || s < 0) return
        let o = this._offset(s)
        return this._bufs[o[0]][o[1]]
      }),
      (g.prototype.slice = function (s, o) {
        return (
          typeof s == 'number' && s < 0 && (s += this.length),
          typeof o == 'number' && o < 0 && (o += this.length),
          this.copy(null, 0, s, o)
        )
      }),
      (g.prototype.copy = function (s, o, u, i) {
        if (
          ((typeof u != 'number' || u < 0) && (u = 0),
          (typeof i != 'number' || i > this.length) && (i = this.length),
          u >= this.length || i <= 0)
        )
          return s || h.alloc(0)
        let a = !!s,
          d = this._offset(u),
          v = i - u,
          S = v,
          E = (a && o) || 0,
          b = d[1]
        if (u === 0 && i === this.length) {
          if (!a)
            return this._bufs.length === 1
              ? this._bufs[0]
              : h.concat(this._bufs, this.length)
          for (let w = 0; w < this._bufs.length; w++)
            (this._bufs[w].copy(s, E), (E += this._bufs[w].length))
          return s
        }
        if (S <= this._bufs[d[0]].length - b)
          return a
            ? this._bufs[d[0]].copy(s, o, b, b + S)
            : this._bufs[d[0]].slice(b, b + S)
        a || (s = h.allocUnsafe(v))
        for (let w = d[0]; w < this._bufs.length; w++) {
          let A = this._bufs[w].length - b
          if (S > A) (this._bufs[w].copy(s, E, b), (E += A))
          else {
            ;(this._bufs[w].copy(s, E, b, b + S), (E += A))
            break
          }
          ;((S -= A), b && (b = 0))
        }
        return s.length > E ? s.slice(0, E) : s
      }),
      (g.prototype.shallowSlice = function (s, o) {
        if (
          ((s = s || 0),
          (o = typeof o != 'number' ? this.length : o),
          s < 0 && (s += this.length),
          o < 0 && (o += this.length),
          s === o)
        )
          return this._new()
        let u = this._offset(s),
          i = this._offset(o),
          a = this._bufs.slice(u[0], i[0] + 1)
        return (
          i[1] === 0
            ? a.pop()
            : (a[a.length - 1] = a[a.length - 1].slice(0, i[1])),
          u[1] !== 0 && (a[0] = a[0].slice(u[1])),
          this._new(a)
        )
      }),
      (g.prototype.toString = function (s, o, u) {
        return this.slice(o, u).toString(s)
      }),
      (g.prototype.consume = function (s) {
        if (((s = Math.trunc(s)), Number.isNaN(s) || s <= 0)) return this
        for (; this._bufs.length; )
          if (s >= this._bufs[0].length)
            ((s -= this._bufs[0].length),
              (this.length -= this._bufs[0].length),
              this._bufs.shift())
          else {
            ;((this._bufs[0] = this._bufs[0].slice(s)), (this.length -= s))
            break
          }
        return this
      }),
      (g.prototype.duplicate = function () {
        let s = this._new()
        for (let o = 0; o < this._bufs.length; o++) s.append(this._bufs[o])
        return s
      }),
      (g.prototype.append = function (s) {
        return this._attach(s, g.prototype._appendBuffer)
      }),
      (g.prototype.prepend = function (s) {
        return this._attach(s, g.prototype._prependBuffer, !0)
      }),
      (g.prototype._attach = function (s, o, u) {
        if (s == null) return this
        if (s.buffer) o.call(this, h.from(s.buffer, s.byteOffset, s.byteLength))
        else if (Array.isArray(s)) {
          let [i, a] = u ? [s.length - 1, -1] : [0, 1]
          for (let d = i; d >= 0 && d < s.length; d += a)
            this._attach(s[d], o, u)
        } else if (this._isBufferList(s)) {
          let [i, a] = u ? [s._bufs.length - 1, -1] : [0, 1]
          for (let d = i; d >= 0 && d < s._bufs.length; d += a)
            this._attach(s._bufs[d], o, u)
        } else
          (typeof s == 'number' && (s = s.toString()), o.call(this, h.from(s)))
        return this
      }),
      (g.prototype._appendBuffer = function (s) {
        ;(this._bufs.push(s), (this.length += s.length))
      }),
      (g.prototype._prependBuffer = function (s) {
        ;(this._bufs.unshift(s), (this.length += s.length))
      }),
      (g.prototype.indexOf = function (s, o, u) {
        if (
          (u === void 0 && typeof o == 'string' && ((u = o), (o = void 0)),
          typeof s == 'function' || Array.isArray(s))
        )
          throw new TypeError(
            'The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.'
          )
        if (
          (typeof s == 'number'
            ? (s = h.from([s]))
            : typeof s == 'string'
              ? (s = h.from(s, u))
              : this._isBufferList(s)
                ? (s = s.slice())
                : Array.isArray(s.buffer)
                  ? (s = h.from(s.buffer, s.byteOffset, s.byteLength))
                  : h.isBuffer(s) || (s = h.from(s)),
          (o = Number(o || 0)),
          isNaN(o) && (o = 0),
          o < 0 && (o = this.length + o),
          o < 0 && (o = 0),
          s.length === 0)
        )
          return o > this.length ? this.length : o
        let i = this._offset(o),
          a = i[0],
          d = i[1]
        for (; a < this._bufs.length; a++) {
          let v = this._bufs[a]
          for (; d < v.length; )
            if (v.length - d >= s.length) {
              let S = v.indexOf(s, d)
              if (S !== -1) return this._reverseOffset([a, S])
              d = v.length - s.length + 1
            } else {
              let S = this._reverseOffset([a, d])
              if (this._match(S, s)) return S
              d++
            }
          d = 0
        }
        return -1
      }),
      (g.prototype._match = function (s, o) {
        if (this.length - s < o.length) return !1
        for (let u = 0; u < o.length; u++)
          if (this.get(s + u) !== o[u]) return !1
        return !0
      }),
      (function () {
        let s = {
          readDoubleBE: 8,
          readDoubleLE: 8,
          readFloatBE: 4,
          readFloatLE: 4,
          readBigInt64BE: 8,
          readBigInt64LE: 8,
          readBigUInt64BE: 8,
          readBigUInt64LE: 8,
          readInt32BE: 4,
          readInt32LE: 4,
          readUInt32BE: 4,
          readUInt32LE: 4,
          readInt16BE: 2,
          readInt16LE: 2,
          readUInt16BE: 2,
          readUInt16LE: 2,
          readInt8: 1,
          readUInt8: 1,
          readIntBE: null,
          readIntLE: null,
          readUIntBE: null,
          readUIntLE: null,
        }
        for (let o in s)
          (function (u) {
            s[u] === null
              ? (g.prototype[u] = function (i, a) {
                  return this.slice(i, i + a)[u](0, a)
                })
              : (g.prototype[u] = function (i = 0) {
                  return this.slice(i, i + s[u])[u](0)
                })
          })(o)
      })(),
      (g.prototype._isBufferList = function (s) {
        return s instanceof g || g.isBufferList(s)
      }),
      (g.isBufferList = function (s) {
        return s != null && s[c]
      }),
      (p.exports = g))
  }),
  T1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = Ai().Duplex,
      c = E1(),
      g = A1()
    function s(o) {
      if (!(this instanceof s)) return new s(o)
      if (typeof o == 'function') {
        this._callback = o
        let u = function (i) {
          this._callback && (this._callback(i), (this._callback = null))
        }.bind(this)
        ;(this.on('pipe', function (i) {
          i.on('error', u)
        }),
          this.on('unpipe', function (i) {
            i.removeListener('error', u)
          }),
          (o = null))
      }
      ;(g._init.call(this, o), h.call(this))
    }
    ;(c(s, h),
      Object.assign(s.prototype, g.prototype),
      (s.prototype._new = function (o) {
        return new s(o)
      }),
      (s.prototype._write = function (o, u, i) {
        ;(this._appendBuffer(o), typeof i == 'function' && i())
      }),
      (s.prototype._read = function (o) {
        if (!this.length) return this.push(null)
        ;((o = Math.min(o, this.length)),
          this.push(this.slice(0, o)),
          this.consume(o))
      }),
      (s.prototype.end = function (o) {
        ;(h.prototype.end.call(this, o),
          this._callback &&
            (this._callback(null, this.slice()), (this._callback = null)))
      }),
      (s.prototype._destroy = function (o, u) {
        ;((this._bufs.length = 0), (this.length = 0), u(o))
      }),
      (s.prototype._isBufferList = function (o) {
        return o instanceof s || o instanceof g || s.isBufferList(o)
      }),
      (s.isBufferList = g.isBufferList),
      (p.exports = s),
      (p.exports.BufferListStream = s),
      (p.exports.BufferList = g))
  }),
  O1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = class {
      constructor() {
        ;((this.cmd = null),
          (this.retain = !1),
          (this.qos = 0),
          (this.dup = !1),
          (this.length = -1),
          (this.topic = null),
          (this.payload = null))
      }
    }
    p.exports = h
  }),
  Ub = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = p.exports,
      { Buffer: c } = (Pt(), gt(Ht))
    ;((h.types = {
      0: 'reserved',
      1: 'connect',
      2: 'connack',
      3: 'publish',
      4: 'puback',
      5: 'pubrec',
      6: 'pubrel',
      7: 'pubcomp',
      8: 'subscribe',
      9: 'suback',
      10: 'unsubscribe',
      11: 'unsuback',
      12: 'pingreq',
      13: 'pingresp',
      14: 'disconnect',
      15: 'auth',
    }),
      (h.requiredHeaderFlags = {
        1: 0,
        2: 0,
        4: 0,
        5: 0,
        6: 2,
        7: 0,
        8: 2,
        9: 0,
        10: 2,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
      }),
      (h.requiredHeaderFlagsErrors = {}))
    for (let s in h.requiredHeaderFlags) {
      let o = h.requiredHeaderFlags[s]
      h.requiredHeaderFlagsErrors[s] =
        'Invalid header flag bits, must be 0x' +
        o.toString(16) +
        ' for ' +
        h.types[s] +
        ' packet'
    }
    h.codes = {}
    for (let s in h.types) {
      let o = h.types[s]
      h.codes[o] = s
    }
    ;((h.CMD_SHIFT = 4),
      (h.CMD_MASK = 240),
      (h.DUP_MASK = 8),
      (h.QOS_MASK = 3),
      (h.QOS_SHIFT = 1),
      (h.RETAIN_MASK = 1),
      (h.VARBYTEINT_MASK = 127),
      (h.VARBYTEINT_FIN_MASK = 128),
      (h.VARBYTEINT_MAX = 268435455),
      (h.SESSIONPRESENT_MASK = 1),
      (h.SESSIONPRESENT_HEADER = c.from([h.SESSIONPRESENT_MASK])),
      (h.CONNACK_HEADER = c.from([h.codes.connack << h.CMD_SHIFT])),
      (h.USERNAME_MASK = 128),
      (h.PASSWORD_MASK = 64),
      (h.WILL_RETAIN_MASK = 32),
      (h.WILL_QOS_MASK = 24),
      (h.WILL_QOS_SHIFT = 3),
      (h.WILL_FLAG_MASK = 4),
      (h.CLEAN_SESSION_MASK = 2),
      (h.CONNECT_HEADER = c.from([h.codes.connect << h.CMD_SHIFT])),
      (h.properties = {
        sessionExpiryInterval: 17,
        willDelayInterval: 24,
        receiveMaximum: 33,
        maximumPacketSize: 39,
        topicAliasMaximum: 34,
        requestResponseInformation: 25,
        requestProblemInformation: 23,
        userProperties: 38,
        authenticationMethod: 21,
        authenticationData: 22,
        payloadFormatIndicator: 1,
        messageExpiryInterval: 2,
        contentType: 3,
        responseTopic: 8,
        correlationData: 9,
        maximumQoS: 36,
        retainAvailable: 37,
        assignedClientIdentifier: 18,
        reasonString: 31,
        wildcardSubscriptionAvailable: 40,
        subscriptionIdentifiersAvailable: 41,
        sharedSubscriptionAvailable: 42,
        serverKeepAlive: 19,
        responseInformation: 26,
        serverReference: 28,
        topicAlias: 35,
        subscriptionIdentifier: 11,
      }),
      (h.propertiesCodes = {}))
    for (let s in h.properties) {
      let o = h.properties[s]
      h.propertiesCodes[o] = s
    }
    h.propertiesTypes = {
      sessionExpiryInterval: 'int32',
      willDelayInterval: 'int32',
      receiveMaximum: 'int16',
      maximumPacketSize: 'int32',
      topicAliasMaximum: 'int16',
      requestResponseInformation: 'byte',
      requestProblemInformation: 'byte',
      userProperties: 'pair',
      authenticationMethod: 'string',
      authenticationData: 'binary',
      payloadFormatIndicator: 'byte',
      messageExpiryInterval: 'int32',
      contentType: 'string',
      responseTopic: 'string',
      correlationData: 'binary',
      maximumQoS: 'int8',
      retainAvailable: 'byte',
      assignedClientIdentifier: 'string',
      reasonString: 'string',
      wildcardSubscriptionAvailable: 'byte',
      subscriptionIdentifiersAvailable: 'byte',
      sharedSubscriptionAvailable: 'byte',
      serverKeepAlive: 'int16',
      responseInformation: 'string',
      serverReference: 'string',
      topicAlias: 'int16',
      subscriptionIdentifier: 'var',
    }
    function g(s) {
      return [0, 1, 2].map((o) =>
        [0, 1].map((u) =>
          [0, 1].map((i) => {
            let a = c.alloc(1)
            return (
              a.writeUInt8(
                (h.codes[s] << h.CMD_SHIFT) |
                  (u ? h.DUP_MASK : 0) |
                  (o << h.QOS_SHIFT) |
                  i,
                0,
                !0
              ),
              a
            )
          })
        )
      )
    }
    ;((h.PUBLISH_HEADER = g('publish')),
      (h.SUBSCRIBE_HEADER = g('subscribe')),
      (h.SUBSCRIBE_OPTIONS_QOS_MASK = 3),
      (h.SUBSCRIBE_OPTIONS_NL_MASK = 1),
      (h.SUBSCRIBE_OPTIONS_NL_SHIFT = 2),
      (h.SUBSCRIBE_OPTIONS_RAP_MASK = 1),
      (h.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3),
      (h.SUBSCRIBE_OPTIONS_RH_MASK = 3),
      (h.SUBSCRIBE_OPTIONS_RH_SHIFT = 4),
      (h.SUBSCRIBE_OPTIONS_RH = [0, 16, 32]),
      (h.SUBSCRIBE_OPTIONS_NL = 4),
      (h.SUBSCRIBE_OPTIONS_RAP = 8),
      (h.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2]),
      (h.UNSUBSCRIBE_HEADER = g('unsubscribe')),
      (h.ACKS = {
        unsuback: g('unsuback'),
        puback: g('puback'),
        pubcomp: g('pubcomp'),
        pubrel: g('pubrel'),
        pubrec: g('pubrec'),
      }),
      (h.SUBACK_HEADER = c.from([h.codes.suback << h.CMD_SHIFT])),
      (h.VERSION3 = c.from([3])),
      (h.VERSION4 = c.from([4])),
      (h.VERSION5 = c.from([5])),
      (h.VERSION131 = c.from([131])),
      (h.VERSION132 = c.from([132])),
      (h.QOS = [0, 1, 2].map((s) => c.from([s]))),
      (h.EMPTY = {
        pingreq: c.from([h.codes.pingreq << 4, 0]),
        pingresp: c.from([h.codes.pingresp << 4, 0]),
        disconnect: c.from([h.codes.disconnect << 4, 0]),
      }),
      (h.MQTT5_PUBACK_PUBREC_CODES = {
        0: 'Success',
        16: 'No matching subscribers',
        128: 'Unspecified error',
        131: 'Implementation specific error',
        135: 'Not authorized',
        144: 'Topic Name invalid',
        145: 'Packet identifier in use',
        151: 'Quota exceeded',
        153: 'Payload format invalid',
      }),
      (h.MQTT5_PUBREL_PUBCOMP_CODES = {
        0: 'Success',
        146: 'Packet Identifier not found',
      }),
      (h.MQTT5_SUBACK_CODES = {
        0: 'Granted QoS 0',
        1: 'Granted QoS 1',
        2: 'Granted QoS 2',
        128: 'Unspecified error',
        131: 'Implementation specific error',
        135: 'Not authorized',
        143: 'Topic Filter invalid',
        145: 'Packet Identifier in use',
        151: 'Quota exceeded',
        158: 'Shared Subscriptions not supported',
        161: 'Subscription Identifiers not supported',
        162: 'Wildcard Subscriptions not supported',
      }),
      (h.MQTT5_UNSUBACK_CODES = {
        0: 'Success',
        17: 'No subscription existed',
        128: 'Unspecified error',
        131: 'Implementation specific error',
        135: 'Not authorized',
        143: 'Topic Filter invalid',
        145: 'Packet Identifier in use',
      }),
      (h.MQTT5_DISCONNECT_CODES = {
        0: 'Normal disconnection',
        4: 'Disconnect with Will Message',
        128: 'Unspecified error',
        129: 'Malformed Packet',
        130: 'Protocol Error',
        131: 'Implementation specific error',
        135: 'Not authorized',
        137: 'Server busy',
        139: 'Server shutting down',
        141: 'Keep Alive timeout',
        142: 'Session taken over',
        143: 'Topic Filter invalid',
        144: 'Topic Name invalid',
        147: 'Receive Maximum exceeded',
        148: 'Topic Alias invalid',
        149: 'Packet too large',
        150: 'Message rate too high',
        151: 'Quota exceeded',
        152: 'Administrative action',
        153: 'Payload format invalid',
        154: 'Retain not supported',
        155: 'QoS not supported',
        156: 'Use another server',
        157: 'Server moved',
        158: 'Shared Subscriptions not supported',
        159: 'Connection rate exceeded',
        160: 'Maximum connect time',
        161: 'Subscription Identifiers not supported',
        162: 'Wildcard Subscriptions not supported',
      }),
      (h.MQTT5_AUTH_CODES = {
        0: 'Success',
        24: 'Continue authentication',
        25: 'Re-authenticate',
      }))
  }),
  x1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = 1e3,
      c = h * 60,
      g = c * 60,
      s = g * 24,
      o = s * 7,
      u = s * 365.25
    p.exports = function (S, E) {
      E = E || {}
      var b = typeof S
      if (b === 'string' && S.length > 0) return i(S)
      if (b === 'number' && isFinite(S)) return E.long ? d(S) : a(S)
      throw new Error(
        'val is not a non-empty string or a valid number. val=' +
          JSON.stringify(S)
      )
    }
    function i(S) {
      if (((S = String(S)), !(S.length > 100))) {
        var E =
          /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            S
          )
        if (E) {
          var b = parseFloat(E[1]),
            w = (E[2] || 'ms').toLowerCase()
          switch (w) {
            case 'years':
            case 'year':
            case 'yrs':
            case 'yr':
            case 'y':
              return b * u
            case 'weeks':
            case 'week':
            case 'w':
              return b * o
            case 'days':
            case 'day':
            case 'd':
              return b * s
            case 'hours':
            case 'hour':
            case 'hrs':
            case 'hr':
            case 'h':
              return b * g
            case 'minutes':
            case 'minute':
            case 'mins':
            case 'min':
            case 'm':
              return b * c
            case 'seconds':
            case 'second':
            case 'secs':
            case 'sec':
            case 's':
              return b * h
            case 'milliseconds':
            case 'millisecond':
            case 'msecs':
            case 'msec':
            case 'ms':
              return b
            default:
              return
          }
        }
      }
    }
    function a(S) {
      var E = Math.abs(S)
      return E >= s
        ? Math.round(S / s) + 'd'
        : E >= g
          ? Math.round(S / g) + 'h'
          : E >= c
            ? Math.round(S / c) + 'm'
            : E >= h
              ? Math.round(S / h) + 's'
              : S + 'ms'
    }
    function d(S) {
      var E = Math.abs(S)
      return E >= s
        ? v(S, E, s, 'day')
        : E >= g
          ? v(S, E, g, 'hour')
          : E >= c
            ? v(S, E, c, 'minute')
            : E >= h
              ? v(S, E, h, 'second')
              : S + ' ms'
    }
    function v(S, E, b, w) {
      var A = E >= b * 1.5
      return Math.round(S / b) + ' ' + w + (A ? 's' : '')
    }
  }),
  M1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    function h(c) {
      ;((s.debug = s),
        (s.default = s),
        (s.coerce = v),
        (s.disable = a),
        (s.enable = u),
        (s.enabled = d),
        (s.humanize = x1()),
        (s.destroy = S),
        Object.keys(c).forEach((E) => {
          s[E] = c[E]
        }),
        (s.names = []),
        (s.skips = []),
        (s.formatters = {}))
      function g(E) {
        let b = 0
        for (let w = 0; w < E.length; w++)
          ((b = (b << 5) - b + E.charCodeAt(w)), (b |= 0))
        return s.colors[Math.abs(b) % s.colors.length]
      }
      s.selectColor = g
      function s(E) {
        let b,
          w = null,
          A,
          M
        function _(...O) {
          if (!_.enabled) return
          let N = _,
            T = Number(new Date()),
            j = T - (b || T)
          ;((N.diff = j),
            (N.prev = b),
            (N.curr = T),
            (b = T),
            (O[0] = s.coerce(O[0])),
            typeof O[0] != 'string' && O.unshift('%O'))
          let x = 0
          ;((O[0] = O[0].replace(/%([a-zA-Z%])/g, (k, q) => {
            if (k === '%%') return '%'
            x++
            let H = s.formatters[q]
            if (typeof H == 'function') {
              let X = O[x]
              ;((k = H.call(N, X)), O.splice(x, 1), x--)
            }
            return k
          })),
            s.formatArgs.call(N, O),
            (N.log || s.log).apply(N, O))
        }
        return (
          (_.namespace = E),
          (_.useColors = s.useColors()),
          (_.color = s.selectColor(E)),
          (_.extend = o),
          (_.destroy = s.destroy),
          Object.defineProperty(_, 'enabled', {
            enumerable: !0,
            configurable: !1,
            get: () =>
              w !== null
                ? w
                : (A !== s.namespaces &&
                    ((A = s.namespaces), (M = s.enabled(E))),
                  M),
            set: (O) => {
              w = O
            },
          }),
          typeof s.init == 'function' && s.init(_),
          _
        )
      }
      function o(E, b) {
        let w = s(this.namespace + (typeof b > 'u' ? ':' : b) + E)
        return ((w.log = this.log), w)
      }
      function u(E) {
        ;(s.save(E), (s.namespaces = E), (s.names = []), (s.skips = []))
        let b = (typeof E == 'string' ? E : '')
          .trim()
          .replace(/\s+/g, ',')
          .split(',')
          .filter(Boolean)
        for (let w of b)
          w[0] === '-' ? s.skips.push(w.slice(1)) : s.names.push(w)
      }
      function i(E, b) {
        let w = 0,
          A = 0,
          M = -1,
          _ = 0
        for (; w < E.length; )
          if (A < b.length && (b[A] === E[w] || b[A] === '*'))
            b[A] === '*' ? ((M = A), (_ = w), A++) : (w++, A++)
          else if (M !== -1) ((A = M + 1), _++, (w = _))
          else return !1
        for (; A < b.length && b[A] === '*'; ) A++
        return A === b.length
      }
      function a() {
        let E = [...s.names, ...s.skips.map((b) => '-' + b)].join(',')
        return (s.enable(''), E)
      }
      function d(E) {
        for (let b of s.skips) if (i(E, b)) return !1
        for (let b of s.names) if (i(E, b)) return !0
        return !1
      }
      function v(E) {
        return E instanceof Error ? E.stack || E.message : E
      }
      function S() {
        console.warn(
          'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
        )
      }
      return (s.enable(s.load()), s)
    }
    p.exports = h
  }),
  Sn = Ue((y, p) => {
    ;(Te(),
      xe(),
      Oe(),
      (y.formatArgs = c),
      (y.save = g),
      (y.load = s),
      (y.useColors = h),
      (y.storage = o()),
      (y.destroy = (() => {
        let i = !1
        return () => {
          i ||
            ((i = !0),
            console.warn(
              'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
            ))
        }
      })()),
      (y.colors = [
        '#0000CC',
        '#0000FF',
        '#0033CC',
        '#0033FF',
        '#0066CC',
        '#0066FF',
        '#0099CC',
        '#0099FF',
        '#00CC00',
        '#00CC33',
        '#00CC66',
        '#00CC99',
        '#00CCCC',
        '#00CCFF',
        '#3300CC',
        '#3300FF',
        '#3333CC',
        '#3333FF',
        '#3366CC',
        '#3366FF',
        '#3399CC',
        '#3399FF',
        '#33CC00',
        '#33CC33',
        '#33CC66',
        '#33CC99',
        '#33CCCC',
        '#33CCFF',
        '#6600CC',
        '#6600FF',
        '#6633CC',
        '#6633FF',
        '#66CC00',
        '#66CC33',
        '#9900CC',
        '#9900FF',
        '#9933CC',
        '#9933FF',
        '#99CC00',
        '#99CC33',
        '#CC0000',
        '#CC0033',
        '#CC0066',
        '#CC0099',
        '#CC00CC',
        '#CC00FF',
        '#CC3300',
        '#CC3333',
        '#CC3366',
        '#CC3399',
        '#CC33CC',
        '#CC33FF',
        '#CC6600',
        '#CC6633',
        '#CC9900',
        '#CC9933',
        '#CCCC00',
        '#CCCC33',
        '#FF0000',
        '#FF0033',
        '#FF0066',
        '#FF0099',
        '#FF00CC',
        '#FF00FF',
        '#FF3300',
        '#FF3333',
        '#FF3366',
        '#FF3399',
        '#FF33CC',
        '#FF33FF',
        '#FF6600',
        '#FF6633',
        '#FF9900',
        '#FF9933',
        '#FFCC00',
        '#FFCC33',
      ]))
    function h() {
      if (
        typeof window < 'u' &&
        window.process &&
        (window.process.type === 'renderer' || window.process.__nwjs)
      )
        return !0
      if (
        typeof navigator < 'u' &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      )
        return !1
      let i
      return (
        (typeof document < 'u' &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window < 'u' &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator < 'u' &&
          navigator.userAgent &&
          (i = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
          parseInt(i[1], 10) >= 31) ||
        (typeof navigator < 'u' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
      )
    }
    function c(i) {
      if (
        ((i[0] =
          (this.useColors ? '%c' : '') +
          this.namespace +
          (this.useColors ? ' %c' : ' ') +
          i[0] +
          (this.useColors ? '%c ' : ' ') +
          '+' +
          p.exports.humanize(this.diff)),
        !this.useColors)
      )
        return
      let a = 'color: ' + this.color
      i.splice(1, 0, a, 'color: inherit')
      let d = 0,
        v = 0
      ;(i[0].replace(/%[a-zA-Z%]/g, (S) => {
        S !== '%%' && (d++, S === '%c' && (v = d))
      }),
        i.splice(v, 0, a))
    }
    y.log = console.debug || console.log || (() => {})
    function g(i) {
      try {
        i ? y.storage.setItem('debug', i) : y.storage.removeItem('debug')
      } catch {}
    }
    function s() {
      let i
      try {
        i = y.storage.getItem('debug') || y.storage.getItem('DEBUG')
      } catch {}
      return (!i && typeof bt < 'u' && 'env' in bt && (i = bt.env.DEBUG), i)
    }
    function o() {
      try {
        return localStorage
      } catch {}
    }
    p.exports = M1()(y)
    var { formatters: u } = p.exports
    u.j = function (i) {
      try {
        return JSON.stringify(i)
      } catch (a) {
        return '[UnexpectedJSONParseError]: ' + a.message
      }
    }
  }),
  R1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = T1(),
      { EventEmitter: c } = (wi(), gt($n)),
      g = O1(),
      s = Ub(),
      o = Sn()('mqtt-packet:parser'),
      u = class zf extends c {
        constructor() {
          ;(super(), (this.parser = this.constructor.parser))
        }
        static parser(a) {
          return this instanceof zf
            ? ((this.settings = a || {}),
              (this._states = [
                '_parseHeader',
                '_parseLength',
                '_parsePayload',
                '_newPacket',
              ]),
              this._resetState(),
              this)
            : new zf().parser(a)
        }
        _resetState() {
          ;(o('_resetState: resetting packet, error, _list, and _stateCounter'),
            (this.packet = new g()),
            (this.error = null),
            (this._list = h()),
            (this._stateCounter = 0))
        }
        parse(a) {
          for (
            this.error && this._resetState(),
              this._list.append(a),
              o('parse: current state: %s', this._states[this._stateCounter]);
            (this.packet.length !== -1 || this._list.length > 0) &&
            this[this._states[this._stateCounter]]() &&
            !this.error;
          )
            (this._stateCounter++,
              o(
                'parse: state complete. _stateCounter is now: %d',
                this._stateCounter
              ),
              o(
                'parse: packet.length: %d, buffer list length: %d',
                this.packet.length,
                this._list.length
              ),
              this._stateCounter >= this._states.length &&
                (this._stateCounter = 0))
          return (
            o(
              'parse: exited while loop. packet: %d, buffer list length: %d',
              this.packet.length,
              this._list.length
            ),
            this._list.length
          )
        }
        _parseHeader() {
          let a = this._list.readUInt8(0),
            d = a >> s.CMD_SHIFT
          this.packet.cmd = s.types[d]
          let v = a & 15,
            S = s.requiredHeaderFlags[d]
          return S != null && v !== S
            ? this._emitError(new Error(s.requiredHeaderFlagsErrors[d]))
            : ((this.packet.retain = (a & s.RETAIN_MASK) !== 0),
              (this.packet.qos = (a >> s.QOS_SHIFT) & s.QOS_MASK),
              this.packet.qos > 2
                ? this._emitError(
                    new Error('Packet must not have both QoS bits set to 1')
                  )
                : ((this.packet.dup = (a & s.DUP_MASK) !== 0),
                  o('_parseHeader: packet: %o', this.packet),
                  this._list.consume(1),
                  !0))
        }
        _parseLength() {
          let a = this._parseVarByteNum(!0)
          return (
            a && ((this.packet.length = a.value), this._list.consume(a.bytes)),
            o('_parseLength %d', a.value),
            !!a
          )
        }
        _parsePayload() {
          o('_parsePayload: payload %O', this._list)
          let a = !1
          if (
            this.packet.length === 0 ||
            this._list.length >= this.packet.length
          ) {
            switch (((this._pos = 0), this.packet.cmd)) {
              case 'connect':
                this._parseConnect()
                break
              case 'connack':
                this._parseConnack()
                break
              case 'publish':
                this._parsePublish()
                break
              case 'puback':
              case 'pubrec':
              case 'pubrel':
              case 'pubcomp':
                this._parseConfirmation()
                break
              case 'subscribe':
                this._parseSubscribe()
                break
              case 'suback':
                this._parseSuback()
                break
              case 'unsubscribe':
                this._parseUnsubscribe()
                break
              case 'unsuback':
                this._parseUnsuback()
                break
              case 'pingreq':
              case 'pingresp':
                break
              case 'disconnect':
                this._parseDisconnect()
                break
              case 'auth':
                this._parseAuth()
                break
              default:
                this._emitError(new Error('Not supported'))
            }
            a = !0
          }
          return (o('_parsePayload complete result: %s', a), a)
        }
        _parseConnect() {
          o('_parseConnect')
          let a,
            d,
            v,
            S,
            E = {},
            b = this.packet,
            w = this._parseString()
          if (w === null)
            return this._emitError(new Error('Cannot parse protocolId'))
          if (w !== 'MQTT' && w !== 'MQIsdp')
            return this._emitError(new Error('Invalid protocolId'))
          if (((b.protocolId = w), this._pos >= this._list.length))
            return this._emitError(new Error('Packet too short'))
          if (
            ((b.protocolVersion = this._list.readUInt8(this._pos)),
            b.protocolVersion >= 128 &&
              ((b.bridgeMode = !0),
              (b.protocolVersion = b.protocolVersion - 128)),
            b.protocolVersion !== 3 &&
              b.protocolVersion !== 4 &&
              b.protocolVersion !== 5)
          )
            return this._emitError(new Error('Invalid protocol version'))
          if ((this._pos++, this._pos >= this._list.length))
            return this._emitError(new Error('Packet too short'))
          if (this._list.readUInt8(this._pos) & 1)
            return this._emitError(
              new Error('Connect flag bit 0 must be 0, but got 1')
            )
          ;((E.username = this._list.readUInt8(this._pos) & s.USERNAME_MASK),
            (E.password = this._list.readUInt8(this._pos) & s.PASSWORD_MASK),
            (E.will = this._list.readUInt8(this._pos) & s.WILL_FLAG_MASK))
          let A = !!(this._list.readUInt8(this._pos) & s.WILL_RETAIN_MASK),
            M =
              (this._list.readUInt8(this._pos) & s.WILL_QOS_MASK) >>
              s.WILL_QOS_SHIFT
          if (E.will) ((b.will = {}), (b.will.retain = A), (b.will.qos = M))
          else {
            if (A)
              return this._emitError(
                new Error(
                  'Will Retain Flag must be set to zero when Will Flag is set to 0'
                )
              )
            if (M)
              return this._emitError(
                new Error(
                  'Will QoS must be set to zero when Will Flag is set to 0'
                )
              )
          }
          if (
            ((b.clean =
              (this._list.readUInt8(this._pos) & s.CLEAN_SESSION_MASK) !== 0),
            this._pos++,
            (b.keepalive = this._parseNum()),
            b.keepalive === -1)
          )
            return this._emitError(new Error('Packet too short'))
          if (b.protocolVersion === 5) {
            let O = this._parseProperties()
            Object.getOwnPropertyNames(O).length && (b.properties = O)
          }
          let _ = this._parseString()
          if (_ === null) return this._emitError(new Error('Packet too short'))
          if (
            ((b.clientId = _),
            o('_parseConnect: packet.clientId: %s', b.clientId),
            E.will)
          ) {
            if (b.protocolVersion === 5) {
              let O = this._parseProperties()
              Object.getOwnPropertyNames(O).length && (b.will.properties = O)
            }
            if (((a = this._parseString()), a === null))
              return this._emitError(new Error('Cannot parse will topic'))
            if (
              ((b.will.topic = a),
              o('_parseConnect: packet.will.topic: %s', b.will.topic),
              (d = this._parseBuffer()),
              d === null)
            )
              return this._emitError(new Error('Cannot parse will payload'))
            ;((b.will.payload = d),
              o('_parseConnect: packet.will.paylaod: %s', b.will.payload))
          }
          if (E.username) {
            if (((S = this._parseString()), S === null))
              return this._emitError(new Error('Cannot parse username'))
            ;((b.username = S),
              o('_parseConnect: packet.username: %s', b.username))
          }
          if (E.password) {
            if (((v = this._parseBuffer()), v === null))
              return this._emitError(new Error('Cannot parse password'))
            b.password = v
          }
          return ((this.settings = b), o('_parseConnect: complete'), b)
        }
        _parseConnack() {
          o('_parseConnack')
          let a = this.packet
          if (this._list.length < 1) return null
          let d = this._list.readUInt8(this._pos++)
          if (d > 1)
            return this._emitError(
              new Error('Invalid connack flags, bits 7-1 must be set to 0')
            )
          if (
            ((a.sessionPresent = !!(d & s.SESSIONPRESENT_MASK)),
            this.settings.protocolVersion === 5)
          )
            this._list.length >= 2
              ? (a.reasonCode = this._list.readUInt8(this._pos++))
              : (a.reasonCode = 0)
          else {
            if (this._list.length < 2) return null
            a.returnCode = this._list.readUInt8(this._pos++)
          }
          if (a.returnCode === -1 || a.reasonCode === -1)
            return this._emitError(new Error('Cannot parse return code'))
          if (this.settings.protocolVersion === 5) {
            let v = this._parseProperties()
            Object.getOwnPropertyNames(v).length && (a.properties = v)
          }
          o('_parseConnack: complete')
        }
        _parsePublish() {
          o('_parsePublish')
          let a = this.packet
          if (((a.topic = this._parseString()), a.topic === null))
            return this._emitError(new Error('Cannot parse topic'))
          if (!(a.qos > 0 && !this._parseMessageId())) {
            if (this.settings.protocolVersion === 5) {
              let d = this._parseProperties()
              Object.getOwnPropertyNames(d).length && (a.properties = d)
            }
            ;((a.payload = this._list.slice(this._pos, a.length)),
              o('_parsePublish: payload from buffer list: %o', a.payload))
          }
        }
        _parseSubscribe() {
          o('_parseSubscribe')
          let a = this.packet,
            d,
            v,
            S,
            E,
            b,
            w,
            A
          if (((a.subscriptions = []), !!this._parseMessageId())) {
            if (this.settings.protocolVersion === 5) {
              let M = this._parseProperties()
              Object.getOwnPropertyNames(M).length && (a.properties = M)
            }
            if (a.length <= 0)
              return this._emitError(
                new Error('Malformed subscribe, no payload specified')
              )
            for (; this._pos < a.length; ) {
              if (((d = this._parseString()), d === null))
                return this._emitError(new Error('Cannot parse topic'))
              if (this._pos >= a.length)
                return this._emitError(new Error('Malformed Subscribe Payload'))
              if (
                ((v = this._parseByte()), this.settings.protocolVersion === 5)
              ) {
                if (v & 192)
                  return this._emitError(
                    new Error(
                      'Invalid subscribe topic flag bits, bits 7-6 must be 0'
                    )
                  )
              } else if (v & 252)
                return this._emitError(
                  new Error(
                    'Invalid subscribe topic flag bits, bits 7-2 must be 0'
                  )
                )
              if (((S = v & s.SUBSCRIBE_OPTIONS_QOS_MASK), S > 2))
                return this._emitError(
                  new Error('Invalid subscribe QoS, must be <= 2')
                )
              if (
                ((w =
                  ((v >> s.SUBSCRIBE_OPTIONS_NL_SHIFT) &
                    s.SUBSCRIBE_OPTIONS_NL_MASK) !==
                  0),
                (b =
                  ((v >> s.SUBSCRIBE_OPTIONS_RAP_SHIFT) &
                    s.SUBSCRIBE_OPTIONS_RAP_MASK) !==
                  0),
                (E =
                  (v >> s.SUBSCRIBE_OPTIONS_RH_SHIFT) &
                  s.SUBSCRIBE_OPTIONS_RH_MASK),
                E > 2)
              )
                return this._emitError(
                  new Error('Invalid retain handling, must be <= 2')
                )
              ;((A = { topic: d, qos: S }),
                this.settings.protocolVersion === 5
                  ? ((A.nl = w), (A.rap = b), (A.rh = E))
                  : this.settings.bridgeMode &&
                    ((A.rh = 0), (A.rap = !0), (A.nl = !0)),
                o('_parseSubscribe: push subscription `%s` to subscription', A),
                a.subscriptions.push(A))
            }
          }
        }
        _parseSuback() {
          o('_parseSuback')
          let a = this.packet
          if (((this.packet.granted = []), !!this._parseMessageId())) {
            if (this.settings.protocolVersion === 5) {
              let d = this._parseProperties()
              Object.getOwnPropertyNames(d).length && (a.properties = d)
            }
            if (a.length <= 0)
              return this._emitError(
                new Error('Malformed suback, no payload specified')
              )
            for (; this._pos < this.packet.length; ) {
              let d = this._list.readUInt8(this._pos++)
              if (this.settings.protocolVersion === 5) {
                if (!s.MQTT5_SUBACK_CODES[d])
                  return this._emitError(new Error('Invalid suback code'))
              } else if (d > 2 && d !== 128)
                return this._emitError(
                  new Error('Invalid suback QoS, must be 0, 1, 2 or 128')
                )
              this.packet.granted.push(d)
            }
          }
        }
        _parseUnsubscribe() {
          o('_parseUnsubscribe')
          let a = this.packet
          if (((a.unsubscriptions = []), !!this._parseMessageId())) {
            if (this.settings.protocolVersion === 5) {
              let d = this._parseProperties()
              Object.getOwnPropertyNames(d).length && (a.properties = d)
            }
            if (a.length <= 0)
              return this._emitError(
                new Error('Malformed unsubscribe, no payload specified')
              )
            for (; this._pos < a.length; ) {
              let d = this._parseString()
              if (d === null)
                return this._emitError(new Error('Cannot parse topic'))
              ;(o('_parseUnsubscribe: push topic `%s` to unsubscriptions', d),
                a.unsubscriptions.push(d))
            }
          }
        }
        _parseUnsuback() {
          o('_parseUnsuback')
          let a = this.packet
          if (!this._parseMessageId())
            return this._emitError(new Error('Cannot parse messageId'))
          if (
            (this.settings.protocolVersion === 3 ||
              this.settings.protocolVersion === 4) &&
            a.length !== 2
          )
            return this._emitError(
              new Error('Malformed unsuback, payload length must be 2')
            )
          if (a.length <= 0)
            return this._emitError(
              new Error('Malformed unsuback, no payload specified')
            )
          if (this.settings.protocolVersion === 5) {
            let d = this._parseProperties()
            for (
              Object.getOwnPropertyNames(d).length && (a.properties = d),
                a.granted = [];
              this._pos < this.packet.length;
            ) {
              let v = this._list.readUInt8(this._pos++)
              if (!s.MQTT5_UNSUBACK_CODES[v])
                return this._emitError(new Error('Invalid unsuback code'))
              this.packet.granted.push(v)
            }
          }
        }
        _parseConfirmation() {
          o('_parseConfirmation: packet.cmd: `%s`', this.packet.cmd)
          let a = this.packet
          if ((this._parseMessageId(), this.settings.protocolVersion === 5)) {
            if (a.length > 2) {
              switch (((a.reasonCode = this._parseByte()), this.packet.cmd)) {
                case 'puback':
                case 'pubrec':
                  if (!s.MQTT5_PUBACK_PUBREC_CODES[a.reasonCode])
                    return this._emitError(
                      new Error('Invalid ' + this.packet.cmd + ' reason code')
                    )
                  break
                case 'pubrel':
                case 'pubcomp':
                  if (!s.MQTT5_PUBREL_PUBCOMP_CODES[a.reasonCode])
                    return this._emitError(
                      new Error('Invalid ' + this.packet.cmd + ' reason code')
                    )
                  break
              }
              o('_parseConfirmation: packet.reasonCode `%d`', a.reasonCode)
            } else a.reasonCode = 0
            if (a.length > 3) {
              let d = this._parseProperties()
              Object.getOwnPropertyNames(d).length && (a.properties = d)
            }
          }
          return !0
        }
        _parseDisconnect() {
          let a = this.packet
          if ((o('_parseDisconnect'), this.settings.protocolVersion === 5)) {
            this._list.length > 0
              ? ((a.reasonCode = this._parseByte()),
                s.MQTT5_DISCONNECT_CODES[a.reasonCode] ||
                  this._emitError(new Error('Invalid disconnect reason code')))
              : (a.reasonCode = 0)
            let d = this._parseProperties()
            Object.getOwnPropertyNames(d).length && (a.properties = d)
          }
          return (o('_parseDisconnect result: true'), !0)
        }
        _parseAuth() {
          o('_parseAuth')
          let a = this.packet
          if (this.settings.protocolVersion !== 5)
            return this._emitError(
              new Error('Not supported auth packet for this version MQTT')
            )
          if (
            ((a.reasonCode = this._parseByte()),
            !s.MQTT5_AUTH_CODES[a.reasonCode])
          )
            return this._emitError(new Error('Invalid auth reason code'))
          let d = this._parseProperties()
          return (
            Object.getOwnPropertyNames(d).length && (a.properties = d),
            o('_parseAuth: result: true'),
            !0
          )
        }
        _parseMessageId() {
          let a = this.packet
          return (
            (a.messageId = this._parseNum()),
            a.messageId === null
              ? (this._emitError(new Error('Cannot parse messageId')), !1)
              : (o('_parseMessageId: packet.messageId %d', a.messageId), !0)
          )
        }
        _parseString(a) {
          let d = this._parseNum(),
            v = d + this._pos
          if (d === -1 || v > this._list.length || v > this.packet.length)
            return null
          let S = this._list.toString('utf8', this._pos, v)
          return ((this._pos += d), o('_parseString: result: %s', S), S)
        }
        _parseStringPair() {
          return (
            o('_parseStringPair'),
            { name: this._parseString(), value: this._parseString() }
          )
        }
        _parseBuffer() {
          let a = this._parseNum(),
            d = a + this._pos
          if (a === -1 || d > this._list.length || d > this.packet.length)
            return null
          let v = this._list.slice(this._pos, d)
          return ((this._pos += a), o('_parseBuffer: result: %o', v), v)
        }
        _parseNum() {
          if (this._list.length - this._pos < 2) return -1
          let a = this._list.readUInt16BE(this._pos)
          return ((this._pos += 2), o('_parseNum: result: %s', a), a)
        }
        _parse4ByteNum() {
          if (this._list.length - this._pos < 4) return -1
          let a = this._list.readUInt32BE(this._pos)
          return ((this._pos += 4), o('_parse4ByteNum: result: %s', a), a)
        }
        _parseVarByteNum(a) {
          o('_parseVarByteNum')
          let d = 4,
            v = 0,
            S = 1,
            E = 0,
            b = !1,
            w,
            A = this._pos ? this._pos : 0
          for (; v < d && A + v < this._list.length; ) {
            if (
              ((w = this._list.readUInt8(A + v++)),
              (E += S * (w & s.VARBYTEINT_MASK)),
              (S *= 128),
              (w & s.VARBYTEINT_FIN_MASK) === 0)
            ) {
              b = !0
              break
            }
            if (this._list.length <= v) break
          }
          return (
            !b &&
              v === d &&
              this._list.length >= v &&
              this._emitError(new Error('Invalid variable byte integer')),
            A && (this._pos += v),
            b ? (a ? (b = { bytes: v, value: E }) : (b = E)) : (b = !1),
            o('_parseVarByteNum: result: %o', b),
            b
          )
        }
        _parseByte() {
          let a
          return (
            this._pos < this._list.length &&
              ((a = this._list.readUInt8(this._pos)), this._pos++),
            o('_parseByte: result: %o', a),
            a
          )
        }
        _parseByType(a) {
          switch ((o('_parseByType: type: %s', a), a)) {
            case 'byte':
              return this._parseByte() !== 0
            case 'int8':
              return this._parseByte()
            case 'int16':
              return this._parseNum()
            case 'int32':
              return this._parse4ByteNum()
            case 'var':
              return this._parseVarByteNum()
            case 'string':
              return this._parseString()
            case 'pair':
              return this._parseStringPair()
            case 'binary':
              return this._parseBuffer()
          }
        }
        _parseProperties() {
          o('_parseProperties')
          let a = this._parseVarByteNum(),
            d = this._pos + a,
            v = {}
          for (; this._pos < d; ) {
            let S = this._parseByte()
            if (!S)
              return (
                this._emitError(new Error('Cannot parse property code type')),
                !1
              )
            let E = s.propertiesCodes[S]
            if (!E) return (this._emitError(new Error('Unknown property')), !1)
            if (E === 'userProperties') {
              v[E] || (v[E] = Object.create(null))
              let b = this._parseByType(s.propertiesTypes[E])
              if (v[E][b.name])
                if (Array.isArray(v[E][b.name])) v[E][b.name].push(b.value)
                else {
                  let w = v[E][b.name]
                  ;((v[E][b.name] = [w]), v[E][b.name].push(b.value))
                }
              else v[E][b.name] = b.value
              continue
            }
            v[E]
              ? Array.isArray(v[E])
                ? v[E].push(this._parseByType(s.propertiesTypes[E]))
                : ((v[E] = [v[E]]),
                  v[E].push(this._parseByType(s.propertiesTypes[E])))
              : (v[E] = this._parseByType(s.propertiesTypes[E]))
          }
          return v
        }
        _newPacket() {
          return (
            o('_newPacket'),
            this.packet &&
              (this._list.consume(this.packet.length),
              o(
                '_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d',
                this.packet.cmd,
                this.packet.payload,
                this.packet.length
              ),
              this.emit('packet', this.packet)),
            o('_newPacket: new packet'),
            (this.packet = new g()),
            (this._pos = 0),
            !0
          )
        }
        _emitError(a) {
          ;(o('_emitError', a), (this.error = a), this.emit('error', a))
        }
      }
    p.exports = u
  }),
  C1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var { Buffer: h } = (Pt(), gt(Ht)),
      c = 65536,
      g = {},
      s = h.isBuffer(h.from([1, 2]).subarray(0, 1))
    function o(d) {
      let v = h.allocUnsafe(2)
      return (v.writeUInt8(d >> 8, 0), v.writeUInt8(d & 255, 1), v)
    }
    function u() {
      for (let d = 0; d < c; d++) g[d] = o(d)
    }
    function i(d) {
      let v = 0,
        S = 0,
        E = h.allocUnsafe(4)
      do
        ((v = (d % 128) | 0),
          (d = (d / 128) | 0),
          d > 0 && (v = v | 128),
          E.writeUInt8(v, S++))
      while (d > 0 && S < 4)
      return (d > 0 && (S = 0), s ? E.subarray(0, S) : E.slice(0, S))
    }
    function a(d) {
      let v = h.allocUnsafe(4)
      return (v.writeUInt32BE(d, 0), v)
    }
    p.exports = {
      cache: g,
      generateCache: u,
      generateNumber: o,
      genBufVariableByteInt: i,
      generate4ByteBuffer: a,
    }
  }),
  j1 = Ue((y, p) => {
    ;(Te(),
      xe(),
      Oe(),
      typeof bt > 'u' ||
      !bt.version ||
      bt.version.indexOf('v0.') === 0 ||
      (bt.version.indexOf('v1.') === 0 && bt.version.indexOf('v1.8.') !== 0)
        ? (p.exports = { nextTick: h })
        : (p.exports = bt))
    function h(c, g, s, o) {
      if (typeof c != 'function')
        throw new TypeError('"callback" argument must be a function')
      var u = arguments.length,
        i,
        a
      switch (u) {
        case 0:
        case 1:
          return bt.nextTick(c)
        case 2:
          return bt.nextTick(function () {
            c.call(null, g)
          })
        case 3:
          return bt.nextTick(function () {
            c.call(null, g, s)
          })
        case 4:
          return bt.nextTick(function () {
            c.call(null, g, s, o)
          })
        default:
          for (i = new Array(u - 1), a = 0; a < i.length; )
            i[a++] = arguments[a]
          return bt.nextTick(function () {
            c.apply(null, i)
          })
      }
    }
  }),
  Db = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = Ub(),
      { Buffer: c } = (Pt(), gt(Ht)),
      g = c.allocUnsafe(0),
      s = c.from([0]),
      o = C1(),
      u = j1().nextTick,
      i = Sn()('mqtt-packet:writeToStream'),
      a = o.cache,
      d = o.generateNumber,
      v = o.generateCache,
      S = o.genBufVariableByteInt,
      E = o.generate4ByteBuffer,
      b = P,
      w = !0
    function A(re, Y, ye) {
      switch (
        (i('generate called'),
        Y.cork && (Y.cork(), u(M, Y)),
        w && ((w = !1), v()),
        i('generate: packet.cmd: %s', re.cmd),
        re.cmd)
      ) {
        case 'connect':
          return _(re, Y)
        case 'connack':
          return O(re, Y, ye)
        case 'publish':
          return N(re, Y, ye)
        case 'puback':
        case 'pubrec':
        case 'pubrel':
        case 'pubcomp':
          return T(re, Y, ye)
        case 'subscribe':
          return j(re, Y, ye)
        case 'suback':
          return x(re, Y, ye)
        case 'unsubscribe':
          return k(re, Y, ye)
        case 'unsuback':
          return q(re, Y, ye)
        case 'pingreq':
        case 'pingresp':
          return H(re, Y)
        case 'disconnect':
          return X(re, Y, ye)
        case 'auth':
          return I(re, Y, ye)
        default:
          return (Y.destroy(new Error('Unknown command')), !1)
      }
    }
    Object.defineProperty(A, 'cacheNumbers', {
      get() {
        return b === P
      },
      set(re) {
        re
          ? ((!a || Object.keys(a).length === 0) && (w = !0), (b = P))
          : ((w = !1), (b = F))
      },
    })
    function M(re) {
      re.uncork()
    }
    function _(re, Y, ye) {
      let oe = re || {},
        ue = oe.protocolId || 'MQTT',
        fe = oe.protocolVersion || 4,
        De = oe.will,
        we = oe.clean,
        G = oe.keepalive || 0,
        ne = oe.clientId || '',
        ge = oe.username,
        Re = oe.password,
        Ce = oe.properties
      we === void 0 && (we = !0)
      let Be = 0
      if (typeof ue != 'string' && !c.isBuffer(ue))
        return (Y.destroy(new Error('Invalid protocolId')), !1)
      if (((Be += ue.length + 2), fe !== 3 && fe !== 4 && fe !== 5))
        return (Y.destroy(new Error('Invalid protocol version')), !1)
      if (
        ((Be += 1),
        (typeof ne == 'string' || c.isBuffer(ne)) &&
          (ne || fe >= 4) &&
          (ne || we))
      )
        Be += c.byteLength(ne) + 2
      else {
        if (fe < 4)
          return (
            Y.destroy(new Error('clientId must be supplied before 3.1.1')),
            !1
          )
        if (we * 1 === 0)
          return (
            Y.destroy(
              new Error('clientId must be given if cleanSession set to 0')
            ),
            !1
          )
      }
      if (typeof G != 'number' || G < 0 || G > 65535 || G % 1 !== 0)
        return (Y.destroy(new Error('Invalid keepalive')), !1)
      ;((Be += 2), (Be += 1))
      let ie, Ne
      if (fe === 5) {
        if (((ie = B(Y, Ce)), !ie)) return !1
        Be += ie.length
      }
      if (De) {
        if (typeof De != 'object')
          return (Y.destroy(new Error('Invalid will')), !1)
        if (!De.topic || typeof De.topic != 'string')
          return (Y.destroy(new Error('Invalid will topic')), !1)
        if (((Be += c.byteLength(De.topic) + 2), (Be += 2), De.payload))
          if (De.payload.length >= 0)
            typeof De.payload == 'string'
              ? (Be += c.byteLength(De.payload))
              : (Be += De.payload.length)
          else return (Y.destroy(new Error('Invalid will payload')), !1)
        if (((Ne = {}), fe === 5)) {
          if (((Ne = B(Y, De.properties)), !Ne)) return !1
          Be += Ne.length
        }
      }
      let Ie = !1
      if (ge != null)
        if (Me(ge)) ((Ie = !0), (Be += c.byteLength(ge) + 2))
        else return (Y.destroy(new Error('Invalid username')), !1)
      if (Re != null) {
        if (!Ie)
          return (
            Y.destroy(new Error('Username is required to use password')),
            !1
          )
        if (Me(Re)) Be += le(Re) + 2
        else return (Y.destroy(new Error('Invalid password')), !1)
      }
      ;(Y.write(h.CONNECT_HEADER),
        J(Y, Be),
        V(Y, ue),
        oe.bridgeMode && (fe += 128),
        Y.write(
          fe === 131
            ? h.VERSION131
            : fe === 132
              ? h.VERSION132
              : fe === 4
                ? h.VERSION4
                : fe === 5
                  ? h.VERSION5
                  : h.VERSION3
        ))
      let Se = 0
      return (
        (Se |= ge != null ? h.USERNAME_MASK : 0),
        (Se |= Re != null ? h.PASSWORD_MASK : 0),
        (Se |= De && De.retain ? h.WILL_RETAIN_MASK : 0),
        (Se |= De && De.qos ? De.qos << h.WILL_QOS_SHIFT : 0),
        (Se |= De ? h.WILL_FLAG_MASK : 0),
        (Se |= we ? h.CLEAN_SESSION_MASK : 0),
        Y.write(c.from([Se])),
        b(Y, G),
        fe === 5 && ie.write(),
        V(Y, ne),
        De && (fe === 5 && Ne.write(), $(Y, De.topic), V(Y, De.payload)),
        ge != null && V(Y, ge),
        Re != null && V(Y, Re),
        !0
      )
    }
    function O(re, Y, ye) {
      let oe = ye ? ye.protocolVersion : 4,
        ue = re || {},
        fe = oe === 5 ? ue.reasonCode : ue.returnCode,
        De = ue.properties,
        we = 2
      if (typeof fe != 'number')
        return (Y.destroy(new Error('Invalid return code')), !1)
      let G = null
      if (oe === 5) {
        if (((G = B(Y, De)), !G)) return !1
        we += G.length
      }
      return (
        Y.write(h.CONNACK_HEADER),
        J(Y, we),
        Y.write(ue.sessionPresent ? h.SESSIONPRESENT_HEADER : s),
        Y.write(c.from([fe])),
        G?.write(),
        !0
      )
    }
    function N(re, Y, ye) {
      i('publish: packet: %o', re)
      let oe = ye ? ye.protocolVersion : 4,
        ue = re || {},
        fe = ue.qos || 0,
        De = ue.retain ? h.RETAIN_MASK : 0,
        we = ue.topic,
        G = ue.payload || g,
        ne = ue.messageId,
        ge = ue.properties,
        Re = 0
      if (typeof we == 'string') Re += c.byteLength(we) + 2
      else if (c.isBuffer(we)) Re += we.length + 2
      else return (Y.destroy(new Error('Invalid topic')), !1)
      if (
        (c.isBuffer(G) ? (Re += G.length) : (Re += c.byteLength(G)),
        fe && typeof ne != 'number')
      )
        return (Y.destroy(new Error('Invalid messageId')), !1)
      fe && (Re += 2)
      let Ce = null
      if (oe === 5) {
        if (((Ce = B(Y, ge)), !Ce)) return !1
        Re += Ce.length
      }
      return (
        Y.write(h.PUBLISH_HEADER[fe][ue.dup ? 1 : 0][De ? 1 : 0]),
        J(Y, Re),
        b(Y, le(we)),
        Y.write(we),
        fe > 0 && b(Y, ne),
        Ce?.write(),
        i('publish: payload: %o', G),
        Y.write(G)
      )
    }
    function T(re, Y, ye) {
      let oe = ye ? ye.protocolVersion : 4,
        ue = re || {},
        fe = ue.cmd || 'puback',
        De = ue.messageId,
        we = ue.dup && fe === 'pubrel' ? h.DUP_MASK : 0,
        G = 0,
        ne = ue.reasonCode,
        ge = ue.properties,
        Re = oe === 5 ? 3 : 2
      if ((fe === 'pubrel' && (G = 1), typeof De != 'number'))
        return (Y.destroy(new Error('Invalid messageId')), !1)
      let Ce = null
      if (oe === 5 && typeof ge == 'object') {
        if (((Ce = D(Y, ge, ye, Re)), !Ce)) return !1
        Re += Ce.length
      }
      return (
        Y.write(h.ACKS[fe][G][we][0]),
        Re === 3 && (Re += ne !== 0 ? 1 : -1),
        J(Y, Re),
        b(Y, De),
        oe === 5 && Re !== 2 && Y.write(c.from([ne])),
        Ce !== null ? Ce.write() : Re === 4 && Y.write(c.from([0])),
        !0
      )
    }
    function j(re, Y, ye) {
      i('subscribe: packet: ')
      let oe = ye ? ye.protocolVersion : 4,
        ue = re || {},
        fe = ue.dup ? h.DUP_MASK : 0,
        De = ue.messageId,
        we = ue.subscriptions,
        G = ue.properties,
        ne = 0
      if (typeof De != 'number')
        return (Y.destroy(new Error('Invalid messageId')), !1)
      ne += 2
      let ge = null
      if (oe === 5) {
        if (((ge = B(Y, G)), !ge)) return !1
        ne += ge.length
      }
      if (typeof we == 'object' && we.length)
        for (let Ce = 0; Ce < we.length; Ce += 1) {
          let Be = we[Ce].topic,
            ie = we[Ce].qos
          if (typeof Be != 'string')
            return (
              Y.destroy(new Error('Invalid subscriptions - invalid topic')),
              !1
            )
          if (typeof ie != 'number')
            return (
              Y.destroy(new Error('Invalid subscriptions - invalid qos')),
              !1
            )
          if (oe === 5) {
            if (typeof (we[Ce].nl || !1) != 'boolean')
              return (
                Y.destroy(
                  new Error('Invalid subscriptions - invalid No Local')
                ),
                !1
              )
            if (typeof (we[Ce].rap || !1) != 'boolean')
              return (
                Y.destroy(
                  new Error(
                    'Invalid subscriptions - invalid Retain as Published'
                  )
                ),
                !1
              )
            let Ne = we[Ce].rh || 0
            if (typeof Ne != 'number' || Ne > 2)
              return (
                Y.destroy(
                  new Error('Invalid subscriptions - invalid Retain Handling')
                ),
                !1
              )
          }
          ne += c.byteLength(Be) + 2 + 1
        }
      else return (Y.destroy(new Error('Invalid subscriptions')), !1)
      ;(i('subscribe: writing to stream: %o', h.SUBSCRIBE_HEADER),
        Y.write(h.SUBSCRIBE_HEADER[1][fe ? 1 : 0][0]),
        J(Y, ne),
        b(Y, De),
        ge !== null && ge.write())
      let Re = !0
      for (let Ce of we) {
        let Be = Ce.topic,
          ie = Ce.qos,
          Ne = +Ce.nl,
          Ie = +Ce.rap,
          Se = Ce.rh,
          Je
        ;($(Y, Be),
          (Je = h.SUBSCRIBE_OPTIONS_QOS[ie]),
          oe === 5 &&
            ((Je |= Ne ? h.SUBSCRIBE_OPTIONS_NL : 0),
            (Je |= Ie ? h.SUBSCRIBE_OPTIONS_RAP : 0),
            (Je |= Se ? h.SUBSCRIBE_OPTIONS_RH[Se] : 0)),
          (Re = Y.write(c.from([Je]))))
      }
      return Re
    }
    function x(re, Y, ye) {
      let oe = ye ? ye.protocolVersion : 4,
        ue = re || {},
        fe = ue.messageId,
        De = ue.granted,
        we = ue.properties,
        G = 0
      if (typeof fe != 'number')
        return (Y.destroy(new Error('Invalid messageId')), !1)
      if (((G += 2), typeof De == 'object' && De.length))
        for (let ge = 0; ge < De.length; ge += 1) {
          if (typeof De[ge] != 'number')
            return (Y.destroy(new Error('Invalid qos vector')), !1)
          G += 1
        }
      else return (Y.destroy(new Error('Invalid qos vector')), !1)
      let ne = null
      if (oe === 5) {
        if (((ne = D(Y, we, ye, G)), !ne)) return !1
        G += ne.length
      }
      return (
        Y.write(h.SUBACK_HEADER),
        J(Y, G),
        b(Y, fe),
        ne !== null && ne.write(),
        Y.write(c.from(De))
      )
    }
    function k(re, Y, ye) {
      let oe = ye ? ye.protocolVersion : 4,
        ue = re || {},
        fe = ue.messageId,
        De = ue.dup ? h.DUP_MASK : 0,
        we = ue.unsubscriptions,
        G = ue.properties,
        ne = 0
      if (typeof fe != 'number')
        return (Y.destroy(new Error('Invalid messageId')), !1)
      if (((ne += 2), typeof we == 'object' && we.length))
        for (let Ce = 0; Ce < we.length; Ce += 1) {
          if (typeof we[Ce] != 'string')
            return (Y.destroy(new Error('Invalid unsubscriptions')), !1)
          ne += c.byteLength(we[Ce]) + 2
        }
      else return (Y.destroy(new Error('Invalid unsubscriptions')), !1)
      let ge = null
      if (oe === 5) {
        if (((ge = B(Y, G)), !ge)) return !1
        ne += ge.length
      }
      ;(Y.write(h.UNSUBSCRIBE_HEADER[1][De ? 1 : 0][0]),
        J(Y, ne),
        b(Y, fe),
        ge !== null && ge.write())
      let Re = !0
      for (let Ce = 0; Ce < we.length; Ce++) Re = $(Y, we[Ce])
      return Re
    }
    function q(re, Y, ye) {
      let oe = ye ? ye.protocolVersion : 4,
        ue = re || {},
        fe = ue.messageId,
        De = ue.dup ? h.DUP_MASK : 0,
        we = ue.granted,
        G = ue.properties,
        ne = ue.cmd,
        ge = 0,
        Re = 2
      if (typeof fe != 'number')
        return (Y.destroy(new Error('Invalid messageId')), !1)
      if (oe === 5)
        if (typeof we == 'object' && we.length)
          for (let Be = 0; Be < we.length; Be += 1) {
            if (typeof we[Be] != 'number')
              return (Y.destroy(new Error('Invalid qos vector')), !1)
            Re += 1
          }
        else return (Y.destroy(new Error('Invalid qos vector')), !1)
      let Ce = null
      if (oe === 5) {
        if (((Ce = D(Y, G, ye, Re)), !Ce)) return !1
        Re += Ce.length
      }
      return (
        Y.write(h.ACKS[ne][ge][De][0]),
        J(Y, Re),
        b(Y, fe),
        Ce !== null && Ce.write(),
        oe === 5 && Y.write(c.from(we)),
        !0
      )
    }
    function H(re, Y, ye) {
      return Y.write(h.EMPTY[re.cmd])
    }
    function X(re, Y, ye) {
      let oe = ye ? ye.protocolVersion : 4,
        ue = re || {},
        fe = ue.reasonCode,
        De = ue.properties,
        we = oe === 5 ? 1 : 0,
        G = null
      if (oe === 5) {
        if (((G = D(Y, De, ye, we)), !G)) return !1
        we += G.length
      }
      return (
        Y.write(c.from([h.codes.disconnect << 4])),
        J(Y, we),
        oe === 5 && Y.write(c.from([fe])),
        G !== null && G.write(),
        !0
      )
    }
    function I(re, Y, ye) {
      let oe = ye ? ye.protocolVersion : 4,
        ue = re || {},
        fe = ue.reasonCode,
        De = ue.properties,
        we = oe === 5 ? 1 : 0
      oe !== 5 && Y.destroy(new Error('Invalid mqtt version for auth packet'))
      let G = D(Y, De, ye, we)
      return G
        ? ((we += G.length),
          Y.write(c.from([h.codes.auth << 4])),
          J(Y, we),
          Y.write(c.from([fe])),
          G !== null && G.write(),
          !0)
        : !1
    }
    var ee = {}
    function J(re, Y) {
      if (Y > h.VARBYTEINT_MAX)
        return (
          re.destroy(new Error(`Invalid variable byte integer: ${Y}`)),
          !1
        )
      let ye = ee[Y]
      return (
        ye || ((ye = S(Y)), Y < 16384 && (ee[Y] = ye)),
        i('writeVarByteInt: writing to stream: %o', ye),
        re.write(ye)
      )
    }
    function $(re, Y) {
      let ye = c.byteLength(Y)
      return (b(re, ye), i('writeString: %s', Y), re.write(Y, 'utf8'))
    }
    function K(re, Y, ye) {
      ;($(re, Y), $(re, ye))
    }
    function P(re, Y) {
      return (
        i('writeNumberCached: number: %d', Y),
        i('writeNumberCached: %o', a[Y]),
        re.write(a[Y])
      )
    }
    function F(re, Y) {
      let ye = d(Y)
      return (i('writeNumberGenerated: %o', ye), re.write(ye))
    }
    function ce(re, Y) {
      let ye = E(Y)
      return (i('write4ByteNumber: %o', ye), re.write(ye))
    }
    function V(re, Y) {
      typeof Y == 'string'
        ? $(re, Y)
        : Y
          ? (b(re, Y.length), re.write(Y))
          : b(re, 0)
    }
    function B(re, Y) {
      if (typeof Y != 'object' || Y.length != null)
        return {
          length: 1,
          write() {
            he(re, {}, 0)
          },
        }
      let ye = 0
      function oe(ue, fe) {
        let De = h.propertiesTypes[ue],
          we = 0
        switch (De) {
          case 'byte': {
            if (typeof fe != 'boolean')
              return (re.destroy(new Error(`Invalid ${ue}: ${fe}`)), !1)
            we += 2
            break
          }
          case 'int8': {
            if (typeof fe != 'number' || fe < 0 || fe > 255)
              return (re.destroy(new Error(`Invalid ${ue}: ${fe}`)), !1)
            we += 2
            break
          }
          case 'binary': {
            if (fe && fe === null)
              return (re.destroy(new Error(`Invalid ${ue}: ${fe}`)), !1)
            we += 1 + c.byteLength(fe) + 2
            break
          }
          case 'int16': {
            if (typeof fe != 'number' || fe < 0 || fe > 65535)
              return (re.destroy(new Error(`Invalid ${ue}: ${fe}`)), !1)
            we += 3
            break
          }
          case 'int32': {
            if (typeof fe != 'number' || fe < 0 || fe > 4294967295)
              return (re.destroy(new Error(`Invalid ${ue}: ${fe}`)), !1)
            we += 5
            break
          }
          case 'var': {
            if (typeof fe != 'number' || fe < 0 || fe > 268435455)
              return (re.destroy(new Error(`Invalid ${ue}: ${fe}`)), !1)
            we += 1 + c.byteLength(S(fe))
            break
          }
          case 'string': {
            if (typeof fe != 'string')
              return (re.destroy(new Error(`Invalid ${ue}: ${fe}`)), !1)
            we += 3 + c.byteLength(fe.toString())
            break
          }
          case 'pair': {
            if (typeof fe != 'object')
              return (re.destroy(new Error(`Invalid ${ue}: ${fe}`)), !1)
            we += Object.getOwnPropertyNames(fe).reduce((G, ne) => {
              let ge = fe[ne]
              return (
                Array.isArray(ge)
                  ? (G += ge.reduce(
                      (Re, Ce) => (
                        (Re +=
                          3 +
                          c.byteLength(ne.toString()) +
                          2 +
                          c.byteLength(Ce.toString())),
                        Re
                      ),
                      0
                    ))
                  : (G +=
                      3 +
                      c.byteLength(ne.toString()) +
                      2 +
                      c.byteLength(fe[ne].toString())),
                G
              )
            }, 0)
            break
          }
          default:
            return (re.destroy(new Error(`Invalid property ${ue}: ${fe}`)), !1)
        }
        return we
      }
      if (Y)
        for (let ue in Y) {
          let fe = 0,
            De = 0,
            we = Y[ue]
          if (we !== void 0) {
            if (Array.isArray(we))
              for (let G = 0; G < we.length; G++) {
                if (((De = oe(ue, we[G])), !De)) return !1
                fe += De
              }
            else {
              if (((De = oe(ue, we)), !De)) return !1
              fe = De
            }
            if (!fe) return !1
            ye += fe
          }
        }
      return {
        length: c.byteLength(S(ye)) + ye,
        write() {
          he(re, Y, ye)
        },
      }
    }
    function D(re, Y, ye, oe) {
      let ue = ['reasonString', 'userProperties'],
        fe =
          ye && ye.properties && ye.properties.maximumPacketSize
            ? ye.properties.maximumPacketSize
            : 0,
        De = B(re, Y)
      if (fe)
        for (; oe + De.length > fe; ) {
          let we = ue.shift()
          if (we && Y[we]) (delete Y[we], (De = B(re, Y)))
          else return !1
        }
      return De
    }
    function Q(re, Y, ye) {
      switch (h.propertiesTypes[Y]) {
        case 'byte': {
          ;(re.write(c.from([h.properties[Y]])), re.write(c.from([+ye])))
          break
        }
        case 'int8': {
          ;(re.write(c.from([h.properties[Y]])), re.write(c.from([ye])))
          break
        }
        case 'binary': {
          ;(re.write(c.from([h.properties[Y]])), V(re, ye))
          break
        }
        case 'int16': {
          ;(re.write(c.from([h.properties[Y]])), b(re, ye))
          break
        }
        case 'int32': {
          ;(re.write(c.from([h.properties[Y]])), ce(re, ye))
          break
        }
        case 'var': {
          ;(re.write(c.from([h.properties[Y]])), J(re, ye))
          break
        }
        case 'string': {
          ;(re.write(c.from([h.properties[Y]])), $(re, ye))
          break
        }
        case 'pair': {
          Object.getOwnPropertyNames(ye).forEach((oe) => {
            let ue = ye[oe]
            Array.isArray(ue)
              ? ue.forEach((fe) => {
                  ;(re.write(c.from([h.properties[Y]])),
                    K(re, oe.toString(), fe.toString()))
                })
              : (re.write(c.from([h.properties[Y]])),
                K(re, oe.toString(), ue.toString()))
          })
          break
        }
        default:
          return (
            re.destroy(new Error(`Invalid property ${Y} value: ${ye}`)),
            !1
          )
      }
    }
    function he(re, Y, ye) {
      J(re, ye)
      for (let oe in Y)
        if (Object.prototype.hasOwnProperty.call(Y, oe) && Y[oe] != null) {
          let ue = Y[oe]
          if (Array.isArray(ue))
            for (let fe = 0; fe < ue.length; fe++) Q(re, oe, ue[fe])
          else Q(re, oe, ue)
        }
    }
    function le(re) {
      return re ? (re instanceof c ? re.length : c.byteLength(re)) : 0
    }
    function Me(re) {
      return typeof re == 'string' || re instanceof c
    }
    p.exports = A
  }),
  N1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = Db(),
      { EventEmitter: c } = (wi(), gt($n)),
      { Buffer: g } = (Pt(), gt(Ht))
    function s(u, i) {
      let a = new o()
      return (h(u, a, i), a.concat())
    }
    var o = class extends c {
      constructor() {
        ;(super(), (this._array = new Array(20)), (this._i = 0))
      }
      write(u) {
        return ((this._array[this._i++] = u), !0)
      }
      concat() {
        let u = 0,
          i = new Array(this._array.length),
          a = this._array,
          d = 0,
          v
        for (v = 0; v < a.length && a[v] !== void 0; v++)
          (typeof a[v] != 'string'
            ? (i[v] = a[v].length)
            : (i[v] = g.byteLength(a[v])),
            (u += i[v]))
        let S = g.allocUnsafe(u)
        for (v = 0; v < a.length && a[v] !== void 0; v++)
          typeof a[v] != 'string'
            ? (a[v].copy(S, d), (d += i[v]))
            : (S.write(a[v], d), (d += i[v]))
        return S
      }
      destroy(u) {
        u && this.emit('error', u)
      }
    }
    p.exports = s
  }),
  U1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      (y.parser = R1().parser),
      (y.generate = N1()),
      (y.writeToStream = Db()))
  }),
  D1 = Ue((y, p) => {
    ;(Te(), xe(), Oe(), (p.exports = c))
    function h(s) {
      return s instanceof ns
        ? ns.from(s)
        : new s.constructor(s.buffer.slice(), s.byteOffset, s.length)
    }
    function c(s) {
      if (((s = s || {}), s.circles)) return g(s)
      let o = new Map()
      if (
        (o.set(Date, (v) => new Date(v)),
        o.set(Map, (v, S) => new Map(i(Array.from(v), S))),
        o.set(Set, (v, S) => new Set(i(Array.from(v), S))),
        s.constructorHandlers)
      )
        for (let v of s.constructorHandlers) o.set(v[0], v[1])
      let u = null
      return s.proto ? d : a
      function i(v, S) {
        let E = Object.keys(v),
          b = new Array(E.length)
        for (let w = 0; w < E.length; w++) {
          let A = E[w],
            M = v[A]
          typeof M != 'object' || M === null
            ? (b[A] = M)
            : M.constructor !== Object && (u = o.get(M.constructor))
              ? (b[A] = u(M, S))
              : ArrayBuffer.isView(M)
                ? (b[A] = h(M))
                : (b[A] = S(M))
        }
        return b
      }
      function a(v) {
        if (typeof v != 'object' || v === null) return v
        if (Array.isArray(v)) return i(v, a)
        if (v.constructor !== Object && (u = o.get(v.constructor)))
          return u(v, a)
        let S = {}
        for (let E in v) {
          if (Object.hasOwnProperty.call(v, E) === !1) continue
          let b = v[E]
          typeof b != 'object' || b === null
            ? (S[E] = b)
            : b.constructor !== Object && (u = o.get(b.constructor))
              ? (S[E] = u(b, a))
              : ArrayBuffer.isView(b)
                ? (S[E] = h(b))
                : (S[E] = a(b))
        }
        return S
      }
      function d(v) {
        if (typeof v != 'object' || v === null) return v
        if (Array.isArray(v)) return i(v, d)
        if (v.constructor !== Object && (u = o.get(v.constructor)))
          return u(v, d)
        let S = {}
        for (let E in v) {
          let b = v[E]
          typeof b != 'object' || b === null
            ? (S[E] = b)
            : b.constructor !== Object && (u = o.get(b.constructor))
              ? (S[E] = u(b, d))
              : ArrayBuffer.isView(b)
                ? (S[E] = h(b))
                : (S[E] = d(b))
        }
        return S
      }
    }
    function g(s) {
      let o = [],
        u = [],
        i = new Map()
      if (
        (i.set(Date, (E) => new Date(E)),
        i.set(Map, (E, b) => new Map(d(Array.from(E), b))),
        i.set(Set, (E, b) => new Set(d(Array.from(E), b))),
        s.constructorHandlers)
      )
        for (let E of s.constructorHandlers) i.set(E[0], E[1])
      let a = null
      return s.proto ? S : v
      function d(E, b) {
        let w = Object.keys(E),
          A = new Array(w.length)
        for (let M = 0; M < w.length; M++) {
          let _ = w[M],
            O = E[_]
          if (typeof O != 'object' || O === null) A[_] = O
          else if (O.constructor !== Object && (a = i.get(O.constructor)))
            A[_] = a(O, b)
          else if (ArrayBuffer.isView(O)) A[_] = h(O)
          else {
            let N = o.indexOf(O)
            N !== -1 ? (A[_] = u[N]) : (A[_] = b(O))
          }
        }
        return A
      }
      function v(E) {
        if (typeof E != 'object' || E === null) return E
        if (Array.isArray(E)) return d(E, v)
        if (E.constructor !== Object && (a = i.get(E.constructor)))
          return a(E, v)
        let b = {}
        ;(o.push(E), u.push(b))
        for (let w in E) {
          if (Object.hasOwnProperty.call(E, w) === !1) continue
          let A = E[w]
          if (typeof A != 'object' || A === null) b[w] = A
          else if (A.constructor !== Object && (a = i.get(A.constructor)))
            b[w] = a(A, v)
          else if (ArrayBuffer.isView(A)) b[w] = h(A)
          else {
            let M = o.indexOf(A)
            M !== -1 ? (b[w] = u[M]) : (b[w] = v(A))
          }
        }
        return (o.pop(), u.pop(), b)
      }
      function S(E) {
        if (typeof E != 'object' || E === null) return E
        if (Array.isArray(E)) return d(E, S)
        if (E.constructor !== Object && (a = i.get(E.constructor)))
          return a(E, S)
        let b = {}
        ;(o.push(E), u.push(b))
        for (let w in E) {
          let A = E[w]
          if (typeof A != 'object' || A === null) b[w] = A
          else if (A.constructor !== Object && (a = i.get(A.constructor)))
            b[w] = a(A, S)
          else if (ArrayBuffer.isView(A)) b[w] = h(A)
          else {
            let M = o.indexOf(A)
            M !== -1 ? (b[w] = u[M]) : (b[w] = S(A))
          }
        }
        return (o.pop(), u.pop(), b)
      }
    }
  }),
  B1 = Ue((y, p) => {
    ;(Te(), xe(), Oe(), (p.exports = D1()()))
  }),
  Bb = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, '__esModule', { value: !0 }),
      (y.validateTopic = p),
      (y.validateTopics = h))
    function p(c) {
      let g = c.split('/')
      for (let s = 0; s < g.length; s++)
        if (g[s] !== '+') {
          if (g[s] === '#') return s === g.length - 1
          if (g[s].indexOf('+') !== -1 || g[s].indexOf('#') !== -1) return !1
        }
      return !0
    }
    function h(c) {
      if (c.length === 0) return 'empty_topic_list'
      for (let g = 0; g < c.length; g++) if (!p(c[g])) return c[g]
      return null
    }
  }),
  kb = Ue((y) => {
    ;(Te(), xe(), Oe(), Object.defineProperty(y, '__esModule', { value: !0 }))
    var p = Ai(),
      h = { objectMode: !0 },
      c = { clean: !0 },
      g = class {
        options
        _inflights
        constructor(s) {
          ;((this.options = s || {}),
            (this.options = { ...c, ...s }),
            (this._inflights = new Map()))
        }
        put(s, o) {
          return (this._inflights.set(s.messageId, s), o && o(), this)
        }
        createStream() {
          let s = new p.Readable(h),
            o = [],
            u = !1,
            i = 0
          return (
            this._inflights.forEach((a, d) => {
              o.push(a)
            }),
            (s._read = () => {
              !u && i < o.length ? s.push(o[i++]) : s.push(null)
            }),
            (s.destroy = (a) => {
              if (!u)
                return (
                  (u = !0),
                  setTimeout(() => {
                    s.emit('close')
                  }, 0),
                  s
                )
            }),
            s
          )
        }
        del(s, o) {
          let u = this._inflights.get(s.messageId)
          return (
            u
              ? (this._inflights.delete(s.messageId), o(null, u))
              : o && o(new Error('missing packet')),
            this
          )
        }
        get(s, o) {
          let u = this._inflights.get(s.messageId)
          return (u ? o(null, u) : o && o(new Error('missing packet')), this)
        }
        close(s) {
          ;(this.options.clean && (this._inflights = null), s && s())
        }
      }
    y.default = g
  }),
  k1 = Ue((y) => {
    ;(Te(), xe(), Oe(), Object.defineProperty(y, '__esModule', { value: !0 }))
    var p = [0, 16, 128, 131, 135, 144, 145, 151, 153],
      h = (c, g, s) => {
        ;(c.log('handlePublish: packet %o', g),
          (s = typeof s < 'u' ? s : c.noop))
        let o = g.topic.toString(),
          u = g.payload,
          { qos: i } = g,
          { messageId: a } = g,
          { options: d } = c
        if (c.options.protocolVersion === 5) {
          let v
          if ((g.properties && (v = g.properties.topicAlias), typeof v < 'u'))
            if (o.length === 0)
              if (v > 0 && v <= 65535) {
                let S = c.topicAliasRecv.getTopicByAlias(v)
                if (S)
                  ((o = S),
                    c.log(
                      'handlePublish :: topic complemented by alias. topic: %s - alias: %d',
                      o,
                      v
                    ))
                else {
                  ;(c.log(
                    'handlePublish :: unregistered topic alias. alias: %d',
                    v
                  ),
                    c.emit(
                      'error',
                      new Error('Received unregistered Topic Alias')
                    ))
                  return
                }
              } else {
                ;(c.log(
                  'handlePublish :: topic alias out of range. alias: %d',
                  v
                ),
                  c.emit(
                    'error',
                    new Error('Received Topic Alias is out of range')
                  ))
                return
              }
            else if (c.topicAliasRecv.put(o, v))
              c.log('handlePublish :: registered topic: %s - alias: %d', o, v)
            else {
              ;(c.log(
                'handlePublish :: topic alias out of range. alias: %d',
                v
              ),
                c.emit(
                  'error',
                  new Error('Received Topic Alias is out of range')
                ))
              return
            }
        }
        switch ((c.log('handlePublish: qos %d', i), i)) {
          case 2: {
            d.customHandleAcks(o, u, g, (v, S) => {
              if ((typeof v == 'number' && ((S = v), (v = null)), v))
                return c.emit('error', v)
              if (p.indexOf(S) === -1)
                return c.emit(
                  'error',
                  new Error('Wrong reason code for pubrec')
                )
              S
                ? c._sendPacket(
                    { cmd: 'pubrec', messageId: a, reasonCode: S },
                    s
                  )
                : c.incomingStore.put(g, () => {
                    c._sendPacket({ cmd: 'pubrec', messageId: a }, s)
                  })
            })
            break
          }
          case 1: {
            d.customHandleAcks(o, u, g, (v, S) => {
              if ((typeof v == 'number' && ((S = v), (v = null)), v))
                return c.emit('error', v)
              if (p.indexOf(S) === -1)
                return c.emit(
                  'error',
                  new Error('Wrong reason code for puback')
                )
              ;(S || c.emit('message', o, u, g),
                c.handleMessage(g, (E) => {
                  if (E) return s && s(E)
                  c._sendPacket(
                    { cmd: 'puback', messageId: a, reasonCode: S },
                    s
                  )
                }))
            })
            break
          }
          case 0:
            ;(c.emit('message', o, u, g), c.handleMessage(g, s))
            break
          default:
            c.log('handlePublish: unknown QoS. Doing nothing.')
            break
        }
      }
    y.default = h
  }),
  L1 = Ue((y, p) => {
    p.exports = { version: '5.15.1' }
  }),
  pa = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, '__esModule', { value: !0 }),
      (y.MQTTJS_VERSION =
        y.nextTick =
        y.ErrorWithSubackPacket =
        y.ErrorWithReasonCode =
          void 0),
      (y.applyMixin = c))
    var p = class Lb extends Error {
      code
      constructor(s, o) {
        ;(super(s),
          (this.code = o),
          Object.setPrototypeOf(this, Lb.prototype),
          (Object.getPrototypeOf(this).name = 'ErrorWithReasonCode'))
      }
    }
    y.ErrorWithReasonCode = p
    var h = class Ib extends Error {
      packet
      constructor(s, o) {
        ;(super(s),
          (this.packet = o),
          Object.setPrototypeOf(this, Ib.prototype),
          (Object.getPrototypeOf(this).name = 'ErrorWithSubackPacket'))
      }
    }
    y.ErrorWithSubackPacket = h
    function c(g, s, o = !1) {
      let u = [s]
      for (;;) {
        let i = u[0],
          a = Object.getPrototypeOf(i)
        if (a?.prototype) u.unshift(a)
        else break
      }
      for (let i of u)
        for (let a of Object.getOwnPropertyNames(i.prototype))
          (o || a !== 'constructor') &&
            Object.defineProperty(
              g.prototype,
              a,
              Object.getOwnPropertyDescriptor(i.prototype, a) ??
                Object.create(null)
            )
    }
    ;((y.nextTick =
      typeof bt?.nextTick == 'function'
        ? bt.nextTick
        : (g) => {
            setTimeout(g, 0)
          }),
      (y.MQTTJS_VERSION = L1().version))
  }),
  ss = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, '__esModule', { value: !0 }),
      (y.ReasonCodes = void 0))
    var p = pa()
    y.ReasonCodes = {
      0: '',
      1: 'Unacceptable protocol version',
      2: 'Identifier rejected',
      3: 'Server unavailable',
      4: 'Bad username or password',
      5: 'Not authorized',
      16: 'No matching subscribers',
      17: 'No subscription existed',
      128: 'Unspecified error',
      129: 'Malformed Packet',
      130: 'Protocol Error',
      131: 'Implementation specific error',
      132: 'Unsupported Protocol Version',
      133: 'Client Identifier not valid',
      134: 'Bad User Name or Password',
      135: 'Not authorized',
      136: 'Server unavailable',
      137: 'Server busy',
      138: 'Banned',
      139: 'Server shutting down',
      140: 'Bad authentication method',
      141: 'Keep Alive timeout',
      142: 'Session taken over',
      143: 'Topic Filter invalid',
      144: 'Topic Name invalid',
      145: 'Packet identifier in use',
      146: 'Packet Identifier not found',
      147: 'Receive Maximum exceeded',
      148: 'Topic Alias invalid',
      149: 'Packet too large',
      150: 'Message rate too high',
      151: 'Quota exceeded',
      152: 'Administrative action',
      153: 'Payload format invalid',
      154: 'Retain not supported',
      155: 'QoS not supported',
      156: 'Use another server',
      157: 'Server moved',
      158: 'Shared Subscriptions not supported',
      159: 'Connection rate exceeded',
      160: 'Maximum connect time',
      161: 'Subscription Identifiers not supported',
      162: 'Wildcard Subscriptions not supported',
    }
    var h = (c, g) => {
      let { messageId: s } = g,
        o = g.cmd,
        u = null,
        i = c.outgoing[s] ? c.outgoing[s].cb : null,
        a = null
      if (!i) {
        c.log('_handleAck :: Server sent an ack in error. Ignoring.')
        return
      }
      switch ((c.log('_handleAck :: packet type', o), o)) {
        case 'pubcomp':
        case 'puback': {
          let d = g.reasonCode
          d && d > 0 && d !== 16
            ? ((a = new p.ErrorWithReasonCode(
                `Publish error: ${y.ReasonCodes[d]}`,
                d
              )),
              c._removeOutgoingAndStoreMessage(s, () => {
                i(a, g)
              }))
            : c._removeOutgoingAndStoreMessage(s, i)
          break
        }
        case 'pubrec': {
          u = { cmd: 'pubrel', qos: 2, messageId: s }
          let d = g.reasonCode
          d && d > 0 && d !== 16
            ? ((a = new p.ErrorWithReasonCode(
                `Publish error: ${y.ReasonCodes[d]}`,
                d
              )),
              c._removeOutgoingAndStoreMessage(s, () => {
                i(a, g)
              }))
            : c._sendPacket(u)
          break
        }
        case 'suback': {
          ;(delete c.outgoing[s], c.messageIdProvider.deallocate(s))
          let d = g.granted
          for (let v = 0; v < d.length; v++) {
            let S = d[v]
            if ((S & 128) !== 0) {
              ;((a = new Error(`Subscribe error: ${y.ReasonCodes[S]}`)),
                (a.code = S))
              let E = c.messageIdToTopic[s]
              E &&
                E.forEach((b) => {
                  delete c._resubscribeTopics[b]
                })
            }
          }
          ;(delete c.messageIdToTopic[s],
            c._invokeStoreProcessingQueue(),
            i(a, g))
          break
        }
        case 'unsuback': {
          ;(delete c.outgoing[s],
            c.messageIdProvider.deallocate(s),
            c._invokeStoreProcessingQueue(),
            i(null, g))
          break
        }
        default:
          c.emit('error', new Error('unrecognized packet type'))
      }
      c.disconnecting &&
        Object.keys(c.outgoing).length === 0 &&
        c.emit('outgoingEmpty')
    }
    y.default = h
  }),
  I1 = Ue((y) => {
    ;(Te(), xe(), Oe(), Object.defineProperty(y, '__esModule', { value: !0 }))
    var p = pa(),
      h = ss(),
      c = (g, s) => {
        let { options: o } = g,
          u = o.protocolVersion,
          i = u === 5 ? s.reasonCode : s.returnCode
        if (u !== 5) {
          let a = new p.ErrorWithReasonCode(
            `Protocol error: Auth packets are only supported in MQTT 5. Your version:${u}`,
            i
          )
          g.emit('error', a)
          return
        }
        g.handleAuth(s, (a, d) => {
          if (a) {
            g.emit('error', a)
            return
          }
          if (i === 24) ((g.reconnecting = !1), g._sendPacket(d))
          else {
            let v = new p.ErrorWithReasonCode(
              `Connection refused: ${h.ReasonCodes[i]}`,
              i
            )
            g.emit('error', v)
          }
        })
      }
    y.default = c
  }),
  z1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, '__esModule', { value: !0 }),
      (y.LRUCache = void 0))
    var p =
        typeof performance == 'object' &&
        performance &&
        typeof performance.now == 'function'
          ? performance
          : Date,
      h = new Set(),
      c = typeof bt == 'object' && bt ? bt : {},
      g = (E, b, w, A) => {
        typeof c.emitWarning == 'function'
          ? c.emitWarning(E, b, w, A)
          : console.error(`[${w}] ${b}: ${E}`)
      },
      s = globalThis.AbortController,
      o = globalThis.AbortSignal
    if (typeof s > 'u') {
      ;((o = class {
        onabort
        _onabort = []
        reason
        aborted = !1
        addEventListener(w, A) {
          this._onabort.push(A)
        }
      }),
        (s = class {
          constructor() {
            b()
          }
          signal = new o()
          abort(w) {
            if (!this.signal.aborted) {
              ;((this.signal.reason = w), (this.signal.aborted = !0))
              for (let A of this.signal._onabort) A(w)
              this.signal.onabort?.(w)
            }
          }
        }))
      let E = c.env?.LRU_CACHE_IGNORE_AC_WARNING !== '1',
        b = () => {
          E &&
            ((E = !1),
            g(
              'AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.',
              'NO_ABORT_CONTROLLER',
              'ENOTSUP',
              b
            ))
        }
    }
    var u = (E) => !h.has(E),
      i = (E) => E && E === Math.floor(E) && E > 0 && isFinite(E),
      a = (E) =>
        i(E)
          ? E <= Math.pow(2, 8)
            ? Uint8Array
            : E <= Math.pow(2, 16)
              ? Uint16Array
              : E <= Math.pow(2, 32)
                ? Uint32Array
                : E <= Number.MAX_SAFE_INTEGER
                  ? d
                  : null
          : null,
      d = class extends Array {
        constructor(E) {
          ;(super(E), this.fill(0))
        }
      },
      v = class ul {
        heap
        length
        static #s = !1
        static create(b) {
          let w = a(b)
          if (!w) return []
          ul.#s = !0
          let A = new ul(b, w)
          return ((ul.#s = !1), A)
        }
        constructor(b, w) {
          if (!ul.#s)
            throw new TypeError('instantiate Stack using Stack.create(n)')
          ;((this.heap = new w(b)), (this.length = 0))
        }
        push(b) {
          this.heap[this.length++] = b
        }
        pop() {
          return this.heap[--this.length]
        }
      },
      S = class zb {
        #s
        #f
        #y
        #g
        #C
        #j
        ttl
        ttlResolution
        ttlAutopurge
        updateAgeOnGet
        updateAgeOnHas
        allowStale
        noDisposeOnSet
        noUpdateTTL
        maxEntrySize
        sizeCalculation
        noDeleteOnFetchRejection
        noDeleteOnStaleGet
        allowStaleOnFetchAbort
        allowStaleOnFetchRejection
        ignoreFetchAbort
        #i
        #m
        #n
        #r
        #e
        #u
        #h
        #o
        #a
        #b
        #l
        #v
        #_
        #d
        #S
        #O
        #c
        static unsafeExposeInternals(b) {
          return {
            starts: b.#_,
            ttls: b.#d,
            sizes: b.#v,
            keyMap: b.#n,
            keyList: b.#r,
            valList: b.#e,
            next: b.#u,
            prev: b.#h,
            get head() {
              return b.#o
            },
            get tail() {
              return b.#a
            },
            free: b.#b,
            isBackgroundFetch: (w) => b.#t(w),
            backgroundFetch: (w, A, M, _) => b.#D(w, A, M, _),
            moveToTail: (w) => b.#R(w),
            indexes: (w) => b.#w(w),
            rindexes: (w) => b.#E(w),
            isStale: (w) => b.#p(w),
          }
        }
        get max() {
          return this.#s
        }
        get maxSize() {
          return this.#f
        }
        get calculatedSize() {
          return this.#m
        }
        get size() {
          return this.#i
        }
        get fetchMethod() {
          return this.#C
        }
        get memoMethod() {
          return this.#j
        }
        get dispose() {
          return this.#y
        }
        get disposeAfter() {
          return this.#g
        }
        constructor(b) {
          let {
            max: w = 0,
            ttl: A,
            ttlResolution: M = 1,
            ttlAutopurge: _,
            updateAgeOnGet: O,
            updateAgeOnHas: N,
            allowStale: T,
            dispose: j,
            disposeAfter: x,
            noDisposeOnSet: k,
            noUpdateTTL: q,
            maxSize: H = 0,
            maxEntrySize: X = 0,
            sizeCalculation: I,
            fetchMethod: ee,
            memoMethod: J,
            noDeleteOnFetchRejection: $,
            noDeleteOnStaleGet: K,
            allowStaleOnFetchRejection: P,
            allowStaleOnFetchAbort: F,
            ignoreFetchAbort: ce,
          } = b
          if (w !== 0 && !i(w))
            throw new TypeError('max option must be a nonnegative integer')
          let V = w ? a(w) : Array
          if (!V) throw new Error('invalid max value: ' + w)
          if (
            ((this.#s = w),
            (this.#f = H),
            (this.maxEntrySize = X || this.#f),
            (this.sizeCalculation = I),
            this.sizeCalculation)
          ) {
            if (!this.#f && !this.maxEntrySize)
              throw new TypeError(
                'cannot set sizeCalculation without setting maxSize or maxEntrySize'
              )
            if (typeof this.sizeCalculation != 'function')
              throw new TypeError('sizeCalculation set to non-function')
          }
          if (J !== void 0 && typeof J != 'function')
            throw new TypeError('memoMethod must be a function if defined')
          if (((this.#j = J), ee !== void 0 && typeof ee != 'function'))
            throw new TypeError('fetchMethod must be a function if specified')
          if (
            ((this.#C = ee),
            (this.#O = !!ee),
            (this.#n = new Map()),
            (this.#r = new Array(w).fill(void 0)),
            (this.#e = new Array(w).fill(void 0)),
            (this.#u = new V(w)),
            (this.#h = new V(w)),
            (this.#o = 0),
            (this.#a = 0),
            (this.#b = v.create(w)),
            (this.#i = 0),
            (this.#m = 0),
            typeof j == 'function' && (this.#y = j),
            typeof x == 'function'
              ? ((this.#g = x), (this.#l = []))
              : ((this.#g = void 0), (this.#l = void 0)),
            (this.#S = !!this.#y),
            (this.#c = !!this.#g),
            (this.noDisposeOnSet = !!k),
            (this.noUpdateTTL = !!q),
            (this.noDeleteOnFetchRejection = !!$),
            (this.allowStaleOnFetchRejection = !!P),
            (this.allowStaleOnFetchAbort = !!F),
            (this.ignoreFetchAbort = !!ce),
            this.maxEntrySize !== 0)
          ) {
            if (this.#f !== 0 && !i(this.#f))
              throw new TypeError(
                'maxSize must be a positive integer if specified'
              )
            if (!i(this.maxEntrySize))
              throw new TypeError(
                'maxEntrySize must be a positive integer if specified'
              )
            this.#H()
          }
          if (
            ((this.allowStale = !!T),
            (this.noDeleteOnStaleGet = !!K),
            (this.updateAgeOnGet = !!O),
            (this.updateAgeOnHas = !!N),
            (this.ttlResolution = i(M) || M === 0 ? M : 1),
            (this.ttlAutopurge = !!_),
            (this.ttl = A || 0),
            this.ttl)
          ) {
            if (!i(this.ttl))
              throw new TypeError('ttl must be a positive integer if specified')
            this.#B()
          }
          if (this.#s === 0 && this.ttl === 0 && this.#f === 0)
            throw new TypeError(
              'At least one of max, maxSize, or ttl is required'
            )
          if (!this.ttlAutopurge && !this.#s && !this.#f) {
            let B = 'LRU_CACHE_UNBOUNDED'
            u(B) &&
              (h.add(B),
              g(
                'TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.',
                'UnboundedCacheWarning',
                B,
                zb
              ))
          }
        }
        getRemainingTTL(b) {
          return this.#n.has(b) ? 1 / 0 : 0
        }
        #B() {
          let b = new d(this.#s),
            w = new d(this.#s)
          ;((this.#d = b),
            (this.#_ = w),
            (this.#k = (_, O, N = p.now()) => {
              if (
                ((w[_] = O !== 0 ? N : 0),
                (b[_] = O),
                O !== 0 && this.ttlAutopurge)
              ) {
                let T = setTimeout(() => {
                  this.#p(_) && this.#A(this.#r[_], 'expire')
                }, O + 1)
                T.unref && T.unref()
              }
            }),
            (this.#x = (_) => {
              w[_] = b[_] !== 0 ? p.now() : 0
            }),
            (this.#T = (_, O) => {
              if (b[O]) {
                let N = b[O],
                  T = w[O]
                if (!N || !T) return
                ;((_.ttl = N), (_.start = T), (_.now = A || M()))
                let j = _.now - T
                _.remainingTTL = N - j
              }
            }))
          let A = 0,
            M = () => {
              let _ = p.now()
              if (this.ttlResolution > 0) {
                A = _
                let O = setTimeout(() => (A = 0), this.ttlResolution)
                O.unref && O.unref()
              }
              return _
            }
          ;((this.getRemainingTTL = (_) => {
            let O = this.#n.get(_)
            if (O === void 0) return 0
            let N = b[O],
              T = w[O]
            if (!N || !T) return 1 / 0
            let j = (A || M()) - T
            return N - j
          }),
            (this.#p = (_) => {
              let O = w[_],
                N = b[_]
              return !!N && !!O && (A || M()) - O > N
            }))
        }
        #x = () => {}
        #T = () => {}
        #k = () => {}
        #p = () => !1
        #H() {
          let b = new d(this.#s)
          ;((this.#m = 0),
            (this.#v = b),
            (this.#M = (w) => {
              ;((this.#m -= b[w]), (b[w] = 0))
            }),
            (this.#L = (w, A, M, _) => {
              if (this.#t(A)) return 0
              if (!i(M))
                if (_) {
                  if (typeof _ != 'function')
                    throw new TypeError('sizeCalculation must be a function')
                  if (((M = _(A, w)), !i(M)))
                    throw new TypeError(
                      'sizeCalculation return invalid (expect positive integer)'
                    )
                } else
                  throw new TypeError(
                    'invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.'
                  )
              return M
            }),
            (this.#N = (w, A, M) => {
              if (((b[w] = A), this.#f)) {
                let _ = this.#f - b[w]
                for (; this.#m > _; ) this.#U(!0)
              }
              ;((this.#m += b[w]),
                M && ((M.entrySize = A), (M.totalCalculatedSize = this.#m)))
            }))
        }
        #M = (b) => {}
        #N = (b, w, A) => {}
        #L = (b, w, A, M) => {
          if (A || M)
            throw new TypeError(
              'cannot set size without setting maxSize or maxEntrySize on cache'
            )
          return 0
        };
        *#w({ allowStale: b = this.allowStale } = {}) {
          if (this.#i)
            for (
              let w = this.#a;
              !(
                !this.#I(w) || ((b || !this.#p(w)) && (yield w), w === this.#o)
              );
            )
              w = this.#h[w]
        }
        *#E({ allowStale: b = this.allowStale } = {}) {
          if (this.#i)
            for (
              let w = this.#o;
              !(
                !this.#I(w) || ((b || !this.#p(w)) && (yield w), w === this.#a)
              );
            )
              w = this.#u[w]
        }
        #I(b) {
          return b !== void 0 && this.#n.get(this.#r[b]) === b
        }
        *entries() {
          for (let b of this.#w())
            this.#e[b] !== void 0 &&
              this.#r[b] !== void 0 &&
              !this.#t(this.#e[b]) &&
              (yield [this.#r[b], this.#e[b]])
        }
        *rentries() {
          for (let b of this.#E())
            this.#e[b] !== void 0 &&
              this.#r[b] !== void 0 &&
              !this.#t(this.#e[b]) &&
              (yield [this.#r[b], this.#e[b]])
        }
        *keys() {
          for (let b of this.#w()) {
            let w = this.#r[b]
            w !== void 0 && !this.#t(this.#e[b]) && (yield w)
          }
        }
        *rkeys() {
          for (let b of this.#E()) {
            let w = this.#r[b]
            w !== void 0 && !this.#t(this.#e[b]) && (yield w)
          }
        }
        *values() {
          for (let b of this.#w())
            this.#e[b] !== void 0 && !this.#t(this.#e[b]) && (yield this.#e[b])
        }
        *rvalues() {
          for (let b of this.#E())
            this.#e[b] !== void 0 && !this.#t(this.#e[b]) && (yield this.#e[b])
        }
        [Symbol.iterator]() {
          return this.entries()
        }
        [Symbol.toStringTag] = 'LRUCache'
        find(b, w = {}) {
          for (let A of this.#w()) {
            let M = this.#e[A],
              _ = this.#t(M) ? M.__staleWhileFetching : M
            if (_ !== void 0 && b(_, this.#r[A], this))
              return this.get(this.#r[A], w)
          }
        }
        forEach(b, w = this) {
          for (let A of this.#w()) {
            let M = this.#e[A],
              _ = this.#t(M) ? M.__staleWhileFetching : M
            _ !== void 0 && b.call(w, _, this.#r[A], this)
          }
        }
        rforEach(b, w = this) {
          for (let A of this.#E()) {
            let M = this.#e[A],
              _ = this.#t(M) ? M.__staleWhileFetching : M
            _ !== void 0 && b.call(w, _, this.#r[A], this)
          }
        }
        purgeStale() {
          let b = !1
          for (let w of this.#E({ allowStale: !0 }))
            this.#p(w) && (this.#A(this.#r[w], 'expire'), (b = !0))
          return b
        }
        info(b) {
          let w = this.#n.get(b)
          if (w === void 0) return
          let A = this.#e[w],
            M = this.#t(A) ? A.__staleWhileFetching : A
          if (M === void 0) return
          let _ = { value: M }
          if (this.#d && this.#_) {
            let O = this.#d[w],
              N = this.#_[w]
            if (O && N) {
              let T = O - (p.now() - N)
              ;((_.ttl = T), (_.start = Date.now()))
            }
          }
          return (this.#v && (_.size = this.#v[w]), _)
        }
        dump() {
          let b = []
          for (let w of this.#w({ allowStale: !0 })) {
            let A = this.#r[w],
              M = this.#e[w],
              _ = this.#t(M) ? M.__staleWhileFetching : M
            if (_ === void 0 || A === void 0) continue
            let O = { value: _ }
            if (this.#d && this.#_) {
              O.ttl = this.#d[w]
              let N = p.now() - this.#_[w]
              O.start = Math.floor(Date.now() - N)
            }
            ;(this.#v && (O.size = this.#v[w]), b.unshift([A, O]))
          }
          return b
        }
        load(b) {
          this.clear()
          for (let [w, A] of b) {
            if (A.start) {
              let M = Date.now() - A.start
              A.start = p.now() - M
            }
            this.set(w, A.value, A)
          }
        }
        set(b, w, A = {}) {
          if (w === void 0) return (this.delete(b), this)
          let {
              ttl: M = this.ttl,
              start: _,
              noDisposeOnSet: O = this.noDisposeOnSet,
              sizeCalculation: N = this.sizeCalculation,
              status: T,
            } = A,
            { noUpdateTTL: j = this.noUpdateTTL } = A,
            x = this.#L(b, w, A.size || 0, N)
          if (this.maxEntrySize && x > this.maxEntrySize)
            return (
              T && ((T.set = 'miss'), (T.maxEntrySizeExceeded = !0)),
              this.#A(b, 'set'),
              this
            )
          let k = this.#i === 0 ? void 0 : this.#n.get(b)
          if (k === void 0)
            ((k =
              this.#i === 0
                ? this.#a
                : this.#b.length !== 0
                  ? this.#b.pop()
                  : this.#i === this.#s
                    ? this.#U(!1)
                    : this.#i),
              (this.#r[k] = b),
              (this.#e[k] = w),
              this.#n.set(b, k),
              (this.#u[this.#a] = k),
              (this.#h[k] = this.#a),
              (this.#a = k),
              this.#i++,
              this.#N(k, x, T),
              T && (T.set = 'add'),
              (j = !1))
          else {
            this.#R(k)
            let q = this.#e[k]
            if (w !== q) {
              if (this.#O && this.#t(q)) {
                q.__abortController.abort(new Error('replaced'))
                let { __staleWhileFetching: H } = q
                H !== void 0 &&
                  !O &&
                  (this.#S && this.#y?.(H, b, 'set'),
                  this.#c && this.#l?.push([H, b, 'set']))
              } else
                O ||
                  (this.#S && this.#y?.(q, b, 'set'),
                  this.#c && this.#l?.push([q, b, 'set']))
              if ((this.#M(k), this.#N(k, x, T), (this.#e[k] = w), T)) {
                T.set = 'replace'
                let H = q && this.#t(q) ? q.__staleWhileFetching : q
                H !== void 0 && (T.oldValue = H)
              }
            } else T && (T.set = 'update')
          }
          if (
            (M !== 0 && !this.#d && this.#B(),
            this.#d && (j || this.#k(k, M, _), T && this.#T(T, k)),
            !O && this.#c && this.#l)
          ) {
            let q = this.#l,
              H
            for (; (H = q?.shift()); ) this.#g?.(...H)
          }
          return this
        }
        pop() {
          try {
            for (; this.#i; ) {
              let b = this.#e[this.#o]
              if ((this.#U(!0), this.#t(b))) {
                if (b.__staleWhileFetching) return b.__staleWhileFetching
              } else if (b !== void 0) return b
            }
          } finally {
            if (this.#c && this.#l) {
              let b = this.#l,
                w
              for (; (w = b?.shift()); ) this.#g?.(...w)
            }
          }
        }
        #U(b) {
          let w = this.#o,
            A = this.#r[w],
            M = this.#e[w]
          return (
            this.#O && this.#t(M)
              ? M.__abortController.abort(new Error('evicted'))
              : (this.#S || this.#c) &&
                (this.#S && this.#y?.(M, A, 'evict'),
                this.#c && this.#l?.push([M, A, 'evict'])),
            this.#M(w),
            b &&
              ((this.#r[w] = void 0), (this.#e[w] = void 0), this.#b.push(w)),
            this.#i === 1
              ? ((this.#o = this.#a = 0), (this.#b.length = 0))
              : (this.#o = this.#u[w]),
            this.#n.delete(A),
            this.#i--,
            w
          )
        }
        has(b, w = {}) {
          let { updateAgeOnHas: A = this.updateAgeOnHas, status: M } = w,
            _ = this.#n.get(b)
          if (_ !== void 0) {
            let O = this.#e[_]
            if (this.#t(O) && O.__staleWhileFetching === void 0) return !1
            if (this.#p(_)) M && ((M.has = 'stale'), this.#T(M, _))
            else
              return (
                A && this.#x(_),
                M && ((M.has = 'hit'), this.#T(M, _)),
                !0
              )
          } else M && (M.has = 'miss')
          return !1
        }
        peek(b, w = {}) {
          let { allowStale: A = this.allowStale } = w,
            M = this.#n.get(b)
          if (M === void 0 || (!A && this.#p(M))) return
          let _ = this.#e[M]
          return this.#t(_) ? _.__staleWhileFetching : _
        }
        #D(b, w, A, M) {
          let _ = w === void 0 ? void 0 : this.#e[w]
          if (this.#t(_)) return _
          let O = new s(),
            { signal: N } = A
          N?.addEventListener('abort', () => O.abort(N.reason), {
            signal: O.signal,
          })
          let T = { signal: O.signal, options: A, context: M },
            j = (I, ee = !1) => {
              let { aborted: J } = O.signal,
                $ = A.ignoreFetchAbort && I !== void 0
              if (
                (A.status &&
                  (J && !ee
                    ? ((A.status.fetchAborted = !0),
                      (A.status.fetchError = O.signal.reason),
                      $ && (A.status.fetchAbortIgnored = !0))
                    : (A.status.fetchResolved = !0)),
                J && !$ && !ee)
              )
                return k(O.signal.reason)
              let K = H
              return (
                this.#e[w] === H &&
                  (I === void 0
                    ? K.__staleWhileFetching
                      ? (this.#e[w] = K.__staleWhileFetching)
                      : this.#A(b, 'fetch')
                    : (A.status && (A.status.fetchUpdated = !0),
                      this.set(b, I, T.options))),
                I
              )
            },
            x = (I) => (
              A.status &&
                ((A.status.fetchRejected = !0), (A.status.fetchError = I)),
              k(I)
            ),
            k = (I) => {
              let { aborted: ee } = O.signal,
                J = ee && A.allowStaleOnFetchAbort,
                $ = J || A.allowStaleOnFetchRejection,
                K = $ || A.noDeleteOnFetchRejection,
                P = H
              if (
                (this.#e[w] === H &&
                  (!K || P.__staleWhileFetching === void 0
                    ? this.#A(b, 'fetch')
                    : J || (this.#e[w] = P.__staleWhileFetching)),
                $)
              )
                return (
                  A.status &&
                    P.__staleWhileFetching !== void 0 &&
                    (A.status.returnedStale = !0),
                  P.__staleWhileFetching
                )
              if (P.__returned === P) throw I
            },
            q = (I, ee) => {
              let J = this.#C?.(b, _, T)
              ;(J &&
                J instanceof Promise &&
                J.then(($) => I($ === void 0 ? void 0 : $), ee),
                O.signal.addEventListener('abort', () => {
                  ;(!A.ignoreFetchAbort || A.allowStaleOnFetchAbort) &&
                    (I(void 0),
                    A.allowStaleOnFetchAbort && (I = ($) => j($, !0)))
                }))
            }
          A.status && (A.status.fetchDispatched = !0)
          let H = new Promise(q).then(j, x),
            X = Object.assign(H, {
              __abortController: O,
              __staleWhileFetching: _,
              __returned: void 0,
            })
          return (
            w === void 0
              ? (this.set(b, X, { ...T.options, status: void 0 }),
                (w = this.#n.get(b)))
              : (this.#e[w] = X),
            X
          )
        }
        #t(b) {
          if (!this.#O) return !1
          let w = b
          return (
            !!w &&
            w instanceof Promise &&
            w.hasOwnProperty('__staleWhileFetching') &&
            w.__abortController instanceof s
          )
        }
        async fetch(b, w = {}) {
          let {
            allowStale: A = this.allowStale,
            updateAgeOnGet: M = this.updateAgeOnGet,
            noDeleteOnStaleGet: _ = this.noDeleteOnStaleGet,
            ttl: O = this.ttl,
            noDisposeOnSet: N = this.noDisposeOnSet,
            size: T = 0,
            sizeCalculation: j = this.sizeCalculation,
            noUpdateTTL: x = this.noUpdateTTL,
            noDeleteOnFetchRejection: k = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: q = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: H = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: X = this.allowStaleOnFetchAbort,
            context: I,
            forceRefresh: ee = !1,
            status: J,
            signal: $,
          } = w
          if (!this.#O)
            return (
              J && (J.fetch = 'get'),
              this.get(b, {
                allowStale: A,
                updateAgeOnGet: M,
                noDeleteOnStaleGet: _,
                status: J,
              })
            )
          let K = {
              allowStale: A,
              updateAgeOnGet: M,
              noDeleteOnStaleGet: _,
              ttl: O,
              noDisposeOnSet: N,
              size: T,
              sizeCalculation: j,
              noUpdateTTL: x,
              noDeleteOnFetchRejection: k,
              allowStaleOnFetchRejection: q,
              allowStaleOnFetchAbort: X,
              ignoreFetchAbort: H,
              status: J,
              signal: $,
            },
            P = this.#n.get(b)
          if (P === void 0) {
            J && (J.fetch = 'miss')
            let F = this.#D(b, P, K, I)
            return (F.__returned = F)
          } else {
            let F = this.#e[P]
            if (this.#t(F)) {
              let D = A && F.__staleWhileFetching !== void 0
              return (
                J && ((J.fetch = 'inflight'), D && (J.returnedStale = !0)),
                D ? F.__staleWhileFetching : (F.__returned = F)
              )
            }
            let ce = this.#p(P)
            if (!ee && !ce)
              return (
                J && (J.fetch = 'hit'),
                this.#R(P),
                M && this.#x(P),
                J && this.#T(J, P),
                F
              )
            let V = this.#D(b, P, K, I),
              B = V.__staleWhileFetching !== void 0 && A
            return (
              J &&
                ((J.fetch = ce ? 'stale' : 'refresh'),
                B && ce && (J.returnedStale = !0)),
              B ? V.__staleWhileFetching : (V.__returned = V)
            )
          }
        }
        async forceFetch(b, w = {}) {
          let A = await this.fetch(b, w)
          if (A === void 0) throw new Error('fetch() returned undefined')
          return A
        }
        memo(b, w = {}) {
          let A = this.#j
          if (!A) throw new Error('no memoMethod provided to constructor')
          let { context: M, forceRefresh: _, ...O } = w,
            N = this.get(b, O)
          if (!_ && N !== void 0) return N
          let T = A(b, N, { options: O, context: M })
          return (this.set(b, T, O), T)
        }
        get(b, w = {}) {
          let {
              allowStale: A = this.allowStale,
              updateAgeOnGet: M = this.updateAgeOnGet,
              noDeleteOnStaleGet: _ = this.noDeleteOnStaleGet,
              status: O,
            } = w,
            N = this.#n.get(b)
          if (N !== void 0) {
            let T = this.#e[N],
              j = this.#t(T)
            return (
              O && this.#T(O, N),
              this.#p(N)
                ? (O && (O.get = 'stale'),
                  j
                    ? (O &&
                        A &&
                        T.__staleWhileFetching !== void 0 &&
                        (O.returnedStale = !0),
                      A ? T.__staleWhileFetching : void 0)
                    : (_ || this.#A(b, 'expire'),
                      O && A && (O.returnedStale = !0),
                      A ? T : void 0))
                : (O && (O.get = 'hit'),
                  j ? T.__staleWhileFetching : (this.#R(N), M && this.#x(N), T))
            )
          } else O && (O.get = 'miss')
        }
        #z(b, w) {
          ;((this.#h[w] = b), (this.#u[b] = w))
        }
        #R(b) {
          b !== this.#a &&
            (b === this.#o
              ? (this.#o = this.#u[b])
              : this.#z(this.#h[b], this.#u[b]),
            this.#z(this.#a, b),
            (this.#a = b))
        }
        delete(b) {
          return this.#A(b, 'delete')
        }
        #A(b, w) {
          let A = !1
          if (this.#i !== 0) {
            let M = this.#n.get(b)
            if (M !== void 0)
              if (((A = !0), this.#i === 1)) this.#q(w)
              else {
                this.#M(M)
                let _ = this.#e[M]
                if (
                  (this.#t(_)
                    ? _.__abortController.abort(new Error('deleted'))
                    : (this.#S || this.#c) &&
                      (this.#S && this.#y?.(_, b, w),
                      this.#c && this.#l?.push([_, b, w])),
                  this.#n.delete(b),
                  (this.#r[M] = void 0),
                  (this.#e[M] = void 0),
                  M === this.#a)
                )
                  this.#a = this.#h[M]
                else if (M === this.#o) this.#o = this.#u[M]
                else {
                  let O = this.#h[M]
                  this.#u[O] = this.#u[M]
                  let N = this.#u[M]
                  this.#h[N] = this.#h[M]
                }
                ;(this.#i--, this.#b.push(M))
              }
          }
          if (this.#c && this.#l?.length) {
            let M = this.#l,
              _
            for (; (_ = M?.shift()); ) this.#g?.(..._)
          }
          return A
        }
        clear() {
          return this.#q('delete')
        }
        #q(b) {
          for (let w of this.#E({ allowStale: !0 })) {
            let A = this.#e[w]
            if (this.#t(A)) A.__abortController.abort(new Error('deleted'))
            else {
              let M = this.#r[w]
              ;(this.#S && this.#y?.(A, M, b),
                this.#c && this.#l?.push([A, M, b]))
            }
          }
          if (
            (this.#n.clear(),
            this.#e.fill(void 0),
            this.#r.fill(void 0),
            this.#d && this.#_ && (this.#d.fill(0), this.#_.fill(0)),
            this.#v && this.#v.fill(0),
            (this.#o = 0),
            (this.#a = 0),
            (this.#b.length = 0),
            (this.#m = 0),
            (this.#i = 0),
            this.#c && this.#l)
          ) {
            let w = this.#l,
              A
            for (; (A = w?.shift()); ) this.#g?.(...A)
          }
        }
      }
    y.LRUCache = S
  }),
  En = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.ContainerIterator = y.Container = y.Base = void 0))
    var p = class {
      constructor(g = 0) {
        this.iteratorType = g
      }
      equals(g) {
        return this.o === g.o
      }
    }
    y.ContainerIterator = p
    var h = class {
      constructor() {
        this.i = 0
      }
      get length() {
        return this.i
      }
      size() {
        return this.i
      }
      empty() {
        return this.i === 0
      }
    }
    y.Base = h
    var c = class extends h {}
    y.Container = c
  }),
  q1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = En(),
      h = class extends p.Base {
        constructor(g = []) {
          ;(super(), (this.S = []))
          let s = this
          g.forEach(function (o) {
            s.push(o)
          })
        }
        clear() {
          ;((this.i = 0), (this.S = []))
        }
        push(g) {
          return (this.S.push(g), (this.i += 1), this.i)
        }
        pop() {
          if (this.i !== 0) return ((this.i -= 1), this.S.pop())
        }
        top() {
          return this.S[this.i - 1]
        }
      },
      c = h
    y.default = c
  }),
  H1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = En(),
      h = class extends p.Base {
        constructor(g = []) {
          ;(super(), (this.j = 0), (this.q = []))
          let s = this
          g.forEach(function (o) {
            s.push(o)
          })
        }
        clear() {
          ;((this.q = []), (this.i = this.j = 0))
        }
        push(g) {
          let s = this.q.length
          if (this.j / s > 0.5 && this.j + this.i >= s && s > 4096) {
            let o = this.i
            for (let u = 0; u < o; ++u) this.q[u] = this.q[this.j + u]
            ;((this.j = 0), (this.q[this.i] = g))
          } else this.q[this.j + this.i] = g
          return ++this.i
        }
        pop() {
          if (this.i === 0) return
          let g = this.q[this.j++]
          return ((this.i -= 1), g)
        }
        front() {
          if (this.i !== 0) return this.q[this.j]
        }
      },
      c = h
    y.default = c
  }),
  P1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = En(),
      h = class extends p.Base {
        constructor(
          g = [],
          s = function (u, i) {
            return u > i ? -1 : u < i ? 1 : 0
          },
          o = !0
        ) {
          if ((super(), (this.v = s), Array.isArray(g))) this.C = o ? [...g] : g
          else {
            this.C = []
            let i = this
            g.forEach(function (a) {
              i.C.push(a)
            })
          }
          this.i = this.C.length
          let u = this.i >> 1
          for (let i = (this.i - 1) >> 1; i >= 0; --i) this.k(i, u)
        }
        m(g) {
          let s = this.C[g]
          for (; g > 0; ) {
            let o = (g - 1) >> 1,
              u = this.C[o]
            if (this.v(u, s) <= 0) break
            ;((this.C[g] = u), (g = o))
          }
          this.C[g] = s
        }
        k(g, s) {
          let o = this.C[g]
          for (; g < s; ) {
            let u = (g << 1) | 1,
              i = u + 1,
              a = this.C[u]
            if (
              (i < this.i &&
                this.v(a, this.C[i]) > 0 &&
                ((u = i), (a = this.C[i])),
              this.v(a, o) >= 0)
            )
              break
            ;((this.C[g] = a), (g = u))
          }
          this.C[g] = o
        }
        clear() {
          ;((this.i = 0), (this.C.length = 0))
        }
        push(g) {
          ;(this.C.push(g), this.m(this.i), (this.i += 1))
        }
        pop() {
          if (this.i === 0) return
          let g = this.C[0],
            s = this.C.pop()
          return (
            (this.i -= 1),
            this.i && ((this.C[0] = s), this.k(0, this.i >> 1)),
            g
          )
        }
        top() {
          return this.C[0]
        }
        find(g) {
          return this.C.indexOf(g) >= 0
        }
        remove(g) {
          let s = this.C.indexOf(g)
          return s < 0
            ? !1
            : (s === 0
                ? this.pop()
                : s === this.i - 1
                  ? (this.C.pop(), (this.i -= 1))
                  : (this.C.splice(s, 1, this.C.pop()),
                    (this.i -= 1),
                    this.m(s),
                    this.k(s, this.i >> 1)),
              !0)
        }
        updateItem(g) {
          let s = this.C.indexOf(g)
          return s < 0 ? !1 : (this.m(s), this.k(s, this.i >> 1), !0)
        }
        toArray() {
          return [...this.C]
        }
      },
      c = h
    y.default = c
  }),
  kh = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = En(),
      h = class extends p.Container {},
      c = h
    y.default = c
  }),
  An = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.throwIteratorAccessError = p))
    function p() {
      throw new RangeError('Iterator access denied!')
    }
  }),
  qb = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.RandomIterator = void 0))
    var p = En(),
      h = An(),
      c = class extends p.ContainerIterator {
        constructor(g, s) {
          ;(super(s),
            (this.o = g),
            this.iteratorType === 0
              ? ((this.pre = function () {
                  return (
                    this.o === 0 && (0, h.throwIteratorAccessError)(),
                    (this.o -= 1),
                    this
                  )
                }),
                (this.next = function () {
                  return (
                    this.o === this.container.size() &&
                      (0, h.throwIteratorAccessError)(),
                    (this.o += 1),
                    this
                  )
                }))
              : ((this.pre = function () {
                  return (
                    this.o === this.container.size() - 1 &&
                      (0, h.throwIteratorAccessError)(),
                    (this.o += 1),
                    this
                  )
                }),
                (this.next = function () {
                  return (
                    this.o === -1 && (0, h.throwIteratorAccessError)(),
                    (this.o -= 1),
                    this
                  )
                })))
        }
        get pointer() {
          return this.container.getElementByPos(this.o)
        }
        set pointer(g) {
          this.container.setElementByPos(this.o, g)
        }
      }
    y.RandomIterator = c
  }),
  G1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = c(kh()),
      h = qb()
    function c(u) {
      return u && u.t ? u : { default: u }
    }
    var g = class Hb extends h.RandomIterator {
        constructor(i, a, d) {
          ;(super(i, d), (this.container = a))
        }
        copy() {
          return new Hb(this.o, this.container, this.iteratorType)
        }
      },
      s = class extends p.default {
        constructor(u = [], i = !0) {
          if ((super(), Array.isArray(u)))
            ((this.J = i ? [...u] : u), (this.i = u.length))
          else {
            this.J = []
            let a = this
            u.forEach(function (d) {
              a.pushBack(d)
            })
          }
        }
        clear() {
          ;((this.i = 0), (this.J.length = 0))
        }
        begin() {
          return new g(0, this)
        }
        end() {
          return new g(this.i, this)
        }
        rBegin() {
          return new g(this.i - 1, this, 1)
        }
        rEnd() {
          return new g(-1, this, 1)
        }
        front() {
          return this.J[0]
        }
        back() {
          return this.J[this.i - 1]
        }
        getElementByPos(u) {
          if (u < 0 || u > this.i - 1) throw new RangeError()
          return this.J[u]
        }
        eraseElementByPos(u) {
          if (u < 0 || u > this.i - 1) throw new RangeError()
          return (this.J.splice(u, 1), (this.i -= 1), this.i)
        }
        eraseElementByValue(u) {
          let i = 0
          for (let a = 0; a < this.i; ++a)
            this.J[a] !== u && (this.J[i++] = this.J[a])
          return ((this.i = this.J.length = i), this.i)
        }
        eraseElementByIterator(u) {
          let i = u.o
          return ((u = u.next()), this.eraseElementByPos(i), u)
        }
        pushBack(u) {
          return (this.J.push(u), (this.i += 1), this.i)
        }
        popBack() {
          if (this.i !== 0) return ((this.i -= 1), this.J.pop())
        }
        setElementByPos(u, i) {
          if (u < 0 || u > this.i - 1) throw new RangeError()
          this.J[u] = i
        }
        insert(u, i, a = 1) {
          if (u < 0 || u > this.i) throw new RangeError()
          return (
            this.J.splice(u, 0, ...new Array(a).fill(i)),
            (this.i += a),
            this.i
          )
        }
        find(u) {
          for (let i = 0; i < this.i; ++i)
            if (this.J[i] === u) return new g(i, this)
          return this.end()
        }
        reverse() {
          this.J.reverse()
        }
        unique() {
          let u = 1
          for (let i = 1; i < this.i; ++i)
            this.J[i] !== this.J[i - 1] && (this.J[u++] = this.J[i])
          return ((this.i = this.J.length = u), this.i)
        }
        sort(u) {
          this.J.sort(u)
        }
        forEach(u) {
          for (let i = 0; i < this.i; ++i) u(this.J[i], i, this)
        }
        [Symbol.iterator]() {
          return function* () {
            yield* this.J
          }.bind(this)()
        }
      },
      o = s
    y.default = o
  }),
  Y1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = g(kh()),
      h = En(),
      c = An()
    function g(i) {
      return i && i.t ? i : { default: i }
    }
    var s = class Pb extends h.ContainerIterator {
        constructor(a, d, v, S) {
          ;(super(S),
            (this.o = a),
            (this.h = d),
            (this.container = v),
            this.iteratorType === 0
              ? ((this.pre = function () {
                  return (
                    this.o.L === this.h && (0, c.throwIteratorAccessError)(),
                    (this.o = this.o.L),
                    this
                  )
                }),
                (this.next = function () {
                  return (
                    this.o === this.h && (0, c.throwIteratorAccessError)(),
                    (this.o = this.o.B),
                    this
                  )
                }))
              : ((this.pre = function () {
                  return (
                    this.o.B === this.h && (0, c.throwIteratorAccessError)(),
                    (this.o = this.o.B),
                    this
                  )
                }),
                (this.next = function () {
                  return (
                    this.o === this.h && (0, c.throwIteratorAccessError)(),
                    (this.o = this.o.L),
                    this
                  )
                })))
        }
        get pointer() {
          return (
            this.o === this.h && (0, c.throwIteratorAccessError)(),
            this.o.l
          )
        }
        set pointer(a) {
          ;(this.o === this.h && (0, c.throwIteratorAccessError)(),
            (this.o.l = a))
        }
        copy() {
          return new Pb(this.o, this.h, this.container, this.iteratorType)
        }
      },
      o = class extends p.default {
        constructor(i = []) {
          ;(super(),
            (this.h = {}),
            (this.p = this._ = this.h.L = this.h.B = this.h))
          let a = this
          i.forEach(function (d) {
            a.pushBack(d)
          })
        }
        V(i) {
          let { L: a, B: d } = i
          ;((a.B = d),
            (d.L = a),
            i === this.p && (this.p = d),
            i === this._ && (this._ = a),
            (this.i -= 1))
        }
        G(i, a) {
          let d = a.B,
            v = { l: i, L: a, B: d }
          ;((a.B = v),
            (d.L = v),
            a === this.h && (this.p = v),
            d === this.h && (this._ = v),
            (this.i += 1))
        }
        clear() {
          ;((this.i = 0), (this.p = this._ = this.h.L = this.h.B = this.h))
        }
        begin() {
          return new s(this.p, this.h, this)
        }
        end() {
          return new s(this.h, this.h, this)
        }
        rBegin() {
          return new s(this._, this.h, this, 1)
        }
        rEnd() {
          return new s(this.h, this.h, this, 1)
        }
        front() {
          return this.p.l
        }
        back() {
          return this._.l
        }
        getElementByPos(i) {
          if (i < 0 || i > this.i - 1) throw new RangeError()
          let a = this.p
          for (; i--; ) a = a.B
          return a.l
        }
        eraseElementByPos(i) {
          if (i < 0 || i > this.i - 1) throw new RangeError()
          let a = this.p
          for (; i--; ) a = a.B
          return (this.V(a), this.i)
        }
        eraseElementByValue(i) {
          let a = this.p
          for (; a !== this.h; ) (a.l === i && this.V(a), (a = a.B))
          return this.i
        }
        eraseElementByIterator(i) {
          let a = i.o
          return (
            a === this.h && (0, c.throwIteratorAccessError)(),
            (i = i.next()),
            this.V(a),
            i
          )
        }
        pushBack(i) {
          return (this.G(i, this._), this.i)
        }
        popBack() {
          if (this.i === 0) return
          let i = this._.l
          return (this.V(this._), i)
        }
        pushFront(i) {
          return (this.G(i, this.h), this.i)
        }
        popFront() {
          if (this.i === 0) return
          let i = this.p.l
          return (this.V(this.p), i)
        }
        setElementByPos(i, a) {
          if (i < 0 || i > this.i - 1) throw new RangeError()
          let d = this.p
          for (; i--; ) d = d.B
          d.l = a
        }
        insert(i, a, d = 1) {
          if (i < 0 || i > this.i) throw new RangeError()
          if (d <= 0) return this.i
          if (i === 0) for (; d--; ) this.pushFront(a)
          else if (i === this.i) for (; d--; ) this.pushBack(a)
          else {
            let v = this.p
            for (let E = 1; E < i; ++E) v = v.B
            let S = v.B
            for (this.i += d; d--; )
              ((v.B = { l: a, L: v }), (v.B.L = v), (v = v.B))
            ;((v.B = S), (S.L = v))
          }
          return this.i
        }
        find(i) {
          let a = this.p
          for (; a !== this.h; ) {
            if (a.l === i) return new s(a, this.h, this)
            a = a.B
          }
          return this.end()
        }
        reverse() {
          if (this.i <= 1) return
          let i = this.p,
            a = this._,
            d = 0
          for (; d << 1 < this.i; ) {
            let v = i.l
            ;((i.l = a.l), (a.l = v), (i = i.B), (a = a.L), (d += 1))
          }
        }
        unique() {
          if (this.i <= 1) return this.i
          let i = this.p
          for (; i !== this.h; ) {
            let a = i
            for (; a.B !== this.h && a.l === a.B.l; ) ((a = a.B), (this.i -= 1))
            ;((i.B = a.B), (i.B.L = i), (i = i.B))
          }
          return this.i
        }
        sort(i) {
          if (this.i <= 1) return
          let a = []
          ;(this.forEach(function (v) {
            a.push(v)
          }),
            a.sort(i))
          let d = this.p
          a.forEach(function (v) {
            ;((d.l = v), (d = d.B))
          })
        }
        merge(i) {
          let a = this
          if (this.i === 0)
            i.forEach(function (d) {
              a.pushBack(d)
            })
          else {
            let d = this.p
            i.forEach(function (v) {
              for (; d !== a.h && d.l <= v; ) d = d.B
              a.G(v, d.L)
            })
          }
          return this.i
        }
        forEach(i) {
          let a = this.p,
            d = 0
          for (; a !== this.h; ) (i(a.l, d++, this), (a = a.B))
        }
        [Symbol.iterator]() {
          return function* () {
            if (this.i === 0) return
            let i = this.p
            for (; i !== this.h; ) (yield i.l, (i = i.B))
          }.bind(this)()
        }
      },
      u = o
    y.default = u
  }),
  Q1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = c(kh()),
      h = qb()
    function c(u) {
      return u && u.t ? u : { default: u }
    }
    var g = class Gb extends h.RandomIterator {
        constructor(i, a, d) {
          ;(super(i, d), (this.container = a))
        }
        copy() {
          return new Gb(this.o, this.container, this.iteratorType)
        }
      },
      s = class extends p.default {
        constructor(u = [], i = 4096) {
          ;(super(),
            (this.j = 0),
            (this.D = 0),
            (this.R = 0),
            (this.N = 0),
            (this.P = 0),
            (this.A = []))
          let a = (() => {
            if (typeof u.length == 'number') return u.length
            if (typeof u.size == 'number') return u.size
            if (typeof u.size == 'function') return u.size()
            throw new TypeError(
              'Cannot get the length or size of the container'
            )
          })()
          ;((this.F = i), (this.P = Math.max(Math.ceil(a / this.F), 1)))
          for (let S = 0; S < this.P; ++S) this.A.push(new Array(this.F))
          let d = Math.ceil(a / this.F)
          ;((this.j = this.R = (this.P >> 1) - (d >> 1)),
            (this.D = this.N = (this.F - (a % this.F)) >> 1))
          let v = this
          u.forEach(function (S) {
            v.pushBack(S)
          })
        }
        T() {
          let u = [],
            i = Math.max(this.P >> 1, 1)
          for (let a = 0; a < i; ++a) u[a] = new Array(this.F)
          for (let a = this.j; a < this.P; ++a) u[u.length] = this.A[a]
          for (let a = 0; a < this.R; ++a) u[u.length] = this.A[a]
          ;((u[u.length] = [...this.A[this.R]]),
            (this.j = i),
            (this.R = u.length - 1))
          for (let a = 0; a < i; ++a) u[u.length] = new Array(this.F)
          ;((this.A = u), (this.P = u.length))
        }
        O(u) {
          let i = this.D + u + 1,
            a = i % this.F,
            d = a - 1,
            v = this.j + (i - a) / this.F
          return (
            a === 0 && (v -= 1),
            (v %= this.P),
            d < 0 && (d += this.F),
            { curNodeBucketIndex: v, curNodePointerIndex: d }
          )
        }
        clear() {
          ;((this.A = [new Array(this.F)]),
            (this.P = 1),
            (this.j = this.R = this.i = 0),
            (this.D = this.N = this.F >> 1))
        }
        begin() {
          return new g(0, this)
        }
        end() {
          return new g(this.i, this)
        }
        rBegin() {
          return new g(this.i - 1, this, 1)
        }
        rEnd() {
          return new g(-1, this, 1)
        }
        front() {
          if (this.i !== 0) return this.A[this.j][this.D]
        }
        back() {
          if (this.i !== 0) return this.A[this.R][this.N]
        }
        pushBack(u) {
          return (
            this.i &&
              (this.N < this.F - 1
                ? (this.N += 1)
                : this.R < this.P - 1
                  ? ((this.R += 1), (this.N = 0))
                  : ((this.R = 0), (this.N = 0)),
              this.R === this.j && this.N === this.D && this.T()),
            (this.i += 1),
            (this.A[this.R][this.N] = u),
            this.i
          )
        }
        popBack() {
          if (this.i === 0) return
          let u = this.A[this.R][this.N]
          return (
            this.i !== 1 &&
              (this.N > 0
                ? (this.N -= 1)
                : this.R > 0
                  ? ((this.R -= 1), (this.N = this.F - 1))
                  : ((this.R = this.P - 1), (this.N = this.F - 1))),
            (this.i -= 1),
            u
          )
        }
        pushFront(u) {
          return (
            this.i &&
              (this.D > 0
                ? (this.D -= 1)
                : this.j > 0
                  ? ((this.j -= 1), (this.D = this.F - 1))
                  : ((this.j = this.P - 1), (this.D = this.F - 1)),
              this.j === this.R && this.D === this.N && this.T()),
            (this.i += 1),
            (this.A[this.j][this.D] = u),
            this.i
          )
        }
        popFront() {
          if (this.i === 0) return
          let u = this.A[this.j][this.D]
          return (
            this.i !== 1 &&
              (this.D < this.F - 1
                ? (this.D += 1)
                : this.j < this.P - 1
                  ? ((this.j += 1), (this.D = 0))
                  : ((this.j = 0), (this.D = 0))),
            (this.i -= 1),
            u
          )
        }
        getElementByPos(u) {
          if (u < 0 || u > this.i - 1) throw new RangeError()
          let { curNodeBucketIndex: i, curNodePointerIndex: a } = this.O(u)
          return this.A[i][a]
        }
        setElementByPos(u, i) {
          if (u < 0 || u > this.i - 1) throw new RangeError()
          let { curNodeBucketIndex: a, curNodePointerIndex: d } = this.O(u)
          this.A[a][d] = i
        }
        insert(u, i, a = 1) {
          if (u < 0 || u > this.i) throw new RangeError()
          if (u === 0) for (; a--; ) this.pushFront(i)
          else if (u === this.i) for (; a--; ) this.pushBack(i)
          else {
            let d = []
            for (let v = u; v < this.i; ++v) d.push(this.getElementByPos(v))
            this.cut(u - 1)
            for (let v = 0; v < a; ++v) this.pushBack(i)
            for (let v = 0; v < d.length; ++v) this.pushBack(d[v])
          }
          return this.i
        }
        cut(u) {
          if (u < 0) return (this.clear(), 0)
          let { curNodeBucketIndex: i, curNodePointerIndex: a } = this.O(u)
          return ((this.R = i), (this.N = a), (this.i = u + 1), this.i)
        }
        eraseElementByPos(u) {
          if (u < 0 || u > this.i - 1) throw new RangeError()
          if (u === 0) this.popFront()
          else if (u === this.i - 1) this.popBack()
          else {
            let i = []
            for (let d = u + 1; d < this.i; ++d) i.push(this.getElementByPos(d))
            ;(this.cut(u), this.popBack())
            let a = this
            i.forEach(function (d) {
              a.pushBack(d)
            })
          }
          return this.i
        }
        eraseElementByValue(u) {
          if (this.i === 0) return 0
          let i = []
          for (let d = 0; d < this.i; ++d) {
            let v = this.getElementByPos(d)
            v !== u && i.push(v)
          }
          let a = i.length
          for (let d = 0; d < a; ++d) this.setElementByPos(d, i[d])
          return this.cut(a - 1)
        }
        eraseElementByIterator(u) {
          let i = u.o
          return (this.eraseElementByPos(i), (u = u.next()), u)
        }
        find(u) {
          for (let i = 0; i < this.i; ++i)
            if (this.getElementByPos(i) === u) return new g(i, this)
          return this.end()
        }
        reverse() {
          let u = 0,
            i = this.i - 1
          for (; u < i; ) {
            let a = this.getElementByPos(u)
            ;(this.setElementByPos(u, this.getElementByPos(i)),
              this.setElementByPos(i, a),
              (u += 1),
              (i -= 1))
          }
        }
        unique() {
          if (this.i <= 1) return this.i
          let u = 1,
            i = this.getElementByPos(0)
          for (let a = 1; a < this.i; ++a) {
            let d = this.getElementByPos(a)
            d !== i && ((i = d), this.setElementByPos(u++, d))
          }
          for (; this.i > u; ) this.popBack()
          return this.i
        }
        sort(u) {
          let i = []
          for (let a = 0; a < this.i; ++a) i.push(this.getElementByPos(a))
          i.sort(u)
          for (let a = 0; a < this.i; ++a) this.setElementByPos(a, i[a])
        }
        shrinkToFit() {
          if (this.i === 0) return
          let u = []
          ;(this.forEach(function (i) {
            u.push(i)
          }),
            (this.P = Math.max(Math.ceil(this.i / this.F), 1)),
            (this.i = this.j = this.R = this.D = this.N = 0),
            (this.A = []))
          for (let i = 0; i < this.P; ++i) this.A.push(new Array(this.F))
          for (let i = 0; i < u.length; ++i) this.pushBack(u[i])
        }
        forEach(u) {
          for (let i = 0; i < this.i; ++i) u(this.getElementByPos(i), i, this)
        }
        [Symbol.iterator]() {
          return function* () {
            for (let u = 0; u < this.i; ++u) yield this.getElementByPos(u)
          }.bind(this)()
        }
      },
      o = s
    y.default = o
  }),
  V1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.TreeNodeEnableIndex = y.TreeNode = void 0))
    var p = class {
      constructor(c, g) {
        ;((this.ee = 1),
          (this.u = void 0),
          (this.l = void 0),
          (this.U = void 0),
          (this.W = void 0),
          (this.tt = void 0),
          (this.u = c),
          (this.l = g))
      }
      L() {
        let c = this
        if (c.ee === 1 && c.tt.tt === c) c = c.W
        else if (c.U) for (c = c.U; c.W; ) c = c.W
        else {
          let g = c.tt
          for (; g.U === c; ) ((c = g), (g = c.tt))
          c = g
        }
        return c
      }
      B() {
        let c = this
        if (c.W) {
          for (c = c.W; c.U; ) c = c.U
          return c
        } else {
          let g = c.tt
          for (; g.W === c; ) ((c = g), (g = c.tt))
          return c.W !== g ? g : c
        }
      }
      te() {
        let c = this.tt,
          g = this.W,
          s = g.U
        return (
          c.tt === this ? (c.tt = g) : c.U === this ? (c.U = g) : (c.W = g),
          (g.tt = c),
          (g.U = this),
          (this.tt = g),
          (this.W = s),
          s && (s.tt = this),
          g
        )
      }
      se() {
        let c = this.tt,
          g = this.U,
          s = g.W
        return (
          c.tt === this ? (c.tt = g) : c.U === this ? (c.U = g) : (c.W = g),
          (g.tt = c),
          (g.W = this),
          (this.tt = g),
          (this.U = s),
          s && (s.tt = this),
          g
        )
      }
    }
    y.TreeNode = p
    var h = class extends p {
      constructor() {
        ;(super(...arguments), (this.rt = 1))
      }
      te() {
        let c = super.te()
        return (this.ie(), c.ie(), c)
      }
      se() {
        let c = super.se()
        return (this.ie(), c.ie(), c)
      }
      ie() {
        ;((this.rt = 1),
          this.U && (this.rt += this.U.rt),
          this.W && (this.rt += this.W.rt))
      }
    }
    y.TreeNodeEnableIndex = h
  }),
  Yb = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = V1(),
      h = En(),
      c = An(),
      g = class extends h.Container {
        constructor(
          o = function (i, a) {
            return i < a ? -1 : i > a ? 1 : 0
          },
          u = !1
        ) {
          ;(super(),
            (this.Y = void 0),
            (this.v = o),
            u
              ? ((this.re = p.TreeNodeEnableIndex),
                (this.M = function (i, a, d) {
                  let v = this.ne(i, a, d)
                  if (v) {
                    let S = v.tt
                    for (; S !== this.h; ) ((S.rt += 1), (S = S.tt))
                    let E = this.he(v)
                    if (E) {
                      let { parentNode: b, grandParent: w, curNode: A } = E
                      ;(b.ie(), w.ie(), A.ie())
                    }
                  }
                  return this.i
                }),
                (this.V = function (i) {
                  let a = this.fe(i)
                  for (; a !== this.h; ) ((a.rt -= 1), (a = a.tt))
                }))
              : ((this.re = p.TreeNode),
                (this.M = function (i, a, d) {
                  let v = this.ne(i, a, d)
                  return (v && this.he(v), this.i)
                }),
                (this.V = this.fe)),
            (this.h = new this.re()))
        }
        X(o, u) {
          let i = this.h
          for (; o; ) {
            let a = this.v(o.u, u)
            if (a < 0) o = o.W
            else if (a > 0) ((i = o), (o = o.U))
            else return o
          }
          return i
        }
        Z(o, u) {
          let i = this.h
          for (; o; ) this.v(o.u, u) <= 0 ? (o = o.W) : ((i = o), (o = o.U))
          return i
        }
        $(o, u) {
          let i = this.h
          for (; o; ) {
            let a = this.v(o.u, u)
            if (a < 0) ((i = o), (o = o.W))
            else if (a > 0) o = o.U
            else return o
          }
          return i
        }
        rr(o, u) {
          let i = this.h
          for (; o; ) this.v(o.u, u) < 0 ? ((i = o), (o = o.W)) : (o = o.U)
          return i
        }
        ue(o) {
          for (;;) {
            let u = o.tt
            if (u === this.h) return
            if (o.ee === 1) {
              o.ee = 0
              return
            }
            if (o === u.U) {
              let i = u.W
              if (i.ee === 1)
                ((i.ee = 0),
                  (u.ee = 1),
                  u === this.Y ? (this.Y = u.te()) : u.te())
              else if (i.W && i.W.ee === 1) {
                ;((i.ee = u.ee),
                  (u.ee = 0),
                  (i.W.ee = 0),
                  u === this.Y ? (this.Y = u.te()) : u.te())
                return
              } else
                i.U && i.U.ee === 1
                  ? ((i.ee = 1), (i.U.ee = 0), i.se())
                  : ((i.ee = 1), (o = u))
            } else {
              let i = u.U
              if (i.ee === 1)
                ((i.ee = 0),
                  (u.ee = 1),
                  u === this.Y ? (this.Y = u.se()) : u.se())
              else if (i.U && i.U.ee === 1) {
                ;((i.ee = u.ee),
                  (u.ee = 0),
                  (i.U.ee = 0),
                  u === this.Y ? (this.Y = u.se()) : u.se())
                return
              } else
                i.W && i.W.ee === 1
                  ? ((i.ee = 1), (i.W.ee = 0), i.te())
                  : ((i.ee = 1), (o = u))
            }
          }
        }
        fe(o) {
          if (this.i === 1) return (this.clear(), this.h)
          let u = o
          for (; u.U || u.W; ) {
            if (u.W) for (u = u.W; u.U; ) u = u.U
            else u = u.U
            ;(([o.u, u.u] = [u.u, o.u]), ([o.l, u.l] = [u.l, o.l]), (o = u))
          }
          ;(this.h.U === u
            ? (this.h.U = u.tt)
            : this.h.W === u && (this.h.W = u.tt),
            this.ue(u))
          let i = u.tt
          return (
            u === i.U ? (i.U = void 0) : (i.W = void 0),
            (this.i -= 1),
            (this.Y.ee = 0),
            i
          )
        }
        oe(o, u) {
          return o === void 0
            ? !1
            : this.oe(o.U, u) || u(o)
              ? !0
              : this.oe(o.W, u)
        }
        he(o) {
          for (;;) {
            let u = o.tt
            if (u.ee === 0) return
            let i = u.tt
            if (u === i.U) {
              let a = i.W
              if (a && a.ee === 1) {
                if (((a.ee = u.ee = 0), i === this.Y)) return
                ;((i.ee = 1), (o = i))
                continue
              } else if (o === u.W) {
                if (
                  ((o.ee = 0),
                  o.U && (o.U.tt = u),
                  o.W && (o.W.tt = i),
                  (u.W = o.U),
                  (i.U = o.W),
                  (o.U = u),
                  (o.W = i),
                  i === this.Y)
                )
                  ((this.Y = o), (this.h.tt = o))
                else {
                  let d = i.tt
                  d.U === i ? (d.U = o) : (d.W = o)
                }
                return (
                  (o.tt = i.tt),
                  (u.tt = o),
                  (i.tt = o),
                  (i.ee = 1),
                  { parentNode: u, grandParent: i, curNode: o }
                )
              } else
                ((u.ee = 0),
                  i === this.Y ? (this.Y = i.se()) : i.se(),
                  (i.ee = 1))
            } else {
              let a = i.U
              if (a && a.ee === 1) {
                if (((a.ee = u.ee = 0), i === this.Y)) return
                ;((i.ee = 1), (o = i))
                continue
              } else if (o === u.U) {
                if (
                  ((o.ee = 0),
                  o.U && (o.U.tt = i),
                  o.W && (o.W.tt = u),
                  (i.W = o.U),
                  (u.U = o.W),
                  (o.U = i),
                  (o.W = u),
                  i === this.Y)
                )
                  ((this.Y = o), (this.h.tt = o))
                else {
                  let d = i.tt
                  d.U === i ? (d.U = o) : (d.W = o)
                }
                return (
                  (o.tt = i.tt),
                  (u.tt = o),
                  (i.tt = o),
                  (i.ee = 1),
                  { parentNode: u, grandParent: i, curNode: o }
                )
              } else
                ((u.ee = 0),
                  i === this.Y ? (this.Y = i.te()) : i.te(),
                  (i.ee = 1))
            }
            return
          }
        }
        ne(o, u, i) {
          if (this.Y === void 0) {
            ;((this.i += 1),
              (this.Y = new this.re(o, u)),
              (this.Y.ee = 0),
              (this.Y.tt = this.h),
              (this.h.tt = this.Y),
              (this.h.U = this.Y),
              (this.h.W = this.Y))
            return
          }
          let a,
            d = this.h.U,
            v = this.v(d.u, o)
          if (v === 0) {
            d.l = u
            return
          } else if (v > 0)
            ((d.U = new this.re(o, u)), (d.U.tt = d), (a = d.U), (this.h.U = a))
          else {
            let S = this.h.W,
              E = this.v(S.u, o)
            if (E === 0) {
              S.l = u
              return
            } else if (E < 0)
              ((S.W = new this.re(o, u)),
                (S.W.tt = S),
                (a = S.W),
                (this.h.W = a))
            else {
              if (i !== void 0) {
                let b = i.o
                if (b !== this.h) {
                  let w = this.v(b.u, o)
                  if (w === 0) {
                    b.l = u
                    return
                  } else if (w > 0) {
                    let A = b.L(),
                      M = this.v(A.u, o)
                    if (M === 0) {
                      A.l = u
                      return
                    } else
                      M < 0 &&
                        ((a = new this.re(o, u)),
                        A.W === void 0
                          ? ((A.W = a), (a.tt = A))
                          : ((b.U = a), (a.tt = b)))
                  }
                }
              }
              if (a === void 0)
                for (a = this.Y; ; ) {
                  let b = this.v(a.u, o)
                  if (b > 0) {
                    if (a.U === void 0) {
                      ;((a.U = new this.re(o, u)), (a.U.tt = a), (a = a.U))
                      break
                    }
                    a = a.U
                  } else if (b < 0) {
                    if (a.W === void 0) {
                      ;((a.W = new this.re(o, u)), (a.W.tt = a), (a = a.W))
                      break
                    }
                    a = a.W
                  } else {
                    a.l = u
                    return
                  }
                }
            }
          }
          return ((this.i += 1), a)
        }
        I(o, u) {
          for (; o; ) {
            let i = this.v(o.u, u)
            if (i < 0) o = o.W
            else if (i > 0) o = o.U
            else return o
          }
          return o || this.h
        }
        clear() {
          ;((this.i = 0),
            (this.Y = void 0),
            (this.h.tt = void 0),
            (this.h.U = this.h.W = void 0))
        }
        updateKeyByIterator(o, u) {
          let i = o.o
          if ((i === this.h && (0, c.throwIteratorAccessError)(), this.i === 1))
            return ((i.u = u), !0)
          if (i === this.h.U)
            return this.v(i.B().u, u) > 0 ? ((i.u = u), !0) : !1
          if (i === this.h.W)
            return this.v(i.L().u, u) < 0 ? ((i.u = u), !0) : !1
          let a = i.L().u
          if (this.v(a, u) >= 0) return !1
          let d = i.B().u
          return this.v(d, u) <= 0 ? !1 : ((i.u = u), !0)
        }
        eraseElementByPos(o) {
          if (o < 0 || o > this.i - 1) throw new RangeError()
          let u = 0,
            i = this
          return (
            this.oe(this.Y, function (a) {
              return o === u ? (i.V(a), !0) : ((u += 1), !1)
            }),
            this.i
          )
        }
        eraseElementByKey(o) {
          if (this.i === 0) return !1
          let u = this.I(this.Y, o)
          return u === this.h ? !1 : (this.V(u), !0)
        }
        eraseElementByIterator(o) {
          let u = o.o
          u === this.h && (0, c.throwIteratorAccessError)()
          let i = u.W === void 0
          return (
            o.iteratorType === 0
              ? i && o.next()
              : (!i || u.U === void 0) && o.next(),
            this.V(u),
            o
          )
        }
        forEach(o) {
          let u = 0
          for (let i of this) o(i, u++, this)
        }
        getElementByPos(o) {
          if (o < 0 || o > this.i - 1) throw new RangeError()
          let u,
            i = 0
          for (let a of this) {
            if (i === o) {
              u = a
              break
            }
            i += 1
          }
          return u
        }
        getHeight() {
          if (this.i === 0) return 0
          let o = function (u) {
            return u ? Math.max(o(u.U), o(u.W)) + 1 : 0
          }
          return o(this.Y)
        }
      },
      s = g
    y.default = s
  }),
  Qb = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = En(),
      h = An(),
      c = class extends p.ContainerIterator {
        constructor(s, o, u) {
          ;(super(u),
            (this.o = s),
            (this.h = o),
            this.iteratorType === 0
              ? ((this.pre = function () {
                  return (
                    this.o === this.h.U && (0, h.throwIteratorAccessError)(),
                    (this.o = this.o.L()),
                    this
                  )
                }),
                (this.next = function () {
                  return (
                    this.o === this.h && (0, h.throwIteratorAccessError)(),
                    (this.o = this.o.B()),
                    this
                  )
                }))
              : ((this.pre = function () {
                  return (
                    this.o === this.h.W && (0, h.throwIteratorAccessError)(),
                    (this.o = this.o.B()),
                    this
                  )
                }),
                (this.next = function () {
                  return (
                    this.o === this.h && (0, h.throwIteratorAccessError)(),
                    (this.o = this.o.L()),
                    this
                  )
                })))
        }
        get index() {
          let s = this.o,
            o = this.h.tt
          if (s === this.h) return o ? o.rt - 1 : 0
          let u = 0
          for (s.U && (u += s.U.rt); s !== o; ) {
            let i = s.tt
            ;(s === i.W && ((u += 1), i.U && (u += i.U.rt)), (s = i))
          }
          return u
        }
      },
      g = c
    y.default = g
  }),
  K1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = g(Yb()),
      h = g(Qb()),
      c = An()
    function g(i) {
      return i && i.t ? i : { default: i }
    }
    var s = class Vb extends h.default {
        constructor(a, d, v, S) {
          ;(super(a, d, S), (this.container = v))
        }
        get pointer() {
          return (
            this.o === this.h && (0, c.throwIteratorAccessError)(),
            this.o.u
          )
        }
        copy() {
          return new Vb(this.o, this.h, this.container, this.iteratorType)
        }
      },
      o = class extends p.default {
        constructor(i = [], a, d) {
          super(a, d)
          let v = this
          i.forEach(function (S) {
            v.insert(S)
          })
        }
        *K(i) {
          i !== void 0 && (yield* this.K(i.U), yield i.u, yield* this.K(i.W))
        }
        begin() {
          return new s(this.h.U || this.h, this.h, this)
        }
        end() {
          return new s(this.h, this.h, this)
        }
        rBegin() {
          return new s(this.h.W || this.h, this.h, this, 1)
        }
        rEnd() {
          return new s(this.h, this.h, this, 1)
        }
        front() {
          return this.h.U ? this.h.U.u : void 0
        }
        back() {
          return this.h.W ? this.h.W.u : void 0
        }
        insert(i, a) {
          return this.M(i, void 0, a)
        }
        find(i) {
          let a = this.I(this.Y, i)
          return new s(a, this.h, this)
        }
        lowerBound(i) {
          let a = this.X(this.Y, i)
          return new s(a, this.h, this)
        }
        upperBound(i) {
          let a = this.Z(this.Y, i)
          return new s(a, this.h, this)
        }
        reverseLowerBound(i) {
          let a = this.$(this.Y, i)
          return new s(a, this.h, this)
        }
        reverseUpperBound(i) {
          let a = this.rr(this.Y, i)
          return new s(a, this.h, this)
        }
        union(i) {
          let a = this
          return (
            i.forEach(function (d) {
              a.insert(d)
            }),
            this.i
          )
        }
        [Symbol.iterator]() {
          return this.K(this.Y)
        }
      },
      u = o
    y.default = u
  }),
  F1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = g(Yb()),
      h = g(Qb()),
      c = An()
    function g(i) {
      return i && i.t ? i : { default: i }
    }
    var s = class Kb extends h.default {
        constructor(a, d, v, S) {
          ;(super(a, d, S), (this.container = v))
        }
        get pointer() {
          this.o === this.h && (0, c.throwIteratorAccessError)()
          let a = this
          return new Proxy([], {
            get(d, v) {
              if (v === '0') return a.o.u
              if (v === '1') return a.o.l
            },
            set(d, v, S) {
              if (v !== '1') throw new TypeError('props must be 1')
              return ((a.o.l = S), !0)
            },
          })
        }
        copy() {
          return new Kb(this.o, this.h, this.container, this.iteratorType)
        }
      },
      o = class extends p.default {
        constructor(i = [], a, d) {
          super(a, d)
          let v = this
          i.forEach(function (S) {
            v.setElement(S[0], S[1])
          })
        }
        *K(i) {
          i !== void 0 &&
            (yield* this.K(i.U), yield [i.u, i.l], yield* this.K(i.W))
        }
        begin() {
          return new s(this.h.U || this.h, this.h, this)
        }
        end() {
          return new s(this.h, this.h, this)
        }
        rBegin() {
          return new s(this.h.W || this.h, this.h, this, 1)
        }
        rEnd() {
          return new s(this.h, this.h, this, 1)
        }
        front() {
          if (this.i === 0) return
          let i = this.h.U
          return [i.u, i.l]
        }
        back() {
          if (this.i === 0) return
          let i = this.h.W
          return [i.u, i.l]
        }
        lowerBound(i) {
          let a = this.X(this.Y, i)
          return new s(a, this.h, this)
        }
        upperBound(i) {
          let a = this.Z(this.Y, i)
          return new s(a, this.h, this)
        }
        reverseLowerBound(i) {
          let a = this.$(this.Y, i)
          return new s(a, this.h, this)
        }
        reverseUpperBound(i) {
          let a = this.rr(this.Y, i)
          return new s(a, this.h, this)
        }
        setElement(i, a, d) {
          return this.M(i, a, d)
        }
        find(i) {
          let a = this.I(this.Y, i)
          return new s(a, this.h, this)
        }
        getElementByKey(i) {
          return this.I(this.Y, i).l
        }
        union(i) {
          let a = this
          return (
            i.forEach(function (d) {
              a.setElement(d[0], d[1])
            }),
            this.i
          )
        }
        [Symbol.iterator]() {
          return this.K(this.Y)
        }
      },
      u = o
    y.default = u
  }),
  Fb = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = p))
    function p(h) {
      let c = typeof h
      return (c === 'object' && h !== null) || c === 'function'
    }
  }),
  Wb = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.HashContainerIterator = y.HashContainer = void 0))
    var p = En(),
      h = g(Fb()),
      c = An()
    function g(u) {
      return u && u.t ? u : { default: u }
    }
    var s = class extends p.ContainerIterator {
      constructor(u, i, a) {
        ;(super(a),
          (this.o = u),
          (this.h = i),
          this.iteratorType === 0
            ? ((this.pre = function () {
                return (
                  this.o.L === this.h && (0, c.throwIteratorAccessError)(),
                  (this.o = this.o.L),
                  this
                )
              }),
              (this.next = function () {
                return (
                  this.o === this.h && (0, c.throwIteratorAccessError)(),
                  (this.o = this.o.B),
                  this
                )
              }))
            : ((this.pre = function () {
                return (
                  this.o.B === this.h && (0, c.throwIteratorAccessError)(),
                  (this.o = this.o.B),
                  this
                )
              }),
              (this.next = function () {
                return (
                  this.o === this.h && (0, c.throwIteratorAccessError)(),
                  (this.o = this.o.L),
                  this
                )
              })))
      }
    }
    y.HashContainerIterator = s
    var o = class extends p.Container {
      constructor() {
        ;(super(),
          (this.H = []),
          (this.g = {}),
          (this.HASH_TAG = Symbol('@@HASH_TAG')),
          Object.setPrototypeOf(this.g, null),
          (this.h = {}),
          (this.h.L = this.h.B = this.p = this._ = this.h))
      }
      V(u) {
        let { L: i, B: a } = u
        ;((i.B = a),
          (a.L = i),
          u === this.p && (this.p = a),
          u === this._ && (this._ = i),
          (this.i -= 1))
      }
      M(u, i, a) {
        a === void 0 && (a = (0, h.default)(u))
        let d
        if (a) {
          let v = u[this.HASH_TAG]
          if (v !== void 0) return ((this.H[v].l = i), this.i)
          ;(Object.defineProperty(u, this.HASH_TAG, {
            value: this.H.length,
            configurable: !0,
          }),
            (d = { u, l: i, L: this._, B: this.h }),
            this.H.push(d))
        } else {
          let v = this.g[u]
          if (v) return ((v.l = i), this.i)
          ;((d = { u, l: i, L: this._, B: this.h }), (this.g[u] = d))
        }
        return (
          this.i === 0 ? ((this.p = d), (this.h.B = d)) : (this._.B = d),
          (this._ = d),
          (this.h.L = d),
          ++this.i
        )
      }
      I(u, i) {
        if ((i === void 0 && (i = (0, h.default)(u)), i)) {
          let a = u[this.HASH_TAG]
          return a === void 0 ? this.h : this.H[a]
        } else return this.g[u] || this.h
      }
      clear() {
        let u = this.HASH_TAG
        ;(this.H.forEach(function (i) {
          delete i.u[u]
        }),
          (this.H = []),
          (this.g = {}),
          Object.setPrototypeOf(this.g, null),
          (this.i = 0),
          (this.p = this._ = this.h.L = this.h.B = this.h))
      }
      eraseElementByKey(u, i) {
        let a
        if ((i === void 0 && (i = (0, h.default)(u)), i)) {
          let d = u[this.HASH_TAG]
          if (d === void 0) return !1
          ;(delete u[this.HASH_TAG], (a = this.H[d]), delete this.H[d])
        } else {
          if (((a = this.g[u]), a === void 0)) return !1
          delete this.g[u]
        }
        return (this.V(a), !0)
      }
      eraseElementByIterator(u) {
        let i = u.o
        return (
          i === this.h && (0, c.throwIteratorAccessError)(),
          this.V(i),
          u.next()
        )
      }
      eraseElementByPos(u) {
        if (u < 0 || u > this.i - 1) throw new RangeError()
        let i = this.p
        for (; u--; ) i = i.B
        return (this.V(i), this.i)
      }
    }
    y.HashContainer = o
  }),
  W1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = Wb(),
      h = An(),
      c = class Xb extends p.HashContainerIterator {
        constructor(u, i, a, d) {
          ;(super(u, i, d), (this.container = a))
        }
        get pointer() {
          return (
            this.o === this.h && (0, h.throwIteratorAccessError)(),
            this.o.u
          )
        }
        copy() {
          return new Xb(this.o, this.h, this.container, this.iteratorType)
        }
      },
      g = class extends p.HashContainer {
        constructor(o = []) {
          super()
          let u = this
          o.forEach(function (i) {
            u.insert(i)
          })
        }
        begin() {
          return new c(this.p, this.h, this)
        }
        end() {
          return new c(this.h, this.h, this)
        }
        rBegin() {
          return new c(this._, this.h, this, 1)
        }
        rEnd() {
          return new c(this.h, this.h, this, 1)
        }
        front() {
          return this.p.u
        }
        back() {
          return this._.u
        }
        insert(o, u) {
          return this.M(o, void 0, u)
        }
        getElementByPos(o) {
          if (o < 0 || o > this.i - 1) throw new RangeError()
          let u = this.p
          for (; o--; ) u = u.B
          return u.u
        }
        find(o, u) {
          let i = this.I(o, u)
          return new c(i, this.h, this)
        }
        forEach(o) {
          let u = 0,
            i = this.p
          for (; i !== this.h; ) (o(i.u, u++, this), (i = i.B))
        }
        [Symbol.iterator]() {
          return function* () {
            let o = this.p
            for (; o !== this.h; ) (yield o.u, (o = o.B))
          }.bind(this)()
        }
      },
      s = g
    y.default = s
  }),
  X1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      (y.default = void 0))
    var p = Wb(),
      h = g(Fb()),
      c = An()
    function g(i) {
      return i && i.t ? i : { default: i }
    }
    var s = class Zb extends p.HashContainerIterator {
        constructor(a, d, v, S) {
          ;(super(a, d, S), (this.container = v))
        }
        get pointer() {
          this.o === this.h && (0, c.throwIteratorAccessError)()
          let a = this
          return new Proxy([], {
            get(d, v) {
              if (v === '0') return a.o.u
              if (v === '1') return a.o.l
            },
            set(d, v, S) {
              if (v !== '1') throw new TypeError('props must be 1')
              return ((a.o.l = S), !0)
            },
          })
        }
        copy() {
          return new Zb(this.o, this.h, this.container, this.iteratorType)
        }
      },
      o = class extends p.HashContainer {
        constructor(i = []) {
          super()
          let a = this
          i.forEach(function (d) {
            a.setElement(d[0], d[1])
          })
        }
        begin() {
          return new s(this.p, this.h, this)
        }
        end() {
          return new s(this.h, this.h, this)
        }
        rBegin() {
          return new s(this._, this.h, this, 1)
        }
        rEnd() {
          return new s(this.h, this.h, this, 1)
        }
        front() {
          if (this.i !== 0) return [this.p.u, this.p.l]
        }
        back() {
          if (this.i !== 0) return [this._.u, this._.l]
        }
        setElement(i, a, d) {
          return this.M(i, a, d)
        }
        getElementByKey(i, a) {
          if ((a === void 0 && (a = (0, h.default)(i)), a)) {
            let v = i[this.HASH_TAG]
            return v !== void 0 ? this.H[v].l : void 0
          }
          let d = this.g[i]
          return d ? d.l : void 0
        }
        getElementByPos(i) {
          if (i < 0 || i > this.i - 1) throw new RangeError()
          let a = this.p
          for (; i--; ) a = a.B
          return [a.u, a.l]
        }
        find(i, a) {
          let d = this.I(i, a)
          return new s(d, this.h, this)
        }
        forEach(i) {
          let a = 0,
            d = this.p
          for (; d !== this.h; ) (i([d.u, d.l], a++, this), (d = d.B))
        }
        [Symbol.iterator]() {
          return function* () {
            let i = this.p
            for (; i !== this.h; ) (yield [i.u, i.l], (i = i.B))
          }.bind(this)()
        }
      },
      u = o
    y.default = u
  }),
  Z1 = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, 't', { value: !0 }),
      Object.defineProperty(y, 'Deque', {
        enumerable: !0,
        get: function () {
          return o.default
        },
      }),
      Object.defineProperty(y, 'HashMap', {
        enumerable: !0,
        get: function () {
          return d.default
        },
      }),
      Object.defineProperty(y, 'HashSet', {
        enumerable: !0,
        get: function () {
          return a.default
        },
      }),
      Object.defineProperty(y, 'LinkList', {
        enumerable: !0,
        get: function () {
          return s.default
        },
      }),
      Object.defineProperty(y, 'OrderedMap', {
        enumerable: !0,
        get: function () {
          return i.default
        },
      }),
      Object.defineProperty(y, 'OrderedSet', {
        enumerable: !0,
        get: function () {
          return u.default
        },
      }),
      Object.defineProperty(y, 'PriorityQueue', {
        enumerable: !0,
        get: function () {
          return c.default
        },
      }),
      Object.defineProperty(y, 'Queue', {
        enumerable: !0,
        get: function () {
          return h.default
        },
      }),
      Object.defineProperty(y, 'Stack', {
        enumerable: !0,
        get: function () {
          return p.default
        },
      }),
      Object.defineProperty(y, 'Vector', {
        enumerable: !0,
        get: function () {
          return g.default
        },
      }))
    var p = v(q1()),
      h = v(H1()),
      c = v(P1()),
      g = v(G1()),
      s = v(Y1()),
      o = v(Q1()),
      u = v(K1()),
      i = v(F1()),
      a = v(W1()),
      d = v(X1())
    function v(S) {
      return S && S.t ? S : { default: S }
    }
  }),
  J1 = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = Z1().OrderedSet,
      c = Sn()('number-allocator:trace'),
      g = Sn()('number-allocator:error')
    function s(u, i) {
      ;((this.low = u), (this.high = i))
    }
    ;((s.prototype.equals = function (u) {
      return this.low === u.low && this.high === u.high
    }),
      (s.prototype.compare = function (u) {
        return this.low < u.low && this.high < u.low
          ? -1
          : u.low < this.low && u.high < this.low
            ? 1
            : 0
      }))
    function o(u, i) {
      if (!(this instanceof o)) return new o(u, i)
      ;((this.min = u),
        (this.max = i),
        (this.ss = new h([], (a, d) => a.compare(d))),
        c('Create'),
        this.clear())
    }
    ;((o.prototype.firstVacant = function () {
      return this.ss.size() === 0 ? null : this.ss.front().low
    }),
      (o.prototype.alloc = function () {
        if (this.ss.size() === 0) return (c('alloc():empty'), null)
        let u = this.ss.begin(),
          i = u.pointer.low,
          a = u.pointer.high,
          d = i
        return (
          d + 1 <= a
            ? this.ss.updateKeyByIterator(u, new s(i + 1, a))
            : this.ss.eraseElementByPos(0),
          c('alloc():' + d),
          d
        )
      }),
      (o.prototype.use = function (u) {
        let i = new s(u, u),
          a = this.ss.lowerBound(i)
        if (!a.equals(this.ss.end())) {
          let d = a.pointer.low,
            v = a.pointer.high
          return a.pointer.equals(i)
            ? (this.ss.eraseElementByIterator(a), c('use():' + u), !0)
            : d > u
              ? !1
              : d === u
                ? (this.ss.updateKeyByIterator(a, new s(d + 1, v)),
                  c('use():' + u),
                  !0)
                : v === u
                  ? (this.ss.updateKeyByIterator(a, new s(d, v - 1)),
                    c('use():' + u),
                    !0)
                  : (this.ss.updateKeyByIterator(a, new s(u + 1, v)),
                    this.ss.insert(new s(d, u - 1)),
                    c('use():' + u),
                    !0)
        }
        return (c('use():failed'), !1)
      }),
      (o.prototype.free = function (u) {
        if (u < this.min || u > this.max) {
          g('free():' + u + ' is out of range')
          return
        }
        let i = new s(u, u),
          a = this.ss.upperBound(i)
        if (a.equals(this.ss.end())) {
          if (a.equals(this.ss.begin())) {
            this.ss.insert(i)
            return
          }
          a.pre()
          let d = a.pointer.high
          a.pointer.high + 1 === u
            ? this.ss.updateKeyByIterator(a, new s(d, u))
            : this.ss.insert(i)
        } else if (a.equals(this.ss.begin()))
          if (u + 1 === a.pointer.low) {
            let d = a.pointer.high
            this.ss.updateKeyByIterator(a, new s(u, d))
          } else this.ss.insert(i)
        else {
          let d = a.pointer.low,
            v = a.pointer.high
          a.pre()
          let S = a.pointer.low
          a.pointer.high + 1 === u
            ? u + 1 === d
              ? (this.ss.eraseElementByIterator(a),
                this.ss.updateKeyByIterator(a, new s(S, v)))
              : this.ss.updateKeyByIterator(a, new s(S, u))
            : u + 1 === d
              ? (this.ss.eraseElementByIterator(a.next()),
                this.ss.insert(new s(u, v)))
              : this.ss.insert(i)
        }
        c('free():' + u)
      }),
      (o.prototype.clear = function () {
        ;(c('clear()'),
          this.ss.clear(),
          this.ss.insert(new s(this.min, this.max)))
      }),
      (o.prototype.intervalCount = function () {
        return this.ss.size()
      }),
      (o.prototype.dump = function () {
        console.log('length:' + this.ss.size())
        for (let u of this.ss) console.log(u)
      }),
      (p.exports = o))
  }),
  Jb = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = J1()
    p.exports.NumberAllocator = h
  }),
  $1 = Ue((y) => {
    ;(Te(), xe(), Oe(), Object.defineProperty(y, '__esModule', { value: !0 }))
    var p = z1(),
      h = Jb(),
      c = class {
        aliasToTopic
        topicToAlias
        max
        numberAllocator
        length
        constructor(g) {
          g > 0 &&
            ((this.aliasToTopic = new p.LRUCache({ max: g })),
            (this.topicToAlias = {}),
            (this.numberAllocator = new h.NumberAllocator(1, g)),
            (this.max = g),
            (this.length = 0))
        }
        put(g, s) {
          if (s === 0 || s > this.max) return !1
          let o = this.aliasToTopic.get(s)
          return (
            o && delete this.topicToAlias[o],
            this.aliasToTopic.set(s, g),
            (this.topicToAlias[g] = s),
            this.numberAllocator.use(s),
            (this.length = this.aliasToTopic.size),
            !0
          )
        }
        getTopicByAlias(g) {
          return this.aliasToTopic.get(g)
        }
        getAliasByTopic(g) {
          let s = this.topicToAlias[g]
          return (typeof s < 'u' && this.aliasToTopic.get(s), s)
        }
        clear() {
          ;(this.aliasToTopic.clear(),
            (this.topicToAlias = {}),
            this.numberAllocator.clear(),
            (this.length = 0))
        }
        getLruAlias() {
          return (
            this.numberAllocator.firstVacant() ||
            [...this.aliasToTopic.keys()][this.aliasToTopic.size - 1]
          )
        }
      }
    y.default = c
  }),
  eS = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p =
      (y && y.__importDefault) ||
      function (o) {
        return o && o.__esModule ? o : { default: o }
      }
    Object.defineProperty(y, '__esModule', { value: !0 })
    var h = ss(),
      c = p($1()),
      g = pa(),
      s = (o, u) => {
        o.log('_handleConnack')
        let { options: i } = o,
          a = i.protocolVersion === 5 ? u.reasonCode : u.returnCode
        if (
          (clearTimeout(o.connackTimer), delete o.topicAliasSend, u.properties)
        ) {
          if (u.properties.topicAliasMaximum) {
            if (u.properties.topicAliasMaximum > 65535) {
              o.emit(
                'error',
                new Error('topicAliasMaximum from broker is out of range')
              )
              return
            }
            u.properties.topicAliasMaximum > 0 &&
              (o.topicAliasSend = new c.default(u.properties.topicAliasMaximum))
          }
          ;(u.properties.serverKeepAlive &&
            i.keepalive &&
            (i.keepalive = u.properties.serverKeepAlive),
            u.properties.maximumPacketSize &&
              (i.properties || (i.properties = {}),
              (i.properties.maximumPacketSize =
                u.properties.maximumPacketSize)))
        }
        if (a === 0) ((o.reconnecting = !1), o._onConnect(u))
        else if (a > 0) {
          let d = new g.ErrorWithReasonCode(
            `Connection refused: ${h.ReasonCodes[a]}`,
            a
          )
          ;(o.emit('error', d),
            o.options.reconnectOnConnackError && o._cleanUp(!0))
        }
      }
    y.default = s
  }),
  tS = Ue((y) => {
    ;(Te(), xe(), Oe(), Object.defineProperty(y, '__esModule', { value: !0 }))
    var p = (h, c, g) => {
      h.log('handling pubrel packet')
      let s = typeof g < 'u' ? g : h.noop,
        { messageId: o } = c,
        u = { cmd: 'pubcomp', messageId: o }
      h.incomingStore.get(c, (i, a) => {
        i
          ? h._sendPacket(u, s)
          : (h.emit('message', a.topic, a.payload, a),
            h.handleMessage(a, (d) => {
              if (d) return s(d)
              ;(h.incomingStore.del(a, h.noop), h._sendPacket(u, s))
            }))
      })
    }
    y.default = p
  }),
  rS = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p =
      (y && y.__importDefault) ||
      function (i) {
        return i && i.__esModule ? i : { default: i }
      }
    Object.defineProperty(y, '__esModule', { value: !0 })
    var h = p(k1()),
      c = p(I1()),
      g = p(eS()),
      s = p(ss()),
      o = p(tS()),
      u = (i, a, d) => {
        let { options: v } = i
        if (
          v.protocolVersion === 5 &&
          v.properties &&
          v.properties.maximumPacketSize &&
          v.properties.maximumPacketSize < a.length
        )
          return (
            i.emit('error', new Error(`exceeding packets size ${a.cmd}`)),
            i.end({
              reasonCode: 149,
              properties: { reasonString: 'Maximum packet size was exceeded' },
            }),
            i
          )
        switch (
          (i.log('_handlePacket :: emitting packetreceive'),
          i.emit('packetreceive', a),
          a.cmd)
        ) {
          case 'publish':
            ;(0, h.default)(i, a, d)
            break
          case 'puback':
          case 'pubrec':
          case 'pubcomp':
          case 'suback':
          case 'unsuback':
            ;(i.reschedulePing(), (0, s.default)(i, a), d())
            break
          case 'pubrel':
            ;(i.reschedulePing(), (0, o.default)(i, a, d))
            break
          case 'connack':
            ;((0, g.default)(i, a), d())
            break
          case 'auth':
            ;(i.reschedulePing(), (0, c.default)(i, a), d())
            break
          case 'pingresp':
            ;(i.log('_handlePacket :: received pingresp'),
              i.reschedulePing(!0),
              d())
            break
          case 'disconnect':
            ;(i.emit('disconnect', a), d())
            break
          default:
            ;(i.log('_handlePacket :: unknown command'), d())
            break
        }
      }
    y.default = u
  }),
  $b = Ue((y) => {
    ;(Te(), xe(), Oe(), Object.defineProperty(y, '__esModule', { value: !0 }))
    var p = class {
      nextId
      constructor() {
        this.nextId = Math.max(1, Math.floor(Math.random() * 65535))
      }
      allocate() {
        let h = this.nextId++
        return (this.nextId === 65536 && (this.nextId = 1), h)
      }
      getLastAllocated() {
        return this.nextId === 1 ? 65535 : this.nextId - 1
      }
      register(h) {
        return !0
      }
      deallocate(h) {}
      clear() {}
    }
    y.default = p
  }),
  nS = Ue((y) => {
    ;(Te(), xe(), Oe(), Object.defineProperty(y, '__esModule', { value: !0 }))
    var p = class {
      aliasToTopic
      max
      length
      constructor(h) {
        ;((this.aliasToTopic = {}), (this.max = h))
      }
      put(h, c) {
        return c === 0 || c > this.max
          ? !1
          : ((this.aliasToTopic[c] = h),
            (this.length = Object.keys(this.aliasToTopic).length),
            !0)
      }
      getTopicByAlias(h) {
        return this.aliasToTopic[h]
      }
      clear() {
        this.aliasToTopic = {}
      }
    }
    y.default = p
  }),
  iS = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p =
      (y && y.__importDefault) ||
      function (s) {
        return s && s.__esModule ? s : { default: s }
      }
    ;(Object.defineProperty(y, '__esModule', { value: !0 }),
      (y.TypedEventEmitter = void 0))
    var h = p((wi(), gt($n))),
      c = pa(),
      g = class {}
    ;((y.TypedEventEmitter = g), (0, c.applyMixin)(g, h.default))
  }),
  ev = Ue((y, p) => {
    ;(Te(),
      xe(),
      Oe(),
      (function (h, c) {
        typeof y == 'object' && typeof p < 'u'
          ? c(y)
          : typeof define == 'function' && define.amd
            ? define(['exports'], c)
            : ((h = typeof globalThis < 'u' ? globalThis : h || self),
              c((h.fastUniqueNumbers = {})))
      })(y, function (h) {
        var c = function (E) {
            return function (b) {
              var w = E(b)
              return (b.add(w), w)
            }
          },
          g = function (E) {
            return function (b, w) {
              return (E.set(b, w), w)
            }
          },
          s =
            Number.MAX_SAFE_INTEGER === void 0
              ? 9007199254740991
              : Number.MAX_SAFE_INTEGER,
          o = 536870912,
          u = o * 2,
          i = function (E, b) {
            return function (w) {
              var A = b.get(w),
                M = A === void 0 ? w.size : A < u ? A + 1 : 0
              if (!w.has(M)) return E(w, M)
              if (w.size < o) {
                for (; w.has(M); ) M = Math.floor(Math.random() * u)
                return E(w, M)
              }
              if (w.size > s)
                throw new Error(
                  'Congratulations, you created a collection of unique numbers which uses all available integers!'
                )
              for (; w.has(M); ) M = Math.floor(Math.random() * s)
              return E(w, M)
            }
          },
          a = new WeakMap(),
          d = g(a),
          v = i(d, a),
          S = c(v)
        ;((h.addUniqueNumber = S), (h.generateUniqueNumber = v))
      }))
  }),
  us = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    function h(c) {
      '@babel/helpers - typeof'
      return (
        (p.exports = h =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (g) {
                return typeof g
              }
            : function (g) {
                return g &&
                  typeof Symbol == 'function' &&
                  g.constructor === Symbol &&
                  g !== Symbol.prototype
                  ? 'symbol'
                  : typeof g
              }),
        (p.exports.__esModule = !0),
        (p.exports.default = p.exports),
        h(c)
      )
    }
    ;((p.exports = h),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  aS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = us().default
    function c(g, s) {
      if (h(g) != 'object' || !g) return g
      var o = g[Symbol.toPrimitive]
      if (o !== void 0) {
        var u = o.call(g, s || 'default')
        if (h(u) != 'object') return u
        throw new TypeError('@@toPrimitive must return a primitive value.')
      }
      return (s === 'string' ? String : Number)(g)
    }
    ;((p.exports = c),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  lS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = us().default,
      c = aS()
    function g(s) {
      var o = c(s, 'string')
      return h(o) == 'symbol' ? o : o + ''
    }
    ;((p.exports = g),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  oS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = lS()
    function c(g, s, o) {
      return (
        (s = h(s)) in g
          ? Object.defineProperty(g, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (g[s] = o),
        g
      )
    }
    ;((p.exports = c),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  sS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    function h(c) {
      if (Array.isArray(c)) return c
    }
    ;((p.exports = h),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  uS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    function h(c, g) {
      var s =
        c == null
          ? null
          : (typeof Symbol < 'u' && c[Symbol.iterator]) || c['@@iterator']
      if (s != null) {
        var o,
          u,
          i,
          a,
          d = [],
          v = !0,
          S = !1
        try {
          if (((i = (s = s.call(c)).next), g === 0)) {
            if (Object(s) !== s) return
            v = !1
          } else
            for (
              ;
              !(v = (o = i.call(s)).done) && (d.push(o.value), d.length !== g);
              v = !0
            );
        } catch (E) {
          ;((S = !0), (u = E))
        } finally {
          try {
            if (!v && s.return != null && ((a = s.return()), Object(a) !== a))
              return
          } finally {
            if (S) throw u
          }
        }
        return d
      }
    }
    ;((p.exports = h),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  cS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    function h(c, g) {
      ;(g == null || g > c.length) && (g = c.length)
      for (var s = 0, o = Array(g); s < g; s++) o[s] = c[s]
      return o
    }
    ;((p.exports = h),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  fS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = cS()
    function c(g, s) {
      if (g) {
        if (typeof g == 'string') return h(g, s)
        var o = {}.toString.call(g).slice(8, -1)
        return (
          o === 'Object' && g.constructor && (o = g.constructor.name),
          o === 'Map' || o === 'Set'
            ? Array.from(g)
            : o === 'Arguments' ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              ? h(g, s)
              : void 0
        )
      }
    }
    ;((p.exports = c),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  hS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    function h() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    ;((p.exports = h),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  dS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = sS(),
      c = uS(),
      g = fS(),
      s = hS()
    function o(u, i) {
      return h(u) || c(u, i) || g(u, i) || s()
    }
    ;((p.exports = o),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  pS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    function h(g, s, o, u, i, a, d) {
      try {
        var v = g[a](d),
          S = v.value
      } catch (E) {
        return void o(E)
      }
      v.done ? s(S) : Promise.resolve(S).then(u, i)
    }
    function c(g) {
      return function () {
        var s = this,
          o = arguments
        return new Promise(function (u, i) {
          var a = g.apply(s, o)
          function d(S) {
            h(a, u, i, d, v, 'next', S)
          }
          function v(S) {
            h(a, u, i, d, v, 'throw', S)
          }
          d(void 0)
        })
      }
    }
    ;((p.exports = c),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  tv = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    function h(c, g) {
      ;((this.v = c), (this.k = g))
    }
    ;((p.exports = h),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  rv = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    function h(c, g, s, o) {
      var u = Object.defineProperty
      try {
        u({}, '', {})
      } catch {
        u = 0
      }
      ;((p.exports = h =
        function (i, a, d, v) {
          function S(E, b) {
            h(i, E, function (w) {
              return this._invoke(E, b, w)
            })
          }
          a
            ? u
              ? u(i, a, {
                  value: d,
                  enumerable: !v,
                  configurable: !v,
                  writable: !v,
                })
              : (i[a] = d)
            : (S('next', 0), S('throw', 1), S('return', 2))
        }),
        (p.exports.__esModule = !0),
        (p.exports.default = p.exports),
        h(c, g, s, o))
    }
    ;((p.exports = h),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  nv = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = rv()
    function c() {
      var g,
        s,
        o = typeof Symbol == 'function' ? Symbol : {},
        u = o.iterator || '@@iterator',
        i = o.toStringTag || '@@toStringTag'
      function a(M, _, O, N) {
        var T = _ && _.prototype instanceof v ? _ : v,
          j = Object.create(T.prototype)
        return (
          h(
            j,
            '_invoke',
            (function (x, k, q) {
              var H,
                X,
                I,
                ee = 0,
                J = q || [],
                $ = !1,
                K = {
                  p: 0,
                  n: 0,
                  v: g,
                  a: P,
                  f: P.bind(g, 4),
                  d: function (F, ce) {
                    return ((H = F), (X = 0), (I = g), (K.n = ce), d)
                  },
                }
              function P(F, ce) {
                for (
                  X = F, I = ce, s = 0;
                  !$ && ee && !V && s < J.length;
                  s++
                ) {
                  var V,
                    B = J[s],
                    D = K.p,
                    Q = B[2]
                  F > 3
                    ? (V = Q === ce) &&
                      ((I = B[(X = B[4]) ? 5 : ((X = 3), 3)]),
                      (B[4] = B[5] = g))
                    : B[0] <= D &&
                      ((V = F < 2 && D < B[1])
                        ? ((X = 0), (K.v = ce), (K.n = B[1]))
                        : D < Q &&
                          (V = F < 3 || B[0] > ce || ce > Q) &&
                          ((B[4] = F), (B[5] = ce), (K.n = Q), (X = 0)))
                }
                if (V || F > 1) return d
                throw (($ = !0), ce)
              }
              return function (F, ce, V) {
                if (ee > 1) throw TypeError('Generator is already running')
                for (
                  $ && ce === 1 && P(ce, V), X = ce, I = V;
                  (s = X < 2 ? g : I) || !$;
                ) {
                  H ||
                    (X
                      ? X < 3
                        ? (X > 1 && (K.n = -1), P(X, I))
                        : (K.n = I)
                      : (K.v = I))
                  try {
                    if (((ee = 2), H)) {
                      if ((X || (F = 'next'), (s = H[F]))) {
                        if (!(s = s.call(H, I)))
                          throw TypeError('iterator result is not an object')
                        if (!s.done) return s
                        ;((I = s.value), X < 2 && (X = 0))
                      } else
                        (X === 1 && (s = H.return) && s.call(H),
                          X < 2 &&
                            ((I = TypeError(
                              "The iterator does not provide a '" +
                                F +
                                "' method"
                            )),
                            (X = 1)))
                      H = g
                    } else if ((s = ($ = K.n < 0) ? I : x.call(k, K)) !== d)
                      break
                  } catch (B) {
                    ;((H = g), (X = 1), (I = B))
                  } finally {
                    ee = 1
                  }
                }
                return { value: s, done: $ }
              }
            })(M, O, N),
            !0
          ),
          j
        )
      }
      var d = {}
      function v() {}
      function S() {}
      function E() {}
      s = Object.getPrototypeOf
      var b = [][u]
          ? s(s([][u]()))
          : (h((s = {}), u, function () {
              return this
            }),
            s),
        w = (E.prototype = v.prototype = Object.create(b))
      function A(M) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(M, E)
            : ((M.__proto__ = E), h(M, i, 'GeneratorFunction')),
          (M.prototype = Object.create(w)),
          M
        )
      }
      return (
        (S.prototype = E),
        h(w, 'constructor', E),
        h(E, 'constructor', S),
        (S.displayName = 'GeneratorFunction'),
        h(E, i, 'GeneratorFunction'),
        h(w),
        h(w, i, 'Generator'),
        h(w, u, function () {
          return this
        }),
        h(w, 'toString', function () {
          return '[object Generator]'
        }),
        ((p.exports = c =
          function () {
            return { w: a, m: A }
          }),
        (p.exports.__esModule = !0),
        (p.exports.default = p.exports))()
      )
    }
    ;((p.exports = c),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  iv = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = tv(),
      c = rv()
    function g(s, o) {
      function u(a, d, v, S) {
        try {
          var E = s[a](d),
            b = E.value
          return b instanceof h
            ? o.resolve(b.v).then(
                function (w) {
                  u('next', w, v, S)
                },
                function (w) {
                  u('throw', w, v, S)
                }
              )
            : o.resolve(b).then(
                function (w) {
                  ;((E.value = w), v(E))
                },
                function (w) {
                  return u('throw', w, v, S)
                }
              )
        } catch (w) {
          S(w)
        }
      }
      var i
      ;(this.next ||
        (c(g.prototype),
        c(
          g.prototype,
          (typeof Symbol == 'function' && Symbol.asyncIterator) ||
            '@asyncIterator',
          function () {
            return this
          }
        )),
        c(
          this,
          '_invoke',
          function (a, d, v) {
            function S() {
              return new o(function (E, b) {
                u(a, v, E, b)
              })
            }
            return (i = i ? i.then(S, S) : S())
          },
          !0
        ))
    }
    ;((p.exports = g),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  av = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = nv(),
      c = iv()
    function g(s, o, u, i, a) {
      return new c(h().w(s, o, u, i), a || Promise)
    }
    ;((p.exports = g),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  yS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = av()
    function c(g, s, o, u, i) {
      var a = h(g, s, o, u, i)
      return a.next().then(function (d) {
        return d.done ? d.value : a.next()
      })
    }
    ;((p.exports = c),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  gS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    function h(c) {
      var g = Object(c),
        s = []
      for (var o in g) s.unshift(o)
      return function u() {
        for (; s.length; )
          if ((o = s.pop()) in g) return ((u.value = o), (u.done = !1), u)
        return ((u.done = !0), u)
      }
    }
    ;((p.exports = h),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  mS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = us().default
    function c(g) {
      if (g != null) {
        var s =
            g[(typeof Symbol == 'function' && Symbol.iterator) || '@@iterator'],
          o = 0
        if (s) return s.call(g)
        if (typeof g.next == 'function') return g
        if (!isNaN(g.length))
          return {
            next: function () {
              return (
                g && o >= g.length && (g = void 0),
                { value: g && g[o++], done: !g }
              )
            },
          }
      }
      throw new TypeError(h(g) + ' is not iterable')
    }
    ;((p.exports = c),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  bS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = tv(),
      c = nv(),
      g = yS(),
      s = av(),
      o = iv(),
      u = gS(),
      i = mS()
    function a() {
      var d = c(),
        v = d.m(a),
        S = (Object.getPrototypeOf ? Object.getPrototypeOf(v) : v.__proto__)
          .constructor
      function E(A) {
        var M = typeof A == 'function' && A.constructor
        return (
          !!M && (M === S || (M.displayName || M.name) === 'GeneratorFunction')
        )
      }
      var b = { throw: 1, return: 2, break: 3, continue: 3 }
      function w(A) {
        var M, _
        return function (O) {
          ;(M ||
            ((M = {
              stop: function () {
                return _(O.a, 2)
              },
              catch: function () {
                return O.v
              },
              abrupt: function (N, T) {
                return _(O.a, b[N], T)
              },
              delegateYield: function (N, T, j) {
                return ((M.resultName = T), _(O.d, i(N), j))
              },
              finish: function (N) {
                return _(O.f, N)
              },
            }),
            (_ = function (N, T, j) {
              ;((O.p = M.prev), (O.n = M.next))
              try {
                return N(T, j)
              } finally {
                M.next = O.n
              }
            })),
            M.resultName && ((M[M.resultName] = O.v), (M.resultName = void 0)),
            (M.sent = O.v),
            (M.next = O.n))
          try {
            return A.call(this, M)
          } finally {
            ;((O.p = M.prev), (O.n = M.next))
          }
        }
      }
      return ((p.exports = a =
        function () {
          return {
            wrap: function (A, M, _, O) {
              return d.w(w(A), M, _, O && O.reverse())
            },
            isGeneratorFunction: E,
            mark: d.m,
            awrap: function (A, M) {
              return new h(A, M)
            },
            AsyncIterator: o,
            async: function (A, M, _, O, N) {
              return (E(M) ? s : g)(w(A), M, _, O, N)
            },
            keys: u,
            values: i,
          }
        }),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))()
    }
    ;((p.exports = a),
      (p.exports.__esModule = !0),
      (p.exports.default = p.exports))
  }),
  vS = Ue((y, p) => {
    ;(Te(), xe(), Oe())
    var h = bS()()
    p.exports = h
    try {
      regeneratorRuntime = h
    } catch {
      typeof globalThis == 'object'
        ? (globalThis.regeneratorRuntime = h)
        : Function('r', 'regeneratorRuntime = r')(h)
    }
  }),
  _S = Ue((y, p) => {
    ;(Te(),
      xe(),
      Oe(),
      (function (h, c) {
        typeof y == 'object' && typeof p < 'u'
          ? c(y, ev(), oS(), dS(), pS(), vS())
          : typeof define == 'function' && define.amd
            ? define(
                [
                  'exports',
                  'fast-unique-numbers',
                  '@babel/runtime/helpers/defineProperty',
                  '@babel/runtime/helpers/slicedToArray',
                  '@babel/runtime/helpers/asyncToGenerator',
                  '@babel/runtime/regenerator',
                ],
                c
              )
            : ((h = typeof globalThis < 'u' ? globalThis : h || self),
              c(
                (h.brokerFactory = {}),
                h.fastUniqueNumbers,
                h._defineProperty,
                h._slicedToArray,
                h._asyncToGenerator,
                h._regeneratorRuntime
              ))
      })(y, function (h, c, g, s, o, u) {
        function i(M, _) {
          var O = Object.keys(M)
          if (Object.getOwnPropertySymbols) {
            var N = Object.getOwnPropertySymbols(M)
            ;(_ &&
              (N = N.filter(function (T) {
                return Object.getOwnPropertyDescriptor(M, T).enumerable
              })),
              O.push.apply(O, N))
          }
          return O
        }
        function a(M) {
          for (var _ = 1; _ < arguments.length; _++) {
            var O = arguments[_] != null ? arguments[_] : {}
            _ % 2
              ? i(Object(O), !0).forEach(function (N) {
                  g(M, N, O[N])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    M,
                    Object.getOwnPropertyDescriptors(O)
                  )
                : i(Object(O)).forEach(function (N) {
                    Object.defineProperty(
                      M,
                      N,
                      Object.getOwnPropertyDescriptor(O, N)
                    )
                  })
          }
          return M
        }
        var d = function (M, _, O, N) {
            return function (T) {
              var j = _(T)
              return function (x) {
                var k = M(x)
                ;(x.addEventListener('message', function (P) {
                  var F = P.data,
                    ce = F.id
                  if (ce !== null && k.has(ce)) {
                    var V = k.get(ce),
                      B = V.reject,
                      D = V.resolve
                    ;(k.delete(ce),
                      F.error === void 0
                        ? D(F.result)
                        : B(new Error(F.error.message)))
                  }
                }),
                  N(x) && x.start())
                for (
                  var q = function (P) {
                      var F =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : null,
                        ce =
                          arguments.length > 2 && arguments[2] !== void 0
                            ? arguments[2]
                            : []
                      return new Promise(function (V, B) {
                        var D = O(k)
                        ;(k.set(D, { reject: B, resolve: V }),
                          F === null
                            ? x.postMessage({ id: D, method: P }, ce)
                            : x.postMessage(
                                { id: D, method: P, params: F },
                                ce
                              ))
                      })
                    },
                    H = function (P, F) {
                      var ce =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : []
                      x.postMessage({ id: null, method: P, params: F }, ce)
                    },
                    X = {},
                    I = 0,
                    ee = Object.entries(j);
                  I < ee.length;
                  I++
                ) {
                  var J = s(ee[I], 2),
                    $ = J[0],
                    K = J[1]
                  X = a(a({}, X), {}, g({}, $, K({ call: q, notify: H })))
                }
                return a({}, X)
              }
            }
          },
          v = function (M) {
            return function (_) {
              if (M.has(_)) return M.get(_)
              var O = new Map()
              return (M.set(_, O), O)
            }
          }
        function S(M, _) {
          var O = Object.keys(M)
          if (Object.getOwnPropertySymbols) {
            var N = Object.getOwnPropertySymbols(M)
            ;(_ &&
              (N = N.filter(function (T) {
                return Object.getOwnPropertyDescriptor(M, T).enumerable
              })),
              O.push.apply(O, N))
          }
          return O
        }
        function E(M) {
          for (var _ = 1; _ < arguments.length; _++) {
            var O = arguments[_] != null ? arguments[_] : {}
            _ % 2
              ? S(Object(O), !0).forEach(function (N) {
                  g(M, N, O[N])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    M,
                    Object.getOwnPropertyDescriptors(O)
                  )
                : S(Object(O)).forEach(function (N) {
                    Object.defineProperty(
                      M,
                      N,
                      Object.getOwnPropertyDescriptor(O, N)
                    )
                  })
          }
          return M
        }
        var b = function (M) {
            return function (_) {
              return E(
                E({}, _),
                {},
                {
                  connect: function (O) {
                    var N = O.call
                    return o(
                      u.mark(function T() {
                        var j, x, k, q
                        return u.wrap(function (H) {
                          for (;;)
                            switch ((H.prev = H.next)) {
                              case 0:
                                return (
                                  (j = new MessageChannel()),
                                  (x = j.port1),
                                  (k = j.port2),
                                  (H.next = 1),
                                  N('connect', { port: x }, [x])
                                )
                              case 1:
                                return (
                                  (q = H.sent),
                                  M.set(k, q),
                                  H.abrupt('return', k)
                                )
                              case 2:
                              case 'end':
                                return H.stop()
                            }
                        }, T)
                      })
                    )
                  },
                  disconnect: function (O) {
                    var N = O.call
                    return (function () {
                      var T = o(
                        u.mark(function j(x) {
                          var k
                          return u.wrap(function (q) {
                            for (;;)
                              switch ((q.prev = q.next)) {
                                case 0:
                                  if (((k = M.get(x)), k !== void 0)) {
                                    q.next = 1
                                    break
                                  }
                                  throw new Error(
                                    'The given port is not connected.'
                                  )
                                case 1:
                                  return (
                                    (q.next = 2),
                                    N('disconnect', { portId: k })
                                  )
                                case 2:
                                case 'end':
                                  return q.stop()
                              }
                          }, j)
                        })
                      )
                      return function (j) {
                        return T.apply(this, arguments)
                      }
                    })()
                  },
                  isSupported: function (O) {
                    var N = O.call
                    return function () {
                      return N('isSupported')
                    }
                  },
                }
              )
            }
          },
          w = function (M) {
            return typeof M.start == 'function'
          },
          A = d(v(new WeakMap()), b(new WeakMap()), c.generateUniqueNumber, w)
        h.createBroker = A
      }))
  }),
  SS = Ue((y, p) => {
    ;(Te(),
      xe(),
      Oe(),
      (function (h, c) {
        typeof y == 'object' && typeof p < 'u'
          ? c(y, _S(), ev(), us())
          : typeof define == 'function' && define.amd
            ? define(
                [
                  'exports',
                  'broker-factory',
                  'fast-unique-numbers',
                  '@babel/runtime/helpers/typeof',
                ],
                c
              )
            : ((h = typeof globalThis < 'u' ? globalThis : h || self),
              c(
                (h.workerTimersBroker = {}),
                h.brokerFactory,
                h.fastUniqueNumbers,
                h._typeof
              ))
      })(y, function (h, c, g, s) {
        var o = function (_) {
            return function (O) {
              return function (N) {
                s(_.get(N)) === 'symbol' &&
                  (_.set(N, null),
                  O(N).then(function () {
                    _.delete(N)
                  }))
              }
            }
          },
          u = function (_) {
            return function (O) {
              return function (N) {
                s(_.get(N)) === 'symbol' &&
                  (_.set(N, null),
                  O(N).then(function () {
                    _.delete(N)
                  }))
              }
            }
          },
          i = function (_, O) {
            return function (N) {
              return function (T) {
                for (
                  var j =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : 0,
                    x = arguments.length,
                    k = new Array(x > 2 ? x - 2 : 0),
                    q = 2;
                  q < x;
                  q++
                )
                  k[q - 2] = arguments[q]
                var H = Symbol(),
                  X = _(O)
                O.set(X, H)
                var I = function () {
                  return N(j, X).then(function () {
                    var ee = O.get(X)
                    if (ee === void 0)
                      throw new Error('The timer is in an undefined state.')
                    ee === H && (T.apply(void 0, k), O.get(X) === H && I())
                  })
                }
                return (I(), X)
              }
            }
          },
          a = function (_, O) {
            return function (N) {
              return function (T) {
                for (
                  var j =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : 0,
                    x = arguments.length,
                    k = new Array(x > 2 ? x - 2 : 0),
                    q = 2;
                  q < x;
                  q++
                )
                  k[q - 2] = arguments[q]
                var H = Symbol(),
                  X = _(O)
                return (
                  O.set(X, H),
                  N(j, X).then(function () {
                    var I = O.get(X)
                    if (I === void 0)
                      throw new Error('The timer is in an undefined state.')
                    I === H && (O.delete(X), T.apply(void 0, k))
                  }),
                  X
                )
              }
            }
          },
          d = new Map([[0, null]]),
          v = new Map([[0, null]]),
          S = o(d),
          E = u(v),
          b = i(g.generateUniqueNumber, d),
          w = a(g.generateUniqueNumber, v),
          A = c.createBroker({
            clearInterval: function (_) {
              var O = _.call
              return S(function (N) {
                return O('clear', { timerId: N, timerType: 'interval' })
              })
            },
            clearTimeout: function (_) {
              var O = _.call
              return E(function (N) {
                return O('clear', { timerId: N, timerType: 'timeout' })
              })
            },
            setInterval: function (_) {
              var O = _.call
              return b(function (N, T) {
                return O('set', {
                  delay: N,
                  now: performance.timeOrigin + performance.now(),
                  timerId: T,
                  timerType: 'interval',
                })
              })
            },
            setTimeout: function (_) {
              var O = _.call
              return w(function (N, T) {
                return O('set', {
                  delay: N,
                  now: performance.timeOrigin + performance.now(),
                  timerId: T,
                  timerType: 'timeout',
                })
              })
            },
          }),
          M = function (_) {
            var O = new Worker(_)
            return A(O)
          }
        ;((h.load = M), (h.wrap = A))
      }))
  }),
  wS = Ue((y, p) => {
    ;(Te(),
      xe(),
      Oe(),
      (function (h, c) {
        typeof y == 'object' && typeof p < 'u'
          ? c(y, SS())
          : typeof define == 'function' && define.amd
            ? define(['exports', 'worker-timers-broker'], c)
            : ((h = typeof globalThis < 'u' ? globalThis : h || self),
              c((h.workerTimers = {}), h.workerTimersBroker))
      })(y, function (h, c) {
        var g = function (v, S) {
            var E = null
            return function () {
              if (E !== null) return E
              var b = new Blob([S], {
                  type: 'application/javascript; charset=utf-8',
                }),
                w = URL.createObjectURL(b)
              return (
                (E = v(w)),
                setTimeout(function () {
                  return URL.revokeObjectURL(w)
                }),
                E
              )
            }
          },
          s = `(()=>{var e={389(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,u=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<u?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*u);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,s=r(i),c=a(s,i),f=t(c);e.addUniqueNumber=f,e.generateUniqueNumber=c}(t)},623(e,t,r){!function(e,t,r,n,o){"use strict";var u={INTERNAL_ERROR:-32603,INVALID_PARAMS:-32602,METHOD_NOT_FOUND:-32601},a=function(e,t){return Object.assign(new Error(e),{status:t})},i=function(e){return a('The requested method called "'.concat(e,'" is not supported.'),u.METHOD_NOT_FOUND)},s=function(e){return a('The handler of the method called "'.concat(e,'" returned no required result.'),u.INTERNAL_ERROR)},c=function(e){return a('The handler of the method called "'.concat(e,'" returned an unexpected result.'),u.INTERNAL_ERROR)},f=function(e){return a('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),u.INVALID_PARAMS)},l=function(e,n){return function(){var o=t(r.mark(function t(o){var u,a,f,l,p,d,v,x,y,b,h,m,_,g,w;return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o.data,a=u.id,f=u.method,l=u.params,p=n[f],t.prev=1,void 0!==p){t.next=2;break}throw i(f);case 2:if(void 0!==(d=void 0===l?p():p(l))){t.next=3;break}throw s(f);case 3:if(!(d instanceof Promise)){t.next=5;break}return t.next=4,d;case 4:g=t.sent,t.next=6;break;case 5:g=d;case 6:if(v=g,null!==a){t.next=8;break}if(void 0===v.result){t.next=7;break}throw c(f);case 7:t.next=10;break;case 8:if(void 0!==v.result){t.next=9;break}throw c(f);case 9:x=v.result,y=v.transferables,b=void 0===y?[]:y,e.postMessage({id:a,result:x},b);case 10:t.next=12;break;case 11:t.prev=11,w=t.catch(1),h=w.message,m=w.status,_=void 0===m?-32603:m,e.postMessage({error:{code:_,message:h},id:a});case 12:case"end":return t.stop()}},t,null,[[1,11]])}));return function(e){return o.apply(this,arguments)}}()},p=function(){return new Promise(function(e){var t=new ArrayBuffer(0),r=new MessageChannel,n=r.port1,o=r.port2;n.onmessage=function(t){var r=t.data;return e(null!==r)},o.postMessage(t,[t])})};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var x=new Map,y=function(e,n,u){return v(v({},n),{},{connect:function(t){var r=t.port;r.start();var u=e(r,n),a=o.generateUniqueNumber(x);return x.set(a,function(){u(),r.close(),x.delete(a)}),{result:a}},disconnect:function(e){var t=e.portId,r=x.get(t);if(void 0===r)throw f(t);return r(),{result:null}},isSupported:function(){var e=t(r.mark(function e(){var t,n,o;return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=1,p();case 1:if(!e.sent){e.next=5;break}if(!((t=u())instanceof Promise)){e.next=3;break}return e.next=2,t;case 2:o=e.sent,e.next=4;break;case 3:o=t;case 4:return n=o,e.abrupt("return",{result:n});case 5:return e.abrupt("return",{result:!1});case 6:case"end":return e.stop()}},e)}));function n(){return e.apply(this,arguments)}return n}()})},b=function(e,t){var r=y(b,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0}),n=l(e,r);return e.addEventListener("message",n),function(){return e.removeEventListener("message",n)}};e.createWorker=b,e.isSupported=p}(t,r(293),r(756),r(693),r(389))},472(e,t,r){!function(e,t,r,n){"use strict";var o=function(e,t){return function(r){var o=t.get(r);if(void 0===o)return Promise.resolve(!1);var u=n(o,2),a=u[0],i=u[1];return e(a),t.delete(r),i(!1),Promise.resolve(!0)}},u=function(e,t){var r=function(n,o,u,a){var i=n-e.now();i>0?o.set(a,[t(r,i,n,o,u,a),u]):(o.delete(a),u(!0))};return r},a=function(e,t,r,n){return function(o,u,a){var i=o+u-t.timeOrigin,s=i-t.now();return new Promise(function(t){e.set(a,[r(n,s,i,e,t,a),t])})}},i=new Map,s=o(globalThis.clearTimeout,i),c=new Map,f=o(globalThis.clearTimeout,c),l=u(performance,globalThis.setTimeout),p=a(i,performance,globalThis.setTimeout,l),d=a(c,performance,globalThis.setTimeout,l);r.createWorker(self,{clear:function(){var r=e(t.mark(function e(r){var n,o,u;return t.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.timerId,o=r.timerType,e.next=1,"interval"===o?s(n):f(n);case 1:return u=e.sent,e.abrupt("return",{result:u});case 2:case"end":return e.stop()}},e)}));function n(e){return r.apply(this,arguments)}return n}(),set:function(){var r=e(t.mark(function e(r){var n,o,u,a,i;return t.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.delay,o=r.now,u=r.timerId,a=r.timerType,e.next=1,("interval"===a?p:d)(n,o,u);case 1:return i=e.sent,e.abrupt("return",{result:i});case 2:case"end":return e.stop()}},e)}));function n(e){return r.apply(this,arguments)}return n}()})}(r(293),r(756),r(623),r(715))},172(e){e.exports=function(e,t){this.v=e,this.k=t},e.exports.__esModule=!0,e.exports.default=e.exports},79(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},987(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},293(e){function t(e,t,r,n,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise(function(o,u){var a=e.apply(r,n);function i(e){t(a,o,u,i,s,"next",e)}function s(e){t(a,o,u,i,s,"throw",e)}i(void 0)})}},e.exports.__esModule=!0,e.exports.default=e.exports},693(e,t,r){var n=r(736);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},156(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,a,i=[],s=!0,c=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=u.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},752(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},993(e,t,r){var n=r(546);function o(){var t,r,u="function"==typeof Symbol?Symbol:{},a=u.iterator||"@@iterator",i=u.toStringTag||"@@toStringTag";function s(e,o,u,a){var i=o&&o.prototype instanceof f?o:f,s=Object.create(i.prototype);return n(s,"_invoke",function(e,n,o){var u,a,i,s=0,f=o||[],l=!1,p={p:0,n:0,v:t,a:d,f:d.bind(t,4),d:function(e,r){return u=e,a=0,i=t,p.n=r,c}};function d(e,n){for(a=e,i=n,r=0;!l&&s&&!o&&r<f.length;r++){var o,u=f[r],d=p.p,v=u[2];e>3?(o=v===n)&&(i=u[(a=u[4])?5:(a=3,3)],u[4]=u[5]=t):u[0]<=d&&((o=e<2&&d<u[1])?(a=0,p.v=n,p.n=u[1]):d<v&&(o=e<3||u[0]>n||n>v)&&(u[4]=e,u[5]=n,p.n=v,a=0))}if(o||e>1)return c;throw l=!0,n}return function(o,f,v){if(s>1)throw TypeError("Generator is already running");for(l&&1===f&&d(f,v),a=f,i=v;(r=a<2?t:i)||!l;){u||(a?a<3?(a>1&&(p.n=-1),d(a,i)):p.n=i:p.v=i);try{if(s=2,u){if(a||(o="next"),r=u[o]){if(!(r=r.call(u,i)))throw TypeError("iterator result is not an object");if(!r.done)return r;i=r.value,a<2&&(a=0)}else 1===a&&(r=u.return)&&r.call(u),a<2&&(i=TypeError("The iterator does not provide a '"+o+"' method"),a=1);u=t}else if((r=(l=p.n<0)?i:e.call(n,p))!==c)break}catch(e){u=t,a=1,i=e}finally{s=1}}return{value:r,done:l}}}(e,u,a),!0),s}var c={};function f(){}function l(){}function p(){}r=Object.getPrototypeOf;var d=[][a]?r(r([][a]())):(n(r={},a,function(){return this}),r),v=p.prototype=f.prototype=Object.create(d);function x(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,n(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e}return l.prototype=p,n(v,"constructor",p),n(p,"constructor",l),l.displayName="GeneratorFunction",n(p,i,"GeneratorFunction"),n(v),n(v,i,"Generator"),n(v,a,function(){return this}),n(v,"toString",function(){return"[object Generator]"}),(e.exports=o=function(){return{w:s,m:x}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},869(e,t,r){var n=r(887);e.exports=function(e,t,r,o,u){var a=n(e,t,r,o,u);return a.next().then(function(e){return e.done?e.value:a.next()})},e.exports.__esModule=!0,e.exports.default=e.exports},887(e,t,r){var n=r(993),o=r(791);e.exports=function(e,t,r,u,a){return new o(n().w(e,t,r,u),a||Promise)},e.exports.__esModule=!0,e.exports.default=e.exports},791(e,t,r){var n=r(172),o=r(546);e.exports=function e(t,r){function u(e,o,a,i){try{var s=t[e](o),c=s.value;return c instanceof n?r.resolve(c.v).then(function(e){u("next",e,a,i)},function(e){u("throw",e,a,i)}):r.resolve(c).then(function(e){s.value=e,a(s)},function(e){return u("throw",e,a,i)})}catch(e){i(e)}}var a;this.next||(o(e.prototype),o(e.prototype,"function"==typeof Symbol&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),o(this,"_invoke",function(e,t,n){function o(){return new r(function(t,r){u(e,n,t,r)})}return a=a?a.then(o,o):o()},!0)},e.exports.__esModule=!0,e.exports.default=e.exports},546(e){function t(r,n,o,u){var a=Object.defineProperty;try{a({},"",{})}catch(r){a=0}e.exports=t=function(e,r,n,o){function u(r,n){t(e,r,function(e){return this._invoke(r,n,e)})}r?a?a(e,r,{value:n,enumerable:!o,configurable:!o,writable:!o}):e[r]=n:(u("next",0),u("throw",1),u("return",2))},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n,o,u)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},373(e){e.exports=function(e){var t=Object(e),r=[];for(var n in t)r.unshift(n);return function e(){for(;r.length;)if((n=r.pop())in t)return e.value=n,e.done=!1,e;return e.done=!0,e}},e.exports.__esModule=!0,e.exports.default=e.exports},633(e,t,r){var n=r(172),o=r(993),u=r(869),a=r(887),i=r(791),s=r(373),c=r(579);function f(){"use strict";var t=o(),r=t.m(f),l=(Object.getPrototypeOf?Object.getPrototypeOf(r):r.__proto__).constructor;function p(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))}var d={throw:1,return:2,break:3,continue:3};function v(e){var t,r;return function(n){t||(t={stop:function(){return r(n.a,2)},catch:function(){return n.v},abrupt:function(e,t){return r(n.a,d[e],t)},delegateYield:function(e,o,u){return t.resultName=o,r(n.d,c(e),u)},finish:function(e){return r(n.f,e)}},r=function(e,r,o){n.p=t.prev,n.n=t.next;try{return e(r,o)}finally{t.next=n.n}}),t.resultName&&(t[t.resultName]=n.v,t.resultName=void 0),t.sent=n.v,t.next=n.n;try{return e.call(this,t)}finally{n.p=t.prev,n.n=t.next}}}return(e.exports=f=function(){return{wrap:function(e,r,n,o){return t.w(v(e),r,n,o&&o.reverse())},isGeneratorFunction:p,mark:t.m,awrap:function(e,t){return new n(e,t)},AsyncIterator:i,async:function(e,t,r,n,o){return(p(t)?a:u)(v(e),t,r,n,o)},keys:s,values:c}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=f,e.exports.__esModule=!0,e.exports.default=e.exports},579(e,t,r){var n=r(738).default;e.exports=function(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],r=0;if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw new TypeError(n(e)+" is not iterable")},e.exports.__esModule=!0,e.exports.default=e.exports},715(e,t,r){var n=r(987),o=r(156),u=r(122),a=r(752);e.exports=function(e,t){return n(e)||o(e,t)||u(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},45(e,t,r){var n=r(738).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},736(e,t,r){var n=r(738).default,o=r(45);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},738(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},122(e,t,r){var n=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},756(e,t,r){var n=r(633)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,r),u.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`,
          o = g(c.load, s),
          u = function (v) {
            return o().clearInterval(v)
          },
          i = function (v) {
            return o().clearTimeout(v)
          },
          a = function () {
            var v
            return (v = o()).setInterval.apply(v, arguments)
          },
          d = function () {
            var v
            return (v = o()).setTimeout.apply(v, arguments)
          }
        ;((h.clearInterval = u),
          (h.clearTimeout = i),
          (h.setInterval = a),
          (h.setTimeout = d))
      }))
  }),
  cs = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, '__esModule', { value: !0 }),
      (y.isReactNativeBrowser = y.isWebWorker = void 0))
    var p = () =>
        typeof window < 'u'
          ? typeof navigator < 'u' &&
            navigator.userAgent?.toLowerCase().indexOf(' electron/') > -1 &&
            bt?.versions
            ? !Object.prototype.hasOwnProperty.call(bt.versions, 'electron')
            : typeof window.document < 'u'
          : !1,
      h = () =>
        !!(
          typeof self == 'object' &&
          self?.constructor?.name?.includes('WorkerGlobalScope') &&
          typeof Deno > 'u'
        ),
      c = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
      g = p() || h() || c()
    ;((y.isWebWorker = h()), (y.isReactNativeBrowser = c()), (y.default = g))
  }),
  ES = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p =
        (y && y.__createBinding) ||
        (Object.create
          ? function (a, d, v, S) {
              S === void 0 && (S = v)
              var E = Object.getOwnPropertyDescriptor(d, v)
              ;((!E ||
                ('get' in E ? !d.__esModule : E.writable || E.configurable)) &&
                (E = {
                  enumerable: !0,
                  get: function () {
                    return d[v]
                  },
                }),
                Object.defineProperty(a, S, E))
            }
          : function (a, d, v, S) {
              ;(S === void 0 && (S = v), (a[S] = d[v]))
            }),
      h =
        (y && y.__setModuleDefault) ||
        (Object.create
          ? function (a, d) {
              Object.defineProperty(a, 'default', { enumerable: !0, value: d })
            }
          : function (a, d) {
              a.default = d
            }),
      c =
        (y && y.__importStar) ||
        (function () {
          var a = function (d) {
            return (
              (a =
                Object.getOwnPropertyNames ||
                function (v) {
                  var S = []
                  for (var E in v)
                    Object.prototype.hasOwnProperty.call(v, E) &&
                      (S[S.length] = E)
                  return S
                }),
              a(d)
            )
          }
          return function (d) {
            if (d && d.__esModule) return d
            var v = {}
            if (d != null)
              for (var S = a(d), E = 0; E < S.length; E++)
                S[E] !== 'default' && p(v, d, S[E])
            return (h(v, d), v)
          }
        })()
    Object.defineProperty(y, '__esModule', { value: !0 })
    var g = wS(),
      s = c(cs()),
      o = { set: g.setInterval, clear: g.clearInterval },
      u = { set: (a, d) => setInterval(a, d), clear: (a) => clearInterval(a) },
      i = (a) => {
        switch (a) {
          case 'native':
            return u
          case 'worker':
            return o
          default:
            return s.default && !s.isWebWorker && !s.isReactNativeBrowser
              ? o
              : u
        }
      }
    y.default = i
  }),
  lv = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p =
      (y && y.__importDefault) ||
      function (g) {
        return g && g.__esModule ? g : { default: g }
      }
    Object.defineProperty(y, '__esModule', { value: !0 })
    var h = p(ES()),
      c = class {
        _keepalive
        timerId
        timer
        destroyed = !1
        counter
        client
        _keepaliveTimeoutTimestamp
        _intervalEvery
        get keepaliveTimeoutTimestamp() {
          return this._keepaliveTimeoutTimestamp
        }
        get intervalEvery() {
          return this._intervalEvery
        }
        get keepalive() {
          return this._keepalive
        }
        constructor(g, s) {
          ;((this.client = g),
            (this.timer =
              typeof s == 'object' && 'set' in s && 'clear' in s
                ? s
                : (0, h.default)(s)),
            this.setKeepalive(g.options.keepalive))
        }
        clear() {
          this.timerId &&
            (this.timer.clear(this.timerId), (this.timerId = null))
        }
        setKeepalive(g) {
          if (((g *= 1e3), isNaN(g) || g <= 0 || g > 2147483647))
            throw new Error(
              `Keepalive value must be an integer between 0 and 2147483647. Provided value is ${g}`
            )
          ;((this._keepalive = g),
            this.reschedule(),
            this.client.log(`KeepaliveManager: set keepalive to ${g}ms`))
        }
        destroy() {
          ;(this.clear(), (this.destroyed = !0))
        }
        reschedule() {
          if (this.destroyed) return
          ;(this.clear(), (this.counter = 0))
          let g = Math.ceil(this._keepalive * 1.5)
          ;((this._keepaliveTimeoutTimestamp = Date.now() + g),
            (this._intervalEvery = Math.ceil(this._keepalive / 2)),
            (this.timerId = this.timer.set(() => {
              this.destroyed ||
                ((this.counter += 1),
                this.counter === 2
                  ? this.client.sendPing()
                  : this.counter > 2 && this.client.onKeepaliveTimeout())
            }, this._intervalEvery)))
        }
      }
    y.default = c
  }),
  qf = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p =
        (y && y.__createBinding) ||
        (Object.create
          ? function (T, j, x, k) {
              k === void 0 && (k = x)
              var q = Object.getOwnPropertyDescriptor(j, x)
              ;((!q ||
                ('get' in q ? !j.__esModule : q.writable || q.configurable)) &&
                (q = {
                  enumerable: !0,
                  get: function () {
                    return j[x]
                  },
                }),
                Object.defineProperty(T, k, q))
            }
          : function (T, j, x, k) {
              ;(k === void 0 && (k = x), (T[k] = j[x]))
            }),
      h =
        (y && y.__setModuleDefault) ||
        (Object.create
          ? function (T, j) {
              Object.defineProperty(T, 'default', { enumerable: !0, value: j })
            }
          : function (T, j) {
              T.default = j
            }),
      c =
        (y && y.__importStar) ||
        (function () {
          var T = function (j) {
            return (
              (T =
                Object.getOwnPropertyNames ||
                function (x) {
                  var k = []
                  for (var q in x)
                    Object.prototype.hasOwnProperty.call(x, q) &&
                      (k[k.length] = q)
                  return k
                }),
              T(j)
            )
          }
          return function (j) {
            if (j && j.__esModule) return j
            var x = {}
            if (j != null)
              for (var k = T(j), q = 0; q < k.length; q++)
                k[q] !== 'default' && p(x, j, k[q])
            return (h(x, j), x)
          }
        })(),
      g =
        (y && y.__importDefault) ||
        function (T) {
          return T && T.__esModule ? T : { default: T }
        }
    Object.defineProperty(y, '__esModule', { value: !0 })
    var s = g(U1()),
      o = Ai(),
      u = g(B1()),
      i = g(Sn()),
      a = c(Bb()),
      d = g(kb()),
      v = g(rS()),
      S = g($b()),
      E = g(nS()),
      b = pa(),
      w = iS(),
      A = g(lv()),
      M = c(cs()),
      _ =
        globalThis.setImmediate ||
        ((...T) => {
          let j = T.shift()
          ;(0, b.nextTick)(() => {
            j(...T)
          })
        }),
      O = {
        keepalive: 60,
        reschedulePings: !0,
        protocolId: 'MQTT',
        protocolVersion: 4,
        reconnectPeriod: 1e3,
        connectTimeout: 30 * 1e3,
        clean: !0,
        resubscribe: !0,
        subscribeBatchSize: null,
        writeCache: !0,
        timerVariant: 'auto',
      },
      N = class Hf extends w.TypedEventEmitter {
        static VERSION = b.MQTTJS_VERSION
        connected
        disconnecting
        disconnected
        reconnecting
        incomingStore
        outgoingStore
        options
        queueQoSZero
        _reconnectCount
        log
        messageIdProvider
        outgoing
        messageIdToTopic
        noop
        keepaliveManager
        stream
        queue
        streamBuilder
        _resubscribeTopics
        connackTimer
        reconnectTimer
        _storeProcessing
        _packetIdsDuringStoreProcessing
        _storeProcessingQueue
        _firstConnection
        topicAliasRecv
        topicAliasSend
        _deferredReconnect
        connackPacket
        static defaultId() {
          return `mqttjs_${Math.random().toString(16).substr(2, 8)}`
        }
        constructor(j, x) {
          ;(super(), (this.options = x || {}))
          for (let k in O)
            typeof this.options[k] > 'u'
              ? (this.options[k] = O[k])
              : (this.options[k] = x[k])
          ;((this.log = this.options.log || (0, i.default)('mqttjs:client')),
            (this.noop = this._noop.bind(this)),
            this.log('MqttClient :: version:', Hf.VERSION),
            M.isWebWorker
              ? this.log('MqttClient :: environment', 'webworker')
              : this.log(
                  'MqttClient :: environment',
                  M.default ? 'browser' : 'node'
                ),
            this.log('MqttClient :: options.protocol', x.protocol),
            this.log(
              'MqttClient :: options.protocolVersion',
              x.protocolVersion
            ),
            this.log('MqttClient :: options.username', x.username),
            this.log('MqttClient :: options.keepalive', x.keepalive),
            this.log(
              'MqttClient :: options.reconnectPeriod',
              x.reconnectPeriod
            ),
            this.log(
              'MqttClient :: options.rejectUnauthorized',
              x.rejectUnauthorized
            ),
            this.log(
              'MqttClient :: options.properties.topicAliasMaximum',
              x.properties ? x.properties.topicAliasMaximum : void 0
            ),
            (this.options.clientId =
              typeof x.clientId == 'string' ? x.clientId : Hf.defaultId()),
            this.log('MqttClient :: clientId', this.options.clientId),
            (this.options.customHandleAcks =
              x.protocolVersion === 5 && x.customHandleAcks
                ? x.customHandleAcks
                : (...k) => {
                    k[3](null, 0)
                  }),
            this.options.writeCache ||
              (s.default.writeToStream.cacheNumbers = !1),
            (this.streamBuilder = j),
            (this.messageIdProvider =
              typeof this.options.messageIdProvider > 'u'
                ? new S.default()
                : this.options.messageIdProvider),
            (this.outgoingStore = x.outgoingStore || new d.default()),
            (this.incomingStore = x.incomingStore || new d.default()),
            (this.queueQoSZero =
              x.queueQoSZero === void 0 ? !0 : x.queueQoSZero),
            (this._resubscribeTopics = {}),
            (this.messageIdToTopic = {}),
            (this.keepaliveManager = null),
            (this.connected = !1),
            (this.disconnecting = !1),
            (this.reconnecting = !1),
            (this.queue = []),
            (this.connackTimer = null),
            (this.reconnectTimer = null),
            (this._storeProcessing = !1),
            (this._packetIdsDuringStoreProcessing = {}),
            (this._storeProcessingQueue = []),
            (this.outgoing = {}),
            (this._firstConnection = !0),
            x.properties &&
              x.properties.topicAliasMaximum > 0 &&
              (x.properties.topicAliasMaximum > 65535
                ? this.log(
                    'MqttClient :: options.properties.topicAliasMaximum is out of range'
                  )
                : (this.topicAliasRecv = new E.default(
                    x.properties.topicAliasMaximum
                  ))),
            this.on('connect', () => {
              let { queue: k } = this,
                q = () => {
                  let H = k.shift()
                  this.log('deliver :: entry %o', H)
                  let X = null
                  if (!H) {
                    this._resubscribe()
                    return
                  }
                  ;((X = H.packet),
                    this.log('deliver :: call _sendPacket for %o', X))
                  let I = !0
                  ;(X.messageId &&
                    X.messageId !== 0 &&
                    (this.messageIdProvider.register(X.messageId) || (I = !1)),
                    I
                      ? this._sendPacket(X, (ee) => {
                          ;(H.cb && H.cb(ee), q())
                        })
                      : (this.log(
                          'messageId: %d has already used. The message is skipped and removed.',
                          X.messageId
                        ),
                        q()))
                }
              ;(this.log('connect :: sending queued packets'), q())
            }),
            this.on('close', () => {
              ;(this.log('close :: connected set to `false`'),
                (this.connected = !1),
                this.log('close :: clearing connackTimer'),
                clearTimeout(this.connackTimer),
                this._destroyKeepaliveManager(),
                this.topicAliasRecv && this.topicAliasRecv.clear(),
                this.log('close :: calling _setupReconnect'),
                this._setupReconnect())
            }),
            this.options.manualConnect ||
              (this.log('MqttClient :: setting up stream'), this.connect()))
        }
        handleAuth(j, x) {
          x()
        }
        handleMessage(j, x) {
          x()
        }
        _nextId() {
          return this.messageIdProvider.allocate()
        }
        getLastMessageId() {
          return this.messageIdProvider.getLastAllocated()
        }
        connect() {
          let j = new o.Writable(),
            x = s.default.parser(this.options),
            k = null,
            q = []
          ;(this.log('connect :: calling method to clear reconnect'),
            this._clearReconnect(),
            this.disconnected &&
              !this.reconnecting &&
              ((this.incomingStore =
                this.options.incomingStore || new d.default()),
              (this.outgoingStore =
                this.options.outgoingStore || new d.default()),
              (this.disconnecting = !1),
              (this.disconnected = !1)),
            this.log(
              'connect :: using streamBuilder provided to client to create stream'
            ),
            (this.stream = this.streamBuilder(this)),
            x.on('packet', (J) => {
              ;(this.log('parser :: on packet push to packets array.'),
                q.push(J))
            }))
          let H = () => {
              this.log('work :: getting next packet in queue')
              let J = q.shift()
              if (J)
                (this.log('work :: packet pulled from queue'),
                  (0, v.default)(this, J, X))
              else {
                this.log('work :: no packets in queue')
                let $ = k
                ;((k = null),
                  this.log('work :: done flag is %s', !!$),
                  $ && $())
              }
            },
            X = () => {
              if (q.length) (0, b.nextTick)(H)
              else {
                let J = k
                ;((k = null), J())
              }
            }
          j._write = (J, $, K) => {
            ;((k = K),
              this.log('writable stream :: parsing buffer'),
              x.parse(J),
              H())
          }
          let I = (J) => {
            ;(this.log('streamErrorHandler :: error', J.message),
              J.code
                ? (this.log('streamErrorHandler :: emitting error'),
                  this.emit('error', J))
                : this.noop(J))
          }
          ;(this.log('connect :: pipe stream to writable stream'),
            this.stream.pipe(j),
            this.stream.on('error', I),
            this.stream.on('close', () => {
              ;(this.log('(%s)stream :: on close', this.options.clientId),
                this._flushVolatile(),
                this.log('stream: emit close to MqttClient'),
                this.emit('close'))
            }),
            this.log('connect: sending packet `connect`'))
          let ee = {
            cmd: 'connect',
            protocolId: this.options.protocolId,
            protocolVersion: this.options.protocolVersion,
            clean: this.options.clean,
            clientId: this.options.clientId,
            keepalive: this.options.keepalive,
            username: this.options.username,
            password: this.options.password,
            properties: this.options.properties,
          }
          if (
            (this.options.will &&
              (ee.will = {
                ...this.options.will,
                payload: this.options.will?.payload,
              }),
            this.topicAliasRecv &&
              (ee.properties || (ee.properties = {}),
              this.topicAliasRecv &&
                (ee.properties.topicAliasMaximum = this.topicAliasRecv.max)),
            this._writePacket(ee),
            x.on('error', this.emit.bind(this, 'error')),
            this.options.properties)
          ) {
            if (
              !this.options.properties.authenticationMethod &&
              this.options.properties.authenticationData
            )
              return (
                this.end(() =>
                  this.emit(
                    'error',
                    new Error('Packet has no Authentication Method')
                  )
                ),
                this
              )
            if (
              this.options.properties.authenticationMethod &&
              this.options.authPacket &&
              typeof this.options.authPacket == 'object'
            ) {
              let J = { cmd: 'auth', reasonCode: 0, ...this.options.authPacket }
              this._writePacket(J)
            }
          }
          return (
            this.stream.setMaxListeners(1e3),
            clearTimeout(this.connackTimer),
            (this.connackTimer = setTimeout(() => {
              ;(this.log(
                '!!connectTimeout hit!! Calling _cleanUp with force `true`'
              ),
                this.emit('error', new Error('connack timeout')),
                this._cleanUp(!0))
            }, this.options.connectTimeout)),
            this
          )
        }
        publish(j, x, k, q) {
          this.log('publish :: message `%s` to topic `%s`', x, j)
          let { options: H } = this
          ;(typeof k == 'function' && ((q = k), (k = null)),
            (k = k || {}),
            (k = { qos: 0, retain: !1, dup: !1, ...k }))
          let { qos: X, retain: I, dup: ee, properties: J, cbStorePut: $ } = k
          if (this._checkDisconnecting(q)) return this
          let K = () => {
            let P = 0
            if ((X === 1 || X === 2) && ((P = this._nextId()), P === null))
              return (this.log('No messageId left'), !1)
            let F = {
              cmd: 'publish',
              topic: j,
              payload: x,
              qos: X,
              retain: I,
              messageId: P,
              dup: ee,
            }
            switch (
              (H.protocolVersion === 5 && (F.properties = J),
              this.log('publish :: qos', X),
              X)
            ) {
              case 1:
              case 2:
                ;((this.outgoing[F.messageId] = {
                  volatile: !1,
                  cb: q || this.noop,
                }),
                  this.log('MqttClient:publish: packet cmd: %s', F.cmd),
                  this._sendPacket(F, void 0, $))
                break
              default:
                ;(this.log('MqttClient:publish: packet cmd: %s', F.cmd),
                  this._sendPacket(F, q, $))
                break
            }
            return !0
          }
          return (
            (this._storeProcessing ||
              this._storeProcessingQueue.length > 0 ||
              !K()) &&
              this._storeProcessingQueue.push({
                invoke: K,
                cbStorePut: k.cbStorePut,
                callback: q,
              }),
            this
          )
        }
        publishAsync(j, x, k) {
          return new Promise((q, H) => {
            this.publish(j, x, k, (X, I) => {
              X ? H(X) : q(I)
            })
          })
        }
        subscribe(j, x, k) {
          let q = this.options.protocolVersion
          ;(typeof x == 'function' && (k = x), (k = k || this.noop))
          let H = !1,
            X = []
          typeof j == 'string'
            ? ((j = [j]), (X = j))
            : Array.isArray(j)
              ? (X = j)
              : typeof j == 'object' &&
                ((H = j.resubscribe),
                delete j.resubscribe,
                (X = Object.keys(j)))
          let I = a.validateTopics(X)
          if (I !== null) return (_(k, new Error(`Invalid topic ${I}`)), this)
          if (this._checkDisconnecting(k))
            return (this.log('subscribe: discconecting true'), this)
          let ee = { qos: 0 }
          ;(q === 5 && ((ee.nl = !1), (ee.rap = !1), (ee.rh = 0)),
            (x = { ...ee, ...x }))
          let { properties: J } = x,
            $ = [],
            K = (ce, V) => {
              if (
                ((V = V || x),
                !Object.prototype.hasOwnProperty.call(
                  this._resubscribeTopics,
                  ce
                ) ||
                  this._resubscribeTopics[ce].qos < V.qos ||
                  H)
              ) {
                let B = { topic: ce, qos: V.qos }
                ;(q === 5 &&
                  ((B.nl = V.nl),
                  (B.rap = V.rap),
                  (B.rh = V.rh),
                  (B.properties = J)),
                  this.log(
                    'subscribe: pushing topic `%s` and qos `%s` to subs list',
                    B.topic,
                    B.qos
                  ),
                  $.push(B))
              }
            }
          if (
            (Array.isArray(j)
              ? j.forEach((ce) => {
                  ;(this.log('subscribe: array topic %s', ce), K(ce))
                })
              : Object.keys(j).forEach((ce) => {
                  ;(this.log('subscribe: object topic %s, %o', ce, j[ce]),
                    K(ce, j[ce]))
                }),
            !$.length)
          )
            return (k(null, []), this)
          let P = (ce, V) => {
              let B = { cmd: 'subscribe', subscriptions: ce, messageId: V }
              if ((J && (B.properties = J), this.options.resubscribe)) {
                this.log('subscribe :: resubscribe true')
                let Q = []
                ;(ce.forEach((he) => {
                  if (this.options.reconnectPeriod > 0) {
                    let le = { qos: he.qos }
                    ;(q === 5 &&
                      ((le.nl = he.nl || !1),
                      (le.rap = he.rap || !1),
                      (le.rh = he.rh || 0),
                      (le.properties = he.properties)),
                      (this._resubscribeTopics[he.topic] = le),
                      Q.push(he.topic))
                  }
                }),
                  (this.messageIdToTopic[B.messageId] = Q))
              }
              let D = new Promise((Q, he) => {
                this.outgoing[B.messageId] = {
                  volatile: !0,
                  cb(le, Me) {
                    if (!le) {
                      let { granted: re } = Me
                      for (let Y = 0; Y < re.length; Y += 1) ce[Y].qos = re[Y]
                    }
                    le ? he(new b.ErrorWithSubackPacket(le.message, Me)) : Q(Me)
                  },
                }
              })
              return (
                this.log('subscribe :: call _sendPacket'),
                this._sendPacket(B),
                D
              )
            },
            F = () => {
              let ce = this.options.subscribeBatchSize ?? $.length,
                V = []
              for (let B = 0; B < $.length; B += ce) {
                let D = $.slice(B, B + ce),
                  Q = this._nextId()
                if (Q === null) return (this.log('No messageId left'), !1)
                V.push(P(D, Q))
              }
              return (
                Promise.all(V)
                  .then((B) => {
                    k(null, $, B.at(-1))
                  })
                  .catch((B) => {
                    k(B, $, B.packet)
                  }),
                !0
              )
            }
          return (
            (this._storeProcessing ||
              this._storeProcessingQueue.length > 0 ||
              !F()) &&
              this._storeProcessingQueue.push({ invoke: F, callback: k }),
            this
          )
        }
        subscribeAsync(j, x) {
          return new Promise((k, q) => {
            this.subscribe(j, x, (H, X) => {
              H ? q(H) : k(X)
            })
          })
        }
        unsubscribe(j, x, k) {
          ;(typeof j == 'string' && (j = [j]),
            typeof x == 'function' && (k = x),
            (k = k || this.noop))
          let q = a.validateTopics(j)
          if (q !== null) return (_(k, new Error(`Invalid topic ${q}`)), this)
          if (this._checkDisconnecting(k)) return this
          let H = () => {
            let X = this._nextId()
            if (X === null) return (this.log('No messageId left'), !1)
            let I = { cmd: 'unsubscribe', messageId: X, unsubscriptions: [] }
            return (
              typeof j == 'string'
                ? (I.unsubscriptions = [j])
                : Array.isArray(j) && (I.unsubscriptions = j),
              this.options.resubscribe &&
                I.unsubscriptions.forEach((ee) => {
                  delete this._resubscribeTopics[ee]
                }),
              typeof x == 'object' &&
                x.properties &&
                (I.properties = x.properties),
              (this.outgoing[I.messageId] = { volatile: !0, cb: k }),
              this.log('unsubscribe: call _sendPacket'),
              this._sendPacket(I),
              !0
            )
          }
          return (
            (this._storeProcessing ||
              this._storeProcessingQueue.length > 0 ||
              !H()) &&
              this._storeProcessingQueue.push({ invoke: H, callback: k }),
            this
          )
        }
        unsubscribeAsync(j, x) {
          return new Promise((k, q) => {
            this.unsubscribe(j, x, (H, X) => {
              H ? q(H) : k(X)
            })
          })
        }
        end(j, x, k) {
          ;(this.log('end :: (%s)', this.options.clientId),
            (j == null || typeof j != 'boolean') &&
              ((k = k || x), (x = j), (j = !1)),
            typeof x != 'object' && ((k = k || x), (x = null)),
            this.log('end :: cb? %s', !!k),
            (!k || typeof k != 'function') && (k = this.noop))
          let q = () => {
              ;(this.log(
                'end :: closeStores: closing incoming and outgoing stores'
              ),
                (this.disconnected = !0),
                this.incomingStore.close((X) => {
                  this.outgoingStore.close((I) => {
                    if (
                      (this.log('end :: closeStores: emitting end'),
                      this.emit('end'),
                      k)
                    ) {
                      let ee = X || I
                      ;(this.log(
                        'end :: closeStores: invoking callback with args'
                      ),
                        k(ee))
                    }
                  })
                }),
                this._deferredReconnect
                  ? this._deferredReconnect()
                  : (this.options.reconnectPeriod === 0 ||
                      this.options.manualConnect) &&
                    (this.disconnecting = !1))
            },
            H = () => {
              ;(this.log(
                'end :: (%s) :: finish :: calling _cleanUp with force %s',
                this.options.clientId,
                j
              ),
                this._cleanUp(
                  j,
                  () => {
                    ;(this.log(
                      'end :: finish :: calling process.nextTick on closeStores'
                    ),
                      (0, b.nextTick)(q))
                  },
                  x
                ))
            }
          return this.disconnecting
            ? (k(), this)
            : (this._clearReconnect(),
              (this.disconnecting = !0),
              !j && Object.keys(this.outgoing).length > 0
                ? (this.log(
                    'end :: (%s) :: calling finish in 10ms once outgoing is empty',
                    this.options.clientId
                  ),
                  this.once('outgoingEmpty', setTimeout.bind(null, H, 10)))
                : (this.log(
                    'end :: (%s) :: immediately calling finish',
                    this.options.clientId
                  ),
                  H()),
              this)
        }
        endAsync(j, x) {
          return new Promise((k, q) => {
            this.end(j, x, (H) => {
              H ? q(H) : k()
            })
          })
        }
        removeOutgoingMessage(j) {
          if (this.outgoing[j]) {
            let { cb: x } = this.outgoing[j]
            this._removeOutgoingAndStoreMessage(j, () => {
              x(new Error('Message removed'))
            })
          }
          return this
        }
        reconnect(j) {
          this.log('client reconnect')
          let x = () => {
            ;(j
              ? ((this.options.incomingStore = j.incomingStore),
                (this.options.outgoingStore = j.outgoingStore))
              : ((this.options.incomingStore = null),
                (this.options.outgoingStore = null)),
              (this.incomingStore =
                this.options.incomingStore || new d.default()),
              (this.outgoingStore =
                this.options.outgoingStore || new d.default()),
              (this.disconnecting = !1),
              (this.disconnected = !1),
              (this._deferredReconnect = null),
              this._reconnect())
          }
          return (
            this.disconnecting && !this.disconnected
              ? (this._deferredReconnect = x)
              : x(),
            this
          )
        }
        _flushVolatile() {
          this.outgoing &&
            (this.log(
              '_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function'
            ),
            Object.keys(this.outgoing).forEach((j) => {
              this.outgoing[j].volatile &&
                typeof this.outgoing[j].cb == 'function' &&
                (this.outgoing[j].cb(new Error('Connection closed')),
                delete this.outgoing[j])
            }))
        }
        _flush() {
          this.outgoing &&
            (this.log('_flush: queue exists? %b', !!this.outgoing),
            Object.keys(this.outgoing).forEach((j) => {
              typeof this.outgoing[j].cb == 'function' &&
                (this.outgoing[j].cb(new Error('Connection closed')),
                delete this.outgoing[j])
            }))
        }
        _removeTopicAliasAndRecoverTopicName(j) {
          let x
          j.properties && (x = j.properties.topicAlias)
          let k = j.topic.toString()
          if (
            (this.log(
              '_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o',
              x,
              k
            ),
            k.length === 0)
          ) {
            if (typeof x > 'u') return new Error('Unregistered Topic Alias')
            if (((k = this.topicAliasSend.getTopicByAlias(x)), typeof k > 'u'))
              return new Error('Unregistered Topic Alias')
            j.topic = k
          }
          x && delete j.properties.topicAlias
        }
        _checkDisconnecting(j) {
          return (
            this.disconnecting &&
              (j && j !== this.noop
                ? j(new Error('client disconnecting'))
                : this.emit('error', new Error('client disconnecting'))),
            this.disconnecting
          )
        }
        _reconnect() {
          ;(this.log('_reconnect: emitting reconnect to client'),
            this.emit('reconnect'),
            this.connected
              ? (this.end(() => {
                  this.connect()
                }),
                this.log('client already connected. disconnecting first.'))
              : (this.log('_reconnect: calling connect'), this.connect()))
        }
        _setupReconnect() {
          !this.disconnecting &&
          !this.reconnectTimer &&
          this.options.reconnectPeriod > 0
            ? (this.reconnecting ||
                (this.log('_setupReconnect :: emit `offline` state'),
                this.emit('offline'),
                this.log('_setupReconnect :: set `reconnecting` to `true`'),
                (this.reconnecting = !0)),
              this.log(
                '_setupReconnect :: setting reconnectTimer for %d ms',
                this.options.reconnectPeriod
              ),
              (this.reconnectTimer = setInterval(() => {
                ;(this.log('reconnectTimer :: reconnect triggered!'),
                  this._reconnect())
              }, this.options.reconnectPeriod)))
            : this.log('_setupReconnect :: doing nothing...')
        }
        _clearReconnect() {
          ;(this.log('_clearReconnect : clearing reconnect timer'),
            this.reconnectTimer &&
              (clearInterval(this.reconnectTimer),
              (this.reconnectTimer = null)))
        }
        _cleanUp(j, x, k = {}) {
          if (
            (x &&
              (this.log(
                '_cleanUp :: done callback provided for on stream close'
              ),
              this.stream.on('close', x)),
            this.log('_cleanUp :: forced? %s', j),
            j)
          )
            (this.options.reconnectPeriod === 0 &&
              this.options.clean &&
              this._flush(),
              this.log(
                '_cleanUp :: (%s) :: destroying stream',
                this.options.clientId
              ),
              this.stream.destroy())
          else {
            let q = { cmd: 'disconnect', ...k }
            ;(this.log(
              '_cleanUp :: (%s) :: call _sendPacket with disconnect packet',
              this.options.clientId
            ),
              this._sendPacket(q, () => {
                ;(this.log(
                  '_cleanUp :: (%s) :: destroying stream',
                  this.options.clientId
                ),
                  _(() => {
                    this.stream.end(() => {
                      this.log(
                        '_cleanUp :: (%s) :: stream destroyed',
                        this.options.clientId
                      )
                    })
                  }))
              }))
          }
          ;(!this.disconnecting &&
            !this.reconnecting &&
            (this.log(
              '_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect.'
            ),
            this._clearReconnect(),
            this._setupReconnect()),
            this._destroyKeepaliveManager(),
            x &&
              !this.connected &&
              (this.log(
                '_cleanUp :: (%s) :: removing stream `done` callback `close` listener',
                this.options.clientId
              ),
              this.stream.removeListener('close', x),
              x()))
        }
        _storeAndSend(j, x, k) {
          this.log(
            'storeAndSend :: store packet with cmd %s to outgoingStore',
            j.cmd
          )
          let q = j,
            H
          if (
            q.cmd === 'publish' &&
            ((q = (0, u.default)(j)),
            (H = this._removeTopicAliasAndRecoverTopicName(q)),
            H)
          )
            return x && x(H)
          this.outgoingStore.put(q, (X) => {
            if (X) return x && x(X)
            ;(k(), this._writePacket(j, x))
          })
        }
        _applyTopicAlias(j) {
          if (this.options.protocolVersion === 5 && j.cmd === 'publish') {
            let x
            j.properties && (x = j.properties.topicAlias)
            let k = j.topic.toString()
            if (this.topicAliasSend)
              if (x) {
                if (
                  k.length !== 0 &&
                  (this.log(
                    'applyTopicAlias :: register topic: %s - alias: %d',
                    k,
                    x
                  ),
                  !this.topicAliasSend.put(k, x))
                )
                  return (
                    this.log(
                      'applyTopicAlias :: error out of range. topic: %s - alias: %d',
                      k,
                      x
                    ),
                    new Error('Sending Topic Alias out of range')
                  )
              } else
                k.length !== 0 &&
                  (this.options.autoAssignTopicAlias
                    ? ((x = this.topicAliasSend.getAliasByTopic(k)),
                      x
                        ? ((j.topic = ''),
                          (j.properties = { ...j.properties, topicAlias: x }),
                          this.log(
                            'applyTopicAlias :: auto assign(use) topic: %s - alias: %d',
                            k,
                            x
                          ))
                        : ((x = this.topicAliasSend.getLruAlias()),
                          this.topicAliasSend.put(k, x),
                          (j.properties = { ...j.properties, topicAlias: x }),
                          this.log(
                            'applyTopicAlias :: auto assign topic: %s - alias: %d',
                            k,
                            x
                          )))
                    : this.options.autoUseTopicAlias &&
                      ((x = this.topicAliasSend.getAliasByTopic(k)),
                      x &&
                        ((j.topic = ''),
                        (j.properties = { ...j.properties, topicAlias: x }),
                        this.log(
                          'applyTopicAlias :: auto use topic: %s - alias: %d',
                          k,
                          x
                        ))))
            else if (x)
              return (
                this.log(
                  'applyTopicAlias :: error out of range. topic: %s - alias: %d',
                  k,
                  x
                ),
                new Error('Sending Topic Alias out of range')
              )
          }
        }
        _noop(j) {
          this.log('noop ::', j)
        }
        _writePacket(j, x) {
          ;(this.log('_writePacket :: packet: %O', j),
            this.log('_writePacket :: emitting `packetsend`'),
            this.emit('packetsend', j),
            this.log('_writePacket :: writing to stream'))
          let k = s.default.writeToStream(j, this.stream, this.options)
          ;(this.log('_writePacket :: writeToStream result %s', k),
            !k && x && x !== this.noop
              ? (this.log(
                  '_writePacket :: handle events on `drain` once through callback.'
                ),
                this.stream.once('drain', x))
              : x && (this.log('_writePacket :: invoking cb'), x()))
        }
        _sendPacket(j, x, k, q) {
          ;(this.log('_sendPacket :: (%s) ::  start', this.options.clientId),
            (k = k || this.noop),
            (x = x || this.noop))
          let H = this._applyTopicAlias(j)
          if (H) {
            x(H)
            return
          }
          if (!this.connected) {
            if (j.cmd === 'auth') {
              this._writePacket(j, x)
              return
            }
            ;(this.log(
              '_sendPacket :: client not connected. Storing packet offline.'
            ),
              this._storePacket(j, x, k))
            return
          }
          if (q) {
            this._writePacket(j, x)
            return
          }
          switch (j.cmd) {
            case 'publish':
              break
            case 'pubrel':
              this._storeAndSend(j, x, k)
              return
            default:
              this._writePacket(j, x)
              return
          }
          switch (j.qos) {
            case 2:
            case 1:
              this._storeAndSend(j, x, k)
              break
            default:
              this._writePacket(j, x)
              break
          }
          this.log('_sendPacket :: (%s) ::  end', this.options.clientId)
        }
        _storePacket(j, x, k) {
          ;(this.log('_storePacket :: packet: %o', j),
            this.log('_storePacket :: cb? %s', !!x),
            (k = k || this.noop))
          let q = j
          if (q.cmd === 'publish') {
            q = (0, u.default)(j)
            let X = this._removeTopicAliasAndRecoverTopicName(q)
            if (X) return x && x(X)
          }
          let H = q.qos || 0
          ;(H === 0 && this.queueQoSZero) || q.cmd !== 'publish'
            ? this.queue.push({ packet: q, cb: x })
            : H > 0
              ? ((x = this.outgoing[q.messageId]
                  ? this.outgoing[q.messageId].cb
                  : null),
                this.outgoingStore.put(q, (X) => {
                  if (X) return x && x(X)
                  k()
                }))
              : x && x(new Error('No connection to broker'))
        }
        _setupKeepaliveManager() {
          ;(this.log(
            '_setupKeepaliveManager :: keepalive %d (seconds)',
            this.options.keepalive
          ),
            !this.keepaliveManager &&
              this.options.keepalive &&
              (this.keepaliveManager = new A.default(
                this,
                this.options.timerVariant
              )))
        }
        _destroyKeepaliveManager() {
          this.keepaliveManager &&
            (this.log(
              '_destroyKeepaliveManager :: destroying keepalive manager'
            ),
            this.keepaliveManager.destroy(),
            (this.keepaliveManager = null))
        }
        reschedulePing(j = !1) {
          this.keepaliveManager &&
            this.options.keepalive &&
            (j || this.options.reschedulePings) &&
            this._reschedulePing()
        }
        _reschedulePing() {
          ;(this.log('_reschedulePing :: rescheduling ping'),
            this.keepaliveManager.reschedule())
        }
        sendPing() {
          ;(this.log('_sendPing :: sending pingreq'),
            this._sendPacket({ cmd: 'pingreq' }))
        }
        onKeepaliveTimeout() {
          ;(this.emit('error', new Error('Keepalive timeout')),
            this.log('onKeepaliveTimeout :: calling _cleanUp with force true'),
            this._cleanUp(!0))
        }
        _resubscribe() {
          this.log('_resubscribe')
          let j = Object.keys(this._resubscribeTopics)
          if (
            !this._firstConnection &&
            (this.options.clean ||
              (this.options.protocolVersion >= 4 &&
                !this.connackPacket.sessionPresent)) &&
            j.length > 0
          )
            if (this.options.resubscribe)
              if (this.options.protocolVersion === 5) {
                this.log('_resubscribe: protocolVersion 5')
                for (let x = 0; x < j.length; x++) {
                  let k = {}
                  ;((k[j[x]] = this._resubscribeTopics[j[x]]),
                    (k.resubscribe = !0),
                    this.subscribe(k, { properties: k[j[x]].properties }))
                }
              } else
                ((this._resubscribeTopics.resubscribe = !0),
                  this.subscribe(this._resubscribeTopics))
            else this._resubscribeTopics = {}
          this._firstConnection = !1
        }
        _onConnect(j) {
          if (this.disconnected) {
            this.emit('connect', j)
            return
          }
          ;((this.connackPacket = j),
            this.messageIdProvider.clear(),
            this._setupKeepaliveManager(),
            (this.connected = !0))
          let x = () => {
            let k = this.outgoingStore.createStream(),
              q = () => {
                ;(k.destroy(),
                  (k = null),
                  this._flushStoreProcessingQueue(),
                  H())
              },
              H = () => {
                ;((this._storeProcessing = !1),
                  (this._packetIdsDuringStoreProcessing = {}))
              }
            ;(this.once('close', q),
              k.on('error', (I) => {
                ;(H(),
                  this._flushStoreProcessingQueue(),
                  this.removeListener('close', q),
                  this.emit('error', I))
              }))
            let X = () => {
              if (!k) return
              let I = k.read(1),
                ee
              if (!I) {
                k.once('readable', X)
                return
              }
              if (
                ((this._storeProcessing = !0),
                this._packetIdsDuringStoreProcessing[I.messageId])
              ) {
                X()
                return
              }
              !this.disconnecting && !this.reconnectTimer
                ? ((ee = this.outgoing[I.messageId]
                    ? this.outgoing[I.messageId].cb
                    : null),
                  (this.outgoing[I.messageId] = {
                    volatile: !1,
                    cb(J, $) {
                      ;(ee && ee(J, $), X())
                    },
                  }),
                  (this._packetIdsDuringStoreProcessing[I.messageId] = !0),
                  this.messageIdProvider.register(I.messageId)
                    ? this._sendPacket(I, void 0, void 0, !0)
                    : this.log('messageId: %d has already used.', I.messageId))
                : k.destroy && k.destroy()
            }
            ;(k.on('end', () => {
              let I = !0
              for (let ee in this._packetIdsDuringStoreProcessing)
                if (!this._packetIdsDuringStoreProcessing[ee]) {
                  I = !1
                  break
                }
              ;(this.removeListener('close', q),
                I
                  ? (H(),
                    this._invokeAllStoreProcessingQueue(),
                    this.emit('connect', j))
                  : x())
            }),
              X())
          }
          x()
        }
        _invokeStoreProcessingQueue() {
          if (!this._storeProcessing && this._storeProcessingQueue.length > 0) {
            let j = this._storeProcessingQueue[0]
            if (j && j.invoke()) return (this._storeProcessingQueue.shift(), !0)
          }
          return !1
        }
        _invokeAllStoreProcessingQueue() {
          for (; this._invokeStoreProcessingQueue(); );
        }
        _flushStoreProcessingQueue() {
          for (let j of this._storeProcessingQueue)
            (j.cbStorePut && j.cbStorePut(new Error('Connection closed')),
              j.callback && j.callback(new Error('Connection closed')))
          this._storeProcessingQueue.splice(0)
        }
        _removeOutgoingAndStoreMessage(j, x) {
          ;(delete this.outgoing[j],
            this.outgoingStore.del({ messageId: j }, (k, q) => {
              ;(x(k, q),
                this.messageIdProvider.deallocate(j),
                this._invokeStoreProcessingQueue())
            }))
        }
      }
    y.default = N
  }),
  AS = Ue((y) => {
    ;(Te(), xe(), Oe(), Object.defineProperty(y, '__esModule', { value: !0 }))
    var p = Jb(),
      h = class {
        numberAllocator
        lastId
        constructor() {
          this.numberAllocator = new p.NumberAllocator(1, 65535)
        }
        allocate() {
          return ((this.lastId = this.numberAllocator.alloc()), this.lastId)
        }
        getLastAllocated() {
          return this.lastId
        }
        register(c) {
          return this.numberAllocator.use(c)
        }
        deallocate(c) {
          this.numberAllocator.free(c)
        }
        clear() {
          this.numberAllocator.clear()
        }
      }
    y.default = h
  })
function TS() {
  if (Pf) return Uo
  Pf = !0
  let y = 2147483647,
    p = 36,
    h = 1,
    c = 26,
    g = 38,
    s = 700,
    o = 72,
    u = 128,
    i = '-',
    a = /^xn--/,
    d = /[^\0-\x7F]/,
    v = /[\x2E\u3002\uFF0E\uFF61]/g,
    S = {
      overflow: 'Overflow: input needs wider integers to process',
      'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
      'invalid-input': 'Invalid input',
    },
    E = p - h,
    b = Math.floor,
    w = String.fromCharCode
  function A(H) {
    throw new RangeError(S[H])
  }
  function M(H, X) {
    let I = [],
      ee = H.length
    for (; ee--; ) I[ee] = X(H[ee])
    return I
  }
  function _(H, X) {
    let I = H.split('@'),
      ee = ''
    ;(I.length > 1 && ((ee = I[0] + '@'), (H = I[1])), (H = H.replace(v, '.')))
    let J = H.split('.'),
      $ = M(J, X).join('.')
    return ee + $
  }
  function O(H) {
    let X = [],
      I = 0,
      ee = H.length
    for (; I < ee; ) {
      let J = H.charCodeAt(I++)
      if (J >= 55296 && J <= 56319 && I < ee) {
        let $ = H.charCodeAt(I++)
        ;($ & 64512) == 56320
          ? X.push(((J & 1023) << 10) + ($ & 1023) + 65536)
          : (X.push(J), I--)
      } else X.push(J)
    }
    return X
  }
  let N = (H) => String.fromCodePoint(...H),
    T = function (H) {
      return H >= 48 && H < 58
        ? 26 + (H - 48)
        : H >= 65 && H < 91
          ? H - 65
          : H >= 97 && H < 123
            ? H - 97
            : p
    },
    j = function (H, X) {
      return H + 22 + 75 * (H < 26) - ((X != 0) << 5)
    },
    x = function (H, X, I) {
      let ee = 0
      for (H = I ? b(H / s) : H >> 1, H += b(H / X); H > (E * c) >> 1; ee += p)
        H = b(H / E)
      return b(ee + ((E + 1) * H) / (H + g))
    },
    k = function (H) {
      let X = [],
        I = H.length,
        ee = 0,
        J = u,
        $ = o,
        K = H.lastIndexOf(i)
      K < 0 && (K = 0)
      for (let P = 0; P < K; ++P)
        (H.charCodeAt(P) >= 128 && A('not-basic'), X.push(H.charCodeAt(P)))
      for (let P = K > 0 ? K + 1 : 0; P < I; ) {
        let F = ee
        for (let V = 1, B = p; ; B += p) {
          P >= I && A('invalid-input')
          let D = T(H.charCodeAt(P++))
          ;(D >= p && A('invalid-input'),
            D > b((y - ee) / V) && A('overflow'),
            (ee += D * V))
          let Q = B <= $ ? h : B >= $ + c ? c : B - $
          if (D < Q) break
          let he = p - Q
          ;(V > b(y / he) && A('overflow'), (V *= he))
        }
        let ce = X.length + 1
        ;(($ = x(ee - F, ce, F == 0)),
          b(ee / ce) > y - J && A('overflow'),
          (J += b(ee / ce)),
          (ee %= ce),
          X.splice(ee++, 0, J))
      }
      return String.fromCodePoint(...X)
    },
    q = function (H) {
      let X = []
      H = O(H)
      let I = H.length,
        ee = u,
        J = 0,
        $ = o
      for (let F of H) F < 128 && X.push(w(F))
      let K = X.length,
        P = K
      for (K && X.push(i); P < I; ) {
        let F = y
        for (let V of H) V >= ee && V < F && (F = V)
        let ce = P + 1
        ;(F - ee > b((y - J) / ce) && A('overflow'),
          (J += (F - ee) * ce),
          (ee = F))
        for (let V of H)
          if ((V < ee && ++J > y && A('overflow'), V === ee)) {
            let B = J
            for (let D = p; ; D += p) {
              let Q = D <= $ ? h : D >= $ + c ? c : D - $
              if (B < Q) break
              let he = B - Q,
                le = p - Q
              ;(X.push(w(j(Q + (he % le), 0))), (B = b(he / le)))
            }
            ;(X.push(w(j(B, 0))), ($ = x(J, ce, P === K)), (J = 0), ++P)
          }
        ;(++J, ++ee)
      }
      return X.join('')
    }
  return (
    (Uo = {
      version: '2.3.1',
      ucs2: { decode: O, encode: N },
      decode: k,
      encode: q,
      toASCII: function (H) {
        return _(H, function (X) {
          return d.test(X) ? 'xn--' + q(X) : X
        })
      },
      toUnicode: function (H) {
        return _(H, function (X) {
          return a.test(X) ? k(X.slice(4).toLowerCase()) : X
        })
      },
    }),
    Uo
  )
}
var Uo,
  Pf,
  Zn,
  OS = yr(() => {
    ;(Te(),
      xe(),
      Oe(),
      (Uo = {}),
      (Pf = !1),
      (Zn = TS()),
      Zn.decode,
      Zn.encode,
      Zn.toASCII,
      Zn.toUnicode,
      Zn.ucs2,
      Zn.version)
  })
function xS() {
  return (
    Yf ||
      ((Yf = !0),
      (Gf = function () {
        if (
          typeof Symbol != 'function' ||
          typeof Object.getOwnPropertySymbols != 'function'
        )
          return !1
        if (typeof Symbol.iterator == 'symbol') return !0
        var y = {},
          p = Symbol('test'),
          h = Object(p)
        if (
          typeof p == 'string' ||
          Object.prototype.toString.call(p) !== '[object Symbol]' ||
          Object.prototype.toString.call(h) !== '[object Symbol]'
        )
          return !1
        var c = 42
        y[p] = c
        for (p in y) return !1
        if (
          (typeof Object.keys == 'function' && Object.keys(y).length !== 0) ||
          (typeof Object.getOwnPropertyNames == 'function' &&
            Object.getOwnPropertyNames(y).length !== 0)
        )
          return !1
        var g = Object.getOwnPropertySymbols(y)
        if (
          g.length !== 1 ||
          g[0] !== p ||
          !Object.prototype.propertyIsEnumerable.call(y, p)
        )
          return !1
        if (typeof Object.getOwnPropertyDescriptor == 'function') {
          var s = Object.getOwnPropertyDescriptor(y, p)
          if (s.value !== c || s.enumerable !== !0) return !1
        }
        return !0
      })),
    Gf
  )
}
function MS() {
  return (Vf || ((Vf = !0), (Qf = Error)), Qf)
}
function RS() {
  return (Ff || ((Ff = !0), (Kf = EvalError)), Kf)
}
function CS() {
  return (Xf || ((Xf = !0), (Wf = RangeError)), Wf)
}
function jS() {
  return (Jf || ((Jf = !0), (Zf = ReferenceError)), Zf)
}
function ov() {
  return (eh || ((eh = !0), ($f = SyntaxError)), $f)
}
function pl() {
  return (rh || ((rh = !0), (th = TypeError)), th)
}
function NS() {
  return (ih || ((ih = !0), (nh = URIError)), nh)
}
function US() {
  if (ah) return Do
  ah = !0
  var y = typeof Symbol < 'u' && Symbol,
    p = xS()
  return (
    (Do = function () {
      return typeof y != 'function' ||
        typeof Symbol != 'function' ||
        typeof y('foo') != 'symbol' ||
        typeof Symbol('bar') != 'symbol'
        ? !1
        : p()
    }),
    Do
  )
}
function DS() {
  if (lh) return Bo
  lh = !0
  var y = { __proto__: null, foo: {} },
    p = Object
  return (
    (Bo = function () {
      return { __proto__: y }.foo === y.foo && !(y instanceof p)
    }),
    Bo
  )
}
function BS() {
  if (oh) return ko
  oh = !0
  var y = 'Function.prototype.bind called on incompatible ',
    p = Object.prototype.toString,
    h = Math.max,
    c = '[object Function]',
    g = function (u, i) {
      for (var a = [], d = 0; d < u.length; d += 1) a[d] = u[d]
      for (var v = 0; v < i.length; v += 1) a[v + u.length] = i[v]
      return a
    },
    s = function (u, i) {
      for (var a = [], d = i, v = 0; d < u.length; d += 1, v += 1) a[v] = u[d]
      return a
    },
    o = function (u, i) {
      for (var a = '', d = 0; d < u.length; d += 1)
        ((a += u[d]), d + 1 < u.length && (a += i))
      return a
    }
  return (
    (ko = function (u) {
      var i = this
      if (typeof i != 'function' || p.apply(i) !== c) throw new TypeError(y + i)
      for (
        var a = s(arguments, 1),
          d,
          v = function () {
            if (this instanceof d) {
              var A = i.apply(this, g(a, arguments))
              return Object(A) === A ? A : this
            }
            return i.apply(u, g(a, arguments))
          },
          S = h(0, i.length - a.length),
          E = [],
          b = 0;
        b < S;
        b++
      )
        E[b] = '$' + b
      if (
        ((d = Function(
          'binder',
          'return function (' +
            o(E, ',') +
            '){ return binder.apply(this,arguments); }'
        )(v)),
        i.prototype)
      ) {
        var w = function () {}
        ;((w.prototype = i.prototype),
          (d.prototype = new w()),
          (w.prototype = null))
      }
      return d
    }),
    ko
  )
}
function Lh() {
  if (sh) return Lo
  sh = !0
  var y = BS()
  return ((Lo = Function.prototype.bind || y), Lo)
}
function kS() {
  if (uh) return Io
  uh = !0
  var y = Function.prototype.call,
    p = Object.prototype.hasOwnProperty,
    h = Lh()
  return ((Io = h.call(y, p)), Io)
}
function ya() {
  if (ch) return zo
  ch = !0
  var y,
    p = MS(),
    h = RS(),
    c = CS(),
    g = jS(),
    s = ov(),
    o = pl(),
    u = NS(),
    i = Function,
    a = function (P) {
      try {
        return i('"use strict"; return (' + P + ').constructor;')()
      } catch {}
    },
    d = Object.getOwnPropertyDescriptor
  if (d)
    try {
      d({}, '')
    } catch {
      d = null
    }
  var v = function () {
      throw new o()
    },
    S = d
      ? (function () {
          try {
            return (arguments.callee, v)
          } catch {
            try {
              return d(arguments, 'callee').get
            } catch {
              return v
            }
          }
        })()
      : v,
    E = US()(),
    b = DS()(),
    w =
      Object.getPrototypeOf ||
      (b
        ? function (P) {
            return P.__proto__
          }
        : null),
    A = {},
    M = typeof Uint8Array > 'u' || !w ? y : w(Uint8Array),
    _ = {
      __proto__: null,
      '%AggregateError%': typeof AggregateError > 'u' ? y : AggregateError,
      '%Array%': Array,
      '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? y : ArrayBuffer,
      '%ArrayIteratorPrototype%': E && w ? w([][Symbol.iterator]()) : y,
      '%AsyncFromSyncIteratorPrototype%': y,
      '%AsyncFunction%': A,
      '%AsyncGenerator%': A,
      '%AsyncGeneratorFunction%': A,
      '%AsyncIteratorPrototype%': A,
      '%Atomics%': typeof Atomics > 'u' ? y : Atomics,
      '%BigInt%': typeof BigInt > 'u' ? y : BigInt,
      '%BigInt64Array%': typeof BigInt64Array > 'u' ? y : BigInt64Array,
      '%BigUint64Array%': typeof BigUint64Array > 'u' ? y : BigUint64Array,
      '%Boolean%': Boolean,
      '%DataView%': typeof DataView > 'u' ? y : DataView,
      '%Date%': Date,
      '%decodeURI%': decodeURI,
      '%decodeURIComponent%': decodeURIComponent,
      '%encodeURI%': encodeURI,
      '%encodeURIComponent%': encodeURIComponent,
      '%Error%': p,
      '%eval%': eval,
      '%EvalError%': h,
      '%Float32Array%': typeof Float32Array > 'u' ? y : Float32Array,
      '%Float64Array%': typeof Float64Array > 'u' ? y : Float64Array,
      '%FinalizationRegistry%':
        typeof FinalizationRegistry > 'u' ? y : FinalizationRegistry,
      '%Function%': i,
      '%GeneratorFunction%': A,
      '%Int8Array%': typeof Int8Array > 'u' ? y : Int8Array,
      '%Int16Array%': typeof Int16Array > 'u' ? y : Int16Array,
      '%Int32Array%': typeof Int32Array > 'u' ? y : Int32Array,
      '%isFinite%': isFinite,
      '%isNaN%': isNaN,
      '%IteratorPrototype%': E && w ? w(w([][Symbol.iterator]())) : y,
      '%JSON%': typeof JSON == 'object' ? JSON : y,
      '%Map%': typeof Map > 'u' ? y : Map,
      '%MapIteratorPrototype%':
        typeof Map > 'u' || !E || !w ? y : w(new Map()[Symbol.iterator]()),
      '%Math%': Math,
      '%Number%': Number,
      '%Object%': Object,
      '%parseFloat%': parseFloat,
      '%parseInt%': parseInt,
      '%Promise%': typeof Promise > 'u' ? y : Promise,
      '%Proxy%': typeof Proxy > 'u' ? y : Proxy,
      '%RangeError%': c,
      '%ReferenceError%': g,
      '%Reflect%': typeof Reflect > 'u' ? y : Reflect,
      '%RegExp%': RegExp,
      '%Set%': typeof Set > 'u' ? y : Set,
      '%SetIteratorPrototype%':
        typeof Set > 'u' || !E || !w ? y : w(new Set()[Symbol.iterator]()),
      '%SharedArrayBuffer%':
        typeof SharedArrayBuffer > 'u' ? y : SharedArrayBuffer,
      '%String%': String,
      '%StringIteratorPrototype%': E && w ? w(''[Symbol.iterator]()) : y,
      '%Symbol%': E ? Symbol : y,
      '%SyntaxError%': s,
      '%ThrowTypeError%': S,
      '%TypedArray%': M,
      '%TypeError%': o,
      '%Uint8Array%': typeof Uint8Array > 'u' ? y : Uint8Array,
      '%Uint8ClampedArray%':
        typeof Uint8ClampedArray > 'u' ? y : Uint8ClampedArray,
      '%Uint16Array%': typeof Uint16Array > 'u' ? y : Uint16Array,
      '%Uint32Array%': typeof Uint32Array > 'u' ? y : Uint32Array,
      '%URIError%': u,
      '%WeakMap%': typeof WeakMap > 'u' ? y : WeakMap,
      '%WeakRef%': typeof WeakRef > 'u' ? y : WeakRef,
      '%WeakSet%': typeof WeakSet > 'u' ? y : WeakSet,
    }
  if (w)
    try {
      null.error
    } catch (P) {
      var O = w(w(P))
      _['%Error.prototype%'] = O
    }
  var N = function P(F) {
      var ce
      if (F === '%AsyncFunction%') ce = a('async function () {}')
      else if (F === '%GeneratorFunction%') ce = a('function* () {}')
      else if (F === '%AsyncGeneratorFunction%') ce = a('async function* () {}')
      else if (F === '%AsyncGenerator%') {
        var V = P('%AsyncGeneratorFunction%')
        V && (ce = V.prototype)
      } else if (F === '%AsyncIteratorPrototype%') {
        var B = P('%AsyncGenerator%')
        B && w && (ce = w(B.prototype))
      }
      return ((_[F] = ce), ce)
    },
    T = {
      __proto__: null,
      '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
      '%ArrayPrototype%': ['Array', 'prototype'],
      '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
      '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
      '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
      '%ArrayProto_values%': ['Array', 'prototype', 'values'],
      '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
      '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
      '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype',
      ],
      '%BooleanPrototype%': ['Boolean', 'prototype'],
      '%DataViewPrototype%': ['DataView', 'prototype'],
      '%DatePrototype%': ['Date', 'prototype'],
      '%ErrorPrototype%': ['Error', 'prototype'],
      '%EvalErrorPrototype%': ['EvalError', 'prototype'],
      '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
      '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
      '%FunctionPrototype%': ['Function', 'prototype'],
      '%Generator%': ['GeneratorFunction', 'prototype'],
      '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
      '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
      '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
      '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
      '%JSONParse%': ['JSON', 'parse'],
      '%JSONStringify%': ['JSON', 'stringify'],
      '%MapPrototype%': ['Map', 'prototype'],
      '%NumberPrototype%': ['Number', 'prototype'],
      '%ObjectPrototype%': ['Object', 'prototype'],
      '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
      '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
      '%PromisePrototype%': ['Promise', 'prototype'],
      '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
      '%Promise_all%': ['Promise', 'all'],
      '%Promise_reject%': ['Promise', 'reject'],
      '%Promise_resolve%': ['Promise', 'resolve'],
      '%RangeErrorPrototype%': ['RangeError', 'prototype'],
      '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
      '%RegExpPrototype%': ['RegExp', 'prototype'],
      '%SetPrototype%': ['Set', 'prototype'],
      '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
      '%StringPrototype%': ['String', 'prototype'],
      '%SymbolPrototype%': ['Symbol', 'prototype'],
      '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
      '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
      '%TypeErrorPrototype%': ['TypeError', 'prototype'],
      '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
      '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
      '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
      '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
      '%URIErrorPrototype%': ['URIError', 'prototype'],
      '%WeakMapPrototype%': ['WeakMap', 'prototype'],
      '%WeakSetPrototype%': ['WeakSet', 'prototype'],
    },
    j = Lh(),
    x = kS(),
    k = j.call(Function.call, Array.prototype.concat),
    q = j.call(Function.apply, Array.prototype.splice),
    H = j.call(Function.call, String.prototype.replace),
    X = j.call(Function.call, String.prototype.slice),
    I = j.call(Function.call, RegExp.prototype.exec),
    ee =
      /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    J = /\\(\\)?/g,
    $ = function (P) {
      var F = X(P, 0, 1),
        ce = X(P, -1)
      if (F === '%' && ce !== '%')
        throw new s('invalid intrinsic syntax, expected closing `%`')
      if (ce === '%' && F !== '%')
        throw new s('invalid intrinsic syntax, expected opening `%`')
      var V = []
      return (
        H(P, ee, function (B, D, Q, he) {
          V[V.length] = Q ? H(he, J, '$1') : D || B
        }),
        V
      )
    },
    K = function (P, F) {
      var ce = P,
        V
      if ((x(T, ce) && ((V = T[ce]), (ce = '%' + V[0] + '%')), x(_, ce))) {
        var B = _[ce]
        if ((B === A && (B = N(ce)), typeof B > 'u' && !F))
          throw new o(
            'intrinsic ' +
              P +
              ' exists, but is not available. Please file an issue!'
          )
        return { alias: V, name: ce, value: B }
      }
      throw new s('intrinsic ' + P + ' does not exist!')
    }
  return (
    (zo = function (P, F) {
      if (typeof P != 'string' || P.length === 0)
        throw new o('intrinsic name must be a non-empty string')
      if (arguments.length > 1 && typeof F != 'boolean')
        throw new o('"allowMissing" argument must be a boolean')
      if (I(/^%?[^%]*%?$/, P) === null)
        throw new s(
          '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
        )
      var ce = $(P),
        V = ce.length > 0 ? ce[0] : '',
        B = K('%' + V + '%', F),
        D = B.name,
        Q = B.value,
        he = !1,
        le = B.alias
      le && ((V = le[0]), q(ce, k([0, 1], le)))
      for (var Me = 1, re = !0; Me < ce.length; Me += 1) {
        var Y = ce[Me],
          ye = X(Y, 0, 1),
          oe = X(Y, -1)
        if (
          (ye === '"' ||
            ye === "'" ||
            ye === '`' ||
            oe === '"' ||
            oe === "'" ||
            oe === '`') &&
          ye !== oe
        )
          throw new s('property names with quotes must have matching quotes')
        if (
          ((Y === 'constructor' || !re) && (he = !0),
          (V += '.' + Y),
          (D = '%' + V + '%'),
          x(_, D))
        )
          Q = _[D]
        else if (Q != null) {
          if (!(Y in Q)) {
            if (!F)
              throw new o(
                'base intrinsic for ' +
                  P +
                  ' exists, but the property is not available.'
              )
            return
          }
          if (d && Me + 1 >= ce.length) {
            var ue = d(Q, Y)
            ;((re = !!ue),
              re && 'get' in ue && !('originalValue' in ue.get)
                ? (Q = ue.get)
                : (Q = Q[Y]))
          } else ((re = x(Q, Y)), (Q = Q[Y]))
          re && !he && (_[D] = Q)
        }
      }
      return Q
    }),
    zo
  )
}
function Ih() {
  if (fh) return qo
  fh = !0
  var y = ya(),
    p = y('%Object.defineProperty%', !0) || !1
  if (p)
    try {
      p({}, 'a', { value: 1 })
    } catch {
      p = !1
    }
  return ((qo = p), qo)
}
function sv() {
  if (hh) return Ho
  hh = !0
  var y = ya(),
    p = y('%Object.getOwnPropertyDescriptor%', !0)
  if (p)
    try {
      p([], 'length')
    } catch {
      p = null
    }
  return ((Ho = p), Ho)
}
function LS() {
  if (dh) return Po
  dh = !0
  var y = Ih(),
    p = ov(),
    h = pl(),
    c = sv()
  return (
    (Po = function (g, s, o) {
      if (!g || (typeof g != 'object' && typeof g != 'function'))
        throw new h('`obj` must be an object or a function`')
      if (typeof s != 'string' && typeof s != 'symbol')
        throw new h('`property` must be a string or a symbol`')
      if (
        arguments.length > 3 &&
        typeof arguments[3] != 'boolean' &&
        arguments[3] !== null
      )
        throw new h('`nonEnumerable`, if provided, must be a boolean or null')
      if (
        arguments.length > 4 &&
        typeof arguments[4] != 'boolean' &&
        arguments[4] !== null
      )
        throw new h('`nonWritable`, if provided, must be a boolean or null')
      if (
        arguments.length > 5 &&
        typeof arguments[5] != 'boolean' &&
        arguments[5] !== null
      )
        throw new h('`nonConfigurable`, if provided, must be a boolean or null')
      if (arguments.length > 6 && typeof arguments[6] != 'boolean')
        throw new h('`loose`, if provided, must be a boolean')
      var u = arguments.length > 3 ? arguments[3] : null,
        i = arguments.length > 4 ? arguments[4] : null,
        a = arguments.length > 5 ? arguments[5] : null,
        d = arguments.length > 6 ? arguments[6] : !1,
        v = !!c && c(g, s)
      if (y)
        y(g, s, {
          configurable: a === null && v ? v.configurable : !a,
          enumerable: u === null && v ? v.enumerable : !u,
          value: o,
          writable: i === null && v ? v.writable : !i,
        })
      else if (d || (!u && !i && !a)) g[s] = o
      else
        throw new p(
          'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.'
        )
    }),
    Po
  )
}
function IS() {
  if (ph) return Go
  ph = !0
  var y = Ih(),
    p = function () {
      return !!y
    }
  return (
    (p.hasArrayLengthDefineBug = function () {
      if (!y) return null
      try {
        return y([], 'length', { value: 1 }).length !== 1
      } catch {
        return !0
      }
    }),
    (Go = p),
    Go
  )
}
function zS() {
  if (yh) return Yo
  yh = !0
  var y = ya(),
    p = LS(),
    h = IS()(),
    c = sv(),
    g = pl(),
    s = y('%Math.floor%')
  return (
    (Yo = function (o, u) {
      if (typeof o != 'function') throw new g('`fn` is not a function')
      if (typeof u != 'number' || u < 0 || u > 4294967295 || s(u) !== u)
        throw new g('`length` must be a positive 32-bit integer')
      var i = arguments.length > 2 && !!arguments[2],
        a = !0,
        d = !0
      if ('length' in o && c) {
        var v = c(o, 'length')
        ;(v && !v.configurable && (a = !1), v && !v.writable && (d = !1))
      }
      return (
        (a || d || !i) && (h ? p(o, 'length', u, !0, !0) : p(o, 'length', u)),
        o
      )
    }),
    Yo
  )
}
function qS() {
  if (gh) return fa
  gh = !0
  var y = Lh(),
    p = ya(),
    h = zS(),
    c = pl(),
    g = p('%Function.prototype.apply%'),
    s = p('%Function.prototype.call%'),
    o = p('%Reflect.apply%', !0) || y.call(s, g),
    u = Ih(),
    i = p('%Math.max%')
  fa = function (d) {
    if (typeof d != 'function') throw new c('a function is required')
    var v = o(y, s, arguments)
    return h(v, 1 + i(0, d.length - (arguments.length - 1)), !0)
  }
  var a = function () {
    return o(y, g, arguments)
  }
  return (u ? u(fa, 'apply', { value: a }) : (fa.apply = a), fa)
}
function HS() {
  if (mh) return Qo
  mh = !0
  var y = ya(),
    p = qS(),
    h = p(y('String.prototype.indexOf'))
  return (
    (Qo = function (c, g) {
      var s = y(c, !!g)
      return typeof s == 'function' && h(c, '.prototype.') > -1 ? p(s) : s
    }),
    Qo
  )
}
var Gf,
  Yf,
  Qf,
  Vf,
  Kf,
  Ff,
  Wf,
  Xf,
  Zf,
  Jf,
  $f,
  eh,
  th,
  rh,
  nh,
  ih,
  Do,
  ah,
  Bo,
  lh,
  ko,
  oh,
  Lo,
  sh,
  Io,
  uh,
  zo,
  ch,
  qo,
  fh,
  Ho,
  hh,
  Po,
  dh,
  Go,
  ph,
  Yo,
  yh,
  fa,
  gh,
  Qo,
  mh,
  PS = yr(() => {
    ;(Te(),
      xe(),
      Oe(),
      (Gf = {}),
      (Yf = !1),
      (Qf = {}),
      (Vf = !1),
      (Kf = {}),
      (Ff = !1),
      (Wf = {}),
      (Xf = !1),
      (Zf = {}),
      (Jf = !1),
      ($f = {}),
      (eh = !1),
      (th = {}),
      (rh = !1),
      (nh = {}),
      (ih = !1),
      (Do = {}),
      (ah = !1),
      (Bo = {}),
      (lh = !1),
      (ko = {}),
      (oh = !1),
      (Lo = {}),
      (sh = !1),
      (Io = {}),
      (uh = !1),
      (zo = {}),
      (ch = !1),
      (qo = {}),
      (fh = !1),
      (Ho = {}),
      (hh = !1),
      (Po = {}),
      (dh = !1),
      (Go = {}),
      (ph = !1),
      (Yo = {}),
      (yh = !1),
      (fa = {}),
      (gh = !1),
      (Qo = {}),
      (mh = !1))
  })
function zh(y) {
  throw new Error(
    'Node.js process ' + y + ' is not supported by JSPM core outside of Node.js'
  )
}
function GS() {
  !Si ||
    !vi ||
    ((Si = !1), vi.length ? (Qr = vi.concat(Qr)) : (fl = -1), Qr.length && uv())
}
function uv() {
  if (!Si) {
    var y = setTimeout(GS, 0)
    Si = !0
    for (var p = Qr.length; p; ) {
      for (vi = Qr, Qr = []; ++fl < p; ) vi && vi[fl].run()
      ;((fl = -1), (p = Qr.length))
    }
    ;((vi = null), (Si = !1), clearTimeout(y))
  }
}
function YS(y) {
  var p = new Array(arguments.length - 1)
  if (arguments.length > 1)
    for (var h = 1; h < arguments.length; h++) p[h - 1] = arguments[h]
  ;(Qr.push(new cv(y, p)), Qr.length === 1 && !Si && setTimeout(uv, 0))
}
function cv(y, p) {
  ;((this.fun = y), (this.array = p))
}
function Wt() {}
function QS(y) {
  zh('_linkedBinding')
}
function VS(y) {
  zh('dlopen')
}
function KS() {
  return []
}
function FS() {
  return []
}
function WS(y, p) {
  if (!y) throw new Error(p || 'assertion error')
}
function XS() {
  return !1
}
function ZS() {
  return vn.now() / 1e3
}
function Oc(y) {
  var p = Math.floor((Date.now() - vn.now()) * 0.001),
    h = vn.now() * 0.001,
    c = Math.floor(h) + p,
    g = Math.floor((h % 1) * 1e9)
  return (
    y && ((c = c - y[0]), (g = g - y[1]), g < 0 && (c--, (g += Vo))),
    [c, g]
  )
}
function Wn() {
  return qh
}
function JS(y) {
  return []
}
var Qr,
  Si,
  vi,
  fl,
  Yg,
  Qg,
  Vg,
  Kg,
  Fg,
  Wg,
  Xg,
  Zg,
  Jg,
  $g,
  em,
  tm,
  rm,
  nm,
  im,
  am,
  lm,
  om,
  sm,
  um,
  cm,
  Ro,
  fm,
  hm,
  dm,
  pm,
  ym,
  gm,
  mm,
  bm,
  vm,
  _m,
  Sm,
  wm,
  Em,
  Am,
  Tm,
  Om,
  xm,
  Mm,
  Rm,
  Cm,
  jm,
  Nm,
  Um,
  Dm,
  Bm,
  vn,
  xc,
  Vo,
  km,
  Lm,
  Im,
  zm,
  qm,
  Hm,
  Pm,
  Gm,
  Ym,
  Qm,
  Vm,
  qh,
  fv = yr(() => {
    ;(Te(),
      xe(),
      Oe(),
      (Qr = []),
      (Si = !1),
      (fl = -1),
      (cv.prototype.run = function () {
        this.fun.apply(null, this.array)
      }),
      (Yg = 'browser'),
      (Qg = 'x64'),
      (Vg = 'browser'),
      (Kg = {
        PATH: '/usr/bin',
        LANG: navigator.language + '.UTF-8',
        PWD: '/',
        HOME: '/home',
        TMP: '/tmp',
      }),
      (Fg = ['/usr/bin/node']),
      (Wg = []),
      (Xg = 'v16.8.0'),
      (Zg = {}),
      (Jg = function (y, p) {
        console.warn((p ? p + ': ' : '') + y)
      }),
      ($g = function (y) {
        zh('binding')
      }),
      (em = function (y) {
        return 0
      }),
      (tm = function () {
        return '/'
      }),
      (rm = function (y) {}),
      (nm = { name: 'node', sourceUrl: '', headersUrl: '', libUrl: '' }),
      (im = Wt),
      (am = []),
      (lm = {}),
      (om = !1),
      (sm = {}),
      (um = Wt),
      (cm = Wt),
      (Ro = function () {
        return {}
      }),
      (fm = Ro),
      (hm = Ro),
      (dm = Wt),
      (pm = Wt),
      (ym = Wt),
      (gm = {}),
      (mm = {
        inspector: !1,
        debug: !1,
        uv: !1,
        ipv6: !1,
        tls_alpn: !1,
        tls_sni: !1,
        tls_ocsp: !1,
        tls: !1,
        cached_builtins: !0,
      }),
      (bm = Wt),
      (vm = Wt),
      (_m = Wt),
      (Sm = Wt),
      (wm = Wt),
      (Em = Wt),
      (Am = Wt),
      (Tm = void 0),
      (Om = void 0),
      (xm = void 0),
      (Mm = Wt),
      (Rm = 2),
      (Cm = 1),
      (jm = '/bin/usr/node'),
      (Nm = 9229),
      (Um = 'node'),
      (Dm = []),
      (Bm = Wt),
      (vn = {
        now:
          typeof performance < 'u' ? performance.now.bind(performance) : void 0,
        timing: typeof performance < 'u' ? performance.timing : void 0,
      }),
      vn.now === void 0 &&
        ((xc = Date.now()),
        vn.timing &&
          vn.timing.navigationStart &&
          (xc = vn.timing.navigationStart),
        (vn.now = () => Date.now() - xc)),
      (Vo = 1e9),
      (Oc.bigint = function (y) {
        var p = Oc(y)
        return typeof BigInt > 'u'
          ? p[0] * Vo + p[1]
          : BigInt(p[0] * Vo) + BigInt(p[1])
      }),
      (km = 10),
      (Lm = {}),
      (Im = 0),
      (zm = Wn),
      (qm = Wn),
      (Hm = Wn),
      (Pm = Wn),
      (Gm = Wn),
      (Ym = Wt),
      (Qm = Wn),
      (Vm = Wn),
      (qh = {
        version: Xg,
        versions: Zg,
        arch: Qg,
        platform: Vg,
        release: nm,
        _rawDebug: im,
        moduleLoadList: am,
        binding: $g,
        _linkedBinding: QS,
        _events: Lm,
        _eventsCount: Im,
        _maxListeners: km,
        on: Wn,
        addListener: zm,
        once: qm,
        off: Hm,
        removeListener: Pm,
        removeAllListeners: Gm,
        emit: Ym,
        prependListener: Qm,
        prependOnceListener: Vm,
        listeners: JS,
        domain: lm,
        _exiting: om,
        config: sm,
        dlopen: VS,
        uptime: ZS,
        _getActiveRequests: KS,
        _getActiveHandles: FS,
        reallyExit: um,
        _kill: cm,
        cpuUsage: Ro,
        resourceUsage: fm,
        memoryUsage: hm,
        kill: dm,
        exit: pm,
        openStdin: ym,
        allowedNodeEnvironmentFlags: gm,
        assert: WS,
        features: mm,
        _fatalExceptions: bm,
        setUncaughtExceptionCaptureCallback: vm,
        hasUncaughtExceptionCaptureCallback: XS,
        emitWarning: Jg,
        nextTick: YS,
        _tickCallback: _m,
        _debugProcess: Sm,
        _debugEnd: wm,
        _startProfilerIdleNotifier: Em,
        _stopProfilerIdleNotifier: Am,
        stdout: Tm,
        stdin: xm,
        stderr: Om,
        abort: Mm,
        umask: em,
        chdir: rm,
        cwd: tm,
        env: Kg,
        title: Yg,
        argv: Fg,
        execArgv: Wg,
        pid: Rm,
        ppid: Cm,
        execPath: jm,
        debugPort: Nm,
        hrtime: Oc,
        argv0: Um,
        _preload_modules: Dm,
        setSourceMapsEnabled: Bm,
      }))
  })
function $S() {
  if (bh) return Ko
  bh = !0
  var y = qh
  function p(s) {
    if (typeof s != 'string')
      throw new TypeError(
        'Path must be a string. Received ' + JSON.stringify(s)
      )
  }
  function h(s, o) {
    for (var u = '', i = 0, a = -1, d = 0, v, S = 0; S <= s.length; ++S) {
      if (S < s.length) v = s.charCodeAt(S)
      else {
        if (v === 47) break
        v = 47
      }
      if (v === 47) {
        if (!(a === S - 1 || d === 1))
          if (a !== S - 1 && d === 2) {
            if (
              u.length < 2 ||
              i !== 2 ||
              u.charCodeAt(u.length - 1) !== 46 ||
              u.charCodeAt(u.length - 2) !== 46
            ) {
              if (u.length > 2) {
                var E = u.lastIndexOf('/')
                if (E !== u.length - 1) {
                  ;(E === -1
                    ? ((u = ''), (i = 0))
                    : ((u = u.slice(0, E)),
                      (i = u.length - 1 - u.lastIndexOf('/'))),
                    (a = S),
                    (d = 0))
                  continue
                }
              } else if (u.length === 2 || u.length === 1) {
                ;((u = ''), (i = 0), (a = S), (d = 0))
                continue
              }
            }
            o && (u.length > 0 ? (u += '/..') : (u = '..'), (i = 2))
          } else
            (u.length > 0
              ? (u += '/' + s.slice(a + 1, S))
              : (u = s.slice(a + 1, S)),
              (i = S - a - 1))
        ;((a = S), (d = 0))
      } else v === 46 && d !== -1 ? ++d : (d = -1)
    }
    return u
  }
  function c(s, o) {
    var u = o.dir || o.root,
      i = o.base || (o.name || '') + (o.ext || '')
    return u ? (u === o.root ? u + i : u + s + i) : i
  }
  var g = {
    resolve: function () {
      for (
        var s = '', o = !1, u, i = arguments.length - 1;
        i >= -1 && !o;
        i--
      ) {
        var a
        ;(i >= 0
          ? (a = arguments[i])
          : (u === void 0 && (u = y.cwd()), (a = u)),
          p(a),
          a.length !== 0 && ((s = a + '/' + s), (o = a.charCodeAt(0) === 47)))
      }
      return (
        (s = h(s, !o)),
        o ? (s.length > 0 ? '/' + s : '/') : s.length > 0 ? s : '.'
      )
    },
    normalize: function (s) {
      if ((p(s), s.length === 0)) return '.'
      var o = s.charCodeAt(0) === 47,
        u = s.charCodeAt(s.length - 1) === 47
      return (
        (s = h(s, !o)),
        s.length === 0 && !o && (s = '.'),
        s.length > 0 && u && (s += '/'),
        o ? '/' + s : s
      )
    },
    isAbsolute: function (s) {
      return (p(s), s.length > 0 && s.charCodeAt(0) === 47)
    },
    join: function () {
      if (arguments.length === 0) return '.'
      for (var s, o = 0; o < arguments.length; ++o) {
        var u = arguments[o]
        ;(p(u), u.length > 0 && (s === void 0 ? (s = u) : (s += '/' + u)))
      }
      return s === void 0 ? '.' : g.normalize(s)
    },
    relative: function (s, o) {
      if (
        (p(s),
        p(o),
        s === o || ((s = g.resolve(s)), (o = g.resolve(o)), s === o))
      )
        return ''
      for (var u = 1; u < s.length && s.charCodeAt(u) === 47; ++u);
      for (
        var i = s.length, a = i - u, d = 1;
        d < o.length && o.charCodeAt(d) === 47;
        ++d
      );
      for (
        var v = o.length, S = v - d, E = a < S ? a : S, b = -1, w = 0;
        w <= E;
        ++w
      ) {
        if (w === E) {
          if (S > E) {
            if (o.charCodeAt(d + w) === 47) return o.slice(d + w + 1)
            if (w === 0) return o.slice(d + w)
          } else
            a > E && (s.charCodeAt(u + w) === 47 ? (b = w) : w === 0 && (b = 0))
          break
        }
        var A = s.charCodeAt(u + w),
          M = o.charCodeAt(d + w)
        if (A !== M) break
        A === 47 && (b = w)
      }
      var _ = ''
      for (w = u + b + 1; w <= i; ++w)
        (w === i || s.charCodeAt(w) === 47) &&
          (_.length === 0 ? (_ += '..') : (_ += '/..'))
      return _.length > 0
        ? _ + o.slice(d + b)
        : ((d += b), o.charCodeAt(d) === 47 && ++d, o.slice(d))
    },
    _makeLong: function (s) {
      return s
    },
    dirname: function (s) {
      if ((p(s), s.length === 0)) return '.'
      for (
        var o = s.charCodeAt(0), u = o === 47, i = -1, a = !0, d = s.length - 1;
        d >= 1;
        --d
      )
        if (((o = s.charCodeAt(d)), o === 47)) {
          if (!a) {
            i = d
            break
          }
        } else a = !1
      return i === -1 ? (u ? '/' : '.') : u && i === 1 ? '//' : s.slice(0, i)
    },
    basename: function (s, o) {
      if (o !== void 0 && typeof o != 'string')
        throw new TypeError('"ext" argument must be a string')
      p(s)
      var u = 0,
        i = -1,
        a = !0,
        d
      if (o !== void 0 && o.length > 0 && o.length <= s.length) {
        if (o.length === s.length && o === s) return ''
        var v = o.length - 1,
          S = -1
        for (d = s.length - 1; d >= 0; --d) {
          var E = s.charCodeAt(d)
          if (E === 47) {
            if (!a) {
              u = d + 1
              break
            }
          } else
            (S === -1 && ((a = !1), (S = d + 1)),
              v >= 0 &&
                (E === o.charCodeAt(v)
                  ? --v === -1 && (i = d)
                  : ((v = -1), (i = S))))
        }
        return (u === i ? (i = S) : i === -1 && (i = s.length), s.slice(u, i))
      } else {
        for (d = s.length - 1; d >= 0; --d)
          if (s.charCodeAt(d) === 47) {
            if (!a) {
              u = d + 1
              break
            }
          } else i === -1 && ((a = !1), (i = d + 1))
        return i === -1 ? '' : s.slice(u, i)
      }
    },
    extname: function (s) {
      p(s)
      for (
        var o = -1, u = 0, i = -1, a = !0, d = 0, v = s.length - 1;
        v >= 0;
        --v
      ) {
        var S = s.charCodeAt(v)
        if (S === 47) {
          if (!a) {
            u = v + 1
            break
          }
          continue
        }
        ;(i === -1 && ((a = !1), (i = v + 1)),
          S === 46
            ? o === -1
              ? (o = v)
              : d !== 1 && (d = 1)
            : o !== -1 && (d = -1))
      }
      return o === -1 ||
        i === -1 ||
        d === 0 ||
        (d === 1 && o === i - 1 && o === u + 1)
        ? ''
        : s.slice(o, i)
    },
    format: function (s) {
      if (s === null || typeof s != 'object')
        throw new TypeError(
          'The "pathObject" argument must be of type Object. Received type ' +
            typeof s
        )
      return c('/', s)
    },
    parse: function (s) {
      p(s)
      var o = { root: '', dir: '', base: '', ext: '', name: '' }
      if (s.length === 0) return o
      var u = s.charCodeAt(0),
        i = u === 47,
        a
      i ? ((o.root = '/'), (a = 1)) : (a = 0)
      for (
        var d = -1, v = 0, S = -1, E = !0, b = s.length - 1, w = 0;
        b >= a;
        --b
      ) {
        if (((u = s.charCodeAt(b)), u === 47)) {
          if (!E) {
            v = b + 1
            break
          }
          continue
        }
        ;(S === -1 && ((E = !1), (S = b + 1)),
          u === 46
            ? d === -1
              ? (d = b)
              : w !== 1 && (w = 1)
            : d !== -1 && (w = -1))
      }
      return (
        d === -1 ||
        S === -1 ||
        w === 0 ||
        (w === 1 && d === S - 1 && d === v + 1)
          ? S !== -1 &&
            (v === 0 && i
              ? (o.base = o.name = s.slice(1, S))
              : (o.base = o.name = s.slice(v, S)))
          : (v === 0 && i
              ? ((o.name = s.slice(1, d)), (o.base = s.slice(1, S)))
              : ((o.name = s.slice(v, d)), (o.base = s.slice(v, S))),
            (o.ext = s.slice(d, S))),
        v > 0 ? (o.dir = s.slice(0, v - 1)) : i && (o.dir = '/'),
        o
      )
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null,
  }
  return ((g.posix = g), (Ko = g), Ko)
}
var Ko,
  bh,
  vh,
  ew = yr(() => {
    ;(Te(), xe(), Oe(), fv(), (Ko = {}), (bh = !1), (vh = $S()))
  }),
  hv = {}
ha(hv, {
  URL: () => wv,
  Url: () => mv,
  default: () => Xt,
  fileURLToPath: () => pv,
  format: () => bv,
  parse: () => Sv,
  pathToFileURL: () => yv,
  resolve: () => vv,
  resolveObject: () => _v,
})
function tw() {
  if (_h) return Fo
  _h = !0
  var y = typeof Map == 'function' && Map.prototype,
    p =
      Object.getOwnPropertyDescriptor && y
        ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
        : null,
    h = y && p && typeof p.get == 'function' ? p.get : null,
    c = y && Map.prototype.forEach,
    g = typeof Set == 'function' && Set.prototype,
    s =
      Object.getOwnPropertyDescriptor && g
        ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
        : null,
    o = g && s && typeof s.get == 'function' ? s.get : null,
    u = g && Set.prototype.forEach,
    i = typeof WeakMap == 'function' && WeakMap.prototype,
    a = i ? WeakMap.prototype.has : null,
    d = typeof WeakSet == 'function' && WeakSet.prototype,
    v = d ? WeakSet.prototype.has : null,
    S = typeof WeakRef == 'function' && WeakRef.prototype,
    E = S ? WeakRef.prototype.deref : null,
    b = Boolean.prototype.valueOf,
    w = Object.prototype.toString,
    A = Function.prototype.toString,
    M = String.prototype.match,
    _ = String.prototype.slice,
    O = String.prototype.replace,
    N = String.prototype.toUpperCase,
    T = String.prototype.toLowerCase,
    j = RegExp.prototype.test,
    x = Array.prototype.concat,
    k = Array.prototype.join,
    q = Array.prototype.slice,
    H = Math.floor,
    X = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
    I = Object.getOwnPropertySymbols,
    ee =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? Symbol.prototype.toString
        : null,
    J = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
    $ =
      typeof Symbol == 'function' &&
      Symbol.toStringTag &&
      (typeof Symbol.toStringTag === J || !0)
        ? Symbol.toStringTag
        : null,
    K = Object.prototype.propertyIsEnumerable,
    P =
      (typeof Reflect == 'function'
        ? Reflect.getPrototypeOf
        : Object.getPrototypeOf) ||
      ([].__proto__ === Array.prototype
        ? function (se) {
            return se.__proto__
          }
        : null)
  function F(se, me) {
    if (
      se === 1 / 0 ||
      se === -1 / 0 ||
      se !== se ||
      (se && se > -1e3 && se < 1e3) ||
      j.call(/e/, me)
    )
      return me
    var Ye = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g
    if (typeof se == 'number') {
      var Pe = se < 0 ? -H(-se) : H(se)
      if (Pe !== se) {
        var Ze = String(Pe),
          et = _.call(me, Ze.length + 1)
        return (
          O.call(Ze, Ye, '$&_') +
          '.' +
          O.call(O.call(et, /([0-9]{3})/g, '$&_'), /_$/, '')
        )
      }
    }
    return O.call(me, Ye, '$&_')
  }
  var ce = gv,
    V = ce.custom,
    B = ue(V) ? V : null
  Fo = function se(me, Ye, Pe, Ze) {
    var et = Ye || {}
    if (
      we(et, 'quoteStyle') &&
      et.quoteStyle !== 'single' &&
      et.quoteStyle !== 'double'
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"')
    if (
      we(et, 'maxStringLength') &&
      (typeof et.maxStringLength == 'number'
        ? et.maxStringLength < 0 && et.maxStringLength !== 1 / 0
        : et.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      )
    var Ar = we(et, 'customInspect') ? et.customInspect : !0
    if (typeof Ar != 'boolean' && Ar !== 'symbol')
      throw new TypeError(
        'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
      )
    if (
      we(et, 'indent') &&
      et.indent !== null &&
      et.indent !== '	' &&
      !(parseInt(et.indent, 10) === et.indent && et.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      )
    if (we(et, 'numericSeparator') && typeof et.numericSeparator != 'boolean')
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      )
    var Zt = et.numericSeparator
    if (typeof me > 'u') return 'undefined'
    if (me === null) return 'null'
    if (typeof me == 'boolean') return me ? 'true' : 'false'
    if (typeof me == 'string') return Se(me, et)
    if (typeof me == 'number') {
      if (me === 0) return 1 / 0 / me > 0 ? '0' : '-0'
      var Mt = String(me)
      return Zt ? F(me, Mt) : Mt
    }
    if (typeof me == 'bigint') {
      var Jt = String(me) + 'n'
      return Zt ? F(me, Jt) : Jt
    }
    var nr = typeof et.depth > 'u' ? 5 : et.depth
    if (
      (typeof Pe > 'u' && (Pe = 0), Pe >= nr && nr > 0 && typeof me == 'object')
    )
      return he(me) ? '[Array]' : '[Object]'
    var $t = de(et, Pe)
    if (typeof Ze > 'u') Ze = []
    else if (ge(Ze, me) >= 0) return '[Circular]'
    function Bt(or, zr, Wr) {
      if ((zr && ((Ze = q.call(Ze)), Ze.push(zr)), Wr)) {
        var gr = { depth: et.depth }
        return (
          we(et, 'quoteStyle') && (gr.quoteStyle = et.quoteStyle),
          se(or, gr, Pe + 1, Ze)
        )
      }
      return se(or, et, Pe + 1, Ze)
    }
    if (typeof me == 'function' && !Me(me)) {
      var Ti = ne(me),
        Kr = qe(me, Bt)
      return (
        '[Function' +
        (Ti ? ': ' + Ti : ' (anonymous)') +
        ']' +
        (Kr.length > 0 ? ' { ' + k.call(Kr, ', ') + ' }' : '')
      )
    }
    if (ue(me)) {
      var Fr = J
        ? O.call(String(me), /^(Symbol\(.*\))_[^)]*$/, '$1')
        : ee.call(me)
      return typeof me == 'object' && !J ? m(Fr) : Fr
    }
    if (Ie(me)) {
      for (
        var z = '<' + T.call(String(me.nodeName)),
          W = me.attributes || [],
          ze = 0;
        ze < W.length;
        ze++
      )
        z += ' ' + W[ze].name + '=' + D(Q(W[ze].value), 'double', et)
      return (
        (z += '>'),
        me.childNodes && me.childNodes.length && (z += '...'),
        (z += '</' + T.call(String(me.nodeName)) + '>'),
        z
      )
    }
    if (he(me)) {
      if (me.length === 0) return '[]'
      var He = qe(me, Bt)
      return $t && !te(He)
        ? '[' + Ae(He, $t) + ']'
        : '[ ' + k.call(He, ', ') + ' ]'
    }
    if (re(me)) {
      var Ge = qe(me, Bt)
      return !('cause' in Error.prototype) &&
        'cause' in me &&
        !K.call(me, 'cause')
        ? '{ [' +
            String(me) +
            '] ' +
            k.call(x.call('[cause]: ' + Bt(me.cause), Ge), ', ') +
            ' }'
        : Ge.length === 0
          ? '[' + String(me) + ']'
          : '{ [' + String(me) + '] ' + k.call(Ge, ', ') + ' }'
    }
    if (typeof me == 'object' && Ar) {
      if (B && typeof me[B] == 'function' && ce)
        return ce(me, { depth: nr - Pe })
      if (Ar !== 'symbol' && typeof me.inspect == 'function')
        return me.inspect()
    }
    if (Re(me)) {
      var Et = []
      return (
        c &&
          c.call(me, function (or, zr) {
            Et.push(Bt(zr, me, !0) + ' => ' + Bt(or, me))
          }),
        U('Map', h.call(me), Et, $t)
      )
    }
    if (ie(me)) {
      var kt = []
      return (
        u &&
          u.call(me, function (or) {
            kt.push(Bt(or, me))
          }),
        U('Set', o.call(me), kt, $t)
      )
    }
    if (Ce(me)) return R('WeakMap')
    if (Ne(me)) return R('WeakSet')
    if (Be(me)) return R('WeakRef')
    if (ye(me)) return m(Bt(Number(me)))
    if (fe(me)) return m(Bt(X.call(me)))
    if (oe(me)) return m(b.call(me))
    if (Y(me)) return m(Bt(String(me)))
    if (typeof window < 'u' && me === window) return '{ [object Window] }'
    if (
      (typeof globalThis < 'u' && me === globalThis) ||
      (typeof Wo < 'u' && me === Wo)
    )
      return '{ [object globalThis] }'
    if (!le(me) && !Me(me)) {
      var ir = qe(me, Bt),
        Tn = P
          ? P(me) === Object.prototype
          : me instanceof Object || me.constructor === Object,
        ar = me instanceof Object ? '' : 'null prototype',
        At =
          !Tn && $ && Object(me) === me && $ in me
            ? _.call(G(me), 8, -1)
            : ar
              ? 'Object'
              : '',
        Lt =
          Tn || typeof me.constructor != 'function'
            ? ''
            : me.constructor.name
              ? me.constructor.name + ' '
              : '',
        lr =
          Lt +
          (At || ar
            ? '[' + k.call(x.call([], At || [], ar || []), ': ') + '] '
            : '')
      return ir.length === 0
        ? lr + '{}'
        : $t
          ? lr + '{' + Ae(ir, $t) + '}'
          : lr + '{ ' + k.call(ir, ', ') + ' }'
    }
    return String(me)
  }
  function D(se, me, Ye) {
    var Pe = (Ye.quoteStyle || me) === 'double' ? '"' : "'"
    return Pe + se + Pe
  }
  function Q(se) {
    return O.call(String(se), /"/g, '&quot;')
  }
  function he(se) {
    return (
      G(se) === '[object Array]' && (!$ || !(typeof se == 'object' && $ in se))
    )
  }
  function le(se) {
    return (
      G(se) === '[object Date]' && (!$ || !(typeof se == 'object' && $ in se))
    )
  }
  function Me(se) {
    return (
      G(se) === '[object RegExp]' && (!$ || !(typeof se == 'object' && $ in se))
    )
  }
  function re(se) {
    return (
      G(se) === '[object Error]' && (!$ || !(typeof se == 'object' && $ in se))
    )
  }
  function Y(se) {
    return (
      G(se) === '[object String]' && (!$ || !(typeof se == 'object' && $ in se))
    )
  }
  function ye(se) {
    return (
      G(se) === '[object Number]' && (!$ || !(typeof se == 'object' && $ in se))
    )
  }
  function oe(se) {
    return (
      G(se) === '[object Boolean]' &&
      (!$ || !(typeof se == 'object' && $ in se))
    )
  }
  function ue(se) {
    if (J) return se && typeof se == 'object' && se instanceof Symbol
    if (typeof se == 'symbol') return !0
    if (!se || typeof se != 'object' || !ee) return !1
    try {
      return (ee.call(se), !0)
    } catch {}
    return !1
  }
  function fe(se) {
    if (!se || typeof se != 'object' || !X) return !1
    try {
      return (X.call(se), !0)
    } catch {}
    return !1
  }
  var De =
    Object.prototype.hasOwnProperty ||
    function (se) {
      return se in (this || Wo)
    }
  function we(se, me) {
    return De.call(se, me)
  }
  function G(se) {
    return w.call(se)
  }
  function ne(se) {
    if (se.name) return se.name
    var me = M.call(A.call(se), /^function\s*([\w$]+)/)
    return me ? me[1] : null
  }
  function ge(se, me) {
    if (se.indexOf) return se.indexOf(me)
    for (var Ye = 0, Pe = se.length; Ye < Pe; Ye++) if (se[Ye] === me) return Ye
    return -1
  }
  function Re(se) {
    if (!h || !se || typeof se != 'object') return !1
    try {
      h.call(se)
      try {
        o.call(se)
      } catch {
        return !0
      }
      return se instanceof Map
    } catch {}
    return !1
  }
  function Ce(se) {
    if (!a || !se || typeof se != 'object') return !1
    try {
      a.call(se, a)
      try {
        v.call(se, v)
      } catch {
        return !0
      }
      return se instanceof WeakMap
    } catch {}
    return !1
  }
  function Be(se) {
    if (!E || !se || typeof se != 'object') return !1
    try {
      return (E.call(se), !0)
    } catch {}
    return !1
  }
  function ie(se) {
    if (!o || !se || typeof se != 'object') return !1
    try {
      o.call(se)
      try {
        h.call(se)
      } catch {
        return !0
      }
      return se instanceof Set
    } catch {}
    return !1
  }
  function Ne(se) {
    if (!v || !se || typeof se != 'object') return !1
    try {
      v.call(se, v)
      try {
        a.call(se, a)
      } catch {
        return !0
      }
      return se instanceof WeakSet
    } catch {}
    return !1
  }
  function Ie(se) {
    return !se || typeof se != 'object'
      ? !1
      : typeof HTMLElement < 'u' && se instanceof HTMLElement
        ? !0
        : typeof se.nodeName == 'string' && typeof se.getAttribute == 'function'
  }
  function Se(se, me) {
    if (se.length > me.maxStringLength) {
      var Ye = se.length - me.maxStringLength,
        Pe = '... ' + Ye + ' more character' + (Ye > 1 ? 's' : '')
      return Se(_.call(se, 0, me.maxStringLength), me) + Pe
    }
    var Ze = O.call(O.call(se, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, Je)
    return D(Ze, 'single', me)
  }
  function Je(se) {
    var me = se.charCodeAt(0),
      Ye = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[me]
    return Ye
      ? '\\' + Ye
      : '\\x' + (me < 16 ? '0' : '') + N.call(me.toString(16))
  }
  function m(se) {
    return 'Object(' + se + ')'
  }
  function R(se) {
    return se + ' { ? }'
  }
  function U(se, me, Ye, Pe) {
    var Ze = Pe ? Ae(Ye, Pe) : k.call(Ye, ', ')
    return se + ' (' + me + ') {' + Ze + '}'
  }
  function te(se) {
    for (var me = 0; me < se.length; me++)
      if (
        ge(
          se[me],
          `
`
        ) >= 0
      )
        return !1
    return !0
  }
  function de(se, me) {
    var Ye
    if (se.indent === '	') Ye = '	'
    else if (typeof se.indent == 'number' && se.indent > 0)
      Ye = k.call(Array(se.indent + 1), ' ')
    else return null
    return { base: Ye, prev: k.call(Array(me + 1), Ye) }
  }
  function Ae(se, me) {
    if (se.length === 0) return ''
    var Ye =
      `
` +
      me.prev +
      me.base
    return (
      Ye +
      k.call(se, ',' + Ye) +
      `
` +
      me.prev
    )
  }
  function qe(se, me) {
    var Ye = he(se),
      Pe = []
    if (Ye) {
      Pe.length = se.length
      for (var Ze = 0; Ze < se.length; Ze++)
        Pe[Ze] = we(se, Ze) ? me(se[Ze], se) : ''
    }
    var et = typeof I == 'function' ? I(se) : [],
      Ar
    if (J) {
      Ar = {}
      for (var Zt = 0; Zt < et.length; Zt++) Ar['$' + et[Zt]] = et[Zt]
    }
    for (var Mt in se)
      we(se, Mt) &&
        ((Ye && String(Number(Mt)) === Mt && Mt < se.length) ||
          (J && Ar['$' + Mt] instanceof Symbol) ||
          (j.call(/[^\w$]/, Mt)
            ? Pe.push(me(Mt, se) + ': ' + me(se[Mt], se))
            : Pe.push(Mt + ': ' + me(se[Mt], se))))
    if (typeof I == 'function')
      for (var Jt = 0; Jt < et.length; Jt++)
        K.call(se, et[Jt]) &&
          Pe.push('[' + me(et[Jt]) + ']: ' + me(se[et[Jt]], se))
    return Pe
  }
  return Fo
}
function rw() {
  if (Sh) return Xo
  Sh = !0
  var y = ya(),
    p = HS(),
    h = tw(),
    c = pl(),
    g = y('%WeakMap%', !0),
    s = y('%Map%', !0),
    o = p('WeakMap.prototype.get', !0),
    u = p('WeakMap.prototype.set', !0),
    i = p('WeakMap.prototype.has', !0),
    a = p('Map.prototype.get', !0),
    d = p('Map.prototype.set', !0),
    v = p('Map.prototype.has', !0),
    S = function (A, M) {
      for (var _ = A, O; (O = _.next) !== null; _ = O)
        if (O.key === M)
          return ((_.next = O.next), (O.next = A.next), (A.next = O), O)
    },
    E = function (A, M) {
      var _ = S(A, M)
      return _ && _.value
    },
    b = function (A, M, _) {
      var O = S(A, M)
      O ? (O.value = _) : (A.next = { key: M, next: A.next, value: _ })
    },
    w = function (A, M) {
      return !!S(A, M)
    }
  return (
    (Xo = function () {
      var A,
        M,
        _,
        O = {
          assert: function (N) {
            if (!O.has(N)) throw new c('Side channel does not contain ' + h(N))
          },
          get: function (N) {
            if (g && N && (typeof N == 'object' || typeof N == 'function')) {
              if (A) return o(A, N)
            } else if (s) {
              if (M) return a(M, N)
            } else if (_) return E(_, N)
          },
          has: function (N) {
            if (g && N && (typeof N == 'object' || typeof N == 'function')) {
              if (A) return i(A, N)
            } else if (s) {
              if (M) return v(M, N)
            } else if (_) return w(_, N)
            return !1
          },
          set: function (N, T) {
            g && N && (typeof N == 'object' || typeof N == 'function')
              ? (A || (A = new g()), u(A, N, T))
              : s
                ? (M || (M = new s()), d(M, N, T))
                : (_ || (_ = { key: {}, next: null }), b(_, N, T))
          },
        }
      return O
    }),
    Xo
  )
}
function Hh() {
  if (wh) return Zo
  wh = !0
  var y = String.prototype.replace,
    p = /%20/g,
    h = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' }
  return (
    (Zo = {
      default: h.RFC3986,
      formatters: {
        RFC1738: function (c) {
          return y.call(c, p, '+')
        },
        RFC3986: function (c) {
          return String(c)
        },
      },
      RFC1738: h.RFC1738,
      RFC3986: h.RFC3986,
    }),
    Zo
  )
}
function dv() {
  if (Eh) return Jo
  Eh = !0
  var y = Hh(),
    p = Object.prototype.hasOwnProperty,
    h = Array.isArray,
    c = (function () {
      for (var A = [], M = 0; M < 256; ++M)
        A.push('%' + ((M < 16 ? '0' : '') + M.toString(16)).toUpperCase())
      return A
    })(),
    g = function (A) {
      for (; A.length > 1; ) {
        var M = A.pop(),
          _ = M.obj[M.prop]
        if (h(_)) {
          for (var O = [], N = 0; N < _.length; ++N)
            typeof _[N] < 'u' && O.push(_[N])
          M.obj[M.prop] = O
        }
      }
    },
    s = function (A, M) {
      for (
        var _ = M && M.plainObjects ? Object.create(null) : {}, O = 0;
        O < A.length;
        ++O
      )
        typeof A[O] < 'u' && (_[O] = A[O])
      return _
    },
    o = function A(M, _, O) {
      if (!_) return M
      if (typeof _ != 'object') {
        if (h(M)) M.push(_)
        else if (M && typeof M == 'object')
          ((O && (O.plainObjects || O.allowPrototypes)) ||
            !p.call(Object.prototype, _)) &&
            (M[_] = !0)
        else return [M, _]
        return M
      }
      if (!M || typeof M != 'object') return [M].concat(_)
      var N = M
      return (
        h(M) && !h(_) && (N = s(M, O)),
        h(M) && h(_)
          ? (_.forEach(function (T, j) {
              if (p.call(M, j)) {
                var x = M[j]
                x && typeof x == 'object' && T && typeof T == 'object'
                  ? (M[j] = A(x, T, O))
                  : M.push(T)
              } else M[j] = T
            }),
            M)
          : Object.keys(_).reduce(function (T, j) {
              var x = _[j]
              return (p.call(T, j) ? (T[j] = A(T[j], x, O)) : (T[j] = x), T)
            }, N)
      )
    },
    u = function (A, M) {
      return Object.keys(M).reduce(function (_, O) {
        return ((_[O] = M[O]), _)
      }, A)
    },
    i = function (A, M, _) {
      var O = A.replace(/\+/g, ' ')
      if (_ === 'iso-8859-1') return O.replace(/%[0-9a-f]{2}/gi, unescape)
      try {
        return decodeURIComponent(O)
      } catch {
        return O
      }
    },
    a = 1024,
    d = function (A, M, _, O, N) {
      if (A.length === 0) return A
      var T = A
      if (
        (typeof A == 'symbol'
          ? (T = Symbol.prototype.toString.call(A))
          : typeof A != 'string' && (T = String(A)),
        _ === 'iso-8859-1')
      )
        return escape(T).replace(/%u[0-9a-f]{4}/gi, function (I) {
          return '%26%23' + parseInt(I.slice(2), 16) + '%3B'
        })
      for (var j = '', x = 0; x < T.length; x += a) {
        for (
          var k = T.length >= a ? T.slice(x, x + a) : T, q = [], H = 0;
          H < k.length;
          ++H
        ) {
          var X = k.charCodeAt(H)
          if (
            X === 45 ||
            X === 46 ||
            X === 95 ||
            X === 126 ||
            (X >= 48 && X <= 57) ||
            (X >= 65 && X <= 90) ||
            (X >= 97 && X <= 122) ||
            (N === y.RFC1738 && (X === 40 || X === 41))
          ) {
            q[q.length] = k.charAt(H)
            continue
          }
          if (X < 128) {
            q[q.length] = c[X]
            continue
          }
          if (X < 2048) {
            q[q.length] = c[192 | (X >> 6)] + c[128 | (X & 63)]
            continue
          }
          if (X < 55296 || X >= 57344) {
            q[q.length] =
              c[224 | (X >> 12)] + c[128 | ((X >> 6) & 63)] + c[128 | (X & 63)]
            continue
          }
          ;((H += 1),
            (X = 65536 + (((X & 1023) << 10) | (k.charCodeAt(H) & 1023))),
            (q[q.length] =
              c[240 | (X >> 18)] +
              c[128 | ((X >> 12) & 63)] +
              c[128 | ((X >> 6) & 63)] +
              c[128 | (X & 63)]))
        }
        j += q.join('')
      }
      return j
    },
    v = function (A) {
      for (
        var M = [{ obj: { o: A }, prop: 'o' }], _ = [], O = 0;
        O < M.length;
        ++O
      )
        for (
          var N = M[O], T = N.obj[N.prop], j = Object.keys(T), x = 0;
          x < j.length;
          ++x
        ) {
          var k = j[x],
            q = T[k]
          typeof q == 'object' &&
            q !== null &&
            _.indexOf(q) === -1 &&
            (M.push({ obj: T, prop: k }), _.push(q))
        }
      return (g(M), A)
    },
    S = function (A) {
      return Object.prototype.toString.call(A) === '[object RegExp]'
    },
    E = function (A) {
      return !A || typeof A != 'object'
        ? !1
        : !!(
            A.constructor &&
            A.constructor.isBuffer &&
            A.constructor.isBuffer(A)
          )
    },
    b = function (A, M) {
      return [].concat(A, M)
    },
    w = function (A, M) {
      if (h(A)) {
        for (var _ = [], O = 0; O < A.length; O += 1) _.push(M(A[O]))
        return _
      }
      return M(A)
    }
  return (
    (Jo = {
      arrayToObject: s,
      assign: u,
      combine: b,
      compact: v,
      decode: i,
      encode: d,
      isBuffer: E,
      isRegExp: S,
      maybeMap: w,
      merge: o,
    }),
    Jo
  )
}
function nw() {
  if (Ah) return $o
  Ah = !0
  var y = rw(),
    p = dv(),
    h = Hh(),
    c = Object.prototype.hasOwnProperty,
    g = {
      brackets: function (w) {
        return w + '[]'
      },
      comma: 'comma',
      indices: function (w, A) {
        return w + '[' + A + ']'
      },
      repeat: function (w) {
        return w
      },
    },
    s = Array.isArray,
    o = Array.prototype.push,
    u = function (w, A) {
      o.apply(w, s(A) ? A : [A])
    },
    i = Date.prototype.toISOString,
    a = h.default,
    d = {
      addQueryPrefix: !1,
      allowDots: !1,
      allowEmptyArrays: !1,
      arrayFormat: 'indices',
      charset: 'utf-8',
      charsetSentinel: !1,
      delimiter: '&',
      encode: !0,
      encodeDotInKeys: !1,
      encoder: p.encode,
      encodeValuesOnly: !1,
      format: a,
      formatter: h.formatters[a],
      indices: !1,
      serializeDate: function (w) {
        return i.call(w)
      },
      skipNulls: !1,
      strictNullHandling: !1,
    },
    v = function (w) {
      return (
        typeof w == 'string' ||
        typeof w == 'number' ||
        typeof w == 'boolean' ||
        typeof w == 'symbol' ||
        typeof w == 'bigint'
      )
    },
    S = {},
    E = function w(A, M, _, O, N, T, j, x, k, q, H, X, I, ee, J, $, K, P) {
      for (
        var F = A, ce = P, V = 0, B = !1;
        (ce = ce.get(S)) !== void 0 && !B;
      ) {
        var D = ce.get(A)
        if (((V += 1), typeof D < 'u')) {
          if (D === V) throw new RangeError('Cyclic object value')
          B = !0
        }
        typeof ce.get(S) > 'u' && (V = 0)
      }
      if (
        (typeof q == 'function'
          ? (F = q(M, F))
          : F instanceof Date
            ? (F = I(F))
            : _ === 'comma' &&
              s(F) &&
              (F = p.maybeMap(F, function (G) {
                return G instanceof Date ? I(G) : G
              })),
        F === null)
      ) {
        if (T) return k && !$ ? k(M, d.encoder, K, 'key', ee) : M
        F = ''
      }
      if (v(F) || p.isBuffer(F)) {
        if (k) {
          var Q = $ ? M : k(M, d.encoder, K, 'key', ee)
          return [J(Q) + '=' + J(k(F, d.encoder, K, 'value', ee))]
        }
        return [J(M) + '=' + J(String(F))]
      }
      var he = []
      if (typeof F > 'u') return he
      var le
      if (_ === 'comma' && s(F))
        ($ && k && (F = p.maybeMap(F, k)),
          (le = [{ value: F.length > 0 ? F.join(',') || null : void 0 }]))
      else if (s(q)) le = q
      else {
        var Me = Object.keys(F)
        le = H ? Me.sort(H) : Me
      }
      var re = x ? M.replace(/\./g, '%2E') : M,
        Y = O && s(F) && F.length === 1 ? re + '[]' : re
      if (N && s(F) && F.length === 0) return Y + '[]'
      for (var ye = 0; ye < le.length; ++ye) {
        var oe = le[ye],
          ue = typeof oe == 'object' && typeof oe.value < 'u' ? oe.value : F[oe]
        if (!(j && ue === null)) {
          var fe = X && x ? oe.replace(/\./g, '%2E') : oe,
            De = s(F)
              ? typeof _ == 'function'
                ? _(Y, fe)
                : Y
              : Y + (X ? '.' + fe : '[' + fe + ']')
          P.set(A, V)
          var we = y()
          ;(we.set(S, P),
            u(
              he,
              w(
                ue,
                De,
                _,
                O,
                N,
                T,
                j,
                x,
                _ === 'comma' && $ && s(F) ? null : k,
                q,
                H,
                X,
                I,
                ee,
                J,
                $,
                K,
                we
              )
            ))
        }
      }
      return he
    },
    b = function (w) {
      if (!w) return d
      if (
        typeof w.allowEmptyArrays < 'u' &&
        typeof w.allowEmptyArrays != 'boolean'
      )
        throw new TypeError(
          '`allowEmptyArrays` option can only be `true` or `false`, when provided'
        )
      if (
        typeof w.encodeDotInKeys < 'u' &&
        typeof w.encodeDotInKeys != 'boolean'
      )
        throw new TypeError(
          '`encodeDotInKeys` option can only be `true` or `false`, when provided'
        )
      if (
        w.encoder !== null &&
        typeof w.encoder < 'u' &&
        typeof w.encoder != 'function'
      )
        throw new TypeError('Encoder has to be a function.')
      var A = w.charset || d.charset
      if (
        typeof w.charset < 'u' &&
        w.charset !== 'utf-8' &&
        w.charset !== 'iso-8859-1'
      )
        throw new TypeError(
          'The charset option must be either utf-8, iso-8859-1, or undefined'
        )
      var M = h.default
      if (typeof w.format < 'u') {
        if (!c.call(h.formatters, w.format))
          throw new TypeError('Unknown format option provided.')
        M = w.format
      }
      var _ = h.formatters[M],
        O = d.filter
      ;(typeof w.filter == 'function' || s(w.filter)) && (O = w.filter)
      var N
      if (
        (w.arrayFormat in g
          ? (N = w.arrayFormat)
          : 'indices' in w
            ? (N = w.indices ? 'indices' : 'repeat')
            : (N = d.arrayFormat),
        'commaRoundTrip' in w && typeof w.commaRoundTrip != 'boolean')
      )
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent')
      var T =
        typeof w.allowDots > 'u'
          ? w.encodeDotInKeys === !0
            ? !0
            : d.allowDots
          : !!w.allowDots
      return {
        addQueryPrefix:
          typeof w.addQueryPrefix == 'boolean'
            ? w.addQueryPrefix
            : d.addQueryPrefix,
        allowDots: T,
        allowEmptyArrays:
          typeof w.allowEmptyArrays == 'boolean'
            ? !!w.allowEmptyArrays
            : d.allowEmptyArrays,
        arrayFormat: N,
        charset: A,
        charsetSentinel:
          typeof w.charsetSentinel == 'boolean'
            ? w.charsetSentinel
            : d.charsetSentinel,
        commaRoundTrip: w.commaRoundTrip,
        delimiter: typeof w.delimiter > 'u' ? d.delimiter : w.delimiter,
        encode: typeof w.encode == 'boolean' ? w.encode : d.encode,
        encodeDotInKeys:
          typeof w.encodeDotInKeys == 'boolean'
            ? w.encodeDotInKeys
            : d.encodeDotInKeys,
        encoder: typeof w.encoder == 'function' ? w.encoder : d.encoder,
        encodeValuesOnly:
          typeof w.encodeValuesOnly == 'boolean'
            ? w.encodeValuesOnly
            : d.encodeValuesOnly,
        filter: O,
        format: M,
        formatter: _,
        serializeDate:
          typeof w.serializeDate == 'function'
            ? w.serializeDate
            : d.serializeDate,
        skipNulls: typeof w.skipNulls == 'boolean' ? w.skipNulls : d.skipNulls,
        sort: typeof w.sort == 'function' ? w.sort : null,
        strictNullHandling:
          typeof w.strictNullHandling == 'boolean'
            ? w.strictNullHandling
            : d.strictNullHandling,
      }
    }
  return (
    ($o = function (w, A) {
      var M = w,
        _ = b(A),
        O,
        N
      typeof _.filter == 'function'
        ? ((N = _.filter), (M = N('', M)))
        : s(_.filter) && ((N = _.filter), (O = N))
      var T = []
      if (typeof M != 'object' || M === null) return ''
      var j = g[_.arrayFormat],
        x = j === 'comma' && _.commaRoundTrip
      ;(O || (O = Object.keys(M)), _.sort && O.sort(_.sort))
      for (var k = y(), q = 0; q < O.length; ++q) {
        var H = O[q]
        ;(_.skipNulls && M[H] === null) ||
          u(
            T,
            E(
              M[H],
              H,
              j,
              x,
              _.allowEmptyArrays,
              _.strictNullHandling,
              _.skipNulls,
              _.encodeDotInKeys,
              _.encode ? _.encoder : null,
              _.filter,
              _.sort,
              _.allowDots,
              _.serializeDate,
              _.format,
              _.formatter,
              _.encodeValuesOnly,
              _.charset,
              k
            )
          )
      }
      var X = T.join(_.delimiter),
        I = _.addQueryPrefix === !0 ? '?' : ''
      return (
        _.charsetSentinel &&
          (_.charset === 'iso-8859-1'
            ? (I += 'utf8=%26%2310003%3B&')
            : (I += 'utf8=%E2%9C%93&')),
        X.length > 0 ? I + X : ''
      )
    }),
    $o
  )
}
function iw() {
  if (Th) return es
  Th = !0
  var y = dv(),
    p = Object.prototype.hasOwnProperty,
    h = Array.isArray,
    c = {
      allowDots: !1,
      allowEmptyArrays: !1,
      allowPrototypes: !1,
      allowSparse: !1,
      arrayLimit: 20,
      charset: 'utf-8',
      charsetSentinel: !1,
      comma: !1,
      decodeDotInKeys: !1,
      decoder: y.decode,
      delimiter: '&',
      depth: 5,
      duplicates: 'combine',
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictDepth: !1,
      strictNullHandling: !1,
    },
    g = function (S) {
      return S.replace(/&#(\d+);/g, function (E, b) {
        return String.fromCharCode(parseInt(b, 10))
      })
    },
    s = function (S, E) {
      return S && typeof S == 'string' && E.comma && S.indexOf(',') > -1
        ? S.split(',')
        : S
    },
    o = 'utf8=%26%2310003%3B',
    u = 'utf8=%E2%9C%93',
    i = function (S, E) {
      var b = { __proto__: null },
        w = E.ignoreQueryPrefix ? S.replace(/^\?/, '') : S
      w = w.replace(/%5B/gi, '[').replace(/%5D/gi, ']')
      var A = E.parameterLimit === 1 / 0 ? void 0 : E.parameterLimit,
        M = w.split(E.delimiter, A),
        _ = -1,
        O,
        N = E.charset
      if (E.charsetSentinel)
        for (O = 0; O < M.length; ++O)
          M[O].indexOf('utf8=') === 0 &&
            (M[O] === u ? (N = 'utf-8') : M[O] === o && (N = 'iso-8859-1'),
            (_ = O),
            (O = M.length))
      for (O = 0; O < M.length; ++O)
        if (O !== _) {
          var T = M[O],
            j = T.indexOf(']='),
            x = j === -1 ? T.indexOf('=') : j + 1,
            k,
            q
          ;(x === -1
            ? ((k = E.decoder(T, c.decoder, N, 'key')),
              (q = E.strictNullHandling ? null : ''))
            : ((k = E.decoder(T.slice(0, x), c.decoder, N, 'key')),
              (q = y.maybeMap(s(T.slice(x + 1), E), function (X) {
                return E.decoder(X, c.decoder, N, 'value')
              }))),
            q && E.interpretNumericEntities && N === 'iso-8859-1' && (q = g(q)),
            T.indexOf('[]=') > -1 && (q = h(q) ? [q] : q))
          var H = p.call(b, k)
          H && E.duplicates === 'combine'
            ? (b[k] = y.combine(b[k], q))
            : (!H || E.duplicates === 'last') && (b[k] = q)
        }
      return b
    },
    a = function (S, E, b, w) {
      for (var A = w ? E : s(E, b), M = S.length - 1; M >= 0; --M) {
        var _,
          O = S[M]
        if (O === '[]' && b.parseArrays)
          _ =
            b.allowEmptyArrays &&
            (A === '' || (b.strictNullHandling && A === null))
              ? []
              : [].concat(A)
        else {
          _ = b.plainObjects ? Object.create(null) : {}
          var N =
              O.charAt(0) === '[' && O.charAt(O.length - 1) === ']'
                ? O.slice(1, -1)
                : O,
            T = b.decodeDotInKeys ? N.replace(/%2E/g, '.') : N,
            j = parseInt(T, 10)
          !b.parseArrays && T === ''
            ? (_ = { 0: A })
            : !isNaN(j) &&
                O !== T &&
                String(j) === T &&
                j >= 0 &&
                b.parseArrays &&
                j <= b.arrayLimit
              ? ((_ = []), (_[j] = A))
              : T !== '__proto__' && (_[T] = A)
        }
        A = _
      }
      return A
    },
    d = function (S, E, b, w) {
      if (S) {
        var A = b.allowDots ? S.replace(/\.([^.[]+)/g, '[$1]') : S,
          M = /(\[[^[\]]*])/,
          _ = /(\[[^[\]]*])/g,
          O = b.depth > 0 && M.exec(A),
          N = O ? A.slice(0, O.index) : A,
          T = []
        if (N) {
          if (
            !b.plainObjects &&
            p.call(Object.prototype, N) &&
            !b.allowPrototypes
          )
            return
          T.push(N)
        }
        for (
          var j = 0;
          b.depth > 0 && (O = _.exec(A)) !== null && j < b.depth;
        ) {
          if (
            ((j += 1),
            !b.plainObjects &&
              p.call(Object.prototype, O[1].slice(1, -1)) &&
              !b.allowPrototypes)
          )
            return
          T.push(O[1])
        }
        if (O) {
          if (b.strictDepth === !0)
            throw new RangeError(
              'Input depth exceeded depth option of ' +
                b.depth +
                ' and strictDepth is true'
            )
          T.push('[' + A.slice(O.index) + ']')
        }
        return a(T, E, b, w)
      }
    },
    v = function (S) {
      if (!S) return c
      if (
        typeof S.allowEmptyArrays < 'u' &&
        typeof S.allowEmptyArrays != 'boolean'
      )
        throw new TypeError(
          '`allowEmptyArrays` option can only be `true` or `false`, when provided'
        )
      if (
        typeof S.decodeDotInKeys < 'u' &&
        typeof S.decodeDotInKeys != 'boolean'
      )
        throw new TypeError(
          '`decodeDotInKeys` option can only be `true` or `false`, when provided'
        )
      if (
        S.decoder !== null &&
        typeof S.decoder < 'u' &&
        typeof S.decoder != 'function'
      )
        throw new TypeError('Decoder has to be a function.')
      if (
        typeof S.charset < 'u' &&
        S.charset !== 'utf-8' &&
        S.charset !== 'iso-8859-1'
      )
        throw new TypeError(
          'The charset option must be either utf-8, iso-8859-1, or undefined'
        )
      var E = typeof S.charset > 'u' ? c.charset : S.charset,
        b = typeof S.duplicates > 'u' ? c.duplicates : S.duplicates
      if (b !== 'combine' && b !== 'first' && b !== 'last')
        throw new TypeError(
          'The duplicates option must be either combine, first, or last'
        )
      var w =
        typeof S.allowDots > 'u'
          ? S.decodeDotInKeys === !0
            ? !0
            : c.allowDots
          : !!S.allowDots
      return {
        allowDots: w,
        allowEmptyArrays:
          typeof S.allowEmptyArrays == 'boolean'
            ? !!S.allowEmptyArrays
            : c.allowEmptyArrays,
        allowPrototypes:
          typeof S.allowPrototypes == 'boolean'
            ? S.allowPrototypes
            : c.allowPrototypes,
        allowSparse:
          typeof S.allowSparse == 'boolean' ? S.allowSparse : c.allowSparse,
        arrayLimit:
          typeof S.arrayLimit == 'number' ? S.arrayLimit : c.arrayLimit,
        charset: E,
        charsetSentinel:
          typeof S.charsetSentinel == 'boolean'
            ? S.charsetSentinel
            : c.charsetSentinel,
        comma: typeof S.comma == 'boolean' ? S.comma : c.comma,
        decodeDotInKeys:
          typeof S.decodeDotInKeys == 'boolean'
            ? S.decodeDotInKeys
            : c.decodeDotInKeys,
        decoder: typeof S.decoder == 'function' ? S.decoder : c.decoder,
        delimiter:
          typeof S.delimiter == 'string' || y.isRegExp(S.delimiter)
            ? S.delimiter
            : c.delimiter,
        depth:
          typeof S.depth == 'number' || S.depth === !1 ? +S.depth : c.depth,
        duplicates: b,
        ignoreQueryPrefix: S.ignoreQueryPrefix === !0,
        interpretNumericEntities:
          typeof S.interpretNumericEntities == 'boolean'
            ? S.interpretNumericEntities
            : c.interpretNumericEntities,
        parameterLimit:
          typeof S.parameterLimit == 'number'
            ? S.parameterLimit
            : c.parameterLimit,
        parseArrays: S.parseArrays !== !1,
        plainObjects:
          typeof S.plainObjects == 'boolean' ? S.plainObjects : c.plainObjects,
        strictDepth:
          typeof S.strictDepth == 'boolean' ? !!S.strictDepth : c.strictDepth,
        strictNullHandling:
          typeof S.strictNullHandling == 'boolean'
            ? S.strictNullHandling
            : c.strictNullHandling,
      }
    }
  return (
    (es = function (S, E) {
      var b = v(E)
      if (S === '' || S === null || typeof S > 'u')
        return b.plainObjects ? Object.create(null) : {}
      for (
        var w = typeof S == 'string' ? i(S, b) : S,
          A = b.plainObjects ? Object.create(null) : {},
          M = Object.keys(w),
          _ = 0;
        _ < M.length;
        ++_
      ) {
        var O = M[_],
          N = d(O, w[O], b, typeof S == 'string')
        A = y.merge(A, N, b)
      }
      return b.allowSparse === !0 ? A : y.compact(A)
    }),
    es
  )
}
function aw() {
  if (Oh) return ts
  Oh = !0
  var y = nw(),
    p = iw(),
    h = Hh()
  return ((ts = { formats: h, parse: p, stringify: y }), ts)
}
function lw() {
  if (xh) return Jn
  xh = !0
  var y = Zn
  function p() {
    ;((this.protocol = null),
      (this.slashes = null),
      (this.auth = null),
      (this.host = null),
      (this.port = null),
      (this.hostname = null),
      (this.hash = null),
      (this.search = null),
      (this.query = null),
      (this.pathname = null),
      (this.path = null),
      (this.href = null))
  }
  var h = /^([a-z0-9.+-]+:)/i,
    c = /:[0-9]*$/,
    g = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    s = [
      '<',
      '>',
      '"',
      '`',
      ' ',
      '\r',
      `
`,
      '	',
    ],
    o = ['{', '}', '|', '\\', '^', '`'].concat(s),
    u = ["'"].concat(o),
    i = ['%', '/', '?', ';', '#'].concat(u),
    a = ['/', '?', '#'],
    d = 255,
    v = /^[+a-z0-9A-Z_-]{0,63}$/,
    S = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    E = { javascript: !0, 'javascript:': !0 },
    b = { javascript: !0, 'javascript:': !0 },
    w = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      'http:': !0,
      'https:': !0,
      'ftp:': !0,
      'gopher:': !0,
      'file:': !0,
    },
    A = aw()
  function M(T, j, x) {
    if (T && typeof T == 'object' && T instanceof p) return T
    var k = new p()
    return (k.parse(T, j, x), k)
  }
  p.prototype.parse = function (T, j, x) {
    if (typeof T != 'string')
      throw new TypeError("Parameter 'url' must be a string, not " + typeof T)
    var k = T.indexOf('?'),
      q = k !== -1 && k < T.indexOf('#') ? '?' : '#',
      H = T.split(q),
      X = /\\/g
    ;((H[0] = H[0].replace(X, '/')), (T = H.join(q)))
    var I = T
    if (((I = I.trim()), !x && T.split('#').length === 1)) {
      var ee = g.exec(I)
      if (ee)
        return (
          (this.path = I),
          (this.href = I),
          (this.pathname = ee[1]),
          ee[2]
            ? ((this.search = ee[2]),
              j
                ? (this.query = A.parse(this.search.substr(1)))
                : (this.query = this.search.substr(1)))
            : j && ((this.search = ''), (this.query = {})),
          this
        )
    }
    var J = h.exec(I)
    if (J) {
      J = J[0]
      var $ = J.toLowerCase()
      ;((this.protocol = $), (I = I.substr(J.length)))
    }
    if (x || J || I.match(/^\/\/[^@/]+@[^@/]+/)) {
      var K = I.substr(0, 2) === '//'
      K && !(J && b[J]) && ((I = I.substr(2)), (this.slashes = !0))
    }
    if (!b[J] && (K || (J && !w[J]))) {
      for (var P = -1, F = 0; F < a.length; F++) {
        var ce = I.indexOf(a[F])
        ce !== -1 && (P === -1 || ce < P) && (P = ce)
      }
      var V, B
      ;(P === -1 ? (B = I.lastIndexOf('@')) : (B = I.lastIndexOf('@', P)),
        B !== -1 &&
          ((V = I.slice(0, B)),
          (I = I.slice(B + 1)),
          (this.auth = decodeURIComponent(V))),
        (P = -1))
      for (var F = 0; F < i.length; F++) {
        var ce = I.indexOf(i[F])
        ce !== -1 && (P === -1 || ce < P) && (P = ce)
      }
      ;(P === -1 && (P = I.length),
        (this.host = I.slice(0, P)),
        (I = I.slice(P)),
        this.parseHost(),
        (this.hostname = this.hostname || ''))
      var D =
        this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']'
      if (!D)
        for (
          var Q = this.hostname.split(/\./), F = 0, he = Q.length;
          F < he;
          F++
        ) {
          var le = Q[F]
          if (le && !le.match(v)) {
            for (var Me = '', re = 0, Y = le.length; re < Y; re++)
              le.charCodeAt(re) > 127 ? (Me += 'x') : (Me += le[re])
            if (!Me.match(v)) {
              var ye = Q.slice(0, F),
                oe = Q.slice(F + 1),
                ue = le.match(S)
              ;(ue && (ye.push(ue[1]), oe.unshift(ue[2])),
                oe.length && (I = '/' + oe.join('.') + I),
                (this.hostname = ye.join('.')))
              break
            }
          }
        }
      ;(this.hostname.length > d
        ? (this.hostname = '')
        : (this.hostname = this.hostname.toLowerCase()),
        D || (this.hostname = y.toASCII(this.hostname)))
      var fe = this.port ? ':' + this.port : '',
        De = this.hostname || ''
      ;((this.host = De + fe),
        (this.href += this.host),
        D &&
          ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)),
          I[0] !== '/' && (I = '/' + I)))
    }
    if (!E[$])
      for (var F = 0, he = u.length; F < he; F++) {
        var we = u[F]
        if (I.indexOf(we) !== -1) {
          var G = encodeURIComponent(we)
          ;(G === we && (G = escape(we)), (I = I.split(we).join(G)))
        }
      }
    var ne = I.indexOf('#')
    ne !== -1 && ((this.hash = I.substr(ne)), (I = I.slice(0, ne)))
    var ge = I.indexOf('?')
    if (
      (ge !== -1
        ? ((this.search = I.substr(ge)),
          (this.query = I.substr(ge + 1)),
          j && (this.query = A.parse(this.query)),
          (I = I.slice(0, ge)))
        : j && ((this.search = ''), (this.query = {})),
      I && (this.pathname = I),
      w[$] && this.hostname && !this.pathname && (this.pathname = '/'),
      this.pathname || this.search)
    ) {
      var fe = this.pathname || '',
        Re = this.search || ''
      this.path = fe + Re
    }
    return ((this.href = this.format()), this)
  }
  function _(T) {
    return (
      typeof T == 'string' && (T = M(T)),
      T instanceof p ? T.format() : p.prototype.format.call(T)
    )
  }
  p.prototype.format = function () {
    var T = this.auth || ''
    T && ((T = encodeURIComponent(T)), (T = T.replace(/%3A/i, ':')), (T += '@'))
    var j = this.protocol || '',
      x = this.pathname || '',
      k = this.hash || '',
      q = !1,
      H = ''
    ;(this.host
      ? (q = T + this.host)
      : this.hostname &&
        ((q =
          T +
          (this.hostname.indexOf(':') === -1
            ? this.hostname
            : '[' + this.hostname + ']')),
        this.port && (q += ':' + this.port)),
      this.query &&
        typeof this.query == 'object' &&
        Object.keys(this.query).length &&
        (H = A.stringify(this.query, {
          arrayFormat: 'repeat',
          addQueryPrefix: !1,
        })))
    var X = this.search || (H && '?' + H) || ''
    return (
      j && j.substr(-1) !== ':' && (j += ':'),
      this.slashes || ((!j || w[j]) && q !== !1)
        ? ((q = '//' + (q || '')), x && x.charAt(0) !== '/' && (x = '/' + x))
        : q || (q = ''),
      k && k.charAt(0) !== '#' && (k = '#' + k),
      X && X.charAt(0) !== '?' && (X = '?' + X),
      (x = x.replace(/[?#]/g, function (I) {
        return encodeURIComponent(I)
      })),
      (X = X.replace('#', '%23')),
      j + q + x + X + k
    )
  }
  function O(T, j) {
    return M(T, !1, !0).resolve(j)
  }
  p.prototype.resolve = function (T) {
    return this.resolveObject(M(T, !1, !0)).format()
  }
  function N(T, j) {
    return T ? M(T, !1, !0).resolveObject(j) : j
  }
  return (
    (p.prototype.resolveObject = function (T) {
      if (typeof T == 'string') {
        var j = new p()
        ;(j.parse(T, !1, !0), (T = j))
      }
      for (var x = new p(), k = Object.keys(this), q = 0; q < k.length; q++) {
        var H = k[q]
        x[H] = this[H]
      }
      if (((x.hash = T.hash), T.href === '')) return ((x.href = x.format()), x)
      if (T.slashes && !T.protocol) {
        for (var X = Object.keys(T), I = 0; I < X.length; I++) {
          var ee = X[I]
          ee !== 'protocol' && (x[ee] = T[ee])
        }
        return (
          w[x.protocol] &&
            x.hostname &&
            !x.pathname &&
            ((x.pathname = '/'), (x.path = x.pathname)),
          (x.href = x.format()),
          x
        )
      }
      if (T.protocol && T.protocol !== x.protocol) {
        if (!w[T.protocol]) {
          for (var J = Object.keys(T), $ = 0; $ < J.length; $++) {
            var K = J[$]
            x[K] = T[K]
          }
          return ((x.href = x.format()), x)
        }
        if (((x.protocol = T.protocol), !T.host && !b[T.protocol])) {
          for (
            var he = (T.pathname || '').split('/');
            he.length && !(T.host = he.shift());
          );
          ;(T.host || (T.host = ''),
            T.hostname || (T.hostname = ''),
            he[0] !== '' && he.unshift(''),
            he.length < 2 && he.unshift(''),
            (x.pathname = he.join('/')))
        } else x.pathname = T.pathname
        if (
          ((x.search = T.search),
          (x.query = T.query),
          (x.host = T.host || ''),
          (x.auth = T.auth),
          (x.hostname = T.hostname || T.host),
          (x.port = T.port),
          x.pathname || x.search)
        ) {
          var P = x.pathname || '',
            F = x.search || ''
          x.path = P + F
        }
        return ((x.slashes = x.slashes || T.slashes), (x.href = x.format()), x)
      }
      var ce = x.pathname && x.pathname.charAt(0) === '/',
        V = T.host || (T.pathname && T.pathname.charAt(0) === '/'),
        B = V || ce || (x.host && T.pathname),
        D = B,
        Q = (x.pathname && x.pathname.split('/')) || [],
        he = (T.pathname && T.pathname.split('/')) || [],
        le = x.protocol && !w[x.protocol]
      if (
        (le &&
          ((x.hostname = ''),
          (x.port = null),
          x.host && (Q[0] === '' ? (Q[0] = x.host) : Q.unshift(x.host)),
          (x.host = ''),
          T.protocol &&
            ((T.hostname = null),
            (T.port = null),
            T.host && (he[0] === '' ? (he[0] = T.host) : he.unshift(T.host)),
            (T.host = null)),
          (B = B && (he[0] === '' || Q[0] === ''))),
        V)
      )
        ((x.host = T.host || T.host === '' ? T.host : x.host),
          (x.hostname =
            T.hostname || T.hostname === '' ? T.hostname : x.hostname),
          (x.search = T.search),
          (x.query = T.query),
          (Q = he))
      else if (he.length)
        (Q || (Q = []),
          Q.pop(),
          (Q = Q.concat(he)),
          (x.search = T.search),
          (x.query = T.query))
      else if (T.search != null) {
        if (le) {
          ;((x.host = Q.shift()), (x.hostname = x.host))
          var Me = x.host && x.host.indexOf('@') > 0 ? x.host.split('@') : !1
          Me &&
            ((x.auth = Me.shift()),
            (x.hostname = Me.shift()),
            (x.host = x.hostname))
        }
        return (
          (x.search = T.search),
          (x.query = T.query),
          (x.pathname !== null || x.search !== null) &&
            (x.path =
              (x.pathname ? x.pathname : '') + (x.search ? x.search : '')),
          (x.href = x.format()),
          x
        )
      }
      if (!Q.length)
        return (
          (x.pathname = null),
          x.search ? (x.path = '/' + x.search) : (x.path = null),
          (x.href = x.format()),
          x
        )
      for (
        var re = Q.slice(-1)[0],
          Y =
            ((x.host || T.host || Q.length > 1) &&
              (re === '.' || re === '..')) ||
            re === '',
          ye = 0,
          oe = Q.length;
        oe >= 0;
        oe--
      )
        ((re = Q[oe]),
          re === '.'
            ? Q.splice(oe, 1)
            : re === '..'
              ? (Q.splice(oe, 1), ye++)
              : ye && (Q.splice(oe, 1), ye--))
      if (!B && !D) for (; ye--; ye) Q.unshift('..')
      ;(B && Q[0] !== '' && (!Q[0] || Q[0].charAt(0) !== '/') && Q.unshift(''),
        Y && Q.join('/').substr(-1) !== '/' && Q.push(''))
      var ue = Q[0] === '' || (Q[0] && Q[0].charAt(0) === '/')
      if (le) {
        ;((x.hostname = ue ? '' : Q.length ? Q.shift() : ''),
          (x.host = x.hostname))
        var Me = x.host && x.host.indexOf('@') > 0 ? x.host.split('@') : !1
        Me &&
          ((x.auth = Me.shift()),
          (x.hostname = Me.shift()),
          (x.host = x.hostname))
      }
      return (
        (B = B || (x.host && Q.length)),
        B && !ue && Q.unshift(''),
        Q.length > 0
          ? (x.pathname = Q.join('/'))
          : ((x.pathname = null), (x.path = null)),
        (x.pathname !== null || x.search !== null) &&
          (x.path =
            (x.pathname ? x.pathname : '') + (x.search ? x.search : '')),
        (x.auth = T.auth || x.auth),
        (x.slashes = x.slashes || T.slashes),
        (x.href = x.format()),
        x
      )
    }),
    (p.prototype.parseHost = function () {
      var T = this.host,
        j = c.exec(T)
      ;(j &&
        ((j = j[0]),
        j !== ':' && (this.port = j.substr(1)),
        (T = T.substr(0, T.length - j.length))),
        T && (this.hostname = T))
    }),
    (Jn.parse = M),
    (Jn.resolve = O),
    (Jn.resolveObject = N),
    (Jn.format = _),
    (Jn.Url = p),
    Jn
  )
}
function pv(y) {
  if (typeof y == 'string') y = new URL(y)
  else if (!(y instanceof URL))
    throw new Deno.errors.InvalidData(
      'invalid argument path , must be a string or URL'
    )
  if (y.protocol !== 'file:')
    throw new Deno.errors.InvalidData('invalid url scheme')
  return is ? ow(y) : sw(y)
}
function ow(y) {
  let p = y.hostname,
    h = y.pathname
  for (let c = 0; c < h.length; c++)
    if (h[c] === '%') {
      let g = h.codePointAt(c + 2) || 32
      if ((h[c + 1] === '2' && g === 102) || (h[c + 1] === '5' && g === 99))
        throw new Deno.errors.InvalidData(
          'must not include encoded \\ or / characters'
        )
    }
  if (((h = h.replace(xv, '\\')), (h = decodeURIComponent(h)), p !== ''))
    return `\\\\${p}${h}`
  {
    let c = h.codePointAt(1) | 32,
      g = h[2]
    if (c < Tv || c > Ov || g !== ':')
      throw new Deno.errors.InvalidData('file url path must be absolute')
    return h.slice(1)
  }
}
function sw(y) {
  if (y.hostname !== '')
    throw new Deno.errors.InvalidData('invalid file url hostname')
  let p = y.pathname
  for (let h = 0; h < p.length; h++)
    if (p[h] === '%') {
      let c = p.codePointAt(h + 2) || 32
      if (p[h + 1] === '2' && c === 102)
        throw new Deno.errors.InvalidData(
          'must not include encoded / characters'
        )
    }
  return decodeURIComponent(p)
}
function yv(y) {
  let p = vh.resolve(y),
    h = y.charCodeAt(y.length - 1)
  ;(h === Av || (is && h === Ev)) && p[p.length - 1] !== vh.sep && (p += '/')
  let c = new URL('file://')
  return (
    p.includes('%') && (p = p.replace(Mv, '%25')),
    !is && p.includes('\\') && (p = p.replace(Rv, '%5C')),
    p.includes(`
`) && (p = p.replace(Cv, '%0A')),
    p.includes('\r') && (p = p.replace(jv, '%0D')),
    p.includes('	') && (p = p.replace(Nv, '%09')),
    (c.pathname = p),
    c
  )
}
var gv,
  Fo,
  _h,
  Wo,
  Xo,
  Sh,
  Zo,
  wh,
  Jo,
  Eh,
  $o,
  Ah,
  es,
  Th,
  ts,
  Oh,
  Jn,
  xh,
  Xt,
  Km,
  mv,
  bv,
  vv,
  _v,
  Sv,
  wv,
  Ev,
  Av,
  Tv,
  Ov,
  is,
  xv,
  Mv,
  Rv,
  Cv,
  jv,
  Nv,
  uw = yr(() => {
    ;(Te(),
      xe(),
      Oe(),
      OS(),
      PS(),
      ew(),
      fv(),
      (gv = Object.freeze(Object.create(null))),
      (Fo = {}),
      (_h = !1),
      (Wo =
        typeof globalThis < 'u'
          ? globalThis
          : typeof self < 'u'
            ? self
            : global),
      (Xo = {}),
      (Sh = !1),
      (Zo = {}),
      (wh = !1),
      (Jo = {}),
      (Eh = !1),
      ($o = {}),
      (Ah = !1),
      (es = {}),
      (Th = !1),
      (ts = {}),
      (Oh = !1),
      (Jn = {}),
      (xh = !1),
      (Xt = lw()),
      Xt.parse,
      Xt.resolve,
      Xt.resolveObject,
      Xt.format,
      Xt.Url,
      (Km =
        typeof Deno < 'u'
          ? Deno.build.os === 'windows'
            ? 'win32'
            : Deno.build.os
          : void 0),
      (Xt.URL = typeof URL < 'u' ? URL : null),
      (Xt.pathToFileURL = yv),
      (Xt.fileURLToPath = pv),
      (mv = Xt.Url),
      (bv = Xt.format),
      (vv = Xt.resolve),
      (_v = Xt.resolveObject),
      (Sv = Xt.parse),
      (wv = Xt.URL),
      (Ev = 92),
      (Av = 47),
      (Tv = 97),
      (Ov = 122),
      (is = Km === 'win32'),
      (xv = /\//g),
      (Mv = /%/g),
      (Rv = /\\/g),
      (Cv = /\n/g),
      (jv = /\r/g),
      (Nv = /\t/g))
  }),
  cw = Ue((y, p) => {
    ;(Te(),
      xe(),
      Oe(),
      (p.exports = function () {
        throw new Error(
          'ws does not work in the browser. Browser clients must use the native WebSocket object'
        )
      }))
  }),
  Ph = Ue((y) => {
    ;(Te(),
      xe(),
      Oe(),
      Object.defineProperty(y, '__esModule', { value: !0 }),
      (y.BufferedDuplex = void 0),
      (y.writev = c))
    var p = Ai(),
      h = (Pt(), gt(Ht))
    function c(s, o) {
      let u = new Array(s.length)
      for (let i = 0; i < s.length; i++)
        typeof s[i].chunk == 'string'
          ? (u[i] = h.Buffer.from(s[i].chunk, 'utf8'))
          : (u[i] = s[i].chunk)
      this._write(h.Buffer.concat(u), 'binary', o)
    }
    var g = class extends p.Duplex {
      socket
      proxy
      isSocketOpen
      writeQueue
      constructor(s, o, u) {
        ;(super({ objectMode: !0 }),
          (this.proxy = o),
          (this.socket = u),
          (this.writeQueue = []),
          s.objectMode || (this._writev = c.bind(this)),
          (this.isSocketOpen = !1),
          this.proxy.on('data', (i) => {
            !this.destroyed && this.readable && this.push(i)
          }))
      }
      _read(s) {
        this.proxy.read(s)
      }
      _write(s, o, u) {
        this.isSocketOpen
          ? this.writeToProxy(s, o, u)
          : this.writeQueue.push({ chunk: s, encoding: o, cb: u })
      }
      _final(s) {
        ;((this.writeQueue = []), this.proxy.end(s))
      }
      _destroy(s, o) {
        ;((this.writeQueue = []), this.proxy.destroy(), o(s))
      }
      socketReady() {
        ;(this.emit('connect'),
          (this.isSocketOpen = !0),
          this.processWriteQueue())
      }
      writeToProxy(s, o, u) {
        this.proxy.write(s, o) === !1 ? this.proxy.once('drain', u) : u()
      }
      processWriteQueue() {
        for (; this.writeQueue.length > 0; ) {
          let { chunk: s, encoding: o, cb: u } = this.writeQueue.shift()
          this.writeToProxy(s, o, u)
        }
      }
    }
    y.BufferedDuplex = g
  }),
  Co = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p =
      (y && y.__importDefault) ||
      function (M) {
        return M && M.__esModule ? M : { default: M }
      }
    ;(Object.defineProperty(y, '__esModule', { value: !0 }),
      (y.streamBuilder = y.browserStreamBuilder = void 0))
    var h = (Pt(), gt(Ht)),
      c = p(cw()),
      g = p(Sn()),
      s = Ai(),
      o = p(cs()),
      u = Ph(),
      i = (0, g.default)('mqttjs:ws'),
      a = ['rejectUnauthorized', 'ca', 'cert', 'key', 'pfx', 'passphrase']
    function d(M, _) {
      let O = `${M.protocol}://${M.hostname}:${M.port}${M.path}`
      return (
        typeof M.transformWsUrl == 'function' &&
          (O = M.transformWsUrl(O, M, _)),
        O
      )
    }
    function v(M) {
      let _ = M
      return (
        M.port || (M.protocol === 'wss' ? (_.port = 443) : (_.port = 80)),
        M.path || (_.path = '/'),
        M.wsOptions || (_.wsOptions = {}),
        !o.default &&
          !M.forceNativeWebSocket &&
          M.protocol === 'wss' &&
          a.forEach((O) => {
            Object.prototype.hasOwnProperty.call(M, O) &&
              !Object.prototype.hasOwnProperty.call(M.wsOptions, O) &&
              (_.wsOptions[O] = M[O])
          }),
        _
      )
    }
    function S(M) {
      let _ = v(M)
      if ((_.hostname || (_.hostname = _.host), !_.hostname)) {
        if (typeof document > 'u')
          throw new Error('Could not determine host. Specify host manually.')
        let O = new URL(document.URL)
        ;((_.hostname = O.hostname), _.port || (_.port = Number(O.port)))
      }
      return (
        _.objectMode === void 0 &&
          (_.objectMode = !(_.binary === !0 || _.binary === void 0)),
        _
      )
    }
    function E(M, _, O) {
      ;(i('createWebSocket'),
        i(`protocol: ${O.protocolId} ${O.protocolVersion}`))
      let N =
        O.protocolId === 'MQIsdp' && O.protocolVersion === 3
          ? 'mqttv3.1'
          : 'mqtt'
      i(`creating new Websocket for url: ${_} and protocol: ${N}`)
      let T
      return (
        O.createWebsocket
          ? (T = O.createWebsocket(_, [N], O))
          : (T = new c.default(_, [N], O.wsOptions)),
        T
      )
    }
    function b(M, _) {
      let O =
          _.protocolId === 'MQIsdp' && _.protocolVersion === 3
            ? 'mqttv3.1'
            : 'mqtt',
        N = d(_, M),
        T
      return (
        _.createWebsocket
          ? (T = _.createWebsocket(N, [O], _))
          : (T = new WebSocket(N, [O])),
        (T.binaryType = 'arraybuffer'),
        T
      )
    }
    var w = (M, _) => {
      i('streamBuilder')
      let O = v(_)
      O.hostname = O.hostname || O.host || 'localhost'
      let N = d(O, M),
        T = E(M, N, O),
        j = c.default.createWebSocketStream(T, O.wsOptions)
      return (
        (j.url = N),
        T.on('close', () => {
          j.destroy()
        }),
        j
      )
    }
    y.streamBuilder = w
    var A = (M, _) => {
      i('browserStreamBuilder')
      let O,
        N = S(_).browserBufferSize || 1024 * 512,
        T = _.browserBufferTimeout || 1e3,
        j = !_.objectMode,
        x = b(M, _),
        k = H(_, $, K)
      ;(_.objectMode || (k._writev = u.writev.bind(k)),
        k.on('close', () => {
          x.close()
        }))
      let q = typeof x.addEventListener < 'u'
      ;(x.readyState === x.OPEN
        ? ((O = k), (O.socket = x))
        : ((O = new u.BufferedDuplex(_, k, x)),
          q ? x.addEventListener('open', X) : (x.onopen = X)),
        q
          ? (x.addEventListener('close', I),
            x.addEventListener('error', ee),
            x.addEventListener('message', J))
          : ((x.onclose = I), (x.onerror = ee), (x.onmessage = J)))
      function H(P, F, ce) {
        let V = new s.Transform({ objectMode: P.objectMode })
        return ((V._write = F), (V._flush = ce), V)
      }
      function X() {
        ;(i('WebSocket onOpen'),
          O instanceof u.BufferedDuplex && O.socketReady())
      }
      function I(P) {
        ;(i('WebSocket onClose', P), O.end(), O.destroy())
      }
      function ee(P) {
        i('WebSocket onError', P)
        let F = new Error('WebSocket error')
        ;((F.event = P), O.destroy(F))
      }
      async function J(P) {
        if (!k || !k.readable || !k.writable) return
        let { data: F } = P
        ;(F instanceof ArrayBuffer
          ? (F = h.Buffer.from(F))
          : F instanceof Blob
            ? (F = h.Buffer.from(await new Response(F).arrayBuffer()))
            : (F = h.Buffer.from(F, 'utf8')),
          k.push(F))
      }
      function $(P, F, ce) {
        if (x.bufferedAmount > N) {
          setTimeout($, T, P, F, ce)
          return
        }
        j && typeof P == 'string' && (P = h.Buffer.from(P, 'utf8'))
        try {
          x.send(P)
        } catch (V) {
          return ce(V)
        }
        ce()
      }
      function K(P) {
        ;(x.close(), P())
      }
      return O
    }
    y.browserStreamBuilder = A
  }),
  Gh = {}
ha(Gh, {
  Server: () => wt,
  Socket: () => wt,
  Stream: () => wt,
  _createServerHandle: () => wt,
  _normalizeArgs: () => wt,
  _setSimultaneousAccepts: () => wt,
  connect: () => wt,
  createConnection: () => wt,
  createServer: () => wt,
  default: () => Uv,
  isIP: () => wt,
  isIPv4: () => wt,
  isIPv6: () => wt,
})
function wt() {
  throw new Error(
    'Node.js net module is not supported by JSPM core outside of Node.js'
  )
}
var Uv,
  Dv = yr(() => {
    ;(Te(),
      xe(),
      Oe(),
      (Uv = {
        _createServerHandle: wt,
        _normalizeArgs: wt,
        _setSimultaneousAccepts: wt,
        connect: wt,
        createConnection: wt,
        createServer: wt,
        isIP: wt,
        isIPv4: wt,
        isIPv6: wt,
        Server: wt,
        Socket: wt,
        Stream: wt,
      }))
  }),
  Bv = Ue((y, p) => {
    ;(Te(), xe(), Oe(), (p.exports = {}))
  }),
  Fm = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p =
      (y && y.__importDefault) ||
      function (u) {
        return u && u.__esModule ? u : { default: u }
      }
    Object.defineProperty(y, '__esModule', { value: !0 })
    var h = p((Dv(), gt(Gh))),
      c = p(Sn()),
      g = p(Bv()),
      s = (0, c.default)('mqttjs:tcp'),
      o = (u, i) => {
        if (
          ((i.port = i.port || 1883),
          (i.hostname = i.hostname || i.host || 'localhost'),
          i.socksProxy)
        )
          return (0, g.default)(i.hostname, i.port, i.socksProxy, {
            timeout: i.socksTimeout,
          })
        let { port: a, path: d } = i,
          v = i.hostname
        return (
          s('port %d and host %s', a, v),
          h.default.createConnection({ port: a, host: v, path: d })
        )
      }
    y.default = o
  }),
  kv = {}
ha(kv, { default: () => Lv })
var Lv,
  fw = yr(() => {
    ;(Te(), xe(), Oe(), (Lv = {}))
  }),
  Wm = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p =
      (y && y.__importDefault) ||
      function (a) {
        return a && a.__esModule ? a : { default: a }
      }
    Object.defineProperty(y, '__esModule', { value: !0 })
    var h = (fw(), gt(kv)),
      c = p((Dv(), gt(Gh))),
      g = p(Sn()),
      s = p(Bv()),
      o = (0, g.default)('mqttjs:tls')
    function u(a) {
      let { host: d, port: v, socksProxy: S, ...E } = a
      if (S !== void 0) {
        let b = (0, s.default)(d, v, S, { timeout: a.socksTimeout })
        return (0, h.connect)({ ...E, socket: b })
      }
      return (0, h.connect)(a)
    }
    var i = (a, d) => {
      ;((d.port = d.port || 8883),
        (d.host = d.hostname || d.host || 'localhost'),
        c.default.isIP(d.host) === 0 && (d.servername = d.host),
        (d.rejectUnauthorized = d.rejectUnauthorized !== !1),
        delete d.path,
        o(
          'port %d host %s rejectUnauthorized %b',
          d.port,
          d.host,
          d.rejectUnauthorized
        ))
      let v = u(d)
      v.on('secureConnect', () => {
        d.rejectUnauthorized && !v.authorized
          ? v.emit('error', new Error('TLS not authorized'))
          : v.removeListener('error', S)
      })
      function S(E) {
        ;(d.rejectUnauthorized && a.emit('error', E), v.end())
      }
      return (v.on('error', S), v)
    }
    y.default = i
  }),
  Xm = Ue((y) => {
    ;(Te(), xe(), Oe(), Object.defineProperty(y, '__esModule', { value: !0 }))
    var p = (Pt(), gt(Ht)),
      h = Ai(),
      c = Ph(),
      g,
      s,
      o
    function u() {
      let S = new h.Transform()
      return (
        (S._write = (E, b, w) => {
          g.send({
            data: E.buffer,
            success() {
              w()
            },
            fail(A) {
              w(new Error(A))
            },
          })
        }),
        (S._flush = (E) => {
          g.close({
            success() {
              E()
            },
          })
        }),
        S
      )
    }
    function i(S) {
      ;(S.hostname || (S.hostname = 'localhost'),
        S.path || (S.path = '/'),
        S.wsOptions || (S.wsOptions = {}))
    }
    function a(S, E) {
      let b = S.protocol === 'wxs' ? 'wss' : 'ws',
        w = `${b}://${S.hostname}${S.path}`
      return (
        S.port &&
          S.port !== 80 &&
          S.port !== 443 &&
          (w = `${b}://${S.hostname}:${S.port}${S.path}`),
        typeof S.transformWsUrl == 'function' &&
          (w = S.transformWsUrl(w, S, E)),
        w
      )
    }
    function d() {
      ;(g.onOpen(() => {
        o.socketReady()
      }),
        g.onMessage((S) => {
          let { data: E } = S
          ;(E instanceof ArrayBuffer
            ? (E = p.Buffer.from(E))
            : (E = p.Buffer.from(E, 'utf8')),
            s.push(E))
        }),
        g.onClose(() => {
          ;(o.emit('close'), o.end(), o.destroy())
        }),
        g.onError((S) => {
          let E = new Error(S.errMsg)
          o.destroy(E)
        }))
    }
    var v = (S, E) => {
      if (((E.hostname = E.hostname || E.host), !E.hostname))
        throw new Error('Could not determine host. Specify host manually.')
      let b =
        E.protocolId === 'MQIsdp' && E.protocolVersion === 3
          ? 'mqttv3.1'
          : 'mqtt'
      i(E)
      let w = a(E, S)
      ;((g = wx.connectSocket({ url: w, protocols: [b] })),
        (s = u()),
        (o = new c.BufferedDuplex(E, s, g)),
        (o._destroy = (M, _) => {
          g.close({
            success() {
              _ && _(M)
            },
          })
        }))
      let A = o.destroy
      return (
        (o.destroy = (M, _) => (
          (o.destroy = A),
          setTimeout(() => {
            g.close({
              fail() {
                o._destroy(M, _)
              },
            })
          }, 0),
          o
        )),
        d(),
        o
      )
    }
    y.default = v
  }),
  Zm = Ue((y) => {
    ;(Te(), xe(), Oe(), Object.defineProperty(y, '__esModule', { value: !0 }))
    var p = (Pt(), gt(Ht)),
      h = Ai(),
      c = Ph(),
      g,
      s,
      o,
      u = !1
    function i() {
      let E = new h.Transform()
      return (
        (E._write = (b, w, A) => {
          g.sendSocketMessage({
            data: b.buffer,
            success() {
              A()
            },
            fail() {
              A(new Error())
            },
          })
        }),
        (E._flush = (b) => {
          g.closeSocket({
            success() {
              b()
            },
          })
        }),
        E
      )
    }
    function a(E) {
      ;(E.hostname || (E.hostname = 'localhost'),
        E.path || (E.path = '/'),
        E.wsOptions || (E.wsOptions = {}))
    }
    function d(E, b) {
      let w = E.protocol === 'alis' ? 'wss' : 'ws',
        A = `${w}://${E.hostname}${E.path}`
      return (
        E.port &&
          E.port !== 80 &&
          E.port !== 443 &&
          (A = `${w}://${E.hostname}:${E.port}${E.path}`),
        typeof E.transformWsUrl == 'function' &&
          (A = E.transformWsUrl(A, E, b)),
        A
      )
    }
    function v() {
      u ||
        ((u = !0),
        g.onSocketOpen(() => {
          o.socketReady()
        }),
        g.onSocketMessage((E) => {
          if (typeof E.data == 'string') {
            let b = p.Buffer.from(E.data, 'base64')
            s.push(b)
          } else {
            let b = new FileReader()
            ;(b.addEventListener('load', () => {
              if (b.result instanceof ArrayBuffer) {
                s.push(p.Buffer.from(b.result))
                return
              }
              s.push(p.Buffer.from(b.result, 'utf-8'))
            }),
              b.readAsArrayBuffer(E.data))
          }
        }),
        g.onSocketClose(() => {
          ;(o.end(), o.destroy())
        }),
        g.onSocketError((E) => {
          o.destroy(E)
        }))
    }
    var S = (E, b) => {
      if (((b.hostname = b.hostname || b.host), !b.hostname))
        throw new Error('Could not determine host. Specify host manually.')
      let w =
        b.protocolId === 'MQIsdp' && b.protocolVersion === 3
          ? 'mqttv3.1'
          : 'mqtt'
      a(b)
      let A = d(b, E)
      return (
        (g = b.my),
        g.connectSocket({ url: A, protocols: w }),
        (s = i()),
        (o = new c.BufferedDuplex(b, s, g)),
        v(),
        o
      )
    }
    y.default = S
  }),
  hw = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p =
      (y && y.__importDefault) ||
      function (v) {
        return v && v.__esModule ? v : { default: v }
      }
    ;(Object.defineProperty(y, '__esModule', { value: !0 }),
      (y.connectAsync = d))
    var h = p(Sn()),
      c = p((uw(), gt(hv))),
      g = p(qf()),
      s = p(cs())
    typeof bt?.nextTick != 'function' && (bt.nextTick = setImmediate)
    var o = (0, h.default)('mqttjs'),
      u = null
    function i(v) {
      let S
      if (v.auth)
        if (((S = v.auth.match(/^(.+):(.+)$/)), S)) {
          let [, E, b] = S
          ;((v.username = E), (v.password = b))
        } else v.username = v.auth
    }
    function a(v, S) {
      if (
        (o('connecting to an MQTT broker...'),
        typeof v == 'object' && !S && ((S = v), (v = '')),
        (S = S || {}),
        v && typeof v == 'string')
      ) {
        let w = c.default.parse(v, !0),
          A = {}
        if (
          (w.port != null && (A.port = Number(w.port)),
          (A.host = w.hostname),
          (A.query = w.query),
          (A.auth = w.auth),
          (A.protocol = w.protocol),
          (A.path = w.path),
          (S = { ...A, ...S }),
          !S.protocol)
        )
          throw new Error('Missing protocol')
        S.protocol = S.protocol.replace(/:$/, '')
      }
      if (
        ((S.unixSocket = S.unixSocket || S.protocol?.includes('+unix')),
        S.unixSocket
          ? (S.protocol = S.protocol.replace('+unix', ''))
          : !S.protocol?.startsWith('ws') &&
            !S.protocol?.startsWith('wx') &&
            delete S.path,
        i(S),
        S.query &&
          typeof S.query.clientId == 'string' &&
          (S.clientId = S.query.clientId),
        s.default || S.unixSocket
          ? (S.socksProxy = void 0)
          : S.socksProxy === void 0 &&
            typeof bt < 'u' &&
            (S.socksProxy = bt.env.MQTTJS_SOCKS_PROXY),
        S.cert && S.key)
      )
        if (S.protocol) {
          if (['mqtts', 'wss', 'wxs', 'alis'].indexOf(S.protocol) === -1)
            switch (S.protocol) {
              case 'mqtt':
                S.protocol = 'mqtts'
                break
              case 'ws':
                S.protocol = 'wss'
                break
              case 'wx':
                S.protocol = 'wxs'
                break
              case 'ali':
                S.protocol = 'alis'
                break
              default:
                throw new Error(
                  `Unknown protocol for secure connection: "${S.protocol}"!`
                )
            }
        } else throw new Error('Missing secure protocol key')
      if (
        (u ||
          ((u = {}),
          !s.default && !S.forceNativeWebSocket
            ? ((u.ws = Co().streamBuilder),
              (u.wss = Co().streamBuilder),
              (u.mqtt = Fm().default),
              (u.tcp = Fm().default),
              (u.ssl = Wm().default),
              (u.tls = u.ssl),
              (u.mqtts = Wm().default))
            : ((u.ws = Co().browserStreamBuilder),
              (u.wss = Co().browserStreamBuilder),
              (u.wx = Xm().default),
              (u.wxs = Xm().default),
              (u.ali = Zm().default),
              (u.alis = Zm().default))),
        !u[S.protocol])
      ) {
        let w = ['mqtts', 'wss'].indexOf(S.protocol) !== -1
        S.protocol = [
          'mqtt',
          'mqtts',
          'ws',
          'wss',
          'wx',
          'wxs',
          'ali',
          'alis',
        ].filter((A, M) =>
          w && M % 2 === 0 ? !1 : typeof u[A] == 'function'
        )[0]
      }
      if (S.clean === !1 && !S.clientId)
        throw new Error('Missing clientId for unclean clients')
      S.protocol && (S.defaultProtocol = S.protocol)
      function E(w) {
        return (
          S.servers &&
            ((!w._reconnectCount || w._reconnectCount === S.servers.length) &&
              (w._reconnectCount = 0),
            (S.host = S.servers[w._reconnectCount].host),
            (S.port = S.servers[w._reconnectCount].port),
            (S.protocol = S.servers[w._reconnectCount].protocol
              ? S.servers[w._reconnectCount].protocol
              : S.defaultProtocol),
            (S.hostname = S.host),
            w._reconnectCount++),
          o('calling streambuilder for', S.protocol),
          u[S.protocol](w, S)
        )
      }
      let b = new g.default(E, S)
      return (b.on('error', () => {}), b)
    }
    function d(v, S, E = !0) {
      return new Promise((b, w) => {
        let A = a(v, S),
          M = {
            connect: (O) => {
              ;(_(), b(A))
            },
            end: () => {
              ;(_(), b(A))
            },
            error: (O) => {
              ;(_(), A.end(), w(O))
            },
          }
        E === !1 &&
          (M.close = () => {
            M.error(new Error("Couldn't connect to server"))
          })
        function _() {
          Object.keys(M).forEach((O) => {
            A.off(O, M[O])
          })
        }
        Object.keys(M).forEach((O) => {
          A.on(O, M[O])
        })
      })
    }
    y.default = a
  }),
  Jm = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p =
        (y && y.__createBinding) ||
        (Object.create
          ? function (E, b, w, A) {
              A === void 0 && (A = w)
              var M = Object.getOwnPropertyDescriptor(b, w)
              ;((!M ||
                ('get' in M ? !b.__esModule : M.writable || M.configurable)) &&
                (M = {
                  enumerable: !0,
                  get: function () {
                    return b[w]
                  },
                }),
                Object.defineProperty(E, A, M))
            }
          : function (E, b, w, A) {
              ;(A === void 0 && (A = w), (E[A] = b[w]))
            }),
      h =
        (y && y.__setModuleDefault) ||
        (Object.create
          ? function (E, b) {
              Object.defineProperty(E, 'default', { enumerable: !0, value: b })
            }
          : function (E, b) {
              E.default = b
            }),
      c =
        (y && y.__importStar) ||
        (function () {
          var E = function (b) {
            return (
              (E =
                Object.getOwnPropertyNames ||
                function (w) {
                  var A = []
                  for (var M in w)
                    Object.prototype.hasOwnProperty.call(w, M) &&
                      (A[A.length] = M)
                  return A
                }),
              E(b)
            )
          }
          return function (b) {
            if (b && b.__esModule) return b
            var w = {}
            if (b != null)
              for (var A = E(b), M = 0; M < A.length; M++)
                A[M] !== 'default' && p(w, b, A[M])
            return (h(w, b), w)
          }
        })(),
      g =
        (y && y.__exportStar) ||
        function (E, b) {
          for (var w in E)
            w !== 'default' &&
              !Object.prototype.hasOwnProperty.call(b, w) &&
              p(b, E, w)
        },
      s =
        (y && y.__importDefault) ||
        function (E) {
          return E && E.__esModule ? E : { default: E }
        }
    ;(Object.defineProperty(y, '__esModule', { value: !0 }),
      (y.ReasonCodes =
        y.KeepaliveManager =
        y.UniqueMessageIdProvider =
        y.DefaultMessageIdProvider =
        y.Store =
        y.MqttClient =
        y.connectAsync =
        y.connect =
        y.Client =
          void 0))
    var o = s(qf())
    y.MqttClient = o.default
    var u = s($b())
    y.DefaultMessageIdProvider = u.default
    var i = s(AS())
    y.UniqueMessageIdProvider = i.default
    var a = s(kb())
    y.Store = a.default
    var d = c(hw())
    ;((y.connect = d.default),
      Object.defineProperty(y, 'connectAsync', {
        enumerable: !0,
        get: function () {
          return d.connectAsync
        },
      }))
    var v = s(lv())
    ;((y.KeepaliveManager = v.default),
      (y.Client = o.default),
      g(qf(), y),
      g(pa(), y),
      g(Bb(), y))
    var S = ss()
    Object.defineProperty(y, 'ReasonCodes', {
      enumerable: !0,
      get: function () {
        return S.ReasonCodes
      },
    })
  }),
  dw = Ue((y) => {
    ;(Te(), xe(), Oe())
    var p =
        (y && y.__createBinding) ||
        (Object.create
          ? function (o, u, i, a) {
              a === void 0 && (a = i)
              var d = Object.getOwnPropertyDescriptor(u, i)
              ;((!d ||
                ('get' in d ? !u.__esModule : d.writable || d.configurable)) &&
                (d = {
                  enumerable: !0,
                  get: function () {
                    return u[i]
                  },
                }),
                Object.defineProperty(o, a, d))
            }
          : function (o, u, i, a) {
              ;(a === void 0 && (a = i), (o[a] = u[i]))
            }),
      h =
        (y && y.__setModuleDefault) ||
        (Object.create
          ? function (o, u) {
              Object.defineProperty(o, 'default', { enumerable: !0, value: u })
            }
          : function (o, u) {
              o.default = u
            }),
      c =
        (y && y.__importStar) ||
        (function () {
          var o = function (u) {
            return (
              (o =
                Object.getOwnPropertyNames ||
                function (i) {
                  var a = []
                  for (var d in i)
                    Object.prototype.hasOwnProperty.call(i, d) &&
                      (a[a.length] = d)
                  return a
                }),
              o(u)
            )
          }
          return function (u) {
            if (u && u.__esModule) return u
            var i = {}
            if (u != null)
              for (var a = o(u), d = 0; d < a.length; d++)
                a[d] !== 'default' && p(i, u, a[d])
            return (h(i, u), i)
          }
        })(),
      g =
        (y && y.__exportStar) ||
        function (o, u) {
          for (var i in o)
            i !== 'default' &&
              !Object.prototype.hasOwnProperty.call(u, i) &&
              p(u, o, i)
        }
    Object.defineProperty(y, '__esModule', { value: !0 })
    var s = c(Jm())
    ;((y.default = s), g(Jm(), y))
  })
const pw = dw()
function yw() {
  Xe.useEffect(() => {
    const y = pw.connect('ws://localhost:9001', {
      username: 'arthur',
      password: '1234',
    })
    return (
      y.on('connect', () => {
        ;(console.log('[Backglass] MQTT connected'),
          y.subscribe('pinball/flippers', (p) => {
            p
              ? console.error('❌ [Backglass] Subscribe error', p)
              : console.log('📡 [Backglass] Listening pinball/flippers')
          }))
      }),
      y.on('message', (p, h) => {
        const c = h.toString()
        switch (
          (console.log('[Backglass] MQTT:', c),
          (c.endsWith('_DOWN') || c.startsWith('LAUNCH_UP:')) &&
            window.dispatchEvent(new CustomEvent('bg:any-button')),
          c)
        ) {
          case 'LEFT_DOWN':
            window.dispatchEvent(new CustomEvent('bg:left-down'))
            break
          case 'RIGHT_DOWN':
            window.dispatchEvent(new CustomEvent('bg:right-down'))
            break
          case 'FRONT_GREEN_DOWN':
            window.dispatchEvent(new CustomEvent('bg:green-down'))
            break
          case 'FRONT_RED_DOWN':
            window.dispatchEvent(new CustomEvent('bg:red-down'))
            break
        }
      }),
      y.on('error', (p) => {
        console.error(' [Backglass] MQTT error', p)
      }),
      () => {
        y.end()
      }
    )
  }, [])
}
function Vr(y, p = 10, h, c = !0, g = null) {
  const s = Xe.useRef(0),
    o = Xe.useRef(0),
    u = Xe.useRef(null)
  Xe.useEffect(() => {
    function i(a) {
      const d = 1e3 / p
      if (a - o.current > d) {
        if (((o.current = a), s.current++, s.current >= y.length))
          if (c) s.current = 0
          else {
            ;((s.current = y.length - 1), g && g())
            return
          }
        h.current && (h.current.src = y[s.current])
      }
      u.current = requestAnimationFrame(i)
    }
    return (
      (u.current = requestAnimationFrame(i)),
      () => cancelAnimationFrame(u.current)
    )
  }, [y, p, h, c, g])
}
function gw() {
  const [y, p] = Xe.useState(!0),
    [h, c] = Xe.useState([])
  ;(Xe.useEffect(() => {
    const o = setInterval(() => {
      p((u) => !u)
    }, 500)
    return () => clearInterval(o)
  }, []),
    Xe.useEffect(() => {
      fetch(
        'https://flipper-backend-app.azurewebsites.net/api/scores/leaderboard'
      )
        .then((o) => o.json())
        .then((o) => {
          ;(o.status === 'success' && c(o.data), console.log(o))
        })
    }, []))
  const g = [
      ['leaderboard1', 'placement1'],
      ['leaderboard2', 'placement'],
      ['leaderboard3', 'placement'],
      ['leaderboard4', 'placement'],
      ['leaderboard5', 'placement'],
    ],
    s = {
      chalice: '/assets/IntroScreen/Chalice.png',
      cuphead: '/assets/IntroScreen/Cuphead.png',
      mugman: '/assets/IntroScreen/Mugman.png',
    }
  return Ke.jsx('div', {
    className: 'leaderboard',
    children: g.map(([o, u], i) =>
      Ke.jsxs(
        'div',
        {
          className: u,
          children: [
            Ke.jsx('img', {
              src: y
                ? `/assets/IntroScreen/${o}-bling.png`
                : `/assets/IntroScreen/${o}.png`,
              alt: 'leaderboard',
              className: 'leaderboard-piece',
            }),
            Ke.jsxs('div', {
              className: 'score-row',
              children: [
                Ke.jsx('img', {
                  src:
                    s[h[i]?.avatar?.toLowerCase()] ||
                    '/assets/IntroScreen/testChalice.png',
                  alt: 'player',
                  className: 'player-avatar',
                }),
                Ke.jsxs('div', {
                  className: 'score-value',
                  children: [
                    Ke.jsx('span', {
                      className: 'player-name',
                      children: h[i]?.player_name || '',
                    }),
                    Ke.jsx('span', {
                      className: 'player-score',
                      children: h[i]?.score || '',
                    }),
                  ],
                }),
              ],
            }),
          ],
        },
        i
      )
    ),
  })
}
const $m = Array.from(
  { length: 34 },
  (y, p) =>
    `/assets/IntroScreen/Cuphead & Mugman/cuphead_title_screen_${String(p + 1).padStart(4, '0')}.png`
)
function mw({ onAnyButton: y }) {
  const p = Xe.useRef(null)
  return (
    Vr($m, 20, p, !0),
    Xe.useEffect(() => {
      const h = () => y?.()
      return (
        window.addEventListener('bg:any-button', h),
        () => window.removeEventListener('bg:any-button', h)
      )
    }, [y]),
    Ke.jsxs('div', {
      className: 'intro-container',
      children: [
        Ke.jsx('img', {
          src: '/assets/IntroScreen/title_screen_background.png',
          alt: 'background',
          className: 'intro-bg',
        }),
        Ke.jsx('img', {
          src: '/assets/IntroScreen/title_chips_left_0001.png',
          alt: 'chips',
          className: 'intro-chips',
        }),
        Ke.jsx('img', {
          ref: p,
          src: $m[0],
          alt: 'cuphead animation',
          className: 'intro-animation',
        }),
        Ke.jsx(gw, {}),
        Ke.jsx('div', {
          className: 'press-any-button',
          children: 'Press Any Button',
        }),
      ],
    })
  )
}
const bw = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
function vw({ value: y, isActive: p, onUp: h, onDown: c }) {
  return Ke.jsxs('div', {
    className: 'letter-column',
    children: [
      Ke.jsx('button', {
        className: 'arrow-btn up',
        onClick: h,
        children: '▲',
      }),
      Ke.jsx('div', {
        className: `letter-box ${p ? 'active' : ''}`,
        children: bw[y],
      }),
      Ke.jsx('button', {
        className: 'arrow-btn down',
        onClick: c,
        children: '▼',
      }),
    ],
  })
}
const Mh = {
    launcher: '/sounds/launcher.wav',
    mugman: 'sounds/mugman.wav',
    cuphead: 'sounds/cuphead.wav',
    chalice: 'sounds/chalice.wav',
  },
  rs = new (window.AudioContext || window.webkitAudioContext)(),
  Mc = {}
async function eb(y) {
  if (Mc[y]) return Mc[y]
  const h = await (await fetch(Mh[y])).arrayBuffer(),
    c = await rs.decodeAudioData(h)
  return ((Mc[y] = c), c)
}
function _w() {
  const y = Xe.useCallback(async (h, c = 1) => {
      if (!Mh[h]) {
        console.warn(`[Sound] Son inconnu : ${h}`)
        return
      }
      try {
        const g = await eb(h),
          s = rs.createBufferSource(),
          o = rs.createGain()
        ;((o.gain.value = Math.min(Math.max(c, 0), 1)),
          (s.buffer = g),
          s.connect(o),
          o.connect(rs.destination),
          s.start(0))
      } catch (g) {
        console.warn(`[Sound] Erreur lecture ${h}:`, g.message)
      }
    }, []),
    p = Xe.useCallback(async (h) => {
      Mh[h] && (await eb(h))
    }, [])
  return { play: y, preload: p }
}
const Ir = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  Rc = (y, p) => {
    const h = Array.from(
        { length: 14 },
        (g, s) => `${y}/${p}_${String(s + 1).padStart(4, '0')}.png`
      ),
      c = [...h].slice(0, -1).reverse()
    return [...h, ...c]
  },
  yn = [
    {
      name: 'CUPHEAD',
      sound: 'cuphead',
      frames: Rc('/assets/SelectPlayer/Cuphead', 'cuphead_title_screen'),
      background: '/assets/IntroScreen/title_screen_background.png',
      color: 'rgb(204, 74, 74)',
    },
    {
      name: 'MUGMAN',
      sound: 'mugman',
      frames: Rc('/assets/SelectPlayer/Mugman', 'mugman_title_screen'),
      background: '/assets/IntroScreen/title_screen_background_mugman2.jpeg',
      color: '#88A9B6',
    },
    {
      name: 'CHALICE',
      sound: 'chalice',
      frames: Rc('/assets/SelectPlayer/Chalice', 'chalice_title_screen'),
      background: '/assets/IntroScreen/title_screen_background_chalice1.png',
      color: '#E5BD64',
    },
  ],
  Sw = 3
function ww({ onStartGame: y }) {
  const { play: p } = _w(),
    [h, c] = Xe.useState('character'),
    [g, s] = Xe.useState(0),
    [o, u] = Xe.useState([0, 0, 0]),
    [i, a] = Xe.useState(0),
    [d, v] = Xe.useState(0),
    S = Xe.useRef(null),
    E = Xe.useRef(null),
    b = Xe.useRef(null),
    w = [S, E, b]
  ;(Vr(yn[0].frames, 12, S, !0),
    Vr(yn[1].frames, 12, E, !0),
    Vr(yn[2].frames, 12, b, !0))
  const A = yn[d],
    M = () => {
      ;(p(A.sound), c('name'), s(0), a(0))
    },
    _ = () => {
      const T = [...o]
      if (((T[g] = i), u(T), g < Sw - 1)) (s(g + 1), a(0))
      else {
        const j = T.map((x) => Ir[x]).join('')
        y?.(j, A.name.toLowerCase())
      }
    }
  ;(Xe.useEffect(() => {
    const T = (j) => {
      if (h === 'character') {
        ;(j.code === 'ArrowDown' && v((x) => (x === yn.length - 1 ? 0 : x + 1)),
          j.code === 'ArrowUp' && v((x) => (x === 0 ? yn.length - 1 : x - 1)),
          j.code === 'Enter' && M())
        return
      }
      ;(j.code === 'ArrowRight' && a((x) => (x + 1) % Ir.length),
        j.code === 'ArrowLeft' && a((x) => (x - 1 + Ir.length) % Ir.length),
        j.code === 'Enter' && _())
    }
    return (
      window.addEventListener('keydown', T),
      () => window.removeEventListener('keydown', T)
    )
  }, [h, g, i, o, d]),
    Xe.useEffect(() => {
      const T = () => {
          h === 'character'
            ? v((k) => (k === 0 ? yn.length - 1 : k - 1))
            : a((k) => (k - 1 + Ir.length) % Ir.length)
        },
        j = () => {
          h === 'character'
            ? v((k) => (k === yn.length - 1 ? 0 : k + 1))
            : a((k) => (k + 1) % Ir.length)
        },
        x = () => {
          h === 'character' ? M() : _()
        }
      return (
        window.addEventListener('bg:left-down', T),
        window.addEventListener('bg:right-down', j),
        window.addEventListener('bg:green-down', x),
        () => {
          ;(window.removeEventListener('bg:left-down', T),
            window.removeEventListener('bg:right-down', j),
            window.removeEventListener('bg:green-down', x))
        }
      )
    }, [h, g, i, o, d]))
  const O = o.map((T, j) => (j === g ? i : T)),
    N = O.map((T) => Ir[T]).join('')
  return Ke.jsxs('div', {
    className: `select-player-screen ${h === 'character' ? 'character-only' : ''}`,
    style: {
      backgroundImage: `url(${A.background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    children: [
      Ke.jsx('div', {
        className: `character-side ${h === 'character' ? 'character-side-full' : ''} character-active`,
        children: yn.map((T, j) =>
          Ke.jsx(
            'img',
            {
              ref: w[j],
              src: T.frames[0],
              alt: T.name,
              className: 'character-image',
              style: {
                display: j === d ? 'block' : 'none',
                transform: d === 1 ? 'scaleX(-1)' : 'scaleX(1)',
              },
            },
            T.name
          )
        ),
      }),
      h === 'name' &&
        Ke.jsxs('div', {
          className: 'name-side',
          children: [
            Ke.jsx('div', {
              className: 'letters-container',
              children: O.map((T, j) =>
                Ke.jsx(
                  vw,
                  {
                    value: T,
                    isActive: j === g,
                    onUp: () =>
                      j === g && a((x) => (x - 1 + Ir.length) % Ir.length),
                    onDown: () => j === g && a((x) => (x + 1) % Ir.length),
                  },
                  j
                )
              ),
            }),
            Ke.jsxs('div', {
              className: 'player-name',
              children: ['PLAYER : ', N],
            }),
          ],
        }),
    ],
  })
}
const tb = Array.from(
    { length: 16 },
    (y, p) =>
      `/assets/Cuphead/Run/cuphead_run_${String(p + 1).padStart(4, '0')}.png`
  ),
  rb = Array.from(
    { length: 8 },
    (y, p) =>
      `/assets/Cuphead/Jump/cuphead_jump_${String(p + 1).padStart(4, '0')}.png`
  )
function Iv({ phase: y }) {
  const p = Xe.useRef(null),
    [h, c] = Xe.useState(!1),
    [g, s] = Xe.useState('start')
  return (
    Vr(h ? rb : tb, h ? 30 : 15, p),
    Xe.useEffect(() => {
      y === 'idle' && s('center')
    }, [y]),
    Xe.useEffect(() => {
      if (g !== 'center') return
      let o
      const u = () => {
        c(!0)
        const i = (rb.length / 10) * 1e3
        setTimeout(() => {
          c(!1)
        }, i)
        const a = Math.random() * 8e3 + 4e3
        o = setTimeout(u, a)
      }
      return ((o = setTimeout(u, 6500)), () => clearTimeout(o))
    }, [g]),
    Ke.jsx('img', {
      ref: p,
      className: `cuphead ${h ? 'jump' : ''} ${g}`,
      src: tb[0],
      alt: 'cuphead',
    })
  )
}
function Ew() {
  return Ke.jsxs('div', {
    className: 'scene',
    children: [
      Ke.jsx('div', { className: 'sky' }),
      Ke.jsx('div', { className: 'vista' }),
      Ke.jsx('div', { className: 'mid' }),
      Ke.jsx(Iv, { phase: 'idle' }),
    ],
  })
}
const Aw = Array.from(
    { length: 17 },
    (y, p) =>
      `/assets/DiceKing/introHands/boss-battle-kingdice-intro_${String(p + 1).padStart(4, '0')}.png`
  ),
  Tw = Array.from(
    { length: 48 },
    (y, p) =>
      `/assets/DiceKing/intro/boss-battle-kingdice-intro_${String(p + 1).padStart(4, '0')}.png`
  )
function Ow({ onFinish: y }) {
  const p = Xe.useRef(null),
    [h, c] = Xe.useState('hands'),
    g = h === 'hands' ? Aw : Tw
  return (
    Vr(g, 35, p, !1, () => {
      h === 'hands' ? c('intro') : h === 'intro' && y()
    }),
    Ke.jsx('img', {
      ref: p,
      className: `dice ${h === 'hands' ? 'hands' : ''}`,
      src: g[0],
    })
  )
}
const nb = Array.from(
  { length: 33 },
  (y, p) =>
    `/assets/DiceKing/idle/boss-battle-kingdice-idle_${String(p + 1).padStart(4, '0')}.png`
)
function xw({ onVictory: y, onDefeat: p }) {
  const h = Xe.useRef(null)
  return (
    Vr(nb, 35, h, !0),
    Xe.useEffect(() => {
      const c = (g) => {
        ;(g.key.toLowerCase() === 'p' && y(),
          g.key.toLowerCase() === 'm' && p())
      }
      return (
        window.addEventListener('keydown', c),
        () => {
          window.removeEventListener('keydown', c)
        }
      )
    }, [y, p]),
    Ke.jsx('img', { ref: h, className: 'dice idle', src: nb[0] })
  )
}
const ib = Array.from(
  { length: 15 },
  (y, p) =>
    `/assets/DiceKing/defeat/boss-battle-kingdice-defeat_${String(p + 1).padStart(4, '0')}.png`
)
function Mw({ onEnd: y }) {
  const p = Xe.useRef(null)
  return (
    Vr(ib, 20, p, !1, y),
    Ke.jsx('div', {
      className: 'dice-wrapper defeat',
      children: Ke.jsx('img', { ref: p, className: 'dice-result', src: ib[0] }),
    })
  )
}
const ab = Array.from(
  { length: 25 },
  (y, p) =>
    `/assets/DiceKing/chomp/boss-battle-kingdice-chomp_${String(p + 1).padStart(4, '0')}.png`
)
function Rw({ onEnd: y }) {
  const p = Xe.useRef(null)
  return (
    Vr(ab, 20, p, !1, y),
    Ke.jsx('div', {
      className: 'dice-wrapper chomp',
      children: Ke.jsx('img', { ref: p, className: 'dice-result', src: ab[0] }),
    })
  )
}
function Cw() {
  const [y, p] = Xe.useState('intro'),
    [h, c] = Xe.useState(!1)
  return (
    Xe.useEffect(() => {
      const g = setTimeout(() => c(!0), 100)
      return () => clearTimeout(g)
    }, []),
    Ke.jsxs('div', {
      className: `duel-dice-king ${h ? 'active' : ''}`,
      children: [
        Ke.jsx('img', {
          className: 'bg',
          src: '/assets/Bg/DiceKing/kd_bg_painting.png',
        }),
        Ke.jsx('img', {
          className: 'table',
          src: '/assets/Bg/DiceKing/kd_bg_table.png',
        }),
        y === 'intro' && Ke.jsx(Ow, { onFinish: () => p('idle') }),
        y === 'idle' &&
          Ke.jsx(xw, {
            onVictory: () => p('victory'),
            onDefeat: () => p('defeat'),
          }),
        y === 'victory' && Ke.jsx(Rw, { onEnd: () => p('idle') }),
        y === 'defeat' && Ke.jsx(Mw, { onEnd: () => p('idle') }),
        Ke.jsx(Iv, { phase: y }),
      ],
    })
  )
}
function jw() {
  return Ke.jsx('img', {
    src: '/assets/Results/winscreen_board.png',
    alt: 'board',
    className: 'results-board',
  })
}
const zv = Array.from(
    { length: 14 },
    (y, p) =>
      `/assets/Results/Cuphead/cuphead_title_screen_${String(p + 1).padStart(4, '0')}.png`
  ),
  Nw = [...zv].slice(1, -1).reverse(),
  lb = [...zv, ...Nw],
  Uw = Array.from(
    { length: 3 },
    (y, p) =>
      `/assets/Results/French/winscreen_results_title_french_${String(p + 1).padStart(4, '0')}.png`
  )
function Dw() {
  const y = Xe.useRef(null),
    p = Xe.useRef(null)
  return (
    Vr(lb, 20, y, !0),
    Ke.jsxs('div', {
      className: 'results-container',
      children: [
        Ke.jsx('img', {
          src: '/assets/Results/winscreen_bg.png',
          alt: 'background',
          className: 'results-bg',
        }),
        Ke.jsx('img', {
          ref: p,
          src: Uw[0],
          alt: 'title animation',
          className: 'results-title',
        }),
        Ke.jsx('img', {
          ref: y,
          src: lb[0],
          alt: 'cuphead animation',
          className: 'results-animation',
        }),
        Ke.jsx(jw, {}),
      ],
    })
  )
}
const Bw = {
  intro: '/sounds/leaderboard.mp3',
  duel: '/sounds/duel.mp3',
  video: '/sounds/video.mp3',
  result: '/sounds/result.mp3',
}
function kw() {
  const { screen: y, setScreen: p, startGame: h } = l1(),
    c = Xe.useRef(null),
    g = Xe.useRef(!1)
  yw()
  const s = (i) => {
    const a = Bw[i]
    if (!a) return
    c.current && (c.current.pause(), (c.current.currentTime = 0))
    const d = new Audio(a)
    ;((d.loop = !0),
      (d.volume = 0.6),
      (c.current = d),
      g.current && d.play().catch((v) => console.warn('❌ Audio bloqué :', v)))
  }
  ;(Xe.useEffect(() => {
    const i = () => {
      g.current ||
        ((g.current = !0),
        c.current?.play().catch((a) => console.warn('❌ Audio bloqué :', a)),
        window.removeEventListener('click', i),
        window.removeEventListener('keydown', i),
        window.removeEventListener('touchstart', i))
    }
    return (
      window.addEventListener('click', i),
      window.addEventListener('keydown', i),
      window.addEventListener('touchstart', i),
      s('intro'),
      () => {
        ;(window.removeEventListener('click', i),
          window.removeEventListener('keydown', i),
          window.removeEventListener('touchstart', i))
      }
    )
  }, []),
    Xe.useEffect(() => {
      s(y)
    }, [y]),
    Xe.useEffect(() => {
      const i = (a) => {
        ;(a.code === 'KeyK' && p('duel'),
          a.code === 'KeyX' && p('video'),
          a.code === 'KeyR' && p('result'))
      }
      return (
        window.addEventListener('keydown', i),
        () => window.removeEventListener('keydown', i)
      )
    }, [p]))
  const o = () => {
      y === 'intro' && p('select')
    },
    u = (i, a) => {
      h(i, a)
    }
  return Ke.jsxs(Ke.Fragment, {
    children: [
      y === 'intro' && Ke.jsx(mw, { onAnyButton: o }),
      y === 'select' && Ke.jsx(ww, { onStartGame: u }),
      y === 'video' && Ke.jsx(Ew, {}),
      y === 'duel' && Ke.jsx(Cw, {}),
      y === 'result' && Ke.jsx(Dw, {}),
    ],
  })
}
i1.createRoot(document.getElementById('root')).render(
  Ke.jsx(Xe.StrictMode, { children: Ke.jsx(kw, {}) })
)

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [37512], {
        54553: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.humanize = t.shorten = void 0;
            var n = r(74504),
                o = {
                    none: function(e, t) {
                        return e.toLocaleString(t)
                    },
                    thousands: function(e, t) {
                        return n.translate({
                            singular: "{COUNT}K",
                            replacements: {
                                COUNT: e.toLocaleString(t)
                            },
                            dictionary: {
                                "de-DE": {
                                    singular: "{COUNT}K"
                                },
                                en: {
                                    singular: "{COUNT}K"
                                },
                                es: {
                                    singular: "{COUNT} k"
                                },
                                "fr-FR": {
                                    singular: "{COUNT}K"
                                },
                                "ja-JP": {
                                    singular: "{COUNT}千"
                                },
                                "ko-KR": {
                                    singular: "{COUNT}천"
                                },
                                "pt-BR": {
                                    singular: "{COUNT}Mil"
                                }
                            }
                        })
                    },
                    millions: function(e, t) {
                        return n.translate({
                            singular: "{COUNT}M",
                            replacements: {
                                COUNT: e.toLocaleString(t)
                            },
                            dictionary: {
                                "de-DE": {
                                    singular: "{COUNT}M"
                                },
                                en: {
                                    singular: "{COUNT}M"
                                },
                                es: {
                                    singular: "{COUNT} M"
                                },
                                "fr-FR": {
                                    singular: "{COUNT}M"
                                },
                                "ja-JP": {
                                    singular: "{COUNT}万"
                                },
                                "ko-KR": {
                                    singular: "{COUNT}만"
                                },
                                "pt-BR": {
                                    singular: "{COUNT}M"
                                }
                            }
                        })
                    },
                    billions: function(e, t) {
                        return n.translate({
                            singular: "{COUNT}B",
                            replacements: {
                                COUNT: e.toLocaleString(t)
                            },
                            dictionary: {
                                "de-DE": {
                                    singular: "{COUNT}B"
                                },
                                en: {
                                    singular: "{COUNT}B"
                                },
                                es: {
                                    singular: "{COUNT} G"
                                },
                                "fr-FR": {
                                    singular: "{COUNT}B"
                                },
                                "ja-JP": {
                                    singular: "{COUNT}億"
                                },
                                "ko-KR": {
                                    singular: "{COUNT}억"
                                },
                                "pt-BR": {
                                    singular: "{COUNT}B"
                                }
                            }
                        })
                    },
                    infinity: function() {
                        return "∞"
                    }
                };
            t.shorten = function(e, t, r) {
                return void 0 === r && (r = 0), Math.floor(e / Math.pow(10, t - r)) / Math.pow(10, r)
            }, t.humanize = function(e) {
                var r = n.getCurrentLocale();
                switch (!0) {
                    case e < 1e4:
                        return o.none(e, r);
                    case e < 1e5:
                        return o.thousands(t.shorten(e, 3, 1), r);
                    case e < 1e6:
                        return o.thousands(t.shorten(e, 3, 0), r);
                    case e < 1e8:
                        return o.millions(t.shorten(e, 6, 1), r);
                    case e < 1e9:
                        return o.millions(t.shorten(e, 6, 0), r);
                    case e < 1e11:
                        return o.billions(t.shorten(e, 9, 1), r);
                    case e < 1e12:
                        return o.billions(t.shorten(e, 9, 0), r);
                    default:
                        return o.infinity()
                }
            }
        },
        52320: function(e, t, r) {
            t.Iu = void 0;
            var n = r(74504);
            Object.defineProperty(t, "Iu", {
                enumerable: !0,
                get: function() {
                    return n.translate
                }
            }), r(54553)
        },
        62172: function(e, t, r) {
            r.d(t, {
                B: function() {
                    return u
                }
            });
            var n = r(2784),
                o = r(92211),
                i = r(62656),
                l = r(49815),
                a = r(52322);

            function u(e) {
                let t = e + "CollectionProvider",
                    [r, u] = (0, o.b)(t),
                    [s, c] = r(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    f = e => {
                        let {
                            scope: t,
                            children: r
                        } = e, o = n.useRef(null), i = n.useRef(new Map).current;
                        return (0, a.jsx)(s, {
                            scope: t,
                            itemMap: i,
                            collectionRef: o,
                            children: r
                        })
                    };
                f.displayName = t;
                let d = e + "CollectionSlot",
                    p = (0, l.Z8)(d),
                    h = n.forwardRef((e, t) => {
                        let {
                            scope: r,
                            children: n
                        } = e, o = c(d, r), l = (0, i.e)(t, o.collectionRef);
                        return (0, a.jsx)(p, {
                            ref: l,
                            children: n
                        })
                    });
                h.displayName = d;
                let g = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    v = (0, l.Z8)(g),
                    w = n.forwardRef((e, t) => {
                        let {
                            scope: r,
                            children: o,
                            ...l
                        } = e, u = n.useRef(null), s = (0, i.e)(t, u), f = c(g, r);
                        return n.useEffect(() => (f.itemMap.set(u, {
                            ref: u,
                            ...l
                        }), () => void f.itemMap.delete(u))), (0, a.jsx)(v, {
                            [m]: "",
                            ref: s,
                            children: o
                        })
                    });
                return w.displayName = g, [{
                    Provider: f,
                    Slot: h,
                    ItemSlot: w
                }, function(t) {
                    let r = c(e + "CollectionConsumer", t);
                    return n.useCallback(() => {
                        let e = r.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll(`[${m}]`));
                        return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
                    }, [r.collectionRef, r.itemMap])
                }, u]
            }
        },
        59241: function(e, t, r) {
            r.d(t, {
                gm: function() {
                    return i
                }
            });
            var n = r(2784);
            r(52322);
            var o = n.createContext(void 0);

            function i(e) {
                let t = n.useContext(o);
                return e || t || "ltr"
            }
        },
        77190: function(e, t, r) {
            r.d(t, {
                ee: function() {
                    return eq
                },
                Eh: function() {
                    return eG
                },
                VY: function() {
                    return eJ
                },
                fC: function() {
                    return eZ
                },
                D7: function() {
                    return ek
                }
            });
            var n = r(2784);
            let o = ["top", "right", "bottom", "left"],
                i = Math.min,
                l = Math.max,
                a = Math.round,
                u = Math.floor,
                s = e => ({
                    x: e,
                    y: e
                }),
                c = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                f = {
                    start: "end",
                    end: "start"
                };

            function d(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function p(e) {
                return e.split("-")[0]
            }

            function h(e) {
                return e.split("-")[1]
            }

            function g(e) {
                return "x" === e ? "y" : "x"
            }

            function m(e) {
                return "y" === e ? "height" : "width"
            }

            function v(e) {
                return ["top", "bottom"].includes(p(e)) ? "y" : "x"
            }

            function w(e) {
                return e.replace(/start|end/g, e => f[e])
            }

            function y(e) {
                return e.replace(/left|right|bottom|top/g, e => c[e])
            }

            function x(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function b(e) {
                let {
                    x: t,
                    y: r,
                    width: n,
                    height: o
                } = e;
                return {
                    width: n,
                    height: o,
                    top: r,
                    left: t,
                    right: t + n,
                    bottom: r + o,
                    x: t,
                    y: r
                }
            }

            function C(e, t, r) {
                let n, {
                        reference: o,
                        floating: i
                    } = e,
                    l = v(t),
                    a = g(v(t)),
                    u = m(a),
                    s = p(t),
                    c = "y" === l,
                    f = o.x + o.width / 2 - i.width / 2,
                    d = o.y + o.height / 2 - i.height / 2,
                    w = o[u] / 2 - i[u] / 2;
                switch (s) {
                    case "top":
                        n = {
                            x: f,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        n = {
                            x: f,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        n = {
                            x: o.x + o.width,
                            y: d
                        };
                        break;
                    case "left":
                        n = {
                            x: o.x - i.width,
                            y: d
                        };
                        break;
                    default:
                        n = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (h(t)) {
                    case "start":
                        n[a] -= w * (r && c ? -1 : 1);
                        break;
                    case "end":
                        n[a] += w * (r && c ? -1 : 1)
                }
                return n
            }
            let S = async (e, t, r) => {
                let {
                    placement: n = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = r, a = i.filter(Boolean), u = await (null == l.isRTL ? void 0 : l.isRTL(t)), s = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: c,
                    y: f
                } = C(s, n, u), d = n, p = {}, h = 0;
                for (let r = 0; r < a.length; r++) {
                    let {
                        name: i,
                        fn: g
                    } = a[r], {
                        x: m,
                        y: v,
                        data: w,
                        reset: y
                    } = await g({
                        x: c,
                        y: f,
                        initialPlacement: n,
                        placement: d,
                        strategy: o,
                        middlewareData: p,
                        rects: s,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    c = null != m ? m : c, f = null != v ? v : f, p = {
                        ...p,
                        [i]: {
                            ...p[i],
                            ...w
                        }
                    }, y && h <= 50 && (h++, "object" == typeof y && (y.placement && (d = y.placement), y.rects && (s = !0 === y.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : y.rects), {
                        x: c,
                        y: f
                    } = C(s, d, u)), r = -1)
                }
                return {
                    x: c,
                    y: f,
                    placement: d,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function R(e, t) {
                var r;
                void 0 === t && (t = {});
                let {
                    x: n,
                    y: o,
                    platform: i,
                    rects: l,
                    elements: a,
                    strategy: u
                } = e, {
                    boundary: s = "clippingAncestors",
                    rootBoundary: c = "viewport",
                    elementContext: f = "floating",
                    altBoundary: p = !1,
                    padding: h = 0
                } = d(t, e), g = x(h), m = a[p ? "floating" === f ? "reference" : "floating" : f], v = b(await i.getClippingRect({
                    element: null == (r = await (null == i.isElement ? void 0 : i.isElement(m))) || r ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: s,
                    rootBoundary: c,
                    strategy: u
                })), w = "floating" === f ? {
                    x: n,
                    y: o,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), C = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
                    x: 1,
                    y: 1
                }, S = b(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: w,
                    offsetParent: y,
                    strategy: u
                }) : w);
                return {
                    top: (v.top - S.top + g.top) / C.y,
                    bottom: (S.bottom - v.bottom + g.bottom) / C.y,
                    left: (v.left - S.left + g.left) / C.x,
                    right: (S.right - v.right + g.right) / C.x
                }
            }

            function T(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function M(e) {
                return o.some(t => e[t] >= 0)
            }
            async function E(e, t) {
                let {
                    placement: r,
                    platform: n,
                    elements: o
                } = e, i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), l = p(r), a = h(r), u = "y" === v(r), s = ["left", "top"].includes(l) ? -1 : 1, c = i && u ? -1 : 1, f = d(t, e), {
                    mainAxis: g,
                    crossAxis: m,
                    alignmentAxis: w
                } = "number" == typeof f ? {
                    mainAxis: f,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: f.mainAxis || 0,
                    crossAxis: f.crossAxis || 0,
                    alignmentAxis: f.alignmentAxis
                };
                return a && "number" == typeof w && (m = "end" === a ? -1 * w : w), u ? {
                    x: m * c,
                    y: g * s
                } : {
                    x: g * s,
                    y: m * c
                }
            }

            function O() {
                return "undefined" != typeof window
            }

            function P(e) {
                return A(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function N(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function j(e) {
                var t;
                return null == (t = (A(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function A(e) {
                return !!O() && (e instanceof Node || e instanceof N(e).Node)
            }

            function k(e) {
                return !!O() && (e instanceof Element || e instanceof N(e).Element)
            }

            function L(e) {
                return !!O() && (e instanceof HTMLElement || e instanceof N(e).HTMLElement)
            }

            function D(e) {
                return !!O() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof N(e).ShadowRoot)
            }

            function I(e) {
                let {
                    overflow: t,
                    overflowX: r,
                    overflowY: n,
                    display: o
                } = U(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
            }

            function V(e) {
                return [":popover-open", ":modal"].some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function W(e) {
                let t = H(),
                    r = k(e) ? U(e) : e;
                return ["transform", "translate", "scale", "rotate", "perspective"].some(e => !!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(e => (r.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (r.contain || "").includes(e))
            }

            function H() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function B(e) {
                return ["html", "body", "#document"].includes(P(e))
            }

            function U(e) {
                return N(e).getComputedStyle(e)
            }

            function F(e) {
                return k(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function _(e) {
                if ("html" === P(e)) return e;
                let t = e.assignedSlot || e.parentNode || D(e) && e.host || j(e);
                return D(t) ? t.host : t
            }

            function z(e, t, r) {
                var n;
                void 0 === t && (t = []), void 0 === r && (r = !0);
                let o = function e(t) {
                        let r = _(t);
                        return B(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : L(r) && I(r) ? r : e(r)
                    }(e),
                    i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    l = N(o);
                if (i) {
                    let e = K(l);
                    return t.concat(l, l.visualViewport || [], I(o) ? o : [], e && r ? z(e) : [])
                }
                return t.concat(o, z(o, [], r))
            }

            function K(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function $(e) {
                let t = U(e),
                    r = parseFloat(t.width) || 0,
                    n = parseFloat(t.height) || 0,
                    o = L(e),
                    i = o ? e.offsetWidth : r,
                    l = o ? e.offsetHeight : n,
                    u = a(r) !== i || a(n) !== l;
                return u && (r = i, n = l), {
                    width: r,
                    height: n,
                    $: u
                }
            }

            function Y(e) {
                return k(e) ? e : e.contextElement
            }

            function X(e) {
                let t = Y(e);
                if (!L(t)) return s(1);
                let r = t.getBoundingClientRect(),
                    {
                        width: n,
                        height: o,
                        $: i
                    } = $(t),
                    l = (i ? a(r.width) : r.width) / n,
                    u = (i ? a(r.height) : r.height) / o;
                return l && Number.isFinite(l) || (l = 1), u && Number.isFinite(u) || (u = 1), {
                    x: l,
                    y: u
                }
            }
            let Z = s(0);

            function q(e) {
                let t = N(e);
                return H() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : Z
            }

            function J(e, t, r, n) {
                var o;
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                let i = e.getBoundingClientRect(),
                    l = Y(e),
                    a = s(1);
                t && (n ? k(n) && (a = X(n)) : a = X(e));
                let u = (void 0 === (o = r) && (o = !1), n && (!o || n === N(l)) && o) ? q(l) : s(0),
                    c = (i.left + u.x) / a.x,
                    f = (i.top + u.y) / a.y,
                    d = i.width / a.x,
                    p = i.height / a.y;
                if (l) {
                    let e = N(l),
                        t = n && k(n) ? N(n) : n,
                        r = e,
                        o = K(r);
                    for (; o && n && t !== r;) {
                        let e = X(o),
                            t = o.getBoundingClientRect(),
                            n = U(o),
                            i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
                            l = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
                        c *= e.x, f *= e.y, d *= e.x, p *= e.y, c += i, f += l, o = K(r = N(o))
                    }
                }
                return b({
                    width: d,
                    height: p,
                    x: c,
                    y: f
                })
            }

            function G(e, t) {
                let r = F(e).scrollLeft;
                return t ? t.left + r : J(j(e)).left + r
            }

            function Q(e, t, r) {
                void 0 === r && (r = !1);
                let n = e.getBoundingClientRect();
                return {
                    x: n.left + t.scrollLeft - (r ? 0 : G(e, n)),
                    y: n.top + t.scrollTop
                }
            }

            function ee(e, t, r) {
                let n;
                if ("viewport" === t) n = function(e, t) {
                    let r = N(e),
                        n = j(e),
                        o = r.visualViewport,
                        i = n.clientWidth,
                        l = n.clientHeight,
                        a = 0,
                        u = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = H();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft, u = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: u
                    }
                }(e, r);
                else if ("document" === t) n = function(e) {
                    let t = j(e),
                        r = F(e),
                        n = e.ownerDocument.body,
                        o = l(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
                        i = l(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight),
                        a = -r.scrollLeft + G(e),
                        u = -r.scrollTop;
                    return "rtl" === U(n).direction && (a += l(t.clientWidth, n.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: a,
                        y: u
                    }
                }(j(e));
                else if (k(t)) n = function(e, t) {
                    let r = J(e, !0, "fixed" === t),
                        n = r.top + e.clientTop,
                        o = r.left + e.clientLeft,
                        i = L(e) ? X(e) : s(1),
                        l = e.clientWidth * i.x;
                    return {
                        width: l,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: n * i.y
                    }
                }(t, r);
                else {
                    let r = q(e);
                    n = {
                        x: t.x - r.x,
                        y: t.y - r.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return b(n)
            }

            function et(e) {
                return "static" === U(e).position
            }

            function er(e, t) {
                if (!L(e) || "fixed" === U(e).position) return null;
                if (t) return t(e);
                let r = e.offsetParent;
                return j(e) === r && (r = r.ownerDocument.body), r
            }

            function en(e, t) {
                let r = N(e);
                if (V(e)) return r;
                if (!L(e)) {
                    let t = _(e);
                    for (; t && !B(t);) {
                        if (k(t) && !et(t)) return t;
                        t = _(t)
                    }
                    return r
                }
                let n = er(e, t);
                for (; n && ["table", "td", "th"].includes(P(n)) && et(n);) n = er(n, t);
                return n && B(n) && et(n) && !W(n) ? r : n || function(e) {
                    let t = _(e);
                    for (; L(t) && !B(t);) {
                        if (W(t)) return t;
                        if (V(t)) break;
                        t = _(t)
                    }
                    return null
                }(e) || r
            }
            let eo = async function(e) {
                let t = this.getOffsetParent || en,
                    r = this.getDimensions,
                    n = await r(e.floating);
                return {
                    reference: function(e, t, r) {
                        let n = L(t),
                            o = j(t),
                            i = "fixed" === r,
                            l = J(e, !0, i, t),
                            a = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            u = s(0);
                        if (n || !n && !i) {
                            if (("body" !== P(t) || I(o)) && (a = F(t)), n) {
                                let e = J(t, !0, i, t);
                                u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
                            } else o && (u.x = G(o))
                        }
                        i && !n && o && (u.x = G(o));
                        let c = !o || n || i ? s(0) : Q(o, a);
                        return {
                            x: l.left + a.scrollLeft - u.x - c.x,
                            y: l.top + a.scrollTop - u.y - c.y,
                            width: l.width,
                            height: l.height
                        }
                    }(e.reference, await t(e.floating), e.strategy),
                    floating: {
                        x: 0,
                        y: 0,
                        width: n.width,
                        height: n.height
                    }
                }
            }, ei = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {
                        elements: t,
                        rect: r,
                        offsetParent: n,
                        strategy: o
                    } = e, i = "fixed" === o, l = j(n), a = !!t && V(t.floating);
                    if (n === l || a && i) return r;
                    let u = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        c = s(1),
                        f = s(0),
                        d = L(n);
                    if ((d || !d && !i) && (("body" !== P(n) || I(l)) && (u = F(n)), L(n))) {
                        let e = J(n);
                        c = X(n), f.x = e.x + n.clientLeft, f.y = e.y + n.clientTop
                    }
                    let p = !l || d || i ? s(0) : Q(l, u, !0);
                    return {
                        width: r.width * c.x,
                        height: r.height * c.y,
                        x: r.x * c.x - u.scrollLeft * c.x + f.x + p.x,
                        y: r.y * c.y - u.scrollTop * c.y + f.y + p.y
                    }
                },
                getDocumentElement: j,
                getClippingRect: function(e) {
                    let {
                        element: t,
                        boundary: r,
                        rootBoundary: n,
                        strategy: o
                    } = e, a = [..."clippingAncestors" === r ? V(t) ? [] : function(e, t) {
                        let r = t.get(e);
                        if (r) return r;
                        let n = z(e, [], !1).filter(e => k(e) && "body" !== P(e)),
                            o = null,
                            i = "fixed" === U(e).position,
                            l = i ? _(e) : e;
                        for (; k(l) && !B(l);) {
                            let t = U(l),
                                r = W(l);
                            r || "fixed" !== t.position || (o = null), (i ? !r && !o : !r && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || I(l) && !r && function e(t, r) {
                                let n = _(t);
                                return !(n === r || !k(n) || B(n)) && ("fixed" === U(n).position || e(n, r))
                            }(e, l)) ? n = n.filter(e => e !== l) : o = t, l = _(l)
                        }
                        return t.set(e, n), n
                    }(t, this._c) : [].concat(r), n], u = a[0], s = a.reduce((e, r) => {
                        let n = ee(t, r, o);
                        return e.top = l(n.top, e.top), e.right = i(n.right, e.right), e.bottom = i(n.bottom, e.bottom), e.left = l(n.left, e.left), e
                    }, ee(t, u, o));
                    return {
                        width: s.right - s.left,
                        height: s.bottom - s.top,
                        x: s.left,
                        y: s.top
                    }
                },
                getOffsetParent: en,
                getElementRects: eo,
                getClientRects: function(e) {
                    return Array.from(e.getClientRects())
                },
                getDimensions: function(e) {
                    let {
                        width: t,
                        height: r
                    } = $(e);
                    return {
                        width: t,
                        height: r
                    }
                },
                getScale: X,
                isElement: k,
                isRTL: function(e) {
                    return "rtl" === U(e).direction
                }
            };

            function el(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
            }
            let ea = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: r,
                            y: n,
                            placement: o,
                            rects: a,
                            platform: u,
                            elements: s,
                            middlewareData: c
                        } = t, {
                            element: f,
                            padding: p = 0
                        } = d(e, t) || {};
                        if (null == f) return {};
                        let w = x(p),
                            y = {
                                x: r,
                                y: n
                            },
                            b = g(v(o)),
                            C = m(b),
                            S = await u.getDimensions(f),
                            R = "y" === b,
                            T = R ? "clientHeight" : "clientWidth",
                            M = a.reference[C] + a.reference[b] - y[b] - a.floating[C],
                            E = y[b] - a.reference[b],
                            O = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(f)),
                            P = O ? O[T] : 0;
                        P && await (null == u.isElement ? void 0 : u.isElement(O)) || (P = s.floating[T] || a.floating[C]);
                        let N = P / 2 - S[C] / 2 - 1,
                            j = i(w[R ? "top" : "left"], N),
                            A = i(w[R ? "bottom" : "right"], N),
                            k = P - S[C] - A,
                            L = P / 2 - S[C] / 2 + (M / 2 - E / 2),
                            D = l(j, i(L, k)),
                            I = !c.arrow && null != h(o) && L !== D && a.reference[C] / 2 - (L < j ? j : A) - S[C] / 2 < 0,
                            V = I ? L < j ? L - j : L - k : 0;
                        return {
                            [b]: y[b] + V,
                            data: {
                                [b]: D,
                                centerOffset: L - D - V,
                                ...I && {
                                    alignmentOffset: V
                                }
                            },
                            reset: I
                        }
                    }
                }),
                eu = (e, t, r) => {
                    let n = new Map,
                        o = {
                            platform: ei,
                            ...r
                        },
                        i = {
                            ...o.platform,
                            _c: n
                        };
                    return S(e, t, {
                        ...o,
                        platform: i
                    })
                };
            var es = r(28316),
                ec = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;

            function ef(e, t) {
                let r, n, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((r = e.length) !== t.length) return !1;
                        for (n = r; 0 != n--;)
                            if (!ef(e[n], t[n])) return !1;
                        return !0
                    }
                    if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (n = r; 0 != n--;)
                        if (!({}).hasOwnProperty.call(t, o[n])) return !1;
                    for (n = r; 0 != n--;) {
                        let r = o[n];
                        if (("_owner" !== r || !e.$$typeof) && !ef(e[r], t[r])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function ed(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function ep(e, t) {
                let r = ed(e);
                return Math.round(t * r) / r
            }

            function eh(e) {
                let t = n.useRef(e);
                return ec(() => {
                    t.current = e
                }), t
            }
            let eg = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: r,
                            padding: n
                        } = "function" == typeof e ? e(t) : e;
                        return r && ({}).hasOwnProperty.call(r, "current") ? null != r.current ? ea({
                            element: r.current,
                            padding: n
                        }).fn(t) : {} : r ? ea({
                            element: r,
                            padding: n
                        }).fn(t) : {}
                    }
                }),
                em = (e, t) => {
                    var r;
                    return {
                        ...(void 0 === (r = e) && (r = 0), {
                            name: "offset",
                            options: r,
                            async fn(e) {
                                var t, n;
                                let {
                                    x: o,
                                    y: i,
                                    placement: l,
                                    middlewareData: a
                                } = e, u = await E(e, r);
                                return l === (null == (t = a.offset) ? void 0 : t.placement) && null != (n = a.arrow) && n.alignmentOffset ? {} : {
                                    x: o + u.x,
                                    y: i + u.y,
                                    data: {
                                        ...u,
                                        placement: l
                                    }
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                ev = (e, t) => {
                    var r;
                    return {
                        ...(void 0 === (r = e) && (r = {}), {
                            name: "shift",
                            options: r,
                            async fn(e) {
                                let {
                                    x: t,
                                    y: n,
                                    placement: o
                                } = e, {
                                    mainAxis: a = !0,
                                    crossAxis: u = !1,
                                    limiter: s = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: r
                                            } = e;
                                            return {
                                                x: t,
                                                y: r
                                            }
                                        }
                                    },
                                    ...c
                                } = d(r, e), f = {
                                    x: t,
                                    y: n
                                }, h = await R(e, c), m = v(p(o)), w = g(m), y = f[w], x = f[m];
                                if (a) {
                                    let e = "y" === w ? "top" : "left",
                                        t = "y" === w ? "bottom" : "right",
                                        r = y + h[e],
                                        n = y - h[t];
                                    y = l(r, i(y, n))
                                }
                                if (u) {
                                    let e = "y" === m ? "top" : "left",
                                        t = "y" === m ? "bottom" : "right",
                                        r = x + h[e],
                                        n = x - h[t];
                                    x = l(r, i(x, n))
                                }
                                let b = s.fn({
                                    ...e,
                                    [w]: y,
                                    [m]: x
                                });
                                return {
                                    ...b,
                                    data: {
                                        x: b.x - t,
                                        y: b.y - n,
                                        enabled: {
                                            [w]: a,
                                            [m]: u
                                        }
                                    }
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                ew = (e, t) => {
                    var r;
                    return {
                        ...(void 0 === (r = e) && (r = {}), {
                            options: r,
                            fn(e) {
                                let {
                                    x: t,
                                    y: n,
                                    placement: o,
                                    rects: i,
                                    middlewareData: l
                                } = e, {
                                    offset: a = 0,
                                    mainAxis: u = !0,
                                    crossAxis: s = !0
                                } = d(r, e), c = {
                                    x: t,
                                    y: n
                                }, f = v(o), h = g(f), m = c[h], w = c[f], y = d(a, e), x = "number" == typeof y ? {
                                    mainAxis: y,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...y
                                };
                                if (u) {
                                    let e = "y" === h ? "height" : "width",
                                        t = i.reference[h] - i.floating[e] + x.mainAxis,
                                        r = i.reference[h] + i.reference[e] - x.mainAxis;
                                    m < t ? m = t : m > r && (m = r)
                                }
                                if (s) {
                                    var b, C;
                                    let e = "y" === h ? "width" : "height",
                                        t = ["top", "left"].includes(p(o)),
                                        r = i.reference[f] - i.floating[e] + (t && (null == (b = l.offset) ? void 0 : b[f]) || 0) + (t ? 0 : x.crossAxis),
                                        n = i.reference[f] + i.reference[e] + (t ? 0 : (null == (C = l.offset) ? void 0 : C[f]) || 0) - (t ? x.crossAxis : 0);
                                    w < r ? w = r : w > n && (w = n)
                                }
                                return {
                                    [h]: m,
                                    [f]: w
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                ey = (e, t) => {
                    var r;
                    return {
                        ...(void 0 === (r = e) && (r = {}), {
                            name: "flip",
                            options: r,
                            async fn(e) {
                                var t, n, o, i, l, a;
                                let {
                                    placement: u,
                                    middlewareData: s,
                                    rects: c,
                                    initialPlacement: f,
                                    platform: x,
                                    elements: b
                                } = e, {
                                    mainAxis: C = !0,
                                    crossAxis: S = !0,
                                    fallbackPlacements: T,
                                    fallbackStrategy: M = "bestFit",
                                    fallbackAxisSideDirection: E = "none",
                                    flipAlignment: O = !0,
                                    ...P
                                } = d(r, e);
                                if (null != (t = s.arrow) && t.alignmentOffset) return {};
                                let N = p(u),
                                    j = v(f),
                                    A = p(f) === f,
                                    k = await (null == x.isRTL ? void 0 : x.isRTL(b.floating)),
                                    L = T || (A || !O ? [y(f)] : function(e) {
                                        let t = y(e);
                                        return [w(e), t, w(t)]
                                    }(f)),
                                    D = "none" !== E;
                                !T && D && L.push(... function(e, t, r, n) {
                                    let o = h(e),
                                        i = function(e, t, r) {
                                            let n = ["left", "right"],
                                                o = ["right", "left"];
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (r) return t ? o : n;
                                                    return t ? n : o;
                                                case "left":
                                                case "right":
                                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                                default:
                                                    return []
                                            }
                                        }(p(e), "start" === r, n);
                                    return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(w)))), i
                                }(f, O, E, k));
                                let I = [f, ...L],
                                    V = await R(e, P),
                                    W = [],
                                    H = (null == (n = s.flip) ? void 0 : n.overflows) || [];
                                if (C && W.push(V[N]), S) {
                                    let e = function(e, t, r) {
                                        void 0 === r && (r = !1);
                                        let n = h(e),
                                            o = g(v(e)),
                                            i = m(o),
                                            l = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                                        return t.reference[i] > t.floating[i] && (l = y(l)), [l, y(l)]
                                    }(u, c, k);
                                    W.push(V[e[0]], V[e[1]])
                                }
                                if (H = [...H, {
                                        placement: u,
                                        overflows: W
                                    }], !W.every(e => e <= 0)) {
                                    let e = ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1,
                                        t = I[e];
                                    if (t) {
                                        let r = "alignment" === S && j !== v(t),
                                            n = (null == (l = H[0]) ? void 0 : l.overflows[0]) > 0;
                                        if (!r || n) return {
                                            data: {
                                                index: e,
                                                overflows: H
                                            },
                                            reset: {
                                                placement: t
                                            }
                                        }
                                    }
                                    let r = null == (i = H.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                    if (!r) switch (M) {
                                        case "bestFit": {
                                            let e = null == (a = H.filter(e => {
                                                if (D) {
                                                    let t = v(e.placement);
                                                    return t === j || "y" === t
                                                }
                                                return !0
                                            }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : a[0];
                                            e && (r = e);
                                            break
                                        }
                                        case "initialPlacement":
                                            r = f
                                    }
                                    if (u !== r) return {
                                        reset: {
                                            placement: r
                                        }
                                    }
                                }
                                return {}
                            }
                        }),
                        options: [e, t]
                    }
                },
                ex = (e, t) => {
                    var r;
                    return {
                        ...(void 0 === (r = e) && (r = {}), {
                            name: "size",
                            options: r,
                            async fn(e) {
                                var t, n;
                                let o, a;
                                let {
                                    placement: u,
                                    rects: s,
                                    platform: c,
                                    elements: f
                                } = e, {
                                    apply: g = () => {},
                                    ...m
                                } = d(r, e), w = await R(e, m), y = p(u), x = h(u), b = "y" === v(u), {
                                    width: C,
                                    height: S
                                } = s.floating;
                                "top" === y || "bottom" === y ? (o = y, a = x === (await (null == c.isRTL ? void 0 : c.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (a = y, o = "end" === x ? "top" : "bottom");
                                let T = S - w.top - w.bottom,
                                    M = C - w.left - w.right,
                                    E = i(S - w[o], T),
                                    O = i(C - w[a], M),
                                    P = !e.middlewareData.shift,
                                    N = E,
                                    j = O;
                                if (null != (t = e.middlewareData.shift) && t.enabled.x && (j = M), null != (n = e.middlewareData.shift) && n.enabled.y && (N = T), P && !x) {
                                    let e = l(w.left, 0),
                                        t = l(w.right, 0),
                                        r = l(w.top, 0),
                                        n = l(w.bottom, 0);
                                    b ? j = C - 2 * (0 !== e || 0 !== t ? e + t : l(w.left, w.right)) : N = S - 2 * (0 !== r || 0 !== n ? r + n : l(w.top, w.bottom))
                                }
                                await g({
                                    ...e,
                                    availableWidth: j,
                                    availableHeight: N
                                });
                                let A = await c.getDimensions(f.floating);
                                return C !== A.width || S !== A.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }),
                        options: [e, t]
                    }
                },
                eb = (e, t) => {
                    var r;
                    return {
                        ...(void 0 === (r = e) && (r = {}), {
                            name: "hide",
                            options: r,
                            async fn(e) {
                                let {
                                    rects: t
                                } = e, {
                                    strategy: n = "referenceHidden",
                                    ...o
                                } = d(r, e);
                                switch (n) {
                                    case "referenceHidden": {
                                        let r = T(await R(e, {
                                            ...o,
                                            elementContext: "reference"
                                        }), t.reference);
                                        return {
                                            data: {
                                                referenceHiddenOffsets: r,
                                                referenceHidden: M(r)
                                            }
                                        }
                                    }
                                    case "escaped": {
                                        let r = T(await R(e, {
                                            ...o,
                                            altBoundary: !0
                                        }), t.floating);
                                        return {
                                            data: {
                                                escapedOffsets: r,
                                                escaped: M(r)
                                            }
                                        }
                                    }
                                    default:
                                        return {}
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                eC = (e, t) => ({
                    ...eg(e),
                    options: [e, t]
                });
            var eS = r(72714),
                eR = r(52322),
                eT = n.forwardRef((e, t) => {
                    let {
                        children: r,
                        width: n = 10,
                        height: o = 5,
                        ...i
                    } = e;
                    return (0, eR.jsx)(eS.WV.svg, {
                        ...i,
                        ref: t,
                        width: n,
                        height: o,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: e.asChild ? r : (0, eR.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            eT.displayName = "Arrow";
            var eM = r(62656),
                eE = r(92211),
                eO = r(27757),
                eP = r(61644),
                eN = r(35019),
                ej = "Popper",
                [eA, ek] = (0, eE.b)(ej),
                [eL, eD] = eA(ej),
                eI = e => {
                    let {
                        __scopePopper: t,
                        children: r
                    } = e, [o, i] = n.useState(null);
                    return (0, eR.jsx)(eL, {
                        scope: t,
                        anchor: o,
                        onAnchorChange: i,
                        children: r
                    })
                };
            eI.displayName = ej;
            var eV = "PopperAnchor",
                eW = n.forwardRef((e, t) => {
                    let {
                        __scopePopper: r,
                        virtualRef: o,
                        ...i
                    } = e, l = eD(eV, r), a = n.useRef(null), u = (0, eM.e)(t, a);
                    return n.useEffect(() => {
                        l.onAnchorChange(o?.current || a.current)
                    }), o ? null : (0, eR.jsx)(eS.WV.div, {
                        ...i,
                        ref: u
                    })
                });
            eW.displayName = eV;
            var eH = "PopperContent",
                [eB, eU] = eA(eH),
                eF = n.forwardRef((e, t) => {
                    let {
                        __scopePopper: r,
                        side: o = "bottom",
                        sideOffset: a = 0,
                        align: s = "center",
                        alignOffset: c = 0,
                        arrowPadding: f = 0,
                        avoidCollisions: d = !0,
                        collisionBoundary: p = [],
                        collisionPadding: h = 0,
                        sticky: g = "partial",
                        hideWhenDetached: m = !1,
                        updatePositionStrategy: v = "optimized",
                        onPlaced: w,
                        ...y
                    } = e, x = eD(eH, r), [b, C] = n.useState(null), S = (0, eM.e)(t, e => C(e)), [R, T] = n.useState(null), M = (0, eN.t)(R), E = M?.width ?? 0, O = M?.height ?? 0, P = "number" == typeof h ? h : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...h
                    }, N = Array.isArray(p) ? p : [p], A = N.length > 0, k = {
                        padding: P,
                        boundary: N.filter(e$),
                        altBoundary: A
                    }, {
                        refs: L,
                        floatingStyles: D,
                        placement: I,
                        isPositioned: V,
                        middlewareData: W
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: r = "absolute",
                            middleware: o = [],
                            platform: i,
                            elements: {
                                reference: l,
                                floating: a
                            } = {},
                            transform: u = !0,
                            whileElementsMounted: s,
                            open: c
                        } = e, [f, d] = n.useState({
                            x: 0,
                            y: 0,
                            strategy: r,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [p, h] = n.useState(o);
                        ef(p, o) || h(o);
                        let [g, m] = n.useState(null), [v, w] = n.useState(null), y = n.useCallback(e => {
                            e !== S.current && (S.current = e, m(e))
                        }, []), x = n.useCallback(e => {
                            e !== R.current && (R.current = e, w(e))
                        }, []), b = l || g, C = a || v, S = n.useRef(null), R = n.useRef(null), T = n.useRef(f), M = null != s, E = eh(s), O = eh(i), P = eh(c), N = n.useCallback(() => {
                            if (!S.current || !R.current) return;
                            let e = {
                                placement: t,
                                strategy: r,
                                middleware: p
                            };
                            O.current && (e.platform = O.current), eu(S.current, R.current, e).then(e => {
                                let t = {
                                    ...e,
                                    isPositioned: !1 !== P.current
                                };
                                j.current && !ef(T.current, t) && (T.current = t, es.flushSync(() => {
                                    d(t)
                                }))
                            })
                        }, [p, t, r, O, P]);
                        ec(() => {
                            !1 === c && T.current.isPositioned && (T.current.isPositioned = !1, d(e => ({
                                ...e,
                                isPositioned: !1
                            })))
                        }, [c]);
                        let j = n.useRef(!1);
                        ec(() => (j.current = !0, () => {
                            j.current = !1
                        }), []), ec(() => {
                            if (b && (S.current = b), C && (R.current = C), b && C) {
                                if (E.current) return E.current(b, C, N);
                                N()
                            }
                        }, [b, C, N, E, M]);
                        let A = n.useMemo(() => ({
                                reference: S,
                                floating: R,
                                setReference: y,
                                setFloating: x
                            }), [y, x]),
                            k = n.useMemo(() => ({
                                reference: b,
                                floating: C
                            }), [b, C]),
                            L = n.useMemo(() => {
                                let e = {
                                    position: r,
                                    left: 0,
                                    top: 0
                                };
                                if (!k.floating) return e;
                                let t = ep(k.floating, f.x),
                                    n = ep(k.floating, f.y);
                                return u ? {
                                    ...e,
                                    transform: "translate(" + t + "px, " + n + "px)",
                                    ...ed(k.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: r,
                                    left: t,
                                    top: n
                                }
                            }, [r, u, k.floating, f.x, f.y]);
                        return n.useMemo(() => ({
                            ...f,
                            update: N,
                            refs: A,
                            elements: k,
                            floatingStyles: L
                        }), [f, N, A, k, L])
                    }({
                        strategy: "fixed",
                        placement: o + ("center" !== s ? "-" + s : ""),
                        whileElementsMounted: (...e) => (function(e, t, r, n) {
                            let o;
                            void 0 === n && (n = {});
                            let {
                                ancestorScroll: a = !0,
                                ancestorResize: s = !0,
                                elementResize: c = "function" == typeof ResizeObserver,
                                layoutShift: f = "function" == typeof IntersectionObserver,
                                animationFrame: d = !1
                            } = n, p = Y(e), h = a || s ? [...p ? z(p) : [], ...z(t)] : [];
                            h.forEach(e => {
                                a && e.addEventListener("scroll", r, {
                                    passive: !0
                                }), s && e.addEventListener("resize", r)
                            });
                            let g = p && f ? function(e, t) {
                                    let r, n = null,
                                        o = j(e);

                                    function a() {
                                        var e;
                                        clearTimeout(r), null == (e = n) || e.disconnect(), n = null
                                    }
                                    return ! function s(c, f) {
                                        void 0 === c && (c = !1), void 0 === f && (f = 1), a();
                                        let d = e.getBoundingClientRect(),
                                            {
                                                left: p,
                                                top: h,
                                                width: g,
                                                height: m
                                            } = d;
                                        if (c || t(), !g || !m) return;
                                        let v = u(h),
                                            w = u(o.clientWidth - (p + g)),
                                            y = {
                                                rootMargin: -v + "px " + -w + "px " + -u(o.clientHeight - (h + m)) + "px " + -u(p) + "px",
                                                threshold: l(0, i(1, f)) || 1
                                            },
                                            x = !0;

                                        function b(t) {
                                            let n = t[0].intersectionRatio;
                                            if (n !== f) {
                                                if (!x) return s();
                                                n ? s(!1, n) : r = setTimeout(() => {
                                                    s(!1, 1e-7)
                                                }, 1e3)
                                            }
                                            1 !== n || el(d, e.getBoundingClientRect()) || s(), x = !1
                                        }
                                        try {
                                            n = new IntersectionObserver(b, {
                                                ...y,
                                                root: o.ownerDocument
                                            })
                                        } catch (e) {
                                            n = new IntersectionObserver(b, y)
                                        }
                                        n.observe(e)
                                    }(!0), a
                                }(p, r) : null,
                                m = -1,
                                v = null;
                            c && (v = new ResizeObserver(e => {
                                let [n] = e;
                                n && n.target === p && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
                                    var e;
                                    null == (e = v) || e.observe(t)
                                })), r()
                            }), p && !d && v.observe(p), v.observe(t));
                            let w = d ? J(e) : null;
                            return d && function t() {
                                let n = J(e);
                                w && !el(w, n) && r(), w = n, o = requestAnimationFrame(t)
                            }(), r(), () => {
                                var e;
                                h.forEach(e => {
                                    a && e.removeEventListener("scroll", r), s && e.removeEventListener("resize", r)
                                }), null == g || g(), null == (e = v) || e.disconnect(), v = null, d && cancelAnimationFrame(o)
                            }
                        })(...e, {
                            animationFrame: "always" === v
                        }),
                        elements: {
                            reference: x.anchor
                        },
                        middleware: [em({
                            mainAxis: a + O,
                            alignmentAxis: c
                        }), d && ev({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === g ? ew() : void 0,
                            ...k
                        }), d && ey({
                            ...k
                        }), ex({
                            ...k,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: r,
                                availableHeight: n
                            }) => {
                                let {
                                    width: o,
                                    height: i
                                } = t.reference, l = e.floating.style;
                                l.setProperty("--radix-popper-available-width", `${r}px`), l.setProperty("--radix-popper-available-height", `${n}px`), l.setProperty("--radix-popper-anchor-width", `${o}px`), l.setProperty("--radix-popper-anchor-height", `${i}px`)
                            }
                        }), R && eC({
                            element: R,
                            padding: f
                        }), eY({
                            arrowWidth: E,
                            arrowHeight: O
                        }), m && eb({
                            strategy: "referenceHidden",
                            ...k
                        })]
                    }), [H, B] = eX(I), U = (0, eO.W)(w);
                    (0, eP.b)(() => {
                        V && U?.()
                    }, [V, U]);
                    let F = W.arrow?.x,
                        _ = W.arrow?.y,
                        K = W.arrow?.centerOffset !== 0,
                        [$, X] = n.useState();
                    return (0, eP.b)(() => {
                        b && X(window.getComputedStyle(b).zIndex)
                    }, [b]), (0, eR.jsx)("div", {
                        ref: L.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: {
                            ...D,
                            transform: V ? D.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: $,
                            "--radix-popper-transform-origin": [W.transformOrigin?.x, W.transformOrigin?.y].join(" "),
                            ...W.hide?.referenceHidden && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, eR.jsx)(eB, {
                            scope: r,
                            placedSide: H,
                            onArrowChange: T,
                            arrowX: F,
                            arrowY: _,
                            shouldHideArrow: K,
                            children: (0, eR.jsx)(eS.WV.div, {
                                "data-side": H,
                                "data-align": B,
                                ...y,
                                ref: S,
                                style: {
                                    ...y.style,
                                    animation: V ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            eF.displayName = eH;
            var e_ = "PopperArrow",
                ez = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                eK = n.forwardRef(function(e, t) {
                    let {
                        __scopePopper: r,
                        ...n
                    } = e, o = eU(e_, r), i = ez[o.placedSide];
                    return (0, eR.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            } [o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            } [o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, eR.jsx)(eT, {
                            ...n,
                            ref: t,
                            style: {
                                ...n.style,
                                display: "block"
                            }
                        })
                    })
                });

            function e$(e) {
                return null !== e
            }
            eK.displayName = e_;
            var eY = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    let {
                        placement: r,
                        rects: n,
                        middlewareData: o
                    } = t, i = o.arrow?.centerOffset !== 0, l = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [u, s] = eX(r), c = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    } [s], f = (o.arrow?.x ?? 0) + l / 2, d = (o.arrow?.y ?? 0) + a / 2, p = "", h = "";
                    return "bottom" === u ? (p = i ? c : `${f}px`, h = `${-a}px`) : "top" === u ? (p = i ? c : `${f}px`, h = `${n.floating.height+a}px`) : "right" === u ? (p = `${-a}px`, h = i ? c : `${d}px`) : "left" === u && (p = `${n.floating.width+a}px`, h = i ? c : `${d}px`), {
                        data: {
                            x: p,
                            y: h
                        }
                    }
                }
            });

            function eX(e) {
                let [t, r = "center"] = e.split("-");
                return [t, r]
            }
            var eZ = eI,
                eq = eW,
                eJ = eF,
                eG = eK
        },
        24513: function(e, t, r) {
            r.d(t, {
                VY: function() {
                    return eP
                },
                JO: function() {
                    return eE
                },
                ck: function() {
                    return ej
                },
                eT: function() {
                    return eA
                },
                h_: function() {
                    return eO
                },
                fC: function() {
                    return eR
                },
                xz: function() {
                    return eT
                },
                B4: function() {
                    return eM
                },
                l_: function() {
                    return eN
                }
            });
            var n = r(2784),
                o = r(28316);

            function i(e, [t, r]) {
                return Math.min(r, Math.max(t, e))
            }
            var l = r(17998),
                a = r(62172),
                u = r(62656),
                s = r(92211),
                c = r(59241),
                f = r(35999),
                d = r(11861),
                p = r(22426),
                h = r(23372),
                g = r(77190),
                m = r(78773),
                v = r(72714),
                w = r(49815),
                y = r(27757),
                x = r(87695),
                b = r(61644),
                C = r(90022),
                S = r(89785),
                R = r(49732),
                T = r(70506),
                M = r(52322),
                E = [" ", "Enter", "ArrowUp", "ArrowDown"],
                O = [" ", "Enter"],
                P = "Select",
                [N, j, A] = (0, a.B)(P),
                [k, L] = (0, s.b)(P, [A, g.D7]),
                D = (0, g.D7)(),
                [I, V] = k(P),
                [W, H] = k(P),
                B = e => {
                    let {
                        __scopeSelect: t,
                        children: r,
                        open: o,
                        defaultOpen: i,
                        onOpenChange: l,
                        value: a,
                        defaultValue: u,
                        onValueChange: s,
                        dir: f,
                        name: d,
                        autoComplete: p,
                        disabled: m,
                        required: v,
                        form: w
                    } = e, y = D(t), [b, C] = n.useState(null), [S, R] = n.useState(null), [T, E] = n.useState(!1), O = (0, c.gm)(f), [j, A] = (0, x.T)({
                        prop: o,
                        defaultProp: i ?? !1,
                        onChange: l,
                        caller: P
                    }), [k, L] = (0, x.T)({
                        prop: a,
                        defaultProp: u,
                        onChange: s,
                        caller: P
                    }), V = n.useRef(null), H = !b || w || !!b.closest("form"), [B, U] = n.useState(new Set), F = Array.from(B).map(e => e.props.value).join(";");
                    return (0, M.jsx)(g.fC, {
                        ...y,
                        children: (0, M.jsxs)(I, {
                            required: v,
                            scope: t,
                            trigger: b,
                            onTriggerChange: C,
                            valueNode: S,
                            onValueNodeChange: R,
                            valueNodeHasChildren: T,
                            onValueNodeHasChildrenChange: E,
                            contentId: (0, h.M)(),
                            value: k,
                            onValueChange: L,
                            open: j,
                            onOpenChange: A,
                            dir: O,
                            triggerPointerDownPosRef: V,
                            disabled: m,
                            children: [(0, M.jsx)(N.Provider, {
                                scope: t,
                                children: (0, M.jsx)(W, {
                                    scope: e.__scopeSelect,
                                    onNativeOptionAdd: n.useCallback(e => {
                                        U(t => new Set(t).add(e))
                                    }, []),
                                    onNativeOptionRemove: n.useCallback(e => {
                                        U(t => {
                                            let r = new Set(t);
                                            return r.delete(e), r
                                        })
                                    }, []),
                                    children: r
                                })
                            }), H ? (0, M.jsxs)(ex, {
                                "aria-hidden": !0,
                                required: v,
                                tabIndex: -1,
                                name: d,
                                autoComplete: p,
                                value: k,
                                onChange: e => L(e.target.value),
                                disabled: m,
                                form: w,
                                children: [void 0 === k ? (0, M.jsx)("option", {
                                    value: ""
                                }) : null, Array.from(B)]
                            }, F) : null]
                        })
                    })
                };
            B.displayName = P;
            var U = "SelectTrigger",
                F = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        disabled: o = !1,
                        ...i
                    } = e, a = D(r), s = V(U, r), c = s.disabled || o, f = (0, u.e)(t, s.onTriggerChange), d = j(r), p = n.useRef("touch"), [h, m, w] = eC(e => {
                        let t = d().filter(e => !e.disabled),
                            r = t.find(e => e.value === s.value),
                            n = eS(t, e, r);
                        void 0 !== n && s.onValueChange(n.value)
                    }), y = e => {
                        c || (s.onOpenChange(!0), w()), e && (s.triggerPointerDownPosRef.current = {
                            x: Math.round(e.pageX),
                            y: Math.round(e.pageY)
                        })
                    };
                    return (0, M.jsx)(g.ee, {
                        asChild: !0,
                        ...a,
                        children: (0, M.jsx)(v.WV.button, {
                            type: "button",
                            role: "combobox",
                            "aria-controls": s.contentId,
                            "aria-expanded": s.open,
                            "aria-required": s.required,
                            "aria-autocomplete": "none",
                            dir: s.dir,
                            "data-state": s.open ? "open" : "closed",
                            disabled: c,
                            "data-disabled": c ? "" : void 0,
                            "data-placeholder": eb(s.value) ? "" : void 0,
                            ...i,
                            ref: f,
                            onClick: (0, l.M)(i.onClick, e => {
                                e.currentTarget.focus(), "mouse" !== p.current && y(e)
                            }),
                            onPointerDown: (0, l.M)(i.onPointerDown, e => {
                                p.current = e.pointerType;
                                let t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (y(e), e.preventDefault())
                            }),
                            onKeyDown: (0, l.M)(i.onKeyDown, e => {
                                let t = "" !== h.current;
                                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || m(e.key), (!t || " " !== e.key) && E.includes(e.key) && (y(), e.preventDefault())
                            })
                        })
                    })
                });
            F.displayName = U;
            var _ = "SelectValue",
                z = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: n,
                        style: o,
                        children: i,
                        placeholder: l = "",
                        ...a
                    } = e, s = V(_, r), {
                        onValueNodeHasChildrenChange: c
                    } = s, f = void 0 !== i, d = (0, u.e)(t, s.onValueNodeChange);
                    return (0, b.b)(() => {
                        c(f)
                    }, [c, f]), (0, M.jsx)(v.WV.span, {
                        ...a,
                        ref: d,
                        style: {
                            pointerEvents: "none"
                        },
                        children: eb(s.value) ? (0, M.jsx)(M.Fragment, {
                            children: l
                        }) : i
                    })
                });
            z.displayName = _;
            var K = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    children: n,
                    ...o
                } = e;
                return (0, M.jsx)(v.WV.span, {
                    "aria-hidden": !0,
                    ...o,
                    ref: t,
                    children: n || "▼"
                })
            });
            K.displayName = "SelectIcon";
            var $ = e => (0, M.jsx)(m.h, {
                asChild: !0,
                ...e
            });
            $.displayName = "SelectPortal";
            var Y = "SelectContent",
                X = n.forwardRef((e, t) => {
                    let r = V(Y, e.__scopeSelect),
                        [i, l] = n.useState();
                    return ((0, b.b)(() => {
                        l(new DocumentFragment)
                    }, []), r.open) ? (0, M.jsx)(G, {
                        ...e,
                        ref: t
                    }) : i ? o.createPortal((0, M.jsx)(Z, {
                        scope: e.__scopeSelect,
                        children: (0, M.jsx)(N.Slot, {
                            scope: e.__scopeSelect,
                            children: (0, M.jsx)("div", {
                                children: e.children
                            })
                        })
                    }), i) : null
                });
            X.displayName = Y;
            var [Z, q] = k(Y), J = (0, w.Z8)("SelectContent.RemoveScroll"), G = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    position: o = "item-aligned",
                    onCloseAutoFocus: i,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: s,
                    side: c,
                    sideOffset: h,
                    align: g,
                    alignOffset: m,
                    arrowPadding: v,
                    collisionBoundary: w,
                    collisionPadding: y,
                    sticky: x,
                    hideWhenDetached: b,
                    avoidCollisions: C,
                    ...S
                } = e, E = V(Y, r), [O, P] = n.useState(null), [N, A] = n.useState(null), k = (0, u.e)(t, e => P(e)), [L, D] = n.useState(null), [I, W] = n.useState(null), H = j(r), [B, U] = n.useState(!1), F = n.useRef(!1);
                n.useEffect(() => {
                    if (O) return (0, R.Ry)(O)
                }, [O]), (0, d.EW)();
                let _ = n.useCallback(e => {
                        let [t, ...r] = H().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
                        for (let r of e)
                            if (r === o || (r?.scrollIntoView({
                                    block: "nearest"
                                }), r === t && N && (N.scrollTop = 0), r === n && N && (N.scrollTop = N.scrollHeight), r?.focus(), document.activeElement !== o)) return
                    }, [H, N]),
                    z = n.useCallback(() => _([L, O]), [_, L, O]);
                n.useEffect(() => {
                    B && z()
                }, [B, z]);
                let {
                    onOpenChange: K,
                    triggerPointerDownPosRef: $
                } = E;
                n.useEffect(() => {
                    if (O) {
                        let e = {
                                x: 0,
                                y: 0
                            },
                            t = t => {
                                e = {
                                    x: Math.abs(Math.round(t.pageX) - ($.current?.x ?? 0)),
                                    y: Math.abs(Math.round(t.pageY) - ($.current?.y ?? 0))
                                }
                            },
                            r = r => {
                                e.x <= 10 && e.y <= 10 ? r.preventDefault() : O.contains(r.target) || K(!1), document.removeEventListener("pointermove", t), $.current = null
                            };
                        return null !== $.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                            capture: !0,
                            once: !0
                        })), () => {
                            document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                                capture: !0
                            })
                        }
                    }
                }, [O, K, $]), n.useEffect(() => {
                    let e = () => K(!1);
                    return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                        window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                    }
                }, [K]);
                let [X, q] = eC(e => {
                    let t = H().filter(e => !e.disabled),
                        r = t.find(e => e.ref.current === document.activeElement),
                        n = eS(t, e, r);
                    n && setTimeout(() => n.ref.current.focus())
                }), G = n.useCallback((e, t, r) => {
                    let n = !F.current && !r;
                    (void 0 !== E.value && E.value === t || n) && (D(e), n && (F.current = !0))
                }, [E.value]), et = n.useCallback(() => O?.focus(), [O]), er = n.useCallback((e, t, r) => {
                    let n = !F.current && !r;
                    (void 0 !== E.value && E.value === t || n) && W(e)
                }, [E.value]), en = "popper" === o ? ee : Q, eo = en === ee ? {
                    side: c,
                    sideOffset: h,
                    align: g,
                    alignOffset: m,
                    arrowPadding: v,
                    collisionBoundary: w,
                    collisionPadding: y,
                    sticky: x,
                    hideWhenDetached: b,
                    avoidCollisions: C
                } : {};
                return (0, M.jsx)(Z, {
                    scope: r,
                    content: O,
                    viewport: N,
                    onViewportChange: A,
                    itemRefCallback: G,
                    selectedItem: L,
                    onItemLeave: et,
                    itemTextRefCallback: er,
                    focusSelectedItem: z,
                    selectedItemText: I,
                    position: o,
                    isPositioned: B,
                    searchRef: X,
                    children: (0, M.jsx)(T.Z, {
                        as: J,
                        allowPinchZoom: !0,
                        children: (0, M.jsx)(p.M, {
                            asChild: !0,
                            trapped: E.open,
                            onMountAutoFocus: e => {
                                e.preventDefault()
                            },
                            onUnmountAutoFocus: (0, l.M)(i, e => {
                                E.trigger?.focus({
                                    preventScroll: !0
                                }), e.preventDefault()
                            }),
                            children: (0, M.jsx)(f.XB, {
                                asChild: !0,
                                disableOutsidePointerEvents: !0,
                                onEscapeKeyDown: a,
                                onPointerDownOutside: s,
                                onFocusOutside: e => e.preventDefault(),
                                onDismiss: () => E.onOpenChange(!1),
                                children: (0, M.jsx)(en, {
                                    role: "listbox",
                                    id: E.contentId,
                                    "data-state": E.open ? "open" : "closed",
                                    dir: E.dir,
                                    onContextMenu: e => e.preventDefault(),
                                    ...S,
                                    ...eo,
                                    onPlaced: () => U(!0),
                                    ref: k,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        outline: "none",
                                        ...S.style
                                    },
                                    onKeyDown: (0, l.M)(S.onKeyDown, e => {
                                        let t = e.ctrlKey || e.altKey || e.metaKey;
                                        if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || q(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                            let t = H().filter(e => !e.disabled).map(e => e.ref.current);
                                            if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                                let r = e.target,
                                                    n = t.indexOf(r);
                                                t = t.slice(n + 1)
                                            }
                                            setTimeout(() => _(t)), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            });
            G.displayName = "SelectContentImpl";
            var Q = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    onPlaced: o,
                    ...l
                } = e, a = V(Y, r), s = q(Y, r), [c, f] = n.useState(null), [d, p] = n.useState(null), h = (0, u.e)(t, e => p(e)), g = j(r), m = n.useRef(!1), w = n.useRef(!0), {
                    viewport: y,
                    selectedItem: x,
                    selectedItemText: C,
                    focusSelectedItem: S
                } = s, R = n.useCallback(() => {
                    if (a.trigger && a.valueNode && c && d && y && x && C) {
                        let e = a.trigger.getBoundingClientRect(),
                            t = d.getBoundingClientRect(),
                            r = a.valueNode.getBoundingClientRect(),
                            n = C.getBoundingClientRect();
                        if ("rtl" !== a.dir) {
                            let o = n.left - t.left,
                                l = r.left - o,
                                a = e.left - l,
                                u = e.width + a,
                                s = Math.max(u, t.width),
                                f = i(l, [10, Math.max(10, window.innerWidth - 10 - s)]);
                            c.style.minWidth = u + "px", c.style.left = f + "px"
                        } else {
                            let o = t.right - n.right,
                                l = window.innerWidth - r.right - o,
                                a = window.innerWidth - e.right - l,
                                u = e.width + a,
                                s = Math.max(u, t.width),
                                f = i(l, [10, Math.max(10, window.innerWidth - 10 - s)]);
                            c.style.minWidth = u + "px", c.style.right = f + "px"
                        }
                        let l = g(),
                            u = window.innerHeight - 20,
                            s = y.scrollHeight,
                            f = window.getComputedStyle(d),
                            p = parseInt(f.borderTopWidth, 10),
                            h = parseInt(f.paddingTop, 10),
                            v = parseInt(f.borderBottomWidth, 10),
                            w = p + h + s + parseInt(f.paddingBottom, 10) + v,
                            b = Math.min(5 * x.offsetHeight, w),
                            S = window.getComputedStyle(y),
                            R = parseInt(S.paddingTop, 10),
                            T = parseInt(S.paddingBottom, 10),
                            M = e.top + e.height / 2 - 10,
                            E = x.offsetHeight / 2,
                            O = p + h + (x.offsetTop + E);
                        if (O <= M) {
                            let e = l.length > 0 && x === l[l.length - 1].ref.current;
                            c.style.bottom = "0px";
                            let t = d.clientHeight - y.offsetTop - y.offsetHeight;
                            c.style.height = O + Math.max(u - M, E + (e ? T : 0) + t + v) + "px"
                        } else {
                            let e = l.length > 0 && x === l[0].ref.current;
                            c.style.top = "0px";
                            let t = Math.max(M, p + y.offsetTop + (e ? R : 0) + E);
                            c.style.height = t + (w - O) + "px", y.scrollTop = O - M + y.offsetTop
                        }
                        c.style.margin = "10px 0", c.style.minHeight = b + "px", c.style.maxHeight = u + "px", o?.(), requestAnimationFrame(() => m.current = !0)
                    }
                }, [g, a.trigger, a.valueNode, c, d, y, x, C, a.dir, o]);
                (0, b.b)(() => R(), [R]);
                let [T, E] = n.useState();
                (0, b.b)(() => {
                    d && E(window.getComputedStyle(d).zIndex)
                }, [d]);
                let O = n.useCallback(e => {
                    e && !0 === w.current && (R(), S?.(), w.current = !1)
                }, [R, S]);
                return (0, M.jsx)(et, {
                    scope: r,
                    contentWrapper: c,
                    shouldExpandOnScrollRef: m,
                    onScrollButtonChange: O,
                    children: (0, M.jsx)("div", {
                        ref: f,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: T
                        },
                        children: (0, M.jsx)(v.WV.div, {
                            ...l,
                            ref: h,
                            style: {
                                boxSizing: "border-box",
                                maxHeight: "100%",
                                ...l.style
                            }
                        })
                    })
                })
            });
            Q.displayName = "SelectItemAlignedPosition";
            var ee = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    align: n = "start",
                    collisionPadding: o = 10,
                    ...i
                } = e, l = D(r);
                return (0, M.jsx)(g.VY, {
                    ...l,
                    ...i,
                    ref: t,
                    align: n,
                    collisionPadding: o,
                    style: {
                        boxSizing: "border-box",
                        ...i.style,
                        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            ee.displayName = "SelectPopperPosition";
            var [et, er] = k(Y, {}), en = "SelectViewport", eo = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    nonce: o,
                    ...i
                } = e, a = q(en, r), s = er(en, r), c = (0, u.e)(t, a.onViewportChange), f = n.useRef(0);
                return (0, M.jsxs)(M.Fragment, {
                    children: [(0, M.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        },
                        nonce: o
                    }), (0, M.jsx)(N.Slot, {
                        scope: r,
                        children: (0, M.jsx)(v.WV.div, {
                            "data-radix-select-viewport": "",
                            role: "presentation",
                            ...i,
                            ref: c,
                            style: {
                                position: "relative",
                                flex: 1,
                                overflow: "hidden auto",
                                ...i.style
                            },
                            onScroll: (0, l.M)(i.onScroll, e => {
                                let t = e.currentTarget,
                                    {
                                        contentWrapper: r,
                                        shouldExpandOnScrollRef: n
                                    } = s;
                                if (n?.current && r) {
                                    let e = Math.abs(f.current - t.scrollTop);
                                    if (e > 0) {
                                        let n = window.innerHeight - 20,
                                            o = Math.max(parseFloat(r.style.minHeight), parseFloat(r.style.height));
                                        if (o < n) {
                                            let i = o + e,
                                                l = Math.min(n, i),
                                                a = i - l;
                                            r.style.height = l + "px", "0px" === r.style.bottom && (t.scrollTop = a > 0 ? a : 0, r.style.justifyContent = "flex-end")
                                        }
                                    }
                                }
                                f.current = t.scrollTop
                            })
                        })
                    })]
                })
            });
            eo.displayName = en;
            var ei = "SelectGroup",
                [el, ea] = k(ei);
            n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, o = (0, h.M)();
                return (0, M.jsx)(el, {
                    scope: r,
                    id: o,
                    children: (0, M.jsx)(v.WV.div, {
                        role: "group",
                        "aria-labelledby": o,
                        ...n,
                        ref: t
                    })
                })
            }).displayName = ei;
            var eu = "SelectLabel";
            n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, o = ea(eu, r);
                return (0, M.jsx)(v.WV.div, {
                    id: o.id,
                    ...n,
                    ref: t
                })
            }).displayName = eu;
            var es = "SelectItem",
                [ec, ef] = k(es),
                ed = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        value: o,
                        disabled: i = !1,
                        textValue: a,
                        ...s
                    } = e, c = V(es, r), f = q(es, r), d = c.value === o, [p, g] = n.useState(a ?? ""), [m, w] = n.useState(!1), y = (0, u.e)(t, e => f.itemRefCallback?.(e, o, i)), x = (0, h.M)(), b = n.useRef("touch"), C = () => {
                        i || (c.onValueChange(o), c.onOpenChange(!1))
                    };
                    if ("" === o) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, M.jsx)(ec, {
                        scope: r,
                        value: o,
                        disabled: i,
                        textId: x,
                        isSelected: d,
                        onItemTextChange: n.useCallback(e => {
                            g(t => t || (e?.textContent ?? "").trim())
                        }, []),
                        children: (0, M.jsx)(N.ItemSlot, {
                            scope: r,
                            value: o,
                            disabled: i,
                            textValue: p,
                            children: (0, M.jsx)(v.WV.div, {
                                role: "option",
                                "aria-labelledby": x,
                                "data-highlighted": m ? "" : void 0,
                                "aria-selected": d && m,
                                "data-state": d ? "checked" : "unchecked",
                                "aria-disabled": i || void 0,
                                "data-disabled": i ? "" : void 0,
                                tabIndex: i ? void 0 : -1,
                                ...s,
                                ref: y,
                                onFocus: (0, l.M)(s.onFocus, () => w(!0)),
                                onBlur: (0, l.M)(s.onBlur, () => w(!1)),
                                onClick: (0, l.M)(s.onClick, () => {
                                    "mouse" !== b.current && C()
                                }),
                                onPointerUp: (0, l.M)(s.onPointerUp, () => {
                                    "mouse" === b.current && C()
                                }),
                                onPointerDown: (0, l.M)(s.onPointerDown, e => {
                                    b.current = e.pointerType
                                }),
                                onPointerMove: (0, l.M)(s.onPointerMove, e => {
                                    b.current = e.pointerType, i ? f.onItemLeave?.() : "mouse" === b.current && e.currentTarget.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onPointerLeave: (0, l.M)(s.onPointerLeave, e => {
                                    e.currentTarget === document.activeElement && f.onItemLeave?.()
                                }),
                                onKeyDown: (0, l.M)(s.onKeyDown, e => {
                                    f.searchRef?.current !== "" && " " === e.key || (O.includes(e.key) && C(), " " === e.key && e.preventDefault())
                                })
                            })
                        })
                    })
                });
            ed.displayName = es;
            var ep = "SelectItemText",
                eh = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: i,
                        style: l,
                        ...a
                    } = e, s = V(ep, r), c = q(ep, r), f = ef(ep, r), d = H(ep, r), [p, h] = n.useState(null), g = (0, u.e)(t, e => h(e), f.onItemTextChange, e => c.itemTextRefCallback?.(e, f.value, f.disabled)), m = p?.textContent, w = n.useMemo(() => (0, M.jsx)("option", {
                        value: f.value,
                        disabled: f.disabled,
                        children: m
                    }, f.value), [f.disabled, f.value, m]), {
                        onNativeOptionAdd: y,
                        onNativeOptionRemove: x
                    } = d;
                    return (0, b.b)(() => (y(w), () => x(w)), [y, x, w]), (0, M.jsxs)(M.Fragment, {
                        children: [(0, M.jsx)(v.WV.span, {
                            id: f.textId,
                            ...a,
                            ref: g
                        }), f.isSelected && s.valueNode && !s.valueNodeHasChildren ? o.createPortal(a.children, s.valueNode) : null]
                    })
                });
            eh.displayName = ep;
            var eg = "SelectItemIndicator";
            n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e;
                return ef(eg, r).isSelected ? (0, M.jsx)(v.WV.span, {
                    "aria-hidden": !0,
                    ...n,
                    ref: t
                }) : null
            }).displayName = eg;
            var em = "SelectScrollUpButton";
            n.forwardRef((e, t) => {
                let r = q(em, e.__scopeSelect),
                    o = er(em, e.__scopeSelect),
                    [i, l] = n.useState(!1),
                    a = (0, u.e)(t, o.onScrollButtonChange);
                return (0, b.b)(() => {
                    if (r.viewport && r.isPositioned) {
                        let e = function() {
                                l(t.scrollTop > 0)
                            },
                            t = r.viewport;
                        return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                    }
                }, [r.viewport, r.isPositioned]), i ? (0, M.jsx)(ew, {
                    ...e,
                    ref: a,
                    onAutoScroll: () => {
                        let {
                            viewport: e,
                            selectedItem: t
                        } = r;
                        e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                    }
                }) : null
            }).displayName = em;
            var ev = "SelectScrollDownButton";
            n.forwardRef((e, t) => {
                let r = q(ev, e.__scopeSelect),
                    o = er(ev, e.__scopeSelect),
                    [i, l] = n.useState(!1),
                    a = (0, u.e)(t, o.onScrollButtonChange);
                return (0, b.b)(() => {
                    if (r.viewport && r.isPositioned) {
                        let e = function() {
                                let e = t.scrollHeight - t.clientHeight;
                                l(Math.ceil(t.scrollTop) < e)
                            },
                            t = r.viewport;
                        return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                    }
                }, [r.viewport, r.isPositioned]), i ? (0, M.jsx)(ew, {
                    ...e,
                    ref: a,
                    onAutoScroll: () => {
                        let {
                            viewport: e,
                            selectedItem: t
                        } = r;
                        e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                    }
                }) : null
            }).displayName = ev;
            var ew = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    onAutoScroll: o,
                    ...i
                } = e, a = q("SelectScrollButton", r), u = n.useRef(null), s = j(r), c = n.useCallback(() => {
                    null !== u.current && (window.clearInterval(u.current), u.current = null)
                }, []);
                return n.useEffect(() => () => c(), [c]), (0, b.b)(() => {
                    let e = s().find(e => e.ref.current === document.activeElement);
                    e?.ref.current?.scrollIntoView({
                        block: "nearest"
                    })
                }, [s]), (0, M.jsx)(v.WV.div, {
                    "aria-hidden": !0,
                    ...i,
                    ref: t,
                    style: {
                        flexShrink: 0,
                        ...i.style
                    },
                    onPointerDown: (0, l.M)(i.onPointerDown, () => {
                        null === u.current && (u.current = window.setInterval(o, 50))
                    }),
                    onPointerMove: (0, l.M)(i.onPointerMove, () => {
                        a.onItemLeave?.(), null === u.current && (u.current = window.setInterval(o, 50))
                    }),
                    onPointerLeave: (0, l.M)(i.onPointerLeave, () => {
                        c()
                    })
                })
            });
            n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e;
                return (0, M.jsx)(v.WV.div, {
                    "aria-hidden": !0,
                    ...n,
                    ref: t
                })
            }).displayName = "SelectSeparator";
            var ey = "SelectArrow";
            n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, o = D(r), i = V(ey, r), l = q(ey, r);
                return i.open && "popper" === l.position ? (0, M.jsx)(g.Eh, {
                    ...o,
                    ...n,
                    ref: t
                }) : null
            }).displayName = ey;
            var ex = n.forwardRef(({
                __scopeSelect: e,
                value: t,
                ...r
            }, o) => {
                let i = n.useRef(null),
                    l = (0, u.e)(o, i),
                    a = (0, C.D)(t);
                return n.useEffect(() => {
                    let e = i.current;
                    if (!e) return;
                    let r = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                    if (a !== t && r) {
                        let n = new Event("change", {
                            bubbles: !0
                        });
                        r.call(e, t), e.dispatchEvent(n)
                    }
                }, [a, t]), (0, M.jsx)(v.WV.select, {
                    ...r,
                    style: {
                        ...S.C2,
                        ...r.style
                    },
                    ref: l,
                    defaultValue: t
                })
            });

            function eb(e) {
                return "" === e || void 0 === e
            }

            function eC(e) {
                let t = (0, y.W)(e),
                    r = n.useRef(""),
                    o = n.useRef(0),
                    i = n.useCallback(e => {
                        let n = r.current + e;
                        t(n),
                            function e(t) {
                                r.current = t, window.clearTimeout(o.current), "" !== t && (o.current = window.setTimeout(() => e(""), 1e3))
                            }(n)
                    }, [t]),
                    l = n.useCallback(() => {
                        r.current = "", window.clearTimeout(o.current)
                    }, []);
                return n.useEffect(() => () => window.clearTimeout(o.current), []), [r, i, l]
            }

            function eS(e, t, r) {
                var n;
                let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                    i = (n = Math.max(r ? e.indexOf(r) : -1, 0), e.map((t, r) => e[(n + r) % e.length]));
                1 === o.length && (i = i.filter(e => e !== r));
                let l = i.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
                return l !== r ? l : void 0
            }
            ex.displayName = "SelectBubbleInput";
            var eR = B,
                eT = F,
                eM = z,
                eE = K,
                eO = $,
                eP = X,
                eN = eo,
                ej = ed,
                eA = eh
        },
        90022: function(e, t, r) {
            r.d(t, {
                D: function() {
                    return o
                }
            });
            var n = r(2784);

            function o(e) {
                let t = n.useRef({
                    value: e,
                    previous: e
                });
                return n.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
            }
        },
        35019: function(e, t, r) {
            r.d(t, {
                t: function() {
                    return i
                }
            });
            var n = r(2784),
                o = r(61644);

            function i(e) {
                let [t, r] = n.useState(void 0);
                return (0, o.b)(() => {
                    if (e) {
                        r({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let n, o;
                            if (!Array.isArray(t) || !t.length) return;
                            let i = t[0];
                            if ("borderBoxSize" in i) {
                                let e = i.borderBoxSize,
                                    t = Array.isArray(e) ? e[0] : e;
                                n = t.inlineSize, o = t.blockSize
                            } else n = e.offsetWidth, o = e.offsetHeight;
                            r({
                                width: n,
                                height: o
                            })
                        });
                        return t.observe(e, {
                            box: "border-box"
                        }), () => t.unobserve(e)
                    }
                    r(void 0)
                }, [e]), t
            }
        },
        89785: function(e, t, r) {
            r.d(t, {
                C2: function() {
                    return l
                },
                fC: function() {
                    return u
                }
            });
            var n = r(2784),
                o = r(72714),
                i = r(52322),
                l = Object.freeze({
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal"
                }),
                a = n.forwardRef((e, t) => (0, i.jsx)(o.WV.span, {
                    ...e,
                    ref: t,
                    style: {
                        ...l,
                        ...e.style
                    }
                }));
            a.displayName = "VisuallyHidden";
            var u = a
        },
        51115: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var n = r(2784),
                o = r(21709),
                i = r(30446),
                l = r(31788);
            let a = l.I ? e => {
                    e()
                } : n.startTransition,
                u = e => {
                    let [, t] = (0, n.useState)({}), r = (0, n.useRef)(!1), o = (0, n.useRef)(e), i = (0, n.useRef)({
                        data: !1,
                        error: !1,
                        isValidating: !1
                    }), a = (0, n.useCallback)(e => {
                        let n = !1,
                            l = o.current;
                        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && l[t] !== e[t] && (l[t] = e[t], i.current[t] && (n = !0));
                        n && !r.current && t({})
                    }, []);
                    return (0, l.u)(() => (r.current = !1, () => {
                        r.current = !0
                    })), [o, i.current, a]
                },
                s = (0, o.xD)(i.ZP, () => (e, t, r = {}) => {
                    let {
                        mutate: i
                    } = (0, o.kY)(), s = (0, n.useRef)(e), c = (0, n.useRef)(t), f = (0, n.useRef)(r), d = (0, n.useRef)(0), [p, h, g] = u({
                        data: l.U,
                        error: l.U,
                        isMutating: !1
                    }), m = p.current, v = (0, n.useCallback)(async (e, t) => {
                        let [r, n] = (0, l.s)(s.current);
                        if (!c.current) throw Error("Can’t trigger the mutation: missing fetcher.");
                        if (!r) throw Error("Can’t trigger the mutation: missing key.");
                        let o = (0, l.m)((0, l.m)({
                                populateCache: !1,
                                throwOnError: !0
                            }, f.current), t),
                            u = (0, l.o)();
                        d.current = u, g({
                            isMutating: !0
                        });
                        try {
                            let t = await i(r, c.current(n, {
                                arg: e
                            }), (0, l.m)(o, {
                                throwOnError: !0
                            }));
                            return d.current <= u && (a(() => g({
                                data: t,
                                isMutating: !1,
                                error: void 0
                            })), null == o.onSuccess || o.onSuccess.call(o, t, r, o)), t
                        } catch (e) {
                            if (d.current <= u && (a(() => g({
                                    error: e,
                                    isMutating: !1
                                })), null == o.onError || o.onError.call(o, e, r, o), o.throwOnError)) throw e
                        }
                    }, []), w = (0, n.useCallback)(() => {
                        d.current = (0, l.o)(), g({
                            data: l.U,
                            error: l.U,
                            isMutating: !1
                        })
                    }, []);
                    return (0, l.u)(() => {
                        s.current = e, c.current = t, f.current = r
                    }), {
                        trigger: v,
                        reset: w,
                        get data() {
                            return h.data = !0, m.data
                        },
                        get error() {
                            return h.error = !0, m.error
                        },
                        get isMutating() {
                            return h.isMutating = !0, m.isMutating
                        }
                    }
                })
        }
    }
]);
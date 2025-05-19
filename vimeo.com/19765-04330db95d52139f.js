(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [19765], {
        21515: function(e, t, n) {
            var r = n(2784),
                o = r && "object" == typeof r && "default" in r ? r : {
                    default: r
                };
            ! function(e) {
                if (!e || "undefined" == typeof window) return;
                let t = document.createElement("style");
                t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t)
            }('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');
            let a = r.forwardRef(function({
                style: e = {},
                className: t = "",
                autoFill: n = !1,
                play: a = !0,
                pauseOnHover: i = !1,
                pauseOnClick: l = !1,
                direction: s = "left",
                speed: u = 50,
                delay: c = 0,
                loop: d = 0,
                gradient: f = !1,
                gradientColor: p = "white",
                gradientWidth: m = 200,
                onFinish: h,
                onCycleComplete: v,
                onMount: y,
                children: g
            }, x) {
                let [w, b] = r.useState(0), [C, E] = r.useState(0), [T, k] = r.useState(1), [R, M] = r.useState(!1), j = r.useRef(null), L = x || j, N = r.useRef(null), _ = r.useCallback(() => {
                    if (N.current && L.current) {
                        let e = L.current.getBoundingClientRect(),
                            t = N.current.getBoundingClientRect(),
                            r = e.width,
                            o = t.width;
                        ("up" === s || "down" === s) && (r = e.height, o = t.height), n && r && o ? k(o < r ? Math.ceil(r / o) : 1) : k(1), b(r), E(o)
                    }
                }, [n, L, s]);
                r.useEffect(() => {
                    if (R && (_(), N.current && L.current)) {
                        let e = new ResizeObserver(() => _());
                        return e.observe(L.current), e.observe(N.current), () => {
                            e && e.disconnect()
                        }
                    }
                }, [_, L, R]), r.useEffect(() => {
                    _()
                }, [_, g]), r.useEffect(() => {
                    M(!0)
                }, []), r.useEffect(() => {
                    "function" == typeof y && y()
                }, []);
                let P = r.useMemo(() => n ? C * T / u : C < w ? w / u : C / u, [n, w, C, T, u]),
                    O = r.useMemo(() => Object.assign(Object.assign({}, e), {
                        "--pause-on-hover": !a || i ? "paused" : "running",
                        "--pause-on-click": !a || i && !l || l ? "paused" : "running",
                        "--width": "up" === s || "down" === s ? "100vh" : "100%",
                        "--transform": "up" === s ? "rotate(-90deg)" : "down" === s ? "rotate(90deg)" : "none"
                    }), [e, a, i, l, s]),
                    D = r.useMemo(() => ({
                        "--gradient-color": p,
                        "--gradient-width": "number" == typeof m ? `${m}px` : m
                    }), [p, m]),
                    A = r.useMemo(() => ({
                        "--play": a ? "running" : "paused",
                        "--direction": "left" === s ? "normal" : "reverse",
                        "--duration": `${P}s`,
                        "--delay": `${c}s`,
                        "--iteration-count": d ? `${d}` : "infinite",
                        "--min-width": n ? "auto" : "100%"
                    }), [a, s, P, c, d, n]),
                    I = r.useMemo(() => ({
                        "--transform": "up" === s ? "rotate(90deg)" : "down" === s ? "rotate(-90deg)" : "none"
                    }), [s]),
                    q = r.useCallback(e => [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) => o.default.createElement(r.Fragment, {
                        key: t
                    }, r.Children.map(g, e => o.default.createElement("div", {
                        style: I,
                        className: "rfm-child"
                    }, e)))), [I, g]);
                return R ? o.default.createElement("div", {
                    ref: L,
                    style: O,
                    className: "rfm-marquee-container " + t
                }, f && o.default.createElement("div", {
                    style: D,
                    className: "rfm-overlay"
                }), o.default.createElement("div", {
                    className: "rfm-marquee",
                    style: A,
                    onAnimationIteration: v,
                    onAnimationEnd: h
                }, o.default.createElement("div", {
                    className: "rfm-initial-child-container",
                    ref: N
                }, r.Children.map(g, e => o.default.createElement("div", {
                    style: I,
                    className: "rfm-child"
                }, e))), q(T - 1)), o.default.createElement("div", {
                    className: "rfm-marquee",
                    style: A
                }, q(T))) : null
            });
            t.Z = a
        },
        24990: function(e, t, n) {
            "use strict";
            n.d(t, {
                VY: function() {
                    return Z
                },
                fC: function() {
                    return Y
                },
                h_: function() {
                    return V
                },
                xz: function() {
                    return $
                },
                zt: function() {
                    return H
                }
            });
            var r = n(2784),
                o = n(17998),
                a = n(62656),
                i = n(92211),
                l = n(35999),
                s = n(23372),
                u = n(77190),
                c = n(78773),
                d = n(79616),
                f = n(72714),
                p = n(49815),
                m = n(87695),
                h = n(89785),
                v = n(52322),
                [y, g] = (0, i.b)("Tooltip", [u.D7]),
                x = (0, u.D7)(),
                w = "TooltipProvider",
                b = "tooltip.open",
                [C, E] = y(w),
                T = e => {
                    let {
                        __scopeTooltip: t,
                        delayDuration: n = 700,
                        skipDelayDuration: o = 300,
                        disableHoverableContent: a = !1,
                        children: i
                    } = e, l = r.useRef(!0), s = r.useRef(!1), u = r.useRef(0);
                    return r.useEffect(() => {
                        let e = u.current;
                        return () => window.clearTimeout(e)
                    }, []), (0, v.jsx)(C, {
                        scope: t,
                        isOpenDelayedRef: l,
                        delayDuration: n,
                        onOpen: r.useCallback(() => {
                            window.clearTimeout(u.current), l.current = !1
                        }, []),
                        onClose: r.useCallback(() => {
                            window.clearTimeout(u.current), u.current = window.setTimeout(() => l.current = !0, o)
                        }, [o]),
                        isPointerInTransitRef: s,
                        onPointerInTransitChange: r.useCallback(e => {
                            s.current = e
                        }, []),
                        disableHoverableContent: a,
                        children: i
                    })
                };
            T.displayName = w;
            var k = "Tooltip",
                [R, M] = y(k),
                j = e => {
                    let {
                        __scopeTooltip: t,
                        children: n,
                        open: o,
                        defaultOpen: a,
                        onOpenChange: i,
                        disableHoverableContent: l,
                        delayDuration: c
                    } = e, d = E(k, e.__scopeTooltip), f = x(t), [p, h] = r.useState(null), y = (0, s.M)(), g = r.useRef(0), w = l ?? d.disableHoverableContent, C = c ?? d.delayDuration, T = r.useRef(!1), [M, j] = (0, m.T)({
                        prop: o,
                        defaultProp: a ?? !1,
                        onChange: e => {
                            e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(b))) : d.onClose(), i?.(e)
                        },
                        caller: k
                    }), L = r.useMemo(() => M ? T.current ? "delayed-open" : "instant-open" : "closed", [M]), N = r.useCallback(() => {
                        window.clearTimeout(g.current), g.current = 0, T.current = !1, j(!0)
                    }, [j]), _ = r.useCallback(() => {
                        window.clearTimeout(g.current), g.current = 0, j(!1)
                    }, [j]), P = r.useCallback(() => {
                        window.clearTimeout(g.current), g.current = window.setTimeout(() => {
                            T.current = !0, j(!0), g.current = 0
                        }, C)
                    }, [C, j]);
                    return r.useEffect(() => () => {
                        g.current && (window.clearTimeout(g.current), g.current = 0)
                    }, []), (0, v.jsx)(u.fC, {
                        ...f,
                        children: (0, v.jsx)(R, {
                            scope: t,
                            contentId: y,
                            open: M,
                            stateAttribute: L,
                            trigger: p,
                            onTriggerChange: h,
                            onTriggerEnter: r.useCallback(() => {
                                d.isOpenDelayedRef.current ? P() : N()
                            }, [d.isOpenDelayedRef, P, N]),
                            onTriggerLeave: r.useCallback(() => {
                                w ? _() : (window.clearTimeout(g.current), g.current = 0)
                            }, [_, w]),
                            onOpen: N,
                            onClose: _,
                            disableHoverableContent: w,
                            children: n
                        })
                    })
                };
            j.displayName = k;
            var L = "TooltipTrigger",
                N = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...i
                    } = e, l = M(L, n), s = E(L, n), c = x(n), d = r.useRef(null), p = (0, a.e)(t, d, l.onTriggerChange), m = r.useRef(!1), h = r.useRef(!1), y = r.useCallback(() => m.current = !1, []);
                    return r.useEffect(() => () => document.removeEventListener("pointerup", y), [y]), (0, v.jsx)(u.ee, {
                        asChild: !0,
                        ...c,
                        children: (0, v.jsx)(f.WV.button, {
                            "aria-describedby": l.open ? l.contentId : void 0,
                            "data-state": l.stateAttribute,
                            ...i,
                            ref: p,
                            onPointerMove: (0, o.M)(e.onPointerMove, e => {
                                "touch" === e.pointerType || h.current || s.isPointerInTransitRef.current || (l.onTriggerEnter(), h.current = !0)
                            }),
                            onPointerLeave: (0, o.M)(e.onPointerLeave, () => {
                                l.onTriggerLeave(), h.current = !1
                            }),
                            onPointerDown: (0, o.M)(e.onPointerDown, () => {
                                l.open && l.onClose(), m.current = !0, document.addEventListener("pointerup", y, {
                                    once: !0
                                })
                            }),
                            onFocus: (0, o.M)(e.onFocus, () => {
                                m.current || l.onOpen()
                            }),
                            onBlur: (0, o.M)(e.onBlur, l.onClose),
                            onClick: (0, o.M)(e.onClick, l.onClose)
                        })
                    })
                });
            N.displayName = L;
            var _ = "TooltipPortal",
                [P, O] = y(_, {
                    forceMount: void 0
                }),
                D = e => {
                    let {
                        __scopeTooltip: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, a = M(_, t);
                    return (0, v.jsx)(P, {
                        scope: t,
                        forceMount: n,
                        children: (0, v.jsx)(d.z, {
                            present: n || a.open,
                            children: (0, v.jsx)(c.h, {
                                asChild: !0,
                                container: o,
                                children: r
                            })
                        })
                    })
                };
            D.displayName = _;
            var A = "TooltipContent",
                I = r.forwardRef((e, t) => {
                    let n = O(A, e.__scopeTooltip),
                        {
                            forceMount: r = n.forceMount,
                            side: o = "top",
                            ...a
                        } = e,
                        i = M(A, e.__scopeTooltip);
                    return (0, v.jsx)(d.z, {
                        present: r || i.open,
                        children: i.disableHoverableContent ? (0, v.jsx)(F, {
                            side: o,
                            ...a,
                            ref: t
                        }) : (0, v.jsx)(q, {
                            side: o,
                            ...a,
                            ref: t
                        })
                    })
                }),
                q = r.forwardRef((e, t) => {
                    let n = M(A, e.__scopeTooltip),
                        o = E(A, e.__scopeTooltip),
                        i = r.useRef(null),
                        l = (0, a.e)(t, i),
                        [s, u] = r.useState(null),
                        {
                            trigger: c,
                            onClose: d
                        } = n,
                        f = i.current,
                        {
                            onPointerInTransitChange: p
                        } = o,
                        m = r.useCallback(() => {
                            u(null), p(!1)
                        }, [p]),
                        h = r.useCallback((e, t) => {
                            let n = e.currentTarget,
                                r = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                o = function(e, t) {
                                    let n = Math.abs(t.top - e.y),
                                        r = Math.abs(t.bottom - e.y),
                                        o = Math.abs(t.right - e.x),
                                        a = Math.abs(t.left - e.x);
                                    switch (Math.min(n, r, o, a)) {
                                        case a:
                                            return "left";
                                        case o:
                                            return "right";
                                        case n:
                                            return "top";
                                        case r:
                                            return "bottom";
                                        default:
                                            throw Error("unreachable")
                                    }
                                }(r, n.getBoundingClientRect());
                            u(function(e) {
                                let t = e.slice();
                                return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                                    function(e) {
                                        if (e.length <= 1) return e.slice();
                                        let t = [];
                                        for (let n = 0; n < e.length; n++) {
                                            let r = e[n];
                                            for (; t.length >= 2;) {
                                                let e = t[t.length - 1],
                                                    n = t[t.length - 2];
                                                if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                                                else break
                                            }
                                            t.push(r)
                                        }
                                        t.pop();
                                        let n = [];
                                        for (let t = e.length - 1; t >= 0; t--) {
                                            let r = e[t];
                                            for (; n.length >= 2;) {
                                                let e = n[n.length - 1],
                                                    t = n[n.length - 2];
                                                if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                                                else break
                                            }
                                            n.push(r)
                                        }
                                        return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
                                    }(t)
                            }([... function(e, t, n = 5) {
                                let r = [];
                                switch (t) {
                                    case "top":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y + n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "bottom":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y - n
                                        });
                                        break;
                                    case "left":
                                        r.push({
                                            x: e.x + n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "right":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x - n,
                                            y: e.y + n
                                        })
                                }
                                return r
                            }(r, o), ... function(e) {
                                let {
                                    top: t,
                                    right: n,
                                    bottom: r,
                                    left: o
                                } = e;
                                return [{
                                    x: o,
                                    y: t
                                }, {
                                    x: n,
                                    y: t
                                }, {
                                    x: n,
                                    y: r
                                }, {
                                    x: o,
                                    y: r
                                }]
                            }(t.getBoundingClientRect())])), p(!0)
                        }, [p]);
                    return r.useEffect(() => () => m(), [m]), r.useEffect(() => {
                        if (c && f) {
                            let e = e => h(e, f),
                                t = e => h(e, c);
                            return c.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
                                c.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t)
                            }
                        }
                    }, [c, f, h, m]), r.useEffect(() => {
                        if (s) {
                            let e = e => {
                                let t = e.target,
                                    n = {
                                        x: e.clientX,
                                        y: e.clientY
                                    },
                                    r = c?.contains(t) || f?.contains(t),
                                    o = ! function(e, t) {
                                        let {
                                            x: n,
                                            y: r
                                        } = e, o = !1;
                                        for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                                            let i = t[e],
                                                l = t[a],
                                                s = i.x,
                                                u = i.y,
                                                c = l.x,
                                                d = l.y;
                                            u > r != d > r && n < (c - s) * (r - u) / (d - u) + s && (o = !o)
                                        }
                                        return o
                                    }(n, s);
                                r ? m() : o && (m(), d())
                            };
                            return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                        }
                    }, [c, f, s, d, m]), (0, v.jsx)(F, {
                        ...e,
                        ref: l
                    })
                }),
                [z, B] = y(k, {
                    isInside: !1
                }),
                S = (0, p.sA)("TooltipContent"),
                F = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        children: o,
                        "aria-label": a,
                        onEscapeKeyDown: i,
                        onPointerDownOutside: s,
                        ...c
                    } = e, d = M(A, n), f = x(n), {
                        onClose: p
                    } = d;
                    return r.useEffect(() => (document.addEventListener(b, p), () => document.removeEventListener(b, p)), [p]), r.useEffect(() => {
                        if (d.trigger) {
                            let e = e => {
                                let t = e.target;
                                t?.contains(d.trigger) && p()
                            };
                            return window.addEventListener("scroll", e, {
                                capture: !0
                            }), () => window.removeEventListener("scroll", e, {
                                capture: !0
                            })
                        }
                    }, [d.trigger, p]), (0, v.jsx)(l.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: !1,
                        onEscapeKeyDown: i,
                        onPointerDownOutside: s,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: p,
                        children: (0, v.jsxs)(u.VY, {
                            "data-state": d.stateAttribute,
                            ...f,
                            ...c,
                            ref: t,
                            style: {
                                ...c.style,
                                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                            },
                            children: [(0, v.jsx)(S, {
                                children: o
                            }), (0, v.jsx)(z, {
                                scope: n,
                                isInside: !0,
                                children: (0, v.jsx)(h.fC, {
                                    id: d.contentId,
                                    role: "tooltip",
                                    children: a || o
                                })
                            })]
                        })
                    })
                });
            I.displayName = A;
            var X = "TooltipArrow";
            r.forwardRef((e, t) => {
                let {
                    __scopeTooltip: n,
                    ...r
                } = e, o = x(n);
                return B(X, n).isInside ? null : (0, v.jsx)(u.Eh, {
                    ...o,
                    ...r,
                    ref: t
                })
            }).displayName = X;
            var H = T,
                Y = j,
                $ = N,
                V = D,
                Z = I
        }
    }
]);
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [37228], {
        37228: function(e, n, a) {
            "use strict";
            a.r(n), a.d(n, {
                default: function() {
                    return v
                }
            });
            var t = a(52322),
                r = a(2784),
                i = a(12524),
                l = a.n(i),
                o = a(21515),
                m = a(87163),
                d = a(10040),
                c = a(78437);
            let u = (0, r.forwardRef)(function(e, n) {
                let {
                    logoGap: a,
                    isInView: r,
                    children: i,
                    additionalClasses: o
                } = e;
                return (0, t.jsx)("div", {
                    ref: n,
                    style: {
                        "--logo-gap-dk": null == a ? void 0 : a.desktop,
                        "--logo-gap-mb": null == a ? void 0 : a.mobile
                    },
                    className: l()({
                        [o]: o,
                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === r,
                        "md:animate-card md:motion-reduce:animate-none": !0 === r
                    }),
                    children: i
                })
            });
            var s = a(22031);
            let f = function(e) {
                    let {
                        element: n,
                        url: a,
                        index: r,
                        bp: i,
                        bpWithContext: o,
                        href: m,
                        target: d,
                        Icon: c,
                        builderBlock: u,
                        alt: f,
                        logoSize: h
                    } = e;
                    return (0, t.jsx)(n, {
                        className: l()("flex justify-center items-center px-9", "w-full min-h-[155px]", "rounded-lg", "md:w-[254px] md:h-[240px]", "md:rounded-3xl", "bg-pearl-black", m && "hover:bg-ebony-gray hover:cursor-pointer"),
                        onClick: () => (i || o) && (0, s.Q)({
                            bpData: i,
                            bpWithContext: o
                        }),
                        ...m ? {
                            href: m
                        } : {},
                        ...d ? {
                            target: d
                        } : {},
                        children: c ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(c, {
                                id: "logo-".concat(null == u ? void 0 : u.id),
                                width: "auto",
                                ...f && {
                                    role: "img",
                                    "aria-labelledby": "logo-".concat(null == u ? void 0 : u.id)
                                },
                                className: l()("h-auto", {
                                    "max-h-logo-marquee-logo md:max-h-logo-marquee-logo-md": !h || "Logo" === h,
                                    "max-h-logo-marquee-badge md:max-h-logo-marquee-badge-md": "Badge" === h
                                })
                            }), f && (0, t.jsx)("span", {
                                className: "sr-only",
                                id: "logo-".concat(null == u ? void 0 : u.id),
                                children: f
                            })]
                        }) : (0, t.jsx)("img", {
                            className: l()("h-auto max-w-full object-contain", {
                                "max-h-logo-marquee-logo md:max-h-logo-marquee-logo-md": !h || "Logo" === h,
                                "max-h-logo-marquee-badge md:max-h-logo-marquee-badge-md": "Badge" === h
                            }),
                            src: a,
                            alt: f
                        }, r)
                    })
                },
                h = function(e) {
                    let {
                        element: n,
                        url: a,
                        index: r,
                        bp: i,
                        bpWithContext: l,
                        href: o,
                        target: m,
                        Icon: d,
                        builderBlock: c,
                        alt: u
                    } = e, f = "h-[1.58969rem] md:h-12 lg:h-18", h = "w-auto aspect-auto object-contain ".concat(f);
                    return (0, t.jsx)(n, {
                        className: f,
                        onClick: () => (i || l) && (0, s.Q)({
                            bpData: i,
                            bpWithContext: l
                        }),
                        ...o ? {
                            href: o
                        } : {},
                        ...m ? {
                            target: m
                        } : {},
                        children: d ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(d, {
                                id: "logo-".concat(null == c ? void 0 : c.id),
                                width: "auto",
                                ...u && {
                                    role: "img",
                                    "aria-labelledby": "logo-".concat(null == c ? void 0 : c.id)
                                },
                                className: h
                            }), u && (0, t.jsx)("span", {
                                className: "sr-only",
                                id: "logo-".concat(null == c ? void 0 : c.id),
                                children: u
                            })]
                        }) : (0, t.jsx)("img", {
                            className: h,
                            src: a,
                            alt: u
                        }, r)
                    })
                };

            function g(e) {
                let {
                    title: n,
                    theme: a,
                    hideTopMargin: i,
                    hideBottomMargin: s,
                    semanticLevel: f = "h2",
                    logos: g,
                    builderBlock: p,
                    logoSize: x,
                    logoElement: v,
                    pauseOnHover: y,
                    cta: b
                } = e, {
                    isMobile: q
                } = (0, m.w_)(), w = r.useRef(null), j = (0, m.OW)({
                    ref: w
                });
                return (0, t.jsxs)(c.Z, {
                    element: "section",
                    theme: q ? "light-gray" : a,
                    additionalClasses: l()("[&>*]:col-[1/-1] [&>.marquee-compact-title]:col-[2/-2] md:[&>.marquee-compact-title]:col-[3/-3]", {
                        "md:pt-component": !i && !q,
                        "md:pb-component": !s && !q,
                        "max-md:py-component-2/3 max-md:mt-8": q
                    }),
                    children: [n && (0, t.jsx)(f, {
                        className: "marquee-compact-title text-center text-card-content pb-6 md:pb-10 text-display-mobile-7.1 md:text-display-8.5",
                        children: n
                    }), (0, t.jsx)(u, {
                        ref: w,
                        additionalClasses: l()("max-md:[&_.rfm-marquee>.rfm-initial-child-container]:max-w-[300px]", "[&_.rfm-marquee-container]:overflow-x-visible [&_.rfm-marquee-container]:overflow-y-visible", "[&_.rfm-marquee]:gap-x-10", "[&_.rfm-marquee]:w-full", "[&_.rfm-marquee]:justify-center", "[&_.rfm-marquee]:overflow-x-[unset]", "[&_.rfm-marquee>.rfm-initial-child-container]:gap-x-12", "md:[&_.rfm-marquee>.rfm-initial-child-container]:gap-x-4", "lg:[&_.rfm-marquee>.rfm-initial-child-container]:gap-x-10", "[&_.rfm-marquee>.rfm-initial-child-container]:gap-y-4", "[&_.rfm-marquee>.rfm-initial-child-container]:w-full", "[&_.rfm-marquee>.rfm-initial-child-container]:justify-center", "[&_.rfm-marquee>.rfm-initial-child-container]:flex-wrap", "[&_.rfm-marquee>.rfm-initial-child-container]:w-full", "lg:[&_.rfm-marquee]:gap-x-20", "lg:[&_.rfm-marquee>.rfm-initial-child-container]:gap-x-20", "[&_.rfm-marquee:nth-child(2)]:hidden"),
                        isInView: j,
                        children: (0, t.jsx)(o.Z, {
                            autoFill: !1,
                            gradient: !1,
                            play: !1,
                            pauseOnHover: !q && y,
                            children: g.map((e, n) => {
                                let {
                                    href: a,
                                    url: r,
                                    alt: i,
                                    Icon: l,
                                    bp: o,
                                    bpWithContext: m,
                                    target: d
                                } = e;
                                return (0, t.jsx)(h, {
                                    element: v,
                                    url: r,
                                    index: n,
                                    bp: o,
                                    bpWithContext: m,
                                    href: a,
                                    target: d,
                                    Icon: l,
                                    builderBlock: p,
                                    alt: i,
                                    logoSize: x
                                }, "logo-marquee-".concat(r, "-").concat(n))
                            })
                        })
                    }), (null == b ? void 0 : b.href) && (null == b ? void 0 : b.label) && (0, t.jsx)("div", {
                        className: "justify-self-center pt-8 pb-4",
                        children: (0, t.jsx)(d.default, {
                            ...b,
                            theme: b.buttonTheme || "blue",
                            variant: b.buttonVariant || "primary"
                        })
                    })]
                })
            }
            var p = a(18541);

            function x(e) {
                let {
                    title: n,
                    theme: a,
                    semanticLevel: i,
                    eyebrow: s,
                    description: h,
                    headerVariant: g,
                    logos: x,
                    builderBlock: v,
                    logoSize: y,
                    logoElement: b,
                    pauseOnHover: q,
                    cta: w,
                    hideTopMargin: j,
                    hideBottomMargin: _
                } = e, {
                    isMobile: N
                } = (0, m.w_)(), E = r.useRef(null), k = (0, m.S1)(E, {
                    threshold: 0
                }), C = (0, m.OW)({
                    ref: E
                });
                return (0, t.jsxs)(c.Z, {
                    element: "section",
                    theme: a,
                    additionalClasses: l()("[&>*]:col-[1/-1] [&>.header-block]:col-[1/-1]", {
                        "md:pt-component": !j,
                        "md:pb-component": !_
                    }),
                    children: [n && (0, t.jsx)(p.default, {
                        element: "div",
                        hideTopMargin: !0,
                        title: n,
                        theme: a,
                        semanticLevel: i,
                        eyebrow: s,
                        description: h,
                        headerVariant: g
                    }), (0, t.jsx)(u, {
                        ref: E,
                        additionalClasses: l()("[&_.rfm-marquee]:gap-1", "[&_.rfm-marquee]:p-4", "[&_.rfm-marquee]:mx-0", "max-md:[&_.rfm-marquee]:w-full", "[&_.rfm-marquee>.rfm-initial-child-container]:grid", "[&_.rfm-marquee>.rfm-initial-child-container]:grid-cols-2", "[&_.rfm-marquee>.rfm-initial-child-container]:gap-4", "max-md:[&_.rfm-marquee>.rfm-initial-child-container]:w-full", "md:[&_.rfm-marquee]:gap-4", "md:[&_.rfm-marquee]:px-2", "md:[&_.rfm-marquee>.rfm-initial-child-container]:gap-4", "md:[&_.rfm-marquee>.rfm-initial-child-container]:flex", "max-md:[&_.rfm-marquee:nth-child(2)]:hidden"),
                        isInView: C,
                        children: (0, t.jsx)(o.Z, {
                            autoFill: !N,
                            gradient: !N,
                            gradientColor: "white" === a ? "white" : "light-gray" === a ? "rgb(241, 245, 249)" : "rgb(10, 14, 18)",
                            gradientWidth: 80,
                            play: !N && (null == k ? void 0 : k.isIntersecting),
                            pauseOnHover: !N && q,
                            children: x.map((e, n) => {
                                let {
                                    href: a,
                                    url: r,
                                    alt: i,
                                    Icon: l,
                                    bp: o,
                                    bpWithContext: m,
                                    target: d
                                } = e;
                                return (0, t.jsx)(f, {
                                    element: b,
                                    url: r,
                                    index: n,
                                    bp: o,
                                    bpWithContext: m,
                                    href: a,
                                    target: d,
                                    Icon: l,
                                    builderBlock: v,
                                    alt: i,
                                    logoSize: y
                                }, "logo-marquee-".concat(r, "-").concat(n))
                            })
                        })
                    }), (null == w ? void 0 : w.href) && (null == w ? void 0 : w.label) && (0, t.jsx)("div", {
                        className: "justify-self-center pt-8 pb-4",
                        children: (0, t.jsx)(d.default, {
                            ...w,
                            theme: w.buttonTheme || "blue",
                            variant: w.buttonVariant || "primary"
                        })
                    })]
                })
            }
            var v = e => {
                let {
                    theme: n,
                    logos: a,
                    variant: r = "standard",
                    ...i
                } = e, l = a.some(e => e.href) ? "a" : "div";
                return (0, t.jsxs)(t.Fragment, {
                    children: ["standard" === r && (0, t.jsx)(x, {
                        ...i,
                        theme: n,
                        logos: a,
                        logoElement: l
                    }), "compact" === r && (0, t.jsx)(g, {
                        ...i,
                        theme: n,
                        logos: a,
                        logoElement: l
                    })]
                })
            }
        },
        21515: function(e, n, a) {
            var t = a(2784),
                r = t && "object" == typeof t && "default" in t ? t : {
                    default: t
                };
            ! function(e) {
                if (!e || "undefined" == typeof window) return;
                let n = document.createElement("style");
                n.setAttribute("type", "text/css"), n.innerHTML = e, document.head.appendChild(n)
            }('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');
            let i = t.forwardRef(function({
                style: e = {},
                className: n = "",
                autoFill: a = !1,
                play: i = !0,
                pauseOnHover: l = !1,
                pauseOnClick: o = !1,
                direction: m = "left",
                speed: d = 50,
                delay: c = 0,
                loop: u = 0,
                gradient: s = !1,
                gradientColor: f = "white",
                gradientWidth: h = 200,
                onFinish: g,
                onCycleComplete: p,
                onMount: x,
                children: v
            }, y) {
                let [b, q] = t.useState(0), [w, j] = t.useState(0), [_, N] = t.useState(1), [E, k] = t.useState(!1), C = t.useRef(null), R = y || C, M = t.useRef(null), F = t.useCallback(() => {
                    if (M.current && R.current) {
                        let e = R.current.getBoundingClientRect(),
                            n = M.current.getBoundingClientRect(),
                            t = e.width,
                            r = n.width;
                        ("up" === m || "down" === m) && (t = e.height, r = n.height), a && t && r ? N(r < t ? Math.ceil(t / r) : 1) : N(1), q(t), j(r)
                    }
                }, [a, R, m]);
                t.useEffect(() => {
                    if (E && (F(), M.current && R.current)) {
                        let e = new ResizeObserver(() => F());
                        return e.observe(R.current), e.observe(M.current), () => {
                            e && e.disconnect()
                        }
                    }
                }, [F, R, E]), t.useEffect(() => {
                    F()
                }, [F, v]), t.useEffect(() => {
                    k(!0)
                }, []), t.useEffect(() => {
                    "function" == typeof x && x()
                }, []);
                let O = t.useMemo(() => a ? w * _ / d : w < b ? b / d : w / d, [a, b, w, _, d]),
                    Z = t.useMemo(() => Object.assign(Object.assign({}, e), {
                        "--pause-on-hover": !i || l ? "paused" : "running",
                        "--pause-on-click": !i || l && !o || o ? "paused" : "running",
                        "--width": "up" === m || "down" === m ? "100vh" : "100%",
                        "--transform": "up" === m ? "rotate(-90deg)" : "down" === m ? "rotate(90deg)" : "none"
                    }), [e, i, l, o, m]),
                    S = t.useMemo(() => ({
                        "--gradient-color": f,
                        "--gradient-width": "number" == typeof h ? `${h}px` : h
                    }), [f, h]),
                    A = t.useMemo(() => ({
                        "--play": i ? "running" : "paused",
                        "--direction": "left" === m ? "normal" : "reverse",
                        "--duration": `${O}s`,
                        "--delay": `${c}s`,
                        "--iteration-count": u ? `${u}` : "infinite",
                        "--min-width": a ? "auto" : "100%"
                    }), [i, m, O, c, u, a]),
                    B = t.useMemo(() => ({
                        "--transform": "up" === m ? "rotate(90deg)" : "down" === m ? "rotate(-90deg)" : "none"
                    }), [m]),
                    T = t.useCallback(e => [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, n) => r.default.createElement(t.Fragment, {
                        key: n
                    }, t.Children.map(v, e => r.default.createElement("div", {
                        style: B,
                        className: "rfm-child"
                    }, e)))), [B, v]);
                return E ? r.default.createElement("div", {
                    ref: R,
                    style: Z,
                    className: "rfm-marquee-container " + n
                }, s && r.default.createElement("div", {
                    style: S,
                    className: "rfm-overlay"
                }), r.default.createElement("div", {
                    className: "rfm-marquee",
                    style: A,
                    onAnimationIteration: p,
                    onAnimationEnd: g
                }, r.default.createElement("div", {
                    className: "rfm-initial-child-container",
                    ref: M
                }, t.Children.map(v, e => r.default.createElement("div", {
                    style: B,
                    className: "rfm-child"
                }, e))), T(_ - 1)), r.default.createElement("div", {
                    className: "rfm-marquee",
                    style: A
                }, T(_))) : null
            });
            n.Z = i
        }
    }
]);
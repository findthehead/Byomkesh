"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3567], {
        73116: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return o
                }
            });
            var r = n(87163),
                a = n(2784);
            let o = e => {
                let {
                    containerRef: t
                } = e, [n, o] = (0, a.useState)(0), {
                    width: i
                } = (0, r.w_)();
                return (0, a.useEffect)(() => {
                    t.current && o(t.current.scrollHeight)
                }, [t, i]), {
                    containerHeight: n,
                    screenWidth: i
                }
            }
        },
        37539: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return P
                }
            });
            var r = n(52322),
                a = n(12524),
                o = n.n(a),
                i = n(2784),
                l = n(20162);
            let d = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dark-gray";
                return (null == e ? void 0 : e[0]) && "component" in (null == e ? void 0 : e[0]) ? null == e ? void 0 : e.map(e => {
                    var n, r, a, o;
                    return (null === (n = e.component) || void 0 === n ? void 0 : n.name) === "ButtonStandard" ? {
                        ...e,
                        component: {
                            ...e.component,
                            options: {
                                ...null === (r = e.component) || void 0 === r ? void 0 : r.options,
                                theme: (null === (o = e.component) || void 0 === o ? void 0 : null === (a = o.options) || void 0 === a ? void 0 : a.theme) || t
                            }
                        }
                    } : e
                }) : e
            };
            var s = n(91518),
                c = n(21328),
                u = n(84893);
            let m = (0, i.createContext)({
                    id: "",
                    expandedIndex: 0,
                    theme: "light"
                }),
                f = () => (0, i.useContext)(m);
            var p = n(15673);
            let v = (0, i.forwardRef)((e, t) => {
                let {
                    className: n
                } = e, {
                    icon: a
                } = f();
                return (0, r.jsxs)("header", {
                    ref: t,
                    className: o()("block text-center lg:text-left lg:flex lg:pl-0", {
                        [n]: n
                    }),
                    children: [a ? (0, r.jsx)(p.default, {
                        style: {
                            "--w": "46.41px",
                            "--md-w": "52.22px"
                        },
                        className: "accordion-icon -mt-2 inline w-[var(--w)] h-fit [&_svg]:h-auto [&_svg]:w-[var(--w)] lg:w-[var(--md-w)] lg:[&_svg]:w-[var(--md-w)] lg:-ml-[20.3px] lg:flex",
                        iconName: a
                    }) : null, (0, r.jsx)(P.Title, {})]
                })
            });
            var h = n(75694);
            let x = (0, i.createContext)({}),
                g = () => (0, i.useContext)(x);
            var b = n(87163),
                w = n(86741);
            let y = e => ({
                replace: t => {
                    let n = t => {
                        t instanceof w.W_ && ("button" === t.name || "a" === t.name) && (t.attribs["aria-hidden"] = e ? "false" : "true", t.attribs.tabIndex = e ? "0" : "-1"), t instanceof w.W_ && t.children && t.children.forEach(n)
                    };
                    return n(t), t
                }
            });
            var j = n(75876);
            let C = (0, i.forwardRef)((e, t) => {
                let {
                    className: n
                } = e, {
                    items: a,
                    expandedIndex: i,
                    id: l
                } = f();
                return null == a ? void 0 : a.map((e, a) => (0, r.jsx)(j.Z, {
                    ref: t,
                    id: "accordion-item-content-" + i + "-" + l,
                    bynderImage: null == e ? void 0 : e.bynderImage,
                    wrapperClasses: o()("accordion-image flex w-full h-auto aspect-[3/2] lg:aspect-[4/3]", {
                        [n]: n,
                        hidden: a !== i
                    })
                }, a))
            });
            var k = n(87390),
                N = n(49150);
            let I = {
                Base: function(e) {
                    let {
                        className: t,
                        children: n
                    } = e, {
                        progress: a,
                        "aria-label": i,
                        hidden: l
                    } = (0, N.pv)();
                    return (0, r.jsx)("div", {
                        className: o()("progress-base relative overflow-hidden bg-transparent w-full h-full translate-z-0", {
                            [t]: t
                        }),
                        "aria-valuemax": 100,
                        "aria-valuemin": 0,
                        "aria-valuenow": a,
                        "aria-valuetext": "".concat(a, "%"),
                        role: "progressbar",
                        "aria-label": i,
                        "aria-busy": a < 0,
                        hidden: l,
                        "aria-hidden": l,
                        children: n
                    })
                },
                Indicator: function(e) {
                    let {
                        className: t
                    } = e, {
                        progress: n
                    } = (0, N.pv)();
                    return (0, r.jsx)("div", {
                        style: {
                            transform: "translateY(-".concat(100 - n, "%)")
                        },
                        className: o()("progress-indicator w-full h-full bg-vimeo-blue-55 transition-transform duration-[2000ms] ease-out", {
                            [t]: t
                        })
                    })
                },
                AnimatedIndicator: k.Z,
                Provider: N.ZP
            };

            function A(e) {
                let {
                    className: t,
                    style: n,
                    ...a
                } = e;
                return (0, r.jsx)(I.Provider, {
                    ...a,
                    children: (0, r.jsx)(I.AnimatedIndicator, {
                        style: n,
                        className: t
                    })
                })
            }
            var R = n(98115);
            let _ = e => {
                let {
                    className: t
                } = e;
                return (0, r.jsx)("svg", {
                    className: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "33",
                    height: "33",
                    viewBox: "0 0 33 33",
                    fill: "none",
                    "aria-hidden": "true",
                    children: (0, r.jsx)("rect", {
                        x: "7.16699",
                        y: "15.5347",
                        width: "18.6667",
                        height: "2.66667",
                        rx: "1.33333",
                        fill: "currentColor"
                    })
                })
            };
            var E = n(49496);
            let P = {
                Provider: e => {
                    let {
                        children: t,
                        ...n
                    } = e;
                    return (0, r.jsx)(m.Provider, {
                        value: {
                            ...n,
                            theme: (0, u.T)(n.theme)
                        },
                        children: t
                    })
                },
                Header: v,
                Title: function(e) {
                    let {
                        className: t
                    } = e, {
                        title: n,
                        semanticLevel: a
                    } = f();
                    return (0, r.jsx)(a || "h2", {
                        className: o()("accordion-title inline text-display-mobile-6 md:text-display-6 lg:max-w-[30rem]", {
                            [t]: t,
                            [R.uS]: R.uS
                        }),
                        children: n
                    })
                },
                Item: function(e) {
                    let {
                        className: t,
                        children: n,
                        ...a
                    } = e, {
                        index: i
                    } = g();
                    return (0, r.jsx)(h.Qd, {
                        ...a,
                        value: "".concat(i),
                        className: o()("accordion-item", {
                            [t]: t
                        }),
                        children: n
                    })
                },
                ItemProgress: function() {
                    let {
                        isExpanded: e,
                        isPaused: t,
                        style: n,
                        onAnimationIteration: a,
                        isStopped: i
                    } = g(), {
                        showTimer: l
                    } = f();
                    return (0, r.jsx)("div", {
                        className: o()("accordion-progress w-1/2 absolute left-0 top-[2px] h-[calc(100%-2px)] z-1 rounded-bokeh-lg overflow-hidden", {
                            "opacity-0": !l
                        }),
                        "aria-hidden": !0,
                        children: (0, r.jsx)(A, {
                            hidden: !e,
                            "aria-hidden": !e,
                            isPaused: t,
                            style: n,
                            onAnimationIteration: a,
                            isStopped: i,
                            responsiveAnimation: {
                                tablet: !0
                            }
                        })
                    })
                },
                ItemContent: function(e) {
                    let {
                        className: t
                    } = e, {
                        isExpanded: n,
                        index: a
                    } = g(), [d, s] = i.useState(!n), {
                        items: c,
                        theme: u,
                        id: m
                    } = f(), p = null == c ? void 0 : c[a || 0], v = i.useRef(null), {
                        width: x
                    } = (0, b.w_)(), j = (0, i.useCallback)(e => {
                        e.target === v.current && (e.stopPropagation(), v.current && "0px" === v.current.style.height && s(!0))
                    }, []);
                    return i.useEffect(() => {
                        let e = null == v ? void 0 : v.current;
                        return null == e || e.addEventListener("transitionend", j), () => {
                            null == e || e.removeEventListener("transitionend", j)
                        }
                    }, [j]), i.useEffect(() => {
                        v.current && (n ? (s(!1), v.current.style.height = "".concat(v.current.scrollHeight, "px")) : v.current.style.height = "0px")
                    }, [n, x]), (0, r.jsxs)(h.vF, {
                        ref: v,
                        className: o()("accordion-content pt-[10px] overflow-hidden bg-transparent transition-[height] duration-500 ease-in-out w-[calc(100%-1.875rem)] flex flex-col gap-y-5 text-body-2 md:pt-[14px] ", "max-md:overflow-visible [&>a]:max-md:-mr-4", {
                            [t]: t,
                            "opacity-1": !d,
                            "opacity-0": d,
                            "text-lohp-gray": "dark" !== u,
                            "text-white": "dark" === u,
                            "pt-[10px] md:pt-[14px]": n
                        }),
                        forceMount: !0,
                        "aria-hidden": !n,
                        hidden: d,
                        "aria-owns": "accordion-item-content-" + a + "-" + m,
                        "aria-describedby": "accordion-item-content-" + a + "-" + m,
                        "aria-flowto": "accordion-item-content-" + a + "-" + m,
                        children: [(null == p ? void 0 : p.content) && (0, w.ZP)(p.content, y(!!n)), (null == p ? void 0 : p.cta) && (0, r.jsx)(l.yT, {
                            "aria-hidden": !n,
                            tabIndex: n ? 0 : -1,
                            theme: "dark" === u ? "white" : "dark-gray",
                            ...p.cta
                        })]
                    })
                },
                ItemProvider: e => {
                    let {
                        children: t,
                        ...n
                    } = e;
                    return (0, r.jsx)(x.Provider, {
                        value: n,
                        children: t
                    })
                },
                ItemTrigger: function(e) {
                    let {
                        className: t
                    } = e, {
                        items: n,
                        theme: a
                    } = f(), {
                        index: i,
                        isExpanded: l
                    } = g(), d = null == n ? void 0 : n[i || 0].title;
                    return (0, r.jsx)(h._m, {
                        className: "accordion-header w-full group",
                        children: (0, r.jsxs)(h.o4, {
                            className: o()("accordion-trigger text-card-content transition-opacity duration-350 ease-in-out bg-transparent border-none no-underline p-0 w-full text-left flex justify-between data-[state=closed]:cursor-pointer", {
                                "group-hover:text-vimeo-blue": !l && "dark" === a,
                                "group-hover:opacity-40": !l && "dark" !== a,
                                [R.AQ]: R.AQ,
                                [t]: t
                            }),
                            children: [(0, r.jsx)("span", {
                                className: "text-body-2-med max-md:w-3/4 min-w-60",
                                children: d
                            }), (0, r.jsx)(P.ItemTriggerIcon, {})]
                        })
                    })
                },
                ItemVideo: (0, i.forwardRef)((e, t) => {
                    var n, a, i;
                    let {
                        className: l
                    } = e, {
                        items: d,
                        expandedIndex: s,
                        id: c
                    } = f(), u = null == d ? void 0 : d[s || 0], m = null == u ? void 0 : null === (n = u.video) || void 0 === n ? void 0 : n.mp4;
                    return (0, r.jsx)("div", {
                        ref: t,
                        id: "accordion-item-content-" + s + "-" + c,
                        className: o()("accordion-video flex w-full h-auto aspect-[3/2] lg:aspect-[4/3] [&_video]:object-contain", {
                            [l]: l
                        }),
                        children: m && (0, r.jsx)(E.S9, {
                            "aria-live": "polite",
                            loop: !0,
                            mp4: m,
                            alt: null === (a = u.video) || void 0 === a ? void 0 : a.alt,
                            poster: null === (i = u.video) || void 0 === i ? void 0 : i.poster
                        })
                    })
                }),
                ItemTriggerIcon: function() {
                    let {
                        expandedIndex: e,
                        hideExpandedTriggerIcon: t
                    } = f(), {
                        index: n
                    } = g(), a = e === n;
                    return (0, r.jsxs)("div", {
                        className: o()("accordion-trigger-icon relative w-6 h-6", {
                            "transition-opacity duration-350 linear motion-reduce:transition-none": t,
                            "opacity-0 delay-350": a && t,
                            "opacity-1": !a && t
                        }),
                        children: [(0, r.jsx)(_, {
                            className: " w-6 h-6  absolute top-0 left-0"
                        }), (0, r.jsx)(_, {
                            className: o()(" w-6 h-6 absolute top-0 left-0 transition-transform delay-350 duration-350 ease-in-out motion-reduce:transition-none", {
                                "rotate-90": !a,
                                "rotate-0": a
                            })
                        })]
                    })
                },
                ItemImages: C,
                CtaList: function(e) {
                    let {
                        ctaList: t,
                        className: n
                    } = e, {
                        theme: a,
                        builderBlock: i
                    } = f(), {
                        ListElement: u,
                        ListItemElement: m
                    } = (0, c.A)(t), p = "dark" === a ? "white" : "dark-gray", v = "dark" === a ? "black" : "white", h = !!(null == i ? void 0 : i.id);
                    return (0, r.jsx)(u, {
                        className: o()("flex flex-col gap-y-4 md:flex-row md:gap-x-4 items-start", {
                            [n]: n
                        }),
                        children: t.map((e, n) => (0, r.jsx)(m, {
                            className: "flex",
                            children: h ? (0, r.jsx)(s.Z, {
                                parent: i && i.id,
                                blocks: d(null == t ? void 0 : t[n].blocks, 0 === n ? p : v),
                                path: "component.options.ctaList.".concat(n, ".blocks")
                            }, n) : 0 === n ? (0, r.jsx)(l.yT, {
                                ...e,
                                theme: p
                            }) : (0, r.jsx)(l.yT, {
                                ...e,
                                theme: v
                            })
                        }, n))
                    })
                }
            }
        },
        84893: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return r
                }
            });
            let r = e => "black" === e ? "dark" : "white" === e ? "light" : e || "light"
        },
        87390: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return s
                },
                Z: function() {
                    return c
                }
            });
            var r = n(52322),
                a = n(12524),
                o = n.n(a),
                i = n(2784),
                l = n(49150);
            let d = e => {
                    let {
                        responsiveAnimation: t,
                        animationClassName: n
                    } = e, r = n, a = null == t ? void 0 : t.mobile, o = null == t ? void 0 : t.tablet, i = null == t ? void 0 : t.desktop;
                    return t && (!1 === a && (r = "animate-none"), !1 === o ? r = "".concat(r, " md:animate-none") : !0 === o && (r = "".concat(r, " ").concat("md:animate-vertical-progress-bar")), !1 === i ? r = "".concat(r, " lg:animate-none") : !0 === i && (r = "".concat(r, " ").concat("lg:animate-vertical-progress-bar"))), r
                },
                s = "--prg-duration";

            function c(e) {
                let {
                    style: t,
                    className: n
                } = e, {
                    isPaused: a,
                    hidden: s,
                    onAnimationIteration: c,
                    isStopped: u,
                    responsiveAnimation: m
                } = (0, l.pv)(), f = d({
                    responsiveAnimation: m,
                    animationClassName: "animate-vertical-progress-bar"
                }), p = (0, i.useRef)(null);
                (0, i.useEffect)(() => {
                    p.current && !u && (p.current.style.animationPlayState = a ? "paused" : "running")
                }, [a, u]);
                let v = i.useCallback(() => {
                    null == c || c()
                }, [c]);
                return (0, i.useEffect)(() => {
                    let e = p.current;
                    return e && c && !u && e.addEventListener("animationiteration", v), () => {
                        e && c && e.removeEventListener("animationiteration", v)
                    }
                }, [v, c, u]), (0, i.useEffect)(() => {
                    let e = p.current;
                    e && u && f.split(" ").forEach(t => e.classList.remove(t)), e && !u && f.split(" ").forEach(t => e.classList.add(t))
                }, [u]), (0, r.jsx)("div", {
                    ref: p,
                    style: t,
                    className: o()("progress-indicator w-full h-full bg-vimeo-blue-55", {
                        animationClass: f,
                        [n]: n
                    }),
                    hidden: s,
                    "aria-hidden": s
                })
            }
        },
        49150: function(e, t, n) {
            n.d(t, {
                pv: function() {
                    return i
                }
            });
            var r = n(52322),
                a = n(2784);
            let o = (0, a.createContext)({
                    progress: 0
                }),
                i = () => (0, a.useContext)(o);
            t.ZP = e => {
                let {
                    children: t,
                    progress: n,
                    ...a
                } = e;
                return (0, r.jsx)(o.Provider, {
                    value: {
                        ...a,
                        progress: n || 0
                    },
                    children: t
                })
            }
        },
        38265: function(e, t, n) {
            n.d(t, {
                j: function() {
                    return l
                }
            });
            var r = n(87163),
                a = n(12524),
                o = n.n(a),
                i = n(98115);
            let l = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Cn,
                    a = arguments.length > 3 ? arguments[3] : void 0,
                    l = (0, r.OW)({
                        ...a,
                        ref: e,
                        threshold: n
                    });
                return {
                    animationClasses: o()({
                        "md:animate-slide-in-from-top": !0 === l && "slide-in-from-top" === t,
                        "md:animate-slide-in-from-bottom": !0 === l && "slide-in-from-bottom" === t,
                        "md:animate-slide-in-from-right": !0 === l && "slide-in-from-right" === t,
                        "md:animate-slide-in-from-left": !0 === l && "slide-in-from-left" === t,
                        "md:animate-subtle-fade-in": !0 === l && "subtle-fade-in" === t,
                        "md:animate-fade-in": !0 === l && "fade-in" === t,
                        "md:motion-reduce:animate-none": !0 === l,
                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === l
                    })
                }
            }
        },
        21328: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return a
                }
            });
            var r = n(2784);
            let a = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ul",
                    n = e && (null == e ? void 0 : e.length) > 1 ? t : r.Fragment;
                return {
                    ListElement: n,
                    ListItemElement: n === t ? "li" : "div"
                }
            }
        },
        92994: function(e, t, n) {
            var r = n(18340);
            t.Z = e => {
                let {
                    title: t
                } = e;
                return (0, r.l)(t) || "accordion-".concat(Math.random().toString(36).slice(2))
            }
        },
        75694: function(e, t, n) {
            n.d(t, {
                vF: function() {
                    return ee
                },
                _m: function() {
                    return q
                },
                Qd: function() {
                    return Y
                },
                o4: function() {
                    return J
                },
                fC: function() {
                    return en
                }
            });
            var r = n(2784),
                a = n(92211),
                o = n(62172),
                i = n(62656),
                l = n(17998),
                d = n(87695),
                s = n(72714),
                c = n(61644),
                u = n(79616),
                m = n(23372),
                f = n(52322),
                p = "Collapsible",
                [v, h] = (0, a.b)(p),
                [x, g] = v(p),
                b = r.forwardRef((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        open: a,
                        defaultOpen: o,
                        disabled: i,
                        onOpenChange: l,
                        ...c
                    } = e, [u, v] = (0, d.T)({
                        prop: a,
                        defaultProp: o ?? !1,
                        onChange: l,
                        caller: p
                    });
                    return (0, f.jsx)(x, {
                        scope: n,
                        disabled: i,
                        contentId: (0, m.M)(),
                        open: u,
                        onOpenToggle: r.useCallback(() => v(e => !e), [v]),
                        children: (0, f.jsx)(s.WV.div, {
                            "data-state": N(u),
                            "data-disabled": i ? "" : void 0,
                            ...c,
                            ref: t
                        })
                    })
                });
            b.displayName = p;
            var w = "CollapsibleTrigger",
                y = r.forwardRef((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        ...r
                    } = e, a = g(w, n);
                    return (0, f.jsx)(s.WV.button, {
                        type: "button",
                        "aria-controls": a.contentId,
                        "aria-expanded": a.open || !1,
                        "data-state": N(a.open),
                        "data-disabled": a.disabled ? "" : void 0,
                        disabled: a.disabled,
                        ...r,
                        ref: t,
                        onClick: (0, l.M)(e.onClick, a.onOpenToggle)
                    })
                });
            y.displayName = w;
            var j = "CollapsibleContent",
                C = r.forwardRef((e, t) => {
                    let {
                        forceMount: n,
                        ...r
                    } = e, a = g(j, e.__scopeCollapsible);
                    return (0, f.jsx)(u.z, {
                        present: n || a.open,
                        children: ({
                            present: e
                        }) => (0, f.jsx)(k, {
                            ...r,
                            ref: t,
                            present: e
                        })
                    })
                });
            C.displayName = j;
            var k = r.forwardRef((e, t) => {
                let {
                    __scopeCollapsible: n,
                    present: a,
                    children: o,
                    ...l
                } = e, d = g(j, n), [u, m] = r.useState(a), p = r.useRef(null), v = (0, i.e)(t, p), h = r.useRef(0), x = h.current, b = r.useRef(0), w = b.current, y = d.open || u, C = r.useRef(y), k = r.useRef(void 0);
                return r.useEffect(() => {
                    let e = requestAnimationFrame(() => C.current = !1);
                    return () => cancelAnimationFrame(e)
                }, []), (0, c.b)(() => {
                    let e = p.current;
                    if (e) {
                        k.current = k.current || {
                            transitionDuration: e.style.transitionDuration,
                            animationName: e.style.animationName
                        }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                        let t = e.getBoundingClientRect();
                        h.current = t.height, b.current = t.width, C.current || (e.style.transitionDuration = k.current.transitionDuration, e.style.animationName = k.current.animationName), m(a)
                    }
                }, [d.open, a]), (0, f.jsx)(s.WV.div, {
                    "data-state": N(d.open),
                    "data-disabled": d.disabled ? "" : void 0,
                    id: d.contentId,
                    hidden: !y,
                    ...l,
                    ref: v,
                    style: {
                        "--radix-collapsible-content-height": x ? `${x}px` : void 0,
                        "--radix-collapsible-content-width": w ? `${w}px` : void 0,
                        ...e.style
                    },
                    children: y && o
                })
            });

            function N(e) {
                return e ? "open" : "closed"
            }
            var I = n(59241),
                A = "Accordion",
                R = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
                [_, E, P] = (0, o.B)(A),
                [T, L] = (0, a.b)(A, [P, h]),
                S = h(),
                D = r.forwardRef((e, t) => {
                    let {
                        type: n,
                        ...r
                    } = e;
                    return (0, f.jsx)(_.Provider, {
                        scope: e.__scopeAccordion,
                        children: "multiple" === n ? (0, f.jsx)(V, {
                            ...r,
                            ref: t
                        }) : (0, f.jsx)(H, {
                            ...r,
                            ref: t
                        })
                    })
                });
            D.displayName = A;
            var [W, Z] = T(A), [M, O] = T(A, {
                collapsible: !1
            }), H = r.forwardRef((e, t) => {
                let {
                    value: n,
                    defaultValue: a,
                    onValueChange: o = () => {},
                    collapsible: i = !1,
                    ...l
                } = e, [s, c] = (0, d.T)({
                    prop: n,
                    defaultProp: a ?? "",
                    onChange: o,
                    caller: A
                });
                return (0, f.jsx)(W, {
                    scope: e.__scopeAccordion,
                    value: r.useMemo(() => s ? [s] : [], [s]),
                    onItemOpen: c,
                    onItemClose: r.useCallback(() => i && c(""), [i, c]),
                    children: (0, f.jsx)(M, {
                        scope: e.__scopeAccordion,
                        collapsible: i,
                        children: (0, f.jsx)(F, {
                            ...l,
                            ref: t
                        })
                    })
                })
            }), V = r.forwardRef((e, t) => {
                let {
                    value: n,
                    defaultValue: a,
                    onValueChange: o = () => {},
                    ...i
                } = e, [l, s] = (0, d.T)({
                    prop: n,
                    defaultProp: a ?? [],
                    onChange: o,
                    caller: A
                }), c = r.useCallback(e => s((t = []) => [...t, e]), [s]), u = r.useCallback(e => s((t = []) => t.filter(t => t !== e)), [s]);
                return (0, f.jsx)(W, {
                    scope: e.__scopeAccordion,
                    value: l,
                    onItemOpen: c,
                    onItemClose: u,
                    children: (0, f.jsx)(M, {
                        scope: e.__scopeAccordion,
                        collapsible: !0,
                        children: (0, f.jsx)(F, {
                            ...i,
                            ref: t
                        })
                    })
                })
            }), [z, B] = T(A), F = r.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    disabled: a,
                    dir: o,
                    orientation: d = "vertical",
                    ...c
                } = e, u = r.useRef(null), m = (0, i.e)(u, t), p = E(n), v = "ltr" === (0, I.gm)(o), h = (0, l.M)(e.onKeyDown, e => {
                    if (!R.includes(e.key)) return;
                    let t = e.target,
                        n = p().filter(e => !e.ref.current?.disabled),
                        r = n.findIndex(e => e.ref.current === t),
                        a = n.length;
                    if (-1 === r) return;
                    e.preventDefault();
                    let o = r,
                        i = a - 1,
                        l = () => {
                            (o = r + 1) > i && (o = 0)
                        },
                        s = () => {
                            (o = r - 1) < 0 && (o = i)
                        };
                    switch (e.key) {
                        case "Home":
                            o = 0;
                            break;
                        case "End":
                            o = i;
                            break;
                        case "ArrowRight":
                            "horizontal" === d && (v ? l() : s());
                            break;
                        case "ArrowDown":
                            "vertical" === d && l();
                            break;
                        case "ArrowLeft":
                            "horizontal" === d && (v ? s() : l());
                            break;
                        case "ArrowUp":
                            "vertical" === d && s()
                    }
                    let c = o % a;
                    n[c].ref.current?.focus()
                });
                return (0, f.jsx)(z, {
                    scope: n,
                    disabled: a,
                    direction: o,
                    orientation: d,
                    children: (0, f.jsx)(_.Slot, {
                        scope: n,
                        children: (0, f.jsx)(s.WV.div, {
                            ...c,
                            "data-orientation": d,
                            ref: m,
                            onKeyDown: a ? void 0 : h
                        })
                    })
                })
            }), Q = "AccordionItem", [U, K] = T(Q), Y = r.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    value: r,
                    ...a
                } = e, o = B(Q, n), i = Z(Q, n), l = S(n), d = (0, m.M)(), s = r && i.value.includes(r) || !1, c = o.disabled || e.disabled;
                return (0, f.jsx)(U, {
                    scope: n,
                    open: s,
                    disabled: c,
                    triggerId: d,
                    children: (0, f.jsx)(b, {
                        "data-orientation": o.orientation,
                        "data-state": et(s),
                        ...l,
                        ...a,
                        ref: t,
                        disabled: c,
                        open: s,
                        onOpenChange: e => {
                            e ? i.onItemOpen(r) : i.onItemClose(r)
                        }
                    })
                })
            });
            Y.displayName = Q;
            var $ = "AccordionHeader",
                q = r.forwardRef((e, t) => {
                    let {
                        __scopeAccordion: n,
                        ...r
                    } = e, a = B(A, n), o = K($, n);
                    return (0, f.jsx)(s.WV.h3, {
                        "data-orientation": a.orientation,
                        "data-state": et(o.open),
                        "data-disabled": o.disabled ? "" : void 0,
                        ...r,
                        ref: t
                    })
                });
            q.displayName = $;
            var G = "AccordionTrigger",
                J = r.forwardRef((e, t) => {
                    let {
                        __scopeAccordion: n,
                        ...r
                    } = e, a = B(A, n), o = K(G, n), i = O(G, n), l = S(n);
                    return (0, f.jsx)(_.ItemSlot, {
                        scope: n,
                        children: (0, f.jsx)(y, {
                            "aria-disabled": o.open && !i.collapsible || void 0,
                            "data-orientation": a.orientation,
                            id: o.triggerId,
                            ...l,
                            ...r,
                            ref: t
                        })
                    })
                });
            J.displayName = G;
            var X = "AccordionContent",
                ee = r.forwardRef((e, t) => {
                    let {
                        __scopeAccordion: n,
                        ...r
                    } = e, a = B(A, n), o = K(X, n), i = S(n);
                    return (0, f.jsx)(C, {
                        role: "region",
                        "aria-labelledby": o.triggerId,
                        "data-orientation": a.orientation,
                        ...i,
                        ...r,
                        ref: t,
                        style: {
                            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                            ...e.style
                        }
                    })
                });

            function et(e) {
                return e ? "open" : "closed"
            }
            ee.displayName = X;
            var en = D
        }
    }
]);
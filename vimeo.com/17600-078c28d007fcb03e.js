"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [17600, 34550, 97518, 52919], {
        85044: function(e, l, n) {
            n.d(l, {
                u: function() {
                    return a
                }
            });
            var t = n(2784),
                i = n(22031);
            let a = e => {
                let {
                    items: l
                } = e, [n, a] = (0, t.useState)(0);
                return {
                    expandedIndex: n,
                    onValueChange: e => {
                        let n = parseInt(e);
                        if (a(parseInt(e)), "".concat(n) === e) {
                            var t;
                            (0, i.Q)({
                                bpWithContext: null == l ? void 0 : null === (t = l[n]) || void 0 === t ? void 0 : t.bpExpand
                            })
                        }
                    }
                }
            }
        },
        34550: function(e, l, n) {
            n.r(l), n.d(l, {
                default: function() {
                    return v
                }
            });
            var t = n(52322),
                i = n(75694),
                a = n(12524),
                o = n.n(a),
                s = n(2784),
                r = n(73116),
                d = n(85044),
                c = n(84893),
                u = n(26436),
                m = n(38265),
                h = n(92994),
                x = n(37539);

            function v(e) {
                var l, n, a;
                let v = (0, s.useRef)(null),
                    f = (0, s.useRef)(null),
                    p = (0, s.useRef)(null),
                    g = (0, s.useRef)(null),
                    {
                        containerHeight: b
                    } = (0, r.u)({
                        containerRef: v
                    }),
                    {
                        animationClasses: j
                    } = (0, m.j)(f, "subtle-fade-in"),
                    {
                        animationClasses: y
                    } = (0, m.j)(p, "subtle-fade-in"),
                    {
                        animationClasses: C
                    } = (0, m.j)(g, "slide-in-from-bottom"),
                    {
                        expandedIndex: w,
                        onValueChange: N
                    } = (0, d.u)({
                        items: e.items
                    }),
                    k = (0, h.Z)({
                        title: e.title
                    });
                return (0, t.jsx)(u.$s, {
                    ref: v,
                    className: "gap-y-10 text-card-content h-[var(--container-height,558px)]",
                    theme: (0, c.T)(e.theme),
                    style: {
                        "--container-height": "".concat(b, "px")
                    },
                    children: (0, t.jsxs)(x.U.Provider, {
                        ...e,
                        id: k,
                        expandedIndex: w,
                        hideExpandedTriggerIcon: !0,
                        children: [(0, t.jsxs)("div", {
                            className: "col-[2/-2] lg:col-[3/span_10] flex flex-col gap-y-bokeh-2xl lg:sticky lg:top-24 lg:h-fit",
                            children: [(0, t.jsx)(x.U.Header, {
                                ref: p,
                                className: o()({
                                    [y]: y
                                })
                            }), (null == e ? void 0 : e.ctaList) && (null == e ? void 0 : null === (l = e.ctaList) || void 0 === l ? void 0 : l.length) > 0 && (0, t.jsx)("div", {
                                ref: g,
                                className: "hidden lg:col-[3/span_10] lg:block",
                                children: (0, t.jsx)(x.U.CtaList, {
                                    className: o()(" ", {
                                        [C]: C
                                    }),
                                    ctaList: null == e ? void 0 : e.ctaList
                                })
                            })]
                        }), (0, t.jsx)(i.fC, {
                            ref: f,
                            type: "single",
                            defaultValue: "0",
                            value: "".concat(w),
                            onValueChange: N,
                            collapsible: !1,
                            className: o()("col-[2/-2] lg:col-[14/span_10] motion-reduce:animate-none", {
                                [j]: j
                            }),
                            children: null === (n = e.items) || void 0 === n ? void 0 : n.map((e, l) => {
                                let n = l === w;
                                return (0, t.jsx)(x.U.ItemProvider, {
                                    ...e,
                                    index: l,
                                    isExpanded: n,
                                    children: (0, t.jsxs)(x.U.Item, {
                                        className: o()("relative rounded-bokeh-lg overflow-hidden flex flex-col px-lohp-md transition-all duration-350 ease-in-out z-0 focus-within:relative focus-within:z-1", {
                                            "bg-lohp-container-card py-lohp-md [&>.accordion-trigger]:mb-[0.875rem]": n,
                                            "py-[0.875rem]": !n
                                        }),
                                        children: [(0, t.jsx)(x.U.ItemTrigger, {}), (0, t.jsx)(x.U.ItemContent, {})]
                                    }, e.id || l)
                                }, e.id || l)
                            })
                        }), (null == e ? void 0 : e.ctaList) && (null == e ? void 0 : null === (a = e.ctaList) || void 0 === a ? void 0 : a.length) > 0 && (0, t.jsx)("div", {
                            ref: g,
                            className: "block col-[2/-2] lg:hidden",
                            children: (0, t.jsx)(x.U.CtaList, {
                                className: o()(" ", {
                                    [C]: C
                                }),
                                ctaList: null == e ? void 0 : e.ctaList
                            })
                        })]
                    })
                })
            }
        },
        97518: function(e, l, n) {
            n.r(l), n.d(l, {
                default: function() {
                    return x
                }
            });
            var t = n(52322),
                i = n(75694),
                a = n(12524),
                o = n.n(a),
                s = n(2784),
                r = n(73116),
                d = n(85044),
                c = n(26436),
                u = n(38265),
                m = n(92994),
                h = n(37539);

            function x(e) {
                var l, n, a, x, v;
                let f = (0, s.useRef)(null),
                    p = (0, s.useRef)(null),
                    g = (0, s.useRef)(null),
                    b = (0, s.useRef)(null),
                    {
                        containerHeight: j
                    } = (0, r.u)({
                        containerRef: f
                    }),
                    {
                        animationClasses: y
                    } = (0, u.j)(p, "subtle-fade-in"),
                    {
                        animationClasses: C
                    } = (0, u.j)(g, "subtle-fade-in"),
                    {
                        animationClasses: w
                    } = (0, u.j)(b, "slide-in-from-bottom"),
                    {
                        expandedIndex: N,
                        onValueChange: k
                    } = (0, d.u)({
                        items: e.items
                    }),
                    I = (0, m.Z)({
                        title: e.title
                    });
                return (0, t.jsx)(c.$s, {
                    ref: f,
                    className: "gap-y-10 text-card-content h-[var(--container-height,558px)]",
                    theme: e.theme,
                    style: {
                        "--container-height": "".concat(j, "px")
                    },
                    children: (0, t.jsxs)(h.U.Provider, {
                        ...e,
                        id: I,
                        expandedIndex: N,
                        hideExpandedTriggerIcon: !0,
                        children: [(0, t.jsx)(h.U.Header, {
                            ref: g,
                            className: o()("col-[2/-2] lg:col-[3/span_10]", {
                                [C]: C
                            })
                        }), (null == e ? void 0 : null === (n = e.items) || void 0 === n ? void 0 : null === (l = n[N]) || void 0 === l ? void 0 : l.video) ? (0, t.jsx)(h.U.ItemVideo, {
                            ref: b,
                            className: o()("col-[2/-2] lg:col-[14/span_10] lg:row-[1/3]", {
                                [w]: w
                            })
                        }) : (null == e ? void 0 : null === (x = e.items) || void 0 === x ? void 0 : null === (a = x[N]) || void 0 === a ? void 0 : a.bynderImage) ? (0, t.jsx)(h.U.ItemImages, {
                            ref: b,
                            className: o()("col-[2/-2] lg:col-[14/span_10] lg:row-[1/3]", {
                                [w]: w
                            })
                        }) : null, (0, t.jsx)(i.fC, {
                            ref: p,
                            type: "single",
                            defaultValue: "0",
                            value: "".concat(N),
                            onValueChange: k,
                            collapsible: !1,
                            className: o()("col-[2/-2] lg:col-[3/span_10] motion-reduce:animate-none", {
                                [y]: y
                            }),
                            children: null === (v = e.items) || void 0 === v ? void 0 : v.map((e, l) => {
                                let n = l === N;
                                return (0, t.jsx)(h.U.ItemProvider, {
                                    ...e,
                                    index: l,
                                    isExpanded: n,
                                    children: (0, t.jsxs)(h.U.Item, {
                                        className: o()("relative rounded-bokeh-lg overflow-hidden flex flex-col px-lohp-md transition-all duration-350 ease-in-out z-0 focus-within:relative focus-within:z-1", {
                                            "bg-lohp-container-card py-lohp-md [&>.accordion-trigger]:mb-[0.875rem]": n,
                                            "py-[0.875rem]": !n
                                        }),
                                        children: [(0, t.jsx)(h.U.ItemTrigger, {}), (0, t.jsx)(h.U.ItemContent, {})]
                                    }, e.id || l)
                                }, e.id || l)
                            })
                        })]
                    })
                })
            }
        },
        52919: function(e, l, n) {
            n.r(l), n.d(l, {
                default: function() {
                    return p
                }
            });
            var t = n(52322),
                i = n(87163),
                a = n(75694),
                o = n(12524),
                s = n.n(o),
                r = n(2784),
                d = n(73116),
                c = n(26436),
                u = n(38265),
                m = n(92994),
                h = n(87390),
                x = n(22031);
            let v = e => {
                var l;
                let {
                    items: n,
                    defaultReadTime: t,
                    stopProgression: i
                } = e, [a, o] = (0, r.useState)(0), [s, d] = (0, r.useState)(!1), c = t || (null == n ? void 0 : null === (l = n[a]) || void 0 === l ? void 0 : l.readTime) || 20;
                return (0, r.useEffect)(() => {
                    i && (o(0), d(!1))
                }, [i]), {
                    value: "".concat(a),
                    onValueChange: e => {
                        let l = parseInt(e);
                        if (o(parseInt(e)), "".concat(l) === e) {
                            var t;
                            (0, x.Q)({
                                bpWithContext: null == n ? void 0 : null === (t = n[l]) || void 0 === t ? void 0 : t.bpExpand
                            })
                        }
                    },
                    expandedIndex: a,
                    pause: () => d(!0),
                    resume: () => d(!1),
                    onAnimationIteration: () => {
                        o(e => (e + 1) % ((null == n ? void 0 : n.length) || 1))
                    },
                    style: {
                        [h.Y]: c + "s"
                    },
                    isPaused: s
                }
            };
            var f = n(37539);

            function p(e) {
                var l, n, o, h, x;
                let {
                    isMobile: p
                } = (0, i.w_)(), g = (0, r.useRef)(null), b = (0, r.useRef)(null), j = (0, r.useRef)(null), y = (0, r.useRef)(null), C = !1 === (0, i.OW)({
                    ref: b,
                    threshold: .3,
                    unsetOnHide: !0
                }) || p, w = (0, m.Z)({
                    title: e.title
                }), {
                    containerHeight: N
                } = (0, d.u)({
                    containerRef: g
                }), {
                    animationClasses: k
                } = (0, u.j)(b, "subtle-fade-in"), {
                    animationClasses: I
                } = (0, u.j)(j, "subtle-fade-in"), {
                    animationClasses: Z
                } = (0, u.j)(y, "slide-in-from-bottom"), {
                    expandedIndex: U,
                    value: T,
                    onValueChange: R,
                    pause: V,
                    resume: _,
                    isPaused: P,
                    style: L,
                    onAnimationIteration: z
                } = v({
                    items: e.items,
                    defaultReadTime: e.defaultReadTime,
                    stopProgression: C
                });
                return (0, t.jsx)(c.$s, {
                    ref: g,
                    className: "gap-y-10 text-card-content h-[var(--container-height,558px)]",
                    theme: e.theme,
                    style: {
                        "--container-height": "".concat(N, "px")
                    },
                    children: (0, t.jsxs)(f.U.Provider, {
                        ...e,
                        id: w,
                        expandedIndex: U,
                        hideExpandedTriggerIcon: !0,
                        children: [(0, t.jsx)(f.U.Header, {
                            ref: j,
                            className: s()("col-[2/-2] lg:col-[3/span_10]", {
                                [I]: I
                            })
                        }), (null == e ? void 0 : null === (n = e.items) || void 0 === n ? void 0 : null === (l = n[U]) || void 0 === l ? void 0 : l.video) ? (0, t.jsx)(f.U.ItemVideo, {
                            ref: y,
                            className: s()("col-[2/-2] lg:col-[14/span_10] lg:row-[1/3] lg:sticky lg:top-24", {
                                [Z]: Z
                            })
                        }) : (null == e ? void 0 : null === (h = e.items) || void 0 === h ? void 0 : null === (o = h[U]) || void 0 === o ? void 0 : o.bynderImage) ? (0, t.jsx)(f.U.ItemImages, {
                            ref: y,
                            className: s()("col-[2/-2] lg:col-[14/span_10] lg:row-[1/3] lg:sticky lg:top-24", {
                                [Z]: Z
                            })
                        }) : null, (0, t.jsx)(a.fC, {
                            ref: b,
                            type: "single",
                            defaultValue: "0",
                            value: T,
                            onValueChange: R,
                            collapsible: !1,
                            className: s()("col-[2/-2] lg:col-[3/span_10] motion-reduce:animate-none", {
                                [k]: k
                            }),
                            children: null === (x = e.items) || void 0 === x ? void 0 : x.map((l, n) => {
                                let i = n === U;
                                return (0, t.jsx)(f.U.ItemProvider, {
                                    ...l,
                                    index: n,
                                    isExpanded: i,
                                    pause: V,
                                    resume: _,
                                    isPaused: P,
                                    style: L,
                                    onAnimationIteration: z,
                                    isStopped: C,
                                    children: (0, t.jsxs)(f.U.Item, {
                                        className: "relative rounded-bokeh-lg overflow-hidden flex z-0 focus-within:relative focus-within:z-1",
                                        onMouseEnter: i ? () => V() : void 0,
                                        onMouseLeave: i ? () => _() : void 0,
                                        onFocus: i ? () => V() : void 0,
                                        onBlur: i ? () => _() : void 0,
                                        children: [(0, t.jsx)(f.U.ItemProgress, {}), (0, t.jsxs)("div", {
                                            className: s()("accordion-wrapper rounded-bokeh-lg z-2 w-full px-lohp-md transition-all duration-350 ease-in-out", {
                                                "bg-lohp-container-card py-lohp-md [&>.accordion-trigger]:mb-[0.875rem]": i,
                                                "py-[0.875rem]": !i,
                                                "md:ml-1": e.showTimer
                                            }),
                                            children: [(0, t.jsx)(f.U.ItemTrigger, {}), (0, t.jsx)(f.U.ItemContent, {})]
                                        })]
                                    }, l.id || n)
                                }, l.id || n)
                            })
                        })]
                    })
                })
            }
        },
        28711: function(e, l, n) {
            n.d(l, {
                T: function() {
                    return c
                },
                H: function() {
                    return s
                }
            });
            var t = n(52322),
                i = n(2784),
                a = n(57072),
                o = n(38214),
                s = e => {
                    let {
                        image: l,
                        tags: n = [],
                        title: s,
                        description: r,
                        href: d,
                        compact: c = !1,
                        showSkeleton: u,
                        bp: m,
                        theme: h = "light-gray"
                    } = e, {
                        columns: x,
                        rows: v
                    } = (0, i.useContext)(a.L);
                    return (0, t.jsx)(o.Z.Provider, {
                        image: l,
                        tags: n,
                        title: s,
                        href: d,
                        compact: c,
                        description: r,
                        columns: x,
                        rows: v,
                        showSkeleton: u,
                        children: (0, t.jsxs)(o.Z.Base, {
                            ...d ? {
                                href: d,
                                bp: m
                            } : {},
                            theme: h,
                            children: [(0, t.jsx)(o.Z.Image, {
                                wrapperClassName: "max-md:w-[28%]",
                                className: "!h-auto"
                            }), (0, t.jsxs)(o.Z.Body, {
                                children: [(null == n ? void 0 : n.length) || u ? (0, t.jsx)(o.Z.Tags, {
                                    tags: n
                                }) : null, s || u ? (0, t.jsx)(o.Z.Title, {
                                    skeletonLinesOverride: 1,
                                    skeletonBoneClasses: "!w-[40%] md:!w-[55%] mb-1"
                                }) : null, r || u ? (0, t.jsx)(o.Z.Description, {
                                    className: "!flex max-md:!line-clamp-3 max-md:text-xs",
                                    skeletonBonesClasses: "max-md:!h-[.65ch] !h-[1ch]",
                                    skeletonClasses: "max-md:!mt-1 max-md:!gap-y-1 !gap-y-2"
                                }) : null]
                            })]
                        })
                    })
                },
                r = n(38007),
                d = n(76811),
                c = e => {
                    let {
                        image: l,
                        tag: n,
                        title: s,
                        description: c,
                        hideDescription: u = !0,
                        date: m,
                        href: h,
                        compact: x = !1,
                        showSkeleton: v,
                        bp: f
                    } = e, {
                        columns: p,
                        rows: g
                    } = (0, i.useContext)(a.L), {
                        locale: b
                    } = (0, i.useContext)(r.RD);
                    return (0, t.jsx)(o.Z.Provider, {
                        image: l,
                        tag: n,
                        title: (0, d.J)(s, b),
                        date: m,
                        href: h,
                        compact: x,
                        description: (0, d.J)(c, b),
                        hideDescription: u,
                        columns: p,
                        rows: g,
                        showSkeleton: v,
                        children: (0, t.jsxs)(o.Z.Base, {
                            ...h ? {
                                href: h,
                                bp: f
                            } : {},
                            children: [(0, t.jsx)(o.Z.Image, {}), (0, t.jsxs)(o.Z.Body, {
                                children: [n || v ? Array.isArray(n) ? (0, t.jsx)(o.Z.Tags, {
                                    tags: n
                                }) : (0, t.jsx)(o.Z.Tag, {
                                    ...n
                                }) : null, s ? (0, t.jsx)(o.Z.Title, {}) : null, c ? (0, t.jsx)(o.Z.Description, {}) : null, m || v ? (0, t.jsx)(o.Z.Date, {}) : null]
                            })]
                        })
                    })
                }
        },
        38214: function(e, l, n) {
            n.d(l, {
                Z: function() {
                    return p
                }
            });
            var t = n(52322),
                i = n(12524),
                a = n.n(i),
                o = n(2784),
                s = n(36028);
            let r = (0, o.createContext)({}),
                d = e => {
                    let {
                        href: l,
                        target: n,
                        title: i,
                        bp: o
                    } = e, r = (0, s.Z)({
                        bpWithContext: o,
                        href: l
                    });
                    return (0, t.jsx)("a", {
                        href: l,
                        target: n,
                        className: a()(["static", "before:content-['_'] before:cursor-[inherit] before:block before:absolute before:top-0 before:left-0 before:z-10 before:w-full before:h-full"]),
                        ...i ? {
                            title: i
                        } : {},
                        onClick: r
                    })
                };
            var c = n(19034),
                u = n.n(c),
                m = n(28894),
                h = n(86741),
                x = n(75876),
                v = n(38007),
                f = n(76811);
            let p = {
                Base: e => {
                    let {
                        children: l,
                        className: n,
                        flip: i,
                        bp: s,
                        theme: c
                    } = e, {
                        columns: u,
                        compact: m,
                        href: h,
                        title: x
                    } = (0, o.useContext)(r);
                    return (0, t.jsxs)("div", {
                        className: a()("card-base", "relative", {
                            [n]: null == n ? void 0 : n.length,
                            "max-md:flex-row max-md:gap-x-4": 1 === u,
                            "md:@[45rem]:flex-row-reverse": i,
                            "!bg-pearl-white": "light-gray" === c,
                            "!bg-white": "light-gray" !== c && !m || "white" === c,
                            "max-md:!bg-[unset]": 1 === u
                        }, "flex flex-col h-full md:@[45rem]:flex-row", "rounded-standard no-underline group w-full"),
                        children: [h ? (0, t.jsx)(d, {
                            href: h,
                            target: "_self",
                            title: x,
                            bp: s
                        }) : null, l]
                    })
                },
                Image: e => {
                    let {
                        className: l,
                        wrapperClassName: n
                    } = e, {
                        columns: i,
                        image: s,
                        title: d,
                        showSkeleton: c
                    } = (0, o.useContext)(r);
                    return (0, t.jsx)(x.Z, {
                        src: null == s ? void 0 : s.src,
                        bynderImage: null == s ? void 0 : s.bynderImage,
                        alt: null == s ? void 0 : s.alt,
                        showSkeleton: c,
                        skeletonBoneClassnames: "aspect-video",
                        assetClasses: a()("aspect-[16/9] w-full h-auto object-cover rounded-standard @[45rem]:h-full", {
                            [l]: null == l ? void 0 : l.length,
                            "max-md:rounded-bokeh-sm max-md:h-full": 1 === i
                        }),
                        wrapperClasses: a()("aspect-video w-full h-auto leading-[0]", {
                            "max-md:basis-[28%]": 1 === i,
                            [n]: null == n ? void 0 : n.length
                        }),
                        ...d ? {
                            title: d
                        } : {},
                        ...(null == s ? void 0 : s.width) ? {
                            width: null == s ? void 0 : s.width
                        } : {},
                        ...(null == s ? void 0 : s.height) ? {
                            width: null == s ? void 0 : s.height
                        } : {}
                    })
                },
                Body: e => {
                    let {
                        children: l,
                        className: n
                    } = e, {
                        columns: i,
                        compact: s
                    } = (0, o.useContext)(r);
                    return (0, t.jsx)("div", {
                        className: a()("card-body flex flex-col gap-4 flex-1 @[45rem]:basis-1/2", {
                            [n]: null == n ? void 0 : n.length,
                            "p-4 pt-6 md:p-6 md:pb-8": !s,
                            "pt-4 @[30rem]:pt-6": s,
                            "!pt-8 md:pt-6": s && 1 !== i,
                            "max-md:p-0 max-md:gap-0.5 max-md:justify-center": 1 === i
                        }),
                        children: l
                    })
                },
                Tag: e => {
                    let {
                        className: l,
                        label: n,
                        href: i
                    } = e, {
                        showSkeleton: s,
                        compact: d,
                        columns: c
                    } = (0, o.useContext)(r);
                    return s ? (0, t.jsx)(m.Z, {
                        className: "!h-auto !w-[100px] max-md:hidden",
                        boneClasses: "!w-[100px] h-[14px] opacity-[0.25]"
                    }) : (0, t.jsx)("div", {
                        className: "card-tag peer inline-flex w-fit relative z-20 max-md:hidden",
                        children: (0, t.jsx)(i ? "a" : "span", {
                            className: a()("text-xs text-bokeh-grey-500 font-medium no-underline leading-[140%]", "rounded-bokeh-xs border border-bokeh-grey-500 border-solid", "px-1", {
                                "hover:text-black hover:border-black transition-colors": null == i ? void 0 : i.length,
                                "!-mb-2": d && 1 === c,
                                [l]: null == l ? void 0 : l.length
                            }),
                            ...i ? {
                                href: i
                            } : {},
                            children: n
                        })
                    })
                },
                Tags: e => {
                    let {
                        className: l,
                        tags: n
                    } = e, {
                        locale: i
                    } = (0, o.useContext)(v.RD), {
                        showSkeleton: s,
                        compact: d,
                        columns: c,
                        title: u
                    } = (0, o.useContext)(r), h = (0, f.g)(n, i);
                    return s ? (0, t.jsx)(m.Z, {
                        className: "!h-auto !w-[100px] max-md:hidden",
                        boneClasses: "!w-[100px] h-[14px] opacity-[0.25]"
                    }) : (0, t.jsx)("div", {
                        className: "card-tag peer inline-flex w-fit relative z-20 max-md:hidden",
                        children: null == h ? void 0 : h.map(e => (0, t.jsx)("span", {
                            className: a()("text-xs text-bokeh-grey-500 font-medium no-underline leading-[140%]", "rounded-bokeh-xs border border-bokeh-grey-500 border-solid", "px-1", {
                                "-mb-2": d && 1 === c,
                                [l]: null == l ? void 0 : l.length
                            }),
                            children: e
                        }, "integrations-card-tag-".concat(u, "-").concat(e)))
                    })
                },
                Title: e => {
                    let {
                        className: l,
                        skeletonLinesOverride: n,
                        skeletonBoneClasses: i
                    } = e, {
                        href: s,
                        columns: d,
                        showSkeleton: c,
                        titleSemanticLevel: u,
                        title: h
                    } = (0, o.useContext)(r);
                    return c ? (0, t.jsx)(m.Z, {
                        lines: n || (3 === d ? 4 : 2),
                        boneClasses: a()("w-full h-[1ch] md:h-[1.75ch]", {
                            "md:h-[2ch] h-[1.5ch]": 3 === d,
                            [i]: null == i ? void 0 : i.length
                        }),
                        className: "gap-bokeh-xs !h-auto"
                    }) : (0, t.jsx)(null != u ? u : "h3", {
                        className: a()("text-lg text-black !font-medium !leading-[120%] tracking-[-0.72px] line-clamp-2 underline decoration-black/0", "@[30rem]:text-display-7 @[30rem]:line-clamp-none", "transition-colors duration-280 peer-hover:decoration-black/0", {
                            "group-hover:decoration-black": null == s ? void 0 : s.length,
                            "max-md:text-body-4 max-md:tracking-[-0.56px]": 1 === d,
                            "max-md:-mb-2": 2 === d,
                            [l]: null == l ? void 0 : l.length
                        }),
                        children: h
                    })
                },
                Description: e => {
                    let {
                        className: l,
                        skeletonLinesOverride: n,
                        skeletonBonesClasses: i,
                        skeletonClasses: s
                    } = e, {
                        description: d,
                        hideDescription: c,
                        showSkeleton: u
                    } = (0, o.useContext)(r), x = (0, h.ZP)(null != d ? d : "", {
                        replace: e => {
                            if ((null == e ? void 0 : e.children) && "p" === e.name) return (0, t.jsx)(t.Fragment, {
                                children: (0, h.du)(null == e ? void 0 : e.children)
                            })
                        }
                    });
                    return u ? (0, t.jsx)(m.Z, {
                        lines: n || 3,
                        boneClasses: a()("w-full h-[1ch] md:h-[1.75ch]", {
                            [i]: null == i ? void 0 : i.length
                        }),
                        className: a()("gap-bokeh-xs !h-auto", {
                            [s]: null == s ? void 0 : s.length
                        })
                    }) : (0, t.jsx)("p", {
                        className: a()("text-raven-gray font-normal leading-[160%] tracking-[-0.48px]", {
                            hidden: c,
                            "@[30rem]:flex @[45rem]:hidden": null == d ? void 0 : d.length,
                            [l]: null == l ? void 0 : l.length
                        }),
                        children: x
                    })
                },
                Date: e => {
                    let {
                        className: l
                    } = e, {
                        compact: n,
                        columns: i,
                        date: s,
                        showSkeleton: d
                    } = (0, o.useContext)(r), c = u()(s).format("MMMM Do, YYYY");
                    return d ? (0, t.jsx)(m.Z, {
                        className: "!h-auto",
                        boneClasses: "!w-[135px] h-[14px] opacity-[0.25]"
                    }) : (0, t.jsx)("div", {
                        className: a()("flex items-end", {
                            [l]: null == l ? void 0 : l.length,
                            "max-md:flex-none": 1 === i,
                            "flex-none": 2 === i && n,
                            "md:flex-1": 1 === i
                        }),
                        children: (0, t.jsx)("span", {
                            className: a()("text-body-5 md:text-sm leading-[140%] tracking-[-0.42px] font-normal text-raven-gray/70", {
                                "max-md:text-body-5": 1 === i
                            }),
                            children: c
                        })
                    })
                },
                Provider: e => {
                    let {
                        children: l,
                        ...n
                    } = e;
                    return (0, t.jsx)(r.Provider, {
                        value: n,
                        children: l
                    })
                }
            }
        },
        48605: function(e, l, n) {
            n.d(l, {
                g: function() {
                    return o
                }
            });
            var t = n(52322),
                i = n(12524),
                a = n.n(i);
            n(2784);
            let o = {
                Item: n(57072).Z,
                Base: e => {
                    let {
                        children: l,
                        className: n,
                        ...i
                    } = e;
                    return (0, t.jsx)("div", {
                        className: a()("card-grid-base grid w-full md:grid-cols-4 grid-cols-1 gap-5 md:gap-4", {
                            [n]: null == n ? void 0 : n.length
                        }),
                        ...i,
                        children: l
                    })
                }
            }
        },
        57072: function(e, l, n) {
            n.d(l, {
                L: function() {
                    return o
                }
            });
            var t = n(52322),
                i = n(12524),
                a = n.n(i);
            let o = (0, n(2784).createContext)({});
            l.Z = e => {
                let {
                    children: l,
                    className: n,
                    columns: i = 1,
                    rows: s = 1
                } = e;
                return (0, t.jsx)(o.Provider, {
                    value: {
                        columns: i,
                        rows: s
                    },
                    children: (0, t.jsx)("div", {
                        className: a()("@container", {
                            "md:col-span-2": 2 === i,
                            "md:col-span-3": 3 === i,
                            "md:row-span-2": 2 === s,
                            [n]: (null == n ? void 0 : n.length) > 0
                        }),
                        children: l
                    })
                })
            }
        },
        42949: function(e, l, n) {
            n.d(l, {
                V: function() {
                    return f
                }
            });
            var t = n(52322),
                i = n(87163),
                a = n(12524),
                o = n.n(a),
                s = n(2784),
                r = n(20162),
                d = n(98115),
                c = n(21328);
            let u = (0, s.createContext)({}),
                m = () => (0, s.useContext)(u);
            var h = n(86741),
                x = n(75876),
                v = n(49496);
            let f = {
                Provider: e => {
                    let {
                        children: l,
                        ...n
                    } = e;
                    return (0, t.jsx)(u.Provider, {
                        value: n,
                        children: l
                    })
                },
                Eyebrow: function(e) {
                    let {
                        className: l
                    } = e, {
                        eyebrow: n
                    } = m(), a = (0, s.useRef)(null), r = (0, i.OW)({
                        ref: a,
                        threshold: d.Cn
                    });
                    return (0, t.jsx)("h1", {
                        ref: a,
                        className: o()("eyebrow text-body-3 md:text-body-1 text-balance", {
                            [l]: null == l ? void 0 : l.length,
                            "md:animate-slide-in-from-top md:motion-reduce:animate-none": !0 === r,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === r
                        }),
                        children: n
                    })
                },
                Title: function(e) {
                    let {
                        className: l
                    } = e, {
                        title: n
                    } = m(), a = (0, s.useRef)(null), r = (0, i.OW)({
                        ref: a,
                        threshold: d.Cn
                    });
                    return (0, t.jsx)("span", {
                        ref: a,
                        className: o()("title text-display-mobile-5 xl:text-balance md:text-display-4", {
                            [l]: null == l ? void 0 : l.length,
                            "md:animate-slide-in-from-right md:motion-reduce:animate-none": !0 === r,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === r
                        }),
                        children: n
                    })
                },
                Description: function(e) {
                    let {
                        className: l
                    } = e, {
                        description: n
                    } = m(), a = (0, s.useRef)(null), r = (0, i.OW)({
                        ref: a,
                        threshold: d.Cn
                    });
                    return (0, t.jsx)("div", {
                        ref: a,
                        className: o()("description text-body-3 md:text-body-1 text-balance", {
                            [l]: null == l ? void 0 : l.length,
                            "md:animate-slide-in-from-right md:motion-reduce:animate-none": !0 === r,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === r
                        }),
                        children: "string" == typeof n && (0, h.ZP)(n)
                    })
                },
                Ctas: function(e) {
                    let {
                        className: l,
                        buttonClassNames: n
                    } = e, {
                        ctas: a
                    } = m(), u = (0, s.useRef)(null), h = (0, i.OW)({
                        ref: u,
                        threshold: d.Cn
                    }), {
                        ListElement: x,
                        ListItemElement: v
                    } = (0, c.A)(a, "ul"), f = o()("w-fit flex flex-col gap-y-4", {
                        [l]: null == l ? void 0 : l.length,
                        "md:animate-slide-in-from-bottom md:motion-reduce:animate-none": !0 === h,
                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === h
                    }), p = "li" === v ? {
                        className: f
                    } : {};
                    return (0, t.jsx)(x, {
                        ...p,
                        children: null == a ? void 0 : a.map((e, l) => (0, t.jsx)(v, {
                            ..."li" === v ? {} : {
                                className: f
                            },
                            children: 0 === l ? (0, t.jsx)(r.yT, {
                                ...e,
                                className: n
                            }, l) : (0, t.jsx)(r.oD, {
                                className: o()({
                                    [n]: null == n ? void 0 : n.length
                                }),
                                ...e
                            }, l)
                        }, l))
                    })
                },
                ModalWithChildren: function(e) {
                    let {
                        className: l,
                        children: n
                    } = e, {
                        video: i
                    } = m();
                    return (0, t.jsx)("div", {
                        className: o()("flex w-full h-auto aspect-1/2 max-h-lohp-video-mobile lg:aspect-2/1 lg:max-h-lohp-video  md:px-lohp-md motion-reduce:animate-none", {
                            [l]: null == l ? void 0 : l.length
                        }),
                        children: (0, t.jsx)(v.QU, {
                            ...i,
                            childWrapperClassName: "flex flex-col p-5 gap-y-lohp-lg h-full items-center justify-center",
                            overlay: !0,
                            children: n
                        })
                    })
                },
                Image: function(e) {
                    let {
                        className: l
                    } = e, {
                        bynderImage: n
                    } = m();
                    return (0, t.jsx)("div", {
                        className: o()({
                            [l]: null == l ? void 0 : l.length
                        }, "flex flex-col justify-center items-center md:w-1/2 -mx-4 md:mx-0"),
                        children: (0, t.jsx)(x.Z, {
                            bynderImage: n,
                            wrapperClasses: "aspect-4/3 w-full",
                            assetClasses: "w-full h-full object-cover object-center"
                        })
                    })
                }
            }
        },
        17600: function(e, l, n) {
            n.d(l, {
                V: function() {
                    return i.default
                },
                gy: function() {
                    return o.g
                },
                Ss: function() {
                    return u
                },
                HK: function() {
                    return a.H
                },
                fV: function() {
                    return t
                },
                zz: function() {
                    return s
                }
            }), n(72048);
            let t = e => {
                var l;
                return {
                    id: e.id,
                    ...e.data,
                    items: null === (l = e.data.items) || void 0 === l ? void 0 : l.map(e => {
                        var l;
                        let n = null === (l = e.item) || void 0 === l ? void 0 : l.value;
                        return {
                            ...(null == n ? void 0 : n.data) || {},
                            id: null == n ? void 0 : n.id
                        }
                    })
                }
            };
            var i = n(52919);
            n(97518), n(34550);
            var a = n(28711),
                o = n(48605);
            let s = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.reduce((e, l) => {
                    var n, t, i;
                    let a = l.id,
                        o = {
                            id: l.id,
                            ...l.data,
                            video: {
                                ...null === (t = l.data.video) || void 0 === t ? void 0 : null === (n = t.value) || void 0 === n ? void 0 : n.data,
                                id: null === (i = l.data.video) || void 0 === i ? void 0 : i.id
                            }
                        };
                    return e[a] = o, e
                }, {})
            };
            var r = n(52322),
                d = n(26436),
                c = n(42949);

            function u(e) {
                var l;
                let {
                    ...n
                } = e;
                return (0, r.jsx)(d.$s, {
                    "data-bp-location": "header",
                    wrapperClassName: "!p-0",
                    children: (0, r.jsx)(c.V.Provider, {
                        ...n,
                        children: (0, r.jsx)(c.V.ModalWithChildren, {
                            className: "col-[2/-2] md:col-[1/-1]",
                            children: (0, r.jsxs)("div", {
                                className: "flex flex-col w-full gap-y-5 max-w-[640px] text-white text-center items-center z-0",
                                children: [n.eyebrow && (0, r.jsx)(c.V.Eyebrow, {}), n.title && (0, r.jsx)(c.V.Title, {}), n.description && (0, r.jsx)(c.V.Description, {}), n.ctas && (null === (l = n.ctas) || void 0 === l ? void 0 : l.length) > 0 && (0, r.jsx)(c.V.Ctas, {})]
                            })
                        })
                    })
                })
            }
            n(17306)
        }
    }
]);
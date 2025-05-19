"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [85705], {
        6767: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n(52322),
                o = n(12524),
                r = n.n(o),
                l = n(2784),
                i = n(78437),
                s = n(18340),
                c = n(93883),
                d = n(87163),
                u = n(75876);

            function p(e) {
                let {
                    media: t,
                    hasGlowEffect: n = !0
                } = e, {
                    aspectRatio: o = "2:1",
                    ...l
                } = t, {
                    isMobile: i
                } = (0, d.w_)();
                return (0, a.jsx)(u.Z, {
                    wrapperClasses: r()("w-full h-[295px] flex z-0 relative", "md:h-full", {
                        "justify-center": "1:1" === o || "1:2" === o,
                        "justify-left": "1:1" !== o && "1:2" !== o
                    }),
                    assetClasses: r()("[&:not(.glow-effect)]:w-auto max-h-full max-w-full object-center object-cover rounded-standard", "md:rounded-standard md:rounded-r-3.5xl", {
                        "md:aspect-1/1 md:h-[662px]": "1:1" === o,
                        "[&:not(.progressive-image)]:h-full": "1:1" !== o,
                        "md:[&:not(.glow-effect)]:aspect-1/2 md:[&:not(.glow-effect)]:h-[662px]": "1:2" === o,
                        "md:[&:not(.glow-effect)]:aspect-2/1 md:[&:not(.glow-effect)]:h-auto": "2:1" === o,
                        "md:[&:not(.glow-effect)]:aspect-4/3 md:[&:not(.glow-effect)]:h-auto": "4:3" === o,
                        "md:[&:not(.glow-effect)]:aspect-16/9 md:[&:not(.glow-effect)]:h-auto": "16:9" === o
                    }),
                    hasBlurBackdrop: !i && n,
                    autoPlay: !0,
                    blurClasses: r()("rounded-standard [&>img]:w-auto [&>img]:max-h-full [&>img]:max-w-full md:[&>img]:w-full", {
                        "justify-center [&>img]:aspect-1/1 md:[&>img]:h-[662px] !left-1/2 !-translate-x-1/2": "1:1" === o,
                        "top-[unset] left-[unset]": "1:1" !== o,
                        "[&>img]:aspect-1/2 md:[&>img]:h-[662px]": "1:2" === o,
                        "[&>img]:aspect-2/1 md:[&>img]:h-auto": "2:1" === o,
                        "[&>img]:aspect-4/3 md:[&>img]:h-auto": "4:3" === o,
                        "[&>img]:aspect-16/9 md:[&>img]:h-auto": "16:9" === o
                    }),
                    bynderImage: null == t ? void 0 : t.bynderImage,
                    ...l
                })
            }
            var m = n(18336),
                h = n(18541);

            function f(e) {
                let {
                    theme: t,
                    title: n,
                    titleLink: o,
                    eyebrow: r,
                    description: l,
                    semanticLevel: s,
                    children: c
                } = e;
                return (0, a.jsxs)(i.Z, {
                    theme: t,
                    element: "section",
                    additionalClasses: "[&>*:first-child]:col-[1/-1] md:pb-component",
                    children: [(0, a.jsx)(h.default, {
                        headerVariant: "display-5",
                        theme: t,
                        title: n,
                        titleLink: o,
                        eyebrow: r,
                        element: "div",
                        semanticLevel: s,
                        description: l
                    }), c]
                })
            }

            function g(e) {
                var t;
                let {
                    id: n,
                    title: o,
                    titleLink: i,
                    eyebrow: s,
                    description: c,
                    semanticLevel: u,
                    theme: h,
                    accordionItems: g,
                    idPrefix: v,
                    isFaq: x = !1,
                    openIndex: b = 0,
                    setOpenIndex: _,
                    threshold: y = .4,
                    hasMedia: w,
                    hasGlowEffect: C = !0
                } = e, [{
                    aspectRatio: j = "",
                    ...k
                }, N] = (0, l.useState)(null == g ? void 0 : null === (t = g[0]) || void 0 === t ? void 0 : t.media);
                (0, l.useEffect)(() => {
                    var e, t, n, a, o, r, l;
                    (null !== b && b >= 0 && (null == g ? void 0 : null === (t = g[b]) || void 0 === t ? void 0 : null === (e = t.media) || void 0 === e ? void 0 : e.src) || null !== b && b >= 0 && (null == g ? void 0 : null === (a = g[b]) || void 0 === a ? void 0 : null === (n = a.media) || void 0 === n ? void 0 : n.embeddedVimeoUrl) || null !== b && b >= 0 && (null == g ? void 0 : null === (r = g[b]) || void 0 === r ? void 0 : null === (o = r.media) || void 0 === o ? void 0 : o.imgSrc)) && N(null == g ? void 0 : null === (l = g[b]) || void 0 === l ? void 0 : l.media)
                }, [g, b]);
                let I = (0, l.useRef)(null),
                    E = (0, d.OW)({
                        ref: I,
                        threshold: y
                    });
                return (0, a.jsxs)(f, {
                    id: n,
                    title: o,
                    titleLink: i,
                    eyebrow: s,
                    description: c,
                    semanticLevel: u,
                    theme: h,
                    children: [(0, a.jsx)(m.Z, {
                        accordionItems: g,
                        idPrefix: v,
                        openIndex: b,
                        setOpenIndex: _,
                        semanticLevel: u,
                        isFaq: x,
                        hasMedia: w,
                        className: "col-[2/-2]"
                    }), w && (0, a.jsx)("div", {
                        ref: I,
                        className: r()("hidden md:block", {
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === E,
                            "md:animate-image md:motion-reduce:animate-none": !0 === E,
                            "col-[11/-2]": "1:1" === j || "1:2" === j,
                            "col-[11/-1]": "1:1" !== j && "1:2" !== j
                        }),
                        children: (0, a.jsx)(p, {
                            media: {
                                ...k,
                                aspectRatio: j
                            },
                            hasGlowEffect: C
                        })
                    }, k.src)]
                })
            }
            var v = n(91518),
                x = n(51252),
                b = n(38088),
                _ = n(10040);

            function y(e) {
                let {
                    content: t,
                    cta: n,
                    media: o,
                    buttonTheme: r = "white",
                    builderButton: l,
                    enableDragNDrop: i
                } = e, s = "string" == typeof t;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(() => s ? (0, a.jsx)("span", {
                        itemProp: "text",
                        children: (0, b.Z)(t)
                    }) : (0, a.jsx)("span", {
                        itemProp: "text",
                        children: t
                    }), {}), ((null == n ? void 0 : n.url) || l) && (0, a.jsxs)("div", {
                        className: "mt-6",
                        children: [!i && (0, a.jsx)(_.default, {
                            href: null == n ? void 0 : n.url,
                            label: null == n ? void 0 : n.label,
                            theme: (null == n ? void 0 : n.buttonTheme) || r,
                            variant: (null == n ? void 0 : n.buttonVariant) || "tertiary",
                            bp: null == n ? void 0 : n.bp,
                            bpWithContext: null == n ? void 0 : n.bpWithContext,
                            isJoinModal: null == n ? void 0 : n.isJoinModal,
                            className: "cursor-pointer"
                        }), i && (0, a.jsx)(a.Fragment, {
                            children: l
                        })]
                    }), o && (0, a.jsx)("div", {
                        className: "mt-6 md:hidden",
                        children: (0, a.jsx)(p, {
                            media: o
                        })
                    })]
                })
            }
            let w = (e, t, n, o) => e.map((e, r) => {
                var l;
                let i = {
                    ...(0, x.n)({
                        bynderImage: e.bynderImage,
                        imageAsset: e.imageUrl,
                        videoAsset: e.backgroundVideoUrl,
                        altText: e.assetAltText,
                        options: {
                            embeddedVimeoUrl: e.embeddedVimeoUrl
                        }
                    }),
                    aspectRatio: e.aspectRatio
                };
                return {
                    itemAnchor: null == e ? void 0 : e.itemAnchor,
                    title: e.title,
                    content: (0, a.jsx)(y, {
                        content: e.content,
                        cta: e.enableDragNDrop ? void 0 : e.cta,
                        builderButton: e.enableDragNDrop ? (0, a.jsx)(v.Z, {
                            blocks: null == o ? void 0 : null === (l = o[r]) || void 0 === l ? void 0 : l.blocks,
                            parent: n,
                            path: "component.options.builderButtonV3s.".concat(r, ".blocks")
                        }, r) : void 0,
                        enableDragNDrop: e.enableDragNDrop,
                        media: i,
                        buttonTheme: "white" === t ? "black" : "light-gray" === t ? "dark-gray" : "white"
                    }),
                    media: i,
                    cta: e.cta,
                    bpExpandEvent: e.bpExpandEvent,
                    bpExpandWithContext: e.bpExpandWithContext
                }
            });

            function C(e) {
                let {
                    id: t,
                    initialOpenedIndex: n,
                    idPrefix: o,
                    hasGlowEffect: d = !0,
                    accordionItems: u = [],
                    theme: p = "black",
                    title: m,
                    titleLink: h,
                    eyebrow: f,
                    description: v,
                    semanticLevel: x,
                    isFaq: b = !1,
                    isStorybook: _ = !1,
                    builderBlock: y,
                    textAlign: C = "center",
                    reducePadding: j,
                    builderButtonV3s: k,
                    isCloseIconEnabled: N = !0
                } = e, I = y || _, [E, S] = (0, l.useState)(I ? 0 : n), A = o || "accordion-v3-".concat(null == y ? void 0 : y.id), B = u.some(e => e.imageUrl || e.backgroundVideoUrl || e.embeddedVimeoUrl || e.bynderImage), P = I && B, M = w(u, p, null == y ? void 0 : y.id, k), W = {
                    id: t = t || (0, s.l)(m),
                    setOpenIndex: S,
                    openIndex: E,
                    semanticLevel: x,
                    theme: p,
                    title: m,
                    titleLink: h,
                    eyebrow: f,
                    isFaq: b,
                    idPrefix: A,
                    hasMedia: B,
                    hasGlowEffect: d,
                    description: v,
                    reducePadding: j,
                    accordionItems: M
                }, Z = y ? i.Z : "div";
                return (0, l.useEffect)(() => {
                    let e = window.location.hash;
                    if (e) {
                        let t = u.findIndex(t => t.itemAnchor === e.replace("#", ""));
                        t >= 0 && S(t)
                    }
                }, [u]), (0, a.jsx)(a.Fragment, {
                    children: P ? (0, a.jsx)(g, {
                        ...W
                    }) : (0, a.jsx)(Z, {
                        id: t,
                        itemScope: b,
                        itemType: b ? "https://schema.org/FAQPage" : void 0,
                        ...y && {
                            element: "section",
                            theme: p,
                            additionalClasses: "[&>*]:col-[1/-1]"
                        },
                        className: r()({
                            ["w-full ".concat(p)]: !y
                        }),
                        children: u.map((e, t) => (0, a.jsx)(c.Z, {
                            itemAnchor: null == e ? void 0 : e.itemAnchor,
                            setOpenIndex: e => S(n => n === t ? void 0 : e),
                            isOpened: E === t,
                            title: e.title,
                            idPrefix: A,
                            index: t,
                            semanticLevel: x,
                            isFaq: b,
                            textAlign: C,
                            reducePadding: j,
                            bpExpandEvent: e.bpExpandEvent,
                            bpExpandWithContext: e.bpExpandWithContext,
                            isCloseIconEnabled: N,
                            children: e.content
                        }, t))
                    })
                })
            }
        },
        93883: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return v
                }
            });
            var a = n(52322),
                o = n(76075),
                r = n(12524),
                l = n.n(r),
                i = n(86741),
                s = n(2784),
                c = n(69640),
                d = n.n(c),
                u = n(75937),
                p = n(97235),
                m = n(25515),
                h = n(22031),
                f = n(32089);
            let g = e => {
                let {
                    isChildrenStr: t,
                    children: n
                } = e;
                return t ? (0, a.jsx)("div", {
                    className: m.N,
                    style: m._,
                    itemProp: "text",
                    children: (0, i.ZP)(n, p.Y)
                }) : (0, a.jsx)("div", {
                    itemProp: "text",
                    className: m.N,
                    children: n
                })
            };

            function v(e) {
                var t, n;
                let {
                    index: r,
                    isOpened: i,
                    setOpenIndex: c,
                    itemAnchor: p,
                    title: m,
                    idPrefix: v,
                    semanticLevel: x = "h3",
                    reducePadding: b,
                    children: _,
                    isFaq: y,
                    disabled: w,
                    textAlign: C = "center",
                    bpExpandEvent: j,
                    bpExpandWithContext: k,
                    containerRef: N,
                    isCloseIconEnabled: I = !0
                } = e, [E, S] = (0, s.useState)("0px"), [A, B] = (0, s.useState)("0px"), [P, M] = (0, s.useState)("none"), [W, Z] = (0, s.useState)(!1), L = (0, s.useRef)(null), V = (0, s.useRef)(null), J = (0, u.Z)({
                    ref: N,
                    index: r || 0,
                    threshold: .5
                }), O = (0, s.useRef)(null), T = "".concat(v, "-").concat(r), R = "".concat(v, "-button-").concat(r), z = "string" == typeof _, F = d()(o.Z), D = (null == F ? void 0 : null === (n = F.theme) || void 0 === n ? void 0 : null === (t = n.screens) || void 0 === t ? void 0 : t["2xl"]) || "1440px", H = b ? "px-[calc((2/25)*clamp(var(--screen-xs),_100vw,_var(--screen-2xl)))] md:px-[calc((1/25)*clamp(var(--screen-xs),_100vw,_var(--screen-2xl)))]" : "px-[calc((2/25)*clamp(var(--screen-xs),_100vw,_var(--screen-2xl)))]";
                return (0, s.useEffect)(() => {
                    let e = null == L ? void 0 : L.current,
                        t = e => {
                            "0px" === e.target.style.maxHeight && M("none")
                        };
                    return null == e || e.addEventListener("transitionend", t), () => {
                        null == e || e.removeEventListener("transitionend", t)
                    }
                }, [L, M]), (0, s.useEffect)(() => {
                    i && M("block"), Z(i)
                }, [i]), (0, s.useEffect)(() => {
                    L.current && S(W ? "".concat(L.current.scrollHeight, "px") : "0px")
                }, [W]), (0, s.useEffect)(() => {
                    if (V.current) {
                        var e;
                        B("".concat((null === (e = V.current) || void 0 === e ? void 0 : e.scrollHeight) + 1, "px"))
                    }
                }, []), (0, a.jsxs)("div", {
                    ref: V,
                    itemProp: y ? "mainEntity" : "",
                    itemType: y ? "https://schema.org/Question" : "",
                    style: {
                        "--accordion-before-h": A,
                        "--screen-xs": "".concat("375px"),
                        "--screen-2xl": "".concat(D)
                    },
                    className: l()("w-full relative rounded-standard z-0 bg-accordion-background text-accordion-content overflow-hidden transition-[border-radius,_color,_background-color] duration-[500ms,_100ms,_100ms] ease-in-out", 'before:content-[""] before:block before:bg-vimeo-blue before:w-full before:h-[var(--accordion-before-h)] before:rounded-standard before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:scale-90 before:opacity-0 before:transition-all before:duration-500 before:ease-in-out hover:before:scale-100 hover:before:opacity-100', {
                        "hover:text-black": "none" === P,
                        "before:hidden": "none" !== P,
                        "bg-accordion-expanded-background rounded-standard": W,
                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === J,
                        "md:animate-card md:motion-reduce:animate-none": J
                    }),
                    children: [(0, a.jsx)("div", {
                        id: p,
                        className: "pt-global-nav -mt-global-nav"
                    }), (0, a.jsx)(x || "h3", {
                        className: "w-full",
                        children: (0, a.jsxs)("button", {
                            ref: O,
                            type: "button",
                            className: l()("flex z-[1] w-full items-center gap-2 justify-between bg-transparent border-none relative rounded-xl text-inherit text-display-mobile-8 md:text-display-8 py-6 ".concat(H), {
                                "text-center": "center" === C,
                                "text-left": "left" === C,
                                "cursor-default": w,
                                "cursor-pointer": !w
                            }),
                            "aria-expanded": W ? "true" : "false",
                            "aria-controls": T,
                            id: R,
                            onClick: () => {
                                c(r), (j || k) && !W && (0, h.Q)({
                                    bpData: j,
                                    bpWithContext: k
                                })
                            },
                            disabled: w,
                            children: [(0, a.jsx)("span", {
                                itemProp: y ? "name" : void 0,
                                className: "text-left",
                                children: m
                            }), (0, a.jsxs)("div", {
                                className: "relative w-6 h-6 shrink-0",
                                children: [(0, a.jsx)(f.Z, {
                                    className: l()("w-full h-full absolute top-0 left-0", {
                                        hidden: W && !I
                                    })
                                }), (0, a.jsx)(f.Z, {
                                    className: l()("w-full h-full absolute top-0 left-0", {
                                        "rotate-90": !W,
                                        hidden: W
                                    })
                                })]
                            })]
                        })
                    }), (0, a.jsx)("div", {
                        id: T,
                        ref: L,
                        role: "region",
                        "aria-labelledby": R,
                        hidden: !i,
                        "aria-hidden": i ? "false" : "true",
                        style: {
                            maxHeight: "".concat(E),
                            display: "".concat(P || "none")
                        },
                        className: l()("overflow-hidden bg-transparent transition-all duration-500 ease-in-out"),
                        children: (0, a.jsx)("div", {
                            className: "pb-8 ".concat(H, " text-body-1 text-accordion-sub-content [&_*:is(h1,h2,h3,h4,h5,h6)]:text-accordion-content"),
                            children: y ? (0, a.jsx)("span", {
                                itemScope: !0,
                                itemProp: "acceptedAnswer",
                                children: (0, a.jsx)(g, {
                                    isChildrenStr: z,
                                    children: _
                                })
                            }) : (0, a.jsx)(g, {
                                isChildrenStr: z,
                                children: _
                            })
                        })
                    })]
                })
            }
        },
        18336: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var a = n(52322),
                o = n(12524),
                r = n.n(o),
                l = n(2784),
                i = n(93883);

            function s(e) {
                let {
                    accordionItems: t,
                    idPrefix: n,
                    openIndex: o,
                    setOpenIndex: s,
                    semanticLevel: c,
                    isFaq: d = !1,
                    hasMedia: u = !1,
                    className: p
                } = e, m = (0, l.useRef)(null);
                return (0, a.jsx)("div", {
                    ref: m,
                    itemScope: d,
                    itemType: d ? "https://schema.org/FAQPage" : void 0,
                    className: r()(p, {
                        "md:col-[2/10]": u
                    }),
                    children: t.map((e, t) => (0, a.jsx)(i.Z, {
                        itemAnchor: null == e ? void 0 : e.itemAnchor,
                        setOpenIndex: e => {
                            s(e)
                        },
                        isOpened: o === t,
                        title: e.title,
                        idPrefix: n,
                        index: t,
                        semanticLevel: c,
                        reducePadding: !0,
                        isFaq: d,
                        disabled: o === t,
                        textAlign: "left",
                        bpExpandEvent: e.bpExpandEvent,
                        bpExpandWithContext: e.bpExpandWithContext,
                        containerRef: m,
                        children: e.content
                    }, t))
                })
            }
        },
        75937: function(e, t, n) {
            var a = n(87163),
                o = n(2784);
            t.Z = e => {
                let {
                    rootMargin: t = "0px",
                    ref: n,
                    index: r,
                    threshold: l
                } = e, i = (0, a.OW)({
                    ref: n,
                    rootMargin: t,
                    threshold: l
                }), [s, c] = (0, o.useState)();
                return (0, o.useEffect)(() => {
                    i ? setTimeout(() => {
                        c(!0)
                    }, 150 * r) : !1 === i && c(!1)
                }, [i, c]), s
            }
        },
        51252: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return a
                }
            });
            let a = e => {
                let {
                    imageAsset: t,
                    videoAsset: n,
                    bynderImage: a,
                    altText: o,
                    options: r
                } = e, l = !!n;
                return {
                    src: n || t,
                    alt: o,
                    isVideo: l,
                    embeddedVimeoUrl: null == r ? void 0 : r.embeddedVimeoUrl,
                    bynderImage: a,
                    ...l && {
                        imgSrc: t,
                        ref: null == r ? void 0 : r.videoRef,
                        controllable: !0,
                        autoPlay: null == r ? void 0 : r.autoPlay
                    }
                }
            }
        },
        95168: function(e, t, n) {
            n.d(t, {
                Bt: function() {
                    return b
                },
                qE: function() {
                    return o
                }
            });
            var a, o, r = n(52322),
                l = n(35505),
                i = n(43355),
                s = n(72048);
            (a = o || (o = {}))[a.large = 0] = "large", a[a.small = 1] = "small";
            let c = e => {
                    switch (e.format) {
                        case "secondary":
                            return {
                                background: "#efefef", hoverStyle: "background: #d9d9d9", color: s.O9.astroGranite
                            };
                        case "alternative":
                            return {
                                background: s.O9.astroGranite, hoverStyle: "background: ".concat(s.O9.astroGraniteHover), color: s.O9.white
                            };
                        case "transparent":
                            return {
                                background: "transparent", hoverStyle: "background: rgba(0, 0, 0, 0.15)", color: e.textColor || s.O9.astroGranite
                            };
                        case "bordered":
                            return {
                                background: "transparent", border: "1px solid ".concat(e.borderColor || e.textColor), color: e.textColor, hoverStyle: e.borderColor ? "border: 1px solid ".concat(e.textColor) : "div {\n          background: rgba(0, 0, 0, 0.15);\n        }"
                            };
                        case "custom":
                            return {
                                background: e.bgColor, color: e.textColor || s.O9.astroGranite, hoverStyle: e.hoverColor ? "background: ".concat(e.hoverColor) : "\n          div {\n            background: rgba(0, 0, 0, 0.15);\n          }\n          "
                            };
                        default:
                            return {
                                background: s.O9.vimeoBlue, hoverStyle: "background: ".concat(s.O9.vimeoBlueHover), color: s.O9.white
                            }
                    }
                },
                d = e => {
                    let t = c(e);
                    return "\n        background: ".concat(t.background, ";\n        color: ").concat(t.color, ";\n        border: ").concat(t.border ? t.border : "none", ";\n        transition: all 0.3s;\n        &:hover {\n          ").concat(t.hoverStyle, ";\n          transition: all 0.3s;\n        }\n    ")
                },
                u = e => {
                    switch (e.size) {
                        case 0:
                            return "\n        line-height: 48px;\n        height: 48px;\n        font-size: 16px;\n      ";
                        case 1:
                            return "\n        line-height: 28px;\n        height: 28px;\n        font-size: 12px;\n      ";
                        default:
                            return "\n        line-height: 40px;\n        height: 40px;\n        font-size: 16px;\n      "
                    }
                },
                p = e => {
                    let t = "#E3E8E9";
                    return "\n        border-radius: 3px;\n        cursor: pointer;\n        display: ".concat(e.isBlock ? "block" : "inline-block", ";\n        font-weight: 700;\n        overflow: hidden;\n        padding: 0;\n        ").concat(d(e), ";\n        ").concat(u(e), ";\n        text-align: center !important;\n        ").concat(e.width ? "width: ".concat(e.width, ";") : "", "\n        ").concat(e.minWidth ? "min-width: ".concat(e.minWidth, ";") : "", "\n        text-decoration: none;\n\n        &:disabled {\n          color: ").concat("#a7b1b5", ";\n          border-color: ").concat(t, ";\n          background-color: ").concat(t, ";\n          cursor: not-allowed;\n        }\n    ")
                },
                m = (0, l.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),
                h = l.default.div.withConfig({
                    componentId: "sc-14322a37-0"
                })(["animation:0.8s ", " linear infinite;border-width:0.125rem;border-style:solid;width:1.625rem;height:1.625rem;border-radius:1.625rem;border-bottom-color:transparent !important;margin:auto;"], m),
                f = l.default.button.withConfig({
                    componentId: "sc-14322a37-1"
                })(["", ";"], e => p(e)),
                g = l.default.div.withConfig({
                    componentId: "sc-14322a37-2"
                })(["display:flex;align-items:center;justify-content:center;padding:", ";white-space:nowrap;"], e => e.padding || "0 1.5rem"),
                v = e => {
                    let {
                        element: t,
                        isLoading: n,
                        children: a,
                        onClick: o,
                        fa: l,
                        gtm: s,
                        bp: c,
                        icon: d,
                        padding: u,
                        tabIndex: p = 0,
                        ...m
                    } = e;
                    return (0, r.jsx)(f, {
                        as: t,
                        onClick: e => {
                            var t, n, a, r;
                            (0, i.N)(e, {
                                fa: l,
                                gtm: s,
                                bp: c,
                                bpOverrides: c && {
                                    common: {
                                        target_path: null !== (n = m.href) && void 0 !== n ? n : null,
                                        copy: null !== (r = null !== (a = null == c ? void 0 : null === (t = c.click) || void 0 === t ? void 0 : t.copy) && void 0 !== a ? a : m.CTAText) && void 0 !== r ? r : null
                                    }
                                },
                                targetPath: null
                            }, () => null == o ? void 0 : o(e))
                        },
                        ...m,
                        tabIndex: p,
                        children: n ? (0, r.jsx)(h, {}) : (0, r.jsxs)(g, {
                            padding: u,
                            children: [d ? (0, r.jsxs)(r.Fragment, {
                                children: [d, "\xa0"]
                            }) : null, a]
                        })
                    })
                },
                x = l.default.div.withConfig({
                    componentId: "sc-14322a37-3"
                })(["margin-top:2rem;a,button{", "}"], e => e.width && "min-width: ".concat(e.width, ";")),
                b = e => {
                    let {
                        width: t,
                        ...n
                    } = e;
                    return (0, r.jsx)(x, {
                        width: t,
                        children: (0, r.jsx)(v, {
                            ...n
                        })
                    })
                };
            (0, l.default)(b).withConfig({
                componentId: "sc-14322a37-4"
            })(["font-size:20px;line-height:55px;height:55px;max-width:275px;border-radius:6px;&:hover{opacity:0.8;}"]), t.ZP = v
        },
        10666: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return A
                }
            });
            var a = n(87163),
                o = n(2784),
                r = n(24931),
                l = n(46168),
                i = n(72781),
                s = e => {
                    let t = 0;
                    if (e) {
                        let n = getComputedStyle(e).getPropertyValue("transform");
                        n && "none" !== n && (t = Math.round(new DOMMatrixReadOnly(n).m41))
                    }
                    return t
                },
                c = e => {
                    let t = "0";
                    return e && (t = getComputedStyle(e).getPropertyValue("object-position")), t
                },
                d = e => {
                    let {
                        totalDuration: t
                    } = e, n = i.mW.join(",");
                    return {
                        duration: t,
                        iterations: 1,
                        easing: "cubic-bezier(".concat(n, ")"),
                        fill: "forwards"
                    }
                },
                u = e => {
                    let {
                        element: t,
                        imageElement: n,
                        translateAmount: a,
                        totalDuration: o,
                        parallaxTranslateXVal: r,
                        isCarouselActive: l
                    } = e, u = d({
                        totalDuration: o
                    }), p = [], m = [];
                    if (t) {
                        if (l) {
                            let e = s(t);
                            p = [{
                                transform: "translate3d(".concat(e, "px, 0, 0)"),
                                offset: 0
                            }, {
                                transform: "translate3d(".concat(a, "px, 0, 0)"),
                                offset: 1
                            }], n && (m = [{
                                objectPosition: c(n),
                                offset: 0
                            }, {
                                objectPosition: "calc(50% + ".concat(-(a * i.l8 * 1) + r, "px) 50%"),
                                offset: 1
                            }])
                        } else p = [{
                            transform: "translate3d(0, 0, 0)"
                        }], n && (m = [{
                            objectPosition: "unset"
                        }])
                    }
                    return {
                        cardKeyframes: p,
                        imageKeyframes: m,
                        animationOptions: u
                    }
                },
                p = e => {
                    let {
                        element: t,
                        imageElement: n,
                        translateAmount: a,
                        totalDuration: o,
                        parallaxTranslateXVal: r,
                        isCarouselActive: l
                    } = e, u = d({
                        totalDuration: o
                    }), p = [], m = [];
                    if (t) {
                        let e = s(t);
                        l && o > 0 && 0 !== a ? (p = [{
                            transform: "translate3d(".concat(e, "px, 0, 0)"),
                            offset: 0
                        }, {
                            transform: "translate3d(".concat(a, "px, 0, 0)"),
                            offset: i.ft / o
                        }, {
                            transform: "translate3d(".concat(0, "px, 0, 0)"),
                            offset: 1
                        }], n && (m = [{
                            objectPosition: c(n),
                            offset: 0
                        }, {
                            objectPosition: "calc(50% + ".concat(-(a * i.l8 * 1), "px) 50%"),
                            offset: i.ft / o
                        }, {
                            objectPosition: "calc(50% + ".concat(r, "px) 50%"),
                            offset: 1
                        }])) : (p = [{
                            transform: "translate3d(0, 0, 0)"
                        }], n && (m = [{
                            objectPosition: "unset"
                        }]))
                    }
                    return {
                        cardKeyframes: p,
                        imageKeyframes: m,
                        animationOptions: u
                    }
                },
                m = e => {
                    let {
                        cardEls: t,
                        parallaxTranslateXVals: n,
                        isCarouselActive: a
                    } = e, [r, l] = (0, o.useState)(), [i, s] = (0, o.useState)(0), [c, d] = (0, o.useState)();
                    return (0, o.useEffect)(() => {
                        if ("number" == typeof r && "number" == typeof c) {
                            let e = [],
                                o = [];
                            c < 0 ? (e = t.slice(0, r + 1), o = t.slice(r)) : c > 0 ? (e = t.slice(r), o = t.slice(0, r + 1)) : o = t, o.forEach((e, t) => {
                                let o = c < 0 ? t + r : t;
                                if (e) {
                                    let t = e.querySelectorAll(".parallax img"),
                                        {
                                            cardKeyframes: r,
                                            imageKeyframes: l,
                                            animationOptions: s
                                        } = u({
                                            element: e,
                                            imageElement: t[0],
                                            translateAmount: 0,
                                            totalDuration: i,
                                            parallaxTranslateXVal: n[o],
                                            isCarouselActive: a
                                        });
                                    e.animate(r, s), t.forEach(e => {
                                        e.animate(l, s)
                                    })
                                }
                            }), e.forEach((e, t) => {
                                let o = c > 0 ? t + r : t;
                                if (e) {
                                    let t = e.querySelectorAll(".parallax img");
                                    if (i > 0) {
                                        let {
                                            cardKeyframes: r,
                                            imageKeyframes: l,
                                            animationOptions: s
                                        } = p({
                                            element: e,
                                            imageElement: t[0],
                                            translateAmount: c,
                                            totalDuration: i,
                                            parallaxTranslateXVal: n[o],
                                            isCarouselActive: a
                                        });
                                        e.animate(r, s), t.forEach(e => {
                                            e.animate(l, s)
                                        })
                                    } else {
                                        let {
                                            cardKeyframes: r,
                                            imageKeyframes: l,
                                            animationOptions: s
                                        } = u({
                                            element: e,
                                            imageElement: t[0],
                                            translateAmount: c,
                                            totalDuration: i,
                                            parallaxTranslateXVal: n[o],
                                            isCarouselActive: a
                                        });
                                        e.animate(r, s), t.forEach(e => {
                                            e.animate(l, s)
                                        })
                                    }
                                }
                            }), d(void 0)
                        }
                    }, [t, r, d, c, i, n]), [l, s, d]
                },
                h = e => {
                    let {
                        translateValue: t,
                        totalDuration: n,
                        currentPosition: a
                    } = e;
                    return [{
                        transform: "translate3d(".concat(a, "px, 0, 0)"),
                        offset: 0
                    }, {
                        transform: "translate3d(".concat(a, "px, 0, 0)"),
                        offset: n > 0 ? i.ft / n : .1
                    }, {
                        transform: "translate3d(".concat(t, "px, 0, 0)"),
                        offset: 1
                    }]
                },
                f = e => {
                    let {
                        parentElement: t,
                        totalDuration: n,
                        currentPosition: a,
                        translateValue: o
                    } = e;
                    if ("number" == typeof o) {
                        let e = h({
                                translateValue: o,
                                totalDuration: n,
                                currentPosition: a
                            }),
                            r = d({
                                totalDuration: n
                            });
                        t.animate(e, r), t.previousElementSibling && t.nextElementSibling && (t.previousElementSibling.animate(e, r), t.nextElementSibling.animate(e, r))
                    }
                },
                g = e => {
                    let t = e.querySelector("video");
                    t && "function" == typeof t.play && t.play().catch(e => {
                        console.error("Error playVideo():", e)
                    })
                },
                v = e => {
                    let {
                        parentElementRef: t,
                        cardEls: n,
                        parallaxTranslateXVals: a,
                        isCarouselActive: r,
                        isInfinite: l,
                        setActiveCardIdx: c
                    } = e, [d, u] = (0, o.useState)(), [p, h] = (0, o.useState)(0), [v, x] = (0, o.useState)(), [b, _] = (0, o.useState)(), [y, w] = (0, o.useState)(), [C, j, k] = m({
                        cardEls: n,
                        parallaxTranslateXVals: a,
                        isCarouselActive: r
                    });
                    return (0, o.useEffect)(() => {
                        let e = null == t ? void 0 : t.current,
                            a = e ? s(e) : 0;
                        if (e && "number" == typeof d && (n[d] || l) && void 0 !== v && v !== a) {
                            let t = p + i.ft;
                            f({
                                parentElement: e,
                                totalDuration: t,
                                currentPosition: a,
                                translateValue: v
                            });
                            let o = v - a;
                            C(Math.round(Math.abs(a / (null == e ? void 0 : e.scrollWidth) * n.length))), j(t), k(i.d0 * o), x(void 0), n[d] && g(n[d])
                        }
                    }, [d, p, v, n]), (0, o.useEffect)(() => {
                        let e = null == t ? void 0 : t.current;
                        e && "number" == typeof y && "number" == typeof b && setTimeout(() => {
                            let t = e ? s(e) : 0;
                            f({
                                parentElement: e,
                                totalDuration: 0,
                                currentPosition: t,
                                translateValue: b
                            }), n[y] && g(n[y]), c(y), u(y), _(void 0), w(void 0)
                        }, p + i.ft + 100)
                    }, [b, y, n]), [u, h, x, _, w]
                },
                x = e => {
                    let t, n, {
                            cardSet: a
                        } = e,
                        o = window.getComputedStyle(a).getPropertyValue("gap"),
                        r = a.scrollWidth + (parseInt(o) || 0);
                    if (t = a.previousElementSibling ? a.previousElementSibling : a.cloneNode(!0), n = a.nextElementSibling ? a.nextElementSibling : a.cloneNode(!0), t && n) {
                        var l, i;
                        t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.left = "-".concat(r, "px"), t.classList.add("carousel-clone"), t.querySelectorAll("li").forEach(e => {
                            e.style.opacity = "0.4"
                        }), t.querySelectorAll("a,button").forEach(e => {
                            e.setAttribute("tabindex", "-1")
                        }), n.setAttribute("aria-hidden", "true"), n.style.position = "absolute", n.style.left = "".concat(r, "px"), n.classList.add("carousel-clone"), n.querySelectorAll("li").forEach(e => {
                            e.style.opacity = "0.4"
                        }), n.querySelectorAll("a,button").forEach(e => {
                            e.setAttribute("tabindex", "-1")
                        }), null === (l = a.parentNode) || void 0 === l || l.prepend(t), null === (i = a.parentNode) || void 0 === i || i.append(n)
                    }
                },
                b = e => {
                    let {
                        containerWidth: t,
                        cardWidth: n,
                        mobileBreakpoint: a,
                        isInfinite: o,
                        gap: r
                    } = e, l = 0;
                    return (t >= a - (r || i.k1) || o) && (l = (t - n) / 2), l
                },
                _ = (e, t, n, a, o) => {
                    let r = 0;
                    if (e && t) {
                        let l = e.clientWidth,
                            s = 2 * (parseInt(window.getComputedStyle(t).getPropertyValue("border-width")) || 0),
                            c = (t.clientWidth || 0) + s,
                            d = parseInt(window.getComputedStyle(e).getPropertyValue("gap")),
                            u = b({
                                containerWidth: l,
                                cardWidth: c,
                                mobileBreakpoint: a,
                                isInfinite: o,
                                gap: d
                            });
                        r = Math.round(-1 * c * n + u - (d || i.k1) * n)
                    }
                    return r
                },
                y = e => {
                    let {
                        parentElementRef: t,
                        element: n,
                        index: a,
                        translateAmount: o
                    } = e;
                    return (_(t.current, n, a, i.vb, !1) - s(t.current) - o) * i.l8
                },
                w = e => {
                    let {
                        parentElementRef: t,
                        cardEls: n,
                        cardPosition: a
                    } = e, o = s(t.current), r = [];
                    return n.forEach((e, n) => {
                        let l = y({
                            parentElementRef: t,
                            element: e,
                            index: n,
                            translateAmount: a - o
                        });
                        r.push(l)
                    }), r
                },
                C = e => {
                    var t;
                    let {
                        cardSet: n
                    } = e;
                    null === (t = n.parentElement) || void 0 === t || t.querySelectorAll(".carousel-clone").forEach(e => {
                        e.remove()
                    })
                },
                j = e => {
                    e.querySelectorAll("li video").forEach(e => {
                        "function" == typeof e.pause && e.pause()
                    })
                },
                k = e => {
                    let {
                        parentElementRef: t,
                        cardEls: n,
                        activeCardIdx: s,
                        isMobileOnly: c,
                        isInfinite: d,
                        mobileBreakpoint: u,
                        setActiveCardIdx: p
                    } = e, m = (0, a.y1)(), [h, f] = (0, o.useState)([]), [g, b] = (0, o.useState)(!1), y = (0, l.Z)(), [k, N, I, E, S] = v({
                        parentElementRef: t,
                        cardEls: n,
                        parallaxTranslateXVals: h,
                        isCarouselActive: g,
                        isInfinite: d,
                        setActiveCardIdx: p
                    }), A = (0, o.useCallback)(() => {
                        (null == t ? void 0 : t.current) && (j(t.current), C({
                            cardSet: null == t ? void 0 : t.current
                        }), null == t || t.current.getAnimations().forEach(e => {
                            e.cancel()
                        })), I(0)
                    }, [t, I]), B = (0, o.useCallback)(() => {
                        var e, a;
                        let o = n[s] || n[0],
                            r = null == o ? void 0 : o.clientWidth,
                            l = null == t ? void 0 : null === (e = t.current) || void 0 === e ? void 0 : e.clientWidth,
                            p = null === (a = window) || void 0 === a ? void 0 : a.innerWidth,
                            h = !1;
                        if (!y && !m && (null == t ? void 0 : t.current) && "number" == typeof l && "number" == typeof r && n.length > 1 && (h = !c || p < u), b(h), h && (null == t ? void 0 : t.current)) {
                            let e;
                            j(t.current), d && x({
                                cardSet: null == t ? void 0 : t.current
                            }), k(s);
                            let a = _(t.current, o, s, u, d),
                                r = (s < 0 ? e = n.length + s : s >= n.length && (e = s - n.length), e);
                            if ("number" == typeof r) {
                                let e = n[r],
                                    a = _(t.current, e, r, u, d);
                                S(r), E(a)
                            }
                            f(w({
                                parentElementRef: t,
                                cardEls: n,
                                cardPosition: a
                            })), N(i.J5), I(a)
                        } else A()
                    }, [t, n, s, b, m]);
                    return (0, o.useEffect)(() => {
                        B();
                        let e = (0, r.Ds)(B, 100);
                        if (window) return window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, [B]), [h, g]
                },
                N = e => {
                    let {
                        parentElementRef: t,
                        cardEls: n,
                        activeCardIdx: a,
                        numberOfCards: r,
                        setActiveCardIdx: l,
                        parallaxTranslateXVals: c,
                        isCarouselActive: d,
                        isInfinite: u
                    } = e, [p, h] = (0, o.useState)(), [f, g] = (0, o.useState)(), [v, x] = (0, o.useState)(), [b, _] = (0, o.useState)(), [y, w, C] = m({
                        cardEls: n,
                        parallaxTranslateXVals: c,
                        isCarouselActive: d
                    });
                    return (0, o.useEffect)(() => {
                        if ((null == t ? void 0 : t.current) && b && d) {
                            if (y(a), v) {
                                let e = -((v - b) * 1) + s(n[a]);
                                w(0), C(e)
                            }
                            x(b)
                        }
                    }, [b, v, a, t, x, w, y, C, d]), (0, o.useEffect)(() => {
                        if ((null == t ? void 0 : t.current) && p && f && d) {
                            y(a), w(i.ft), C(0);
                            let e = Math.min(t.current.clientWidth * i.BD, 250),
                                n = p - f,
                                o = u || a + 1 < r,
                                s = u || a > 0;
                            n >= e && o ? l(a + 1) : n <= -1 * e && s && l(a - 1), h(void 0), g(void 0), x(void 0), _(void 0)
                        }
                    }, [t, f, l, h, g, x, _, y, w, C, d, u]), [h, g, _]
                },
                I = n(22031),
                E = e => {
                    let {
                        activeCardIdx: t
                    } = e;
                    (0, I.Q)({
                        bpWithContext: [{
                            event_name: "vimeo.learn_more",
                            contexts: {
                                action_context: {
                                    action_type: "toggle"
                                },
                                web_context: {},
                                product_analytics_context: {
                                    copy: "carousel_change_".concat(t),
                                    product: "onboarding",
                                    feature: "general",
                                    location: "body",
                                    element: "icon"
                                },
                                third_party_integration_context: {
                                    is_partner: !1,
                                    is_integration: !1
                                }
                            }
                        }]
                    })
                },
                S = e => {
                    let {
                        activeCardIdx: t
                    } = e, [n, a] = (0, o.useState)(!1);
                    (0, o.useEffect)(() => {
                        t > 0 && a(!0)
                    }, [t]), (0, o.useEffect)(() => {
                        (t > 0 || n) && E({
                            activeCardIdx: t
                        })
                    }, [t, n])
                },
                A = e => {
                    let {
                        activeCardIdx: t,
                        setActiveCardIdx: n,
                        cardContainerRef: r,
                        cards: l,
                        isMobileOnly: s = !1,
                        isInfinite: c = !1,
                        mobileBreakpoint: d = i.vb
                    } = e, u = (0, a.S1)(r, {
                        rootMargin: "0px",
                        threshold: 0,
                        freezeOnceVisible: !1
                    }), [p, m] = (0, o.useState)(!1), [h, f] = (0, o.useState)([]), v = (null == l ? void 0 : l.length) || 0;
                    S({
                        activeCardIdx: t
                    });
                    let [x, b] = k({
                        parentElementRef: r,
                        cardEls: h,
                        activeCardIdx: t,
                        setActiveCardIdx: n,
                        isMobileOnly: s,
                        isInfinite: c,
                        mobileBreakpoint: d
                    }), [_, y, w] = N({
                        parentElementRef: r,
                        cardEls: h,
                        activeCardIdx: t,
                        numberOfCards: v,
                        setActiveCardIdx: n,
                        parallaxTranslateXVals: x,
                        isCarouselActive: b,
                        isInfinite: c
                    }), C = e => {
                        y(e.clientX), setTimeout(() => m(!1), 1)
                    };
                    return (0, o.useEffect)(() => {
                        if ((null == r ? void 0 : r.current) && h && b && "number" == typeof t) {
                            if (null == u ? void 0 : u.isIntersecting) {
                                let e = t;
                                t > h.length - 1 ? e = t % h.length : t < 0 && (e = h.length - 1), g(h[e])
                            } else j(r.current)
                        }
                    }, [null == u ? void 0 : u.isIntersecting, b, t, h, r]), (0, o.useEffect)(() => {
                        var e;
                        f(Array.from((null == r ? void 0 : null === (e = r.current) || void 0 === e ? void 0 : e.children) || []))
                    }, [r]), {
                        handleMouseDown: e => _(e.clientX),
                        handleMouseUp: C,
                        handleMouseMove: e => {
                            e.buttons > 0 && b && (m(!0), w(e.clientX))
                        },
                        handleMouseLeave: e => {
                            C(e)
                        },
                        handleCardMouseEnter: e => {
                            e.buttons > 0 && (m(!0), _(e.clientX))
                        },
                        handleTouchStart: e => _(e.touches[0].clientX),
                        handleTouchEnd: e => y(e.changedTouches[0].clientX),
                        handleTouchMove: e => {
                            w(e.touches[0].clientX)
                        },
                        isDragging: p,
                        isCarouselActive: b
                    }
                }
        },
        72781: function(e, t, n) {
            n.d(t, {
                BD: function() {
                    return s
                },
                J5: function() {
                    return o
                },
                d0: function() {
                    return l
                },
                ft: function() {
                    return a
                },
                k1: function() {
                    return c
                },
                l8: function() {
                    return i
                },
                mW: function() {
                    return r
                },
                vb: function() {
                    return d
                }
            });
            let a = 67,
                o = 1e3,
                r = [.36, 0, .26, 1],
                l = .158,
                i = .17,
                s = .33,
                c = 16,
                d = 768
        },
        6033: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return ed
                }
            });
            var a, o, r, l, i, s, c = n(52322),
                d = n(87163),
                u = n(12524),
                p = n.n(u),
                m = n(2784),
                h = n(13364),
                f = n(37795),
                g = n(40621),
                v = n(33712),
                x = n(78437),
                b = n(72048),
                _ = n(22031),
                y = n(13516),
                w = n(6767),
                C = n(38007),
                j = n(71492);
            let k = e => {
                let {
                    label: t,
                    href: n,
                    bpWithContext: a,
                    index: o,
                    supportsLanguagePrefix: r
                } = e, {
                    locale: l
                } = (0, m.useContext)(C.RD), i = n ? "a" : "span", s = n ? (0, j.Ep)({
                    href: n,
                    supportsLanguagePrefix: r
                }, l) : n;
                return (0, c.jsx)(i, {
                    href: s,
                    className: p()("no-underline", {
                        "pt-6": o > 0
                    }),
                    onClick: () => n && a && (0, _.Q)({
                        bpWithContext: a
                    }),
                    children: (0, c.jsx)("h3", {
                        className: "text-display-mobile-8 py-3 ",
                        children: t
                    })
                })
            };

            function N(e) {
                let {
                    menuSections: t
                } = e, {
                    locale: n
                } = (0, m.useContext)(C.RD);
                return (0, c.jsx)("div", {
                    children: null == t ? void 0 : t.map((e, t) => {
                        let {
                            bpWithContext: a,
                            href: o,
                            label: r,
                            subMenuItems: l,
                            supportsLanguagePrefix: i = !1
                        } = e;
                        return (0, c.jsxs)("div", {
                            className: p()({
                                "pt-[0.875rem]": !r
                            }),
                            children: [r && (0, c.jsx)(k, {
                                bpWithContext: a,
                                href: o,
                                index: t,
                                label: r,
                                supportsLanguagePrefix: i
                            }), null == l ? void 0 : l.map((e, t) => {
                                let {
                                    bpWithContext: a,
                                    href: o,
                                    label: r,
                                    restrictToLanguages: l,
                                    supportsLanguagePrefix: i = !1
                                } = e;
                                if (l && n && !l.includes(n)) return null;
                                let s = (0, j.Ep)({
                                    href: o,
                                    supportsLanguagePrefix: i
                                }, n);
                                return (0, c.jsx)("a", {
                                    href: s,
                                    className: "no-underline flex gap-[1.563rem] items-center cursor-pointer text-footer-sub-content text-body-1 py-[0.625rem] font-normal hover:text-footer-hover-sub-content",
                                    onClick: () => a && (0, _.Q)({
                                        bpWithContext: a
                                    }),
                                    children: r
                                }, t)
                            })]
                        }, t)
                    })
                })
            }

            function I(e) {
                let {
                    theme: t,
                    additionalClasses: n
                } = e, {
                    globalFooter: a
                } = (0, y.QR)();
                return (0, c.jsx)("div", {
                    className: p()("w-full grid grid-cols-23 auto-rows-auto text-footer-content z-0 md:gap-y-4 ".concat(t), {
                        [n]: n
                    }),
                    children: (0, c.jsx)("div", {
                        className: "col-start-1 col-end-[-1]",
                        children: (0, c.jsx)(w.default, {
                            accordionItems: null == a ? void 0 : a.map(e => {
                                let {
                                    label: t,
                                    menuSections: n
                                } = e;
                                return {
                                    title: t,
                                    content: (0, c.jsx)(N, {
                                        menuSections: n
                                    })
                                }
                            }),
                            idPrefix: "footer-mobile-menu-accordion",
                            initialOpenedIndex: -1,
                            isFaq: !1,
                            semanticLevel: "h2",
                            theme: t
                        })
                    })
                })
            }
            var E = n(82876),
                S = n(10040),
                A = n(56614);

            function B(e) {
                let {
                    additionalClasses: t,
                    theme: n = "black",
                    isEnterpriseLandingPage: a
                } = e, o = (0, E.usePathname)(), {
                    strings: r
                } = (0, f.y)(), l = (0, g.Z)()(), i = null == o ? void 0 : o.includes("/ott"), s = i ? "/ott/pricing" : "/upgrade-plan", d = i ? "/ott/contact" : "/enterprise/contact-us", u = {
                    title: r("Get started for free"),
                    pricing: {
                        label: r("Pricing"),
                        bpWithContext: (0, A.h)({
                            eventNames: ["vimeo.footer_action", "vimeo.trigger_upsell", "vimeo.upsell_trigger_impression"],
                            location: "bottom",
                            copy: "pricing",
                            ...A.B,
                            feature: "general",
                            target: "upgrade_page",
                            target_path: "https://vimeo.com".concat(s)
                        })
                    },
                    contactSales: {
                        label: r("Contact Sales"),
                        bpWithContext: (0, A.h)({
                            eventNames: ["vimeo.footer_action", "vimeo.trigger_contact_sales"],
                            location: "bottom",
                            copy: "contact_sales",
                            action_type: "click",
                            target: "contact_sales",
                            target_path: "https://vimeo.com".concat(d, "?mkc=368tnc"),
                            element: "button",
                            feature: "general"
                        })
                    },
                    watchDemos: {
                        label: r("Watch Demos"),
                        bpWithContext: (0, A.h)({
                            eventNames: ["vimeo.footer_action", "vimeo.demo_action"],
                            copy: "watch_demo",
                            location: "bottom",
                            ...A.B,
                            feature: "general",
                            target: "marketing_landing_page_enterprise",
                            target_path: "https://vimeo.com/watch-demo",
                            flow: [{
                                event_name: "vimeo.demo_action",
                                flow: "watch_demo"
                            }]
                        })
                    },
                    cta: {
                        buttonTheme: "blue",
                        buttonVariant: "primary",
                        label: r("Join"),
                        href: "/enterprise/contact-us",
                        bpWithContext: (0, A.h)({
                            eventNames: ["vimeo.footer_action", "vimeo.trigger_auth_flow"],
                            action_type: "click",
                            location: "bottom",
                            copy: "join",
                            element: "button",
                            feature: "join",
                            auth_type: "join",
                            interface_type: "page",
                            flow: [{
                                event_name: "vimeo.footer_action",
                                flow: "join"
                            }, {
                                event_name: "vimeo.trigger_auth_flow",
                                flow: "join"
                            }]
                        })
                    }
                };
                a && (u.title = r("Book an Enterprise demo"), u.cta.label = r("Chat with an expert"));
                let m = {
                    title: r("24/7 customer support"),
                    description: r("Our customer support team is available to help 24/7. Enterprise members also receive dedicated account managers and a guaranteed uptime SLA."),
                    cta: {
                        buttonVariant: "primary",
                        href: "/help/contact",
                        label: r("Contact Support"),
                        bpWithContext: (0, A.h)({
                            eventNames: ["vimeo.footer_action", "vimeo.trigger_support"],
                            copy: "contact_support",
                            location: "bottom",
                            ...A.B,
                            feature: "general",
                            target: "contact_support_page",
                            target_path: "https://vimeo.com/help/contact"
                        })
                    }
                };
                return (0, c.jsxs)("div", {
                    "data-bp-location": "bottom",
                    className: p()("w-full grid grid-cols-23 text-footer-content z-0 md:py-0 md:gap-y-4 ".concat(n), {
                        [t]: t
                    }),
                    children: [(0, c.jsxs)("div", {
                        className: "flex flex-col col-start-3 col-end-[-3] gap-y-4 md:col-start-1 md:col-end-10",
                        children: [(0, c.jsx)("h4", {
                            className: p()("text-display-mobile-6 md:text-display-6"),
                            children: u.title
                        }), (0, c.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, c.jsx)(S.default, {
                                className: "no-underline cursor-pointer text-body-3 font-normal [&_.button-title]:hover:text-footer-hover-sub-content",
                                href: "https://vimeo.com".concat(s),
                                bpWithContext: u.pricing.bpWithContext,
                                variant: "minimal",
                                theme: "white" === n ? "light-gray" : "dark-gray",
                                label: u.pricing.label
                            }), (0, c.jsx)(S.default, {
                                className: "no-underline cursor-pointer text-body-3 font-normal [&_.button-title]:hover:text-footer-hover-sub-content",
                                href: "https://vimeo.com".concat(d),
                                bpWithContext: u.contactSales.bpWithContext,
                                variant: "minimal",
                                theme: "white" === n ? "light-gray" : "dark-gray",
                                label: u.contactSales.label
                            }), (0, c.jsx)(S.default, {
                                className: "no-underline cursor-pointer text-body-3 font-normal [&_.button-title]:hover:text-footer-hover-sub-content",
                                href: "https://vimeo.com/watch-demo",
                                bpWithContext: u.watchDemos.bpWithContext,
                                variant: "minimal",
                                theme: "white" === n ? "light-gray" : "dark-gray",
                                label: u.watchDemos.label
                            })]
                        }), (0, c.jsx)("div", {
                            className: p()("flex flex-col gap-3 [&_.button-inner]:w-full [&_.button-inner]:md:w-fit md:flex-row"),
                            children: l === g.z.LoggedOut && (0, c.jsx)(S.default, {
                                href: u.cta.href,
                                bpWithContext: u.cta.bpWithContext,
                                className: "cursor-pointer",
                                label: u.cta.label,
                                noPadding: !0,
                                theme: u.cta.buttonTheme,
                                variant: u.cta.buttonVariant
                            })
                        })]
                    }), (0, c.jsxs)("div", {
                        className: "flex flex-col pt-12 col-start-3 col-end-[-3] gap-y-4 md:col-start-13 md:col-end-[-1] md:pt-0 md:max-w-md",
                        children: [(0, c.jsx)("h4", {
                            className: p()("text-display-mobile-8 md:text-display-8"),
                            children: m.title
                        }), (0, c.jsx)("p", {
                            children: m.description
                        }), (0, c.jsx)("div", {
                            className: p()("flex flex-col pb-12 gap-3 [&_.button-inner]:w-full [&_.button-inner]:md:w-fit md:pb-0 md:flex-row"),
                            children: (0, c.jsx)(S.default, {
                                href: m.cta.href,
                                label: m.cta.label,
                                onClick: () => m.cta.bpWithContext && (0, _.Q)({
                                    bpWithContext: m.cta.bpWithContext
                                }),
                                theme: "white" === n ? "light-gray" : "dark-gray",
                                variant: m.cta.buttonVariant
                            })
                        })]
                    })]
                })
            }
            var P = n(84357),
                M = n(49811),
                W = n(35365),
                Z = n(65573),
                L = n(59544),
                V = n(77129),
                J = n(46700),
                O = n(54543),
                T = () => {
                    let [e, t] = (0, m.useState)(!1), {
                        strings: n
                    } = (0, f.y)(), {
                        airgap: a,
                        transcend: o
                    } = (0, V.iz)();
                    (0, m.useEffect)(() => {
                        var e;
                        a && (null === (e = a.getRegimes) || void 0 === e ? void 0 : e.call(a).has("CPRA")) && a.ready(() => {
                            t(!0)
                        })
                    }, [a]);
                    let r = () => {
                        (0, J.m7)({
                            component: "footer",
                            target: "transcend_dialogue_box",
                            keyword: "do_not_sell_my_personal_information",
                            container: "footer"
                        }), (0, _.Q)({
                            bpData: {
                                click: {
                                    location: "footer",
                                    target: "transcend_dialogue_box",
                                    name: "do_not_sell",
                                    copy: "do_not_sell_my_personal_information",
                                    feature: "do_not_sell",
                                    type: "general"
                                }
                            }
                        }), null == o || o.showConsentManager({
                            viewState: "DoNotSellExplainer"
                        })
                    };
                    return e ? (0, c.jsxs)("button", {
                        className: "relative no-underline border-none bg-transparent text-base text-footer-sub-content leading-[normal] cursor-pointer transition-colors duration-350 ease-in-out hover:text-footer-hover-sub-content flex items-center gap-1 p-0 m-0",
                        title: "Do not sell",
                        onClick: () => r(),
                        onKeyPress: e => {
                            "Enter" === e.key && r()
                        },
                        tabIndex: 0,
                        children: [n("Your Privacy Choices"), (0, c.jsx)(O.default, {})]
                    }) : null
                },
                R = n(24513),
                z = n(51115),
                F = n(24931);
            n(34406), [...b.a2].map(e => e.language), null === (a = b.a2.find(e => "de" === e.language)) || void 0 === a || a.language, null === (o = b.a2.find(e => "es" === e.language)) || void 0 === o || o.language, null === (r = b.a2.find(e => "jp" === e.language)) || void 0 === r || r.language, null === (l = b.a2.find(e => "pt-br" === e.language)) || void 0 === l || l.language, null === (i = b.a2.find(e => "ko" === e.language)) || void 0 === i || i.language, null === (s = b.a2.find(e => "fr" === e.language)) || void 0 === s || s.language;
            let D = b.a2.reduce((e, t) => ({
                ...e,
                [t.language]: t.locale
            }), {});
            b.a2.reduce((e, t) => ({
                ...e,
                [t.locale]: t.language
            }), {});
            let H = e => D[e] || b.k$.locale,
                Q = async (e, t) => {
                    let {
                        arg: n
                    } = t, {
                        locale: a,
                        token: o
                    } = n;
                    return await fetch("/settings/locale", {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "content-type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        body: JSON.stringify({
                            locale: a,
                            token: o
                        })
                    })
                };
            var q = () => {
                    let e = (0, m.useContext)(P.St),
                        {
                            trigger: t
                        } = (0, z.Z)("/userLocale", Q);
                    return (0, m.useCallback)(async n => {
                        if (e) try {
                            let a = (0, j.Y7)(n) || b.k$.language,
                                o = H(a);
                            (0, F.kh)(o), (await t({
                                locale: n,
                                token: e.xsrft
                            })).ok && (window.location.href = (0, j.dr)(window.location.pathname, a) + window.location.search)
                        } catch (e) {
                            console.error(e)
                        }
                    }, [t, e])
                },
                G = n(27135),
                U = n(37289),
                Y = n.n(U),
                X = n(26078),
                $ = n.n(X),
                K = n(64079),
                ee = n.n(K);
            let et = e => {
                    var t, n;
                    return null !== (n = null === (t = b.a2.find(t => t.locale == e)) || void 0 === t ? void 0 : t.label) && void 0 !== n ? n : b.k$.label
                },
                en = e => {
                    var t, n;
                    return null !== (n = null === (t = b.a2.find(t => t.label == e)) || void 0 === t ? void 0 : t.locale) && void 0 !== n ? n : e
                };

            function ea(e) {
                var t, n;
                let {
                    idPrefix: a
                } = e, o = (0, m.useContext)(C.RD), r = (0, F.ej)("language"), l = null !== (n = null !== (t = o.locale) && void 0 !== t ? t : r) && void 0 !== n ? n : b.k$.locale, i = q(), [s, d] = (0, m.useState)(et(l)), {
                    strings: u
                } = (0, f.y)();
                (0, m.useEffect)(() => {
                    d(et(l))
                }, [l]);
                let p = "".concat(a, "-language-selector");
                return (0, c.jsxs)("div", {
                    className: "flex items-center",
                    children: [(0, c.jsx)("p", {
                        id: p,
                        className: "text-body-3 font-normal pr-[0.625rem]",
                        children: (0, c.jsx)("a", {
                            href: "/languages",
                            children: "".concat(u("Language"), ":")
                        })
                    }), (0, c.jsxs)(R.fC, {
                        value: s,
                        onValueChange: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.k$.label;
                            i(en(e) || b.k$.locale), d(e), (0, _.Q)({
                                bpWithContext: (0, A.h)({
                                    copy: "language",
                                    action_type: "click",
                                    element: "dropdown",
                                    feature: "general",
                                    target: null,
                                    target_path: null
                                })
                            })
                        },
                        onOpenChange: () => {
                            (0, _.Q)({
                                bpWithContext: (0, A.h)({
                                    copy: "language",
                                    action_type: "expand",
                                    element: "dropdown",
                                    feature: "general",
                                    target: null,
                                    target_path: null
                                })
                            })
                        },
                        children: [(0, c.jsxs)(R.xz, {
                            "aria-labelledby": p,
                            className: 'w-[6.25rem] h-[1.625rem] flex justify-between gap-2 rounded-md bg-footer-background-light text-body-4 text-footer-sub-content items-center text-left border-0 outline-none relative pl-2 pr-[0.375rem] cursor-pointer [&[data-state="open"]_svg]:rotate-180',
                            children: [(0, c.jsx)(R.B4, {
                                "aria-label": s,
                                className: "text-left",
                                children: s
                            }), (0, c.jsx)(R.JO, {
                                className: "text-white items-end absolute right-1",
                                children: (0, c.jsx)(G.Z, {
                                    className: "transition-all duration-350 ease-in-out",
                                    width: "15px",
                                    height: "15px"
                                })
                            })]
                        }), (0, c.jsx)(R.h_, {
                            children: (0, c.jsx)(R.VY, {
                                asChild: !0,
                                position: "popper",
                                side: "bottom",
                                className: "text-body-4 text-footer-sub-content rounded-md",
                                children: (0, c.jsx)(R.l_, {
                                    className: "p-2 bg-footer-background-light w-full",
                                    children: b.a2.map(e => (0, c.jsx)(R.ck, {
                                        value: e.label,
                                        className: "".concat(Y().variable, " ").concat($().variable, " ").concat(ee().variable, " font-sans text-body-4 px-2 py-1 cursor-pointer transition-colors duration-350 ease-in-out hover:text-vimeo-blue"),
                                        children: (0, c.jsx)(R.eT, {
                                            children: e.label
                                        })
                                    }, e.language))
                                })
                            })
                        })]
                    })]
                })
            }
            let eo = "transition-colors duration-350 ease-in-out hover:text-vimeo-blue",
                er = [{
                    href: "https://www.instagram.com/vimeo/",
                    icon: (0, c.jsx)(W.Z, {
                        className: eo
                    }, "instagram"),
                    bpWithContext: (0, A.h)({
                        copy: "instagram",
                        ...A.B,
                        feature: "general",
                        target: "other",
                        target_path: "https://www.instagram.com/vimeo/"
                    })
                }, {
                    href: "https://www.twitter.com/Vimeo/",
                    icon: (0, c.jsx)(L.Z, {
                        className: eo
                    }, "twitter"),
                    bpWithContext: (0, A.h)({
                        copy: "twitter",
                        ...A.B,
                        feature: "general",
                        target: "other",
                        target_path: "https://www.twitter.com/Vimeo/"
                    })
                }, {
                    href: "https://www.facebook.com/Vimeo/",
                    icon: (0, c.jsx)(M.Z, {
                        className: eo
                    }, "facebook"),
                    bpWithContext: (0, A.h)({
                        copy: "facebook",
                        ...A.B,
                        feature: "general",
                        target: "other",
                        target_path: "https://www.facebook.com/Vimeo/"
                    })
                }, {
                    href: "https://www.linkedin.com/company/vimeo/",
                    icon: (0, c.jsx)(Z.Z, {
                        className: eo
                    }, "linkedIn"),
                    bpWithContext: (0, A.h)({
                        copy: "linkedin",
                        ...A.B,
                        feature: "general",
                        target: "other",
                        target_path: "https://www.linkedin.com/company/vimeo/"
                    })
                }],
                el = e => [{
                    label: e("Terms"),
                    title: "Vimeo terms",
                    href: "/terms",
                    bpWithContext: (0, A.h)({
                        copy: "terms",
                        ...A.B,
                        feature: "general",
                        target: "other",
                        target_path: "https://vimeo.com/terms"
                    })
                }, {
                    label: e("Privacy"),
                    title: "Vimeo privacy",
                    href: "/privacy",
                    bpWithContext: (0, A.h)({
                        copy: "privacy",
                        ...A.B,
                        feature: "general",
                        target: "other",
                        target_path: "https://vimeo.com/privacy"
                    })
                }, {
                    label: e("U.S. State Privacy"),
                    title: "U.S. state privacy",
                    href: "/privacy/us-state-privacy",
                    bpWithContext: (0, A.h)({
                        copy: "us_state_privacy",
                        ...A.B,
                        feature: "general",
                        target: "other",
                        target_path: "https://vimeo.com/privacy/us-state-privacy"
                    })
                }, {
                    label: e("Copyright"),
                    title: "Vimeo copyright",
                    href: "/dmca",
                    bpWithContext: (0, A.h)({
                        copy: "copyright",
                        ...A.B,
                        feature: "general",
                        target: "other",
                        target_path: "https://vimeo.com/dmca"
                    })
                }, {
                    label: e("Cookies"),
                    title: "Vimeo cookies",
                    href: "/cookie_policy",
                    bpWithContext: (0, A.h)({
                        copy: "cookies",
                        ...A.B,
                        feature: "general",
                        target: "other",
                        target_path: "https://vimeo.com/cookie_policy"
                    })
                }];

            function ei(e) {
                let {
                    theme: t,
                    additionalClasses: n,
                    languageIdPrefix: a = "global-footer"
                } = e, o = (0, m.useContext)(P.St), {
                    strings: r
                } = (0, f.y)(), l = (0, c.jsxs)(c.Fragment, {
                    children: ["\xa9 ", new Date().getFullYear(), " Vimeo.com, Inc. ", r("All rights reserved.")]
                }), i = (0, m.useMemo)(() => el(r), [r]);
                return (null == o ? void 0 : o.country) === "DE" && i.concat([{
                    label: "Impressum",
                    title: "Impressum",
                    href: "/leo/guidelines/impressum",
                    bpWithContext: (0, A.h)({
                        copy: "impressum",
                        ...A.B,
                        feature: "general",
                        target: "other",
                        target_path: "https://vimeo.com/leo/guidelines/impressum"
                    })
                }, {
                    label: "Vertr\xe4ge hier k\xfcndigen",
                    title: "Vertr\xe4ge hier k\xfcndigen",
                    href: "/cookie_policy",
                    bpWithContext: (0, A.h)({
                        copy: "cookies",
                        ...A.B,
                        feature: "general",
                        target: "other",
                        target_path: "https://vimeo.com/cookie_policy"
                    })
                }]), (0, c.jsxs)("div", {
                    className: p()("w-full text-footer-sub-content z-0 flex flex-col md:flex-row md:justify-between md:gap-4 ".concat(t), {
                        [n]: n
                    }),
                    children: [(0, c.jsxs)("div", {
                        className: "flex items-center gap-1 justify-between md:flex-row md:justify-start md:gap-6",
                        children: [(0, c.jsx)("div", {
                            className: "flex gap-3 md:gap-6",
                            children: er.map((e, t) => {
                                let {
                                    href: n,
                                    icon: a,
                                    bpWithContext: o
                                } = e;
                                return (0, c.jsx)("a", {
                                    href: n,
                                    className: "flex items-center hover:cursor-pointer",
                                    onClick: () => (0, _.Q)({
                                        bpWithContext: o
                                    }),
                                    children: a
                                }, t)
                            })
                        }), (0, c.jsx)(ea, {
                            idPrefix: a
                        })]
                    }), (0, c.jsxs)("p", {
                        className: "flex flex-col gap-1 pt-8 md:pt-0",
                        children: [l || "", (0, c.jsx)("span", {
                            className: "flex flex-wrap gap-1",
                            children: i.map((e, t) => {
                                let {
                                    href: n,
                                    label: a,
                                    title: o,
                                    bpWithContext: r
                                } = e;
                                return (0, c.jsx)("a", {
                                    title: o,
                                    href: n,
                                    className: p()("relative no-underline cursor-pointer transition-colors duration-350 ease-in-out inline-block hover:text-footer-hover-sub-content pr-2", {
                                        'before:content-[""] before:block before:absolute before:right-0 before:top-1/2 before:w-[1px] before:-translate-y-1/2 before:h-4 before:bg-footer-sub-content': t < i.length - 1,
                                        "pl-1": 0 !== t
                                    }),
                                    onClick: () => (0, _.Q)({
                                        bpWithContext: r
                                    }),
                                    children: a
                                }, t)
                            })
                        }), (0, c.jsx)(T, {})]
                    })]
                })
            }
            let es = e => {
                let {
                    label: t,
                    href: n,
                    bpWithContext: a,
                    supportsLanguagePrefix: o
                } = e, {
                    locale: r
                } = (0, C.PE)(), l = n ? "a" : "span", i = n ? (0, j.Ep)({
                    href: n,
                    supportsLanguagePrefix: o
                }, r) : n;
                return (0, c.jsx)(l, {
                    href: i,
                    className: p()("no-underline", {
                        "hover:text-footer-hover-sub-content": n
                    }),
                    onClick: () => n && a && (0, _.Q)({
                        bpWithContext: a
                    }),
                    children: (0, c.jsx)("span", {
                        className: "text-body-3 font-bold ",
                        children: t
                    })
                })
            };

            function ec(e) {
                let {
                    theme: t = "black",
                    additionalClasses: n
                } = e, {
                    locale: a
                } = (0, C.PE)(), {
                    globalFooter: o
                } = (0, y.QR)();
                return (0, c.jsx)("div", {
                    "data-bp-location": "footer",
                    className: p()("w-full grid grid-cols-23 auto-rows-auto text-footer-content z-0 md:gap-y-4 ".concat(t), {
                        [n]: n
                    }),
                    children: (0, c.jsx)("div", {
                        className: "flex gap-x-[2.1875rem] gap-y-24 col-start-1 col-end-[-1]",
                        children: null == o ? void 0 : o.map((e, t) => {
                            let {
                                menuSections: n,
                                label: o
                            } = e;
                            return (0, c.jsxs)("div", {
                                className: p()("flex flex-col gap-6", {
                                    "grow-[2]": 0 === t,
                                    "grow-[1]": t > 0
                                }),
                                children: [o && (0, c.jsx)("h5", {
                                    className: "text-display-8",
                                    children: o
                                }), (0, c.jsx)("div", {
                                    className: "flex gap-x-5",
                                    children: null == n ? void 0 : n.map((e, t) => {
                                        let {
                                            bpWithContext: n,
                                            href: o,
                                            label: r,
                                            subMenuItems: l,
                                            supportsLanguagePrefix: i = !1
                                        } = e;
                                        return (0, c.jsxs)("div", {
                                            className: "flex flex-col grow-[1] gap-1",
                                            children: [(0, c.jsx)(es, {
                                                bpWithContext: n,
                                                href: o,
                                                label: r,
                                                supportsLanguagePrefix: i
                                            }), null == l ? void 0 : l.map((e, t) => {
                                                let {
                                                    bpWithContext: n,
                                                    href: o,
                                                    label: r,
                                                    restrictToLanguages: l,
                                                    supportsLanguagePrefix: i = !1
                                                } = e;
                                                if (l && a && !l.includes(a)) return null;
                                                let s = (0, j.Ep)({
                                                    href: o,
                                                    supportsLanguagePrefix: i
                                                }, a);
                                                return (0, c.jsx)("a", {
                                                    href: s,
                                                    className: "no-underline block cursor-pointer text-footer-sub-content text-body-3 font-normal hover:text-footer-hover-sub-content",
                                                    onClick: () => n && (0, _.Q)({
                                                        bpWithContext: n
                                                    }),
                                                    children: r
                                                }, t)
                                            })]
                                        }, t)
                                    })
                                })]
                            }, t)
                        })
                    })
                })
            }

            function ed(e) {
                let {
                    theme: t
                } = e, [n, a] = (0, m.useState)(), [o, r] = (0, m.useState)(!1), {
                    strings: l
                } = (0, f.y)(), i = (0, g.Z)()(), s = (0, m.useRef)(null), u = (0, d.S1)(s, {
                    threshold: .3,
                    freezeOnceVisible: !1
                }), {
                    isPaidLandingPage: y,
                    isEnterpriseLandingPage: w
                } = (0, h.l)();
                (0, m.useEffect)(() => {
                    (null == u ? void 0 : u.isIntersecting) && (0, _.Q)({
                        bpWithContext: (0, A.h)({
                            eventNames: ["vimeo.footer_view"],
                            copy: null,
                            view_type: "impression",
                            feature: "general"
                        })
                    })
                }, [null == u ? void 0 : u.isIntersecting]);
                let C = (0, m.useCallback)(() => {
                    (0, _.Q)({
                        bpWithContext: (0, A.h)({
                            eventNames: ["vimeo.close_auth_flow"],
                            copy: "close",
                            location: "bottom",
                            feature: "join",
                            action_type: "click",
                            element: "button",
                            auth_type: "join",
                            interface_type: "modal",
                            flow: [{
                                event_name: "vimeo.close_auth_flow",
                                flow: "join"
                            }]
                        })
                    }), r(!1)
                }, []);
                return (0, m.useEffect)(() => {
                    o && i === g.z.LoggedOut && (0, _.Q)({
                        bpWithContext: (0, A.h)({
                            eventNames: ["vimeo.view_auth_flow"],
                            copy: "join",
                            feature: "join",
                            action_type: "click",
                            element: null,
                            location: "bottom",
                            auth_type: "join",
                            interface_type: "modal",
                            flow: [{
                                event_name: "vimeo.view_auth_flow",
                                flow: "join"
                            }]
                        })
                    })
                }, [o, i]), (0, c.jsxs)(x.Z, {
                    additionalClasses: p()("auto-rows-auto pt-component-2/3 pb-8 md:pt-component", {
                        "md:gap-y-component": !y
                    }),
                    theme: t,
                    element: "footer",
                    ref: s,
                    "data-bp-location": y ? "footer" : void 0,
                    children: [!y && (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(B, {
                            additionalClasses: "col-span-23 col-start-2 row-start-1",
                            theme: t,
                            isEnterpriseLandingPage: w,
                            setShowModal: r
                        }), (0, c.jsx)(I, {
                            additionalClasses: "grid col-span-23 col-start-2 row-start-2 md:hidden",
                            theme: t
                        }), (0, c.jsx)(ec, {
                            additionalClasses: "hidden col-span-23 col-start-2 row-start-2 md:grid",
                            theme: t
                        })]
                    }), (0, c.jsx)(ei, {
                        additionalClasses: p()("col-span-23 col-start-2 row-start-3", {
                            "pt-[5.75rem] md:pt-0": !y,
                            "pt-0": y
                        }),
                        theme: t
                    }), i === g.z.LoggedOut && !y && (0, c.jsx)(v.Z, {
                        type: b.N7.Join,
                        setType: () => a(b.N7.Join),
                        isOpen: o,
                        onClose: C,
                        redirectUrl: "/",
                        forceClientRedirect: !0,
                        title: l("Join Vimeo")
                    })]
                })
            }
        },
        52805: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var a = n(52322),
                o = n(12524),
                r = n.n(o),
                l = n(82876),
                i = n(2784),
                s = n(7375),
                c = n(87163),
                d = n(33712),
                u = n(78437),
                p = n(84369),
                m = n(72048),
                h = n(22031),
                f = n(13364),
                g = n(37795),
                v = n(10040),
                x = n(66077),
                b = n(86077),
                _ = n(76075),
                y = n(69640),
                w = n.n(y),
                C = n(13516),
                j = n(38007),
                k = n(58237);
            let N = e => {
                var t, n;
                return (null === (n = window) || void 0 === n ? void 0 : null === (t = n.location) || void 0 === t ? void 0 : t.pathname) === e ? "page" : "false"
            };
            var I = n(71492),
                E = n(75876),
                S = n(51252),
                A = n(43355);

            function B(e) {
                let {
                    imgSrc: t,
                    bynderImage: n,
                    vidSrc: o,
                    alt: l,
                    href: s,
                    icon: c,
                    label: d,
                    assetBlockIcon: u,
                    assetBlockIconPosition: p = "bottom-left",
                    additionalClasses: m,
                    target: h,
                    bpWithContext: f,
                    supportsLanguagePrefix: g
                } = e, v = (0, S.n)({
                    imageAsset: t,
                    bynderImage: n,
                    videoAsset: o,
                    altText: l
                }), x = s ? "a" : "div", {
                    locale: b
                } = (0, j.PE)(), _ = s ? (0, I.Ep)({
                    href: s,
                    supportsLanguagePrefix: !!g
                }, b) : void 0;
                return (0, a.jsx)(x, {
                    onClick: e => (0, A.N)(e, {
                        bpWithContext: f,
                        targetPath: null != _ ? _ : null
                    }),
                    ...s && {
                        href: _,
                        target: h,
                        className: "no-underline ".concat(m)
                    },
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-12",
                        children: [(0, a.jsx)(E.Z, {
                            ...v,
                            assetClasses: r()("relative w-full h-auto rounded-standard"),
                            children: u && i.cloneElement(u, {
                                className: r()("absolute", {
                                    "left-4 bottom-4": "bottom-left" === p,
                                    "left-4 top-4": "top-left" === p
                                })
                            })
                        }), (c || d) && (0, a.jsxs)("div", {
                            className: "flex flex-col text-display-8 gap-6 md:flew-row",
                            children: [c, d]
                        })]
                    })
                })
            }
            let P = e => {
                    var t, n;
                    let {
                        index: o,
                        isActiveSubMenu: l,
                        navSectionClasses: c,
                        section: d,
                        subMenuColumns: u,
                        id: p
                    } = e, {
                        bpWithContext: m,
                        featureBlock: f,
                        href: b,
                        label: _,
                        subMenuItems: y,
                        supportsLanguagePrefix: w = !1
                    } = d, {
                        locale: C
                    } = (0, i.useContext)(j.RD), k = !_, {
                        isSmallScreen: E,
                        theme: S
                    } = (0, s.m)(), A = (0, i.useRef)(null), [P, M] = (0, i.useState)(0), {
                        strings: W
                    } = (0, g.y)(), Z = W("New");
                    (0, i.useEffect)(() => {
                        var e;
                        M((null === (e = A.current) || void 0 === e ? void 0 : e.offsetHeight) || 0)
                    }, [l]);
                    let L = null !== (t = null == u ? void 0 : u.some(e => e.length > 1)) && void 0 !== t && t,
                        V = {};
                    L && !E && (V = {
                        style: {
                            paddingBottom: ((null !== (n = null == u ? void 0 : u.reduce((e, t) => {
                                var n, a, o;
                                return Math.max(e, null !== (o = null === (a = t[0]) || void 0 === a ? void 0 : null === (n = a.subMenuItems) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0)
                            }, 0)) && void 0 !== n ? n : 0) - ((null == y ? void 0 : y.length) || 0)) * (P + 20)
                        }
                    });
                    let J = b ? "a" : "span",
                        O = b ? (0, I.Ep)({
                            href: b,
                            supportsLanguagePrefix: w
                        }, C) : b;
                    return (0, a.jsx)("div", {
                        className: r()("flex flex-col", {
                            [c]: E
                        }),
                        ...V,
                        children: f ? (0, a.jsx)(B, {
                            additionalClasses: "col-start-2 col-end-[-2]",
                            ...f
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [_ && (0, a.jsx)(J, {
                                href: O,
                                id: p,
                                className: r()("text-display-mobile-8 whitespace-nowrap pb-6 nav-xl:text-display-8 no-underline col-start-3 col-end-[-3]", {
                                    "transition hover:text-global-nav-hover-content hover:before:delay-350 hover:after:left-0": b
                                }, {
                                    "md:mt-16": o > 0
                                }),
                                onClick: () => m && (0, h.Q)({
                                    bpWithContext: m
                                }),
                                children: _
                            }), (0, a.jsx)("ul", {
                                "aria-labelledby": p,
                                className: "flex flex-col gap-5 col-start-3 col-end-[-3]",
                                children: null == y ? void 0 : y.map((e, t) => {
                                    let {
                                        bpWithContext: n,
                                        href: o,
                                        icon: l,
                                        isNew: s,
                                        label: c,
                                        restrictToLanguages: d,
                                        supportsLanguagePrefix: u = !1,
                                        target: p = x.hr
                                    } = e;
                                    if (d && C && !d.includes(C)) return null;
                                    let m = (0, I.Ep)({
                                        href: o,
                                        supportsLanguagePrefix: u
                                    }, C);
                                    return (0, a.jsxs)("li", {
                                        className: "flex flex-row",
                                        ...0 === t && {
                                            ref: A
                                        },
                                        children: [(0, a.jsx)(v.default, {
                                            href: m,
                                            bpWithContext: n,
                                            className: r()("text-global-nav-sub-content flex-row-reverse whitespace-nowrap [&>svg]:my-[0.438rem] group-hover:[&_.button-title]:text-global-nav-hover-content [&_.button-title]:text-global-nav-sub-content", {
                                                "text-display-8 gap-6": k,
                                                "!text-body-1 gap-2": !k
                                            }),
                                            "aria-current": N(m),
                                            target: p,
                                            label: c,
                                            icon: i.cloneElement(l, {
                                                className: r()({
                                                    "w-5 h-5": !k,
                                                    "w-12 h-12": k
                                                })
                                            }),
                                            theme: "white" === S ? "white" : "black",
                                            variant: "minimal"
                                        }), s && (0, a.jsxs)(a.Fragment, {
                                            children: ["\xa0", (0, a.jsx)("sup", {
                                                className: "text-small-print text-global-nav-hover-content",
                                                children: Z
                                            })]
                                        })]
                                    }, t)
                                })
                            })]
                        })
                    })
                },
                M = e => {
                    let {
                        column: t,
                        isActiveSubMenu: n,
                        subMenuColumns: o,
                        id: l
                    } = e, {
                        isSmallScreen: i
                    } = (0, s.m)(), c = t.some(e => e.featureBlock), d = r()("bg-global-nav-background-accent rounded-standard w-full grid grid-cols-23", "nav-xl:block nav-xl:bg-transparent nav-xl:hover:bg-global-nav-background-accent", {
                        "pt-4 pb-16 nav-xl:py-[3.75rem] nav-xl:px-14": c,
                        "py-10 nav-xl:py-16 nav-xl:px-[3rem]": !c
                    });
                    return (0, a.jsx)("li", {
                        className: r()("flex flex-col gap-4", {
                            [d]: !i
                        }),
                        role: "menuitem",
                        children: t.map((e, t) => (0, a.jsx)(P, {
                            index: t,
                            isActiveSubMenu: n,
                            navSectionClasses: d,
                            section: e,
                            subMenuColumns: o,
                            id: "".concat(l, "-section-").concat(t)
                        }, t))
                    })
                };
            var W = (0, i.forwardRef)(function(e, t) {
                let {
                    id: n,
                    isActiveSubMenu: o,
                    subMenuColumns: l
                } = e, {
                    setSubMenuOpenIndex: c,
                    isSmallScreen: d
                } = (0, s.m)(), u = (0, i.useRef)(null);
                return (0, i.useEffect)(() => {
                    if (o && d && u.current) {
                        var e;
                        null === (e = u.current) || void 0 === e || e.focus()
                    }
                }, [o, d]), (0, a.jsx)("div", {
                    id: n,
                    className: r()("w-full  grid-cols-25 bg-global-nav-background rounded-standard", "nav-xl:absolute nav-xl:top-global-nav nav-xl:left-0", {
                        hidden: !o,
                        grid: o
                    }),
                    onBlur: e => {
                        e.currentTarget.contains(e.relatedTarget) || null == c || c(void 0)
                    },
                    "data-active": o ? "true" : "false",
                    ref: t,
                    children: l && (0, a.jsx)("ul", {
                        ref: u,
                        role: "menu",
                        className: "col-start-2 col-end-[-2] flex flex-col gap-4 nav-xl:col-start-1 nav-xl:col-end-neg-1 nav-xl:flex-row",
                        "data-active": o ? "true" : "false",
                        children: null == l ? void 0 : l.map((e, t) => (0, a.jsx)(M, {
                            column: e,
                            isActiveSubMenu: o,
                            subMenuColumns: l,
                            id: "".concat(n, "-column-").concat(t)
                        }, t))
                    })
                })
            });

            function Z(e) {
                let {
                    label: t,
                    isActiveSubMenu: n,
                    isSubMenuOpen: o
                } = e;
                return (0, a.jsx)("span", {
                    className: r()("col-start-6 col-end-[21] text-display-mobile-5 justify-center text-center pb-14 nav-xl:hidden", {
                        flex: n,
                        hidden: !o
                    }),
                    children: t
                })
            }
            let L = e => e.map(e => ({
                ...e,
                contexts: {
                    ...e.contexts,
                    action_context: {
                        ...e.contexts.action_context,
                        action_type: "hover"
                    }
                }
            }));
            var V = n(68350);

            function J(e) {
                let {
                    item: t,
                    index: n,
                    ariaControl: o,
                    isActiveSubMenu: l
                } = e, {
                    bpWithContext: c,
                    href: d,
                    label: u,
                    isSeoOnlyHref: p = !1,
                    supportsLanguagePrefix: m = !1,
                    target: f = x.hr
                } = t, {
                    locale: g
                } = (0, i.useContext)(j.RD), {
                    setSubMenuOpenIndex: b,
                    subMenuOpenIndex: _,
                    isMenuOpen: y,
                    isSmallScreen: w,
                    theme: C
                } = (0, s.m)(), [k, E] = (0, i.useState)(null), S = void 0 !== _, A = () => {
                    w || null == b || b(n)
                };
                if (d && !p) {
                    let e = (0, I.Ep)({
                        href: d,
                        supportsLanguagePrefix: m
                    }, g);
                    return (0, a.jsx)(v.default, {
                        className: "cursor-pointer text-display-mobile-7 col-start-3 col-end-[-3] items-start nav-xl:items-center w-fit max-w-full nav-xl:text-body-3",
                        href: e,
                        target: f,
                        onClick: () => null == b ? void 0 : b(void 0),
                        label: u,
                        variant: "minimal",
                        theme: C,
                        parentTheme: C,
                        bpWithContext: c,
                        "aria-current": N(e),
                        onMouseEnter: () => {
                            w || null == b || b(void 0)
                        }
                    })
                }
                return (0, a.jsx)("div", {
                    className: r()("nav-xl:block", "".concat(O), {
                        block: !S,
                        hidden: S
                    }),
                    "data-active": l ? "true" : "false",
                    children: (0, a.jsx)(v.default, {
                        className: "cursor-pointer text-display-mobile-7 nav-xl:text-body-3 w-full col-start-3 col-end-[-3] flex items-center !justify-between relative z-0 hover:bg-transparent bg-transparent rounded-xl nav-xl:rounded-none nav-xl:h-full",
                        "aria-controls": o,
                        "aria-expanded": n === _ ? "true" : "false",
                        "aria-haspopup": "true",
                        bpWithContext: c,
                        isSeoOnlyHref: p,
                        ...p && d && {
                            href: d
                        },
                        label: u,
                        theme: C,
                        parentTheme: C,
                        variant: "minimal",
                        icon: (0, a.jsx)(V.Z, {
                            className: r()("block text-inherit w-8 h-8", "nav-xl:w-5 nav-xl:h-5 nav-xl:transition-all nav-xl:duration-350 nav-xl:ease-in-out", {
                                "nav-xl:origin-center nav-xl:!-rotate-90": _ === n,
                                "nav-xl:rotate-90": _ !== n
                            })
                        }),
                        onClick: () => {
                            null == b || b(e => e === n ? void 0 : n)
                        },
                        onMouseEnter: () => {
                            y ? (A(), (0, h.Q)({
                                bpWithContext: L(c)
                            })) : E(setTimeout(() => {
                                A(), (0, h.Q)({
                                    bpWithContext: L(c)
                                })
                            }, 250))
                        },
                        onMouseLeave: () => {
                            k && clearTimeout(k)
                        }
                    })
                })
            }
            let O = 'xl:z-0 xl:relative xl:h-full xl:[&>*]:h-full xl:cursor-pointer xl:before:z-[-1] xl:before:content-[""] xl:before:block xl:before:w-[calc(100%+(0.65rem*2))] xl:before:h-full xl:hover:before:bg-global-nav-hover-background-accent [&[data-active="true"]]:xl:before:bg-global-nav-hover-background-accent xl:before:absolute xl:before:top-1/2 xl:before:left-1/2 xl:before:-translate-x-1/2 xl:before:-translate-y-1/2 xl:before:rounded-xl xl:transition-all xl:duration-350 xl:ease-in-out';

            function T(e) {
                var t, n;
                let {
                    additionalClasses: o
                } = e, {
                    strings: l
                } = (0, g.y)(), c = (0, b.Hu)(l), {
                    locale: d
                } = (0, i.useContext)(j.RD), {
                    isMenuOpen: u,
                    isSmallScreen: p,
                    setSubMenuOpenIndex: m,
                    subMenuOpenIndex: h,
                    subMenuIdPrefix: f
                } = (0, s.m)(), v = void 0 !== h, x = w()(_.Z), y = null == x ? void 0 : null === (n = x.theme) || void 0 === n ? void 0 : null === (t = n.height) || void 0 === t ? void 0 : t["global-nav"], {
                    globalNavigation: N
                } = (0, C.QR)(), I = (0, i.useMemo)(() => null == N ? void 0 : N.filter(e => {
                    let {
                        restrictToLanguages: t
                    } = e;
                    return !(t && d && !t.includes(d))
                }), [d, N]), [E, S] = (0, i.useState)(null), A = (0, i.useRef)(null), B = (0, i.useRef)(null), P = () => {
                    p || null == m || m(void 0)
                };
                return (0, a.jsxs)("div", {
                    style: {
                        maxHeight: "calc(100vh - ".concat(y, ")")
                    },
                    className: r()("pb-4 flex flex-col overflow-y-auto gap-4 bg-global-nav-background w-full pointer-events-auto nav-xl:bg-transparent nav-xl:pb-0 nav-xl:self-stretch", {
                        [o]: o
                    }),
                    tabIndex: 0,
                    children: [(0, a.jsx)("ul", {
                        role: "menu",
                        "aria-label": c.mainMenu,
                        className: r()("grid grid-cols-25 w-full pt-12 gap-y-10  rounded-[2.5rem] list-none items-center nav-xl:bg-transparent nav-xl:rounded-none nav-xl:flex nav-xl:gap-6 nav-xl:p-0 nav-xl:h-full", {
                            "bg-global-nav-background-accent pb-12": !v
                        }),
                        ref: A,
                        onMouseEnter: () => {
                            E && clearTimeout(E)
                        },
                        onMouseLeave: e => {
                            S(setTimeout(() => {
                                let t = e.relatedTarget;
                                if (t instanceof Node) {
                                    var n, a;
                                    !u || !A.current || !B.current || (null === (n = A.current) || void 0 === n ? void 0 : n.contains(t)) || (null === (a = B.current) || void 0 === a ? void 0 : a.contains(t)) || P()
                                }
                            }, 500))
                        },
                        children: I.map((e, t) => {
                            let {
                                href: n,
                                isSeoOnlyHref: o,
                                label: l,
                                subMenuColumns: i
                            } = e, s = h === t, c = "".concat(f, "-").concat(t);
                            return n && !o ? (0, a.jsx)("li", {
                                className: r()("col-start-3 col-end-[-3] ".concat(O, " nav-xl:flex"), {
                                    block: !v,
                                    hidden: v
                                }),
                                role: "menuitem",
                                "data-active": s ? "true" : "false",
                                children: (0, a.jsx)(J, {
                                    item: e
                                })
                            }, t) : (0, a.jsxs)("li", {
                                className: r()("nav-xl:col-start-[unset] nav-xl:col-end-[unset] nav-xl:h-full nav-xl:list-item", {
                                    "list-item col-start-2 col-end-[-2]": s,
                                    "col-start-3 col-end-[-3]": !v,
                                    hidden: v && !s
                                }),
                                role: "menuitem",
                                "data-active": s ? "true" : "false",
                                children: [(0, a.jsx)(J, {
                                    ariaControl: c,
                                    index: t,
                                    isActiveSubMenu: s,
                                    item: e
                                }), l && (0, a.jsx)(Z, {
                                    isActiveSubMenu: s,
                                    isSubMenuOpen: s,
                                    label: l
                                }), (0, a.jsx)(W, {
                                    isActiveSubMenu: s,
                                    id: c,
                                    subMenuColumns: i,
                                    ref: B
                                })]
                            }, t)
                        })
                    }), (0, a.jsx)("div", {
                        className: r()("col-start-3 col-end-[-3] w-full nav-xl:hidden", {
                            block: !v,
                            hidden: v
                        }),
                        children: (0, a.jsx)(k.ZP, {
                            isLargeGetStarted: !0
                        })
                    })]
                })
            }
            var R = n(3263);

            function z() {
                let {
                    theme: e
                } = (0, s.m)();
                return (0, a.jsx)("a", {
                    className: "inline-flex",
                    href: "/",
                    target: "_self",
                    onClick: () => (0, h.Q)({
                        bpWithContext: x.P4
                    }),
                    children: (0, a.jsx)(R.Z, {
                        className: r()({
                            "[&_path]:!fill-black": e && ["light-gray", "white"].includes(e),
                            "[&_path]:fill-white": !e || "black" === e
                        })
                    })
                })
            }

            function F() {
                let e = (0, l.usePathname)(),
                    {
                        strings: t
                    } = (0, g.y)(),
                    {
                        theme: n
                    } = (0, s.m)(),
                    {
                        isPaidLandingPage: o
                    } = (0, f.l)(),
                    r = (0, b.Hu)(t),
                    i = (null == e ? void 0 : e.includes("/ott")) ? "/ott/contact?mkc=368tnc" : "/enterprise/contact-us?mkc=368tnc";
                return (0, a.jsxs)("nav", {
                    className: "inline-flex w-full col-start-2 items-center justify-between",
                    children: [(0, a.jsxs)("div", {
                        className: "flex",
                        children: [(0, a.jsx)(z, {}), !o && (0, a.jsx)(T, {
                            id: "global-nav-toc",
                            additionalClasses: "hidden nav-xl:flex nav-xl:px-4 nav-xl:overflow-x-hidden"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [!o && (0, a.jsx)(v.default, {
                            className: "text-body-2",
                            variant: "minimal",
                            theme: "black" === n ? "black" : "white",
                            label: r.contactSales,
                            href: i,
                            bpWithContext: (0, x.hJ)({
                                eventNames: ["vimeo.top_nav_bar_action", "vimeo.trigger_contact_sales"],
                                copy: "contact_sales",
                                action_type: "click",
                                target: "contact_sales",
                                target_path: "https://vimeo.com".concat(i),
                                element: "button",
                                feature: "general"
                            }),
                            disableHover: !0
                        }), (0, a.jsx)(k.ZP, {})]
                    })]
                })
            }
            var D = n(26572),
                H = n(81859),
                Q = n(68004);

            function q(e) {
                let {
                    isMenuOpen: t,
                    setIsMenuOpen: n
                } = e, {
                    strings: o
                } = (0, g.y)(), l = "h-6 w-6", {
                    subMenuOpenIndex: i,
                    theme: c
                } = (0, s.m)(), d = (0, b.Hu)(o);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(v.default, {
                        id: "global-nav-mobile-menu",
                        className: "[&_.button-title]:sr-only cursor-pointer",
                        variant: "minimal",
                        theme: c,
                        type: "button",
                        icon: t ? (0, a.jsx)(H.default, {
                            className: l
                        }) : (0, a.jsx)(Q.default, {
                            className: l
                        }),
                        onClick: () => n(e => !e),
                        label: t ? d.closeMenu : d.openMenu,
                        "aria-expanded": t ? "true" : "false",
                        "aria-controls": "global-nav-mobile-toc"
                    }), (0, a.jsx)(T, {
                        additionalClasses: r()("absolute top-global-nav left-0", {
                            hidden: !t,
                            block: t || void 0 !== i
                        })
                    })]
                })
            }

            function G(e) {
                let {
                    isMenuOpen: t,
                    setIsMenuOpen: n
                } = e, {
                    strings: o
                } = (0, g.y)(), l = (0, b.Hu)(o), {
                    subMenuOpenIndex: i,
                    setSubMenuOpenIndex: c,
                    theme: d
                } = (0, s.m)(), {
                    isPaidLandingPage: u
                } = (0, f.l)(), p = void 0 !== i && !u;
                return (0, a.jsxs)(a.Fragment, {
                    children: [!p && (0, a.jsx)("nav", {
                        className: "inline-flex w-fit col-start-2",
                        children: (0, a.jsx)(z, {})
                    }), (0, a.jsxs)("div", {
                        className: "flex grow-[1] justify-between",
                        children: [(0, a.jsxs)("div", {
                            className: r()("flex gap-2 w-full", {
                                "justify-end pr-1": !p,
                                "justify-start pl-1": p
                            }),
                            children: [!p && (0, a.jsx)(k.ZP, {}), p && (0, a.jsx)(v.default, {
                                className: "[&_.button-title]:sr-only cursor-pointer",
                                variant: "minimal",
                                theme: d,
                                onClick: () => null == c ? void 0 : c(void 0),
                                label: l.goBack,
                                icon: (0, a.jsx)(D.default, {
                                    className: "-scale-[1]"
                                })
                            })]
                        }), !u && (0, a.jsx)(q, {
                            isMenuOpen: t,
                            setIsMenuOpen: n
                        })]
                    })]
                })
            }

            function U(e) {
                var t;
                let {
                    theme: n = "black"
                } = e, o = (0, l.usePathname)(), f = (0, c.yF)(), [g, v] = (0, i.useState)(!1), [b, _] = (0, i.useState)(void 0), [y, w] = (0, i.useState)(), [C, j] = (0, i.useState)(!1), k = (0, i.useContext)(p.pI), N = void 0 !== b, {
                    isUnder1280: I
                } = (0, c.w_)(), E = /\/blog\/?/g.test(null != o ? o : "") || ["blog-posts", "blog-page", "blog-tags", "blog-categories", "blog-authors"].includes(null !== (t = null == f ? void 0 : f.get("model")) && void 0 !== t ? t : "");
                (0, i.useEffect)(() => {
                    I && !g && _(void 0), I || v(!!N)
                }, [g, I, N]), (0, i.useEffect)(() => {
                    y && (v(!1), _(void 0))
                }, [y]);
                let S = (0, i.useCallback)(() => {
                    y && (0, h.Q)({
                        bpWithContext: (0, x.hJ)({
                            eventNames: ["vimeo.close_auth_flow"],
                            copy: "close",
                            feature: y,
                            action_type: "click",
                            element: "button",
                            auth_type: y,
                            interface_type: "modal",
                            flow: [{
                                event_name: "vimeo.close_auth_flow",
                                flow: y
                            }]
                        })
                    }), C && w(void 0), j(!1)
                }, [C, y]);
                return (0, i.useEffect)(() => {
                    y && j(!0)
                }, [y]), (0, i.useEffect)(() => {
                    C && y && (0, h.Q)({
                        bpWithContext: (0, x.hJ)({
                            eventNames: ["vimeo.view_auth_flow"],
                            copy: "login" === y ? "log_in" : y,
                            feature: y,
                            action_type: "click",
                            element: null,
                            auth_type: y,
                            interface_type: "modal",
                            flow: [{
                                event_name: "vimeo.view_auth_flow",
                                flow: y
                            }]
                        })
                    })
                }, [C, y]), (0, a.jsxs)(s.Z, {
                    subMenuOpenIndex: b,
                    setSubMenuOpenIndex: _,
                    isMenuOpen: g,
                    isSmallScreen: I,
                    subMenuIdPrefix: I ? "global-mobile-nav" : "global-desktop-nav",
                    theme: n,
                    setModalType: w,
                    children: [g && (0, a.jsx)("div", {
                        className: "z-global-nav-overlay fixed w-screen h-screen top-0 backdrop-blur-2xl cursor-pointer",
                        onClick: () => {
                            v(!1), _(void 0)
                        }
                    }), (0, a.jsxs)("div", {
                        "data-bp-location": "top_navigation_bar",
                        className: "global-nav bg-global-nav-background h-global-nav ".concat(n),
                        children: [E ? null : (0, a.jsx)("div", {
                            className: "global-nav-inner h-global-nav",
                            children: (0, a.jsx)("div", {
                                "aria-hidden": !0,
                                className: r()("z-global-nav-overlay w-full fixed top-0 h-global-nav [&>*]:h-full bg-container-background ".concat(n, " opacity-30 rounded-b-3.5xl"))
                            })
                        }), (0, a.jsx)("header", {
                            className: r()("z-global-nav w-full top-0 h-global-nav flex items-center [&>*]:h-full backdrop-blur-2xl ".concat(n), {
                                "bg-global-nav-background rounded-none nav-xl:bg-[unset] nav-xl:rounded-b-3.5xl": g || N,
                                "bg-global-nav-underlay": !g && !N,
                                "rounded-b-3.5xl": !g,
                                fixed: !E,
                                absolute: E
                            }),
                            onKeyDown: e => {
                                e.currentTarget.contains(null == e ? void 0 : e.relatedTarget) || "Escape" !== e.key || (_(void 0), v(!1))
                            },
                            children: (0, a.jsx)(u.Z, {
                                element: "div",
                                transparent: !0,
                                additionalClasses: "relative py-3 h-full content-center",
                                children: (0, a.jsxs)("div", {
                                    className: "col-start-2 col-end-[-2] flex gap-1 text-global-nav-content items-center justify-between ".concat(n),
                                    children: [I && (0, a.jsx)(G, {
                                        isMenuOpen: g,
                                        setIsMenuOpen: v
                                    }), !I && (0, a.jsx)(F, {})]
                                })
                            })
                        })]
                    }), y ? (0, a.jsx)(d.Z, {
                        type: y,
                        setType: e => w(e),
                        isOpen: C,
                        onClose: S,
                        redirectUrl: k.redirectUrl,
                        forceClientRedirect: !0,
                        title: y === m.N7.Login ? k.loginModalTitle : k.joinModalTitle
                    }) : null]
                })
            }
        },
        58237: function(e, t, n) {
            n.d(t, {
                ZP: function() {
                    return es
                },
                fE: function() {
                    return el
                },
                KZ: function() {
                    return ei
                }
            });
            var a = n(52322),
                o = n(2784),
                r = n(7375),
                l = n(13364),
                i = n(37795),
                s = n(40621),
                c = n(10040),
                d = n(86077),
                u = n(35505),
                p = n(51115),
                m = n(32188);
            let h = () => {
                let {
                    trigger: e
                } = (0, p.Z)("/logout", m.TX);
                return {
                    logout: async t => {
                        let n = await e({
                            xsrft: t
                        });
                        (null == n ? void 0 : n.ok) ? window.location.href = "/": console.error("logout unsuccessful")
                    }
                }
            };
            var f = n(29815),
                g = n(84357),
                v = n(72048),
                x = n(46700),
                b = n(73020),
                _ = n(44369),
                y = n(86233),
                w = n(53861),
                C = e => {
                    let {
                        color: t = v.O9.astroGranite,
                        height: n = "20px",
                        width: o = "20px"
                    } = e;
                    return (0, a.jsx)(w.Z, {
                        width: o,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, a.jsx)("path", {
                            d: "M7 20H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM2 2v16h5V2zM18 9h-5a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2zm-5-7v5h5V2zM18 20h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2zm-5-7v5h5v-5z",
                            fill: t
                        })
                    })
                },
                j = n(30446),
                k = n(92502);
            let N = () => {
                let {
                    data: e,
                    isLoading: t
                } = (0, j.ZP)("/albums", m.CE, {
                    revalidateOnFocus: !1,
                    shouldRetryOnError: !(0, k.vf)()
                });
                return {
                    data: e,
                    isLoading: t
                }
            };
            var I = n(95168),
                E = n(54740);
            let S = u.default.div.withConfig({
                componentId: "sc-36c7586b-0"
            })(["display:flex;justify-content:center;"]);
            var A = () => {
                let {
                    data: e,
                    isLoading: t
                } = N(), {
                    strings: n
                } = (0, i.y)(), o = !!e && e.total > 10;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)($, {
                        children: t ? (0, a.jsx)(E.Z, {}) : e ? e.data.map(e => {
                            let {
                                id: t,
                                name: n,
                                href: o,
                                count: r
                            } = e;
                            return (0, a.jsx)("li", {
                                children: (0, a.jsxs)(F, {
                                    href: o,
                                    children: [(0, a.jsxs)(q, {
                                        children: [(0, a.jsx)(H, {
                                            children: (0, a.jsx)(C, {
                                                color: v.O9.veryDarkGray
                                            })
                                        }), (0, a.jsx)(D, {
                                            children: n
                                        })]
                                    }), (0, a.jsx)("span", {
                                        children: r
                                    })]
                                })
                            }, "topnav-showcase-".concat(t))
                        }) : null
                    }), o ? (0, a.jsx)(S, {
                        children: (0, a.jsx)(I.Bt, {
                            format: "secondary",
                            href: "/manage/showcases",
                            width: "100px",
                            element: "a",
                            children: n("View all")
                        })
                    }) : null]
                })
            };
            let B = e => {
                    switch (e) {
                        case v.gZ.Alum:
                            return {
                                background: "rgba(80, 56, 115, 0.25)", color: "#503873"
                            };
                        case v.gZ.Curation:
                            return {
                                background: "rgba(255, 178, 30, 0.15)", color: "#ff8a00"
                            };
                        case v.gZ.Producer:
                            return {
                                background: "rgba(80, 56, 115, 0.15)", color: "#503873", border: "none"
                            };
                        case v.gZ.Staff:
                            return {
                                background: "#fff5da", border: "1px solid #fce4b3", color: "#ff8a00"
                            };
                        case v.gZ.Pro:
                            return {
                                background: "#d3d3d3", border: "1px solid #C9C9C9", color: "#666"
                            };
                        case v.gZ.Premium:
                        case v.gZ.Plus:
                            return {
                                background: "#DAF1FF", border: "1px solid #BCE6FF", color: "#4bf"
                            };
                        case v.gZ.LiveBusiness:
                        case v.gZ.LivePro:
                        case v.gZ.Business:
                            return {
                                background: "#ecf6d9", border: "1px solid #B9DF73", color: v.O9.positiveCtaGreen
                            };
                        case v.gZ.Sponsor:
                            return {
                                background: "rgba(127, 196, 0, 0.25)", color: v.O9.positiveCtaGreen
                            }
                    }
                },
                P = u.default.span.withConfig({
                    componentId: "sc-99f6bea9-0"
                })(["display:inline-block;text-transform:uppercase;margin-left:4px;padding:1px 3px;font-size:9px;border-radius:2px;text-shadow:1px 1px rgb(255 255 255 / 50%);", ";"], e => {
                    let {
                        type: t
                    } = e;
                    return t ? B(t) : ""
                });
            var M = e => {
                    let {
                        type: t,
                        children: n
                    } = e;
                    return (0, a.jsx)(P, {
                        type: t,
                        children: n
                    })
                },
                W = n(52320);
            let Z = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return (null == e ? void 0 : e.id) === (null == t ? void 0 : t.ownerId) || !n.length || n.includes((null == t ? void 0 : t.permissionLevel) || 0)
                },
                L = (e, t) => {
                    var n;
                    let {
                        user: a,
                        teamUser: o
                    } = t, r = !!(null == a ? void 0 : null === (n = a.capabilities) || void 0 === n ? void 0 : n.hasSimplifiedEnterpriseAccount), l = Z(a, o, [v.aY.ADMIN]), i = Z(a, o, [v.aY.ADMIN, v.aY.CONTRIBUTOR]), s = Z(a, o, [v.aY.CONTRIBUTOR, v.aY.VIEWER]);
                    return [
                        [{
                            text: (0, W.Iu)("Library"),
                            href: "/manage/videos",
                            keyword: "videos",
                            render: !r || r && i
                        }, {
                            text: (0, W.Iu)("Collections"),
                            href: "".concat(e, "/collections"),
                            keyword: "collection",
                            render: !r && !s
                        }, {
                            text: (0, W.Iu)("Analytics"),
                            href: "/analytics",
                            keyword: "stats",
                            render: !r && !s || r && l
                        }],
                        [{
                            text: (0, W.Iu)("Likes"),
                            href: "".concat(e, "/likes"),
                            keyword: "likes",
                            render: !r && !s
                        }, {
                            text: (0, W.Iu)("Watch Later"),
                            href: "/watchlater",
                            keyword: "watch_later",
                            render: !r && !s
                        }, {
                            text: (0, W.Iu)("Purchases"),
                            href: "/purchases",
                            keyword: "purchases",
                            render: !r && !s
                        }],
                        [{
                            text: (0, W.Iu)("Settings"),
                            href: "/settings",
                            keyword: "account_settings",
                            render: !0
                        }, {
                            text: (0, W.Iu)("Messages"),
                            href: "/messages",
                            keyword: "messages",
                            render: !r && !s
                        }, {
                            text: (0, W.Iu)("Vimeo Experts"),
                            href: "/experts/dashboard",
                            keyword: "experts",
                            render: !r && !s
                        }, {
                            text: (0, W.Iu)("Send a referral"),
                            href: "https://share.vimeo.com/refer",
                            keyword: "refer_a_friend",
                            render: !r && !s
                        }, {
                            text: (0, W.Iu)("Help"),
                            href: "https://help.vimeo.com/",
                            keyword: "help",
                            render: !0
                        }]
                    ].map(e => e.filter(e => e.render)).filter(e => e.length)
                };
            var V = n(75292);
            let J = u.default.div.withConfig({
                    componentId: "sc-56ac56dc-0"
                })(["position:relative;.show_block{display:block;}"]),
                O = (e, t) => {
                    e.classList.remove("show_block"), t.removeAttribute("style")
                },
                T = (e, t) => {
                    let n = e.parentElement,
                        a = n.getElementsByTagName("svg")[1];
                    n.onfocus = () => {
                        O(e, a)
                    }, "show" === t ? ("new_video_dropdown" === e.id && (a.style.cssText = "transform: rotate(-180deg); transition: transform 250ms linear;"), e.classList.add("show_block")) : O(e, a)
                },
                R = "#666",
                z = u.default.div.withConfig({
                    componentId: "sc-bae22872-0"
                })(["display:flex;align-items:center;width:100%;"]),
                F = u.default.a.withConfig({
                    componentId: "sc-bae22872-1"
                })(["display:flex;justify-content:space-between;align-items:center;padding:7px 2px;cursor:pointer;&:hover{background-color:", ";}"], v.O9.featurePageGray),
                D = u.default.span.withConfig({
                    componentId: "sc-bae22872-2"
                })(["text-overflow:ellipsis;overflow:hidden;width:180px;white-space:nowrap;height:20px;font-size:14px;font-weight:400;line-height:20px;vertical-align:middle;"]),
                H = u.default.span.withConfig({
                    componentId: "sc-bae22872-3"
                })(["width:18px;height:18px;margin-right:8px;"]),
                Q = u.default.span.withConfig({
                    componentId: "sc-bae22872-4"
                })(["font-size:14px;"]),
                q = u.default.div.withConfig({
                    componentId: "sc-bae22872-5"
                })(["display:flex;"]),
                G = u.default.div.withConfig({
                    componentId: "sc-bae22872-6"
                })(["display:flex;transform:rotate(180deg);"]),
                U = u.default.ul.withConfig({
                    componentId: "sc-bae22872-7"
                })(["position:absolute;z-index:1;right:0;top:36px;background:", ";color:", ";width:15rem;min-width:18rem;padding:10px 1rem;box-shadow:0 3px 5px 0 rgb(0 0 0 / 10%);border:1px solid #eef1f2;border-radius:3px;margin-top:1px;li{padding:5px 0;}"], v.O9.white, v.O9.astroGraniteDark),
                Y = u.default.div.withConfig({
                    componentId: "sc-bae22872-8"
                })(["color:", ";a{white-space:nowrap;line-height:20px;font-size:12px;letter-spacing:0.01rem;&:hover{text-decoration:underline;}}a:first-child{border-right:1px solid #1f1f1f;padding-right:1rem;}a:last-child{padding-left:1rem;}"], v.O9.vimeoBlue),
                X = e => {
                    let {
                        userLink: t
                    } = e, {
                        strings: n
                    } = (0, i.y)(), o = {
                        container: "top_nav",
                        component: "user_menu"
                    };
                    return (0, a.jsxs)(Y, {
                        children: [(0, a.jsx)("a", {
                            href: t,
                            onClick: () => (0, x.m7)({
                                keyword: "view_profile",
                                target: t,
                                ...o
                            }),
                            children: n("View profile")
                        }), (0, a.jsx)("a", {
                            href: "/settings/profile/general",
                            onClick: () => (0, x.m7)({
                                keyword: "profile_settings",
                                target: "/settings/profile/general",
                                ...o
                            }),
                            children: n("Edit profile")
                        })]
                    })
                },
                $ = u.default.ul.withConfig({
                    componentId: "sc-bae22872-9"
                })(["border-top:1px solid #eef1f2;font-size:14px;line-height:16px;margin-top:5px;padding-top:5px;li{cursor:pointer;padding:7px 2px;&:hover{background-color:#f6f7f8;}a{display:flex;}}"]),
                K = e => {
                    let {
                        userLink: t,
                        xsrft: n,
                        userInfo: o
                    } = e, {
                        strings: r
                    } = (0, i.y)(), {
                        logout: l
                    } = h();
                    return (0, a.jsxs)("div", {
                        children: [L(t, o).map((e, t) => (0, a.jsx)($, {
                            children: e.map((e, n) => (0, a.jsx)("li", {
                                role: "menuitem",
                                onClick: () => {
                                    e.keyword && (0, x.m7)({
                                        target: e.href,
                                        keyword: e.keyword,
                                        container: "top_nav",
                                        component: "user_menu"
                                    })
                                },
                                onKeyDown: t => {
                                    t.key === v.Fn.ENTER && 13 === t.keyCode && e.keyword && (0, x.m7)({
                                        target: e.href,
                                        keyword: e.keyword,
                                        container: "top_nav",
                                        component: "user_menu"
                                    })
                                },
                                children: (0, a.jsx)("a", {
                                    href: e.href,
                                    children: e.text
                                })
                            }, "dropdwnitm-".concat(t, "-").concat(n)))
                        }, "drpdwnlst-".concat(t))), (0, a.jsx)($, {
                            children: (0, a.jsx)("li", {
                                role: "menuitem",
                                tabIndex: 0,
                                onClick: () => l(n || ""),
                                onKeyDown: e => {
                                    e.key === v.Fn.ENTER && l(n || "")
                                },
                                children: r("Log out")
                            })
                        })]
                    })
                },
                ee = u.default.li.withConfig({
                    componentId: "sc-bae22872-10"
                })(["font-size:14px;font-weight:500;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"]),
                et = (0, u.default)(e => {
                    let {
                        component: t,
                        menu: n,
                        fa: r,
                        fa_chrome: l,
                        ...i
                    } = e, [s, c] = (0, o.useState)(!1), d = (0, o.useRef)(null), u = (0, o.useCallback)(e => {
                        var t, n;
                        let a = null === (t = d.current) || void 0 === t ? void 0 : t.querySelector(".usr-menu"),
                            o = null === (n = d.current) || void 0 === n ? void 0 : n.querySelector(".new-video-items");
                        e.key === v.Fn.ENTER && e.target === e.currentTarget && (a && T(a, "show"), o && T(o, "show"), r && (0, x.Ru)(r), l && (0, V.i7)() && (0, x.Ru)(l)), e.key === v.Fn.ESCAPE && (a && T(a, "hide"), o && T(o, "hide"))
                    }, []);
                    if ((0, o.useEffect)(() => {
                            document.addEventListener("click", () => {
                                var e, t;
                                let n = null === (e = d.current) || void 0 === e ? void 0 : e.querySelector(".usr-menu"),
                                    a = null === (t = d.current) || void 0 === t ? void 0 : t.querySelector(".new-video-items");
                                n && T(n, "hide"), a && T(a, "hide")
                            })
                        }, []), !(0, V.os)()) return (0, a.jsxs)(J, {
                        ref: d,
                        onMouseEnter: e => {
                            e.stopPropagation(), r && (0, x.Ru)(r), l && (0, V.i7)() && (0, x.Ru)(l)
                        },
                        onKeyDown: u,
                        ...i,
                        children: [t, n]
                    });
                    let p = e => {
                        s ? (e.currentTarget.releasePointerCapture(e.pointerId), c(!1)) : (c(!0), e.currentTarget.setPointerCapture(e.pointerId)), e.preventDefault()
                    };
                    return (0, a.jsxs)(J, {
                        onPointerDown: e => {
                            r && (0, x.Ru)(r), l && (0, V.i7)() && (0, x.Ru)(l), p(e)
                        },
                        ...i,
                        children: [t, n]
                    })
                }).withConfig({
                    componentId: "sc-bae22872-11"
                })(["display:none;margin-right:7px;picture{border-radius:50%;width:36px;height:36px;overflow:hidden;cursor:pointer;}&:hover,&:active{.usr-menu{display:block;}}@media (min-width:", "){display:block;}"], v.H9),
                en = e => {
                    var t, n, r, l;
                    let {
                        userContext: s
                    } = e, [c, d] = (0, o.useState)(!1), {
                        user: u,
                        teamUser: p
                    } = s, {
                        strings: m
                    } = (0, i.y)(), h = null == u ? void 0 : null === (t = u.capabilities) || void 0 === t ? void 0 : t.hasPersonalAccount, f = null == u ? void 0 : null === (n = u.capabilities) || void 0 === n ? void 0 : n.hasSimplifiedEnterpriseAccount, g = null == u ? void 0 : u.badge, w = {
                        container: "top_nav",
                        component: "user_menu"
                    }, j = () => {
                        (0, x.m7)({
                            ...w,
                            keyword: "albums"
                        }), d(e => !e)
                    }, k = null;
                    p && p.permissionLevel === v.aY.ADMIN ? p.hasPerSeatPricingModelTeamMember || (k = (0, a.jsx)(Q, {
                        children: "".concat(p.currentTeamSize, "/").concat(p.maxTeamSize)
                    })) : !s.team || (null == u ? void 0 : null === (r = u.capabilities) || void 0 === r ? void 0 : r.hasPerSeatPricingModelTeamMember) || (k = (0, a.jsx)(Q, {
                        children: "".concat(s.team.currentTeamSize, "/").concat(s.team.maxTeamSize)
                    }));
                    let N = Z(u, p, [v.aY.CONTRIBUTOR, v.aY.VIEWER]),
                        I = (null == u ? void 0 : null === (l = u.capabilities) || void 0 === l ? void 0 : l.canAddTeamMembers) && !N || f && Z(u, p, [v.aY.ADMIN]);
                    return u ? (0, a.jsxs)(U, {
                        role: "menu",
                        "aria-label": m("User"),
                        hidden: !0,
                        id: "profile_dropdown",
                        className: "usr-menu",
                        children: [(0, a.jsxs)(z, {
                            children: [(0, a.jsx)(ee, {
                                children: u.name || m("User")
                            }), g ? (0, a.jsx)(M, {
                                type: g.type,
                                children: g.text
                            }) : null]
                        }), (null == u ? void 0 : u.showAvailableForHire) ? (0, a.jsx)(F, {
                            href: "/settings/profile/work",
                            onClick: () => {
                                (0, x.m7)({
                                    ...w,
                                    keyword: "profile_work_settings"
                                })
                            },
                            children: (0, a.jsxs)(q, {
                                children: [(0, a.jsx)(H, {
                                    children: (0, a.jsx)(b.Z, {
                                        color: v.O9.darkGreen
                                    })
                                }), (0, a.jsx)(D, {
                                    children: m("Available for hire")
                                })]
                            })
                        }) : null, h && !f && (0, a.jsx)("li", {
                            children: (0, a.jsx)(X, {
                                userLink: u.link
                            })
                        }), !c && I ? (0, a.jsx)($, {
                            children: (0, a.jsx)("li", {
                                children: (0, a.jsxs)(F, {
                                    href: "/settings/account/team_members",
                                    onClick: () => {
                                        (0, x.m7)({
                                            ...w,
                                            keyword: "manage_team"
                                        })
                                    },
                                    children: [(0, a.jsxs)(q, {
                                        children: [(0, a.jsx)(H, {
                                            children: (0, a.jsx)(y.Z, {
                                                color: R
                                            })
                                        }), (0, a.jsx)(D, {
                                            children: m("Manage team")
                                        })]
                                    }), k]
                                })
                            })
                        }) : null, !N && (0, a.jsx)($, {
                            children: (0, a.jsx)("li", {
                                children: (0, a.jsxs)(F, {
                                    tabIndex: 0,
                                    onKeyDown: e => {
                                        e.key === v.Fn.ENTER && j()
                                    },
                                    onClick: () => {
                                        j()
                                    },
                                    children: [(0, a.jsxs)(q, {
                                        children: [(0, a.jsx)(H, {
                                            children: c ? (0, a.jsx)(G, {
                                                children: (0, a.jsx)(_.Z, {
                                                    color: v.O9.vimeoBlue
                                                })
                                            }) : (0, a.jsx)(C, {
                                                color: R
                                            })
                                        }), (0, a.jsx)(D, {
                                            children: m("Showcases")
                                        })]
                                    }), c ? null : (0, a.jsx)(_.Z, {
                                        color: R
                                    })]
                                })
                            })
                        }), c ? (0, a.jsx)(A, {}) : (0, a.jsx)(K, {
                            userLink: u.link,
                            xsrft: s.xsrft,
                            userInfo: s
                        })]
                    }) : null
                };
            var ea = () => {
                    var e;
                    let t = (0, o.useContext)(g.St),
                        n = null == t ? void 0 : null === (e = t.user) || void 0 === e ? void 0 : e.pictures,
                        r = (null == t ? void 0 : t.user) ? function(e, t) {
                            let n = "".concat(v.HG, "/");
                            if (e && "custom" === t) {
                                let t = e.split("/");
                                n += t[t.length - 1]
                            } else n += "default-blue";
                            return n
                        }(null == n ? void 0 : n.uri, null == n ? void 0 : n.type) : null;
                    return t && t.user ? (0, a.jsx)(et, {
                        component: (0, a.jsx)(f.default, {
                            objectFit: "cover",
                            default: {
                                mobile: "".concat(r, ".jpg?w=36&q=60")
                            },
                            webP: {
                                mobile: "".concat(r, ".webp?w=36&q=60")
                            }
                        }),
                        menu: (0, a.jsx)(en, {
                            userContext: t
                        }),
                        tabIndex: 0,
                        role: "menuitem",
                        "aria-haspopup": "true",
                        "aria-controls": "profile_dropdown"
                    }) : null
                },
                eo = n(66077);
            let er = (0, eo.hJ)({
                    eventNames: ["vimeo.top_nav_bar_action", "vimeo.trigger_auth_flow"],
                    action_type: "click",
                    copy: "join",
                    element: "button",
                    feature: "join",
                    auth_type: "join",
                    interface_type: "page",
                    flow: [{
                        event_name: "vimeo.top_nav_bar_action",
                        flow: "join"
                    }, {
                        event_name: "vimeo.trigger_auth_flow",
                        flow: "join"
                    }]
                }),
                el = (0, eo.hJ)({
                    eventNames: ["vimeo.top_nav_bar_action", "vimeo.trigger_auth_flow"],
                    action_type: "click",
                    copy: "log_in",
                    element: "button",
                    feature: "login",
                    auth_type: "login",
                    interface_type: "page",
                    flow: [{
                        event_name: "vimeo.top_nav_bar_action",
                        flow: "login"
                    }, {
                        event_name: "vimeo.trigger_auth_flow",
                        flow: "login"
                    }]
                }),
                ei = {
                    event: "top_nav_login_click",
                    action: "click",
                    category: "top_nav"
                };

            function es(e) {
                let {
                    isLargeGetStarted: t
                } = e, {
                    strings: n
                } = (0, i.y)(), {
                    theme: u,
                    setModalType: p
                } = (0, r.m)(), {
                    isPaidLandingPage: m
                } = (0, l.l)(), h = (0, s.Z)()(), f = (0, d.Hu)(n), g = (0, o.useCallback)(() => {
                    null == p || p(v.N7.Login)
                }, [p]), x = (0, o.useCallback)(() => {
                    null == p || p(v.N7.Join)
                }, [p]);
                return t ? h !== s.z.LoggedOut || m ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsx)("div", {
                    className: "rounded-[2.5rem] overflow-hidden cursor-pointer [&>*]:w-full [&>*]:p-0 nav-xl:hidden",
                    children: (0, a.jsx)(c.default, {
                        className: "w-full text-display-mobile-7 !bg-global-nav-background-light nav-xl:text-display-7 !py-10 !px-[calc((2/25)*100%)] cursor-pointer",
                        label: f.getStarted,
                        theme: "white" === u ? "light-gray" : "dark-gray",
                        variant: "nav",
                        onClick: x,
                        bpWithContext: er
                    })
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [h === s.z.LoggedOut && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(c.default, {
                            className: "cursor-pointer text-body-2 [&_.button-icon-container]:hidden",
                            variant: "minimal",
                            theme: "black" === u ? "dark-gray" : "light-gray",
                            onClick: g,
                            bpWithContext: el,
                            gtm: ei,
                            label: f.login,
                            disableHover: !0
                        }), !m && (0, a.jsx)(c.default, {
                            className: "cursor-pointer text-body-2 md:[&_.button-icon-container]:flex [&_.button-icon-container]:hidden",
                            variant: "nav",
                            theme: "black" === u ? "dark-gray" : "light-gray",
                            onClick: x,
                            bpWithContext: er,
                            label: f.join
                        })]
                    }), h === s.z.LoggedIn && (0, a.jsx)(ea, {})]
                })
            }
        },
        86077: function(e, t, n) {
            n.d(t, {
                Hu: function() {
                    return Q
                }
            });
            var a = n(52320),
                o = n(66077),
                r = (n(52322), n(9690));
            (0, a.Iu)("Best of the Year"), (0, a.Iu)("Best of the Year"), (0, o.hJ)({
                copy: "best_of_the_year_2023",
                ...o.BA,
                feature: "watch",
                target: "marketing_landing_page_campaigns",
                target_path: "https://vimeo.com/bestoftheyear"
            }), (0, a.Iu)("Meet Vimeo Central"), (0, a.Iu)("Meet Vimeo Central"), (0, o.hJ)({
                copy: "meet_vimeo_central",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_solutions",
                target_path: "https://vimeo.com/solutions/vimeo-central?mkc=108698"
            }), (0, a.Iu)("Watch demo"), (0, a.Iu)("Watch demo"), r.Z, (0, o.hJ)({
                copy: "watch_demo",
                eventNames: ["vimeo.top_nav_bar_action", "vimeo.demo_action"],
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_enterprise",
                target_path: "https://vimeo.com/watch-demo",
                flow: [{
                    event_name: "vimeo.demo_action",
                    flow: "watch_demo"
                }]
            });
            var l = n(61361),
                i = n(44588),
                s = n(58649),
                c = n(93191),
                d = n(35438),
                u = n(99799),
                p = n(63012),
                m = n(81590),
                h = n(78396),
                f = n(22236),
                g = n(10847),
                v = n(79743),
                x = n(10616),
                b = n(57123),
                _ = n(80515),
                y = n(35498),
                w = n(15114),
                C = n(38282),
                j = n(11500),
                k = n(21602),
                N = n(87873),
                I = n(82018),
                E = n(21043),
                S = n(26919),
                A = n(13215),
                B = n(74248),
                P = n(95939),
                M = n(97924),
                W = n(50555),
                Z = n(9722),
                L = n(5262),
                V = n(24877),
                J = n(14091),
                O = n(51935),
                T = n(59323),
                R = n(79950),
                z = n(52770),
                F = n(16626),
                D = n(19916),
                H = n(3901);
            (0, a.Iu)("Analytics"), O.default, (0, o.hJ)({
                copy: "analytics",
                ...o.BA,
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/video-analytics",
                feature: "analytics"
            }), (0, a.Iu)("Become a Partner"), Z.default, (0, o.hJ)({
                copy: "become_a_partner",
                ...o.BA,
                feature: "general",
                target: "other",
                target_path: "https://vimeo.com/partners"
            }), (0, a.Iu)("Best of Staff Picks"), V.default, (0, o.hJ)({
                copy: "best_of_staff_picks",
                ...o.BA,
                feature: "watch",
                target: "channels",
                target_path: "https://vimeo.com/channels/bestofstaffpicks"
            }), (0, a.Iu)("Best of the Year"), x.default, (0, o.hJ)({
                copy: "best_of_the_year",
                ...o.BA,
                feature: "watch",
                target: "marketing_landing_page_campaigns",
                target_path: "https://vimeo.com/bestoftheyear"
            }), (0, a.Iu)("Blog"), m.default, (0, o.hJ)({
                copy: "blog",
                ...o.BA,
                feature: "general",
                target: "blog",
                target_path: "https://vimeo.com/blog"
            }), (0, a.Iu)("Browse All"), s.default, (0, o.hJ)({
                copy: "browse_all",
                ...o.BA,
                feature: "watch",
                target: "watch",
                target_path: "https://vimeo.com/watch"
            }), (0, a.Iu)("Capture"), W.default, (0, o.hJ)({
                copy: "capture",
                ...o.BA,
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/screen-recorder",
                feature: "record"
            }), (0, a.Iu)("Categories"), p.default, (0, o.hJ)({
                copy: "categories",
                ...o.BA,
                feature: "watch",
                target: "categories_page",
                target_path: "https://vimeo.com/categories"
            }), (0, a.Iu)("Channels"), b.default, (0, o.hJ)({
                copy: "channels",
                ...o.BA,
                feature: "channels",
                target: "channels",
                target_path: "https://vimeo.com/channels"
            }), (0, a.Iu)("Collaboration"), m.default, (0, o.hJ)({
                copy: "collaboration",
                ...o.BA,
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/video-collaboration",
                feature: "video_manager"
            }), (0, a.Iu)("Community"), _.default, (0, o.hJ)({
                copy: "community",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_experts",
                target_path: "https://vimeo.com/experts"
            }), (0, a.Iu)("Corporate Comms"), C.default, (0, o.hJ)({
                copy: "corporate_comms",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_solutions",
                target_path: "https://vimeo.com/solutions/communications"
            }), (0, a.Iu)("Creative Professionals"), L.default, (0, o.hJ)({
                copy: "creative_professionals",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_solutions",
                target_path: "https://vimeo.com/solutions/creative-professionals"
            }), (0, a.Iu)("Customer Stories"), S.default, (0, o.hJ)({
                copy: "customer_stories",
                ...o.BA,
                feature: "general",
                target: "other",
                target_path: "https://vimeo.com/customers"
            }), (0, a.Iu)("Developers"), g.default, (0, o.hJ)({
                copy: "developers",
                ...o.BA,
                feature: "general",
                target: "other",
                target_path: "https://developer.vimeo.com"
            }), (0, a.Iu)("Educators"), E.default, (0, o.hJ)({
                copy: "educators",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_solutions",
                target_path: "https://vimeo.com/solutions/education-solutions/"
            }), (0, a.Iu)("Enterprises"), f.default, (0, o.hJ)({
                copy: "enterprises",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_enterprise",
                target_path: "https://vimeo.com/enterprise"
            }), (0, a.Iu)("Security"), I.default, (0, o.hJ)({
                copy: "security",
                ...o.BA,
                target: "marketing_landing_page_enterprise",
                target_path: "https://vimeo.com/security",
                feature: "video_manager"
            }), (0, a.Iu)("Events & Experiences"), c.default, (0, o.hJ)({
                copy: "events_and_experiences",
                ...o.BA,
                feature: "events",
                target_path: "https://vimeo.com/events/outside-the-frame"
            }), (0, a.Iu)("Events & Webinars"), c.default, (0, o.hJ)({
                copy: "events_and_webinars",
                ...o.BA,
                feature: "events",
                target: "marketing_landing_page_events",
                target_path: "https://vimeo.com/events"
            }), (0, a.Iu)("Generation Vimeo"), D.Z, (0, o.hJ)({
                copy: "generation_vimeo",
                ...o.BA,
                feature: "watch",
                target: "marketing_landing_page_campaigns",
                target_path: "https://vimeo.com/campaigns/generation-vimeo"
            }), (0, a.Iu)("Guides"), j.default, (0, o.hJ)({
                copy: "guides",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_enterprise",
                target_path: "https://vimeo.com/enterprise/resources"
            }), (0, a.Iu)("Help Center"), M.default, (0, o.hJ)({
                eventNames: ["vimeo.top_nav_bar_action", "vimeo.trigger_help_center"],
                copy: "help_center",
                ...o.BA,
                feature: "general",
                target: "help_center",
                target_path: "https://help.vimeo.com/hc/en-us"
            }), (0, a.Iu)("Hire a Video Pro"), l.default, (0, o.hJ)({
                copy: "hire_a_video_pro",
                ...o.BA,
                feature: "general",
                target: "for_hire",
                target_path: "https://vimeo.com/for-hire"
            }), (0, a.Iu)("Learning and Development"), v.Z, (0, o.hJ)({
                copy: "learning_and_development",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_solutions",
                target_path: "https://vimeo.com/solutions/learning-and-development"
            }), (0, a.Iu)("Live Streaming"), T.default, (0, o.hJ)({
                copy: "live_streaming",
                ...o.BA,
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/livestreaming",
                feature: "live_event"
            }), (0, a.Iu)("Marketers"), T.default, (0, o.hJ)({
                copy: "marketers",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_solutions",
                target_path: "https://vimeo.com/solutions/marketing"
            }), (0, a.Iu)("Mobile"), A.default, (0, o.hJ)({
                copy: "mobile",
                ...o.BA,
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/mobile",
                feature: "general"
            }), (0, a.Iu)("On Demand"), k.default, (0, o.hJ)({
                copy: "on_demand",
                ...o.BA,
                feature: "vod",
                target: "vod",
                target_path: "https://vimeo.com/ondemand"
            }), (0, a.Iu)("OTT"), N.default, (0, o.hJ)(o.tR), (0, a.Iu)("Small Business"), d.default, (0, o.hJ)({
                copy: "small_business",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_solutions",
                target_path: "https://vimeo.com/solutions/small-business-solutions"
            }), (0, a.Iu)("Spring 2024 Release"), J.default, (0, o.hJ)({
                copy: "spring_2024_release",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/product-updates-spring-24"
            }), (0, a.Iu)("Staff Picks"), V.default, (0, o.hJ)({
                copy: "staff_picks",
                ...o.BA,
                feature: "watch",
                target: "channels",
                target_path: "https://vimeo.com/channels/staffpicks"
            }), (0, a.Iu)("Video Editor"), w.default, (0, o.hJ)({
                copy: "video_editor",
                ...o.BA,
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/video-editor",
                feature: "edit"
            }), (0, a.Iu)("Video Hosting"), R.default, (0, o.hJ)({
                copy: "video_hosting",
                ...o.BA,
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/online-video-hosting",
                feature: "video_manager"
            }), (0, a.Iu)("Video Library"), y.default, (0, o.hJ)({
                copy: "video_library",
                ...o.BA,
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/video-library",
                feature: "library"
            }), (0, a.Iu)("Video Maker"), B.default, (0, o.hJ)({
                copy: "video_maker",
                ...o.BA,
                target: "marketing_landing_page_create",
                target_path: "https://vimeo.com/create",
                feature: "create"
            }), (0, a.Iu)("Video Monetization"), h.default, (0, o.hJ)({
                copy: "video_monetization",
                feature: "general",
                ...o.BA,
                target: "marketing_landing_page_solutions",
                target_path: "https://vimeo.com/solutions/video-monetization"
            }), (0, a.Iu)("Video on Demand"), k.default, (0, o.hJ)({
                copy: "video_on_demand",
                ...o.BA,
                target: "vod",
                target_path: "https://vimeo.com/ondemand",
                feature: "vod"
            }), (0, a.Iu)("Video Player"), P.default, (0, o.hJ)({
                copy: "video_player",
                ...o.BA,
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/video-player",
                feature: "player"
            }), (0, a.Iu)("Video School"), F.default, (0, o.hJ)({
                copy: "video_school",
                ...o.BA,
                feature: "general",
                target: "blog",
                target_path: "https://vimeo.com/blog/category/video-school"
            }), (0, a.Iu)("Vimeo AI"), i.default, (0, o.hJ)({
                copy: "vimeo_ai",
                ...o.BA,
                feature: "ai",
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/vimeo-ai"
            }), (0, a.Iu)("Vimeo Venues"), z.default, (0, o.hJ)({
                copy: "vimeo_venues",
                ...o.BA,
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/vimeo-venues",
                feature: "venues"
            }), (0, a.Iu)("Vimeo Central"), H.default, (0, o.hJ)({
                copy: "vimeo_central",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_solutions",
                target_path: "https://vimeo.com/solutions/vimeo-central"
            }), (0, a.Iu)("Vimeo Marketing"), T.default, (0, o.hJ)({
                copy: "vimeo_marketing",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_campaigns",
                target_path: "https://vimeo.com/campaigns/vimeo-marketing"
            }), (0, a.Iu)("Vimeo OTT"), N.default, (0, o.hJ)({
                copy: "vimeo_ott",
                ...o.BA,
                feature: "ott",
                target: "ott",
                target_path: "https://vimeo.com/ott"
            }), (0, a.Iu)("Webinars"), u.default, (0, o.hJ)({
                copy: "webinars",
                ...o.BA,
                feature: "webinar",
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/webinar"
            }), (0, a.Iu)("Winter 2024 Release"), J.default, (0, o.hJ)({
                copy: "winter_2024_release",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/product-updates-winter-24"
            }), (0, a.Iu)("Summer 2024 Release"), J.default, (0, o.hJ)({
                copy: "summer_2024_release",
                ...o.BA,
                feature: "general",
                target: "marketing_landing_page_features",
                target_path: "https://vimeo.com/features/product-updates-summer-24"
            }), (0, a.Iu)("Browse Videos By"), (0, a.Iu)("Connect"), (0, a.Iu)("Creation and Editing"), (0, a.Iu)("Events"), (0, a.Iu)("Featured"), (0, a.Iu)("Hosting and Player"), (0, a.Iu)("New Releases"), (0, a.Iu)("Platform"), (0, a.Iu)("Resources"), (0, a.Iu)("Solutions"), (0, a.Iu)("Video Management"), (0, a.Iu)("Video Monetization"), (0, a.Iu)("Vimeo For"), (0, a.Iu)("Learn"), (0, o.hJ)({
                copy: "learn",
                ...o.o1,
                feature: "general"
            }), (0, a.Iu)("Pricing"), (0, o.hJ)({
                eventNames: ["vimeo.top_nav_bar_action", "vimeo.upsell_trigger_impression", "vimeo.trigger_upsell"],
                copy: "pricing",
                ...o.BA,
                feature: "general",
                target: "upgrade_page",
                target_path: "https://vimeo.com/upgrade-plan",
                interface_type: "page"
            }), (0, a.Iu)("Product"), (0, o.hJ)({
                copy: "product",
                ...o.o1,
                feature: "general"
            }), (0, a.Iu)("Solutions"), (0, o.hJ)({
                copy: "solutions",
                feature: "general",
                ...o.o1
            }), (0, a.Iu)("Watch"), (0, o.hJ)({
                copy: "watch",
                ...o.o1,
                feature: "watch"
            }), (0, a.Iu)("Watch"), (0, o.hJ)({
                eventNames: ["vimeo.top_nav_bar_action", "vimeo.upsell_trigger_impression", "vimeo.trigger_upsell"],
                copy: "watch",
                ...o.BA,
                feature: "watch",
                target: "watch",
                target_path: "https://vimeo.com/watch",
                interface_type: "page"
            });
            let Q = e => ({
                mainMenu: e("main menu"),
                goBack: e("go back to main menu"),
                closeMenu: e("close main menu"),
                openMenu: e("open main menu"),
                getStarted: e("Get Started"),
                join: e("Join"),
                login: e("Log in"),
                contactSales: e("Contact Sales")
            })
        },
        54740: function(e, t, n) {
            var a = n(35505),
                o = n(72048);
            let r = (0, a.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),
                l = a.default.div.withConfig({
                    componentId: "sc-7cae2bcc-0"
                })(["animation:0.8s ", " linear infinite;border:2px solid ", ";width:", ";height:", ";border-radius:50%;border-bottom-color:transparent;margin:auto;"], r, e => {
                    let {
                        color: t
                    } = e;
                    return t || o.O9.black
                }, e => {
                    let {
                        size: t
                    } = e;
                    return t || "26px"
                }, e => {
                    let {
                        size: t
                    } = e;
                    return t || "26px"
                });
            a.default.div.withConfig({
                componentId: "sc-7cae2bcc-1"
            })(["display:flex;justify-content:center;align-items:center;height:100vh;"]), t.Z = l
        },
        29815: function(e, t, n) {
            n.r(t), n.d(t, {
                PictureV2: function() {
                    return x
                }
            });
            var a = n(52322),
                o = n(72048),
                r = n(24931),
                l = n(35505);
            let i = e => o.nx.find(t => e[t]),
                s = e => (0, a.jsx)(a.Fragment, {
                    children: o.nx.slice().reverse().map(t => e.breakPoints[t] ? (0, a.jsx)("source", {
                        srcSet: "".concat(e.breakPoints[t], " 1x, ").concat(c(e.breakPoints[t]), " 2x"),
                        media: "(min-width: ".concat(o.Ov[t], ")"),
                        type: e.type ? "image/".concat(e.type) : void 0
                    }, t) : null)
                }),
                c = e => {
                    if (!e) return e;
                    let t = /w=(\d+)/,
                        n = e.match(t);
                    if (!n || n.length < 2) return e;
                    let a = Number(n[1]);
                    return e.replace(t, "w=".concat(2 * a))
                },
                d = l.default.picture.withConfig({
                    componentId: "sc-19c1c0ec-0"
                })(["display:block;@media (max-width:767px){", ";}", ";", ";margin:", ";", "}", ""], e => {
                    let {
                        mobileWidth: t
                    } = e;
                    return t && "width: ".concat(t)
                }, e => e.height && "height: ".concat(e.height), e => e.width && "width: ".concat(e.width), e => e.margin && e.margin, e => {
                    let {
                        centerHorizontally: t
                    } = e;
                    return t && (0, l.css)(["margin-left:auto;margin-right:auto;"])
                }, e => {
                    var t, n, a;
                    if (!e.dimensions) return "";
                    let r = e.dimensions,
                        l = i(r);
                    return "".concat(l && "\n        height: ".concat(null === (t = r[l]) || void 0 === t ? void 0 : t.h, " !important;\n        ").concat((null === (n = r[l]) || void 0 === n ? void 0 : n.w) ? "width: ".concat(null === (a = r[l]) || void 0 === a ? void 0 : a.w, " !important;") : "", "\n      ")) + Object.keys(r).map(e => {
                        var t, n, a;
                        return e === l ? "" : "\n          @media (min-width: ".concat(o.Eg[e], ") {\n            height: ").concat(null === (t = r[e]) || void 0 === t ? void 0 : t.h, " !important;\n            ").concat((null === (n = r[e]) || void 0 === n ? void 0 : n.w) ? "width: ".concat(null === (a = r[e]) || void 0 === a ? void 0 : a.w, " !important;") : "", "\n          }\n        ")
                    }).join("")
                }),
                u = l.default.img.withConfig({
                    componentId: "sc-19c1c0ec-1"
                })(["object-fit:", ";", " ", " ", " ", ";", ";", " ", " ", ""], e => e.objectFit ? e.objectFit : "contain", e => e.objectPosition && "object-position: ".concat(e.objectPosition, ";"), e => e.borderRadius && "border-radius: ".concat(e.borderRadius, ";"), e => e.alwaysOnTop && "z-index: 2;", e => {
                    let {
                        display: t
                    } = e;
                    return t && "display: ".concat(t)
                }, e => e.isAbsolute ? (0, l.css)(["position:absolute;left:0;top:0;"]) : "position: relative", e => e.align && "object-position: ".concat(e.align, ";"), e => {
                    let {
                        inset: t
                    } = e;
                    return t ? "\n    width: calc(100% - ".concat(2 * t, "px);\n    height: calc(100% - ").concat(2 * t, "px);\n    inset: ").concat(t, "px;\n  ") : "\n    width: 100%;\n    height: 100%;\n  "
                }, e => e.background && "background-color: ".concat(e.background)),
                p = e => o.nx.map(t => e[t] && "".concat(e[t], " ").concat(parseInt(o.Ov[t]), "w")).filter(e => e).join(", ");
            t.default = e => (0, a.jsxs)(d, {
                height: e.height,
                width: e.width,
                dimensions: e.dimensions,
                margin: e.margin,
                children: [e.webP ? (0, a.jsx)(s, {
                    breakPoints: e.webP,
                    type: "webp"
                }) : null, (0, a.jsx)(s, {
                    breakPoints: e.default,
                    type: e.defaultType || "jpeg"
                }), (0, a.jsx)(u, {
                    isAbsolute: e.isAbsolute,
                    objectFit: e.objectFit,
                    srcSet: p(e.default),
                    src: (0, r.KM)(e.default),
                    alt: e.imgAlt,
                    title: e.imgTitle,
                    "aria-hidden": "true",
                    loading: "eager" === e.loading ? "eager" : "lazy",
                    align: e.align
                })]
            });
            let m = e => "string" == typeof e && e.includes("https://") ? "" : "".concat(o.z9, "/"),
                h = (e, t) => {
                    let n = m(e),
                        a = t.imageId || e,
                        o = new URLSearchParams({
                            ...(null == t ? void 0 : t.w) && {
                                w: t.w.toString()
                            },
                            ...(null == t ? void 0 : t.q) && {
                                q: t.q.toString()
                            },
                            ...(null == t ? void 0 : t.crop) && {
                                crop: "true"
                            }
                        }).toString();
                    return "".concat(n).concat(a, "?").concat(o)
                },
                f = (e, t) => {
                    let n = {};
                    return Object.keys(t).forEach(a => {
                        n[a] = h(e, t[a])
                    }), n
                },
                g = e => !!Object.keys(e).find(t => {
                    var n;
                    return null === (n = e[t]) || void 0 === n ? void 0 : n.imageId
                }),
                v = e => {
                    let t = m(e);
                    return "".concat(t).concat(e, "?w=320&q=60")
                },
                x = e => {
                    let {
                        defaultImageId: t,
                        thresholds: n,
                        height: o,
                        width: l,
                        mobileWidth: i,
                        dimensions: m,
                        margin: h,
                        isAbsolute: x,
                        objectFit: b,
                        objectPosition: _,
                        imgAlt: y,
                        imgTitle: w,
                        loading: C,
                        align: j,
                        alwaysOnTop: k,
                        borderRadius: N,
                        display: I,
                        background: E,
                        centerHorizontally: S,
                        inset: A
                    } = e, B = f(t, n);
                    return (0, a.jsxs)(d, {
                        height: o,
                        width: l,
                        mobileWidth: i,
                        dimensions: m,
                        margin: h,
                        centerHorizontally: S,
                        children: [(0, a.jsx)(s, {
                            breakPoints: f(t, n)
                        }), g(n) && (0, a.jsx)("source", {
                            srcSet: "".concat(v(t), " 1x, ").concat(c(v(t)), " 2x"),
                            media: "(max-width: 320px"
                        }), (0, a.jsx)(u, {
                            isAbsolute: x,
                            objectFit: b,
                            objectPosition: _,
                            srcSet: p(B),
                            src: (0, r.KM)(B),
                            alt: y,
                            title: w || y,
                            "aria-hidden": "true",
                            loading: C || "lazy",
                            align: j,
                            height: o,
                            width: l,
                            alwaysOnTop: k,
                            borderRadius: N,
                            display: I,
                            background: E,
                            inset: A
                        })]
                    })
                }
        },
        7375: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                },
                m: function() {
                    return i
                }
            });
            var a = n(52322),
                o = n(2784);
            let r = {
                    subMenuIdPrefix: "global-mobile-nav-sub-menu"
                },
                l = (0, o.createContext)(r),
                i = () => (0, o.useContext)(l);

            function s(e) {
                let {
                    children: t,
                    ...n
                } = e;
                return (0, a.jsx)(l.Provider, {
                    value: {
                        ...r,
                        ...n
                    },
                    children: t
                })
            }
        },
        13364: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                },
                l: function() {
                    return l
                }
            });
            var a = n(52322),
                o = n(2784);
            let r = (0, o.createContext)({}),
                l = () => (0, o.useContext)(r);

            function i(e) {
                let {
                    children: t,
                    ...n
                } = e, [l, i] = (0, o.useState)(!1);
                return (0, a.jsx)(r.Provider, {
                    value: {
                        ...n,
                        isPastHeroCTA: l,
                        setIsPastHeroCTA: i
                    },
                    children: t
                })
            }
        },
        54543: function(e, t, n) {
            n.r(t);
            var a = n(52322),
                o = n(35505);
            let r = o.default.path.withConfig({
                    componentId: "sc-14057777-0"
                })(["fillrule:evenodd;cliprule:evenodd;fill:#ffffff;"]),
                l = o.default.path.withConfig({
                    componentId: "sc-14057777-1"
                })(["fillrule:evenodd;cliprule:evenodd;fill:#0066ff;"]),
                i = o.default.path.withConfig({
                    componentId: "sc-14057777-2"
                })(["fill:#ffffff;"]),
                s = o.default.path.withConfig({
                    componentId: "sc-14057777-3"
                })(["fill:#0066ff;"]);
            t.default = () => (0, a.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                x: "0",
                y: "0",
                width: "32px",
                enableBackground: "new 0 0 30 14",
                version: "1.1",
                viewBox: "0 0 30 14",
                xmlSpace: "preserve",
                children: [(0, a.jsx)("title", {
                    id: "title",
                    lang: "en",
                    children: "California Consumer Privacy Act (CCPA) Opt-Out Icon"
                }), (0, a.jsx)("g", {
                    children: (0, a.jsx)("g", {
                        transform: "translate(-1275 -200)",
                        children: (0, a.jsx)(r, {
                            d: "M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z",
                            transform: "translate(1275 200)"
                        })
                    })
                }), (0, a.jsx)("g", {
                    children: (0, a.jsx)("g", {
                        transform: "translate(-1275 -200)",
                        children: (0, a.jsxs)("g", {
                            transform: "translate(1275 200)",
                            children: [(0, a.jsx)(l, {
                                d: "M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z"
                            }), (0, a.jsx)(i, {
                                d: "M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"
                            }), (0, a.jsx)(s, {
                                d: "M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z"
                            })]
                        })
                    })
                })]
            })
        },
        44369: function(e, t, n) {
            var a = n(52322),
                o = n(72048),
                r = n(53861);
            t.Z = e => {
                let {
                    color: t = o.O9.astroGranite,
                    height: n = "20px",
                    width: l = "20px",
                    ...i
                } = e;
                return (0, a.jsx)(r.Z, {
                    width: l,
                    height: n,
                    fill: t,
                    ...i,
                    children: (0, a.jsx)("path", {
                        d: "M9.71 17.71l-1.42-1.42 4.3-4.29-4.3-4.29 1.42-1.42 5 5a1 1 0 0 1 0 1.41z"
                    })
                })
            }
        },
        3263: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = n(52322);

            function o(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsxs)("svg", {
                    width: "98",
                    height: "52",
                    viewBox: "0 0 98 52",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: t,
                    children: [(0, a.jsx)("title", {
                        children: "Vimeo"
                    }), (0, a.jsxs)("g", {
                        clipPath: "url(#clip0_2811_93414)",
                        children: [(0, a.jsx)("path", {
                            d: "M27.227 22.0144C27.1517 23.6479 26.0058 25.8843 23.788 28.7236C21.4961 31.6886 19.5565 33.1711 17.9702 33.1711C16.9877 33.1711 16.1557 32.2684 15.4767 30.462C15.0225 28.8066 14.5695 27.1512 14.1164 25.4958C13.6124 23.6906 13.0713 22.7868 12.4919 22.7868C12.3656 22.7868 11.9242 23.0508 11.1687 23.5776L10.375 22.5609C11.2069 21.8335 12.0285 21.106 12.8361 20.3775C13.9461 19.423 14.7792 18.9215 15.3342 18.8708C16.6459 18.7451 17.4535 19.6386 17.757 21.5487C18.0849 23.6099 18.3109 24.8929 18.4383 25.3944C18.8172 27.1051 19.2332 27.9593 19.6874 27.9593C20.0408 27.9593 20.5703 27.4048 21.2771 26.2947C21.9828 25.1846 22.3617 24.3408 22.4127 23.7609C22.5135 22.8029 22.1346 22.3234 21.2771 22.3234C20.8728 22.3234 20.4568 22.4156 20.0292 22.5989C20.8577 19.8979 22.4416 18.5861 24.7776 18.661C26.5098 18.7117 27.3267 19.8299 27.227 22.0156V22.0144Z",
                            fill: "#FAFCFD"
                        }), (0, a.jsx)("path", {
                            d: "M37.6357 27.3046C36.9289 28.6337 35.9579 29.8384 34.7204 30.9174C33.0287 32.3722 31.3382 33.1007 29.6476 33.1007C28.8644 33.1007 28.2642 32.8494 27.8482 32.348C27.4322 31.8465 27.2364 31.194 27.2619 30.3906C27.2862 29.5629 27.5446 28.2833 28.0371 26.5518C28.5295 24.8203 28.7763 23.8912 28.7763 23.7655C28.7763 23.1142 28.548 22.7868 28.095 22.7868C27.9432 22.7868 27.5145 23.0508 26.8077 23.5776L25.9375 22.5609C26.7451 21.8335 27.5527 21.106 28.3603 20.3775C29.446 19.423 30.2536 18.9215 30.7843 18.8708C31.6163 18.7959 32.228 19.0391 32.6197 19.6028C33.0102 20.1665 33.155 20.8974 33.0554 21.7977C32.7263 23.324 32.3729 25.263 31.994 27.6135C31.9685 28.6902 32.3601 29.2274 33.1677 29.2274C33.5212 29.2274 34.1515 28.8562 35.0611 28.1127C35.8177 27.4936 36.4364 26.9115 36.9161 26.3662L37.6357 27.3069V27.3046ZM34.3415 13.9104C34.316 14.5352 34.0008 15.1358 33.3949 15.7099C32.7135 16.3589 31.9059 16.684 30.972 16.684C29.5341 16.684 28.8389 16.0603 28.8899 14.8107C28.9142 14.1617 29.2989 13.5357 30.0439 12.9363C30.789 12.338 31.6151 12.0371 32.5247 12.0371C33.0542 12.0371 33.4957 12.2446 33.8502 12.6562C34.2036 13.0688 34.367 13.4873 34.3427 13.9104H34.3415Z",
                            fill: "#FAFCFD"
                        }), (0, a.jsx)("path", {
                            d: "M61.2766 27.3047C60.5697 28.6338 59.5988 29.8385 58.3613 30.9175C56.6696 32.3723 54.9791 33.1008 53.2885 33.1008C51.598 33.1008 50.8518 32.1982 50.9028 30.3907C50.9271 29.5872 51.0858 28.6223 51.3755 27.4926C51.6652 26.3628 51.8239 25.4844 51.8494 24.8573C51.8749 23.9039 51.5841 23.4267 50.9758 23.4267C50.3176 23.4267 49.5332 24.206 48.6213 25.7622C47.6584 27.3946 47.1393 28.9762 47.064 30.5071C47.013 31.5884 47.1196 32.4172 47.3827 32.9936C45.6214 33.0444 44.3874 32.755 43.6841 32.1279C43.0538 31.5757 42.7653 30.6593 42.8151 29.3785C42.8394 28.575 42.9634 27.7715 43.187 26.968C43.4095 26.1646 43.5335 25.4487 43.559 24.8204C43.61 23.8913 43.2681 23.4267 42.5358 23.4267C41.9032 23.4267 41.2207 24.1437 40.4884 25.5743C39.7561 27.0049 39.3506 28.5001 39.2753 30.0563C39.2243 31.4627 39.3147 32.4415 39.5464 32.9936C37.8142 33.0444 36.5836 32.6812 35.856 31.9043C35.2523 31.2541 34.9765 30.265 35.0275 28.9381C35.0518 28.288 35.1665 27.3796 35.3751 26.2153C35.5837 25.051 35.6995 24.1437 35.7239 23.4924C35.7737 23.0417 35.6602 22.8169 35.3832 22.8169C35.2314 22.8169 34.8027 23.0716 34.0959 23.5789L33.1875 22.5621C33.3138 22.463 34.1075 21.7344 35.5733 20.3787C36.6335 19.4 37.3518 18.8986 37.7307 18.8732C38.3866 18.8225 38.9172 19.0922 39.3205 19.6825C39.7248 20.2727 39.9265 20.9574 39.9265 21.7356C39.9265 21.9869 39.901 22.2255 39.8511 22.4514C40.23 21.8751 40.6715 21.3713 41.1767 20.9448C42.3377 19.9407 43.6378 19.3747 45.0757 19.2502C46.312 19.1499 47.1949 19.4381 47.7268 20.1159C48.1543 20.6681 48.356 21.4601 48.3316 22.4895C48.5089 22.3396 48.6978 22.1759 48.9005 21.9996C49.4799 21.3217 50.0477 20.7822 50.6038 20.3799C51.5377 19.7021 52.5099 19.3251 53.5191 19.249C54.7311 19.1487 55.6013 19.4358 56.1308 20.1124C56.5838 20.6623 56.7866 21.4508 56.7368 22.4757C56.7113 23.1765 56.541 24.1956 56.2258 25.5351C55.9095 26.8735 55.7519 27.6424 55.7519 27.8419C55.7264 28.3675 55.7774 28.7306 55.9037 28.9301C56.03 29.1307 56.3324 29.2298 56.8121 29.2298C57.1655 29.2298 57.7958 28.8586 58.7054 28.1151C59.462 27.496 60.0808 26.9139 60.5605 26.3686L61.28 27.3093L61.2766 27.3047Z",
                            fill: "#FAFCFD"
                        }), (0, a.jsx)("path", {
                            d: "M75.4694 27.2665C74.7371 28.4712 73.2992 29.6736 71.1533 30.8771C68.4778 32.4068 65.7642 33.1711 63.0134 33.1711C60.9683 33.1711 59.5038 32.4933 58.6208 31.1376C57.9905 30.2084 57.6869 29.1041 57.7124 27.8233C57.7368 25.7898 58.6463 23.8578 60.4388 22.0237C62.4074 20.0155 64.7295 19.0115 67.4049 19.0115C69.8787 19.0115 71.1903 20.0144 71.3421 22.0179C71.4429 23.2952 70.7361 24.6105 69.2229 25.9628C67.6065 27.4406 65.5742 28.3801 63.127 28.7802C63.58 29.4061 64.2625 29.7197 65.1709 29.7197C66.9878 29.7197 68.9691 29.2609 71.115 28.3409C72.6538 27.6954 73.8658 27.0233 74.7499 26.3282L75.4694 27.2677V27.2665ZM66.8754 23.3333C66.8997 22.66 66.6228 22.3211 66.0434 22.3211C65.2868 22.3211 64.5186 22.8399 63.7376 23.8762C62.9567 24.9126 62.5523 25.9063 62.528 26.855C62.514 26.855 62.514 27.0175 62.528 27.3426C63.7631 26.893 64.8337 26.2071 65.741 25.2826C66.471 24.4837 66.8499 23.8336 66.8754 23.3333Z",
                            fill: "#FAFCFD"
                        }), (0, a.jsx)("path", {
                            d: "M85.7513 24.7418C85.6493 27.0485 84.7919 29.0428 83.1767 30.7224C81.5615 32.402 79.5546 33.2424 77.1573 33.2424C75.1632 33.2424 73.6487 32.6026 72.614 31.3242C71.8574 30.372 71.4403 29.1812 71.365 27.7529C71.2375 25.596 72.0196 23.6155 73.7125 21.8103C75.5293 19.8044 77.8131 18.8015 80.5638 18.8015C82.3297 18.8015 83.6668 19.3917 84.5764 20.5687C85.435 21.6477 85.8255 23.0391 85.7501 24.743L85.7513 24.7418ZM81.4734 24.6C81.4989 23.921 81.4039 23.2974 81.1895 22.7325C80.9752 22.1676 80.6646 21.8829 80.2626 21.8829C78.9753 21.8829 77.9151 22.5757 77.0831 23.9591C76.3752 25.0922 75.9963 26.2992 75.9464 27.5811C75.9209 28.2105 76.0345 28.7639 76.2871 29.2423C76.564 29.7956 76.9557 30.0723 77.4608 30.0723C78.5964 30.0723 79.5685 29.406 80.3761 28.0722C81.0574 26.9644 81.4224 25.8081 81.4734 24.6012V24.6Z",
                            fill: "#FAFCFD"
                        })]
                    }), (0, a.jsx)("defs", {
                        children: (0, a.jsx)("clipPath", {
                            id: "clip0_2811_93414",
                            children: (0, a.jsx)("rect", {
                                width: "75.3846",
                                height: "21.2043",
                                fill: "white",
                                transform: "translate(10.375 12.0371)"
                            })
                        })
                    })]
                })
            }
            n(2784)
        },
        27135: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return o
                }
            });
            var a = n(52322);
            let o = (0, n(2784).forwardRef)(function(e, t) {
                let {
                    noWhiteSpace: n = !1,
                    color: o = "currentColor",
                    width: r,
                    height: l,
                    ...i
                } = e;
                return n ? (0, a.jsx)("svg", {
                    ...i,
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r || "19px",
                    height: l || "11px",
                    viewBox: "0 0 19 11",
                    fill: "none",
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9.55682 4.20707L2.71388 10.3657C2.50862 10.5504 2.19248 10.5338 2.00775 10.3285L0.448008 8.5955C0.263278 8.39025 0.279917 8.0741 0.485172 7.88937L8.44246 0.727811C9.07597 0.157655 10.0377 0.157655 10.6712 0.727811L18.6285 7.88937C18.8337 8.0741 18.8504 8.39025 18.6656 8.5955L17.1059 10.3285C16.9212 10.5338 16.605 10.5504 16.3998 10.3657L9.55682 4.20707Z",
                        fill: "currentColor"
                    })
                }) : (0, a.jsx)("svg", {
                    ...i,
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r || "24px",
                    height: l || "24px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 13.1546L15.9594 9.5912C16.1646 9.40647 16.4808 9.42311 16.6655 9.62836L17.3345 10.3717C17.5192 10.5769 17.5026 10.8931 17.2973 11.0778L12.6689 15.2433C12.2886 15.5856 11.7113 15.5856 11.331 15.2433L6.70266 11.0778C6.49741 10.8931 6.48077 10.5769 6.6655 10.3717L7.33446 9.62836C7.51919 9.42311 7.83534 9.40647 8.04059 9.5912L12 13.1546Z",
                        fill: o
                    })
                })
            });
            t.Z = o
        },
        71492: function(e, t, n) {
            n.d(t, {
                Ep: function() {
                    return s
                },
                Jv: function() {
                    return c
                },
                P2: function() {
                    return o
                },
                Y7: function() {
                    return r
                },
                dr: function() {
                    return i
                },
                g_: function() {
                    return u
                },
                rr: function() {
                    return d
                }
            });
            var a = n(72048);
            let o = (e, t) => {
                    let n = !0;
                    return function() {
                        for (var a = arguments.length, o = Array(a), r = 0; r < a; r++) o[r] = arguments[r];
                        n && e(...o), n = !1, window.setTimeout(() => {
                            n = !0
                        }, t)
                    }
                },
                r = e => {
                    var t;
                    return null === (t = a.a2.find(t => t.locale === e)) || void 0 === t ? void 0 : t.language
                },
                l = e => {
                    let t = a.a2.filter(e => e.language !== a.k$.language).map(e => e.language),
                        n = e.startsWith("/") ? e : "/".concat(e),
                        o = n.indexOf("/", 1),
                        r = -1 === o ? n.substring(1) : n.substring(1, o),
                        l = t.find(e => e === r),
                        i = l ? n.substr(l.length + 1) : n;
                    return "" === i ? "/" : i
                },
                i = (e, t) => {
                    let n = l(e);
                    return t === a.k$.language ? n : "/".concat(t).concat(n)
                },
                s = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.k$.locale,
                        {
                            href: n,
                            supportsLanguagePrefix: o
                        } = e;
                    if (!n || !o) return n;
                    let l = r(t) || a.k$.language,
                        i = "en" === l ? "" : "/".concat(l);
                    return i && n.substring(0, i.length) === i ? n : n.match(/^__LANGUAGE_PREFIX__/) ? n.replace("__LANGUAGE_PREFIX__", i) : "".concat(i).concat(n)
                },
                c = e => {
                    let t = e.getBoundingClientRect();
                    return t.top >= 0 && t.top <= window.innerHeight || t.bottom >= 0 && t.bottom <= window.innerHeight || window.innerHeight >= t.top && window.innerHeight <= t.bottom
                },
                d = (e, t) => [...Array(e)].map(() => t),
                u = (e, t) => e[t]
        },
        18340: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return a
                }
            });
            let a = e => (e && (e = (e = (e = e.replace(/^\s+|\s+$/gu, "")).toLocaleLowerCase()).replace(/\s+/g, "-").replace(RegExp("[^\\p{L}\\-+]", "gu"), "").replace(/-+/g, "-")), e || void 0)
        }
    }
]);
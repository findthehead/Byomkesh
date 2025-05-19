"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [55106], {
        55106: function(e, t, l) {
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var a = l(52322),
                o = l(87163),
                i = l(12524),
                n = l.n(i),
                d = l(2784),
                r = l(38088),
                s = l(54516),
                c = l(86782),
                u = l(10666),
                m = l(18340);
            let x = (0, d.createContext)({}),
                v = () => (0, d.useContext)(x),
                h = e => {
                    let {
                        children: t,
                        ...l
                    } = e;
                    return (0, a.jsx)(x.Provider, {
                        value: l,
                        children: t
                    })
                };
            var p = l(75876),
                b = l(75937),
                f = l(5243),
                w = l(27167),
                g = l(3286),
                j = l(22031),
                y = e => {
                    var t;
                    let {
                        idx: l,
                        children: o
                    } = e, {
                        modalButtonPrefix: i = "",
                        assetCards: n,
                        isMobile: d,
                        isReducedMotion: r,
                        setActiveCardIdx: s,
                        activeCardIdx: c,
                        modalCloseText: u
                    } = v(), m = null == n ? void 0 : n[l], x = null !== (t = null == m ? void 0 : m.cardTitle) && void 0 !== t ? t : "", h = [i, x].join(" ").trim(), p = () => {
                        d || r || null == s || s(l)
                    }, b = () => {
                        d || r || l !== c || null == s || s(-1)
                    };
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(null == m ? void 0 : m.cardAssetType) === "Video" && !(null == m ? void 0 : m.linkHref) && (0, a.jsx)(g.default, {
                            button: {
                                label: h,
                                bp: null == m ? void 0 : m.bp,
                                bpWithContext: null == m ? void 0 : m.bpWithContext
                            },
                            isWrapper: !0,
                            onMouseEnter: p,
                            onMouseLeave: b,
                            videoTitle: x,
                            videoUrl: (null == m ? void 0 : m.videoUrl) || "",
                            imageUrl: (null == m ? void 0 : m.imageUrl) || "",
                            iconText: u || "",
                            videoBPWithContext: null == m ? void 0 : m.videoBPWithContext,
                            videoBP: null == m ? void 0 : m.videoBP,
                            children: o
                        }), (null == m ? void 0 : m.linkHref) && (0, a.jsx)("a", {
                            href: null == m ? void 0 : m.linkHref,
                            target: (null == m ? void 0 : m.linkTarget) || "_blank",
                            onMouseEnter: p,
                            onMouseLeave: b,
                            onClick: () => (0, j.Q)({
                                bpData: null == m ? void 0 : m.bp,
                                bpWithContext: null == m ? void 0 : m.bpWithContext
                            }),
                            children: o
                        }), (null == m ? void 0 : m.cardAssetType) !== "Video" && !(null == m ? void 0 : m.linkHref) && (0, a.jsx)("div", {
                            onMouseEnter: p,
                            onMouseLeave: b,
                            children: o
                        })]
                    })
                },
                T = e => {
                    let {
                        idx: t
                    } = e, {
                        activeCardIdx: l,
                        isMobile: i,
                        isReducedMotion: s,
                        itemCount: c,
                        containerRef: u,
                        assetCards: m
                    } = v(), x = null == m ? void 0 : m[t], h = (0, d.useRef)(null), g = (0, d.useRef)(null), j = (0, d.useRef)(null), T = (0, b.Z)({
                        ref: h,
                        index: t || 0
                    }), N = (0, o.qO)();
                    return (0, d.useEffect)(() => {
                        var e, a;
                        t !== l || i || s ? null === (a = j.current) || void 0 === a || a.pause() : null === (e = j.current) || void 0 === e || e.play()
                    }, [t, l, j]), (0, a.jsxs)("li", {
                        className: n()("asset-card-container flex flex-col-reverse gap-4 transition-width duration-500 ease-in-out max-w-216 overflow-hidden max-md:w-carousel-card-mobile max-md:min-w-carousel-card-mobile", {
                            "md:w-full": -1 === l || t === l,
                            "md:w-53.5": -1 !== l && t !== l && 3 === c,
                            "md:w-111": -1 !== l && t !== l && 2 === c
                        }),
                        ref: h,
                        children: [(0, a.jsxs)("div", {
                            className: n()("asset-card-heading overflow-hidden", {
                                "md:opacity-0 md:motion-reduce:opacity-100": !1 === T && !N,
                                "md:animate-image md:motion-reduce:animate-none": T && !N
                            }),
                            children: [(null == x ? void 0 : x.logo) && (null == x ? void 0 : x.logoAltText) && (0, a.jsx)(p.Z, {
                                wrapperClasses: "w-auto h-12 flex justify-start",
                                assetClasses: "object-contain",
                                src: null == x ? void 0 : x.logo,
                                alt: null == x ? void 0 : x.logoAltText
                            }), (0, a.jsx)("h3", {
                                className: n()("text-body-1"),
                                children: null == x ? void 0 : x.cardTitle
                            }), (0, a.jsxs)("div", {
                                className: n()("asset-card-heading-body"),
                                children: [(null == x ? void 0 : x.cardSubTitle) && (0, a.jsx)("h4", {
                                    className: "text-body-3",
                                    children: null == x ? void 0 : x.cardSubTitle
                                }), (null == x ? void 0 : x.cardSubTitleRichText) && (0, a.jsx)("div", {
                                    className: "text-body-3 ".concat(w.t),
                                    children: (0, r.Z)(null == x ? void 0 : x.cardSubTitleRichText)
                                })]
                            })]
                        }), (0, a.jsx)(y, {
                            idx: t,
                            children: (0, a.jsxs)("div", {
                                ref: g,
                                className: "relative",
                                children: [(0, a.jsx)(p.Z, {
                                    hasBlurBackdrop: !1,
                                    isVideo: !0,
                                    src: null == x ? void 0 : x.videoUrl,
                                    imgSrc: null == x ? void 0 : x.imageUrl,
                                    ref: j,
                                    controllable: !0,
                                    loop: !0,
                                    autoPlay: !1,
                                    wrapperClasses: "h-121.5 rounded-standard max-w-216 overflow-hidden",
                                    assetClasses: n()("object-cover h-121.5 md:m-0 w-full max-w-216"),
                                    observerOptions: {
                                        threshold: 0,
                                        rootMargin: "0px 0px 0px 0px"
                                    },
                                    loadObserverRef: u
                                }), (null == x ? void 0 : x.stat) && t === l && (0, a.jsx)("div", {
                                    className: n()("absolute bottom-0 left-0 mb-5 mx-4 w-107 max-w-107 grow flex flex-col justify-end mt-8"),
                                    children: (0, a.jsx)(f.Z, {
                                        statNumber: null == x ? void 0 : x.stat.statNumber,
                                        statDescription: null == x ? void 0 : x.stat.statDescription,
                                        isBlurred: !0
                                    })
                                })]
                            })
                        })]
                    })
                },
                N = l(9690),
                k = l(50327);

            function C(e) {
                let {
                    idx: t
                } = e, {
                    activeCardIdx: l,
                    isMobile: o,
                    isReducedMotion: i,
                    containerRef: r,
                    assetCards: s
                } = v(), c = null == s ? void 0 : s[t], u = (0, d.useRef)(null), m = (0, d.useRef)(null), x = (0, d.useRef)(null), h = (0, b.Z)({
                    ref: x,
                    index: t || 0
                });
                return (0, d.useEffect)(() => {
                    var e, a;
                    t !== l || o || i ? null === (a = m.current) || void 0 === a || a.pause() : null === (e = m.current) || void 0 === e || e.play()
                }, [t, l, m]), (0, a.jsx)("li", {
                    style: {
                        "--carousel-w": "calc(100% - 21rem)",
                        "--carousel-w-sm": "calc(100% - 3rem)"
                    },
                    className: n()("asset-card-container transition-width duration-500 ease-in-out overflow-hidden max-w-216", "max-sm:w-[var(--carousel-w-sm)] max-sm:min-w-[var(--carousel-w-sm)]", "max-lg:w-[var(--carousel-w)] max-lg:min-w-[var(--carousel-w)]", "lg:w-full", {
                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === h,
                        "md:animate-card md:motion-reduce:animate-none": h
                    }),
                    children: (0, a.jsx)(y, {
                        idx: t,
                        children: (0, a.jsxs)("div", {
                            ref: u,
                            className: "relative",
                            children: [(0, a.jsx)(p.Z, {
                                hasBlurBackdrop: !1,
                                isVideo: !0,
                                src: null == c ? void 0 : c.videoUrl,
                                imgSrc: null == c ? void 0 : c.imageUrl,
                                ref: m,
                                controllable: !0,
                                loop: !0,
                                autoPlay: !1,
                                wrapperClasses: "h-[311px] lg:h-121.5 rounded-standard max-w-216 overflow-hidden",
                                assetClasses: n()("object-cover h-[325px] md:h-121.5 md:m-0 w-full max-w-216"),
                                observerOptions: {
                                    threshold: 0,
                                    rootMargin: "0px 0px 0px 0px"
                                },
                                loadObserverRef: r
                            }), (0, a.jsx)(N.Z, {
                                className: "!bg-white absolute right-6 top-6"
                            }), (0, a.jsxs)("div", {
                                className: "black text-left absolute bottom-0 left-0 p-6 z-1 flex flex-col gap-y-2",
                                children: [(0, a.jsx)("h3", {
                                    className: n()("text-display-8.5.1 text-card-content", {
                                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === h,
                                        "md:animate-title md:motion-reduce:animate-none": h
                                    }),
                                    children: null == c ? void 0 : c.cardTitle
                                }), (0, a.jsx)("div", {
                                    className: n()("asset-card-heading-body"),
                                    children: (null == c ? void 0 : c.cardSubTitle) && (0, a.jsx)(k.default, {
                                        tagName: "p",
                                        className: "!text-body-3.5 !text-card-content",
                                        content: null == c ? void 0 : c.cardSubTitle
                                    })
                                })]
                            }), (null == c ? void 0 : c.stat) && t === l && (0, a.jsx)("div", {
                                className: n()("absolute bottom-0 left-0 mb-5 mx-4 w-107 max-w-107 grow flex flex-col justify-end mt-8"),
                                children: (0, a.jsx)(f.Z, {
                                    statNumber: null == c ? void 0 : c.stat.statNumber,
                                    statDescription: null == c ? void 0 : c.stat.statDescription,
                                    isBlurred: !0
                                })
                            })]
                        })
                    })
                })
            }
            var M = e => {
                let {
                    id: t,
                    eyebrow: l,
                    spotlightTitle: i,
                    modalButtonPrefix: x,
                    theme: v = "black",
                    hideBottomPadding: p = !1,
                    assetCards: b,
                    modalCloseText: f,
                    variant: w = "standard"
                } = e, g = t || (0, m.l)(i) || "untitled", [j, y] = (0, d.useState)(0), N = (0, o.y1)(), k = (0, d.useRef)(null), M = (0, o.OW)({
                    ref: k
                }), R = (0, d.useRef)(null), S = (0, o.OW)({
                    ref: R,
                    threshold: .5
                }), B = (0, o.qO)(), {
                    width: U
                } = (0, o.w_)(), [W, E] = (0, d.useState)(!1), {
                    addCursorButtonV3: Z
                } = (0, s.t)();
                (0, d.useEffect)(() => {
                    E(!!U && U < o.Gh), y(U && U < o.Gh ? 0 : -1)
                }, [U, E]);
                let {
                    handleMouseDown: P,
                    handleMouseUp: A,
                    handleMouseMove: O,
                    handleMouseLeave: H,
                    handleTouchStart: _,
                    handleTouchEnd: D,
                    handleTouchMove: V
                } = (0, u.Z)({
                    carouselId: g,
                    cardContainerRef: k,
                    cards: b,
                    activeCardIdx: j,
                    setActiveCardIdx: y,
                    isMobileOnly: !0,
                    mobileBreakpoint: o.Gh
                });
                return (0, d.useEffect)(() => {
                    null == b || b.forEach((e, t) => {
                        var l, a;
                        (null == k ? void 0 : null === (a = k.current) || void 0 === a ? void 0 : null === (l = a.children) || void 0 === l ? void 0 : l[t]) && "Video" === e.cardAssetType && !e.linkHref && Z && Z({
                            id: "".concat(g, "-").concat(t),
                            variant: "play",
                            containerEl: k.current.children[t].querySelector(".modal-dialog")
                        })
                    })
                }, [b, Z]), (0, a.jsx)(h, {
                    ...e,
                    activeCardIdx: j,
                    setActiveCardIdx: y,
                    itemCount: b.length,
                    modalButtonPrefix: x,
                    isMobile: W,
                    isReducedMotion: N,
                    modalCloseText: f,
                    containerRef: k,
                    isInView: M,
                    children: (0, a.jsx)("div", {
                        id: g,
                        className: n()(v, "bg-container-background pt-component", {
                            "pb-component": !p
                        }),
                        children: (0, a.jsxs)("section", {
                            className: "2xl:container text-card-content",
                            children: [l && (0, a.jsx)("span", {
                                className: n()("[&_a]:text-primary block text-center", {
                                    "text-generic-card-sub-content-light": "white" === v && "standard" === w,
                                    "text-generic-card-sub-content": "white" !== v && "standard" === w,
                                    "text-generic-card-sub-content text-eyebrow mb-6": "standard" === w,
                                    "text-card-sub-content text-eyebrow-3 md:text-eyebrow-2 mb-4 md:mb-6": "standard" !== w,
                                    "md:opacity-0 md:motion-reduce:opacity-100": !1 === M,
                                    "md:animate-title md:motion-reduce:animate-none": !0 === M
                                }),
                                children: (0, r.Z)(l)
                            }), i && (0, a.jsx)("h2", {
                                ref: R,
                                className: n()("mx-auto px-4 max-w-constrained-header text-center", {
                                    "text-display-mobile-5 md:text-display-5 mb-component": "standard" === w,
                                    "text-card-content mb-10 text-display-mobile-7.5 md:text-display-5.5 md:mb-component": "standard" !== w,
                                    "md:opacity-0 md:motion-reduce:opacity-100": !1 === S && !B,
                                    "md:animate-title md:motion-reduce:animate-none": S && !B
                                }),
                                children: i
                            }), (0, a.jsx)("div", {
                                className: "asset-cards-outer w-full px-0 overflow-hidden",
                                children: (0, a.jsx)("ul", {
                                    className: n()("asset-cards relative flex gap-4 px-14.5 max-md:[&>*:first-child]:ml-4 max-md:px-0 items-start", {
                                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === M,
                                        "md:animate-card md:motion-reduce:animate-none": !0 === M
                                    }),
                                    ref: k,
                                    onMouseDown: P,
                                    onMouseUp: A,
                                    onMouseMove: O,
                                    onMouseLeave: H,
                                    onTouchStart: _,
                                    onTouchEnd: D,
                                    onTouchMove: V,
                                    children: null == b ? void 0 : b.map((e, t) => (0, a.jsxs)(a.Fragment, {
                                        children: ["standard" === w && (0, a.jsx)(T, {
                                            idx: t,
                                            cardAssetType: e.cardAssetType,
                                            cardTitle: e.cardTitle,
                                            cardSubTitle: e.cardSubTitle,
                                            cardSubTitleRichText: e.cardSubTitleRichText,
                                            imageUrl: e.imageUrl,
                                            videoUrl: e.videoUrl,
                                            linkHref: e.linkHref,
                                            linkTarget: e.linkTarget,
                                            logo: e.logo,
                                            logoAltText: e.logoAltText,
                                            stat: e.stat,
                                            bp: e.bp,
                                            bpWithContext: e.bpWithContext,
                                            videoBPWithContext: e.videoBPWithContext,
                                            videoBP: e.videoBP
                                        }, "feature-asset-card-".concat(t)), "static" === w && (0, a.jsx)(C, {
                                            idx: t
                                        })]
                                    }))
                                })
                            }), (null == b ? void 0 : b.length) > 1 && (0, a.jsx)(c.Z, {
                                breakpoint: o.Gh,
                                carouselId: g,
                                cards: b,
                                activeCardIdx: j,
                                setActiveCardIdx: y
                            })]
                        })
                    })
                })
            }
        }
    }
]);
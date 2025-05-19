"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [30097, 58678, 63543], {
        63543: function(e, t, l) {
            l.r(t), l.d(t, {
                default: function() {
                    return w
                }
            });
            var a = l(52322),
                r = l(12524),
                n = l.n(r),
                i = l(2784),
                o = l(87163),
                s = l(40621),
                c = l(75876),
                d = l(10040),
                u = l(51252),
                m = l(43544),
                x = l(76179),
                p = l(15215),
                h = l(35729);

            function v(e) {
                let {
                    title: t,
                    semanticLevel: l,
                    description: r,
                    descriptionRichText: o,
                    imageAsset: v,
                    videoAsset: f,
                    bynderImage: g,
                    altText: y,
                    cta: b,
                    tags: w,
                    sizeVariant: C,
                    theme: j = "white",
                    transparent: k,
                    aspectRatio: N = "16:9",
                    flip: S,
                    cardLayout: z = "vertical",
                    enableDragNDrop: E,
                    builderButtonV3: L,
                    ...R
                } = e, A = (0, s.Z)()(), P = (0, u.n)({
                    imageAsset: v,
                    videoAsset: f,
                    bynderImage: g,
                    altText: y
                }), H = (null == b ? void 0 : b.url) || (null == b ? void 0 : b.loggedInUrl) ? "a" : "div", [W, I] = (0, i.useState)();
                return (0, i.useEffect)(() => {
                    I((0, p.Z)({
                        cta: {
                            ...b,
                            url: 2 === A && (null == b ? void 0 : b.loggedInUrl) ? null == b ? void 0 : b.loggedInUrl : null == b ? void 0 : b.url
                        }
                    }))
                }, [I, b, A]), (0, a.jsx)(x.Z, {
                    ...R,
                    className: n()("text-card-content flex flex-col relative rounded-standard ".concat(j), {
                        "lg:flex-row": "horizontal" === z,
                        "lg:flex-row-reverse": "horizontal" === z && S,
                        "bg-card-background": !k
                    }),
                    cta: {
                        ...b,
                        url: 2 === A && (null == b ? void 0 : b.loggedInUrl) ? null == b ? void 0 : b.loggedInUrl : null == b ? void 0 : b.url
                    },
                    children: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(H, {
                            className: n()("flex justify-end h-auto", {
                                "flex-[1_1_50%]": "horizontal" === z
                            }),
                            ...((null == b ? void 0 : b.url) || (null == b ? void 0 : b.loggedInUrl)) && (0, p.Z)({
                                cta: {
                                    ...b,
                                    url: 2 === A && (null == b ? void 0 : b.loggedInUrl) ? null == b ? void 0 : b.loggedInUrl : null == b ? void 0 : b.url
                                }
                            }),
                            children: (v || f || g) && (0, a.jsx)(c.Z, {
                                wrapperClasses: n()("rounded-standard overflow-hidden w-full h-auto relative md:rounded-standard", {
                                    "aspect-[1/1]": "1:1" === N,
                                    "aspect-[16/9]": "16:9" === N
                                }),
                                assetClasses: n()("object-center object-cover w-full h-full", {
                                    "aspect-[1/1]": "1:1" === N,
                                    "aspect-[16/9]": "16:9" === N
                                }),
                                ...P
                            })
                        }), (0, a.jsx)(m.Z, {
                            cta: {
                                ...b,
                                url: 2 === A && (null == b ? void 0 : b.loggedInUrl) ? null == b ? void 0 : b.loggedInUrl : null == b ? void 0 : b.url
                            },
                            wrapperClasses: n()("py-8 px-10 md:py-11 md:px-14 flex flex-col flex-1 flex-[1_1_50%] justify-center gap-6", {}),
                            titleClasses: n()("text-display-7 leading-[110%]", {
                                "md:text-display-6 leading-[100%]": "Large" === C || "Medium" === C
                            }),
                            descriptionClasses: n()("text-body-1 md:max-w-full", {
                                "flex-1": "16:9" === N && "vertical" === z,
                                "text-raven-gray": "white" === j
                            }),
                            tagsClasses: n()("[&_li]:font-medium", {
                                "dark-gray": "black" === j
                            }),
                            title: t,
                            semanticLevel: l,
                            description: r,
                            descriptionRichText: o,
                            tags: w,
                            children: ((null == b ? void 0 : b.showButton) && !E || E) && (0, a.jsxs)("div", {
                                className: n()("mt-[2.75rem] flex flex-col md:flex-row"),
                                children: [!E && (0, a.jsx)(d.default, {
                                    label: 2 === A && (null == b ? void 0 : b.loggedInLabel) ? null == b ? void 0 : b.loggedInLabel : null == b ? void 0 : b.label,
                                    variant: (null == b ? void 0 : b.buttonVariant) || "tertiary",
                                    theme: (null == b ? void 0 : b.buttonTheme) || (0, h.E)(j),
                                    ...W && {
                                        useParentHoverState: !1,
                                        bp: b.bp,
                                        ...W
                                    },
                                    className: "whitespace-nowrap"
                                }), E && (0, a.jsx)(a.Fragment, {
                                    children: L
                                }), (null == b ? void 0 : b.extraLabel) && (0, a.jsx)("span", {
                                    className: "mt-2 md:mt-0 md:ml-5 font-medium",
                                    children: b.extraLabel
                                })]
                            })
                        })]
                    })
                })
            }
            var f = l(83835),
                g = l(78437),
                y = l(18541),
                b = l(97416);

            function w(e) {
                let {
                    hideBottomMargin: t = !1,
                    theme: l = "light-gray",
                    eyebrow: r,
                    title: s,
                    titleLink: c,
                    description: d,
                    semanticLevel: u = "h1",
                    headerVariant: m = "display-4",
                    printStyle: x,
                    variant: p = "default",
                    builderBlock: h,
                    builderState: w,
                    cards: C,
                    sectionId: j
                } = e, k = (0, i.useRef)(null), N = (0, o.OW)({
                    ref: k,
                    threshold: .5
                });
                return (0, a.jsxs)(g.Z, {
                    theme: l,
                    element: "section",
                    id: j,
                    additionalClasses: n()({
                        "pt-component [&>*:first-child]:col-[1/-1] [&>*:not(:first-child)]:col-[2/-2] gap-4": "default" === p,
                        "pb-component": !t
                    }),
                    children: [(0, a.jsx)("div", {
                        ref: k,
                        children: (0, a.jsx)(y.default, {
                            element: "div",
                            title: s,
                            titleLink: c,
                            eyebrow: r,
                            semanticLevel: u,
                            hideTopMargin: !0,
                            headerVariant: m,
                            description: d,
                            theme: l,
                            isControlled: !0
                        })
                    }), (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("ul", {
                            className: n()("gap-4 grid grid-cols-1", {
                                "lg:grid-cols-2": "3col" !== x,
                                "lg:grid-cols-3": "3col" === x
                            }),
                            children: null == C ? void 0 : C.map((e, t) => {
                                var r, i;
                                let o = e.sizeVariant || "Small",
                                    s = null !== (i = e.cardLayout) && void 0 !== i ? i : "vertical";
                                return (0, a.jsx)("li", {
                                    className: n()("focus:outline focus:outline-card-focus-outline col-span-1", {
                                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === N,
                                        "md:animate-card md:motion-reduce:animate-none": !0 === N,
                                        "lg:col-span-2": "horizontal" === s && "3col" !== x,
                                        "lg:col-span-3": "horizontal" === s && "3col" === x
                                    }),
                                    children: (0, a.jsx)(v, {
                                        ...e,
                                        altText: e.altText,
                                        cta: {
                                            ...e.cta,
                                            showButton: (null == e ? void 0 : null === (r = e.cta) || void 0 === r ? void 0 : r.showButton) !== !1
                                        },
                                        theme: "white" === l ? "light-gray" : "light-gray" === l ? "white" : "black",
                                        tags: (0, f.w)(e.tags),
                                        sizeVariant: o,
                                        semanticLevel: e.semanticLevel || (0, b.R)(u)
                                    }, "".concat(t).concat(e.id))
                                }, t)
                            })
                        })
                    })]
                })
            }
        },
        30097: function(e, t, l) {
            l.r(t), l.d(t, {
                default: function() {
                    return W
                }
            });
            var a = l(52322),
                r = l(87163),
                n = l(12524),
                i = l.n(n),
                o = l(2784),
                s = l(6364),
                c = l(46168),
                d = l(63543),
                u = l(18340),
                m = l(18541),
                x = e => {
                    let {
                        featureListEyebrow: t,
                        featureListTitle: l,
                        titleLink: n,
                        featureListDescription: s,
                        featureListVariant: c
                    } = e, d = (0, o.useRef)(null), u = (0, r.OW)({
                        ref: d,
                        threshold: "Feature Cards Full Width" === c ? .5 : .1,
                        unsetOnHide: "Feature Cards Full Width" === c
                    }), x = (0, r.y1)();
                    return (0, a.jsx)("div", {
                        ref: d,
                        children: (0, a.jsx)(m.default, {
                            element: "div",
                            hideTopMargin: !0,
                            transparent: !0,
                            headerVariant: "Horizontal Stack" === c ? "display-5" : "display-4",
                            eyebrow: t,
                            title: l,
                            titleLink: n,
                            semanticLevel: "h2",
                            description: s,
                            isControlled: !0,
                            isInView: u,
                            containerClasses: i()({
                                "xl:pb-[var(--card-height)] xl:sticky xl:top-[var(--card-header-top)] bg-container-background": "Horizontal Stack" === c && !x
                            })
                        })
                    })
                },
                p = e => {
                    let {
                        assetListRef: t,
                        screenWidth: l = 0,
                        isMobile: a,
                        isActive: r
                    } = e, [n, i] = (0, o.useState)(-1), s = (e, t) => {
                        let l = e.getBoundingClientRect(),
                            a = t.getBoundingClientRect();
                        return l.bottom >= a.top
                    }, c = e => {
                        let t = e.querySelector(".asset-block"),
                            l = null == t ? void 0 : t.getBoundingClientRect(),
                            a = window.innerHeight;
                        return (null == l ? void 0 : l.bottom) && (null == l ? void 0 : l.bottom) < a
                    }, d = e => Array.from(e).filter((t, l) => 0 === l ? c(t) : !s(e[l - 1], t)), u = e => Array.from(e).filter(c), m = (0, o.useCallback)(() => {
                        if ((null == t ? void 0 : t.current) && r) {
                            let e = t.current,
                                l = e.querySelectorAll("li>div>a").length ? e.querySelectorAll("li>div>a") : e.querySelectorAll("li>div>div");
                            if (null == l ? void 0 : l.length) {
                                let e = (a ? u(l) : d(l)).pop();
                                i(e ? Array.from(l).indexOf(e) : 0)
                            }
                        }
                    }, [t, d, u, a, r]);
                    return (0, o.useEffect)(() => {
                        m()
                    }, [l, m]), (0, o.useEffect)(() => {
                        if (m(), window) {
                            if (r) return window.addEventListener("scroll", m), () => {
                                window.removeEventListener("scroll", m)
                            };
                            window.removeEventListener("scroll", m)
                        }
                    }, [m, r]), n
                },
                h = l(24931),
                v = l(58678),
                f = e => {
                    let {
                        containerEl: t,
                        activeIdx: l,
                        cardHeight: a,
                        textPosition: r
                    } = e;
                    Array.from((null == t ? void 0 : t.querySelectorAll("li.horizontal-stack-card-container")) || []).forEach((e, t) => {
                        let n = "".concat((0, v.u)({
                                num: ("Right" === r ? 1 : -1) * a * (1 - .1 * (t - l)) * (.1 * (t - l)),
                                min: "Right" === r ? 0 : -99999,
                                max: "Right" === r ? 9999 : 0
                            }), "px"),
                            i = "".concat((0, v.u)({
                                num: 1 - .15 * (t - l),
                                min: 0,
                                max: 1
                            })),
                            o = "".concat((0, v.u)({
                                num: 1 - (t - l) * .4,
                                min: 0,
                                max: 1
                            }));
                        e.style.setProperty("--card-translate", n), e.style.setProperty("--card-scale", i), e.style.setProperty("--card-image-opacity", o), e.style.setProperty("--card-z-index", "".concat(3 - (t - l)))
                    })
                },
                g = e => {
                    let {
                        containerEl: t,
                        activeIdx: l,
                        cardHeight: a
                    } = e, r = null == t ? void 0 : t.querySelector("ul.desktop-tabs"), n = null == r ? void 0 : r.querySelectorAll("li"), i = (null == r ? void 0 : r.getBoundingClientRect().height) || 0;
                    if (r && n) {
                        let e = Array.from(n).reduce((e, t, r) => {
                            let o = e,
                                s = t.getBoundingClientRect().height + 40;
                            return r < l && !(i - e < a) ? (n[r].style.setProperty("--tab-opacity", "0"), o += s) : n[r].style.setProperty("--tab-opacity", "1"), o
                        }, 0);
                        r.style.setProperty("--tab-list-translate-y", "".concat(-1 * e, "px")), r.style.setProperty("--tab-list-padding-bottom", "".concat(e, "px"))
                    }
                },
                y = e => {
                    let {
                        cardListEl: t,
                        cardHeight: l,
                        containerOffset: a
                    } = e, r = null == t ? void 0 : t.getBoundingClientRect();
                    return -((((null == r ? void 0 : r.top) || 0) - a) / l * 1) - .5
                },
                b = e => {
                    let {
                        containerEl: t
                    } = e, l = t.querySelectorAll("li.horizontal-stack-card-container").length, a = document.querySelector("header.global-nav"), r = t.querySelector(".feature-list-header-inner"), n = (null == r ? void 0 : r.clientHeight) || 0, i = (null == a ? void 0 : a.clientHeight) || 0, o = window.innerHeight - i, s = Math.min(632, .44 * window.innerWidth, o), c = o / 2 - s / 2, d = c + n + 72;
                    return {
                        cardHeightLocal: s,
                        cardContainerTop: d,
                        cardHeaderTop: c,
                        cardContainerHeightLocal: o,
                        cardsHeightTotal: s * (l + 1),
                        tabNavTop: d + s - 32
                    }
                },
                w = e => {
                    let {
                        cardHeightLocal: t,
                        cardContainerTop: l,
                        items: a
                    } = e;
                    a.forEach((e, a) => {
                        e.style.setProperty("--card-container-height", "".concat(t * (a + 2), "px")), e.style.setProperty("--card-asset-container-margin-top", "".concat(-1 * t * (0 === a ? a : a + 1), "px")), e.style.setProperty("--card-container-anchor-offset", t * a - l + 64 + "px")
                    })
                },
                C = e => {
                    let {
                        containerRef: t,
                        isActive: l,
                        textPosition: a
                    } = e, [n, i] = (0, o.useState)(0), [s, c] = (0, o.useState)(0), [d, u] = (0, o.useState)(0), [m, x] = (0, o.useState)(null), [p, C] = (0, o.useState)(0), j = (0, r.S1)(t, {
                        threshold: 0
                    }), k = (0, o.useCallback)(() => {
                        if ((null == t ? void 0 : t.current) && l) {
                            let {
                                cardHeightLocal: e,
                                cardContainerTop: l,
                                cardHeaderTop: a,
                                cardsHeightTotal: r,
                                cardContainerHeightLocal: n,
                                tabNavTop: o
                            } = b({
                                containerEl: t.current
                            });
                            t.current.style.setProperty("--card-height", "".concat(e, "px")), t.current.style.setProperty("--card-header-top", a + "px"), t.current.style.setProperty("--card-container-top", l + "px"), t.current.style.setProperty("--cards-height-total", r + "px"), t.current.style.setProperty("--tab-nav-top", o + "px"), C(l), t.current.style.setProperty("--card-asset-container-margin-top", "".concat(-1 * e, "px")), w({
                                cardHeightLocal: e,
                                cardContainerTop: l,
                                items: Array.from(t.current.querySelectorAll("li.horizontal-stack-card-heading-inner"))
                            }), w({
                                cardHeightLocal: e,
                                cardContainerTop: l,
                                items: Array.from(t.current.querySelectorAll("li.horizontal-stack-card-container"))
                            }), u(e), i(n)
                        }
                    }, [u, i, t, l]), N = (0, o.useCallback)(() => {
                        let e = y({
                            cardListEl: m,
                            cardContainerHeight: n,
                            cardHeight: d,
                            containerOffset: p
                        });
                        if (m) {
                            let l = Array.from(m.querySelectorAll("li")),
                                a = (0, v.u)({
                                    num: Math.ceil(e),
                                    min: 0,
                                    max: l.length - 1
                                });
                            (null == t ? void 0 : t.current) && t.current.style.setProperty("--tab-nav-opacity", e < -.5 ? "0" : "1"), l.forEach((t, r) => {
                                let n = (0, v.u)({
                                        num: e - r,
                                        min: -1,
                                        max: .5
                                    }),
                                    i = r < a && r < l.length - 1 ? 0 : 1;
                                t.style.setProperty("--card-pos-scale", (1 + Math.min(0, .1 * n)).toString()), t.style.setProperty("--card-pos-opacity", i.toString())
                            }), c(a)
                        }
                    }, [t, l, n, d]);
                    return (0, o.useEffect)(() => (n > 0 && d > 0 && (null == j ? void 0 : j.isIntersecting) ? (N(), window.addEventListener("scroll", N)) : (null == j ? void 0 : j.isIntersecting) || window.removeEventListener("scroll", N), () => {
                        window.removeEventListener("scroll", N)
                    }), [n, d, N, null == j ? void 0 : j.isIntersecting]), (0, o.useEffect)(() => {
                        f({
                            containerEl: null == t ? void 0 : t.current,
                            activeIdx: s,
                            cardHeight: d,
                            textPosition: a
                        }), g({
                            containerEl: null == t ? void 0 : t.current,
                            activeIdx: s,
                            cardHeight: d
                        })
                    }, [s, null == t ? void 0 : t.current, d, a]), (0, o.useEffect)(() => {
                        if (window) {
                            let e = t.current;
                            if (e && l) {
                                x(null == e ? void 0 : e.querySelector("ul.asset-cards")), k();
                                let t = (0, h.Ds)(k, 100);
                                return window.removeEventListener("resize", t), window.addEventListener("resize", t), () => {
                                    window.removeEventListener("resize", t)
                                }
                            }
                        }
                    }, [t, k, l]), {
                        cardContainerHeight: n,
                        cardHeight: d,
                        activeHorizontalStackIdx: s
                    }
                },
                j = l(91518),
                k = l(26580),
                N = e => {
                    let {
                        idx: t,
                        activeIdx: l,
                        assetCardTitle: r,
                        assetCardDescription: n,
                        assetCardSrc: s,
                        assetAlt: c,
                        assetCardAssetType: d,
                        assetCardCta: u,
                        isMobile: m,
                        isEditor: x,
                        itemCount: p,
                        theme: h,
                        collapsedContainerHeight: v,
                        blockItems: f,
                        builderBlock: g
                    } = e, y = (0, o.useRef)(null);
                    (0, o.useEffect)(() => {
                        (null == y ? void 0 : y.current) && (l === t ? y.current.play() : y.current.pause())
                    }, [y, t, l]);
                    let b = null != f && !!f[t] && (0, a.jsx)(j.Z, {
                        parent: g && g.id,
                        blocks: f[t].blocks,
                        path: "component.options.blockItems.".concat(t, ".blocks")
                    }, "block-".concat(t));
                    return (0, a.jsx)("li", {
                        className: i()("feature-card-container"),
                        style: m || x ? {} : {
                            zIndex: p - t,
                            height: "".concat(464 * (t + 1), "px"),
                            marginTop: "-".concat(464 * t, "px")
                        },
                        children: (0, a.jsx)("div", {
                            className: "flex flex-1 items-top px-4 md:px-14 md:h-[29rem] md:sticky",
                            style: m || x ? {} : {
                                top: "calc(50vh - ".concat(v / 2, "px + ").concat(86 * t, "px)"),
                                marginTop: "".concat(70 * t, "px")
                            },
                            children: (0, a.jsx)(k.Z, {
                                semanticLevel: "h3",
                                title: r,
                                description: n,
                                imageAsset: "Image" === d ? s : void 0,
                                videoAsset: "Video" === d ? s : void 0,
                                altText: c,
                                icon: b || void 0,
                                cta: {
                                    ...u,
                                    showButton: !!(null == u ? void 0 : u.url)
                                },
                                sizeVariant: "Large",
                                layoutVariant: "Statement",
                                theme: h,
                                className: "",
                                videoRef: y,
                                autoPlay: !1
                            })
                        })
                    })
                },
                S = l(75876),
                z = l(10040),
                E = l(50327),
                L = l(43355),
                R = e => {
                    let {
                        id: t,
                        idx: l,
                        activeIdx: n = 0,
                        assetCardTitle: s,
                        assetCardDescription: c,
                        assetCardSrc: d,
                        textPosition: u,
                        assetCardCta: m,
                        assetAlt: x
                    } = e, p = (0, o.useRef)(null), h = (0, o.useRef)(null), v = (0, r.y1)();
                    return (0, a.jsxs)("li", {
                        className: i()("horizontal-stack-card-container w-full relative", {
                            "xl:justify-end": "Left" === u && !v,
                            "xl:justify-start": "Right" === u && !v,
                            "xl:flex xl:mt-[var(--card-asset-container-margin-top)] xl:h-[var(--card-container-height)] xl:z-[var(--card-z-index)]": !v
                        }),
                        ref: p,
                        children: [(0, a.jsx)("span", {
                            id: "".concat(t, "-card-").concat(l),
                            className: i()({
                                "xl:absolute xl:top-[var(--card-container-anchor-offset)] xl:block": !v
                            })
                        }), (0, a.jsxs)("div", {
                            ref: h,
                            className: i()("horizontal-stack-card-container-inner w-full will-change-opacity", "max-xl:h-full max-xl:flex max-xl:gap-6 max-xl:flex-col max-xl:justify-between", {
                                "xl:scale-[var(--card-pos-scale)]": l === n && !v,
                                "xl:scale-100": l < n && !v,
                                "xl:scale-90": l > n && !v,
                                "origin-left justify-end": "Left" === u,
                                "origin-right justify-start": "Right" === u,
                                "xl:sticky xl:flex transform-gpu transition-opacity duration-300 ease-in-out": !v,
                                "xl:top-[var(--card-container-top)] xl:h-[var(--card-height)] xl:opacity-[var(--card-pos-opacity)]": !v,
                                "flex h-full gap-6 flex-col justify-between": v
                            }),
                            children: [(0, a.jsxs)("a", {
                                href: (null == m ? void 0 : m.url) || "#",
                                target: (null == m ? void 0 : m.target) || "_self",
                                className: i()("group mobile-heading flex flex-col gap-6 px-4 no-underline items-center text-center", {
                                    "xl:hidden ": !v
                                }),
                                onClick: e => {
                                    var t;
                                    return (0, L.N)(e, {
                                        bp: null == m ? void 0 : m.bp,
                                        bpWithContext: null == m ? void 0 : m.bpWithContext,
                                        targetPath: null !== (t = null == m ? void 0 : m.url) && void 0 !== t ? t : null
                                    })
                                },
                                children: [s && (0, a.jsx)(E.default, {
                                    tagName: "h3",
                                    content: s,
                                    className: "md:text-display-6 text-display-mobile-6"
                                }), (0, a.jsx)("div", {
                                    className: i()("horizontal-stack-card-heading-body"),
                                    children: (0, a.jsx)("p", {
                                        className: "text-body-1",
                                        children: c
                                    })
                                }), (null == m ? void 0 : m.label) && (0, a.jsx)(z.default, {
                                    variant: "tertiary",
                                    label: m.label,
                                    theme: "blue",
                                    bpWithContext: null == m ? void 0 : m.bpWithContext
                                })]
                            }), (0, a.jsx)("div", {
                                className: i()("horizontal-stack-card-asset flex justify-start transition-transform duration-500 ease-in-out transform-gpu will-change-transform", {
                                    "origin-left": "Left" === u && !v,
                                    "origin-right": "Right" === u && !v,
                                    "xl:w-fit xl:translate-x-[var(--card-translate)] xl:scale-[var(--card-scale)]": !v
                                }),
                                children: (0, a.jsx)(S.Z, {
                                    wrapperClasses: i()("asset-inner rounded-standard bg-white aspect-1/1 relative overflow-hidden object-cover will-change-opacity", {
                                        "xl:w-[var(--card-height)] xl:h-[var(--card-height)]": !v
                                    }),
                                    assetClasses: i()({
                                        "xl:opacity-[var(--card-image-opacity)] w-full h-full": !v
                                    }),
                                    hasBlurBackdrop: !1,
                                    isVideo: !1,
                                    src: d,
                                    alt: x
                                })
                            })]
                        })]
                    })
                },
                A = e => {
                    let {
                        idx: t,
                        activeIdx: l,
                        setActiveIdx: n,
                        isReducedMotion: s,
                        assetBlockPosition: c,
                        featureListTitleSize: d,
                        assetCardTitle: u,
                        assetCardSubTitle: m,
                        assetCardDescription: x,
                        assetCardSrc: p,
                        assetCardCta: h,
                        isInView: v,
                        isMobile: f,
                        itemCount: g,
                        containerRef: y,
                        assetCardAspectRatio: b
                    } = e, w = (0, o.useRef)(null), C = (0, o.useRef)(null), j = (0, o.useRef)(null), k = (0, r.OW)({
                        ref: w,
                        threshold: 1,
                        unsetOnHide: !0
                    }), N = (0, r.OW)({
                        ref: w,
                        threshold: 0,
                        unsetOnHide: !1
                    }), [E, L] = (0, o.useState)(!1), R = (0, r.qO)();
                    return (0, o.useEffect)(() => {
                        k && n(t)
                    }, [t, k, n]), (0, o.useEffect)(() => {
                        var e, a;
                        t === l ? null === (e = j.current) || void 0 === e || e.play() : null === (a = j.current) || void 0 === a || a.pause()
                    }, [t, l, j]), (0, o.useEffect)(() => {
                        L(t === l || -1 === l && 0 === t)
                    }, [t, l]), (0, a.jsx)("li", {
                        className: i()("video-card-container flex items-top"),
                        ref: C,
                        children: (0, a.jsxs)("div", {
                            className: i()("video-card-conatiner-inner flex flex-col-reverse md:flex-row items-top gap-8 md:gap-36", {
                                "md:h-screen": t >= g - 1,
                                "mb-[-100vh] md:h-[200vh]": !f && !s && t < g - 1,
                                "md:-mt-16": s
                            }),
                            children: [(0, a.jsx)("div", {
                                className: i()("video-card-heading w-auto md:w-96 px-8 md:px-14 flex flex-col gap-12 z-20 md:h-screen md:justify-center", {
                                    "md:opacity-0 md:motion-reduce:opacity-100": !1 === v,
                                    "md:animate-image md:motion-reduce:animate-none": !0 === v
                                }),
                                children: (0, a.jsxs)("div", {
                                    ref: w,
                                    className: i()("video-card-heading-inner", {
                                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === N && !R,
                                        "md:animate-title md:motion-reduce:animate-none": N && !R
                                    }),
                                    children: [(0, a.jsx)("h3", {
                                        className: i()("mb-component-1/2", "md:contrast-more:bg-black md:contrast-more:w-[50rem] md:contrast-more:p-8 md:contrast-more:mt-8 md:contrast-more:rounded-lg", {
                                            "text-display-mobile-1 md:text-display-1": "Large" === d,
                                            "text-display-mobile-1 md:text-display-5": "Large" !== d
                                        }),
                                        children: u
                                    }), (0, a.jsxs)("div", {
                                        className: i()("video-card-heading-body"),
                                        children: [(0, a.jsx)("h4", {
                                            className: "text-body-2 font-bold",
                                            children: m
                                        }), (0, a.jsx)("p", {
                                            className: "text-body-2",
                                            children: x
                                        }), h && (0, a.jsx)(z.default, {
                                            ...h
                                        })]
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: i()("video-card-video block overflow-hidden pr-4 md:sticky md:top-8 self-start md:-ml-28.5 md:pr-28.5 [transition:opacity_400ms] max-md:ml-8 max-md:max-w-[calc(100vw-3rem)] md:h-[calc(100vh+2rem)]", {
                                    "md:opacity-0": !s && !f && !1 === E && !R
                                }),
                                style: {
                                    marginTop: s || f ? 0 : "".concat(-100 * t, "vh"),
                                    ...f ? {} : c
                                },
                                children: (0, a.jsx)(S.Z, {
                                    hasBlurBackdrop: !0,
                                    isVideo: !0,
                                    src: p,
                                    ref: j,
                                    controllable: !0,
                                    loop: !0,
                                    autoPlay: !1,
                                    isBlurContained: !0,
                                    wrapperClasses: i()("overflow-visible md:max-w-screen", {
                                        "md:w-screen": !b || "16:9" === b
                                    }),
                                    assetClasses: i()("max-md:w-screen max-md:!h-auto object-cover object-left h-80 md:h-[calc(100vh-9rem)] rounded-standard md:absolute w-auto", {
                                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === v,
                                        "md:animate-image md:motion-reduce:animate-none": !0 === v,
                                        "aspect-1/1": "1:1" === b,
                                        "aspect-1/2": "1:2" === b,
                                        "aspect-2/1": "2:1" === b,
                                        "aspect-4/3": "4:3" === b,
                                        "aspect-video": !b || "16:9" === b
                                    }),
                                    blurClasses: i()("md:px-14 md:!mx-0"),
                                    observerOptions: {
                                        threshold: 0,
                                        rootMargin: "0px 0px 0px 0px"
                                    },
                                    loadObserverRef: y
                                })
                            })]
                        })
                    })
                },
                P = e => {
                    let t;
                    switch (e) {
                        case "Feature Cards Full Width":
                            t = N;
                            break;
                        case "Exposed Feature Carousel":
                        default:
                            t = A;
                            break;
                        case "Horizontal Stack":
                            t = R
                    }
                    return t
                },
                H = e => {
                    let {
                        id: t,
                        assetCards: l,
                        activeIdx: n
                    } = e, o = (0, r.y1)();
                    return (0, a.jsx)("div", {
                        className: i()("desktop-tabs-container hidden relative", {
                            "xl:block xl:flex-[8]": !o
                        }),
                        children: (0, a.jsx)("ul", {
                            className: "desktop-tabs h-auto xl:sticky flex flex-col gap-10 transition-all duration-300 xl:pb-8 xl:top-[var(--card-container-top)] xl:mb-[var(--tab-list-translate-y)] translate-y-[var(--tab-list-translate-y)] transform-gpu",
                            children: l.map((e, l) => {
                                var r, o;
                                let s = (null === (r = e.assetCardCta) || void 0 === r ? void 0 : r.url) || "#".concat(t, "-card-").concat(l);
                                return (0, a.jsx)("li", {
                                    className: i()("horizontal-stack-card-heading-inner z-10 hidden xl:block transition-all duration-300 xl:opacity-[var(--tab-opacity)] transform-gpu", {
                                        "xl:text-card-disabled-content xl:hover:text-card-content": l !== n
                                    }),
                                    children: (0, a.jsxs)("a", {
                                        className: "no-underline group",
                                        href: s,
                                        target: (null === (o = e.assetCardCta) || void 0 === o ? void 0 : o.target) || "_self",
                                        onClick: t => {
                                            var l, a;
                                            return (0, L.N)(t, {
                                                bp: null === (l = e.assetCardCta) || void 0 === l ? void 0 : l.bp,
                                                bpWithContext: null === (a = e.assetCardCta) || void 0 === a ? void 0 : a.bpWithContext,
                                                targetPath: s
                                            })
                                        },
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0, a.jsx)("h3", {
                                                className: "text-display-6 mb-3",
                                                children: e.assetCardTitle
                                            }), (0, a.jsx)(z.default, {
                                                variant: "tertiary",
                                                label: "Jump to ".concat(e.assetCardTitle),
                                                theme: "blue",
                                                className: i()("scale-60 mb-1 origin-left transition-opacity duration-500", {
                                                    "opacity-0 group-hover:opacity-100": l !== n
                                                })
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: i()("horizontal-stack-card-heading-body"),
                                            children: (0, a.jsx)("p", {
                                                className: "text-body-1",
                                                children: e.assetCardDescription
                                            })
                                        })]
                                    })
                                }, "feature-asset-card-".concat(l))
                            })
                        })
                    })
                },
                W = e => {
                    let {
                        id: t,
                        featureListEyebrow: l,
                        featureListTitle: n,
                        titleLink: m,
                        featureListTitleSize: h = "Large",
                        featureListDescription: v,
                        featureListVariant: f,
                        textPosition: g = "Left",
                        assetCards: y = [],
                        theme: b = "black",
                        hideBottomPadding: w = !1,
                        blockItems: j = Array(6).fill({
                            blocks: []
                        }),
                        builderBlock: k,
                        articleCardsPrintStyle: N = "3up"
                    } = e;
                    t = t || (0, u.l)(n) || (0, s.Z)();
                    let [S, z] = (0, o.useState)(0), E = (0, r.y1)(), L = (0, r.Eu)(), R = (0, c.Z)(), A = (0, o.useRef)(null), W = (0, o.useRef)(null), I = (0, r.OW)({
                        ref: W
                    }), F = (0, o.useRef)(null), {
                        width: B,
                        isMobile: q
                    } = (0, r.w_)(), T = P(f || "Exposed Feature Carousel"), Z = (0, r.v2)({
                        isActive: "Exposed Feature Carousel" === f,
                        assetListRef: F,
                        screenWidth: B,
                        isMobile: q
                    }), _ = p({
                        isActive: "Feature Cards Full Width" === f,
                        assetListRef: F,
                        screenWidth: B,
                        isMobile: q
                    }), {
                        cardContainerHeight: O,
                        cardHeight: V,
                        activeHorizontalStackIdx: M
                    } = C({
                        isActive: "Horizontal Stack" === f,
                        containerRef: A,
                        textPosition: g
                    });
                    (0, o.useEffect)(() => {
                        "number" == typeof _ && "Horizontal Stack" !== f ? z(_) : "number" == typeof M && "Horizontal Stack" === f && z(M)
                    }, [_, z, M, f]);
                    let U = 70 * (y.length - 1) + 464;
                    return "Article Cards Product Release" === f ? (0, a.jsx)(d.default, {
                        theme: b,
                        eyebrow: l,
                        title: n,
                        description: v,
                        cards: y.map(e => {
                            var t, l, a, r, n, i;
                            return {
                                tags: [],
                                title: e.assetCardTitle,
                                description: e.assetCardDescription,
                                cardLayout: e.articleCardLayout || "vertical",
                                aspectRatio: e.assetCardAspectRatio,
                                flip: !!e.articleCardFlip,
                                imageAsset: e.assetCardSrc,
                                cta: {
                                    label: null === (t = e.assetCardCta) || void 0 === t ? void 0 : t.label,
                                    url: null === (l = e.assetCardCta) || void 0 === l ? void 0 : l.url,
                                    target: null === (a = e.assetCardCta) || void 0 === a ? void 0 : a.target,
                                    buttonTheme: null === (r = e.assetCardCta) || void 0 === r ? void 0 : r.theme,
                                    buttonVariant: null === (n = e.assetCardCta) || void 0 === n ? void 0 : n.variant,
                                    bpWithContext: null === (i = e.assetCardCta) || void 0 === i ? void 0 : i.bpWithContext
                                }
                            }
                        }),
                        hideBottomMargin: w,
                        printStyle: N,
                        variant: "default",
                        layout: "layout-1",
                        sectionId: t
                    }) : (0, a.jsx)("section", {
                        ref: A,
                        className: i()("feature-list pt-component text-card-content bg-container-background w-full relative", b, {
                            "pb-component": !w
                        }),
                        children: (0, a.jsxs)("div", {
                            className: "feature-list-inner 2xl:container",
                            children: [(0, a.jsx)(x, {
                                featureListEyebrow: l,
                                featureListTitle: n,
                                titleLink: m,
                                featureListDescription: v,
                                featureListVariant: f
                            }), (0, a.jsx)("div", {
                                className: i()("feature-list-body", {
                                    "grid grid-cols-25": "Horizontal Stack" === f,
                                    "xl:mt-[var(--card-asset-container-margin-top)]": "Horizontal Stack" === f && !E,
                                    "md:opacity-0 md:motion-reduce:opacity-100": !1 === I,
                                    "md:animate-card md:motion-reduce:animate-none": !0 === I
                                }),
                                children: (0, a.jsxs)("div", {
                                    ref: W,
                                    className: i()("feature-list-body-inner", {
                                        "col-[2/-2] xl:flex xl:justify-between xl:items-stretch": "Horizontal Stack" === f,
                                        "xl:flex-row-reverse": "Horizontal Stack" === f && "Right" === g
                                    }),
                                    children: ["Horizontal Stack" === f && (0, a.jsx)(H, {
                                        id: t,
                                        assetCards: y,
                                        activeIdx: S,
                                        cardContainerHeight: O,
                                        cardHeight: V
                                    }), (0, a.jsx)("ul", {
                                        className: i()("asset-cards relative flex flex-col", {
                                            "gap-16 md:gap-8": "Exposed Feature Carousel" === f,
                                            "gap-4": "Feature Cards Full Width" === f,
                                            "max-md:grid-cols-1 lg:max-xl:grid-cols-2 max-xl:gap-x-6 max-xl:gap-y-12": "Horizontal Stack" === f,
                                            "max-xl:grid xl:flex-[13]": "Horizontal Stack" === f && !E,
                                            "grid gap-x-6 gap-y-12 md:grid-cols-2 h-full": "Horizontal Stack" === f && E
                                        }),
                                        style: {
                                            ..."Feature Cards Full Width" === f && !q && !R && {
                                                height: "calc(50vh + ".concat(480 * y.length - 16, "px - ").concat(U / 2, "px)"),
                                                marginBottom: "calc(-50vh + ".concat(U / 2, "px)")
                                            }
                                        },
                                        ref: F,
                                        children: y.map((e, l) => (0, a.jsx)(T, {
                                            id: t,
                                            featureListTitleSize: h,
                                            idx: l,
                                            activeIdx: S,
                                            setActiveIdx: z,
                                            isReducedMotion: E || R,
                                            isHighContrast: L,
                                            assetBlockPosition: Z,
                                            itemCount: y.length,
                                            width: B,
                                            isInView: I,
                                            isMobile: q,
                                            isEditor: R,
                                            containerRef: A,
                                            collapsedContainerHeight: U,
                                            theme: b,
                                            blockItems: j,
                                            builderBlock: k,
                                            cardContainerHeight: O,
                                            cardHeight: V,
                                            textPosition: g,
                                            ...e
                                        }, "feature-asset-card-".concat(l)))
                                    })]
                                })
                            })]
                        })
                    })
                }
        },
        58678: function(e, t, l) {
            l.d(t, {
                u: function() {
                    return a
                }
            });
            let a = e => {
                let {
                    num: t,
                    min: l,
                    max: a
                } = e;
                return Math.min(Math.max(t, l), a)
            }
        }
    }
]);
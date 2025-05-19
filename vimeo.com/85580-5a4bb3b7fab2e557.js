"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [85580, 85263, 56672, 63732], {
        85263: function(e, t, a) {
            a.r(t);
            var i = a(52322),
                o = a(2784),
                r = a(38007);
            t.default = e => {
                let {
                    children: t,
                    locales: a,
                    ...s
                } = e, {
                    locale: n
                } = (0, o.useContext)(r.RD), [l, d] = (0, o.useState)("");
                return (0, o.useEffect)(() => {
                    d(n)
                }, [n]), ({
                    en: a.en,
                    es: a.es,
                    "de-DE": a.de,
                    "fr-FR": a.fr,
                    "pt-BR": a.pt,
                    "ja-JP": a.ja,
                    "ko-KR": a.ko
                })[l] ? (0, i.jsx)("div", {
                    ...s,
                    children: t
                }) : null
            }
        },
        97005: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var i = a(52322),
                o = a(87163),
                r = a(12524),
                s = a.n(r),
                n = a(2784),
                l = a(21515),
                d = a(78437),
                c = a(18541),
                m = a(90655),
                u = a(18340),
                p = a(72048),
                v = a(35505);
            let h = v.default.div.withConfig({
                    componentId: "sc-c788883d-0"
                })(["background:", ";align-items:center;display:flex;justify-content:center;"], e => "black" == e.theme ? "rgba(var(--colors-black))" : "light-gray" === e.theme ? "rgba(var(--colors-pearl-white))" : "rgba(var(--colors-white))"),
                g = v.default.div.withConfig({
                    componentId: "sc-c788883d-1"
                })(["padding:0px 17px;align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative;&::before{left:0;}max-width:", ";margin:auto;@media (min-width:", "){max-width:", ";padding:0px 34px;}"], p.Eg.tabletEx, p.Eg.tablet, p.Eg.desktopEx),
                b = v.default.img.withConfig({
                    componentId: "sc-c788883d-2"
                })(["max-width:200px;max-height:20px;@media (min-width:", "){max-height:80px;}"], p.Eg.tablet),
                f = v.default.div.withConfig({
                    componentId: "sc-c788883d-3"
                })(["max-width:200px;max-height:20px;margin:0px 24px;@media (min-width:", "){margin:0px 70px;max-height:80px;}"], p.Eg.tablet);
            var _ = e => {
                let {
                    id: t,
                    theme: a = "black",
                    eyebrow: r,
                    title: p,
                    titleLink: v,
                    semanticLevel: _ = "h2",
                    description: y,
                    LogoUrl: x,
                    hideBottomMargin: w,
                    displayOnMobileOnly: C,
                    showExtraTopMargin: k,
                    titleGridClasses: j = "",
                    headerVariant: T = "display-7",
                    logoHeight: A = 60,
                    logoHeightDesktop: N = 80,
                    logoVerticalPadding: S = 32,
                    logoVerticalPaddingDesktop: V = 56,
                    logoGap: I = 80
                } = e;
                t = t || (0, u.l)(p);
                let {
                    isMobile: W
                } = (0, o.w_)(), D = (0, n.useRef)(null), L = (0, o.OW)({
                    ref: D
                }), E = (0, o.qO)();
                x = [...x, ...x, ...x];
                let R = p ? d.Z : "div",
                    Z = x.reduce((e, t) => e || !!t.bynderImage, !1),
                    U = p ? {
                        element: "section",
                        id: t,
                        theme: a,
                        additionalClasses: s()("[&>*]:col-[1/-1] [&>.header-block]:col-[1/-1]", {
                            "pt-component": !k,
                            "pt-16": k,
                            "pb-0 md:pb-0": w,
                            "pb-component": !w
                        }),
                        containerClasses: "relative"
                    } : {
                        id: t,
                        className: s()("bg-container-background", {
                            [a]: a
                        })
                    };
                return (0, i.jsxs)(R, {
                    ...U,
                    className: s()({
                        "lg:hidden": C
                    }),
                    children: [p && (0, i.jsx)(c.default, {
                        element: "div",
                        hideTopMargin: !0,
                        hGroupGridClasses: "col-[1_/_-1] md:col-[5_/_span_15] items-center",
                        titleGridClasses: j,
                        title: p,
                        titleLink: v,
                        theme: a,
                        semanticLevel: _,
                        eyebrow: r,
                        description: y,
                        headerVariant: T
                    }), (0, i.jsx)(h, {
                        ref: D,
                        className: s()("px-8 md:px-[7.813rem]", {
                            "md:py-0": p,
                            "py-component": !p,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === L && !E,
                            "md:animate-card md:motion-reduce:animate-none": L && !E
                        }),
                        theme: a,
                        children: (0, i.jsx)(g, {
                            theme: a,
                            children: (0, i.jsx)(l.Z, {
                                style: {
                                    "--icon-height": "".concat(A, "px"),
                                    "--icon-height-md": "".concat(N, "px"),
                                    "--icon-padding-y": "".concat(S, "px"),
                                    "--icon-padding-y-md": "".concat(V, "px"),
                                    "--icon-gap": "".concat(I, "px")
                                },
                                className: s()("overflow-hidden", {
                                    "[&_.rfm-marquee]:justify-center [&_.rfm-marquee]:py-[var(--icon-padding-y)] md:[&_.rfm-marquee]:py-[var(--icon-padding-y-md)] [&_.rfm-child]:h-[var(--icon-height)] [&_.rfm-child]:md:h-[var(--icon-height-md)] [&_.rfm-marquee]:gap-[var(--icon-gap)] [&_.rfm-initial-child-container]:gap-[var(--icon-gap)]": Z
                                }),
                                gradient: !0,
                                gradientColor: "black" == a ? "rgba(var(--colors-black))" : "light-gray" === a ? "rgba(var(--colors-pearl-white))" : "rgba(var(--colors-white))",
                                gradientWidth: W ? 16 : 100,
                                children: x.map((e, t) => (0, i.jsx)(i.Fragment, {
                                    children: e.bynderImage ? (0, i.jsx)(m.Z, {
                                        logo: {
                                            bynderImage: e.bynderImage,
                                            altText: e.alt || ""
                                        }
                                    }) : (0, i.jsx)(f, {
                                        children: (0, i.jsx)(b, {
                                            src: e.url,
                                            alt: e.alt
                                        }, t)
                                    }, t)
                                }))
                            })
                        })
                    })]
                })
            }
        },
        90655: function(e, t, a) {
            var i = a(52322),
                o = a(68082);
            t.Z = e => {
                var t, a, r, s, n, l, d, c;
                let {
                    logo: m
                } = e, {
                    bynderImage: u,
                    altText: p = ""
                } = m, v = null == u ? void 0 : null === (r = u.imageBynderAsset) || void 0 === r ? void 0 : null === (a = r.additionalInfo) || void 0 === a ? void 0 : null === (t = a.selectedFile) || void 0 === t ? void 0 : t.url, h = (null == v ? void 0 : v.substring(v.length - 4)) === ".svg", g = null == u ? void 0 : null === (s = u.imageBynderAsset) || void 0 === s ? void 0 : s.images, b = (null == g ? void 0 : null === (l = g.Default) || void 0 === l ? void 0 : null === (n = l.desktop) || void 0 === n ? void 0 : n.src) || (null == g ? void 0 : null === (c = g.en) || void 0 === c ? void 0 : null === (d = c.desktop) || void 0 === d ? void 0 : d.src), f = h ? v : "".concat(b, "?io=transform:fit,height:").concat(2.5 * o.Z, "&quality=100");
                return (0, i.jsx)("img", {
                    className: "h-[var(--icon-height)] md:h-[var(--icon-height-md)]",
                    alt: p,
                    src: f
                })
            }
        },
        68082: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return o
                },
                q: function() {
                    return i
                }
            });
            let i = 80,
                o = 80
        },
        63732: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return h
                },
                themes: function() {
                    return v
                }
            });
            var i = a(52322),
                o = a(12524),
                r = a.n(o),
                s = a(2784),
                n = a(38088),
                l = a(46168),
                d = a(10040),
                c = a(78437),
                m = a(88404);
            let u = e => {
                let {
                    startDate: t,
                    endDate: a
                } = e;
                return !t || !a || new Date(t).getTime() < new Date(a).getTime()
            };
            var p = a(81859);
            let v = ["black", "white", "light-gray"];
            var h = e => {
                let {
                    bannerText: t,
                    bannerKey: a,
                    closeBannerText: o,
                    startDate: v,
                    endDate: h,
                    timezone: g = "America/New_York",
                    bpCloseBannerWithContext: b,
                    cta: f,
                    theme: _ = "black"
                } = e, y = "banner" + btoa(a), [x, w] = (0, s.useState)(u({
                    startDate: v,
                    endDate: h
                })), [C, k] = (0, s.useState)(v && (0, m.e)({
                    eventDate: v,
                    eventTimeZone: g
                })), [j, T] = (0, s.useState)(h && (0, m.H)({
                    eventDate: h,
                    eventTimeZone: g
                })), [A, N] = (0, s.useState)(!0), S = (0, l.Z)();
                (0, s.useEffect)(() => {
                    "1" !== sessionStorage.getItem(y) ? N(!0) : "1" === sessionStorage.getItem(y) && N(!1)
                }, [y]), (0, s.useEffect)(() => {
                    w(u({
                        startDate: v,
                        endDate: h
                    }))
                }, [v, h, w]), (0, s.useEffect)(() => {
                    k(v && (0, m.e)({
                        eventDate: v,
                        eventTimeZone: g
                    }))
                }, [v, g, k]), (0, s.useEffect)(() => {
                    T(h && (0, m.H)({
                        eventDate: h,
                        eventTimeZone: g
                    }))
                }, [h, g, T]);
                let V = (0, i.jsx)(d.default, {
                        className: "[&_.button-title]:sr-only cursor-pointer",
                        variant: "minimal",
                        theme: _,
                        onClick: function() {
                            N(!1), "1" !== sessionStorage.getItem(y) && sessionStorage.setItem(y, "1")
                        },
                        label: null != o ? o : "",
                        icon: (0, i.jsx)(p.default, {
                            width: "16px",
                            height: "16px"
                        }),
                        bp: (null == f ? void 0 : f.bp) && o ? {
                            ...f.bp,
                            click: {
                                ...f.bp.click,
                                copy: o
                            }
                        } : void 0,
                        bpWithContext: b
                    }),
                    I = f && (0, i.jsx)(d.default, {
                        bp: f.bp,
                        bpWithContext: f.bpWithContext,
                        className: "w-full md:w-max md:mr-12",
                        href: null == f ? void 0 : f.url,
                        label: null == f ? void 0 : f.label,
                        target: null == f ? void 0 : f.target,
                        theme: (null == f ? void 0 : f.theme) || "dark-gray",
                        variant: (null == f ? void 0 : f.variant) || "primary"
                    });
                return A && x && !C && !j ? (0, i.jsx)(c.Z, {
                    additionalClasses: r()("promo-banner-v3 auto-rows-auto pb-component [&>*]:col-[2/-2] z-5", {
                        "hidden ": !A
                    }),
                    containerClasses: r()("z-1 -mb-8 relative", {}),
                    theme: _,
                    element: "section",
                    children: (0, i.jsxs)("div", {
                        className: r()("w-full grid grid-cols-23 text-generic-card-content text-body-1 py-6 rounded-standard bg-generic-card-background relative"),
                        children: [(0, i.jsxs)("div", {
                            className: "col-[3/-3] flex flex-col gap-4 md:col-[2/-2] md:flex-row md:justify-between md:items-center",
                            children: [(0, i.jsxs)("div", {
                                className: "flex items-start justify-between gap-4 md:block",
                                children: [(0, i.jsx)("div", {
                                    className: "[&_a]:underline [&_a]:text-vimeo-blue [&_a]:cursor-pointer [&_a]:font-medium",
                                    children: (0, n.Z)(t)
                                }), (0, i.jsx)("div", {
                                    className: "flex md:hidden",
                                    children: V
                                })]
                            }), (0, i.jsx)("div", {
                                className: "hidden md:flex md:justify-end",
                                children: I
                            })]
                        }), (0, i.jsx)("div", {
                            className: "col-[2/-2] mt-8 md:hidden",
                            children: I
                        }), (0, i.jsx)("div", {
                            className: "hidden md:flex absolute top-4 right-4",
                            children: V
                        })]
                    })
                }) : (0, i.jsx)(i.Fragment, {
                    children: S && (C || j || !x) && (0, i.jsx)("div", {
                        className: r()(_, "promo-banner-v3-editor-notification py-component z-5 bg-container-background 2xl:container"),
                        children: (0, i.jsxs)("div", {
                            className: "bg-warning text-black p-4",
                            children: [(0, i.jsxs)("h3", {
                                className: "text-display-mobile-7 mb-2",
                                children: [(0, i.jsx)("strong", {
                                    children: a
                                }), " will not be displayed on this page."]
                            }), (0, i.jsxs)("p", {
                                children: [!x && "Start and end dates are optional, but if they are supplied they must be properly formatted and in the right order.", x && (C || j) && (0, i.jsxs)(i.Fragment, {
                                    children: [C && "The start date of ".concat(v, " is after today"), j && "Today is after the end date of ".concat(h), "."]
                                }), " ", (0, i.jsx)("em", {
                                    children: "This message is only visible in the editor."
                                })]
                            })]
                        })
                    })
                })
            }
        },
        56672: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            });
            var i = a(52322),
                o = a(45769),
                r = a(2784),
                s = a(13364),
                n = a(38177),
                l = a(94777),
                d = a(18340),
                c = a(12524),
                m = a.n(c),
                u = a(48605),
                p = a(82776),
                v = a(78437),
                h = a(76811);

            function g(e) {
                var t, a, o, r, s, n, l, d, c, g, b, f, _, y, x, w, C, k, j;
                let {
                    theme: T,
                    title: A,
                    semanticLevel: N = "h2",
                    cards: S = [],
                    hideBottomPadding: V
                } = e, I = (null == S ? void 0 : S.length) % 2 == 0, W = (null == S ? void 0 : S.length) % 2 == 0, D = (null == S ? void 0 : S.length) % 3 == 0;
                return (0, i.jsxs)(v.Z, {
                    theme: T,
                    additionalClasses: m()("[&>*]:col-[2/-2] [&>.resource-title]:col-[2/-8] md:[&>.resource-title]:col-[2/-2] lg:[&>.resource-title]:col-[2/7] lg:[&>.resource-base]:col-[7/-2]", {
                        "pb-component": !V
                    }),
                    children: [(0, i.jsx)(N, {
                        className: "resource-title text-display-mobile-7.5 text-left pb-8 md:pb-12 md:text-center md:text-display-5.5 lg:text-left",
                        children: A
                    }), (0, i.jsxs)(u.g.Base, {
                        className: m()("resource-base md:grid-cols-2 lg:pl-12", {
                            "lg:grid-cols-2": W,
                            "lg:grid-cols-3": D
                        }),
                        children: [(null == S ? void 0 : S[0]) && (0, i.jsx)(u.g.Item, {
                            className: "hidden lg:block",
                            columns: 1,
                            children: (0, i.jsx)(p.Z, {
                                href: null == S ? void 0 : null === (t = S[0].cta) || void 0 === t ? void 0 : t.cardUrl,
                                title: (0, h.J)(null == S ? void 0 : null === (a = S[0]) || void 0 === a ? void 0 : a.cardTitle),
                                image: {
                                    src: null == S ? void 0 : null === (o = S[0]) || void 0 === o ? void 0 : o.imageAsset,
                                    alt: (null == S ? void 0 : null === (r = S[0]) || void 0 === r ? void 0 : r.altText) || ""
                                },
                                tag: {
                                    label: (null == S ? void 0 : null === (l = S[0]) || void 0 === l ? void 0 : null === (n = l.tags) || void 0 === n ? void 0 : null === (s = n[0]) || void 0 === s ? void 0 : s.tag) || ""
                                },
                                bp: null == S ? void 0 : null === (c = S[0]) || void 0 === c ? void 0 : null === (d = c.cta) || void 0 === d ? void 0 : d.bpWithContext
                            })
                        }), (null == S ? void 0 : S[0]) && (0, i.jsx)(u.g.Item, {
                            className: m()("block col-[1/-1] md:!col-[1/-1] lg:hidden"),
                            columns: 3,
                            children: (0, i.jsx)(p.Z, {
                                href: null == S ? void 0 : null === (g = S[0].cta) || void 0 === g ? void 0 : g.cardUrl,
                                title: (0, h.J)(null == S ? void 0 : null === (b = S[0]) || void 0 === b ? void 0 : b.cardTitle),
                                image: {
                                    src: null == S ? void 0 : null === (f = S[0]) || void 0 === f ? void 0 : f.imageAsset,
                                    alt: (null == S ? void 0 : null === (_ = S[0]) || void 0 === _ ? void 0 : _.altText) || ""
                                },
                                tag: {
                                    label: (null == S ? void 0 : null === (w = S[0]) || void 0 === w ? void 0 : null === (x = w.tags) || void 0 === x ? void 0 : null === (y = x[0]) || void 0 === y ? void 0 : y.tag) || ""
                                },
                                bp: null == S ? void 0 : null === (k = S[0]) || void 0 === k ? void 0 : null === (C = k.cta) || void 0 === C ? void 0 : C.bpWithContext
                            })
                        }), null == S ? void 0 : null === (j = S.slice(1)) || void 0 === j ? void 0 : j.map((e, t) => {
                            var a, o, r, s;
                            return (0, i.jsx)(u.g.Item, {
                                className: m()({
                                    "col-[1/-1] md:col-span-2 lg:col-[unset]": !I,
                                    "col-[1/-1] lg:col-[unset]": I
                                }),
                                children: (0, i.jsx)(p.Z, {
                                    href: null == e ? void 0 : null === (a = e.cta) || void 0 === a ? void 0 : a.cardUrl,
                                    title: (0, h.J)(null == e ? void 0 : e.cardTitle),
                                    image: {
                                        src: null == e ? void 0 : e.imageAsset,
                                        alt: (null == e ? void 0 : e.altText) || ""
                                    },
                                    tag: {
                                        label: (null == e ? void 0 : null === (r = e.tags) || void 0 === r ? void 0 : null === (o = r[0]) || void 0 === o ? void 0 : o.tag) || ""
                                    },
                                    bp: null == e ? void 0 : null === (s = e.cta) || void 0 === s ? void 0 : s.bpWithContext
                                })
                            }, t)
                        })]
                    })]
                })
            }
            var b = a(97416),
                f = a(55773),
                _ = e => {
                    let {
                        theme: t = "white",
                        posts: a = [],
                        semanticLevel: o = "h3"
                    } = e;
                    return null == a ? void 0 : a.map((e, a) => (0, i.jsx)(f.Z, {
                        title: e.title,
                        semanticLevel: (0, b.R)(o),
                        imageAsset: e.imageUrl,
                        noProgressiveSrc: !0,
                        cta: {
                            url: e.url,
                            label: "",
                            target: "_self"
                        },
                        theme: t,
                        tags: e.categories || []
                    }, a))
                },
                y = a(33438);

            function x(e) {
                let {
                    theme: t,
                    semanticLevel: a,
                    posts: o,
                    ...r
                } = e, s = _({
                    theme: t,
                    posts: o,
                    semanticLevel: a
                });
                return (0, i.jsx)(y.Z, {
                    resourceCards: s,
                    theme: t,
                    semanticLevel: a,
                    ...r
                })
            }
            var w = a(83835),
                C = a(95067),
                k = e => {
                    var t;
                    let {
                        theme: a = "white",
                        variant: o = "medium",
                        resourceCardsProp: r
                    } = e, s = (0, C.K)(o, r);
                    return null == r ? void 0 : null === (t = r.slice(0, s)) || void 0 === t ? void 0 : t.map((e, t) => {
                        let {
                            cardTitle: o,
                            ...r
                        } = e;
                        return (0, i.jsx)(f.Z, {
                            ...r,
                            cta: {
                                url: e.cta.cardUrl,
                                label: e.cta.cardLabel,
                                target: e.cta.target,
                                bp: e.cta.bp,
                                bpWithContext: e.cta.bpWithContext
                            },
                            title: (0, h.J)(o),
                            theme: a,
                            tags: (0, w.w)(e.tags)
                        }, t)
                    })
                };

            function j(e) {
                let {
                    id: t,
                    tabList: a,
                    tabListAriaLabel: c,
                    eyebrow: m,
                    title: u,
                    titleLink: p,
                    semanticLevel: v = "h2",
                    resourceCards: h,
                    resourceCardV3List: b,
                    theme: f,
                    hideBottomPadding: _ = !1,
                    variant: w,
                    builderBlock: C,
                    carouselId: j,
                    cta: T,
                    navSRPrefix: A,
                    showRecentPosts: N = !1,
                    numberOfRecentPosts: S = 3,
                    category: V,
                    tag: I,
                    author: W,
                    showManuallySelectedPosts: D,
                    selectedPosts: L = [],
                    isClickableImage: E = !1
                } = e;
                t = t || (0, d.l)(u);
                let {
                    blogTags: R
                } = (0, s.l)(), Z = (null == C ? void 0 : C.id) || j, U = b || k({
                    theme: f,
                    variant: w,
                    resourceCardsProp: h
                }), P = {
                    id: t,
                    theme: f,
                    hideBottomPadding: _,
                    eyebrow: m,
                    title: u,
                    titleLink: p,
                    semanticLevel: v,
                    tabList: N ? void 0 : a,
                    tabListAriaLabel: c,
                    variant: w,
                    carouselId: Z,
                    cta: T,
                    navSRPrefix: A,
                    isClickableImage: E
                }, M = (0, r.useContext)(o.mD), [B, q] = (0, r.useState)([]), z = (0, r.useMemo)(() => L.map(e => {
                    var t, a;
                    return (0, l.XS)(null == e ? void 0 : null === (a = e.blogPost) || void 0 === a ? void 0 : null === (t = a.value) || void 0 === t ? void 0 : t.data, R)
                }), [L, R]);
                (0, r.useEffect)(() => {
                    N && (0, n.J9)({
                        limit: S,
                        offset: 0,
                        tag: I,
                        author: W,
                        category: V
                    }, null == M ? void 0 : M.content).then(e => {
                        var t;
                        q(null == e ? void 0 : null === (t = e._posts) || void 0 === t ? void 0 : t.map(e => (0, l.XS)(null == e ? void 0 : e.data, R)))
                    })
                }, [S, I, W, V, N, R, B, null == M ? void 0 : M.content]);
                let F = N ? B : z;
                return (0, i.jsx)(i.Fragment, {
                    children: N || D ? (0, i.jsx)(x, {
                        posts: F,
                        ...P,
                        numberOfRecentPosts: S
                    }) : "blog-style" === w ? (0, i.jsx)(g, {
                        ...P,
                        cards: h
                    }) : (0, i.jsx)(y.Z, {
                        ...P,
                        resourceCards: U
                    })
                })
            }
        },
        85580: function(e, t, a) {
            a.r(t), a.d(t, {
                __N_SSG: function() {
                    return w
                },
                default: function() {
                    return C
                }
            });
            var i = a(52322),
                o = a(2784),
                r = a(37795),
                s = a(87163),
                n = a(30097),
                l = a(6033),
                d = a(52805),
                c = a(52727),
                m = a(85263),
                u = a(97005),
                p = a(37228),
                v = a(90291),
                h = a(63732),
                g = a(56672),
                b = a(55106),
                f = a(52976);
            let _ = e => {
                    let {
                        copy: t,
                        feature: a,
                        target: i,
                        target_path: o,
                        flow: r,
                        auth_type: s,
                        interface_type: n,
                        location: l,
                        eventNames: d,
                        element: c,
                        view_type: m
                    } = e, u = {
                        action_type: "click"
                    }, p = {
                        copy: t,
                        page_name: "logged_out_homepage",
                        path: "/",
                        target: i,
                        target_path: o
                    }, v = {
                        copy: t,
                        product: "onboarding",
                        feature: a,
                        location: l,
                        is_user_facing_data: !1,
                        element: void 0 === c ? "button" : c
                    }, h = {
                        is_partner: !1,
                        is_integration: !1
                    }, g = {
                        view_type: void 0 === m ? "impression" : m
                    };
                    return d.map(e => {
                        var t;
                        let a = (0, f.P)(e);
                        return {
                            event_name: e,
                            contexts: {
                                action_context: u,
                                view_context: g,
                                product_analytics_context: {
                                    ...v,
                                    flow: (null == r ? void 0 : null === (t = r.find(t => t.event_name === e)) || void 0 === t ? void 0 : t.flow) || void 0
                                },
                                web_context: p,
                                third_party_integration_context: h
                            },
                            ...(a || s) && {
                                additionalFields: {
                                    ...a && {
                                        upsell: {
                                            interface_type: null != n ? n : null,
                                            selected_plan: null,
                                            purchase_type: null,
                                            duration: null,
                                            usd_price: null,
                                            currency: null,
                                            is_discount: null,
                                            add_on_feature: null,
                                            discount_offer: null,
                                            promo_code_id: null,
                                            upsell_name: null
                                        }
                                    },
                                    ...s && {
                                        auth_flow: {
                                            interface_type: null != n ? n : null,
                                            auth_type: s
                                        }
                                    }
                                }
                            }
                        }
                    })
                },
                y = e => {
                    let {
                        strings: t,
                        isZoomBypassed: a = !1
                    } = e;
                    return {
                        theme: "white",
                        isZoomBypassed: a,
                        title: t("Do more with video"),
                        headerVariant: "display-3",
                        semanticLevel: "h1",
                        description: t("Meet the complete video platform that can transform the way you do business."),
                        hideBottomMargin: !1,
                        desktopBgImageUrl: "https://i.vimeocdn.com/custom_asset/3009115c41b493ac16fb891ea68be0e8",
                        mobileBgImageUrl: "https://i.vimeocdn.com/custom_asset/56788fc075758785f1e402fe7cb5218a",
                        ctaList: [{
                            label: t("See plans"),
                            href: "/upgrade-plan",
                            theme: "blue",
                            target: "_self",
                            bpWithContext: _({
                                copy: "see_plans",
                                eventNames: ["vimeo.upsell_trigger_impression", "vimeo.trigger_upsell"],
                                feature: "general",
                                location: "header",
                                target: "upgrade_page",
                                target_path: "https://vimeo.com/upgrade-plan"
                            })
                        }, {
                            label: t("Join for free"),
                            isJoinModal: !0,
                            theme: "light-gray",
                            target: "_self",
                            bpWithContext: _({
                                copy: "join_for_free",
                                eventNames: ["vimeo.trigger_auth_flow", "vimeo.view_auth_flow", "vimeo.close_auth_flow"],
                                feature: "join",
                                location: "header",
                                interface_type: "page",
                                auth_type: "join"
                            })
                        }],
                        subContentImageUrl: "https://i.vimeocdn.com/custom_asset/8b5bc41926561c9ac287a727ade1f786?w=1920",
                        subContentCtaList: [{
                            href: "/enterprise/request-demo",
                            label: t("Request a demo"),
                            theme: "blue",
                            target: "_self",
                            bpWithContext: _({
                                copy: "request_a_demo",
                                eventNames: ["vimeo.demo_action"],
                                feature: "general",
                                location: "header",
                                target: "marketing_landing_page_enterprise",
                                target_path: "https://vimeo.com/watch-demo",
                                flow: [{
                                    event_name: "vimeo.demo_action",
                                    flow: "request_demo"
                                }]
                            })
                        }],
                        backgroundVideoUrl: "https://player.vimeo.com/progressive_redirect/playback/938226648/rendition/1080p/file.mp4?loc=external&signature=b1d907631c774c4dba6d9b4530f6db8ea5be4d9e5225df477b2b16dba0e080fb",
                        imageUrl: "https://i.vimeocdn.com/custom_asset/21a684b9352e090b70ace38910e58e70",
                        videoTitle: t("Your full suite of video tools"),
                        videoDescription: t("Get everything you need to edit, manage, and publish stunning videos that move the needle.")
                    }
                };
            var x = a(75388),
                w = !0,
                C = () => {
                    let {
                        isMobile: e
                    } = (0, s.w_)(), {
                        strings: t
                    } = (0, r.y)(), a = (0, o.useMemo)(() => y({
                        strings: t,
                        isZoomBypassed: !0
                    }), [t]), f = (0, o.useMemo)(() => ({
                        title: t("Vimeo AI-Powered Video Platform"),
                        description: t("The video platform trusted by 287 million creatives, entrepreneurs, and businesses. Everything you need to create, manage, and share stunning videos."),
                        schema: x.N
                    }), [t]), w = {
                        cardTitle: t("Explore our new and updated features"),
                        semanticLevel: "h3",
                        imageAsset: "https://vimeo.bynder.com/transform/d2f2fed0-2329-4b45-a490-e1ba031d3de8/Winter-2025-Release-LOHP-Image",
                        altText: t("Explore our new and updated features"),
                        tags: [{
                            tag: t("Winter 2025 Release")
                        }],
                        cta: {
                            cardUrl: "/blog/post/winter-2025-release",
                            cardLabel: "",
                            target: "_blank",
                            bpWithContext: _({
                                copy: "winter_2025_release",
                                eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                feature: "general",
                                location: "body",
                                target: "marketing_landing_page_features",
                                target_path: "https://vimeo.com/blog/post/winter-2025-release"
                            })
                        }
                    }, C = {
                        cardTitle: t("Meet Vimeo Central: our secure, AI-powered video hub"),
                        semanticLevel: "h3",
                        imageAsset: "https://i.vimeocdn.com/custom_asset/8707303f0fd53c3e8e773a1576847bb1?w=288",
                        altText: t("Link to Vimeo Central page"),
                        tags: [{
                            tag: t("Vimeo Central")
                        }],
                        cta: {
                            cardUrl: "/solutions/vimeo-central",
                            cardLabel: "",
                            target: "_blank",
                            bpWithContext: _({
                                copy: "vimeo_central",
                                eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                feature: "general",
                                location: "body",
                                target: "marketing_landing_page_solutions",
                                target_path: "https://vimeo.com/solutions/vimeo-central"
                            })
                        }
                    }, k = {
                        cardTitle: t("Watch our user conference Vimeo REFRAME on demand"),
                        semanticLevel: "h3",
                        imageAsset: "https://i.vimeocdn.com/custom_asset/c177be882e8638382e02a0324d977449",
                        altText: t("Link to REFRAME event recap"),
                        tags: [{
                            tag: t("Events")
                        }],
                        cta: {
                            cardUrl: "/events/reframe/highlights?mkc=109947",
                            cardLabel: "",
                            target: "_blank",
                            bpWithContext: _({
                                copy: "vimeo_reframe",
                                eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                feature: "general",
                                location: "body",
                                target_path: "/events/reframe/highlights?mkc=109947"
                            })
                        }
                    }, j = [w, C], T = [{
                        ...k,
                        imageAsset: "https://i.vimeocdn.com/custom_asset/e2457ea75d8a3968fb6efb9cc3d51523"
                    }, ...j], A = [{
                        ...k,
                        imageAsset: "https://i.vimeocdn.com/custom_asset/5b2504d1897e88e68f38a019318c6cc9"
                    }, ...j], N = [k, ...j];
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(v.Z, {
                            ...f
                        }), (0, i.jsx)(d.default, {
                            theme: "white"
                        }), (0, i.jsx)(m.default, {
                            locales: {
                                en: !0,
                                es: !0,
                                de: !0,
                                fr: !0,
                                pt: !0,
                                ja: !0,
                                ko: !0
                            },
                            children: (0, i.jsx)(h.default, {
                                theme: "white",
                                bannerText: t("Best of the Year: Check out the top videos and breakout creators of 2024"),
                                bannerKey: "lohp",
                                closeBannerText: t("Close banner Best of the Year 2024"),
                                startDate: "Jan 15, 2025",
                                endDate: "Feb 05, 2025",
                                cta: {
                                    label: t("See the films"),
                                    url: "/bestoftheyear",
                                    target: "_self",
                                    theme: "black",
                                    variant: e ? "primary" : "secondary",
                                    bpWithContext: [{
                                        event_name: "vimeo.learn_more",
                                        contexts: {
                                            action_context: {
                                                action_type: "click"
                                            },
                                            web_context: {},
                                            product_analytics_context: {
                                                copy: "best_of_the_year_see_the_film",
                                                product: "onboarding",
                                                feature: "general",
                                                location: "body"
                                            },
                                            third_party_integration_context: {
                                                is_partner: !1,
                                                is_integration: !1
                                            }
                                        }
                                    }]
                                }
                            })
                        }), (0, i.jsx)(c.default, {
                            ...a
                        }), (0, i.jsx)(u.default, {
                            title: t("Trusted by 287 million creatives, entrepreneurs, and businesses"),
                            theme: "light-gray",
                            showExtraTopMargin: !0,
                            titleGridClasses: "max-w-[42rem]",
                            LogoUrl: [{
                                url: "https://i.vimeocdn.com/custom_asset/bf59fc6600263f12fa9bee6cb6b0081d"
                            }, {
                                url: "https://i.vimeocdn.com/custom_asset/d54486aaccee4970f30eb0410ad80dcf"
                            }, {
                                url: "https://i.vimeocdn.com/custom_asset/481f17beba6d49994da581c14928d839"
                            }, {
                                url: "https://i.vimeocdn.com/custom_asset/05408319d910ddba0c55440607e76d86"
                            }, {
                                url: "https://i.vimeocdn.com/custom_asset/790a2c71fc0084c6b0623fe9aa37f2d1"
                            }]
                        }), (0, i.jsx)(n.default, {
                            featureListEyebrow: t("Home of the best video experiences on the internet"),
                            featureListTitle: t("Your AI-powered video platform"),
                            featureListVariant: "Article Cards Product Release",
                            featureListTitleSize: "Large",
                            textPosition: "Left",
                            theme: "white",
                            assetCards: [{
                                assetCardAspectRatio: "1:1",
                                articleCardLayout: "horizontal",
                                assetCardTitle: t("Hosting and Player"),
                                assetCardDescription: t("Host your videos with our HD, ad-free player. Wherever you embed or share them, your custom player design and branding will go with it."),
                                assetCardSrc: "https://i.vimeocdn.com/custom_asset/396c8ea0b0abec01f561e170698bdb8a",
                                assetCardAssetType: "Image",
                                assetAlt: t("Vimeo online video player showing player settings and controls that include volume, speed, progress bar, subtitles, and play button position."),
                                assetCardCta: {
                                    url: "/features/online-video-hosting",
                                    theme: "blue",
                                    variant: "tertiary",
                                    label: t("Hosting and Player"),
                                    bpWithContext: _({
                                        copy: "hosting_and_player",
                                        feature: "general",
                                        location: "body",
                                        eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                        target: "marketing_landing_page_features",
                                        target_path: "https://vimeo.com/features/online-video-hosting"
                                    })
                                }
                            }, {
                                assetCardAspectRatio: "16:9",
                                assetCardTitle: t("Creation and Editing"),
                                assetCardDescription: t("Create and edit your videos with our easy-to-use tools. Add effects, text, and more to make your videos stand out."),
                                assetCardSrc: "https://i.vimeocdn.com/custom_asset/52495987046bfa12a188488ee2d4b6c9?w=654",
                                assetCardAssetType: "Image",
                                assetAlt: t("Vimeo text-based video editor adding an intro song to the video clip called Sweet Dreams (Are Made of Beans)."),
                                assetCardCta: {
                                    url: "/features/video-editor",
                                    theme: "blue",
                                    variant: "tertiary",
                                    label: t("Creation and Editing"),
                                    bpWithContext: _({
                                        copy: "creation_and_editing",
                                        feature: "editor",
                                        location: "body",
                                        eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                        target: "marketing_landing_page_features",
                                        target_path: "https://vimeo.com/features/video-editor"
                                    })
                                }
                            }, {
                                assetCardAspectRatio: "16:9",
                                assetCardTitle: t("Livestream and Events"),
                                assetCardDescription: t("Stream your events live, or host them on-demand. Our tools make it easy to share your content with the world."),
                                assetCardSrc: "https://i.vimeocdn.com/custom_asset/5304f0eac24cd36046c8c4951ac9becf?w=654",
                                assetCardAssetType: "Image",
                                assetAlt: t("Vimeo virtual venues platform with three main speakers who have large profile picture bubbles and an audience of smaller profile pictures below showing the attendees."),
                                assetCardCta: {
                                    url: "/features/livestreaming",
                                    theme: "blue",
                                    variant: "tertiary",
                                    label: t("Livestream and Events"),
                                    bpWithContext: _({
                                        copy: "livestream_and_events",
                                        feature: "livestream_studio",
                                        location: "body",
                                        eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                        target: "marketing_landing_page_features",
                                        target_path: "https://vimeo.com/features/livestreaming"
                                    })
                                }
                            }, {
                                assetCardAspectRatio: "16:9",
                                assetCardTitle: t("Video Management"),
                                assetCardDescription: t("Keep your videos organized and secure. Our tools make it easy to manage your video library and keep your content safe."),
                                assetCardSrc: "https://i.vimeocdn.com/custom_asset/446f2e5a266768cd0e979198ad3446be?w=654",
                                assetCardAssetType: "Image",
                                assetAlt: t("Vimeo video library with privacy settings, team settings, and categorized folders that include Zoom recordings and other files."),
                                assetCardCta: {
                                    url: "/features/video-library",
                                    theme: "blue",
                                    variant: "tertiary",
                                    label: t("Video Management"),
                                    bpWithContext: _({
                                        copy: "video_management",
                                        feature: "library",
                                        location: "body",
                                        eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                        target: "marketing_landing_page_features",
                                        target_path: "https://vimeo.com/features/video-library"
                                    })
                                }
                            }, {
                                assetCardAspectRatio: "16:9",
                                assetCardTitle: t("Monetization"),
                                assetCardDescription: t("Earn money from your videos with our monetization tools. Add ads, subscriptions, and more to your videos."),
                                assetCardSrc: "https://i.vimeocdn.com/custom_asset/bec136064b1c6d8d5267d2d2b996ceda?w=654",
                                assetCardAssetType: "Image",
                                assetAlt: t("Vimeo OTT services allowing members to set purchase options for their video subscription channels, with subscribers having the choice between an annual or monthly payment."),
                                assetCardCta: {
                                    url: "/ott",
                                    theme: "blue",
                                    variant: "tertiary",
                                    label: t("Monetization"),
                                    bpWithContext: _({
                                        copy: "monetization",
                                        feature: "general",
                                        location: "body",
                                        eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                        target: "ott",
                                        target_path: "https://vimeo.com/ott"
                                    })
                                }
                            }]
                        }), (0, i.jsx)(n.default, {
                            featureListEyebrow: t("Better workflow, better results"),
                            featureListTitle: t("Video tools to power any business"),
                            featureListVariant: "Article Cards Product Release",
                            featureListTitleSize: "Large",
                            textPosition: "Right",
                            theme: "light-gray",
                            articleCardsPrintStyle: "3col",
                            assetCards: [{
                                assetCardAspectRatio: "1:1",
                                articleCardLayout: "horizontal",
                                assetCardTitle: t("Security and Compliance"),
                                assetCardDescription: t("Whether you're a Fortune 500, a startup, or anything in between, rest easy knowing your data is safe, and meet your compliance targets with our comprehensive security tools."),
                                assetCardSrc: "https://i.vimeocdn.com/custom_asset/d8f85961c444e65106a23893aaa0b516",
                                assetCardAssetType: "Image",
                                assetAlt: t("Exporting Vimeo audio logs .csv files under the team management settings by selecting a date range from a calendar."),
                                assetCardCta: {
                                    url: "/security",
                                    theme: "blue",
                                    variant: "tertiary",
                                    label: t("Security and Compliance"),
                                    bpWithContext: _({
                                        copy: "security_and_compliance",
                                        feature: "general",
                                        location: "body",
                                        eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                        target: "marketing_landing_page_enterprise",
                                        target_path: "https://vimeo.com/security"
                                    })
                                }
                            }, {
                                assetCardAspectRatio: "16:9",
                                assetCardTitle: t("Analytics"),
                                assetCardDescription: t("Our advanced live and on-demand video analytics help you understand viewer behavior and help you make changes for better future performance."),
                                assetCardSrc: "https://i.vimeocdn.com/custom_asset/836af6d457bbf113ce959ce34f61697f?w=654",
                                assetCardAssetType: "Image",
                                assetAlt: t("Vimeo video analytics dashboard showing the total viewers, views, and average percent watched of a video clip."),
                                assetCardCta: {
                                    url: "/features/video-analytics",
                                    theme: "blue",
                                    variant: "tertiary",
                                    label: t("Analytics"),
                                    bpWithContext: _({
                                        copy: "analytics",
                                        feature: "analytics",
                                        location: "body",
                                        eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                        target: "marketing_landing_page_features",
                                        target_path: "https://vimeo.com/features/video-analytics"
                                    })
                                }
                            }, {
                                assetCardAspectRatio: "16:9",
                                assetCardTitle: t("Privacy"),
                                assetCardDescription: t("Choose exactly who can watch your video before it's even finished uploading. Share only with specific individuals, put it behind a password, or hide it from everyone but you."),
                                assetCardSrc: "https://i.vimeocdn.com/custom_asset/3d31f1a1d35d450eb05e4df251b9e1f3?w=654",
                                assetCardAssetType: "Image",
                                assetAlt: t("Vimeo video privacy settings that allow users to select from options including unlisted, password-protected, hidden, and private video."),
                                assetCardCta: {
                                    url: "/features/video-privacy",
                                    theme: "blue",
                                    variant: "tertiary",
                                    label: t("Privacy"),
                                    bpWithContext: _({
                                        copy: "privacy",
                                        feature: "privacy",
                                        location: "body",
                                        eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                        target: "marketing_landing_page_features",
                                        target_path: "https://vimeo.com/features/video-privacy"
                                    })
                                }
                            }, {
                                assetCardAspectRatio: "16:9",
                                assetCardTitle: t("Access Management"),
                                assetCardDescription: t("Control access with SSO, domain whitelisting, and embed restrictions, and manage granular user permissions with SCIM."),
                                assetCardSrc: "https://i.vimeocdn.com/custom_asset/0567bb4d6854e1cc8b6754bfa2fc80f7?w=654",
                                assetCardAssetType: "Image",
                                assetAlt: t("Add team members using Vimeo's video management settings to control access for different groups, including brand design and product marketing."),
                                assetCardCta: {
                                    url: "/features/video-collaboration",
                                    theme: "blue",
                                    variant: "tertiary",
                                    label: t("Access Management"),
                                    bpWithContext: _({
                                        copy: "access_management",
                                        feature: "general",
                                        location: "body",
                                        eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                        target: "marketing_landing_page_features",
                                        target_path: "https://vimeo.com/features/video-collaboration"
                                    })
                                }
                            }]
                        }), (0, i.jsx)(b.default, {
                            eyebrow: t("Use cases"),
                            spotlightTitle: t("How customers use Vimeo"),
                            theme: "white",
                            assetCards: [{
                                imageUrl: "https://i.vimeocdn.com/custom_asset/3b519a6d03c716419d34270adc3a7889?w=1408&q=80",
                                cardSubTitle: t("The three-time Staff Picked director shares his deeply personal, powerful short films with Vimeo."),
                                cardTitle: "Morgan Cooper",
                                videoUrl: "https://player.vimeo.com/video/436960717?h=f5b9927bde&title=0&byline=0&portrait=0&pip=false",
                                cardAssetType: "Video",
                                videoBPWithContext: _({
                                    copy: "morgan_cooper",
                                    feature: "player",
                                    location: "body",
                                    eventNames: ["vimeo.marketing_player_action", "vimeo.marketing_player_view"]
                                }),
                                bpWithContext: _({
                                    copy: "morgan_cooper",
                                    feature: "general",
                                    location: "body",
                                    eventNames: ["vimeo.explore_action"]
                                })
                            }, {
                                imageUrl: "https://i.vimeocdn.com/custom_asset/3cb41dceafd91acc5f09269d42abff7d?w=1408&q=80",
                                cardSubTitle: t("Vermicular's video investment boosts global reach and creates reusable marketing assets."),
                                cardTitle: "Vermicular",
                                videoUrl: "https://player.vimeo.com/video/764297424?h=04309e89de&title=0&byline=0&portrait=0&pip=false",
                                cardAssetType: "Video",
                                videoBPWithContext: _({
                                    copy: "vermicular",
                                    feature: "player",
                                    location: "body",
                                    eventNames: ["vimeo.marketing_player_action", "vimeo.marketing_player_view"]
                                }),
                                bpWithContext: _({
                                    copy: "vermicular",
                                    feature: "general",
                                    location: "body",
                                    eventNames: ["vimeo.explore_action"]
                                })
                            }, {
                                imageUrl: "https://i.vimeocdn.com/custom_asset/e0dab8beb6c817de5b52637aae31b7c1?w=1408&q=80",
                                cardSubTitle: t("With 300,000 employees worldwide, Stellantis relies on Vimeo for their video-based virtual instruction globally."),
                                cardTitle: t("Stellantis"),
                                videoUrl: "https://player.vimeo.com/video/750432905?h=ab55dbe681&title=0&byline=0&portrait=0&pip=false",
                                cardAssetType: "Video",
                                videoBPWithContext: _({
                                    copy: "stellantis",
                                    feature: "player",
                                    location: "body",
                                    eventNames: ["vimeo.marketing_player_action", "vimeo.marketing_player_view"]
                                }),
                                bpWithContext: _({
                                    copy: "stellantis",
                                    feature: "general",
                                    location: "body",
                                    eventNames: ["vimeo.explore_action"]
                                })
                            }],
                            modalCloseText: ""
                        }), (0, i.jsx)(p.default, {
                            theme: "light-gray",
                            eyebrow: t("Integrations with Vimeo"),
                            title: t("Streamline your workflow"),
                            headerVariant: "display-5",
                            cta: {
                                href: "https://vimeo.com/integrations",
                                label: t("Browse all integrations"),
                                buttonTheme: "light-gray",
                                target: "_blank",
                                bpWithContext: _({
                                    copy: "browse_all_integrations",
                                    feature: "general",
                                    location: "body",
                                    eventNames: ["vimeo.explore_action", "vimeo.explore_button_view"],
                                    target: "help_center",
                                    target_path: "https://vimeo.com/integrations"
                                })
                            },
                            logos: [{
                                url: "https://i.vimeocdn.com/custom_asset/08e0c4cfb01335d127aa57b84152707d",
                                alt: "Asana"
                            }, {
                                url: "https://i.vimeocdn.com/custom_asset/7fd57bffbbea7eee2d967b996abe0dba",
                                alt: "Figma"
                            }, {
                                url: "https://i.vimeocdn.com/custom_asset/5afc37b8340b211f317e317b19351973",
                                alt: "Dropbox"
                            }, {
                                url: "https://i.vimeocdn.com/custom_asset/ce5cf3c5889683aac6c8a170464ba545",
                                alt: "Google Drive"
                            }, {
                                url: "https://i.vimeocdn.com/custom_asset/bfdf6d9ec456201e87979349430e7645",
                                alt: "Slack"
                            }, {
                                url: "https://i.vimeocdn.com/custom_asset/7e305166c1b976ba0694fa5c7aa30acd",
                                alt: "Box"
                            }, {
                                url: "https://i.vimeocdn.com/custom_asset/1d3c9399abedef05fcc0dac8c9adb838",
                                alt: "Webex"
                            }, {
                                url: "https://i.vimeocdn.com/custom_asset/5fd73c5ceba4a36fa6ecbd5e58c6a2d8",
                                alt: "Zoom"
                            }]
                        }), (0, i.jsx)(m.default, {
                            locales: {
                                en: !0
                            },
                            children: (0, i.jsx)(g.default, {
                                theme: "white",
                                variant: "medium",
                                semanticLevel: "h3",
                                title: "Discover the latest from Vimeo",
                                isClickableImage: !0,
                                resourceCards: N
                            })
                        }), (0, i.jsx)(m.default, {
                            locales: {
                                ja: !0
                            },
                            children: (0, i.jsx)(g.default, {
                                theme: "white",
                                variant: "medium",
                                semanticLevel: "h3",
                                title: t("Discover the latest from Vimeo"),
                                isClickableImage: !0,
                                resourceCards: T
                            })
                        }), (0, i.jsx)(m.default, {
                            locales: {
                                ko: !0
                            },
                            children: (0, i.jsx)(g.default, {
                                theme: "white",
                                variant: "medium",
                                semanticLevel: "h3",
                                title: t("Discover the latest from Vimeo"),
                                isClickableImage: !0,
                                resourceCards: A
                            })
                        }), (0, i.jsx)(m.default, {
                            locales: {
                                en: !1,
                                fr: !0,
                                pt: !0,
                                es: !0,
                                de: !0,
                                ja: !1,
                                ko: !1
                            },
                            children: (0, i.jsx)(g.default, {
                                theme: "white",
                                variant: "medium",
                                semanticLevel: "h3",
                                title: t("Discover the latest from Vimeo"),
                                isClickableImage: !0,
                                resourceCards: j
                            })
                        }), (0, i.jsx)(l.Z, {})]
                    })
                }
        },
        88404: function(e, t, a) {
            a.d(t, {
                H: function() {
                    return o
                },
                e: function() {
                    return r
                }
            });
            var i = a(47426);
            let o = e => {
                    let {
                        eventDate: t,
                        eventTimeZone: a
                    } = e, o = new Date(t);
                    o.setDate(o.getDate() + 1);
                    let r = (0, i.pQ)(a),
                        s = o.getTime() - 6e4 * o.getTimezoneOffset() - r;
                    return new Date().getTime() > s
                },
                r = e => {
                    let {
                        eventDate: t,
                        eventTimeZone: a
                    } = e, o = new Date(t), r = (0, i.pQ)(a, o), s = o.getTime() - 6e4 * o.getTimezoneOffset() - r, n = new Date;
                    return n.setMilliseconds(0), n.setSeconds(0), n.getTime() <= s
                }
        },
        75388: function(e, t, a) {
            a.d(t, {
                N: function() {
                    return i
                }
            });
            let i = {
                "@context": "https://schema.org",
                "@graph": [{
                    "@type": ["Organization", "Corporation", "Brand"],
                    name: "Vimeo",
                    "@id": "https://vimeo.com#ID",
                    alternateName: ["Vimeo, Inc.", "Vimeo, LLC", "Vimeo.com"],
                    legalName: "Vimeo, Inc.",
                    url: "https://vimeo.com",
                    logo: "https://de.wikipedia.org/wiki/Datei:Vimeo_logo.png",
                    description: "Vimeo, Inc. is an American video hosting, sharing, services provider, and broadcaster headquartered in New York City.",
                    foundingDate: "2004-11",
                    naics: "518210",
                    sameAs: ["https://x.com/vimeo", "https://www.facebook.com/Vimeo/", "https://www.linkedin.com/company/vimeo", "https://en.wikipedia.org/wiki/Vimeo", "https://www.google.com/search?kgmid=/m/0s8_15x", "https://www.wikidata.org/wiki/Q156376", "https://www.crunchbase.com/organization/vimeo", "https://www.bloomberg.com/profile/company/1354237D:US", "https://opencorporates.com/companies/us_de/4550462"],
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "330 West 34th Street, 10th Floor",
                        addressLocality: "New York",
                        addressCountry: "US",
                        addressRegion: "NY",
                        postalCode: "10001"
                    },
                    iso6523Code: "0199:25490061AWYWC90UIJ68",
                    taxID: "26-2816886",
                    numberOfEmployees: {
                        "@type": "QuantitativeValue",
                        minValue: 1e3,
                        maxValue: 5e3
                    }
                }, {
                    "@type": "WebSite",
                    name: "Vimeo",
                    publisher: {
                        "@id": "https://vimeo.com/#ID"
                    },
                    alternateName: "Vimeo.com",
                    url: "https://vimeo.com/",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: {
                            "@type": "EntryPoint",
                            urlTemplate: "https://vimeo.com/search?q={search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                    }
                }]
            }
        }
    }
]);
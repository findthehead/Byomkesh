"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [52727], {
        52727: function(e, t, o) {
            o.r(t), o.d(t, {
                default: function() {
                    return k
                }
            });
            var r = o(52322),
                n = o(12524),
                a = o.n(n),
                s = o(2784),
                i = o(78437),
                l = o(78215),
                d = o(18340),
                c = o(75876),
                m = e => {
                    let {
                        turnOffAnimation: t,
                        backgroundVideoUrl: o,
                        imageUrl: n,
                        altText: s,
                        bpVideoWithContext: i
                    } = e;
                    return (0, r.jsx)("div", {
                        className: a()("hero-zoom-body", "md:opacity-[var(--hero-body-opacity)] motion-reduce:md:opacity-100 transition-opacity delay-300 duration-500 z-0", "col-[2/-2] md:col-[1/-1] mt-9 mb-9 overflow-hidden", "motion-reduce:md:mt-9 motion-reduce:md:relative", {
                            "md:relative !md:opacity-100": t,
                            "md:sticky md:top-0 md:h-[var(--body-container-height)] motion-reduce:md:h-auto md:mb-[var(--zoom-body-container-mb)] z-0 md:-mt-[var(--laptop-offset)]": !t
                        }),
                        children: (0, r.jsxs)("div", {
                            className: a()("hero-zoom-scale-wrapper w-full relative md:pb-14 origin-center transform-gpu overflow-hidden", "md:scale-[var(--laptop-scale)] md:top-[var(--laptop-top)]", {
                                "md:h-[var(--body-subcontainer-height)]": !t
                            }),
                            style: {
                                transformStyle: "preserve-3d"
                            },
                            children: [(0, r.jsx)("div", {
                                className: a()("hero-zoom-device pointer-events-none block", "will-change-opacity md:opacity-[var(--opacity)]", "w-full h-auto md:max-w-[var(--laptop-max-width)] motion-reduce:md:max-w-300 mx-auto", "bg-no-repeat bg-top bg-contain", "aspect-[var(--mobile-aspect-ratio)] bg-[image:var(--mobile-bg)]", "md:aspect-[var(--desktop-aspect-ratio)] md:bg-[image:var(--desktop-bg)]")
                            }), o && (0, r.jsx)(c.Z, {
                                wrapperClasses: a()("hero-zoom-iframe absolute h-auto aspect-[1200/625] overflow-hidden origin-top", "top-[30%] w-[80%]", "md:h-auto md:[&_.progressive-image]:w-full md:[&_.progressive-image]:h-auto", "md:top-[var(--asset-top)] motion-reduce:md:top-[35%] motion-reduce:top-[35%] motion-reduce:md:max-w-144 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-1/2 ", {
                                    "md:w-[var(--asset-width)] md:max-w-[var(--asset-max-width)] md:brightness-[var(--asset-brightness)] transition-filter duration-300 md:motion-reduce:opacity-100 md:scale-[var(--asset-scale)]": !t,
                                    "md:max-w-144": t
                                }),
                                assetClasses: "w-full h-auto",
                                imgSrc: o ? n : void 0,
                                src: o,
                                isVideo: !!o,
                                alt: s,
                                bpWithContext: i
                            })]
                        })
                    })
                },
                p = o(18541),
                u = o(87163),
                y = o(10040);

            function h(e) {
                let {
                    ctaList: t,
                    className: o
                } = e, n = t.length > 1 ? "ul" : "div", i = t.length > 1 ? "li" : s.Fragment, l = (0, s.useRef)(null), d = (0, u.OW)({
                    ref: l,
                    threshold: .4
                });
                return (0, r.jsx)(n, {
                    ref: l,
                    className: a()("flex flex-col gap-1 [&_.button]:w-full md:[&_.button]:w-fit md:flex-row", {
                        [o]: o
                    }),
                    children: t.map((e, t) => (0, r.jsx)(i, {
                        children: (0, r.jsx)(y.default, {
                            className: a()("cursor-pointer w-full md:w-fit", {
                                "md:animate-button md:motion-reduce:animate-none": d,
                                "md:opacity-0 md:motion-reduce:opacity-100": !1 === d
                            }),
                            ...e,
                            variant: "primary"
                        })
                    }, t))
                })
            }
            var v = e => {
                    let {
                        turnOffAnimation: t,
                        title: o,
                        semanticLevel: n,
                        headerVariant: s,
                        eyebrow: i,
                        description: l,
                        theme: d,
                        ctaList: c
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: a()("header-container col-[1/-1] grid grid-cols-25 mx-auto w-full z-3", {
                            "md:sticky motion-reduce:md:relative top-[var(--header-top)] motion-reduce:top-0": !t
                        }),
                        children: [o && (0, r.jsx)(p.default, {
                            element: "div",
                            transparent: !0,
                            hideTopMargin: !0,
                            hideBottomMargin: !0,
                            hGroupGridClasses: "col-[1/-1] md:col-[1/-1]",
                            descriptionGridClasses: "col-[1/-1] md:col-[3/-3]",
                            containerClasses: "[&>*]:!pb-0 col-[1/-1] md:opacity-[var(--header-opacity)]",
                            title: o,
                            semanticLevel: n,
                            headerVariant: s,
                            eyebrow: i,
                            description: l,
                            theme: d
                        }), c && c.length > 0 && (0, r.jsx)(h, {
                            ctaList: c,
                            className: "hero-zoom-cta-wrapper justify-center col-[3/-3] h-fit pt-9 md:col-[2/-2] md:opacity-[var(--header-cta-opacity)]"
                        })]
                    })
                },
                w = o(24931),
                f = o(58678),
                b = e => {
                    let [t, o] = e.split("/").map(Number);
                    return o ? t / o : t
                },
                x = e => {
                    let {
                        containerEl: t,
                        setIsAcceptableSize: o,
                        setZoomBodyContainerMb: r,
                        setContainerHeight: n,
                        setHeaderTop: a,
                        setHeaderHeight: s,
                        setAssetBrightness: i,
                        setAssetContainerMaxWidth: l,
                        setAboveContainerHeight: d,
                        setAssetTop: c,
                        setAssetWidth: m,
                        setAssetMaxWidth: p,
                        setAssetScale: u,
                        setLaptopScale: y,
                        setOpacity: h,
                        setHeaderOpacity: v,
                        setHeaderCtaOpacity: w,
                        setSubContentMt: x,
                        setSubContentMb: g,
                        setSubContentOpacity: P,
                        setAspectRatio: z,
                        setBgImageUrl: S,
                        setSubcontentZ: j,
                        desktopAspectRatio: k = "1200/625",
                        desktopBgImageUrl: E = "",
                        mobileBgImageUrl: N = "",
                        mobileAspectRatio: C = "1/2"
                    } = e;
                    if (window) {
                        var L, H;
                        let e = document.querySelector("header.global-nav"),
                            N = (null == e ? void 0 : e.clientHeight) || 0,
                            C = document.querySelector(".promo-banner-v3"),
                            _ = (null == C ? void 0 : C.clientHeight) ? (null == C ? void 0 : C.clientHeight) - 48 : 0,
                            W = (null === (L = t.querySelector(".header-container")) || void 0 === L ? void 0 : L.clientHeight) || 0,
                            R = (null === (H = t.querySelector(".hero-zoom-subcontent>div")) || void 0 === H ? void 0 : H.clientHeight) || 0,
                            Z = window.innerWidth / window.innerHeight,
                            A = N + _ + W + 120 + 32,
                            O = window.innerHeight - A,
                            q = window.innerHeight - A,
                            B = Math.ceil(q * b(k)),
                            M = .4 * B,
                            G = Math.min(q, window.innerWidth / b(k)) / 2 - R / 2,
                            I = t.getBoundingClientRect().top,
                            V = (0, f.u)({
                                min: 1,
                                max: 2.5,
                                num: 1 - (I - N - 72) / q * 1.75
                            }),
                            U = (0, f.u)({
                                min: 0,
                                max: 1,
                                num: 1 + I / q * 1.5
                            }),
                            D = (0, f.u)({
                                min: 0,
                                max: 1,
                                num: 1 + (I + 72) / (W / 2)
                            }),
                            F = (0, f.u)({
                                min: 0,
                                max: 1,
                                num: 1 + (I - 72) / 72
                            }),
                            T = window.innerWidth / (M - 64) / 2.5,
                            J = U < .3 ? 1 : 0;
                        null == o || o(Z > 1 && O > 300), null == r || r("0"), null == n || n(q), null == a || a(133 + _), null == s || s(W), null == i || i(1 === J ? .2 : 1), null == l || l(B), null == d || d(A), null == c || c("35%"), null == m || m("40%"), null == p || p(M), null == u || u(0 === U ? T : 1), null == y || y(V), null == h || h(U), null == v || v(D), null == w || w(F), null == x || x(G), null == g || g(G - 72), null == P || P(J), null == z || z(k), null == S || S(E), null == j || j(1 === U ? 1 : 3)
                    }
                },
                g = e => {
                    let {
                        containerEl: t,
                        desktopAspectRatio: o,
                        desktopBgImageUrl: r,
                        mobileBgImageUrl: n,
                        mobileAspectRatio: a
                    } = e;
                    t && o && r && n && a && (t.style.setProperty("--desktop-bg", 'url("'.concat(r, '")')), t.style.setProperty("--desktop-aspect-ratio", o), t.style.setProperty("--mobile-bg", 'url("'.concat(n, '")')), t.style.setProperty("--mobile-aspect-ratio", a), t.style.setProperty("--header-top", "8.325rem"), t.style.setProperty("--laptop-max-width", "75rem"), t.style.setProperty("--laptop-top", "0"), t.style.setProperty("--asset-scale", "0"), t.style.setProperty("--asset-max-width", "30rem"), t.style.setProperty("--asset-width", "40%"), t.style.setProperty("--asset-top", "35%"), t.style.setProperty("--asset-brightness", "1"), t.style.setProperty("--sub-content-mt", "0"), t.style.setProperty("--sub-content-mb", "0"), t.style.setProperty("--container-height", "auto"), t.style.setProperty("--laptop-offset", "0"), t.style.setProperty("--laptop-scale", "1"), t.style.setProperty("--header-height", "auto"), t.style.setProperty("--zoom-body-container-mb", "0"), t.style.setProperty("--opacity", "1"), t.style.setProperty("--header-opacity", "1"), t.style.setProperty("--header-cta-opacity", "1"), t.style.setProperty("--sub-content-opacity", "1"), t.style.setProperty("--subcontent-z", "2"))
                },
                P = e => {
                    let {
                        containerRef: t,
                        desktopAspectRatio: o,
                        desktopBgImageUrl: r,
                        mobileBgImageUrl: n,
                        mobileAspectRatio: a,
                        isZoomBypassed: i
                    } = e, [l, d] = (0, s.useState)(!0), [c, m] = (0, s.useState)(!0), [p, y] = (0, s.useState)(!1), h = (0, u.y1)(), v = (0, u.S1)(t, {
                        threshold: 0
                    }), [f, b] = (0, s.useState)(), [P, z] = (0, s.useState)(), [S, j] = (0, s.useState)(), [k, E] = (0, s.useState)(), [N, C] = (0, s.useState)(), [L, H] = (0, s.useState)(), [_, W] = (0, s.useState)(), [R, Z] = (0, s.useState)(), [A, O] = (0, s.useState)(), [q, B] = (0, s.useState)(), [M, G] = (0, s.useState)(), [I, V] = (0, s.useState)(), [U, D] = (0, s.useState)(), [F, T] = (0, s.useState)(), [J, K] = (0, s.useState)(), [Q, X] = (0, s.useState)(), [Y, $] = (0, s.useState)(), [ee, et] = (0, s.useState)(), [eo, er] = (0, s.useState)(), [en, ea] = (0, s.useState)(), es = (0, s.useCallback)(() => {
                        g({
                            containerEl: t.current,
                            desktopAspectRatio: o,
                            desktopBgImageUrl: r,
                            mobileBgImageUrl: n,
                            mobileAspectRatio: a
                        })
                    }, [t, o, r, n, a]), ei = (0, s.useCallback)(() => {
                        (null == t ? void 0 : t.current) && !h && x({
                            containerEl: t.current,
                            desktopAspectRatio: o,
                            desktopBgImageUrl: r,
                            mobileBgImageUrl: n,
                            mobileAspectRatio: a,
                            setZoomBodyContainerMb: b,
                            setIsAcceptableSize: d,
                            setHeaderTop: V,
                            setContainerHeight: z,
                            setAssetContainerMaxWidth: E,
                            setAssetTop: H,
                            setAssetWidth: W,
                            setAssetMaxWidth: Z,
                            setSubContentMt: K,
                            setSubContentMb: X,
                            setAboveContainerHeight: C,
                            setAspectRatio: et,
                            setBgImageUrl: er
                        })
                    }, [b, V, z, E, H, W, Z, K, X, C, et, er, t, h, o, r, n, a]);
                    (0, s.useEffect)(() => {
                        window && ((N ? window.innerHeight - N : 0) > 200 && !h && l ? m(!0) : m(!1))
                    }, [N, h, l]), (0, s.useEffect)(() => {
                        let e = t.current;
                        e && c && (void 0 !== eo && e.style.setProperty("--desktop-bg", 'url("'.concat(eo, '")')), void 0 !== ee && e.style.setProperty("--desktop-aspect-ratio", ee), void 0 !== k && e.style.setProperty("--laptop-max-width", "".concat(k, "px")), void 0 !== N && e.style.setProperty("--laptop-top", "".concat(N, "px")), void 0 !== I && e.style.setProperty("--header-top", "".concat(I, "px")), void 0 !== L && e.style.setProperty("--asset-top", "".concat(L)), void 0 !== _ && e.style.setProperty("--asset-width", "".concat(_)), void 0 !== R && e.style.setProperty("--asset-max-width", "".concat(R, "px")), void 0 !== J && e.style.setProperty("--sub-content-mt", "".concat(J, "px")), void 0 !== Q && e.style.setProperty("--sub-content-mb", "".concat(Q, "px")), void 0 !== f && e.style.setProperty("--zoom-body-container-mb", "".concat(f)), void 0 !== N && e.style.setProperty("--laptop-offset", "".concat(N, "px")), void 0 !== P && e.style.setProperty("--container-height", "".concat(P, "px"))), f && P && k && N && L && _ && R && ee && eo && y(!0)
                    }, [eo, ee, k, N, I, L, _, R, J, Q, f, P, c, es]);
                    let el = (0, s.useCallback)(() => {
                        (null == t ? void 0 : t.current) && c && x({
                            containerEl: t.current,
                            desktopAspectRatio: o,
                            desktopBgImageUrl: r,
                            mobileBgImageUrl: n,
                            mobileAspectRatio: a,
                            setAssetBrightness: j,
                            setLaptopScale: B,
                            setOpacity: G,
                            setHeaderOpacity: D,
                            setHeaderCtaOpacity: T,
                            setAssetScale: O,
                            setSubContentOpacity: $,
                            setSubcontentZ: ea
                        })
                    }, [c, t, P, h, o, r, n, a, j, B, G, D, T, O, $, ea]);
                    return (0, s.useEffect)(() => {
                        let e = t.current;
                        e && (void 0 !== q && e.style.setProperty("--laptop-scale", "".concat(q)), void 0 !== M && e.style.setProperty("--opacity", "".concat(M)), void 0 !== F && e.style.setProperty("--header-cta-opacity", "".concat(F)), void 0 !== U && e.style.setProperty("--header-opacity", "".concat(U)), void 0 !== A && e.style.setProperty("--asset-scale", "".concat(A)), void 0 !== Y && e.style.setProperty("--sub-content-opacity", "".concat(Y)), void 0 !== en && e.style.setProperty("--subcontent-z", "".concat(en)), void 0 !== S && e.style.setProperty("--asset-brightness", "".concat(S)))
                    }, [q, M, F, U, A, Y, en, S]), (0, s.useEffect)(() => {
                        if (!i) return window && P && P > 0 && (null == v ? void 0 : v.isIntersecting) ? (el(), window.addEventListener("scroll", el)) : (null == v ? void 0 : v.isIntersecting) || window.removeEventListener("scroll", el), () => {
                            window.removeEventListener("scroll", el)
                        };
                        window.removeEventListener("scroll", el), m(!1), y(!0)
                    }, [P, el, null == v ? void 0 : v.isIntersecting, i]), (0, s.useEffect)(() => {
                        c || es()
                    }, [c, es]), (0, s.useEffect)(() => {
                        let e = (0, w.Ds)(ei, 100);
                        if (i) window.addEventListener("resize", e), m(!1), y(!0);
                        else if (window) {
                            let s = t.current;
                            if (s) return g({
                                containerEl: s,
                                desktopAspectRatio: o,
                                desktopBgImageUrl: r,
                                mobileBgImageUrl: n,
                                mobileAspectRatio: a
                            }), s.style.setProperty("--body-container-height", "100vh"), s.style.setProperty("--body-subcontainer-height", "auto"), s.style.setProperty("--hero-body-opacity", "1"), ei(), window.removeEventListener("resize", e), window.addEventListener("resize", e), () => {
                                window.removeEventListener("resize", e)
                            }
                        }
                    }, [t, ei, o, r, n, a, i]), {
                        isZoomActive: c,
                        isZoomReady: p
                    }
                },
                z = o(38088),
                S = o(15943);

            function j(e) {
                let {
                    additionalClasses: t,
                    turnOffAnimation: o = !1,
                    style: n,
                    title: i,
                    headerVariant: l = "display-5",
                    semanticLevel: d = "h2",
                    eyebrow: m,
                    description: p,
                    imageUrl: y,
                    ctaList: v
                } = e, w = (0, S.P)(l), f = (0, s.useRef)(null), b = (0, u.OW)({
                    ref: f
                });
                return (0, r.jsxs)("div", {
                    ref: f,
                    style: n,
                    className: a()("hero-zoom-subcontent relative w-full md:opacity-[var(--sub-content-opacity)] transition-opacity duration-500 z-[var(--subcontent-z)]", "col-[2/-2] md:col-[1/-1]", {
                        [t]: t,
                        "md:bg-ebony-gray": !y,
                        "md:w-[var(--laptop-max-width)] motion-reduce:md:w-screen md:h-[var(--container-height)] md:mx-auto items-center": !o,
                        "overflow-hidden": o
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: a()("z-3 flex flex-col gap-6 text-generic-card-content md:text-white", {
                            "md:py-24": o
                        }),
                        children: [m && (0, r.jsx)("span", {
                            className: a()("hero-zoom-content-title text-eyebrow", {
                                "md:animate-title md:motion-reduce:animate-none": !0 === b,
                                "md:opacity-0 md:motion-reduce:opacity-100": !1 === b
                            }),
                            children: m
                        }), i && (0, r.jsx)(d || "h2", {
                            className: a()("hero-zoom-content-title", w, {
                                "md:animate-title md:motion-reduce:animate-none": !0 === b,
                                "md:opacity-0 md:motion-reduce:opacity-100": !1 === b
                            }),
                            children: i
                        }), p && (0, r.jsx)("div", {
                            className: a()("hero-zoom-content-description text-body-1", {
                                "md:animate-body md:motion-reduce:animate-none": b,
                                "md:opacity-0 md:motion-reduce:opacity-100": !1 === b
                            }),
                            children: (0, z.Z)(p)
                        }), v && v.length > 0 && (0, r.jsx)(h, {
                            className: a()("hero-zoom-content-cta", {
                                "md:animate-button md:motion-reduce:animate-none": b,
                                "md:opacity-0 md:motion-reduce:opacity-100": !1 === b
                            }),
                            ctaList: v
                        })]
                    }), y && (0, r.jsx)(c.Z, {
                        wrapperClasses: a()("hidden", {
                            "md:block !absolute w-screen max-w-full h-auto top-0 left-0 z-0 overflow-hidden md:ebony-gray": o,
                            "md:hidden": !o
                        }),
                        assetClasses: "w-screen brightness-50",
                        hasBlurBackdrop: !1,
                        src: y,
                        isVideo: !1
                    })]
                })
            }

            function k(e) {
                let {
                    id: t,
                    theme: o = "white",
                    title: n,
                    semanticLevel: c = "h1",
                    headerVariant: p,
                    eyebrow: u,
                    description: y,
                    ctaList: h,
                    embeddedVimeoUrl: w,
                    backgroundVideoUrl: f,
                    desktopBgImageUrl: b,
                    mobileBgImageUrl: x,
                    imageUrl: g,
                    altText: z,
                    videoTitle: S,
                    videoSemanticLevel: k,
                    videoHeaderVariant: E,
                    videoEyebrow: N,
                    videoDescription: C,
                    bpVideoWithContext: L,
                    subContentImageUrl: H,
                    subContentVideoUrl: _,
                    subContentCtaList: W,
                    isZoomBypassed: R
                } = e;
                t = t || (0, d.l)(n);
                let Z = (0, s.useRef)(null),
                    A = "1200/625",
                    {
                        isZoomActive: O,
                        isZoomReady: q
                    } = P({
                        containerRef: Z,
                        desktopAspectRatio: A,
                        desktopBgImageUrl: b,
                        mobileBgImageUrl: x,
                        mobileAspectRatio: "1/2",
                        isZoomBypassed: R
                    });
                return (0, r.jsxs)(i.Z, {
                    id: t,
                    ref: Z,
                    element: "section",
                    refStyle: {
                        "--subcontent-z": 1,
                        "--body-container-height": "100vh",
                        "--hero-body-opacity": R ? 1 : 0,
                        "--desktop-aspect-ratio": A,
                        "--mobile-aspect-ratio": "1/2",
                        "--asset-top": "35%",
                        "--desktop-bg": 'url("'.concat(b, '")'),
                        "--mobile-bg": 'url("'.concat(x, '")')
                    },
                    screenWidth: !0,
                    "data-bp-location": "header",
                    theme: o,
                    children: [(0, r.jsx)("div", {
                        className: a()("hero-zoom-loader flex justify-center items-center bg-white w-screen overflow-hidden h-screen relative left-0 top-0 text-primary motion-reduce:hidden", {
                            hidden: q
                        }),
                        "aria-hidden": !0,
                        children: (0, r.jsx)(l.Z, {
                            className: "fixed top-1/2 z-10 w-24 h-24 motion-reduce:hidden"
                        })
                    }), (0, r.jsx)(v, {
                        turnOffAnimation: !O,
                        title: n,
                        semanticLevel: c,
                        headerVariant: p,
                        eyebrow: u,
                        description: y,
                        ctaList: h,
                        theme: o
                    }), (0, r.jsx)(m, {
                        turnOffAnimation: !O,
                        embeddedVimeoUrl: w,
                        backgroundVideoUrl: f,
                        imageUrl: g,
                        altText: z,
                        bpVideoWithContext: L
                    }), (0, r.jsx)(j, {
                        additionalClasses: a()("relative col-[1/-1] mx-auto md:flex justify-center py-w-full md:[&>.hero-zoom-content-description]:w-[calc((11/23)*100%)]", "text-center md:text-left", "motion-reduce:md:transform-none", {
                            "md:px-[max(calc(50vw-45rem+4.5rem),4.5rem)]": !O
                        }, {
                            "md:px-8": O
                        }),
                        turnOffAnimation: !O,
                        title: S,
                        semanticLevel: k,
                        headerVariant: E,
                        eyebrow: N,
                        description: C,
                        imageUrl: H,
                        videoUrl: _,
                        ctaList: W
                    })]
                })
            }
        }
    }
]);
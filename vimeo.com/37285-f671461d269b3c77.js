"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [37285], {
        26580: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return g
                }
            });
            var a = l(52322),
                n = l(12524),
                r = l.n(n),
                o = l(2784),
                i = l(75876),
                s = l(10040),
                d = l(15943),
                c = l(51252),
                u = l(43544),
                m = l(76179),
                f = l(15215),
                x = l(5243),
                v = l(35729);

            function g(e) {
                let {
                    itemAnchor: t,
                    title: l,
                    semanticLevel: n,
                    headerVariant: g,
                    aspectRatio: p = "4:3",
                    description: h,
                    imageAsset: b,
                    hasImageHover: w = !0,
                    videoAsset: y,
                    bynderImage: j,
                    altText: k,
                    stat: N,
                    icon: C,
                    cta: _,
                    sizeVariant: Z = "Large",
                    layoutVariant: S = "Default",
                    theme: L = "black",
                    transparent: I,
                    className: E = "",
                    videoRef: W,
                    autoPlay: M,
                    flip: T,
                    enableDragNDrop: R,
                    builderButtonV3: D,
                    isImagePadded: z = !1,
                    ...P
                } = e, O = (0, c.n)({
                    imageAsset: b,
                    videoAsset: y,
                    altText: k,
                    bynderImage: j,
                    options: {
                        videoRef: W,
                        autoPlay: M
                    }
                }), A = null == _ ? void 0 : _.url, V = (null == _ ? void 0 : _.url) ? "a" : "div", F = "Large" === Z, H = F && T, J = F && !T, K = g ? {
                    ...(0, d.P)(g),
                    "max-lg:!text-display-7 max-xl:!text-display-mobile-6": F
                } : {
                    "text-display-mobile-7 lg:text-display-5": "Default" === S,
                    "text-display-mobile-5 lg:text-display-5": "Inset Stat" === S,
                    "text-display-mobile-7 leading-[1.65rem] lg:text-display-7 lg:leading-[2.2rem]": "Statement" === S
                }, [U, B] = (0, o.useState)();
                return (0, o.useEffect)(() => {
                    B((0, f.Z)({
                        cta: _
                    }))
                }, [B, f.Z, _]), (0, a.jsxs)(m.Z, {
                    ...P,
                    style: {
                        "--aspect-ratio": p.replace(":", "/")
                    },
                    className: r()("text-card-content group font-sans rounded-standard lg:rounded-standard flex flex-col ".concat(L, " ").concat(E), {
                        "lg:min-h-[357px]": !(F && "1:1" === p),
                        "shadow-4xl": "black" === L,
                        "shadow-2xl": "white" === L,
                        "col-start-1 col-end-24 lg:col-start-2 lg:col-span-23  lg:flex-row-reverse": F,
                        "lg:!min-h-[39.563rem]": F && "1:1" === p,
                        "bg-card-background-light": !I && "light-gray" !== L,
                        "bg-card-background": !I && "light-gray" === L
                    }),
                    cta: _,
                    children: [(0, a.jsx)("div", {
                        id: t,
                        className: "pt-global-nav -mt-global-nav"
                    }), (b || j || y) && (0, a.jsx)(V, {
                        className: r()("flex justify-end", {
                            "lg:justify-end": !T,
                            "lg:justify-start lg:order-1": T,
                            "flex-1": F,
                            "grow-0 shrink-[1]": !F
                        }),
                        ...(null == _ ? void 0 : _.url) && U,
                        children: (0, a.jsx)(i.Z, {
                            wrapperClasses: r()("asset-block w-full justify-end overflow-hidden flex relative aspect-[var(--aspect-ratio)]", {
                                "lg:justify-end": !T,
                                "lg:justify-start": T,
                                "lg:w-full": !F,
                                "flex-1 lg:aspect-[unset]": F && "1:1" !== p,
                                "w-auto h-full aspect-[var(--aspect-ratio)]": F && "1:1" === p,
                                "transition-all duration-500 brightness-100 ease-in-out group-hover:brightness-75": (b || j) && !y && w,
                                "pt-4 pl-4 pr-4 rounded-standard": z,
                                "bg-raven-gray": "black" === L,
                                "bg-pearl-white": "light-gray" === L
                            }),
                            assetClasses: r()("object-center object-cover h-full w-full absolute rounded-standard aspect-[var(--aspect-ratio)]", {
                                "!rounded-none !rounded-t-2xl": z,
                                "w-full h:auto lg:w-auto": F,
                                "bg-raven-gray": "black" === L,
                                "bg-pearl-white": "light-gray" === L
                            }),
                            ...O
                        })
                    }), (0, a.jsxs)(u.Z, {
                        cta: _,
                        wrapperClasses: r()("p-8 pb-16 flex flex-col", {
                            "lg:pl-14 lg:pr-10 xl:pr-[104px]": J,
                            "lg:pl-10 xl:pl-[104px] lg:pr-14": H,
                            "lg:py-14 lg:w-1/2 lg:max-w-[36.8rem]": F && "1:1" !== p,
                            "lg:justify-center lg:py-14 lg:[&>*]:max-w-[532px] lg:box-content": F && "1:1" === p,
                            "flex-grow lg:pt-18 lg:pb-20 lg:px-16": !F,
                            "lg:pt-14 justify-between align-baseline": "Statement" === S
                        }),
                        iconClasses: r()("[&_svg]:text-inherit group-hover:[&_svg]:text-card-hover-content [&_svg]:w-10 [&_svg]:h-10  [&_svg]:mb-6", {
                            "group-hover:[&_svg]:text-card-hover-sub-content [&_svg]:transition-all [&_svg]:duration-500 [&_svg]:ease-in-out": A,
                            "[&_svg]:w-10 [&_svg]:h-10 [&_svg]:text-black": "black" !== L,
                            "[&_svg]:w-12 [&_svg]:h-12 [&_svg]:text-white": "black" === L
                        }),
                        titleClasses: r()(K, {
                            "mb-6": h
                        }),
                        descriptionClasses: r()("text-card-sub-content text-body-1", {
                            "lg:max-w-[25.125rem]": F && "1:1" !== p,
                            "lg:max-w-full": !F || F && "1:1" === p,
                            "flex-grow": !F
                        }),
                        title: l,
                        semanticLevel: n,
                        headerVariant: g,
                        description: h,
                        icon: C,
                        children: [((null == _ ? void 0 : _.showButton) && !R || R) && (0, a.jsxs)("div", {
                            className: "mt-component",
                            children: [!R && (0, a.jsx)(s.default, {
                                ...U,
                                label: null == _ ? void 0 : _.label,
                                variant: (null == _ ? void 0 : _.buttonVariant) || "tertiary",
                                theme: (null == _ ? void 0 : _.buttonTheme) || (0, v.E)(L),
                                target: null == _ ? void 0 : _.target
                            }), R && (0, a.jsx)(a.Fragment, {
                                children: D
                            })]
                        }), N && (N.statNumber || N.statDescription) && (0, a.jsx)("div", {
                            className: "grow flex flex-col justify-end mt-8",
                            children: (0, a.jsx)(x.Z, {
                                statNumber: N.statNumber,
                                statDescription: N.statDescription
                            })
                        })]
                    })]
                })
            }
        },
        55773: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return m
                }
            });
            var a = l(52322),
                n = l(12524),
                r = l.n(n);
            l(2784);
            var o = l(75876),
                i = l(51252),
                s = l(43544),
                d = l(76179),
                c = l(15215),
                u = l(52424);

            function m(e) {
                let {
                    title: t,
                    semanticLevel: l,
                    imageAsset: n,
                    videoAsset: m,
                    bynderImage: f,
                    altText: x,
                    tags: v,
                    showPlayButton: g,
                    sizeVariant: p = "Large",
                    theme: h = "white",
                    cta: b,
                    transparent: w,
                    noProgressiveSrc: y,
                    showSkeleton: j,
                    isClickableImage: k = !1,
                    ...N
                } = e, C = (0, i.n)({
                    imageAsset: n,
                    videoAsset: m,
                    bynderImage: f,
                    altText: x
                }), _ = r()("overflow-hidden rounded-standard w-full h-auto max-h-[12.063rem] aspect-16/9 relative shrink-0", {
                    "md:max-h-[24.5rem] md:rounded-standard": "Large" === p,
                    "md:w-[18rem] md:max-h-[10.125rem]": "Medium" === p,
                    "md:w-[10.813rem] md:max-h-[6.125rem]": "Small" === p
                }), Z = (null == b ? void 0 : b.url) && k ? "a" : "div";
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(d.Z, {
                        ...N,
                        className: r()("text-card-content gap-3 flex flex-col relative ".concat(h), {
                            "md:gap-8 md:flex-row md:rounded-l-3.5xl": "Large" !== p,
                            "rounded-t-3.5xl md:rounded-t-3.5xl md:gap-6 ": "Large" === p,
                            "bg-card-background": !w
                        }),
                        cta: b,
                        children: [(n || f || m || j) && (0, a.jsx)(Z, {
                            ...(null == b ? void 0 : b.url) && (0, c.Z)({
                                cta: b
                            }),
                            children: (0, a.jsx)(o.Z, {
                                wrapperClasses: _,
                                assetClasses: r()("w-full h-full object-cover object-center"),
                                noProgressiveSrc: y,
                                showSkeleton: j,
                                ...C,
                                children: g && (0, a.jsx)(u.Z, {
                                    additionalClasses: r()("absolute bottom-4 left-4 z-[2]", {
                                        "md:bottom-12 md:left-12": "Large" === p
                                    })
                                })
                            })
                        }), (0, a.jsx)(s.Z, {
                            cta: b,
                            wrapperClasses: r()("flex flex-col gap-3 flex-grow"),
                            titleClasses: r()("text-display-mobile-8 leading-[110%]", {
                                "md:text-display-6": "Large" === p,
                                "md:text-display-8 md:max-w-[23.5625rem]": "Medium" === p,
                                "md:text-display-8 md:line-clamp-1 md:text-ellipsis md-max-w-[30.375rem]": "Small" === p,
                                "md:text-ellipsis md:line-clamp-3": "Small" !== p
                            }),
                            tagsClasses: "black" === h ? "dark-gray" : void 0,
                            titleSkeletonLines: "Small" === p ? 1 : 3,
                            titleSkeletonClasses: "h-6",
                            showSkeleton: j,
                            title: t,
                            semanticLevel: l,
                            tags: v
                        })]
                    })
                })
            }
        },
        43544: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return x
                }
            });
            var a = l(52322),
                n = l(12524),
                r = l.n(n),
                o = l(2784),
                i = l(68838),
                s = l(50327),
                d = l(28894);

            function c() {
                return (0, a.jsx)(d.Z, {
                    className: "w-24",
                    boneClasses: "h-11 !w-24 rounded-md"
                })
            }
            var u = l(44772),
                m = l(15215),
                f = l(27167),
                x = (0, o.forwardRef)(function(e, t) {
                    let {
                        cta: l,
                        title: n,
                        description: o,
                        descriptionRichText: x,
                        semanticLevel: v,
                        icon: g,
                        tags: p,
                        wrapperClasses: h,
                        titleClasses: b,
                        descriptionClasses: w,
                        iconClasses: y,
                        tagsClasses: j,
                        children: k,
                        onTitleClick: N,
                        showSkeleton: C,
                        titleSkeletonLines: _ = 1,
                        descriptionSkeletonLines: Z = 4
                    } = e, S = (null == l ? void 0 : l.url) ? "a" : "div";
                    return (0, a.jsxs)("div", {
                        className: h,
                        ref: t,
                        children: [g && (0, a.jsx)(S, {
                            className: y,
                            ...(null == l ? void 0 : l.url) && (0, m.Z)({
                                cta: l
                            }),
                            children: g
                        }), (p && (null == p ? void 0 : p.length) > 0 || C) && (0, a.jsx)("div", {
                            className: j,
                            children: C ? (0, a.jsx)(c, {}) : (0, a.jsx)(u.Z, {
                                tags: p
                            })
                        }), n && !C && (0, a.jsx)(i.Z, {
                            semanticLevel: v || "h3",
                            className: b,
                            children: n,
                            titleLink: (null == l ? void 0 : l.url) ? {
                                titleLinkHref: l.url,
                                titleLinkTarget: l.target,
                                bpWithContext: l.bpWithContext
                            } : void 0,
                            onClick: N
                        }), _ && C && (0, a.jsx)(d.Z, {
                            lines: _
                        }), Z && C && (0, a.jsx)(d.Z, {
                            lines: Z,
                            className: "!gap-1",
                            boneClasses: "h-7"
                        }), o && !C && (0, a.jsx)(s.default, {
                            tagName: "p",
                            content: o,
                            className: r()(w, f.t)
                        }), x && !C && (0, a.jsx)(s.default, {
                            tagName: "p",
                            content: x,
                            className: r()(w, f.t)
                        }), k]
                    })
                })
        },
        76179: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return i
                }
            });
            var a = l(52322),
                n = l(12524),
                r = l.n(n),
                o = l(2784);

            function i(e) {
                let {
                    cta: t,
                    hideGroup: l,
                    children: n,
                    ...i
                } = e, s = (0, o.useRef)(null), {
                    builderBlock: d,
                    cardVariant: c,
                    embeddedVimeoUrl: u,
                    ...m
                } = i, f = Object.fromEntries(Object.entries(m).filter(e => {
                    let [t] = e;
                    return "isSmallText" !== t
                }));
                return (0, a.jsx)("div", {
                    ...f,
                    ref: s,
                    className: r()("no-underline w-full h-full font-sans overflow-hidden", {
                        [null == i ? void 0 : i.className]: null == i ? void 0 : i.className,
                        group: (null == t ? void 0 : t.url) && !l
                    }),
                    children: n
                })
            }
        },
        52424: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return i
                }
            });
            var a = l(52322),
                n = l(12524),
                r = l.n(n);
            l(2784);
            var o = l(1423);

            function i(e) {
                let {
                    additionalClasses: t
                } = e;
                return (0, a.jsx)("div", {
                    className: r()("button-icon-container overflow-hidden flex justify-start gap-8 px-7 py-2.5 rounded-xl w-20 bg-vimeo-blue [&>svg]:fill-black", {
                        [t]: t
                    }),
                    children: (0, a.jsx)(o.Z, {
                        index: 1,
                        variant: "play",
                        variantDisplay: "tertiary"
                    })
                })
            }
        },
        5243: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = l(52322),
                n = l(12524),
                r = l.n(n);

            function o(e) {
                let {
                    statNumber: t,
                    statDescription: l,
                    additionalClasses: n,
                    isBlurred: o = !1
                } = e;
                return (0, a.jsxs)("div", {
                    className: r()("flex flex-col md:flex-row md:items-center p-8 gap-3 md:gap-5 rounded-standard h-fit text-generic-card-content", {
                        [n]: n,
                        "bg-black": !o,
                        "backdrop-blur-2xl": o
                    }),
                    children: [(0, a.jsx)("div", {
                        className: "text-display-5 md:text-display-6",
                        children: t
                    }), (0, a.jsx)("div", {
                        className: "text-body-2 md:text-generic-card-sub-content",
                        children: l
                    })]
                })
            }
            l(2784)
        },
        15215: function(e, t, l) {
            var a = l(43355);
            t.Z = e => {
                let {
                    cta: t
                } = e;
                return {
                    href: null == t ? void 0 : t.url,
                    target: (null == t ? void 0 : t.target) || "_blank",
                    onClick: e => {
                        var l, n, r, o, i, s, d, c, u, m, f;
                        return (0, a.N)(e, {
                            bp: null == t ? void 0 : t.bp,
                            bpOverrides: (null == t ? void 0 : t.bp) && {
                                common: {
                                    target_path: null !== (s = null !== (i = null == t ? void 0 : null === (l = t.bp.click) || void 0 === l ? void 0 : l.target_path) && void 0 !== i ? i : t.url) && void 0 !== s ? s : null,
                                    target: null !== (c = null !== (d = null == t ? void 0 : null === (n = t.bp.click) || void 0 === n ? void 0 : n.target) && void 0 !== d ? d : t.target) && void 0 !== c ? c : null,
                                    copy: null !== (m = null !== (u = null == t ? void 0 : null === (o = t.bp) || void 0 === o ? void 0 : null === (r = o.click) || void 0 === r ? void 0 : r.copy) && void 0 !== u ? u : t.label) && void 0 !== m ? m : null
                                }
                            },
                            bpWithContext: null == t ? void 0 : t.bpWithContext,
                            targetPath: null !== (f = null == t ? void 0 : t.url) && void 0 !== f ? f : null
                        }, null == t ? void 0 : t.onClick)
                    }
                }
            }
        },
        35729: function(e, t, l) {
            l.d(t, {
                E: function() {
                    return a
                }
            });
            let a = e => "black" === e ? "white" : "black"
        },
        27167: function(e, t, l) {
            l.d(t, {
                t: function() {
                    return n
                }
            });
            var a = l(12524);
            let n = l.n(a)()("[&_ol]:list-decimal", "[&_ol]:flex", "[&_ol]:flex-col", "[&_ol]:gap-6", "[&_ol]:ml-10", "[&_ul]:ml-10", "[&_ul]:list-disc", "[&_ul]:flex", "[&_ul]:flex-col", "[&_ul]:gap-2", "[&_a]:underline", "[&_a]:text-generic-card-hyperlink", "[&_a]:font-medium")
        },
        83835: function(e, t, l) {
            l.d(t, {
                w: function() {
                    return a
                }
            });
            let a = e => {
                var t;
                return "string" != typeof(null == e ? void 0 : e[0]) && e ? (null == e ? void 0 : null === (t = e[0]) || void 0 === t ? void 0 : t.__typename) ? null == e ? void 0 : e.reduce((e, t) => (t.name && e.push(t.name), e), []) : null == e ? void 0 : e.reduce((e, t) => (Object.values(t).forEach(t => {
                    e.push(t)
                }), e), []) : e
            }
        },
        86782: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return u
                }
            });
            var a = l(52322),
                n = l(87163),
                r = l(12524),
                o = l.n(r),
                i = l(46168),
                s = l(2784),
                d = l(72781),
                c = e => {
                    let {
                        activeCardIdx: t
                    } = e, l = (0, s.useRef)(null);
                    return (0, s.useEffect)(() => {
                        if (l.current) {
                            let e = parseFloat(l.current.style.left) / 1.75;
                            l.current.style.width = "".concat(Math.abs((t - e) * 1.75) + 1.5, "rem"), l.current.style.left = "".concat(1.75 * Math.min(t, e), "rem"), setTimeout(() => {
                                l.current && (l.current.style.left = "".concat(1.75 * t, "rem"), l.current.style.width = "1.5rem")
                            }, d.J5)
                        }
                    }, [t]), (0, a.jsx)("span", {
                        className: "button-status-slider absolute bg-carousel-nav-button-active h-1 transition-all ease-in-out duration-1000",
                        ref: l,
                        style: {
                            width: "1.5rem",
                            left: "0"
                        }
                    })
                },
                u = e => {
                    let {
                        carouselId: t,
                        cards: l,
                        activeCardIdx: r,
                        setActiveCardIdx: s,
                        navSRPrefix: d,
                        breakpoint: u = 0,
                        position: m = "bottom"
                    } = e, f = (0, n.y1)(), x = (0, i.Z)(), v = e => {
                        let t = e.target.getAttribute("data-index");
                        t && s(parseInt(t))
                    };
                    return (0, a.jsx)("div", {
                        className: o()("carousel-nav flex w-auto justify-center motion-reduce:hidden", {
                            hidden: f || x,
                            "md:hidden": 768 === u,
                            "lg:hidden": 1024 === u,
                            "mt-5": !m || "bottom" === m
                        }),
                        children: (0, a.jsxs)("div", {
                            className: "inline-flex gap-1 relative",
                            children: [null == l ? void 0 : l.map((e, l) => (0, a.jsx)("button", {
                                id: "".concat(t, "-nav-").concat(l),
                                "aria-controls": "".concat(t, "-card-").concat(l),
                                "data-index": l,
                                onClick: v,
                                className: o()("relative w-6 h-5 -my-2 bg-transparent border-none cursor-pointer", 'after:bg-carousel-nav-button after:block after:content-[""] after:absolute after:top-2 after:left-0 after:w-full after:h-1'),
                                children: (0, a.jsx)("span", {
                                    className: "sr-only",
                                    children: "".concat(d ? d + " " : "").concat(l + 1, ": ").concat(e.cardTitle)
                                })
                            }, "carousel-nav-".concat(l))), (0, a.jsx)(c, {
                                activeCardIdx: r
                            })]
                        })
                    })
                }
        },
        33438: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return Z
                },
                n: function() {
                    return _
                }
            });
            var a = l(52322),
                n = l(12524),
                r = l.n(n),
                o = l(2784),
                i = l(38088),
                s = l(78437),
                d = l(68838),
                c = l(90716),
                u = l(43651);

            function m(e) {
                let {
                    errorMessage: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: "text-generic-card-error mt-6 px-[calc((1/25)*100%)] gap-4 flex max-w-130 md:flex-grow items-center md:justify-center md:h-full md:px-0",
                    children: [(0, a.jsx)(u.default, {
                        className: "w-12 h-12"
                    }), t && (0, a.jsx)("span", {
                        children: t
                    })]
                })
            }
            var f = l(75937);
            let x = (e, t) => "medium-with-feature" === t ? 0 === e ? "Large" : "Medium" : "medium" === t ? "Medium" : "small" == t ? "Small" : "video-carousel" === t ? "Large" : void 0;
            var v = e => {
                let {
                    card: t,
                    i: l,
                    variant: n,
                    isClickableImage: i = !1
                } = e, s = (0, o.useRef)(null), d = (0, f.Z)({
                    ref: s,
                    index: l
                }), c = (0, o.cloneElement)(t, {
                    sizeVariant: x(l, n),
                    isClickableImage: i
                });
                return (0, a.jsx)("li", {
                    ref: s,
                    className: r()("focus:outline focus:outline-card-focus-outline", {
                        "md:animate-card md:motion-reduce:animate-none": !0 === d,
                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === d
                    }),
                    children: c
                }, l)
            };

            function g(e) {
                let {
                    hasTabList: t,
                    ariaTab: l,
                    ariaTabPanel: n,
                    selectedIndex: r,
                    cardLimit: o,
                    resourceCards: i,
                    variant: s,
                    isClickableImage: d = !1
                } = e;
                return (0, a.jsx)("div", {
                    className: "focus:outline focus:outline-card-focus-outline mt-5 w-[92%] md:w-[52%] md:mt-0",
                    id: t ? "".concat(n).concat(r) : void 0,
                    role: t ? "tabpanel" : void 0,
                    "aria-labelledby": t ? "".concat(l).concat(r) : void 0,
                    tabIndex: t ? 0 : void 0,
                    children: (0, a.jsx)("ul", {
                        className: "flex flex-col gap-y-12",
                        children: null == i ? void 0 : i.slice(0, o).map((e, t) => (0, a.jsx)(v, {
                            card: e,
                            i: t,
                            variant: s,
                            isClickableImage: d
                        }, t))
                    })
                })
            }
            var p = l(76075),
                h = l(69640),
                b = l.n(h),
                w = l(10040),
                y = l(86782),
                j = l(10666);

            function k(e) {
                var t, l, n, i, s, d;
                let {
                    cards: c,
                    carouselId: u,
                    theme: m = "light-gray",
                    cta: v,
                    navSRPrefix: g
                } = e, [h, k] = (0, o.useState)(0), N = (0, o.useRef)(null), C = null == c ? void 0 : c.map(e => ({
                    cardTitle: e.props.title
                })), _ = u || "carousel-id-".concat(Math.random()), {
                    handleMouseDown: Z,
                    handleMouseUp: S,
                    handleMouseMove: L,
                    handleMouseLeave: I,
                    handleCardMouseEnter: E,
                    handleTouchStart: W,
                    handleTouchEnd: M,
                    handleTouchMove: T,
                    isDragging: R,
                    isCarouselActive: D
                } = (0, j.Z)({
                    carouselId: _,
                    cardContainerRef: N,
                    cards: C,
                    activeCardIdx: h,
                    setActiveCardIdx: k,
                    mobileBreakpoint: 1920
                }), z = (null === (n = b()(p.Z)) || void 0 === n ? void 0 : null === (l = n.theme) || void 0 === l ? void 0 : null === (t = l.screens) || void 0 === t ? void 0 : t["2xl"]) || "1440px", P = (null === (d = b()(p.Z)) || void 0 === d ? void 0 : null === (s = d.theme) || void 0 === s ? void 0 : null === (i = s.screens) || void 0 === i ? void 0 : i.xs) || "375px", O = (e, t) => {
                    D && (R ? e.preventDefault() : h !== t && (e.preventDefault(), k(t)))
                };
                return (0, a.jsxs)("div", {
                    className: "w-[100%] grid grid-cols-25 gap-y-10 md:gap-y-16",
                    children: [(0, a.jsx)("ul", {
                        className: "col-start-3 col-end-[26] flex gap-4 md:col-start-4 md:pl-4 [&>*:first-child]:ml-2 md:[&>*:first-child]:ml-0",
                        ref: N,
                        onMouseDown: Z,
                        onMouseUp: S,
                        onMouseMove: L,
                        onMouseLeave: I,
                        onTouchStart: W,
                        onTouchEnd: M,
                        onTouchMove: T,
                        children: null == c ? void 0 : c.map((e, t) => {
                            let l = (0, o.cloneElement)(e, {
                                    sizeVariant: x(t, "video-carousel"),
                                    onClick: e => O(e, t),
                                    onDragStart: e => e.preventDefault(),
                                    onMouseEnter: E
                                }),
                                n = (0, o.useRef)(null),
                                i = (0, f.Z)({
                                    ref: n,
                                    index: t
                                });
                            return (0, a.jsx)("li", {
                                ref: n,
                                id: "".concat(_, "-card-").concat(t),
                                style: {
                                    "--mobileWidth": P,
                                    "--desktopWidth": z
                                },
                                className: r()("focus:outline focus:outline-card-focus-outline grow-0 shrink-0 basis-[calc(clamp(var(--mobileWidth),_100vw,_var(--desktopWidth))*0.84)] md:basis-[calc(clamp(var(--mobileWidth),_100vw,_var(--desktopWidth))*0.44)] transition-all motion-reduce:transition-none ease-in-out [&_img]:scale-[1.04]", {
                                    "md:animate-card md:motion-reduce:animate-none": !0 === i,
                                    "md:opacity-0 md:motion-reduce:opacity-100": !1 === i
                                }),
                                "data-index": t,
                                children: l
                            }, t)
                        })
                    }), (0, a.jsxs)("div", {
                        className: "col-start-4 col-end-[-4] flex flex-col items-center justify-center [&>*]:mb-0 ".concat("black" === m ? "white" : "black", " md:flex-row md:justify-between"),
                        children: [!!(c && (null == c ? void 0 : c.length) > 1) && (0, a.jsx)(y.Z, {
                            carouselId: _,
                            cards: C,
                            activeCardIdx: h,
                            setActiveCardIdx: k,
                            navSRPrefix: g
                        }), v && (0, a.jsx)(w.default, {
                            label: v.label,
                            href: v.url,
                            theme: "light-gray",
                            variant: "primary",
                            bp: v.bp,
                            bpWithContext: v.bpWithContext
                        })]
                    })]
                })
            }
            var N = l(95067),
                C = l(71277);
            let _ = "tag";

            function Z(e) {
                let {
                    id: t,
                    theme: l = "white",
                    variant: n,
                    eyebrow: u,
                    title: f,
                    titleLink: x,
                    semanticLevel: v = "h2",
                    resourceCards: p,
                    tabList: h,
                    tabListAriaLabel: b,
                    carouselId: w,
                    cta: y,
                    navSRPrefix: j,
                    hideBottomPadding: Z = !1,
                    loadingMessage: S,
                    errorMessage: L,
                    isClickableImage: I = !1
                } = e, [E, W] = (0, o.useState)(0), M = "tabPanel-", T = "tab-", R = "black" === l ? "black" : "light-gray", D = h ? (0, C.U)(h, {
                    ariaTabPanel: M,
                    ariaTab: T,
                    tabPropertyName: _
                }) : void 0, z = (0, N.K)(n, p), P = "video-carousel" !== n && !!D && !!(null == D ? void 0 : D.length);
                return (0, a.jsx)(s.Z, {
                    id: t,
                    additionalClasses: r()("pt-component", {
                        "overflow-hidden": "video-carousel" === n,
                        "pb-component": !Z
                    }),
                    theme: l,
                    element: "section",
                    children: (0, a.jsxs)("div", {
                        className: r()("flex flex-col items-center col-start-1 col-end-[-1]", {
                            "md:flex-row md:items-start md:gap-[8%]": "video-carousel" !== n,
                            "gap-12 md:gap-18": "video-carousel" === n
                        }),
                        children: [(0, a.jsxs)("div", {
                            className: r()("grid grid-cols-25 h-min w-full gap-y-6", {
                                "md:w-[35%] md:grid-cols-8 md:sticky md:top-24": "video-carousel" !== n
                            }),
                            children: [u && "video-carousel" !== n && (0, a.jsx)("span", {
                                className: "text-card-content text-eyebrow flex col-start-2 col-end-[23] md:col-end-8",
                                children: u
                            }), f && (0, a.jsx)(d.Z, {
                                className: r()("text-card-content flex col-start-2 col-end-[23]", {
                                    "md:col-end-[-1]": "video-carousel" !== n,
                                    "text-center md:col-start-6 md:col-end-[21]": "video-carousel" === n
                                }),
                                headerVariant: "video-carousel" === n ? "display-4" : "display-5",
                                titleLink: x,
                                semanticLevel: v,
                                children: (0, i.Z)(f)
                            }), P && (0, a.jsx)(c.Z, {
                                "aria-label": b || f,
                                tabList: D,
                                selectedIndex: E,
                                setSelectedIndex: W,
                                theme: R,
                                additionalClasses: "col-start-2 col-end-[-2] md:col-end-9 mt-2 md:mt-10"
                            })]
                        }), !L && S && (0, a.jsx)("div", {
                            role: "status",
                            "aria-live": "polite",
                            className: "sr-only",
                            children: S
                        }), L ? (0, a.jsx)(m, {
                            errorMessage: L
                        }) : "video-carousel" === n && p ? (0, a.jsx)(k, {
                            cta: y,
                            carouselId: w,
                            cards: p,
                            navSRPrefix: j,
                            theme: l
                        }) : (0, a.jsx)(g, {
                            ariaTab: T,
                            ariaTabPanel: M,
                            cardLimit: z,
                            resourceCards: p,
                            variant: n,
                            hasTabList: P,
                            selectedIndex: E,
                            isClickableImage: I
                        })]
                    })
                })
            }
        },
        95067: function(e, t, l) {
            l.d(t, {
                K: function() {
                    return a
                }
            });
            let a = (e, t) => "video-carousel" === e ? (null == t ? void 0 : t.length) || 6 : "medium-with-feature" === e ? 5 : 6
        },
        71277: function(e, t, l) {
            l.d(t, {
                U: function() {
                    return a
                }
            });
            let a = (e, t) => null == e ? void 0 : e.map((e, l) => ({
                label: "string" == typeof e ? e : e[t.tabPropertyName],
                "aria-controls": "".concat(t.ariaTabPanel).concat(l),
                id: "".concat(t.ariaTab).concat(l),
                bpWithContext: "string" == typeof e ? void 0 : e.bpWithContext
            }))
        },
        90716: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return u
                }
            });
            var a = l(52322),
                n = l(87163),
                r = l(12524),
                o = l.n(r),
                i = l(2784),
                s = l(22031);
            let d = (0, i.forwardRef)(function(e, t) {
                let {
                    "aria-selected": l,
                    "aria-controls": r,
                    label: d,
                    id: c,
                    theme: u,
                    onClick: m,
                    impressionsBPWithContext: f,
                    ...x
                } = e, v = (0, i.useRef)(null), g = (0, n.S1)(v, {
                    threshold: .2
                });
                return (0, i.useEffect)(() => {
                    (null == g ? void 0 : g.isIntersecting) && (0, s.Q)({
                        bpWithContext: f
                    })
                }, [null == g ? void 0 : g.isIntersecting, f]), (0, a.jsx)("button", {
                    ...x,
                    ref: t,
                    id: c,
                    className: o()("bg-transparent z-[2] border-none text-tab-content focus:outline-tab-focus-outline disabled:text-tab-disabled-content disabled:bg-tab-disabled-background text-body-3 font-medium hover:text-tab-hover-content p-3 rounded-md whitespace-nowrap ".concat(u), {
                        "cursor-pointer": m
                    }),
                    role: "tab",
                    "aria-selected": l,
                    "aria-controls": r,
                    onClick: m,
                    children: (0, a.jsx)("span", {
                        ref: v,
                        children: d
                    })
                })
            });
            var c = l(69084);

            function u(e) {
                let {
                    "aria-label": t,
                    theme: l,
                    tabList: r,
                    selectedIndex: u,
                    setSelectedIndex: m,
                    additionalClasses: f,
                    component: x
                } = e, [v, g] = (0, i.useState)(!1), p = null != u ? u : 0, {
                    sliderRef: h,
                    itemsRef: b
                } = (0, n.YH)(p, 12), {
                    elementRef: w,
                    isOverflowed: y
                } = (0, n.ES)(), j = (0, n.OW)({
                    ref: w
                }), k = (0, i.useRef)(null), N = (0, n.S1)(k, {
                    threshold: 0
                }), C = (null == N ? void 0 : N.isIntersecting) === void 0 || (null == N ? void 0 : N.isIntersecting), _ = e => {
                    g(!0), m(e), (0, s.Q)({
                        bpWithContext: r[e].bpWithContext
                    })
                }, Z = e => {
                    g(!0), (0, c.J)({
                        key: e.key,
                        left: () => m(Math.max(p - 1, 0)),
                        right: () => m(Math.min(p + 1, r.length - 1)),
                        home: () => m(0),
                        end: () => m(r.length - 1),
                        enter: () => _(parseInt(e.currentTarget.dataset.index))
                    })
                };
                return (0, i.useEffect)(() => {
                    if (b.current && v) {
                        let e = setTimeout(() => {
                            var e;
                            null === (e = b.current[p]) || void 0 === e || e.focus()
                        }, 350);
                        return () => clearTimeout(e)
                    }
                }, [b, p, v]), (0, a.jsxs)("div", {
                    className: o()("tabs-v3 translate-z-0 flex gap-1 h-auto bg-tab-background md:bg-transparent md:bg-gradient-to-r md:from-tab-background md:from-90% rounded-xl py-[0.625rem] relative z-0 w-fit max-w-full overflow-x-auto overflow-y-hidden ".concat(l), {
                        'md:to-transparent md:after:content-[""] md:after:block md:after:absolute md:after:right-0 md:after:top-0 md:after:w-12 md:after:h-full md:after:rounded-xl md:after:bg-transparent md:after:bg-gradient-to-r md:after:from-transparent md:after:from-[9%] md:after:z-30': y && !C,
                        "md:animate-card md:motion-reduce:animate-none": !0 === j,
                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === j,
                        "md:after:to-white": y && !C && "light-gray" === l,
                        "md:after:to-black": y && !C && "black" === l,
                        "md:after:to-pearl-black": y && !C && "dark-gray" === l,
                        "md:to-tab-background": !y || C,
                        [f]: f
                    }),
                    style: {
                        paddingLeft: "".concat(12, "px"),
                        paddingRight: "".concat(12, "px")
                    },
                    ref: w,
                    children: [y && !C && (0, a.jsx)("span", {
                        className: "fixed z-[3] bg-gradient-to-r from-transparent from-80% to-tab-background w-full h-full rounded-xl pointer-events-none md:hidden"
                    }), (0, a.jsx)("span", {
                        ref: h,
                        className: o()("bg-tab-selected-background z-[1] absolute h-full delay-30 duration-350 ease-in-out rounded-md", {
                            "duration-350": !0
                        })
                    }), (0, a.jsx)("div", {
                        className: "flex gap-1 grow-[1]",
                        role: "tablist",
                        "aria-label": t,
                        children: null == r ? void 0 : r.map((e, t) => (0, a.jsx)(d, {
                            ref: e => b.current[t] = e,
                            theme: l,
                            label: e.label,
                            id: e.id,
                            "aria-controls": e["aria-controls"],
                            "aria-selected": u === t ? "true" : "false",
                            tabIndex: u === t ? 0 : -1,
                            onClick: () => _(t),
                            onKeyDown: Z,
                            "data-index": t
                        }, t))
                    }), x, (0, a.jsx)("div", {
                        ref: k,
                        className: "w-[1px] -ml-1"
                    })]
                })
            }
        },
        69084: function(e, t, l) {
            l.d(t, {
                J: function() {
                    return a
                }
            });
            let a = e => {
                let {
                    key: t,
                    left: l,
                    right: a,
                    home: n,
                    end: r,
                    enter: o,
                    esc: i
                } = e;
                switch (t) {
                    case "ArrowLeft":
                    case "Left":
                        l && l();
                        break;
                    case "ArrowRight":
                    case "Right":
                        a && a();
                        break;
                    case "Home":
                        n && n();
                        break;
                    case "End":
                        r && r();
                        break;
                    case "Enter":
                    case " ":
                    case "Spacebar":
                        o && o();
                        break;
                    case "Escape":
                        i && i()
                }
            }
        },
        44772: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = l(52322),
                n = l(12524),
                r = l.n(n);

            function o(e) {
                let {
                    tags: t,
                    tagClasses: l,
                    size: n = "small",
                    ...r
                } = e;
                return (0, a.jsx)("ul", {
                    className: "flex !flex-row flex-wrap gap-2 !list-none",
                    ...r,
                    children: null == t ? void 0 : t.map((e, t) => (0, a.jsx)(i, {
                        tag: e,
                        element: "li",
                        tagClasses: l,
                        size: n
                    }, t))
                })
            }

            function i(e) {
                let {
                    tag: t,
                    element: l = "li",
                    size: n = "small",
                    tagClasses: o
                } = e;
                return (0, a.jsx)(l, {
                    className: r()("bg-tag-background text-tag-content leading-[130%] w-fit", {
                        "text-body-4 py-3 px-4 rounded-md": "small" === n,
                        "text-body-2 px-5 py-[0.875rem] rounded-xl": "small" !== n,
                        [o]: o
                    }),
                    children: t
                })
            }
            l(2784)
        },
        97416: function(e, t, l) {
            l.d(t, {
                R: function() {
                    return a
                }
            });
            let a = e => {
                switch (e) {
                    case "span":
                        return "h1";
                    case "h1":
                        return "h2";
                    case "h2":
                    default:
                        return "h3";
                    case "h3":
                        return "h4";
                    case "h4":
                        return "h5";
                    case "h5":
                    case "h6":
                        return "h6"
                }
            }
        }
    }
]);
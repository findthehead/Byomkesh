"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [25580], {
        27492: function(e, t, l) {
            var n = l(52322),
                a = l(12524),
                o = l.n(a);
            t.Z = e => {
                let {
                    size: t = "sm",
                    className: l,
                    tag: a,
                    variant: r
                } = e;
                return (0, n.jsx)("span", {
                    className: o()({
                        [l]: null == l ? void 0 : l.length,
                        "text-bokeh-display-2xs rounded-bokeh-xs px-1 last:ml-1": "sm" === t,
                        "text-bokeh-display-xs rounded-bokeh-sm px-2 py-bokeh-xs": "md" === t,
                        "border-lohp-container-content border-solid border": "outline" === r,
                        "py-[1.5px] bg-vimeo-blue": "blue" === r
                    }),
                    children: a
                })
            }
        },
        84583: function(e, t, l) {
            l.d(t, {
                b: function() {
                    return g
                }
            });
            var n = l(52322),
                a = l(12524),
                o = l.n(a),
                r = l(2784),
                i = l(33146);
            let d = (0, r.createContext)({
                    id: ""
                }),
                s = () => (0, r.useContext)(d);
            var c = l(75876),
                u = l(74619),
                m = l(15673),
                x = l(22031),
                h = e => {
                    let {
                        index: t = 0
                    } = e;
                    (0, x.Q)({
                        bpWithContext: [{
                            event_name: "vimeo.learn_more",
                            contexts: {
                                action_context: {
                                    action_type: "click"
                                },
                                web_context: {},
                                product_analytics_context: {
                                    copy: "review_".concat(t),
                                    product: "onboarding",
                                    feature: "general",
                                    location: "body",
                                    element: "card"
                                },
                                third_party_integration_context: {
                                    is_partner: !1,
                                    is_integration: !1
                                }
                            }
                        }]
                    })
                },
                v = l(86741),
                p = l(73660);
            let g = {
                Base: e => {
                    let {
                        children: t,
                        className: l
                    } = e, {
                        theme: a,
                        bpHover: d,
                        index: c,
                        cardVariant: u,
                        reviewUrl: m,
                        activeCardIdx: x,
                        handleMouseEnter: h
                    } = s(), {
                        onHoverBp: v
                    } = (0, i.Z)({
                        bp: d,
                        index: c
                    }), p = (0, r.useRef)(null), g = o()("flex flex-col items-center justify-center rounded-2xl p-7.5 md:p-5 gap-y-5 text-lohp-container-content transition-opacity duration-500 ease-in-out", a, {
                        [l]: null == l ? void 0 : l.length,
                        "no-underline": !!m,
                        "w-full h-full": "carousel" !== u,
                        "bg-lohp-container-background": a && "carousel" !== u,
                        "w-[90vw] min-w-[90vw] md:w-[27.5rem] md:min-w-[27.5rem] h-auto bg-card-background-carousel": "carousel" === u,
                        "opacity-40": x !== c && "carousel" === u
                    });
                    return (0, n.jsx)("carousel" === u ? "li" : "div", {
                        ref: p,
                        "data-index": c,
                        ...!!d && {
                            onPointerEnter: v
                        },
                        children: m ? (0, n.jsx)("span", {
                            onDragStart: e => e.preventDefault(),
                            onMouseEnter: h,
                            className: g,
                            children: t
                        }) : (0, n.jsx)("div", {
                            className: g,
                            children: t
                        })
                    })
                },
                QuoteIcon: e => {
                    let {
                        className: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: o()("flex", {
                            [t]: null == t ? void 0 : t.length
                        }),
                        children: (0, n.jsx)(m.default, {
                            iconName: "icon-v3-bigquote",
                            className: "text-card-hover-background",
                            width: 41,
                            height: 34
                        })
                    })
                },
                Quote: e => {
                    let {
                        className: t
                    } = e, {
                        quote: l,
                        cardVariant: a
                    } = s();
                    return (0, n.jsx)("div", {
                        className: "flex flex-1 items-center",
                        children: (0, n.jsx)("span", {
                            className: o()("text-center text-display-mobile-8 text-pretty", {
                                [t]: null == t ? void 0 : t.length,
                                "[&_strong]:font-medium [&_strong]:text-vimeo-blue": "carousel" === a
                            }),
                            children: l && (0, v.ZP)(l)
                        })
                    })
                },
                Stars: e => {
                    let {
                        className: t
                    } = e, {
                        id: l,
                        stars: a,
                        rating: o,
                        name: r
                    } = s();
                    return (0, n.jsx)(p.Z, {
                        id: l,
                        className: t,
                        stars: a,
                        rating: o,
                        name: r
                    })
                },
                Customer: e => {
                    var t, l, a, r, i, d, x, v;
                    let {
                        className: p
                    } = e, {
                        id: f,
                        name: b,
                        reviewDefaultName: j,
                        position: y,
                        location: w,
                        verifiedReview: N,
                        verifiedReviewBadge: C,
                        reviewUrl: _,
                        index: k,
                        isCarouselActive: P,
                        isDragging: A,
                        bynderAvatar: I,
                        bynderLogo: T
                    } = s(), R = null == b ? void 0 : b.split(" ").reduce((e, t) => e + t[0], "").toUpperCase(), O = 27;
                    return (null == T ? void 0 : null === (l = T.additionalInfo) || void 0 === l ? void 0 : null === (t = l.selectedFile) || void 0 === t ? void 0 : t.width) && (null == T ? void 0 : null === (r = T.additionalInfo) || void 0 === r ? void 0 : null === (a = r.selectedFile) || void 0 === a ? void 0 : a.height) && T.additionalInfo.selectedFile.width / T.additionalInfo.selectedFile.height > 2 && (O = 14), (0, n.jsxs)("a", {
                        href: _,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: e => {
                            P && A ? e.preventDefault() : h({
                                index: k || 0
                            })
                        },
                        className: o()("flex justify-center items-center gap-x-1 transition-opacity duration-350 ease-in-out", {
                            "hover:opacity-40": !!_,
                            [p]: null == p ? void 0 : p.length
                        }),
                        children: [I && (0, n.jsxs)("span", {
                            className: "relative",
                            children: [(0, n.jsx)(c.Z, {
                                bynderImage: {
                                    imageBynderAsset: I
                                },
                                width: 100,
                                height: 100,
                                wrapperClasses: "flex !w-[26px] !h-[26px] mx-[6px]"
                            }), C && (0, n.jsx)(g.OffsetLogo, {
                                iconName: C
                            })]
                        }), !I && b && (0, n.jsxs)("span", {
                            className: "flex relative items-center justify-center rounded-full w-6.5 h-6.5 mx-[6px] bg-lime-60 text-white font-bold text-[10px]",
                            children: [R, C && (0, n.jsx)(g.OffsetLogo, {
                                iconName: C
                            })]
                        }), !I && !b && (0, n.jsx)(m.default, {
                            iconName: C || "icon-brands-g2-color",
                            className: "w-6.5 h-6.5 mx-[6px] [&_svg]:w-6.5 [&_svg]:h-6.5",
                            height: 26,
                            width: 26
                        }), (0, n.jsx)("span", {
                            className: "text-xs font-medium text-generic-card-content",
                            children: b || j
                        }), (0, n.jsx)(m.default, {
                            iconName: "icon-v3-circle-check",
                            className: "text-vimeo-blue w-[17px] flex",
                            "aria-labelledby": "verified-review"
                        }), (0, n.jsx)("span", {
                            className: "sr-only",
                            id: "verified-review-".concat(f),
                            children: N
                        }), T ? (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)("div", {
                                style: {
                                    "--aspect-ratio": "".concat(null == T ? void 0 : null === (d = T.additionalInfo) || void 0 === d ? void 0 : null === (i = d.selectedFile) || void 0 === i ? void 0 : i.width, " / ").concat(null == T ? void 0 : null === (v = T.additionalInfo) || void 0 === v ? void 0 : null === (x = v.selectedFile) || void 0 === x ? void 0 : x.height),
                                    "--logo-height": "".concat(O, "px")
                                },
                                className: "items-center mx-0.5 h-[var(--logo-height)] aspect-[var(--aspect-ratio)] max-w-[100px]",
                                children: (0, n.jsx)(u.default, {
                                    imageBynderAsset: T,
                                    imageClasses: "object-cover aspect-[var(--aspect-ratio)] max-h-[var(--logo-height)]",
                                    wrapperClasses: "flex",
                                    width: 200
                                })
                            })
                        }) : (null == y ? void 0 : y.length) ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("span", {
                                className: "hidden md:inline text-body-1 text-granite-gray",
                                children: "/"
                            }), (0, n.jsx)("span", {
                                className: "text-xs font-medium text-generic-card-content",
                                children: y
                            })]
                        }) : null, (null == w ? void 0 : w.length) && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("span", {
                                className: "hidden md:inline text-body-1 text-granite-gray",
                                children: "/"
                            }), (0, n.jsxs)("div", {
                                className: "hidden md:flex gap-1 items-center ",
                                children: [(0, n.jsx)(m.default, {
                                    iconName: "icon-v3-pin",
                                    className: "text-generic-card-content w-[12px] flex"
                                }), (0, n.jsx)("span", {
                                    className: "text-xs font-medium text-generic-card-content",
                                    children: w
                                })]
                            })]
                        })]
                    })
                },
                OffsetLogo: e => {
                    let {
                        iconName: t
                    } = e;
                    return (0, n.jsx)(m.default, {
                        iconName: t,
                        className: "absolute bottom-[1px] -right-1.5 w-[13px] h-[13px] [&_svg]:w-[13px] [&_svg]:h-[13px]",
                        height: 26,
                        width: 26
                    })
                },
                Provider: e => {
                    let {
                        children: t,
                        ...l
                    } = e;
                    return (0, n.jsx)(d.Provider, {
                        value: l,
                        children: t
                    })
                },
                useG2CustomerReviewCardContext: s
            }
        },
        31189: function(e, t, l) {
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var n = l(52322),
                a = l(12524),
                o = l.n(a),
                r = l(26436),
                i = l(89114),
                d = l(2784),
                s = l(75876),
                c = l(15673),
                u = l(87163),
                m = l(98115);
            let x = {
                Logo: function(e) {
                    let {
                        icon: t,
                        title: l,
                        image: a
                    } = e;
                    return (0, n.jsx)(n.Fragment, {
                        children: t ? (0, n.jsx)(c.default, {
                            iconName: t,
                            title: l,
                            className: "flex max-h-10 w-auto [&_svg]:max-h-10 [&_svg]:w-auto"
                        }) : a ? (0, n.jsx)(s.Z, {
                            wrapperClasses: "max-h-10 w-auto [&_svg]:max-h-10 [&_svg]:w-auto",
                            assetClasses: "max-h-10 w-auto [&_svg]:max-h-10 [&_svg]:w-auto",
                            bynderImage: {
                                imageBynderAsset: a,
                                fillScreen: !0
                            },
                            alt: l
                        }) : (0, n.jsx)(n.Fragment, {})
                    })
                },
                Title: function(e) {
                    let {
                        title: t,
                        semanticLevel: l = "h2",
                        className: a
                    } = e, r = (0, d.useRef)(null), i = (0, u.OW)({
                        ref: r,
                        threshold: m.Cn
                    });
                    return (0, n.jsx)(l, {
                        ref: r,
                        className: o()("text-center text-balance text-body-1-med", {
                            [a]: null == a ? void 0 : a.length,
                            "md:animate-slide-in-from-top md:motion-reduce:animate-none": !0 === i,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === i
                        }),
                        children: t
                    })
                },
                Base: function(e) {
                    let {
                        className: t,
                        children: l
                    } = e;
                    return (0, n.jsx)("div", {
                        className: o()("[&_.rfm-marquee]:gap-x-20 [&_.rfm-initial-child-container]:gap-x-20", "[&_.rfm-marquee-container]:gap-x-20", "[&_.rfm-marquee-container]:overflow-y-hidden", {
                            [t]: null == t ? void 0 : t.length
                        }),
                        children: l
                    })
                }
            };

            function h(e) {
                let {
                    title: t,
                    semanticLevel: l = "h2",
                    logos: a,
                    theme: d
                } = e;
                return (0, n.jsxs)("section", {
                    className: "max-w-full",
                    children: [(0, n.jsx)(r.$s, {
                        element: "div",
                        wrapperClassName: "!pb-10 !pb-lohp-lg-lg text-card-content",
                        theme: d,
                        children: (0, n.jsx)(x.Title, {
                            className: "col-[2/-2] md:col-[4/-4] lg:col-[7/-7]",
                            title: t,
                            semanticLevel: l
                        })
                    }), (0, n.jsx)(x.Base, {
                        className: o()("max-w-full-bleed mx-auto min-w-[375px] pb-component-mobile-bokeh md:pb-component-bokeh", {
                            ["bg-lohp-container-background text-card-content ".concat(d)]: d
                        }),
                        children: (0, n.jsx)(i.n, {
                            gradient: !0,
                            gradientWidth: 80,
                            autoFill: !0,
                            gradientColor: "black" === d ? "rgba(var(--colors-black))" : "rgba(var(--colors-white))",
                            children: null == a ? void 0 : a.map((e, t) => (0, n.jsx)(x.Logo, {
                                ...e
                            }, t))
                        })
                    })]
                })
            }
        },
        89114: function(e, t, l) {
            l.d(t, {
                n: function() {
                    return i
                }
            });
            var n = l(52322),
                a = l(2784),
                o = l(21515),
                r = l(87163),
                i = e => {
                    let {
                        wrapperClass: t,
                        ...l
                    } = e, i = (0, a.useRef)(null), d = (0, r.OW)({
                        ref: i,
                        threshold: 0,
                        unsetOnHide: !0
                    });
                    return (0, n.jsx)("div", {
                        ref: i,
                        className: t,
                        children: (0, n.jsx)(o.Z, {
                            ...l,
                            play: d,
                            children: l.children
                        })
                    })
                }
        },
        33146: function(e, t, l) {
            var n = l(2784),
                a = l(71492),
                o = l(22031),
                r = l(93570);
            t.Z = e => {
                let {
                    bp: t,
                    index: l
                } = e;
                return {
                    onHoverBp: (0, n.useCallback)((0, a.P2)(function() {
                        if (t) {
                            let e = (0, r.Z)({
                                bpWithContext: t,
                                index: l,
                                action_type: "hover"
                            });
                            (0, o.Q)({
                                bpWithContext: e
                            })
                        }
                    }, 1e3), [t, l])
                }
            }
        },
        81546: function(e, t, l) {
            l.d(t, {
                _K: function() {
                    return n._K
                },
                Q1: function() {
                    return d
                },
                cT: function() {
                    return u
                },
                TJ: function() {
                    return x
                },
                y$: function() {
                    return n.y$
                },
                $s: function() {
                    return o.$s
                },
                IU: function() {
                    return g
                },
                Cg: function() {
                    return w
                },
                vq: function() {
                    return R
                },
                gK: function() {
                    return S
                },
                Yw: function() {
                    return M
                },
                Z2: function() {
                    return q.default
                },
                gY: function() {
                    return ei
                },
                yM: function() {
                    return h
                },
                HD: function() {
                    return N
                },
                IX: function() {
                    return B
                },
                Cs: function() {
                    return G
                },
                _y: function() {
                    return L
                },
                En: function() {
                    return ed
                }
            });
            var n = l(34244),
                a = l(52322),
                o = l(26436),
                r = l(2784),
                i = l(99314);

            function d(e) {
                let {
                    cards: t = [],
                    theme: l,
                    title: r
                } = e;
                return (0, a.jsx)(o.$s, {
                    theme: l,
                    wrapperClassName: "text-card-content",
                    className: "gap-y-10 md:gap-y-[5.625rem]",
                    children: (0, a.jsxs)(i.o.Provider, {
                        numOfCards: t.length,
                        title: r,
                        children: [r && (0, a.jsx)(i.o.Header, {
                            className: "col-[2/-2] text-center text-balance md:col-[4/-4] lg:col-[7/-7]"
                        }), (0, a.jsx)(i.o.Grid, {
                            className: "col-[2/-2] grid-cols-1 gap-x-lohp-lg gap-y-5 md:col-[3/-3] md:gap-x-5 md:gap-y-[3.718rem] md:px-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-lohp-lg",
                            children: null == t ? void 0 : t.map((e, t) => (0, a.jsx)(i.o.GridItem, {
                                children: (0, a.jsx)(n.y$, {
                                    className: "text-center",
                                    ...e
                                })
                            }, e.id || t))
                        })]
                    })
                })
            }
            var s = l(12524),
                c = l.n(s);

            function u(e) {
                let {
                    id: t,
                    cards: l = [],
                    theme: n,
                    title: r,
                    description: d,
                    cta: s,
                    subtitle: u,
                    video: x
                } = e;
                return (0, a.jsx)(o.$s, {
                    theme: n,
                    wrapperClassName: c()("text-card-content"),
                    className: "gap-y-10 lg:gap-y-lohp-lg",
                    children: (0, a.jsxs)(i.o.Provider, {
                        numOfCards: l.length,
                        title: r,
                        description: d,
                        cta: s,
                        subtitle: u,
                        theme: n,
                        video: x,
                        children: [(null == x ? void 0 : x.vimeo) && (0, a.jsx)(i.o.VideoModal, {
                            className: "col-[2/-2] w-full h-auto aspect-16/9 lg:aspect-2/1 lg:max-h-lohp-video  lg:col-[1/-1] lg:row-[2/span_1] lg:px-lohp-md"
                        }), r && (0, a.jsx)(i.o.Header, {
                            className: "col-[2/-2] text-center [&_.card-set-title]:!text-wrap max-lg:[&_.card-set-title]:w-[332px] max-lg:[&_.card-set-title]:mx-auto items-center lg:col-[3/13] lg:text-left lg:items-start overflow-hidden"
                        }), (0, a.jsx)(m, {
                            className: "col-[2/-2] lg:col-[14/-3]",
                            cards: l,
                            subtitle: u,
                            id: t
                        })]
                    })
                })
            }

            function m(e) {
                let {
                    cards: t,
                    id: l,
                    subtitle: o,
                    theme: d,
                    className: s,
                    builderBlock: u
                } = e, m = "subtitle-".concat(l), x = u ? i.o.Provider : r.Fragment, h = u ? {
                    subtitle: o,
                    numOfCards: null == t ? void 0 : t.length
                } : {};
                return (0, a.jsx)(x, {
                    ...h,
                    children: (0, a.jsxs)(i.o.Grid, {
                        className: c()("px-10 text-center grid grid-cols-2 gap-x-lohp-lg gap-y-5 lg:gap-y-lohp-md lg:grid-cols-3 lg:px-0 lg:gap-x-[2.1rem] xl:col-[15/-4] 2xl:gap-x-lohp-lg", {
                            [s]: null == s ? void 0 : s.length,
                            ["bg-container-background text-card-content ".concat(d)]: d
                        }),
                        "aria-labelledby": m,
                        children: [o && (0, a.jsx)(i.o.Subtitle, {
                            id: m,
                            className: "col-[1/-1] lg:row-[2/span_1]"
                        }), null == t ? void 0 : t.map((e, t) => (0, a.jsx)(i.o.GridItem, {
                            children: (0, a.jsx)(n._K, {
                                ...e
                            })
                        }, e.id || t))]
                    })
                })
            }

            function x(e) {
                let {
                    id: t,
                    cards: l = [],
                    theme: r,
                    title: d,
                    description: s,
                    cta: u,
                    subtitle: m,
                    video: x
                } = e;
                return (0, a.jsx)(o.$s, {
                    theme: r,
                    wrapperClassName: c()("text-card-content"),
                    className: "gap-y-10 lg:gap-y-lohp-lg",
                    children: (0, a.jsxs)(i.o.Provider, {
                        numOfCards: l.length,
                        title: d,
                        description: s,
                        cta: u,
                        subtitle: m,
                        theme: r,
                        video: x,
                        children: [d && (0, a.jsx)(i.o.Header, {
                            className: "col-[2/-2] text-center items-center lg:col-[3/18] lg:text-left lg:items-start"
                        }), (0, a.jsxs)("figure", {
                            className: "col-[2/-2] row-[1/span_1] lg:col-[3/13] lg:row-[2/span_1] flex flex-col gap-5",
                            children: [(null == x ? void 0 : x.vimeo) && (0, a.jsx)(i.o.VideoModal, {
                                className: "w-full h-auto aspect-16/9 lg:aspect-[unset]",
                                buttonAlignment: "center"
                            }), (0, a.jsx)(i.o.VideoCaption, {
                                className: "w-full block text-body-3 md:hidden"
                            })]
                        }), l && (null == l ? void 0 : l.length) > 0 && (0, a.jsx)(i.o.Grid, {
                            className: "col-[2/-2] px-4 grid grid-cols-1 gap-y-10 lg:col-[14/-3] lg:gap-y-[3.125rem] lg:px-0",
                            "aria-labelledby": "subtitle-".concat(t),
                            children: null == l ? void 0 : l.map((e, t) => (0, a.jsx)(i.o.GridItem, {
                                className: "h-fit",
                                children: (0, a.jsx)(n._r, {
                                    ...e
                                })
                            }, e.id || t))
                        })]
                    })
                })
            }
            l(72048);
            let h = e => e.reduce((e, t) => {
                var l, n, a, o;
                let r = t.id,
                    i = {
                        id: t.id,
                        ...t.data,
                        cards: null === (l = t.data.cards) || void 0 === l ? void 0 : l.map(e => {
                            var t;
                            let l = null === (t = e.card) || void 0 === t ? void 0 : t.value;
                            return {
                                ...(null == l ? void 0 : l.data) || {},
                                id: null == l ? void 0 : l.id
                            }
                        }),
                        video: {
                            ...null === (a = t.data.video) || void 0 === a ? void 0 : null === (n = a.value) || void 0 === n ? void 0 : n.data,
                            id: null === (o = t.data.video) || void 0 === o ? void 0 : o.id
                        }
                    };
                return e[r] = i, e
            }, {});
            var v = l(87163),
                p = l(98115);
            let g = e => {
                let {
                    theme: t = "color",
                    className: l,
                    animation: n
                } = e, o = (0, r.useRef)(null), i = (0, v.OW)({
                    ref: o,
                    threshold: p.Cn
                });
                return (0, a.jsx)("div", {
                    ref: o,
                    className: c()("control-patches block w-full h-7 md:h-[30px]", {
                        "bg-lohp-control-patches-color": "color" === t,
                        "bg-lohp-control-patches-greyscale": "greyscale" === t,
                        "md:animate-slide-in-from-top": !0 === i && "slide-in-from-top" === n,
                        "md:animate-slide-in-from-bottom": !0 === i && "slide-in-from-bottom" === n,
                        "md:animate-fade-in": !0 === i && "fade-in" === n,
                        "md:motion-reduce:animate-none": !0 === i && !!n,
                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === i && !!n,
                        [l]: null == l ? void 0 : l.length
                    })
                })
            };
            var f = l(20162),
                b = l(86741),
                j = l(49496);
            let y = {
                Base: function(e) {
                    let {
                        className: t,
                        children: l
                    } = e;
                    return (0, a.jsx)("article", {
                        className: c()("feature-base flex flex-col", {
                            [t]: t
                        }),
                        children: l
                    })
                },
                Body: function(e) {
                    let {
                        className: t,
                        children: l
                    } = e;
                    return (0, a.jsx)("div", {
                        className: c()("feature-body flex flex-col items-center md:items-start", {
                            [t]: t
                        }),
                        children: l
                    })
                },
                Content: function(e) {
                    let {
                        className: t,
                        children: l
                    } = e;
                    return (0, a.jsx)("div", {
                        className: c()("feature-content flex flex-col justify-between text-center md:text-left", {
                            [t]: t
                        }),
                        children: l
                    })
                },
                Title: function(e) {
                    let {
                        className: t,
                        title: l
                    } = e, n = (0, r.useRef)(null), o = (0, v.OW)({
                        ref: n,
                        threshold: p.Cn
                    });
                    return (0, a.jsx)("h2", {
                        ref: n,
                        className: c()("feature-title text-display-mobile-6 md:text-display-6", {
                            [t]: null == t ? void 0 : t.length,
                            "md:animate-slide-in-from-top md:motion-reduce:animate-none": !0 === o,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === o
                        }),
                        children: l
                    })
                },
                Description: function(e) {
                    let {
                        className: t,
                        description: l
                    } = e, n = (0, r.useRef)(null), o = (0, v.OW)({
                        ref: n,
                        threshold: p.Cn
                    });
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: c()("feature-description", {
                            [t]: null == t ? void 0 : t.length,
                            "md:animate-slide-in-from-right md:motion-reduce:animate-none": !0 === o,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === o
                        }),
                        children: "string" == typeof l && (0, b.ZP)(l)
                    })
                },
                VideoModal: function(e) {
                    let {
                        className: t,
                        video: l
                    } = e, n = (0, r.useRef)(null), o = (0, v.OW)({
                        ref: n,
                        threshold: p.Cn
                    });
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: c()("flex aspect-4/3 w-full h-auto", {
                            [t]: null == t ? void 0 : t.length,
                            "md:animate-subtle-fade-in md:motion-reduce:animate-none": !0 === o,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === o
                        }),
                        children: (0, a.jsx)(j.Kd, {
                            ...l,
                            buttonAlignment: "right"
                        })
                    })
                }
            };

            function w(e) {
                let {
                    title: t,
                    description: l,
                    cta: n,
                    video: r,
                    theme: i
                } = e;
                return (0, a.jsx)(o.$s, {
                    theme: i,
                    className: "text-card-content",
                    children: (0, a.jsxs)(y.Base, {
                        className: "col-[3/-3] flex flex-col gap-y-10 lg:flex-row-reverse lg:justify-between lg:gap-y-[unset] lg:gap-x-lohp-lg",
                        children: [(0, a.jsxs)(y.Body, {
                            className: "gap-y-10 flex-1",
                            children: [(0, a.jsxs)(y.Content, {
                                className: "gap-y-5 text-body-3 md:text-body-1",
                                children: [t && (0, a.jsx)(y.Title, {
                                    title: t
                                }), l && (0, a.jsx)(y.Description, {
                                    description: l
                                })]
                            }), ((null == n ? void 0 : n.url) || (null == n ? void 0 : n.isJoinModal)) && (0, a.jsx)(f.yT, {
                                ...n
                            })]
                        }), (null == r ? void 0 : r.vimeo) && (0, a.jsx)(y.VideoModal, {
                            className: "flex-1",
                            video: r
                        })]
                    })
                })
            }
            let N = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.reduce((e, t) => {
                    var l, n, a;
                    let o = t.id,
                        r = {
                            id: t.id,
                            ...t.data,
                            video: {
                                ...null === (n = t.data.video) || void 0 === n ? void 0 : null === (l = n.value) || void 0 === l ? void 0 : l.data,
                                id: null === (a = t.data.video) || void 0 === a ? void 0 : a.id
                            }
                        };
                    return e[o] = r, e
                }, {})
            };
            var C = l(29571);
            let _ = (0, r.createContext)({}),
                k = () => (0, r.useContext)(_);
            var P = l(75876),
                A = l(27492),
                I = l(13237);
            let T = {
                Base: e => {
                    let {
                        children: t,
                        className: l,
                        cta: n
                    } = e, o = (0, r.useRef)(null), i = (0, v.OW)({
                        ref: o,
                        threshold: p.Cn
                    });
                    return (0, a.jsx)(C.u.Provider, {
                        cta: n,
                        children: (0, a.jsx)(C.u.Element, {
                            className: "w-full",
                            children: (0, a.jsx)("div", {
                                ref: o,
                                className: c()("featured-in-card-tags flex flex-col group items-center text-center px-5 py-7.5 sm:px-[17%] lg:py-[60px] rounded-2xl bg-lohp-featured-in-card-card hover:bg-lohp-featured-in-card-hover-card gap-y-5 md:gap-y-10 h-full transition-colors motion-reduce:transition-none duration-500 ease-in-out", {
                                    "md:animate-subtle-fade-in md:motion-reduce:animate-none": !0 === i,
                                    "md:opacity-0 md:motion-reduce:opacity-100": !1 === i,
                                    [l]: null == l ? void 0 : l.length
                                }),
                                children: t
                            })
                        })
                    })
                },
                Tags: e => {
                    var t, l;
                    let {
                        className: n
                    } = e, {
                        tags: o
                    } = k(), i = (null == o ? void 0 : o.tags) && (null == o ? void 0 : null === (t = o.tags) || void 0 === t ? void 0 : t.length) > 1 ? "ul" : "div", d = "ul" === i ? "li" : r.Fragment, s = (null == o ? void 0 : o.variant) || "outline";
                    return (0, a.jsx)(i, {
                        className: "flex flex-wrap",
                        children: null == o ? void 0 : null === (l = o.tags) || void 0 === l ? void 0 : l.map((e, t) => (0, a.jsx)(d, {
                            children: "blue" === s ? (0, a.jsx)(I.R, {
                                tag: e,
                                className: n
                            }) : (0, a.jsx)(I.G, {
                                tag: e,
                                className: n
                            })
                        }, t))
                    })
                },
                Tag: A.Z,
                Image: e => {
                    let {
                        className: t
                    } = e, {
                        image: l
                    } = k();
                    return (0, a.jsx)("div", {
                        className: c()("", {
                            [t]: null == t ? void 0 : t.length
                        }),
                        children: (0, a.jsx)(P.Z, {
                            bynderImage: {
                                imageBynderAsset: l
                            },
                            width: 1600,
                            assetClasses: "!rounded-none max-h-[248px] h-auto",
                            wrapperClasses: "!rounded-none"
                        })
                    })
                },
                Provider: e => {
                    let {
                        children: t,
                        ...l
                    } = e;
                    return (0, a.jsx)(_.Provider, {
                        value: l,
                        children: t
                    })
                },
                Cta: () => {
                    let {
                        cta: e
                    } = k();
                    return (0, a.jsx)(f.yT, {
                        theme: "dark-gray",
                        label: null == e ? void 0 : e.label
                    })
                },
                Description: e => {
                    let {
                        className: t
                    } = e, {
                        description: l,
                        semanticLevel: n
                    } = k();
                    return (0, a.jsx)(n || "h2", {
                        className: c()("text-body-3 md:text-body-2 md:-mt-5 md:mx-6", {
                            [t]: null == t ? void 0 : t.length
                        }),
                        children: l
                    })
                }
            };
            var R = e => {
                let {
                    name: t,
                    tags: l,
                    description: n,
                    cta: o,
                    image: r,
                    semanticLevel: i = "h2"
                } = e;
                return (0, a.jsx)(T.Provider, {
                    name: t,
                    tags: l,
                    description: n,
                    cta: o,
                    image: r,
                    semanticLevel: i,
                    children: (0, a.jsxs)(T.Base, {
                        cta: o,
                        children: [(null == l ? void 0 : l.tags) ? (0, a.jsx)(T.Tags, {}) : null, n ? (0, a.jsx)(T.Description, {}) : null, (null == o ? void 0 : o.url) ? (0, a.jsx)(T.Cta, {}) : null, r ? (0, a.jsx)(T.Image, {}) : null]
                    })
                })
            };
            let O = {
                Title: function(e) {
                    let {
                        className: t,
                        title: l
                    } = e, n = (0, r.useRef)(null), o = (0, v.OW)({
                        ref: n,
                        threshold: p.Cn
                    });
                    return (0, a.jsx)("h2", {
                        ref: n,
                        className: c()("text-center text-balance text-display-mobile-6 md:text-display-6", {
                            "md:animate-slide-in-from-top md:motion-reduce:animate-none": !0 === o,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === o,
                            [t]: null == t ? void 0 : t.length
                        }),
                        children: l
                    })
                }
            };
            var S = e => {
                let {
                    title: t,
                    cards: l,
                    theme: n
                } = e;
                return (0, a.jsxs)(o.$s, {
                    type: "grid",
                    element: "section",
                    theme: n,
                    wrapperClassName: c()({
                        "!py-0": !t
                    }),
                    className: c()("text-lohp-container-content px-[15px] md:px-lohp-md"),
                    children: [t && (0, a.jsx)(O.Title, {
                        className: "col-[2/-2] md:col-[4/-4] lg:col-[7/-7]",
                        title: t
                    }), (0, a.jsx)("div", {
                        className: c()("col-[1/-1] grid grid-cols-1 sm:grid-cols-2 gap-y-[15px] sm:gap-x-lohp-md pb-[15px] md:pb-7.5", {
                            "pt-[15px] md:pt-lohp-lg": t,
                            "p-[15px] md:pt-7.5": !t
                        }),
                        children: null == l ? void 0 : l.map((e, l) => (0, a.jsx)(R, {
                            tags: null == e ? void 0 : e.tags,
                            description: null == e ? void 0 : e.description,
                            image: null == e ? void 0 : e.image,
                            name: null == e ? void 0 : e.name,
                            cta: null == e ? void 0 : e.cta,
                            semanticLevel: t ? "h3" : "h2"
                        }, "lohp-featured-in-cards-".concat(l)))
                    })]
                })
            };
            let B = e => e.reduce((e, t) => {
                var l;
                let n = t.id,
                    a = {
                        id: t.id,
                        ...t.data,
                        cards: null === (l = t.data.cards) || void 0 === l ? void 0 : l.map(e => {
                            var t;
                            let l = null === (t = e.card) || void 0 === t ? void 0 : t.value;
                            return {
                                ...(null == l ? void 0 : l.data) || {},
                                id: null == l ? void 0 : l.id
                            }
                        })
                    };
                return e[n] = a, e
            }, {});
            var W = l(92994),
                Z = l(84583);

            function F(e) {
                let {
                    theme: t,
                    name: l,
                    quote: n,
                    stars: o,
                    rating: r,
                    verifiedReview: i,
                    location: d,
                    position: s,
                    bynderAvatar: c,
                    bynderLogo: u,
                    bpHover: m,
                    index: x
                } = e, h = (0, W.Z)({
                    title: l
                });
                return (0, a.jsx)(Z.b.Provider, {
                    id: h,
                    theme: t,
                    name: l,
                    quote: n,
                    stars: o,
                    rating: r,
                    verifiedReview: i,
                    location: d,
                    position: s,
                    bynderAvatar: c,
                    bynderLogo: u,
                    bpHover: m,
                    index: x,
                    children: (0, a.jsxs)(Z.b.Base, {
                        children: [(0, a.jsx)(Z.b.QuoteIcon, {}), (0, a.jsx)(Z.b.Quote, {}), (0, a.jsx)(Z.b.Stars, {}), (0, a.jsx)(Z.b.Customer, {})]
                    })
                })
            }
            var D = l(89114),
                E = l(76811);

            function M(e) {
                let {
                    reviews: t,
                    title: l
                } = e, {
                    isMobile: n
                } = (0, v.w_)(), i = (0, r.useRef)(null), d = (0, v.OW)({
                    ref: i,
                    threshold: p.Cn
                });
                return (0, a.jsxs)(o.$s, {
                    theme: "light-gray",
                    type: "grid",
                    className: "flex-col",
                    children: [l ? (0, a.jsx)("div", {
                        ref: i,
                        className: c()("flex justify-center items-center pb-10 md:pb-[60px] col-[2/-2] md:col-[4/-4] lg:col-[7/-7]", {
                            "md:animate-slide-in-from-top md:motion-reduce:animate-none": !0 === d,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === d
                        }),
                        children: (0, a.jsx)("span", {
                            className: "text-display-mobile-6 md:text-display-6 text-center text-balance",
                            children: l
                        })
                    }) : null, (0, a.jsx)(D.n, {
                        pauseOnClick: !0,
                        pauseOnHover: !n,
                        gradient: !n,
                        gradientColor: "#F1F5F9",
                        gradientWidth: 180,
                        wrapperClass: "col-[1/-1]",
                        className: "[&_.rfm-marquee]:overflow-y-clip",
                        children: (0, a.jsx)("ul", {
                            className: "flex gap-8 w-full h-full pr-8",
                            children: t.map((e, t) => (0, a.jsx)("li", {
                                className: "flex flex-col w-screen md:w-[480px]",
                                children: (0, a.jsx)(F, {
                                    theme: "white",
                                    name: e.name,
                                    quote: (0, E.J)(null == e ? void 0 : e.quote),
                                    stars: e.stars,
                                    rating: (0, E.J)(e.rating),
                                    position: (0, E.J)(e.position),
                                    location: (0, E.J)(e.location),
                                    verifiedReview: (0, E.J)(e.verifiedReview),
                                    bynderAvatar: e.bynderAvatar,
                                    bynderLogo: e.bynderLogo,
                                    bpHover: null == e ? void 0 : e.bpHover,
                                    index: t
                                })
                            }, t))
                        })
                    })]
                })
            }
            let G = e => {
                var t, l;
                return {
                    reviews: null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.customerReviews.map(e => {
                        var t, l;
                        return null == e ? void 0 : null === (l = e.customerReview) || void 0 === l ? void 0 : null === (t = l.value) || void 0 === t ? void 0 : t.data
                    }),
                    title: (0, E.J)(null == e ? void 0 : null === (l = e.data) || void 0 === l ? void 0 : l.title)
                }
            };
            var q = l(31189);
            let L = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.reduce((e, t) => {
                    let l = t.id,
                        n = {
                            id: t.id,
                            ...t.data
                        };
                    return e[l] = n, e
                }, {})
            };
            var $ = l(28937),
                H = l(72820),
                J = l(33146),
                Q = l(38007),
                K = l(93570);
            let V = (0, r.createContext)({}),
                U = () => (0, r.useContext)(V),
                X = (0, r.createContext)({}),
                z = () => (0, r.useContext)(X);
            var Y = e => {
                    var t, l, n, o, i, d;
                    let {
                        title: s,
                        cta: u,
                        media: m,
                        authors: x,
                        handleCardClick: h,
                        cardIndex: v,
                        bp: p,
                        isClone: g = !1,
                        theme: f = "white"
                    } = e, {
                        badge: y,
                        activeCardIdx: w,
                        playButtonPrefix: N
                    } = z(), C = null == s ? void 0 : s.replace(/<[^>]+>/g, "").trim(), _ = N ? "".concat(N, " ").concat(C) : C, {
                        pauseAllCards: k,
                        unpauseAllCards: A,
                        moveFocusedCardInView: I,
                        resetOnBlur: T
                    } = U(), {
                        locale: R
                    } = (0, Q.PE)(), {
                        onHoverBp: O
                    } = (0, J.Z)({
                        bp: p,
                        index: v
                    }), S = (0, r.useRef)(null);
                    (0, r.useEffect)(() => {
                        S.current && g && S.current.querySelectorAll("a,button").forEach(e => {
                            e.setAttribute("tabindex", "-1")
                        })
                    }, [S, g]);
                    let B = ["Default", "undefined"].includes(R) ? "en" : R,
                        W = null == m ? void 0 : null === (n = m.imageBynderAsset) || void 0 === n ? void 0 : null === (l = n.images) || void 0 === l ? void 0 : null === (t = l[B]) || void 0 === t ? void 0 : t.desktop,
                        Z = (null == W ? void 0 : W.modalPlayerUrl) || "",
                        F = (null == m ? void 0 : m.alt) || "",
                        D = c()("overflow-hidden", "max-md:motion-reduce:w-full max-md:motion-reduce:h-auto motion-reduce:aspect-9/16", {
                            "lg:h-143": v % 3 == 0,
                            "lg:h-71.5": v % 3 != 0
                        }, "md:motion-reduce:w-full md:motion-reduce:h-auto", "md:motion-reduce:[&:nth-child(3n-2)]:h-auto md:motion-reduce:[&:not(:nth-child(3n-2))]:h-auto"),
                        E = c()("max-lg:h-full max-lg:w-full lg:w-full lg:h-full");
                    return (0, a.jsxs)("li", {
                        ref: S,
                        className: c()("rounded-video relative border border-black border-solid transition-opacity duration-500 ease-in-out", "w-66 max-lg:min-w-66 lg:w-80 h-105", "lg:[&:nth-child(3n-2)]:mt-15", "lg:[&:nth-child(6n-1)]:mt-30", "md:motion-reduce:[&:nth-child(3n-2)]:mt-0 md:motion-reduce:[&:nth-child(6n-1)]:mt-0", "[&>button]:w-full", "[&_.video-base]:w-full [&_.video-base]:h-[2.813rem] [&_.video-base]:flex-none [&_.video-base>div]:top-0 [&_.video-base>div]:translate-y-0", "[&_.video-modal-button]:text-center", D, {
                            "max-lg:opacity-40": v !== w,
                            [f]: f
                        }),
                        "data-index": v,
                        onMouseOver: () => {
                            var e;
                            let t = document.querySelector(".video-modal-overlay");
                            "open" !== (null == t ? void 0 : null === (e = t.dataset) || void 0 === e ? void 0 : e.state) && O(), k && k()
                        },
                        onMouseLeave: A,
                        onKeyUp: I,
                        onBlur: T,
                        children: [(0, a.jsxs)("div", {
                            onDragStart: e => e.preventDefault(),
                            onClick: e => h(e, v),
                            "data-index": v,
                            className: D,
                            children: [(0, a.jsx)(P.Z, {
                                wrapperClasses: c()("object-cover", D),
                                assetClasses: c()("object-cover overflow-visible", E),
                                bynderImage: m,
                                width: 570,
                                fillContainer: !0,
                                alt: F,
                                forceAutoplay: !1,
                                autoPlay: !1,
                                controllable: !0
                            }), (null == y ? void 0 : null === (d = y.imageBynderAsset) || void 0 === d ? void 0 : null === (i = d.additionalInfo) || void 0 === i ? void 0 : null === (o = i.selectedFile) || void 0 === o ? void 0 : o.url) && (0, a.jsx)("div", {
                                className: "absolute h-22.5 w-22.5 top-5 left-5 rounded-full",
                                children: (0, a.jsx)("img", {
                                    className: "w-full h-full",
                                    src: y.imageBynderAsset.additionalInfo.selectedFile.url,
                                    alt: y.alt
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: c()("hover-container flex opacity-100 flex-col backdrop-blur-bokeh-md bg-[rgba(var(--colors-white),0.6)] gap-5 justify-center content-center items-center text-center absolute m-5 p-5 h-auto w-56 border top-auto bottom-0 left-auto right-auto will-change-opacity", "motion-reduce:w-4/5", "lg:opacity-0 lg:focus-within:opacity-100 lg:hover:opacity-100 transition-opacity duration-300 lg:left-0 lg:right-auto lg:top-0 lg:bottom-auto lg:m-0 lg:w-full lg:h-full max-lg:rounded-video"),
                            children: [(0, a.jsx)(j.oX, {
                                vimeo: Z,
                                buttonAriaLabel: _,
                                closeModal: "Close",
                                children: (0, a.jsx)("h3", {
                                    className: "text-display-8 line-clamp-3 text-lohp-container-content",
                                    children: (0, b.ZP)(s || "")
                                })
                            }), (0, a.jsx)("div", {
                                className: "card-authors flex flex-col gap-1",
                                children: (null == x ? void 0 : x[0]) && x.slice(0, 2).map((e, t) => (0, a.jsx)(eo.CardAuthor, {
                                    ...e
                                }, "author".concat(t)))
                            }), (0, a.jsx)(j.Kd, {
                                buttonAriaLabel: _,
                                alt: (null == u ? void 0 : u.label) || "",
                                vimeo: Z,
                                closeModal: "Close",
                                buttonAlignment: "center",
                                bpPlay: p ? (0, K.Z)({
                                    bpWithContext: p,
                                    event_name: "vimeo.marketing_player_action",
                                    index: v,
                                    action_type: "click"
                                }) : void 0
                            })]
                        })]
                    })
                },
                ee = l(74619),
                et = l(10666);
            let el = (0, r.forwardRef)((e, t) => {
                let {
                    cards: l,
                    isClone: n
                } = e, {
                    activeCardIdx: o = 0,
                    setActiveCardIdx: r = () => void 0
                } = z(), {
                    handleTouchStart: i,
                    handleTouchEnd: d,
                    handleTouchMove: s,
                    isDragging: u,
                    isCarouselActive: m
                } = (0, et.Z)({
                    carouselId: "lohpStaffPicksCardset",
                    cardContainerRef: t,
                    cards: l.map(e => ({
                        cardTitle: e.title
                    })),
                    activeCardIdx: o,
                    setActiveCardIdx: r,
                    isMobileOnly: !0,
                    isInfinite: !0,
                    mobileBreakpoint: 1024
                }), x = (e, t) => {
                    m && (u ? e.preventDefault() : o !== t && (e.preventDefault(), r(t)))
                };
                return (0, a.jsx)("ul", {
                    "aria-hidden": !!n || void 0,
                    ref: t,
                    onTouchStart: i,
                    onTouchEnd: d,
                    onTouchMove: s,
                    className: c()("flex gap-5 w-full will-change-transform", "motion-reduce:col-[1/-1] motion-reduce:grid-cols-1 motion-reduce:gap-5", "max-md:motion-reduce:grid max-sm:motion-reduce:grid-cols-1 max-md:motion-reduce:grid-cols-2", "lg:inline-flex lg:justify-start lg:items-start lg:content-start lg:flex-col lg:h-178 lg:flex-wrap lg:w-[var(--lohp-staff-picks-cardset-width)]", "md:motion-reduce:grid md:motion-reduce:grid-cols-1 lg:motion-reduce:grid-cols-2 xl:motion-reduce:grid-cols-3 2xl:motion-reduce:grid-cols-4 md:motion-reduce:w-full md:motion-reduce:h-auto"),
                    children: l.map((e, t) => (0, a.jsx)(Y, {
                        ...e,
                        handleCardClick: x,
                        cardIndex: t,
                        isClone: n
                    }, t))
                })
            });
            var en = l(24931),
                ea = l(15673);
            let eo = {
                Provider: e => {
                    let {
                        children: t,
                        ...l
                    } = e;
                    return (0, a.jsx)(X.Provider, {
                        value: l,
                        children: t
                    })
                },
                Title: () => {
                    let {
                        title: e
                    } = z(), t = (0, r.useRef)(null), l = (0, v.OW)({
                        ref: t,
                        threshold: p.Cn
                    });
                    return (0, a.jsx)("h2", {
                        ref: t,
                        className: c()("col-[2/-2] text-center md:text-left text-display-mobile-6 md:text-display-6 max-w-207.5", {
                            "md:animate-slide-in-from-top md:motion-reduce:animate-none": !0 === l,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === l
                        }),
                        children: (0, b.ZP)(e || "")
                    })
                },
                Description: () => {
                    let {
                        description: e = ""
                    } = z(), t = (0, r.useRef)(null), l = (0, v.OW)({
                        ref: t,
                        threshold: p.Cn
                    });
                    return (0, a.jsx)("div", {
                        ref: t,
                        className: c()("staff-picks-description col-[2/-2] max-w-207.5 text-balance text-body-3 md:text-body-1", {
                            "md:animate-slide-in-from-right md:motion-reduce:animate-none": !0 === l,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === l
                        }),
                        children: (0, b.ZP)(e)
                    })
                },
                Cta: () => {
                    let {
                        cta: e
                    } = z(), t = (0, r.useRef)(null), l = (0, v.OW)({
                        ref: t,
                        threshold: p.Cn
                    });
                    return (0, a.jsx)($.W.Grid, {
                        className: c()("order-3 lg:order-2 lg:mb-5", {
                            "md:animate-slide-in-from-bottom md:motion-reduce:animate-none": !0 === l,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === l
                        }),
                        children: (0, a.jsx)("div", {
                            ref: t,
                            className: "col-[2/-2] flex justify-center lg:justify-start",
                            children: (0, a.jsx)(f.yT, {
                                ...e
                            })
                        })
                    })
                },
                CarouselArrowNav: () => {
                    let {
                        activeCardIdx: e = 0,
                        setActiveCardIdx: t = () => {
                            console.error("active card setter not initialized")
                        },
                        cards: l = []
                    } = z(), n = "p-0 m-0 flex bg-transparent border-0 cursor-pointer text-white disabled:opacity-50", o = e < 0 ? l.length + e + 1 : e >= l.length ? e - l.length + 1 : e + 1, r = e => {
                        let l = e.currentTarget;
                        l.setAttribute("disabled", "true"), t(parseInt(e.currentTarget.getAttribute("data-index") || "0", 10)), setTimeout(() => {
                            l.removeAttribute("disabled")
                        }, 1200)
                    };
                    return (0, a.jsxs)("div", {
                        className: "carousel-nav flex lg:hidden gap-2.5 w-auto justify-center items-center content-center motion-reduce:hidden",
                        children: [(0, a.jsx)("button", {
                            "aria-label": "Go to previous slide",
                            className: n,
                            "data-index": e - 1,
                            onClick: r,
                            children: (0, a.jsx)(ea.default, {
                                iconName: "icon-lohp-circle-arrow-left",
                                className: "w-10 h-10"
                            })
                        }), (0, a.jsxs)("span", {
                            className: "inline-block w-11 text-center",
                            children: [o, "/", l.length]
                        }), (0, a.jsx)("button", {
                            "aria-label": "Go to previous slide",
                            className: n,
                            "data-index": e + 1,
                            onClick: r,
                            children: (0, a.jsx)(ea.default, {
                                iconName: "icon-lohp-circle-arrow-right",
                                className: "w-10 h-10"
                            })
                        })]
                    })
                },
                CardsProvider: e => {
                    let {
                        children: t,
                        ...l
                    } = e;
                    return (0, a.jsx)(V.Provider, {
                        value: l,
                        children: t
                    })
                },
                Cardsets: () => {
                    let {
                        cards: e = [],
                        setActiveCardIdx: t
                    } = z(), l = (0, r.useRef)(null), n = (0, v.OW)({
                        ref: l,
                        threshold: .05
                    }), o = (0, r.useRef)(null), i = (0, v.S1)(l, {
                        rootMargin: "0px",
                        threshold: 0,
                        freezeOnceVisible: !1
                    }), [d, s] = (0, r.useState)([]), [u, m] = (0, r.useState)("auto"), [x, h] = (0, r.useState)(!1), [p, g] = (0, r.useState)(!1), [f, b] = (0, r.useState)("0"), [j, y] = (0, r.useState)("auto"), {
                        width: w
                    } = (0, v.w_)(), N = (0, v.y1)(), C = (0, r.useCallback)(() => {
                        var e;
                        let t = null == l ? void 0 : null === (e = l.current) || void 0 === e ? void 0 : e.querySelectorAll("video");
                        t && w && w >= 1024 && (h(!0), t.forEach(e => {
                            e.pause()
                        }))
                    }, [l, w]), _ = (0, r.useCallback)(() => {
                        var e;
                        let t = null == l ? void 0 : null === (e = l.current) || void 0 === e ? void 0 : e.querySelectorAll("video");
                        t && w && w >= 1024 && (h(!1), t.forEach(e => {
                            e.play().catch(() => {})
                        }))
                    }, [l, w]), k = (0, r.useCallback)(() => {
                        w && w >= 1024 && ((null == i ? void 0 : i.isIntersecting) === !0 ? _() : C())
                    }, [C, _, i, w]), P = (0, r.useCallback)(e => {
                        if ("Tab" === e.code) {
                            g(!0);
                            let n = e.currentTarget.getBoundingClientRect().left,
                                a = e.currentTarget.getBoundingClientRect().right;
                            if (l.current && n && a && w) {
                                if (w >= 1024) {
                                    let e = getComputedStyle(l.current).transform,
                                        t = e.includes("matrix") ? parseInt(e.split("(")[1].split(")")[0].split(",")[4]) : 0;
                                    a > w ? l.current.style.transform = "translate3d(".concat(t + w - a, "px, 0, 0)") : n < 0 && (l.current.style.transform = "translate3d(".concat(t - n, "px, 0, 0)"))
                                } else t && t(Number(e.currentTarget.getAttribute("data-index")))
                            }
                        }
                    }, [w, t]), A = (0, r.useCallback)(e => {
                        let t = null == e ? void 0 : e.currentTarget.closest("ul");
                        setTimeout(() => {
                            var e, n;
                            t === (null === (n = document) || void 0 === n ? void 0 : null === (e = n.activeElement) || void 0 === e ? void 0 : e.closest("ul")) && (g(!1), l.current && (l.current.style.transform = "unset"))
                        }, 100)
                    }, [l]);
                    (0, r.useEffect)(() => {
                        (0, en.Ds)(k, 100)()
                    }, [w, null == i ? void 0 : i.isIntersecting, d, k]);
                    let I = (0, r.useCallback)(() => {
                        if (w && w >= 1024 && (null == o ? void 0 : o.current) && !N) {
                            let t = o.current.scrollWidth + 20;
                            b("-".concat(t, "px")), y("".concat(o.current.scrollWidth, "px"));
                            let l = Math.ceil(w / t);
                            m(t * (l + 1)), s(Array.from({
                                length: l
                            }, (t, l) => (0, a.jsx)(eo.Cardset, {
                                cards: e,
                                isClone: !0
                            }, "staffPicksCard".concat(l))))
                        } else s([])
                    }, [w, o, N, e]);
                    return (0, r.useEffect)(() => {
                        (0, en.Ds)(I, 100)()
                    }, [w, I]), (0, a.jsx)(eo.CardsProvider, {
                        pauseAllCards: C,
                        unpauseAllCards: _,
                        moveFocusedCardInView: P,
                        resetOnBlur: A,
                        children: (0, a.jsx)("div", {
                            ref: l,
                            style: {
                                "--container-width": "".concat(u, "px"),
                                "--lohp-staff-picks-translateX": f,
                                "--lohp-staff-picks-cardset-width": j
                            },
                            className: c()("relative w-full overflow-hidden will-change-transform", "lg:overflow-visible lg:w-[var(--container-width)]", "motion-reduce:grid motion-reduce:grid-cols-25 motion-reduce:min-w-[375px] motion-reduce:max-w-screen-2xl motion-reduce:mx-auto motion-reduce:w-full motoin-reduce:overflow-clip", {
                                "lg:animate-lohpStaffPicksScroll": (null == i ? void 0 : i.isIntersecting) === !0 && !p,
                                "lg:pause-animation": x,
                                "lg:animate-none": p
                            }, "lg:motion-reduce:animate-none lg:motion-reduce:w-full"),
                            children: (0, a.jsxs)("div", {
                                className: c()("inner flex gap-5 motion-reduce:col-[2/-2] relative", {
                                    "md:animate-fade-in md:motion-reduce:animate-none": !0 === n,
                                    "md:opacity-0 md:motion-reduce:opacity-100": !1 === n
                                }),
                                children: [(0, a.jsx)(eo.Cardset, {
                                    ref: o,
                                    cards: e
                                }), d]
                            })
                        })
                    })
                },
                Cardset: el,
                CardAuthor: e => {
                    let {
                        authorName: t,
                        authorImage: l,
                        authorUrl: n
                    } = e, {
                        authorImageAltPrefix: o
                    } = z(), r = o ? "".concat(o, " ").concat(t) : t;
                    return (0, a.jsx)("a", {
                        className: "body-4 no-underline hover:opacity-60 transition-opacity duration-300 ease-in-out text-black",
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0, a.jsxs)("span", {
                            className: "text-body-4.25 md:text-body-3 flex justify-center items-center gap-2.5",
                            children: [(0, a.jsx)("span", {
                                className: "author-image flex rounded-full w-6.5 h-6.5 overflow-hidden",
                                children: l && (0, a.jsx)(ee.default, {
                                    imageBynderAsset: l,
                                    alt: r,
                                    width: 50
                                })
                            }), (0, a.jsx)("span", {
                                className: "text-left",
                                rel: "author",
                                children: t
                            })]
                        })
                    })
                }
            };
            var er = l(22031);

            function ei(e) {
                let {
                    cards: t = [],
                    theme: l,
                    title: n,
                    description: o,
                    cta: i,
                    badge: d,
                    bpScroll: s,
                    playButtonPrefix: c,
                    authorImageAltPrefix: u
                } = e, [m, x] = (0, r.useState)(0), [h, v] = (0, r.useState)(0);
                return (0, r.useEffect)(() => {
                    m !== h && ((0, er.Q)({
                        bpWithContext: s
                    }), v(m))
                }, [m, h, s]), (0, a.jsx)(eo.Provider, {
                    theme: l,
                    title: n,
                    description: o,
                    cta: i,
                    badge: d,
                    cards: t,
                    activeCardIdx: m,
                    setActiveCardIdx: x,
                    playButtonPrefix: c,
                    authorImageAltPrefix: u,
                    children: (0, a.jsxs)(H.h, {
                        theme: l,
                        className: "text-center md:text-left text-card-content [&>div]:gap-y-10 [&>div]:md:gap-y-10",
                        children: [(0, a.jsxs)($.W.Grid, {
                            className: "gap-y-10 md:gap-y-5 order-1",
                            children: [n && (0, a.jsx)(eo.Title, {}), o && (0, a.jsx)(eo.Description, {})]
                        }), i && (0, a.jsx)(eo.Cta, {}), t.length > 0 && (0, a.jsxs)("div", {
                            className: "videos flex flex-col gap-y-8 order-2 lg:order-3",
                            children: [(0, a.jsx)(eo.CarouselArrowNav, {}), (0, a.jsx)(eo.Cardsets, {})]
                        })]
                    })
                })
            }
            let ed = e => {
                var t;
                let {
                    theme: l,
                    title: n,
                    description: a,
                    cta: o,
                    badge: r,
                    bpScroll: i,
                    playButtonPrefix: d,
                    authorImageAltPrefix: s
                } = e.data;
                return {
                    theme: l,
                    title: n,
                    description: a,
                    cta: o,
                    badge: r,
                    cards: (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.cards) ? e.data.cards.map(e => {
                        var t, l, n, a, o;
                        if (null == e ? void 0 : null === (n = e.card) || void 0 === n ? void 0 : null === (l = n.value) || void 0 === l ? void 0 : null === (t = l.data) || void 0 === t ? void 0 : t.authors) {
                            let t = e.card.value.data.authors.map(e => {
                                var t, l;
                                if (null == e ? void 0 : null === (l = e.author) || void 0 === l ? void 0 : null === (t = l.value) || void 0 === t ? void 0 : t.data) return {
                                    ...e,
                                    ...e.author.value.data
                                }
                            });
                            e.card.value.data.authors = t.filter(e => e)
                        }
                        return null == e ? void 0 : null === (o = e.card) || void 0 === o ? void 0 : null === (a = o.value) || void 0 === a ? void 0 : a.data
                    }) : [],
                    bpScroll: i,
                    playButtonPrefix: d,
                    authorImageAltPrefix: s
                }
            }
        },
        73660: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return d
                }
            });
            var n = l(52322),
                a = l(12524),
                o = l.n(a),
                r = l(15673),
                i = e => {
                    let {
                        i: t,
                        isFilled: l,
                        isHalf: a,
                        width: i = 18,
                        name: d = "star"
                    } = e;
                    return (0, n.jsx)(r.default, {
                        iconName: a ? "icon-chroma-star-half-color" : "icon-chroma-star-color",
                        width: i,
                        height: i,
                        className: o()({
                            invisible: !l && !a
                        })
                    }, "star-rating-".concat(d, "-").concat(t + 1))
                },
                d = e => {
                    let {
                        id: t,
                        className: l,
                        stars: a,
                        rating: r,
                        name: d = "",
                        width: s = 18,
                        theme: c = "light-gray"
                    } = e, u = [, , , , , ].fill(null).map((e, t) => ({
                        isFilled: t + 1 <= (null != a ? a : 0),
                        isHalf: !!a && t + 1 > a && t + 1 < a + 1
                    }));
                    return (0, n.jsxs)("div", {
                        className: o()("flex items-center justify-center gap-x-0", {
                            [l]: null == l ? void 0 : l.length
                        }),
                        children: [null == u ? void 0 : u.map((e, t) => (0, n.jsx)(i, {
                            i: t,
                            width: s,
                            name: d,
                            theme: c,
                            ...e
                        }, "star-rating-".concat(d, "-").concat(t + 1))), (0, n.jsx)("span", {
                            className: "sr-only",
                            id: "star-rating-".concat(t),
                            children: r
                        })]
                    })
                }
        },
        13237: function(e, t, l) {
            l.d(t, {
                R: function() {
                    return i
                },
                G: function() {
                    return r
                }
            });
            var n = l(52322),
                a = l(12524),
                o = l.n(a);

            function r(e) {
                let {
                    tag: t,
                    className: l
                } = e;
                return (0, n.jsx)("span", {
                    className: o()("tag-standard text-bokeh-display-2xs h-fit rounded-bokeh-xs px-1 last:ml-1 border-lohp-container-content border-solid border", {
                        [l]: null == l ? void 0 : l.length
                    }),
                    children: t
                })
            }

            function i(e) {
                let {
                    tag: t,
                    className: l,
                    theme: a = "blue"
                } = e;
                return (0, n.jsx)("span", {
                    className: o()("tag-solid text-bokeh-display-2xs h-fit text-tag-bokeh-content rounded-bokeh-xs px-1 last:ml-1 py-[1.5px] bg-tag-bokeh-bg", {
                        [l]: null == l ? void 0 : l.length,
                        [a]: a
                    }),
                    children: t
                })
            }
            l(2784)
        },
        93570: function(e, t) {
            t.Z = e => {
                let {
                    bpWithContext: t,
                    index: l,
                    action_type: n,
                    event_name: a
                } = e;
                return null == t ? void 0 : t.map(e => ({
                    ...e,
                    event_name: a || e.event_name,
                    contexts: {
                        ...e.contexts,
                        action_context: {
                            ...e.contexts.action_context,
                            action_type: n
                        },
                        product_analytics_context: {
                            ...e.contexts.product_analytics_context,
                            copy: "".concat(e.contexts.product_analytics_context.copy || "", "_").concat(l + 1)
                        }
                    }
                }))
            }
        }
    }
]);
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [49574], {
        34244: function(e, t, l) {
            l.d(t, {
                Ds: function() {
                    return p
                },
                UI: function() {
                    return y
                },
                _K: function() {
                    return N
                },
                _r: function() {
                    return w
                },
                y$: function() {
                    return C
                }
            });
            var n = l(52322),
                a = l(12524),
                r = l.n(a),
                i = l(86741),
                s = l(20162),
                d = l(24276),
                o = l(75876),
                c = l(2784),
                m = l(29571);
            let u = e => {
                    let {
                        cta: t,
                        children: l,
                        ...a
                    } = e;
                    return (0, n.jsx)(m.u.Provider, {
                        cta: t,
                        ...a,
                        children: (0, n.jsx)(m.u.Element, {
                            children: l
                        })
                    })
                },
                x = function(e) {
                    let {
                        className: t,
                        innerClassName: l,
                        cta: a,
                        children: i,
                        ...s
                    } = e, d = (null == a ? void 0 : a.url) ? u : "article", o = (null == a ? void 0 : a.url) ? {
                        cta: a,
                        ...s
                    } : s;
                    return (0, n.jsx)(d, {
                        className: r()("card-base w-full", {
                            [t]: t
                        }),
                        ...o,
                        children: (0, n.jsx)("div", {
                            className: r()("card-base flex flex-col group", {
                                [l]: t
                            }),
                            children: i
                        })
                    })
                },
                f = function(e) {
                    let {
                        className: t,
                        children: l
                    } = e;
                    return (0, n.jsx)("div", {
                        className: r()("card-body flex flex-col items-center flex-grow justify-between", {
                            [t]: t
                        }),
                        children: l
                    })
                },
                h = function(e) {
                    let {
                        className: t,
                        children: l
                    } = e;
                    return (0, n.jsx)("div", {
                        className: r()("card-content flex flex-col justify-between items-center", {
                            [t]: t
                        }),
                        children: l
                    })
                };

            function p(e) {
                let {
                    title: t,
                    semanticLevel: l = "h3",
                    description: a,
                    cta: c,
                    dir: m,
                    className: u,
                    tooltip: p,
                    bynderImage: v
                } = e;
                return (0, n.jsxs)(x, {
                    className: r()("card-video md:h-full", {
                        [u]: u
                    }),
                    innerClassName: r()("md:h-full", {
                        "md:!flex-row-reverse md:gap-x-lohp-lg": "row" === m
                    }),
                    cta: c,
                    children: [v ? (0, n.jsx)(o.Z, {
                        wrapperClasses: r()("flex h-auto aspect-4/3", {
                            "w-full lg:w-1/2": "row" === m,
                            "w-full": "row" !== m
                        }),
                        bynderImage: v
                    }) : null, (0, n.jsxs)(f, {
                        className: r()("gap-y-6 md:gap-y-8 md:p-0 !justify-center !items-start", {
                            "w-full lg:w-1/2": "row" === m,
                            "w-full": "row" !== m
                        }),
                        children: [(0, n.jsxs)(h, {
                            className: "gap-y-2 md:gap-y-4 pt-2 md:pt-8 text-body-3 md:text-body-2 text-left !items-start px-4 md:px-0",
                            children: [t && (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsxs)("div", {
                                    className: "flex items-baseline gap-x-1 [&_+_p]:text-lohp-container-content-light",
                                    children: [(0, n.jsx)(l || "h3", {
                                        className: "card-title text-body-3 font-medium md:text-display-mobile-7",
                                        children: t
                                    }), p && (0, n.jsx)(d.e, {
                                        children: (0, i.ZP)(p)
                                    })]
                                })
                            }), "string" == typeof a && (0, i.ZP)(a)]
                        }), c && (0, n.jsx)("div", {
                            className: "px-4 md:px-0",
                            children: (0, n.jsx)(s.yT, {
                                ...c
                            })
                        })]
                    })]
                })
            }
            var v = l(98115),
                b = l(49496),
                j = l(87163);

            function y(e) {
                let {
                    title: t,
                    semanticLevel: l = "h3",
                    description: a,
                    video: s,
                    cta: m,
                    dir: u,
                    className: p,
                    cardContentClassName: y,
                    tooltip: g,
                    bynderImage: N
                } = e, w = c.useRef(null), C = (0, j.OW)({
                    ref: w,
                    threshold: v.Cn,
                    rootMargin: "-".concat(v.kE, "px 0px -50% 0px"),
                    unsetOnHide: !0
                }), {
                    isMobile: k
                } = (0, j.w_)(), P = c.useRef(null), E = (0, c.useCallback)(() => {
                    var e, t;
                    null === (e = P.current) || void 0 === e || e.play(), null === (t = P.current) || void 0 === t || t.loop(!0)
                }, []), O = (0, c.useCallback)(() => {
                    var e;
                    null === (e = P.current) || void 0 === e || e.loop(!1)
                }, []), _ = (0, c.useCallback)(() => {
                    var e;
                    null === (e = P.current) || void 0 === e || e.stop()
                }, []);
                return (0, c.useEffect)(() => {
                    k && !0 === C ? E() : k && !1 === C && O()
                }, [k, C, E, O]), (0, n.jsxs)(x, {
                    className: r()("card-video md:h-full", {
                        [p]: p
                    }),
                    innerClassName: r()("md:h-full", {
                        "md:!flex-row-reverse md:gap-x-lohp-lg": "row" === u
                    }),
                    onPointerEnter: E,
                    onPointerLeave: O,
                    onFocus: E,
                    onBlur: O,
                    cta: m,
                    children: [(null == s ? void 0 : s.mp4) ? (0, n.jsx)("div", {
                        ref: w,
                        className: r()("flex h-auto aspect-4/3", {
                            "w-full lg:w-1/2": "row" === u,
                            "w-full": "row" !== u
                        }),
                        children: (0, n.jsx)(b.NW, {
                            ref: P,
                            ...s,
                            isNotInViewCallback: _
                        })
                    }) : N ? (0, n.jsx)(o.Z, {
                        wrapperClasses: r()("flex h-auto aspect-4/3", {
                            "w-full lg:w-1/2": "row" === u,
                            "w-full": "row" !== u
                        }),
                        bynderImage: N
                    }) : null, (0, n.jsx)(f, {
                        className: r()("gap-y-10 md:p-0 !justify-center !items-start", {
                            "w-full lg:w-1/2": "row" === u,
                            "w-full": "row" !== u
                        }),
                        children: (0, n.jsxs)(h, {
                            className: r()("gap-y-2 pt-8 text-body-3 md:text-body-2 text-left !items-start px-4 md:px-0", {
                                [y]: y
                            }),
                            children: [t && (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsxs)("div", {
                                    className: "flex items-baseline gap-x-1 [&_+_p]:text-lohp-container-content-light",
                                    children: [(0, n.jsx)(l || "h3", {
                                        className: "card-title text-body-3 font-medium md:text-display-mobile-7",
                                        children: t
                                    }), g && (0, n.jsx)(d.e, {
                                        children: (0, i.ZP)(g)
                                    })]
                                })
                            }), "string" == typeof a && (0, i.ZP)(a)]
                        })
                    })]
                })
            }
            var g = l(15673);

            function N(e) {
                let {
                    title: t,
                    icon: l
                } = e;
                return (0, n.jsxs)("div", {
                    className: "card-icon flex flex-col gap-5 w-full h-full items-center px-1 md:px-[2px]",
                    children: [(0, n.jsx)(g.default, {
                        iconName: l,
                        "aria-hidden": !0,
                        className: "flex"
                    }), (0, n.jsx)("h3", {
                        className: "card-icon-title text-body-3-med md:text-body-2-med text-balance",
                        children: t
                    })]
                })
            }

            function w(e) {
                let {
                    title: t,
                    description: l,
                    icon: a,
                    cta: s,
                    theme: d
                } = e, o = "black" === d ? "white" : "black";
                return (0, n.jsx)(m.u.Provider, {
                    cta: {
                        ...s,
                        label: t,
                        theme: o
                    },
                    children: (0, n.jsxs)(m.u.Element, {
                        className: r()("flex item-start gap-x-5 group group-hover:text-lohp-text-btn-hover-content hover:text-lohp-text-btn-hover-content", "md:gap-x-lohp-md", "".concat(o), v.AQ, {
                            "text-white": "black" === d
                        }),
                        children: [(0, n.jsx)(g.default, {
                            iconName: a,
                            width: 24,
                            height: 24,
                            className: r()("h-fit"),
                            "aria-hidden": !0
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-col gap-y-[0.625rem]",
                            children: [(0, n.jsxs)(m.u.TextBase, {
                                children: [t && (0, n.jsxs)("h3", {
                                    className: "text-body-3-med md:text-body-2-med",
                                    children: [(0, n.jsx)(m.u.Label, {}), (0, n.jsx)("span", {
                                        className: "inline md:hidden text-body-3-med md:text-body-2-med",
                                        "aria-hidden": !0,
                                        children: (0, i.ZP)("&nbsp;→")
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "hidden md:block",
                                    children: (0, n.jsx)(m.u.ArrowEffect, {})
                                })]
                            }), (0, n.jsx)("div", {
                                className: r()("text-lohp-text-btn-sub-content text-body-3  md:text-body-2 group-hover:text-lohp-text-btn-hover-sub-content", v.AQ),
                                children: "string" == typeof l && (0, i.ZP)(l)
                            })]
                        })]
                    })
                })
            }

            function C(e) {
                let {
                    title: t,
                    description: l,
                    video: a,
                    cta: d,
                    className: o
                } = e, m = c.useRef(null), u = (0, j.OW)({
                    ref: m,
                    threshold: v.Cn,
                    rootMargin: "-".concat(v.kE, "px 0px -50% 0px"),
                    unsetOnHide: !0
                }), {
                    isMobile: p
                } = (0, j.w_)(), y = c.useRef(null), g = (0, c.useCallback)(() => {
                    var e, t;
                    null === (e = y.current) || void 0 === e || e.play(), null === (t = y.current) || void 0 === t || t.loop(!0)
                }, []), N = (0, c.useCallback)(() => {
                    var e;
                    null === (e = y.current) || void 0 === e || e.loop(!1)
                }, []), w = (0, c.useCallback)(() => {
                    var e;
                    null === (e = y.current) || void 0 === e || e.stop()
                }, []);
                return (0, c.useEffect)(() => {
                    p && !0 === u ? g() : p && !1 === u && N()
                }, [p, u, g, N]), (0, n.jsxs)(x, {
                    className: r()("card-video md:h-full", {
                        [o]: o
                    }),
                    innerClassName: "md:h-full",
                    onPointerEnter: g,
                    onPointerLeave: N,
                    onFocus: g,
                    onBlur: N,
                    cta: d,
                    children: [(null == a ? void 0 : a.mp4) && (0, n.jsx)("div", {
                        ref: m,
                        className: "flex w-full h-auto aspect-4/3",
                        children: (0, n.jsx)(b.NW, {
                            ref: y,
                            ...a,
                            isNotInViewCallback: w
                        })
                    }), (0, n.jsxs)(f, {
                        className: "p-[0.625rem] py-[1.25rem] gap-y-10 md:p-0",
                        children: [(0, n.jsxs)(h, {
                            className: "gap-y-5 text-body-3 text-center md:pt-lohp-md md:px-lohp-md",
                            children: [t && (0, n.jsx)("h3", {
                                className: "card-title hidden md:block text-display-mobile-7",
                                children: t
                            }), d && t && (0, n.jsx)("h3", {
                                className: "block md:hidden",
                                children: (0, n.jsx)(s.oD, {
                                    theme: "white",
                                    label: t
                                })
                            }), "string" == typeof l && (0, i.ZP)(l)]
                        }), d && (0, n.jsx)("div", {
                            className: "px-6 md:px-0",
                            children: (0, n.jsx)(s.yT, {
                                className: "hidden md:block",
                                theme: "dark-gray",
                                label: null == d ? void 0 : d.label
                            })
                        })]
                    })]
                })
            }
        },
        99314: function(e, t, l) {
            l.d(t, {
                o: function() {
                    return f
                }
            });
            var n = l(52322),
                a = l(12524),
                r = l.n(a),
                i = l(86741),
                s = l(2784),
                d = l(98115),
                o = l(87163);
            let c = (0, s.createContext)({
                    numOfCards: 0
                }),
                m = () => (0, s.useContext)(c);
            var u = l(20162),
                x = l(49496);
            let f = {
                Title: function(e) {
                    let {
                        className: t,
                        semanticLevel: l = "h2"
                    } = e, a = (0, s.useRef)(null), c = (0, o.OW)({
                        ref: a,
                        threshold: d.Cn
                    }), {
                        title: u
                    } = m(), x = (0, i.ZP)(null != u ? u : "");
                    return (0, n.jsx)(l, {
                        ref: a,
                        className: r()("card-set-title text-balance text-display-mobile-6 md:text-display-6", {
                            "md:animate-slide-in-from-top md:motion-reduce:animate-none": !0 === c,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === c,
                            [t]: t
                        }),
                        children: x
                    })
                },
                Description: function(e) {
                    let {
                        className: t
                    } = e, {
                        description: l,
                        theme: a
                    } = m(), c = (0, s.useRef)(null), u = (0, o.OW)({
                        ref: c,
                        threshold: d.Cn
                    });
                    return (0, n.jsx)(n.Fragment, {
                        children: "string" == typeof l && (0, n.jsx)("div", {
                            ref: c,
                            className: r()("card-set-description", {
                                "md:animate-slide-in-from-right md:motion-reduce:animate-none": !0 === u,
                                "text-lohp-gray": "black" !== a,
                                "md:opacity-0 md:motion-reduce:opacity-100": !1 === u,
                                [t]: t
                            }),
                            children: (0, i.ZP)(l)
                        })
                    })
                },
                Header: function(e) {
                    let {
                        className: t,
                        semanticLevel: l = "h2"
                    } = e, {
                        cta: a,
                        theme: i
                    } = m(), c = (0, s.useRef)(null), x = (0, o.OW)({
                        ref: c,
                        threshold: d.Cn
                    });
                    return (0, n.jsxs)("div", {
                        className: r()("card-set-header flex flex-col gap-y-5 text-body-3 md:text-body-1 md:gap-y-10", {
                            [t]: t
                        }),
                        children: [(0, n.jsxs)("div", {
                            className: "flex flex-col gap-y-5",
                            children: [(0, n.jsx)(f.Title, {
                                semanticLevel: l
                            }), (0, n.jsx)(f.Description, {})]
                        }), ((null == a ? void 0 : a.url) || (null == a ? void 0 : a.isJoinModal)) && (0, n.jsx)("div", {
                            ref: c,
                            className: r()("w-fit", {
                                "md:animate-slide-in-from-bottom md:motion-reduce:animate-none": !0 === x,
                                "md:opacity-0 md:motion-reduce:opacity-100": !1 === x
                            }),
                            children: (0, n.jsx)(u.yT, {
                                theme: "black" === i ? "white" : "dark-gray",
                                ...a
                            })
                        })]
                    })
                },
                Subtitle: function(e) {
                    let {
                        className: t,
                        ...l
                    } = e, {
                        subtitle: a
                    } = m();
                    return (0, n.jsx)("li", {
                        ...l,
                        className: r()("card-set-subtitle flex items-center text-body-2-med", 'before:content-[""] before:flex-1 before:p-[1.5px] before:mr-5 before:bg-current', 'after:content-[""] after:flex-1 after:p-[1.5px] after:ml-5 after:bg-current', {
                            [t]: t
                        }),
                        children: (0, n.jsx)("span", {
                            className: "max-w-[300px] md:max-w-[400px]",
                            children: a
                        })
                    })
                },
                Grid: function(e) {
                    let {
                        children: t,
                        className: l,
                        "aria-labelledby": a
                    } = e, {
                        numOfCards: i
                    } = m(), c = (0, s.useRef)(null), u = (0, o.OW)({
                        ref: c,
                        threshold: d.Cn
                    }), x = r()("card-set-grid grid w-full", {
                        [l]: null == l ? void 0 : l.length,
                        "md:animate-subtle-fade-in md:motion-reduce:animate-none": !0 === u,
                        "md:opacity-0 md:motion-reduce:opacity-100": !1 === u
                    });
                    return (0, n.jsx)(n.Fragment, {
                        children: i && i > 1 ? s.createElement("ul", {
                            ref: c,
                            className: x,
                            "aria-labelledby": a
                        }, t) : s.createElement("div", {
                            ref: c,
                            className: x,
                            "aria-labelledby": a
                        }, t)
                    })
                },
                GridItem: function(e) {
                    let {
                        children: t,
                        className: l
                    } = e, {
                        numOfCards: a
                    } = m(), i = (0, s.useRef)(null), c = (0, o.OW)({
                        ref: i,
                        threshold: d.Cn
                    });
                    return (0, n.jsx)(a && a > 1 ? "li" : "div", {
                        ref: i,
                        className: r()({
                            "md:animate-fade-in md:motion-reduce:animate-none": !0 === c,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === c,
                            [l]: null == l ? void 0 : l.length
                        }),
                        children: t
                    })
                },
                Provider: e => {
                    let {
                        children: t,
                        ...l
                    } = e;
                    return (0, n.jsx)(c.Provider, {
                        value: l,
                        children: t
                    })
                },
                VideoCaption: function(e) {
                    var t, l, a;
                    let {
                        className: d
                    } = e, {
                        video: o
                    } = m();
                    return (0, n.jsxs)("figcaption", {
                        "aria-hidden": null == o || !o.alt,
                        className: r()("card-set-video-caption text-body-3", {
                            [d]: null == d ? void 0 : d.length
                        }),
                        children: [(0, n.jsx)("span", {
                            className: "text-body-2-med block",
                            children: null == o ? void 0 : null === (t = o.playButton) || void 0 === t ? void 0 : t.title
                        }), null == o ? void 0 : null === (a = o.playButton) || void 0 === a ? void 0 : null === (l = a.descriptions) || void 0 === l ? void 0 : l.map((e, t) => (0, n.jsx)(s.Fragment, {
                            children: "string" == typeof(null == e ? void 0 : e.text) && (0, n.jsx)("span", {
                                className: "text-body-3",
                                children: (0, i.ZP)(e.text)
                            }, t)
                        }, t))]
                    })
                },
                VideoModal: function(e) {
                    let {
                        className: t,
                        buttonAlignment: l = "right"
                    } = e, {
                        video: a
                    } = m(), i = (0, s.useRef)(null), c = (0, o.OW)({
                        ref: i,
                        threshold: d.Cn
                    });
                    return (0, n.jsx)("div", {
                        ref: i,
                        className: r()("card-set-video flex flex-1 motion-reduce:animate-none", {
                            [t]: null == t ? void 0 : t.length,
                            "md:animate-subtle-fade-in md:motion-reduce:animate-none": !0 === c,
                            "md:opacity-0 md:motion-reduce:opacity-100": !1 === c
                        }),
                        children: (0, n.jsx)(x.Kd, {
                            ...a,
                            buttonAlignment: l
                        })
                    })
                }
            }
        },
        24276: function(e, t, l) {
            l.d(t, {
                e: function() {
                    return c
                }
            });
            var n = l(52322),
                a = l(24990),
                r = l(12524),
                i = l.n(r),
                s = l(2784),
                d = l(98115),
                o = l(15673),
                c = e => {
                    let {
                        className: t,
                        children: l
                    } = e, [r, c] = (0, s.useState)(!1), m = () => c(e => !e);
                    return (0, n.jsx)(a.zt, {
                        children: (0, n.jsxs)(a.fC, {
                            delayDuration: 0,
                            onOpenChange: e => c(e),
                            open: r,
                            children: [(0, n.jsx)(a.xz, {
                                asChild: !0,
                                onClick: m,
                                className: "group",
                                children: (0, n.jsx)(o.default, {
                                    iconName: "icon-v3-info",
                                    width: 18,
                                    height: 18,
                                    className: "text-[#808790] h-[18px] cursor-pointer hover:opacity-[0.4] transition-opacity"
                                })
                            }), (0, n.jsx)(a.h_, {
                                children: (0, n.jsx)(a.VY, {
                                    avoidCollisions: !0,
                                    className: i()("!font-sans text-white text-body-4.5", "max-w-[260px] md:max-w-[230px] bg-raven-gray rounded-lg", "p-2", "animate-tooltip-fade-in", "-translate-y-1.5", {
                                        [t]: null == t ? void 0 : t.length,
                                        [d.uS]: d.uS,
                                        "animate-tooltip-fade-in": !0 === r,
                                        "animate-tooltip-fade-out": !1 === r
                                    }),
                                    sideOffset: 5,
                                    children: (0, n.jsxs)("div", {
                                        className: "!font-sans flex",
                                        children: [(0, n.jsx)("div", {
                                            className: "flex-1",
                                            children: l
                                        }), (0, n.jsx)("div", {
                                            className: "flex md:hidden items-start w-fit",
                                            children: (0, n.jsx)(o.default, {
                                                iconName: "icon-v3-close-circle",
                                                width: 24,
                                                height: 24,
                                                onClick: m,
                                                className: "cursor-pointer"
                                            })
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                }
        }
    }
]);
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [70971, 23867], {
        20162: function(e, t, l) {
            l.d(t, {
                ZP: function() {
                    return d
                },
                yT: function() {
                    return n.default
                },
                oD: function() {
                    return a
                }
            });
            var n = l(23867),
                o = l(52322);
            l(2784);
            var r = l(29571);

            function a(e) {
                let {
                    isJoinModal: t,
                    label: l,
                    theme: n,
                    url: a,
                    bp: s,
                    className: i,
                    ...d
                } = e;
                return (0, o.jsx)(r.u.Provider, {
                    cta: {
                        isJoinModal: t,
                        label: l,
                        url: a,
                        bp: s,
                        theme: "dark-gray" === n ? "black" : n
                    },
                    ...d,
                    children: (0, o.jsx)(r.u.Element, {
                        children: (0, o.jsxs)(r.u.TextBase, {
                            className: i,
                            children: [(0, o.jsx)(r.u.Label, {
                                className: "text-body-3"
                            }), (0, o.jsx)(r.u.ArrowEffect, {})]
                        })
                    })
                })
            }
            var s = l(12524),
                i = l.n(s);

            function d(e) {
                let {
                    isJoinModal: t,
                    label: l,
                    url: n,
                    bp: a,
                    ...s
                } = e;
                return (0, o.jsx)(r.u.Provider, {
                    cta: {
                        isJoinModal: t,
                        label: l,
                        url: n,
                        bp: a
                    },
                    ...s,
                    children: (0, o.jsx)(r.u.Element, {
                        children: (0, o.jsx)(r.u.Label, {
                            className: i()("text-body-3 !underline hover:opacity-40 transition-opacity duration-350 ease-in-out", s.className)
                        })
                    })
                })
            }
        },
        23867: function(e, t, l) {
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l(52322),
                o = l(12524),
                r = l.n(o),
                a = l(29571);

            function s(e) {
                let {
                    isJoinModal: t,
                    isTertiary: l = !1,
                    label: o,
                    theme: s,
                    url: i,
                    bp: d,
                    isMarketoForm: c,
                    marketoForm: u,
                    ...m
                } = e;
                return (0, n.jsx)(a.u.Provider, {
                    cta: {
                        isJoinModal: t,
                        isMarketoForm: c,
                        marketoForm: u,
                        label: o,
                        url: i,
                        bp: d,
                        theme: s
                    },
                    ...m,
                    isTertiary: l,
                    children: (0, n.jsx)(a.u.Element, {
                        children: (0, n.jsxs)(a.u.Base, {
                            children: [(0, n.jsx)(a.u.Label, {
                                className: r()("text-bokeh-display-sm text-lohp-btn-content", {
                                    "group-hover:text-lohp-btn-hover-content": !l
                                })
                            }), (0, n.jsx)(a.u.ArrowEffect, {})]
                        })
                    })
                })
            }
        },
        49496: function(e, t, l) {
            l.d(t, {
                S9: function() {
                    return C
                },
                NW: function() {
                    return P
                },
                Kd: function() {
                    return B
                },
                QU: function() {
                    return V
                },
                oX: function() {
                    return T
                }
            });
            var n = l(52322),
                o = l(12524),
                r = l.n(o),
                a = l(2784),
                s = l(8798),
                i = l(15673),
                d = l(75876),
                c = l(75381),
                u = l(54530),
                m = l(38007),
                x = (0, a.forwardRef)(function(e, t) {
                    var l, o, s, i, x, h, f;
                    let {
                        mp4: v,
                        alt: p,
                        poster: b,
                        className: j,
                        controllable: g = !1,
                        autoplay: y = !0,
                        isNotInViewCallback: N,
                        forceAutoplay: w,
                        ...k
                    } = e, {
                        locale: B
                    } = (0, a.useContext)(m.RD), V = B && "Default" !== B && "undefined" !== B ? B : "en", T = b && (0, u.p3)(b), C = b && (0, u.dk)((null == b ? void 0 : null === (l = b.images) || void 0 === l ? void 0 : l[V]) || {}, T), P = !(null == b ? void 0 : null === (i = b.images) || void 0 === i ? void 0 : null === (s = i[V]) || void 0 === s ? void 0 : null === (o = s.desktop) || void 0 === o ? void 0 : o.videoUrl);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(null == b ? void 0 : null === (f = b.images) || void 0 === f ? void 0 : null === (h = f[V]) || void 0 === h ? void 0 : null === (x = h.desktop) || void 0 === x ? void 0 : x.videoUrl) ? (0, n.jsx)("div", {
                            className: "video-mp4-bynder block absolute object-cover object-center-center w-full h-full",
                            children: (0, n.jsx)(d.Z, {
                                assetClasses: r()("h-full", {
                                    [j]: j
                                }),
                                wrapperClasses: "w-full h-full",
                                ref: t,
                                preload: "metadata",
                                muted: !0,
                                loop: !0,
                                controllable: g,
                                isNotInViewCallback: N,
                                playsInline: !0,
                                autoPlay: y,
                                bynderImage: {
                                    imageBynderAsset: b
                                },
                                fillContainer: !0,
                                forceAutoplay: w,
                                ...k
                            })
                        }) : (0, n.jsx)(c.Z, {
                            className: r()("video-mp4 block absolute object-cover object-center-center w-full h-full", {
                                [j]: j
                            }),
                            ref: t,
                            preload: "metadata",
                            muted: !0,
                            loop: !0,
                            controllable: g,
                            isNotInViewCallback: N,
                            playsInline: !0,
                            autoPlay: y,
                            "data-src": v,
                            imgSrc: C,
                            forceAutoplay: w,
                            ...k,
                            src: v
                        }), !P && p && (0, n.jsx)("p", {
                            className: "sr-only",
                            children: p
                        })]
                    })
                }),
                h = l(98115),
                f = l(84719),
                v = l(95939),
                p = l(86741);
            let b = e => {
                    let {
                        color: t = "currentColor",
                        className: l
                    } = e;
                    return (0, n.jsx)("svg", {
                        className: l,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "11",
                        height: "20",
                        viewBox: "0 0 11 20",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            d: "M0.900391 19.0865L8.62039 0.186523H10.5004L2.80039 19.0865H0.900391Z",
                            fill: t
                        })
                    })
                },
                j = {
                    Button: function(e) {
                        let {
                            srText: t,
                            className: l,
                            srClassName: o
                        } = e, {
                            hoverSwipeClasses: a
                        } = (0, f.e)({
                            disabled: !1,
                            isPlayButton: !0
                        });
                        return (0, n.jsxs)("div", {
                            className: r()("play-btn group transition-colors duration-350 ease-in-out w-20 h-[2.813rem] bg-lohp-play-btn-bg rounded-bokeh-md flex justify-center items-center ".concat("blue", " ").concat(h.AQ, " ").concat(a), {
                                [l]: l
                            }),
                            children: [t && (0, n.jsx)("span", {
                                className: r()("play-btn-sr-text sr-only", {
                                    [o]: o
                                }),
                                children: t
                            }), (0, n.jsx)(v.default, {
                                className: "w-6 h-6 text-black group-hover:text-white transition-all duration-350 ease-in-out"
                            })]
                        })
                    },
                    Base: function(e) {
                        let {
                            children: t,
                            className: l
                        } = e;
                        return (0, n.jsx)("div", {
                            className: r()("play-btn-base group relative flex group w-fit items-center md:p-5 md:backdrop-blur-bokeh-md md:bg-[rgba(var(--colors-white),0.6)] md:rounded-bokeh-md overflow-hidden", "hover:md:bg-[rgba(var(--colors-black),0.6)] hover:text-white transition-[background-color,color]", "group-hover:md:bg-[rgba(var(--colors-black),0.6)] group-hover:text-white", h.yz, {
                                [l]: l
                            }),
                            children: t
                        })
                    },
                    Title: function(e) {
                        let {
                            title: t,
                            className: l
                        } = e;
                        return (0, n.jsx)("span", {
                            className: r()("play-btn-title text-balance md:text-left", "hidden md:inline-block", {
                                [l]: l
                            }),
                            children: t
                        })
                    },
                    Descriptions: function(e) {
                        let {
                            descriptions: t,
                            className: l
                        } = e;
                        return (0, n.jsx)("div", {
                            className: r()("play-btn-descr text-balance gap-x-1 items-center text-body-4.5 ", "hidden md:flex", {
                                [l]: l
                            }),
                            children: t && (null == t ? void 0 : t.map((e, l) => (0, n.jsxs)(a.Fragment, {
                                children: [e && (0, p.ZP)(e, {
                                    replace: e => {
                                        if (e instanceof p.W_ && "p" === e.tagName) return (0, n.jsx)("span", {
                                            ...e.attribs,
                                            children: (0, p.du)(e.children)
                                        })
                                    }
                                }), l < t.length - 1 && (0, n.jsx)(b, {
                                    className: "w-[0.6rem]"
                                })]
                            }, l)))
                        })
                    }
                };

            function g(e) {
                let {
                    srText: t
                } = e;
                return (0, n.jsx)(j.Button, {
                    srText: t
                })
            }

            function y(e) {
                let {
                    title: t
                } = e;
                return (0, n.jsxs)(j.Base, {
                    className: "md:gap-x-6",
                    children: [(0, n.jsx)(j.Button, {
                        srText: t,
                        srClassName: "md:hidden"
                    }), t && (0, n.jsx)(j.Title, {
                        title: t,
                        className: "md:text-body-3-med md:max-w-[150px]"
                    })]
                })
            }

            function N(e) {
                let {
                    title: t,
                    descriptions: l,
                    icon: o,
                    iconTitle: r
                } = e;
                return (0, n.jsxs)(j.Base, {
                    className: "md:gap-x-[0.625rem]",
                    children: [o && (0, n.jsx)(i.default, {
                        className: "hidden md:inline w-[46.903px] h-[46.903px] md:[&_svg]:w-[46.903px] md:[&_svg]:h-auto",
                        iconName: o,
                        title: r
                    }), (0, n.jsxs)("div", {
                        className: "hidden md:flex md:flex-col md:max-w-[19.188rem]",
                        children: [t && (0, n.jsx)(j.Title, {
                            title: t,
                            className: "md:text-body-1-med"
                        }), l && (0, n.jsx)(j.Descriptions, {
                            descriptions: l.map(e => e.text).filter(e => void 0 !== e)
                        })]
                    }), (0, n.jsx)(j.Button, {
                        className: "md:ml-[0.625rem]",
                        srText: t,
                        srClassName: "md:hidden"
                    })]
                })
            }
            var w = l(20397);
            let k = {
                PlayButton: function(e) {
                    let {
                        title: t,
                        descriptions: l,
                        ...o
                    } = e;
                    return l && (null == l ? void 0 : l.length) > 0 ? (0, n.jsx)(N, {
                        title: t,
                        descriptions: l,
                        ...o
                    }) : t ? (0, n.jsx)(y, {
                        title: t,
                        ...o
                    }) : (0, n.jsx)(g, {
                        srText: t,
                        ...o
                    })
                },
                Mp4Video: x,
                Base: function(e) {
                    let {
                        children: t,
                        className: l
                    } = e;
                    return (0, n.jsx)("div", {
                        className: r()("video-base @container/video-base flex-1 relative rounded-bokeh-lg overflow-hidden flex flex-col items-center", {
                            [l]: l
                        }),
                        children: t
                    })
                },
                VimeoVideo: function(e) {
                    let {
                        vimeo: t,
                        alt: l,
                        bpPlay: o,
                        className: a
                    } = e;
                    return (0, n.jsx)(w.Z, {
                        wrapperClasses: r()("video-Vimeo-video w-full h-full", {
                            [a]: a
                        }),
                        title: l,
                        embeddedVimeoUrl: t,
                        forceAutoplay: !0,
                        bpWithContext: o
                    })
                },
                Overlay: function(e) {
                    let {
                        className: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: r()("video-overlay absolute top-0 left-0 w-full h-full bg-black opacity-40", {
                            [t]: null == t ? void 0 : t.length
                        })
                    })
                }
            };

            function B(e) {
                let {
                    vimeo: t,
                    alt: l,
                    mp4: o,
                    poster: a,
                    closeModal: d,
                    playButton: c,
                    bpPlay: u,
                    buttonAlignment: m,
                    buttonAriaLabel: x
                } = e;
                return (0, n.jsxs)(k.Base, {
                    children: [o && (0, n.jsx)(k.Mp4Video, {
                        mp4: o,
                        poster: a,
                        "aria-hidden": !0
                    }), (null == c ? void 0 : c.icon) && (0, n.jsx)(i.default, {
                        className: "flex absolute top-2 left-2 w-[2.93144rem] h-auto [&_svg]:w-[2.93144rem] [&_svg]:h-auto md:hidden",
                        iconName: null == c ? void 0 : c.icon,
                        title: null == c ? void 0 : c.iconTitle
                    }), (0, n.jsx)("div", {
                        className: r()("video-modal-button absolute max-md:top-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2", "md:w-full md:max-w-full md:px-5 md:translate-y-0 md:bottom-5", "md:video-base:p-0 md:video-base:translate-x-0 md:video-base:translate-y-0 md:video-base:px-5", "md:text-right", {
                            "lg:text-right": "right" === m,
                            "lg:text-center": "center" === m,
                            "lg:text-left": "left" === m
                        }),
                        children: (0, n.jsx)(s.B, {
                            closeSrText: d,
                            contentTitle: l,
                            content: (0, n.jsx)(k.VimeoVideo, {
                                bpPlay: u,
                                vimeo: t,
                                alt: l
                            }),
                            triggerAriaLabel: x,
                            children: (0, n.jsx)(k.PlayButton, {
                                ...c
                            })
                        })
                    })]
                })
            }

            function V(e) {
                let {
                    vimeo: t,
                    alt: l,
                    mp4: o,
                    poster: a,
                    closeModal: i,
                    playButton: d,
                    bpPlay: c,
                    children: u,
                    className: m,
                    childWrapperClassName: x,
                    overlay: h
                } = e;
                return (0, n.jsxs)(k.Base, {
                    className: r()({
                        "z-0 [&>*:not(video,.video-mp4-bynder)]:z-2": h,
                        [m]: null == m ? void 0 : m.length
                    }),
                    children: [h && (0, n.jsx)(k.Overlay, {}), o && (0, n.jsx)(k.Mp4Video, {
                        mp4: o,
                        poster: a,
                        "aria-hidden": !0
                    }), (0, n.jsxs)("div", {
                        className: x,
                        children: [u, (0, n.jsx)("div", {
                            className: "md:absolute md:translate-x-0 md:translate-y-0 md:top-[unset] md:left-[unset] md:bottom-5 md:right-5",
                            children: (0, n.jsx)(s.B, {
                                closeSrText: i,
                                contentTitle: l,
                                content: (0, n.jsx)(k.VimeoVideo, {
                                    bpPlay: c,
                                    vimeo: t,
                                    alt: l
                                }),
                                children: (0, n.jsx)(k.PlayButton, {
                                    ...d
                                })
                            })
                        })]
                    })]
                })
            }

            function T(e) {
                let {
                    vimeo: t,
                    alt: l,
                    closeModal: o,
                    bpPlay: r,
                    children: a
                } = e;
                return (0, n.jsx)(s.B, {
                    closeSrText: o,
                    contentTitle: l,
                    content: (0, n.jsx)(k.VimeoVideo, {
                        bpPlay: r,
                        vimeo: t,
                        alt: l
                    }),
                    children: a
                })
            }

            function C(e) {
                let {
                    mp4: t,
                    alt: l,
                    poster: o
                } = e;
                return (0, n.jsx)(k.Base, {
                    children: (0, n.jsx)(k.Mp4Video, {
                        mp4: t,
                        poster: o,
                        alt: l
                    })
                })
            }
            var P = (0, a.forwardRef)((e, t) => {
                let {
                    mp4: l,
                    alt: o,
                    poster: r,
                    isNotInViewCallback: a
                } = e;
                return (0, n.jsx)(k.Base, {
                    children: (0, n.jsx)(k.Mp4Video, {
                        controllable: !0,
                        autoplay: !1,
                        forceAutoplay: !1,
                        mp4: l,
                        poster: r,
                        alt: o,
                        ref: t,
                        isNotInViewCallback: a
                    })
                })
            })
        }
    }
]);
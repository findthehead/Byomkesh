"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [69020], {
        38214: function(e, l, n) {
            n.d(l, {
                Z: function() {
                    return p
                }
            });
            var d = n(52322),
                i = n(12524),
                o = n.n(i),
                t = n(2784),
                a = n(36028);
            let r = (0, t.createContext)({}),
                u = e => {
                    let {
                        href: l,
                        target: n,
                        title: i,
                        bp: t
                    } = e, r = (0, a.Z)({
                        bpWithContext: t,
                        href: l
                    });
                    return (0, d.jsx)("a", {
                        href: l,
                        target: n,
                        className: o()(["static", "before:content-['_'] before:cursor-[inherit] before:block before:absolute before:top-0 before:left-0 before:z-10 before:w-full before:h-full"]),
                        ...i ? {
                            title: i
                        } : {},
                        onClick: r
                    })
                };
            var s = n(19034),
                v = n.n(s),
                c = n(28894),
                m = n(86741),
                h = n(75876),
                x = n(38007),
                g = n(76811);
            let p = {
                Base: e => {
                    let {
                        children: l,
                        className: n,
                        flip: i,
                        bp: a,
                        theme: s
                    } = e, {
                        columns: v,
                        compact: c,
                        href: m,
                        title: h
                    } = (0, t.useContext)(r);
                    return (0, d.jsxs)("div", {
                        className: o()("card-base", "relative", {
                            [n]: null == n ? void 0 : n.length,
                            "max-md:flex-row max-md:gap-x-4": 1 === v,
                            "md:@[45rem]:flex-row-reverse": i,
                            "!bg-pearl-white": "light-gray" === s,
                            "!bg-white": "light-gray" !== s && !c || "white" === s,
                            "max-md:!bg-[unset]": 1 === v
                        }, "flex flex-col h-full md:@[45rem]:flex-row", "rounded-standard no-underline group w-full"),
                        children: [m ? (0, d.jsx)(u, {
                            href: m,
                            target: "_self",
                            title: h,
                            bp: a
                        }) : null, l]
                    })
                },
                Image: e => {
                    let {
                        className: l,
                        wrapperClassName: n
                    } = e, {
                        columns: i,
                        image: a,
                        title: u,
                        showSkeleton: s
                    } = (0, t.useContext)(r);
                    return (0, d.jsx)(h.Z, {
                        src: null == a ? void 0 : a.src,
                        bynderImage: null == a ? void 0 : a.bynderImage,
                        alt: null == a ? void 0 : a.alt,
                        showSkeleton: s,
                        skeletonBoneClassnames: "aspect-video",
                        assetClasses: o()("aspect-[16/9] w-full h-auto object-cover rounded-standard @[45rem]:h-full", {
                            [l]: null == l ? void 0 : l.length,
                            "max-md:rounded-bokeh-sm max-md:h-full": 1 === i
                        }),
                        wrapperClasses: o()("aspect-video w-full h-auto leading-[0]", {
                            "max-md:basis-[28%]": 1 === i,
                            [n]: null == n ? void 0 : n.length
                        }),
                        ...u ? {
                            title: u
                        } : {},
                        ...(null == a ? void 0 : a.width) ? {
                            width: null == a ? void 0 : a.width
                        } : {},
                        ...(null == a ? void 0 : a.height) ? {
                            width: null == a ? void 0 : a.height
                        } : {}
                    })
                },
                Body: e => {
                    let {
                        children: l,
                        className: n
                    } = e, {
                        columns: i,
                        compact: a
                    } = (0, t.useContext)(r);
                    return (0, d.jsx)("div", {
                        className: o()("card-body flex flex-col gap-4 flex-1 @[45rem]:basis-1/2", {
                            [n]: null == n ? void 0 : n.length,
                            "p-4 pt-6 md:p-6 md:pb-8": !a,
                            "pt-4 @[30rem]:pt-6": a,
                            "!pt-8 md:pt-6": a && 1 !== i,
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
                        showSkeleton: a,
                        compact: u,
                        columns: s
                    } = (0, t.useContext)(r);
                    return a ? (0, d.jsx)(c.Z, {
                        className: "!h-auto !w-[100px] max-md:hidden",
                        boneClasses: "!w-[100px] h-[14px] opacity-[0.25]"
                    }) : (0, d.jsx)("div", {
                        className: "card-tag peer inline-flex w-fit relative z-20 max-md:hidden",
                        children: (0, d.jsx)(i ? "a" : "span", {
                            className: o()("text-xs text-bokeh-grey-500 font-medium no-underline leading-[140%]", "rounded-bokeh-xs border border-bokeh-grey-500 border-solid", "px-1", {
                                "hover:text-black hover:border-black transition-colors": null == i ? void 0 : i.length,
                                "!-mb-2": u && 1 === s,
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
                    } = (0, t.useContext)(x.RD), {
                        showSkeleton: a,
                        compact: u,
                        columns: s,
                        title: v
                    } = (0, t.useContext)(r), m = (0, g.g)(n, i);
                    return a ? (0, d.jsx)(c.Z, {
                        className: "!h-auto !w-[100px] max-md:hidden",
                        boneClasses: "!w-[100px] h-[14px] opacity-[0.25]"
                    }) : (0, d.jsx)("div", {
                        className: "card-tag peer inline-flex w-fit relative z-20 max-md:hidden",
                        children: null == m ? void 0 : m.map(e => (0, d.jsx)("span", {
                            className: o()("text-xs text-bokeh-grey-500 font-medium no-underline leading-[140%]", "rounded-bokeh-xs border border-bokeh-grey-500 border-solid", "px-1", {
                                "-mb-2": u && 1 === s,
                                [l]: null == l ? void 0 : l.length
                            }),
                            children: e
                        }, "integrations-card-tag-".concat(v, "-").concat(e)))
                    })
                },
                Title: e => {
                    let {
                        className: l,
                        skeletonLinesOverride: n,
                        skeletonBoneClasses: i
                    } = e, {
                        href: a,
                        columns: u,
                        showSkeleton: s,
                        titleSemanticLevel: v,
                        title: m
                    } = (0, t.useContext)(r);
                    return s ? (0, d.jsx)(c.Z, {
                        lines: n || (3 === u ? 4 : 2),
                        boneClasses: o()("w-full h-[1ch] md:h-[1.75ch]", {
                            "md:h-[2ch] h-[1.5ch]": 3 === u,
                            [i]: null == i ? void 0 : i.length
                        }),
                        className: "gap-bokeh-xs !h-auto"
                    }) : (0, d.jsx)(null != v ? v : "h3", {
                        className: o()("text-lg text-black !font-medium !leading-[120%] tracking-[-0.72px] line-clamp-2 underline decoration-black/0", "@[30rem]:text-display-7 @[30rem]:line-clamp-none", "transition-colors duration-280 peer-hover:decoration-black/0", {
                            "group-hover:decoration-black": null == a ? void 0 : a.length,
                            "max-md:text-body-4 max-md:tracking-[-0.56px]": 1 === u,
                            "max-md:-mb-2": 2 === u,
                            [l]: null == l ? void 0 : l.length
                        }),
                        children: m
                    })
                },
                Description: e => {
                    let {
                        className: l,
                        skeletonLinesOverride: n,
                        skeletonBonesClasses: i,
                        skeletonClasses: a
                    } = e, {
                        description: u,
                        hideDescription: s,
                        showSkeleton: v
                    } = (0, t.useContext)(r), h = (0, m.ZP)(null != u ? u : "", {
                        replace: e => {
                            if ((null == e ? void 0 : e.children) && "p" === e.name) return (0, d.jsx)(d.Fragment, {
                                children: (0, m.du)(null == e ? void 0 : e.children)
                            })
                        }
                    });
                    return v ? (0, d.jsx)(c.Z, {
                        lines: n || 3,
                        boneClasses: o()("w-full h-[1ch] md:h-[1.75ch]", {
                            [i]: null == i ? void 0 : i.length
                        }),
                        className: o()("gap-bokeh-xs !h-auto", {
                            [a]: null == a ? void 0 : a.length
                        })
                    }) : (0, d.jsx)("p", {
                        className: o()("text-raven-gray font-normal leading-[160%] tracking-[-0.48px]", {
                            hidden: s,
                            "@[30rem]:flex @[45rem]:hidden": null == u ? void 0 : u.length,
                            [l]: null == l ? void 0 : l.length
                        }),
                        children: h
                    })
                },
                Date: e => {
                    let {
                        className: l
                    } = e, {
                        compact: n,
                        columns: i,
                        date: a,
                        showSkeleton: u
                    } = (0, t.useContext)(r), s = v()(a).format("MMMM Do, YYYY");
                    return u ? (0, d.jsx)(c.Z, {
                        className: "!h-auto",
                        boneClasses: "!w-[135px] h-[14px] opacity-[0.25]"
                    }) : (0, d.jsx)("div", {
                        className: o()("flex items-end", {
                            [l]: null == l ? void 0 : l.length,
                            "max-md:flex-none": 1 === i,
                            "flex-none": 2 === i && n,
                            "md:flex-1": 1 === i
                        }),
                        children: (0, d.jsx)("span", {
                            className: o()("text-body-5 md:text-sm leading-[140%] tracking-[-0.42px] font-normal text-raven-gray/70", {
                                "max-md:text-body-5": 1 === i
                            }),
                            children: s
                        })
                    })
                },
                Provider: e => {
                    let {
                        children: l,
                        ...n
                    } = e;
                    return (0, d.jsx)(r.Provider, {
                        value: n,
                        children: l
                    })
                }
            }
        },
        48605: function(e, l, n) {
            n.d(l, {
                g: function() {
                    return t
                }
            });
            var d = n(52322),
                i = n(12524),
                o = n.n(i);
            n(2784);
            let t = {
                Item: n(57072).Z,
                Base: e => {
                    let {
                        children: l,
                        className: n,
                        ...i
                    } = e;
                    return (0, d.jsx)("div", {
                        className: o()("card-grid-base grid w-full md:grid-cols-4 grid-cols-1 gap-5 md:gap-4", {
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
                    return t
                }
            });
            var d = n(52322),
                i = n(12524),
                o = n.n(i);
            let t = (0, n(2784).createContext)({});
            l.Z = e => {
                let {
                    children: l,
                    className: n,
                    columns: i = 1,
                    rows: a = 1
                } = e;
                return (0, d.jsx)(t.Provider, {
                    value: {
                        columns: i,
                        rows: a
                    },
                    children: (0, d.jsx)("div", {
                        className: o()("@container", {
                            "md:col-span-2": 2 === i,
                            "md:col-span-3": 3 === i,
                            "md:row-span-2": 2 === a,
                            [n]: (null == n ? void 0 : n.length) > 0
                        }),
                        children: l
                    })
                })
            }
        },
        82776: function(e, l, n) {
            var d = n(52322),
                i = n(2784),
                o = n(38214),
                t = n(57072),
                a = n(38007),
                r = n(76811);
            l.Z = e => {
                let {
                    image: l,
                    tag: n,
                    title: u,
                    description: s,
                    hideDescription: v = !0,
                    date: c,
                    href: m,
                    compact: h = !1,
                    showSkeleton: x,
                    bp: g
                } = e, {
                    columns: p,
                    rows: f
                } = (0, i.useContext)(t.L), {
                    locale: b
                } = (0, i.useContext)(a.RD);
                return (0, d.jsx)(o.Z.Provider, {
                    image: l,
                    tag: n,
                    title: (0, r.J)(u, b),
                    date: c,
                    href: m,
                    compact: h,
                    description: (0, r.J)(s, b),
                    hideDescription: v,
                    columns: p,
                    rows: f,
                    showSkeleton: x,
                    children: (0, d.jsxs)(o.Z.Base, {
                        ...m ? {
                            href: m,
                            bp: g
                        } : {},
                        children: [(0, d.jsx)(o.Z.Image, {}), (0, d.jsxs)(o.Z.Body, {
                            children: [n || x ? Array.isArray(n) ? (0, d.jsx)(o.Z.Tags, {
                                tags: n
                            }) : (0, d.jsx)(o.Z.Tag, {
                                ...n
                            }) : null, u ? (0, d.jsx)(o.Z.Title, {}) : null, s ? (0, d.jsx)(o.Z.Description, {}) : null, c || x ? (0, d.jsx)(o.Z.Date, {}) : null]
                        })]
                    })
                })
            }
        },
        94777: function(e, l, n) {
            n.d(l, {
                JH: function() {
                    return i
                },
                XS: function() {
                    return t
                },
                _b: function() {
                    return o
                },
                mA: function() {
                    return a
                }
            });
            var d = n(76811);
            let i = (e, l) => {
                    var n, i, o, t, a, r, u, s, v, c, m, h, x, g, p, f, b, j;
                    return {
                        image: {
                            bynderImage: null == e ? void 0 : null === (n = e.headerImage) || void 0 === n ? void 0 : n.bynderImage,
                            src: null !== (g = null == e ? void 0 : null === (i = e.headerImage) || void 0 === i ? void 0 : i.url) && void 0 !== g ? g : "",
                            alt: null !== (p = (0, d.J)(null == e ? void 0 : null === (o = e.headerImage) || void 0 === o ? void 0 : o.alt, l)) && void 0 !== p ? p : ""
                        },
                        tag: {
                            label: null !== (f = (0, d.J)(null == e ? void 0 : null === (s = e.categories) || void 0 === s ? void 0 : null === (u = s[0]) || void 0 === u ? void 0 : null === (r = u.category) || void 0 === r ? void 0 : null === (a = r.value) || void 0 === a ? void 0 : null === (t = a.data) || void 0 === t ? void 0 : t.name, l)) && void 0 !== f ? f : "",
                            href: null !== (b = null == e ? void 0 : null === (x = e.categories) || void 0 === x ? void 0 : null === (h = x[0]) || void 0 === h ? void 0 : null === (m = h.category) || void 0 === m ? void 0 : null === (c = m.value) || void 0 === c ? void 0 : null === (v = c.data) || void 0 === v ? void 0 : v.url) && void 0 !== b ? b : ""
                        },
                        title: null !== (j = (0, d.J)(null == e ? void 0 : e.title, l)) && void 0 !== j ? j : "",
                        description: (0, d.J)(null == e ? void 0 : e.description, l),
                        href: null == e ? void 0 : e.url,
                        date: (null == e ? void 0 : e.date) ? new Date(e.date) : new Date
                    }
                },
                o = e => {
                    var l, n, i, o, t, a, r, u, s, v, c, m, h, x, g, p, f;
                    let b = [];
                    if (null == e ? void 0 : null === (t = e.categories) || void 0 === t ? void 0 : null === (o = t[0]) || void 0 === o ? void 0 : null === (i = o.category) || void 0 === i ? void 0 : null === (n = i.value) || void 0 === n ? void 0 : null === (l = n.data) || void 0 === l ? void 0 : l.name) {
                        let l = (0, d.J)(null == e ? void 0 : null === (c = e.categories) || void 0 === c ? void 0 : null === (v = c[0]) || void 0 === v ? void 0 : null === (s = v.category) || void 0 === s ? void 0 : null === (u = s.value) || void 0 === u ? void 0 : null === (r = u.data) || void 0 === r ? void 0 : r.name);
                        b.push({
                            tag: l
                        })
                    }
                    return {
                        imageAsset: null !== (m = null == e ? void 0 : null === (a = e.headerImage) || void 0 === a ? void 0 : a.url) && void 0 !== m ? m : "",
                        tags: b,
                        cardTitle: null !== (h = (0, d.J)(null == e ? void 0 : e.title)) && void 0 !== h ? h : "",
                        description: null !== (x = (0, d.J)(null == e ? void 0 : e.description)) && void 0 !== x ? x : "",
                        cta: {
                            cardUrl: null !== (g = null == e ? void 0 : e.url) && void 0 !== g ? g : "#",
                            cardLabel: null !== (p = (0, d.J)(null == e ? void 0 : e.title)) && void 0 !== p ? p : "",
                            target: "_self"
                        },
                        href: null !== (f = null == e ? void 0 : e.url) && void 0 !== f ? f : "#"
                    }
                },
                t = (e, l) => {
                    var n, i, o, t, a, r, u, s, v, c, m, h, x, g, p, f, b;
                    let j = [];
                    if (null == e ? void 0 : null === (a = e.categories) || void 0 === a ? void 0 : null === (t = a[0]) || void 0 === t ? void 0 : null === (o = t.category) || void 0 === o ? void 0 : null === (i = o.value) || void 0 === i ? void 0 : null === (n = i.data) || void 0 === n ? void 0 : n.name) {
                        let l = (0, d.J)(null == e ? void 0 : null === (m = e.categories) || void 0 === m ? void 0 : null === (c = m[0]) || void 0 === c ? void 0 : null === (v = c.category) || void 0 === v ? void 0 : null === (s = v.value) || void 0 === s ? void 0 : null === (u = s.data) || void 0 === u ? void 0 : u.name);
                        j.push(l)
                    } else l && (null == e ? void 0 : e.categories) && (j = null == e ? void 0 : null === (h = e.categories) || void 0 === h ? void 0 : h.map(e => {
                        var n;
                        return (0, d.J)(null === (n = l.find(l => {
                            var n;
                            return l.id === (null === (n = e.category) || void 0 === n ? void 0 : n.id)
                        })) || void 0 === n ? void 0 : n.name) || ""
                    }));
                    return {
                        imageUrl: null !== (x = null == e ? void 0 : null === (r = e.headerImage) || void 0 === r ? void 0 : r.url) && void 0 !== x ? x : "",
                        categories: j,
                        title: null !== (g = (0, d.J)(null == e ? void 0 : e.title)) && void 0 !== g ? g : "",
                        description: null !== (p = (0, d.J)(null == e ? void 0 : e.description)) && void 0 !== p ? p : "",
                        date: new Date(null !== (f = null == e ? void 0 : e.date) && void 0 !== f ? f : "").getTime(),
                        url: null !== (b = null == e ? void 0 : e.url) && void 0 !== b ? b : "#"
                    }
                },
                a = e => e.replace(/([A-Za-z])/gi, e => e[0].toLowerCase()).replace(/\'|&|"|\?/gi, "").replace(/\s+/gi, "-")
        }
    }
]);
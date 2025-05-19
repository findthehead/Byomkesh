"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [17306], {
        17306: function(l, e, d) {
            d.r(e), d.d(e, {
                default: function() {
                    return b
                }
            });
            var i = d(52322),
                n = d(12524),
                o = d.n(n),
                t = d(2784),
                r = d(26436);
            let a = (0, t.createContext)({}),
                u = () => (0, t.useContext)(a),
                v = (0, t.createContext)({}),
                c = () => (0, t.useContext)(v),
                s = l => {
                    let {
                        children: e,
                        ...d
                    } = l;
                    return (0, i.jsx)(v.Provider, {
                        value: d,
                        children: e
                    })
                };
            var m = d(15673);
            let g = l => {
                if (l) {
                    var e;
                    let d = Number(null === (e = l.split("")) || void 0 === e ? void 0 : e[1]);
                    return "h".concat(d + 1)
                }
                return l
            };
            var x = d(38265),
                p = d(86741),
                h = d(97235),
                f = d(8698);
            let y = {
                Base: l => {
                    let {
                        className: e,
                        children: d
                    } = l, {
                        theme: n
                    } = u();
                    return (0, i.jsx)(r.$s, {
                        type: "flex",
                        wrapperClassName: "!p-0",
                        className: o()("flex-col items-center !p-8 gap-y-8", "md:!px-4 md:!py-14 md:gap-y-14", {
                            [e]: null == e ? void 0 : e.length
                        }),
                        theme: n,
                        children: d
                    })
                },
                Card: l => {
                    let {
                        className: e,
                        children: d,
                        ...n
                    } = l, {
                        theme: t
                    } = u();
                    return (0, i.jsx)(s, {
                        ...n,
                        children: (0, i.jsx)("div", {
                            className: o()(t, "flex dark text-card-content gap-x-6", "md:flex-col md:bg-container-card md:rounded-2xl md:gap-y-2 md:p-4", {
                                [e]: null == e ? void 0 : e.length
                            }),
                            children: d
                        })
                    })
                },
                Grid: l => {
                    let {
                        className: e,
                        children: d
                    } = l, {
                        columns: n,
                        cardTitleDisplaySize: r
                    } = u(), a = (0, t.useRef)(null), {
                        animationClasses: v
                    } = (0, x.j)(a, "subtle-fade-in");
                    return (0, i.jsx)("div", {
                        ref: a,
                        className: o()("w-full md:px-6 lg:px-12 xl:px-24 md:text-center", v),
                        children: (0, i.jsx)("div", {
                            className: o()("grid", "gap-y-8", "md:gap-y-4 md:gap-x-4", {
                                [e]: null == e ? void 0 : e.length,
                                "grid-cols-1 md:grid-cols-3": "3" === n && "display" === r,
                                "grid-cols-1 md:grid-cols-[repeat(3,_25%)] md:justify-center": "3" === n && "body" === r,
                                "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": "4" === n
                            }),
                            children: d
                        })
                    })
                },
                Title: l => {
                    let {
                        className: e
                    } = l, {
                        title: d,
                        titleSemanticLevel: n
                    } = u(), r = (0, p.ZP)((0, f.Z)(null != d ? d : ""), h.Y), a = (0, t.useRef)(null), {
                        animationClasses: v
                    } = (0, x.j)(a, "slide-in-from-top");
                    return (0, i.jsx)(null != n ? n : "h2", {
                        ref: a,
                        className: o()("text-display-mobile-6 text-wrap sm:text-balance md:text-display-6 md:text-center text-card-content lg:max-w-[75%]", v, {
                            [e]: null == e ? void 0 : e.length
                        }),
                        children: r
                    })
                },
                CardIcon: l => {
                    let {
                        className: e
                    } = l, {
                        icon: d
                    } = c();
                    return (0, i.jsx)(m.default, {
                        iconName: d,
                        width: 24,
                        height: 24,
                        className: o()("md:p-2 md:pb-0", {
                            [e]: null == e ? void 0 : e.length
                        })
                    })
                },
                CardTitle: l => {
                    let {
                        className: e
                    } = l, {
                        titleSemanticLevel: d,
                        cardTitleDisplaySize: n
                    } = u(), {
                        cardTitle: t
                    } = c(), r = g(d);
                    return (0, i.jsx)(r, {
                        className: o()("!font-medium", {
                            "text-body-3 md:text-body-2": "body" === n,
                            "text-display-mobile-6 md:text-display-mobile-5": "display" === n,
                            [e]: null == e ? void 0 : e.length
                        }),
                        children: t
                    })
                },
                CardDescription: l => {
                    let {
                        className: e
                    } = l, {
                        cardTitleDisplaySize: d
                    } = u(), {
                        cardDescription: n
                    } = c();
                    return (0, i.jsx)("span", {
                        className: o()("text-body-3 text-card-chroma-content md:text-center md:text-balance", {
                            "md:text-body-2": "display" === d,
                            [e]: null == e ? void 0 : e.length
                        }),
                        children: n
                    })
                },
                Provider: l => {
                    let {
                        children: e,
                        ...d
                    } = l;
                    return (0, i.jsx)(a.Provider, {
                        value: d,
                        children: e
                    })
                }
            };
            var j = d(94777),
                b = l => {
                    var e, d;
                    let {
                        ...n
                    } = l;
                    return (0, i.jsx)(y.Provider, {
                        ...n,
                        children: (0, i.jsxs)(y.Base, {
                            children: [(null == n ? void 0 : n.title) && (0, i.jsx)(y.Title, {}), (null == n ? void 0 : null === (e = n.cards) || void 0 === e ? void 0 : e.length) ? (0, i.jsx)(y.Grid, {
                                children: null == n ? void 0 : null === (d = n.cards) || void 0 === d ? void 0 : d.map((l, e) => {
                                    var d;
                                    return (0, i.jsxs)(y.Card, {
                                        ...l,
                                        children: [(null == l ? void 0 : l.icon) && (0, i.jsx)("div", {
                                            className: "flex items-start justify-center min-w-6",
                                            children: (0, i.jsx)(y.CardIcon, {})
                                        }), (0, i.jsxs)("div", {
                                            className: "flex flex-col gap-y-2 md:items-center",
                                            children: [(null == l ? void 0 : l.cardTitle) && (0, i.jsx)(y.CardTitle, {}), (null == l ? void 0 : l.cardDescription) && (0, i.jsx)(y.CardDescription, {})]
                                        })]
                                    }, "mini-cards-".concat((0, j.mA)(null !== (d = null == n ? void 0 : n.title) && void 0 !== d ? d : ""), "-").concat(e))
                                })
                            }) : null]
                        })
                    })
                }
        },
        94777: function(l, e, d) {
            d.d(e, {
                JH: function() {
                    return n
                },
                XS: function() {
                    return t
                },
                _b: function() {
                    return o
                },
                mA: function() {
                    return r
                }
            });
            var i = d(76811);
            let n = (l, e) => {
                    var d, n, o, t, r, a, u, v, c, s, m, g, x, p, h, f, y, j;
                    return {
                        image: {
                            bynderImage: null == l ? void 0 : null === (d = l.headerImage) || void 0 === d ? void 0 : d.bynderImage,
                            src: null !== (p = null == l ? void 0 : null === (n = l.headerImage) || void 0 === n ? void 0 : n.url) && void 0 !== p ? p : "",
                            alt: null !== (h = (0, i.J)(null == l ? void 0 : null === (o = l.headerImage) || void 0 === o ? void 0 : o.alt, e)) && void 0 !== h ? h : ""
                        },
                        tag: {
                            label: null !== (f = (0, i.J)(null == l ? void 0 : null === (v = l.categories) || void 0 === v ? void 0 : null === (u = v[0]) || void 0 === u ? void 0 : null === (a = u.category) || void 0 === a ? void 0 : null === (r = a.value) || void 0 === r ? void 0 : null === (t = r.data) || void 0 === t ? void 0 : t.name, e)) && void 0 !== f ? f : "",
                            href: null !== (y = null == l ? void 0 : null === (x = l.categories) || void 0 === x ? void 0 : null === (g = x[0]) || void 0 === g ? void 0 : null === (m = g.category) || void 0 === m ? void 0 : null === (s = m.value) || void 0 === s ? void 0 : null === (c = s.data) || void 0 === c ? void 0 : c.url) && void 0 !== y ? y : ""
                        },
                        title: null !== (j = (0, i.J)(null == l ? void 0 : l.title, e)) && void 0 !== j ? j : "",
                        description: (0, i.J)(null == l ? void 0 : l.description, e),
                        href: null == l ? void 0 : l.url,
                        date: (null == l ? void 0 : l.date) ? new Date(l.date) : new Date
                    }
                },
                o = l => {
                    var e, d, n, o, t, r, a, u, v, c, s, m, g, x, p, h, f;
                    let y = [];
                    if (null == l ? void 0 : null === (t = l.categories) || void 0 === t ? void 0 : null === (o = t[0]) || void 0 === o ? void 0 : null === (n = o.category) || void 0 === n ? void 0 : null === (d = n.value) || void 0 === d ? void 0 : null === (e = d.data) || void 0 === e ? void 0 : e.name) {
                        let e = (0, i.J)(null == l ? void 0 : null === (s = l.categories) || void 0 === s ? void 0 : null === (c = s[0]) || void 0 === c ? void 0 : null === (v = c.category) || void 0 === v ? void 0 : null === (u = v.value) || void 0 === u ? void 0 : null === (a = u.data) || void 0 === a ? void 0 : a.name);
                        y.push({
                            tag: e
                        })
                    }
                    return {
                        imageAsset: null !== (m = null == l ? void 0 : null === (r = l.headerImage) || void 0 === r ? void 0 : r.url) && void 0 !== m ? m : "",
                        tags: y,
                        cardTitle: null !== (g = (0, i.J)(null == l ? void 0 : l.title)) && void 0 !== g ? g : "",
                        description: null !== (x = (0, i.J)(null == l ? void 0 : l.description)) && void 0 !== x ? x : "",
                        cta: {
                            cardUrl: null !== (p = null == l ? void 0 : l.url) && void 0 !== p ? p : "#",
                            cardLabel: null !== (h = (0, i.J)(null == l ? void 0 : l.title)) && void 0 !== h ? h : "",
                            target: "_self"
                        },
                        href: null !== (f = null == l ? void 0 : l.url) && void 0 !== f ? f : "#"
                    }
                },
                t = (l, e) => {
                    var d, n, o, t, r, a, u, v, c, s, m, g, x, p, h, f, y;
                    let j = [];
                    if (null == l ? void 0 : null === (r = l.categories) || void 0 === r ? void 0 : null === (t = r[0]) || void 0 === t ? void 0 : null === (o = t.category) || void 0 === o ? void 0 : null === (n = o.value) || void 0 === n ? void 0 : null === (d = n.data) || void 0 === d ? void 0 : d.name) {
                        let e = (0, i.J)(null == l ? void 0 : null === (m = l.categories) || void 0 === m ? void 0 : null === (s = m[0]) || void 0 === s ? void 0 : null === (c = s.category) || void 0 === c ? void 0 : null === (v = c.value) || void 0 === v ? void 0 : null === (u = v.data) || void 0 === u ? void 0 : u.name);
                        j.push(e)
                    } else e && (null == l ? void 0 : l.categories) && (j = null == l ? void 0 : null === (g = l.categories) || void 0 === g ? void 0 : g.map(l => {
                        var d;
                        return (0, i.J)(null === (d = e.find(e => {
                            var d;
                            return e.id === (null === (d = l.category) || void 0 === d ? void 0 : d.id)
                        })) || void 0 === d ? void 0 : d.name) || ""
                    }));
                    return {
                        imageUrl: null !== (x = null == l ? void 0 : null === (a = l.headerImage) || void 0 === a ? void 0 : a.url) && void 0 !== x ? x : "",
                        categories: j,
                        title: null !== (p = (0, i.J)(null == l ? void 0 : l.title)) && void 0 !== p ? p : "",
                        description: null !== (h = (0, i.J)(null == l ? void 0 : l.description)) && void 0 !== h ? h : "",
                        date: new Date(null !== (f = null == l ? void 0 : l.date) && void 0 !== f ? f : "").getTime(),
                        url: null !== (y = null == l ? void 0 : l.url) && void 0 !== y ? y : "#"
                    }
                },
                r = l => l.replace(/([A-Za-z])/gi, l => l[0].toLowerCase()).replace(/\'|&|"|\?/gi, "").replace(/\s+/gi, "-")
        }
    }
]);
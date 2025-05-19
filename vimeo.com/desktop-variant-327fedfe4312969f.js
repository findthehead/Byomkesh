(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [18886], {
        42821: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/lohp/desktop-variant", function() {
                return a(38698)
            }])
        },
        70866: function(e, t, a) {
            "use strict";
            a.d(t, {
                A: function() {
                    return i
                }
            });
            var o = a(75388);
            let r = e => {
                    let {
                        strings: t
                    } = e;
                    return {
                        title: t("Vimeo AI-Powered Video Platform"),
                        description: t("The video platform trusted by 287 million creatives, entrepreneurs, and businesses. Everything you need to create, manage, and share stunning videos."),
                        schema: o.N
                    }
                },
                i = e => {
                    let {
                        strings: t
                    } = e;
                    return {
                        metaProps: r({
                            strings: t
                        })
                    }
                }
        },
        92900: function(e, t, a) {
            "use strict";
            a.d(t, {
                $: function() {
                    return o
                }
            }), Object.freeze({
                page: "page",
                "blog-posts": "blog-posts",
                "blog-categories": "blog-categories",
                "blog-tags": "blog-tags",
                "blog-authors": "blog-authors",
                "blog-upsells": "blog-upsells",
                "blog-page": "blog-page",
                "integration-partner-page": "integration-partner-page",
                "integrations-page": "integrations-page",
                "g-2-customer-review": "g-2-customer-review",
                "g-2-customer-review-set": "g-2-customer-review-set",
                "lohp-featured-in-cards": "lohp-featured-in-cards",
                "lohp-featured-in-card-set": "lohp-featured-in-card-set",
                accordion: "accordion",
                "accordion-item": "accordion-item",
                video: "video",
                card: "card",
                "card-set": "card-set",
                "card-with-video-authors-set": "card-with-video-authors-set",
                hero: "hero",
                logos: "logos",
                feature: "feature",
                "pricing-card": "pricing-card",
                "pricing-card-feature": "pricing-card-feature"
            });
            let o = Object.freeze(Object.fromEntries(Object.entries({
                "accordion-ai-next-level": "9c3e2300d913447a8224f3da9dfc39a7",
                "hero-all-in-one": "249e11a3769f45aaa6f2f26e59139aee",
                "hero-all-in-one-variant-2": "36cd025cbcd24670a74c141877baa2a8",
                "card-set-platform": "cb4146f6880941d8b2e9798e43b8034f",
                "lohp-staff-picks": "f67ddd4fd79c43f08b5e5850215bee0f",
                "card-set-enterprise": "21506b8087b84c2c967242dcac234179",
                "card-set-solutions": "e746456d6acf498199b39a76d5872502",
                "logos-trusted-by": "e02fb5c8e06b48b48a20a56b76c8648a",
                "logos-featured-in": "a2aa6eacc7cf4b48a72556c6e50e2f5e",
                "feature-emea-staff-pick": "58b295bbc5914eb395769318029802b1",
                "featured-in-card-set-discover-latest": "adfc4e243439455babc4dc05cffc8d03",
                "what-customers-are-saying": "3ae7809c6cf2410dae5ae094d1b5623a"
            }).map(e => {
                let [t, a] = e;
                return [t, a]
            })))
        },
        38698: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSG: function() {
                    return g
                }
            });
            var o = a(52322),
                r = a(2784),
                i = a(17600),
                s = a(81546),
                n = a(70866),
                c = a(92900),
                d = a(37795),
                l = a(6033),
                m = a(52805),
                u = a(90291),
                p = a(88789),
                g = !0;
            t.default = e => {
                let {
                    g2CustomerReviewSet: t,
                    accordionAiNextLevel: a,
                    cardSets: g,
                    staffPicks: f,
                    heroes: h,
                    logos: b,
                    features: w,
                    featuredInCardSet: v
                } = e, x = "white", {
                    strings: y
                } = (0, d.y)(), {
                    isRestrictedRegion: _
                } = (0, p.O)(), {
                    metaProps: j
                } = (0, r.useMemo)(() => (0, n.A)({
                    strings: y
                }), [y]), k = (0, s.yM)(g), V = k[c.$["card-set-platform"]], N = k[c.$["card-set-enterprise"]], C = k[c.$["card-set-solutions"]], I = (0, i.zz)(h)[c.$["hero-all-in-one"]], A = (0, s._y)(b)[c.$["logos-trusted-by"]], E = (0, s.HD)(w)[c.$["feature-emea-staff-pick"]], O = (0, s.IX)(v)[c.$["featured-in-card-set-discover-latest"]];
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(u.Z, {
                        ...j
                    }), (0, o.jsxs)("div", {
                        className: "".concat(x, " bg-container-background text-generic-card-content"),
                        children: [(0, o.jsx)(m.default, {
                            theme: x
                        }), (0, o.jsx)(i.Ss, {
                            ...I
                        }), (0, o.jsx)(s.Z2, {
                            ...A
                        }), (0, o.jsx)(s.Q1, {
                            ...V
                        }), (0, o.jsx)(s.TJ, {
                            ...C
                        }), (0, o.jsx)(s.Yw, {
                            ...(0, s.Cs)(null == t ? void 0 : t[0])
                        }), (0, o.jsx)(i.V, {
                            ...(0, i.fV)(a[0])
                        }), (0, o.jsx)(s.cT, {
                            ...N
                        }), (0, o.jsx)(s.IU, {
                            theme: "color",
                            animation: "slide-in-from-bottom"
                        }), _ ? (0, o.jsx)(s.Cg, {
                            ...E
                        }) : (0, o.jsx)(s.gY, {
                            ...(0, s.En)(f[0])
                        }), (0, o.jsx)(s.IU, {
                            theme: "greyscale"
                        }), (0, o.jsx)(s.gK, {
                            ...O
                        })]
                    }), (0, o.jsx)(l.Z, {
                        theme: x
                    })]
                })
            }
        },
        75388: function(e, t, a) {
            "use strict";
            a.d(t, {
                N: function() {
                    return o
                }
            });
            let o = {
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
    },
    function(e) {
        e.O(0, [73661, 37512, 19765, 15673, 29571, 70971, 85705, 3567, 49574, 25580, 17306, 17600, 49774, 92888, 40179], function() {
            return e(e.s = 42821)
        }), _N_E = e.O()
    }
]);
self.__BUILD_MANIFEST = function(a, s, e, t, c, n, p, i, h, o, k, d, u, g, l, f, b, r, j, _, v, I, B, F, m, x) {
    return {
        __rewrites: {
            afterFiles: [{
                has: c,
                source: "/",
                destination: u
            }, {
                has: c,
                source: "/:lang((?:en|fr|de|es|jp|ko|pt-br))(/?)",
                destination: "/:lang/lohp/desktop"
            }, {
                has: c,
                source: "/:path/:filename((?!.+.xml(?:.gz)?).*)",
                destination: "/:path/:filename"
            }, {
                has: c,
                source: "/marketing-static/_next/:path*",
                destination: "/_next/:path*"
            }],
            beforeFiles: [],
            fallback: []
        },
        "/_error": ["static/chunks/pages/_error-8e6550dcb01f0ad6.js"],
        "/lohp/desktop": [a, n, s, p, e, t, i, h, o, k, d, "static/chunks/pages/lohp/desktop-0f878a2cb5b8076e.js"],
        "/lohp/desktop-variant": [a, s, g, l, f, b, e, r, j, _, v, I, "static/chunks/pages/lohp/desktop-variant-327fedfe4312969f.js"],
        "/lohp/desktop-variant-2": [a, s, g, l, f, b, e, r, j, _, v, I, "static/chunks/pages/lohp/desktop-variant-2-3c588331de053fbc.js"],
        "/lohp-enterprise": [B, F, "static/chunks/pages/lohp-enterprise-0814ed2f1b5826f7.js"],
        "/[language]/lohp/desktop": [a, n, s, p, e, t, i, h, o, k, d, "static/chunks/pages/[language]/lohp/desktop-0789ea74a95bba0a.js"],
        "/[language]/lohp/desktop-variant": [a, n, s, p, e, t, i, h, o, k, d, "static/chunks/pages/[language]/lohp/desktop-variant-fbff82ffcde1920b.js"],
        "/[language]/lohp/desktop-variant-2": [a, n, s, p, e, t, i, h, o, k, d, "static/chunks/pages/[language]/lohp/desktop-variant-2-463d83c2bc5b8140.js"],
        "/[language]/lohp-enterprise": [B, F, "static/chunks/pages/[language]/lohp-enterprise-a96656700ba355cf.js"],
        "/[language]/[[...page]]": [a, s, m, e, t, x, "static/chunks/pages/[language]/[[...page]]-14d5c3e27879cd52.js"],
        "/[[...page]]": [a, s, m, e, t, x, "static/chunks/pages/[[...page]]-adfbbffb5c02aba0.js"],
        sortedPages: ["/_app", "/_error", u, "/lohp/desktop-variant", "/lohp/desktop-variant-2", "/lohp-enterprise", "/[language]/lohp/desktop", "/[language]/lohp/desktop-variant", "/[language]/lohp/desktop-variant-2", "/[language]/lohp-enterprise", "/[language]/[[...page]]", "/[[...page]]"]
    }
}("static/chunks/a29ae703-78c9b6c26dec28ce.js", "static/chunks/37512-fd861c4a1efd8a31.js", "static/chunks/85705-99c52ab1117bb548.js", "static/chunks/37285-f671461d269b3c77.js", void 0, "static/chunks/47426-f0719bfedb3005ec.js", "static/chunks/69020-b169c251c1be6628.js", "static/chunks/30097-e6cf49b9959fb6be.js", "static/chunks/52727-5eb78a5f5ab8572a.js", "static/chunks/55106-dc67c672e7781184.js", "static/chunks/37228-5baf812401beead2.js", "static/chunks/85580-5a4bb3b7fab2e557.js", "/lohp/desktop", "static/chunks/19765-04330db95d52139f.js", "static/chunks/15673-3ce94661c7f28963.js", "static/chunks/29571-97ab7152fd312667.js", "static/chunks/70971-a8343636aa63196d.js", "static/chunks/3567-d2f40e78dfdb7ba9.js", "static/chunks/49574-f3894ec9418434d3.js", "static/chunks/25580-c144a7150cb616a4.js", "static/chunks/17306-97cfad21a91cb608.js", "static/chunks/17600-078c28d007fcb03e.js", "static/chunks/78867-54f161f70734a601.js", "static/chunks/1541-dc897d8556104b4e.js", "static/chunks/80281-f53f567f3732fb77.js", "static/chunks/13963-6a78a25c864d321c.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
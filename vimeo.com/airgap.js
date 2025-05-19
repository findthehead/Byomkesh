// Copyright 2025 Transcend Inc. All Rights Reserved.
// Learn more at https://transcend.io/consent-management

self.transcend = Object.assign({
    "country": "IN",
    "countryRegion": "WB"
}, self.transcend);
self.transcend = Object.assign({
    readyQueue: [],
    ready(c) {
        this.readyQueue.push(c)
    },
    showConsentManager() {
        this.ready((t) => {
            t.showConsentManager()
        })
    }
}, self.transcend);
self.airgap = Object.assign({
    readyQueue: [],
    ready(c) {
        this.readyQueue.push(c)
    },
    purposes: {
        "useDefault": false,
        "types": {
            "AlwaysBlock": {
                "name": "AlwaysBlock",
                "description": "Always Block this dataflow",
                "defaultConsent": "Auto",
                "showInConsentManager": false,
                "configurable": true,
                "essential": false,
                "trackingType": "AlwaysBlock",
                "optOutSignals": []
            },
            "SaleOfInfo": {
                "name": "SaleOfInfo",
                "description": "Sale of personal information.",
                "defaultConsent": "Auto",
                "showInConsentManager": true,
                "configurable": true,
                "essential": false,
                "trackingType": "SaleOfInfo",
                "optOutSignals": ["DNT", "GPC"]
            },
            "Advertising": {
                "name": "Advertising",
                "description": "Helps us and others serve ads relevant to you.",
                "defaultConsent": "Auto",
                "showInConsentManager": true,
                "configurable": true,
                "essential": false,
                "trackingType": "Advertising",
                "optOutSignals": ["DNT"]
            },
            "Functional": {
                "name": "Functional",
                "description": "Personalization, autofilled forms, etc.",
                "defaultConsent": "Auto",
                "showInConsentManager": true,
                "configurable": true,
                "essential": false,
                "trackingType": "Functional",
                "optOutSignals": ["DNT"]
            },
            "Analytics": {
                "name": "Analytics",
                "description": "Help us learn how our site is used and how it performs.",
                "defaultConsent": "Auto",
                "showInConsentManager": true,
                "configurable": true,
                "essential": false,
                "trackingType": "Analytics",
                "optOutSignals": ["DNT"]
            }
        }
    },
    regimePurposeScopes: [
        [
            ["GDPR"],
            ["Advertising", "AlwaysBlock", "Analytics", "Functional"]
        ],
        [
            ["CPRA"],
            ["SaleOfInfo"]
        ],
        [
            ["simulate-opt-out-all"],
            ["Advertising", "AlwaysBlock", "Analytics", "Functional", "SaleOfInfo"]
        ],
        [
            ["Unknown"],
            ["SaleOfInfo"]
        ]
    ],
    macroregions: [
        ["EU", "BE GR LT PT BG ES LU RO CZ FR RE GP MQ GF YT BL MF PM WF PF NC HU SI DK FO GL HR MT SK DE IT NL AW CW SX FI AX EE CY AT SE IE LV PL AI BM IO VG KY FK GI MS PN SH TC GG JE IM"]
    ],
    regionRegimesMap: [
        [
            [
                ["EU"],
                ["GB"],
                ["JP"],
                ["NO"],
                ["IS"],
                ["LI"]
            ],
            ["GDPR"], "in", [],
            [], null, null, {
                "consentExpiry": "518400",
                "onConsentExpiry": "Prompt"
            }
        ],
        [
            [
                ["US"]
            ],
            ["CPRA"], "in", [],
            [], null, null, {}
        ]
    ],
    regimePurposeOptOuts: [
        [
            ["GDPR"],
            ["Advertising", "AlwaysBlock", "Analytics", "Functional"]
        ],
        [
            ["simulate-opt-out-all"],
            ["Advertising", "AlwaysBlock", "Analytics", "Functional", "SaleOfInfo"]
        ]
    ],
    regulatedPaths: [{
        "matcher": "[a-z]{2}-[a-f0-9]{17}.getsmartling.com",
        "purposes": ["Analytics"],
        "regex": true
    }, {
        "matcher": "//analytics.tiktok.com/api/",
        "purposes": ["Advertising", "Analytics", "SaleOfInfo"],
        "regex": false
    }, {
        "matcher": "//analytics.tiktok.com/i18n/",
        "purposes": ["Advertising"],
        "regex": false
    }, {
        "matcher": "//bat.bing.com/bat.js",
        "purposes": ["Advertising"],
        "regex": false
    }, {
        "matcher": "//connect.facebook.net/en_US/fbevents.js",
        "purposes": ["Advertising", "AlwaysBlock"],
        "regex": false
    }, {
        "matcher": "//connect.facebook.net/en_US/sdk.js",
        "purposes": ["Advertising", "AlwaysBlock"],
        "regex": false
    }, {
        "matcher": "//connect.facebook.net/signals/config/",
        "purposes": ["Advertising", "AlwaysBlock"],
        "regex": false
    }, {
        "matcher": "//connect.facebook.net/signals/plugins/identity.js",
        "purposes": ["Essential"],
        "regex": false
    }, {
        "matcher": "//www.google-analytics.com/collect",
        "purposes": ["Essential"],
        "regex": false
    }, {
        "matcher": "//www.googleoptimize.com/optimize.js",
        "purposes": ["Essential"],
        "regex": false
    }, {
        "matcher": "//www.googletagmanager.com/gtag/js",
        "purposes": ["Advertising", "Analytics"],
        "regex": false
    }, {
        "matcher": "//www.googletagmanager.com/gtm.js",
        "purposes": ["Advertising", "Analytics"],
        "regex": false
    }],
    purposeMap: {
        "stands-app": ["Advertising"],
        "-.-": ["AlwaysBlock", "Analytics"],
        "bing.com": ["Advertising", "SaleOfInfo"],
        "brounelink.com": ["Advertising", "Analytics"],
        "cloudcnfare.com": ["Advertising"],
        "facebook.net": ["Advertising", "SaleOfInfo"],
        "googleadservices.com": ["Advertising", "Analytics"],
        "google-analytics.com": ["Analytics"],
        "mpsuadv.ru": ["Advertising"],
        "neilpatel.com": ["Advertising", "Analytics"],
        "prilgolink.com": ["Advertising", "Analytics"],
        "short-link.space": ["Advertising"],
        "siftscience.com": ["Functional"],
        "vk.com": ["Advertising"],
        "newrelic.com": ["Essential"],
        "linkedin.com": ["Advertising", "Analytics", "SaleOfInfo"],
        "microsoft.com": ["Advertising", "SaleOfInfo"],
        "moredeal.org": ["Advertising"],
        "veronline.me": ["Advertising"],
        "vocas.nl": ["Advertising"],
        "vastroll.ru": ["Advertising", "Analytics"],
        "hublosk.com": ["Advertising"],
        "sc-static.net": ["Essential"],
        "clarity.ms": ["Analytics"],
        "mnsearch.com": ["Advertising"],
        "ext-affiliate.com": ["Advertising"],
        "twitter.com": ["Advertising", "SaleOfInfo"],
        "jullyambery.net": ["Advertising"],
        "redmarket.online": ["Advertising", "Functional"],
        "mkmediaworks.com": ["Advertising"],
        "conoret.com": ["Advertising"],
        "milkpload.net": ["Advertising", "Analytics"],
        "surfe.pro": ["Advertising"],
        "googletagmanager.com": ["Advertising", "Analytics"],
        "doubleclick.net": ["Advertising"],
        "kellyfight.com": ["Advertising"],
        "pdst.fm": ["Advertising"],
        "tiktok.com": ["Advertising", "Analytics", "SaleOfInfo"],
        "triplestat.online": ["Advertising", "Functional"],
        "simonsignal.com": ["Advertising", "Analytics"],
        "ttwstatic.com": ["Essential"],
        "cookielaw.org": ["Essential"],
        "googletagservices.com": ["Advertising"],
        "ads.betweendigital.com": ["Advertising", "Functional"],
        "ads.linkedin.com": ["Advertising", "SaleOfInfo"],
        "ads.panoramtech.net": ["Advertising"],
        "analytics.tiktok.com": ["Advertising", "Analytics", "SaleOfInfo"],
        "cdn.otm-r.com": ["Advertising"],
        "data1.lovintest.com": ["Advertising", "Analytics"],
        "data1.quotient-retraite.fr": ["Advertising"],
        "r.bing.com": ["Essential"],
        "r.skimresources.com": ["Advertising", "Analytics", "SaleOfInfo"],
        "s7.mpsuadv.ru": ["Advertising"],
        "s8.mpsuadv.ru": ["Advertising"],
        "ssp.bidvol.com": ["Advertising"],
        "static.dofollowup.com": ["Advertising"],
        "s.ytimg.com": ["Advertising"],
        "v1.mpsuadv.ru": ["Advertising"],
        "v3.mpsuadv.ru": ["Advertising"],
        "v7.mpsuadv.ru": ["Advertising"],
        "www.acint.net": ["Advertising", "Analytics"],
        "www.shopciable.com": ["Advertising"],
        "www.streak.com": ["Advertising"],
        "v2.mpsuadv.ru": ["Advertising"],
        "xml.mpsuadv.ru": ["Advertising"],
        "c.bing.com": ["Analytics"],
        "gc2-api.mkmediaworks.com": ["Advertising"],
        "hello.myfonts.net": ["Advertising", "Functional"],
        "product-images.ibotta.com": ["Advertising", "Analytics"],
        "px.adhigh.net": ["Advertising"],
        "s2.mpsuadv.ru": ["Advertising"],
        "sl-sentry.skimlinks.com": ["Advertising", "SaleOfInfo"],
        "s.uuidksinc.net": ["Advertising"],
        "www.googleoptimize.com": ["Advertising", "Analytics"],
        "ads.adfox.ru": ["Advertising", "Analytics"],
        "ads.adlook.me": ["Advertising"],
        "mozbar.moz.com": ["Advertising"],
        "st.search-st1.com": ["Advertising", "SaleOfInfo"],
        "t.skimresources.com": ["Advertising", "Analytics", "SaleOfInfo"],
        "members.cj.com": ["Advertising", "SaleOfInfo"],
        "www.freetrackerforpackages.com": ["Advertising", "Analytics"],
        "wa.onelink.me": ["Advertising", "Analytics"],
        "websdk.appsflyer.com": ["Advertising"],
        "alb.reddit.com": ["Advertising", "Analytics", "SaleOfInfo"],
        "www.google.bg": ["Advertising", "Analytics"],
        "analytics.google.com": ["Advertising", "Analytics"],
        "www.google.ca": ["Advertising", "Analytics"],
        "www.google.no": ["Advertising", "Analytics"],
        "www.googleadservices.com": ["Advertising", "SaleOfInfo"],
        "pagead2.googlesyndication.com": ["Advertising"],
        "www.google.mu": ["Advertising", "Analytics"],
        "www.google.md": ["Advertising", "Analytics"],
        "www.google.de": ["Advertising", "Analytics"],
        "www.google.hu": ["Advertising", "Analytics"],
        "www.google.dz": ["Advertising", "Analytics"],
        "wa.appsflyer.com": ["Advertising"],
        "ct.pinterest.com": ["Advertising", "Analytics", "SaleOfInfo"],
        "cdn.pdst.fm": ["Advertising"],
        "ip.x2convert.com": ["Advertising", "Analytics"],
        "www.google.ge": ["Advertising", "Analytics"],
        "www.comsimo.com": ["Advertising", "Analytics"],
        "www.bestconverteronline.com": ["Advertising", "Analytics"],
        "app.conductor.com": ["Advertising"],
        "www.google.ro": ["Advertising", "Analytics"],
        "www.google.gr": ["Advertising", "Analytics"],
        "www.google.it": ["Advertising", "Analytics"],
        "bam-cell.nr-data.net": ["Analytics"],
        "www.googletagmanager.com": ["Analytics"],
        "fonts.gstatic.com": ["Essential"],
        "www.google.com": ["Advertising", "Analytics", "SaleOfInfo"],
        "www.google.es": ["Advertising", "Analytics"],
        "www.google.lt": ["Advertising", "Analytics"],
        "user-images.githubusercontent.com": ["Advertising", "Analytics"],
        "www.google.si": ["Advertising", "Analytics"],
        "bam.nr-data.net": ["Analytics"],
        "www.google.sn": ["Advertising"],
        "eu-cdn.walkme.com": ["Advertising", "Functional"],
        "www.google.by": ["Advertising", "Analytics"],
        "i.vimeocdn.com": ["Essential"],
        "snap.licdn.com": ["Essential"],
        "www.gstatic.com": ["Essential"],
        "www.facebook.com": ["Advertising", "Analytics", "SaleOfInfo"],
        "hemsync.clickagy.com": ["Advertising"],
        "www.google.dk": ["Advertising", "Analytics"],
        "www.google.be": ["Advertising", "Analytics"],
        "tags.clickagy.com": ["Advertising", "Analytics"],
        "www.google.pl": ["Advertising", "Analytics"],
        "apis.google.com": ["Advertising", "Analytics"],
        "log.pinterest.com": ["Advertising", "Analytics", "SaleOfInfo"],
        "www.google.hn": ["Advertising", "Analytics"],
        "bat.bing.com": ["Advertising", "SaleOfInfo"],
        "fresnel-events.vimeocdn.com": ["Advertising", "Analytics"],
        "www.google.fr": ["Advertising", "Analytics"],
        "582-gou-684.mktoresp.com": ["Advertising", "Analytics"],
        "connect.facebook.net": ["Advertising", "Analytics", "SaleOfInfo"],
        "www.google.ee": ["Advertising", "Analytics"],
        "www.google.lk": ["Advertising", "Analytics"],
        "www.google.cl": ["Advertising", "Analytics"],
        "cdn.walkme.com": ["Advertising", "Functional"],
        "downloader.alltubeplayer.com": ["Advertising", "Analytics"],
        "ad.doubleclick.net": ["Advertising"],
        "3001.scriptcdn.net": ["Advertising", "Functional"],
        "www.google.am": ["Advertising", "Analytics"],
        "www.google.pt": ["Advertising", "Analytics"],
        "www.google.ae": ["Advertising", "Analytics"],
        "www.google.cz": ["Advertising", "Analytics"],
        "eu-ec.walkme.com": ["Advertising", "Functional"],
        "www.google.kz": ["Advertising", "Analytics"],
        "privacyportal-cdn.onetrust.com": ["Essential"],
        "www.google.sk": ["Advertising", "Analytics"],
        "www.google.rs": ["Advertising", "Analytics"],
        "www.google.lv": ["Advertising", "Analytics"],
        "www.google.iq": ["Advertising", "Analytics"],
        "mcs.snssdk.com": ["Advertising", "Analytics"],
        "aorta.clickagy.com": ["Advertising"],
        "analytics.twitter.com": ["Advertising", "SaleOfInfo"],
        "ddnk.advertur.ru": ["Advertising", "Functional"],
        "cdn0.iconfinder.com": ["Advertising", "Functional"],
        "api.mkmediaworks.com": ["Advertising"],
        "sf1-scmcdn-tos.pstatp.com": ["Advertising", "Analytics"],
        "www.tqlkg.com": ["Advertising"],
        "www.google.hr": ["Advertising", "Analytics"],
        "pagestates-tracking.crazyegg.com": ["Advertising"],
        "www.google.tn": ["Advertising", "Analytics"],
        "pips.taboola.com": ["Advertising", "SaleOfInfo"],
        "rs.fullstory.com": ["Analytics"],
        "www.freeonlinetools.app": ["Advertising", "Analytics"],
        "www.bestdrivingmaps.info": ["Advertising", "Analytics"],
        "www.google.cn": ["Advertising", "Analytics"],
        "cdn.taboola.com": ["Advertising", "SaleOfInfo"],
        "cdn.ivaws.com": ["Advertising", "Analytics"],
        "pro.ip-api.com": ["Advertising", "Analytics"],
        "sync.transcend.io": ["Essential"],
        "tr.snapchat.com": ["Advertising", "SaleOfInfo"],
        "a.opmnstr.com": ["Advertising", "Analytics"],
        "adservice.google.com": ["Advertising"],
        "gjtrack.ucweb.com": ["Advertising", "Analytics"],
        "translation.opera-api.com": ["Advertising"],
        "www.google.ch": ["Advertising", "Analytics"],
        "translate.brave.com": ["Advertising"],
        "negbar.ad-blocker.org": ["Advertising"],
        "player.vimeo.com": ["Essential"],
        "auth.linkish.io": ["Advertising"],
        "munchkin.marketo.net": ["Advertising", "Analytics"],
        "hp.mysearches.co": ["Advertising"],
        "www.google.mk": ["Advertising", "Analytics"],
        "at.alicdn.com": ["Advertising", "Analytics"],
        "l.sharethis.com": ["Advertising", "Analytics"],
        "s1.mpsuadv.ru": ["Advertising"],
        "s4.mpsuadv.ru": ["Advertising"],
        "s5.mpsuadv.ru": ["Advertising"],
        "s6.mpsuadv.ru": ["Advertising"],
        "utp.ucweb.com": ["Advertising", "Analytics"],
        "www.freebrowsertools.app": ["Advertising", "Analytics"],
        "www.freeconverter.me": ["Advertising", "Analytics"],
        "www.academia.edu": ["Advertising"],
        "www.google.ie": ["Advertising", "Analytics"],
        "cr-input.mxpnl.net": ["Advertising"],
        "edge.fullstory.com": ["Essential"],
        "f.vimeocdn.com": ["Essential"],
        "js-agent.newrelic.com": ["Essential"],
        "cdn.themesinfo.com": ["Advertising", "Analytics"],
        "ad.mail.ru": ["Advertising"],
        "p.skimresources.com": ["Advertising", "SaleOfInfo"],
        "s3.mpsuadv.ru": ["Advertising"],
        "sdx.microsoft.com": ["Advertising", "SaleOfInfo"],
        "static.cdninstagram.com": ["Advertising"],
        "translate.google.cn": ["Advertising", "Analytics"],
        "www.ftjcfx.com": ["Advertising"],
        "www.instagram.com": ["Advertising", "SaleOfInfo"],
        "trc-events.taboola.com": ["Advertising", "SaleOfInfo"],
        "tags.crwdcntrl.net": ["Advertising", "Analytics"],
        "cdn.transcend.io": ["Essential"],
        "www.google.at": ["Advertising", "Analytics"],
        "s3.scriptcdn.net": ["Advertising", "Functional"],
        "trc.taboola.com": ["Advertising", "SaleOfInfo"],
        "www.google.se": ["Advertising", "Analytics"],
        "www.google.fi": ["Advertising", "Analytics"],
        "bcp.crwdcntrl.net": ["Advertising", "Analytics"],
        "tracking.crazyegg.com": ["Advertising"],
        "fonts.googleapis.com": ["Essential"],
        "www.google.nl": ["Advertising", "Analytics"],
        "www.google.jo": ["Advertising", "Analytics"],
        "www.google-analytics.com": ["Analytics"],
        "www.bing.com": ["Advertising", "SaleOfInfo"],
        "assets.msn.com": ["Advertising", "SaleOfInfo"],
        "exchange.buzzoola.com": ["Advertising"],
        "www.awltovhc.com": ["Advertising"],
        "ec.walkme.com": ["Advertising", "Analytics", "Functional"],
        "www.google.ru": ["Advertising", "Analytics"],
        "fresnel.vimeocdn.com": ["Advertising", "Analytics"],
        "cds.taboola.com": ["Advertising", "SaleOfInfo"],
        "us-central1-adaptive-growth.cloudfunctions.net": ["Advertising"],
        "tpc.googlesyndication.com": ["Advertising"],
        "ws.zoominfo.com": ["Advertising"],
        "www.google.al": ["Advertising", "Analytics"],
        "secure.adnxs.com": ["Advertising", "SaleOfInfo"],
        "www.google.lu": ["Advertising", "Analytics"],
        "www.clarity.ms": ["Analytics", "Functional"],
        "media-exp1.licdn.com": ["Advertising"],
        "ad-eu-02.p.otm-r.com": ["Advertising"],
        "ad-eu-03.p.otm-r.com": ["Advertising"],
        "ad-eu-17.p.otm-r.com": ["Advertising"],
        "bid.g.doubleclick.net": ["Advertising"],
        "imp-bidder-eu-09.b.otm-r.com": ["Advertising"],
        "news.climate.columbia.edu": ["Advertising"],
        "pub-eu.p.otm-r.com": ["Advertising"],
        "sync.dmp.otm-r.com": ["Advertising"],
        "vast-bidder-eu-02.b.otm-r.com": ["Advertising"],
        "vast-bidder-eu-04.b.otm-r.com": ["Advertising"],
        "vast-bidder-eu-09.b.otm-r.com": ["Advertising"],
        "www.google.com.sv": ["Advertising", "Analytics"],
        "www.google.com.jm": ["Advertising", "Analytics"],
        "www.google.com.co": ["Advertising", "Analytics"],
        "www.google.co.ke": ["Advertising", "Analytics"],
        "www.google.co.jp": ["Advertising", "Analytics"],
        "www.google.com.tw": ["Advertising", "Analytics"],
        "www.google.co.nz": ["Advertising", "Analytics"],
        "www.google.co.cr": ["Advertising", "Analytics"],
        "www.google.com.bd": ["Advertising", "Analytics"],
        "www.google.co.in": ["Advertising", "Analytics"],
        "googleads.g.doubleclick.net": ["Advertising"],
        "www.google.com.et": ["Advertising", "Analytics"],
        "pubads.g.doubleclick.net": ["Advertising"],
        "www.google.co.mz": ["Advertising", "Analytics"],
        "elephant.browser.360.cn": ["Advertising"],
        "www.google.com.ua": ["Advertising", "Analytics"],
        "www.google.com.vn": ["Advertising", "Analytics"],
        "www.google.co.uk": ["Advertising", "Analytics"],
        "95.216.65.215": ["Advertising"],
        "www.google.com.kw": ["Advertising", "Analytics"],
        "www.google.com.do": ["Advertising", "Analytics"],
        "www.google.com.np": ["Advertising", "Analytics"],
        "www.google.com.gh": ["Advertising", "Analytics"],
        "px.ads.linkedin.com": ["Advertising", "SaleOfInfo"],
        "region1.analytics.google.com": ["Advertising", "Analytics"],
        "plugin.ucads.ucweb.com": ["Advertising", "Analytics"],
        "www.google.com.pr": ["Advertising", "Analytics"],
        "www.google.co.kr": ["Advertising", "Analytics"],
        "www.google.co.il": ["Advertising", "Analytics"],
        "www.google.com.pa": ["Advertising", "Analytics"],
        "www.google.co.ug": ["Advertising", "Analytics"],
        "95.216.12.176": ["Advertising"],
        "www.google.com.uy": ["Advertising", "Analytics"],
        "static.xx.fbcdn.net": ["Advertising", "SaleOfInfo"],
        "www.google.com.hk": ["Advertising", "Analytics"],
        "www.google.com.tr": ["Advertising", "Analytics"],
        "www.google.com.ph": ["Advertising", "Analytics"],
        "www.google.co.za": ["Advertising", "Analytics"],
        "www.google.co.id": ["Advertising", "Analytics"],
        "www.google.com.mx": ["Advertising", "Analytics"],
        "1986635568.rsc.cdn77.org": ["Advertising", "Essential"],
        "assets.meter.activemetering.com": ["Advertising"],
        "1023454260.rsc.cdn77.org": ["Advertising", "Essential"],
        "3797665.fls.doubleclick.net": ["Advertising"],
        "stats.g.doubleclick.net": ["Advertising", "SaleOfInfo"],
        "www.google.com.py": ["Advertising", "Analytics"],
        "1637314617.rsc.cdn77.org": ["Advertising", "Essential"],
        "www.google.co.ve": ["Advertising", "Analytics"],
        "www.google.com.ng": ["Advertising", "Analytics"],
        "app.monetizze.com.br": ["Advertising", "Analytics"],
        "h5api.m.taobao.com": ["Advertising", "Analytics"],
        "www.google.com.ec": ["Advertising", "Analytics"],
        "144.76.99.125": ["Advertising"],
        "customer.iad-03.braze.com": ["Advertising"],
        "www.google.com.my": ["Advertising", "Analytics"],
        "www.google.com.pk": ["Advertising", "Analytics"],
        "www.google.com.eg": ["Advertising", "Analytics"],
        "www.google.com.pe": ["Advertising", "Analytics"],
        "www.google.co.th": ["Advertising", "Analytics"],
        "translate.google.co.jp": ["Advertising", "Analytics"],
        "www.google.com.au": ["Advertising", "Analytics"],
        "www.google.com.ar": ["Advertising", "Analytics"],
        "www.google.co.ma": ["Advertising", "Analytics"],
        "www.google.com.sg": ["Advertising", "Analytics"],
        "www.google.com.sa": ["Advertising", "Analytics"],
        "www.google.com.cy": ["Advertising", "Analytics"],
        "appds8093.blob.core.windows.net": ["Essential"],
        "auctions.search.yahoo.co.jp": ["Advertising"],
        "news.search.yahoo.co.jp": ["Advertising"],
        "search.shopping.yahoo.co.jp": ["Advertising"]
    },
    csp: {
        "[a-z]{2}-[a-f0-9]{17}.getsmartling.com": ["Essential"],
        "wss://*.bing.com": ["Advertising", "SaleOfInfo"]
    },
    cookies: [{
        "cookie": "____Host-GAPS@accounts.google.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__-ENID@google.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__cf_bm",
        "purposes": ["Essential"]
    }, {
        "cookie": "__cf_bm@us01campaign.zoom.us",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__cf_bm@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__cf_bm@zoominfo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__cfruid@help.vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__cpcPopShown",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__cpcStatSampleNum",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__q_domainTest",
        "purposes": ["Analytics"]
    }, {
        "cookie": "__q_domainTest@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__q_state_8Q5gZzYPjZ1nTCQs",
        "purposes": ["Functional"]
    }, {
        "cookie": "__qca",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__rbtld__",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__ssid",
        "purposes": ["Functional"]
    }, {
        "cookie": "__T_",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__tld__",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__tld_test__",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__utma",
        "purposes": ["Analytics"]
    }, {
        "cookie": "__utmb",
        "purposes": ["Analytics"]
    }, {
        "cookie": "__utmc",
        "purposes": ["Analytics"]
    }, {
        "cookie": "__utmd",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__utmt",
        "purposes": ["Analytics"]
    }, {
        "cookie": "__utmz",
        "purposes": ["Analytics"]
    }, {
        "cookie": "__zlcid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "__zlcmid",
        "purposes": ["Functional"]
    }, {
        "cookie": "__zlcstore",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_abexps",
        "purposes": ["Functional"]
    }, {
        "cookie": "_abexps@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_bl_uid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_ce.s",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_cfuvid",
        "purposes": ["Essential"]
    }, {
        "cookie": "_cfuvid@help.vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_cfuvid@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_cfuvid@zoominfo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_clck",
        "purposes": ["Analytics"]
    }, {
        "cookie": "_clsk",
        "purposes": ["Analytics"]
    }, {
        "cookie": "_cs.e",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_dd_s",
        "purposes": ["Analytics"]
    }, {
        "cookie": "_dd_s@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_derived_epik",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_dlt",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_EDGE_S@bing.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_fbc",
        "purposes": ["Advertising"]
    }, {
        "cookie": "_fbp",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_gat",
        "purposes": ["Analytics"]
    }, {
        "cookie": "_gat_UA-76641-87",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_gd_session",
        "purposes": ["Advertising", "Analytics"]
    }, {
        "cookie": "_gd_visitor",
        "purposes": ["Advertising", "Analytics"]
    }, {
        "cookie": "_gid",
        "purposes": ["Analytics"]
    }, {
        "cookie": "_gid@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_lc2_fpi",
        "purposes": ["Advertising"]
    }, {
        "cookie": "_mkto_trk",
        "purposes": ["Advertising"]
    }, {
        "cookie": "_pin_unauth",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_rdt_uuid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_s@app.link",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_scid",
        "purposes": ["Advertising"]
    }, {
        "cookie": "_scid_r",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_sctr",
        "purposes": ["Advertising"]
    }, {
        "cookie": "_slvlcl",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_sp_id.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "_sp_ses.*",
        "purposes": ["AlwaysBlock", "Analytics"],
        "regex": true
    }, {
        "cookie": "_tt_enable_cookie",
        "purposes": ["Advertising"]
    }, {
        "cookie": "_ttp",
        "purposes": ["Advertising"]
    }, {
        "cookie": "_uetmsclkid",
        "purposes": ["Analytics"]
    }, {
        "cookie": "_uetsid",
        "purposes": ["Advertising"]
    }, {
        "cookie": "_uetsid@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_uetvid",
        "purposes": ["Advertising"]
    }, {
        "cookie": "_uetvid@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_ugeuid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_upscope__region",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_upscope__shortId",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_ym_metrika_enabled",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "_ym_visorc",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "[0-9]+_password",
        "purposes": ["Essential"],
        "regex": true
    }, {
        "cookie": "[0-9]+_rlepassword",
        "purposes": ["Functional"],
        "regex": true
    }, {
        "cookie": "^__adal_.*$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^__uin_.*$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^__uir_.*$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^_dc_gtm_",
        "purposes": ["Analytics"],
        "regex": true
    }, {
        "cookie": "^_dc_gtm_UA-.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^_ga_.+",
        "purposes": ["Analytics"],
        "regex": true
    }, {
        "cookie": "^_ga.*",
        "purposes": ["Analytics"],
        "regex": true
    }, {
        "cookie": "^_gac_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^_gac_.+",
        "purposes": ["Advertising"],
        "regex": true
    }, {
        "cookie": "^_gat_.+",
        "purposes": ["Analytics"],
        "regex": true
    }, {
        "cookie": "^_gat_UA-",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^_gcl",
        "purposes": ["Advertising"],
        "regex": true
    }, {
        "cookie": "^_gcl.*",
        "purposes": ["Advertising"],
        "regex": true
    }, {
        "cookie": "^_gd",
        "purposes": ["Functional"],
        "regex": true
    }, {
        "cookie": "^_gd.*",
        "purposes": ["Functional"],
        "regex": true
    }, {
        "cookie": "^_hjSession_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^_hjSessionUser_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^_hp2_hld.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^_hp2_id.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^_hp2_props.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^_hp2_ses_props.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^_sp_root_domain_test_.+$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^_tldtest_.+$",
        "purposes": ["Essential"],
        "regex": true
    }, {
        "cookie": "^\\s?IR_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^a.*$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^ab\\._gd[0-9]{13}$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^ab\\.storage\\.deviceId\\..*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^ab\\.storage\\.sessionId\\..*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^ab\\.storage\\.userId\\..*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^ADK_EX_.*$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^ajs_anonymous_id.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^AMCV_.+AdobeOrg",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^amp_.*",
        "purposes": ["AlwaysBlock", "Analytics"],
        "regex": true
    }, {
        "cookie": "^amp_cookie_test.+?$",
        "purposes": ["Analytics"],
        "regex": true
    }, {
        "cookie": "^amplitude_.*",
        "purposes": ["AlwaysBlock", "Analytics"],
        "regex": true
    }, {
        "cookie": "^amplitude_id.*",
        "purposes": ["AlwaysBlock", "Analytics"],
        "regex": true
    }, {
        "cookie": "^bounceClientVisit.*$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^cf_cc_.+$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^cf_chl_.+$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^cf_chl_cc_.+$",
        "purposes": ["AlwaysBlock", "Functional"],
        "regex": true
    }, {
        "cookie": "^cf_chl_seq_.+$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^dd_cookie_test_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^dd_site_test_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^DSP2F_.*$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^ev_sync_[a-z][a-z]",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^fblo_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^GA1",
        "purposes": ["Analytics"],
        "regex": true
    }, {
        "cookie": "^GA1.+",
        "purposes": ["Analytics"],
        "regex": true
    }, {
        "cookie": "^Hm_ck_.+",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^Hm_lpvt_.+",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^Hm_lvt_.+",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^intercom-id-.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^intercom-session-.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^KRTBCOOKIE_.+",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^lpv.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^mp_.*_mixpanel$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^SCM.*$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^SESS.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^SSPR_.*$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^uid\\-bp\\-.*$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^visitor_id\\d+-.+$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "^visitor_id\\d+$",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "5@duckduckgo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "Ac_aqK8DtrDL",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "Ac_aqK8DtrDS",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "ADK_EX_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "AF_SYNC",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AMCV_98CF678254E93B1B0A4C98A5%40AdobeOrg",
        "purposes": ["Analytics"]
    }, {
        "cookie": "AMP_067b9b07c8",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AMP_07c61c6ea8",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AMP_569d78c970",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AMP_8f1ede8e9c",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AMP_9ada0d4f2a",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AMP_a650c5fd66",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AMP_bfac2ecc20",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AMP_ee857825eb",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AMP_fe4beb374f",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AMP_MKTG_ee857825eb",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AMP_TEST",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AMP_TLDTEST",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AnalyticsSyncHistory@linkedin.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "AuthNRequestID",
        "purposes": ["Functional"]
    }, {
        "cookie": "bcookie@linkedin.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "bi_it",
        "purposes": ["Analytics"]
    }, {
        "cookie": "bi_pt",
        "purposes": ["Analytics"]
    }, {
        "cookie": "bounceClientVisit.*c",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "bounceClientVisit.*v",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "bscookie@www.linkedin.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "bubufcc",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "builderSessionId",
        "purposes": ["Functional"]
    }, {
        "cookie": "builderSessionId@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "C_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "cbLDB",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "cbLDBex",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "cebs",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "cebsp_",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "cf_clearance",
        "purposes": ["Essential"]
    }, {
        "cookie": "cf_clearance@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "ci_branch_url",
        "purposes": ["Functional"]
    }, {
        "cookie": "CISI_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "cjevent",
        "purposes": ["Analytics"]
    }, {
        "cookie": "clips",
        "purposes": ["Functional"]
    }, {
        "cookie": "CONSENT",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "content_rating",
        "purposes": ["Functional"]
    }, {
        "cookie": "cookiecookie",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "cookietest",
        "purposes": ["Functional"]
    }, {
        "cookie": "create_context.shopify",
        "purposes": ["Functional"]
    }, {
        "cookie": "create_widget_app_id",
        "purposes": ["Functional"]
    }, {
        "cookie": "CT\\w+",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "drift_aid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "drift_campaign_refresh",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "driftt_aid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "DSP2F_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "embed_preferences",
        "purposes": ["Functional"]
    }, {
        "cookie": "ext_name",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "f2p_pilot_bucket",
        "purposes": ["Functional"]
    }, {
        "cookie": "fc_anon",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "fc_pid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "flags",
        "purposes": ["Functional"]
    }, {
        "cookie": "Fm_kZf8ZQvmX",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "g_csrf_token",
        "purposes": ["Functional"]
    }, {
        "cookie": "g_state",
        "purposes": ["Functional"]
    }, {
        "cookie": "G6JgORLljdz08Uq13vxuppMPeIl7rFxtLbOdOws5YwqWtIBmMz0YnNq1M1Ukt2VN9xsrd69YFJrm6pvvDIFrnKdmF1DUSSjQ3y6ub8mGlBtn8g77SUVVdfZcFfurfygC",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "googtrans",
        "purposes": ["Functional"]
    }, {
        "cookie": "has_logged_in",
        "purposes": ["Functional"]
    }, {
        "cookie": "has_uploaded",
        "purposes": ["Functional"]
    }, {
        "cookie": "i18next",
        "purposes": ["Functional"]
    }, {
        "cookie": "IDE@doubleclick.net",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "is_in_grace_period",
        "purposes": ["Functional"]
    }, {
        "cookie": "is_logged_in",
        "purposes": ["Functional"]
    }, {
        "cookie": "is_new_user",
        "purposes": ["Functional"]
    }, {
        "cookie": "is_partner_affiliate_referral",
        "purposes": ["Functional"]
    }, {
        "cookie": "ISCHECKURLRISK",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000006__ga_126VYLCXDY",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000006__uetvid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000006_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000036__ga_126VYLCXDY",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000036_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000037_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000045_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000058__uetsid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000058_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000066_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000067_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000095_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000160_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000169__dd_s",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000208_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000228_language",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000228_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000242_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000243__uetvid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000243_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000270_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000278_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000312_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000314_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000363_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000406_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000423_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000430_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000457_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000485_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000512_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000513_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000580__ga_126VYLCXDY",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000580__uetvid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000580_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000611_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000626_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000763__dd_s",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000821__dd_s",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joga_000898_OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "joined_with_existing_account",
        "purposes": ["Functional"]
    }, {
        "cookie": "JSESSIONID@nr-data.net",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "juicy_data_1@jads.co",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "juicy_data@jads.co",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "key0.21679493360051594",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "kifc_21501",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "kifcc_21501",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "kifcs_21501",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "language",
        "purposes": ["Functional"]
    }, {
        "cookie": "language@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "last_page",
        "purposes": ["Functional"]
    }, {
        "cookie": "lastRskxRun",
        "purposes": ["Functional"]
    }, {
        "cookie": "lc_1001301763",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_1005987647",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_1008083513",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_1009215025",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_1009360329",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_1009654405",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_1010632229",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_1010716839",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_1010718954",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_4440038",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_4505199",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_4508621",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_4539273",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_4552005",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_4553473",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_4581880",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_4585869",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_4588460",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_928499612",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lc_999157437",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "Lda_aKUr6BGRn",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lffenkjgpefmkkmmmkknjhgjamkhdnid_sit",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "li_adsId",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "li_gc@linkedin.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "li_sugr@linkedin.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "lidc@linkedin.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "meliuz_coupon",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "metrika_enabled",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "MicrosoftApplicationsTelemetryDeviceId",
        "purposes": ["Analytics"]
    }, {
        "cookie": "MicrosoftApplicationsTelemetryFirstLaunchTime",
        "purposes": ["Analytics"]
    }, {
        "cookie": "mod_panel",
        "purposes": ["Functional"]
    }, {
        "cookie": "modbox_v6",
        "purposes": ["Functional"]
    }, {
        "cookie": "modworld_a17_appeals_tier",
        "purposes": ["Functional"]
    }, {
        "cookie": "modworld_moderation_decisions_tier",
        "purposes": ["Functional"]
    }, {
        "cookie": "modworld_reason",
        "purposes": ["Functional"]
    }, {
        "cookie": "mp_253d28f65d92e460d298b3f1c16bc4d7_mixpanel",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "mp_a38ef2cddfcc0faeef29f359ab69c594_mixpanel",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "mp_d14f69a7f8f55d29268336cc22f274b1_mixpanel",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "MR@bat.bing.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "MSPTC@bat.bing.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "MSPTC@bing.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "MUID@bing.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "NID@google.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "notification_153",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "notification_amex_subscription_30_days",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_basic_uploader_upsell",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_casl",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "notification_casl_opt_in",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "notification_email_marketing_notification",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_high_bandwidth_violation",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_incomplete_tax_forms",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_language_optin",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_mod_is_possessed",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_no_password",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_plusm_to_plusa",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "notification_storage_limit_alert",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_subscription_expiration_grace_period",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_subscription_expiration_winback",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_subscription_lapsed_first_promo",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_subscription_lapsed_no_promo",
        "purposes": ["Functional"]
    }, {
        "cookie": "notification_subscription_lapsed_second_promo",
        "purposes": ["Functional"]
    }, {
        "cookie": "nspatoken",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "NUSAI_CAVE_dontNotifyUser",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "oneDayExecutionLimitLastExecutionXx",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "oneDayExecutionLimitLastInjectionXx",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "OnetrustActiveGroups",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "OptanonAlertBoxClosed",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "OptanonAlertBoxClosed@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "OptanonConsent",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "OptanonConsent@soundcloud.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "OptanonConsent@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "OT_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "outreach_device_id",
        "purposes": ["Functional"]
    }, {
        "cookie": "perf_dv6Tr4n",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "ph_phc_ciEN0PjWpaDYbTuEbeV8pTzlPTmYKQqQrcKXw9DyHgY_posthog",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "ph_phc_KVEROjazMBgh3HSrMkBkt3j0Rv4VE0BLV6WYBzZDZGA_posthog",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "ph_phc_r3ANgopZRfdnjqpsoHNp3opfrIKgQFCdyjoAyg9oBWf_posthog",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "player",
        "purposes": ["Essential"]
    }, {
        "cookie": "player@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "post_checkout_teams_action",
        "purposes": ["Functional"]
    }, {
        "cookie": "QuantumMetricSessionID",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "rbuid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "rCookie",
        "purposes": ["Functional"]
    }, {
        "cookie": "receive_updates_for_vod_on_login",
        "purposes": ["Functional"]
    }, {
        "cookie": "recent_gtm_event",
        "purposes": ["Analytics"]
    }, {
        "cookie": "recent_gtm_event@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "redirect_url_after_social_login",
        "purposes": ["Functional"]
    }, {
        "cookie": "redirect_url_after_social_login@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "review_notes_filtered_1010287101",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "review_notes_filtered_1010328511",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "review_notes_filtered_882893962",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "review_notes_filtered_974743345",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "rldbbdw",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "rskxRunCookie",
        "purposes": ["Functional"]
    }, {
        "cookie": "RT",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "RUM_EPISODES",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "S_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "s_cc",
        "purposes": ["Analytics"]
    }, {
        "cookie": "s_fid",
        "purposes": ["Analytics"]
    }, {
        "cookie": "s_sq",
        "purposes": ["Analytics"]
    }, {
        "cookie": "sajssdk_2015_cookie_access_test",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "SCM.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "scrly_log_1",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "scrly_token",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "sd_client_id",
        "purposes": ["Analytics"]
    }, {
        "cookie": "sd_client_id@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "sd_identity",
        "purposes": ["Analytics"]
    }, {
        "cookie": "search_click_position",
        "purposes": ["Functional"]
    }, {
        "cookie": "sensorsdata_domain_test",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "sensorsdata2015jssdkcross",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "sessionId",
        "purposes": ["Functional"]
    }, {
        "cookie": "settings",
        "purposes": ["Functional"]
    }, {
        "cookie": "shortscc",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "singular_device_id",
        "purposes": ["Functional"]
    }, {
        "cookie": "site_settings",
        "purposes": ["Functional"]
    }, {
        "cookie": "SLG_G_WPT_TO",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "SLO_G_WPT_TO",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "SLO_GWPT_Show_Hide_tmp",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "SLO_wptGlobTipTmp",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "spfy_xsrft_app_store_installation",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "SR\\w+",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "ssm_au_c",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "ssm_au_d",
        "purposes": ["Analytics"]
    }, {
        "cookie": "SSPR_.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "starling-language",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "stats_end_date",
        "purposes": ["Functional"]
    }, {
        "cookie": "stats_start_date",
        "purposes": ["Functional"]
    }, {
        "cookie": "stream",
        "purposes": ["Functional"]
    }, {
        "cookie": "swg_https_a2bc",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "syncdata_\\w+",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "TEST_AMCV_COOKIE_WRITE",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "test_cookie@doubleclick.net",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "test_get_top_level_domain",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "tk_ai",
        "purposes": ["Analytics"]
    }, {
        "cookie": "tldCookie",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "uaval",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "uid\\-bp\\-.*",
        "purposes": ["AlwaysBlock"],
        "regex": true
    }, {
        "cookie": "UserMatchHistory@linkedin.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "version",
        "purposes": ["Functional"]
    }, {
        "cookie": "video_review_loggedout_guest_user_id",
        "purposes": ["Functional"]
    }, {
        "cookie": "video_review_loggedout_name",
        "purposes": ["Functional"]
    }, {
        "cookie": "vimeo",
        "purposes": ["Functional"]
    }, {
        "cookie": "vimeo_cart",
        "purposes": ["Functional"]
    }, {
        "cookie": "vimeo_cookie_challenge",
        "purposes": ["Functional"]
    }, {
        "cookie": "vimeo_gdpr_optin",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "vimeo@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "visitorId@ws.zoominfo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "vod_s",
        "purposes": ["Functional"]
    }, {
        "cookie": "vuid",
        "purposes": ["Analytics"]
    }, {
        "cookie": "vuid@vimeo.com",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "was_managed_user",
        "purposes": ["Functional"]
    }, {
        "cookie": "weird_get_top_level_domain",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "wg_tl_do460776",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "wm-last-euid",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "WMF-Last-Access@ja.wikipedia.org",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "X-SIG-HTTPS-Umbrella-SAML",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "xxoo-tmp",
        "purposes": ["AlwaysBlock"]
    }, {
        "cookie": "zero-chakra-ui-color-mode",
        "purposes": ["Functional"]
    }],
    ui: "/cm/31e97cbf-355c-4f0d-8bad-9cd945121508/ui.js",
    xdi: "/cm/31e97cbf-355c-4f0d-8bad-9cd945121508/xdi.js",
    metadata: "/cm/31e97cbf-355c-4f0d-8bad-9cd945121508/metadata.json",
    id: "31e97cbf-355c-4f0d-8bad-9cd945121508"
}, self.airgap);
self.airgap.loadOptions = Object.assign({
    "csp": "off",
    "log": "warn error",
    "telemetry": "on",
    "telemetrySampleRate": "0.25",
    "unknownRequestPolicy": "allow",
    "prompt": "1",
    "privacyPolicy": "https://vimeo.com/privacy",
    "regimePrecedence": "GDPR;CPRA;simulate-opt-out-all;Unknown",
    "consentManagerConfig": {
        "privacyPolicy": "https://vimeo.com/privacy",
        "theme": {
            "primaryColor": "#0E1216",
            "fontColor": "#28313A"
        },
        "initialViewStateByPrivacyRegime": {
            "GDPR": "AcceptOrRejectAll",
            "CPRA": "Hidden",
            "simulate-opt-out-all": "Hidden",
            "Unknown": "Hidden"
        }
    },
    "css": "https://transcend-cdn.com/cm/31e97cbf-355c-4f0d-8bad-9cd945121508/cm.css",
    "messages": "https://transcend-cdn.com/cm/31e97cbf-355c-4f0d-8bad-9cd945121508/translations",
    "sites": "transcend.io vimeo.com localhost vimeows.com vimeo.dev vimeo.work vimeo-work.dev videoshipinurl.hk vimeows.work videoji.cn",
    "localSync": "off"
}, self.airgap.loadOptions);
(() => {
    const allowedHosts = ["sync.transcend.io", "vimeo.com", "localhost", "ci.vimeows.com", "vimeo.dev", "vimeo.work", "vimeo-work.dev", "videoshipinurl.hk", "vimeows.work", "videoji.cn", "vimeows.com"];
    const telemetryEndpoint = "https://telemetry.transcend.io/collect";
    (() => {
        "use strict";
        var IS = Object.defineProperty,
            CS = Object.defineProperties;
        var OS = Object.getOwnPropertyDescriptors;
        var Im = Object.getOwnPropertySymbols;
        var xS = Object.prototype.hasOwnProperty,
            MS = Object.prototype.propertyIsEnumerable;
        var Jc = (e, t, o) => t in e ? IS(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o
            }) : e[t] = o,
            O = (e, t) => {
                for (var o in t || (t = {})) xS.call(t, o) && Jc(e, o, t[o]);
                if (Im)
                    for (var o of Im(t)) MS.call(t, o) && Jc(e, o, t[o]);
                return e
            },
            Ee = (e, t) => CS(e, OS(t));
        var G = (e, t, o) => (Jc(e, typeof t != "symbol" ? t + "" : t, o), o),
            Cm = (e, t, o) => {
                if (!t.has(e)) throw TypeError("Cannot " + o)
            };
        var le = (e, t, o) => (Cm(e, t, "read from private field"), o ? o.call(e) : t.get(e)),
            Oe = (e, t, o) => {
                if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                t instanceof WeakSet ? t.add(e) : t.set(e, o)
            },
            Ae = (e, t, o, r) => (Cm(e, t, "write to private field"), r ? r.call(e, o) : t.set(e, o), o);
        var Yo = "http://www.w3.org/1999/xhtml",
            Wi = ":~:";
        var P = self,
            {
                Function: Cs
            } = P,
            {
                call: Ki,
                apply: bS,
                bind: LS
            } = Cs.prototype,
            s = Ki.bind(Ki),
            L = Ki.bind(bS),
            ji = Ki.bind(LS),
            {
                Symbol: Zo,
                parent: Yi,
                document: oe,
                location: No,
                navigator: _o,
                String: tp,
                XMLHttpRequest: dn,
                fetch: Os,
                Request: op,
                WebSocket: rp,
                WebTransport: CR,
                EventSource: np,
                Worker: $m,
                SharedWorker: sp,
                ServiceWorkerContainer: Xi,
                Array: Do,
                Blob: Qm,
                Boolean: OR,
                Object: xe,
                Error: mt,
                ReferenceError: ip,
                TypeError: $t,
                Set: B,
                WeakSet: ko,
                Map: Q,
                WeakMap: fn,
                Promise: ge,
                URL: Xo,
                URLSearchParams: St,
                Event: wo,
                CustomEvent: ap,
                UIEvent: cp,
                SubmitEvent: jm,
                CookieChangeEvent: xs,
                CookieStore: Ms,
                cookieStore: Or,
                SecurityPolicyViolationEvent: Ji,
                Date: Ut,
                FormData: bs,
                ReadableStream: Ym,
                Headers: pp,
                console: Xm,
                Math: Jo,
                JSON: lp,
                RegExp: eo,
                EventTarget: up,
                MessagePort: NS,
                MessageChannel: xR,
                postMessage: Jm,
                history: mp,
                History: DS,
                AbortController: MR,
                setTimeout: Pt,
                clearTimeout: er,
                setInterval: gn,
                clearInterval: bR,
                requestIdleCallback: yn = function(e, {
                    timeout: t = 0
                } = {
                    timeout: 0
                }) {
                    return s(Pt, this, e, t)
                },
                cancelIdleCallback: LR = function(e) {
                    s(er, this, e)
                },
                eval: NR,
                open: Zm,
                close: DR,
                TextEncoder: un,
                performance: Tt,
                encodeURIComponent: go,
                unescape: ed,
                Intl: dp,
                isNaN: _S,
                confirm: td,
                Response: od,
                Node: Gt,
                NodeList: fp,
                NodeFilter: kS,
                Attr: Zi,
                NamedNodeMap: gp,
                XMLSerializer: yp,
                DOMException: rd,
                MutationObserver: Ep,
                Number: wS,
                Performance: Om,
                PerformanceObserver: Rs,
                PerformanceObserverEntryList: xm,
                PerformanceEntry: _R,
                PerformanceResourceTiming: kR,
                Element: to,
                Document: ht,
                HTMLDocument: nd,
                DocumentFragment: Ap,
                DocumentType: Tp,
                CharacterData: Sp,
                HTMLElement: En,
                HTMLScriptElement: xr,
                HTMLAnchorElement: tr,
                HTMLEmbedElement: Pp,
                HTMLIFrameElement: oo,
                HTMLFrameElement: hp,
                HTMLFormElement: or,
                HTMLButtonElement: ea,
                HTMLInputElement: Ls,
                HTMLImageElement: rr,
                HTMLVideoElement: sd,
                HTMLLinkElement: Mr,
                HTMLAreaElement: ta,
                HTMLSourceElement: Ns,
                HTMLPictureElement: id,
                HTMLMediaElement: An,
                HTMLObjectElement: vp,
                HTMLTrackElement: ad,
                HTMLCollection: oa,
                SVGElement: Rp,
                SVGScriptElement: cd,
                SVGImageElement: pd,
                DOMTokenList: Ip,
                Navigator: ra,
                Navigation: Cr,
                NavigateEvent: ld,
                NavigationDestination: ud,
                navigation: Cp,
                Proxy: na,
                Reflect: $i,
                Range: sa,
                BroadcastChannel: fo,
                ShadowRoot: Qi,
                Worklet: ia,
                URLPattern: mn
            } = P,
            yo = e => {
                s(yn, P, () => {
                    throw e
                })
            },
            {
                iterator: Tn,
                hasInstance: Op,
                match: Mm,
                matchAll: bm,
                replace: Lm,
                search: Nm,
                split: Dm,
                toStringTag: br
            } = Zo,
            US = Zo[Op],
            C = (e, t) => s(US, e, t),
            {
                childNodes: GS,
                children: HS
            } = oe.createDocumentFragment(),
            aa = [
                [], new B, new Q, GS, oe.createElement("_").classList, HS, ""
            ],
            [FS, qS, BS, VS, WS, zS, KS] = aa.map(({
                [Tn]: e
            }) => e),
            xp = e => C(Do, e) ? FS : C(B, e) ? qS : C(Q, e) ? BS : C(fp, e) ? zS : C(Ip, e) ? VS : C(oa, e) ? WS : typeof e == "string" || C(tp, e) ? KS : e[Tn],
            Me = xe.defineProperty.bind(xe),
            Sn = xe.getPrototypeOf.bind(xe),
            $S = $i.ownKeys.bind($i),
            [QS, jS, YS, XS, JS, ZS, eP] = aa.map(e => e[Tn]().next),
            md = e => C(Do, e) ? QS : C(B, e) ? jS : C(Q, e) ? YS : C(fp, e) ? XS : C(Ip, e) ? JS : C(oa, e) ? ZS : typeof e == "string" || C(tp, e) ? eP : s(xp(e), e).next,
            {
                includes: dd,
                every: fd,
                some: gd,
                map: yd,
                push: Mp,
                pop: tP,
                shift: oP,
                unshift: rP,
                join: Ed,
                slice: wR,
                splice: Ad,
                find: Td,
                findIndex: Sd,
                filter: Pd,
                flat: ca,
                flatMap: hd,
                reduce: bp,
                concat: vd,
                keys: nP,
                values: Lp,
                entries: sP,
                slice: Rd,
                indexOf: Id
            } = Do.prototype,
            {
                add: Cd,
                has: Od,
                delete: iP,
                clear: xd,
                values: Md,
                entries: UR,
                keys: GR,
                forEach: HR
            } = B.prototype,
            {
                get: pa,
                set: bd,
                has: Ld,
                delete: Nd,
                clear: Dd,
                keys: aP,
                values: _d,
                entries: kd
            } = Q.prototype,
            {
                toString: FR
            } = wS.prototype,
            R = function(e, t, o) {
                let r = s(xp(e), e),
                    n = md(e),
                    i = s(n, r),
                    a = 0;
                for (; !i.done;) s(t, o, i.value, a++, e), i = s(n, r)
            },
            la = $i.ownKeys.bind($i),
            Fe = xe.keys.bind(xe),
            Ne = xe.entries.bind(xe),
            zi, Fm, ro = ((Fm = (zi = xe == null ? void 0 : xe.fromEntries) == null ? void 0 : zi.bind) == null ? void 0 : Fm.call(zi, xe)) || (e => s(bp, Te(e), (t, [o, r]) => (t[o] = r, t), f())),
            qR = xe.assign.bind(xe),
            _m = xe.create.bind(xe),
            Lr = e => !_S(e),
            f = (e = null, t = null) => e ? _m(t, Np(e)) : _m(t),
            {
                then: Pn,
                catch: st
            } = ge.prototype,
            hn = ge.all.bind(ge),
            Eo = e => s(st, e, () => {}),
            {
                doNotTrack: km,
                cookieEnabled: wd
            } = _o,
            {
                globalPrivacyControl: Ud,
                userAgent: Ds
            } = _o,
            Uo = wd ? P.sessionStorage : f(),
            qe = wd ? P.localStorage : f();
        var Te = e => {
                let t = s(xp(e), e),
                    o = md(e),
                    r = [],
                    n = s(o, t);
                for (; !n.done;) s(Mp, r, n.value), n = s(o, t);
                return r
            },
            tt = e => {
                e.length = 0
            },
            ze = e => e.next().done,
            Nr = xe.getOwnPropertyDescriptor.bind(xe),
            Np = xe.getOwnPropertyDescriptors.bind(xe),
            _ = (e, t) => Nr(e.prototype, t),
            ua = e => Np(e.prototype),
            {
                hasOwnProperty: Gd
            } = xe.prototype,
            {
                postMessage: Hd,
                start: Fd,
                close: qd
            } = NS.prototype,
            qm, Dp = (qm = fo == null ? void 0 : fo.prototype) == null ? void 0 : qm.postMessage,
            {
                parse: cP,
                stringify: pP
            } = lp,
            vn = cP.bind(lp),
            We = pP.bind(lp),
            {
                href: _s,
                hostname: Ye,
                origin: Ao
            } = No,
            Rn = eo.prototype,
            {
                test: _p
            } = Rn,
            kp = Mm && Rn[Mm],
            BR = bm && Rn[bm],
            wp = Dm && Rn[Dm],
            VR = Nm && Rn[Nm],
            Up = Lm && Rn[Lm],
            In = _(eo, "source").get,
            Bd = _(eo, "flags").get,
            {
                includes: Vd,
                split: Wd,
                startsWith: zd,
                endsWith: lP,
                toLowerCase: Kd,
                toUpperCase: $d,
                replace: Qd,
                replaceAll: WR,
                trim: jd,
                match: Yd,
                matchAll: zR,
                search: KR,
                indexOf: Xd,
                slice: Jd
            } = tp.prototype,
            {
                add: Zd,
                has: ef,
                delete: uP
            } = ko.prototype,
            {
                get: tf,
                set: of,
                has: rf,
                delete: mP
            } = fn.prototype,
            {
                preventDefault: ma,
                stopPropagation: nf,
                stopImmediatePropagation: sf
            } = wo.prototype,
            {
                add: $R,
                remove: QR,
                toggle: jR,
                contains: Gp
            } = Ip.prototype,
            {
                addEventListener: Pe,
                removeEventListener: nr,
                dispatchEvent: Hp
            } = up.prototype,
            {
                set: vt,
                entries: sr,
                toString: Cn,
                has: da,
                get: fa,
                delete: af
            } = St.prototype,
            Bm, wm = (Bm = _(St, "size")) == null ? void 0 : Bm.get,
            cf = e => wm ? !s(wm, e) : ze(s(sr, e)),
            {
                entries: pf
            } = pp.prototype,
            {
                go: dP,
                replaceState: lf
            } = DS.prototype,
            On = () => {
                s(dP, mp, 0)
            },
            {
                click: ga
            } = En.prototype,
            {
                submit: Fp,
                requestSubmit: qp
            } = or.prototype,
            {
                setAttribute: no,
                setAttributeNS: Bp,
                setAttributeNode: uf,
                setAttributeNodeNS: mf,
                insertAdjacentElement: df,
                insertAdjacentHTML: ff,
                setHTML: Vp,
                append: ks,
                prepend: YR,
                before: XR,
                after: JR,
                replaceWith: ZR,
                remove: gf,
                hasAttribute: ya,
                getAttribute: xn,
                removeAttribute: Ea,
                hasAttributeNS: eI,
                getAttributeNS: yf,
                removeAttributeNS: Aa,
                getElementsByTagName: tI,
                matches: oI
            } = to.prototype,
            {
                appendChild: Mn,
                removeChild: Ef,
                insertBefore: Af,
                replaceChild: Tf,
                cloneNode: Sf,
                getRootNode: rI,
                lookupNamespaceURI: Pf
            } = Gt.prototype,
            {
                forEach: hf
            } = fp.prototype,
            {
                setNamedItem: vf,
                setNamedItemNS: Rf
            } = gp.prototype,
            {
                adoptNode: Wp,
                importNode: zp,
                append: nI,
                prepend: sI,
                write: ir = oe.write,
                open: ar = oe.open,
                close: cr = oe.close,
                createElement: If,
                createElementNS: Cf,
                createDocumentFragment: fP,
                createTreeWalker: Of
            } = ht.prototype,
            {
                nextNode: xf
            } = TreeWalker.prototype,
            {
                append: iI,
                prepend: aI
            } = Ap.prototype,
            {
                before: cI,
                after: pI,
                replaceWith: lI
            } = Tp.prototype,
            {
                before: uI,
                after: mI,
                replaceWith: dI
            } = Sp.prototype,
            {
                observe: Mf,
                disconnect: bf
            } = Ep.prototype,
            Lf = Om && Om.prototype.getEntries,
            {
                observe: Nf,
                disconnect: fI,
                takeRecords: gI
            } = Rs && Rs.prototype || f(),
            Df = xm && xm.prototype.getEntries,
            _f = Tt == null ? void 0 : Tt.timeOrigin,
            kf = Tt == null ? void 0 : Tt.setResourceTimingBufferSize,
            wf = Tt == null ? void 0 : Tt.clearResourceTimings,
            {
                serializeToString: Uf
            } = yp.prototype,
            {
                createHTMLDocument: Kp,
                createDocument: Ta
            } = DOMImplementation.prototype,
            Zc = ["DocumentFragment", "Document", "Element"],
            ep = ["DocumentType", "CharacterData", "Element"],
            Gf = new Q,
            Hf = new Q,
            Ff = new Q,
            qf = new Q,
            Bf = new Q,
            Vf = new Q;
        R(Zc, e => {
            let t = P[e];
            Gf.set(e, t.prototype.querySelector), Hf.set(e, t.prototype.querySelectorAll)
        });
        R(ep, e => {
            let t = P[e];
            Ff.set(e, t.prototype.remove), qf.set(e, t.prototype.replaceWith), Bf.set(e, t.prototype.before), Vf.set(e, t.prototype.after)
        });
        var ws = _(Gt, "nodeType").get,
            $p = _(Gt, "childNodes").get,
            yI = _(Gt, "parentNode").get,
            EI = _(Gt, "parentElement").get,
            Sa = _(Gt, "firstChild").get,
            {
                compareDocumentPosition: gP,
                DOCUMENT_POSITION_DISCONNECTED: yP,
                DOCUMENT_NODE: Qp,
                ELEMENT_NODE: Pa,
                TEXT_NODE: Wf,
                DOCUMENT_FRAGMENT_NODE: jp,
                DOCUMENT_TYPE_NODE: zf
            } = Gt.prototype,
            {
                contains: Kf
            } = Gt.prototype,
            {
                SHOW_ELEMENT: $f,
                FILTER_SKIP: Qf,
                FILTER_REJECT: jf
            } = kS,
            To = e => C(Gt, e),
            Go = e => s(ws, e) === Pa,
            so = e => s(ws, e) === Qp,
            Yf = e => s(ws, e) === jp;
        var bn = _(ht, "cookie"),
            EP = _(ht, "implementation").get,
            ot = _(Gt, "ownerDocument").get,
            ha = _(ht, "defaultView").get,
            Yp = _(ht, "currentScript").get,
            AP = _(ht, "readyState").get,
            Us = e => s(AP, e),
            va = _(to, "tagName").get,
            Xf = _(to, "namespaceURI").get,
            Jf = _(to, "firstElementChild").get,
            Ln = s(EP, oe),
            Qt = s(Yp, oe),
            TP = () => s($p, s(fP, oe)),
            Ra = (e, t) => (o, ...r) => {
                let n = s(ha, s(ot, o) || oe) || P,
                    i = ep.length;
                for (; i--;) {
                    let a = ep[i],
                        p = n[a];
                    if (C(p, o)) return L(s(pa, e, a), o, r)
                }
                return t
            },
            Zf = (e, t) => (o, ...r) => {
                let n = s(ha, so(o) ? o : s(ot, o) || oe) || P,
                    i = Zc.length;
                for (; i--;) {
                    let a = Zc[i],
                        p = n[a];
                    if (C(p, o)) return L(s(pa, e, a), o, r)
                }
                return t
            },
            pr = Ra(Ff),
            AI = Ra(Bf),
            eg = Ra(Vf),
            tg = Ra(qf),
            Dr = Zf(Gf, null),
            og = Zf(Hf, TP()),
            Kt = xe.freeze.bind(xe),
            rg = xe.isFrozen.bind(xe),
            Xp = (e, t, o = e[t]) => Me(e, t, {
                value: o,
                configurable: !1,
                writable: !1,
                enumerable: !1
            }),
            Ke = e => (Kt(e.prototype), Kt(e)),
            Jp = e => {
                let t = $S(e);
                for (let o of s(Lp, t)) {
                    let r = e[o];
                    r && typeof r == "object" && Jp(r)
                }
                return Kt(e)
            },
            ue = Do.isArray.bind(Do),
            Mt = Ut.now.bind(Ut),
            jt = Ut.parse.bind(Ut),
            {
                toISOString: SP,
                toUTCString: PP,
                setMilliseconds: TI
            } = Ut.prototype,
            De = (e = new Ut) => s(SP, e),
            ng = (e = new Ut) => s(PP, e),
            Vm, sg = (Vm = un == null ? void 0 : un.prototype) == null ? void 0 : Vm.encode,
            ig = od.prototype.json,
            Ia = od.prototype.text,
            ag = Nr(Sn(Uint8Array.prototype), "byteLength").get,
            Nn = Jo.min.bind(Jo),
            cg = Jo.max.bind(Jo),
            Gs = Jo.random.bind(Jo),
            pg = Jo.floor.bind(Jo),
            lg = Xo.createObjectURL.bind(Xo),
            ug = Xo.revokeObjectURL.bind(Xo),
            mg = km === "1" || km === "on",
            Zp = _(ra, "languages").get,
            {
                DateTimeFormat: el
            } = dp,
            {
                resolvedOptions: dg
            } = el.prototype,
            {
                sendBeacon: tl
            } = ra.prototype,
            Hs = Cr && Cr.prototype.navigate,
            {
                createContextualFragment: ol
            } = sa.prototype,
            fg = _(sa, "commonAncestorContainer").get,
            hP = _(B, "size").get,
            io = e => s(hP, e),
            vP = _(Q, "size").get,
            Rt = e => s(vP, e),
            So = e => {
                let t = Np(e);
                return (o, ...r) => {
                    let n = f();
                    return R(r, i => {
                        let a = t[i];
                        if (a) {
                            let {
                                get: p,
                                set: c
                            } = a;
                            (p || c) && Me(n, i, O(O({}, p && {
                                get(...l) {
                                    return L(p, o, l)
                                }
                            }), c && {
                                set(...l) {
                                    return L(c, o, l)
                                }
                            }))
                        }
                    }), n
                }
            },
            Fs = So(No).bind(P, No),
            me = So(Xo.prototype),
            ut = (e, t = _s) => new Xo(e, t),
            RP = /^data:/i,
            Wm, IP = (Wm = mn == null ? void 0 : mn.prototype) == null ? void 0 : Wm.test,
            CP = mn && new mn,
            Is = e => s(_p, RP, `${e}`),
            Um = mn && (e => e !== null && s(IP, CP, `${e}`, "http://-")),
            Gm = (e, t = _s) => {
                try {
                    return Is(e) ? null : ut(e, t)
                } catch (o) {
                    return null
                }
            },
            _r = Um ? (e, t) => Um(e) && !Is(e) ? ut(e, t) : null : oe ? (() => {
                let e = oe.createElementNS(Yo, "input");
                e.type = "url";
                let t = e.validity,
                    o = _(Ls, "value").set,
                    r = _(ValidityState, "valid").get;
                return (n, i = _s) => Is(n) ? null : (s(o, e, n), s(r, t) ? ut(n, i) : Gm(n, i))
            })() : Gm,
            it = (e, ...t) => me(ut(e), ...t),
            Hm = ua(wo),
            OP = f(),
            xP = f();
        R(Fe(Hm), e => {
            let {
                get: t,
                set: o
            } = Hm[e];
            OP[e] = t, xP[e] = o
        });
        var kr = So(wo.prototype),
            Dn = So(MessageEvent.prototype),
            {
                item: SI
            } = oa.prototype,
            PI = _(oa, "length").get,
            gg = _(En, "dataset").get,
            yg = _(Rp, "dataset").get,
            Xe = _(ht, "documentElement").get,
            _n = _(ht, "body").get,
            lr = _(ht, "head").get,
            zm, rl = (zm = _(ht, "xmlVersion")) == null ? void 0 : zm.get,
            Ca = _(or, "action"),
            Eg = _(or, "enctype"),
            Ag = _(or, "method"),
            nl = (_(Gt, "isConnected") || {
                get() {
                    let e = s(ot, this);
                    return !e || !(s(gP, e, this) & yP)
                }
            }).get,
            kn = _(to, "innerHTML"),
            sl = _(to, "outerHTML"),
            Oa = Qi && _(Qi, "innerHTML"),
            il = _(xr, "src"),
            wn = _(rr, "src"),
            qs = _(rr, "currentSrc"),
            hI = _(rr, "srcset"),
            vI = _(Ns, "src"),
            RI = _(Ns, "srcset"),
            al = _(An, "src"),
            cl = _(An, "currentSrc"),
            Tg = _(oo, "src"),
            Km, Bs = (Km = _(oo, "credentialless")) == null ? void 0 : Km.set,
            II = _(Pp, "src"),
            CI = _(hp, "src"),
            Sg = _(oo, "srcdoc"),
            OI = _(tr, "ping"),
            Pg = _(tr, "download"),
            xI = _(vp, "data"),
            hg = _(tr, "href"),
            pl = _(Zi, "name"),
            xa = _(Zi, "value"),
            vg = _(op, "url").get,
            {
                open: ll,
                send: ul,
                OPENED: Rg
            } = dn.prototype,
            Ig = _(dn, "withCredentials"),
            Cg = _(dn, "readyState").get,
            {
                entries: Og
            } = bs.prototype,
            Ma = Mt();
        var k = (e, t) => s(dd, e, t),
            Po = (e, t, o) => s(fd, e, t, o),
            se = (e, t, o) => s(gd, e, t, o),
            x = (e, t, o) => s(yd, e, t, o),
            T = (e, ...t) => L(Mp, e, t);
        var de = (e, t) => s(Ed, e, t),
            _e = (e, t, o) => s(Rd, e, t, o),
            $e = (e, t, o, ...r) => s(Ad, e, t, o, ...r),
            rt = (e, t, o) => s(Td, e, t, o),
            It = (e, t, o) => s(Sd, e, t, o),
            fe = (e, t, o) => s(Pd, e, t, o),
            MP = (e, t) => s(ca, e, t),
            bP = (e, t, o) => s(bp, e, t, o),
            Je = (e, ...t) => L(vd, e, t),
            Vs = ca ? e => MP(e, 1) : e => bP(e, (t, o) => Je(t, o), []),
            Mg = ca ? (e, t, o) => s(hd, e, t, o) : (e, t, o) => Vs(x(e, t, o)),
            Un = (e, t, o) => s(Id, e, t, o);
        var M = e => s(Lp, e),
            Se = e => s(Md, e);
        var yl = e => s(_d, e),
            dt = e => s(kd, e),
            nt = (e, t) => s(Vd, e, t),
            bg = kp ? (e, t) => s(kp, t, e) : (e, t) => s(Yd, e, t),
            he = (e, t, o) => s(Wd, e, t, o),
            Ho = wp ? (e, t, o) => s(wp, t, e, o) : he,
            ft = (e, t, o) => s(zd, e, t, o);
        var at = e => s(Kd, e),
            ho = e => s($d, e),
            ct = Up ? (e, t, o) => s(Up, t, e, o) : (e, t, o) => s(Qd, e, t, o),
            Gn = e => s(jd, e),
            ba = (e, t, o) => s(Xd, e, t, o),
            vo = (e, t, o) => s(Jd, e, t, o),
            La = (e, t) => s(Zd, e, t),
            Na = (e, t) => s(ef, e, t);
        var Lg = (e, t) => s(tf, e, t),
            Ng = (e, t, o) => s(of, e, t, o),
            Dg = (e, t) => s(rf, e, t);
        var F = (e, t) => s(Cd, e, t),
            ve = (e, t) => s(Od, e, t);
        var Ro = e => s(xd, e),
            ae = (e, t) => s(pa, e, t),
            J = (e, t, o) => s(bd, e, t, o),
            Re = (e, t) => s(Ld, e, t),
            Hn = (e, t) => s(Nd, e, t),
            Io = e => s(Dd, e),
            _g = (e, t) => s(hf, e, t),
            Ie = (e, t) => s(_p, e, t),
            Fn = e => {
                let t = new Q;
                return R(e, ([o, r]) => {
                    J(t, o, r)
                }), t
            };
        var ke = e => {
            let t = new B;
            return R(e, o => {
                F(t, o)
            }), t
        };
        var kg = (e = new Date) => he(De(e), "T")[0],
            ml, qn = () => {
                var e;
                return ml != null ? ml : ml = ((e = rt(s(Lf, Tt), ({
                    entryType: t
                }) => t === "navigation")) == null ? void 0 : e.name) || _s
            },
            El = e => {
                let t = ba(e, "#"),
                    o = t !== -1 ? ba(vo(e, t), Wi) : -1;
                return o !== -1 ? t + o : -1
            },
            Da = (e = qn(), t = El(e)) => t !== -1 ? new St(vo(e, t + Wi.length)) : !1,
            LP = /=(&|$)/g,
            NP = e => ct(e, LP, "$1"),
            xg = e => NP(s(Cn, e)),
            Al = (e, t) => {
                if (ze(s(sr, t))) return;
                let {
                    hash: o
                } = e;
                if (o) {
                    let r = El(o);
                    if (r !== -1) {
                        let n = Da(o);
                        for (let [i, a] of s(sr, t)) s(vt, n, i, a);
                        e.hash = `${vo(o,0,r)}${xg(n)}`;
                        return
                    }
                }
                e.hash += `${Wi}${xg(t)}`
            },
            wg = (e, t = qn(), o = mp) => {
                if (!e.length) return;
                let r = El(t);
                if (r !== -1) {
                    let n = Da(t, r);
                    R(e, a => {
                        s(af, n, a)
                    });
                    let i = it(vo(t, 0, r), "hash", "href");
                    Al(i, n), s(lf, o, null, null, ct(i.href, /#$/, ""))
                }
            },
            dl, Ug = un ? e => s(ag, s(sg, dl != null ? dl : dl = new un, e)) : e => s(ed, P, go(e)).length,
            fl = e => `data-${ct(e,/[A-Z]/g,t=>`-${at(t)}`)}`,
            DP = function() {
                let e = this;
                return new na(f(), {
                    get: (t, o) => typeof o == "string" ? s(xn, e, fl(o)) : t[o],
                    set: (t, o, r) => typeof o == "string" ? s(no, e, fl(o)) : (t[o] = r, !0),
                    deleteProperty: (t, o) => typeof o == "string" ? (s(Ea, e, fl(o)), !0) : delete t[o]
                })
            },
            wr = e => s(C(En, e) ? gg : C(Rp, e) ? yg : DP, e),
            gl, ur = e => s(Uf, gl != null ? gl : gl = new yp, e),
            Co = e => s(Cf, document, Yo, e);
        var Gg = () => {
            var r, n;
            R(aa, i => {
                Xp(Sn(i), Tn), Kt(Sn(i[Tn]()))
            });
            let e = (n = (r = P) == null ? void 0 : r.Iterator) == null ? void 0 : n.prototype;
            e && Kt(e);
            let t = "prototype",
                o = [
                    [fn[t], "has", "get", "set"],
                    [ko[t], "has", "add"],
                    [ko, Op],
                    [Cs[t], "call"]
                ];
            R(o, ([i, ...a]) => {
                R(a, p => {
                    Xp(i, p)
                })
            })
        };
        var Ze = (e, t = f, o) => {
            try {
                return vn(e, o)
            } catch (r) {
                return yo(r), t == null ? void 0 : t()
            }
        };
        var _a = "tcmConfigOverrides",
            _P = () => {
                let {
                    [_a]: e
                } = Uo, t = Da(), o = t || new St;
                if (e) {
                    let r = Ze(e);
                    r && R(Ne(r), ([n, i]) => {
                        (!t || !s(da, t, n)) && s(vt, o, n, i)
                    })
                }
                return o
            },
            ka = _P();
        var we = "on",
            pe = "off";
        var Hg, Fo = !((Hg = Qt) != null && Hg.src) && typeof GM < "u";
        var kP = /(?:\s*(?:,\s*)+|\s+)/,
            Ct = e => Ho(e, kP);
        var Tl = ["fatal", "error", "warn", "info", "log", "debug", "trace"],
            wP = e => {
                let t = -1;
                return R(e, o => {
                    let r = Un(Tl, o);
                    r !== -1 && (t = cg(r, t))
                }), t !== -1 ? _e(Tl, 0, t + 1) : []
            },
            UP = ["all", "*"],
            Fg = e => ke(wP(k(UP, e) ? Tl : !e || e === "off" ? [] : Ct(e)));
        var Sl = P.airgap,
            Ws = Sl == null ? void 0 : Sl.loadOptions,
            qg = Qt ? wr(Qt) : f();
        if (Fo) {
            let e = {
                    log: "*",
                    monitoring: "export"
                },
                {
                    tcmLoadOptions: t
                } = qe,
                o = O(O({}, e), t ? Ze(t) : f());
            Ws = Ws ? O(O({}, Ws), o) : o
        }
        var H = f(Ws ? O(O({}, Ws), qg) : qg),
            GP = ["fatal", "error", "warn", "info", "log", "debug", "trace"],
            Bg = "log",
            HP = "info",
            Vg, Pl = s(fa, ka, Bg) || at((Vg = H[Bg]) != null ? Vg : ""),
            hl = Fg(Pl),
            h = io(hl) > Un(GP, HP),
            Be = ve(hl, "error"),
            Ce = ve(hl, "warn"),
            wa = H.tamperResist === we;
        var vl = (e, t) => Me(e, br, {
            value: t,
            enumerable: !0,
            configurable: !1,
            writable: !1
        });
        var FP = /\.+$/g,
            Bn = e => ct(e, FP, "");
        var mr = (e, t, o, r = !0) => {
            if (r && (t === "" || t === null)) return !0;
            let {
                hostname: n,
                port: i
            } = it(`https://${t}${typeof o<"u"?`:${o}`:""}`, "port", "hostname"), a = he(Bn(n), ".");
            return se(e, p => {
                let {
                    port: c,
                    hostname: l
                } = it(`https://${p}`, "port", "hostname"), m = he(Bn(l), "."), E = de(_e(a, -m.length), ".");
                return l === E && (!c || c === i)
            })
        };
        var Ur = e => C(Set, e) ? ke(e) : To(e) ? ur(e) : typeof e < "u" ? vn(We(e)) : void 0;
        var qP = /[=;]/g,
            Wg = e => ct(`${e}`, qP, t => s(go, P, t)),
            Gr = ({
                name: e,
                value: t
            }, o = !1) => `${Wg(o||e||"")}${o?"":`=${Wg(t||"")}`}`;
        var zg = (e, t) => {
            let o = wr(t);
            R(la(e), r => {
                let n = e[r];
                (typeof n == "string" || typeof n == "number") && (o[r] = n)
            })
        };
        var Ua = ({
                getKey: e,
                searchDepth: t = null,
                condition: o
            }) => (r, ...n) => {
                let a = !n.length ? Te(r) : Vs(n),
                    p = new B;
                R(a, u => {
                    F(p, e(u))
                });
                let c = [],
                    l = t === null,
                    m = l ? 0 : Nn(a.length, t);
                R(l ? a : _e(a, -m), (u, d) => {
                    let y = e(u);
                    ve(p, y) ? (!o || o(u)) && T(c, l ? d : d + m) : F(p, y)
                });
                let E = c.length;
                for (; E--;) {
                    let u = c[E];
                    $e(a, u, 1)
                }
                return a
            },
            Ga = Ua({
                getKey: ({
                    url: e
                }) => e,
                condition: e => {
                    var o;
                    let t = (o = e == null ? void 0 : e.requestInit) == null ? void 0 : o.method;
                    return !t || ho(t) === "GET"
                }
            }),
            Ha = Ua({
                getKey: Gr
            });
        var qo = (e, t, o) => {
            let r = f(),
                n = !1;
            return R(e, i => {
                let a = o[i];
                t[i] !== a && (n || (n = !0), r[i] = a)
            }), n ? r : null
        };
        var Vn = ({
                timestamp: e
            }, t) => (Lr(e) ? e : jt(e)) < Mt() - t,
            Rl = (e, t) => fe(e, o => Vn(o, t));
        var BP = {
                get() {
                    return this.isTrusted
                }
            },
            Il = (e, t = "") => (Nr(new e(t), "isTrusted") || BP).get,
            Fa = Il(wo),
            VP = Il(cp),
            WP = e => C(wo, e) && s(Fa, e),
            zP = jm || wo,
            Cl = e => C(zP, e) && kr(e, "type").type === "submit" && WP(e),
            KP = Il(Ji, "securitypolicyviolation"),
            Qg = e => s(KP, e),
            Kg = e => {
                let {
                    type: t,
                    timeStamp: o
                } = kr(e, "type", "timeStamp");
                return s(Fa, e) && t === "load" && o <= Ma
            },
            $P = e => s(Fa, e) && kr(e, "type").type === "change",
            $g = e => C(cp, e) && s(VP, e) || Cl(e) || $P(e),
            QP = xs || wo,
            jg = e => C(QP, e) && kr(e, "type").type === "change" && s(Fa, e),
            Yg = (e, t = !0) => {
                if (!e) return !1;
                if (C(wo, e) && (t && $g(e) || Kg(e))) return !0;
                let {
                    interaction: o,
                    load: r
                } = e;
                return t && o && $g(o) || r && Kg(r) || !1
            };
        var Hr = ({
            timestamp: e,
            purposes: t,
            confirmed: o,
            prompted: r,
            updated: n,
            metadata: i,
            metadataTimestamp: a
        }, p, c = !0) => f({
            purposes: t ? f(ro(fe(x(Ne(t), ([l, m]) => [l, c ? !!m : m]), ([l]) => !p || ve(p, l)))) : f(),
            timestamp: De(new Date(e ? jt(`${e||0}`) : Mt())),
            confirmed: !!o,
            prompted: !!r,
            updated: !!n,
            metadata: i,
            metadataTimestamp: a
        });

        function Ol(e) {
            return Fe(e)
        }
        var xl = e => {
            let t = f();
            if (k(["string", "number", "boolean", "undefined"], typeof e)) return t;
            let r = Ol(Sn(e)),
                n = Ol(e),
                i = a => {
                    t[a] = e[a]
                };
            return R(r, i), R(n, i), t
        };
        var qa = (e = "", t, o = Xm) => {
            let r = (v, I, ...S) => {
                    let N = [],
                        $ = !0;
                    R(S, ({
                        tag: ee,
                        message: Z
                    }) => {
                        $ ? (typeof Z.content == "string" ? T(N, [`%c${ee.content?`${ee.content}%c `:"%c"}${Z.content}`, ...ee.styles, "", ...Z.styles]) : T(N, [`%c${ee.content}`, ...ee.styles, Z.content]), $ = !1) : T(N, Z.content)
                    });
                    let te = Vs(N);
                    L(v, o, te)
                },
                n = "font-size:larger;font-weight:bold;border-radius:0.25em;padding:0.08em 0.25em;",
                i = `${n};color:navy;background-color:#78acff;`,
                a = `${n};color:#2F4F4F;background-color:darkgray`,
                p = `${n};color:amber;background-color:#6e3e00`,
                c = `${n};color:#800000;background-color:#ff4500`,
                l = e,
                m = (v, I) => {
                    let S = l;
                    l = v, I && (I(), l = S)
                },
                E = Fn([
                    ["fatal", "error"]
                ]),
                u = (v, I, S = n) => {
                    if (t && !ve(t, I)) {
                        let Z = () => {};
                        return Z.styled = Z, Z
                    }
                    let N = o[Re(E, v) ? ae(E, v) : v],
                        $ = [S],
                        te = [],
                        ee = (...Z) => {
                            r(N, v, ...x(Z, Ge => ({
                                tag: {
                                    content: l,
                                    styles: $
                                },
                                message: {
                                    content: Ge,
                                    styles: te
                                }
                            })))
                        };
                    return ee.styled = (Z, ...Ge) => {
                        let [At] = Ge;
                        Ge.length > 0 && (typeof At != "string" || !nt(At, "%c")) && (Ge[0] = `%c${At}`), typeof Z < "u" && Z !== null && T(te, ...ue(Z) ? Z : [Z]), ee(...Ge), tt(te)
                    }, ee
                },
                d = "info",
                y = [
                    ["group", [d, i]],
                    ["groupCollapsed", [d, i]],
                    ["groupEnd", [d, i]],
                    ["trace", ["trace", a]],
                    ["log", [d, i]],
                    ["info", [d, i]],
                    ["debug", ["debug", a]],
                    ["warn", ["warn", p]],
                    ["error", ["error", c]],
                    ["fatal", ["error", c]]
                ],
                A = f({
                    tag: m
                });
            return R(y, ([v, [I, S]]) => {
                A[v] = u(v, I, S)
            }), Kt(A)
        };
        var zs = e => e ? x(e ? fe(Ct(e), t => t) : [], t => ut(Ie(/^[\w-]+:\/\//, t) ? t : `https://${t}`)) : [];
        var Ks = class {
            constructor(t, o) {
                this.id = t;
                G(this, "hosts");
                G(this, "consent");
                G(this, "toJSON", () => {
                    let {
                        id: t,
                        consent: o,
                        hosts: r
                    } = this;
                    return {
                        [t]: o ? [o, ...r] : r
                    }
                });
                let [r] = o;
                typeof r == "object" ? (this.consent = r, this.hosts = _e(o, 1)) : this.hosts = o
            }
        };
        Ke(Ks);
        var $s = class extends Do {
            constructor(o) {
                super();
                G(this, "findGroupByHost", o => {
                    for (let r of M(this))
                        if (mr(r.hosts, o)) return r;
                    return null
                });
                G(this, "findGroupById", o => {
                    for (let r of M(this))
                        if (r.id === o) return r;
                    return null
                });
                G(this, "setConsent", o => {
                    let r = Ne(o);
                    R(r, ([n, [i]]) => {
                        let a = this.findGroupById(n);
                        a && typeof i == "object" && (a.consent = i)
                    })
                });
                G(this, "serializeConsent", o => {
                    let r = f();
                    return R(this, ({
                        id: n,
                        consent: i
                    }) => {
                        i && (r[n] = [o ? i : Hr(i)])
                    }), r
                });
                for (let [r, n] of Ne(o || f())) T(this, new Ks(r, n))
            }
            get hosts() {
                let o = new B;
                return R(this, r => {
                    R(r.hosts, n => {
                        F(o, n)
                    })
                }), Te(o)
            }
        };
        Ke($s);
        wa && Gg();
        var Ba = !0,
            Va = x(he("about data blob mailto mediastream filesystem chrome-extension moz-extension safari-web-extension safari-extension", " "), e => `${e}:`),
            Oo = e => `airgap.${e}(): Authorization proof is untrusted`,
            Yt = "Essential",
            ao = "Unknown",
            Ml = ao,
            bt = "request",
            dr = "cookie",
            bl = "origin",
            Wa = "font-weight:bold",
            Lt = "airgap.js",
            Fr = "*",
            za = [Fr, we, "all"],
            Xg = 7e4,
            Jg = 1e3,
            Zg = 3e5,
            ey = "uspapi",
            ty = "tcfapi";
        var oy = "ui",
            Ll = "policies",
            Nl = "dataflows",
            Ka = "hosts",
            $a = "paths",
            Qa = "csp",
            Dl = "cookies";
        var g = qa("airgap.js");
        var ry = !1,
            _l = () => {
                ry = !0
            },
            qr = new B,
            Br = () => (ry || (mg && F(qr, "DNT"), Ud && F(qr, "GPC"), _l()), qr);
        var kl = !1,
            ny = !1,
            sy = () => kl,
            iy = () => ny,
            jP = () => {
                let e = ka;
                if (!cf(e)) {
                    let t = (c, l) => {
                            g.warn(`Using ${c} override:`, l ? We(l) : "(empty)")
                        },
                        o = Zo(),
                        r = Zo(),
                        n = f(),
                        i = f({
                            log: c => {
                                t("log level", c)
                            },
                            "tcm-prompt": c => (g.warn("Consent prompt triggered by config override"), c && t("prompt view state", c), ny = c, r),
                            "tcm-reset": () => (kl = s(td, P, "Reset tracking consent?"), kl && g.warn("Resetting all caches & consent"), r),
                            "tcm-report-only": c => {
                                c === pe && (t("report-only mode", c), H.reportOnly = c)
                            },
                            "tcm-regime": c => {
                                t("privacy regime", c), H.regime = c
                            },
                            "tcm-signals": c => {
                                t("privacy signals", c), Ro(qr), c && R(Ct(c), l => {
                                    F(qr, l)
                                }), _l()
                            },
                            "tcm-clear-overrides": () => (g.log("Clearing all config overrides"), R(Fe(n), c => {
                                delete n[c]
                            }), delete Uo[_a], o)
                        }),
                        a = !0,
                        p = [];
                    for (let [c, l] of s(sr, e)) {
                        if (!s(Gd, i, c)) continue;
                        T(p, c);
                        let m = i[c](l);
                        if (m === o) {
                            a = !1;
                            break
                        }
                        m !== r && (n[c] = l)
                    }
                    a && (Uo[_a] = We(n)), wg(p)
                }
            };
        jP();
        var YP = "Unknown",
            ay = [
                ["GDPR", "LGPD", "nFADP"],
                ["Advertising", "Analytics", "Functional", "SaleOfInfo"]
            ],
            wl = [ay, [
                    ["CPRA", "CDPA", "CPA", "NEVADA_SB220"],
                    ["SaleOfInfo"]
                ],
                [
                    [YP],
                    []
                ]
            ],
            Ul = [ay],
            VO = Object.fromEntries(Ul.map(([e, t]) => e.map(o => [o, t])).flat()),
            WO = Object.fromEntries(wl.map(([e, t]) => e.map(o => [o, t])).flat());
        var cy = [
                ["EU", "AI AT AW AX BE BG BL BM CW CY CZ DE DK EE ES FI FK FO FR GB GF GG GI GL GP HR HU IE IM IO IT JE KY LT LU LV MF MQ MS MT NC NL PF PL PM PN PT RE RO SE SH SI SK SX TC UK VG WF YT"]
            ],
            py = [
                [
                    [
                        ["US", "CA"]
                    ],
                    ["CPRA"]
                ],
                [
                    [
                        ["EU"],
                        ["GB"],
                        ["NO"],
                        ["IS"],
                        ["LI"]
                    ],
                    ["GDPR"], "in", !0, ["Europe"]
                ],
                [
                    [
                        ["BR"]
                    ],
                    ["LGPD"], "in", !1, "Araguaina Bahia Belem Boa_Vista Campo_Grande Cuiaba Eirunepe Fortaleza Maceio Manaus Noronha Porto_Velho Recife Rio_Branco Santarem Sao_Paulo".split(" ")
                ]
            ],
            ja = "GoogleConsentMode",
            Ya = "GoogleAdsRDP",
            Wn = "FacebookLDU",
            ly = `${Wn}:strict`,
            Xa = "YouTubePrivacyEnhancedMode",
            Ja = "VimeoDNT",
            Za = "WistiaDNT";
        var fr = "8.33.3",
            dy, fy, gy, Hl = Qt && (((dy = Qt) == null ? void 0 : dy.src) || ((gy = (fy = Qt) == null ? void 0 : fy.href) == null ? void 0 : gy.baseVal)) || H.airgap;
        if (!Hl) {
            let e;
            if (Fo) {
                let t = GM.info.script.resources;
                e = (r => {
                    var n;
                    return (n = rt(t, ({
                        name: i
                    }) => i === r)) == null ? void 0 : n.url
                })(Lt)
            }
            if (!e) throw new mt("No airgap.js script URL detected.");
            Hl = e
        }
        var Ys = it(Hl, "href", "search", "hostname"),
            {
                search: Xs,
                href: Qn
            } = Ys,
            {
                telemetry: Ty,
                backendSync: XP,
                reportOnly: JP,
                monitoring: Fl,
                privacyPolicy: ZP,
                xdiAllowed: eh = ZP || "",
                regulateRequests: th,
                regulateCookies: Sy,
                regulateNavigation: oh,
                trackerOverrides: rh,
                telemetryPartitioning: nh,
                telemetryTrackingPurpose: sh,
                prioritizeTelemetry: ql,
                requireAuth: ih,
                signedIabAgreement: ah,
                sync: Gl,
                syncEndpoint: ch,
                syncEndpointMap: uy,
                mutationObserver: ph
            } = H,
            {
                trackerOverridesUnconsentedPurpose: tc = "SaleOfInfo",
                telemetrySyncPeriod: Py = 300,
                telemetryProcessingPeriod: hy = 5e3,
                initialTelemetrySyncPeriod: vy = 30,
                bdInteractionThreshold: Ry = 600,
                backendSyncEndpoint: Qs,
                autoExpire: ec,
                firstParty: Iy,
                syncGroups: Cy,
                quarantineSize: lh,
                partition: Ht,
                telemetrySampleRate: uh = 1,
                reqCookieSampleRate: mh = 1
            } = H,
            Bl = ah,
            Oy = Ba && sh || Yt,
            js = Ba && H.telemetryEndpoint || typeof telemetryEndpoint < "u" && telemetryEndpoint,
            Kn = +uh,
            Vl = Kn === 1 || Gs() < Kn,
            $n = +mh,
            Js = $n === 1 || Gs() < $n,
            be = (!Ba || Ty !== pe) && js && Vl,
            xy = Ty === "usage",
            My = ql === we,
            by = !ql || ql === "usage",
            Ly = ["origin", "host", "hostname", "port"],
            Zs = [];
        js && be && T(Zs, it(js, ...Ly));
        var ei = XP === we && Qs,
            Wl = [];
        Qs && ei && T(Wl, it(Qs, ...Ly));
        var gt = JP === we,
            co = Fl === "export",
            Ve = Fl !== pe && (be || gt || co || Fl === we),
            Ny = !gt && th !== pe,
            ti = !gt && Sy !== pe,
            Dy = ti && Sy === "2",
            oc = !gt && oh === we,
            _y = ph === we,
            ky = +(lh || 2621e3),
            Qe = ec ? +ec * 6e4 : 0,
            zl = "airgap://test 'self' data: blob:",
            wy = H.regulateAllScripts !== pe,
            Uy = () => {
                wy = !0
            },
            jn = () => wy;
        var yy, Kl = Ct(gt ? pe : (yy = H.csp) != null ? yy : "allow-known-hosts allow-subdomains"),
            Vr = !k(Kl, pe),
            rc = x(zs(eh), e => me(e, "host", "hostname", "port")),
            nc = nt(Ds, "Edge/"),
            Ey, $l = nt(Ds, "Safari/") && !nt(Ds, "Chrome/") && ((Ey = bg(Ds, /Version\/(\d+)/)) == null ? void 0 : Ey[1]),
            sc = ih === pe,
            Yn = rh !== pe,
            dh = [bl, "path", "url"],
            Ql = rt(dh, e => e === nh) || bl,
            zn = at(Gl != null ? Gl : ""),
            fh = ["consent", "quarantine"],
            Xn = !zn || k(za, zn) ? fh : zn === pe ? [] : Ie(/\s|,/, zn) ? Ct(zn) : [zn],
            my = uy && Ne(Ze(uy, f)),
            Ay, gr = ((Ay = my && rt(my, ([e]) => mr([e], Ye))) == null ? void 0 : Ay[1]) || ch;
        var Xt = (e, t = !0) => sc || Yg(e, t);
        var ic = e => {
            if (typeof e > "u") return;
            let t = f(e);
            return C(pp, t.headers) && (t.headers = ro(s(pf, t.headers))), C(bs, t.body) && (t.body = new St(t.body)), C(St, t.body) ? (t.body = s(Cn, t.body), t) : (C(Ym, t.body) && delete t.body, t)
        };
        var oi = [rr, Mr, xr, An, pd, cd];
        Bs && T(oi, oo);
        var Gy = ["fetch", "xhr", "worker", "eventsource"],
            Jn = he("stylesheet icon apple-touch-icon preconnect prefetch preload prerender dns-prefetch modulepreload pingback manifest shortcut import alternate webbundle", " ");
        var ac = !gt,
            V = () => !ac,
            gh = e => {
                ac = e
            },
            yh = e => {
                let t = !!(typeof e > "u" ? !ac : typeof e == "boolean" ? e : e != null && e.protection);
                return gt && t ? (Ce && g.warn("Cannot enable protection in report-only mode"), !1) : (gh(t), !0)
            },
            Hy = (e, t) => Xt(e, !1) ? yh(t) : !1,
            Fy = () => Kt(f({
                protection: ac,
                csp: Vr,
                monitoring: Ve,
                telemetry: !!be
            }));
        var jl = !1,
            pc = () => jl,
            Zn = [],
            qy = () => {
                ue(cc) && cc.length && (jl = !0, T(Zn, ...cc))
            },
            By = (e, ...t) => {
                if (!Xt(e)) throw new mt(Oo("overrideCookies"));
                if (t.length) {
                    jl = !0;
                    for (let r of M(t)) T(Zn, r);
                    h && g.log(`Cookie override${t.length>1?"s":""} registered:`, t)
                }
                return {
                    remove: () => {
                        for (let r of M(t)) {
                            let n = It(Zn, i => i === r);
                            n !== -1 && $e(Zn, n, 1)
                        }
                    }
                }
            },
            Vy = e => {
                if (Zn.length)
                    for (let t of M(Zn)) t(Wy(e))
            };
        var xo = [],
            zy = e => {
                h && g.log("Cookie watcher registered:", e);
                let t = T(xo, e) - 1;
                return {
                    remove: () => {
                        xo[t] !== e && (t = It(xo, r => r === e)), $e(xo, t, 1)
                    }
                }
            };
        var Ft = [],
            Ky = () => {
                if (Or) {
                    let e = _(xs, "changed").get,
                        t = _(xs, "deleted").get;
                    s(Pe, Or, "change", o => {
                        if (jg(o)) {
                            let r = s(e, o),
                                n = r.length,
                                i = s(t, o),
                                a = i.length;
                            h && (a && g.log("Cookie(s) deleted:", i), n && g.log("Cookie(s) changed:", r));
                            let p = n + a,
                                c = Ua({
                                    getKey: Gr,
                                    searchDepth: p
                                }),
                                l = De(new Ut(pg(_f + kr(o, "timeStamp").timeStamp))),
                                m = c(Ft, x(Je(r, i), E => ni(Ee(O({}, E), {
                                    timestamp: l
                                }), !1)));
                            for (let E of M(m))
                                if (Ve && T(Ft, E), be && si(E), xo.length) {
                                    let u = ri(E);
                                    for (let d of M(xo)) d(u)
                                }
                        }
                    })
                }
            },
            $y = () => {
                tt(Ft)
            };
        var yr = (...e) => L(Os, P, e),
            Qy = () => {
                P.fetch = async function(...e) {
                    let [t, o] = e, r = this, n = () => L(Os, r, e);
                    if (V()) return n();
                    let i = C(op, t) ? s(vg, t) : `${t}`,
                        a = f({
                            type: "fetch",
                            url: i,
                            persist: !0,
                            requestInit: xl(o)
                        }),
                        p = new W(typeof t == "string" ? a : O(O({}, xl(t)), a)),
                        c = p.serialize(),
                        l = () => (i !== c && (e[0] = c), n());
                    return await Wr(p) ? l() : new ge(m => {
                        let E = () => {
                            m(l())
                        };
                        p.mutator = E, ie(p)
                    })
                }
            };
        var Yl = new fn,
            Eh = (e, t) => (Ng(Yl, e, t), t),
            Ah = e => Dg(Yl, e) ? Lg(Yl, e) : null,
            Xl = !1,
            lc = e => {
                Xl = !0;
                let t = new dn;
                return s(ll, t, "GET", e, !1), s(ul, t), Xl = !1, t
            },
            jy = () => {
                let e = dn.prototype;
                e.open = function(...t) {
                    let o = this,
                        [r, n, i] = t,
                        a = new W({
                            type: "xhr",
                            url: n,
                            requestInit: {
                                method: r
                            },
                            omitCredentials() {
                                var l;
                                return s(Ig.set, o, !1), ((l = this.requestInit) != null ? l : this.requestInit = f()).credentials = "omit", !0
                            }
                        }),
                        p = a.serialize();
                    `${n}` != `${p}` && (t[1] = p);
                    let c = Xl ? !1 : !j(a);
                    return Eh(o, f({
                        url: p,
                        method: r,
                        async: i,
                        blocked: c
                    })), L(ll, o, t)
                }, e.send = function(...t) {
                    let o = this,
                        r = () => L(ul, o, t),
                        [n] = t,
                        i = Ah(o);
                    if (!i || !i.blocked && s(Cg, o) !== Rg) throw new rd("The XMLHttpRequest object's state must be OPENED.", "InvalidStateError");
                    let {
                        url: a,
                        method: p,
                        async: c,
                        blocked: l
                    } = i, m = new W({
                        type: "xhr",
                        url: a,
                        requestInit: {
                            method: p
                        },
                        persist: !0
                    });
                    if (n !== null && typeof n < "u" && ho(`${p}`) === "POST" && (m.requestInit.body = To(n) && so(n) ? ur(n) : n), l) {
                        c ? (m.mutator = () => (i.blocked = !1, r()), ie(m)) : (h && g.log("Synchronous XMLHttpRequest quarantined (unable to replay in-place)"), ie(m));
                        return
                    }
                    return r()
                }
            };
        var Th = async e => {
            if (Qg(e) && nt(e.originalPolicy, " airgap://test ")) {
                let t = e.blockedURI,
                    o = new W({
                        type: "CSPV",
                        url: t,
                        persist: !0
                    });
                be && Kr(o);
                let [r] = o.URLs;
                if (r) {
                    let {
                        protocol: n
                    } = me(r, "protocol");
                    if (!Ve && (n === "wss:" || n === "ws:")) return;
                    h && g.log("Caught network event via CSP:", t), ie(o)
                }
            }
        }, Yy = !1, Zl = !1, Jl = !0, eu = () => Zl && !Jl, Xy = (e = !1) => (eu() && (Ce && g.warn(`CSP already active. Reload${e?"ing":""} page for changes to take effect${e?"\u2026":"."}`), e && On()), Zl), Sh = (e, t, o, r, n) => {
            let i = ` 'unsafe-inline' 'unsafe-eval';
${jn()?"":"script-src * 'unsafe-inline' 'unsafe-eval' data: blob:;"}`;
            if (e || t) {
                let a = new B;
                if (e && Rt(e))
                    for (let [c, l] of dt(e)) {
                        let m = es(l);
                        (!o && n && !ve(m, ao) || Le(m, bt)) && (F(a, c), !o && r && nt(c, ".") && !nt(c, Fr) && !nt(c, ":") && F(a, `*.${c}`))
                    }
                if (t && Rt(t))
                    for (let [c, l] of dt(t))(n || Le(es(l), bt)) && F(a, c);
                let p = de(Te(a), " ");
                return `default-src ${zl} ${p}${i}`
            }
            return `default-src ${zl}${i}`
        }, Ph = (e, t, o) => Sh(Er, zr, e, t, o), hh = (e, t, o) => {
            if (!o && Jl && (Jl = !1), Xy()) return;
            let r = Ph(e, t, o);
            return Yy = !0, h && g.log(`CSP initialized:
`, r), r
        }, vh = (e, t) => {
            s(Pe, P, "securitypolicyviolation", Th);
            let o = Co("meta");
            o.httpEquiv = "Content-Security-Policy", o.content = e, pr(s(Mn, s(lr, oe), o)), Zl = !0, h && g.log(`CSP activated (${de(t,", ")})`)
        }, ii = (e = Kl) => {
            let t = !k(e, pe);
            if (!t) {
                h && g.log("CSP disabled");
                return
            }
            let o = k(e, "allow-subdomains"),
                r = k(e, "allow-known-hosts"),
                n = t && k(e, "strict") || !(o || r),
                i = Dr(oe, 'meta[http-equiv="Content-Security-Policy"]'),
                a = p => {
                    Xy(!0) || p && vh(p, e)
                };
            if (!Yy) {
                let p = hh(n, o, r);
                a(p)
            }
        };
        var Jy = Ke(nc || $l && +$l < 14 ? class {
            constructor() {
                let e = s(Ta, Ln, "", "");
                return vl(e, Lt)
            }
        } : class extends up {
            constructor(...e) {
                super(...e), vl(this, Lt)
            }
        });
        var uc = new Jy,
            Zy = "consent-resolution",
            eE = "consent-change",
            tE = "sync",
            oE = [],
            rE = () => {
                for (let [e, t] of M(oE)) s(Hp, uc, new ap(e, {
                    detail: t
                }))
            },
            tu = (e, t) => {
                nE() ? s(Hp, uc, new ap(e, {
                    detail: t
                })) : T(oE, [e, t])
            },
            ai = (e, t, o, r, n) => {
                tu(e, {
                    oldConsent: t,
                    consent: o,
                    changes: r,
                    signals: n
                })
            };
        var Rh = e => {
                let {
                    [Ka]: t, [$a]: o, [Qa]: r
                } = e || f();
                return f({
                    [Ka]: t && new Bo(t),
                    [$a]: o,
                    [Qa]: r && new Bo(r)
                })
            },
            sE = e => {
                let {
                    [Nl]: t, [Dl]: o
                } = Ze(e, () => f());
                return f({
                    [Nl]: Rh(t),
                    [Dl]: new ts(o)
                })
            },
            Ih = e => {
                Be && e.code !== e.ABORT_ERR && g.error("Error fetching policies", e)
            },
            ou = new Q,
            ru = new Q,
            Ch = e => {
                let t = ae(ru, e);
                return t || sE(lc(e).responseText)
            },
            Oh = async (e, t) => {
                let o = ae(ru, e) || ae(ou, e);
                if (o) return o;
                let r = new ge(async (n, i) => {
                    let a = await s(st, s(st, yr(e, {
                        signal: t
                    }), Ih), i);
                    if (a && a.body) {
                        let p = sE(await s(st, s(Ia, a), i));
                        J(ru, e, p), Hn(ou, e), n(p)
                    }
                });
                return J(ou, e, r), r
            }, iE = (e, t = null) => {
                let {
                    dataflows: o,
                    cookies: r
                } = e;
                if (o) {
                    let {
                        [Ka]: n, [$a]: i, [Qa]: a
                    } = o;
                    if (n && mc(Er, n), i)
                        for (let p of M(i)) ui(p, Vo, $r, !0);
                    Vr && a && (mc(zr, a), ii())
                }
                r && (pE(ci, r), pi()), h && g.log("Policies loaded:", e), tu("policy-update", {
                    url: t,
                    rules: e
                }), li()
            }, aE = async e => {
                iE(await Oh(e), e)
            }, cE = e => {
                iE(Ch(e), e)
            };
        var xh = e => {
                let t = s(Yp, oe) || s(_n, oe) || s(lr, oe) || s(Sa, s(Xe, oe));
                t ? eg(t, e) : s(Mn, s(Xe, oe) || oe, e)
            },
            lE = new Q,
            os = (...e) => {
                se(e, ({
                    kind: r
                }) => r === oy) && uE();
                let t = H.loadPoliciesSync === we,
                    o = [];
                for (let {
                        url: r,
                        id: n = r,
                        name: i,
                        type: a,
                        kind: p,
                        sync: c = t && p === Ll
                    }
                    of M(e)) {
                    let l = ae(lE, n),
                        m = l || new ge((E, u) => {
                            let d = me(ut(`${r}${Xs}`, Qn), "href").href;
                            if (h && g.log(`Loading ${i?`${i} from ${d}`:d}`), p === Ll) {
                                let y = (c ? cE : aE)(d);
                                E(y)
                            } else {
                                let y = Co("script");
                                zg(H, y), a && (y.type = a), y.defer = y.async = !!c, y.crossOrigin = "anonymous", y.src = d;
                                let A = () => {
                                        s(nr, y, "error", v), E()
                                    },
                                    v = () => {
                                        u(), s(nr, y, "load", A)
                                    };
                                s(Pe, y, "load", A, {
                                    once: !0
                                }), s(Pe, y, "error", v), xh(y)
                            }
                        });
                    l || J(lE, n, m), T(o, m)
                }
                return hn(o)
            };
        var {
            regime: su,
            defaultRegime: mE,
            regimeDetection: nu
        } = H, Mh = "ip-only", bh = "heuristics-only", mi, cu = () => {
            var o;
            if (typeof mi < "u") return mi;
            let {
                country: e,
                countryRegion: t
            } = lu || f();
            if (e || t) return mi = [e, t];
            if (Fo) {
                let r = ((o = b) == null ? void 0 : o.regimeHints) || "regime-hints.json",
                    n = me(ut(r, Ys.href), "href").href;
                try {
                    let {
                        country: i,
                        countryRegion: a
                    } = Ze(lc(n).responseText);
                    return !i && !a ? null : mi = [i, a]
                } catch (i) {
                    Be && g.error("Failed to request regime hints:", i)
                }
            }
            return mi = null
        }, Ar, iu = null, au = (e, t) => {
            var o, r;
            return su && !t || e !== Ml && dc && !((r = (o = rt(fc, ([n]) => se(n, i => e === i))) == null ? void 0 : o[1]) != null && r.length) ? !1 : (F(Ar, e), !0)
        }, Lh = (e, t) => e === t || se(TE, ([o, r]) => o === e && k(r, t) || o === t && k(r, e)), dE = e => {
            let t = Ho(e, /\s*;\s*/);
            return se(x(t, o => au(o, !0)), o => o)
        }, gE = !1, uE = () => {
            gE = !0
        }, yE = () => gE, fE, EE = () => {
            if (!fE) {
                fE = !0;
                let e = Tr();
                for (let {
                        1: t,
                        5: o,
                        6: r,
                        7: n
                    }
                    of M(uu))
                    if (ze(M(t)) || se(t, i => ve(e, i))) {
                        if (n)
                            for (let [i, a] of Ne(n)) H[i] = a;
                        !iu && typeof r == "string" && (iu = r), o && os(...o)
                    }
            }
        }, Tr = () => {
            if (Ar) return Ar;
            if (Ar = new B, Fo) {
                let {
                    tcmRegime: e
                } = qe;
                if (e && (h && g.log(`Using regime override: ${e}`), dE(e))) return Ar
            }
            if (su) dE(su);
            else if (nu !== pe) {
                let e, t = () => (e || (e = s(dg, s(el, dp)).timeZone), e),
                    o = a => se(s(Zp, _o), p => se(a, c => nt(ho(p), ho(c)))),
                    r = a => se(s(Zp, _o), p => se(_e(he(p, "-"), 1), c => k(a, ho(c)))),
                    [n, i] = cu() || [];
                for (let [a, p, c, l, m] of M(uu)) {
                    let E = nu !== bh && n && se(a, ([u, d]) => Lh(n, u) && (!d || i === d)) || nu !== Mh && ((ue(l) ? o(l) : l && se(a, ([u]) => u && r([u]))) || ue(m) && se(m, u => nt(t(), u)));
                    if (c !== "out" ? E : !E)
                        for (let u of M(p)) au(u)
                }
            }
            return ze(Se(Ar)) && (!mE || !au(mE)) && F(Ar, Ml), Ar
        }, AE = () => iu, pu = (e, t = Tr()) => {
            let o = new B;
            for (let [r, n] of M(e))
                for (let i of Se(t))
                    if (k(r, i))
                        for (let a of M(n)) F(o, a);
            return o
        };
        var mu = [ly, Ya, Ja, Xa],
            Nh = [ja, Wn],
            Dh = [Za],
            du = _e(Je(mu, Dh, Nh), 0, -1),
            SE = Je(_e(du, 2), Wn),
            fu = "ad_user_data",
            gu = "ad_personalization",
            yu = "ad_storage",
            Eu = "analytics_storage",
            Au = "functionality_storage",
            Tu = "personalization_storage",
            Su = "security_storage",
            PE = "Analytics",
            gc = "Advertising",
            yc = "Functional";
        var Ac = [],
            Ec, hE = () => {
                Ec == null || Ec()
            },
            _h = e => {
                let t = [],
                    o = Yn ? e === Fr ? du : e ? Ct(e) : SE : [];
                return R(o, r => {
                    let n = ba(r, ":");
                    if (n !== -1) {
                        let i = vo(r, 0, n),
                            a = vo(r, n + 1),
                            p = x(he(a, ";"), c => he(c, "="));
                        T(t, [i, p])
                    } else T(t, [r])
                }), t
            },
            vE = e => {
                var re;
                let t = _h(e),
                    o = /^(www\.)?youtube\.com$/,
                    r = /(?:^|.*\.)facebook\.com$/,
                    n = /(?:^|.*\.)doubleclick\.net$/,
                    i = (w, Y) => rt(w, ([K]) => K === Y),
                    a = !!i(t, Xa),
                    p = i(t, ja),
                    c = p == null ? void 0 : p[1],
                    l = i(t, Wn),
                    m = l == null ? void 0 : l[1],
                    E = !!(m && rt(m, ([w]) => w === "strict")),
                    u = !!i(t, Ya),
                    d = !!i(t, Ja),
                    y = !!i(t, Za),
                    A = l && ((re = rt(l, ([w]) => w === "mode")) == null ? void 0 : re[1]),
                    v = A === "fb-auto",
                    I = A === "off";
                T(Ac, ...se(t, ([w]) => k(mu, w)) ? [f({
                    unconsented: [tc],
                    override: w => {
                        R(w.URLs, (Y, K) => {
                            if (Y) {
                                let ne = me(Y, "hostname", "pathname", "href", "searchParams"),
                                    {
                                        hostname: je,
                                        pathname: et,
                                        searchParams: He
                                    } = ne;
                                if (a && Ie(o, je) && (ft(et, "/embed/") || ft(et, "/s/player/"))) {
                                    ne.hostname = ct(je, o, (Zt, wt) => `${wt||""}youtube-nocookie.com`), w.urls[K] = ne.href;
                                    return
                                }
                                if (u && Ie(n, je)) {
                                    s(vt, He, "rdp", "1"), w.urls[K] = ne.href;
                                    return
                                }
                                if (E && Ie(r, je)) {
                                    s(vt, He, "dpo", I ? "" : "LDU"), I || (s(vt, He, "dpoco", v ? "0" : "1"), s(vt, He, "dpost", v ? "0" : "1000")), w.urls[K] = ne.href;
                                    return
                                }
                                d && je === "player.vimeo.com" && Ie(/^\/video\/\d+\/?$/, et) && (s(vt, He, "dnt", "1"), w.urls[K] = ne.href), y && je === "fast.wistia.net" && ft(et, "/embed/iframe") && (s(vt, He, "doNotTrack", "true"), w.urls[K] = ne.href)
                            }
                        })
                    }
                })] : []), h && g.log(`Privacy-enhancing tracker overrides activated: ${de(x(t,([w])=>w),", ")}`);
                let S = w => w ? "granted" : "denied",
                    N = !1,
                    $ = null,
                    te = {},
                    ee = () => {
                        var Zt;
                        if (!p) return;
                        let w = (Zt = P).dataLayer || (Zt.dataLayer = []);

                        function Y() {
                            w.push(arguments)
                        }
                        let K = (wt, ln = tc) => {
                                var Bi;
                                let Qo = c && ((Bi = rt(c, ([Vi]) => Vi === wt)) == null ? void 0 : Bi[1]);
                                return Qo === we || Qo !== pe && Le(ke(he(Qo || ln, ",")))
                            },
                            ne = {
                                [yu]: S(K(yu, gc)),
                                [fu]: S(K(fu, gc)),
                                [gu]: S(K(gu, gc)),
                                [Eu]: S(K(Eu, PE)),
                                [Au]: S(K(Au, yc)),
                                [Tu]: S(K(Tu, yc)),
                                [Su]: S(K(Su, yc))
                            };
                        if (!qo(Fe(ne), te, ne)) return;
                        te = ne;
                        let et = [
                                ["consent", N ? "update" : "default", te]
                            ],
                            He = !K("ads_data_redaction", "SaleOfInfo");
                        (He && $ === null || $ !== null && He !== $) && ($ = He, T(et, ["set", {
                            ads_data_redaction: He
                        }])), R(et, wt => {
                            Y(...wt)
                        }), N = !0
                    },
                    Z = () => {},
                    Ge = {
                        enumerable: !0,
                        configurable: !0
                    },
                    At = !1,
                    Wt = () => {
                        if (!l) return;
                        let w = K => {
                                K("dataProcessingOptions", ["LDU"], ...I ? [] : [v ? 0 : 1, v ? 0 : 1e3])
                            },
                            {
                                fbq: Y
                            } = P;
                        C(Cs, Y) && (Y != null && Y.queue) ? w(Y) : Me(P, "fbq", O({
                            get: Z,
                            set: K => {
                                Me(P, "fbq", Ee(O({
                                    value: K
                                }, Ge), {
                                    writable: !0
                                })), Me(K, "queue", O({
                                    get: Z,
                                    set: ne => {
                                        Me(K, "queue", Ee(O({
                                            value: ne
                                        }, Ge), {
                                            writable: !0
                                        })), ne && w(K)
                                    }
                                }, Ge))
                            }
                        }, Ge)), At = !0
                    },
                    xt = !1,
                    ce = () => {
                        if (!y) return;
                        let w = Y => {
                            T(Y, {
                                id: "_all",
                                options: {
                                    doNotTrack: !0
                                }
                            })
                        };
                        R(["_wq", "_wcq"], Y => {
                            let {
                                [Y]: K
                            } = P;
                            ue(K) ? w(K) : Me(P, Y, O({
                                get: Z,
                                set: ne => {
                                    ue(ne) && w(ne), Me(P, Y, Ee(O({
                                        value: ne
                                    }, Ge), {
                                        writable: !0
                                    }))
                                }
                            }, Ge))
                        }), xt = !0
                    };
                (Ec = () => {
                    ee();
                    let w = new B;
                    F(w, tc), Le(w) || (At || Wt(), xt || ce())
                })()
            };
        var Qr = [],
            Pu = e => {
                if (ue(e.unconsented)) {
                    let t = e;
                    t.unconsented = ke(e.unconsented)
                }
            },
            RE = () => {
                ue(Tc) && (R(Tc, Pu), T(Qr, ...Tc)), Yn && (vE(AE() || H.trackerOverrides || ""), R(Ac, Pu), T(Qr, ...Ac))
            },
            IE = (e, ...t) => {
                if (!Xt(e)) throw new mt(Oo("override"));
                return R(t, r => {
                    Pu(r), T(Qr, r)
                }), h && g.log(`Request override${t.length>1?"s":""} registered:`, t), {
                    remove: () => {
                        R(t, r => {
                            let n = It(Qr, i => i === r);
                            n !== -1 && $e(Qr, n, 1)
                        })
                    }
                }
            },
            Sc = e => {
                Qr.length && R(Qr, ({
                    unconsented: t,
                    matcher: o,
                    override: r
                }) => {
                    if (t && Le(t, bt)) return;
                    let n = typeof o == "string" ? new eo(o) : o;
                    if (typeof r != "string") {
                        let i = OE(e);
                        r(i, n);
                        return
                    }
                    typeof n < "u" && R(e.URLs, (i, a) => {
                        let p = i ? me(i, "href").href : `${e.urls[a]}`;
                        Ie(n, p) && (e.urls[a] = ct(p, n, r))
                    })
                }), Pc(e) && (e.omitCredentials() || e.deny())
            },
            CE = e => jr({
                type: Lt,
                url: e
            }).serialize();
        var di, fi, rs, gi, ns, yi, hc, W = class {
            constructor({
                type: t,
                url: o,
                persist: r,
                serialize: n,
                omitCredentials: i,
                requestInit: a,
                mutator: p,
                target: c,
                timestamp: l = De()
            }, m = !0, E = !0) {
                Oe(this, di, void 0);
                Oe(this, fi, void 0);
                Oe(this, rs, null);
                Oe(this, gi, void 0);
                Oe(this, ns, void 0);
                Oe(this, yi, void 0);
                Oe(this, hc, void 0);
                G(this, "allow", () => {
                    this.allowed = !0
                });
                G(this, "deny", () => {
                    this.allowed = !1
                });
                G(this, "type");
                G(this, "persist");
                G(this, "urls", Me([], 0, {
                    enumerable: !0,
                    configurable: !1,
                    get: () => this.url,
                    set: t => {
                        this.url = t
                    }
                }));
                G(this, "URLs", []);
                G(this, "timestamp");
                G(this, "target");
                G(this, "requestInit");
                G(this, "mutator");
                G(this, "serialize", () => le(this, ns) ? le(this, ns).call(this) : this.url);
                G(this, "omitCredentials", () => {
                    var t, o;
                    return (o = le(this, hc)) != null ? o : Ae(this, hc, vc(this) && (((t = le(this, yi)) == null ? void 0 : t.call(this)) || ss(this)))
                });
                G(this, "toJSON", () => {
                    let {
                        type: t,
                        url: o,
                        requestInit: r,
                        timestamp: n
                    } = this;
                    return {
                        type: t,
                        url: typeof o == "string" ? o : `${o}`,
                        requestInit: ic(r),
                        timestamp: n
                    }
                });
                Ae(this, di, E), this.type = t, this.url = o, this.persist = r, this.mutator = p, this.target = c, this.requestInit = a, this.timestamp = l, n && Ae(this, ns, n), i && Ae(this, yi, i), m && Sc(this)
            }
            get purposes() {
                var t;
                return (t = le(this, rs)) != null ? t : Ae(this, rs, Ai(this, le(this, di)))
            }
            set purposes(t) {
                if (!C(B, t)) throw new $t("PendingEvent.purposes must be a Set");
                let o = le(this, rs);
                o === null ? Ae(this, rs, o = new B) : Ro(o);
                for (let r of Se(t)) {
                    if (typeof r != "string") throw new $t("Tracking purposes must be strings");
                    F(o, r)
                }
            }
            get allowed() {
                var t;
                return (t = le(this, gi)) != null ? t : Le(this.purposes, bt)
            }
            set allowed(t) {
                if (t !== null && typeof t != "boolean") throw new $t("Pending event allow/deny state must be true, false, or null");
                Ae(this, gi, t)
            }
            get url() {
                return le(this, fi)
            }
            set url(t) {
                Ae(this, fi, t), this.URLs[0] = _r(t)
            }
        };
        di = new WeakMap, fi = new WeakMap, rs = new WeakMap, gi = new WeakMap, ns = new WeakMap, yi = new WeakMap, hc = new WeakMap;
        Ke(W);
        var Ei = e => new W(e, !1);
        var is = !!fo,
            Ic = "tcms",
            ME = !(Ic in Uo),
            xE = () => {
                var e, t;
                return `${(t=(e=Uo)[Ic])!=null?t:e[Ic]=Gs()}`
            },
            kh = 80,
            Ti, Yr, Cc = 0,
            bE = () => {
                Yr || (Yr = new B, F(Yr, xE())), is && !Ti && (Ti = new fo("tcm"), s(Pe, Ti, "message", e => {
                    let {
                        tcm: t,
                        id: o
                    } = Dn(e, "data").data || f();
                    if (t === "ping")
                        if (o) F(Yr, o);
                        else {
                            let r = xE();
                            s(Dp, Ti, {
                                tcm: "ping",
                                id: r
                            }), F(Yr, r)
                        }
                }))
            },
            Rc, wh = async (e = kh) => Cc += await (Rc != null ? Rc : Rc = await (() => {
                bE();
                let t = io(Yr);
                return fo ? (s(Dp, Ti, {
                    tcm: "ping"
                }), new ge(o => {
                    s(Pt, P, () => {
                        o(t - Nn(io(Yr), Cc)), Rc = null
                    }, e)
                })) : t
            })()), Uh = () => Cc, Gh = () => {
                Cc = 0, delete Uo.tcms
            };
        var LE = () => {
                let e = Uh();
                return Gh(), e
            },
            NE = () => fo ? (bE(), wh(), !0) : !1;
        var po = [],
            DE = () => {
                ue(hu) && T(po, ...hu)
            },
            _E = e => {
                h && g.log("Request watcher registered:", e);
                let t = T(po, e) - 1;
                return {
                    remove: () => {
                        po[t] !== e && (t = It(po, r => r === e)), $e(po, t, 1)
                    }
                }
            };
        var Hh = 2,
            Wo = [],
            kE = () => {
                let e = PerformanceEntry ? ua(PerformanceEntry) : {},
                    t = f();
                for (let [c, l] of M(Ne(e))) {
                    let m = l.get;
                    m && (t[c] = m)
                }
                let o = PerformanceResourceTiming ? ua(PerformanceResourceTiming) : {},
                    r = f();
                for (let [c, l] of M(Ne(o))) {
                    let m = l.get;
                    m && (r[c] = m)
                }
                let n = [r, t],
                    i = c => {
                        let l = f();
                        for (let m of M(n))
                            for (let [E, u] of M(Ne(m))) l[E] = s(u, c);
                        return l
                    },
                    a = Fn([...x(["iframe", "object", "embed", "frame"], c => [c, "DOM:view"]), ["script", "DOM:script"],
                        ["css", "DOM:style"],
                        ["link", "DOM:link"],
                        ["img", "DOM:image"],
                        ["video", "DOM:video"],
                        ["audio", "DOM:audio"],
                        ["track", "DOM:track"],
                        ["xmlhttprequest", "xhr"],
                        ["other", "DOM:unknown"],
                        ["", "DOM:unknown"]
                    ]),
                    p = ({
                        name: c,
                        fetchStart: l,
                        entryType: m,
                        initiatorType: E = m
                    }) => new W({
                        type: Re(a, E) ? ae(a, E) : E,
                        url: c,
                        timestamp: De(new Ut(l != null ? l : Mt()))
                    }, !1);
                if (Ve) {
                    if (Rs) {
                        s(Pe, Tt, "resourcetimingbufferfull", () => {
                            s(wf, Tt)
                        }), s(kf, Tt, 1e3);
                        let l = new Rs(m => {
                            let E = fe(x(x(s(Df, m), i), p), u => {
                                var v;
                                let {
                                    url: d
                                } = u;
                                if (typeof d > "u") return !1;
                                let y = Wo.length,
                                    A = y - Nn(y, Hh);
                                for (; y-- > A;) {
                                    let I = Wo[y];
                                    if (d === I.url && !((v = I == null ? void 0 : I.requestInit) != null && v.body)) return !1
                                }
                                return !0
                            });
                            for (let u of M(E))
                                if (gt && h && g.log("Request sent:", u), co && T(Wo, u), be && Kr(u), po.length) {
                                    let d = Xr(u);
                                    for (let y of M(po)) y(d)
                                }
                        });
                        s(Nf, l, {
                            entryTypes: ["resource", "navigation"]
                        })
                    }
                    fo && NE()
                }
            },
            wE = () => {
                tt(Wo)
            };
        var as = () => {
                $y(), wE()
            },
            UE = () => {
                h && g.log("Monitoring mode enabled"), Ky(), kE()
            };
        var GE = () => {
            if (Ms) {
                let e = Ms.prototype,
                    {
                        set: t
                    } = e;
                e.set = async function(...o) {
                    let r = () => L(t, this, o);
                    if (V()) return r();
                    let n = () => (Ve && T(Ft, i), pc() && o.length <= 1 ? o[0] = i.toJSON() : (o[0] = i.name, o[1] = i.value), r()),
                        i = new qt(Ee(O({}, o.length <= 1 ? o[0] : {
                            name: o[0],
                            value: o[1]
                        }), {
                            mutator: n
                        }));
                    return await Oc(i) ? n() : new ge(a => {
                        i.mutator = () => a(n()), xc(i)
                    })
                }
            }
        };
        var HE = ["timestamp", "expires", "maxAge", "domain", "path", "sameSite", "secure"],
            FE = x(HE, at),
            Fh = _e(FE, -1),
            qh = e => x(he(e, "="), Gn),
            Bh = (e, t) => {
                let o = he(e, ";"),
                    [r, n = ""] = qh(o[0]);
                if (!r && !n) return null;
                let i = f();
                for (let a of _e(o, 1)) {
                    let [p, c] = x(he(a, "="), Gn), l = at(ct(p, /[^a-z]/i, "")), m = Un(FE, l);
                    m !== -1 && (i[HE[m]] = k(Fh, l) ? !!c : c)
                }
                return new qt(O(O({
                    name: r,
                    value: n
                }, i), t))
            },
            qE = () => {
                Me(ht.prototype, "cookie", Ee(O({}, bn), {
                    set(...e) {
                        let t = () => L(bn.set, this, e);
                        if (V()) return t();
                        let [o] = e, r = () => (co && n !== null && T(Ft, n), t()), n = Bh(o, {
                            mutator: r
                        });
                        return n === null ? r() : (pc() && (e[0] = Jr(n)), cs(n) ? r() : xc(n))
                    }
                }))
            };
        var BE = () => {
            qE(), GE()
        };
        var {
            regulationCacheSize: Vh,
            regulationCacheGcInterval: Wh,
            regulationCacheKeySize: zh
        } = H, vu = +(Vh || Xg), Kh = +(zh || Jg), VE = +(Wh || Zg), Mo = !!vu, ps = Mo && new Q, ls = Mo && new Q, WE = ({
            URLs: e,
            urls: t,
            requestInit: o
        }) => {
            let r = o != null && o.body ? null : de(x(e, (n, i) => n ? me(n, "href").href : s(go, P, t[i])), `
`);
            return r !== null && r.length > Kh ? null : r
        }, $h = () => {
            Rt(ps) + Rt(ls) >= vu && (Io(ps), Io(ls))
        }, zE = () => {
            Mo && VE && vu !== -1 && s(gn, P, $h, VE)
        };
        var Ru = [],
            KE = !1,
            Si = (e, t) => typeof e < "u" && e !== null ? `;${t}=${e}` : "",
            Jr = (e, t = !1) => {
                let {
                    expires: o,
                    domain: r,
                    path: n,
                    maxAge: i,
                    secure: a,
                    sameSite: p
                } = e;
                return `${Gr(e,t)}${Si(r,"Domain")}${Si(n,"Path")}${typeof o=="number"?Si(ng(new Date(o)),"Expires"):""}${Si(i,"Max-Age")}${Si(p,"SameSite")}${a?";Secure":""}`
            },
            YE = (e, t) => {
                if (e && t)
                    for (let o of M(ue(t) ? t : x(Ne(t), ([r, n]) => ({
                            cookie: r,
                            purposes: n,
                            hosts: []
                        })))) {
                        let {
                            cookie: r,
                            regex: n,
                            hosts: i
                        } = o, a = es(o.purposes), p = n && typeof r == "string" ? new eo(r) : r;
                        C(eo, p) && T(Ru, [p, C(eo, r) ? s(In, p) : r]), T(e, f(O({
                            cookie: p,
                            purposes: a
                        }, i && {
                            hosts: ke(i)
                        })))
                    }
            },
            ts = class extends Do {
                constructor(t) {
                    super(), YE(this, t)
                }
            };
        Ke(ts);
        var ci = new ts,
            pE = (e, t) => {
                for (let o of M(t)) {
                    let r = o.cookie,
                        n = It(e, ({
                            cookie: i
                        }) => i === r);
                    n !== -1 ? $e(e, n, 1, o) : T(e, o)
                }
                h && g.log("Cookie purpose map", x)
            },
            XE = () => {
                KE || (KE = !0, YE(ci, eA), qy(), BE(), h && (g.log("Cookie regulation active"), g.log("Auto-clearing disallowed cookies")), pi())
            },
            Iu = e => `${e.name||e.value||""}`,
            Qh = ({
                expires: e,
                maxAge: t
            }) => typeof e == "number" && e <= Mt() || typeof t < "u" && +t <= 0,
            Pi = (e, t = !0) => {
                let o = Gr(e);
                if (Mo && Re(ls, o)) return ae(ls, o);
                let r = new B;
                if (Qh(e)) F(r, Yt);
                else {
                    let n = Iu(e),
                        {
                            domain: i
                        } = e,
                        a = fe(ci, ({
                            cookie: p,
                            hosts: c
                        }) => (typeof p == "string" ? p === n || ft(o, p) : Ie(p, Dy ? o : n)) && (!c || i && mr(Te(c), i)));
                    if (a.length)
                        for (let {
                                purposes: p
                            }
                            of M(a))
                            for (let c of Se(p)) F(r, c);
                    else F(r, ao)
                }
                return t && h && g.log(`Purposes for cookie: ${Jr(e)}`, r), Mo && J(ls, o, r), r
            },
            JE = async (e, t = !0) => Pi(e, t), jh = e => {
                let t;
                return typeof e > "u" || e === "/" || ft(t = Fs("href").href, me(ut(e, t), "href").href)
            }, Yh = !!(Ve && Or), cs = (e, t = !0) => {
                let o = gt || e.allowed;
                if (t && (Ve && o && T(Ft, e), be && (!Yh || !o || !jh(e.path)) && si(e), xo.length)) {
                    let r = ri(e);
                    for (let n of M(xo)) n(r)
                }
                return o
            }, Oc = async (e, t = !0) => cs(e, t), ZE = e => {
                Ve && T(Ft, e), s(bn.set, oe, Jr(e))
            }, QE, jE, Xh = (jE = (QE = Ms) == null ? void 0 : QE.prototype) == null ? void 0 : jE.getAll, Jh = e => {
                e.expires = Mt(), s(bn.set, oe, Jr(e))
            }, $E = (e, t) => {
                if (io(e))
                    for (let o of Se(e)) {
                        let r = new qt({
                            name: o,
                            value: ""
                        });
                        cs(r, t) || Jh(r)
                    }
            }, pi = async () => {
                let e = new B,
                    t = new B;
                if (Or)
                    for (let {
                            name: o
                        }
                        of M(await s(Xh, Or))) F(e, o);
                for (let {
                        cookie: o
                    }
                    of M(ci)) typeof o == "string" && !ve(e, o) && F(t, o);
                $E(e, !0), $E(t, !1)
            };
        var Zh = 0,
            hi, Sr, Zr, en = class {
                constructor(t) {
                    Oe(this, hi, void 0);
                    Oe(this, Sr, void 0);
                    Oe(this, Zr, null);
                    G(this, "getNode", () => {
                        let t = le(this, Sr);
                        if (t === null) throw new ip("Attempted to reference a released node");
                        return t
                    });
                    G(this, "getLiveNode", () => {
                        let t = le(this, Zr);
                        if (t) return t;
                        let o = le(this, Sr);
                        if (o === null) throw new ip("Attempted to reference a released node");
                        if (o && s(ot, o) !== oe) {
                            h && g.log("Converting quarantined mutation from proxy document");
                            let r = Dr(oe, `[data-airgap-id="${le(this,hi)}"]`);
                            if (r !== null) return Ae(this, Zr, r), h && g.log("Found corresponding node", r), r;
                            Ce && g.warn("Unable to locate corresponding node from quarantined mutation in proxy document")
                        }
                        return o
                    });
                    G(this, "release", () => {
                        let t = le(this, Sr),
                            o = le(this, Zr);
                        if (o !== null) {
                            let r = wr(o),
                                n = () => delete r.airgapId;
                            tn(s(ot, t)) ? Ue(o, n) : n(), Ae(this, Zr, null)
                        }
                        if (t && s(ot, t) !== oe) {
                            let r = s(ot, t);
                            r && s(Xe, r) && s(nl, s(Xe, r)) && s(Ef, r, s(Xe, r))
                        }
                        Ae(this, Sr, null)
                    });
                    let o = wr(t),
                        r = o.airgapId || `${Zh++}`;
                    Ae(this, hi, r), Ae(this, Sr, t);
                    let n = () => {
                        o.airgapId = r
                    };
                    s(nl, t) && tn(s(ot, t)) ? Ue(t, n) : n()
                }
            };
        hi = new WeakMap, Sr = new WeakMap, Zr = new WeakMap;
        Ke(en);
        var vi, zo = class {
            constructor(t) {
                Oe(this, vi, void 0);
                G(this, "getNode", () => le(this, vi));
                G(this, "getLiveNode", this.getNode);
                G(this, "release", () => {});
                Ae(this, vi, t)
            }
        };
        vi = new WeakMap;
        Ke(zo);
        var tA = e => e && (C(en, e) || C(zo, e));
        var bc = () => H.uspapi === we,
            cA = () => H.tcf === we,
            Mc = `__${ey}`,
            Ri = `__${ty}`,
            pA = "Locator",
            ev = `${Mc}${pA}`,
            tv = `${Ri}${pA}`,
            Cu = () => {
                let [e] = cu() || [], t = e === "US", {
                    confirmed: o,
                    prompted: r,
                    purposes: n
                } = yt(), {
                    SaleOfInfo: i
                } = n;
                return `1${t?o||r?"Y":"N":"-"}${t?i?"N":"Y":"-"}${Bl==="yes"?"Y":Bl==="no"?"N":"-"}`
            },
            ov = (e, t) => {
                let o = e.document,
                    r = !!e[t];
                if (!r) {
                    let n = Co("iframe");
                    n.style.display = "none", n.name = t, (s(Xe, o) || o).appendChild(n)
                }
                return !r
            },
            lA = (e, t, o) => {
                e === "getUSPData" && t && t >= 1 && typeof o == "function" && o({
                    version: 1,
                    uspString: Cu()
                }, !0)
            },
            oA = !0,
            rA = [],
            rv = (...e) => {
                let [t, o, r, n] = e;
                if (!t && !o && !r && !n) return rA;
                let i = typeof r == "function";
                t === "setGdprApplies" ? n && o === 2 && typeof n == "boolean" && (oA = n, i && r("set", !0)) : t === "ping" && i ? r({
                    gdprApplies: oA,
                    cmpLoaded: !1,
                    cmpStatus: "stub",
                    gvlVersion: 31
                }) : T(rA, e)
            },
            nA = (e, t, o, r) => {
                let {
                    command: n,
                    version: i,
                    callId: a,
                    parameter: p
                } = r;
                o(n, i, (c, l) => {
                    s(Jm, e, {
                        [`${t}Return`]: {
                            returnValue: c,
                            success: l,
                            callId: a
                        }
                    }, Fr)
                }, p)
            },
            sA = "Call",
            iA, nv = e => {
                var r, n;
                let {
                    data: t,
                    source: o
                } = Dn(e, "data", "source");
                if (o) {
                    let i = bc() && ((r = t == null ? void 0 : t[`${Mc}${sA}`]) != null ? r : null);
                    i && nA(o, Mc, lA, i);
                    let a = cA() && ((n = t == null ? void 0 : t[`${Ri}${sA}`]) != null ? n : null);
                    a && nA(o, Ri, P[Ri], a)
                }
            },
            aA = (e, t, o, r, n) => {
                let i = e,
                    a, {
                        ancestorOrigins: p
                    } = No,
                    c = p && Po(Te(p), l => l === Ao);
                for (; i;) {
                    if (c) {
                        if (i[r]) {
                            a = i;
                            break
                        }
                    } else try {
                        if (i[r]) {
                            a = i;
                            break
                        }
                    } catch (l) {}
                    if (i === e.top) break;
                    i = i.parent
                }
                a || (ov(e, r), e[o] = n, iA || (iA = !0, s(Pe, e, "message", nv))), h && g.log(`IAB ${t} API integration active`)
            },
            uA = e => {
                bc() && aA(e, "USP", Mc, ev, lA), cA() && aA(e, "TCF stub", Ri, tv, rv)
            };

        function sv(e) {
            return f(ro(fe(Ne(e), ([, t]) => typeof t == "boolean")))
        }
        var mA = async (e, t, o) => {
            let r = bc() ? Cu() : void 0,
                n = await s(st, new ge(c => P.__gpp("getFullString", c)), () => {}),
                i = Hr(o, Nt, !1),
                a = {
                    purposes: sv(i.purposes),
                    usp: r,
                    gpp: n,
                    airgapVersion: fr,
                    timestamp: i.timestamp,
                    confirmed: i.confirmed,
                    prompted: i.prompted,
                    updated: i.updated,
                    metadata: i.metadata
                };
            return s(Pn, s(st, yr(e, f({
                method: "POST",
                mode: "cors",
                body: We({
                    token: t,
                    partition: Ht || Lc,
                    consent: a
                }),
                credentials: "omit"
            })), c => {
                Be && g.error("Failed to sync remote consent", c)
            }), c => {
                try {
                    return s(ig, c)
                } catch (l) {
                    Be && g.error("Failed to parse response body", l);
                    return
                }
            })
        };
        var dA = "ConsentManager:Sync";
        var fA = "/.well-known/xdi";
        var iv, av = async () => iv || Pr.xdi.connect(gr);
        async function gA(e, t, o, r) {
            let n = await av(),
                i = k(r, "consent"),
                a = k(r, "quarantine"),
                p = await n.run(dA, f(Ee(O(O({
                    reset: t,
                    deep: o,
                    sync: fe(r, c => k(Xn, c)),
                    partition: Ht
                }, !t && i && f({
                    consent: e
                })), !t && a && f({
                    quarantine: f(O(O({}, Ot && f({
                        requests: x(pt, c => c.toJSON())
                    })), _t && f({
                        cookies: x(Dt, c => c.toJSON())
                    })))
                })), {
                    ancestors: ke(Ao)
                })));
            return f(Ee(O({}, p), {
                syncedConsent: i,
                syncedQuarantine: a
            }))
        }
        async function yA(e, t, o) {
            let {
                purposes: r,
                confirmed: n,
                timestamp: i,
                prompted: a,
                updated: p,
                metadata: c,
                metadataTimestamp: l
            } = t, m = !!(!o && (e.updated || p || qo(Te(lo), e.purposes, r)));
            h && g.log("Consent from sync: ", t), await us(r, !!n, !!a, c, !1, i, m, l)
        }

        function EA(e) {
            let t = ue(e) ? {
                    requests: e
                } : e,
                {
                    requests: o,
                    cookies: r
                } = t;
            Ot && o && T(pt, ...x(Ga(pt, o), Ei)), _t && r && T(Dt, ...x(Ha(Dt, r), Nc))
        }
        var {
            syncPeriod: cv = 1800,
            localSync: pv
        } = H, Ou, lv = k(Xn, "consent"), uv = k(Xn, "quarantine"), mv = pv === pe, bo = !lv && !uv || !gr, TA = H.deferSync === we, AA = !1, ms = !1, Bt = async ({
            sync: e = Xn,
            reset: t = !1,
            deep: o = !0,
            backend: r = !0,
            local: n = !0,
            auth: i
        } = f()) => {
            if (i && (Ou = i), Qe && Dc(Qe), bo) return;
            if (h && g.log("Private cross-domain sync queued"), !gr) {
                Ce && g.warn("Sync endpoint unspecified");
                return
            }
            let a = yt(),
                {
                    purposes: p
                } = a,
                c = ei && r && Ou && a;
            ms && (h && g.log("Pending sync in progress..."), await ms);
            let l = !1,
                m = !1,
                E = async u => {
                    if (c) {
                        let d = u != null ? u : a,
                            y = d.metadata ? {
                                metadata: {
                                    tcmp: d.metadata.tcmp
                                }
                            } : void 0,
                            A = await mA(Qs, Ou, O(O({}, d), y != null ? y : {}));
                        if (!A) return;
                        let {
                            purposes: v,
                            confirmed: I,
                            prompted: S,
                            timestamp: N,
                            updated: $
                        } = A;
                        await us(v, !!I, !!S, d.metadata, !1, N, $), m = !0
                    }
                };
            if (ms = new ge(async u => {
                    if (n && !mv) {
                        let {
                            consent: d,
                            quarantine: y,
                            syncedConsent: A,
                            syncedQuarantine: v
                        } = await gA(a, t, o, e);
                        A && d && (await yA(a, d, t), l = !0), v && y && EA(y), await E(l ? d : void 0), xu(!1), AA || (s(gn, P, Bt, +cv * 1e3), AA = !0)
                    } else await E();
                    h && g.log("Sync complete"), u()
                }), s(st, ms, u => {
                    be && Ii(u)
                }), await ms, l || m) {
                let u = yt(),
                    d = qo(Te(lo), p, u.purposes);
                ai(tE, a, u, d)
            }
            ms = !1
        };
        var pt = [],
            on = [],
            Dt = [],
            Ci = [],
            dv = () => {
                (Ot || _t) && xu()
            },
            SA = !1,
            fv = () => {
                if (!SA) {
                    let {
                        tcmQuarantine: e
                    } = qe;
                    if ((Ot || _t) && e) {
                        let t = Ze(e, () => []);
                        if (ue(t)) Ot && T(pt, ...x(t, Ei));
                        else {
                            if (Ot) {
                                let {
                                    requests: o = []
                                } = t;
                                T(pt, ...x(o, Ei))
                            }
                            if (_t) {
                                let {
                                    cookies: o = []
                                } = t;
                                T(Dt, ...x(o, Nc))
                            }
                        }
                    }
                    h && (Ot && g.log(`Pending request queue: ${We(pt,null,2)}`), _t && g.log(`Pending cookie queue: ${We(Dt,null,2)}`)), s(Pe, P, "pagehide", dv)
                }
                SA = !0
            },
            hA = async (e, t) => {
                if (t) {
                    let o = !1;
                    try {
                        h && g.log("Applying mutation", e, t);
                        let {
                            target: r
                        } = e, n = tA(r), i = n ? r.getLiveNode() : r;
                        await Ue(i, t), n && r.release()
                    } catch (r) {
                        o = !0, yo(r)
                    }
                    return !o
                }
                return !1
            }, gv = (e, t) => {
                let o = !1;
                try {
                    yr(e, t)
                } catch (r) {
                    o = !0, yo(r)
                }
                return !o
            }, Lu = () => {
                tt(pt), tt(Dt), co || as(), delete qe.tcmQuarantine
            }, xu = async (e = !0) => {
                if (Ot || _t) {
                    let t = O(O({}, Ot && {
                            requests: Ga(Qe ? Rl(pt, Qe) : pt)
                        }), _t && {
                            cookies: Ha(Qe ? Rl(Dt, Qe) : Dt)
                        }),
                        o = We(t);
                    Ug(o) > ky ? (Ce && g.warn("Transcend Consent Manager replay queue is too large. Clearing queue."), Lu(), !bo && e && await Eo(Bt({
                        sync: ["events"],
                        reset: !0
                    }))) : qe.tcmQuarantine = o
                }
            }, PA, ie = e => {
                var a;
                if (!e.persist) {
                    if (!rn) return;
                    T(on, e), h && g.log("Quarantining mutation:", e);
                    return
                }
                if (!Ot) return;
                let {
                    type: t,
                    urls: [o],
                    mutator: r
                } = e, n = `${o}`;
                if (t !== "CSPV") PA = n;
                else if (n === PA) return;
                let i = !1;
                ft(t, "DOM:") && !((a = e == null ? void 0 : e.requestInit) != null && a.body) && (i = se(pt, p => n === p.url)), !i && Ot ? (T(pt, e), h && g.log("Request added to queue:", e)) : r && rn && T(on, e)
            }, xc = e => {
                let t = _t && e.persist,
                    o = t || rn;
                t ? T(Dt, e) : o && T(Ci, e), h && o && g.log("Quarantining cookie:", e)
            }, yv = async () => {
                h && g.log("Dispatching cookie queue");
                let e = [];
                rn && T(e, Ci), _t && T(e, Dt), await hn(x(e, async t => {
                    let o = [];
                    await hn(x(t, async (n, i) => {
                        if (Qe && Vn(n, Qe)) {
                            T(o, i);
                            return
                        }
                        if (cs(n, !1)) {
                            h && g.log("Cookie allowed", n), T(o, i);
                            let {
                                mutator: a
                            } = n;
                            if (a) {
                                await s(a, n);
                                return
                            }
                            Be && g.error("Mutator missing", n)
                        } else h && g.log("Cookie not allowed", n)
                    }));
                    let r = o.length;
                    for (; r--;) {
                        let n = o[r];
                        $e(t, n, 1)
                    }
                }))
            }, Ev = async () => {
                if (h && g.log("Dispatching non-persistent mutation queue"), !rn) return;
                let e = [];
                await hn(x(on, async (o, r) => {
                    if (Qe && Vn(o, Qe)) {
                        T(e, r);
                        return
                    }
                    if (j(o, !1)) {
                        T(e, r);
                        let {
                            mutator: n
                        } = o;
                        if (n) {
                            try {
                                await hA(o, n)
                            } catch (i) {
                                yo(i)
                            }
                            return
                        }
                        Be && g.error("Mutator missing", o)
                    } else h && g.log("Mutation not allowed", o)
                }));
                let t = e.length;
                for (; t--;) {
                    let o = e[t];
                    $e(on, o, 1)
                }
            }, Av = /^\s*ws{1,2}:/i, Tv = async () => {
                h && g.log("Dispatching persistent request and mutation queue");
                let e = [];
                R(pt, (o, r) => {
                    let {
                        URLs: [n]
                    } = o;
                    if (!n) {
                        T(e, r);
                        return
                    }
                    let {
                        href: i,
                        protocol: a
                    } = me(n, "href", "protocol");
                    if (Ie(Av, a)) {
                        if (Ve) return;
                        T(e, r);
                        return
                    }
                    if (Qe && Vn(o, Qe)) {
                        T(e, r);
                        return
                    }
                    if (j(o, !1)) {
                        T(e, r);
                        let {
                            requestInit: p,
                            mutator: c,
                            type: l
                        } = o;
                        h && (l !== "DOM:script" || c) && g.log("Request or mutation allowed", o);
                        let m = hA(o, c) || l !== "DOM:script" && gv(i, p);
                        Be && !m && g.error("Unable to process request or mutation", o)
                    }
                });
                let t = e.length;
                for (; t--;) {
                    let o = e[t];
                    $e(pt, o, 1)
                }
            }, bu = !1, Sv = async e => {
                if (await yv(), eu()) {
                    e && On();
                    return
                }
                await Ev(), await Tv()
            }, vA = (e = !1) => {
                bu = !0, Sv(e)
            }, Mu = null, li = (e = !1) => {
                Mu === null && (Mu = s(yn, P, () => {
                    vA(e), Mu = null
                }))
            }, RA = () => new ge(e => {
                let t = async () => {
                    (Ot || _t) && fv(), !bo && !TA && await Eo(Bt()), e(), bu || li()
                };
                Us(oe) !== "complete" ? s(Pe, P, "load", async () => {
                    await t()
                }, {
                    once: !0
                }) : s(yn, P, async () => {
                    await t(), bu || vA()
                })
            }), Pv = (e, t) => {
                let o = [];
                R(e, (n, i) => {
                    Vn(n, t) && T(o, i)
                });
                let r = o.length;
                for (; r--;) {
                    h && g.log("Removing expired event from quarantine", e[o[r]]);
                    let n = o[r];
                    $e(e, n, 1)
                }
                return e
            }, Dc = (e = Qe) => {
                R([pt, Dt, on, Ci], t => {
                    Pv(t, e)
                })
            };
        var IA = [{
            type: "DOM:form",
            init: () => {
                let e = ["POST", "PUT", "DELETE", "PATCH"],
                    t = (n, i, a = s(Ag.get, n)) => {
                        let p = s(Ca.get, n),
                            c = new W({
                                type: "DOM:form-action",
                                url: p,
                                target: n
                            }).serialize();
                        p !== c && s(Ca.set, n, c);
                        let l = k(e, ho(a)),
                            m = new bs(n),
                            E = it(c, "href", "search", "pathname"),
                            u;
                        return l ? u = c : (E.href = c, E.search = s(Cn, new St(m)), u = E.href), new W({
                            url: u,
                            type: "DOM:form",
                            requestInit: O({
                                mode: "no-cors",
                                method: a
                            }, l && !ze(s(Og, m)) && {
                                headers: {
                                    "Content-Type": s(Eg.get, n)
                                },
                                body: m
                            }),
                            target: n,
                            mutator: i,
                            persist: !0
                        })
                    };
                or.prototype.submit = function(...n) {
                    let i = this,
                        a = () => {
                            L(Fp, i, n)
                        },
                        p = t(i, a);
                    return j(p) ? a() : ie(p)
                }, qp && (or.prototype.requestSubmit = function(...n) {
                    let i = this,
                        a = () => L(qp, i, n),
                        p = t(i, a);
                    return j(p) ? a() : ie(p)
                });
                let o = So(Ls.prototype),
                    r = So(ea.prototype);
                return En.prototype.click = function(...n) {
                    let i = this,
                        a = () => L(ga, i, n),
                        p = C(Ls, i) ? o : C(ea, i) ? r : null;
                    if (!p) return a();
                    let {
                        type: c,
                        form: l,
                        formAction: m,
                        formMethod: E = "get"
                    } = p(i, "type", "form", "formAction", "formMethod");
                    if (c === "submit" && l) {
                        let u = t(l, a, E),
                            d = new W({
                                type: "DOM:form-action",
                                url: m,
                                target: l
                            }).serialize();
                        if (m !== d && s(Ca.set, i, d), !j(u)) return ie(u)
                    }
                    return a()
                }, s(Pe, P, "submit", n => {
                    if (Cl(n)) return !0;
                    let i = n.target;
                    if (i) {
                        let a = t(i, () => s(Fp, i));
                        if (!j(a)) return s(ma, n), s(sf, n), s(nf, n), ie(a), !1
                    }
                    return !0
                }), []
            }
        }, {
            type: "DOM:form-action",
            constructors: [ea, Ls],
            property: "formAction",
            attribute: "formaction",
            safe: !0
        }, {
            type: "DOM:form-action",
            constructors: [or],
            property: "action",
            safe: !0
        }];
        var Et = class extends SyntaxError {
            constructor(t) {
                super(t), this.name = "AirgapParserError"
            }
            get[br]() {
                return this.name
            }
        };
        var CA = {
            empty: "data:text/plain,",
            video: "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAGm1kYXQAAAGzABAHAAABthBgUYI9t+8AAAMNbW9vdgAAAGxtdmhkAAAAAMXMvvrFzL76AAAD6AAAACoAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhpb2RzAAAAABCAgIAHAE/////+/wAAAiF0cmFrAAAAXHRraGQAAAAPxcy++sXMvvoAAAABAAAAAAAAACoAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAgAAAAIAAAAAAG9bWRpYQAAACBtZGhkAAAAAMXMvvrFzL76AAAAGAAAAAEVxwAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAABaG1pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAShzdGJsAAAAxHN0c2QAAAAAAAAAAQAAALRtcDR2AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAgACABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAAXmVzZHMAAAAAA4CAgE0AAQAEgICAPyARAAAAAAMNQAAAAAAFgICALQAAAbABAAABtYkTAAABAAAAASAAxI2IAMUARAEUQwAAAbJMYXZjNTMuMzUuMAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAASAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1My4yMS4x",
            image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            script: "data:text/javascript,",
            document: "data:text/html,%3Cmeta%20http-equiv%3D%22Content-Security-Policy%22%20content%3D%22default-src%20'none'%3B%22%3E",
            track: "data:text/vtt,WEBVTT"
        };
        var ds = (e, t) => {
            let o = `Mutation blocked: Error parsing property: ${e}=${We(t)}`;
            be && Ii(o), Ce && g.warn(o)
        };
        var hv = e => {
                var t;
                return C(xr, e) ? s(il.get, e) : (t = e.href) == null ? void 0 : t.baseVal
            },
            OA = (e, t) => {
                C(xr, e) ? s(il.set, e, t) : e.href.baseVal = t
            },
            xA = (...e) => {
                for (let t of M(e)) Ue(t, () => {
                    tg(t, s(Sf, t, !0))
                })
            },
            MA = {
                type: "DOM:script",
                constructors: [xr],
                property: "src",
                placeholder: "script",
                handlePendingWrite: (e, t, o, r, n) => {
                    if (V()) {
                        t(r);
                        return
                    }
                    let {
                        type: i,
                        parse: a,
                        property: p
                    } = e, c = o, l = a(r, {
                        type: i,
                        target: c
                    });
                    if (!l) return;
                    let m = C(Et, l),
                        E = !m && j(l),
                        u = !m && l.serialize(),
                        d = !m && `${r}` != `${u}`;
                    if (n && (m || !E || d) && (n.modified = !0), m) {
                        ds(p, r);
                        return
                    }
                    let y = () => {
                        t(u)
                    };
                    if (!E) {
                        l.mutator = () => {
                            y(), xA(c)
                        }, ie(l);
                        return
                    }
                    Ue(c, y)
                },
                handleLiveMutation: (e, t, o, r) => {
                    let {
                        type: n,
                        parse: i,
                        property: a,
                        placeholder: p
                    } = e, {
                        attributeNamespace: c,
                        attributeName: l
                    } = t, m = o.getNode(), E = hv(m), u = i(E, {
                        type: n,
                        target: o
                    });
                    if (!u) return;
                    let d = C(Et, u),
                        y = !d && j(u),
                        A = !d && u.serialize(),
                        v = !d && E !== A;
                    if (r && (!y || v || d) && (r.modified = !0), d) {
                        ds(a, E), Ue(m, () => {
                            s(Aa, m, c, l)
                        });
                        return
                    }
                    let I = (S, N = A) => {
                        OA(S, N), xA(S)
                    };
                    y ? v && Ue(m, () => {
                        I(m)
                    }) : (Ue(m, () => {
                        OA(m, p)
                    }), u.mutator = () => {
                        let S = o.getLiveNode();
                        I(S, A), o.release()
                    }, ie(u))
                }
            };
        var bA = e => Ie(/\S/, e),
            vv = (e = "", t) => {
                let o = `${e}`,
                    r = Gn(o) === "",
                    n = r ? [
                        [""]
                    ] : x(he(o, ","), p => Ho(p, /(?=\s+)/)),
                    i = r ? n[0] : x(n, p => Gn(rt(p, bA) || p[0])),
                    a = new hr(Ee(O({}, t), {
                        urls: i,
                        serialize: () => (R(a.urls, (p, c) => {
                            if (c < n.length) {
                                let l = n[c],
                                    m = It(l, bA);
                                l[m] = ct(l[m] || "", /^(\s*)(?:\S+)(\s*)$/, (E, u, d) => `${u}${p}${d}`)
                            }
                        }), de(x(n, p => de(p, "")), ","))
                    }));
                return a
            },
            _c = (e, t) => {
                try {
                    return vv(e, t)
                } catch (o) {
                    return new Et(o)
                }
            };
        var LA = e => ({
                get() {
                    return s(xn, this, e)
                },
                set(t) {
                    return s(no, this, e, t)
                }
            }),
            Oi = LA("href"),
            NA = LA("rel");
        var DA = [{
            type: "DOM:image",
            constructors: [rr],
            property: "src",
            placeholder: "image",
            save: !0,
            handleLiveMutation: (e, t, o, r) => {
                let {
                    type: n,
                    parse: i,
                    placeholder: a
                } = e, p = o.getNode(), c = qs && s(qs.get, p) || s(wn.get, p), l = i(c, {
                    type: n,
                    target: o
                });
                if (!l) return;
                let m = C(Et, l),
                    E = !m && j(l),
                    u = !m && l.serialize(),
                    d = m || c !== u;
                r && (!E || d) && (r.modified = !0);
                let y = A => {
                    s(wn.set, A, u)
                };
                E ? d && Ue(p, () => {
                    y(p)
                }) : (Ue(p, () => {
                    s(wn.set, p, a)
                }), l.mutator = () => {
                    y(o.getLiveNode()), o.release()
                }, m || ie(l))
            }
        }, {
            type: "DOM:image",
            constructors: [rr],
            property: "srcset",
            placeholder: "image",
            parse: _c
        }, {
            type: "DOM:media",
            constructors: [Ns],
            property: "src"
        }, {
            type: "DOM:media",
            constructors: [Ns],
            property: "srcset",
            parse: _c
        }, {
            type: "DOM:image",
            constructors: [id],
            property: "src",
            placeholder: "image",
            handleLiveMutation: (e, t, o, r) => {
                let {
                    type: n,
                    parse: i,
                    placeholder: a
                } = e, p = o.getNode(), c = Dr(p, "img"), l = c && (qs && s(qs.get, c) || s(wn.get, c)), m = i(l, {
                    type: n,
                    target: o
                });
                if (!m) return;
                let E = C(Et, m);
                if (c && (l || E)) {
                    let u = !E && j(m),
                        d = !E && m.serialize(),
                        y = E || l !== d;
                    r && (!u || y) && (r.modified = !0);
                    let A = (v, I = d) => {
                        s(wn.set, v, I)
                    };
                    u ? y && Ue(c, () => {
                        A(c)
                    }) : (Ue(c, () => {
                        A(c, a)
                    }), m.mutator = () => {
                        let v = Dr(o.getLiveNode(), "img");
                        A(v), o.release()
                    }, E || ie(m))
                }
            }
        }, {
            type: "DOM:media",
            constructors: [An],
            property: "src",
            placeholder: "video",
            handleLiveMutation: (e, t, o, r) => {
                let {
                    type: n,
                    parse: i,
                    placeholder: a
                } = e, p = o.getNode(), c = cl && s(cl.get, p) || s(al.get, p), l = i(c, {
                    type: n,
                    target: o
                });
                if (!l) return;
                let m = C(Et, l),
                    E = !m && j(l),
                    u = !m && l.serialize(),
                    d = m || c !== u;
                r && (!E || d) && (r.modified = !0);
                let y = (A, v = u) => {
                    s(al.set, A, v)
                };
                E ? d && Ue(p, () => {
                    y(p)
                }) : (Ue(p, () => {
                    y(p, a)
                }), l.mutator = () => {
                    y(o.getLiveNode()), o.release()
                }, m || ie(l))
            }
        }, {
            type: "DOM:media",
            constructors: [sd],
            property: "poster",
            placeholder: "image"
        }, {
            type: "DOM:ping",
            constructors: [tr],
            property: "ping"
        }, {
            type: "DOM:link",
            constructors: [tr, Mr, ta],
            property: "rel",
            parse: (e, t) => {
                let {
                    type: o,
                    target: r
                } = t, n = Ho(`${e}`, /\s+/);
                if (!se(n, m => k(Jn, at(m)))) return null;
                let a = () => {
                        var E;
                        let m = To(r) ? r : (E = r == null ? void 0 : r.getLiveNode) == null ? void 0 : E.call(r);
                        m && s(NA.set, m, e)
                    },
                    p = To(r) ? r : r.getNode(),
                    c = s(Oi.get, p);
                return new W({
                    type: o,
                    url: c,
                    target: r,
                    serialize: () => e,
                    mutator: a
                }, !0)
            }
        }, {
            type: "DOM:link",
            constructors: [tr, Mr, ta],
            property: "relList",
            attribute: null,
            handlePendingRead: (e, t) => {
                let o = t,
                    r = e(t),
                    {
                        add: n,
                        toggle: i,
                        replace: a
                    } = r;
                return r.add = function(...p) {
                    let c = () => L(n, this, p),
                        l = s(Oi.get, o);
                    if (se(p, E => k(Jn, at(E)))) {
                        let E = new W({
                            type: "DOM:link",
                            url: l,
                            target: o,
                            mutator: c,
                            persist: !0
                        });
                        if (!j(E)) {
                            ie(E);
                            return
                        }
                    }
                    return c()
                }, r.toggle = function(p, c) {
                    let l = () => s(i, this, p, c),
                        m = s(Oi.get, o);
                    if (k(Jn, at(p))) {
                        let u = new W({
                            type: "DOM:link",
                            url: m,
                            target: o,
                            mutator: l,
                            persist: !0
                        });
                        if (!j(u)) return ie(u), !s(Gp, r, p)
                    }
                    return l()
                }, r.replace = function(p, c) {
                    let l = () => s(a, this, p, c),
                        m = s(Oi.get, o);
                    if (k(Jn, at(c))) {
                        let u = new W({
                            type: "DOM:link",
                            url: m,
                            target: o,
                            mutator: l,
                            persist: !0
                        });
                        if (!j(u)) return ie(u), !0
                    }
                    return l()
                }, r
            }
        }, {
            type: "DOM:link",
            constructors: [tr, Mr, ta],
            property: "href",
            condition: ({
                relList: e
            }) => !!(e && se(Jn, t => s(Gp, e, t)))
        }, {
            type: "DOM:link",
            constructors: [Mr],
            attribute: "imagesrcset",
            property: "imageSrcset",
            parse: _c
        }, {
            type: "DOM:view",
            constructors: [oo, Pp, hp],
            property: "src",
            placeholder: "document"
        }, {
            type: "DOM:view",
            constructors: [vp],
            property: "data",
            placeholder: "document"
        }, {
            type: "DOM:track",
            constructors: [ad],
            property: "src",
            placeholder: "track"
        }];
        var Nu = !rl && new ko,
            Rv = Nu ? e => Na(Nu, e) ? !1 : s(va, s(If, e, "x")) !== "x" ? (La(Nu, e), !1) : !0 : e => s(rl, e) !== null,
            xi = e => {
                let t = so(e) ? e : s(ot, e);
                return t && Rv(t)
            },
            Mi = e => {
                let t = [];
                return _g(s($p, e), o => {
                    T(t, ur(o))
                }), de(t, "")
            };
        var fs = [],
            Iv = e => {
                T(fs, ...Mg(e, t => bv(t)))
            },
            Du = new Q,
            _A = H.domProtectionCache !== pe,
            UA = [...DA, MA, ...IA],
            Cv = e => s(ha, s(ot, e) || e),
            kc = e => e ? Go(e) && s(Xf, e) || s(Pf, e, null) : null,
            sn = e => kc(s(ot, e)),
            nn = e => s(va, e),
            Ov = (...e) => x(e, ({
                attribute: t = null,
                property: o,
                accessor: r,
                constructors: n = [to]
            }) => ({
                type: "unknown",
                constructors: n,
                property: o,
                attribute: t,
                handleLiveMutation: null,
                handlePendingWrite: (i, a, p, c) => {
                    if (V()) return s(a, p, c);
                    let l = sn(p),
                        m = vr(l, nn(p));
                    s(ar, m), s(ir, m, c === null ? "" : c), s(cr, m);
                    let E = p === s(Xe, s(ot, p) || oe) || l !== Yo ? [s(Xe, m)] : [s(lr, m), s(_n, m)],
                        u = f({
                            insertion: m,
                            mutator: d => {
                                let y = xi(p);
                                s(r.set, d, u.modified ? de(x(E, A => y ? Mi(A) : s(kn.get, A)), "") : c)
                            },
                            target: p
                        });
                    return Vt(u)
                }
            }));
        T(UA, ...Ov({
            property: "innerHTML",
            accessor: kn
        }, {
            property: "outerHTML",
            accessor: sl
        }, {
            property: "srcdoc",
            attribute: "srcdoc",
            accessor: Sg,
            constructors: [oo]
        }));
        if (Oa) {
            let {
                set: e
            } = Oa;
            Me(Qi.prototype, "innerHTML", Ee(O({}, Oa), {
                set(...t) {
                    let o = this;
                    if (V()) return L(e, o, t);
                    let [r] = t, n = sn(o), i = vr(n, "_");
                    s(ar, i), s(ir, i, r === null ? "" : r), s(cr, i);
                    let a = [s(lr, i), s(_n, i)],
                        p = f({
                            insertion: i,
                            mutator: c => {
                                let l = xi(c);
                                return L(e, c, p.modified ? [de(x(a, m => l ? Mi(m) : s(kn.get, m)), "")] : t)
                            },
                            target: o
                        });
                    return Vt(p)
                }
            }))
        }
        var xv = () => {
                h && g.log("Initializing DOM patchers"), Iv(UA);
                let e = Gt.prototype,
                    t = to.prototype,
                    o = ht.prototype,
                    r = gp.prototype;
                t.insertAdjacentElement = function(...u) {
                    let d = this,
                        y = () => L(df, d, u);
                    if (V()) return y();
                    let A = u[1];
                    return Vt(f({
                        insertion: A,
                        mutator: y,
                        target: d
                    }))
                }, Vp && (t.setHTML = function(...u) {
                    let d = this,
                        y = () => L(Vp, d, u);
                    if (V()) return y();
                    let [A] = u, v = (N, $, te) => (te && (u[0] = I ? Mi($) : s(kn.get, $)), y());
                    if (!u.length) return v();
                    let I = xi(d),
                        S = vr(sn(d), nn(d));
                    return s(ar, S), s(ir, S, A), s(cr, S), Vt(f({
                        mutator: v,
                        target: d,
                        insertion: S
                    }))
                }), t.insertAdjacentHTML = function(...u) {
                    let d = this,
                        y = () => L(ff, d, u);
                    if (V()) return y();
                    let A = u[1],
                        v = vr(sn(d), nn(d));
                    s(ar, v), s(ir, v, A), s(cr, v);
                    let I = xi(d);
                    return Vt(f({
                        insertion: v,
                        mutator: (N, $, te) => (te && (u[1] = I ? Mi($) : s(kn.get, $)), y()),
                        target: d
                    }))
                }, o.adoptNode = function(...u) {
                    let d = this,
                        y = () => L(Wp, d, u),
                        [A] = u;
                    if (Go(A)) {
                        let v = vr(sn(A), nn(A)),
                            I = s(Wp, v, A);
                        return s(ks, wA(v), I), Vt(f({
                            insertion: I,
                            mutator: (N, $, te) => (te && (u[0] = I), y()),
                            target: d
                        }))
                    }
                    return y()
                }, o.importNode = function(...u) {
                    let d = this,
                        y = () => L(zp, d, u);
                    if (V()) return y();
                    let [A, v] = u;
                    if (Go(A)) {
                        let I = vr(sn(A), nn(A)),
                            S = s(zp, I, A, v);
                        return s(ks, wA(I), S), Vt(f({
                            insertion: S,
                            mutator: ($, te, ee) => (ee && (u[0] = S), y()),
                            target: d
                        }))
                    }
                    return y()
                }, o.open = function(...u) {
                    let d = this,
                        y = () => L(ar, d, u);
                    return V() || GA(d, d, !0), y()
                }, o.close = function(...u) {
                    let d = this,
                        y = () => L(cr, d, u);
                    return V() || _u(...VA(d)), y()
                };
                let n = function(...u) {
                    let d = this,
                        y = () => L(ir, d, u);
                    if (V()) return y();
                    let A = s(Xe, d),
                        v = A ? nn(A) : "_",
                        I = vr(kc(d), v);
                    return s(ar, I), L(ir, I, u), s(cr, I), Vt(f({
                        insertion: I,
                        mutator: (N, $, te) => (te && (u.length = 0, T(u, s(sl.get, s(Xe, I)))), y()),
                        target: d
                    }))
                };
                o.write = n, o.writeln = function(...u) {
                    return L(n, this, Je(u, `
`))
                };
                let i = new Q,
                    a = [
                        [
                            [
                                [to, Pa],
                                [ht, Qp],
                                [Ap, jp]
                            ],
                            ["append", "prepend", "replaceChildren"]
                        ],
                        [
                            [
                                [to, Pa],
                                [Tp, zf],
                                [Sp, Wf]
                            ],
                            ["before", "after", "replaceWith"]
                        ]
                    ],
                    p = (u, d, y, A) => {
                        let {
                            prototype: v
                        } = u, I = Nr(v, y);
                        if (I) {
                            let S = I.value;
                            J(i, `${d}.${y}`, S), Me(v, y, {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                value: A
                            })
                        }
                    };
                for (let [u, d] of M(a))
                    for (let [y, A] of M(u))
                        for (let v of M(d)) p(y, A, v, function(...I) {
                            let S = this,
                                N = s(ws, S),
                                $ = ae(i, `${N}.${v}`),
                                te = () => L($, S, I);
                            if (V()) return te();
                            for (let ee of M(I)) {
                                let Z = () => s($, S, ee);
                                typeof ee == "string" ? Z() : Vt(f({
                                    insertion: ee,
                                    mutator: Z,
                                    target: S
                                }))
                            }
                        });
                e.appendChild = function(...u) {
                    let d = this,
                        y = () => L(Mn, d, u);
                    if (V()) return y();
                    let [A] = u;
                    return Vt(f({
                        insertion: A,
                        mutator: y,
                        target: d
                    }))
                }, e.insertBefore = function(...u) {
                    let d = this,
                        y = () => L(Af, d, u);
                    if (V()) return y();
                    let [A] = u;
                    return Vt(f({
                        insertion: A,
                        mutator: y,
                        target: d
                    }))
                }, e.replaceChild = function(...u) {
                    let d = this,
                        y = () => L(Tf, d, u);
                    if (V()) return y();
                    let [A] = u;
                    return Vt(f({
                        insertion: A,
                        mutator: y,
                        target: d
                    }))
                };
                let c = function(u, d, y, A, v = null) {
                    let I = at(d),
                        S = N => A ? s(Bp, u, v, d, N) : s(no, u, d, y);
                    for (let N of M(fs)) {
                        let {
                            handlePendingWrite: $,
                            attribute: te,
                            property: ee,
                            condition: Z
                        } = N;
                        if ($ && te !== null && ee !== null && I === te && (Z === null || Z(u))) {
                            $(N, S, u, y);
                            return
                        }
                    }
                    return S(y)
                };
                t.setAttribute = function(...u) {
                    let d = this;
                    if (V()) return L(no, d, u);
                    let [y, A] = u;
                    return c(d, y, A, !1)
                }, t.setAttributeNS = function(...u) {
                    let d = this;
                    if (V()) return L(no, d, u);
                    let [y, A, v] = u;
                    return c(d, A, v, !0, y)
                };
                let l = u => rt(fs, ({
                        attribute: d
                    }) => d === u),
                    m = (u, d, y, A) => {
                        if (ve(HA, u)) {
                            let v = l(u),
                                I = v.parse(d, {
                                    type: "unknown",
                                    target: y,
                                    mutator: A
                                });
                            if (!I) return A();
                            if (C(Et, I)) return ds(u, d), y;
                            if (Pc(I)) return Ce && g.warn("Unable to omit credentials from request. Request blocked: ", I), y;
                            if (!v.safe && !j(I)) return ie(I), y
                        }
                        return A()
                    };
                Me(Zi.prototype, "value", Ee(O({}, xa), {
                    set(...u) {
                        let d = this,
                            y = () => L(xa.set, d, u);
                        if (V()) return y();
                        let A = s(pl.get, d),
                            [v] = u;
                        return m(A, v, d, y)
                    }
                }));
                let E = u => function(...d) {
                    let y = this,
                        A = () => L(u, y, d);
                    if (V()) return A();
                    let [v] = d, I = s(pl.get, v), S = s(xa.get, v);
                    return m(I, S, v, A)
                };
                t.setAttributeNodeNS = E(mf), t.setAttributeNode = E(uf), r.setNamedItemNS = E(Rf), r.setNamedItem = E(vf), sa.prototype.createContextualFragment = function(...u) {
                    let d = this,
                        y = () => L(ol, d, u);
                    if (V()) return y();
                    let A = s(fg, d);
                    if (!tn(A)) return L(ol, d, u);
                    let [v] = u, I = vr(so(A) ? kc(A) : sn(A), Go(A) ? nn(A) : "_");
                    s(ar, I), s(ir, I, v), s(cr, I);
                    let S = f({
                        insertion: I,
                        target: A,
                        static: !0,
                        mutator: () => (S.modified && (u[0] = ur(I)), y())
                    });
                    return Vt(S)
                }, FA = !0
            },
            GA = (e, t = e, o = !1) => {
                let r = () => {};
                if (_y && e && so(e) && (o || Us(e) === "loading")) {
                    let n = "readystatechange",
                        i = qA();
                    r = () => {
                        _u(i), s(nr, e, n, a)
                    };
                    let a = () => {
                        Us(e) !== "loading" && r()
                    };
                    s(Pe, e, n, a), BA(i, t)
                }
                return r
            },
            wc = (e = oe) => {
                Uc || ku(), FA || xv();
                let t = so(e) ? e : s(ot, e);
                if (h && g.log("protect() called on", t), Re(Du, t)) {
                    Be && g.error("protect() already called on this document");
                    return
                }
                let o = GA(t),
                    n = {
                        remove: () => {
                            o(), Hn(Du, t), h && g.log("protect() removed from", t)
                        }
                    };
                return J(Du, t, n), n
            },
            tn = e => e !== null && Cv(e) !== null,
            Mv = {
                mode: "no-cors"
            },
            HA = new B,
            FA = !1,
            bv = e => {
                let t = [],
                    {
                        type: o
                    } = e,
                    {
                        property: r = null,
                        placeholder: n = null,
                        safe: i = !1,
                        save: a = !1,
                        requestInit: p,
                        constructors: c = [],
                        condition: l = null,
                        attribute: m = r,
                        attributeNamespace: E = null,
                        omitCredentials: u = Po(c, I => k(oi, I)) && ((I, S) => {
                            let N = ss(I);
                            return N && S && (S.modified = !0), N
                        }) || null,
                        parse: d = (I, S) => new W(Ee(O({}, S), {
                            url: I,
                            persist: a,
                            omitCredentials: u !== null ? function() {
                                return u(this)
                            } : void 0
                        })),
                        setup: y = null,
                        init: A = () => {
                            for (let I of M(c)) {
                                let S = r !== null && Nr(I.prototype, r) || null,
                                    N = n && CA[n],
                                    $ = (p != null ? p : a) ? f(Mv) : void 0,
                                    {
                                        read: te = r !== null && (S == null ? void 0 : S.get) && (ce => s(S.get, ce)) || (m !== null && E ? (ce, re = m, w = E) => {
                                            s(yf, ce, w, re)
                                        } : (ce, re = m) => {
                                            s(xn, ce, re)
                                        }) || null,
                                        write: ee = r !== null && (S == null ? void 0 : S.set) && ((ce, re) => s(S.set, ce, re)) || m !== null && (E ? (ce, re, w = m, Y = E) => {
                                            s(Bp, ce, Y, w, re)
                                        } : (ce, re, w = m) => {
                                            s(no, ce, w, re)
                                        }) || null,
                                        block: Z = (ce, re, w = m, Y = E) => {
                                            let K = ce.getNode(),
                                                ne = !1;
                                            Ue(K, () => {
                                                ee && N ? ee(K, N, w, Y) : w !== null ? E ? s(Aa, K, Y, w) : s(Ea, K, w) : (ne = !0, pr(K))
                                            }), re && !C(Et, re) && (ee && !ne ? re.mutator = () => {
                                                ee(ce.getLiveNode(), re.serialize(), w, Y), ce.release()
                                            } : ce.release(), ie(re))
                                        },
                                        handlePendingRead: Ge = null,
                                        handlePendingWrite: At = ee !== null && function(ce, re, w, Y, K) {
                                            if (V()) {
                                                re(Y);
                                                return
                                            }
                                            let ne = d(Y, {
                                                type: o,
                                                target: w,
                                                requestInit: $
                                            });
                                            if (!ne) {
                                                re(Y);
                                                return
                                            }
                                            let je = C(Et, ne),
                                                et = ce.safe || !je && j(ne),
                                                He = !je && ne.serialize(),
                                                Zt = !je && `${Y}` != `${He}`;
                                            if (K && (!et || Zt || je) && (K.modified = !0), je) {
                                                ds(r || m, Y);
                                                return
                                            }
                                            let wt = () => {
                                                re(He)
                                            };
                                            if (!et) {
                                                ne.mutator = wt, ie(ne);
                                                return
                                            }
                                            Ue(w, wt)
                                        } || null,
                                        handleLiveMutation: Wt = te !== null && ee !== null && Z !== null && ((ce, re, w, Y) => {
                                            let {
                                                attributeName: K,
                                                attributeNamespace: ne
                                            } = re, je = w.getNode(), et = te(je, K, ne), He = d(et, {
                                                type: o,
                                                target: w
                                            });
                                            if (!He) return;
                                            let Zt = C(Et, He),
                                                wt = !Zt && j(He),
                                                ln = !Zt && He.serialize(),
                                                Qo = et !== ln;
                                            Y && (!wt || Qo || Zt) && (Y.modified = !0), !ce.safe && !wt ? Z(w, He, K, ne) : (Qo && ee(je, ln, K, ne), w.release())
                                        }) || null
                                    } = e,
                                    xt = {
                                        type: o,
                                        constructor: I,
                                        placeholder: N,
                                        requestInit: $,
                                        property: r,
                                        condition: l,
                                        safe: i,
                                        save: a,
                                        attribute: m,
                                        read: te,
                                        write: ee,
                                        block: Z,
                                        parse: d,
                                        attributeNamespace: E,
                                        handlePendingRead: Ge,
                                        handlePendingWrite: At,
                                        handleLiveMutation: Wt,
                                        omitCredentials: u
                                    };
                                t.push(xt), m !== null && F(HA, m), r && S && (Ge || At) && Me(I.prototype, r, Ee(O({}, S), {
                                    get: Ge === null ? S.get : function() {
                                        return Ge(w => s(S.get, w), this)
                                    },
                                    set: At === null ? S.set : function(ce) {
                                        let re = this,
                                            w = Y => {
                                                s(S.set, re, Y)
                                            };
                                        l === null || l(re) ? At(xt, w, re, ce) : w(ce)
                                    }
                                }))
                            }
                            return t
                        }
                    } = e,
                    v = A();
                return y == null || y(v), v
            },
            Lv = nc ? () => {
                let e = s(Kp, Ln, "");
                return s(gf, s(Sa, s(lr, e))), e
            } : () => s(Kp, Ln),
            vr = (e, t) => e === Yo || e === null ? Lv() : s(Ta, Ln, e, t),
            Nv = e => C(nd, e) || kc(e) === Yo,
            kA = new ko,
            Dv = (e, t, o) => {
                let r = s(Of, t, o, $f, n => {
                    if (_A && Na(kA, n)) return jf;
                    for (let i of M(fs)) {
                        let {
                            handleLiveMutation: a,
                            attribute: p,
                            constructor: c,
                            condition: l
                        } = i;
                        if (a && C(c, n) && p !== null && s(ya, n, p) && (l === null || l(n))) {
                            let u = f({
                                    attributeName: p,
                                    attributeNamespace: null
                                }),
                                d = new(e.static ? zo : en)(n);
                            a(i, u, d, e)
                        }
                    }
                    return _A && s(Jf, n) === null && La(kA, n), Qf
                });
                for (; s(xf, r) !== null;);
            },
            wA = e => Nv(e) ? s(_n, e) : s(Xe, e),
            Vt = e => {
                let {
                    target: t,
                    insertion: o,
                    mutator: r
                } = e, n = (so(o) ? o : s(ot, o)) || oe, i = Go(o) || Yf(o) ? o : s(Xe, n) || o;
                if (tn(t) && i) {
                    let p = so(t) ? t : s(ot, t);
                    p && t === p && (i = n), Dv(e, n, i)
                }
                let a;
                return Ue(t, () => {
                    a = r(t, i === n ? s(Xe, n) : i, e.modified)
                }), a
            };
        var WA = (e, t) => {
                if (!(V() || Gc()))
                    for (let o of M(fs)) {
                        let {
                            handleLiveMutation: r,
                            constructor: n,
                            attribute: i,
                            condition: a
                        } = o;
                        if (r && C(n, t) && i !== null && s(ya, t, i) && (a === null || a(t))) {
                            let p = new zo(t);
                            r(o, e, p)
                        }
                    }
            },
            qA = () => new Ep(e => {
                if (Gc()) {
                    KA();
                    return
                }
                for (let t of M(e)) {
                    if (Gc()) return;
                    let {
                        type: o,
                        target: r,
                        addedNodes: n
                    } = t;
                    tn(r) && (o === "attributes" ? WA(t, r) : o === "childList" && R(n, i => {
                        WA(t, i)
                    }))
                }
            }),
            bi = new Q,
            wu = !1,
            BA = (e, t) => {
                J(bi, e, t), s(Mf, e, t, {
                    childList: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    subtree: !0
                }), wu = !0
            },
            _u = (...e) => {
                for (let t of M(e)) Re(bi, t) && (s(bf, t), Hn(bi, t));
                wu = Rt(bi) !== 0
            },
            VA = e => {
                let t = [];
                return R(bi, ([o, r]) => {
                    s(Kf, r, e) && T(t, o)
                }), t
            },
            zA = () => wu;
        var Li = !1,
            Gc = () => Li,
            KA = () => {
                Li = !1
            },
            Ue = (e, t) => {
                if (Li) return t(e);
                Li = !0;
                let o = t(e);
                return zA() || (Li = !1), o
            };
        var _v = e => {
                let t = To(e) ? Go(e) && e : e.getNode();
                return t && Ue(t, () => {
                    s(no, t, "crossorigin", "anonymous"), Bs && C(oo, t) && s(Bs, t, !0)
                }), To(t) && Go(t) && se(oi, o => C(o, t))
            },
            vc = e => {
                let {
                    requestInit: t
                } = e;
                return typeof t != "object" && (e.requestInit = t = f()), t.credentials = "omit", !0
            },
            ss = e => {
                let {
                    target: t,
                    type: o
                } = e;
                return t ? _v(t) : k(Gy, o)
            };
        var Ni, gs, Di, ys, _i, Hc, hr = class {
            constructor({
                type: t,
                urls: o,
                serialize: r,
                omitCredentials: n,
                requestInit: i,
                mutator: a,
                target: p,
                timestamp: c = De()
            }, l = !0, m = !0) {
                Oe(this, Ni, void 0);
                Oe(this, gs, null);
                Oe(this, Di, void 0);
                Oe(this, ys, void 0);
                Oe(this, _i, void 0);
                Oe(this, Hc, void 0);
                G(this, "allow", () => {
                    this.allowed = !0
                });
                G(this, "deny", () => {
                    this.allowed = !1
                });
                G(this, "type");
                G(this, "urls");
                G(this, "URLs");
                G(this, "timestamp");
                G(this, "mutator");
                G(this, "target");
                G(this, "requestInit");
                G(this, "serialize", () => le(this, ys) ? le(this, ys).call(this) : this.urls[0]);
                G(this, "omitCredentials", () => {
                    var t, o;
                    return (o = le(this, Hc)) != null ? o : Ae(this, Hc, vc(this) && (((t = le(this, _i)) == null ? void 0 : t.call(this)) || ss(this)))
                });
                G(this, "toJSON", () => {
                    let {
                        type: t,
                        urls: o,
                        requestInit: r,
                        timestamp: n
                    } = this;
                    return {
                        type: t,
                        urls: x(o, i => typeof i == "string" ? i : `${i}`),
                        requestInit: ic(r),
                        timestamp: n
                    }
                });
                Ae(this, Ni, m), this.type = t;
                let E = this.urls = Te(o),
                    u = this.URLs = x(E, d => _r(d));
                R(E, (d, y) => {
                    Me(E, y, {
                        enumerable: !0,
                        configurable: !1,
                        get: () => d,
                        set: A => {
                            u[y] = _r(d = A)
                        }
                    })
                }), this.mutator = a, this.target = p, this.requestInit = i, this.timestamp = c, r && Ae(this, ys, r), n && Ae(this, _i, n), l && Sc(this)
            }
            get purposes() {
                var t;
                return (t = le(this, gs)) != null ? t : Ae(this, gs, Ai(this, le(this, Ni)))
            }
            set purposes(t) {
                if (!C(B, t)) throw new $t("PendingEvent.purposes must be a Set");
                let o = le(this, gs);
                o === null ? Ae(this, gs, o = new B) : Ro(o);
                for (let r of Se(t)) {
                    if (typeof r != "string") throw new $t("Tracking purposes must be strings");
                    F(o, r)
                }
            }
            get allowed() {
                var t;
                return (t = le(this, Di)) != null ? t : Le(this.purposes, bt)
            }
            set allowed(t) {
                if (t !== null && typeof t != "boolean") throw new $t("Pending event allow/deny state must be true, false, or null");
                Ae(this, Di, t)
            }
            get url() {
                return this.urls[0]
            }
            set url(t) {
                this.urls[0] = t
            }
            get persist() {
                return !1
            }
            set persist(t) {}
        };
        Ni = new WeakMap, gs = new WeakMap, Di = new WeakMap, ys = new WeakMap, _i = new WeakMap, Hc = new WeakMap;
        Ke(hr);
        var Fc = () => [Zo(), Zo()],
            Es = (e, t, o, r = (n, i) => Ur(i)) => n => {
                let i = (p, c) => p !== n || k(e, c),
                    a = (p, c) => t && i(p, c) && typeof p[c] != "function";
                return new na(n, {
                    get: (p, c) => {
                        if (!i(p, c)) return;
                        if (ue(o)) {
                            let [m, E] = o;
                            if (c === m) return E
                        }
                        let l = p[c];
                        return typeof l == "object" && !a(p, c) ? r(c, l) : l
                    },
                    set: (p, c, l) => a(p, c) ? (p[c] = l, !0) : !1,
                    has: (p, c) => c in p,
                    deleteProperty: (p, c) => a(p, c) && delete p[c]
                })
            };
        var Uu = Fc(),
            [kv, wv] = Uu,
            Gu = ["url", "urls", "type", "requestInit", "timestamp", "URLs", "persist", "allowed", "serialize", "purposes", "target", "toJSON"],
            Xr = Es(Gu, !1, Uu, (e, t) => e === "URLs" ? x(t, o => _r(o)) : Ur(t)),
            Uv = Je(Gu, "URLs", "omitCredentials", "allow", "deny"),
            OE = Es(Uv, !0, Uu),
            Gv = _e(Gu, 0, 5),
            jr = (e, t = !0) => {
                var i;
                let o = Fe(e),
                    r = fe(o, a => k(Gv, a));
                if (r.length < o.length && Ce) {
                    let a = fe(o, p => !k(r, p));
                    g.warn(`The following properties are not allowed and will be ignored: ${de(a," ")}`)
                }
                let n = f();
                for (let a of M(r)) {
                    let p = Ur(e[a]);
                    a === "url" ? ((i = n.urls) != null ? i : n.urls = [])[0] = p : n[a] = p
                }
                return Xr(new hr(n, t))
            },
            Hu = e => C(W, e) || C(hr, e) || e[kv] === wv;
        var As = ke([Yt]),
            Hv = e => {
                let t = Re(e, Ye),
                    o = `www.${Ye}`,
                    r = ft(Ye, "www.") || Re(e, o);
                t || J(e, Ye, As), nt(Ye, ".") && !r && J(e, o, As)
            },
            Fv = e => {
                let {
                    hostname: t
                } = Ys;
                Re(e, t) || J(e, t, As)
            },
            qv = e => {
                let t = "about:";
                Re(e, t) || J(e, t, As)
            },
            $A = (e, t = !1) => {
                R([...gr ? [it(gr, "host", "hostname", "port")] : [], ...rc], o => {
                    if (o) {
                        if (t && !o.port) return;
                        let r = t ? o.host : o.hostname;
                        Re(e, r) || J(e, r, As)
                    }
                })
            },
            QA = (e, t = !1) => {
                be && R(Zs, o => {
                    if (t && !o.port) return;
                    let r = t ? o.host : o.hostname;
                    Re(e, r) || J(e, r, ke([Oy]))
                })
            },
            jA = (e, t = !1) => {
                ei && R(Wl, o => {
                    if (t && !o.port) return;
                    let r = t ? o.host : o.hostname;
                    Re(e, r) || J(e, r, ke([Yt]))
                })
            },
            Bv = e => {
                Re(e, "youtube.com") && !Re(e, "youtube-nocookie.com") && J(e, "youtube-nocookie.com", As)
            },
            YA = e => {
                Hv(e), Fv(e), QA(e), $A(e), Bv(e), jA(e)
            },
            XA = e => {
                qv(e), QA(e, !0), $A(e, !0), jA(e, !0)
            };
        var Fu = (e, t) => fe(e, ({
                param: o,
                value: r
            }) => {
                if (s(da, t, o)) {
                    if (r === null) return !0;
                    let n = s(fa, t, o);
                    if (typeof n == "string" && nt(n, r)) return !0
                }
                return !1
            }),
            qu = (e, t, o) => {
                let r = Fu(e, o);
                for (let {
                        purposes: n
                    }
                    of M(r))
                    for (let i of Se(n)) F(t, i);
                return !!r.length
            };
        var Bu = !1,
            JA = !0,
            Vv = () => ME && !Bu,
            eT = () => JA ? (JA = !1, Vv()) : !1,
            ZA = !1,
            tT = e => {
                if (ZA) return;
                ZA = !0;
                let t;
                R(["mousedown", "keydown", "touchstart"], o => {
                    s(Pe, P, o, () => {
                        Bu = !0, t && (s(er, P, t), t = null), t = s(Pt, P, () => {
                            Bu = !1
                        }, e)
                    }, {
                        passive: !0
                    })
                })
            };
        var qc = (e = !1) => (+qe.tcmu || 0) + (e && +qe.tcmr || 0),
            Vu = (e, t) => {
                let o = +(qe.tcmr || 0),
                    r = +(qe.tcmu || 0) + 1,
                    n = o + r,
                    i = Lr(t) && r >= t;
                return qe.tcmu = i ? t : r, Lr(e) && n >= e
            },
            oT = () => {
                delete qe.tcmu
            },
            rT = () => {
                oT(), delete qe.tcmr
            },
            nT = () => {
                let e = qc(),
                    t = qc(!0);
                return qe.tcmr = t, oT(), e
            };
        var Wv = () => {
                if (Ql === "origin") return Ao;
                if (Ql === "path") {
                    let {
                        origin: e,
                        pathname: t
                    } = Fs("origin", "pathname");
                    return `${e}${t}`
                }
                return Fs("href").href
            },
            Ts = new Q,
            Wu = [],
            ki = () => {
                let e = Wv(),
                    t = ae(Ts, e);
                return t || (t = f({
                    hosts: new Q,
                    paths: new Q,
                    cookies: new Q,
                    cookieMatchers: new Q,
                    cspv: new Q,
                    consent: []
                }), J(Ts, e, t)), t
            },
            sT = (e, t, o, r, n, i, a, p = 1, c = 1) => {
                h && g.log.styled(Wa, `Logging telemetry to %c${i}`), is && tT(r);
                let l = !1,
                    m = null,
                    E = !1,
                    u = !1,
                    d, y, A = x(e, ({
                        hostname: U
                    }) => U),
                    v = new Q,
                    I = U => {
                        let D = f();
                        for (let [q, {
                                allowed: z,
                                blocked: X
                            }] of dt(U)) ve(Nt, q) && (D[q] = [z, X]);
                        return D
                    },
                    S = () => {
                        for (let U of Se(lo)) J(v, U, f({
                            allowed: 0,
                            blocked: 0
                        }))
                    };
                S();
                let N = ["http:", "https:"],
                    $ = U => {
                        let D = he(U, "."),
                            {
                                length: q
                            } = D;
                        for (let z = 0; z < q; z++) {
                            let X = de(_e(D, z), ".");
                            if (k(A, X)) return !0
                        }
                        return !1
                    },
                    te = (U, D, q) => q && (U === Ye || $(U)) || k(Va, D),
                    ee = (U, D = `
`) => {
                        let q = [];
                        for (let [z, X] of dt(U)) T(q, X > 1 ? `${z} ${X}` : z);
                        return de(q, D)
                    },
                    Z = /\n/g,
                    Ge = U => {
                        let D = [];
                        for (let [q, z] of dt(U)) Rt(z) && T(D, `${ct(q,Z,X=>s(go,P,X))}
${de(x(Te(z),([X,ye])=>{let lt=X===Ye?"^":X;return ye>1?`${lt} ${ye}`:lt})," ")}`);
                        return de(D, `
`)
                    },
                    At = U => de(x(Te(U), ([D, q]) => `${ee(q,",")};${D}`), `
`),
                    Wt = U => de(x(Te(U), ([D, q]) => `${D}
${ee(q,",")}`), `
`),
                    xt = () => {
                        let U = f();
                        for (let [D, {
                                hosts: q,
                                paths: z,
                                cookies: X,
                                cookieMatchers: ye,
                                cspv: lt,
                                consent: mo
                            }] of dt(Ts)) {
                            let zt = f();
                            Rt(q) && (zt.hosts = ee(q)), Rt(z) && (zt.paths = At(z)), Rt(X) && (zt.cookies = Ge(X)), Rt(ye) && (zt.cookieMatchers = Wt(ye)), Rt(lt) && (zt.cspv = ee(lt)), mo.length && (zt.consent = fe(x(mo, jo => ro(fe(Ne(jo), ([Lo]) => ve(Nt, Lo)))), jo => Fe(jo).length)), U[D] = zt
                        }
                        return U
                    },
                    ce = () => {
                        let U = f({
                            version: fr,
                            id: Lc,
                            site: Ye,
                            samplingRate: p,
                            clientSamplingRate: c
                        });
                        return je(), Po(Te(yl(Ts)), ({
                            hosts: D,
                            paths: q,
                            cookies: z,
                            cookieMatchers: X,
                            cspv: ye,
                            consent: lt
                        }) => ze(dt(D)) && ze(dt(q)) && ze(dt(z)) && ze(dt(X)) && ze(dt(ye)) && !qc() && !lt.length && !Wu.length) ? null : (U.entries = xt(), U)
                    },
                    re = () => {
                        R(Ts, ([, {
                            hosts: U,
                            paths: D,
                            cookies: q,
                            cookieMatchers: z,
                            cspv: X,
                            consent: ye
                        }]) => {
                            Io(U), Io(D), Io(q), Io(z), Io(X), tt(ye)
                        }), Io(Ts), tt(Wu)
                    },
                    w = U => {
                        let D = ce();
                        if (D === null || (re(), co || as(), is && (D.sessions = LE()), n)) return D;
                        (D.sessions || 0) > 0 && (D.currentConsent = Hr(yt(), Nt).purposes, D.defaultConsent = Hr(f({
                            purposes: ro(Ku)
                        }), Nt).purposes), is && (D.bounces = +(U && eT())), D.views = nT();
                        for (let {
                                allowed: X,
                                blocked: ye
                            }
                            of yl(v))
                            if (X || ye) {
                                D.purposes = I(v);
                                break
                            } S();
                        let q = Tr();
                        q.size && (D.regimes = !zu.length || io(q) === 1 ? Te(Se(q)) : fe(zu, X => ve(q, X)));
                        let z = Br();
                        return z.size && (D.signals = Te(Se(z))), D
                    },
                    Y = U => {
                        if (!i || !j(new W({
                                type: "beacon",
                                url: i
                            }), !1) || n && !is) return;
                        let D = w(U);
                        if (!D) return;
                        E = !0, h && g.log("Flushing telemetry data:", D);
                        let q = We(D);
                        My || by && D.sessions ? Os(i, {
                            method: "POST",
                            mode: "no-cors",
                            body: q
                        }) : _o.sendBeacon(i, q), E = !1, u || (u = !0)
                    },
                    K = [],
                    ne = U => {
                        n || T(K, U), y || (y = s(gn, P, async () => {
                            await new ge(D => {
                                d || (d = s(yn, P, () => {
                                    je(), D()
                                }))
                            }), d = null
                        }, a))
                    },
                    je = () => {
                        if (K.length) {
                            let {
                                length: U
                            } = K;
                            if (U) {
                                for (; U--;) K[U]();
                                tt(K)
                            }
                        }
                    },
                    et = () => {
                        E || (l || (s(Pe, P, "pagehide", () => {
                            Y(!0)
                        }), l = !0), m === null && (m = s(Pt, P, () => {
                            m = null, Y(!1)
                        }, (u ? o : t) * 1e3)))
                    },
                    He = U => (D, q) => {
                        var mo;
                        let z = k(N, q);
                        if (te(D, q, z)) return;
                        let {
                            [U]: X
                        } = ki(), ye = z ? D : `${q}${D}`, lt = ((mo = ae(X, ye)) != null ? mo : 0) + 1;
                        J(X, ye, lt)
                    },
                    Zt = He("hosts"),
                    wt = He("cspv"),
                    ln = (U, D) => {
                        let {
                            paths: q
                        } = ki(), z = typeof D == "string" ? D : s(In, D), X = Re(q, z), ye = X ? ae(q, z) : new Q;
                        X || J(q, z, ye), J(ye, U, (ae(ye, U) || 0) + 1)
                    },
                    Qo = ({
                        protocol: U,
                        host: D
                    }) => {
                        wt(D, U)
                    },
                    Bi = (U, D = !0) => {
                        ne(() => {
                            let q = `${U}`;
                            uT && se(ju, z => Ie(z, q)) || (T(Wu, q), Be && g.error(U), D && et())
                        })
                    },
                    Vi = (U, D) => {
                        var z;
                        let q = Le(U, D) ? "allowed" : "blocked";
                        for (let X of Se(U))
                            if (ve(lo, X)) {
                                let ye = ae(v, X);
                                ye[q] = ((z = ye[q]) != null ? z : 0) + 1
                            }
                    };
                return {
                    logRequestStats: (U, D = !0) => {
                        ne(() => {
                            if (cT) {
                                let z = Xr(U);
                                if (se(Yu, X => X(z))) return
                            }
                            if (pT && se($u, z => se(U.URLs, X => {
                                    let ye = X && me(X, "href").href;
                                    return ye && !Is(ye) && Ie(z, ye)
                                }))) return;
                            if (Js) {
                                for (let z of M(U.URLs))
                                    if (z) {
                                        let X = me(z, "protocol", "hostname", "host"),
                                            {
                                                protocol: ye
                                            } = X;
                                        if (ye === "data:") continue;
                                        U.type === "CSPV" && (Qo(X), D && et());
                                        let lt = iT(z),
                                            mo = aT(z),
                                            zt = Je(lt, mo);
                                        for (let jo of M(zt)) ln(z.hostname, jo);
                                        if (!lt.length) {
                                            let {
                                                hostname: jo
                                            } = X;
                                            Zt(jo, ye)
                                        }
                                    }
                            }
                            let {
                                purposes: q
                            } = U;
                            Vi(q, bt), D && et()
                        })
                    },
                    logCookieStats: (U, D = !0) => {
                        ne(() => {
                            let q = Iu(U);
                            if (!(q === "" || lT && se(Qu, z => Ie(z, q)))) {
                                if (Js) {
                                    let z = Jr(U, q),
                                        X = Pi(U, !1);
                                    Vi(X, dr);
                                    let {
                                        domain: ye
                                    } = U, lt = ye || Ye, {
                                        cookies: mo,
                                        cookieMatchers: zt
                                    } = ki();
                                    if (!fe(Ru, ([Lo, vm]) => {
                                            let Rm = Ie(Lo, q);
                                            return Rm && (Re(zt, vm) || J(zt, vm, Fn([
                                                [lt, 1]
                                            ]))), Rm
                                        }).length) {
                                        let Lo = ae(mo, z);
                                        Lo || (Lo = new Q, J(mo, z, Lo)), J(Lo, lt, (ae(Lo, lt) || 0) + 1)
                                    }
                                }
                                D && et()
                            }
                        })
                    },
                    logError: Bi
                }
            };
        var yT = 2147483647,
            wi, mT = !0,
            {
                consentPrecedence: zv
            } = H,
            ET = zv === "signals",
            Xu = `tcm${Ht?"MP":""}Consent`,
            Kv = () => {
                let e = qe[Xu],
                    t = e && Ze(e, f) || f();
                return Ht ? t[Ht] || f() : t
            },
            $v = e => {
                let t;
                if (Ht) {
                    let n = qe[Xu],
                        i = n && Ze(n, f) || f();
                    i[Ht] = e, t = We(i)
                } else t = We(e);
                qe[Xu] = t;
                let o = xT(),
                    r = jt(uo) + o - Mt();
                o && (wi && s(er, P, wi), r <= yT && (wi = s(Pt, P, em, jt(uo) + o - Mt())))
            },
            Ss, Ko = new Q,
            Jt, uo, Ir = !1,
            an = !1,
            $o = !1,
            cn, pn, zr, dT = new Q,
            Ku = new Q,
            Ps = f(),
            Qv = "Auto",
            lo = new B,
            Ui = new B,
            AT = [],
            jv = [ao],
            Rr, TT = () => Ss.types,
            us = async (e, t = an, o = $o, r = void 0, n = !0, i = De(), a = Ir, p = void 0) => {
                let c = qo(la(e), Jt, e),
                    l = a || an !== t || $o !== o || !!c;
                if (be && c) {
                    let u = f();
                    R(Fe(c), d => {
                        u[d] = !!Zu(d, c[d])
                    }), T(ki().consent, u)
                }
                let m = yt();
                R(Fe(e), u => {
                    var d;
                    (d = ae(Ko, u)) != null && d.configurable && (Jt[u] = e[u])
                }), $o = o, an = t, uo = i, Ir = l;
                let E = PT(r, p);
                $v(rm({
                    purposes: Jt,
                    timestamp: i,
                    updated: l,
                    confirmed: t,
                    prompted: o,
                    metadata: E.metadata,
                    metadataTimestamp: E.metadataTimestamp
                })), l && ai(eE, m, yt(), c), !bo && n && await Eo(Bt()), Yn && c && hE(), ti && pi(), lm && $c && !Le(Ui) ? mm() : li(cm)
            }, Kc = (e, t, o) => {
                var p, c, l, m;
                if (!Xt(e)) return Be && g.error(Oo("setConsent")), !1;
                let n = (p = o == null ? void 0 : o.confirmed) != null ? p : !0,
                    i = !!((c = o == null ? void 0 : o.prompted) != null ? c : $o),
                    a = s(Pn, us(t, n, i, o == null ? void 0 : o.metadata, !0, (l = o == null ? void 0 : o.timestamp) != null ? l : De(), Ir, (m = o == null ? void 0 : o.metadataTimestamp) != null ? m : De()), () => (h && g.log("Consent set to", Jt), !0));
                return o != null && o.waitForSync ? a : !0
            }, ST = async (e, t, o = !0, r = De()) => {
                if (Xt(e)) {
                    let {
                        metadata: i,
                        metadataTimestamp: a
                    } = PT(t, r);
                    cn = i, pn = a, h && g.log("Metadata set to", cn), !bo && o && await Eo(Bt())
                } else return Be && g.error(Oo("setConsentMetadata")), !1;
                return !0
            }, Yv = e => Po(e, t => Wc(t)), PT = (e, t) => {
                let o = e === !1,
                    r = e !== null && typeof e < "u" && (!pn || t && jt(t) > jt(pn));
                return {
                    metadata: o ? void 0 : r ? e : cn,
                    metadataTimestamp: o ? void 0 : r ? t : pn
                }
            }, rm = e => {
                if (!e) return yt();
                let {
                    purposes: t,
                    timestamp: o,
                    prompted: r,
                    confirmed: n,
                    updated: i,
                    metadata: a,
                    metadataTimestamp: p
                } = e;
                return an = !!(n || mT && !am && Yv(Te(Nt))), mT && (mT = !1), $o = !!r, Ir = !!i, cn = a, t && R(Fe(t), c => {
                    ve(Nt, c) && (Jt[c] = t[c])
                }), o && (uo = o), p && (pn = p), f({
                    purposes: Jt,
                    timestamp: uo,
                    confirmed: an,
                    prompted: $o,
                    updated: Ir,
                    metadata: a,
                    metadataTimestamp: pn
                })
            }, nm = (e = !0, t = !1) => {
                let {
                    tcmConsent: o
                } = qe;
                return o && delete qe.tcmConsent, Jt = f(Rr == null ? void 0 : Rr.purposes), rm(Rr), us(t ? ro(x(fe(Ne(Jt), ([r, n]) => {
                    var i;
                    return n && !((i = Ps.purposes) != null && i[r])
                }), ([r]) => [r, !1])) : Ps, !1, !1, !1, e, De(), !1, De())
            }, Le = (e, t) => {
                if (am) return !0;
                for (let o of Se(e)) {
                    let r = ae(Ko, o);
                    if (r != null && r.essential) return !0;
                    if (o === ao || !r) return t === bt ? Qc || jc && Le(Ui, t) : t === dr ? pm || LT && Le(Ui, t) : Le(e, bt) && Le(e, dr);
                    if (ve(Nt, o) && !Jt[o]) return !1
                }
                return !0
            }, sm = e => ($o = !!e, uo = De(), Eo(Bt())), yt = () => f({
                purposes: f(Jt),
                confirmed: an,
                prompted: $o,
                timestamp: uo != null ? uo : uo = De(),
                updated: Ir,
                metadata: cn && f(cn),
                metadataTimestamp: pn
            }), hT = () => Le(Ui), vT = () => Po(AT, e => !Jt[e]), RT = (e, t = !1) => {
                var r;
                let o = f();
                for (let n of M(Fe(Ps)))(!t || (r = ae(Ko, n)) != null && r.showInConsentManager) && (o[n] = e);
                return o
            }, IT = e => Kc(e, RT(!0, !0)), CT = e => Kc(e, RT(!1, !0)), es = e => typeof e > "u" || ue(e) && ze(M(e)) || C(B, e) && ze(Se(e)) ? ke(jv) : C(B, e) ? e : ke(e), Xv = (e, t) => {
                if (t) {
                    let o = Fe(t);
                    for (let r of M(o)) J(e, Bn(r), es(t[r]))
                }
            }, Bo = class extends Q {
                constructor(t) {
                    super(), Xv(this, t)
                }
            };
        Ke(Bo);
        var Er = new Bo,
            mc = (e, t, o = !1) => {
                o && YA(t);
                for (let [r, n] of dt(t)) J(e, r, n);
                h && g.log("Data flow purpose map loaded", t)
            },
            Jv = e => {
                let t = he(Bn(e), "."),
                    {
                        length: o
                    } = t;
                for (let r = 0; r < o; r++) {
                    let n = de(_e(t, r), ".");
                    if (Re(Er, n)) return n
                }
                return !1
            },
            j = (e, t = !0) => {
                let o = gt || e.allowed;
                if (t && (Ve && o && T(Wo, e), be && Kr(e), po.length)) {
                    let r = Xr(e);
                    for (let n of M(po)) n(r)
                }
                return o
            },
            Wr = async (e, t = !0) => j(e, t), fT = e => {
                F(e, ao)
            }, gT = (e, t) => vo(e.href, e[t].length), OT = (e, t) => {
                if (typeof e == "string") {
                    let o = e[0] === "/",
                        r = o && e[1] === "/" && e[2] === "/",
                        n = r ? "origin" : "protocol";
                    return o ? ft(gT(t, n), gT(it(r ? vo(e, 2) : e, "href", "protocol", "origin"), n)) : ft(t.href, e)
                }
                return Ie(e, t.href)
            }, Ju = (e, t, o) => {
                let r = fe(e, ({
                    matcher: n
                }) => OT(n, o));
                for (let {
                        purposes: n
                    }
                    of M(r))
                    for (let i of Se(n)) F(t, i);
                return !!r.length
            }, Pc = ({
                URLs: e
            }) => {
                let t = new B;
                for (let o of M(e)) o && Ju(um, t, me(o, "href", "origin", "protocol"));
                return io(t) !== 0 && !Le(t, dr)
            }, Vc = h && new B, Zv = (e, t, o) => {
                for (let {
                        matcher: r
                    }
                    of M(e)) OT(r, t) && F(o, r)
            }, iT = e => {
                let t = new B;
                Vo.length && Zv(Vo, e, t);
                let r = [];
                for (let n of Se(t)) T(r, n);
                return r
            }, aT = e => {
                let t = new B;
                if (qu.length)
                    for (let {
                            source: r
                        }
                        of M(Fu($r, e.searchParams))) F(t, r);
                return Te(t)
            }, Ai = (e, t = !0) => {
                var p;
                let o = Mo && WE(e);
                if (Mo && o !== null && Re(ps, o)) return ae(ps, o);
                let {
                    URLs: r
                } = e, n = x(fe(r, c => c !== null), c => {
                    var I;
                    let l = new B,
                        m = me(c, "hostname", "href", "protocol", "origin", "searchParams"),
                        {
                            href: E,
                            hostname: u,
                            protocol: d,
                            searchParams: y
                        } = m;
                    if (k(Va, d)) return F(l, Yt), l;
                    let A = Vo.length && Ju(Vo, l, m);
                    e.type === "DOM:script" && (A = zc.length && Ju(zc, l, m) || A, !jn() && !A && F(l, Yt));
                    let v = $r.length && qu($r, l, y);
                    if (Er) {
                        let S = Jv(u);
                        if (S !== !1) {
                            let N = ae(Er, S);
                            for (let $ of Se(N))(!((I = ae(Ko, $)) != null && I.essential) || !A && !v && ze(Se(l))) && F(l, $)
                        } else fT(l)
                    } else fT(l);
                    return h && t && (ve(Vc, E) || (F(Vc, E), g.log(`Purposes for ${E}`, l))), Mo && o !== null && J(ps, o, l), l
                }), i = new B, a = Po(n, c => !c || se(Te(c), l => {
                    var m;
                    return (m = ae(Ko, l)) == null ? void 0 : m.essential
                }));
                for (let c of M(n))
                    if (c)
                        for (let l of Se(c))(a || !((p = ae(Ko, l)) != null && p.essential)) && F(i, l);
                return i
            }, im = async (e, t = !0) => Ai(e, t), Wc = e => {
                var o;
                let t = (o = ae(Ko, e)) == null ? void 0 : o.optOutSignals;
                return !!t && se(t, r => ve(Br(), r))
            }, eR = (e, t) => {
                var o;
                if ((!t || ET) && Wc(e)) return !0;
                for (let r of Se(Tr())) {
                    let n = (o = rt(bT, ([i]) => k(i, r))) == null ? void 0 : o[1];
                    if (n && k(n, e)) return !0
                }
                return !1
            }, Zu = (e, t, o) => {
                if (typeof t == "boolean") return t;
                let r = Ct(`${t}`);
                for (let n of M(r)) switch (n) {
                    case pe:
                        return !1;
                    case Qv:
                        if (eR(e, o)) return !1;
                        break
                }
                return t
            }, xT = () => {
                let {
                    consentExpiry: e
                } = H;
                return e ? +e * 6e4 : 0
            }, em = () => {
                let {
                    onConsentExpiry: e
                } = H, t = e === "ResetOptIns", r = e === "Reset" || t;
                wi = null, h && g.log(`Consent has expired. ${r?"Resetting":"Re-prompting for"} consent${t?" opt-ins":""}`), r ? nm(!0, t) : sm(!1)
            }, MT = () => {
                var y, A, v, I;
                h && g.log(`Network events with unknown purposes are ${Qc?"always allowed":`${jc?"":"not "}consentable`}`);
                let e = {
                        defaultConsent: "Auto",
                        configurable: !0,
                        essential: !1,
                        optOutSignals: ["DNT"]
                    },
                    t = {
                        [Yt]: {
                            name: Yt,
                            description: "",
                            defaultConsent: !0,
                            configurable: !1,
                            essential: !0
                        },
                        [ao]: {
                            name: ao,
                            description: "",
                            defaultConsent: !1,
                            configurable: !1,
                            essential: !1
                        }
                    },
                    o = (y = Bc) == null ? void 0 : y.types;
                o && R(Fe(o), S => {
                    o[S] = O(O({}, e), o[S])
                });
                let r = (v = (A = Bc) == null ? void 0 : A.useDefault) != null ? v : !0,
                    n = O(O({}, r && {
                        Functional: O({
                            name: "Functionality",
                            description: "Personalization, autofilled forms, etc."
                        }, e),
                        Analytics: O({
                            name: "Analytics + Performance",
                            description: "Help us learn how our site is used and how it performs."
                        }, e),
                        Advertising: O({
                            name: "Targeting / Advertising",
                            description: "Helps us and others serve ads relevant to you."
                        }, e),
                        SaleOfInfo: Ee(O({
                            name: "Sale of personal information",
                            description: ""
                        }, e), {
                            optOutSignals: ["GPC", "DNT"]
                        })
                    }), o);
                Ss = f({
                    useDefault: r,
                    types: O(O({}, n), t)
                });
                let i = (S, N) => N === "boolean" || N === "string",
                    a = (I = Bc) == null ? void 0 : I.defaultConsent;
                if (typeof a < "u") {
                    let S = i(a, typeof a) ? (() => {
                        let N = f();
                        return R(Fe(n), $ => {
                            N[$] = a
                        }), N
                    })() : a;
                    R(Fe(S), N => {
                        var te;
                        let $ = (te = Ss.types) == null ? void 0 : te[N];
                        $ ? $.defaultConsent = S[N] : Ce && g.warn(`Default consent specified for unrecognized tracking purpose: ${We(N)}`)
                    })
                }
                tm && (h && g.log("Using embedded purpose map"), mc(Er, new Bo(tm), !0)), R(Fe(Ss.types), S => {
                    let N = Ss.types[S],
                        $ = N.configurable && !N.essential && (!dc || ve(Nt, S));
                    F(lo, S), J(Ko, S, N), $ && (T(AT, S), F(Ui, S)), N.configurable && (J(dT, S, "defaultConsent" in N ? Zu(S, N.defaultConsent) : !1), J(Ku, S, "defaultConsent" in N ? Zu(S, N.defaultConsent, !0) : !1))
                }), Jp(Ss);
                let p = S => {
                    var te;
                    if (!ET) return;
                    let {
                        purposes: N
                    } = S, $;
                    for (let [ee, Z] of Ne(N)) Z && ((te = ae(Ko, ee)) != null && te.configurable) && Wc(ee) && ($ = !0, N[ee] = !1);
                    $ && (S.timestamp = De(), S.confirmed = S.updated = !0)
                };
                for (let [S, N] of dt(dT)) Ps[S] = N;
                let c = Kv(),
                    {
                        confirmed: l,
                        purposes: m
                    } = c;
                Rr = f({
                    purposes: f(Ps),
                    confirmed: an,
                    updated: Ir = Ir || !!(m && qo(Te(lo), m, Ps)),
                    prompted: $o
                });
                let E = l ? c : Rr;
                E !== Rr && p(Rr), p(E), Jt = f(E == null ? void 0 : E.purposes), rm(E), ai(Zy, null, yt(), null, se(Te(Nt), S => Wc(S)) ? Br() : null), zr = new Bo(om || f()), om && h && g.log("Using embedded CSP-only purpose map", zr), XA(zr);
                let u = xT(),
                    d = jt(uo) + u - Mt();
                u && (uo && d <= 0 ? em() : d <= yT && (wi = s(Pt, P, em, d)))
            };
        var Gi, hs, Hi, qt = class {
            constructor({
                name: t,
                value: o,
                timestamp: r = De(),
                expires: n,
                maxAge: i,
                domain: a,
                path: p,
                sameSite: c,
                partitioned: l,
                secure: m,
                persist: E = !0,
                mutator: u = () => ZE(this)
            }, d = !0, y = !0) {
                Oe(this, Gi, void 0);
                Oe(this, hs, null);
                Oe(this, Hi, void 0);
                G(this, "name");
                G(this, "value");
                G(this, "timestamp");
                G(this, "expires");
                G(this, "maxAge");
                G(this, "domain");
                G(this, "path");
                G(this, "secure");
                G(this, "sameSite");
                G(this, "partitioned");
                G(this, "persist");
                G(this, "mutator");
                G(this, "allow", () => {
                    this.allowed = !0
                });
                G(this, "deny", () => {
                    this.allowed = !1
                });
                G(this, "toJSON", () => {
                    let {
                        name: t,
                        value: o,
                        timestamp: r,
                        expires: n,
                        maxAge: i,
                        domain: a,
                        path: p,
                        sameSite: c,
                        partitioned: l,
                        secure: m
                    } = this;
                    return {
                        name: `${t}`,
                        value: `${o}`,
                        timestamp: r,
                        expires: n,
                        maxAge: i,
                        domain: a,
                        path: p,
                        sameSite: c,
                        partitioned: l,
                        secure: m
                    }
                });
                Ae(this, Gi, y);
                let A = typeof n,
                    v = A !== "undefined" && n !== null && (A === "number" ? n : +jt(`${n}`));
                this.name = t, this.value = o, this.timestamp = r, typeof v == "number" && (this.expires = v), this.maxAge = i, this.domain = a, this.path = p, this.sameSite = c, this.partitioned = l, this.secure = m, this.persist = E, this.mutator = u, d && Vy(this)
            }
            get purposes() {
                var t;
                return (t = le(this, hs)) != null ? t : Ae(this, hs, Pi(this, le(this, Gi)))
            }
            set purposes(t) {
                if (!C(B, t)) throw new $t("PendingCookieMutation.purposes must be a Set");
                let o = le(this, hs);
                o === null ? Ae(this, hs, o = new B) : Ro(o);
                for (let r of Se(t)) {
                    if (typeof r != "string") throw new $t("Tracking purposes must be strings");
                    F(o, r)
                }
            }
            get allowed() {
                var t;
                return (t = le(this, Hi)) != null ? t : Le(this.purposes, dr)
            }
            set allowed(t) {
                if (t !== null && typeof t != "boolean") throw new $t("Pending event allow/deny state must be true, false, or null");
                Ae(this, Hi, t)
            }
        };
        Gi = new WeakMap, hs = new WeakMap, Hi = new WeakMap;
        Ke(qt);
        var Nc = ({
            name: e,
            value: t,
            timestamp: o,
            expires: r,
            maxAge: n,
            domain: i,
            path: a,
            sameSite: p,
            secure: c
        }) => new qt({
            name: e,
            value: t,
            timestamp: o,
            expires: r,
            maxAge: n,
            domain: i,
            path: a,
            sameSite: p,
            secure: c
        });
        var dm = Fc(),
            [tR, oR] = dm,
            fm = ["name", "value", "timestamp", "expires", "domain", "path", "secure", "sameSite", "partitioned", "persist", "purposes", "allowed", "toJSON"],
            ri = Es(fm, !1, dm),
            rR = Je(fm, "allow", "deny"),
            Wy = Es(rR, !0, dm),
            nR = _e(fm, 0, 9),
            ni = (e, t = !0) => {
                let o = Fe(e),
                    r = fe(o, i => k(nR, i));
                if (r.length < o.length && Ce) {
                    let i = fe(o, a => !k(r, a));
                    g.warn(`The following properties are not allowed and will be ignored: ${de(i," ")}`)
                }
                let n = f();
                for (let i of M(r)) n[i] = Ur(e[i]);
                return ri(new qt(n, t))
            },
            gm = e => C(qt, e) || e[tR] === oR;
        var sR = (e, t = 0) => We(e, void 0, t),
            NT = (e = f()) => {
                let {
                    endpoint: t,
                    save: o,
                    space: r = o ? 2 : 0,
                    filename: n
                } = e, i = yt();
                Qe && Dc(Qe);
                let a = f(O({
                        version: fr,
                        consent: i,
                        url: qn(),
                        requests: pt,
                        mutations: on,
                        cookies: Dt,
                        cookieMutations: Ci
                    }, co && f({
                        sentRequests: Wo,
                        setCookies: Ft
                    }))),
                    p = sR(a, r);
                if ((o || t) && (t && _o.sendBeacon(t, p), o)) {
                    let c = Co("a"),
                        l = new Qm([p], {
                            type: "application/json"
                        }),
                        m = lg(l);
                    s(hg.set, c, m), s(Pg.set, c, n || `${Ye||"airgap"} requests (${kg(new Ut(Ma))}).json`), s(ga, c), s(Pt, P, ji(ug, Xo, m), 1e4)
                }
                return vn(p)
            };
        var DT = async () => {
            if (!ym) {
                Ce && g.warn("getMetadata(): No metadata URL defined");
                return
            }
            let e = await s(st, yr(ym));
            if (e && e.body) {
                let t = await s(st, s(Ia, e));
                return Ze(t)
            }
            return Be && g.error("Failed to load remote metadata"), {}
        };
        var kt = (e, t) => new Ji("airgap-block", {
            blockedURI: t,
            documentURI: qn(),
            disposition: "enforce",
            effectiveDirective: `${e} blocked by Transcend Consent Manager`,
            originalPolicy: "",
            violatedDirective: "",
            statusCode: 0
        });
        var _T = () => {
            Hs && (Cr.prototype.navigate = function(...e) {
                let t = this,
                    o = () => L(Hs, t, e);
                if (V()) return o();
                let [r] = e, n = new W({
                    type: "navigation",
                    url: r,
                    mutator: o,
                    persist: !1
                }), i = `${n.serialize()}`;
                if (`${r}` !== i && (e[0] = i), !j(n)) throw n.mutator = o, ie(n), kt("navigation.navigate()", r);
                return o()
            })
        };
        var iR = () => {
                Cr && _T()
            },
            aR = () => {
                if (!Cr) return;
                let e = So(ld.prototype),
                    t = So(ud.prototype);
                s(addEventListener, Cp, "navigate", o => {
                    if (V()) return;
                    let {
                        destination: r,
                        info: n
                    } = e(o, "destination", "info"), {
                        url: i
                    } = t(r, "url"), a = new W({
                        type: "navigation",
                        url: i,
                        persist: !1
                    }), p = a.serialize(), {
                        allowed: c
                    } = a;
                    if (!c || `${p}` != `${i}`) {
                        s(ma, o);
                        let l = () => s(Hs, Cp, p, {
                            info: n
                        });
                        if (c) {
                            l();
                            return
                        }
                        a.mutator = l, ie(a)
                    }
                }), h && g.log("Navigation control initialized")
            },
            kT = () => {
                iR(), aR()
            };
        var wT = () => {
            np && (P.EventSource = class extends np {
                constructor(...e) {
                    if (V()) {
                        super(...e);
                        return
                    }
                    let [t] = e, o = new W({
                        type: "eventsource",
                        url: t,
                        omitCredentials() {
                            var n, i;
                            return ((n = e[1]) != null ? n : e[1] = f()).withCredentials = !1, ((i = this.requestInit) != null ? i : this.requestInit = f()).credentials = "omit", !0
                        }
                    }), r = o.serialize();
                    if (j(o))`${r}` != `${t}` && (e[0] = r), super(...e);
                    else throw kt("EventSource connection", r)
                }
            })
        };
        var UT = () => {
            tl && (ra.prototype.sendBeacon = function(...e) {
                let t = this,
                    o = () => L(tl, t, e);
                if (V()) return o();
                if (e.length) {
                    let [r, n] = e, i = new W(O({
                        type: "beacon",
                        url: r,
                        mutator: o,
                        persist: !0
                    }, n !== null && typeof n < "u" && f({
                        requestInit: f({
                            method: "POST",
                            body: n
                        })
                    }))), a = `${i.serialize()}`;
                    if (`${r}` !== a && (e[0] = a), !j(i)) return ie(i), !1
                }
                return o()
            })
        };
        var cR = ["_self", "_top", "_parent"],
            GT = () => {
                P.open = function(...e) {
                    let t = this,
                        o = () => L(Zm, t, e);
                    if (V()) return o();
                    let [r, n] = e, i = new W({
                        type: "navigation",
                        url: r,
                        persist: !1
                    }), a = () => {
                        let p = i.serialize();
                        return `${r}` != `${p}` && (e[0] = p), o()
                    };
                    if (!oc && (e.length <= 1 || k(cR, n) || j(i))) return a();
                    throw i.mutator = a, ie(i), kt("window.open()", r)
                }
            };
        var HT = () => {
            if (Xi) {
                let {
                    register: e
                } = Xi.prototype;
                Xi.prototype.register = function(...t) {
                    let o = () => L(e, this, t);
                    if (V()) return o();
                    let [r] = t, n = new W({
                        type: "worker",
                        url: r
                    }), i = n.serialize();
                    if (`${r}` != `${i}` && (t[0] = i), j(n)) return o();
                    throw kt("Service Worker registration", i)
                }
            }
        };
        var FT = () => {
            sp && (P.SharedWorker = class extends sp {
                constructor(...e) {
                    if (V()) {
                        super(...e);
                        return
                    }
                    let [t] = e, o = new W({
                        type: "worker",
                        url: typeof t == "string" ? t : t.href,
                        omitCredentials() {
                            var i;
                            let n = e[1];
                            return typeof n != "object" && (n = f(O({
                                credentials: "omit"
                            }, typeof n == "string" && f({
                                name: n
                            })))), e[1] = n, ((i = this.requestInit) != null ? i : this.requestInit = f()).credentials = "omit", !0
                        }
                    }), r = o.serialize();
                    if (j(o))`${r}` != `${t}` && (e[0] = r), super(...e);
                    else throw kt("SharedWorker", r)
                }
            })
        };
        var qT = () => {
            rp && (P.WebSocket = class extends rp {
                constructor(...e) {
                    if (V()) {
                        super(...e);
                        return
                    }
                    let [t] = e, o = new W({
                        type: "websocket",
                        url: typeof t == "string" ? t : t.href
                    }), r = o.serialize();
                    if (j(o))`${r}` != `${t}` && (e[0] = r), super(...e);
                    else throw kt("WebSocket connection", r)
                }
            })
        };
        var BT = () => {
            P.Worker = class extends $m {
                constructor(...e) {
                    if (V()) {
                        super(...e);
                        return
                    }
                    let t = `${e[0]}`,
                        o = new W({
                            type: "worker",
                            url: t,
                            omitCredentials() {
                                var n, i;
                                return ((i = e[1]) != null ? i : e[1] = (n = this.requestInit) != null ? n : this.requestInit = f()).credentials = "omit", !0
                            }
                        }),
                        r = o.serialize();
                    if (j(o))`${r}` != `${t}` && (e[0] = r), super(...e);
                    else throw kt("Worker", r)
                }
            }
        };
        var VT = () => {
            if (ia) {
                let {
                    addModule: e
                } = ia.prototype;
                ia.prototype.addModule = async function(...t) {
                    let o = () => L(e, this, t);
                    if (V()) return o();
                    let [r] = t, n = "worker", i = function() {
                        var c, l;
                        return ((l = t[1]) != null ? l : t[1] = (c = this.requestInit) != null ? c : this.requestInit = f()).credentials = "omit", !0
                    }, a = () => {
                        let c = p.serialize();
                        return `${r}` != `${c}` && (t[0] = c), o()
                    }, p = new W({
                        type: "worker",
                        url: r,
                        omitCredentials: i
                    });
                    return await Wr(p) ? a() : new ge(c => {
                        let l = () => {
                            c(a())
                        };
                        ie(new W({
                            type: n,
                            url: r,
                            mutator: l,
                            omitCredentials: i
                        }))
                    })
                }
            }
        };
        var WT = () => {
            GT(), Qy(), UT(), HT(), FT(), qT(), BT(), jy(), VT(), wT()
        };
        var zT = [];
        var KT = [];
        var $T = async (e = !0) => {
            Lu(), h && Ro(Vc), Ve && as(), !bo && e && await Eo(Bt({
                sync: ["events"],
                reset: !0
            }))
        }, QT = async e => Xt(e) ? (await $T(), h && g.log(`${Lt} caches have been cleared`), !0) : (Be && g.error(Oo("clear")), !1), Em = async e => {
            let t = typeof e == "boolean",
                {
                    autoReload: o = !0,
                    autoSync: r = !0
                } = t ? f({
                    autoReload: e,
                    autoSync: e
                }) : e || f();
            return await $T(!1), rT(), await nm(!1), !bo && r && await Eo(Bt({
                reset: !0
            })), h && g.log(`${Lt} data has been reset`), o && On(), !0
        }, jT = async (e, t) => Xt(e) ? Em(t) : (Be && g.error(Oo("reset")), !1);
        var {
            privacyPolicy: pR,
            firstParty: lR = "",
            xdiAllowed: uR = pR || ""
        } = H, {
            syncGroups: YT,
            xdiCommonEndpoint: pG = fA
        } = H, XT = x(zs(lR), e => me(e, "origin", "hostname")), JT = YT ? new $s(Ze(YT)) : null, ZT = x(zs(uR), e => me(e, "hostname").hostname);
        var Fi = qa("Transcend XDI");
        var eS = (e, t, o) => {
            var n, i;
            let r = !1;
            if (e) {
                let a = P.transcend,
                    {
                        readyQueue: p = []
                    } = t;
                p && h && Fi.log("transcend.xdi.ready() queue = [", p, "]"), a ? a.xdi = t : P.transcend = f(Ee(O({}, a), {
                    xdi: t
                })), o && (t.host = (...c) => (r = !0, L(o, t, c))), R(p, c => {
                    try {
                        c(t)
                    } catch (l) {
                        yo(l)
                    }
                }), delete t.host, tt(p)
            }
            o && P !== Yi && (ZT.length || XT.length || (i = (n = JT) == null ? void 0 : n.hosts) != null && i.length) && !r && o(), Qt && pr(Qt)
        };
        var tS = !1,
            {
                xdiConnectTimeout: dR = 3e4
            } = H,
            fR = 0,
            Am = (e, t = +dR) => {
                if (typeof e != "string") throw new mt("XDI endpoint unspecified");
                let o = `${fR++}`,
                    r = it(e, "href", "origin", "hash"),
                    {
                        origin: n,
                        href: i
                    } = r;
                return h && Fi.log(`Connecting to endpoint: ${i}`), new ge((a, p) => {
                    let c = 0,
                        l = Co("iframe"),
                        m = t && s(Pt, P, () => {
                            p(new mt(`XDI connection to ${i} timed out.`))
                        }, t),
                        E = y => {
                            let {
                                ports: [A],
                                origin: v,
                                data: I
                            } = Dn(y, "ports", "origin", "data");
                            if (!I) return;
                            let {
                                id: S,
                                ready: N,
                                "transcend-xdi": $,
                                commands: te = new B
                            } = I;
                            if (!(+$ >= 1 && N) || o !== S || !A) return;
                            if (v !== n) {
                                Ce && Fi.warn(`Connection attempt from ${v} refused`);
                                return
                            }
                            s(nr, P, "message", E), m && s(er, P, m);
                            let Z = new Q,
                                Ge = ({
                                    data: Wt
                                }) => {
                                    if (!Wt) return;
                                    let {
                                        id: xt,
                                        error: ce,
                                        results: re
                                    } = Wt;
                                    if (Re(Z, xt)) {
                                        let [w, Y] = ae(Z, xt);
                                        ce ? Y(new mt(ce)) : w(re)
                                    }
                                };
                            s(Pe, A, "message", Ge), s(Fd, A);
                            let At = Wt => new ge((...xt) => {
                                J(Z, Wt, xt)
                            });
                            a({
                                commands: te,
                                run: (Wt, xt, ce) => {
                                    let re = c++,
                                        w = Lr(ce) && s(Pt, P, () => {
                                            p(new mt(`Request sent to ${v} timed out.`))
                                        }, ce),
                                        Y = s(Pn, At(re), K => (w && s(er, P, w), K));
                                    return s(Hd, A, {
                                        id: re,
                                        command: Wt,
                                        options: xt
                                    }), Y
                                },
                                close: () => {
                                    s(nr, A, "message", Ge), s(qd, A), pr(l)
                                }
                            })
                        };
                    s(Pe, P, "message", E), l.style.display = "none", l.width = l.height = "0";
                    let u = new St;
                    "ancestorOrigins" in No || s(vt, u, "xdi-client-origin", n, s(go, P, Ao)), s(vt, u, "xdi-channel-id", o), s(vt, u, "log", Pl), Al(r, u), s(Tg.set, l, r.href);
                    let d = s(Xe, oe);
                    s(ks, d, l)
                })
            },
            oS, rS;
        if (tS) {
            let e = Ee(O({
                readyQueue: []
            }, (rS = (oS = P) == null ? void 0 : oS.transcend) == null ? void 0 : rS.xdi), {
                ready(t) {
                    t(e)
                },
                connect: Am
            });
            eS(tS, e)
        }
        var iS = [],
            gR = (e, ...t) => new ge((o, r) => {
                Tm ? (T(iS, i => {
                    o(L(i[e], i, t))
                }), s(st, os({
                    url: Tm,
                    name: "Transcend XDI",
                    sync: !0
                }), r)) : r(new mt("Unable to determine Transcend XDI module location."))
            }),
            yR = ji(gR, null, "host"),
            nS, sS, Sm = Ee(O({
                ready: e => {
                    e(Sm)
                },
                readyQueue: iS
            }, (sS = (nS = P) == null ? void 0 : nS.transcend) == null ? void 0 : sS.xdi), {
                connect: Am
            }),
            aS = () => {
                P !== Yi && (rc.length || Iy || Cy) && yR()
            };
        var {
            airgap: b,
            transcend: lu
        } = P;
        if (b != null && b.initialized && (b == null ? void 0 : b[br]) === Lt) throw new mt("airgap.js is already initialized");
        var $c = !1,
            Uc = !1,
            Kr, si, Ii, cS = b == null ? void 0 : b.macroregions,
            TE = x(ue(cS) ? cS : cy, ([e, t]) => [e, he(t, " ")]),
            pS = b == null ? void 0 : b.regionRegimesMap,
            uu = ue(pS) ? pS : py,
            lS = b == null ? void 0 : b.regimePurposeOptOuts,
            bT = ue(lS) ? lS : Ul,
            zu = H.regimePrecedence ? he(H.regimePrecedence, ";") : [],
            uS = b == null ? void 0 : b.regimePurposeScopes,
            dc = H.regimePurposeScopes !== pe,
            fc = ue(uS) ? uS : wl,
            Nt = pu(fc),
            am = ze(Se(Nt)),
            cm = H.autoReload !== pe,
            Bc = b == null ? void 0 : b.purposes,
            {
                unknownRequestPolicy: Pm,
                unknownCookiePolicy: hm
            } = H,
            Qc = !Vr && (!Pm || Pm === "allow"),
            jc = !Vr && (Qc || Pm === "require-full-consent"),
            pm = !hm || hm === "allow",
            LT = pm || hm === "require-full-consent",
            lm = H.disableWhenConsented !== pe,
            TS, mS = (TS = H.ui === pe ? !1 : H.ui) != null ? TS : b == null ? void 0 : b.ui,
            dS = mS && me(ut(`${mS}${Xs}`, Qn), "href").href,
            ER = H.lazyLoadUi === we,
            SS, fS = (SS = H.xdi) != null ? SS : b == null ? void 0 : b.xdi,
            Tm = fS && me(ut(`${fS}${Xs}`, Qn), "href").href,
            gS = b == null ? void 0 : b.metadata,
            ym = gS && me(ut(gS, Qn), "href").href,
            Lc = b == null ? void 0 : b.id,
            tm = b == null ? void 0 : b.purposeMap,
            om = b == null ? void 0 : b.csp,
            eA = b == null ? void 0 : b.cookies,
            hu = b == null ? void 0 : b.watchers,
            Tc = b == null ? void 0 : b.overrides,
            cc = b == null ? void 0 : b.cookieOverrides,
            PS, vs = at((PS = H.replay) != null ? PS : ""),
            Yc = ["requests", "mutations", "cookies"],
            Xc = !vs || k(za, vs) ? Yc : vs === pe ? [] : Ie(/\s|,/, vs) ? Ct(vs) : [vs],
            Ot = k(Xc, Yc[0]),
            rn = k(Xc, Yc[1]),
            _t = k(Xc, Yc[2]);
        tt(Xc);
        var $r = [],
            yS = e => `R:${s(Bd,e)}:${s(In,e)}`,
            ui = ({
                matcher: e,
                purposes: t = [],
                regex: o = !1
            }, r, n = $r, i) => {
                if (n && typeof e == "string" && ft(e, "?"))
                    for (let [a, p] of s(sr, new St(e))) {
                        let c = f({
                            param: a,
                            value: p === "" ? null : p,
                            purposes: ke(t),
                            source: e
                        });
                        if (i) {
                            let l = It(n, ({
                                source: m
                            }) => e === m);
                            l !== -1 ? $e(n, l, 1, c) : T(n, c)
                        } else T(n, c);
                        break
                    } else {
                        let a = f({
                            matcher: o && typeof e == "string" ? new eo(e) : e,
                            purposes: ke(t)
                        });
                        if (i) {
                            let {
                                matcher: p
                            } = a, c = typeof p != "string" ? yS(p) : p, l = It(r, ({
                                matcher: m
                            }) => (typeof m == "string" ? m : yS(m)) === c);
                            l !== -1 ? $e(Vo, l, 1, a) : T(r, a)
                        } else T(r, a)
                    }
            },
            AR = b == null ? void 0 : b.regulatedPaths,
            Vo = [];
        R(Je(zT, AR || []), e => {
            ui(e, Vo)
        });
        var TR = b == null ? void 0 : b.regulatedScripts,
            zc = [];
        R(Je(KT, Je(TR || [])), e => {
            ui(e, zc)
        });
        var ES = b == null ? void 0 : b.omitCredentials,
            um = [];
        ue(ES) && R(ES, e => {
            ui(e, um, !1)
        });
        var {
            requests: $u = [],
            cookies: Qu = [],
            errors: ju = [],
            requestConditions: Yu = []
        } = (b == null ? void 0 : b.suppressTelemetry) || f(), cT = Yu.length, pT = $u.length, lT = Qu.length, uT = ju.length, qi = H.protect, hS = () => {
            if (!(Fo && Ie(/^(?:app|sync)\.transcend\.io$/, Ye))) {
                if (typeof allowedHosts < "u" && ue(allowedHosts)) {
                    let {
                        port: e
                    } = No;
                    if (Ye && !mr(allowedHosts, Ye, e)) throw new mt(`Transcend Consent Manager Error: This build of Transcend Consent Manager cannot run on ${Ao}! If you are the website owner, try adding this domain to your domain list: https://app.transcend.io/consent-manager/developer-settings`)
                }
                if (h && g.tag("Transcend", () => {
                        g.groupCollapsed("Initializing airgap.js core")
                    }), gt && Ce && g.warn("Report-only mode enabled"), Ce && sc && g.warn("Privileged API authorization checks disabled"), h) {
                    let e = [];
                    Ot || T(e, "requests"), rn || T(e, "mutations"), _t || T(e, "cookies"), g.log(`Smart Quarantine replay ${e.length?`disabled for ${de(e,", ")}`:"enabled"}`), cm || g.log("Auto-reload disabled")
                }
                aS(), mm(), zE()
            }
        }, Pr = Ee(O({
            readyQueue: [],
            ready(e) {
                T(this.readyQueue, e)
            }
        }, lu), {
            xdi: Sm,
            [br]: "Transcend"
        });
        R(Je(x(["autoShow", "show", "hide", "toggle"], e => `${e}ConsentManager`), "doNotSell", "setSecondaryPolicy", "setPrivacyPolicy", "getViewState"), e => {
            rg(Pr) || (Pr[e] = (...t) => new ge(o => {
                var r, n;
                (n = (r = P) == null ? void 0 : r.transcend) == null || n.ready(async i => {
                    await L(i[e], i, t), o()
                }), RS()
            }))
        });
        var vS = !1,
            nE = () => vS,
            SR = async () => {
                h && g.groupEnd(), g.tag("Consent Manager"), await RA();
                let e = iy(),
                    {
                        prompt: t
                    } = H;
                if (e === !1 && t && t !== pe && t !== "0") {
                    let o = t === "auto" ? 1 : +t;
                    Vu(o, be ? 1 / 0 : o) && Pr.autoShowConsentManager()
                } else be && Vu();
                sy() && Em(), e !== !1 && (e === "" ? Pr.showConsentManager() : Pr.showConsentManager({
                    viewState: e
                })), vS = !0, rE()
            }, ku = () => {
                Uc || (Uc = !0, DE(), ii(), WT(), !qi || qi === we || qi === "document" ? wc(document) : qi === pe ? h && g.log("DOM protection disabled") : R(og(document, qi), e => {
                    wc(e)
                }), h && g.log("Request regulation active"))
            }, RS = () => new ge(async (e, t) => {
                var o, r, n;
                dS && !yE() && (await s(st, os({
                    url: dS,
                    name: "consent manager UI"
                }), t), (n = (r = (o = P) == null ? void 0 : o.transcend) == null ? void 0 : r.ready) == null || n.call(r, () => {
                    e()
                }))
            }), AS = !1, mm = () => {
                if (AS) return;
                if (AS = !0, EE(), MT(), uA(P), h && (Ht && g.log("Consent partition:", Ht), g.log("Current tracking consent preferences", yt().purposes), Qe && g.log(`Quarantined requests expire after ${ec} minutes.`), Kn < 1 && g.log(`TELEMETRY_SAMPLE_RATE = ${Kn} - TELEMETRY_SAMPLED = ${Vl}`), $n < 1 && g.log(`REQ_COOKIE_SAMPLE_RATE = ${$n} - REQ_COOKIE_SAMPLED = ${Js}`)), be) {
                    let o = sT(Zs, +vy, +Py, +Ry, xy, js, +hy, +Kn, +$n);
                    Kr = o.logRequestStats, si = o.logCookieStats, Ii = o.logError
                }
                Ve && UE(), RE(), lm && jc && Le(lo) ? ($c = !0, h && g.log.styled([Wa, ""], 'All tracking purposes are consented and unknown events are allowed. Event regulation disabled with %cdisable-when-fully-consented="on"%c option')) : ($c = !1, Ny && ku(), ti && XE(), oc && kT()), P.transcend = Pr;
                let {
                    readyQueue: e = []
                } = b || f(), t = uc;
                t.ready = o => {
                    o(t)
                }, t.toggle = Hy, t.getMetadata = DT, t.getPurposes = (o, r = !0) => im(jr({
                    type: Lt,
                    url: o
                }, r)), t.getRequestPurposes = (o, r = !0) => im(Hu(o) ? o : jr(o, r), !1), t.getCookiePurposes = (o, r = !0) => JE(gm(o) ? o : ni(o, r), !1), t.isAllowed = (o, r = !0) => Wr(jr({
                    type: Lt,
                    url: o
                }, r), !1), t.isCookieAllowed = (o, r = !0) => Oc(gm(o) ? o : ni(o, r), !1), t.isRequestAllowed = (o, r = !0) => Wr(Hu(o) ? o : jr(o, r), !1), t.getRegimePurposes = o => pu(fc, o), t.getConsent = yt, t.setConsent = Kc, t.setConsentMetadata = ST, t.optIn = IT, t.optOut = CT, t.isOptedIn = hT, t.isOptedOut = vT, t.getPurposeTypes = TT, t.getRegimes = () => ke(Tr()), t.getPrivacySignals = () => ke(Br()), t.override = IE, t.overrideCookies = By, t.watch = _E, t.watchCookies = zy, t.activateCSP = ii, t.protect = wc, t.reset = jT, t.resolve = CE, t.sync = Bt, t.clear = QT, t.regulateAllScripts = Uy, t.areAllScriptsRegulated = jn, t.export = NT, t.setPrompted = sm, t.version = fr, t.loadOptions = H, t.addEventListener = Pe, t.initialized = !0, Me(t, "status", {
                    get: Fy,
                    configurable: !0,
                    enumerable: !0
                }), wa && Kt(t), Me(P, "airgap", {
                    value: t,
                    configurable: !1,
                    enumerable: !1
                }), e && (h && g.log("airgap.ready() queue = [", e, "]"), R(e, o => {
                    try {
                        o(t)
                    } catch (r) {
                        yo(r)
                    }
                }), tt(e)), ER || RS(), SR()
            };
        hS();
    })()
})()
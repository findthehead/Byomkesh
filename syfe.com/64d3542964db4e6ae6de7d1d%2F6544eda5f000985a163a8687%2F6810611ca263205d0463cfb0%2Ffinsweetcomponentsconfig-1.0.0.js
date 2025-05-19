const injectStyles = () => {
        const e = document.querySelector("style[fs-components-cloak]");
        e?.remove();
        const t = document.createElement("style");
        t.setAttribute("fs-components-cloak", "cloak"), t.textContent = '\n    [fs-marquee-instance],[fs-cnumbercount-instance]{ opacity: 0; }\n    [fs-consent-element="internal-component"],[fs-consent-element="banner"],[fs-consent-element="fixed-preferences"],[fs-consent-element="preferences"],[fs-consent-element="interaction"]{display:none}\n  ', document.head.appendChild(t)
    },
    initFsComponents = async e => {
        injectStyles();
        const t = window?.finsweetComponentsConfigLoading,
            n = document?.querySelector("script[fs-components-src]");
        if (void 0 !== import.meta && !n && !t) {
            document?.querySelector('script[finsweet="components"][async][type="module"]');
            const t = await import(import.meta.url),
                n = Object.keys(t) || [];
            return new Promise(((t, o) => {
                const s = document.createElement("script"),
                    c = `${e}?v=${(new Date).getTime()}`;
                s.src = c, s.type = "module", s.async = !0, s.setAttribute("fs-components-src", import.meta.url), s.setAttribute("fs-components-installed", n?.join(",")), s.onload = () => t(), s.onerror = () => o(new Error("Failed to load script")), document.head.appendChild(s)
            }))
        }
    };
initFsComponents("https://cdn.jsdelivr.net/npm/@finsweet/fs-components@2/fs-components.js");
export const table = {
    instances: {
        "fs-table": {
            dataSource: "manual",
            rows: 7,
            columns: 5,
            showCaption: "false",
            showHeader: "true",
            showFooter: "false",
            isEditable: "true",
            captionId: "",
            fscomponentinstance: "fs-table",
            fscomponentclass: "fs-table",
            fscomponentname: "fs-table",
            content: {},
            headers: [],
            data: [],
            headerIds: []
        }
    }
};
{
    "@context": "https://schema.org",
    "@graph": [{
        "@type": ["Organization", "Corporation", "Brand"],
        "name": "Vimeo",
        "@id": "https://vimeo.com#ID",
        "alternateName": ["Vimeo, Inc.", "Vimeo, LLC", "Vimeo.com"],
        "legalName": "Vimeo, Inc.",
        "url": "https://vimeo.com",
        "logo": "https://de.wikipedia.org/wiki/Datei:Vimeo_logo.png",
        "description": "Vimeo, Inc. is an American video hosting, sharing, services provider, and broadcaster headquartered in New York City.",
        "foundingDate": "2004-11",
        "naics": "518210",
        "sameAs": ["https://x.com/vimeo", "https://www.facebook.com/Vimeo/", "https://www.linkedin.com/company/vimeo", "https://en.wikipedia.org/wiki/Vimeo", "https://www.google.com/search?kgmid=/m/0s8_15x", "https://www.wikidata.org/wiki/Q156376", "https://www.crunchbase.com/organization/vimeo", "https://www.bloomberg.com/profile/company/1354237D:US", "https://opencorporates.com/companies/us_de/4550462"],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "330 West 34th Street, 10th Floor",
            "addressLocality": "New York",
            "addressCountry": "US",
            "addressRegion": "NY",
            "postalCode": "10001"
        },
        "iso6523Code": "0199:25490061AWYWC90UIJ68",
        "taxID": "26-2816886",
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 1000,
            "maxValue": 5000
        }
    }, {
        "@type": "WebSite",
        "name": "Vimeo",
        "publisher": {
            "@id": "https://vimeo.com/#ID"
        },
        "alternateName": "Vimeo.com",
        "url": "https://vimeo.com/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://vimeo.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    }]
}
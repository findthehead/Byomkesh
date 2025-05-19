// Function to get all URL parameters as an object
function getUrlParameters() {
    var params = {};
    window.location.search.substring(1).split('&').forEach(function(pair) {
        var parts = pair.split('=');
        if (parts[0] && parts[1]) {
            params[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
        }
    });
    return params;
}

// Function to filter and retain only whitelisted parameters
function getWhitelistedParameters(params, whitelist) {
    return Object.keys(params).filter(function(key) {
        return whitelist.some(function(allowedKey) {
            return key === allowedKey || key.startsWith(allowedKey);
        });
    }).map(function(key) {
        return key + '=' + params[key];
    }).join('&');
}

// Function to append the retained parameters to all internal links
function appendParametersToLinks(retainedParams) {
    if (retainedParams) {
        document.querySelectorAll('a').forEach(function(link) {
            var href = link.getAttribute('href');
            if (href && !href.includes('#') && !href.includes(retainedParams)) {
                link.setAttribute('href', href + (href.includes('?') ? '&' : '?') + retainedParams);
            }
        });
    }
}

// Main function to execute the parameter retention logic
function retainUrlParameters() {
    if (window.location.pathname.includes('/brokerage')) {
        const url = new URL(window.location.href);
        url.searchParams.set('source', 'brokerage');
        window.history.replaceState({}, '', url);
    }

    // Define your whitelist of parameters
    var whitelist = ['utm_', 'source', 'promoType', 'promoCode'];
    var params = getUrlParameters();
    var retainedParams = getWhitelistedParameters(params, whitelist);
    appendParametersToLinks(retainedParams);
}

// Execute the function on page load
retainUrlParameters();
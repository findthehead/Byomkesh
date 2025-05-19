var PLATFORM_URL = "";
var DOMAIN = 'https://api.syfe.com';
var BASEAPI_URL = DOMAIN;
var GTM_ID = 'GTM-PK3J8HX';
var BASE_URL = 'https://www.syfe.com/';
var ONELINK_DOWNLOAD_APP_URL_EN_SG = 'https://syfe-referral-staging.onelink.me/8gpX';
var DATADOG_APPLICATION_ID = '62056480-273a-4b69-80ca-b6be526a67b8';
var DATADOG_CLIENT_TOKEN = 'pubfd5b315a4c963adc257839b8b99785ff';
var ENVIRONMENT_NAME = 'staging';

// override here for prod
if (location.hostname === "www.syfe.com") {
    BASE_URL = "https://www.syfe.com/";
    ENVIRONMENT_NAME = 'production';
}

const LOCALES = {
    enSG: 'en-sg',
    enHK: 'en-hk',
    zhHK: 'zh-hk',
    enAU: 'en-au'
};

let locale = LOCALES.enSG;
if (window.location.host === 'www.syfe.com') {
    // only enabled in production
    Sentry.init({
        dsn: 'https://d0412411061642b0b440187091f15bf9@o216759.ingest.us.sentry.io/1358243',
        environment: 'webflow',
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration(),
        ],
        tracesSampleRate: 0.2,
    });
}
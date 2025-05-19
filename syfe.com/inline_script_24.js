try {
    if (ENVIRONMENT_NAME === 'production') {
        window.DD_RUM &&
            window.DD_RUM.init({
                applicationId: DATADOG_APPLICATION_ID,
                clientToken: DATADOG_CLIENT_TOKEN,
                site: 'datadoghq.eu',
                env: ENVIRONMENT_NAME,
                version: '1.0.0',
                service: 'www',
                sampleRate: 10
            });
    }
} catch (e) {
    console.log(e);
}
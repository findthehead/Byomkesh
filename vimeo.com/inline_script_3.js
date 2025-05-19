document.body.addEventListener(
    'pointerdown',
    function listener() {
        window.__userInteracted = true;
        document.body.removeEventListener('pointerdown', listener);
    }
);
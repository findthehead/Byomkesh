window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab) {
        const tabButton = document.getElementById(tab)
        tabButton.click();
    }
}
const application = {
    windowLoad: () => {
        feather.replace();
    }
}

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    application.windowLoad();
} else {
    document.addEventListener("DOMContentLoaded", application.windowLoad);
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw.js')
            .then(registration = {})
            .catch(err => console.error(`Service Worker: Error: ${err}`));
    });
}
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extensión instalada correctamente.");
});

// Captura la pestaña activa cada 30 segundos
setInterval(() => {
    chrome.tabs.captureVisibleTab(null, { format: "jpeg", quality: 80 }, (dataUrl) => {
        console.log("Captura de pestaña:", dataUrl);
    });
}, 30000);

let tabsToCapture = [];

chrome.tabs.onActivated.addListener(() => {
  if (tabsToCapture.length > 0) {
    chrome.tabs.captureVisibleTab(null, { format: "jpeg", quality: 80 }, (dataUrl) => {
      tabsToCapture.forEach((tabId, index) => {
        chrome.runtime.sendMessage({ tabId: index + 1, dataUrl });
      });
    });
  }
});

chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "capturePort") {
    console.log("Visor conectado");
  }
});

document.getElementById("captureBtn").addEventListener("click", () => {
    chrome.tabs.create({ url: "viewer.html" });
});  
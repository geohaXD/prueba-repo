// Escuchar mensajes del popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "startCapturing") {
      const selectedTabs = message.tabs;
      
      // Comienza a capturar las pestañas
      selectedTabs.forEach((tab, index) => {
        chrome.tabs.captureVisibleTab(tab.id, { format: "png" }, (dataUrl) => {
          // Guardar la captura en el almacenamiento
          chrome.storage.local.get("captures", (data) => {
            let captures = data.captures || [];
            captures.push({ tab: tab.title, image: dataUrl });
            
            chrome.storage.local.set({ captures }, () => {
              console.log(`Captura de la pestaña "${tab.title}" guardada.`);
            });
          });
        });
      });
    }
  });
  
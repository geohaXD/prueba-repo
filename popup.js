let selectedTabs = [];

document.getElementById("captureBtn").addEventListener("click", () => {
  if (selectedTabs.length >= 2) {
    alert("Ya has seleccionado dos pestañas.");
    return;
  }

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];

    // Verificar si ya está en la lista
    if (!selectedTabs.some(tab => tab.id === currentTab.id)) {
      selectedTabs.push(currentTab);
      console.log("Pestaña seleccionada:", currentTab.title);
      alert("Pestaña seleccionada. Total de pestañas seleccionadas: " + selectedTabs.length);

      // Si ya hay dos pestañas seleccionadas, habilitar el botón de mostrar vista
      if (selectedTabs.length >= 2) {
        document.getElementById("viewBtn").disabled = false; // Habilitar el botón de mostrar vista
      }
    } else {
      alert("Esta pestaña ya está seleccionada.");
    }
  });
});

document.getElementById("viewBtn").addEventListener("click", () => {
  if (selectedTabs.length < 2) {
    alert("Asegúrate de seleccionar dos pestañas.");
    return;
  }

  chrome.runtime.sendMessage({ type: "startCapturing", tabs: selectedTabs }, () => {
    // Llamar al código para abrir la página de vistas
    chrome.tabs.create({ url: "viewer.html" });
  });
});

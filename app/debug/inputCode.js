// debug/inputCode.js
import * as Ctrl from "../../controllers/debugCtrl.js";

document.addEventListener("DOMContentLoaded", () => {
    const importTextArea = document.querySelector("textarea");
    const exportButton = document.querySelector("button");
    const testPresetsDiv = document.getElementById("testPresets");
    
    // --- Export Functionality ---
    exportButton.addEventListener("click", () => {
        const jsonString = JSON.stringify(localStorage, null, 2); // Pretty-print with 2 spaces
        // Create a temporary link to download the JSON
        const blob = new Blob([jsonString], {type: "application/json"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "budget-data.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
    
    // --- Import Functionality ---
    importTextArea.addEventListener("input", () => {
        try {
            const importedData = JSON.parse(importTextArea.value);
            Ctrl.cleanImport(importedData);
            alert("Data imported successfully!");
        } catch (error) {
            console.error("Invalid JSON:", error);
            // Optionally, display an error message to the user
            // alert("Invalid JSON data. Please check the format.");
        }
    });
    
    
    // Load test presets from testPresets.json
    fetch("./testPresets.json")
        .then((response) => response.json())
        .then((testPresets) => {
            testPresets.forEach((preset) => {
                const presetButton = document.createElement("button");
                presetButton.classList.add("btn", "btn-primary", "m-1");
                presetButton.textContent = preset.name;
                presetButton.addEventListener("click", () => {
                    Ctrl.cleanImport(preset.data);
                    console.log(`Test preset "${preset.name}" loaded.`); // More informative console log
                    console.log(preset.data)
                    alert(`Test preset "${preset.name}" loaded.`);
                });
                testPresetsDiv.appendChild(presetButton);
            });
        })
        .catch((error) => {
            console.error("Error loading testPresets.json:", error);
        });
});
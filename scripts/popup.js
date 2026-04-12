// scripts\popup.js
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggleTheme');

    // Helper function to update the popup's own background color
    function updatePopupTheme(isDark) {
        if (isDark) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    // Load current state when the popup is opened
    chrome.storage.local.get(['darkModeEnabled'], function(result) {
        const isEnabled = result.darkModeEnabled !== false;
        toggle.checked = isEnabled;
        updatePopupTheme(isEnabled); // Instantly set the background
    });

    // Save state and change the background immediately when toggled
    toggle.addEventListener('change', function() {
        chrome.storage.local.set({ darkModeEnabled: toggle.checked });
        updatePopupTheme(toggle.checked); // Trigger the color fade
    });
});
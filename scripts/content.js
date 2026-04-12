// scripts\content.js

// Apply or remove the dark mode attribute
function toggleDarkMode(isDark) {
    if (isDark) {
        document.documentElement.setAttribute('data-gsuite-dark', 'true');
    } else {
        document.documentElement.removeAttribute('data-gsuite-dark');
    }
}

// Check the saved user preference immediately when the page loads
chrome.storage.local.get(['darkModeEnabled'], function(result) {
    // Default to true if not set
    const isEnabled = result.darkModeEnabled !== false; 
    toggleDarkMode(isEnabled);
});

// Listen for messages from the popup menu (when the user clicks the toggle)
chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (changes.darkModeEnabled) {
        toggleDarkMode(changes.darkModeEnabled.newValue);
    }
});
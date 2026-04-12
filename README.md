A lightweight, privacy-focused browser extension that brings a beautiful, eye-friendly dark mode to Google Docs. Created by **Fulllion Creative Works**.

## 🌟 Features

* **Smart Color Inversion:** Uses advanced CSS filtering (`invert(97%) hue-rotate(180deg)`) to convert blinding white backgrounds into a sleek, comfortable dark slate grey while preserving the correct colors for images, videos, and UI elements.
* **Instant Toggle:** Easily turn the dark theme on or off via the extension popup.
* **Cross-Browser Support:** Built on Manifest V3, fully compatible with Google Chrome, Microsoft Edge, Brave, and Mozilla Firefox.
* **100% Privacy-Focused:** Runs completely locally on your device. Zero tracking, zero analytics, and zero data collection.

## 📂 Project Structure

📁 G-Suite-Dark-Mode/
├── 📄 manifest.json         # Extension configuration and permissions
├── 📄 popup.html            # The extension's UI menu
├── 📁 scripts/
│   ├── 📄 content.js        # Injects the dark mode toggle logic into Google Docs
│   └── 📄 popup.js          # Handles the toggle switch and saves user preferences
├── 📁 styles/
│   ├── 📄 dark.css          # The core CSS engine for the smart invert logic
│   └── 📄 popup_styles.css  # Styling for the extension menu
└── 📁 images/               # Icons and donation button assets

## 🛠️ Installation for Developers / Testing

### Google Chrome / Microsoft Edge / Brave
1. Download or clone this repository to your local machine.
2. Open your browser and navigate to the extensions page:
   * Chrome: `chrome://extensions/`
   * Edge: `edge://extensions/`
3. Enable **Developer mode** (usually a toggle in the top right corner).
4. Click the **Load unpacked** button.
5. Select the `G-Suite-Dark-Mode` folder.

### Mozilla Firefox
1. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
2. Click the **Load Temporary Add-on...** button.
3. Select the `manifest.json` file inside the project folder.

## 🔒 Privacy Policy & Terms of Use

This extension operates entirely locally. Your preferences are saved to your browser's local storage. We do not collect, store, or transmit any personally identifiable information, usage data, or browsing history. 

For the complete legal text, please refer to the included Terms of Use & Privacy Policy document.

## ☕ Support the Project

If you find this extension helpful and want to support further development by Fulllion Creative Works, consider leaving a tip!

* [Donate via PayPal](https://www.paypal.com/donate/?hosted_button_id=LCDZX75HR4CLC)
* [Support on Ko-fi](https://tr.ee/FdEWlPGL2w)

---
© 2026 Fulllion Creative Works. All rights reserved.

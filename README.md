<h1 align="center">MyCustomFirefoxTweaks</h1>
<p align="center">
This project contains custom user scripts (written in `uc.js`) designed to enhance your Firefox browser experience. These scripts are meant to be used with the 
<a href="https://github.com/Aris-t2/CustomJSforFx" title="github.com/Aris-t2/CustomJSforFx">CustomJSforFx</a> extension.
</p>

## Requirements

To use these scripts, you must first install the <a href="https://github.com/Aris-t2/CustomJSforFx" title="github.com/Aris-t2/CustomJSforFx">CustomJSforFx</a> extension.

## Installation

1. **Install CustomJSforFx Extension**:

   - Follow the instructions on the <a href="https://github.com/Aris-t2/CustomJSforFx" title="github.com/Aris-t2/CustomJSforFx">CustomJSforFx</a> GitHub page to install the extension.

2. **Add `uc.js` Scripts**:

   - Once the CustomJSforFx extension is installed, add the uc.js script files to your `\chrome\scripts` directory, and make sure to import them into your `\chrome\userChrome.js` file.

3. **Delete Startup Cache and Restart Firefox**:
   - Delete all the files inside the `startupCache` folder in the `Local directory` of your Firefox profile, and restart Firefox for the scripts function properly.

## Usage

After installation, the customizations in `uc.js` will be active and can be adjusted based on your preferences.

- Press `Alt + T` to toggle the visibility of the tabs: Keep them always visible, show them on hover, or hide them completely.
- Press `Alt + M` to toggle the visibility of the menu bar (show/hide).
- Press `Alt + Q` to toggle the Sidebar Hover functionality (enable/disable).

## Customization

You can also customize the default mode and key combinations within the script itself. Simply modify the following values in the `uc.js` file to adjust them:

- **Default Mode**: Set the initial mode when the browser starts.
- **Key Combinations**: Modify the keyboard shortcuts of the scripts.

## Important Note

When using the `toggleTabsToolbar.uc.js` script, if the menu bar is not enabled, the window controls (minimize, maximize, and close buttons) will not be visible. To resolve this issue:

1. Press the `Alt` key in Firefox.
2. From the menu that opens in the top-left corner, go to `View > Toolbars > Menu Bar` and activate Menu Bar to make the window controls (minimize, maximize, and close buttons) visible again.

- If you do not want the menu bar text to appear in the top-left corner:
  - Use the `hideMenubar.uc.js` script to hide the menu bar.

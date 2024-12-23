(function () {
  const tabsToolbarVisible = "tabs-toolbar-visible";
  const tabsToolbarHover = "tabs-toolbar-hover";
  const tabsToolbarHidden = "tabs-toolbar-hidden";

  const style = document.createElement("style");
  style.id = "customTabsToolbarStyle";
  style.textContent = `
    /* always visible */
    .${tabsToolbarVisible} #TabsToolbar {
      visibility: visible !important;
      opacity: 1 !important;
      transition: none !important;
    }

    /* Hover */
    .${tabsToolbarHover} #TabsToolbar {
      visibility: collapse !important;
      opacity: 0 !important;
      transition: opacity 0.5s ease, visibility 0s ease 0.5s !important;
    }
    .${tabsToolbarHover} #TabsToolbar:hover {
      visibility: visible !important;
      opacity: 1 !important;
      transition: opacity 0.5s ease, visibility 0s ease 0s !important;
    }
    .${tabsToolbarHover} #toolbar-menubar:hover + #TabsToolbar {
      visibility: visible !important;
      opacity: 1 !important;
      transition: opacity 0.5s ease, visibility 0s ease 0s !important;
    }

    /* always hidden */
    .${tabsToolbarHidden} #TabsToolbar {
      visibility: collapse !important;
      opacity: 0 !important;
      transition: none !important;
    }
  `;
  document.head.appendChild(style);

  document.addEventListener("keydown", function (event) {
    // you can change the key combination here
    if (event.altKey && event.key === "t") {
      const rootElement = document.documentElement;

      if (rootElement.classList.contains(tabsToolbarVisible)) {
        rootElement.classList.remove(tabsToolbarVisible);
        rootElement.classList.add(tabsToolbarHover);
        console.log("tabsToolbarHover mode activated.");
      } else if (rootElement.classList.contains(tabsToolbarHover)) {
        rootElement.classList.remove(tabsToolbarHover);
        rootElement.classList.add(tabsToolbarHidden);
        console.log("tabsToolbarHidden mode activated.");
      } else if (rootElement.classList.contains(tabsToolbarHidden)) {
        rootElement.classList.remove(tabsToolbarHidden);
        rootElement.classList.add(tabsToolbarVisible);
        console.log("tabsToolbarVisible mode activated.");
      }
    }
  });

  const rootElement = document.documentElement;
  // default mode
  rootElement.classList.add(tabsToolbarHidden);

  // List of possible classes
  const validClasses = [
    "tabs-toolbar-hidden",
    "tabs-toolbar-hover",
    "tabs-toolbar-visible",
  ];

  // Check for which class is present and log it
  const currentClass = validClasses.find((cls) =>
    rootElement.classList.contains(cls)
  );

  console.log(`current mode is ${currentClass || "none"}.`);
})();

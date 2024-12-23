(function () {
  const MenubarHide = "hide-menubar-item";

  const style = document.createElement("style");
  style.id = "customMenuBarItemStyle";
  style.textContent = `
      .${MenubarHide} #main-menubar {
        display: none !important;
      }
    `;
  document.head.appendChild(style);

  document.addEventListener("keydown", function (event) {
    // you can change the key combination here
    if (event.altKey && event.key === "m") {
      const rootElement = document.documentElement;
      if (rootElement.classList.contains(MenubarHide)) {
        rootElement.classList.remove(MenubarHide);
        console.log("MenubarHide mode deactivated.");
      } else {
        rootElement.classList.add(MenubarHide);
        console.log("MenubarHide mode activated.");
      }
    }
  });

  // Default mode
  const rootElement = document.documentElement;
  rootElement.classList.add(MenubarHide);

  // List of possible classes
  const validClasses = ["hide-menubar-item"];

  // Check for which class is present and log it
  const currentClass = validClasses.find((cls) =>
    rootElement.classList.contains(cls)
  );

  console.log(`current mode is ${currentClass || "none"}.`);
})();

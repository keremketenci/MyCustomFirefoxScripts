(function () {
  const sidebarCustom = "sidebar-custom";
  const sidebarHover = "sidebar-hover";

  const style = document.createElement("style");
  style.id = "sidebarCustomStyle";
  style.textContent = `
        /* sidebar */
        #sidebar-box {
        }
        
        /* sidebarCustom */
        .${sidebarCustom} #sidebar-box {
          --uc-sidebar-width: 30px;
          --uc-sidebar-min-width: 30px;
          --uc-expanded-sidebar-width: 300px;
          --uc-autohide-sidebar-delay: 400ms;
          position: relative;
          width: var(--uc-sidebar-width) !important;
          min-width: var(--uc-sidebar-min-width) !important;
          transition: width 300ms ease-in-out;
        }
    
        /* sidebarHover */
        .${sidebarHover} #sidebar-box:hover {
          width: var(--uc-expanded-sidebar-width) !important;
        }
      `;
  document.head.appendChild(style);

  document.addEventListener("keydown", function (event) {
    // you can change the key combination here
    if (event.altKey && event.key === "q") {
      const rootElement = document.documentElement;

      if (!rootElement.classList.contains(sidebarHover, sidebarCustom)) {
        rootElement.classList.add(sidebarCustom, sidebarHover);
        console.log("sidebarHover mode activated.");
      } else if (rootElement.classList.contains(sidebarHover)) {
        rootElement.classList.remove(sidebarCustom, sidebarHover);
        console.log("sidebarHover mode deactivated.");
      }
    }
  });

  const rootElement = document.documentElement;
  // Default mode
  rootElement.classList.add(sidebarCustom, sidebarHover);

  // List of possible classes
  const validClasses = ["sidebar-custom"];

  // Check for which class is present and log it
  const currentClass = validClasses.find((cls) =>
    rootElement.classList.contains(cls)
  );

  console.log(`current mode is ${currentClass || "none"}.`);
})();

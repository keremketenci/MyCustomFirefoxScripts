(function () {
  document.body.addEventListener("mouseover", function (event) {
    const element = event.target;
    const elementType = element.tagName;
    const elementId = element.id ? `#${element.id}` : null;
    const elementClass = element.className ? `.${element.className}` : null;

    console.log(
      `Hovered Element: ${element} ElementType: ${elementType} ElementId: ${
        elementId || ""
      } ${elementClass || ""}`
    );
  });
})();

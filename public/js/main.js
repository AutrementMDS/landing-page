document.addEventListener("DOMContentLoaded", () => {
  let selectors = document.querySelectorAll(".points");

  selectors.forEach((selector) => {
    selector.addEventListener("click", () => {
      removeSelected();
      selector.classList.add("selectedPoint");
    });
  });

  function removeSelected() {
    selectors.forEach((selector) => {
      selector.classList.remove("selectedPoint");
    });
  }
});

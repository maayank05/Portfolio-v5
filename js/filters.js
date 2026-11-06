// Generic filter-tab behavior for Projects and Dashboards pages.
// Cards must have a data-category attribute; filter buttons a data-filter attribute.
document.addEventListener("DOMContentLoaded", function () {
  var filterBar = document.querySelector("[data-filter-bar]");
  if (!filterBar) return;

  var buttons = filterBar.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll("[data-category]");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      var filter = btn.getAttribute("data-filter");
      cards.forEach(function (card) {
        var categories = (card.getAttribute("data-category") || "").split(",");
        var show = filter === "All" || categories.indexOf(filter) !== -1;
        card.style.display = show ? "" : "none";
      });
    });
  });
});

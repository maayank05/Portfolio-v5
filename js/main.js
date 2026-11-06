// Mobile nav drawer toggle
document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menuToggle");
  var sidebar = document.getElementById("sidebar");
  var scrim = document.getElementById("scrim");

  function closeMenu() {
    sidebar.classList.remove("open");
    scrim.classList.remove("open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    sidebar.classList.add("open");
    scrim.classList.add("open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
  }

  if (menuToggle && sidebar && scrim) {
    menuToggle.addEventListener("click", function () {
      var isOpen = sidebar.classList.contains("open");
      if (isOpen) closeMenu();
      else openMenu();
    });
    scrim.addEventListener("click", closeMenu);
    sidebar.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  // Highlight the current page in the sidebar nav
  var currentFile = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(function (link) {
    var linkFile = link.getAttribute("href").split("/").pop();
    if (linkFile === currentFile) {
      link.classList.add("active");
    }
  });
});

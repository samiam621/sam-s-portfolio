// Samantha An — portfolio behaviour
// Theme toggle, mobile menu, mailto contact form, and footer year.

(function () {
  var root = document.documentElement;
  var STORAGE_KEY = "portfolio-theme";

  // ----- Theme toggle -----
  // The initial theme is applied inline in <head> so there is no flash.
  var themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var isDark = root.classList.toggle("dark");
      try {
        localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
      } catch (e) {}
    });
  }

  // Follow system changes only if the visitor hasn't picked a theme.
  var media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", function (e) {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (err) {}
    if (saved) return;
    root.classList.toggle("dark", e.matches);
  });

  // ----- Mobile menu -----
  var menuToggle = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  if (menuToggle && mobileMenu) {
    var setOpen = function (open) {
      mobileMenu.hidden = !open;
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    menuToggle.addEventListener("click", function () {
      setOpen(mobileMenu.hidden);
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });
  }

  // ----- Contact form (GitHub Pages has no backend, so open the visitor's mail client) -----
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var to = form.dataset.email;
      var data = new FormData(form);
      var subject = data.get("subject") || "Hello from your portfolio";
      var body =
        "Name: " + data.get("name") + "\n" +
        "Email: " + data.get("email") + "\n\n" +
        data.get("message");
      window.location.href =
        "mailto:" + encodeURIComponent(to) +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  // ----- Footer year -----
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

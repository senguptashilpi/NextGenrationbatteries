(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Lightbox for figures
  var zoomables = document.querySelectorAll("img.zoomable");
  if (zoomables.length) {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Image viewer");
    box.innerHTML = '<button type="button" aria-label="Close">&times;</button><figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(box);
    var bImg = box.querySelector("img"), bCap = box.querySelector("figcaption"), bClose = box.querySelector("button");
    var lastFocus = null;
    var close = function () { box.classList.remove("open"); if (lastFocus) lastFocus.focus(); };
    zoomables.forEach(function (img) {
      img.tabIndex = 0;
      var open = function () {
        lastFocus = img;
        bImg.src = img.currentSrc || img.src;
        bImg.alt = img.alt;
        var fig = img.closest("figure");
        var cap = fig && fig.querySelector("figcaption");
        bCap.textContent = cap ? cap.textContent.trim() : img.alt;
        box.classList.add("open");
        bClose.focus();
      };
      img.addEventListener("click", open);
      img.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    });
    box.addEventListener("click", function (e) { if (e.target !== bImg) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && box.classList.contains("open")) close(); });
  }

  // Contact form → opens the visitor's mail client (GitHub Pages has no backend)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var subject = (f.get("subject") || "Research enquiry").toString();
      var body =
        "Name: " + f.get("name") + "\n" +
        "Email: " + f.get("email") + "\n" +
        "Affiliation: " + (f.get("affiliation") || "-") + "\n\n" +
        f.get("message");
      window.location.href = "mailto:" + form.dataset.to +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

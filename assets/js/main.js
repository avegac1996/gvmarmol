/* GV MÁRMOL — interacciones del sitio */
(function () {
  "use strict";
  var WA = "593988007005"; // WhatsApp GV MÁRMOL

  /* ---------- portada tipo libro ---------- */
  var intro = document.getElementById("bookIntro");
  if (intro) {
    var book = intro.querySelector(".book");
    var cover = intro.querySelector(".book__cover");
    var already = sessionStorage.getItem("gv_intro_seen") || /[?&]nointro/.test(location.search);

    function closeIntro() {
      document.body.style.overflow = "";
      intro.classList.add("is-hidden");
      sessionStorage.setItem("gv_intro_seen", "1");
      setTimeout(function () { intro.remove(); }, 900);
    }
    function openBook() {
      book.classList.add("is-open");
      setTimeout(closeIntro, 1150);
    }

    if (already) {
      intro.remove();
    } else {
      document.body.style.overflow = "hidden";
      cover.addEventListener("click", openBook);
      cover.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openBook(); }
      });
      var skip = intro.querySelector(".book-intro__skip");
      if (skip) skip.addEventListener("click", closeIntro);
    }
  }

  /* ---------- header al hacer scroll ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- menú móvil ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "✕" : "☰";
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.textContent = "☰";
      }
    });
  }

  /* ---------- consulta de material por WhatsApp ---------- */
  document.querySelectorAll("[data-material]").forEach(function (el) {
    el.addEventListener("click", function () {
      var name = el.dataset.material;
      var msg = "Hola GV MÁRMOL, quisiera información y precio del material: " + name + ".";
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(msg), "_blank");
    });
  });

  /* ---------- formulario de contacto -> WhatsApp ---------- */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var msg =
        "*Nueva solicitud desde el sitio web*%0A" +
        "Nombre: " + (d.get("nombre") || "") + "%0A" +
        "Teléfono: " + (d.get("telefono") || "") + "%0A" +
        "Interés: " + (d.get("interes") || "") + "%0A" +
        "Mensaje: " + (d.get("mensaje") || "");
      window.open("https://wa.me/" + WA + "?text=" + msg, "_blank");
      form.reset();
      var ok = form.querySelector(".form-ok");
      if (ok) ok.hidden = false;
    });
  }

  /* ---------- reveal on scroll ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* ---------- año dinámico ---------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

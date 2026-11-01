/* Love unITed Solutions: header behavior for every page except the homepage. */
(function () {
  "use strict";
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () { header.classList.toggle("tight", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  var hamb = document.getElementById("hamb");
  var nav = document.getElementById("mainNav");
  if (hamb && nav) {
    hamb.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      hamb.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var dd = document.getElementById("ddServe");
  var tog = document.getElementById("ddToggle");
  function closeDD() {
    if (dd) { dd.classList.remove("open"); tog.setAttribute("aria-expanded", "false"); }
  }
  if (dd && tog) {
    tog.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = dd.classList.toggle("open");
      tog.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) { if (!dd.contains(e.target)) closeDD(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && dd.classList.contains("open")) { closeDD(); tog.focus(); }
    });
  }
})();

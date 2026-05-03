/**
 * nav.js — Bharat Plastic Manufacturing Co.
 * Injects the shared navigation into any page.
 *
 * HOW TO USE:
 *   1. Add <div id="site-nav"></div> where the nav should appear.
 *   2. Set BPMC_HOME to the root-relative homepage path if needed:
 *        Root pages (index.html):        var BPMC_HOME = '/';
 *        All other pages (any depth):    var BPMC_HOME = '/';
 *   3. <script src="/assets/js/nav.js"></script>
 *
 *   All paths are root-relative (start with /), so depth doesn't matter.
 */

(function () {

  /* On the actual homepage (path === "/" or "/index.html") hash links
     work. On all other pages they navigate home first then scroll.     */
  var isHome = (location.pathname === '/' || location.pathname === '/index.html');

  function h(anchor) {
    return isHome ? anchor : '/' + anchor;
  }

  var nav = document.getElementById('site-nav');
  if (!nav) return;

  nav.innerHTML =
    '<nav>' +
      '<a aria-label="Bharat Plastic Manufacturing Co. — Home" class="nav-logo" href="' + (isHome ? '#home' : '/') + '">' +
        '<div class="nav-logo-icon-wrap">' +
          '<img' +
          ' alt="Bharat Plastic Manufacturing Co. Logo — Industrial Packaging Manufacturer Pune"' +
          ' height="42" width="42"' +
          ' src="/assets/images/Bharat-Plastic-Logo-White-Background.webp"' +
          '/>' +
        '</div>' +
        '<div class="logo-wordmark">' +
          '<span class="logo-bharat">Bharat</span>' +
          '<span class="logo-sub">Plastic Manufacturing Co.</span>' +
        '</div>' +
      '</a>' +
      '<ul class="nav-links">' +
        '<li><a href="' + h('#about') + '">About</a></li>' +
        '<li><a href="' + h('#products') + '">Products</a></li>' +
        '<li><a href="' + h('#why-us') + '">Why Us</a></li>' +
        '<li><a href="' + h('#certifications') + '">Certifications</a></li>' +
        '<li><a href="/blog/">Blog</a></li>' +
        '<li><a class="nav-cta" href="' + h('#contact') + '">Get a Quote</a></li>' +
      '</ul>' +
    '</nav>';

})();

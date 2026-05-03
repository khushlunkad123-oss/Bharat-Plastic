/**
 * footer.js — Bharat Plastic Manufacturing Co.
 * Injects the shared footer into any page.
 *
 * HOW TO USE:
 *   1. Add <div id="site-footer"></div> where the footer should appear.
 *   2. <script src="/assets/js/footer.js"></script>
 *
 *   All paths are root-relative (start with /), so depth doesn't matter.
 */

(function () {

  var isHome = (location.pathname === '/' || location.pathname === '/index.html');

  function h(anchor) {
    return isHome ? anchor : '/' + anchor;
  }

  var footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML =
    '<footer>' +
      '<div class="footer-grid">' +

        /* ── Brand column ── */
        '<div>' +
          '<div class="footer-brand">' +
            '<div class="footer-logo-wrap">' +
              '<img' +
              ' alt="Bharat Plastic Manufacturing Co. Logo"' +
              ' height="46" width="46" loading="lazy"' +
              ' src="/assets/images/Bharat-Plastic-Logo-White-Background.webp"' +
              '/>' +
            '</div>' +
            '<div class="logo-wordmark">' +
              '<span class="logo-bharat">Bharat</span>' +
              '<span class="logo-sub">Plastic Manufacturing Co.</span>' +
            '</div>' +
          '</div>' +
          '<p class="footer-tagline">Premium industrial packaging solutions — engineered with precision, delivered with reliability, trusted since 1970. Pimpri MIDC, Pune.</p>' +
          '<div class="footer-since">ISO 9001:2015 · MSME · EPR · IEC · Since 1970</div>' +
        '</div>' +

        /* ── Quick links column ── */
        '<div>' +
          '<div class="fc-title">Quick Links</div>' +
          '<ul class="fl">' +
            '<li><a href="' + h('#about') + '">About Us</a></li>' +
            '<li><a href="' + h('#products') + '">Product Portfolio</a></li>' +
            '<li><a href="' + h('#why-us') + '">Why Choose Us</a></li>' +
            '<li><a href="' + h('#certifications') + '">Certifications</a></li>' +
            '<li><a href="' + h('#team') + '">Our Team</a></li>' +
            '<li><a href="/blog/">Blog</a></li>' +
            '<li><a href="' + h('#contact') + '">Get a Quote</a></li>' +
          '</ul>' +
        '</div>' +

        /* ── Products column ── */
        '<div>' +
          '<div class="fc-title">Products</div>' +
          '<ul class="fl">' +
            '<li><a href="/products/ldpe-bags/">LDPE Bags</a></li>' +
            '<li><a href="/products/polythene-sheet-roll/">Polythene Rolls</a></li>' +
            '<li><a href="/products/stretch-film/">Stretch Films</a></li>' +
            '<li><a href="/products/shrink-film/">Shrink Films</a></li>' +
            '<li><a href="/products/vci-anti-rust-bags/">VCI Anti-Rust Bags</a></li>' +
            '<li><a href="/products/zip-lock-bags/">Zip Lock Bags</a></li>' +
            '<li><a href="/products/air-bubble-rolls/">Air Bubble Rolls</a></li>' +
          '</ul>' +
        '</div>' +

      '</div>' +

      /* ── Footer bottom bar ── */
      '<div class="footer-bottom">' +
        '<span>© 2026 Bharat Plastic Manufacturing Co. All rights reserved. · A-173, H Block, MIDC Pimpri, Pune – 411018</span>' +
        '<div class="footer-team">' +
          '<a href="/assets/docs/Bansilal-Lunkad-Digital-Business-Card.pdf" rel="noopener" target="_blank">Bansilal Lunkad</a>' +
          '<a href="/assets/docs/Nilesh-Lunkad-Digital-Business-Card.pdf" rel="noopener" target="_blank">Nilesh Lunkad</a>' +
          '<a href="/assets/docs/Khush-Lunkad-Digital-Business-Card.pdf" rel="noopener" target="_blank">Khush Lunkad</a>' +
        '</div>' +
      '</div>' +

    '</footer>';

})();

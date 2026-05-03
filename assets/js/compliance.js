/* compliance.js — dynamically injects the regulatory compliance note */
(function () {
  'use strict';
  var NOTE_SELECTOR = '.prod-detail-content';
  var BEFORE_SELECTOR = '.prod-specs-box';

  function buildNote() {
    var wrap = document.createElement('div');
    wrap.className = 'prod-compliance-note';
    wrap.innerHTML =
      '<div aria-hidden="true" class="prod-compliance-note__icon">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>' +
          '<polyline points="9 12 11 14 15 10"></polyline>' +
        '</svg>' +
      '</div>' +
      '<div class="prod-compliance-note__body">' +
        '<span class="prod-compliance-note__label">Regulatory Compliance</span>' +
        '<p class="prod-compliance-note__text">' +
          'All products carry mandatory statutory printing as per Government of India norms\u2014including EPR number, manufacturer name &amp; address, product category, thickness and all other required information. ' +
          '<strong>Minimum thickness is 50\u00a0microns</strong> as per the Plastic Waste Management (Amendment) Rules. Our EPR registration ensures full compliance with extended producer responsibility requirements.' +
        '</p>' +
      '</div>';
    return wrap;
  }

  function inject() {
    var container = document.querySelector(NOTE_SELECTOR);
    if (!container) return;
    var anchor = container.querySelector(BEFORE_SELECTOR);
    if (anchor) {
      container.insertBefore(buildNote(), anchor);
    } else {
      container.appendChild(buildNote());
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();

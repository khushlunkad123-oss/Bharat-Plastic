/* ============================================================
   BHARAT PLASTIC — Main JS
   assets/js/script.js
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. Scroll-reveal (existing behaviour) ──────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  // Fallback for iOS / Google App browser
  revealEls.forEach((el) => el.classList.add('visible'));
}

setTimeout(() => {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    el.classList.add('visible');
  });
}, 1500);

  /* ── 2. Nav scroll shrink (existing behaviour) ──────────────── */
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ── 3. Mobile hamburger nav ────────────────────────────────── */
  /*
   * Injects a <button class="nav-hamburger"> into <nav> at runtime so
   * no HTML file changes are required. The button toggles .nav-open on
   * <nav>, which your styles.css (or the block below) should handle.
   *
   * CSS you should add to styles.css (or append here via a <style> tag):
   *
   *   .nav-hamburger { display: none; }
   *
   *   @media (max-width: 768px) {
   *     .nav-hamburger {
   *       display: flex; flex-direction: column; justify-content: center;
   *       gap: 5px; background: none; border: none; cursor: pointer;
   *       padding: 8px; z-index: 1001; margin-left: auto;
   *     }
   *     .nav-hamburger span {
   *       display: block; width: 24px; height: 2px;
   *       background: #1A2340; border-radius: 2px;
   *       transition: transform 0.25s, opacity 0.25s;
   *     }
   *     nav.nav-open .nav-hamburger span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
   *     nav.nav-open .nav-hamburger span:nth-child(2) { opacity: 0; }
   *     nav.nav-open .nav-hamburger span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
   *
   *     nav .nav-links {
   *       display: none;
   *       position: fixed; inset: 70px 0 0 0;
   *       background: #fff; flex-direction: column;
   *       align-items: flex-start; padding: 24px 5%;
   *       gap: 0; z-index: 1000;
   *       border-top: 2px solid var(--red, #C8102E);
   *       overflow-y: auto;
   *     }
   *     nav.nav-open .nav-links { display: flex; }
   *     nav .nav-links li { width: 100%; }
   *     nav .nav-links a {
   *       display: block; padding: 14px 0;
   *       border-bottom: 1px solid #eee;
   *       font-size: 17px; font-weight: 600; color: #1A2340;
   *     }
   *     nav .nav-links .nav-cta {
   *       margin-top: 16px; display: inline-block; width: auto;
   *     }
   *   }
   */
  if (nav) {
    const navLinks = nav.querySelector('.nav-links');

    // Build button
    const burger = document.createElement('button');
    burger.className = 'nav-hamburger';
    burger.setAttribute('aria-label', 'Toggle navigation menu');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-controls', 'nav-links-list');
    burger.innerHTML = '<span></span><span></span><span></span>';

    if (navLinks) {
      navLinks.id = 'nav-links-list';
      nav.insertBefore(burger, navLinks);
    }

    // Toggle open/close
    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', String(isOpen));
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click (single-page navigation or product pages)
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close on outside click / Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        burger.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (nav.classList.contains('nav-open') && !nav.contains(e.target)) {
        nav.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── 4. Lazy-load product hero images ───────────────────────── */
  /*
   * The hero image on product pages uses loading="eager" because it is
   * above-the-fold — that is correct and should stay. However, if a browser
   * doesn't support native lazy loading, images further down the page that
   * carry loading="lazy" won't be deferred. This observer polyfills that for
   * older browsers, and also handles any hero images you may have switched to
   * loading="lazy" by mistake.
   *
   * Usage in HTML (product pages):
   *   <img src="..." loading="eager" ...>   ← hero: keep eager, loads immediately
   *   <img src="..." loading="lazy" ...>    ← everything else: defer until near viewport
   *
   * If you ever want to defer a hero image (e.g. a secondary "detail" image
   * lower in the page), add class="lazy-hero" and omit the src — set
   * data-src instead. This observer will swap it in.
   *
   * Example:
   *   <img class="lazy-hero" data-src="assets/images/foo.webp" alt="..." width="800" height="600">
   */
  if ('IntersectionObserver' in window) {
    // Native lazy-loading polyfill for browsers that don't support it
    const lazyImages = Array.from(
      document.querySelectorAll('img[loading="lazy"]:not([src=""])')
    ).filter(() => !('loading' in HTMLImageElement.prototype));

    if (lazyImages.length) {
      const imgObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const img = e.target;
              if (img.dataset.src) img.src = img.dataset.src;
              imgObserver.unobserve(img);
            }
          });
        },
        { rootMargin: '200px 0px' }
      );
      lazyImages.forEach((img) => imgObserver.observe(img));
    }

    // data-src pattern for any manually deferred images
    document.querySelectorAll('img[data-src]').forEach((img) => {
      const dataSrcObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.src = e.target.dataset.src;
              e.target.removeAttribute('data-src');
              dataSrcObserver.unobserve(e.target);
            }
          });
        },
        { rootMargin: '200px 0px' }
      );
      dataSrcObserver.observe(img);
    });
  }

  /* ── 5. FAQ accordion (existing behaviour) ──────────────────── */
  // <details>/<summary> handles this natively; no JS needed.
  // Kept as a placeholder if you add custom animation later.

})();

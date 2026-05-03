/* ============================================================
   /assets/js/blog-data.js
   SINGLE SOURCE OF TRUTH for all blog posts.
   To add a new post: copy one object, paste it at the TOP of
   BLOG_POSTS (most recent first), set live: true.
   The blog listing page (/blog/) reads from this file — no
   other HTML file needs to be edited for a new post.
   ============================================================ */

var BLOG_POSTS = [

  // ↓ PASTE NEW POST OBJECTS HERE (most recent first)

  {
    slug:    "polythene-tubing-rolls-guide",
    title:   "Polythene Tubing Rolls: The Lay-Flat Powerhouse",
    excerpt: "Everything you need to know about lay-flat LDPE polythene tubing rolls — how they differ from pre-made bags, which sizes suit which applications, and how to buy them right from Pune.",
    tag:     "Polythene Rolls",
    emoji:   "\uD83C\uDF9E\uFE0F",
    date:    "May 2025",
    read:    "10 min read",
    live:    true
  },

  {
    slug:    "ldpe-polythene-sheet-roll-guide",
    title:   "LDPE Polythene Sheet Roll: Complete Buyer's Guide",
    excerpt: "Uses, thickness options, colour variants, widths — everything you need to know before ordering polythene sheet rolls for construction, agriculture or industrial use in Pune.",
    tag:     "Polythene Rolls",
    emoji:   "\uD83D\uDCCB",
    date:    "April 2025",
    read:    "9 min read",
    live:    true
  },

  {
    slug:    "what-is-ldpe-plastic-and-what-is-it-used-for",
    title:   "What is LDPE Plastic and What is it Used For?",
    excerpt: "From grocery carry bags to industrial liners — LDPE is one of the most widely used plastics in the world. Learn its key properties and where it excels as a packaging material.",
    tag:     "LDPE Bags & Packaging",
    emoji:   "\uD83C\uDFED",
    date:    "April 2025",
    read:    "7 min read",
    live:    true
  },

  {
    slug:    "what-is-vci-packaging-and-how-does-it-prevent-rust",
    title:   "What is VCI Packaging and How Does it Prevent Rust?",
    excerpt: "Volatile Corrosion Inhibitor technology explained — how VCI bags protect metal parts and why they are preferred over traditional rust-prevention methods.",
    tag:     "VCI Packaging",
    emoji:   "\uD83D\uDCE6",
    date:    "Coming Soon",
    read:    "",
    live:    false
  },

  {
    slug:    "stretch-film-vs-shrink-film-which-is-right-for-your-product",
    title:   "Stretch Film vs Shrink Film \u2014 Which is Right for Your Product?",
    excerpt: "Two of the most commonly confused packaging films compared: when to use stretch film for pallet wrapping, and when shrink film is the better choice.",
    tag:     "Stretch Film",
    emoji:   "\uD83C\uDFAC",
    date:    "Coming Soon",
    read:    "",
    live:    false
  },

  {
    slug:    "types-of-plastic-bags-and-their-industrial-uses",
    title:   "Types of Plastic Bags and Their Industrial Uses",
    excerpt: "LDPE, HDPE, PP, BOPP \u2014 a plain-language guide to the most common plastic bag types, and how to choose the right one for your application.",
    tag:     "Packaging Guide",
    emoji:   "\uD83D\uDED2",
    date:    "Coming Soon",
    read:    "",
    live:    false
  }

];

/* ── Renderer ─────────────────────────────────────────────── */
(function () {
  'use strict';
  var grid = document.getElementById('blog-grid');
  if (!grid) return;

  BLOG_POSTS.forEach(function (post) {
    var el;
    if (post.live) {
      el = document.createElement('a');
      el.className = 'blog-card reveal';
      el.href = '/blog/' + post.slug + '/';
      el.setAttribute('aria-label', 'Read: ' + post.title);
    } else {
      el = document.createElement('div');
      el.className = 'blog-card';
      el.setAttribute('aria-hidden', 'true');
      el.style.cssText = 'opacity:0.45;pointer-events:none;';
    }
    el.innerHTML =
      '<div class="blog-card-img-placeholder" aria-hidden="true">' + post.emoji + '</div>' +
      '<div class="blog-card-body">' +
        '<div class="blog-card-tag">' + post.tag + '</div>' +
        '<div class="blog-card-title">' + post.title + '</div>' +
        '<p class="blog-card-excerpt">' + post.excerpt + '</p>' +
        '<div class="blog-card-meta">' +
          '<span>\uD83D\uDCC5 ' + post.date + '</span>' +
          (post.read ? '<span>\u23F1 ' + post.read + '</span>' : '') +
        '</div>' +
      '</div>';
    grid.appendChild(el);
  });
})();

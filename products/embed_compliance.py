"""
Replace the SSI include comment in every product HTML file with the
actual compliance note HTML, embedded inline. No server needed.

For future text edits: change COMPLIANCE_HTML below, re-run this script.
"""

import os, re

OUTPUT = "/mnt/user-data/outputs"

SSI_COMMENT = '  <!--#include virtual="/products/_compliance-note.html" -->'

COMPLIANCE_HTML = """\
  <!-- Compliance Note — edit once in this block, re-run embed_compliance.py to push to all pages -->
  <div class="prod-compliance-note">
    <div class="prod-compliance-note__icon" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    </div>
    <div class="prod-compliance-note__body">
      <span class="prod-compliance-note__label">Regulatory Compliance</span>
      <p class="prod-compliance-note__text">
        All products carry mandatory statutory printing as per Government of India
        norms &mdash; including EPR number, manufacturer name &amp; address, product
        category, thickness and all other required information.
        <strong>Minimum thickness is 50&nbsp;microns</strong> as per the Plastic
        Waste Management (Amendment) Rules. Our EPR registration ensures full
        compliance with extended producer responsibility requirements.
      </p>
    </div>
  </div>"""

updated = []
skipped = []

for fname in sorted(os.listdir(OUTPUT)):
    if not fname.endswith(".html") or fname.startswith("_") or fname == "index.html":
        continue
    path = os.path.join(OUTPUT, fname)
    with open(path, encoding="utf-8") as f:
        html = f.read()

    if SSI_COMMENT in html:
        html = html.replace(SSI_COMMENT, COMPLIANCE_HTML, 1)
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        updated.append(fname)
    else:
        skipped.append(fname)

print(f"Updated ({len(updated)}):")
for f in updated: print(f"  ✓ {f}")
if skipped:
    print(f"\nNo SSI comment found — skipped ({len(skipped)}):")
    for f in skipped: print(f"  – {f}")

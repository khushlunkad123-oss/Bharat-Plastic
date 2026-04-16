/* ============================================================
   BHARAT PLASTIC MANUFACTURING CO. — Main Script
   script.js | Pimpri MIDC, Pune — Industrial Packaging
   ============================================================ */

// ── Certificate PDF map (linked to assets/docs/) ─────────────
const CERT_PATHS = {
  iso:  'assets/docs/ISO-Certificate-Bharat-Plastic.pdf',
  mpcb: 'assets/docs/MPCB-Consent-Certificate-Bharat-Plastic.pdf',
  epr:  'assets/docs/EPR-Certificate-Bharat-Plastic.pdf',
  msme: 'assets/docs/Udyam-Certificate-Bharat-Plastic.pdf',
  iec:  'assets/docs/Import_Export_Certificate-Bharat-Plastic.pdf'
};

// ── Select product & scroll to contact form ──────────────────
function selectProduct(prod) {
  document.getElementById('f-product').value = prod;
  window.location.href = '#contact';
}

// ── Open certificate PDF in new tab ──────────────────────────
function openCert(certId) {
  const path = CERT_PATHS[certId];
  if (path) {
    window.open(path, '_blank', 'noopener,noreferrer');
  }
}

// ── Download company catalogue / profile PDF ─────────────────
function downloadCatalogue() {
  const link = document.createElement('a');
  link.href = 'assets/docs/Bharat-Plastic-Manufacturing-Co.-Company-Profile_.pdf';
  link.download = 'Bharat-Plastic-Manufacturing-Co-Company-Profile.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ── WhatsApp enquiry form ─────────────────────────────────────
function sendToWhatsApp(e) {
  e.preventDefault();
  const name    = document.getElementById('f-name').value.trim();
  const company = document.getElementById('f-company').value.trim();
  const pos     = document.getElementById('f-pos').value.trim();
  const product = document.getElementById('f-product').value;
  const qty     = document.getElementById('f-qty').value.trim();
  const notes   = document.getElementById('f-notes').value.trim();

  if (!name || !company || !pos || !product || !qty) {
    alert('Please fill all required fields (marked *).');
    return;
  }

  let msg = '*New Enquiry — Bharat Plastic Manufacturing Co.*\n\n';
  msg += '👤 *Name:* ' + name + '\n🏢 *Company:* ' + company + '\n💼 *Position:* ' + pos + '\n';
  msg += '\n📦 *Product Required:* ' + product + '\n📊 *Quantity:* ' + qty + '\n';
  if (notes) msg += '\n📝 *Additional Requirements:*\n' + notes + '\n';
  msg += '\n_Sent via BPMC Website_';

  window.open('https://wa.me/919860256222?text=' + encodeURIComponent(msg), '_blank');
}

// ── Scroll reveal animation ───────────────────────────────────
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

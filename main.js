// ── Floating math symbols ──────────────────────
const symbols = ['π', 'Σ', '∫', '√', '∞', '÷', '×', '±', 'θ', 'α', 'β', 'Δ', '≈', '≠', '∈', 'φ', 'λ', '²', '³', '%', '∂', '∑', '∏', '∓'];

function createSymbols() {
  const container = document.querySelector('.bg-symbols');
  if (!container) return;
  for (let i = 0; i < 55; i++) {
    const span = document.createElement('span');
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.top  = Math.random() * 100 + 'vh';
    span.style.animationDelay    = (Math.random() * 10) + 's';
    span.style.animationDuration = (15 + Math.random() * 15) + 's';
    span.style.fontSize = (0.75 + Math.random() * 0.8) + 'rem';
    container.appendChild(span);
  }
}
createSymbols();

// ── Mobile nav (if needed) ─────────────────────
// Active nav link is set via class="active" on each page's <a> tag directly.

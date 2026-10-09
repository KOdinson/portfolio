// Scale live prototype iframes (authored at 1280x800) to fit their plate.
function fitPlates() {
  document.querySelectorAll('.plate iframe').forEach((frame) => {
    frame.style.transform = 'scale(' + frame.parentElement.clientWidth / 1280 + ')';
  });
}
window.addEventListener('resize', fitPlates);
fitPlates();

// Copy-to-clipboard for the contact address, with a select-the-text fallback.
document.querySelectorAll('[data-copy]').forEach((btn) => {
  const original = btn.textContent;
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.copy);
    const done = () => {
      btn.textContent = 'Copied';
      setTimeout(() => { btn.textContent = original; }, 1600);
    };
    const select = () => {
      const range = document.createRange();
      range.selectNodeContents(target);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(target.textContent.trim()).then(done).catch(select);
    } else {
      select();
    }
  });
});

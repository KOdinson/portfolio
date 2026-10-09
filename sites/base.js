// Scale embedded desktop prototypes (authored at 1280x800) to fit their frame.
function fitFrames() {
  document.querySelectorAll('.browser iframe').forEach((f) => { f.style.transform = 'scale(' + f.parentElement.clientWidth / 1280 + ')'; });
}
window.addEventListener('resize', fitFrames);
fitFrames();
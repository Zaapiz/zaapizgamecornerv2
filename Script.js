/**
 * Scroll-driven "zaapiz" background watermark.
 * As the user scrolls down, the watermark fades in and scales up.
 */
(function () {
  'use strict';

  const watermark = document.querySelector('.bg-watermark');
  if (!watermark) return;

  function updateWatermark() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Avoid division by zero on pages that don't scroll
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

    // Opacity: 0 at top → 0.12 at bottom
    const opacity = progress * 0.12;

    // Scale: 0.7 at top → 1.0 at bottom
    const scale = 0.7 + progress * 0.3;

    watermark.style.opacity = opacity;
    watermark.style.transform = 'scale(' + scale + ')';
  }

  // Run once on load in case the page starts mid-scroll
  updateWatermark();

  window.addEventListener('scroll', updateWatermark, { passive: true });
})();

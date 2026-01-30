/**
 * Slide Navigation Engine — 231CSC601T Course Platform
 * ─────────────────────────────────────────────────────
 * Shared across all 15+ presentation decks.
 *
 * Features:
 *  - Slide show/hide with animation
 *  - Keyboard navigation (←, →, Space, M, Escape, ?)
 *  - Progress bar
 *  - Dynamic slide menu generation
 *  - Scroll to top on slide change
 *  - ARIA live-region updates for screen readers
 *  - Touch swipe support for mobile
 *
 * Usage:
 *  <script src="../../core/slides.js" defer></script>
 *
 * Required DOM structure:
 *  .slide          — each slide (first gets .active)
 *  #progress       — progress fill element (optional)
 *  #progressBar    — legacy fixed progress bar (optional)
 *  #currentSlide   — current slide number text
 *  #totalSlides    — total slide count text
 *  #prevBtn        — previous button
 *  #nextBtn        — next button
 *  #menuOverlay    — menu overlay container
 *  #slideMenu      — <ul> inside menu for dynamic items
 *  .close-menu     — close button inside menu
 *
 * The script auto-initializes on DOMContentLoaded.
 */

(function () {
  'use strict';

  // ── State ───────────────────────────────────────────────────
  var currentSlide = 0;
  var slides, totalSlides;
  var touchStartX = 0;
  var touchEndX = 0;

  // ── DOM refs (resolved on init) ─────────────────────────────
  var els = {};

  // ── Initialize ──────────────────────────────────────────────
  function init() {
    slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;

    if (totalSlides === 0) return;

    // Cache DOM refs
    els.progress     = document.getElementById('progress');
    els.progressBar  = document.getElementById('progressBar');
    els.currentSlide = document.getElementById('currentSlide');
    els.totalSlides  = document.getElementById('totalSlides');
    els.prevBtn      = document.getElementById('prevBtn');
    els.nextBtn      = document.getElementById('nextBtn');
    els.menuOverlay  = document.getElementById('menuOverlay');
    els.slideMenu    = document.getElementById('slideMenu');

    // Set total count
    if (els.totalSlides) {
      els.totalSlides.textContent = totalSlides;
    }

    // Build menu
    buildMenu();

    // Bind events
    bindKeyboard();
    bindButtons();
    bindTouch();

    // Create ARIA live region for screen readers
    createLiveRegion();

    // Show first slide
    updateSlide();

    // Handle URL hash (e.g., #slide-5)
    handleHash();
  }

  // ── Build slide menu dynamically ────────────────────────────
  function buildMenu() {
    if (!els.slideMenu) return;

    // Clear existing items
    els.slideMenu.innerHTML = '';

    slides.forEach(function (slide, index) {
      var title = slide.querySelector('h1, h2');
      var titleText = title ? title.textContent : 'Slide ' + (index + 1);

      var li = document.createElement('li');
      li.textContent = (index + 1) + '. ' + titleText;
      li.setAttribute('role', 'button');
      li.setAttribute('tabindex', '0');
      li.addEventListener('click', function () { goToSlide(index); });
      li.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          goToSlide(index);
        }
      });
      els.slideMenu.appendChild(li);
    });
  }

  // ── Update slide display ────────────────────────────────────
  function updateSlide() {
    slides.forEach(function (slide, index) {
      slide.classList.toggle('active', index === currentSlide);
      slide.setAttribute('aria-hidden', index !== currentSlide);
    });

    // Counter
    if (els.currentSlide) {
      els.currentSlide.textContent = currentSlide + 1;
    }

    // Progress (inline bar style)
    var pct = ((currentSlide + 1) / totalSlides * 100) + '%';

    if (els.progress) {
      els.progress.style.width = pct;
    }

    // Legacy fixed bar (Week 1 style)
    if (els.progressBar && els.progressBar.classList.contains('progress-bar')) {
      els.progressBar.style.width = pct;
    }

    // Button states - hide instead of disable
    if (els.prevBtn) {
      if (currentSlide === 0) {
        els.prevBtn.style.display = 'none';
        els.prevBtn.setAttribute('aria-disabled', 'true');
      } else {
        els.prevBtn.style.display = '';
        els.prevBtn.setAttribute('aria-disabled', 'false');
      }
    }
    if (els.nextBtn) {
      if (currentSlide === totalSlides - 1) {
        els.nextBtn.style.display = 'none';
        els.nextBtn.setAttribute('aria-disabled', 'true');
      } else {
        els.nextBtn.style.display = '';
        els.nextBtn.setAttribute('aria-disabled', 'false');
      }
    }

    // Bottom buttons
    var prevBtn2 = document.getElementById('prevBtn2');
    var nextBtn2 = document.getElementById('nextBtn2');
    if (prevBtn2) {
      prevBtn2.style.display = currentSlide === 0 ? 'none' : '';
    }
    if (nextBtn2) {
      nextBtn2.style.display = currentSlide === totalSlides - 1 ? 'none' : '';
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update URL hash
    if (history.replaceState) {
      history.replaceState(null, '', '#slide-' + (currentSlide + 1));
    }

    // Announce to screen readers
    announceSlide();
  }

  // ── Navigation functions ────────────────────────────────────
  function changeSlide(direction) {
    var next = currentSlide + direction;
    if (next >= 0 && next < totalSlides) {
      currentSlide = next;
      updateSlide();
    }
  }

  function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
      currentSlide = index;
      updateSlide();
      closeMenu();
    }
  }

  function nextSlide() { changeSlide(1); }
  function prevSlide() { changeSlide(-1); }

  // ── Menu ────────────────────────────────────────────────────
  function toggleMenu() {
    if (els.menuOverlay) {
      var isOpen = els.menuOverlay.classList.toggle('active');
      els.menuOverlay.setAttribute('aria-hidden', !isOpen);

      if (isOpen) {
        // Focus first menu item
        var first = els.menuOverlay.querySelector('li, .menu-item');
        if (first) first.focus();
      }
    }
  }

  function closeMenu() {
    if (els.menuOverlay) {
      els.menuOverlay.classList.remove('active');
      els.menuOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  // ── Keyboard ────────────────────────────────────────────────
  function bindKeyboard() {
    document.addEventListener('keydown', function (e) {
      // Don't capture when typing in inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          changeSlide(1);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          changeSlide(-1);
          break;
        case 'm':
        case 'M':
          toggleMenu();
          break;
        case 'Escape':
          closeMenu();
          break;
        case '?':
          alert(
            'Keyboard Shortcuts:\n\n' +
            '→ or Space: Next slide\n' +
            '←: Previous slide\n' +
            'M: Toggle slide menu\n' +
            'Esc: Close menu\n' +
            '?: Show this help'
          );
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
      }
    });
  }

  // ── Button bindings ─────────────────────────────────────────
  function bindButtons() {
    // Use event delegation for buttons that may not exist at parse time
    document.addEventListener('click', function (e) {
      var target = e.target.closest('[data-slide-action]');
      if (!target) return;

      var action = target.getAttribute('data-slide-action');
      switch (action) {
        case 'prev':  changeSlide(-1); break;
        case 'next':  changeSlide(1);  break;
        case 'menu':  toggleMenu();    break;
        case 'close': closeMenu();     break;
      }
    });

    // Legacy onclick handlers — bind by ID for backward compatibility
    if (els.prevBtn) els.prevBtn.addEventListener('click', function () { changeSlide(-1); });
    if (els.nextBtn) els.nextBtn.addEventListener('click', function () { changeSlide(1);  });

    var closeBtn = document.querySelector('.close-menu');
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  }

  // ── Touch / Swipe ───────────────────────────────────────────
  function bindTouch() {
    var minSwipe = 50; // minimum px for a swipe

    document.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;

      if (Math.abs(diff) > minSwipe) {
        if (diff > 0) {
          changeSlide(1);  // swipe left → next
        } else {
          changeSlide(-1); // swipe right → prev
        }
      }
    }, { passive: true });
  }

  // ── Accessibility: ARIA live region ─────────────────────────
  var liveRegion;
  function createLiveRegion() {
    liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  }

  function announceSlide() {
    if (!liveRegion) return;
    var title = slides[currentSlide].querySelector('h1, h2');
    var titleText = title ? title.textContent : 'Slide ' + (currentSlide + 1);
    liveRegion.textContent = 'Slide ' + (currentSlide + 1) + ' of ' + totalSlides + ': ' + titleText;
  }

  // ── URL hash handling ───────────────────────────────────────
  function handleHash() {
    var hash = window.location.hash;
    var match = hash.match(/^#slide-(\d+)$/);
    if (match) {
      var index = parseInt(match[1], 10) - 1;
      if (index >= 0 && index < totalSlides) {
        currentSlide = index;
        updateSlide();
      }
    }
  }

  // ── Expose globals for legacy onclick= attributes ──────────
  // These will be removed once all files migrate to data-slide-action
  window.nextSlide   = nextSlide;
  window.prevSlide   = prevSlide;
  window.goToSlide   = goToSlide;
  window.toggleMenu  = toggleMenu;
  window.showSlide   = function (index) { goToSlide(index); };
  window.changeSlide = function (dir) { changeSlide(dir); };

  // ── Boot ────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/**
 * Theme Engine — 231CSC601T Course Platform
 * ──────────────────────────────────────────
 * Works with Tailwind CSS `darkMode: 'class'` strategy.
 * Toggles the `dark` class on <html> + persists to localStorage.
 *
 * Load in <head> (blocking) to prevent flash-of-wrong-theme:
 *   <script src="../../core/theme.js"></script>
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'theme-preference';
  var root = document.documentElement;

  function getPreference() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme, animate) {
    if (animate) root.classList.add('theme-transitioning');

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#09090B' : '#FAFAFA';

    // Update toggle button icons and labels
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      var sun = btn.querySelector('.icon-sun');
      var moon = btn.querySelector('.icon-moon');
      if (sun) sun.style.display = theme === 'dark' ? 'block' : 'none';
      if (moon) moon.style.display = theme === 'dark' ? 'none' : 'block';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });

    if (animate) {
      setTimeout(function () { root.classList.remove('theme-transitioning'); }, 300);
    }
  }

  var currentTheme = getPreference();
  applyTheme(currentTheme, false);

  function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme, true);
    localStorage.setItem(STORAGE_KEY, currentTheme);
  }

  function bindToggle() {
    document.addEventListener('click', function (e) {
      if (e.target.closest('.theme-toggle')) toggleTheme();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindToggle);
  } else {
    bindToggle();
  }

  // Listen for system preference changes (if no manual choice)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem(STORAGE_KEY)) {
      currentTheme = e.matches ? 'dark' : 'light';
      applyTheme(currentTheme, true);
    }
  });

  // Sync across tabs
  window.addEventListener('storage', function (e) {
    if (e.key === STORAGE_KEY && (e.newValue === 'dark' || e.newValue === 'light')) {
      currentTheme = e.newValue;
      applyTheme(currentTheme, true);
    }
  });

  window.themeEngine = {
    toggle: toggleTheme,
    get: function () { return currentTheme; },
    set: function (t) { if (t === 'dark' || t === 'light') { currentTheme = t; applyTheme(t, true); localStorage.setItem(STORAGE_KEY, t); } },
    reset: function () { localStorage.removeItem(STORAGE_KEY); currentTheme = getPreference(); applyTheme(currentTheme, true); }
  };
})();

// ==UserScript==
// @name         LinkedIn Jobs - Floating Button + Highlight & Hide Companies
// @namespace    https://tampermonkey.net/
// @version      1.4
// @description  Colors matching company names red, then hides (not deletes) the parent job card
// @match        https://www.linkedin.com/jobs/*
// @run-at       document-idle
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  /* ================== CONFIG ================== */
  const companyNamesList = 'Capgemini,Cognizant,Programmers.io';   // comma-separated
  const CASE_SENSITIVE = false;               // true = "cgi" will not match "CGI"
  const HIGHLIGHT_COLOR = 'red';
  const HIDE_DELAY_MS = 1000;                 // time the red color stays visible before hiding (0 = hide immediately)

  // Classes of the <p> that holds the company name
  const TARGET_CLASSES = [
    'l4jk8d', 'l4jk3r', 'l4jk3b', 'l4jk5j', 'l4jk5z',
    'l4jk6n', 'l4jk7r', 'l4jgdi', 'l4jk8b', 'l4jle6'
  ];

  // Classes of the parent <div> to hide
  const PARENT_CLASSES = ['l4jax7', 'l4jln8'];
  /* ============================================ */

  const BUTTON_ID = 'tm-floating-btn';
  const TARGET_SELECTOR = 'p.' + TARGET_CLASSES.join('.');
  const PARENT_SELECTOR = 'div.' + PARENT_CLASSES.join('.');

  const normalize = (s) => {
    const t = s.trim().replace(/\s+/g, ' ');
    return CASE_SENSITIVE ? t : t.toLowerCase();
  };

  const companySet = new Set(
    companyNamesList
      .split(',')
      .map(normalize)
      .filter(Boolean)
  );

  const isMatch = (p) => companySet.has(normalize(p.textContent));

  GM_addStyle(`
    #${BUTTON_ID} {
      position: fixed;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      z-index: 999999;
      width: 44px;
      height: 44px;
      padding: 0;
      border: none;
      border-radius: 8px 0 0 8px;
      background: #0a66c2;
      color: #fff;
      font-size: 20px;
      line-height: 44px;
      text-align: center;
      cursor: pointer;
      box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.3);
      opacity: 0.85;
      transition: width 0.15s ease, opacity 0.15s ease, background 0.15s ease;
    }
    #${BUTTON_ID}:hover {
      width: 56px;
      opacity: 1;
      background: #004182;
    }
    #${BUTTON_ID}:active {
      background: #00305f;
    }
  `);

  // parent div -> pending timeout id
  const pendingHides = new Map();

  function hideElement(div) {
    div.style.setProperty('display', 'none', 'important');
    div.dataset.tmHidden = '1';
  }

  function showElement(div) {
    div.style.removeProperty('display');
    delete div.dataset.tmHidden;
  }

  function scheduleHide(parent, p) {
    if (parent.dataset.tmHidden || pendingHides.has(parent)) return;

    if (HIDE_DELAY_MS <= 0) {
      hideElement(parent);
      return;
    }

    const id = setTimeout(() => {
      pendingHides.delete(parent);
      // Re-check: LinkedIn may have reused this element for another company
      if (parent.contains(p) && isMatch(p)) hideElement(parent);
    }, HIDE_DELAY_MS);
    pendingHides.set(parent, id);
  }

  function processCompanies() {
    const matchedParents = new Set();

    document.querySelectorAll(TARGET_SELECTOR).forEach((p) => {
      if (isMatch(p)) {
        // Step 1: color red
        p.style.setProperty('color', HIGHLIGHT_COLOR, 'important');
        p.dataset.tmHighlighted = '1';

        // Step 2: hide the parent (after the delay)
        const parent = p.closest(PARENT_SELECTOR);
        if (parent) {
          matchedParents.add(parent);
          scheduleHide(parent, p);
        }
      } else if (p.dataset.tmHighlighted) {
        // No longer matches (element reused) -> reset color
        p.style.removeProperty('color');
        delete p.dataset.tmHighlighted;
      }
    });

    // Cancel pending hides for divs that no longer match
    for (const [div, id] of pendingHides) {
      if (!matchedParents.has(div)) {
        clearTimeout(id);
        pendingHides.delete(div);
      }
    }

    // Show hidden divs that no longer match
    document.querySelectorAll('[data-tm-hidden="1"]').forEach((div) => {
      if (!matchedParents.has(div)) showElement(div);
    });
  }

  function addButton() {
    if (document.getElementById(BUTTON_ID)) return;

    const btn = document.createElement('button');
    btn.id = BUTTON_ID;
    btn.type = 'button';
    btn.title = 'My Button';
    btn.textContent = '★';

    btn.addEventListener('click', () => {
      // ====== Your action goes here ======
      const hidden = document.querySelectorAll('[data-tm-hidden="1"]').length;
      alert(`Watching: ${[...companySet].join(', ')}\nHidden on page: ${hidden}`);
    });

    document.body.appendChild(btn);
  }

  // Debounce so we don't run on every tiny DOM change
  let timer = null;
  function scheduleRun() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      addButton();
      processCompanies();
    }, 150);
  }

  addButton();
  processCompanies();

  // Watches for new nodes and text changes (SPA navigation, infinite scroll).
  // Attribute changes are not observed, so our own style edits don't re-trigger it.
  const observer = new MutationObserver(scheduleRun);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
})();

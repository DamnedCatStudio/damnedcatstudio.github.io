/**
 * @fileoverview Contains the namespace {@link application}
 *
 * @copyright © Damned Cat Studio - All rights reserved
 */

"use strict";

/**
 * Javascript for main application/site
 *
 * @namespace
 */
const application = {
  /**
   * Fire off when DOM becomes ready
   */
  windowLoad: () => {
    feather.replace(); // from feather-icons
    let copy = document.getElementById("copyDate");
    if (copy !== null) {
      application.setCopyright(copy);
    }
  },
  /**
   * Update the year to the current year if it is not
   * @param {HTMLElement} el
   * 
   * @return {void}
   */
  setCopyright: (el) => {
    let dttm = new Date().getFullYear();
    if (el.innerHTML !== dttm.toString()) {
      el.innerHTML = dttm.toString();
    }
  },
};

/**
 * Check the state of the DOM & attach windowLoad
 */
if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  application.windowLoad();
} else {
  document.addEventListener("DOMContentLoaded", application.windowLoad);
}

/**
 * Check is servicerworkers are supported & register if true
 */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw.js")
      .catch((err) => console.error(`Service Worker: Error: ${err}`));
  });
}

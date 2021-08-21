// ==UserScript==
// @name         PlurkHtmlTitleAsUserTitle
// @namespace    https://github.com/ytingyeu
// @version      0.3
// @description  Replace HTML title with user page title
// @author       Tingyeu Yang <ytingyeu@asu.edu>
// @include      *://www.plurk.com/*
// @exclude      *://www.plurk.com/m
// @exclude      *://www.plurk.com/m/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function onLoad() {
    const userTitleElement = document.getElementById("page_title");

    if (userTitleElement !== null) {
      const userTitle = userTitleElement.innerText;
      document.title = userTitle;

      const observer = new MutationObserver(function (mutations) {
        mutations.forEach((mutation) => {
          if (document.title !== userTitle) {
            console.log(document.title)
            document.title = userTitle;
          }
        });
      });

      const target = document.querySelector("title");

      if (target !== null) {
        const config = {
          childList: true,
        };
        observer.observe(target, config);
      }
    }
  }

  window.addEventListener("load", onLoad);
})();

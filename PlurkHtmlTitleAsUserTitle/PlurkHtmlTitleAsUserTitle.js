// ==UserScript==
// @name         PlurkHtmlTitleAsUserTitle
// @namespace    https://github.com/ytingyeu
// @version      0.1
// @description  Replace HTML title with user page title
// @author       Tingyeu Yang <ytingyeu@asu.edu>
// @include      *://www.plurk.com/*
// @exclude      *://www.plurk.com/m
// @exclude      *://www.plurk.com/m/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  if (document.readyState == "interactive") {
    let userTitleElement = document.getElementById("page_title");

    if (userTitleElement !== null) {
      document.title = userTitleElement.innerText;
    }
  }
})();

$(function () {
  $("#navbarToggle").focus(function (event) {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse("hide");
    }
  });
});

(function (global) {
  let dc = {};
  let homeHtmlPage = "snippet/home-snippet.html";
  let insertHtml = function (selector, html) {
    let targetElement = document.querySelector(selector);
    targetElement.innerHTML = html;
  };

  let showLoading = function (selector) {
    let html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };

  document.addEventListener("DOMContentLoaded", function (event) {
    showLoading("#main-content");
    $ajaxUtility.sendGetRequest(
      homeHtmlPage,
      function (responseText) {
        document.querySelector("#main-content").innerHTML = responseText;
      },
      false
    );
  });

  global.$dc = dc;
})(window);

$(document).ready(function () {
  console.log("include.js loaded");

  $("#header-placeholder").load("./header.html");
  $("#footer-placeholder").load("./footer.html");
  $("#scripts-placeholder").load("./scripts.html");
});

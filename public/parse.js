$(function() {
  "use strict";
  $(".noscript").hide();
  var uri = new URI(window.location).search(true);
  if (uri.hasOwnProperty("code") && uri.code && uri.code.length > 0){
    $("#code").text(uri.code);
  } else {
    if (uri.hasOwnProperty("error")){
      $("#error").text(uri.error);
    }
    if (uri.hasOwnProperty("error_description")){
      $("#error_description").text(uri.error_description);
    }
    $("#failure").show();
    $("#success").hide();
  }
});

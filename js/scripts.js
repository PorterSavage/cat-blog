$(document).ready(function() {
    $("button").click(function() {
      $("body").toggleClass("dark-background");
    });

    $(".highlight").click(function() {
      $(".highlight").toggleClass("highlightTwo");
    });

    // $(".highlightTwo").click(function() {
    //   $(".highlight").removeClass("highlightTwo");
    // });


});

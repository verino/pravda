  var headerH = $("#js-header").height(),
    navH = $("#js-nav").innerHeight();
  $(document).on("scroll", function() {
    var documentScroll = $(this).scrollTop();
    if (documentScroll > headerH) {
      $("#js-nav").addClass("fixed");
      $("#js-header").css({
        "paddingTop": navH,
      });

    } else {
      $("#js-nav").removeClass("fixed");
      $("#js-header").removeAttr("style");
    }
  });
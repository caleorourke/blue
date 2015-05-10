// Swaps classes to collapse the navbar while scrolling
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("nav-collapse-top");
  } else {
    $(".navbar-fixed-top").removeClass("nav-collapse-top");
  }
});

// Slow animation for page scrolling
$(function() {
  $("a.smooth").bind("click", function(event) {
    var $anchor = $(this);
    $("html, body").stop().animate({
      scrollTop: $($anchor.attr("href")).offset().top
    }, 1500, "easeInOutExpo");
    event.preventDefault();
  });
});

// Fetches repository count from GitHub's API
$.ajax({
  url: "https://api.github.com/orgs/softlayer?callback?",
  dataType: "jsonp",
  success: function(json) {
    numRepos = json.data;
    $("#github-repos").text(numRepos.public_repos);
  }
});

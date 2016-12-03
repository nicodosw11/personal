$(document).ready(function() {
  $(window).scroll(function () {
    var bannerHeight = $(".banner-resume").height();
    if ($(window).scrollTop() > (bannerHeight - 10)) {
      $('.navbar-inner').removeClass('is-hidden');
    } else {
      $('.navbar-inner').addClass('is-hidden');
    }
  });

  var bannerHeight = $(".banner-resume").height();
  if ($(window).scrollTop() > (bannerHeight - 10)) {
    $('.navbar-inner').removeClass('is-hidden');
  } else {
    $('.navbar-inner').addClass('is-hidden');
  }
});

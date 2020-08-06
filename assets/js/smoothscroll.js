// Smooth scrolling top page
$('.scroll-up').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  
  
  // Smooth scrolling page
  $("a[href*='#']:not([href='#'])").click(function() {
    let target = $(this).attr("href");
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
    event.preventDefault();
  });  
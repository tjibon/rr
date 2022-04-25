// ..............Custom JavaScript Code.................
$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('.navbar-default').addClass("navbar-shrink");
    }
    else{
      $('.navbar-default').removeClass("navbar-shrink");
    }

    

    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


   

    $('.cofffe-area').parallaxie();

});
 
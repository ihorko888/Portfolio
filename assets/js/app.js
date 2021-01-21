$(function () {

    // Burger
    let navToggle = $('#navToggle');   
    let nav = $('#nav-transform');
    let navlinks = ('#nav-transform a');
    
    navToggle.on('click', function(event) {
        event.preventDefault();
    
        $("body").toggleClass('show-nav');
        $(this).toggleClass('active');
        nav.toggleClass('show');
    });
    
    $(window).on('resize', function () {
        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');
    });
    // Skill Bar
    $(window).scroll(function() {
        var hT = $('#skills__content').offset().top,
            hH = $('#skills__content').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-1.4*wH)){
            jQuery(document).ready(function(){
                jQuery('.skillbar-container').each(function(){
                    jQuery(this).find('.skill').animate({
                        width:jQuery(this).attr('data-percent')
                    }, 2000);
                });
            });
        }
     });
    
    
    
     $(document).ready(function($) {
       function animateElements() {
         $('.progressbar').each(function() {
           var elementPos = $(this).offset().top;
           var topOfWindow = $(window).scrollTop();
           var percent = $(this).find('.circle').attr('data-percent');
           var percentage = parseInt(percent, 10) / parseInt(100, 10);
           var animate = $(this).data('animate');
           if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
             $(this).data('animate', true);
             $(this).find('.circle').circleProgress({
               startAngle: -Math.PI / 2,
               value: percent / 100,
               thickness: 4,
               fill: {
                 color: '#3bb78f'
               }
             }).on('circle-animation-progress', function(event, progress, stepValue) {
               $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
             }).stop();
           }
         });
       }
     
       // Show animated elements
       animateElements();
       $(window).scroll(animateElements);
     });

});
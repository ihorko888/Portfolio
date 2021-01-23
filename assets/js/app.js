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
                    }, 1000);
                });
            });
        }
     });
    
    
    
    //  console.log("JavaScript is amazing!");
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
    // Modal window
    $('[data-modal]').on('click', function (event) {
        event.preventDefault();
    
        let modal = $(this).data('modal');
    
        $('body').addClass('no-scroll');
        $(modal).addClass('show');
    
        setTimeout(function () {
            $(modal).find('.modal__inner').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        }, 100);
    });
    
    $('[data-modal-close]').on('click', function (event) {
        event.preventDefault();
    
        let modal = $(this).parents('.modal');
    
        modalClose(modal);
    });
    
    $('.modal').on('click', function () {
        let modal = $(this);
    
        modalClose(modal);
    });
    
    $('.modal__inner').on('click', function (event) {
        event.stopPropagation();
    });
    
    function modalClose(modal) {
    
        modal.find('.modal__inner').css({
            transform: 'scale(0.5)',
            opacity: '0'
        });
    
        setTimeout(function () {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 200);
    }
    // Fixed menu scroll
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('#header').addClass('header-show');
        } else {
            $('#header').removeClass('header-show');
        };
    });
    // Scroll to section
    let header = $('#header');
    let headerH = header.innerHeight();
    
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();
    
        let scrollEl = $(this).data('scroll');
        let scrollElPos = $(scrollEl).offset().top;
        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');
    
        $('html, body').animate({
            scrollTop: scrollElPos - headerH
        }, 500);
    });
    // ScrollSpy
    let scrollTop = $(window).scrollTop();
    let windowH = $(window).height();
    scrollSpy(scrollTop);
    
    $(window).on("scroll", function () {
        scrollTop = $(this).scrollTop();
        scrollSpy(scrollTop);
    });
    
    function scrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function () {
            let $this = $(this);
            let sectionId = $this.data('scrollspy');
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.33333);
    
            if (scrollTop >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
            }
        });
    }

});
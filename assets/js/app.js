$(function () {

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

});
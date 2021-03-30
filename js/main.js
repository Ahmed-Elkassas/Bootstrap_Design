$(function() {

    let winH = $(window).height(),
        uppH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();

    $('.slider .carousel-item').height(winH - (uppH + navH));

    $('.our-work ul li').click(function() {

        $(this).addClass('active').siblings().removeClass('active');
        // console.log($(this).data('class')); to check the code
        if ($(this).data('class') == 'all' ) {

            $('.shuffel-img .col-sm').css('opacity', 1);

        } else {

            $('.shuffel-img .col-sm').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1);

        }

    });
});
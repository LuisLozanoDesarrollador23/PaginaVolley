$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).width() > 800) {
            var scroll = $(window).scrollTop();
            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 3 + '%)'
            });

            $('#acerca article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });

    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth < 800) {
            $('#acerca article').css({
                'transform': 'translate(0px, 0px)'
            });

            $('header .textos').css({
                'transform': 'translate(0px, 5px)',
                marginTop:10              
            });
        }
    });
});
$(document).ready(function(){
if ($(window).width()>800){
    //efecto menu
 $('.menu a').each(function(index, elemento){
    $(this).css({
        'top':'-200px'
    });
    $(this).animate({
        top:0
    },2000 + (index * 500));
 });
 //efecto header
 $('header .textos').css ({
    opacity:0,
    marginTop:0
 });
 $('header .textos').animate({
    opacity: 1,
    marginTop:'-40px'
 },1500);
}

//Scroll Elementos menu
var acercaDe = $('#acerca').offset().top,
    categoria = $('#categoria').offset().top,
    galeria =$('#galeria').offset().top,
    contacto =$('#contacto').offset().top;

$('#btn-Acerca').on('click', function(e){    
    e.preventDefault();
    $('html, body').animate({
        scrollTop:acercaDe
    },500);
});

$('#btn-menu').on('click', function(e){    
    e.preventDefault();
    $('html, body').animate({
        scrollTop:categoria + 600
    },500);
});

$('#btn-galeria').on('click', function(e){    
    e.preventDefault();
    $('html, body').animate({
        scrollTop:galeria
    },500);
});

$('#btn-contacto').on('click', function(e){    
    e.preventDefault();
    $('html, body').animate({
        scrollTop:contacto
    },500);
});

});
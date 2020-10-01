$(document).ready(function () {

   $('.skill_tab').on('click', function(event){
        event.preventDefault();
        $(".skill_tab").removeClass("active");
        $(this).addClass("active");
        
        $(".skill-descriptions").addClass("hide");
    
        $($(this).data("target")).removeClass("hide");
   });

    
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');        
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');        
    });
    
    $('nav a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 40
        }, 2000);
        return false;
    });
    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);        
    });
});
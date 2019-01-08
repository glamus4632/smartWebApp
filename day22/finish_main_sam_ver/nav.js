$(document).ready(function(){
    $('.btn-ham').click(function(){
        $('.sidebar').animate({right:'0'},500);
    });
    $('.sidebar-close').click(function(){
        $('.sidebar').animate({right:'-300'},500);
    });

    
    //$('.contents').fadeIn(1500); //제이쿼리를 이용하는 방법
    
});
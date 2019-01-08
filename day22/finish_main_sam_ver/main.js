
$(document).ready(function(){
    var swiper = new Swiper('.contents.swiper-container',{
        slidesPerView: 1
        // autoplay: {
        //     delay: 4000,
        //   },
        // loop:true,
        //speed:1500/*속도 변경*/
        
    });
    
    var swiper2 = new Swiper('.title.swiper-container', {
        slidesPerView: 'auto',//화면에 보여질 슬라이드의 갯수 (글자 갯수에 맞춰서)
        spaceBetween: 30,
        centeredSlides: true,
        
        slideToClickedSlide:true/**슬라이드 목록을 클릭 했을 때 바로바로 넘어감*/
    });
    swiper.controller.control = swiper2;
    swiper2.controller.control = swiper;//이거 쓸거면 루프 트루하면 안된다
    
    $('.carousel').carousel('pause');//클릭했을 때만 넘어가게(자동x)

    // <!-- 3. 실행 스크립트 -->
                        
    new daum.roughmap.Lander({
        "timestamp" : "1546584196652",
        "key" : "rn7i",
        "mapWidth" : "800",
        "mapHeight" : "350"
    }).render();
                        

});
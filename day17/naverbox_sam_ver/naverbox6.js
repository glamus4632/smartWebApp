$(document).ready(function(){
  $('.auto-search').click(function(){
      $('#auto-box').toggleClass('display-block');
      $('.auto-down').toggleClass('auto-up');
  });
  $('.item4').click(function(){
      $(this).toggleClass('item4-1');
      $('.sub-menu').toggleClass('display-block');
      $('.sub-menu-background').toggleClass('display-block');
  });
  $('.menu-close').click(function(){
      $('.item4').toggleClass('item4-1');
      $('.sub-menu').toggleClass('display-block');
      $('.sub-menu-background').toggleClass('display-block');
  });

  

  //실시간 인기검색어
  var ticker = function(div,h,time)
  {
    timer = setTimeout(function(){
        $(div+' li:first').animate( {marginTop: h}, time, function()
        {
          $(this).detach().appendTo(div+'>ul').removeAttr('style');
        });
        ticker(div,h,time);
    }, 2000);         
  };
  ticker('.item5','-20px',400);
  ticker('.news-content','-20px',600);

  
  //실시간 검색어 호버시 박스 popup
  $('.item5').hover(function(){
    $('.real-search-box').toggleClass('display-block');
  });

  $('.api-list>li').hover(function(){
    //$('.api-list>li>a').toggleClass('display-none');
    $(this).children('a').toggleClass('display-none');
    // $('.api-list>li>div').toggleClass('display-block');
    $(this).children('div').toggleClass('display-block');
  });
    
  //box5-bottom next, prev
  var index = 1;
  function displayBox5(i){
      $('.box5-bottom').removeClass('display-block');//만들어진 6개의 디스플레이를 안보이게
      $('.box5-bottom').eq(i-1).addClass('display-block');//eq는 0부터라서 i-1 번째부터 보여라
      $('.box5-item2>b').text(i);
      $('.location').removeClass('display-inline-block');
      $('.location').eq(i-1).addClass('display-inline-block');
  }
  displayBox5(index);

  $('.box5-next').click(function(){
    index++;
    if(index > 6){
        index = 1;
    }
    displayBox5(index);
  });

  $('.box5-prev').click(function(){
    index--;
    if(index <= 0 ){
        index = 6;
    }
    displayBox5(index);
  });
/*************인기검색어, 뉴스스탠드 자동 스크롤*********************************************** */  
  /*///이거는 마지막이 되면 1번으로 주르륵 올라가서 보기 안좋다
  $(function() {
    var count = $('#rank_list li').length;//5
    var height = $('.roll_area_item').height();//20

    function step(index) {
        $('#rank_list ol').delay(1500).animate({
            top: -height * index,//위치는 -20 * 1/ -20 * 2
        }, 500, function() {
            step((index + 1) % count);//1+1 / 5 의 나머지는 2 //2를 step에 매개변수로 보내줌
        });
    }
    step(1);
  });*/
  /*************인기검색어1~10, 11~20*********************************************** */ 
  $('.rank-left').click(function(){
    $('.rank-lists').first().css('display','block');
    $('.rank-lists').last().css('display','none');
    $(this).css('background-color','#f9fafc');
    $('.rank-right').css('background-color','#ffffff');
  });

  $('.rank-right').click(function(){
    $('.rank-lists').last().css('display','block');
    $('.rank-lists').first().css('display','none');
    $(this).css('background-color','#f9fafc');
    $('.rank-left').css('background-color','#ffffff');
  });

  $('.rank-lists').first().css('display','block');
  $('.rank-lists').last().css('display','none');

/******** 더보기 메뉴설정 ********************************************************************** */
  var selectedMenuCnt = 0;//메뉴설정에서 선택한 메뉴갯수
  var menuArr = ["dici","newsi","stocki","dealeri","mapi","moviei","musici","booki","webtooni"]
  //미리 이름을 저장해서 배열에 저장

  $('.menu-setting').click(function(){
    var cnt=0;  //메뉴설정 클릭 시 빈 박스(메뉴선택박스)를 만들기 위한 카운터
    $('.item2-1').each(function(){
      /*  each()함수는 셀렉터의 객수만큼 반복함 
      기본 코드에 item2-1과 back-img와 각 아이콘 클래스가 있는데
      back img와 아이콘 클래스를 제거하기 위해 prop함수로 클래스를 덮어쓰기 한다 */
        $(this).prop('class','item2-1');
        cnt++;
        if(cnt > 5){//5개가 넘어가면(0~4)뒤에껀 안보이게
            $(this).addClass('display-none');
        }
    });
  });

  $('.menu-close').click(function(){
    var i=0;
    if(selectedMenuCnt == 0){
        $('.item2-1').each(function(){//item2-1의 갯수만큼 반복
          $(this).prop('class','item2-1 back-img');//item2-1의 class 프로퍼티를 item2-1 back-img로
          $(this).addClass(menuArr[i++]);//뒤에 menuArr에 저장되있는 이름으로 클래스추가
        });
    }
  });

});
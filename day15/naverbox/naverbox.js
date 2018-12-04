$(document).ready(function(){
/********검색 창 자동완성 화살표****************** */
  $('.btn').click(function(){
    $('.auto_box_area').toggleClass('display_block');//자동완성창
    $('.auto_btn_down').toggleClass('auto_btn_up');//자동완성창 열리는 버튼 변경
  });
/********더보기 상단 우측 메뉴*************** */
  $('.more_btn').click(function(){
    menu();
  });
  $('.serv_exit_icon').click(function(){//x버튼 누르면 원상복귀(.more_btn 한 번 더 누른것과 같다)
    menu();
  });
  function menu(){
    $('.more').toggleClass('fold');//fold class로 교체/삭제
    $('.serv_box').toggleClass('display_block');//display block으로 덧 씌움/삭제
    $('.op_sevr').toggleClass('display_block');//display block으로 덧 씌움/삭제
  }
/************실시간 인기 검색어 팝업박스****************************************************************/
  //마우스 엔터/리브로 하는 방법
  // $('.roll-area').mouseenter(function(){
  //   $('.real_up_list').addClass('display_block');
  // });
  // $('.real_up_list').mouseleave(function(){
  //   $('.real_up_list').removeClass('display_block');
  // });
  
  //호버로 하는 방법
  var hoverlist = function(hoverobj, target){
    $(hoverobj).hover(function(){
      $(target).toggleClass('display_block');//addClass, removeClass를 써도 된다
    });//hover는 떠났을 경우를 쓰지 않으면 알아서 hover시의 모든 동작을 한 번 더 한다.
  }
  hoverlist('.roll-area', '.real_up_list');
  
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
  var ticker = function(target, move, speed){
    timer = setTimeout(function(){
      $(target + ' li:first').animate({ marginTop : move }, 400, function(){
          //1. li태그 첫번째 거를 위로 move만큼 땅김
          // targetobj를 뗀후(detach()), parentobj에 자식으로 붙히고(appendTo()), style을 지워준다(marginTop)
          $(this).detach().appendTo(target + '>ul').removeAttr('style');
          /*append = (부모위치).append(붙일거)
            appendTo = (붙일거).(부모위치)
            this = #rank_list li:first
            2. 당겨진 this를 떼서(detach) ul의 안쪽에서 뒤에다가 붙여라(appendTo)
            그리고 위에서 적용된 style{marginTop: '-20px'}을 지워라
         */
      });
      ticker(target, move, speed);//티커 반복실행
    }, speed);//스크롤 속도
  };
  ticker('#rank_list', '-20px', 1000);//각자의 객체를 가진 오버로딩처럼 동작된다
  ticker('.news-cast-txt', '-18px', 1500);
});
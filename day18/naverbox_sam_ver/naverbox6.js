$(document).ready(function(){
  $('.auto-search').click(function(){
      $('#auto-box').toggleClass('display-block');
      $('.auto-down').toggleClass('auto-up');
  });
  //더보기 버튼
  $('.item4').click(function(){
    selectedMenu = menuArr2.slice();//배열에 저장되있는 값을 메뉴에 보여주기 위해서 selectedMenu에 복붙
    displayMenu();
    menu();
    closeSubMenu();
    checkMenu();//menuArr2에 있는 항목만 체크되도록 하는 함수 252
    initCheck();
  });
  //** close button  *******************************/
	$('.menu-close').click(function(){
		selectedMenu=[];
		menu();
		checkMenu();
		closeSubMenu();
		initCheck();
	});
  
  //** 더보기 박스 닫는 함수  *******************************/
  function menu(){
    $('.item4').toggleClass('item4-1');
    $('.sub-menu').toggleClass('display-block');
    $('.sub-menu-background').toggleClass('display-block');
  }

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
  //실시간 인기검색어
  var ticker = function(div,h,time)//('.item5','-20px',400);
  {
    timer = setTimeout(function(){
        $(div+' li:first').animate( {marginTop: h}, time, function()
        {
          $(this).detach().appendTo(div+'>ul').removeAttr('style');
        });
        ticker(div,h,time);//반복실행용 함수호출
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



/******** 더보기 >> 메뉴설정 ************************************ */
//1. 배열 menuArr 에 기본설정 아이템 저장
//2. 배열 selectedMenu에 체크된 아이템을 저장하여 박스에 보여줌
//3. 확인버튼을 누르면 selectedMenu에 저장된 값을 menuArr2에 저장


  //var selectedMenuCnt = 0;//메뉴설정에서 선택한 메뉴갯수
  var menuArr = ["dici","newsi","stocki","dealeri","mapi","moviei","musici","booki","webtooni"]
  //원래 설정을 미리 이름을 저장해서 배열에 저장
  
  $('.menu-setting').click(function(){
    createCheck();
    var cnt=0;
    $('.item2-1').each(function(){
      /*  each()함수는 셀렉터의 객수만큼 반복함 (6번)
      기본 코드에 item2-1과 back-img와 각 아이콘 클래스가 있는데
      back img와 아이콘 클래스를 제거하기 위해 prop함수로 클래스를 덮어쓰기 한다 */
      if(menuArr2.length <= cnt){
        $(this).prop('class','item2-1');
        if(cnt > 4){//0~4까지, 5개만 빈박스 만들고 이후엔 display none
          $(this).addClass('display-none');
        }
      }
      cnt++;
    });
    $('.sub_menu_div input[type=checkbox]').each(function(){//'.menu-setting'클릭하면 체크 버튼 보이게
      $(this).removeClass('display-none');
    });

    //*** .menu-setting버튼 누르면 기존 버튼 감추고 새로운 버튼 생성 */
    $('.all-service').addClass('display-none');//모든 서비스 버튼 안보이게
    $(this).addClass('display-none');//메뉴세팅 버튼 안보이게
    $('.ok').removeClass('display-none');
    $('.cancle').removeClass('display-none');
    $('.init').removeClass('display-none');
  });

//** *더보기 메뉴 아이템 변경***********************************//
  var selectedMenu = [];//체크된 아이템 빈 박스에 보여주는 배열
  var menuArr2=[];/* 실제 네이버에서 뿌려줄 메뉴 (저장되어 이용됨)*/
  
  $('.sub_menu_div input[type="checkbox"]').click(function(){//sub_menu_div의 자식 체크박스들을 클릭하면
    var check = $(this);//.sub_menu_div input[type="checkbox"]
    var isContain = selectedMenu.indexOf(check.val());
    //배열을 클릭된 체크박스의 값으로 조사해서 있으면 위치값 반환 없으면 -1
    
    var maxSize = 5;//배열의 최대 크기한계(체크아이템 갯수)
    
    if(isContain < 0 && selectedMenu.length == maxSize){//-1이고(배열에 저장된 값이 없고) 배열이 꽉 찼다면
      check.prop('checked','');//체크 해제
    }
    else if(isContain < 0 && selectedMenu.length != maxSize){//-1이고(배열에 저장된 값이 없고) 배열에 공간이 있으면
      selectedMenu.push(check.val());//배열에 추가
      check.prop('checked','checked');//체크상태로
    }
    else{ //배열에 값이 있으면(-1 보다 크면) arrindex > 0
      selectedMenu.splice(isContain,1); //배열에서 삭제
    }
    //여기까지가 체크 할지 말지를 결정하는 코드

    //여기부터 빈박스에 배열에 저장된(체크된)애를 넣어주는 코드
    //배열에 있는 것들을 인풋창에 제공
    var cnt = 0;
    $('.item2-1').each(function(){//item2-1의 갯수만큼 반복
      if(cnt < selectedMenu.length){
        $(this).prop('class','item2-1 back-img');//item2-1의 class 프로퍼티를 item2-1 back-img로 (dici같은걸 지웠음)
        $(this).addClass(selectedMenu[cnt++]);//뒤에 menuArr에 저장되있는 이름으로 클래스추가
      }
      else{
        $(this).prop('class','item2-1');
        if(cnt > 4) $(this).addClass('display-none');
        cnt++;
      }
    });
  });
  
  //** ok button  *******************************/
  $('.ok').click(function(){
    menuArr2 = selectedMenu.slice();//selectedMenu를 통째로(메뉴에 저장되있는 애들을 진짜 배열저장용으로 복사)
    menu();
    closeSubMenu();
  });
  //init button(초기화)***********************************/
  $('.init').click(function(){
    menuArr2=[];
    selectedMenu=[];
    alert('초기 설정으로 돌아갑니다.');
    menu();
    closeSubMenu();
    checkMenu();
    initCheck();
  });
  
  //cancle button  
  $('.cancle').click(function(){
    //(초기화)149번째 줄 반대로
    initCheck();
    checkMenu();
    selectedMenu = menuArr2.slice();//menuArr2에 있는 값만 보여주기 위해 selectedMenu에 복붙
    displayReset();
    //원상복귀(.menu-close 코드)
    var i=0;
    if(menuArr2.length == 0){
      $('.item2-1').each(function(){//item2-1의 갯수만큼 반복
        $(this).prop('class','item2-1 back-img');//item2-1의 class 프로퍼티를 item2-1 back-img로
        $(this).addClass(menuArr[i++]);//뒤에 menuArr에 저장되있는 이름으로 클래스추가
      });
    }
    else{
      $('.item2-1').each(function(){
        if(menuArr2.length > i){//menuArr2 표시
          $(this).prop('class','item2-1 back-img');
          $(this).addClass(menuArr2[i++]);
        }
        else{
          $(this).prop('class','item2-1 display-none');
        }
      });
    }
    $('.sub_menu_div input[type=checkbox]').each(function(){//'.menu-setting'클릭하면 체크 버튼 보이게
      $(this).addClass('display-none');//체크박스에 display none 속성 클래스 추가
    });
  });

  //menuArr2에 있는 항목만 체크되도록 하는 함수
  function checkMenu(){
    $('.sub_menu_div input[type="checkbox"]').each(function(){
      $(this).prop('checked','');//일단 한 번 체크 모두 해체
      for(var i=0; i<menuArr2.length; i++){
        if($(this).val()==menuArr2[i]){//체크된거랑 menuArr2랑 같으면(menuArr2에 저장된 값만 체크되게)
          $(this).prop('checked','checked');//체크
        }
      }
    });
  }

  /* x, 취소, 초기화, 확인버튼 클릭 시 호출되는 함수(원상복귀) */
  function closeSubMenu(){
    displayMenu();
    //더보기 버튼 클릭 시 체크 버튼 없앰
    $('.sub_menu_div input[type=checkbox]').each(function(){
      $(this).addClass('display-none');
    });
    //(초기화)149번째 줄 반대로
    displayReset();
  }

  //label의 for 프로퍼티를 삭제 (메뉴설정버튼 안눌렀을 때 글씨 눌러도 아무 동작이 없도록 label의 for속성의 값을 삭제)
  function initCheck(){
    $('.sub_menu_div label').each(function(){
      $(this).prop('for','');
    });
  }

  //label의 for 프로퍼티를 추가 (메뉴설정버튼 눌렀을 때)
  function createCheck(){
    var i=0;
    var checkBox = $('.sub_menu_div input[type=checkbox]');
    $('.sub_menu_div label').each(function(){//체크박스의 개숫만큼 반복
      $(this).prop('for',checkBox.eq(i++).prop('id'));//i번째의 체크박스의 id를 for 프로퍼티에 추가
    });
  }

  //메뉴설정 실제로 보여주는 함수
  function displayMenu(){
    var i=0;
    if(menuArr2.length == 0){//선택된 거 없으면 기본 설정된 메뉴 출력
      $('.item2-1').each(function(){//item2-1의 갯수만큼(9개) 반복
        $(this).prop('class','item2-1 back-img');//item2-1의 class 프로퍼티를 item2-1 back-img로
        $(this).addClass(menuArr[i++]);//뒤에 menuArr에 저장되있는 이름으로 클래스추가(disc같은거)
      });
    }
    else{//선택된게 있으면 선택된 메뉴 출력
      $('.item2-1').each(function(){//'.item2-1' = 5칸 의 갯수만큼 반복
        if(menuArr2.length > i){//밑에서 i를 ++하고 menuArr2의 갯수가 i보다 크면 if실행 같거나 작아지면 else실행
          $(this).prop('class','item2-1 back-img');
          $(this).addClass(menuArr2[i++]);
        }
        else{
          $(this).prop('class','item2-1 display-none');
        }
      });
    }
  }
  //디스플레이 초기화 함수
  function displayReset(){
    $('.all-service').removeClass('display-none');
    $('.menu-setting').removeClass('display-none');
    $('.ok').addClass('display-none');
    $('.cancle').addClass('display-none');
    $('.init').addClass('display-none');
  }
});


$(document).ready(function(){
  //방법1 = css를 직접 건드리자!
  $('#btn1').click(function(){
    $('p').css('display','none');
  });
  //방법2 addClass를 이용
  $('#btn2').click(function(){
    $('p').addClass('display_none');
  });
  //방법3 hide를 이용
  $('#btn3').click(function(){
    $('p').hide();
  });

  var cnt=0;
  $('#btn4').click(function(){
    /*//내가한거
    if(cnt === 0){
      $('p').css('display','none');
      cnt = 1;
    }
    else{
      $('p').css('display','block');
      cnt = 0;
    }*/
    //쌤이한거
    var display = $('p').css('display');//속성이 한개면 앞의 속성 값을 가져오라는 의미가 된다
    if(display == 'block')  $('p').css('display','none');
    else  $('p').css('display','block');
  });
  //토글
  $('#btn5').click(function(){
    $("p").toggle();//숨겼다가 보여줌//말 그대로 숨겼다가 보여주는 것만 됨
  });
  //그냥 토글클래스로 바로
  $('#btn6').click(function(){
    $("#txt").toggleClass('display_none');//클래스를 추가/제거// 그 클래스의 이름으로 css를 수정하면 여러 기능을 사용할 수 있음
  });
  //평션으로 처리
  $('#btn7').click(function(){
    var txt = $('#txt');
    actionDisplay(txt);
  });
  function actionDisplay(txt){
    $(txt).toggleClass('display_none');
  }
  //add, remove이용. 존나 귀찮고 불편해서 이런쪽에서는 안씀
  $('#btn8').click(function(){
    var className = $('p').attr('class');
    if(className == undefined || className.indexOf('display_none') < 0)
    //인덱스오브는 값이 있다면 그 자리의 위치 숫자를 반환, 없으면 -1
      $(txt).addClass('display_none');
    else $(txt).removeClass('display_none');
  });

  
});
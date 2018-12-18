$(document).ready(function(){
  // var cnt=0;
  $('#check1').click(function(){
    var inputCheck = $('input[type="checkbox"]');
    /*
    prop('속성','값') = 설정
    prop('속성')      = 값을 가져옴
    css('속성','값')  = 해당 객체(셀렉터)의 속성을 값으로 설정
    css('속성')       = 해당 객체(셀렉터)의 속성을 값을 가져옴
    text('값')        = 해당 객체의 텍스트 값을 설정
    text()            = 해당 객체의 텍스트값을 가져옴
    val('값')         = 해당 객체의 값을 설정
    val()             = 해당 객체의 값을 가져옴
    */
    //방법1
    // if($(this).prop('checked')){//체크된 것이 true
    //   inputCheck.prop('checked','checked');
    // }
    // else {
    //   inputCheck.prop('checked','');
    //   console.log(1);
    // }
    
    // 방법2
    // if($(this).is('checked')){//체크된 것이 true
    //   inputCheck.prop('checked','checked');
    // }
    // else {
    //   inputCheck.prop('checked','');
    //   console.log(1);
    // }

    //방법3
    //inputCheck.prop('checked',$(this).prop('checked'));//this(선택 체크박스)의 체크유무에 따라 값 설정
    
    //방법4
    var checked = $(this).prop('checked');
    inputCheck.each(function(){
      $(this).prop('checked', checked);
    });

  });
});
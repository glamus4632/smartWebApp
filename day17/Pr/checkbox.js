$(document).ready(function(){
  // $('.ch').click(function(){
  //   var result = $(this).val();
  //   if($(this).is(':checked')){
  //     $('.input').val(result);
  //     // console.log(result);
  //   }
  // });

  //1. 인풋창에 입력된 문자열을 받아와서 빈 문자열이 아니면 배열에 저장
    //2. 클릭한 체크박스가 누군지 알아야 함(check.val()을 가져옴)
    //3. 배열에 해당 val()가 있는지 확인
    //4. 체크박스의 value가 배열에 없고 배열의 길이가 2이면
    //    해당 체크박스의 체크를 비활성화, 배열에 추가하지 않음(인풋창이 꽉 찼는데 다른 체크박스를 눌렀을 때)
    //5. 길이가 2가 아니면 배열에 push, 해당 체크박스를 체크를 활성화
    //6. 체크박스의 value가 배열에 있으면 배열에서 해당 문자열 제거
    //7. 배열에 있는 문자열을 인풋창에 하나씩 제공
  $('input[type="checkbox"]').click(function(){
    var arr = [];
    var check = $(this);//this = 'input[type="checkbox"]'
    
    $('input[type=text]').each(function(){//인풋창(input[type=text])의 갯수대로 반복실행
      var text = $(this).val();//this = 'input[type=text]'
      $(this).val('');//클릭을 하는 순간 일단 인풋 창 두개 다 비워둔 후 밑의 for문에서
      //배열의 크기만큼 다시 값을 뿌려주니까 체크를 해제하면 한 개만 지워진 것 처럼 보인다.
      if(text != ''){//인풋창에 값이 있으면 배열에 추가
        arr.push(text);
      }
    });
    var arrindex = arr.indexOf(check.val());
    //배열을 클릭된 체크박스의 값으로 조사해서 있으면 위치값 반환 없으면 -1
    
    if(arrindex < 0 && arr.length == 2){//-1이고(배열에 저장된 값이 없고) 배열이 꽉 찼다면
      check.prop('checked','');//체크 해제
    }
    else if(arrindex < 0 && arr.length != 2){//-1이고(배열에 저장된 값이 없고) 배열에 공간이 있으면
      arr.push(check.val());//배열에 추가
      check.prop('checked','checked');//체크상태로
    }
    else{                               //배열에 값이 있으면(-1 보다 크면) arrindex > 0
      arr.splice(arrindex,1);           //배열에서 삭제
    }
    //배열에 있는 것들을 인풋창에 제공
    for(var i=0; i<arr.length; i++){//배열의 길이만큼 ++
      $('input[type=text]').eq(i).val(arr[i]);//배열의 크기만큼 input 갯수를 맞추고
                                              //input창에 값을 뿌려준다.
    }
  });
  //선택되지 않은 체크박스 해제
  //$('input[type="checkbox"]').not(this).prop('checked','');



});
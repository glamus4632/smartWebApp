$(document).ready(function(){
    var inputText = $('.input');
    var str = '<input type="text" class="fluitData">'
    var win;//자식창을 제어하기위한 변수
    //조회 버튼 클릭
    $('.searchBtn').click(function(){
        //var check = ',';
    
        win = window.open('ex1.html','ex1','width=400, height=700');//win에 자식창 생성정보 입력
        inputText.val("");

    });
    $('.input').change(function(){
        alert('change!!');
        setTimeout(function(){win.close();},1000);
    });
    //추가 버튼 클릭
    $('#addBtn').click(function(){
        $('.inputBox').append(str);
        $('.fluitData').last().focus();
    });
    //확인 버튼 클릭
    $('#okBtn').click(function(){
        // 배열을 이용
        var strAry = [];//입력된 데이터를 저장할 배열
        var tmpData = $(this).val();
        $('.fluitData').each(function(){
                var tmpData = $(this).val();
                if(tmpData != ""){//인풋에 데이터가 비었는지 판단
                    strAry.push(tmpData);
                }
        });
        $(opener.document).find('.input').val(strAry.join('>'));
        //배열이라서 알아서 콤마(구분자) 들어감
        // join(): 배열의 각 원소들 사이의 구분자를 입력하고 싶을 때 사용한다.(안쓰면 기본 콤마(,))
        // join()을 사용하면 문자열로 된다.
        
        //setTimeout(function(){window.close();},1000);//2초 지연 함수
        opener.$('.input').trigger('change');
        
        //문자열을 이용
        // var data = new String();
        // $('.fluitData').each(function(){
        //     
        //     if(tmpData != ""){//인풋에 데이터가 비었는지 판단
        //         data += "," + tmpData;//+ 를 하면 덮어쓰니까 이어붙이기 위해 +=
        //     }
        // });
        // data = data.substring(1);//스트링의 시작점부터 끝까지를 리턴, data에 다시 저장(맨 앞에 붙는 , 를 빼기 위함)
        // $(opener.document).find('.input').val(data);
        // //opener.document.getElementById('input').value = data;
        // window.close();
    });

});
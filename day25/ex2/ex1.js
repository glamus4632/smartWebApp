$(document).ready(function(){
    var inputText = $('.input').val();
    var str = '<input type="text" class="fluitData">'
    var strAry = [];
    //조회 버튼 클릭
    $('.checkBtn').click(function(){
        //var check = ',';
        window.open('ex1.html','ex1','width=400, height=700');

    });

    //추가 버튼 클릭
    $('#addBtn').click(function(){
        $('.inputBox').append(str);
        $('.fluitData').last().focus();
    });
    //확인 버튼 클릭
    $('#okBtn').click(function(){
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
        setTimeout(function(){window.close();},2000);
    });
    
});
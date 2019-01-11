$(document).ready(function(){

    
    
    
    var inputText = $('.input').val();
    var str = '<input type="text" class="input">';
    var str2 = '<input type="text" class="input" readonly>'
    $('#addBtn').click(function(){
        // $('.input').last().after(str);
        $('.inputBox').append(str);

        //버튼을 기준으로
        // $(this).parent().find('.inputBox').append(str);
        //추가 버튼의 부모(body)에서 .inputBox를 찾아 그 안의 아래에 str추가
        
        $('.input').last().focus();
        //focus()안에 데이터를 넣으면 포커스가 되었을 때 실행하라
        //내용이 없으면 포커스 하라는 내용

    });
    
    
});
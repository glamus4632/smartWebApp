$(document).ready(function(){
    var cnt = 0;
    var temp = ""; //먼저 입력된 값을 저장하기 위한 변수
    var calc = "+"; //연산자를 저장하기 위한 변수
    var input = $('input');
    /** 버튼 클릭 시 이벤트 */
    $('.num').click(function(){
        var value = $(this).text(); //눌려진 버튼의 텍스트
        var change = parseInt(value); //연산하기 위한 형 변환
        
        console.log(temp);
        console.log(change);
        
        if(value == '.'){//점이 눌렸을 때
            if(cnt != 0) return; //처음 눌린게 아니면 return
            cnt = 1; // 처음 눌리면 cnt 증가시킴
        }
        else{
            if(input.val() == '0') input.val(value);
            else{
                input.val(input.val()+value);//인풋창의 값 = 인풋창에 있는 값 + 새로 눌린 값
            }
            
        }
        

    });
    $('.calc').click(function(){
        temp = input.val();
        // if(temp != ""){
        //     if(calc == "+"){
        //         $('input').val(temp+change);
        //         temp = "";
        //     }
        //     else if(calc == "-"){
        //         $('input').val(temp-change);
        //         temp = "";
        //     }
        //     else if(calc == "X"){
        //         $('input').val(temp*change);
        //         temp = "";
        //     }
        //     else if(calc == "="){
        //         $('input').val(value);
        //     }
        // }
    });
});
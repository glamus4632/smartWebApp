$(document).ready(function(){
    var cnt = 0;
    var op = "+"; //눌린 연산자를 저장하는 변수
    /**
     * 일단 +를 한 이유는 32번째 줄에서 최초 1번 연산을 하고 =를 안눌렀을 때
     * num1 = 0(9번줄) + temp(인풋창에 입력된 숫자) 를 구현하기 위해서이다.
     * 1 + 1을 눌렀을 때 1, +, 1 이 나와야 되기 때문에
     */
    var isPushOp = false; // 연산자가 눌렸는지 판단하는 변수
    var num1 = 0;   //인풋창에 나온 숫자를 저장하는 변수
    var input = $('input');
    /** 버튼 클릭 시 이벤트 */
    $('.num').click(function(){
        
        var value = $(this).text(); //눌려진 버튼의 텍스트
        
        if(isPushOp){//연산자가 눌렸으면(true면)
            input.val("0");//연산자 이후 숫자가 눌려질 때 (8번째 줄) 일단 0으로 초기화
            //23번째줄로 인해 0이 눌려진 숫자로 바뀜
            isPushOp = false;
        }
    
        if(value == '.'){//점이 눌렸을 때
            if(cnt != 0) return; //처음 눌린게 아니면 return
            cnt = 1; // 처음 눌리면 cnt 증가시킴
        }
        
        if(input.val() == "0"){//인풋창이 0이면 눌려진 텍스트로 교체
            input.val(value);
        }
        else input.val(input.val() + value);//아니면 이어서 출력
    });

    $('.clac').click(function(){
        
        var temp = parseFloat(input.val());
        if(!isPushOp || op == "="){ //연산자가 안눌렸거나 =가 눌렸을 때
            switch(op){
                case '+': num1 = num1 + temp;
                    break;
                case '-': num1 = num1 - temp;
                    break;
                case 'X': num1 = num1 * temp;
                    break;
                case '/': num1 = num1 / temp;
                    break;
                case '=': num1 = temp; console.log(2);
                    break;
            }
            op = $(this).text();
            input.val(num1);
        }
        
        isPushOp = true;
        console.log(num1);
    });

});
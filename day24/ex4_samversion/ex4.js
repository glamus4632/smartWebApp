$(document).ready(function(){
    var cnt = 0; //.을 찍기위한 카운트
    var op = "+"; //눌린 연산자를 저장하는 변수
    /**
     * 일단 +를 한 이유는 32번째 줄에서 최초 1번 연산을 하고 =를 안눌렀을 때
     * num1 = 0(9번줄) + temp(인풋창에 입력된 숫자) 를 구현하기 위해서이다.
     * 1 + 1을 눌렀을 때 1, +, 1 이 나와야 되기 때문에
     */
    var isPushOp = false; // 연산자가 눌렸는지 판단하는 변수
    var num1 = 0;   //인풋창에 나온 숫자를 저장하는 변수
    var input = $('#input');//누른 숫자들이 출력되는 인풋창
    
    var print = $('#print-input');//눌려진 숫자와 계산식을 출력하는 인풋창
    var str = "";    //눌린 숫자들을 최종 저장
    var strTmp ="";  //눌린 숫자들을 임시저장


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
        

        str = strTmp;//이어서 출력되게 하는 코드

    });

    $('.clac').click(function(){
        cnt = 0;//연산자를 누르면 cnt를 0으로 만들어 다시 눌릴 수 있게 함
        var temp = parseFloat(input.val());//현재 인풋창에 저장된 숫자열

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
                case '=': num1 = temp;
                    break;
            }
            input.val(num1);
            str = str + temp;//저장되는숫자 = 현재 프린트창(없거나, 연산식) + 인풋창(새로누른 숫자)
            //str을 이전까지 있던 숫자열(1+) + 현재 눌려진 숫자(input.val())
            //로 하고 69번째 줄로 간다
        }
        op = $(this).text();//눌린 연산자의 텍스트
        
        strTmp = str+ op;//임시저장 = 저장된숫자 + 연산식
        //strTmp = str(1+1) + op(연산자)
        if(op == "="){
            str = "";
            strTmp="";
        }
        print.val(strTmp);//임시저장 출력됨과 동시에 str에 저장
        
        isPushOp = true;
        //console.log(num1);
    });

});
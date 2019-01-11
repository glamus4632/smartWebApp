$(document).ready(function(){

    var win;//자식창을 제어하기위한 변수
    var win2;
    //조회 버튼 클릭
    $('#searchBtn').click(function(){
        //var check = ',';
        win = window.open('ex3.html','ex3','width=400, height=700');//win에 자식창 생성정보 입력
    });

    $('.input').change(function(){
        alert('change!!');
        setTimeout(function(){win.close();},1000);
    });

    //입력버튼 클릭
    $('#inBtn').click(function(){
        win2 = window.open('ex3.html','ex3','width=400, height=700');
    });
});
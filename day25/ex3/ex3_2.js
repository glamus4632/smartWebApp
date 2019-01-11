$(document).ready(function(){
    var oriData = $(opener.document).find('#inData').val();
    var arrData = oriData.split(',');//,를 기준으로 문자열을 잘라 배열로 생성(리턴)해 준다
    var str = "";
    console.log(oriData);
    for(var i=0; i<arrData.length; i++){
        str += '<input type="text" value="'+arrData[i]+'" readonly><br>';
    }
    $('.inputBox').html(str);

    $('#okBtn').click(function(){
        window.close();
    });
});
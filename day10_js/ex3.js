function sum1(){
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  //getElementByClassName()[0].value는 무조건 배열식으로 사용해야 한다.
  var sum = num1+num2;
  alert(num1+num2);
}
function sum2(){
  var sum = 0;
  var inputs = document.getElementsByTagName('input');//getElementByClassName()과 동일
  for(var i=0; i<inputs.length; i++){
    var strnum = inputs[i].value;
    var number = parseInt(strnum);
    sum += number;
  }
  alert(sum);
}
function sum3(){
  var sum = 0;
  var inputs = document.querySelectorAll('input');
  for(var i=0; i<inputs.length; i++){
    var strnum = inputs[i].value;
    var number = parseInt(strnum);
    sum += number;
  }
  alert(sum);
}
function sum4(){
  var num1 = parseInt(document.querySelector('input#num1').value);
  var num2 = parseInt(document.querySelector('input#num2').value);
  
  var sum = num1+num2;
  alert(sum);
}
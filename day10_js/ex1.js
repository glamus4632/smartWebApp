//printMulti();
/*function printMulti(){
  for(var i=2; i <10 ; i++){
    multi(i);
  }
}

//a단을 실행하는 함수
function multi(a){// i 가 a로 값을 넘겨준다.
  console.log(a+"단");
  for(var i=1; i<10; i++){
    printMul(a, i);
  }
}

//a*i를 출력하는 함수
function printMul(a, i){
  var res = a*i;
  var rst = "" + a + "x" + i + "=" + res;
  console.log(rst);
}*/
//함수 표현식
// var 함수명 = function(){}
//이런 방법도 있지만 함수의 선언과 호출순서에 영향이 가기 때문에 잘 안쓴다.

/**
 * 동기화 방식 = 하나의 함수가 실행되면 이 함수가 끝날 때 까지 아무것도 하지 못한다.
 * 비동기화 방식 = 하나의 함수가 실행되는 중에도 다른 함수나 어떤 동작이 실행된다. (다중 쓰레드)
 * 
 * 콜백함수 함수명(다른 함수명),
 * 콜백이란 이벤트가 발생하면 자신을 호출하도록 알려주는 것.
 * 콜백함수를 사용하는 이유는 비동기 처리가 가능하기 때문이다.
 */

 /**
 * setTimeout 콜백함수는 지정된 시간이 지나면 함수를 호출하는 함수
 * 만약에 setTimeout이라는 함수가 동기화 함수이면 5초뒤에 Hello world : 1이
 * 출력되고 후에 Hello callback function이 출력된다.
 * 하지만 비동기화 함수이기 때문에 setTimeout함수를 기다리지 않고 Hello callback function을
 * 출력한 뒤 5초뒤에 Hello world가 출력된다.(동시에 처리중이기 때문에 출력함과 동시에 시간이 가는 것)
 */
var cnt = 1;
function sayHello(){
  console.log("Hello World : "+ cnt);
  cnt++;
}
setTimeout(sayHello, 5000);
console.log("Hello callback function");

var num = 1/0;//infinity 출력됨
console.log(num);
console.log("num은 숫자?: " + !isNaN(num));//true
console.log("num은 무한대: " + !isFinite(num));//true
var str = "123a";
console.log(str);
console.log("str은 숫자?: " + !isNaN(str));//false 출력
console.log("str은 무한대: " + !isFinite(str));//true
var num1 = 1;
console.log(num1);
console.log("num은 숫자?: " + !isNaN(num));//true
console.log("num은 무한대: " + !isFinite(num));//true

//객체 생성
/**
 * var score = {a:'###', b:###};//선언과 동시에 초기화
 * 
 * var score = {}; // scor[c] = ###;//선 선언 후 초기화
 * score.d = ###;
 * 
 * var score2 = new Object();//new 형으로 선언 후 초기화
 */
console.log("객체예제");
var obj1 = {name: '홍길동',};
obj1.address = '청주시';
obj1['age'] = 21;
console.log(obj1);
var obj2 = new Object();
obj2.name = '임꺽정';
obj2.address = '충주시';
obj2['age'] = 30;
console.log(obj2);

//자주쓰는 window객체 open(), blur(), focus()
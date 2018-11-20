//body태그 안의 내용들이 구성된 후 실행될 function(){}안에 있는 코드들이 실행된다.
window.onload = function() {
}

// 구구단 전체를 출력하는 함수
function printMulti(){
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
}
var ary = new Array('apple','banana','kiwy');
var ary2 = new Array(1, 2, 3, 'a', 'A');
//기본형태 배열

console.log("concat 함수 예제");
var result = ary.concat(ary2);
console.log(result);
//ary에 ary2를 붙인다. 새로운 배열을 만들어서 돌려준다.

var array = {name: "홍길동", age: 21, address: "청주시"};
console.log(array['name']);
console.log(array['age']);
//오브젝트형 배열
for(var key in array){
  console.log(key + ": " + array[key]);
  //오브젝트형 array를 반복문으로 출력
}

console.log("push 함수 예제");
console.log(ary.push('11'));//ary의 배열의 길이를 리턴해준다.
console.log("배열의 길이: " + ary.length);
//객체를 통해 호출되면 메소드, 혼자 사용가능하면 함수
//push는 메소드다

console.log("join 함수 예제");
console.log(ary.join(", "));
//배열을 구분자를 이용하여 하나의 문자열로 만들어준다.
//구분자는 ,를 썻지만 /나 다른 알아보기 쉬운 기호로 보면된다.

console.log("splice 함수 예제");
console.log(ary.splice(1));//배열을 해당하는 번지부터 잘라내기를 한다.
//var array111 = ary.splice(1); 를 하면 1번부터3번까지가 저정된다.
console.log(ary);//0번만 남는다. 원본이 수정된다
console.log("slice 함수 예제");
console.log(ary2.slice(1));
console.log(ary2);//원본은 수정이 안된다.

//slice와 splice는 둘 다 잘라내고 남은 부분이 반환되지만 slice는 수정되지 않는다

console.log("reverse 함수 예제");
console.log(ary2.reverse());//배열에 저장된 내용이 반전된다.
console.log("sort 함수 예제");
console.log(ary2.sort());//배열 안의 값을 문자열로 바꿔서 비교하여 정렬한다. 10, 1이라면 1, 10으로 정렬된다 쉽게 생각하면 아스키코드값으로 정렬됨(숫자가 작은 순서로)

console.log("문자열 비교");
console.log("a>b : " + ('a'>'b'));
console.log("a>aa : " + ('a'>'aa'));
console.log("a>A : " + ('a'>'A'));
var id = document.getElementById('id');//Id 가 id인 객체의 객체정보 전체를 불러온다
console.log(id);
console.log(id.value);
console.log(id.classList);

var input = document.getElementsByTagName('input');
/**
 * getElementsByTagName은 결과가 무조건 배열에 저장
 * 검색 결과가 0개 또는 1개이어도 배열에 저장
 * 따라서 해당 객체에 접근하려면 배열 형태로 접근해야 한다.
 */
console.log(input);
console.log("id = "+ input.value);//배열의 속성 value를 찾는데 배열순서가 지정이 안되어 있어서 undefined출력
console.log("id = "+ input[0].value);//모든 input 배열의 0번째 요소의 값 123
console.log("password = "+ input[1].value);//1번째 요소는 값이 없으니 출력 안됨
console.log("input tag의 갯수: "+ input.length);
/*for(var i=0; i<input.length; i++){
  input[i].value = "" + i;
}*/

console.log("쿼리 셀렉터");
//클래스 이름이 input인 첫번째 객체를 가져오기 때문에 document.getElementByClassName('input')[0];
//과 같은 결과이다.
var qs = document.querySelector('.input');
console.log("document.querySelector('.input'); 결과:");
console.log(qs);
//클래스 이름이 input이고 password인 객체를 가져옴
qs = document.querySelector('.input.password');
console.log("document.querySelector('.input.password'); 결과:");
console.log(qs);
/*
  document.getElement(s)By???()과
  document.querySelector()의 차이는
  getElement는 태그와 클래스, id를 섞어서 검색할 수 없는데
  querySelector는 섞어서 검색할 수 있다
*/




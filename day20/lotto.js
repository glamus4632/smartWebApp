//45개의 박스중 아무거나 클릭하면 위의 6개의 인풋창에 출력되도록
$(document).ready(function(){
    //박스 45개 생성
    var str = new String();
    for(var i=1; i<=45; i++){
		str += '<input type="text" class="box" value="'+i+'" readonly>';
		/**
		 * //str에 <input type="text" class="box" value="'+i+'" readonly> 이 문장이 45개가 
		 * 한 문장으로 들어간다
		 */
    }
    //인풋창 추가
    var str2 = new String();
    for(var i=0; i<6; i++){
        str2 += '<input type="text" class="box" readonly>';
	}

	$('#boxes').html(str);//한 문장이된 45개의 인풋(박스)를 #boxes 안에 html로 추가
    $('#input_box').html(str2);
	

	
	var maxcnt = 6;
	$('#boxes>.box').click(function(){
		//.color객체의갯수를 가져와서 selectedCnt에 저장
		var selectedCnt = $('.color').length;
		var value = $(this).value;
		//갯수가 6개 이하이거나 클릭된 객체의 클래스에 color가 있으면
		//if(selectedCnt < maxcnt || $(this).prop('class').indexOf('color') != -1){
			//attr이랑 prop은 똑같은 기능인데 prop이 요즘쓰는 함수다
		if(selectedCnt < maxcnt || $(this).hasClass('color')){
			
			var value = $(this).val();
			//배열을 조사해서 값이 있으면 배열에서 지우고 없으면 추가
			// if(arr.indexOf(value) == -1){//선택되지 않았다면
			// 	arr.push(value);
			// }
			// else{//선택되어 있다면
			// 	arr.splice(arr.indexOf(value),1);
			// }
			
			//선택한 객체의 클래스를 조사해서 color가 생성되었으면 배열에서 지우고 없으면 추가
			if($(this).hasClass('color')){//color클래스가 있으면
				arr.splice(arr.indexOf($(this).val()),1);
			}
			else{
				arr.push($(this).val());
				console.log(1);
			}

			$(this).toggleClass('color');
			matchArray();//인풋창6개 출력하기 위한 함수로 이동
		}
		else{//객수가 6개 이상이면
			alert("선택은 6개까지만 가능합니다.");
		}
	});
	var arr =[];
	//matchArray();
	function matchArray(value){
		//each()로 하는 방법
		var cnt = 0;
		arr.sort(function(a,b){
			return a-b;
		});
		$('#input_box>.box').each(function(){
			if(arr.length > cnt){
				$(this).val(arr[cnt++]);
			}
			else{
				$(this).val('');
			}
		});
		
		//for, eq()로 하는 방법
		// for(cnt=0; cnt<$('#input_box>.box').length; cnt++){
		// 	if(arr.length > cnt)
		// 		$('#input_box>.box').eq(cnt).val(arr[cnt]);
		// 	else
		// 		$('#input_box>.box').eq(cnt).val('');
		// }
	}
	$('.btn').click(function(){
		$('#boxes>.box').removeClass('color');
		arr = [];
		$('#input_box>.box').val('');
	});
	
});
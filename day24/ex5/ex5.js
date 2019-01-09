$(document).ready(function(){
    
    
    
    $('#check').click(function(){
        window.open('child.html','child','width=400, height=500');
    });
    

    $('.okBtn').click(function(){

        var value = $('#country').val();
        $(opener.document).find('#input').val(value);
        
        window.close();
    });
});
var server = "http://localhost:3000"

$('#logInBtn').click(function(){
    $.ajax({
        type: 'POST',
        data: {
            username: $("input[name='username']").val(),
            password: $("input[name='password']").val()
        },
        url: server+"/login"
    }).done(function(data){
            window.location.replace(data);
    });
});
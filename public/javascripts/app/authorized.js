var server = "http://localhost:3000"
var userId = $('#deleteUser').attr('data-user-id');

$('#deleteUser').click(function(){
    $.ajax({
        type: "DELETE",
        url: server+"/users/"+userId
    }).done(function(msg){
        if(msg=="OK") window.location.replace("http://127.0.0.1:3000/");
    });
});

$('#logOut').click(function(){
    window.location.replace(server+'/logout');
});

//TODO-me change file name
//TODO-me redirect options how to
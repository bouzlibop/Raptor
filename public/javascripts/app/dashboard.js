var server = "http://127.0.0.1:3000"
var userId = $('#deleteUser').attr('data-user-id');

setTimeout( function(){$('#left_menu').css('left','-30px');},2000);

$('#deleteUser').click(function(){
    $.ajax({
        type: "DELETE",
        url: server+"/users/"+userId
    }).done(function(data){
        window.location.replace(data);
    });
});

$('#logOut').click(function(){
    $.ajax({
        type: 'GET',
        url: server+"/logout"
    }).done(function(data){
            window.location.replace(data);     //TODO-me custom callback!
    });
});

$('#uploadBtn').click(function(){
    var data = new FormData($("#uploadFile")[0]);
    $.ajax({
        url: server+'/upload',
        type: 'POST',
        data: data,
        cache: false,
        contentType: false,
        processData: false
    }).done(function(data){
        window.location.replace(data);
    });
});

$('#showFileBtn').click(function(){
//    $.ajax({
//        type: 'GET',
//        url: server+"/showAll"
//    }).done(function(data){
//             console.log(unescape(data));
//            data = Base64.decode(data);
//            $("#imageList").html('<img src="data:image/png;base64,'+data+'">');
            $("#imageList").html('<img src="http://127.0.0.1:3000/showAll">');
//    });
});



//TODO-me change file name
//TODO-me redirect options how to
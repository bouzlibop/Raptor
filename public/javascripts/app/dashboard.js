var server = "http://127.0.0.1:3000"
var userId = $('#deleteUser').attr('data-user-id');

$('#panelBtn').click(function(){
    var margin = $('.left_menu').css('margin-left');
    if(margin==="-299px"){
        $('.left_menu').css('margin-left','-1px');
    }
    if(margin=="-1px"){
        $('.left_menu').css('margin-left','-299px');
    }
});

$('.left_menu').hover(
    function(){
        $(this).css('margin-left','-1px');
    },
    function(){
        $(this).css('margin-left','-299px');
    }
);

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
    $.ajax({
        type: 'GET',
        url: server+"/models/"+$('#showFileBtn').attr('data-user-id')
    }).done(function(data){
        console.log(data);
    });
});

//TODO-me change file name
//TODO-me redirect options how to
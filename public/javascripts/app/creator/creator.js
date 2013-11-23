var Creator = function(editor){

    var scope = this;

    $("#signUpBtn").click(function(){
        $('#myModal').foundation('reveal', 'open');
    });
    JSON.
    if($('#model').attr('data-model-id')){
        $.ajax({
            url:'http://127.0.0.1:3000/model/'+$('#model').attr('data-model-id'),
            type: 'GET'
        }).done(function(data){


                var parser = new DOMParser();
                var xml = parser.parseFromString( data, 'text/xml' );

                var loader = new THREE.ColladaLoader();
                loader.parse( xml, function ( collada ) {

                    collada.scene.name = 'Your model';

                    editor.addObject( collada.scene );

                } );
        });
    }

}

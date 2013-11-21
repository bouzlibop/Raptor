var server = "http://127.0.0.1:3000"

$('#logInBtn').click(function(){
    $.ajax({
        type: 'POST',
        data: {
            username: $("input[name='l_username']").val(),
            password: $("input[name='l_password']").val()
        },
        url: server+"/login"
    }).done(function(data){
            window.location.replace(data);     //TODO-me custom callback!
    });
});

$("#signUpBtn").click(function(){
    $('#myModal').foundation('reveal', 'open');
});


$("#registerBtn").click(function(){
    $.ajax({
        type: 'POST',
        data: {
            username: $("input[name='s_username']").val(),
            password: $("input[name='s_password']").val(),
            email: $("input[name='s_email']").val()
        },
        url: server+"/register"
    }).done(function(data){
            window.location.replace(data);
        });
});

$(document).ready(function () {

    var scene = new THREE.Scene();

    var cameraOptions = {
        fov: 45,
        aspect: (window.innerWidth) / (window.innerHeight-45),
        near: 0.1,
        far: 1000
    }
    var camera = new THREE.PerspectiveCamera(cameraOptions.fov, cameraOptions.aspect, cameraOptions.near, cameraOptions.far);
    camera.position.set(-35, 30, 25);
    camera.lookAt(new THREE.Vector3(10, 0, 0));

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 0.5);
    renderer.setSize(window.innerWidth, window.innerHeight-45);

    THREEx.WindowResize(renderer, camera);

    var torusKnotGeometryParameters = {
        radius: 9,
        tube: 2
    }
    var torusKnotGeometry = new THREE.TorusKnotGeometry(torusKnotGeometryParameters.radius, torusKnotGeometryParameters.tube);
    var torusKnotMaterial = new THREE.MeshBasicMaterial({ color: 0xff3333, wireframe: true });
    var cube = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
    cube.position.set(4, 3, 0);
    scene.add(cube);

    $("#container").append(renderer.domElement);

    render();

    function render() {
        cube.rotation.x += -0.005;
        cube.rotation.y += -0.005;
        cube.rotation.z += -0.005;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
});
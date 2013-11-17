$(document).ready(function () {

    var stats = initStats();

    var scene = new THREE.Scene();

    var cameraOptions = {
        fov: 45,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000
    }
    var camera = new THREE.PerspectiveCamera(cameraOptions.fov, cameraOptions.aspect, cameraOptions.near, cameraOptions.far);
    camera.position.set(-35, 30, 25);
    camera.lookAt(new THREE.Vector3(10, 0, 0));

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled;

    var planeGeometryParameters = {
        width: 60,
        height: 20,
        widthSegments: 1,
        heightSegments: 1
    }
    var planeGeometry = new THREE.PlaneGeometry(planeGeometryParameters.width, planeGeometryParameters.height, planeGeometryParameters.widthSegments, planeGeometryParameters.heightSegments);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0);
    plane.receiveShadow = true;
    scene.add(plane);

    var cubeGeometryParameters = {
        width: 4,
        height: 4,
        depth: 4
    }
    var cubeGeometry = new THREE.CubeGeometry(cubeGeometryParameters.width, cubeGeometryParameters.height, cubeGeometryParameters.depth);
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff3333 });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(4, 3, 0);
    cube.castShadow = true;
    scene.add(cube);

    var ambientLight = new THREE.AmbientLight("#1C1C1C");

    var spotLight = new THREE.SpotLight("#CCFFCC");
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    spotLight.shadowCameraNear = 5;
    spotLight.shadowCameraFar = 30;
    spotLight.shadowCameraFov = 45;
    spotLight.target = plane;
    scene.add(spotLight);

    $("#workspace").append(renderer.domElement);

    var controller = {
        upload : function(){
            alert('dupa');
        }
    }
    var gui = new dat.GUI();
    gui.add(controller, 'upload');


    render();

    function render() {
        stats.update();
        cube.rotation.x += -0.05;
        cube.rotation.y += -0.05;
        cube.rotation.z += -0.05;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function initStats() {
        var stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        $("#stats").append(stats.domElement);
        return stats;
    }

});
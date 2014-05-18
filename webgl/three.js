var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry(2,2,2);
var material = new THREE.MeshLambertMaterial( { color: 0x001133, opacity: 0.9, transparent: true, side: THREE.DoubleSide });
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//var ambientLight = new THREE.AmbientLight(0x444444);
//scene.add(ambientLight);

// directional lighting
var directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, -5).normalize();
scene.add(directionalLight);

// directional lighting
var directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(0, 0, 3).normalize();
scene.add(directionalLight);

camera.position.z = 5;

function render() {

  requestAnimationFrame(render);

  // Animate
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render
  renderer.render(scene, camera);

} render();

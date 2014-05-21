var scrollOffset;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 7.5, window.innerWidth / (window.innerWidth/2), 0.1, 1000 );

var renderer = new THREE.CanvasRenderer();
renderer.setSize( window.innerWidth, window.innerWidth/2 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshLambertMaterial( { color: 0xffffff });
var cube = new THREE.Mesh( geometry, material );
cube.rotation.x = 0.33;
cube.rotation.y = -0.5;
scene.add( cube );

var ambientLight = new THREE.AmbientLight(0x001122);
scene.add(ambientLight);

var pointLight = new THREE.PointLight( 0xeeffaa, 1, 1 );
pointLight.position.set( 1,1,3.33 );
scene.add( pointLight );

camera.position.y = 0.1875;
camera.position.z = 5;

function render() {

  requestAnimationFrame(render);

  scrollOffset = window.scrollY / ( window.innerWidth / 3 );
  pointLight.intensity = pointLight.position.y = pointLight.position.x = ( 1 - scrollOffset );
  cube.rotation.x = 0.33 - ( scrollOffset / 12 );
  cube.rotation.y = -0.5 + ( scrollOffset / 12 );
  renderer.domElement.style.webkitTransform = 'translateY(-' + ( window.scrollY / 3 ) + 'px)';

  // Render
  renderer.render(scene, camera);

} render();

// Need to debounce scroll and add touch scroll update

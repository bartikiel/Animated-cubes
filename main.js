//import * as THREE from "three";
//import * as dat from "dat.gui";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(24, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement);
const colorYellow = new THREE.Color("hsl(40, 100%, 60%)");
const colorPink = new THREE.Color('hsl(306,100%,60%)');

const geometry = new THREE.BoxGeometry({
    width: 20,
    height: 10,
    depth: 50,
});
const material = new THREE.MeshPhongMaterial({
color: colorYellow,
shininess: 80,
});
const cube = new THREE.Mesh(geometry, material);

const light = new THREE.PointLight(colorPink, 2);
const light2= new THREE.PointLight(colorYellow, .5);
light2.position.set(10, 20, 40);
light.position.set(20,-20,-40);

scene.add(light);
scene.add(light2);
scene.add(cube);
camera.position.z = 35;
cube.rotatnion.x= 20;
cube.rotatnion.z= -20;





renderer.render(scene, camera);

/*
function main (){


//Creating scene
const scene = new.THREE.Scene();


//Creating renderer and asking three.js to draw into canvas
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);

//Creating perspective camera which determinates what we see
const fov = 75;
const aspect = 2; //default for canvas
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect,near, far);
camera.position.z = 2;



//Creating box
const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

//Creating material
const material = new THREE.MeshBasicMaterial({color:0x44aa88});

//Creating Mesh and adding to scene
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//Launching renderer
renderer.render(scene, camera);

}

main();

*/
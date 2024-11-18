import { Lighting } from "./scripts/Lighting.js";
import { SpotLight } from "./scripts/SpotLight.js";
import { PointLight } from "./scripts/PointLight.js";
import { Ground } from "./scripts/Ground.js";
import { WaterScene } from "./scripts/Water.js";
import { ModelLoader } from "./scripts/ModelLoader.js";
import { BubbleParticles } from "./scripts/BubbleParticles.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.x = 10;
camera.position.y = 4;
camera.position.z = 8;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x0d1b2a);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, -2, 0);

new Lighting({ scene });
new SpotLight({ scene });
new PointLight({ scene });
new Ground({ scene });

const waterScene = new WaterScene({ scene });
const bubbleParticles = new BubbleParticles({ scene });

const ship = new ModelLoader("./models/ship/scene.gltf");
ship.createModel({ scene });
ship.setScale(0.3);
ship.setPosition({ y: -0.5, x: 2, z: -3.5 });
ship.setRotation({ y: 5 }); // de 0 a 6.3

const kraken = new ModelLoader("./models/kraken/scene.gltf");
kraken.createModel({ scene });
kraken.setScale(0.5);
kraken.setPosition({ y: -4, x: -1.8, z: 2.2 });
kraken.setRotation({ y: 2.4 });

const steve = new ModelLoader("./models/steve/scene.gltf");
steve.createModel({ scene });
steve.setPosition({ y: -1.5 });
steve.setRotation({ y: 2 });

const chest = new ModelLoader("./models/chest/scene.gltf");
chest.createModel({ scene });
chest.setPosition({ y: -4, x: -3, z: 3 });
chest.setRotation({ y: 2, z: 0.4, x: 0.2 });

const flashlight = new ModelLoader("./models/flashlight/scene.gltf");
flashlight.createModel({ scene });
flashlight.setPosition({ y: -1.5, x: 1, z: -1 });
flashlight.setRotation({ y: 5.6, x: 6 });

function animate() {
  requestAnimationFrame(animate);
  controls.update();

  if (waterScene) waterScene.animate();
  if (ship) ship.animate();
  if (kraken) kraken.animate();
  if (bubbleParticles) bubbleParticles.animate();

  renderer.render(scene, camera);
}
animate();

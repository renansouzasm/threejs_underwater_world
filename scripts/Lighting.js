export class Lighting {
  constructor({ scene }) {
    this.scene = scene;
    this.createLights();
  }

  createLights() {
    this.directLight = new THREE.DirectionalLight(0xe1e1e6, 0.6);
    this.directLight.position.set(-10, 5, 10);
    this.directLight.target.position.set(0, 0, 0);

    this.ambientLight = new THREE.AmbientLight(0x003049, 0.1);
    this.scene.add(this.ambientLight, this.directLight);
    this.scene.add(this.directLight.target);
  }
}

export class SpotLight {
  constructor({ scene }) {
    this.scene = scene;
    this.createLights();
  }

  createLights() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0);
    this.scene.add(this.ambientLight);

    this.spotLight = new THREE.SpotLight(0xffffff, 1);
    this.spotLight.position.set(1, -1.5, -1);

    this.spotLight.angle = Math.PI / 6;
    this.spotLight.penumbra = 0.3;
    this.spotLight.distance = 50;
    this.spotLight.decay = 10;

    this.spotLight.target.position.set(-1.8, -1.5, 2.2);
    this.scene.add(this.spotLight);
    this.scene.add(this.spotLight.target);
  }
}

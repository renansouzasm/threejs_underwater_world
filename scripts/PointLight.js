export class PointLight {
  constructor({ scene }) {
    this.scene = scene;
    this.createLight();
  }

  createLight() {
    this.pointLight = new THREE.PointLight(0xffffff, 1, 20, 2);

    this.pointLight.position.set(-0.8, 1, -2.3);
    this.pointLight.distance = 3;
    this.pointLight.decay = 0.5;
    this.pointLight.intensity = 1;

    this.scene.add(this.pointLight);
  }
}

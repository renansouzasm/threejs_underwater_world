export class BubbleParticles {
  constructor({ scene }) {
    this.scene = scene;
    this.qty_particles = 20;
    this.group = new THREE.Group();
    this.spheres = [];
    this.rates = [];

    this.createParticles();
    this.scene.add(this.group);
  }

  createParticles() {
    const geometry = new THREE.SphereGeometry(0.02, 64, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
    });

    for (let i = 0; i < this.qty_particles; i++) {
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        Math.random() - 0,
        Math.random() - 0,
        Math.random() - 0
      );
      this.rates[i] = (Math.random() + 1) * 0.1;

      this.spheres.push(sphere);
      this.group.add(sphere);
      this.group.scale.set(0.5, 0.5, 0.5);
      this.group.position.set(0, -1.4, -0.5);
    }
  }

  animate() {
    if (!this.spheres) return;

    for (let i = 0; i < this.qty_particles; i++) {
      if (this.spheres[i].position.y < 3) {
        this.spheres[i].position.y += this.rates[i];
      } else {
        this.spheres[i].position.y = 0;
        this.rates[i] = (Math.random() + 1) * 0.015;
      }
    }
  }
}

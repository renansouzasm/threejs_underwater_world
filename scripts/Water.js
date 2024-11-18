export class WaterScene {
  constructor({ scene }) {
    this.scene = scene;

    this.waterMesh = null;
    this.controls = null;

    this.createWater();
  }

  createWater() {
    const textureLoader = new THREE.TextureLoader();

    const waterGeometry = new THREE.BoxGeometry(10, 4, 10);

    const flowMap = textureLoader.load(
      "../images/textures/water/Water_Normal.jpg"
    );
    flowMap.wrapS = THREE.RepeatWrapping;
    flowMap.wrapT = THREE.RepeatWrapping;
    flowMap.repeat.set(2, 2);

    const waterMaterial = new THREE.MeshStandardMaterial({
      map: flowMap,
      transparent: true,
      normalMap: flowMap,
      opacity: 0.6,
      metalness: 0.8,
      roughness: 0.1,
      side: THREE.DoubleSide,
    });

    this.waterMesh = new THREE.Mesh(waterGeometry, waterMaterial);
    this.waterMesh.position.set(0, -2, 0);
    this.scene.add(this.waterMesh);
  }

  animate() {
    if (!this.waterMesh) return;

    this.waterMesh.material.map.offset.x += 0.002;
    this.waterMesh.material.map.offset.y += 0.002;
  }
}

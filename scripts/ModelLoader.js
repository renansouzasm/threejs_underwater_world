export class ModelLoader {
  constructor(url) {
    this.url = url;

    this.root = null;

    this.position_x = 0;
    this.position_y = 0;
    this.position_z = 0;

    this.rotation_x = 0;
    this.rotation_y = 0;
    this.rotation_z = 0;

    this.scale = 0.1;

    this.floatAmplitude = 0.1;
    this.floatSpeed = 0.002;
  }

  createModel({ scene }) {
    const gltfLoader = new THREE.GLTFLoader();

    gltfLoader.load(
      this.url,
      (gltf) => {
        this.root = gltf.scene;
        this.root.scale.set(this.scale, this.scale, this.scale);
        scene.add(this.root);

        this.root.position.x = this.position_x;
        this.root.position.y = this.position_y;
        this.root.position.z = this.position_z;

        this.root.rotation.x = this.rotation_x;
        this.root.rotation.y = this.rotation_y;
        this.root.rotation.z = this.rotation_z;
      },
      undefined,
      (error) => {
        console.error("Erro ao carregar o modelo:", error);
      }
    );
  }

  setScale(scale) {
    this.scale = scale;
  }

  setPosition({ x, y, z }) {
    if (x) this.position_x = x;
    if (y) this.position_y = y;
    if (z) this.position_z = z;
  }

  setRotation({ x, y, z }) {
    if (x) this.rotation_x = x;
    if (y) this.rotation_y = y;
    if (z) this.rotation_z = z;
  }

  animate() {
    if (!this.root) return;

    const time = Date.now();
    const floatOffset = Math.sin(time * this.floatSpeed) * this.floatAmplitude;

    this.root.position.y = this.position_y + floatOffset;
  }
}

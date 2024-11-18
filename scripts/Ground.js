export class Ground {
  constructor({ scene }) {
    this.scene = scene;
    this.ground = null;

    this.createGround();
  }

  createGround() {
    const textureLoader = new THREE.TextureLoader();

    const path = "../images/textures/sand/";
    const baseColor = textureLoader.load(
      path + "Sand_sgfodj1a_2K_BaseColor.jpg"
    );
    const normalMap = textureLoader.load(path + "Sand_sgfodj1a_2K_Normal.jpg");
    const roughnessMap = textureLoader.load(
      path + "Sand_sgfodj1a_2K_Roughness.jpg"
    );
    const aoMap = textureLoader.load(path + "Sand_sgfodj1a_2K_AO.jpg");
    const specularMap = textureLoader.load(
      path + "Sand_sgfodj1a_2K_Specular.jpg"
    );
    const displacementMap = textureLoader.load(
      path + "Sand_sgfodj1a_2K_Displacement.jpg"
    );

    const groundMaterial = new THREE.MeshStandardMaterial({
      map: baseColor,
      normalMap: normalMap,
      roughnessMap: roughnessMap,
      displacementMap: displacementMap,
      aoMap: aoMap,
      metalnessMap: specularMap,
      displacementScale: 0.1,
      side: THREE.DoubleSide,
    });

    const groundGeometry = new THREE.PlaneGeometry(10, 10, 256, 256);
    this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.position.y = -4;

    this.scene.add(this.ground);

    const repeatFactor = 5;
    [
      baseColor,
      normalMap,
      roughnessMap,
      displacementMap,
      aoMap,
      specularMap,
    ].forEach((texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(repeatFactor, repeatFactor);
    });
  }
}

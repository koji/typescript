import * as THREE from 'three';

window.addEventListener('DOMContentLoaded', () => {
  const renderer = new THREE.WebGLRenderer();
  const dispWidth = 800;
  const dispHeight = 800;
  renderer.setSize(dispWidth, dispHeight);

  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    dispWidth / dispHeight,
    1,
    10000,
  );
  camera.position.set(0, 0, 1000);

  // box
  const geometry = new THREE.BoxGeometry(250, 250, 250);
  const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
  const box = new THREE.Mesh(geometry, material);

  box.position.z = -5;
  scene.add(box);

  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);

  const tick = (): void => {
    requestAnimationFrame(tick);

    box.rotation.x += 0.05;
    box.rotation.y += 0.05;
    box.rotation.z += 0.05;

    renderer.render(scene, camera);
  };
  tick();
  console.log('called');
});

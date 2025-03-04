import React, { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { MeshMatcapMaterial } from 'three';

const HackerRoom = (props) => {
  const { scene, nodes, materials } = useGLTF('ThreeJS/models/hacker-room.glb');
  
  const monitortxt = useTexture('ThreeJS/textures/desk/monitor.png');
  const screenTxt = useTexture('ThreeJS/textures/desk/screen.png');

  useEffect(() => {
    const meshMonitor = new MeshMatcapMaterial();
    meshMonitor.map = monitortxt;
    const meshScreen = new MeshMatcapMaterial();
    meshScreen.map = screenTxt;

    const screenMesh = scene.children.find(mesh => mesh.name === 'screen_screens_0');
    if (screenMesh) {
      screenMesh.material = meshScreen;
    }

    const tableMeshes = scene.children[2].children;
    const tableMesh1 = tableMeshes.find(mesh => mesh.name === 'table_table_mat_0_2');
    const tableMesh2 = tableMeshes.find(mesh => mesh.name === 'table_table_mat_0_8');
    if (tableMesh1) tableMesh1.material = meshMonitor;
    if (tableMesh2) tableMesh2.material = meshMonitor;

  }, [scene, monitortxt, screenTxt]);

  return (
    <group {...props} dispose={null}>
      <mesh position={[0, 50, 0]} dispose={null}>
        <primitive object={scene} />
      </mesh>
    </group>
  );
};

useGLTF.preload('ThreeJS/models/hacker-room.glb');

export default HackerRoom;

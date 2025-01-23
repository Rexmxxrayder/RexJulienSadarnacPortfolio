import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei';
import { MeshMatcapMaterial } from 'three';

const HackerRoom = (props) => {
  const { scene, nodes, materials } = useGLTF('ThreeJS/models/hacker-room.glb');

  const monitortxt = useTexture('ThreeJS/textures/desk/monitor.png');
  const screenTxt = useTexture('ThreeJS/textures/desk/screen.png');

  console.log(scene);
  // console.log(nodes);
  // console.log(materials);
  const meshMonitor = new MeshMatcapMaterial();
  meshMonitor.map = monitortxt;
  const meshScreen = new MeshMatcapMaterial();
  meshScreen.map = screenTxt;
  scene.children.find(mesh => mesh.name === 'screen_screens_0').material = meshScreen;
  scene.children[2].children.find(mesh => mesh.name === 'table_table_mat_0_2').material = meshMonitor;
  scene.children[2].children.find(mesh => mesh.name === 'table_table_mat_0_8').material = meshMonitor;

  return (
    <group {...props} dispose={null}>
      <mesh position={ [0, -150, 0]} dispose={null}>
        <primitive object={scene} />
      </mesh>
      <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
        <meshMatcapMaterial map={screenTxt} />
      </mesh>
      <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
      <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
      <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
      <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
      <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
      <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
      <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
      <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
      <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
      <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
    </group>
  );
}

useGLTF.preload('ThreeJS/models/hacker-room.glb');

export default HackerRoom

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import * as THREE from 'three';

const Vladimir = (props) => {
    const targetRef = useRef();
    const { scene, animations } = useGLTF('ThreeJS/models/cosmic_devourer_vladimir.glb');
    
    useGSAP(() => {
        gsap.to(targetRef.current.rotation, {
            y: targetRef.current.rotation.y + Math.PI * 2,
            duration: 20,
            repeat: -1,
            ease: "none",
        });
    });

    const mixer = new THREE.AnimationMixer(scene);
    const clips = animations;

    const clip = THREE.AnimationClip.findByName(clips, 'Idle1');
    const action = mixer.clipAction(clip);
    action.play();

    useFrame((state, delta) => {
        mixer?.update(delta);
    });

    return (
        <group {...props} ref={targetRef} dispose={null}>
            <primitive object={scene} />
        </group>
    );
};

useGLTF.preload('ThreeJS/models/cosmic_devourer_vladimir.glb');

export default Vladimir;
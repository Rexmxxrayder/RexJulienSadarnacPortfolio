import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../Components/HackerRoom";
import Target from "../Components/Target.jsx";
import ReactLogo from "../Components/ReactLogo.jsx";
import Cube from "../Components/Cube.jsx";
import Rings from "../Components/Rings.jsx";
import HeroCamera from "../Components/HeroCamera.jsx";
import CanvasLoader from "../Components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../../constants/index.js";
const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <>
            <section className="min-h-screen w-full flex flex-col relative">
                <div className="w-full mx-auto flex flex-col sm:mt-18 mt-10 c-space gap-3">
                    <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Call me Rex<span className="waving-hand">👋</span></p>
                    <p className="hero_tag text-gray_gradient">ThreeJS</p>
                    <div className="w-full h-[1000px] inset-0">
                        <Canvas className="w-full h-full">
                            <Suspense fallback={<CanvasLoader />}>
                                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                                <HeroCamera isMobile={isMobile}>
                                    <HackerRoom
                                        position={sizes.deskPosition}
                                        rotation={[0, Math.PI, 0]}
                                        scale={sizes.deskScale}
                                    />
                                </HeroCamera>
                                <group>
                                    <Target position={sizes.targetPosition} />
                                    <ReactLogo position={sizes.reactLogoPosition} />
                                    <Cube position={sizes.cubePosition} />
                                    <Rings position={sizes.ringPosition} />
                                </group>
                                <ambientLight intensity={1}></ambientLight>
                                <directionalLight position={[10, 10, 10]} intensity={1} />
                            </Suspense>
                        </Canvas >
                    </div>
                    <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                        <a href="#contact" className="w-fit">
                        
                        </a>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero
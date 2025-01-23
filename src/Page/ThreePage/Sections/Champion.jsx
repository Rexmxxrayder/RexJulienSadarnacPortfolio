import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Target from "../Components/Target.jsx";
import ReactLogo from "../Components/ReactLogo.jsx";
import Cube from "../Components/Cube.jsx";
import Rings from "../Components/Rings.jsx";
import HeroCamera from "../Components/HeroCamera.jsx";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../../constants/index.js";
import Vladimir from './../Components/Vladimir';
const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <>
            <section className="vladimir min-h-screen w-full flex flex-col relative">
                <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                    <div className="w-full h-full absolute inset-0">
                        <Canvas className="w-full h-full">
                            <Suspense fallback={<CanvasLoader />}>
                                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                                <Vladimir
                                    position={sizes.deskPosition}
                                    rotation={[0, 0, 0]}
                                    scale={sizes.deskScale}
                                />
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
import React from "react";
import ThreeJSNavBar from "./Sections/ThreeJSNavBar.jsx";
import Hero from "./Sections/Hero.jsx";
import Champion from "./Sections/Champion.jsx";
import "../../ThreeJSIndex.css";
const ThreeJSPage = () => {
    return (
        <main className="mx-auto">
            {/* <ThreeJSNavBar/> */}
            <Hero/>
            {/* <Champion/> */}
        </main>
    )
}

export default ThreeJSPage
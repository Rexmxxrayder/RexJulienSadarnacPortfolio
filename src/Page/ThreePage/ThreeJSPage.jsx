import React from "react";
import ThreeJSNavBar from "./Sections/ThreeJSNavBar.jsx";
import Hero from "./Sections/Hero.jsx";
import "../../ThreeJSIndex.css";
const ThreeJSPage = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <ThreeJSNavBar/>
            <Hero/>
        </main>
    )
}

export default ThreeJSPage
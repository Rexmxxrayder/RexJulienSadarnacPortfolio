import Footer from "../../Components/Footer.jsx"
import NavBar from "../../Components/NavBar/NavBar"
import ThreeJSContent from "./ThreeJSContent.jsx"
function ThreeJSPage() {
    return (
        <>
            <NavBar />
            <div className="PageBody">
                <ThreeJSContent />
            </div>
            <Footer />
        </>
    )
}

export default ThreeJSPage
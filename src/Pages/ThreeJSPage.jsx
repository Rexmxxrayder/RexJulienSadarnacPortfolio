import "./Page.css"
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"
import ThreeJSContent from "../ThreeJS/ThreeJSContent.jsx"
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
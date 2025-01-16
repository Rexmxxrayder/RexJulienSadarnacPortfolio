import "./Page.css"
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"
import ProjectsContent from "../Contents/ProjectsContent"
function MainPage() {
    return (
        <>
            <NavBar />
            <div className="PageBody">
                <ProjectsContent />
            </div>
            <Footer />
        </>
    )
}

export default MainPage
import "./Page.css"
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"
function MainPage() {
    return (
        <>
            <NavBar />
            <div className="PageBody">
                <div className="pt-5 flex justify-center">
                    <a className="w-1/2 relative" href="public\Img\Content\CV\CV_Julien_Sadarnac_Developer.pdf" target="_blank">
                        <img className="" src="public\Img\Content\CV\CV_Julien_Sadarnac_Developer.png">
                        </img>
                        <p className="animate-bounce absolute top-0 right-[-200px] text-white Impact text-5xl"> &lt;-Cliquez</p>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MainPage
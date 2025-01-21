import "./Page.css"
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"
function MainPage() {
    return (
        <>
            <NavBar />
            <div className="PageBody">
                <div className="pt-5 flex justify-center">
                    <a className="w-7/12 relative" href="Img/Content/CV/CV_Julien_Sadarnac_Developer.pdf" target="_blank">
                        <img className="" src="Img/Content/CV/CV_Julien_Sadarnac_Developer.png">
                        </img>
                        <p className="animate-bounceX absolute top-0 right-[-80px] lg:right-[-190px] text-white Impact text-xl lg:text-5xl"> &lt;-Cliquez</p>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MainPage
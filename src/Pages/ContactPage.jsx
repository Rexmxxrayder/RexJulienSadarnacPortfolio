import "./Page.css"
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"
function MainPage() {
    return (
        <>
            <NavBar />
            <div className="PageBody">
                <h1 className="pt-5 text-white text-9xl text-center Impact">Contacts :</h1>
                <h1 className="pt-5 text-white text-5xl text-center">Julien.sadarnac@gmail.com</h1>
                <div className="pt-10 flex justify-evenly items-center">
                    <a href="https://fr.linkedin.com/in/julien-sadarnac-rex" target="_blank">
                        <img className="h-52" src="Img/Content/Miscellaneous/LinkedinLogo.png" ></img>
                    </a>
                    <a href="https://rex-julien-sadarnac.itch.io/" target="_blank">
                        <img className="h-52 rounded-lg" src="Img/Content/Miscellaneous/itch-io-logo.jpg" ></img>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MainPage
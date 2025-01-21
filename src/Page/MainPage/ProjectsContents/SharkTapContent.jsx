import HeaderContent from "../../../Components/HeaderContent"
function SharkTapContent() {
    const headerVideoSrc = "https://www.youtube.com/embed/8ZILz87p6Dg?si=5YRAzzI--J9QHJaf";
    const headerLogoScr = "Img/Content/SharkTap/SharkTapLogo.png";
    const headerTitles = [
        ["Type", "Game Jam"],
        ["Genre", "Casual Game"],
        ["Durée", "1 semaine"],
        ["Support", "PC"],
        ["Moteur", "PC / WebGL"]
    ];
    return (
        <>
            <div id="SharkTapContent" className="anchor pt-10 w-full flex justify-center">
                <div className="w-10/12">
                    <HeaderContent videoSrc={headerVideoSrc} logoSrc={headerLogoScr} titles={headerTitles} />
                    <div className="pt-5">
                        <h3 className="text-white Impact text-5xl">Shark Tap</h3>
                        <div className="pt-5">
                            <p className="text-white text-xl">Shark Tap est un Casual Game dont le but est de protéger son embarcation des requins.</p>
                            <p className="text-white text-xl">Le joueur peut tourner la caméra pour s'occuper des requins devant lui en les frappants afin de les faires exploser.</p>
                            <p className="text-white text-xl">Le niveau se finit sur un orque qui faudra tuer avant qu'ils détruisent notre embarcation.</p>
                        </div>
                    </div>
                    <div className="pt-5">
                        <h3 className="text-white Impact text-5xl">Mes Missions</h3>
                        <div className="pt-5">
                            <p className="text-white text-xl">Lors de cette Game Jam, je me suis principalement occupé de tous le coté User Interface.</p>
                            <p className="text-white text-xl">J'ai donc integrer toutes les assets des artistes afin de creer le menus principal, le menu de selections des niveaux et des differents interfaces en jeu.</p>
                            <p className="text-white text-xl">Je me suis occupé de l'adapation du jeu pour WebGL, chose que je n'avait jamais faite auparavant.</p>
                            <div className="pt-5 flex justify-evenly items-center">
                                <a href="https://wizerdy.itch.io/tap-shark" target="_blank">
                                    <img className="h-[20vw] rounded-lg" src="Img/Content/Miscellaneous/itch-io-logo.jpg"></img>
                                </a>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}

export default SharkTapContent
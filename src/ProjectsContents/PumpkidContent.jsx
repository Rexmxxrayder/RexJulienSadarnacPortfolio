import HeaderContent from "../Components/HeaderContent"
function PumpkidContent() {
    const headerVideoSrc = "https://www.youtube.com/embed/Xd5NEFvwfhY?si=FpK-5F12BrBGOwnz";
    const headerLogoScr = "Img/Content/Pumpkid/PumpkidLogo.png";
    const headerTitles = [
        ["Type", "Projet de fin de Master 1"],
        ["Genre", "Visual novel / Boss rush"],
        ["Durée", "6 mois"],
        ["Support", "PC"],
        ["Moteur", "Unity"]
    ];
    return (
        <>
            <div id="PumpkidContent" className="anchor pt-10 w-full flex justify-center">
                <div className="w-10/12">
                    <HeaderContent videoSrc={headerVideoSrc} logoSrc={headerLogoScr} titles={headerTitles} />
                    <div className="pt-5">
                        <h3 className="text-white Impact text-5xl">Pumpkid THe Insight Knight</h3>
                        <div className="pt-5">
                            <p className="text-white text-xl">Pumpkid The Insight Knight est jeux mixant le Visual Novel et le Boss Rush.</p>
                            <p className="text-white text-xl">Le joueurs incarne Pumpkid, un chevalier citrouille qui s'en va se battre contre la terrible Gwenia aidé dans quête par les déesse du savoir Norn</p>
                            <p className="text-white text-xl">Le combat se découpe en 10 phases où les joueurs devront vaincre les 10 barres de vies du boss, chaque nouvelle phase dotera Gorgon de nouvelles attaques plus dangereuses encore.</p>
                        </div>
                    </div>
                    <div className="pt-5">
                        <h3 className="text-white Impact text-5xl">Mes Missions</h3>
                        <div className="pt-5">
                            <p className="text-white text-xl">Conception de la structure du boss et de ses attaques ainsi que de sa prise de décision.</p>
                            <div className="pl-5">
                                <p className="text-white text-xl">Programmation des attaques du boss en mode automne ( Gwenia a trois phases "nomal", automne et hiver)
                                    cette forme comprends :</p>
                                <div className="pl-5">
                                    <p className="text-white text-xl">- Dash automnale (un dash qui lance des projectiles)</p>
                                    <p className="text-white text-xl">- Laser automnale (un laser de feuilles qui suit le joueur)</p>
                                    <p className="text-white text-xl">- Feuilles boomerangs ( une ligne de feuille)</p>
                                    <p className="text-white text-xl">- Arbre protecteurs ( ces unités doivent être détruites pour infliger des degats au boss)</p>
                                </div>
                            </div>
                            <p className="pt-5 text-white text-xl">Je me suis aussi occupé de l'interface des différents menus en mode boss rush qui gèrent le son et les graphismes ainsi que le menu start du jeu.</p>
                            <div className="pt-5 flex justify-center items-center">
                                <img className="h-[13vw]" src="Img/Content/Pumpkid/Start-menu.png"></img>
                                <img className="h-[13vw]" src="Img/Content/Pumpkid/Graphism-menu.png"></img>
                                <img className="h-[13vw]" src="Img/Content/Pumpkid/Sounds-menu.png"></img>
                            </div >
                            <div className="pt-5 flex justify-evenly items-center">
                                <a href="https://kevin-i.itch.io/pumpkid" target="_blank">
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

export default PumpkidContent
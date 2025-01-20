import HeaderContent from "../Components/HeaderContent"
function OutOfThreeContent() {
    const headerVideoSrc = "https://www.youtube.com/embed/_x9afEZYeYU?si=uF9xwdsARPmZ_VXY";
    const headerLogoScr = "Img/Content/OutOfThree/OutOfThreeLogo.png";
    const headerTitles = [
        ["Type", "Projet de fin d'étude"],
        ["Genre", "Boss Rush Local Multijoueur"],
        ["Durée", "4 mois"],
        ["Support", "PC"],
        ["Moteur", "Unity"]
    ];
    return (
        <>
            <div id="OutOfThreeContent" className="anchor pt-10 w-full flex justify-center">
                <div className="w-10/12">
                    <HeaderContent videoSrc={headerVideoSrc} logoSrc={headerLogoScr} titles={headerTitles} />
                    <div className="pt-5">
                        <h3 className="text-white Impact text-5xl">Out Of Three</h3>
                        <div className="pt-5">
                            <p className="text-white text-xl">Out Of Three est un jeux multijoueur qui se joue exclusivement à trois joueurs en local.</p>
                            <p className="text-white text-xl">Les joueurs incarnent trois frères qui s'en vont vaillemant vaincre la mortelle Gorgon armés de Poings de Sang, d'un Lanceclier et d'une Lyre.</p>
                            <p className="text-white text-xl">Le combat se découpe en 10 phases où les joueurs devront vaincre les 10 barres de vies du boss, chaque nouvelle phase dotera Gorgon de nouvelles attaques plus dangereuses encore.</p>
                        </div>
                    </div>
                    <div className="pt-5">
                        <h3 className="text-white Impact text-5xl">Le Boss</h3>
                        <div className="pt-5">
                            <p className="text-white text-xl">Lors ce ce projet j'ai travaillé en grande majorité sur le boss de ce jeu : Gorgon</p>
                            <div className="pl-5">
                                <p className="text-white text-xl">La création de ses différentes attaques :</p>
                                <div className="pl-5">
                                    <p className="text-white text-xl">- Le lancer de sphéres électriques (normal, rebondissantes et démultipliantes)</p>
                                    <p className="text-white text-xl">- Les charges (normal, à rebond et charge teleportée)</p>
                                    <p className="text-white text-xl">- Les impacts d'éclairs (attaque de zone)</p>
                                    <p className="text-white text-xl">- La cage de stalagmites (reduction de la map temporairement)</p>
                                    <p className="text-white text-xl">- One for all (Oblige les joueurs à se rapprocher les uns des autres pour réduire voir annuler les dégats)</p>
                                    <p className="text-white text-xl">- Ainsi que d'autres attaques annulés en cours de developpement comme la pose de pièges et les rayon lasers</p>
                                </div>
                                <p className="pt-5 text-white text-xl">La création des animations à partir des assets des Game Art et l'intégration de celle-ci en fonction des évènements survenant lors de la partie :</p>
                                <div className="flex h-50 justify-evenly items-center">
                                    <img className="w-[14%]" src="Img/Content/OutOfThree/Boss-Anim-Ball.gif"></img>
                                    <img className="w-[12%]" src="Img/Content/OutOfThree/Boss-Attaque-1.gif"></img>
                                    <img className="w-[17%]" src="Img/Content/OutOfThree/Boss-Attaque-2.gif"></img>
                                    <img className="w-[15%]" src="Img/Content/OutOfThree/Boss-Attaque-3.gif"></img>
                                    <img className="w-[14%]" src="Img/Content/OutOfThree/Boss-Tp.gif"></img>
                                </div>
                                <p className="pt-5 text-white text-xl">La création des différentes entités associées à celle-ci ainsi que leurs interactions avec les joueurs :</p>
                                <div className="w-3/4 mx-auto flex flex-col">
                                    <div className="flex justify-between">
                                        <p className="w-1/4 pb-5 text-white text-2xl text-center">Les Sphères</p>
                                        <p className="w-1/4 pb-5 text-white text-2xl text-center">One For All</p>
                                        <p className="w-1/4 pb-5 text-white text-2xl text-center">Les Éclairs</p>
                                        <p className="w-1/4 pb-5 text-white text-2xl text-center">Les Pièges (supprimés)</p>
                                    </div>
                                    <div className="flex h-28 justify-around items-center">
                                        <img className="w-1/12 justify-self-center" src="Img/Content/OutOfThree/ball-anim.gif"></img>
                                        <img className="w-1/12 object-contain" src="Img/Content/OutOfThree/Arrow.png" alt="Arrow" />
                                        <img className="h-36 " src="Img/Content/OutOfThree/Spark-anim.gif"></img>
                                        <img className="w-1/12" src="Img/Content/OutOfThree/trap-anim.gif"></img>
                                    </div>
                                </div>
                                <p className="pt-5 text-white text-xl">La mise en place d'un systeme permettant au game designer de choisir les attaques correspondants a chacunes des 10 phases.</p>
                                <p className="pt-5 text-white text-xl">Si lors de ce projet, il y avait des problèmes avec le boss, il était de ma responsabilité de les réglés.</p>
                            </div>
                            <h3 className="pt-5 text-white Impact text-5xl">Mes Autres Missions</h3>
                            <div className="pt-5 flex items-center">
                                <p className="text-white text-xl">- Prototyper les Poings de Sang :</p>
                                <img className="pl-10 h-20" src="Img/Content/OutOfThree/FistHit.gif"></img>
                            </div>
                            <p className="pt-5 text-white text-xl">- Participer à la conception du systeme de physique qui régit les déplacements, projections et forces du jeu.</p>
                            <p className="pt-5 text-white text-xl">- Integrer certaines interfaces du jeu :</p>
                            <div className="pt-5 flex justify-center items-center">
                                <img className="w-full" src="Img/Content/OutOfThree/OutOfThreeHealth.png"></img>
                            </div>
                            <div className="pt-10 flex justify-evenly items-center">
                                <a href="https://store.steampowered.com/app/2226030/Out_of_Three/" target="_blank">
                                    <img className="h-52" src="Img/Content/Miscellaneous/Steam_icon_logo-svg.png" ></img>
                                </a>
                                <a href="https://victorhamcha.itch.io/out-of-three" target="_blank">
                                    <img className="h-52 rounded-lg" src="Img/Content/Miscellaneous/itch-io-logo.jpg" ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default OutOfThreeContent
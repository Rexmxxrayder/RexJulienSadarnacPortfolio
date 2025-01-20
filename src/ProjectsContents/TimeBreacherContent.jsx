import HeaderContent from "../Components/HeaderContent"
import ImgCollection from "../Components/ImgCollection";
function TimeBreacherContent() {
    const headerVideoSrc = "https://www.youtube.com/embed/KWTrIBcidvQ?si=8yC8cSdoANOPA_5Y";
    const headerLogoScr = "Img/Content/TimeBreachers/Starchain-Gazer-logo.png";
    const headerTitles = [
        ["Poste", "Programmeur Gameplay Stagiaire"],
        ["Durée du stage", "6 mois"],
        ["Entreprise", "Starchain Gazer"]
    ];
    const imgCollection = [
        ["Du magasin d'artefacts temporaire du jeu", "Img/Content/TimeBreachers/Direct-Crafting.png"],
        ["Du détail de ces artefacts dans le magasin", "Img/Content/TimeBreachers/ArtifactDetail.png"],
        ["Des différents écrans de victoire et de défaite", "Img/Content/TimeBreachers/Victory_Defeat.png"],
        ["Des leaderboards de fin de parties", "Img/Content/TimeBreachers/LeaderBoards.png"],
        ["De la Fosse à création d'Uchronien", "Img/Content/TimeBreachers/Uchronian-Summoning.png"],
        ["Des écrans de connexion", "Img/Content/TimeBreachers/Screen-Connection.png"]
    ];

    return (
        <>
            <div id="TimeBreacherContent" className="anchor pt-10 w-full flex justify-center">
                <div className="w-10/12">
                    <HeaderContent videoSrc={headerVideoSrc} logoSrc={headerLogoScr} titles={headerTitles} />
                    <div className="pt-5">
                        <h3 className="text-white Impact text-5xl">Time Breachers</h3>
                        <div className="pt-5">
                            <p className="text-white text-xl">Time Breachers est un jeu multijoueur qui peut se jouer sur mobile ou sur navigateur Internet.</p>
                            <p className="text-white text-xl">Les joueurs plongent à travers une faille temporelle composer de différents niveaux avec une équipe de trois Uchroniens (les voyageurs temporels)</p>
                            <p className="text-white text-xl">Un Uchronien est composé de trois artefacts : un artefact arme, un artefact armure et un artefact utilitaire qui vont influencer ces pouvoirs et son physique. Chaque artefact a un niveau et une rareté. Le but de chaque niveau est de récupérer des éléments qui vont nous servir de monnaies d'échanges afin d'augmenter ses uchroniens ou de récupérer de nouveaux artefacts.</p>
                        </div>
                    </div>
                    <div className="pt-5">
                        <h3 className="text-white Impact text-5xl">Mes Missions</h3>
                        <div className="pt-5">
                            <p className="text-white text-xl">L'une de mes principales missions a été de mettre en place les différentes nouvelles UI du jeu.</p>
                            <p className="text-white text-xl">A partir d'une image venant de Figma, je devais recréer l'UI en la connectant avec les différentes variables du jeu.</p>
                            <p className="text-white text-xl">J'ai ainsi pu m'occuper:</p>
                        </div>
                        <ImgCollection imgCollection={imgCollection} />
                        <p className="pt-5 text-white text-xl">La plupart de ces UI étaient reliés à la base de données Azure/Préfab et j'ai donc dû apprendre à les récupérer afin de correctement les afficher à l'écran.</p>
                        <p className="pt-5 text-white text-xl">J'ai pu aussi m'occuper d'intégrer les nouveaux meshs et de changer parfois les scripts associés, car les animations et donc le fonctionnement n'étaient plus compatibles. Tout comme les meshs, il y avait aussi des VFX à changer qui devait occasionnellement être réadapté car la nouvelle représentation ne convenait plus aux game design associés.</p>
                        <p className="pt-5 text-white text-xl">Bien évidemment, mes taches tournaient aussi autour de la résolution de bugs et de l'implémentation de nouvelles mécaniques pour le jeu.</p>
                    </div>
                    <div className="pt-5">
                        <div className="text-white Impact text-5xl">Cooked Out</div>
                        <div className="pt-5">
                            <p className="text-white text-xl">J'ai aussi participé à la création des mécaniques du nouveau projet de l'époque qui était Cooked out.</p>
                            <p className="text-white text-xl">Cooked out est un jeu en ligne qui peut se jouer de 2 à 4 joueurs dans une arène, le but étant d'éjecter ses adversaires de celle-ci à la manière d'un Smash Bros vue du dessus.</p>
                        </div>
                        <div className="pt-5">
                            <p className="text-white text-xl">J'ai ainsi pu implémenter les différents bonus comme les tremplins, les bumpers et les oreos rebondissants. Je me suis aussi occupé du système de physique du jeu composé de la valeur d'éjection de chaque joueur en fonction de la quantité de dégâts reçu. J'ai sur ce projet été à mi-temps programmeur et à mi-temps game designer.</p>
                        </div>
                        <div className="pt-3 flex flex-row justify-between">
                            <img className="w-[47%]" src="Img/Content/TimeBreachers/Cooked-Out.jpeg"></img>
                            <img className="w-[47%]" src="Img/Content/TimeBreachers/Cooked-Out2.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeBreacherContent
import "./PresentationContent.css"
function TimeBreacherContent() {
    return (
        <>
            <div className="pt-5 w-full flex justify-center">
                <div className="w-10/12">
                    <div className="w-full h-[33vw] flex">
                        <iframe className="w-2/3" src="https://www.youtube.com/embed/KWTrIBcidvQ?si=8yC8cSdoANOPA_5Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <div className="px-5 w-1/3 flex flex-col justify-center">
                            <div className="flex justify-center">
                                <img className="w-full" src="Img\starchain-Gazer-logo.png"></img>
                            </div>
                            <div className="pt-4 flex flex-row">
                                <div className="text-white font-bold text-3xl" >Poste:&nbsp;</div>
                                <div className="text-white text-3xl">Stage de fin d'études</div>
                            </div>
                            <div className="pt-4 flex flex-row">
                                <div className="text-white font-bold text-3xl">Durée du stage:&nbsp;</div>
                                <div className="text-white text-3xl"> 6 mois</div>
                            </div>
                            <div className="pt-4 flex flex-row">
                                <div className="text-white font-bold text-3xl">Entreprise:&nbsp;</div>
                                <div className="text-white text-3xl">Starchain Gazer</div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="text-white Impact text-5xl">Time Breachers</div>
                        <div className="pt-5">
                            <div className="text-white text-xl">Time Breachers est un jeu multijoueur qui peut se jouer sur mobile ou sur navigateur Internet.</div>
                            <div className="text-white text-xl">Les joueurs plongent à travers une faille temporelle composer de différents niveaux avec une équipe de trois Uchroniens (les voyageurs temporels). </div>
                            <div className="text-white text-xl">Un Uchronien est composé de trois artefacts : un artefact arme, un artefact armure et un artefact utilitaire qui vont influencer ces pouvoirs et son physique. Chaque artefact a un niveau et une rareté. Le but de chaque niveau est de récupérer des éléments qui vont nous servir de monnaies d'échanges afin d'augmenter ses uchroniens ou de récupérer de nouveaux artefacts.</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TimeBreacherContent
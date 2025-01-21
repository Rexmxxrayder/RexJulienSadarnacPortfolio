import "./PresentationContent.css"
function PresentationContent() {
    return (
        <>
            <div className="flex justify-center">
                <div className="ImgProgBack Impact w-10/12 h-[600px] flex">
                    <div className="py-4 px-4 w-1/2 text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white">
                        <h2 className="mx-5 my-5">
                            (Rex)
                        </h2>
                        <h2 className="mx-5 my-5">
                            Julien
                        </h2>
                        <h2 className="mx-5 my-5">
                            Sadarnac
                        </h2>
                    </div>
                    <div className="py-4 px-4 w-1/2 text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white text-right flex flex-col-reverse">
                        <h2 className="mx-5 my-5">
                            Developper
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PresentationContent
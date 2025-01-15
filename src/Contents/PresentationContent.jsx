import "./PresentationContent.css"
function PresentationContent() {
    return (
        <>
            <div className="flex justify-center">
                <div className="Impact ImgBack w-10/12 h-[600px] flex">
                    <div className="py-4 px-4 w-1/2 text-7xl text-white">
                        <div>
                            (Rex)<br/> Julien <br/> Sadarnac
                        </div>
                    </div>
                    <div className="py-4 px-4 w-1/2 text-7xl text-white text-right flex flex-col-reverse">
                        <div>
                            Developper
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PresentationContent
function HeaderContent({ videoSrc, logoSrc, titles }) {
  const createTitles = () => {
    return titles.map((title) => {
      return (
        <div className="pt-1 lg:pt-3 flex flex-col items-baseline sm:flex-row" key={title[0] + title[1]}>
          <p className="text-white font-bold text-[10px] md:text-base lg:text-2xl text-nowrap ">{title[0] + " :"}&nbsp;</p>
          <p className="text-white text-[10px] md:text-base lg:text-2xl">{title[1]}</p>
        </div>
      );
    });
  };

  return (
    <>
      <div className="w-full h-[33vw] flex">
        <iframe className="w-7/12" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className="px-5 w-5/12 flex flex-col justify-center">
          <div className="flex justify-center">
            <img className="w-11/12" src={logoSrc}></img>
          </div>
          {createTitles()}
        </div>
      </div>
    </>
  )
}

export default HeaderContent
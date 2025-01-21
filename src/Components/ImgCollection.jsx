function ImgCollection({ imgCollection }) {
  const createCollection = () => {
    const collection = [];
    for (let i = 0; i < imgCollection.length; i += 2) {
      collection.push(
        <div className="pt-5 flex flex-row justify-between items-center" key={i + "a"}>
          <p className="w-[47%] text-white text-sm md:text-xl lg:text-2xl text-center" key={i + "b"} >{imgCollection[i][0]}</p>
          <p className="w-[47%] text-white text-sm md:text-xl lg:text-2xl text-center" key={i + "c"}>{imgCollection[i + 1][0]}</p>
        </div >
      );
      collection.push(
        <div className="pt-3 flex flex-row justify-between" key={i + "d"}>
          <img className="w-[47%]" key={i + "e"} src={imgCollection[i][1]}></img>
          <img className="w-[47%]" key={i + "f"} src={imgCollection[i + 1][1]}></img>
        </div>
      );
    }
    return collection;
  };

  return (
    <>
      {createCollection()}
    </>
  )
}

export default ImgCollection
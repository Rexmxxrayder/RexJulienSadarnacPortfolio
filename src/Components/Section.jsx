function Section({ title, sections }) {
  const createSection = () => {
    return sections.map((section, index) => {
      return (
        <p className="text-white text-2xl" key={index}>{section}</p>
      );
    });
  };

  return (
    <>
      <div className="pt-5">
        <h3 className="text-white Impact text-5xl">{title}</h3>
        <div className="pt-5">
          {createSection()}
        </div>
      </div>
    </>
  )
}

export default Section
const Hero = ({ data }) => {
  return (
    <div className="bdhero">
      <div className="hero">
        <div className="titleHero">
          <h1>{data.name}</h1>
          <h2>{data.description}</h2>
        </div>
        <img
          style={{ height: 200 }}
          src={data.picture}
          alt={""}
          className="imgHero"
        />
      </div>
    </div>
  );
};

export default Hero;

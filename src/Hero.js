const Hero = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.description}</h2>
      <img style={{ height: 200, width: 400 }} src={data.picture} alt={""} />
    </div>
  );
};

export default Hero;

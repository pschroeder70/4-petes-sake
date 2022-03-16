const Hero = (props) => {
  return (
    <div className='hero'>
      <h1>Coming Soon</h1>
      <video autoPlay loop muted>
        <source src={props.video} type='video/mp4' />
      </video>
    </div>
  );
};

export default Hero;

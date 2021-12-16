const Hero = (props) => {
  return (
    <div className='hero'>
      <video autoPlay loop muted>
        <source src={props.video} type='video/mp4' />
      </video>
    </div>
  );
};

export default Hero;

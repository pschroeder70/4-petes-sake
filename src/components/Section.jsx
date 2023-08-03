const Section = (props) => {
  return (
    <div className='section'>
      <section className='section__content'>

        {props.children}

      </section>
    </div>
  );
};

export default Section;

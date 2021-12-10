import Container from './Container';

const Footer = () => {
  return (
    <Container modifier='container--black'>
      <section className='footer'>
        <div className='footer__copywrite'>
          &copy; 2021 All Rights Reserved, I guess.
        </div>
        <div className='footer__social-links'>*coming soon*</div>
      </section>
    </Container>
  );
};

export default Footer;

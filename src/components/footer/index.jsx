const Footer = (props) => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer__copywrite'>
          &copy; 2021 All Rights Reserved, I guess?
        </div>
        <div className='footer__social-links'>
          <ul className='list--inline'>
            <li className='list__item'>
              <a href='https://letterboxd.com/4kFan/' target='_blank'>Letterboxd</a>
            </li>
            <li className='list__item'>
              <a href='https://twitter.com/real4PetesSake' target='_blank'>Twitter</a>
            </li>
            <li className='list__item'>
              <a href='https://www.instagram.com/real4petessake/' target='_blank'>Instagram</a>
            </li>
            <li className='list__item'>
              <a href='https://www.facebook.com/profile.php?id=100076062157378' target='_blank'>Facebook</a>
            </li>
            <li className='list__item'>
              <a href='mailto:4petessake@protonmail.com' target='_blank'>eMail</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

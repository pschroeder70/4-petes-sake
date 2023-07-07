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
              <a href='mailto:4petessake@protonmail.com' target='_blank'>eMail</a>
            </li>
            <li className='list__item'>
              <a href="https://www.patreon.com/4PetesSake" target="_new">$ Patreon $</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = (props) => {
  return (
    <footer>
      <div className='footer__copywrite'>
        &copy; {new Date().getFullYear()} All Rights Reserved, I guess?
      </div>
      <div className='footer__social-links'>
        <ul className='list--inline'>
          <li className='navbar-menu__item'>
            <a href='mailto:4petessake@protonmail.com' target='_blank'>
              eMail
            </a>
          </li>
          <li className='navbar-menu__item'>
            <a href='https://www.linkedin.com/in/peteschroeder/' target='_new'>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

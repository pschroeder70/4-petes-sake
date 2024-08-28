const Footer = (props) => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content__copywrite">
          &copy; {new Date().getFullYear()} All Rights Reserved, I guess?
        </div>
        <div className="footer-content__social-links">
          TBD
        </div>
      </div>
    </footer>
  );
};

export default Footer;

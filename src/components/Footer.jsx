const Footer = (props) => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content__copywrite">
          &copy; {new Date().getFullYear()} All Rights Reserved, I guess?
        </div>
        <div className="footer-content__social-links">
          <a href="https://peteschroeder.us/" target="_blank">peteschroeder.us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

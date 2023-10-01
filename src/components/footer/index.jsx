import Logo from "../../assets/images/logo_double_white.svg";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer__page">
      <div className="footer__page-1 --mt-l">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footer__page-2 --mt">
        <p className="footer-bold">Menu</p>
        <ul className="footer-light">
          <li>Home</li>
          <li>Converter</li>
          <li>How it Works</li>
        </ul>
      </div>
      <div className="footer__page-3 --mt">
        <p className="footer-bold">About us</p>
        <ul className="footer-light">
          <li>About</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer__page-4 --mt">
        <p className="footer-bold">Screen Record</p>
        <ul className="footer-light">
          <li>Browser Window</li>
          <li>Desktop</li>
          <li>Application</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

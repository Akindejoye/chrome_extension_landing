import Logo from "../../assets/images/logo_double.svg";
import "./style.css";

const Header = () => {
  return (
    <div className="header__nav">
      <img src={Logo} alt="Logo" className="header__nav-logo" />
      <p className="header__nav-1">Features</p>
      <p className="header__nav-2">How It Works</p>
      <button className="header__nav-button">Get Started</button>
    </div>
  );
};

export default Header;

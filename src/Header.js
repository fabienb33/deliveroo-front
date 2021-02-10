import logo from "./Deliveroo_logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="centerLogo">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </div>
  );
};

export default Header;

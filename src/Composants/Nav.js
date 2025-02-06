import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img src={Logo} alt="Logo de l'entreprise" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/orderOnline">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

  
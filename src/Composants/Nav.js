import Logo from "../Assets/Logo.svg";
const Nav = () => {
    return (
      <nav>
        <img src={Logo} alt="Logo de l'entreprise" />
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#Reservation">Reservations</a></li>
          <li><a href="#Orderonline">Order Online</a></li>
          <li><a href="#Login">Login</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;
  
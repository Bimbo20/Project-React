import "./Main.css";
import restauranfood from "../Assets/restauranfood.jpg";
import Specials from "./Speciales";
const Main =() =>{
 return(
    <main >
        <section className="hero-container">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="reserve-btn">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={restauranfood} alt="Delicious food" />
      </div>
    </section>
    <Specials />
    </main>
 );
};
export default Main
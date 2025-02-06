import React from "react";
import "./Speciales.css"; // Import du fichier CSS
import greek from "../Assets/greek salad.jpg";
import bruchetta from "../Assets/bruchetta.svg";
import lemondessert from "../Assets/lemon dessert.jpg";

const Specials = () => {
  const menuItems = [
    {
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greek,
    },
    {
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruchetta,
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemondessert
    },
  ];

  return (
    <section className="specials-container">
      <div className="specials-header">
        <h1>This week's specials!</h1>
        <button className="menu-btn">Online Menu</button>
      </div>
      <div className="specials-grid">
        {menuItems.map((item, index) => (
          <div className="special-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="special-card-content">
              <div className="special-card-header">
                <h2>{item.title}</h2>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;

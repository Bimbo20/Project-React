import "./Main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import restauranfood from "../Assets/restauranfood.jpg";
import Specials from "./Speciales";
import React, { useReducer } from 'react';
import About from "./About";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import OrderOnline from "./OrderOnline";
import Login from "./Login";


const Main =() =>{
  
 return(
    <main >
       <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<BookingPage />} />
      <Route path="/orderOnline" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
    </Routes>
     
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
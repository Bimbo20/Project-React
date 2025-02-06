const GridCoponent = () =>{
    return(
        <section className="specials-container">
      <div className="specials-header">
        <h1>This Week's Specials!</h1>
        <button className="online-menu-button">Online Menu</button>
      </div>
      <div className="specials-content">
        <div className="special-item">
          <h2>Greek Salad</h2>
          <p>
            The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta
            cheese, garnished with crunchy garlic and rosemary croutons.
          </p>
        </div>
        {/* Ajoutez d'autres éléments spéciaux ici si nécessaire */}
      </div>
    </section>
    );
};
export default GridCoponent;
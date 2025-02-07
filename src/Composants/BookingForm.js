import React, { useState } from 'react';

const BookingForm = ({ availableTimes, handleDateChange }) => {
  const submitAPI = (formData) => {
    console.log("Envoi des données à l'API...", formData);
    return true; // Simule une réservation réussie
  };
  
  // États pour chaque champ du formulaire
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  
  // Gestion du changement de date
  const handleDateChangeLocal = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    handleDateChange(selectedDate); // Appel de la fonction du composant parent
  };

  // Gestion des autres changements
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };
 
  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    console.log('Formulaire soumis :', formData);
    
    // Appel de submitAPI
    if (submitAPI(formData)) {
      alert('Réservation réussie !');
    } else {
      alert('Erreur lors de la réservation.');
    }
  };
  

  return (
    <form
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={handleSubmit}
    >
      {/* Champ Date */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChangeLocal}
        required
      />

      {/* Champ Heure */}
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange} required>
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>

      {/* Champ Nombre d'invités */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        required
      />

      {/* Champ Occasion */}
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange} required>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      {/* Bouton de soumission */}
      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default BookingForm;
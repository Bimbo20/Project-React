import BookingForm from './BookingForm.js';
import React, { useReducer } from 'react';

// Fonction pour initialiser les heures disponibles
const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };
  
  // Fonction pour mettre à jour les heures disponibles (pour l'instant, retourne les mêmes heures)
  const updateTimes = (state, selectedDate) => {
    // Ici, vous pouvez ajouter une logique pour filtrer les heures en fonction de la date
    return state;
  };
  
  // Réducteur pour gérer les mises à jour de l'état
  const timesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return updateTimes(state, action.payload);
      default:
        return state;
    }
  };
const BookingPage = ()=>{
    // Utilisation de useReducer pour gérer l'état des heures disponibles
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  // Fonction pour gérer le changement de date
  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };
    return (
        <div>
           <div>
      <h1>Réserver une table</h1>
      <BookingForm
        availableTimes={availableTimes}
        handleDateChange={handleDateChange}
      />
    </div>
        </div>
        
    )
};
export default BookingPage;
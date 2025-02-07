import BookingForm from './BookingForm.js';
import React, { useReducer } from 'react';
import { useNavigate } from "react-router-dom";

// // Fonction pour initialiser les heures disponibles
// const initializeTimes = () => {
//     return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//   };
  
//   // Fonction pour mettre à jour les heures disponibles (pour l'instant, retourne les mêmes heures)
//   const updateTimes = (state, selectedDate) => {
//     // Ici, vous pouvez ajouter une logique pour filtrer les heures en fonction de la date
//     return state;
//   };
  
//   // Réducteur pour gérer les mises à jour de l'état
//   const timesReducer = (state, action) => {
//     switch (action.type) {
//       case 'UPDATE_TIMES':
//         return updateTimes(state, action.payload);
//       default:
//         return state;
//     }
//   };
// Fonction pour initialiser les heures disponibles en utilisant fetchAPI
const fetchAPI = (date) => {
  console.log(`Fetching available times for ${date}...`);
  return ["12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM"]; // Simule des heures disponibles
};

// Mettre fetchAPI dans window pour éviter l'erreur
window.fetchAPI = fetchAPI;

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today); // Sans `window.`
};

const updateTimes = (state, selectedDate) => {
  return fetchAPI(selectedDate); // Sans `window.`
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
  //   // Utilisation de useReducer pour gérer l'état des heures disponibles
  // const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  // // Fonction pour gérer le changement de date
  // const handleDateChange = (date) => {
  //   dispatch({ type: 'UPDATE_TIMES', payload: date });
  // };
   // Utilisation de useReducer pour gérer l'état des heures disponibles
// Utilisation de useReducer pour gérer l'état des heures disponibles
const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

// Fonction pour gérer le changement de date
const handleDateChange = (date) => {
  dispatch({ type: 'UPDATE_TIMES', payload: date });
};

return (
  <div>
    <h1>Réserver une table</h1>
    <BookingForm
      availableTimes={availableTimes}
      handleDateChange={handleDateChange}
    />
    
  </div>
        
    )
};
export default BookingPage;
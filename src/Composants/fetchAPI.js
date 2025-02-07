export const fetchAPI = () => {
    return fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
      .then((res) => res.json())
      .catch((error) => console.error("Erreur API :", error));
  };
  
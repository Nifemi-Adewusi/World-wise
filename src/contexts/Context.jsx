/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useContext } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000/cities";
function Context({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const deleteCity = function (id) {
    const updatedCity = cities.filter((city) => city.id !== id);
    setCities(updatedCity);
  };
  useEffect(function () {
    try {
      const loadData = async function () {
        setIsLoading(true);
        const response = await fetch(BASE_URL);
        setIsLoading(false);
        if (!response.ok) {
          throw new Error("Failed to fetch cities");
        }
        const data = await response.json();
        setCities(data);
      };
      loadData();
    } catch (err) {
      alert(`${err.message} error occurred`);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <CitiesContext.Provider
      value={{ cities, setCities, isLoading, deleteCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the city provider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useCities, Context };

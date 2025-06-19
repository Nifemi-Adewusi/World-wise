/* eslint-disable react/prop-types */
import {
  // useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000/cities";

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  currentPosition: [40, 0],
  currentCountry: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "stopLoading":
      return { ...state, isLoading: false };
    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };
    case "cities/created":
      return { ...state, cities: [...state.cities, action.payload] };
    case "updateCurrentCity":
      return { ...state, currentCity: action.payload };
    case "cities/deleted":
      return { ...state, isLoading: false, cities: action.payload };
    // return null;
    case "currentCity/set":
      return { ...state, currentCity: action.payload };
    case "updateCurrentPosition":
      return { ...state, currentPosition: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
function Context({ children }) {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});
  // const [currentPosition, setCurrentPosition] = useState([40, 0]);
  // const [currentCountry, setCurrentCountry] = useState("");

  // const {  } =
  //   useReducer(initialState, reducer);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities, isLoading, currentCity, currentPosition, currentCountry } =
    state;

  const deleteCity = async function (id) {
    try {
      // setIsLoading(true);
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete city");
      const updatedCity = cities.filter((city) => city.id !== id);
      // setCities(updatedCity);
      dispatch({ type: "cities/deleted", payload: updatedCity });
    } catch (err) {
      alert(`${err.message} error occurred`);
    } finally {
      // setIsLoading(false);
      dispatch({ type: "stopLoading" });
    }
  };
  useEffect(function () {
    dispatch({ type: "loading" });
    try {
      const loadData = async function () {
        // setIsLoading(true);
        const response = await fetch(BASE_URL);
        // setIsLoading(false);
        if (!response.ok) {
          throw new Error("Failed to fetch cities");
        }
        const data = await response.json();
        // setCities(data);
        dispatch({ type: "cities/loaded", payload: data });
      };
      loadData();
    } catch (err) {
      alert(`${err.message} error occurred`);
    } finally {
      // setIsLoading(false);
      dispatch({ type: "stopLoading" });
    }
  }, []);

  async function getCity(id) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities${id}`);
      const data = await res.json();
      // setCurrentCity(data);
      dispatch({ type: "currentCity/set", payload: data });
      console.log(data);
    } catch (err) {
      alert(`${err.message} error occurred`);
    } finally {
      // setIsLoading(false);
      dispatch({ type: "stopLoading" });
    }
  }

  // async function createCity(newCity) {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch(`${BASE_URL}/cities`, {
  //       method: "POST",
  //       body: JSON.stringify(newCity),
  //       headers:{
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await res.json();

  //     setCities((cities=> [...cities, data]))
  //   } catch (err) {
  //     alert(`${err.message} error occurred`);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  async function createCity(newCity) {
    try {
      // setIsLoading(true);
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to create city");

      const data = await res.json();
      // setCities((cities) => [...cities, data]);
      dispatch({ type: "cities/created", payload: data });
      // setCurrentCity(data);
      dispatch({ type: "updateCurrentCity", payload: data });
    } catch (err) {
      alert(`${err.message} error occurred`);
    } finally {
      // setIsLoading(false);
      dispatch({ type: "stopLoading" });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        // setCities,
        isLoading,
        deleteCity,
        getCity,
        // setCurrentCity,
        currentCity,
        currentPosition,
        // setCurrentPosition,
        currentCountry,
        // setCurrentCountry,
        createCity,
        dispatch,
      }}
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

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import SpinnerFullPage from "./Components/SpinnerFullPage";
// import { create Context, useContext } from "react";
// import Product from "./Pages/Product";
// import Pricing from "./Pages/Pricing";
// import HomePage from "./Pages/HomePage";
// import PageNotFound from "./Pages/PageNotFound";
// import AppLayout from "./Pages/AppLayout";
// import Login from "./Pages/Login";

const HomePage = lazy(() => import("./Pages/Homepage"));
const Product = lazy(() => import("./Pages/Product"));
const Pricing = lazy(() => import("./Pages/Pricing"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const AppLayout = lazy(() => import("./Pages/AppLayout"));
const Login = lazy(() => import("./Pages/Login"));

import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import City from "./Components/City";
import Form from "./Components/Form";
import { AuthProvider } from "./contexts/AuthContext";
// import { useState, useEffect } from "react";

import { Context } from "./contexts/Context";
import ProtectedRoute from "./Pages/ProtectedRoute";
/* eslint-disable react/prop-types */

// const BASE_URL = "http://localhost:8000/cities";
function App() {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  //   const deleteCity = function (id) {
  //     const updatedCity = cities.filter((city) => city.id !== id);
  //     setCities(updatedCity);
  //   };
  //   useEffect(function () {
  //     try {
  //       const loadData = async function () {
  //         setIsLoading(true);
  //         const response = await fetch(BASE_URL);
  //         setIsLoading(false);
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch cities");
  //         }
  //         const data = await response.json();
  //         setCities(data);
  //       };
  //       loadData();
  //     } catch (err) {
  //       alert(`${err.message} error occurred`);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }, []);
  return (
    <Context>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="login" element={<Login />} />
              <Route
                path="layout"
                element={
                  // Would Only Be Able To Access The Main App If isAuthenticated is set to true.
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </Context>
  );
}

export default App;

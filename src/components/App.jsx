import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./Header/Header";
import Dashboard from "../components/Dashboard/Dashboard.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import AboutUs from "../components/AboutUs/AboutUs.jsx";

import Contact from "../components/AboutMe/Contact.jsx";
import Hobbies from "../components/AboutMe/Hobbies.jsx";
import MyStory from "../components/AboutMe/MyStory.jsx";

import SiteHistory from "../components/AboutUs/SiteHistory.jsx";
import SiteMission from "../components/AboutUs/SiteMission.jsx";

import Review from "../components/Review/Review.jsx";

import PageNotFound from "../components/PageNotFound/PageNotFound.jsx";

function App() {
  const [reviews, setReviews] = useState([]); // Nueva variable useState

  useEffect(() => {
    // Obtiene los datos de reseñas del servidor.
    fetch("https://emoji-critic.es.tripleten-services.com/v1/reviews")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Pasa el cuerpo de la respuesta analizada a la función setter.
        setReviews(data);
      })
      .catch(console.error);
    // Un array de dependencia vacío significa que el hook sólo se ejecuta cuando
    // se carga el componente.
  }, []);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route
          path="/reviews/:reviewId"
          element={<Review reviews={reviews} />}
        />

        <Route path="about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>

        <Route path="about-us" element={<AboutUs />}>
          <Route path="site-history" element={<SiteHistory />} />
          <Route path="site-mission" element={<SiteMission />} />
        </Route>

        <Route path="reviews" element={<Reviews />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

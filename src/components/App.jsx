import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Dashboard from "../components/Dashboard/Dashboard.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import AboutUs from "../components/AboutUs/AboutUs.jsx";

import Contact from "../components/AboutMe/Contact.jsx";
import Hobbies from "../components/AboutMe/Hobbies.jsx";
import MyStory from "../components/AboutMe/MyStory.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>

        <Route path="reviews" element={<Reviews />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

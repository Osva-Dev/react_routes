import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Dashboard from "../components/Dashboard/Dashboard.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;

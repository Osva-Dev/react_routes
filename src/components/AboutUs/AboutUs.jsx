import "./AboutUs.css";
import { Link, Outlet } from "react-router-dom"; // Nueva importación

function AboutUs() {
  return (
    <div className="about-us">
      <ul className="links">
        <li>
          <Link to="site-history">Historia del Sitio</Link>
        </li>
        <li>
          <Link to="site-mission">Mision del Sitio</Link>
        </li>
      </ul>
      <p>Aquí puedes encontrar más información sobre nuestro sitio.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;

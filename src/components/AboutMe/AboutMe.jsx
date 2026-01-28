// AboutMe.jsx

import "./AboutMe.css"; // Nueva importación
import { Link, Outlet } from "react-router-dom"; // Nueva importación

function AboutMe() {
  // Agrega los nombres de clase que se muestran a continuación para que se apliquen los estilos.
  // Agrega los enlaces como se muestra a continuación.
  return (
    <div className="about">
      <ul className="links">
        <li>
          <Link to="my-story">Mi historia</Link>
        </li>
        <li>
          <Link to="hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="contact">Mi información de contacto</Link>
        </li>
      </ul>
      <p>Soy una persona sencilla. Veo Emojis, escribo reseñas.</p>
      <Outlet />
    </div>
  );
}

export default AboutMe;

import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
export default function NavBar({ text }) {
  return (
    <div className="navbar-container">
      <h1 className="navbar-title">Pedal and Metal</h1>
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/category/montaña">Montaña</Link>
        <Link to="/category/carretera">Carretera</Link>
        <Link to="/category/electrica">Eléctrica</Link>
        <Link to="/category/urbana">Urbana</Link>
        <Link to="/category/plegable">Plegable</Link>
        <Link to="/category/hibrida">Híbrida</Link>
        <Link to="/cart">
          <CartWidget></CartWidget>
        </Link>
      </nav>
    </div>
  );
}

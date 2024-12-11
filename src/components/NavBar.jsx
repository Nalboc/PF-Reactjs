import CartWidget from "./CartWidget"
export default function NavBar({text}){
    return (
    <div className="navbar-container">
        <h1 className="navbar-title">Pedal and Metal</h1>
        <nav className="navbar">
            <a href="#">Inicio</a>
            <a href="#">Bicicletas</a>
            <a href="#"><CartWidget></CartWidget></a>
        </nav>
    </div>)
}
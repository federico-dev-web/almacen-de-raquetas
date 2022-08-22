import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className = 'navBar'>
            <h3>Almacen de raquetas</h3>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Raquetas</a></li>
                <li><a href="#">Como elegir</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#"><CartWidget/></a></li>
            </ul>
        </nav>
    )
}

export default NavBar
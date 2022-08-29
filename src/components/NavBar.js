import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className ="navbar bg-base-100">
        <div className ="navbar-start">
            <div className ="dropdown">
            <label tabIndex ="0" className ="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className ="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
                <ul tabIndex ="0" className ="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Raquetas</a></li>
                    <li><a href="/#">Como elegir</a></li>
                    <li><a href="/#">Contacto</a></li>
                    <li><a href="/#"><CartWidget/></a></li>
                </ul>
            </div>
            <a className ="btn btn-ghost normal-case text-xl" href="/#">Almacen de Raquetas</a>
        </div>
        <div className ="navbar hidden lg:flex">
            <ul className ="menu menu-horizontal p-0">
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Raquetas</a></li>
                <li><a href="/#">Como elegir</a></li>
                <li><a href="/#">Contacto</a></li>
                <li><a href="/#"><CartWidget/></a></li>
            </ul>
        </div>
        </nav>

    )
}

export default NavBar
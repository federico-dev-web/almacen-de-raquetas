
import  {NavLink} from "react-router-dom"
import CartWidget from './CartWidget';

const NavBar = () => {

    const navLinkClass = (navCategoria) => 
        navCategoria.isActive ? 'bg-grey-300' : ''



    return (
        <nav className ="navbar bg-base-100">
        <div className ="navbar-start">
            <div className ="dropdown">
            <label tabIndex ="0" className ="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className ="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
                <ul tabIndex ="0" className ="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink className={navLinkClass} to={'/'}>Inicio</NavLink></li>
                    <li tabIndex="0">
                        <div>
                        Raquetas
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </div>
                        <ul className="p-2 bg-base-100">
                            <li><NavLink className={navLinkClass} to={`/category/Head`} >Raquetas Head</NavLink></li>
                            <li><NavLink className={navLinkClass} to={`/category/Babolat`} >Raquetas Babolat</NavLink></li>
                            <li><NavLink className={navLinkClass} to={`/category/Wilson`} >Raquetas Wilson</NavLink></li>
                            <li><NavLink className={navLinkClass} to={`/category/Yonex`} >Raquetas Yonex</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink className={navLinkClass} to={`/elegi`}>Como elegir</NavLink></li>
                    <li><NavLink className={navLinkClass} to={`/contacto`}>Contacto</NavLink></li>
                    <li><NavLink className={navLinkClass} to={`/carrito`}><CartWidget/></NavLink></li>
                </ul>
            </div>
            <NavLink to={'/'}><p className ="btn btn-ghost normal-case text-xl">Almacen de Raquetas</p></NavLink>
        </div>
        <div className ="navbar hidden lg:flex">
            <ul className ="menu menu-horizontal p-0">
                <li><NavLink className={navLinkClass} to={'/'}>Inicio</NavLink></li>
                <li tabIndex="0">
                        <div>
                        Raquetas
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </div>
                        <ul className="p-2 bg-base-100 z-50">
                            <li><NavLink className={navLinkClass} to={`/category/Head`} >Raquetas Head</NavLink></li>
                            <li><NavLink className={navLinkClass} to={`/category/Babolat`} >Raquetas Babolat</NavLink></li>
                            <li><NavLink className={navLinkClass} to={`/category/Wilson`} >Raquetas Wilson</NavLink></li>
                            <li><NavLink className={navLinkClass} to={`/category/Yonex`} >Raquetas Yonex</NavLink></li>
                        </ul>
                    </li>
                <li><NavLink className={navLinkClass} to={`/elegi`}>Como elegir</NavLink></li>
                <li><NavLink className={navLinkClass} to={`/contacto`}>Contacto</NavLink></li>
                <li><NavLink className={navLinkClass} to={`/carrito`}><CartWidget/></NavLink></li>
            </ul>
        </div>
        </nav>

    )
}

export default NavBar
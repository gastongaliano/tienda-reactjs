import React from "react";
import CartWidget from './CartWidget'


const NavBar = () => {
    return(
        <header>
            <nav className="menuPrincipal">
                <ul>
                    <a href="#"><li>Inicio</li></a>
                    <a href="#"><li>Obras en venta</li></a>
                    <a href="#"><li>Contactenos</li></a>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    );
}

export default NavBar;
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const isComic = location.pathname === '/comic'

    return(
        <nav className={`navbar ${isComic ? 'on-comic' : ''}`}>
            <NavLink to="/" className="navbar-logo">Sebastián</NavLink>
            
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</button>
            
            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li>
                    <NavLink to="/" end onClick={() => setMenuOpen(false)}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/comic" end onClick={() => setMenuOpen(false)}>Cómic</NavLink>
                </li>
                <li>
                    <NavLink to="/characters" end onClick={() => setMenuOpen(false)}>Personajes</NavLink>
                </li>
                <li>
                    <NavLink to="/downloads" end onClick={() => setMenuOpen(false)}>Descargables</NavLink>
                </li> 
                <li>
                    <NavLink to="/news" end onClick={() => setMenuOpen(false)}>Novedades</NavLink>
                </li>
                <li>
                    <NavLink to="/donate" end onClick={() => setMenuOpen(false)}>Donar</NavLink>
                </li>
            </ul>
        </nav>
    )
}
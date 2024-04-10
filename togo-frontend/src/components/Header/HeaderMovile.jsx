import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderMovile.css';

export const HeaderMovile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Función para alternar entre abrir y cerrar el menú
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='header-movile'>
            <div className='logo-movile'>
                <h1><Link to='/'>togo</Link></h1>
            </div>
            {!menuOpen && (
                <i className="bi bi-list menu-movile" onClick={toggleMenu}></i>
            )}
            {/* Mostramos el <ul> solo cuando el menú está abierto */}
            {menuOpen && (
                <div className='nav-movile'>
                    <div className='ul-movile'>
                        <li className='li-movile'><Link to='/' onClick={toggleMenu}>Home</Link></li>
                        <li className='li-movile'><Link to='/aboutus' onClick={toggleMenu}>About us</Link></li>
                        <li className='li-movile'><Link to='/tasks' onClick={toggleMenu}>Tasks</Link></li>
                        <li className='li-movile'><Link to='/notes' onClick={toggleMenu}>Notes</Link></li>
                        <li className='li-movile'><Link to='/contact' onClick={toggleMenu}>Contact</Link></li>
                    </div>
                </div>
            )}
        </div>
    );
};

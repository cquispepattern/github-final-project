import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de usar react-router-dom

const Navbar = () => {
    const isLoggedIn = sessionStorage.getItem('auth-token');

    const handleLogout = () => {
        sessionStorage.removeItem('auth-token');
        window.location.reload(); // Recarga para limpiar el estado
    };

    return (
        <nav>
            <Link to="/">Inicio</Link>
            {isLoggedIn ? (
                <>
                    <Link to="/appointments">Appointments</Link>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </>
            ) : (
                <>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
        </nav>
    );
};
export default Navbar;

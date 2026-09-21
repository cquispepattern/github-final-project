import React, { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8181/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.authtoken) {
                sessionStorage.setItem('auth-token', data.authtoken);
                window.location.href = '/';
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registrarse</h2>
            <input type="text" placeholder="Nombre" onChange={e => setFormData({...formData, name: e.target.value})} required />
            <input type="email" placeholder="Correo" onChange={e => setFormData({...formData, email: e.target.value})} required />
            <input type="password" placeholder="Contraseña" onChange={e => setFormData({...formData, password: e.target.value})} required />
            <input type="tel" placeholder="Teléfono" onChange={e => setFormData({...formData, phone: e.target.value})} required />
            <button type="submit">Enviar</button>
        </form>
    );
};
export default SignUp;

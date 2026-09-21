import React, { useState } from 'react';

const AppointmentFormIC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Consulta instantánea reservada para:', name, phone);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Consulta Instantánea</h3>
            <input type="text" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} required />
            <input type="tel" placeholder="Número de Teléfono" value={phone} onChange={e => setPhone(e.target.value)} required />
            <button type="submit">Reservar ahora</button>
        </form>
    );
};
export default AppointmentFormIC;

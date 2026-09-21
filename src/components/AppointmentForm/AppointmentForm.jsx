import React, { useState } from 'react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Cita reservada:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Reservar Cita</h3>
            <input type="text" placeholder="Nombre" onChange={e => setFormData({...formData, name: e.target.value})} required />
            <input type="tel" placeholder="Número de Teléfono" onChange={e => setFormData({...formData, phone: e.target.value})} required />
            <input type="date" onChange={e => setFormData({...formData, date: e.target.value})} required />
            <input type="time" onChange={e => setFormData({...formData, time: e.target.value})} required />
            <button type="submit">Confirmar Cita</button>
        </form>
    );
};
export default AppointmentForm;

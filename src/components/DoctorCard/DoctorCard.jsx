import React, { useState } from 'react';

const DoctorCard = ({ doctor }) => {
    const [isBooked, setIsBooked] = useState(false);

    const handleBook = () => setIsBooked(true);
    
    // Lógica requerida para cancelar la cita
    const handleCancel = () => {
        setIsBooked(false);
        // Aquí también iría la limpieza de localStorage si el proyecto lo requiere
        console.log('Cita cancelada con éxito'); 
    };

    return (
        <div className="doctor-card">
            <h3>{doctor?.name || "Dr. Ejemplo"}</h3>
            <p>{doctor?.speciality || "Especialidad general"}</p>
            
            {isBooked ? (
                <div>
                    <p>Cita Confirmada</p>
                    <button onClick={handleCancel}>Cancelar Cita</button>
                </div>
            ) : (
                <button onClick={handleBook}>Reservar Cita</button>
            )}
        </div>
    );
};
export default DoctorCard;

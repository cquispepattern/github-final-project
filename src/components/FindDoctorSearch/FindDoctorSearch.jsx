import React, { useState } from 'react';

const FindDoctorSearch = ({ onSearch }) => {
    const [speciality, setSpeciality] = useState('');

    const handleSearch = () => {
        // Ejecuta la búsqueda o pasa el parámetro
        if (onSearch) {
            onSearch(speciality);
        }
    };

    return (
        <div>
            <h2>Encuentre a su médico</h2>
            <input 
                type="text" 
                placeholder="Buscar por especialidad (ej. Dentista)" 
                value={speciality} 
                onChange={(e) => setSpeciality(e.target.value)} 
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};
export default FindDoctorSearch;

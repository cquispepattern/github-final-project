import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Notification from './components/Notification/Notification'; // Componente de notificación
// Importa tus otras rutas aquí...

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Notification /> {/* Integrado para visibilidad en toda la aplicación */}
      <Routes>
        <Route path="/" element={<div>Página de inicio</div>} />
        {/* Añade el resto de tus rutas (Login, SignUp, etc.) */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;

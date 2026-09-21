import React, { useState } from 'react';

const GiveReviews = () => {
    const [review, setReview] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); // Deshabilita el formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Dejar una reseña</h3>
            <textarea 
                placeholder="Escriba su reseña aquí" 
                value={review} 
                onChange={e => setReview(e.target.value)} 
                disabled={submitted}
                required 
            />
            <button type="submit" disabled={submitted}>
                {submitted ? 'Reseña enviada' : 'Enviar Reseña'}
            </button>
        </form>
    );
};
export default GiveReviews;

function calculateInterest() {
    const principalInput = document.getElementById('principal').value;
    const rateInput = document.getElementById('rate').value;
    const yearsInput = document.getElementById('years').value;

    // Convertir de forma segura los valores de entrada a números para evitar TypeErrors
    const principal = parseFloat(principalInput);
    const rate = parseFloat(rateInput);
    const years = parseFloat(yearsInput);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        document.getElementById('result').innerText = "Por favor, introduce valores numéricos válidos.";
        return;
    }

    const interest = (principal * rate * years) / 100;
    document.getElementById('result').innerText = `El interés total es: $${interest.toFixed(2)}`;
}

// Exportar para pruebas de Jasmine si es requerido por el entorno de Node
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateInterest };
}

document.getElementById('generate-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const prompt = document.getElementById('prompt').value;
    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = '<p>Génération en cours...</p>';
    
    try {
        const response = await fetch('https://generateur-images-backend.onrender.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });
        const data = await response.json();
        resultDiv.innerHTML = `
            <img src="${data.imageUrl}" alt="Generated Image">
            <p>${prompt}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = '<p>Erreur lors de la génération de l\'image.</p>';
        console.error('Erreur:', error);
    }
});
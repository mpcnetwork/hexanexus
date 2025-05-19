// Voeg interactiviteit toe aan de knop
document.getElementById("continue-button").addEventListener("click", function() {
    window.location.href = "login.html"; // Vervang door jouw loginpagina link
});
document.addEventListener('mousemove', (event) => {
    const spirals = document.querySelectorAll('.spiral');
    spirals.forEach((spiral, index) => {
        const x = (event.clientX / window.innerWidth) * 100 - 50;
        const y = (event.clientY / window.innerHeight) * 100 - 50;
        spiral.style.transform = `translate(${x}px, ${y}px) rotate(${360 * index}deg)`;
    });
});

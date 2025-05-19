// Selecteer de body en voeg meerdere spiralen toe
const body = document.querySelector("body");
for (let i = 0; i < 50; i++) {
    let spiral = document.createElement("div");
    spiral.className = "spiral";
    // Randomize kleuren
    spiral.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    body.appendChild(spiral);
}

// Voeg een muisinteractie toe
document.addEventListener("mousemove", (event) => {
    document.querySelectorAll(".spiral").forEach((spiral) => {
        spiral.style.left = `${event.clientX}px`;
        spiral.style.top = `${event.clientY}px`;
    });
});
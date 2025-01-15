document.getElementById('animateButton').addEventListener('click', function() {
    const box = document.getElementById('animatedBox');
    let opacity = 1; // Initial opacity
    const fadeOut = setInterval(() => {
        opacity -= 0.1; // Decrease opacity
        box.style.opacity = opacity;
        if (opacity <= 0) { // Stop when invisible
            clearInterval(fadeOut);
        }
    }, 100); // Adjust opacity every 100ms
});

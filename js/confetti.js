document.addEventListener("DOMContentLoaded", () => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.2";
    script.onload = () => {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    };
    document.body.appendChild(script);
});

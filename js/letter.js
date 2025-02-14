document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    envelope.addEventListener("click", function () {
        letter.style.visibility = "visible"; // Делаем письмо видимым
        letter.style.opacity = "1"; // Плавное появление
        letter.style.transform = "translateY(0)"; // Поднимаем письмо вверх
        envelope.style.display = "none"; // Убираем конверт после нажатия
    });
});
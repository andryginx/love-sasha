document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const message = document.getElementById("message");

    let noClickCount = 0; // Количество нажатий на "Нет"

    noButton.addEventListener("click", function () {
        noClickCount++;
        if (noClickCount >= 5) {
            noButton.style.display = "none"; // Скрываем кнопку "Нет" после 5 нажатий
        } else {
            yesButton.style.transform = `scale(${1 + noClickCount * 0.5})`; // Увеличиваем кнопку "Да"
        }
    });

    yesButton.addEventListener("click", function () {
        message.innerHTML = "💖 И он тебя тоже очень-очень любит! 💖";
        message.classList.add("love-message");
        noButton.style.display = "none"; // Скрываем "Нет"
        yesButton.style.display = "none"; // Скрываем "Да"
    });
});
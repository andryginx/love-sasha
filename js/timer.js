document.addEventListener("DOMContentLoaded", function () {
    function updateTimer() {
        const startDate = new Date("2020-02-16T00:00:00"); // Дата начала отношений
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const timerElement = document.getElementById("timer");
        timerElement.innerHTML = `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;

        // Добавляем анимацию "пульсации" при обновлении
        timerElement.classList.add("pulse");
        setTimeout(() => timerElement.classList.remove("pulse"), 500);
    }

    setInterval(updateTimer, 1000); // Обновление каждую секунду
    updateTimer(); // Запускаем сразу при загрузке страницы
});
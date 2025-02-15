document.addEventListener("DOMContentLoaded", () => {
    // Проверяем, если пользователь уже авторизован
    if (localStorage.getItem("access") === "granted") {
        // Если мы на index.html, перенаправляем на pin.html
        if (window.location.pathname.includes("index.html")) {
            window.location.href = "pin.html";
        }
    } else {
        // Если находимся НЕ на index.html, но нет доступа — отправляем на index.html
        if (!window.location.pathname.includes("index.html")) {
            window.location.href = "index.html";
        }
    }
});

function checkPin() {
    const pin = document.getElementById("pinInput").value;
    if (pin === "1602") {
        localStorage.setItem("access", "granted");
        window.location.href = "pin.html"; // Перенаправляем в защищенную зону
    } else {
        document.getElementById("error").textContent = "Неверный PIN-код!";
    }
}

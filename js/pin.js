function checkPin() {
    const pin = document.getElementById("pinInput").value;
    if (pin === "1602") {
        localStorage.setItem("access", "granted");
        window.location.href = "pin.html";
    } else {
        document.getElementById("error").textContent = "Неверный PIN-код!";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("access") !== "granted") {
        window.location.href = "pin.html";
    }
});

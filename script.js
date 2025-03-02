document.addEventListener("DOMContentLoaded", function() {
    updateClock();
    setInterval(updateClock, 1000);

    let today = new Date();
    document.getElementById("date").textContent = today.toLocaleDateString("id-ID");
    document.getElementById("day").textContent = new Intl.DateTimeFormat('id-ID', { weekday: 'long' }).format(today);

    fetch("https://api.aladhan.com/v1/timingsByCity?city=Seri%20Kembangan&country=Malaysia&method=2")
        .then(response => response.json())
        .then(data => {
            let timings = data.data.timings;
            document.getElementById("subuh").textContent = timings.Fajr;
            document.getElementById("zuhur").textContent = timings.Dhuhr;
            document.getElementById("asar").textContent = timings.Asr;
            document.getElementById("magrib").textContent = timings.Maghrib;
            document.getElementById("isya").textContent = timings.Isha;
        })
        .catch(error => console.error("Gagal mengambil jadwal sholat", error));
});

function updateClock() {
    let now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString("id-ID", { timeZone: "Asia/Kuala_Lumpur" });
}

function showLogin() {
    document.getElementById("loginPopup").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "muhajir" && password === "4718") {
        alert("Login berhasil!");
        closeLogin();
    } else {
        alert("Username atau password salah!");
    }
}

function daftarWhatsApp() {
    let nomorWA = "6285372736144"; 
    let pesan = encodeURIComponent("Halo, saya ingin mendaftar di website Anda.");
    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
}

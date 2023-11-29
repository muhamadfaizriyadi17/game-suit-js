// Fungsi untuk menghasilkan bilangan bulat acak antara 1 dan 10
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Fungsi utama untuk bermain tebak angka
function tebakAngka() {
    let kesempatan = 3; // Jumlah kesempatan menebak
    const angkaRandom = generateRandomNumber();

    while (kesempatan > 0) {
    // Meminta pengguna menebak angka
    const tebakan = prompt(`Tebak angka antara 1 dan 10 (Sisa kesempatan: ${kesempatan}):`);
    
    // Mengkonversi tebakan pengguna menjadi angka
    const tebakanAngka = parseInt(tebakan);

    // Memeriksa apakah tebakan pengguna benar atau salah
    if (tebakanAngka === angkaRandom) {
        alert("Selamat! Anda menebak dengan benar.");
        break; // Berhenti jika tebakan benar
    } else {
        if (tebakanAngka > angkaRandom) {
        alert("Tebakan Anda terlalu tinggi. Coba lagi.");
        } else {
        alert("Tebakan Anda terlalu rendah. Coba lagi.");
        }
    }

    kesempatan--; // Mengurangi kesempatan setiap kali pengguna menebak salah
    }

    if (kesempatan === 0) {
    alert(`Maaf, Anda telah kehabisan kesempatan. Jawaban yang benar adalah ${angkaRandom}.`);
    }
}

// Memanggil fungsi untuk memulai permainan
tebakAngka();

function startBirthday() 
{
  const nama = document.getElementById('namaInput').value;
  const umur = document.getElementById('umurInput').value;

  if (nama.trim() === "" || umur.trim() === "") {
    alert("Nama dan umur diisi woyy!");
    return;
  }

  // Tampilkan nama di ucapan
  const birthdayMessage = document.getElementById('birthdayMessage');
  birthdayMessage.textContent = `${nama}!`;

  // Scroll ke section kedua
  const section2 = document.getElementById('section2');
  section2.scrollIntoView({ behavior: "smooth" });

  // 👉 Masukkan nama & umur ke dalam surat
  document.getElementById('namaOutput').textContent = nama;
  document.getElementById('umurOutput').textContent = umur;
}


// Daun berguguran
const daunContainer = document.querySelector('.daun-container');
for (let i = 0; i < 20; i++) {
  const daun = document.createElement('img');
  daun.src = 'image/daun.png'; // file daun
  daun.classList.add('daun');
  daun.style.left = `${Math.random() * 100}vw`;
  daun.style.animationDelay = `${Math.random() * 10}s`;
  daunContainer.appendChild(daun);
}

//Lagu
const vinyl = document.getElementById('vinyl');
const lagu = document.getElementById('lagu');

vinyl.addEventListener('click', () => {
  if (lagu.paused) {
    lagu.play();
    vinyl.classList.add('berputar');
  } else {
    lagu.pause();
    vinyl.classList.remove('berputar');
  }
});

//Section Letter Kedua
function bukaSurat()
{
  const amplop = document.querySelector('.amplop');
  amplop.classList.add('kedut');

  // Setelah animasi selesai (0.5s), scroll ke section selanjutnya
  setTimeout(() => {
    amplop.style.opacity = "0"; // amplop memudar atau bisa disembunyikan
    document.querySelector('#section-berikutnya').scrollIntoView({ behavior: 'smooth' });
  }, 600); // beri jeda sedikit lebih dari durasi animasi
}

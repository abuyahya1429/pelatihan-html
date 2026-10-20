// Langkah 1: Kita perintahkan JavaScript untuk mencari tombol di HTML yang memiliki nama id 'tobat'
// Kemudian, kita simpan tombol itu ke dalam sebuah "wadah ingatan" bernama tombolTobat
const tombolTobat = document.getElementById('tobat');

// Langkah 2: Kita pasang 'telinga' (addEventListener) pada tombol tersebut untuk mendengarkan perintah 'click' (klik)
tombolTobat.addEventListener('click', function() {
    
    // Langkah 3: Saat tombol benar-benar diklik, jalankan perintah alert() untuk memunculkan kotak pesan pop-up di layar browser
    alert('Halo, sapa saya!');
    
});

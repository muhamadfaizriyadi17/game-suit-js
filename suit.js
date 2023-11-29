// menangkap pilihan user
var tanya = true;
while ( tanya ) {

    var p = prompt ('pilih = kertas, batu, gunting');

    // menangkap pilihan komputer

    // membuat pilihan random untuk komputer

    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'kertas';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'batu';
    } else {
        comp = 'gunting';
    }

    var hasil = '';
    // menentukan rules

    if ( p == comp ) {
        hasil = 'YAH SERI!'
    } else if ( p == 'kertas') {
        if ( comp == 'batu' ) {
            hasil = 'KAMU MENANG!';
        } else {
            hasil = 'KAMU KALAH';
        }
    } else if ( p == 'batu' ) {
        if ( comp == 'gunting' ) {
            hasil = 'KAMU MENANG!';
        } else {
            hasil = 'KAMU KALAH';
        }
    } else if ( p == 'gunting' ) {
        if ( comp == 'kertas') {
            hasil = 'KAMU MENANG!'
        } else {
            hasil = 'KAMU KALAH'
        }
    } else {
        hasil = 'memilih yang tidak ada di daftar'
    }

    // menampilkan hasil
    alert ('kamu memilih : ' + p + ' dam komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

}

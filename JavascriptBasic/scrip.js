//===JAVASCRIPT DASAR===
/*tipe data dalam javascrip
Number
String
Boolean
null
undefined
nb : NaN ialah bertype number*/

//===DASAR JS DAN METHOD DI TEKS EDITOR===
/*
let namaDepan = "ahmad farid";
let namaBelakang = " Zainudin";
let namaLengkap = namaDepan + namaBelakang;
let pekerjaan = "web developer"; 
console.log(namaLengkap.slice(0, 5)); 
console.log(namaLengkap.replace("farid", "wildan"));
console.log(namaLengkap.indexOf("a", 4));
console.log(namaLengkap[10]);
console.log(namaLengkap.length);
--tamplate literals
let complite = `${namaLengkap} saya bekerja sebagai ${pekerjaan}`;
console.log(complite);
*/

//===OPERATOR PEMBANDING DAN KONDISI===
// alert("error");
// prompt("input");
/*
if (2 + 2 == 4) {
  console.log("betul");
}
*/

/*
let mtk = Math.random();
console.log(mtk);
if (mtk >= 0.5) {
  console.log(mtk + " lebih besar dari 20");
} else {
  console.log("mtk lebih kecil dari pada 1");
}
*/

/*
const nilai = 49;
console.log(nilai);
if (nilai >= 90) {
  console.log("grade A");
} else if (nilai >= 80 && nilai <= 90) {
  console.log("grade B");
} else if (nilai <= 80 && nilai >= 50) {
  console.log("grade C");
} else {
  console.log("harus mengulang mata pelajaran tersebut");
}
*/

/*
const password = prompt("input password");
if (password.length >= 8) {
  if (password.indexOf(" ") == -1) {
    console.log("password valid");
  } else {
    console.log("tidak boleh ada spasi");
  }
} else console.log("minimal 8 karakter");
*/

/* ALTERNATIF STATMENT IF
const baju = prompt("inputkan pakaian anda !");
switch (baju) {
  case "jaket":
    console.log("cocok untuk cuaca dingin");
    break;
  case "celana":
    console.log("cocok untuk acara formal");
    break;
  case "kokoh":
    console.log("cocok untuk berdakwah");
    break;
  default:
    console.log("tidak ada di daftar");
}
*/

//=== STRUKTUR DATA ARRAY ===
//kata kunci let dan const dalam array yang membedakan ialah const tidak bisa mengubah referensi array tersebut | nomor = [3,4,5] , tidak bisa mengubah secara langsung
// let plylist = ["robbi", "kala", "st12"];
// console.log((plylist[10] = "newST12"));
// console.log((plylist[2] = "newST12"));
/*
METHOD-METHOD ARRAY
PUSH = menambah di akhri array
POP = menghapus satu-satu array dari belakang
SHIFT = menghapus array dari depan
UNSHIFT = menambah array dari depan
concet = mengggabungkan arry 
indexOf = mencari index dari array | output index
incloudes = mencari data yang ada di array | output boolean
sort = mengurutkan array berdasarkan abjad ataupun angka
splice =  bisa menghapus atau menggantikan array | memanipulasi 
reverse = untuk membalik kan indeks array 123 jadi 321
*/
/*
METHOD CONCET
const nama1 = ["farid", "wilda", "zaki"];
const nama2 = ["krisna", "adit", "zani"];
const gabunganNama = nama2.concat(nama1);
console.log(gabunganNama);
*/
/*
METHOD indexOf
const namaSiswa = ["farid", "zain", "ahmad", "naura"];
console.log(namaSiswa.indexOf("farid"));
*/
/*
METHOD INCLOUDES && SORT
const number = [1, 5, 9, 4];
number.sort();
console.log(number);
console.log(number.includes(9));
*/
/*
const bulan = ["januari", "maret", "juli", "juni"];
bulan.splice(1, 0, "pebruari");
bulan.splice(3, 2, "April"); //nilai tengah 0 untuk tidak menambah, 1 atau lebih itu akan menggantikan elemen sesuai yg diminta 1 ataupun lebih
console.log(bulan);
*/
/*
let number = [1, 2, 3];
number.reverse();
console.log(number);
*/
// console.log(barbel.push(5));
// console.log(barbel.push(15));
// console.log(barbel.pop);
/*
NESTED ARRAY
const board = [
  [null, "o", "o"],
  ["0", "o", null],
];
console.log(board);
// console.log(board[0][2]);
*/

//===STRUKTUR DATA OBJECT===
/*
const namaProperti = {
  namaMobil: "mobil sedan",
  tahunMobil: [1999, 2004, 2005], //mengandung array
  warna: {
    //object dalam object
    merah: "stok 45",
    hijau: "stok 50",
  },
};
console.log(namaProperti.tahunMobil[1]);
console.log((namaProperti.warna.merah = "stok 10"));
console.log((namaProperti.ban = "merek berkelas")); //add property 
*/
/*
OBJECT DIDALAM ARRAY
const mahasiswa = [
  {
    nama: "farid",
    umur: 21,
  },
  {
    nama: "wilda",
    umur: 22,
  },
];
console.log((mahasiswa[0].umur));
*/

//===LOOPING / PERULANGAN===
/* 
dalam looping for akan terdapat (initial; coondition; increment)
for(let i = 0; i <= 10; i++ / i+=1){
  console.log('cetak')
}
*/
/*
BASIC
for (let i = 1; i <= 10; i++) { 
  console.log(` bertambah ${i}`);
}
*/
/*
DATA FROM ARRY 
const siswa = ["wilda", "farid", "zain", "krisna"];
for (let i = 0; i <= siswa.length; i++) {
  console.log(`${i} ${siswa[i]}`);
}
*/
/*
NESTED FOR
const key = "abcd";
for (let i = 1; i <= 4; i += 1) {
  console.log(`${i}. baca pertanyaan soal ${i}:`);
  for (let j = 0; j <= key.length; j += 1) {
    console.log(`   ${key[j]} pilih jawaban dengan benar`);
  }
}
*/

//MENGAMBIL DATA DARI NESTED ARRAY DENGAN NESTED LOOP
/*
const namaSiswa = [
  ["krisna", "wilda", "zain"],
  ["kunny", "akbar", "tyas"],
  ["mita", "diana", "dita"],
];

console.log(namaSiswa[0]);
for (let i = 0; i <= namaSiswa.length; i++) {
  console.log(`${i} nama siswa berikut:`);
  let panjangIndex = namaSiswa[i];
  for (let k = 0; k <= panjangIndex.length; k++) {
    console.log(panjangIndex[k]);
  }
}
*/

//===PERULANGAN DENGAN WHILE===
/*
BASIC
let num = 0;
while (num <= 10) {
  console.log(num);
  num++;
}
*/
/*
const password = "wilda";
let gues = prompt("input password");
while (gues !== password) {
  gues = prompt("masukkan password");
}
alert("sukses");
*/
/*const warna = "merah";
while (true) {
  let color = prompt("masukkan warna");
  if (color == warna) {
    alert("cakep");
    break;
  }
}
*/

//TEBAK ANGKA DENGAN WHILE
/*
let nilai = parseInt(prompt("masukkan nilai anda"));

const hasil = Math.floor(Math.random() * nilai) + 1;
console.log(hasil);

let tebak = parseInt(prompt("masukkan nilai pertamamu"));
let attempts = 1;

while (parseInt(tebak) !== hasil) {
  attempts++;
  if (tebak > hasil) {
    tebak = prompt("nilai terlalu besar");
  } else {
    tebak = prompt("nilai terlalu kecil");
  }
}

alert("cakep, melukakan percobaan sebanyak " + attempts);
*/

//===FOR OF untuk struktur data array=== | minus indexnya gada
/*
let siswa = [
  ["farid", "zain", "wildan"],
  ["zaki", "juki", "kiwil"],
];

for (let baris of siswa) {
  console.log(`Inilah nama masing-masing kelas`);
  for (let isi of baris) {
    console.log(isi);
  }
}
*/

//=== FOR IN untuk tipe data object===
/*
const hargaSepeda = {
  supra: 10000,
  mio: 2000,
  megapro: 30000,
};

for (let x in hargaSepeda) {
  console.log(x + " " + hargaSepeda[x]);
}
*/

//===FUNCTION DI JS===
/*
function perkalian(x, y) {
  const hasil = x * y;
  console.log(hasil);
  return hasil; // return digunakan agar hasilnya di simpan di variable | meretrun
}
const dampak = perkalian(3, 5);
*/

// ===SCOPE===
/*
berlaku let dengan const jika diluar function akan menjalankan yang di luar | jika var tidak memiliki scope

let hitung = 20;
function perhitungan() {
  let hitung = 35;
  console.log(hitung);
}
console.log(hitung);
perhitungan();
*/
//FUNCTION DALAM LEXICAL SCOPE | FUNCTION DI DALAM FUNCTION
/*
function berjalan() {
  const jauh = "25 km";
  function berlari() {
    console.log(` saya berlari sejauh ${jauh}`);
  }
  berlari();
}
*/
/*
====FUNCTION REGULER PADA UMUMNYA 
function perkalian(a, b) {
  totalPerkalian = a * b;
  console.log(totalPerkalian);
}
perkalian(3, 4);
===
FUNCTION EKSPRESSION YANG MENYIMPAN LANGSUNG DI VARIBAL SEKALIGUS VARIABEL BISA DI BERIKAN ARGUMENT SELAYAKNYA FUNCTION KARENA HASIL DARI VARIABEL IALAH FUCTION
let prosesPerkalian = function perkalian2(a, b) {
  return a * b;
};
console.log(prosesPerkalian(4, 5));
*/

//FUNCTION MENGANDUNG ARGUMEN FUNCTION
/*
function tigaKali(x) {
  x();
  x();
  x();
}
function lempardadu() {
  const hasilDadu = Math.floor(Math.random() * 6) + 1;
  console.log(hasilDadu);
}
*/
/*
function hasilKali(x) {
  let perkalian = 2 * x;
  console.log(perkalian);
}
  MEMILIKI OUTPUT SAMA NAMUN KELEBIHAN DI RETURN JIKA INGING DITAMPILKAN DI VARIABLE
function hasilKali(x) {
  return 2 * x;
}
*/

//===METHOD ADALAH SEBUAH FUNCTION YANG DI DEFINISIKAN DIDALAM OBJECT
/*
let kebutuhanMTK = {
  //obejct
  perkalian: function (x, y) {
    //method
    return x * y;
  },
  penjumalahan: function (x, y) {
    //method
    return x + y;
  },
};
console.log(kebutuhanMTK.penjumalahan(9, 9));
*/

//PENGGUNAKANA THIS PADA OBJECT
/*
let saya = {
  nama: "farid",
  umur: 20,
  kenalan: function () {
    return `hai, kenalin nama gue ${this.nama}, umur gue ${this.umur}`;
  },
};
console.log(saya.kenalan());
*/

//TRY AND CATCH BERTUJUAN UNTUK MENJALAN KAN CODE SETELHANYA MESKIPUN ADA ERROR DI TRY. CATCH BERTUJUAN UNTUK MEMBERIKAN ERRORNYA
/*
function ketik(msg) {
  try {
    console.log(msg.toUpperCase());
  } catch (error) {
    console.log(error);
    console.log("salah!");
  }
}
ketik("wildku");
*/

//==CALLBACK FUCTION
/*
const mtk = [3, 4, 2, 5, 6, 8, 9];
mtk.forEach(function (x) {
  if (x % 2 == 0) {
    console.log(x);
  }
});
x();
*/
//MAP | MENGGUNAKAN CALLBACK FUNCTION YANG DI MODIF DAN MEMBERIKAN ARRY BARI
/*
const siswa = ["farid", "zain", "wilda"];
const mahasiswa = siswa.map(function (newsiswa) {
  return newsiswa.toUpperCase();
});
console.log(mahasiswa);
*/

//ARRAY FUNCTION MIRIP DENGAN FUCTION EKSPRESSION NAMUN LEBIH SIMPLE
/*
let nama = (x, y) => {
  return x * y;
};
console.log(nama(3, 5));
*/
/* ===fuction array every dan some
const nilai = [50, 90, 76, 89, 80];
const seacrh = nilai.some((n) => {//some ga harus semua nilainya >=60
  return n >= 60;
});
const seacrh2 = nilai.every((n) => {//harus semua >=60
  return n >= 60;
});
console.log(seacrh);
console.log(seacrh2);
*/
//METHOD REDUCE DENGAN MENGGUNAKAN CALLBACK FUNCTION YANG DIMILIKI ARRAY
/*
const harga = [23, 45, 67, 89];
const total = harga.reduce((nilaiAwal, nilaiAkhir) => {
  console.log(nilaiAwal, nilaiAkhir);
  return nilaiAwal + nilaiAkhir;
});
*/

//MEMBERIKAN NILAI DEFAULT FUNCTION AGAR NILAINYA TIDAK NaN ataupun yang lain
/*
function nilai(x = 5) {
  return x * 5;
}
*/

//MENGUBAH ARRAY ATAU OBJECT MENJADI DERET VALUE ARGUMENT FUNCTION | SPREAD OPERATOR
/*
const nilai = [1, 2, 3, 4, 1, 4];
const nilai2 = ["kopling", "zaki"];
console.log(...nilai);
console.log(Math.max(...nilai));
//array bisa di gabung dengan spread operator
const gabungan = [...nilai, ...nilai2];
console.log(gabungan);
//dalam object dengan spread operator juga bisa menggabungkan property
let object = {
  nama: "kopling",
  umur: 40,
};
const gabungObject = { ...object, kelas: 10 };
console.log(gabungObject);
//dengan rest param dari spread operator akan lebih meringkas argumen
const nama = ["farid", "zaki", "wildan", "zudi", "nanda"];
const winner = (emas, perunggu, perak, ...lain) => {
  console.log(`selamat kepada ${emas} medali emas`);
  console.log(`selamat kepada ${perunggu} medali emas`);
  console.log(`selamat kepada ${perak} medali emas`);
  console.log(`selamat kepada ${lain} medali emas`);
};
*/

//DESTRUCTING ARRAY DENGAN SIMPLE | jadi isi varibale bisa di isi dengan varible lain
/*
const nama = ["farid", "zain", "kopling"];
const [isiFarid, isiZain, isiKopling] = nama;
console.log(isiFarid); //output farid
// //=====DESTRUCTING OBJECT
const naym = {
  nama: "farid",
  umur: 20,
};
const { nama, umur } = naym; //di objeck nama key nya harus sama. jika dias bisa menggunakan ex: nama : as
console.log(nama); //output farid

//membongkar object di dalam array function
const bongkar = ({ nama, umur }) => {
  return `${nama} dan ${umur}`;
};
console.log(bongkar(naym));
*/
/*
jadi ada 3 function
function standar
callback fanction
function exspression | seringnya di pakek di array jadi array function yg khasnya =>
*/

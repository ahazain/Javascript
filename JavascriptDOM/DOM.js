////=======MENGENAL DOCUMENT OBJECT MODEL (DOM)========////
/*
- di console bisa menggunakan perintah 'console.dir(document)' untuk mengetahui document object apa aja yang di gunakan
- di console bisa memanipulasi web dengan menggunakan perintah document.all[indexnya]' kemudian menggunakan method seperti innertext. document.all[9].innertext='ppp'

~~~~~~~~~~~~~~~SELECT~~~~~~~~~~~~
=> SELECT DENGAN GET
*) select berdasarkan id => document.getElementById('idnya') ini berguna untuk menseelect code nya. jika ingin memanipulasinya bisa di bungkus variable seperti const idnya = document.getElementById('idnya'). kemudian untuk mengatuhi object apa aja bisa perintahkan 'console.dir(idnya)' jika memanipulasi seperti src misalnya bisa langsung idnya.src = ''.
*) berdasarkan tagname  => ElementByTagName
*) berdasarkan classname =>  getElementByClassName

=> SELECT LEBIH MUDAH DENGAN QUERYSELECTOR
- document.querySelector('h1')   //cari elemen h1 pertama | + all tampil semua
- document.querySelector(#red)   //cari elemen pertama dengan id bernilai "red" 
- document.querySelector('.big') //cari elemen pertama dengan class bernilai "big"

~~~~~~~~~~PROPERTY DAN METHOD YANG SERING DI GUNAKAN~~~~~~~~~
NB: variable berisi = document.querySelector('elemen')
*) clasList -> memebuat serta menambah class pada elemen & informs all classnya
*) getAtribute()-> mendapatkan atribut|ex.getAtribut('class')//output nameclass
*) setAtribute()-> menambah atribut|ex.setAtribut('class', 'nameclass')
*) appendChild()->menambahkan suatu elemen di dalam elemen|ex.document.body.appendChild(gambar)
*) append()->menuliskan elemen baru tapi bedanya hanya sebuah teks | alternati dari innerText| variable.append('eks yg ingin di tampilkan')
*) removeChild() -> harud di lakukan parent jika ingin menghapus childnya
*) remove() -> menghapus class | ex.h1.remove('classnya') | atau varibale.remove()
*) createElement->menambah elemen baru tpi menambah nya di tampilan perlu append/appendchild
*) innnerText -> berisi full text ex. saya[2] kalo
*) TextContent -> berisi teks dan aktivitas|ex.n\t\t\and is value
*) innerHTML -> berisi teks,aktivitas, elemen HTML|ex.t\t\<h1>hh</h1>
*) parendElement->akan mengetahui parentnya|ex.variable.parentElement
*) children-> akan mengetahui childnya|ex variable.childern[jika ingin di dalam index]
*) nextSibling -> informasi yg ditulis di texs editornya|ex.t/t/t/n| jika elemennya menggunakan 'nextElemensibling'
*) previousSibling-> sama seperti nextSibling namun ini sebaliknya|variable.proviousSibling
*) style -> digunakan style seperti css|value style tidak akan tampil jika di edit di css
*/

////=======BEBERAPA EVENT PADA DOM======////
/*
EVENT => AKAN LEBIH MEMPERINDAH TAMPILAN WEBSITE SEPERTI PERGERAKAN YANG ADA DI WEBSITE KETIKA DI SCROLL, DROPDOWN DARI NAVIGAION, TANDA SCROLL YANG KEMBALI KE ATAS MENUNGGU RELOAD DATA YG DI SCROLL

AKAN LEBIH MUDAH MENGGUNAKAN 'addEventListener' UNTUK PROPERTY EVENT PADA CONTOH FOLDER RANDOMCOLOR & EVENT | banyakjenis event types seperti click, onmouse dan yang lain jika menggunakan addenvenlistener

nb:variable = document.queryselector(''/./#)
*) CLICK => biasa di pakek variable.onclick | onclick = function //output akan menjalankan onclick ketika di klik | contoh di folder event
*) onmouseover => menjalankan method ketika mouse menyentuh target|contoh di folder event
*) DRAG
*) DROP 
*) HOVER
*) SCROLL
*) FORM SUBMISSION
*) KEY PRESS
*) FOCUS/ BLUR
*) MOUSE  WHEEL
*) DOUBLE CLICK 
*) COPY 
*) PASTE
*) AUDIO 
*) SCREEN RESIZE
*) PRINT
*) EVENT PREVENTDEFAULT => jika diklik tidak akan berpintah ke halaman lain, meskipun menggunakan # bisa tapi di routing nya akan menambah # jika menggunakan pagar. jika memakai objec ini di dalam parameter fuction itu tidak akan merubah routing 
ex= const form = document.qeuerySelector('form')
form.addEvenListener('submit', function (e){
    e.prevendefault(); //disebut method dari objec event
    console.log('bebas ketik apa ini akan muncul di console browser')
});





































































*/

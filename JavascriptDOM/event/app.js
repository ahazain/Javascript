const button = document.querySelector("#clickme");
button.onclick = function () {
  console.log("You clicked me");
};
// const scream = () => {
//   console.log("Dont touch me");
// };
// button.onmouseover = scream;

button.onmouseover = () => {
  //code lebih ringkasnya ketimbang code di atasnya
  console.log("don't touch me");
};

//========CARA LAIN MENAMBAHKAN EVENT DAN POWER FULL========

const eventbtn = document.querySelector("#eventbtn");
eventbtn.addEventListener("click", stepSatu); //ADDEVENTLISTNER MEMUNGKINKAN MEMMAGGIL KEDUA FUCTION
eventbtn.addEventListener("click", stepDua);
function stepSatu() {
  console.log("step satu");
}

function stepDua() {
  console.log("step dua");
}

// eventbtn.onclick = stepSatu; // SEDANGKAN JIKA TIDAK MENGGUNKAN ADDEVENT DAN SAMA SAMA ONCLICK//OUTPUT HANYA 1
// eventbtn.onclick = stepDua;

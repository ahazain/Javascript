const form = document.querySelector("#form");
const list = document.querySelector("#notes");
const input = document.querySelector("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const noteValue = input.value;
  const newList = document.createElement("li");
  newList.innerText = noteValue;
  list.append(newList);
  input.value = ""; //mengahpus input jika sudah bervalue
  //=======
  console.log(newList);
});

//menghapus li ketika di klik | ini dinamakan event delegation

list.addEventListener("click", function (e) {
  e.target.nodeName === "LI" && e.target.remove(); //krena yang di input memiliki nodeName LI bisa dilihat dengan console.dir(list), kendalanya jika ada aharef atau ada elemen lain yang tidak ingin di hapus bisa di lihat nodeNamenya. 
});

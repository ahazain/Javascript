// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
// 	// console.log(img.src);
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

/*
manipulasi add class and value
let h1 = document.querySelector("h1");
const style = [
  h1.classList,
  h1.classList.add("tocnumber", "bg-info", "text-white", "border-danger"),
];
console.log(style);
*/
const links = document.querySelectorAll('a');

for (let link of links) {
	link.style.color = 'rgb(0, 108, 134)';
	link.style.textDecorationColor = 'magenta';
	link.style.textDecorationStyle = 'wavy';
}

// CODE JS INI UNTUK BERLATIH DI CONSOLE LANGSUNG UNTUK MENAMBAH CLASS, MENSELECT, ATAUPUN YANG LAIN
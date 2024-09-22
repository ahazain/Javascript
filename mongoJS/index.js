// getting-started.js
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movie")
  .then(() => {
    console.log("berhasil connect");
  })
  .catch((err) => {
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true }, //dengan syntak ini akan bisa diberikan validasi
  score: Number,
  year: Number,
  director: String,
});

const Movie = new mongoose.model("Movie", movieSchema);

//setelah membuat schema dan modelnya. baru kita bisa bikin data objecnya

const movie = new Movie({
  title: "Dia Perempuanku",
  score: 9,
  year: 2000,
  director: "kopling",
});

//MENAMPILKAN BY ID
// Movie.find({ _id: "66e191b013816699bd362651" })
//   .then((result) => {
//     console.log("berhasil");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.insertMany([
//   {
//     title: "Dia Perempuanku",
//     score: 9,
//     year: 2000,
//     director: "kopling",
//   },
//   {
//     title: "Dia Perempuanku",
//     score: 9,
//     year: 2000,
//     director: "kopling",
//   },
//   {
//     title: "Dia Perempuanku",
//     score: 9,
//     year: 2000,
//     director: "kopling",
//   },
// ])
//   .then((result) => {
//     console.log("berhasil");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

movie.save(); //untuk menyimpan di mongodb
console.log(movie);

//custom method mongos untuk update banyak dengan cepat
/*
productSchema.method.outStock = function(){
  this.stock = 0,
  this.availability.online = false,
  this.availability.offline = false,
  return this.save
}

const changeStock = async (id){
  const foundProduct = await Product.findById(id)
  await foundProduct.outStock();
  console.log('berhasil di ubah')
}


*/

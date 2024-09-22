// one to few == one to many di sql
// array di dalam scema == relasi antar tabel
// one to few = membuat 1 scema yang didalamnya ada 2 tabel.
// one to many ada juga. perbedaan menggunakan 2 scema dan 2 model. salah satu akan masuk di scema yang akan di relasikan.

/*
 *) contoh objec 2 scema
>> ini add nilai product dengan memberi nilai farm
const add product = async (id) =>{
    const farm = new farm{
        nama: 'haki'
    }
    const melon = await product.findone({nama:'melon'}),
    farm.product.push(melon)
    await farm.save()
    console.log(farm)
}

>> ini add nilai product dengan id farm yang udah ada
const add product = async (id) =>{
    const farm = await farm.findById(id),
    const melon = await product.findone({nama:'melon'}),
    farm.product.push(melon)
    await farm.save()
    console.log(farm)
}
*/

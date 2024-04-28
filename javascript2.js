const listMahasiswa = ["ozi","arya","ahmad","ratih","nabila","mayda"];

const [a,b,c,d,e,f,] = listMahasiswa;

//console.log(g);
//destrukturing object

const dataDiri = {
    nama: "mira",
    umur: 17,
    tanggal_lahir:"20 mei 2001",
    sapa: function () {
        console.log(`halo ${this.nama}`);
    },
};

const {umur,tanggal_lahir,nama} = dataDiri;

console.log(nama);
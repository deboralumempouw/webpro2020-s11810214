/*
  Object

*/

// const mahasiswa1 =["John" , "Doe", 31 , true ];

const mhs1 = {
    namaDepan: "John",
    namaBelakang: "Doe",
    umur: 31,
    sudahlulus: true,
    alamat :{
        jalan: "Jln. Arnold mononutu",
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
    },
    IPSemester: [3.05,3.25,3.0,3.4],
    hitungIPK: function(){
      let total =0;
      this.IPSemester.forEach(function(el){
      
        total= total
      });
      this.hitungIPK = total /4;
},
};
delete mhs1.namaBelakang;
console.log(mhs1);

console.log(mhs1,umur);

console.log(mhs1["namaBelakang"]);
console.log(mhs1.alamat.jalan);
console.log(mhs1.IPSemester[2]);
mhs1.hitungIPK();

const mahasiswa1 =[
  {
    nim ="001",
    namaDepan:"John",
    namaBelakang:"Doe",

  },
  {
    nim ="002",
    namaDepan:"Jane",
    namaBelakang:"Smith",

  },
  {
    nim ="003",
    namaDepan:"Stenly",
    namaBelakang:"Adam",

  },
];

mahasiswa1.forEach(function (el){
  console.log(el);
});



/* 
    1. Array

*/
//Deklarasi array menggunakan tanda []

let angka = [ 1,2,3,4,5,6,7,8,9];
console.log(angka);
let buah = ["Mangga", "Apel", "Jeruk"];
console.log(buah);

let arr = ["text",1, true];
console.log(arr);

let myFunc = function () {
    return "hello array";
};

let arr2 =["text", 1,true,myFunc (),[1,2,3,4]];
//Mengakses element dalam 
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4][2]);

console.log(typeof arr2);
console.log(arr2.length);

let buah2 = new Array("salak","jambu","melon");
console.log(buah2);

let mhs = [];
mhs[0] ="john";
mhs[1] ="bob";
mhs[2] ="jane";

console.log(mhs);

//Mengubah isi array
mhs[1] ="dony";
console.log(mhs);

//Menghapus isi array
mhs[2]= underfriend;
console.log(mhs);

//menampilkan isi array
let mhs =["John","bob","jane","peter"];

for (let i=0;i<4;i++){
    console.log("Mahasiswa ke-" +( i+ 1)+"adalah"+ mhs[i]);
}

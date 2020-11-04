/*
    Destructuring
    
*/
//1. array
const colors = ["merah","kuning","hijau"];

//biasanya
//let satu = colors[0];
//let dua = colors[1];
//let tiga = colors[2];

//cara destruc

let [satu, dua, tiga] = colors;

//let [satu, , tiga] = colors; 
// let [satu, dua, tiga, empat="biru"] = colors;
//console.log(satu, dua, tiga, empat);

//2. Object
const user ={
    name:"Debo",
    gender:"female",
    age:20,
};

// let {name, gender, age} = user;
// let {name, age} = user; 
//langsung sja
let {name, gender, age, born="manado"} = user;
console.log(name, gender, age, born)
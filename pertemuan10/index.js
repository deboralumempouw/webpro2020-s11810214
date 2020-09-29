//Var, let, const
 //var penamaan variable yang bisa lebih dari satu, yang seharusnya tidak boleh

let nama =  debora;
console.log(nama);

//Scope dalam javascript
//1. Function scope
//2. Block scope
//Scoping variable dgn var
// for(var i=0;i<10;i++){
//     console.log(i);
// }
// console.log(i); 

for(let i=0;i<10;i++){
    console.log(i);
}
console.log(i); 


//Tamplate Literal
const person = {
    firstName: "debora",
    lastName: "lumempouw",
    age:19,
};
console.log(`Hallo nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age} tahun.`);


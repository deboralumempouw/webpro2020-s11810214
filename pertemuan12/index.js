//Rest & Spread Operator
//----------------------

const hitung = (a,b,c,d,e,f,g ) => {
const angka = [a,b,c,d,e,f,g];
let total = 0;
for (let i=0;i<7; i++){
    total = total + angka [i];
}
return total;
};

const hitung = (param1, param2, ...params)=>{
    console.log(param1);
    console.log(param2);
    console.log(params);

    let total =0;
    params.forEach((el) => {
        total =total + el;
    });
    return 0;
};

//spread Operator

const angka =[1, 2,3,4,5];
const angka2 =[...angka];

angka[0] =10;
console.log(angka);
console.log(angka2);
// Arrow Function

// Single argument
// const calcAge = (year) => {
//    return 2020 - year;
// };

// Multiple arguments
// const calcAge = (birthYear, currentYear) => {
//   const x;
//   return currentYear - birthYear;
//   };

// No argument with implicit return value
// const calcAge = () => 2020 - 1992;
// console.log(calcAge());

const years = [1990, 1992, 2001, 2005];
const calcAge5 = years.map(function (el) {
    return 2020 - el;
});

const calcAge6 = years.map((el) => 2020 - el);
console.log(calcAge6);

// Default Parameter
const calcAge = (birthdayYear, currentYear = 2020) => currentYear - birthdayYear;
console.log(calcAge (1991, 2021));

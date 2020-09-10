/*
    JavaScript Conditional
    1. if, else if dan else
*/

let nilaiDebora = 80;

if (nilaiDebora > 60) 
{
  console.log("Selamat Anda LULUS");
} else if (nilaiDebora >= 60 && nilaiDebora <= 80) {
  console.log("GOOD JOB");
} else 
{
  console.log("MAAF COBA LAGII YAHH");
}

/*
    2.switch dan case
*/
let MataKuliah;
let hari = "senin";

switch (hari) {
  case "senin":
    MataKuliah = "SAD";
    break;
  case "selasa":
    MataKuliah = "Agama";
    break;
  case "rabu":
    MataKuliah = "SAD";
    break;
  case "kamis":
    MataKuliah = "Agama";
    break;
  case "jumat":
    MataKuliah = "FREE";
    break;
  
}

console.log(MataKuliah);
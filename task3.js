let printSegitiga = 5;

let checkPrintSegitiga = (printSegitiga>=1)?printSegitiga:"Harus Berupa Angka"
console.log("Input Baris Segitiga: " + checkPrintSegitiga + "\n")

for(let i=checkPrintSegitiga; i>=1 ; i--){
    let hasil = "";
    for(let j=1;j<=i;j++){
        hasil += j;
    }
    console.log(hasil);
}
// 10 Method JS

console.log("1. .shift()");
// 1. .shift()
let sayurHijau = ["Bayam","Kangkung", "Sawi"];
sayurHijau.shift();
console.log(sayurHijau);

console.log("\n 2. .unshift()");
// 2. .unshift()
let menuWarkop = ["Burjo","Indomie","Gorengan"];
menuWarkop.unshift("Magelangan");
console.log(menuWarkop);

console.log("\n 3. .pop()");
// 3.  .pop() 
let tahunLahir = [1901,1902,1903,1904];
tahunLahir.pop();
console.log(tahunLahir);

console.log("\n 4. .push()");
// 4. .push()
let arrBebas = ["Abc",123,[234,"Def"]];
arrBebas.push([456,"Ghi"]);
console.log(arrBebas);

console.log("\n 5. .toLowerCase()");
// 5. .toLowerCase() 
let namaBenda = "KIPAS ANGIN"
console.log(namaBenda.toLowerCase());

console.log("\n 6. .max()");
// 6. .max()
let nomorMaks = Math.max(1000,-90,-10000,4800);
console.log(nomorMaks);

console.log("\n 7. .search()");
// 7. .search()
let kata = "Tetanggaku Totoro";
let n = kata.search(/toto/i);
console.log(n);

if(n == -1){
    console.log("tidak ada totoro");
} else {
    console.log("ada totoro");
}

console.log("\n 8. .reverse()");
// 8. .reverse()
let kebalik = ["w","x","y","z"];
console.log(kebalik.reverse());

console.log("\n 9. .includes()");
// 9 .includes()
let judulLagu = ["World","Why Not","Winter"] 
let abc = judulLagu.includes("Why Not");
console.log(abc);

console.log("\n 10. .indexOf()");
// 10. indexOf()
let namaBuah = ["Strawberry", "Blueberry", "Acaiberry"];
console.log(namaBuah.indexOf("Blueberry"));

console.log("\n");
// Program Searching (Callback)
const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

function maxSearch(x){
    return this.filter((arrLim,i)=>{
        if(i<=(x-1)){
            return true;
        }
    })
}

function searchName(keyword, numb,cbFn) {
    arr = name;
    let findKey = arr.filter((arr)=> arr.toLowerCase().indexOf(keyword) !== -1);
    checkNumb = numb > 0 ? numb : false;

    if(typeof keyword == 'string' && (typeof checkNumb == "number" && checkNumb<=arr.length)){
        Array.prototype.limit=maxSearch;
        resultLimit = findKey.limit(checkNumb);
        cbFn(resultLimit);
    } else if (typeof keyword !== 'string' || typeof checkNumb !== "number"){
        cbFn("\nKeyword harus berupa huruf dan limit berupa angka!");
        cbFn("contoh: searchName(\"lexa\",3,showResult)\n");
    } else {
        cbFn("Tidak ditemukan nama mengandung kata " + "'" +keyword+"'\n");
    }

}

function showResult(kata){
    console.log(kata);
}

searchName("zz",33,showResult);
searchName("ca",2,showResult);
searchName(3,"zz",showResult);


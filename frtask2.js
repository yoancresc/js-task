function seleksiNilai(nilaiAwal,nilaiAkhir,dataArray){
    
    let checkAkhir = nilaiAkhir >= 1 ? nilaiAkhir : "Harus >= 1";
    let checkAwal = nilaiAwal >= 1 ? nilaiAwal : "Harus >= 1 !";


    let pjgArray = dataArray.length;

    if(isNaN(dataArray.join(""))){
        console.log("Array harus number!");
    } else {
        if(pjgArray > 5 && (checkAwal<checkAkhir)){
            console.log("Nilai Awal: " + checkAwal);
            console.log("Nilai Akhir: " + checkAkhir);
            console.log("Hasil Pengurutan: " + dataArray.sort((a,b)=>a-b));

            let abc = dataArray.filter(item => (checkAwal < item && item < checkAkhir));
            console.log(abc);

        } else if (pjgArray <=5){
            console.log("Array minimal ada 6 item!");
        } else {
            console.log("Data harus berupa number! \nNilai awal harus lebih kecil dari nilai akhir \ndan minimal array 6 item !");
        }
    }

}

seleksiNilai(8,1,[7,5,3,2,8,4]);
console.log('\n');
seleksiNilai(1,8,[7,5,3,2,8,4]);
console.log('\n');
seleksiNilai("abc",8,[7,5,3,2,8,4]);
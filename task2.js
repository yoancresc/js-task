//nilai un
const mtk = null;
const bhsIndo = 80;
const bhsIng = 70;
const mipa = 100;

// check nilai negatif / >100
const checkMtk = (mtk <=100 && mtk >= 0)&&(mtk!=null) ? mtk : "nilai harus rentang 0 - 100";
const checkBhsIndo = (bhsIndo <=100 && bhsIndo >= 0)&&(bhsIndo!=null) ? bhsIndo : "nilai harus rentang 0 - 100";
const checkBhsIng = (bhsIng <=100 && bhsIng >= 0)&&(bhsIng!=null) ? bhsIng : "nilai harus rentang 0 - 100";
const checkMipa = (mipa <=100 && mipa >= 0)&&(mipa!=null) ? mipa : "nilai harus rentang 0 - 100"; 

// tampilkan nilai
console.log("Matematika : " + checkMtk);
console.log("B. Indonesia : " + checkBhsIndo);
console.log("B. Inggris : " + checkBhsIng);
console.log("Mipa : " + checkMipa);

//jumlah dan rata-rata
sumNilai = checkMtk + checkBhsIndo + checkBhsIng + checkMipa;
avgNilaiUN = sumNilai/4;

    if(avgNilaiUN<60){
        console.log("\nNilai rata-rata: " + avgNilaiUN + "\nGrade : E" );
    } else if (avgNilaiUN<70){
        console.log("\nNilai rata-rata: " + avgNilaiUN + "\nGrade : D" );
    } else if (avgNilaiUN<80){
        console.log("\nNilai rata-rata: " + avgNilaiUN + "\nGrade : C");
    } else if (avgNilaiUN<90){
        console.log("\nNilai rata-rata: " + avgNilaiUN + "\nGrade : B");
    } else if (avgNilaiUN<=100){ 
        console.log("\nNilai rata-rata: " + avgNilaiUN + "\nGrade : A");
    } else {
        console.log("\nCek kembali nilai anda");
    }
// pinjam buku sekolah

function pinjamBuku(namaAnggota){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof namaAnggota == "string"){
                resolve({peminjam: namaAnggota})
            } else {
                reject(new Error("Nama harus berupa string!"));
            };  
        },2000);
    })
}

function buku(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["Majalah Mombi","Kalkulus II","Meteor Garden"]);
        },2000);
    });
}

async function showPinjaman(){
    try{
        let shPeminjam = await pinjamBuku('Yoan');
        let shBuku = await buku();
        console.log(shBuku);  
    } catch(error) {
        console.log("Data peminjaman tidak ditemukan!");
    }
}

showPinjaman();
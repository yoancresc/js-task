const volumeBalok = (panjang,lebar,tinggi) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let checkPanjang = panjang > 0 ? panjang : false;
            let checkLebar = lebar > 0 ? lebar : false;
            let checkTinggi = tinggi > 0 ? tinggi : false;
            
            volume = checkPanjang*checkLebar*checkTinggi; 

            if(volume != false){
                resolve("Volume balok : " + volume);
            } else {
                reject(new Error('Panjang, lebar, dan tinggi harus angka dan > 0 !'));
            }

        },2000)
    })
}

volumeBalok("a",4,5)
    .then(volumeB=>{
        console.log(volumeB);
    })
    .catch(err=>{
        console.log(err.message);
    })

async function showVolume(){
    try{
        let shHasil = await volumeBalok(3,4,5);
        console.log(shHasil);
    } catch(err) {
        console.log(err.message);
    }
}

showVolume();
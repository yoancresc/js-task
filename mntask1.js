const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat'];
            let cek = dataDay.find((item)=>{
                return item === day;
            })
            if(cek){
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        },3000);
    });
}

// // then-catch
// cekHariKerja('SENIN'.toLowerCase())
//     .then(cekHari => {
//         console.log(cekHari + " adalah hari kerja.");
//     })
//     .catch(err=>{
//         console.log(err.message);
//     })
/*pemakaian then berfungsi untuk mereturn promise yang 
terselesaikan pada cekHariKerja dengan memakai callback.
di sini yang dicallback adalah resolve(cek) yang merupakan
successCallback. catch berfungsi untuk menangkap failureCallback 
yaitu Error ketika hari yang dicari tidak ditemukan dalam
dataDay.
*/

//try-catch
async function displayHari(hari){
    try{
        hariLower = hari.toLowerCase();
        const cekHari = await cekHariKerja(hariLower);
        
        if(hariLower == cekHari){
            console.log(hariLower + " adalah hari kerja.");
        }

    } catch(err){
        console.log(err.message);
    }
}

displayHari('MINGGU');

/*try-catch disini menggunakan async karena
function ini akan mereturn promise yang ada di cekHariKerja.
Await digunakan supaya fungsi dapat menunggu promise. 
try berisikan statement untuk mengecek apakah inputan hari
terdapat pada array dataDay. jika iya akan dicetak hari tersebut,
jika tidak, selanjutnya error di-catch sesuai dengan isi message
yang ada di function cekHariKerja.

*/
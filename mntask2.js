const getMonth = (callback) => {
    setTimeout(()=>{
        let error = false;
        let month = ["January","February","March","April","May","June",
                     "July","August","September","October","November","December"];
        
        if(!error){
            callback(null,month);
        } else {
            callback(new Error('Sorry Data Not Found',[]));
        }
    },3000)
}

getMonth((gotError,bulan)=>{

    if(gotError == true){
        console.log(gotError);
    } else {
          
        cetakBulan = bulan.map(month => {
            return month;
        });
        
        console.log(cetakBulan);
    }
})
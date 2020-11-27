const linkAPI = 'https://jsonplaceholder.typicode.com/users';
const fetch = require('node-fetch');

async function getNama(){
    try{
        const response = await fetch(linkAPI);
        const data = await response.json();
        const result = data.filter(obj => {
            console.log(obj.name);
        });
    } catch {
        console.log("tidak dapat menampilkan nama");
    }
}

getNama();

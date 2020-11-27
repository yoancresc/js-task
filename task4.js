let data = {
    id : 1,
    name : "Leanne Graham",
    username : "Bret",
    email : "sincere@april.biz",
    address : {
        street : "Kulas Light",
        suite : "Apt. 556",
        city : "Gwenborough",
        zipcode : "92998-3874",
    },
    phone : "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let dataUpdate  = {
    ...data, 
    name:"Yoan Maria V", 
    email:"ymariav.crsc@gmail.com",
    hobby:["watching youtube","learning language"]
}

console.log(dataUpdate);

let{street} = data.address;
let{city} = data.address;

console.log({street});
console.log({city});

console.log({street,city});